(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, root = document.getElementById('root');
  var C, IC, CH = {};
  var filt = { sec: 'all', q: '' };
  var iconGrid, iconCount;

  function vocabCard(v) {
    var seen = arr(v.seen_on).filter(function (id) { return !CH[id] || KB.seasonOk(CH[id].season); });
    return h('article', { class: 'panel accent-cyan', id: 'v-' + v.id },
      h('h3', { style: { 'margin-bottom': '2px' } }, v.zh || v.id),
      h('div', { class: 'muted', style: { 'font-size': '12.5px', 'font-family': 'var(--disp)' } }, v.id + (v.slot ? ' · ' : ''), v.slot ? h('span', { style: { 'font-family': 'var(--sans)' } }, v.slot) : null),
      isStr(v.visual) ? h('p', { style: { 'margin-top': '8px' } }, v.visual) : null,
      isStr(v.effect_visual) ? h('p', { class: 'muted' }, h('b', { style: { color: 'var(--yel)' } }, '效果：'), v.effect_visual) : null,
      KB.pbox('prompt_en', v.prompt_en),
      seen.length ? h('div', { style: { 'margin-top': '10px' } }, h('span', { class: 'muted', style: { 'font-size': '13px' } }, '见于：'),
        h('span', { class: 'chips', style: { display: 'inline-flex' } }, seen.map(function (id) {
          return h('a', { class: 'tag', href: 'characters.html#' + encodeURIComponent(id) }, CH[id] ? CH[id].name_zh : id);
        }))) : null);
  }

  function renderVocab(host) {
    var all = arr(C.cyberware_vocab);
    var list = all.filter(function (v) {
      var s = arr(v.seen_on);
      return !s.length || s.some(function (id) { return !CH[id] || KB.seasonOk(CH[id].season); });
    });
    host.textContent = '';
    host.appendChild(KB.secHead('外形词典', 'Cyberware vocab', list.length + (list.length !== all.length ? ' / ' + all.length : '') + ' 条'));
    host.appendChild(h('p', { class: 'note' }, '来自角色知识库的 cyberware_vocab：每种义体的安装位置、外形和英文提示词。「季」开关只显示该季角色身上出现过的义体，点角色名跳到角色详情。'));
    host.appendChild(h('div', { class: 'grid' }, list.map(vocabCard)));
  }

  function renderIcons() {
    var q = filt.q.trim().toLowerCase();
    var n = 0;
    iconGrid.textContent = '';
    arr(IC.sections).forEach(function (s) {
      if (filt.sec !== 'all' && s.key !== filt.sec) return;
      var items = arr(s.items).filter(function (it) {
        return !q || String(it.t || '').toLowerCase().indexOf(q) >= 0 || String(s.zh || '').toLowerCase().indexOf(q) >= 0 || String(s.en || '').toLowerCase().indexOf(q) >= 0;
      });
      if (!items.length) return;
      n += items.length;
      iconGrid.appendChild(h('div', { class: 'icon-sec' },
        h('h3', null, s.zh || s.key, h('span', { class: 'muted', style: { 'font-size': '12.5px', 'font-weight': '400', 'font-family': 'var(--disp)' } }, '  ' + (s.en || '') + ' · ' + items.length)),
        h('div', { class: 'icon-grid' }, items.map(function (it) {
          var src = KB.local(it.img);
          var b = h('button', { type: 'button', class: 'icon', 'aria-label': it.t + '（查看大图）' },
            h('span', { class: 'icon-pic' }, KB.img(src, '')), h('span', { class: 'icon-t' }, it.t));
          b.addEventListener('click', function () { KB.lightbox({ src: src, caption: it.t + ' · ' + (s.zh || ''), link: it.url, linkText: 'Wiki 页面' }); });
          return b;
        }))));
    });
    if (!n) iconGrid.appendChild(h('p', { class: 'empty' }, '没有匹配的图标。'));
    iconCount.textContent = n + ' / 177';
    var total = arr(IC.sections).reduce(function (a, s) { return a + arr(s.items).length; }, 0);
    iconCount.textContent = n + ' / ' + total + ' 个';
  }

  function render() {
    root.textContent = '';
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'CYBERWARE'),
      h('h1', null, '义体'),
      h('p', { class: 'lede' }, '上半部分是动画里义体的外形词典，下半部分是《赛博朋克 2077》的游戏义体图标（游戏风，不随「风格」开关变化）。')));

    var vh = h('section', { class: 'block', id: 'vocab' });
    root.appendChild(vh);
    renderVocab(vh);
    KB.onChange(function (k) { if (k === 'season') renderVocab(vh); });

    var ih = h('section', { class: 'block', id: 'icons' });
    iconCount = h('span', { class: 'n' });
    var head = KB.secHead('游戏义体图标', 'CP2077 icons');
    head.appendChild(iconCount);
    ih.appendChild(head);
    if (IC.meta) ih.appendChild(h('p', { class: 'note' }, [IC.meta.source, IC.meta.note].filter(Boolean).join('。')));

    var chips = h('div', { class: 'chips', role: 'group', 'aria-label': '按部位筛选' });
    var opts = [{ key: 'all', zh: '全部' }].concat(arr(IC.sections).map(function (s) { return { key: s.key, zh: s.short || s.zh || s.key, n: arr(s.items).length }; }));
    opts.forEach(function (o) {
      var b = h('button', { type: 'button', class: 'chip', 'aria-pressed': o.key === filt.sec ? 'true' : 'false', 'data-k': o.key }, o.zh, o.n ? h('span', { style: { opacity: '.6', 'margin-left': '4px' } }, String(o.n)) : null);
      b.addEventListener('click', function () {
        filt.sec = o.key;
        Array.prototype.forEach.call(chips.children, function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-k') === o.key ? 'true' : 'false'); });
        renderIcons();
      });
      chips.appendChild(b);
    });
    var search = h('input', { class: 'input', type: 'search', placeholder: '搜索图标名（英文）或部位', 'aria-label': '搜索义体图标' });
    search.addEventListener('input', function () { filt.q = search.value; renderIcons(); });
    ih.appendChild(h('div', { class: 'row', style: { 'margin-bottom': '10px' } }, search));
    ih.appendChild(chips);
    iconGrid = h('div', { 'aria-live': 'polite' });
    ih.appendChild(iconGrid);
    root.appendChild(ih);
    renderIcons();

    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView({ block: 'start' }); }, 50); }
  }

  KB.ready.then(function () {
    return Promise.all([KB.load('edgerunners_character_kb.json'), KB.load('cyberware_icons.json')]);
  }).then(function (r) {
    C = r[0]; IC = r[1];
    arr(C.characters).forEach(function (c) { CH[c.id] = c; });
    render();
  }).catch(function (e) { KB.fail(root, e); });
})();
