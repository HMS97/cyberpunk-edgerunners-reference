(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, root = document.getElementById('root');
  var C, VOCAB = {}, CLASS = {}, BYID = {};
  var SHEET_CAP = '角色设定图 · AI 生成（gpt-image-2.6-sunburst）';
  var SEASON_ZH = { 1: '第一季', 2: '第二季' };
  var ARC_ZH = { early: '前期', mid: '中期', late: '后期', final: '最终' };

  function sheetSrc(id) { return '../character_sheets/' + encodeURIComponent(id) + '_sheet.png'; }
  function firstImage(c) { return KB.sortImages(c.images)[0]; }

  /* ---------- grid ---------- */
  function card(c) {
    var im = firstImage(c);
    return h('a', { class: 'navcard', href: '#' + c.id, style: { padding: '0', '--c': c.season === 2 ? 'var(--yel)' : 'var(--pink)' } },
      h('div', { class: 'thumb', style: { 'aspect-ratio': '1/1', border: '0' } }, KB.img(KB.imgSrc(im, 'thumb'), c.name_zh), im ? KB.badge(im.style) : null),
      h('div', { style: { padding: '10px 12px 14px' } },
        h('div', { class: 't', style: { 'font-size': '17px', margin: '0' } }, c.name_zh || c.id),
        h('div', { class: 'muted', style: { 'font-size': '12.5px', 'font-family': 'var(--disp)' } }, c.name_en || ''),
        h('div', { class: 'd', style: { 'margin-top': '4px' } }, c.role || '')));
  }

  function renderGrid() {
    root.textContent = '';
    document.title = '角色 · 边缘行者知识库';
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'CHARACTERS'),
      h('h1', null, '角色'),
      h('p', { class: 'lede' }, '点开角色查看设定图、图集、义体和分风格提示词。卡片缩略图按当前「风格」优先显示对应画风的图。画风本身的规范以 ', h('a', { href: 'styles.html' }, '画风页'), '（style_guides.json）为准。')));
    [1, 2].forEach(function (s) {
      if (!KB.seasonOk(s)) return;
      var list = arr(C.characters).filter(function (c) { return c.season === s; });
      var sec = KB.section('season' + s, SEASON_ZH[s] + '角色', 'Season ' + s, list.length + ' 人');
      sec.appendChild(h('div', { class: 'grid', style: { 'grid-template-columns': 'repeat(auto-fill,minmax(min(46%,180px),1fr))' } }, list.map(card)));
      root.appendChild(sec);
    });
    root.appendChild(extras());
  }

  /* ---------- extras: vocab link + OC builder ---------- */
  function extras() {
    var wrap = h('section', { class: 'block', id: 'tools' }, KB.secHead('设计工具', 'Tools'));
    var vocab = arr(C.cyberware_vocab);
    wrap.appendChild(h('details', { class: 'fold' },
      h('summary', null, '义体外形词典', h('span', { class: 'muted', style: { 'font-size': '13px', 'font-weight': '400' } }, vocab.length + ' 条')),
      h('div', { class: 'fold-body' },
        h('p', null, '每种义体长什么样、装在哪、用什么英文词描述。完整词典和 177 个游戏义体图标在 ', h('a', { href: 'cyberware.html' }, '义体页'), '。'),
        h('div', { class: 'chips' }, vocab.map(function (v) { return h('a', { class: 'tag', href: 'cyberware.html#v-' + v.id, title: v.visual || '' }, v.zh || v.id); })))));

    var oc = C.oc_builder || {};
    var pt = C.prompt_templates || {};
    var TPL = { character_sheet: '三视图', promo_portrait: '宣传半身像', action_shot: '动作图' };
    wrap.appendChild(h('details', { class: 'fold' },
      h('summary', null, '原创角色生成'),
      h('div', { class: 'fold-body' },
        arr(oc.steps).length ? h('ol', { class: 'steps' }, oc.steps.map(function (s) { return h('li', null, String(s).replace(/^\d+\s*/, '')); })) : null,
        isStr(oc.silhouette_rule) ? h('p', null, h('b', { style: { color: 'var(--yel)' } }, '剪影规则：'), oc.silhouette_rule) : null,
        isStr(oc.color_rule) ? h('p', null, h('b', { style: { color: 'var(--yel)' } }, '配色规则：'), oc.color_rule) : null,
        arr(C.class_styles).length ? [h('h4', null, '阶层穿搭（class_styles）'), h('div', { class: 'scroll-x' }, h('table', null,
          h('thead', null, h('tr', null, h('th', null, '阶层'), h('th', null, '谁'), h('th', null, '穿搭'))),
          h('tbody', null, C.class_styles.map(function (x) { return h('tr', null, h('th', { scope: 'row' }, x.zh || x.id), h('td', null, x.who || ''), h('td', null, x.fashion || '')); }))))] : null,
        h('h4', null, '提示词模板'),
        h('p', { class: 'muted', style: { 'font-size': '13px' } }, '把 {style_keywords} 换成画风页对应那一套的关键词，{character_prompt} 换成角色描述。'),
        h('div', { class: 'grid' }, Object.keys(pt).map(function (k) {
          var t = pt[k] || {};
          return h('div', { class: 'panel' }, h('h3', null, TPL[k] || k), KB.pbox('EN', t.en), KB.pbox('中文', t.zh));
        })))));
    return wrap;
  }

  /* ---------- detail ---------- */
  function field(label, v) {
    if (!isStr(v)) return null;
    return [h('dt', null, label), h('dd', null, v)];
  }
  function vocabChip(id) {
    var v = VOCAB[id];
    var label = v ? (v.zh || id) : id;
    if (!v) return h('span', { class: 'tag' }, label);
    var pid = 'cw-' + id;
    var b = h('button', { type: 'button', class: 'chip', 'aria-expanded': 'false', 'aria-controls': pid, title: v.visual || '' }, label);
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
      h('b', null, v.zh || id), v.slot ? h('span', { class: 'muted' }, '  · ' + v.slot) : null,
      isStr(v.visual) ? h('p', { style: { margin: '6px 0 0' } }, v.visual) : null,
      isStr(v.effect_visual) ? h('p', { class: 'muted', style: { margin: '4px 0 0' } }, '效果：' + v.effect_visual) : null,
      KB.pbox('prompt_en', v.prompt_en),
      h('a', { href: 'cyberware.html#v-' + id, style: { 'font-size': '13px' } }, '在义体词典中查看 →'));
  }

  function renderDetail(c) {
    root.textContent = '';
    document.title = (c.name_zh || c.id) + ' · 角色 · 边缘行者知识库';
    var cls = CLASS[c.class_style];
    var idx = arr(C.characters).indexOf(c);
    var prev = C.characters[idx - 1], next = C.characters[idx + 1];

    root.appendChild(h('nav', { class: 'row', 'aria-label': '角色导航', style: { 'justify-content': 'space-between', 'margin-top': '6px' } },
      h('a', { href: '#', id: 'back' }, '← 全部角色'),
      h('span', { class: 'row' },
        prev ? h('a', { href: '#' + prev.id }, '‹ ' + prev.name_zh) : null,
        next ? h('a', { href: '#' + next.id }, next.name_zh + ' ›') : null)));

    root.appendChild(h('div', { class: 'hero', style: { 'padding-top': '14px' } },
      h('span', { class: 'kicker' }, (SEASON_ZH[c.season] || '') + ' · ' + (c.name_en || c.id).toUpperCase()),
      h('h1', { id: 'char-title', tabindex: '-1' }, c.name_zh || c.id),
      h('p', { class: 'lede' }, [c.role, c.age ? '年龄 ' + c.age : null].filter(Boolean).join(' · '))));

    /* 设定图 */
    var sheet = sheetSrc(c.id);
    var sheetBtn = h('button', { type: 'button', class: 'thumb contain', style: { 'aspect-ratio': '16/9' }, 'aria-label': '放大查看' + c.name_zh + '设定图' }, KB.img(sheet, c.name_zh + ' 角色设定图'));
    sheetBtn.addEventListener('click', function () { KB.lightbox({ src: sheet, caption: c.name_zh + ' · ' + SHEET_CAP }); });
    var s1 = KB.section('sheet', '设定图', 'Design sheet');
    s1.appendChild(h('figure', { style: { margin: '0' } }, sheetBtn, h('figcaption', { class: 'muted', style: { 'font-size': '13px', 'margin-top': '6px' } }, SHEET_CAP)));
    root.appendChild(s1);

    /* 资料 + 义体 + 配色 */
    var info = KB.section('info', '设定资料', 'Profile');
    var arc = c.arc_variants && typeof c.arc_variants === 'object' ? Object.keys(c.arc_variants).map(function (k) { return (ARC_ZH[k] || k) + '：' + c.arc_variants[k]; }).join('；') : (isStr(c.arc_variants) ? c.arc_variants : null);
    info.appendChild(h('div', { class: 'grid cols2' },
      h('div', { class: 'panel accent-pink' }, h('dl', { class: 'kv' },
        field('身份', c.role), field('年龄', c.age),
        field('阶层穿搭', cls ? cls.zh + '（' + (cls.fashion || '') + '）' : c.class_style),
        field('体型', c.body), field('面部发型', c.face_hair), field('服装', c.outfit),
        field('剪影要点', c.silhouette), field('阶段形态', arc), field('注', c.note))),
      h('div', null,
        h('div', { class: 'panel accent-cyan' },
          h('h3', null, '义体'),
          h('p', { class: 'muted', style: { 'font-size': '13px' } }, '点击义体名称展开外形描述。'),
          h('div', { class: 'chips' }, arr(c.cyberware).map(vocabChip)),
          h('div', null, arr(c.cyberware).map(vocabPanel)),
          isStr(c.cyberware_raw) ? h('details', { class: 'sub' }, h('summary', null, 'Wiki 原始义体清单'), h('p', { style: { 'margin-top': '6px' } }, c.cyberware_raw)) : null),
        h('div', { class: 'panel accent-yel', style: { 'margin-top': '16px' } }, h('h3', null, '配色'), KB.swatches(c.colors)))));
    root.appendChild(info);

    /* 提示词 */
    var pr = KB.section('prompts', '提示词', 'Prompts');
    pr.appendChild(h('p', { class: 'note' }, '默认打开当前「风格」对应的那一套；「纯描述」不带画风关键词，可以自己接任意画风。'));
    var plain = (isStr(c.prompt_en) || isStr(c.prompt_zh)) ? [{ key: 'plain', label: '纯描述', render: function () { return h('div', null, KB.pbox('EN', c.prompt_en), KB.pbox('中文', c.prompt_zh)); } }] : [];
    pr.appendChild(h('div', { class: 'panel' }, KB.promptPanel(c.prompts, c.season, plain)));
    root.appendChild(pr);

    /* 图集 */
    var g = KB.section('gallery', '图集', 'Gallery', arr(c.images).length + ' 张');
    g.appendChild(h('p', { class: 'note' }, '徽章标示画风：动画 = 第一季，S2动画 = 第二季，游戏 = 赛博朋克 2077。当前风格的图排在前面。点击放大。'));
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
