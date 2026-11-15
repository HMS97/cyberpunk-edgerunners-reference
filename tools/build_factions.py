"""Merge the three researched parts into factions_kb.json + factions_kb.md, adding cross-links to the other KBs.
USAGE: python3 tools/build_factions.py <parts_dir>   (parts_dir holds gangs.json, orgs.json, jobs.json)"""
import json, sys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
parts = Path(sys.argv[1])
entries = []
for p in ("gangs", "orgs", "jobs"):
    entries += json.loads((parts / f"{p}.json").read_text())

ck = json.loads((ROOT / "edgerunners_character_kb.json").read_text())
sk = json.loads((ROOT / "edgerunners_scene_kb.json").read_text())
icons = json.loads((ROOT / "cyberware_icons.json").read_text())
CLASS_IDS = {c["id"] for c in ck["class_styles"]}
sg = json.loads((ROOT / "style_guides.json").read_text())
A1, A2 = sg["anime"], sg["anime_s2"]
EVID = {"source": "source", "observed": "observed"}  # everything else → inferred

# cyberware arm styles by brand prefix
styles = next(s for s in icons["sections"] if s["key"] == "Styles")["items"]
STYLE_PREFIX = {"aldecaldos": "Aldecaldos", "arasaka": "Arasaka", "barghest": "Barghest", "kang_tao": "Kang Tao",
                "militech": "Militech", "moxes": "Mox", "sixth_street": "Sixth Street", "tyger_claws": "Tyger Claws",
                "valentinos": "Valentinos", "voodoo_boys": "Voodoo Boys", "wraiths": "Wraiths"}

def mentions(text, e):
    names = [e["zh"].split("（")[0], e["en"]]
    names += {"moxes": ["Mox", "莫克斯"], "sixth_street": ["6th Street", "第六街"], "tyger_claws": ["虎爪"],
              "maelstrom": ["漩涡"], "valentinos": ["瓦伦蒂诺"], "voodoo_boys": ["巫毒"], "animals": ["动物帮"],
              "arasaka": ["荒坂"], "militech": ["军用科技"], "trauma_team": ["创伤小组"], "ncpd": ["NCPD", "警察"],
              "aldecaldos": ["阿德卡多", "游牧"], "scavengers": ["拾荒者"], "wraiths": ["恶灵"]}.get(e["id"], [])
    return any(n and n in text for n in names)

for e in entries:
    e["evidence"] = {k: EVID.get(v, "inferred") for k, v in e.get("evidence", {}).items()}
    e["class_style"] = [c for c in e.get("class_style", []) if c in CLASS_IDS]
    pre = STYLE_PREFIX.get(e["id"])
    e["cyberware_styles"] = [{"t": i["t"], "img": i["img"], "url": i["url"]} for i in styles if pre and i["t"].startswith(pre + " ")]
    e["district_ids"] = [d["id"] for d in sk["districts"] if mentions(json.dumps(d, ensure_ascii=False), e)]
    e["location_ids"] = [l["id"] for l in sk["locations"] if mentions(json.dumps({k: l.get(k) for k in ("zh", "en", "story", "visual")}, ensure_ascii=False), e)]
    for i in e.get("images", []):
        assert i["style"] in ("game", "anime", "anime_s2"), (e["id"], i)
    # Season 2 anime prompt set for groups that appear in Edgerunners 2 (same description, S2 style keywords)
    in_s2 = "EDGEII" in e.get("appears_in", []) or any(i["style"] == "anime_s2" for i in e.get("images", []))
    if in_s2:
        for bucket in ("prompts", "scene_prompts"):
            a = e.get(bucket, {}).get("anime")
            if not a: continue
            def swap(text, old, new):
                return new + text[len(old):] if text.startswith(old) else new + ("，" if old.endswith("区") else ", ") + text
            s2 = {"en": swap(a["en"], A1["keywords_en"], A2["keywords_en"]),
                  "zh": swap(a["zh"], A1["keywords_zh"], A2["keywords_zh"])}
            if bucket == "prompts":
                s2.update(negative_en=A2["negative_en"], negative_zh=A2["negative_zh"])
            e[bucket]["anime_s2"] = s2
    # an anime appearance without any anime still: say so
    if any(x in e.get("appears_in", []) for x in ("EDGE", "EDGEII")) and not any(i["style"] != "game" for i in e.get("images", [])):
        note = "未找到动画剧照，动画提示词只来自风格关键词。"
        if note not in e.setdefault("gaps", []): e["gaps"].append(note)

KINDS = [{"id": "gang", "zh": "帮派", "en": "Gangs"}, {"id": "nomad", "zh": "游牧民", "en": "Nomads"},
         {"id": "corp", "zh": "公司", "en": "Corporations"}, {"id": "institution", "zh": "机构", "en": "Institutions"},
         {"id": "job", "zh": "打工的", "en": "Jobs"}]
kb = {
    "meta": {
        "title": "夜之城势力与职业 · 生成知识库", "version": "1.0", "built": "2026-11-15",
        "how_to_use": "按 kind 分为帮派、游牧民、公司、机构和职业。每项有穿搭、配色、标志、义体、成员类型、地盘与场景，以及游戏风和第一季动画风的人物提示词（prompts）和场景提示词（scene_prompts）。cyberware_styles 是游戏里该势力的义体外观款式（来自 cyberware_icons.json）；district_ids / location_ids 链接到 edgerunners_scene_kb.json；class_style 对应角色知识库的四种阶层风格。",
        "evidence_note": "evidence：source = Wiki 文字有记载；observed = 看图归纳；inferred = 推断或设计取值（Wiki 未记载，例如多数配色色值），使用前请自行判断。",
        "sources": "资料来自 cyberpunk.fandom.com（CC BY-SA）；调研由 AI 子代理完成，图片地址均经 Wiki API 核实存在。",
        "anime_note": "只有剧中确实出场、且 Wiki 有对应截图时才标 anime / anime_s2；没有在动画里出场的势力不拿游戏图冒充动画参考。",
    },
    "kinds": KINDS,
    "entries": entries,
}
(ROOT / "factions_kb.json").write_text(json.dumps(kb, ensure_ascii=False, indent=2))

EVZ = {"source": "出处", "observed": "观察", "inferred": "推断"}
SL = {"game": "游戏", "anime": "第一季动画", "anime_s2": "第二季动画"}
L = [f"# {kb['meta']['title']}\n", kb["meta"]["how_to_use"] + "\n", f"> {kb['meta']['evidence_note']}\n", f"> {kb['meta']['anime_note']}\n"]
for k in KINDS:
    es = [e for e in entries if e["kind"] == k["id"]]
    if not es: continue
    L.append(f"## {k['zh']}（{k['en']}）\n")
    for e in es:
        ev = e.get("evidence", {})
        tag = lambda f: f"（{EVZ.get(ev.get(f), '')}）" if ev.get(f) else ""
        L += [f"### {e['zh']}（{e['en']}）", e["summary"], ""]
        if e.get("appears_in"): L.append(f"- 出场：{'、'.join(e['appears_in'])}")
        for t in e.get("territory", []): L.append(f"- 地盘：{t.get('zh','')}{' · '+t['place'] if t.get('place') else ''}")
        for f, lab in [("fashion", "穿搭"), ("emblem", "标志"), ("cyberware", "义体"), ("gear", "装备"), ("workplace", "工作场所"), ("tools", "工具")]:
            if e.get(f): L.append(f"- {lab}{tag(f)}：{e[f]}")
        if e.get("colors"): L.append(f"- 配色{tag('colors')}：" + " ".join(f"`{c}`" for c in e["colors"]))
        for m in e.get("member_types", []): L.append(f"- 成员 · {m['zh']}：{m['look']}")
        if e.get("cyberware_styles"): L.append("- 游戏义体款式：" + "、".join(i["t"] for i in e["cyberware_styles"]))
        sc = e.get("scene", {})
        if sc: L.append(f"- 场景：{sc.get('zh','')}（光线：{sc.get('lighting','')}）")
        for s, p in e.get("prompts", {}).items():
            L += [f"- **{SL[s]}人物提示词**：`{p['en']}`", f"  - 负面词：`{p['negative_en']}`"]
        for s, p in e.get("scene_prompts", {}).items():
            L.append(f"- **{SL[s]}场景提示词**：`{p['en']}`")
        L.append("- 参考图：" + "，".join(f"[{i['type']}]({i['full']})" for i in e.get("images", [])))
        if e.get("gaps"): L.append("- 资料缺口：" + "；".join(e["gaps"]))
        L.append("")
(ROOT / "factions_kb.md").write_text("\n".join(L))
print(len(entries), "entries;", sum(len(e.get("images", [])) for e in entries), "images;",
      sum(1 for e in entries if e["cyberware_styles"]), "with cyberware styles;",
      sum(1 for e in entries if e["district_ids"]), "with district links")
