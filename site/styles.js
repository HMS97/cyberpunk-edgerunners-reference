(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, t = KB.t, tr = KB.tr, root = document.getElementById('root');
  var G, S1, SRC = {};
  var COLS = [['game', 'cyan', 'accent-cyan'], ['anime', 'pink', 'accent-pink'], ['anime_s2', 'yel', 'accent-yel']];
  function LBL(k) { return t('sty.' + k); }

  function isCurrent(key) {
    var st = KB.state;
    if (st.style === 'game') return key === 'game';
    if (key === 'game') return false;
    if (st.season === '1') return key === 'anime';
    if (st.season === '2') return key === 'anime_s2';
    return true;
  }

  function srcLinks(src) {
    var ids = Array.isArray(src) ? src : (isStr(src) ? [src] : []);
    if (!ids.length) return null;
    return h('span', { class: 'muted', style: { 'font-size': '12.5px' } }, ' — ', ids.map(function (id, i) {
      var s = SRC[id];
      var node = s && isStr(s.url) ? h('a', { href: s.url, target: '_blank', rel: 'noopener' }, tr(s.title) || id) : h('span', null, (s && tr(s.title)) || id);
      return i ? [' / ', node] : node;
    }));
  }
  function evBadge(ev) {
    if (!isStr(ev)) return null;
    return h('span', { class: 'ev ' + (ev === 'source' ? 'source' : 'observed') }, ev === 'source' ? t('ev.source') : (ev === 'observed' ? t('ev.observed') : ev));
  }
  /* [{k,v,evidence,src}] → 列表 */
  function kvList(items) {
    var a = arr(items);
    if (!a.length) return null;
    return h('ul', { style: { 'padding-left': '1.1em' } }, a.map(function (it) {
      if (typeof it === 'string') return h('li', null, tr(it));
      return h('li', null, h('b', null, tr(it.k) || KB.nm(it) || ''), evBadge(it.evidence), h('div', null, tr(it.v) || ''), srcLinks(it.src));
    }));
  }
  function credits(c) {
    if (isStr(c)) return h('p', { class: 'muted' }, tr(c));
    if (c && typeof c === 'object') {
      return h('dl', { class: 'kv' }, Object.keys(c).filter(function (k) { return k !== 'src'; }).map(function (k) {
        return [h('dt', null, k.replace(/_/g, ' ')), h('dd', null, tr(String(c[k])))];
      }));
    }
    return null;
  }

  function column(key, accent, cls) {
    var s = G[key] || {};
    var cur = isCurrent(key);
    var name = tr(s.name) || LBL(key);
    var p = h('article', { class: 'panel ' + cls, 'aria-label': name },
      h('div', { class: 'row', style: { 'justify-content': 'space-between' } }, KB.badge(key), cur ? h('span', { class: 'tag', style: { color: 'var(--yel)', 'border-color': 'var(--yel)' } }, t('cur.style')) : null),
      h('h3', { style: { 'margin-top': '10px' } }, name),
      isStr(s.one_line) ? h('p', null, tr(s.one_line)) : null,
      h('h4', null, t('sty.credits')), credits(s.credits),
      s.palette ? [h('h4', null, t('sty.palette')), KB.swatches(s.palette, true)] : null,
      h('h4', null, t('sty.keywords')),
      KB.pbox(t('lbl.en'), s.keywords_en), KB.pbox(t('lbl.zh'), s.keywords_zh),
      h('h4', null, t('sty.negative')),
      KB.pbox(t('lbl.en'), s.negative_en, true), KB.pbox(t('lbl.zh'), s.negative_zh, true),
      isStr(s.negative_note) ? h('p', { class: 'muted', style: { 'font-size': '13px', 'margin-top': '6px' } }, tr(s.negative_note)) : null);
    if (arr(s.refs).length) { p.appendChild(h('h4', null, t('sty.refs'))); p.appendChild(KB.gallery(s.refs)); }
    var more = [];
    if (arr(s.sections).length) more.push(fold(t('sty.sections', { n: s.sections.length }), kvList(s.sections)));
    if (arr(s.lighting_presets).length) more.push(fold(t('sty.presets', { n: s.lighting_presets.length }), kvList(s.lighting_presets.map(function (x) {
      return { k: KB.en() ? KB.nm(x) : (x.zh + (x.id ? '（' + x.id + '）' : '')), v: x.v };
    }))));
    if (arr(s.lighting_rules).length) more.push(fold(t('sty.lrules', { n: s.lighting_rules.length }), kvList(s.lighting_rules)));
    if (arr(s.vs_s1).length) more.push(fold(t('sty.vsS1'), kvList(s.vs_s1)));
    if (arr(s.vs_game).length) more.push(fold(t('sty.vsGame'), kvList(s.vs_game)));
    if (s.credits_detail) more.push(fold(t('sty.creditsDetail'), credits(s.credits_detail)));
    if (s.unified_with_s1 === false) more.push(h('p', { class: 'muted', style: { 'margin-top': '10px', 'font-size': '13px' } }, t('sty.notUnified')));
    p.appendChild(h('div', null, more));
    return p;
  }
  function fold(title, body) {
    return h('details', { class: 'sub' }, h('summary', null, title), body);
  }

  function render() {
    root.textContent = '';
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'STYLE GUIDES'),
      h('h1', null, t('sty.h1')),
      h('p', { class: 'lede' }, tr((G.meta && G.meta.rule) || '')),
      G.meta && isStr(G.meta.evidence_note) ? h('p', { class: 'note' }, tr(G.meta.evidence_note) + t('sty.evNote'), h('span', { class: 'ev source' }, t('ev.source')), ' / ', h('span', { class: 'ev observed' }, t('ev.observed')), t('sty.evNote2')) : null));

    var sec = KB.section('three', t('sty.side'), 'Side by side');
    sec.appendChild(h('p', { class: 'note' }, t('sty.sideNote')));
    sec.appendChild(h('div', { class: 'grid cols3' }, COLS.map(function (c) { return column(c[0], c[1], c[2]); })));
    root.appendChild(sec);

    var cmp = arr(G.compare);
    if (cmp.length) {
      var ct = KB.section('compare', t('sty.compare'), 'Compare', t('sty.items', { n: cmp.length }));
      ct.appendChild(h('div', { class: 'scroll-x', tabindex: '0', role: 'region', 'aria-label': t('sty.cmpAria') },
        h('table', { class: 'cmp' },
          h('thead', null, h('tr', null, h('th', { scope: 'col' }, t('sty.item')), h('th', { scope: 'col' }, LBL('game')), h('th', { scope: 'col' }, LBL('anime')), h('th', { scope: 'col' }, LBL('anime_s2')))),
          h('tbody', null, cmp.map(function (r) {
            return h('tr', null, h('th', { scope: 'row' }, tr(r.k) || ''), h('td', null, tr(r.game) || '—'), h('td', null, tr(r.anime) || '—'), h('td', null, tr(r.anime_s2) || '—'));
          })))));
      root.appendChild(ct);
    }

    var conv = G.conversion || {};
    var CV = [['game_to_anime', 'pink'], ['anime_to_game', 'cyan'], ['game_to_anime_s2', 'yel'], ['anime_s2_to_game', 'cyan']];
    var cs = KB.section('conversion', t('sty.conv'), 'Conversion');
    cs.appendChild(h('div', { class: 'grid cols2' }, CV.filter(function (c) { return arr(conv[c[0]]).length; }).map(function (c) {
      return h('div', { class: 'panel accent-' + c[1] }, h('h3', null, t('conv.' + c[0])), h('ol', null, arr(conv[c[0]]).map(function (x) { return h('li', null, typeof x === 'string' ? tr(x) : JSON.stringify(x)); })));
    })));
    root.appendChild(cs);

    var moods = arr(S1 && S1.color_moods);
    if (moods.length) {
      var ms = KB.section('moods', t('sty.moods'), 'S1 color moods', t('sty.moodsN', { n: moods.length }));
      ms.appendChild(h('p', { class: 'note' }, tr(S1.color_moods_note || '') + t('sty.moodsNote')));
      ms.appendChild(h('div', { class: 'grid' }, moods.map(function (m) {
        return h('div', { class: 'panel' },
          h('div', { style: { height: '10px', background: 'linear-gradient(90deg,' + arr(m.hex).join(',') + ')', 'margin-bottom': '12px' } }),
          h('h3', null, KB.nm(m)), KB.swatches(m.hex), h('p', { style: { 'margin-top': '8px' } }, tr(m.use) || ''),
          arr(m.images).length ? KB.gallery(m.images) : null);
      })));
      root.appendChild(ms);
    }

    var srcs = arr(G.sources);
    if (srcs.length) {
      var ss = KB.section('sources', t('sty.sources'), 'Sources', t('sty.sourcesN', { n: srcs.length }));
      ss.appendChild(h('ol', null, srcs.map(function (s) {
        return h('li', { id: 'src-' + s.id }, isStr(s.url) ? h('a', { href: s.url, target: '_blank', rel: 'noopener' }, tr(s.title) || s.url) : (tr(s.title) || s.id), h('span', { class: 'muted', style: { 'font-size': '12px' } }, '  [' + s.id + ']'));
      })));
      root.appendChild(ss);
    }
  }

  KB.ready.then(function () {
    return Promise.all([KB.load('style_guides.json'), KB.load('edgerunners_scene_kb.json').catch(function () { return {}; })]);
  }).then(function (r) {
    G = r[0]; S1 = r[1];
    arr(G.sources).forEach(function (s) { SRC[s.id] = s; });
    render();
    KB.onChange(function () { var y = window.scrollY; render(); window.scrollTo(0, y); });
  }).catch(function (e) { KB.fail(root, e); });
})();
