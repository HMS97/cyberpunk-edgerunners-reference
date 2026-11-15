/* 动作页：三套动作风格（action_style_guides.json） */
(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, t = KB.t, tr = KB.tr, root = document.getElementById('root');
  var A = {}, SRC = {};
  var KEYS = ['game', 'anime', 'anime_s2'];
  var ACCENT = { game: 'cyan', anime: 'pink', anime_s2: 'yel' };

  /* 顶栏开关 → 要显示的动作风格 */
  function mapped() {
    var st = KB.state;
    if (st.style === 'game') return ['game'];
    if (st.season === '1') return ['anime'];
    if (st.season === '2') return ['anime_s2'];
    return ['anime', 'anime_s2'];
  }
  function styName(k) { return t('sty.' + k); }

  function evBadge(ev) {
    if (!isStr(ev)) return null;
    return h('span', { class: 'ev ' + (ev === 'source' ? 'source' : 'observed') }, ev === 'source' ? t('ev.source') : (ev === 'observed' ? t('ev.observed') : ev));
  }
  function srcLinks(src) {
    var ids = Array.isArray(src) ? src : (isStr(src) ? [src] : []);
    if (!ids.length) return null;
    return h('div', { class: 'muted', style: { 'font-size': '12.5px', 'margin-top': '2px' } }, '— ', ids.map(function (id, i) {
      var s = SRC[id];
      var node = s && isStr(s.url) ? h('a', { href: s.url, target: '_blank', rel: 'noopener' }, tr(s.title) || id) : h('span', null, (s && tr(s.title)) || id);
      return i ? [' / ', node] : node;
    }));
  }

  function rules(list) {
    return h('ul', { style: { 'padding-left': '1.1em' } }, arr(list).map(function (it) {
      if (typeof it === 'string') return h('li', null, tr(it));
      return h('li', { style: { 'margin-bottom': '8px' } }, h('b', null, tr(it.k) || ''), evBadge(it.evidence), h('div', null, tr(it.v) || ''), srcLinks(it.src));
    }));
  }

  function moveCard(m, key) {
    function f(label, v) { return isStr(v) ? [h('dt', null, label), h('dd', null, tr(v))] : null; }
    return h('article', { class: 'panel accent-' + ACCENT[key], id: key + '-' + m.id },
      h('div', { class: 'row', style: { 'justify-content': 'space-between', 'align-items': 'baseline' } },
        h('h4', { style: { margin: '0', color: 'var(--paper)', 'font-size': '16px' } }, KB.nm(m)), evBadge(m.evidence)),
      h('dl', { class: 'kv', style: { 'margin-top': '10px' } },
        f(t('mv.motion'), m.motion), f(t('mv.camera'), m.camera), f(t('mv.timing'), m.timing), f(t('mv.fx'), m.fx)),
      srcLinks(m.src));
  }

  function refGrid(refs, key) {
    var g = h('div', { class: 'gallery' });
    arr(refs).forEach(function (r) {
      var src = isStr(r.thumb_local) ? KB.local(r.thumb_local) : null; /* 只用本地副本，不外链 */
      var lab = tr(r.label) || '';
      var cap = lab + (isStr(r.credit) ? ' · ' + tr(r.credit) : '');
      var btn = h('button', { type: 'button', class: 'thumb', 'aria-label': t('act.zoom', { x: lab || t('gallery.img') }) }, KB.img(src, lab), KB.badge(key));
      btn.addEventListener('click', function () { KB.lightbox({ src: src, caption: cap, link: r.page, linkText: t('act.refLink') }); });
      g.appendChild(h('figure', null, btn, h('figcaption', null, lab,
        isStr(r.credit) ? h('div', { class: 'muted' }, tr(r.credit)) : null,
        isStr(r.page) ? h('div', null, h('a', { href: r.page, target: '_blank', rel: 'noopener' }, t('act.refLink') + ' ↗')) : null)));
    });
    return g;
  }

  function vsTable(list) {
    return h('div', { class: 'scroll-x', tabindex: '0', role: 'region', 'aria-label': t('act.vsS1') },
      h('table', { class: 'cmp' },
        h('thead', null, h('tr', null, h('th', { scope: 'col' }, t('sty.item')), h('th', { scope: 'col' }, t('act.s1')), h('th', { scope: 'col' }, t('act.s2')), h('th', { scope: 'col' }, t('act.evidence')))),
        h('tbody', null, arr(list).map(function (r) {
          return h('tr', null, h('th', { scope: 'row' }, tr(r.k) || ''), h('td', null, tr(r.s1) || '—'), h('td', null, tr(r.s2) || '—'), h('td', null, evBadge(r.evidence)));
        }))));
  }

  function styleBlock(key) {
    var s = A[key] || {};
    var vp = s.video_prompt || {};
    var sec = h('section', { class: 'block', id: 'sec-' + key, 'aria-label': tr(s.name) || styName(key), style: { 'margin-top': '22px' } },
      h('div', { class: 'row', style: { gap: '10px', 'align-items': 'center' } }, KB.badge(key), h('span', { class: 'muted', style: { 'font-family': 'var(--disp)', 'font-size': '12px', 'letter-spacing': '.12em' } }, key.toUpperCase())),
      h('h2', { style: { margin: '8px 0 6px', 'font-size': '24px' } }, tr(s.name) || styName(key)),
      isStr(s.one_line) ? h('p', { class: 'lede' }, tr(s.one_line)) : null);

    var cols = h('div', { class: 'grid cols2', style: { 'margin-top': '14px' } },
      h('div', { class: 'panel accent-' + ACCENT[key] }, h('h3', null, t('act.rules'), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, '  ' + arr(s.sections).length)), rules(s.sections)),
      h('div', { class: 'panel' }, h('h3', null, t('act.prompts')),
        h('h4', null, t('sty.keywords')), KB.pbox(t('lbl.en'), s.keywords_en), KB.pbox(t('lbl.zh'), s.keywords_zh),
        h('h4', null, t('sty.negative')), KB.pbox(t('lbl.en'), s.negative_en, true), KB.pbox(t('lbl.zh'), s.negative_zh, true),
        h('h4', null, t('act.video')), KB.pbox(t('lbl.en'), vp.en), KB.pbox(t('lbl.zh'), vp.zh)));
    sec.appendChild(cols);

    if (arr(s.ability_moves).length) {
      sec.appendChild(KB.secHead(t('act.moves'), 'Ability moves', t('act.movesN', { n: s.ability_moves.length })));
      sec.appendChild(h('div', { class: 'grid' }, s.ability_moves.map(function (m) { return moveCard(m, key); })));
    }
    if (arr(s.vs_s1).length) {
      sec.appendChild(KB.secHead(t('act.vsS1'), 'vs S1', t('sty.items', { n: s.vs_s1.length })));
      sec.appendChild(vsTable(s.vs_s1));
    }
    if (arr(s.refs).length) {
      sec.appendChild(KB.secHead(t('act.refs'), 'References', t('act.refsN', { n: s.refs.length })));
      sec.appendChild(refGrid(s.refs, key));
    }
    if (arr(s.gaps).length) {
      sec.appendChild(h('details', { class: 'fold', style: { 'margin-top': '18px' } },
        h('summary', null, t('act.gaps'), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, t('ch.entries', { n: s.gaps.length }))),
        h('div', { class: 'fold-body' }, h('ul', null, s.gaps.map(function (g) { return h('li', null, typeof g === 'string' ? tr(g) : JSON.stringify(g)); })))));
    }
    return sec;
  }

  function hashKey() { var k = decodeURIComponent(location.hash.replace(/^#/, '')); return KEYS.indexOf(k) >= 0 ? k : 'follow'; }
  var tabsEl = null;

  function render() {
    var m = A.meta || {};
    root.textContent = '';
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'MOTION STYLES'),
      h('h1', null, t('act.h1')),
      isStr(m.rule) ? h('p', { class: 'lede' }, tr(m.rule)) : null,
      arr(m.prompt_order).length ? h('div', { class: 'panel', style: { 'margin-top': '16px', 'max-width': '760px' } },
        h('h3', null, t('act.combine')),
        h('p', { class: 'note' }, t('act.combineNote1'), h('a', { href: 'styles.html' }, t('act.combineNote2')), t('act.combineNote3')),
        h('ol', { class: 'steps', style: { margin: '0' } }, m.prompt_order.map(function (x) { return h('li', null, tr(x)); }))) : null,
      (isStr(m.limits) || isStr(m.evidence_note)) ? h('p', { class: 'note', style: { 'margin-top': '14px', 'font-size': '13px', 'max-width': '760px' } },
        [m.evidence_note, m.limits].filter(isStr).map(tr).join(' ')) : null));

    var want = mapped();
    var items = [{ key: 'follow', label: t('act.follow'), render: function () {
      return h('div', null, h('p', { class: 'note', style: { 'margin-top': '12px' } }, t('act.followNote', { s: want.map(styName).join(' + ') })), want.map(styleBlock));
    } }].concat(KEYS.map(function (k) { return { key: k, label: styName(k), render: function () { return styleBlock(k); } }; }));
    tabsEl = KB.tabs(items, { active: hashKey(), big: true, label: t('act.tabsAria'),
      onChange: function (k) { history.replaceState(null, '', k === 'follow' ? location.pathname + location.search : '#' + k); } });
    root.appendChild(h('div', { style: { 'margin-top': '24px' } }, tabsEl));

    var cmp = arr(A.compare);
    if (cmp.length) {
      var ct = KB.section('compare', t('act.compare'), 'Compare', t('sty.items', { n: cmp.length }));
      ct.appendChild(h('div', { class: 'scroll-x', tabindex: '0', role: 'region', 'aria-label': t('act.cmpAria') },
        h('table', { class: 'cmp' },
          h('thead', null, h('tr', null, h('th', { scope: 'col' }, t('sty.item')), KEYS.map(function (k) { return h('th', { scope: 'col' }, styName(k)); }))),
          h('tbody', null, cmp.map(function (r) {
            return h('tr', null, h('th', { scope: 'row' }, tr(r.k) || ''), KEYS.map(function (k) { return h('td', null, tr(r[k]) || '—'); }));
          })))));
      root.appendChild(ct);
    }

    var srcs = arr(A.sources);
    if (srcs.length) {
      var ss = KB.section('sources', t('act.sources'), 'Sources', t('sty.sourcesN', { n: srcs.length }));
      ss.appendChild(h('div', { class: 'grid cols3' }, KEYS.map(function (k) {
        var list = srcs.filter(function (s) { return s.style === k; });
        if (!list.length) return null;
        return h('div', { class: 'panel accent-' + ACCENT[k] }, h('h3', null, styName(k), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, '  ' + list.length)),
          h('ol', { style: { 'padding-left': '1.3em', 'font-size': '14px' } }, list.map(function (s) {
            return h('li', { id: 'src-' + s.id }, isStr(s.url) ? h('a', { href: s.url, target: '_blank', rel: 'noopener' }, tr(s.title) || s.url) : (tr(s.title) || s.id));
          })));
      })));
      root.appendChild(ss);
    }
  }

  KB.ready.then(function () { return KB.load('action_style_guides.json'); }).then(function (d) {
    A = d || {};
    arr(A.sources).forEach(function (s) { SRC[s.id] = s; });
    render();
    KB.onChange(function () { var y = window.scrollY; render(); window.scrollTo(0, y); });
    window.addEventListener('hashchange', function () { if (tabsEl) tabsEl.select(hashKey()); });
  }).catch(function (e) { KB.fail(root, e); });
})();
