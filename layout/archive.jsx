'use strict';

function withHexoData(cb) {
    return cb;
}

function _array_like_to_array$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$2(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes$1(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$3(arr);
}
function _iterable_to_array$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit$2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array$2(arr, i) {
    return _array_with_holes$2(arr) || _iterable_to_array_limit$2(arr, i) || _unsupported_iterable_to_array$3(arr, i) || _non_iterable_rest$2();
}
function _to_consumable_array$1(arr) {
    return _array_without_holes$1(arr) || _iterable_to_array$1(arr) || _unsupported_iterable_to_array$3(arr) || _non_iterable_spread$1();
}
function _unsupported_iterable_to_array$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$3(o, minLen);
}
var SELF_CLOSING = [
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
function escapeAttr(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
function escapeHtml(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function h_str(tagName, attrs) {
    for(var _len = arguments.length, content = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        content[_key - 2] = arguments[_key];
    }
    tagName = tagName.toLowerCase();
    if (tagName === 'template' && attrs == null) {
        return content.flat().join('');
    }
    var str = "<".concat(tagName);
    if (attrs != null) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(attrs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array$2(_step.value, 2), key = _step_value[0], val = _step_value[1];
                if (val === true) {
                    str += " ".concat(key);
                } else if (val == null) {
                // continue
                } else {
                    str += " ".concat(key, '="').concat(escapeAttr(String(val)), '"');
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    if (SELF_CLOSING.includes(tagName)) {
        str += '>';
    } else {
        str += ">".concat(content.flat().join(''), "</").concat(tagName, ">");
    }
    return str;
}
function h(elem, attrs) {
    for(var _len = arguments.length, content = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        content[_key - 2] = arguments[_key];
    }
    var str = typeof elem === 'string' ? h_str.apply(void 0, [
        elem,
        attrs
    ].concat(_to_consumable_array$1(content))) : elem.apply(void 0, [
        attrs
    ].concat(_to_consumable_array$1(content)));
    return str;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function AsRecord(page) {
    return page;
}
function getThemeConfig(hexo) {
    return hexo.theme;
}
function withPrevNext(page) {
    return page;
}
function isPostPage(page) {
    return typeof page.prev_link === 'undefined' && typeof page.next_link === 'undefined';
}

var Footer = function(param) {
    var hexo = param.hexo;
    var theme = getThemeConfig(hexo);
    return /*#__PURE__*/ h("footer", {
        class: "footer"
    }, /*#__PURE__*/ h("br", null), theme.footer.html ? /*#__PURE__*/ h("p", null, theme.footer.html) : null, theme.footer.text ? /*#__PURE__*/ h("p", null, escapeHtml(theme.footer.text)) : null, theme.footer.enable_powered_by ? /*#__PURE__*/ h("p", {
        class: "powered_by"
    }, "Powered by ", /*#__PURE__*/ h("a", {
        href: "https://hexo.io/"
    }, "Hexo"), " and", ' ', /*#__PURE__*/ h("a", {
        href: "https://github.com/Lhcfl/hexo-theme-sosimple"
    }, "SoSimple")) : null);
};

function i18n(hexo, key) {
    return hexo.__(key);
}

function _array_like_to_array$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes$1(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array$1(arr, i) {
    return _array_with_holes$1(arr) || _iterable_to_array_limit$1(arr, i) || _unsupported_iterable_to_array$2(arr, i) || _non_iterable_rest$1();
}
function _unsupported_iterable_to_array$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$2(o, minLen);
}
var Nav = function(param) {
    var hexo = param.hexo;
    return /*#__PURE__*/ h("nav", {
        class: "nav"
    }, Object.entries(getThemeConfig(hexo).menu).map(function(param) {
        var _param = _sliced_to_array$1(param, 2), menu_name = _param[0], link = _param[1];
        return /*#__PURE__*/ h("a", {
            href: hexo.url_for(link)
        }, i18n(hexo, menu_name));
    }).join('&nbsp;&nbsp;'));
};

function _array_like_to_array$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array$1(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array$1(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$1(o, minLen);
}
var SharedLayout = function(param) {
    for(var _len = arguments.length, content = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        content[_key - 1] = arguments[_key];
    }
    var _hexo_page_tags_data_map, _hexo_page_tags_data, _hexo_page_tags;
    var _param, _param1;
    var hexo = param.hexo;
    var theme = getThemeConfig(hexo);
    var _title;
    (_title = (_param = param).title) !== null && _title !== void 0 ? _title : _param.title = hexo.config.title;
    var _description;
    (_description = (_param1 = param).description) !== null && _description !== void 0 ? _description : _param1.description = theme.description || hexo.config.description;
    var keywords = AsRecord(hexo.page).keywords || ((_hexo_page_tags = hexo.page.tags) === null || _hexo_page_tags === void 0 ? void 0 : (_hexo_page_tags_data = _hexo_page_tags.data) === null || _hexo_page_tags_data === void 0 ? void 0 : (_hexo_page_tags_data_map = _hexo_page_tags_data.map(function(t) {
        return t.name;
    })) === null || _hexo_page_tags_data_map === void 0 ? void 0 : _hexo_page_tags_data_map.join(',')) || hexo.theme.keywords;
    var lazyLoadCSSs = [
        'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&family=Noto+Serif+KR:wght@200..900&family=Noto+Serif+SC:wght@200..900&family=Noto+Serif+TC:wght@200..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap',
        'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
        hexo.url_for('css/font-awesome.min.css')
    ];
    var lazyLoadCSSScript = lazyLoadCSSs.map(function(src) {
        return 'Utils.loadCSS("'.concat(src, '");');
    }).join('\n');
    return /*#__PURE__*/ h("html", {
        lang: hexo.config.language
    }, /*#__PURE__*/ h("head", null, /*#__PURE__*/ h("meta", {
        charset: "utf-8"
    }), /*#__PURE__*/ h("meta", {
        name: "X-UA-Compatible",
        content: "IE=edge"
    }), /*#__PURE__*/ h("meta", {
        name: "author",
        content: theme.author
    }), /*#__PURE__*/ h("title", null, escapeHtml(param.title)), /*#__PURE__*/ h("meta", {
        name: "description",
        content: param.description
    }), /*#__PURE__*/ h("meta", {
        name: "keywords",
        content: keywords
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
        "data-url": hexo.url_for('/')
    }), /*#__PURE__*/ h("meta", {
        name: "renderer",
        content: "webkit"
    }), /*#__PURE__*/ h("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: hexo.url_for(hexo.theme.favicon)
    }), /*#__PURE__*/ h("link", {
        rel: "stylesheet",
        href: hexo.url_for('js_complied/bundle.css')
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
        src: hexo.url_for('js_complied/bundle.js')
    }), /*#__PURE__*/ h("script", null, lazyLoadCSSScript)), /*#__PURE__*/ h("body", {
        class: param.contentClass
    }, /*#__PURE__*/ h("noscript", null, lazyLoadCSSs.map(function(src) {
        return /*#__PURE__*/ h("link", {
            rel: "stylesheet",
            href: src
        });
    })), /*#__PURE__*/ h(Nav, {
        hexo: hexo
    }), /*#__PURE__*/ h.apply(void 0, [
        "main",
        {
            class: "main"
        }
    ].concat(_to_consumable_array(content))), /*#__PURE__*/ h(Footer, {
        hexo: hexo
    })));
};

function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var PaginationPager = function(param) {
    var hexo = param.hexo, item = param.item;
    var _pager_prev, _pager_prev1, _pager_next, _pager_next1;
    var pager = withPrevNext(item);
    var _ref = _sliced_to_array(isPostPage(pager) ? [
        {
            item: pager.prev,
            link: ((_pager_prev = pager.prev) === null || _pager_prev === void 0 ? void 0 : _pager_prev.path) || '',
            title: (_pager_prev1 = pager.prev) === null || _pager_prev1 === void 0 ? void 0 : _pager_prev1.title,
            translation: i18n(hexo, 'prev_post')
        },
        {
            item: pager.next,
            link: ((_pager_next = pager.next) === null || _pager_next === void 0 ? void 0 : _pager_next.path) || '',
            title: (_pager_next1 = pager.next) === null || _pager_next1 === void 0 ? void 0 : _pager_next1.title,
            translation: i18n(hexo, 'next_post')
        }
    ] : [
        {
            item: pager.prev,
            link: pager.prev_link || '',
            title: null,
            translation: i18n(hexo, 'prev')
        },
        {
            item: pager.next,
            link: pager.next_link || '',
            title: null,
            translation: i18n(hexo, 'next')
        }
    ], 2), prev = _ref[0], next = _ref[1];
    return /*#__PURE__*/ h("p", {
        class: "pagination"
    }, prev.item ? /*#__PURE__*/ h("a", {
        href: hexo.url_for(prev.link),
        title: prev.title
    }, prev.translation) : null, prev.item && next.item ? /*#__PURE__*/ h("span", null, "\xa0\xa0") : null, next.item ? /*#__PURE__*/ h("a", {
        href: hexo.url_for(next.link),
        title: next.title
    }, next.translation) : null);
};

function titleHTML(item) {
    var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return AsRecord(item).titleHTML || escapeHtml(item.title || '') || defaultValue;
}

var PostList = function(param) {
    var hexo = param.hexo, item = param.item;
    var posts = item.posts.data;
    var lastYear = '';
    var content = posts.map(function(item) {
        var itemYear = hexo.date(item.date, 'YYYY');
        var yearElem = itemYear !== lastYear ? /*#__PURE__*/ h("h2", null, itemYear) : null;
        lastYear = itemYear;
        return /*#__PURE__*/ h("template", null, yearElem, /*#__PURE__*/ h("p", {
            class: "post-list-item"
        }, /*#__PURE__*/ h("span", {
            class: "date"
        }, hexo.date(item.date, 'MM-DD ')), /*#__PURE__*/ h("a", {
            href: hexo.url_for(item.path),
            title: item.title
        }, titleHTML(item, hexo.date(item.date, 'YYYY-MM-DD')))));
    });
    return /*#__PURE__*/ h("div", {
        class: "post-list"
    }, content);
};

var archive = withHexoData(function(hexo) {
    var title = "".concat(i18n(hexo, 'Archives'), " \xb7 ").concat(hexo.config.title);
    var description = title;
    return /*#__PURE__*/ h(SharedLayout, {
        hexo: hexo,
        title: title,
        description: description,
        contentClass: "archive-page"
    }, /*#__PURE__*/ h("h1", null, i18n(hexo, 'Archives')), /*#__PURE__*/ h(PostList, {
        hexo: hexo,
        item: hexo.page
    }), /*#__PURE__*/ h(PaginationPager, {
        hexo: hexo,
        item: hexo.page
    }));
});

module.exports = archive;
