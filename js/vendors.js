(self.webpackChunk = self.webpackChunk || []).push([
    [1],
    [(e, t, i) => {
        var r = i(24),
            n = Function.prototype,
            s = n.call,
            a = r && n.bind.bind(s, s);
        e.exports = r ? a : function (e) {
            return function () {
                return s.apply(e, arguments)
            }
        }
    }, (e, t, i) => {
        var r = i(41),
            n = r.all;
        e.exports = r.IS_HTMLDDA ? function (e) {
            return "function" == typeof e || e === n
        } : function (e) {
            return "function" == typeof e
        }
    }, e => {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, (e, t, i) => {
        var r = function (e) {
            return e && e.Math == Math && e
        };
        e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof i.g && i.g) || function () {
            return this
        }() || Function("return this")()
    }, (e, t, i) => {
        var r = i(3),
            n = i(26),
            s = i(5),
            a = i(42),
            o = i(43),
            l = i(44),
            u = r.Symbol,
            c = n("wks"),
            h = l ? u.for || u : u && u.withoutSetter || a;
        e.exports = function (e) {
            return s(c, e) || (c[e] = o && s(u, e) ? u[e] : h("Symbol." + e)), c[e]
        }
    }, (e, t, i) => {
        var r = i(0),
            n = i(29),
            s = r({}.hasOwnProperty);
        e.exports = Object.hasOwn || function (e, t) {
            return s(n(e), t)
        }
    }, (e, t, i) => {
        var r = i(2);
        e.exports = !r((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }))
    }, (e, t, i) => {
        var r = i(10),
            n = String,
            s = TypeError;
        e.exports = function (e) {
            if (r(e)) return e;
            throw s(n(e) + " is not an object")
        }
    }, (e, t, i) => {
        var r = i(24),
            n = Function.prototype.call;
        e.exports = r ? n.bind(n) : function () {
            return n.apply(n, arguments)
        }
    }, (e, t, i) => {
        var r = i(97),
            n = String;
        e.exports = function (e) {
            if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
            return n(e)
        }
    }, (e, t, i) => {
        var r = i(1),
            n = i(41),
            s = n.all;
        e.exports = n.IS_HTMLDDA ? function (e) {
            return "object" == typeof e ? null !== e : r(e) || e === s
        } : function (e) {
            return "object" == typeof e ? null !== e : r(e)
        }
    }, (e, t, i) => {
        var r = i(6),
            n = i(46),
            s = i(45),
            a = i(7),
            o = i(47),
            l = TypeError,
            u = Object.defineProperty,
            c = Object.getOwnPropertyDescriptor,
            h = "enumerable",
            d = "configurable",
            p = "writable";
        t.f = r ? s ? function (e, t, i) {
            if (a(e), t = o(t), a(i), "function" == typeof e && "prototype" === t && "value" in i && p in i && !i[p]) {
                var r = c(e, t);
                r && r[p] && (e[t] = i.value, i = {
                    configurable: d in i ? i[d] : r[d],
                    enumerable: h in i ? i[h] : r[h],
                    writable: !1
                })
            }
            return u(e, t, i)
        } : u : function (e, t, i) {
            if (a(e), t = o(t), a(i), n) try {
                return u(e, t, i)
            } catch (e) { }
            if ("get" in i || "set" in i) throw l("Accessors not supported");
            return "value" in i && (e[t] = i.value), e
        }
    }, (e, t, i) => {
        var r = i(25),
            n = TypeError;
        e.exports = function (e) {
            if (r(e)) throw n("Can't call method on " + e);
            return e
        }
    }, (e, t, i) => {
        var r = i(3),
            n = i(86).f,
            s = i(16),
            a = i(17),
            o = i(28),
            l = i(52),
            u = i(90);
        e.exports = function (e, t) {
            var i, c, h, d, p, f = e.target,
                m = e.global,
                g = e.stat;
            if (i = m ? r : g ? r[f] || o(f, {}) : (r[f] || {}).prototype)
                for (c in t) {
                    if (d = t[c], h = e.dontCallGetSet ? (p = n(i, c)) && p.value : i[c], !u(m ? c : f + (g ? "." : "#") + c, e.forced) && void 0 !== h) {
                        if (typeof d == typeof h) continue;
                        l(d, h)
                    } (e.sham || h && h.sham) && s(d, "sham", !0), a(i, c, d, e)
                }
        }
    }, (e, t, i) => {
        var r = i(70),
            n = i(12);
        e.exports = function (e) {
            return r(n(e))
        }
    }, (e, t, i) => {
        var r = i(0),
            n = r({}.toString),
            s = r("".slice);
        e.exports = function (e) {
            return s(n(e), 8, -1)
        }
    }, (e, t, i) => {
        var r = i(6),
            n = i(11),
            s = i(37);
        e.exports = r ? function (e, t, i) {
            return n.f(e, t, s(1, i))
        } : function (e, t, i) {
            return e[t] = i, e
        }
    }, (e, t, i) => {
        var r = i(1),
            n = i(11),
            s = i(87),
            a = i(28);
        e.exports = function (e, t, i, o) {
            o || (o = {});
            var l = o.enumerable,
                u = void 0 !== o.name ? o.name : t;
            if (r(i) && s(i, u, o), o.global) l ? e[t] = i : a(t, i);
            else {
                try {
                    o.unsafe ? e[t] && (l = !0) : delete e[t]
                } catch (e) { }
                l ? e[t] = i : n.f(e, t, {
                    value: i,
                    enumerable: !1,
                    configurable: !o.nonConfigurable,
                    writable: !o.nonWritable
                })
            }
            return e
        }
    }, () => {}, e => {
        e.exports = !1
    }, (e, t, i) => {
        var r, n = i(7),
            s = i(133),
            a = i(33),
            o = i(32),
            l = i(83),
            u = i(23),
            c = i(34),
            h = "prototype",
            d = "script",
            p = c("IE_PROTO"),
            f = function () { },
            m = function (e) {
                return "<" + d + ">" + e + "</" + d + ">"
            },
            g = function (e) {
                e.write(m("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            y = function () {
                try {
                    r = new ActiveXObject("htmlfile")
                } catch (e) { }
                var e, t, i;
                y = "undefined" != typeof document ? document.domain && r ? g(r) : (t = u("iframe"), i = "java" + d + ":", t.style.display = "none", l.appendChild(t), t.src = String(i), (e = t.contentWindow.document).open(), e.write(m("document.F=Object")), e.close(), e.F) : g(r);
                for (var n = a.length; n--;) delete y[h][a[n]];
                return y()
            };
        o[p] = !0, e.exports = Object.create || function (e, t) {
            var i;
            return null !== e ? (f[h] = n(e), i = new f, f[h] = null, i[p] = e) : i = y(), void 0 === t ? i : s.f(i, t)
        }
    }, (e, t, i) => {
        var r = i(81);
        e.exports = function (e) {
            var t = +e;
            return t != t || 0 === t ? 0 : r(t)
        }
    }, (e, t, i) => {
        var r = i(6),
            n = i(5),
            s = Function.prototype,
            a = r && Object.getOwnPropertyDescriptor,
            o = n(s, "name"),
            l = o && "something" === function () { }.name,
            u = o && (!r || r && a(s, "name").configurable);
        e.exports = {
            EXISTS: o,
            PROPER: l,
            CONFIGURABLE: u
        }
    }, (e, t, i) => {
        var r = i(3),
            n = i(10),
            s = r.document,
            a = n(s) && n(s.createElement);
        e.exports = function (e) {
            return a ? s.createElement(e) : {}
        }
    }, (e, t, i) => {
        var r = i(2);
        e.exports = !r((function () {
            var e = function () { }.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        }))
    }, e => {
        e.exports = function (e) {
            return null == e
        }
    }, (e, t, i) => {
        var r = i(19),
            n = i(27);
        (e.exports = function (e, t) {
            return n[e] || (n[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.27.2",
            mode: r ? "pure" : "global",
            copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }, (e, t, i) => {
        var r = i(3),
            n = i(28),
            s = "__core-js_shared__",
            a = r[s] || n(s, {});
        e.exports = a
    }, (e, t, i) => {
        var r = i(3),
            n = Object.defineProperty;
        e.exports = function (e, t) {
            try {
                n(r, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (i) {
                r[e] = t
            }
            return t
        }
    }, (e, t, i) => {
        var r = i(12),
            n = Object;
        e.exports = function (e) {
            return n(r(e))
        }
    }, (e, t, i) => {
        var r = i(3),
            n = i(1);
        e.exports = function (e, t) {
            return arguments.length < 2 ? (i = r[e], n(i) ? i : void 0) : r[e] && r[e][t];
            var i
        }
    }, (e, t, i) => {
        var r = i(0);
        e.exports = r({}.isPrototypeOf)
    }, e => {
        e.exports = {}
    }, e => {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, (e, t, i) => {
        var r = i(26),
            n = i(42),
            s = r("keys");
        e.exports = function (e) {
            return s[e] || (s[e] = n(e))
        }
    }, e => {
        e.exports = {}
    }, (e, t, i) => {
        var r, n, s, a = i(84),
            o = i(3),
            l = i(10),
            u = i(16),
            c = i(5),
            h = i(27),
            d = i(34),
            p = i(32),
            f = "Object already initialized",
            m = o.TypeError,
            g = o.WeakMap;
        if (a || h.state) {
            var y = h.state || (h.state = new g);
            y.get = y.get, y.has = y.has, y.set = y.set, r = function (e, t) {
                if (y.has(e)) throw m(f);
                return t.facade = e, y.set(e, t), t
            }, n = function (e) {
                return y.get(e) || {}
            }, s = function (e) {
                return y.has(e)
            }
        } else {
            var _ = d("state");
            p[_] = !0, r = function (e, t) {
                if (c(e, _)) throw m(f);
                return t.facade = e, u(e, _, t), t
            }, n = function (e) {
                return c(e, _) ? e[_] : {}
            }, s = function (e) {
                return c(e, _)
            }
        }
        e.exports = {
            set: r,
            get: n,
            has: s,
            enforce: function (e) {
                return s(e) ? n(e) : r(e, {})
            },
            getterFor: function (e) {
                return function (t) {
                    var i;
                    if (!l(t) || (i = n(t)).type !== e) throw m("Incompatible receiver, " + e + " required");
                    return i
                }
            }
        }
    }, e => {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, (e, t, i) => {
        var r, n, s = i(8),
            a = i(0),
            o = i(9),
            l = i(56),
            u = i(99),
            c = i(26),
            h = i(20),
            d = i(36).get,
            p = i(100),
            f = i(101),
            m = c("native-string-replace", String.prototype.replace),
            g = RegExp.prototype.exec,
            y = g,
            _ = a("".charAt),
            v = a("".indexOf),
            b = a("".replace),
            T = a("".slice),
            S = (n = /b*/g, s(g, r = /a/, "a"), s(g, n, "a"), 0 !== r.lastIndex || 0 !== n.lastIndex),
            w = u.BROKEN_CARET,
            E = void 0 !== /()??/.exec("")[1];
        (S || E || w || p || f) && (y = function (e) {
            var t, i, r, n, a, u, c, p = this,
                f = d(p),
                D = o(e),
                C = f.raw;
            if (C) return C.lastIndex = p.lastIndex, t = s(y, C, D), p.lastIndex = C.lastIndex, t;
            var x = f.groups,
                k = w && p.sticky,
                A = s(l, p),
                I = p.source,
                P = 0,
                O = D;
            if (k && (A = b(A, "y", ""), -1 === v(A, "g") && (A += "g"), O = T(D, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== _(D, p.lastIndex - 1)) && (I = "(?: " + I + ")", O = " " + O, P++), i = new RegExp("^(?:" + I + ")", A)), E && (i = new RegExp("^" + I + "$(?!\\s)", A)), S && (r = p.lastIndex), n = s(g, k ? i : p, O), k ? n ? (n.input = T(n.input, P), n[0] = T(n[0], P), n.index = p.lastIndex, p.lastIndex += n[0].length) : p.lastIndex = 0 : S && n && (p.lastIndex = p.global ? n.index + n[0].length : r), E && n && n.length > 1 && s(m, n[0], i, (function () {
                for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (n[a] = void 0)
            })), n && x)
                for (n.groups = u = h(null), a = 0; a < x.length; a++) u[(c = x[a])[0]] = n[c[1]];
            return n
        }), e.exports = y
    }, () => {}, e => {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    }, e => {
        var t = "object" == typeof document && document.all,
            i = void 0 === t && void 0 !== t;
        e.exports = {
            all: t,
            IS_HTMLDDA: i
        }
    }, (e, t, i) => {
        var r = i(0),
            n = 0,
            s = Math.random(),
            a = r(1..toString);
        e.exports = function (e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++n + s, 36)
        }
    }, (e, t, i) => {
        var r = i(72),
            n = i(2);
        e.exports = !!Object.getOwnPropertySymbols && !n((function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
        }))
    }, (e, t, i) => {
        var r = i(43);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, (e, t, i) => {
        var r = i(6),
            n = i(2);
        e.exports = r && n((function () {
            return 42 != Object.defineProperty((function () { }), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }))
    }, (e, t, i) => {
        var r = i(6),
            n = i(2),
            s = i(23);
        e.exports = !r && !n((function () {
            return 7 != Object.defineProperty(s("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, (e, t, i) => {
        var r = i(74),
            n = i(48);
        e.exports = function (e) {
            var t = r(e, "string");
            return n(t) ? t : t + ""
        }
    }, (e, t, i) => {
        var r = i(30),
            n = i(1),
            s = i(31),
            a = i(44),
            o = Object;
        e.exports = a ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            var t = r("Symbol");
            return n(t) && s(t.prototype, o(e))
        }
    }, (e, t, i) => {
        var r = i(75),
            n = i(25);
        e.exports = function (e, t) {
            var i = e[t];
            return n(i) ? void 0 : r(i)
        }
    }, (e, t, i) => {
        var r = i(0),
            n = i(5),
            s = i(14),
            a = i(79).indexOf,
            o = i(32),
            l = r([].push);
        e.exports = function (e, t) {
            var i, r = s(e),
                u = 0,
                c = [];
            for (i in r) !n(o, i) && n(r, i) && l(c, i);
            for (; t.length > u;) n(r, i = t[u++]) && (~a(c, i) || l(c, i));
            return c
        }
    }, (e, t, i) => {
        var r = i(21),
            n = Math.min;
        e.exports = function (e) {
            return e > 0 ? n(r(e), 9007199254740991) : 0
        }
    }, (e, t, i) => {
        var r = i(5),
            n = i(89),
            s = i(86),
            a = i(11);
        e.exports = function (e, t, i) {
            for (var o = n(t), l = a.f, u = s.f, c = 0; c < o.length; c++) {
                var h = o[c];
                r(e, h) || i && r(i, h) || l(e, h, u(t, h))
            }
        }
    }, (e, t, i) => {
        var r, n, s, a = i(2),
            o = i(1),
            l = i(10),
            u = i(20),
            c = i(54),
            h = i(17),
            d = i(4),
            p = i(19),
            f = d("iterator"),
            m = !1;
        [].keys && ("next" in (s = [].keys()) ? (n = c(c(s))) !== Object.prototype && (r = n) : m = !0), !l(r) || a((function () {
            var e = {};
            return r[f].call(e) !== e
        })) ? r = {} : p && (r = u(r)), o(r[f]) || h(r, f, (function () {
            return this
        })), e.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: m
        }
    }, (e, t, i) => {
        var r = i(5),
            n = i(1),
            s = i(29),
            a = i(34),
            o = i(92),
            l = a("IE_PROTO"),
            u = Object,
            c = u.prototype;
        e.exports = o ? u.getPrototypeOf : function (e) {
            var t = s(e);
            if (r(t, l)) return t[l];
            var i = t.constructor;
            return n(i) && t instanceof i ? i.prototype : t instanceof u ? c : null
        }
    }, (e, t, i) => {
        var r = i(11).f,
            n = i(5),
            s = i(4)("toStringTag");
        e.exports = function (e, t, i) {
            e && !i && (e = e.prototype), e && !n(e, s) && r(e, s, {
                configurable: !0,
                value: t
            })
        }
    }, (e, t, i) => {
        var r = i(7);
        e.exports = function () {
            var e = r(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        }
    }, () => {}, (e, t, i) => {
        var r = i(0),
            n = i(12),
            s = i(9),
            a = i(40),
            o = r("".replace),
            l = "[" + a + "]",
            u = RegExp("^" + l + l + "*"),
            c = RegExp(l + l + "*$"),
            h = function (e) {
                return function (t) {
                    var i = s(n(t));
                    return 1 & e && (i = o(i, u, "")), 2 & e && (i = o(i, c, "")), i
                }
            };
        e.exports = {
            start: h(1),
            end: h(2),
            trim: h(3)
        }
    }, function (e, t, i) {
        var r;
        ! function (n, s) {
            var a = "function",
                o = "undefined",
                l = "object",
                u = "string",
                c = "model",
                h = "name",
                d = "type",
                p = "vendor",
                f = "version",
                m = "architecture",
                g = "console",
                y = "mobile",
                _ = "tablet",
                v = "smarttv",
                b = "wearable",
                T = "embedded",
                S = "Amazon",
                w = "Apple",
                E = "ASUS",
                D = "BlackBerry",
                C = "Browser",
                x = "Chrome",
                k = "Firefox",
                A = "Google",
                I = "Huawei",
                P = "LG",
                O = "Microsoft",
                L = "Motorola",
                R = "Opera",
                M = "Samsung",
                N = "Sharp",
                F = "Sony",
                U = "Xiaomi",
                B = "Zebra",
                j = "Facebook",
                q = function (e) {
                    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
                    return t
                },
                $ = function (e, t) {
                    return typeof e === u && -1 !== H(t).indexOf(H(e))
                },
                H = function (e) {
                    return e.toLowerCase()
                },
                V = function (e, t) {
                    if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === o ? e : e.substring(0, 350)
                },
                z = function (e, t) {
                    for (var i, r, n, o, u, c, h = 0; h < t.length && !u;) {
                        var d = t[h],
                            p = t[h + 1];
                        for (i = r = 0; i < d.length && !u;)
                            if (u = d[i++].exec(e))
                                for (n = 0; n < p.length; n++) c = u[++r], typeof (o = p[n]) === l && o.length > 0 ? 2 === o.length ? typeof o[1] == a ? this[o[0]] = o[1].call(this, c) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== a || o[1].exec && o[1].test ? this[o[0]] = c ? c.replace(o[1], o[2]) : s : this[o[0]] = c ? o[1].call(this, c, o[2]) : s : 4 === o.length && (this[o[0]] = c ? o[3].call(this, c.replace(o[1], o[2])) : s) : this[o] = c || s;
                        h += 2
                    }
                },
                W = function (e, t) {
                    for (var i in t)
                        if (typeof t[i] === l && t[i].length > 0) {
                            for (var r = 0; r < t[i].length; r++)
                                if ($(t[i][r], e)) return "?" === i ? s : i
                        } else if ($(t[i], e)) return "?" === i ? s : i;
                    return e
                },
                G = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                },
                X = {
                    browser: [
                        [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        [f, [h, "Chrome"]],
                        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        [f, [h, "Edge"]],
                        [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                        [h, f],
                        [/opios[\/ ]+([\w\.]+)/i],
                        [f, [h, R + " Mini"]],
                        [/\bopr\/([\w\.]+)/i],
                        [f, [h, R]],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                        [h, f],
                        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                        [f, [h, "UC" + C]],
                        [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                        [f, [h, "WeChat(Win) Desktop"]],
                        [/micromessenger\/([\w\.]+)/i],
                        [f, [h, "WeChat"]],
                        [/konqueror\/([\w\.]+)/i],
                        [f, [h, "Konqueror"]],
                        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                        [f, [h, "IE"]],
                        [/yabrowser\/([\w\.]+)/i],
                        [f, [h, "Yandex"]],
                        [/(avast|avg)\/([\w\.]+)/i],
                        [
                            [h, /(.+)/, "$1 Secure " + C], f
                        ],
                        [/\bfocus\/([\w\.]+)/i],
                        [f, [h, k + " Focus"]],
                        [/\bopt\/([\w\.]+)/i],
                        [f, [h, R + " Touch"]],
                        [/coc_coc\w+\/([\w\.]+)/i],
                        [f, [h, "Coc Coc"]],
                        [/dolfin\/([\w\.]+)/i],
                        [f, [h, "Dolphin"]],
                        [/coast\/([\w\.]+)/i],
                        [f, [h, R + " Coast"]],
                        [/miuibrowser\/([\w\.]+)/i],
                        [f, [h, "MIUI " + C]],
                        [/fxios\/([-\w\.]+)/i],
                        [f, [h, k]],
                        [/\bqihu|(qi?ho?o?|360)browser/i],
                        [
                            [h, "360 " + C]
                        ],
                        [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                        [
                            [h, /(.+)/, "$1 " + C], f
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [h, /_/g, " "], f
                        ],
                        [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                        [h, f],
                        [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                        [h],
                        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                        [
                            [h, j], f
                        ],
                        [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                        [h, f],
                        [/\bgsa\/([\w\.]+) .*safari\//i],
                        [f, [h, "GSA"]],
                        [/headlesschrome(?:\/([\w\.]+)| )/i],
                        [f, [h, x + " Headless"]],
                        [/ wv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [h, x + " WebView"], f
                        ],
                        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                        [f, [h, "Android " + C]],
                        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                        [h, f],
                        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                        [f, [h, "Mobile Safari"]],
                        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                        [f, h],
                        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                        [h, [f, W, {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [h, f],
                        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                        [
                            [h, "Netscape"], f
                        ],
                        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                        [f, [h, k + " Reality"]],
                        [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                        [h, f],
                        [/(cobalt)\/([\w\.]+)/i],
                        [h, [f, /master.|lts./, ""]]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                        [
                            [m, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [m, H]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [m, "ia32"]
                        ],
                        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                        [
                            [m, "arm64"]
                        ],
                        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        [
                            [m, "armhf"]
                        ],
                        [/windows (ce|mobile); ppc;/i],
                        [
                            [m, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                        [
                            [m, /ower/, "", H]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [m, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        [
                            [m, H]
                        ]
                    ],
                    device: [
                        [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                        [c, [p, M],
                            [d, _]
                        ],
                        [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                        [c, [p, M],
                            [d, y]
                        ],
                        [/\((ip(?:hone|od)[\w ]*);/i],
                        [c, [p, w],
                            [d, y]
                        ],
                        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        [c, [p, w],
                            [d, _]
                        ],
                        [/(macintosh);/i],
                        [c, [p, w]],
                        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                        [c, [p, I],
                            [d, _]
                        ],
                        [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                        [c, [p, I],
                            [d, y]
                        ],
                        [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                        [
                            [c, /_/g, " "],
                            [p, U],
                            [d, y]
                        ],
                        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                        [
                            [c, /_/g, " "],
                            [p, U],
                            [d, _]
                        ],
                        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                        [c, [p, "OPPO"],
                            [d, y]
                        ],
                        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                        [c, [p, "Vivo"],
                            [d, y]
                        ],
                        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                        [c, [p, "Realme"],
                            [d, y]
                        ],
                        [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                        [c, [p, L],
                            [d, y]
                        ],
                        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                        [c, [p, L],
                            [d, _]
                        ],
                        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                        [c, [p, P],
                            [d, _]
                        ],
                        [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                        [c, [p, P],
                            [d, y]
                        ],
                        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                        [c, [p, "Lenovo"],
                            [d, _]
                        ],
                        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                        [
                            [c, /_/g, " "],
                            [p, "Nokia"],
                            [d, y]
                        ],
                        [/(pixel c)\b/i],
                        [c, [p, A],
                            [d, _]
                        ],
                        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                        [c, [p, A],
                            [d, y]
                        ],
                        [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [c, [p, F],
                            [d, y]
                        ],
                        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                        [
                            [c, "Xperia Tablet"],
                            [p, F],
                            [d, _]
                        ],
                        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                        [c, [p, "OnePlus"],
                            [d, y]
                        ],
                        [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                        [c, [p, S],
                            [d, _]
                        ],
                        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                        [
                            [c, /(.+)/g, "Fire Phone $1"],
                            [p, S],
                            [d, y]
                        ],
                        [/(playbook);[-\w\),; ]+(rim)/i],
                        [c, p, [d, _]],
                        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                        [c, [p, D],
                            [d, y]
                        ],
                        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                        [c, [p, E],
                            [d, _]
                        ],
                        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                        [c, [p, E],
                            [d, y]
                        ],
                        [/(nexus 9)/i],
                        [c, [p, "HTC"],
                            [d, _]
                        ],
                        [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                        [p, [c, /_/g, " "],
                            [d, y]
                        ],
                        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                        [c, [p, "Acer"],
                            [d, _]
                        ],
                        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                        [c, [p, "Meizu"],
                            [d, y]
                        ],
                        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                        [c, [p, N],
                            [d, y]
                        ],
                        [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                        [p, c, [d, y]],
                        [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                        [p, c, [d, _]],
                        [/(surface duo)/i],
                        [c, [p, O],
                            [d, _]
                        ],
                        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                        [c, [p, "Fairphone"],
                            [d, y]
                        ],
                        [/(u304aa)/i],
                        [c, [p, "AT&T"],
                            [d, y]
                        ],
                        [/\bsie-(\w*)/i],
                        [c, [p, "Siemens"],
                            [d, y]
                        ],
                        [/\b(rct\w+) b/i],
                        [c, [p, "RCA"],
                            [d, _]
                        ],
                        [/\b(venue[\d ]{2,7}) b/i],
                        [c, [p, "Dell"],
                            [d, _]
                        ],
                        [/\b(q(?:mv|ta)\w+) b/i],
                        [c, [p, "Verizon"],
                            [d, _]
                        ],
                        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                        [c, [p, "Barnes & Noble"],
                            [d, _]
                        ],
                        [/\b(tm\d{3}\w+) b/i],
                        [c, [p, "NuVision"],
                            [d, _]
                        ],
                        [/\b(k88) b/i],
                        [c, [p, "ZTE"],
                            [d, _]
                        ],
                        [/\b(nx\d{3}j) b/i],
                        [c, [p, "ZTE"],
                            [d, y]
                        ],
                        [/\b(gen\d{3}) b.+49h/i],
                        [c, [p, "Swiss"],
                            [d, y]
                        ],
                        [/\b(zur\d{3}) b/i],
                        [c, [p, "Swiss"],
                            [d, _]
                        ],
                        [/\b((zeki)?tb.*\b) b/i],
                        [c, [p, "Zeki"],
                            [d, _]
                        ],
                        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                        [
                            [p, "Dragon Touch"], c, [d, _]
                        ],
                        [/\b(ns-?\w{0,9}) b/i],
                        [c, [p, "Insignia"],
                            [d, _]
                        ],
                        [/\b((nxa|next)-?\w{0,9}) b/i],
                        [c, [p, "NextBook"],
                            [d, _]
                        ],
                        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                        [
                            [p, "Voice"], c, [d, y]
                        ],
                        [/\b(lvtel\-)?(v1[12]) b/i],
                        [
                            [p, "LvTel"], c, [d, y]
                        ],
                        [/\b(ph-1) /i],
                        [c, [p, "Essential"],
                            [d, y]
                        ],
                        [/\b(v(100md|700na|7011|917g).*\b) b/i],
                        [c, [p, "Envizen"],
                            [d, _]
                        ],
                        [/\b(trio[-\w\. ]+) b/i],
                        [c, [p, "MachSpeed"],
                            [d, _]
                        ],
                        [/\btu_(1491) b/i],
                        [c, [p, "Rotor"],
                            [d, _]
                        ],
                        [/(shield[\w ]+) b/i],
                        [c, [p, "Nvidia"],
                            [d, _]
                        ],
                        [/(sprint) (\w+)/i],
                        [p, c, [d, y]],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [c, /\./g, " "],
                            [p, O],
                            [d, y]
                        ],
                        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        [c, [p, B],
                            [d, _]
                        ],
                        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                        [c, [p, B],
                            [d, y]
                        ],
                        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                        [p, c, [d, g]],
                        [/droid.+; (shield) bui/i],
                        [c, [p, "Nvidia"],
                            [d, g]
                        ],
                        [/(playstation [345portablevi]+)/i],
                        [c, [p, F],
                            [d, g]
                        ],
                        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                        [c, [p, O],
                            [d, g]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [p, [d, v]],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [c, /^/, "SmartTV"],
                            [p, M],
                            [d, v]
                        ],
                        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                        [
                            [p, P],
                            [d, v]
                        ],
                        [/(apple) ?tv/i],
                        [p, [c, w + " TV"],
                            [d, v]
                        ],
                        [/crkey/i],
                        [
                            [c, x + "cast"],
                            [p, A],
                            [d, v]
                        ],
                        [/droid.+aft(\w)( bui|\))/i],
                        [c, [p, S],
                            [d, v]
                        ],
                        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                        [c, [p, N],
                            [d, v]
                        ],
                        [/(bravia[\w ]+)( bui|\))/i],
                        [c, [p, F],
                            [d, v]
                        ],
                        [/(mitv-\w{5}) bui/i],
                        [c, [p, U],
                            [d, v]
                        ],
                        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                        [
                            [p, V],
                            [c, V],
                            [d, v]
                        ],
                        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                        [
                            [d, v]
                        ],
                        [/((pebble))app/i],
                        [p, c, [d, b]],
                        [/droid.+; (glass) \d/i],
                        [c, [p, A],
                            [d, b]
                        ],
                        [/droid.+; (wt63?0{2,3})\)/i],
                        [c, [p, B],
                            [d, b]
                        ],
                        [/(quest( 2)?)/i],
                        [c, [p, j],
                            [d, b]
                        ],
                        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                        [p, [d, T]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                        [c, [d, y]],
                        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                        [c, [d, _]],
                        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                        [
                            [d, _]
                        ],
                        [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                        [
                            [d, y]
                        ],
                        [/(android[-\w\. ]{0,9});.+buil/i],
                        [c, [p, "Generic"]]
                    ],
                    engine: [
                        [/windows.+ edge\/([\w\.]+)/i],
                        [f, [h, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        [f, [h, "Blink"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                        [h, f],
                        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        [f, h]
                    ],
                    os: [
                        [/microsoft (windows) (vista|xp)/i],
                        [h, f],
                        [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                        [h, [f, W, G]],
                        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                        [
                            [h, "Windows"],
                            [f, W, G]
                        ],
                        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                        [
                            [f, /_/g, "."],
                            [h, "iOS"]
                        ],
                        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                        [
                            [h, "Mac OS"],
                            [f, /_/g, "."]
                        ],
                        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                        [f, h],
                        [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                        [h, f],
                        [/\(bb(10);/i],
                        [f, [h, D]],
                        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                        [f, [h, "Symbian"]],
                        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                        [f, [h, k + " OS"]],
                        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        [f, [h, "webOS"]],
                        [/crkey\/([\d\.]+)/i],
                        [f, [h, x + "cast"]],
                        [/(cros) [\w]+ ([\w\.]+\w)/i],
                        [
                            [h, "Chromium OS"], f
                        ],
                        [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                        [h, f],
                        [/(sunos) ?([\w\.\d]*)/i],
                        [
                            [h, "Solaris"], f
                        ],
                        [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                        [h, f]
                    ]
                },
                Y = function (e, t) {
                    if (typeof e === l && (t = e, e = s), !(this instanceof Y)) return new Y(e, t).getResult();
                    var i = e || (typeof n !== o && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                        r = t ? function (e, t) {
                            var i = {};
                            for (var r in e) t[r] && t[r].length % 2 == 0 ? i[r] = t[r].concat(e[r]) : i[r] = e[r];
                            return i
                        }(X, t) : X;
                    return this.getBrowser = function () {
                        var e, t = {};
                        return t[h] = s, t[f] = s, z.call(t, i, r.browser), t.major = typeof (e = t.version) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : s, t
                    }, this.getCPU = function () {
                        var e = {};
                        return e[m] = s, z.call(e, i, r.cpu), e
                    }, this.getDevice = function () {
                        var e = {};
                        return e[p] = s, e[c] = s, e[d] = s, z.call(e, i, r.device), e
                    }, this.getEngine = function () {
                        var e = {};
                        return e[h] = s, e[f] = s, z.call(e, i, r.engine), e
                    }, this.getOS = function () {
                        var e = {};
                        return e[h] = s, e[f] = s, z.call(e, i, r.os), e
                    }, this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function () {
                        return i
                    }, this.setUA = function (e) {
                        return i = typeof e === u && e.length > 350 ? V(e, 350) : e, this
                    }, this.setUA(i), this
                };
            Y.VERSION = "1.0.33", Y.BROWSER = q([h, f, "major"]), Y.CPU = q([m]), Y.DEVICE = q([c, p, d, g, y, v, _, b, T]), Y.ENGINE = Y.OS = q([h, f]), typeof t !== o ? (e.exports && (t = e.exports = Y), t.UAParser = Y) : i.amdO ? (r = function () {
                return Y
            }.call(t, i, t, e)) === s || (e.exports = r) : typeof n !== o && (n.UAParser = Y);
            var K = typeof n !== o && (n.jQuery || n.Zepto);
            if (K && !K.ua) {
                var Q = new Y;
                K.ua = Q.getResult(), K.ua.get = function () {
                    return Q.getUA()
                }, K.ua.set = function (e) {
                    Q.setUA(e);
                    var t = Q.getResult();
                    for (var i in t) K.ua[i] = t[i]
                }
            }
        }("object" == typeof window ? window : this)
    }, () => {}, (e, t, i) => {
        var r = i(13),
            n = i(38);
        r({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== n
        }, {
            exec: n
        })
    }, () => {}, () => {}, function (e) {
        e.exports = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function t(t, i, r) {
                return i && e(t.prototype, i), r && e(t, r), t
            }

            function i() {
                return (i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function r(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }

            function n(e) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function a(e, t, i) {
                return (a = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0
                    } catch (e) {
                        return !1
                    }
                }() ? Reflect.construct : function (e, t, i) {
                    var r = [null];
                    r.push.apply(r, t);
                    var n = new (Function.bind.apply(e, r));
                    return i && s(n, i.prototype), n
                }).apply(null, arguments)
            }

            function o(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (o = function (e) {
                    if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, i)
                    }

                    function i() {
                        return a(e, arguments, n(this).constructor)
                    }
                    return i.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: i,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), s(i, e)
                })(e)
            }

            function l(e, t) {
                try {
                    var i = e()
                } catch (e) {
                    return t(e)
                }
                return i && i.then ? i.then(void 0, t) : i
            }
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var u, c = "2.9.7",
                h = function () { };
            ! function (e) {
                e[e.off = 0] = "off", e[e.error = 1] = "error", e[e.warning = 2] = "warning", e[e.info = 3] = "info", e[e.debug = 4] = "debug"
            }(u || (u = {}));
            var d = u.off,
                p = function () {
                    function e(e) {
                        this.t = e
                    }
                    e.getLevel = function () {
                        return d
                    }, e.setLevel = function (e) {
                        return d = u[e]
                    };
                    var t = e.prototype;
                    return t.error = function () {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        this.i(console.error, u.error, t)
                    }, t.warn = function () {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        this.i(console.warn, u.warning, t)
                    }, t.info = function () {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        this.i(console.info, u.info, t)
                    }, t.debug = function () {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        this.i(console.log, u.debug, t)
                    }, t.i = function (t, i, r) {
                        i <= e.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(r))
                    }, e
                }(),
                f = k,
                m = S,
                g = T,
                y = w,
                _ = x,
                v = "/",
                b = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

            function T(e, t) {
                for (var i, r = [], n = 0, s = 0, a = "", o = t && t.delimiter || v, l = t && t.whitelist || void 0, u = !1; null !== (i = b.exec(e));) {
                    var c = i[0],
                        h = i[1],
                        d = i.index;
                    if (a += e.slice(s, d), s = d + c.length, h) a += h[1], u = !0;
                    else {
                        var p = "",
                            f = i[2],
                            m = i[3],
                            g = i[4],
                            y = i[5];
                        if (!u && a.length) {
                            var _ = a.length - 1,
                                T = a[_];
                            (!l || l.indexOf(T) > -1) && (p = T, a = a.slice(0, _))
                        }
                        a && (r.push(a), a = "", u = !1);
                        var S = m || g,
                            w = p || o;
                        r.push({
                            name: f || n++,
                            prefix: p,
                            delimiter: w,
                            optional: "?" === y || "*" === y,
                            repeat: "+" === y || "*" === y,
                            pattern: S ? D(S) : "[^" + E(w === o ? w : w + o) + "]+?"
                        })
                    }
                }
                return (a || s < e.length) && r.push(a + e.substr(s)), r
            }

            function S(e, t) {
                return function (i, r) {
                    var n = e.exec(i);
                    if (!n) return !1;
                    for (var s = n[0], a = n.index, o = {}, l = r && r.decode || decodeURIComponent, u = 1; u < n.length; u++)
                        if (void 0 !== n[u]) {
                            var c = t[u - 1];
                            o[c.name] = c.repeat ? n[u].split(c.delimiter).map((function (e) {
                                return l(e, c)
                            })) : l(n[u], c)
                        } return {
                            path: s,
                            index: a,
                            params: o
                        }
                }
            }

            function w(e, t) {
                for (var i = new Array(e.length), r = 0; r < e.length; r++) "object" == typeof e[r] && (i[r] = new RegExp("^(?:" + e[r].pattern + ")$", C(t)));
                return function (t, r) {
                    for (var n = "", s = r && r.encode || encodeURIComponent, a = !r || !1 !== r.validate, o = 0; o < e.length; o++) {
                        var l = e[o];
                        if ("string" != typeof l) {
                            var u, c = t ? t[l.name] : void 0;
                            if (Array.isArray(c)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but got array');
                                if (0 === c.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var h = 0; h < c.length; h++) {
                                    if (u = s(c[h], l), a && !i[o].test(u)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '"');
                                    n += (0 === h ? l.prefix : l.delimiter) + u
                                }
                            } else if ("string" != typeof c && "number" != typeof c && "boolean" != typeof c) {
                                if (!l.optional) throw new TypeError('Expected "' + l.name + '" to be ' + (l.repeat ? "an array" : "a string"))
                            } else {
                                if (u = s(String(c), l), a && !i[o].test(u)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but got "' + u + '"');
                                n += l.prefix + u
                            }
                        } else n += l
                    }
                    return n
                }
            }

            function E(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function D(e) {
                return e.replace(/([=!:$/()])/g, "\\$1")
            }

            function C(e) {
                return e && e.sensitive ? "" : "i"
            }

            function x(e, t, i) {
                for (var r = (i = i || {}).strict, n = !1 !== i.start, s = !1 !== i.end, a = i.delimiter || v, o = [].concat(i.endsWith || []).map(E).concat("$").join("|"), l = n ? "^" : "", u = 0; u < e.length; u++) {
                    var c = e[u];
                    if ("string" == typeof c) l += E(c);
                    else {
                        var h = c.repeat ? "(?:" + c.pattern + ")(?:" + E(c.delimiter) + "(?:" + c.pattern + "))*" : c.pattern;
                        t && t.push(c), l += c.optional ? c.prefix ? "(?:" + E(c.prefix) + "(" + h + "))?" : "(" + h + ")?" : E(c.prefix) + "(" + h + ")"
                    }
                }
                if (s) r || (l += "(?:" + E(a) + ")?"), l += "$" === o ? "$" : "(?=" + o + ")";
                else {
                    var d = e[e.length - 1],
                        p = "string" == typeof d ? d[d.length - 1] === a : void 0 === d;
                    r || (l += "(?:" + E(a) + "(?=" + o + "))?"), p || (l += "(?=" + E(a) + "|" + o + ")")
                }
                return new RegExp(l, C(i))
            }

            function k(e, t, i) {
                return e instanceof RegExp ? function (e, t) {
                    if (!t) return e;
                    var i = e.source.match(/\((?!\?)/g);
                    if (i)
                        for (var r = 0; r < i.length; r++) t.push({
                            name: r,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            pattern: null
                        });
                    return e
                }(e, t) : Array.isArray(e) ? function (e, t, i) {
                    for (var r = [], n = 0; n < e.length; n++) r.push(k(e[n], t, i).source);
                    return new RegExp("(?:" + r.join("|") + ")", C(i))
                }(e, t, i) : function (e, t, i) {
                    return x(T(e, i), t, i)
                }(e, t, i)
            }
            f.match = function (e, t) {
                var i = [];
                return S(k(e, i, t), i)
            }, f.regexpToFunction = m, f.parse = g, f.compile = function (e, t) {
                return w(T(e, t), t)
            }, f.tokensToFunction = y, f.tokensToRegExp = _;
            var A = {
                container: "container",
                history: "history",
                namespace: "namespace",
                prefix: "data-barba",
                prevent: "prevent",
                wrapper: "wrapper"
            },
                I = new (function () {
                    function e() {
                        this.o = A, this.u = new DOMParser
                    }
                    var t = e.prototype;
                    return t.toString = function (e) {
                        return e.outerHTML
                    }, t.toDocument = function (e) {
                        return this.u.parseFromString(e, "text/html")
                    }, t.toElement = function (e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e, t
                    }, t.getHtml = function (e) {
                        return void 0 === e && (e = document), this.toString(e.documentElement)
                    }, t.getWrapper = function (e) {
                        return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
                    }, t.getContainer = function (e) {
                        return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
                    }, t.removeContainer = function (e) {
                        document.body.contains(e) && e.parentNode.removeChild(e)
                    }, t.addContainer = function (e, t) {
                        var i = this.getContainer();
                        i ? this.s(e, i) : t.appendChild(e)
                    }, t.getNamespace = function (e) {
                        void 0 === e && (e = document);
                        var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                        return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
                    }, t.getHref = function (e) {
                        if (e.tagName && "a" === e.tagName.toLowerCase()) {
                            if ("string" == typeof e.href) return e.href;
                            var t = e.getAttribute("href") || e.getAttribute("xlink:href");
                            if (t) return this.resolveUrl(t.baseVal || t)
                        }
                        return null
                    }, t.resolveUrl = function () {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        var r = t.length;
                        if (0 === r) throw new Error("resolveUrl requires at least one argument; got none.");
                        var n = document.createElement("base");
                        if (n.href = arguments[0], 1 === r) return n.href;
                        var s = document.getElementsByTagName("head")[0];
                        s.insertBefore(n, s.firstChild);
                        for (var a, o = document.createElement("a"), l = 1; l < r; l++) o.href = arguments[l], n.href = a = o.href;
                        return s.removeChild(n), a
                    }, t.s = function (e, t) {
                        t.parentNode.insertBefore(e, t.nextSibling)
                    }, e
                }()),
                P = new (function () {
                    function e() {
                        this.h = [], this.v = -1
                    }
                    var r = e.prototype;
                    return r.init = function (e, t) {
                        this.l = "barba";
                        var i = {
                            ns: t,
                            scroll: {
                                x: window.scrollX,
                                y: window.scrollY
                            },
                            url: e
                        };
                        this.h.push(i), this.v = 0;
                        var r = {
                            from: this.l,
                            index: 0,
                            states: [].concat(this.h)
                        };
                        window.history && window.history.replaceState(r, "", e)
                    }, r.change = function (e, t, i) {
                        if (i && i.state) {
                            var r = i.state,
                                n = r.index;
                            t = this.m(this.v - n), this.replace(r.states), this.v = n
                        } else this.add(e, t);
                        return t
                    }, r.add = function (e, t) {
                        var i = this.size,
                            r = this.p(t),
                            n = {
                                ns: "tmp",
                                scroll: {
                                    x: window.scrollX,
                                    y: window.scrollY
                                },
                                url: e
                            };
                        this.h.push(n), this.v = i;
                        var s = {
                            from: this.l,
                            index: i,
                            states: [].concat(this.h)
                        };
                        switch (r) {
                            case "push":
                                window.history && window.history.pushState(s, "", e);
                                break;
                            case "replace":
                                window.history && window.history.replaceState(s, "", e)
                        }
                    }, r.update = function (e, t) {
                        var r = t || this.v,
                            n = i({}, this.get(r), {}, e);
                        this.set(r, n)
                    }, r.remove = function (e) {
                        e ? this.h.splice(e, 1) : this.h.pop(), this.v--
                    }, r.clear = function () {
                        this.h = [], this.v = -1
                    }, r.replace = function (e) {
                        this.h = e
                    }, r.get = function (e) {
                        return this.h[e]
                    }, r.set = function (e, t) {
                        return this.h[e] = t
                    }, r.p = function (e) {
                        var t = "push",
                            i = e,
                            r = A.prefix + "-" + A.history;
                        return i.hasAttribute && i.hasAttribute(r) && (t = i.getAttribute(r)), t
                    }, r.m = function (e) {
                        return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : 0 === e ? "popstate" : e > 0 ? "back" : "forward"
                    }, t(e, [{
                        key: "current",
                        get: function () {
                            return this.h[this.v]
                        }
                    }, {
                        key: "state",
                        get: function () {
                            return this.h[this.h.length - 1]
                        }
                    }, {
                        key: "previous",
                        get: function () {
                            return this.v < 1 ? null : this.h[this.v - 1]
                        }
                    }, {
                        key: "size",
                        get: function () {
                            return this.h.length
                        }
                    }]), e
                }()),
                O = function (e, t) {
                    try {
                        var i = function () {
                            if (!t.next.html) return Promise.resolve(e).then((function (e) {
                                var i = t.next;
                                if (e) {
                                    var r = I.toElement(e);
                                    i.namespace = I.getNamespace(r), i.container = I.getContainer(r), i.html = e, P.update({
                                        ns: i.namespace
                                    });
                                    var n = I.toDocument(e);
                                    document.title = n.title
                                }
                            }))
                        }();
                        return Promise.resolve(i && i.then ? i.then((function () { })) : void 0)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                },
                L = f,
                R = {
                    __proto__: null,
                    update: O,
                    nextTick: function () {
                        return new Promise((function (e) {
                            window.requestAnimationFrame(e)
                        }))
                    },
                    pathToRegexp: L
                },
                M = function () {
                    return window.location.origin
                },
                N = function (e) {
                    return void 0 === e && (e = window.location.href), F(e).port
                },
                F = function (e) {
                    var t, i = e.match(/:\d+/);
                    if (null === i) /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
                    else {
                        var r = i[0].substring(1);
                        t = parseInt(r, 10)
                    }
                    var n, s = e.replace(M(), ""),
                        a = {},
                        o = s.indexOf("#");
                    o >= 0 && (n = s.slice(o + 1), s = s.slice(0, o));
                    var l = s.indexOf("?");
                    return l >= 0 && (a = U(s.slice(l + 1)), s = s.slice(0, l)), {
                        hash: n,
                        path: s,
                        port: t,
                        query: a
                    }
                },
                U = function (e) {
                    return e.split("&").reduce((function (e, t) {
                        var i = t.split("=");
                        return e[i[0]] = i[1], e
                    }), {})
                },
                B = function (e) {
                    return void 0 === e && (e = window.location.href), e.replace(/(\/#.*|\/|#.*)$/, "")
                },
                j = {
                    __proto__: null,
                    getHref: function () {
                        return window.location.href
                    },
                    getOrigin: M,
                    getPort: N,
                    getPath: function (e) {
                        return void 0 === e && (e = window.location.href), F(e).path
                    },
                    parse: F,
                    parseQuery: U,
                    clean: B
                };

            function q(e, t, i) {
                return void 0 === t && (t = 2e3), new Promise((function (r, n) {
                    var s = new XMLHttpRequest;
                    s.onreadystatechange = function () {
                        if (s.readyState === XMLHttpRequest.DONE)
                            if (200 === s.status) r(s.responseText);
                            else if (s.status) {
                                var t = {
                                    status: s.status,
                                    statusText: s.statusText
                                };
                                i(e, t), n(t)
                            }
                    }, s.ontimeout = function () {
                        var r = new Error("Timeout error [" + t + "]");
                        i(e, r), n(r)
                    }, s.onerror = function () {
                        var t = new Error("Fetch error");
                        i(e, t), n(t)
                    }, s.open("GET", e), s.timeout = t, s.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), s.setRequestHeader("x-barba", "yes"), s.send()
                }))
            }
            var $ = function (e) {
                return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            };

            function H(e, t) {
                return void 0 === t && (t = {}),
                    function () {
                        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                        var s = !1,
                            a = new Promise((function (i, n) {
                                t.async = function () {
                                    return s = !0,
                                        function (e, t) {
                                            e ? n(e) : i(t)
                                        }
                                };
                                var a = e.apply(t, r);
                                s || ($(a) ? a.then(i, n) : i(a))
                            }));
                        return a
                    }
            }
            var V = new (function (e) {
                function t() {
                    var t;
                    return (t = e.call(this) || this).logger = new p("@barba/core"), t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], t.registered = new Map, t.init(), t
                }
                r(t, e);
                var i = t.prototype;
                return i.init = function () {
                    var e = this;
                    this.registered.clear(), this.all.forEach((function (t) {
                        e[t] || (e[t] = function (i, r) {
                            e.registered.has(t) || e.registered.set(t, new Set), e.registered.get(t).add({
                                ctx: r || {},
                                fn: i
                            })
                        })
                    }))
                }, i.do = function (e) {
                    for (var t = this, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
                    if (this.registered.has(e)) {
                        var s = Promise.resolve();
                        return this.registered.get(e).forEach((function (e) {
                            s = s.then((function () {
                                return H(e.fn, e.ctx).apply(void 0, r)
                            }))
                        })), s.catch((function (i) {
                            t.logger.debug("Hook error [" + e + "]"), t.logger.error(i)
                        }))
                    }
                    return Promise.resolve()
                }, i.clear = function () {
                    var e = this;
                    this.all.forEach((function (t) {
                        delete e[t]
                    })), this.init()
                }, i.help = function () {
                    this.logger.info("Available hooks: " + this.all.join(","));
                    var e = [];
                    this.registered.forEach((function (t, i) {
                        return e.push(i)
                    })), this.logger.info("Registered hooks: " + e.join(","))
                }, t
            }(h)),
                z = function () {
                    function e(e) {
                        if (this.P = [], "boolean" == typeof e) this.g = e;
                        else {
                            var t = Array.isArray(e) ? e : [e];
                            this.P = t.map((function (e) {
                                return L(e)
                            }))
                        }
                    }
                    return e.prototype.checkHref = function (e) {
                        if ("boolean" == typeof this.g) return this.g;
                        var t = F(e).path;
                        return this.P.some((function (e) {
                            return null !== e.exec(t)
                        }))
                    }, e
                }(),
                W = function (e) {
                    function t(t) {
                        var i;
                        return (i = e.call(this, t) || this).k = new Map, i
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.set = function (e, t, i) {
                        return this.k.set(e, {
                            action: i,
                            request: t
                        }), {
                            action: i,
                            request: t
                        }
                    }, n.get = function (e) {
                        return this.k.get(e)
                    }, n.getRequest = function (e) {
                        return this.k.get(e).request
                    }, n.getAction = function (e) {
                        return this.k.get(e).action
                    }, n.has = function (e) {
                        return !this.checkHref(e) && this.k.has(e)
                    }, n.delete = function (e) {
                        return this.k.delete(e)
                    }, n.update = function (e, t) {
                        var r = i({}, this.k.get(e), {}, t);
                        return this.k.set(e, r), r
                    }, t
                }(z),
                G = function () {
                    return !window.history.pushState
                },
                X = function (e) {
                    return !e.el || !e.href
                },
                Y = function (e) {
                    var t = e.event;
                    return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
                },
                K = function (e) {
                    var t = e.el;
                    return t.hasAttribute("target") && "_blank" === t.target
                },
                Q = function (e) {
                    var t = e.el;
                    return void 0 !== t.protocol && window.location.protocol !== t.protocol || void 0 !== t.hostname && window.location.hostname !== t.hostname
                },
                J = function (e) {
                    var t = e.el;
                    return void 0 !== t.port && N() !== N(t.href)
                },
                Z = function (e) {
                    var t = e.el;
                    return t.getAttribute && "string" == typeof t.getAttribute("download")
                },
                ee = function (e) {
                    return e.el.hasAttribute(A.prefix + "-" + A.prevent)
                },
                te = function (e) {
                    return Boolean(e.el.closest("[" + A.prefix + "-" + A.prevent + '="all"]'))
                },
                ie = function (e) {
                    var t = e.href;
                    return B(t) === B() && N(t) === N()
                },
                re = function (e) {
                    function t(t) {
                        var i;
                        return (i = e.call(this, t) || this).suite = [], i.tests = new Map, i.init(), i
                    }
                    r(t, e);
                    var i = t.prototype;
                    return i.init = function () {
                        this.add("pushState", G), this.add("exists", X), this.add("newTab", Y), this.add("blank", K), this.add("corsDomain", Q), this.add("corsPort", J), this.add("download", Z), this.add("preventSelf", ee), this.add("preventAll", te), this.add("sameUrl", ie, !1)
                    }, i.add = function (e, t, i) {
                        void 0 === i && (i = !0), this.tests.set(e, t), i && this.suite.push(e)
                    }, i.run = function (e, t, i, r) {
                        return this.tests.get(e)({
                            el: t,
                            event: i,
                            href: r
                        })
                    }, i.checkLink = function (e, t, i) {
                        var r = this;
                        return this.suite.some((function (n) {
                            return r.run(n, e, t, i)
                        }))
                    }, t
                }(z),
                ne = function (e) {
                    function t(i, r) {
                        var n;
                        void 0 === r && (r = "Barba error");
                        for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), o = 2; o < s; o++) a[o - 2] = arguments[o];
                        return (n = e.call.apply(e, [this].concat(a)) || this).error = i, n.label = r, Error.captureStackTrace && Error.captureStackTrace(function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(n), t), n.name = "BarbaError", n
                    }
                    return r(t, e), t
                }(o(Error)),
                se = function () {
                    function e(e) {
                        void 0 === e && (e = []), this.logger = new p("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
                            name: "namespace",
                            type: "strings"
                        }, {
                            name: "custom",
                            type: "function"
                        }], e && (this.all = this.all.concat(e)), this.update()
                    }
                    var t = e.prototype;
                    return t.add = function (e, t) {
                        "rule" === e ? this.A.splice(t.position || 0, 0, t.value) : this.all.push(t), this.update()
                    }, t.resolve = function (e, t) {
                        var i = this;
                        void 0 === t && (t = {});
                        var r = t.once ? this.once : this.page;
                        r = r.filter(t.self ? function (e) {
                            return e.name && "self" === e.name
                        } : function (e) {
                            return !e.name || "self" !== e.name
                        });
                        var n = new Map,
                            s = r.find((function (r) {
                                var s = !0,
                                    a = {};
                                return !(!t.self || "self" !== r.name) || (i.A.reverse().forEach((function (t) {
                                    s && (s = i.R(r, t, e, a), r.from && r.to && (s = i.R(r, t, e, a, "from") && i.R(r, t, e, a, "to")), r.from && !r.to && (s = i.R(r, t, e, a, "from")), !r.from && r.to && (s = i.R(r, t, e, a, "to")))
                                })), n.set(r, a), s)
                            })),
                            a = n.get(s),
                            o = [];
                        if (o.push(t.once ? "once" : "page"), t.self && o.push("self"), a) {
                            var l, u = [s];
                            Object.keys(a).length > 0 && u.push(a), (l = this.logger).info.apply(l, ["Transition found [" + o.join(",") + "]"].concat(u))
                        } else this.logger.info("No transition found [" + o.join(",") + "]");
                        return s
                    }, t.update = function () {
                        var e = this;
                        this.all = this.all.map((function (t) {
                            return e.T(t)
                        })).sort((function (e, t) {
                            return e.priority - t.priority
                        })).reverse().map((function (e) {
                            return delete e.priority, e
                        })), this.page = this.all.filter((function (e) {
                            return void 0 !== e.leave || void 0 !== e.enter
                        })), this.once = this.all.filter((function (e) {
                            return void 0 !== e.once
                        }))
                    }, t.R = function (e, t, i, r, n) {
                        var s = !0,
                            a = !1,
                            o = e,
                            l = t.name,
                            u = l,
                            c = l,
                            h = l,
                            d = n ? o[n] : o,
                            p = "to" === n ? i.next : i.current;
                        if (n ? d && d[l] : d[l]) {
                            switch (t.type) {
                                case "strings":
                                default:
                                    var f = Array.isArray(d[u]) ? d[u] : [d[u]];
                                    p[u] && -1 !== f.indexOf(p[u]) && (a = !0), -1 === f.indexOf(p[u]) && (s = !1);
                                    break;
                                case "object":
                                    var m = Array.isArray(d[c]) ? d[c] : [d[c]];
                                    p[c] ? (p[c].name && -1 !== m.indexOf(p[c].name) && (a = !0), -1 === m.indexOf(p[c].name) && (s = !1)) : s = !1;
                                    break;
                                case "function":
                                    d[h](i) ? a = !0 : s = !1
                            }
                            a && (n ? (r[n] = r[n] || {}, r[n][l] = o[n][l]) : r[l] = o[l])
                        }
                        return s
                    }, t.O = function (e, t, i) {
                        var r = 0;
                        return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (r += Math.pow(10, i), e.from && e.from[t] && (r += 1), e.to && e.to[t] && (r += 2)), r
                    }, t.T = function (e) {
                        var t = this;
                        e.priority = 0;
                        var i = 0;
                        return this.A.forEach((function (r, n) {
                            i += t.O(e, r.name, n + 1)
                        })), e.priority = i, e
                    }, e
                }(),
                ae = function () {
                    function e(e) {
                        void 0 === e && (e = []), this.logger = new p("@barba/core"), this.S = !1, this.store = new se(e)
                    }
                    var i = e.prototype;
                    return i.get = function (e, t) {
                        return this.store.resolve(e, t)
                    }, i.doOnce = function (e) {
                        var t = e.data,
                            i = e.transition;
                        try {
                            var r = function () {
                                n.S = !1
                            },
                                n = this,
                                s = i || {};
                            n.S = !0;
                            var a = l((function () {
                                return Promise.resolve(n.j("beforeOnce", t, s)).then((function () {
                                    return Promise.resolve(n.once(t, s)).then((function () {
                                        return Promise.resolve(n.j("afterOnce", t, s)).then((function () { }))
                                    }))
                                }))
                            }), (function (e) {
                                n.S = !1, n.logger.debug("Transition error [before/after/once]"), n.logger.error(e)
                            }));
                            return Promise.resolve(a && a.then ? a.then(r) : r())
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, i.doPage = function (e) {
                        var t = e.data,
                            i = e.transition,
                            r = e.page,
                            n = e.wrapper;
                        try {
                            var s = function (e) {
                                if (a) return e;
                                o.S = !1
                            },
                                a = !1,
                                o = this,
                                u = i || {},
                                c = !0 === u.sync || !1;
                            o.S = !0;
                            var h = l((function () {
                                function e() {
                                    return Promise.resolve(o.j("before", t, u)).then((function () {
                                        var e = !1;

                                        function i(i) {
                                            return e ? i : Promise.resolve(o.remove(t)).then((function () {
                                                return Promise.resolve(o.j("after", t, u)).then((function () { }))
                                            }))
                                        }
                                        var s = function () {
                                            if (c) return l((function () {
                                                return Promise.resolve(o.add(t, n)).then((function () {
                                                    return Promise.resolve(o.j("beforeLeave", t, u)).then((function () {
                                                        return Promise.resolve(o.j("beforeEnter", t, u)).then((function () {
                                                            return Promise.resolve(Promise.all([o.leave(t, u), o.enter(t, u)])).then((function () {
                                                                return Promise.resolve(o.j("afterLeave", t, u)).then((function () {
                                                                    return Promise.resolve(o.j("afterEnter", t, u)).then((function () { }))
                                                                }))
                                                            }))
                                                        }))
                                                    }))
                                                }))
                                            }), (function (e) {
                                                if (o.M(e)) throw new ne(e, "Transition error [sync]")
                                            }));
                                            var i = function (i) {
                                                return e ? i : l((function () {
                                                    var e = function () {
                                                        if (!1 !== s) return Promise.resolve(o.add(t, n)).then((function () {
                                                            return Promise.resolve(o.j("beforeEnter", t, u)).then((function () {
                                                                return Promise.resolve(o.enter(t, u, s)).then((function () {
                                                                    return Promise.resolve(o.j("afterEnter", t, u)).then((function () { }))
                                                                }))
                                                            }))
                                                        }))
                                                    }();
                                                    if (e && e.then) return e.then((function () { }))
                                                }), (function (e) {
                                                    if (o.M(e)) throw new ne(e, "Transition error [before/after/enter]")
                                                }))
                                            },
                                                s = !1,
                                                a = l((function () {
                                                    return Promise.resolve(o.j("beforeLeave", t, u)).then((function () {
                                                        return Promise.resolve(Promise.all([o.leave(t, u), O(r, t)]).then((function (e) {
                                                            return e[0]
                                                        }))).then((function (e) {
                                                            return s = e, Promise.resolve(o.j("afterLeave", t, u)).then((function () { }))
                                                        }))
                                                    }))
                                                }), (function (e) {
                                                    if (o.M(e)) throw new ne(e, "Transition error [before/after/leave]")
                                                }));
                                            return a && a.then ? a.then(i) : i(a)
                                        }();
                                        return s && s.then ? s.then(i) : i(s)
                                    }))
                                }
                                var i = function () {
                                    if (c) return Promise.resolve(O(r, t)).then((function () { }))
                                }();
                                return i && i.then ? i.then(e) : e()
                            }), (function (e) {
                                if (o.S = !1, e.name && "BarbaError" === e.name) throw o.logger.debug(e.label), o.logger.error(e.error), e;
                                throw o.logger.debug("Transition error [page]"), o.logger.error(e), e
                            }));
                            return Promise.resolve(h && h.then ? h.then(s) : s(h))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, i.once = function (e, t) {
                        try {
                            return Promise.resolve(V.do("once", e, t)).then((function () {
                                return t.once ? H(t.once, t)(e) : Promise.resolve()
                            }))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, i.leave = function (e, t) {
                        try {
                            return Promise.resolve(V.do("leave", e, t)).then((function () {
                                return t.leave ? H(t.leave, t)(e) : Promise.resolve()
                            }))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, i.enter = function (e, t, i) {
                        try {
                            return Promise.resolve(V.do("enter", e, t)).then((function () {
                                return t.enter ? H(t.enter, t)(e, i) : Promise.resolve()
                            }))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, i.add = function (e, t) {
                        try {
                            return I.addContainer(e.next.container, t), V.do("nextAdded", e), Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, i.remove = function (e) {
                        try {
                            return I.removeContainer(e.current.container), V.do("currentRemoved", e), Promise.resolve()
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, i.M = function (e) {
                        return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status
                    }, i.j = function (e, t, i) {
                        try {
                            return Promise.resolve(V.do(e, t, i)).then((function () {
                                return i[e] ? H(i[e], i)(t) : Promise.resolve()
                            }))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, t(e, [{
                        key: "isRunning",
                        get: function () {
                            return this.S
                        },
                        set: function (e) {
                            this.S = e
                        }
                    }, {
                        key: "hasOnce",
                        get: function () {
                            return this.store.once.length > 0
                        }
                    }, {
                        key: "hasSelf",
                        get: function () {
                            return this.store.all.some((function (e) {
                                return "self" === e.name
                            }))
                        }
                    }, {
                        key: "shouldWait",
                        get: function () {
                            return this.store.all.some((function (e) {
                                return e.to && !e.to.route || e.sync
                            }))
                        }
                    }]), e
                }(),
                oe = function () {
                    function e(e) {
                        var t = this;
                        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== e.length && (e.forEach((function (e) {
                            t.byNamespace.set(e.namespace, e)
                        })), this.names.forEach((function (e) {
                            V[e](t.L(e))
                        })))
                    }
                    return e.prototype.L = function (e) {
                        var t = this;
                        return function (i) {
                            var r = e.match(/enter/i) ? i.next : i.current,
                                n = t.byNamespace.get(r.namespace);
                            return n && n[e] ? H(n[e], n)(i) : Promise.resolve()
                        }
                    }, e
                }();
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            });
            var le = {
                container: null,
                html: "",
                namespace: "",
                url: {
                    hash: "",
                    href: "",
                    path: "",
                    port: null,
                    query: {}
                }
            };
            return new (function () {
                function e() {
                    this.version = c, this.schemaPage = le, this.Logger = p, this.logger = new p("@barba/core"), this.plugins = [], this.hooks = V, this.dom = I, this.helpers = R, this.history = P, this.request = q, this.url = j
                }
                var r = e.prototype;
                return r.use = function (e, t) {
                    var i = this.plugins;
                    i.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : "function" == typeof e.install ? (e.install(this, t), i.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.')
                }, r.init = function (e) {
                    var t = void 0 === e ? {} : e,
                        r = t.transitions,
                        n = void 0 === r ? [] : r,
                        s = t.views,
                        a = void 0 === s ? [] : s,
                        o = t.schema,
                        l = void 0 === o ? A : o,
                        u = t.requestError,
                        c = t.timeout,
                        h = void 0 === c ? 2e3 : c,
                        d = t.cacheIgnore,
                        f = void 0 !== d && d,
                        m = t.prefetchIgnore,
                        g = void 0 !== m && m,
                        y = t.preventRunning,
                        _ = void 0 !== y && y,
                        v = t.prevent,
                        b = void 0 === v ? null : v,
                        T = t.debug,
                        S = t.logLevel;
                    if (p.setLevel(!0 === (void 0 !== T && T) ? "debug" : void 0 === S ? "off" : S), this.logger.info(this.version), Object.keys(l).forEach((function (e) {
                        A[e] && (A[e] = l[e])
                    })), this.$ = u, this.timeout = h, this.cacheIgnore = f, this.prefetchIgnore = g, this.preventRunning = _, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
                    this._.setAttribute("aria-live", "polite"), this.q();
                    var w = this.data.current;
                    if (!w.container) throw new Error("[@barba/core] No Barba container found");
                    if (this.cache = new W(f), this.prevent = new re(g), this.transitions = new ae(n), this.views = new oe(a), null !== b) {
                        if ("function" != typeof b) throw new Error("[@barba/core] Prevent should be a function");
                        this.prevent.add("preventCustom", b)
                    }
                    this.history.init(w.url.href, w.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function (e) {
                        return e.init()
                    }));
                    var E = this.data;
                    E.trigger = "barba", E.next = E.current, E.current = i({}, this.schemaPage), this.hooks.do("ready", E), this.once(E), this.q()
                }, r.destroy = function () {
                    this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
                }, r.force = function (e) {
                    window.location.assign(e)
                }, r.go = function (e, t, i) {
                    var r;
                    if (void 0 === t && (t = "barba"), this.transitions.isRunning) this.force(e);
                    else if (!(r = "popstate" === t ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf) return t = this.history.change(e, t, i), i && (i.stopPropagation(), i.preventDefault()), this.page(e, t, r)
                }, r.once = function (e) {
                    try {
                        var t = this;
                        return Promise.resolve(t.hooks.do("beforeEnter", e)).then((function () {
                            function i() {
                                return Promise.resolve(t.hooks.do("afterEnter", e)).then((function () { }))
                            }
                            var r = function () {
                                if (t.transitions.hasOnce) {
                                    var i = t.transitions.get(e, {
                                        once: !0
                                    });
                                    return Promise.resolve(t.transitions.doOnce({
                                        transition: i,
                                        data: e
                                    })).then((function () { }))
                                }
                            }();
                            return r && r.then ? r.then(i) : i()
                        }))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.page = function (e, t, r) {
                    try {
                        var n = function () {
                            var e = s.data;
                            return Promise.resolve(s.hooks.do("page", e)).then((function () {
                                var t = l((function () {
                                    var t = s.transitions.get(e, {
                                        once: !1,
                                        self: r
                                    });
                                    return Promise.resolve(s.transitions.doPage({
                                        data: e,
                                        page: a,
                                        transition: t,
                                        wrapper: s._
                                    })).then((function () {
                                        s.q()
                                    }))
                                }), (function () {
                                    0 === p.getLevel() && s.force(e.current.url.href)
                                }));
                                if (t && t.then) return t.then((function () { }))
                            }))
                        },
                            s = this;
                        s.data.next.url = i({
                            href: e
                        }, s.url.parse(e)), s.data.trigger = t;
                        var a = s.cache.has(e) ? s.cache.update(e, {
                            action: "click"
                        }).request : s.cache.set(e, s.request(e, s.timeout, s.onRequestError.bind(s, t)), "click").request,
                            o = function () {
                                if (s.transitions.shouldWait) return Promise.resolve(O(a, s.data)).then((function () { }))
                            }();
                        return Promise.resolve(o && o.then ? o.then(n) : n())
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, r.onRequestError = function (e) {
                    this.transitions.isRunning = !1;
                    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
                    var n = i[0],
                        s = i[1],
                        a = this.cache.getAction(n);
                    return this.cache.delete(n), !(this.$ && !1 === this.$(e, a, n, s) || ("click" === a && this.force(n), 1))
                }, r.prefetch = function (e) {
                    var t = this;
                    this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba")).catch((function (e) {
                        t.logger.error(e)
                    })), "prefetch")
                }, r.F = function () {
                    !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
                }, r.H = function () {
                    !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
                }, r.B = function (e) {
                    var t = this,
                        i = this.I(e);
                    if (i) {
                        var r = this.dom.getHref(i);
                        this.prevent.checkHref(r) || this.cache.has(r) || this.cache.set(r, this.request(r, this.timeout, this.onRequestError.bind(this, i)).catch((function (e) {
                            t.logger.error(e)
                        })), "enter")
                    }
                }, r.U = function (e) {
                    var t = this.I(e);
                    if (t) return this.transitions.isRunning && this.preventRunning ? (e.preventDefault(), void e.stopPropagation()) : void this.go(this.dom.getHref(t), t, e)
                }, r.D = function (e) {
                    this.go(this.url.getHref(), "popstate", e)
                }, r.I = function (e) {
                    for (var t = e.target; t && !this.dom.getHref(t);) t = t.parentNode;
                    if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t))) return t
                }, r.q = function () {
                    var e = this.url.getHref(),
                        t = {
                            container: this.dom.getContainer(),
                            html: this.dom.getHtml(),
                            namespace: this.dom.getNamespace(),
                            url: i({
                                href: e
                            }, this.url.parse(e))
                        };
                    this.C = {
                        current: t,
                        next: i({}, this.schemaPage),
                        trigger: void 0
                    }, this.hooks.do("reset", this.data)
                }, t(e, [{
                    key: "data",
                    get: function () {
                        return this.C
                    }
                }, {
                    key: "wrapper",
                    get: function () {
                        return this._
                    }
                }]), e
            }())
        }()
    }, e => {
        self,
            e.exports = function () {
                var e = {
                    d: function (t, i) {
                        for (var r in i) e.o(i, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                            enumerable: !0,
                            get: i[r]
                        })
                    },
                    o: function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                },
                    t = {};

                function i(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                e.d(t, {
                    default: function () {
                        return r
                    }
                });
                var r = function () {
                    function e() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    var t;
                    return t = [{
                        key: "getUrl",
                        value: function (t, i) {
                            return e.urlList[t] ? e.urlList[t] + encodeURIComponent(i) : null
                        }
                    }, {
                        key: "openWindow",
                        value: function (e) {
                            var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Поделиться",
                                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "width=640,height=480,location=no,toolbar=no,menubar=no";
                            return i ? (t = window.open("", r, n), i.then((function () {
                                t.location = e
                            })).catch((function () {
                                t.close()
                            }))) : t = window.open(e, r, n), t
                        }
                    }, {
                        key: "fb",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.openWindow(e.getUrl("fb", t), i)
                        }
                    }, {
                        key: "vk",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.openWindow(e.getUrl("vk", t), i)
                        }
                    }, {
                        key: "tw",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.openWindow(e.getUrl("tw", t), i)
                        }
                    }, {
                        key: "ok",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.openWindow(e.getUrl("ok", t), i)
                        }
                    }, {
                        key: "tg",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.openWindow(e.getUrl("tg", t), i, void 0, null)
                        }
                    }, {
                        key: "facebook",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.fb(t, i)
                        }
                    }, {
                        key: "vkontakte",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.vk(t, i)
                        }
                    }, {
                        key: "twitter",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.tw(t, i)
                        }
                    }, {
                        key: "odnoklassniki",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.ok(t, i)
                        }
                    }, {
                        key: "telegram",
                        value: function (t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return e.tg(t, i)
                        }
                    }], t && i(e, t), e
                }();
                return r.urlList = {
                    fb: "https://facebook.com/sharer/sharer.php?u=",
                    vk: "https://vk.com/share.php?url=",
                    tw: "http://twitter.com/share?url=",
                    ok: "https://connect.ok.ru/offer?url=",
                    tg: "https://t.me/share/url?url="
                }, t.default
            }()
    }, function (e) {
        e.exports = function (e) {
            function t(r) {
                if (i[r]) return i[r].exports;
                var n = i[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
            }
            var i = {};
            return t.m = e, t.c = i, t.p = "dist/", t(0)
        }([function (e, t, i) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var n = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
                s = (r(i(1)), i(6)),
                a = r(s),
                o = r(i(7)),
                l = r(i(8)),
                u = r(i(9)),
                c = r(i(10)),
                h = r(i(11)),
                d = r(i(14)),
                p = [],
                f = !1,
                m = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                g = function () {
                    if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (f = !0), f) return p = (0, h.default)(p, m), (0, c.default)(p, m.once), p
                },
                y = function () {
                    p = (0, d.default)(), g()
                },
                _ = function () {
                    p.forEach((function (e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                    }))
                },
                v = function (e) {
                    return !0 === e || "mobile" === e && u.default.mobile() || "phone" === e && u.default.phone() || "tablet" === e && u.default.tablet() || "function" == typeof e && !0 === e()
                },
                b = function (e) {
                    m = n(m, e), p = (0, d.default)();
                    var t = document.all && !window.atob;
                    return v(m.disable) || t ? _() : (m.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), m.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", m.easing), document.querySelector("body").setAttribute("data-aos-duration", m.duration), document.querySelector("body").setAttribute("data-aos-delay", m.delay), "DOMContentLoaded" === m.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? g(!0) : "load" === m.startEvent ? window.addEventListener(m.startEvent, (function () {
                        g(!0)
                    })) : document.addEventListener(m.startEvent, (function () {
                        g(!0)
                    })), window.addEventListener("resize", (0, o.default)(g, m.debounceDelay, !0)), window.addEventListener("orientationchange", (0, o.default)(g, m.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)((function () {
                        (0, c.default)(p, m.once)
                    }), m.throttleDelay)), m.disableMutationObserver || l.default.ready("[data-aos]", y), p)
                };
            e.exports = {
                init: b,
                refresh: g,
                refreshHard: y
            }
        }, function (e, t) { }, , , , , function (e, t) {
            (function (t) {
                function i(e, t, i) {
                    function r(t) {
                        var i = m,
                            r = g;
                        return m = g = void 0, E = t, _ = e.apply(r, i)
                    }

                    function s(e) {
                        return E = e, v = setTimeout(c, t), D ? r(e) : _
                    }

                    function a(e) {
                        var i = t - (e - b);
                        return C ? S(i, y - (e - E)) : i
                    }

                    function l(e) {
                        var i = e - b;
                        return void 0 === b || i >= t || i < 0 || C && e - E >= y
                    }

                    function c() {
                        var e = w();
                        return l(e) ? h(e) : void (v = setTimeout(c, a(e)))
                    }

                    function h(e) {
                        return v = void 0, x && m ? r(e) : (m = g = void 0, _)
                    }

                    function d() {
                        void 0 !== v && clearTimeout(v), E = 0, m = b = g = v = void 0
                    }

                    function p() {
                        return void 0 === v ? _ : h(w())
                    }

                    function f() {
                        var e = w(),
                            i = l(e);
                        if (m = arguments, g = this, b = e, i) {
                            if (void 0 === v) return s(b);
                            if (C) return v = setTimeout(c, t), r(b)
                        }
                        return void 0 === v && (v = setTimeout(c, t)), _
                    }
                    var m, g, y, _, v, b, E = 0,
                        D = !1,
                        C = !1,
                        x = !0;
                    if ("function" != typeof e) throw new TypeError(u);
                    return t = o(t) || 0, n(i) && (D = !!i.leading, y = (C = "maxWait" in i) ? T(o(i.maxWait) || 0, t) : y, x = "trailing" in i ? !!i.trailing : x), f.cancel = d, f.flush = p, f
                }

                function r(e, t, r) {
                    var s = !0,
                        a = !0;
                    if ("function" != typeof e) throw new TypeError(u);
                    return n(r) && (s = "leading" in r ? !!r.leading : s, a = "trailing" in r ? !!r.trailing : a), i(e, t, {
                        leading: s,
                        maxWait: t,
                        trailing: a
                    })
                }

                function n(e) {
                    var t = void 0 === e ? "undefined" : l(e);
                    return !!e && ("object" == t || "function" == t)
                }

                function s(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : l(e))
                }

                function a(e) {
                    return "symbol" == (void 0 === e ? "undefined" : l(e)) || s(e) && b.call(e) == h
                }

                function o(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return c;
                    if (n(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = n(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var i = f.test(e);
                    return i || m.test(e) ? g(e.slice(2), i ? 2 : 8) : p.test(e) ? c : +e
                }
                var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                    u = "Expected a function",
                    c = NaN,
                    h = "[object Symbol]",
                    d = /^\s+|\s+$/g,
                    p = /^[-+]0x[0-9a-f]+$/i,
                    f = /^0b[01]+$/i,
                    m = /^0o[0-7]+$/i,
                    g = parseInt,
                    y = "object" == (void 0 === t ? "undefined" : l(t)) && t && t.Object === Object && t,
                    _ = "object" == ("undefined" == typeof self ? "undefined" : l(self)) && self && self.Object === Object && self,
                    v = y || _ || Function("return this")(),
                    b = Object.prototype.toString,
                    T = Math.max,
                    S = Math.min,
                    w = function () {
                        return v.Date.now()
                    };
                e.exports = r
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            (function (t) {
                function i(e, t, i) {
                    function n(t) {
                        var i = m,
                            r = g;
                        return m = g = void 0, E = t, _ = e.apply(r, i)
                    }

                    function s(e) {
                        return E = e, v = setTimeout(c, t), D ? n(e) : _
                    }

                    function o(e) {
                        var i = t - (e - w);
                        return C ? T(i, y - (e - E)) : i
                    }

                    function u(e) {
                        var i = e - w;
                        return void 0 === w || i >= t || i < 0 || C && e - E >= y
                    }

                    function c() {
                        var e = S();
                        return u(e) ? h(e) : void (v = setTimeout(c, o(e)))
                    }

                    function h(e) {
                        return v = void 0, x && m ? n(e) : (m = g = void 0, _)
                    }

                    function d() {
                        void 0 !== v && clearTimeout(v), E = 0, m = w = g = v = void 0
                    }

                    function p() {
                        return void 0 === v ? _ : h(S())
                    }

                    function f() {
                        var e = S(),
                            i = u(e);
                        if (m = arguments, g = this, w = e, i) {
                            if (void 0 === v) return s(w);
                            if (C) return v = setTimeout(c, t), n(w)
                        }
                        return void 0 === v && (v = setTimeout(c, t)), _
                    }
                    var m, g, y, _, v, w, E = 0,
                        D = !1,
                        C = !1,
                        x = !0;
                    if ("function" != typeof e) throw new TypeError(l);
                    return t = a(t) || 0, r(i) && (D = !!i.leading, y = (C = "maxWait" in i) ? b(a(i.maxWait) || 0, t) : y, x = "trailing" in i ? !!i.trailing : x), f.cancel = d, f.flush = p, f
                }

                function r(e) {
                    var t = void 0 === e ? "undefined" : o(e);
                    return !!e && ("object" == t || "function" == t)
                }

                function n(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : o(e))
                }

                function s(e) {
                    return "symbol" == (void 0 === e ? "undefined" : o(e)) || n(e) && v.call(e) == c
                }

                function a(e) {
                    if ("number" == typeof e) return e;
                    if (s(e)) return u;
                    if (r(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = r(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(h, "");
                    var i = p.test(e);
                    return i || f.test(e) ? m(e.slice(2), i ? 2 : 8) : d.test(e) ? u : +e
                }
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                    l = "Expected a function",
                    u = NaN,
                    c = "[object Symbol]",
                    h = /^\s+|\s+$/g,
                    d = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    f = /^0o[0-7]+$/i,
                    m = parseInt,
                    g = "object" == (void 0 === t ? "undefined" : o(t)) && t && t.Object === Object && t,
                    y = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                    _ = g || y || Function("return this")(),
                    v = Object.prototype.toString,
                    b = Math.max,
                    T = Math.min,
                    S = function () {
                        return _.Date.now()
                    };
                e.exports = i
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            function i(e) {
                var t = void 0,
                    r = void 0;
                for (t = 0; t < e.length; t += 1) {
                    if ((r = e[t]).dataset && r.dataset.aos) return !0;
                    if (r.children && i(r.children)) return !0
                }
                return !1
            }

            function r() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function n() {
                return !!r()
            }

            function s(e, t) {
                var i = window.document,
                    n = new (r())(a);
                o = t, n.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }

            function a(e) {
                e && e.forEach((function (e) {
                    var t = Array.prototype.slice.call(e.addedNodes),
                        r = Array.prototype.slice.call(e.removedNodes);
                    if (i(t.concat(r))) return o()
                }))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function () { };
            t.default = {
                isSupported: n,
                ready: s
            }
        }, function (e, t) {
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, i, r) {
                    return i && e(t.prototype, i), r && e(t, r), t
                }
            }(),
                s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                l = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                u = function () {
                    function e() {
                        i(this, e)
                    }
                    return n(e, [{
                        key: "phone",
                        value: function () {
                            var e = r();
                            return !(!s.test(e) && !a.test(e.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function () {
                            var e = r();
                            return !(!o.test(e) && !l.test(e.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function () {
                            return this.mobile() && !this.phone()
                        }
                    }]), e
                }();
            t.default = new u
        }, function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function (e, t, i) {
                var r = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : void 0 !== r && ("false" === r || !i && "true" !== r) && e.node.classList.remove("aos-animate")
            },
                r = function (e, t) {
                    var r = window.pageYOffset,
                        n = window.innerHeight;
                    e.forEach((function (e, s) {
                        i(e, n + r, t)
                    }))
                };
            t.default = r
        }, function (e, t, i) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(i(12)),
                s = function (e, t) {
                    return e.forEach((function (e, i) {
                        e.node.classList.add("aos-init"), e.position = (0, n.default)(e.node, t.offset)
                    })), e
                };
            t.default = s
        }, function (e, t, i) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(i(13)),
                s = function (e, t) {
                    var i = 0,
                        r = 0,
                        s = window.innerHeight,
                        a = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                        };
                    switch (a.offset && !isNaN(a.offset) && (r = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), i = (0, n.default)(e).top, a.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            i += e.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            i += e.offsetHeight;
                            break;
                        case "top-center":
                            i += s / 2;
                            break;
                        case "bottom-center":
                            i += s / 2 + e.offsetHeight;
                            break;
                        case "center-center":
                            i += s / 2 + e.offsetHeight / 2;
                            break;
                        case "top-top":
                            i += s;
                            break;
                        case "bottom-top":
                            i += e.offsetHeight + s;
                            break;
                        case "center-top":
                            i += e.offsetHeight / 2 + s
                    }
                    return a.anchorPlacement || a.offset || isNaN(t) || (r = t), i + r
                };
            t.default = s
        }, function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function (e) {
                for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: i,
                    left: t
                }
            };
            t.default = i
        }, function (e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function (e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function (e) {
                    return {
                        node: e
                    }
                }))
            };
            t.default = i
        }])
    }, e => {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, (e, t, i) => {
        var r = i(23)("span").classList,
            n = r && r.constructor && r.constructor.prototype;
        e.exports = n === Object.prototype ? void 0 : n
    }, (e, t, i) => {
        var r = i(14),
            n = i(71),
            s = i(35),
            a = i(36),
            o = i(11).f,
            l = i(85),
            u = i(95),
            c = i(19),
            h = i(6),
            d = "Array Iterator",
            p = a.set,
            f = a.getterFor(d);
        e.exports = l(Array, "Array", (function (e, t) {
            p(this, {
                type: d,
                target: r(e),
                index: 0,
                kind: t
            })
        }), (function () {
            var e = f(this),
                t = e.target,
                i = e.kind,
                r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, u(void 0, !0)) : u("keys" == i ? r : "values" == i ? t[r] : [r, t[r]], !1)
        }), "values");
        var m = s.Arguments = s.Array;
        if (n("keys"), n("values"), n("entries"), !c && h && "values" !== m.name) try {
            o(m, "name", {
                value: "values"
            })
        } catch (e) { }
    }, (e, t, i) => {
        var r = i(0),
            n = i(2),
            s = i(15),
            a = Object,
            o = r("".split);
        e.exports = n((function () {
            return !a("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" == s(e) ? o(e, "") : a(e)
        } : a
    }, (e, t, i) => {
        var r = i(4),
            n = i(20),
            s = i(11).f,
            a = r("unscopables"),
            o = Array.prototype;
        null == o[a] && s(o, a, {
            configurable: !0,
            value: n(null)
        }), e.exports = function (e) {
            o[a][e] = !0
        }
    }, (e, t, i) => {
        var r, n, s = i(3),
            a = i(73),
            o = s.process,
            l = s.Deno,
            u = o && o.versions || l && l.version,
            c = u && u.v8;
        c && (n = (r = c.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (n = +r[1]), e.exports = n
    }, e => {
        e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    }, (e, t, i) => {
        var r = i(8),
            n = i(10),
            s = i(48),
            a = i(49),
            o = i(77),
            l = i(4),
            u = TypeError,
            c = l("toPrimitive");
        e.exports = function (e, t) {
            if (!n(e) || s(e)) return e;
            var i, l = a(e, c);
            if (l) {
                if (void 0 === t && (t = "default"), i = r(l, e, t), !n(i) || s(i)) return i;
                throw u("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"), o(e, t)
        }
    }, (e, t, i) => {
        var r = i(1),
            n = i(76),
            s = TypeError;
        e.exports = function (e) {
            if (r(e)) return e;
            throw s(n(e) + " is not a function")
        }
    }, e => {
        var t = String;
        e.exports = function (e) {
            try {
                return t(e)
            } catch (e) {
                return "Object"
            }
        }
    }, (e, t, i) => {
        var r = i(8),
            n = i(1),
            s = i(10),
            a = TypeError;
        e.exports = function (e, t) {
            var i, o;
            if ("string" === t && n(i = e.toString) && !s(o = r(i, e))) return o;
            if (n(i = e.valueOf) && !s(o = r(i, e))) return o;
            if ("string" !== t && n(i = e.toString) && !s(o = r(i, e))) return o;
            throw a("Can't convert object to primitive value")
        }
    }, (e, t, i) => {
        var r = i(50),
            n = i(33);
        e.exports = Object.keys || function (e) {
            return r(e, n)
        }
    }, (e, t, i) => {
        var r = i(14),
            n = i(80),
            s = i(82),
            a = function (e) {
                return function (t, i, a) {
                    var o, l = r(t),
                        u = s(l),
                        c = n(a, u);
                    if (e && i != i) {
                        for (; u > c;)
                            if ((o = l[c++]) != o) return !0
                    } else
                        for (; u > c; c++)
                            if ((e || c in l) && l[c] === i) return e || c || 0;
                    return !e && -1
                }
            };
        e.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    }, (e, t, i) => {
        var r = i(21),
            n = Math.max,
            s = Math.min;
        e.exports = function (e, t) {
            var i = r(e);
            return i < 0 ? n(i + t, 0) : s(i, t)
        }
    }, e => {
        var t = Math.ceil,
            i = Math.floor;
        e.exports = Math.trunc || function (e) {
            var r = +e;
            return (r > 0 ? i : t)(r)
        }
    }, (e, t, i) => {
        var r = i(51);
        e.exports = function (e) {
            return r(e.length)
        }
    }, (e, t, i) => {
        var r = i(30);
        e.exports = r("document", "documentElement")
    }, (e, t, i) => {
        var r = i(3),
            n = i(1),
            s = r.WeakMap;
        e.exports = n(s) && /native code/.test(String(s))
    }, (e, t, i) => {
        var r = i(13),
            n = i(8),
            s = i(19),
            a = i(22),
            o = i(1),
            l = i(91),
            u = i(54),
            c = i(93),
            h = i(55),
            d = i(16),
            p = i(17),
            f = i(4),
            m = i(35),
            g = i(53),
            y = a.PROPER,
            _ = a.CONFIGURABLE,
            v = g.IteratorPrototype,
            b = g.BUGGY_SAFARI_ITERATORS,
            T = f("iterator"),
            S = "keys",
            w = "values",
            E = "entries",
            D = function () {
                return this
            };
        e.exports = function (e, t, i, a, f, g, C) {
            l(i, t, a);
            var x, k, A, I = function (e) {
                if (e === f && M) return M;
                if (!b && e in L) return L[e];
                switch (e) {
                    case S:
                    case w:
                    case E:
                        return function () {
                            return new i(this, e)
                        }
                }
                return function () {
                    return new i(this)
                }
            },
                P = t + " Iterator",
                O = !1,
                L = e.prototype,
                R = L[T] || L["@@iterator"] || f && L[f],
                M = !b && R || I(f),
                N = "Array" == t && L.entries || R;
            if (N && (x = u(N.call(new e))) !== Object.prototype && x.next && (s || u(x) === v || (c ? c(x, v) : o(x[T]) || p(x, T, D)), h(x, P, !0, !0), s && (m[P] = D)), y && f == w && R && R.name !== w && (!s && _ ? d(L, "name", w) : (O = !0, M = function () {
                return n(R, this)
            })), f)
                if (k = {
                    values: I(w),
                    keys: g ? M : I(S),
                    entries: I(E)
                }, C)
                    for (A in k) (b || O || !(A in L)) && p(L, A, k[A]);
                else r({
                    target: t,
                    proto: !0,
                    forced: b || O
                }, k);
            return s && !C || L[T] === M || p(L, T, M, {
                name: f
            }), m[t] = M, k
        }
    }, (e, t, i) => {
        var r = i(6),
            n = i(8),
            s = i(134),
            a = i(37),
            o = i(14),
            l = i(47),
            u = i(5),
            c = i(46),
            h = Object.getOwnPropertyDescriptor;
        t.f = r ? h : function (e, t) {
            if (e = o(e), t = l(t), c) try {
                return h(e, t)
            } catch (e) { }
            if (u(e, t)) return a(!n(s.f, e, t), e[t])
        }
    }, (e, t, i) => {
        var r = i(0),
            n = i(2),
            s = i(1),
            a = i(5),
            o = i(6),
            l = i(22).CONFIGURABLE,
            u = i(88),
            c = i(36),
            h = c.enforce,
            d = c.get,
            p = String,
            f = Object.defineProperty,
            m = r("".slice),
            g = r("".replace),
            y = r([].join),
            _ = o && !n((function () {
                return 8 !== f((function () { }), "length", {
                    value: 8
                }).length
            })),
            v = String(String).split("String"),
            b = e.exports = function (e, t, i) {
                "Symbol(" === m(p(t), 0, 7) && (t = "[" + g(p(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), i && i.getter && (t = "get " + t), i && i.setter && (t = "set " + t), (!a(e, "name") || l && e.name !== t) && (o ? f(e, "name", {
                    value: t,
                    configurable: !0
                }) : e.name = t), _ && i && a(i, "arity") && e.length !== i.arity && f(e, "length", {
                    value: i.arity
                });
                try {
                    i && a(i, "constructor") && i.constructor ? o && f(e, "prototype", {
                        writable: !1
                    }) : e.prototype && (e.prototype = void 0)
                } catch (e) { }
                var r = h(e);
                return a(r, "source") || (r.source = y(v, "string" == typeof t ? t : "")), e
            };
        Function.prototype.toString = b((function () {
            return s(this) && d(this).source || u(this)
        }), "toString")
    }, (e, t, i) => {
        var r = i(0),
            n = i(1),
            s = i(27),
            a = r(Function.toString);
        n(s.inspectSource) || (s.inspectSource = function (e) {
            return a(e)
        }), e.exports = s.inspectSource
    }, (e, t, i) => {
        var r = i(30),
            n = i(0),
            s = i(135),
            a = i(136),
            o = i(7),
            l = n([].concat);
        e.exports = r("Reflect", "ownKeys") || function (e) {
            var t = s.f(o(e)),
                i = a.f;
            return i ? l(t, i(e)) : t
        }
    }, (e, t, i) => {
        var r = i(2),
            n = i(1),
            s = /#|\.prototype\./,
            a = function (e, t) {
                var i = l[o(e)];
                return i == c || i != u && (n(t) ? r(t) : !!t)
            },
            o = a.normalize = function (e) {
                return String(e).replace(s, ".").toLowerCase()
            },
            l = a.data = {},
            u = a.NATIVE = "N",
            c = a.POLYFILL = "P";
        e.exports = a
    }, (e, t, i) => {
        var r = i(53).IteratorPrototype,
            n = i(20),
            s = i(37),
            a = i(55),
            o = i(35),
            l = function () {
                return this
            };
        e.exports = function (e, t, i, u) {
            var c = t + " Iterator";
            return e.prototype = n(r, {
                next: s(+!u, i)
            }), a(e, c, !1, !0), o[c] = l, e
        }
    }, (e, t, i) => {
        var r = i(2);
        e.exports = !r((function () {
            function e() { }
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }))
    }, (e, t, i) => {
        var r = i(0),
            n = i(7),
            s = i(94);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
                i = {};
            try {
                (e = r(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(i, []), t = i instanceof Array
            } catch (e) { }
            return function (i, r) {
                return n(i), s(r), t ? e(i, r) : i.__proto__ = r, i
            }
        }() : void 0)
    }, (e, t, i) => {
        var r = i(1),
            n = String,
            s = TypeError;
        e.exports = function (e) {
            if ("object" == typeof e || r(e)) return e;
            throw s("Can't set " + n(e) + " as a prototype")
        }
    }, e => {
        e.exports = function (e, t) {
            return {
                value: e,
                done: t
            }
        }
    }, (e, t, i) => {
        var r = /^\s+|\s+$/g,
            n = /^[-+]0x[0-9a-f]+$/i,
            s = /^0b[01]+$/i,
            a = /^0o[0-7]+$/i,
            o = parseInt,
            l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
            u = "object" == typeof self && self && self.Object === Object && self,
            c = l || u || Function("return this")(),
            h = Object.prototype.toString,
            d = Math.max,
            p = Math.min,
            f = function () {
                return c.Date.now()
            };

        function m(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function g(e) {
            if ("number" == typeof e) return e;
            if (function (e) {
                return "symbol" == typeof e || function (e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == h.call(e)
            }(e)) return NaN;
            if (m(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = m(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(r, "");
            var i = s.test(e);
            return i || a.test(e) ? o(e.slice(2), i ? 2 : 8) : n.test(e) ? NaN : +e
        }
        e.exports = function (e, t, i) {
            var r, n, s, a, o, l, u = 0,
                c = !1,
                h = !1,
                y = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function _(t) {
                var i = r,
                    s = n;
                return r = n = void 0, u = t, a = e.apply(s, i)
            }

            function v(e) {
                var i = e - l;
                return void 0 === l || i >= t || i < 0 || h && e - u >= s
            }

            function b() {
                var e = f();
                if (v(e)) return T(e);
                o = setTimeout(b, function (e) {
                    var i = t - (e - l);
                    return h ? p(i, s - (e - u)) : i
                }(e))
            }

            function T(e) {
                return o = void 0, y && r ? _(e) : (r = n = void 0, a)
            }

            function S() {
                var e = f(),
                    i = v(e);
                if (r = arguments, n = this, l = e, i) {
                    if (void 0 === o) return function (e) {
                        return u = e, o = setTimeout(b, t), c ? _(e) : a
                    }(l);
                    if (h) return o = setTimeout(b, t), _(l)
                }
                return void 0 === o && (o = setTimeout(b, t)), a
            }
            return t = g(t) || 0, m(i) && (c = !!i.leading, s = (h = "maxWait" in i) ? d(g(i.maxWait) || 0, t) : s, y = "trailing" in i ? !!i.trailing : y), S.cancel = function () {
                void 0 !== o && clearTimeout(o), u = 0, r = l = n = o = void 0
            }, S.flush = function () {
                return void 0 === o ? a : T(f())
            }, S
        }
    }, (e, t, i) => {
        var r = i(98),
            n = i(1),
            s = i(15),
            a = i(4)("toStringTag"),
            o = Object,
            l = "Arguments" == s(function () {
                return arguments
            }());
        e.exports = r ? s : function (e) {
            var t, i, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function (e, t) {
                try {
                    return e[t]
                } catch (e) { }
            }(t = o(e), a)) ? i : l ? s(t) : "Object" == (r = s(t)) && n(t.callee) ? "Arguments" : r
        }
    }, (e, t, i) => {
        var r = {};
        r[i(4)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
    }, (e, t, i) => {
        var r = i(2),
            n = i(3).RegExp,
            s = r((function () {
                var e = n("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            a = s || r((function () {
                return !n("a", "y").sticky
            })),
            o = s || r((function () {
                var e = n("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }));
        e.exports = {
            BROKEN_CARET: o,
            MISSED_STICKY: a,
            UNSUPPORTED_Y: s
        }
    }, (e, t, i) => {
        var r = i(2),
            n = i(3).RegExp;
        e.exports = r((function () {
            var e = n(".", "s");
            return !(e.dotAll && e.exec("\n") && "s" === e.flags)
        }))
    }, (e, t, i) => {
        var r = i(2),
            n = i(3).RegExp;
        e.exports = r((function () {
            var e = n("(?<a>b)", "g");
            return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
        }))
    }, (e, t, i) => {
        var r = i(8),
            n = i(5),
            s = i(31),
            a = i(56),
            o = RegExp.prototype;
        e.exports = function (e) {
            var t = e.flags;
            return void 0 !== t || "flags" in o || n(e, "flags") || !s(o, e) ? t : r(a, e)
        }
    }, (e, t, i) => {
        var r = i(24),
            n = Function.prototype,
            s = n.apply,
            a = n.call;
        e.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(s) : function () {
            return a.apply(s, arguments)
        })
    }, (e, t, i) => {
        i(61);
        var r = i(105),
            n = i(17),
            s = i(38),
            a = i(2),
            o = i(4),
            l = i(16),
            u = o("species"),
            c = RegExp.prototype;
        e.exports = function (e, t, i, h) {
            var d = o(e),
                p = !a((function () {
                    var t = {};
                    return t[d] = function () {
                        return 7
                    }, 7 != ""[e](t)
                })),
                f = p && !a((function () {
                    var t = !1,
                        i = /a/;
                    return "split" === e && ((i = {}).constructor = {}, i.constructor[u] = function () {
                        return i
                    }, i.flags = "", i[d] = /./[d]), i.exec = function () {
                        return t = !0, null
                    }, i[d](""), !t
                }));
            if (!p || !f || i) {
                var m = r(/./[d]),
                    g = t(d, ""[e], (function (e, t, i, n, a) {
                        var o = r(e),
                            l = t.exec;
                        return l === s || l === c.exec ? p && !a ? {
                            done: !0,
                            value: m(t, i, n)
                        } : {
                            done: !0,
                            value: o(i, t, n)
                        } : {
                            done: !1
                        }
                    }));
                n(String.prototype, e, g[0]), n(c, d, g[1])
            }
            h && l(c[d], "sham", !0)
        }
    }, (e, t, i) => {
        var r = i(15),
            n = i(0);
        e.exports = function (e) {
            if ("Function" === r(e)) return n(e)
        }
    }, (e, t, i) => {
        var r = i(107).charAt;
        e.exports = function (e, t, i) {
            return t + (i ? r(e, t).length : 1)
        }
    }, (e, t, i) => {
        var r = i(0),
            n = i(21),
            s = i(9),
            a = i(12),
            o = r("".charAt),
            l = r("".charCodeAt),
            u = r("".slice),
            c = function (e) {
                return function (t, i) {
                    var r, c, h = s(a(t)),
                        d = n(i),
                        p = h.length;
                    return d < 0 || d >= p ? e ? "" : void 0 : (r = l(h, d)) < 55296 || r > 56319 || d + 1 === p || (c = l(h, d + 1)) < 56320 || c > 57343 ? e ? o(h, d) : r : e ? u(h, d, d + 2) : c - 56320 + (r - 55296 << 10) + 65536
                }
            };
        e.exports = {
            codeAt: c(!1),
            charAt: c(!0)
        }
    }, (e, t, i) => {
        var r = i(0),
            n = i(29),
            s = Math.floor,
            a = r("".charAt),
            o = r("".replace),
            l = r("".slice),
            u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            c = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, i, r, h, d) {
            var p = i + e.length,
                f = r.length,
                m = c;
            return void 0 !== h && (h = n(h), m = u), o(d, m, (function (n, o) {
                var u;
                switch (a(o, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return l(t, 0, i);
                    case "'":
                        return l(t, p);
                    case "<":
                        u = h[l(o, 1, -1)];
                        break;
                    default:
                        var c = +o;
                        if (0 === c) return n;
                        if (c > f) {
                            var d = s(c / 10);
                            return 0 === d ? n : d <= f ? void 0 === r[d - 1] ? a(o, 1) : r[d - 1] + a(o, 1) : n
                        }
                        u = r[c - 1]
                }
                return void 0 === u ? "" : u
            }))
        }
    }, (e, t, i) => {
        var r = i(8),
            n = i(7),
            s = i(1),
            a = i(15),
            o = i(38),
            l = TypeError;
        e.exports = function (e, t) {
            var i = e.exec;
            if (s(i)) {
                var u = r(i, e, t);
                return null !== u && n(u), u
            }
            if ("RegExp" === a(e)) return r(o, e, t);
            throw l("RegExp#exec called on incompatible receiver")
        }
    }, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}, (e, t, i) => {
        var r = i(22).PROPER,
            n = i(2),
            s = i(40);
        e.exports = function (e) {
            return n((function () {
                return !!s[e]() || "​᠎" !== "​᠎"[e]() || r && s[e].name !== e
            }))
        }
    }, (e, t, i) => {
        var r = i(125),
            n = TypeError;
        e.exports = function (e) {
            if (r(e)) throw n("The method doesn't accept regular expressions");
            return e
        }
    }, (e, t, i) => {
        var r = i(10),
            n = i(15),
            s = i(4)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[s]) ? !!t : "RegExp" == n(e))
        }
    }, (e, t, i) => {
        var r = i(4)("match");
        e.exports = function (e) {
            var t = /./;
            try {
                "/./"[e](t)
            } catch (i) {
                try {
                    return t[r] = !1, "/./"[e](t)
                } catch (e) { }
            }
            return !1
        }
    }, (e, t, i) => {
        var r = i(3),
            n = i(2),
            s = i(0),
            a = i(9),
            o = i(58).trim,
            l = i(40),
            u = r.parseInt,
            c = r.Symbol,
            h = c && c.iterator,
            d = /^[+-]?0x/i,
            p = s(d.exec),
            f = 8 !== u(l + "08") || 22 !== u(l + "0x16") || h && !n((function () {
                u(Object(h))
            }));
        e.exports = f ? function (e, t) {
            var i = o(a(e));
            return u(i, t >>> 0 || (p(d, i) ? 16 : 10))
        } : u
    }, (e, t, i) => {
        var r = i(3),
            n = i(67),
            s = i(68),
            a = i(69),
            o = i(16),
            l = i(4),
            u = l("iterator"),
            c = l("toStringTag"),
            h = a.values,
            d = function (e, t) {
                if (e) {
                    if (e[u] !== h) try {
                        o(e, u, h)
                    } catch (t) {
                        e[u] = h
                    }
                    if (e[c] || o(e, c, t), n[t])
                        for (var i in a)
                            if (e[i] !== a[i]) try {
                                o(e, i, a[i])
                            } catch (t) {
                                e[i] = a[i]
                            }
                }
            };
        for (var p in n) d(r[p] && r[p].prototype, p);
        d(s, "DOMTokenList")
    }, (e, t, i) => {
        var r = i(22).PROPER,
            n = i(17),
            s = i(7),
            a = i(9),
            o = i(2),
            l = i(102),
            u = "toString",
            c = RegExp.prototype[u],
            h = o((function () {
                return "/a/b" != c.call({
                    source: "a",
                    flags: "b"
                })
            })),
            d = r && c.name != u;
        (h || d) && n(RegExp.prototype, u, (function () {
            var e = s(this);
            return "/" + a(e.source) + "/" + a(l(e))
        }), {
            unsafe: !0
        })
    }, (e, t, i) => {
        var r = i(103),
            n = i(8),
            s = i(0),
            a = i(104),
            o = i(2),
            l = i(7),
            u = i(1),
            c = i(25),
            h = i(21),
            d = i(51),
            p = i(9),
            f = i(12),
            m = i(106),
            g = i(49),
            y = i(108),
            _ = i(109),
            v = i(4)("replace"),
            b = Math.max,
            T = Math.min,
            S = s([].concat),
            w = s([].push),
            E = s("".indexOf),
            D = s("".slice),
            C = "$0" === "a".replace(/./, "$0"),
            x = !!/./[v] && "" === /./[v]("a", "$0");
        a("replace", (function (e, t, i) {
            var s = x ? "$" : "$0";
            return [function (e, i) {
                var r = f(this),
                    s = c(e) ? void 0 : g(e, v);
                return s ? n(s, e, r, i) : n(t, p(r), e, i)
            }, function (e, n) {
                var a = l(this),
                    o = p(e);
                if ("string" == typeof n && -1 === E(n, s) && -1 === E(n, "$<")) {
                    var c = i(t, a, o, n);
                    if (c.done) return c.value
                }
                var f = u(n);
                f || (n = p(n));
                var g = a.global;
                if (g) {
                    var v = a.unicode;
                    a.lastIndex = 0
                }
                for (var C = []; ;) {
                    var x = _(a, o);
                    if (null === x) break;
                    if (w(C, x), !g) break;
                    "" === p(x[0]) && (a.lastIndex = m(o, d(a.lastIndex), v))
                }
                for (var k, A = "", I = 0, P = 0; P < C.length; P++) {
                    for (var O = p((x = C[P])[0]), L = b(T(h(x.index), o.length), 0), R = [], M = 1; M < x.length; M++) w(R, void 0 === (k = x[M]) ? k : String(k));
                    var N = x.groups;
                    if (f) {
                        var F = S([O], R, L, o);
                        void 0 !== N && w(F, N);
                        var U = p(r(n, void 0, F))
                    } else U = y(O, o, L, R, N, n);
                    L >= I && (A += D(o, I, L) + U, I = L + O.length)
                }
                return A + D(o, I)
            }]
        }), !!o((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })) || !C || x)
    }, (e, t, i) => {
        var r = i(13),
            n = i(58).trim;
        r({
            target: "String",
            proto: !0,
            forced: i(123)("trim")
        }, {
            trim: function () {
                return n(this)
            }
        })
    }, , (e, t, i) => {
        var r = i(6),
            n = i(45),
            s = i(11),
            a = i(7),
            o = i(14),
            l = i(78);
        t.f = r && !n ? Object.defineProperties : function (e, t) {
            a(e);
            for (var i, r = o(t), n = l(t), u = n.length, c = 0; u > c;) s.f(e, i = n[c++], r[i]);
            return e
        }
    }, (e, t) => {
        var i = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            n = r && !i.call({
                1: 2
            }, 1);
        t.f = n ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable
        } : i
    }, (e, t, i) => {
        var r = i(50),
            n = i(33).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return r(e, n)
        }
    }, (e, t) => {
        t.f = Object.getOwnPropertySymbols
    }, () => {}, , () => {}, () => {}, () => {}, (e, t, i) => {
        var r = i(13),
            n = i(0),
            s = i(124),
            a = i(12),
            o = i(9),
            l = i(126),
            u = n("".indexOf);
        r({
            target: "String",
            proto: !0,
            forced: !l("includes")
        }, {
            includes: function (e) {
                return !!~u(o(a(this)), o(s(e)), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, (e, t, i) => {
        var r = i(13),
            n = i(6),
            s = i(3),
            a = i(0),
            o = i(5),
            l = i(1),
            u = i(31),
            c = i(9),
            h = i(11).f,
            d = i(52),
            p = s.Symbol,
            f = p && p.prototype;
        if (n && l(p) && (!("description" in f) || void 0 !== p().description)) {
            var m = {},
                g = function () {
                    var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : c(arguments[0]),
                        t = u(f, this) ? new p(e) : void 0 === e ? p() : p(e);
                    return "" === e && (m[t] = !0), t
                };
            d(g, p), g.prototype = f, f.constructor = g;
            var y = "Symbol(test)" == String(p("test")),
                _ = a(f.valueOf),
                v = a(f.toString),
                b = /^Symbol\((.*)\)[^)]+$/,
                T = a("".replace),
                S = a("".slice);
            h(f, "description", {
                configurable: !0,
                get: function () {
                    var e = _(this);
                    if (o(m, e)) return "";
                    var t = v(e),
                        i = y ? S(t, 7, -1) : T(t, b, "$1");
                    return "" === i ? void 0 : i
                }
            }), r({
                global: !0,
                constructor: !0,
                forced: !0
            }, {
                Symbol: g
            })
        }
    }, (e, t, i) => {
        var r = i(13),
            n = i(127);
        r({
            global: !0,
            forced: parseInt != n
        }, {
            parseInt: n
        })
    }, (e, t, i) => {
        i.d(t, {
            a: () => C
        });
        var r = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

        function n(e) {
            var t = e.nodeType,
                i = "";
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) i += n(e)
            } else if (3 === t || 4 === t) return e.nodeValue;
            return i
        }
        var s, a, o, l, u, c, h = /(?:\r|\n|\t\t)/g,
            d = /(?:\s\s+)/g,
            p = function (e) {
                s = document, a = window, (l = l || e || a.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (c = l.utils.toArray, u = l.core.context || function () { }, o = 1)
            },
            f = function (e) {
                return a.getComputedStyle(e)
            },
            m = function (e) {
                return "absolute" === e.position || !0 === e.absolute
            },
            g = function (e, t) {
                for (var i, r = t.length; --r > -1;)
                    if (i = t[r], e.substr(0, i.length) === i) return i.length
            },
            y = function (e, t) {
                void 0 === e && (e = "");
                var i = ~e.indexOf("++"),
                    r = 1;
                return i && (e = e.split("++").join("")),
                    function () {
                        return "<" + t + " style='position:relative;display:inline-block;'" + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
                    }
            },
            _ = function e(t, i, r) {
                var n = t.nodeType;
                if (1 === n || 9 === n || 11 === n)
                    for (t = t.firstChild; t; t = t.nextSibling) e(t, i, r);
                else 3 !== n && 4 !== n || (t.nodeValue = t.nodeValue.split(i).join(r))
            },
            v = function (e, t) {
                for (var i = t.length; --i > -1;) e.push(t[i])
            },
            b = function (e, t, i) {
                for (var r; e && e !== t;) {
                    if (r = e._next || e.nextSibling) return r.textContent.charAt(0) === i;
                    e = e.parentNode || e._parent
                }
            },
            T = function e(t) {
                var i, r, n = c(t.childNodes),
                    s = n.length;
                for (i = 0; i < s; i++)(r = n[i])._isSplit ? e(r) : i && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue, t.removeChild(r)) : 3 !== r.nodeType && (t.insertBefore(r.firstChild, r), t.removeChild(r))
            },
            S = function (e, t) {
                return parseFloat(t[e]) || 0
            },
            w = function (e, t, i, r, n, a, o) {
                var l, u, c, h, d, p, g, y, w, E, D, C, x = f(e),
                    k = S("paddingLeft", x),
                    A = -999,
                    I = S("borderBottomWidth", x) + S("borderTopWidth", x),
                    P = S("borderLeftWidth", x) + S("borderRightWidth", x),
                    O = S("paddingTop", x) + S("paddingBottom", x),
                    L = S("paddingLeft", x) + S("paddingRight", x),
                    R = S("fontSize", x) * (t.lineThreshold || .2),
                    M = x.textAlign,
                    N = [],
                    F = [],
                    U = [],
                    B = t.wordDelimiter || " ",
                    j = t.tag ? t.tag : t.span ? "span" : "div",
                    q = t.type || t.split || "chars,words,lines",
                    $ = n && ~q.indexOf("lines") ? [] : null,
                    H = ~q.indexOf("words"),
                    V = ~q.indexOf("chars"),
                    z = m(t),
                    W = t.linesClass,
                    G = ~(W || "").indexOf("++"),
                    X = [],
                    Y = "flex" === x.display,
                    K = e.style.display;
                for (G && (W = W.split("++").join("")), Y && (e.style.display = "block"), c = (u = e.getElementsByTagName("*")).length, d = [], l = 0; l < c; l++) d[l] = u[l];
                if ($ || z)
                    for (l = 0; l < c; l++)((p = (h = d[l]).parentNode === e) || z || V && !H) && (C = h.offsetTop, $ && p && Math.abs(C - A) > R && ("BR" !== h.nodeName || 0 === l) && (g = [], $.push(g), A = C), z && (h._x = h.offsetLeft, h._y = C, h._w = h.offsetWidth, h._h = h.offsetHeight), $ && ((h._isSplit && p || !V && p || H && p || !H && h.parentNode.parentNode === e && !h.parentNode._isSplit) && (g.push(h), h._x -= k, b(h, e, B) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === l) && $.push([])));
                for (l = 0; l < c; l++)
                    if (p = (h = d[l]).parentNode === e, "BR" !== h.nodeName)
                        if (z && (w = h.style, H || p || (h._x += h.parentNode._x, h._y += h.parentNode._y), w.left = h._x + "px", w.top = h._y + "px", w.position = "absolute", w.display = "block", w.width = h._w + 1 + "px", w.height = h._h + "px"), !H && V)
                            if (h._isSplit)
                                for (h._next = u = h.nextSibling, h.parentNode.appendChild(h); u && 3 === u.nodeType && " " === u.textContent;) h._next = u.nextSibling, h.parentNode.appendChild(u), u = u.nextSibling;
                            else h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && X.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), d.splice(l--, 1), c--) : p || (C = !h.nextSibling && b(h.parentNode, e, B), h.parentNode._parent && h.parentNode._parent.appendChild(h), C && h.parentNode.appendChild(s.createTextNode(" ")), "span" === j && (h.style.display = "inline"), N.push(h));
                        else h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? F.push(h) : V && !h._isSplit && ("span" === j && (h.style.display = "inline"), N.push(h));
                    else $ || z ? (h.parentNode && h.parentNode.removeChild(h), d.splice(l--, 1), c--) : H || e.appendChild(h);
                for (l = X.length; --l > -1;) X[l].parentNode.removeChild(X[l]);
                if ($) {
                    for (z && (E = s.createElement(j), e.appendChild(E), D = E.offsetWidth + "px", C = E.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(E)), w = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                    for (y = " " === B && (!z || !H && !V), l = 0; l < $.length; l++) {
                        for (g = $[l], (E = s.createElement(j)).style.cssText = "display:block;text-align:" + M + ";position:" + (z ? "absolute;" : "relative;"), W && (E.className = W + (G ? l + 1 : "")), U.push(E), c = g.length, u = 0; u < c; u++) "BR" !== g[u].nodeName && (h = g[u], E.appendChild(h), y && h._wordEnd && E.appendChild(s.createTextNode(" ")), z && (0 === u && (E.style.top = h._y + "px", E.style.left = k + C + "px"), h.style.top = "0px", C && (h.style.left = h._x - C + "px")));
                        0 === c ? E.innerHTML = "&nbsp;" : H || V || (T(E), _(E, String.fromCharCode(160), " ")), z && (E.style.width = D, E.style.height = h._h + "px"), e.appendChild(E)
                    }
                    e.style.cssText = w
                }
                z && (o > e.clientHeight && (e.style.height = o - O + "px", e.clientHeight < o && (e.style.height = o + I + "px")), a > e.clientWidth && (e.style.width = a - L + "px", e.clientWidth < a && (e.style.width = a + P + "px"))), Y && (K ? e.style.display = K : e.style.removeProperty("display")), v(i, N), H && v(r, F), v(n, U)
            },
            E = function (e, t, i, a) {
                var o, l, u, c, p, f, y, v, b = t.tag ? t.tag : t.span ? "span" : "div",
                    T = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
                    S = m(t),
                    w = t.wordDelimiter || " ",
                    E = " " !== w ? "" : S ? "&#173; " : " ",
                    D = "</" + b + ">",
                    C = 1,
                    x = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : g : null,
                    k = s.createElement("div"),
                    A = e.parentNode;
                for (A.insertBefore(k, e), k.textContent = e.nodeValue, A.removeChild(e), y = -1 !== (o = n(e = k)).indexOf("<"), !1 !== t.reduceWhiteSpace && (o = o.replace(d, " ").replace(h, "")), y && (o = o.split("<").join("{{LT}}")), p = o.length, l = (" " === o.charAt(0) ? E : "") + i(), u = 0; u < p; u++)
                    if (f = o.charAt(u), x && (v = x(o.substr(u), t.specialChars))) f = o.substr(u, v || 1), l += T && " " !== f ? a() + f + "</" + b + ">" : f, u += v - 1;
                    else if (f === w && o.charAt(u - 1) !== w && u) {
                        for (l += C ? D : "", C = 0; o.charAt(u + 1) === w;) l += E, u++;
                        u === p - 1 ? l += E : ")" !== o.charAt(u + 1) && (l += E + i(), C = 1)
                    } else "{" === f && "{{LT}}" === o.substr(u, 6) ? (l += T ? a() + "{{LT}}</" + b + ">" : "{{LT}}", u += 5) : f.charCodeAt(0) >= 55296 && f.charCodeAt(0) <= 56319 || o.charCodeAt(u + 1) >= 65024 && o.charCodeAt(u + 1) <= 65039 ? (c = ((o.substr(u, 12).split(r) || [])[1] || "").length || 2, l += T && " " !== f ? a() + o.substr(u, c) + "</" + b + ">" : o.substr(u, c), u += c - 1) : l += T && " " !== f ? a() + f + "</" + b + ">" : f;
                e.outerHTML = l + (C ? D : ""), y && _(A, "{{LT}}", "<")
            },
            D = function e(t, i, r, n) {
                var s, a, o = c(t.childNodes),
                    l = o.length,
                    u = m(i);
                if (3 !== t.nodeType || l > 1) {
                    for (i.absolute = !1, s = 0; s < l; s++)(a = o[s])._next = a._isFirst = a._parent = a._wordEnd = null, (3 !== a.nodeType || /\S+/.test(a.nodeValue)) && (u && 3 !== a.nodeType && "inline" === f(a).display && (a.style.display = "inline-block", a.style.position = "relative"), a._isSplit = !0, e(a, i, r, n));
                    return i.absolute = u, void (t._isSplit = !0)
                }
                E(t, i, r, n)
            },
            C = function () {
                function e(e, t) {
                    o || p(), this.elements = c(e), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, u(this), this.split(t)
                }
                var t = e.prototype;
                return t.split = function (e) {
                    this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var t, i, r, n = this.elements.length, s = e.tag ? e.tag : e.span ? "span" : "div", a = y(e.wordsClass, s), o = y(e.charsClass, s); --n > -1;) r = this.elements[n], this._originals[n] = r.innerHTML, t = r.clientHeight, i = r.clientWidth, D(r, e, a, o), w(r, e, this.chars, this.words, this.lines, i, t);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                }, t.revert = function () {
                    var e = this._originals;
                    if (!e) throw "revert() call wasn't scoped properly.";
                    return this.elements.forEach((function (t, i) {
                        return t.innerHTML = e[i]
                    })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                }, e.create = function (t, i) {
                    return new e(t, i)
                }, e
            }();
        C.version = "3.12.2", C.register = p
    }, (e, t, i) => {
        function r(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function n(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }
        i.d(t, {
            a: () => Yr
        });
        var s, a, o, l, u, c, h, d, p, f, m, g, y, _, v, b, T, S = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
            w = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            E = 1e8,
            D = 1e-8,
            C = 2 * Math.PI,
            x = C / 4,
            k = 0,
            A = Math.sqrt,
            I = Math.cos,
            P = Math.sin,
            O = function (e) {
                return "string" == typeof e
            },
            L = function (e) {
                return "function" == typeof e
            },
            R = function (e) {
                return "number" == typeof e
            },
            M = function (e) {
                return void 0 === e
            },
            N = function (e) {
                return "object" == typeof e
            },
            F = function (e) {
                return !1 !== e
            },
            U = function () {
                return "undefined" != typeof window
            },
            B = function (e) {
                return L(e) || O(e)
            },
            j = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () { },
            q = Array.isArray,
            $ = /(?:-?\.?\d|\.)+/gi,
            H = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            V = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            z = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            W = /[+-]=-?[.\d]+/,
            G = /[^,'"\[\]\s]+/gi,
            X = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            Y = {},
            K = {},
            Q = function (e) {
                return (K = Ce(e, Y)) && xi
            },
            J = function (e, t) {
                return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
            },
            Z = function (e, t) {
                return !t && console.warn(e)
            },
            ee = function (e, t) {
                return e && (Y[e] = t) && K && (K[e] = t) || Y
            },
            te = function () {
                return 0
            },
            ie = {
                suppressEvents: !0,
                isStart: !0,
                kill: !1
            },
            re = {
                suppressEvents: !0,
                kill: !1
            },
            ne = {
                suppressEvents: !0
            },
            se = {},
            ae = [],
            oe = {},
            le = {},
            ue = {},
            ce = 30,
            he = [],
            de = "",
            pe = function (e) {
                var t, i, r = e[0];
                if (N(r) || L(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
                    for (i = he.length; i-- && !he[i].targetTest(r););
                    t = he[i]
                }
                for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new qt(e[i], t))) || e.splice(i, 1);
                return e
            },
            fe = function (e) {
                return e._gsap || pe(nt(e))[0]._gsap
            },
            me = function (e, t, i) {
                return (i = e[t]) && L(i) ? e[t]() : M(i) && e.getAttribute && e.getAttribute(t) || i
            },
            ge = function (e, t) {
                return (e = e.split(",")).forEach(t) || e
            },
            ye = function (e) {
                return Math.round(1e5 * e) / 1e5 || 0
            },
            _e = function (e) {
                return Math.round(1e7 * e) / 1e7 || 0
            },
            ve = function (e, t) {
                var i = t.charAt(0),
                    r = parseFloat(t.substr(2));
                return e = parseFloat(e), "+" === i ? e + r : "-" === i ? e - r : "*" === i ? e * r : e / r
            },
            be = function (e, t) {
                for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i;);
                return r < i
            },
            Te = function () {
                var e, t, i = ae.length,
                    r = ae.slice(0);
                for (oe = {}, ae.length = 0, e = 0; e < i; e++)(t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
            },
            Se = function (e, t, i, r) {
                ae.length && !a && Te(), e.render(t, i, r || a && t < 0 && (e._initted || e._startAt)), ae.length && !a && Te()
            },
            we = function (e) {
                var t = parseFloat(e);
                return (t || 0 === t) && (e + "").match(G).length < 2 ? t : O(e) ? e.trim() : e
            },
            Ee = function (e) {
                return e
            },
            De = function (e, t) {
                for (var i in t) i in e || (e[i] = t[i]);
                return e
            },
            Ce = function (e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            xe = function e(t, i) {
                for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = N(i[r]) ? e(t[r] || (t[r] = {}), i[r]) : i[r]);
                return t
            },
            ke = function (e, t) {
                var i, r = {};
                for (i in e) i in t || (r[i] = e[i]);
                return r
            },
            Ae = function (e) {
                var t, i = e.parent || l,
                    r = e.keyframes ? (t = q(e.keyframes), function (e, i) {
                        for (var r in i) r in e || "duration" === r && t || "ease" === r || (e[r] = i[r])
                    }) : De;
                if (F(e.inherit))
                    for (; i;) r(e, i.vars.defaults), i = i.parent || i._dp;
                return e
            },
            Ie = function (e, t, i, r, n) {
                void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                var s, a = e[r];
                if (n)
                    for (s = t[n]; a && a[n] > s;) a = a._prev;
                return a ? (t._next = a._next, a._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t
            },
            Pe = function (e, t, i, r) {
                void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                var n = t._prev,
                    s = t._next;
                n ? n._next = s : e[i] === t && (e[i] = s), s ? s._prev = n : e[r] === t && (e[r] = n), t._next = t._prev = t.parent = null
            },
            Oe = function (e, t) {
                e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
            },
            Le = function (e, t) {
                if (e && (!t || t._end > e._dur || t._start < 0))
                    for (var i = e; i;) i._dirty = 1, i = i.parent;
                return e
            },
            Re = function (e, t, i, r) {
                return e._startAt && (a ? e._startAt.revert(re) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
            },
            Me = function e(t) {
                return !t || t._ts && e(t.parent)
            },
            Ne = function (e) {
                return e._repeat ? Fe(e._tTime, e = e.duration() + e._rDelay) * e : 0
            },
            Fe = function (e, t) {
                var i = Math.floor(e /= t);
                return e && i === e ? i - 1 : i
            },
            Ue = function (e, t) {
                return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            },
            Be = function (e) {
                return e._end = _e(e._start + (e._tDur / Math.abs(e._ts || e._rts || D) || 0))
            },
            je = function (e, t) {
                var i = e._dp;
                return i && i.smoothChildTiming && e._ts && (e._start = _e(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Be(e), i._dirty || Le(i, e)), e
            },
            qe = function (e, t) {
                var i;
                if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = Ue(e.rawTime(), t), (!t._dur || Ze(0, t.totalDuration(), i) - t._tTime > D) && t.render(i, !0)), Le(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                    if (e._dur < e.duration())
                        for (i = e; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    e._zTime = -1e-8
                }
            },
            $e = function (e, t, i, r) {
                return t.parent && Oe(t), t._start = _e((R(i) ? i : i || e !== l ? Ke(e, i, t) : e._time) + t._delay), t._end = _e(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ie(e, t, "_first", "_last", e._sort ? "_start" : 0), We(t) || (e._recent = t), r || qe(e, t), e._ts < 0 && je(e, e._tTime), e
            },
            He = function (e, t) {
                return (Y.ScrollTrigger || J("scrollTrigger", t)) && Y.ScrollTrigger.create(t, e)
            },
            Ve = function (e, t, i, r, n) {
                return Yt(e, t, n), e._initted ? !i && e._pt && !a && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && p !== kt.frame ? (ae.push(e), e._lazy = [n, r], 1) : void 0 : 1
            },
            ze = function e(t) {
                var i = t.parent;
                return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || e(i))
            },
            We = function (e) {
                var t = e.data;
                return "isFromStart" === t || "isStart" === t
            },
            Ge = function (e, t, i, r) {
                var n = e._repeat,
                    s = _e(t) || 0,
                    a = e._tTime / e._tDur;
                return a && !r && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : _e(s * (n + 1) + e._rDelay * n) : s, a > 0 && !r && je(e, e._tTime = e._tDur * a), e.parent && Be(e), i || Le(e.parent, e), e
            },
            Xe = function (e) {
                return e instanceof Ht ? Le(e) : Ge(e, e._dur)
            },
            Ye = {
                _start: 0,
                endTime: te,
                totalDuration: te
            },
            Ke = function e(t, i, r) {
                var n, s, a, o = t.labels,
                    l = t._recent || Ye,
                    u = t.duration() >= E ? l.endTime(!1) : t._dur;
                return O(i) && (isNaN(i) || i in o) ? (s = i.charAt(0), a = "%" === i.substr(-1), n = i.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (n < 0 ? l : r).totalDuration() / 100 : 1)) : n < 0 ? (i in o || (o[i] = u), o[i]) : (s = parseFloat(i.charAt(n - 1) + i.substr(n + 1)), a && r && (s = s / 100 * (q(r) ? r[0] : r).totalDuration()), n > 1 ? e(t, i.substr(0, n - 1), r) + s : u + s)) : null == i ? u : +i
            },
            Qe = function (e, t, i) {
                var r, n, s = R(t[1]),
                    a = (s ? 2 : 1) + (e < 2 ? 0 : 1),
                    o = t[a];
                if (s && (o.duration = t[1]), o.parent = i, e) {
                    for (r = o, n = i; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = F(n.vars.inherit) && n.parent;
                    o.immediateRender = F(r.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
                }
                return new ei(t[0], o, t[a + 1])
            },
            Je = function (e, t) {
                return e || 0 === e ? t(e) : t
            },
            Ze = function (e, t, i) {
                return i < e ? e : i > t ? t : i
            },
            et = function (e, t) {
                return O(e) && (t = X.exec(e)) ? t[1] : ""
            },
            tt = [].slice,
            it = function (e, t) {
                return e && N(e) && "length" in e && (!t && !e.length || e.length - 1 in e && N(e[0])) && !e.nodeType && e !== u
            },
            rt = function (e, t, i) {
                return void 0 === i && (i = []), e.forEach((function (e) {
                    var r;
                    return O(e) && !t || it(e, 1) ? (r = i).push.apply(r, nt(e)) : i.push(e)
                })) || i
            },
            nt = function (e, t, i) {
                return o && !t && o.selector ? o.selector(e) : !O(e) || i || !c && At() ? q(e) ? rt(e, i) : it(e) ? tt.call(e, 0) : e ? [e] : [] : tt.call((t || h).querySelectorAll(e), 0)
            },
            st = function (e) {
                return e = nt(e)[0] || Z("Invalid scope") || {},
                    function (t) {
                        var i = e.current || e.nativeElement || e;
                        return nt(t, i.querySelectorAll ? i : i === e ? Z("Invalid scope") || h.createElement("div") : e)
                    }
            },
            at = function (e) {
                return e.sort((function () {
                    return .5 - Math.random()
                }))
            },
            ot = function (e) {
                if (L(e)) return e;
                var t = N(e) ? e : {
                    each: e
                },
                    i = Nt(t.ease),
                    r = t.from || 0,
                    n = parseFloat(t.base) || 0,
                    s = {},
                    a = r > 0 && r < 1,
                    o = isNaN(r) || a,
                    l = t.axis,
                    u = r,
                    c = r;
                return O(r) ? u = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[r] || 0 : !a && o && (u = r[0], c = r[1]),
                    function (e, a, h) {
                        var d, p, f, m, g, y, _, v, b, T = (h || t).length,
                            S = s[T];
                        if (!S) {
                            if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, E])[1])) {
                                for (_ = -E; _ < (_ = h[b++].getBoundingClientRect().left) && b < T;);
                                b--
                            }
                            for (S = s[T] = [], d = o ? Math.min(b, T) * u - .5 : r % b, p = b === E ? 0 : o ? T * c / b - .5 : r / b | 0, _ = 0, v = E, y = 0; y < T; y++) f = y % b - d, m = p - (y / b | 0), S[y] = g = l ? Math.abs("y" === l ? m : f) : A(f * f + m * m), g > _ && (_ = g), g < v && (v = g);
                            "random" === r && at(S), S.max = _ - v, S.min = v, S.v = T = (parseFloat(t.amount) || parseFloat(t.each) * (b > T ? T - 1 : l ? "y" === l ? T / b : b : Math.max(b, T / b)) || 0) * ("edges" === r ? -1 : 1), S.b = T < 0 ? n - T : n, S.u = et(t.amount || t.each) || 0, i = i && T < 0 ? Rt(i) : i
                        }
                        return T = (S[e] - S.min) / S.max || 0, _e(S.b + (i ? i(T) : T) * S.v) + S.u
                    }
            },
            lt = function (e) {
                var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
                return function (i) {
                    var r = _e(Math.round(parseFloat(i) / e) * e * t);
                    return (r - r % 1) / t + (R(i) ? 0 : et(i))
                }
            },
            ut = function (e, t) {
                var i, r, n = q(e);
                return !n && N(e) && (i = n = e.radius || E, e.values ? (e = nt(e.values), (r = !R(e[0])) && (i *= i)) : e = lt(e.increment)), Je(t, n ? L(e) ? function (t) {
                    return r = e(t), Math.abs(r - t) <= i ? r : t
                } : function (t) {
                    for (var n, s, a = parseFloat(r ? t.x : t), o = parseFloat(r ? t.y : 0), l = E, u = 0, c = e.length; c--;)(n = r ? (n = e[c].x - a) * n + (s = e[c].y - o) * s : Math.abs(e[c] - a)) < l && (l = n, u = c);
                    return u = !i || l <= i ? e[u] : t, r || u === t || R(t) ? u : u + et(t)
                } : lt(e))
            },
            ct = function (e, t, i, r) {
                return Je(q(e) ? !t : !0 === i ? !!(i = 0) : !r, (function () {
                    return q(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + .99 * i)) / i) * i * r) / r
                }))
            },
            ht = function (e, t, i) {
                return Je(i, (function (i) {
                    return e[~~t(i)]
                }))
            },
            dt = function (e) {
                for (var t, i, r, n, s = 0, a = ""; ~(t = e.indexOf("random(", s));) r = e.indexOf(")", t), n = "[" === e.charAt(t + 7), i = e.substr(t + 7, r - t - 7).match(n ? G : $), a += e.substr(s, t - s) + ct(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5), s = r + 1;
                return a + e.substr(s, e.length - s)
            },
            pt = function (e, t, i, r, n) {
                var s = t - e,
                    a = r - i;
                return Je(n, (function (t) {
                    return i + ((t - e) / s * a || 0)
                }))
            },
            ft = function (e, t, i) {
                var r, n, s, a = e.labels,
                    o = E;
                for (r in a) (n = a[r] - t) < 0 == !!i && n && o > (n = Math.abs(n)) && (s = r, o = n);
                return s
            },
            mt = function (e, t, i) {
                var r, n, s, a = e.vars,
                    l = a[t],
                    u = o,
                    c = e._ctx;
                if (l) return r = a[t + "Params"], n = a.callbackScope || e, i && ae.length && Te(), c && (o = c), s = r ? l.apply(n, r) : l.call(n), o = u, s
            },
            gt = function (e) {
                return Oe(e), e.scrollTrigger && e.scrollTrigger.kill(!!a), e.progress() < 1 && mt(e, "onInterrupt"), e
            },
            yt = [],
            _t = function (e) {
                if (U() && e) {
                    var t = (e = !e.name && e.default || e).name,
                        i = L(e),
                        r = t && !i && e.init ? function () {
                            this._props = []
                        } : e,
                        n = {
                            init: te,
                            render: ui,
                            add: Gt,
                            kill: hi,
                            modifier: ci,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: si,
                            aliases: {},
                            register: 0
                        };
                    if (At(), e !== r) {
                        if (le[t]) return;
                        De(r, De(ke(e, n), s)), Ce(r.prototype, Ce(n, ke(e, s))), le[r.prop = t] = r, e.targetTest && (he.push(r), se[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                    }
                    ee(t, r), e.register && e.register(xi, r, fi)
                } else e && yt.push(e)
            },
            vt = 255,
            bt = {
                aqua: [0, vt, vt],
                lime: [0, vt, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, vt],
                navy: [0, 0, 128],
                white: [vt, vt, vt],
                olive: [128, 128, 0],
                yellow: [vt, vt, 0],
                orange: [vt, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [vt, 0, 0],
                pink: [vt, 192, 203],
                cyan: [0, vt, vt],
                transparent: [vt, vt, vt, 0]
            },
            Tt = function (e, t, i) {
                return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * vt + .5 | 0
            },
            St = function (e, t, i) {
                var r, n, s, a, o, l, u, c, h, d, p = e ? R(e) ? [e >> 16, e >> 8 & vt, e & vt] : 0 : bt.black;
                if (!p) {
                    if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), bt[e]) p = bt[e];
                    else if ("#" === e.charAt(0)) {
                        if (e.length < 6 && (r = e.charAt(1), n = e.charAt(2), s = e.charAt(3), e = "#" + r + r + n + n + s + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & vt, p & vt, parseInt(e.substr(7), 16) / 255];
                        p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & vt, e & vt]
                    } else if ("hsl" === e.substr(0, 3))
                        if (p = d = e.match($), t) {
                            if (~e.indexOf("=")) return p = e.match(H), i && p.length < 4 && (p[3] = 1), p
                        } else a = +p[0] % 360 / 360, o = +p[1] / 100, r = 2 * (l = +p[2] / 100) - (n = l <= .5 ? l * (o + 1) : l + o - l * o), p.length > 3 && (p[3] *= 1), p[0] = Tt(a + 1 / 3, r, n), p[1] = Tt(a, r, n), p[2] = Tt(a - 1 / 3, r, n);
                    else p = e.match($) || bt.transparent;
                    p = p.map(Number)
                }
                return t && !d && (r = p[0] / vt, n = p[1] / vt, s = p[2] / vt, l = ((u = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2, u === c ? a = o = 0 : (h = u - c, o = l > .5 ? h / (2 - u - c) : h / (u + c), a = u === r ? (n - s) / h + (n < s ? 6 : 0) : u === n ? (s - r) / h + 2 : (r - n) / h + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * l + .5)), i && p.length < 4 && (p[3] = 1), p
            },
            wt = function (e) {
                var t = [],
                    i = [],
                    r = -1;
                return e.split(Dt).forEach((function (e) {
                    var n = e.match(V) || [];
                    t.push.apply(t, n), i.push(r += n.length + 1)
                })), t.c = i, t
            },
            Et = function (e, t, i) {
                var r, n, s, a, o = "",
                    l = (e + o).match(Dt),
                    u = t ? "hsla(" : "rgba(",
                    c = 0;
                if (!l) return e;
                if (l = l.map((function (e) {
                    return (e = St(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
                })), i && (s = wt(e), (r = i.c).join(o) !== s.c.join(o)))
                    for (a = (n = e.replace(Dt, "1").split(V)).length - 1; c < a; c++) o += n[c] + (~r.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
                if (!n)
                    for (a = (n = e.split(Dt)).length - 1; c < a; c++) o += n[c] + l[c];
                return o + n[a]
            },
            Dt = function () {
                var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (e in bt) t += "|" + e + "\\b";
                return new RegExp(t + ")", "gi")
            }(),
            Ct = /hsl[a]?\(/,
            xt = function (e) {
                var t, i = e.join(" ");
                if (Dt.lastIndex = 0, Dt.test(i)) return t = Ct.test(i), e[1] = Et(e[1], t), e[0] = Et(e[0], t, wt(e[1])), !0
            },
            kt = function () {
                var e, t, i, r, n, s, a = Date.now,
                    o = 500,
                    l = 33,
                    p = a(),
                    f = p,
                    g = 1e3 / 240,
                    y = g,
                    _ = [],
                    v = function i(u) {
                        var c, h, d, m, v = a() - f,
                            b = !0 === u;
                        if (v > o && (p += v - l), ((c = (d = (f += v) - p) - y) > 0 || b) && (m = ++r.frame, n = d - 1e3 * r.time, r.time = d /= 1e3, y += c + (c >= g ? 4 : g - c), h = 1), b || (e = t(i)), h)
                            for (s = 0; s < _.length; s++) _[s](d, n, m, u)
                    };
                return r = {
                    time: 0,
                    frame: 0,
                    tick: function () {
                        v(!0)
                    },
                    deltaRatio: function (e) {
                        return n / (1e3 / (e || 60))
                    },
                    wake: function () {
                        d && (!c && U() && (u = c = window, h = u.document || {}, Y.gsap = xi, (u.gsapVersions || (u.gsapVersions = [])).push(xi.version), Q(K || u.GreenSockGlobals || !u.gsap && u || {}), i = u.requestAnimationFrame, yt.forEach(_t)), e && r.sleep(), t = i || function (e) {
                            return setTimeout(e, y - 1e3 * r.time + 1 | 0)
                        }, m = 1, v(2))
                    },
                    sleep: function () {
                        (i ? u.cancelAnimationFrame : clearTimeout)(e), m = 0, t = te
                    },
                    lagSmoothing: function (e, t) {
                        o = e || 1 / 0, l = Math.min(t || 33, o)
                    },
                    fps: function (e) {
                        g = 1e3 / (e || 240), y = 1e3 * r.time + g
                    },
                    add: function (e, t, i) {
                        var n = t ? function (t, i, s, a) {
                            e(t, i, s, a), r.remove(n)
                        } : e;
                        return r.remove(e), _[i ? "unshift" : "push"](n), At(), n
                    },
                    remove: function (e, t) {
                        ~(t = _.indexOf(e)) && _.splice(t, 1) && s >= t && s--
                    },
                    _listeners: _
                }
            }(),
            At = function () {
                return !m && kt.wake()
            },
            It = {},
            Pt = /^[\d.\-M][\d.\-,\s]/,
            Ot = /["']/g,
            Lt = function (e) {
                for (var t, i, r, n = {}, s = e.substr(1, e.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++) i = s[o], t = o !== l - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, t), n[a] = isNaN(r) ? r.replace(Ot, "").trim() : +r, a = i.substr(t + 1).trim();
                return n
            },
            Rt = function (e) {
                return function (t) {
                    return 1 - e(1 - t)
                }
            },
            Mt = function e(t, i) {
                for (var r, n = t._first; n;) n instanceof Ht ? e(n, i) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === i || (n.timeline ? e(n.timeline, i) : (r = n._ease, n._ease = n._yEase, n._yEase = r, n._yoyo = i)), n = n._next
            },
            Nt = function (e, t) {
                return e && (L(e) ? e : It[e] || function (e) {
                    var t, i, r, n, s = (e + "").split("("),
                        a = It[s[0]];
                    return a && s.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Lt(s[1])] : (t = e, i = t.indexOf("(") + 1, r = t.indexOf(")"), n = t.indexOf("(", i), t.substring(i, ~n && n < r ? t.indexOf(")", r + 1) : r)).split(",").map(we)) : It._CE && Pt.test(e) ? It._CE("", e) : a
                }(e)) || t
            },
            Ft = function (e, t, i, r) {
                void 0 === i && (i = function (e) {
                    return 1 - t(1 - e)
                }), void 0 === r && (r = function (e) {
                    return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
                });
                var n, s = {
                    easeIn: t,
                    easeOut: i,
                    easeInOut: r
                };
                return ge(e, (function (e) {
                    for (var t in It[e] = Y[e] = s, It[n = e.toLowerCase()] = i, s) It[n + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = It[e + "." + t] = s[t]
                })), s
            },
            Ut = function (e) {
                return function (t) {
                    return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
                }
            },
            Bt = function e(t, i, r) {
                var n = i >= 1 ? i : 1,
                    s = (r || (t ? .3 : .45)) / (i < 1 ? i : 1),
                    a = s / C * (Math.asin(1 / n) || 0),
                    o = function (e) {
                        return 1 === e ? 1 : n * Math.pow(2, -10 * e) * P((e - a) * s) + 1
                    },
                    l = "out" === t ? o : "in" === t ? function (e) {
                        return 1 - o(1 - e)
                    } : Ut(o);
                return s = C / s, l.config = function (i, r) {
                    return e(t, i, r)
                }, l
            },
            jt = function e(t, i) {
                void 0 === i && (i = 1.70158);
                var r = function (e) {
                    return e ? --e * e * ((i + 1) * e + i) + 1 : 0
                },
                    n = "out" === t ? r : "in" === t ? function (e) {
                        return 1 - r(1 - e)
                    } : Ut(r);
                return n.config = function (i) {
                    return e(t, i)
                }, n
            };
        ge("Linear,Quad,Cubic,Quart,Quint,Strong", (function (e, t) {
            var i = t < 5 ? t + 1 : t;
            Ft(e + ",Power" + (i - 1), t ? function (e) {
                return Math.pow(e, i)
            } : function (e) {
                return e
            }, (function (e) {
                return 1 - Math.pow(1 - e, i)
            }), (function (e) {
                return e < .5 ? Math.pow(2 * e, i) / 2 : 1 - Math.pow(2 * (1 - e), i) / 2
            }))
        })), It.Linear.easeNone = It.none = It.Linear.easeIn, Ft("Elastic", Bt("in"), Bt("out"), Bt()), g = 7.5625, v = 2 * (_ = 1 / (y = 2.75)), b = 2.5 * _, Ft("Bounce", (function (e) {
            return 1 - T(1 - e)
        }), T = function (e) {
            return e < _ ? g * e * e : e < v ? g * Math.pow(e - 1.5 / y, 2) + .75 : e < b ? g * (e -= 2.25 / y) * e + .9375 : g * Math.pow(e - 2.625 / y, 2) + .984375
        }), Ft("Expo", (function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0
        })), Ft("Circ", (function (e) {
            return -(A(1 - e * e) - 1)
        })), Ft("Sine", (function (e) {
            return 1 === e ? 1 : 1 - I(e * x)
        })), Ft("Back", jt("in"), jt("out"), jt()), It.SteppedEase = It.steps = Y.SteppedEase = {
            config: function (e, t) {
                void 0 === e && (e = 1);
                var i = 1 / e,
                    r = e + (t ? 0 : 1),
                    n = t ? 1 : 0;
                return function (e) {
                    return ((r * Ze(0, .99999999, e) | 0) + n) * i
                }
            }
        }, w.ease = It["quad.out"], ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (e) {
            return de += e + "," + e + "Params,"
        }));
        var qt = function (e, t) {
            this.id = k++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : me, this.set = t ? t.getSetter : si
        },
            $t = function () {
                function e(e) {
                    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ge(this, +e.duration, 1, 1), this.data = e.data, o && (this._ctx = o, o.data.push(this)), m || kt.wake()
                }
                var t = e.prototype;
                return t.delay = function (e) {
                    return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
                }, t.duration = function (e) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
                }, t.totalDuration = function (e) {
                    return arguments.length ? (this._dirty = 0, Ge(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, t.totalTime = function (e, t) {
                    if (At(), !arguments.length) return this._tTime;
                    var i = this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (je(this, e), !i._dp || i.parent || qe(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && $e(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === D || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Se(this, e, t)), this
                }, t.time = function (e, t) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ne(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
                }, t.totalProgress = function (e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, t.progress = function (e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ne(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, t.iteration = function (e, t) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (e - 1) * i, t) : this._repeat ? Fe(this._tTime, i) + 1 : 1
                }, t.timeScale = function (e) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === e) return this;
                    var t = this.parent && this._ts ? Ue(this.parent._time, this) : this._tTime;
                    return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Ze(-Math.abs(this._delay), this._tDur, t), !0), Be(this),
                        function (e) {
                            for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                            return e
                        }(this)
                }, t.paused = function (e) {
                    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (At(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== D && (this._tTime -= D)))), this) : this._ps
                }, t.startTime = function (e) {
                    if (arguments.length) {
                        this._start = e;
                        var t = this.parent || this._dp;
                        return t && (t._sort || !this.parent) && $e(t, this, e - this._delay), this
                    }
                    return this._start
                }, t.endTime = function (e) {
                    return this._start + (F(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                }, t.rawTime = function (e) {
                    var t = this.parent || this._dp;
                    return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ue(t.rawTime(e), this) : this._tTime : this._tTime
                }, t.revert = function (e) {
                    void 0 === e && (e = ne);
                    var t = a;
                    return a = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), a = t, this
                }, t.globalTime = function (e) {
                    for (var t = this, i = arguments.length ? e : t.rawTime(); t;) i = t._start + i / (t._ts || 1), t = t._dp;
                    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : i
                }, t.repeat = function (e) {
                    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Xe(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }, t.repeatDelay = function (e) {
                    if (arguments.length) {
                        var t = this._time;
                        return this._rDelay = e, Xe(this), t ? this.time(t) : this
                    }
                    return this._rDelay
                }, t.yoyo = function (e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, t.seek = function (e, t) {
                    return this.totalTime(Ke(this, e), F(t))
                }, t.restart = function (e, t) {
                    return this.play().totalTime(e ? -this._delay : 0, F(t))
                }, t.play = function (e, t) {
                    return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                }, t.reverse = function (e, t) {
                    return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                }, t.pause = function (e, t) {
                    return null != e && this.seek(e, t), this.paused(!0)
                }, t.resume = function () {
                    return this.paused(!1)
                }, t.reversed = function (e) {
                    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
                }, t.invalidate = function () {
                    return this._initted = this._act = 0, this._zTime = -1e-8, this
                }, t.isActive = function () {
                    var e, t = this.parent || this._dp,
                        i = this._start;
                    return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= i && e < this.endTime(!0) - D))
                }, t.eventCallback = function (e, t, i) {
                    var r = this.vars;
                    return arguments.length > 1 ? (t ? (r[e] = t, i && (r[e + "Params"] = i), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e]
                }, t.then = function (e) {
                    var t = this;
                    return new Promise((function (i) {
                        var r = L(e) ? e : Ee,
                            n = function () {
                                var e = t.then;
                                t.then = null, L(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), i(r), t.then = e
                            };
                        t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? n() : t._prom = n
                    }))
                }, t.kill = function () {
                    gt(this)
                }, e
            }();
        De($t.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Ht = function (e) {
            function t(t, i) {
                var n;
                return void 0 === t && (t = {}), (n = e.call(this, t) || this).labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = F(t.sortChildren), l && $e(t.parent || l, r(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && He(r(n), t.scrollTrigger), n
            }
            n(t, e);
            var i = t.prototype;
            return i.to = function (e, t, i) {
                return Qe(0, arguments, this), this
            }, i.from = function (e, t, i) {
                return Qe(1, arguments, this), this
            }, i.fromTo = function (e, t, i, r) {
                return Qe(2, arguments, this), this
            }, i.set = function (e, t, i) {
                return t.duration = 0, t.parent = this, Ae(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new ei(e, t, Ke(this, i), 1), this
            }, i.call = function (e, t, i) {
                return $e(this, ei.delayedCall(0, e, t), i)
            }, i.staggerTo = function (e, t, i, r, n, s, a) {
                return i.duration = t, i.stagger = i.stagger || r, i.onComplete = s, i.onCompleteParams = a, i.parent = this, new ei(e, i, Ke(this, n)), this
            }, i.staggerFrom = function (e, t, i, r, n, s, a) {
                return i.runBackwards = 1, Ae(i).immediateRender = F(i.immediateRender), this.staggerTo(e, t, i, r, n, s, a)
            }, i.staggerFromTo = function (e, t, i, r, n, s, a, o) {
                return r.startAt = i, Ae(r).immediateRender = F(r.immediateRender), this.staggerTo(e, t, r, n, s, a, o)
            }, i.render = function (e, t, i) {
                var r, n, s, o, u, c, h, d, p, f, m, g, y = this._time,
                    _ = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    b = e <= 0 ? 0 : _e(e),
                    T = this._zTime < 0 != e < 0 && (this._initted || !v);
                if (this !== l && b > _ && e >= 0 && (b = _), b !== this._tTime || i || T) {
                    if (y !== this._time && v && (b += this._time - y, e += this._time - y), r = b, p = this._start, c = !(d = this._ts), T && (v || (y = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
                        if (m = this._yoyo, u = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * u + e, t, i);
                        if (r = _e(b % u), b === _ ? (o = this._repeat, r = v) : ((o = ~~(b / u)) && o === b / u && (r = v, o--), r > v && (r = v)), f = Fe(this._tTime, u), !y && this._tTime && f !== o && this._tTime - f * u - this._dur <= 0 && (f = o), m && 1 & o && (r = v - r, g = 1), o !== f && !this._lock) {
                            var S = m && 1 & f,
                                w = S === (m && 1 & o);
                            if (o < f && (S = !S), y = S ? 0 : b % v ? v : b, this._lock = 1, this.render(y || (g ? 0 : _e(o * u)), t, !v)._lock = 0, this._tTime = b, !t && this.parent && mt(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), y && y !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (v = this._dur, _ = this._tDur, w && (this._lock = 2, y = S ? v : -1e-4, this.render(y, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                            Mt(this, g)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (h = function (e, t, i) {
                        var r;
                        if (i > t)
                            for (r = e._first; r && r._start <= i;) {
                                if ("isPause" === r.data && r._start > t) return r;
                                r = r._next
                            } else
                            for (r = e._last; r && r._start >= i;) {
                                if ("isPause" === r.data && r._start < t) return r;
                                r = r._prev
                            }
                    }(this, _e(y), _e(r)), h && (b -= r - (r = h._start))), this._tTime = b, this._time = r, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, y = 0), !y && r && !t && !o && (mt(this, "onStart"), this._tTime !== b)) return this;
                    if (r >= y && e >= 0)
                        for (n = this._first; n;) {
                            if (s = n._next, (n._act || r >= n._start) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(e, t, i);
                                if (n.render(n._ts > 0 ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, t, i), r !== this._time || !this._ts && !c) {
                                    h = 0, s && (b += this._zTime = -1e-8);
                                    break
                                }
                            }
                            n = s
                        } else {
                        n = this._last;
                        for (var E = e < 0 ? e : r; n;) {
                            if (s = n._prev, (n._act || E <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(e, t, i);
                                if (n.render(n._ts > 0 ? (E - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (E - n._start) * n._ts, t, i || a && (n._initted || n._startAt)), r !== this._time || !this._ts && !c) {
                                    h = 0, s && (b += this._zTime = E ? -1e-8 : D);
                                    break
                                }
                            }
                            n = s
                        }
                    }
                    if (h && !t && (this.pause(), h.render(r >= y ? 0 : -1e-8)._zTime = r >= y ? 1 : -1, this._ts)) return this._start = p, Be(this), this.render(e, t, i);
                    this._onUpdate && !t && mt(this, "onUpdate", !0), (b === _ && this._tTime >= this.totalDuration() || !b && y) && (p !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((e || !v) && (b === _ && this._ts > 0 || !b && this._ts < 0) && Oe(this, 1), t || e < 0 && !y || !b && !y && _ || (mt(this, b === _ && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < _ && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, i.add = function (e, t) {
                var i = this;
                if (R(t) || (t = Ke(this, t, e)), !(e instanceof $t)) {
                    if (q(e)) return e.forEach((function (e) {
                        return i.add(e, t)
                    })), this;
                    if (O(e)) return this.addLabel(e, t);
                    if (!L(e)) return this;
                    e = ei.delayedCall(0, e)
                }
                return this !== e ? $e(this, e, t) : this
            }, i.getChildren = function (e, t, i, r) {
                void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === i && (i = !0), void 0 === r && (r = -E);
                for (var n = [], s = this._first; s;) s._start >= r && (s instanceof ei ? t && n.push(s) : (i && n.push(s), e && n.push.apply(n, s.getChildren(!0, t, i)))), s = s._next;
                return n
            }, i.getById = function (e) {
                for (var t = this.getChildren(1, 1, 1), i = t.length; i--;)
                    if (t[i].vars.id === e) return t[i]
            }, i.remove = function (e) {
                return O(e) ? this.removeLabel(e) : L(e) ? this.killTweensOf(e) : (Pe(this, e), e === this._recent && (this._recent = this._last), Le(this))
            }, i.totalTime = function (t, i) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _e(kt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, i), this._forcing = 0, this) : this._tTime
            }, i.addLabel = function (e, t) {
                return this.labels[e] = Ke(this, t), this
            }, i.removeLabel = function (e) {
                return delete this.labels[e], this
            }, i.addPause = function (e, t, i) {
                var r = ei.delayedCall(0, t || te, i);
                return r.data = "isPause", this._hasPause = 1, $e(this, r, Ke(this, e))
            }, i.removePause = function (e) {
                var t = this._first;
                for (e = Ke(this, e); t;) t._start === e && "isPause" === t.data && Oe(t), t = t._next
            }, i.killTweensOf = function (e, t, i) {
                for (var r = this.getTweensOf(e, i), n = r.length; n--;) Vt !== r[n] && r[n].kill(e, t);
                return this
            }, i.getTweensOf = function (e, t) {
                for (var i, r = [], n = nt(e), s = this._first, a = R(t); s;) s instanceof ei ? be(s._targets, n) && (a ? (!Vt || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive()) && r.push(s) : (i = s.getTweensOf(n, t)).length && r.push.apply(r, i), s = s._next;
                return r
            }, i.tweenTo = function (e, t) {
                t = t || {};
                var i, r = this,
                    n = Ke(r, e),
                    s = t,
                    a = s.startAt,
                    o = s.onStart,
                    l = s.onStartParams,
                    u = s.immediateRender,
                    c = ei.to(r, De({
                        ease: t.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: n,
                        overwrite: "auto",
                        duration: t.duration || Math.abs((n - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || D,
                        onStart: function () {
                            if (r.pause(), !i) {
                                var e = t.duration || Math.abs((n - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                                c._dur !== e && Ge(c, e, 0, 1).render(c._time, !0, !0), i = 1
                            }
                            o && o.apply(c, l || [])
                        }
                    }, t));
                return u ? c.render(0) : c
            }, i.tweenFromTo = function (e, t, i) {
                return this.tweenTo(t, De({
                    startAt: {
                        time: Ke(this, e)
                    }
                }, i))
            }, i.recent = function () {
                return this._recent
            }, i.nextLabel = function (e) {
                return void 0 === e && (e = this._time), ft(this, Ke(this, e))
            }, i.previousLabel = function (e) {
                return void 0 === e && (e = this._time), ft(this, Ke(this, e), 1)
            }, i.currentLabel = function (e) {
                return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + D)
            }, i.shiftChildren = function (e, t, i) {
                void 0 === i && (i = 0);
                for (var r, n = this._first, s = this.labels; n;) n._start >= i && (n._start += e, n._end += e), n = n._next;
                if (t)
                    for (r in s) s[r] >= i && (s[r] += e);
                return Le(this)
            }, i.invalidate = function (t) {
                var i = this._first;
                for (this._lock = 0; i;) i.invalidate(t), i = i._next;
                return e.prototype.invalidate.call(this, t)
            }, i.clear = function (e) {
                void 0 === e && (e = !0);
                for (var t, i = this._first; i;) t = i._next, this.remove(i), i = t;
                return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Le(this)
            }, i.totalDuration = function (e) {
                var t, i, r, n = 0,
                    s = this,
                    a = s._last,
                    o = E;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -e : e));
                if (s._dirty) {
                    for (r = s.parent; a;) t = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, $e(s, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (n -= i, (!r && !s._dp || r && r.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), o = 0), a._end > n && a._ts && (n = a._end), a = t;
                    Ge(s, s === l && s._time > n ? s._time : n, 1, 1), s._dirty = 0
                }
                return s._tDur
            }, t.updateRoot = function (e) {
                if (l._ts && (Se(l, Ue(e, l)), p = kt.frame), kt.frame >= ce) {
                    ce += S.autoSleep || 120;
                    var t = l._first;
                    if ((!t || !t._ts) && S.autoSleep && kt._listeners.length < 2) {
                        for (; t && !t._ts;) t = t._next;
                        t || kt.sleep()
                    }
                }
            }, t
        }($t);
        De(Ht.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Vt, zt, Wt = function (e, t, i, r, n, s, a) {
            var o, l, u, c, h, d, p, f, m = new fi(this._pt, e, t, 0, 1, li, null, n),
                g = 0,
                y = 0;
            for (m.b = i, m.e = r, i += "", (p = ~(r += "").indexOf("random(")) && (r = dt(r)), s && (s(f = [i, r], e, t), i = f[0], r = f[1]), l = i.match(z) || []; o = z.exec(r);) c = o[0], h = r.substring(g, o.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), c !== l[y++] && (d = parseFloat(l[y - 1]) || 0, m._pt = {
                _next: m._pt,
                p: h || 1 === y ? h : ",",
                s: d,
                c: "=" === c.charAt(1) ? ve(d, c) - d : parseFloat(c) - d,
                m: u && u < 4 ? Math.round : 0
            }, g = z.lastIndex);
            return m.c = g < r.length ? r.substring(g, r.length) : "", m.fp = a, (W.test(r) || p) && (m.e = 0), this._pt = m, m
        },
            Gt = function (e, t, i, r, n, s, a, o, l, u) {
                L(r) && (r = r(n || 0, e, s));
                var c, h = e[t],
                    d = "get" !== i ? i : L(h) ? l ? e[t.indexOf("set") || !L(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : h,
                    p = L(h) ? l ? ri : ii : ti;
                if (O(r) && (~r.indexOf("random(") && (r = dt(r)), "=" === r.charAt(1) && ((c = ve(d, r) + (et(d) || 0)) || 0 === c) && (r = c)), !u || d !== r || zt) return isNaN(d * r) || "" === r ? (!h && !(t in e) && J(t, r), Wt.call(this, e, t, d, r, p, o || S.stringFilter, l)) : (c = new fi(this._pt, e, t, +d || 0, r - (d || 0), "boolean" == typeof h ? oi : ai, 0, p), l && (c.fp = l), a && c.modifier(a, this, e), this._pt = c)
            },
            Xt = function (e, t, i, r, n, s) {
                var a, o, l, u;
                if (le[e] && !1 !== (a = new le[e]).init(n, a.rawVars ? t[e] : function (e, t, i, r, n) {
                    if (L(e) && (e = Qt(e, n, t, i, r)), !N(e) || e.style && e.nodeType || q(e) || j(e)) return O(e) ? Qt(e, n, t, i, r) : e;
                    var s, a = {};
                    for (s in e) a[s] = Qt(e[s], n, t, i, r);
                    return a
                }(t[e], r, n, s, i), i, r, s) && (i._pt = o = new fi(i._pt, n, e, 0, 1, a.render, a, 0, a.priority), i !== f))
                    for (l = i._ptLookup[i._targets.indexOf(n)], u = a._props.length; u--;) l[a._props[u]] = o;
                return a
            },
            Yt = function e(t, i, r) {
                var n, o, u, c, h, d, p, f, m, g, y, _, v, b = t.vars,
                    T = b.ease,
                    S = b.startAt,
                    C = b.immediateRender,
                    x = b.lazy,
                    k = b.onUpdate,
                    A = b.onUpdateParams,
                    I = b.callbackScope,
                    P = b.runBackwards,
                    O = b.yoyoEase,
                    L = b.keyframes,
                    R = b.autoRevert,
                    M = t._dur,
                    N = t._startAt,
                    U = t._targets,
                    B = t.parent,
                    j = B && "nested" === B.data ? B.vars.targets : U,
                    q = "auto" === t._overwrite && !s,
                    $ = t.timeline;
                if ($ && (!L || !T) && (T = "none"), t._ease = Nt(T, w.ease), t._yEase = O ? Rt(Nt(!0 === O ? T : O, w.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !$ && !!b.runBackwards, !$ || L && !b.stagger) {
                    if (_ = (f = U[0] ? fe(U[0]).harness : 0) && b[f.prop], n = ke(b, se), N && (N._zTime < 0 && N.progress(1), i < 0 && P && C && !R ? N.render(-1, !0) : N.revert(P && M ? re : ie), N._lazy = 0), S) {
                        if (Oe(t._startAt = ei.set(U, De({
                            data: "isStart",
                            overwrite: !1,
                            parent: B,
                            immediateRender: !0,
                            lazy: !N && F(x),
                            startAt: null,
                            delay: 0,
                            onUpdate: k,
                            onUpdateParams: A,
                            callbackScope: I,
                            stagger: 0
                        }, S))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (a || !C && !R) && t._startAt.revert(re), C && M && i <= 0 && r <= 0) return void (i && (t._zTime = i))
                    } else if (P && M && !N)
                        if (i && (C = !1), u = De({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: C && !N && F(x),
                            immediateRender: C,
                            stagger: 0,
                            parent: B
                        }, n), _ && (u[f.prop] = _), Oe(t._startAt = ei.set(U, u)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (a ? t._startAt.revert(re) : t._startAt.render(-1, !0)), t._zTime = i, C) {
                            if (!i) return
                        } else e(t._startAt, D, D);
                    for (t._pt = t._ptCache = 0, x = M && F(x) || x && !M, o = 0; o < U.length; o++) {
                        if (p = (h = U[o])._gsap || pe(U)[o]._gsap, t._ptLookup[o] = g = {}, oe[p.id] && ae.length && Te(), y = j === U ? o : j.indexOf(h), f && !1 !== (m = new f).init(h, _ || n, t, y, j) && (t._pt = c = new fi(t._pt, h, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function (e) {
                            g[e] = c
                        })), m.priority && (d = 1)), !f || _)
                            for (u in n) le[u] && (m = Xt(u, n, t, y, h, j)) ? m.priority && (d = 1) : g[u] = c = Gt.call(t, h, u, "get", n[u], y, j, 0, b.stringFilter);
                        t._op && t._op[o] && t.kill(h, t._op[o]), q && t._pt && (Vt = t, l.killTweensOf(h, g, t.globalTime(i)), v = !t.parent, Vt = 0), t._pt && x && (oe[p.id] = 1)
                    }
                    d && pi(t), t._onInit && t._onInit(t)
                }
                t._onUpdate = k, t._initted = (!t._op || t._pt) && !v, L && i <= 0 && $.render(E, !0, !0)
            },
            Kt = function (e, t, i, r) {
                var n, s, a = t.ease || r || "power1.inOut";
                if (q(t)) s = i[e] || (i[e] = []), t.forEach((function (e, i) {
                    return s.push({
                        t: i / (t.length - 1) * 100,
                        v: e,
                        e: a
                    })
                }));
                else
                    for (n in t) s = i[n] || (i[n] = []), "ease" === n || s.push({
                        t: parseFloat(e),
                        v: t[n],
                        e: a
                    })
            },
            Qt = function (e, t, i, r, n) {
                return L(e) ? e.call(t, i, r, n) : O(e) && ~e.indexOf("random(") ? dt(e) : e
            },
            Jt = de + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            Zt = {};
        ge(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", (function (e) {
            return Zt[e] = 1
        }));
        var ei = function (e) {
            function t(t, i, n, a) {
                var o;
                "number" == typeof i && (n.duration = i, i = n, n = null);
                var u, c, h, d, p, f, m, g, y = (o = e.call(this, a ? i : Ae(i)) || this).vars,
                    _ = y.duration,
                    v = y.delay,
                    b = y.immediateRender,
                    T = y.stagger,
                    w = y.overwrite,
                    E = y.keyframes,
                    D = y.defaults,
                    C = y.scrollTrigger,
                    x = y.yoyoEase,
                    k = i.parent || l,
                    A = (q(t) || j(t) ? R(t[0]) : "length" in i) ? [t] : nt(t);
                if (o._targets = A.length ? pe(A) : Z("GSAP target " + t + " not found. https://greensock.com", !S.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = w, E || T || B(_) || B(v)) {
                    if (i = o.vars, (u = o.timeline = new Ht({
                        data: "nested",
                        defaults: D || {},
                        targets: k && "nested" === k.data ? k.vars.targets : A
                    })).kill(), u.parent = u._dp = r(o), u._start = 0, T || B(_) || B(v)) {
                        if (d = A.length, m = T && ot(T), N(T))
                            for (p in T) ~Jt.indexOf(p) && (g || (g = {}), g[p] = T[p]);
                        for (c = 0; c < d; c++)(h = ke(i, Zt)).stagger = 0, x && (h.yoyoEase = x), g && Ce(h, g), f = A[c], h.duration = +Qt(_, r(o), c, f, A), h.delay = (+Qt(v, r(o), c, f, A) || 0) - o._delay, !T && 1 === d && h.delay && (o._delay = v = h.delay, o._start += v, h.delay = 0), u.to(f, h, m ? m(c, f, A) : 0), u._ease = It.none;
                        u.duration() ? _ = v = 0 : o.timeline = 0
                    } else if (E) {
                        Ae(De(u.vars.defaults, {
                            ease: "none"
                        })), u._ease = Nt(E.ease || i.ease || "none");
                        var I, P, O, L = 0;
                        if (q(E)) E.forEach((function (e) {
                            return u.to(A, e, ">")
                        })), u.duration();
                        else {
                            for (p in h = {}, E) "ease" === p || "easeEach" === p || Kt(p, E[p], h, E.easeEach);
                            for (p in h)
                                for (I = h[p].sort((function (e, t) {
                                    return e.t - t.t
                                })), L = 0, c = 0; c < I.length; c++)(O = {
                                    ease: (P = I[c]).e,
                                    duration: (P.t - (c ? I[c - 1].t : 0)) / 100 * _
                                })[p] = P.v, u.to(A, O, L), L += O.duration;
                            u.duration() < _ && u.to({}, {
                                duration: _ - u.duration()
                            })
                        }
                    }
                    _ || o.duration(_ = u.duration())
                } else o.timeline = 0;
                return !0 !== w || s || (Vt = r(o), l.killTweensOf(A), Vt = 0), $e(k, r(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (b || !_ && !E && o._start === _e(k._time) && F(b) && Me(r(o)) && "nested" !== k.data) && (o._tTime = -1e-8, o.render(Math.max(0, -v) || 0)), C && He(r(o), C), o
            }
            n(t, e);
            var i = t.prototype;
            return i.render = function (e, t, i) {
                var r, n, s, o, l, u, c, h, d, p = this._time,
                    f = this._tDur,
                    m = this._dur,
                    g = e < 0,
                    y = e > f - D && !g ? f : e < D ? 0 : e;
                if (m) {
                    if (y !== this._tTime || !e || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                        if (r = y, h = this.timeline, this._repeat) {
                            if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + e, t, i);
                            if (r = _e(y % o), y === f ? (s = this._repeat, r = m) : ((s = ~~(y / o)) && s === y / o && (r = m, s--), r > m && (r = m)), (u = this._yoyo && 1 & s) && (d = this._yEase, r = m - r), l = Fe(this._tTime, o), r === p && !i && this._initted) return this._tTime = y, this;
                            s !== l && (h && this._yEase && Mt(h, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = i = 1, this.render(_e(o * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ve(this, g ? e : r, i, t, y)) return this._tTime = 0, this;
                            if (p !== this._time) return this;
                            if (m !== this._dur) return this.render(e, t, i)
                        }
                        if (this._tTime = y, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(r / m), this._from && (this.ratio = c = 1 - c), r && !p && !t && !s && (mt(this, "onStart"), this._tTime !== y)) return this;
                        for (n = this._pt; n;) n.r(c, n.d), n = n._next;
                        h && h.render(e < 0 ? e : !r && u ? -1e-8 : h._dur * h._ease(r / this._dur), t, i) || this._startAt && (this._zTime = e), this._onUpdate && !t && (g && Re(this, e, 0, i), mt(this, "onUpdate")), this._repeat && s !== l && this.vars.onRepeat && !t && this.parent && mt(this, "onRepeat"), y !== this._tDur && y || this._tTime !== y || (g && !this._onUpdate && Re(this, e, 0, !0), (e || !m) && (y === this._tDur && this._ts > 0 || !y && this._ts < 0) && Oe(this, 1), t || g && !p || !(y || p || u) || (mt(this, y === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < f && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function (e, t, i, r) {
                    var n, s, o, l = e.ratio,
                        u = t < 0 || !t && (!e._start && ze(e) && (e._initted || !We(e)) || (e._ts < 0 || e._dp._ts < 0) && !We(e)) ? 0 : 1,
                        c = e._rDelay,
                        h = 0;
                    if (c && e._repeat && (h = Ze(0, e._tDur, t), s = Fe(h, c), e._yoyo && 1 & s && (u = 1 - u), s !== Fe(e._tTime, c) && (l = 1 - u, e.vars.repeatRefresh && e._initted && e.invalidate())), u !== l || a || r || e._zTime === D || !t && e._zTime) {
                        if (!e._initted && Ve(e, t, r, i, h)) return;
                        for (o = e._zTime, e._zTime = t || (i ? D : 0), i || (i = t && !o), e.ratio = u, e._from && (u = 1 - u), e._time = 0, e._tTime = h, n = e._pt; n;) n.r(u, n.d), n = n._next;
                        t < 0 && Re(e, t, 0, !0), e._onUpdate && !i && mt(e, "onUpdate"), h && e._repeat && !i && e.parent && mt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === u && (u && Oe(e, 1), i || a || (mt(e, u ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                    } else e._zTime || (e._zTime = t)
                }(this, e, t, i);
                return this
            }, i.targets = function () {
                return this._targets
            }, i.invalidate = function (t) {
                return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
            }, i.resetTo = function (e, t, i, r) {
                m || kt.wake(), this._ts || this.play();
                var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || Yt(this, n),
                    function (e, t, i, r, n, s, a) {
                        var o, l, u, c, h = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                        if (!h)
                            for (h = e._ptCache[t] = [], u = e._ptLookup, c = e._targets.length; c--;) {
                                if ((o = u[c][t]) && o.d && o.d._pt)
                                    for (o = o.d._pt; o && o.p !== t && o.fp !== t;) o = o._next;
                                if (!o) return zt = 1, e.vars[t] = "+=0", Yt(e, a), zt = 0, 1;
                                h.push(o)
                            }
                        for (c = h.length; c--;)(o = (l = h[c])._pt || l).s = !r && 0 !== r || n ? o.s + (r || 0) + s * o.c : r, o.c = i - o.s, l.e && (l.e = ye(i) + et(l.e)), l.b && (l.b = o.s + et(l.b))
                    }(this, e, t, i, r, this._ease(n / this._dur), n) ? this.resetTo(e, t, i, r) : (je(this, 0), this.parent || Ie(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
            }, i.kill = function (e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? gt(this) : this;
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, Vt && !0 !== Vt.vars.overwrite)._first || gt(this), this.parent && i !== this.timeline.totalDuration() && Ge(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var r, n, s, a, o, l, u, c = this._targets,
                    h = e ? nt(e) : c,
                    d = this._ptLookup,
                    p = this._pt;
                if ((!t || "all" === t) && function (e, t) {
                    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i];);
                    return i < 0
                }(c, h)) return "all" === t && (this._pt = 0), gt(this);
                for (r = this._op = this._op || [], "all" !== t && (O(t) && (o = {}, ge(t, (function (e) {
                    return o[e] = 1
                })), t = o), t = function (e, t) {
                    var i, r, n, s, a = e[0] ? fe(e[0]).harness : 0,
                        o = a && a.aliases;
                    if (!o) return t;
                    for (r in i = Ce({}, t), o)
                        if (r in i)
                            for (n = (s = o[r].split(",")).length; n--;) i[s[n]] = i[r];
                    return i
                }(c, t)), u = c.length; u--;)
                    if (~h.indexOf(c[u]))
                        for (o in n = d[u], "all" === t ? (r[u] = t, a = n, s = {}) : (s = r[u] = r[u] || {}, a = t), a) (l = n && n[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Pe(this, l, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
                return this._initted && !this._pt && p && gt(this), this
            }, t.to = function (e, i) {
                return new t(e, i, arguments[2])
            }, t.from = function (e, t) {
                return Qe(1, arguments)
            }, t.delayedCall = function (e, i, r, n) {
                return new t(i, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: e,
                    onComplete: i,
                    onReverseComplete: i,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: n
                })
            }, t.fromTo = function (e, t, i) {
                return Qe(2, arguments)
            }, t.set = function (e, i) {
                return i.duration = 0, i.repeatDelay || (i.repeat = 0), new t(e, i)
            }, t.killTweensOf = function (e, t, i) {
                return l.killTweensOf(e, t, i)
            }, t
        }($t);
        De(ei.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), ge("staggerTo,staggerFrom,staggerFromTo", (function (e) {
            ei[e] = function () {
                var t = new Ht,
                    i = tt.call(arguments, 0);
                return i.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, i)
            }
        }));
        var ti = function (e, t, i) {
            return e[t] = i
        },
            ii = function (e, t, i) {
                return e[t](i)
            },
            ri = function (e, t, i, r) {
                return e[t](r.fp, i)
            },
            ni = function (e, t, i) {
                return e.setAttribute(t, i)
            },
            si = function (e, t) {
                return L(e[t]) ? ii : M(e[t]) && e.setAttribute ? ni : ti
            },
            ai = function (e, t) {
                return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
            },
            oi = function (e, t) {
                return t.set(t.t, t.p, !!(t.s + t.c * e), t)
            },
            li = function (e, t) {
                var i = t._pt,
                    r = "";
                if (!e && t.b) r = t.b;
                else if (1 === e && t.e) r = t.e;
                else {
                    for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round(1e4 * (i.s + i.c * e)) / 1e4) + r, i = i._next;
                    r += t.c
                }
                t.set(t.t, t.p, r, t)
            },
            ui = function (e, t) {
                for (var i = t._pt; i;) i.r(e, i.d), i = i._next
            },
            ci = function (e, t, i, r) {
                for (var n, s = this._pt; s;) n = s._next, s.p === r && s.modifier(e, t, i), s = n
            },
            hi = function (e) {
                for (var t, i, r = this._pt; r;) i = r._next, r.p === e && !r.op || r.op === e ? Pe(this, r, "_pt") : r.dep || (t = 1), r = i;
                return !t
            },
            di = function (e, t, i, r) {
                r.mSet(e, t, r.m.call(r.tween, i, r.mt), r)
            },
            pi = function (e) {
                for (var t, i, r, n, s = e._pt; s;) {
                    for (t = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                    (s._prev = i ? i._prev : n) ? s._prev._next = s : r = s, (s._next = i) ? i._prev = s : n = s, s = t
                }
                e._pt = r
            },
            fi = function () {
                function e(e, t, i, r, n, s, a, o, l) {
                    this.t = t, this.s = r, this.c = n, this.p = i, this.r = s || ai, this.d = a || this, this.set = o || ti, this.pr = l || 0, this._next = e, e && (e._prev = this)
                }
                return e.prototype.modifier = function (e, t, i) {
                    this.mSet = this.mSet || this.set, this.set = di, this.m = e, this.mt = i, this.tween = t
                }, e
            }();
        ge(de + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (e) {
            return se[e] = 1
        })), Y.TweenMax = Y.TweenLite = ei, Y.TimelineLite = Y.TimelineMax = Ht, l = new Ht({
            sortChildren: !1,
            defaults: w,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), S.stringFilter = xt;
        var mi = [],
            gi = {},
            yi = [],
            _i = 0,
            vi = 0,
            bi = function (e) {
                return (gi[e] || yi).map((function (e) {
                    return e()
                }))
            },
            Ti = function () {
                var e = Date.now(),
                    t = [];
                e - _i > 2 && (bi("matchMediaInit"), mi.forEach((function (e) {
                    var i, r, n, s, a = e.queries,
                        o = e.conditions;
                    for (r in a) (i = u.matchMedia(a[r]).matches) && (n = 1), i !== o[r] && (o[r] = i, s = 1);
                    s && (e.revert(), n && t.push(e))
                })), bi("matchMediaRevert"), t.forEach((function (e) {
                    return e.onMatch(e)
                })), _i = e, bi("matchMedia"))
            },
            Si = function () {
                function e(e, t) {
                    this.selector = t && st(t), this.data = [], this._r = [], this.isReverted = !1, this.id = vi++, e && this.add(e)
                }
                var t = e.prototype;
                return t.add = function (e, t, i) {
                    L(e) && (i = t, t = e, e = L);
                    var r = this,
                        n = function () {
                            var e, n = o,
                                s = r.selector;
                            return n && n !== r && n.data.push(r), i && (r.selector = st(i)), o = r, e = t.apply(r, arguments), L(e) && r._r.push(e), o = n, r.selector = s, r.isReverted = !1, e
                        };
                    return r.last = n, e === L ? n(r) : e ? r[e] = n : n
                }, t.ignore = function (e) {
                    var t = o;
                    o = null, e(this), o = t
                }, t.getTweens = function () {
                    var t = [];
                    return this.data.forEach((function (i) {
                        return i instanceof e ? t.push.apply(t, i.getTweens()) : i instanceof ei && !(i.parent && "nested" === i.parent.data) && t.push(i)
                    })), t
                }, t.clear = function () {
                    this._r.length = this.data.length = 0
                }, t.kill = function (e, t) {
                    var i = this;
                    if (e) {
                        var r = this.getTweens();
                        this.data.forEach((function (e) {
                            "isFlip" === e.data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function (e) {
                                return r.splice(r.indexOf(e), 1)
                            })))
                        })), r.map((function (e) {
                            return {
                                g: e.globalTime(0),
                                t: e
                            }
                        })).sort((function (e, t) {
                            return t.g - e.g || -1 / 0
                        })).forEach((function (t) {
                            return t.t.revert(e)
                        })), this.data.forEach((function (t) {
                            return !(t instanceof ei) && t.revert && t.revert(e)
                        })), this._r.forEach((function (t) {
                            return t(e, i)
                        })), this.isReverted = !0
                    } else this.data.forEach((function (e) {
                        return e.kill && e.kill()
                    }));
                    if (this.clear(), t)
                        for (var n = mi.length; n--;) mi[n].id === this.id && mi.splice(n, 1)
                }, t.revert = function (e) {
                    this.kill(e || {})
                }, e
            }(),
            wi = function () {
                function e(e) {
                    this.contexts = [], this.scope = e
                }
                var t = e.prototype;
                return t.add = function (e, t, i) {
                    N(e) || (e = {
                        matches: e
                    });
                    var r, n, s, a = new Si(0, i || this.scope),
                        l = a.conditions = {};
                    for (n in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), t = a.add("onMatch", t), a.queries = e, e) "all" === n ? s = 1 : (r = u.matchMedia(e[n])) && (mi.indexOf(a) < 0 && mi.push(a), (l[n] = r.matches) && (s = 1), r.addListener ? r.addListener(Ti) : r.addEventListener("change", Ti));
                    return s && t(a), this
                }, t.revert = function (e) {
                    this.kill(e || {})
                }, t.kill = function (e) {
                    this.contexts.forEach((function (t) {
                        return t.kill(e, !0)
                    }))
                }, e
            }(),
            Ei = {
                registerPlugin: function () {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    t.forEach((function (e) {
                        return _t(e)
                    }))
                },
                timeline: function (e) {
                    return new Ht(e)
                },
                getTweensOf: function (e, t) {
                    return l.getTweensOf(e, t)
                },
                getProperty: function (e, t, i, r) {
                    O(e) && (e = nt(e)[0]);
                    var n = fe(e || {}).get,
                        s = i ? Ee : we;
                    return "native" === i && (i = ""), e ? t ? s((le[t] && le[t].get || n)(e, t, i, r)) : function (t, i, r) {
                        return s((le[t] && le[t].get || n)(e, t, i, r))
                    } : e
                },
                quickSetter: function (e, t, i) {
                    if ((e = nt(e)).length > 1) {
                        var r = e.map((function (e) {
                            return xi.quickSetter(e, t, i)
                        })),
                            n = r.length;
                        return function (e) {
                            for (var t = n; t--;) r[t](e)
                        }
                    }
                    e = e[0] || {};
                    var s = le[t],
                        a = fe(e),
                        o = a.harness && (a.harness.aliases || {})[t] || t,
                        l = s ? function (t) {
                            var r = new s;
                            f._pt = 0, r.init(e, i ? t + i : t, f, 0, [e]), r.render(1, r), f._pt && ui(1, f)
                        } : a.set(e, o);
                    return s ? l : function (t) {
                        return l(e, o, i ? t + i : t, a, 1)
                    }
                },
                quickTo: function (e, t, i) {
                    var r, n = xi.to(e, Ce(((r = {})[t] = "+=0.1", r.paused = !0, r), i || {})),
                        s = function (e, i, r) {
                            return n.resetTo(t, e, i, r)
                        };
                    return s.tween = n, s
                },
                isTweening: function (e) {
                    return l.getTweensOf(e, !0).length > 0
                },
                defaults: function (e) {
                    return e && e.ease && (e.ease = Nt(e.ease, w.ease)), xe(w, e || {})
                },
                config: function (e) {
                    return xe(S, e || {})
                },
                registerEffect: function (e) {
                    var t = e.name,
                        i = e.effect,
                        r = e.plugins,
                        n = e.defaults,
                        s = e.extendTimeline;
                    (r || "").split(",").forEach((function (e) {
                        return e && !le[e] && !Y[e] && Z(t + " effect requires " + e + " plugin.")
                    })), ue[t] = function (e, t, r) {
                        return i(nt(e), De(t || {}, n), r)
                    }, s && (Ht.prototype[t] = function (e, i, r) {
                        return this.add(ue[t](e, N(i) ? i : (r = i) && {}, this), r)
                    })
                },
                registerEase: function (e, t) {
                    It[e] = Nt(t)
                },
                parseEase: function (e, t) {
                    return arguments.length ? Nt(e, t) : It
                },
                getById: function (e) {
                    return l.getById(e)
                },
                exportRoot: function (e, t) {
                    void 0 === e && (e = {});
                    var i, r, n = new Ht(e);
                    for (n.smoothChildTiming = F(e.smoothChildTiming), l.remove(n), n._dp = 0, n._time = n._tTime = l._time, i = l._first; i;) r = i._next, !t && !i._dur && i instanceof ei && i.vars.onComplete === i._targets[0] || $e(n, i, i._start - i._delay), i = r;
                    return $e(l, n, 0), n
                },
                context: function (e, t) {
                    return e ? new Si(e, t) : o
                },
                matchMedia: function (e) {
                    return new wi(e)
                },
                matchMediaRefresh: function () {
                    return mi.forEach((function (e) {
                        var t, i, r = e.conditions;
                        for (i in r) r[i] && (r[i] = !1, t = 1);
                        t && e.revert()
                    })) || Ti()
                },
                addEventListener: function (e, t) {
                    var i = gi[e] || (gi[e] = []);
                    ~i.indexOf(t) || i.push(t)
                },
                removeEventListener: function (e, t) {
                    var i = gi[e],
                        r = i && i.indexOf(t);
                    r >= 0 && i.splice(r, 1)
                },
                utils: {
                    wrap: function e(t, i, r) {
                        var n = i - t;
                        return q(t) ? ht(t, e(0, t.length), i) : Je(r, (function (e) {
                            return (n + (e - t) % n) % n + t
                        }))
                    },
                    wrapYoyo: function e(t, i, r) {
                        var n = i - t,
                            s = 2 * n;
                        return q(t) ? ht(t, e(0, t.length - 1), i) : Je(r, (function (e) {
                            return t + ((e = (s + (e - t) % s) % s || 0) > n ? s - e : e)
                        }))
                    },
                    distribute: ot,
                    random: ct,
                    snap: ut,
                    normalize: function (e, t, i) {
                        return pt(e, t, 0, 1, i)
                    },
                    getUnit: et,
                    clamp: function (e, t, i) {
                        return Je(i, (function (i) {
                            return Ze(e, t, i)
                        }))
                    },
                    splitColor: St,
                    toArray: nt,
                    selector: st,
                    mapRange: pt,
                    pipe: function () {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        return function (e) {
                            return t.reduce((function (e, t) {
                                return t(e)
                            }), e)
                        }
                    },
                    unitize: function (e, t) {
                        return function (i) {
                            return e(parseFloat(i)) + (t || et(i))
                        }
                    },
                    interpolate: function e(t, i, r, n) {
                        var s = isNaN(t + i) ? 0 : function (e) {
                            return (1 - e) * t + e * i
                        };
                        if (!s) {
                            var a, o, l, u, c, h = O(t),
                                d = {};
                            if (!0 === r && (n = 1) && (r = null), h) t = {
                                p: t
                            }, i = {
                                p: i
                            };
                            else if (q(t) && !q(i)) {
                                for (l = [], u = t.length, c = u - 2, o = 1; o < u; o++) l.push(e(t[o - 1], t[o]));
                                u--, s = function (e) {
                                    e *= u;
                                    var t = Math.min(c, ~~e);
                                    return l[t](e - t)
                                }, r = i
                            } else n || (t = Ce(q(t) ? [] : {}, t));
                            if (!l) {
                                for (a in i) Gt.call(d, t, a, "get", i[a]);
                                s = function (e) {
                                    return ui(e, d) || (h ? t.p : t)
                                }
                            }
                        }
                        return Je(r, s)
                    },
                    shuffle: at
                },
                install: Q,
                effects: ue,
                ticker: kt,
                updateRoot: Ht.updateRoot,
                plugins: le,
                globalTimeline: l,
                core: {
                    PropTween: fi,
                    globals: ee,
                    Tween: ei,
                    Timeline: Ht,
                    Animation: $t,
                    getCache: fe,
                    _removeLinkedListItem: Pe,
                    reverting: function () {
                        return a
                    },
                    context: function (e) {
                        return e && o && (o.data.push(e), e._ctx = o), o
                    },
                    suppressOverwrites: function (e) {
                        return s = e
                    }
                }
            };
        ge("to,from,fromTo,delayedCall,set,killTweensOf", (function (e) {
            return Ei[e] = ei[e]
        })), kt.add(Ht.updateRoot), f = Ei.to({}, {
            duration: 0
        });
        var Di = function (e, t) {
            for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
            return i
        },
            Ci = function (e, t) {
                return {
                    name: e,
                    rawVars: 1,
                    init: function (e, i, r) {
                        r._onInit = function (e) {
                            var r, n;
                            if (O(i) && (r = {}, ge(i, (function (e) {
                                return r[e] = 1
                            })), i = r), t) {
                                for (n in r = {}, i) r[n] = t(i[n]);
                                i = r
                            } ! function (e, t) {
                                var i, r, n, s = e._targets;
                                for (i in t)
                                    for (r = s.length; r--;)(n = e._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = Di(n, i)), n && n.modifier && n.modifier(t[i], e, s[r], i))
                            }(e, i)
                        }
                    }
                }
            },
            xi = Ei.registerPlugin({
                name: "attr",
                init: function (e, t, i, r, n) {
                    var s, a, o;
                    for (s in this.tween = i, t) o = e.getAttribute(s) || "", (a = this.add(e, "setAttribute", (o || 0) + "", t[s], r, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
                },
                render: function (e, t) {
                    for (var i = t._pt; i;) a ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next
                }
            }, {
                name: "endArray",
                init: function (e, t) {
                    for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
                }
            }, Ci("roundProps", lt), Ci("modifiers"), Ci("snap", ut)) || Ei;
        ei.version = Ht.version = xi.version = "3.12.2", d = 1, U() && At();
        It.Power0, It.Power1, It.Power2, It.Power3, It.Power4, It.Linear, It.Quad, It.Cubic, It.Quart, It.Quint, It.Strong, It.Elastic, It.Back, It.SteppedEase, It.Bounce, It.Sine, It.Expo, It.Circ;
        var ki, Ai, Ii, Pi, Oi, Li, Ri, Mi, Ni = {},
            Fi = 180 / Math.PI,
            Ui = Math.PI / 180,
            Bi = Math.atan2,
            ji = /([A-Z])/g,
            qi = /(left|right|width|margin|padding|x)/i,
            $i = /[\s,\(]\S/,
            Hi = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            Vi = function (e, t) {
                return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            },
            zi = function (e, t) {
                return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            },
            Wi = function (e, t) {
                return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
            },
            Gi = function (e, t) {
                var i = t.s + t.c * e;
                t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
            },
            Xi = function (e, t) {
                return t.set(t.t, t.p, e ? t.e : t.b, t)
            },
            Yi = function (e, t) {
                return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
            },
            Ki = function (e, t, i) {
                return e.style[t] = i
            },
            Qi = function (e, t, i) {
                return e.style.setProperty(t, i)
            },
            Ji = function (e, t, i) {
                return e._gsap[t] = i
            },
            Zi = function (e, t, i) {
                return e._gsap.scaleX = e._gsap.scaleY = i
            },
            er = function (e, t, i, r, n) {
                var s = e._gsap;
                s.scaleX = s.scaleY = i, s.renderTransform(n, s)
            },
            tr = function (e, t, i, r, n) {
                var s = e._gsap;
                s[t] = i, s.renderTransform(n, s)
            },
            ir = "transform",
            rr = ir + "Origin",
            nr = function e(t, i) {
                var r = this,
                    n = this.target,
                    s = n.style;
                if (t in Ni && s) {
                    if (this.tfm = this.tfm || {}, "transform" === t) return Hi.transform.split(",").forEach((function (t) {
                        return e.call(r, t, i)
                    }));
                    if (~(t = Hi[t] || t).indexOf(",") ? t.split(",").forEach((function (e) {
                        return r.tfm[e] = Sr(n, e)
                    })) : this.tfm[t] = n._gsap.x ? n._gsap[t] : Sr(n, t), this.props.indexOf(ir) >= 0) return;
                    n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(rr, i, "")), t = ir
                } (s || i) && this.props.push(t, i, s[t])
            },
            sr = function (e) {
                e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
            },
            ar = function () {
                var e, t, i = this.props,
                    r = this.target,
                    n = r.style,
                    s = r._gsap;
                for (e = 0; e < i.length; e += 3) i[e + 1] ? r[i[e]] = i[e + 2] : i[e + 2] ? n[i[e]] = i[e + 2] : n.removeProperty("--" === i[e].substr(0, 2) ? i[e] : i[e].replace(ji, "-$1").toLowerCase());
                if (this.tfm) {
                    for (t in this.tfm) s[t] = this.tfm[t];
                    s.svg && (s.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (e = Ri()) && e.isStart || n[ir] || (sr(n), s.uncache = 1)
                }
            },
            or = function (e, t) {
                var i = {
                    target: e,
                    props: [],
                    revert: ar,
                    save: nr
                };
                return e._gsap || xi.core.getCache(e), t && t.split(",").forEach((function (e) {
                    return i.save(e)
                })), i
            },
            lr = function (e, t) {
                var i = Ai.createElementNS ? Ai.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ai.createElement(e);
                return i.style ? i : Ai.createElement(e)
            },
            ur = function e(t, i, r) {
                var n = getComputedStyle(t);
                return n[i] || n.getPropertyValue(i.replace(ji, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && e(t, hr(i) || i, 1) || ""
            },
            cr = "O,Moz,ms,Ms,Webkit".split(","),
            hr = function (e, t, i) {
                var r = (t || Oi).style,
                    n = 5;
                if (e in r && !i) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(cr[n] + e in r););
                return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? cr[n] : "") + e
            },
            dr = function () {
                "undefined" != typeof window && window.document && (ki = window, Ai = ki.document, Ii = Ai.documentElement, Oi = lr("div") || {
                    style: {}
                }, lr("div"), ir = hr(ir), rr = ir + "Origin", Oi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Mi = !!hr("perspective"), Ri = xi.core.reverting, Pi = 1)
            },
            pr = function e(t) {
                var i, r = lr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    s = this.nextSibling,
                    a = this.style.cssText;
                if (Ii.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
                } catch (e) { } else this._gsapBBox && (i = this._gsapBBox());
                return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Ii.removeChild(r), this.style.cssText = a, i
            },
            fr = function (e, t) {
                for (var i = t.length; i--;)
                    if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
            },
            mr = function (e) {
                var t;
                try {
                    t = e.getBBox()
                } catch (i) {
                    t = pr.call(e, !0)
                }
                return t && (t.width || t.height) || e.getBBox === pr || (t = pr.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                    x: +fr(e, ["x", "cx", "x1"]) || 0,
                    y: +fr(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            gr = function (e) {
                return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !mr(e))
            },
            yr = function (e, t) {
                if (t) {
                    var i = e.style;
                    t in Ni && t !== rr && (t = ir), i.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), i.removeProperty(t.replace(ji, "-$1").toLowerCase())) : i.removeAttribute(t)
                }
            },
            _r = function (e, t, i, r, n, s) {
                var a = new fi(e._pt, t, i, 0, 1, s ? Yi : Xi);
                return e._pt = a, a.b = r, a.e = n, e._props.push(i), a
            },
            vr = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            br = {
                grid: 1,
                flex: 1
            },
            Tr = function e(t, i, r, n) {
                var s, a, o, l, u = parseFloat(r) || 0,
                    c = (r + "").trim().substr((u + "").length) || "px",
                    h = Oi.style,
                    d = qi.test(i),
                    p = "svg" === t.tagName.toLowerCase(),
                    f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
                    m = 100,
                    g = "px" === n,
                    y = "%" === n;
                return n === c || !u || vr[n] || vr[c] ? u : ("px" !== c && !g && (u = e(t, i, r, "px")), l = t.getCTM && gr(t), !y && "%" !== c || !Ni[i] && !~i.indexOf("adius") ? (h[d ? "width" : "height"] = m + (g ? c : n), a = ~i.indexOf("adius") || "em" === n && t.appendChild && !p ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ai && a.appendChild || (a = Ai.body), (o = a._gsap) && y && o.width && d && o.time === kt.time && !o.uncache ? ye(u / o.width * m) : ((y || "%" === c) && !br[ur(a, "display")] && (h.position = ur(t, "position")), a === t && (h.position = "static"), a.appendChild(Oi), s = Oi[f], a.removeChild(Oi), h.position = "absolute", d && y && ((o = fe(a)).time = kt.time, o.width = a[f]), ye(g ? s * u / m : s && u ? m / s * u : 0))) : (s = l ? t.getBBox()[d ? "width" : "height"] : t[f], ye(y ? u / s * m : u / 100 * s)))
            },
            Sr = function (e, t, i, r) {
                var n;
                return Pi || dr(), t in Hi && "transform" !== t && ~(t = Hi[t]).indexOf(",") && (t = t.split(",")[0]), Ni[t] && "transform" !== t ? (n = Lr(e, r), n = "transformOrigin" !== t ? n[t] : n.svg ? n.origin : Rr(ur(e, rr)) + " " + n.zOrigin + "px") : (!(n = e.style[t]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = Cr[t] && Cr[t](e, t, i) || ur(e, t) || me(e, t) || ("opacity" === t ? 1 : 0)), i && !~(n + "").trim().indexOf(" ") ? Tr(e, t, n, i) + i : n
            },
            wr = function (e, t, i, r) {
                if (!i || "none" === i) {
                    var n = hr(t, e, 1),
                        s = n && ur(e, n, 1);
                    s && s !== i ? (t = n, i = s) : "borderColor" === t && (i = ur(e, "borderTopColor"))
                }
                var a, o, l, u, c, h, d, p, f, m, g, y = new fi(this._pt, e.style, t, 0, 1, li),
                    _ = 0,
                    v = 0;
                if (y.b = i, y.e = r, i += "", "auto" === (r += "") && (e.style[t] = r, r = ur(e, t) || r, e.style[t] = i), xt(a = [i, r]), r = a[1], l = (i = a[0]).match(V) || [], (r.match(V) || []).length) {
                    for (; o = V.exec(r);) d = o[0], f = r.substring(_, o.index), c ? c = (c + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (c = 1), d !== (h = l[v++] || "") && (u = parseFloat(h) || 0, g = h.substr((u + "").length), "=" === d.charAt(1) && (d = ve(u, d) + g), p = parseFloat(d), m = d.substr((p + "").length), _ = V.lastIndex - m.length, m || (m = m || S.units[t] || g, _ === r.length && (r += m, y.e += m)), g !== m && (u = Tr(e, t, h, m) || 0), y._pt = {
                        _next: y._pt,
                        p: f || 1 === v ? f : ",",
                        s: u,
                        c: p - u,
                        m: c && c < 4 || "zIndex" === t ? Math.round : 0
                    });
                    y.c = _ < r.length ? r.substring(_, r.length) : ""
                } else y.r = "display" === t && "none" === r ? Yi : Xi;
                return W.test(r) && (y.e = 0), this._pt = y, y
            },
            Er = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            Dr = function (e, t) {
                if (t.tween && t.tween._time === t.tween._dur) {
                    var i, r, n, s = t.t,
                        a = s.style,
                        o = t.u,
                        l = s._gsap;
                    if ("all" === o || !0 === o) a.cssText = "", r = 1;
                    else
                        for (n = (o = o.split(",")).length; --n > -1;) i = o[n], Ni[i] && (r = 1, i = "transformOrigin" === i ? rr : ir), yr(s, i);
                    r && (yr(s, ir), l && (l.svg && s.removeAttribute("transform"), Lr(s, 1), l.uncache = 1, sr(a)))
                }
            },
            Cr = {
                clearProps: function (e, t, i, r, n) {
                    if ("isFromStart" !== n.data) {
                        var s = e._pt = new fi(e._pt, t, i, 0, 0, Dr);
                        return s.u = r, s.pr = -10, s.tween = n, e._props.push(i), 1
                    }
                }
            },
            xr = [1, 0, 0, 1, 0, 0],
            kr = {},
            Ar = function (e) {
                return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
            },
            Ir = function (e) {
                var t = ur(e, ir);
                return Ar(t) ? xr : t.substr(7).match(H).map(ye)
            },
            Pr = function (e, t) {
                var i, r, n, s, a = e._gsap || fe(e),
                    o = e.style,
                    l = Ir(e);
                return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(n = e.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? xr : l : (l !== xr || e.offsetParent || e === Ii || a.svg || (n = o.display, o.display = "block", (i = e.parentNode) && e.offsetParent || (s = 1, r = e.nextElementSibling, Ii.appendChild(e)), l = Ir(e), n ? o.display = n : yr(e, "display"), s && (r ? i.insertBefore(e, r) : i ? i.appendChild(e) : Ii.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
            },
            Or = function (e, t, i, r, n, s) {
                var a, o, l, u = e._gsap,
                    c = n || Pr(e, !0),
                    h = u.xOrigin || 0,
                    d = u.yOrigin || 0,
                    p = u.xOffset || 0,
                    f = u.yOffset || 0,
                    m = c[0],
                    g = c[1],
                    y = c[2],
                    _ = c[3],
                    v = c[4],
                    b = c[5],
                    T = t.split(" "),
                    S = parseFloat(T[0]) || 0,
                    w = parseFloat(T[1]) || 0;
                i ? c !== xr && (o = m * _ - g * y) && (l = S * (-g / o) + w * (m / o) - (m * b - g * v) / o, S = S * (_ / o) + w * (-y / o) + (y * b - _ * v) / o, w = l) : (S = (a = mr(e)).x + (~T[0].indexOf("%") ? S / 100 * a.width : S), w = a.y + (~(T[1] || T[0]).indexOf("%") ? w / 100 * a.height : w)), r || !1 !== r && u.smooth ? (v = S - h, b = w - d, u.xOffset = p + (v * m + b * y) - v, u.yOffset = f + (v * g + b * _) - b) : u.xOffset = u.yOffset = 0, u.xOrigin = S, u.yOrigin = w, u.smooth = !!r, u.origin = t, u.originIsAbsolute = !!i, e.style[rr] = "0px 0px", s && (_r(s, u, "xOrigin", h, S), _r(s, u, "yOrigin", d, w), _r(s, u, "xOffset", p, u.xOffset), _r(s, u, "yOffset", f, u.yOffset)), e.setAttribute("data-svg-origin", S + " " + w)
            },
            Lr = function (e, t) {
                var i = e._gsap || new qt(e);
                if ("x" in i && !t && !i.uncache) return i;
                var r, n, s, a, o, l, u, c, h, d, p, f, m, g, y, _, v, b, T, w, E, D, C, x, k, A, I, P, O, L, R, M, N = e.style,
                    F = i.scaleX < 0,
                    U = "px",
                    B = "deg",
                    j = getComputedStyle(e),
                    q = ur(e, rr) || "0";
                return r = n = s = l = u = c = h = d = p = 0, a = o = 1, i.svg = !(!e.getCTM || !gr(e)), j.translate && ("none" === j.translate && "none" === j.scale && "none" === j.rotate || (N[ir] = ("none" !== j.translate ? "translate3d(" + (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") + ("none" !== j.scale ? "scale(" + j.scale.split(" ").join(",") + ") " : "") + ("none" !== j[ir] ? j[ir] : "")), N.scale = N.rotate = N.translate = "none"), g = Pr(e, i.svg), i.svg && (i.uncache ? (k = e.getBBox(), q = i.xOrigin - k.x + "px " + (i.yOrigin - k.y) + "px", x = "") : x = !t && e.getAttribute("data-svg-origin"), Or(e, x || q, !!x || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== xr && (b = g[0], T = g[1], w = g[2], E = g[3], r = D = g[4], n = C = g[5], 6 === g.length ? (a = Math.sqrt(b * b + T * T), o = Math.sqrt(E * E + w * w), l = b || T ? Bi(T, b) * Fi : 0, (h = w || E ? Bi(w, E) * Fi + l : 0) && (o *= Math.abs(Math.cos(h * Ui))), i.svg && (r -= f - (f * b + m * w), n -= m - (f * T + m * E))) : (M = g[6], L = g[7], I = g[8], P = g[9], O = g[10], R = g[11], r = g[12], n = g[13], s = g[14], u = (y = Bi(M, O)) * Fi, y && (x = D * (_ = Math.cos(-y)) + I * (v = Math.sin(-y)), k = C * _ + P * v, A = M * _ + O * v, I = D * -v + I * _, P = C * -v + P * _, O = M * -v + O * _, R = L * -v + R * _, D = x, C = k, M = A), c = (y = Bi(-w, O)) * Fi, y && (_ = Math.cos(-y), R = E * (v = Math.sin(-y)) + R * _, b = x = b * _ - I * v, T = k = T * _ - P * v, w = A = w * _ - O * v), l = (y = Bi(T, b)) * Fi, y && (x = b * (_ = Math.cos(y)) + T * (v = Math.sin(y)), k = D * _ + C * v, T = T * _ - b * v, C = C * _ - D * v, b = x, D = k), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), a = ye(Math.sqrt(b * b + T * T + w * w)), o = ye(Math.sqrt(C * C + M * M)), y = Bi(D, C), h = Math.abs(y) > 2e-4 ? y * Fi : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), i.svg && (x = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !Ar(ur(e, ir)), x && e.setAttribute("transform", x))), Math.abs(h) > 90 && Math.abs(h) < 270 && (F ? (a *= -1, h += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, h += h <= 0 ? 180 : -180)), t = t || i.uncache, i.x = r - ((i.xPercent = r && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + U, i.y = n - ((i.yPercent = n && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + U, i.z = s + U, i.scaleX = ye(a), i.scaleY = ye(o), i.rotation = ye(l) + B, i.rotationX = ye(u) + B, i.rotationY = ye(c) + B, i.skewX = h + B, i.skewY = d + B, i.transformPerspective = p + U, (i.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (N[rr] = Rr(q)), i.xOffset = i.yOffset = 0, i.force3D = S.force3D, i.renderTransform = i.svg ? qr : Mi ? jr : Nr, i.uncache = 0, i
            },
            Rr = function (e) {
                return (e = e.split(" "))[0] + " " + e[1]
            },
            Mr = function (e, t, i) {
                var r = et(t);
                return ye(parseFloat(t) + parseFloat(Tr(e, "x", i + "px", r))) + r
            },
            Nr = function (e, t) {
                t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, jr(e, t)
            },
            Fr = "0deg",
            Ur = "0px",
            Br = ") ",
            jr = function (e, t) {
                var i = t || this,
                    r = i.xPercent,
                    n = i.yPercent,
                    s = i.x,
                    a = i.y,
                    o = i.z,
                    l = i.rotation,
                    u = i.rotationY,
                    c = i.rotationX,
                    h = i.skewX,
                    d = i.skewY,
                    p = i.scaleX,
                    f = i.scaleY,
                    m = i.transformPerspective,
                    g = i.force3D,
                    y = i.target,
                    _ = i.zOrigin,
                    v = "",
                    b = "auto" === g && e && 1 !== e || !0 === g;
                if (_ && (c !== Fr || u !== Fr)) {
                    var T, S = parseFloat(u) * Ui,
                        w = Math.sin(S),
                        E = Math.cos(S);
                    S = parseFloat(c) * Ui, T = Math.cos(S), s = Mr(y, s, w * T * -_), a = Mr(y, a, -Math.sin(S) * -_), o = Mr(y, o, E * T * -_ + _)
                }
                m !== Ur && (v += "perspective(" + m + Br), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (b || s !== Ur || a !== Ur || o !== Ur) && (v += o !== Ur || b ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Br), l !== Fr && (v += "rotate(" + l + Br), u !== Fr && (v += "rotateY(" + u + Br), c !== Fr && (v += "rotateX(" + c + Br), h === Fr && d === Fr || (v += "skew(" + h + ", " + d + Br), 1 === p && 1 === f || (v += "scale(" + p + ", " + f + Br), y.style[ir] = v || "translate(0, 0)"
            },
            qr = function (e, t) {
                var i, r, n, s, a, o = t || this,
                    l = o.xPercent,
                    u = o.yPercent,
                    c = o.x,
                    h = o.y,
                    d = o.rotation,
                    p = o.skewX,
                    f = o.skewY,
                    m = o.scaleX,
                    g = o.scaleY,
                    y = o.target,
                    _ = o.xOrigin,
                    v = o.yOrigin,
                    b = o.xOffset,
                    T = o.yOffset,
                    S = o.forceCSS,
                    w = parseFloat(c),
                    E = parseFloat(h);
                d = parseFloat(d), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), d += f), d || p ? (d *= Ui, p *= Ui, i = Math.cos(d) * m, r = Math.sin(d) * m, n = Math.sin(d - p) * -g, s = Math.cos(d - p) * g, p && (f *= Ui, a = Math.tan(p - f), n *= a = Math.sqrt(1 + a * a), s *= a, f && (a = Math.tan(f), i *= a = Math.sqrt(1 + a * a), r *= a)), i = ye(i), r = ye(r), n = ye(n), s = ye(s)) : (i = m, s = g, r = n = 0), (w && !~(c + "").indexOf("px") || E && !~(h + "").indexOf("px")) && (w = Tr(y, "x", c, "px"), E = Tr(y, "y", h, "px")), (_ || v || b || T) && (w = ye(w + _ - (_ * i + v * n) + b), E = ye(E + v - (_ * r + v * s) + T)), (l || u) && (a = y.getBBox(), w = ye(w + l / 100 * a.width), E = ye(E + u / 100 * a.height)), a = "matrix(" + i + "," + r + "," + n + "," + s + "," + w + "," + E + ")", y.setAttribute("transform", a), S && (y.style[ir] = a)
            },
            $r = function (e, t, i, r, n) {
                var s, a, o = 360,
                    l = O(n),
                    u = parseFloat(n) * (l && ~n.indexOf("rad") ? Fi : 1) - r,
                    c = r + u + "deg";
                return l && ("short" === (s = n.split("_")[1]) && (u %= o) !== u % 180 && (u += u < 0 ? o : -360), "cw" === s && u < 0 ? u = (u + 36e9) % o - ~~(u / o) * o : "ccw" === s && u > 0 && (u = (u - 36e9) % o - ~~(u / o) * o)), e._pt = a = new fi(e._pt, t, i, r, u, zi), a.e = c, a.u = "deg", e._props.push(i), a
            },
            Hr = function (e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            Vr = function (e, t, i) {
                var r, n, s, a, o, l, u, c = Hr({}, i._gsap),
                    h = i.style;
                for (n in c.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), h[ir] = t, r = Lr(i, 1), yr(i, ir), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[ir], h[ir] = t, r = Lr(i, 1), h[ir] = s), Ni) (s = c[n]) !== (a = r[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = et(s) !== (u = et(a)) ? Tr(i, n, s, u) : parseFloat(s), l = parseFloat(a), e._pt = new fi(e._pt, r, n, o, l - o, Vi), e._pt.u = u || 0, e._props.push(n));
                Hr(r, c)
            };
        ge("padding,margin,Width,Radius", (function (e, t) {
            var i = "Top",
                r = "Right",
                n = "Bottom",
                s = "Left",
                a = (t < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map((function (i) {
                    return t < 2 ? e + i : "border" + i + e
                }));
            Cr[t > 1 ? "border" + e : e] = function (e, t, i, r, n) {
                var s, o;
                if (arguments.length < 4) return s = a.map((function (t) {
                    return Sr(e, t, i)
                })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
                s = (r + "").split(" "), o = {}, a.forEach((function (e, t) {
                    return o[e] = s[t] = s[t] || s[(t - 1) / 2 | 0]
                })), e.init(t, o, n)
            }
        }));
        var zr, Wr, Gr, Xr = {
            name: "css",
            register: dr,
            targetTest: function (e) {
                return e.style && e.nodeType
            },
            init: function (e, t, i, r, n) {
                var s, a, o, l, u, c, h, d, p, f, m, g, y, _, v, b, T, w, E, D, C = this._props,
                    x = e.style,
                    k = i.vars.startAt;
                for (h in Pi || dr(), this.styles = this.styles || or(e), b = this.styles.props, this.tween = i, t)
                    if ("autoRound" !== h && (a = t[h], !le[h] || !Xt(h, t, i, r, e, n)))
                        if (u = typeof a, c = Cr[h], "function" === u && (u = typeof (a = a.call(i, r, e, n))), "string" === u && ~a.indexOf("random(") && (a = dt(a)), c) c(this, e, h, a, i) && (v = 1);
                        else if ("--" === h.substr(0, 2)) s = (getComputedStyle(e).getPropertyValue(h) + "").trim(), a += "", Dt.lastIndex = 0, Dt.test(s) || (d = et(s), p = et(a)), p ? d !== p && (s = Tr(e, h, s, p) + p) : d && (a += d), this.add(x, "setProperty", s, a, r, n, 0, 0, h), C.push(h), b.push(h, 0, x[h]);
                        else if ("undefined" !== u) {
                            if (k && h in k ? (s = "function" == typeof k[h] ? k[h].call(i, r, e, n) : k[h], O(s) && ~s.indexOf("random(") && (s = dt(s)), et(s + "") || (s += S.units[h] || et(Sr(e, h)) || ""), "=" === (s + "").charAt(1) && (s = Sr(e, h))) : s = Sr(e, h), l = parseFloat(s), (f = "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), h in Hi && ("autoAlpha" === h && (1 === l && "hidden" === Sr(e, "visibility") && o && (l = 0), b.push("visibility", 0, x.visibility), _r(this, x, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== h && "transform" !== h && ~(h = Hi[h]).indexOf(",") && (h = h.split(",")[0])), m = h in Ni)
                                if (this.styles.save(h), g || ((y = e._gsap).renderTransform && !t.parseTransform || Lr(e, t.parseTransform), _ = !1 !== t.smoothOrigin && y.smooth, (g = this._pt = new fi(this._pt, x, ir, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === h) this._pt = new fi(this._pt, y, "scaleY", y.scaleY, (f ? ve(y.scaleY, f + o) : o) - y.scaleY || 0, Vi), this._pt.u = 0, C.push("scaleY", h), h += "X";
                                else {
                                    if ("transformOrigin" === h) {
                                        b.push(rr, 0, x[rr]), w = void 0, E = void 0, D = void 0, w = (T = a).split(" "), E = w[0], D = w[1] || "50%", "top" !== E && "bottom" !== E && "left" !== D && "right" !== D || (T = E, E = D, D = T), w[0] = Er[E] || E, w[1] = Er[D] || D, a = w.join(" "), y.svg ? Or(e, a, 0, _, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== y.zOrigin && _r(this, y, "zOrigin", y.zOrigin, p), _r(this, x, h, Rr(s), Rr(a)));
                                        continue
                                    }
                                    if ("svgOrigin" === h) {
                                        Or(e, a, 1, _, 0, this);
                                        continue
                                    }
                                    if (h in kr) {
                                        $r(this, y, h, l, f ? ve(l, f + a) : a);
                                        continue
                                    }
                                    if ("smoothOrigin" === h) {
                                        _r(this, y, "smooth", y.smooth, a);
                                        continue
                                    }
                                    if ("force3D" === h) {
                                        y[h] = a;
                                        continue
                                    }
                                    if ("transform" === h) {
                                        Vr(this, a, e);
                                        continue
                                    }
                                }
                            else h in x || (h = hr(h) || h);
                            if (m || (o || 0 === o) && (l || 0 === l) && !$i.test(a) && h in x) o || (o = 0), (d = (s + "").substr((l + "").length)) !== (p = et(a) || (h in S.units ? S.units[h] : d)) && (l = Tr(e, h, s, p)), this._pt = new fi(this._pt, m ? y : x, h, l, (f ? ve(l, f + o) : o) - l, m || "px" !== p && "zIndex" !== h || !1 === t.autoRound ? Vi : Gi), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = Wi);
                            else if (h in x) wr.call(this, e, h, s, f ? f + a : a);
                            else if (h in e) this.add(e, h, s || e[h], f ? f + a : a, r, n);
                            else if ("parseTransform" !== h) {
                                J(h, a);
                                continue
                            }
                            m || (h in x ? b.push(h, 0, x[h]) : b.push(h, 1, s || e[h])), C.push(h)
                        }
                v && pi(this)
            },
            render: function (e, t) {
                if (t.tween._time || !Ri())
                    for (var i = t._pt; i;) i.r(e, i.d), i = i._next;
                else t.styles.revert()
            },
            get: Sr,
            aliases: Hi,
            getSetter: function (e, t, i) {
                var r = Hi[t];
                return r && r.indexOf(",") < 0 && (t = r), t in Ni && t !== rr && (e._gsap.x || Sr(e, "x")) ? i && Li === i ? "scale" === t ? Zi : Ji : (Li = i || {}) && ("scale" === t ? er : tr) : e.style && !M(e.style[t]) ? Ki : ~t.indexOf("-") ? Qi : si(e, t)
            },
            core: {
                _removeProperty: yr,
                _getMatrix: Pr
            }
        };
        xi.utils.checkPrefix = hr, xi.core.getStyleSaver = or, Gr = ge((zr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Wr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (e) {
            Ni[e] = 1
        })), ge(Wr, (function (e) {
            S.units[e] = "deg", kr[e] = 1
        })), Hi[Gr[13]] = zr + "," + Wr, ge("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (e) {
            var t = e.split(":");
            Hi[t[1]] = Gr[t[0]]
        })), ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (e) {
            S.units[e] = "px"
        })), xi.registerPlugin(Xr);
        var Yr = xi.registerPlugin(Xr) || xi;
        Yr.core.Tween
    }, (e, t, i) => {
        function r(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        i.d(t, {
            a: () => si
        });
        var n, s, a, o, l, u, c, h, d, p, f, m, g, y = function () {
            return n || "undefined" != typeof window && (n = window.gsap) && n.registerPlugin && n
        },
            _ = 1,
            v = [],
            b = [],
            T = [],
            S = Date.now,
            w = function (e, t) {
                return t
            },
            E = function (e, t) {
                return ~T.indexOf(e) && T[T.indexOf(e) + 1][t]
            },
            D = function (e) {
                return !!~p.indexOf(e)
            },
            C = function (e, t, i, r, n) {
                return e.addEventListener(t, i, {
                    passive: !r,
                    capture: !!n
                })
            },
            x = function (e, t, i, r) {
                return e.removeEventListener(t, i, !!r)
            },
            k = "scrollLeft",
            A = "scrollTop",
            I = function () {
                return f && f.isPressed || b.cache++
            },
            P = function (e, t) {
                var i = function i(r) {
                    if (r || 0 === r) {
                        _ && (a.history.scrollRestoration = "manual");
                        var n = f && f.isPressed;
                        r = i.v = Math.round(r) || (f && f.iOS ? 1 : 0), e(r), i.cacheID = b.cache, n && w("ss", r)
                    } else (t || b.cache !== i.cacheID || w("ref")) && (i.cacheID = b.cache, i.v = e());
                    return i.v + i.offset
                };
                return i.offset = 0, e && i
            },
            O = {
                s: k,
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: P((function (e) {
                    return arguments.length ? a.scrollTo(e, L.sc()) : a.pageXOffset || o[k] || l[k] || u[k] || 0
                }))
            },
            L = {
                s: A,
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: O,
                sc: P((function (e) {
                    return arguments.length ? a.scrollTo(O.sc(), e) : a.pageYOffset || o[A] || l[A] || u[A] || 0
                }))
            },
            R = function (e, t) {
                return (t && t._ctx && t._ctx.selector || n.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== n.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
            },
            M = function (e, t) {
                var i = t.s,
                    r = t.sc;
                D(e) && (e = o.scrollingElement || l);
                var s = b.indexOf(e),
                    a = r === L.sc ? 1 : 2;
                !~s && (s = b.push(e) - 1), b[s + a] || C(e, "scroll", I);
                var u = b[s + a],
                    c = u || (b[s + a] = P(E(e, i), !0) || (D(e) ? r : P((function (t) {
                        return arguments.length ? e[i] = t : e[i]
                    }))));
                return c.target = e, u || (c.smooth = "smooth" === n.getProperty(e, "scrollBehavior")), c
            },
            N = function (e, t, i) {
                var r = e,
                    n = e,
                    s = S(),
                    a = s,
                    o = t || 50,
                    l = Math.max(500, 3 * o),
                    u = function (e, t) {
                        var l = S();
                        t || l - s > o ? (n = r, r = e, a = s, s = l) : i ? r += e : r = n + (e - n) / (l - a) * (s - a)
                    };
                return {
                    update: u,
                    reset: function () {
                        n = r = i ? 0 : r, a = s = 0
                    },
                    getVelocity: function (e) {
                        var t = a,
                            o = n,
                            c = S();
                        return (e || 0 === e) && e !== r && u(e), s === a || c - a > l ? 0 : (r + (i ? o : -o)) / ((i ? c : s) - t) * 1e3
                    }
                }
            },
            F = function (e, t) {
                return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
            },
            U = function (e) {
                var t = Math.max.apply(Math, e),
                    i = Math.min.apply(Math, e);
                return Math.abs(t) >= Math.abs(i) ? t : i
            },
            B = function () {
                var e, t, i, r;
                (d = n.core.globals().ScrollTrigger) && d.core && (e = d.core, t = e.bridge || {}, i = e._scrollers, r = e._proxies, i.push.apply(i, b), r.push.apply(r, T), b = i, T = r, w = function (e, i) {
                    return t[e](i)
                })
            },
            j = function (e) {
                return (n = e || y()) && "undefined" != typeof document && document.body && (a = window, o = document, l = o.documentElement, u = o.body, p = [a, o, l, u], n.utils.clamp, g = n.core.context || function () { }, h = "onpointerenter" in u ? "pointer" : "mouse", c = q.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = q.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function () {
                    return _ = 0
                }), 500), B(), s = 1), s
            };
        O.op = L, b.cache = 0;
        var q = function () {
            function e(e) {
                this.init(e)
            }
            var t, i, p;
            return e.prototype.init = function (e) {
                s || j(n) || console.warn("Please gsap.registerPlugin(Observer)"), d || B();
                var t = e.tolerance,
                    i = e.dragMinimum,
                    r = e.type,
                    p = e.target,
                    y = e.lineHeight,
                    _ = e.debounce,
                    b = e.preventDefault,
                    T = e.onStop,
                    w = e.onStopDelay,
                    E = e.ignore,
                    k = e.wheelSpeed,
                    A = e.event,
                    P = e.onDragStart,
                    q = e.onDragEnd,
                    $ = e.onDrag,
                    H = e.onPress,
                    V = e.onRelease,
                    z = e.onRight,
                    W = e.onLeft,
                    G = e.onUp,
                    X = e.onDown,
                    Y = e.onChangeX,
                    K = e.onChangeY,
                    Q = e.onChange,
                    J = e.onToggleX,
                    Z = e.onToggleY,
                    ee = e.onHover,
                    te = e.onHoverEnd,
                    ie = e.onMove,
                    re = e.ignoreCheck,
                    ne = e.isNormalizer,
                    se = e.onGestureStart,
                    ae = e.onGestureEnd,
                    oe = e.onWheel,
                    le = e.onEnable,
                    ue = e.onDisable,
                    ce = e.onClick,
                    he = e.scrollSpeed,
                    de = e.capture,
                    pe = e.allowClicks,
                    fe = e.lockAxis,
                    me = e.onLockAxis;
                this.target = p = R(p) || l, this.vars = e, E && (E = n.utils.toArray(E)), t = t || 1e-9, i = i || 0, k = k || 1, he = he || 1, r = r || "wheel,touch,pointer", _ = !1 !== _, y || (y = parseFloat(a.getComputedStyle(u).lineHeight) || 22);
                var ge, ye, _e, ve, be, Te, Se, we = this,
                    Ee = 0,
                    De = 0,
                    Ce = M(p, O),
                    xe = M(p, L),
                    ke = Ce(),
                    Ae = xe(),
                    Ie = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === m[0],
                    Pe = D(p),
                    Oe = p.ownerDocument || o,
                    Le = [0, 0, 0],
                    Re = [0, 0, 0],
                    Me = 0,
                    Ne = function () {
                        return Me = S()
                    },
                    Fe = function (e, t) {
                        return (we.event = e) && E && ~E.indexOf(e.target) || t && Ie && "touch" !== e.pointerType || re && re(e, t)
                    },
                    Ue = function () {
                        var e = we.deltaX = U(Le),
                            i = we.deltaY = U(Re),
                            r = Math.abs(e) >= t,
                            n = Math.abs(i) >= t;
                        Q && (r || n) && Q(we, e, i, Le, Re), r && (z && we.deltaX > 0 && z(we), W && we.deltaX < 0 && W(we), Y && Y(we), J && we.deltaX < 0 != Ee < 0 && J(we), Ee = we.deltaX, Le[0] = Le[1] = Le[2] = 0), n && (X && we.deltaY > 0 && X(we), G && we.deltaY < 0 && G(we), K && K(we), Z && we.deltaY < 0 != De < 0 && Z(we), De = we.deltaY, Re[0] = Re[1] = Re[2] = 0), (ve || _e) && (ie && ie(we), _e && ($(we), _e = !1), ve = !1), Te && !(Te = !1) && me && me(we), be && (oe(we), be = !1), ge = 0
                    },
                    Be = function (e, t, i) {
                        Le[i] += e, Re[i] += t, we._vx.update(e), we._vy.update(t), _ ? ge || (ge = requestAnimationFrame(Ue)) : Ue()
                    },
                    je = function (e, t) {
                        fe && !Se && (we.axis = Se = Math.abs(e) > Math.abs(t) ? "x" : "y", Te = !0), "y" !== Se && (Le[2] += e, we._vx.update(e, !0)), "x" !== Se && (Re[2] += t, we._vy.update(t, !0)), _ ? ge || (ge = requestAnimationFrame(Ue)) : Ue()
                    },
                    qe = function (e) {
                        if (!Fe(e, 1)) {
                            var t = (e = F(e, b)).clientX,
                                r = e.clientY,
                                n = t - we.x,
                                s = r - we.y,
                                a = we.isDragging;
                            we.x = t, we.y = r, (a || Math.abs(we.startX - t) >= i || Math.abs(we.startY - r) >= i) && ($ && (_e = !0), a || (we.isDragging = !0), je(n, s), a || P && P(we))
                        }
                    },
                    $e = we.onPress = function (e) {
                        Fe(e, 1) || e && e.button || (we.axis = Se = null, ye.pause(), we.isPressed = !0, e = F(e), Ee = De = 0, we.startX = we.x = e.clientX, we.startY = we.y = e.clientY, we._vx.reset(), we._vy.reset(), C(ne ? p : Oe, m[1], qe, b, !0), we.deltaX = we.deltaY = 0, H && H(we))
                    },
                    He = we.onRelease = function (e) {
                        if (!Fe(e, 1)) {
                            x(ne ? p : Oe, m[1], qe, !0);
                            var t = !isNaN(we.y - we.startY),
                                i = we.isDragging && (Math.abs(we.x - we.startX) > 3 || Math.abs(we.y - we.startY) > 3),
                                r = F(e);
                            !i && t && (we._vx.reset(), we._vy.reset(), b && pe && n.delayedCall(.08, (function () {
                                if (S() - Me > 300 && !e.defaultPrevented)
                                    if (e.target.click) e.target.click();
                                    else if (Oe.createEvent) {
                                        var t = Oe.createEvent("MouseEvents");
                                        t.initMouseEvent("click", !0, !0, a, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                                    }
                            }))), we.isDragging = we.isGesturing = we.isPressed = !1, T && !ne && ye.restart(!0), q && i && q(we), V && V(we, i)
                        }
                    },
                    Ve = function (e) {
                        return e.touches && e.touches.length > 1 && (we.isGesturing = !0) && se(e, we.isDragging)
                    },
                    ze = function () {
                        return (we.isGesturing = !1) || ae(we)
                    },
                    We = function (e) {
                        if (!Fe(e)) {
                            var t = Ce(),
                                i = xe();
                            Be((t - ke) * he, (i - Ae) * he, 1), ke = t, Ae = i, T && ye.restart(!0)
                        }
                    },
                    Ge = function (e) {
                        if (!Fe(e)) {
                            e = F(e, b), oe && (be = !0);
                            var t = (1 === e.deltaMode ? y : 2 === e.deltaMode ? a.innerHeight : 1) * k;
                            Be(e.deltaX * t, e.deltaY * t, 0), T && !ne && ye.restart(!0)
                        }
                    },
                    Xe = function (e) {
                        if (!Fe(e)) {
                            var t = e.clientX,
                                i = e.clientY,
                                r = t - we.x,
                                n = i - we.y;
                            we.x = t, we.y = i, ve = !0, (r || n) && je(r, n)
                        }
                    },
                    Ye = function (e) {
                        we.event = e, ee(we)
                    },
                    Ke = function (e) {
                        we.event = e, te(we)
                    },
                    Qe = function (e) {
                        return Fe(e) || F(e, b) && ce(we)
                    };
                ye = we._dc = n.delayedCall(w || .25, (function () {
                    we._vx.reset(), we._vy.reset(), ye.pause(), T && T(we)
                })).pause(), we.deltaX = we.deltaY = 0, we._vx = N(0, 50, !0), we._vy = N(0, 50, !0), we.scrollX = Ce, we.scrollY = xe, we.isDragging = we.isGesturing = we.isPressed = !1, g(this), we.enable = function (e) {
                    return we.isEnabled || (C(Pe ? Oe : p, "scroll", I), r.indexOf("scroll") >= 0 && C(Pe ? Oe : p, "scroll", We, b, de), r.indexOf("wheel") >= 0 && C(p, "wheel", Ge, b, de), (r.indexOf("touch") >= 0 && c || r.indexOf("pointer") >= 0) && (C(p, m[0], $e, b, de), C(Oe, m[2], He), C(Oe, m[3], He), pe && C(p, "click", Ne, !1, !0), ce && C(p, "click", Qe), se && C(Oe, "gesturestart", Ve), ae && C(Oe, "gestureend", ze), ee && C(p, h + "enter", Ye), te && C(p, h + "leave", Ke), ie && C(p, h + "move", Xe)), we.isEnabled = !0, e && e.type && $e(e), le && le(we)), we
                }, we.disable = function () {
                    we.isEnabled && (v.filter((function (e) {
                        return e !== we && D(e.target)
                    })).length || x(Pe ? Oe : p, "scroll", I), we.isPressed && (we._vx.reset(), we._vy.reset(), x(ne ? p : Oe, m[1], qe, !0)), x(Pe ? Oe : p, "scroll", We, de), x(p, "wheel", Ge, de), x(p, m[0], $e, de), x(Oe, m[2], He), x(Oe, m[3], He), x(p, "click", Ne, !0), x(p, "click", Qe), x(Oe, "gesturestart", Ve), x(Oe, "gestureend", ze), x(p, h + "enter", Ye), x(p, h + "leave", Ke), x(p, h + "move", Xe), we.isEnabled = we.isPressed = we.isDragging = !1, ue && ue(we))
                }, we.kill = we.revert = function () {
                    we.disable();
                    var e = v.indexOf(we);
                    e >= 0 && v.splice(e, 1), f === we && (f = 0)
                }, v.push(we), ne && D(p) && (f = we), we.enable(A)
            }, t = e, (i = [{
                key: "velocityX",
                get: function () {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function () {
                    return this._vy.getVelocity()
                }
            }]) && r(t.prototype, i), p && r(t, p), e
        }();
        q.version = "3.12.2", q.create = function (e) {
            return new q(e)
        }, q.register = j, q.getAll = function () {
            return v.slice()
        }, q.getById = function (e) {
            return v.filter((function (t) {
                return t.vars.id === e
            }))[0]
        }, y() && n.registerPlugin(q);
        var $, H, V, z, W, G, X, Y, K, Q, J, Z, ee, te, ie, re, ne, se, ae, oe, le, ue, ce, he, de, pe, fe, me, ge, ye, _e, ve, be, Te, Se, we, Ee = 1,
            De = Date.now,
            Ce = De(),
            xe = 0,
            ke = 0,
            Ae = function (e, t, i) {
                var r = He(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
                return i["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
            },
            Ie = function (e, t) {
                return !t || He(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
            },
            Pe = function e() {
                return ke && requestAnimationFrame(e)
            },
            Oe = function () {
                return te = 1
            },
            Le = function () {
                return te = 0
            },
            Re = function (e) {
                return e
            },
            Me = function (e) {
                return Math.round(1e5 * e) / 1e5 || 0
            },
            Ne = function () {
                return "undefined" != typeof window
            },
            Fe = function () {
                return $ || Ne() && ($ = window.gsap) && $.registerPlugin && $
            },
            Ue = function (e) {
                return !!~X.indexOf(e)
            },
            Be = function (e) {
                return ("Height" === e ? _e : V["inner" + e]) || W["client" + e] || G["client" + e]
            },
            je = function (e) {
                return E(e, "getBoundingClientRect") || (Ue(e) ? function () {
                    return Jt.width = V.innerWidth, Jt.height = _e, Jt
                } : function () {
                    return dt(e)
                })
            },
            qe = function (e, t) {
                var i = t.s,
                    r = t.d2,
                    n = t.d,
                    s = t.a;
                return Math.max(0, (i = "scroll" + r) && (s = E(e, i)) ? s() - je(e)()[n] : Ue(e) ? (W[i] || G[i]) - Be(r) : e[i] - e["offset" + r])
            },
            $e = function (e, t) {
                for (var i = 0; i < ae.length; i += 3)(!t || ~t.indexOf(ae[i + 1])) && e(ae[i], ae[i + 1], ae[i + 2])
            },
            He = function (e) {
                return "string" == typeof e
            },
            Ve = function (e) {
                return "function" == typeof e
            },
            ze = function (e) {
                return "number" == typeof e
            },
            We = function (e) {
                return "object" == typeof e
            },
            Ge = function (e, t, i) {
                return e && e.progress(t ? 0 : 1) && i && e.pause()
            },
            Xe = function (e, t) {
                if (e.enabled) {
                    var i = t(e);
                    i && i.totalTime && (e.callbackAnimation = i)
                }
            },
            Ye = Math.abs,
            Ke = "left",
            Qe = "right",
            Je = "bottom",
            Ze = "width",
            et = "height",
            tt = "Right",
            it = "Left",
            rt = "Top",
            nt = "Bottom",
            st = "padding",
            at = "margin",
            ot = "Width",
            lt = "Height",
            ut = "px",
            ct = function (e) {
                return V.getComputedStyle(e)
            },
            ht = function (e, t) {
                for (var i in t) i in e || (e[i] = t[i]);
                return e
            },
            dt = function (e, t) {
                var i = t && "matrix(1, 0, 0, 1, 0, 0)" !== ct(e)[ie] && $.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                    r = e.getBoundingClientRect();
                return i && i.progress(0).kill(), r
            },
            pt = function (e, t) {
                var i = t.d2;
                return e["offset" + i] || e["client" + i] || 0
            },
            ft = function (e) {
                var t, i = [],
                    r = e.labels,
                    n = e.duration();
                for (t in r) i.push(r[t] / n);
                return i
            },
            mt = function (e) {
                var t = $.utils.snap(e),
                    i = Array.isArray(e) && e.slice(0).sort((function (e, t) {
                        return e - t
                    }));
                return i ? function (e, r, n) {
                    var s;
                    if (void 0 === n && (n = .001), !r) return t(e);
                    if (r > 0) {
                        for (e -= n, s = 0; s < i.length; s++)
                            if (i[s] >= e) return i[s];
                        return i[s - 1]
                    }
                    for (s = i.length, e += n; s--;)
                        if (i[s] <= e) return i[s];
                    return i[0]
                } : function (i, r, n) {
                    void 0 === n && (n = .001);
                    var s = t(i);
                    return !r || Math.abs(s - i) < n || s - i < 0 == r < 0 ? s : t(r < 0 ? i - e : i + e)
                }
            },
            gt = function (e, t, i, r) {
                return i.split(",").forEach((function (i) {
                    return e(t, i, r)
                }))
            },
            yt = function (e, t, i, r, n) {
                return e.addEventListener(t, i, {
                    passive: !r,
                    capture: !!n
                })
            },
            _t = function (e, t, i, r) {
                return e.removeEventListener(t, i, !!r)
            },
            vt = function (e, t, i) {
                (i = i && i.wheelHandler) && (e(t, "wheel", i), e(t, "touchmove", i))
            },
            bt = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            },
            Tt = {
                toggleActions: "play",
                anticipatePin: 0
            },
            St = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            },
            wt = function (e, t) {
                if (He(e)) {
                    var i = e.indexOf("="),
                        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
                    ~i && (e.indexOf("%") > i && (r *= t / 100), e = e.substr(0, i - 1)), e = r + (e in St ? St[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
                }
                return e
            },
            Et = function (e, t, i, r, n, s, a, o) {
                var l = n.startColor,
                    u = n.endColor,
                    c = n.fontSize,
                    h = n.indent,
                    d = n.fontWeight,
                    p = z.createElement("div"),
                    f = Ue(i) || "fixed" === E(i, "pinType"),
                    m = -1 !== e.indexOf("scroller"),
                    g = f ? G : i,
                    y = -1 !== e.indexOf("start"),
                    _ = y ? l : u,
                    v = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return v += "position:" + ((m || o) && f ? "fixed;" : "absolute;"), (m || o || !f) && (v += (r === L ? Qe : Je) + ":" + (s + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = y, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = v, p.innerText = t || 0 === t ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + r.op.d2], Dt(p, 0, r, y), p
            },
            Dt = function (e, t, i, r) {
                var n = {
                    display: "block"
                },
                    s = i[r ? "os2" : "p2"],
                    a = i[r ? "p2" : "os2"];
                e._isFlipped = r, n[i.a + "Percent"] = r ? -100 : 0, n[i.a] = r ? "1px" : 0, n["border" + s + ot] = 1, n["border" + a + ot] = 0, n[i.p] = t + "px", $.set(e, n)
            },
            Ct = [],
            xt = {},
            kt = function () {
                return De() - xe > 34 && (be || (be = requestAnimationFrame(zt)))
            },
            At = function () {
                (!ce || !ce.isPressed || ce.startX > G.clientWidth) && (b.cache++, ce ? be || (be = requestAnimationFrame(zt)) : zt(), xe || Mt("scrollStart"), xe = De())
            },
            It = function () {
                pe = V.innerWidth, de = V.innerHeight
            },
            Pt = function () {
                b.cache++, !ee && !ue && !z.fullscreenElement && !z.webkitFullscreenElement && (!he || pe !== V.innerWidth || Math.abs(V.innerHeight - de) > .25 * V.innerHeight) && Y.restart(!0)
            },
            Ot = {},
            Lt = [],
            Rt = function e() {
                return _t(si, "scrollEnd", e) || $t(!0)
            },
            Mt = function (e) {
                return Ot[e] && Ot[e].map((function (e) {
                    return e()
                })) || Lt
            },
            Nt = [],
            Ft = function (e) {
                for (var t = 0; t < Nt.length; t += 5)(!e || Nt[t + 4] && Nt[t + 4].query === e) && (Nt[t].style.cssText = Nt[t + 1], Nt[t].getBBox && Nt[t].setAttribute("transform", Nt[t + 2] || ""), Nt[t + 3].uncache = 1)
            },
            Ut = function (e, t) {
                var i;
                for (re = 0; re < Ct.length; re++) !(i = Ct[re]) || t && i._ctx !== t || (e ? i.kill(1) : i.revert(!0, !0));
                t && Ft(t), t || Mt("revert")
            },
            Bt = function (e, t) {
                b.cache++, (t || !Te) && b.forEach((function (e) {
                    return Ve(e) && e.cacheID++ && (e.rec = 0)
                })), He(e) && (V.history.scrollRestoration = ge = e)
            },
            jt = 0,
            qt = function () {
                G.appendChild(ye), _e = ye.offsetHeight || V.innerHeight, G.removeChild(ye)
            },
            $t = function (e, t) {
                if (!xe || e) {
                    qt(), Te = si.isRefreshing = !0, b.forEach((function (e) {
                        return Ve(e) && ++e.cacheID && (e.rec = e())
                    }));
                    var i = Mt("refreshInit");
                    oe && si.sort(), t || Ut(), b.forEach((function (e) {
                        Ve(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                    })), Ct.slice(0).forEach((function (e) {
                        return e.refresh()
                    })), Ct.forEach((function (e, t) {
                        if (e._subPinOffset && e.pin) {
                            var i = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                r = e.pin[i];
                            e.revert(!0, 1), e.adjustPinSpacing(e.pin[i] - r), e.refresh()
                        }
                    })), Ct.forEach((function (e) {
                        var t = qe(e.scroller, e._dir);
                        ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
                    })), i.forEach((function (e) {
                        return e && e.render && e.render(-1)
                    })), b.forEach((function (e) {
                        Ve(e) && (e.smooth && requestAnimationFrame((function () {
                            return e.target.style.scrollBehavior = "smooth"
                        })), e.rec && e(e.rec))
                    })), Bt(ge, 1), Y.pause(), jt++, Te = 2, zt(2), Ct.forEach((function (e) {
                        return Ve(e.vars.onRefresh) && e.vars.onRefresh(e)
                    })), Te = si.isRefreshing = !1, Mt("refresh")
                } else yt(si, "scrollEnd", Rt)
            },
            Ht = 0,
            Vt = 1,
            zt = function (e) {
                if (!Te || 2 === e) {
                    si.isUpdating = !0, we && we.update(0);
                    var t = Ct.length,
                        i = De(),
                        r = i - Ce >= 50,
                        n = t && Ct[0].scroll();
                    if (Vt = Ht > n ? -1 : 1, Te || (Ht = n), r && (xe && !te && i - xe > 200 && (xe = 0, Mt("scrollEnd")), J = Ce, Ce = i), Vt < 0) {
                        for (re = t; re-- > 0;) Ct[re] && Ct[re].update(0, r);
                        Vt = 1
                    } else
                        for (re = 0; re < t; re++) Ct[re] && Ct[re].update(0, r);
                    si.isUpdating = !1
                }
                be = 0
            },
            Wt = [Ke, "top", Je, Qe, at + nt, at + tt, at + rt, at + it, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
            Gt = Wt.concat([Ze, et, "boxSizing", "max" + ot, "max" + lt, "position", at, st, st + rt, st + tt, st + nt, st + it]),
            Xt = function (e, t, i, r) {
                if (!e._gsap.swappedIn) {
                    for (var n, s = Wt.length, a = t.style, o = e.style; s--;) a[n = Wt[s]] = i[n];
                    a.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (a.display = "inline-block"), o[Je] = o[Qe] = "auto", a.flexBasis = i.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Ze] = pt(e, O) + ut, a[et] = pt(e, L) + ut, a[st] = o[at] = o.top = o[Ke] = "0", Kt(r), o[Ze] = o["max" + ot] = i[Ze], o[et] = o["max" + lt] = i[et], o[st] = i[st], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
                }
            },
            Yt = /([A-Z])/g,
            Kt = function (e) {
                if (e) {
                    var t, i, r = e.t.style,
                        n = e.length,
                        s = 0;
                    for ((e.t._gsap || $.core.getCache(e.t)).uncache = 1; s < n; s += 2) i = e[s + 1], t = e[s], i ? r[t] = i : r[t] && r.removeProperty(t.replace(Yt, "-$1").toLowerCase())
                }
            },
            Qt = function (e) {
                for (var t = Gt.length, i = e.style, r = [], n = 0; n < t; n++) r.push(Gt[n], i[Gt[n]]);
                return r.t = e, r
            },
            Jt = {
                left: 0,
                top: 0
            },
            Zt = function (e, t, i, r, n, s, a, o, l, u, c, h, d, p) {
                Ve(e) && (e = e(o)), He(e) && "max" === e.substr(0, 3) && (e = h + ("=" === e.charAt(4) ? wt("0" + e.substr(3), i) : 0));
                var f, m, g, y = d ? d.time() : 0;
                if (d && d.seek(0), isNaN(e) || (e = +e), ze(e)) d && (e = $.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)), a && Dt(a, i, r, !0);
                else {
                    Ve(t) && (t = t(o));
                    var _, v, b, T, S = (e || "0").split(" ");
                    g = R(t, o) || G, (_ = dt(g) || {}) && (_.left || _.top) || "none" !== ct(g).display || (T = g.style.display, g.style.display = "block", _ = dt(g), T ? g.style.display = T : g.style.removeProperty("display")), v = wt(S[0], _[r.d]), b = wt(S[1] || "0", i), e = _[r.p] - l[r.p] - u + v + n - b, a && Dt(a, b, r, i - b < 20 || a._isStart && b > 20), i -= i - b
                }
                if (p && (o[p] = e || -.001, e < 0 && (e = 0)), s) {
                    var w = e + i,
                        E = s._isStart;
                    f = "scroll" + r.d2, Dt(s, w, r, E && w > 20 || !E && (c ? Math.max(G[f], W[f]) : s.parentNode[f]) <= w + 1), c && (l = dt(a), c && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + ut))
                }
                return d && g && (f = dt(g), d.seek(h), m = dt(g), d._caScrollDist = f[r.p] - m[r.p], e = e / d._caScrollDist * h), d && d.seek(y), d ? e : Math.round(e)
            },
            ei = /(webkit|moz|length|cssText|inset)/i,
            ti = function (e, t, i, r) {
                if (e.parentNode !== t) {
                    var n, s, a = e.style;
                    if (t === G) {
                        for (n in e._stOrig = a.cssText, s = ct(e)) + n || ei.test(n) || !s[n] || "string" != typeof a[n] || "0" === n || (a[n] = s[n]);
                        a.top = i, a.left = r
                    } else a.cssText = e._stOrig;
                    $.core.getCache(e).uncache = 1, t.appendChild(e)
                }
            },
            ii = function (e, t, i) {
                var r = t,
                    n = r;
                return function (t) {
                    var s = Math.round(e());
                    return s !== r && s !== n && Math.abs(s - r) > 3 && Math.abs(s - n) > 3 && (t = s, i && i()), n = r, r = t, t
                }
            },
            ri = function (e, t, i) {
                var r = {};
                r[t.p] = "+=" + i, $.set(e, r)
            },
            ni = function (e, t) {
                var i = M(e, t),
                    r = "_scroll" + t.p2,
                    n = function t(n, s, a, o, l) {
                        var u = t.tween,
                            c = s.onComplete,
                            h = {};
                        a = a || i();
                        var d = ii(i, a, (function () {
                            u.kill(), t.tween = 0
                        }));
                        return l = o && l || 0, o = o || n - a, u && u.kill(), s[r] = n, s.modifiers = h, h[r] = function () {
                            return d(a + o * u.ratio + l * u.ratio * u.ratio)
                        }, s.onUpdate = function () {
                            b.cache++, zt()
                        }, s.onComplete = function () {
                            t.tween = 0, c && c.call(u)
                        }, u = t.tween = $.to(e, s)
                    };
                return e[r] = i, i.wheelHandler = function () {
                    return n.tween && n.tween.kill() && (n.tween = 0)
                }, yt(e, "wheel", i.wheelHandler), si.isTouch && yt(e, "touchmove", i.wheelHandler), n
            },
            si = function () {
                function e(t, i) {
                    H || e.register($) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), me(this), this.init(t, i)
                }
                return e.prototype.init = function (t, i) {
                    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), ke) {
                        var r, n, s, a, o, l, u, c, h, d, p, f, m, g, y, _, v, S, w, D, C, x, k, A, I, P, N, F, U, B, j, q, H, X, Y, Z, ie, ne, se, ae, ue, ce, he = t = ht(He(t) || ze(t) || t.nodeType ? {
                            trigger: t
                        } : t, Tt),
                            de = he.onUpdate,
                            pe = he.toggleClass,
                            fe = he.id,
                            me = he.onToggle,
                            ge = he.onRefresh,
                            ye = he.scrub,
                            _e = he.trigger,
                            be = he.pin,
                            Ce = he.pinSpacing,
                            Pe = he.invalidateOnRefresh,
                            Oe = he.anticipatePin,
                            Le = he.onScrubComplete,
                            Ne = he.onSnapComplete,
                            Fe = he.once,
                            $e = he.snap,
                            Ke = he.pinReparent,
                            Qe = he.pinSpacer,
                            Je = he.containerAnimation,
                            gt = he.fastScrollEnd,
                            vt = he.preventOverlaps,
                            St = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? O : L,
                            Dt = !ye && 0 !== ye,
                            kt = R(t.scroller || V),
                            It = $.core.getCache(kt),
                            Ot = Ue(kt),
                            Lt = "fixed" === ("pinType" in t ? t.pinType : E(kt, "pinType") || Ot && "fixed"),
                            Mt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                            Nt = Dt && t.toggleActions.split(" "),
                            Ft = "markers" in t ? t.markers : Tt.markers,
                            Ut = Ot ? 0 : parseFloat(ct(kt)["border" + St.p2 + ot]) || 0,
                            Bt = this,
                            qt = t.onRefreshInit && function () {
                                return t.onRefreshInit(Bt)
                            },
                            Ht = function (e, t, i) {
                                var r = i.d,
                                    n = i.d2,
                                    s = i.a;
                                return (s = E(e, "getBoundingClientRect")) ? function () {
                                    return s()[r]
                                } : function () {
                                    return (t ? Be(n) : e["client" + n]) || 0
                                }
                            }(kt, Ot, St),
                            zt = function (e, t) {
                                return !t || ~T.indexOf(e) ? je(e) : function () {
                                    return Jt
                                }
                            }(kt, Ot),
                            Wt = 0,
                            Gt = 0,
                            Yt = 0,
                            ei = M(kt, St);
                        if (Bt._startClamp = Bt._endClamp = !1, Bt._dir = St, Oe *= 45, Bt.scroller = kt, Bt.scroll = Je ? Je.time.bind(Je) : ei, a = ei(), Bt.vars = t, i = i || t.animation, "refreshPriority" in t && (oe = 1, -9999 === t.refreshPriority && (we = Bt)), It.tweenScroll = It.tweenScroll || {
                            top: ni(kt, L),
                            left: ni(kt, O)
                        }, Bt.tweenTo = r = It.tweenScroll[St.p], Bt.scrubDuration = function (e) {
                            (H = ze(e) && e) ? q ? q.duration(e) : q = $.to(i, {
                                ease: "expo",
                                totalProgress: "+=0",
                                duration: H,
                                paused: !0,
                                onComplete: function () {
                                    return Le && Le(Bt)
                                }
                            }) : (q && q.progress(1).kill(), q = 0)
                        }, i && (i.vars.lazy = !1, i._initted && !Bt.isReverted || !1 !== i.vars.immediateRender && !1 !== t.immediateRender && i.duration() && i.render(0, !0, !0), Bt.animation = i.pause(), i.scrollTrigger = Bt, Bt.scrubDuration(ye), B = 0, fe || (fe = i.vars.id)), $e && (We($e) && !$e.push || ($e = {
                            snapTo: $e
                        }), "scrollBehavior" in G.style && $.set(Ot ? [G, W] : kt, {
                            scrollBehavior: "auto"
                        }), b.forEach((function (e) {
                            return Ve(e) && e.target === (Ot ? z.scrollingElement || W : kt) && (e.smooth = !1)
                        })), s = Ve($e.snapTo) ? $e.snapTo : "labels" === $e.snapTo ? function (e) {
                            return function (t) {
                                return $.utils.snap(ft(e), t)
                            }
                        }(i) : "labelsDirectional" === $e.snapTo ? (ae = i, function (e, t) {
                            return mt(ft(ae))(e, t.direction)
                        }) : !1 !== $e.directional ? function (e, t) {
                            return mt($e.snapTo)(e, De() - Gt < 500 ? 0 : t.direction)
                        } : $.utils.snap($e.snapTo), X = $e.duration || {
                            min: .1,
                            max: 2
                        }, X = We(X) ? Q(X.min, X.max) : Q(X, X), Y = $.delayedCall($e.delay || H / 2 || .1, (function () {
                            var e = ei(),
                                t = De() - Gt < 500,
                                n = r.tween;
                            if (!(t || Math.abs(Bt.getVelocity()) < 10) || n || te || Wt === e) Bt.isActive && Wt !== e && Y.restart(!0);
                            else {
                                var a = (e - l) / g,
                                    o = i && !Dt ? i.totalProgress() : a,
                                    c = t ? 0 : (o - j) / (De() - J) * 1e3 || 0,
                                    h = $.utils.clamp(-a, 1 - a, Ye(c / 2) * c / .185),
                                    d = a + (!1 === $e.inertia ? 0 : h),
                                    p = Q(0, 1, s(d, Bt)),
                                    f = Math.round(l + p * g),
                                    m = $e,
                                    y = m.onStart,
                                    _ = m.onInterrupt,
                                    v = m.onComplete;
                                if (e <= u && e >= l && f !== e) {
                                    if (n && !n._initted && n.data <= Ye(f - e)) return;
                                    !1 === $e.inertia && (h = p - a), r(f, {
                                        duration: X(Ye(.185 * Math.max(Ye(d - o), Ye(p - o)) / c / .05 || 0)),
                                        ease: $e.ease || "power3",
                                        data: Ye(f - e),
                                        onInterrupt: function () {
                                            return Y.restart(!0) && _ && _(Bt)
                                        },
                                        onComplete: function () {
                                            Bt.update(), Wt = ei(), B = j = i && !Dt ? i.totalProgress() : Bt.progress, Ne && Ne(Bt), v && v(Bt)
                                        }
                                    }, e, h * g, f - e - h * g), y && y(Bt, r.tween)
                                }
                            }
                        })).pause()), fe && (xt[fe] = Bt), (se = (_e = Bt.trigger = R(_e || !0 !== be && be)) && _e._gsap && _e._gsap.stRevert) && (se = se(Bt)), be = !0 === be ? _e : R(be), He(pe) && (pe = {
                            targets: _e,
                            className: pe
                        }), be && (!1 === Ce || Ce === at || (Ce = !(!Ce && be.parentNode && be.parentNode.style && "flex" === ct(be.parentNode).display) && st), Bt.pin = be, (n = $.core.getCache(be)).spacer ? y = n.pinState : (Qe && ((Qe = R(Qe)) && !Qe.nodeType && (Qe = Qe.current || Qe.nativeElement), n.spacerIsNative = !!Qe, Qe && (n.spacerState = Qt(Qe))), n.spacer = S = Qe || z.createElement("div"), S.classList.add("pin-spacer"), fe && S.classList.add("pin-spacer-" + fe), n.pinState = y = Qt(be)), !1 !== t.force3D && $.set(be, {
                            force3D: !0
                        }), Bt.spacer = S = n.spacer, U = ct(be), A = U[Ce + St.os2], D = $.getProperty(be), C = $.quickSetter(be, St.a, ut), Xt(be, S, U), v = Qt(be)), Ft) {
                            f = We(Ft) ? ht(Ft, bt) : bt, d = Et("scroller-start", fe, kt, St, f, 0), p = Et("scroller-end", fe, kt, St, f, 0, d), w = d["offset" + St.op.d2];
                            var ii = R(E(kt, "content") || kt);
                            c = this.markerStart = Et("start", fe, ii, St, f, w, 0, Je), h = this.markerEnd = Et("end", fe, ii, St, f, w, 0, Je), Je && (ne = $.quickSetter([c, h], St.a, ut)), Lt || T.length && !0 === E(kt, "fixedMarkers") || (ce = ct(ue = Ot ? G : kt).position, ue.style.position = "absolute" === ce || "fixed" === ce ? ce : "relative", $.set([d, p], {
                                force3D: !0
                            }), P = $.quickSetter(d, St.a, ut), F = $.quickSetter(p, St.a, ut))
                        }
                        if (Je) {
                            var si = Je.vars.onUpdate,
                                ai = Je.vars.onUpdateParams;
                            Je.eventCallback("onUpdate", (function () {
                                Bt.update(0, 0, 1), si && si.apply(Je, ai || [])
                            }))
                        }
                        if (Bt.previous = function () {
                            return Ct[Ct.indexOf(Bt) - 1]
                        }, Bt.next = function () {
                            return Ct[Ct.indexOf(Bt) + 1]
                        }, Bt.revert = function (e, t) {
                            if (!t) return Bt.kill(!0);
                            var r = !1 !== e || !Bt.enabled,
                                n = ee;
                            r !== Bt.isReverted && (r && (Z = Math.max(ei(), Bt.scroll.rec || 0), Yt = Bt.progress, ie = i && i.progress()), c && [c, h, d, p].forEach((function (e) {
                                return e.style.display = r ? "none" : "block"
                            })), r && (ee = Bt, Bt.update(r)), !be || Ke && Bt.isActive || (r ? function (e, t, i) {
                                Kt(i);
                                var r = e._gsap;
                                if (r.spacerIsNative) Kt(r.spacerState);
                                else if (e._gsap.swappedIn) {
                                    var n = t.parentNode;
                                    n && (n.insertBefore(e, t), n.removeChild(t))
                                }
                                e._gsap.swappedIn = !1
                            }(be, S, y) : Xt(be, S, ct(be), I)), r || Bt.update(r), ee = n, Bt.isReverted = r)
                        }, Bt.refresh = function (n, s, f, b) {
                            if (!ee && Bt.enabled || s)
                                if (be && n && xe) yt(e, "scrollEnd", Rt);
                                else {
                                    !Te && qt && qt(Bt), ee = Bt, r.tween && !f && (r.tween.kill(), r.tween = 0), q && q.pause(), Pe && i && i.revert({
                                        kill: !1
                                    }).invalidate(), Bt.isReverted || Bt.revert(!0, !0), Bt._subPinOffset = !1;
                                    var T, w, E, C, A, P, F, U, B, j, H, V, X, K = Ht(),
                                        Q = zt(),
                                        J = Je ? Je.duration() : qe(kt, St),
                                        te = g <= .01,
                                        re = 0,
                                        ne = b || 0,
                                        se = We(f) ? f.end : t.end,
                                        ae = t.endTrigger || _e,
                                        oe = We(f) ? f.start : t.start || (0 !== t.start && _e ? be ? "0 0" : "0 100%" : 0),
                                        ue = Bt.pinnedContainer = t.pinnedContainer && R(t.pinnedContainer, Bt),
                                        ce = _e && Math.max(0, Ct.indexOf(Bt)) || 0,
                                        he = ce;
                                    for (Ft && We(f) && (V = $.getProperty(d, St.p), X = $.getProperty(p, St.p)); he--;)(P = Ct[he]).end || P.refresh(0, 1) || (ee = Bt), !(F = P.pin) || F !== _e && F !== be && F !== ue || P.isReverted || (j || (j = []), j.unshift(P), P.revert(!0, !0)), P !== Ct[he] && (ce--, he--);
                                    for (Ve(oe) && (oe = oe(Bt)), oe = Ae(oe, "start", Bt), l = Zt(oe, _e, K, St, ei(), c, d, Bt, Q, Ut, Lt, J, Je, Bt._startClamp && "_startClamp") || (be ? -.001 : 0), Ve(se) && (se = se(Bt)), He(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (He(oe) ? oe.split(" ")[0] : "") + se : (re = wt(se.substr(2), K), se = He(oe) ? oe : (Je ? $.utils.mapRange(0, Je.duration(), Je.scrollTrigger.start, Je.scrollTrigger.end, l) : l) + re, ae = _e)), se = Ae(se, "end", Bt), u = Math.max(l, Zt(se || (ae ? "100% 0" : J), ae, K, St, ei() + re, h, p, Bt, Q, Ut, Lt, J, Je, Bt._endClamp && "_endClamp")) || -.001, re = 0, he = ce; he--;)(F = (P = Ct[he]).pin) && P.start - P._pinPush <= l && !Je && P.end > 0 && (T = P.end - (Bt._startClamp ? Math.max(0, P.start) : P.start), (F === _e && P.start - P._pinPush < l || F === ue) && isNaN(oe) && (re += T * (1 - P.progress)), F === be && (ne += T));
                                    if (l += re, u += re, Bt._startClamp && (Bt._startClamp += re), Bt._endClamp && !Te && (Bt._endClamp = u || -.001, u = Math.min(u, qe(kt, St))), g = u - l || (l -= .01) && .001, te && (Yt = $.utils.clamp(0, 1, $.utils.normalize(l, u, Z))), Bt._pinPush = ne, c && re && ((T = {})[St.a] = "+=" + re, ue && (T[St.p] = "-=" + ei()), $.set([c, h], T)), be) T = ct(be), C = St === L, E = ei(), x = parseFloat(D(St.a)) + ne, !J && u > 1 && (H = {
                                        style: H = (Ot ? z.scrollingElement || W : kt).style,
                                        value: H["overflow" + St.a.toUpperCase()]
                                    }, Ot && "scroll" !== ct(G)["overflow" + St.a.toUpperCase()] && (H.style["overflow" + St.a.toUpperCase()] = "scroll")), Xt(be, S, T), v = Qt(be), w = dt(be, !0), U = Lt && M(kt, C ? O : L)(), Ce && ((I = [Ce + St.os2, g + ne + ut]).t = S, (he = Ce === st ? pt(be, St) + g + ne : 0) && I.push(St.d, he + ut), Kt(I), ue && Ct.forEach((function (e) {
                                        e.pin === ue && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                                    })), Lt && ei(Z)), Lt && ((A = {
                                        top: w.top + (C ? E - l : U) + ut,
                                        left: w.left + (C ? U : E - l) + ut,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    })[Ze] = A["max" + ot] = Math.ceil(w.width) + ut, A[et] = A["max" + lt] = Math.ceil(w.height) + ut, A[at] = A[at + rt] = A[at + tt] = A[at + nt] = A[at + it] = "0", A[st] = T[st], A[st + rt] = T[st + rt], A[st + tt] = T[st + tt], A[st + nt] = T[st + nt], A[st + it] = T[st + it], _ = function (e, t, i) {
                                        for (var r, n = [], s = e.length, a = i ? 8 : 0; a < s; a += 2) r = e[a], n.push(r, r in t ? t[r] : e[a + 1]);
                                        return n.t = e.t, n
                                    }(y, A, Ke), Te && ei(0)), i ? (B = i._initted, le(1), i.render(i.duration(), !0, !0), k = D(St.a) - x + g + ne, N = Math.abs(g - k) > 1, Lt && N && _.splice(_.length - 2, 2), i.render(0, !0, !0), B || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), le(0)) : k = g, H && (H.value ? H.style["overflow" + St.a.toUpperCase()] = H.value : H.style.removeProperty("overflow-" + St.a));
                                    else if (_e && ei() && !Je)
                                        for (w = _e.parentNode; w && w !== G;) w._pinOffset && (l -= w._pinOffset, u -= w._pinOffset), w = w.parentNode;
                                    j && j.forEach((function (e) {
                                        return e.revert(!1, !0)
                                    })), Bt.start = l, Bt.end = u, a = o = Te ? Z : ei(), Je || Te || (a < Z && ei(Z), Bt.scroll.rec = 0), Bt.revert(!1, !0), Gt = De(), Y && (Wt = -1, Y.restart(!0)), ee = 0, i && Dt && (i._initted || ie) && i.progress() !== ie && i.progress(ie || 0, !0).render(i.time(), !0, !0), (te || Yt !== Bt.progress || Je) && (i && !Dt && i.totalProgress(Je && l < -.001 && !Yt ? $.utils.normalize(l, u, 0) : Yt, !0), Bt.progress = te || (a - l) / g === Yt ? 0 : Yt), be && Ce && (S._pinOffset = Math.round(Bt.progress * k)), q && q.invalidate(), isNaN(V) || (V -= $.getProperty(d, St.p), X -= $.getProperty(p, St.p), ri(d, St, V), ri(c, St, V - (b || 0)), ri(p, St, X), ri(h, St, X - (b || 0))), te && !Te && Bt.update(), !ge || Te || m || (m = !0, ge(Bt), m = !1)
                                }
                        }, Bt.getVelocity = function () {
                            return (ei() - o) / (De() - J) * 1e3 || 0
                        }, Bt.endAnimation = function () {
                            Ge(Bt.callbackAnimation), i && (q ? q.progress(1) : i.paused() ? Dt || Ge(i, Bt.direction < 0, 1) : Ge(i, i.reversed()))
                        }, Bt.labelToScroll = function (e) {
                            return i && i.labels && (l || Bt.refresh() || l) + i.labels[e] / i.duration() * g || 0
                        }, Bt.getTrailing = function (e) {
                            var t = Ct.indexOf(Bt),
                                i = Bt.direction > 0 ? Ct.slice(0, t).reverse() : Ct.slice(t + 1);
                            return (He(e) ? i.filter((function (t) {
                                return t.vars.preventOverlaps === e
                            })) : i).filter((function (e) {
                                return Bt.direction > 0 ? e.end <= l : e.start >= u
                            }))
                        }, Bt.update = function (e, t, n) {
                            if (!Je || n || e) {
                                var s, c, h, p, f, m, y, b = !0 === Te ? Z : Bt.scroll(),
                                    T = e ? 0 : (b - l) / g,
                                    w = T < 0 ? 0 : T > 1 ? 1 : T || 0,
                                    E = Bt.progress;
                                if (t && (o = a, a = Je ? ei() : b, $e && (j = B, B = i && !Dt ? i.totalProgress() : w)), Oe && !w && be && !ee && !Ee && xe && l < b + (b - o) / (De() - J) * Oe && (w = 1e-4), w !== E && Bt.enabled) {
                                    if (p = (f = (s = Bt.isActive = !!w && w < 1) !== (!!E && E < 1)) || !!w != !!E, Bt.direction = w > E ? 1 : -1, Bt.progress = w, p && !ee && (c = w && !E ? 0 : 1 === w ? 1 : 1 === E ? 2 : 3, Dt && (h = !f && "none" !== Nt[c + 1] && Nt[c + 1] || Nt[c], y = i && ("complete" === h || "reset" === h || h in i))), vt && (f || y) && (y || ye || !i) && (Ve(vt) ? vt(Bt) : Bt.getTrailing(vt).forEach((function (e) {
                                        return e.endAnimation()
                                    }))), Dt || (!q || ee || Ee ? i && i.totalProgress(w, !(!ee || !Gt && !e)) : (q._dp._time - q._start !== q._time && q.render(q._dp._time - q._start), q.resetTo ? q.resetTo("totalProgress", w, i._tTime / i._tDur) : (q.vars.totalProgress = w, q.invalidate().restart()))), be)
                                        if (e && Ce && (S.style[Ce + St.os2] = A), Lt) {
                                            if (p) {
                                                if (m = !e && w > E && u + 1 > b && b + 1 >= qe(kt, St), Ke)
                                                    if (e || !s && !m) ti(be, S);
                                                    else {
                                                        var D = dt(be, !0),
                                                            I = b - l;
                                                        ti(be, G, D.top + (St === L ? I : 0) + ut, D.left + (St === L ? 0 : I) + ut)
                                                    } Kt(s || m ? _ : v), N && w < 1 && s || C(x + (1 !== w || m ? 0 : k))
                                            }
                                        } else C(Me(x + k * w));
                                    $e && !r.tween && !ee && !Ee && Y.restart(!0), pe && (f || Fe && w && (w < 1 || !ve)) && K(pe.targets).forEach((function (e) {
                                        return e.classList[s || Fe ? "add" : "remove"](pe.className)
                                    })), de && !Dt && !e && de(Bt), p && !ee ? (Dt && (y && ("complete" === h ? i.pause().totalProgress(1) : "reset" === h ? i.restart(!0).pause() : "restart" === h ? i.restart(!0) : i[h]()), de && de(Bt)), !f && ve || (me && f && Xe(Bt, me), Mt[c] && Xe(Bt, Mt[c]), Fe && (1 === w ? Bt.kill(!1, 1) : Mt[c] = 0), f || Mt[c = 1 === w ? 1 : 3] && Xe(Bt, Mt[c])), gt && !s && Math.abs(Bt.getVelocity()) > (ze(gt) ? gt : 2500) && (Ge(Bt.callbackAnimation), q ? q.progress(1) : Ge(i, "reverse" === h ? 1 : !w, 1))) : Dt && de && !ee && de(Bt)
                                }
                                if (F) {
                                    var O = Je ? b / Je.duration() * (Je._caScrollDist || 0) : b;
                                    P(O + (d._isFlipped ? 1 : 0)), F(O)
                                }
                                ne && ne(-b / Je.duration() * (Je._caScrollDist || 0))
                            }
                        }, Bt.enable = function (t, i) {
                            Bt.enabled || (Bt.enabled = !0, yt(kt, "resize", Pt), Ot || yt(kt, "scroll", At), qt && yt(e, "refreshInit", qt), !1 !== t && (Bt.progress = Yt = 0, a = o = Wt = ei()), !1 !== i && Bt.refresh())
                        }, Bt.getTween = function (e) {
                            return e && r ? r.tween : q
                        }, Bt.setPositions = function (e, t, i, r) {
                            if (Je) {
                                var n = Je.scrollTrigger,
                                    s = Je.duration(),
                                    a = n.end - n.start;
                                e = n.start + a * e / s, t = n.start + a * t / s
                            }
                            Bt.refresh(!1, !1, {
                                start: Ie(e, i && !!Bt._startClamp),
                                end: Ie(t, i && !!Bt._endClamp)
                            }, r), Bt.update()
                        }, Bt.adjustPinSpacing = function (e) {
                            if (I && e) {
                                var t = I.indexOf(St.d) + 1;
                                I[t] = parseFloat(I[t]) + e + ut, I[1] = parseFloat(I[1]) + e + ut, Kt(I)
                            }
                        }, Bt.disable = function (t, i) {
                            if (Bt.enabled && (!1 !== t && Bt.revert(!0, !0), Bt.enabled = Bt.isActive = !1, i || q && q.pause(), Z = 0, n && (n.uncache = 1), qt && _t(e, "refreshInit", qt), Y && (Y.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !Ot)) {
                                for (var s = Ct.length; s--;)
                                    if (Ct[s].scroller === kt && Ct[s] !== Bt) return;
                                _t(kt, "resize", Pt), Ot || _t(kt, "scroll", At)
                            }
                        }, Bt.kill = function (e, r) {
                            Bt.disable(e, r), q && !r && q.kill(), fe && delete xt[fe];
                            var s = Ct.indexOf(Bt);
                            s >= 0 && Ct.splice(s, 1), s === re && Vt > 0 && re--, s = 0, Ct.forEach((function (e) {
                                return e.scroller === Bt.scroller && (s = 1)
                            })), s || Te || (Bt.scroll.rec = 0), i && (i.scrollTrigger = null, e && i.revert({
                                kill: !1
                            }), r || i.kill()), c && [c, h, d, p].forEach((function (e) {
                                return e.parentNode && e.parentNode.removeChild(e)
                            })), we === Bt && (we = 0), be && (n && (n.uncache = 1), s = 0, Ct.forEach((function (e) {
                                return e.pin === be && s++
                            })), s || (n.spacer = 0)), t.onKill && t.onKill(Bt)
                        }, Ct.push(Bt), Bt.enable(!1, !1), se && se(Bt), i && i.add && !g) {
                            var oi = Bt.update;
                            Bt.update = function () {
                                Bt.update = oi, l || u || Bt.refresh()
                            }, $.delayedCall(.01, Bt.update), g = .01, l = u = 0
                        } else Bt.refresh();
                        be && function () {
                            if (Se !== jt) {
                                var e = Se = jt;
                                requestAnimationFrame((function () {
                                    return e === jt && $t(!0)
                                }))
                            }
                        }()
                    } else this.update = this.refresh = this.kill = Re
                }, e.register = function (t) {
                    return H || ($ = t || Fe(), Ne() && window.document && e.enable(), H = ke), H
                }, e.defaults = function (e) {
                    if (e)
                        for (var t in e) Tt[t] = e[t];
                    return Tt
                }, e.disable = function (e, t) {
                    ke = 0, Ct.forEach((function (i) {
                        return i[t ? "kill" : "disable"](e)
                    })), _t(V, "wheel", At), _t(z, "scroll", At), clearInterval(Z), _t(z, "touchcancel", Re), _t(G, "touchstart", Re), gt(_t, z, "pointerdown,touchstart,mousedown", Oe), gt(_t, z, "pointerup,touchend,mouseup", Le), Y.kill(), $e(_t);
                    for (var i = 0; i < b.length; i += 3) vt(_t, b[i], b[i + 1]), vt(_t, b[i], b[i + 2])
                }, e.enable = function () {
                    if (V = window, z = document, W = z.documentElement, G = z.body, $ && (K = $.utils.toArray, Q = $.utils.clamp, me = $.core.context || Re, le = $.core.suppressOverwrites || Re, ge = V.history.scrollRestoration || "auto", Ht = V.pageYOffset, $.core.globals("ScrollTrigger", e), G)) {
                        ke = 1, (ye = document.createElement("div")).style.height = "100vh", ye.style.position = "absolute", qt(), Pe(), q.register($), e.isTouch = q.isTouch, fe = q.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), yt(V, "wheel", At), X = [V, z, W, G], $.matchMedia ? (e.matchMedia = function (e) {
                            var t, i = $.matchMedia();
                            for (t in e) i.add(t, e[t]);
                            return i
                        }, $.addEventListener("matchMediaInit", (function () {
                            return Ut()
                        })), $.addEventListener("matchMediaRevert", (function () {
                            return Ft()
                        })), $.addEventListener("matchMedia", (function () {
                            $t(0, 1), Mt("matchMedia")
                        })), $.matchMedia("(orientation: portrait)", (function () {
                            return It(), It
                        }))) : console.warn("Requires GSAP 3.11.0 or later"), It(), yt(z, "scroll", At);
                        var t, i, r = G.style,
                            n = r.borderTopStyle,
                            s = $.core.Animation.prototype;
                        for (s.revert || Object.defineProperty(s, "revert", {
                            value: function () {
                                return this.time(-.01, !0)
                            }
                        }), r.borderTopStyle = "solid", t = dt(G), L.m = Math.round(t.top + L.sc()) || 0, O.m = Math.round(t.left + O.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), Z = setInterval(kt, 250), $.delayedCall(.5, (function () {
                            return Ee = 0
                        })), yt(z, "touchcancel", Re), yt(G, "touchstart", Re), gt(yt, z, "pointerdown,touchstart,mousedown", Oe), gt(yt, z, "pointerup,touchend,mouseup", Le), ie = $.utils.checkPrefix("transform"), Gt.push(ie), H = De(), Y = $.delayedCall(.2, $t).pause(), ae = [z, "visibilitychange", function () {
                            var e = V.innerWidth,
                                t = V.innerHeight;
                            z.hidden ? (ne = e, se = t) : ne === e && se === t || Pt()
                        }, z, "DOMContentLoaded", $t, V, "load", $t, V, "resize", Pt], $e(yt), Ct.forEach((function (e) {
                            return e.enable(0, 1)
                        })), i = 0; i < b.length; i += 3) vt(_t, b[i], b[i + 1]), vt(_t, b[i], b[i + 2])
                    }
                }, e.config = function (t) {
                    "limitCallbacks" in t && (ve = !!t.limitCallbacks);
                    var i = t.syncInterval;
                    i && clearInterval(Z) || (Z = i) && setInterval(kt, i), "ignoreMobileResize" in t && (he = 1 === e.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && ($e(_t) || $e(yt, t.autoRefreshEvents || "none"), ue = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
                }, e.scrollerProxy = function (e, t) {
                    var i = R(e),
                        r = b.indexOf(i),
                        n = Ue(i);
                    ~r && b.splice(r, n ? 6 : 2), t && (n ? T.unshift(V, t, G, t, W, t) : T.unshift(i, t))
                }, e.clearMatchMedia = function (e) {
                    Ct.forEach((function (t) {
                        return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
                    }))
                }, e.isInViewport = function (e, t, i) {
                    var r = (He(e) ? R(e) : e).getBoundingClientRect(),
                        n = r[i ? Ze : et] * t || 0;
                    return i ? r.right - n > 0 && r.left + n < V.innerWidth : r.bottom - n > 0 && r.top + n < V.innerHeight
                }, e.positionInViewport = function (e, t, i) {
                    He(e) && (e = R(e));
                    var r = e.getBoundingClientRect(),
                        n = r[i ? Ze : et],
                        s = null == t ? n / 2 : t in St ? St[t] * n : ~t.indexOf("%") ? parseFloat(t) * n / 100 : parseFloat(t) || 0;
                    return i ? (r.left + s) / V.innerWidth : (r.top + s) / V.innerHeight
                }, e.killAll = function (e) {
                    if (Ct.slice(0).forEach((function (e) {
                        return "ScrollSmoother" !== e.vars.id && e.kill()
                    })), !0 !== e) {
                        var t = Ot.killAll || [];
                        Ot = {}, t.forEach((function (e) {
                            return e()
                        }))
                    }
                }, e
            }();
        si.version = "3.12.2", si.saveStyles = function (e) {
            return e ? K(e).forEach((function (e) {
                if (e && e.style) {
                    var t = Nt.indexOf(e);
                    t >= 0 && Nt.splice(t, 5), Nt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), $.core.getCache(e), me())
                }
            })) : Nt
        }, si.revert = function (e, t) {
            return Ut(!e, t)
        }, si.create = function (e, t) {
            return new si(e, t)
        }, si.refresh = function (e) {
            return e ? Pt() : (H || si.register()) && $t(!0)
        }, si.update = function (e) {
            return ++b.cache && zt(!0 === e ? 2 : 0)
        }, si.clearScrollMemory = Bt, si.maxScroll = function (e, t) {
            return qe(e, t ? O : L)
        }, si.getScrollFunc = function (e, t) {
            return M(R(e), t ? O : L)
        }, si.getById = function (e) {
            return xt[e]
        }, si.getAll = function () {
            return Ct.filter((function (e) {
                return "ScrollSmoother" !== e.vars.id
            }))
        }, si.isScrolling = function () {
            return !!xe
        }, si.snapDirectional = mt, si.addEventListener = function (e, t) {
            var i = Ot[e] || (Ot[e] = []);
            ~i.indexOf(t) || i.push(t)
        }, si.removeEventListener = function (e, t) {
            var i = Ot[e],
                r = i && i.indexOf(t);
            r >= 0 && i.splice(r, 1)
        }, si.batch = function (e, t) {
            var i, r = [],
                n = {},
                s = t.interval || .016,
                a = t.batchMax || 1e9,
                o = function (e, t) {
                    var i = [],
                        r = [],
                        n = $.delayedCall(s, (function () {
                            t(i, r), i = [], r = []
                        })).pause();
                    return function (e) {
                        i.length || n.restart(!0), i.push(e.trigger), r.push(e), a <= i.length && n.progress(1)
                    }
                };
            for (i in t) n[i] = "on" === i.substr(0, 2) && Ve(t[i]) && "onRefreshInit" !== i ? o(0, t[i]) : t[i];
            return Ve(a) && (a = a(), yt(si, "refresh", (function () {
                return a = t.batchMax()
            }))), K(e).forEach((function (e) {
                var t = {};
                for (i in n) t[i] = n[i];
                t.trigger = e, r.push(si.create(t))
            })), r
        };
        var ai, oi = function (e, t, i, r) {
            return t > r ? e(r) : t < 0 && e(0), i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
        },
            li = function e(t, i) {
                !0 === i ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (q.isTouch ? " pinch-zoom" : "") : "none", t === W && e(G, i)
            },
            ui = {
                auto: 1,
                scroll: 1
            },
            ci = function (e) {
                var t, i = e.event,
                    r = e.target,
                    n = e.axis,
                    s = (i.changedTouches ? i.changedTouches[0] : i).target,
                    a = s._gsap || $.core.getCache(s),
                    o = De();
                if (!a._isScrollT || o - a._isScrollT > 2e3) {
                    for (; s && s !== G && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !ui[(t = ct(s)).overflowY] && !ui[t.overflowX]);) s = s.parentNode;
                    a._isScroll = s && s !== r && !Ue(s) && (ui[(t = ct(s)).overflowY] || ui[t.overflowX]), a._isScrollT = o
                } (a._isScroll || "x" === n) && (i.stopPropagation(), i._gsapAllow = !0)
            },
            hi = function (e, t, i, r) {
                return q.create({
                    target: e,
                    capture: !0,
                    debounce: !1,
                    lockAxis: !0,
                    type: t,
                    onWheel: r = r && ci,
                    onPress: r,
                    onDrag: r,
                    onScroll: r,
                    onEnable: function () {
                        return i && yt(z, q.eventTypes[0], pi, !1, !0)
                    },
                    onDisable: function () {
                        return _t(z, q.eventTypes[0], pi, !0)
                    }
                })
            },
            di = /(input|label|select|textarea)/i,
            pi = function (e) {
                var t = di.test(e.target.tagName);
                (t || ai) && (e._gsapAllow = !0, ai = t)
            },
            fi = function (e) {
                We(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
                var t, i, r, n, s, a, o, l, u = e,
                    c = u.normalizeScrollX,
                    h = u.momentum,
                    d = u.allowNestedScroll,
                    p = u.onRelease,
                    f = R(e.target) || W,
                    m = $.core.globals().ScrollSmoother,
                    g = m && m.get(),
                    y = fe && (e.content && R(e.content) || g && !1 !== e.content && !g.smooth() && g.content()),
                    _ = M(f, L),
                    v = M(f, O),
                    T = 1,
                    S = (q.isTouch && V.visualViewport ? V.visualViewport.scale * V.visualViewport.width : V.outerWidth) / V.innerWidth,
                    w = 0,
                    E = Ve(h) ? function () {
                        return h(t)
                    } : function () {
                        return h || 2.8
                    },
                    D = hi(f, e.type, !0, d),
                    C = function () {
                        return n = !1
                    },
                    x = Re,
                    k = Re,
                    A = function () {
                        i = qe(f, L), k = Q(fe ? 1 : 0, i), c && (x = Q(0, qe(f, O))), r = jt
                    },
                    I = function () {
                        y._gsap.y = Me(parseFloat(y._gsap.y) + _.offset) + "px", y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(y._gsap.y) + ", 0, 1)", _.offset = _.cacheID = 0
                    },
                    P = function () {
                        A(), s.isActive() && s.vars.scrollY > i && (_() > i ? s.progress(1) && _(i) : s.resetTo("scrollY", i))
                    };
                return y && $.set(y, {
                    y: "+=0"
                }), e.ignoreCheck = function (e) {
                    return fe && "touchmove" === e.type && function () {
                        if (n) {
                            requestAnimationFrame(C);
                            var e = Me(t.deltaY / 2),
                                i = k(_.v - e);
                            if (y && i !== _.v + _.offset) {
                                _.offset = i - _.v;
                                var r = Me((parseFloat(y && y._gsap.y) || 0) - _.offset);
                                y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", y._gsap.y = r + "px", _.cacheID = b.cache, zt()
                            }
                            return !0
                        }
                        _.offset && I(), n = !0
                    }() || T > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
                }, e.onPress = function () {
                    n = !1;
                    var e = T;
                    T = Me((V.visualViewport && V.visualViewport.scale || 1) / S), s.pause(), e !== T && li(f, T > 1.01 || !c && "x"), a = v(), o = _(), A(), r = jt
                }, e.onRelease = e.onGestureStart = function (e, t) {
                    if (_.offset && I(), t) {
                        b.cache++;
                        var r, n, a = E();
                        c && (n = (r = v()) + .05 * a * -e.velocityX / .227, a *= oi(v, r, n, qe(f, O)), s.vars.scrollX = x(n)), n = (r = _()) + .05 * a * -e.velocityY / .227, a *= oi(_, r, n, qe(f, L)), s.vars.scrollY = k(n), s.invalidate().duration(a).play(.01), (fe && s.vars.scrollY >= i || r >= i - 1) && $.to({}, {
                            onUpdate: P,
                            duration: a
                        })
                    } else l.restart(!0);
                    p && p(e)
                }, e.onWheel = function () {
                    s._ts && s.pause(), De() - w > 1e3 && (r = 0, w = De())
                }, e.onChange = function (e, t, i, n, s) {
                    if (jt !== r && A(), t && c && v(x(n[2] === t ? a + (e.startX - e.x) : v() + t - n[1])), i) {
                        _.offset && I();
                        var l = s[2] === i,
                            u = l ? o + e.startY - e.y : _() + i - s[1],
                            h = k(u);
                        l && u !== h && (o += h - u), _(h)
                    } (i || t) && zt()
                }, e.onEnable = function () {
                    li(f, !c && "x"), si.addEventListener("refresh", P), yt(V, "resize", P), _.smooth && (_.target.style.scrollBehavior = "auto", _.smooth = v.smooth = !1), D.enable()
                }, e.onDisable = function () {
                    li(f, !0), _t(V, "resize", P), si.removeEventListener("refresh", P), D.kill()
                }, e.lockAxis = !1 !== e.lockAxis, (t = new q(e)).iOS = fe, fe && !_() && _(1), fe && $.ticker.add(Re), l = t._dc, s = $.to(t, {
                    ease: "power4",
                    paused: !0,
                    scrollX: c ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    modifiers: {
                        scrollY: ii(_, _(), (function () {
                            return s.pause()
                        }))
                    },
                    onUpdate: zt,
                    onComplete: l.vars.onComplete
                }), t
            };
        si.sort = function (e) {
            return Ct.sort(e || function (e, t) {
                return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
            })
        }, si.observe = function (e) {
            return new q(e)
        }, si.normalizeScroll = function (e) {
            if (void 0 === e) return ce;
            if (!0 === e && ce) return ce.enable();
            if (!1 === e) return ce && ce.kill();
            var t = e instanceof q ? e : fi(e);
            return ce && ce.target === t.target && ce.kill(), Ue(t.target) && (ce = t), t
        }, si.core = {
            _getVelocityProp: N,
            _inputObserver: hi,
            _scrollers: b,
            _proxies: T,
            bridge: {
                ss: function () {
                    xe || Mt("scrollStart"), xe = De()
                },
                ref: function () {
                    return ee
                }
            }
        }, Fe() && $.registerPlugin(si)
    }, (e, t, i) => {
        i.d(t, {
            a: () => b
        });
        var r, n, s, a, o, l, u, c, h = function () {
            return "undefined" != typeof window
        },
            d = function () {
                return r || h() && (r = window.gsap) && r.registerPlugin && r
            },
            p = function (e) {
                return "string" == typeof e
            },
            f = function (e) {
                return "function" == typeof e
            },
            m = function (e, t) {
                var i = "x" === t ? "Width" : "Height",
                    r = "scroll" + i,
                    n = "client" + i;
                return e === s || e === a || e === o ? Math.max(a[r], o[r]) - (s["inner" + i] || a[n] || o[n]) : e[r] - e["offset" + i]
            },
            g = function (e, t) {
                var i = "scroll" + ("x" === t ? "Left" : "Top");
                return e === s && (null != e.pageXOffset ? i = "page" + t.toUpperCase() + "Offset" : e = null != a[i] ? a : o),
                    function () {
                        return e[i]
                    }
            },
            y = function (e, t) {
                if (!(e = l(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
                    x: 0,
                    y: 0
                };
                var i = e.getBoundingClientRect(),
                    r = !t || t === s || t === o,
                    n = r ? {
                        top: a.clientTop - (s.pageYOffset || a.scrollTop || o.scrollTop || 0),
                        left: a.clientLeft - (s.pageXOffset || a.scrollLeft || o.scrollLeft || 0)
                    } : t.getBoundingClientRect(),
                    u = {
                        x: i.left - n.left,
                        y: i.top - n.top
                    };
                return !r && t && (u.x += g(t, "x")(), u.y += g(t, "y")()), u
            },
            _ = function (e, t, i, r, n) {
                return isNaN(e) || "object" == typeof e ? p(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - n : "max" === e ? m(t, i) - n : Math.min(m(t, i), y(e, t)[i] - n) : parseFloat(e) - n
            },
            v = function () {
                r = d(), h() && r && "undefined" != typeof document && document.body && (s = window, o = document.body, a = document.documentElement, l = r.utils.toArray, r.config({
                    autoKillThreshold: 7
                }), u = r.config(), n = 1)
            },
            b = {
                version: "3.12.2",
                name: "scrollTo",
                rawVars: 1,
                register: function (e) {
                    r = e, v()
                },
                init: function (e, t, i, a, o) {
                    n || v();
                    var l = this,
                        u = r.getProperty(e, "scrollSnapType");
                    l.isWin = e === s, l.target = e, l.tween = i, t = function (e, t, i, r) {
                        if (f(e) && (e = e(t, i, r)), "object" != typeof e) return p(e) && "max" !== e && "=" !== e.charAt(1) ? {
                            x: e,
                            y: e
                        } : {
                            y: e
                        };
                        if (e.nodeType) return {
                            y: e,
                            x: e
                        };
                        var n, s = {};
                        for (n in e) s[n] = "onAutoKill" !== n && f(e[n]) ? e[n](t, i, r) : e[n];
                        return s
                    }(t, a, e, o), l.vars = t, l.autoKill = !!t.autoKill, l.getX = g(e, "x"), l.getY = g(e, "y"), l.x = l.xPrev = l.getX(), l.y = l.yPrev = l.getY(), c || (c = r.core.globals().ScrollTrigger), "smooth" === r.getProperty(e, "scrollBehavior") && r.set(e, {
                        scrollBehavior: "auto"
                    }), u && "none" !== u && (l.snap = 1, l.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (l.add(l, "x", l.x, _(t.x, e, "x", l.x, t.offsetX || 0), a, o), l._props.push("scrollTo_x")) : l.skipX = 1, null != t.y ? (l.add(l, "y", l.y, _(t.y, e, "y", l.y, t.offsetY || 0), a, o), l._props.push("scrollTo_y")) : l.skipY = 1
                },
                render: function (e, t) {
                    for (var i, r, n, a, o, l = t._pt, h = t.target, d = t.tween, p = t.autoKill, f = t.xPrev, g = t.yPrev, y = t.isWin, _ = t.snap, v = t.snapInline; l;) l.r(e, l.d), l = l._next;
                    i = y || !t.skipX ? t.getX() : f, n = (r = y || !t.skipY ? t.getY() : g) - g, a = i - f, o = u.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), p && (!t.skipX && (a > o || a < -o) && i < m(h, "x") && (t.skipX = 1), !t.skipY && (n > o || n < -o) && r < m(h, "y") && (t.skipY = 1), t.skipX && t.skipY && (d.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(d, t.vars.onAutoKillParams || []))), y ? s.scrollTo(t.skipX ? i : t.x, t.skipY ? r : t.y) : (t.skipY || (h.scrollTop = t.y), t.skipX || (h.scrollLeft = t.x)), !_ || 1 !== e && 0 !== e || (r = h.scrollTop, i = h.scrollLeft, v ? h.style.scrollSnapType = v : h.style.removeProperty("scroll-snap-type"), h.scrollTop = r + 1, h.scrollLeft = i + 1, h.scrollTop = r, h.scrollLeft = i), t.xPrev = t.x, t.yPrev = t.y, c && c.update()
                },
                kill: function (e) {
                    var t = "scrollTo" === e;
                    (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
                }
            };
        b.max = m, b.getOffset = y, b.buildGetter = g, d() && r.registerPlugin(b)
    }]
]);