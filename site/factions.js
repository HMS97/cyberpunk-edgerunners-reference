(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, t = KB.t, tr = KB.tr, root = document.getElementById('root');
  var F, C, S, KIND = {}, CLASS = {}, DIST = {}, LOC = {}, BYID = {};
  var GROUPS = [
    { key: 'gangs', kinds: ['gang', 'nomad'] },
    { key: 'orgs', kinds: ['corp', 'institution'] },
    { key: 'jobs', kinds: ['job'] }
  ];
  function groupOf(e) { return GROUPS.filter(function (g) { return g.kinds.indexOf(e.kind) >= 0; })[0]; }
  function groupList(g) { return arr(F.entries).filter(function (e) { return g.kinds.indexOf(e.kind) >= 0; }); }
  function nm(e) { return KB.en() ? (e.en || tr(e.zh)) : (e.zh || e.en); }
  function nm2(e) { return KB.en() ? (e.zh || '') : (e.en || ''); }
  function kindName(k) { return KB.zhen(KIND[k]) || k; }
  function isAnime(im) { return im.style === 'anime' || im.style === 'anime_s2'; }
  /* 当前「季」下可见的图：S2 动画仅 全部/第二季，S1 动画仅 全部/第一季，游戏始终 */
  function visImages(e) {
    return arr(e.images).filter(function (im) {
      if (im.style === 'anime_s2') return KB.seasonOk(2);
      if (im.style === 'anime') return KB.seasonOk(1);
      return true;
    });
  }
  /* 列表卡片首图：不受季影响 */
  function cardImage(e) {
    var imgs = arr(e.images);
    if (KB.state.style === 'game') {
      var g = imgs.filter(function (i) { return i.style === 'game'; })[0];
      return { im: g || imgs[0], missing: false };
    }
    var a = imgs.filter(isAnime)[0];
    return a ? { im: a, missing: false } : { im: imgs[0], missing: true };
  }

  /* ---------- grid ---------- */
  function card(e) {
    var ci = cardImage(e), im = ci.im;
    return h('a', { class: 'navcard fcard', href: '#' + e.id, style: { padding: '0', '--c': 'var(--cyan)' } },
      h('div', { class: 'thumb', style: { 'aspect-ratio': '4/3', border: '0' } }, KB.img(KB.imgSrc(im, 'thumb'), nm(e)), im ? KB.badge(im.style) : null,
        h('span', { class: 'badge neutral kind', style: { position: 'absolute', right: '6px', top: '6px' } }, kindName(e.kind))),
      h('div', { style: { padding: '10px 12px 14px' } },
        h('div', { class: 't', style: { 'font-size': '17px', margin: '0' } }, nm(e)),
        h('div', { class: 'muted', style: { 'font-size': '12.5px', 'font-family': KB.en() ? 'var(--sans)' : 'var(--disp)' } }, nm2(e)),
        ci.missing ? h('div', { class: 'fnote' }, t('fa.notAnime')) : null,
        h('div', { class: 'fcard-sw', 'aria-hidden': 'true' }, arr(e.colors).map(function (c) { return h('i', { style: { background: c }, title: c }); }))));
  }

  function tabLabel(g) { return t('fa.tab.' + g.key) + ' · ' + t('fa.count', { n: groupList(g).length }); }

  function renderGrid(active) {
    root.textContent = '';
    document.title = t('title.factions');
    var m = F.meta || {};
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'FACTIONS'),
      h('h1', null, t('fa.h1')),
      isStr(m.how_to_use) ? h('p', { class: 'note' }, tr(m.how_to_use)) : null,
      isStr(m.evidence_note) ? h('p', { class: 'note' }, tr(m.evidence_note)) : null,
      h('p', { class: 'note' }, t('fa.evLegend')),
      isStr(m.anime_note) ? h('p', { class: 'note' }, tr(m.anime_note)) : null));
    var items = GROUPS.map(function (g) {
      return { key: g.key, label: tabLabel(g), render: function () {
        return h('div', { class: 'grid', style: { 'grid-template-columns': 'repeat(auto-fill,minmax(min(46%,200px),1fr))' } }, groupList(g).map(card));
      } };
    });
    var tabs = KB.tabs(items, { active: active, big: true, label: t('fa.tabsAria'), onChange: function (k) {
      try { history.replaceState(null, '', '#' + k); } catch (e) { /* ignore */ }
      curTab = k;
    } });
    root.appendChild(tabs);
  }

  /* ---------- detail ---------- */
  function ev(e, key) {
    var lv = e.evidence && e.evidence[key];
    if (lv !== 'source' && lv !== 'observed' && lv !== 'inferred') return null;
    return h('span', { class: 'ev ' + lv }, t('ev.' + lv));
  }
  function evCls(e, key) { return e.evidence && e.evidence[key] === 'inferred' ? 'inferred' : null; }
  /* 字段：label + 内容 + 证据标记 */
  function field(e, label, content, key) {
    if (content == null || content === '' || (Array.isArray(content) && !content.length)) return null;
    return [h('dt', null, label, key ? ev(e, key) : null), h('dd', { class: key ? evCls(e, key) : null }, content)];
  }
  function terrName(x) { return KB.en() ? (isStr(x.en) ? x.en : tr(x.zh)) : (isStr(x.zh) ? x.zh : x.en); }
  function territory(e) {
    var list = arr(e.territory);
    if (!list.length) return null;
    return h('ul', { class: 'flist' }, list.map(function (x) {
      return h('li', null, h('b', null, terrName(x)), isStr(x.place) ? [KB.en() ? ' — ' : ' — ', tr(x.place)] : null);
    }));
  }
  function links(e, ids, MAP, hrefFn) {
    if (!arr(ids).length) return null;
    return h('div', { class: 'chips' }, ids.map(function (id) {
      var o = MAP[id];
      return h('a', { class: 'tag', href: hrefFn(id) }, o ? KB.zhen(o) : id);
    }));
  }
  function classStyles(e) {
    var ids = arr(e.class_style);
    if (!ids.length) return null;
    return h('div', { class: 'chips' }, ids.map(function (id) {
      var c = CLASS[id];
      return h('span', { class: 'tag', title: c ? tr(c.fashion) : '' }, c ? KB.nm(c) : id);
    }));
  }
  function memberCard(m) {
    return h('div', { class: 'mt-card' }, h('h4', null, KB.zhen(m)), isStr(m.look) ? h('p', { style: { margin: '0', 'font-size': '14px' } }, tr(m.look)) : null);
  }

  function hexList(colors) {
    var w = h('div', { class: 'swatches' });
    arr(colors).forEach(function (c) { if (isStr(c)) w.appendChild(h('span', { class: 'sw lg', title: c }, h('i', { style: { background: c } }), h('span', null, c.toUpperCase()))); });
    return w;
  }

  /* 场景提示词：无负面词，沿用同风格人物提示词的负面词 */
  function scenePromptPanel(e) {
    var sp = e.scene_prompts || {}, pp = e.prompts || {};
    var keys = ['game', 'anime'].filter(function (k) { return sp[k]; });
    if (!keys.length) return h('p', { class: 'muted' }, t('prompts.none'));
    var items = keys.map(function (k) {
      return { key: k, label: t('style.' + k), render: function () {
        var p = sp[k] || {}, neg = pp[k] || {};
        return h('div', null, KB.pbox(t('p.en'), p.en), KB.pbox(t('p.zh'), p.zh),
          KB.pbox(t('fa.negEnReuse'), neg.negative_en, true), KB.pbox(t('fa.negZhReuse'), neg.negative_zh, true));
      } };
    });
    var want = KB.state.style === 'game' ? 'game' : 'anime';
    if (keys.indexOf(want) < 0) want = keys[0];
    return KB.tabs(items, { active: want, label: t('prompts.aria') });
  }
  function personPromptPanel(e) {
    var pp = e.prompts || {};
    var keys = ['game', 'anime'].filter(function (k) { return pp[k]; });
    if (!keys.length) return h('p', { class: 'muted' }, t('prompts.none'));
    var items = keys.map(function (k) { return { key: k, label: t('style.' + k), render: function () { return KB.promptSet(pp[k]); } }; });
    var want = KB.state.style === 'game' ? 'game' : 'anime';
    if (keys.indexOf(want) < 0) want = keys[0];
    return KB.tabs(items, { active: want, label: t('prompts.aria') });
  }

  function renderDetail(e) {
    root.textContent = '';
    document.title = t('title.faction', { name: nm(e) });
    var g = groupOf(e), list = groupList(g), idx = list.indexOf(e);
    var prev = list[idx - 1], next = list[idx + 1];

    root.appendChild(h('nav', { class: 'row', 'aria-label': t('fa.navAria'), style: { 'justify-content': 'space-between', 'margin-top': '6px' } },
      h('a', { href: '#' + g.key, id: 'back' }, t('fa.back') + ' · ' + t('fa.tab.' + g.key)),
      h('span', { class: 'row' },
        prev ? h('a', { href: '#' + prev.id }, '‹ ' + nm(prev)) : null,
        next ? h('a', { href: '#' + next.id }, nm(next) + ' ›') : null)));

    root.appendChild(h('div', { class: 'hero', style: { 'padding-top': '14px' } },
      h('span', { class: 'kicker' }, kindName(e.kind) + ' · ' + (KB.en() ? e.zh : String(e.en || e.id).toUpperCase())),
      h('h1', { id: 'fac-title', tabindex: '-1' }, nm(e)),
      isStr(e.summary) ? h('p', { class: 'lede' }, tr(e.summary)) : null));

    /* 图集 */
    var imgs = visImages(e);
    var gal = KB.section('gallery', t('fa.gallery'), 'Gallery', t('ch.imgs', { n: imgs.length }));
    gal.appendChild(h('p', { class: 'note' }, t('fa.galNote')));
    if (KB.state.style !== 'game' && !arr(e.images).some(isAnime)) gal.appendChild(h('p', { class: 'fnote' }, t('fa.notAnimeNote')));
    else if (KB.state.style !== 'game' && !imgs.some(isAnime)) gal.appendChild(h('p', { class: 'fnote' }, t('fa.noAnimeImg')));
    gal.appendChild(KB.gallery(imgs));
    root.appendChild(gal);

    /* 资料 */
    var info = KB.section('info', t('fa.profile'), 'Profile');
    var appears = arr(e.appears_in).length ? h('div', { class: 'chips' }, e.appears_in.map(function (a) { return h('span', { class: 'tag', title: a }, t('ap.' + a) === 'ap.' + a ? a : t('ap.' + a)); })) : null;
    var terr = territory(e);
    var dl = links(e, e.district_ids, DIST, function () { return 'scenes.html'; });
    var ll = links(e, e.location_ids, LOC, function (id) { return 'scenes.html#s1-' + encodeURIComponent(id); });
    var cs = e.class_style && e.class_style.length ? classStyles(e) : null;
    var left = h('div', { class: 'panel accent-pink' }, h('dl', { class: 'kv' },
      field(e, t('f.appears'), appears),
      field(e, t('f.territory'), terr ? [terr, dl ? [h('div', { class: 'muted', style: { 'font-size': '13px', 'margin-top': '6px' } }, t('f.districts')), dl] : null, ll ? [h('div', { class: 'muted', style: { 'font-size': '13px', 'margin-top': '6px' } }, t('f.locations')), ll] : null] : (dl || ll ? [dl, ll] : null)),
      field(e, t('f.class'), cs, 'class_style'),
      field(e, t('f.fashion'), isStr(e.fashion) ? tr(e.fashion) : null, 'fashion'),
      field(e, t('f.emblem'), isStr(e.emblem) ? tr(e.emblem) : null, 'emblem'),
      field(e, t('f.cyberware'), isStr(e.cyberware) ? tr(e.cyberware) : null, 'cyberware'),
      field(e, t('f.gear'), isStr(e.gear) ? tr(e.gear) : null, 'gear'),
      field(e, t('f.workplace'), isStr(e.workplace) ? tr(e.workplace) : null, 'workplace'),
      field(e, t('f.tools'), isStr(e.tools) ? tr(e.tools) : null, 'tools')));
    var right = h('div', null,
      arr(e.colors).length ? h('div', { class: 'panel accent-yel' }, h('h3', null, t('f.colors'), ev(e, 'colors')), hexList(e.colors)) : null,
      arr(e.notable).length ? h('div', { class: 'panel accent-cyan', style: { 'margin-top': '16px' } }, h('h3', null, t('f.notable')),
        h('ul', { class: 'flist' }, e.notable.map(function (n) { return h('li', null, h('b', null, n.name), isStr(n.note) ? ' — ' + tr(n.note) : ''); }))) : null);
    info.appendChild(h('div', { class: 'grid cols2' }, left, right));
    root.appendChild(info);

    /* 成员类型 */
    if (arr(e.member_types).length) {
      var mt = KB.section('members', t('fa.members'), 'Member types', String(e.member_types.length));
      if (ev(e, 'member_types')) mt.querySelector('h2').appendChild(ev(e, 'member_types'));
      mt.appendChild(h('div', { class: 'grid' }, e.member_types.map(memberCard)));
      root.appendChild(mt);
    }

    /* 游戏义体款式 */
    if (arr(e.cyberware_styles).length) {
      var cw = KB.section('cwstyles', t('fa.cwStyles'), 'Cyberware styles', String(e.cyberware_styles.length));
      cw.appendChild(h('p', { class: 'note' }, t('fa.cwNote')));
      cw.appendChild(h('div', { class: 'cwstrip' }, e.cyberware_styles.map(function (c) {
        return h('a', { href: 'cyberware.html#icons', title: tr(c.t) }, KB.img(KB.local(c.img), tr(c.t)), tr(c.t));
      })));
      root.appendChild(cw);
    }

    /* 场景 */
    if (e.scene && (isStr(e.scene.zh) || isStr(e.scene.lighting))) {
      var sc = KB.section('scene', t('fa.scene'), 'Scene');
      sc.querySelector('h2').appendChild(ev(e, 'scene') || document.createTextNode(''));
      sc.appendChild(h('div', { class: 'panel accent-cyan' }, h('dl', { class: 'kv' },
        field(e, t('f.visual'), isStr(e.scene.zh) ? tr(e.scene.zh) : null),
        field(e, t('f.lighting'), isStr(e.scene.lighting) ? tr(e.scene.lighting) : null))));
      root.appendChild(sc);
    }

    /* 提示词 */
    var pr = KB.section('prompts', t('fa.personPrompts'), 'Character prompts');
    pr.appendChild(h('p', { class: 'note' }, t('fa.promptNote')));
    pr.appendChild(h('div', { class: 'panel' }, personPromptPanel(e)));
    root.appendChild(pr);
    var sp = KB.section('scene-prompts', t('fa.scenePrompts'), 'Scene prompts');
    sp.appendChild(h('p', { class: 'note' }, t('fa.sceneNegNote')));
    sp.appendChild(h('div', { class: 'panel' }, scenePromptPanel(e)));
    root.appendChild(sp);

    /* 缺口 + 来源 */
    var tail = h('section', { class: 'block', id: 'more' });
    if (arr(e.gaps).length) tail.appendChild(h('details', { class: 'fold' },
      h('summary', null, t('fa.gaps'), h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, t('fa.count', { n: e.gaps.length }))),
      h('div', { class: 'fold-body' }, h('ul', { class: 'flist' }, e.gaps.map(function (x) { return h('li', null, tr(x)); })))));
    if (arr(e.sources).length) {
      tail.appendChild(h('h3', { style: { 'margin-top': '22px' } }, t('fa.sources')));
      tail.appendChild(h('ul', { class: 'flist' }, e.sources.map(function (s) {
        return h('li', null, h('a', { href: s.url, target: '_blank', rel: 'noopener' }, s.title || s.url));
      })));
    }
    root.appendChild(tail);
  }

  var lastId = null, curTab = 'gangs';
  function route() {
    var id = decodeURIComponent(location.hash.replace(/^#/, ''));
    var e = BYID[id];
    if (e) {
      renderDetail(e);
      if (lastId !== id) { window.scrollTo(0, 0); var tt = document.getElementById('fac-title'); if (tt) tt.focus({ preventScroll: true }); }
      lastId = id;
    } else {
      var was = lastId; lastId = null;
      if (GROUPS.some(function (g) { return g.key === id; })) curTab = id;
      else if (was && BYID[was]) curTab = groupOf(BYID[was]).key;
      renderGrid(curTab);
      if (was) { var a = root.querySelector('a[href="#' + was + '"]'); if (a) { a.scrollIntoView({ block: 'center' }); a.focus({ preventScroll: true }); } }
    }
  }

  KB.ready.then(function () { return Promise.all([KB.load('factions_kb.json'), KB.load('edgerunners_character_kb.json'), KB.load('edgerunners_scene_kb.json')]); }).then(function (r) {
    F = r[0]; C = r[1]; S = r[2];
    arr(F.kinds).forEach(function (k) { KIND[k.id] = k; });
    arr(C.class_styles).forEach(function (v) { CLASS[v.id] = v; });
    arr(S.districts).forEach(function (v) { DIST[v.id] = v; });
    arr(S.locations).forEach(function (v) { LOC[v.id] = v; });
    arr(F.entries).forEach(function (e) { BYID[e.id] = e; });
    route();
    window.addEventListener('hashchange', route);
    KB.onChange(function () {
      var y = window.scrollY;
      var hid = decodeURIComponent(location.hash.replace(/^#/, ''));
      lastId = BYID[hid] ? lastId : null;
      route();
      window.scrollTo(0, y);
    });
  }).catch(function (e) { KB.fail(root, e); });
})();
