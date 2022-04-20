/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-scrollsnappoints-webp-webpalpha-webpanimation-webplossless_webp_lossless-setclasses !*/
! function(e, n, t) {
    function A(e, n) { return typeof e === n }

    function o() {
        var e, n, t, o, r, i, a;
        for (var s in b)
            if (b.hasOwnProperty(s)) {
                if (e = [], n = b[s], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = A(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++) i = e[r], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function r(e) {
        var n = C.className,
            t = Modernizr._config.classPrefix || "";
        if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var A = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(A, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? C.className.baseVal = n : C.className = n)
    }

    function i(e, n) {
        if ("object" == typeof e)
            for (var t in e) Q(e, t) && i(t, e[t]);
        else {
            e = e.toLowerCase();
            var A = e.split("."),
                o = Modernizr[A[0]];
            if (2 == A.length && (o = o[A[1]]), "undefined" != typeof o) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == A.length ? Modernizr[A[0]] = n : (!Modernizr[A[0]] || Modernizr[A[0]] instanceof Boolean || (Modernizr[A[0]] = new Boolean(Modernizr[A[0]])), Modernizr[A[0]][A[1]] = n), r([(n && 0 != n ? "" : "no-") + A.join("-")]), Modernizr._trigger(e, n)
        }
        return Modernizr
    }

    function a(e, n) { return !!~("" + e).indexOf(n) }

    function s() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

    function l(e) { return e.replace(/([a-z])-([a-z])/g, function(e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") }

    function u(e, n) { return function() { return e.apply(n, arguments) } }

    function f(e, n, t) {
        var o;
        for (var r in e)
            if (e[r] in n) return t === !1 ? e[r] : (o = n[e[r]], A(o, "function") ? u(o, t || n) : o);
        return !1
    }

    function p(n, t, A) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var r = e.console;
            if (null !== o) A && (o = o.getPropertyValue(A));
            else if (r) {
                var i = r.error ? "error" : "log";
                r[i].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[A];
        return o
    }

    function c(e) { return e.replace(/([A-Z])/g, function(e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function d() { var e = n.body; return e || (e = s(_ ? "svg" : "body"), e.fake = !0), e }

    function m(e, t, A, o) {
        var r, i, a, l, u = "modernizr",
            f = s("div"),
            p = d();
        if (parseInt(A, 10))
            for (; A--;) a = s("div"), a.id = o ? o[A] : u + (A + 1), f.appendChild(a);
        return r = s("style"), r.type = "text/css", r.id = "s" + u, (p.fake ? p : f).appendChild(r), p.appendChild(f), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), i = t(f, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = l, C.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function g(n, A) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(c(n[o]), A)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) { for (var r = []; o--;) r.push("(" + c(n[o]) + ":" + A + ")"); return r = r.join(" or "), m("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == p(e, null, "position") }) }
        return t
    }

    function h(e, n, o, r) {
        function i() { f && (delete x.style, delete x.modElem) }
        if (r = A(r, "undefined") ? !1 : r, !A(o, "undefined")) { var u = g(e, o); if (!A(u, "undefined")) return u }
        for (var f, p, c, d, m, h = ["modernizr", "tspan", "samp"]; !x.style && h.length;) f = !0, x.modElem = s(h.shift()), x.style = x.modElem.style;
        for (c = e.length, p = 0; c > p; p++)
            if (d = e[p], m = x.style[d], a(d, "-") && (d = l(d)), x.style[d] !== t) { if (r || A(o, "undefined")) return i(), "pfx" == n ? d : !0; try { x.style[d] = o } catch (w) {} if (x.style[d] != m) return i(), "pfx" == n ? d : !0 }
        return i(), !1
    }

    function w(e, n, t, o, r) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + R.join(i + " ") + i).split(" ");
        return A(n, "string") || A(n, "undefined") ? h(a, n, o, r) : (a = (e + " " + U.join(i + " ") + i).split(" "), f(a, n, t))
    }

    function v(e, n, A) { return w(e, t, t, n, A) }
    var y = [],
        b = [],
        B = {
            _version: "3.6.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() { n(t[e]) }, 0)
            },
            addTest: function(e, n, t) { b.push({ name: e, fn: n, options: t }) },
            addAsyncTest: function(e) { b.push({ name: null, fn: e }) }
        },
        Modernizr = function() {};
    Modernizr.prototype = B, Modernizr = new Modernizr;
    var Q, C = n.documentElement,
        _ = "svg" === C.nodeName.toLowerCase();
    ! function() {
        var e = {}.hasOwnProperty;
        Q = A(e, "undefined") || A(e.call, "undefined") ? function(e, n) { return n in e && A(e.constructor.prototype[n], "undefined") } : function(n, t) { return e.call(n, t) }
    }(), B._l = {}, B.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, B._trigger = function(e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function() { var e, A; for (e = 0; e < t.length; e++)(A = t[e])(n) }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() { B.addTest = i }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onerror = function() { i("webpalpha", !1, { aliases: ["webp-alpha"] }) }, e.onload = function() { i("webpalpha", 1 == e.width, { aliases: ["webp-alpha"] }) }, e.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
    }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onerror = function() { i("webpanimation", !1, { aliases: ["webp-animation"] }) }, e.onload = function() { i("webpanimation", 1 == e.width, { aliases: ["webp-animation"] }) }, e.src = "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onerror = function() { i("webplossless", !1, { aliases: ["webp-lossless"] }) }, e.onload = function() { i("webplossless", 1 == e.width, { aliases: ["webp-lossless"] }) }, e.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    }), Modernizr.addAsyncTest(function() {
        function e(e, n, t) {
            function A(n) {
                var A = n && "load" === n.type ? 1 == o.width : !1,
                    r = "webp" === e;
                i(e, r && A ? new Boolean(A) : A), t && t(n)
            }
            var o = new Image;
            o.onerror = A, o.onload = A, o.src = n
        }
        var n = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }],
            t = n.shift();
        e(t.name, t.uri, function(t) {
            if (t && "load" === t.type)
                for (var A = 0; A < n.length; A++) e(n[A].name, n[A].uri)
        })
    });
    var S = "Moz O ms Webkit",
        U = B._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    B._domPrefixes = U;
    var R = B._config.usePrefixes ? S.split(" ") : [];
    B._cssomPrefixes = R;
    var T = { elem: s("modernizr") };
    Modernizr._q.push(function() { delete T.elem });
    var x = { style: T.elem.style };
    Modernizr._q.unshift(function() { delete x.style }), B.testAllProps = w, B.testAllProps = v, Modernizr.addTest("scrollsnappoints", v("scrollSnapType")), o(), r(y), delete B.addTest, delete B.addAsyncTest;
    for (var D = 0; D < Modernizr._q.length; D++) Modernizr._q[D]();
    e.Modernizr = Modernizr
}(window, document);