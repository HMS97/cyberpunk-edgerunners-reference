(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, t = KB.t, tr = KB.tr, root = document.getElementById('root');
  var S1 = {}, S2 = {}, DIST = {};
  var TABS = [
    { key: 's1', season: 1 },
    { key: 's2', season: 2 },
    { key: 'districts' },
    { key: 'episodes' },
    { key: 'rules' }
  ];

  function field(label, v) {
    if (v == null || v === '') return null;
    if (Array.isArray(v)) v = v.map(tr).join(t('list.sep'));
    else if (typeof v === 'string') v = tr(v);
    if (typeof v === 'object') return null;
    return [h('dt', null, label), h('dd', null, String(v))];
  }
  /* {zh,en} 外观：EN 模式英文在前，中文为辅 */
  function look(o, label) {
    if (!o || (!isStr(o.zh) && !isStr(o.en))) return null;
    var main = KB.zhen(o), sub = KB.en() ? (isStr(o.en) ? o.zh : '') : o.en;
    return [h('dt', null, label), h('dd', null, main || '', isStr(sub) ? h('div', { class: 'muted', style: { 'font-size': '13px' } }, sub) : null)];
  }

  /* 地点卡（第一、二季字段不同，逐项判空） */
  function locCard(l, season) {
    var dist = KB.en() ? ((DIST[l.district] && DIST[l.district].en) || tr(l.district_zh) || l.district) : (l.district_zh || (DIST[l.district] && DIST[l.district].zh) || l.district);
    var insufficient = l.story_status === 'insufficient';
    var prompts = l.prompts && typeof l.prompts === 'object' ? l.prompts : null;
    return h('article', { class: 'panel ' + (season === 2 ? 'accent-yel' : 'accent-pink'), id: 's' + season + '-' + l.id, style: { 'margin-bottom': '18px' } },
      h('div', { class: 'row', style: { 'justify-content': 'space-between', 'align-items': 'baseline' } },
        h('h3', { style: { margin: '0' } }, KB.zhen(l), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-family': 'var(--disp)', 'font-weight': '400' } }, '  ' + ((KB.en() ? l.zh : l.en) || ''))),
        h('span', { class: 'row' }, dist ? h('span', { class: 'tag' }, dist) : null, insufficient ? h('span', { class: 'badge warn' }, t('sc.insufficient')) : null)),
      h('div', { class: 'grid cols2', style: { 'margin-top': '12px' } },
        h('div', null, KB.gallery(l.images)),
        h('dl', { class: 'kv' },
          field(t('f.episodes'), l.episodes), field(t('f.story'), l.story), field(t('f.visual'), l.visual),
          field(t('f.props'), l.key_props), field(t('f.lighting'), l.lighting),
          l.palette ? [h('dt', null, t('f.palette')), h('dd', null, KB.swatches(l.palette))] : null,
          look(l.anime_look, season === 2 ? t('f.animeS2Look') : t('f.animeLook')), look(l.game_look, t('f.gameLook')),
          isStr(l.wiki_page) ? [h('dt', null, 'Wiki'), h('dd', null, h('a', { href: l.wiki_page, target: '_blank', rel: 'noopener' }, t('f.locPage')), isStr(l.wiki_page_note) ? h('div', { class: 'muted', style: { 'font-size': '13px' } }, tr(l.wiki_page_note)) : null)] : null)),
      (isStr(l.body_en) || isStr(l.body_zh) || prompts) ? h('details', { class: 'sub' }, h('summary', null, t('sc.promptsFollow')),
        h('div', { style: { 'margin-top': '10px' } }, KB.promptPanel(prompts || {}, season,
          (isStr(l.body_en) || isStr(l.body_zh)) ? [{ key: 'plain', label: t('sc.neutral'), render: function () { return bodyBoxes(l); } }] : []))) : null);
  }
  /* 中性描述：两种语言都可复制，EN 在前 */
  function bodyBoxes(o) {
    return h('div', null, KB.pbox(t('lbl.en'), o.body_en), KB.pbox(t('lbl.zh'), o.body_zh));
  }

  function gaps() {
    var g = arr(S2.data_gaps);
    if (!g.length) return null;
    return h('details', { class: 'fold' }, h('summary', null, t('sc.gaps'), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, t('ch.entries', { n: g.length }))),
      h('div', { class: 'fold-body' }, h('ul', null, g.map(function (x) { return h('li', null, typeof x === 'string' ? tr(x) : JSON.stringify(x)); }))));
  }

  function tabS1() {
    var l = arr(S1.locations);
    return h('div', null, h('p', { class: 'note' }, t('sc.s1count', { n: l.length }) + tr((S1.meta && S1.meta.how_to_use) || '')), l.map(function (x) { return locCard(x, 1); }));
  }
  function tabS2() {
    var l = arr(S2.locations), m = S2.meta || {}, se = S2.series || {};
    return h('div', null,
      h('p', { class: 'note' }, t('sc.s2count', { n: l.length }) + tr(m.how_to_use || '')),
      isStr(m.status) ? h('p', { class: 'note' }, h('span', { class: 'badge warn' }, t('sc.status')), ' ', tr(m.status)) : null,
      gaps(),
      h('div', { style: { 'margin-top': '16px' } }, l.map(function (x) { return locCard(x, 2); })),
      l.length ? null : h('p', { class: 'empty' }, t('sc.s2empty')),
      se.title ? h('p', { class: 'muted', style: { 'font-size': '13px' } }, [se.title, se.premiere, se.studio].filter(Boolean).map(tr).join(' · ')) : null);
  }
  function tabDistricts() {
    var d = arr(S1.districts);
    return h('div', null, h('p', { class: 'note' }, t('sc.distNote', { n: d.length })),
      d.map(function (x) {
        var locs = arr(x.s1_locations).map(function (id) {
          var l = arr(S1.locations).filter(function (y) { return y.id === id; })[0];
          return (l && KB.seasonOk(1)) ? h('a', { class: 'tag', href: '#s1-' + id }, KB.zhen(l)) : h('span', { class: 'tag' }, l ? KB.zhen(l) : id);
        });
        return h('article', { class: 'panel accent-cyan', id: 'dist-' + x.id, style: { 'margin-bottom': '18px' } },
          h('h3', null, KB.zhen(x), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-family': 'var(--disp)', 'font-weight': '400' } }, '  ' + ((KB.en() ? x.zh : x.en) || ''))),
          h('div', { class: 'grid cols2' },
            h('div', null, KB.gallery(x.images)),
            h('dl', { class: 'kv' },
              field(t('f.desc'), x.desc), field(t('f.arch'), x.architecture), field(t('f.class2'), x.class_style),
              x.palette ? [h('dt', null, t('f.palette')), h('dd', null, KB.swatches(x.palette))] : null,
              locs.length ? [h('dt', null, t('f.s1locs')), h('dd', null, h('div', { class: 'chips' }, locs))] : null)),
          h('details', { class: 'sub' }, h('summary', null, t('sc.promptsFollow')),
            h('div', { style: { 'margin-top': '10px' } }, KB.promptPanel(x.prompts || {}, 1,
              (isStr(x.body_en) || isStr(x.body_zh)) ? [{ key: 'plain', label: t('sc.neutral'), render: function () { return bodyBoxes(x); } }] : []))));
      }));
  }
  function tabEpisodes() {
    var out = h('div');
    if (KB.seasonOk(1) && arr(S1.episodes).length) {
      out.appendChild(h('h3', { style: { 'margin-top': '6px' } }, t('sc.epHead', { s: t('ch.season1'), n: S1.episodes.length })));
      out.appendChild(h('div', { class: 'gallery', style: { 'grid-template-columns': 'repeat(auto-fill,minmax(min(100%,220px),1fr))' } }, S1.episodes.map(function (e) {
        var im = e.image;
        var btn = h('button', { type: 'button', class: 'thumb', 'aria-label': t('sc.epZoom', { n: e.n }) }, KB.img(KB.imgSrc(im, 'thumb'), tr(e.title)), im ? KB.badge(im.style) : null);
        btn.addEventListener('click', function () { KB.lightbox({ src: KB.imgSrc(im, 'full'), caption: t('sc.epCap', { n: e.n, t: tr(e.title) }), link: im && im.source_page, linkText: t('wiki.file') }); });
        return h('figure', null, btn, h('figcaption', null, h('b', { style: { color: 'var(--paper)' } }, 'EP' + e.n + ' '), tr(e.title) || ''));
      })));
    }
    if (KB.seasonOk(2) && arr(S2.episodes).length) {
      out.appendChild(h('h3', { style: { 'margin-top': '28px' } }, t('sc.epHead', { s: t('ch.season2'), n: S2.episodes.length })));
      out.appendChild(h('p', { class: 'note' }, t('sc.s2epNote')));
      out.appendChild(h('div', { class: 'grid' }, S2.episodes.map(function (e) {
        return h('div', { class: 'panel accent-yel' },
          h('div', { class: 'muted', style: { 'font-family': 'var(--disp)', 'font-size': '13px' } }, 'EP' + e.n),
          h('h3', null, tr(e.title) || ''),
          KB.imgSrc(e.image) ? h('div', { class: 'thumb', style: { 'margin-bottom': '8px' } }, KB.img(KB.imgSrc(e.image), tr(e.title))) : null,
          (isStr(e.summary_zh) || isStr(e.summary_en)) ? h('p', null, KB.pick(e, 'summary')) : h('p', { class: 'muted' }, t('sc.noSummary')),
          h('div', { class: 'muted', style: { 'font-size': '12.5px' } }, tr(e.summary_src) || '', isStr(e.url) ? [' · ', h('a', { href: e.url, target: '_blank', rel: 'noopener' }, 'Wiki')] : null));
      })));
    }
    if (!out.children.length) out.appendChild(h('p', { class: 'empty' }, t('sc.noEpisodes')));
    return out;
  }
  function templates(pt, season) {
    if (!pt || typeof pt !== 'object') return null;
    var T = ['establishing', 'character_in_scene'];
    var sets = {};
    Object.keys(pt).forEach(function (k) { sets[k] = pt[k]; });
    var keys = Object.keys(sets);
    var items = keys.map(function (k) {
      return { key: k, label: KB.setLabel(k), render: function () {
        var g = sets[k] || {};
        return h('div', { class: 'grid' }, Object.keys(g).map(function (n) {
          return h('div', null, h('h4', { style: { 'margin-top': '0' } }, T.indexOf(n) >= 0 ? t('tpl.' + n) : n), KB.pbox(t('lbl.en'), g[n] && g[n].en), KB.pbox(t('lbl.zh'), g[n] && g[n].zh));
        }));
      } };
    });
    if (!items.length) return null;
    var want = KB.setFor(season);
    return KB.tabs(items, { active: sets[want] ? want : keys[0], label: t('sc.tplAria') });
  }
  function tabRules() {
    var out = h('div');
    if (KB.seasonOk(1)) {
      var sb = S1.scene_builder || {}, ar = S1.anime_scene_rules || {};
      var p = h('div', { class: 'panel accent-pink', style: { 'margin-bottom': '18px' } }, h('h3', null, t('sc.s1scenes')));
      if (arr(sb.steps).length) p.appendChild(h('div', null, h('h4', null, t('sc.steps')), h('ol', { class: 'steps' }, sb.steps.map(function (s) { return h('li', null, String(tr(s)).replace(/^\d+[.)]?\s*/, '')); }))));
      if (isStr(sb.consistency_rule)) p.appendChild(h('p', null, h('b', { style: { color: 'var(--yel)' } }, t('sc.consistency')), tr(sb.consistency_rule)));
      if (isStr(ar.principle) || arr(ar.rules).length) {
        p.appendChild(h('h4', null, t('sc.animeRules'), KB.badge('anime')));
        if (isStr(ar.principle)) p.appendChild(h('p', null, tr(ar.principle)));
        if (arr(ar.rules).length) p.appendChild(h('dl', { class: 'kv' }, ar.rules.map(function (r) { return [h('dt', null, tr(r.k)), h('dd', null, tr(r.v))]; })));
        if (isStr(ar.avoid)) p.appendChild(h('p', { class: 'muted', style: { 'margin-top': '8px' } }, t('sc.avoid') + tr(ar.avoid)));
      }
      if (isStr(S1.color_moods_note)) p.appendChild(h('p', { class: 'note', style: { 'margin-top': '8px' } }, tr(S1.color_moods_note) + t('sc.moodsLink1'), h('a', { href: 'styles.html#moods' }, t('sc.moodsLink2')), t('sc.moodsLink3')));
      var t1 = templates(S1.prompt_templates, 1);
      if (t1) { p.appendChild(h('h4', null, t('sc.templates'))); p.appendChild(t1); }
      out.appendChild(p);
    }
    if (KB.seasonOk(2)) {
      var q = h('div', { class: 'panel accent-yel', style: { 'margin-bottom': '18px' } }, h('h3', null, t('sc.s2scenes')));
      var li = S2.lighting;
      if (li && typeof li === 'object') q.appendChild(h('div', null, h('h4', null, t('sc.lighting')), h('dl', { class: 'kv' }, Object.keys(li).map(function (k) { return [h('dt', null, KB.setLabel(k)), h('dd', null, typeof li[k] === 'string' ? tr(li[k]) : JSON.stringify(li[k]))]; }))));
      var t2 = templates(S2.prompt_templates, 2);
      if (t2) { q.appendChild(h('h4', null, t('sc.templates'))); q.appendChild(t2); }
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
      h('h1', null, t('sc.h1')),
      h('p', { class: 'lede' }, t('sc.lede'))));
    var vis = visibleTabs();
    var want = hashTab();
    if (!vis.some(function (t) { return t.key === want; })) want = vis[0].key;
    tabsEl = KB.tabs(vis.map(function (x) { return { key: x.key, label: t('sc.tab.' + x.key), render: RENDER[x.key] }; }), {
      active: want, big: true, label: t('sc.tabsAria'),
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
