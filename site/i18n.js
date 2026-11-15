/* 边缘行者知识库 · 语言：UI 字典 t()、内容翻译 tr()、语言状态 */
(function () {
  'use strict';

  /* ---------- UI 字典：{ key: { zh, en } }，{name} 为变量 ---------- */
  var DICT = {
    /* 页面标题与描述 */
    'title.index': { zh: '边缘行者知识库 · 赛博朋克边缘行者设计参考', en: 'Edgerunners KB · Cyberpunk: Edgerunners Design Reference' },
    'title.styles': { zh: '画风 · 边缘行者知识库', en: 'Styles · Edgerunners KB' },
    'title.actions': { zh: '动作 · 边缘行者知识库', en: 'Motion · Edgerunners KB' },
    'title.characters': { zh: '角色 · 边缘行者知识库', en: 'Characters · Edgerunners KB' },
    'title.character': { zh: '{name} · 角色 · 边缘行者知识库', en: '{name} · Characters · Edgerunners KB' },
    'title.scenes': { zh: '场景 · 边缘行者知识库', en: 'Scenes · Edgerunners KB' },
    'title.factions': { zh: '势力 · 边缘行者知识库', en: 'Factions · Edgerunners KB' },
    'title.faction': { zh: '{name} · 势力 · 边缘行者知识库', en: '{name} · Factions · Edgerunners KB' },
    'title.cyberware': { zh: '义体 · 边缘行者知识库', en: 'Cyberware · Edgerunners KB' },
    'meta.desc': { zh: '赛博朋克：边缘行者（第一、二季）角色、场景、画风与义体的设计参考知识库。', en: 'A design reference knowledge base for Cyberpunk: Edgerunners (seasons 1 and 2): characters, scenes, art styles and cyberware.' },
    'loading': { zh: '正在加载数据…', en: 'Loading data…' },
    'fail': { zh: '数据加载失败：{msg}。请通过本地 HTTP 服务打开本页面（例如 python3 -m http.server）。', en: 'Failed to load data: {msg}. Open this page through a local HTTP server (e.g. python3 -m http.server).' },

    /* 顶栏 / 页脚 */
    'brand': { zh: '边缘行者知识库', en: 'Edgerunners KB' },
    'nav.aria': { zh: '主导航', en: 'Main navigation' },
    'nav.index': { zh: '首页', en: 'Home' },
    'nav.styles': { zh: '画风', en: 'Styles' },
    'nav.actions': { zh: '动作', en: 'Motion' },
    'nav.characters': { zh: '角色', en: 'Characters' },
    'nav.scenes': { zh: '场景', en: 'Scenes' },
    'nav.factions': { zh: '势力', en: 'Factions' },
    'nav.cyberware': { zh: '义体', en: 'Cyberware' },
    'tg.season': { zh: '季', en: 'Season' },
    'tg.style': { zh: '风格', en: 'Style' },
    'tg.lang': { zh: 'Language / 语言', en: 'Language / 语言' },
    'opt.all': { zh: '全部', en: 'All' },
    'opt.s1': { zh: '第一季', en: 'S1' },
    'opt.s2': { zh: '第二季', en: 'S2' },
    'opt.anime': { zh: '动画', en: 'Anime' },
    'opt.game': { zh: '游戏', en: 'Game' },
    'skip': { zh: '跳到正文', en: 'Skip to content' },
    'foot.a': { zh: '角色与图片版权归 CD PROJEKT RED / Studio Trigger，本站为非商业粉丝参考资料，仅供个人设计参考。数据来源：', en: 'Characters and images © CD PROJEKT RED / Studio Trigger. This is a non-commercial fan reference, for personal design use only. Data source: ' },
    'foot.b': { zh: '。侵权必删：版权方请通过 ', en: '. Takedown on request: rights holders can contact us via ' },
    'foot.c': { zh: ' 联系，相关内容会尽快删除。', en: ' and the content will be removed promptly.' },

    /* 通用组件 */
    'img.none': { zh: '暂无本地图片', en: 'No local image' },
    'img.fail': { zh: '图片加载失败', en: 'Image failed to load' },
    'style.anime': { zh: '动画', en: 'Anime' },
    'style.anime_s2': { zh: 'S2动画', en: 'S2 anime' },
    'style.game': { zh: '游戏', en: 'Game' },
    'set.anime': { zh: '第一季动画', en: 'S1 anime' },
    'set.anime_s2': { zh: '第二季动画', en: 'S2 anime' },
    'set.game': { zh: '游戏', en: 'Game' },
    'set.plain': { zh: '纯描述', en: 'Plain description' },
    'copy': { zh: '复制', en: 'Copy' },
    'copy.aria': { zh: '复制文本', en: 'Copy text' },
    'copied': { zh: '已复制', en: 'Copied' },
    'copy.fail': { zh: '复制失败', en: 'Copy failed' },
    'p.prompt': { zh: '提示词', en: 'Prompt' },
    'p.en': { zh: 'EN 提示词', en: 'English prompt' },
    'p.zh': { zh: '中文提示词', en: 'Chinese prompt' },
    'p.negEn': { zh: '负面词 EN', en: 'Negative (English)' },
    'p.negZh': { zh: '负面词 中文', en: 'Negative (Chinese)' },
    'lbl.en': { zh: 'EN', en: 'English' },
    'lbl.zh': { zh: '中文', en: 'Chinese' },
    'none': { zh: '无', en: 'None' },
    'tabs.aria': { zh: '标签页', en: 'Tabs' },
    'prompts.none': { zh: '没有提示词数据。', en: 'No prompt data.' },
    'prompts.aria': { zh: '提示词集', en: 'Prompt sets' },
    'gallery.none': { zh: '暂无图片。', en: 'No images yet.' },
    'gallery.zoom': { zh: '放大查看：{x}', en: 'Enlarge: {x}' },
    'gallery.img': { zh: '图片', en: 'image' },
    'wiki.file': { zh: 'Wiki 文件页', en: 'Wiki file page' },
    'wiki.page': { zh: 'Wiki 页面', en: 'Wiki page' },
    'source': { zh: '来源', en: 'Source' },
    'lb.close': { zh: '关闭 ✕', en: 'Close ✕' },
    'lb.closeAria': { zh: '关闭大图', en: 'Close image' },
    'lb.aria': { zh: '大图', en: 'Image viewer' },
    'cur.style': { zh: '当前风格', en: 'Current style' },
    'ev.source': { zh: '出处', en: 'Sourced' },
    'ev.observed': { zh: '观察', en: 'Observed' },
    'ev.inferred': { zh: '推断', en: 'Inferred' },
    'list.sep': { zh: '、', en: ', ' },
    'colon': { zh: '：', en: ': ' },

    /* 风格全名 */
    'sty.game': { zh: '游戏风', en: 'Game style' },
    'sty.anime': { zh: '第一季动画', en: 'Season 1 anime' },
    'sty.anime_s2': { zh: '第二季动画', en: 'Season 2 anime' },

    /* 首页 */
    'home.collage': { zh: '角色设定图拼贴', en: 'Character design sheet collage' },
    'home.sheetAria': { zh: '{name} 设定图', en: '{name} design sheet' },
    'home.sheetAlt': { zh: '{name} 角色设定图', en: '{name} character design sheet' },
    'home.title': { zh: '边缘行者知识库', en: 'Edgerunners Reference KB' },
    'home.lede': { zh: '给画师和 AI 出图用的《赛博朋克：边缘行者》设计参考：第一、二季角色设定、场景地点、三套画风和义体外形，全部配好分风格提示词与负面词。', en: 'A Cyberpunk: Edgerunners design reference for artists and AI image generation: season 1 and 2 character designs, locations, three art styles and cyberware looks, each with per-style prompts and negative prompts.' },
    'home.note': { zh: '顶部的「季」和「风格」开关在所有页面通用：决定显示哪些条目、先显示哪种画风的图、复制哪一套提示词。', en: 'The Season and Style toggles at the top apply to every page: they decide which entries are shown, which style\'s images come first, and which prompt set you copy.' },
    'home.collageCap': { zh: '拼贴图为角色设定图 · AI 生成（gpt-image-2.6-sunburst）', en: 'Collage of character design sheets · AI-generated (gpt-image-2.6-sunburst)' },
    'home.go': { zh: '进入{x} →', en: 'Open {x} →' },
    'home.refAlt': { zh: '{x}参考图', en: '{x} reference' },
    'home.sections': { zh: '六个分区', en: 'Six sections' },
    'home.c1.title': { zh: '套画风', en: 'art styles' },
    'home.c1.desc': { zh: '游戏风、第一季动画、第二季动画的规范、关键词、负面词、对比表和互转规则。', en: 'Specs, keywords, negative prompts, comparison table and conversion rules for the game style, season 1 anime and season 2 anime.' },
    'home.c2.title': { zh: '位角色', en: 'characters' },
    'home.c2.desc': { zh: '{season}主要角色：设定图、图集、义体、配色和分风格提示词。', en: 'Main characters from {season}: design sheets, galleries, cyberware, palettes and per-style prompts.' },
    'home.c3.title': { zh: '个场景地点', en: 'locations' },
    'home.c3.desc': { zh: '另有 {d} 个夜之城大区、{e} 集剧集资料与场景生成模板。', en: 'Plus {d} Night City districts, {e} episode entries and scene generation templates.' },
    'home.c4.title': { zh: '个义体图标', en: 'cyberware icons' },
    'home.c4.desc': { zh: '{v} 条义体外形词典 + {s} 类《赛博朋克 2077》义体图标。', en: '{v} cyberware look entries + {s} categories of Cyberpunk 2077 cyberware icons.' },
    'home.seasonAll': { zh: '第一、二季', en: 'seasons 1 and 2' },
    'home.season1': { zh: '第一季', en: 'season 1' },
    'home.season2': { zh: '第二季', en: 'season 2' },
    'home.band': { zh: '画风一览', en: 'Styles at a glance' },
    'home.bandNote': { zh: '三套画风不能混用。没有同一主体的三风格对照图，下面各取两张该风格的参考图。', en: 'Never mix the three styles. There is no side-by-side of one subject in all three, so here are two reference images per style.' },
    'home.fullSpec': { zh: '看完整规范 →', en: 'Full style guide →' },
    'home.how': { zh: '怎么用', en: 'How to use' },
    'home.how1': { zh: '在顶栏选好「风格」：动画（第一季条目用第一季动画，第二季条目用第二季动画）或游戏（赛博朋克 2077 写实风）。需要时再用「季」筛选。', en: 'Pick a Style in the top bar: Anime (season 1 entries use the season 1 anime style, season 2 entries the season 2 anime style) or Game (Cyberpunk 2077 realism). Filter by Season if needed.' },
    'home.how2': { zh: '去「画风」页看这一套的关键词、负面词和参考图，确认不要和另一套混用。', en: 'Check that style\'s keywords, negative prompts and references on the Styles page, so you don\'t mix it with another style.' },
    'home.how3': { zh: '在「角色」或「场景」页选一个条目，提示词面板会自动切到当前风格对应的那一套。', en: 'Pick an entry on the Characters or Scenes page; its prompt panel opens the set that matches the current style.' },
    'home.how4': { zh: '点「复制」拿到 EN 或中文提示词，再复制同一套的负面词一起使用。原创角色用角色页底部的「原创角色生成」模板。', en: 'Click Copy to grab the English or Chinese prompt, then copy the negative prompt from the same set. For original characters, use the OC builder templates at the bottom of the Characters page.' },
    'home.dl': { zh: '下载数据', en: 'Download data' },
    'home.dlNote': { zh: '原始数据文件。JSON 里的图片地址是 Wiki 链接，本站通过 assets/manifest.json 映射到本地副本。', en: 'Raw data files. Image URLs in the JSON point to the Wiki; this site maps them to local copies via assets/manifest.json.' },
    'file.charJson': { zh: '角色知识库（JSON）', en: 'Character KB (JSON)' },
    'file.charMd': { zh: '角色知识库（Markdown）', en: 'Character KB (Markdown)' },
    'file.s1Json': { zh: '第一季场景知识库（JSON）', en: 'Season 1 scene KB (JSON)' },
    'file.s1Md': { zh: '第一季场景知识库（Markdown）', en: 'Season 1 scene KB (Markdown)' },
    'file.s2Json': { zh: '第二季场景知识库（JSON）', en: 'Season 2 scene KB (JSON)' },
    'file.s2Md': { zh: '第二季场景知识库（Markdown）', en: 'Season 2 scene KB (Markdown)' },
    'file.styJson': { zh: '画风规范（JSON）', en: 'Style guides (JSON)' },
    'file.styMd': { zh: '画风规范（Markdown）', en: 'Style guides (Markdown)' },
    'file.icJson': { zh: '游戏义体图标索引（JSON）', en: 'Game cyberware icon index (JSON)' },

    /* 画风页 */
    'sty.h1': { zh: '三套画风', en: 'Three Art Styles' },
    'sty.evNote': { zh: '（下文用 ', en: ' (marked below as ' },
    'sty.evNote2': { zh: ' 标记）', en: ')' },
    'sty.credits': { zh: '制作', en: 'Credits' },
    'sty.palette': { zh: '色板', en: 'Palette' },
    'sty.keywords': { zh: '关键词', en: 'Keywords' },
    'sty.negative': { zh: '负面词', en: 'Negative prompt' },
    'sty.refs': { zh: '参考图', en: 'References' },
    'sty.sections': { zh: '规范细则（{n}）', en: 'Style rules ({n})' },
    'sty.presets': { zh: '光照预设（{n}）', en: 'Lighting presets ({n})' },
    'sty.lrules': { zh: '光照规则（{n}）', en: 'Lighting rules ({n})' },
    'sty.vsS1': { zh: '和第一季的区别', en: 'Differences from season 1' },
    'sty.vsGame': { zh: '和游戏风的区别', en: 'Differences from the game style' },
    'sty.creditsDetail': { zh: '详细制作名单', en: 'Full credits' },
    'sty.notUnified': { zh: '注意：第二季画风与第一季不统一，不能混用。', en: 'Note: the season 2 style is not consistent with season 1. Do not mix them.' },
    'sty.side': { zh: '并排看', en: 'Side by side' },
    'sty.sideNote': { zh: '顶栏「风格」「季」开关决定哪一列标为当前风格：游戏 → 游戏风；动画 + 第一季 → 第一季动画；动画 + 第二季 → 第二季动画。', en: 'The Style and Season toggles decide which column is marked as current: Game → game style; Anime + S1 → season 1 anime; Anime + S2 → season 2 anime.' },
    'sty.compare': { zh: '逐项对比', en: 'Point-by-point comparison' },
    'sty.items': { zh: '{n} 项', en: '{n} items' },
    'sty.cmpAria': { zh: '画风对比表（可横向滚动）', en: 'Style comparison table (scrolls horizontally)' },
    'sty.item': { zh: '项目', en: 'Aspect' },
    'sty.conv': { zh: '画风互转', en: 'Style conversion' },
    'conv.game_to_anime': { zh: '游戏 → 第一季动画', en: 'Game → S1 anime' },
    'conv.anime_to_game': { zh: '第一季动画 → 游戏', en: 'S1 anime → Game' },
    'conv.game_to_anime_s2': { zh: '游戏 → 第二季动画', en: 'Game → S2 anime' },
    'conv.anime_s2_to_game': { zh: '第二季动画 → 游戏', en: 'S2 anime → Game' },
    'sty.moods': { zh: '第一季情绪主色', en: 'Season 1 color moods' },
    'sty.moodsN': { zh: '{n} 种', en: '{n} moods' },
    'sty.moodsNote': { zh: ' 只适用于第一季动画风。', en: ' Applies to the season 1 anime style only.' },
    'sty.sources': { zh: '资料来源', en: 'Sources' },
    'sty.sourcesN': { zh: '{n} 条', en: '{n} sources' },

    /* 动作页 */
    'act.h1': { zh: '三套动作风格', en: 'Three Motion Styles' },
    'act.combine': { zh: '和画风关键词怎么组合', en: 'How to combine with the art-style keywords' },
    'act.combineNote1': { zh: '按下面的顺序拼提示词，画风关键词见 ', en: 'Assemble prompts in this order. Art-style keywords are on the ' },
    'act.combineNote2': { zh: '画风页', en: 'Styles page' },
    'act.combineNote3': { zh: '。', en: '.' },
    'act.view': { zh: '查看', en: 'View' },
    'act.follow': { zh: '跟随顶栏', en: 'Follow top bar' },
    'act.followNote': { zh: '当前顶栏：{s}。也可以用右侧标签单独查看任意一套。', en: 'Top bar currently selects: {s}. Use the other tabs to view any single style.' },
    'act.tabsAria': { zh: '动作风格', en: 'Motion styles' },
    'act.rules': { zh: '动作规则', en: 'Motion rules' },
    'act.moves': { zh: '能力动作', en: 'Ability moves' },
    'act.movesN': { zh: '{n} 个', en: '{n} moves' },
    'act.prompts': { zh: '提示词', en: 'Prompts' },
    'act.video': { zh: '视频提示词', en: 'Video prompt' },
    'act.refs': { zh: '参考图', en: 'References' },
    'act.refsN': { zh: '{n} 张', en: '{n} images' },
    'act.vsS1': { zh: '和第一季的区别', en: 'Differences from season 1' },
    'act.evidence': { zh: '依据', en: 'Evidence' },
    'act.s1': { zh: '第一季', en: 'Season 1' },
    'act.s2': { zh: '第二季', en: 'Season 2' },
    'act.gaps': { zh: '资料缺口', en: 'Data gaps' },
    'mv.motion': { zh: '动作', en: 'Motion' },
    'mv.camera': { zh: '镜头', en: 'Camera' },
    'mv.timing': { zh: '节奏', en: 'Timing' },
    'mv.fx': { zh: '特效', en: 'FX' },
    'act.compare': { zh: '三套动作逐项对比', en: 'Point-by-point comparison' },
    'act.cmpAria': { zh: '动作风格对比表（可横向滚动）', en: 'Motion style comparison table (scrolls horizontally)' },
    'act.sources': { zh: '资料来源', en: 'Sources' },
    'act.refLink': { zh: '出处页', en: 'Source page' },
    'act.zoom': { zh: '放大查看：{x}', en: 'Enlarge: {x}' },
    'home.c5.title': { zh: '个能力动作', en: 'ability moves' },
    'home.c5.desc': { zh: '游戏、第一季、第二季三套动作风格：节奏、镜头和特效规则，招牌能力的动作拆解，以及视频提示词。', en: 'Motion styles for the game, season 1 and season 2: timing, camera and FX rules, breakdowns of signature abilities, and video prompts.' },

    /* 角色页 */
    'ch.sheetCap': { zh: '角色设定图 · AI 生成（gpt-image-2.6-sunburst）', en: 'Character design sheet · AI-generated (gpt-image-2.6-sunburst)' },
    'ch.season1': { zh: '第一季', en: 'Season 1' },
    'ch.season2': { zh: '第二季', en: 'Season 2' },
    'arc.early': { zh: '前期', en: 'Early' },
    'arc.mid': { zh: '中期', en: 'Mid' },
    'arc.late': { zh: '后期', en: 'Late' },
    'arc.final': { zh: '最终', en: 'Final' },
    'ch.h1': { zh: '角色', en: 'Characters' },
    'ch.lede1': { zh: '点开角色查看设定图、图集、义体和分风格提示词。卡片缩略图按当前「风格」优先显示对应画风的图。画风本身的规范以 ', en: 'Open a character for the design sheet, gallery, cyberware and per-style prompts. Card thumbnails prefer images in the current Style. For the style rules themselves, the ' },
    'ch.lede2': { zh: '画风页', en: 'Styles page' },
    'ch.lede3': { zh: '（style_guides.json）为准。', en: ' (style_guides.json) is authoritative.' },
    'ch.seasonChars': { zh: '{s}角色', en: '{s} characters' },
    'ch.people': { zh: '{n} 人', en: '{n} characters' },
    'ch.tools': { zh: '设计工具', en: 'Design tools' },
    'ch.vocab': { zh: '义体外形词典', en: 'Cyberware look dictionary' },
    'ch.entries': { zh: '{n} 条', en: '{n} entries' },
    'ch.vocabNote1': { zh: '每种义体长什么样、装在哪、用什么英文词描述。完整词典和 177 个游戏义体图标在 ', en: 'What each implant looks like, where it sits and which English words describe it. The full dictionary and 177 game cyberware icons are on the ' },
    'ch.vocabNote2': { zh: '义体页', en: 'Cyberware page' },
    'ch.vocabNote3': { zh: '。', en: '.' },
    'ch.oc': { zh: '原创角色生成', en: 'Original character builder' },
    'ch.silRule': { zh: '剪影规则：', en: 'Silhouette rule: ' },
    'ch.colorRule': { zh: '配色规则：', en: 'Color rule: ' },
    'ch.classStyles': { zh: '阶层穿搭（class_styles）', en: 'Class fashion (class_styles)' },
    'ch.class': { zh: '阶层', en: 'Class' },
    'ch.who': { zh: '谁', en: 'Who' },
    'ch.fashion': { zh: '穿搭', en: 'Fashion' },
    'ch.templates': { zh: '提示词模板', en: 'Prompt templates' },
    'ch.tplNote': { zh: '把 {style_keywords} 换成画风页对应那一套的关键词，{character_prompt} 换成角色描述。', en: 'Replace {style_keywords} with the keywords of the matching set on the Styles page, and {character_prompt} with the character description.' },
    'tpl.character_sheet': { zh: '三视图', en: 'Turnaround sheet' },
    'tpl.promo_portrait': { zh: '宣传半身像', en: 'Promo half-body portrait' },
    'tpl.action_shot': { zh: '动作图', en: 'Action shot' },
    'ch.effect': { zh: '效果：', en: 'Effect: ' },
    'ch.inVocab': { zh: '在义体词典中查看 →', en: 'View in the cyberware dictionary →' },
    'ch.navAria': { zh: '角色导航', en: 'Character navigation' },
    'ch.back': { zh: '← 全部角色', en: '← All characters' },
    'ch.age': { zh: '年龄 {x}', en: 'Age {x}' },
    'ch.sheetZoom': { zh: '放大查看{name}设定图', en: 'Enlarge {name} design sheet' },
    'ch.sheet': { zh: '设定图', en: 'Design sheet' },
    'ch.profile': { zh: '设定资料', en: 'Profile' },
    'f.role': { zh: '身份', en: 'Role' },
    'f.age': { zh: '年龄', en: 'Age' },
    'f.class': { zh: '阶层穿搭', en: 'Class fashion' },
    'f.body': { zh: '体型', en: 'Build' },
    'f.face': { zh: '面部发型', en: 'Face & hair' },
    'f.outfit': { zh: '服装', en: 'Outfit' },
    'f.silhouette': { zh: '剪影要点', en: 'Silhouette' },
    'f.arc': { zh: '阶段形态', en: 'Story arc looks' },
    'f.note': { zh: '注', en: 'Note' },
    'ch.cyberware': { zh: '义体', en: 'Cyberware' },
    'ch.cwNote': { zh: '点击义体名称展开外形描述。', en: 'Click an implant to expand its visual description.' },
    'ch.cwRaw': { zh: 'Wiki 原始义体清单', en: 'Raw Wiki cyberware list' },
    'ch.colors': { zh: '配色', en: 'Colors' },
    'ch.prompts': { zh: '提示词', en: 'Prompts' },
    'ch.promptNote': { zh: '默认打开当前「风格」对应的那一套；「纯描述」不带画风关键词，可以自己接任意画风。', en: 'Opens the set matching the current Style. "Plain description" has no style keywords, so you can pair it with any style.' },
    'ch.gallery': { zh: '图集', en: 'Gallery' },
    'ch.imgs': { zh: '{n} 张', en: '{n} images' },
    'ch.imgs.one': { zh: '{n} 张', en: '{n} image' },
    'ch.galNote': { zh: '徽章标示画风：动画 = 第一季，S2动画 = 第二季，游戏 = 赛博朋克 2077。当前风格的图排在前面。点击放大。', en: 'Badges mark the style: Anime = season 1, S2 anime = season 2, Game = Cyberpunk 2077. Images in the current style come first. Click to enlarge.' },

    /* 场景页 */
    'sc.tab.s1': { zh: '第一季地点', en: 'S1 locations' },
    'sc.tab.s2': { zh: '第二季地点', en: 'S2 locations' },
    'sc.tab.districts': { zh: '夜之城大区', en: 'Night City districts' },
    'sc.tab.episodes': { zh: '每集主视觉', en: 'Episode key art' },
    'sc.tab.rules': { zh: '生成模板与规则', en: 'Templates & rules' },
    'sc.insufficient': { zh: '资料不足', en: 'Limited data' },
    'f.episodes': { zh: '出场', en: 'Appears in' },
    'f.story': { zh: '剧情', en: 'Story' },
    'f.visual': { zh: '画面', en: 'Visuals' },
    'f.props': { zh: '道具', en: 'Key props' },
    'f.lighting': { zh: '光线', en: 'Lighting' },
    'f.palette': { zh: '配色', en: 'Palette' },
    'f.animeLook': { zh: '动画外观', en: 'Anime look' },
    'f.animeS2Look': { zh: 'S2动画外观', en: 'S2 anime look' },
    'f.gameLook': { zh: '游戏外观', en: 'Game look' },
    'f.locPage': { zh: '地点页', en: 'Location page' },
    'f.desc': { zh: '概况', en: 'Overview' },
    'f.arch': { zh: '建筑', en: 'Architecture' },
    'f.class2': { zh: '阶层', en: 'Class' },
    'f.s1locs': { zh: '第一季地点', en: 'S1 locations' },
    'sc.promptsFollow': { zh: '提示词（跟随当前风格）', en: 'Prompts (follow current style)' },
    'sc.neutral': { zh: '中性描述', en: 'Neutral description' },
    'sc.gaps': { zh: '资料缺口', en: 'Data gaps' },
    'sc.s1count': { zh: '{n} 个第一季地点。', en: '{n} season 1 locations. ' },
    'sc.s2count': { zh: '{n} 个第二季地点。', en: '{n} season 2 locations. ' },
    'sc.status': { zh: '状态', en: 'Status' },
    'sc.s2empty': { zh: '第二季地点数据还在整理中。', en: 'Season 2 location data is still being compiled.' },
    'sc.distNote': { zh: '夜之城 {n} 个大区，来自第一季场景库；决定建筑类型、阶层和底色，两季通用。', en: 'The {n} districts of Night City, from the season 1 scene KB. They set architecture, class and base palette, and apply to both seasons.' },
    'sc.epHead': { zh: '{s} · {n} 集', en: '{s} · {n} episodes' },
    'sc.epZoom': { zh: '放大第 {n} 集主视觉', en: 'Enlarge episode {n} key art' },
    'sc.epCap': { zh: '第 {n} 集 · {t}', en: 'Episode {n} · {t}' },
    'sc.s2epNote': { zh: '第二季剧集页暂无每集主视觉图，以下是官方简介。', en: 'The season 2 episode pages have no key art yet; below are the official synopses.' },
    'sc.noSummary': { zh: '暂无简介。', en: 'No synopsis yet.' },
    'sc.noEpisodes': { zh: '没有符合当前季筛选的剧集。', en: 'No episodes match the current season filter.' },
    'tpl.establishing': { zh: '远景建立镜头', en: 'Wide establishing shot' },
    'tpl.character_in_scene': { zh: '角色在场景中', en: 'Character in scene' },
    'sc.tplAria': { zh: '模板', en: 'Templates' },
    'sc.s1scenes': { zh: '第一季场景', en: 'Season 1 scenes' },
    'sc.steps': { zh: '出图步骤', en: 'Generation steps' },
    'sc.consistency': { zh: '一致性规则：', en: 'Consistency rule: ' },
    'sc.animeRules': { zh: '第一季动画场景规则 ', en: 'Season 1 anime scene rules ' },
    'sc.avoid': { zh: '避免：', en: 'Avoid: ' },
    'sc.moodsLink1': { zh: ' 情绪主色见 ', en: ' See color moods on the ' },
    'sc.moodsLink2': { zh: '画风页', en: 'Styles page' },
    'sc.moodsLink3': { zh: '。', en: '.' },
    'sc.templates': { zh: '提示词模板', en: 'Prompt templates' },
    'sc.s2scenes': { zh: '第二季场景', en: 'Season 2 scenes' },
    'sc.lighting': { zh: '光照', en: 'Lighting' },
    'sc.h1': { zh: '场景', en: 'Scenes' },
    'sc.lede': { zh: '第一、二季地点，夜之城大区，每集主视觉和场景生成模板。地点图片按当前「风格」排序，提示词默认打开当前风格那一套；「季」开关会隐藏另一季的地点和剧集。', en: 'Season 1 and 2 locations, Night City districts, episode key art and scene generation templates. Location images are sorted by the current Style and prompts open the matching set; the Season toggle hides the other season\'s locations and episodes.' },
    'sc.tabsAria': { zh: '场景分区', en: 'Scene sections' },

    /* 势力页 */
    'fa.h1': { zh: '势力 / Factions', en: 'Factions' },
    'fa.tab.gangs': { zh: '帮派', en: 'Gangs' },
    'fa.tab.orgs': { zh: '公司与机构', en: 'Corps & Institutions' },
    'fa.tab.jobs': { zh: '打工的', en: 'Jobs' },
    'fa.tabsAria': { zh: '势力分类', en: 'Faction groups' },
    'fa.count': { zh: '{n} 个', en: '{n}' },
    'fa.notAnime': { zh: '无动画出场', en: 'Not in the anime' },
    'fa.notAnimeNote': { zh: '无动画出场，显示游戏图', en: 'Not in the anime; showing a game image' },
    'fa.how': { zh: '怎么用', en: 'How to use' },
    'fa.evNote': { zh: '证据说明', en: 'About the evidence' },
    'fa.animeNote': { zh: '动画说明', en: 'About the anime' },
    'fa.intro': { zh: '夜之城里的帮派、公司、机构，以及在这座城市里讨生活的普通人。每一项都写了他们穿什么、用什么颜色、装什么义体、在哪一带出没，点进去就能复制游戏风或动画风的人物和场景提示词。', en: 'The gangs, corporations and institutions of Night City, plus the ordinary people working to get by. Each entry covers what they wear, their colors, their cyberware and where they hang out. Open one to copy character and scene prompts in the game or anime style.' },
    'fa.howto': { zh: '详情页里还能看到他们在游戏里的义体款式，以及常出没的街区和地点，点击会跳到「义体」和「场景」页。只有在动画里真正出场过的势力才配动画截图，其余只有游戏图。', en: 'Detail pages also show their in-game cyberware styles and the districts and places they frequent, linking to the Cyberware and Scenes pages. Only factions that actually appear in the anime have anime stills; the rest show game images only.' },
    'fa.evLegend': { zh: '字段后的标记：出处 = Wiki 明写；观察 = 从图中看到；推断 = 合理推测（灰色虚线）。', en: 'Badges after a field: Sourced = stated on the Wiki; Observed = seen in images; Inferred = reasonable guess (grey, dashed).' },
    'fa.back': { zh: '← 全部势力', en: '← All factions' },
    'fa.navAria': { zh: '势力导航', en: 'Faction navigation' },
    'fa.gallery': { zh: '图集', en: 'Gallery' },
    'fa.galNote': { zh: '徽章标示画风。第二季动画图只在「季」为全部或第二季时显示，第一季动画图只在全部或第一季时显示；游戏图始终显示。', en: 'Badges mark the style. S2 anime images show only when Season is All or S2, S1 anime images only when All or S1; game images always show.' },
    'fa.noAnimeImg': { zh: '当前「季」下没有动画图。', en: 'No anime images for the current Season.' },
    'fa.profile': { zh: '设定资料', en: 'Profile' },
    'f.appears': { zh: '出场', en: 'Appears in' },
    'f.territory': { zh: '地盘', en: 'Territory' },
    'f.districts': { zh: '大区', en: 'Districts' },
    'f.locations': { zh: '地点', en: 'Locations' },
    'f.fashion': { zh: '穿搭', en: 'Fashion' },
    'f.colors': { zh: '配色', en: 'Colors' },
    'f.emblem': { zh: '标志', en: 'Emblem' },
    'f.cyberware': { zh: '义体', en: 'Cyberware' },
    'f.gear': { zh: '装备', en: 'Gear' },
    'f.workplace': { zh: '工作场所', en: 'Workplace' },
    'f.tools': { zh: '工具', en: 'Tools' },
    'f.notable': { zh: '代表人物', en: 'Notable people' },
    'fa.members': { zh: '成员类型', en: 'Member types' },
    'fa.cwStyles': { zh: '游戏义体款式', en: 'In-game cyberware styles' },
    'fa.cwNote': { zh: '点击跳到义体页。', en: 'Click to open the Cyberware page.' },
    'fa.scene': { zh: '场景', en: 'Scene' },
    'fa.personPrompts': { zh: '人物提示词', en: 'Character prompts' },
    'fa.scenePrompts': { zh: '场景提示词', en: 'Scene prompts' },
    'fa.promptNote': { zh: '默认打开当前「风格」对应的那一套。', en: 'Opens the set matching the current Style.' },
    'fa.sceneNegNote': { zh: '场景提示词没有自带负面词，下面的负面词沿用同风格的人物提示词。', en: 'Scene prompts have no negative prompt of their own; the negatives below reuse the character prompt of the same style.' },
    'fa.negEnReuse': { zh: '负面词 EN（沿用人物提示词）', en: 'Negative (English, from character prompt)' },
    'fa.negZhReuse': { zh: '负面词 中文（沿用人物提示词）', en: 'Negative (Chinese, from character prompt)' },
    'fa.gaps': { zh: '资料缺口', en: 'Data gaps' },
    'fa.sources': { zh: '资料来源', en: 'Sources' },
    'fa.sec.prompts': { zh: '提示词', en: 'Prompts' },
    'home.c6.title': { zh: '个势力', en: 'factions' },
    'home.c6.desc': { zh: '{g} 个帮派与游牧民、{o} 家公司与机构、{j} 种打工职业：穿搭、配色、标志、义体和提示词。', en: '{g} gangs and nomads, {o} corporations and institutions, {j} jobs: fashion, colors, emblems, cyberware and prompts.' },
    'ap.2020': { zh: '2020', en: '2020' },
    'ap.RED': { zh: 'RED', en: 'RED' },
    'ap.2077': { zh: '2077 游戏', en: '2077 (game)' },
    'ap.PL': { zh: '2077 幻影自由', en: '2077: Phantom Liberty' },
    'ap.EDGE': { zh: '边缘行者 第一季', en: 'Edgerunners S1' },
    'ap.EDGEII': { zh: '边缘行者 第二季', en: 'Edgerunners S2' },

    /* 义体页 */
    'cw.effect': { zh: '效果：', en: 'Effect: ' },
    'cw.seenOn': { zh: '见于：', en: 'Seen on: ' },
    'cw.vocab': { zh: '外形词典', en: 'Look dictionary' },
    'cw.entries': { zh: '{n} 条', en: '{n} entries' },
    'cw.vocabNote': { zh: '来自角色知识库的 cyberware_vocab：每种义体的安装位置、外形和英文提示词。「季」开关只显示该季角色身上出现过的义体，点角色名跳到角色详情。', en: 'From cyberware_vocab in the character KB: where each implant sits, what it looks like and its English prompt. The Season toggle shows only implants seen on that season\'s characters; click a name to open the character.' },
    'cw.iconAria': { zh: '{t}（查看大图）', en: '{t} (view large)' },
    'cw.noMatch': { zh: '没有匹配的图标。', en: 'No matching icons.' },
    'cw.count': { zh: '{n} / {total} 个', en: '{n} / {total} icons' },
    'cw.h1': { zh: '义体', en: 'Cyberware' },
    'cw.lede': { zh: '上半部分是动画里义体的外形词典，下半部分是《赛博朋克 2077》的游戏义体图标（游戏风，不随「风格」开关变化）。', en: 'The top half is a look dictionary for the anime\'s cyberware; the bottom half is Cyberpunk 2077 game cyberware icons (game style, unaffected by the Style toggle).' },
    'cw.icons': { zh: '游戏义体图标', en: 'Game cyberware icons' },
    'cw.filterAria': { zh: '按部位筛选', en: 'Filter by body slot' },
    'cw.all': { zh: '全部', en: 'All' },
    'cw.search': { zh: '搜索图标名（英文）或部位', en: 'Search icon name or body slot' },
    'cw.searchAria': { zh: '搜索义体图标', en: 'Search cyberware icons' }
  };

  /* ---------- 语言状态 ---------- */
  var LS_LANG = 'erkb.lang';
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  function norm(v) { v = String(v || '').toLowerCase(); return v === 'en' ? 'en' : (v === 'zh' || v.indexOf('zh') === 0 ? 'zh' : null); }

  var lang = null;
  try { var q = norm(new URLSearchParams(location.search).get('lang')); if (q) { lang = q; lsSet(LS_LANG, q); } } catch (e) { /* ignore */ }
  if (!lang) lang = norm(lsGet(LS_LANG));
  if (!lang) lang = /^zh/i.test(navigator.language || '') ? 'zh' : 'en';

  var EN = {}, enPromise = null;
  function loadEn() {
    if (!enPromise) {
      enPromise = fetch('../i18n/en.json', { cache: 'no-cache' }).then(function (r) {
        return r.ok ? r.json() : {};
      }).then(function (d) { EN = (d && typeof d === 'object' && !Array.isArray(d)) ? d : {}; return EN; })
        .catch(function () { EN = {}; return EN; });
    }
    return enPromise;
  }

  function t(key, vars) {
    // singular form: use "<key>.one" when n === 1 and it exists
    if (vars && Number(vars.n) === 1 && DICT[key + '.one']) key = key + '.one';
    var e = DICT[key];
    var s = e ? (e[lang] != null ? e[lang] : e.zh) : key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? String(vars[k]) : m; });
    return s;
  }
  function tr(s) {
    if (lang !== 'en' || typeof s !== 'string') return s;
    var v = EN[s];
    return typeof v === 'string' && v !== '' ? v : s;
  }
  function applyStatic(rootEl) {
    var r = rootEl || document;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    r.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    r.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
  }

  var I18N = window.I18N = {
    DICT: DICT,
    LS_KEY: LS_LANG,
    get lang() { return lang; },
    t: t, tr: tr,
    /* 加载当前语言需要的内容字典（中文不需要） */
    ready: function () { return lang === 'en' ? loadEn() : Promise.resolve({}); },
    /* 切换语言；save=false 用于跨标签页同步（不再写回） */
    setLang: function (v, save) {
      v = norm(v) || 'zh';
      if (save !== false) lsSet(LS_LANG, v);
      lang = v;
      applyStatic();
      return I18N.ready();
    },
    applyStatic: applyStatic,
    /* 测试用：替换内容字典 */
    _setEn: function (d) { EN = d || {}; enPromise = Promise.resolve(EN); }
  };
  window.t = t; window.tr = tr;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { applyStatic(); }); else applyStatic();
})();
