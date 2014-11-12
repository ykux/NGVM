/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery-2.0.3.min.map
 */
(function(e, undefined) {
    var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], p = "2.0.3", f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, x = function(e, n) {
        return new x.fn.init(e, n, t)
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function(e, t) {
        return t.toUpperCase()
    }, S = function() {
        o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), x.ready()
    };
    x.fn = x.prototype = {jquery: p, constructor: x, init: function(e, t, n) {
        var r, i;
        if( !e )return this;
        if( "string" == typeof e ) {
            if( r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t )return!t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if( r[1] ) {
                if( t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t) )for( r in t )x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
    }, selector                 : "", length: 0, toArray: function() {
        return d.call(this)
    }, get                      : function(e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack                : function(e) {
        var t = x.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    }, each                     : function(e, t) {
        return x.each(this, e, t)
    }, ready                    : function(e) {
        return x.ready.promise().done(e), this
    }, slice                    : function() {
        return this.pushStack(d.apply(this, arguments))
    }, first                    : function() {
        return this.eq(0)
    }, last                     : function() {
        return this.eq(-1)
    }, eq                       : function(e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map                      : function(e) {
        return this.pushStack(x.map(this, function(t, n) {
            return e.call(t, n, t)
        }))
    }, end                      : function() {
        return this.prevObject || this.constructor(null)
    }, push                     : h, sort: [].sort, splice: [].splice}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for( "boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++ )if( null != (e = arguments[a]) )for( t in e )n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
        return s
    }, x.extend({expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noConflict: function(t) {
        return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x
    }, isReady          : !1, readyWait: 1, holdReady: function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }, ready            : function(e) {
        (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")))
    }, isFunction       : function(e) {
        return"function" === x.type(e)
    }, isArray          : Array.isArray, isWindow: function(e) {
        return null != e && e === e.window
    }, isNumeric        : function(e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type             : function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
    }, isPlainObject    : function(e) {
        if( "object" !== x.type(e) || e.nodeType || x.isWindow(e) )return!1;
        try {
            if( e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf") )return!1
        } catch( t ) {
            return!1
        }
        return!0
    }, isEmptyObject    : function(e) {
        var t;
        for( t in e )return!1;
        return!0
    }, error            : function(e) {
        throw Error(e)
    }, parseHTML        : function(e, t, n) {
        if( !e || "string" != typeof e )return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || o;
        var r = C.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
    }, parseJSON        : JSON.parse, parseXML: function(e) {
        var t, n;
        if( !e || "string" != typeof e )return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch( r ) {
            t = undefined
        }
        return(!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), t
    }, noop             : function() {
    }, globalEval       : function(e) {
        var t, n = eval;
        e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    }, camelCase        : function(e) {
        return e.replace(k, "ms-").replace(N, E)
    }, nodeName         : function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each             : function(e, t, n) {
        var r, i = 0, o = e.length, s = j(e);
        if( n ) {
            if( s ) {
                for( ; o > i; i++ )if( r = t.apply(e[i], n), r === !1 )break
            } else for( i in e )if( r = t.apply(e[i], n), r === !1 )break
        } else if( s ) {
            for( ; o > i; i++ )if( r = t.call(e[i], i, e[i]), r === !1 )break
        } else for( i in e )if( r = t.call(e[i], i, e[i]), r === !1 )break;
        return e
    }, trim             : function(e) {
        return null == e ? "" : v.call(e)
    }, makeArray        : function(e, t) {
        var n = t || [];
        return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
    }, inArray          : function(e, t, n) {
        return null == t ? -1 : g.call(t, e, n)
    }, merge            : function(e, t) {
        var n = t.length, r = e.length, i = 0;
        if( "number" == typeof n )for( ; n > i; i++ )e[r++] = t[i]; else while( t[i] !== undefined )e[r++] = t[i++];
        return e.length = r, e
    }, grep             : function(e, t, n) {
        var r, i = [], o = 0, s = e.length;
        for( n = !!n; s > o; o++ )r = !!t(e[o], o), n !== r && i.push(e[o]);
        return i
    }, map              : function(e, t, n) {
        var r, i = 0, o = e.length, s = j(e), a = [];
        if( s )for( ; o > i; i++ )r = t(e[i], i, n), null != r && (a[a.length] = r); else for( i in e )r = t(e[i], i, n), null != r && (a[a.length] = r);
        return f.apply([], a)
    }, guid             : 1, proxy: function(e, t) {
        var n, r, i;
        return"string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(d.call(arguments)))
        }, i.guid = e.guid = e.guid || x.guid++, i) : undefined
    }, access           : function(e, t, n, r, i, o, s) {
        var a = 0, u = e.length, l = null == n;
        if( "object" === x.type(n) ) {
            i = !0;
            for( a in n )x.access(e, t, a, n[a], !0, o, s)
        } else if( r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(x(e), n)
        })), t) )for( ; u > a; a++ )t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, now              : Date.now, swap: function(e, t, n, r) {
        var i, o, s = {};
        for( o in t )s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for( o in t )e.style[o] = s[o];
        return i
    }}), x.ready.promise = function(t) {
        return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))), n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function j(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    t = x(o), function(e, undefined) {
        var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = "sizzle" + -new Date, b = e.document, w = 0, T = 0, C = st(), k = st(), N = st(), E = !1, S = function(e, t) {
            return e === t ? (E = !0, 0) : 0
        }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], q = L.pop, H = L.push, O = L.push, F = L.slice, P = L.indexOf || function(e) {
            var t = 0, n = this.length;
            for( ; n > t; t++ )if( this[t] === e )return t;
            return-1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", $ = W.replace("w", "w#"), B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]", I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = RegExp("^" + M + "*," + M + "*"), X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = RegExp(M + "*[+~]"), Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"), V = RegExp(I), G = RegExp("^" + $ + "$"), J = {ID: RegExp("^#(" + W + ")"), CLASS: RegExp("^\\.(" + W + ")"), TAG: RegExp("^(" + W.replace("w", "w*") + ")"), ATTR: RegExp("^" + B), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: RegExp("^(?:" + R + ")$", "i"), needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")}, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g, nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), rt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType
        } catch( it ) {
            O = {apply: L.length ? function(e, t) {
                H.apply(e, F.call(t))
            } : function(e, t) {
                var n = e.length, r = 0;
                while( e[n++] = t[r++] );
                e.length = n - 1
            }}
        }
        function ot(e, t, r, i) {
            var o, s, a, u, l, f, g, m, x, w;
            if( (t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e )return r;
            if( 1 !== (u = t.nodeType) && 9 !== u )return[];
            if( h && !i ) {
                if( o = K.exec(e) )if( a = o[1] ) {
                    if( 9 === u ) {
                        if( s = t.getElementById(a), !s || !s.parentNode )return r;
                        if( s.id === a )return r.push(s), r
                    } else if( t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a )return r.push(s), r
                } else {
                    if( o[2] )return O.apply(r, t.getElementsByTagName(e)), r;
                    if( (a = o[3]) && n.getElementsByClassName && t.getElementsByClassName )return O.apply(r, t.getElementsByClassName(a)), r
                }
                if( n.qsa && (!d || !d.test(e)) ) {
                    if( m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase() ) {
                        f = gt(e), (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = f.length;
                        while( l-- )f[l] = m + mt(f[l]);
                        x = U.test(e) && t.parentNode || t, w = f.join(",")
                    }
                    if( w )try {
                        return O.apply(r, x.querySelectorAll(w)), r
                    } catch( T ) {
                    } finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, r, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function at(e) {
            return e[v] = !0, e
        }

        function ut(e) {
            var t = p.createElement("div");
            try {
                return!!e(t)
            } catch( n ) {
                return!1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"), r = e.length;
            while( r-- )i.attrHandle[n[r]] = t
        }

        function ct(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if( r )return r;
            if( n )while( n = n.nextSibling )if( n === t )return-1;
            return e ? 1 : -1
        }

        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return"input" === n && t.type === e
            }
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return at(function(t) {
                return t = +t, at(function(n, r) {
                    var i, o = e([], n.length, t), s = o.length;
                    while( s-- )n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, n = ot.support = {}, c = ot.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : b, r = t.defaultView;
            return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
                c()
            }), n.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ut(function(e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), n.getById = ut(function(e) {
                return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length
            }), n.getById ? (i.find.ID = function(e, t) {
                if( typeof t.getElementById !== j && h ) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete i.find.ID, i.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if( "*" === e ) {
                    while( n = o[i++] )1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined
            }, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ut(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", I)
            }), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if( t )while( t = t.parentNode )if( t === e )return!0;
                return!1
            }, S = f.compareDocumentPosition ? function(e, r) {
                if( e === r )return E = !0, 0;
                var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
                return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function(e, n) {
                var r, i = 0, o = e.parentNode, s = n.parentNode, a = [e], u = [n];
                if( e === n )return E = !0, 0;
                if( !o || !s )return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
                if( o === s )return ct(e, n);
                r = e;
                while( r = r.parentNode )a.unshift(r);
                r = n;
                while( r = r.parentNode )u.unshift(r);
                while( a[i] === u[i] )i++;
                return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
            }, t) : p
        }, ot.matches = function(e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function(e, t) {
            if( (e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t)) )try {
                var r = m.call(e, t);
                if( r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType )return r
            } catch( i ) {
            }
            return ot(t, p, null, [e]).length > 0
        }, ot.contains = function(e, t) {
            return(e.ownerDocument || e) !== p && c(e), y(e, t)
        }, ot.attr = function(e, t) {
            (e.ownerDocument || e) !== p && c(e);
            var r = i.attrHandle[t.toLowerCase()], o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
            return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o
        }, ot.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if( E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E ) {
                while( t = e[o++] )t === e[o] && (i = r.push(o));
                while( i-- )e.splice(r[i], 1)
            }
            return e
        }, o = ot.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if( i ) {
                if( 1 === i || 9 === i || 11 === i ) {
                    if( "string" == typeof e.textContent )return e.textContent;
                    for( e = e.firstChild; e; e = e.nextSibling )n += o(e)
                } else if( 3 === i || 4 === i )return e.nodeValue
            } else for( ; t = e[r]; r++ )n += o(t);
            return n
        }, i = ot.selectors = {cacheLength: 50, createPseudo: at, match: J, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(e) {
            return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD                                                                                                                                                                                                                                                          : function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
        }, PSEUDO                                                                                                                                                                                                                                                         : function(e) {
            var t, n = !e[5] && e[2];
            return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }}, filter                        : {TAG: function(e) {
            var t = e.replace(nt, rt).toLowerCase();
            return"*" === e ? function() {
                return!0
            } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
            }
        }, CLASS                                : function(e) {
            var t = C[e + " "];
            return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function(e) {
                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
            })
        }, ATTR                                 : function(e, t, n) {
            return function(r) {
                var i = ot.attr(r, e);
                return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
            }
        }, CHILD                                : function(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
            return 1 === r && 0 === i ? function(e) {
                return!!e.parentNode
            } : function(t, n, u) {
                var l, c, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), x = !u && !a;
                if( m ) {
                    if( o ) {
                        while( g ) {
                            p = t;
                            while( p = p[g] )if( a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType )return!1;
                            d = g = "only" === e && !d && "nextSibling"
                        }
                        return!0
                    }
                    if( d = [s ? m.firstChild : m.lastChild], s && x ) {
                        c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];
                        while( p = ++h && p && p[g] || (f = h = 0) || d.pop() )if( 1 === p.nodeType && ++f && p === t ) {
                            c[e] = [w, h, f];
                            break
                        }
                    } else if( x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w )f = l[1]; else while( p = ++h && p && p[g] || (f = h = 0) || d.pop() )if( (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t) )break;
                    return f -= i, f === r || 0 === f % r && f / r >= 0
                }
            }
        }, PSEUDO                               : function(e, t) {
            var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
            return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                var i, o = r(e, t), s = o.length;
                while( s-- )i = P.call(e, o[s]), e[i] = !(n[i] = o[s])
            }) : function(e) {
                return r(e, 0, n)
            }) : r
        }}, pseudos                       : {not: at(function(e) {
            var t = [], n = [], r = a(e.replace(z, "$1"));
            return r[v] ? at(function(e, t, n, i) {
                var o, s = r(e, null, i, []), a = e.length;
                while( a-- )(o = s[a]) && (e[a] = !(t[a] = o))
            }) : function(e, i, o) {
                return t[0] = e, r(t, null, o, n), !n.pop()
            }
        }), has                                 : at(function(e) {
            return function(t) {
                return ot(e, t).length > 0
            }
        }), contains                            : at(function(e) {
            return function(t) {
                return(t.textContent || t.innerText || o(t)).indexOf(e) > -1
            }
        }), lang                                : at(function(e) {
            return G.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), function(t) {
                var n;
                do if( n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang") )return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while( (t = t.parentNode) && 1 === t.nodeType );
                return!1
            }
        }), target                              : function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
        }, root                                 : function(e) {
            return e === f
        }, focus                                : function(e) {
            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled                              : function(e) {
            return e.disabled === !1
        }, disabled                             : function(e) {
            return e.disabled === !0
        }, checked                              : function(e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected                             : function(e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, empty                                : function(e) {
            for( e = e.firstChild; e; e = e.nextSibling )if( e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType )return!1;
            return!0
        }, parent                               : function(e) {
            return!i.pseudos.empty(e)
        }, header                               : function(e) {
            return et.test(e.nodeName)
        }, input                                : function(e) {
            return Z.test(e.nodeName)
        }, button                               : function(e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && "button" === e.type || "button" === t
        }, text                                 : function(e) {
            var t;
            return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        }, first                                : ht(function() {
            return[0]
        }), last                                : ht(function(e, t) {
            return[t - 1]
        }), eq                                  : ht(function(e, t, n) {
            return[0 > n ? n + t : n]
        }), even                                : ht(function(e, t) {
            var n = 0;
            for( ; t > n; n += 2 )e.push(n);
            return e
        }), odd                                 : ht(function(e, t) {
            var n = 1;
            for( ; t > n; n += 2 )e.push(n);
            return e
        }), lt                                  : ht(function(e, t, n) {
            var r = 0 > n ? n + t : n;
            for( ; --r >= 0; )e.push(r);
            return e
        }), gt                                  : ht(function(e, t, n) {
            var r = 0 > n ? n + t : n;
            for( ; t > ++r; )e.push(r);
            return e
        })}}, i.pseudos.nth = i.pseudos.eq;
        for( t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0} )i.pseudos[t] = pt(t);
        for( t in{submit: !0, reset: !0} )i.pseudos[t] = ft(t);
        function dt() {
        }

        dt.prototype = i.filters = i.pseudos, i.setFilters = new dt;
        function gt(e, t) {
            var n, r, o, s, a, u, l, c = k[e + " "];
            if( c )return t ? 0 : c.slice(0);
            a = e, u = [], l = i.preFilter;
            while( a ) {
                (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({value: n, type: r[0].replace(z, " ")}), a = a.slice(n.length));
                for( s in i.filter )!(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({value: n, type: s, matches: r}), a = a.slice(n.length));
                if( !n )break
            }
            return t ? a.length : a ? ot.error(e) : k(e, u).slice(0)
        }

        function mt(e) {
            var t = 0, n = e.length, r = "";
            for( ; n > t; t++ )r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, s = T++;
            return t.first ? function(t, n, r) {
                while( t = t[i] )if( 1 === t.nodeType || o )return e(t, n, r)
            } : function(t, n, a) {
                var u, l, c, p = w + " " + s;
                if( a ) {
                    while( t = t[i] )if( (1 === t.nodeType || o) && e(t, n, a) )return!0
                } else while( t = t[i] )if( 1 === t.nodeType || o )if( c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p ) {
                    if( (u = l[1]) === !0 || u === r )return u === !0
                } else if( l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0 )return!0
            }
        }

        function vt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while( i-- )if( !e[i](t, n, r) )return!1;
                return!0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, s = [], a = 0, u = e.length, l = null != t;
            for( ; u > a; a++ )(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function bt(e, t, n, r, i, o) {
            return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function(o, s, a, u) {
                var l, c, p, f = [], h = [], d = s.length, g = o || Ct(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : xt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
                if( n && n(m, y, a, u), r ) {
                    l = xt(y, h), r(l, [], a, u), c = l.length;
                    while( c-- )(p = l[c]) && (y[h[c]] = !(m[h[c]] = p))
                }
                if( o ) {
                    if( i || e ) {
                        if( i ) {
                            l = [], c = y.length;
                            while( c-- )(p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u)
                        }
                        c = y.length;
                        while( c-- )(p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p))
                    }
                } else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y)
            })
        }

        function wt(e) {
            var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = yt(function(e) {
                return e === t
            }, a, !0), p = yt(function(e) {
                return P.call(t, e) > -1
            }, a, !0), f = [function(e, n, r) {
                return!s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for( ; o > l; l++ )if( n = i.relative[e[l].type] )f = [yt(vt(f), n)]; else {
                if( n = i.filter[e[l].type].apply(null, e[l].matches), n[v] ) {
                    for( r = ++l; o > r; r++ )if( i.relative[e[r].type] )break;
                    return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e))
                }
                f.push(n)
            }
            return vt(f)
        }

        function Tt(e, t) {
            var n = 0, o = t.length > 0, s = e.length > 0, a = function(a, l, c, f, h) {
                var d, g, m, y = [], v = 0, x = "0", b = a && [], T = null != h, C = u, k = a || s && i.find.TAG("*", h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || .1;
                for( T && (u = l !== p && l, r = n); null != (d = k[x]); x++ ) {
                    if( s && d ) {
                        g = 0;
                        while( m = e[g++] )if( m(d, l, c) ) {
                            f.push(d);
                            break
                        }
                        T && (w = N, r = ++n)
                    }
                    o && ((d = !m && d) && v--, a && b.push(d))
                }
                if( v += x, o && x !== v ) {
                    g = 0;
                    while( m = t[g++] )m(b, y, l, c);
                    if( a ) {
                        if( v > 0 )while( x-- )b[x] || y[x] || (y[x] = q.call(f));
                        y = xt(y)
                    }
                    O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f)
                }
                return T && (w = N, u = C), b
            };
            return o ? at(a) : a
        }

        a = ot.compile = function(e, t) {
            var n, r = [], i = [], o = N[e + " "];
            if( !o ) {
                t || (t = gt(e)), n = t.length;
                while( n-- )o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
                o = N(e, Tt(i, r))
            }
            return o
        };
        function Ct(e, t, n) {
            var r = 0, i = t.length;
            for( ; i > r; r++ )ot(e, t[r], n);
            return n
        }

        function kt(e, t, r, o) {
            var s, u, l, c, p, f = gt(e);
            if( !o && 1 === f.length ) {
                if( u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type] ) {
                    if( t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t )return r;
                    e = e.slice(u.shift().value.length)
                }
                s = J.needsContext.test(e) ? 0 : u.length;
                while( s-- ) {
                    if( l = u[s], i.relative[c = l.type] )break;
                    if( (p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t)) ) {
                        if( u.splice(s, 1), e = o.length && mt(u), !e )return O.apply(r, o), r;
                        break
                    }
                }
            }
            return a(e, f)(o, t, !h, r, U.test(e)), r
        }

        n.sortStable = v.split("").sort(S).join("") === v, n.detectDuplicates = E, c(), n.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(e, t, n) {
            return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || lt("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue
        }), ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || lt(R, function(e, t, n) {
            var r;
            return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), x.find = ot, x.expr = ot.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains
    }(e);
    var D = {};

    function A(e) {
        var t = D[e] = {};
        return x.each(e.match(w) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function(e) {
        e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
        var t, n, r, i, o, s, a = [], u = !e.once && [], l = function(p) {
            for( t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++ )if( a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse ) {
                t = !1;
                break
            }
            r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
        }, c = {add: function() {
            if( a ) {
                var n = a.length;
                (function s(t) {
                    x.each(t, function(t, n) {
                        var r = x.type(n);
                        "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n)
                    })
                })(arguments), r ? o = a.length : t && (i = n, l(t))
            }
            return this
        }, remove  : function() {
            return a && x.each(arguments, function(e, t) {
                var n;
                while( (n = x.inArray(t, a, n)) > -1 )a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
            }), this
        }, has     : function(e) {
            return e ? x.inArray(e, a) > -1 : !(!a || !a.length)
        }, empty   : function() {
            return a = [], o = 0, this
        }, disable : function() {
            return a = u = t = undefined, this
        }, disabled: function() {
            return!a
        }, lock    : function() {
            return u = undefined, t || c.disable(), this
        }, locked  : function() {
            return!u
        }, fireWith: function(e, t) {
            return!a || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)), this
        }, fire    : function() {
            return c.fireWith(this, arguments), this
        }, fired   : function() {
            return!!n
        }};
        return c
    }, x.extend({Deferred: function(e) {
        var t = [
            ["resolve", "done", x.Callbacks("once memory"), "resolved"],
            ["reject", "fail", x.Callbacks("once memory"), "rejected"],
            ["notify", "progress", x.Callbacks("memory")]
        ], n = "pending", r = {state: function() {
            return n
        }, always                   : function() {
            return i.done(arguments).fail(arguments), this
        }, then                     : function() {
            var e = arguments;
            return x.Deferred(function(n) {
                x.each(t, function(t, o) {
                    var s = o[0], a = x.isFunction(e[t]) && e[t];
                    i[o[1]](function() {
                        var e = a && a.apply(this, arguments);
                        e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, promise                  : function(e) {
            return null != e ? x.extend(e, r) : r
        }}, i = {};
        return r.pipe = r.then, x.each(t, function(e, o) {
            var s = o[2], a = o[3];
            r[o[1]] = s.add, a && s.add(function() {
                n = a
            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                return i[o[0] + "With"](this === i ? r : this, arguments), this
            }, i[o[0] + "With"] = s.fireWith
        }), r.promise(i), e && e.call(i, i), i
    }, when              : function(e) {
        var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function(e, t, n) {
            return function(r) {
                t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
            }
        }, a, u, l;
        if( r > 1 )for( a = Array(r), u = Array(r), l = Array(r); r > t; t++ )n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
        return i || o.resolveWith(l, n), o.promise()
    }}), x.support = function(t) {
        var n = o.createElement("input"), r = o.createDocumentFragment(), i = o.createElement("div"), s = o.createElement("select"), a = s.appendChild(o.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin"in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function() {
            var n, r, s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = o.getElementsByTagName("body")[0];
            a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? {zoom: 1} : {}, function() {
                t.boxSizing = 4 === i.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {width: "4px"}).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n))
        }), t) : t
    }({});
    var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;

    function F() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
            return{}
        }}), this.expando = x.expando + Math.random()
    }

    F.uid = 1, F.accepts = function(e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
    }, F.prototype = {key: function(e) {
        if( !F.accepts(e) )return 0;
        var t = {}, n = e[this.expando];
        if( !n ) {
            n = F.uid++;
            try {
                t[this.expando] = {value: n}, Object.defineProperties(e, t)
            } catch( r ) {
                t[this.expando] = n, x.extend(e, t)
            }
        }
        return this.cache[n] || (this.cache[n] = {}), n
    }, set               : function(e, t, n) {
        var r, i = this.key(e), o = this.cache[i];
        if( "string" == typeof t )o[t] = n; else if( x.isEmptyObject(o) )x.extend(this.cache[i], t); else for( r in t )o[r] = t[r];
        return o
    }, get               : function(e, t) {
        var n = this.cache[this.key(e)];
        return t === undefined ? n : n[t]
    }, access            : function(e, t, n) {
        var r;
        return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
    }, remove            : function(e, t) {
        var n, r, i, o = this.key(e), s = this.cache[o];
        if( t === undefined )this.cache[o] = {}; else {
            x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;
            while( n-- )delete s[r[n]]
        }
    }, hasData           : function(e) {
        return!x.isEmptyObject(this.cache[e[this.expando]] || {})
    }, discard           : function(e) {
        e[this.expando] && delete this.cache[e[this.expando]]
    }}, L = new F, q = new F, x.extend({acceptData: F.accepts, hasData: function(e) {
        return L.hasData(e) || q.hasData(e)
    }, data                                       : function(e, t, n) {
        return L.access(e, t, n)
    }, removeData                                 : function(e, t) {
        L.remove(e, t)
    }, _data                                      : function(e, t, n) {
        return q.access(e, t, n)
    }, _removeData                                : function(e, t) {
        q.remove(e, t)
    }}), x.fn.extend({data: function(e, t) {
        var n, r, i = this[0], o = 0, s = null;
        if( e === undefined ) {
            if( this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs")) ) {
                for( n = i.attributes; n.length > o; o++ )r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
                q.set(i, "hasDataAttrs", !0)
            }
            return s
        }
        return"object" == typeof e ? this.each(function() {
            L.set(this, e)
        }) : x.access(this, function(t) {
            var n, r = x.camelCase(e);
            if( i && t === undefined ) {
                if( n = L.get(i, e), n !== undefined )return n;
                if( n = L.get(i, r), n !== undefined )return n;
                if( n = P(i, r, undefined), n !== undefined )return n
            } else this.each(function() {
                var n = L.get(this, r);
                L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t)
            })
        }, null, t, arguments.length > 1, null, !0)
    }, removeData         : function(e) {
        return this.each(function() {
            L.remove(this, e)
        })
    }});
    function P(e, t, n) {
        var r;
        if( n === undefined && 1 === e.nodeType )if( r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n ) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n
            } catch( i ) {
            }
            L.set(e, t, n)
        } else n = undefined;
        return n
    }

    x.extend({queue: function(e, t, n) {
        var r;
        return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined
    }, dequeue     : function(e, t) {
        t = t || "fx";
        var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function() {
            x.dequeue(e, t)
        };
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
    }, _queueHooks : function(e, t) {
        var n = t + "queueHooks";
        return q.get(e, n) || q.access(e, n, {empty: x.Callbacks("once memory").add(function() {
            q.remove(e, [t + "queue", n])
        })})
    }}), x.fn.extend({queue: function(e, t) {
        var n = 2;
        return"string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function() {
            var n = x.queue(this, e, t);
            x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
        })
    }, dequeue             : function(e) {
        return this.each(function() {
            x.dequeue(this, e)
        })
    }, delay               : function(e, t) {
        return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, clearQueue          : function(e) {
        return this.queue(e || "fx", [])
    }, promise             : function(e, t) {
        var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function() {
            --r || i.resolveWith(o, [o])
        };
        "string" != typeof e && (t = e, e = undefined), e = e || "fx";
        while( s-- )n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(t)
    }});
    var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
    x.fn.extend({attr: function(e, t) {
        return x.access(this, x.attr, e, t, arguments.length > 1)
    }, removeAttr    : function(e) {
        return this.each(function() {
            x.removeAttr(this, e)
        })
    }, prop          : function(e, t) {
        return x.access(this, x.prop, e, t, arguments.length > 1)
    }, removeProp    : function(e) {
        return this.each(function() {
            delete this[x.propFix[e] || e]
        })
    }, addClass      : function(e) {
        var t, n, r, i, o, s = 0, a = this.length, u = "string" == typeof e && e;
        if( x.isFunction(e) )return this.each(function(t) {
            x(this).addClass(e.call(this, t, this.className))
        });
        if( u )for( t = (e || "").match(w) || []; a > s; s++ )if( n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ") ) {
            o = 0;
            while( i = t[o++] )0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = x.trim(r)
        }
        return this
    }, removeClass   : function(e) {
        var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e;
        if( x.isFunction(e) )return this.each(function(t) {
            x(this).removeClass(e.call(this, t, this.className))
        });
        if( u )for( t = (e || "").match(w) || []; a > s; s++ )if( n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "") ) {
            o = 0;
            while( i = t[o++] )while( r.indexOf(" " + i + " ") >= 0 )r = r.replace(" " + i + " ", " ");
            n.className = e ? x.trim(r) : ""
        }
        return this
    }, toggleClass   : function(e, t) {
        var n = typeof e;
        return"boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
            x(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function() {
            if( "string" === n ) {
                var t, i = 0, o = x(this), s = e.match(w) || [];
                while( t = s[i++] )o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
            } else(n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "")
        })
    }, hasClass      : function(e) {
        var t = " " + e + " ", n = 0, r = this.length;
        for( ; r > n; n++ )if( 1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0 )return!0;
        return!1
    }, val           : function(e) {
        var t, n, r, i = this[0];
        {
            if( arguments.length )return r = x.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set"in t && t.set(this, i, "value") !== undefined || (this.value = i))
            });
            if( i )return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get"in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
        }
    }}), x.extend({valHooks: {option: {get: function(e) {
        var t = e.attributes.value;
        return!t || t.specified ? e.value : e.text
    }}, select                      : {get: function(e) {
        var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0;
        for( ; a > u; u++ )if( n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup")) ) {
            if( t = x(n).val(), o )return t;
            s.push(t)
        }
        return s
    }, set                                : function(e, t) {
        var n, r, i = e.options, o = x.makeArray(t), s = i.length;
        while( s-- )r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
        return n || (e.selectedIndex = -1), o
    }}}, attr              : function(e, t, n) {
        var i, o, s = e.nodeType;
        if( e && 3 !== s && 8 !== s && 2 !== s )return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get"in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set"in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined))
    }, removeAttr          : function(e, t) {
        var n, r, i = 0, o = t && t.match(w);
        if( o && 1 === e.nodeType )while( n = o[i++] )r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
    }, attrHooks           : {type: {set: function(e, t) {
        if( !x.support.radioValue && "radio" === t && x.nodeName(e, "input") ) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
        }
    }}}, propFix           : {"for": "htmlFor", "class": "className"}, prop: function(e, t, n) {
        var r, i, o, s = e.nodeType;
        if( e && 3 !== s && 8 !== s && 2 !== s )return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
    }, propHooks           : {tabIndex: {get: function(e) {
        return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1
    }}}}), M = {set: function(e, t, n) {
        return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n
    }}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = x.expr.attrHandle[t] || x.find.attr;
        x.expr.attrHandle[t] = function(e, t, r) {
            var i = x.expr.attrHandle[t], o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
            return x.expr.attrHandle[t] = i, o
        }
    }), x.support.optSelected || (x.propHooks.selected = {get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
    }}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {set: function(e, t) {
            return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined
        }}, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, X = /^([^.]*)(?:\.(.+)|)$/;

    function U() {
        return!0
    }

    function Y() {
        return!1
    }

    function V() {
        try {
            return o.activeElement
        } catch( e ) {
        }
    }

    x.event = {global: {}, add: function(e, t, n, i, o) {
        var s, a, u, l, c, p, f, h, d, g, m, y = q.get(e);
        if( y ) {
            n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(e) {
                return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments)
            }, a.elem = e), t = (t || "").match(w) || [""], c = t.length;
            while( c-- )u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({type: d, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: g.join(".")}, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
            e = null
        }
    }, remove        : function(e, t, n, r, i) {
        var o, s, a, u, l, c, p, f, h, d, g, m = q.hasData(e) && q.get(e);
        if( m && (u = m.events) ) {
            t = (t || "").match(w) || [""], l = t.length;
            while( l-- )if( a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h ) {
                p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length;
                while( o-- )c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
                s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h])
            } else for( h in u )x.event.remove(e, h + t[l], n, r, !0);
            x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"))
        }
    }, trigger       : function(t, n, r, i) {
        var s, a, u, l, c, p, f, h = [r || o], d = y.call(t, "type") ? t.type : t, g = y.call(t, "namespace") ? t.namespace.split(".") : [];
        if( a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1) ) {
            if( !i && !f.noBubble && !x.isWindow(r) ) {
                for( l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode )h.push(a), u = a;
                u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e)
            }
            s = 0;
            while( (a = h[s++]) && !t.isPropagationStopped() )t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
            return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result
        }
    }, dispatch      : function(e) {
        e = x.event.fix(e);
        var t, n, r, i, o, s = [], a = d.call(arguments), u = (q.get(this, "events") || {})[e.type] || [], l = x.event.special[e.type] || {};
        if( a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1 ) {
            s = x.event.handlers.call(this, e, u), t = 0;
            while( (i = s[t++]) && !e.isPropagationStopped() ) {
                e.currentTarget = i.elem, n = 0;
                while( (o = i.handlers[n++]) && !e.isImmediatePropagationStopped() )(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        }
    }, handlers      : function(e, t) {
        var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
        if( a && u.nodeType && (!e.button || "click" !== e.type) )for( ; u !== this; u = u.parentNode || this )if( u.disabled !== !0 || "click" !== e.type ) {
            for( r = [], n = 0; a > n; n++ )o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && s.push({elem: u, handlers: r})
        }
        return t.length > a && s.push({elem: this, handlers: t.slice(a)}), s
    }, props         : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks   : {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
        var n, r, i, s = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }}, fix          : function(e) {
        if( e[x.expando] )return e;
        var t, n, r, i = e.type, s = e, a = this.fixHooks[i];
        a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;
        while( t-- )n = r[t], e[n] = s[n];
        return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
    }, special       : {load: {noBubble: !0}, focus: {trigger: function() {
        return this !== V() && this.focus ? (this.focus(), !1) : undefined
    }, delegateType                                          : "focusin"}, blur: {trigger: function() {
        return this === V() && this.blur ? (this.blur(), !1) : undefined
    }, delegateType                                                                      : "focusout"}, click: {trigger: function() {
        return"checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined
    }, _default                                                                                                        : function(e) {
        return x.nodeName(e.target, "a")
    }}, beforeunload: {postDispatch: function(e) {
        e.result !== undefined && (e.originalEvent.returnValue = e.result)
    }}}, simulate    : function(e, t, n, r) {
        var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }}, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, x.Event = function(e, t) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t)
    }, x.Event.prototype = {isDefaultPrevented: Y, isPropagationStopped: Y, isImmediatePropagationStopped: Y, preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault()
    }, stopPropagation                        : function() {
        var e = this.originalEvent;
        this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation()
    }, stopImmediatePropagation               : function() {
        this.isImmediatePropagationStopped = U, this.stopPropagation()
    }}, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function(e, t) {
        x.event.special[e] = {delegateType: t, bindType: t, handle: function(e) {
            var n, r = this, i = e.relatedTarget, o = e.handleObj;
            return(!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }}
    }), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function(e, t) {
        var n = 0, r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {setup: function() {
            0 === n++ && o.addEventListener(e, r, !0)
        }, teardown                : function() {
            0 === --n && o.removeEventListener(e, r, !0)
        }}
    }), x.fn.extend({on: function(e, t, n, r, i) {
        var o, s;
        if( "object" == typeof e ) {
            "string" != typeof t && (n = n || t, t = undefined);
            for( s in e )this.on(s, t, n, e[s], i);
            return this
        }
        if( null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1 )r = Y; else if( !r )return this;
        return 1 === i && (o = r, r = function(e) {
            return x().off(e), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function() {
            x.event.add(this, e, r, n, t)
        })
    }, one             : function(e, t, n, r) {
        return this.on(e, t, n, r, 1)
    }, off             : function(e, t, n) {
        var r, i;
        if( e && e.preventDefault && e.handleObj )return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if( "object" == typeof e ) {
            for( i in e )this.off(i, t, e[i]);
            return this
        }
        return(t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function() {
            x.event.remove(this, e, n, t)
        })
    }, trigger         : function(e, t) {
        return this.each(function() {
            x.event.trigger(e, t, this)
        })
    }, triggerHandler  : function(e, t) {
        var n = this[0];
        return n ? x.event.trigger(e, t, n, !0) : undefined
    }});
    var G = /^.[^:#\[\.,]*$/, J = /^(?:parents|prev(?:Until|All))/, Q = x.expr.match.needsContext, K = {children: !0, contents: !0, next: !0, prev: !0};
    x.fn.extend({find: function(e) {
        var t, n = [], r = this, i = r.length;
        if( "string" != typeof e )return this.pushStack(x(e).filter(function() {
            for( t = 0; i > t; t++ )if( x.contains(r[t], this) )return!0
        }));
        for( t = 0; i > t; t++ )x.find(e, r[t], n);
        return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    }, has           : function(e) {
        var t = x(e, this), n = t.length;
        return this.filter(function() {
            var e = 0;
            for( ; n > e; e++ )if( x.contains(this, t[e]) )return!0
        })
    }, not           : function(e) {
        return this.pushStack(et(this, e || [], !0))
    }, filter        : function(e) {
        return this.pushStack(et(this, e || [], !1))
    }, is            : function(e) {
        return!!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length
    }, closest       : function(e, t) {
        var n, r = 0, i = this.length, o = [], s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
        for( ; i > r; r++ )for( n = this[r]; n && n !== t; n = n.parentNode )if( 11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e)) ) {
            n = o.push(n);
            break
        }
        return this.pushStack(o.length > 1 ? x.unique(o) : o)
    }, index         : function(e) {
        return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add           : function(e, t) {
        var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
        return this.pushStack(x.unique(r))
    }, addBack       : function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }});
    function Z(e, t) {
        while( (e = e[t]) && 1 !== e.nodeType );
        return e
    }

    x.each({parent : function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents     : function(e) {
        return x.dir(e, "parentNode")
    }, parentsUntil: function(e, t, n) {
        return x.dir(e, "parentNode", n)
    }, next        : function(e) {
        return Z(e, "nextSibling")
    }, prev        : function(e) {
        return Z(e, "previousSibling")
    }, nextAll     : function(e) {
        return x.dir(e, "nextSibling")
    }, prevAll     : function(e) {
        return x.dir(e, "previousSibling")
    }, nextUntil   : function(e, t, n) {
        return x.dir(e, "nextSibling", n)
    }, prevUntil   : function(e, t, n) {
        return x.dir(e, "previousSibling", n)
    }, siblings    : function(e) {
        return x.sibling((e.parentNode || {}).firstChild, e)
    }, children    : function(e) {
        return x.sibling(e.firstChild)
    }, contents    : function(e) {
        return e.contentDocument || x.merge([], e.childNodes)
    }}, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return"Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i)
        }
    }), x.extend({filter: function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, dir              : function(e, t, n) {
        var r = [], i = n !== undefined;
        while( (e = e[t]) && 9 !== e.nodeType )if( 1 === e.nodeType ) {
            if( i && x(e).is(n) )break;
            r.push(e)
        }
        return r
    }, sibling          : function(e, t) {
        var n = [];
        for( ; e; e = e.nextSibling )1 === e.nodeType && e !== t && n.push(e);
        return n
    }});
    function et(e, t, n) {
        if( x.isFunction(t) )return x.grep(e, function(e, r) {
            return!!t.call(e, r, e) !== n
        });
        if( t.nodeType )return x.grep(e, function(e) {
            return e === t !== n
        });
        if( "string" == typeof t ) {
            if( G.test(t) )return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return g.call(t, e) >= 0 !== n
        })
    }

    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/, rt = /<|&#?\w+;/, it = /<(?:script|style|link)/i, ot = /^(?:checkbox|radio)$/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, ut = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({text: function(e) {
        return x.access(this, function(e) {
            return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
        }, null, e, arguments.length)
    }, append                                                                                                           : function() {
        return this.domManip(arguments, function(e) {
            if( 1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType ) {
                var t = pt(this, e);
                t.appendChild(e)
            }
        })
    }, prepend                                                                                                          : function() {
        return this.domManip(arguments, function(e) {
            if( 1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType ) {
                var t = pt(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    }, before                                                                                                           : function() {
        return this.domManip(arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    }, after                                                                                                            : function() {
        return this.domManip(arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove                                                                                                           : function(e, t) {
        var n, r = e ? x.filter(e, this) : this, i = 0;
        for( ; null != (n = r[i]); i++ )t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
        return this
    }, empty                                                                                                            : function() {
        var e, t = 0;
        for( ; null != (e = this[t]); t++ )1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = "");
        return this
    }, clone                                                                                                            : function(e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
            return x.clone(this, e, t)
        })
    }, html                                                                                                             : function(e) {
        return x.access(this, function(e) {
            var t = this[0] || {}, n = 0, r = this.length;
            if( e === undefined && 1 === t.nodeType )return t.innerHTML;
            if( "string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()] ) {
                e = e.replace(tt, "<$1></$2>");
                try {
                    for( ; r > n; n++ )t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
                    t = 0
                } catch( i ) {
                }
            }
            t && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith                                                                                                      : function() {
        var e = x.map(this, function(e) {
            return[e.nextSibling, e.parentNode]
        }), t = 0;
        return this.domManip(arguments, function(n) {
            var r = e[t++], i = e[t++];
            i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
        }, !0), t ? this : this.remove()
    }, detach                                                                                                           : function(e) {
        return this.remove(e, !0)
    }, domManip                                                                                                         : function(e, t, n) {
        e = f.apply([], e);
        var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d);
        if( g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d) )return this.each(function(r) {
            var i = p.eq(r);
            g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
        });
        if( c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i) ) {
            for( o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++ )a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
            if( s )for( u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++ )a = o[l], at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")))
        }
        return this
    }}), x.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = [], i = x(e), o = i.length - 1, s = 0;
            for( ; o >= s; s++ )n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
            return this.pushStack(r)
        }
    }), x.extend({clone: function(e, t, n) {
        var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
        if( !(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)) )for( s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++ )yt(o[r], s[r]);
        if( t )if( n )for( o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++ )gt(o[r], s[r]); else gt(e, a);
        return s = mt(a, "script"), s.length > 0 && dt(s, !u && mt(e, "script")), a
    }, buildFragment   : function(e, t, n, r) {
        var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = [];
        for( ; p > c; c++ )if( i = e[c], i || 0 === i )if( "object" === x.type(i) )x.merge(h, i.nodeType ? [i] : i); else if( rt.test(i) ) {
            o = o || f.appendChild(t.createElement("div")), s = (nt.exec(i) || ["", ""])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2], l = a[0];
            while( l-- )o = o.lastChild;
            x.merge(h, o.childNodes), o = f.firstChild, o.textContent = ""
        } else h.push(t.createTextNode(i));
        f.textContent = "", c = 0;
        while( i = h[c++] )if( (!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n) ) {
            l = 0;
            while( i = o[l++] )at.test(i.type || "") && n.push(i)
        }
        return f
    }, cleanData       : function(e) {
        var t, n, r, i, o, s, a = x.event.special, u = 0;
        for( ; (n = e[u]) !== undefined; u++ ) {
            if( F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o])) ) {
                if( r = Object.keys(t.events || {}), r.length )for( s = 0; (i = r[s]) !== undefined; s++ )a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                q.cache[o] && delete q.cache[o]
            }
            delete L.cache[n[L.expando]]
        }
    }, _evalUrl        : function(e) {
        return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }});
    function pt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ft(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ht(e) {
        var t = ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function dt(e, t) {
        var n = e.length, r = 0;
        for( ; n > r; r++ )q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"))
    }

    function gt(e, t) {
        var n, r, i, o, s, a, u, l;
        if( 1 === t.nodeType ) {
            if( q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events) ) {
                delete s.handle, s.events = {};
                for( i in l )for( n = 0, r = l[i].length; r > n; n++ )x.event.add(t, i, l[i][n])
            }
            L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u))
        }
    }

    function mt(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n
    }

    function yt(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    x.fn.extend({wrapAll: function(e) {
        var t;
        return x.isFunction(e) ? this.each(function(t) {
            x(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            var e = this;
            while( e.firstElementChild )e = e.firstElementChild;
            return e
        }).append(this)), this)
    }, wrapInner        : function(e) {
        return x.isFunction(e) ? this.each(function(t) {
            x(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
            var t = x(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    }, wrap             : function(e) {
        var t = x.isFunction(e);
        return this.each(function(n) {
            x(this).wrapAll(t ? e.call(this, n) : e)
        })
    }, unwrap           : function() {
        return this.parent().each(function() {
            x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
        }).end()
    }});
    var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp("^(" + b + ")(.*)$", "i"), Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), kt = RegExp("^([+-])=(" + b + ")", "i"), Nt = {BODY: "block"}, Et = {position: "absolute", visibility: "hidden", display: "block"}, St = {letterSpacing: 0, fontWeight: 400}, jt = ["Top", "Right", "Bottom", "Left"], Dt = ["Webkit", "O", "Moz", "ms"];

    function At(e, t) {
        if( t in e )return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Dt.length;
        while( i-- )if( t = Dt[i] + n, t in e )return t;
        return r
    }

    function Lt(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function qt(t) {
        return e.getComputedStyle(t, null)
    }

    function Ht(e, t) {
        var n, r, i, o = [], s = 0, a = e.length;
        for( ; a > s; s++ )r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
        for( s = 0; a > s; s++ )r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    x.fn.extend({css: function(e, t) {
        return x.access(this, function(e, t, n) {
            var r, i, o = {}, s = 0;
            if( x.isArray(t) ) {
                for( r = qt(e), i = t.length; i > s; s++ )o[t[s]] = x.css(e, t[s], !1, r);
                return o
            }
            return n !== undefined ? x.style(e, t, n) : x.css(e, t)
        }, e, t, arguments.length > 1)
    }, show         : function() {
        return Ht(this, !0)
    }, hide         : function() {
        return Ht(this)
    }, toggle       : function(e) {
        return"boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
            Lt(this) ? x(this).show() : x(this).hide()
        })
    }}), x.extend({cssHooks: {opacity: {get: function(e, t) {
        if( t ) {
            var n = vt(e, "opacity");
            return"" === n ? "1" : n
        }
    }}}, cssNumber         : {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function(e, t, n, r) {
        if( e && 3 !== e.nodeType && 8 !== e.nodeType && e.style ) {
            var i, o, s, a = x.camelCase(t), u = e.style;
            return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && "get"in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set"in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined)
        }
    }, css                 : function(e, t, n, r) {
        var i, o, s, a = x.camelCase(t);
        return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && "get"in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i
    }}), vt = function(e, t, n) {
        var r, i, o, s = n || qt(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
        return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a
    };
    function Ot(e, t, n) {
        var r = Tt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Ft(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0;
        for( ; 4 > o; o += 2 )"margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
        return s
    }

    function Pt(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = qt(e), s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if( 0 >= i || null == i ) {
            if( i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i) )return i;
            r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function Rt(e) {
        var t = o, n = Nt[e];
        return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n
    }

    function Mt(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function(e, t) {
        x.cssHooks[t] = {get: function(e, n, r) {
            return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function() {
                return Pt(e, t, r)
            }) : Pt(e, t, r) : undefined
        }, set              : function(e, n, r) {
            var i = r && qt(e);
            return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
        }}
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {get: function(e, t) {
            return t ? x.swap(e, {display: "inline-block"}, vt, [e, "marginRight"]) : undefined
        }}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, t) {
            x.cssHooks[t] = {get: function(e, n) {
                return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined
            }}
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight
    }, x.expr.filters.visible = function(e) {
        return!x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function(e, t) {
        x.cssHooks[e + t] = {expand: function(n) {
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            for( ; 4 > r; r++ )i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
            return i
        }}, wt.test(e) || (x.cssHooks[e + t].set = Ot)
    });
    var Wt = /%20/g, $t = /\[\]$/, Bt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i, zt = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({serialize: function() {
        return x.param(this.serializeArray())
    }, serializeArray     : function() {
        return this.map(function() {
            var e = x.prop(this, "elements");
            return e ? x.makeArray(e) : this
        }).filter(function() {
            var e = this.type;
            return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e))
        }).map(function(e, t) {
            var n = x(this).val();
            return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                return{name: t.name, value: e.replace(Bt, "\r\n")}
            }) : {name: t.name, value: n.replace(Bt, "\r\n")}
        }).get()
    }}), x.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if( t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e) )x.each(e, function() {
            i(this.name, this.value)
        }); else for( n in e )_t(n, e[n], t, i);
        return r.join("&").replace(Wt, "+")
    };
    function _t(e, t, n, r) {
        var i;
        if( x.isArray(t) )x.each(t, function(t, i) {
            n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if( n || "object" !== x.type(t) )r(e, t); else for( i in t )_t(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }, bind               : function(e, t, n) {
        return this.on(e, null, t, n)
    }, unbind             : function(e, t) {
        return this.off(e, null, t)
    }, delegate           : function(e, t, n, r) {
        return this.on(t, e, n, r)
    }, undelegate         : function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }});
    var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//, tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = "*/".concat("*");
    try {
        Ut = i.href
    } catch( an ) {
        Ut = o.createElement("a"), Ut.href = "", Ut = Ut.href
    }
    Xt = tn.exec(Ut.toLowerCase()) || [];
    function un(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if( x.isFunction(n) )while( r = o[i++] )"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function ln(e, t, n, r) {
        var i = {}, o = e === on;

        function s(a) {
            var u;
            return i[a] = !0, x.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return"string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1)
            }), u
        }

        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function cn(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for( n in t )t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function(e, t, n) {
        if( "string" != typeof e && nn )return nn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), s.length > 0 && x.ajax({url: e, type: i, dataType: "html", data: t}).done(function(e) {
            o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Ut, type: "GET", isLocal: Kt.test(Xt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": sn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function(e, t) {
        return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e)
    }, ajaxPrefilter    : un(rn), ajaxTransport: un(on), ajax: function(e, t) {
        "object" == typeof e && (t = e, e = undefined), t = t || {};
        var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c, f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(), d = x.Callbacks("once memory"), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = "canceled", T = {readyState: 0, getResponseHeader: function(e) {
            var t;
            if( 2 === v ) {
                if( !o ) {
                    o = {};
                    while( t = Qt.exec(i) )o[t[1].toLowerCase()] = t[2]
                }
                t = o[e.toLowerCase()]
            }
            return null == t ? null : t
        }, getAllResponseHeaders                                                                                                                                                                                                                                            : function() {
            return 2 === v ? i : null
        }, setRequestHeader                                                                                                                                                                                                                                                 : function(e, t) {
            var n = e.toLowerCase();
            return v || (e = y[n] = y[n] || e, m[e] = t), this
        }, overrideMimeType                                                                                                                                                                                                                                                 : function(e) {
            return v || (c.mimeType = e), this
        }, statusCode                                                                                                                                                                                                                                                       : function(e) {
            var t;
            if( e )if( 2 > v )for( t in e )g[t] = [g[t], e[t]]; else T.always(e[T.status]);
            return this
        }, abort                                                                                                                                                                                                                                                            : function(e) {
            var t = e || b;
            return n && n.abort(t), k(0, t), this
        }};
        if( h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v )return T;
        u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);
        for( l in c.headers )T.setRequestHeader(l, c.headers[l]);
        if( c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v) )return T.abort();
        b = "abort";
        for( l in{success: 1, error: 1, complete: 1} )T[l](c[l]);
        if( n = ln(on, c, t, T) ) {
            T.readyState = 1, u && f.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (s = setTimeout(function() {
                T.abort("timeout")
            }, c.timeout));
            try {
                v = 1, n.send(m, k)
            } catch( C ) {
                if( !(2 > v) )throw C;
                k(-1, C)
            }
        } else k(-1, "No Transport");
        function k(e, t, o, a) {
            var l, m, y, b, w, C = t;
            2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")))
        }

        return T
    }, getJSON          : function(e, t, n) {
        return x.get(e, t, n, "json")
    }, getScript        : function(e, t) {
        return x.get(e, undefined, t, "script")
    }}), x.each(["get", "post"], function(e, t) {
        x[t] = function(e, n, r, i) {
            return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({url: e, type: t, dataType: i, data: n, success: r})
        }
    });
    function pn(e, t, n) {
        var r, i, o, s, a = e.contents, u = e.dataTypes;
        while( "*" === u[0] )u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if( r )for( i in a )if( a[i] && a[i].test(r) ) {
            u.unshift(i);
            break
        }
        if( u[0]in n )o = u[0]; else {
            for( i in n ) {
                if( !u[0] || e.converters[i + " " + u[0]] ) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined
    }

    function fn(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if( c[1] )for( s in e.converters )l[s.toLowerCase()] = e.converters[s];
        o = c.shift();
        while( o )if( e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift() )if( "*" === o )o = u; else if( "*" !== u && u !== o ) {
            if( s = l[u + " " + o] || l["* " + o], !s )for( i in l )if( a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]]) ) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if( s !== !0 )if( s && e["throws"] )t = s(t); else try {
                t = s(t)
            } catch( p ) {
                return{state: "parsererror", error: s ? p : "No conversion from " + u + " to " + o}
            }
        }
        return{state: "success", data: t}
    }

    x.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(e) {
        return x.globalEval(e), e
    }}}), x.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function(e) {
        if( e.crossDomain ) {
            var t, n;
            return{send: function(r, i) {
                t = x("<script>").prop({async: !0, charset: e.scriptCharset, src: e.url}).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), o.head.appendChild(t[0])
            }, abort   : function() {
                n && n()
            }}
        }
    });
    var hn = [], dn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
        var e = hn.pop() || x.expando + "_" + Yt++;
        return this[e] = !0, e
    }}), x.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || x.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined
        }), "script") : undefined
    }), x.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch( e ) {
        }
    };
    var gn = x.ajaxSettings.xhr(), mn = {0: 200, 1223: 204}, yn = 0, vn = {};
    e.ActiveXObject && x(e).on("unload", function() {
        for( var e in vn )vn[e]();
        vn = undefined
    }), x.support.cors = !!gn && "withCredentials"in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function(e) {
        var t;
        return x.support.cors || gn && !e.crossDomain ? {send: function(n, r) {
            var i, o, s = e.xhr();
            if( s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields )for( i in e.xhrFields )s[i] = e.xhrFields[i];
            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
            for( i in n )s.setRequestHeader(i, n[i]);
            t = function(e) {
                return function() {
                    t && (delete vn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {text: s.responseText} : undefined, s.getAllResponseHeaders()))
                }
            }, s.onload = t(), s.onerror = t("error"), t = vn[o = yn++] = t("abort"), s.send(e.hasContent && e.data || null)
        }, abort                                             : function() {
            t && t()
        }} : undefined
    });
    var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"), Cn = /queueHooks$/, kn = [An], Nn = {"*": [function(e, t) {
        var n = this.createTween(e, t), r = n.cur(), i = Tn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)), a = 1, u = 20;
        if( s && s[3] !== o ) {
            o = o || s[3], i = i || [], s = +r || 1;
            do a = a || ".5", s /= a, x.style(n.elem, e, s + o); while( a !== (a = n.cur() / r) && 1 !== a && --u )
        }
        return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
    }]};

    function En() {
        return setTimeout(function() {
            xn = undefined
        }), xn = x.now()
    }

    function Sn(e, t, n) {
        var r, i = (Nn[t] || []).concat(Nn["*"]), o = 0, s = i.length;
        for( ; s > o; o++ )if( r = i[o].call(n, t, e) )return r
    }

    function jn(e, t, n) {
        var r, i, o = 0, s = kn.length, a = x.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if( i )return!1;
            var t = xn || En(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length;
            for( ; u > s; s++ )l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({elem: e, props: x.extend({}, t), opts: x.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: xn || En(), duration: n.duration, tweens: [], createTween: function(t, n) {
            var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r
        }, stop               : function(t) {
            var n = 0, r = t ? l.tweens.length : 0;
            if( i )return this;
            for( i = !0; r > n; n++ )l.tweens[n].run(1);
            return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
        }}), c = l.props;
        for( Dn(c, l.opts.specialEasing); s > o; o++ )if( r = kn[o].call(l, e, c, l.opts) )return r;
        return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {elem: e, anim: l, queue: l.opts.queue})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function Dn(e, t) {
        var n, r, i, o, s;
        for( n in e )if( r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand"in s ) {
            o = s.expand(o), delete e[r];
            for( n in o )n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(jn, {tweener: function(e, t) {
        x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        var n, r = 0, i = e.length;
        for( ; i > r; r++ )n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t)
    }, prefilter                       : function(e, t) {
        t ? kn.unshift(e) : kn.push(e)
    }});
    function An(e, t, n) {
        var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = q.get(e, "fxshow");
        n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, l.always(function() {
            l.always(function() {
                a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", l.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for( r in t )if( i = t[r], wn.exec(i) ) {
            if( delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show") ) {
                if( "show" !== i || !h || h[r] === undefined )continue;
                f = !0
            }
            c[r] = h && h[r] || x.style(e, r)
        }
        if( !x.isEmptyObject(c) ) {
            h ? "hidden"in h && (f = h.hidden) : h = q.access(e, "fxshow", {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function() {
                x(e).hide()
            }), l.done(function() {
                var t;
                q.remove(e, "fxshow");
                for( t in c )x.style(e, t, c[t])
            });
            for( r in c )s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function Ln(e, t, n, r, i) {
        return new Ln.prototype.init(e, t, n, r, i)
    }

    x.Tween = Ln, Ln.prototype = {constructor: Ln, init: function(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
    }, cur                                   : function() {
        var e = Ln.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ln.propHooks._default.get(this)
    }, run                                   : function(e) {
        var t, n = Ln.propHooks[this.prop];
        return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this
    }}, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = {_default: {get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set                                                                        : function(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i)
        }
    }), x.fn.extend({fadeTo: function(e, t, n, r) {
        return this.filter(Lt).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate             : function(e, t, n, r) {
        var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function() {
            var t = jn(this, x.extend({}, e), o);
            (i || q.get(this, "finish")) && t.stop(!0)
        };
        return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
    }, stop                : function(e, t, n) {
        var r = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
        };
        return"string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
            var t = !0, i = null != e && e + "queueHooks", o = x.timers, s = q.get(this);
            if( i )s[i] && s[i].stop && r(s[i]); else for( i in s )s[i] && s[i].stop && Cn.test(i) && r(s[i]);
            for( i = o.length; i--; )o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            (t || !n) && x.dequeue(this, e)
        })
    }, finish              : function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, n = q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, s = r ? r.length : 0;
            for( n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for( t = 0; s > t; t++ )r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
        })
    }});
    function qn(e, t) {
        var n, r = {height: e}, i = 0;
        for( t = t ? 1 : 0; 4 > i; i += 2 - t )n = jt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({slideDown: qn("show"), slideUp: qn("hide"), slideToggle: qn("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t};
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {linear: function(e) {
        return e
    }, swing             : function(e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function() {
        var e, t = x.timers, n = 0;
        for( xn = x.now(); t.length > n; n++ )e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || x.fx.stop(), xn = undefined
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        bn || (bn = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(bn), bn = null
    }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers,function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if( arguments.length )return e === undefined ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0], o = {top: 0, left: 0}, s = i && i.ownerDocument;
        if( s )return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = Hn(s), {top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft}) : o
    }, x.offset = {setOffset: function(e, t, n) {
        var r, i, o, s, a, u, l, c = x.css(e, "position"), p = x(e), f = {};
        "static" === c && (e.style.position = "relative"), a = p.offset(), o = x.css(e, "top"), u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using"in t ? t.using.call(e, f) : p.css(f)
    }}, x.fn.extend({position: function() {
        if( this[0] ) {
            var e, t, n = this[0], r = {top: 0, left: 0};
            return"fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), {top: t.top - r.top - x.css(n, "marginTop", !0), left: t.left - r.left - x.css(n, "marginLeft", !0)}
        }
    }, offsetParent          : function() {
        return this.map(function() {
            var e = this.offsetParent || s;
            while( e && !x.nodeName(e, "html") && "static" === x.css(e, "position") )e = e.offsetParent;
            return e || s
        })
    }}), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(t, n) {
        var r = "pageYOffset" === n;
        x.fn[t] = function(i) {
            return x.access(this, function(t, i, o) {
                var s = Hn(t);
                return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined)
            }, t, i, arguments.length, null)
        }
    });
    function Hn(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    x.each({Height: "height", Width: "width"}, function(e, t) {
        x.each({padding: "inner" + e, content: t, "": "outer" + e}, function(n, r) {
            x.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
                return x.access(this, function(t, n, r) {
                    var i;
                    return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s)
                }, t, o ? r : undefined, o, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x)
})(window);
/**
 * @license Rangy Inputs, a jQuery plug-in for selection and caret manipulation within textareas and text inputs.
 *
 * https://github.com/timdown/rangyinputs
 *
 * For range and selection features for contenteditable, see Rangy.

 * http://code.google.com/p/rangy/
 *
 * Depends on jQuery 1.0 or later.
 *
 * Copyright 2013, Tim Down
 * Licensed under the MIT license.
 * Version: 1.1.2
 * Build date: 6 September 2013
 */
(function($) {
    var UNDEF = "undefined";
    var getSelection, setSelection, deleteSelectedText, deleteText, insertText;
    var replaceSelectedText, surroundSelectedText, extractSelectedText, collapseSelection;

    // Trio of isHost* functions taken from Peter Michaux's article:
    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
    function isHostMethod(object, property) {
        var t = typeof object[property];
        return t === "function" || (!!(t == "object" && object[property])) || t == "unknown";
    }

    function isHostProperty(object, property) {
        return typeof(object[property]) != UNDEF;
    }

    function isHostObject(object, property) {
        return !!(typeof(object[property]) == "object" && object[property]);
    }

    function fail(reason) {
        if( window.console && window.console.log ) {
            window.console.log("RangyInputs not supported in your browser. Reason: " + reason);
        }
    }

    function adjustOffsets(el, start, end) {
        if( start < 0 ) {
            start += el.value.length;
        }
        if( typeof end == UNDEF ) {
            end = start;
        }
        if( end < 0 ) {
            end += el.value.length;
        }
        return { start: start, end: end };
    }

    function makeSelection(el, start, end) {
        return {
            start : start,
            end   : end,
            length: end - start,
            text  : el.value.slice(start, end)
        };
    }

    function getBody() {
        return isHostObject(document, "body") ? document.body : document.getElementsByTagName("body")[0];
    }

    $(document).ready(function() {
        var testTextArea = document.createElement("textarea");

        getBody().appendChild(testTextArea);

        if( isHostProperty(testTextArea, "selectionStart") && isHostProperty(testTextArea, "selectionEnd") ) {
            getSelection = function(el) {
                var start = el.selectionStart, end = el.selectionEnd;
                return makeSelection(el, start, end);
            };

            setSelection = function(el, startOffset, endOffset) {
                var offsets = adjustOffsets(el, startOffset, endOffset);
                el.selectionStart = offsets.start;
                el.selectionEnd = offsets.end;
            };

            collapseSelection = function(el, toStart) {
                if( toStart ) {
                    el.selectionEnd = el.selectionStart;
                } else {
                    el.selectionStart = el.selectionEnd;
                }
            };
        } else if( isHostMethod(testTextArea, "createTextRange") && isHostObject(document, "selection") &&
            isHostMethod(document.selection, "createRange") ) {

            getSelection = function(el) {
                var start = 0, end = 0, normalizedValue, textInputRange, len, endRange;
                var range = document.selection.createRange();

                if( range && range.parentElement() == el ) {
                    len = el.value.length;

                    normalizedValue = el.value.replace(/\r\n/g, "\n");
                    textInputRange = el.createTextRange();
                    textInputRange.moveToBookmark(range.getBookmark());
                    endRange = el.createTextRange();
                    endRange.collapse(false);
                    if( textInputRange.compareEndPoints("StartToEnd", endRange) > -1 ) {
                        start = end = len;
                    } else {
                        start = -textInputRange.moveStart("character", -len);
                        start += normalizedValue.slice(0, start).split("\n").length - 1;
                        if( textInputRange.compareEndPoints("EndToEnd", endRange) > -1 ) {
                            end = len;
                        } else {
                            end = -textInputRange.moveEnd("character", -len);
                            end += normalizedValue.slice(0, end).split("\n").length - 1;
                        }
                    }
                }

                return makeSelection(el, start, end);
            };

            // Moving across a line break only counts as moving one character in a TextRange, whereas a line break in
            // the textarea value is two characters. This function corrects for that by converting a text offset into a
            // range character offset by subtracting one character for every line break in the textarea prior to the
            // offset
            var offsetToRangeCharacterMove = function(el, offset) {
                return offset - (el.value.slice(0, offset).split("\r\n").length - 1);
            };

            setSelection = function(el, startOffset, endOffset) {
                var offsets = adjustOffsets(el, startOffset, endOffset);
                var range = el.createTextRange();
                var startCharMove = offsetToRangeCharacterMove(el, offsets.start);
                range.collapse(true);
                if( offsets.start == offsets.end ) {
                    range.move("character", startCharMove);
                } else {
                    range.moveEnd("character", offsetToRangeCharacterMove(el, offsets.end));
                    range.moveStart("character", startCharMove);
                }
                range.select();
            };

            collapseSelection = function(el, toStart) {
                var range = document.selection.createRange();
                range.collapse(toStart);
                range.select();
            };
        } else {
            getBody().removeChild(testTextArea);
            fail("No means of finding text input caret position");
            return;
        }

        // Clean up
        getBody().removeChild(testTextArea);

        deleteText = function(el, start, end, moveSelection) {
            var val;
            if( start != end ) {
                val = el.value;
                el.value = val.slice(0, start) + val.slice(end);
            }
            if( moveSelection ) {
                setSelection(el, start, start);
            }
        };

        deleteSelectedText = function(el) {
            var sel = getSelection(el);
            deleteText(el, sel.start, sel.end, true);
        };

        extractSelectedText = function(el) {
            var sel = getSelection(el), val;
            if( sel.start != sel.end ) {
                val = el.value;
                el.value = val.slice(0, sel.start) + val.slice(sel.end);
            }
            setSelection(el, sel.start, sel.start);
            return sel.text;
        };

        var updateSelectionAfterInsert = function(el, startIndex, text, selectionBehaviour) {
            var endIndex = startIndex + text.length;

            selectionBehaviour = (typeof selectionBehaviour == "string") ?
                selectionBehaviour.toLowerCase() : "";

            if( (selectionBehaviour == "collapsetoend" || selectionBehaviour == "select") && /[\r\n]/.test(text) ) {
                // Find the length of the actual text inserted, which could vary
                // depending on how the browser deals with line breaks
                var normalizedText = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                endIndex = startIndex + normalizedText.length;
                var firstLineBreakIndex = startIndex + normalizedText.indexOf("\n");

                if( el.value.slice(firstLineBreakIndex, firstLineBreakIndex + 2) == "\r\n" ) {
                    // Browser uses \r\n, so we need to account for extra \r characters
                    endIndex += normalizedText.match(/\n/g).length;
                }
            }

            switch( selectionBehaviour ) {
                case "collapsetostart":
                    setSelection(el, startIndex, startIndex);
                    break;
                case "collapsetoend":
                    setSelection(el, endIndex, endIndex);
                    break;
                case "select":
                    setSelection(el, startIndex, endIndex);
                    break;
            }
        };

        insertText = function(el, text, index, selectionBehaviour) {
            var val = el.value;
            el.value = val.slice(0, index) + text + val.slice(index);
            if( typeof selectionBehaviour == "boolean" ) {
                selectionBehaviour = selectionBehaviour ? "collapseToEnd" : "";
            }
            updateSelectionAfterInsert(el, index, text, selectionBehaviour);
        };

        replaceSelectedText = function(el, text, selectionBehaviour) {
            var sel = getSelection(el), val = el.value;
            el.value = val.slice(0, sel.start) + text + val.slice(sel.end);
            updateSelectionAfterInsert(el, sel.start, text, selectionBehaviour || "collapseToEnd");
        };

        surroundSelectedText = function(el, before, after, selectionBehaviour) {
            if( typeof after == UNDEF ) {
                after = before;
            }
            var sel = getSelection(el), val = el.value;
            el.value = val.slice(0, sel.start) + before + sel.text + after + val.slice(sel.end);
            var startIndex = sel.start + before.length;
            updateSelectionAfterInsert(el, startIndex, sel.text, selectionBehaviour || "select");
        };

        function jQuerify(func, returnThis) {
            return function() {
                var el = this.jquery ? this[0] : this;
                var nodeName = el.nodeName.toLowerCase();

                if( el.nodeType == 1 && (nodeName == "textarea" || (nodeName == "input" && el.type == "text")) ) {
                    var args = [el].concat(Array.prototype.slice.call(arguments));
                    var result = func.apply(this, args);
                    if( !returnThis ) {
                        return result;
                    }
                }
                if( returnThis ) {
                    return this;
                }
            };
        }

        $.fn.extend({
            getSelection        : jQuerify(getSelection, false),
            setSelection        : jQuerify(setSelection, true),
            collapseSelection   : jQuerify(collapseSelection, true),
            deleteSelectedText  : jQuerify(deleteSelectedText, true),
            deleteText          : jQuerify(deleteText, true),
            extractSelectedText : jQuerify(extractSelectedText, false),
            insertText          : jQuerify(insertText, true),
            replaceSelectedText : jQuerify(replaceSelectedText, true),
            surroundSelectedText: jQuerify(surroundSelectedText, true)
        });
    });
})(jQuery);//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a) {
    function b() {
        return{empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}
    }

    function c(a, b) {
        function c() {
            ib.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }

        var d = !0;
        return i(function() {
            return d && (c(), d = !1), b.apply(this, arguments)
        }, b)
    }

    function d(a, b) {
        return function(c) {
            return l(a.call(this, c), b)
        }
    }

    function e(a, b) {
        return function(c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }

    function f() {
    }

    function g(a) {
        y(a), i(this, a)
    }

    function h(a) {
        var b = r(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble()
    }

    function i(a, b) {
        for( var c in b )b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
    }

    function j(a) {
        var b, c = {};
        for( b in a )a.hasOwnProperty(b) && wb.hasOwnProperty(b) && (c[b] = a[b]);
        return c
    }

    function k(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function l(a, b, c) {
        for( var d = "" + Math.abs(a), e = a >= 0; d.length < b; )d = "0" + d;
        return(e ? c ? "+" : "" : "-") + d
    }

    function m(a, b, c, d) {
        var e = b._milliseconds, f = b._days, g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && db(a, "Date", cb(a, "Date") + f * c), g && bb(a, cb(a, "Month") + g * c), d && ib.updateOffset(a, f || g)
    }

    function n(a) {
        return"[object Array]" === Object.prototype.toString.call(a)
    }

    function o(a) {
        return"[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function p(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for( d = 0; e > d; d++ )(c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++;
        return g + f
    }

    function q(a) {
        if( a ) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = Zb[a] || $b[b] || b
        }
        return a
    }

    function r(a) {
        var b, c, d = {};
        for( c in a )a.hasOwnProperty(c) && (b = q(c), b && (d[b] = a[c]));
        return d
    }

    function s(b) {
        var c, d;
        if( 0 === b.indexOf("week") )c = 7, d = "day"; else {
            if( 0 !== b.indexOf("month") )return;
            c = 12, d = "month"
        }
        ib[b] = function(e, f) {
            var g, h, i = ib.fn._lang[b], j = [];
            if( "number" == typeof e && (f = e, e = a), h = function(a) {
                var b = ib().utc().set(d, a);
                return i.call(ib.fn._lang, b, e || "")
            }, null != f )return h(f);
            for( g = 0; c > g; g++ )j.push(h(g));
            return j
        }
    }

    function t(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function u(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function v(a, b, c) {
        return $(ib([a, 11, 31 + b - c]), b, c).week
    }

    function w(a) {
        return x(a) ? 366 : 365
    }

    function x(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function y(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[pb] < 0 || a._a[pb] > 11 ? pb : a._a[qb] < 1 || a._a[qb] > u(a._a[ob], a._a[pb]) ? qb : a._a[rb] < 0 || a._a[rb] > 23 ? rb : a._a[sb] < 0 || a._a[sb] > 59 ? sb : a._a[tb] < 0 || a._a[tb] > 59 ? tb : a._a[ub] < 0 || a._a[ub] > 999 ? ub : -1, a._pf._overflowDayOfYear && (ob > b || b > qb) && (b = qb), a._pf.overflow = b)
    }

    function z(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
    }

    function A(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function B(a, b) {
        return b._isUTC ? ib(a).zone(b._offset || 0) : ib(a).local()
    }

    function C(a, b) {
        return b.abbr = a, vb[a] || (vb[a] = new f), vb[a].set(b), vb[a]
    }

    function D(a) {
        delete vb[a]
    }

    function E(a) {
        var b, c, d, e, f = 0, g = function(a) {
            if( !vb[a] && xb )try {
                require("./lang/" + a)
            } catch( b ) {
            }
            return vb[a]
        };
        if( !a )return ib.fn._lang;
        if( !n(a) ) {
            if( c = g(a) )return c;
            a = [a]
        }
        for( ; f < a.length; ) {
            for( e = A(a[f]).split("-"), b = e.length, d = A(a[f + 1]), d = d ? d.split("-") : null; b > 0; ) {
                if( c = g(e.slice(0, b).join("-")) )return c;
                if( d && d.length >= b && p(e, d, !0) >= b - 1 )break;
                b--
            }
            f++
        }
        return ib.fn._lang
    }

    function F(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function G(a) {
        var b, c, d = a.match(Bb);
        for( b = 0, c = d.length; c > b; b++ )d[b] = cc[d[b]] ? cc[d[b]] : F(d[b]);
        return function(e) {
            var f = "";
            for( b = 0; c > b; b++ )f += d[b]instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function H(a, b) {
        return a.isValid() ? (b = I(b, a.lang()), _b[b] || (_b[b] = G(b)), _b[b](a)) : a.lang().invalidDate()
    }

    function I(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }

        var d = 5;
        for( Cb.lastIndex = 0; d >= 0 && Cb.test(a); )a = a.replace(Cb, c), Cb.lastIndex = 0, d -= 1;
        return a
    }

    function J(a, b) {
        var c, d = b._strict;
        switch( a ) {
            case"Q":
                return Nb;
            case"DDDD":
                return Pb;
            case"YYYY":
            case"GGGG":
            case"gggg":
                return d ? Qb : Fb;
            case"Y":
            case"G":
            case"g":
                return Sb;
            case"YYYYYY":
            case"YYYYY":
            case"GGGGG":
            case"ggggg":
                return d ? Rb : Gb;
            case"S":
                if( d )return Nb;
            case"SS":
                if( d )return Ob;
            case"SSS":
                if( d )return Pb;
            case"DDD":
                return Eb;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
                return Ib;
            case"a":
            case"A":
                return E(b._l)._meridiemParse;
            case"X":
                return Lb;
            case"Z":
            case"ZZ":
                return Jb;
            case"T":
                return Kb;
            case"SSSS":
                return Hb;
            case"MM":
            case"DD":
            case"YY":
            case"GG":
            case"gg":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"ww":
            case"WW":
                return d ? Ob : Db;
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
            case"w":
            case"W":
            case"e":
            case"E":
                return Db;
            case"Do":
                return Mb;
            default:
                return c = new RegExp(R(Q(a.replace("\\", "")), "i"))
        }
    }

    function K(a) {
        a = a || "";
        var b = a.match(Jb) || [], c = b[b.length - 1] || [], d = (c + "").match(Xb) || ["-", 0, 0], e = +(60 * d[1]) + t(d[2]);
        return"+" === d[0] ? -e : e
    }

    function L(a, b, c) {
        var d, e = c._a;
        switch( a ) {
            case"Q":
                null != b && (e[pb] = 3 * (t(b) - 1));
                break;
            case"M":
            case"MM":
                null != b && (e[pb] = t(b) - 1);
                break;
            case"MMM":
            case"MMMM":
                d = E(c._l).monthsParse(b), null != d ? e[pb] = d : c._pf.invalidMonth = b;
                break;
            case"D":
            case"DD":
                null != b && (e[qb] = t(b));
                break;
            case"Do":
                null != b && (e[qb] = t(parseInt(b, 10)));
                break;
            case"DDD":
            case"DDDD":
                null != b && (c._dayOfYear = t(b));
                break;
            case"YY":
                e[ob] = ib.parseTwoDigitYear(b);
                break;
            case"YYYY":
            case"YYYYY":
            case"YYYYYY":
                e[ob] = t(b);
                break;
            case"a":
            case"A":
                c._isPm = E(c._l).isPM(b);
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                e[rb] = t(b);
                break;
            case"m":
            case"mm":
                e[sb] = t(b);
                break;
            case"s":
            case"ss":
                e[tb] = t(b);
                break;
            case"S":
            case"SS":
            case"SSS":
            case"SSSS":
                e[ub] = t(1e3 * ("0." + b));
                break;
            case"X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case"Z":
            case"ZZ":
                c._useUTC = !0, c._tzm = K(b);
                break;
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"d":
            case"dd":
            case"ddd":
            case"dddd":
            case"e":
            case"E":
                a = a.substr(0, 1);
            case"gg":
            case"gggg":
            case"GG":
            case"GGGG":
            case"GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
        }
    }

    function M(a) {
        var b, c, d, e, f, g, h, i, j, k, l = [];
        if( !a._d ) {
            for( d = O(a), a._w && null == a._a[qb] && null == a._a[pb] && (f = function(b) {
                var c = parseInt(b, 10);
                return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ob] ? ib().weekYear() : a._a[ob]
            }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = _(f(g.GG), g.W || 1, g.E, 4, 1) : (i = E(a._l), j = null != g.d ? X(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = _(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[ob] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ob] ? d[ob] : a._a[ob], a._dayOfYear > w(e) && (a._pf._overflowDayOfYear = !0), c = W(e, 0, a._dayOfYear), a._a[pb] = c.getUTCMonth(), a._a[qb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b )a._a[b] = l[b] = d[b];
            for( ; 7 > b; b++ )a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            l[rb] += t((a._tzm || 0) / 60), l[sb] += t((a._tzm || 0) % 60), a._d = (a._useUTC ? W : V).apply(null, l)
        }
    }

    function N(a) {
        var b;
        a._d || (b = r(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], M(a))
    }

    function O(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function P(a) {
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = E(a._l), h = "" + a._i, i = h.length, j = 0;
        for( d = I(a._f, g).match(Bb) || [], b = 0; b < d.length; b++ )e = d[b], c = (h.match(J(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), cc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), L(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[rb] < 12 && (a._a[rb] += 12), a._isPm === !1 && 12 === a._a[rb] && (a._a[rb] = 0), M(a), y(a)
    }

    function Q(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        })
    }

    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function S(a) {
        var c, d, e, f, g;
        if( 0 === a._f.length )return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
        for( f = 0; f < a._f.length; f++ )g = 0, c = i({}, a), c._pf = b(), c._f = a._f[f], P(c), z(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, (null == e || e > g) && (e = g, d = c));
        i(a, d || c)
    }

    function T(a) {
        var b, c, d = a._i, e = Tb.exec(d);
        if( e ) {
            for( a._pf.iso = !0, b = 0, c = Vb.length; c > b; b++ )if( Vb[b][1].exec(d) ) {
                a._f = Vb[b][0] + (e[6] || " ");
                break
            }
            for( b = 0, c = Wb.length; c > b; b++ )if( Wb[b][1].exec(d) ) {
                a._f += Wb[b][0];
                break
            }
            d.match(Jb) && (a._f += "Z"), P(a)
        } else ib.createFromInputFallback(a)
    }

    function U(b) {
        var c = b._i, d = yb.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? T(b) : n(c) ? (b._a = c.slice(0), M(b)) : o(c) ? b._d = new Date(+c) : "object" == typeof c ? N(b) : "number" == typeof c ? b._d = new Date(c) : ib.createFromInputFallback(b)
    }

    function V(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function W(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function X(a, b) {
        if( "string" == typeof a )if( isNaN(a) ) {
            if( a = b.weekdaysParse(a), "number" != typeof a )return null
        } else a = parseInt(a, 10);
        return a
    }

    function Y(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function Z(a, b, c) {
        var d = nb(Math.abs(a) / 1e3), e = nb(d / 60), f = nb(e / 60), g = nb(f / 24), h = nb(g / 365), i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", nb(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, i[4] = c, Y.apply({}, i)
    }

    function $(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = ib(a).add("d", f), {week: Math.ceil(d.dayOfYear() / 7), year: d.year()}
    }

    function _(a, b, c, d, e) {
        var f, g, h = W(a, 0, 1).getUTCDay();
        return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : w(a - 1) + g}
    }

    function ab(b) {
        var c = b._i, d = b._f;
        return null === c || d === a && "" === c ? ib.invalid({nullInput: !0}) : ("string" == typeof c && (b._i = c = E().preparse(c)), ib.isMoment(c) ? (b = j(c), b._d = new Date(+c._d)) : d ? n(d) ? S(b) : P(b) : U(b), new g(b))
    }

    function bb(a, b) {
        var c;
        return"string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), u(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function cb(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function db(a, b, c) {
        return"Month" === b ? bb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function eb(a, b) {
        return function(c) {
            return null != c ? (db(this, a, c), ib.updateOffset(this, b), this) : cb(this, a)
        }
    }

    function fb(a) {
        ib.duration.fn[a] = function() {
            return this._data[a]
        }
    }

    function gb(a, b) {
        ib.duration.fn["as" + a] = function() {
            return+this / b
        }
    }

    function hb(a) {
        "undefined" == typeof ender && (jb = mb.moment, mb.moment = a ? c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ib) : ib)
    }

    for( var ib, jb, kb, lb = "2.6.0", mb = "undefined" != typeof global ? global : this, nb = Math.round, ob = 0, pb = 1, qb = 2, rb = 3, sb = 4, tb = 5, ub = 6, vb = {}, wb = {_isAMomentObject: null, _i: null, _f: null, _l: null, _strict: null, _isUTC: null, _offset: null, _pf: null, _lang: null}, xb = "undefined" != typeof module && module.exports, yb = /^\/?Date\((\-?\d+)/i, zb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ab = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Bb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Cb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Db = /\d\d?/, Eb = /\d{1,3}/, Fb = /\d{1,4}/, Gb = /[+\-]?\d{1,6}/, Hb = /\d+/, Ib = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Jb = /Z|[\+\-]\d\d:?\d\d/gi, Kb = /T/i, Lb = /[\+\-]?\d+(\.\d{1,3})?/, Mb = /\d{1,2}/, Nb = /\d/, Ob = /\d\d/, Pb = /\d{3}/, Qb = /\d{4}/, Rb = /[+-]?\d{6}/, Sb = /[+-]?\d+/, Tb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ub = "YYYY-MM-DDTHH:mm:ssZ", Vb = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
    ], Wb = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], Xb = /([\+\-]|\d\d)/gi, Yb = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}), Zb = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear"}, $b = {dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear"}, _b = {}, ac = "DDD w W M D d".split(" "), bc = "M D H h m s w W".split(" "), cc = {M: function() {
        return this.month() + 1
    }, MMM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : function(a) {
        return this.lang().monthsShort(this, a)
    }, MMMM                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   : function(a) {
        return this.lang().months(this, a)
    }, D                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.date()
    }, DDD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : function() {
        return this.dayOfYear()
    }, d                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.day()
    }, dd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : function(a) {
        return this.lang().weekdaysMin(this, a)
    }, ddd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : function(a) {
        return this.lang().weekdaysShort(this, a)
    }, dddd                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   : function(a) {
        return this.lang().weekdays(this, a)
    }, w                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.week()
    }, W                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.isoWeek()
    }, YY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : function() {
        return l(this.year() % 100, 2)
    }, YYYY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   : function() {
        return l(this.year(), 4)
    }, YYYYY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : function() {
        return l(this.year(), 5)
    }, YYYYYY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 : function() {
        var a = this.year(), b = a >= 0 ? "+" : "-";
        return b + l(Math.abs(a), 6)
    }, gg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : function() {
        return l(this.weekYear() % 100, 2)
    }, gggg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   : function() {
        return l(this.weekYear(), 4)
    }, ggggg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : function() {
        return l(this.weekYear(), 5)
    }, GG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : function() {
        return l(this.isoWeekYear() % 100, 2)
    }, GGGG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   : function() {
        return l(this.isoWeekYear(), 4)
    }, GGGGG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : function() {
        return l(this.isoWeekYear(), 5)
    }, e                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.weekday()
    }, E                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.isoWeekday()
    }, a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.lang().meridiem(this.hours(), this.minutes(), !0)
    }, A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.lang().meridiem(this.hours(), this.minutes(), !1)
    }, H                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.hours()
    }, h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.hours() % 12 || 12
    }, m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.minutes()
    }, s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.seconds()
    }, S                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return t(this.milliseconds() / 100)
    }, SS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : function() {
        return l(t(this.milliseconds() / 10), 2)
    }, SSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : function() {
        return l(this.milliseconds(), 3)
    }, SSSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   : function() {
        return l(this.milliseconds(), 3)
    }, Z                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + ":" + l(t(a) % 60, 2)
    }, ZZ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : function() {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + l(t(a / 60), 2) + l(t(a) % 60, 2)
    }, z                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.zoneAbbr()
    }, zz                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     : function() {
        return this.zoneName()
    }, X                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.unix()
    }, Q                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : function() {
        return this.quarter()
    }}, dc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; ac.length; )kb = ac.pop(), cc[kb + "o"] = e(cc[kb], kb);
    for( ; bc.length; )kb = bc.pop(), cc[kb + kb] = d(cc[kb], 2);
    for( cc.DDDD = d(cc.DDD, 3), i(f.prototype, {set: function(a) {
        var b, c;
        for( c in a )b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
    }, _months                                      : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function(a) {
        return this._months[a.month()]
    }, _monthsShort                                 : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function(a) {
        return this._monthsShort[a.month()]
    }, monthsParse                                  : function(a) {
        var b, c, d;
        for( this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++ )if( this._monthsParse[b] || (c = ib.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a) )return b
    }, _weekdays                                    : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function(a) {
        return this._weekdays[a.day()]
    }, _weekdaysShort                               : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function(a) {
        return this._weekdaysShort[a.day()]
    }, _weekdaysMin                                 : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function(a) {
        return this._weekdaysMin[a.day()]
    }, weekdaysParse                                : function(a) {
        var b, c, d;
        for( this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++ )if( this._weekdaysParse[b] || (c = ib([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a) )return b
    }, _longDateFormat                              : {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"}, longDateFormat: function(a) {
        var b = this._longDateFormat[a];
        return!b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a] = b), b
    }, isPM                                         : function(a) {
        return"p" === (a + "").toLowerCase().charAt(0)
    }, _meridiemParse                               : /[ap]\.?m?\.?/i, meridiem: function(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }, _calendar                                    : {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, calendar: function(a, b) {
        var c = this._calendar[a];
        return"function" == typeof c ? c.apply(b) : c
    }, _relativeTime                                : {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, relativeTime: function(a, b, c, d) {
        var e = this._relativeTime[c];
        return"function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }, pastFuture                                   : function(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return"function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }, ordinal                                      : function(a) {
        return this._ordinal.replace("%d", a)
    }, _ordinal                                     : "%d", preparse: function(a) {
        return a
    }, postformat                                   : function(a) {
        return a
    }, week                                         : function(a) {
        return $(a, this._week.dow, this._week.doy).week
    }, _week                                        : {dow: 0, doy: 6}, _invalidDate: "Invalid date", invalidDate: function() {
        return this._invalidDate
    }}), ib = function(c, d, e, f) {
        var g;
        return"boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), ab(g)
    }, ib.suppressDeprecationWarnings = !1, ib.createFromInputFallback = c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i)
    }), ib.utc = function(c, d, e, f) {
        var g;
        return"boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), ab(g).utc()
    }, ib.unix = function(a) {
        return ib(1e3 * a)
    }, ib.duration = function(a, b) {
        var c, d, e, f = a, g = null;
        return ib.isDuration(a) ? f = {ms: a._milliseconds, d: a._days, M: a._months} : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = zb.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {y: 0, d: t(g[qb]) * c, h: t(g[rb]) * c, m: t(g[sb]) * c, s: t(g[tb]) * c, ms: t(g[ub]) * c}) : (g = Ab.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return(isNaN(b) ? 0 : b) * c
        }, f = {y: e(g[2]), M: e(g[3]), d: e(g[4]), h: e(g[5]), m: e(g[6]), s: e(g[7]), w: e(g[8])}), d = new h(f), ib.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
    }, ib.version = lb, ib.defaultFormat = Ub, ib.momentProperties = wb, ib.updateOffset = function() {
    }, ib.lang = function(a, b) {
        var c;
        return a ? (b ? C(A(a), b) : null === b ? (D(a), a = "en") : vb[a] || E(a), c = ib.duration.fn._lang = ib.fn._lang = E(a), c._abbr) : ib.fn._lang._abbr
    }, ib.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), E(a)
    }, ib.isMoment = function(a) {
        return a instanceof g || null != a && a.hasOwnProperty("_isAMomentObject")
    }, ib.isDuration = function(a) {
        return a instanceof h
    }, kb = dc.length - 1; kb >= 0; --kb )s(dc[kb]);
    ib.normalizeUnits = function(a) {
        return q(a)
    }, ib.invalid = function(a) {
        var b = ib.utc(0 / 0);
        return null != a ? i(b._pf, a) : b._pf.userInvalidated = !0, b
    }, ib.parseZone = function() {
        return ib.apply(null, arguments).parseZone()
    }, ib.parseTwoDigitYear = function(a) {
        return t(a) + (t(a) > 68 ? 1900 : 2e3)
    }, i(ib.fn = g.prototype, {clone: function() {
        return ib(this)
    }, valueOf                      : function() {
        return+this._d + 6e4 * (this._offset || 0)
    }, unix                         : function() {
        return Math.floor(+this / 1e3)
    }, toString                     : function() {
        return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, toDate                       : function() {
        return this._offset ? new Date(+this) : this._d
    }, toISOString                  : function() {
        var a = ib(this).utc();
        return 0 < a.year() && a.year() <= 9999 ? H(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : H(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }, toArray                      : function() {
        var a = this;
        return[a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
    }, isValid                      : function() {
        return z(this)
    }, isDSTShifted                 : function() {
        return this._a ? this.isValid() && p(this._a, (this._isUTC ? ib.utc(this._a) : ib(this._a)).toArray()) > 0 : !1
    }, parsingFlags                 : function() {
        return i({}, this._pf)
    }, invalidAt                    : function() {
        return this._pf.overflow
    }, utc                          : function() {
        return this.zone(0)
    }, local                        : function() {
        return this.zone(0), this._isUTC = !1, this
    }, format                       : function(a) {
        var b = H(this, a || ib.defaultFormat);
        return this.lang().postformat(b)
    }, add                          : function(a, b) {
        var c;
        return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, 1), this
    }, subtract                     : function(a, b) {
        var c;
        return c = "string" == typeof a ? ib.duration(+b, a) : ib.duration(a, b), m(this, c, -1), this
    }, diff                         : function(a, b, c) {
        var d, e, f = B(a, this), g = 6e4 * (this.zone() - f.zone());
        return b = q(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - ib(this).startOf("month") - (f - ib(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - ib(this).startOf("month").zone() - (f.zone() - ib(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : k(e)
    }, from                         : function(a, b) {
        return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
    }, fromNow                      : function(a) {
        return this.from(ib(), a)
    }, calendar                     : function() {
        var a = B(ib(), this).startOf("day"), b = this.diff(a, "days", !0), c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
        return this.format(this.lang().calendar(c, this))
    }, isLeapYear                   : function() {
        return x(this.year())
    }, isDST                        : function() {
        return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
    }, day                          : function(a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = X(a, this.lang()), this.add({d: a - b})) : b
    }, month                        : eb("Month", !0), startOf: function(a) {
        switch( a = q(a) ) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return"week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }, endOf                        : function(a) {
        return a = q(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
    }, isAfter                      : function(a, b) {
        return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +ib(a).startOf(b)
    }, isBefore                     : function(a, b) {
        return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +ib(a).startOf(b)
    }, isSame                       : function(a, b) {
        return b = b || "ms", +this.clone().startOf(b) === +B(a, this).startOf(b)
    }, min                          : function(a) {
        return a = ib.apply(null, arguments), this > a ? this : a
    }, max                          : function(a) {
        return a = ib.apply(null, arguments), a > this ? this : a
    }, zone                         : function(a, b) {
        var c = this._offset || 0;
        return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = K(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? m(this, ib.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ib.updateOffset(this, !0), this._changeInProgress = null)), this)
    }, zoneAbbr                     : function() {
        return this._isUTC ? "UTC" : ""
    }, zoneName                     : function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, parseZone                    : function() {
        return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
    }, hasAlignedHourOffset         : function(a) {
        return a = a ? ib(a).zone() : 0, (this.zone() - a) % 60 === 0
    }, daysInMonth                  : function() {
        return u(this.year(), this.month())
    }, dayOfYear                    : function(a) {
        var b = nb((ib(this).startOf("day") - ib(this).startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add("d", a - b)
    }, quarter                      : function(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }, weekYear                     : function(a) {
        var b = $(this, this.lang()._week.dow, this.lang()._week.doy).year;
        return null == a ? b : this.add("y", a - b)
    }, isoWeekYear                  : function(a) {
        var b = $(this, 1, 4).year;
        return null == a ? b : this.add("y", a - b)
    }, week                         : function(a) {
        var b = this.lang().week(this);
        return null == a ? b : this.add("d", 7 * (a - b))
    }, isoWeek                      : function(a) {
        var b = $(this, 1, 4).week;
        return null == a ? b : this.add("d", 7 * (a - b))
    }, weekday                      : function(a) {
        var b = (this.day() + 7 - this.lang()._week.dow) % 7;
        return null == a ? b : this.add("d", a - b)
    }, isoWeekday                   : function(a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    }, isoWeeksInYear               : function() {
        return v(this.year(), 1, 4)
    }, weeksInYear                  : function() {
        var a = this._lang._week;
        return v(this.year(), a.dow, a.doy)
    }, get                          : function(a) {
        return a = q(a), this[a]()
    }, set                          : function(a, b) {
        return a = q(a), "function" == typeof this[a] && this[a](b), this
    }, lang                         : function(b) {
        return b === a ? this._lang : (this._lang = E(b), this)
    }}), ib.fn.millisecond = ib.fn.milliseconds = eb("Milliseconds", !1), ib.fn.second = ib.fn.seconds = eb("Seconds", !1), ib.fn.minute = ib.fn.minutes = eb("Minutes", !1), ib.fn.hour = ib.fn.hours = eb("Hours", !0), ib.fn.date = eb("Date", !0), ib.fn.dates = c("dates accessor is deprecated. Use date instead.", eb("Date", !0)), ib.fn.year = eb("FullYear", !0), ib.fn.years = c("years accessor is deprecated. Use year instead.", eb("FullYear", !0)), ib.fn.days = ib.fn.day, ib.fn.months = ib.fn.month, ib.fn.weeks = ib.fn.week, ib.fn.isoWeeks = ib.fn.isoWeek, ib.fn.quarters = ib.fn.quarter, ib.fn.toJSON = ib.fn.toISOString, i(ib.duration.fn = h.prototype, {_bubble: function() {
        var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, h = this._data;
        h.milliseconds = e % 1e3, a = k(e / 1e3), h.seconds = a % 60, b = k(a / 60), h.minutes = b % 60, c = k(b / 60), h.hours = c % 24, f += k(c / 24), h.days = f % 30, g += k(f / 30), h.months = g % 12, d = k(g / 12), h.years = d
    }, weeks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : function() {
        return k(this.days() / 7)
    }, valueOf                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              : function() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * t(this._months / 12)
    }, humanize                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             : function(a) {
        var b = +this, c = Z(b, !a, this.lang());
        return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
    }, add                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : function(a, b) {
        var c = ib.duration(a, b);
        return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
    }, subtract                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             : function(a, b) {
        var c = ib.duration(a, b);
        return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
    }, get                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : function(a) {
        return a = q(a), this[a.toLowerCase() + "s"]()
    }, as                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   : function(a) {
        return a = q(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
    }, lang                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 : ib.fn.lang, toIsoString: function() {
        var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
    }});
    for( kb in Yb )Yb.hasOwnProperty(kb) && (gb(kb, Yb[kb]), fb(kb.toLowerCase()));
    gb("Weeks", 6048e5), ib.duration.fn.asMonths = function() {
        return(+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, ib.lang("en", {ordinal: function(a) {
        var b = a % 10, c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
        return a + c
    }}), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ar-ma", {months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L"}, relativeTime: {future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª"}, week: {dow: 6, doy: 12}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ar", {months: "ÙŠÙ†Ø§ÙŠØ±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_ÙØ¨Ø±Ø§ÙŠØ±/ Ø´Ø¨Ø§Ø·_Ù…Ø§Ø±Ø³/ Ø¢Ø°Ø§Ø±_Ø£Ø¨Ø±ÙŠÙ„/ Ù†ÙŠØ³Ø§Ù†_Ù…Ø§ÙŠÙˆ/ Ø£ÙŠØ§Ø±_ÙŠÙˆÙ†ÙŠÙˆ/ Ø­Ø²ÙŠØ±Ø§Ù†_ÙŠÙˆÙ„ÙŠÙˆ/ ØªÙ…ÙˆØ²_Ø£ØºØ³Ø·Ø³/ Ø¢Ø¨_Ø³Ø¨ØªÙ…Ø¨Ø±/ Ø£ÙŠÙ„ÙˆÙ„_Ø£ÙƒØªÙˆØ¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„_Ù†ÙˆÙÙ…Ø¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_Ø¯ÙŠØ³Ù…Ø¨Ø±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„".split("_"), monthsShort: "ÙŠÙ†Ø§ÙŠØ±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_ÙØ¨Ø±Ø§ÙŠØ±/ Ø´Ø¨Ø§Ø·_Ù…Ø§Ø±Ø³/ Ø¢Ø°Ø§Ø±_Ø£Ø¨Ø±ÙŠÙ„/ Ù†ÙŠØ³Ø§Ù†_Ù…Ø§ÙŠÙˆ/ Ø£ÙŠØ§Ø±_ÙŠÙˆÙ†ÙŠÙˆ/ Ø­Ø²ÙŠØ±Ø§Ù†_ÙŠÙˆÙ„ÙŠÙˆ/ ØªÙ…ÙˆØ²_Ø£ØºØ³Ø·Ø³/ Ø¢Ø¨_Ø³Ø¨ØªÙ…Ø¨Ø±/ Ø£ÙŠÙ„ÙˆÙ„_Ø£ÙƒØªÙˆØ¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„_Ù†ÙˆÙÙ…Ø¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_Ø¯ÙŠØ³Ù…Ø¨Ø±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L"}, relativeTime: {future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª"}, week: {dow: 6, doy: 12}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("bg", {months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"), monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"), weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"), weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"), weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), longDateFormat: {LT: "H:mm", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Ð”Ð½ÐµÑ Ð²] LT", nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT", nextWeek: "dddd [Ð²] LT", lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                case 3:
                case 6:
                    return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          : "L"}, relativeTime: {future: "ÑÐ»ÐµÐ´ %s", past: "Ð¿Ñ€ÐµÐ´Ð¸ %s", s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸", m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸", h: "Ñ‡Ð°Ñ", hh: "%d Ñ‡Ð°ÑÐ°", d: "Ð´ÐµÐ½", dd: "%d Ð´Ð½Ð¸", M: "Ð¼ÐµÑÐµÑ†", MM: "%d Ð¼ÐµÑÐµÑ†Ð°", y: "Ð³Ð¾Ð´Ð¸Ð½Ð°", yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"}, ordinal: function(a) {
            var b = a % 10, c = a % 100;
            return 0 === a ? a + "-ÐµÐ²" : 0 === c ? a + "-ÐµÐ½" : c > 10 && 20 > c ? a + "-Ñ‚Ð¸" : 1 === b ? a + "-Ð²Ð¸" : 2 === b ? a + "-Ñ€Ð¸" : 7 === b || 8 === b ? a + "-Ð¼Ð¸" : a + "-Ñ‚Ð¸"
        }, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(b) {
        function c(a, b, c) {
            var d = {mm: "munutenn", MM: "miz", dd: "devezh"};
            return a + " " + f(d[c], a)
        }

        function d(a) {
            switch( e(a) ) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return a + " bloaz";
                default:
                    return a + " vloaz"
            }
        }

        function e(a) {
            return a > 9 ? e(a % 10) : a
        }

        function f(a, b) {
            return 2 === b ? g(a) : a
        }

        function g(b) {
            var c = {m: "v", b: "v", d: "z"};
            return c[b.charAt(0)] === a ? b : c[b.charAt(0)] + b.substring(1)
        }

        return b.lang("br", {months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), longDateFormat: {LT: "h[e]mm A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY LT", LLLL: "dddd, D [a viz] MMMM YYYY LT"}, calendar: {sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L"}, relativeTime: {future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoÃ¹", m: "ur vunutenn", mm: c, h: "un eur", hh: "%d eur", d: "un devezh", dd: c, M: "ur miz", MM: c, y: "ur bloaz", yy: d}, ordinal: function(a) {
            var b = 1 === a ? "aÃ±" : "vet";
            return a + b
        }, week                    : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c) {
            var d = a + " ";
            switch( c ) {
                case"m":
                    return b ? "jedna minuta" : "jedne minute";
                case"mm":
                    return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
                case"h":
                    return b ? "jedan sat" : "jednog sata";
                case"hh":
                    return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
                case"dd":
                    return d += 1 === a ? "dan" : "dana";
                case"MM":
                    return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
                case"yy":
                    return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
            }
        }

        return a.lang("bs", {months: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"), longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[u] [nedjelju] [u] LT";
                case 3:
                    return"[u] [srijedu] [u] LT";
                case 6:
                    return"[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[u] dddd [u] LT"
            }
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              : "[juÄer u] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                case 3:
                    return"[proÅ¡lu] dddd [u] LT";
                case 6:
                    return"[proÅ¡le] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[proÅ¡li] dddd [u] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             : "L"}, relativeTime: {future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ca", {months: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"), weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: function() {
            return"[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        }, nextDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : function() {
            return"[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        }, nextWeek                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               : function() {
            return"dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : function() {
            return"[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        }, lastWeek                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               : function() {
            return"[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               : "L"}, relativeTime: {future: "en %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a) {
            return a > 1 && 5 > a && 1 !== ~~(a / 10)
        }

        function c(a, c, d, e) {
            var f = a + " ";
            switch( d ) {
                case"s":
                    return c || e ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                case"m":
                    return c ? "minuta" : e ? "minutu" : "minutou";
                case"mm":
                    return c || e ? f + (b(a) ? "minuty" : "minut") : f + "minutami";
                    break;
                case"h":
                    return c ? "hodina" : e ? "hodinu" : "hodinou";
                case"hh":
                    return c || e ? f + (b(a) ? "hodiny" : "hodin") : f + "hodinami";
                    break;
                case"d":
                    return c || e ? "den" : "dnem";
                case"dd":
                    return c || e ? f + (b(a) ? "dny" : "dnÃ­") : f + "dny";
                    break;
                case"M":
                    return c || e ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                case"MM":
                    return c || e ? f + (b(a) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : f + "mÄ›sÃ­ci";
                    break;
                case"y":
                    return c || e ? "rok" : "rokem";
                case"yy":
                    return c || e ? f + (b(a) ? "roky" : "let") : f + "lety"
            }
        }

        var d = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"), e = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_");
        return a.lang("cs", {months: d, monthsShort: e, monthsParse: function(a, b) {
            var c, d = [];
            for( c = 0; 12 > c; c++ )d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
            return d
        }(d, e), weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"), weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"), weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"), longDateFormat: {LT: "H.mm", L: "DD.Â MM.Â YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT"}, calendar: {sameDay: "[dnes v] LT", nextDay: "[zÃ­tra v] LT", nextWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[v nedÄ›li v] LT";
                case 1:
                case 2:
                    return"[v] dddd [v] LT";
                case 3:
                    return"[ve stÅ™edu v] LT";
                case 4:
                    return"[ve Ätvrtek v] LT";
                case 5:
                    return"[v pÃ¡tek v] LT";
                case 6:
                    return"[v sobotu v] LT"
            }
        }, lastDay                                                                                                                                                                                                                                                                                                                                       : "[vÄera v] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[minulou nedÄ›li v] LT";
                case 1:
                case 2:
                    return"[minulÃ©] dddd [v] LT";
                case 3:
                    return"[minulou stÅ™edu v] LT";
                case 4:
                case 5:
                    return"[minulÃ½] dddd [v] LT";
                case 6:
                    return"[minulou sobotu v] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                      : "L"}, relativeTime: {future: "za %s", past: "pÅ™ed %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("cv", {months: "ÐºÄƒÑ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€ÄƒÑ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€Ð»Ð°_Ð°Ð²ÄƒÐ½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"), monthsShort: "ÐºÄƒÑ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€_Ð°Ð²_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"), weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÄ•Ã§Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÄƒÐ¼Ð°Ñ‚ÐºÑƒÐ½".split("_"), weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÄ•Ã§_ÑÑ€Ð½_ÑˆÄƒÐ¼".split("_"), weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÃ§_ÑÑ€_ÑˆÐ¼".split("_"), longDateFormat: {LT: "HH:mm", L: "DD-MM-YYYY", LL: "YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•]", LLL: "YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT", LLLL: "dddd, YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT"}, calendar: {sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", lastDay: "[Ä”Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", nextWeek: "[Ã‡Ð¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ä•] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", sameElse: "L"}, relativeTime: {future: function(a) {
            var b = /ÑÐµÑ…ÐµÑ‚$/i.exec(a) ? "Ñ€ÐµÐ½" : /Ã§ÑƒÐ»$/i.exec(a) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½";
            return a + b
        }, past                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : "%s ÐºÐ°ÑÐ»Ð»Ð°", s: "Ð¿Ä•Ñ€-Ð¸Ðº Ã§ÐµÐºÐºÑƒÐ½Ñ‚", m: "Ð¿Ä•Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚", h: "Ð¿Ä•Ñ€ ÑÐµÑ…ÐµÑ‚", hh: "%d ÑÐµÑ…ÐµÑ‚", d: "Ð¿Ä•Ñ€ ÐºÑƒÐ½", dd: "%d ÐºÑƒÐ½", M: "Ð¿Ä•Ñ€ ÑƒÐ¹ÄƒÑ…", MM: "%d ÑƒÐ¹ÄƒÑ…", y: "Ð¿Ä•Ñ€ Ã§ÑƒÐ»", yy: "%d Ã§ÑƒÐ»"}, ordinal: "%d-Ð¼Ä•Ñˆ", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("cy", {months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L"}, relativeTime: {future: "mewn %s", past: "%s yn Ã l", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd"}, ordinal: function(a) {
            var b = a, c = "", d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
            return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
        }, week                    : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("da", {months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"), weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"), weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D. MMMM, YYYY LT"}, calendar: {sameDay: "[I dag kl.] LT", nextDay: "[I morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[I gÃ¥r kl.] LT", lastWeek: "[sidste] dddd [kl] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "%s siden", s: "fÃ¥ sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en mÃ¥ned", MM: "%d mÃ¥neder", y: "et Ã¥r", yy: "%d Ã¥r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c) {
            var d = {m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"]};
            return b ? d[c][0] : d[c][1]
        }

        return a.lang("de", {months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: {LT: "HH:mm [Uhr]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[Heute um] LT", sameElse: "L", nextDay: "[Morgen um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gestern um] LT", lastWeek: "[letzten] dddd [um] LT"}, relativeTime: {future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: b, mm: "%d Minuten", h: b, hh: "%d Stunden", d: b, dd: b, M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("el", {monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"), monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"), months: function(a, b) {
            return/D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
        }, monthsShort                         : "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"), weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"), weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"), weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"), meridiem: function(a, b, c) {
            return a > 11 ? c ? "Î¼Î¼" : "ÎœÎœ" : c ? "Ï€Î¼" : "Î Îœ"
        }, longDateFormat                      : {LT: "h:mm A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendarEl: {sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT", nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Î§Î¸ÎµÏ‚ {}] LT", lastWeek: "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT", sameElse: "L"}, calendar: function(a, b) {
            var c = this._calendarEl[a], d = b && b.hours();
            return c.replace("{}", d % 12 === 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
        }, relativeTime                        : {future: "ÏƒÎµ %s", past: "%s Ï€ÏÎ¹Î½", s: "Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±", m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ", mm: "%d Î»ÎµÏ€Ï„Î¬", h: "Î¼Î¯Î± ÏŽÏÎ±", hh: "%d ÏŽÏÎµÏ‚", d: "Î¼Î¯Î± Î¼Î­ÏÎ±", dd: "%d Î¼Î­ÏÎµÏ‚", M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚", MM: "%d Î¼Î®Î½ÎµÏ‚", y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚", yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"}, ordinal: function(a) {
            return a + "Î·"
        }, week                                : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("en-au", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: {LT: "h:mm A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, ordinal: function(a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }, week                       : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("en-ca", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: {LT: "h:mm A", L: "YYYY-MM-DD", LL: "D MMMM, YYYY", LLL: "D MMMM, YYYY LT", LLLL: "dddd, D MMMM, YYYY LT"}, calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, ordinal: function(a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("en-gb", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, ordinal: function(a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }, week                       : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("eo", {months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"), weekdays: "DimanÄ‰o_Lundo_Mardo_Merkredo_Ä´aÅ­do_Vendredo_Sabato".split("_"), weekdaysShort: "Dim_Lun_Mard_Merk_Ä´aÅ­_Ven_Sab".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Ä´a_Ve_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "D[-an de] MMMM, YYYY", LLL: "D[-an de] MMMM, YYYY LT", LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"}, meridiem: function(a, b, c) {
            return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."
        }, calendar                : {sameDay: "[HodiaÅ­ je] LT", nextDay: "[MorgaÅ­ je] LT", nextWeek: "dddd [je] LT", lastDay: "[HieraÅ­ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L"}, relativeTime: {future: "je %s", past: "antaÅ­ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj"}, ordinal: "%da", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), c = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        return a.lang("es", {months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(a, d) {
            return/-MMM-/.test(d) ? c[a.month()] : b[a.month()]
        }, weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"), weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"), weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_SÃ¡".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D [de] MMMM [del] YYYY", LLL: "D [de] MMMM [del] YYYY LT", LLLL: "dddd, D [de] MMMM [del] YYYY LT"}, calendar: {sameDay: function() {
            return"[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        }, nextDay                                                                                                                                                                                                                                                                                                                                                                     : function() {
            return"[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        }, nextWeek                                                                                                                                                                                                                                                                                                                                                                    : function() {
            return"dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                     : function() {
            return"[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        }, lastWeek                                                                                                                                                                                                                                                                                                                                                                    : function() {
            return"[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                    : "L"}, relativeTime: {future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un aÃ±o", yy: "%d aÃ±os"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c, d) {
            var e = {s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"], m: ["Ã¼he minuti", "Ã¼ks minut"], mm: [a + " minuti", a + " minutit"], h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"], hh: [a + " tunni", a + " tundi"], d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"], M: ["kuu aja", "kuu aega", "Ã¼ks kuu"], MM: [a + " kuu", a + " kuud"], y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"], yy: [a + " aasta", a + " aastat"]};
            return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1]
        }

        return a.lang("et", {months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: {LT: "H:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[TÃ¤na,] LT", nextDay: "[Homme,] LT", nextWeek: "[JÃ¤rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L"}, relativeTime: {future: "%s pÃ¤rast", past: "%s tagasi", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: "%d pÃ¤eva", M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("eu", {months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] LT", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] LT", llll: "ddd, YYYY[ko] MMM D[a] LT"}, calendar: {sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L"}, relativeTime: {future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte"}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = {1: "Û±", 2: "Û²", 3: "Û³", 4: "Û´", 5: "Ûµ", 6: "Û¶", 7: "Û·", 8: "Û¸", 9: "Û¹", 0: "Û°"}, c = {"Û±": "1", "Û²": "2", "Û³": "3", "Û´": "4", "Ûµ": "5", "Û¶": "6", "Û·": "7", "Û¸": "8", "Û¹": "9", "Û°": "0"};
        return a.lang("fa", {months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"), monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"), weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"), weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"), weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, meridiem: function(a) {
            return 12 > a ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
        }, calendar                : {sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT", nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT", nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT", lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT", lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT", sameElse: "L"}, relativeTime: {future: "Ø¯Ø± %s", past: "%s Ù¾ÛŒØ´", s: "Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡", m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡", mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡", h: "ÛŒÚ© Ø³Ø§Ø¹Øª", hh: "%d Ø³Ø§Ø¹Øª", d: "ÛŒÚ© Ø±ÙˆØ²", dd: "%d Ø±ÙˆØ²", M: "ÛŒÚ© Ù…Ø§Ù‡", MM: "%d Ù…Ø§Ù‡", y: "ÛŒÚ© Ø³Ø§Ù„", yy: "%d Ø³Ø§Ù„"}, preparse: function(a) {
            return a.replace(/[Û°-Û¹]/g,function(a) {
                return c[a]
            }).replace(/ØŒ/g, ",")
        }, postformat              : function(a) {
            return a.replace(/\d/g,function(a) {
                return b[a]
            }).replace(/,/g, "ØŒ")
        }, ordinal                 : "%dÙ…", week: {dow: 6, doy: 12}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, d, e) {
            var f = "";
            switch( d ) {
                case"s":
                    return e ? "muutaman sekunnin" : "muutama sekunti";
                case"m":
                    return e ? "minuutin" : "minuutti";
                case"mm":
                    f = e ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return e ? "tunnin" : "tunti";
                case"hh":
                    f = e ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return e ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                case"dd":
                    f = e ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                    break;
                case"M":
                    return e ? "kuukauden" : "kuukausi";
                case"MM":
                    f = e ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return e ? "vuoden" : "vuosi";
                case"yy":
                    f = e ? "vuoden" : "vuotta"
            }
            return f = c(a, e) + " " + f
        }

        function c(a, b) {
            return 10 > a ? b ? e[a] : d[a] : a
        }

        var d = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "), e = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", d[7], d[8], d[9]];
        return a.lang("fi", {months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: {LT: "HH.mm", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] LT", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] LT", llll: "ddd, Do MMM YYYY, [klo] LT"}, calendar: {sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L"}, relativeTime: {future: "%s pÃ¤Ã¤stÃ¤", past: "%s sitten", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("fo", {months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"), weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D. MMMM, YYYY LT"}, calendar: {sameDay: "[Ã dag kl.] LT", nextDay: "[Ã morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Ã gjÃ¡r kl.] LT", lastWeek: "[sÃ­Ã°stu] dddd [kl] LT", sameElse: "L"}, relativeTime: {future: "um %s", past: "%s sÃ­Ã°ani", s: "fÃ¡ sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tÃ­mi", hh: "%d tÃ­mar", d: "ein dagur", dd: "%d dagar", M: "ein mÃ¡naÃ°i", MM: "%d mÃ¡naÃ°ir", y: "eitt Ã¡r", yy: "%d Ã¡r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("fr-ca", {months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"), monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Aujourd'hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L"}, relativeTime: {future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans"}, ordinal: function(a) {
            return a + (1 === a ? "er" : "")
        }})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("fr", {months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"), monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Aujourd'hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L"}, relativeTime: {future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans"}, ordinal: function(a) {
            return a + (1 === a ? "er" : "")
        }, week                    : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("gl", {months: "Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"), monthsShort: "Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"), weekdays: "Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"), weekdaysShort: "Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"), weekdaysMin: "Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: function() {
            return"[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
        }, nextDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : function() {
            return"[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
        }, nextWeek                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       : function() {
            return"dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : function() {
            return"[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
        }, lastWeek                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       : function() {
            return"[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       : "L"}, relativeTime: {future: function(a) {
            return"uns segundos" === a ? "nuns segundos" : "en " + a
        }, past                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos"}, ordinal: "%dÂº", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("he", {months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"), monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"), weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"), weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"), weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D [×‘]MMMM YYYY", LLL: "D [×‘]MMMM YYYY LT", LLLL: "dddd, D [×‘]MMMM YYYY LT", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT"}, calendar: {sameDay: "[×”×™×•× ×‘Ö¾]LT", nextDay: "[×ž×—×¨ ×‘Ö¾]LT", nextWeek: "dddd [×‘×©×¢×”] LT", lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT", lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT", sameElse: "L"}, relativeTime: {future: "×‘×¢×•×“ %s", past: "×œ×¤× ×™ %s", s: "×ž×¡×¤×¨ ×©× ×™×•×ª", m: "×“×§×”", mm: "%d ×“×§×•×ª", h: "×©×¢×”", hh: function(a) {
            return 2 === a ? "×©×¢×ª×™×™×" : a + " ×©×¢×•×ª"
        }, d                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : "×™×•×", dd: function(a) {
            return 2 === a ? "×™×•×ž×™×™×" : a + " ×™×ž×™×"
        }, M                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : "×—×•×“×©", MM: function(a) {
            return 2 === a ? "×—×•×“×©×™×™×" : a + " ×—×•×“×©×™×"
        }, y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  : "×©× ×”", yy: function(a) {
            return 2 === a ? "×©× ×ª×™×™×" : a + " ×©× ×™×"
        }}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"}, c = {"à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0"};
        return a.lang("hi", {months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"), weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"), weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"), weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"), longDateFormat: {LT: "A h:mm à¤¬à¤œà¥‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, calendar: {sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤•à¤²] LT", nextWeek: "dddd, LT", lastDay: "[à¤•à¤²] LT", lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT", sameElse: "L"}, relativeTime: {future: "%s à¤®à¥‡à¤‚", past: "%s à¤ªà¤¹à¤²à¥‡", s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£", m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¤Ÿ", h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾", hh: "%d à¤˜à¤‚à¤Ÿà¥‡", d: "à¤à¤• à¤¦à¤¿à¤¨", dd: "%d à¤¦à¤¿à¤¨", M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡", MM: "%d à¤®à¤¹à¥€à¤¨à¥‡", y: "à¤à¤• à¤µà¤°à¥à¤·", yy: "%d à¤µà¤°à¥à¤·"}, preparse: function(a) {
            return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(a) {
                return c[a]
            })
        }, postformat              : function(a) {
            return a.replace(/\d/g, function(a) {
                return b[a]
            })
        }, meridiem                : function(a) {
            return 4 > a ? "à¤°à¤¾à¤¤" : 10 > a ? "à¤¸à¥à¤¬à¤¹" : 17 > a ? "à¤¦à¥‹à¤ªà¤¹à¤°" : 20 > a ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
        }, week                    : {dow: 0, doy: 6}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c) {
            var d = a + " ";
            switch( c ) {
                case"m":
                    return b ? "jedna minuta" : "jedne minute";
                case"mm":
                    return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
                case"h":
                    return b ? "jedan sat" : "jednog sata";
                case"hh":
                    return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
                case"dd":
                    return d += 1 === a ? "dan" : "dana";
                case"MM":
                    return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
                case"yy":
                    return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
            }
        }

        return a.lang("hr", {months: "sjeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), monthsShort: "sje._vel._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"), longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[u] [nedjelju] [u] LT";
                case 3:
                    return"[u] [srijedu] [u] LT";
                case 6:
                    return"[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[u] dddd [u] LT"
            }
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : "[juÄer u] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                case 3:
                    return"[proÅ¡lu] dddd [u] LT";
                case 6:
                    return"[proÅ¡le] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[proÅ¡li] dddd [u] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           : "L"}, relativeTime: {future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c, d) {
            var e = a;
            switch( c ) {
                case"s":
                    return d || b ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                case"m":
                    return"egy" + (d || b ? " perc" : " perce");
                case"mm":
                    return e + (d || b ? " perc" : " perce");
                case"h":
                    return"egy" + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
                case"hh":
                    return e + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
                case"d":
                    return"egy" + (d || b ? " nap" : " napja");
                case"dd":
                    return e + (d || b ? " nap" : " napja");
                case"M":
                    return"egy" + (d || b ? " hÃ³nap" : " hÃ³napja");
                case"MM":
                    return e + (d || b ? " hÃ³nap" : " hÃ³napja");
                case"y":
                    return"egy" + (d || b ? " Ã©v" : " Ã©ve");
                case"yy":
                    return e + (d || b ? " Ã©v" : " Ã©ve")
            }
            return""
        }

        function c(a) {
            return(a ? "" : "[mÃºlt] ") + "[" + d[this.day()] + "] LT[-kor]"
        }

        var d = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");
        return a.lang("hu", {months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"), monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"), weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: {LT: "H:mm", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D., LT", LLLL: "YYYY. MMMM D., dddd LT"}, meridiem: function(a, b, c) {
            return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
        }, calendar: {sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() {
            return c.call(this, !0)
        }, lastDay           : "[tegnap] LT[-kor]", lastWeek: function() {
            return c.call(this, !1)
        }, sameElse          : "L"}, relativeTime: {future: "%s mÃºlva", past: "%s", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b) {
            var c = {nominative: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_"), accusative: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_")}, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function c(a) {
            var b = "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_");
            return b[a.month()]
        }

        function d(a) {
            var b = "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_");
            return b[a.day()]
        }

        return a.lang("hy-am", {months: b, monthsShort: c, weekdays: d, weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"), weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY Õ©.", LLL: "D MMMM YYYY Õ©., LT", LLLL: "dddd, D MMMM YYYY Õ©., LT"}, calendar: {sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT", nextDay: "[Õ¾Õ¡Õ²Õ¨] LT", lastDay: "[Õ¥Ö€Õ¥Õ¯] LT", nextWeek: function() {
            return"dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
        }, lastWeek                                                                                                                                                                                                                                                                                                                                                                           : function() {
            return"[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                           : "L"}, relativeTime: {future: "%s Õ°Õ¥Õ¿Õ¸", past: "%s Õ¡Õ¼Õ¡Õ»", s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶", m: "Ö€Õ¸ÕºÕ¥", mm: "%d Ö€Õ¸ÕºÕ¥", h: "ÕªÕ¡Õ´", hh: "%d ÕªÕ¡Õ´", d: "Ö…Ö€", dd: "%d Ö…Ö€", M: "Õ¡Õ´Õ«Õ½", MM: "%d Õ¡Õ´Õ«Õ½", y: "Õ¿Õ¡Ö€Õ«", yy: "%d Õ¿Õ¡Ö€Õ«"}, meridiem: function(a) {
            return 4 > a ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : 12 > a ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : 17 > a ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
        }, ordinal: function(a, b) {
            switch( b ) {
                case"DDD":
                case"w":
                case"W":
                case"DDDo":
                    return 1 === a ? a + "-Õ«Õ¶" : a + "-Ö€Õ¤";
                default:
                    return a
            }
        }, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("id", {months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: {LT: "HH.mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT"}, meridiem: function(a) {
            return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
        }, calendar                : {sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L"}, relativeTime: {future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun"}, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a) {
            return a % 100 === 11 ? !0 : a % 10 === 1 ? !1 : !0
        }

        function c(a, c, d, e) {
            var f = a + " ";
            switch( d ) {
                case"s":
                    return c || e ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                case"m":
                    return c ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                case"mm":
                    return b(a) ? f + (c || e ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : c ? f + "mÃ­nÃºta" : f + "mÃ­nÃºtu";
                case"hh":
                    return b(a) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
                case"d":
                    return c ? "dagur" : e ? "dag" : "degi";
                case"dd":
                    return b(a) ? c ? f + "dagar" : f + (e ? "daga" : "dÃ¶gum") : c ? f + "dagur" : f + (e ? "dag" : "degi");
                case"M":
                    return c ? "mÃ¡nuÃ°ur" : e ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                case"MM":
                    return b(a) ? c ? f + "mÃ¡nuÃ°ir" : f + (e ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : c ? f + "mÃ¡nuÃ°ur" : f + (e ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                case"y":
                    return c || e ? "Ã¡r" : "Ã¡ri";
                case"yy":
                    return b(a) ? f + (c || e ? "Ã¡r" : "Ã¡rum") : f + (c || e ? "Ã¡r" : "Ã¡ri")
            }
        }

        return a.lang("is", {months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"), weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"), weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"), weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd, D. MMMM YYYY [kl.] LT"}, calendar: {sameDay: "[Ã­ dag kl.] LT", nextDay: "[Ã¡ morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Ã­ gÃ¦r kl.] LT", lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT", sameElse: "L"}, relativeTime: {future: "eftir %s", past: "fyrir %s sÃ­Ã°an", s: c, m: c, mm: c, h: "klukkustund", hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("it", {months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"), monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"), weekdays: "Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"), weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"), weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: "[lo scorso] dddd [alle] LT", sameElse: "L"}, relativeTime: {future: function(a) {
            return(/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
        }, past                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      : "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ja", {months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"), weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"), weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"), longDateFormat: {LT: "Ahæ™‚måˆ†", L: "YYYY/MM/DD", LL: "YYYYå¹´MæœˆDæ—¥", LLL: "YYYYå¹´MæœˆDæ—¥LT", LLLL: "YYYYå¹´MæœˆDæ—¥LT dddd"}, meridiem: function(a) {
            return 12 > a ? "åˆå‰" : "åˆå¾Œ"
        }, calendar                : {sameDay: "[ä»Šæ—¥] LT", nextDay: "[æ˜Žæ—¥] LT", nextWeek: "[æ¥é€±]dddd LT", lastDay: "[æ˜¨æ—¥] LT", lastWeek: "[å‰é€±]dddd LT", sameElse: "L"}, relativeTime: {future: "%så¾Œ", past: "%så‰", s: "æ•°ç§’", m: "1åˆ†", mm: "%dåˆ†", h: "1æ™‚é–“", hh: "%dæ™‚é–“", d: "1æ—¥", dd: "%dæ—¥", M: "1ãƒ¶æœˆ", MM: "%dãƒ¶æœˆ", y: "1å¹´", yy: "%då¹´"}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b) {
            var c = {nominative: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"), accusative: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")}, d = /D[oD] *MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function c(a, b) {
            var c = {nominative: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"), accusative: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_")}, d = /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/.test(b) ? "accusative" : "nominative";
            return c[d][a.day()]
        }

        return a.lang("ka", {months: b, monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"), weekdays: c, weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"), weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"), longDateFormat: {LT: "h:mm A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]", nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]", lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]", nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]", lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”", sameElse: "L"}, relativeTime: {future: function(a) {
            return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(a) ? a.replace(/áƒ˜$/, "áƒ¨áƒ˜") : a + "áƒ¨áƒ˜"
        }, past                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       : function(a) {
            return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(a) ? a.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(a) ? a.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : void 0
        }, s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          : "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜", m: "áƒ¬áƒ£áƒ—áƒ˜", mm: "%d áƒ¬áƒ£áƒ—áƒ˜", h: "áƒ¡áƒáƒáƒ—áƒ˜", hh: "%d áƒ¡áƒáƒáƒ—áƒ˜", d: "áƒ“áƒ¦áƒ”", dd: "%d áƒ“áƒ¦áƒ”", M: "áƒ—áƒ•áƒ”", MM: "%d áƒ—áƒ•áƒ”", y: "áƒ¬áƒ”áƒšáƒ˜", yy: "%d áƒ¬áƒ”áƒšáƒ˜"}, ordinal: function(a) {
            return 0 === a ? a : 1 === a ? a + "-áƒšáƒ˜" : 20 > a || 100 >= a && a % 20 === 0 || a % 100 === 0 ? "áƒ›áƒ”-" + a : a + "-áƒ”"
        }, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("km", {months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"), monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"), weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"), weekdaysShort: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"), weekdaysMin: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[ážáŸ’áž„áŸƒáž“áŸˆ áž˜áŸ‰áŸ„áž„] LT", nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT", nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT", lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT", lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT", sameElse: "L"}, relativeTime: {future: "%sáž‘áŸ€áž", past: "%sáž˜áž»áž“", s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸", m: "áž˜áž½áž™áž“áž¶áž‘áž¸", mm: "%d áž“áž¶áž‘áž¸", h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„", hh: "%d áž˜áŸ‰áŸ„áž„", d: "áž˜áž½áž™ážáŸ’áž„áŸƒ", dd: "%d ážáŸ’áž„áŸƒ", M: "áž˜áž½áž™ážáŸ‚", MM: "%d ážáŸ‚", y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†", yy: "%d áž†áŸ’áž“áž¶áŸ†"}, week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ko", {months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"), monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"), weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"), weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"), weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"), longDateFormat: {LT: "A hì‹œ mmë¶„", L: "YYYY.MM.DD", LL: "YYYYë…„ MMMM Dì¼", LLL: "YYYYë…„ MMMM Dì¼ LT", LLLL: "YYYYë…„ MMMM Dì¼ dddd LT"}, meridiem: function(a) {
            return 12 > a ? "ì˜¤ì „" : "ì˜¤í›„"
        }, calendar                : {sameDay: "ì˜¤ëŠ˜ LT", nextDay: "ë‚´ì¼ LT", nextWeek: "dddd LT", lastDay: "ì–´ì œ LT", lastWeek: "ì§€ë‚œì£¼ dddd LT", sameElse: "L"}, relativeTime: {future: "%s í›„", past: "%s ì „", s: "ëª‡ì´ˆ", ss: "%dì´ˆ", m: "ì¼ë¶„", mm: "%dë¶„", h: "í•œì‹œê°„", hh: "%dì‹œê°„", d: "í•˜ë£¨", dd: "%dì¼", M: "í•œë‹¬", MM: "%dë‹¬", y: "ì¼ë…„", yy: "%dë…„"}, ordinal: "%dì¼", meridiemParse: /(ì˜¤ì „|ì˜¤í›„)/, isPM: function(a) {
            return"ì˜¤í›„" === a
        }})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c) {
            var d = {m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], dd: [a + " Deeg", a + " Deeg"], M: ["ee Mount", "engem Mount"], MM: [a + " MÃ©int", a + " MÃ©int"], y: ["ee Joer", "engem Joer"], yy: [a + " Joer", a + " Joer"]};
            return b ? d[c][0] : d[c][1]
        }

        function c(a) {
            var b = a.substr(0, a.indexOf(" "));
            return g(b) ? "a " + a : "an " + a
        }

        function d(a) {
            var b = a.substr(0, a.indexOf(" "));
            return g(b) ? "viru " + a : "virun " + a
        }

        function e() {
            var a = this.format("d");
            return f(a) ? "[Leschte] dddd [um] LT" : "[Leschten] dddd [um] LT"
        }

        function f(a) {
            switch( a = parseInt(a, 10) ) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 6:
                    return!0;
                default:
                    return!1
            }
        }

        function g(a) {
            if( a = parseInt(a, 10), isNaN(a) )return!1;
            if( 0 > a )return!0;
            if( 10 > a )return a >= 4 && 7 >= a ? !0 : !1;
            if( 100 > a ) {
                var b = a % 10, c = a / 10;
                return g(0 === b ? c : b)
            }
            if( 1e4 > a ) {
                for( ; a >= 10; )a /= 10;
                return g(a)
            }
            return a /= 1e3, g(a)
        }

        return a.lang("lb", {months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"), weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"), longDateFormat: {LT: "H:mm [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[GÃ«schter um] LT", lastWeek: e}, relativeTime: {future: c, past: d, s: "e puer Sekonnen", m: b, mm: "%d Minutten", h: b, hh: "%d Stonnen", d: b, dd: b, M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c, d) {
            return b ? "kelios sekundÄ—s" : d ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
        }

        function c(a, b, c, d) {
            return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]
        }

        function d(a) {
            return a % 10 === 0 || a > 10 && 20 > a
        }

        function e(a) {
            return h[a].split("_")
        }

        function f(a, b, f, g) {
            var h = a + " ";
            return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2])
        }

        function g(a, b) {
            var c = -1 === b.indexOf("dddd HH:mm"), d = i[a.weekday()];
            return c ? d : d.substring(0, d.length - 2) + "Ä¯"
        }

        var h = {m: "minutÄ—_minutÄ—s_minutÄ™", mm: "minutÄ—s_minuÄiÅ³_minutes", h: "valanda_valandos_valandÄ…", hh: "valandos_valandÅ³_valandas", d: "diena_dienos_dienÄ…", dd: "dienos_dienÅ³_dienas", M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯", MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius", y: "metai_metÅ³_metus", yy: "metai_metÅ³_metus"}, i = "pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis_sekmadienis".split("_");
        return a.lang("lt", {months: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾Ä—lio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"), monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: g, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], LT [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], LT [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"}, calendar: {sameDay: "[Å iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[PraÄ—jusÄ¯] dddd LT", sameElse: "L"}, relativeTime: {future: "po %s", past: "prieÅ¡ %s", s: b, m: c, mm: f, h: c, hh: f, d: c, dd: f, M: c, MM: f, y: c, yy: f}, ordinal: function(a) {
            return a + "-oji"
        }, week                    : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c) {
            var d = a.split("_");
            return c ? b % 10 === 1 && 11 !== b ? d[2] : d[3] : b % 10 === 1 && 11 !== b ? d[0] : d[1]
        }

        function c(a, c, e) {
            return a + " " + b(d[e], a, c)
        }

        var d = {mm: "minÅ«ti_minÅ«tes_minÅ«te_minÅ«tes", hh: "stundu_stundas_stunda_stundas", dd: "dienu_dienas_diena_dienas", MM: "mÄ“nesi_mÄ“neÅ¡us_mÄ“nesis_mÄ“neÅ¡i", yy: "gadu_gadus_gads_gadi"};
        return a.lang("lv", {months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"), weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, LT", LLLL: "YYYY. [gada] D. MMMM, dddd, LT"}, calendar: {sameDay: "[Å odien pulksten] LT", nextDay: "[RÄ«t pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT", sameElse: "L"}, relativeTime: {future: "%s vÄ“lÄk", past: "%s agrÄk", s: "daÅ¾as sekundes", m: "minÅ«ti", mm: c, h: "stundu", hh: c, d: "dienu", dd: c, M: "mÄ“nesi", MM: c, y: "gadu", yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("mk", {months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"), monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"), weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"), weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"), weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"), longDateFormat: {LT: "H:mm", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT", nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT", nextWeek: "dddd [Ð²Ð¾] LT", lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                case 3:
                case 6:
                    return"[Ð’Ð¾ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[Ð’Ð¾ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           : "L"}, relativeTime: {future: "Ð¿Ð¾ÑÐ»Ðµ %s", past: "Ð¿Ñ€ÐµÐ´ %s", s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸", m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸", h: "Ñ‡Ð°Ñ", hh: "%d Ñ‡Ð°ÑÐ°", d: "Ð´ÐµÐ½", dd: "%d Ð´ÐµÐ½Ð°", M: "Ð¼ÐµÑÐµÑ†", MM: "%d Ð¼ÐµÑÐµÑ†Ð¸", y: "Ð³Ð¾Ð´Ð¸Ð½Ð°", yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"}, ordinal: function(a) {
            var b = a % 10, c = a % 100;
            return 0 === a ? a + "-ÐµÐ²" : 0 === c ? a + "-ÐµÐ½" : c > 10 && 20 > c ? a + "-Ñ‚Ð¸" : 1 === b ? a + "-Ð²Ð¸" : 2 === b ? a + "-Ñ€Ð¸" : 7 === b || 8 === b ? a + "-Ð¼Ð¸" : a + "-Ñ‚Ð¸"
        }, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ml", {months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"), monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"), weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"), weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"), weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"), longDateFormat: {LT: "A h:mm -à´¨àµ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, calendar: {sameDay: "[à´‡à´¨àµà´¨àµ] LT", nextDay: "[à´¨à´¾à´³àµ†] LT", nextWeek: "dddd, LT", lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT", lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT", sameElse: "L"}, relativeTime: {future: "%s à´•à´´à´¿à´žàµà´žàµ", past: "%s à´®àµàµ»à´ªàµ", s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾", m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ", mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ", h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼", hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼", d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚", dd: "%d à´¦à´¿à´µà´¸à´‚", M: "à´’à´°àµ à´®à´¾à´¸à´‚", MM: "%d à´®à´¾à´¸à´‚", y: "à´’à´°àµ à´µàµ¼à´·à´‚", yy: "%d à´µàµ¼à´·à´‚"}, meridiem: function(a) {
            return 4 > a ? "à´°à´¾à´¤àµà´°à´¿" : 12 > a ? "à´°à´¾à´µà´¿à´²àµ†" : 17 > a ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : 20 > a ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"
        }})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"}, c = {"à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0"};
        return a.lang("mr", {months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"), weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"), weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"), weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"), longDateFormat: {LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, calendar: {sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT", nextWeek: "dddd, LT", lastDay: "[à¤•à¤¾à¤²] LT", lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT", sameElse: "L"}, relativeTime: {future: "%s à¤¨à¤‚à¤¤à¤°", past: "%s à¤ªà¥‚à¤°à¥à¤µà¥€", s: "à¤¸à¥‡à¤•à¤‚à¤¦", m: "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡", h: "à¤à¤• à¤¤à¤¾à¤¸", hh: "%d à¤¤à¤¾à¤¸", d: "à¤à¤• à¤¦à¤¿à¤µà¤¸", dd: "%d à¤¦à¤¿à¤µà¤¸", M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾", MM: "%d à¤®à¤¹à¤¿à¤¨à¥‡", y: "à¤à¤• à¤µà¤°à¥à¤·", yy: "%d à¤µà¤°à¥à¤·à¥‡"}, preparse: function(a) {
            return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(a) {
                return c[a]
            })
        }, postformat              : function(a) {
            return a.replace(/\d/g, function(a) {
                return b[a]
            })
        }, meridiem                : function(a) {
            return 4 > a ? "à¤°à¤¾à¤¤à¥à¤°à¥€" : 10 > a ? "à¤¸à¤•à¤¾à¤³à¥€" : 17 > a ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : 20 > a ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
        }, week                    : {dow: 0, doy: 6}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ms-my", {months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: {LT: "HH.mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT"}, meridiem: function(a) {
            return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
        }, calendar                   : {sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L"}, relativeTime: {future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun"}, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("nb", {months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"), weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"), weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"), longDateFormat: {LT: "H.mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd D. MMMM YYYY [kl.] LT"}, calendar: {sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i gÃ¥r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "for %s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en mÃ¥ned", MM: "%d mÃ¥neder", y: "ett Ã¥r", yy: "%d Ã¥r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"}, c = {"à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0"};
        return a.lang("ne", {months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"), weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"), weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"), weekdaysMin: "à¤†à¤‡._à¤¸à¥‹._à¤®à¤™à¥_à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"), longDateFormat: {LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, preparse: function(a) {
            return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(a) {
                return c[a]
            })
        }, postformat              : function(a) {
            return a.replace(/\d/g, function(a) {
                return b[a]
            })
        }, meridiem                : function(a) {
            return 3 > a ? "à¤°à¤¾à¤¤à¥€" : 10 > a ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : 15 > a ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : 18 > a ? "à¤¬à¥‡à¤²à¥à¤•à¤¾" : 20 > a ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¥€"
        }, calendar                : {sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤­à¥‹à¤²à¥€] LT", nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT", lastDay: "[à¤¹à¤¿à¤œà¥‹] LT", lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT", sameElse: "L"}, relativeTime: {future: "%sà¤®à¤¾", past: "%s à¤…à¤—à¤¾à¤¡à¥€", s: "à¤•à¥‡à¤¹à¥€ à¤¸à¤®à¤¯", m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ", h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾", hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾", d: "à¤à¤• à¤¦à¤¿à¤¨", dd: "%d à¤¦à¤¿à¤¨", M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾", MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾", y: "à¤à¤• à¤¬à¤°à¥à¤·", yy: "%d à¤¬à¤°à¥à¤·"}, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        return a.lang("nl", {months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(a, d) {
            return/-MMM-/.test(d) ? c[a.month()] : b[a.month()]
        }, weekdays                : "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), longDateFormat: {LT: "HH:mm", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L"}, relativeTime: {future: "over %s", past: "%s geleden", s: "een paar seconden", m: "Ã©Ã©n minuut", mm: "%d minuten", h: "Ã©Ã©n uur", hh: "%d uur", d: "Ã©Ã©n dag", dd: "%d dagen", M: "Ã©Ã©n maand", MM: "%d maanden", y: "Ã©Ã©n jaar", yy: "%d jaar"}, ordinal: function(a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
        }, week                    : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("nn", {months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I gÃ¥r klokka] LT", lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein mÃ¥nad", MM: "%d mÃ¥nader", y: "eit Ã¥r", yy: "%d Ã¥r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a) {
            return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1
        }

        function c(a, c, d) {
            var e = a + " ";
            switch( d ) {
                case"m":
                    return c ? "minuta" : "minutÄ™";
                case"mm":
                    return e + (b(a) ? "minuty" : "minut");
                case"h":
                    return c ? "godzina" : "godzinÄ™";
                case"hh":
                    return e + (b(a) ? "godziny" : "godzin");
                case"MM":
                    return e + (b(a) ? "miesiÄ…ce" : "miesiÄ™cy");
                case"yy":
                    return e + (b(a) ? "lata" : "lat")
            }
        }

        var d = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"), e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");
        return a.lang("pl", {months: function(a, b) {
            return/D MMMM/.test(b) ? e[a.month()] : d[a.month()]
        }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"), weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"), weekdaysShort: "nie_pon_wt_Å›r_czw_pt_sb".split("_"), weekdaysMin: "N_Pn_Wt_Åšr_Cz_Pt_So".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[DziÅ› o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                case 3:
                    return"[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                case 6:
                    return"[W zeszÅ‚Ä… sobotÄ™ o] LT";
                default:
                    return"[W zeszÅ‚y] dddd [o] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                          : "L"}, relativeTime: {future: "za %s", past: "%s temu", s: "kilka sekund", m: c, mm: c, h: c, hh: c, d: "1 dzieÅ„", dd: "%d dni", M: "miesiÄ…c", MM: c, y: "rok", yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("pt-br", {months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"), weekdaysMin: "dom_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡b".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [Ã s] LT", LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] LT"}, calendar: {sameDay: "[Hoje Ã s] LT", nextDay: "[AmanhÃ£ Ã s] LT", nextWeek: "dddd [Ã s] LT", lastDay: "[Ontem Ã s] LT", lastWeek: function() {
            return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       : "L"}, relativeTime: {future: "em %s", past: "%s atrÃ¡s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mÃªs", MM: "%d meses", y: "um ano", yy: "%d anos"}, ordinal: "%dÂº"})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("pt", {months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"), weekdaysMin: "dom_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡b".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT"}, calendar: {sameDay: "[Hoje Ã s] LT", nextDay: "[AmanhÃ£ Ã s] LT", nextWeek: "dddd [Ã s] LT", lastDay: "[Ontem Ã s] LT", lastWeek: function() {
            return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : "L"}, relativeTime: {future: "em %s", past: "%s atrÃ¡s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mÃªs", MM: "%d meses", y: "um ano", yy: "%d anos"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c) {
            var d = {mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, e = " ";
            return(a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
        }

        return a.lang("ro", {months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"), longDateFormat: {LT: "H:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm"}, calendar: {sameDay: "[azi la] LT", nextDay: "[mÃ¢ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L"}, relativeTime: {future: "peste %s", past: "%s Ã®n urmÄƒ", s: "cÃ¢teva secunde", m: "un minut", mm: b, h: "o orÄƒ", hh: b, d: "o zi", dd: b, M: "o lunÄƒ", MM: b, y: "un an", yy: b}, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b) {
            var c = a.split("_");
            return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }

        function c(a, c, d) {
            var e = {mm: c ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚", hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹", MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²", yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"};
            return"m" === d ? c ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : a + " " + b(e[d], +a)
        }

        function d(a, b) {
            var c = {nominative: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"), accusative: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_")}, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function e(a, b) {
            var c = {nominative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"), accusative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_")}, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function f(a, b) {
            var c = {nominative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"), accusative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_")}, d = /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ)? ?\] ?dddd/.test(b) ? "accusative" : "nominative";
            return c[d][a.day()]
        }

        return a.lang("ru", {months: d, monthsShort: e, weekdays: f, weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), monthsParse: [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹|Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i], longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ð³.", LLL: "D MMMM YYYY Ð³., LT", LLLL: "dddd, D MMMM YYYY Ð³., LT"}, calendar: {sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT", nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT", lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT", nextWeek: function() {
            return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT"
        }, lastWeek                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : function() {
            switch( this.day() ) {
                case 0:
                    return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
                case 1:
                case 2:
                case 4:
                    return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
                case 3:
                case 5:
                case 6:
                    return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : "L"}, relativeTime: {future: "Ñ‡ÐµÑ€ÐµÐ· %s", past: "%s Ð½Ð°Ð·Ð°Ð´", s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´", m: c, mm: c, h: "Ñ‡Ð°Ñ", hh: c, d: "Ð´ÐµÐ½ÑŒ", dd: c, M: "Ð¼ÐµÑÑÑ†", MM: c, y: "Ð³Ð¾Ð´", yy: c}, meridiem: function(a) {
            return 4 > a ? "Ð½Ð¾Ñ‡Ð¸" : 12 > a ? "ÑƒÑ‚Ñ€Ð°" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
        }, ordinal: function(a, b) {
            switch( b ) {
                case"M":
                case"d":
                case"DDD":
                    return a + "-Ð¹";
                case"D":
                    return a + "-Ð³Ð¾";
                case"w":
                case"W":
                    return a + "-Ñ";
                default:
                    return a
            }
        }, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a) {
            return a > 1 && 5 > a
        }

        function c(a, c, d, e) {
            var f = a + " ";
            switch( d ) {
                case"s":
                    return c || e ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                case"m":
                    return c ? "minÃºta" : e ? "minÃºtu" : "minÃºtou";
                case"mm":
                    return c || e ? f + (b(a) ? "minÃºty" : "minÃºt") : f + "minÃºtami";
                    break;
                case"h":
                    return c ? "hodina" : e ? "hodinu" : "hodinou";
                case"hh":
                    return c || e ? f + (b(a) ? "hodiny" : "hodÃ­n") : f + "hodinami";
                    break;
                case"d":
                    return c || e ? "deÅˆ" : "dÅˆom";
                case"dd":
                    return c || e ? f + (b(a) ? "dni" : "dnÃ­") : f + "dÅˆami";
                    break;
                case"M":
                    return c || e ? "mesiac" : "mesiacom";
                case"MM":
                    return c || e ? f + (b(a) ? "mesiace" : "mesiacov") : f + "mesiacmi";
                    break;
                case"y":
                    return c || e ? "rok" : "rokom";
                case"yy":
                    return c || e ? f + (b(a) ? "roky" : "rokov") : f + "rokmi"
            }
        }

        var d = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"), e = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");
        return a.lang("sk", {months: d, monthsShort: e, monthsParse: function(a, b) {
            var c, d = [];
            for( c = 0; 12 > c; c++ )d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
            return d
        }(d, e), weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"), longDateFormat: {LT: "H:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT"}, calendar: {sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[v nedeÄ¾u o] LT";
                case 1:
                case 2:
                    return"[v] dddd [o] LT";
                case 3:
                    return"[v stredu o] LT";
                case 4:
                    return"[vo Å¡tvrtok o] LT";
                case 5:
                    return"[v piatok o] LT";
                case 6:
                    return"[v sobotu o] LT"
            }
        }, lastDay                                                                                                                                                                                                                                                                                                                            : "[vÄera o] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[minulÃº nedeÄ¾u o] LT";
                case 1:
                case 2:
                    return"[minulÃ½] dddd [o] LT";
                case 3:
                    return"[minulÃº stredu o] LT";
                case 4:
                case 5:
                    return"[minulÃ½] dddd [o] LT";
                case 6:
                    return"[minulÃº sobotu o] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                           : "L"}, relativeTime: {future: "za %s", past: "pred %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b, c) {
            var d = a + " ";
            switch( c ) {
                case"m":
                    return b ? "ena minuta" : "eno minuto";
                case"mm":
                    return d += 1 === a ? "minuta" : 2 === a ? "minuti" : 3 === a || 4 === a ? "minute" : "minut";
                case"h":
                    return b ? "ena ura" : "eno uro";
                case"hh":
                    return d += 1 === a ? "ura" : 2 === a ? "uri" : 3 === a || 4 === a ? "ure" : "ur";
                case"dd":
                    return d += 1 === a ? "dan" : "dni";
                case"MM":
                    return d += 1 === a ? "mesec" : 2 === a ? "meseca" : 3 === a || 4 === a ? "mesece" : "mesecev";
                case"yy":
                    return d += 1 === a ? "leto" : 2 === a ? "leti" : 3 === a || 4 === a ? "leta" : "let"
            }
        }

        return a.lang("sl", {months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"), longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[v] [nedeljo] [ob] LT";
                case 3:
                    return"[v] [sredo] [ob] LT";
                case 6:
                    return"[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[v] dddd [ob] LT"
            }
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           : "[vÄeraj ob] LT", lastWeek: function() {
            switch( this.day() ) {
                case 0:
                case 3:
                case 6:
                    return"[prejÅ¡nja] dddd [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[prejÅ¡nji] dddd [ob] LT"
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          : "L"}, relativeTime: {future: "Äez %s", past: "%s nazaj", s: "nekaj sekund", m: b, mm: b, h: b, hh: b, d: "en dan", dd: b, M: "en mesec", MM: b, y: "eno leto", yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("sq", {months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"), weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"), weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"), meridiem: function(a) {
            return 12 > a ? "PD" : "MD"
        }, longDateFormat          : {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Sot nÃ«] LT", nextDay: "[NesÃ«r nÃ«] LT", nextWeek: "dddd [nÃ«] LT", lastDay: "[Dje nÃ«] LT", lastWeek: "dddd [e kaluar nÃ«] LT", sameElse: "L"}, relativeTime: {future: "nÃ« %s", past: "%s mÃ« parÃ«", s: "disa sekonda", m: "njÃ« minutÃ«", mm: "%d minuta", h: "njÃ« orÃ«", hh: "%d orÃ«", d: "njÃ« ditÃ«", dd: "%d ditÃ«", M: "njÃ« muaj", MM: "%d muaj", y: "njÃ« vit", yy: "%d vite"}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = {words: {m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"], mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"], h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"], hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"], dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"], MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"], yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]}, correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
        }, translate  : function(a, c, d) {
            var e = b.words[d];
            return 1 === d.length ? c ? e[0] : e[1] : a + " " + b.correctGrammaticalCase(a, e)
        }};
        return a.lang("sr-cyr", {months: ["Ñ˜Ð°Ð½ÑƒÐ°Ñ€", "Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€", "Ð¼Ð°Ñ€Ñ‚", "Ð°Ð¿Ñ€Ð¸Ð»", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½", "Ñ˜ÑƒÐ»", "Ð°Ð²Ð³ÑƒÑÑ‚", "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€", "Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€", "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€", "Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"], monthsShort: ["Ñ˜Ð°Ð½.", "Ñ„ÐµÐ±.", "Ð¼Ð°Ñ€.", "Ð°Ð¿Ñ€.", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½", "Ñ˜ÑƒÐ»", "Ð°Ð²Ð³.", "ÑÐµÐ¿.", "Ð¾ÐºÑ‚.", "Ð½Ð¾Ð².", "Ð´ÐµÑ†."], weekdays: ["Ð½ÐµÐ´ÐµÑ™Ð°", "Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº", "ÑƒÑ‚Ð¾Ñ€Ð°Ðº", "ÑÑ€ÐµÐ´Ð°", "Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº", "Ð¿ÐµÑ‚Ð°Ðº", "ÑÑƒÐ±Ð¾Ñ‚Ð°"], weekdaysShort: ["Ð½ÐµÐ´.", "Ð¿Ð¾Ð½.", "ÑƒÑ‚Ð¾.", "ÑÑ€Ðµ.", "Ñ‡ÐµÑ‚.", "Ð¿ÐµÑ‚.", "ÑÑƒÐ±."], weekdaysMin: ["Ð½Ðµ", "Ð¿Ð¾", "ÑƒÑ‚", "ÑÑ€", "Ñ‡Ðµ", "Ð¿Ðµ", "ÑÑƒ"], longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT", nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT", nextWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                case 3:
                    return"[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                case 6:
                    return"[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[Ñƒ] dddd [Ñƒ] LT"
            }
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT", lastWeek: function() {
            var a = ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];
            return a[this.day()]
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       : "L"}, relativeTime: {future: "Ð·Ð° %s", past: "Ð¿Ñ€Ðµ %s", s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸", m: b.translate, mm: b.translate, h: b.translate, hh: b.translate, d: "Ð´Ð°Ð½", dd: b.translate, M: "Ð¼ÐµÑÐµÑ†", MM: b.translate, y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ", yy: b.translate}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = {words: {m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"]}, correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
        }, translate  : function(a, c, d) {
            var e = b.words[d];
            return 1 === d.length ? c ? e[0] : e[1] : a + " " + b.correctGrammaticalCase(a, e)
        }};
        return a.lang("sr", {months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."], weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "Äetvrtak", "petak", "subota"], weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "Äet.", "pet.", "sub."], weekdaysMin: ["ne", "po", "ut", "sr", "Äe", "pe", "su"], longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() {
            switch( this.day() ) {
                case 0:
                    return"[u] [nedelju] [u] LT";
                case 3:
                    return"[u] [sredu] [u] LT";
                case 6:
                    return"[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[u] dddd [u] LT"
            }
        }, lastDay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : "[juÄe u] LT", lastWeek: function() {
            var a = ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
            return a[this.day()]
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               : "L"}, relativeTime: {future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: b.translate, mm: b.translate, h: b.translate, hh: b.translate, d: "dan", dd: b.translate, M: "mesec", MM: b.translate, y: "godinu", yy: b.translate}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("sv", {months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"), weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"), weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[IgÃ¥r] LT", nextWeek: "dddd LT", lastWeek: "[FÃ¶rra] dddd[en] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "fÃ¶r %s sedan", s: "nÃ¥gra sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en mÃ¥nad", MM: "%d mÃ¥nader", y: "ett Ã¥r", yy: "%d Ã¥r"}, ordinal: function(a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : 3 === b ? "e" : "e";
            return a + c
        }, week                    : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("ta", {months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"), monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"), weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"), weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"), weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, calendar: {sameDay: "[à®‡à®©à¯à®±à¯] LT", nextDay: "[à®¨à®¾à®³à¯ˆ] LT", nextWeek: "dddd, LT", lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT", lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT", sameElse: "L"}, relativeTime: {future: "%s à®‡à®²à¯", past: "%s à®®à¯à®©à¯", s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯", m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯", mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯", h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯", hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯", d: "à®’à®°à¯ à®¨à®¾à®³à¯", dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯", M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯", MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯", y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯", yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"}, ordinal: function(a) {
            return a + "à®µà®¤à¯"
        }, meridiem                : function(a) {
            return a >= 6 && 10 >= a ? " à®•à®¾à®²à¯ˆ" : a >= 10 && 14 >= a ? " à®¨à®£à¯à®ªà®•à®²à¯" : a >= 14 && 18 >= a ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : a >= 18 && 20 >= a ? " à®®à®¾à®²à¯ˆ" : a >= 20 && 24 >= a ? " à®‡à®°à®µà¯" : a >= 0 && 6 >= a ? " à®µà¯ˆà®•à®±à¯ˆ" : void 0
        }, week                    : {dow: 0, doy: 6}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("th", {months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"), monthsShort: "à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"), weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"), weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"), weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"), longDateFormat: {LT: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ", L: "YYYY/MM/DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² LT", LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² LT"}, meridiem: function(a) {
            return 12 > a ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
        }, calendar                : {sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT", lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT", sameElse: "L"}, relativeTime: {future: "à¸­à¸µà¸ %s", past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§", s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ", m: "1 à¸™à¸²à¸—à¸µ", mm: "%d à¸™à¸²à¸—à¸µ", h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡", hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡", d: "1 à¸§à¸±à¸™", dd: "%d à¸§à¸±à¸™", M: "1 à¹€à¸”à¸·à¸­à¸™", MM: "%d à¹€à¸”à¸·à¸­à¸™", y: "1 à¸›à¸µ", yy: "%d à¸›à¸µ"}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("tl-ph", {months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: {LT: "HH:mm", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM DD, YYYY LT"}, calendar: {sameDay: "[Ngayon sa] LT", nextDay: "[Bukas sa] LT", nextWeek: "dddd [sa] LT", lastDay: "[Kahapon sa] LT", lastWeek: "dddd [huling linggo] LT", sameElse: "L"}, relativeTime: {future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon"}, ordinal: function(a) {
            return a
        }, week                       : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        var b = {1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'Ã¼ncÃ¼", 4: "'Ã¼ncÃ¼", 100: "'Ã¼ncÃ¼", 6: "'ncÄ±", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'Ä±ncÄ±", 90: "'Ä±ncÄ±"};
        return a.lang("tr", {months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"), monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[bugÃ¼n saat] LT", nextDay: "[yarÄ±n saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dÃ¼n] LT", lastWeek: "[geÃ§en hafta] dddd [saat] LT", sameElse: "L"}, relativeTime: {future: "%s sonra", past: "%s Ã¶nce", s: "birkaÃ§ saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gÃ¼n", dd: "%d gÃ¼n", M: "bir ay", MM: "%d ay", y: "bir yÄ±l", yy: "%d yÄ±l"}, ordinal: function(a) {
            if( 0 === a )return a + "'Ä±ncÄ±";
            var c = a % 10, d = a % 100 - c, e = a >= 100 ? 100 : null;
            return a + (b[c] || b[d] || b[e])
        }, week                    : {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("tzm-la", {months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L"}, relativeTime: {future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuá¸", mm: "%d minuá¸", h: "saÉ›a", hh: "%d tassaÉ›in", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn"}, week: {dow: 6, doy: 12}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("tzm", {months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"), monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"), weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[â´°âµ™â´·âµ… â´´] LT", nextDay: "[â´°âµ™â´½â´° â´´] LT", nextWeek: "dddd [â´´] LT", lastDay: "[â´°âµšâ´°âµâµœ â´´] LT", lastWeek: "dddd [â´´] LT", sameElse: "L"}, relativeTime: {future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s", past: "âµ¢â´°âµ %s", s: "âµ‰âµŽâµ‰â´½", m: "âµŽâµ‰âµâµ“â´º", mm: "%d âµŽâµ‰âµâµ“â´º", h: "âµ™â´°âµ„â´°", hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ", d: "â´°âµ™âµ™", dd: "%d oâµ™âµ™â´°âµ", M: "â´°âµ¢oâµ“âµ”", MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ", y: "â´°âµ™â´³â´°âµ™", yy: "%d âµ‰âµ™â´³â´°âµ™âµ"}, week: {dow: 6, doy: 12}})
    }), function(a) {
        a(ib)
    }(function(a) {
        function b(a, b) {
            var c = a.split("_");
            return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }

        function c(a, c, d) {
            var e = {mm: "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½", hh: "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²", MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²", yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"};
            return"m" === d ? c ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === d ? c ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : a + " " + b(e[d], +a)
        }

        function d(a, b) {
            var c = {nominative: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_"), accusative: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_")}, d = /D[oD]? *MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function e(a, b) {
            var c = {nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"), accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"), genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")}, d = /(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
            return c[d][a.day()]
        }

        function f(a) {
            return function() {
                return a + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
            }
        }

        return a.lang("uk", {months: d, monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"), weekdays: e, weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ñ€.", LLL: "D MMMM YYYY Ñ€., LT", LLLL: "dddd, D MMMM YYYY Ñ€., LT"}, calendar: {sameDay: f("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "), nextDay: f("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "), lastDay: f("[Ð’Ñ‡Ð¾Ñ€Ð° "), nextWeek: f("[Ð£] dddd ["), lastWeek: function() {
            switch( this.day() ) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return f("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                    return f("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
            }
        }, sameElse                                                                                                                                                                                                                                                                                                                                                                                                                                                     : "L"}, relativeTime: {future: "Ð·Ð° %s", past: "%s Ñ‚Ð¾Ð¼Ñƒ", s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´", m: c, mm: c, h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ", hh: c, d: "Ð´ÐµÐ½ÑŒ", dd: c, M: "Ð¼Ñ–ÑÑÑ†ÑŒ", MM: c, y: "Ñ€Ñ–Ðº", yy: c}, meridiem: function(a) {
            return 4 > a ? "Ð½Ð¾Ñ‡Ñ–" : 12 > a ? "Ñ€Ð°Ð½ÐºÑƒ" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
        }, ordinal: function(a, b) {
            switch( b ) {
                case"M":
                case"d":
                case"DDD":
                case"w":
                case"W":
                    return a + "-Ð¹";
                case"D":
                    return a + "-Ð³Ð¾";
                default:
                    return a
            }
        }, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("uz", {months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"), monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"), weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"), weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"), weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "D MMMM YYYY, dddd LT"}, calendar: {sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]", nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", sameElse: "L"}, relativeTime: {future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°", past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½", s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚", m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°", mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°", h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚", hh: "%d ÑÐ¾Ð°Ñ‚", d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½", dd: "%d ÐºÑƒÐ½", M: "Ð±Ð¸Ñ€ Ð¾Ð¹", MM: "%d Ð¾Ð¹", y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»", yy: "%d Ð¹Ð¸Ð»"}, week: {dow: 1, doy: 7}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("vi", {months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM [nÄƒm] YYYY", LLL: "D MMMM [nÄƒm] YYYY LT", LLLL: "dddd, D MMMM [nÄƒm] YYYY LT", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT"}, calendar: {sameDay: "[HÃ´m nay lÃºc] LT", nextDay: "[NgÃ y mai lÃºc] LT", nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT", lastDay: "[HÃ´m qua lÃºc] LT", lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT", sameElse: "L"}, relativeTime: {future: "%s tá»›i", past: "%s trÆ°á»›c", s: "vÃ i giÃ¢y", m: "má»™t phÃºt", mm: "%d phÃºt", h: "má»™t giá»", hh: "%d giá»", d: "má»™t ngÃ y", dd: "%d ngÃ y", M: "má»™t thÃ¡ng", MM: "%d thÃ¡ng", y: "má»™t nÄƒm", yy: "%d nÄƒm"}, ordinal: function(a) {
            return a
        }, week                    : {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("zh-cn", {months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"), monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"), weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"), weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"), longDateFormat: {LT: "Ahç‚¹mm", L: "YYYY-MM-DD", LL: "YYYYå¹´MMMDæ—¥", LLL: "YYYYå¹´MMMDæ—¥LT", LLLL: "YYYYå¹´MMMDæ—¥ddddLT", l: "YYYY-MM-DD", ll: "YYYYå¹´MMMDæ—¥", lll: "YYYYå¹´MMMDæ—¥LT", llll: "YYYYå¹´MMMDæ—¥ddddLT"}, meridiem: function(a, b) {
            var c = 100 * a + b;
            return 600 > c ? "å‡Œæ™¨" : 900 > c ? "æ—©ä¸Š" : 1130 > c ? "ä¸Šåˆ" : 1230 > c ? "ä¸­åˆ" : 1800 > c ? "ä¸‹åˆ" : "æ™šä¸Š"
        }, calendar: {sameDay: function() {
            return 0 === this.minutes() ? "[ä»Šå¤©]Ah[ç‚¹æ•´]" : "[ä»Šå¤©]LT"
        }, nextDay           : function() {
            return 0 === this.minutes() ? "[æ˜Žå¤©]Ah[ç‚¹æ•´]" : "[æ˜Žå¤©]LT"
        }, lastDay           : function() {
            return 0 === this.minutes() ? "[æ˜¨å¤©]Ah[ç‚¹æ•´]" : "[æ˜¨å¤©]LT"
        }, nextWeek          : function() {
            var b, c;
            return b = a().startOf("week"), c = this.unix() - b.unix() >= 604800 ? "[ä¸‹]" : "[æœ¬]", 0 === this.minutes() ? c + "dddAhç‚¹æ•´" : c + "dddAhç‚¹mm"
        }, lastWeek          : function() {
            var b, c;
            return b = a().startOf("week"), c = this.unix() < b.unix() ? "[ä¸Š]" : "[æœ¬]", 0 === this.minutes() ? c + "dddAhç‚¹æ•´" : c + "dddAhç‚¹mm"
        }, sameElse          : "LL"}, ordinal: function(a, b) {
            switch( b ) {
                case"d":
                case"D":
                case"DDD":
                    return a + "æ—¥";
                case"M":
                    return a + "æœˆ";
                case"w":
                case"W":
                    return a + "å‘¨";
                default:
                    return a
            }
        }, relativeTime: {future: "%så†…", past: "%så‰", s: "å‡ ç§’", m: "1åˆ†é’Ÿ", mm: "%dåˆ†é’Ÿ", h: "1å°æ—¶", hh: "%då°æ—¶", d: "1å¤©", dd: "%då¤©", M: "1ä¸ªæœˆ", MM: "%dä¸ªæœˆ", y: "1å¹´", yy: "%då¹´"}, week: {dow: 1, doy: 4}})
    }), function(a) {
        a(ib)
    }(function(a) {
        return a.lang("zh-tw", {months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"), monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"), weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"), weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"), longDateFormat: {LT: "Ahé»žmm", L: "YYYYå¹´MMMDæ—¥", LL: "YYYYå¹´MMMDæ—¥", LLL: "YYYYå¹´MMMDæ—¥LT", LLLL: "YYYYå¹´MMMDæ—¥ddddLT", l: "YYYYå¹´MMMDæ—¥", ll: "YYYYå¹´MMMDæ—¥", lll: "YYYYå¹´MMMDæ—¥LT", llll: "YYYYå¹´MMMDæ—¥ddddLT"}, meridiem: function(a, b) {
            var c = 100 * a + b;
            return 900 > c ? "æ—©ä¸Š" : 1130 > c ? "ä¸Šåˆ" : 1230 > c ? "ä¸­åˆ" : 1800 > c ? "ä¸‹åˆ" : "æ™šä¸Š"
        }, calendar                   : {sameDay: "[ä»Šå¤©]LT", nextDay: "[æ˜Žå¤©]LT", nextWeek: "[ä¸‹]ddddLT", lastDay: "[æ˜¨å¤©]LT", lastWeek: "[ä¸Š]ddddLT", sameElse: "L"}, ordinal: function(a, b) {
            switch( b ) {
                case"d":
                case"D":
                case"DDD":
                    return a + "æ—¥";
                case"M":
                    return a + "æœˆ";
                case"w":
                case"W":
                    return a + "é€±";
                default:
                    return a
            }
        }, relativeTime               : {future: "%så…§", past: "%så‰", s: "å¹¾ç§’", m: "ä¸€åˆ†é˜", mm: "%dåˆ†é˜", h: "ä¸€å°æ™‚", hh: "%då°æ™‚", d: "ä¸€å¤©", dd: "%då¤©", M: "ä¸€å€‹æœˆ", MM: "%då€‹æœˆ", y: "ä¸€å¹´", yy: "%då¹´"}})
    }), ib.lang("en"), xb ? module.exports = ib : "function" == typeof define && define.amd ? (define("moment", function(a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (mb.moment = jb), ib
    }), hb(!0)) : hb()
}).call(this);//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, h = e.reduce, v = e.reduceRight, g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, w = Object.keys, _ = i.bind, j = function(n) {
        return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.2";
    var A = j.each = j.forEach = function(n, t, e) {
        if( null != n )if( s && n.forEach === s )n.forEach(t, e); else if( n.length === +n.length ) {
            for( var u = 0, i = n.length; i > u; u++ )if( t.call(e, n[u], u, n) === r )return
        } else for( var a = j.keys(n), u = 0, i = a.length; i > u; u++ )if( t.call(e, n[a[u]], a[u], n) === r )return
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if( null == n && (n = []), h && n.reduce === h )return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if( A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u )throw new TypeError(E);
        return r
    }, j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if( null == n && (n = []), v && n.reduceRight === v )return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if( i !== +i ) {
            var a = j.keys(n);
            i = a.length
        }
        if( A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u )throw new TypeError(E);
        return r
    }, j.find = j.detect = function(n, t, r) {
        var e;
        return O(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    }, j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return!t.call(r, n, e, u)
        }, r)
    }, j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return(u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var O = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function(n) {
            return n === t
        })
    }, j.invoke = function(n, t) {
        var r = o.call(arguments, 2), e = j.isFunction(t);
        return j.map(n, function(n) {
            return(e ? t : n[t]).apply(n, r)
        })
    }, j.pluck = function(n, t) {
        return j.map(n, function(n) {
            return n[t]
        })
    }, j.where = function(n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function(n) {
            for( var r in t )if( t[r] !== n[r] )return!1;
            return!0
        })
    }, j.findWhere = function(n, t) {
        return j.where(n, t, !0)
    }, j.max = function(n, t, r) {
        if( !t && j.isArray(n) && n[0] === +n[0] && n.length < 65535 )return Math.max.apply(Math, n);
        if( !t && j.isEmpty(n) )return-1 / 0;
        var e = {computed: -1 / 0, value: -1 / 0};
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {value: n, computed: a})
        }), e.value
    }, j.min = function(n, t, r) {
        if( !t && j.isArray(n) && n[0] === +n[0] && n.length < 65535 )return Math.min.apply(Math, n);
        if( !t && j.isEmpty(n) )return 1 / 0;
        var e = {computed: 1 / 0, value: 1 / 0};
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {value: n, computed: a})
        }), e.value
    }, j.shuffle = function(n) {
        var t, r = 0, e = [];
        return A(n, function(n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    }, j.sample = function(n, t, r) {
        return arguments.length < 2 || r ? n[j.random(n.length - 1)] : j.shuffle(n).slice(0, Math.max(0, t))
    };
    var k = function(n) {
        return j.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    j.sortBy = function(n, t, r) {
        var e = k(t);
        return j.pluck(j.map(n,function(n, t, u) {
            return{value: n, index: t, criteria: e.call(r, n, t, u)}
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            if( r !== e ) {
                if( r > e || r === void 0 )return 1;
                if( e > r || e === void 0 )return-1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function(n) {
        return function(t, r, e) {
            var u = {}, i = null == r ? j.identity : k(r);
            return A(t, function(r, a) {
                var o = i.call(e, r, a, t);
                n(u, o, r)
            }), u
        }
    };
    j.groupBy = F(function(n, t, r) {
        (j.has(n, t) ? n[t] : n[t] = []).push(r)
    }), j.indexBy = F(function(n, t, r) {
        n[t] = r
    }), j.countBy = F(function(n, t) {
        j.has(n, t) ? n[t]++ : n[t] = 1
    }), j.sortedIndex = function(n, t, r, e) {
        r = null == r ? j.identity : k(r);
        for( var u = r.call(e, t), i = 0, a = n.length; a > i; ) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    }, j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
    }, j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, j.compact = function(n) {
        return j.filter(n, j.identity)
    };
    var M = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function(n, t) {
        return M(n, t, [])
    }, j.without = function(n) {
        return j.difference(n, o.call(arguments, 1))
    }, j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n, i = [], a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, j.union = function() {
        return j.uniq(j.flatten(arguments, !0))
    }, j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.indexOf(t, n) >= 0
            })
        })
    }, j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return!j.contains(t, n)
        })
    }, j.zip = function() {
        for( var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++ )t[r] = j.pluck(arguments, "" + r);
        return t
    }, j.object = function(n, t) {
        if( null == n )return{};
        for( var r = {}, e = 0, u = n.length; u > e; e++ )t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, j.indexOf = function(n, t, r) {
        if( null == n )return-1;
        var e = 0, u = n.length;
        if( r ) {
            if( "number" != typeof r )return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if( y && n.indexOf === y )return n.indexOf(t, r);
        for( ; u > e; e++ )if( n[e] === t )return e;
        return-1
    }, j.lastIndexOf = function(n, t, r) {
        if( null == n )return-1;
        var e = null != r;
        if( b && n.lastIndexOf === b )return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for( var u = e ? r : n.length; u--; )if( n[u] === t )return u;
        return-1
    }, j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for( var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u; )i[u++] = n, n += r;
        return i
    };
    var R = function() {
    };
    j.bind = function(n, t) {
        var r, e;
        if( _ && n.bind === _ )return _.apply(n, o.call(arguments, 1));
        if( !j.isFunction(n) )throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if( !(this instanceof e) )return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R;
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if( 0 === t.length )throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n)
        }), n
    }, j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity), function() {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, j.defer = function(n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }, j.throttle = function(n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u)
        };
        return function() {
            var l = new Date;
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
        }
    }, j.debounce = function(n, t, r) {
        var e, u, i, a, o;
        return function() {
            i = this, u = arguments, a = new Date;
            var c = function() {
                var l = new Date - a;
                t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u)))
            }, l = r && !e;
            return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o
        }
    }, j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, j.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, j.compose = function() {
        var n = arguments;
        return function() {
            for( var t = arguments, r = n.length - 1; r >= 0; r-- )t = [n[r].apply(this, t)];
            return t[0]
        }
    }, j.after = function(n, t) {
        return function() {
            return--n < 1 ? t.apply(this, arguments) : void 0
        }
    }, j.keys = w || function(n) {
        if( n !== Object(n) )throw new TypeError("Invalid object");
        var t = [];
        for( var r in n )j.has(n, r) && t.push(r);
        return t
    }, j.values = function(n) {
        for( var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++ )e[u] = n[t[u]];
        return e
    }, j.pairs = function(n) {
        for( var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++ )e[u] = [t[u], n[t[u]]];
        return e
    }, j.invert = function(n) {
        for( var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++ )t[n[r[e]]] = r[e];
        return t
    }, j.functions = j.methods = function(n) {
        var t = [];
        for( var r in n )j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if( t )for( var r in t )n[r] = t[r]
        }), n
    }, j.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, j.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for( var u in n )j.contains(r, u) || (t[u] = n[u]);
        return t
    }, j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if( t )for( var r in t )n[r] === void 0 && (n[r] = t[r])
        }), n
    }, j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }, j.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if( n === t )return 0 !== n || 1 / n == 1 / t;
        if( null == n || null == t )return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if( u != l.call(t) )return!1;
        switch( u ) {
            case"[object String]":
                return n == String(t);
            case"[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case"[object Date]":
            case"[object Boolean]":
                return+n == +t;
            case"[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if( "object" != typeof n || "object" != typeof t )return!1;
        for( var i = r.length; i--; )if( r[i] == n )return e[i] == t;
        var a = n.constructor, o = t.constructor;
        if( a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o) )return!1;
        r.push(n), e.push(t);
        var c = 0, f = !0;
        if( "[object Array]" == u ) {
            if( c = n.length, f = c == t.length )for( ; c-- && (f = S(n[c], t[c], r, e)); );
        } else {
            for( var s in n )if( j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e))) )break;
            if( f ) {
                for( s in t )if( j.has(t, s) && !c-- )break;
                f = !c
            }
        }
        return r.pop(), e.pop(), f
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, j.isEmpty = function(n) {
        if( null == n )return!0;
        if( j.isArray(n) || j.isString(n) )return 0 === n.length;
        for( var t in n )if( j.has(n, t) )return!1;
        return!0
    }, j.isElement = function(n) {
        return!(!n || 1 !== n.nodeType)
    }, j.isArray = x || function(n) {
        return"[object Array]" == l.call(n)
    }, j.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), j.isArguments(arguments) || (j.isArguments = function(n) {
        return!(!n || !j.has(n, "callee"))
    }), "function" != typeof/./ && (j.isFunction = function(n) {
        return"function" == typeof n
    }), j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, j.isNaN = function(n) {
        return j.isNumber(n) && n != +n
    }, j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, j.isNull = function(n) {
        return null === n
    }, j.isUndefined = function(n) {
        return n === void 0
    }, j.has = function(n, t) {
        return f.call(n, t)
    }, j.noConflict = function() {
        return n._ = t, this
    }, j.identity = function(n) {
        return n
    }, j.times = function(n, t, r) {
        for( var e = Array(Math.max(0, n)), u = 0; n > u; u++ )e[u] = t.call(r, u);
        return e
    }, j.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var I = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
    I.unescape = j.invert(I.escape);
    var T = {escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"), unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")};
    j.each(["escape", "unescape"], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(T[n], function(t) {
                return I[n][t]
            })
        }
    }), j.result = function(n, t) {
        if( null == n )return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }, j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, j.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var q = /(.)^/, B = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029"}, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), i = 0, a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return"\\" + B[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch( o ) {
            throw o.source = a, o
        }
        if( t )return e(t, j);
        var c = function(n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, j.chain = function(n) {
        return j(n).chain()
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), j.extend(j.prototype, {chain: function() {
        return this._chain = !0, this
    }, value                        : function() {
        return this._wrapped
    }})
}).call(this);
//# sourceMappingURL=underscore-min.map
;//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

    // Set up Backbone appropriately for the environment. Start with AMD.
    if( typeof define === 'function' && define.amd ) {
        define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Backbone.
            root.Backbone = factory(root, exports, _, $);
        });

        // Next for Node.js or CommonJS. jQuery may not be needed as a module.
    } else if( typeof exports !== 'undefined' ) {
        var _ = require('underscore');
        factory(root, exports, _);

        // Finally, as a browser global.
    } else {
        root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
    }

}(this, function(root, Backbone, _, $) {

    // Initial Setup
    // -------------

    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;

    // Create local references to array methods we'll want to use later.
    var array = [];
    var push = array.push;
    var slice = array.slice;
    var splice = array.splice;

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '1.1.2';

    // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
    // the `$` variable.
    Backbone.$ = $;

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return this;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
    // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
    // set a `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Backbone.Events
    // ---------------

    // A module that can be mixed in to *any object* in order to provide it with
    // custom events. You may bind with `on` or remove with `off` callback
    // functions to an event; `trigger`-ing an event fires all callbacks in
    // succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.on('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    var Events = Backbone.Events = {

        // Bind an event to a `callback` function. Passing `"all"` will bind
        // the callback to all events fired.
        on           : function(name, callback, context) {
            if( !eventsApi(this, 'on', name, [callback, context]) || !callback ) return this;
            this._events || (this._events = {});
            var events = this._events[name] || (this._events[name] = []);
            events.push({callback: callback, context: context, ctx: context || this});
            return this;
        },

        // Bind an event to only be triggered a single time. After the first time
        // the callback is invoked, it will be removed.
        once         : function(name, callback, context) {
            if( !eventsApi(this, 'once', name, [callback, context]) || !callback ) return this;
            var self = this;
            var once = _.once(function() {
                self.off(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
            return this.on(name, once, context);
        },

        // Remove one or many callbacks. If `context` is null, removes all
        // callbacks with that function. If `callback` is null, removes all
        // callbacks for the event. If `name` is null, removes all bound
        // callbacks for all events.
        off          : function(name, callback, context) {
            var retain, ev, events, names, i, l, j, k;
            if( !this._events || !eventsApi(this, 'off', name, [callback, context]) ) return this;
            if( !name && !callback && !context ) {
                this._events = void 0;
                return this;
            }
            names = name ? [name] : _.keys(this._events);
            for( i = 0, l = names.length; i < l; i++ ) {
                name = names[i];
                if( events = this._events[name] ) {
                    this._events[name] = retain = [];
                    if( callback || context ) {
                        for( j = 0, k = events.length; j < k; j++ ) {
                            ev = events[j];
                            if( (callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                                (context && context !== ev.context) ) {
                                retain.push(ev);
                            }
                        }
                    }
                    if( !retain.length ) delete this._events[name];
                }
            }

            return this;
        },

        // Trigger one or many events, firing all bound callbacks. Callbacks are
        // passed the same arguments as `trigger` is, apart from the event name
        // (unless you're listening on `"all"`, which will cause your callback to
        // receive the true name of the event as the first argument).
        trigger      : function(name) {
            if( !this._events ) return this;
            var args = slice.call(arguments, 1);
            if( !eventsApi(this, 'trigger', name, args) ) return this;
            var events = this._events[name];
            var allEvents = this._events.all;
            if( events ) triggerEvents(events, args);
            if( allEvents ) triggerEvents(allEvents, arguments);
            return this;
        },

        // Tell this object to stop listening to either specific events ... or
        // to every object it's currently listening to.
        stopListening: function(obj, name, callback) {
            var listeningTo = this._listeningTo;
            if( !listeningTo ) return this;
            var remove = !name && !callback;
            if( !callback && typeof name === 'object' ) callback = this;
            if( obj ) (listeningTo = {})[obj._listenId] = obj;
            for( var id in listeningTo ) {
                obj = listeningTo[id];
                obj.off(name, callback, this);
                if( remove || _.isEmpty(obj._events) ) delete this._listeningTo[id];
            }
            return this;
        }

    };

    // Regular expression used to split event strings.
    var eventSplitter = /\s+/;

    // Implement fancy features of the Events API such as multiple event
    // names `"change blur"` and jQuery-style event maps `{change: action}`
    // in terms of the existing API.
    var eventsApi = function(obj, action, name, rest) {
        if( !name ) return true;

        // Handle event maps.
        if( typeof name === 'object' ) {
            for( var key in name ) {
                obj[action].apply(obj, [key, name[key]].concat(rest));
            }
            return false;
        }

        // Handle space separated event names.
        if( eventSplitter.test(name) ) {
            var names = name.split(eventSplitter);
            for( var i = 0, l = names.length; i < l; i++ ) {
                obj[action].apply(obj, [names[i]].concat(rest));
            }
            return false;
        }

        return true;
    };

    // A difficult-to-believe, but optimized internal dispatch function for
    // triggering events. Tries to keep the usual cases speedy (most internal
    // Backbone events have 3 arguments).
    var triggerEvents = function(events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch( args.length ) {
            case 0:
                while( ++i < l ) (ev = events[i]).callback.call(ev.ctx);
                return;
            case 1:
                while( ++i < l ) (ev = events[i]).callback.call(ev.ctx, a1);
                return;
            case 2:
                while( ++i < l ) (ev = events[i]).callback.call(ev.ctx, a1, a2);
                return;
            case 3:
                while( ++i < l ) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                return;
            default:
                while( ++i < l ) (ev = events[i]).callback.apply(ev.ctx, args);
                return;
        }
    };

    var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

    // Inversion-of-control versions of `on` and `once`. Tell *this* object to
    // listen to an event in another object ... keeping track of what it's
    // listening to.
    _.each(listenMethods, function(implementation, method) {
        Events[method] = function(obj, name, callback) {
            var listeningTo = this._listeningTo || (this._listeningTo = {});
            var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
            listeningTo[id] = obj;
            if( !callback && typeof name === 'object' ) callback = this;
            obj[implementation](name, callback, this);
            return this;
        };
    });

    // Aliases for backwards compatibility.
    Events.bind = Events.on;
    Events.unbind = Events.off;

    // Allow the `Backbone` object to serve as a global event bus, for folks who
    // want global "pubsub" in a convenient place.
    _.extend(Backbone, Events);

    // Backbone.Model
    // --------------

    // Backbone **Models** are the basic data object in the framework --
    // frequently representing a row in a table in a database on your server.
    // A discrete chunk of data and a bunch of useful, related methods for
    // performing computations and transformations on that data.

    // Create a new model with the specified attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    var Model = Backbone.Model = function(attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId('c');
        this.attributes = {};
        if( options.collection ) this.collection = options.collection;
        if( options.parse ) attrs = this.parse(attrs, options) || {};
        attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Model.prototype, Events, {

        // A hash of attributes whose current and previous value differ.
        changed           : null,

        // The value returned during the last failed validation.
        validationError   : null,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute       : 'id',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize        : function() {
        },

        // Return a copy of the model's `attributes` object.
        toJSON            : function(options) {
            return _.clone(this.attributes);
        },

        // Proxy `Backbone.sync` by default -- but override this if you need
        // custom syncing semantics for *this* particular model.
        sync              : function() {
            return Backbone.sync.apply(this, arguments);
        },

        // Get the value of an attribute.
        get               : function(attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape            : function(attr) {
            return _.escape(this.get(attr));
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has               : function(attr) {
            return this.get(attr) != null;
        },

        // Set a hash of model attributes on the object, firing `"change"`. This is
        // the core primitive operation of a model, updating the data and notifying
        // anyone who needs to know about the change in state. The heart of the beast.
        set               : function(key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if( key == null ) return this;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if( typeof key === 'object' ) {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options || (options = {});

            // Run validation.
            if( !this._validate(attrs, options) ) return false;

            // Extract attributes and options.
            unset = options.unset;
            silent = options.silent;
            changes = [];
            changing = this._changing;
            this._changing = true;

            if( !changing ) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;

            // Check for changes of `id`.
            if( this.idAttribute in attrs ) this.id = attrs[this.idAttribute];

            // For each `set` attribute, update or delete the current value.
            for( attr in attrs ) {
                val = attrs[attr];
                if( !_.isEqual(current[attr], val) ) changes.push(attr);
                if( !_.isEqual(prev[attr], val) ) {
                    this.changed[attr] = val;
                } else {
                    delete this.changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }

            // Trigger all relevant attribute changes.
            if( !silent ) {
                if( changes.length ) this._pending = options;
                for( var i = 0, l = changes.length; i < l; i++ ) {
                    this.trigger('change:' + changes[i], this, current[changes[i]], options);
                }
            }

            // You might be wondering why there's a `while` loop here. Changes can
            // be recursively nested within `"change"` events.
            if( changing ) return this;
            if( !silent ) {
                while( this._pending ) {
                    options = this._pending;
                    this._pending = false;
                    this.trigger('change', this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },

        // Remove an attribute from the model, firing `"change"`. `unset` is a noop
        // if the attribute doesn't exist.
        unset             : function(attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {unset: true}));
        },

        // Clear all attributes on the model, firing `"change"`.
        clear             : function(options) {
            var attrs = {};
            for( var key in this.attributes ) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {unset: true}));
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged        : function(attr) {
            if( attr == null ) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes : function(diff) {
            if( !diff ) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            for( var attr in diff ) {
                if( _.isEqual(old[attr], (val = diff[attr])) ) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous          : function(attr) {
            if( attr == null || !this._previousAttributes ) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function() {
            return _.clone(this._previousAttributes);
        },

        // Fetch the model from the server. If the server's representation of the
        // model differs from its current attributes, they will be overridden,
        // triggering a `"change"` event.
        fetch             : function(options) {
            options = options ? _.clone(options) : {};
            if( options.parse === void 0 ) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                if( !model.set(model.parse(resp, options), options) ) return false;
                if( success ) success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save              : function(key, val, options) {
            var attrs, method, xhr, attributes = this.attributes;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if( key == null || typeof key === 'object' ) {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options = _.extend({validate: true}, options);

            // If we're not waiting and attributes exist, save acts as
            // `set(attr).save(null, opts)` with validation. Otherwise, check if
            // the model will be valid when the attributes, if any, are set.
            if( attrs && !options.wait ) {
                if( !this.set(attrs, options) ) return false;
            } else {
                if( !this._validate(attrs, options) ) return false;
            }

            // Set temporary attributes if `{wait: true}`.
            if( attrs && options.wait ) {
                this.attributes = _.extend({}, attributes, attrs);
            }

            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            if( options.parse === void 0 ) options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                // Ensure attributes are restored during synchronous saves.
                model.attributes = attributes;
                var serverAttrs = model.parse(resp, options);
                if( options.wait ) serverAttrs = _.extend(attrs || {}, serverAttrs);
                if( _.isObject(serverAttrs) && !model.set(serverAttrs, options) ) {
                    return false;
                }
                if( success ) success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);

            method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
            if( method === 'patch' ) options.attrs = attrs;
            xhr = this.sync(method, this, options);

            // Restore attributes.
            if( attrs && options.wait ) this.attributes = attributes;

            return xhr;
        },

        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy           : function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;

            var destroy = function() {
                model.trigger('destroy', model, model.collection, options);
            };

            options.success = function(resp) {
                if( options.wait || model.isNew() ) destroy();
                if( success ) success(model, resp, options);
                if( !model.isNew() ) model.trigger('sync', model, resp, options);
            };

            if( this.isNew() ) {
                options.success();
                return false;
            }
            wrapError(this, options);

            var xhr = this.sync('delete', this, options);
            if( !options.wait ) destroy();
            return xhr;
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url               : function() {
            var base =
                _.result(this, 'urlRoot') ||
                    _.result(this.collection, 'url') ||
                    urlError();
            if( this.isNew() ) return base;
            return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse             : function(resp, options) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone             : function() {
            return new this.constructor(this.attributes);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew             : function() {
            return !this.has(this.idAttribute);
        },

        // Check if the model is currently in a valid state.
        isValid           : function(options) {
            return this._validate({}, _.extend(options || {}, { validate: true }));
        },

        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
        _validate         : function(attrs, options) {
            if( !options.validate || !this.validate ) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if( !error ) return true;
            this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
            return false;
        }

    });

    // Underscore methods that we want to implement on the Model.
    var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

    // Mix in each Underscore method as a proxy to `Model#attributes`.
    _.each(modelMethods, function(method) {
        Model.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.attributes);
            return _[method].apply(_, args);
        };
    });

    // Backbone.Collection
    // -------------------

    // If models tend to represent a single row of data, a Backbone Collection is
    // more analagous to a table full of data ... or a small slice or page of that
    // table, or a collection of rows that belong together for a particular reason
    // -- all of the messages in this particular folder, all of the documents
    // belonging to this particular author, and so on. Collections maintain
    // indexes of their models, both in order, and for lookup by `id`.

    // Create a new **Collection**, perhaps to contain a specific type of `model`.
    // If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    var Collection = Backbone.Collection = function(models, options) {
        options || (options = {});
        if( options.model ) this.model = options.model;
        if( options.comparator !== void 0 ) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if( models ) this.reset(models, _.extend({silent: true}, options));
    };

    // Default options for `Collection#set`.
    var setOptions = {add: true, remove: true, merge: true};
    var addOptions = {add: true, remove: false};

    // Define the Collection's inheritable methods.
    _.extend(Collection.prototype, Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model           : Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize      : function() {
        },

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON          : function(options) {
            return this.map(function(model) {
                return model.toJSON(options);
            });
        },

        // Proxy `Backbone.sync` by default.
        sync            : function() {
            return Backbone.sync.apply(this, arguments);
        },

        // Add a model, or list of models to the set.
        add             : function(models, options) {
            return this.set(models, _.extend({merge: false}, options, addOptions));
        },

        // Remove a model, or a list of models from the set.
        remove          : function(models, options) {
            var singular = !_.isArray(models);
            models = singular ? [models] : _.clone(models);
            options || (options = {});
            var i, l, index, model;
            for( i = 0, l = models.length; i < l; i++ ) {
                model = models[i] = this.get(models[i]);
                if( !model ) continue;
                delete this._byId[model.id];
                delete this._byId[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if( !options.silent ) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }
                this._removeReference(model, options);
            }
            return singular ? models[0] : models;
        },

        // Update a collection by `set`-ing a new list of models, adding new ones,
        // removing models that are no longer present, and merging models that
        // already exist in the collection, as necessary. Similar to **Model#set**,
        // the core operation for updating the data contained by the collection.
        set             : function(models, options) {
            options = _.defaults({}, options, setOptions);
            if( options.parse ) models = this.parse(models, options);
            var singular = !_.isArray(models);
            models = singular ? (models ? [models] : []) : _.clone(models);
            var i, l, id, model, attrs, existing, sort;
            var at = options.at;
            var targetModel = this.model;
            var sortable = this.comparator && (at == null) && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;
            var toAdd = [], toRemove = [], modelMap = {};
            var add = options.add, merge = options.merge, remove = options.remove;
            var order = !sortable && add && remove ? [] : false;

            // Turn bare objects into model references, and prevent invalid models
            // from being added.
            for( i = 0, l = models.length; i < l; i++ ) {
                attrs = models[i] || {};
                if( attrs instanceof Model ) {
                    id = model = attrs;
                } else {
                    id = attrs[targetModel.prototype.idAttribute || 'id'];
                }

                // If a duplicate is found, prevent it from being added and
                // optionally merge it into the existing model.
                if( existing = this.get(id) ) {
                    if( remove ) modelMap[existing.cid] = true;
                    if( merge ) {
                        attrs = attrs === model ? model.attributes : attrs;
                        if( options.parse ) attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        if( sortable && !sort && existing.hasChanged(sortAttr) ) sort = true;
                    }
                    models[i] = existing;

                    // If this is a new, valid model, push it to the `toAdd` list.
                } else if( add ) {
                    model = models[i] = this._prepareModel(attrs, options);
                    if( !model ) continue;
                    toAdd.push(model);
                    this._addReference(model, options);
                }

                // Do not add multiple models with the same `id`.
                model = existing || model;
                if( order && (model.isNew() || !modelMap[model.id]) ) order.push(model);
                modelMap[model.id] = true;
            }

            // Remove nonexistent models if appropriate.
            if( remove ) {
                for( i = 0, l = this.length; i < l; ++i ) {
                    if( !modelMap[(model = this.models[i]).cid] ) toRemove.push(model);
                }
                if( toRemove.length ) this.remove(toRemove, options);
            }

            // See if sorting is needed, update `length` and splice in new models.
            if( toAdd.length || (order && order.length) ) {
                if( sortable ) sort = true;
                this.length += toAdd.length;
                if( at != null ) {
                    for( i = 0, l = toAdd.length; i < l; i++ ) {
                        this.models.splice(at + i, 0, toAdd[i]);
                    }
                } else {
                    if( order ) this.models.length = 0;
                    var orderedModels = order || toAdd;
                    for( i = 0, l = orderedModels.length; i < l; i++ ) {
                        this.models.push(orderedModels[i]);
                    }
                }
            }

            // Silently sort the collection if appropriate.
            if( sort ) this.sort({silent: true});

            // Unless silenced, it's time to fire all appropriate add/sort events.
            if( !options.silent ) {
                for( i = 0, l = toAdd.length; i < l; i++ ) {
                    (model = toAdd[i]).trigger('add', model, this, options);
                }
                if( sort || (order && order.length) ) this.trigger('sort', this, options);
            }

            // Return the added (or merged) model (or models).
            return singular ? models[0] : models;
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any granular `add` or `remove` events. Fires `reset` when finished.
        // Useful for bulk operations and optimizations.
        reset           : function(models, options) {
            options || (options = {});
            for( var i = 0, l = this.models.length; i < l; i++ ) {
                this._removeReference(this.models[i], options);
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({silent: true}, options));
            if( !options.silent ) this.trigger('reset', this, options);
            return models;
        },

        // Add a model to the end of the collection.
        push            : function(model, options) {
            return this.add(model, _.extend({at: this.length}, options));
        },

        // Remove a model from the end of the collection.
        pop             : function(options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },

        // Add a model to the beginning of the collection.
        unshift         : function(model, options) {
            return this.add(model, _.extend({at: 0}, options));
        },

        // Remove a model from the beginning of the collection.
        shift           : function(options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },

        // Slice out a sub-array of models from the collection.
        slice           : function() {
            return slice.apply(this.models, arguments);
        },

        // Get a model from the set by id.
        get             : function(obj) {
            if( obj == null ) return void 0;
            return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
        },

        // Get the model at the given index.
        at              : function(index) {
            return this.models[index];
        },

        // Return models with matching attributes. Useful for simple cases of
        // `filter`.
        where           : function(attrs, first) {
            if( _.isEmpty(attrs) ) return first ? void 0 : [];
            return this[first ? 'find' : 'filter'](function(model) {
                for( var key in attrs ) {
                    if( attrs[key] !== model.get(key) ) return false;
                }
                return true;
            });
        },

        // Return the first model with matching attributes. Useful for simple cases
        // of `find`.
        findWhere       : function(attrs) {
            return this.where(attrs, true);
        },

        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort            : function(options) {
            if( !this.comparator ) throw new Error('Cannot sort a set without a comparator');
            options || (options = {});

            // Run sort based on type of `comparator`.
            if( _.isString(this.comparator) || this.comparator.length === 1 ) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(_.bind(this.comparator, this));
            }

            if( !options.silent ) this.trigger('sort', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck           : function(attr) {
            return _.invoke(this.models, 'get', attr);
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `reset: true` is passed, the response
        // data will be passed through the `reset` method instead of `set`.
        fetch           : function(options) {
            options = options ? _.clone(options) : {};
            if( options.parse === void 0 ) options.parse = true;
            var success = options.success;
            var collection = this;
            options.success = function(resp) {
                var method = options.reset ? 'reset' : 'set';
                collection[method](resp, options);
                if( success ) success(collection, resp, options);
                collection.trigger('sync', collection, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },

        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create          : function(model, options) {
            options = options ? _.clone(options) : {};
            if( !(model = this._prepareModel(model, options)) ) return false;
            if( !options.wait ) this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function(model, resp) {
                if( options.wait ) collection.add(model, options);
                if( success ) success(model, resp, options);
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse           : function(resp, options) {
            return resp;
        },

        // Create a new collection with an identical list of models as this one.
        clone           : function() {
            return new this.constructor(this.models);
        },

        // Private method to reset all internal state. Called when the collection
        // is first initialized or reset.
        _reset          : function() {
            this.length = 0;
            this.models = [];
            this._byId = {};
        },

        // Prepare a hash of attributes (or other model) to be added to this
        // collection.
        _prepareModel   : function(attrs, options) {
            if( attrs instanceof Model ) return attrs;
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if( !model.validationError ) return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        },

        // Internal method to create a model's ties to a collection.
        _addReference   : function(model, options) {
            this._byId[model.cid] = model;
            if( model.id != null ) this._byId[model.id] = model;
            if( !model.collection ) model.collection = this;
            model.on('all', this._onModelEvent, this);
        },

        // Internal method to sever a model's ties to a collection.
        _removeReference: function(model, options) {
            if( this === model.collection ) delete model.collection;
            model.off('all', this._onModelEvent, this);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent   : function(event, model, collection, options) {
            if( (event === 'add' || event === 'remove') && collection !== this ) return;
            if( event === 'destroy' ) this.remove(model, options);
            if( model && event === 'change:' + model.idAttribute ) {
                delete this._byId[model.previous(model.idAttribute)];
                if( model.id != null ) this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    // 90% of the core usefulness of Backbone Collections is actually implemented
    // right here:
    var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
        'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
        'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
        'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
        'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
        'lastIndexOf', 'isEmpty', 'chain', 'sample'];

    // Mix in each Underscore method as a proxy to `Collection#models`.
    _.each(methods, function(method) {
        Collection.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });

    // Underscore methods that take a property name as an argument.
    var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

    // Use attributes instead of properties.
    _.each(attributeMethods, function(method) {
        Collection.prototype[method] = function(value, context) {
            var iterator = _.isFunction(value) ? value : function(model) {
                return model.get(value);
            };
            return _[method](this.models, iterator, context);
        };
    });

    // Backbone.View
    // -------------

    // Backbone Views are almost more convention than they are actual code. A View
    // is simply a JavaScript object that represents a logical chunk of UI in the
    // DOM. This might be a single item, an entire list, a sidebar or panel, or
    // even the surrounding frame which wraps your whole app. Defining a chunk of
    // UI as a **View** allows you to define your DOM events declaratively, without
    // having to worry about render order ... and makes it easy for the view to
    // react to specific changes in the state of your models.

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    var View = Backbone.View = function(options) {
        this.cid = _.uniqueId('view');
        options || (options = {});
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };

    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(View.prototype, Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName         : 'div',

        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be preferred to global lookups where possible.
        $               : function(selector) {
            return this.$el.find(selector);
        },

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize      : function() {
        },

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render          : function() {
            return this;
        },

        // Remove this view by taking the element out of the DOM, and removing any
        // applicable Backbone.Events listeners.
        remove          : function() {
            this.$el.remove();
            this.stopListening();
            return this;
        },

        // Change the view's element (`this.el` property), including event
        // re-delegation.
        setElement      : function(element, delegate) {
            if( this.$el ) this.undelegateEvents();
            this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
            this.el = this.$el[0];
            if( delegate !== false ) this.delegateEvents();
            return this;
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save',
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        // This only works for delegate-able events: not `focus`, `blur`, and
        // not `change`, `submit`, and `reset` in Internet Explorer.
        delegateEvents  : function(events) {
            if( !(events || (events = _.result(this, 'events'))) ) return this;
            this.undelegateEvents();
            for( var key in events ) {
                var method = events[key];
                if( !_.isFunction(method) ) method = this[events[key]];
                if( !method ) continue;

                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += '.delegateEvents' + this.cid;
                if( selector === '' ) {
                    this.$el.on(eventName, method);
                } else {
                    this.$el.on(eventName, selector, method);
                }
            }
            return this;
        },

        // Clears all callbacks previously bound to the view with `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function() {
            this.$el.off('.delegateEvents' + this.cid);
            return this;
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement  : function() {
            if( !this.el ) {
                var attrs = _.extend({}, _.result(this, 'attributes'));
                if( this.id ) attrs.id = _.result(this, 'id');
                if( this.className ) attrs['class'] = _.result(this, 'className');
                var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
                this.setElement($el, false);
            } else {
                this.setElement(_.result(this, 'el'), false);
            }
        }

    });

    // Backbone.sync
    // -------------

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded`
    // instead of `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];

        // Default options, unless specified.
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });

        // Default JSON-request options.
        var params = {type: type, dataType: 'json'};

        // Ensure that we have a URL.
        if( !options.url ) {
            params.url = _.result(model, 'url') || urlError();
        }

        // Ensure that we have the appropriate request data.
        if( options.data == null && model && (method === 'create' || method === 'update' || method === 'patch') ) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(options.attrs || model.toJSON(options));
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if( options.emulateJSON ) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model: params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if( options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH') ) {
            params.type = 'POST';
            if( options.emulateJSON ) params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader('X-HTTP-Method-Override', type);
                if( beforeSend ) return beforeSend.apply(this, arguments);
            };
        }

        // Don't process data on a non-GET request.
        if( params.type !== 'GET' && !options.emulateJSON ) {
            params.processData = false;
        }

        // If we're sending a `PATCH` request, and we're in an old Internet Explorer
        // that still has ActiveX enabled by default, override jQuery to use that
        // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
        if( params.type === 'PATCH' && noXhrPatch ) {
            params.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP");
            };
        }

        // Make the request, allowing the user to override any Ajax options.
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger('request', model, xhr, options);
        return xhr;
    };

    var noXhrPatch =
        typeof window !== 'undefined' && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'patch' : 'PATCH',
        'delete': 'DELETE',
        'read'  : 'GET'
    };

    // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
    // Override this if you'd like to use a different library.
    Backbone.ajax = function() {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };

    // Backbone.Router
    // ---------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    var Router = Backbone.Router = function(options) {
        options || (options = {});
        if( options.routes ) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Router.prototype, Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize        : function() {
        },

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route             : function(route, name, callback) {
            if( !_.isRegExp(route) ) route = this._routeToRegExp(route);
            if( _.isFunction(name) ) {
                callback = name;
                name = '';
            }
            if( !callback ) callback = this[name];
            var router = this;
            Backbone.history.route(route, function(fragment) {
                var args = router._extractParameters(route, fragment);
                router.execute(callback, args);
                router.trigger.apply(router, ['route:' + name].concat(args));
                router.trigger('route', name, args);
                Backbone.history.trigger('route', router, name, args);
            });
            return this;
        },

        // Execute a route handler with the provided parameters.  This is an
        // excellent place to do pre-route setup or post-route cleanup.
        execute           : function(callback, args) {
            if( callback ) callback.apply(this, args);
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate          : function(fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes       : function() {
            if( !this.routes ) return;
            this.routes = _.result(this, 'routes');
            var route, routes = _.keys(this.routes);
            while( (route = routes.pop()) != null ) {
                this.route(route, this.routes[route]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp    : function(route) {
            route = route.replace(escapeRegExp, '\\$&')
                .replace(optionalParam, '(?:$1)?')
                .replace(namedParam, function(match, optional) {
                    return optional ? match : '([^/?]+)';
                })
                .replace(splatParam, '([^?]*?)');
            return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted decoded parameters. Empty or unmatched parameters will be
        // treated as `null` to normalize cross-browser behavior.
        _extractParameters: function(route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function(param, i) {
                // Don't decode the search params.
                if( i === params.length - 1 ) return param || null;
                return param ? decodeURIComponent(param) : null;
            });
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on either
    // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
    // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
    // and URL fragments. If the browser supports neither (old IE, natch),
    // falls back to polling.
    var History = Backbone.History = function() {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');

        // Ensure that `History` can be used outside of the browser.
        if( typeof window !== 'undefined' ) {
            this.location = window.location;
            this.history = window.history;
        }
    };

    // Cached regex for stripping a leading hash/slash and trailing space.
    var routeStripper = /^[#\/]|\s+$/g;

    // Cached regex for stripping leading and trailing slashes.
    var rootStripper = /^\/+|\/+$/g;

    // Cached regex for detecting MSIE.
    var isExplorer = /msie [\w.]+/;

    // Cached regex for removing a trailing slash.
    var trailingSlash = /\/$/;

    // Cached regex for stripping urls of hash.
    var pathStripper = /#.*$/;

    // Has the history handling already been started?
    History.started = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(History.prototype, Events, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval   : 50,

        // Are we at the app root?
        atRoot     : function() {
            return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
        },

        // Gets the true hash value. Cannot use location.hash directly due to bug
        // in Firefox where location.hash will always be decoded.
        getHash    : function(window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },

        // Get the cross-browser normalized URL fragment, either from the URL,
        // the hash, or the override.
        getFragment: function(fragment, forcePushState) {
            if( fragment == null ) {
                if( this._hasPushState || !this._wantsHashChange || forcePushState ) {
                    fragment = decodeURI(this.location.pathname + this.location.search);
                    var root = this.root.replace(trailingSlash, '');
                    if( !fragment.indexOf(root) ) fragment = fragment.slice(root.length);
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, '');
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start      : function(options) {
            if( History.started ) throw new Error("Backbone.history has already been started");
            History.started = true;

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            this.options = _.extend({root: '/'}, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var fragment = this.getFragment();
            var docMode = document.documentMode;
            var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

            // Normalize root to always include a leading and trailing slash.
            this.root = ('/' + this.root + '/').replace(rootStripper, '/');

            if( oldIE && this._wantsHashChange ) {
                var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = frame.hide().appendTo('body')[0].contentWindow;
                this.navigate(fragment);
            }

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if( this._hasPushState ) {
                Backbone.$(window).on('popstate', this.checkUrl);
            } else if( this._wantsHashChange && ('onhashchange' in window) && !oldIE ) {
                Backbone.$(window).on('hashchange', this.checkUrl);
            } else if( this._wantsHashChange ) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }

            // Determine if we need to change the base url, for a pushState link
            // opened by a non-pushState browser.
            this.fragment = fragment;
            var loc = this.location;

            // Transition from hashChange to pushState or vice versa if both are
            // requested.
            if( this._wantsHashChange && this._wantsPushState ) {

                // If we've started off with a route from a `pushState`-enabled
                // browser, but we're currently in a browser that doesn't support it...
                if( !this._hasPushState && !this.atRoot() ) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + '#' + this.fragment);
                    // Return immediately as browser will do redirect to new url
                    return true;

                    // Or if we've started out with a hash-based route, but we're currently
                    // in a browser where it could be `pushState`-based instead...
                } else if( this._hasPushState && this.atRoot() && loc.hash ) {
                    this.fragment = this.getHash().replace(routeStripper, '');
                    this.history.replaceState({}, document.title, this.root + this.fragment);
                }

            }

            if( !this.options.silent ) return this.loadUrl();
        },

        // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        stop       : function() {
            Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
            if( this._checkUrlInterval ) clearInterval(this._checkUrlInterval);
            History.started = false;
        },

        // Add a route to be tested when the fragment changes. Routes added later
        // may override previous routes.
        route      : function(route, callback) {
            this.handlers.unshift({route: route, callback: callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl   : function(e) {
            var current = this.getFragment();
            if( current === this.fragment && this.iframe ) {
                current = this.getFragment(this.getHash(this.iframe));
            }
            if( current === this.fragment ) return false;
            if( this.iframe ) this.navigate(current);
            this.loadUrl();
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl    : function(fragment) {
            fragment = this.fragment = this.getFragment(fragment);
            return _.any(this.handlers, function(handler) {
                if( handler.route.test(fragment) ) {
                    handler.callback(fragment);
                    return true;
                }
            });
        },

        // Save a fragment into the hash history, or replace the URL state if the
        // 'replace' option is passed. You are responsible for properly URL-encoding
        // the fragment in advance.
        //
        // The options object can contain `trigger: true` if you wish to have the
        // route callback be fired (not usually desirable), or `replace: true`, if
        // you wish to modify the current URL without adding an entry to the history.
        navigate   : function(fragment, options) {
            if( !History.started ) return false;
            if( !options || options === true ) options = {trigger: !!options};

            var url = this.root + (fragment = this.getFragment(fragment || ''));

            // Strip the hash for matching.
            fragment = fragment.replace(pathStripper, '');

            if( this.fragment === fragment ) return;
            this.fragment = fragment;

            // Don't include a trailing slash on the root.
            if( fragment === '' && url !== '/' ) url = url.slice(0, -1);

            // If pushState is available, we use it to set the fragment as a real URL.
            if( this._hasPushState ) {
                this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

                // If hash changes haven't been explicitly disabled, update the hash
                // fragment to store history.
            } else if( this._wantsHashChange ) {
                this._updateHash(this.location, fragment, options.replace);
                if( this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe))) ) {
                    // Opening and closing the iframe tricks IE7 and earlier to push a
                    // history entry on hash-tag change.  When replace is true, we don't
                    // want this.
                    if( !options.replace ) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, fragment, options.replace);
                }

                // If you've told us that you explicitly don't want fallback hashchange-
                // based history, then `navigate` becomes a page refresh.
            } else {
                return this.location.assign(url);
            }
            if( options.trigger ) return this.loadUrl(fragment);
        },

        // Update the hash location, either replacing the current entry, or adding
        // a new one to the browser history.
        _updateHash: function(location, fragment, replace) {
            if( replace ) {
                var href = location.href.replace(/(javascript:|#).*$/, '');
                location.replace(href + '#' + fragment);
            } else {
                // Some browsers require that `hash` contains a leading #.
                location.hash = '#' + fragment;
            }
        }

    });

    // Create the default Backbone.history.
    Backbone.history = new History;

    // Helpers
    // -------

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var extend = function(protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if( protoProps && _.has(protoProps, 'constructor') ) {
            child = protoProps.constructor;
        } else {
            child = function() {
                return parent.apply(this, arguments);
            };
        }

        // Add static properties to the constructor function, if supplied.
        _.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function() {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if( protoProps ) _.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Set up inheritance for the model, collection, router, view and history.
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function() {
        throw new Error('A "url" property or function must be specified');
    };

    // Wrap an optional error callback with a fallback error event.
    var wrapError = function(model, options) {
        var error = options.error;
        options.error = function(resp) {
            if( error ) error(model, resp, options);
            model.trigger('error', model, resp, options);
        };
    };

    return Backbone;

}));
/*!

 handlebars v1.3.0

 Copyright (C) 2011 by Yehuda Katz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @license
 */
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
    var __module4__ = (function() {
        "use strict";
        var __exports__;
        // Build out our basic SafeString type
        function SafeString(string) {
            this.string = string;
        }

        SafeString.prototype.toString = function() {
            return "" + this.string;
        };

        __exports__ = SafeString;
        return __exports__;
    })();

// handlebars/utils.js
    var __module3__ = (function(__dependency1__) {
        "use strict";
        var __exports__ = {};
        /*jshint -W004 */
        var SafeString = __dependency1__;

        var escape = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };

        var badChars = /[&<>"'`]/g;
        var possible = /[&<>"'`]/;

        function escapeChar(chr) {
            return escape[chr] || "&amp;";
        }

        function extend(obj, value) {
            for( var key in value ) {
                if( Object.prototype.hasOwnProperty.call(value, key) ) {
                    obj[key] = value[key];
                }
            }
        }

        __exports__.extend = extend;
        var toString = Object.prototype.toString;
        __exports__.toString = toString;
        // Sourced from lodash
        // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
        var isFunction = function(value) {
            return typeof value === 'function';
        };
        // fallback for older versions of Chrome and Safari
        if( isFunction(/x/) ) {
            isFunction = function(value) {
                return typeof value === 'function' && toString.call(value) === '[object Function]';
            };
        }
        var isFunction;
        __exports__.isFunction = isFunction;
        var isArray = Array.isArray || function(value) {
            return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
        };
        __exports__.isArray = isArray;

        function escapeExpression(string) {
            // don't escape SafeStrings, since they're already safe
            if( string instanceof SafeString ) {
                return string.toString();
            } else if( !string && string !== 0 ) {
                return "";
            }

            // Force a string conversion as this will be done by the append regardless and
            // the regex test will do this transparently behind the scenes, causing issues if
            // an object's to string has escaped characters in it.
            string = "" + string;

            if( !possible.test(string) ) {
                return string;
            }
            return string.replace(badChars, escapeChar);
        }

        __exports__.escapeExpression = escapeExpression;
        function isEmpty(value) {
            if( !value && value !== 0 ) {
                return true;
            } else if( isArray(value) && value.length === 0 ) {
                return true;
            } else {
                return false;
            }
        }

        __exports__.isEmpty = isEmpty;
        return __exports__;
    })(__module4__);

// handlebars/exception.js
    var __module5__ = (function() {
        "use strict";
        var __exports__;

        var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

        function Exception(message, node) {
            var line;
            if( node && node.firstLine ) {
                line = node.firstLine;

                message += ' - ' + line + ':' + node.firstColumn;
            }

            var tmp = Error.prototype.constructor.call(this, message);

            // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
            for( var idx = 0; idx < errorProps.length; idx++ ) {
                this[errorProps[idx]] = tmp[errorProps[idx]];
            }

            if( line ) {
                this.lineNumber = line;
                this.column = node.firstColumn;
            }
        }

        Exception.prototype = new Error();

        __exports__ = Exception;
        return __exports__;
    })();

// handlebars/base.js
    var __module2__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__ = {};
        var Utils = __dependency1__;
        var Exception = __dependency2__;

        var VERSION = "1.3.0";
        __exports__.VERSION = VERSION;
        var COMPILER_REVISION = 4;
        __exports__.COMPILER_REVISION = COMPILER_REVISION;
        var REVISION_CHANGES = {
            1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
            2: '== 1.0.0-rc.3',
            3: '== 1.0.0-rc.4',
            4: '>= 1.0.0'
        };
        __exports__.REVISION_CHANGES = REVISION_CHANGES;
        var isArray = Utils.isArray,
            isFunction = Utils.isFunction,
            toString = Utils.toString,
            objectType = '[object Object]';

        function HandlebarsEnvironment(helpers, partials) {
            this.helpers = helpers || {};
            this.partials = partials || {};

            registerDefaultHelpers(this);
        }

        __exports__.HandlebarsEnvironment = HandlebarsEnvironment;
        HandlebarsEnvironment.prototype = {
            constructor: HandlebarsEnvironment,

            logger: logger,
            log   : log,

            registerHelper: function(name, fn, inverse) {
                if( toString.call(name) === objectType ) {
                    if( inverse || fn ) {
                        throw new Exception('Arg not supported with multiple helpers');
                    }
                    Utils.extend(this.helpers, name);
                } else {
                    if( inverse ) {
                        fn.not = inverse;
                    }
                    this.helpers[name] = fn;
                }
            },

            registerPartial: function(name, str) {
                if( toString.call(name) === objectType ) {
                    Utils.extend(this.partials, name);
                } else {
                    this.partials[name] = str;
                }
            }
        };

        function registerDefaultHelpers(instance) {
            instance.registerHelper('helperMissing', function(arg) {
                if( arguments.length === 2 ) {
                    return undefined;
                } else {
                    throw new Exception("Missing helper: '" + arg + "'");
                }
            });

            instance.registerHelper('blockHelperMissing', function(context, options) {
                var inverse = options.inverse || function() {
                }, fn = options.fn;

                if( isFunction(context) ) {
                    context = context.call(this);
                }

                if( context === true ) {
                    return fn(this);
                } else if( context === false || context == null ) {
                    return inverse(this);
                } else if( isArray(context) ) {
                    if( context.length > 0 ) {
                        return instance.helpers.each(context, options);
                    } else {
                        return inverse(this);
                    }
                } else {
                    return fn(context);
                }
            });

            instance.registerHelper('each', function(context, options) {
                var fn = options.fn, inverse = options.inverse;
                var i = 0, ret = "", data;

                if( isFunction(context) ) {
                    context = context.call(this);
                }

                if( options.data ) {
                    data = createFrame(options.data);
                }

                if( context && typeof context === 'object' ) {
                    if( isArray(context) ) {
                        for( var j = context.length; i < j; i++ ) {
                            if( data ) {
                                data.index = i;
                                data.first = (i === 0);
                                data.last = (i === (context.length - 1));
                            }
                            ret = ret + fn(context[i], { data: data });
                        }
                    } else {
                        for( var key in context ) {
                            if( context.hasOwnProperty(key) ) {
                                if( data ) {
                                    data.key = key;
                                    data.index = i;
                                    data.first = (i === 0);
                                }
                                ret = ret + fn(context[key], {data: data});
                                i++;
                            }
                        }
                    }
                }

                if( i === 0 ) {
                    ret = inverse(this);
                }

                return ret;
            });

            instance.registerHelper('if', function(conditional, options) {
                if( isFunction(conditional) ) {
                    conditional = conditional.call(this);
                }

                // Default behavior is to render the positive path if the value is truthy and not empty.
                // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                if( (!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional) ) {
                    return options.inverse(this);
                } else {
                    return options.fn(this);
                }
            });

            instance.registerHelper('unless', function(conditional, options) {
                return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
            });

            instance.registerHelper('with', function(context, options) {
                if( isFunction(context) ) {
                    context = context.call(this);
                }

                if( !Utils.isEmpty(context) ) return options.fn(context);
            });

            instance.registerHelper('log', function(context, options) {
                var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
                instance.log(context, level);
            });
        }

        var logger = {
            methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

            // State enum
            DEBUG    : 0,
            INFO     : 1,
            WARN     : 2,
            ERROR    : 3,
            level    : 3,

            // can be overridden in the host environment
            log      : function(level, obj) {
                if( logger.level <= level ) {
                    var method = logger.methodMap[level];
                    if( typeof console !== 'undefined' && console[method] ) {
                        console[method].call(console, obj);
                    }
                }
            }
        };
        __exports__.logger = logger;
        function log(level, obj) {
            logger.log(obj, level);
        }

        __exports__.log = log;
        var createFrame = function(object) {
            var obj = {};
            Utils.extend(obj, object);
            return obj;
        };
        __exports__.createFrame = createFrame;
        return __exports__;
    })(__module3__, __module5__);

// handlebars/runtime.js
    var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
        "use strict";
        var __exports__ = {};
        var Utils = __dependency1__;
        var Exception = __dependency2__;
        var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
        var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

        function checkRevision(compilerInfo) {
            var compilerRevision = compilerInfo && compilerInfo[0] || 1,
                currentRevision = COMPILER_REVISION;

            if( compilerRevision !== currentRevision ) {
                if( compilerRevision < currentRevision ) {
                    var runtimeVersions = REVISION_CHANGES[currentRevision],
                        compilerVersions = REVISION_CHANGES[compilerRevision];
                    throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. " +
                        "Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else {
                    // Use the embedded version info since the runtime doesn't know about this revision yet
                    throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. " +
                        "Please update your runtime to a newer version (" + compilerInfo[1] + ").");
                }
            }
        }

        __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

        function template(templateSpec, env) {
            if( !env ) {
                throw new Exception("No environment passed to template");
            }

            // Note: Using env.VM references rather than local var references throughout this section to allow
            // for external users to override these as psuedo-supported APIs.
            var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
                var result = env.VM.invokePartial.apply(this, arguments);
                if( result != null ) {
                    return result;
                }

                if( env.compile ) {
                    var options = { helpers: helpers, partials: partials, data: data };
                    partials[name] = env.compile(partial, { data: data !== undefined }, env);
                    return partials[name](context, options);
                } else {
                    throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
                }
            };

            // Just add water
            var container = {
                escapeExpression: Utils.escapeExpression,
                invokePartial   : invokePartialWrapper,
                programs        : [],
                program         : function(i, fn, data) {
                    var programWrapper = this.programs[i];
                    if( data ) {
                        programWrapper = program(i, fn, data);
                    } else if( !programWrapper ) {
                        programWrapper = this.programs[i] = program(i, fn);
                    }
                    return programWrapper;
                },
                merge           : function(param, common) {
                    var ret = param || common;

                    if( param && common && (param !== common) ) {
                        ret = {};
                        Utils.extend(ret, common);
                        Utils.extend(ret, param);
                    }
                    return ret;
                },
                programWithDepth: env.VM.programWithDepth,
                noop            : env.VM.noop,
                compilerInfo    : null
            };

            return function(context, options) {
                options = options || {};
                var namespace = options.partial ? options : env,
                    helpers,
                    partials;

                if( !options.partial ) {
                    helpers = options.helpers;
                    partials = options.partials;
                }
                var result = templateSpec.call(
                    container,
                    namespace, context,
                    helpers,
                    partials,
                    options.data);

                if( !options.partial ) {
                    env.VM.checkRevision(container.compilerInfo);
                }

                return result;
            };
        }

        __exports__.template = template;
        function programWithDepth(i, fn, data /*, $depth */) {
            var args = Array.prototype.slice.call(arguments, 3);

            var prog = function(context, options) {
                options = options || {};

                return fn.apply(this, [context, options.data || data].concat(args));
            };
            prog.program = i;
            prog.depth = args.length;
            return prog;
        }

        __exports__.programWithDepth = programWithDepth;
        function program(i, fn, data) {
            var prog = function(context, options) {
                options = options || {};

                return fn(context, options.data || data);
            };
            prog.program = i;
            prog.depth = 0;
            return prog;
        }

        __exports__.program = program;
        function invokePartial(partial, name, context, helpers, partials, data) {
            var options = { partial: true, helpers: helpers, partials: partials, data: data };

            if( partial === undefined ) {
                throw new Exception("The partial " + name + " could not be found");
            } else if( partial instanceof Function ) {
                return partial(context, options);
            }
        }

        __exports__.invokePartial = invokePartial;
        function noop() {
            return "";
        }

        __exports__.noop = noop;
        return __exports__;
    })(__module3__, __module5__, __module2__);

// handlebars.runtime.js
    var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__;
        /*globals Handlebars: true */
        var base = __dependency1__;

        // Each of these augment the Handlebars object. No need to setup here.
        // (This is done to easily share code between commonjs and browse envs)
        var SafeString = __dependency2__;
        var Exception = __dependency3__;
        var Utils = __dependency4__;
        var runtime = __dependency5__;

        // For compatibility and usage outside of module systems, make the Handlebars object a namespace
        var create = function() {
            var hb = new base.HandlebarsEnvironment();

            Utils.extend(hb, base);
            hb.SafeString = SafeString;
            hb.Exception = Exception;
            hb.Utils = Utils;

            hb.VM = runtime;
            hb.template = function(spec) {
                return runtime.template(spec, hb);
            };

            return hb;
        };

        var Handlebars = create();
        Handlebars.create = create;

        __exports__ = Handlebars;
        return __exports__;
    })(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
    var __module7__ = (function(__dependency1__) {
        "use strict";
        var __exports__;
        var Exception = __dependency1__;

        function LocationInfo(locInfo) {
            locInfo = locInfo || {};
            this.firstLine = locInfo.first_line;
            this.firstColumn = locInfo.first_column;
            this.lastColumn = locInfo.last_column;
            this.lastLine = locInfo.last_line;
        }

        var AST = {
            ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
                var inverseLocationInfo, firstInverseNode;
                if( arguments.length === 3 ) {
                    locInfo = inverse;
                    inverse = null;
                } else if( arguments.length === 2 ) {
                    locInfo = inverseStrip;
                    inverseStrip = null;
                }

                LocationInfo.call(this, locInfo);
                this.type = "program";
                this.statements = statements;
                this.strip = {};

                if( inverse ) {
                    firstInverseNode = inverse[0];
                    if( firstInverseNode ) {
                        inverseLocationInfo = {
                            first_line  : firstInverseNode.firstLine,
                            last_line   : firstInverseNode.lastLine,
                            last_column : firstInverseNode.lastColumn,
                            first_column: firstInverseNode.firstColumn
                        };
                        this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
                    } else {
                        this.inverse = new AST.ProgramNode(inverse, inverseStrip);
                    }
                    this.strip.right = inverseStrip.left;
                } else if( inverseStrip ) {
                    this.strip.left = inverseStrip.right;
                }
            },

            MustacheNode: function(rawParams, hash, open, strip, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "mustache";
                this.strip = strip;

                // Open may be a string parsed from the parser or a passed boolean flag
                if( open != null && open.charAt ) {
                    // Must use charAt to support IE pre-10
                    var escapeFlag = open.charAt(3) || open.charAt(2);
                    this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
                } else {
                    this.escaped = !!open;
                }

                if( rawParams instanceof AST.SexprNode ) {
                    this.sexpr = rawParams;
                } else {
                    // Support old AST API
                    this.sexpr = new AST.SexprNode(rawParams, hash);
                }

                this.sexpr.isRoot = true;

                // Support old AST API that stored this info in MustacheNode
                this.id = this.sexpr.id;
                this.params = this.sexpr.params;
                this.hash = this.sexpr.hash;
                this.eligibleHelper = this.sexpr.eligibleHelper;
                this.isHelper = this.sexpr.isHelper;
            },

            SexprNode: function(rawParams, hash, locInfo) {
                LocationInfo.call(this, locInfo);

                this.type = "sexpr";
                this.hash = hash;

                var id = this.id = rawParams[0];
                var params = this.params = rawParams.slice(1);

                // a mustache is an eligible helper if:
                // * its id is simple (a single part, not `this` or `..`)
                var eligibleHelper = this.eligibleHelper = id.isSimple;

                // a mustache is definitely a helper if:
                // * it is an eligible helper, and
                // * it has at least one parameter or hash segment
                this.isHelper = eligibleHelper && (params.length || hash);

                // if a mustache is an eligible helper but not a definite
                // helper, it is ambiguous, and will be resolved in a later
                // pass or at runtime.
            },

            PartialNode: function(partialName, context, strip, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "partial";
                this.partialName = partialName;
                this.context = context;
                this.strip = strip;
            },

            BlockNode: function(mustache, program, inverse, close, locInfo) {
                LocationInfo.call(this, locInfo);

                if( mustache.sexpr.id.original !== close.path.original ) {
                    throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
                }

                this.type = 'block';
                this.mustache = mustache;
                this.program = program;
                this.inverse = inverse;

                this.strip = {
                    left : mustache.strip.left,
                    right: close.strip.right
                };

                (program || inverse).strip.left = mustache.strip.right;
                (inverse || program).strip.right = close.strip.left;

                if( inverse && !program ) {
                    this.isInverse = true;
                }
            },

            ContentNode: function(string, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "content";
                this.string = string;
            },

            HashNode: function(pairs, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "hash";
                this.pairs = pairs;
            },

            IdNode: function(parts, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "ID";

                var original = "",
                    dig = [],
                    depth = 0;

                for( var i = 0, l = parts.length; i < l; i++ ) {
                    var part = parts[i].part;
                    original += (parts[i].separator || '') + part;

                    if( part === ".." || part === "." || part === "this" ) {
                        if( dig.length > 0 ) {
                            throw new Exception("Invalid path: " + original, this);
                        } else if( part === ".." ) {
                            depth++;
                        } else {
                            this.isScoped = true;
                        }
                    } else {
                        dig.push(part);
                    }
                }

                this.original = original;
                this.parts = dig;
                this.string = dig.join('.');
                this.depth = depth;

                // an ID is simple if it only has one part, and that part is not
                // `..` or `this`.
                this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

                this.stringModeValue = this.string;
            },

            PartialNameNode: function(name, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "PARTIAL_NAME";
                this.name = name.original;
            },

            DataNode: function(id, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "DATA";
                this.id = id;
            },

            StringNode: function(string, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "STRING";
                this.original =
                    this.string =
                        this.stringModeValue = string;
            },

            IntegerNode: function(integer, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "INTEGER";
                this.original =
                    this.integer = integer;
                this.stringModeValue = Number(integer);
            },

            BooleanNode: function(bool, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "BOOLEAN";
                this.bool = bool;
                this.stringModeValue = bool === "true";
            },

            CommentNode: function(comment, locInfo) {
                LocationInfo.call(this, locInfo);
                this.type = "comment";
                this.comment = comment;
            }
        };

        // Must be exported as an object rather than the root of the module as the jison lexer
        // most modify the object to operate properly.
        __exports__ = AST;
        return __exports__;
    })(__module5__);

// handlebars/compiler/parser.js
    var __module9__ = (function() {
        "use strict";
        var __exports__;
        /* jshint ignore:start */
        /* Jison generated parser */
        var handlebars = (function() {
            var parser = {trace: function trace() {
            },
                yy             : {},
                symbols_       : {"error": 2, "root": 3, "statements": 4, "EOF": 5, "program": 6, "simpleInverse": 7, "statement": 8, "openInverse": 9, "closeBlock": 10, "openBlock": 11, "mustache": 12, "partial": 13, "CONTENT": 14, "COMMENT": 15, "OPEN_BLOCK": 16, "sexpr": 17, "CLOSE": 18, "OPEN_INVERSE": 19, "OPEN_ENDBLOCK": 20, "path": 21, "OPEN": 22, "OPEN_UNESCAPED": 23, "CLOSE_UNESCAPED": 24, "OPEN_PARTIAL": 25, "partialName": 26, "partial_option0": 27, "sexpr_repetition0": 28, "sexpr_option0": 29, "dataName": 30, "param": 31, "STRING": 32, "INTEGER": 33, "BOOLEAN": 34, "OPEN_SEXPR": 35, "CLOSE_SEXPR": 36, "hash": 37, "hash_repetition_plus0": 38, "hashSegment": 39, "ID": 40, "EQUALS": 41, "DATA": 42, "pathSegments": 43, "SEP": 44, "$accept": 0, "$end": 1},
                terminals_     : {2: "error", 5: "EOF", 14: "CONTENT", 15: "COMMENT", 16: "OPEN_BLOCK", 18: "CLOSE", 19: "OPEN_INVERSE", 20: "OPEN_ENDBLOCK", 22: "OPEN", 23: "OPEN_UNESCAPED", 24: "CLOSE_UNESCAPED", 25: "OPEN_PARTIAL", 32: "STRING", 33: "INTEGER", 34: "BOOLEAN", 35: "OPEN_SEXPR", 36: "CLOSE_SEXPR", 40: "ID", 41: "EQUALS", 42: "DATA", 44: "SEP"},
                productions_   : [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]],
                performAction  : function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

                    var $0 = $$.length - 1;
                    switch( yystate ) {
                        case 1:
                            return new yy.ProgramNode($$[$0 - 1], this._$);
                            break;
                        case 2:
                            return new yy.ProgramNode([], this._$);
                            break;
                        case 3:
                            this.$ = new yy.ProgramNode([], $$[$0 - 1], $$[$0], this._$);
                            break;
                        case 4:
                            this.$ = new yy.ProgramNode($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                            break;
                        case 5:
                            this.$ = new yy.ProgramNode($$[$0 - 1], $$[$0], [], this._$);
                            break;
                        case 6:
                            this.$ = new yy.ProgramNode($$[$0], this._$);
                            break;
                        case 7:
                            this.$ = new yy.ProgramNode([], this._$);
                            break;
                        case 8:
                            this.$ = new yy.ProgramNode([], this._$);
                            break;
                        case 9:
                            this.$ = [$$[$0]];
                            break;
                        case 10:
                            $$[$0 - 1].push($$[$0]);
                            this.$ = $$[$0 - 1];
                            break;
                        case 11:
                            this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1].inverse, $$[$0 - 1], $$[$0], this._$);
                            break;
                        case 12:
                            this.$ = new yy.BlockNode($$[$0 - 2], $$[$0 - 1], $$[$0 - 1].inverse, $$[$0], this._$);
                            break;
                        case 13:
                            this.$ = $$[$0];
                            break;
                        case 14:
                            this.$ = $$[$0];
                            break;
                        case 15:
                            this.$ = new yy.ContentNode($$[$0], this._$);
                            break;
                        case 16:
                            this.$ = new yy.CommentNode($$[$0], this._$);
                            break;
                        case 17:
                            this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                            break;
                        case 18:
                            this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                            break;
                        case 19:
                            this.$ = {path: $$[$0 - 1], strip: stripFlags($$[$0 - 2], $$[$0])};
                            break;
                        case 20:
                            this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                            break;
                        case 21:
                            this.$ = new yy.MustacheNode($$[$0 - 1], null, $$[$0 - 2], stripFlags($$[$0 - 2], $$[$0]), this._$);
                            break;
                        case 22:
                            this.$ = new yy.PartialNode($$[$0 - 2], $$[$0 - 1], stripFlags($$[$0 - 3], $$[$0]), this._$);
                            break;
                        case 23:
                            this.$ = stripFlags($$[$0 - 1], $$[$0]);
                            break;
                        case 24:
                            this.$ = new yy.SexprNode([$$[$0 - 2]].concat($$[$0 - 1]), $$[$0], this._$);
                            break;
                        case 25:
                            this.$ = new yy.SexprNode([$$[$0]], null, this._$);
                            break;
                        case 26:
                            this.$ = $$[$0];
                            break;
                        case 27:
                            this.$ = new yy.StringNode($$[$0], this._$);
                            break;
                        case 28:
                            this.$ = new yy.IntegerNode($$[$0], this._$);
                            break;
                        case 29:
                            this.$ = new yy.BooleanNode($$[$0], this._$);
                            break;
                        case 30:
                            this.$ = $$[$0];
                            break;
                        case 31:
                            $$[$0 - 1].isHelper = true;
                            this.$ = $$[$0 - 1];
                            break;
                        case 32:
                            this.$ = new yy.HashNode($$[$0], this._$);
                            break;
                        case 33:
                            this.$ = [$$[$0 - 2], $$[$0]];
                            break;
                        case 34:
                            this.$ = new yy.PartialNameNode($$[$0], this._$);
                            break;
                        case 35:
                            this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
                            break;
                        case 36:
                            this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
                            break;
                        case 37:
                            this.$ = new yy.DataNode($$[$0], this._$);
                            break;
                        case 38:
                            this.$ = new yy.IdNode($$[$0], this._$);
                            break;
                        case 39:
                            $$[$0 - 2].push({part: $$[$0], separator: $$[$0 - 1]});
                            this.$ = $$[$0 - 2];
                            break;
                        case 40:
                            this.$ = [
                                {part: $$[$0]}
                            ];
                            break;
                        case 43:
                            this.$ = [];
                            break;
                        case 44:
                            $$[$0 - 1].push($$[$0]);
                            break;
                        case 47:
                            this.$ = [$$[$0]];
                            break;
                        case 48:
                            $$[$0 - 1].push($$[$0]);
                            break;
                    }
                },
                table          : [
                    {3: 1, 4: 2, 5: [1, 3], 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {1: [3]},
                    {5: [1, 16], 8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {1: [2, 2]},
                    {5: [2, 9], 14: [2, 9], 15: [2, 9], 16: [2, 9], 19: [2, 9], 20: [2, 9], 22: [2, 9], 23: [2, 9], 25: [2, 9]},
                    {4: 20, 6: 18, 7: 19, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 21], 20: [2, 8], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {4: 20, 6: 22, 7: 19, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 21], 20: [2, 8], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {5: [2, 13], 14: [2, 13], 15: [2, 13], 16: [2, 13], 19: [2, 13], 20: [2, 13], 22: [2, 13], 23: [2, 13], 25: [2, 13]},
                    {5: [2, 14], 14: [2, 14], 15: [2, 14], 16: [2, 14], 19: [2, 14], 20: [2, 14], 22: [2, 14], 23: [2, 14], 25: [2, 14]},
                    {5: [2, 15], 14: [2, 15], 15: [2, 15], 16: [2, 15], 19: [2, 15], 20: [2, 15], 22: [2, 15], 23: [2, 15], 25: [2, 15]},
                    {5: [2, 16], 14: [2, 16], 15: [2, 16], 16: [2, 16], 19: [2, 16], 20: [2, 16], 22: [2, 16], 23: [2, 16], 25: [2, 16]},
                    {17: 23, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26},
                    {17: 29, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26},
                    {17: 30, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26},
                    {17: 31, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26},
                    {21: 33, 26: 32, 32: [1, 34], 33: [1, 35], 40: [1, 28], 43: 26},
                    {1: [2, 1]},
                    {5: [2, 10], 14: [2, 10], 15: [2, 10], 16: [2, 10], 19: [2, 10], 20: [2, 10], 22: [2, 10], 23: [2, 10], 25: [2, 10]},
                    {10: 36, 20: [1, 37]},
                    {4: 38, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 7], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {7: 39, 8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 21], 20: [2, 6], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {17: 23, 18: [1, 40], 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26},
                    {10: 41, 20: [1, 37]},
                    {18: [1, 42]},
                    {18: [2, 43], 24: [2, 43], 28: 43, 32: [2, 43], 33: [2, 43], 34: [2, 43], 35: [2, 43], 36: [2, 43], 40: [2, 43], 42: [2, 43]},
                    {18: [2, 25], 24: [2, 25], 36: [2, 25]},
                    {18: [2, 38], 24: [2, 38], 32: [2, 38], 33: [2, 38], 34: [2, 38], 35: [2, 38], 36: [2, 38], 40: [2, 38], 42: [2, 38], 44: [1, 44]},
                    {21: 45, 40: [1, 28], 43: 26},
                    {18: [2, 40], 24: [2, 40], 32: [2, 40], 33: [2, 40], 34: [2, 40], 35: [2, 40], 36: [2, 40], 40: [2, 40], 42: [2, 40], 44: [2, 40]},
                    {18: [1, 46]},
                    {18: [1, 47]},
                    {24: [1, 48]},
                    {18: [2, 41], 21: 50, 27: 49, 40: [1, 28], 43: 26},
                    {18: [2, 34], 40: [2, 34]},
                    {18: [2, 35], 40: [2, 35]},
                    {18: [2, 36], 40: [2, 36]},
                    {5: [2, 11], 14: [2, 11], 15: [2, 11], 16: [2, 11], 19: [2, 11], 20: [2, 11], 22: [2, 11], 23: [2, 11], 25: [2, 11]},
                    {21: 51, 40: [1, 28], 43: 26},
                    {8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 3], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {4: 52, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 5], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {14: [2, 23], 15: [2, 23], 16: [2, 23], 19: [2, 23], 20: [2, 23], 22: [2, 23], 23: [2, 23], 25: [2, 23]},
                    {5: [2, 12], 14: [2, 12], 15: [2, 12], 16: [2, 12], 19: [2, 12], 20: [2, 12], 22: [2, 12], 23: [2, 12], 25: [2, 12]},
                    {14: [2, 18], 15: [2, 18], 16: [2, 18], 19: [2, 18], 20: [2, 18], 22: [2, 18], 23: [2, 18], 25: [2, 18]},
                    {18: [2, 45], 21: 56, 24: [2, 45], 29: 53, 30: 60, 31: 54, 32: [1, 57], 33: [1, 58], 34: [1, 59], 35: [1, 61], 36: [2, 45], 37: 55, 38: 62, 39: 63, 40: [1, 64], 42: [1, 27], 43: 26},
                    {40: [1, 65]},
                    {18: [2, 37], 24: [2, 37], 32: [2, 37], 33: [2, 37], 34: [2, 37], 35: [2, 37], 36: [2, 37], 40: [2, 37], 42: [2, 37]},
                    {14: [2, 17], 15: [2, 17], 16: [2, 17], 19: [2, 17], 20: [2, 17], 22: [2, 17], 23: [2, 17], 25: [2, 17]},
                    {5: [2, 20], 14: [2, 20], 15: [2, 20], 16: [2, 20], 19: [2, 20], 20: [2, 20], 22: [2, 20], 23: [2, 20], 25: [2, 20]},
                    {5: [2, 21], 14: [2, 21], 15: [2, 21], 16: [2, 21], 19: [2, 21], 20: [2, 21], 22: [2, 21], 23: [2, 21], 25: [2, 21]},
                    {18: [1, 66]},
                    {18: [2, 42]},
                    {18: [1, 67]},
                    {8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 25: [1, 15]},
                    {18: [2, 24], 24: [2, 24], 36: [2, 24]},
                    {18: [2, 44], 24: [2, 44], 32: [2, 44], 33: [2, 44], 34: [2, 44], 35: [2, 44], 36: [2, 44], 40: [2, 44], 42: [2, 44]},
                    {18: [2, 46], 24: [2, 46], 36: [2, 46]},
                    {18: [2, 26], 24: [2, 26], 32: [2, 26], 33: [2, 26], 34: [2, 26], 35: [2, 26], 36: [2, 26], 40: [2, 26], 42: [2, 26]},
                    {18: [2, 27], 24: [2, 27], 32: [2, 27], 33: [2, 27], 34: [2, 27], 35: [2, 27], 36: [2, 27], 40: [2, 27], 42: [2, 27]},
                    {18: [2, 28], 24: [2, 28], 32: [2, 28], 33: [2, 28], 34: [2, 28], 35: [2, 28], 36: [2, 28], 40: [2, 28], 42: [2, 28]},
                    {18: [2, 29], 24: [2, 29], 32: [2, 29], 33: [2, 29], 34: [2, 29], 35: [2, 29], 36: [2, 29], 40: [2, 29], 42: [2, 29]},
                    {18: [2, 30], 24: [2, 30], 32: [2, 30], 33: [2, 30], 34: [2, 30], 35: [2, 30], 36: [2, 30], 40: [2, 30], 42: [2, 30]},
                    {17: 68, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26},
                    {18: [2, 32], 24: [2, 32], 36: [2, 32], 39: 69, 40: [1, 70]},
                    {18: [2, 47], 24: [2, 47], 36: [2, 47], 40: [2, 47]},
                    {18: [2, 40], 24: [2, 40], 32: [2, 40], 33: [2, 40], 34: [2, 40], 35: [2, 40], 36: [2, 40], 40: [2, 40], 41: [1, 71], 42: [2, 40], 44: [2, 40]},
                    {18: [2, 39], 24: [2, 39], 32: [2, 39], 33: [2, 39], 34: [2, 39], 35: [2, 39], 36: [2, 39], 40: [2, 39], 42: [2, 39], 44: [2, 39]},
                    {5: [2, 22], 14: [2, 22], 15: [2, 22], 16: [2, 22], 19: [2, 22], 20: [2, 22], 22: [2, 22], 23: [2, 22], 25: [2, 22]},
                    {5: [2, 19], 14: [2, 19], 15: [2, 19], 16: [2, 19], 19: [2, 19], 20: [2, 19], 22: [2, 19], 23: [2, 19], 25: [2, 19]},
                    {36: [1, 72]},
                    {18: [2, 48], 24: [2, 48], 36: [2, 48], 40: [2, 48]},
                    {41: [1, 71]},
                    {21: 56, 30: 60, 31: 73, 32: [1, 57], 33: [1, 58], 34: [1, 59], 35: [1, 61], 40: [1, 28], 42: [1, 27], 43: 26},
                    {18: [2, 31], 24: [2, 31], 32: [2, 31], 33: [2, 31], 34: [2, 31], 35: [2, 31], 36: [2, 31], 40: [2, 31], 42: [2, 31]},
                    {18: [2, 33], 24: [2, 33], 36: [2, 33], 40: [2, 33]}
                ],
                defaultActions : {3: [2, 2], 16: [2, 1], 50: [2, 42]},
                parseError     : function parseError(str, hash) {
                    throw new Error(str);
                },
                parse          : function parse(input) {
                    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
                    this.lexer.setInput(input);
                    this.lexer.yy = this.yy;
                    this.yy.lexer = this.lexer;
                    this.yy.parser = this;
                    if( typeof this.lexer.yylloc == "undefined" )
                        this.lexer.yylloc = {};
                    var yyloc = this.lexer.yylloc;
                    lstack.push(yyloc);
                    var ranges = this.lexer.options && this.lexer.options.ranges;
                    if( typeof this.yy.parseError === "function" )
                        this.parseError = this.yy.parseError;
                    function popStack(n) {
                        stack.length = stack.length - 2 * n;
                        vstack.length = vstack.length - n;
                        lstack.length = lstack.length - n;
                    }

                    function lex() {
                        var token;
                        token = self.lexer.lex() || 1;
                        if( typeof token !== "number" ) {
                            token = self.symbols_[token] || token;
                        }
                        return token;
                    }

                    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
                    while( true ) {
                        state = stack[stack.length - 1];
                        if( this.defaultActions[state] ) {
                            action = this.defaultActions[state];
                        } else {
                            if( symbol === null || typeof symbol == "undefined" ) {
                                symbol = lex();
                            }
                            action = table[state] && table[state][symbol];
                        }
                        if( typeof action === "undefined" || !action.length || !action[0] ) {
                            var errStr = "";
                            if( !recovering ) {
                                expected = [];
                                for( p in table[state] )
                                    if( this.terminals_[p] && p > 2 ) {
                                        expected.push("'" + this.terminals_[p] + "'");
                                    }
                                if( this.lexer.showPosition ) {
                                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                                } else {
                                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                                }
                                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
                            }
                        }
                        if( action[0] instanceof Array && action.length > 1 ) {
                            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                        }
                        switch( action[0] ) {
                            case 1:
                                stack.push(symbol);
                                vstack.push(this.lexer.yytext);
                                lstack.push(this.lexer.yylloc);
                                stack.push(action[1]);
                                symbol = null;
                                if( !preErrorSymbol ) {
                                    yyleng = this.lexer.yyleng;
                                    yytext = this.lexer.yytext;
                                    yylineno = this.lexer.yylineno;
                                    yyloc = this.lexer.yylloc;
                                    if( recovering > 0 )
                                        recovering--;
                                } else {
                                    symbol = preErrorSymbol;
                                    preErrorSymbol = null;
                                }
                                break;
                            case 2:
                                len = this.productions_[action[1]][1];
                                yyval.$ = vstack[vstack.length - len];
                                yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
                                if( ranges ) {
                                    yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                                }
                                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                                if( typeof r !== "undefined" ) {
                                    return r;
                                }
                                if( len ) {
                                    stack = stack.slice(0, -1 * len * 2);
                                    vstack = vstack.slice(0, -1 * len);
                                    lstack = lstack.slice(0, -1 * len);
                                }
                                stack.push(this.productions_[action[1]][0]);
                                vstack.push(yyval.$);
                                lstack.push(yyval._$);
                                newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                                stack.push(newState);
                                break;
                            case 3:
                                return true;
                        }
                    }
                    return true;
                }
            };


            function stripFlags(open, close) {
                return {
                    left : open.charAt(2) === '~',
                    right: close.charAt(0) === '~' || close.charAt(1) === '~'
                };
            }

            /* Jison generated lexer */
            var lexer = (function() {
                var lexer = ({EOF: 1,
                    parseError   : function parseError(str, hash) {
                        if( this.yy.parser ) {
                            this.yy.parser.parseError(str, hash);
                        } else {
                            throw new Error(str);
                        }
                    },
                    setInput     : function(input) {
                        this._input = input;
                        this._more = this._less = this.done = false;
                        this.yylineno = this.yyleng = 0;
                        this.yytext = this.matched = this.match = '';
                        this.conditionStack = ['INITIAL'];
                        this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0};
                        if( this.options.ranges ) this.yylloc.range = [0, 0];
                        this.offset = 0;
                        return this;
                    },
                    input        : function() {
                        var ch = this._input[0];
                        this.yytext += ch;
                        this.yyleng++;
                        this.offset++;
                        this.match += ch;
                        this.matched += ch;
                        var lines = ch.match(/(?:\r\n?|\n).*/g);
                        if( lines ) {
                            this.yylineno++;
                            this.yylloc.last_line++;
                        } else {
                            this.yylloc.last_column++;
                        }
                        if( this.options.ranges ) this.yylloc.range[1]++;

                        this._input = this._input.slice(1);
                        return ch;
                    },
                    unput        : function(ch) {
                        var len = ch.length;
                        var lines = ch.split(/(?:\r\n?|\n)/g);

                        this._input = ch + this._input;
                        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                        //this.yyleng -= len;
                        this.offset -= len;
                        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1);
                        this.matched = this.matched.substr(0, this.matched.length - 1);

                        if( lines.length - 1 ) this.yylineno -= lines.length - 1;
                        var r = this.yylloc.range;

                        this.yylloc = {first_line: this.yylloc.first_line,
                            last_line            : this.yylineno + 1,
                            first_column         : this.yylloc.first_column,
                            last_column          : lines ?
                                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length :
                                this.yylloc.first_column - len
                        };

                        if( this.options.ranges ) {
                            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                        }
                        return this;
                    },
                    more         : function() {
                        this._more = true;
                        return this;
                    },
                    less         : function(n) {
                        this.unput(this.match.slice(n));
                    },
                    pastInput    : function() {
                        var past = this.matched.substr(0, this.matched.length - this.match.length);
                        return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
                    },
                    upcomingInput: function() {
                        var next = this.match;
                        if( next.length < 20 ) {
                            next += this._input.substr(0, 20 - next.length);
                        }
                        return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
                    },
                    showPosition : function() {
                        var pre = this.pastInput();
                        var c = new Array(pre.length + 1).join("-");
                        return pre + this.upcomingInput() + "\n" + c + "^";
                    },
                    next         : function() {
                        if( this.done ) {
                            return this.EOF;
                        }
                        if( !this._input ) this.done = true;

                        var token,
                            match,
                            tempMatch,
                            index,
                            col,
                            lines;
                        if( !this._more ) {
                            this.yytext = '';
                            this.match = '';
                        }
                        var rules = this._currentRules();
                        for( var i = 0; i < rules.length; i++ ) {
                            tempMatch = this._input.match(this.rules[rules[i]]);
                            if( tempMatch && (!match || tempMatch[0].length > match[0].length) ) {
                                match = tempMatch;
                                index = i;
                                if( !this.options.flex ) break;
                            }
                        }
                        if( match ) {
                            lines = match[0].match(/(?:\r\n?|\n).*/g);
                            if( lines ) this.yylineno += lines.length;
                            this.yylloc = {first_line: this.yylloc.last_line,
                                last_line            : this.yylineno + 1,
                                first_column         : this.yylloc.last_column,
                                last_column          : lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
                            this.yytext += match[0];
                            this.match += match[0];
                            this.matches = match;
                            this.yyleng = this.yytext.length;
                            if( this.options.ranges ) {
                                this.yylloc.range = [this.offset, this.offset += this.yyleng];
                            }
                            this._more = false;
                            this._input = this._input.slice(match[0].length);
                            this.matched += match[0];
                            token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                            if( this.done && this._input ) this.done = false;
                            if( token ) return token;
                            else return;
                        }
                        if( this._input === "" ) {
                            return this.EOF;
                        } else {
                            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(),
                                {text: "", token: null, line: this.yylineno});
                        }
                    },
                    lex          : function lex() {
                        var r = this.next();
                        if( typeof r !== 'undefined' ) {
                            return r;
                        } else {
                            return this.lex();
                        }
                    },
                    begin        : function begin(condition) {
                        this.conditionStack.push(condition);
                    },
                    popState     : function popState() {
                        return this.conditionStack.pop();
                    },
                    _currentRules: function _currentRules() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                    },
                    topState     : function() {
                        return this.conditionStack[this.conditionStack.length - 2];
                    },
                    pushState    : function begin(condition) {
                        this.begin(condition);
                    }});
                lexer.options = {};
                lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {


                    function strip(start, end) {
                        return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
                    }


                    var YYSTATE = YY_START
                    switch( $avoiding_name_collisions ) {
                        case 0:
                            if( yy_.yytext.slice(-2) === "\\\\" ) {
                                strip(0, 1);
                                this.begin("mu");
                            } else if( yy_.yytext.slice(-1) === "\\" ) {
                                strip(0, 1);
                                this.begin("emu");
                            } else {
                                this.begin("mu");
                            }
                            if( yy_.yytext ) return 14;

                            break;
                        case 1:
                            return 14;
                            break;
                        case 2:
                            this.popState();
                            return 14;

                            break;
                        case 3:
                            strip(0, 4);
                            this.popState();
                            return 15;
                            break;
                        case 4:
                            return 35;
                            break;
                        case 5:
                            return 36;
                            break;
                        case 6:
                            return 25;
                            break;
                        case 7:
                            return 16;
                            break;
                        case 8:
                            return 20;
                            break;
                        case 9:
                            return 19;
                            break;
                        case 10:
                            return 19;
                            break;
                        case 11:
                            return 23;
                            break;
                        case 12:
                            return 22;
                            break;
                        case 13:
                            this.popState();
                            this.begin('com');
                            break;
                        case 14:
                            strip(3, 5);
                            this.popState();
                            return 15;
                            break;
                        case 15:
                            return 22;
                            break;
                        case 16:
                            return 41;
                            break;
                        case 17:
                            return 40;
                            break;
                        case 18:
                            return 40;
                            break;
                        case 19:
                            return 44;
                            break;
                        case 20:// ignore whitespace
                            break;
                        case 21:
                            this.popState();
                            return 24;
                            break;
                        case 22:
                            this.popState();
                            return 18;
                            break;
                        case 23:
                            yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                            return 32;
                            break;
                        case 24:
                            yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                            return 32;
                            break;
                        case 25:
                            return 42;
                            break;
                        case 26:
                            return 34;
                            break;
                        case 27:
                            return 34;
                            break;
                        case 28:
                            return 33;
                            break;
                        case 29:
                            return 40;
                            break;
                        case 30:
                            yy_.yytext = strip(1, 2);
                            return 40;
                            break;
                        case 31:
                            return 'INVALID';
                            break;
                        case 32:
                            return 5;
                            break;
                    }
                };
                lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
                lexer.conditions = {"mu": {"rules": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "inclusive": false}, "emu": {"rules": [2], "inclusive": false}, "com": {"rules": [3], "inclusive": false}, "INITIAL": {"rules": [0, 1, 32], "inclusive": true}};
                return lexer;
            })()
            parser.lexer = lexer;
            function Parser() {
                this.yy = {};
            }

            Parser.prototype = parser;
            parser.Parser = Parser;
            return new Parser;
        })();
        __exports__ = handlebars;
        /* jshint ignore:end */
        return __exports__;
    })();

// handlebars/compiler/base.js
    var __module8__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__ = {};
        var parser = __dependency1__;
        var AST = __dependency2__;

        __exports__.parser = parser;

        function parse(input) {
            // Just return if an already-compile AST was passed in.
            if( input.constructor === AST.ProgramNode ) {
                return input;
            }

            parser.yy = AST;
            return parser.parse(input);
        }

        __exports__.parse = parse;
        return __exports__;
    })(__module9__, __module7__);

// handlebars/compiler/compiler.js
    var __module10__ = (function(__dependency1__) {
        "use strict";
        var __exports__ = {};
        var Exception = __dependency1__;

        function Compiler() {
        }

        __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
        // function in a context. This is necessary for mustache compatibility, which
        // requires that context functions in blocks are evaluated by blockHelperMissing,
        // and then proceed as if the resulting value was provided to blockHelperMissing.

        Compiler.prototype = {
            compiler: Compiler,

            disassemble: function() {
                var opcodes = this.opcodes, opcode, out = [], params, param;

                for( var i = 0, l = opcodes.length; i < l; i++ ) {
                    opcode = opcodes[i];

                    if( opcode.opcode === 'DECLARE' ) {
                        out.push("DECLARE " + opcode.name + "=" + opcode.value);
                    } else {
                        params = [];
                        for( var j = 0; j < opcode.args.length; j++ ) {
                            param = opcode.args[j];
                            if( typeof param === "string" ) {
                                param = "\"" + param.replace("\n", "\\n") + "\"";
                            }
                            params.push(param);
                        }
                        out.push(opcode.opcode + " " + params.join(" "));
                    }
                }

                return out.join("\n");
            },

            equals: function(other) {
                var len = this.opcodes.length;
                if( other.opcodes.length !== len ) {
                    return false;
                }

                for( var i = 0; i < len; i++ ) {
                    var opcode = this.opcodes[i],
                        otherOpcode = other.opcodes[i];
                    if( opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length ) {
                        return false;
                    }
                    for( var j = 0; j < opcode.args.length; j++ ) {
                        if( opcode.args[j] !== otherOpcode.args[j] ) {
                            return false;
                        }
                    }
                }

                len = this.children.length;
                if( other.children.length !== len ) {
                    return false;
                }
                for( i = 0; i < len; i++ ) {
                    if( !this.children[i].equals(other.children[i]) ) {
                        return false;
                    }
                }

                return true;
            },

            guid: 0,

            compile: function(program, options) {
                this.opcodes = [];
                this.children = [];
                this.depths = {list: []};
                this.options = options;

                // These changes will propagate to the other compiler components
                var knownHelpers = this.options.knownHelpers;
                this.options.knownHelpers = {
                    'helperMissing'     : true,
                    'blockHelperMissing': true,
                    'each'              : true,
                    'if'                : true,
                    'unless'            : true,
                    'with'              : true,
                    'log'               : true
                };
                if( knownHelpers ) {
                    for( var name in knownHelpers ) {
                        this.options.knownHelpers[name] = knownHelpers[name];
                    }
                }

                return this.accept(program);
            },

            accept: function(node) {
                var strip = node.strip || {},
                    ret;
                if( strip.left ) {
                    this.opcode('strip');
                }

                ret = this[node.type](node);

                if( strip.right ) {
                    this.opcode('strip');
                }

                return ret;
            },

            program: function(program) {
                var statements = program.statements;

                for( var i = 0, l = statements.length; i < l; i++ ) {
                    this.accept(statements[i]);
                }
                this.isSimple = l === 1;

                this.depths.list = this.depths.list.sort(function(a, b) {
                    return a - b;
                });

                return this;
            },

            compileProgram: function(program) {
                var result = new this.compiler().compile(program, this.options);
                var guid = this.guid++, depth;

                this.usePartial = this.usePartial || result.usePartial;

                this.children[guid] = result;

                for( var i = 0, l = result.depths.list.length; i < l; i++ ) {
                    depth = result.depths.list[i];

                    if( depth < 2 ) {
                        continue;
                    }
                    else {
                        this.addDepth(depth - 1);
                    }
                }

                return guid;
            },

            block: function(block) {
                var mustache = block.mustache,
                    program = block.program,
                    inverse = block.inverse;

                if( program ) {
                    program = this.compileProgram(program);
                }

                if( inverse ) {
                    inverse = this.compileProgram(inverse);
                }

                var sexpr = mustache.sexpr;
                var type = this.classifySexpr(sexpr);

                if( type === "helper" ) {
                    this.helperSexpr(sexpr, program, inverse);
                } else if( type === "simple" ) {
                    this.simpleSexpr(sexpr);

                    // now that the simple mustache is resolved, we need to
                    // evaluate it by executing `blockHelperMissing`
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    this.opcode('emptyHash');
                    this.opcode('blockValue');
                } else {
                    this.ambiguousSexpr(sexpr, program, inverse);

                    // now that the simple mustache is resolved, we need to
                    // evaluate it by executing `blockHelperMissing`
                    this.opcode('pushProgram', program);
                    this.opcode('pushProgram', inverse);
                    this.opcode('emptyHash');
                    this.opcode('ambiguousBlockValue');
                }

                this.opcode('append');
            },

            hash: function(hash) {
                var pairs = hash.pairs, pair, val;

                this.opcode('pushHash');

                for( var i = 0, l = pairs.length; i < l; i++ ) {
                    pair = pairs[i];
                    val = pair[1];

                    if( this.options.stringParams ) {
                        if( val.depth ) {
                            this.addDepth(val.depth);
                        }
                        this.opcode('getContext', val.depth || 0);
                        this.opcode('pushStringParam', val.stringModeValue, val.type);

                        if( val.type === 'sexpr' ) {
                            // Subexpressions get evaluated and passed in
                            // in string params mode.
                            this.sexpr(val);
                        }
                    } else {
                        this.accept(val);
                    }

                    this.opcode('assignToHash', pair[0]);
                }
                this.opcode('popHash');
            },

            partial: function(partial) {
                var partialName = partial.partialName;
                this.usePartial = true;

                if( partial.context ) {
                    this.ID(partial.context);
                } else {
                    this.opcode('push', 'depth0');
                }

                this.opcode('invokePartial', partialName.name);
                this.opcode('append');
            },

            content: function(content) {
                this.opcode('appendContent', content.string);
            },

            mustache: function(mustache) {
                this.sexpr(mustache.sexpr);

                if( mustache.escaped && !this.options.noEscape ) {
                    this.opcode('appendEscaped');
                } else {
                    this.opcode('append');
                }
            },

            ambiguousSexpr: function(sexpr, program, inverse) {
                var id = sexpr.id,
                    name = id.parts[0],
                    isBlock = program != null || inverse != null;

                this.opcode('getContext', id.depth);

                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);

                this.opcode('invokeAmbiguous', name, isBlock);
            },

            simpleSexpr: function(sexpr) {
                var id = sexpr.id;

                if( id.type === 'DATA' ) {
                    this.DATA(id);
                } else if( id.parts.length ) {
                    this.ID(id);
                } else {
                    // Simplified ID for `this`
                    this.addDepth(id.depth);
                    this.opcode('getContext', id.depth);
                    this.opcode('pushContext');
                }

                this.opcode('resolvePossibleLambda');
            },

            helperSexpr: function(sexpr, program, inverse) {
                var params = this.setupFullMustacheParams(sexpr, program, inverse),
                    name = sexpr.id.parts[0];

                if( this.options.knownHelpers[name] ) {
                    this.opcode('invokeKnownHelper', params.length, name);
                } else if( this.options.knownHelpersOnly ) {
                    throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
                } else {
                    this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
                }
            },

            sexpr: function(sexpr) {
                var type = this.classifySexpr(sexpr);

                if( type === "simple" ) {
                    this.simpleSexpr(sexpr);
                } else if( type === "helper" ) {
                    this.helperSexpr(sexpr);
                } else {
                    this.ambiguousSexpr(sexpr);
                }
            },

            ID: function(id) {
                this.addDepth(id.depth);
                this.opcode('getContext', id.depth);

                var name = id.parts[0];
                if( !name ) {
                    this.opcode('pushContext');
                } else {
                    this.opcode('lookupOnContext', id.parts[0]);
                }

                for( var i = 1, l = id.parts.length; i < l; i++ ) {
                    this.opcode('lookup', id.parts[i]);
                }
            },

            DATA: function(data) {
                this.options.data = true;
                if( data.id.isScoped || data.id.depth ) {
                    throw new Exception('Scoped data references are not supported: ' + data.original, data);
                }

                this.opcode('lookupData');
                var parts = data.id.parts;
                for( var i = 0, l = parts.length; i < l; i++ ) {
                    this.opcode('lookup', parts[i]);
                }
            },

            STRING: function(string) {
                this.opcode('pushString', string.string);
            },

            INTEGER: function(integer) {
                this.opcode('pushLiteral', integer.integer);
            },

            BOOLEAN: function(bool) {
                this.opcode('pushLiteral', bool.bool);
            },

            comment: function() {
            },

            // HELPERS
            opcode : function(name) {
                this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
            },

            declare: function(name, value) {
                this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
            },

            addDepth: function(depth) {
                if( depth === 0 ) {
                    return;
                }

                if( !this.depths[depth] ) {
                    this.depths[depth] = true;
                    this.depths.list.push(depth);
                }
            },

            classifySexpr: function(sexpr) {
                var isHelper = sexpr.isHelper;
                var isEligible = sexpr.eligibleHelper;
                var options = this.options;

                // if ambiguous, we can possibly resolve the ambiguity now
                if( isEligible && !isHelper ) {
                    var name = sexpr.id.parts[0];

                    if( options.knownHelpers[name] ) {
                        isHelper = true;
                    } else if( options.knownHelpersOnly ) {
                        isEligible = false;
                    }
                }

                if( isHelper ) {
                    return "helper";
                }
                else if( isEligible ) {
                    return "ambiguous";
                }
                else {
                    return "simple";
                }
            },

            pushParams: function(params) {
                var i = params.length, param;

                while( i-- ) {
                    param = params[i];

                    if( this.options.stringParams ) {
                        if( param.depth ) {
                            this.addDepth(param.depth);
                        }

                        this.opcode('getContext', param.depth || 0);
                        this.opcode('pushStringParam', param.stringModeValue, param.type);

                        if( param.type === 'sexpr' ) {
                            // Subexpressions get evaluated and passed in
                            // in string params mode.
                            this.sexpr(param);
                        }
                    } else {
                        this[param.type](param);
                    }
                }
            },

            setupFullMustacheParams: function(sexpr, program, inverse) {
                var params = sexpr.params;
                this.pushParams(params);

                this.opcode('pushProgram', program);
                this.opcode('pushProgram', inverse);

                if( sexpr.hash ) {
                    this.hash(sexpr.hash);
                } else {
                    this.opcode('emptyHash');
                }

                return params;
            }
        };

        function precompile(input, options, env) {
            if( input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode) ) {
                throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
            }

            options = options || {};
            if( !('data' in options) ) {
                options.data = true;
            }

            var ast = env.parse(input);
            var environment = new env.Compiler().compile(ast, options);
            return new env.JavaScriptCompiler().compile(environment, options);
        }

        __exports__.precompile = precompile;
        function compile(input, options, env) {
            if( input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode) ) {
                throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
            }

            options = options || {};

            if( !('data' in options) ) {
                options.data = true;
            }

            var compiled;

            function compileInput() {
                var ast = env.parse(input);
                var environment = new env.Compiler().compile(ast, options);
                var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
                return env.template(templateSpec);
            }

            // Template is only compiled on first use and cached after that point.
            return function(context, options) {
                if( !compiled ) {
                    compiled = compileInput();
                }
                return compiled.call(this, context, options);
            };
        }

        __exports__.compile = compile;
        return __exports__;
    })(__module5__);

// handlebars/compiler/javascript-compiler.js
    var __module11__ = (function(__dependency1__, __dependency2__) {
        "use strict";
        var __exports__;
        var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
        var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
        var log = __dependency1__.log;
        var Exception = __dependency2__;

        function Literal(value) {
            this.value = value;
        }

        function JavaScriptCompiler() {
        }

        JavaScriptCompiler.prototype = {
            // PUBLIC API: You can override these methods in a subclass to provide
            // alternative compiled forms for name lookup and buffering semantics
            nameLookup: function(parent, name /* , type*/) {
                var wrap,
                    ret;
                if( parent.indexOf('depth') === 0 ) {
                    wrap = true;
                }

                if( /^[0-9]+$/.test(name) ) {
                    ret = parent + "[" + name + "]";
                } else if( JavaScriptCompiler.isValidJavaScriptVariableName(name) ) {
                    ret = parent + "." + name;
                }
                else {
                    ret = parent + "['" + name + "']";
                }

                if( wrap ) {
                    return '(' + parent + ' && ' + ret + ')';
                } else {
                    return ret;
                }
            },

            compilerInfo: function() {
                var revision = COMPILER_REVISION,
                    versions = REVISION_CHANGES[revision];
                return "this.compilerInfo = [" + revision + ",'" + versions + "'];\n";
            },

            appendToBuffer: function(string) {
                if( this.environment.isSimple ) {
                    return "return " + string + ";";
                } else {
                    return {
                        appendToBuffer: true,
                        content       : string,
                        toString      : function() {
                            return "buffer += " + string + ";";
                        }
                    };
                }
            },

            initializeBuffer: function() {
                return this.quotedString("");
            },

            namespace: "Handlebars",
            // END PUBLIC API

            compile: function(environment, options, context, asObject) {
                this.environment = environment;
                this.options = options || {};

                log('debug', this.environment.disassemble() + "\n\n");

                this.name = this.environment.name;
                this.isChild = !!context;
                this.context = context || {
                    programs    : [],
                    environments: [],
                    aliases     : { }
                };

                this.preamble();

                this.stackSlot = 0;
                this.stackVars = [];
                this.registers = { list: [] };
                this.hashes = [];
                this.compileStack = [];
                this.inlineStack = [];

                this.compileChildren(environment, options);

                var opcodes = environment.opcodes, opcode;

                this.i = 0;

                for( var l = opcodes.length; this.i < l; this.i++ ) {
                    opcode = opcodes[this.i];

                    if( opcode.opcode === 'DECLARE' ) {
                        this[opcode.name] = opcode.value;
                    } else {
                        this[opcode.opcode].apply(this, opcode.args);
                    }

                    // Reset the stripNext flag if it was not set by this operation.
                    if( opcode.opcode !== this.stripNext ) {
                        this.stripNext = false;
                    }
                }

                // Flush any trailing content that might be pending.
                this.pushSource('');

                if( this.stackSlot || this.inlineStack.length || this.compileStack.length ) {
                    throw new Exception('Compile completed with content left on stack');
                }

                return this.createFunctionContext(asObject);
            },

            preamble: function() {
                var out = [];

                if( !this.isChild ) {
                    var namespace = this.namespace;

                    var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
                    if( this.environment.usePartial ) {
                        copies = copies + " partials = this.merge(partials, " + namespace + ".partials);";
                    }
                    if( this.options.data ) {
                        copies = copies + " data = data || {};";
                    }
                    out.push(copies);
                } else {
                    out.push('');
                }

                if( !this.environment.isSimple ) {
                    out.push(", buffer = " + this.initializeBuffer());
                } else {
                    out.push("");
                }

                // track the last context pushed into place to allow skipping the
                // getContext opcode when it would be a noop
                this.lastContext = 0;
                this.source = out;
            },

            createFunctionContext: function(asObject) {
                var locals = this.stackVars.concat(this.registers.list);

                if( locals.length > 0 ) {
                    this.source[1] = this.source[1] + ", " + locals.join(", ");
                }

                // Generate minimizer alias mappings
                if( !this.isChild ) {
                    for( var alias in this.context.aliases ) {
                        if( this.context.aliases.hasOwnProperty(alias) ) {
                            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
                        }
                    }
                }

                if( this.source[1] ) {
                    this.source[1] = "var " + this.source[1].substring(2) + ";";
                }

                // Merge children
                if( !this.isChild ) {
                    this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
                }

                if( !this.environment.isSimple ) {
                    this.pushSource("return buffer;");
                }

                var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

                for( var i = 0, l = this.environment.depths.list.length; i < l; i++ ) {
                    params.push("depth" + this.environment.depths.list[i]);
                }

                // Perform a second pass over the output to merge content when possible
                var source = this.mergeSource();

                if( !this.isChild ) {
                    source = this.compilerInfo() + source;
                }

                if( asObject ) {
                    params.push(source);

                    return Function.apply(this, params);
                } else {
                    var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
                    log('debug', functionSource + "\n\n");
                    return functionSource;
                }
            },
            mergeSource          : function() {
                // WARN: We are not handling the case where buffer is still populated as the source should
                // not have buffer append operations as their final action.
                var source = '',
                    buffer;
                for( var i = 0, len = this.source.length; i < len; i++ ) {
                    var line = this.source[i];
                    if( line.appendToBuffer ) {
                        if( buffer ) {
                            buffer = buffer + '\n    + ' + line.content;
                        } else {
                            buffer = line.content;
                        }
                    } else {
                        if( buffer ) {
                            source += 'buffer += ' + buffer + ';\n  ';
                            buffer = undefined;
                        }
                        source += line + '\n  ';
                    }
                }
                return source;
            },

            // [blockValue]
            //
            // On stack, before: hash, inverse, program, value
            // On stack, after: return value of blockHelperMissing
            //
            // The purpose of this opcode is to take a block of the form
            // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
            // replace it on the stack with the result of properly
            // invoking blockHelperMissing.
            blockValue           : function() {
                this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

                var params = ["depth0"];
                this.setupParams(0, params);

                this.replaceStack(function(current) {
                    params.splice(1, 0, current);
                    return "blockHelperMissing.call(" + params.join(", ") + ")";
                });
            },

            // [ambiguousBlockValue]
            //
            // On stack, before: hash, inverse, program, value
            // Compiler value, before: lastHelper=value of last found helper, if any
            // On stack, after, if no lastHelper: same as [blockValue]
            // On stack, after, if lastHelper: value
            ambiguousBlockValue  : function() {
                this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

                var params = ["depth0"];
                this.setupParams(0, params);

                var current = this.topStack();
                params.splice(1, 0, current);

                this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
            },

            // [appendContent]
            //
            // On stack, before: ...
            // On stack, after: ...
            //
            // Appends the string value of `content` to the current buffer
            appendContent        : function(content) {
                if( this.pendingContent ) {
                    content = this.pendingContent + content;
                }
                if( this.stripNext ) {
                    content = content.replace(/^\s+/, '');
                }

                this.pendingContent = content;
            },

            // [strip]
            //
            // On stack, before: ...
            // On stack, after: ...
            //
            // Removes any trailing whitespace from the prior content node and flags
            // the next operation for stripping if it is a content node.
            strip                : function() {
                if( this.pendingContent ) {
                    this.pendingContent = this.pendingContent.replace(/\s+$/, '');
                }
                this.stripNext = 'strip';
            },

            // [append]
            //
            // On stack, before: value, ...
            // On stack, after: ...
            //
            // Coerces `value` to a String and appends it to the current buffer.
            //
            // If `value` is truthy, or 0, it is coerced into a string and appended
            // Otherwise, the empty string is appended
            append               : function() {
                // Force anything that is inlined onto the stack so we don't have duplication
                // when we examine local
                this.flushInline();
                var local = this.popStack();
                this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
                if( this.environment.isSimple ) {
                    this.pushSource("else { " + this.appendToBuffer("''") + " }");
                }
            },

            // [appendEscaped]
            //
            // On stack, before: value, ...
            // On stack, after: ...
            //
            // Escape `value` and append it to the buffer
            appendEscaped        : function() {
                this.context.aliases.escapeExpression = 'this.escapeExpression';

                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
            },

            // [getContext]
            //
            // On stack, before: ...
            // On stack, after: ...
            // Compiler value, after: lastContext=depth
            //
            // Set the value of the `lastContext` compiler value to the depth
            getContext           : function(depth) {
                if( this.lastContext !== depth ) {
                    this.lastContext = depth;
                }
            },

            // [lookupOnContext]
            //
            // On stack, before: ...
            // On stack, after: currentContext[name], ...
            //
            // Looks up the value of `name` on the current context and pushes
            // it onto the stack.
            lookupOnContext      : function(name) {
                this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
            },

            // [pushContext]
            //
            // On stack, before: ...
            // On stack, after: currentContext, ...
            //
            // Pushes the value of the current context onto the stack.
            pushContext          : function() {
                this.pushStackLiteral('depth' + this.lastContext);
            },

            // [resolvePossibleLambda]
            //
            // On stack, before: value, ...
            // On stack, after: resolved value, ...
            //
            // If the `value` is a lambda, replace it on the stack by
            // the return value of the lambda
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"';

                this.replaceStack(function(current) {
                    return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
                });
            },

            // [lookup]
            //
            // On stack, before: value, ...
            // On stack, after: value[name], ...
            //
            // Replace the value on the stack with the result of looking
            // up `name` on `value`
            lookup               : function(name) {
                this.replaceStack(function(current) {
                    return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
                });
            },

            // [lookupData]
            //
            // On stack, before: ...
            // On stack, after: data, ...
            //
            // Push the data lookup operator
            lookupData           : function() {
                this.pushStackLiteral('data');
            },

            // [pushStringParam]
            //
            // On stack, before: ...
            // On stack, after: string, currentContext, ...
            //
            // This opcode is designed for use in string mode, which
            // provides the string value of a parameter along with its
            // depth rather than resolving it immediately.
            pushStringParam      : function(string, type) {
                this.pushStackLiteral('depth' + this.lastContext);

                this.pushString(type);

                // If it's a subexpression, the string result
                // will be pushed after this opcode.
                if( type !== 'sexpr' ) {
                    if( typeof string === 'string' ) {
                        this.pushString(string);
                    } else {
                        this.pushStackLiteral(string);
                    }
                }
            },

            emptyHash        : function() {
                this.pushStackLiteral('{}');

                if( this.options.stringParams ) {
                    this.push('{}'); // hashContexts
                    this.push('{}'); // hashTypes
                }
            },
            pushHash         : function() {
                if( this.hash ) {
                    this.hashes.push(this.hash);
                }
                this.hash = {values: [], types: [], contexts: []};
            },
            popHash          : function() {
                var hash = this.hash;
                this.hash = this.hashes.pop();

                if( this.options.stringParams ) {
                    this.push('{' + hash.contexts.join(',') + '}');
                    this.push('{' + hash.types.join(',') + '}');
                }

                this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
            },

            // [pushString]
            //
            // On stack, before: ...
            // On stack, after: quotedString(string), ...
            //
            // Push a quoted version of `string` onto the stack
            pushString       : function(string) {
                this.pushStackLiteral(this.quotedString(string));
            },

            // [push]
            //
            // On stack, before: ...
            // On stack, after: expr, ...
            //
            // Push an expression onto the stack
            push             : function(expr) {
                this.inlineStack.push(expr);
                return expr;
            },

            // [pushLiteral]
            //
            // On stack, before: ...
            // On stack, after: value, ...
            //
            // Pushes a value onto the stack. This operation prevents
            // the compiler from creating a temporary variable to hold
            // it.
            pushLiteral      : function(value) {
                this.pushStackLiteral(value);
            },

            // [pushProgram]
            //
            // On stack, before: ...
            // On stack, after: program(guid), ...
            //
            // Push a program expression onto the stack. This takes
            // a compile-time guid and converts it into a runtime-accessible
            // expression.
            pushProgram      : function(guid) {
                if( guid != null ) {
                    this.pushStackLiteral(this.programExpression(guid));
                } else {
                    this.pushStackLiteral(null);
                }
            },

            // [invokeHelper]
            //
            // On stack, before: hash, inverse, program, params..., ...
            // On stack, after: result of helper invocation
            //
            // Pops off the helper's parameters, invokes the helper,
            // and pushes the helper's return value onto the stack.
            //
            // If the helper is not found, `helperMissing` is called.
            invokeHelper     : function(paramSize, name, isRoot) {
                this.context.aliases.helperMissing = 'helpers.helperMissing';
                this.useRegister('helper');

                var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
                var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

                var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
                if( helper.paramsInit ) {
                    lookup += ',' + helper.paramsInit;
                }

                this.push(
                    '('
                        + lookup
                        + ',helper '
                        + '? helper.call(' + helper.callParams + ') '
                        + ': helperMissing.call(' + helper.helperMissingParams + '))');

                // Always flush subexpressions. This is both to prevent the compounding size issue that
                // occurs when the code has to be duplicated for inlining and also to prevent errors
                // due to the incorrect options object being passed due to the shared register.
                if( !isRoot ) {
                    this.flushInline();
                }
            },

            // [invokeKnownHelper]
            //
            // On stack, before: hash, inverse, program, params..., ...
            // On stack, after: result of helper invocation
            //
            // This operation is used when the helper is known to exist,
            // so a `helperMissing` fallback is not required.
            invokeKnownHelper: function(paramSize, name) {
                var helper = this.setupHelper(paramSize, name);
                this.push(helper.name + ".call(" + helper.callParams + ")");
            },

            // [invokeAmbiguous]
            //
            // On stack, before: hash, inverse, program, params..., ...
            // On stack, after: result of disambiguation
            //
            // This operation is used when an expression like `{{foo}}`
            // is provided, but we don't know at compile-time whether it
            // is a helper or a path.
            //
            // This operation emits more code than the other options,
            // and can be avoided by passing the `knownHelpers` and
            // `knownHelpersOnly` flags at compile-time.
            invokeAmbiguous  : function(name, helperCall) {
                this.context.aliases.functionType = '"function"';
                this.useRegister('helper');

                this.emptyHash();
                var helper = this.setupHelper(0, name, helperCall);

                var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

                var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
                var nextStack = this.nextStack();

                if( helper.paramsInit ) {
                    this.pushSource(helper.paramsInit);
                }
                this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
                this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
            },

            // [invokePartial]
            //
            // On stack, before: context, ...
            // On stack after: result of partial invocation
            //
            // This operation pops off a context, invokes a partial with that context,
            // and pushes the result of the invocation back.
            invokePartial    : function(name) {
                var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

                if( this.options.data ) {
                    params.push("data");
                }

                this.context.aliases.self = "this";
                this.push("self.invokePartial(" + params.join(", ") + ")");
            },

            // [assignToHash]
            //
            // On stack, before: value, hash, ...
            // On stack, after: hash, ...
            //
            // Pops a value and hash off the stack, assigns `hash[key] = value`
            // and pushes the hash back onto the stack.
            assignToHash     : function(key) {
                var value = this.popStack(),
                    context,
                    type;

                if( this.options.stringParams ) {
                    type = this.popStack();
                    context = this.popStack();
                }

                var hash = this.hash;
                if( context ) {
                    hash.contexts.push("'" + key + "': " + context);
                }
                if( type ) {
                    hash.types.push("'" + key + "': " + type);
                }
                hash.values.push("'" + key + "': (" + value + ")");
            },

            // HELPERS

            compiler: JavaScriptCompiler,

            compileChildren     : function(environment, options) {
                var children = environment.children, child, compiler;

                for( var i = 0, l = children.length; i < l; i++ ) {
                    child = children[i];
                    compiler = new this.compiler();

                    var index = this.matchExistingProgram(child);

                    if( index == null ) {
                        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
                        index = this.context.programs.length;
                        child.index = index;
                        child.name = 'program' + index;
                        this.context.programs[index] = compiler.compile(child, options, this.context);
                        this.context.environments[index] = child;
                    } else {
                        child.index = index;
                        child.name = 'program' + index;
                    }
                }
            },
            matchExistingProgram: function(child) {
                for( var i = 0, len = this.context.environments.length; i < len; i++ ) {
                    var environment = this.context.environments[i];
                    if( environment && environment.equals(child) ) {
                        return i;
                    }
                }
            },

            programExpression: function(guid) {
                this.context.aliases.self = "this";

                if( guid == null ) {
                    return "self.noop";
                }

                var child = this.environment.children[guid],
                    depths = child.depths.list, depth;

                var programParams = [child.index, child.name, "data"];

                for( var i = 0, l = depths.length; i < l; i++ ) {
                    depth = depths[i];

                    if( depth === 1 ) {
                        programParams.push("depth0");
                    }
                    else {
                        programParams.push("depth" + (depth - 1));
                    }
                }

                return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
            },

            register: function(name, val) {
                this.useRegister(name);
                this.pushSource(name + " = " + val + ";");
            },

            useRegister: function(name) {
                if( !this.registers[name] ) {
                    this.registers[name] = true;
                    this.registers.list.push(name);
                }
            },

            pushStackLiteral: function(item) {
                return this.push(new Literal(item));
            },

            pushSource: function(source) {
                if( this.pendingContent ) {
                    this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
                    this.pendingContent = undefined;
                }

                if( source ) {
                    this.source.push(source);
                }
            },

            pushStack: function(item) {
                this.flushInline();

                var stack = this.incrStack();
                if( item ) {
                    this.pushSource(stack + " = " + item + ";");
                }
                this.compileStack.push(stack);
                return stack;
            },

            replaceStack: function(callback) {
                var prefix = '',
                    inline = this.isInline(),
                    stack,
                    createdStack,
                    usedLiteral;

                // If we are currently inline then we want to merge the inline statement into the
                // replacement statement via ','
                if( inline ) {
                    var top = this.popStack(true);

                    if( top instanceof Literal ) {
                        // Literals do not need to be inlined
                        stack = top.value;
                        usedLiteral = true;
                    } else {
                        // Get or create the current stack name for use by the inline
                        createdStack = !this.stackSlot;
                        var name = !createdStack ? this.topStackName() : this.incrStack();

                        prefix = '(' + this.push(name) + ' = ' + top + '),';
                        stack = this.topStack();
                    }
                } else {
                    stack = this.topStack();
                }

                var item = callback.call(this, stack);

                if( inline ) {
                    if( !usedLiteral ) {
                        this.popStack();
                    }
                    if( createdStack ) {
                        this.stackSlot--;
                    }
                    this.push('(' + prefix + item + ')');
                } else {
                    // Prevent modification of the context depth variable. Through replaceStack
                    if( !/^stack/.test(stack) ) {
                        stack = this.nextStack();
                    }

                    this.pushSource(stack + " = (" + prefix + item + ");");
                }
                return stack;
            },

            nextStack: function() {
                return this.pushStack();
            },

            incrStack   : function() {
                this.stackSlot++;
                if( this.stackSlot > this.stackVars.length ) {
                    this.stackVars.push("stack" + this.stackSlot);
                }
                return this.topStackName();
            },
            topStackName: function() {
                return "stack" + this.stackSlot;
            },
            flushInline : function() {
                var inlineStack = this.inlineStack;
                if( inlineStack.length ) {
                    this.inlineStack = [];
                    for( var i = 0, len = inlineStack.length; i < len; i++ ) {
                        var entry = inlineStack[i];
                        if( entry instanceof Literal ) {
                            this.compileStack.push(entry);
                        } else {
                            this.pushStack(entry);
                        }
                    }
                }
            },
            isInline    : function() {
                return this.inlineStack.length;
            },

            popStack: function(wrapped) {
                var inline = this.isInline(),
                    item = (inline ? this.inlineStack : this.compileStack).pop();

                if( !wrapped && (item instanceof Literal) ) {
                    return item.value;
                } else {
                    if( !inline ) {
                        if( !this.stackSlot ) {
                            throw new Exception('Invalid stack pop');
                        }
                        this.stackSlot--;
                    }
                    return item;
                }
            },

            topStack: function(wrapped) {
                var stack = (this.isInline() ? this.inlineStack : this.compileStack),
                    item = stack[stack.length - 1];

                if( !wrapped && (item instanceof Literal) ) {
                    return item.value;
                } else {
                    return item;
                }
            },

            quotedString: function(str) {
                return '"' + str
                    .replace(/\\/g, '\\\\')
                    .replace(/"/g, '\\"')
                    .replace(/\n/g, '\\n')
                    .replace(/\r/g, '\\r')
                    .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
                    .replace(/\u2029/g, '\\u2029') + '"';
            },

            setupHelper: function(paramSize, name, missingParams) {
                var params = [],
                    paramsInit = this.setupParams(paramSize, params, missingParams);
                var foundHelper = this.nameLookup('helpers', name, 'helper');

                return {
                    params             : params,
                    paramsInit         : paramsInit,
                    name               : foundHelper,
                    callParams         : ["depth0"].concat(params).join(", "),
                    helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
                };
            },

            setupOptions: function(paramSize, params) {
                var options = [], contexts = [], types = [], param, inverse, program;

                options.push("hash:" + this.popStack());

                if( this.options.stringParams ) {
                    options.push("hashTypes:" + this.popStack());
                    options.push("hashContexts:" + this.popStack());
                }

                inverse = this.popStack();
                program = this.popStack();

                // Avoid setting fn and inverse if neither are set. This allows
                // helpers to do a check for `if (options.fn)`
                if( program || inverse ) {
                    if( !program ) {
                        this.context.aliases.self = "this";
                        program = "self.noop";
                    }

                    if( !inverse ) {
                        this.context.aliases.self = "this";
                        inverse = "self.noop";
                    }

                    options.push("inverse:" + inverse);
                    options.push("fn:" + program);
                }

                for( var i = 0; i < paramSize; i++ ) {
                    param = this.popStack();
                    params.push(param);

                    if( this.options.stringParams ) {
                        types.push(this.popStack());
                        contexts.push(this.popStack());
                    }
                }

                if( this.options.stringParams ) {
                    options.push("contexts:[" + contexts.join(",") + "]");
                    options.push("types:[" + types.join(",") + "]");
                }

                if( this.options.data ) {
                    options.push("data:data");
                }

                return options;
            },

            // the params and contexts arguments are passed in arrays
            // to fill in
            setupParams : function(paramSize, params, useRegister) {
                var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

                if( useRegister ) {
                    this.useRegister('options');
                    params.push('options');
                    return 'options=' + options;
                } else {
                    params.push(options);
                    return '';
                }
            }
        };

        var reservedWords = (
            "break else new var" +
                " case finally return void" +
                " catch for switch while" +
                " continue function this with" +
                " default if throw" +
                " delete in try" +
                " do instanceof typeof" +
                " abstract enum int short" +
                " boolean export interface static" +
                " byte extends long super" +
                " char final native synchronized" +
                " class float package throws" +
                " const goto private transient" +
                " debugger implements protected volatile" +
                " double import public let yield"
            ).split(" ");

        var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

        for( var i = 0, l = reservedWords.length; i < l; i++ ) {
            compilerWords[reservedWords[i]] = true;
        }

        JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
            if( !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name) ) {
                return true;
            }
            return false;
        };

        __exports__ = JavaScriptCompiler;
        return __exports__;
    })(__module2__, __module5__);

// handlebars.js
    var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
        "use strict";
        var __exports__;
        /*globals Handlebars: true */
        var Handlebars = __dependency1__;

        // Compiler imports
        var AST = __dependency2__;
        var Parser = __dependency3__.parser;
        var parse = __dependency3__.parse;
        var Compiler = __dependency4__.Compiler;
        var compile = __dependency4__.compile;
        var precompile = __dependency4__.precompile;
        var JavaScriptCompiler = __dependency5__;

        var _create = Handlebars.create;
        var create = function() {
            var hb = _create();

            hb.compile = function(input, options) {
                return compile(input, options, hb);
            };
            hb.precompile = function(input, options) {
                return precompile(input, options, hb);
            };

            hb.AST = AST;
            hb.Compiler = Compiler;
            hb.JavaScriptCompiler = JavaScriptCompiler;
            hb.Parser = Parser;
            hb.parse = parse;

            return hb;
        };

        Handlebars = create();
        Handlebars.create = create;

        __exports__ = Handlebars;
        return __exports__;
    })(__module1__, __module7__, __module8__, __module10__, __module11__);

    return __module0__;
})();
(function() {

    /**
     * Require the given path.
     *
     * @param {String} path
     * @return {Object} exports
     * @api public
     */

    function require(path, parent, orig) {
        var resolved = require.resolve(path);

        // lookup failed
        if( null == resolved ) {
            orig = orig || path;
            parent = parent || 'root';
            var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
            err.path = orig;
            err.parent = parent;
            err.require = true;
            throw err;
        }

        var module = require.modules[resolved];

        // perform real require()
        // by invoking the module's
        // registered function
        if( !module._resolving && !module.exports ) {
            var mod = {};
            mod.exports = {};
            mod.client = mod.component = true;
            module._resolving = true;
            module.call(this, mod.exports, require.relative(resolved), mod);
            delete module._resolving;
            module.exports = mod.exports;
        }

        return module.exports;
    }

    /**
     * Registered modules.
     */

    require.modules = {};

    /**
     * Registered aliases.
     */

    require.aliases = {};

    /**
     * Resolve `path`.
     *
     * Lookup:
     *
     *   - PATH/index.js
     *   - PATH.js
     *   - PATH
     *
     * @param {String} path
     * @return {String} path or null
     * @api private
     */

    require.resolve = function(path) {
        if( path.charAt(0) === '/' ) path = path.slice(1);

        var paths = [
            path,
            path + '.js',
            path + '.json',
            path + '/index.js',
            path + '/index.json'
        ];

        for( var i = 0; i < paths.length; i++ ) {
            var path = paths[i];
            if( require.modules.hasOwnProperty(path) ) return path;
            if( require.aliases.hasOwnProperty(path) ) return require.aliases[path];
        }
    };

    /**
     * Normalize `path` relative to the current path.
     *
     * @param {String} curr
     * @param {String} path
     * @return {String}
     * @api private
     */

    require.normalize = function(curr, path) {
        var segs = [];

        if( '.' != path.charAt(0) ) return path;

        curr = curr.split('/');
        path = path.split('/');

        for( var i = 0; i < path.length; ++i ) {
            if( '..' == path[i] ) {
                curr.pop();
            } else if( '.' != path[i] && '' != path[i] ) {
                segs.push(path[i]);
            }
        }

        return curr.concat(segs).join('/');
    };

    /**
     * Register module at `path` with callback `definition`.
     *
     * @param {String} path
     * @param {Function} definition
     * @api private
     */

    require.register = function(path, definition) {
        require.modules[path] = definition;
    };

    /**
     * Alias a module definition.
     *
     * @param {String} from
     * @param {String} to
     * @api private
     */

    require.alias = function(from, to) {
        if( !require.modules.hasOwnProperty(from) ) {
            throw new Error('Failed to alias "' + from + '", it does not exist');
        }
        require.aliases[to] = from;
    };

    /**
     * Return a require function relative to the `parent` path.
     *
     * @param {String} parent
     * @return {Function}
     * @api private
     */

    require.relative = function(parent) {
        var p = require.normalize(parent, '..');

        /**
         * lastIndexOf helper.
         */

        function lastIndexOf(arr, obj) {
            var i = arr.length;
            while( i-- ) {
                if( arr[i] === obj ) return i;
            }
            return -1;
        }

        /**
         * The relative require() itself.
         */

        function localRequire(path) {
            var resolved = localRequire.resolve(path);
            return require(resolved, parent, path);
        }

        /**
         * Resolve relative to the parent.
         */

        localRequire.resolve = function(path) {
            var c = path.charAt(0);
            if( '/' == c ) return path.slice(1);
            if( '.' == c ) return require.normalize(p, path);

            // resolve deps by returning
            // the dep in the nearest "deps"
            // directory
            var segs = parent.split('/');
            var i = lastIndexOf(segs, 'deps') + 1;
            if( !i ) i = 0;
            path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
            return path;
        };

        /**
         * Check if module is defined at `path`.
         */

        localRequire.exists = function(path) {
            return require.modules.hasOwnProperty(localRequire.resolve(path));
        };

        return localRequire;
    };
    require.register("component-classes/index.js", function(exports, require, module) {
        /**
         * Module dependencies.
         */

        var index = require('indexof');

        /**
         * Whitespace regexp.
         */

        var re = /\s+/;

        /**
         * toString reference.
         */

        var toString = Object.prototype.toString;

        /**
         * Wrap `el` in a `ClassList`.
         *
         * @param {Element} el
         * @return {ClassList}
         * @api public
         */

        module.exports = function(el) {
            return new ClassList(el);
        };

        /**
         * Initialize a new ClassList for `el`.
         *
         * @param {Element} el
         * @api private
         */

        function ClassList(el) {
            if( !el ) throw new Error('A DOM element reference is required');
            this.el = el;
            this.list = el.classList;
        }

        /**
         * Add class `name` if not already present.
         *
         * @param {String} name
         * @return {ClassList}
         * @api public
         */

        ClassList.prototype.add = function(name) {
            // classList
            if( this.list ) {
                this.list.add(name);
                return this;
            }

            // fallback
            var arr = this.array();
            var i = index(arr, name);
            if( !~i ) arr.push(name);
            this.el.className = arr.join(' ');
            return this;
        };

        /**
         * Remove class `name` when present, or
         * pass a regular expression to remove
         * any which match.
         *
         * @param {String|RegExp} name
         * @return {ClassList}
         * @api public
         */

        ClassList.prototype.remove = function(name) {
            if( '[object RegExp]' == toString.call(name) ) {
                return this.removeMatching(name);
            }

            // classList
            if( this.list ) {
                this.list.remove(name);
                return this;
            }

            // fallback
            var arr = this.array();
            var i = index(arr, name);
            if( ~i ) arr.splice(i, 1);
            this.el.className = arr.join(' ');
            return this;
        };

        /**
         * Remove all classes matching `re`.
         *
         * @param {RegExp} re
         * @return {ClassList}
         * @api private
         */

        ClassList.prototype.removeMatching = function(re) {
            var arr = this.array();
            for( var i = 0; i < arr.length; i++ ) {
                if( re.test(arr[i]) ) {
                    this.remove(arr[i]);
                }
            }
            return this;
        };

        /**
         * Toggle class `name`, can force state via `force`.
         *
         * For browsers that support classList, but do not support `force` yet,
         * the mistake will be detected and corrected.
         *
         * @param {String} name
         * @param {Boolean} force
         * @return {ClassList}
         * @api public
         */

        ClassList.prototype.toggle = function(name, force) {
            // classList
            if( this.list ) {
                if( "undefined" !== typeof force ) {
                    if( force !== this.list.toggle(name, force) ) {
                        this.list.toggle(name); // toggle again to correct
                    }
                } else {
                    this.list.toggle(name);
                }
                return this;
            }

            // fallback
            if( "undefined" !== typeof force ) {
                if( !force ) {
                    this.remove(name);
                } else {
                    this.add(name);
                }
            } else {
                if( this.has(name) ) {
                    this.remove(name);
                } else {
                    this.add(name);
                }
            }

            return this;
        };

        /**
         * Return an array of classes.
         *
         * @return {Array}
         * @api public
         */

        ClassList.prototype.array = function() {
            var str = this.el.className.replace(/^\s+|\s+$/g, '');
            var arr = str.split(re);
            if( '' === arr[0] ) arr.shift();
            return arr;
        };

        /**
         * Check if class `name` is present.
         *
         * @param {String} name
         * @return {ClassList}
         * @api public
         */

        ClassList.prototype.has =
            ClassList.prototype.contains = function(name) {
                return this.list
                    ? this.list.contains(name)
                    : !!~index(this.array(), name);
            };

    });
    require.register("segmentio-extend/index.js", function(exports, require, module) {

        module.exports = function extend(object) {
            // Takes an unlimited number of extenders.
            var args = Array.prototype.slice.call(arguments, 1);

            // For each extender, copy their properties on our object.
            for( var i = 0, source; source = args[i]; i++ ) {
                if( !source ) continue;
                for( var property in source ) {
                    object[property] = source[property];
                }
            }

            return object;
        };
    });
    require.register("component-indexof/index.js", function(exports, require, module) {
        module.exports = function(arr, obj) {
            if( arr.indexOf ) return arr.indexOf(obj);
            for( var i = 0; i < arr.length; ++i ) {
                if( arr[i] === obj ) return i;
            }
            return -1;
        };
    });
    require.register("component-event/index.js", function(exports, require, module) {
        var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
            unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
            prefix = bind !== 'addEventListener' ? 'on' : '';

        /**
         * Bind `el` event `type` to `fn`.
         *
         * @param {Element} el
         * @param {String} type
         * @param {Function} fn
         * @param {Boolean} capture
         * @return {Function}
         * @api public
         */

        exports.bind = function(el, type, fn, capture) {
            el[bind](prefix + type, fn, capture || false);
            return fn;
        };

        /**
         * Unbind `el` event `type`'s callback `fn`.
         *
         * @param {Element} el
         * @param {String} type
         * @param {Function} fn
         * @param {Boolean} capture
         * @return {Function}
         * @api public
         */

        exports.unbind = function(el, type, fn, capture) {
            el[unbind](prefix + type, fn, capture || false);
            return fn;
        };
    });
    require.register("timoxley-to-array/index.js", function(exports, require, module) {
        /**
         * Convert an array-like object into an `Array`.
         * If `collection` is already an `Array`, then will return a clone of `collection`.
         *
         * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
         * @return {Array} Naive conversion of `collection` to a new `Array`.
         * @api public
         */

        module.exports = function toArray(collection) {
            if( typeof collection === 'undefined' ) return []
            if( collection === null ) return [null]
            if( collection === window ) return [window]
            if( typeof collection === 'string' ) return [collection]
            if( isArray(collection) ) return collection
            if( typeof collection.length != 'number' ) return [collection]
            if( typeof collection === 'function' && collection instanceof Function ) return [collection]

            var arr = []
            for( var i = 0; i < collection.length; i++ ) {
                if( Object.prototype.hasOwnProperty.call(collection, i) || i in collection ) {
                    arr.push(collection[i])
                }
            }
            if( !arr.length ) return []
            return arr
        }

        function isArray(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]";
        }

    });
    require.register("javve-events/index.js", function(exports, require, module) {
        var events = require('event'),
            toArray = require('to-array');

        /**
         * Bind `el` event `type` to `fn`.
         *
         * @param {Element} el, NodeList, HTMLCollection or Array
         * @param {String} type
         * @param {Function} fn
         * @param {Boolean} capture
         * @api public
         */

        exports.bind = function(el, type, fn, capture) {
            el = toArray(el);
            for( var i = 0; i < el.length; i++ ) {
                events.bind(el[i], type, fn, capture);
            }
        };

        /**
         * Unbind `el` event `type`'s callback `fn`.
         *
         * @param {Element} el, NodeList, HTMLCollection or Array
         * @param {String} type
         * @param {Function} fn
         * @param {Boolean} capture
         * @api public
         */

        exports.unbind = function(el, type, fn, capture) {
            el = toArray(el);
            for( var i = 0; i < el.length; i++ ) {
                events.unbind(el[i], type, fn, capture);
            }
        };

    });
    require.register("javve-get-by-class/index.js", function(exports, require, module) {
        /**
         * Find all elements with class `className` inside `container`.
         * Use `single = true` to increase performance in older browsers
         * when only one element is needed.
         *
         * @param {String} className
         * @param {Element} container
         * @param {Boolean} single
         * @api public
         */

        module.exports = (function() {
            if( document.getElementsByClassName ) {
                return function(container, className, single) {
                    if( single ) {
                        return container.getElementsByClassName(className)[0];
                    } else {
                        return container.getElementsByClassName(className);
                    }
                };
            } else if( document.querySelector ) {
                return function(container, className, single) {
                    className = '.' + className;
                    if( single ) {
                        return container.querySelector(className);
                    } else {
                        return container.querySelectorAll(className);
                    }
                };
            } else {
                return function(container, className, single) {
                    var classElements = [],
                        tag = '*';
                    if( container == null ) {
                        container = document;
                    }
                    var els = container.getElementsByTagName(tag);
                    var elsLen = els.length;
                    var pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");
                    for( var i = 0, j = 0; i < elsLen; i++ ) {
                        if( pattern.test(els[i].className) ) {
                            if( single ) {
                                return els[i];
                            } else {
                                classElements[j] = els[i];
                                j++;
                            }
                        }
                    }
                    return classElements;
                };
            }
        })();

    });
    require.register("javve-get-attribute/index.js", function(exports, require, module) {
        /**
         * Return the value for `attr` at `element`.
         *
         * @param {Element} el
         * @param {String} attr
         * @api public
         */

        module.exports = function(el, attr) {
            var result = (el.getAttribute && el.getAttribute(attr)) || null;
            if( !result ) {
                var attrs = el.attributes;
                var length = attrs.length;
                for( var i = 0; i < length; i++ ) {
                    if( attr[i] !== undefined ) {
                        if( attr[i].nodeName === attr ) {
                            result = attr[i].nodeValue;
                        }
                    }
                }
            }
            return result;
        }
    });
    require.register("javve-natural-sort/index.js", function(exports, require, module) {
        /*
         * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
         * Author: Jim Palmer (based on chunking idea from Dave Koelle)
         */

        module.exports = function(a, b, options) {
            var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
                sre = /(^[ ]*|[ ]*$)/g,
                dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                hre = /^0x[0-9a-f]+$/i,
                ore = /^0/,
                options = options || {},
                i = function(s) {
                    return options.insensitive && ('' + s).toLowerCase() || '' + s
                },
            // convert all to strings strip whitespace
                x = i(a).replace(sre, '') || '',
                y = i(b).replace(sre, '') || '',
            // chunk/tokenize
                xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
                yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
            // numeric, hex or date detection
                xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
                yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
                oFxNcL, oFyNcL,
                mult = options.desc ? -1 : 1;
            // first try and sort Hex codes or Dates
            if( yD )
                if( xD < yD ) return -1 * mult;
                else if( xD > yD ) return 1 * mult;
            // natural sorting through split numeric strings and default strings
            for( var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++ ) {
                // find floats not starting with '0', string or 0 if not defined (Clint Priest)
                oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
                oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
                // handle numeric vs string comparison - number < string - (Kyle Adams)
                if( isNaN(oFxNcL) !== isNaN(oFyNcL) ) {
                    return (isNaN(oFxNcL)) ? 1 : -1;
                }
                // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
                else if( typeof oFxNcL !== typeof oFyNcL ) {
                    oFxNcL += '';
                    oFyNcL += '';
                }
                if( oFxNcL < oFyNcL ) return -1 * mult;
                if( oFxNcL > oFyNcL ) return 1 * mult;
            }
            return 0;
        };

        /*
         var defaultSort = getSortFunction();

         module.exports = function(a, b, options) {
         if (arguments.length == 1) {
         options = a;
         return getSortFunction(options);
         } else {
         return defaultSort(a,b);
         }
         }
         */
    });
    require.register("javve-to-string/index.js", function(exports, require, module) {
        module.exports = function(s) {
            s = (s === undefined) ? "" : s;
            s = (s === null) ? "" : s;
            s = s.toString();
            return s;
        };

    });
    require.register("component-type/index.js", function(exports, require, module) {
        /**
         * toString ref.
         */

        var toString = Object.prototype.toString;

        /**
         * Return the type of `val`.
         *
         * @param {Mixed} val
         * @return {String}
         * @api public
         */

        module.exports = function(val) {
            switch( toString.call(val) ) {
                case '[object Date]':
                    return 'date';
                case '[object RegExp]':
                    return 'regexp';
                case '[object Arguments]':
                    return 'arguments';
                case '[object Array]':
                    return 'array';
                case '[object Error]':
                    return 'error';
            }

            if( val === null ) return 'null';
            if( val === undefined ) return 'undefined';
            if( val !== val ) return 'nan';
            if( val && val.nodeType === 1 ) return 'element';

            return typeof val.valueOf();
        };

    });
    require.register("list.js/index.js", function(exports, require, module) {
        /*
         ListJS with beta 1.0.0
         By Jonny Strömberg (www.jonnystromberg.com, www.listjs.com)
         */
        (function(window, undefined) {
            "use strict";

            var document = window.document,
                getByClass = require('get-by-class'),
                extend = require('extend'),
                indexOf = require('indexof');

            var List = function(id, options, values) {

                var self = this,
                    init,
                    Item = require('./src/item')(self),
                    addAsync = require('./src/add-async')(self),
                    parse = require('./src/parse')(self);

                init = {
                    start  : function() {
                        self.listClass = "list";
                        self.searchClass = "search";
                        self.sortClass = "sort";
                        self.page = 200;
                        self.i = 1;
                        self.items = [];
                        self.visibleItems = [];
                        self.matchingItems = [];
                        self.searched = false;
                        self.filtered = false;
                        self.handlers = { 'updated': [] };
                        self.plugins = {};
                        self.helpers = {
                            getByClass: getByClass,
                            extend    : extend,
                            indexOf   : indexOf
                        };

                        extend(self, options);

                        self.listContainer = (typeof(id) === 'string') ? document.getElementById(id) : id;
                        if( !self.listContainer ) {
                            return;
                        }
                        self.list = getByClass(self.listContainer, self.listClass, true);

                        self.templater = require('./src/templater')(self);
                        self.search = require('./src/search')(self);
                        self.filter = require('./src/filter')(self);
                        self.sort = require('./src/sort')(self);

                        this.items();
                        self.update();
                        this.plugins();
                    },
                    items  : function() {
                        parse(self.list);
                        if( values !== undefined ) {
                            self.add(values);
                        }
                    },
                    plugins: function() {
                        for( var i = 0; i < self.plugins.length; i++ ) {
                            var plugin = self.plugins[i];
                            self[plugin.name] = plugin;
                            plugin.init(self);
                        }
                    }
                };


                /*
                 * Add object to list
                 */
                this.add = function(values, callback) {
                    if( callback ) {
                        addAsync(values, callback);
                        return;
                    }
                    var added = [],
                        notCreate = false;
                    if( values[0] === undefined ) {
                        values = [values];
                    }
                    for( var i = 0, il = values.length; i < il; i++ ) {
                        var item = null;
                        if( values[i] instanceof Item ) {
                            item = values[i];
                            item.reload();
                        } else {
                            notCreate = (self.items.length > self.page) ? true : false;
                            item = new Item(values[i], undefined, notCreate);
                        }
                        self.items.push(item);
                        added.push(item);
                    }
                    self.update();
                    return added;
                };

                this.show = function(i, page) {
                    this.i = i;
                    this.page = page;
                    self.update();
                    return self;
                };

                /* Removes object from list.
                 * Loops through the list and removes objects where
                 * property "valuename" === value
                 */
                this.remove = function(valueName, value, options) {
                    var found = 0;
                    for( var i = 0, il = self.items.length; i < il; i++ ) {
                        if( self.items[i].values()[valueName] == value ) {
                            self.templater.remove(self.items[i], options);
                            self.items.splice(i, 1);
                            il--;
                            i--;
                            found++;
                        }
                    }
                    self.update();
                    return found;
                };

                /* Gets the objects in the list which
                 * property "valueName" === value
                 */
                this.get = function(valueName, value) {
                    var matchedItems = [];
                    for( var i = 0, il = self.items.length; i < il; i++ ) {
                        var item = self.items[i];
                        if( item.values()[valueName] == value ) {
                            matchedItems.push(item);
                        }
                    }
                    return matchedItems;
                };

                /*
                 * Get size of the list
                 */
                this.size = function() {
                    return self.items.length;
                };

                /*
                 * Removes all items from the list
                 */
                this.clear = function() {
                    self.templater.clear();
                    self.items = [];
                    return self;
                };

                this.on = function(event, callback) {
                    self.handlers[event].push(callback);
                    return self;
                };

                this.off = function(event, callback) {
                    var e = self.handlers[event];
                    var index = indexOf(e, callback);
                    if( index > -1 ) {
                        e.splice(index, 1);
                    }
                    return self;
                };

                this.trigger = function(event) {
                    var i = self.handlers[event].length;
                    while( i-- ) {
                        self.handlers[event][i](self);
                    }
                    return self;
                };

                this.reset = {
                    filter: function() {
                        var is = self.items,
                            il = is.length;
                        while( il-- ) {
                            is[il].filtered = false;
                        }
                        return self;
                    },
                    search: function() {
                        var is = self.items,
                            il = is.length;
                        while( il-- ) {
                            is[il].found = false;
                        }
                        return self;
                    }
                };

                this.update = function() {
                    var is = self.items,
                        il = is.length;

                    self.visibleItems = [];
                    self.matchingItems = [];
                    self.templater.clear();
                    for( var i = 0; i < il; i++ ) {
                        if( is[i].matching() && ((self.matchingItems.length + 1) >= self.i && self.visibleItems.length < self.page) ) {
                            is[i].show();
                            self.visibleItems.push(is[i]);
                            self.matchingItems.push(is[i]);
                        } else if( is[i].matching() ) {
                            self.matchingItems.push(is[i]);
                            is[i].hide();
                        } else {
                            is[i].hide();
                        }
                    }
                    self.trigger('updated');
                    return self;
                };

                init.start();
            };

            module.exports = List;

        })(window);

    });
    require.register("list.js/src/search.js", function(exports, require, module) {
        var events = require('events'),
            getByClass = require('get-by-class'),
            toString = require('to-string');

        module.exports = function(list) {
            var item,
                text,
                columns,
                searchString,
                customSearch;

            var prepare = {
                resetList      : function() {
                    list.i = 1;
                    list.templater.clear();
                    customSearch = undefined;
                },
                setOptions     : function(args) {
                    if( args.length == 2 && args[1] instanceof Array ) {
                        columns = args[1];
                    } else if( args.length == 2 && typeof(args[1]) == "function" ) {
                        customSearch = args[1];
                    } else if( args.length == 3 ) {
                        columns = args[1];
                        customSearch = args[2];
                    }
                },
                setColumns     : function() {
                    columns = (columns === undefined) ? prepare.toArray(list.items[0].values()) : columns;
                },
                setSearchString: function(s) {
                    s = toString(s).toLowerCase();
                    s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"); // Escape regular expression characters
                    searchString = s;
                },
                toArray        : function(values) {
                    var tmpColumn = [];
                    for( var name in values ) {
                        tmpColumn.push(name);
                    }
                    return tmpColumn;
                }
            };
            var search = {
                list  : function() {
                    for( var k = 0, kl = list.items.length; k < kl; k++ ) {
                        search.item(list.items[k]);
                    }
                },
                item  : function(item) {
                    item.found = false;
                    for( var j = 0, jl = columns.length; j < jl; j++ ) {
                        if( search.values(item.values(), columns[j]) ) {
                            item.found = true;
                            return;
                        }
                    }
                },
                values: function(values, column) {
                    if( values.hasOwnProperty(column) ) {
                        text = toString(values[column]).toLowerCase();
                        if( (searchString !== "") && (text.search(searchString) > -1) ) {
                            return true;
                        }
                    }
                    return false;
                },
                reset : function() {
                    list.reset.search();
                    list.searched = false;
                }
            };

            var searchMethod = function(str) {
                list.trigger('searchStart');

                prepare.resetList();
                prepare.setSearchString(str);
                prepare.setOptions(arguments); // str, cols|searchFunction, searchFunction
                prepare.setColumns();

                if( searchString === "" ) {
                    search.reset();
                } else {
                    list.searched = true;
                    if( customSearch ) {
                        customSearch(searchString, columns);
                    } else {
                        search.list();
                    }
                }

                list.update();
                list.trigger('searchComplete');
                return list.visibleItems;
            };

            list.handlers.searchStart = list.handlers.searchStart || [];
            list.handlers.searchComplete = list.handlers.searchComplete || [];

            events.bind(getByClass(list.listContainer, list.searchClass), 'keyup', function(e) {
                var target = e.target || e.srcElement, // IE have srcElement
                    alreadyCleared = (target.value === "" && !list.searched);
                if( !alreadyCleared ) { // If oninput already have resetted the list, do nothing
                    searchMethod(target.value);
                }
            });

            // Used to detect click on HTML5 clear button
            events.bind(getByClass(list.listContainer, list.searchClass), 'input', function(e) {
                var target = e.target || e.srcElement;
                if( target.value === "" ) {
                    searchMethod('');
                }
            });

            list.helpers.toString = toString;
            return searchMethod;
        };

    });
    require.register("list.js/src/sort.js", function(exports, require, module) {
        var naturalSort = require('natural-sort'),
            classes = require('classes'),
            events = require('events'),
            getByClass = require('get-by-class'),
            getAttribute = require('get-attribute');

        module.exports = function(list) {
            list.sortFunction = list.sortFunction || function(itemA, itemB, options) {
                options.desc = options.order == "desc" ? true : false; // Natural sort uses this format
                return naturalSort(itemA.values()[options.valueName], itemB.values()[options.valueName], options);
            };

            var buttons = {
                els           : undefined,
                clear         : function() {
                    for( var i = 0, il = buttons.els.length; i < il; i++ ) {
                        classes(buttons.els[i]).remove('asc');
                        classes(buttons.els[i]).remove('desc');
                    }
                },
                getOrder      : function(btn) {
                    var predefinedOrder = getAttribute(btn, 'data-order');
                    if( predefinedOrder == "asc" || predefinedOrder == "desc" ) {
                        return predefinedOrder;
                    } else if( classes(btn).has('desc') ) {
                        return "asc";
                    } else if( classes(btn).has('asc') ) {
                        return "desc";
                    } else {
                        return "asc";
                    }
                },
                getInSensitive: function(btn, options) {
                    var insensitive = getAttribute(btn, 'data-insensitive');
                    if( insensitive === "true" ) {
                        options.insensitive = true;
                    } else {
                        options.insensitive = false;
                    }
                },
                setOrder      : function(options) {
                    for( var i = 0, il = buttons.els.length; i < il; i++ ) {
                        var btn = buttons.els[i];
                        if( getAttribute(btn, 'data-sort') !== options.valueName ) {
                            continue;
                        }
                        var predefinedOrder = getAttribute(btn, 'data-order');
                        if( predefinedOrder == "asc" || predefinedOrder == "desc" ) {
                            if( predefinedOrder == options.order ) {
                                classes(btn).add(options.order);
                            }
                        } else {
                            classes(btn).add(options.order);
                        }
                    }
                }
            };
            var sort = function() {
                list.trigger('sortStart');
                options = {};

                var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;

                if( target ) {
                    options.valueName = getAttribute(target, 'data-sort');
                    buttons.getInSensitive(target, options);
                    options.order = buttons.getOrder(target);
                } else {
                    options = arguments[1] || options;
                    options.valueName = arguments[0];
                    options.order = options.order || "asc";
                    options.insensitive = (typeof options.insensitive == "undefined") ? true : options.insensitive;
                }
                buttons.clear();
                buttons.setOrder(options);

                options.sortFunction = options.sortFunction || list.sortFunction;
                list.items.sort(function(a, b) {
                    return options.sortFunction(a, b, options);
                });
                list.update();
                list.trigger('sortComplete');
            };

            // Add handlers
            list.handlers.sortStart = list.handlers.sortStart || [];
            list.handlers.sortComplete = list.handlers.sortComplete || [];

            buttons.els = getByClass(list.listContainer, list.sortClass);
            events.bind(buttons.els, 'click', sort);
            list.on('searchStart', buttons.clear);
            list.on('filterStart', buttons.clear);

            // Helpers
            list.helpers.classes = classes;
            list.helpers.naturalSort = naturalSort;
            list.helpers.events = events;
            list.helpers.getAttribute = getAttribute;

            return sort;
        };

    });
    require.register("list.js/src/item.js", function(exports, require, module) {
        module.exports = function(list) {
            return function(initValues, element, notCreate) {
                var item = this;

                this._values = {};

                this.found = false; // Show if list.searched == true and this.found == true
                this.filtered = false;// Show if list.filtered == true and this.filtered == true

                var init = function(initValues, element, notCreate) {
                    if( element === undefined ) {
                        if( notCreate ) {
                            item.values(initValues, notCreate);
                        } else {
                            item.values(initValues);
                        }
                    } else {
                        item.elm = element;
                        var values = list.templater.get(item, initValues);
                        item.values(values);
                    }
                };
                this.values = function(newValues, notCreate) {
                    if( newValues !== undefined ) {
                        for( var name in newValues ) {
                            item._values[name] = newValues[name];
                        }
                        if( notCreate !== true ) {
                            list.templater.set(item, item.values());
                        }
                    } else {
                        return item._values;
                    }
                };
                this.show = function() {
                    list.templater.show(item);
                };
                this.hide = function() {
                    list.templater.hide(item);
                };
                this.matching = function() {
                    return (
                        (list.filtered && list.searched && item.found && item.filtered) ||
                            (list.filtered && !list.searched && item.filtered) ||
                            (!list.filtered && list.searched && item.found) ||
                            (!list.filtered && !list.searched)
                        );
                };
                this.visible = function() {
                    return (item.elm.parentNode == list.list) ? true : false;
                };
                init(initValues, element, notCreate);
            };
        };

    });
    require.register("list.js/src/templater.js", function(exports, require, module) {
        var getByClass = require('get-by-class');

        var Templater = function(list) {
            var itemSource = getItemSource(list.item),
                templater = this;

            function getItemSource(item) {
                if( item === undefined ) {
                    var nodes = list.list.childNodes,
                        items = [];

                    for( var i = 0, il = nodes.length; i < il; i++ ) {
                        // Only textnodes have a data attribute
                        if( nodes[i].data === undefined ) {
                            return nodes[i];
                        }
                    }
                    return null;
                } else if( item.indexOf("<") !== -1 ) { // Try create html element of list, do not work for tables!!
                    var div = document.createElement('div');
                    div.innerHTML = item;
                    return div.firstChild;
                } else {
                    return document.getElementById(list.item);
                }
            }

            /* Get values from element */
            this.get = function(item, valueNames) {
                templater.create(item);
                var values = {};
                for( var i = 0, il = valueNames.length; i < il; i++ ) {
                    var elm = getByClass(item.elm, valueNames[i], true);
                    values[valueNames[i]] = elm ? elm.innerHTML : "";
                }
                return values;
            };

            /* Sets values at element */
            this.set = function(item, values) {
                if( !templater.create(item) ) {
                    for( var v in values ) {
                        if( values.hasOwnProperty(v) ) {
                            // TODO speed up if possible
                            var elm = getByClass(item.elm, v, true);
                            if( elm ) {
                                /* src attribute for image tag & text for other tags */
                                if( elm.tagName === "IMG" && values[v] !== "" ) {
                                    elm.src = values[v];
                                } else {
                                    elm.innerHTML = values[v];
                                }
                            }
                        }
                    }
                }
            };

            this.create = function(item) {
                if( item.elm !== undefined ) {
                    return false;
                }
                /* If item source does not exists, use the first item in list as
                 source for new items */
                var newItem = itemSource.cloneNode(true);
                newItem.removeAttribute('id');
                item.elm = newItem;
                templater.set(item, item.values());
                return true;
            };
            this.remove = function(item) {
                list.list.removeChild(item.elm);
            };
            this.show = function(item) {
                templater.create(item);
                list.list.appendChild(item.elm);
            };
            this.hide = function(item) {
                if( item.elm !== undefined && item.elm.parentNode === list.list ) {
                    list.list.removeChild(item.elm);
                }
            };
            this.clear = function() {
                /* .innerHTML = ''; fucks up IE */
                if( list.list.hasChildNodes() ) {
                    while( list.list.childNodes.length >= 1 ) {
                        list.list.removeChild(list.list.firstChild);
                    }
                }
            };
        };

        module.exports = function(list) {
            return new Templater(list);
        };

    });
    require.register("list.js/src/filter.js", function(exports, require, module) {
        module.exports = function(list) {

            // Add handlers
            list.handlers.filterStart = list.handlers.filterStart || [];
            list.handlers.filterComplete = list.handlers.filterComplete || [];

            return function(filterFunction) {
                list.trigger('filterStart');
                list.i = 1; // Reset paging
                list.reset.filter();
                if( filterFunction === undefined ) {
                    list.filtered = false;
                } else {
                    list.filtered = true;
                    var is = list.items;
                    for( var i = 0, il = is.length; i < il; i++ ) {
                        var item = is[i];
                        if( filterFunction(item) ) {
                            item.filtered = true;
                        } else {
                            item.filtered = false;
                        }
                    }
                }
                list.update();
                list.trigger('filterComplete');
                return list.visibleItems;
            };
        };

    });
    require.register("list.js/src/add-async.js", function(exports, require, module) {
        module.exports = function(list) {
            return function(values, callback, items) {
                var valuesToAdd = values.splice(0, 100);
                items = items || [];
                items = items.concat(list.add(valuesToAdd));
                if( values.length > 0 ) {
                    setTimeout(function() {
                        addAsync(values, callback, items);
                    }, 10);
                } else {
                    list.update();
                    callback(items);
                }
            };
        };
    });
    require.register("list.js/src/parse.js", function(exports, require, module) {
        module.exports = function(list) {

            var Item = require('./item')(list);

            var getChildren = function(parent) {
                var nodes = parent.childNodes,
                    items = [];
                for( var i = 0, il = nodes.length; i < il; i++ ) {
                    // Only textnodes have a data attribute
                    if( nodes[i].data === undefined ) {
                        items.push(nodes[i]);
                    }
                }
                return items;
            };

            var parse = function(itemElements, valueNames) {
                for( var i = 0, il = itemElements.length; i < il; i++ ) {
                    list.items.push(new Item(valueNames, itemElements[i]));
                }
            };
            var parseAsync = function(itemElements, valueNames) {
                var itemsToIndex = itemElements.splice(0, 100); // TODO: If < 100 items, what happens in IE etc?
                parse(itemsToIndex, valueNames);
                if( itemElements.length > 0 ) {
                    setTimeout(function() {
                        init.items.indexAsync(itemElements, valueNames);
                    }, 10);
                } else {
                    list.update();
                    // TODO: Add indexed callback
                }
            };

            return function() {
                var itemsToIndex = getChildren(list.list),
                    valueNames = list.valueNames;

                if( list.indexAsync ) {
                    parseAsync(itemsToIndex, valueNames);
                } else {
                    parse(itemsToIndex, valueNames);
                }
            };
        };

    });


    require.alias("component-classes/index.js", "list.js/deps/classes/index.js");
    require.alias("component-classes/index.js", "classes/index.js");
    require.alias("component-indexof/index.js", "component-classes/deps/indexof/index.js");

    require.alias("segmentio-extend/index.js", "list.js/deps/extend/index.js");
    require.alias("segmentio-extend/index.js", "extend/index.js");

    require.alias("component-indexof/index.js", "list.js/deps/indexof/index.js");
    require.alias("component-indexof/index.js", "indexof/index.js");

    require.alias("javve-events/index.js", "list.js/deps/events/index.js");
    require.alias("javve-events/index.js", "events/index.js");
    require.alias("component-event/index.js", "javve-events/deps/event/index.js");

    require.alias("timoxley-to-array/index.js", "javve-events/deps/to-array/index.js");

    require.alias("javve-get-by-class/index.js", "list.js/deps/get-by-class/index.js");
    require.alias("javve-get-by-class/index.js", "get-by-class/index.js");

    require.alias("javve-get-attribute/index.js", "list.js/deps/get-attribute/index.js");
    require.alias("javve-get-attribute/index.js", "get-attribute/index.js");

    require.alias("javve-natural-sort/index.js", "list.js/deps/natural-sort/index.js");
    require.alias("javve-natural-sort/index.js", "natural-sort/index.js");

    require.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js");
    require.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js");
    require.alias("javve-to-string/index.js", "to-string/index.js");
    require.alias("javve-to-string/index.js", "javve-to-string/index.js");
    require.alias("component-type/index.js", "list.js/deps/type/index.js");
    require.alias("component-type/index.js", "type/index.js");
    if( typeof exports == "object" ) {
        module.exports = require("list.js");
    } else if( typeof define == "function" && define.amd ) {
        define(function() {
            return require("list.js");
        });
    } else {
        this["List"] = require("list.js");
    }
})();(function(window) {
    var re = {
        not_string  : /[^s]/,
        number      : /[def]/,
        text        : /^[^\x25]+/,
        modulo      : /^\x25{2}/,
        placeholder : /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/,
        key         : /^([a-z_][a-z_\d]*)/i,
        key_access  : /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign        : /^[\+\-]/
    }

    function sprintf() {
        var key = arguments[0], cache = sprintf.cache
        if( !(cache[key] && cache.hasOwnProperty(key)) ) {
            cache[key] = sprintf.parse(key)
        }
        return sprintf.format.call(null, cache[key], arguments)
    }

    sprintf.format = function(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
        for( i = 0; i < tree_length; i++ ) {
            node_type = get_type(parse_tree[i])
            if( node_type === "string" ) {
                output[output.length] = parse_tree[i]
            }
            else if( node_type === "array" ) {
                match = parse_tree[i] // convenience purposes only
                if( match[2] ) { // keyword argument
                    arg = argv[cursor]
                    for( k = 0; k < match[2].length; k++ ) {
                        if( !arg.hasOwnProperty(match[2][k]) ) {
                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
                        }
                        arg = arg[match[2][k]]
                    }
                }
                else if( match[1] ) { // positional argument (explicit)
                    arg = argv[match[1]]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if( get_type(arg) == "function" ) {
                    arg = arg()
                }

                if( re.not_string.test(match[8]) && (get_type(arg) != "number" && isNaN(arg)) ) {
                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
                }

                if( re.number.test(match[8]) ) {
                    is_positive = arg >= 0
                }

                switch( match[8] ) {
                    case "b":
                        arg = arg.toString(2)
                        break
                    case "c":
                        arg = String.fromCharCode(arg)
                        break
                    case "d":
                        arg = parseInt(arg, 10)
                        break
                    case "e":
                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
                        break
                    case "f":
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                        break
                    case "o":
                        arg = arg.toString(8)
                        break
                    case "s":
                        arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case "u":
                        arg = arg >>> 0
                        break
                    case "x":
                        arg = arg.toString(16)
                        break
                    case "X":
                        arg = arg.toString(16).toUpperCase()
                        break
                }
                if( !is_positive || (re.number.test(match[8]) && match[3]) ) {
                    sign = is_positive ? "+" : "-"
                    arg = arg.toString().replace(re.sign, "")
                }
                pad_character = match[4] ? match[4] == "0" ? "0" : match[4].charAt(1) : " "
                pad_length = match[6] - (sign + arg).length
                pad = match[6] ? str_repeat(pad_character, pad_length) : ""
                output[output.length] = match[5] ? sign + arg + pad : (pad_character == 0 ? sign + pad + arg : pad + sign + arg)
            }
        }
        return output.join("")
    }

    sprintf.cache = {}

    sprintf.parse = function(fmt) {
        var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
        while( _fmt ) {
            if( (match = re.text.exec(_fmt)) !== null ) {
                parse_tree[parse_tree.length] = match[0]
            }
            else if( (match = re.modulo.exec(_fmt)) !== null ) {
                parse_tree[parse_tree.length] = "%"
            }
            else if( (match = re.placeholder.exec(_fmt)) !== null ) {
                if( match[2] ) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if( (field_match = re.key.exec(replacement_field)) !== null ) {
                        field_list[field_list.length] = field_match[1]
                        while( (replacement_field = replacement_field.substring(field_match[0].length)) !== "" ) {
                            if( (field_match = re.key_access.exec(replacement_field)) !== null ) {
                                field_list[field_list.length] = field_match[1]
                            }
                            else if( (field_match = re.index_access.exec(replacement_field)) !== null ) {
                                field_list[field_list.length] = field_match[1]
                            }
                            else {
                                throw new SyntaxError("[sprintf] failed to parse named argument key")
                            }
                        }
                    }
                    else {
                        throw new SyntaxError("[sprintf] failed to parse named argument key")
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if( arg_names === 3 ) {
                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
                }
                parse_tree[parse_tree.length] = match
            }
            else {
                throw new SyntaxError("[sprintf] unexpected placeholder")
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return parse_tree
    }

    var vsprintf = function(fmt, argv, _argv) {
        _argv = (argv || []).slice(0)
        _argv.splice(0, 0, fmt)
        return sprintf.apply(null, _argv)
    }

    /**
     * helpers
     */
    function get_type(variable) {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
    }

    function str_repeat(input, multiplier) {
        return Array(multiplier + 1).join(input)
    }

    /**
     * export to either browser or node.js
     */
    if( typeof exports !== "undefined" ) {
        exports.sprintf = sprintf
        exports.vsprintf = vsprintf
    }
    else {
        window.sprintf = sprintf
        window.vsprintf = vsprintf

        if( typeof define === "function" && define.amd ) {
            define(function() {
                return {
                    sprintf : sprintf,
                    vsprintf: vsprintf
                }
            })
        }
    }
})(typeof window === "undefined" ? this : window);