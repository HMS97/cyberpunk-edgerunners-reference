/* 边缘行者知识库 · 共享脚本：顶栏、全局开关、数据加载、图片、复制、标签页、灯箱 */
(function () {
  'use strict';

  var KB = (window.KB = {});
  var LS_SEASON = 'erkb.season', LS_STYLE = 'erkb.style';

  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  var state = {
    season: lsGet(LS_SEASON, 'all'),
    style: lsGet(LS_STYLE, 'anime')
  };
  if (['all', '1', '2'].indexOf(state.season) < 0) state.season = 'all';
  if (['anime', 'game'].indexOf(state.style) < 0) state.style = 'anime';
  KB.state = state;

  /* ---------- DOM helper ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v == null || v === false) continue;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'style' && typeof v === 'object') { for (var s in v) el.style.setProperty(s, v[s]); }
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else if (v === true) el.setAttribute(k, '');
        else el.setAttribute(k, v);
      }
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { append(el, x); }); return; }
    if (typeof c === 'string' || typeof c === 'number') el.appendChild(document.createTextNode(String(c)));
    else el.appendChild(c);
  }
  KB.h = h;
  KB.isStr = function (v) { return typeof v === 'string' && v.trim() !== ''; };
  KB.arr = function (v) { return Array.isArray(v) ? v : []; };

  /* ---------- data ---------- */
  var cache = {};
  KB.load = function (name) {
    if (!cache[name]) {
      cache[name] = fetch('../' + name, { cache: 'no-cache' }).then(function (r) {
        if (!r.ok) throw new Error(name + ' HTTP ' + r.status);
        return r.json();
      });
    }
    return cache[name];
  };
  KB.manifest = {};
  KB.ready = KB.load('assets/manifest.json').then(function (m) { KB.manifest = m || {}; }).catch(function () { KB.manifest = {}; });

  /* 图片地址：优先 *_local，其次 manifest，最后 null（显示占位） */
  KB.local = function (url) {
    if (!KB.isStr(url)) return null;
    if (/^https?:/i.test(url)) return KB.manifest[url] ? '../' + KB.manifest[url] : null;
    return '../' + url.replace(/^\.?\//, '');
  };
  KB.imgSrc = function (im, size) {
    if (!im) return null;
    if (typeof im === 'string') return KB.local(im);
    var full = size === 'full';
    var loc = full ? (im.full_local || im.thumb_local) : (im.thumb_local || im.full_local);
    if (KB.isStr(loc)) return '../' + loc;
    return KB.local(full ? (im.full || im.thumb) : (im.thumb || im.full));
  };
  KB.placeholder = function (label) { return h('div', { class: 'ph', role: 'img', 'aria-label': label || '暂无本地图片' }, label || '暂无本地图片'); };
  KB.img = function (src, alt, cls) {
    if (!src) return KB.placeholder();
    var img = h('img', { src: src, alt: alt || '', loading: 'lazy', decoding: 'async', class: cls || null });
    img.addEventListener('error', function () {
      if (img.parentNode) img.parentNode.replaceChild(KB.placeholder('图片加载失败'), img);
    });
    return img;
  };

  /* ---------- styles ---------- */
  var STYLE_LABEL = { anime: '动画', anime_s2: 'S2动画', game: '游戏' };
  var SET_LABEL = { anime: '第一季动画', anime_s2: '第二季动画', game: '游戏', plain: '纯描述' };
  KB.STYLE_LABEL = STYLE_LABEL; KB.SET_LABEL = SET_LABEL;
  KB.badge = function (style) {
    if (!style) return null;
    return h('span', { class: 'badge ' + (STYLE_LABEL[style] ? style : 'neutral') }, STYLE_LABEL[style] || style);
  };
  /* 当前风格下应选的提示词集 */
  KB.setFor = function (season) {
    if (state.style === 'game') return 'game';
    return String(season) === '2' ? 'anime_s2' : 'anime';
  };
  KB.seasonOk = function (season) { return state.season === 'all' || String(season) === state.season; };
  /* 图片排序：当前风格的排前面（稳定排序） */
  KB.sortImages = function (images) {
    var list = KB.arr(images).map(function (im, i) { return { im: im, i: i }; });
    var game = state.style === 'game';
    list.sort(function (a, b) {
      var ka = ((a.im.style === 'game') === game) ? 0 : 1;
      var kb = ((b.im.style === 'game') === game) ? 0 : 1;
      return ka - kb || a.i - b.i;
    });
    return list.map(function (x) { return x.im; });
  };

  /* ---------- copy ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return fallbackCopy(text); });
    }
    return fallbackCopy(text);
  }
  function fallbackCopy(text) {
    return new Promise(function (res, rej) {
      var ta = h('textarea', { readonly: true, style: { position: 'fixed', top: '-1000px', left: '0', opacity: '0' } });
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? res() : rej(new Error('copy failed')); } catch (e) { rej(e); }
      document.body.removeChild(ta);
    });
  }
  KB.copyText = copyText;
  KB.copyBtn = function (text, label) {
    var lab = label || '复制';
    var b = h('button', { type: 'button', class: 'copy', 'aria-label': lab === '复制' ? '复制文本' : lab }, lab);
    b._copy = text;
    b.addEventListener('click', function () {
      copyText(String(b._copy || '')).then(function () {
        b.textContent = '已复制'; b.classList.add('done');
        clearTimeout(b._t); b._t = setTimeout(function () { b.textContent = lab; b.classList.remove('done'); }, 1500);
      }, function () { b.textContent = '复制失败'; setTimeout(function () { b.textContent = lab; }, 1500); });
    });
    return b;
  };
  /* 带标题和复制按钮的文本框 */
  KB.pbox = function (title, text, neg) {
    if (!KB.isStr(text)) return null;
    return h('div', { class: 'pbox' },
      h('div', { class: 'pbox-h' }, h('b', null, title), KB.copyBtn(text)),
      h('div', { class: 'pre' + (neg ? ' neg' : '') }, text));
  };
  /* 一套提示词 {en, zh, negative_en, negative_zh} */
  KB.promptSet = function (p) {
    if (!p) return KB.placeholder('无');
    if (typeof p === 'string') return KB.pbox('提示词', p);
    return h('div', null,
      KB.pbox('EN 提示词', p.en),
      KB.pbox('中文提示词', p.zh),
      KB.pbox('负面词 EN', p.negative_en, true),
      KB.pbox('负面词 中文', p.negative_zh, true));
  };

  /* ---------- tabs ---------- */
  var tabSeq = 0;
  /* items: [{key,label,render()}]; opts: {active, big, onChange} */
  KB.tabs = function (items, opts) {
    opts = opts || {};
    var id = 'tb' + (++tabSeq);
    var list = h('div', { class: 'tablist' + (opts.big ? ' big' : ''), role: 'tablist', 'aria-label': opts.label || '标签页' });
    var wrap = h('div', { class: 'tabs' }, list);
    var btns = [], panels = [];
    var activeKey = items.some(function (it) { return it.key === opts.active; }) ? opts.active : (items[0] && items[0].key);
    items.forEach(function (it, i) {
      var b = h('button', { type: 'button', role: 'tab', id: id + '-t' + i, 'aria-controls': id + '-p' + i }, it.label);
      var p = h('div', { role: 'tabpanel', id: id + '-p' + i, 'aria-labelledby': id + '-t' + i, tabindex: '0' });
      p._render = it.render; p._done = false;
      b.addEventListener('click', function () { select(i, true); });
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % items.length;
        else if (e.key === 'ArrowLeft') n = (i - 1 + items.length) % items.length;
        else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = items.length - 1;
        if (n != null) { e.preventDefault(); select(n, true); btns[n].focus(); }
      });
      btns.push(b); panels.push(p); list.appendChild(b); wrap.appendChild(p);
    });
    function select(i, user) {
      btns.forEach(function (b, j) {
        var on = i === j;
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
        panels[j].hidden = !on;
        if (on && !panels[j]._done) { panels[j]._done = true; append(panels[j], panels[j]._render()); }
      });
      if (user && opts.onChange) opts.onChange(items[i].key);
    }
    select(Math.max(0, items.findIndex(function (it) { return it.key === activeKey; })), false);
    wrap.select = function (key) { var i = items.findIndex(function (it) { return it.key === key; }); if (i >= 0) select(i, false); };
    return wrap;
  };

  /* 提示词面板：sets = {anime:{..}, game:{..}}；默认跟随全局风格 */
  KB.promptPanel = function (sets, season, extra) {
    sets = sets || {};
    var order = ['anime', 'anime_s2', 'game'];
    var keys = order.filter(function (k) { return sets[k]; }).concat(Object.keys(sets).filter(function (k) { return order.indexOf(k) < 0; }));
    var items = keys.map(function (k) {
      return { key: k, label: (sets[k] && sets[k].label) || SET_LABEL[k] || k, render: function () { return KB.promptSet(sets[k]); } };
    });
    (extra || []).forEach(function (x) { items.push(x); });
    if (!items.length) return h('p', { class: 'muted' }, '没有提示词数据。');
    var want = KB.setFor(season);
    if (!sets[want]) want = keys.filter(function (k) { return (k === 'game') === (state.style === 'game'); })[0] || keys[0];
    return KB.tabs(items, { active: want, label: '提示词集' });
  };

  /* ---------- swatches ---------- */
  KB.swatches = function (colors, large) {
    var w = h('div', { class: 'swatches' });
    if (Array.isArray(colors)) {
      colors.forEach(function (c) { if (KB.isStr(c)) w.appendChild(h('span', { class: 'sw', title: c }, h('i', { style: { background: c } }), c.toUpperCase())); });
    } else if (colors && typeof colors === 'object') {
      Object.keys(colors).forEach(function (k) {
        var c = colors[k]; if (!KB.isStr(c)) return;
        w.appendChild(h('span', { class: 'sw' + (large ? ' lg' : ''), title: k + ' ' + c }, h('i', { style: { background: c } }), h('span', null, c.toUpperCase(), large ? h('small', null, ' ' + k.replace(/_/g, ' ')) : null)));
      });
    }
    return w;
  };

  /* ---------- gallery ---------- */
  KB.gallery = function (images, opts) {
    opts = opts || {};
    var list = KB.sortImages(images);
    var g = h('div', { class: 'gallery' });
    if (!list.length) { g.appendChild(h('p', { class: 'muted' }, '暂无图片。')); return g; }
    list.forEach(function (im) {
      var src = KB.imgSrc(im, 'thumb');
      var cap = [im.type || im.label || '', im.file ? ' · ' + im.file : ''].join('');
      var btn = h('button', { type: 'button', class: 'thumb', 'aria-label': '放大查看：' + (im.label || im.type || im.file || '图片') },
        KB.img(src, im.label || im.type || im.file || ''), KB.badge(im.style));
      btn.addEventListener('click', function () {
        KB.lightbox({ src: KB.imgSrc(im, 'full') || src, caption: cap, link: im.source_page, linkText: 'Wiki 文件页' });
      });
      g.appendChild(h('figure', null, btn, h('figcaption', null, im.label || im.type || '',
        KB.isStr(im.source_page) ? [' · ', h('a', { href: im.source_page, target: '_blank', rel: 'noopener' }, '来源')] : null)));
    });
    return g;
  };

  /* ---------- lightbox ---------- */
  var lb, lbImg, lbCap, lbLast;
  function ensureLb() {
    if (lb) return;
    lbImg = h('img', { alt: '' });
    lbCap = h('div', { class: 'lb-cap' });
    var close = h('button', { type: 'button', class: 'lb-close', 'aria-label': '关闭大图' }, '关闭 ✕');
    lb = h('div', { class: 'lb', role: 'dialog', 'aria-modal': 'true', 'aria-label': '大图', hidden: true }, close, lbImg, lbCap);
    close.addEventListener('click', KB.closeLightbox);
    lb.addEventListener('click', function (e) { if (e.target === lb) KB.closeLightbox(); });
    lb.addEventListener('keydown', function (e) { if (e.key === 'Tab') { e.preventDefault(); var f = lb.querySelectorAll('button,a[href]'); var a = Array.prototype.indexOf.call(f, document.activeElement); f[(a + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus(); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lb && !lb.hidden) KB.closeLightbox(); });
    document.body.appendChild(lb);
  }
  KB.lightbox = function (o) {
    ensureLb();
    lbLast = document.activeElement;
    lbImg.removeAttribute('src');
    if (o.src) { lbImg.hidden = false; lbImg.src = o.src; lbImg.alt = o.caption || ''; } else { lbImg.hidden = true; }
    lbCap.textContent = '';
    append(lbCap, [o.caption || '', o.link ? [' · ', h('a', { href: o.link, target: '_blank', rel: 'noopener' }, o.linkText || '来源')] : null]);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb-close').focus();
  };
  KB.closeLightbox = function () {
    if (!lb || lb.hidden) return;
    lb.hidden = true; document.body.style.overflow = '';
    if (lbLast && lbLast.focus) lbLast.focus();
  };

  /* ---------- section header ---------- */
  KB.secHead = function (title, en, n) {
    return h('div', { class: 'sec-h' }, h('h2', null, title), en ? h('span', { class: 'en' }, en) : null, n != null ? h('span', { class: 'n' }, n) : null);
  };
  KB.section = function (id, title, en, n) {
    return h('section', { class: 'block', id: id, 'aria-labelledby': id + '-h' }, (function () { var s = KB.secHead(title, en, n); s.querySelector('h2').id = id + '-h'; return s; })());
  };

  /* ---------- chrome: top bar + footer ---------- */
  var PAGES = [['index', '首页'], ['styles', '画风'], ['characters', '角色'], ['scenes', '场景'], ['cyberware', '义体']];
  var listeners = [];
  KB.onChange = function (fn) { listeners.push(fn); };
  function emit(what) { listeners.forEach(function (fn) { try { fn(what); } catch (e) { console.error(e); } }); }

  function seg(label, key, opts) {
    var wrap = h('div', { class: 'seg', role: 'group', 'aria-label': label });
    var btns = h('div', { class: 'seg-btns' });
    opts.forEach(function (o) {
      var b = h('button', { type: 'button', 'aria-pressed': state[key] === o[0] ? 'true' : 'false', 'data-v': o[0] }, o[1]);
      b.addEventListener('click', function () {
        if (state[key] === o[0]) return;
        state[key] = o[0];
        lsSet(key === 'season' ? LS_SEASON : LS_STYLE, o[0]);
        Array.prototype.forEach.call(btns.children, function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-v') === o[0] ? 'true' : 'false'); });
        emit(key);
      });
      btns.appendChild(b);
    });
    wrap.appendChild(h('span', { 'aria-hidden': 'true' }, label + '：'));
    wrap.appendChild(btns);
    return wrap;
  }

  function chrome() {
    var page = document.body.getAttribute('data-page') || 'index';
    var nav = h('nav', { class: 'nav', 'aria-label': '主导航' });
    PAGES.forEach(function (p) { nav.appendChild(h('a', { href: p[0] + '.html', 'aria-current': p[0] === page ? 'page' : null }, p[1])); });
    var bar = h('header', { class: 'topbar' },
      h('div', { class: 'topbar-in' },
        h('a', { class: 'brand', href: 'index.html' }, '边缘行者知识库'),
        nav,
        h('div', { class: 'toggles' },
          seg('季', 'season', [['all', '全部'], ['1', '第一季'], ['2', '第二季']]),
          seg('风格', 'style', [['anime', '动画'], ['game', '游戏']]))));
    document.body.insertBefore(bar, document.body.firstChild);
    document.body.insertBefore(h('a', { class: 'skip', href: '#main' }, '跳到正文'), bar);
    document.body.appendChild(h('footer', { class: 'foot' }, '角色与图片版权归 CD PROJEKT RED / Studio Trigger，本站为非商业粉丝参考资料，仅供个人设计参考。数据来源：',
      h('a', { href: 'https://cyberpunk.fandom.com', target: '_blank', rel: 'noopener' }, 'cyberpunk.fandom.com'),
      '。侵权必删：版权方请通过 ',
      h('a', { href: 'https://github.com/HMS97/cyberpunk-edgerunners-reference/issues', target: '_blank', rel: 'noopener' }, 'GitHub Issues'),
      ' 联系，相关内容会尽快删除。'));
  }

  /* 其他标签页改了开关时同步 */
  window.addEventListener('storage', function (e) {
    if (e.key === LS_SEASON || e.key === LS_STYLE) {
      var key = e.key === LS_SEASON ? 'season' : 'style';
      if (e.newValue && e.newValue !== state[key]) {
        state[key] = e.newValue;
        document.querySelectorAll('.seg-btns button').forEach(function (b) {
          var grp = b.closest('.seg').getAttribute('aria-label') === '季' ? 'season' : 'style';
          if (grp === key) b.setAttribute('aria-pressed', b.getAttribute('data-v') === e.newValue ? 'true' : 'false');
        });
        emit(key);
      }
    }
  });

  KB.fail = function (root, err) {
    console.error(err);
    root.textContent = '';
    root.appendChild(h('p', { class: 'err' }, '数据加载失败：' + (err && err.message ? err.message : err) + '。请通过本地 HTTP 服务打开本页面（例如 python3 -m http.server）。'));
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', chrome); else chrome();
})();
