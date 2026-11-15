# 边缘行者第一季 · 场景生成知识库

先决定这张图是动画风还是游戏风（见 style_guides.json），然后：动画风 → 选 color_moods 主色；游戏风 → 选 game.lighting_presets 光照。再选 districts 和 locations，直接用 prompts.anime 或 prompts.game。参考图按 style 字段只看对应风格。注意：第一季背景本来就是照着游戏地点重画的，所以游戏图可以用来参考建筑结构，但画法要跟随所选风格。

> 图片版权归 CD PROJEKT RED / Studio Trigger，仅链接引用，供个人设计参考。

两套画风的完整规范见 style_guides.md。

## 动画风场景规则（仅动画）
背景比角色画得细：角色是平涂赛璐璐，背景是带大量细节的绘制背景，再用强烈的单色调色把两者统一起来。
- **一场戏一个主色**：整个画面被一种霓虹色统一染色：诊所全青绿、Lizzie's Bar 全洋红紫、来生酒吧全酸性绿、发疯戏全血红。角色的固有色也会被这层颜色覆盖。
- **白天就要亮**：日景用高饱和、强日光、浅青色天空和明显的镜头光晕（急救车、货运站、高架轻轨），和夜景形成反差。
- **霓虹招牌是主角**：店名招牌大、字体夸张、发强光（Afterlife 闪电字、Lizzie's 哥特花体字、Jacked and Coke 粉色灯管字），常放在画面上三分之一。
- **构图压迫**：大量仰拍摩天楼、俯拍街区和货柜；全景镜头里城市是一片发光的密集塔林，远处有竖向光柱。
- **全息和 UI**：公司和科技场景用青色全息网格（荒坂学院教室、网络空间），线条发光、背景压暗。
- **粒子与雾**：夜景有薄雾和光晕（bloom），霓虹在湿地面上反射；荒地和工业区用暖黄尘雾。
- 避免：写实照片质感、灰暗无主色的夜景、过多柔光、杂乱不统一的多色灯光

## 情绪主色（仅动画）
情绪主色是动画风的做法（一场戏一个主色）。游戏风请改用 style_guides.json 里 game.lighting_presets 的光照预设。
- **青绿 · 地下与科技** `#0FD3B8` `#063A3A` `#FF3FA4`：义体医生诊所、改装、密谋；常带一道洋红边缘光；参考 [动画·第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/6/63/Doc_01_EP1_CPEDGE.png/revision/latest?cb=20261028041643)、[动画·第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/b/bc/Doc_03_EP4_CPEDGE.jpg/revision/latest?cb=20240721162226)
- **洋红紫 · 欲望与夜店** `#FF2A8A` `#5B1C8F` `#14F0FF`：超梦俱乐部、舞池、帮派聚会；参考 [动画·第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/7/76/Lizzie%27s_Bar_01_EP4_CPEDGE.png/revision/latest?cb=20261102094001)、[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/1/1d/Lizzie%27s_Bar_Interior_01_CP2077.png/revision/latest?cb=20261113104102)
- **酸性绿 · 佣兵与交易** `#3BFF6B` `#0A3B2A` `#E6FF4A`：佣兵酒吧、接活、团队聚会；参考 [动画·第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/1/15/Afterlife_01_EP4_CPEDGE.png/revision/latest?cb=20261101140651)、[动画·第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/8/8c/Afterlife_Sign_01_EP4_CPEDGE.png/revision/latest?cb=20261101140652)
- **血红 · 暴力与赛博精神病** `#E1261C` `#5A0A0A` `#FFD23A`：失控、战斗高潮、赛博精神病发作；整个画面压成红黑两色；参考 [动画·第一季截图 · 第6集](https://static.wikia.nocookie.net/cyberpunk/images/f/f0/Maine_04_EP6_CPEDGE.png/revision/latest?cb=20261102141448)、[动画·第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/0/00/AllEyezOnMe_Infobox_CPEDGE.png/revision/latest?cb=20220913201453)
- **全息青 · 公司与网络空间** `#14F0FF` `#04162A` `#FFFFFF`：荒坂、网络潜入、系统界面；参考 [动画·第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/a/ac/Arasaka_Academy_02_EP1_CPEDGE.jpg/revision/latest?cb=20240721211116)、[动画·第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/2/2f/Humanity_Infobox_CPEDGE.png/revision/latest?cb=20220913203308)
- **暖橙 · 工业、怀旧、霾** `#F28A2E` `#3A1E10` `#FFD58A`：工厂、帮派据点、黄昏街角、雾霾天际线；参考 [动画·第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/6/64/Totentanz_Exterior_01_CPEDGE.png/revision/latest?cb=20260611194106)、[动画·第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/c/c0/Jacked_and_Coke_01_CPEDGE.png/revision/latest?cb=20251117102738)
- **明亮日景 · 日常** `#7FE3F0` `#FFD31A` `#F4F1E8`：通勤、急救、货运站；高饱和强日光加镜头光晕；参考 [动画·第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/e/ef/NCART_EP4_CPEDGE.jpg/revision/latest?cb=20240721162737)、[动画·第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/7/71/Gloria_Martinez_02_EP1_CPEDGE.jpg/revision/latest?cb=20240721180726)、[动画·第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/0/0a/David_and_Maine_at_Freight_Station_CPEDGE.png/revision/latest?cb=20240715160133)
- **冷白灰 · 月球与梦想** `#E9E9EC` `#0B0B10` `#FFE7A3`：月面、太空站；大面积纯黑天空和刺眼的白色地表；参考 [动画·第一季截图 · 第10集](https://static.wikia.nocookie.net/cyberpunk/images/9/90/Moon_01_EP10_CPEDGE.jpg/revision/latest?cb=20240809161804)、[动画·第一季截图 · 第10集](https://static.wikia.nocookie.net/cyberpunk/images/a/a0/Moon_Station_EP10_CPEDGE.jpg/revision/latest?cb=20240809161802)

## 大区
### 市中心（City Center）· neomilitarism
夜之城的中央商务区，大公司总部集中地，第四次企业战争后重建，是这座城市的门面。荒坂塔（620 米、140 层）是全城最高建筑。
- 建筑：黑色玻璃摩天楼、巨型全息广告（如鲸鱼全息）、环形绿地纪念公园、地下轻轨枢纽
- 配色：`#0B0F1A` `#14F0FF` `#FF6A2A` `#C9D2E0`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, corporate downtown, black glass skyscrapers, Arasaka tower, giant holographic advertisements, cold neomilitarism architecture`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，公司区市中心，黑色玻璃摩天楼，荒坂塔，巨型全息广告，冷峻的新军国主义建筑`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, corporate downtown, black glass skyscrapers, Arasaka tower, giant holographic advertisements, cold neomilitarism architecture`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，公司区市中心，黑色玻璃摩天楼，荒坂塔，巨型全息广告，冷峻的新军国主义建筑`
- 参考图：[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/1/14/Corporate_Plaza_Wallpaper_CP2077.png/revision/latest?cb=20241202163702)、[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/7/75/Cyberpunk2077-City_Center_exteriors_overview-RGB_g9wqcpakfgci99gw.jpg/revision/latest?cb=20200710145823)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/3/36/Michal-lisowski-030-arasaka-tower-park-update.jpg/revision/latest?cb=20210117012231)

### 沃森区（Watson）· entropism + kitsch
北部最穷的区之一，大量工厂废弃，漩涡帮和虎爪帮在此争地盘。下辖小中华区（来生酒吧、Tom's Diner）、歌舞伎区（Lizzie's Bar、Yaiba 大楼）、北部工业区（Totentanz）。
- 建筑：密集的亚洲风格街区、鸟居和红灯笼、层层叠叠的招牌、废弃厂房、高架管道
- 配色：`#1A1A24` `#E2261C` `#3BFF6B` `#FF2A8A`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, dense run-down asian-influenced streets, torii gate, red lanterns, stacked neon signs, abandoned factories, overhead pipes`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，破败密集的亚洲风格街区，鸟居，红灯笼，层层叠叠的霓虹招牌，废弃工厂，头顶的管道`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, dense run-down asian-influenced streets, torii gate, red lanterns, stacked neon signs, abandoned factories, overhead pipes`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，破败密集的亚洲风格街区，鸟居，红灯笼，层层叠叠的霓虹招牌，废弃工厂，头顶的管道`
- 参考图：[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/7/78/CP2077_concept_art_watson1.jpg/revision/latest?cb=20200705034322)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/f/f3/CP2077_concept_art_watson2.jpg/revision/latest?cb=20200705034323)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/f/f9/Marthe-jonkers-mjonkers-kabuki1.jpg/revision/latest?cb=20261111213511)、[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/0/0b/CP2077_northside_industrial_district1.jpg/revision/latest?cb=20200919185534)

### 威斯布鲁克 · 日本街（Westbrook / Japantown）· kitsch + neokitsch
被许多人认为是夜之城最适合生活和玩乐的地方，富人、名流聚居。日本街以日裔居民为主，白天游客多，夜晚由虎爪帮掌控。大卫和露西后期住在日本街的顶层公寓。
- 建筑：高档塔楼、日式夜市、灯笼长廊、樱花市场、神社、俯瞰城市的顶层公寓
- 配色：`#140A1E` `#FF3B3B` `#FFB23A` `#FF2A8A`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, upscale japantown at night, lantern-lit night market, red and gold signs, luxury high-rise apartments overlooking the city`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，夜晚的高档日本街，灯笼照亮的夜市，红金色招牌，俯瞰城市的豪华高层公寓`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, upscale japantown at night, lantern-lit night market, red and gold signs, luxury high-rise apartments overlooking the city`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，夜晚的高档日本街，灯笼照亮的夜市，红金色招牌，俯瞰城市的豪华高层公寓`
- 参考图：[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/f/f4/Japantown_2077_p1.jpeg/revision/latest?cb=20201001000528)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/5/56/Grusti-q112-dashi-parade-market-ilya-grusti-ivanov-07.jpg/revision/latest?cb=20210125205142)、[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/9/99/Cyberpunk2077-Westrbookwelcome_saturated-RGB_nalo91c9zz0qu76m.jpg/revision/latest?cb=20200707220651)

### 海伍德（Heywood）· kitsch
反差强烈的区：北部挨着市中心，有公园和现代高楼；越往南越像贫民窟。Jacked and Coke 酒吧在南部的维斯塔德雷。
- 建筑：北部是绿化商业街和步行天桥，南部是低矮街区、拉美风格涂鸦和街角小店
- 配色：`#1E1426` `#FF3FA4` `#F28A2E` `#7FE3F0`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, contrasting neighborhood, palm trees and pedestrian skybridges, latino street murals, corner bars with pink neon`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，贫富反差的街区，棕榈树和步行天桥，拉美风格街头壁画，挂粉色霓虹的街角酒吧`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, contrasting neighborhood, palm trees and pedestrian skybridges, latino street murals, corner bars with pink neon`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，贫富反差的街区，棕榈树和步行天桥，拉美风格街头壁画，挂粉色霓虹的街角酒吧`
- 参考图：[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/2/25/Cyberpunk2077-Heywood_exteriors_Wellsprings-RGB_qmqmuzy0koaax1b4.jpg/revision/latest?cb=20200720210501)、[游戏·游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/9/9a/Cyberpunk2077-Heywood_exteriors_overview-RGB_e1dhwfcor7ur4qpb.jpg/revision/latest?cb=20230825095323)

### 圣多明戈（Santo Domingo）· entropism
最老的区之一，工业和工人居住区。阿罗约永远在施工：老电厂、机器人工厂、物流中心、巨型垃圾场。大卫家所在的 H4 巨型建筑和医生诊所都在阿罗约。
- 建筑：成片的巨型住宅楼（megabuilding）、高压电塔、货柜堆场、高速公路高架、尘雾
- 配色：`#2A2622` `#F2C14E` `#8FA3A8` `#E2261C`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, industrial working-class district, massive megabuilding housing blocks, power pylons, shipping container yards, highway overpasses, dusty haze`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，工人阶级工业区，成片的巨型住宅楼，高压电塔，货柜堆场，高速公路高架，尘雾`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, industrial working-class district, massive megabuilding housing blocks, power pylons, shipping container yards, highway overpasses, dusty haze`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，工人阶级工业区，成片的巨型住宅楼，高压电塔，货柜堆场，高速公路高架，尘雾`
- 参考图：[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/d/d7/CP2077_concept_art_santo_domingo1.jpg/revision/latest?cb=20231120122425)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/f/f2/CP2077_concept_art_santo_domingo3.jpg/revision/latest?cb=20230825094311)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/2/2f/Marthe-jonkers-mjonkers-arroyostreets.jpg/revision/latest?cb=20261111214410)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/c/cf/Mark-foreman-mark-foreman-cyberpunk2077-megabuildings-04.jpg/revision/latest?cb=20210120233838)

### 荒地 · 东部废土（Badlands / Eastern Wastelands）· entropism
城市东边的荒漠，是气候崩溃留下的废土。从这里可以看到夜之城的整片天际线。
- 建筑：风力发电机阵列、废弃加油站、游牧民营地、卫星天线、远处发光的城市
- 配色：`#C9A66B` `#3A2E22` `#F7E3B0` `#39F0A0`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, desert wasteland outside the city, wind turbine fields, dusty golden haze, distant glowing city skyline`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，城外的荒漠废土，风力发电机阵列，金黄色尘雾，远处发光的城市天际线`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, desert wasteland outside the city, wind turbine fields, dusty golden haze, distant glowing city skyline`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，城外的荒漠废土，风力发电机阵列，金黄色尘雾，远处发光的城市天际线`
- 参考图：[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/e/ed/Badlands_Concept_Art3.jpg/revision/latest?cb=20210314000600)、[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/d/da/Marthe-jonkers-mjonkers-turbinefields1.jpg/revision/latest?cb=20261112023459)

### 月球（The Moon）· neomilitarism
露西一直想去的地方。第二集里她和大卫在超梦里一起去过，第十集露西独自来到月球。
- 建筑：白色模块化基地、观光车、太空站舷窗、灰白月面、黑色天空中的地球
- 配色：`#E9E9EC` `#0B0B10` `#FFE7A3` `#6FA8FF`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, lunar surface, white modular moon base, moon tourist bus interior, black sky, earth on the horizon`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，月球表面，白色模块化月球基地，月球观光车内部，纯黑天空，地平线上的地球`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, lunar surface, white modular moon base, moon tourist bus interior, black sky, earth on the horizon`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，月球表面，白色模块化月球基地，月球观光车内部，纯黑天空，地平线上的地球`
- 参考图：[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/2/24/Moon_Station_Concept_Art_CP2077.jpg/revision/latest?cb=20240730010922)

### 太平洲（第一季未出场）（Pacifica）· entropism
原本规划成富人度假区，项目烂尾后成了被遗弃的区。第一季没有出现，做原创场景时可以用。
- 建筑：烂尾酒店和摩天轮、海边废墟、巫毒帮占据的高楼
- 配色：`#3A3F45` `#7FB8C0` `#E8D9B0` `#FF3FA4`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, abandoned seaside resort, unfinished hotels, rusting ferris wheel, overcast sky`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，废弃的海滨度假区，烂尾酒店，生锈的摩天轮，阴天`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, abandoned seaside resort, unfinished hotels, rusting ferris wheel, overcast sky`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，废弃的海滨度假区，烂尾酒店，生锈的摩天轮，阴天`
- 参考图：[游戏·游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/0/05/CP2077_Pacifica_concept_art_1.jpg/revision/latest?cb=20210523135521)

## 第一季地点
### 夜之城天际线（Night City Skyline）
- 大区：荒地 · 东部废土；出场：片头 / 多集过场
- 剧情：用于交代城市的全景镜头。
- 画面（动画）：从荒地远眺，城市是一片发光的密集塔林，几根竖向光柱直冲夜空；前景是暗色的山丘和荒地，整体偏黄绿色。
- 道具：竖向光柱、密集塔楼、远景剪影、暗色前景
- 动画风光感：黄绿色光晕，前景是平涂的暗色剪影
- 游戏风光感：黄昏时从荒地远眺，空气朦胧，写实的城市灯光
- 配色（动画）：`#0D1410` `#C8F04A` `#39F0A0` `#14F0FF`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, distant view of a dense glowing city skyline at night seen from the desert, vertical light beams into the sky, dark hills in the foreground, yellow-green glow, flat dark silhouette foreground`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，从荒漠远眺夜晚发光的密集城市天际线，竖向光柱直冲天空，前景是暗色山丘，黄绿色光晕，前景是平涂的暗色剪影`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, distant view of a dense glowing city skyline at night seen from the desert, vertical light beams into the sky, dark hills in the foreground, seen from the badlands at dusk, hazy atmosphere, realistic city lights`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，从荒漠远眺夜晚发光的密集城市天际线，竖向光柱直冲天空，前景是暗色山丘，黄昏时从荒地远眺，空气朦胧，写实的城市灯光`
- 参考图：
  - [动画 · 第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/8/87/Night_City_Skyline_01_CPEDGE.png/revision/latest?cb=20240808164603)
  - [动画 · 第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/1/17/Night_City_Skyline_02_CPEDGE.png/revision/latest?cb=20240808164606)

### 荒坂塔 · 荒坂学院（Arasaka Tower / Arasaka Academy）
- 大区：市中心；出场：第 1 集、第 10 集
- 剧情：大卫在塔内的荒坂学院上学（第 1 集）；最终决战在荒坂塔（第 10 集）。
- 画面（动画）：学院入口是明亮的白色大堂，穿深红制服的学生；教室是暗色房间里的青色全息网格和半透明全息人像。塔本身是黑色巨塔，侧面有巨型全息广告。
- 道具：荒坂红白标志、红色学生制服、全息教学网格、全息人像、黑色玻璃塔身
- 动画风光感：青色全息光，走廊里强烈的橙色逆光
- 游戏风光感：抛光黑玻璃和大理石大堂，冷白色公司照明，写实反射
- 配色（动画）：`#04162A` `#14F0FF` `#FFFFFF` `#C8102E`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, elite corporate academy inside a black skyscraper, bright white lobby, students in dark red uniforms, dark classroom with cyan holographic grid and translucent hologram figure, cyan hologram glow, hard orange backlight in corridors`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，黑色摩天楼内的精英公司学院，明亮的白色大堂，穿深红制服的学生，暗色教室里的青色全息网格和半透明全息人像，青色全息光，走廊里强烈的橙色逆光`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, elite corporate academy inside a black skyscraper, bright white lobby, students in dark red uniforms, dark classroom with cyan holographic grid and translucent hologram figure, polished black glass and marble lobby, cold white corporate lighting, realistic reflections`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，黑色摩天楼内的精英公司学院，明亮的白色大堂，穿深红制服的学生，暗色教室里的青色全息网格和半透明全息人像，抛光黑玻璃和大理石大堂，冷白色公司照明，写实反射`
- 参考图：
  - [动画 · 第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/6/69/Arasaka_Academy_01_EP1_CPEDGE.jpg/revision/latest?cb=20240721181203)
  - [动画 · 第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/a/ac/Arasaka_Academy_02_EP1_CPEDGE.jpg/revision/latest?cb=20240721211116)
  - [动画 · 第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/a/a3/Katsuo_David_02_EP1_CPEDGE.jpg/revision/latest?cb=20261028040304)
  - [游戏 · 游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/e/ed/Arasaka_Tower_Night_City_Infobox_CP2077.png/revision/latest?cb=20240821185515)
  - [游戏 · 游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/3/36/Michal-lisowski-030-arasaka-tower-park-update.jpg/revision/latest?cb=20210117012231)

### H4 巨型建筑 · 马丁内斯家（Megabuilding H4 / Martinez Apartment）
- 大区：圣多明戈；出场：第 1 集
- 剧情：大卫和母亲格洛丽亚住在阿罗约的 H4 巨型建筑里。
- 画面（动画）：巨型住宅楼是一整块红褐色的方形高楼；室内狭小，旧沙发、外面的广告灯（All Foods 招牌）照进来；第 1 集主视觉是透过圆窗看到坐在家里的大卫。
- 道具：巨型住宅楼外立面、狭小客厅、旧沙发、窗外广告灯、圆形舷窗式窗户
- 动画风光感：昏暗偏暖的室内，平涂的紫粉色窗光
- 游戏风光感：混凝土巨型建筑走廊，闪烁的日光灯，杂乱磨损的表面
- 配色（动画）：`#2A1E2E` `#FF5FA0` `#F2C14E` `#6C4A3A`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, cramped apartment inside a massive megabuilding, worn couch, advertisement light through the window, working-class home, view of a huge blocky housing tower, dim warm interior, flat purple-pink window light`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，巨型住宅楼里狭小的公寓，旧沙发，窗外广告灯照进来，工人阶级的家，方块状的巨型住宅楼外观，昏暗偏暖的室内，平涂的紫粉色窗光`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, cramped apartment inside a massive megabuilding, worn couch, advertisement light through the window, working-class home, view of a huge blocky housing tower, concrete megabuilding corridors, flickering fluorescent lights, cluttered worn surfaces`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，巨型住宅楼里狭小的公寓，旧沙发，窗外广告灯照进来，工人阶级的家，方块状的巨型住宅楼外观，混凝土巨型建筑走廊，闪烁的日光灯，杂乱磨损的表面`
- 参考图：
  - [动画 · 第一季海报](https://static.wikia.nocookie.net/cyberpunk/images/5/5f/Series_profile_edgerunners.jpg/revision/latest?cb=20210226083354)
  - [动画 · 第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/b/b1/LetYouDown_Infobox_CPEDGE.png/revision/latest?cb=20220914164943)
  - [动画 · 第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/4/43/David_%26_Gloria_02_EP1_CPEDGE.png/revision/latest?cb=20261028034730)
  - [游戏 · 游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/c/cf/Mark-foreman-mark-foreman-cyberpunk2077-megabuildings-04.jpg/revision/latest?cb=20210120233838)

### 白天街景 · 急救车 · 高架轻轨（Daytime Streets / Ambulance / NCART）
- 大区：圣多明戈；出场：第 1 集、第 4 集
- 剧情：格洛丽亚是急救员（第 1 集的急救车场景）；角色日常通勤乘坐高架轻轨 NCART。
- 画面（动画）：高饱和的白天：白色急救车带黄红条纹，急救员穿亮黄色制服；橙色列车在高架轨道上穿过米白色楼群；街头有褪色的条纹涂鸦墙。
- 道具：急救车（白色 + 黄红条纹）、亮黄急救制服、橙色 NCART 列车、高架轨道、条纹涂鸦墙
- 动画风光感：平涂的明亮色彩，浅青色天空，彩虹镜头光晕
- 游戏风光感：加州式强烈日照，雾霾，满是灰尘的柏油路
- 配色（动画）：`#7FE3F0` `#FFD31A` `#F28A2E` `#F4F1E8`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, daytime city street, white ambulance with yellow and red stripes, paramedics in bright yellow uniforms, orange elevated train on an overhead track, flat bright colors, pale cyan sky, rainbow lens flare`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，白天的城市街道，带黄红条纹的白色急救车，穿亮黄制服的急救员，高架轨道上的橙色列车，平涂的明亮色彩，浅青色天空，彩虹镜头光晕`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, daytime city street, white ambulance with yellow and red stripes, paramedics in bright yellow uniforms, orange elevated train on an overhead track, harsh california sunlight, smog haze, dusty asphalt`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，白天的城市街道，带黄红条纹的白色急救车，穿亮黄制服的急救员，高架轨道上的橙色列车，加州式强烈日照，雾霾，满是灰尘的柏油路`
- 参考图：
  - [动画 · 第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/7/71/Gloria_Martinez_02_EP1_CPEDGE.jpg/revision/latest?cb=20240721180726)
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/e/ef/NCART_EP4_CPEDGE.jpg/revision/latest?cb=20240721162737)
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/c/cd/David_01_EP4_CPEDGE.png/revision/latest?cb=20261102100240)

### 医生诊所（义体医生）（Doc's Clinic）
- 大区：圣多明戈；出场：第 1、2、4 集
- 剧情：义体医生 Doc 的地下诊所，大卫在这里装上斯安威斯坦。
- 画面（动画）：整个画面被青绿色统一染色，只留一道洋红边缘光；手术台、吊臂、挂着线缆的义体零件，医生叼着烟。
- 道具：手术台、机械吊臂、垂挂线缆、拆开的义体零件、香烟烟雾
- 动画风光感：整个画面统一成青绿色调，加一道洋红边缘光
- 游戏风光感：肮脏的诊所，日光灯和霓虹混合照明，手术器械，锈迹和污渍
- 配色（动画）：`#0FD3B8` `#063A3A` `#FF3FA4` `#C8FFF2`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, underground ripperdoc clinic, operating chair, robotic surgical arms, hanging cables and cyberware parts, cigarette smoke, entire scene graded monochrome teal with a magenta rim light`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，地下义体医生诊所，手术椅，机械手术臂，垂挂的线缆和义体零件，香烟烟雾，整个画面统一成青绿色调，加一道洋红边缘光`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, underground ripperdoc clinic, operating chair, robotic surgical arms, hanging cables and cyberware parts, cigarette smoke, grimy clinic, mixed fluorescent and neon light, surgical tools, rust and stains`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，地下义体医生诊所，手术椅，机械手术臂，垂挂的线缆和义体零件，香烟烟雾，肮脏的诊所，日光灯和霓虹混合照明，手术器械，锈迹和污渍`
- 参考图：
  - [动画 · 第一季截图 · 第1集](https://static.wikia.nocookie.net/cyberpunk/images/6/63/Doc_01_EP1_CPEDGE.png/revision/latest?cb=20261028041643)
  - [动画 · 第一季截图 · 第2集](https://static.wikia.nocookie.net/cyberpunk/images/6/66/Doc_02_EP2_CPEDGE.png/revision/latest?cb=20261031111928)
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/b/bc/Doc_03_EP4_CPEDGE.jpg/revision/latest?cb=20240721162226)

### Lizzie's Bar（超梦俱乐部）（Lizzie's Bar）
- 大区：沃森区；出场：第 4 集
- 剧情：歌舞伎区的超梦俱乐部，Mox 帮的总部。
- 画面（动画）：洋红和紫色灯光铺满全场，舞台地面发光，招牌是青白色的哥特花体字加猫形图案；人群坐在发光的长台边。
- 道具：哥特花体霓虹招牌、发光舞台边、超梦设备、Mox 帮成员、粉紫灯管
- 动画风光感：整个房间铺满平涂的洋红和紫色
- 游戏风光感：洋红和紫色霓虹，光亮地面反射，体积雾
- 配色（动画）：`#FF2A8A` `#5B1C8F` `#14F0FF` `#1A0A24`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, braindance nightclub, glowing stage edge, gothic script neon sign, punk gang members lounging, whole room flooded in flat magenta and purple`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，超梦夜店，发光的舞台边，哥特花体霓虹招牌，懒散坐着的朋克帮派成员，整个房间铺满平涂的洋红和紫色`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, braindance nightclub, glowing stage edge, gothic script neon sign, punk gang members lounging, magenta and purple neon, glossy floor reflections, volumetric haze`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，超梦夜店，发光的舞台边，哥特花体霓虹招牌，懒散坐着的朋克帮派成员，洋红和紫色霓虹，光亮地面反射，体积雾`
- 参考图：
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/7/76/Lizzie%27s_Bar_01_EP4_CPEDGE.png/revision/latest?cb=20261102094001)
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/7/73/Lizzie%27s_Bar_Sign_01_EP4_CPEDGE.png/revision/latest?cb=20261102094003)
  - [游戏 · 游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/1/1d/Lizzie%27s_Bar_Interior_01_CP2077.png/revision/latest?cb=20261113104102)

### 来生酒吧（Afterlife）（Afterlife）
- 大区：沃森区；出场：第 4 集
- 剧情：小中华区的佣兵酒吧，由旧停尸房改建，雇佣兵在这里接活。曼恩小队在这里聚会。
- 画面（动画）：全场酸性绿霓虹，吧台是长长的发光弧线，招牌是闪电形的 AFTERLIFE 字样；吧台椅一排，酒保后面是层层酒架。
- 道具：闪电形 AFTERLIFE 招牌、发光弧形吧台、停尸房式的金属结构、一排吧台椅、雇佣兵客人
- 动画风光感：整个画面染成酸性绿
- 游戏风光感：暗色金属停尸房内部的绿色霓虹点缀，体积雾
- 配色（动画）：`#3BFF6B` `#0A3B2A` `#E6FF4A` `#14F0FF`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, mercenary bar converted from a morgue, long glowing curved bar counter, lightning-shaped neon sign, row of bar stools, mercs drinking, everything graded acid green`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，由停尸房改建的佣兵酒吧，长长的发光弧形吧台，闪电形霓虹招牌，一排吧台椅，喝酒的雇佣兵，整个画面染成酸性绿`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, mercenary bar converted from a morgue, long glowing curved bar counter, lightning-shaped neon sign, row of bar stools, mercs drinking, green neon accents in a dark metal morgue interior, volumetric haze`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，由停尸房改建的佣兵酒吧，长长的发光弧形吧台，闪电形霓虹招牌，一排吧台椅，喝酒的雇佣兵，暗色金属停尸房内部的绿色霓虹点缀，体积雾`
- 参考图：
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/1/15/Afterlife_01_EP4_CPEDGE.png/revision/latest?cb=20261101140651)
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/b/b3/Afterlife_02_EP4_CPEDGE.jpg/revision/latest?cb=20261101140237)
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/8/8c/Afterlife_Sign_01_EP4_CPEDGE.png/revision/latest?cb=20261101140652)
  - [动画 · 第一季截图 · 第4集](https://static.wikia.nocookie.net/cyberpunk/images/c/c4/Maine%27s_Crew_02_EP4_CPEDGE.png/revision/latest?cb=20261102095217)
  - [游戏 · 游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/3/3f/Afterlife_Infobox_CP2077.jpg/revision/latest?cb=20240820041416)

### Jacked and Coke 酒吧（Jacked and Coke）
- 大区：海伍德；出场：第一季
- 剧情：维斯塔德雷街角的小酒吧。
- 画面（动画）：夜晚的街角，粉色灯管字招牌，橙黄路灯照着空荡的人行道，低矮的一层店面。
- 道具：粉色灯管字招牌、橙黄路灯、街角、空荡人行道
- 动画风光感：平涂的橙色路灯和粉色霓虹，深蓝夜空
- 游戏风光感：钠灯路灯，潮湿柏油路面反光
- 配色（动画）：`#F28A2E` `#FF5FA0` `#101828` `#3A2A20`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, quiet street corner bar at night, pink neon tube sign, empty sidewalk, low single-story storefront, flat orange lamp light and pink neon, deep blue night`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，夜晚安静的街角酒吧，粉色灯管霓虹招牌，空荡的人行道，低矮的一层店面，平涂的橙色路灯和粉色霓虹，深蓝夜空`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, quiet street corner bar at night, pink neon tube sign, empty sidewalk, low single-story storefront, sodium vapor street lamps, wet asphalt reflections`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，夜晚安静的街角酒吧，粉色灯管霓虹招牌，空荡的人行道，低矮的一层店面，钠灯路灯，潮湿柏油路面反光`
- 参考图：
  - [动画 · 第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/c/c0/Jacked_and_Coke_01_CPEDGE.png/revision/latest?cb=20251117102738)

### Tom's Diner 餐馆（Tom's Diner）
- 大区：沃森区；出场：第 8 集
- 剧情：小中华区 24 小时营业的复古餐馆，掮客法拉第在这里和人碰头。
- 画面（动画）：复古美式餐馆：黑白格地板、红色卡座、窗外是夜色；屋顶有巨型汉堡霓虹招牌。
- 道具：黑白格地板、红色卡座、复古吧台、巨型汉堡霓虹招牌
- 动画风光感：平涂的暖色室内和窗外青色夜色
- 游戏风光感：温暖的室内光，写实的镀铬和人造革，窗外的汉堡霓虹招牌
- 配色（动画）：`#E2261C` `#F4F1E8` `#111111` `#7FE3F0`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, retro american diner at night, black and white checkered floor, red booths, large windows, giant burger neon sign on the roof, flat warm interior and cyan night outside`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，夜晚的复古美式餐馆，黑白格地板，红色卡座，大窗户，屋顶上的巨型汉堡霓虹招牌，平涂的暖色室内和窗外青色夜色`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, retro american diner at night, black and white checkered floor, red booths, large windows, giant burger neon sign on the roof, warm interior light, realistic chrome and vinyl, neon burger sign outside`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，夜晚的复古美式餐馆，黑白格地板，红色卡座，大窗户，屋顶上的巨型汉堡霓虹招牌，温暖的室内光，写实的镀铬和人造革，窗外的汉堡霓虹招牌`
- 参考图：
  - [动画 · 第一季截图 · 第8集](https://static.wikia.nocookie.net/cyberpunk/images/3/3c/Tom%27s_Diner_EP8_CPEDGE.png/revision/latest?cb=20261111051259)
  - [游戏 · 游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/e/eb/Tom%27s_Diner_Exterior_01_CP2077.png/revision/latest?cb=20260301145759)

### Totentanz 夜店（漩涡帮）（Totentanz）
- 大区：沃森区；出场：第一季
- 剧情：北部工业区的夜店，漩涡帮的地盘。
- 画面（动画）：粗野主义的红褐色高塔，笼罩在暖红色雾霾里；内部是红色屏幕墙和挤满的帮派成员。
- 道具：粗野主义塔楼、红色雾霾、红色屏幕墙、工业管道
- 动画风光感：红橙色雾霾和平涂剪影
- 游戏风光感：红橙色烟雾，粗糙的工业混凝土，体积光束
- 配色（动画）：`#F28A2E` `#3A1E10` `#E1261C` `#FFD58A`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, brutalist industrial tower nightclub, gang territory, red screen walls inside, red-orange haze with flat silhouettes`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，粗野主义工业塔楼夜店，帮派地盘，内部是红色屏幕墙，红橙色雾霾和平涂剪影`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, brutalist industrial tower nightclub, gang territory, red screen walls inside, red-orange smog, raw industrial concrete, volumetric light shafts`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，粗野主义工业塔楼夜店，帮派地盘，内部是红色屏幕墙，红橙色烟雾，粗糙的工业混凝土，体积光束`
- 参考图：
  - [动画 · 第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/6/64/Totentanz_Exterior_01_CPEDGE.png/revision/latest?cb=20260611194106)
  - [游戏 · 游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/b/b5/Totentanz_Concept_Art_01_CP2077.jpg/revision/latest?cb=20210516204401)

### 歌舞伎区 · 琪薇的公寓（Yaiba 大楼）（Kabuki / Kiwi's Apartment）
- 大区：沃森区；出场：第 3、8 集
- 剧情：琪薇住在歌舞伎区 Yaiba 大楼里；歌舞伎区是密集的旧日式街区。
- 画面（动画）：狭窄房间里墙上挂满发光屏幕，地上堆着线缆和床垫，蓝紫色调；也可以是暖橙色工业室内配青色桌椅。
- 道具：满墙屏幕、线缆、地铺床垫、窄小窗户
- 动画风光感：蓝紫色屏幕光，平涂色块
- 游戏风光感：多块显示器的光，缠绕的线缆，写实的杂物
- 配色（动画）：`#1A1A3A` `#6F7BFF` `#14F0FF` `#F28A2E`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, cramped netrunner apartment, walls covered in screens, cables on the floor, mattress, blue-purple screen light, flat shapes`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，狭小的网络行者公寓，墙上挂满屏幕，地上的线缆和床垫，蓝紫色屏幕光，平涂色块`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, cramped netrunner apartment, walls covered in screens, cables on the floor, mattress, multiple monitor glow, tangled cables, realistic clutter`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，狭小的网络行者公寓，墙上挂满屏幕，地上的线缆和床垫，多块显示器的光，缠绕的线缆，写实的杂物`
- 参考图：
  - [动画 · 第一季截图 · 第3集](https://static.wikia.nocookie.net/cyberpunk/images/1/12/Kiwi_01_EP3_CPEDGE.png/revision/latest?cb=20261101073744)
  - [动画 · 第一季截图 · 第8集](https://static.wikia.nocookie.net/cyberpunk/images/9/9e/Kiwi_%26_Faraday_01_EP8_CPEDGE.png/revision/latest?cb=20261111045730)
  - [游戏 · 游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/f/f9/Marthe-jonkers-mjonkers-kabuki1.jpg/revision/latest?cb=20261111213511)
  - [游戏 · 游戏概念图](https://static.wikia.nocookie.net/cyberpunk/images/b/b5/Marthe-jonkers-mjonkers-kabuki2.jpg/revision/latest?cb=20261111213513)

### 货运站（Freight Station）
- 大区：圣多明戈；出场：第一季
- 剧情：曼恩小队行动时出现的货运站。
- 画面（动画）：白天的工业货运站：一排车库门、改装跑车、彩虹镜头光晕；俯拍时是红色货柜堆和绿色波纹铁皮屋顶。
- 道具：车库门、改装车、红色货柜堆、绿色铁皮屋顶、镜头光晕
- 动画风光感：高饱和日光，彩虹镜头光晕
- 游戏风光感：明亮日光，尘土飞扬的工业场地，风化的货柜
- 配色（动画）：`#7FE3F0` `#C8402E` `#6FA85A` `#F4F1E8`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, industrial freight yard, row of garage doors, modified sports car, red shipping containers and green corrugated roofs, high saturation daylight, rainbow lens flare`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，工业货运站，一排车库门，改装跑车，红色货柜和绿色波纹铁皮屋顶，高饱和日光，彩虹镜头光晕`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, industrial freight yard, row of garage doors, modified sports car, red shipping containers and green corrugated roofs, bright daylight, dusty industrial yard, weathered shipping containers`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，工业货运站，一排车库门，改装跑车，红色货柜和绿色波纹铁皮屋顶，明亮日光，尘土飞扬的工业场地，风化的货柜`
- 参考图：
  - [动画 · 第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/0/0a/David_and_Maine_at_Freight_Station_CPEDGE.png/revision/latest?cb=20240715160133)
  - [动画 · 第一季截图](https://static.wikia.nocookie.net/cyberpunk/images/3/38/David_and_Lucy_arrive_at_Freight_Station_CPEDGE.png/revision/latest?cb=20240715162112)

### 日本街顶层公寓 · 屋顶（Japantown Penthouse / Rooftops）
- 大区：威斯布鲁克 · 日本街；出场：第 7 集起
- 剧情：大卫和露西后期住在日本街的顶层公寓；两人常在屋顶看夜空。
- 画面（动画）：屋顶上方是纯黑星空，两人仰望；室内是暗色的科技公寓，青色灯带，窗外是城市灯光。
- 道具：屋顶边缘、星空、大落地窗、青色灯带、城市远景
- 动画风光感：纯黑星空，青色和黄色边缘光
- 游戏风光感：大落地窗，城市灯光虚化，冷色环境光
- 配色（动画）：`#05070F` `#14F0FF` `#FCEE0A` `#FF9CCB`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, rooftop of a high-rise at night, couple looking up at the sky, luxury penthouse interior with light strips and city lights through the windows, pure black starry sky, cyan and yellow rim light`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，夜晚高楼屋顶，两人仰望天空；豪华顶层公寓内部，灯带，窗外是城市灯光，纯黑星空，青色和黄色边缘光`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, rooftop of a high-rise at night, couple looking up at the sky, luxury penthouse interior with light strips and city lights through the windows, floor-to-ceiling windows, city light bokeh, cool ambient light`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，夜晚高楼屋顶，两人仰望天空；豪华顶层公寓内部，灯带，窗外是城市灯光，大落地窗，城市灯光虚化，冷色环境光`
- 参考图：
  - [动画 · 第一季截图 · 第7集](https://static.wikia.nocookie.net/cyberpunk/images/b/b6/David_Lucy_EP7_CPEDGE.png/revision/latest?cb=20261106110456)
  - [动画 · 第一季截图 · 第7集](https://static.wikia.nocookie.net/cyberpunk/images/1/1d/David_06_EP7_CPEDGE.png/revision/latest?cb=20261105185305)
  - [游戏 · 游戏截图 / 宣传图](https://static.wikia.nocookie.net/cyberpunk/images/f/f4/Japantown_2077_p1.jpeg/revision/latest?cb=20201001000528)

### 月球（The Moon）
- 大区：月球；出场：第 2 集（超梦）、第 10 集
- 剧情：第 2 集大卫和露西在超梦里开着月球车奔驰；第 10 集露西独自来到月球。
- 画面（动画）：灰白月面加纯黑天空，斜射的光束；白色模块化基地挂着 MOON TOURS 标志；观光车内部是成排座椅和彩色屏幕；舷窗外看到地球。
- 道具：月球车、白色模块化基地、MOON TOURS 标志、宇航服、舷窗、地球
- 动画风光感：纯白地表和纯黑天空，硬朗的光束
- 游戏风光感：写实月壤，强烈阳光，深黑阴影
- 配色（动画）：`#E9E9EC` `#0B0B10` `#FFE7A3` `#6FA8FF`
- 动画提示词（英）：`Cyberpunk Edgerunners anime screencap, Studio Trigger style, 2D cel animation, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, strong monochrome neon color grading, detailed painted background, lunar surface, white modular moon base with tourist signs, moon buggy, astronaut suits, earth seen through a porthole, pure white ground and pure black sky, hard light beams`
- 动画提示词（中）：`赛博朋克边缘行者动画截图，扳机社画风，二维赛璐璐动画，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，强烈的单色霓虹调色，细节丰富的绘制背景，月球表面，挂着观光标志的白色模块化月球基地，月球车，宇航服，舷窗外的地球，纯白地表和纯黑天空，硬朗的光束`
- 游戏提示词（英）：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, lunar surface, white modular moon base with tourist signs, moon buggy, astronaut suits, earth seen through a porthole, realistic lunar regolith, harsh sunlight, deep black shadows`
- 游戏提示词（中）：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，月球表面，挂着观光标志的白色模块化月球基地，月球车，宇航服，舷窗外的地球，写实月壤，强烈阳光，深黑阴影`
- 参考图：
  - [动画 · 第一季截图 · 第10集](https://static.wikia.nocookie.net/cyberpunk/images/9/90/Moon_01_EP10_CPEDGE.jpg/revision/latest?cb=20240809161804)
  - [动画 · 第一季截图 · 第10集](https://static.wikia.nocookie.net/cyberpunk/images/a/a0/Moon_Station_EP10_CPEDGE.jpg/revision/latest?cb=20240809161802)
  - [动画 · 第一季截图 · 第10集](https://static.wikia.nocookie.net/cyberpunk/images/6/67/Moon_AV_EP10_CPEDGE.jpg/revision/latest?cb=20240809161757)
  - [动画 · 第一季截图 · 第10集](https://static.wikia.nocookie.net/cyberpunk/images/9/99/Earth_EP10_CPEDGE.jpg/revision/latest?cb=20240809162340)
  - [动画 · 第一季截图 · 第2集](https://static.wikia.nocookie.net/cyberpunk/images/0/0d/David_Lucy_Moon_03_EP2_CPEDGE.jpg/revision/latest?cb=20240809160907)
  - [动画 · 第一季截图 · 第10集](https://static.wikia.nocookie.net/cyberpunk/images/8/8f/Lucy_Moon_01_EP10_CPEDGE.jpg/revision/latest?cb=20240809160909)

## 每集主视觉（动画）
- 第 1 集 Let You Down：[图](https://static.wikia.nocookie.net/cyberpunk/images/b/b1/LetYouDown_Infobox_CPEDGE.png/revision/latest?cb=20220914164943)
- 第 2 集 Like A Boy：[图](https://static.wikia.nocookie.net/cyberpunk/images/d/d2/LikeABoy_Infobox_CPEDGE.png/revision/latest?cb=20220913075511)
- 第 3 集 Smooth Criminal：[图](https://static.wikia.nocookie.net/cyberpunk/images/e/e4/SmoothCriminal_Infobox_CPEDGE.png/revision/latest?cb=20220913075728)
- 第 4 集 Lucky You：[图](https://static.wikia.nocookie.net/cyberpunk/images/c/c3/LuckyYou_Infobox_CPEDGE.png/revision/latest?cb=20220913195634)
- 第 5 集 All Eyez On Me：[图](https://static.wikia.nocookie.net/cyberpunk/images/0/00/AllEyezOnMe_Infobox_CPEDGE.png/revision/latest?cb=20220913201453)
- 第 6 集 Girl on Fire：[图](https://static.wikia.nocookie.net/cyberpunk/images/e/ed/GirlOnFire_Infobox_CPEDGE.png/revision/latest?cb=20220913202610)
- 第 7 集 Stronger：[图](https://static.wikia.nocookie.net/cyberpunk/images/5/55/Stronger_Infobox_CPEDGE.png/revision/latest?cb=20220913202736)
- 第 9 集 Humanity：[图](https://static.wikia.nocookie.net/cyberpunk/images/2/2f/Humanity_Infobox_CPEDGE.png/revision/latest?cb=20220913203308)
- 第 10 集 My Moon My Man：[图](https://static.wikia.nocookie.net/cyberpunk/images/4/48/MyMoonMyMan_Infobox_CPEDGE.png/revision/latest?cb=20220913203338)

## 提示词模板
### 动画风
- **establishing**
  - 中：`{动画画风关键词}，远景建立镜头，{大区描述}，{地点描述}，{情绪主色}调色，无人物`
  - EN：`{anime_keywords}, wide establishing shot, {district_body}, {location_body}, {color_mood} color grading, no characters`
- **character_in_scene**
  - 中：`{动画画风关键词}，{角色描述}，身处{地点描述}，{情绪主色}调色同时覆盖角色和环境，中景`
  - EN：`{anime_keywords}, {character_prompt}, in {location_body}, {color_mood} color grading over character and environment, medium shot`
### 游戏风
- **establishing**
  - 中：`{游戏画风关键词}，远景建立镜头，{大区描述}，{地点描述}，{光照预设}`
  - EN：`{game_keywords}, wide establishing shot, {district_body}, {location_body}, {lighting_preset}`
- **character_in_scene**
  - 中：`{游戏画风关键词}，{角色描述（补写实细节）}，身处{地点描述}，{光照预设}，电影感中景`
  - EN：`{game_keywords}, {character_prompt with realistic details}, in {location_body}, {lighting_preset}, cinematic medium shot`

## 场景生成步骤
- 1 先定风格：动画风还是游戏风，两套不混用（见 style_guides.json）
- 2 定光：动画风从 color_moods 选一个主色（一场戏只用一个）；游戏风从 game.lighting_presets 选光照预设
- 3 定大区 → districts 决定建筑类型、阶层和底色
- 4 定具体地点 → locations 的 body 是中性描述，再接上 anime_look 或 game_look
- 5 加一个霓虹招牌或标志性道具，让地点一眼能认出来
- 6 参考图只看 style 与所选风格一致的；另一种风格的图只用来参考建筑结构
- 7 选镜头并出图；记得带上对应风格的负面词
- 一致性：同一地点每次出现都用同一组主色、同一个招牌、同两三件道具，方便连续镜头保持一致。
