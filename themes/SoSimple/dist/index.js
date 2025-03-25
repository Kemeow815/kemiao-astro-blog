'use strict';

var o$1 = require('node:child_process');
var t = require('hexo-util');
var r = require('node:fs');
var t$1 = require('node:vm');
var i = require('node:path');
var jsonschema = require('jsonschema');

(()=>{
    var i, d, e, n, l, v, h, t;
    let s = hexo.theme_dir;
    hexo.log.info('Working dir: ', s), !((null === (d = hexo.env) || void 0 === d ? void 0 : null === (i = d.cmd) || void 0 === i ? void 0 : i.startsWith('n')) || (null === (n = hexo.env) || void 0 === n ? void 0 : null === (e = n.cmd) || void 0 === e ? void 0 : e.startsWith('c'))) && (((null === (l = hexo.env) || void 0 === l ? void 0 : l.cmd) === 's' || (null === (v = hexo.env) || void 0 === v ? void 0 : v.cmd) === 'server') && (hexo.log.info('Starting js watch changer...'), o$1.exec('pnpm watch', {
        cwd: s
    })), ((null === (h = hexo.env) || void 0 === h ? void 0 : h.cmd.startsWith('g')) || (null === (t = hexo.env) || void 0 === t ? void 0 : t.cmd.startsWith('d'))) && (hexo.log.info('Building js...'), o$1.execSync('pnpm build', {
        cwd: s,
        stdio: 'inherit'
    }), hexo.log.info('Build successful!')));
})();

hexo.extend.generator.register('searchpage', ()=>({
        path: 'search/',
        layout: [
            'search'
        ]
    })), hexo.extend.generator.register('tags', (e)=>({
        path: 'tags/',
        layout: [
            'tags'
        ],
        data: Object.assign({}, e, {
            __tags: !0
        })
    })), hexo.extend.generator.register('categories', (e)=>({
        path: 'categories/',
        layout: [
            'categories'
        ],
        data: Object.assign({}, e, {
            __categories: !0
        })
    }));

hexo.extend.generator.register('insight', (e)=>{
    function r(e) {
        var r;
        return {
            title: e.title,
            text: (r = e.content || '', t.stripHTML(r).trim().replace(/\n/g, ' ').replace(/\s+/g, ' ').replace(/&#x([\da-fA-F]+);/g, (t, e)=>String.fromCharCode(Number.parseInt(e, 16))).replace(/&#([\d]+);/g, (t, e)=>String.fromCharCode(e))),
            link: e.path || ''
        };
    }
    function a(t) {
        return {
            name: t.name,
            slug: t.slug,
            link: t.path || ''
        };
    }
    return {
        path: '/content.json',
        data: JSON.stringify({
            pages: e.pages.map(r),
            posts: e.posts.map(r),
            tags: e.tags.map(a),
            categories: e.categories.map(a)
        })
    };
});

const themeConfigSchema = {
    type: 'object',
    properties: {
        author: {
            type: [
                'string',
                'null'
            ]
        },
        keywords: {
            type: [
                'string',
                'null'
            ]
        },
        description: {
            type: [
                'string',
                'null'
            ]
        },
        defaultTheme: {
            anyOf: [
                {
                    enum: [
                        'light',
                        'dark',
                        ''
                    ]
                },
                {
                    type: 'null'
                }
            ]
        },
        favicon: {
            type: [
                'string',
                'null'
            ]
        },
        menu: {
            type: 'object',
            additionalProperties: {
                type: 'string'
            }
        },
        toc_max_depth: {
            type: 'integer',
            default: 6
        },
        footer: {
            type: 'object',
            properties: {
                text: {
                    type: [
                        'string',
                        'null'
                    ]
                },
                html: {
                    type: [
                        'string',
                        'null'
                    ]
                },
                enable_powered_by: {
                    type: [
                        'boolean',
                        'null'
                    ]
                }
            }
        },
        style: {
            type: 'object',
            properties: {
                post_excerpt: {
                    type: 'object',
                    properties: {
                        summary_mode: {
                            type: [
                                'boolean',
                                'null'
                            ],
                            default: !1
                        }
                    }
                },
                post_meta: {
                    type: 'object',
                    properties: {
                        date_format: {
                            type: 'string',
                            default: 'YYYY-MM-DD'
                        },
                        show_icon: {
                            type: [
                                'boolean',
                                'null'
                            ],
                            default: !0
                        }
                    }
                }
            },
            required: [
                'post_excerpt',
                'post_meta'
            ]
        },
        comment: {
            type: 'object',
            properties: {
                enable: {
                    anyOf: [
                        {
                            enum: [
                                'gitalk',
                                ''
                            ]
                        },
                        {
                            type: 'null'
                        }
                    ]
                },
                gitalk: {
                    type: 'object',
                    properties: {
                        clientID: {
                            type: 'string'
                        },
                        clientSecret: {
                            type: 'string'
                        },
                        repo: {
                            type: 'string'
                        },
                        owner: {
                            type: [
                                'string'
                            ]
                        },
                        admin: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        distractionFreeMode: {
                            type: [
                                'boolean',
                                'null'
                            ]
                        }
                    },
                    required: [
                        'clientID',
                        'clientSecret',
                        'repo',
                        'owner'
                    ]
                }
            }
        }
    },
    required: [
        'toc_max_depth',
        'menu',
        'style',
        'footer'
    ]
};

function checkConfig(r) {
    let t = jsonschema.validate(r, themeConfigSchema);
    if (t.valid) return !0;
    throw t.toString();
}

var e, o;
let l = (null === (e = hexo.env) || void 0 === e ? void 0 : e.cmd) === 's' || (null === (o = hexo.env) || void 0 === o ? void 0 : o.cmd) === 'server', m = (e)=>{
    if (!hexo.__sosimple_config_validated) {
        l || (hexo.__sosimple_config_validated = !0);
        try {
            checkConfig(e);
        } catch (e) {
            throw hexo.log.error("SoSimple theme _config.yml validation failed! Please fix your theme's _config.yml"), hexo.log.error(e), e;
        }
    }
};
function d(e) {
    return function(o) {
        m(o.theme);
        let n = (function(e) {
            if (l) {
                let o = r.readFileSync(e).toString(), n = {
                    exports: {}
                }, l = n.exports, m = {
                    module: n,
                    exports: l,
                    require,
                    __dirname: i.dirname(e),
                    __filename: e,
                    console
                };
                return t$1.createContext(m), new t$1.Script(o).runInContext(m), n.exports;
            }
            return require(e);
        })(e.path)(o);
        return '<html' === n.slice(0, 5).toLowerCase() && (n = `<!DOCTYPE html>${n}`), n;
    };
}
function c(e, o) {
    return d(e)(o);
}
c.compile = d, c.disableNunjucks = !0, hexo.extend.renderer.register('jsx', 'html', c, !0);
