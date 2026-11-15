(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, t = KB.t, tr = KB.tr, root = document.getElementById('root');
  var C, VOCAB = {}, CLASS = {}, BYID = {};
  var ARCS = ['early', 'mid', 'late', 'final'];
  function seasonName(s) { return s === 1 || s === 2 ? t('ch.season' + s) : ''; }
  function arcName(k) { return ARCS.indexOf(k) >= 0 ? t('arc.' + k) : k; }
  var nm = KB.cname;

  function sheetSrc(id) { return '../character_sheets/' + encodeURIComponent(id) + '_sheet.png'; }
  function firstImage(c) { return KB.sortImages(c.images)[0]; }

  /* ---------- grid ---------- */
  function card(c) {
    var im = firstImage(c);
    return h('a', { class: 'navcard', href: '#' + c.id, style: { padding: '0', '--c': c.season === 2 ? 'var(--yel)' : 'var(--pink)' } },
      h('div', { class: 'thumb', style: { 'aspect-ratio': '1/1', border: '0' } }, KB.img(KB.imgSrc(im, 'thumb'), nm(c)), im ? KB.badge(im.style) : null),
      h('div', { style: { padding: '10px 12px 14px' } },
        h('div', { class: 't', style: { 'font-size': '17px', margin: '0' } }, nm(c)),
        h('div', { class: 'muted', style: { 'font-size': '12.5px', 'font-family': KB.en() ? 'var(--sans)' : 'var(--disp)' } }, KB.cname2(c)),
        h('div', { class: 'd', style: { 'margin-top': '4px' } }, tr(c.role) || '')));
  }

  function renderGrid() {
    root.textContent = '';
    document.title = t('title.characters');
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'CHARACTERS'),
      h('h1', null, t('ch.h1')),
      h('p', { class: 'lede' }, t('ch.lede1'), h('a', { href: 'styles.html' }, t('ch.lede2')), t('ch.lede3'))));
    [1, 2].forEach(function (s) {
      if (!KB.seasonOk(s)) return;
      var list = arr(C.characters).filter(function (c) { return c.season === s; });
      var sec = KB.section('season' + s, t('ch.seasonChars', { s: seasonName(s) }), 'Season ' + s, t('ch.people', { n: list.length }));
      sec.appendChild(h('div', { class: 'grid', style: { 'grid-template-columns': 'repeat(auto-fill,minmax(min(46%,180px),1fr))' } }, list.map(card)));
      root.appendChild(sec);
    });
    root.appendChild(extras());
  }

  /* ---------- extras: vocab link + OC builder ---------- */
  function extras() {
    var wrap = h('section', { class: 'block', id: 'tools' }, KB.secHead(t('ch.tools'), 'Tools'));
    var vocab = arr(C.cyberware_vocab);
    wrap.appendChild(h('details', { class: 'fold' },
      h('summary', null, t('ch.vocab'), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, t('ch.entries', { n: vocab.length }))),
      h('div', { class: 'fold-body' },
        h('p', null, t('ch.vocabNote1'), h('a', { href: 'cyberware.html' }, t('ch.vocabNote2')), t('ch.vocabNote3')),
        h('div', { class: 'chips' }, vocab.map(function (v) { return h('a', { class: 'tag', href: 'cyberware.html#v-' + v.id, title: tr(v.visual) || '' }, KB.nm(v)); })))));

    var oc = C.oc_builder || {};
    var pt = C.prompt_templates || {};
    var TPL = ['character_sheet', 'promo_portrait', 'action_shot'];
    wrap.appendChild(h('details', { class: 'fold' },
      h('summary', null, t('ch.oc')),
      h('div', { class: 'fold-body' },
        arr(oc.steps).length ? h('ol', { class: 'steps' }, oc.steps.map(function (s) { return h('li', null, String(tr(s)).replace(/^\d+[.)]?\s*/, '')); })) : null,
        isStr(oc.silhouette_rule) ? h('p', null, h('b', { style: { color: 'var(--yel)' } }, t('ch.silRule')), tr(oc.silhouette_rule)) : null,
        isStr(oc.color_rule) ? h('p', null, h('b', { style: { color: 'var(--yel)' } }, t('ch.colorRule')), tr(oc.color_rule)) : null,
        arr(C.class_styles).length ? [h('h4', null, t('ch.classStyles')), h('div', { class: 'scroll-x' }, h('table', null,
          h('thead', null, h('tr', null, h('th', null, t('ch.class')), h('th', null, t('ch.who')), h('th', null, t('ch.fashion')))),
          h('tbody', null, C.class_styles.map(function (x) { return h('tr', null, h('th', { scope: 'row' }, KB.nm(x)), h('td', null, tr(x.who) || ''), h('td', null, tr(x.fashion) || '')); }))))] : null,
        h('h4', null, t('ch.templates')),
        h('p', { class: 'muted', style: { 'font-size': '13px' } }, t('ch.tplNote')),
        h('div', { class: 'grid' }, Object.keys(pt).map(function (k) {
          var tp = pt[k] || {};
          return h('div', { class: 'panel' }, h('h3', null, TPL.indexOf(k) >= 0 ? t('tpl.' + k) : k), KB.pbox(t('lbl.en'), tp.en), KB.pbox(t('lbl.zh'), tp.zh));
        })))));
    return wrap;
  }

  /* ---------- detail ---------- */
  function field(label, v) {
    if (!isStr(v)) return null;
    return [h('dt', null, label), h('dd', null, tr(v))];
  }
  function vocabChip(id) {
    var v = VOCAB[id];
    var label = v ? KB.nm(v) : id;
    if (!v) return h('span', { class: 'tag' }, label);
    var pid = 'cw-' + id;
    var b = h('button', { type: 'button', class: 'chip', 'aria-expanded': 'false', 'aria-controls': pid, title: tr(v.visual) || '' }, label);
    b.addEventListener('click', function () {
      var p = document.getElementById(pid);
      var open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (p) p.hidden = !open;
    });
    return b;
  }
  function vocabPanel(id) {
    var v = VOCAB[id]; if (!v) return null;
    return h('div', { id: 'cw-' + id, class: 'panel', hidden: true, style: { 'margin-top': '8px', padding: '12px 14px' } },
      h('b', null, KB.nm(v)), v.slot ? h('span', { class: 'muted' }, '  · ' + tr(v.slot)) : null,
      isStr(v.visual) ? h('p', { style: { margin: '6px 0 0' } }, tr(v.visual)) : null,
      isStr(v.effect_visual) ? h('p', { class: 'muted', style: { margin: '4px 0 0' } }, t('ch.effect') + tr(v.effect_visual)) : null,
      KB.pbox('prompt_en', v.prompt_en),
      h('a', { href: 'cyberware.html#v-' + id, style: { 'font-size': '13px' } }, t('ch.inVocab')));
  }

  function renderDetail(c) {
    root.textContent = '';
    document.title = t('title.character', { name: nm(c) });
    var cls = CLASS[c.class_style];
    var idx = arr(C.characters).indexOf(c);
    var prev = C.characters[idx - 1], next = C.characters[idx + 1];

    root.appendChild(h('nav', { class: 'row', 'aria-label': t('ch.navAria'), style: { 'justify-content': 'space-between', 'margin-top': '6px' } },
      h('a', { href: '#', id: 'back' }, t('ch.back')),
      h('span', { class: 'row' },
        prev ? h('a', { href: '#' + prev.id }, '‹ ' + nm(prev)) : null,
        next ? h('a', { href: '#' + next.id }, nm(next) + ' ›') : null)));

    root.appendChild(h('div', { class: 'hero', style: { 'padding-top': '14px' } },
      h('span', { class: 'kicker' }, seasonName(c.season) + ' · ' + (KB.en() ? (c.name_zh || c.id) : (c.name_en || c.id).toUpperCase())),
      h('h1', { id: 'char-title', tabindex: '-1' }, nm(c)),
      h('p', { class: 'lede' }, [tr(c.role), c.age ? t('ch.age', { x: c.age }) : null].filter(Boolean).join(' · '))));

    /* 设定图 */
    var sheet = sheetSrc(c.id);
    var sheetBtn = h('button', { type: 'button', class: 'thumb contain', style: { 'aspect-ratio': '16/9' }, 'aria-label': t('ch.sheetZoom', { name: nm(c) }) }, KB.img(sheet, t('home.sheetAlt', { name: nm(c) })));
    sheetBtn.addEventListener('click', function () { KB.lightbox({ src: sheet, caption: nm(c) + ' · ' + t('ch.sheetCap') }); });
    var s1 = KB.section('sheet', t('ch.sheet'), 'Design sheet');
    s1.appendChild(h('figure', { style: { margin: '0' } }, sheetBtn, h('figcaption', { class: 'muted', style: { 'font-size': '13px', 'margin-top': '6px' } }, t('ch.sheetCap'))));
    root.appendChild(s1);

    /* 资料 + 义体 + 配色 */
    var info = KB.section('info', t('ch.profile'), 'Profile');
    var arc = c.arc_variants && typeof c.arc_variants === 'object' ? Object.keys(c.arc_variants).map(function (k) { return arcName(k) + t('colon') + tr(c.arc_variants[k]); }).join(KB.en() ? '; ' : '；') : (isStr(c.arc_variants) ? c.arc_variants : null);
    info.appendChild(h('div', { class: 'grid cols2' },
      h('div', { class: 'panel accent-pink' }, h('dl', { class: 'kv' },
        field(t('f.role'), c.role), field(t('f.age'), c.age),
        field(t('f.class'), cls ? (KB.en() ? KB.nm(cls) + ' (' + tr(cls.fashion || '') + ')' : cls.zh + '（' + (cls.fashion || '') + '）') : c.class_style),
        field(t('f.body'), c.body), field(t('f.face'), c.face_hair), field(t('f.outfit'), c.outfit),
        field(t('f.silhouette'), c.silhouette), field(t('f.arc'), arc), field(t('f.note'), c.note))),
      h('div', null,
        h('div', { class: 'panel accent-cyan' },
          h('h3', null, t('ch.cyberware')),
          h('p', { class: 'muted', style: { 'font-size': '13px' } }, t('ch.cwNote')),
          h('div', { class: 'chips' }, arr(c.cyberware).map(vocabChip)),
          h('div', null, arr(c.cyberware).map(vocabPanel)),
          isStr(c.cyberware_raw) ? h('details', { class: 'sub' }, h('summary', null, t('ch.cwRaw')), h('p', { style: { 'margin-top': '6px' } }, tr(c.cyberware_raw))) : null),
        h('div', { class: 'panel accent-yel', style: { 'margin-top': '16px' } }, h('h3', null, t('ch.colors')), KB.swatches(c.colors)))));
    root.appendChild(info);

    /* 提示词 */
    var pr = KB.section('prompts', t('ch.prompts'), 'Prompts');
    pr.appendChild(h('p', { class: 'note' }, t('ch.promptNote')));
    var plain = (isStr(c.prompt_en) || isStr(c.prompt_zh)) ? [{ key: 'plain', label: t('set.plain'), render: function () { return h('div', null, KB.pbox(t('lbl.en'), c.prompt_en), KB.pbox(t('lbl.zh'), c.prompt_zh)); } }] : [];
    pr.appendChild(h('div', { class: 'panel' }, KB.promptPanel(c.prompts, c.season, plain)));
    root.appendChild(pr);

    /* 图集 */
    var g = KB.section('gallery', t('ch.gallery'), 'Gallery', t('ch.imgs', { n: arr(c.images).length }));
    g.appendChild(h('p', { class: 'note' }, t('ch.galNote')));
    g.appendChild(KB.gallery(c.images));
    root.appendChild(g);

  }

  var lastId = null;
  function route() {
    var id = decodeURIComponent(location.hash.replace(/^#/, ''));
    var c = BYID[id];
    if (c) {
      renderDetail(c);
      if (lastId !== id) { window.scrollTo(0, 0); var t = document.getElementById('char-title'); if (t) t.focus({ preventScroll: true }); }
      lastId = id;
    } else {
      var was = lastId; lastId = null;
      renderGrid();
      if (was) { var a = root.querySelector('a[href="#' + was + '"]'); if (a) { a.scrollIntoView({ block: 'center' }); a.focus({ preventScroll: true }); } }
    }
  }

  KB.ready.then(function () { return KB.load('edgerunners_character_kb.json'); }).then(function (d) {
    C = d;
    arr(C.cyberware_vocab).forEach(function (v) { VOCAB[v.id] = v; });
    arr(C.class_styles).forEach(function (v) { CLASS[v.id] = v; });
    arr(C.characters).forEach(function (c) { BYID[c.id] = c; });
    route();
    window.addEventListener('hashchange', route);
    KB.onChange(function () {
      var y = window.scrollY;
      lastId = location.hash ? lastId : null;
      route();
      window.scrollTo(0, y);
    });
  }).catch(function (e) { KB.fail(root, e); });
})();
