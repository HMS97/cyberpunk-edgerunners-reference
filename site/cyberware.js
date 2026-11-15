(function () {
  'use strict';
  var h = KB.h, arr = KB.arr, isStr = KB.isStr, t = KB.t, tr = KB.tr, root = document.getElementById('root');
  var C, IC, CH = {};
  var filt = { sec: 'all', q: '' };
  var iconGrid, iconCount;

  function vocabCard(v) {
    var seen = arr(v.seen_on).filter(function (id) { return !CH[id] || KB.seasonOk(CH[id].season); });
    return h('article', { class: 'panel accent-cyan', id: 'v-' + v.id },
      h('h3', { style: { 'margin-bottom': '2px' } }, KB.nm(v)),
      h('div', { class: 'muted', style: { 'font-size': '12.5px', 'font-family': 'var(--disp)' } }, v.id + (v.slot ? ' · ' : ''), v.slot ? h('span', { style: { 'font-family': 'var(--sans)' } }, tr(v.slot)) : null),
      isStr(v.visual) ? h('p', { style: { 'margin-top': '8px' } }, tr(v.visual)) : null,
      isStr(v.effect_visual) ? h('p', { class: 'muted' }, h('b', { style: { color: 'var(--yel)' } }, t('cw.effect')), tr(v.effect_visual)) : null,
      KB.pbox('prompt_en', v.prompt_en),
      seen.length ? h('div', { style: { 'margin-top': '10px' } }, h('span', { class: 'muted', style: { 'font-size': '13px' } }, t('cw.seenOn')),
        h('span', { class: 'chips', style: { display: 'inline-flex', 'flex-wrap': 'wrap' } }, seen.map(function (id) {
          return h('a', { class: 'tag', href: 'characters.html#' + encodeURIComponent(id) }, CH[id] ? KB.cname(CH[id]) : id);
        }))) : null);
  }

  function renderVocab(host) {
    var all = arr(C.cyberware_vocab);
    var list = all.filter(function (v) {
      var s = arr(v.seen_on);
      return !s.length || s.some(function (id) { return !CH[id] || KB.seasonOk(CH[id].season); });
    });
    host.textContent = '';
    host.appendChild(KB.secHead(t('cw.vocab'), 'Cyberware vocab', t('cw.entries', { n: list.length + (list.length !== all.length ? ' / ' + all.length : '') })));
    host.appendChild(h('p', { class: 'note' }, t('cw.vocabNote')));
    host.appendChild(h('div', { class: 'grid' }, list.map(vocabCard)));
  }

  function renderIcons() {
    var q = filt.q.trim().toLowerCase();
    var n = 0;
    iconGrid.textContent = '';
    arr(IC.sections).forEach(function (s) {
      if (filt.sec !== 'all' && s.key !== filt.sec) return;
      var items = arr(s.items).filter(function (it) {
        return !q || [it.t, tr(it.t), s.zh, s.en, s.short, tr(s.short)].some(function (x) { return String(x || '').toLowerCase().indexOf(q) >= 0; });
      });
      if (!items.length) return;
      n += items.length;
      iconGrid.appendChild(h('div', { class: 'icon-sec' },
        h('h3', null, KB.zhen(s) || s.key, h('span', { class: 'muted', style: { 'font-size': '12.5px', 'font-weight': '400', 'font-family': 'var(--disp)' } }, '  ' + (KB.en() ? '' : (s.en || '') + ' · ') + items.length)),
        h('div', { class: 'icon-grid' }, items.map(function (it) {
          var src = KB.local(it.img), name = tr(it.t);
          var b = h('button', { type: 'button', class: 'icon', 'aria-label': t('cw.iconAria', { t: name }) },
            h('span', { class: 'icon-pic' }, KB.img(src, '')), h('span', { class: 'icon-t' }, name));
          b.addEventListener('click', function () { KB.lightbox({ src: src, caption: name + ' · ' + (KB.zhen(s) || ''), link: it.url, linkText: t('wiki.page') }); });
          return b;
        }))));
    });
    if (!n) iconGrid.appendChild(h('p', { class: 'empty' }, t('cw.noMatch')));
    var total = arr(IC.sections).reduce(function (a, s) { return a + arr(s.items).length; }, 0);
    iconCount.textContent = t('cw.count', { n: n, total: total });
  }

  function render() {
    root.textContent = '';
    root.appendChild(h('div', { class: 'hero' },
      h('span', { class: 'kicker' }, 'CYBERWARE'),
      h('h1', null, t('cw.h1')),
      h('p', { class: 'lede' }, t('cw.lede'))));

    var vh = h('section', { class: 'block', id: 'vocab' });
    vocabHost = vh;
    root.appendChild(vh);
    renderVocab(vh);

    var ih = h('section', { class: 'block', id: 'icons' });
    iconCount = h('span', { class: 'n' });
    var head = KB.secHead(t('cw.icons'), 'CP2077 icons');
    head.appendChild(iconCount);
    ih.appendChild(head);
    if (IC.meta) ih.appendChild(h('p', { class: 'note' }, [IC.meta.source, IC.meta.note].filter(Boolean).map(tr).join(KB.en() ? '. ' : '。')));

    var chips = h('div', { class: 'chips', role: 'group', 'aria-label': t('cw.filterAria') });
    var opts = [{ key: 'all', zh: t('cw.all') }].concat(arr(IC.sections).map(function (s) {
      return { key: s.key, zh: KB.en() ? (isStr(s.short) && tr(s.short) !== s.short ? tr(s.short) : (s.en || s.key)) : (s.short || s.zh || s.key), n: arr(s.items).length };
    }));
    opts.forEach(function (o) {
      var b = h('button', { type: 'button', class: 'chip', 'aria-pressed': o.key === filt.sec ? 'true' : 'false', 'data-k': o.key }, o.zh, o.n ? h('span', { style: { opacity: '.6', 'margin-left': '4px' } }, String(o.n)) : null);
      b.addEventListener('click', function () {
        filt.sec = o.key;
        Array.prototype.forEach.call(chips.children, function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-k') === o.key ? 'true' : 'false'); });
        renderIcons();
      });
      chips.appendChild(b);
    });
    var search = h('input', { class: 'input', type: 'search', placeholder: t('cw.search'), 'aria-label': t('cw.searchAria') });
    search.value = filt.q;
    search.addEventListener('input', function () { filt.q = search.value; renderIcons(); });
    ih.appendChild(h('div', { class: 'row', style: { 'margin-bottom': '10px' } }, search));
    ih.appendChild(chips);
    iconGrid = h('div', { 'aria-live': 'polite' });
    ih.appendChild(iconGrid);
    root.appendChild(ih);
    renderIcons();

  }
  var vocabHost = null;

  KB.ready.then(function () {
    return Promise.all([KB.load('edgerunners_character_kb.json'), KB.load('cyberware_icons.json')]);
  }).then(function (r) {
    C = r[0]; IC = r[1];
    arr(C.characters).forEach(function (c) { CH[c.id] = c; });
    render();
    if (location.hash) { var el = document.getElementById(location.hash.slice(1)); if (el) setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 50); }
    KB.onChange(function (k) {
      if (k === 'season') renderVocab(vocabHost);
      else if (k === 'lang') { var y = window.scrollY; render(); window.scrollTo(0, y); }
    });
  }).catch(function (e) { KB.fail(root, e); });
})();
