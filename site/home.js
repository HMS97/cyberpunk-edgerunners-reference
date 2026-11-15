(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, root = document.getElementById('root');
  var D = {};
  var STYLE_KEYS = ['game', 'anime', 'anime_s2'];
  var STYLE_ZH = { game: '游戏风', anime: '第一季动画', anime_s2: '第二季动画' };

  /* 交错取两季条目：S1, S2, S1, S2… */
  function interleave(list, n) {
    var a = list.filter(function (c) { return c.season === 1; }), b = list.filter(function (c) { return c.season === 2; });
    var out = [];
    for (var i = 0; out.length < n && (i < a.length || i < b.length); i++) {
      if (a[i]) out.push(a[i]);
      if (b[i] && out.length < n) out.push(b[i]);
    }
    return out;
  }
  function animeImage(c) {
    var a = arr(c.images).filter(function (im) { return im.style !== 'game'; })[0];
    return a || arr(c.images)[0];
  }
  /* 预览缩略图链接：固定比例盒子，图片 cover */
  function tlink(href, src, alt, opts) {
    opts = opts || {};
    return h('a', { class: 'pv' + (opts.cls ? ' ' + opts.cls : ''), href: href, title: alt, 'aria-label': alt },
      KB.img(src, '', null), opts.badge ? KB.badge(opts.badge) : null, opts.label ? h('span', { class: 'pv-l' }, opts.label) : null);
  }
  function eager(node) { node.querySelectorAll('img').forEach(function (i) { i.loading = 'eager'; i.setAttribute('fetchpriority', 'high'); }); return node; }

  function hero(chars) {
    var sheets = interleave(chars, 6);
    var collage = h('div', { class: 'collage', 'aria-label': '角色设定图拼贴' }, sheets.map(function (c, i) {
      return h('a', { class: 'sheet s' + i, href: 'characters.html#' + encodeURIComponent(c.id), 'aria-label': c.name_zh + ' 设定图' },
        KB.img('../character_sheets/' + encodeURIComponent(c.id) + '_sheet.png', c.name_zh + ' 角色设定图'),
        h('span', { class: 'sheet-n' }, String(c.name_zh || c.id).replace(/（.*$/, ''), ' ', h('span', { class: 'badge ' + (c.season === 2 ? 'anime_s2' : 'anime') }, c.season === 2 ? 'S2' : 'S1')));
    }));
    return h('div', { class: 'home-hero' },
      h('div', { class: 'home-hero-t' },
        h('span', { class: 'kicker' }, 'EDGERUNNERS · REFERENCE KB'),
        h('h1', null, '边缘行者知识库'),
        h('p', { class: 'lede' }, '给画师和 AI 出图用的《赛博朋克：边缘行者》设计参考：第一、二季角色设定、场景地点、三套画风和义体外形，全部配好分风格提示词与负面词。'),
        h('p', { class: 'note' }, '顶部的「季」和「风格」开关在所有页面通用：决定显示哪些条目、先显示哪种画风的图、复制哪一套提示词。'),
        h('p', { class: 'muted', style: { 'font-size': '12.5px' } }, '拼贴图为角色设定图 · AI 生成（gpt-image-2.6-sunburst）')),
      eager(collage));
  }

  function card(o) {
    return h('article', { class: 'homecard', style: { '--c': o.color } },
      h('div', { class: 'homecard-h' },
        h('div', null, h('div', { class: 'num' }, String(o.n)), h('h3', null, o.title)),
        h('a', { class: 'go', href: o.href }, '进入' + o.short + ' →')),
      h('p', { class: 'd' }, o.desc),
      o.preview);
  }

  function render() {
    var chars = arr(D.c.characters).filter(function (c) { return KB.seasonOk(c.season); });
    var s1 = KB.seasonOk(1), s2 = KB.seasonOk(2);
    var l1 = s1 ? arr(D.s1.locations) : [], l2 = s2 ? arr(D.s2.locations) : [];
    var epN = (s1 ? arr(D.s1.episodes).length : 0) + (s2 ? arr(D.s2.episodes).length : 0);
    var secs = arr(D.ic.sections);
    var icons = secs.reduce(function (n, s) { return n + arr(s.items).length; }, 0);
    var seasonTxt = KB.state.season === 'all' ? '第一、二季' : (KB.state.season === '1' ? '第一季' : '第二季');
    var G = D.g || {};

    root.textContent = '';
    root.appendChild(hero(chars));

    /* --- 四个分区 --- */
    var styleTri = h('div', { class: 'pv-grid tri' }, STYLE_KEYS.map(function (k) {
      var r = arr(G[k] && G[k].refs)[0];
      return tlink('styles.html', KB.imgSrc(r, 'thumb'), STYLE_ZH[k] + '参考图', { badge: k });
    }));
    var portraits = interleave(chars, 6);
    var charPv = h('div', { class: 'pv-grid six' }, portraits.map(function (c) {
      return tlink('characters.html#' + encodeURIComponent(c.id), KB.imgSrc(animeImage(c), 'thumb'), c.name_zh, { cls: 'portrait', label: c.name_zh });
    }));
    var locPick = [];
    function withImg(l) { return arr(l.images).some(function (im) { return im.style !== 'game'; }); }
    var a1 = l1.filter(withImg), a2 = l2.filter(withImg);
    if (s1 && s2) locPick = [[a1[1] || a1[0], 1], [a2[2] || a2[0], 2], [a1[2] || a1[0], 1]];
    else if (s1) locPick = [[a1[1], 1], [a1[4], 1], [a1[7], 1]];
    else locPick = [[a2[2], 2], [a2[4], 2], [a2[8], 2]];
    var scenePv = h('div', { class: 'pv-grid tri' }, locPick.filter(function (x) { return x[0]; }).map(function (x) {
      var l = x[0], im = arr(l.images).filter(function (i) { return i.style !== 'game'; })[0];
      return tlink('scenes.html#s' + x[1] + '-' + encodeURIComponent(l.id), KB.imgSrc(im, 'thumb'), l.zh, { badge: im.style, label: l.zh });
    }));
    var iconPick = [];
    secs.forEach(function (s) { var it = arr(s.items).filter(function (i) { return isStr(i.img); })[0]; if (it && iconPick.length < 8) iconPick.push(it); });
    var cwPv = h('div', { class: 'pv-grid icons' }, iconPick.map(function (it) {
      return tlink('cyberware.html#icons', KB.local(it.img), it.t, { cls: 'ic' });
    }));

    var sec = KB.section('sections', '四个分区', 'Sections');
    sec.appendChild(h('div', { class: 'grid cols2 home-cards' },
      card({ href: 'styles.html', color: 'var(--paper)', n: 3, title: '套画风', short: '画风', desc: '游戏风、第一季动画、第二季动画的规范、关键词、负面词、对比表和互转规则。', preview: styleTri }),
      card({ href: 'characters.html', color: 'var(--pink)', n: chars.length, title: '位角色', short: '角色', desc: seasonTxt + '主要角色：设定图、图集、义体、配色和分风格提示词。', preview: charPv }),
      card({ href: 'scenes.html', color: 'var(--yel)', n: l1.length + l2.length, title: '个场景地点', short: '场景', desc: '另有 ' + arr(D.s1.districts).length + ' 个夜之城大区、' + epN + ' 集剧集资料与场景生成模板。', preview: scenePv }),
      card({ href: 'cyberware.html', color: 'var(--cyan)', n: icons, title: '个义体图标', short: '义体', desc: arr(D.c.cyberware_vocab).length + ' 条义体外形词典 + ' + secs.length + ' 类《赛博朋克 2077》义体图标。', preview: cwPv })));
    root.appendChild(sec);

    /* --- 画风一览 --- */
    var band = KB.section('style-band', '画风一览', 'Three styles');
    band.appendChild(h('p', { class: 'note' }, '三套画风不能混用。没有同一主体的三风格对照图，下面各取两张该风格的参考图。'));
    band.appendChild(h('div', { class: 'grid cols3' }, STYLE_KEYS.map(function (k) {
      var s = G[k] || {};
      var refs = arr(s.refs).slice(0, 2);
      var cur = KB.state.style === 'game' ? k === 'game' : (k !== 'game' && (KB.state.season === 'all' || (KB.state.season === '1') === (k === 'anime')));
      return h('article', { class: 'panel accent-' + (k === 'game' ? 'cyan' : k === 'anime' ? 'pink' : 'yel') },
        h('div', { class: 'row', style: { 'justify-content': 'space-between' } }, KB.badge(k), cur ? h('span', { class: 'tag', style: { color: 'var(--yel)', 'border-color': 'var(--yel)' } }, '当前风格') : null),
        h('h3', { style: { margin: '10px 0 6px' } }, s.name || STYLE_ZH[k]),
        isStr(s.one_line) ? h('p', { style: { 'font-size': '14px', color: 'var(--mute2)' } }, s.one_line) : null,
        h('div', { class: 'pv-grid two' }, refs.map(function (r) { return tlink('styles.html', KB.imgSrc(r, 'thumb'), r.label || STYLE_ZH[k], { label: r.label }); })),
        h('a', { href: 'styles.html', style: { display: 'inline-block', 'margin-top': '10px', 'font-size': '14px' } }, '看完整规范 →'));
    })));
    root.appendChild(band);

    /* --- 怎么用 --- */
    var how = KB.section('howto', '怎么用', 'How to');
    how.appendChild(h('ol', { class: 'steps' },
      h('li', null, '在顶栏选好「风格」：动画（第一季条目用第一季动画，第二季条目用第二季动画）或游戏（赛博朋克 2077 写实风）。需要时再用「季」筛选。'),
      h('li', null, '去「画风」页看这一套的关键词、负面词和参考图，确认不要和另一套混用。'),
      h('li', null, '在「角色」或「场景」页选一个条目，提示词面板会自动切到当前风格对应的那一套。'),
      h('li', null, '点「复制」拿到 EN 或中文提示词，再复制同一套的负面词一起使用。原创角色用角色页底部的「原创角色生成」模板。')));
    root.appendChild(how);

    /* --- 下载数据 --- */
    var dl = KB.section('download', '下载数据', 'Data files');
    var files = [
      ['edgerunners_character_kb.json', '角色知识库（JSON）'], ['edgerunners_character_kb.md', '角色知识库（Markdown）'],
      ['edgerunners_scene_kb.json', '第一季场景知识库（JSON）'], ['edgerunners_scene_kb.md', '第一季场景知识库（Markdown）'],
      ['edgerunners_s2_scene_kb.json', '第二季场景知识库（JSON）'], ['edgerunners_s2_scene_kb.md', '第二季场景知识库（Markdown）'],
      ['style_guides.json', '画风规范（JSON）'], ['style_guides.md', '画风规范（Markdown）'],
      ['cyberware_icons.json', '游戏义体图标索引（JSON）']];
    dl.appendChild(h('p', { class: 'note' }, '原始数据文件。JSON 里的图片地址是 Wiki 链接，本站通过 assets/manifest.json 映射到本地副本。'));
    dl.appendChild(h('ul', { class: 'grid files' }, files.map(function (f) {
      return h('li', { class: 'panel' }, h('a', { href: '../' + f[0], download: '' }, f[0]), h('div', { class: 'muted', style: { 'font-size': '13px' } }, f[1]));
    })));
    root.appendChild(dl);
  }

  KB.ready.then(function () {
    return Promise.all([KB.load('edgerunners_character_kb.json'), KB.load('edgerunners_scene_kb.json'), KB.load('edgerunners_s2_scene_kb.json').catch(function () { return {}; }), KB.load('cyberware_icons.json'), KB.load('style_guides.json').catch(function () { return {}; })]);
  }).then(function (r) {
    D = { c: r[0], s1: r[1], s2: r[2], ic: r[3], g: r[4] };
    render();
    KB.onChange(function () { var y = window.scrollY; render(); window.scrollTo(0, y); });
  }).catch(function (e) { KB.fail(root, e); });
})();
