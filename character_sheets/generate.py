"""Generate character design sheets with the OpenAI image API.

USAGE:
  python3 character_sheets/generate.py --only david          # one sheet first
  python3 character_sheets/generate.py                        # all sheets not yet generated
  python3 character_sheets/generate.py --only lucy --force    # regenerate one
  python3 character_sheets/generate.py --model gpt-image-2.6-sunburst --quality high

The key is read from OPENAI_API_KEY, or from a .env file next to this folder
(line: OPENAI_API_KEY=sk-...). The key is never printed.
"""
import argparse
import base64
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent


def load_key():
    key = os.environ.get("OPENAI_API_KEY", "").strip()
    if key:
        return key
    for env in (HERE.parent / ".env", HERE / ".env"):
        if env.exists():
            for line in env.read_text().splitlines():
                line = line.strip().removeprefix("export ").strip()
                if line.startswith("OPENAI_API_KEY="):
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    sys.exit("No OPENAI_API_KEY found (env var or .env).")


def generate(key, model, prompt, size, quality):
    body = json.dumps({"model": model, "prompt": prompt, "size": size, "quality": quality, "n": 1}).encode()
    req = urllib.request.Request(
        "https://api.openai.com/v1/images/generations",
        data=body,
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            data = json.load(r)
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"HTTP {e.code}: {e.read().decode(errors='replace')[:600]}") from None
    item = data["data"][0]
    if item.get("b64_json"):
        return base64.b64decode(item["b64_json"])
    with urllib.request.urlopen(item["url"], timeout=120) as r:
        return r.read()


REF_LEAD = (
    "The attached images are the official reference designs of ONE character. Redraw exactly this character: "
    "copy the face shape, hairstyle silhouette, hair color, eye color, outfit, colors and cyberware from the references "
    "as faithfully as possible. Do not redesign or reinterpret the character. Ignore any logos, text, signatures "
    "and backgrounds in the references.\n\n"
)


def ref_pngs(names):
    """Find local reference images (assets/wiki) and convert them to PNG bytes."""
    from io import BytesIO
    from PIL import Image
    out = []
    for n in names:
        hits = sorted((HERE.parent / "assets" / "wiki").glob(n + "*"))
        if not hits:
            print(f"  (no local ref for {n})")
            continue
        im = Image.open(hits[0]).convert("RGB")
        im.thumbnail((1024, 1024))
        buf = BytesIO()
        im.save(buf, "PNG")
        out.append((hits[0].stem + ".png", buf.getvalue()))
    return out


def edit_with_refs(key, model, prompt, size, quality, refs):
    import uuid
    boundary = uuid.uuid4().hex
    parts = []
    for k, v in {"model": model, "prompt": REF_LEAD + prompt, "size": size, "quality": quality, "n": "1"}.items():
        parts.append(f'--{boundary}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode())
    for fname, data in refs:
        parts.append(
            f'--{boundary}\r\nContent-Disposition: form-data; name="image[]"; filename="{fname}"\r\n'
            f"Content-Type: image/png\r\n\r\n".encode() + data + b"\r\n"
        )
    parts.append(f"--{boundary}--\r\n".encode())
    req = urllib.request.Request(
        "https://api.openai.com/v1/images/edits",
        data=b"".join(parts),
        headers={"Authorization": f"Bearer {key}", "Content-Type": f"multipart/form-data; boundary={boundary}"},
    )
    try:
        with urllib.request.urlopen(req, timeout=900) as r:
            data = json.load(r)
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"HTTP {e.code}: {e.read().decode(errors='replace')[:600]}") from None
    item = data["data"][0]
    if item.get("b64_json"):
        return base64.b64decode(item["b64_json"])
    with urllib.request.urlopen(item["url"], timeout=120) as r:
        return r.read()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", nargs="*", help="character ids, e.g. david lucy")
    ap.add_argument("--force", action="store_true", help="regenerate even if the PNG exists")
    ap.add_argument("--model", default="gpt-image-2.6-sunburst")
    ap.add_argument("--size", default="1536x1024")
    ap.add_argument("--quality", default="high")
    ap.add_argument("--no-refs", action="store_true", help="text-only generation (ignore reference images)")
    a = ap.parse_args()

    key = load_key()
    prompts = json.loads((HERE / "prompts.json").read_text())
    if a.only:
        prompts = [p for p in prompts if p["id"] in a.only]
    ok, failed = [], []
    for p in prompts:
        out = HERE / p["file"]
        if out.exists() and not a.force:
            print(f"skip {p['id']} (exists)")
            continue
        print(f"generating {p['id']} ...", flush=True)
        try:
            refs = [] if a.no_refs else ref_pngs(p.get("refs", []))
            if refs:
                print(f"  using {len(refs)} reference images", flush=True)
                img = edit_with_refs(key, a.model, p["prompt"], a.size, a.quality, refs)
            else:
                img = generate(key, a.model, p["prompt"], a.size, a.quality)
            out.write_bytes(img)
            ok.append(p["id"])
            print(f"  saved {out.name}", flush=True)
        except Exception as e:  # keep going with the rest
            failed.append(p["id"])
            print(f"  FAILED {p['id']}: {e}", flush=True)
    print(json.dumps({"ok": ok, "failed": failed}))


if __name__ == "__main__":
    main()
