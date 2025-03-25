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
function withTagsCategories(e) {
    return e;
}

function i18n(n, r) {
    return n.__(r);
}

const PostToc = ({ hexo: i, item: r })=>{
    if (AsRecord(r).toc && getThemeConfig(i).toc_max_depth > 0) {
        let o = i.toc(r.content || '', {
            class: 'toclist',
            list_number: !1,
            max_depth: getThemeConfig(i).toc_max_depth
        });
        return /*#__PURE__*/ h("section", {
            class: "post-toc"
        }, /*#__PURE__*/ h("details", {
            open: !0
        }, /*#__PURE__*/ h("summary", null, i18n(i, 'TOC')), /*#__PURE__*/ h("div", {
            class: "toc"
        }, o)));
    }
    return '';
};

const IconSpan = ({ icon: t, hexo: i }, ...n)=>/*#__PURE__*/ h("span", {
        class: "info"
    }, getThemeConfig(i).style.post_meta.show_icon ? /*#__PURE__*/ h("i", {
        class: `fa ${t}`
    }) : null, " ", ...n, "  ");

const PostMeta = ({ hexo: i, item: l })=>{
    var n, d, m, s;
    return /*#__PURE__*/ h("section", {
        class: "post-meta"
    }, /*#__PURE__*/ h(IconSpan, {
        hexo: i,
        icon: "fa-calendar"
    }, /*#__PURE__*/ h("span", {
        class: "date"
    }, i.date(l.date, getThemeConfig(i).style.post_meta.date_format))), null === (d = withTagsCategories(l).categories) || void 0 === d ? void 0 : null === (n = d.data) || void 0 === n ? void 0 : n.map((t)=>{
        var e;
        return /*#__PURE__*/ h(IconSpan, {
            hexo: i,
            icon: "fa-folder-o"
        }, /*#__PURE__*/ h("a", {
            href: i.url_for(null !== (e = t.path) && void 0 !== e ? e : ''),
            title: t.name
        }, escapeHtml(t.name)));
    }), null === (s = withTagsCategories(l).tags) || void 0 === s ? void 0 : null === (m = s.data) || void 0 === m ? void 0 : m.map((t)=>{
        var e;
        return /*#__PURE__*/ h(IconSpan, {
            hexo: i,
            icon: "fa-tag"
        }, /*#__PURE__*/ h("a", {
            href: i.url_for(null !== (e = t.path) && void 0 !== e ? e : ''),
            title: t.name
        }, escapeHtml(t.name)));
    }));
};

function titleHTML(i, e = '') {
    return AsRecord(i).titleHTML || escapeHtml(i.title || '') || e;
}

const PostFull = ({ hexo: i, item: l })=>/*#__PURE__*/ h("article", {
        class: "post-container post-full"
    }, /*#__PURE__*/ h("header", {
        class: "post-title"
    }, /*#__PURE__*/ h("h1", null, titleHTML(l))), /*#__PURE__*/ h(PostToc, {
        hexo: i,
        item: l
    }), /*#__PURE__*/ h("section", {
        class: "post-body"
    }, l.content), /*#__PURE__*/ h(PostMeta, {
        hexo: i,
        item: l
    }));

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

const GitalkComment = ({ hexo: i, item: n })=>{
    var r;
    let o = 'gitalk-comment-slot', l = null === (r = getThemeConfig(i).comment) || void 0 === r ? void 0 : r.gitalk;
    if (!l) return '';
    let c = JSON.stringify({
        clientID: l.clientID,
        clientSecret: l.clientSecret,
        repo: l.repo,
        owner: l.owner,
        admin: l.admin,
        id: (n.title || n.source || 'undefined').slice(0, 49),
        distractionFreeMode: l.distractionFreeMode
    });
    return /*#__PURE__*/ h("div", {
        class: "comment-container"
    }, /*#__PURE__*/ h("script", {
        defer: !0,
        src: "https://unpkg.com/gitalk/dist/gitalk.min.js",
        onload: `(new Gitalk(${c})).render("${o}")`
    }), /*#__PURE__*/ h("div", {
        id: o
    }, "Loading..."));
};

const Comment = ({ hexo: e, item: i })=>{
    var r;
    let n = '';
    return !1 === i.comments ? '' : (null === (r = getThemeConfig(e).comment) || void 0 === r ? void 0 : r.enable) !== 'gitalk' ? '' : (n = /*#__PURE__*/ h(GitalkComment, {
        hexo: e,
        item: i
    }), /*#__PURE__*/ h("article", {
        class: "comment-container"
    }, n));
};

var page = withHexoData((e)=>{
    let r = e.page.description || e.strip_html(e.page.content).replace(/^\s*/, '').replace(/\s*$/, '').slice(0, 150), m = `${e.page.title} · ${e.config.title}`;
    return /*#__PURE__*/ h(SharedLayout, {
        hexo: e,
        title: m,
        description: r,
        contentClass: "post-page page-page"
    }, /*#__PURE__*/ h(PostFull, {
        hexo: e,
        item: e.page
    }), /*#__PURE__*/ h(Comment, {
        hexo: e,
        item: e.page
    }));
});

module.exports = page;
