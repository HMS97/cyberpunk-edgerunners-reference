(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, root = document.getElementById('root');
  var G, S1, SRC = {};
  var COLS = [['game', 'cyan', 'accent-cyan'], ['anime', 'pink', 'accent-pink'], ['anime_s2', 'yel', 'accent-yel']];
  var LABEL = { game: '游戏风', anime: '第一季动画', anime_s2: '第二季动画' };

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
      var node = s && isStr(s.url) ? h('a', { href: s.url, target: '_blank', rel: 'noopener' }, s.title || id) : h('span', null, (s && s.title) || id);
      return i ? [' / ', node] : node;
    }));
  }
  function evBadge(ev) {
    if (!isStr(ev)) return null;
    return h('span', { class: 'ev ' + (ev === 'source' ? 'source' : 'observed') }, ev === 'source' ? '出处' : (ev === 'observed' ? '观察' : ev));
  }
  /* [{k,v,evidence,src}] → 列表 */
  function kvList(items) {
    var a = arr(items);
    if (!a.length) return null;
    return h('ul', { style: { 'padding-left': '1.1em' } }, a.map(function (it) {
      if (typeof it === 'string') return h('li', null, it);
      return h('li', null, h('b', null, it.k || it.zh || it.id || ''), evBadge(it.evidence), h('div', null, it.v || ''), srcLinks(it.src));
    }));
  }
  function credits(c) {
    if (isStr(c)) return h('p', { class: 'muted' }, c);
    if (c && typeof c === 'object') {
      return h('dl', { class: 'kv' }, Object.keys(c).filter(function (k) { return k !== 'src'; }).map(function (k) {
        return [h('dt', null, k.replace(/_/g, ' ')), h('dd', null, String(c[k]))];
      }));
    }
    return null;
  }

  function column(key, accent, cls) {
    var s = G[key] || {};
    var cur = isCurrent(key);
    var p = h('article', { class: 'panel ' + cls, 'aria-label': s.name || LABEL[key] },
      h('div', { class: 'row', style: { 'justify-content': 'space-between' } }, KB.badge(key), cur ? h('span', { class: 'tag', style: { color: 'var(--yel)', 'border-color': 'var(--yel)' } }, '当前风格') : null),
      h('h3', { style: { 'margin-top': '10px' } }, s.name || LABEL[key]),
      isStr(s.one_line) ? h('p', null, s.one_line) : null,
      h('h4', null, '制作'), credits(s.credits),
      s.palette ? [h('h4', null, '色板'), KB.swatches(s.palette, true)] : null,
      h('h4', null, '关键词'),
      KB.pbox('EN', s.keywords_en), KB.pbox('中文', s.keywords_zh),
      h('h4', null, '负面词'),
      KB.pbox('EN', s.negative_en, true), KB.pbox('中文', s.negative_zh, true),
      isStr(s.negative_note) ? h('p', { class: 'muted', style: { 'font-size': '13px', 'margin-top': '6px' } }, s.negative_note) : null);
    if (arr(s.refs).length) { p.appendChild(h('h4', null, '参考图')); p.appendChild(KB.gallery(s.refs)); }
    var more = [];
    if (arr(s.sections).length) more.push(fold('规范细则（' + s.sections.length + '）', kvList(s.sections)));
    if (arr(s.lighting_presets).length) more.push(fold('光照预设（' + s.lighting_presets.length + '）', kvList(s.lighting_presets.map(function (x) { return { k: x.zh + (x.id ? '（' + x.id + '）' : ''), v: x.v }; }))));
    if (arr(s.lighting_rules).length) more.push(fold('光照规则（' + s.lighting_rules.length + '）', kvList(s.lighting_rules)));
    if (arr(s.vs_s1).length) more.push(fold('和第一季的区别', kvList(s.vs_s1)));
    if (arr(s.vs_game).length) more.push(fold('和游戏风的区别', kvList(s.vs_game)));
    if (s.credits_detail) more.push(fold('详细制作名单', credits(s.credits_detail)));
    if (s.unified_with_s1 === false) more.push(h('p', { class: 'muted', style: { 'margin-top': '10px', 'font-size': '13px' } }, '注意：第二季画风与第一季不统一，不能混用。'));
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
      h('h1', null, '三套画风'),
      h('p', { class: 'lede' }, (G.meta && G.meta.rule) || ''),
      G.meta && isStr(G.meta.evidence_note) ? h('p', { class: 'note' }, G.meta.evidence_note + '（下文用 ', h('span', { class: 'ev source' }, '出处'), ' / ', h('span', { class: 'ev observed' }, '观察'), ' 标记）') : null));

    var sec = KB.section('three', '并排看', 'Side by side');
    sec.appendChild(h('p', { class: 'note' }, '顶栏「风格」「季」开关决定哪一列标为当前风格：游戏 → 游戏风；动画 + 第一季 → 第一季动画；动画 + 第二季 → 第二季动画。'));
    sec.appendChild(h('div', { class: 'grid cols3' }, COLS.map(function (c) { return column(c[0], c[1], c[2]); })));
    root.appendChild(sec);

    var cmp = arr(G.compare);
    if (cmp.length) {
      var t = KB.section('compare', '逐项对比', 'Compare', cmp.length + ' 项');
      t.appendChild(h('div', { class: 'scroll-x', tabindex: '0', role: 'region', 'aria-label': '画风对比表（可横向滚动）' },
        h('table', { class: 'cmp' },
          h('thead', null, h('tr', null, h('th', { scope: 'col' }, '项目'), h('th', { scope: 'col' }, '游戏风'), h('th', { scope: 'col' }, '第一季动画'), h('th', { scope: 'col' }, '第二季动画'))),
          h('tbody', null, cmp.map(function (r) {
            return h('tr', null, h('th', { scope: 'row' }, r.k || ''), h('td', null, r.game || '—'), h('td', null, r.anime || '—'), h('td', null, r.anime_s2 || '—'));
          })))));
      root.appendChild(t);
    }

    var conv = G.conversion || {};
    var CV = [['game_to_anime', '游戏 → 第一季动画', 'pink'], ['anime_to_game', '第一季动画 → 游戏', 'cyan'], ['game_to_anime_s2', '游戏 → 第二季动画', 'yel'], ['anime_s2_to_game', '第二季动画 → 游戏', 'cyan']];
    var cs = KB.section('conversion', '画风互转', 'Conversion');
    cs.appendChild(h('div', { class: 'grid cols2' }, CV.filter(function (c) { return arr(conv[c[0]]).length; }).map(function (c) {
      return h('div', { class: 'panel accent-' + c[2] }, h('h3', null, c[1]), h('ol', null, arr(conv[c[0]]).map(function (x) { return h('li', null, typeof x === 'string' ? x : JSON.stringify(x)); })));
    })));
    root.appendChild(cs);

    var moods = arr(S1 && S1.color_moods);
    if (moods.length) {
      var ms = KB.section('moods', '第一季情绪主色', 'S1 color moods', moods.length + ' 种');
      ms.appendChild(h('p', { class: 'note' }, (S1.color_moods_note || '') + ' 只适用于第一季动画风。'));
      ms.appendChild(h('div', { class: 'grid' }, moods.map(function (m) {
        return h('div', { class: 'panel' },
          h('div', { style: { height: '10px', background: 'linear-gradient(90deg,' + arr(m.hex).join(',') + ')', 'margin-bottom': '12px' } }),
          h('h3', null, m.zh || m.id), KB.swatches(m.hex), h('p', { style: { 'margin-top': '8px' } }, m.use || ''),
          arr(m.images).length ? KB.gallery(m.images) : null);
      })));
      root.appendChild(ms);
    }

    var srcs = arr(G.sources);
    if (srcs.length) {
      var ss = KB.section('sources', '资料来源', 'Sources', srcs.length + ' 条');
      ss.appendChild(h('ol', null, srcs.map(function (s) {
        return h('li', { id: 'src-' + s.id }, isStr(s.url) ? h('a', { href: s.url, target: '_blank', rel: 'noopener' }, s.title || s.url) : (s.title || s.id), h('span', { class: 'muted', style: { 'font-size': '12px' } }, '  [' + s.id + ']'));
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
    KB.onChange(render);
  }).catch(function (e) { KB.fail(root, e); });
})();
