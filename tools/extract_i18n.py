"""Extract every Chinese UI/content string from the knowledge-base JSONs that the English site needs.

USAGE: python3 tools/extract_i18n.py            # writes i18n/zh_strings.json and reports which are missing from i18n/en.json
Chinese prompt text (keys zh / prompt_zh / keywords_zh / negative_zh / body_zh) stays Chinese on purpose and is skipped.
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FILES = ["edgerunners_character_kb.json", "edgerunners_scene_kb.json", "edgerunners_s2_scene_kb.json",
         "style_guides.json", "cyberware_icons.json", "action_style_guides.json"]
SKIP = {"zh", "prompt_zh", "keywords_zh", "negative_zh", "body_zh"}
CJK = re.compile(r"[一-鿿]")


def walk(o, key, out):
    if isinstance(o, dict):
        for k, v in o.items():
            walk(v, k, out)
    elif isinstance(o, list):
        for v in o:
            walk(v, key, out)
    elif isinstance(o, str) and CJK.search(o) and key not in SKIP:
        out.setdefault(o, key)


def main():
    found = {}
    for f in FILES:
        p = ROOT / f
        if p.exists():
            walk(json.loads(p.read_text()), None, found)
    strings = sorted(found)
    (ROOT / "i18n").mkdir(exist_ok=True)
    (ROOT / "i18n/zh_strings.json").write_text(json.dumps(strings, ensure_ascii=False, indent=0))
    en_path = ROOT / "i18n/en.json"
    en = json.loads(en_path.read_text()) if en_path.exists() else {}
    missing = [s for s in strings if s not in en]
    print(f"{len(strings)} strings; {len(strings) - len(missing)} translated; {len(missing)} missing")


if __name__ == "__main__":
    main()
