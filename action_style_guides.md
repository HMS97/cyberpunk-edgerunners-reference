# 赛博朋克三套动作风格：游戏 / 边缘行者第一季 / 第二季

**规则：**动作风格和画风一一对应，不要混用：游戏风画面配游戏动作，第一季动画配第一季动作，第二季动画配第二季动作。生成时把 style_guides.json 里对应画风的 keywords 放在最前面，再接本文件的动作 keywords、角色描述、义体动作和地点。

> evidence=source 的条目有出处（src 对应 sources 里的 id）；observed 是从官方截图或 Sakugabooru 预览图归纳的。
>
> 本版没有下载或观看任何视频：Sakugabooru 预览图只是片段第一帧，节奏、帧数、残影换色顺序、镜头运动这类只能靠视频确认的点都列在各节的 gaps 里。

**提示词拼接顺序：**画风 keywords（style_guides.json） → 动作 keywords（本文件） → 角色描述（edgerunners_character_kb.json） → 义体动作 ability_moves[].motion/fx → 地点描述（scene KB 的 body） → 两份负面词合并

## 游戏动作风格 · Cyberpunk 2077
以第一人称为核心的写实义体战斗：手臂与武器占据画面下缘，动作快、往前压、不留喘息（开发者以《DOOM》为参照），靠斯安威斯坦、Kerenzikov 这类时间减速制造节奏断点；驾驶和部分过场才切到第三人称，宣传图则偏电影感的低机位、霓虹和烟尘。

### 规则
- **视角原则**：游戏几乎全程第一人称，过场也以第一人称为主。CDPR 官方说法：只有在物品栏、驾驶、镜子和“极少数”过场里才能看到自己的角色。生成画面时，默认用玩家眼睛的高度去看，主角只露出手、前臂和武器。 （[VGC：《赛博朋克 2077》将“100% 第一人称”，](https://www.videogameschronicle.com/news/cyberpunk-will-be-100-first-person-apart-from-some-cut-scenes/)，[Wccftech：CDPR 解释第一人称视角（Patri](https://wccftech.com/cyberpunk-2077-first-person/)）
- **第一人称近战的设计难点**：资深玩法设计师 Pawel Kapala 承认，第一人称近战“从一开始就极难做”，团队来自第三人称游戏背景；发售前最不满意的是近战命中时的视觉反馈。所以近战画面的重点是命中瞬间的反馈，靠刀光、血雾、断肢和受击硬直来体现，不靠镜头绕着角色转。 （[GamingBolt：CDPR 仍在打磨近战，“并非 1](https://gamingbolt.com/cyberpunk-2077-cd-projekt-red-still-working-on-melee-combat-not-100-percent-happy)）
- **战斗节奏（2.0）**：2.0 的玩法设计负责人 Karol Matyasik 说，许多战斗技能以《DOOM》系列为灵感，追求“高速、不停歇、凶狠、往前推进”的战斗。技能树按“strong solo”“cyberninja”等角色幻想来设计，《边缘行者》也是直接灵感来源（例如 Edgerunner 技能）。动作提示词应强调持续压上，不要写成掩体后慢慢对射。 （[PC Gamer：2.0 重做受《暗黑破坏神2》技能树与](https://www.pcgamer.com/cyberpunk-2077s-20-overhaul-was-inspired-by-the-old-school-design-of-diablo-2s-skill-trees-and-dooms-relentless-combat/)）
- **动画制作方式**：官方资料能确认的只有这些：2.0 加入了近战处决（Finishers）；每把武器都有“首次装备”检视动画，2.0 起可以随时触发（PC 按住 B 或双击 Alt）；在义体医生处安装义体时，V 坐在手术椅上，不同义体播放不同动画。CDPR 2025 年在 GDC 讲过过场动画（Cinematic Animation，David Cordero Iglesias），但没找到公开的内容摘要。第一人称战斗动画是否用动作捕捉、用了多少，没有找到开发者原话。 （[CD PROJEKT RED 官方：Update 2.0](https://www.cyberpunk.net/en/news/49060/update-2-0)，[CDPR 官方博客：GDC 2025 参会回顾（含过场动](https://cdprojektred.com/en/blog/140/the-game-developers-conference-2025-experience)）
- **过场与互动**：CDPR 过场设计师 Kajetan Kasprowicz（GDC）把过场定义为“可互动的剧情段落”，玩家不仅靠选项，也靠动作控制过场的走向；《往日之影》的 Gig 追求过场和正常游玩“难以区分”。环境美术总监 Kacper Niepokólczycki 说，改用第一人称后，脚本场景变成 360° 可环顾的空间，玩家可以转头看。因此过场镜头不切镜、不做景别跳切，主观视角和角色保持对话距离。 （[Game Developer：CDPR 如何融合过场与互](https://www.gamedeveloper.com/design/hidden-choices-small-ripples-how-cdpr-merged-cinematics-and-interactivity-in-cyberpunk-2077)，[80.lv：夜之城几乎全部手工打造（CDPR 美术总监访](https://80.lv/articles/interview-how-cyberpunk-2077-s-night-city-was-built-almost-entirely-by-hand/)）
- **第三人称的使用场景**：2.0 允许在驾驶时用第一人称或第三人称战斗，开车时可以用手枪、冲锋枪，摩托上可以近战，还能射击或砍车胎；驾驶时第三人称镜头有三档距离。官方宣传图大量用第三人称低机位追车视角：车侧贴地、轮胎卷起白烟、枪口火焰和曳光弹横穿画面。 （[CD PROJEKT RED 官方：Update 2.0](https://www.cyberpunk.net/en/news/49060/update-2-0)，[Steam：Cyberpunk 2077 官方商店页截图](https://store.steampowered.com/app/1091500/Cyberpunk_2077/)，[Steam：Cyberpunk 2077: Phanto](https://store.steampowered.com/app/2138330/Cyberpunk_2077_Phantom_Liberty/)）
- **宣传图镜头语言**：从 Steam 和 GOG 官方截图归纳：多用贴地广角低机位（人物或车辆从下往上看，显得高大）；体积光、烟尘、逆光霓虹很多；动作定格在高潮瞬间，比如摩托侧滑射击、机甲爆炸后的烟尘、敌人跃起扑来；第一人称图中，枪械和手在画面下缘或右下，敌人直接冲向镜头。画面没有速度线和漫画式夸张透视。 （观察）
- **受击与画面特效**：技术美术开发者（SIGGRAPH 博客）介绍过超梦、赛博空间的后处理：类似高强度 JPEG 压缩的模糊；“VR 头显里的 VHS”式模拟信号质感；全屏实时像素排序（“像素在融化”）；点云扫描。这些是官方确认的“数字故障”美术语汇。战斗受击时的屏幕震动、色差、故障的具体参数，没有找到开发者原话。 （[SIGGRAPH 博客：Cyberspaces and ](https://blog.siggraph.org/2021/08/cyberspaces-and-braindances-in-cyberpunk-2077.html/)）
- **界面即玩法**：UI 开发者 Arkadiusz Antonik 在 GDC 讲过：UI 系统从零自建，城市里同时运行数千个独立 UI 实例，并且被用来实现独特的玩法功能（摘要原意：UI 不按常规用法，而是用于本作特有的玩法）。快速破解、扫描都直接叠在第一人称视野上。 （[GDC Vault：User Interface in ](https://gdcvault.com/play/1034160/User-Interface-in-Cyberpunk-2077)）
- **姿势与体量**：官方截图中，第三人称姿势多为写实站姿：肩扛重武器、手插口袋背对镜头、靠着车。没有动漫式定格大见得（大姿势亮相），力量感来自机位和光线，不来自夸张的肢体。 （观察）
- **机动性（2.0 / 往日之影）**：游戏总监 Gabe Amatangelo 提到空中冲刺、用武士刀格挡，把动作串成连招，“让你觉得自己是个赛博战士”，还能把人举起来砸向车辆（像《终结者》）。关卡设计负责人 Miles Tost 说，在狗镇“有合适的 build 时，跑酷穿行会顺畅、好玩得多”。 （[Shacknews：《往日之影》总监 Gabe Amat](https://www.shacknews.com/article/136031/cyberpunk-2077-phantom-liberty-interview-2023)，[GOG：2.0 更新与关卡设计负责人 Miles Tos](https://www.gog.com/news/update_20_to_cyberpunk_2077_is_here_check_out_an_interview_with_miles_tost_level_design_acting_lead_of_the_game)）
### 义体与招式动作
- **斯安威斯坦（Sandevistan）** （[Cyberpunk Wiki：Militech "Apo](https://cyberpunk.fandom.com/wiki/Militech_%22Apogee%22_Sandevistan)，[Cyberpunk Wiki：Sandevistan（社](https://cyberpunk.fandom.com/wiki/Sandevistan)，[CD PROJEKT RED 官方：Update 2.0](https://www.cyberpunk.net/en/news/49060/update-2-0)）
  - 动作：主动开启后，除使用者外的时间都被大幅放慢（Militech“Apogee”型号减速 85%，最长 6 秒），使用者仍以正常速度移动，在慢动作的敌群中穿行并逐个击杀；击杀可以延长持续时间。2.0 起可以中途手动关闭，带斯安威斯坦的敌人也会开启它来反制玩家。
  - 镜头：第一人称，镜头跟随快速转身和突进，敌人在画面里几乎静止。
  - 节奏：开启有短暂延迟，之后约 6 秒“世界冻结、自己正常速度”，结束时回到正常速度；冷却 25–30 秒。
  - 特效：游戏内画面色调变化和残影的具体样式未找到出处，需视频确认。《边缘行者》中大卫的彩色残影是动画表现，不能直接当作游戏表现。
- **Kerenzikov 反射加速** （[Cyberpunk Wiki：Kerenzikov](https://cyberpunk.fandom.com/wiki/Kerenzikov)，[CD PROJEKT RED 官方：Update 2.0](https://www.cyberpunk.net/en/news/49060/update-2-0)）
  - 动作：在滑铲、闪避或冲刺的过程中举枪瞄准，即触发短暂子弹时间（时间减慢约 60%，持续 2–3.75 秒），可以边滑行边射击。
  - 镜头：第一人称，镜头随滑铲压低，接近贴地视角，同时开镜瞄准。
  - 节奏：滑铲或冲刺的瞬间进入慢动作，开几枪后恢复；冷却 6–8 秒。
  - 特效：特效细节未找到出处，需视频确认。
- **狂暴（Berserk）** （[Cyberpunk Wiki：Berserk](https://cyberpunk.fandom.com/wiki/Berserk)）
  - 动作：主动开启的短时状态：大幅减伤，生命值不会掉到 25% 以下，并强化近战；结束后，每击杀一个敌人恢复 25% 生命。动作表现上适合用重武器或拳头正面硬冲。
  - 镜头：第一人称近身。
  - 节奏：短时爆发，开启后持续压上。
  - 特效：开启时的画面特效未找到出处，需视频确认。
- **螳螂刀（Mantis Blades）** （[Cyberpunk Wiki：Mantis Blades](https://cyberpunk.fandom.com/wiki/Mantis_Blades)，[Cyberpunk Wiki：Jailbreak（遗物技](https://cyberpunk.fandom.com/wiki/Jailbreak)，[GamePressure：玩法设计师 Yuliia Pr](https://www.gamepressure.com/editorials/i-do-believe-that-cyberpunk-was-always-a-good-game-interview-with/zd706)）
  - 动作：前臂弹出刀刃，快速连续斩击，可以对范围内的敌人跃起扑杀。点出遗物技能 Jailbreak 后，断肢或处决会给下一次跃击充能；蓄力跃击射程增加 30 米，并以大范围横斩同时命中周围敌人，击杀必定断肢。（遗物技能的原始构思之一，就是一个螳螂刀新技能。）
  - 镜头：第一人称，镜头随跃起抛高再俯冲到敌人面前，刀刃从画面两侧挥过。
  - 节奏：蓄力 → 远距离弹射 → 落地一刀，节奏为短停顿接爆发。
  - 特效：断肢、流血（10–20% 流血几率）；刀光和拖尾样式需视频确认。
- **大猩猩手臂（Gorilla Arms）** （[Cyberpunk Wiki：Gorilla Arms](https://cyberpunk.fandom.com/wiki/Gorilla_Arms)，[Cyberpunk Wiki：Jailbreak（遗物技](https://cyberpunk.fandom.com/wiki/Jailbreak)）
  - 动作：义体铁拳近战，造成物理伤害并可能流血。点出 Jailbreak 后，每次攻击都会为手臂充能，充满后一记重击造成巨额伤害并产生冲击波，震退周围敌人；用这一击击杀时，敌人尸体会被打飞。
  - 镜头：第一人称，双拳在画面下缘，重拳向画面中心挥出。
  - 节奏：连续轻击积攒能量，最后一记蓄满的重拳，节奏类似“攒力 → 爆发”。
  - 特效：冲击波、敌人被击飞（来自技能描述）；具体视觉需视频确认。
- **单分子线（Monowire）** （[Cyberpunk Wiki：Monowire](https://cyberpunk.fandom.com/wiki/Monowire)，[Cyberpunk Wiki：Jailbreak（遗物技](https://cyberpunk.fandom.com/wiki/Jailbreak)，[PC Gamer：2.0 重做受《暗黑破坏神2》技能树与](https://www.pcgamer.com/cyberpunk-2077s-20-overhaul-was-inspired-by-the-old-school-design-of-diablo-2s-skill-trees-and-dooms-relentless-combat/)）
  - 动作：从手腕甩出的单分子线，像鞭子一样远距离同时抽打多个敌人，射程是手臂义体中最长的。点出 Jailbreak 后有专属的控制类快速破解槽：蓄满力后挥出，命中目标时免费上传快速破解（例如短路、瘫痪）。2.0 智力树里也有单分子线处决。
  - 镜头：第一人称，线从手部向前甩出，大幅横扫。
  - 节奏：蓄力后一记长鞭，命中多人。
  - 特效：线的发光颜色、抓取或拉拽表现未找到出处；“抓取”效果在资料中未出现，需视频确认。
- **射弹发射系统（Projectile Launch System）** （[Cyberpunk Wiki：Projectile La](https://cyberpunk.fandom.com/wiki/Projectile_Launch_System)，[Cyberpunk Wiki：Jailbreak（遗物技](https://cyberpunk.fandom.com/wiki/Jailbreak)）
  - 动作：前臂展开成发射器，瞄准后发射爆炸弹头。蓄力弹伤害 +30%、爆炸半径 +25%、断肢几率 +40%。点出 Jailbreak 后可以超载，一次齐射 5 发，覆盖更大范围。
  - 镜头：第一人称，手臂抬起当枪用。
  - 节奏：蓄力 → 发射 → 爆炸。
  - 特效：爆炸、断肢；具体视觉需视频确认。
- **快速破解 / 网络入侵** （[CD PROJEKT RED 官方：Update 2.0](https://www.cyberpunk.net/en/news/49060/update-2-0)，[SIGGRAPH 博客：Cyberspaces and ](https://blog.siggraph.org/2021/08/cyberspaces-and-braindances-in-cyberpunk-2077.html/)，[GDC Vault：User Interface in ](https://gdcvault.com/play/1034160/User-Interface-in-Cyberpunk-2077)）
  - 动作：通过扫描锁定目标，从远处上传快速破解。2.0 可以对同一目标排队上传多个破解；内存不足时可以超频（Overclock），消耗生命值继续上传；能入侵 NCPD 警员和车辆。
  - 镜头：第一人称，敌人身上叠加扫描框和上传进度。
  - 节奏：上传有读条（2.0 调整了上传时间），属于“锁定 → 等待 → 生效”的延迟型节奏。
  - 特效：官方确认的数字美术语汇有像素排序（融化）、JPEG 压缩式模糊、VHS 质感和点云扫描（出自超梦和赛博空间的说明）。战斗中快速破解生效时的故障特效未见开发者原话，需视频确认。
- **冲刺 / 空中冲刺 / 二段跳 / 蓄力跳** （[Cyberpunk Wiki：Dash](https://cyberpunk.fandom.com/wiki/Dash)，[Cyberpunk Wiki：Air Dash](https://cyberpunk.fandom.com/wiki/Air_Dash)，[Cyberpunk Wiki：Reinforced Te](https://cyberpunk.fandom.com/wiki/Reinforced_Tendons)，[Shacknews：《往日之影》总监 Gabe Amat](https://www.shacknews.com/article/136031/cyberpunk-2077-phantom-liberty-interview-2023)）
  - 动作：2.0 的 Dash 技能取代原来的闪避，位移更远，并能自动翻越低矮障碍；Air Dash 允许空中冲刺。腿部义体“强化肌腱”提供二段跳，“强化脚踝”提供蓄力跳（按住起跳键蓄力，松开后跳得更远）。
  - 镜头：第一人称，镜头随冲刺快速横移，跳跃时视野抬高。
  - 节奏：短促的瞬间位移，可以与滑铲和 Kerenzikov 衔接。
  - 特效：冲刺时的画面特效需视频确认。
- **枪战（含车战）** （[CD PROJEKT RED 官方：Update 2.0](https://www.cyberpunk.net/en/news/49060/update-2-0)，[GOG：Cyberpunk 2077 官方商店页截图](https://www.gog.com/en/game/cyberpunk_2077)）
  - 动作：第一人称射击，武器有首次装备或检视动画，2.0 起可随时触发。2.0 起射击和近战消耗耐力；可以在驾驶中用手枪和冲锋枪射击，射击车胎。官方截图中，第一人称时霰弹枪从右下角入画，敌人从正面扑来。
  - 镜头：第一人称持枪；车战可以切第三人称追车镜头。
  - 节奏：连续压上，配合滑铲和冲刺。
  - 特效：枪口火焰、曳光弹、白烟（宣传图可见）。
- **处决（Finishers）** （[CD PROJEKT RED 官方：Update 2.0](https://www.cyberpunk.net/en/news/49060/update-2-0)，[Cyberpunk Wiki：Jailbreak（遗物技](https://cyberpunk.fandom.com/wiki/Jailbreak)，[GamePressure：玩法设计师 Yuliia Pr](https://www.gamepressure.com/editorials/i-do-believe-that-cyberpunk-was-always-a-good-game-interview-with/zd706)，[Shacknews：《往日之影》总监 Gabe Amat](https://www.shacknews.com/article/136031/cyberpunk-2077-phantom-liberty-interview-2023)）
  - 动作：2.0 新增近战武器处决；也有螳螂刀、单分子线等义体处决。处决可以触发其他能力，例如螳螂刀的跃击充能。另有举起敌人扔进人群或砸向车辆的动作。
  - 镜头：第一人称近距离，处决动画的具体镜头运动未找到资料。
  - 节奏：处决是战斗中的短暂停顿点，之后接下一段爆发。
  - 特效：断肢、流血；具体动画需视频确认。
### 提示词
- 关键词（英）：`first-person POV, cybernetic forearm and weapon in lower frame, gritty realistic cyberpunk combat, visceral push-forward aggression, Doom-like relentless pace, time-dilation slow motion with player at full speed, mantis blade leap strike, chrome gorilla-arm charged punch with shockwave, glowing monowire whip lash, arm-mounted projectile launcher, slide into bullet-time aim, air dash, double jump, holographic scan overlay, digital glitch pixel-sorting, VHS-in-VR-headset texture, neon rim light, volumetric smoke, muzzle flash and tracer rounds, low-angle wide lens chase shot, Night City streets`
- 关键词（中）：`第一人称主观视角、画面下缘的义体前臂与武器、写实粗粝的赛博朋克战斗、凶狠向前压、DOOM 式不停歇节奏、时间减速而自身正常速度、螳螂刀跃击、铬合金大猩猩手臂蓄力重拳加冲击波、发光单分子线鞭打、手臂射弹发射器、滑铲接子弹时间瞄准、空中冲刺、二段跳、全息扫描叠层、数字故障与像素排序、“VR 头显里的 VHS”质感、霓虹轮廓光、体积烟雾、枪口火焰与曳光弹、低机位广角追车镜头、夜之城街头`
- 负面词（英）：`anime speed lines, manga-style exaggerated foreshortening, cel shading, cartoon impact frames, chibi proportions, rainbow anime afterimages copied from Edgerunners, over-the-top superhero poses, floating third-person orbit camera during melee, clean sterile sci-fi, fantasy magic particles, slapstick ragdoll, low-detail plastic look`
- 负面词（中）：`动漫速度线、漫画式夸张透视、赛璐璐着色、卡通冲击帧、Q 版比例、照搬《边缘行者》的彩虹残影、夸张的超级英雄亮相姿势、近战时绕角色旋转的第三人称镜头、干净无菌的科幻风、奇幻魔法粒子、闹剧式布娃娃物理、低细节塑料感`
- AI 视频模板（英）：`First-person POV, gritty photoreal Cyberpunk 2077 style. {character}'s chrome cybernetic forearms fill the lower frame in {location}, neon signs bleeding through volumetric smoke. {character} triggers {ability}: the world drops into heavy time dilation while the viewer keeps moving at full speed, dashing forward and closing distance on frozen enemies; one decisive strike lands with sparks, blood mist and dismemberment, then time snaps back to normal speed. Handheld camera inertia, short stagger shake on impact, subtle digital glitch and holographic scan overlay at the edges, muzzle flashes and tracer rounds in the background. Relentless push-forward pacing, realistic body mechanics, no speed lines, no anime foreshortening.`
- AI 视频模板（中）：`第一人称主观视角，写实粗粝的《赛博朋克 2077》风格。{character}的铬合金义体前臂占据画面下缘，场景是{location}，霓虹招牌的光透过体积烟雾渗出。{character}发动{ability}：世界进入强烈的时间减速，镜头仍以正常速度向前冲刺，逼近几乎静止的敌人；决定性的一击落下，迸出火花、血雾并造成断肢，随后时间猛然恢复正常。镜头带手持惯性，命中时短促硬直震动，画面边缘有轻微数字故障和全息扫描叠层，背景是枪口火焰和曳光弹。节奏持续向前压，人体动作写实，不要速度线，不要动漫式夸张透视。`
### 参考
- [第一人称战斗官方截图：右下角霰弹枪入画，持刀莫霍克敌人挥砍，背景有敌人跃起扑来](https://www.gog.com/en/game/cyberpunk_2077)
- [第一人称对峙：V 的手持枪抵住漩涡帮成员，周围敌人的红色义眼发光](https://www.gog.com/en/game/cyberpunk_2077)
- [第一人称过场：画面下缘能看到 V 自己的腿（超梦椅），朱迪俯身看向镜头](https://www.gog.com/en/game/cyberpunk_2077)
- [车战第三人称：开着鸥翼门的车中枪手与 NCPD 警员对射，白烟加曳光弹](https://store.steampowered.com/app/1091500/Cyberpunk_2077/)
- [往日之影：低机位追拍摩托上的 V 回身射击，背后是喷烟的机甲](https://store.steampowered.com/app/2138330/Cyberpunk_2077_Phantom_Liberty/)
- [往日之影：狗镇日光下摩托车战，与装甲车对射](https://store.steampowered.com/app/2138330/Cyberpunk_2077_Phantom_Liberty/)
- [追车撞击：车辆翻滚、碎片和烟尘定格](https://store.steampowered.com/app/1091500/Cyberpunk_2077/)
- [第三人称写实站姿：V 肩扛重武器，霓虹逆光](https://store.steampowered.com/app/1091500/Cyberpunk_2077/)
### 资料不足
- 斯安威斯坦开启时游戏内的画面色调、残影和音效：没有找到开发者描述，需看实机视频确认；不能把《边缘行者》的彩虹残影直接当作游戏表现。
- 受击反馈（屏幕震动幅度、色差、故障效果、低血量时的画面变化）：没有开发者原话，需视频确认。
- 快速破解上传与生效时的故障特效、受到敌方网络入侵时的画面干扰：只有超梦和赛博空间的技术美术资料，战斗内表现需视频确认。
- 第一人称战斗动画是否用动作捕捉、用了多少，以及手臂和武器视角模型的制作方法：没有找到公开的 GDC 或访谈内容；GDC 2025 过场动画演讲只有标题，没有摘要。
- 近战处决、螳螂刀跃击、大猩猩手臂冲击波、单分子线的具体动画镜头（是否短暂接管镜头、有无慢镜）：只有技能文字描述，需视频确认。
- 单分子线的“抓取或拉拽”效果在资料中没有出现，可能不存在。
- 狂暴、二段跳和空中冲刺的视觉特效（屏幕泛红、残影、气流等）：未找到资料。
- 官方宣传片（2018 演示、E3 2019 预告、《往日之影》预告）的具体运镜：本次没有看视频，只从静态截图归纳了低机位、广角和烟尘逆光。
- 拍照模式的镜头参数（2.2 重做后的功能细节）：只有第三方报道，未纳入 sections。

## 动画动作风格 · 边缘行者第一季
金田系夸张透视与定格大姿势，配上逐帧摊开、每帧换色的子弹时间；动作里有大量 smear 形变和红黑冲击帧，血浆像泼出去的颜料，爆炸烟雾是有棱角的几何块面，霓虹逆光勾出轮廓。

### 规则
- **节奏 · 斯安威斯坦式慢动作**：做慢动作时不靠补间，而是把一个本来很快的动作拆开，原本会一闪而过的各个姿势全部留在画面上，像残影一样平铺，并逐张描绘。今石说：普通作画三张能画完的动作，做成慢动作要画到四十张左右；把画面停住、把姿势排开，靠画面信息量撑出慢放的感觉（他自己称之为“唬人”的手法）。 （[AWN：《赛博朋克：边缘行者》——向复古动画致敬（今石洋](https://www.awn.com/animationworld/cyberpunk-edgerunners-vibrant-ode-retro-anime)，[Fami 通：《赛博朋克：边缘行者》今石洋之 × CDP](https://www.famitsu.com/news/202210/15278443.html)）
- **色彩 · 每帧换色**：斯安威斯坦残影的每一层都换一种色调，按时间先后逐张偏色，形成彩虹或红青交替的拖尾。今石认为“每一张细细换色”是现在才做得到的表现；吉成曜说这是老动画里就有的手法，这次重新拿出来用。 （[AWN：《赛博朋克：边缘行者》——向复古动画致敬（今石洋](https://www.awn.com/animationworld/cyberpunk-edgerunners-vibrant-ode-retro-anime)，[Fami 通：《赛博朋克：边缘行者》今石洋之 × CDP](https://www.famitsu.com/news/202210/15278443.html)）
- **姿势 · 定格大姿势（金田系 / 今石 pose）**：动作不追求连续流畅，而是在几个夸张的关键姿势之间急切换，切到大姿势后停住十几帧，和极短的快速动作形成反差。四肢大幅伸展或收缩，剪影明确，像海报一样定格。 （[Animetudes：画师专题——今石洋之](https://animetudes.com/2021/07/11/artist-spotlight-hiroyuki-imaishi/)，[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[CGWORLD 用语解说：金田透视](https://cgworld.jp/terms/%E9%87%91%E7%94%B0%E3%83%91%E3%83%BC%E3%82%B9.html)）
- **镜头 · 夸张透视与纵深运动**：用“金田透视”（又叫“假透视”“动画透视”）：拳头、枪口、脚掌朝镜头冲出，近大远小被夸大到失真。镜头运动很多，常做快速拉远再猛推回，角色沿纵深方向冲进冲出画面。第一季的背景以游戏截图为参考，所以整体是写实的城市空间，前景人物则按动画方式变形。 （[CGWORLD 用语解说：金田透视](https://cgworld.jp/terms/%E9%87%91%E7%94%B0%E3%83%91%E3%83%BC%E3%82%B9.html)，[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[/Film：为什么《边缘行者》的导演喜欢迈克尔·贝](https://www.slashfilm.com/1012757/why-the-director-of-cyberpunk-edgerunners-loves-michael-bay)，[Fami 通：《赛博朋克：边缘行者》今石洋之 × CDP](https://www.famitsu.com/news/202210/15278443.html)）
- **形变与冲击帧**：快速动作用拉长的 smear 和沿轮廓的拖影表现，物体会整体变形。冲击帧是红黑、红青等强对比色块做成的抽象构图，或者是大面积黑底加红色剪影。Sakugabooru 上第一季大部分动作片段都带 smears 标签，第 1、3、4、6、9、10 集都有 impact_frames 标签。 （[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk%3A_edgerunners)）
- **特效 · 几何化爆炸与烟雾**：延续吉成曜式的爆炸：烟雾外轮廓有棱有角、不规则，内部阴影却是圆的，用来表现体积。火焰和光效用三角形、尖刺状色块组成。第 10 集导弹走廊那段（千田孝文原画）的评论直接说“吉成式效果太明显”。预览图中还能看到十字形的金田光芒和大面积镜头光晕（第 3 集带 kanada_light_flare 标签）。 （[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[Animetudes：画师专题——今石洋之](https://animetudes.com/2021/07/11/artist-spotlight-hiroyuki-imaishi/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk%3A_edgerunners)）
- **血液与暴力**：血不按写实方式画，而是像泼溅的颜料：成片的红色、放射状飞溅，常放在纯黑底上。今石明确表示不想因为审查就把表现藏起来，残酷和悲伤的场面要原样摆出来。从预览图看，第 6 集爆头镜头就是黑底、红色放射状血花、白色碎骨块。 （[Animetudes：画师专题——今石洋之](https://animetudes.com/2021/07/11/artist-spotlight-hiroyuki-imaishi/)，[Fami 通：《赛博朋克：边缘行者》今石洋之 × CDP](https://www.famitsu.com/news/202210/15278443.html)）
- **光影 · 霓虹逆光与单色压暗**：从预览图归纳：动作场面常把整个画面压成一种主色（暗青绿、深蓝、黑），再用高饱和的品红或红色勾出角色轮廓（rim light）。曼恩发疯和亚当·重锤的镜头里，角色几乎只剩黑色剪影加红色描边。今石说轮廓光“没有规则，按场面情绪来配”。 （观察）
- **节奏 · 一拍二、一拍三混用，急起急停**：金田系一贯的节奏是缓入缓出对比极强：动作要么停在姿势上，要么几帧之内完成；特效循环故意抽帧，做成不规则的节奏。第一季动作戏的原画阵容（菅野一期、佐藤利幸、五十岚海、金子雄人等）大多出自这一谱系。 （[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk%3A_edgerunners)）
- **整体取向 · 过量与速度优先**：今石喜欢迈克尔·贝式的“规模与速度”，原话是追求“有点歪、有点过头”的东西。动作重速度和数量，不重写实的重量和精确的招式设计。他也承认动画不可能比游戏画面更写实，所以要用动画特有的夸张来打。 （[/Film：为什么《边缘行者》的导演喜欢迈克尔·贝](https://www.slashfilm.com/1012757/why-the-director-of-cyberpunk-edgerunners-loves-michael-bay)，[Fami 通：《赛博朋克：边缘行者》今石洋之 × CDP](https://www.famitsu.com/news/202210/15278443.html)）
### 义体与招式动作
- **斯安威斯坦（加速义体）** （[AWN：《赛博朋克：边缘行者》——向复古动画致敬（今石洋](https://www.awn.com/animationworld/cyberpunk-edgerunners-vibrant-ode-retro-anime)，[Fami 通：《赛博朋克：边缘行者》今石洋之 × CDP](https://www.famitsu.com/news/202210/15278443.html)）
  - 动作：启动瞬间脊椎义体发光，角色停在蓄力姿势上，随后世界几乎停止。角色在静止的子弹、碎片和人群间穿行，每一步都留下一个完整的身体残影，残影沿路径排成一串；最后一下击打落到敌人身上时，时间恢复，所有冲击同时爆发。
  - 镜头：多为横向长距离平移或环绕，把整串残影一次收进画面；收尾切到敌人被打飞的特写，或者大透视冲向镜头的拳头。
  - 节奏：加速段把本来三张的动作摊成几十张，每张都停留；结束时一两帧内完成恢复和冲击，形成从极慢到极快的落差。
  - 特效：残影逐层换色（红、品红、青、绿等彩虹偏色），静止在空中的子弹、玻璃渣和血滴，脊椎发光，恢复时出现冲击帧。
- **单分子线（露西）** （观察）
  - 动作：线从手腕义体弹出，在空中甩成弧线和折线，像鞭子一样横扫或缠绕目标；切割完成后有短暂停顿，目标才分成两段。
  - 镜头：常以手部或线头的大透视近景开场，再接全景显示线的轨迹。
  - 节奏：甩出一两帧完成，切割后停留几帧再让目标分离（推测，未逐帧核实）。
  - 特效：发光的细线、高光拖尾和切口的血线。
- **大猩猩手臂 / 重击** （[CGWORLD 用语解说：金田透视](https://cgworld.jp/terms/%E9%87%91%E7%94%B0%E3%83%91%E3%83%BC%E3%82%B9.html)，[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk%3A_edgerunners)）
  - 动作：大幅后拉蓄力，拳头被放大到占满半个画面，打中后对象和地面一起碎裂、凹陷，身体被打飞很远。
  - 镜头：拳头朝镜头的金田透视；打中瞬间切到冲击帧，然后拉远看飞出去的距离。
  - 节奏：蓄力姿势停留，出拳一两帧，命中后停顿再爆开碎片。
  - 特效：冲击帧（红黑反色）、放射状速度线、有棱角的碎块和烟尘。
- **螳螂刀** （观察）
  - 动作：前臂外壳弹开，刀刃翻出，接着冲刺、横斩或从上劈下；斩击轨迹画成一整片弧形的 smear。
  - 镜头：低角度仰拍刀刃展开；斩击时镜头跟着轨迹扫过。
  - 节奏：展开那一下是机械式的快速咔嗒动作；斩击是一张 smear 加一张收刀的定格姿势。
  - 特效：刀刃高光、弧形拖影、喷溅成片的血。
- **网络潜行 / 骇入** （[AWN：《赛博朋克：边缘行者》——向复古动画致敬（今石洋](https://www.awn.com/animationworld/cyberpunk-edgerunners-vibrant-ode-retro-anime)，[Fami 通：《赛博朋克：边缘行者》今石洋之 × CDP](https://www.famitsu.com/news/202210/15278443.html)）
  - 动作：角色本身几乎不动，靠画面上的界面、数据层和人物特写来叙事；被骇入的目标身体会痉挛、冒烟，最后倒下。
  - 镜头：眼睛或面部大特写，叠加半透明的红色 HUD 面板（第 3 集预览图中有通话界面叠在角色脸上）。
  - 节奏：节奏偏慢，以切镜和界面变化推进，到骇入成功时才有爆发。
  - 特效：全息界面、扫描线、类比视频式的噪点和色散。今石说深潜场面最难，因为现有工具做不出来，只好参照老式模拟影像的表现，走动画里偏古典的路子。
- **狂暴 / 人体极限冲刺** （[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[/Film：为什么《边缘行者》的导演喜欢迈克尔·贝](https://www.slashfilm.com/1012757/why-the-director-of-cyberpunk-edgerunners-loves-michael-bay)）
  - 动作：全身前倾，以爆发式的冲刺撞穿障碍；四肢伸展的幅度远超常人，落地时把地面踩碎。
  - 镜头：纵深方向冲向镜头，或背后跟拍再猛然拉远。
  - 节奏：缓入缓出对比极强：蓄势停住，冲出时几帧就完成。
  - 特效：速度线、尘土、地面裂纹、冲击帧。
- **导弹 / 弹射武器齐射** （[Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk%3A_edgerunners)）
  - 动作：发射口打开，导弹带着弯曲的尾烟成群飞出，在走廊或空中交错，命中后连锁爆炸。
  - 镜头：从发射端追拍尾烟，或者从命中点反打；爆炸时拉远，让整个画面被烟填满。
  - 节奏：尾烟逐帧画出，爆炸的循环故意不规则。
  - 特效：吉成式有棱角的烟团和带圆形阴影的体积感，三角形火焰，强烈的白光闪光（第 10 集导弹走廊，千田孝文原画）。
- **赛博精神病发作（曼恩等）** （观察）
  - 动作：角色面部扭曲、狞笑，义体失控，对周围的人做出一连串粗暴杀戮；动作不连贯，姿势之间跳切，夹杂幻觉镜头。
  - 镜头：画面整体压暗，人物只剩剪影和红色描边；从低角度和近距离逼近，混入不稳定的构图。
  - 节奏：停住的狞笑特写加一两帧的暴力动作，再夹冲击帧和幻觉闪回。
  - 特效：红黑冲击帧、泼溅颜料式的血花、黑底上的红色放射状飞溅。从第 6 集预览图看，曼恩在昏暗中只有红色轮廓光（菅野一期原画，五十岚海作监）。
- **枪战（丽贝卡等）** （观察）
  - 动作：身形娇小的角色扛着远大于自己的武器，后坐力把整个人往后推，然后又摆出夸张的射击定格姿势；双持乱射时子弹和弹壳满天飞。
  - 镜头：枪口朝镜头的大透视，或者仰拍人物和重武器的剪影；被打中时切成特写。
  - 节奏：开火时射击的帧和后坐力的帧快速交替，打中后定格。
  - 特效：白色闪光和十字形枪火、弹道光束（第 9 集预览图中是青白色的横向弹道）、飞散的弹壳和火花。今石说他们有意拉开角色之间的身高和体格差距。
- **载具追逐 / 撞车** （观察）
  - 动作：车辆急转、漂移、撞击，车体变形翻滚，碎片和玻璃四散；第 1 集有挡风玻璃被打碎到刹车翻车的段落。
  - 镜头：车内主观视角和外部追拍交替；三维车辆模型配合手绘特效，背景动画跟着镜头走。
  - 节奏：撞击前有急停，撞击时一两帧冲击，之后翻滚的过程稍拉长。
  - 特效：火花、碎玻璃、有棱角的烟和爆炸。Sakugabooru 上第 1、3、10 集的这类片段带 vehicle、cgi、background_animation 标签。
### 提示词
- 关键词（英）：`Studio Trigger Imaishi action, Kanada-style exaggerated perspective, foreshortened fist toward camera, held dynamic key poses, snappy timing with extreme slow-in slow-out, smear frames, outline smears, red-black impact frames, abstract stark-color impact compositions, sandevistan bullet-time afterimages, each afterimage tinted a different color, rainbow chromatic trail, frozen bullets and glass shards, angular geometric smoke with round shadows, triangular flame shapes, Yoshinari-style explosions, cross-shaped Kanada light flare, paint-splatter blood on black background, neon magenta rim light, monochrome teal or dark blue dominant palette, cel-shaded 2D with flat colors and hard shadows, speed lines, screen-shaking impact, Night City neon`
- 关键词（中）：`扳机社 今石洋之式动作, 金田透视 夸张透视, 拳头冲向镜头, 定格大姿势, 急起急停的节奏, smear 形变, 轮廓拖影, 红黑冲击帧, 强对比色的抽象冲击构图, 斯安威斯坦子弹时间残影, 每层残影换色, 彩虹色拖尾, 悬停在空中的子弹和玻璃渣, 有棱角的几何烟雾 圆形阴影, 三角形火焰, 吉成式爆炸, 十字金田光芒, 黑底上泼颜料式血花, 霓虹品红轮廓光, 青绿或深蓝单色压暗, 平涂赛璐珞硬阴影, 速度线, 画面震动的冲击, 夜之城霓虹`
- 负面词（英）：`realistic motion capture, smooth interpolated 60fps motion, floaty tweening, soft cinematic motion blur, photorealistic rendering, 3D game cutscene look, first-person shooter HUD view, video game screenshot, shaky handheld realism, realistic blood and gore textures, volumetric photoreal smoke, round soft cartoon explosions, pastel low-contrast palette, chibi or moe proportions, static talking-head framing, weak foreshortening, Western 3D animation style, sketchy watercolor`
- 负面词（中）：`写实动作捕捉, 平滑插值的 60 帧动作, 飘忽的补间, 柔和的电影运动模糊, 照片级写实渲染, 3D 游戏过场的质感, 第一人称射击游戏视角和 HUD, 游戏截图感, 写实的手持晃动, 写实的血肉质感, 体积感写实烟雾, 圆滚滚的卡通爆炸, 粉彩低对比配色, Q 版或萌系比例, 静态对话镜头, 透视太弱, 欧美 3D 动画风格, 水彩草稿感`
- AI 视频模板（英）：`2D cel-shaded anime action shot in the style of Studio Trigger's Cyberpunk: Edgerunners (2022), directed with Hiroyuki Imaishi's Kanada-school energy. {character} uses {ability} in {location}, Night City at night. Open on a held, extreme-foreshortened key pose with magenta neon rim light against a dark teal monochrome background. The action snaps between bold poses with only one or two frames in between, using smear frames and outline smears for speed. If time slows, show bullet-time: the world freezes and {character} leaves a chain of full-body afterimages, each tinted a different color (red, magenta, cyan, green), with bullets and glass shards hanging in the air. At the moment of contact, cut to a stark red-and-black impact frame, then snap back to full speed with radial speed lines, angular geometric smoke with round shadows, triangular sparks and fire, and paint-splatter blood on a black background. The camera is aggressive: fist or gun barrel thrusting at the lens, a fast pull-out, then a snap zoom back in. Limited animation timing on twos and threes, flat colors, hard shadows.`
- AI 视频模板（中）：`二维赛璐珞平涂的动画动作镜头，风格参考扳机社《赛博朋克：边缘行者》（2022），带今石洋之那种金田系的冲劲。{character} 在 {location}（夜之城的夜晚）使用 {ability}。开场是一个定格的大透视关键姿势：深青绿色的单色背景，人物被霓虹品红勾出轮廓。动作在几个夸张姿势之间急切换，中间只有一两帧，用 smear 形变和轮廓拖影表现速度。如果有减速，就做子弹时间：世界静止，{character} 身后留下一串完整的身体残影，每一层残影换一种颜色（红、品红、青、绿），子弹和玻璃渣悬停在空中。命中瞬间切到红黑强对比的冲击帧，然后猛然恢复正常速度，配放射状速度线、有棱角的几何烟雾（阴影是圆的）、三角形的火花和火焰，以及黑底上泼颜料式的血花。镜头要凶：拳头或枪口直戳镜头，快速拉远再猛推回来。按有限动画的一拍二、一拍三节奏，平涂上色，硬阴影。`
### 参考
- [第1集·开场，警察围攻赛博精神病患者，冲击帧加雷光](https://www.sakugabooru.com/post/show/203917)（原画：菅野一期 Ichigo Kanno（Sakugabooru 标为 presumed））
- [第1集·赛博精神病患者在警车间开打，绿色单色压暗](https://www.sakugabooru.com/post/show/203918)（原画：金子雄人 Yuuto Kaneko）
- [第1集·大卫在荒坂学院被胜男殴打，最后一脚](https://www.sakugabooru.com/post/show/203927)（原画：佐藤利幸 Toshiyuki Sato（吉成曜修正））
- [第2集·大卫用斯安威斯坦痛打胜男](https://www.sakugabooru.com/post/show/204912)（原画：佐藤利幸 Toshiyuki Sato）
- [第2集·露西在列车里的表演和动作，带三维载具](https://www.sakugabooru.com/post/show/204424)（原画：宇田早纪子 Sakiko Uda）
- [第3集·露西的骇入界面叠在脸上，之后接载具追逐](https://www.sakugabooru.com/post/show/203949)（原画：牧野秀纪 Hidenori Makino、金子雄人 Yuuto Kaneko（作监修正））
- [第3集·无字幕版大场面，有背景动画、金田光芒和载具](https://www.sakugabooru.com/post/show/203954)（原画：菅野一期 Ichigo Kanno（帖子评论说片尾未署名））
- [第4集·爆炸、雷光和 smear 的混战](https://www.sakugabooru.com/post/show/203966)（原画：土肥紫门 Shimon Dohi）
- [第6集·曼恩赛博精神病发作，在暗处杀戮，红色剪影](https://www.sakugabooru.com/post/show/239348)（原画：菅野一期 Ichigo Kanno 原画，五十岚海 Kai Ikarashi 分镜和作监）
- [第6集·曼恩狞笑和冲击帧](https://www.sakugabooru.com/post/show/204000)（原画：佐藤利幸 Toshiyuki Sato）
- [第6集·爆头镜头，黑底上红色放射状血花](https://www.sakugabooru.com/post/show/204001)（原画：五十岚海 Kai Ikarashi、三木达也 Tatsuya Miki）
- [第9集·重型机甲和弹道光束的枪战](https://www.sakugabooru.com/post/show/204021)（原画：菅野一期 Ichigo Kanno（presumed））
- [第10集·丽贝卡举枪迎战，亚当·重锤命中时出冲击帧](https://www.sakugabooru.com/post/show/204030)（原画：原画师不明（artist_unknown））
- [第10集·亚当·重锤登场，红色剪影和大型义体](https://www.sakugabooru.com/post/show/204031)（原画：菅野一期 Ichigo Kanno（presumed））
- [第10集·荒坂走廊导弹齐射，吉成式爆炸](https://www.sakugabooru.com/post/show/204064)（原画：千田孝文 Takafumi Chida）
- [片头·爆炸特效（片头分镜五十岚海，演出今石洋之）](https://www.sakugabooru.com/post/show/203931)（原画：原画师不明（artist_unknown））
### 资料不足
- 没找到第一季动作作画监督或具体原画师谈招式设计的访谈（アニメスタイル、アニメージュ的相关内容没能在网上读到），各原画师的个人分工只能依赖 Sakugabooru 的标签和评论，很多标为 presumed 或 artist_unknown。
- 露西单分子线和螳螂刀的具体动作过程、帧数和特效样式没有文字资料，在 Sakugabooru 上也没能找到对应的确切帖子，只能看视频确认。
- Sakugabooru 的 preview_url 只是片段第一帧（sample_url 是视频，按要求没有下载），所以斯安威斯坦残影换色的具体顺序、冲击帧的配色和持续帧数、一拍几的节奏都没法从静态图核实。
- 第 3 集 203954（荒漠场景）和第 9 集 204021 的具体情节没能确认，标签说明是按标签和预览图写的。
- “今石 pose”不是有文献定义的正式术语；这里用金田透视和新金田派的分析来支撑，没有找到今石或吉成曜谈《边缘行者》姿势设计的原话。
- 亚当·重锤和大卫最终战（第 10 集）的完整动作流程，以及大卫大猩猩手臂的具体用法，没有找到可靠的文字拆解。

## 动画动作风格 · 边缘行者第二季
粗粝、不那么「编排」的暴力：动作更脏更重、常夹在 Roman 摄像机的画中画里；特效以红色闪电、烟、火和金田式尖刺光为主，色彩会在打斗中掉光只剩线稿，光被当成压在人身上的力量。

### 规则
- **整体定位：更粗粝、更不像编排好的**：Anime Corner 评第一集：暴力比第一季「更丑、更少编排」，赛博精神病被表现得不像爆炸，更像信号逐渐劣化；身体动起来带一种粗糙感。io9 评论说每一帧都更粗、更生、更不受控。 （[Anime Corner：第二季第一集评论（Gamesc](https://animecorner.me/cyberpunk-edgerunners-season-2-episode-1-review-first-impressions-from-gamescom-2026/)，[io9/Gizmodo：Cyberpunk: Edger](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)）
- **90 年代动画味：粗线、颗粒光**：评论描述为「90 年代动画风味」，线更重、光更有颗粒，像同一座城换了胶片拍。导演本人在访谈里补充：菅野的特效参考其实先是「金田风」的尖刺特效，而不是笼统的 90 年代。 （[Anime Corner：第二季第一集评论（Gamesc](https://animecorner.me/cyberpunk-edgerunners-season-2-episode-1-review-first-impressions-from-gamescom-2026/)，[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)）
- **金田式尖刺特效**：五十岚海说菅野一期作画时，先有的参考是金田伊功式的刺状特效。Sakugabooru 第二季帖子里也有 kanada_light_flare（#03、#10）和 kanada_dragon（#10）标签。写提示词时可用：锯齿状光芒、尖刺形爆光、几何化火焰。 （[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)）
- **特效构成：闪电、烟、火占大头**：Sakugabooru 第二季 157 条帖子里：effects 111、smears 83、smoke 64、lightning 62、liquid 33、fire 21、explosions 12、impact_frames 5。和第一季 130 条比，lightning 从 16 条升到 62 条，fire 从 5 条升到 21 条，sparks 反而从 36 条降到 22 条（标签由用户标注，只能看趋势）。 （[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners)）
- **D 的骇入：红色闪电满屏弹跳**：评论描述 D 的网络骇入是一道道红色闪电在画面里穿梭、弹跳，落到哪里哪里就乱：把车掀飞、让整片街区断电。 （[Reframe（Buttondown）：Cyberpun](https://buttondown.com/reframe/archive/cyberpunk-edgerunners-2-review/)）
- **拖影（smear）仍是主力**：smears 标签在第二季 157 条里占 83 条，快动作仍大量用变形拖影帧来表现速度，而不是用三维运动模糊。 （[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)）
- **Roman 摄像机的画中画**：大量动作是透过 Roman 的摄像机看到的，带模拟录像的颗粒感。导演说制作中把这种「画面里的画面」叫「Roman 框」，既是 Roman 的视角，也当作一种上帝视角，用来突然切换画面气氛、制造节奏的缓急。 （[NewsOne：'Cyberpunk Edgerunne](https://newsone.com/6875152/cyberpunk-edgerunners-ii-thrilling-return/)，[io9/Gizmodo：Cyberpunk: Edger](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)，[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)，[Anime Corner：Cyberpunk Edger](https://animecorner.me/cyberpunk-edgerunners-2-review-great-anime-impossible-expectations/)）
- **打斗中色彩掉光，只剩线稿**：io9 评论：动作段落里色彩有时会整片消失，只剩人物的线描轮廓。 （[io9/Gizmodo：Cyberpunk: Edger](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)）
- **阴影、剪影与扭曲透视**：评论说第二季用阴影、剪影、扭曲透视和突然的变色来和前作区分；画风在一集里会频繁切换视觉语言。 （[OtakuKart：Cyberpunk: Edgerun](https://otakukart.com/cyberpunk-edgerunners-2-review-a-stunning-return-to-night-city-with-a-powerful-story-of-friendship/)）
- **光是一种力量**：五十岚海：光不当作希望，只是一种力量；会让人朝光奔跑，也会让人被光照得受不了。Capri 被当作「光本身」、一种特效体来画。动作镜头里适合用强逆光、眩光压住人物。 （[GAMES.GG：Cyberpunk: Edgerunn](https://games.gg/news/cyberpunk-edgerunners-season-2-new-direction/)，[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)）
- **Capri：平面化、可随意变形**：导演说第 3 集让 Capri 用平面化、可以自由变形的方式表现；评论提到 Capri 分裂时用绿/红两色表示，简单但有效。Sakugabooru #05 有 morphing 标签的帖子。 （[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)，[Anime Corner：Cyberpunk Edger](https://animecorner.me/cyberpunk-edgerunners-2-review-great-anime-impossible-expectations/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)）
- **Talia 的空中特技**：首映评论单独点名 Talia 的空中杂技式动作「优雅、几乎催眠」；io9 配图也有 Talia 跃起在空中。 （[Beneath the Tangles：Anime Ex](https://beneaththetangles.com/2026/07/05/first-impression-cyberpunk-edgerunners-2-anime-expo-world-premiere/)，[io9/Gizmodo：Cyberpunk: Edger](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)）
- **Weak：反复拍手部**：第一集反复拍 Weak 的手，强调他缺失和替换的手指；他没有义体，身体的脆弱比动作更能体现情绪。持枪动作宜落在手和握枪的特写上。 （[Anime Corner：第二季第一集评论（Gamesc](https://animecorner.me/cyberpunk-edgerunners-season-2-episode-1-review-first-impressions-from-gamescom-2026/)，[Kotaku：第二季首集更像斯科塞斯而非迈克尔·贝](https://kotaku.com/cyberpunk-edgerunners-returns-with-a-season-2-premier-thats-way-more-martin-scorsese-than-michael-bay-2000712575)，[GAMES.GG：Cyberpunk: Edgerunn](https://games.gg/news/cyberpunk-edgerunners-season-2-new-direction/)）
- **血腥直给、不切走**：首映评论：能直接展示就不暗示，斩首、肢解、爆头都画出来；整体用深红色来「画」。 （[Beneath the Tangles：Anime Ex](https://beneaththetangles.com/2026/07/05/first-impression-cyberpunk-edgerunners-2-anime-expo-world-premiere/)）
- **夸张的动作与表情**：评论说部分打斗很夸张、动作幅度大，能力展示得很残暴；otakukart 也提到保留了系列的活力动作和夸张表情、锐角构图。 （[Anime Corner：Cyberpunk Edger](https://animecorner.me/cyberpunk-edgerunners-2-review-great-anime-impossible-expectations/)，[OtakuKart：Cyberpunk: Edgerun](https://otakukart.com/cyberpunk-edgerunners-2-review-a-stunning-return-to-night-city-with-a-powerful-story-of-friendship/)）
- **作画重心：演技与奔跑多于格斗**：第二季帖子里 character_acting 122/157（第一季 68/130），running 29（第一季 11），fighting 只有 22（第一季 33）；mecha 19、background_animation 12，都明显多于第一季。可见动作场面里背景动画、机甲和奔跑追逐占比更高。 （[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners)）
- **原画张：强透视仍在**：TRIGGER 频道公开的第二季原画（Weak 的枪（ブーリャ））用极端的透视，枪口巨大贴近镜头、身体缩小在后方，并附有多层影色指示。说明第二季并没有放弃夸张透视。 （观察）
- **缩略图观察：脸部排线与红色边缘光**：Sakugabooru 第二季缩略图里，特写脸上有密集的排线表现伤痕和皱纹，人物常有一道红色边缘光；打斗画面常被大片纯黑剪影或雨丝、红色火光盖住大半。缩略图只是首帧，代表性有限。 （观察）
### 和第一季的区别
- **招牌能力的视觉**：第一季 David 的 Sandevistan：子弹时间，每一帧残影用不同颜色铺开，形成蓝绿/彩虹色的连续残像。；第二季 主角 Weak 没有义体；最显眼的能力特效是 D 骇入时满屏弹跳的红色闪电，以及 Capri 的平面化变形和绿/红分裂。
- **暴力的编排感**：第一季 被形容为浪漫化、近似迈克尔·贝式的大片动作。；第二季 更丑、更少编排，更接近斯科塞斯式的落地感；赛博精神病像信号劣化而不是爆炸。
- **节奏**：第一季 先安静铺垫，再逐渐推向爆发性高潮。；第二季 第一集评论说节奏更慢；另一篇评论说开场就是爆点。两种说法并存，需要以具体段落为准。
- **镜头语言**：第一季 以常规电影式镜头为主（本次没有找到第一季画中画手法的资料）。；第二季 大量「Roman 框」画中画、摄像机录像式颗粒画面，用来突然切换气氛。
- **特效构成**：第一季 Sakugabooru 标签：火花 sparks 36/130，闪电 16/130，火 5/130。；第二季 闪电 62/157，火 21/157，火花 22/157；还出现了金田光（kanada_light_flare）标签。
- **色彩处理**：第一季 高饱和霓虹，Sandevistan 段落色彩反而更多。；第二季 打斗里色彩会整片掉光只剩线稿；整体偏深红。
### 义体与招式动作
- **D 的骇入红色闪电** （[Reframe（Buttondown）：Cyberpun](https://buttondown.com/reframe/archive/cyberpunk-edgerunners-2-review/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)）
  - 动作：D 发动骇入，红色闪电从他身上射出，在画面里折线状弹跳；击中的车辆被掀起，街区灯光成片熄灭。
  - 镜头：大全景或俯瞰街区，让闪电横穿画面；也可从被击中物体处切近景。
  - 节奏：闪电以几帧为单位跳跃前进，命中瞬间配一两帧冲击帧，之后停在断电后的黑暗里。
  - 特效：红色锯齿闪电、手绘烟、断电后的大片黑。
- **Capri 分裂与变形** （[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)，[Anime Corner：Cyberpunk Edger](https://animecorner.me/cyberpunk-edgerunners-2-review-great-anime-impossible-expectations/)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)）
  - 动作：Capri 作为光体出现，身体变成平面形状自由变形，随后分裂成绿、红两色。
  - 镜头：正面平视，接近平面构图，强调图形感。
  - 节奏：变形用连续的形状过渡（morphing）。
  - 特效：纯色平涂的光体、绿/红双色、强光晕。
- **Talia 空中特技** （[Beneath the Tangles：Anime Ex](https://beneaththetangles.com/2026/07/05/first-impression-cyberpunk-edgerunners-2-anime-expo-world-premiere/)，[io9/Gizmodo：Cyberpunk: Edger](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)）
  - 动作：Talia 跃起，在空中做杂技式翻转，落点前拔枪或出刀。
  - 镜头：跟随她的弧线，低机位仰拍跃起。
  - 节奏：评论用「优雅、近乎催眠」形容，宜用较长的滞空。
  - 特效：头发和衣物飘动；具体特效无资料。
- **Weak 的枪战** （[Sakugabooru #320056：第二季原画（TR](https://www.sakugabooru.com/post/show/320056)，[Anime Corner：第二季第一集评论（Gamesc](https://animecorner.me/cyberpunk-edgerunners-season-2-episode-1-review-first-impressions-from-gamescom-2026/)，[Kotaku：第二季首集更像斯科塞斯而非迈克尔·贝](https://kotaku.com/cyberpunk-edgerunners-returns-with-a-season-2-premier-thats-way-more-martin-scorsese-than-michael-bay-2000712575)，[RPG Site：Edgerunners 2 首集观感](https://www.rpgsite.net/feature/20873-cyberpunk-edgerunners-2-may-be-another-hit-in-the-making-even-if-its-way-different-than-the-first-series)）
  - 动作：没有义体的 Weak 举着巨大的手枪（原画注释写作ブーリャ） 开火，动作重、不花哨；镜头反复落在他缺指的手上。
  - 镜头：强透视，枪口贴近镜头、身体在后方缩小；手部特写。
  - 节奏：更接近写实的重量感，不是编排好的连招。
  - 特效：枪口火光、喷溅的血。
- **Roman 摄像机视角下的打斗** （[NewsOne：'Cyberpunk Edgerunne](https://newsone.com/6875152/cyberpunk-edgerunners-ii-thrilling-return/)，[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)，[io9/Gizmodo：Cyberpunk: Edger](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)）
  - 动作：打斗被 Roman 的摄像机拍下，在画面里以画中画的录像形式出现。
  - 镜头：画框套画框；录像画面带颗粒、晃动。
  - 节奏：用画中画突然切换画面气氛，制造缓急。
  - 特效：模拟录像颗粒、扫描线式质感（扫描线为推测，未见明确出处）。
- **金田式尖刺光爆** （[GameBusiness.jp：五十岚海监督与大冢雅彦访](https://www.gamebusiness.jp/article/2026/10/28/28478.html)，[Sakugabooru：cyberpunk:_edger](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)）
  - 动作：能力或爆炸爆发时，光以尖刺、锯齿形状向外炸开。
  - 镜头：中景或特写，光芒占满画面。
  - 节奏：几帧爆闪后迅速收束。
  - 特效：几何化尖刺光、硬边火焰、手绘烟。
- **赛博精神病发作** （[Anime Corner：第二季第一集评论（Gamesc](https://animecorner.me/cyberpunk-edgerunners-season-2-episode-1-review-first-impressions-from-gamescom-2026/)，[io9/Gizmodo：Cyberpunk: Edger](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)）
  - 动作：不是一下爆发，而是像信号逐渐劣化：画面和动作越来越乱。
  - 镜头：可结合色彩掉光、只剩线稿的处理。
  - 节奏：渐进式，不靠单一爆点。
  - 特效：颜色流失、线稿化（与信号劣化的结合方式为推测）。
### 提示词
- 关键词（英）：`Cyberpunk Edgerunners 2 action sequence, Studio Trigger, 1990s anime action homage, rough raw hand-drawn animation, heavy lines, grainy lighting, smear frames, hand-drawn smoke, jagged red lightning bolts, Kanada-style spiky light flares, geometric flames, colors dropping out to bare line art mid-fight, picture-in-picture camcorder footage, grainy analog video, strong backlight as an oppressive force, deep crimson, graphic gore, grounded weighty gunplay, extreme foreshortening`
- 关键词（中）：`赛博朋克边缘行者第二季动作场面，TRIGGER，致敬 90 年代动画动作，粗粝手绘作画，粗线，颗粒感光线，变形拖影帧，手绘烟雾，锯齿状红色闪电，金田式尖刺光芒，几何化火焰，打斗中色彩掉光只剩线稿，画中画摄像机录像，模拟录像颗粒，压迫感的强逆光，深红色调，直给的血腥，有重量的写实枪战，极端透视`
- 负面词（英）：`Sandevistan bullet-time rainbow afterimages, multicolored frame-trail clones, Edgerunners season 1 style, smooth 3D motion blur, CG camera fly-through, glossy clean choreographed martial-arts combo, photorealistic, video game screenshot`
- 负面词（中）：`Sandevistan 子弹时间彩虹残影，多色逐帧残像分身，边缘行者第一季画风，平滑的三维运动模糊，CG 镜头飞越，光滑干净的套路化格斗连招，写实照片，游戏截图`
- AI 视频模板（英）：`Cyberpunk Edgerunners 2 anime action shot, Studio Trigger, 1990s anime homage, rough hand-drawn cel animation with heavy lines and fine film grain. {character} unleashes {ability} in {location}. Raw, ugly, weighty motion rather than slick choreography; smear frames on fast moves, one or two impact frames on the hit. Effects drawn by hand: jagged lightning, Kanada-style spiky light flares, geometric flames, billowing hand-drawn smoke. Harsh backlight presses down on the figure like a force. Mid-fight the colors drop out, leaving only line art for a few frames, then cut to grainy picture-in-picture camcorder footage of the same moment. Deep crimson accents, graphic but hand-drawn gore. Strong foreshortening toward the lens. No rainbow afterimages, no 3D motion blur.`
- AI 视频模板（中）：`赛博朋克边缘行者第二季动画动作镜头，TRIGGER，致敬 90 年代动画，粗线加细胶片颗粒的手绘赛璐璐。{character} 在 {location} 发动 {ability}。动作粗粝、难看、有重量，不是光滑的套路编排；快动作用变形拖影帧，命中时插一两帧冲击帧。特效全部手绘：锯齿闪电、金田式尖刺光芒、几何化火焰、翻滚的手绘烟。强逆光像一股力量压在人物身上。打到一半色彩掉光，只剩线稿几帧，再切到同一瞬间的颗粒感画中画摄像机录像。深红色点缀，血腥直给但保持手绘。朝镜头的强透视。不要彩虹残影，不要三维运动模糊。`
### 参考
- [#01 动作段落（作画监督菅野一期）](https://www.sakugabooru.com/post/show/319723)（原画：Takafumi Chida、Yuuto Kaneko）
- [#03 火焰、闪电、冲击帧](https://www.sakugabooru.com/post/show/319768)（原画：Shouichi、yooto（含 artist_unknown））
- [#03 机甲战与金田光](https://www.sakugabooru.com/post/show/319759)（原画：BS Kim、Sota Shigetsugu、Yoshitaka Mano）
- [#05 爆炸、碎片、火花的大场面](https://www.sakugabooru.com/post/show/319792)（原画：Akira Amemiya、Toshiyuki Sato（含 artist_unknown））
- [#08 雨中火光与打斗](https://www.sakugabooru.com/post/show/319832)（原画：Yasushi Muraki、evakoi（含 artist_unknown，presumed））
- [#08 液体与烟的打斗](https://www.sakugabooru.com/post/show/319839)（原画：Taisei Uchida）
- [#09 闪电与液体（导演本人作画，推定）](https://www.sakugabooru.com/post/show/319849)（原画：Kai Ikarashi（presumed））
- [#10 机甲飞行、金田龙与金田光](https://www.sakugabooru.com/post/show/319912)（原画：Keisuke Watabe（含 artist_unknown，presumed））
- [#10 导弹与载具](https://www.sakugabooru.com/post/show/319903)（原画：Yoh Yoshinari）
- [#10 奔跑、碎片、闪电](https://www.sakugabooru.com/post/show/319907)（原画：Hisashi Mori、Tatsuya Miki）
- [Weak 与手枪（原画注释写作ブーリャ） 原画（TRIGGER 频道）](https://www.sakugabooru.com/post/show/320056)（原画师未署名，Sakugabooru 收录，出自 TRIGGER 频道）
### 资料不足
- 没有找到动作作画监督、特效作画监督的署名，也没有任何一篇访谈专门谈动作编排、镜头调度或时间表（timing）；五十岚海、菅野一期都没有直接谈动作的发言。
- Sakugabooru 第二季 157 条帖子中 132 条带 artist_unknown，原画师归属多为 presumed；帖子主体是视频，只看了首帧缩略图（300×169），无法判断定格时长、镜头数量、一拍几。
- 「长时间定格」「较少的镜头切换」「写实重量感」这些 80–90 年代特征，没有找到能直接对应到第二季的出处，因此没有写入 sections；只有「更少编排」「粗糙的身体运动」「节奏更慢」可作间接依据。
- 节奏说法有冲突：Anime Corner 说第一集节奏更慢，Reframe 说开场就是爆点。
- 导演明确说菅野的特效参考是金田式尖刺特效，并认为第二季画面未必是典型的 90 年代设计；评论里「90 年代风」的说法主要来自评论者。
- 第一季夸张透视不宜列为负面：第二季原画仍有极端透视，otakukart 也提到「扭曲透视」。negative 只排除 Sandevistan 彩虹残影（第二季主角无义体，依据 GAMES.GG），但并未找到第二季明确不用残影的出处。
- 没有找到 Polygon、Anime News Network、Crunchyroll News 的第二季动作评论或访谈；Crunchyroll 关于日光的访谈只见于二手转述，未核实。
- Roman 摄像机画面是否带扫描线、Talia 空中特技的特效细节，均无资料。

## 三套对照
| 维度 | 游戏 | 第一季动画 | 第二季动画 |
|---|---|---|---|
| 视角 | 几乎全程第一人称，主角只露手、前臂和武器；驾驶和少数过场用第三人称 | 第三人称电影式，常用金田透视让拳头、枪口冲向镜头 | 第三人称，夹大量 Roman 摄像机的画中画录像视角 |
| 节奏 | DOOM 式高速、不停歇、往前压；靠时间减速技能制造节奏断点 | 急起急停：大姿势定格十几帧，再几帧内完成动作 | 更粗粝、不像编排好的；评论对节奏快慢说法不一 |
| 慢动作 / 斯安威斯坦 | 世界放慢、自己正常速度；画面色调和残影样式没有资料，不要照搬动画的彩虹残影 | 把动作拆开逐张画，残影每层换色，形成彩虹拖尾，子弹和玻璃渣悬停 | 主角没有斯安威斯坦；第一季那种彩虹残影列为负面 |
| 姿势 | 写实站姿，力量感来自机位和光，不做夸张亮相 | 定格大姿势，四肢大幅伸展，剪影像海报 | 动作和表情仍夸张，但更脏更重；Talia 有空中杂技 |
| 速度表现 | 写实运动模糊、枪口火焰、曳光弹，没有速度线 | smear 形变拖影、速度线、轮廓拖影 | smear 仍是主力（157 个片段里 83 个） |
| 冲击 | 命中反馈靠刀光、血雾、断肢和硬直；屏幕震动等参数没有资料 | 红黑、红青强对比的抽象冲击帧 | 冲击帧少（5/157），打斗中色彩会整片掉光只剩线稿 |
| 特效 | 体积烟雾、枪火、全息扫描叠层，数字故障用像素排序和 VHS 质感 | 吉成式有棱角的几何烟雾、三角形火焰、十字金田光芒 | 红色锯齿闪电、手绘烟和火、金田式尖刺光 |
| 血液 | 写实流血和断肢 | 像泼溅的颜料，常是黑底上的红色放射状飞溅 | 直给不切走，整体用深红来画 |
| 光 | 体积光、霓虹逆光、烟尘里的低机位 | 整画面压成一种主色，再加品红或红色轮廓光 | 光被当成压在人身上的力量，强逆光和眩光 |
| 网络入侵 | 扫描锁定后远程上传，叠在第一人称视野上的 UI | 角色几乎不动，靠界面和特写叙事，参考老式模拟影像 | D 的骇入是满屏弹跳的红色闪电，能掀车、断电 |

## 来源
- [CD PROJEKT RED 官方：Update 2.0 更新说明](https://www.cyberpunk.net/en/news/49060/update-2-0)（游戏）
- [PC Gamer：2.0 重做受《暗黑破坏神2》技能树与《DOOM》战斗启发（Karol Matyasik 访谈）](https://www.pcgamer.com/cyberpunk-2077s-20-overhaul-was-inspired-by-the-old-school-design-of-diablo-2s-skill-trees-and-dooms-relentless-combat/)（游戏）
- [GamingBolt：CDPR 仍在打磨近战，“并非 100% 满意”（Pawel Kapala 对 VG247 的发言）](https://gamingbolt.com/cyberpunk-2077-cd-projekt-red-still-working-on-melee-combat-not-100-percent-happy)（游戏）
- [SIGGRAPH 博客：Cyberspaces and Braindances in Cyberpunk 2077（CDPR 技术美术）](https://blog.siggraph.org/2021/08/cyberspaces-and-braindances-in-cyberpunk-2077.html/)（游戏）
- [80.lv：夜之城几乎全部手工打造（CDPR 美术总监访谈）](https://80.lv/articles/interview-how-cyberpunk-2077-s-night-city-was-built-almost-entirely-by-hand/)（游戏）
- [Game Developer：CDPR 如何融合过场与互动（GDC，Kajetan Kasprowicz）](https://www.gamedeveloper.com/design/hidden-choices-small-ripples-how-cdpr-merged-cinematics-and-interactivity-in-cyberpunk-2077)（游戏）
- [CDPR 官方博客：GDC 2025 参会回顾（含过场动画演讲标题）](https://cdprojektred.com/en/blog/140/the-game-developers-conference-2025-experience)（游戏）
- [GDC Vault：User Interface in Cyberpunk 2077（Arkadiusz Antonik）](https://gdcvault.com/play/1034160/User-Interface-in-Cyberpunk-2077)（游戏）
- [VGC：《赛博朋克 2077》将“100% 第一人称”，除部分过场外（CDPR 声明）](https://www.videogameschronicle.com/news/cyberpunk-will-be-100-first-person-apart-from-some-cut-scenes/)（游戏）
- [Wccftech：CDPR 解释第一人称视角（Patrick Mills）](https://wccftech.com/cyberpunk-2077-first-person/)（游戏）
- [Shacknews：《往日之影》总监 Gabe Amatangelo 访谈（转述）](https://www.shacknews.com/article/136031/cyberpunk-2077-phantom-liberty-interview-2023)（游戏）
- [GOG：2.0 更新与关卡设计负责人 Miles Tost 访谈](https://www.gog.com/news/update_20_to_cyberpunk_2077_is_here_check_out_an_interview_with_miles_tost_level_design_acting_lead_of_the_game)（游戏）
- [GamePressure：玩法设计师 Yuliia Pryimak 访谈](https://www.gamepressure.com/editorials/i-do-believe-that-cyberpunk-was-always-a-good-game-interview-with/zd706)（游戏）
- [Cyberpunk Wiki：Sandevistan（社区维基，转录游戏内数据）](https://cyberpunk.fandom.com/wiki/Sandevistan)（游戏）
- [Cyberpunk Wiki：Militech "Apogee" Sandevistan](https://cyberpunk.fandom.com/wiki/Militech_%22Apogee%22_Sandevistan)（游戏）
- [Cyberpunk Wiki：Kerenzikov](https://cyberpunk.fandom.com/wiki/Kerenzikov)（游戏）
- [Cyberpunk Wiki：Berserk](https://cyberpunk.fandom.com/wiki/Berserk)（游戏）
- [Cyberpunk Wiki：Mantis Blades](https://cyberpunk.fandom.com/wiki/Mantis_Blades)（游戏）
- [Cyberpunk Wiki：Gorilla Arms](https://cyberpunk.fandom.com/wiki/Gorilla_Arms)（游戏）
- [Cyberpunk Wiki：Monowire](https://cyberpunk.fandom.com/wiki/Monowire)（游戏）
- [Cyberpunk Wiki：Projectile Launch System](https://cyberpunk.fandom.com/wiki/Projectile_Launch_System)（游戏）
- [Cyberpunk Wiki：Jailbreak（遗物技能）](https://cyberpunk.fandom.com/wiki/Jailbreak)（游戏）
- [Cyberpunk Wiki：Dash](https://cyberpunk.fandom.com/wiki/Dash)（游戏）
- [Cyberpunk Wiki：Air Dash](https://cyberpunk.fandom.com/wiki/Air_Dash)（游戏）
- [Cyberpunk Wiki：Reinforced Tendons（二段跳）](https://cyberpunk.fandom.com/wiki/Reinforced_Tendons)（游戏）
- [Steam：Cyberpunk 2077 官方商店页截图](https://store.steampowered.com/app/1091500/Cyberpunk_2077/)（游戏）
- [Steam：Cyberpunk 2077: Phantom Liberty 官方商店页截图](https://store.steampowered.com/app/2138330/Cyberpunk_2077_Phantom_Liberty/)（游戏）
- [GOG：Cyberpunk 2077 官方商店页截图](https://www.gog.com/en/game/cyberpunk_2077)（游戏）
- [AWN：《赛博朋克：边缘行者》——向复古动画致敬（今石洋之、吉成曜访谈）](https://www.awn.com/animationworld/cyberpunk-edgerunners-vibrant-ode-retro-anime)（第一季动画）
- [Fami 通：《赛博朋克：边缘行者》今石洋之 × CDPR 本间觉长篇访谈（约两万字，2022 年 10 月）](https://www.famitsu.com/news/202210/15278443.html)（第一季动画）
- [/Film：为什么《边缘行者》的导演喜欢迈克尔·贝](https://www.slashfilm.com/1012757/why-the-director-of-cyberpunk-edgerunners-loves-michael-bay)（第一季动画）
- [Bubbleblabber：今石洋之 Reddit AMA 整理（2022 年 12 月）](https://www.bubbleblabber.com/2022/12/reddit-ama-recap-hiroyuki-imaishi/)（第一季动画）
- [Animetudes：画师专题——今石洋之](https://animetudes.com/2021/07/11/artist-spotlight-hiroyuki-imaishi/)（第一季动画）
- [Animetudes：GAINAX 与新金田派的复兴](https://animetudes.com/2021/07/02/gainax-and-the-neo-kanada-renaissance/)（第一季动画）
- [CGWORLD 用语解说：金田透视](https://cgworld.jp/terms/%E9%87%91%E7%94%B0%E3%83%91%E3%83%BC%E3%82%B9.html)（第一季动画）
- [Sakugabooru：cyberpunk:_edgerunners 标签（第一季，共 132 帖，第二季另有独立标签）](https://www.sakugabooru.com/post?tags=cyberpunk%3A_edgerunners)（第一季动画）
- [Sakugabooru：cyberpunk:_edgerunners_season_2 标签（157 条）](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners_season_2)（第二季动画）
- [Sakugabooru：cyberpunk:_edgerunners 标签（第一季，130 条）](https://www.sakugabooru.com/post?tags=cyberpunk:_edgerunners)（第二季动画）
- [Sakugabooru #320056：第二季原画（TRIGGER CHANNEL）](https://www.sakugabooru.com/post/show/320056)（第二季动画）
- [io9/Gizmodo：'Cyberpunk: Edgerunners 2' Had One Rule: Don't Look Like Season One](https://gizmodo.com/cyberpunk-edgerunners-2-anime-netflix-studio-trigger-cd-projekt-red-interview-2000828837)（第二季动画）
- [io9/Gizmodo：Cyberpunk: Edgerunners 2 评论](https://gizmodo.com/cyberpunk-edgerunners-2-review-anime-netflix-studio-trigger-cd-projekt-red-2000826996)（第二季动画）
- [GameBusiness.jp：五十岚海监督与大冢雅彦访谈（2026-10-28）](https://www.gamebusiness.jp/article/2026/10/28/28478.html)（第二季动画）
- [GAMES.GG：Cyberpunk: Edgerunners Season 2 Director Reveals Its Radical New Look](https://games.gg/news/cyberpunk-edgerunners-season-2-new-direction/)（第二季动画）
- [Anime Corner：第二季第一集评论（Gamescom 2026）](https://animecorner.me/cyberpunk-edgerunners-season-2-episode-1-review-first-impressions-from-gamescom-2026/)（第二季动画）
- [Anime Corner：Cyberpunk Edgerunners 2 Review](https://animecorner.me/cyberpunk-edgerunners-2-review-great-anime-impossible-expectations/)（第二季动画）
- [OtakuKart：Cyberpunk: Edgerunners 2 Review](https://otakukart.com/cyberpunk-edgerunners-2-review-a-stunning-return-to-night-city-with-a-powerful-story-of-friendship/)（第二季动画）
- [NewsOne：'Cyberpunk Edgerunners II': A Thrilling Return To Night City](https://newsone.com/6875152/cyberpunk-edgerunners-ii-thrilling-return/)（第二季动画）
- [Kotaku：第二季首集更像斯科塞斯而非迈克尔·贝](https://kotaku.com/cyberpunk-edgerunners-returns-with-a-season-2-premier-thats-way-more-martin-scorsese-than-michael-bay-2000712575)（第二季动画）
- [RPG Site：Edgerunners 2 首集观感](https://www.rpgsite.net/feature/20873-cyberpunk-edgerunners-2-may-be-another-hit-in-the-making-even-if-its-way-different-than-the-first-series)（第二季动画）
- [Beneath the Tangles：Anime Expo 首映观感](https://beneaththetangles.com/2026/07/05/first-impression-cyberpunk-edgerunners-2-anime-expo-world-premiere/)（第二季动画）
- [Reframe（Buttondown）：Cyberpunk Edgerunners 2 Review](https://buttondown.com/reframe/archive/cyberpunk-edgerunners-2-review/)（第二季动画）
- [AWN：第一季今石洋之、吉成曜谈 Sandevistan 等（第一季资料）](https://awn.com/animationworld/cyberpunk-edgerunners-vibrant-ode-retro-anime)（第二季动画）
