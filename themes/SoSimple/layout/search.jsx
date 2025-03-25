'use strict';

function withHexoData(t) {
    return t;
}

let e = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
function escapeAttr(e) {
    return (e || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
function escapeHtml(e) {
    return (e || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function h(t, r, ...l) {
    return 'string' == typeof t ? function(t, r, ...l) {
        if ('template' === (t = t.toLowerCase()) && null == r) return l.flat().join('');
        let a = `<${t}`;
        if (null != r) for (let [e, t] of Object.entries(r))!0 === t ? a += ` ${e}` : null == t || (a += ` ${e}="${escapeAttr(String(t))}"`);
        return e.includes(t) ? a += '>' : a += `>${l.flat().join('')}</${t}>`, a;
    }(t, r, ...l) : t(r, ...l);
}

function AsRecord(e) {
    return e;
}
function getThemeConfig(e) {
    return e.theme;
}

const Footer = ({ hexo: l })=>{
    let r = getThemeConfig(l);
    return /*#__PURE__*/ h("footer", {
        class: "footer"
    }, /*#__PURE__*/ h("br", null), r.footer.html ? /*#__PURE__*/ h("p", null, r.footer.html) : null, r.footer.text ? /*#__PURE__*/ h("p", null, escapeHtml(r.footer.text)) : null, r.footer.enable_powered_by ? /*#__PURE__*/ h("p", {
        class: "powered_by"
    }, "Powered by ", /*#__PURE__*/ h("a", {
        href: "https://hexo.io/"
    }, "Hexo"), " and", ' ', /*#__PURE__*/ h("a", {
        href: "https://github.com/Lhcfl/hexo-theme-sosimple"
    }, "SoSimple")) : null);
};

function i18n(n, r) {
    return n.__(r);
}

const Nav = ({ hexo: o })=>/*#__PURE__*/ h("nav", {
        class: "nav"
    }, Object.entries(getThemeConfig(o).menu).map(([n, t])=>/*#__PURE__*/ h("a", {
            href: o.url_for(t)
        }, i18n(o, n))).join('&nbsp;&nbsp;'));

const SharedLayout = (l, ...r)=>{
    var s, m, c, p, d;
    let f = l.hexo, h$1 = getThemeConfig(f);
    null !== (p = l.title) && void 0 !== p || (l.title = f.config.title), null !== (d = l.description) && void 0 !== d || (l.description = h$1.description || f.config.description);
    let u = AsRecord(f.page).keywords || (null === (c = f.page.tags) || void 0 === c ? void 0 : null === (m = c.data) || void 0 === m ? void 0 : null === (s = m.map((t)=>t.name)) || void 0 === s ? void 0 : s.join(',')) || f.theme.keywords, g = [
        'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&family=Noto+Serif+KR:wght@200..900&family=Noto+Serif+SC:wght@200..900&family=Noto+Serif+TC:wght@200..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap',
        'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
        f.url_for('css/font-awesome.min.css')
    ], y = g.map((t)=>`Utils.loadCSS("${t}");`).join('\n');
    return /*#__PURE__*/ h("html", {
        lang: f.config.language
    }, /*#__PURE__*/ h("head", null, /*#__PURE__*/ h("meta", {
        charset: "utf-8"
    }), /*#__PURE__*/ h("meta", {
        name: "X-UA-Compatible",
        content: "IE=edge"
    }), /*#__PURE__*/ h("meta", {
        name: "author",
        content: h$1.author
    }), /*#__PURE__*/ h("title", null, escapeHtml(l.title)), /*#__PURE__*/ h("meta", {
        name: "description",
        content: l.description
    }), /*#__PURE__*/ h("meta", {
        name: "keywords",
        content: u
    }), /*#__PURE__*/ h("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/ h("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
    }), /*#__PURE__*/ h("meta", {
        content: "black",
        name: "apple-mobile-web-app-status-bar-style"
    }), /*#__PURE__*/ h("meta", {
        content: "telephone=no",
        name: "format-detection"
    }), /*#__PURE__*/ h("meta", {
        id: "site_data_static",
        "data-url": f.url_for('/')
    }), /*#__PURE__*/ h("meta", {
        name: "renderer",
        content: "webkit"
    }), /*#__PURE__*/ h("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: f.url_for(f.theme.favicon)
    }), /*#__PURE__*/ h("link", {
        rel: "stylesheet",
        href: f.url_for('js_complied/bundle.css')
    }), /*#__PURE__*/ h("link", {
        rel: "alternate",
        type: "application/atom+xml",
        title: "ATOM 1.0",
        href: "/atom.xml"
    }), /*#__PURE__*/ h("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
    }), /*#__PURE__*/ h("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: ""
    }), /*#__PURE__*/ h("script", {
        src: f.url_for('js_complied/bundle.js')
    }), /*#__PURE__*/ h("script", null, y)), /*#__PURE__*/ h("body", {
        class: l.contentClass
    }, /*#__PURE__*/ h("noscript", null, g.map((t)=>/*#__PURE__*/ h("link", {
            rel: "stylesheet",
            href: t
        }))), /*#__PURE__*/ h(Nav, {
        hexo: f
    }), /*#__PURE__*/ h("main", {
        class: "main"
    }, ...r), /*#__PURE__*/ h(Footer, {
        hexo: f
    })));
};

var search = withHexoData((i)=>{
    let n = JSON.stringify({
        translation: {
            posts: i18n(i, 'insight.posts'),
            pages: i18n(i, 'insight.pages'),
            categories: i18n(i, 'insight.categories'),
            tags: i18n(i, 'insight.tags'),
            untitled: i18n(i, 'insight.untitled')
        }
    }), a = `${i18n(i, 'Search')} · ${i.config.title}`;
    return /*#__PURE__*/ h(SharedLayout, {
        hexo: i,
        title: a,
        description: a,
        contentClass: "search-page"
    }, /*#__PURE__*/ h("h1", null, i18n(i, 'Search')), /*#__PURE__*/ h("noscript", null, "You must enable Javascript to use insight search."), /*#__PURE__*/ h("script", null, "SoSimple.searchInit(", n, ")"), /*#__PURE__*/ h("div", {
        class: "searchbox ins-search"
    }, /*#__PURE__*/ h("div", {
        class: "searchbox-container"
    }, /*#__PURE__*/ h("input", {
        class: "ins-search-input",
        type: "text",
        placeholder: i18n(i, 'insight.hint')
    }), /*#__PURE__*/ h("div", {
        class: "ins-section-wrapper"
    }, /*#__PURE__*/ h("div", {
        class: "ins-section-container"
    }, "Looding...")))));
});

module.exports = search;
