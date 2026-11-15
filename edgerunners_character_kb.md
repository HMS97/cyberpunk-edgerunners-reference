# 边缘行者第一、二季 · 角色生成知识库

生成角色时按顺序取用：style_guide（画风）→ class_styles（阶层穿搭）→ cyberware_vocab（义体外形词）→ characters（参考角色）→ prompt_templates / oc_builder（拼提示词）。characters[].cyberware 中的 id 对应 cyberware_vocab。 第一季角色 season=1，用 style_guide；第二季角色 season=2，用 style_guide_s2。

> 角色与图片版权归 CD PROJEKT RED / Studio Trigger，仅供个人设计参考。

> 版本 1.4：1.1（2026-11-15）：对照剧中截图和官方设定图，改正大卫、露西、丽贝卡、曼恩、琪薇、多里奥、皮拉的发型、眼睛、服装描述和提示词。；更正制作人员：角色设计为吉成曜，黄底图为 Yoshiyuki Kaneko 署名的宣传插画；每张参考图加 style 字段（anime=动画，game=游戏）。；1.2（2026-11-15）：新增第二季（Edgerunners 2，2026）12 个角色、style_guide_s2（导演五十岚海、角色设计菅野一期）和 10 种第二季义体词条；每个角色和每张图加 season 字段。；1.3（2026-11-15）：每个角色加 prompts（动画 + 游戏两套，各带负面词）；第二季图片 style 改为 anime_s2；补 Weak Kingsley 和 Meshuga 的游戏头像（CP2077）。；1.4（2026-11-15）：第二季画风关键词和负面词改为与 style_guides.json 的 anime_s2 一致。；style_guide_s2 文字按 s2-locations 的对照修正：阴影区分日常镜头和戏剧性特写，脸型分出处和观察，补制作人员。

## 第一季画风规范
**Cyberpunk: Edgerunners S1（Studio Trigger，2022）**　animation：Studio Trigger，director：今石洋之 Hiroyuki Imaishi，character_design：吉成曜 Yoh Yoshinari，art_director：野村正信 Masanobu Nomura
- **说明**：本知识库的角色都按动画风（边缘行者第一季）整理；要出游戏风角色，换用 style_guides.json 里 game 的关键词和负面词，并按「动画 → 游戏」转换规则补写实细节。
- **描线**：粗细变化明显的黑色描线，轮廓线最粗；肌肉、面部用少量硬朗折线概括，不画细碎排线。
- **上色**：两阶赛璐璐：一层亮面、一层硬边暗部；暗部形状是锐利的几何块（脸部常被切成大块阴影），暗部常带蓝紫或洋红色相，而不是灰色。
- **光照**：强烈的霓虹边缘光（常为青色或洋红），环境色直接染到皮肤和金属上；夜景高对比，暗部几乎压成纯色。
- **义体画法**：义体用皮肤上的接缝线、分块面板和发光点来表达；金属部分平涂 + 一道硬高光，不做写实反射。
- **宣传图**：宣传插画（Wiki 署名 Yoshiyuki Kaneko）：纯黄底（约 #FFE600）、半身像、角色看镜头，带签名。
- **避免**：写实 3D 渲染、柔和渐变阴影、细腻厚涂、低饱和灰暗配色、复杂写实金属反射
- **色板**：neon_cyan `#16F0FF`，hot_magenta `#FF2A8A`，acid_yellow `#FCEE0A`，toxic_green `#3BE36B`，deep_navy_shadow `#1B1640`，blood_red `#D8282F`
- **特效**：斯安威斯坦加速：彩虹/绿色残影拖尾、时间凝固的漂浮物体；速度线和夸张透视（广角近大远小）；故障/扫描线叠加、全息 UI 碎片；血液和火光用纯色块
- **关键词（英）**：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective`
- **关键词（中）**：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视`

## 第二季画风规范
**Cyberpunk: Edgerunners 2（Studio Trigger，2026，Netflix 10 集）**　animation：TRIGGER，director：五十岚海 Kai Ikarashi，character_design：菅野一期 Ichigo Kanno，story：Bartosz Sztybor，script：大塚雅彦 Masahiko Ōtsuka，color_design：柿田由纪子 Yukiko Kakita，background_directors：Risa Fuuji、野村正信 Masanobu Nomura
- **说明**：第二季动画风的关键词和负面词与 style_guides.json 的 anime_s2 一致（以那边为准）；本节保留角色侧的逐项对比结论。
- **负面词（英）**：photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene
- **负面词（中）**：写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色
- **和第一季的区别**：结论：和第一季同属 TRIGGER 的赛璐璐风格，但不统一，生成第二季角色要用这一套（权威版本是 style_guides.json 的 anime_s2，本节是角色侧的补充）。出处：io9/Gizmodo 访谈（2026-10-21）里 Sztybor 说第二季 "shouldn't look like the first season"，五十岚海把方向定为致敬 80、90 年代动画；io9 评价新角色造型更锋利、更夸张。以下逐项对比是我把两季同类镜头并排看得到的观察：①光照：第一季霓虹色光铺满画面，脸常被染成青绿或洋红；第二季偏自然光，肤色保持本色，强光、太阳眩光多。②线条：第一季粗、粗细变化大；第二季更细更干净。③阴影：日常镜头里，第二季阴影是硬边但面积小、沿五官走；戏剧性特写（如 D、Weak Kingsley）仍会用一大块硬边阴影压住半张脸。④脸型：出处——io9 说新角色造型更锋利、更夸张（如 Weak Kingsley、Talia）；观察——年轻角色（Roman、Yupi）脸更圆润、眼睛大而亮。两者并存，按角色选。⑤背景：第一季简化、霓虹抽象；第二季细节丰富、偏写实的绘制背景，带胶片颗粒和光晕。⑥官方设定图：第一季深灰底单视图；第二季黑到暗红渐变底、三视图。
- **描线**：干净的细线，粗细变化比第一季小。
- **上色**：硬边赛璐璐阴影。日常镜头面积小、沿五官和衣褶走；戏剧性特写可以用一大块硬边阴影压住半张脸。肤色保持本色。
- **光照**：强光、太阳眩光和光晕多；夜景霓虹只做局部点缀，不把整张脸染色。
- **宣传图**：倒计时宣传图（Wiki 标为 TRIGGER）：每天一个角色，底色各不相同（黄、蓝、洋红等），大号倒数数字，部分是原画师的草图风格。主视觉用红色撕裂几何块和破碎画面拼贴。
- **避免**：见 negative_en / negative_zh（与 style_guides.json 的 anime_s2 一致）。
- **色板**：signal_red `#E8213F`，sky_blue `#4FB3E8`，jacket_blue `#2F5FD0`，pink_hair `#F2A3B8`，teal_lining `#2BC1B5`，dusk_purple `#3B2C5E`
- **关键词（英）**：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents`
- **关键词（中）**：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀`
- **主视觉**：[1](https://static.wikia.nocookie.net/cyberpunk/images/f/fc/Cyberpunk_Edgerunners_2_Key_Visual_01_CPEDGEII.jpg/revision/latest?cb=20260629163538)，[2](https://static.wikia.nocookie.net/cyberpunk/images/c/ce/Cyberpunk_Edgerunners_2_Key_Visual_02_CPEDGEII.jpg/revision/latest?cb=20260630013254)，[3](https://static.wikia.nocookie.net/cyberpunk/images/4/4a/Cyberpunk_Edgerunners_2_Key_Visual_03_CPEDGEII.jpg/revision/latest?cb=20261015201951)，[4](https://static.wikia.nocookie.net/cyberpunk/images/a/af/Cyberpunk_Edgerunners_2_Key_Visual_04_CPEDGEII.jpg/revision/latest?cb=20261016121434)

## 阶层穿搭
- **熵主义**（底层、贫民）：旧衣、实用耐用、补丁和二手零件、廉价义体外露
- **媚俗**（街头、中产、帮派）：亮色、塑料感、霓虹、夸张轮廓、炫耀式义体
- **新军国主义**（公司、军方）：冷色、剪裁利落、功能面料、隐藏式义体
- **新媚俗**（顶层富人）：金、皮革、稀有材质、定制义体

## 义体外形词典
| 义体 | 部位 | 外形 | 英文提示词 | 剧中角色 |
|---|---|---|---|---|
| 斯安威斯坦（Sandevistan） | 脊柱 / 神经端口 | 沿脊柱安装的长条形模块，接入神经端口，激活时有发光；剧中实验型号装在后颈至背部。 | spine-mounted sandevistan implant, glowing modules along the spine, rainbow afterimage trail, time-slow effect | 大卫·马丁内斯 |
| 单分子线（Monowire） | 手臂 / 手腕 | 从手腕射出的极细发光线，挥动时成弧线，可切割物体。 | monowire whip extending from wrist, thin glowing filament arcing through the air | 露西 |
| 大猩猩手臂 / 超大型义臂 | 双臂 | 比原生手臂粗大很多的机械臂，拳头和前臂明显放大，常涂装鲜艳颜色。 | oversized chunky cybernetic gorilla arms, enlarged mechanical fists and forearms | 丽贝卡、多里奥、皮拉、基里尔·杨、奥米 |
| 射弹发射系统 | 前臂 | 前臂内置的发射口，展开时露出炮管。 | forearm-mounted projectile launcher, armor plates opening to reveal a barrel | 大卫·马丁内斯、曼恩 |
| Kiroshi 义眼 | 眼部 | 虹膜处有彩色光圈或刻度环，常发光；也可做成高亮单色瞳孔。 | glowing cybernetic eyes, colored iris rings, kiroshi optics | 大卫·马丁内斯、丽贝卡、基里尔·杨、京子、奥米 |
| 护目镜式光学义体 | 眼部 / 面部 | 横跨双眼的黑色条形护目镜，镜片上有一点红色或彩色光。 | black cybernetic visor across the eyes with a single red light | 曼恩、皮拉 |
| 神经端口 / 个人接口 | 后颈 / 后脑 | 后颈或后脑的插口，可插入线缆或芯片；网络行者有多个接口。 | neural port on the back of the neck, plug-in cable jacks | 大卫·马丁内斯、露西、琪薇、丽贝卡、曼恩、多里奥、皮拉、罗曼·卡拉克斯、D、塔莉亚·杨、尤皮、梅舒加 |
| 深潜端口 | 后脑 | 后脑头皮下的接口，平时用合成皮肤和头发遮住。 | hidden deep dive port on the back of the scalp | 露西 |
| 网络接入仓 / 手持网络接入仓 | 神经端口 + 外接设备 | 网络行者用线缆把手持接入仓连到脖子上的接口，入侵时眼睛和全息 UI 发光。 | netrunner jacked in with cables to a handheld cyberdeck, holographic interface | 露西、琪薇、D |
| 面部 / 身体接缝线 | 皮肤 | 脸和躯干上的细接缝线，把皮肤切成义体面板，是重度改造的标志。 | cybernetic panel seams across face and chest, visible implant lines on skin | 大卫·马丁内斯、曼恩、多里奥、阿维达·杨、梅舒加 |
| 皮下装甲 | 躯干 | 皮肤下的硬质装甲板，轮廓呈块状。 | subdermal armor plates under the skin | 大卫·马丁内斯、曼恩、韦克·金斯利 |
| 机械腿 | 腿 | 外露的金属腿或加固脚踝，可内藏武器。 | exposed bare-metal cybernetic legs | 大卫·马丁内斯、曼恩、多里奥、奥米 |
| 线性框架 | 骨骼 | 强化骨架，体型明显变高、变壮。 | reinforced cyber-skeleton frame, bulked-up physique | 大卫·马丁内斯、曼恩 |
| 军用义体骨骼（原型） | 全身外骨骼 | 终局形态：巨大的外骨骼盔甲包裹全身，角色像被机械吞没。 | massive prototype military cyberskeleton exosuit enveloping the body | 大卫·马丁内斯 |
| 光纹身 | 皮肤 | 会发光的纹身图案，常是霓虹粉或青色。 | glowing neon light tattoos on skin | 丽贝卡、琪薇 |
| 下颌面罩 | 面部 | 覆盖下半张脸的红色面罩，面罩下没有下颌。 | red mask covering the lower face and jaw | 琪薇 |
| 下颌义体（像胡子） | 面部 | 从耳侧延伸到下巴的金属件，远看像胡子。 | metal cyberware running from ears down to the chin like a beard | 皮拉 |
| 单只义臂 | 单臂 | 一侧手臂为银黑色机械臂，另一侧为原生手臂。 | single silver-and-black cybernetic arm | 法尔科、京子、梅舒加 |
| 全身义体（Full Borg） | 全身 | 几乎没有肉体，骷髅状金属面甲、红色发光眼，巨型机械体格。 | full-body conversion cyborg, skull-like chrome faceplate, glowing red eyes, hulking mechanical body | 亚当·重锤 |
| EMP 线路 | 皮下 | 皮下的电磁线路，一般看不见；剧中几乎每人都装。 |  | 大卫·马丁内斯、露西、丽贝卡、曼恩、多里奥 |
| 昆虫式口部义体 | 面部 | 黑色分段口罩状义体覆盖下半张脸，能显示出一张嘴的图像；放大后像昆虫口器。 | black segmented insect-like mouthpiece implant covering the lower face, can display a digital mouth | 塔莉亚·杨 |
| 蚱蜢式腿部义体 | 腿 / 脚 | 银色反关节式小腿和脚，脚尖和脚跟有红色尖爪，像蚱蜢腿。 | silver digitigrade grasshopper-like cybernetic legs with red claw tips | 塔莉亚·杨 |
| 触角 | 头部 | 从头顶伸出的两根细长弯曲的线，像昆虫触角。 | two long thin antenna-like strands arching from the top of the head | 塔莉亚·杨 |
| 耳部义体 | 耳 | 缺失的耳朵换成黑色耳部植入件。 | black ear implant replacing a missing ear | D |
| 义体下颌 | 面部 | 下巴和两颊下半部换成金属外壳，常和皮肤之间有明显接缝。 | cybernetic jaw plating on the chin and lower cheeks | 基里尔·杨、韦克·金斯利 |
| 颈部装甲 / 颈部义体 | 颈 | 包住脖子的硬质装甲环，Kingsley 是深绿色，Avida 是金色。 | armored cybernetic neck collar | 韦克·金斯利、阿维达·杨 |
| 刻字金手指 | 手 | 一根手指换成金色义体，刻着名字首字母（Kingsley 是 K，Avida 是 A）。 | single gold cybernetic finger engraved with an initial | 韦克·金斯利、阿维达·杨 |
| 局部面甲 | 面部 | 只覆盖脸的一部分的金属面板，接缝明显。 | partial metal faceplate with visible seams | 京子 |
| 超梦剪辑手套 | 手 | 带骨架式机械手指的黑色手套，用于剪辑超梦。 | black braindance editing glove with skeletal mechanical fingers | 杰西 |
| 人格构造体投影 | 无实体 | 没有肉身，只是投影：黑色剪影身体，洋红色碎片状的大发型，绿色几何贴花，眼睛在绿色方框里。 | glitchy holographic AI construct, black silhouette body with jagged magenta hair and green geometric decals, eyes boxed in green rectangles | 卡普里 |

## 第一季角色
### 大卫·马丁内斯（David Martinez）
- 身份：Solo（街头雇佣兵）；年龄：17→18
- 阶层穿搭：媚俗
- 体型：拉丁裔少年，起初瘦而结实，随着义体增加变高、变壮。
- 面部与发型：浅棕色眼睛，脸窄、鼻梁挺。深棕色头发梳成一束向上、略向前翘起的高刘海，两侧剃得很短（不是一团乱刺）。后期脸上出现义体接缝线。
- 服装：前期：超大号亮黄色夹克，胸前和袖子有银白色反光横条，内领灰色、内衬发浅蓝光；黑 T 恤、两条金链；蓝灰色宽松七分慢跑裤；灰色运动鞋。后期：同一件夹克，里面裸上身，体型更壮。（Wiki 写的是灰色运动裤加白色网球鞋，官方 Cosplay 指南是蓝灰色裤子和灰色鞋。）
- 义体：斯安威斯坦（Sandevistan）、神经端口 / 个人接口、Kiroshi 义眼、射弹发射系统、机械腿、线性框架、皮下装甲、面部 / 身体接缝线、军用义体骨骼（原型）、EMP 线路
- Wiki 义体清单：2x 义臂（射弹发射系统）、2x 义腿（加固脚踝）、EMP 线路、2x Kiroshi 义眼、线性框架、神经端口（重型神经处理器、实验型斯安威斯坦）、荒坂原型义体骨骼（临时）、皮下装甲、合成肺
- 剪影要点：黄色夹克加高立领，发光的领口内衬，竖起的短发。
- 配色：`#F5D21E` `#111111` `#3BE36B` `#39C8FF`
- 阶段形态：early：瘦削学生，黑 T 恤和金链；mid：穿上黄色急救员夹克，装上斯安威斯坦；late：体型变壮、脸上出现接缝线、裸上身穿夹克；final：被巨型军用外骨骼包裹
- 角色描述（英，不含画风）：`David Martinez from Cyberpunk Edgerunners, lean 17-year-old latino boy, narrow face, sharp nose, light brown eyes; dark brown hair styled as one tall swept-up quiff/crest rising up and slightly forward from the forehead, both sides shaved very short (NOT a spiky ball of hair); oversized bright yellow jacket with silver-white reflective horizontal stripes on chest and sleeves, high gray inner collar with glowing light-blue lining; black t-shirt, two gold chain necklaces; loose blue-gray cropped jogger pants; gray sneakers; arms look human (cyberware hidden), slim build`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的大卫·马丁内斯，17 岁拉丁裔少年，脸窄，浅棕色眼睛，深棕色头发梳成一束向上翘起的高刘海、两侧剃短，超大号亮黄色夹克带银白色反光条、高领内衬发浅蓝光，黑 T 恤，金链，蓝灰色七分慢跑裤，灰色运动鞋，手臂看起来是普通人手`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, David Martinez from Cyberpunk Edgerunners, lean 17-year-old latino boy, narrow face, sharp nose, light brown eyes; dark brown hair styled as one tall swept-up quiff/crest rising up and slightly forward from the forehead, both sides shaved very short (NOT a spiky ball of hair); oversized bright yellow jacket with silver-white reflective horizontal stripes on chest and sleeves, high gray inner collar with glowing light-blue lining; black t-shirt, two gold chain necklaces; loose blue-gray cropped jogger pants; gray sneakers; arms look human (cyberware hidden), slim build`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的大卫·马丁内斯，17 岁拉丁裔少年，脸窄，浅棕色眼睛，深棕色头发梳成一束向上翘起的高刘海、两侧剃短，超大号亮黄色夹克带银白色反光条、高领内衬发浅蓝光，黑 T 恤，金链，蓝灰色七分慢跑裤，灰色运动鞋，手臂看起来是普通人手`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, David Martinez, lean 17-year-old latino boy, narrow face, sharp nose, light brown eyes; dark brown hair styled as one tall swept-up quiff/crest rising up and slightly forward from the forehead, both sides shaved very short (NOT a spiky ball of hair); oversized bright yellow jacket with silver-white reflective horizontal stripes on chest and sleeves, high gray inner collar with glowing light-blue lining; black t-shirt, two gold chain necklaces; loose blue-gray cropped jogger pants; gray sneakers; arms look human (cyberware hidden), slim build, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，大卫·马丁内斯，17 岁拉丁裔少年，脸窄，浅棕色眼睛，深棕色头发梳成一束向上翘起的高刘海、两侧剃短，超大号亮黄色夹克带银白色反光条、高领内衬发浅蓝光，黑 T 恤，金链，蓝灰色七分慢跑裤，灰色运动鞋，手臂看起来是普通人手，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/ac/David_Infobox_CPEDGE.png/revision/latest?cb=20220915120459)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/9/91/David_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20220916220209)
  - [概念图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/80/David_Martinez_Concept_Art_01_CPEDGE.jpg/revision/latest?cb=20220927173721)
  - [剧中截图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/af/Neuralport_%26_Sandevistan_CPEDGE.jpg/revision/latest?cb=20230917180702)
  - [剧中截图 · 第4集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/c/cd/David_01_EP4_CPEDGE.png/revision/latest?cb=20261102100240)
  - [剧中截图 · 第7集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/1d/David_06_EP7_CPEDGE.png/revision/latest?cb=20261105185305)
  - [剧中截图 · 第8集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/a6/David_08_EP8_CPEDGE.png/revision/latest?cb=20261111045717)
  - [剧中截图 · 第8集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/8b/David_10_EP8_CPEDGE.png/revision/latest?cb=20261111045722)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/c/c0/David_Martinez_Cosplay_Guide_03_CPEDGE.png/revision/latest?cb=20261030050431)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/77/David_Martinez_Cosplay_Guide_04_CPEDGE.png/revision/latest?cb=20261030050432)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/1f/David_Martinez_Cosplay_Guide_05_CPEDGE.png/revision/latest?cb=20261030050433)

### 露西（Lucyna Kushinada）（Lucy）
- 身份：Netrunner（网络行者）；年龄：约 20
- 阶层穿搭：媚俗 + 新军国主义
- 体型：纤细，肤色浅。
- 面部与发型：直顺的齐刘海波波头，刘海齐眉、左边比右边长；白发，头顶偏粉色、发尾渐变成薄荷青；灰色眼睛，红色上挑眼线，红唇。（Wiki 写的是红紫色眼睛，剧中和设定图看起来是灰色眼睛配红眼线。）
- 服装：白色短款夹克，常滑落到肩膀以下；黑色高领无袖连体衣，领口有红色 V 字镶边；白色短裤；灰色过膝长袜；黑色及膝高跟靴，红色鞋底。
- 义体：单分子线（Monowire）、神经端口 / 个人接口、深潜端口、网络接入仓 / 手持网络接入仓、EMP 线路
- Wiki 义体清单：2x 义臂（2x 单分子线）、EMP 线路、神经端口（网络接入仓端口、深网潜入处理器、多个个人接口、皮下神经处理器）
- 剪影要点：不对称波波头加彩虹渐变发色，白色短夹克，黑色连体衣。
- 配色：`#F4F4F4` `#111111` `#E8334A` `#FF9CCB` `#9CE6FF` `#C9A6FF`
- 角色描述（英，不含画风）：`Lucy from Cyberpunk Edgerunners, slender young woman; hair: straight sleek blunt bob with heavy straight-cut bangs at eyebrow level, longer on her left side, white hair with pastel pink on top fading to mint-cyan at the ends; gray eyes with sharp red winged eyeliner and red lipstick; cropped white jacket worn off the shoulders; black high-neck sleeveless leotard with a red V-shaped trim at the neck; white shorts; gray thigh-high stockings; black knee-high heeled boots with red soles`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的露西，纤细年轻女性，直顺的齐刘海波波头、左长右短，白发头顶偏粉、发尾渐变薄荷青，灰色眼睛配红色上挑眼线和红唇，白色短夹克滑落到肩下，黑色高领连体衣带红色 V 字领口，白色短裤，灰色过膝袜，黑色及膝高跟靴`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Lucy from Cyberpunk Edgerunners, slender young woman; hair: straight sleek blunt bob with heavy straight-cut bangs at eyebrow level, longer on her left side, white hair with pastel pink on top fading to mint-cyan at the ends; gray eyes with sharp red winged eyeliner and red lipstick; cropped white jacket worn off the shoulders; black high-neck sleeveless leotard with a red V-shaped trim at the neck; white shorts; gray thigh-high stockings; black knee-high heeled boots with red soles`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的露西，纤细年轻女性，直顺的齐刘海波波头、左长右短，白发头顶偏粉、发尾渐变薄荷青，灰色眼睛配红色上挑眼线和红唇，白色短夹克滑落到肩下，黑色高领连体衣带红色 V 字领口，白色短裤，灰色过膝袜，黑色及膝高跟靴`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Lucy, slender young woman; hair: straight sleek blunt bob with heavy straight-cut bangs at eyebrow level, longer on her left side, white hair with pastel pink on top fading to mint-cyan at the ends; gray eyes with sharp red winged eyeliner and red lipstick; cropped white jacket worn off the shoulders; black high-neck sleeveless leotard with a red V-shaped trim at the neck; white shorts; gray thigh-high stockings; black knee-high heeled boots with red soles, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，露西，纤细年轻女性，直顺的齐刘海波波头、左长右短，白发头顶偏粉、发尾渐变薄荷青，灰色眼睛配红色上挑眼线和红唇，白色短夹克滑落到肩下，黑色高领连体衣带红色 V 字领口，白色短裤，灰色过膝袜，黑色及膝高跟靴，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/f/ff/Lucy_Infobox_CPEDGE.png/revision/latest?cb=20220912183850)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/7e/Lucy_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20220916220236)
  - [剧中截图 · 第2集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/e/ee/Lucy%27s_Monowire_01_EP2_CPEDGE.png/revision/latest?cb=20261101121724)
  - [剧中截图 · 第2集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/78/Lucy_02_EP2_CPEDGE.png/revision/latest?cb=20261101121139)
  - [剧中截图 · 第8集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/8e/Lucy_07_EP8_CPEDGE.png/revision/latest?cb=20261111045733)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/0/04/Lucyna_Kushinada_Cosplay_Guide_03_CPEDGE.png/revision/latest?cb=20261030051017)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/60/Lucyna_Kushinada_Cosplay_Guide_04_CPEDGE.png/revision/latest?cb=20241216234609)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/89/Lucyna_Kushinada_Cosplay_Guide_05_CPEDGE.png/revision/latest?cb=20241216234611)

### 丽贝卡（Rebecca）
- 身份：Solo（枪手）；年龄：约 20
- 阶层穿搭：媚俗
- 体型：个子很矮，五官柔和，皮肤苍白带淡蓝色调。
- 面部与发型：个子很矮、身材像小孩，皮肤粉白带淡蓝；浅薄荷青色双马尾（不是荧光绿），用一个带小猫耳状夹子的黑色发箍扎起；超大的圆形义眼，粉红色光圈、黄色瞳心。
- 服装：超大号黑色连帽外套，袖子长到盖住手，下摆到大腿中部，荧光绿镶边和小月牙标志；里面黑色内衣；光腿，黑色运动鞋配荧光绿鞋底。颈部到胸口有粉色 X 眼骷髅纹身，右大腿有 "PK DICK" 纹身。后期装上超大义臂，右臂红、左臂蓝。
- 义体：大猩猩手臂 / 超大型义臂、Kiroshi 义眼、光纹身、神经端口 / 个人接口、EMP 线路
- Wiki 义体清单：2x 义臂（2x 高度风格化的大猩猩手臂）、2x 义眼、EMP 线路、光纹身、神经端口、科技头发和化学皮肤
- 剪影要点：矮小身形配超大义臂（后期右臂红、左臂蓝，模仿哥哥皮拉），绿色双马尾。
- 配色：`#9FE8D8` `#F2F6FF` `#FF4FA0` `#111111` `#B7FF3A` `#E33B3B` `#3B6BE3`
- 角色描述（英，不含画风）：`Rebecca from Cyberpunk Edgerunners, very short petite girl with small childlike proportions, chalk-white skin with a faint blue tint; pale mint-aqua hair in two long twin tails held by a black headband with small cat-ear-like clips; huge round cybernetic eyes with glowing pink-red rings and yellow centers; a pink skull-with-X-eyes tattoo on the neck and chest; a hugely oversized black hooded jacket with neon lime-green trim and small crescent emblems, sleeves so long they cover her hands, hem down to mid-thigh; black bra underneath; bare pale legs, black sneakers with lime soles; in action panels she has huge chunky cyberarms, red right arm and blue left arm`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的丽贝卡，非常矮小、像小孩的身材，粉白带淡蓝的皮肤，浅薄荷青色双马尾配黑色猫耳发箍，超大的圆形义眼带粉红光圈和黄色瞳心，颈部到胸口粉色 X 眼骷髅纹身，超大号黑色连帽外套袖子盖住手、荧光绿镶边，光腿，黑色运动鞋，超大义臂右红左蓝`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Rebecca from Cyberpunk Edgerunners, very short petite girl with small childlike proportions, chalk-white skin with a faint blue tint; pale mint-aqua hair in two long twin tails held by a black headband with small cat-ear-like clips; huge round cybernetic eyes with glowing pink-red rings and yellow centers; a pink skull-with-X-eyes tattoo on the neck and chest; a hugely oversized black hooded jacket with neon lime-green trim and small crescent emblems, sleeves so long they cover her hands, hem down to mid-thigh; black bra underneath; bare pale legs, black sneakers with lime soles; in action panels she has huge chunky cyberarms, red right arm and blue left arm`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的丽贝卡，非常矮小、像小孩的身材，粉白带淡蓝的皮肤，浅薄荷青色双马尾配黑色猫耳发箍，超大的圆形义眼带粉红光圈和黄色瞳心，颈部到胸口粉色 X 眼骷髅纹身，超大号黑色连帽外套袖子盖住手、荧光绿镶边，光腿，黑色运动鞋，超大义臂右红左蓝`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Rebecca, very short petite girl with small childlike proportions, chalk-white skin with a faint blue tint; pale mint-aqua hair in two long twin tails held by a black headband with small cat-ear-like clips; huge round cybernetic eyes with glowing pink-red rings and yellow centers; a pink skull-with-X-eyes tattoo on the neck and chest; a hugely oversized black hooded jacket with neon lime-green trim and small crescent emblems, sleeves so long they cover her hands, hem down to mid-thigh; black bra underneath; bare pale legs, black sneakers with lime soles; in action panels she has huge chunky cyberarms, red right arm and blue left arm, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，丽贝卡，非常矮小、像小孩的身材，粉白带淡蓝的皮肤，浅薄荷青色双马尾配黑色猫耳发箍，超大的圆形义眼带粉红光圈和黄色瞳心，颈部到胸口粉色 X 眼骷髅纹身，超大号黑色连帽外套袖子盖住手、荧光绿镶边，光腿，黑色运动鞋，超大义臂右红左蓝，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/19/Rebecca_Infobox_CPEDGE.png/revision/latest?cb=20220916202047)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/83/Rebecca_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20220916220341)
  - [概念图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/60/Rebecca_Concept_Art_01_CPEDGE.jpg/revision/latest?cb=20221004161514)
  - [剧中截图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/3/34/Rebecca_Gorilla_Arm_01_CPEDGE.png/revision/latest?cb=20250414162202)
  - [剧中截图 · 第8集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/2/2a/Rebecca_06_EP8_CPEDGE.png/revision/latest?cb=20261111045738)
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/70/Rebecca_%28Madness%29_Infobox_CPEDGE.png/revision/latest?cb=20260227112142)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/b/b5/Rebecca_Cosplay_Guide_03_CPEDGE.png/revision/latest?cb=20261030052204)
  - [官方 Cosplay 指南（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/b/b2/Rebecca_Cosplay_Guide_04_CPEDGE.png/revision/latest?cb=20261030052206)
  - [剧中截图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/0/0c/CP_Edge_Rebecca%27s_thigh_tatto_detail.png/revision/latest?cb=20220925044912)

### 曼恩（Maine）
- 身份：Solo（小队队长，前军方特种部队）；年龄：30 岁后半
- 阶层穿搭：媚俗
- 体型：全队最高，义体让体型大幅增大，肩背极宽。
- 面部与发型：皮肤偏棕，方下巴；奶白色头发梳成一整块光滑、高耸、向后的背头，像一块圆顶（不是尖刺）；黑色环绕式护目镜，左侧有一点红光；脸上有义体接缝线。
- 服装：红色连帽衫或围巾加黑色外套，胸口敞开，露出带接缝线的躯干。
- 义体：护目镜式光学义体、射弹发射系统、机械腿、线性框架、皮下装甲、面部 / 身体接缝线、神经端口 / 个人接口、EMP 线路
- Wiki 义体清单：2x 义臂、射弹发射系统、2x 义腿、EMP 线路、线性框架、神经端口、皮下装甲
- 剪影要点：竖得很高的白金背头，黑色护目镜加红光点，红色围巾，倒三角巨型体格。
- 配色：`#F1E7D2` `#D8282F` `#111111` `#FF2A2A` `#B07A55`
- 角色描述（英，不含画风）：`Maine from Cyberpunk Edgerunners, giant hulking muscular man, tan skin, heavy square jaw; hair: a very tall smooth cream-white pompadour shaped like a solid rounded dome/fin swept straight back (one smooth mass, NOT spiky); black wraparound cyber visor over the eyes with a single small red light on the left; thin cyber seam lines across his face; big red scarf/hood around the neck; black leather jacket with red ring details, worn open over a bare chest with vertical vent-like cyber slits on the abdomen`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的曼恩，巨型壮汉，棕色皮肤，方下巴，奶白色头发梳成一整块光滑高耸的圆顶背头，黑色环绕护目镜左侧一点红光，脸上义体接缝线，红色大围巾，黑色皮夹克带红色圆环，敞开露出胸膛，腹部有竖条散热口状义体`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Maine from Cyberpunk Edgerunners, giant hulking muscular man, tan skin, heavy square jaw; hair: a very tall smooth cream-white pompadour shaped like a solid rounded dome/fin swept straight back (one smooth mass, NOT spiky); black wraparound cyber visor over the eyes with a single small red light on the left; thin cyber seam lines across his face; big red scarf/hood around the neck; black leather jacket with red ring details, worn open over a bare chest with vertical vent-like cyber slits on the abdomen`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的曼恩，巨型壮汉，棕色皮肤，方下巴，奶白色头发梳成一整块光滑高耸的圆顶背头，黑色环绕护目镜左侧一点红光，脸上义体接缝线，红色大围巾，黑色皮夹克带红色圆环，敞开露出胸膛，腹部有竖条散热口状义体`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Maine, giant hulking muscular man, tan skin, heavy square jaw; hair: a very tall smooth cream-white pompadour shaped like a solid rounded dome/fin swept straight back (one smooth mass, NOT spiky); black wraparound cyber visor over the eyes with a single small red light on the left; thin cyber seam lines across his face; big red scarf/hood around the neck; black leather jacket with red ring details, worn open over a bare chest with vertical vent-like cyber slits on the abdomen, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，曼恩，巨型壮汉，棕色皮肤，方下巴，奶白色头发梳成一整块光滑高耸的圆顶背头，黑色环绕护目镜左侧一点红光，脸上义体接缝线，红色大围巾，黑色皮夹克带红色圆环，敞开露出胸膛，腹部有竖条散热口状义体，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/f/fe/Maine_Infobox_CPEDGE.png/revision/latest?cb=20261104083110)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/b/b8/Maine_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20220916220306)
  - [剧中截图 · 第3集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/ab/Maine_01_EP3_CPEDGE.png/revision/latest?cb=20261104084330)
  - [剧中截图 · 第6集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/f/f0/Maine_04_EP6_CPEDGE.png/revision/latest?cb=20261102141448)
  - [剧中截图 · 第3集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/64/Maine%27s_Crew_01_EP3_CPEDGE.png/revision/latest?cb=20261031134911)

### 琪薇（Kiwi）
- 身份：Netrunner（网络行者）
- 阶层穿搭：新军国主义
- 体型：极高极瘦，全身大量义体改造。
- 面部与发型：浅桃金色直波波头，齐刘海；细长的金黄色眼睛；粉色呼吸器式面罩，带横向格栅，遮住嘴和下颌，面罩下是深色机械下颌。
- 服装：红色高领紧身长袖连体衣，有黑色横纹和黑色背带；红色长外套；黑色过膝靴。身上有蛛网纹身。
- 义体：下颌面罩、神经端口 / 个人接口、网络接入仓 / 手持网络接入仓、光纹身
- Wiki 义体清单：下颌面罩、神经端口（网络接入仓端口、多个个人接口、皮下神经处理器）、感知与情绪抑制植入体、蛛网光纹身、产蛛丝植入体
- 剪影要点：细长身形，红色长外套，红色下颌面罩，金色波波头。
- 配色：`#C8212E` `#FF7FA8` `#F2D9B8` `#111111`
- 角色描述（英，不含画风）：`Kiwi from Cyberpunk Edgerunners, very tall slender woman; pale peach-blonde hair in a straight blunt bob with straight-cut bangs; narrow sharp golden-yellow eyes; a pink respirator-style mask with horizontal vent slits covering her mouth and jaw (under it a dark mechanical jaw); red skin-tight high-neck long-sleeve outfit with black horizontal stripes and a black harness, a long red coat, black thigh-high boots`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的琪薇，极高极瘦的女性，浅桃金色齐刘海直波波头，细长金黄色眼睛，粉色呼吸器式面罩带横向格栅遮住嘴和下颌，红色高领紧身连体衣带黑色横纹和背带，红色长外套，黑色过膝靴`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Kiwi from Cyberpunk Edgerunners, very tall slender woman; pale peach-blonde hair in a straight blunt bob with straight-cut bangs; narrow sharp golden-yellow eyes; a pink respirator-style mask with horizontal vent slits covering her mouth and jaw (under it a dark mechanical jaw); red skin-tight high-neck long-sleeve outfit with black horizontal stripes and a black harness, a long red coat, black thigh-high boots`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的琪薇，极高极瘦的女性，浅桃金色齐刘海直波波头，细长金黄色眼睛，粉色呼吸器式面罩带横向格栅遮住嘴和下颌，红色高领紧身连体衣带黑色横纹和背带，红色长外套，黑色过膝靴`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Kiwi, very tall slender woman; pale peach-blonde hair in a straight blunt bob with straight-cut bangs; narrow sharp golden-yellow eyes; a pink respirator-style mask with horizontal vent slits covering her mouth and jaw (under it a dark mechanical jaw); red skin-tight high-neck long-sleeve outfit with black horizontal stripes and a black harness, a long red coat, black thigh-high boots, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，琪薇，极高极瘦的女性，浅桃金色齐刘海直波波头，细长金黄色眼睛，粉色呼吸器式面罩带横向格栅遮住嘴和下颌，红色高领紧身连体衣带黑色横纹和背带，红色长外套，黑色过膝靴，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/6a/Kiwi_Infobox_CPEDGE.jpg/revision/latest?cb=20220831221315)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/a3/Kiwi_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20220919002828)
  - [剧中截图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/d/d2/Kiwi_Mask_CPEDGE.jpg/revision/latest?cb=20240718194321)
  - [剧中截图 · 第3集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/12/Kiwi_01_EP3_CPEDGE.png/revision/latest?cb=20261101073744)

### 多里奥（Dorio）
- 身份：Solo（曼恩的搭档）；年龄：30 岁后半
- 阶层穿搭：媚俗
- 体型：极高、肌肉发达，在小队里仅次于曼恩。
- 面部与发型：金发，长长的侧刘海盖住一只眼，后面剪短；蓝眼睛；脸颊上有青色义体线条。
- 服装：宽大的蓝紫色外套配黑色领子，敞开不穿上衣；黑色紧身短裤；双腿是外露的金属义腿；一只黑色机械手。
- 义体：大猩猩手臂 / 超大型义臂、机械腿、面部 / 身体接缝线、神经端口 / 个人接口、EMP 线路
- Wiki 义体清单：2x 义臂（2x 大猩猩手臂）、2x 义腿（右腿内藏枪械）、EMP 线路、神经端口
- 剪影要点：高大的女性力量型身形，敞怀大外套，外露的金属双腿。
- 配色：`#F2E58A` `#3E4FB8` `#111111` `#9AA3AD`
- 角色描述（英，不含画风）：`Dorio from Cyberpunk Edgerunners, very tall muscular woman, blue eyes, small cyan cyber line marks on her cheek; blond hair with a long swept side fringe falling over one eye, short at the back; oversized blue-violet jacket with black collar worn open (chest covered by the jacket edges), black tight shorts; both legs are exposed bare-metal cybernetic legs; one black cybernetic hand`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的多里奥，高大肌肉女性，金发长侧刘海盖住一只眼、后面短，蓝眼睛，脸颊青色义体线条，宽大的蓝紫色外套配黑领子敞开，黑色紧身短裤，外露的金属义腿，一只黑色机械手`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Dorio from Cyberpunk Edgerunners, very tall muscular woman, blue eyes, small cyan cyber line marks on her cheek; blond hair with a long swept side fringe falling over one eye, short at the back; oversized blue-violet jacket with black collar worn open (chest covered by the jacket edges), black tight shorts; both legs are exposed bare-metal cybernetic legs; one black cybernetic hand`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的多里奥，高大肌肉女性，金发长侧刘海盖住一只眼、后面短，蓝眼睛，脸颊青色义体线条，宽大的蓝紫色外套配黑领子敞开，黑色紧身短裤，外露的金属义腿，一只黑色机械手`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Dorio, very tall muscular woman, blue eyes, small cyan cyber line marks on her cheek; blond hair with a long swept side fringe falling over one eye, short at the back; oversized blue-violet jacket with black collar worn open (chest covered by the jacket edges), black tight shorts; both legs are exposed bare-metal cybernetic legs; one black cybernetic hand, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，多里奥，高大肌肉女性，金发长侧刘海盖住一只眼、后面短，蓝眼睛，脸颊青色义体线条，宽大的蓝紫色外套配黑领子敞开，黑色紧身短裤，外露的金属义腿，一只黑色机械手，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/b/bd/Dorio_Infobox_CPEDGE.png/revision/latest?cb=20260622125733)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/2/28/Dorio_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20220919121711)
  - [剧中截图 · 第6集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/f/f4/Dorio_01_EP6_CPEDGE.png/revision/latest?cb=20261102141441)

### 皮拉（Pilar）
- 身份：Techie（技师），丽贝卡的哥哥；年龄：30 岁后半
- 阶层穿搭：媚俗
- 体型：高个男性。
- 面部与发型：皮肤偏苍白，总是咧嘴笑；巨大的黑色后梳尖刺背头；一条横跨双眼的黑色细护目镜，中间一道发橙黄光的缝；从耳侧绕到下巴的深棕色胡子状义体面板。
- 服装：黑色无袖背心配灰色衬衫，牛仔裤；双手是超长的金色机械手指。
- 义体：大猩猩手臂 / 超大型义臂、护目镜式光学义体、下颌义体（像胡子）、神经端口 / 个人接口
- Wiki 义体清单：2x 风格化义臂、单目视觉义体、神经端口
- 剪影要点：莫西干头，护目镜，下颌金属件，夸张的机械手指。
- 配色：`#111111` `#D9C24A` `#3A2A20` `#F2A23A` `#B8C2C8`
- 注：Wiki 写的是金色机械手，剧中特写也是金色；黄底宣传插画里偏银灰，是因为那张图的配色。
- 角色描述（英，不含画风）：`Pilar from Cyberpunk Edgerunners, lanky grinning man, pale skin; hair: a huge black spiky pompadour swept back and up; a thin horizontal black visor across the eyes with one glowing orange-yellow slit; a dark brown beard-shaped cyberware panel running from his ears down around his jaw and chin; very long thin golden mechanical fingers on both hands; black sleeveless vest over a gray shirt, jeans`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的皮拉，瘦高个子总在咧嘴笑，苍白皮肤，巨大的黑色后梳尖刺背头，一条黑色细护目镜中间一道橙黄色光缝，从耳侧绕到下巴的深棕色胡子状义体，超长的金色机械手指，黑色无袖背心配灰衬衫，牛仔裤`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Pilar from Cyberpunk Edgerunners, lanky grinning man, pale skin; hair: a huge black spiky pompadour swept back and up; a thin horizontal black visor across the eyes with one glowing orange-yellow slit; a dark brown beard-shaped cyberware panel running from his ears down around his jaw and chin; very long thin golden mechanical fingers on both hands; black sleeveless vest over a gray shirt, jeans`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的皮拉，瘦高个子总在咧嘴笑，苍白皮肤，巨大的黑色后梳尖刺背头，一条黑色细护目镜中间一道橙黄色光缝，从耳侧绕到下巴的深棕色胡子状义体，超长的金色机械手指，黑色无袖背心配灰衬衫，牛仔裤`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Pilar, lanky grinning man, pale skin; hair: a huge black spiky pompadour swept back and up; a thin horizontal black visor across the eyes with one glowing orange-yellow slit; a dark brown beard-shaped cyberware panel running from his ears down around his jaw and chin; very long thin golden mechanical fingers on both hands; black sleeveless vest over a gray shirt, jeans, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，皮拉，瘦高个子总在咧嘴笑，苍白皮肤，巨大的黑色后梳尖刺背头，一条黑色细护目镜中间一道橙黄色光缝，从耳侧绕到下巴的深棕色胡子状义体，超长的金色机械手指，黑色无袖背心配灰衬衫，牛仔裤，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/7b/Pilar_Infobox_CPEDGE.png/revision/latest?cb=20260622130007)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/ae/Pilar_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20220919002759)
  - [剧中截图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/c/cd/Pilar_Inside_Look_2_ScreenCap_CPEDGE.png/revision/latest?cb=20220801194032)

### 法尔科（Falco）
- 身份：车手（小队司机）
- 阶层穿搭：熵主义
- 体型：中等身高体型，年纪偏大。
- 面部与发型：深棕色半长发，中分后向两侧蓬开；末端上翘的浓密八字胡。
- 服装：西部风格：多色棕色马甲配肩带，白色高领长袖衬衫，右袖卷起；深棕色裤子，浅棕色鞋子；腰间挂黄色弹药带，右侧枪套里一把手枪。
- 义体：单只义臂
- Wiki 义体清单：右臂一只银黑色义臂（型号不明），是他唯一明显的义体
- 剪影要点：八字胡，西部马甲，卷起的右袖露出银色义臂。
- 配色：`#6B4428` `#F2EFE6` `#E2B23A` `#B8BCC2`
- 角色描述（英，不含画风）：`Falco from Cyberpunk Edgerunners, middle-aged man, semi-long dark brown hair parted in the middle and puffed out to the sides, thick dark mustache curled up at the ends, big grin; western style: multi-tone brown waistcoat with shoulder straps over a white high-collar long-sleeve shirt with the right sleeve rolled up revealing a silver-and-black cyberarm; dark brown pants; yellow ammo belt with a holstered heavy revolver`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的法尔科，中年男人，深棕色中分半长发，末端上翘的浓密八字胡，棕色西部马甲带肩带，白色高领衬衫，右袖卷起露出银黑色义臂，黄色弹药带和枪套`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Falco from Cyberpunk Edgerunners, middle-aged man, semi-long dark brown hair parted in the middle and puffed out to the sides, thick dark mustache curled up at the ends, big grin; western style: multi-tone brown waistcoat with shoulder straps over a white high-collar long-sleeve shirt with the right sleeve rolled up revealing a silver-and-black cyberarm; dark brown pants; yellow ammo belt with a holstered heavy revolver`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的法尔科，中年男人，深棕色中分半长发，末端上翘的浓密八字胡，棕色西部马甲带肩带，白色高领衬衫，右袖卷起露出银黑色义臂，黄色弹药带和枪套`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Falco, middle-aged man, semi-long dark brown hair parted in the middle and puffed out to the sides, thick dark mustache curled up at the ends, big grin; western style: multi-tone brown waistcoat with shoulder straps over a white high-collar long-sleeve shirt with the right sleeve rolled up revealing a silver-and-black cyberarm; dark brown pants; yellow ammo belt with a holstered heavy revolver, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，法尔科，中年男人，深棕色中分半长发，末端上翘的浓密八字胡，棕色西部马甲带肩带，白色高领衬衫，右袖卷起露出银黑色义臂，黄色弹药带和枪套，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/6d/Falco_Infobox_CPEDGE.jpg/revision/latest?cb=20220915021736)
  - [宣传插画 · Yoshiyuki Kaneko（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/3/38/Falco_by_Yoshiyuki_Kaneko_CPEDGE.png/revision/latest?cb=20261105210443)
  - [剧中截图 · 第6集（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/4/4d/Falco_01_EP06_CPEDGE.png/revision/latest?cb=20261102141444)

### 亚当·重锤（Adam Smasher）
- 身份：荒坂安保主管，全身义体雇佣兵（剧中最终反派）
- 阶层穿搭：新军国主义
- 体型：全身义体，巨型机械体格，几乎没有剩下的肉体。
- 面部与发型：骷髅状的金属面甲，红色发光眼；没有头发。
- 服装：无服装，整个身体都是装甲外壳。
- 义体：全身义体（Full Borg）
- 剪影要点：骷髅面甲，两点红眼，巨大的块状机械身躯。
- 配色：`#2A2A30` `#8A8F99` `#FF2A2A` `#E25822`
- 角色描述（英，不含画风）：`Adam Smasher from Cyberpunk Edgerunners, towering full-body cyborg, almost no human flesh left: skull-like dark chrome faceplate with glowing red eyes, hulking heavily armored mechanical body with layered plates, huge arm cannon`
- 角色描述（中，不含画风）：`赛博朋克边缘行者的亚当·重锤，全身义体改造人，骷髅状深色金属面甲，红色发光眼，巨大的装甲机械身躯，火焰和烟雾背景`
- **第一季动画提示词**
  - EN：`anime screencap, Studio Trigger style, Cyberpunk Edgerunners style, bold variable-weight lineart, flat two-tone cel shading, hard geometric shadows, colored shadows, neon rim light, cyan and magenta lighting, high contrast night city, exaggerated perspective, Adam Smasher from Cyberpunk Edgerunners, towering full-body cyborg, almost no human flesh left: skull-like dark chrome faceplate with glowing red eyes, hulking heavily armored mechanical body with layered plates, huge arm cannon`
  - 中：`日本动画截图，扳机社画风，赛博朋克边缘行者风格，粗细变化描线，两阶赛璐璐平涂，硬边几何阴影，彩色暗部，霓虹边缘光，青色与洋红灯光，高对比夜之城，夸张透视，赛博朋克边缘行者的亚当·重锤，全身义体改造人，骷髅状深色金属面甲，红色发光眼，巨大的装甲机械身躯，火焰和烟雾背景`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, realistic skin texture, video game screenshot, soft gradient shading` / `写实照片，三维渲染，PBR 材质，光线追踪，写实皮肤纹理，游戏截图，柔和渐变阴影`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Adam Smasher, towering full-body cyborg, almost no human flesh left: skull-like dark chrome faceplate with glowing red eyes, hulking heavily armored mechanical body with layered plates, huge arm cannon, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，亚当·重锤，全身义体改造人，骷髅状深色金属面甲，红色发光眼，巨大的装甲机械身躯，火焰和烟雾背景，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第一季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/87/Adam_Smasher_Infobox_CPEDGE.png/revision/latest?cb=20220913205918)
  - [游戏定妆图（CP2077）（游戏）](https://static.wikia.nocookie.net/cyberpunk/images/8/89/Adam_Smasher_Infobox_CP2077.png/revision/latest?cb=20201230173541)


## 第二季角色
### 罗曼·卡拉克斯（Roman Carax）
- 身份：Media（自由电影人），12 岁；父亲是理发师 Olek Carax；年龄：12
- 阶层穿搭：媚俗
- 体型：小个子男孩，大腿上贴着创可贴（右腿两块、左腿一块）。
- 面部与发型：金发，发尾和两侧带一点桃橙色，蓬松短发、从左侧分开；翠绿色眼睛；左耳一个耳环；左额有一个银色小义体标记。
- 服装：白色加藏青色的长袖翻领飞行员夹克，前襟有一条绿色 LED 灯带，领子内衬亮绿色；里面红色 T 恤，胸前白色大字母 B（父亲理发店的标志）；黑色绒面颈环；蓝色短裤带白色侧条；白色厚底运动鞋配红袜子、深蓝鞋底；斜挎黄色单肩包（绿色点缀），手里常拿一台绿色手持摄像机。
- 义体：神经端口 / 个人接口
- 剪影要点：蓬松金发小男孩，白色大夹克，红 T 恤上的大写 B，手里的绿色摄像机。
- 配色：`#F6E08A` `#F4F4F4` `#2B3A6B` `#D8282F` `#3BE36B` `#F2C230`
- 角色描述（英，不含画风）：`Roman Carax from Cyberpunk Edgerunners 2, small 12-year-old boy, fluffy blond hair with peach-orange tips parted on the left, emerald green eyes, small silver cyber mark on the left forehead, earring in the left ear, white and navy oversized bomber jacket with green LED strip and bright green inner collar, red t-shirt with a big white letter B logo, black velvet choker, blue shorts with white side stripes, bandages on his thighs, chunky white sneakers with red socks, yellow sling bag, holding a green handheld video camera`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的罗曼·卡拉克斯，12 岁小男孩，蓬松金发发尾带桃橙色、左侧分，翠绿色眼睛，左额银色小义体标记，左耳耳环，白色加藏青色宽大飞行员夹克、绿色 LED 灯带和亮绿内领，红 T 恤印白色大写 B，黑色颈环，蓝色短裤带白侧条，大腿贴创可贴，白色厚底运动鞋配红袜，黄色斜挎包，手拿绿色手持摄像机`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Roman Carax from Cyberpunk Edgerunners 2, small 12-year-old boy, fluffy blond hair with peach-orange tips parted on the left, emerald green eyes, small silver cyber mark on the left forehead, earring in the left ear, white and navy oversized bomber jacket with green LED strip and bright green inner collar, red t-shirt with a big white letter B logo, black velvet choker, blue shorts with white side stripes, bandages on his thighs, chunky white sneakers with red socks, yellow sling bag, holding a green handheld video camera`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的罗曼·卡拉克斯，12 岁小男孩，蓬松金发发尾带桃橙色、左侧分，翠绿色眼睛，左额银色小义体标记，左耳耳环，白色加藏青色宽大飞行员夹克、绿色 LED 灯带和亮绿内领，红 T 恤印白色大写 B，黑色颈环，蓝色短裤带白侧条，大腿贴创可贴，白色厚底运动鞋配红袜，黄色斜挎包，手拿绿色手持摄像机`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Roman Carax, small 12-year-old boy, fluffy blond hair with peach-orange tips parted on the left, emerald green eyes, small silver cyber mark on the left forehead, earring in the left ear, white and navy oversized bomber jacket with green LED strip and bright green inner collar, red t-shirt with a big white letter B logo, black velvet choker, blue shorts with white side stripes, bandages on his thighs, chunky white sneakers with red socks, yellow sling bag, holding a green handheld video camera, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，罗曼·卡拉克斯，12 岁小男孩，蓬松金发发尾带桃橙色、左侧分，翠绿色眼睛，左额银色小义体标记，左耳耳环，白色加藏青色宽大飞行员夹克、绿色 LED 灯带和亮绿内领，红 T 恤印白色大写 B，黑色颈环，蓝色短裤带白侧条，大腿贴创可贴，白色厚底运动鞋配红袜，黄色斜挎包，手拿绿色手持摄像机，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/71/Roman_Infobox_CPEDGEII.png/revision/latest?cb=20261106122207)
  - [倒计时宣传图 · TRIGGER（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/ae/0_Day_Roman_TRIGGER_CPEDGEII.png/revision/latest?cb=20261021034125)
  - [官方 Cosplay 指南（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/aa/Roman_Carax_Cosplay_Guide_05_CPEDGEII.png/revision/latest?cb=20261029094022)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/0/03/Roman_01_CPEDGEII.png/revision/latest?cb=20261027233200)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/7f/Roman_02_CPEDGEII.png/revision/latest?cb=20261027233324)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/c/cb/Screenshot_013_Roman_CPEDGEII.jpg/revision/latest?cb=20260629204941)

### D（D）
- 身份：Nomad / Netrunner（游牧民网络行者，Snake Nation）
- 阶层穿搭：新军国主义
- 体型：高瘦，手长腿长。
- 面部与发型：黑色（带一点蓝绿色调）的凌乱长刺发，常垂下来盖住脸；绿色眼睛；右半边脸和身体有一大片红色烧伤疤痕；右耳缺失，换成黑色耳部义体。
- 服装：宽大的蓝色皮夹克，白色镶边和多个口袋，胸前一块灰色方形补丁；里面深蓝色网络行者紧身衣，红色镶边，衣服延伸到两根中指；深色紧身裤，带红边的护胫，芭蕾风平底鞋。
- 义体：耳部义体、神经端口 / 个人接口、网络接入仓 / 手持网络接入仓
- 剪影要点：高瘦身形，凌乱黑色长刺发，半张脸红色烧伤，宽大的蓝色夹克。
- 配色：`#2F5FD0` `#F4F4F4` `#1B2340` `#E8213F` `#3BE36B` `#123A44`
- 角色描述（英，不含画风）：`D from Cyberpunk Edgerunners 2, tall very slender man, messy long spiky black hair with a teal tint falling over his face, green eyes, a large red burn scar covering the right side of his face and neck, black ear implant in place of the missing right ear, oversized blue leather jacket with white trim, pockets and a gray square patch, dark navy netrunner bodysuit with red trim covering up to his middle fingers, dark slim pants, shin guards with red trim, ballet-style flat shoes`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的 D，高瘦男人，凌乱的黑色长刺发带蓝绿色调、垂在脸上，绿色眼睛，右半边脸和脖子大片红色烧伤疤，右耳换成黑色耳部义体，宽大的蓝色皮夹克带白边、口袋和灰色方形补丁，深蓝色网络行者紧身衣带红边、延伸到中指，深色紧身裤，红边护胫，芭蕾风平底鞋`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, D from Cyberpunk Edgerunners 2, tall very slender man, messy long spiky black hair with a teal tint falling over his face, green eyes, a large red burn scar covering the right side of his face and neck, black ear implant in place of the missing right ear, oversized blue leather jacket with white trim, pockets and a gray square patch, dark navy netrunner bodysuit with red trim covering up to his middle fingers, dark slim pants, shin guards with red trim, ballet-style flat shoes`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的 D，高瘦男人，凌乱的黑色长刺发带蓝绿色调、垂在脸上，绿色眼睛，右半边脸和脖子大片红色烧伤疤，右耳换成黑色耳部义体，宽大的蓝色皮夹克带白边、口袋和灰色方形补丁，深蓝色网络行者紧身衣带红边、延伸到中指，深色紧身裤，红边护胫，芭蕾风平底鞋`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, D, tall very slender man, messy long spiky black hair with a teal tint falling over his face, green eyes, a large red burn scar covering the right side of his face and neck, black ear implant in place of the missing right ear, oversized blue leather jacket with white trim, pockets and a gray square patch, dark navy netrunner bodysuit with red trim covering up to his middle fingers, dark slim pants, shin guards with red trim, ballet-style flat shoes, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城， D，高瘦男人，凌乱的黑色长刺发带蓝绿色调、垂在脸上，绿色眼睛，右半边脸和脖子大片红色烧伤疤，右耳换成黑色耳部义体，宽大的蓝色皮夹克带白边、口袋和灰色方形补丁，深蓝色网络行者紧身衣带红边、延伸到中指，深色紧身裤，红边护胫，芭蕾风平底鞋，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/78/D_Infobox_CPEDGEII.png/revision/latest?cb=20261106122607)
  - [倒计时宣传图 · TRIGGER（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/7f/1_Day_D_TRIGGER_CPEDGEII.png/revision/latest?cb=20261019083455)
  - [官方 Cosplay 指南（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/f/fa/D_Cosplay_Guide_05_CPEDGEII.png/revision/latest?cb=20261029093812)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/79/D_01_CPEDGEII.png/revision/latest?cb=20261026080622)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/b/b1/D_02_CPEDGEII.png/revision/latest?cb=20261026080624)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/75/Screenshot_010_D_CPEDGEII.jpg/revision/latest?cb=20260629204934)

### 塔莉亚·杨（Talia Yang）
- 身份：前康陶高管，后加入漩涡帮；Avida 和 Kiril 的女儿
- 阶层穿搭：媚俗
- 体型：高瘦，身体大部分换成义体，躯干有分块的义体面板和接缝。
- 面部与发型：粉色染发，编成一条很长的辫子（辫子边缘呈锯齿状），中间垂下一缕长发；头顶伸出两根细长的触角；锐利的蓝绿色眼睛，瞳孔像昆虫；下半张脸是黑色分段的口部义体。年少时（改造前）是天生的红发。
- 服装：敞开的黑色连帽连体运动服，中长袖，大部分躯干露在外面，内衬和细节有橙红色；银色机械手臂、红色手指；银色蚱蜢式腿部义体，脚上有红色尖爪。
- 义体：昆虫式口部义体、蚱蜢式腿部义体、触角、神经端口 / 个人接口
- 剪影要点：粉色长辫子加头顶两根触角，黑色口部义体，敞开的黑色长运动服，银色反关节腿。
- 配色：`#F2A3B8` `#111111` `#B8C2C8` `#E8213F` `#5FE0D0`
- 角色描述（英，不含画风）：`Talia Yang from Cyberpunk Edgerunners 2, tall slender heavily augmented girl, pink hair in one very long braid with a jagged edge plus a long middle lock, two long thin antenna-like strands arching from the top of her head, sharp teal eyes with insect-like pupils, black segmented insect-like mouthpiece implant covering her lower face, open hooded black one-piece tracksuit with mid-length sleeves exposing a torso of cybernetic body panels, silver cybernetic arms with red fingers, silver digitigrade grasshopper-like cybernetic legs with red claw tips`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的塔莉亚·杨，高瘦的重度改造少女，粉色长辫子边缘呈锯齿状、中间垂一缕长发，头顶两根细长触角，锐利的蓝绿色昆虫瞳孔，下半张脸是黑色分段的昆虫式口部义体，敞开的黑色连帽连体运动服露出义体面板躯干，银色机械手臂配红色手指，银色反关节蚱蜢式义腿带红色尖爪`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Talia Yang from Cyberpunk Edgerunners 2, tall slender heavily augmented girl, pink hair in one very long braid with a jagged edge plus a long middle lock, two long thin antenna-like strands arching from the top of her head, sharp teal eyes with insect-like pupils, black segmented insect-like mouthpiece implant covering her lower face, open hooded black one-piece tracksuit with mid-length sleeves exposing a torso of cybernetic body panels, silver cybernetic arms with red fingers, silver digitigrade grasshopper-like cybernetic legs with red claw tips`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的塔莉亚·杨，高瘦的重度改造少女，粉色长辫子边缘呈锯齿状、中间垂一缕长发，头顶两根细长触角，锐利的蓝绿色昆虫瞳孔，下半张脸是黑色分段的昆虫式口部义体，敞开的黑色连帽连体运动服露出义体面板躯干，银色机械手臂配红色手指，银色反关节蚱蜢式义腿带红色尖爪`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Talia Yang, tall slender heavily augmented girl, pink hair in one very long braid with a jagged edge plus a long middle lock, two long thin antenna-like strands arching from the top of her head, sharp teal eyes with insect-like pupils, black segmented insect-like mouthpiece implant covering her lower face, open hooded black one-piece tracksuit with mid-length sleeves exposing a torso of cybernetic body panels, silver cybernetic arms with red fingers, silver digitigrade grasshopper-like cybernetic legs with red claw tips, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，塔莉亚·杨，高瘦的重度改造少女，粉色长辫子边缘呈锯齿状、中间垂一缕长发，头顶两根细长触角，锐利的蓝绿色昆虫瞳孔，下半张脸是黑色分段的昆虫式口部义体，敞开的黑色连帽连体运动服露出义体面板躯干，银色机械手臂配红色手指，银色反关节蚱蜢式义腿带红色尖爪，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/e/e6/Talia_Yang_Infobox_CPEDGEII.png/revision/latest?cb=20261106122408)
  - [倒计时宣传图 · TRIGGER（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/3/3e/2_Days_Talia_TRIGGER_CPEDGEII.png/revision/latest?cb=20261018084957)
  - [官方 Cosplay 指南（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/3/32/Talia_Yang_Cosplay_Guide_05_CPEDGEII.png/revision/latest?cb=20261029094050)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/69/Talia_01_CPEDGEII.png/revision/latest?cb=20261026082903)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/ab/Talia_02_CPEDGEII.png/revision/latest?cb=20261026083054)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/f/fc/Screenshot_017_Talia_CPEDGEII.jpg/revision/latest?cb=20260629204952)

### 韦克·金斯利（Weak Kingsley）
- 身份：Solo，Team King 前首领；Avida 的旧情人
- 阶层穿搭：媚俗
- 体型：高大魁梧，身体大部分改造过。
- 面部与发型：金色短发，两侧剃短、顶部向后梳；修整过的金色「王者」式山羊胡（下巴一撮）；棕色眼睛，戴一副红色圆镜片的眼镜；左侧头部有红色皮下线条；脖子被深绿色装甲包住。后期：消瘦、伤疤更多，一只眼戴金属眼罩，部分下颌换成义体。
- 服装：长款灰色立领大衣，内衬是青绿色、领口有红色色块，背后画着金色三尖皇冠；里面黑色防弹背心，脖子挂项链；绿色裤子，膝盖有骷髅形护膝和黑色护腿；深棕色黑底靴子；红色机械手，右手食指是刻着 K 的金色义体。
- 义体：颈部装甲 / 颈部义体、刻字金手指、义体下颌、皮下装甲
- 剪影要点：红色圆镜片，金色背头，宽大的灰色长大衣配青绿内衬，红色机械手，骷髅护膝。
- 配色：`#C9C6C0` `#2BC1B5` `#E8213F` `#4E6B4A` `#E2B23A` `#F2E58A`
- 阶段形态：early：魁梧，红色圆镜片，灰色大衣，绿色裤子配骷髅护膝；late：消瘦落魄，金属眼罩、更多伤疤，部分下颌是义体，穿浅色宽松外套
- 注：这个角色也出现在《赛博朋克 2077》游戏里（Wiki 记为 appears_games: 2077），目前只有游戏里的手机联系人头像，已单独标为游戏图。
- 角色描述（英，不含画风）：`Weak Kingsley from Cyberpunk Edgerunners 2, tall burly man, short blond hair slicked back with trimmed sides, small trimmed blond royal goatee, round red-lensed glasses, red line implants on the left side of his head, dark green armored neck, long gray high-collared coat with teal lining and red patches and a gold three-point crown painted on the back, black bulletproof vest, necklace, green pants with skull-shaped knee guards, dark brown boots, red cybernetic hands with a gold index finger engraved K`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的韦克·金斯利，高大魁梧的男人，金色短发向后梳、两侧剃短，修整过的金色下巴小胡子，红色圆镜片眼镜，左侧头部红色线条义体，深绿色颈部装甲，灰色立领长大衣配青绿内衬和红色色块、背后金色皇冠，黑色防弹背心，项链，绿色裤子配骷髅护膝，深棕色靴子，红色机械手、右手食指是刻着 K 的金色义体`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Weak Kingsley from Cyberpunk Edgerunners 2, tall burly man, short blond hair slicked back with trimmed sides, small trimmed blond royal goatee, round red-lensed glasses, red line implants on the left side of his head, dark green armored neck, long gray high-collared coat with teal lining and red patches and a gold three-point crown painted on the back, black bulletproof vest, necklace, green pants with skull-shaped knee guards, dark brown boots, red cybernetic hands with a gold index finger engraved K`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的韦克·金斯利，高大魁梧的男人，金色短发向后梳、两侧剃短，修整过的金色下巴小胡子，红色圆镜片眼镜，左侧头部红色线条义体，深绿色颈部装甲，灰色立领长大衣配青绿内衬和红色色块、背后金色皇冠，黑色防弹背心，项链，绿色裤子配骷髅护膝，深棕色靴子，红色机械手、右手食指是刻着 K 的金色义体`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Weak Kingsley, tall burly man, short blond hair slicked back with trimmed sides, small trimmed blond royal goatee, round red-lensed glasses, red line implants on the left side of his head, dark green armored neck, long gray high-collared coat with teal lining and red patches and a gold three-point crown painted on the back, black bulletproof vest, necklace, green pants with skull-shaped knee guards, dark brown boots, red cybernetic hands with a gold index finger engraved K, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，韦克·金斯利，高大魁梧的男人，金色短发向后梳、两侧剃短，修整过的金色下巴小胡子，红色圆镜片眼镜，左侧头部红色线条义体，深绿色颈部装甲，灰色立领长大衣配青绿内衬和红色色块、背后金色皇冠，黑色防弹背心，项链，绿色裤子配骷髅护膝，深棕色靴子，红色机械手、右手食指是刻着 K 的金色义体，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/4/4c/Weak_Kingsley_Infobox_CPEDGEII.png/revision/latest?cb=20261106122531)
  - [倒计时宣传图 · TRIGGER（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/b/b2/3_Days_Weak_TRIGGER_CPEDGEII.jpg/revision/latest?cb=20261017070658)
  - [官方 Cosplay 指南（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/c/ce/Weak_Kingsley_Cosplay_Guide_05_CPEDGEII.png/revision/latest?cb=20261029094118)
  - [官方 Cosplay 指南（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/6a/Weak_Kingsley_Cosplay_Guide_08_CPEDGEII.png/revision/latest?cb=20261029094126)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/1e/Screenshot_007_Weak_CPEDGEII.jpg/revision/latest?cb=20260629204958)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/c/cc/Screenshot_033_Weak_CPEDGEII.jpg/revision/latest?cb=20261015061133)
  - [游戏手机联系人头像（CP2077）（游戏）](https://static.wikia.nocookie.net/cyberpunk/images/8/86/Weak_Kingsley_Phone_Avatar_CP2077.png/revision/latest?cb=20261111075725)

### 阿维达·杨（Avida Yang）
- 身份：Corpo（康陶内部人员），前爵士歌手 / 萨克斯手；Talia 的母亲、Kiril 的妻子
- 阶层穿搭：新媚俗
- 体型：成熟女性，深色皮肤，身形高挑。
- 面部与发型：深棕色卷发，头顶向后梳贴、额前一道波浪形发线，脑后的卷发蓬成一大团云状；蓝眼睛；浓重的紫色眼影、红色眼线、蓝色口红；太阳穴有金白色义体；脸上有细义体接缝；长耳坠。
- 服装：宽肩廓形的深藏青色公司西装（剪裁夸张、肩部方正），里面白色衬衫；金色颈部义体非常显眼；左手中指是刻着 A 的金色义体。
- 义体：颈部装甲 / 颈部义体、刻字金手指、面部 / 身体接缝线
- 剪影要点：脑后大团云状卷发，宽肩藏青西装，金色颈部义体，蓝唇。
- 配色：`#3A2418` `#2A3346` `#F2C230` `#7B5CE8` `#3D8BFF` `#F4F1E8`
- 角色描述（英，不含画风）：`Avida Yang from Cyberpunk Edgerunners 2, mature dark-skinned woman, dark brown curly hair slicked back on top with a wavy hairline and a huge cloud-like mass of curls behind her head, blue eyes, heavy purple eyeshadow, red eyeliner, blue lipstick, gold-white cyberware at the temples and thin implant seams on her face, long drop earrings, golden cybernetic neck collar, broad-shouldered boxy dark navy corporate suit over a white shirt, gold cybernetic middle finger engraved A`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的阿维达·杨，成熟的深肤色女性，深棕色卷发头顶向后梳、额前波浪发线、脑后一大团云状卷发，蓝眼睛，浓重紫色眼影，红色眼线，蓝色口红，太阳穴金白色义体，脸上细接缝，长耳坠，金色颈部义体，宽肩廓形深藏青公司西装配白衬衫，刻着 A 的金色中指义体`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Avida Yang from Cyberpunk Edgerunners 2, mature dark-skinned woman, dark brown curly hair slicked back on top with a wavy hairline and a huge cloud-like mass of curls behind her head, blue eyes, heavy purple eyeshadow, red eyeliner, blue lipstick, gold-white cyberware at the temples and thin implant seams on her face, long drop earrings, golden cybernetic neck collar, broad-shouldered boxy dark navy corporate suit over a white shirt, gold cybernetic middle finger engraved A`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的阿维达·杨，成熟的深肤色女性，深棕色卷发头顶向后梳、额前波浪发线、脑后一大团云状卷发，蓝眼睛，浓重紫色眼影，红色眼线，蓝色口红，太阳穴金白色义体，脸上细接缝，长耳坠，金色颈部义体，宽肩廓形深藏青公司西装配白衬衫，刻着 A 的金色中指义体`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Avida Yang, mature dark-skinned woman, dark brown curly hair slicked back on top with a wavy hairline and a huge cloud-like mass of curls behind her head, blue eyes, heavy purple eyeshadow, red eyeliner, blue lipstick, gold-white cyberware at the temples and thin implant seams on her face, long drop earrings, golden cybernetic neck collar, broad-shouldered boxy dark navy corporate suit over a white shirt, gold cybernetic middle finger engraved A, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，阿维达·杨，成熟的深肤色女性，深棕色卷发头顶向后梳、额前波浪发线、脑后一大团云状卷发，蓝眼睛，浓重紫色眼影，红色眼线，蓝色口红，太阳穴金白色义体，脸上细接缝，长耳坠，金色颈部义体，宽肩廓形深藏青公司西装配白衬衫，刻着 A 的金色中指义体，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/68/Avida_Yang_Infobox_CPEDGEII.png/revision/latest?cb=20260903151509)
  - [倒计时宣传图 · TRIGGER（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/79/4_Days_Avida_TRIGGER_CPEDGEII.jpg/revision/latest?cb=20261016120703)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/1c/Avida_01_CPEDGEII.png/revision/latest?cb=20261023055305)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/ad/Avida_02_CPEDGEII.png/revision/latest?cb=20261023055353)

### 基里尔·杨（Kiril Yang）
- 身份：Corpo（康陶）；Talia 的父亲、Avida 的丈夫
- 阶层穿搭：新军国主义
- 体型：中年男性，身材结实。
- 面部与发型：深藏青色的短刺发；橙色瞳孔的深灰色光学义体；白色义体下颌，带橙色线条和下巴上的橙色色块；常叼着烟。
- 服装：深灰近黑的高立领西装，全身有康陶橙的细线条；白色的大猩猩手臂（机械手是白色）。
- 义体：义体下颌、Kiroshi 义眼、大猩猩手臂 / 超大型义臂
- 剪影要点：白色加橙色的义体下颌，黑色立领西装上的橙色线条，白色机械手。
- 配色：`#1E1F26` `#F28C1E` `#F4F4F4` `#2B3A6B`
- 角色描述（英，不含画风）：`Kiril Yang from Cyberpunk Edgerunners 2, middle-aged man, short spiky dark navy hair, orange cybernetic irises, white cybernetic jaw plating with orange lines and an orange chin plate, cigarette in his mouth, dark gray almost black high-collared suit with thin Kang Tao orange piping, white cybernetic gorilla arm hands`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的基里尔·杨，中年男人，深藏青色短刺发，橙色瞳孔义眼，白色义体下颌带橙色线条和橙色下巴，叼着烟，深灰近黑的高立领西装带康陶橙细线，白色大猩猩手臂`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Kiril Yang from Cyberpunk Edgerunners 2, middle-aged man, short spiky dark navy hair, orange cybernetic irises, white cybernetic jaw plating with orange lines and an orange chin plate, cigarette in his mouth, dark gray almost black high-collared suit with thin Kang Tao orange piping, white cybernetic gorilla arm hands`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的基里尔·杨，中年男人，深藏青色短刺发，橙色瞳孔义眼，白色义体下颌带橙色线条和橙色下巴，叼着烟，深灰近黑的高立领西装带康陶橙细线，白色大猩猩手臂`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Kiril Yang, middle-aged man, short spiky dark navy hair, orange cybernetic irises, white cybernetic jaw plating with orange lines and an orange chin plate, cigarette in his mouth, dark gray almost black high-collared suit with thin Kang Tao orange piping, white cybernetic gorilla arm hands, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，基里尔·杨，中年男人，深藏青色短刺发，橙色瞳孔义眼，白色义体下颌带橙色线条和橙色下巴，叼着烟，深灰近黑的高立领西装带康陶橙细线，白色大猩猩手臂，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/d/d3/Kiril_Yang_Infobox_CPEDGEII.png/revision/latest?cb=20261007155903)
  - [倒计时宣传图 · TRIGGER（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/12/5_Days_Kiril_TRIGGER_CPEDGEII.jpg/revision/latest?cb=20261015211239)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/18/Kiril_01_CPEDGEII.png/revision/latest?cb=20261023060520)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/0/0b/Kiril_02_CPEDGEII.png/revision/latest?cb=20261023060557)

### 杰西（Jessie）
- 身份：Techie（超梦工程师），在 Sal Bigelow 的超梦店工作
- 阶层穿搭：媚俗
- 体型：身材匀称，皮肤大部分是苍白色，右侧身体和整条右臂是紫色，中间有一道蓝色分界线（合成皮肤）。
- 面部与发型：灰银色长直发，盖住一部分脸；紫色眼睛；脸上有淡紫色线条。
- 服装：黄色露肩短上衣（领口有破洞），蓝色牛仔背带短裤；一只手戴超梦剪辑手套（黑色骨架式机械手指）。
- 义体：超梦剪辑手套
- 剪影要点：银灰色长发，黄色露肩上衣，背带短裤，一半紫色的手臂。
- 配色：`#D9DCE0` `#9B6BD8` `#F2C230` `#3B5FA8` `#4FB3E8`
- 角色描述（英，不含画风）：`Jessie from Cyberpunk Edgerunners 2, young woman, long straight silver-gray hair, purple eyes, pale white skin with the right side of her body and entire right arm purple divided by a blue streak, yellow off-shoulder crop top, blue denim overall shorts, black braindance editing glove with skeletal mechanical fingers`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的杰西，年轻女性，银灰色长直发，紫色眼睛，苍白皮肤、右侧身体和整条右臂是紫色并有一道蓝色分界，黄色露肩短上衣，蓝色牛仔背带短裤，黑色骨架式超梦剪辑手套`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Jessie from Cyberpunk Edgerunners 2, young woman, long straight silver-gray hair, purple eyes, pale white skin with the right side of her body and entire right arm purple divided by a blue streak, yellow off-shoulder crop top, blue denim overall shorts, black braindance editing glove with skeletal mechanical fingers`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的杰西，年轻女性，银灰色长直发，紫色眼睛，苍白皮肤、右侧身体和整条右臂是紫色并有一道蓝色分界，黄色露肩短上衣，蓝色牛仔背带短裤，黑色骨架式超梦剪辑手套`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Jessie, young woman, long straight silver-gray hair, purple eyes, pale white skin with the right side of her body and entire right arm purple divided by a blue streak, yellow off-shoulder crop top, blue denim overall shorts, black braindance editing glove with skeletal mechanical fingers, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，杰西，年轻女性，银灰色长直发，紫色眼睛，苍白皮肤、右侧身体和整条右臂是紫色并有一道蓝色分界，黄色露肩短上衣，蓝色牛仔背带短裤，黑色骨架式超梦剪辑手套，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/10/Jessie_Infobox_CPEDGEII.png/revision/latest?cb=20260910142831)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/12/Jessie_01_CPEDGEII.png/revision/latest?cb=20261022063113)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/87/Jessie_%26_Roman_01_CPEDGEII.png/revision/latest?cb=20261023063328)

### 京子（田网京子）（Kyoko Tanaami）
- 身份：Medtech / Netrunner，前荒坂；Capri 的创造者
- 阶层穿搭：熵主义
- 体型：个子非常矮小。
- 面部与发型：黑色头发向后梳成马尾，头顶能看到一道道梳齿般的发线；红色义眼；八角形方框眼镜；脸中间一块灰色局部面甲，一直到上唇，脸上有缝合式接缝；笑起来露出尖牙。
- 服装：绿色衬衫，卡其绿短裤，粉色凉鞋；回忆戏里穿白大褂；右臂是红色机械臂。
- 义体：局部面甲、Kiroshi 义眼、单只义臂
- 剪影要点：矮小，八角眼镜后的红眼，脸中间的面甲接缝，红色机械右臂。
- 配色：`#111111` `#9AA3AD` `#E8213F` `#4CAF50` `#8A9A5B` `#FF8FB1`
- 角色描述（英，不含画风）：`Kyoko Tanaami from Cyberpunk Edgerunners 2, extremely short woman, black hair slicked back into a ponytail, red cybernetic eyes behind octagonal glasses, gray partial faceplate running down the center of her face to her upper lip with stitch-like seams, toothy grin with small fangs, green shirt, khaki green shorts, pink sandals, red cybernetic right arm`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的京子，个子非常矮小的女性，黑发向后梳成马尾，八角形眼镜后是红色义眼，脸中间到上唇一块灰色局部面甲带缝合接缝，咧嘴露出小尖牙，绿色衬衫，卡其绿短裤，粉色凉鞋，红色机械右臂`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Kyoko Tanaami from Cyberpunk Edgerunners 2, extremely short woman, black hair slicked back into a ponytail, red cybernetic eyes behind octagonal glasses, gray partial faceplate running down the center of her face to her upper lip with stitch-like seams, toothy grin with small fangs, green shirt, khaki green shorts, pink sandals, red cybernetic right arm`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的京子，个子非常矮小的女性，黑发向后梳成马尾，八角形眼镜后是红色义眼，脸中间到上唇一块灰色局部面甲带缝合接缝，咧嘴露出小尖牙，绿色衬衫，卡其绿短裤，粉色凉鞋，红色机械右臂`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Kyoko Tanaami, extremely short woman, black hair slicked back into a ponytail, red cybernetic eyes behind octagonal glasses, gray partial faceplate running down the center of her face to her upper lip with stitch-like seams, toothy grin with small fangs, green shirt, khaki green shorts, pink sandals, red cybernetic right arm, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，京子，个子非常矮小的女性，黑发向后梳成马尾，八角形眼镜后是红色义眼，脸中间到上唇一块灰色局部面甲带缝合接缝，咧嘴露出小尖牙，绿色衬衫，卡其绿短裤，粉色凉鞋，红色机械右臂，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/e/e5/Kyoko_Infobox_CPEDGEII.png/revision/latest?cb=20261022092755)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/2/2d/Kyoko_01_CPEDGEII.png/revision/latest?cb=20261023044804)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/67/Kyoko_02_CPEDGEII.png/revision/latest?cb=20261023050951)

### 奥米（Omi）
- 身份：Nomad（Snake Nation）
- 阶层穿搭：熵主义
- 体型：年轻女性，健壮有曲线；身上有和 D 类似的烧伤疤痕。
- 面部与发型：深绿色狼尾发，蓬乱、从帽子下面炸开；义眼外圈蓝色、内圈紫色，横向瞳孔；脸颊上有粉色斜条疤痕或纹路。
- 服装：蓝色鸭舌帽带红白条纹；蓝色无袖高领拉链背心配粉色背带；宽松裤子；黄白色高帮鞋；双臂是深色大猩猩手臂。
- 义体：大猩猩手臂 / 超大型义臂、Kiroshi 义眼、机械腿
- 剪影要点：蓝色鸭舌帽下炸开的绿色乱发，粉色背带，粗壮的深色机械臂。
- 配色：`#3E5A1E` `#2F4FA0` `#FF5FA2` `#E8213F` `#F2D23A`
- 角色描述（英，不含画风）：`Omi from Cyberpunk Edgerunners 2, young athletic woman, messy dark green wolf-cut hair bursting out from under a blue baseball cap with red and white stripes, cyber eyes with blue outer and purple inner irises and horizontal pupils, pink slash marks on her cheek, sleeveless blue high-zip vest with a pink harness, baggy pants, yellow and white high-top sneakers, dark chunky gorilla cyberarms`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的奥米，健壮的年轻女性，深绿色蓬乱狼尾发从蓝色鸭舌帽下炸开、帽子有红白条纹，义眼外圈蓝内圈紫、横向瞳孔，脸颊粉色斜条疤痕，蓝色无袖高领拉链背心配粉色背带，宽松裤子，黄白色高帮鞋，粗壮的深色大猩猩手臂`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Omi from Cyberpunk Edgerunners 2, young athletic woman, messy dark green wolf-cut hair bursting out from under a blue baseball cap with red and white stripes, cyber eyes with blue outer and purple inner irises and horizontal pupils, pink slash marks on her cheek, sleeveless blue high-zip vest with a pink harness, baggy pants, yellow and white high-top sneakers, dark chunky gorilla cyberarms`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的奥米，健壮的年轻女性，深绿色蓬乱狼尾发从蓝色鸭舌帽下炸开、帽子有红白条纹，义眼外圈蓝内圈紫、横向瞳孔，脸颊粉色斜条疤痕，蓝色无袖高领拉链背心配粉色背带，宽松裤子，黄白色高帮鞋，粗壮的深色大猩猩手臂`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Omi, young athletic woman, messy dark green wolf-cut hair bursting out from under a blue baseball cap with red and white stripes, cyber eyes with blue outer and purple inner irises and horizontal pupils, pink slash marks on her cheek, sleeveless blue high-zip vest with a pink harness, baggy pants, yellow and white high-top sneakers, dark chunky gorilla cyberarms, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，奥米，健壮的年轻女性，深绿色蓬乱狼尾发从蓝色鸭舌帽下炸开、帽子有红白条纹，义眼外圈蓝内圈紫、横向瞳孔，脸颊粉色斜条疤痕，蓝色无袖高领拉链背心配粉色背带，宽松裤子，黄白色高帮鞋，粗壮的深色大猩猩手臂，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/a/ae/Omi_Infobox_CPEDGEII.png/revision/latest?cb=20261022092757)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/0/0b/Omi_01_CPEDGEII.png/revision/latest?cb=20261022001148)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/9/9c/Omi_02_CPEDGEII.png/revision/latest?cb=20261022001215)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/74/Omi_03_CPEDGEII.png/revision/latest?cb=20261022001245)

### 尤皮（Yupi）
- 身份：跟随 D 的年轻女性
- 阶层穿搭：新媚俗
- 体型：中等身高，纤细。
- 面部与发型：浅柠檬绿色及肩发，发尾渐变成青绿色；蓝眼睛、下方带一点绿；紫色眼影，眼下小点状装饰；额头上推着一副超大的紫色护目镜；黑色颈部义体；长耳坠。
- 服装：新媚俗风格：薰衣草紫色交叉绑带的吊带短上衣，粉色和紫色的迷你裙和腰包；银色首饰（项链、手链、耳环、戒指、肚脐钉）；紫色指甲。
- 义体：神经端口 / 个人接口
- 剪影要点：额头上的大号紫色护目镜，柠檬绿渐变青的头发，紫色绑带吊带上衣。
- 配色：`#D6F27A` `#4FD1C5` `#B48CF2` `#FF8FC8` `#C0C6D0`
- 角色描述（英，不含画风）：`Yupi from Cyberpunk Edgerunners 2, slim young woman, shoulder-length light lime-green hair fading to teal at the ends, blue eyes with a hint of green, purple eyeshadow with small dot accents under the eyes, oversized purple goggles pushed up on her forehead, black cyber choker, long earrings, lavender criss-cross strappy crop tank top, pink and purple miniskirt with a belt pouch, silver jewelry, purple fingernails`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的尤皮，纤细年轻女性，浅柠檬绿及肩发、发尾渐变青绿，蓝眼睛带一点绿，紫色眼影和眼下小点装饰，额头上推着超大紫色护目镜，黑色颈部义体，长耳坠，薰衣草紫交叉绑带吊带短上衣，粉紫迷你裙配腰包，银色首饰，紫色指甲`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Yupi from Cyberpunk Edgerunners 2, slim young woman, shoulder-length light lime-green hair fading to teal at the ends, blue eyes with a hint of green, purple eyeshadow with small dot accents under the eyes, oversized purple goggles pushed up on her forehead, black cyber choker, long earrings, lavender criss-cross strappy crop tank top, pink and purple miniskirt with a belt pouch, silver jewelry, purple fingernails`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的尤皮，纤细年轻女性，浅柠檬绿及肩发、发尾渐变青绿，蓝眼睛带一点绿，紫色眼影和眼下小点装饰，额头上推着超大紫色护目镜，黑色颈部义体，长耳坠，薰衣草紫交叉绑带吊带短上衣，粉紫迷你裙配腰包，银色首饰，紫色指甲`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Yupi, slim young woman, shoulder-length light lime-green hair fading to teal at the ends, blue eyes with a hint of green, purple eyeshadow with small dot accents under the eyes, oversized purple goggles pushed up on her forehead, black cyber choker, long earrings, lavender criss-cross strappy crop tank top, pink and purple miniskirt with a belt pouch, silver jewelry, purple fingernails, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，尤皮，纤细年轻女性，浅柠檬绿及肩发、发尾渐变青绿，蓝眼睛带一点绿，紫色眼影和眼下小点装饰，额头上推着超大紫色护目镜，黑色颈部义体，长耳坠，薰衣草紫交叉绑带吊带短上衣，粉紫迷你裙配腰包，银色首饰，紫色指甲，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/b/b7/Yupi_Infobox_CPEDGEII.png/revision/latest?cb=20261022092803)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/c/cc/Yupi_01_CPEDGEII.png/revision/latest?cb=20261023035712)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/8/85/Yupi_02_CPEDGEII.png/revision/latest?cb=20261023035714)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/7/79/Yupi_03_CPEDGEII.png/revision/latest?cb=20261023035716)

### 梅舒加（Meshuga）
- 身份：Netrunner / 雇佣兵（Team King）
- 阶层穿搭：媚俗
- 体型：高大，身穿宽大衣服。
- 面部与发型：黄绿色寸头和短胡子；红色或绿色眼睛（剧中光线下难辨）；头侧和脸上有金属义体件；鼻梁上贴着胶布。
- 服装：超大号浅蓝色连帽衫和同色宽松裤，里面橙色内衬；脖子上挂多条金链；一只黑色机械手，手腕戴金色手镯。
- 义体：神经端口 / 个人接口、面部 / 身体接缝线、单只义臂
- 剪影要点：宽大的浅蓝色连帽套装，金链，黑色机械手配金手镯。
- 配色：`#4FB3E8` `#F28C1E` `#E2B23A` `#C9E05A` `#1E1F26`
- 注：这个角色也出现在《赛博朋克 2077》游戏里（Wiki 记为 appears_games: 2077），目前只有游戏里的手机联系人头像，已单独标为游戏图。
- 角色描述（英，不含画风）：`Meshuga from Cyberpunk Edgerunners 2, big man, yellow-green buzz cut and short beard, metal implants on the sides of his head and face, tape across his nose, oversized light blue hoodie and matching baggy pants with orange lining, several gold chains, one black cybernetic hand with gold bangles`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的梅舒加，高大男人，黄绿色寸头和短胡子，头侧和脸上有金属义体件，鼻梁贴胶布，超大号浅蓝色连帽衫和同色宽松裤、橙色内衬，多条金链，一只黑色机械手戴金手镯`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Meshuga from Cyberpunk Edgerunners 2, big man, yellow-green buzz cut and short beard, metal implants on the sides of his head and face, tape across his nose, oversized light blue hoodie and matching baggy pants with orange lining, several gold chains, one black cybernetic hand with gold bangles`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的梅舒加，高大男人，黄绿色寸头和短胡子，头侧和脸上有金属义体件，鼻梁贴胶布，超大号浅蓝色连帽衫和同色宽松裤、橙色内衬，多条金链，一只黑色机械手戴金手镯`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Meshuga, big man, yellow-green buzz cut and short beard, metal implants on the sides of his head and face, tape across his nose, oversized light blue hoodie and matching baggy pants with orange lining, several gold chains, one black cybernetic hand with gold bangles, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，梅舒加，高大男人，黄绿色寸头和短胡子，头侧和脸上有金属义体件，鼻梁贴胶布，超大号浅蓝色连帽衫和同色宽松裤、橙色内衬，多条金链，一只黑色机械手戴金手镯，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/9/9e/Meshuga_01_CPEDGEII.png/revision/latest?cb=20261022045525)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/0/08/Meshuga_02_CPEDGEII.png/revision/latest?cb=20261022045559)
  - [剧中截图 · 团队（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/9/9b/Team_King_CPEDGEII.png/revision/latest?cb=20261009162817)
  - [游戏手机联系人头像（CP2077）（游戏）](https://static.wikia.nocookie.net/cyberpunk/images/5/56/Meshuga_Phone_Avatar_CP2077.png/revision/latest?cb=20261111075852)

### 卡普里（Capri）
- 身份：人格构造体（AI），由 Kyoko 创造，存在于一块芯片里
- 阶层穿搭：媚俗
- 体型：没有实体，只对当前宿主投影出来：纤细的黑色剪影女性身体，带绿色几何贴花。
- 面部与发型：夸张的洋红色碎片状大发型（Wiki 写的是粉色、发梢绿色）；蓝眼睛、白色瞳孔、黑色眼白外圈绿色，眼睛被框在绿色方框里。
- 服装：没有服装，身体本身就是黑色加洋红、绿色的平面图形；载体是一块红色芯片，上面有绿色电路纹。
- 义体：人格构造体投影
- 剪影要点：黑色剪影身体顶着一大团洋红色锯齿状头发，眼睛在绿色方框里。
- 配色：`#E8213F` `#FF3FA4` `#111111` `#2BE07A` `#3D8BFF`
- 角色描述（英，不含画风）：`Capri from Cyberpunk Edgerunners 2, glitchy holographic AI construct, lean black silhouette feminine body with green geometric decals, huge jagged magenta-pink hair with green tips, blue eyes with white pupils and green-ringed black sclera boxed in green rectangles, flat graphic style`
- 角色描述（中，不含画风）：`赛博朋克边缘行者第二季的卡普里，故障感全息 AI 人格构造体，纤细的黑色剪影女性身体带绿色几何贴花，巨大的洋红色锯齿状头发、发梢绿色，蓝眼睛白瞳孔、黑眼白外圈绿色、框在绿色方框里，平面图形风格`
- **第二季动画提示词**
  - EN：`Cyberpunk Edgerunners 2 anime screencap, 1980s-1990s anime homage, retro cel look, clean thin lineart, flat cel shading with hard-edged shadows, natural skin tones, harsh glaring light, sun flare and bloom, fine film grain and floating dust specks, highly detailed realistic painted background, neon only as local accents, Capri from Cyberpunk Edgerunners 2, glitchy holographic AI construct, lean black silhouette feminine body with green geometric decals, huge jagged magenta-pink hair with green tips, blue eyes with white pupils and green-ringed black sclera boxed in green rectangles, flat graphic style`
  - 中：`赛博朋克边缘行者第二季动画截图，致敬 80–90 年代老动画，复古赛璐璐质感，干净的细线，平涂加硬边阴影，自然肤色，刺眼的强光，太阳眩光和光晕，细胶片颗粒和漂浮的尘粒，细节丰富、偏写实的绘制背景，霓虹只做局部点缀，赛博朋克边缘行者第二季的卡普里，故障感全息 AI 人格构造体，纤细的黑色剪影女性身体带绿色几何贴花，巨大的洋红色锯齿状头发、发梢绿色，蓝眼睛白瞳孔、黑眼白外圈绿色、框在绿色方框里，平面图形风格`
  - 负面词：`photorealistic, 3D render, PBR, ray tracing, video game screenshot, Edgerunners season 1 style, thick variable-weight lineart, whole-frame single neon color wash on every scene` / `写实照片，三维渲染，PBR 材质，光线追踪，游戏截图，边缘行者第一季画风，粗细变化很大的粗线条，每个场景都整画面单一霓虹色染色`
- **游戏（CP2077）提示词**
  - EN：`Cyberpunk 2077 game screenshot, photorealistic 3D render, physically based lighting, ray traced reflections, volumetric fog, PBR materials, high detail textures, realistic proportions, cinematic composition, Night City, Capri, glitchy holographic AI construct, lean black silhouette feminine body with green geometric decals, huge jagged magenta-pink hair with green tips, blue eyes with white pupils and green-ringed black sclera boxed in green rectangles, flat graphic style, realistic proportions, detailed skin pores, real fabric and leather textures, cyberware with visible screws, panel seams and brand markings, worn metal`
  - 中：`赛博朋克 2077 游戏截图，写实 3D 渲染，物理正确的光照，光线追踪反射，体积雾，PBR 材质，高细节贴图，写实比例，电影感构图，夜之城，卡普里，故障感全息 AI 人格构造体，纤细的黑色剪影女性身体带绿色几何贴花，巨大的洋红色锯齿状头发、发梢绿色，蓝眼睛白瞳孔、黑眼白外圈绿色、框在绿色方框里，平面图形风格，写实比例，皮肤毛孔细节，真实的布料和皮革纹理，义体上有螺丝、面板接缝和品牌标志，金属磨损`
  - 负面词：`anime, cel shading, flat colors, thick outlines, cartoon, 2D illustration, manga` / `动漫，赛璐璐，平涂，粗描边，卡通，二维插画，漫画`
- 参考图：
  - [定妆图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/14/Capri_Infobox_CPEDGEII.png/revision/latest?cb=20261020221606)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/1/19/Capri_01_CPEDGEII.png/revision/latest?cb=20261020221500)
  - [剧中截图（第二季动画）](https://static.wikia.nocookie.net/cyberpunk/images/6/63/Capri_02_CPEDGEII.png/revision/latest?cb=20261020200625)

## 提示词模板
- **character_sheet**
  - EN：`{style_keywords}, character reference sheet, full body front view, side view and back view, {character_prompt}, cyberware details: {cyberware_prompts}, plain flat background`
  - 中：`{画风关键词}，角色三视图，全身正面、侧面、背面，{角色描述}，义体细节：{义体描述}，纯色平涂背景`
- **promo_portrait**
  - EN：`{style_keywords}, half-body portrait looking at viewer, flat solid yellow background, {character_prompt}`
  - 中：`{画风关键词}，半身像看向镜头，纯黄色平涂背景，{角色描述}`
- **action_shot**
  - EN：`{style_keywords}, dynamic action shot, extreme foreshortening, speed lines, {character_prompt}, activating {hero_cyberware}, neon night city street, rain`
  - 中：`{画风关键词}，动态动作镜头，极端透视，速度线，{角色描述}，正在启动{主义体}，霓虹夜之城街道，雨夜`

## 原创角色生成步骤
- 1 定身份：Solo / Netrunner / Techie / 车手 / Fixer / 公司人 / 游牧民
- 2 定阶层穿搭：从 class_styles 选一个，决定衣服材质和义体是外露还是隐藏
- 3 选一个主义体：它决定剪影（如超大义臂、护目镜、面罩、斯安威斯坦残影）
- 4 再选 2–3 个辅助义体：接缝线、义眼、神经端口、光纹身等
- 5 定撞色：一个主色加一个霓虹对比色，参考 characters[].colors
- 6 定改造程度：轻度只在关节和眼睛 → 中度有接缝线 → 重度体型改变 → 赛博精神病（眼睛失焦、义体失控、全身血红色调）
- 7 套 prompt_templates，先出三视图，确认后再出动作图
- 剪影规则：每个主要角色都要一眼认出：至少有一个头部特征（发型、面罩、护目镜）加一个身体特征（义臂、外套、义腿）。
- 配色规则：每个角色限 2 个主色加 1 个霓虹点缀色；暗部用蓝紫色而不是灰色。
