(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, t = KB.t, tr = KB.tr, root = document.getElementById('root');
  var D = {};
  var STYLE_KEYS = ['game', 'anime', 'anime_s2'];
  function styName(k) { return t('sty.' + k); }

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
    var collage = h('div', { class: 'collage', 'aria-label': t('home.collage') }, sheets.map(function (c, i) {
      var nm = KB.cname(c);
      return h('a', { class: 'sheet s' + i, href: 'characters.html#' + encodeURIComponent(c.id), 'aria-label': t('home.sheetAria', { name: nm }) },
        KB.img('../character_sheets/' + encodeURIComponent(c.id) + '_sheet.png', t('home.sheetAlt', { name: nm })),
        h('span', { class: 'sheet-n' }, String(nm).replace(/[（(].*$/, '').trim(), ' ', h('span', { class: 'badge ' + (c.season === 2 ? 'anime_s2' : 'anime') }, c.season === 2 ? 'S2' : 'S1')));
    }));
    return h('div', { class: 'home-hero' },
      h('div', { class: 'home-hero-t' },
        h('span', { class: 'kicker' }, 'EDGERUNNERS · REFERENCE KB'),
        h('h1', null, t('home.title')),
        h('p', { class: 'lede' }, t('home.lede')),
        h('p', { class: 'note' }, t('home.note')),
        h('p', { class: 'muted', style: { 'font-size': '12.5px' } }, t('home.collageCap'))),
      eager(collage));
  }

  function card(o) {
    return h('article', { class: 'homecard', style: { '--c': o.color } },
      h('div', { class: 'homecard-h' },
        h('div', null, h('div', { class: 'num' }, String(o.n)), h('h3', null, o.title)),
        h('a', { class: 'go', href: o.href }, t('home.go', { x: o.short }))),
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
    var seasonTxt = KB.state.season === 'all' ? t('home.seasonAll') : (KB.state.season === '1' ? t('home.season1') : t('home.season2'));
    var G = D.g || {};

    root.textContent = '';
    root.appendChild(hero(chars));

    /* --- 四个分区 --- */
    var styleTri = h('div', { class: 'pv-grid tri' }, STYLE_KEYS.map(function (k) {
      var r = arr(G[k] && G[k].refs)[0];
      return tlink('styles.html', KB.imgSrc(r, 'thumb'), t('home.refAlt', { x: styName(k) }), { badge: k });
    }));
    var portraits = interleave(chars, 6);
    var charPv = h('div', { class: 'pv-grid six' }, portraits.map(function (c) {
      return tlink('characters.html#' + encodeURIComponent(c.id), KB.imgSrc(animeImage(c), 'thumb'), KB.cname(c), { cls: 'portrait', label: KB.cname(c) });
    }));
    var locPick = [];
    function withImg(l) { return arr(l.images).some(function (im) { return im.style !== 'game'; }); }
    var a1 = l1.filter(withImg), a2 = l2.filter(withImg);
    if (s1 && s2) locPick = [[a1[1] || a1[0], 1], [a2[2] || a2[0], 2], [a1[2] || a1[0], 1]];
    else if (s1) locPick = [[a1[1], 1], [a1[4], 1], [a1[7], 1]];
    else locPick = [[a2[2], 2], [a2[4], 2], [a2[8], 2]];
    var scenePv = h('div', { class: 'pv-grid tri' }, locPick.filter(function (x) { return x[0]; }).map(function (x) {
      var l = x[0], im = arr(l.images).filter(function (i) { return i.style !== 'game'; })[0];
      return tlink('scenes.html#s' + x[1] + '-' + encodeURIComponent(l.id), KB.imgSrc(im, 'thumb'), KB.zhen(l), { badge: im.style, label: KB.zhen(l) });
    }));
    var iconPick = [];
    secs.forEach(function (s) { var it = arr(s.items).filter(function (i) { return isStr(i.img); })[0]; if (it && iconPick.length < 8) iconPick.push(it); });
    var cwPv = h('div', { class: 'pv-grid icons' }, iconPick.map(function (it) {
      return tlink('cyberware.html#icons', KB.local(it.img), tr(it.t), { cls: 'ic' });
    }));

    var A = D.a || {};
    var moves = STYLE_KEYS.reduce(function (n, k) { return n + arr(A[k] && A[k].ability_moves).length; }, 0);
    var actPv = h('div', { class: 'pv-grid tri' }, STYLE_KEYS.map(function (k) {
      var r = arr(A[k] && A[k].refs).filter(function (x) { return isStr(x.thumb_local); })[0];
      return r ? tlink('actions.html#' + k, KB.local(r.thumb_local), tr(r.label) || styName(k), { badge: k }) : null;
    }));

    var sec = KB.section('sections', t('home.sections'), 'Sections');
    sec.appendChild(h('div', { class: 'grid home-cards five' },
      card({ href: 'styles.html', color: 'var(--paper)', n: 3, title: t('home.c1.title'), short: t('nav.styles'), desc: t('home.c1.desc'), preview: styleTri }),
      card({ href: 'actions.html', color: 'var(--pink-d)', n: moves, title: t('home.c5.title'), short: t('nav.actions'), desc: t('home.c5.desc'), preview: actPv }),
      card({ href: 'characters.html', color: 'var(--pink)', n: chars.length, title: t('home.c2.title'), short: t('nav.characters'), desc: t('home.c2.desc', { season: seasonTxt }), preview: charPv }),
      card({ href: 'scenes.html', color: 'var(--yel)', n: l1.length + l2.length, title: t('home.c3.title'), short: t('nav.scenes'), desc: t('home.c3.desc', { d: arr(D.s1.districts).length, e: epN }), preview: scenePv }),
      card({ href: 'cyberware.html', color: 'var(--cyan)', n: icons, title: t('home.c4.title'), short: t('nav.cyberware'), desc: t('home.c4.desc', { v: arr(D.c.cyberware_vocab).length, s: secs.length }), preview: cwPv })));
    root.appendChild(sec);

    /* --- 画风一览 --- */
    var band = KB.section('style-band', t('home.band'), 'Three styles');
    band.appendChild(h('p', { class: 'note' }, t('home.bandNote')));
    band.appendChild(h('div', { class: 'grid cols3' }, STYLE_KEYS.map(function (k) {
      var s = G[k] || {};
      var refs = arr(s.refs).slice(0, 2);
      var cur = KB.state.style === 'game' ? k === 'game' : (k !== 'game' && (KB.state.season === 'all' || (KB.state.season === '1') === (k === 'anime')));
      return h('article', { class: 'panel accent-' + (k === 'game' ? 'cyan' : k === 'anime' ? 'pink' : 'yel') },
        h('div', { class: 'row', style: { 'justify-content': 'space-between' } }, KB.badge(k), cur ? h('span', { class: 'tag', style: { color: 'var(--yel)', 'border-color': 'var(--yel)' } }, t('cur.style')) : null),
        h('h3', { style: { margin: '10px 0 6px' } }, tr(s.name) || styName(k)),
        isStr(s.one_line) ? h('p', { style: { 'font-size': '14px', color: 'var(--mute2)' } }, tr(s.one_line)) : null,
        h('div', { class: 'pv-grid two' }, refs.map(function (r) { return tlink('styles.html', KB.imgSrc(r, 'thumb'), tr(r.label) || styName(k), { label: tr(r.label) }); })),
        h('a', { href: 'styles.html', style: { display: 'inline-block', 'margin-top': '10px', 'font-size': '14px' } }, t('home.fullSpec')));
    })));
    root.appendChild(band);

    /* --- 怎么用 --- */
    var how = KB.section('howto', t('home.how'), 'How to');
    how.appendChild(h('ol', { class: 'steps' },
      h('li', null, t('home.how1')), h('li', null, t('home.how2')), h('li', null, t('home.how3')), h('li', null, t('home.how4'))));
    root.appendChild(how);

    /* --- 下载数据 --- */
    var dl = KB.section('download', t('home.dl'), 'Data files');
    var files = [
      ['edgerunners_character_kb.json', t('file.charJson')], ['edgerunners_character_kb.md', t('file.charMd')],
      ['edgerunners_scene_kb.json', t('file.s1Json')], ['edgerunners_scene_kb.md', t('file.s1Md')],
      ['edgerunners_s2_scene_kb.json', t('file.s2Json')], ['edgerunners_s2_scene_kb.md', t('file.s2Md')],
      ['style_guides.json', t('file.styJson')], ['style_guides.md', t('file.styMd')],
      ['cyberware_icons.json', t('file.icJson')]];
    dl.appendChild(h('p', { class: 'note' }, t('home.dlNote')));
    dl.appendChild(h('ul', { class: 'grid files' }, files.map(function (f) {
      return h('li', { class: 'panel' }, h('a', { href: '../' + f[0], download: '' }, f[0]), h('div', { class: 'muted', style: { 'font-size': '13px' } }, f[1]));
    })));
    root.appendChild(dl);
  }

  KB.ready.then(function () {
    return Promise.all([KB.load('edgerunners_character_kb.json'), KB.load('edgerunners_scene_kb.json'), KB.load('edgerunners_s2_scene_kb.json').catch(function () { return {}; }), KB.load('cyberware_icons.json'), KB.load('style_guides.json').catch(function () { return {}; }), KB.load('action_style_guides.json').catch(function () { return {}; })]);
  }).then(function (r) {
    D = { c: r[0], s1: r[1], s2: r[2], ic: r[3], g: r[4], a: r[5] || {} };
    render();
    KB.onChange(function () { var y = window.scrollY; render(); window.scrollTo(0, y); });
  }).catch(function (e) { KB.fail(root, e); });
})();
