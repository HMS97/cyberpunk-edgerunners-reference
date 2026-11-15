# Cyberpunk: Edgerunners Reference · 边缘行者知识库

A fan-made design reference for *Cyberpunk: Edgerunners* (season 1, 2022) and *Cyberpunk: Edgerunners 2* (2026), plus the *Cyberpunk 2077* game look: characters, cyberware, locations and three art styles, each with ready-to-copy image-generation prompts and negative prompts.

《赛博朋克：边缘行者》第一、二季和《赛博朋克 2077》游戏的设计参考：角色设定、义体外形、场景地点、三套画风（游戏 / 第一季动画 / 第二季动画），每项都配有可直接复制的出图提示词和负面词。

**Website:** https://hms97.github.io/cyberpunk-edgerunners-reference/

## What's inside / 内容

| Path | 内容 |
|---|---|
| `site/` | 网站：首页、画风、角色、场景、义体 5 个页面，直接读取下面的 JSON |
| `edgerunners_character_kb.json` / `.md` | 角色知识库：21 个角色（第一季 9、第二季 12），外观、义体、配色、参考图、动画和游戏两套提示词 |
| `edgerunners_scene_kb.json` / `.md` | 第一季场景：地点、夜之城大区、情绪主色、每集主视觉 |
| `edgerunners_s2_scene_kb.json` / `.md` | 第二季场景：地点、每集、光照 |
| `style_guides.json` / `.md` | 三套画风规范、对比表、互转规则、出处 |
| `cyberware_icons.json` | 177 个游戏义体图标 |
| `character_sheets/` | 21 张 AI 生成的角色设定图，以及生成脚本 `generate.py` 和提示词 `prompts.json` |
| `assets/wiki/` | 从 Cyberpunk Wiki 保存的参考图本地副本；`assets/manifest.json` 是 Wiki 地址到本地文件的对照表 |
| `legacy_board.html` | 旧版单页（已被 `site/` 取代） |

## Run locally / 本地打开

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765/site/index.html (the pages load JSON with `fetch`, so opening the files directly with `file://` will not work).

## Regenerate a character sheet / 重新生成设定图

```bash
OPENAI_API_KEY=... python3 character_sheets/generate.py --only lucy --force
```

Uses the OpenAI image API (`gpt-image-2.6-sunburst` by default) with the character's reference images from `assets/wiki/`.

## Copyright / 版权声明

- 《赛博朋克 2077》《赛博朋克：边缘行者》的角色、名称和所有原作图片版权归 **CD PROJEKT RED** 与 **Studio Trigger** 所有。本项目是非商业的粉丝参考资料，仅供个人学习和设计参考。
- 参考图和文字资料来自 [Cyberpunk Wiki](https://cyberpunk.fandom.com)（CC BY-SA）及文中注明的访谈和报道。
- `character_sheets/` 里的设定图由 AI 根据原作参考图生成，不是官方设定。
- **侵权必删**：如果你是版权方并认为本仓库内容侵犯了你的权利，请通过 [GitHub Issues](https://github.com/HMS97/cyberpunk-edgerunners-reference/issues) 联系，我会尽快删除相关内容。

All characters, names and original images belong to CD PROJEKT RED and Studio Trigger. This is a non-commercial fan reference. **Rights holders: open an issue and the material will be removed promptly.**
