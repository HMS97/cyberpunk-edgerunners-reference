(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, root = document.getElementById('root');
  var S1 = {}, S2 = {}, DIST = {};
  var TABS = [
    { key: 's1', label: '第一季地点', season: 1 },
    { key: 's2', label: '第二季地点', season: 2 },
    { key: 'districts', label: '夜之城大区' },
    { key: 'episodes', label: '每集主视觉' },
    { key: 'rules', label: '生成模板与规则' }
  ];

  function field(label, v) {
    if (v == null || v === '') return null;
    if (Array.isArray(v)) v = v.join('、');
    if (typeof v === 'object') return null;
    return [h('dt', null, label), h('dd', null, String(v))];
  }
  function look(o, label) {
    if (!o || (!isStr(o.zh) && !isStr(o.en))) return null;
    return [h('dt', null, label), h('dd', null, o.zh || '', isStr(o.en) ? h('div', { class: 'muted', style: { 'font-size': '13px' } }, o.en) : null)];
  }

  /* 地点卡（第一、二季字段不同，逐项判空） */
  function locCard(l, season) {
    var dist = l.district_zh || (DIST[l.district] && DIST[l.district].zh) || l.district;
    var insufficient = l.story_status === 'insufficient';
    var prompts = l.prompts && typeof l.prompts === 'object' ? l.prompts : null;
    return h('article', { class: 'panel ' + (season === 2 ? 'accent-yel' : 'accent-pink'), id: 's' + season + '-' + l.id, style: { 'margin-bottom': '18px' } },
      h('div', { class: 'row', style: { 'justify-content': 'space-between', 'align-items': 'baseline' } },
        h('h3', { style: { margin: '0' } }, l.zh || l.id, h('span', { class: 'muted', style: { 'font-size': '13px', 'font-family': 'var(--disp)', 'font-weight': '400' } }, '  ' + (l.en || ''))),
        h('span', { class: 'row' }, dist ? h('span', { class: 'tag' }, dist) : null, insufficient ? h('span', { class: 'badge warn' }, '资料不足') : null)),
      h('div', { class: 'grid cols2', style: { 'margin-top': '12px' } },
        h('div', null, KB.gallery(l.images)),
        h('dl', { class: 'kv' },
          field('出场', l.episodes), field('剧情', l.story), field('画面', l.visual),
          field('道具', l.key_props), field('光线', l.lighting),
          l.palette ? [h('dt', null, '配色'), h('dd', null, KB.swatches(l.palette))] : null,
          look(l.anime_look, season === 2 ? 'S2动画外观' : '动画外观'), look(l.game_look, '游戏外观'),
          isStr(l.wiki_page) ? [h('dt', null, 'Wiki'), h('dd', null, h('a', { href: l.wiki_page, target: '_blank', rel: 'noopener' }, '地点页'), isStr(l.wiki_page_note) ? h('div', { class: 'muted', style: { 'font-size': '13px' } }, l.wiki_page_note) : null)] : null)),
      (isStr(l.body_en) || isStr(l.body_zh) || prompts) ? h('details', { class: 'sub' }, h('summary', null, '提示词（跟随当前风格）'),
        h('div', { style: { 'margin-top': '10px' } }, KB.promptPanel(prompts || {}, season,
          (isStr(l.body_en) || isStr(l.body_zh)) ? [{ key: 'plain', label: '中性描述', render: function () { return h('div', null, KB.pbox('EN', l.body_en), KB.pbox('中文', l.body_zh)); } }] : []))) : null);
  }

  function gaps() {
    var g = arr(S2.data_gaps);
    if (!g.length) return null;
    return h('details', { class: 'fold' }, h('summary', null, '资料缺口', h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, g.length + ' 条')),
      h('div', { class: 'fold-body' }, h('ul', null, g.map(function (x) { return h('li', null, typeof x === 'string' ? x : JSON.stringify(x)); }))));
  }

  function tabS1() {
    var l = arr(S1.locations);
    return h('div', null, h('p', { class: 'note' }, l.length + ' 个第一季地点。' + ((S1.meta && S1.meta.how_to_use) || '')), l.map(function (x) { return locCard(x, 1); }));
  }
  function tabS2() {
    var l = arr(S2.locations), m = S2.meta || {}, se = S2.series || {};
    return h('div', null,
      h('p', { class: 'note' }, l.length + ' 个第二季地点。' + (m.how_to_use || '')),
      isStr(m.status) ? h('p', { class: 'note' }, h('span', { class: 'badge warn' }, '状态'), ' ', m.status) : null,
      gaps(),
      h('div', { style: { 'margin-top': '16px' } }, l.map(function (x) { return locCard(x, 2); })),
      l.length ? null : h('p', { class: 'empty' }, '第二季地点数据还在整理中。'),
      se.title ? h('p', { class: 'muted', style: { 'font-size': '13px' } }, [se.title, se.premiere, se.studio].filter(Boolean).join(' · ')) : null);
  }
  function tabDistricts() {
    var d = arr(S1.districts);
    return h('div', null, h('p', { class: 'note' }, '夜之城 ' + d.length + ' 个大区，来自第一季场景库；决定建筑类型、阶层和底色，两季通用。'),
      d.map(function (x) {
        var locs = arr(x.s1_locations).map(function (id) {
          var l = arr(S1.locations).filter(function (y) { return y.id === id; })[0];
          return (l && KB.seasonOk(1)) ? h('a', { class: 'tag', href: '#s1-' + id }, l.zh) : h('span', { class: 'tag' }, l ? l.zh : id);
        });
        return h('article', { class: 'panel accent-cyan', id: 'dist-' + x.id, style: { 'margin-bottom': '18px' } },
          h('h3', null, x.zh || x.id, h('span', { class: 'muted', style: { 'font-size': '13px', 'font-family': 'var(--disp)', 'font-weight': '400' } }, '  ' + (x.en || ''))),
          h('div', { class: 'grid cols2' },
            h('div', null, KB.gallery(x.images)),
            h('dl', { class: 'kv' },
              field('概况', x.desc), field('建筑', x.architecture), field('阶层', x.class_style),
              x.palette ? [h('dt', null, '配色'), h('dd', null, KB.swatches(x.palette))] : null,
              locs.length ? [h('dt', null, '第一季地点'), h('dd', null, h('div', { class: 'chips' }, locs))] : null)),
          h('details', { class: 'sub' }, h('summary', null, '提示词（跟随当前风格）'),
            h('div', { style: { 'margin-top': '10px' } }, KB.promptPanel(x.prompts || {}, 1,
              (isStr(x.body_en) || isStr(x.body_zh)) ? [{ key: 'plain', label: '中性描述', render: function () { return h('div', null, KB.pbox('EN', x.body_en), KB.pbox('中文', x.body_zh)); } }] : []))));
      }));
  }
  function tabEpisodes() {
    var out = h('div');
    if (KB.seasonOk(1) && arr(S1.episodes).length) {
      out.appendChild(h('h3', { style: { 'margin-top': '6px' } }, '第一季 · ' + S1.episodes.length + ' 集'));
      out.appendChild(h('div', { class: 'gallery', style: { 'grid-template-columns': 'repeat(auto-fill,minmax(min(100%,220px),1fr))' } }, S1.episodes.map(function (e) {
        var im = e.image;
        var btn = h('button', { type: 'button', class: 'thumb', 'aria-label': '放大第 ' + e.n + ' 集主视觉' }, KB.img(KB.imgSrc(im, 'thumb'), e.title), im ? KB.badge(im.style) : null);
        btn.addEventListener('click', function () { KB.lightbox({ src: KB.imgSrc(im, 'full'), caption: '第 ' + e.n + ' 集 · ' + e.title, link: im && im.source_page, linkText: 'Wiki 文件页' }); });
        return h('figure', null, btn, h('figcaption', null, h('b', { style: { color: 'var(--paper)' } }, 'EP' + e.n + ' '), e.title || ''));
      })));
    }
    if (KB.seasonOk(2) && arr(S2.episodes).length) {
      out.appendChild(h('h3', { style: { 'margin-top': '28px' } }, '第二季 · ' + S2.episodes.length + ' 集'));
      out.appendChild(h('p', { class: 'note' }, '第二季剧集页暂无每集主视觉图，以下是官方简介。'));
      out.appendChild(h('div', { class: 'grid' }, S2.episodes.map(function (e) {
        return h('div', { class: 'panel accent-yel' },
          h('div', { class: 'muted', style: { 'font-family': 'var(--disp)', 'font-size': '13px' } }, 'EP' + e.n),
          h('h3', null, e.title || ''),
          KB.imgSrc(e.image) ? h('div', { class: 'thumb', style: { 'margin-bottom': '8px' } }, KB.img(KB.imgSrc(e.image), e.title)) : null,
          isStr(e.summary_zh) ? h('p', null, e.summary_zh) : h('p', { class: 'muted' }, '暂无简介。'),
          h('div', { class: 'muted', style: { 'font-size': '12.5px' } }, e.summary_src || '', isStr(e.url) ? [' · ', h('a', { href: e.url, target: '_blank', rel: 'noopener' }, 'Wiki')] : null));
      })));
    }
    if (!out.children.length) out.appendChild(h('p', { class: 'empty' }, '没有符合当前季筛选的剧集。'));
    return out;
  }
  function templates(pt, season) {
    if (!pt || typeof pt !== 'object') return null;
    var T = { establishing: '远景建立镜头', character_in_scene: '角色在场景中' };
    var sets = {};
    Object.keys(pt).forEach(function (k) { sets[k] = pt[k]; });
    var keys = Object.keys(sets);
    var items = keys.map(function (k) {
      return { key: k, label: KB.SET_LABEL[k] || k, render: function () {
        var g = sets[k] || {};
        return h('div', { class: 'grid' }, Object.keys(g).map(function (t) {
          return h('div', null, h('h4', { style: { 'margin-top': '0' } }, T[t] || t), KB.pbox('EN', g[t] && g[t].en), KB.pbox('中文', g[t] && g[t].zh));
        }));
      } };
    });
    if (!items.length) return null;
    var want = KB.setFor(season);
    return KB.tabs(items, { active: sets[want] ? want : keys[0], label: '模板' });
  }
  function tabRules() {
    var out = h('div');
    if (KB.seasonOk(1)) {
      var sb = S1.scene_builder || {}, ar = S1.anime_scene_rules || {};
      var p = h('div', { class: 'panel accent-pink', style: { 'margin-bottom': '18px' } }, h('h3', null, '第一季场景'));
      if (arr(sb.steps).length) p.appendChild(h('div', null, h('h4', null, '出图步骤'), h('ol', { class: 'steps' }, sb.steps.map(function (s) { return h('li', null, String(s).replace(/^\d+\s*/, '')); }))));
      if (isStr(sb.consistency_rule)) p.appendChild(h('p', null, h('b', { style: { color: 'var(--yel)' } }, '一致性规则：'), sb.consistency_rule));
      if (isStr(ar.principle) || arr(ar.rules).length) {
        p.appendChild(h('h4', null, '第一季动画场景规则 ', KB.badge('anime')));
        if (isStr(ar.principle)) p.appendChild(h('p', null, ar.principle));
        if (arr(ar.rules).length) p.appendChild(h('dl', { class: 'kv' }, ar.rules.map(function (r) { return [h('dt', null, r.k), h('dd', null, r.v)]; })));
        if (isStr(ar.avoid)) p.appendChild(h('p', { class: 'muted', style: { 'margin-top': '8px' } }, '避免：' + ar.avoid));
      }
      if (isStr(S1.color_moods_note)) p.appendChild(h('p', { class: 'note', style: { 'margin-top': '8px' } }, S1.color_moods_note + ' 情绪主色见 ', h('a', { href: 'styles.html#moods' }, '画风页'), '。'));
      var t1 = templates(S1.prompt_templates, 1);
      if (t1) { p.appendChild(h('h4', null, '提示词模板')); p.appendChild(t1); }
      out.appendChild(p);
    }
    if (KB.seasonOk(2)) {
      var q = h('div', { class: 'panel accent-yel', style: { 'margin-bottom': '18px' } }, h('h3', null, '第二季场景'));
      var li = S2.lighting;
      if (li && typeof li === 'object') q.appendChild(h('div', null, h('h4', null, '光照'), h('dl', { class: 'kv' }, Object.keys(li).map(function (k) { return [h('dt', null, KB.SET_LABEL[k] || k), h('dd', null, typeof li[k] === 'string' ? li[k] : JSON.stringify(li[k]))]; }))));
      var t2 = templates(S2.prompt_templates, 2);
      if (t2) { q.appendChild(h('h4', null, '提示词模板')); q.appendChild(t2); }
      var g = gaps(); if (g) q.appendChild(g);
      out.appendChild(q);
    }
    return out;
  }

  function visibleTabs() {
    return TABS.filter(function (t) { return !t.season || KB.seasonOk(t.season); });
  }
  /* #s1 / #s2-afterlife → 标签页 key */
  function hashTab() {
    var hs = decodeURIComponent(location.hash.replace(/^#/, ''));
    var m = hs.match(/^(s1|s2)-(.+)$/);
    return m ? m[1] : hs;
  }
  function scrollToLoc() {
    var hs = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (!/^(s1|s2)-/.test(hs)) return;
    var el = document.getElementById(hs);
    if (el) setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 30);
  }
  var RENDER = { s1: tabS1, s2: tabS2, districts: tabDistricts, episodes: tabEpisodes, rules: tabRules };
  var tabsEl = null;

  function render() {
    var y = window.scrollY;
    root.textContent = '';
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'SCENES'),
      h('h1', null, '场景'),
      h('p', { class: 'lede' }, '第一、二季地点，夜之城大区，每集主视觉和场景生成模板。地点图片按当前「风格」排序，提示词默认打开当前风格那一套；「季」开关会隐藏另一季的地点和剧集。')));
    var vis = visibleTabs();
    var want = hashTab();
    if (!vis.some(function (t) { return t.key === want; })) want = vis[0].key;
    tabsEl = KB.tabs(vis.map(function (t) { return { key: t.key, label: t.label, render: RENDER[t.key] }; }), {
      active: want, big: true, label: '场景分区',
      onChange: function (k) { history.replaceState(null, '', '#' + k); }
    });
    root.appendChild(h('div', { style: { 'margin-top': '24px' } }, tabsEl));
    window.scrollTo(0, y);
  }

  KB.ready.then(function () {
    return Promise.all([KB.load('edgerunners_scene_kb.json'), KB.load('edgerunners_s2_scene_kb.json').catch(function (e) { console.warn(e); return {}; })]);
  }).then(function (r) {
    S1 = r[0] || {}; S2 = r[1] || {};
    arr(S1.districts).forEach(function (d) { DIST[d.id] = d; });
    render();
    KB.onChange(render);
    window.addEventListener('hashchange', function () { if (tabsEl) { tabsEl.select(hashTab()); scrollToLoc(); } });
    scrollToLoc();
  }).catch(function (e) { KB.fail(root, e); });
})();
