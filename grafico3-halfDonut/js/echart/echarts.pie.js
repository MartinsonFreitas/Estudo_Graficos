!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(
        ((t =
          'undefined' != typeof globalThis ? globalThis : t || self).echarts =
          {})
      )
})(this, function (t) {
  'use strict'
  var m = function (t, e) {
    return (m =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array
        ? function (t, e) {
            t.__proto__ = e
          }
        : function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          }))(t, e)
  }
  function u (t, e) {
    if ('function' != typeof e && null !== e)
      throw new TypeError(
        'Class extends value ' + String(e) + ' is not a constructor or null'
      )
    function n () {
      this.constructor = t
    }
    m(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
  }
  function v () {
    ;(this.firefox = !1),
      (this.ie = !1),
      (this.edge = !1),
      (this.newEdge = !1),
      (this.weChat = !1)
  }
  var b = new (function () {
    ;(this.browser = new v()),
      (this.node = !1),
      (this.wxa = !1),
      (this.worker = !1),
      (this.svgSupported = !1),
      (this.touchEventsSupported = !1),
      (this.pointerEventsSupported = !1),
      (this.domSupported = !1),
      (this.transformSupported = !1),
      (this.transform3dSupported = !1),
      (this.hasGlobalWindow = 'undefined' != typeof window)
  })()
  'object' == typeof wx && 'function' == typeof wx.getSystemInfoSync
    ? ((b.wxa = !0), (b.touchEventsSupported = !0))
    : 'undefined' == typeof document && 'undefined' != typeof self
    ? (b.worker = !0)
    : 'undefined' == typeof navigator
    ? ((b.node = !0), (b.svgSupported = !0))
    : ((et = navigator.userAgent),
      (ae = (Wt = b).browser),
      (at = et.match(/Firefox\/([\d.]+)/)),
      (j = et.match(/MSIE\s([\d.]+)/) || et.match(/Trident\/.+?rv:(([\d.]+))/)),
      (tt = et.match(/Edge?\/([\d.]+)/)),
      (et = /micromessenger/i.test(et)),
      at && ((ae.firefox = !0), (ae.version = at[1])),
      j && ((ae.ie = !0), (ae.version = j[1])),
      tt &&
        ((ae.edge = !0),
        (ae.version = tt[1]),
        (ae.newEdge = 18 < +tt[1].split('.')[0])),
      et && (ae.weChat = !0),
      (Wt.svgSupported = 'undefined' != typeof SVGRect),
      (Wt.touchEventsSupported =
        'ontouchstart' in window && !ae.ie && !ae.edge),
      (Wt.pointerEventsSupported =
        'onpointerdown' in window && (ae.edge || (ae.ie && 11 <= +ae.version))),
      (Wt.domSupported = 'undefined' != typeof document),
      (at = document.documentElement.style),
      (Wt.transform3dSupported =
        ((ae.ie && 'transition' in at) ||
          ae.edge ||
          ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()) ||
          'MozPerspective' in at) &&
        !('OTransition' in at)),
      (Wt.transformSupported =
        Wt.transform3dSupported || (ae.ie && 9 <= +ae.version)))
  var x = 12,
    w = 'sans-serif',
    Z = x + 'px ' + w
  var M,
    T,
    C = (function (t) {
      var e = {}
      if ('undefined' != typeof JSON)
        for (var n = 0; n < t.length; n++) {
          var i = String.fromCharCode(n + 32),
            r = (t.charCodeAt(n) - 20) / 100
          e[i] = r
        }
      return e
    })(
      "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N"
    ),
    q = {
      createCanvas: function () {
        return (
          'undefined' != typeof document && document.createElement('canvas')
        )
      },
      measureText: function (t, e) {
        if ((M || ((n = q.createCanvas()), (M = n && n.getContext('2d'))), M))
          return T !== e && (T = M.font = e || Z), M.measureText(t)
        t = t || ''
        var n = /(\d+)px/.exec((e = e || Z)),
          i = (n && +n[1]) || x,
          r = 0
        if (0 <= e.indexOf('mono')) r = i * t.length
        else
          for (var o = 0; o < t.length; o++) {
            var a = C[t[o]]
            r += null == a ? i : a * i
          }
        return { width: r }
      },
      loadImage: function (t, e, n) {
        var i = new Image()
        return (i.onload = e), (i.onerror = n), (i.src = t), i
      }
    }
  function k (t) {
    for (var e in q) t[e] && (q[e] = t[e])
  }
  var D = ht(
      [
        'Function',
        'RegExp',
        'Date',
        'Error',
        'CanvasGradient',
        'CanvasPattern',
        'Image',
        'Canvas'
      ],
      function (t, e) {
        return (t['[object ' + e + ']'] = !0), t
      },
      {}
    ),
    A = ht(
      [
        'Int8',
        'Uint8',
        'Uint8Clamped',
        'Int16',
        'Uint16',
        'Int32',
        'Uint32',
        'Float32',
        'Float64'
      ],
      function (t, e) {
        return (t['[object ' + e + 'Array]'] = !0), t
      },
      {}
    ),
    P = Object.prototype.toString,
    j = Array.prototype,
    K = j.forEach,
    $ = j.filter,
    Q = j.slice,
    J = j.map,
    tt = function () {}.constructor,
    et = tt ? tt.prototype : null,
    nt = '__proto__',
    it = 2311
  function rt () {
    return it++
  }
  function ot () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
    'undefined' != typeof console && console.error.apply(console, t)
  }
  function _ (t) {
    if (null == t || 'object' != typeof t) return t
    var e = t,
      n = P.call(t)
    if ('[object Array]' === n) {
      if (!At(t))
        for (var e = [], i = 0, r = t.length; i < r; i++) e[i] = _(t[i])
    } else if (A[n]) {
      if (!At(t)) {
        var o = t.constructor
        if (o.from) e = o.from(t)
        else
          for (e = new o(t.length), i = 0, r = t.length; i < r; i++) e[i] = t[i]
      }
    } else if (!D[n] && !At(t) && !mt(t))
      for (var a in ((e = {}), t))
        t.hasOwnProperty(a) && a !== nt && (e[a] = _(t[a]))
    return e
  }
  function d (t, e, n) {
    if (!L(e) || !L(t)) return n ? _(e) : t
    for (var i in e) {
      var r, o
      e.hasOwnProperty(i) &&
        i !== nt &&
        ((r = t[i]),
        !L((o = e[i])) ||
        !L(r) ||
        V(o) ||
        V(r) ||
        mt(o) ||
        mt(r) ||
        gt(o) ||
        gt(r) ||
        At(o) ||
        At(r)
          ? (!n && i in t) || (t[i] = _(e[i]))
          : d(r, o, n))
    }
    return t
  }
  function O (t, e) {
    if (Object.assign) Object.assign(t, e)
    else for (var n in e) e.hasOwnProperty(n) && n !== nt && (t[n] = e[n])
    return t
  }
  function E (t, e, n) {
    for (var i = R(e), r = 0; r < i.length; r++) {
      var o = i[r]
      ;(n ? null != e[o] : null == t[o]) && (t[o] = e[o])
    }
    return t
  }
  var at = q.createCanvas
  function I (t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e)
      for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
    }
    return -1
  }
  function st (t, e) {
    var n,
      i = t.prototype
    function r () {}
    for (n in ((r.prototype = e.prototype), (t.prototype = new r()), i))
      i.hasOwnProperty(n) && (t.prototype[n] = i[n])
    ;(t.prototype.constructor = t).superClass = e
  }
  function lt (t, e, n) {
    if (
      ((t = 'prototype' in t ? t.prototype : t),
      (e = 'prototype' in e ? e.prototype : e),
      Object.getOwnPropertyNames)
    )
      for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
        var o = i[r]
        'constructor' !== o &&
          (n ? null != e[o] : null == t[o]) &&
          (t[o] = e[o])
      }
    else E(t, e, n)
  }
  function ut (t) {
    return !!t && 'string' != typeof t && 'number' == typeof t.length
  }
  function B (t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === K) t.forEach(e, n)
      else if (t.length === +t.length)
        for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t)
      else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
  }
  function F (t, e, n) {
    if (!t) return []
    if (!e) return Mt(t)
    if (t.map && t.map === J) return t.map(e, n)
    for (var i = [], r = 0, o = t.length; r < o; r++)
      i.push(e.call(n, t[r], r, t))
    return i
  }
  function ht (t, e, n, i) {
    if (t && e) {
      for (var r = 0, o = t.length; r < o; r++) n = e.call(i, n, t[r], r, t)
      return n
    }
  }
  function ct (t, e, n) {
    if (!t) return []
    if (!e) return Mt(t)
    if (t.filter && t.filter === $) return t.filter(e, n)
    for (var i = [], r = 0, o = t.length; r < o; r++)
      e.call(n, t[r], r, t) && i.push(t[r])
    return i
  }
  function R (t) {
    if (!t) return []
    if (Object.keys) return Object.keys(t)
    var e,
      n = []
    for (e in t) t.hasOwnProperty(e) && n.push(e)
    return n
  }
  var pt =
    et && S(et.bind)
      ? et.call.bind(et.bind)
      : function (t, e) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i]
          return function () {
            return t.apply(e, n.concat(Q.call(arguments)))
          }
        }
  function dt (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
    return function () {
      return t.apply(this, e.concat(Q.call(arguments)))
    }
  }
  function V (t) {
    return Array.isArray ? Array.isArray(t) : '[object Array]' === P.call(t)
  }
  function S (t) {
    return 'function' == typeof t
  }
  function H (t) {
    return 'string' == typeof t
  }
  function ft (t) {
    return '[object String]' === P.call(t)
  }
  function W (t) {
    return 'number' == typeof t
  }
  function L (t) {
    var e = typeof t
    return 'function' == e || (!!t && 'object' == e)
  }
  function gt (t) {
    return !!D[P.call(t)]
  }
  function yt (t) {
    return !!A[P.call(t)]
  }
  function mt (t) {
    return (
      'object' == typeof t &&
      'number' == typeof t.nodeType &&
      'object' == typeof t.ownerDocument
    )
  }
  function vt (t) {
    return null != t.colorStops
  }
  function _t (t) {
    return null != t.image
  }
  function xt (t) {
    return '[object RegExp]' === P.call(t)
  }
  function wt (t) {
    return t != t
  }
  function bt () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
    for (var n = 0, i = t.length; n < i; n++) if (null != t[n]) return t[n]
  }
  function N (t, e) {
    return null != t ? t : e
  }
  function St (t, e, n) {
    return null != t ? t : null != e ? e : n
  }
  function Mt (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
    return Q.apply(t, e)
  }
  function Tt (t) {
    var e
    return 'number' == typeof t
      ? [t, t, t, t]
      : 2 === (e = t.length)
      ? [t[0], t[1], t[0], t[1]]
      : 3 === e
      ? [t[0], t[1], t[2], t[1]]
      : t
  }
  function Ct (t, e) {
    if (!t) throw new Error(e)
  }
  function It (t) {
    return null == t
      ? null
      : 'function' == typeof t.trim
      ? t.trim()
      : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  }
  var kt = '__ec_primitive__'
  function Dt (t) {
    t[kt] = !0
  }
  function At (t) {
    return t[kt]
  }
  ;(Ot.prototype.delete = function (t) {
    var e = this.has(t)
    return e && delete this.data[t], e
  }),
    (Ot.prototype.has = function (t) {
      return this.data.hasOwnProperty(t)
    }),
    (Ot.prototype.get = function (t) {
      return this.data[t]
    }),
    (Ot.prototype.set = function (t, e) {
      return (this.data[t] = e), this
    }),
    (Ot.prototype.keys = function () {
      return R(this.data)
    }),
    (Ot.prototype.forEach = function (t) {
      var e,
        n = this.data
      for (e in n) n.hasOwnProperty(e) && t(n[e], e)
    })
  var Pt = Ot,
    Lt = 'function' == typeof Map
  function Ot () {
    this.data = {}
  }
  ;(Nt.prototype.hasKey = function (t) {
    return this.data.has(t)
  }),
    (Nt.prototype.get = function (t) {
      return this.data.get(t)
    }),
    (Nt.prototype.set = function (t, e) {
      return this.data.set(t, e), e
    }),
    (Nt.prototype.each = function (n, i) {
      this.data.forEach(function (t, e) {
        n.call(i, t, e)
      })
    }),
    (Nt.prototype.keys = function () {
      var t = this.data.keys()
      return Lt ? Array.from(t) : t
    }),
    (Nt.prototype.removeKey = function (t) {
      this.data.delete(t)
    })
  var Rt = Nt
  function Nt (t) {
    var n = V(t),
      i = ((this.data = new (Lt ? Map : Pt)()), this)
    function e (t, e) {
      n ? i.set(t, e) : i.set(e, t)
    }
    t instanceof Nt ? t.each(e) : t && B(t, e)
  }
  function z (t) {
    return new Rt(t)
  }
  function Bt (t, e) {
    for (
      var n = new t.constructor(t.length + e.length), i = 0;
      i < t.length;
      i++
    )
      n[i] = t[i]
    for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i]
    return n
  }
  function zt (t, e) {
    var n,
      t = Object.create
        ? Object.create(t)
        : (((n = function () {}).prototype = t), new n())
    return e && O(t, e), t
  }
  function Et (t) {
    t = t.style
    ;(t.webkitUserSelect = 'none'),
      (t.userSelect = 'none'),
      (t.webkitTapHighlightColor = 'rgba(0,0,0,0)'),
      (t['-webkit-touch-callout'] = 'none')
  }
  function Ft (t, e) {
    return t.hasOwnProperty(e)
  }
  function Vt () {}
  var Ht = 180 / Math.PI,
    Wt = Object.freeze({
      __proto__: null,
      HashMap: Rt,
      RADIAN_TO_DEGREE: Ht,
      assert: Ct,
      bind: pt,
      clone: _,
      concatArray: Bt,
      createCanvas: at,
      createHashMap: z,
      createObject: zt,
      curry: dt,
      defaults: E,
      disableUserSelect: Et,
      each: B,
      eqNaN: wt,
      extend: O,
      filter: ct,
      find: function (t, e, n) {
        if (t && e)
          for (var i = 0, r = t.length; i < r; i++)
            if (e.call(n, t[i], i, t)) return t[i]
      },
      guid: rt,
      hasOwn: Ft,
      indexOf: I,
      inherits: st,
      isArray: V,
      isArrayLike: ut,
      isBuiltInObject: gt,
      isDom: mt,
      isFunction: S,
      isGradientObject: vt,
      isImagePatternObject: _t,
      isNumber: W,
      isObject: L,
      isPrimitive: At,
      isRegExp: xt,
      isString: H,
      isStringSafe: ft,
      isTypedArray: yt,
      keys: R,
      logError: ot,
      map: F,
      merge: d,
      mergeAll: function (t, e) {
        for (var n = t[0], i = 1, r = t.length; i < r; i++) n = d(n, t[i], e)
        return n
      },
      mixin: lt,
      noop: Vt,
      normalizeCssArray: Tt,
      reduce: ht,
      retrieve: bt,
      retrieve2: N,
      retrieve3: St,
      setAsPrimitive: Dt,
      slice: Mt,
      trim: It
    })
  function Gt (t, e) {
    return [(t = null == t ? 0 : t), (e = null == e ? 0 : e)]
  }
  function Ut (t) {
    return [t[0], t[1]]
  }
  function Xt (t, e, n) {
    return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t
  }
  function Yt (t, e, n) {
    return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t
  }
  function qt (t) {
    return Math.sqrt(jt(t))
  }
  function jt (t) {
    return t[0] * t[0] + t[1] * t[1]
  }
  function Zt (t, e, n) {
    return (t[0] = e[0] * n), (t[1] = e[1] * n), t
  }
  function Kt (t, e) {
    var n = qt(e)
    return (
      0 === n
        ? ((t[0] = 0), (t[1] = 0))
        : ((t[0] = e[0] / n), (t[1] = e[1] / n)),
      t
    )
  }
  function $t (t, e) {
    return Math.sqrt(
      (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    )
  }
  var Qt = $t
  function Jt (t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
  }
  var te = Jt
  function ee (t, e, n, i) {
    return (
      (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t
    )
  }
  function ne (t, e, n) {
    var i = e[0],
      e = e[1]
    return (
      (t[0] = n[0] * i + n[2] * e + n[4]),
      (t[1] = n[1] * i + n[3] * e + n[5]),
      t
    )
  }
  function ie (t, e, n) {
    return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t
  }
  function re (t, e, n) {
    return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t
  }
  function oe (t, e) {
    ;(this.target = t), (this.topTarget = e && e.topTarget)
  }
  var ae = Object.freeze({
      __proto__: null,
      add: Xt,
      applyTransform: ne,
      clone: Ut,
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t
      },
      create: Gt,
      dist: Qt,
      distSquare: te,
      distance: $t,
      distanceSquare: Jt,
      div: function (t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t
      },
      dot: function (t, e) {
        return t[0] * e[0] + t[1] * e[1]
      },
      len: qt,
      lenSquare: jt,
      length: qt,
      lengthSquare: jt,
      lerp: ee,
      max: re,
      min: ie,
      mul: function (t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t
      },
      negate: function (t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t
      },
      normalize: Kt,
      scale: Zt,
      scaleAndAdd: function (t, e, n, i) {
        return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t
      },
      set: function (t, e, n) {
        return (t[0] = e), (t[1] = n), t
      },
      sub: Yt
    }),
    se =
      ((le.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable; )
          e = e.parent || e.__hostTarget
        e &&
          (((this._draggingTarget = e).dragging = !0),
          (this._x = t.offsetX),
          (this._y = t.offsetY),
          this.handler.dispatchToElement(new oe(e, t), 'dragstart', t.event))
      }),
      (le.prototype._drag = function (t) {
        var e,
          n,
          i,
          r,
          o = this._draggingTarget
        o &&
          ((e = t.offsetX),
          (n = t.offsetY),
          (i = e - this._x),
          (r = n - this._y),
          (this._x = e),
          (this._y = n),
          o.drift(i, r, t),
          this.handler.dispatchToElement(new oe(o, t), 'drag', t.event),
          (i = this.handler.findHover(e, n, o).target),
          (r = this._dropTarget),
          o !== (this._dropTarget = i)) &&
          (r &&
            i !== r &&
            this.handler.dispatchToElement(new oe(r, t), 'dragleave', t.event),
          i) &&
          i !== r &&
          this.handler.dispatchToElement(new oe(i, t), 'dragenter', t.event)
      }),
      (le.prototype._dragEnd = function (t) {
        var e = this._draggingTarget
        e && (e.dragging = !1),
          this.handler.dispatchToElement(new oe(e, t), 'dragend', t.event),
          this._dropTarget &&
            this.handler.dispatchToElement(
              new oe(this._dropTarget, t),
              'drop',
              t.event
            ),
          (this._draggingTarget = null),
          (this._dropTarget = null)
      }),
      le)
  function le (t) {
    ;(this.handler = t).on('mousedown', this._dragStart, this),
      t.on('mousemove', this._drag, this),
      t.on('mouseup', this._dragEnd, this)
  }
  ;(he.prototype.on = function (t, e, n, i) {
    this._$handlers || (this._$handlers = {})
    var r = this._$handlers
    if (('function' == typeof e && ((i = n), (n = e), (e = null)), n && t)) {
      var o = this._$eventProcessor
      null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
        r[t] || (r[t] = [])
      for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this
      ;(o = {
        h: n,
        query: e,
        ctx: i || this,
        callAtLast: n.zrEventfulCallAtLast
      }),
        (e = r[t].length - 1),
        (i = r[t][e])
      i && i.callAtLast ? r[t].splice(e, 0, o) : r[t].push(o)
    }
    return this
  }),
    (he.prototype.isSilent = function (t) {
      var e = this._$handlers
      return !e || !e[t] || !e[t].length
    }),
    (he.prototype.off = function (t, e) {
      var n = this._$handlers
      if (n)
        if (t)
          if (e) {
            if (n[t]) {
              for (var i = [], r = 0, o = n[t].length; r < o; r++)
                n[t][r].h !== e && i.push(n[t][r])
              n[t] = i
            }
            n[t] && 0 === n[t].length && delete n[t]
          } else delete n[t]
        else this._$handlers = {}
      return this
    }),
    (he.prototype.trigger = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
      if (this._$handlers) {
        var i = this._$handlers[t],
          r = this._$eventProcessor
        if (i)
          for (var o = e.length, a = i.length, s = 0; s < a; s++) {
            var l = i[s]
            if (!r || !r.filter || null == l.query || r.filter(t, l.query))
              switch (o) {
                case 0:
                  l.h.call(l.ctx)
                  break
                case 1:
                  l.h.call(l.ctx, e[0])
                  break
                case 2:
                  l.h.call(l.ctx, e[0], e[1])
                  break
                default:
                  l.h.apply(l.ctx, e)
              }
          }
        r && r.afterTrigger && r.afterTrigger(t)
      }
      return this
    }),
    (he.prototype.triggerWithContext = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
      if (this._$handlers) {
        var i = this._$handlers[t],
          r = this._$eventProcessor
        if (i)
          for (
            var o = e.length, a = e[o - 1], s = i.length, l = 0;
            l < s;
            l++
          ) {
            var u = i[l]
            if (!r || !r.filter || null == u.query || r.filter(t, u.query))
              switch (o) {
                case 0:
                  u.h.call(a)
                  break
                case 1:
                  u.h.call(a, e[0])
                  break
                case 2:
                  u.h.call(a, e[0], e[1])
                  break
                default:
                  u.h.apply(a, e.slice(1, o - 1))
              }
          }
        r && r.afterTrigger && r.afterTrigger(t)
      }
      return this
    })
  var ue = he
  function he (t) {
    t && (this._$eventProcessor = t)
  }
  var ce = Math.log(2)
  function pe (t, e, n, i, r, o) {
    var a,
      s = i + '-' + r,
      l = t.length
    if (o.hasOwnProperty(s)) return o[s]
    if (1 === e)
      return (a = Math.round(Math.log(((1 << l) - 1) & ~r) / ce)), t[n][a]
    for (var u = i | (1 << n), h = n + 1; i & (1 << h); ) h++
    for (var c = 0, p = 0, d = 0; p < l; p++) {
      var f = 1 << p
      f & r ||
        ((c += (d % 2 ? -1 : 1) * t[n][p] * pe(t, e - 1, h, u, r | f, o)), d++)
    }
    return (o[s] = c)
  }
  function de (t, e) {
    var n = [
        [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
        [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
        [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
        [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
        [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
        [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
        [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
        [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]
      ],
      i = {},
      r = pe(n, 8, 0, 0, 0, i)
    if (0 !== r) {
      for (var o = [], a = 0; a < 8; a++)
        for (var s = 0; s < 8; s++)
          null == o[s] && (o[s] = 0),
            (o[s] +=
              ((((a + s) % 2 ? -1 : 1) *
                pe(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i)) /
                r) *
              e[a])
      return function (t, e, n) {
        var i = e * o[6] + n * o[7] + 1
        ;(t[0] = (e * o[0] + n * o[1] + o[2]) / i),
          (t[1] = (e * o[3] + n * o[4] + o[5]) / i)
      }
    }
  }
  var fe = '___zrEVENTSAVED',
    ge = []
  function ye (t, e, n, i, r) {
    if (e.getBoundingClientRect && b.domSupported && !me(e)) {
      var o = e[fe] || (e[fe] = {}),
        e = (function (t, e, n) {
          for (
            var i = n ? 'invTrans' : 'trans',
              r = e[i],
              o = e.srcCoords,
              a = [],
              s = [],
              l = !0,
              u = 0;
            u < 4;
            u++
          ) {
            var h = t[u].getBoundingClientRect(),
              c = 2 * u,
              p = h.left,
              h = h.top
            a.push(p, h),
              (l = l && o && p === o[c] && h === o[1 + c]),
              s.push(t[u].offsetLeft, t[u].offsetTop)
          }
          return l && r
            ? r
            : ((e.srcCoords = a), (e[i] = n ? de(s, a) : de(a, s)))
        })(
          (function (t, e) {
            var n = e.markers
            if (!n) {
              n = e.markers = []
              for (
                var i = ['left', 'right'], r = ['top', 'bottom'], o = 0;
                o < 4;
                o++
              ) {
                var a = document.createElement('div'),
                  s = o % 2,
                  l = (o >> 1) % 2
                ;(a.style.cssText = [
                  'position: absolute',
                  'visibility: hidden',
                  'padding: 0',
                  'margin: 0',
                  'border-width: 0',
                  'user-select: none',
                  'width:0',
                  'height:0',
                  i[s] + ':0',
                  r[l] + ':0',
                  i[1 - s] + ':auto',
                  r[1 - l] + ':auto',
                  ''
                ].join('!important;')),
                  t.appendChild(a),
                  n.push(a)
              }
            }
            return n
          })(e, o),
          o,
          r
        )
      if (e) return e(t, n, i), !0
    }
    return !1
  }
  function me (t) {
    return 'CANVAS' === t.nodeName.toUpperCase()
  }
  var ve = /([&<>"'])/g,
    _e = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  function xe (t) {
    return null == t
      ? ''
      : (t + '').replace(ve, function (t, e) {
          return _e[e]
        })
  }
  var we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    be = [],
    Se = b.browser.firefox && +b.browser.version.split('.')[0] < 39
  function Me (t, e, n, i) {
    return (
      (n = n || {}),
      i
        ? Te(t, e, n)
        : Se && null != e.layerX && e.layerX !== e.offsetX
        ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
        : null != e.offsetX
        ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
        : Te(t, e, n),
      n
    )
  }
  function Te (t, e, n) {
    if (b.domSupported && t.getBoundingClientRect) {
      var i,
        r = e.clientX,
        e = e.clientY
      if (me(t))
        return (
          (i = t.getBoundingClientRect()),
          (n.zrX = r - i.left),
          (n.zrY = e - i.top)
        )
      if (ye(be, t, r, e)) return (n.zrX = be[0]), (n.zrY = be[1])
    }
    n.zrX = n.zrY = 0
  }
  function Ce (t) {
    return t || window.event
  }
  function Ie (t, e, n) {
    var i
    return (
      null == (e = Ce(e)).zrX &&
        ((i = e.type) && 0 <= i.indexOf('touch')
          ? (i = ('touchend' !== i ? e.targetTouches : e.changedTouches)[0]) &&
            Me(t, i, e, n)
          : (Me(t, e, e, n),
            (t =
              (t = (i = e).wheelDelta) ||
              ((n = i.deltaX),
              (i = i.deltaY),
              null == n || null == i
                ? t
                : 3 *
                  (0 !== i ? Math.abs(i) : Math.abs(n)) *
                  (0 < i || (!(i < 0) && 0 < n) ? -1 : 1))),
            (e.zrDelta = t ? t / 120 : -(e.detail || 0) / 3)),
        (i = e.button),
        null == e.which && void 0 !== i && we.test(e.type)) &&
        (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
      e
    )
  }
  var ke = function (t) {
      t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0)
    },
    De =
      ((Ae.prototype.recognize = function (t, e, n) {
        return this._doTrack(t, e, n), this._recognize(t)
      }),
      (Ae.prototype.clear = function () {
        return (this._track.length = 0), this
      }),
      (Ae.prototype._doTrack = function (t, e, n) {
        var i = t.touches
        if (i) {
          for (
            var r = { points: [], touches: [], target: e, event: t },
              o = 0,
              a = i.length;
            o < a;
            o++
          ) {
            var s = i[o],
              l = Me(n, s, {})
            r.points.push([l.zrX, l.zrY]), r.touches.push(s)
          }
          this._track.push(r)
        }
      }),
      (Ae.prototype._recognize = function (t) {
        for (var e in Le)
          if (Le.hasOwnProperty(e)) {
            e = Le[e](this._track, t)
            if (e) return e
          }
      }),
      Ae)
  function Ae () {
    this._track = []
  }
  function Pe (t) {
    var e = t[1][0] - t[0][0],
      t = t[1][1] - t[0][1]
    return Math.sqrt(e * e + t * t)
  }
  var Le = {
    pinch: function (t, e) {
      var n = t.length
      if (n) {
        var i = (t[n - 1] || {}).points,
          n = (t[n - 2] || {}).points || i
        if (n && 1 < n.length && i && 1 < i.length)
          return (
            (n = Pe(i) / Pe(n)),
            isFinite(n) || (n = 1),
            (e.pinchScale = n),
            (n = [(i[0][0] + i[1][0]) / 2, (i[0][1] + i[1][1]) / 2]),
            (e.pinchX = n[0]),
            (e.pinchY = n[1]),
            { type: 'pinch', target: t[0].target, event: e }
          )
      }
    }
  }
  function Oe () {
    return [1, 0, 0, 1, 0, 0]
  }
  function Re (t) {
    return (
      (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t
    )
  }
  function Ne (t, e) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4]),
      (t[5] = e[5]),
      t
    )
  }
  function Be (t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      o = e[0] * n[2] + e[2] * n[3],
      a = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      n = e[1] * n[4] + e[3] * n[5] + e[5]
    return (
      (t[0] = i), (t[1] = r), (t[2] = o), (t[3] = a), (t[4] = s), (t[5] = n), t
    )
  }
  function ze (t, e, n) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4] + n[0]),
      (t[5] = e[5] + n[1]),
      t
    )
  }
  function Ee (t, e, n) {
    var i = e[0],
      r = e[2],
      o = e[4],
      a = e[1],
      s = e[3],
      e = e[5],
      l = Math.sin(n),
      n = Math.cos(n)
    return (
      (t[0] = i * n + a * l),
      (t[1] = -i * l + a * n),
      (t[2] = r * n + s * l),
      (t[3] = -r * l + n * s),
      (t[4] = n * o + l * e),
      (t[5] = n * e - l * o),
      t
    )
  }
  function Fe (t, e, n) {
    var i = n[0],
      n = n[1]
    return (
      (t[0] = e[0] * i),
      (t[1] = e[1] * n),
      (t[2] = e[2] * i),
      (t[3] = e[3] * n),
      (t[4] = e[4] * i),
      (t[5] = e[5] * n),
      t
    )
  }
  function Ve (t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      o = e[1],
      a = e[3],
      e = e[5],
      s = n * a - o * i
    return s
      ? ((t[0] = a * (s = 1 / s)),
        (t[1] = -o * s),
        (t[2] = -i * s),
        (t[3] = n * s),
        (t[4] = (i * e - a * r) * s),
        (t[5] = (o * r - n * e) * s),
        t)
      : null
  }
  var He = Object.freeze({
      __proto__: null,
      clone: function (t) {
        var e = Oe()
        return Ne(e, t), e
      },
      copy: Ne,
      create: Oe,
      identity: Re,
      invert: Ve,
      mul: Be,
      rotate: Ee,
      scale: Fe,
      translate: ze
    }),
    G =
      ((e.prototype.copy = function (t) {
        return (this.x = t.x), (this.y = t.y), this
      }),
      (e.prototype.clone = function () {
        return new e(this.x, this.y)
      }),
      (e.prototype.set = function (t, e) {
        return (this.x = t), (this.y = e), this
      }),
      (e.prototype.equal = function (t) {
        return t.x === this.x && t.y === this.y
      }),
      (e.prototype.add = function (t) {
        return (this.x += t.x), (this.y += t.y), this
      }),
      (e.prototype.scale = function (t) {
        ;(this.x *= t), (this.y *= t)
      }),
      (e.prototype.scaleAndAdd = function (t, e) {
        ;(this.x += t.x * e), (this.y += t.y * e)
      }),
      (e.prototype.sub = function (t) {
        return (this.x -= t.x), (this.y -= t.y), this
      }),
      (e.prototype.dot = function (t) {
        return this.x * t.x + this.y * t.y
      }),
      (e.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }),
      (e.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y
      }),
      (e.prototype.normalize = function () {
        var t = this.len()
        return (this.x /= t), (this.y /= t), this
      }),
      (e.prototype.distance = function (t) {
        var e = this.x - t.x,
          t = this.y - t.y
        return Math.sqrt(e * e + t * t)
      }),
      (e.prototype.distanceSquare = function (t) {
        var e = this.x - t.x,
          t = this.y - t.y
        return e * e + t * t
      }),
      (e.prototype.negate = function () {
        return (this.x = -this.x), (this.y = -this.y), this
      }),
      (e.prototype.transform = function (t) {
        var e, n
        if (t)
          return (
            (e = this.x),
            (n = this.y),
            (this.x = t[0] * e + t[2] * n + t[4]),
            (this.y = t[1] * e + t[3] * n + t[5]),
            this
          )
      }),
      (e.prototype.toArray = function (t) {
        return (t[0] = this.x), (t[1] = this.y), t
      }),
      (e.prototype.fromArray = function (t) {
        ;(this.x = t[0]), (this.y = t[1])
      }),
      (e.set = function (t, e, n) {
        ;(t.x = e), (t.y = n)
      }),
      (e.copy = function (t, e) {
        ;(t.x = e.x), (t.y = e.y)
      }),
      (e.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
      }),
      (e.lenSquare = function (t) {
        return t.x * t.x + t.y * t.y
      }),
      (e.dot = function (t, e) {
        return t.x * e.x + t.y * e.y
      }),
      (e.add = function (t, e, n) {
        ;(t.x = e.x + n.x), (t.y = e.y + n.y)
      }),
      (e.sub = function (t, e, n) {
        ;(t.x = e.x - n.x), (t.y = e.y - n.y)
      }),
      (e.scale = function (t, e, n) {
        ;(t.x = e.x * n), (t.y = e.y * n)
      }),
      (e.scaleAndAdd = function (t, e, n, i) {
        ;(t.x = e.x + n.x * i), (t.y = e.y + n.y * i)
      }),
      (e.lerp = function (t, e, n, i) {
        var r = 1 - i
        ;(t.x = r * e.x + i * n.x), (t.y = r * e.y + i * n.y)
      }),
      e)
  function e (t, e) {
    ;(this.x = t || 0), (this.y = e || 0)
  }
  var We = Math.min,
    Ge = Math.max,
    Ue = new G(),
    Xe = new G(),
    Ye = new G(),
    qe = new G(),
    je = new G(),
    Ze = new G(),
    U =
      ((Ke.prototype.union = function (t) {
        var e = We(t.x, this.x),
          n = We(t.y, this.y)
        isFinite(this.x) && isFinite(this.width)
          ? (this.width = Ge(t.x + t.width, this.x + this.width) - e)
          : (this.width = t.width),
          isFinite(this.y) && isFinite(this.height)
            ? (this.height = Ge(t.y + t.height, this.y + this.height) - n)
            : (this.height = t.height),
          (this.x = e),
          (this.y = n)
      }),
      (Ke.prototype.applyTransform = function (t) {
        Ke.applyTransform(this, this, t)
      }),
      (Ke.prototype.calculateTransform = function (t) {
        var e = t.width / this.width,
          n = t.height / this.height,
          i = Oe()
        return (
          ze(i, i, [-this.x, -this.y]),
          Fe(i, i, [e, n]),
          ze(i, i, [t.x, t.y]),
          i
        )
      }),
      (Ke.prototype.intersect = function (t, e) {
        if (!t) return !1
        t instanceof Ke || (t = Ke.create(t))
        var n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h = this,
          c = h.x,
          p = h.x + h.width,
          d = h.y,
          h = h.y + h.height,
          f = t.x,
          g = t.x + t.width,
          y = t.y,
          t = t.y + t.height,
          m = !(p < f || g < c || h < y || t < d)
        return (
          e &&
            ((n = 1 / 0),
            (i = 0),
            (r = Math.abs(p - f)),
            (o = Math.abs(g - c)),
            (a = Math.abs(h - y)),
            (s = Math.abs(t - d)),
            (l = Math.min(r, o)),
            (u = Math.min(a, s)),
            p < f || g < c
              ? i < l && ((i = l), r < o ? G.set(Ze, -r, 0) : G.set(Ze, o, 0))
              : l < n && ((n = l), r < o ? G.set(je, r, 0) : G.set(je, -o, 0)),
            h < y || t < d
              ? i < u && ((i = u), a < s ? G.set(Ze, 0, -a) : G.set(Ze, 0, s))
              : l < n && ((n = l), a < s ? G.set(je, 0, a) : G.set(je, 0, -s))),
          e && G.copy(e, m ? je : Ze),
          m
        )
      }),
      (Ke.prototype.contain = function (t, e) {
        var n = this
        return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
      }),
      (Ke.prototype.clone = function () {
        return new Ke(this.x, this.y, this.width, this.height)
      }),
      (Ke.prototype.copy = function (t) {
        Ke.copy(this, t)
      }),
      (Ke.prototype.plain = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height }
      }),
      (Ke.prototype.isFinite = function () {
        return (
          isFinite(this.x) &&
          isFinite(this.y) &&
          isFinite(this.width) &&
          isFinite(this.height)
        )
      }),
      (Ke.prototype.isZero = function () {
        return 0 === this.width || 0 === this.height
      }),
      (Ke.create = function (t) {
        return new Ke(t.x, t.y, t.width, t.height)
      }),
      (Ke.copy = function (t, e) {
        ;(t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height)
      }),
      (Ke.applyTransform = function (t, e, n) {
        var i, r, o, a
        n
          ? n[1] < 1e-5 && -1e-5 < n[1] && n[2] < 1e-5 && -1e-5 < n[2]
            ? ((i = n[0]),
              (r = n[3]),
              (o = n[4]),
              (a = n[5]),
              (t.x = e.x * i + o),
              (t.y = e.y * r + a),
              (t.width = e.width * i),
              (t.height = e.height * r),
              t.width < 0 && ((t.x += t.width), (t.width = -t.width)),
              t.height < 0 && ((t.y += t.height), (t.height = -t.height)))
            : ((Ue.x = Ye.x = e.x),
              (Ue.y = qe.y = e.y),
              (Xe.x = qe.x = e.x + e.width),
              (Xe.y = Ye.y = e.y + e.height),
              Ue.transform(n),
              qe.transform(n),
              Xe.transform(n),
              Ye.transform(n),
              (t.x = We(Ue.x, Xe.x, Ye.x, qe.x)),
              (t.y = We(Ue.y, Xe.y, Ye.y, qe.y)),
              (o = Ge(Ue.x, Xe.x, Ye.x, qe.x)),
              (a = Ge(Ue.y, Xe.y, Ye.y, qe.y)),
              (t.width = o - t.x),
              (t.height = a - t.y))
          : t !== e && Ke.copy(t, e)
      }),
      Ke)
  function Ke (t, e, n, i) {
    n < 0 && ((t += n), (n = -n)),
      i < 0 && ((e += i), (i = -i)),
      (this.x = t),
      (this.y = e),
      (this.width = n),
      (this.height = i)
  }
  var $e = 'silent'
  function Qe () {
    ke(this.event)
  }
  function Je (t, e) {
    ;(this.x = t), (this.y = e)
  }
  u(ln, (en = ue)),
    (ln.prototype.dispose = function () {}),
    (ln.prototype.setCursor = function () {})
  var tn,
    en,
    nn = ln,
    rn = [
      'click',
      'dblclick',
      'mousewheel',
      'mouseout',
      'mouseup',
      'mousedown',
      'mousemove',
      'contextmenu'
    ],
    on = new U(0, 0, 0, 0),
    an =
      (u(sn, (tn = ue)),
      (sn.prototype.setHandlerProxy = function (e) {
        this.proxy && this.proxy.dispose(),
          e &&
            (B(
              rn,
              function (t) {
                e.on && e.on(t, this[t], this)
              },
              this
            ),
            (e.handler = this)),
          (this.proxy = e)
      }),
      (sn.prototype.mousemove = function (t) {
        var e = t.zrX,
          n = t.zrY,
          i = hn(this, e, n),
          r = this._hovered,
          o = r.target,
          i =
            (o && !o.__zr && (o = (r = this.findHover(r.x, r.y)).target),
            (this._hovered = i ? new Je(e, n) : this.findHover(e, n))),
          e = i.target,
          n = this.proxy
        n.setCursor && n.setCursor(e ? e.cursor : 'default'),
          o && e !== o && this.dispatchToElement(r, 'mouseout', t),
          this.dispatchToElement(i, 'mousemove', t),
          e && e !== o && this.dispatchToElement(i, 'mouseover', t)
      }),
      (sn.prototype.mouseout = function (t) {
        var e = t.zrEventControl
        'only_globalout' !== e &&
          this.dispatchToElement(this._hovered, 'mouseout', t),
          'no_globalout' !== e &&
            this.trigger('globalout', { type: 'globalout', event: t })
      }),
      (sn.prototype.resize = function () {
        this._hovered = new Je(0, 0)
      }),
      (sn.prototype.dispatch = function (t, e) {
        t = this[t]
        t && t.call(this, e)
      }),
      (sn.prototype.dispose = function () {
        this.proxy.dispose(),
          (this.storage = null),
          (this.proxy = null),
          (this.painter = null)
      }),
      (sn.prototype.setCursorStyle = function (t) {
        var e = this.proxy
        e.setCursor && e.setCursor(t)
      }),
      (sn.prototype.dispatchToElement = function (t, e, n) {
        var i = (t = t || {}).target
        if (!i || !i.silent) {
          for (
            var r = 'on' + e,
              o = {
                type: e,
                event: n,
                target: (t = t).target,
                topTarget: t.topTarget,
                cancelBubble: !1,
                offsetX: n.zrX,
                offsetY: n.zrY,
                gestureEvent: n.gestureEvent,
                pinchX: n.pinchX,
                pinchY: n.pinchY,
                pinchScale: n.pinchScale,
                wheelDelta: n.zrDelta,
                zrByTouch: n.zrByTouch,
                which: n.which,
                stop: Qe
              };
            i &&
            (i[r] && (o.cancelBubble = !!i[r].call(i, o)),
            i.trigger(e, o),
            (i = i.__hostTarget || i.parent),
            !o.cancelBubble);

          );
          o.cancelBubble ||
            (this.trigger(e, o),
            this.painter &&
              this.painter.eachOtherLayer &&
              this.painter.eachOtherLayer(function (t) {
                'function' == typeof t[r] && t[r].call(t, o),
                  t.trigger && t.trigger(e, o)
              }))
        }
      }),
      (sn.prototype.findHover = function (t, e, n) {
        var i = this.storage.getDisplayList(),
          r = new Je(t, e)
        if ((un(i, r, t, e, n), this._pointerSize && !r.target)) {
          for (
            var o = [],
              a = this._pointerSize,
              s = a / 2,
              l = new U(t - s, e - s, a, a),
              u = i.length - 1;
            0 <= u;
            u--
          ) {
            var h = i[u]
            h === n ||
              h.ignore ||
              h.ignoreCoarsePointer ||
              (h.parent && h.parent.ignoreCoarsePointer) ||
              (on.copy(h.getBoundingRect()),
              h.transform && on.applyTransform(h.transform),
              on.intersect(l) && o.push(h))
          }
          if (o.length)
            for (var c = Math.PI / 12, p = 2 * Math.PI, d = 0; d < s; d += 4)
              for (var f = 0; f < p; f += c)
                if (
                  (un(o, r, t + d * Math.cos(f), e + d * Math.sin(f), n),
                  r.target)
                )
                  return r
        }
        return r
      }),
      (sn.prototype.processGesture = function (t, e) {
        this._gestureMgr || (this._gestureMgr = new De())
        var n = this._gestureMgr,
          i =
            ('start' === e && n.clear(),
            n.recognize(
              t,
              this.findHover(t.zrX, t.zrY, null).target,
              this.proxy.dom
            ))
        'end' === e && n.clear(),
          i &&
            ((e = i.type),
            (t.gestureEvent = e),
            ((n = new Je()).target = i.target),
            this.dispatchToElement(n, e, i.event))
      }),
      sn)
  function sn (t, e, n, i, r) {
    var o = tn.call(this) || this
    return (
      (o._hovered = new Je(0, 0)),
      (o.storage = t),
      (o.painter = e),
      (o.painterRoot = i),
      (o._pointerSize = r),
      (n = n || new nn()),
      (o.proxy = null),
      o.setHandlerProxy(n),
      (o._draggingMgr = new se(o)),
      o
    )
  }
  function ln () {
    var t = (null !== en && en.apply(this, arguments)) || this
    return (t.handler = null), t
  }
  function un (t, e, n, i, r) {
    for (var o = t.length - 1; 0 <= o; o--) {
      var a = t[o],
        s = void 0
      if (
        a !== r &&
        !a.ignore &&
        (s = (function (t, e, n) {
          if (t[t.rectHover ? 'rectContain' : 'contain'](e, n)) {
            for (var i = t, r = void 0, o = !1; i; ) {
              if (!(o = i.ignoreClip ? !0 : o)) {
                var a = i.getClipPath()
                if (a && !a.contain(e, n)) return !1
                i.silent && (r = !0)
              }
              i = i.__hostTarget || i.parent
            }
            return !r || $e
          }
          return !1
        })(a, n, i)) &&
        (e.topTarget || (e.topTarget = a), s !== $e)
      ) {
        e.target = a
        break
      }
    }
  }
  function hn (t, e, n) {
    t = t.painter
    return e < 0 || e > t.getWidth() || n < 0 || n > t.getHeight()
  }
  B(
    ['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'],
    function (a) {
      an.prototype[a] = function (t) {
        var e,
          n,
          i = t.zrX,
          r = t.zrY,
          o = hn(this, i, r)
        if (
          (('mouseup' === a && o) || (n = (e = this.findHover(i, r)).target),
          'mousedown' === a)
        )
          (this._downEl = n),
            (this._downPoint = [t.zrX, t.zrY]),
            (this._upEl = n)
        else if ('mouseup' === a) this._upEl = n
        else if ('click' === a) {
          if (
            this._downEl !== this._upEl ||
            !this._downPoint ||
            4 < Qt(this._downPoint, [t.zrX, t.zrY])
          )
            return
          this._downPoint = null
        }
        this.dispatchToElement(e, a, t)
      }
    }
  )
  var cn = 32,
    pn = 7
  function dn (t, e, n, i) {
    var r = e + 1
    if (r === n) return 1
    if (i(t[r++], t[e]) < 0) {
      for (; r < n && i(t[r], t[r - 1]) < 0; ) r++
      var o = t,
        a = e,
        s = r
      for (s--; a < s; ) {
        var l = o[a]
        ;(o[a++] = o[s]), (o[s--] = l)
      }
    } else for (; r < n && 0 <= i(t[r], t[r - 1]); ) r++
    return r - e
  }
  function fn (t, e, n, i, r) {
    for (i === e && i++; i < n; i++) {
      for (var o, a = t[i], s = e, l = i; s < l; )
        r(a, t[(o = (s + l) >>> 1)]) < 0 ? (l = o) : (s = 1 + o)
      var u = i - s
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2]
        case 2:
          t[s + 2] = t[s + 1]
        case 1:
          t[s + 1] = t[s]
          break
        default:
          for (; 0 < u; ) (t[s + u] = t[s + u - 1]), u--
      }
      t[s] = a
    }
  }
  function gn (t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1
    if (0 < o(t, e[n + r])) {
      for (s = i - r; l < s && 0 < o(t, e[n + r + l]); )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s)
      s < l && (l = s), (a += r), (l += r)
    } else {
      for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0; )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s)
      ;(i = a), (a = r - (l = s < l ? s : l)), (l = r - i)
    }
    for (a++; a < l; ) {
      var u = a + ((l - a) >>> 1)
      0 < o(t, e[n + u]) ? (a = u + 1) : (l = u)
    }
    return l
  }
  function yn (t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1
    if (o(t, e[n + r]) < 0) {
      for (s = r + 1; l < s && o(t, e[n + r - l]) < 0; )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s)
      var u = a,
        a = r - (l = s < l ? s : l),
        l = r - u
    } else {
      for (s = i - r; l < s && 0 <= o(t, e[n + r + l]); )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s)
      s < l && (l = s), (a += r), (l += r)
    }
    for (a++; a < l; ) {
      var h = a + ((l - a) >>> 1)
      o(t, e[n + h]) < 0 ? (l = h) : (a = h + 1)
    }
    return l
  }
  function mn (t, e, n, i) {
    var f,
      g,
      o,
      a,
      y,
      s,
      m,
      r = (i = i || t.length) - (n = n || 0)
    if (!(r < 2)) {
      var l = 0
      if (r < cn) fn(t, n, i, n + (l = dn(t, n, i, e)), e)
      else {
        ;(g = e),
          (y = pn),
          (s = 0),
          (f = t).length,
          (m = []),
          (o = []),
          (a = [])
        var u,
          h = {
            mergeRuns: function () {
              for (; 1 < s; ) {
                var t = s - 2
                if (
                  (1 <= t && a[t - 1] <= a[t] + a[t + 1]) ||
                  (2 <= t && a[t - 2] <= a[t] + a[t - 1])
                )
                  a[t - 1] < a[t + 1] && t--
                else if (a[t] > a[t + 1]) break
                p(t)
              }
            },
            forceMergeRuns: function () {
              for (; 1 < s; ) {
                var t = s - 2
                0 < t && a[t - 1] < a[t + 1] && t--, p(t)
              }
            },
            pushRun: function (t, e) {
              ;(o[s] = t), (a[s] = e), (s += 1)
            }
          },
          c = (function (t) {
            for (var e = 0; cn <= t; ) (e |= 1 & t), (t >>= 1)
            return t + e
          })(r)
        do {} while (
          ((l = dn(t, n, i, e)) < c &&
            (fn(t, n, n + (u = c < (u = r) ? c : r), n + l, e), (l = u)),
          h.pushRun(n, l),
          h.mergeRuns(),
          (n += l),
          0 !== (r -= l))
        )
        h.forceMergeRuns()
      }
    }
    function p (t) {
      var e = o[t],
        n = a[t],
        i = o[t + 1],
        r = a[t + 1],
        t =
          ((a[t] = n + r),
          t === s - 3 && ((o[t + 1] = o[t + 2]), (a[t + 1] = a[t + 2])),
          s--,
          yn(f[i], f, e, n, 0, g))
      ;(e += t),
        0 != (n -= t) &&
          0 !== (r = gn(f[e + n - 1], f, i, r, r - 1, g)) &&
          (n <= r
            ? function (t, e, n, i) {
                for (var r = 0, r = 0; r < e; r++) m[r] = f[t + r]
                var o = 0,
                  a = n,
                  s = t
                if (((f[s++] = f[a++]), 0 == --i))
                  for (r = 0; r < e; r++) f[s + r] = m[o + r]
                else {
                  if (1 === e) {
                    for (r = 0; r < i; r++) f[s + r] = f[a + r]
                    return (f[s + i] = m[o])
                  }
                  for (var l, u, h, c = y; ; ) {
                    ;(u = l = 0), (h = !1)
                    do {
                      if (g(f[a], m[o]) < 0) {
                        if (((f[s++] = f[a++]), u++, (l = 0) == --i)) {
                          h = !0
                          break
                        }
                      } else if (((f[s++] = m[o++]), l++, (u = 0), 1 == --e)) {
                        h = !0
                        break
                      }
                    } while ((l | u) < c)
                    if (h) break
                    do {
                      if (0 !== (l = yn(f[a], m, o, e, 0, g))) {
                        for (r = 0; r < l; r++) f[s + r] = m[o + r]
                        if (((s += l), (o += l), (e -= l) <= 1)) {
                          h = !0
                          break
                        }
                      }
                      if (((f[s++] = f[a++]), 0 == --i)) {
                        h = !0
                        break
                      }
                      if (0 !== (u = gn(m[o], f, a, i, 0, g))) {
                        for (r = 0; r < u; r++) f[s + r] = f[a + r]
                        if (((s += u), (a += u), 0 == (i -= u))) {
                          h = !0
                          break
                        }
                      }
                      if (((f[s++] = m[o++]), 1 == --e)) {
                        h = !0
                        break
                      }
                    } while ((c--, pn <= l || pn <= u))
                    if (h) break
                    c < 0 && (c = 0), (c += 2)
                  }
                  if (((y = c) < 1 && (y = 1), 1 === e)) {
                    for (r = 0; r < i; r++) f[s + r] = f[a + r]
                    f[s + i] = m[o]
                  } else {
                    if (0 === e) throw new Error()
                    for (r = 0; r < e; r++) f[s + r] = m[o + r]
                  }
                }
              }
            : function (t, e, n, i) {
                for (var r = 0, r = 0; r < i; r++) m[r] = f[n + r]
                var o = t + e - 1,
                  a = i - 1,
                  s = n + i - 1,
                  l = 0,
                  u = 0
                if (((f[s--] = f[o--]), 0 == --e))
                  for (l = s - (i - 1), r = 0; r < i; r++) f[l + r] = m[r]
                else {
                  if (1 === i) {
                    for (
                      u = 1 + (s -= e), l = 1 + (o -= e), r = e - 1;
                      0 <= r;
                      r--
                    )
                      f[u + r] = f[l + r]
                    return (f[s] = m[a])
                  }
                  for (var h = y; ; ) {
                    var c = 0,
                      p = 0,
                      d = !1
                    do {
                      if (g(m[a], f[o]) < 0) {
                        if (((f[s--] = f[o--]), c++, (p = 0) == --e)) {
                          d = !0
                          break
                        }
                      } else if (((f[s--] = m[a--]), p++, (c = 0), 1 == --i)) {
                        d = !0
                        break
                      }
                    } while ((c | p) < h)
                    if (d) break
                    do {
                      if (0 != (c = e - yn(m[a], f, t, e, e - 1, g))) {
                        for (
                          e -= c, u = 1 + (s -= c), l = 1 + (o -= c), r = c - 1;
                          0 <= r;
                          r--
                        )
                          f[u + r] = f[l + r]
                        if (0 === e) {
                          d = !0
                          break
                        }
                      }
                      if (((f[s--] = m[a--]), 1 == --i)) {
                        d = !0
                        break
                      }
                      if (0 != (p = i - gn(f[o], m, 0, i, i - 1, g))) {
                        for (
                          i -= p, u = 1 + (s -= p), l = 1 + (a -= p), r = 0;
                          r < p;
                          r++
                        )
                          f[u + r] = m[l + r]
                        if (i <= 1) {
                          d = !0
                          break
                        }
                      }
                      if (((f[s--] = f[o--]), 0 == --e)) {
                        d = !0
                        break
                      }
                    } while ((h--, pn <= c || pn <= p))
                    if (d) break
                    h < 0 && (h = 0), (h += 2)
                  }
                  if (((y = h) < 1 && (y = 1), 1 === i)) {
                    for (
                      u = 1 + (s -= e), l = 1 + (o -= e), r = e - 1;
                      0 <= r;
                      r--
                    )
                      f[u + r] = f[l + r]
                    f[s] = m[a]
                  } else {
                    if (0 === i) throw new Error()
                    for (l = s - (i - 1), r = 0; r < i; r++) f[l + r] = m[r]
                  }
                }
              })(e, n, i, r)
    }
  }
  var vn = 1,
    _n = 4,
    xn = !1
  function wn () {
    xn ||
      ((xn = !0),
      console.warn(
        'z / z2 / zlevel of displayable is invalid, which may cause unexpected errors'
      ))
  }
  function bn (t, e) {
    return t.zlevel === e.zlevel
      ? t.z === e.z
        ? t.z2 - e.z2
        : t.z - e.z
      : t.zlevel - e.zlevel
  }
  ;(Mn.prototype.traverse = function (t, e) {
    for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
  }),
    (Mn.prototype.getDisplayList = function (t, e) {
      e = e || !1
      var n = this._displayList
      return (!t && n.length) || this.updateDisplayList(e), n
    }),
    (Mn.prototype.updateDisplayList = function (t) {
      this._displayListLen = 0
      for (
        var e = this._roots, n = this._displayList, i = 0, r = e.length;
        i < r;
        i++
      )
        this._updateAndAddDisplayable(e[i], null, t)
      ;(n.length = this._displayListLen), mn(n, bn)
    }),
    (Mn.prototype._updateAndAddDisplayable = function (t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.update(), t.afterUpdate()
        var i = t.getClipPath()
        if (t.ignoreClip) e = null
        else if (i) {
          e = e ? e.slice() : []
          for (var r = i, o = t; r; )
            (r.parent = o),
              r.updateTransform(),
              e.push(r),
              (r = (o = r).getClipPath())
        }
        if (t.childrenRef) {
          for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
            var l = a[s]
            t.__dirty && (l.__dirty |= vn),
              this._updateAndAddDisplayable(l, e, n)
          }
          t.__dirty = 0
        } else {
          i = t
          e && e.length
            ? (i.__clipPaths = e)
            : i.__clipPaths && 0 < i.__clipPaths.length && (i.__clipPaths = []),
            isNaN(i.z) && (wn(), (i.z = 0)),
            isNaN(i.z2) && (wn(), (i.z2 = 0)),
            isNaN(i.zlevel) && (wn(), (i.zlevel = 0)),
            (this._displayList[this._displayListLen++] = i)
        }
        ;(i = t.getDecalElement && t.getDecalElement()),
          (i =
            (i && this._updateAndAddDisplayable(i, e, n),
            t.getTextGuideLine())),
          (i =
            (i && this._updateAndAddDisplayable(i, e, n), t.getTextContent()))
        i && this._updateAndAddDisplayable(i, e, n)
      }
    }),
    (Mn.prototype.addRoot = function (t) {
      ;(t.__zr && t.__zr.storage === this) || this._roots.push(t)
    }),
    (Mn.prototype.delRoot = function (t) {
      if (t instanceof Array)
        for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e])
      else {
        var i = I(this._roots, t)
        0 <= i && this._roots.splice(i, 1)
      }
    }),
    (Mn.prototype.delAllRoots = function () {
      ;(this._roots = []), (this._displayList = []), (this._displayListLen = 0)
    }),
    (Mn.prototype.getRoots = function () {
      return this._roots
    }),
    (Mn.prototype.dispose = function () {
      ;(this._displayList = null), (this._roots = null)
    })
  var Sn = Mn
  function Mn () {
    ;(this._roots = []),
      (this._displayList = []),
      (this._displayListLen = 0),
      (this.displayableSortFunc = bn)
  }
  var Tn =
      (b.hasGlobalWindow &&
        ((window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
          (window.msRequestAnimationFrame &&
            window.msRequestAnimationFrame.bind(window)) ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame)) ||
      function (t) {
        return setTimeout(t, 16)
      },
    Cn = {
      linear: function (t) {
        return t
      },
      quadraticIn: function (t) {
        return t * t
      },
      quadraticOut: function (t) {
        return t * (2 - t)
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)
      },
      cubicIn: function (t) {
        return t * t * t
      },
      cubicOut: function (t) {
        return --t * t * t + 1
      },
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)
      },
      quarticIn: function (t) {
        return t * t * t * t
      },
      quarticOut: function (t) {
        return 1 - --t * t * t * t
      },
      quarticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2)
      },
      quinticIn: function (t) {
        return t * t * t * t * t
      },
      quinticOut: function (t) {
        return --t * t * t * t * t + 1
      },
      quinticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2)
      },
      sinusoidalIn: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2)
      },
      sinusoidalOut: function (t) {
        return Math.sin((t * Math.PI) / 2)
      },
      sinusoidalInOut: function (t) {
        return 0.5 * (1 - Math.cos(Math.PI * t))
      },
      exponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1)
      },
      exponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
      },
      exponentialInOut: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t *= 2) < 1
          ? 0.5 * Math.pow(1024, t - 1)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
      },
      circularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t)
      },
      circularOut: function (t) {
        return Math.sqrt(1 - --t * t)
      },
      circularInOut: function (t) {
        return (t *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      },
      elasticIn: function (t) {
        var e,
          n = 0.1
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            -n *
              Math.pow(2, 10 * --t) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4))
      },
      elasticOut: function (t) {
        var e,
          n = 0.1
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            n *
              Math.pow(2, -10 * t) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4) +
              1)
      },
      elasticInOut: function (t) {
        var e,
          n = 0.1
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            (t *= 2) < 1
              ? n *
                Math.pow(2, 10 * --t) *
                Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                -0.5
              : n *
                  Math.pow(2, -10 * --t) *
                  Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                  0.5 +
                1)
      },
      backIn: function (t) {
        return t * t * (2.70158 * t - 1.70158)
      },
      backOut: function (t) {
        return --t * t * (2.70158 * t + 1.70158) + 1
      },
      backInOut: function (t) {
        var e = 2.5949095
        return (t *= 2) < 1
          ? t * t * ((1 + e) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + e) * t + e) + 2)
      },
      bounceIn: function (t) {
        return 1 - Cn.bounceOut(1 - t)
      },
      bounceOut: function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
      },
      bounceInOut: function (t) {
        return t < 0.5
          ? 0.5 * Cn.bounceIn(2 * t)
          : 0.5 * Cn.bounceOut(2 * t - 1) + 0.5
      }
    },
    In = Math.pow,
    kn = Math.sqrt,
    Dn = 1e-8,
    An = kn(3),
    Pn = 1 / 3,
    Ln = Gt(),
    On = Gt(),
    Rn = Gt()
  function Nn (t) {
    return -Dn < t && t < Dn
  }
  function Bn (t) {
    return Dn < t || t < -Dn
  }
  function zn (t, e, n, i, r) {
    var o = 1 - r
    return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
  }
  function En (t, e, n, i, r) {
    var o = 1 - r
    return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
  }
  function Fn (t, e, n, i, r, o) {
    var a,
      s,
      i = i + 3 * (e - n) - t,
      n = 3 * (n - 2 * e + t),
      e = 3 * (e - t),
      t = t - r,
      r = n * n - 3 * i * e,
      l = n * e - 9 * i * t,
      t = e * e - 3 * n * t,
      u = 0
    return (
      Nn(r) && Nn(l)
        ? Nn(n)
          ? (o[0] = 0)
          : 0 <= (s = -e / n) && s <= 1 && (o[u++] = s)
        : Nn((e = l * l - 4 * r * t))
        ? ((a = -(t = l / r) / 2),
          0 <= (s = -n / i + t) && s <= 1 && (o[u++] = s),
          0 <= a && a <= 1 && (o[u++] = a))
        : 0 < e
        ? ((e = r * n + 1.5 * i * (-l - (t = kn(e)))),
          0 <=
            (s =
              (-n -
                ((t =
                  (t = r * n + 1.5 * i * (-l + t)) < 0
                    ? -In(-t, Pn)
                    : In(t, Pn)) +
                  (e = e < 0 ? -In(-e, Pn) : In(e, Pn)))) /
              (3 * i)) &&
            s <= 1 &&
            (o[u++] = s))
        : ((t = (2 * r * n - 3 * i * l) / (2 * kn(r * r * r))),
          (e = Math.acos(t) / 3),
          (s = (-n - 2 * (l = kn(r)) * (t = Math.cos(e))) / (3 * i)),
          (a = (-n + l * (t + An * Math.sin(e))) / (3 * i)),
          (r = (-n + l * (t - An * Math.sin(e))) / (3 * i)),
          0 <= s && s <= 1 && (o[u++] = s),
          0 <= a && a <= 1 && (o[u++] = a),
          0 <= r && r <= 1 && (o[u++] = r)),
      u
    )
  }
  function Vn (t, e, n, i, r) {
    var o,
      a = 6 * n - 12 * e + 6 * t,
      i = 9 * e + 3 * i - 3 * t - 9 * n,
      n = 3 * e - 3 * t,
      e = 0
    return (
      Nn(i)
        ? Bn(a) && 0 <= (o = -n / a) && o <= 1 && (r[e++] = o)
        : Nn((t = a * a - 4 * i * n))
        ? (r[0] = -a / (2 * i))
        : 0 < t &&
          ((t = (-a - (n = kn(t))) / (2 * i)),
          0 <= (o = (-a + n) / (2 * i)) && o <= 1 && (r[e++] = o),
          0 <= t) &&
          t <= 1 &&
          (r[e++] = t),
      e
    )
  }
  function Hn (t, e, n, i, r, o) {
    var a = (e - t) * r + t,
      e = (n - e) * r + e,
      n = (i - n) * r + n,
      s = (e - a) * r + a,
      e = (n - e) * r + e,
      r = (e - s) * r + s
    ;(o[0] = t),
      (o[1] = a),
      (o[2] = s),
      (o[3] = r),
      (o[4] = r),
      (o[5] = e),
      (o[6] = n),
      (o[7] = i)
  }
  function Wn (t, e, n, i, r, o, a, s, l, u, h) {
    var c,
      p,
      d,
      f,
      g = 0.005,
      y = 1 / 0
    ;(Ln[0] = l), (Ln[1] = u)
    for (var m = 0; m < 1; m += 0.05)
      (On[0] = zn(t, n, r, a, m)),
        (On[1] = zn(e, i, o, s, m)),
        (d = te(Ln, On)) < y && ((c = m), (y = d))
    for (var y = 1 / 0, v = 0; v < 32 && !(g < 1e-4); v++)
      (p = c + g),
        (On[0] = zn(t, n, r, a, (f = c - g))),
        (On[1] = zn(e, i, o, s, f)),
        (d = te(On, Ln)),
        0 <= f && d < y
          ? ((c = f), (y = d))
          : ((Rn[0] = zn(t, n, r, a, p)),
            (Rn[1] = zn(e, i, o, s, p)),
            (f = te(Rn, Ln)),
            p <= 1 && f < y ? ((c = p), (y = f)) : (g *= 0.5))
    return h && ((h[0] = zn(t, n, r, a, c)), (h[1] = zn(e, i, o, s, c))), kn(y)
  }
  function Gn (t, e, n, i) {
    var r = 1 - i
    return r * (r * t + 2 * i * e) + i * i * n
  }
  function Un (t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e))
  }
  function Xn (t, e, n) {
    n = t + n - 2 * e
    return 0 == n ? 0.5 : (t - e) / n
  }
  function Yn (t, e, n, i, r) {
    var o = (e - t) * i + t,
      e = (n - e) * i + e,
      i = (e - o) * i + o
    ;(r[0] = t), (r[1] = o), (r[2] = i), (r[3] = i), (r[4] = e), (r[5] = n)
  }
  function qn (t, e, n, i, r, o, a, s, l) {
    var u,
      h = 0.005,
      c = 1 / 0
    ;(Ln[0] = a), (Ln[1] = s)
    for (var p = 0; p < 1; p += 0.05)
      (On[0] = Gn(t, n, r, p)),
        (On[1] = Gn(e, i, o, p)),
        (y = te(Ln, On)) < c && ((u = p), (c = y))
    for (var c = 1 / 0, d = 0; d < 32 && !(h < 1e-4); d++) {
      var f = u - h,
        g = u + h,
        y = ((On[0] = Gn(t, n, r, f)), (On[1] = Gn(e, i, o, f)), te(On, Ln))
      0 <= f && y < c
        ? ((u = f), (c = y))
        : ((Rn[0] = Gn(t, n, r, g)),
          (Rn[1] = Gn(e, i, o, g)),
          (f = te(Rn, Ln)),
          g <= 1 && f < c ? ((u = g), (c = f)) : (h *= 0.5))
    }
    return l && ((l[0] = Gn(t, n, r, u)), (l[1] = Gn(e, i, o, u))), kn(c)
  }
  var jn = /cubic-bezier\(([0-9,\.e ]+)\)/
  function Zn (t) {
    t = t && jn.exec(t)
    if (t) {
      var e,
        t = t[1].split(','),
        n = +It(t[0]),
        i = +It(t[1]),
        r = +It(t[2]),
        o = +It(t[3])
      if (!isNaN(n + i + r + o))
        return (
          (e = []),
          function (t) {
            return t <= 0
              ? 0
              : 1 <= t
              ? 1
              : Fn(0, n, r, 1, t, e) && zn(0, i, o, 1, e[0])
          }
        )
    }
  }
  ;($n.prototype.step = function (t, e) {
    if (
      (this._inited ||
        ((this._startTime = t + this._delay), (this._inited = !0)),
      !this._paused)
    ) {
      var n = this._life,
        i = t - this._startTime - this._pausedTime,
        r = i / n,
        o = (r < 0 && (r = 0), (r = Math.min(r, 1)), this.easingFunc),
        o = o ? o(r) : r
      if ((this.onframe(o), 1 === r)) {
        if (!this.loop) return !0
        ;(this._startTime = t - (i % n)),
          (this._pausedTime = 0),
          this.onrestart()
      }
      return !1
    }
    this._pausedTime += e
  }),
    ($n.prototype.pause = function () {
      this._paused = !0
    }),
    ($n.prototype.resume = function () {
      this._paused = !1
    }),
    ($n.prototype.setEasing = function (t) {
      ;(this.easing = t), (this.easingFunc = S(t) ? t : Cn[t] || Zn(t))
    })
  var Kn = $n
  function $n (t) {
    ;(this._inited = !1),
      (this._startTime = 0),
      (this._pausedTime = 0),
      (this._paused = !1),
      (this._life = t.life || 1e3),
      (this._delay = t.delay || 0),
      (this.loop = t.loop || !1),
      (this.onframe = t.onframe || Vt),
      (this.ondestroy = t.ondestroy || Vt),
      (this.onrestart = t.onrestart || Vt),
      t.easing && this.setEasing(t.easing)
  }
  function Qn (t) {
    this.value = t
  }
  ;(ti.prototype.insert = function (t) {
    t = new Qn(t)
    return this.insertEntry(t), t
  }),
    (ti.prototype.insertEntry = function (t) {
      this.head
        ? (((this.tail.next = t).prev = this.tail),
          (t.next = null),
          (this.tail = t))
        : (this.head = this.tail = t),
        this._len++
    }),
    (ti.prototype.remove = function (t) {
      var e = t.prev,
        n = t.next
      e ? (e.next = n) : (this.head = n),
        n ? (n.prev = e) : (this.tail = e),
        (t.next = t.prev = null),
        this._len--
    }),
    (ti.prototype.len = function () {
      return this._len
    }),
    (ti.prototype.clear = function () {
      ;(this.head = this.tail = null), (this._len = 0)
    })
  var Jn = ti
  function ti () {
    this._len = 0
  }
  ;(ni.prototype.put = function (t, e) {
    var n,
      i,
      r = this._list,
      o = this._map,
      a = null
    return (
      null == o[t] &&
        ((i = r.len()),
        (n = this._lastRemovedEntry),
        i >= this._maxSize &&
          0 < i &&
          ((i = r.head),
          r.remove(i),
          delete o[i.key],
          (a = i.value),
          (this._lastRemovedEntry = i)),
        n ? (n.value = e) : (n = new Qn(e)),
        (n.key = t),
        r.insertEntry(n),
        (o[t] = n)),
      a
    )
  }),
    (ni.prototype.get = function (t) {
      var t = this._map[t],
        e = this._list
      if (null != t)
        return t !== e.tail && (e.remove(t), e.insertEntry(t)), t.value
    }),
    (ni.prototype.clear = function () {
      this._list.clear(), (this._map = {})
    }),
    (ni.prototype.len = function () {
      return this._list.len()
    })
  var ei = ni
  function ni (t) {
    ;(this._list = new Jn()),
      (this._maxSize = 10),
      (this._map = {}),
      (this._maxSize = t)
  }
  var ii = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1]
  }
  function ri (t) {
    return (t = Math.round(t)) < 0 ? 0 : 255 < t ? 255 : t
  }
  function oi (t) {
    return t < 0 ? 0 : 1 < t ? 1 : t
  }
  function ai (t) {
    return t.length && '%' === t.charAt(t.length - 1)
      ? ri((parseFloat(t) / 100) * 255)
      : ri(parseInt(t, 10))
  }
  function si (t) {
    return t.length && '%' === t.charAt(t.length - 1)
      ? oi(parseFloat(t) / 100)
      : oi(parseFloat(t))
  }
  function li (t, e, n) {
    return (
      n < 0 ? (n += 1) : 1 < n && --n,
      6 * n < 1
        ? t + (e - t) * n * 6
        : 2 * n < 1
        ? e
        : 3 * n < 2
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    )
  }
  function ui (t, e, n) {
    return t + (e - t) * n
  }
  function hi (t, e, n, i, r) {
    return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t
  }
  function ci (t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t
  }
  var pi = new ei(20),
    di = null
  function fi (t, e) {
    di && ci(di, e), (di = pi.put(t, di || e.slice()))
  }
  function gi (t, e) {
    if (t) {
      e = e || []
      var n = pi.get(t)
      if (n) return ci(e, n)
      n = (t += '').replace(/ /g, '').toLowerCase()
      if (n in ii) return ci(e, ii[n]), fi(t, e), e
      var i = n.length
      if ('#' === n.charAt(0))
        return 4 === i || 5 === i
          ? 0 <= (r = parseInt(n.slice(1, 4), 16)) && r <= 4095
            ? (hi(
                e,
                ((3840 & r) >> 4) | ((3840 & r) >> 8),
                (240 & r) | ((240 & r) >> 4),
                (15 & r) | ((15 & r) << 4),
                5 === i ? parseInt(n.slice(4), 16) / 15 : 1
              ),
              fi(t, e),
              e)
            : void hi(e, 0, 0, 0, 1)
          : 7 === i || 9 === i
          ? 0 <= (r = parseInt(n.slice(1, 7), 16)) && r <= 16777215
            ? (hi(
                e,
                (16711680 & r) >> 16,
                (65280 & r) >> 8,
                255 & r,
                9 === i ? parseInt(n.slice(7), 16) / 255 : 1
              ),
              fi(t, e),
              e)
            : void hi(e, 0, 0, 0, 1)
          : void 0
      var r = n.indexOf('('),
        o = n.indexOf(')')
      if (-1 !== r && o + 1 === i) {
        var i = n.substr(0, r),
          a = n.substr(r + 1, o - (r + 1)).split(','),
          s = 1
        switch (i) {
          case 'rgba':
            if (4 !== a.length)
              return 3 === a.length
                ? hi(e, +a[0], +a[1], +a[2], 1)
                : hi(e, 0, 0, 0, 1)
            s = si(a.pop())
          case 'rgb':
            return 3 <= a.length
              ? (hi(
                  e,
                  ai(a[0]),
                  ai(a[1]),
                  ai(a[2]),
                  3 === a.length ? s : si(a[3])
                ),
                fi(t, e),
                e)
              : void hi(e, 0, 0, 0, 1)
          case 'hsla':
            return 4 !== a.length
              ? void hi(e, 0, 0, 0, 1)
              : ((a[3] = si(a[3])), yi(a, e), fi(t, e), e)
          case 'hsl':
            return 3 !== a.length
              ? void hi(e, 0, 0, 0, 1)
              : (yi(a, e), fi(t, e), e)
          default:
            return
        }
      }
      hi(e, 0, 0, 0, 1)
    }
  }
  function yi (t, e) {
    var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
      i = si(t[1]),
      r = si(t[2]),
      i = r <= 0.5 ? r * (i + 1) : r + i - r * i,
      r = 2 * r - i
    return (
      hi(
        (e = e || []),
        ri(255 * li(r, i, n + 1 / 3)),
        ri(255 * li(r, i, n)),
        ri(255 * li(r, i, n - 1 / 3)),
        1
      ),
      4 === t.length && (e[3] = t[3]),
      e
    )
  }
  function mi (t, e) {
    var n = gi(t)
    if (n) {
      for (var i = 0; i < 3; i++)
        (n[i] = e < 0 ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0),
          255 < n[i] ? (n[i] = 255) : n[i] < 0 && (n[i] = 0)
      return xi(n, 4 === n.length ? 'rgba' : 'rgb')
    }
  }
  function vi (t, e, n) {
    var i, r, o
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (n = n || []),
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (o = Math.ceil(t)),
        (r = e[i]),
        (e = e[o]),
        (n[0] = ri(ui(r[0], e[0], (o = t - i)))),
        (n[1] = ri(ui(r[1], e[1], o))),
        (n[2] = ri(ui(r[2], e[2], o))),
        (n[3] = oi(ui(r[3], e[3], o))),
        n
      )
  }
  function _i (t, e, n) {
    var i, r, o, a
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (r = Math.ceil(t)),
        (a = gi(e[i])),
        (e = gi(e[r])),
        (a = xi(
          [
            ri(ui(a[0], e[0], (o = t - i))),
            ri(ui(a[1], e[1], o)),
            ri(ui(a[2], e[2], o)),
            oi(ui(a[3], e[3], o))
          ],
          'rgba'
        )),
        n ? { color: a, leftIndex: i, rightIndex: r, value: t } : a
      )
  }
  function xi (t, e) {
    var n
    if (t && t.length)
      return (
        (n = t[0] + ',' + t[1] + ',' + t[2]),
        ('rgba' !== e && 'hsva' !== e && 'hsla' !== e) || (n += ',' + t[3]),
        e + '(' + n + ')'
      )
  }
  function wi (t, e) {
    t = gi(t)
    return t
      ? ((0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) * t[3]) / 255 +
          (1 - t[3]) * e
      : 0
  }
  var bi = Object.freeze({
      __proto__: null,
      fastLerp: vi,
      fastMapToColor: vi,
      lerp: _i,
      lift: mi,
      lum: wi,
      mapToColor: _i,
      modifyAlpha: function (t, e) {
        if ((t = gi(t)) && null != e) return (t[3] = oi(e)), xi(t, 'rgba')
      },
      modifyHSL: function (t, e, n, i) {
        var r = gi(t)
        if (t)
          return (
            (r = (function (t) {
              var e, n, i, r, o, a, s, l, u, h
              if (t)
                return (
                  (h = t[0] / 255),
                  (n = t[1] / 255),
                  (i = t[2] / 255),
                  (s = Math.min(h, n, i)),
                  (o = ((r = Math.max(h, n, i)) + s) / 2),
                  0 == (u = r - s)
                    ? (a = e = 0)
                    : ((a = o < 0.5 ? u / (r + s) : u / (2 - r - s)),
                      (s = ((r - h) / 6 + u / 2) / u),
                      (l = ((r - n) / 6 + u / 2) / u),
                      (u = ((r - i) / 6 + u / 2) / u),
                      h === r
                        ? (e = u - l)
                        : n === r
                        ? (e = 1 / 3 + s - u)
                        : i === r && (e = 2 / 3 + l - s),
                      e < 0 && (e += 1),
                      1 < e && --e),
                  (h = [360 * e, a, o]),
                  null != t[3] && h.push(t[3]),
                  h
                )
            })(r)),
            null != e &&
              (r[0] =
                ((t = e), (t = Math.round(t)) < 0 ? 0 : 360 < t ? 360 : t)),
            null != n && (r[1] = si(n)),
            null != i && (r[2] = si(i)),
            xi(yi(r), 'rgba')
          )
      },
      parse: gi,
      random: function () {
        return xi(
          [
            Math.round(255 * Math.random()),
            Math.round(255 * Math.random()),
            Math.round(255 * Math.random())
          ],
          'rgb'
        )
      },
      stringify: xi,
      toHex: function (t) {
        if ((t = gi(t)))
          return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2])
            .toString(16)
            .slice(1)
      }
    }),
    Si = Math.round
  function Mi (t) {
    var e, n
    return (
      t && 'transparent' !== t
        ? 'string' == typeof t &&
          -1 < t.indexOf('rgba') &&
          (n = gi(t)) &&
          ((t = 'rgb(' + n[0] + ',' + n[1] + ',' + n[2] + ')'), (e = n[3]))
        : (t = 'none'),
      { color: t, opacity: null == e ? 1 : e }
    )
  }
  function Ti (t) {
    return t < 1e-4 && -1e-4 < t
  }
  function Ci (t) {
    return Si(1e3 * t) / 1e3
  }
  function Ii (t) {
    return Si(1e4 * t) / 1e4
  }
  var ki = { left: 'start', right: 'end', center: 'middle', middle: 'middle' }
  function Di (t) {
    return t && !!t.image
  }
  function Ai (t) {
    return Di(t) || ((t = t) && !!t.svgElement)
  }
  function Pi (t) {
    return 'linear' === t.type
  }
  function Li (t) {
    return 'radial' === t.type
  }
  function Oi (t) {
    return t && ('linear' === t.type || 'radial' === t.type)
  }
  function Ri (t) {
    return 'url(#' + t + ')'
  }
  function Ni (t) {
    ;(t = t.getGlobalScale()), (t = Math.max(t[0], t[1]))
    return Math.max(Math.ceil(Math.log(t) / Math.log(10)), 1)
  }
  function Bi (t) {
    var e = t.x || 0,
      n = t.y || 0,
      i = (t.rotation || 0) * Ht,
      r = N(t.scaleX, 1),
      o = N(t.scaleY, 1),
      a = t.skewX || 0,
      t = t.skewY || 0,
      s = []
    return (
      (e || n) && s.push('translate(' + e + 'px,' + n + 'px)'),
      i && s.push('rotate(' + i + ')'),
      (1 === r && 1 === o) || s.push('scale(' + r + ',' + o + ')'),
      (a || t) && s.push('skew(' + Si(a * Ht) + 'deg, ' + Si(t * Ht) + 'deg)'),
      s.join(' ')
    )
  }
  var zi =
      b.hasGlobalWindow && S(window.btoa)
        ? function (t) {
            return window.btoa(unescape(encodeURIComponent(t)))
          }
        : 'undefined' != typeof Buffer
        ? function (t) {
            return Buffer.from(t).toString('base64')
          }
        : function (t) {
            return null
          },
    Ei = Array.prototype.slice
  function Fi (t, e, n) {
    return (e - t) * n + t
  }
  function Vi (t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = Fi(e[o], n[o], i)
    return t
  }
  function Hi (t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = e[o] + n[o] * i
    return t
  }
  function Wi (t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; a < r; a++) {
      t[a] || (t[a] = [])
      for (var s = 0; s < o; s++) t[a][s] = e[a][s] + n[a][s] * i
    }
    return t
  }
  function Gi (t) {
    if (ut(t)) {
      var e = t.length
      if (ut(t[0])) {
        for (var n = [], i = 0; i < e; i++) n.push(Ei.call(t[i]))
        return n
      }
      return Ei.call(t)
    }
    return t
  }
  function Ui (t) {
    return (
      (t[0] = Math.floor(t[0]) || 0),
      (t[1] = Math.floor(t[1]) || 0),
      (t[2] = Math.floor(t[2]) || 0),
      (t[3] = null == t[3] ? 1 : t[3]),
      'rgba(' + t.join(',') + ')'
    )
  }
  function Xi (t) {
    return 4 === t || 5 === t
  }
  function Yi (t) {
    return 1 === t || 2 === t
  }
  var qi = [0, 0, 0, 0],
    ji =
      (($i.prototype.isFinished = function () {
        return this._finished
      }),
      ($i.prototype.setFinished = function () {
        ;(this._finished = !0),
          this._additiveTrack && this._additiveTrack.setFinished()
      }),
      ($i.prototype.needsAnimate = function () {
        return 1 <= this.keyframes.length
      }),
      ($i.prototype.getAdditiveTrack = function () {
        return this._additiveTrack
      }),
      ($i.prototype.addKeyframe = function (t, e, n) {
        this._needsSort = !0
        var i,
          r = this.keyframes,
          o = r.length,
          a = !1,
          s = 6,
          l = e,
          u =
            (ut(e)
              ? ((1 == (s = i = ut((i = e) && i[0]) ? 2 : 1) && !W(e[0])) ||
                  (2 == i && !W(e[0][0]))) &&
                (a = !0)
              : W(e) && !wt(e)
              ? (s = 0)
              : H(e)
              ? isNaN(+e)
                ? (i = gi(e)) && ((l = i), (s = 3))
                : (s = 0)
              : vt(e) &&
                (((u = O({}, l)).colorStops = F(e.colorStops, function (t) {
                  return { offset: t.offset, color: gi(t.color) }
                })),
                Pi(e) ? (s = 4) : Li(e) && (s = 5),
                (l = u)),
            0 === o
              ? (this.valType = s)
              : (s === this.valType && 6 !== s) || (a = !0),
            (this.discrete = this.discrete || a),
            { time: t, value: l, rawValue: e, percent: 0 })
        return (
          n && ((u.easing = n), (u.easingFunc = S(n) ? n : Cn[n] || Zn(n))),
          r.push(u),
          u
        )
      }),
      ($i.prototype.prepare = function (t, e) {
        var n = this.keyframes
        this._needsSort &&
          n.sort(function (t, e) {
            return t.time - e.time
          })
        for (
          var i = this.valType,
            r = n.length,
            o = n[r - 1],
            a = this.discrete,
            s = Yi(i),
            l = Xi(i),
            u = 0;
          u < r;
          u++
        ) {
          var h = n[u],
            c = h.value,
            p = o.value
          if (((h.percent = h.time / t), !a))
            if (s && u !== r - 1) {
              h = void 0
              d = void 0
              f = void 0
              g = void 0
              y = void 0
              m = void 0
              v = void 0
              _ = void 0
              x = void 0
              h = c
              var d = p
              var f = i
              var g = h,
                y = d
              if (g.push && y.push) {
                var h = g.length,
                  m = y.length
                if (h !== m)
                  if (m < h) g.length = m
                  else
                    for (var v = h; v < m; v++)
                      g.push(1 === f ? y[v] : Ei.call(y[v]))
                for (var _ = g[0] && g[0].length, v = 0; v < g.length; v++)
                  if (1 === f) isNaN(g[v]) && (g[v] = y[v])
                  else
                    for (var x = 0; x < _; x++)
                      isNaN(g[v][x]) && (g[v][x] = y[v][x])
              }
            } else if (l) {
              d = void 0
              h = void 0
              w = void 0
              b = void 0
              S = void 0
              M = void 0
              T = void 0
              d = c.colorStops
              h = p.colorStops
              for (
                var w = d.length,
                  b = h.length,
                  S = b < w ? h : d,
                  h = Math.min(w, b),
                  M = S[h - 1] || { color: [0, 0, 0, 0], offset: 0 },
                  T = h;
                T < Math.max(w, b);
                T++
              )
                S.push({ offset: M.offset, color: M.color.slice() })
            }
        }
        if (
          !a &&
          5 !== i &&
          e &&
          this.needsAnimate() &&
          e.needsAnimate() &&
          i === e.valType &&
          !e._finished
        ) {
          this._additiveTrack = e
          for (var C = n[0].value, u = 0; u < r; u++)
            0 === i
              ? (n[u].additiveValue = n[u].value - C)
              : 3 === i
              ? (n[u].additiveValue = Hi([], n[u].value, C, -1))
              : Yi(i) &&
                (n[u].additiveValue = (1 === i ? Hi : Wi)(
                  [],
                  n[u].value,
                  C,
                  -1
                ))
        }
      }),
      ($i.prototype.step = function (t, e) {
        if (!this._finished) {
          this._additiveTrack &&
            this._additiveTrack._finished &&
            (this._additiveTrack = null)
          var n,
            i,
            r,
            o,
            a,
            s = null != this._additiveTrack,
            l = s ? 'additiveValue' : 'value',
            u = this.valType,
            h = this.keyframes,
            c = h.length,
            p = this.propName,
            d = 3 === u,
            f = this._lastFr,
            g = Math.min
          if (1 === c) i = r = h[0]
          else {
            if (e < 0) n = 0
            else if (e < this._lastFrP) {
              for (n = g(f + 1, c - 1); 0 <= n && !(h[n].percent <= e); n--);
              n = g(n, c - 2)
            } else {
              for (n = f; n < c && !(h[n].percent > e); n++);
              n = g(n - 1, c - 2)
            }
            ;(r = h[n + 1]), (i = h[n])
          }
          i &&
            r &&
            ((this._lastFr = n),
            (this._lastFrP = e),
            (f = r.percent - i.percent),
            (o = 0 == f ? 1 : g((e - i.percent) / f, 1)),
            r.easingFunc && (o = r.easingFunc(o)),
            (g = s ? this._additiveValue : d ? qi : t[p]),
            (Yi(u) || d) && (g = g || (this._additiveValue = [])),
            this.discrete
              ? (t[p] = (o < 1 ? i : r).rawValue)
              : Yi(u)
              ? (1 === u
                  ? Vi
                  : function (t, e, n, i) {
                      for (
                        var r = e.length, o = r && e[0].length, a = 0;
                        a < r;
                        a++
                      ) {
                        t[a] || (t[a] = [])
                        for (var s = 0; s < o; s++)
                          t[a][s] = Fi(e[a][s], n[a][s], i)
                      }
                    })(g, i[l], r[l], o)
              : Xi(u)
              ? ((f = i[l]),
                (a = r[l]),
                (t[p] = {
                  type: (u = 4 === u) ? 'linear' : 'radial',
                  x: Fi(f.x, a.x, o),
                  y: Fi(f.y, a.y, o),
                  colorStops: F(f.colorStops, function (t, e) {
                    e = a.colorStops[e]
                    return {
                      offset: Fi(t.offset, e.offset, o),
                      color: Ui(Vi([], t.color, e.color, o))
                    }
                  }),
                  global: a.global
                }),
                u
                  ? ((t[p].x2 = Fi(f.x2, a.x2, o)),
                    (t[p].y2 = Fi(f.y2, a.y2, o)))
                  : (t[p].r = Fi(f.r, a.r, o)))
              : d
              ? (Vi(g, i[l], r[l], o), s || (t[p] = Ui(g)))
              : ((u = Fi(i[l], r[l], o)),
                s ? (this._additiveValue = u) : (t[p] = u)),
            s) &&
            this._addToTarget(t)
        }
      }),
      ($i.prototype._addToTarget = function (t) {
        var e = this.valType,
          n = this.propName,
          i = this._additiveValue
        0 === e
          ? (t[n] = t[n] + i)
          : 3 === e
          ? (gi(t[n], qi), Hi(qi, qi, i, 1), (t[n] = Ui(qi)))
          : 1 === e
          ? Hi(t[n], t[n], i, 1)
          : 2 === e && Wi(t[n], t[n], i, 1)
      }),
      $i),
    Zi =
      ((Ki.prototype.getMaxTime = function () {
        return this._maxTime
      }),
      (Ki.prototype.getDelay = function () {
        return this._delay
      }),
      (Ki.prototype.getLoop = function () {
        return this._loop
      }),
      (Ki.prototype.getTarget = function () {
        return this._target
      }),
      (Ki.prototype.changeTarget = function (t) {
        this._target = t
      }),
      (Ki.prototype.when = function (t, e, n) {
        return this.whenWithKeys(t, e, R(e), n)
      }),
      (Ki.prototype.whenWithKeys = function (t, e, n, i) {
        for (var r = this._tracks, o = 0; o < n.length; o++) {
          var a = n[o]
          if (!(l = r[a])) {
            var s,
              l = (r[a] = new ji(a)),
              u = void 0,
              h = this._getAdditiveTrack(a)
            if (
              (h
                ? ((u = (s = (s = h.keyframes)[s.length - 1]) && s.value),
                  3 === h.valType && (u = u && Ui(u)))
                : (u = this._target[a]),
              null == u)
            )
              continue
            0 < t && l.addKeyframe(0, Gi(u), i), this._trackKeys.push(a)
          }
          l.addKeyframe(t, Gi(e[a]), i)
        }
        return (this._maxTime = Math.max(this._maxTime, t)), this
      }),
      (Ki.prototype.pause = function () {
        this._clip.pause(), (this._paused = !0)
      }),
      (Ki.prototype.resume = function () {
        this._clip.resume(), (this._paused = !1)
      }),
      (Ki.prototype.isPaused = function () {
        return !!this._paused
      }),
      (Ki.prototype.duration = function (t) {
        return (this._maxTime = t), (this._force = !0), this
      }),
      (Ki.prototype._doneCallback = function () {
        this._setTracksFinished(), (this._clip = null)
        var t = this._doneCbs
        if (t) for (var e = t.length, n = 0; n < e; n++) t[n].call(this)
      }),
      (Ki.prototype._abortedCallback = function () {
        this._setTracksFinished()
        var t = this.animation,
          e = this._abortedCbs
        if ((t && t.removeClip(this._clip), (this._clip = null), e))
          for (var n = 0; n < e.length; n++) e[n].call(this)
      }),
      (Ki.prototype._setTracksFinished = function () {
        for (
          var t = this._tracks, e = this._trackKeys, n = 0;
          n < e.length;
          n++
        )
          t[e[n]].setFinished()
      }),
      (Ki.prototype._getAdditiveTrack = function (t) {
        var e,
          n = this._additiveAnimators
        if (n)
          for (var i = 0; i < n.length; i++) {
            var r = n[i].getTrack(t)
            r && (e = r)
          }
        return e
      }),
      (Ki.prototype.start = function (t) {
        if (!(0 < this._started)) {
          this._started = 1
          for (
            var e, o = this, a = [], n = this._maxTime || 0, i = 0;
            i < this._trackKeys.length;
            i++
          ) {
            var r = this._trackKeys[i],
              s = this._tracks[r],
              r = this._getAdditiveTrack(r),
              l = s.keyframes,
              u = l.length
            s.prepare(n, r),
              s.needsAnimate() &&
                (!this._allowDiscrete && s.discrete
                  ? ((r = l[u - 1]) && (o._target[s.propName] = r.rawValue),
                    s.setFinished())
                  : a.push(s))
          }
          return (
            a.length || this._force
              ? ((e = new Kn({
                  life: n,
                  loop: this._loop,
                  delay: this._delay || 0,
                  onframe: function (t) {
                    o._started = 2
                    var e = o._additiveAnimators
                    if (e) {
                      for (var n = !1, i = 0; i < e.length; i++)
                        if (e[i]._clip) {
                          n = !0
                          break
                        }
                      n || (o._additiveAnimators = null)
                    }
                    for (i = 0; i < a.length; i++) a[i].step(o._target, t)
                    var r = o._onframeCbs
                    if (r) for (i = 0; i < r.length; i++) r[i](o._target, t)
                  },
                  ondestroy: function () {
                    o._doneCallback()
                  }
                })),
                (this._clip = e),
                this.animation && this.animation.addClip(e),
                t && e.setEasing(t))
              : this._doneCallback(),
            this
          )
        }
      }),
      (Ki.prototype.stop = function (t) {
        var e
        this._clip &&
          ((e = this._clip), t && e.onframe(1), this._abortedCallback())
      }),
      (Ki.prototype.delay = function (t) {
        return (this._delay = t), this
      }),
      (Ki.prototype.during = function (t) {
        return (
          t &&
            (this._onframeCbs || (this._onframeCbs = []),
            this._onframeCbs.push(t)),
          this
        )
      }),
      (Ki.prototype.done = function (t) {
        return (
          t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
          this
        )
      }),
      (Ki.prototype.aborted = function (t) {
        return (
          t &&
            (this._abortedCbs || (this._abortedCbs = []),
            this._abortedCbs.push(t)),
          this
        )
      }),
      (Ki.prototype.getClip = function () {
        return this._clip
      }),
      (Ki.prototype.getTrack = function (t) {
        return this._tracks[t]
      }),
      (Ki.prototype.getTracks = function () {
        var e = this
        return F(this._trackKeys, function (t) {
          return e._tracks[t]
        })
      }),
      (Ki.prototype.stopTracks = function (t, e) {
        if (!t.length || !this._clip) return !0
        for (
          var n = this._tracks, i = this._trackKeys, r = 0;
          r < t.length;
          r++
        ) {
          var o = n[t[r]]
          o &&
            !o.isFinished() &&
            (e
              ? o.step(this._target, 1)
              : 1 === this._started && o.step(this._target, 0),
            o.setFinished())
        }
        for (var a = !0, r = 0; r < i.length; r++)
          if (!n[i[r]].isFinished()) {
            a = !1
            break
          }
        return a && this._abortedCallback(), a
      }),
      (Ki.prototype.saveTo = function (t, e, n) {
        if (t) {
          e = e || this._trackKeys
          for (var i = 0; i < e.length; i++) {
            var r = e[i],
              o = this._tracks[r]
            o &&
              !o.isFinished() &&
              (o = (o = o.keyframes)[n ? 0 : o.length - 1]) &&
              (t[r] = Gi(o.rawValue))
          }
        }
      }),
      (Ki.prototype.__changeFinalValue = function (t, e) {
        e = e || R(t)
        for (var n = 0; n < e.length; n++) {
          var i,
            r = e[n],
            o = this._tracks[r]
          o &&
            1 < (i = o.keyframes).length &&
            ((i = i.pop()),
            o.addKeyframe(i.time, t[r]),
            o.prepare(this._maxTime, o.getAdditiveTrack()))
        }
      }),
      Ki)
  function Ki (t, e, n, i) {
    ;(this._tracks = {}),
      (this._trackKeys = []),
      (this._maxTime = 0),
      (this._started = 0),
      (this._clip = null),
      (this._target = t),
      (this._loop = e) && i
        ? ot("Can' use additive animation on looped animation.")
        : ((this._additiveAnimators = i), (this._allowDiscrete = n))
  }
  function $i (t) {
    ;(this.keyframes = []),
      (this.discrete = !1),
      (this._invalid = !1),
      (this._needsSort = !1),
      (this._lastFr = 0),
      (this._lastFrP = 0),
      (this.propName = t)
  }
  function Qi () {
    return new Date().getTime()
  }
  u(er, (Ji = ue)),
    (er.prototype.addClip = function (t) {
      t.animation && this.removeClip(t),
        this._head
          ? (((this._tail.next = t).prev = this._tail),
            (t.next = null),
            (this._tail = t))
          : (this._head = this._tail = t),
        (t.animation = this)
    }),
    (er.prototype.addAnimator = function (t) {
      t.animation = this
      t = t.getClip()
      t && this.addClip(t)
    }),
    (er.prototype.removeClip = function (t) {
      var e, n
      t.animation &&
        ((e = t.prev),
        (n = t.next),
        e ? (e.next = n) : (this._head = n),
        n ? (n.prev = e) : (this._tail = e),
        (t.next = t.prev = t.animation = null))
    }),
    (er.prototype.removeAnimator = function (t) {
      var e = t.getClip()
      e && this.removeClip(e), (t.animation = null)
    }),
    (er.prototype.update = function (t) {
      for (
        var e = Qi() - this._pausedTime, n = e - this._time, i = this._head;
        i;

      )
        var r = i.next,
          i = (i.step(e, n) && (i.ondestroy(), this.removeClip(i)), r)
      ;(this._time = e),
        t ||
          (this.trigger('frame', n), this.stage.update && this.stage.update())
    }),
    (er.prototype._startLoop = function () {
      var e = this
      ;(this._running = !0),
        Tn(function t () {
          e._running && (Tn(t), !e._paused) && e.update()
        })
    }),
    (er.prototype.start = function () {
      this._running ||
        ((this._time = Qi()), (this._pausedTime = 0), this._startLoop())
    }),
    (er.prototype.stop = function () {
      this._running = !1
    }),
    (er.prototype.pause = function () {
      this._paused || ((this._pauseStart = Qi()), (this._paused = !0))
    }),
    (er.prototype.resume = function () {
      this._paused &&
        ((this._pausedTime += Qi() - this._pauseStart), (this._paused = !1))
    }),
    (er.prototype.clear = function () {
      for (var t = this._head; t; ) {
        var e = t.next
        ;(t.prev = t.next = t.animation = null), (t = e)
      }
      this._head = this._tail = null
    }),
    (er.prototype.isFinished = function () {
      return null == this._head
    }),
    (er.prototype.animate = function (t, e) {
      ;(e = e || {}), this.start()
      t = new Zi(t, e.loop)
      return this.addAnimator(t), t
    })
  var Ji,
    tr = er
  function er (t) {
    var e = Ji.call(this) || this
    return (
      (e._running = !1),
      (e._time = 0),
      (e._pausedTime = 0),
      (e._pauseStart = 0),
      (e._paused = !1),
      (e.stage = (t = t || {}).stage || {}),
      e
    )
  }
  var nr,
    ir = b.domSupported,
    rr =
      ((nr = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 }),
      {
        mouse: (n = [
          'click',
          'dblclick',
          'mousewheel',
          'wheel',
          'mouseout',
          'mouseup',
          'mousedown',
          'mousemove',
          'contextmenu'
        ]),
        touch: ['touchstart', 'touchend', 'touchmove'],
        pointer: F(n, function (t) {
          var e = t.replace('mouse', 'pointer')
          return nr.hasOwnProperty(e) ? e : t
        })
      }),
    or = ['mousemove', 'mouseup'],
    ar = ['pointermove', 'pointerup'],
    sr = !1
  function lr (t) {
    t = t.pointerType
    return 'pen' === t || 'touch' === t
  }
  function ur (t) {
    t && (t.zrByTouch = !0)
  }
  function hr (t, e) {
    for (
      var n = e, i = !1;
      n &&
      9 !== n.nodeType &&
      !(i = n.domBelongToZr || (n !== e && n === t.painterRoot));

    )
      n = n.parentNode
    return i
  }
  var cr = function (t, e) {
      ;(this.stopPropagation = Vt),
        (this.stopImmediatePropagation = Vt),
        (this.preventDefault = Vt),
        (this.type = e.type),
        (this.target = this.currentTarget = t.dom),
        (this.pointerType = e.pointerType),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY)
    },
    pr = {
      mousedown: function (t) {
        ;(t = Ie(this.dom, t)),
          (this.__mayPointerCapture = [t.zrX, t.zrY]),
          this.trigger('mousedown', t)
      },
      mousemove: function (t) {
        t = Ie(this.dom, t)
        var e = this.__mayPointerCapture
        !e ||
          (t.zrX === e[0] && t.zrY === e[1]) ||
          this.__togglePointerCapture(!0),
          this.trigger('mousemove', t)
      },
      mouseup: function (t) {
        ;(t = Ie(this.dom, t)),
          this.__togglePointerCapture(!1),
          this.trigger('mouseup', t)
      },
      mouseout: function (t) {
        hr(this, (t = Ie(this.dom, t)).toElement || t.relatedTarget) ||
          (this.__pointerCapturing && (t.zrEventControl = 'no_globalout'),
          this.trigger('mouseout', t))
      },
      wheel: function (t) {
        ;(sr = !0), (t = Ie(this.dom, t)), this.trigger('mousewheel', t)
      },
      mousewheel: function (t) {
        sr || ((t = Ie(this.dom, t)), this.trigger('mousewheel', t))
      },
      touchstart: function (t) {
        ur((t = Ie(this.dom, t))),
          (this.__lastTouchMoment = new Date()),
          this.handler.processGesture(t, 'start'),
          pr.mousemove.call(this, t),
          pr.mousedown.call(this, t)
      },
      touchmove: function (t) {
        ur((t = Ie(this.dom, t))),
          this.handler.processGesture(t, 'change'),
          pr.mousemove.call(this, t)
      },
      touchend: function (t) {
        ur((t = Ie(this.dom, t))),
          this.handler.processGesture(t, 'end'),
          pr.mouseup.call(this, t),
          +new Date() - +this.__lastTouchMoment < 300 && pr.click.call(this, t)
      },
      pointerdown: function (t) {
        pr.mousedown.call(this, t)
      },
      pointermove: function (t) {
        lr(t) || pr.mousemove.call(this, t)
      },
      pointerup: function (t) {
        pr.mouseup.call(this, t)
      },
      pointerout: function (t) {
        lr(t) || pr.mouseout.call(this, t)
      }
    },
    dr =
      (B(['click', 'dblclick', 'contextmenu'], function (e) {
        pr[e] = function (t) {
          ;(t = Ie(this.dom, t)), this.trigger(e, t)
        }
      }),
      {
        pointermove: function (t) {
          lr(t) || dr.mousemove.call(this, t)
        },
        pointerup: function (t) {
          dr.mouseup.call(this, t)
        },
        mousemove: function (t) {
          this.trigger('mousemove', t)
        },
        mouseup: function (t) {
          var e = this.__pointerCapturing
          this.__togglePointerCapture(!1),
            this.trigger('mouseup', t),
            e &&
              ((t.zrEventControl = 'only_globalout'),
              this.trigger('mouseout', t))
        }
      })
  function fr (i, r) {
    var o = r.domHandlers
    b.pointerEventsSupported
      ? B(rr.pointer, function (e) {
          yr(r, e, function (t) {
            o[e].call(i, t)
          })
        })
      : (b.touchEventsSupported &&
          B(rr.touch, function (n) {
            yr(r, n, function (t) {
              var e
              o[n].call(i, t),
                ((e = r).touching = !0),
                null != e.touchTimer &&
                  (clearTimeout(e.touchTimer), (e.touchTimer = null)),
                (e.touchTimer = setTimeout(function () {
                  ;(e.touching = !1), (e.touchTimer = null)
                }, 700))
            })
          }),
        B(rr.mouse, function (e) {
          yr(r, e, function (t) {
            ;(t = Ce(t)), r.touching || o[e].call(i, t)
          })
        }))
  }
  function gr (i, r) {
    function t (n) {
      yr(
        r,
        n,
        function (t) {
          var e
          ;(t = Ce(t)),
            hr(i, t.target) ||
              ((e = t),
              (t = Ie(i.dom, new cr(i, e), !0)),
              r.domHandlers[n].call(i, t))
        },
        { capture: !0 }
      )
    }
    b.pointerEventsSupported ? B(ar, t) : b.touchEventsSupported || B(or, t)
  }
  function yr (t, e, n, i) {
    ;(t.mounted[e] = n),
      (t.listenerOpts[e] = i),
      t.domTarget.addEventListener(e, n, i)
  }
  function mr (t) {
    var e,
      n,
      i,
      r,
      o,
      a = t.mounted
    for (e in a)
      a.hasOwnProperty(e) &&
        ((n = t.domTarget),
        (i = e),
        (r = a[e]),
        (o = t.listenerOpts[e]),
        n.removeEventListener(i, r, o))
    t.mounted = {}
  }
  function vr (t, e) {
    ;(this.mounted = {}),
      (this.listenerOpts = {}),
      (this.touching = !1),
      (this.domTarget = t),
      (this.domHandlers = e)
  }
  u(wr, (_r = ue)),
    (wr.prototype.dispose = function () {
      mr(this._localHandlerScope), ir && mr(this._globalHandlerScope)
    }),
    (wr.prototype.setCursor = function (t) {
      this.dom.style && (this.dom.style.cursor = t || 'default')
    }),
    (wr.prototype.__togglePointerCapture = function (t) {
      var e
      ;(this.__mayPointerCapture = null),
        ir &&
          +this.__pointerCapturing ^ +t &&
          ((this.__pointerCapturing = t),
          (e = this._globalHandlerScope),
          t ? gr(this, e) : mr(e))
    })
  var _r,
    xr = wr
  function wr (t, e) {
    var n = _r.call(this) || this
    return (
      (n.__pointerCapturing = !1),
      (n.dom = t),
      (n.painterRoot = e),
      (n._localHandlerScope = new vr(t, pr)),
      ir && (n._globalHandlerScope = new vr(document, dr)),
      fr(n, n._localHandlerScope),
      n
    )
  }
  var n = 1,
    br = (n = b.hasGlobalWindow
      ? Math.max(
          window.devicePixelRatio ||
            (window.screen &&
              window.screen.deviceXDPI / window.screen.logicalXDPI) ||
            1,
          1
        )
      : n),
    Sr = '#333',
    Mr = '#ccc',
    Tr = Re
  function Cr (t) {
    return 5e-5 < t || t < -5e-5
  }
  var Ir = [],
    kr = [],
    Dr = Oe(),
    Ar = Math.abs,
    Pr =
      ((Lr.prototype.getLocalTransform = function (t) {
        return Lr.getLocalTransform(this, t)
      }),
      (Lr.prototype.setPosition = function (t) {
        ;(this.x = t[0]), (this.y = t[1])
      }),
      (Lr.prototype.setScale = function (t) {
        ;(this.scaleX = t[0]), (this.scaleY = t[1])
      }),
      (Lr.prototype.setSkew = function (t) {
        ;(this.skewX = t[0]), (this.skewY = t[1])
      }),
      (Lr.prototype.setOrigin = function (t) {
        ;(this.originX = t[0]), (this.originY = t[1])
      }),
      (Lr.prototype.needLocalTransform = function () {
        return (
          Cr(this.rotation) ||
          Cr(this.x) ||
          Cr(this.y) ||
          Cr(this.scaleX - 1) ||
          Cr(this.scaleY - 1) ||
          Cr(this.skewX) ||
          Cr(this.skewY)
        )
      }),
      (Lr.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          n = this.transform
        e || t
          ? ((n = n || Oe()),
            e ? this.getLocalTransform(n) : Tr(n),
            t && (e ? Be(n, t, n) : Ne(n, t)),
            (this.transform = n),
            this._resolveGlobalScaleRatio(n))
          : n && (Tr(n), (this.invTransform = null))
      }),
      (Lr.prototype._resolveGlobalScaleRatio = function (t) {
        var e,
          n,
          i = this.globalScaleRatio
        null != i &&
          1 !== i &&
          (this.getGlobalScale(Ir),
          (n = ((Ir[1] - (n = Ir[1] < 0 ? -1 : 1)) * i + n) / Ir[1] || 0),
          (t[0] *= i =
            ((Ir[0] - (e = Ir[0] < 0 ? -1 : 1)) * i + e) / Ir[0] || 0),
          (t[1] *= i),
          (t[2] *= n),
          (t[3] *= n)),
          (this.invTransform = this.invTransform || Oe()),
          Ve(this.invTransform, t)
      }),
      (Lr.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t; ) e.push(t), (t = t.parent)
        for (; (t = e.pop()); ) t.updateTransform()
        return this.transform
      }),
      (Lr.prototype.setLocalTransform = function (t) {
        var e, n, i, r
        t &&
          ((r = t[0] * t[0] + t[1] * t[1]),
          (i = t[2] * t[2] + t[3] * t[3]),
          (e = Math.atan2(t[1], t[0])),
          (n = Math.PI / 2 + e - Math.atan2(t[3], t[2])),
          (i = Math.sqrt(i) * Math.cos(n)),
          (r = Math.sqrt(r)),
          (this.skewX = n),
          (this.skewY = 0),
          (this.rotation = -e),
          (this.x = +t[4]),
          (this.y = +t[5]),
          (this.scaleX = r),
          (this.scaleY = i),
          (this.originX = 0),
          (this.originY = 0))
      }),
      (Lr.prototype.decomposeTransform = function () {
        var t, e, n
        this.transform &&
          ((e = this.parent),
          (t = this.transform),
          e && e.transform && (Be(kr, e.invTransform, t), (t = kr)),
          (e = this.originX),
          (n = this.originY),
          (e || n) &&
            ((Dr[4] = e),
            (Dr[5] = n),
            Be(kr, t, Dr),
            (kr[4] -= e),
            (kr[5] -= n),
            (t = kr)),
          this.setLocalTransform(t))
      }),
      (Lr.prototype.getGlobalScale = function (t) {
        var e = this.transform
        return (
          (t = t || []),
          e
            ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
              (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
              e[0] < 0 && (t[0] = -t[0]),
              e[3] < 0 && (t[1] = -t[1]))
            : ((t[0] = 1), (t[1] = 1)),
          t
        )
      }),
      (Lr.prototype.transformCoordToLocal = function (t, e) {
        ;(t = [t, e]), (e = this.invTransform)
        return e && ne(t, t, e), t
      }),
      (Lr.prototype.transformCoordToGlobal = function (t, e) {
        ;(t = [t, e]), (e = this.transform)
        return e && ne(t, t, e), t
      }),
      (Lr.prototype.getLineScale = function () {
        var t = this.transform
        return t && 1e-10 < Ar(t[0] - 1) && 1e-10 < Ar(t[3] - 1)
          ? Math.sqrt(Ar(t[0] * t[3] - t[2] * t[1]))
          : 1
      }),
      (Lr.prototype.copyTransform = function (t) {
        Rr(this, t)
      }),
      (Lr.getLocalTransform = function (t, e) {
        e = e || []
        var n = t.originX || 0,
          i = t.originY || 0,
          r = t.scaleX,
          o = t.scaleY,
          a = t.anchorX,
          s = t.anchorY,
          l = t.rotation || 0,
          u = t.x,
          h = t.y,
          c = t.skewX ? Math.tan(t.skewX) : 0,
          t = t.skewY ? Math.tan(-t.skewY) : 0
        return (
          n || i || a || s
            ? ((e[4] = -(a = n + a) * r - c * (s = i + s) * o),
              (e[5] = -s * o - t * a * r))
            : (e[4] = e[5] = 0),
          (e[0] = r),
          (e[3] = o),
          (e[1] = t * r),
          (e[2] = c * o),
          l && Ee(e, e, l),
          (e[4] += n + u),
          (e[5] += i + h),
          e
        )
      }),
      (Lr.initDefaultProps =
        (((n = Lr.prototype).scaleX = n.scaleY = n.globalScaleRatio = 1),
        void (n.x =
          n.y =
          n.originX =
          n.originY =
          n.skewX =
          n.skewY =
          n.rotation =
          n.anchorX =
          n.anchorY =
            0))),
      Lr)
  function Lr () {}
  var Or = [
    'x',
    'y',
    'originX',
    'originY',
    'anchorX',
    'anchorY',
    'rotation',
    'scaleX',
    'scaleY',
    'skewX',
    'skewY'
  ]
  function Rr (t, e) {
    for (var n = 0; n < Or.length; n++) {
      var i = Or[n]
      t[i] = e[i]
    }
  }
  var Nr = {}
  function Br (t, e) {
    var n = Nr[(e = e || Z)],
      i = (n = n || (Nr[e] = new ei(500))).get(t)
    return null == i && ((i = q.measureText(t, e).width), n.put(t, i)), i
  }
  function zr (t, e, n, i) {
    ;(t = Br(t, e)), (e = Hr(e)), (n = Fr(0, t, n)), (i = Vr(0, e, i))
    return new U(n, i, t, e)
  }
  function Er (t, e, n, i) {
    var r = ((t || '') + '').split('\n')
    if (1 === r.length) return zr(r[0], e, n, i)
    for (var o = new U(0, 0, 0, 0), a = 0; a < r.length; a++) {
      var s = zr(r[a], e, n, i)
      0 === a ? o.copy(s) : o.union(s)
    }
    return o
  }
  function Fr (t, e, n) {
    return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t
  }
  function Vr (t, e, n) {
    return 'middle' === n ? (t -= e / 2) : 'bottom' === n && (t -= e), t
  }
  function Hr (t) {
    return Br('国', t)
  }
  function Wr (t, e) {
    return 'string' == typeof t
      ? 0 <= t.lastIndexOf('%')
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : t
  }
  function Gr (t, e, n) {
    var i = e.position || 'inside',
      r = null != e.distance ? e.distance : 5,
      o = n.height,
      a = n.width,
      s = o / 2,
      l = n.x,
      u = n.y,
      h = 'left',
      c = 'top'
    if (i instanceof Array)
      (l += Wr(i[0], n.width)), (u += Wr(i[1], n.height)), (c = h = null)
    else
      switch (i) {
        case 'left':
          ;(l -= r), (u += s), (h = 'right'), (c = 'middle')
          break
        case 'right':
          ;(l += r + a), (u += s), (c = 'middle')
          break
        case 'top':
          ;(l += a / 2), (u -= r), (h = 'center'), (c = 'bottom')
          break
        case 'bottom':
          ;(l += a / 2), (u += o + r), (h = 'center')
          break
        case 'inside':
          ;(l += a / 2), (u += s), (h = 'center'), (c = 'middle')
          break
        case 'insideLeft':
          ;(l += r), (u += s), (c = 'middle')
          break
        case 'insideRight':
          ;(l += a - r), (u += s), (h = 'right'), (c = 'middle')
          break
        case 'insideTop':
          ;(l += a / 2), (u += r), (h = 'center')
          break
        case 'insideBottom':
          ;(l += a / 2), (u += o - r), (h = 'center'), (c = 'bottom')
          break
        case 'insideTopLeft':
          ;(l += r), (u += r)
          break
        case 'insideTopRight':
          ;(l += a - r), (u += r), (h = 'right')
          break
        case 'insideBottomLeft':
          ;(l += r), (u += o - r), (c = 'bottom')
          break
        case 'insideBottomRight':
          ;(l += a - r), (u += o - r), (h = 'right'), (c = 'bottom')
      }
    return (
      ((t = t || {}).x = l), (t.y = u), (t.align = h), (t.verticalAlign = c), t
    )
  }
  var Ur,
    Xr = '__zr_normal__',
    Yr = Or.concat(['ignore']),
    qr = ht(
      Or,
      function (t, e) {
        return (t[e] = !0), t
      },
      { ignore: !1 }
    ),
    jr = {},
    Zr = new U(0, 0, 0, 0),
    n =
      ((i.prototype._init = function (t) {
        this.attr(t)
      }),
      (i.prototype.drift = function (t, e, n) {
        switch (this.draggable) {
          case 'horizontal':
            e = 0
            break
          case 'vertical':
            t = 0
        }
        var i = this.transform
        ;((i = i || (this.transform = [1, 0, 0, 1, 0, 0]))[4] += t),
          (i[5] += e),
          this.decomposeTransform(),
          this.markRedraw()
      }),
      (i.prototype.beforeUpdate = function () {}),
      (i.prototype.afterUpdate = function () {}),
      (i.prototype.update = function () {
        this.updateTransform(), this.__dirty && this.updateInnerText()
      }),
      (i.prototype.updateInnerText = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c = this._textContent
        !c ||
          (c.ignore && !t) ||
          (this.textConfig || (this.textConfig = {}),
          (l = (t = this.textConfig).local),
          (i = n = void 0),
          (r = !1),
          ((e = c.innerTransformable).parent = l ? this : null),
          (h = !1),
          e.copyTransform(c),
          null != t.position &&
            ((u = Zr),
            t.layoutRect
              ? u.copy(t.layoutRect)
              : u.copy(this.getBoundingRect()),
            l || u.applyTransform(this.transform),
            this.calculateTextPosition
              ? this.calculateTextPosition(jr, t, u)
              : Gr(jr, t, u),
            (e.x = jr.x),
            (e.y = jr.y),
            (n = jr.align),
            (i = jr.verticalAlign),
            (o = t.origin)) &&
            null != t.rotation &&
            ((s = a = void 0),
            (s =
              'center' === o
                ? ((a = 0.5 * u.width), 0.5 * u.height)
                : ((a = Wr(o[0], u.width)), Wr(o[1], u.height))),
            (h = !0),
            (e.originX = -e.x + a + (l ? 0 : u.x)),
            (e.originY = -e.y + s + (l ? 0 : u.y))),
          null != t.rotation && (e.rotation = t.rotation),
          (o = t.offset) &&
            ((e.x += o[0]),
            (e.y += o[1]),
            h || ((e.originX = -o[0]), (e.originY = -o[1]))),
          (a =
            null == t.inside
              ? 'string' == typeof t.position &&
                0 <= t.position.indexOf('inside')
              : t.inside),
          (s =
            this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {})),
          (h = u = l = void 0),
          a && this.canBeInsideText()
            ? ((l = t.insideFill),
              (u = t.insideStroke),
              (null != l && 'auto' !== l) || (l = this.getInsideTextFill()),
              (null != u && 'auto' !== u) ||
                ((u = this.getInsideTextStroke(l)), (h = !0)))
            : ((l = t.outsideFill),
              (u = t.outsideStroke),
              (null != l && 'auto' !== l) || (l = this.getOutsideFill()),
              (null != u && 'auto' !== u) ||
                ((u = this.getOutsideStroke(l)), (h = !0))),
          ((l = l || '#000') === s.fill &&
            u === s.stroke &&
            h === s.autoStroke &&
            n === s.align &&
            i === s.verticalAlign) ||
            ((r = !0),
            (s.fill = l),
            (s.stroke = u),
            (s.autoStroke = h),
            (s.align = n),
            (s.verticalAlign = i),
            c.setDefaultTextStyle(s)),
          (c.__dirty |= vn),
          r && c.dirtyStyle(!0))
      }),
      (i.prototype.canBeInsideText = function () {
        return !0
      }),
      (i.prototype.getInsideTextFill = function () {
        return '#fff'
      }),
      (i.prototype.getInsideTextStroke = function (t) {
        return '#000'
      }),
      (i.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? Mr : Sr
      }),
      (i.prototype.getOutsideStroke = function (t) {
        for (
          var e = this.__zr && this.__zr.getBackgroundColor(),
            n = 'string' == typeof e && gi(e),
            i = (n = n || [255, 255, 255, 1])[3],
            r = this.__zr.isDarkMode(),
            o = 0;
          o < 3;
          o++
        )
          n[o] = n[o] * i + (r ? 0 : 255) * (1 - i)
        return (n[3] = 1), xi(n, 'rgba')
      }),
      (i.prototype.traverse = function (t, e) {}),
      (i.prototype.attrKV = function (t, e) {
        'textConfig' === t
          ? this.setTextConfig(e)
          : 'textContent' === t
          ? this.setTextContent(e)
          : 'clipPath' === t
          ? this.setClipPath(e)
          : 'extra' === t
          ? ((this.extra = this.extra || {}), O(this.extra, e))
          : (this[t] = e)
      }),
      (i.prototype.hide = function () {
        ;(this.ignore = !0), this.markRedraw()
      }),
      (i.prototype.show = function () {
        ;(this.ignore = !1), this.markRedraw()
      }),
      (i.prototype.attr = function (t, e) {
        if ('string' == typeof t) this.attrKV(t, e)
        else if (L(t))
          for (var n = R(t), i = 0; i < n.length; i++) {
            var r = n[i]
            this.attrKV(r, t[r])
          }
        return this.markRedraw(), this
      }),
      (i.prototype.saveCurrentToNormalState = function (t) {
        this._innerSaveToNormal(t)
        for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
          var i = this.animators[n],
            r = i.__fromStateTransition
          i.getLoop() ||
            (r && r !== Xr) ||
            ((r = (r = i.targetName) ? e[r] : e), i.saveTo(r))
        }
      }),
      (i.prototype._innerSaveToNormal = function (t) {
        var e = (e = this._normalState) || (this._normalState = {})
        t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
          this._savePrimaryToNormal(t, e, Yr)
      }),
      (i.prototype._savePrimaryToNormal = function (t, e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i]
          null == t[r] || r in e || (e[r] = this[r])
        }
      }),
      (i.prototype.hasState = function () {
        return 0 < this.currentStates.length
      }),
      (i.prototype.getState = function (t) {
        return this.states[t]
      }),
      (i.prototype.ensureState = function (t) {
        var e = this.states
        return e[t] || (e[t] = {}), e[t]
      }),
      (i.prototype.clearStates = function (t) {
        this.useState(Xr, !1, t)
      }),
      (i.prototype.useState = function (t, e, n, i) {
        var r = t === Xr
        if (this.hasState() || !r) {
          var o,
            a = this.currentStates,
            s = this.stateTransition
          if (!(0 <= I(a, t)) || (!e && 1 !== a.length)) {
            if (
              (o =
                (o = this.stateProxy && !r ? this.stateProxy(t) : o) ||
                (this.states && this.states[t])) ||
              r
            )
              return (
                r || this.saveCurrentToNormalState(o),
                (a = !!((o && o.hoverLayer) || i)) &&
                  this._toggleHoverLayerFlag(!0),
                this._applyStateObj(
                  t,
                  o,
                  this._normalState,
                  e,
                  !n && !this.__inHover && s && 0 < s.duration,
                  s
                ),
                (i = this._textContent),
                (s = this._textGuide),
                i && i.useState(t, e, n, a),
                s && s.useState(t, e, n, a),
                r
                  ? ((this.currentStates = []), (this._normalState = {}))
                  : e
                  ? this.currentStates.push(t)
                  : (this.currentStates = [t]),
                this._updateAnimationTargets(),
                this.markRedraw(),
                !a &&
                  this.__inHover &&
                  (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~vn)),
                o
              )
            ot('State ' + t + ' not exists.')
          }
        }
      }),
      (i.prototype.useStates = function (t, e, n) {
        if (t.length) {
          var i = [],
            r = this.currentStates,
            o = t.length,
            a = o === r.length
          if (a)
            for (var s = 0; s < o; s++)
              if (t[s] !== r[s]) {
                a = !1
                break
              }
          if (!a) {
            for (s = 0; s < o; s++) {
              var l = t[s],
                u = void 0
              ;(u =
                (u = this.stateProxy ? this.stateProxy(l, t) : u) ||
                this.states[l]) && i.push(u)
            }
            var h = i[o - 1],
              h = !!((h && h.hoverLayer) || n),
              n = (h && this._toggleHoverLayerFlag(!0), this._mergeStates(i)),
              c = this.stateTransition,
              n =
                (this.saveCurrentToNormalState(n),
                this._applyStateObj(
                  t.join(','),
                  n,
                  this._normalState,
                  !1,
                  !e && !this.__inHover && c && 0 < c.duration,
                  c
                ),
                this._textContent),
              c = this._textGuide
            n && n.useStates(t, e, h),
              c && c.useStates(t, e, h),
              this._updateAnimationTargets(),
              (this.currentStates = t.slice()),
              this.markRedraw(),
              !h &&
                this.__inHover &&
                (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~vn))
          }
        } else this.clearStates()
      }),
      (i.prototype._updateAnimationTargets = function () {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t]
          e.targetName && e.changeTarget(this[e.targetName])
        }
      }),
      (i.prototype.removeState = function (t) {
        var e,
          t = I(this.currentStates, t)
        0 <= t &&
          ((e = this.currentStates.slice()).splice(t, 1), this.useStates(e))
      }),
      (i.prototype.replaceState = function (t, e, n) {
        var i = this.currentStates.slice(),
          t = I(i, t),
          r = 0 <= I(i, e)
        0 <= t ? (r ? i.splice(t, 1) : (i[t] = e)) : n && !r && i.push(e),
          this.useStates(i)
      }),
      (i.prototype.toggleState = function (t, e) {
        e ? this.useState(t, !0) : this.removeState(t)
      }),
      (i.prototype._mergeStates = function (t) {
        for (var e, n = {}, i = 0; i < t.length; i++) {
          var r = t[i]
          O(n, r), r.textConfig && O((e = e || {}), r.textConfig)
        }
        return e && (n.textConfig = e), n
      }),
      (i.prototype._applyStateObj = function (t, e, n, i, r, o) {
        var a = !(e && i)
        e && e.textConfig
          ? ((this.textConfig = O({}, (i ? this : n).textConfig)),
            O(this.textConfig, e.textConfig))
          : a && n.textConfig && (this.textConfig = n.textConfig)
        for (var s = {}, l = !1, u = 0; u < Yr.length; u++) {
          var h = Yr[u],
            c = r && qr[h]
          e && null != e[h]
            ? c
              ? ((l = !0), (s[h] = e[h]))
              : (this[h] = e[h])
            : a &&
              null != n[h] &&
              (c ? ((l = !0), (s[h] = n[h])) : (this[h] = n[h]))
        }
        if (!r)
          for (u = 0; u < this.animators.length; u++) {
            var p = this.animators[u],
              d = p.targetName
            p.getLoop() || p.__changeFinalValue(d ? (e || n)[d] : e || n)
          }
        l && this._transitionState(t, s, o)
      }),
      (i.prototype._attachComponent = function (t) {
        var e
        ;(t.__zr && !t.__hostTarget) ||
          (t !== this &&
            ((e = this.__zr) && t.addSelfToZr(e),
            (t.__zr = e),
            (t.__hostTarget = this)))
      }),
      (i.prototype._detachComponent = function (t) {
        t.__zr && t.removeSelfFromZr(t.__zr),
          (t.__zr = null),
          (t.__hostTarget = null)
      }),
      (i.prototype.getClipPath = function () {
        return this._clipPath
      }),
      (i.prototype.setClipPath = function (t) {
        this._clipPath && this._clipPath !== t && this.removeClipPath(),
          this._attachComponent(t),
          (this._clipPath = t),
          this.markRedraw()
      }),
      (i.prototype.removeClipPath = function () {
        var t = this._clipPath
        t &&
          (this._detachComponent(t), (this._clipPath = null), this.markRedraw())
      }),
      (i.prototype.getTextContent = function () {
        return this._textContent
      }),
      (i.prototype.setTextContent = function (t) {
        var e = this._textContent
        e !== t &&
          (e && e !== t && this.removeTextContent(),
          (t.innerTransformable = new Pr()),
          this._attachComponent(t),
          (this._textContent = t),
          this.markRedraw())
      }),
      (i.prototype.setTextConfig = function (t) {
        this.textConfig || (this.textConfig = {}),
          O(this.textConfig, t),
          this.markRedraw()
      }),
      (i.prototype.removeTextConfig = function () {
        ;(this.textConfig = null), this.markRedraw()
      }),
      (i.prototype.removeTextContent = function () {
        var t = this._textContent
        t &&
          ((t.innerTransformable = null),
          this._detachComponent(t),
          (this._textContent = null),
          (this._innerTextDefaultStyle = null),
          this.markRedraw())
      }),
      (i.prototype.getTextGuideLine = function () {
        return this._textGuide
      }),
      (i.prototype.setTextGuideLine = function (t) {
        this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
          this._attachComponent(t),
          (this._textGuide = t),
          this.markRedraw()
      }),
      (i.prototype.removeTextGuideLine = function () {
        var t = this._textGuide
        t &&
          (this._detachComponent(t),
          (this._textGuide = null),
          this.markRedraw())
      }),
      (i.prototype.markRedraw = function () {
        this.__dirty |= vn
        var t = this.__zr
        t && (this.__inHover ? t.refreshHover() : t.refresh()),
          this.__hostTarget && this.__hostTarget.markRedraw()
      }),
      (i.prototype.dirty = function () {
        this.markRedraw()
      }),
      (i.prototype._toggleHoverLayerFlag = function (t) {
        this.__inHover = t
        var e = this._textContent,
          n = this._textGuide
        e && (e.__inHover = t), n && (n.__inHover = t)
      }),
      (i.prototype.addSelfToZr = function (t) {
        if (this.__zr !== t) {
          this.__zr = t
          var e = this.animators
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n])
          this._clipPath && this._clipPath.addSelfToZr(t),
            this._textContent && this._textContent.addSelfToZr(t),
            this._textGuide && this._textGuide.addSelfToZr(t)
        }
      }),
      (i.prototype.removeSelfFromZr = function (t) {
        if (this.__zr) {
          this.__zr = null
          var e = this.animators
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n])
          this._clipPath && this._clipPath.removeSelfFromZr(t),
            this._textContent && this._textContent.removeSelfFromZr(t),
            this._textGuide && this._textGuide.removeSelfFromZr(t)
        }
      }),
      (i.prototype.animate = function (t, e, n) {
        var i = t ? this[t] : this,
          i = new Zi(i, e, n)
        return t && (i.targetName = t), this.addAnimator(i, t), i
      }),
      (i.prototype.addAnimator = function (n, t) {
        var e = this.__zr,
          i = this
        n
          .during(function () {
            i.updateDuringAnimation(t)
          })
          .done(function () {
            var t = i.animators,
              e = I(t, n)
            0 <= e && t.splice(e, 1)
          }),
          this.animators.push(n),
          e && e.animation.addAnimator(n),
          e && e.wakeUp()
      }),
      (i.prototype.updateDuringAnimation = function (t) {
        this.markRedraw()
      }),
      (i.prototype.stopAnimation = function (t, e) {
        for (var n = this.animators, i = n.length, r = [], o = 0; o < i; o++) {
          var a = n[o]
          t && t !== a.scope ? r.push(a) : a.stop(e)
        }
        return (this.animators = r), this
      }),
      (i.prototype.animateTo = function (t, e, n) {
        $r(this, t, e, n)
      }),
      (i.prototype.animateFrom = function (t, e, n) {
        $r(this, t, e, n, !0)
      }),
      (i.prototype._transitionState = function (t, e, n, i) {
        for (var r = $r(this, e, n, i), o = 0; o < r.length; o++)
          r[o].__fromStateTransition = t
      }),
      (i.prototype.getBoundingRect = function () {
        return null
      }),
      (i.prototype.getPaintRect = function () {
        return null
      }),
      (i.initDefaultProps =
        (((Ur = i.prototype).type = 'element'),
        (Ur.name = ''),
        (Ur.ignore =
          Ur.silent =
          Ur.isGroup =
          Ur.draggable =
          Ur.dragging =
          Ur.ignoreClip =
          Ur.__inHover =
            !1),
        (Ur.__dirty = vn),
        void (
          Object.defineProperty &&
          (Kr('position', '_legacyPos', 'x', 'y'),
          Kr('scale', '_legacyScale', 'scaleX', 'scaleY'),
          Kr('origin', '_legacyOrigin', 'originX', 'originY'))
        ))),
      i)
  function i (t) {
    ;(this.id = it++),
      (this.animators = []),
      (this.currentStates = []),
      (this.states = {}),
      this._init(t)
  }
  function Kr (t, e, n, i) {
    function r (e, t) {
      Object.defineProperty(t, 0, {
        get: function () {
          return e[n]
        },
        set: function (t) {
          e[n] = t
        }
      }),
        Object.defineProperty(t, 1, {
          get: function () {
            return e[i]
          },
          set: function (t) {
            e[i] = t
          }
        })
    }
    Object.defineProperty(Ur, t, {
      get: function () {
        return this[e] || r(this, (this[e] = [])), this[e]
      },
      set: function (t) {
        ;(this[n] = t[0]), (this[i] = t[1]), (this[e] = t), r(this, t)
      }
    })
  }
  function $r (t, e, n, i, r) {
    function o () {
      ;(u = !0), --l <= 0 && (u ? h && h() : c && c())
    }
    function a () {
      --l <= 0 && (u ? h && h() : c && c())
    }
    var s = [],
      l =
        (!(function t (e, n, i, r, o, a, s, l) {
          for (
            var u = R(r),
              h = o.duration,
              c = o.delay,
              p = o.additive,
              d = o.setToFinal,
              f = !L(a),
              g = e.animators,
              y = [],
              m = 0;
            m < u.length;
            m++
          ) {
            var v = u[m],
              _ = r[v]
            null != _ && null != i[v] && (f || a[v])
              ? !L(_) || ut(_) || vt(_)
                ? y.push(v)
                : n
                ? l || ((i[v] = _), e.updateDuringAnimation(n))
                : t(e, v, i[v], _, o, a && a[v], s, l)
              : l || ((i[v] = _), e.updateDuringAnimation(n), y.push(v))
          }
          var x = y.length
          if (!p && x)
            for (var w = 0; w < g.length; w++) {
              var b
              ;(S = g[w]).targetName === n &&
                S.stopTracks(y) &&
                ((b = I(g, S)), g.splice(b, 1))
            }
          if (
            (o.force ||
              (x = (y = ct(y, function (t) {
                return !to(r[t], i[t])
              })).length),
            0 < x || (o.force && !s.length))
          ) {
            var S,
              M = void 0,
              T = void 0,
              C = void 0
            if (l)
              for (T = {}, d && (M = {}), w = 0; w < x; w++)
                (T[(v = y[w])] = i[v]), d ? (M[v] = r[v]) : (i[v] = r[v])
            else if (d)
              for (C = {}, w = 0; w < x; w++)
                (C[(v = y[w])] = Gi(i[v])), Jr(i, r, v)
            ;((S = new Zi(
              i,
              !1,
              !1,
              p
                ? ct(g, function (t) {
                    return t.targetName === n
                  })
                : null
            )).targetName = n),
              o.scope && (S.scope = o.scope),
              d && M && S.whenWithKeys(0, M, y),
              C && S.whenWithKeys(0, C, y),
              S.whenWithKeys(null == h ? 500 : h, l ? T : r, y).delay(c || 0),
              e.addAnimator(S, n),
              s.push(S)
          }
        })(t, '', t, e, (n = n || {}), i, s, r),
        s.length),
      u = !1,
      h = n.done,
      c = n.aborted
    l || (h && h()),
      0 < s.length &&
        n.during &&
        s[0].during(function (t, e) {
          n.during(e)
        })
    for (var p = 0; p < s.length; p++) {
      var d = s[p]
      d.done(o),
        d.aborted(a),
        n.force && d.duration(n.duration),
        d.start(n.easing)
    }
    return s
  }
  function Qr (t, e, n) {
    for (var i = 0; i < n; i++) t[i] = e[i]
  }
  function Jr (t, e, n) {
    if (ut(e[n]))
      if ((ut(t[n]) || (t[n] = []), yt(e[n]))) {
        var i = e[n].length
        t[n].length !== i &&
          ((t[n] = new e[n].constructor(i)), Qr(t[n], e[n], i))
      } else {
        var r = e[n],
          o = t[n],
          a = r.length
        if (ut(r[0]))
          for (var s = r[0].length, l = 0; l < a; l++)
            o[l] ? Qr(o[l], r[l], s) : (o[l] = Array.prototype.slice.call(r[l]))
        else Qr(o, r, a)
        o.length = r.length
      }
    else t[n] = e[n]
  }
  function to (t, e) {
    return (
      t === e ||
      (ut(t) &&
        ut(e) &&
        (function (t, e) {
          var n = t.length
          if (n !== e.length) return !1
          for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1
          return !0
        })(t, e))
    )
  }
  lt(n, ue), lt(n, Pr)
  u(io, (eo = n)),
    (io.prototype.childrenRef = function () {
      return this._children
    }),
    (io.prototype.children = function () {
      return this._children.slice()
    }),
    (io.prototype.childAt = function (t) {
      return this._children[t]
    }),
    (io.prototype.childOfName = function (t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n]
    }),
    (io.prototype.childCount = function () {
      return this._children.length
    }),
    (io.prototype.add = function (t) {
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          (this._children.push(t), this._doAdd(t)),
        this
      )
    }),
    (io.prototype.addBefore = function (t, e) {
      var n
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          e &&
          e.parent === this &&
          0 <= (e = (n = this._children).indexOf(e)) &&
          (n.splice(e, 0, t), this._doAdd(t)),
        this
      )
    }),
    (io.prototype.replace = function (t, e) {
      t = I(this._children, t)
      return 0 <= t && this.replaceAt(e, t), this
    }),
    (io.prototype.replaceAt = function (t, e) {
      var n = this._children,
        i = n[e]
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          t !== i &&
          ((n[e] = t),
          (i.parent = null),
          (n = this.__zr) && i.removeSelfFromZr(n),
          this._doAdd(t)),
        this
      )
    }),
    (io.prototype._doAdd = function (t) {
      t.parent && t.parent.remove(t)
      var e = (t.parent = this).__zr
      e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh()
    }),
    (io.prototype.remove = function (t) {
      var e = this.__zr,
        n = this._children,
        i = I(n, t)
      return (
        i < 0 ||
          (n.splice(i, 1),
          (t.parent = null),
          e && t.removeSelfFromZr(e),
          e && e.refresh()),
        this
      )
    }),
    (io.prototype.removeAll = function () {
      for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
        var i = t[n]
        e && i.removeSelfFromZr(e), (i.parent = null)
      }
      return (t.length = 0), this
    }),
    (io.prototype.eachChild = function (t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i]
        t.call(e, r, i)
      }
      return this
    }),
    (io.prototype.traverse = function (t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n],
          r = t.call(e, i)
        i.isGroup && !r && i.traverse(t, e)
      }
      return this
    }),
    (io.prototype.addSelfToZr = function (t) {
      eo.prototype.addSelfToZr.call(this, t)
      for (var e = 0; e < this._children.length; e++)
        this._children[e].addSelfToZr(t)
    }),
    (io.prototype.removeSelfFromZr = function (t) {
      eo.prototype.removeSelfFromZr.call(this, t)
      for (var e = 0; e < this._children.length; e++)
        this._children[e].removeSelfFromZr(t)
    }),
    (io.prototype.getBoundingRect = function (t) {
      for (
        var e = new U(0, 0, 0, 0),
          n = t || this._children,
          i = [],
          r = null,
          o = 0;
        o < n.length;
        o++
      ) {
        var a,
          s = n[o]
        s.ignore ||
          s.invisible ||
          ((a = s.getBoundingRect()),
          (s = s.getLocalTransform(i))
            ? (U.applyTransform(e, a, s), (r = r || e.clone()).union(e))
            : (r = r || a.clone()).union(a))
      }
      return r || e
    })
  var eo,
    no = io
  function io (t) {
    var e = eo.call(this) || this
    return (e.isGroup = !0), (e._children = []), e.attr(t), e
  }
  no.prototype.type = 'group'
  var ro = {},
    oo = {}
  ;(so.prototype.add = function (t) {
    t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
  }),
    (so.prototype.remove = function (t) {
      t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
    }),
    (so.prototype.configLayer = function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this.refresh()
    }),
    (so.prototype.setBackgroundColor = function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
        this.refresh(),
        (this._backgroundColor = t),
        (this._darkMode = (function (t) {
          if (t) {
            if ('string' == typeof t) return wi(t, 1) < 0.4
            if (t.colorStops) {
              for (var e = t.colorStops, n = 0, i = e.length, r = 0; r < i; r++)
                n += wi(e[r].color, 1)
              return (n /= i) < 0.4
            }
          }
          return !1
        })(t))
    }),
    (so.prototype.getBackgroundColor = function () {
      return this._backgroundColor
    }),
    (so.prototype.setDarkMode = function (t) {
      this._darkMode = t
    }),
    (so.prototype.isDarkMode = function () {
      return this._darkMode
    }),
    (so.prototype.refreshImmediately = function (t) {
      t || this.animation.update(!0),
        (this._needsRefresh = !1),
        this.painter.refresh(),
        (this._needsRefresh = !1)
    }),
    (so.prototype.refresh = function () {
      ;(this._needsRefresh = !0), this.animation.start()
    }),
    (so.prototype.flush = function () {
      this._flush(!1)
    }),
    (so.prototype._flush = function (t) {
      var e,
        n = Qi(),
        t =
          (this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
          this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately()),
          Qi())
      e
        ? ((this._stillFrameAccum = 0),
          this.trigger('rendered', { elapsedTime: t - n }))
        : 0 < this._sleepAfterStill &&
          (this._stillFrameAccum++,
          this._stillFrameAccum > this._sleepAfterStill) &&
          this.animation.stop()
    }),
    (so.prototype.setSleepAfterStill = function (t) {
      this._sleepAfterStill = t
    }),
    (so.prototype.wakeUp = function () {
      this.animation.start(), (this._stillFrameAccum = 0)
    }),
    (so.prototype.refreshHover = function () {
      this._needsRefreshHover = !0
    }),
    (so.prototype.refreshHoverImmediately = function () {
      ;(this._needsRefreshHover = !1),
        this.painter.refreshHover &&
          'canvas' === this.painter.getType() &&
          this.painter.refreshHover()
    }),
    (so.prototype.resize = function (t) {
      this.painter.resize((t = t || {}).width, t.height), this.handler.resize()
    }),
    (so.prototype.clearAnimation = function () {
      this.animation.clear()
    }),
    (so.prototype.getWidth = function () {
      return this.painter.getWidth()
    }),
    (so.prototype.getHeight = function () {
      return this.painter.getHeight()
    }),
    (so.prototype.setCursorStyle = function (t) {
      this.handler.setCursorStyle(t)
    }),
    (so.prototype.findHover = function (t, e) {
      return this.handler.findHover(t, e)
    }),
    (so.prototype.on = function (t, e, n) {
      return this.handler.on(t, e, n), this
    }),
    (so.prototype.off = function (t, e) {
      this.handler.off(t, e)
    }),
    (so.prototype.trigger = function (t, e) {
      this.handler.trigger(t, e)
    }),
    (so.prototype.clear = function () {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof no && t[e].removeSelfFromZr(this)
      this.storage.delAllRoots(), this.painter.clear()
    }),
    (so.prototype.dispose = function () {
      var t
      this.animation.stop(),
        this.clear(),
        this.storage.dispose(),
        this.painter.dispose(),
        this.handler.dispose(),
        (this.animation = this.storage = this.painter = this.handler = null),
        (t = this.id),
        delete oo[t]
    })
  var ao = so
  function so (t, e, n) {
    var i = this,
      r =
        ((this._sleepAfterStill = 10),
        (this._stillFrameAccum = 0),
        (this._needsRefresh = !0),
        (this._needsRefreshHover = !0),
        (this._darkMode = !1),
        (n = n || {}),
        (this.dom = e),
        (this.id = t),
        new Sn()),
      o = n.renderer || 'canvas',
      o =
        (ro[o] || (o = R(ro)[0]),
        (n.useDirtyRect = null != n.useDirtyRect && n.useDirtyRect),
        new ro[o](e, r, n, t)),
      e = n.ssr || o.ssrOnly
    ;(this.storage = r), (this.painter = o)
    var a,
      t = b.node || b.worker || e ? null : new xr(o.getViewportRoot(), o.root),
      s = n.useCoarsePointer
    ;(null == s || 'auto' === s ? b.touchEventsSupported : s) &&
      (a = N(n.pointerSize, 44)),
      (this.handler = new an(r, o, t, o.root, a)),
      (this.animation = new tr({
        stage: {
          update: e
            ? null
            : function () {
                return i._flush(!0)
              }
        }
      })),
      e || this.animation.start()
  }
  function lo (t, e) {
    t = new ao(it++, t, e)
    return (oo[t.id] = t)
  }
  function uo (t, e) {
    ro[t] = e
  }
  var ho = Object.freeze({
      __proto__: null,
      dispose: function (t) {
        t.dispose()
      },
      disposeAll: function () {
        for (var t in oo) oo.hasOwnProperty(t) && oo[t].dispose()
        oo = {}
      },
      getInstance: function (t) {
        return oo[t]
      },
      init: lo,
      registerPainter: uo,
      version: '5.4.4'
    }),
    co = 20
  function po (t, e, n, i) {
    var r = e[0],
      e = e[1],
      o = n[0],
      n = n[1],
      a = e - r,
      s = n - o
    if (0 == a) return 0 == s ? o : (o + n) / 2
    if (i)
      if (0 < a) {
        if (t <= r) return o
        if (e <= t) return n
      } else {
        if (r <= t) return o
        if (t <= e) return n
      }
    else {
      if (t === r) return o
      if (t === e) return n
    }
    return ((t - r) / a) * s + o
  }
  function fo (t, e) {
    switch (t) {
      case 'center':
      case 'middle':
        t = '50%'
        break
      case 'left':
      case 'top':
        t = '0%'
        break
      case 'right':
      case 'bottom':
        t = '100%'
    }
    return H(t)
      ? t.replace(/^\s+|\s+$/g, '').match(/%$/)
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : null == t
      ? NaN
      : +t
  }
  function go (t, e, n) {
    return (
      null == e && (e = 10),
      (e = Math.min(Math.max(0, e), co)),
      (t = (+t).toFixed(e)),
      n ? t : +t
    )
  }
  function yo (t) {
    if (((t = +t), isNaN(t))) return 0
    if (1e-14 < t)
      for (var e = 1, n = 0; n < 15; n++, e *= 10)
        if (Math.round(t * e) / e === t) return n
    return mo(t)
  }
  function mo (t) {
    var t = t.toString().toLowerCase(),
      e = t.indexOf('e'),
      n = 0 < e ? +t.slice(e + 1) : 0,
      e = 0 < e ? e : t.length,
      t = t.indexOf('.')
    return Math.max(0, (t < 0 ? 0 : e - 1 - t) - n)
  }
  function vo (t, e) {
    var n = Math.log,
      i = Math.LN10,
      t = Math.floor(n(t[1] - t[0]) / i),
      n = Math.round(n(Math.abs(e[1] - e[0])) / i),
      e = Math.min(Math.max(-t + n, 0), 20)
    return isFinite(e) ? e : 20
  }
  function _o (t, e) {
    var n = ht(
      t,
      function (t, e) {
        return t + (isNaN(e) ? 0 : e)
      },
      0
    )
    if (0 === n) return []
    for (
      var i = Math.pow(10, e),
        e = F(t, function (t) {
          return ((isNaN(t) ? 0 : t) / n) * i * 100
        }),
        r = 100 * i,
        o = F(e, function (t) {
          return Math.floor(t)
        }),
        a = ht(
          o,
          function (t, e) {
            return t + e
          },
          0
        ),
        s = F(e, function (t, e) {
          return t - o[e]
        });
      a < r;

    ) {
      for (
        var l = Number.NEGATIVE_INFINITY, u = null, h = 0, c = s.length;
        h < c;
        ++h
      )
        s[h] > l && ((l = s[h]), (u = h))
      ++o[u], (s[u] = 0), ++a
    }
    return F(o, function (t) {
      return t / i
    })
  }
  function xo (t) {
    var e = 2 * Math.PI
    return ((t % e) + e) % e
  }
  function wo (t) {
    return -1e-4 < t && t < 1e-4
  }
  var bo =
    /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/
  function So (t) {
    var e, n
    return t instanceof Date
      ? t
      : H(t)
      ? (e = bo.exec(t))
        ? e[8]
          ? ((n = +e[4] || 0),
            'Z' !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)),
            new Date(
              Date.UTC(
                +e[1],
                +(e[2] || 1) - 1,
                +e[3] || 1,
                n,
                +(e[5] || 0),
                +e[6] || 0,
                e[7] ? +e[7].substring(0, 3) : 0
              )
            ))
          : new Date(
              +e[1],
              +(e[2] || 1) - 1,
              +e[3] || 1,
              +e[4] || 0,
              +(e[5] || 0),
              +e[6] || 0,
              e[7] ? +e[7].substring(0, 3) : 0
            )
        : new Date(NaN)
      : null == t
      ? new Date(NaN)
      : new Date(Math.round(t))
  }
  function Mo (t) {
    return Math.pow(10, To(t))
  }
  function To (t) {
    var e
    return 0 === t
      ? 0
      : ((e = Math.floor(Math.log(t) / Math.LN10)),
        10 <= t / Math.pow(10, e) && e++,
        e)
  }
  function Co (t, e) {
    var n = To(t),
      i = Math.pow(10, n),
      r = t / i
    return (
      (t =
        (e
          ? r < 1.5
            ? 1
            : r < 2.5
            ? 2
            : r < 4
            ? 3
            : r < 7
            ? 5
            : 10
          : r < 1
          ? 1
          : r < 2
          ? 2
          : r < 3
          ? 3
          : r < 5
          ? 5
          : 10) * i),
      -20 <= n ? +t.toFixed(n < 0 ? -n : 0) : t
    )
  }
  function Io (t) {
    var e = parseFloat(t)
    return e == t && (0 !== e || !H(t) || t.indexOf('x') <= 0) ? e : NaN
  }
  function ko (t) {
    return !isNaN(Io(t))
  }
  function Do () {
    return Math.round(9 * Math.random())
  }
  function Ao (t, e) {
    return null == t
      ? e
      : null == e
      ? t
      : (t * e) /
        (function t (e, n) {
          return 0 === n ? e : t(n, e % n)
        })(t, e)
  }
  function f (t) {
    throw new Error(t)
  }
  function Po (t, e, n) {
    return (e - t) * n + t
  }
  var Lo = 'series\0',
    Oo = '\0_ec_\0'
  function Ro (t) {
    return t instanceof Array ? t : null == t ? [] : [t]
  }
  function No (t, e, n) {
    if (t) {
      ;(t[e] = t[e] || {}),
        (t.emphasis = t.emphasis || {}),
        (t.emphasis[e] = t.emphasis[e] || {})
      for (var i = 0, r = n.length; i < r; i++) {
        var o = n[i]
        !t.emphasis[e].hasOwnProperty(o) &&
          t[e].hasOwnProperty(o) &&
          (t.emphasis[e][o] = t[e][o])
      }
    }
  }
  var Bo = [
    'fontStyle',
    'fontWeight',
    'fontSize',
    'fontFamily',
    'rich',
    'tag',
    'color',
    'textBorderColor',
    'textBorderWidth',
    'width',
    'height',
    'lineHeight',
    'align',
    'verticalAlign',
    'baseline',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY',
    'textShadowColor',
    'textShadowBlur',
    'textShadowOffsetX',
    'textShadowOffsetY',
    'backgroundColor',
    'borderColor',
    'borderWidth',
    'borderRadius',
    'padding'
  ]
  function zo (t) {
    return !L(t) || V(t) || t instanceof Date ? t : t.value
  }
  function Eo (t, n, e) {
    var a,
      i,
      r,
      o,
      s,
      l,
      u,
      h,
      c,
      p,
      d = 'normalMerge' === e,
      f = 'replaceMerge' === e,
      g = 'replaceAll' === e,
      y = ((t = t || []), (n = (n || []).slice()), z()),
      e =
        (B(n, function (t, e) {
          L(t) || (n[e] = null)
        }),
        (function (t, e, n) {
          var i = []
          if ('replaceAll' !== n)
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              o && null != o.id && e.set(o.id, r),
                i.push({
                  existing: 'replaceMerge' === n || Go(o) ? null : o,
                  newOption: null,
                  keyInfo: null,
                  brandNew: null
                })
            }
          return i
        })(t, y, e))
    return (
      (d || f) &&
        ((u = e),
        (h = t),
        (c = y),
        B((p = n), function (t, e) {
          var n, i, r
          t &&
            null != t.id &&
            ((n = Vo(t.id)), null != (i = c.get(n))) &&
            (Ct(!(r = u[i]).newOption, 'Duplicated option on id "' + n + '".'),
            (r.newOption = t),
            (r.existing = h[i]),
            (p[e] = null))
        })),
      d &&
        ((s = e),
        B((l = n), function (t, e) {
          if (t && null != t.name)
            for (var n = 0; n < s.length; n++) {
              var i = s[n].existing
              if (
                !s[n].newOption &&
                i &&
                (null == i.id || null == t.id) &&
                !Go(t) &&
                !Go(i) &&
                Fo('name', i, t)
              )
                return (s[n].newOption = t), void (l[e] = null)
            }
        })),
      d || f
        ? ((r = e),
          (o = f),
          B(n, function (t) {
            if (t) {
              for (
                var e, n = 0;
                (e = r[n]) &&
                (e.newOption ||
                  Go(e.existing) ||
                  (e.existing && null != t.id && !Fo('id', t, e.existing)));

              )
                n++
              e
                ? ((e.newOption = t), (e.brandNew = o))
                : r.push({
                    newOption: t,
                    brandNew: o,
                    existing: null,
                    keyInfo: null
                  }),
                n++
            }
          }))
        : g &&
          ((i = e),
          B(n, function (t) {
            i.push({
              newOption: t,
              brandNew: !0,
              existing: null,
              keyInfo: null
            })
          })),
      (t = e),
      (a = z()),
      B(t, function (t) {
        var e = t.existing
        e && a.set(e.id, t)
      }),
      B(t, function (t) {
        var e = t.newOption
        Ct(
          !e || null == e.id || !a.get(e.id) || a.get(e.id) === t,
          'id duplicates: ' + (e && e.id)
        ),
          e && null != e.id && a.set(e.id, t),
          t.keyInfo || (t.keyInfo = {})
      }),
      B(t, function (t, e) {
        var n = t.existing,
          i = t.newOption,
          r = t.keyInfo
        if (L(i)) {
          if (((r.name = null != i.name ? Vo(i.name) : n ? n.name : Lo + e), n))
            r.id = Vo(n.id)
          else if (null != i.id) r.id = Vo(i.id)
          else
            for (var o = 0; (r.id = '\0' + r.name + '\0' + o++), a.get(r.id); );
          a.set(r.id, t)
        }
      }),
      e
    )
  }
  function Fo (t, e, n) {
    ;(e = Ho(e[t], null)), (n = Ho(n[t], null))
    return null != e && null != n && e === n
  }
  function Vo (t) {
    return Ho(t, '')
  }
  function Ho (t, e) {
    return null == t ? e : H(t) ? t : W(t) || ft(t) ? t + '' : e
  }
  function Wo (t) {
    t = t.name
    return !(!t || !t.indexOf(Lo))
  }
  function Go (t) {
    return t && null != t.id && 0 === Vo(t.id).indexOf(Oo)
  }
  function Uo (t, r, o) {
    B(t, function (t) {
      var e,
        n,
        i = t.newOption
      L(i) &&
        ((t.keyInfo.mainType = r),
        (t.keyInfo.subType =
          ((e = r),
          (i = i),
          (t = t.existing),
          (n = o),
          i.type || (t ? t.subType : n.determineSubType(e, i)))))
    })
  }
  function Xo (e, t) {
    return null != t.dataIndexInside
      ? t.dataIndexInside
      : null != t.dataIndex
      ? V(t.dataIndex)
        ? F(t.dataIndex, function (t) {
            return e.indexOfRawIndex(t)
          })
        : e.indexOfRawIndex(t.dataIndex)
      : null != t.name
      ? V(t.name)
        ? F(t.name, function (t) {
            return e.indexOfName(t)
          })
        : e.indexOfName(t.name)
      : void 0
  }
  function Yo () {
    var e = '__ec_inner_' + qo++
    return function (t) {
      return t[e] || (t[e] = {})
    }
  }
  var qo = Do()
  function jo (n, t, i) {
    var t = Zo(t, i),
      e = t.mainTypeSpecified,
      r = t.queryOptionMap,
      o = t.others,
      a = i ? i.defaultMainType : null
    return (
      !e && a && r.set(a, {}),
      r.each(function (t, e) {
        t = $o(n, e, t, {
          useDefault: a === e,
          enableAll: !i || null == i.enableAll || i.enableAll,
          enableNone: !i || null == i.enableNone || i.enableNone
        })
        ;(o[e + 'Models'] = t.models), (o[e + 'Model'] = t.models[0])
      }),
      o
    )
  }
  function Zo (t, r) {
    var e = H(t) ? (((e = {})[t + 'Index'] = 0), e) : t,
      o = z(),
      a = {},
      s = !1
    return (
      B(e, function (t, e) {
        var n, i
        'dataIndex' !== e && 'dataIndexInside' !== e
          ? ((n = (i = e.match(/^(\w+)(Index|Id|Name)$/) || [])[1]),
            (i = (i[2] || '').toLowerCase()),
            !n ||
              !i ||
              (r && r.includeMainTypes && I(r.includeMainTypes, n) < 0) ||
              ((s = s || !!n), ((o.get(n) || o.set(n, {}))[i] = t)))
          : (a[e] = t)
      }),
      { mainTypeSpecified: s, queryOptionMap: o, others: a }
    )
  }
  var Ko = { useDefault: !0, enableAll: !1, enableNone: !1 }
  function $o (t, e, n, i) {
    i = i || Ko
    var r = n.index,
      o = n.id,
      n = n.name,
      a = { models: null, specified: null != r || null != o || null != n }
    return (
      a.specified
        ? 'none' === r || !1 === r
          ? (Ct(
              i.enableNone,
              '`"none"` or `false` is not a valid value on index option.'
            ),
            (a.models = []))
          : ('all' === r &&
              (Ct(i.enableAll, '`"all"` is not a valid value on index option.'),
              (r = o = n = null)),
            (a.models = t.queryComponents({
              mainType: e,
              index: r,
              id: o,
              name: n
            })))
        : ((r = void 0),
          (a.models = i.useDefault && (r = t.getComponent(e)) ? [r] : [])),
      a
    )
  }
  function Qo (t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : (t[e] = n)
  }
  var Jo = '.',
    ta = '___EC__COMPONENT__CONTAINER___',
    ea = '___EC__EXTENDED_CLASS___'
  function na (t) {
    var e = { main: '', sub: '' }
    return (
      t && ((t = t.split(Jo)), (e.main = t[0] || ''), (e.sub = t[1] || '')), e
    )
  }
  function ia (t) {
    ;(t.$constructor = t).extend = function (t) {
      var e,
        n,
        i,
        r = this
      return (
        S((i = r)) && /^class\s/.test(Function.prototype.toString.call(i))
          ? (u(o, (n = r)), (e = o))
          : st(
              (e = function () {
                ;(t.$constructor || r).apply(this, arguments)
              }),
              this
            ),
        O(e.prototype, t),
        (e[ea] = !0),
        (e.extend = this.extend),
        (e.superCall = aa),
        (e.superApply = sa),
        (e.superClass = r),
        e
      )
      function o () {
        return n.apply(this, arguments) || this
      }
    }
  }
  function ra (t, e) {
    t.extend = e.extend
  }
  var oa = Math.round(10 * Math.random())
  function aa (t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i]
    return this.superClass.prototype[e].apply(t, n)
  }
  function sa (t, e, n) {
    return this.superClass.prototype[e].apply(t, n)
  }
  function la (t) {
    var r = {}
    ;(t.registerClass = function (t) {
      var e,
        n = t.type || t.prototype.type
      return (
        n &&
          (Ct(
            /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test((e = n)),
            'componentType "' + e + '" illegal'
          ),
          (e = na((t.prototype.type = n))).sub
            ? e.sub !== ta &&
              (((n = r[e.main]) && n[ta]) || ((n = r[e.main] = {})[ta] = !0),
              (n[e.sub] = t))
            : (r[e.main] = t)),
        t
      )
    }),
      (t.getClass = function (t, e, n) {
        var i = r[t]
        if ((i && i[ta] && (i = e ? i[e] : null), n && !i))
          throw new Error(
            e
              ? 'Component ' +
                t +
                '.' +
                (e || '') +
                ' is used but not imported.'
              : t + '.type should be specified.'
          )
        return i
      }),
      (t.getClassesByMainType = function (t) {
        var t = na(t),
          n = [],
          t = r[t.main]
        return (
          t && t[ta]
            ? B(t, function (t, e) {
                e !== ta && n.push(t)
              })
            : n.push(t),
          n
        )
      }),
      (t.hasClass = function (t) {
        t = na(t)
        return !!r[t.main]
      }),
      (t.getAllClassMainTypes = function () {
        var n = []
        return (
          B(r, function (t, e) {
            n.push(e)
          }),
          n
        )
      }),
      (t.hasSubTypes = function (t) {
        ;(t = na(t)), (t = r[t.main])
        return t && t[ta]
      })
  }
  function ua (a, s) {
    for (var t = 0; t < a.length; t++) a[t][1] || (a[t][1] = a[t][0])
    return (
      (s = s || !1),
      function (t, e, n) {
        for (var i = {}, r = 0; r < a.length; r++) {
          var o = a[r][1]
          ;(e && 0 <= I(e, o)) ||
            (n && I(n, o) < 0) ||
            (null != (o = t.getShallow(o, s)) && (i[a[r][0]] = o))
        }
        return i
      }
    )
  }
  var ha = ua([
      ['fill', 'color'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['opacity'],
      ['shadowColor']
    ]),
    ca =
      ((pa.prototype.getAreaStyle = function (t, e) {
        return ha(this, t, e)
      }),
      pa)
  function pa () {}
  var da = new ei(50)
  function fa (t, e, n, i, r) {
    return t
      ? 'string' == typeof t
        ? ((e && e.__zrImageSrc === t) ||
            !n ||
            ((n = { hostEl: n, cb: i, cbPayload: r }),
            (i = da.get(t))
              ? ya((e = i.image)) || i.pending.push(n)
              : (((e = q.loadImage(t, ga, ga)).__zrImageSrc = t),
                da.put(t, (e.__cachedImgObj = { image: e, pending: [n] })))),
          e)
        : t
      : e
  }
  function ga () {
    var t = this.__cachedImgObj
    this.onload = this.onerror = this.__cachedImgObj = null
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb
      i && i(this, n.cbPayload), n.hostEl.dirty()
    }
    t.pending.length = 0
  }
  function ya (t) {
    return t && t.width && t.height
  }
  var ma = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g
  function va (t, e, n, i, r) {
    if (!e) return ''
    var o = (t + '').split('\n')
    r = _a(e, n, i, r)
    for (var a = 0, s = o.length; a < s; a++) o[a] = xa(o[a], r)
    return o.join('\n')
  }
  function _a (t, e, n, i) {
    var r = O({}, (i = i || {})),
      o =
        ((r.font = e),
        (n = N(n, '...')),
        (r.maxIterations = N(i.maxIterations, 2)),
        (r.minChar = N(i.minChar, 0))),
      a = ((r.cnCharWidth = Br('国', e)), (r.ascCharWidth = Br('a', e)))
    r.placeholder = N(i.placeholder, '')
    for (var s = (t = Math.max(0, t - 1)), l = 0; l < o && a <= s; l++) s -= a
    i = Br(n, e)
    return (
      s < i && ((n = ''), (i = 0)),
      (s = t - i),
      (r.ellipsis = n),
      (r.ellipsisWidth = i),
      (r.contentWidth = s),
      (r.containerWidth = t),
      r
    )
  }
  function xa (t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth
    if (!n) return ''
    var o = Br(t, i)
    if (!(o <= n)) {
      for (var a = 0; ; a++) {
        if (o <= r || a >= e.maxIterations) {
          t += e.ellipsis
          break
        }
        var s =
            0 === a
              ? (function (t, e, n, i) {
                  for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
                    var s = t.charCodeAt(o)
                    r += 0 <= s && s <= 127 ? n : i
                  }
                  return o
                })(t, r, e.ascCharWidth, e.cnCharWidth)
              : 0 < o
              ? Math.floor((t.length * r) / o)
              : 0,
          o = Br((t = t.substr(0, s)), i)
      }
      '' === t && (t = e.placeholder)
    }
    return t
  }
  function wa () {
    ;(this.width = 0),
      (this.height = 0),
      (this.contentWidth = 0),
      (this.contentHeight = 0),
      (this.outerWidth = 0),
      (this.outerHeight = 0),
      (this.lines = [])
  }
  var ba = function () {},
    Sa = function (t) {
      ;(this.tokens = []), t && (this.tokens = t)
    }
  function Ma (t, e) {
    var n = new wa()
    if ((null != t && (t += ''), t)) {
      for (
        var i,
          r = e.width,
          o = e.height,
          a = e.overflow,
          s =
            ('break' !== a && 'breakAll' !== a) || null == r
              ? null
              : { width: r, accumWidth: 0, breakAll: 'breakAll' === a },
          l = (ma.lastIndex = 0);
        null != (i = ma.exec(t));

      ) {
        var u = i.index
        l < u && Ta(n, t.substring(l, u), e, s),
          Ta(n, i[2], e, s, i[1]),
          (l = ma.lastIndex)
      }
      l < t.length && Ta(n, t.substring(l, t.length), e, s)
      var h,
        c = [],
        p = 0,
        d = 0,
        f = e.padding,
        g = 'truncate' === a,
        y = 'truncate' === e.lineOverflow
      t: for (var m = 0; m < n.lines.length; m++) {
        for (
          var v = n.lines[m], _ = 0, x = 0, w = 0;
          w < v.tokens.length;
          w++
        ) {
          var b = ((D = v.tokens[w]).styleName && e.rich[D.styleName]) || {},
            S = (D.textPadding = b.padding),
            M = S ? S[1] + S[3] : 0,
            T = (D.font = b.font || e.font),
            C = ((D.contentHeight = Hr(T)), N(b.height, D.contentHeight))
          if (
            ((D.innerHeight = C),
            S && (C += S[0] + S[2]),
            (D.height = C),
            (D.lineHeight = St(b.lineHeight, e.lineHeight, C)),
            (D.align = (b && b.align) || e.align),
            (D.verticalAlign = (b && b.verticalAlign) || 'middle'),
            y && null != o && p + D.lineHeight > o)
          ) {
            0 < w
              ? ((v.tokens = v.tokens.slice(0, w)),
                P(v, x, _),
                (n.lines = n.lines.slice(0, m + 1)))
              : (n.lines = n.lines.slice(0, m))
            break t
          }
          var I,
            S = b.width,
            k = null == S || 'auto' === S
          'string' == typeof S && '%' === S.charAt(S.length - 1)
            ? ((D.percentWidth = S),
              c.push(D),
              (D.contentWidth = Br(D.text, T)))
            : (k &&
                (S = (S = b.backgroundColor) && S.image) &&
                ((I = void 0),
                ya(
                  (S =
                    'string' == typeof (h = S) ? (I = da.get(h)) && I.image : h)
                )) &&
                (D.width = Math.max(D.width, (S.width * C) / S.height)),
              null != (I = g && null != r ? r - x : null) && I < D.width
                ? !k || I < M
                  ? ((D.text = ''), (D.width = D.contentWidth = 0))
                  : ((D.text = va(D.text, I - M, T, e.ellipsis, {
                      minChar: e.truncateMinChar
                    })),
                    (D.width = D.contentWidth = Br(D.text, T)))
                : (D.contentWidth = Br(D.text, T))),
            (D.width += M),
            (x += D.width),
            b && (_ = Math.max(_, D.lineHeight))
        }
        P(v, x, _)
      }
      for (
        n.outerWidth = n.width = N(r, d),
          n.outerHeight = n.height = N(o, p),
          n.contentHeight = p,
          n.contentWidth = d,
          f && ((n.outerWidth += f[1] + f[3]), (n.outerHeight += f[0] + f[2])),
          m = 0;
        m < c.length;
        m++
      ) {
        var D,
          A = (D = c[m]).percentWidth
        D.width = (parseInt(A, 10) / 100) * n.width
      }
    }
    return n
    function P (t, e, n) {
      ;(t.width = e), (t.lineHeight = n), (p += n), (d = Math.max(d, e))
    }
  }
  function Ta (t, e, n, i, r) {
    var o,
      a,
      s = '' === e,
      l = (r && n.rich[r]) || {},
      u = t.lines,
      h = l.font || n.font,
      c = !1
    i
      ? ((n = (t = l.padding) ? t[1] + t[3] : 0),
        null != l.width && 'auto' !== l.width
          ? ((t = Wr(l.width, i.width) + n),
            0 < u.length &&
              t + i.accumWidth > i.width &&
              ((o = e.split('\n')), (c = !0)),
            (i.accumWidth = t))
          : ((t = Ia(e, h, i.width, i.breakAll, i.accumWidth)),
            (i.accumWidth = t.accumWidth + n),
            (a = t.linesWidths),
            (o = t.lines)))
      : (o = e.split('\n'))
    for (var p = 0; p < o.length; p++) {
      var d,
        f,
        g = o[p],
        y = new ba()
      ;(y.styleName = r),
        (y.text = g),
        (y.isLineHolder = !g && !s),
        'number' == typeof l.width
          ? (y.width = l.width)
          : (y.width = a ? a[p] : Br(g, h)),
        p || c
          ? u.push(new Sa([y]))
          : 1 ===
              (f = (d = (u[u.length - 1] || (u[0] = new Sa())).tokens)
                .length) && d[0].isLineHolder
          ? (d[0] = y)
          : (!g && f && !s) || d.push(y)
    }
  }
  var Ca = ht(
    ',&?/;] '.split(''),
    function (t, e) {
      return (t[e] = !0), t
    },
    {}
  )
  function Ia (t, e, n, i, r) {
    for (
      var o, a = [], s = [], l = '', u = '', h = 0, c = 0, p = 0;
      p < t.length;
      p++
    ) {
      var d,
        f,
        g = t.charAt(p)
      '\n' !== g
        ? ((d = Br(g, e)),
          (f = !(
            i ||
            ((f = void 0),
            !(
              (32 <= (f = (f = o = g).charCodeAt(0)) && f <= 591) ||
              (880 <= f && f <= 4351) ||
              (4608 <= f && f <= 5119) ||
              (7680 <= f && f <= 8303)
            )) ||
            Ca[o]
          )),
          (a.length ? n < c + d : n < r + c + d)
            ? c
              ? (l || u) &&
                (c = f
                  ? (l || ((l = u), (u = ''), (c = h = 0)),
                    a.push(l),
                    s.push(c - h),
                    (u += g),
                    (l = ''),
                    (h += d))
                  : (u && ((l += u), (u = ''), (h = 0)),
                    a.push(l),
                    s.push(c),
                    (l = g),
                    d))
              : f
              ? (a.push(u), s.push(h), (u = g), (h = d))
              : (a.push(g), s.push(d))
            : ((c += d),
              f
                ? ((u += g), (h += d))
                : (u && ((l += u), (u = ''), (h = 0)), (l += g))))
        : (u && ((l += u), (c += h)),
          a.push(l),
          s.push(c),
          (u = l = ''),
          (c = h = 0))
    }
    return (
      a.length || l || ((l = t), (u = ''), (h = 0)),
      u && (l += u),
      l && (a.push(l), s.push(c)),
      1 === a.length && (c += r),
      { accumWidth: c, lines: a, linesWidths: s }
    )
  }
  var ka,
    Da = '__zr_style_' + Math.round(10 * Math.random()),
    Aa = {
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: '#000',
      opacity: 1,
      blend: 'source-over'
    },
    Pa = {
      style: {
        shadowBlur: !0,
        shadowOffsetX: !0,
        shadowOffsetY: !0,
        shadowColor: !0,
        opacity: !0
      }
    },
    La = ((Aa[Da] = !0), ['z', 'z2', 'invisible']),
    Oa = ['invisible'],
    n =
      (u(r, (ka = n)),
      (r.prototype._init = function (t) {
        for (var e = R(t), n = 0; n < e.length; n++) {
          var i = e[n]
          'style' === i
            ? this.useStyle(t[i])
            : ka.prototype.attrKV.call(this, i, t[i])
        }
        this.style || this.useStyle({})
      }),
      (r.prototype.beforeBrush = function () {}),
      (r.prototype.afterBrush = function () {}),
      (r.prototype.innerBeforeBrush = function () {}),
      (r.prototype.innerAfterBrush = function () {}),
      (r.prototype.shouldBePainted = function (t, e, n, i) {
        var r,
          o = this.transform
        if (
          this.ignore ||
          this.invisible ||
          0 === this.style.opacity ||
          (this.culling &&
            ((r = this),
            (t = t),
            (e = e),
            Ra.copy(r.getBoundingRect()),
            r.transform && Ra.applyTransform(r.transform),
            (Na.width = t),
            (Na.height = e),
            !Ra.intersect(Na))) ||
          (o && !o[0] && !o[3])
        )
          return !1
        if (n && this.__clipPaths)
          for (var a = 0; a < this.__clipPaths.length; ++a)
            if (this.__clipPaths[a].isZeroArea()) return !1
        if (i && this.parent)
          for (var s = this.parent; s; ) {
            if (s.ignore) return !1
            s = s.parent
          }
        return !0
      }),
      (r.prototype.contain = function (t, e) {
        return this.rectContain(t, e)
      }),
      (r.prototype.traverse = function (t, e) {
        t.call(e, this)
      }),
      (r.prototype.rectContain = function (t, e) {
        t = this.transformCoordToLocal(t, e)
        return this.getBoundingRect().contain(t[0], t[1])
      }),
      (r.prototype.getPaintRect = function () {
        var t,
          e,
          n,
          i,
          r,
          o = this._paintRect
        return (
          (this._paintRect && !this.__dirty) ||
            ((r = this.transform),
            (t = this.getBoundingRect()),
            (e = (i = this.style).shadowBlur || 0),
            (n = i.shadowOffsetX || 0),
            (i = i.shadowOffsetY || 0),
            (o = this._paintRect || (this._paintRect = new U(0, 0, 0, 0))),
            r ? U.applyTransform(o, t, r) : o.copy(t),
            (e || n || i) &&
              ((o.width += 2 * e + Math.abs(n)),
              (o.height += 2 * e + Math.abs(i)),
              (o.x = Math.min(o.x, o.x + n - e)),
              (o.y = Math.min(o.y, o.y + i - e))),
            (r = this.dirtyRectTolerance),
            o.isZero()) ||
            ((o.x = Math.floor(o.x - r)),
            (o.y = Math.floor(o.y - r)),
            (o.width = Math.ceil(o.width + 1 + 2 * r)),
            (o.height = Math.ceil(o.height + 1 + 2 * r))),
          o
        )
      }),
      (r.prototype.setPrevPaintRect = function (t) {
        t
          ? ((this._prevPaintRect = this._prevPaintRect || new U(0, 0, 0, 0)),
            this._prevPaintRect.copy(t))
          : (this._prevPaintRect = null)
      }),
      (r.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect
      }),
      (r.prototype.animateStyle = function (t) {
        return this.animate('style', t)
      }),
      (r.prototype.updateDuringAnimation = function (t) {
        'style' === t ? this.dirtyStyle() : this.markRedraw()
      }),
      (r.prototype.attrKV = function (t, e) {
        'style' !== t
          ? ka.prototype.attrKV.call(this, t, e)
          : this.style
          ? this.setStyle(e)
          : this.useStyle(e)
      }),
      (r.prototype.setStyle = function (t, e) {
        return (
          'string' == typeof t ? (this.style[t] = e) : O(this.style, t),
          this.dirtyStyle(),
          this
        )
      }),
      (r.prototype.dirtyStyle = function (t) {
        t || this.markRedraw(),
          (this.__dirty |= 2),
          this._rect && (this._rect = null)
      }),
      (r.prototype.dirty = function () {
        this.dirtyStyle()
      }),
      (r.prototype.styleChanged = function () {
        return !!(2 & this.__dirty)
      }),
      (r.prototype.styleUpdated = function () {
        this.__dirty &= -3
      }),
      (r.prototype.createStyle = function (t) {
        return zt(Aa, t)
      }),
      (r.prototype.useStyle = function (t) {
        t[Da] || (t = this.createStyle(t)),
          this.__inHover ? (this.__hoverStyle = t) : (this.style = t),
          this.dirtyStyle()
      }),
      (r.prototype.isStyleObject = function (t) {
        return t[Da]
      }),
      (r.prototype._innerSaveToNormal = function (t) {
        ka.prototype._innerSaveToNormal.call(this, t)
        var e = this._normalState
        t.style &&
          !e.style &&
          (e.style = this._mergeStyle(this.createStyle(), this.style)),
          this._savePrimaryToNormal(t, e, La)
      }),
      (r.prototype._applyStateObj = function (t, e, n, i, r, o) {
        ka.prototype._applyStateObj.call(this, t, e, n, i, r, o)
        var a,
          s = !(e && i)
        if (
          (e && e.style
            ? r
              ? i
                ? (a = e.style)
                : ((a = this._mergeStyle(this.createStyle(), n.style)),
                  this._mergeStyle(a, e.style))
              : ((a = this._mergeStyle(
                  this.createStyle(),
                  (i ? this : n).style
                )),
                this._mergeStyle(a, e.style))
            : s && (a = n.style),
          a)
        )
          if (r) {
            var l = this.style
            if (((this.style = this.createStyle(s ? {} : l)), s))
              for (var u = R(l), h = 0; h < u.length; h++)
                (p = u[h]) in a && ((a[p] = a[p]), (this.style[p] = l[p]))
            for (var c = R(a), h = 0; h < c.length; h++) {
              var p = c[h]
              this.style[p] = this.style[p]
            }
            this._transitionState(
              t,
              { style: a },
              o,
              this.getAnimationStyleProps()
            )
          } else this.useStyle(a)
        var d = this.__inHover ? Oa : La
        for (h = 0; h < d.length; h++)
          (p = d[h]),
            e && null != e[p]
              ? (this[p] = e[p])
              : s && null != n[p] && (this[p] = n[p])
      }),
      (r.prototype._mergeStates = function (t) {
        for (
          var e, n = ka.prototype._mergeStates.call(this, t), i = 0;
          i < t.length;
          i++
        ) {
          var r = t[i]
          r.style && this._mergeStyle((e = e || {}), r.style)
        }
        return e && (n.style = e), n
      }),
      (r.prototype._mergeStyle = function (t, e) {
        return O(t, e), t
      }),
      (r.prototype.getAnimationStyleProps = function () {
        return Pa
      }),
      (r.initDefaultProps =
        (((n = r.prototype).type = 'displayable'),
        (n.invisible = !1),
        (n.z = 0),
        (n.z2 = 0),
        (n.zlevel = 0),
        (n.culling = !1),
        (n.cursor = 'pointer'),
        (n.rectHover = !1),
        (n.incremental = !1),
        (n._rect = null),
        (n.dirtyRectTolerance = 0),
        void (n.__dirty = 2 | vn))),
      r),
    Ra = new U(0, 0, 0, 0),
    Na = new U(0, 0, 0, 0)
  function r (t) {
    return ka.call(this, t) || this
  }
  var Ba = Math.min,
    za = Math.max,
    Ea = Math.sin,
    Fa = Math.cos,
    Va = 2 * Math.PI,
    Ha = Gt(),
    Wa = Gt(),
    Ga = Gt()
  function Ua (t, e, n, i, r, o) {
    ;(r[0] = Ba(t, n)), (r[1] = Ba(e, i)), (o[0] = za(t, n)), (o[1] = za(e, i))
  }
  var Xa = [],
    Ya = []
  var X = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
    qa = [],
    ja = [],
    Za = [],
    Ka = [],
    $a = [],
    Qa = [],
    Ja = Math.min,
    ts = Math.max,
    es = Math.cos,
    ns = Math.sin,
    is = Math.abs,
    rs = Math.PI,
    os = 2 * rs,
    as = 'undefined' != typeof Float32Array,
    ss = []
  function ls (t) {
    return ((Math.round((t / rs) * 1e8) / 1e8) % 2) * rs
  }
  ;(o.prototype.increaseVersion = function () {
    this._version++
  }),
    (o.prototype.getVersion = function () {
      return this._version
    }),
    (o.prototype.setScale = function (t, e, n) {
      0 < (n = n || 0) &&
        ((this._ux = is(n / br / t) || 0), (this._uy = is(n / br / e) || 0))
    }),
    (o.prototype.setDPR = function (t) {
      this.dpr = t
    }),
    (o.prototype.setContext = function (t) {
      this._ctx = t
    }),
    (o.prototype.getContext = function () {
      return this._ctx
    }),
    (o.prototype.beginPath = function () {
      return this._ctx && this._ctx.beginPath(), this.reset(), this
    }),
    (o.prototype.reset = function () {
      this._saveData && (this._len = 0),
        this._pathSegLen && ((this._pathSegLen = null), (this._pathLen = 0)),
        this._version++
    }),
    (o.prototype.moveTo = function (t, e) {
      return (
        this._drawPendingPt(),
        this.addData(X.M, t, e),
        this._ctx && this._ctx.moveTo(t, e),
        (this._x0 = t),
        (this._y0 = e),
        (this._xi = t),
        (this._yi = e),
        this
      )
    }),
    (o.prototype.lineTo = function (t, e) {
      var n = is(t - this._xi),
        i = is(e - this._yi),
        r = n > this._ux || i > this._uy
      return (
        this.addData(X.L, t, e),
        this._ctx && r && this._ctx.lineTo(t, e),
        r
          ? ((this._xi = t), (this._yi = e), (this._pendingPtDist = 0))
          : (r = n * n + i * i) > this._pendingPtDist &&
            ((this._pendingPtX = t),
            (this._pendingPtY = e),
            (this._pendingPtDist = r)),
        this
      )
    }),
    (o.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
      return (
        this._drawPendingPt(),
        this.addData(X.C, t, e, n, i, r, o),
        this._ctx && this._ctx.bezierCurveTo(t, e, n, i, r, o),
        (this._xi = r),
        (this._yi = o),
        this
      )
    }),
    (o.prototype.quadraticCurveTo = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this.addData(X.Q, t, e, n, i),
        this._ctx && this._ctx.quadraticCurveTo(t, e, n, i),
        (this._xi = n),
        (this._yi = i),
        this
      )
    }),
    (o.prototype.arc = function (t, e, n, i, r, o) {
      this._drawPendingPt(),
        (ss[0] = i),
        (ss[1] = r),
        (s = o),
        (l = ls((a = ss)[0])) < 0 && (l += os),
        (h = l - a[0]),
        (u = a[1]),
        (u += h),
        !s && os <= u - l
          ? (u = l + os)
          : s && os <= l - u
          ? (u = l - os)
          : !s && u < l
          ? (u = l + (os - ls(l - u)))
          : s && l < u && (u = l - (os - ls(u - l))),
        (a[0] = l),
        (a[1] = u)
      var a,
        s,
        l,
        u,
        h = (r = ss[1]) - (i = ss[0])
      return (
        this.addData(X.A, t, e, n, n, i, h, 0, o ? 0 : 1),
        this._ctx && this._ctx.arc(t, e, n, i, r, o),
        (this._xi = es(r) * n + t),
        (this._yi = ns(r) * n + e),
        this
      )
    }),
    (o.prototype.arcTo = function (t, e, n, i, r) {
      return (
        this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this
      )
    }),
    (o.prototype.rect = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this._ctx && this._ctx.rect(t, e, n, i),
        this.addData(X.R, t, e, n, i),
        this
      )
    }),
    (o.prototype.closePath = function () {
      this._drawPendingPt(), this.addData(X.Z)
      var t = this._ctx,
        e = this._x0,
        n = this._y0
      return t && t.closePath(), (this._xi = e), (this._yi = n), this
    }),
    (o.prototype.fill = function (t) {
      t && t.fill(), this.toStatic()
    }),
    (o.prototype.stroke = function (t) {
      t && t.stroke(), this.toStatic()
    }),
    (o.prototype.len = function () {
      return this._len
    }),
    (o.prototype.setData = function (t) {
      var e = t.length
      ;(this.data && this.data.length === e) ||
        !as ||
        (this.data = new Float32Array(e))
      for (var n = 0; n < e; n++) this.data[n] = t[n]
      this._len = e
    }),
    (o.prototype.appendPath = function (t) {
      for (
        var e = (t = t instanceof Array ? t : [t]).length,
          n = 0,
          i = this._len,
          r = 0;
        r < e;
        r++
      )
        n += t[r].len()
      for (
        as &&
          this.data instanceof Float32Array &&
          (this.data = new Float32Array(i + n)),
          r = 0;
        r < e;
        r++
      )
        for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a]
      this._len = i
    }),
    (o.prototype.addData = function (t, e, n, i, r, o, a, s, l) {
      if (this._saveData) {
        var u = this.data
        this._len + arguments.length > u.length &&
          (this._expandData(), (u = this.data))
        for (var h = 0; h < arguments.length; h++) u[this._len++] = arguments[h]
      }
    }),
    (o.prototype._drawPendingPt = function () {
      0 < this._pendingPtDist &&
        (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
        (this._pendingPtDist = 0))
    }),
    (o.prototype._expandData = function () {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e]
        this.data = t
      }
    }),
    (o.prototype.toStatic = function () {
      var t
      this._saveData &&
        (this._drawPendingPt(), (t = this.data) instanceof Array) &&
        ((t.length = this._len), as) &&
        11 < this._len &&
        (this.data = new Float32Array(t))
    }),
    (o.prototype.getBoundingRect = function () {
      ;(Za[0] = Za[1] = $a[0] = $a[1] = Number.MAX_VALUE),
        (Ka[0] = Ka[1] = Qa[0] = Qa[1] = -Number.MAX_VALUE)
      for (
        var t, e, n, i = this.data, r = 0, o = 0, a = 0, s = 0, l = 0;
        l < this._len;

      ) {
        var u = i[l++],
          h = 1 === l
        switch ((h && ((a = r = i[l]), (s = o = i[l + 1])), u)) {
          case X.M:
            ;(r = a = i[l++]),
              (o = s = i[l++]),
              ($a[0] = a),
              ($a[1] = s),
              (Qa[0] = a),
              (Qa[1] = s)
            break
          case X.L:
            Ua(r, o, i[l], i[l + 1], $a, Qa), (r = i[l++]), (o = i[l++])
            break
          case X.C:
            C =
              T =
              M =
              S =
              b =
              w =
              x =
              _ =
              v =
              m =
              y =
              g =
              f =
              d =
              p =
              c =
                void 0
            var c = r,
              p = o,
              d = i[l++],
              f = i[l++],
              g = i[l++],
              y = i[l++],
              m = i[l],
              v = i[l + 1],
              _ = $a,
              x = Qa,
              w = Vn,
              b = zn,
              S = w(c, d, g, m, Xa)
            ;(_[0] = 1 / 0), (_[1] = 1 / 0), (x[0] = -1 / 0), (x[1] = -1 / 0)
            for (var M = 0; M < S; M++) {
              var T = b(c, d, g, m, Xa[M])
              ;(_[0] = Ba(T, _[0])), (x[0] = za(T, x[0]))
            }
            for (S = w(p, f, y, v, Ya), M = 0; M < S; M++) {
              var C = b(p, f, y, v, Ya[M])
              ;(_[1] = Ba(C, _[1])), (x[1] = za(C, x[1]))
            }
            ;(_[0] = Ba(c, _[0])),
              (x[0] = za(c, x[0])),
              (_[0] = Ba(m, _[0])),
              (x[0] = za(m, x[0])),
              (_[1] = Ba(p, _[1])),
              (x[1] = za(p, x[1])),
              (_[1] = Ba(v, _[1])),
              (x[1] = za(v, x[1])),
              (r = i[l++]),
              (o = i[l++])
            break
          case X.Q:
            ;(w = r),
              (t = o),
              (L = i[l++]),
              (k = i[l++]),
              (P = i[l]),
              (e = i[l + 1]),
              (A = $a),
              (O = Qa),
              (n = D = n = I = void 0),
              (I = Gn),
              (n = za(Ba((D = Xn)(w, L, P), 1), 0)),
              (D = za(Ba(D(t, k, e), 1), 0)),
              (L = I(w, L, P, n)),
              (n = I(t, k, e, D)),
              (A[0] = Ba(w, P, L)),
              (A[1] = Ba(t, e, n)),
              (O[0] = za(w, P, L)),
              (O[1] = za(t, e, n)),
              (r = i[l++]),
              (o = i[l++])
            break
          case X.A:
            var I = i[l++],
              k = i[l++],
              D = i[l++],
              A = i[l++],
              P = i[l++],
              L = i[l++] + P,
              O = ((l += 1), !i[l++])
            h && ((a = es(P) * D + I), (s = ns(P) * A + k)),
              (function (t, e, n, i, r, o, a, s, l) {
                var u = ie,
                  h = re,
                  c = Math.abs(r - o)
                if (c % Va < 1e-4 && 1e-4 < c)
                  return (
                    (s[0] = t - n),
                    (s[1] = e - i),
                    (l[0] = t + n),
                    (l[1] = e + i)
                  )
                ;(Ha[0] = Fa(r) * n + t),
                  (Ha[1] = Ea(r) * i + e),
                  (Wa[0] = Fa(o) * n + t),
                  (Wa[1] = Ea(o) * i + e),
                  u(s, Ha, Wa),
                  h(l, Ha, Wa),
                  (r %= Va) < 0 && (r += Va),
                  (o %= Va) < 0 && (o += Va),
                  o < r && !a ? (o += Va) : r < o && a && (r += Va),
                  a && ((c = o), (o = r), (r = c))
                for (var p = 0; p < o; p += Math.PI / 2)
                  r < p &&
                    ((Ga[0] = Fa(p) * n + t),
                    (Ga[1] = Ea(p) * i + e),
                    u(s, Ga, s),
                    h(l, Ga, l))
              })(I, k, D, A, P, L, O, $a, Qa),
              (r = es(L) * D + I),
              (o = ns(L) * A + k)
            break
          case X.R:
            Ua(
              (a = r = i[l++]),
              (s = o = i[l++]),
              a + i[l++],
              s + i[l++],
              $a,
              Qa
            )
            break
          case X.Z:
            ;(r = a), (o = s)
        }
        ie(Za, Za, $a), re(Ka, Ka, Qa)
      }
      return (
        0 === l && (Za[0] = Za[1] = Ka[0] = Ka[1] = 0),
        new U(Za[0], Za[1], Ka[0] - Za[0], Ka[1] - Za[1])
      )
    }),
    (o.prototype._calculateLength = function () {
      var t = this.data,
        e = this._len,
        n = this._ux,
        i = this._uy,
        r = 0,
        o = 0,
        a = 0,
        s = 0
      this._pathSegLen || (this._pathSegLen = [])
      for (var l = this._pathSegLen, u = 0, h = 0, c = 0; c < e; ) {
        var p = t[c++],
          d = 1 === c,
          f = (d && ((a = r = t[c]), (s = o = t[c + 1])), -1)
        switch (p) {
          case X.M:
            ;(r = a = t[c++]), (o = s = t[c++])
            break
          case X.L:
            var g = t[c++],
              y = (_ = t[c++]) - o
            ;(is((I = g - r)) > n || is(y) > i || c === e - 1) &&
              ((f = Math.sqrt(I * I + y * y)), (r = g), (o = _))
            break
          case X.C:
            var m = t[c++],
              v = t[c++],
              _ = ((g = t[c++]), t[c++]),
              x = t[c++],
              w = t[c++],
              f = (function (t, e, n, i, r, o, a, s, l) {
                for (var u = t, h = e, c = 0, p = 1 / l, d = 1; d <= l; d++) {
                  var f = d * p,
                    g = zn(t, n, r, a, f),
                    f = zn(e, i, o, s, f),
                    y = g - u,
                    m = f - h
                  ;(c += Math.sqrt(y * y + m * m)), (u = g), (h = f)
                }
                return c
              })(r, o, m, v, g, _, x, w, 10),
              r = x,
              o = w
            break
          case X.Q:
            ;(f = (function (t, e, n, i, r, o, a) {
              for (var s = t, l = e, u = 0, h = 1 / a, c = 1; c <= a; c++) {
                var p = c * h,
                  d = Gn(t, n, r, p),
                  p = Gn(e, i, o, p),
                  f = d - s,
                  g = p - l
                ;(u += Math.sqrt(f * f + g * g)), (s = d), (l = p)
              }
              return u
            })(
              r,
              o,
              (m = t[c++]),
              (v = t[c++]),
              (g = t[c++]),
              (_ = t[c++]),
              10
            )),
              (r = g),
              (o = _)
            break
          case X.A:
            var x = t[c++],
              w = t[c++],
              b = t[c++],
              S = t[c++],
              M = t[c++],
              T = t[c++],
              C = T + M
            ;(c += 1),
              t[c++],
              d && ((a = es(M) * b + x), (s = ns(M) * S + w)),
              (f = ts(b, S) * Ja(os, Math.abs(T))),
              (r = es(C) * b + x),
              (o = ns(C) * S + w)
            break
          case X.R:
            ;(a = r = t[c++]), (s = o = t[c++]), (f = 2 * t[c++] + 2 * t[c++])
            break
          case X.Z:
            var I = a - r,
              y = s - o
            ;(f = Math.sqrt(I * I + y * y)), (r = a), (o = s)
        }
        0 <= f && (u += l[h++] = f)
      }
      return (this._pathLen = u)
    }),
    (o.prototype.rebuildPath = function (t, e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        u,
        h = this.data,
        B = this._ux,
        z = this._uy,
        E = this._len,
        c = e < 1,
        p = 0,
        d = 0,
        f = 0
      if (
        !c ||
        (this._pathSegLen || this._calculateLength(),
        (a = this._pathSegLen),
        (s = e * this._pathLen))
      )
        t: for (var g = 0; g < E; ) {
          var y,
            m = h[g++],
            F = 1 === g
          switch (
            (F && ((n = r = h[g]), (i = o = h[g + 1])),
            m !== X.L && 0 < f && (t.lineTo(l, u), (f = 0)),
            m)
          ) {
            case X.M:
              ;(n = r = h[g++]), (i = o = h[g++]), t.moveTo(r, o)
              break
            case X.L:
              var v = h[g++],
                _ = h[g++],
                x = is(v - r),
                w = is(_ - o)
              if (B < x || z < w) {
                if (c) {
                  if (p + (y = a[d++]) > s) {
                    var b = (s - p) / y
                    t.lineTo(r * (1 - b) + v * b, o * (1 - b) + _ * b)
                    break t
                  }
                  p += y
                }
                t.lineTo(v, _), (r = v), (o = _), (f = 0)
              } else {
                x = x * x + w * w
                f < x && ((l = v), (u = _), (f = x))
              }
              break
            case X.C:
              var S = h[g++],
                M = h[g++],
                T = h[g++],
                C = h[g++],
                w = h[g++],
                x = h[g++]
              if (c) {
                if (p + (y = a[d++]) > s) {
                  Hn(r, S, T, w, (b = (s - p) / y), qa),
                    Hn(o, M, C, x, b, ja),
                    t.bezierCurveTo(qa[1], ja[1], qa[2], ja[2], qa[3], ja[3])
                  break t
                }
                p += y
              }
              t.bezierCurveTo(S, M, T, C, w, x), (r = w), (o = x)
              break
            case X.Q:
              if (((S = h[g++]), (M = h[g++]), (T = h[g++]), (C = h[g++]), c)) {
                if (p + (y = a[d++]) > s) {
                  Yn(r, S, T, (b = (s - p) / y), qa),
                    Yn(o, M, C, b, ja),
                    t.quadraticCurveTo(qa[1], ja[1], qa[2], ja[2])
                  break t
                }
                p += y
              }
              t.quadraticCurveTo(S, M, T, C), (r = T), (o = C)
              break
            case X.A:
              var I = h[g++],
                k = h[g++],
                D = h[g++],
                A = h[g++],
                P = h[g++],
                L = h[g++],
                O = h[g++],
                V = !h[g++],
                H = A < D ? D : A,
                R = 0.001 < is(D - A),
                N = P + L,
                W = !1
              if (
                (c &&
                  (p + (y = a[d++]) > s &&
                    ((N = P + (L * (s - p)) / y), (W = !0)),
                  (p += y)),
                R && t.ellipse
                  ? t.ellipse(I, k, D, A, O, P, N, V)
                  : t.arc(I, k, H, P, N, V),
                W)
              )
                break t
              F && ((n = es(P) * D + I), (i = ns(P) * A + k)),
                (r = es(N) * D + I),
                (o = ns(N) * A + k)
              break
            case X.R:
              ;(n = r = h[g]), (i = o = h[g + 1]), (v = h[g++]), (_ = h[g++])
              ;(L = h[g++]), (R = h[g++])
              if (c) {
                if (p + (y = a[d++]) > s) {
                  O = s - p
                  t.moveTo(v, _),
                    t.lineTo(v + Ja(O, L), _),
                    0 < (O -= L) && t.lineTo(v + L, _ + Ja(O, R)),
                    0 < (O -= R) && t.lineTo(v + ts(L - O, 0), _ + R),
                    0 < (O -= L) && t.lineTo(v, _ + ts(R - O, 0))
                  break t
                }
                p += y
              }
              t.rect(v, _, L, R)
              break
            case X.Z:
              if (c) {
                if (p + (y = a[d++]) > s) {
                  t.lineTo(
                    r * (1 - (b = (s - p) / y)) + n * b,
                    o * (1 - b) + i * b
                  )
                  break t
                }
                p += y
              }
              t.closePath(), (r = n), (o = i)
          }
        }
    }),
    (o.prototype.clone = function () {
      var t = new o(),
        e = this.data
      return (
        (t.data = e.slice ? e.slice() : Array.prototype.slice.call(e)),
        (t._len = this._len),
        t
      )
    }),
    (o.CMD = X),
    (o.initDefaultProps =
      (((Iu = o.prototype)._saveData = !0),
      (Iu._ux = 0),
      (Iu._uy = 0),
      (Iu._pendingPtDist = 0),
      void (Iu._version = 0)))
  var us = o
  function o (t) {
    ;(this.dpr = 1),
      (this._xi = 0),
      (this._yi = 0),
      (this._x0 = 0),
      (this._y0 = 0),
      (this._len = 0),
      t && (this._saveData = !1),
      this._saveData && (this.data = [])
  }
  function hs (t, e, n, i, r, o, a) {
    var s
    if (0 !== r)
      return (
        (s = 0),
        !(
          (e + (r = r) < a && i + r < a) ||
          (a < e - r && a < i - r) ||
          (t + r < o && n + r < o) ||
          (o < t - r && o < n - r)
        ) &&
          (t === n
            ? Math.abs(o - t) <= r / 2
            : ((o =
                (s = (e - i) / (t - n)) * o - a + (t * i - n * e) / (t - n)) *
                o) /
                (s * s + 1) <=
              ((r / 2) * r) / 2)
      )
  }
  var cs = 2 * Math.PI
  function ps (t) {
    return (t %= cs) < 0 && (t += cs), t
  }
  var ds = 2 * Math.PI
  function fs (t, e, n, i, r, o) {
    return (e < o && i < o) || (o < e && o < i) || i === e
      ? 0
      : (n = (o = (o - e) / (i - e)) * (n - t) + t) === r
      ? 1 / 0
      : r < n
      ? 1 != o && 0 != o
        ? i < e
          ? 1
          : -1
        : i < e
        ? 0.5
        : -0.5
      : 0
  }
  var gs = us.CMD,
    ys = 2 * Math.PI,
    ms = 1e-4
  var vs = [-1, -1, -1],
    _s = [-1, -1]
  function xs (t, e, n, i, r, o, a, s, l, u) {
    if (
      (e < u && i < u && o < u && s < u) ||
      (u < e && u < i && u < o && u < s)
    )
      return 0
    var h = Fn(e, i, o, s, u, vs)
    if (0 === h) return 0
    for (var c, p = 0, d = -1, f = void 0, g = void 0, y = 0; y < h; y++) {
      var m = vs[y],
        v = 0 === m || 1 === m ? 0.5 : 1
      zn(t, n, r, a, m) < l ||
        (d < 0 &&
          ((d = Vn(e, i, o, s, _s)),
          _s[1] < _s[0] &&
            1 < d &&
            ((c = void 0), (c = _s[0]), (_s[0] = _s[1]), (_s[1] = c)),
          (f = zn(e, i, o, s, _s[0])),
          1 < d) &&
          (g = zn(e, i, o, s, _s[1])),
        2 === d
          ? m < _s[0]
            ? (p += f < e ? v : -v)
            : m < _s[1]
            ? (p += g < f ? v : -v)
            : (p += s < g ? v : -v)
          : m < _s[0]
          ? (p += f < e ? v : -v)
          : (p += s < f ? v : -v))
    }
    return p
  }
  function ws (t, e, n, i, r, o, a, s) {
    if ((e < s && i < s && o < s) || (s < e && s < i && s < o)) return 0
    ;(c = vs),
      (h = (l = e) - 2 * (u = i) + (h = o)),
      (u = 2 * (u - l)),
      (l -= s = s),
      (s = 0),
      Nn(h)
        ? Bn(u) && 0 <= (p = -l / u) && p <= 1 && (c[s++] = p)
        : Nn((l = u * u - 4 * h * l))
        ? 0 <= (p = -u / (2 * h)) && p <= 1 && (c[s++] = p)
        : 0 < l &&
          ((d = (-u - (l = kn(l))) / (2 * h)),
          0 <= (p = (-u + l) / (2 * h)) && p <= 1 && (c[s++] = p),
          0 <= d) &&
          d <= 1 &&
          (c[s++] = d)
    var l,
      u,
      h,
      c,
      p,
      d,
      f = s
    if (0 === f) return 0
    var g = Xn(e, i, o)
    if (0 <= g && g <= 1) {
      for (var y = 0, m = Gn(e, i, o, g), v = 0; v < f; v++) {
        var _ = 0 === vs[v] || 1 === vs[v] ? 0.5 : 1
        Gn(t, n, r, vs[v]) < a ||
          (vs[v] < g ? (y += m < e ? _ : -_) : (y += o < m ? _ : -_))
      }
      return y
    }
    return (
      (_ = 0 === vs[0] || 1 === vs[0] ? 0.5 : 1),
      Gn(t, n, r, vs[0]) < a ? 0 : o < e ? _ : -_
    )
  }
  function bs (t, e, n, i, r) {
    for (
      var o, a = t.data, s = t.len(), l = 0, u = 0, h = 0, c = 0, p = 0, d = 0;
      d < s;

    ) {
      var f = a[d++],
        g = 1 === d
      switch (
        (f === gs.M && 1 < d && (n || (l += fs(u, h, c, p, i, r))),
        g && ((c = u = a[d]), (p = h = a[d + 1])),
        f)
      ) {
        case gs.M:
          ;(u = c = a[d++]), (h = p = a[d++])
          break
        case gs.L:
          if (n) {
            if (hs(u, h, a[d], a[d + 1], e, i, r)) return !0
          } else l += fs(u, h, a[d], a[d + 1], i, r) || 0
          ;(u = a[d++]), (h = a[d++])
          break
        case gs.C:
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l, u, h) {
                if (0 !== l)
                  return (
                    !(
                      (e + (l = l) < h &&
                        i + l < h &&
                        o + l < h &&
                        s + l < h) ||
                      (h < e - l && h < i - l && h < o - l && h < s - l) ||
                      (t + l < u && n + l < u && r + l < u && a + l < u) ||
                      (u < t - l && u < n - l && u < r - l && u < a - l)
                    ) && Wn(t, e, n, i, r, o, a, s, u, h, null) <= l / 2
                  )
              })(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], e, i, r)
            )
              return !0
          } else
            l +=
              xs(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, r) ||
              0
          ;(u = a[d++]), (h = a[d++])
          break
        case gs.Q:
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l) {
                if (0 !== a)
                  return (
                    !(
                      (e + (a = a) < l && i + a < l && o + a < l) ||
                      (l < e - a && l < i - a && l < o - a) ||
                      (t + a < s && n + a < s && r + a < s) ||
                      (s < t - a && s < n - a && s < r - a)
                    ) && qn(t, e, n, i, r, o, s, l, null) <= a / 2
                  )
              })(u, h, a[d++], a[d++], a[d], a[d + 1], e, i, r)
            )
              return !0
          } else l += ws(u, h, a[d++], a[d++], a[d], a[d + 1], i, r) || 0
          ;(u = a[d++]), (h = a[d++])
          break
        case gs.A:
          var y = a[d++],
            m = a[d++],
            v = a[d++],
            _ = a[d++],
            x = a[d++],
            w = a[d++],
            b = ((d += 1), !!(1 - a[d++])),
            S = Math.cos(x) * v + y,
            M = Math.sin(x) * _ + m,
            T =
              (g ? ((c = S), (p = M)) : (l += fs(u, h, S, M, i, r)),
              ((i - y) * _) / v + y)
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l) {
                if (0 !== a)
                  return (
                    (a = a),
                    (s -= t),
                    (l -= e),
                    !(n < (t = Math.sqrt(s * s + l * l)) - a || t + a < n) &&
                      (Math.abs(i - r) % ds < 1e-4 ||
                        ((r = o
                          ? ((e = i), (i = ps(r)), ps(e))
                          : ((i = ps(i)), ps(r))) < i && (r += ds),
                        (t = Math.atan2(l, s)) < 0 && (t += ds),
                        i <= t && t <= r) ||
                        (i <= t + ds && t + ds <= r))
                  )
              })(y, m, _, x, x + w, b, e, T, r)
            )
              return !0
          } else
            l += (function (t, e, n, i, r, o, a, s) {
              if ((s -= e) > n || s < -n) return 0
              var e = Math.sqrt(n * n - s * s)
              if (((vs[0] = -e), (vs[1] = e), (n = Math.abs(i - r)) < 1e-4))
                return 0
              if (ys - 1e-4 <= n)
                return (
                  (r = ys),
                  (h = o ? 1 : -1),
                  a >= vs[(i = 0)] + t && a <= vs[1] + t ? h : 0
                )
              r < i && ((e = i), (i = r), (r = e)),
                i < 0 && ((i += ys), (r += ys))
              for (var l = 0, u = 0; u < 2; u++) {
                var h,
                  c = vs[u]
                a < c + t &&
                  ((h = o ? 1 : -1),
                  (i <= (c = (c = Math.atan2(s, c)) < 0 ? ys + c : c) &&
                    c <= r) ||
                    (i <= c + ys && c + ys <= r)) &&
                  (l += h = c > Math.PI / 2 && c < 1.5 * Math.PI ? -h : h)
              }
              return l
            })(y, m, _, x, x + w, b, T, r)
          ;(u = Math.cos(x + w) * v + y), (h = Math.sin(x + w) * _ + m)
          break
        case gs.R:
          if (
            ((c = u = a[d++]),
            (p = h = a[d++]),
            (S = c + a[d++]),
            (M = p + a[d++]),
            n)
          ) {
            if (
              hs(c, p, S, p, e, i, r) ||
              hs(S, p, S, M, e, i, r) ||
              hs(S, M, c, M, e, i, r) ||
              hs(c, M, c, p, e, i, r)
            )
              return !0
          } else l = (l += fs(S, p, S, M, i, r)) + fs(c, M, c, p, i, r)
          break
        case gs.Z:
          if (n) {
            if (hs(u, h, c, p, e, i, r)) return !0
          } else l += fs(u, h, c, p, i, r)
          ;(u = c), (h = p)
      }
    }
    return (
      n ||
        ((t = h), (o = p), Math.abs(t - o) < ms) ||
        (l += fs(u, h, c, p, i, r) || 0),
      0 !== l
    )
  }
  var Ss,
    Ms = E(
      {
        fill: '#000',
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: 'butt',
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1
      },
      Aa
    ),
    Ts = {
      style: E(
        {
          fill: !0,
          stroke: !0,
          strokePercent: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineDashOffset: !0,
          lineWidth: !0,
          miterLimit: !0
        },
        Pa.style
      )
    },
    Cs = Or.concat(['invisible', 'culling', 'z', 'z2', 'zlevel', 'parent']),
    Is =
      (u(a, (Ss = n)),
      (a.prototype.update = function () {
        var e = this,
          t = (Ss.prototype.update.call(this), this.style)
        if (t.decal) {
          var n,
            i = (this._decalEl = this._decalEl || new a()),
            r =
              (i.buildPath === a.prototype.buildPath &&
                (i.buildPath = function (t) {
                  e.buildPath(t, e.shape)
                }),
              (i.silent = !0),
              i.style)
          for (n in t) r[n] !== t[n] && (r[n] = t[n])
          ;(r.fill = t.fill ? t.decal : null),
            (r.decal = null),
            (r.shadowColor = null),
            t.strokeFirst && (r.stroke = null)
          for (var o = 0; o < Cs.length; ++o) i[Cs[o]] = this[Cs[o]]
          i.__dirty |= vn
        } else this._decalEl && (this._decalEl = null)
      }),
      (a.prototype.getDecalElement = function () {
        return this._decalEl
      }),
      (a.prototype._init = function (t) {
        var e = R(t),
          n = ((this.shape = this.getDefaultShape()), this.getDefaultStyle())
        n && this.useStyle(n)
        for (var i = 0; i < e.length; i++) {
          var r = e[i],
            o = t[r]
          'style' === r
            ? this.style
              ? O(this.style, o)
              : this.useStyle(o)
            : 'shape' === r
            ? O(this.shape, o)
            : Ss.prototype.attrKV.call(this, r, o)
        }
        this.style || this.useStyle({})
      }),
      (a.prototype.getDefaultStyle = function () {
        return null
      }),
      (a.prototype.getDefaultShape = function () {
        return {}
      }),
      (a.prototype.canBeInsideText = function () {
        return this.hasFill()
      }),
      (a.prototype.getInsideTextFill = function () {
        var t,
          e = this.style.fill
        if ('none' !== e) {
          if (H(e)) return 0.5 < (t = wi(e, 0)) ? Sr : 0.2 < t ? '#eee' : Mr
          if (e) return Mr
        }
        return Sr
      }),
      (a.prototype.getInsideTextStroke = function (t) {
        var e = this.style.fill
        if (H(e)) {
          var n = this.__zr
          if (!(!n || !n.isDarkMode()) == wi(t, 0) < 0.4) return e
        }
      }),
      (a.prototype.buildPath = function (t, e, n) {}),
      (a.prototype.pathUpdated = function () {
        this.__dirty &= ~_n
      }),
      (a.prototype.getUpdatedPathProxy = function (t) {
        return (
          this.path || this.createPathProxy(),
          this.path.beginPath(),
          this.buildPath(this.path, this.shape, t),
          this.path
        )
      }),
      (a.prototype.createPathProxy = function () {
        this.path = new us(!1)
      }),
      (a.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke
        return !(null == e || 'none' === e || !(0 < t.lineWidth))
      }),
      (a.prototype.hasFill = function () {
        var t = this.style.fill
        return null != t && 'none' !== t
      }),
      (a.prototype.getBoundingRect = function () {
        var t,
          e,
          n = this._rect,
          i = this.style,
          r = !n
        return (
          r &&
            ((t = !1),
            this.path || ((t = !0), this.createPathProxy()),
            (e = this.path),
            (t || this.__dirty & _n) &&
              (e.beginPath(),
              this.buildPath(e, this.shape, !1),
              this.pathUpdated()),
            (n = e.getBoundingRect())),
          (this._rect = n),
          this.hasStroke() && this.path && 0 < this.path.len()
            ? ((t = this._rectStroke || (this._rectStroke = n.clone())),
              (this.__dirty || r) &&
                (t.copy(n),
                (e = i.strokeNoScale ? this.getLineScale() : 1),
                (r = i.lineWidth),
                this.hasFill() ||
                  ((i = this.strokeContainThreshold),
                  (r = Math.max(r, null == i ? 4 : i))),
                1e-10 < e) &&
                ((t.width += r / e),
                (t.height += r / e),
                (t.x -= r / e / 2),
                (t.y -= r / e / 2)),
              t)
            : n
        )
      }),
      (a.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style
        if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
          n = this.path
          if (this.hasStroke()) {
            ;(i = r.lineWidth), (r = r.strokeNoScale ? this.getLineScale() : 1)
            if (
              1e-10 < r &&
              (this.hasFill() || (i = Math.max(i, this.strokeContainThreshold)),
              bs(n, i / r, !0, t, e))
            )
              return !0
          }
          if (this.hasFill()) return bs(n, 0, !1, t, e)
        }
        return !1
      }),
      (a.prototype.dirtyShape = function () {
        ;(this.__dirty |= _n),
          this._rect && (this._rect = null),
          this._decalEl && this._decalEl.dirtyShape(),
          this.markRedraw()
      }),
      (a.prototype.dirty = function () {
        this.dirtyStyle(), this.dirtyShape()
      }),
      (a.prototype.animateShape = function (t) {
        return this.animate('shape', t)
      }),
      (a.prototype.updateDuringAnimation = function (t) {
        'style' === t
          ? this.dirtyStyle()
          : 'shape' === t
          ? this.dirtyShape()
          : this.markRedraw()
      }),
      (a.prototype.attrKV = function (t, e) {
        'shape' === t ? this.setShape(e) : Ss.prototype.attrKV.call(this, t, e)
      }),
      (a.prototype.setShape = function (t, e) {
        var n = (n = this.shape) || (this.shape = {})
        return (
          'string' == typeof t ? (n[t] = e) : O(n, t), this.dirtyShape(), this
        )
      }),
      (a.prototype.shapeChanged = function () {
        return !!(this.__dirty & _n)
      }),
      (a.prototype.createStyle = function (t) {
        return zt(Ms, t)
      }),
      (a.prototype._innerSaveToNormal = function (t) {
        Ss.prototype._innerSaveToNormal.call(this, t)
        var e = this._normalState
        t.shape && !e.shape && (e.shape = O({}, this.shape))
      }),
      (a.prototype._applyStateObj = function (t, e, n, i, r, o) {
        Ss.prototype._applyStateObj.call(this, t, e, n, i, r, o)
        var a,
          s = !(e && i)
        if (
          (e && e.shape
            ? r
              ? i
                ? (a = e.shape)
                : ((a = O({}, n.shape)), O(a, e.shape))
              : ((a = O({}, (i ? this : n).shape)), O(a, e.shape))
            : s && (a = n.shape),
          a)
        )
          if (r) {
            this.shape = O({}, this.shape)
            for (var l = {}, u = R(a), h = 0; h < u.length; h++) {
              var c = u[h]
              'object' == typeof a[c] ? (this.shape[c] = a[c]) : (l[c] = a[c])
            }
            this._transitionState(t, { shape: l }, o)
          } else (this.shape = a), this.dirtyShape()
      }),
      (a.prototype._mergeStates = function (t) {
        for (
          var e, n = Ss.prototype._mergeStates.call(this, t), i = 0;
          i < t.length;
          i++
        ) {
          var r = t[i]
          r.shape && this._mergeStyle((e = e || {}), r.shape)
        }
        return e && (n.shape = e), n
      }),
      (a.prototype.getAnimationStyleProps = function () {
        return Ts
      }),
      (a.prototype.isZeroArea = function () {
        return !1
      }),
      (a.extend = function (n) {
        u(r, (i = a)),
          (r.prototype.getDefaultStyle = function () {
            return _(n.style)
          }),
          (r.prototype.getDefaultShape = function () {
            return _(n.shape)
          })
        var i,
          t,
          e = r
        function r (t) {
          var e = i.call(this, t) || this
          return n.init && n.init.call(e, t), e
        }
        for (t in n) 'function' == typeof n[t] && (e.prototype[t] = n[t])
        return e
      }),
      (a.initDefaultProps =
        (((Iu = a.prototype).type = 'path'),
        (Iu.strokeContainThreshold = 5),
        (Iu.segmentIgnoreThreshold = 0),
        (Iu.subPixelOptimize = !1),
        (Iu.autoBatch = !1),
        void (Iu.__dirty = 2 | vn | _n))),
      a)
  function a (t) {
    return Ss.call(this, t) || this
  }
  var ks,
    Ds = E(
      {
        strokeFirst: !0,
        font: Z,
        x: 0,
        y: 0,
        textAlign: 'left',
        textBaseline: 'top',
        miterLimit: 2
      },
      Ms
    ),
    As =
      (u(Ps, (ks = n)),
      (Ps.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke
        return null != e && 'none' !== e && 0 < t.lineWidth
      }),
      (Ps.prototype.hasFill = function () {
        var t = this.style.fill
        return null != t && 'none' !== t
      }),
      (Ps.prototype.createStyle = function (t) {
        return zt(Ds, t)
      }),
      (Ps.prototype.setBoundingRect = function (t) {
        this._rect = t
      }),
      (Ps.prototype.getBoundingRect = function () {
        var t,
          e = this.style
        return (
          this._rect ||
            (null != (t = e.text) ? (t += '') : (t = ''),
            ((t = Er(t, e.font, e.textAlign, e.textBaseline)).x += e.x || 0),
            (t.y += e.y || 0),
            this.hasStroke() &&
              ((e = e.lineWidth),
              (t.x -= e / 2),
              (t.y -= e / 2),
              (t.width += e),
              (t.height += e)),
            (this._rect = t)),
          this._rect
        )
      }),
      (Ps.initDefaultProps = void (Ps.prototype.dirtyRectTolerance = 10)),
      Ps)
  function Ps () {
    return (null !== ks && ks.apply(this, arguments)) || this
  }
  As.prototype.type = 'tspan'
  var Ls = E({ x: 0, y: 0 }, Aa),
    Os = {
      style: E(
        {
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          sx: !0,
          sy: !0,
          sWidth: !0,
          sHeight: !0
        },
        Pa.style
      )
    }
  u(Bs, (Rs = n)),
    (Bs.prototype.createStyle = function (t) {
      return zt(Ls, t)
    }),
    (Bs.prototype._getSize = function (t) {
      var e,
        n = this.style,
        i = n[t]
      return null != i
        ? i
        : (i =
            (i = n.image) && 'string' != typeof i && i.width && i.height
              ? n.image
              : this.__image)
        ? null == (e = n[(n = 'width' === t ? 'height' : 'width')])
          ? i[t]
          : (i[t] / i[n]) * e
        : 0
    }),
    (Bs.prototype.getWidth = function () {
      return this._getSize('width')
    }),
    (Bs.prototype.getHeight = function () {
      return this._getSize('height')
    }),
    (Bs.prototype.getAnimationStyleProps = function () {
      return Os
    }),
    (Bs.prototype.getBoundingRect = function () {
      var t = this.style
      return (
        this._rect ||
          (this._rect = new U(
            t.x || 0,
            t.y || 0,
            this.getWidth(),
            this.getHeight()
          )),
        this._rect
      )
    })
  var Rs,
    Ns = Bs
  function Bs () {
    return (null !== Rs && Rs.apply(this, arguments)) || this
  }
  Ns.prototype.type = 'image'
  var zs = Math.round
  function Es (t, e, n) {
    var i, r, o
    if (e)
      return (
        (i = e.x1),
        (r = e.x2),
        (o = e.y1),
        (e = e.y2),
        (t.x1 = i),
        (t.x2 = r),
        (t.y1 = o),
        (t.y2 = e),
        (n = n && n.lineWidth) &&
          (zs(2 * i) === zs(2 * r) && (t.x1 = t.x2 = Vs(i, n, !0)),
          zs(2 * o) === zs(2 * e)) &&
          (t.y1 = t.y2 = Vs(o, n, !0)),
        t
      )
  }
  function Fs (t, e, n) {
    var i, r, o
    if (e)
      return (
        (i = e.x),
        (r = e.y),
        (o = e.width),
        (e = e.height),
        (t.x = i),
        (t.y = r),
        (t.width = o),
        (t.height = e),
        (n = n && n.lineWidth) &&
          ((t.x = Vs(i, n, !0)),
          (t.y = Vs(r, n, !0)),
          (t.width = Math.max(Vs(i + o, n, !1) - t.x, 0 === o ? 0 : 1)),
          (t.height = Math.max(Vs(r + e, n, !1) - t.y, 0 === e ? 0 : 1))),
        t
      )
  }
  function Vs (t, e, n) {
    var i
    return e
      ? ((i = zs(2 * t)) + zs(e)) % 2 == 0
        ? i / 2
        : (i + (n ? 1 : -1)) / 2
      : t
  }
  function Hs () {
    ;(this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0)
  }
  var Ws,
    Gs = {},
    Us =
      (u(Xs, (Ws = Is)),
      (Xs.prototype.getDefaultShape = function () {
        return new Hs()
      }),
      (Xs.prototype.buildPath = function (t, e) {
        var n, i, r, o, a, s, l, u, h, c, p, d, f, g
        this.subPixelOptimize
          ? ((n = (a = Fs(Gs, e, this.style)).x),
            (i = a.y),
            (r = a.width),
            (o = a.height),
            (a.r = e.r),
            (e = a))
          : ((n = e.x), (i = e.y), (r = e.width), (o = e.height)),
          e.r
            ? ((a = t),
              (p = (e = e).x),
              (d = e.y),
              (f = e.width),
              (g = e.height),
              (e = e.r),
              f < 0 && ((p += f), (f = -f)),
              g < 0 && ((d += g), (g = -g)),
              'number' == typeof e
                ? (s = l = u = h = e)
                : e instanceof Array
                ? 1 === e.length
                  ? (s = l = u = h = e[0])
                  : 2 === e.length
                  ? ((s = u = e[0]), (l = h = e[1]))
                  : 3 === e.length
                  ? ((s = e[0]), (l = h = e[1]), (u = e[2]))
                  : ((s = e[0]), (l = e[1]), (u = e[2]), (h = e[3]))
                : (s = l = u = h = 0),
              f < s + l && ((s *= f / (c = s + l)), (l *= f / c)),
              f < u + h && ((u *= f / (c = u + h)), (h *= f / c)),
              g < l + u && ((l *= g / (c = l + u)), (u *= g / c)),
              g < s + h && ((s *= g / (c = s + h)), (h *= g / c)),
              a.moveTo(p + s, d),
              a.lineTo(p + f - l, d),
              0 !== l && a.arc(p + f - l, d + l, l, -Math.PI / 2, 0),
              a.lineTo(p + f, d + g - u),
              0 !== u && a.arc(p + f - u, d + g - u, u, 0, Math.PI / 2),
              a.lineTo(p + h, d + g),
              0 !== h && a.arc(p + h, d + g - h, h, Math.PI / 2, Math.PI),
              a.lineTo(p, d + s),
              0 !== s && a.arc(p + s, d + s, s, Math.PI, 1.5 * Math.PI))
            : t.rect(n, i, r, o)
      }),
      (Xs.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height
      }),
      Xs)
  function Xs (t) {
    return Ws.call(this, t) || this
  }
  Us.prototype.type = 'rect'
  var Ys,
    qs = { fill: '#000' },
    js = {
      style: E(
        {
          fill: !0,
          stroke: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineWidth: !0,
          fontSize: !0,
          lineHeight: !0,
          width: !0,
          height: !0,
          textShadowColor: !0,
          textShadowBlur: !0,
          textShadowOffsetX: !0,
          textShadowOffsetY: !0,
          backgroundColor: !0,
          padding: !0,
          borderColor: !0,
          borderWidth: !0,
          borderRadius: !0
        },
        Pa.style
      )
    },
    Zs =
      (u(Js, (Ys = n)),
      (Js.prototype.childrenRef = function () {
        return this._children
      }),
      (Js.prototype.update = function () {
        Ys.prototype.update.call(this),
          this.styleChanged() && this._updateSubTexts()
        for (var t = 0; t < this._children.length; t++) {
          var e = this._children[t]
          ;(e.zlevel = this.zlevel),
            (e.z = this.z),
            (e.z2 = this.z2),
            (e.culling = this.culling),
            (e.cursor = this.cursor),
            (e.invisible = this.invisible)
        }
      }),
      (Js.prototype.updateTransform = function () {
        var t = this.innerTransformable
        t
          ? (t.updateTransform(), t.transform && (this.transform = t.transform))
          : Ys.prototype.updateTransform.call(this)
      }),
      (Js.prototype.getLocalTransform = function (t) {
        var e = this.innerTransformable
        return e
          ? e.getLocalTransform(t)
          : Ys.prototype.getLocalTransform.call(this, t)
      }),
      (Js.prototype.getComputedTransform = function () {
        return (
          this.__hostTarget &&
            (this.__hostTarget.getComputedTransform(),
            this.__hostTarget.updateInnerText(!0)),
          Ys.prototype.getComputedTransform.call(this)
        )
      }),
      (Js.prototype._updateSubTexts = function () {
        var t
        ;(this._childCursor = 0),
          il((t = this.style)),
          B(t.rich, il),
          this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
          (this._children.length = this._childCursor),
          this.styleUpdated()
      }),
      (Js.prototype.addSelfToZr = function (t) {
        Ys.prototype.addSelfToZr.call(this, t)
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = t
      }),
      (Js.prototype.removeSelfFromZr = function (t) {
        Ys.prototype.removeSelfFromZr.call(this, t)
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = null
      }),
      (Js.prototype.getBoundingRect = function () {
        if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
          for (
            var t = new U(0, 0, 0, 0),
              e = this._children,
              n = [],
              i = null,
              r = 0;
            r < e.length;
            r++
          ) {
            var o = e[r],
              a = o.getBoundingRect(),
              o = o.getLocalTransform(n)
            o
              ? (t.copy(a), t.applyTransform(o), (i = i || t.clone()).union(t))
              : (i = i || a.clone()).union(a)
          }
          this._rect = i || t
        }
        return this._rect
      }),
      (Js.prototype.setDefaultTextStyle = function (t) {
        this._defaultStyle = t || qs
      }),
      (Js.prototype.setTextContent = function (t) {}),
      (Js.prototype._mergeStyle = function (t, e) {
        var n, i
        return (
          e &&
            ((n = e.rich),
            (i = t.rich || (n && {})),
            O(t, e),
            n && i ? (this._mergeRich(i, n), (t.rich = i)) : i && (t.rich = i)),
          t
        )
      }),
      (Js.prototype._mergeRich = function (t, e) {
        for (var n = R(e), i = 0; i < n.length; i++) {
          var r = n[i]
          ;(t[r] = t[r] || {}), O(t[r], e[r])
        }
      }),
      (Js.prototype.getAnimationStyleProps = function () {
        return js
      }),
      (Js.prototype._getOrCreateChild = function (t) {
        var e = this._children[this._childCursor]
        return (
          (e && e instanceof t) || (e = new t()),
          ((this._children[this._childCursor++] = e).__zr = this.__zr),
          (e.parent = this),
          e
        )
      }),
      (Js.prototype._updatePlainTexts = function () {
        var t,
          e = this.style,
          n = e.font || Z,
          i = e.padding,
          r = (function (t, e) {
            null != t && (t += '')
            var n,
              i = e.overflow,
              r = e.padding,
              o = e.font,
              a = 'truncate' === i,
              s = Hr(o),
              l = N(e.lineHeight, s),
              u = !!e.backgroundColor,
              h = 'truncate' === e.lineOverflow,
              c = e.width,
              i =
                (n =
                  null == c || ('break' !== i && 'breakAll' !== i)
                    ? t
                      ? t.split('\n')
                      : []
                    : t
                    ? Ia(t, e.font, c, 'breakAll' === i, 0).lines
                    : []).length * l,
              p = N(e.height, i)
            if (
              (p < i && h && ((h = Math.floor(p / l)), (n = n.slice(0, h))),
              t && a && null != c)
            )
              for (
                var d = _a(c, o, e.ellipsis, {
                    minChar: e.truncateMinChar,
                    placeholder: e.placeholder
                  }),
                  f = 0;
                f < n.length;
                f++
              )
                n[f] = xa(n[f], d)
            for (var h = p, g = 0, f = 0; f < n.length; f++)
              g = Math.max(Br(n[f], o), g)
            return (
              null == c && (c = g),
              (t = g),
              r && ((h += r[0] + r[2]), (t += r[1] + r[3]), (c += r[1] + r[3])),
              {
                lines: n,
                height: p,
                outerWidth: (t = u ? c : t),
                outerHeight: h,
                lineHeight: l,
                calculatedLineHeight: s,
                contentWidth: g,
                contentHeight: i,
                width: c
              }
            )
          })(sl(e), e),
          o = ll(e),
          a = !!e.backgroundColor,
          s = r.outerHeight,
          l = r.outerWidth,
          u = r.contentWidth,
          h = r.lines,
          c = r.lineHeight,
          p = this._defaultStyle,
          d = e.x || 0,
          f = e.y || 0,
          g = e.align || p.align || 'left',
          y = e.verticalAlign || p.verticalAlign || 'top',
          m = d,
          v = Vr(f, r.contentHeight, y)
        ;(o || i) &&
          ((t = Fr(d, l, g)), (f = Vr(f, s, y)), o) &&
          this._renderBackground(e, e, t, f, l, s),
          (v += c / 2),
          i &&
            ((m = al(d, g, i)),
            'top' === y ? (v += i[0]) : 'bottom' === y && (v -= i[2]))
        for (
          var _ = 0,
            o = !1,
            x = ol((('fill' in e) ? e : ((o = !0), p)).fill),
            w = rl(
              ('stroke' in e)
                ? e.stroke
                : a || (p.autoStroke && !o)
                ? null
                : ((_ = 2), p.stroke)
            ),
            b = 0 < e.textShadowBlur,
            S =
              null != e.width &&
              ('truncate' === e.overflow ||
                'break' === e.overflow ||
                'breakAll' === e.overflow),
            M = r.calculatedLineHeight,
            T = 0;
          T < h.length;
          T++
        ) {
          var C = this._getOrCreateChild(As),
            I = C.createStyle()
          C.useStyle(I),
            (I.text = h[T]),
            (I.x = m),
            (I.y = v),
            g && (I.textAlign = g),
            (I.textBaseline = 'middle'),
            (I.opacity = e.opacity),
            (I.strokeFirst = !0),
            b &&
              ((I.shadowBlur = e.textShadowBlur || 0),
              (I.shadowColor = e.textShadowColor || 'transparent'),
              (I.shadowOffsetX = e.textShadowOffsetX || 0),
              (I.shadowOffsetY = e.textShadowOffsetY || 0)),
            (I.stroke = w),
            (I.fill = x),
            w &&
              ((I.lineWidth = e.lineWidth || _),
              (I.lineDash = e.lineDash),
              (I.lineDashOffset = e.lineDashOffset || 0)),
            (I.font = n),
            el(I, e),
            (v += c),
            S &&
              C.setBoundingRect(
                new U(
                  Fr(I.x, e.width, I.textAlign),
                  Vr(I.y, M, I.textBaseline),
                  u,
                  M
                )
              )
        }
      }),
      (Js.prototype._updateRichTexts = function () {
        var t = this.style,
          e = Ma(sl(t), t),
          n = e.width,
          i = e.outerWidth,
          r = e.outerHeight,
          o = t.padding,
          a = t.x || 0,
          s = t.y || 0,
          l = this._defaultStyle,
          u = t.align || l.align,
          l = t.verticalAlign || l.verticalAlign,
          a = Fr(a, i, u),
          u = Vr(s, r, l),
          h = a,
          c = u,
          p = (o && ((h += o[3]), (c += o[0])), h + n)
        ll(t) && this._renderBackground(t, t, a, u, i, r)
        for (var d = !!t.backgroundColor, f = 0; f < e.lines.length; f++) {
          for (
            var g = e.lines[f],
              y = g.tokens,
              m = y.length,
              v = g.lineHeight,
              _ = g.width,
              x = 0,
              w = h,
              b = p,
              S = m - 1,
              M = void 0;
            x < m && (!(M = y[x]).align || 'left' === M.align);

          )
            this._placeToken(M, t, v, c, w, 'left', d),
              (_ -= M.width),
              (w += M.width),
              x++
          for (; 0 <= S && 'right' === (M = y[S]).align; )
            this._placeToken(M, t, v, c, b, 'right', d),
              (_ -= M.width),
              (b -= M.width),
              S--
          for (w += (n - (w - h) - (p - b) - _) / 2; x <= S; )
            (M = y[x]),
              this._placeToken(M, t, v, c, w + M.width / 2, 'center', d),
              (w += M.width),
              x++
          c += v
        }
      }),
      (Js.prototype._placeToken = function (t, e, n, i, r, o, a) {
        var s = e.rich[t.styleName] || {},
          l = ((s.text = t.text), t.verticalAlign),
          u = i + n / 2,
          l =
            ('top' === l
              ? (u = i + t.height / 2)
              : 'bottom' === l && (u = i + n - t.height / 2),
            !t.isLineHolder &&
              ll(s) &&
              this._renderBackground(
                s,
                e,
                'right' === o
                  ? r - t.width
                  : 'center' === o
                  ? r - t.width / 2
                  : r,
                u - t.height / 2,
                t.width,
                t.height
              ),
            !!s.backgroundColor),
          i = t.textPadding,
          n =
            (i &&
              ((r = al(r, o, i)),
              (u -= t.height / 2 - i[0] - t.innerHeight / 2)),
            this._getOrCreateChild(As)),
          i = n.createStyle(),
          h = (n.useStyle(i), this._defaultStyle),
          c = !1,
          p = 0,
          d = ol(('fill' in s ? s : 'fill' in e ? e : ((c = !0), h)).fill),
          l = rl(
            'stroke' in s
              ? s.stroke
              : 'stroke' in e
              ? e.stroke
              : l || a || (h.autoStroke && !c)
              ? null
              : ((p = 2), h.stroke)
          ),
          a = 0 < s.textShadowBlur || 0 < e.textShadowBlur,
          c =
            ((i.text = t.text),
            (i.x = r),
            (i.y = u),
            a &&
              ((i.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0),
              (i.shadowColor =
                s.textShadowColor || e.textShadowColor || 'transparent'),
              (i.shadowOffsetX =
                s.textShadowOffsetX || e.textShadowOffsetX || 0),
              (i.shadowOffsetY =
                s.textShadowOffsetY || e.textShadowOffsetY || 0)),
            (i.textAlign = o),
            (i.textBaseline = 'middle'),
            (i.font = t.font || Z),
            (i.opacity = St(s.opacity, e.opacity, 1)),
            el(i, s),
            l &&
              ((i.lineWidth = St(s.lineWidth, e.lineWidth, p)),
              (i.lineDash = N(s.lineDash, e.lineDash)),
              (i.lineDashOffset = e.lineDashOffset || 0),
              (i.stroke = l)),
            d && (i.fill = d),
            t.contentWidth),
          h = t.contentHeight
        n.setBoundingRect(
          new U(Fr(i.x, c, i.textAlign), Vr(i.y, h, i.textBaseline), c, h)
        )
      }),
      (Js.prototype._renderBackground = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          h = t.backgroundColor,
          c = t.borderWidth,
          p = t.borderColor,
          d = h && h.image,
          f = h && !d,
          g = t.borderRadius,
          y = this,
          g =
            ((f || t.lineHeight || (c && p)) &&
              ((a = this._getOrCreateChild(Us)).useStyle(a.createStyle()),
              (a.style.fill = null),
              ((u = a.shape).x = n),
              (u.y = i),
              (u.width = r),
              (u.height = o),
              (u.r = g),
              a.dirtyShape()),
            f
              ? (((l = a.style).fill = h || null),
                (l.fillOpacity = N(t.fillOpacity, 1)))
              : d &&
                (((s = this._getOrCreateChild(Ns)).onload = function () {
                  y.dirtyStyle()
                }),
                ((u = s.style).image = h.image),
                (u.x = n),
                (u.y = i),
                (u.width = r),
                (u.height = o)),
            c &&
              p &&
              (((l = a.style).lineWidth = c),
              (l.stroke = p),
              (l.strokeOpacity = N(t.strokeOpacity, 1)),
              (l.lineDash = t.borderDash),
              (l.lineDashOffset = t.borderDashOffset || 0),
              (a.strokeContainThreshold = 0),
              a.hasFill()) &&
              a.hasStroke() &&
              ((l.strokeFirst = !0), (l.lineWidth *= 2)),
            (a || s).style)
        ;(g.shadowBlur = t.shadowBlur || 0),
          (g.shadowColor = t.shadowColor || 'transparent'),
          (g.shadowOffsetX = t.shadowOffsetX || 0),
          (g.shadowOffsetY = t.shadowOffsetY || 0),
          (g.opacity = St(t.opacity, e.opacity, 1))
      }),
      (Js.makeFont = function (t) {
        var e = ''
        return (
          ((e = nl(t)
            ? [
                t.fontStyle,
                t.fontWeight,
                tl(t.fontSize),
                t.fontFamily || 'sans-serif'
              ].join(' ')
            : e) &&
            It(e)) ||
          t.textFont ||
          t.font
        )
      }),
      Js),
    Ks = { left: !0, right: 1, center: 1 },
    $s = { top: 1, bottom: 1, middle: 1 },
    Qs = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily']
  function Js (t) {
    var e = Ys.call(this) || this
    return (
      (e.type = 'text'),
      (e._children = []),
      (e._defaultStyle = qs),
      e.attr(t),
      e
    )
  }
  function tl (t) {
    return 'string' != typeof t ||
      (-1 === t.indexOf('px') &&
        -1 === t.indexOf('rem') &&
        -1 === t.indexOf('em'))
      ? isNaN(+t)
        ? x + 'px'
        : t + 'px'
      : t
  }
  function el (t, e) {
    for (var n = 0; n < Qs.length; n++) {
      var i = Qs[n],
        r = e[i]
      null != r && (t[i] = r)
    }
  }
  function nl (t) {
    return null != t.fontSize || t.fontFamily || t.fontWeight
  }
  function il (t) {
    var e
    t &&
      ((t.font = Zs.makeFont(t)),
      (e = t.align),
      (t.align =
        null == (e = 'middle' === e ? 'center' : e) || Ks[e] ? e : 'left'),
      (e = t.verticalAlign),
      (t.verticalAlign =
        null == (e = 'center' === e ? 'middle' : e) || $s[e] ? e : 'top'),
      t.padding) &&
      (t.padding = Tt(t.padding))
  }
  function rl (t, e) {
    return null == t || e <= 0 || 'transparent' === t || 'none' === t
      ? null
      : t.image || t.colorStops
      ? '#000'
      : t
  }
  function ol (t) {
    return null == t || 'none' === t
      ? null
      : t.image || t.colorStops
      ? '#000'
      : t
  }
  function al (t, e, n) {
    return 'right' === e
      ? t - n[1]
      : 'center' === e
      ? t + n[3] / 2 - n[1] / 2
      : t + n[3]
  }
  function sl (t) {
    t = t.text
    return null != t && (t += ''), t
  }
  function ll (t) {
    return !!(
      t.backgroundColor ||
      t.lineHeight ||
      (t.borderWidth && t.borderColor)
    )
  }
  var ul = Yo(),
    hl = 1,
    cl = {},
    pl = Yo(),
    dl = Yo(),
    fl = 0,
    gl = 1,
    yl = 2,
    ml = ['emphasis', 'blur', 'select'],
    vl = ['normal', 'emphasis', 'blur', 'select'],
    _l = 'highlight',
    xl = 'downplay',
    wl = 'select',
    bl = 'unselect',
    Sl = 'toggleSelect'
  function Ml (t) {
    return null != t && 'none' !== t
  }
  var Tl = new ei(100)
  function Cl (t) {
    var e
    return H(t)
      ? ((e = Tl.get(t)) || ((e = mi(t, -0.1)), Tl.put(t, e)), e)
      : vt(t)
      ? (((e = O({}, t)).colorStops = F(t.colorStops, function (t) {
          return { offset: t.offset, color: mi(t.color, -0.1) }
        })),
        e)
      : t
  }
  function Il (t, e, n) {
    t.onHoverStateChange &&
      (t.hoverState || 0) !== n &&
      t.onHoverStateChange(e),
      (t.hoverState = n)
  }
  function kl (t) {
    Il(t, 'emphasis', yl)
  }
  function Dl (t) {
    t.hoverState === yl && Il(t, 'normal', fl)
  }
  function Al (t) {
    Il(t, 'blur', gl)
  }
  function Pl (t) {
    t.hoverState === gl && Il(t, 'normal', fl)
  }
  function Ll (t) {
    t.selected = !0
  }
  function Ol (t) {
    t.selected = !1
  }
  function Rl (t, e, n) {
    e(t, n)
  }
  function Nl (t, e, n) {
    Rl(t, e, n),
      t.isGroup &&
        t.traverse(function (t) {
          Rl(t, e, n)
        })
  }
  function Bl (t, e, n) {
    var i = 0 <= I(t.currentStates, e),
      r = t.style.opacity,
      t = i
        ? null
        : (function (t, e, n, i) {
            for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
              var s = e[a],
                l = r[s]
              o[s] = null == l ? i && i[s] : l
            }
            for (a = 0; a < t.animators.length; a++) {
              var u = t.animators[a]
              u.__fromStateTransition &&
                u.__fromStateTransition.indexOf(n) < 0 &&
                'style' === u.targetName &&
                u.saveTo(o, e)
            }
            return o
          })(t, ['opacity'], e, { opacity: 1 }),
      e = (n = n || {}).style || {}
    return (
      null == e.opacity &&
        ((n = O({}, n)),
        (e = O({ opacity: i ? r : 0.1 * t.opacity }, e)),
        (n.style = e)),
      n
    )
  }
  function zl (t, e) {
    var n,
      i,
      r,
      o,
      a,
      s = this.states[t]
    if (this.style) {
      if ('emphasis' === t)
        return (
          (n = this),
          (i = s),
          (e = (e = e) && 0 <= I(e, 'select')),
          (a = !1),
          n instanceof Is &&
            ((r = pl(n)),
            (o = (e && r.selectFill) || r.normalFill),
            (e = (e && r.selectStroke) || r.normalStroke),
            Ml(o) || Ml(e)) &&
            ('inherit' === (r = (i = i || {}).style || {}).fill
              ? ((a = !0), (i = O({}, i)), ((r = O({}, r)).fill = o))
              : !Ml(r.fill) && Ml(o)
              ? ((a = !0), (i = O({}, i)), ((r = O({}, r)).fill = Cl(o)))
              : !Ml(r.stroke) &&
                Ml(e) &&
                (a || ((i = O({}, i)), (r = O({}, r))), (r.stroke = Cl(e))),
            (i.style = r)),
          i &&
            null == i.z2 &&
            (a || (i = O({}, i)),
            (o = n.z2EmphasisLift),
            (i.z2 = n.z2 + (null != o ? o : 10))),
          i
        )
      if ('blur' === t) return Bl(this, t, s)
      if ('select' === t)
        return (
          (e = this),
          (r = s) &&
            null == r.z2 &&
            ((r = O({}, r)),
            (a = e.z2SelectLift),
            (r.z2 = e.z2 + (null != a ? a : 9))),
          r
        )
    }
    return s
  }
  function El (t) {
    t.stateProxy = zl
    var e = t.getTextContent(),
      t = t.getTextGuideLine()
    e && (e.stateProxy = zl), t && (t.stateProxy = zl)
  }
  function Fl (t, e) {
    Yl(t, e) || t.__highByOuter || Nl(t, kl)
  }
  function Vl (t, e) {
    Yl(t, e) || t.__highByOuter || Nl(t, Dl)
  }
  function Hl (t, e) {
    ;(t.__highByOuter |= 1 << (e || 0)), Nl(t, kl)
  }
  function Wl (t, e) {
    ;(t.__highByOuter &= ~(1 << (e || 0))) || Nl(t, Dl)
  }
  function Gl (t) {
    Nl(t, Pl)
  }
  function Ul (t) {
    Nl(t, Ll)
  }
  function Xl (t) {
    Nl(t, Ol)
  }
  function Yl (t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch
  }
  function ql (r) {
    var e = r.getModel(),
      o = [],
      a = []
    e.eachComponent(function (t, e) {
      var n = dl(e),
        t = 'series' === t,
        i = t ? r.getViewOfSeriesModel(e) : r.getViewOfComponentModel(e)
      t || a.push(i),
        n.isBlured &&
          (i.group.traverse(function (t) {
            Pl(t)
          }),
          t) &&
          o.push(e),
        (n.isBlured = !1)
    }),
      B(a, function (t) {
        t && t.toggleBlurSeries && t.toggleBlurSeries(o, !1, e)
      })
  }
  function jl (t, o, a, s) {
    var l,
      u,
      h,
      n = s.getModel()
    function c (t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = t.getItemGraphicEl(e[n])
        i && Gl(i)
      }
    }
    ;(a = a || 'coordinateSystem'),
      null != t &&
        o &&
        'none' !== o &&
        ((l = n.getSeriesByIndex(t)),
        (u = l.coordinateSystem) && u.master && (u = u.master),
        (h = []),
        n.eachSeries(function (t) {
          var e = l === t,
            n = t.coordinateSystem
          if (
            (n && n.master && (n = n.master),
            !(
              ('series' === a && !e) ||
              ('coordinateSystem' === a && !(n && u ? n === u : e)) ||
              ('series' === o && e)
            ))
          ) {
            if (
              (s.getViewOfSeriesModel(t).group.traverse(function (t) {
                ;(t.__highByOuter && e && 'self' === o) || Al(t)
              }),
              ut(o))
            )
              c(t.getData(), o)
            else if (L(o))
              for (var i = R(o), r = 0; r < i.length; r++)
                c(t.getData(i[r]), o[i[r]])
            h.push(t), (dl(t).isBlured = !0)
          }
        }),
        n.eachComponent(function (t, e) {
          'series' !== t &&
            (t = s.getViewOfComponentModel(e)) &&
            t.toggleBlurSeries &&
            t.toggleBlurSeries(h, !0, n)
        }))
  }
  function Zl (t, e, n) {
    null != t &&
      null != e &&
      (t = n.getModel().getComponent(t, e)) &&
      ((dl(t).isBlured = !0), (e = n.getViewOfComponentModel(t))) &&
      e.focusBlurEnabled &&
      e.group.traverse(function (t) {
        Al(t)
      })
  }
  function Kl (t, e, n, i) {
    var r = { focusSelf: !1, dispatchers: null }
    if (null == t || 'series' === t || null == e || null == n) return r
    t = i.getModel().getComponent(t, e)
    if (!t) return r
    e = i.getViewOfComponentModel(t)
    if (!e || !e.findHighDownDispatchers) return r
    for (var o, a = e.findHighDownDispatchers(n), s = 0; s < a.length; s++)
      if ('self' === ul(a[s]).focus) {
        o = !0
        break
      }
    return { focusSelf: o, dispatchers: a }
  }
  function $l (i) {
    B(i.getAllData(), function (t) {
      var e = t.data,
        n = t.type
      e.eachItemGraphicEl(function (t, e) {
        ;(i.isSelected(e, n) ? Ul : Xl)(t)
      })
    })
  }
  function Ql (t, e, n) {
    nu(t, !0), Nl(t, El)
    ;(t = ul(t)),
      null != e
        ? ((t.focus = e), (t.blurScope = n))
        : t.focus && (t.focus = null)
  }
  function Jl (t, e, n, i) {
    i ? nu(t, !1) : Ql(t, e, n)
  }
  var tu = ['emphasis', 'blur', 'select'],
    eu = {
      itemStyle: 'getItemStyle',
      lineStyle: 'getLineStyle',
      areaStyle: 'getAreaStyle'
    }
  function nu (t, e) {
    var e = !1 === e,
      n = t
    t.highDownSilentOnTouch &&
      (n.__highDownSilentOnTouch = t.highDownSilentOnTouch),
      (e && !n.__highDownDispatcher) ||
        ((n.__highByOuter = n.__highByOuter || 0),
        (n.__highDownDispatcher = !e))
  }
  function iu (t) {
    return !(!t || !t.__highDownDispatcher)
  }
  function ru (t) {
    t = t.type
    return t === wl || t === bl || t === Sl
  }
  function ou (t) {
    t = t.type
    return t === _l || t === xl
  }
  var au = us.CMD,
    su = [[], [], []],
    lu = Math.sqrt,
    uu = Math.atan2
  var hu = Math.sqrt,
    cu = Math.sin,
    pu = Math.cos,
    du = Math.PI
  function fu (t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1])
  }
  function gu (t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (fu(t) * fu(e))
  }
  function yu (t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(gu(t, e))
  }
  function mu (t, e, n, i, r, o, a, s, l, u, h) {
    var l = l * (du / 180),
      c = (pu(l) * (t - n)) / 2 + (cu(l) * (e - i)) / 2,
      p = (-1 * cu(l) * (t - n)) / 2 + (pu(l) * (e - i)) / 2,
      d = (c * c) / (a * a) + (p * p) / (s * s),
      d =
        (1 < d && ((a *= hu(d)), (s *= hu(d))),
        (r === o ? -1 : 1) *
          hu(
            (a * a * (s * s) - a * a * (p * p) - s * s * (c * c)) /
              (a * a * (p * p) + s * s * (c * c))
          ) || 0),
      r = (d * a * p) / s,
      d = (d * -s * c) / a,
      t = (t + n) / 2 + pu(l) * r - cu(l) * d,
      n = (e + i) / 2 + cu(l) * r + pu(l) * d,
      e = yu([1, 0], [(c - r) / a, (p - d) / s]),
      i = [(c - r) / a, (p - d) / s],
      c = [(-1 * c - r) / a, (-1 * p - d) / s],
      r = yu(i, c)
    gu(i, c) <= -1 && (r = du),
      (r = 1 <= gu(i, c) ? 0 : r) < 0 &&
        ((p = Math.round((r / du) * 1e6) / 1e6), (r = 2 * du + (p % 2) * du)),
      h.addData(u, t, n, a, s, e, r, l, o)
  }
  var vu = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    _u = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g
  u(bu, (xu = Is)), (bu.prototype.applyTransform = function (t) {})
  var xu,
    wu = bu
  function bu () {
    return (null !== xu && xu.apply(this, arguments)) || this
  }
  function Su (t) {
    return null != t.setData
  }
  function Mu (t, e) {
    var S = (function (t) {
        var e = new us()
        if (t) {
          var n,
            i = 0,
            r = 0,
            o = i,
            a = r,
            s = us.CMD,
            l = t.match(vu)
          if (l) {
            for (var u = 0; u < l.length; u++) {
              for (
                var h = l[u],
                  c = h.charAt(0),
                  p = void 0,
                  d = h.match(_u) || [],
                  f = d.length,
                  g = 0;
                g < f;
                g++
              )
                d[g] = parseFloat(d[g])
              for (var y = 0; y < f; ) {
                var m = void 0,
                  v = void 0,
                  _ = void 0,
                  x = void 0,
                  w = void 0,
                  b = void 0,
                  S = void 0,
                  M = i,
                  T = r,
                  C = void 0,
                  I = void 0
                switch (c) {
                  case 'l':
                    ;(i += d[y++]), (r += d[y++]), (p = s.L), e.addData(p, i, r)
                    break
                  case 'L':
                    ;(i = d[y++]), (r = d[y++]), (p = s.L), e.addData(p, i, r)
                    break
                  case 'm':
                    ;(i += d[y++]),
                      (r += d[y++]),
                      (p = s.M),
                      e.addData(p, i, r),
                      (o = i),
                      (a = r),
                      (c = 'l')
                    break
                  case 'M':
                    ;(i = d[y++]),
                      (r = d[y++]),
                      (p = s.M),
                      e.addData(p, i, r),
                      (o = i),
                      (a = r),
                      (c = 'L')
                    break
                  case 'h':
                    ;(i += d[y++]), (p = s.L), e.addData(p, i, r)
                    break
                  case 'H':
                    ;(i = d[y++]), (p = s.L), e.addData(p, i, r)
                    break
                  case 'v':
                    ;(r += d[y++]), (p = s.L), e.addData(p, i, r)
                    break
                  case 'V':
                    ;(r = d[y++]), (p = s.L), e.addData(p, i, r)
                    break
                  case 'C':
                    ;(p = s.C),
                      e.addData(
                        p,
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++]
                      ),
                      (i = d[y - 2]),
                      (r = d[y - 1])
                    break
                  case 'c':
                    ;(p = s.C),
                      e.addData(
                        p,
                        d[y++] + i,
                        d[y++] + r,
                        d[y++] + i,
                        d[y++] + r,
                        d[y++] + i,
                        d[y++] + r
                      ),
                      (i += d[y - 2]),
                      (r += d[y - 1])
                    break
                  case 'S':
                    ;(m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.C && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (p = s.C),
                      (M = d[y++]),
                      (T = d[y++]),
                      (i = d[y++]),
                      (r = d[y++]),
                      e.addData(p, m, v, M, T, i, r)
                    break
                  case 's':
                    ;(m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.C && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (p = s.C),
                      (M = i + d[y++]),
                      (T = r + d[y++]),
                      (i += d[y++]),
                      (r += d[y++]),
                      e.addData(p, m, v, M, T, i, r)
                    break
                  case 'Q':
                    ;(M = d[y++]),
                      (T = d[y++]),
                      (i = d[y++]),
                      (r = d[y++]),
                      (p = s.Q),
                      e.addData(p, M, T, i, r)
                    break
                  case 'q':
                    ;(M = d[y++] + i),
                      (T = d[y++] + r),
                      (i += d[y++]),
                      (r += d[y++]),
                      (p = s.Q),
                      e.addData(p, M, T, i, r)
                    break
                  case 'T':
                    ;(m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.Q && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (i = d[y++]),
                      (r = d[y++]),
                      (p = s.Q),
                      e.addData(p, m, v, i, r)
                    break
                  case 't':
                    ;(m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.Q && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (i += d[y++]),
                      (r += d[y++]),
                      (p = s.Q),
                      e.addData(p, m, v, i, r)
                    break
                  case 'A':
                    ;(_ = d[y++]),
                      (x = d[y++]),
                      (w = d[y++]),
                      (b = d[y++]),
                      (S = d[y++]),
                      mu(
                        (M = i),
                        (T = r),
                        (i = d[y++]),
                        (r = d[y++]),
                        b,
                        S,
                        _,
                        x,
                        w,
                        (p = s.A),
                        e
                      )
                    break
                  case 'a':
                    ;(_ = d[y++]),
                      (x = d[y++]),
                      (w = d[y++]),
                      (b = d[y++]),
                      (S = d[y++]),
                      mu(
                        (M = i),
                        (T = r),
                        (i += d[y++]),
                        (r += d[y++]),
                        b,
                        S,
                        _,
                        x,
                        w,
                        (p = s.A),
                        e
                      )
                }
              }
              ;('z' !== c && 'Z' !== c) ||
                ((p = s.Z), e.addData(p), (i = o), (r = a)),
                (n = p)
            }
            e.toStatic()
          }
        }
        return e
      })(t),
      t = O({}, e)
    return (
      (t.buildPath = function (t) {
        var e
        Su(t)
          ? (t.setData(S.data), (e = t.getContext()) && t.rebuildPath(e, 1))
          : S.rebuildPath((e = t), 1)
      }),
      (t.applyTransform = function (t) {
        var e = S,
          n = t
        if (n) {
          for (
            var i,
              r,
              o,
              a,
              s = e.data,
              l = e.len(),
              u = au.M,
              h = au.C,
              c = au.L,
              p = au.R,
              d = au.A,
              f = au.Q,
              g = 0,
              y = 0;
            g < l;

          ) {
            switch (((i = s[g++]), (y = g), (r = 0), i)) {
              case u:
              case c:
                r = 1
                break
              case h:
                r = 3
                break
              case f:
                r = 2
                break
              case d:
                var m = n[4],
                  v = n[5],
                  _ = lu(n[0] * n[0] + n[1] * n[1]),
                  x = lu(n[2] * n[2] + n[3] * n[3]),
                  w = uu(-n[1] / x, n[0] / _)
                ;(s[g] *= _),
                  (s[g++] += m),
                  (s[g] *= x),
                  (s[g++] += v),
                  (s[g++] *= _),
                  (s[g++] *= x),
                  (s[g++] += w),
                  (s[g++] += w),
                  (y = g += 2)
                break
              case p:
                ;(a[0] = s[g++]),
                  (a[1] = s[g++]),
                  ne(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1]),
                  (a[0] += s[g++]),
                  (a[1] += s[g++]),
                  ne(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1])
            }
            for (o = 0; o < r; o++) {
              var b = su[o]
              ;(b[0] = s[g++]),
                (b[1] = s[g++]),
                ne(b, b, n),
                (s[y++] = b[0]),
                (s[y++] = b[1])
            }
          }
          e.increaseVersion()
        }
        this.dirtyShape()
      }),
      t
    )
  }
  function Tu () {
    ;(this.cx = 0), (this.cy = 0), (this.r = 0)
  }
  u(ku, (Cu = Is)),
    (ku.prototype.getDefaultShape = function () {
      return new Tu()
    }),
    (ku.prototype.buildPath = function (t, e) {
      t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
    })
  var Cu,
    Iu = ku
  function ku (t) {
    return Cu.call(this, t) || this
  }
  Iu.prototype.type = 'circle'
  function Du () {
    ;(this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0)
  }
  u(Lu, (Au = Is)),
    (Lu.prototype.getDefaultShape = function () {
      return new Du()
    }),
    (Lu.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = e.rx,
        e = e.ry,
        o = 0.5522848 * r,
        a = 0.5522848 * e
      t.moveTo(n - r, i),
        t.bezierCurveTo(n - r, i - a, n - o, i - e, n, i - e),
        t.bezierCurveTo(n + o, i - e, n + r, i - a, n + r, i),
        t.bezierCurveTo(n + r, i + a, n + o, i + e, n, i + e),
        t.bezierCurveTo(n - o, i + e, n - r, i + a, n - r, i),
        t.closePath()
    })
  var Au,
    Pu = Lu
  function Lu (t) {
    return Au.call(this, t) || this
  }
  Pu.prototype.type = 'ellipse'
  var Ou = Math.PI,
    Ru = 2 * Ou,
    Nu = Math.sin,
    Bu = Math.cos,
    zu = Math.acos,
    Eu = Math.atan2,
    Fu = Math.abs,
    Vu = Math.sqrt,
    Hu = Math.max,
    Wu = Math.min,
    Gu = 1e-4
  function Uu (t, e, n, i, r, o, a) {
    var s = t - n,
      l = e - i,
      a = (a ? o : -o) / Vu(s * s + l * l),
      l = a * l,
      a = -a * s,
      s = t + l,
      t = e + a,
      e = n + l,
      n = i + a,
      i = (s + e) / 2,
      u = (t + n) / 2,
      h = e - s,
      c = n - t,
      p = h * h + c * c,
      o = r - o,
      s = s * n - e * t,
      n = (c < 0 ? -1 : 1) * Vu(Hu(0, o * o * p - s * s)),
      e = (s * c - h * n) / p,
      t = (-s * h - c * n) / p,
      d = (s * c + h * n) / p,
      s = (-s * h + c * n) / p,
      h = e - i,
      c = t - u,
      n = d - i,
      p = s - u
    return (
      n * n + p * p < h * h + c * c && ((e = d), (t = s)),
      { cx: e, cy: t, x0: -l, y0: -a, x1: e * (r / o - 1), y1: t * (r / o - 1) }
    )
  }
  function Xu (t, e) {
    var n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m,
      v,
      _,
      x,
      w,
      b,
      S,
      M,
      T,
      C,
      I,
      k,
      D,
      A,
      P,
      L = Hu(e.r, 0),
      O = Hu(e.r0 || 0, 0),
      R = 0 < L
    ;(R || 0 < O) &&
      (R || ((L = O), (O = 0)),
      L < O && ((R = L), (L = O), (O = R)),
      (R = e.startAngle),
      (n = e.endAngle),
      isNaN(R) ||
        isNaN(n) ||
        ((i = e.cx),
        (r = e.cy),
        (o = !!e.clockwise),
        (w = Fu(n - R)),
        Gu < (a = Ru < w && w % Ru) && (w = a),
        Gu < L
          ? Ru - Gu < w
            ? (t.moveTo(i + L * Bu(R), r + L * Nu(R)),
              t.arc(i, r, L, R, n, !o),
              Gu < O &&
                (t.moveTo(i + O * Bu(n), r + O * Nu(n)),
                t.arc(i, r, O, n, R, o)))
            : ((g =
                f =
                d =
                p =
                S =
                b =
                c =
                h =
                I =
                C =
                T =
                M =
                u =
                l =
                s =
                a =
                  void 0),
              (y = L * Bu(R)),
              (m = L * Nu(R)),
              (v = O * Bu(n)),
              (_ = O * Nu(n)),
              (x = Gu < w) &&
                ((e = e.cornerRadius) &&
                  ((a = (e = (function (t) {
                    if (V(t)) {
                      var e = t.length
                      if (!e) return t
                      e =
                        1 === e
                          ? [t[0], t[0], 0, 0]
                          : 2 === e
                          ? [t[0], t[0], t[1], t[1]]
                          : 3 === e
                          ? t.concat(t[2])
                          : t
                    } else e = [t, t, t, t]
                    return e
                  })(e))[0]),
                  (s = e[1]),
                  (l = e[2]),
                  (u = e[3])),
                (e = Fu(L - O) / 2),
                (M = Wu(e, l)),
                (T = Wu(e, u)),
                (C = Wu(e, a)),
                (I = Wu(e, s)),
                (b = h = Hu(M, T)),
                (S = c = Hu(C, I)),
                Gu < h || Gu < c) &&
                ((p = L * Bu(n)),
                (d = L * Nu(n)),
                (f = O * Bu(R)),
                (g = O * Nu(R)),
                w < Ou) &&
                (e = (function (t, e, n, i, r, o, a, s) {
                  var l = (s = s - o) * (n = n - t) - (a = a - r) * (i = i - e)
                  if (!(l * l < Gu))
                    return [
                      t + (l = (a * (e - o) - s * (t - r)) / l) * n,
                      e + l * i
                    ]
                })(y, m, f, g, p, d, v, _)) &&
                ((M = y - e[0]),
                (T = m - e[1]),
                (C = p - e[0]),
                (I = d - e[1]),
                (w =
                  1 /
                  Nu(
                    zu(
                      (M * C + T * I) / (Vu(M * M + T * T) * Vu(C * C + I * I))
                    ) / 2
                  )),
                (M = Vu(e[0] * e[0] + e[1] * e[1])),
                (b = Wu(h, (L - M) / (1 + w))),
                (S = Wu(c, (O - M) / (w - 1)))),
              x
                ? Gu < b
                  ? ((k = Wu(l, b)),
                    (D = Wu(u, b)),
                    (A = Uu(f, g, y, m, L, k, o)),
                    (P = Uu(p, d, v, _, L, D, o)),
                    t.moveTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    b < h && k === D
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          b,
                          Eu(A.y0, A.x0),
                          Eu(P.y0, P.x0),
                          !o
                        )
                      : (0 < k &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            k,
                            Eu(A.y0, A.x0),
                            Eu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          L,
                          Eu(A.cy + A.y1, A.cx + A.x1),
                          Eu(P.cy + P.y1, P.cx + P.x1),
                          !o
                        ),
                        0 < D &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            D,
                            Eu(P.y1, P.x1),
                            Eu(P.y0, P.x0),
                            !o
                          )))
                  : (t.moveTo(i + y, r + m), t.arc(i, r, L, R, n, !o))
                : t.moveTo(i + y, r + m),
              Gu < O && x
                ? Gu < S
                  ? ((k = Wu(a, S)),
                    (A = Uu(v, _, p, d, O, -(D = Wu(s, S)), o)),
                    (P = Uu(y, m, f, g, O, -k, o)),
                    t.lineTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    S < c && k === D
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          S,
                          Eu(A.y0, A.x0),
                          Eu(P.y0, P.x0),
                          !o
                        )
                      : (0 < D &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            D,
                            Eu(A.y0, A.x0),
                            Eu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          O,
                          Eu(A.cy + A.y1, A.cx + A.x1),
                          Eu(P.cy + P.y1, P.cx + P.x1),
                          o
                        ),
                        0 < k &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            k,
                            Eu(P.y1, P.x1),
                            Eu(P.y0, P.x0),
                            !o
                          )))
                  : (t.lineTo(i + v, r + _), t.arc(i, r, O, n, R, o))
                : t.lineTo(i + v, r + _))
          : t.moveTo(i, r),
        t.closePath()))
  }
  function Yu () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r0 = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0),
      (this.cornerRadius = 0)
  }
  u(Zu, (qu = Is)),
    (Zu.prototype.getDefaultShape = function () {
      return new Yu()
    }),
    (Zu.prototype.buildPath = function (t, e) {
      Xu(t, e)
    }),
    (Zu.prototype.isZeroArea = function () {
      return (
        this.shape.startAngle === this.shape.endAngle ||
        this.shape.r === this.shape.r0
      )
    })
  var qu,
    ju = Zu
  function Zu (t) {
    return qu.call(this, t) || this
  }
  ju.prototype.type = 'sector'
  function Ku () {
    ;(this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0)
  }
  u(Ju, ($u = Is)),
    (Ju.prototype.getDefaultShape = function () {
      return new Ku()
    }),
    (Ju.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = 2 * Math.PI
      t.moveTo(n + e.r, i),
        t.arc(n, i, e.r, 0, r, !1),
        t.moveTo(n + e.r0, i),
        t.arc(n, i, e.r0, 0, r, !0)
    })
  var $u,
    Qu = Ju
  function Ju (t) {
    return $u.call(this, t) || this
  }
  function th (t, e, n) {
    var i = e.smooth,
      r = e.points
    if (r && 2 <= r.length) {
      if (i) {
        var o = (function (t, e, n, i) {
          var r,
            o,
            a = [],
            s = [],
            l = [],
            u = []
          if (i) {
            for (
              var h = [1 / 0, 1 / 0], c = [-1 / 0, -1 / 0], p = 0, d = t.length;
              p < d;
              p++
            )
              ie(h, h, t[p]), re(c, c, t[p])
            ie(h, h, i[0]), re(c, c, i[1])
          }
          for (p = 0, d = t.length; p < d; p++) {
            var f = t[p]
            if (n) (r = t[p ? p - 1 : d - 1]), (o = t[(p + 1) % d])
            else {
              if (0 === p || p === d - 1) {
                a.push(Ut(t[p]))
                continue
              }
              ;(r = t[p - 1]), (o = t[p + 1])
            }
            Yt(s, o, r), Zt(s, s, e)
            var g = $t(f, r),
              y = $t(f, o),
              m = g + y,
              m =
                (0 !== m && ((g /= m), (y /= m)),
                Zt(l, s, -g),
                Zt(u, s, y),
                Xt([], f, l)),
              g = Xt([], f, u)
            i && (re(m, m, h), ie(m, m, c), re(g, g, h), ie(g, g, c)),
              a.push(m),
              a.push(g)
          }
          return n && a.push(a.shift()), a
        })(r, i, n, e.smoothConstraint)
        t.moveTo(r[0][0], r[0][1])
        for (var a = r.length, s = 0; s < (n ? a : a - 1); s++) {
          var l = o[2 * s],
            u = o[2 * s + 1],
            h = r[(s + 1) % a]
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
        }
      } else {
        t.moveTo(r[0][0], r[0][1])
        for (var s = 1, c = r.length; s < c; s++) t.lineTo(r[s][0], r[s][1])
      }
      n && t.closePath()
    }
  }
  Qu.prototype.type = 'ring'
  function eh () {
    ;(this.points = null), (this.smooth = 0), (this.smoothConstraint = null)
  }
  u(rh, (nh = Is)),
    (rh.prototype.getDefaultShape = function () {
      return new eh()
    }),
    (rh.prototype.buildPath = function (t, e) {
      th(t, e, !0)
    })
  var nh,
    ih = rh
  function rh (t) {
    return nh.call(this, t) || this
  }
  ih.prototype.type = 'polygon'
  function oh () {
    ;(this.points = null),
      (this.percent = 1),
      (this.smooth = 0),
      (this.smoothConstraint = null)
  }
  u(lh, (ah = Is)),
    (lh.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null }
    }),
    (lh.prototype.getDefaultShape = function () {
      return new oh()
    }),
    (lh.prototype.buildPath = function (t, e) {
      th(t, e, !1)
    })
  var ah,
    sh = lh
  function lh (t) {
    return ah.call(this, t) || this
  }
  sh.prototype.type = 'polyline'
  function uh () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.percent = 1)
  }
  var hh,
    ch = {},
    ph =
      (u(dh, (hh = Is)),
      (dh.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (dh.prototype.getDefaultShape = function () {
        return new uh()
      }),
      (dh.prototype.buildPath = function (t, e) {
        o = (
          this.subPixelOptimize
            ? ((n = (o = Es(ch, e, this.style)).x1), (i = o.y1), (r = o.x2), o)
            : ((n = e.x1), (i = e.y1), (r = e.x2), e)
        ).y2
        var n,
          i,
          r,
          o,
          e = e.percent
        0 !== e &&
          (t.moveTo(n, i),
          e < 1 && ((r = n * (1 - e) + r * e), (o = i * (1 - e) + o * e)),
          t.lineTo(r, o))
      }),
      (dh.prototype.pointAt = function (t) {
        var e = this.shape
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
      }),
      dh)
  function dh (t) {
    return hh.call(this, t) || this
  }
  ph.prototype.type = 'line'
  function fh () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.cpx1 = 0),
      (this.cpy1 = 0),
      (this.percent = 1)
  }
  var gh = []
  function yh (t, e, n) {
    var i = t.cpx2,
      r = t.cpy2
    return null != i || null != r
      ? [
          (n ? En : zn)(t.x1, t.cpx1, t.cpx2, t.x2, e),
          (n ? En : zn)(t.y1, t.cpy1, t.cpy2, t.y2, e)
        ]
      : [
          (n ? Un : Gn)(t.x1, t.cpx1, t.x2, e),
          (n ? Un : Gn)(t.y1, t.cpy1, t.y2, e)
        ]
  }
  u(_h, (mh = Is)),
    (_h.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null }
    }),
    (_h.prototype.getDefaultShape = function () {
      return new fh()
    }),
    (_h.prototype.buildPath = function (t, e) {
      var n = e.x1,
        i = e.y1,
        r = e.x2,
        o = e.y2,
        a = e.cpx1,
        s = e.cpy1,
        l = e.cpx2,
        u = e.cpy2,
        e = e.percent
      0 !== e &&
        (t.moveTo(n, i),
        null == l || null == u
          ? (e < 1 &&
              (Yn(n, a, r, e, gh),
              (a = gh[1]),
              (r = gh[2]),
              Yn(i, s, o, e, gh),
              (s = gh[1]),
              (o = gh[2])),
            t.quadraticCurveTo(a, s, r, o))
          : (e < 1 &&
              (Hn(n, a, l, r, e, gh),
              (a = gh[1]),
              (l = gh[2]),
              (r = gh[3]),
              Hn(i, s, u, o, e, gh),
              (s = gh[1]),
              (u = gh[2]),
              (o = gh[3])),
            t.bezierCurveTo(a, s, l, u, r, o)))
    }),
    (_h.prototype.pointAt = function (t) {
      return yh(this.shape, t, !1)
    }),
    (_h.prototype.tangentAt = function (t) {
      t = yh(this.shape, t, !0)
      return Kt(t, t)
    })
  var mh,
    vh = _h
  function _h (t) {
    return mh.call(this, t) || this
  }
  vh.prototype.type = 'bezier-curve'
  function xh () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0)
  }
  u(Sh, (wh = Is)),
    (Sh.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null }
    }),
    (Sh.prototype.getDefaultShape = function () {
      return new xh()
    }),
    (Sh.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = Math.max(e.r, 0),
        o = e.startAngle,
        a = e.endAngle,
        e = e.clockwise,
        s = Math.cos(o),
        l = Math.sin(o)
      t.moveTo(s * r + n, l * r + i), t.arc(n, i, r, o, a, !e)
    })
  var wh,
    bh = Sh
  function Sh (t) {
    return wh.call(this, t) || this
  }
  bh.prototype.type = 'arc'
  u(Ch, (Mh = Is)),
    (Ch.prototype._updatePathDirty = function () {
      for (
        var t = this.shape.paths, e = this.shapeChanged(), n = 0;
        n < t.length;
        n++
      )
        e = e || t[n].shapeChanged()
      e && this.dirtyShape()
    }),
    (Ch.prototype.beforeBrush = function () {
      this._updatePathDirty()
      for (
        var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0;
        n < t.length;
        n++
      )
        t[n].path || t[n].createPathProxy(),
          t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold)
    }),
    (Ch.prototype.buildPath = function (t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++)
        n[i].buildPath(t, n[i].shape, !0)
    }),
    (Ch.prototype.afterBrush = function () {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
        t[e].pathUpdated()
    }),
    (Ch.prototype.getBoundingRect = function () {
      return (
        this._updatePathDirty.call(this),
        Is.prototype.getBoundingRect.call(this)
      )
    })
  var Mh,
    Th = Ch
  function Ch () {
    var t = (null !== Mh && Mh.apply(this, arguments)) || this
    return (t.type = 'compound'), t
  }
  kh.prototype.addColorStop = function (t, e) {
    this.colorStops.push({ offset: t, color: e })
  }
  var Ih = kh
  function kh (t) {
    this.colorStops = t || []
  }
  u(Ph, (Dh = Ih))
  var Dh,
    Ah = Ph
  function Ph (t, e, n, i, r, o) {
    r = Dh.call(this, r) || this
    return (
      (r.x = null == t ? 0 : t),
      (r.y = null == e ? 0 : e),
      (r.x2 = null == n ? 1 : n),
      (r.y2 = null == i ? 0 : i),
      (r.type = 'linear'),
      (r.global = o || !1),
      r
    )
  }
  u(Oh, (Lh = Ih))
  var Lh,
    Ih = Oh
  function Oh (t, e, n, i, r) {
    i = Lh.call(this, i) || this
    return (
      (i.x = null == t ? 0.5 : t),
      (i.y = null == e ? 0.5 : e),
      (i.r = null == n ? 0.5 : n),
      (i.type = 'radial'),
      (i.global = r || !1),
      i
    )
  }
  var Rh = [0, 0],
    Nh = [0, 0],
    Bh = new G(),
    zh = new G(),
    Eh =
      ((Fh.prototype.fromBoundingRect = function (t, e) {
        var n = this._corners,
          i = this._axes,
          r = t.x,
          o = t.y,
          a = r + t.width,
          t = o + t.height
        if ((n[0].set(r, o), n[1].set(a, o), n[2].set(a, t), n[3].set(r, t), e))
          for (var s = 0; s < 4; s++) n[s].transform(e)
        for (
          G.sub(i[0], n[1], n[0]),
            G.sub(i[1], n[3], n[0]),
            i[0].normalize(),
            i[1].normalize(),
            s = 0;
          s < 2;
          s++
        )
          this._origin[s] = i[s].dot(n[0])
      }),
      (Fh.prototype.intersect = function (t, e) {
        var n = !0,
          i = !e
        return (
          Bh.set(1 / 0, 1 / 0),
          zh.set(0, 0),
          (!this._intersectCheckOneSide(this, t, Bh, zh, i, 1) &&
            ((n = !1), i)) ||
            (!this._intersectCheckOneSide(t, this, Bh, zh, i, -1) &&
              ((n = !1), i)) ||
            i ||
            G.copy(e, n ? Bh : zh),
          n
        )
      }),
      (Fh.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
        for (var a = !0, s = 0; s < 2; s++) {
          var l = this._axes[s]
          if (
            (this._getProjMinMaxOnAxis(s, t._corners, Rh),
            this._getProjMinMaxOnAxis(s, e._corners, Nh),
            Rh[1] < Nh[0] || Nh[1] < Rh[0])
          ) {
            if (((a = !1), r)) return a
            var u = Math.abs(Nh[0] - Rh[1]),
              h = Math.abs(Rh[0] - Nh[1])
            Math.min(u, h) > i.len() &&
              (u < h ? G.scale(i, l, -u * o) : G.scale(i, l, h * o))
          } else
            n &&
              ((u = Math.abs(Nh[0] - Rh[1])),
              (h = Math.abs(Rh[0] - Nh[1])),
              Math.min(u, h) < n.len()) &&
              (u < h ? G.scale(n, l, u * o) : G.scale(n, l, -h * o))
        }
        return a
      }),
      (Fh.prototype._getProjMinMaxOnAxis = function (t, e, n) {
        for (
          var i = this._axes[t],
            r = this._origin,
            o = e[0].dot(i) + r[t],
            a = o,
            s = o,
            l = 1;
          l < e.length;
          l++
        )
          var u = e[l].dot(i) + r[t], a = Math.min(u, a), s = Math.max(u, s)
        ;(n[0] = a), (n[1] = s)
      }),
      Fh)
  function Fh (t, e) {
    ;(this._corners = []), (this._axes = []), (this._origin = [0, 0])
    for (var n = 0; n < 4; n++) this._corners[n] = new G()
    for (n = 0; n < 2; n++) this._axes[n] = new G()
    t && this.fromBoundingRect(t, e)
  }
  var Vh,
    Hh = [],
    n =
      (u(Wh, (Vh = n)),
      (Wh.prototype.traverse = function (t, e) {
        t.call(e, this)
      }),
      (Wh.prototype.useStyle = function () {
        this.style = {}
      }),
      (Wh.prototype.getCursor = function () {
        return this._cursor
      }),
      (Wh.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length
      }),
      (Wh.prototype.clearDisplaybles = function () {
        ;(this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          this.markRedraw(),
          (this.notClear = !1)
      }),
      (Wh.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = []
      }),
      (Wh.prototype.addDisplayable = function (t, e) {
        ;(e ? this._temporaryDisplayables : this._displayables).push(t),
          this.markRedraw()
      }),
      (Wh.prototype.addDisplayables = function (t, e) {
        e = e || !1
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
      }),
      (Wh.prototype.getDisplayables = function () {
        return this._displayables
      }),
      (Wh.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables
      }),
      (Wh.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++)
          t && t(this._displayables[e])
        for (e = 0; e < this._temporaryDisplayables.length; e++)
          t && t(this._temporaryDisplayables[e])
      }),
      (Wh.prototype.update = function () {
        this.updateTransform()
        for (var t, e = this._cursor; e < this._displayables.length; e++)
          ((t = this._displayables[e]).parent = this),
            t.update(),
            (t.parent = null)
        for (e = 0; e < this._temporaryDisplayables.length; e++)
          ((t = this._temporaryDisplayables[e]).parent = this),
            t.update(),
            (t.parent = null)
      }),
      (Wh.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (
            var t = new U(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0;
            e < this._displayables.length;
            e++
          ) {
            var n = this._displayables[e],
              i = n.getBoundingRect().clone()
            n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Hh)),
              t.union(i)
          }
          this._rect = t
        }
        return this._rect
      }),
      (Wh.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e)
        if (this.getBoundingRect().contain(n[0], n[1]))
          for (var i = 0; i < this._displayables.length; i++)
            if (this._displayables[i].contain(t, e)) return !0
        return !1
      }),
      Wh)
  function Wh () {
    var t = (null !== Vh && Vh.apply(this, arguments)) || this
    return (
      (t.notClear = !0),
      (t.incremental = !0),
      (t._displayables = []),
      (t._temporaryDisplayables = []),
      (t._cursor = 0),
      t
    )
  }
  var Gh = Yo()
  function Uh (t, e, n, i, r, o, a) {
    var s,
      l,
      u,
      h,
      c,
      p,
      d = !1,
      f =
        (S(r)
          ? ((a = o), (o = r), (r = null))
          : L(r) &&
            ((o = r.cb),
            (a = r.during),
            (d = r.isFrom),
            (l = r.removeOpt),
            (r = r.dataIndex)),
        'leave' === t),
      g =
        (f || e.stopAnimation('leave'),
        (p = t),
        (s = r),
        (l = f ? l || {} : null),
        (i =
          (g = i) && i.getAnimationDelayParams
            ? i.getAnimationDelayParams(e, r)
            : null),
        g &&
          g.ecModel &&
          (u = (u = g.ecModel.getUpdatePayload()) && u.animation),
        (p = 'update' === p),
        g && g.isAnimationEnabled()
          ? ((c = h = r = void 0),
            (c = l
              ? ((r = N(l.duration, 200)), (h = N(l.easing, 'cubicOut')), 0)
              : ((r = g.getShallow(
                  p ? 'animationDurationUpdate' : 'animationDuration'
                )),
                (h = g.getShallow(
                  p ? 'animationEasingUpdate' : 'animationEasing'
                )),
                g.getShallow(p ? 'animationDelayUpdate' : 'animationDelay'))),
            S(
              (c =
                u &&
                (null != u.duration && (r = u.duration),
                null != u.easing && (h = u.easing),
                null != u.delay)
                  ? u.delay
                  : c)
            ) && (c = c(s, i)),
            { duration: (r = S(r) ? r(s) : r) || 0, delay: c, easing: h })
          : null)
    g && 0 < g.duration
      ? ((p = {
          duration: g.duration,
          delay: g.delay || 0,
          easing: g.easing,
          done: o,
          force: !!o || !!a,
          setToFinal: !f,
          scope: t,
          during: a
        }),
        d ? e.animateFrom(n, p) : e.animateTo(n, p))
      : (e.stopAnimation(), d || e.attr(n), a && a(1), o && o())
  }
  function Xh (t, e, n, i, r, o) {
    Uh('update', t, e, n, i, r, o)
  }
  function Yh (t, e, n, i, r, o) {
    Uh('enter', t, e, n, i, r, o)
  }
  function qh (t) {
    if (!t.__zr) return !0
    for (var e = 0; e < t.animators.length; e++)
      if ('leave' === t.animators[e].scope) return !0
    return !1
  }
  function jh (t, e, n, i, r, o) {
    qh(t) || Uh('leave', t, e, n, i, r, o)
  }
  function Zh (t, e, n, i) {
    t.removeTextContent(),
      t.removeTextGuideLine(),
      jh(t, { style: { opacity: 0 } }, e, n, i)
  }
  function Kh (t, e, n) {
    function i () {
      t.parent && t.parent.remove(t)
    }
    t.isGroup
      ? t.traverse(function (t) {
          t.isGroup || Zh(t, e, n, i)
        })
      : Zh(t, e, n, i)
  }
  var $h = Math.max,
    Qh = Math.min,
    Jh = {}
  function tc (t) {
    return Is.extend(t)
  }
  var ec = function (t, e) {
    var n,
      i = Mu(t, e)
    return u(r, (n = wu)), r
    function r (t) {
      t = n.call(this, t) || this
      return (
        (t.applyTransform = i.applyTransform), (t.buildPath = i.buildPath), t
      )
    }
  }
  function nc (t, e) {
    return ec(t, e)
  }
  function ic (t, e) {
    Jh[t] = e
  }
  function rc (t) {
    if (Jh.hasOwnProperty(t)) return Jh[t]
  }
  function oc (t, e, n, i) {
    t = new wu(Mu(t, e))
    return (
      n && ('center' === i && (n = sc(n, t.getBoundingRect())), uc(t, n)), t
    )
  }
  function ac (t, e, n) {
    var i = new Ns({
      style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
      onload: function (t) {
        'center' === n &&
          ((t = { width: t.width, height: t.height }), i.setStyle(sc(e, t)))
      }
    })
    return i
  }
  function sc (t, e) {
    var e = e.width / e.height,
      n = t.height * e,
      e = n <= t.width ? t.height : (n = t.width) / e
    return {
      x: t.x + t.width / 2 - n / 2,
      y: t.y + t.height / 2 - e / 2,
      width: n,
      height: e
    }
  }
  function lc (t, e) {
    for (var n = [], i = t.length, r = 0; r < i; r++) {
      var o = t[r]
      n.push(o.getUpdatedPathProxy(!0))
    }
    return (
      (e = new Is(e)).createPathProxy(),
      (e.buildPath = function (t) {
        var e
        Su(t) && (t.appendPath(n), (e = t.getContext())) && t.rebuildPath(e, 1)
      }),
      e
    )
  }
  function uc (t, e) {
    t.applyTransform &&
      ((e = t.getBoundingRect().calculateTransform(e)), t.applyTransform(e))
  }
  function hc (t, e) {
    return Es(t, t, { lineWidth: e }), t
  }
  var cc = Vs
  function pc (t, e) {
    for (var n = Re([]); t && t !== e; )
      Be(n, t.getLocalTransform(), n), (t = t.parent)
    return n
  }
  function dc (t, e, n) {
    return (
      e && !ut(e) && (e = Pr.getLocalTransform(e)),
      ne([], t, (e = n ? Ve([], e) : e))
    )
  }
  function fc (t) {
    return !t.isGroup
  }
  function gc (t, e, i) {
    var n, r
    function o (t) {
      var e = { x: t.x, y: t.y, rotation: t.rotation }
      return null != t.shape && (e.shape = O({}, t.shape)), e
    }
    t &&
      e &&
      ((n = {}),
      t.traverse(function (t) {
        fc(t) && t.anid && (n[t.anid] = t)
      }),
      (r = n),
      e.traverse(function (t) {
        var e, n
        fc(t) &&
          t.anid &&
          (e = r[t.anid]) &&
          ((n = o(t)), t.attr(o(e)), Xh(t, n, i, ul(t).dataIndex))
      }))
  }
  function yc (t, n) {
    return F(t, function (t) {
      var e = t[0],
        e = $h(e, n.x),
        t = ((e = Qh(e, n.x + n.width)), t[1]),
        t = $h(t, n.y)
      return [e, Qh(t, n.y + n.height)]
    })
  }
  function mc (t, e) {
    var n = $h(t.x, e.x),
      i = Qh(t.x + t.width, e.x + e.width),
      r = $h(t.y, e.y),
      t = Qh(t.y + t.height, e.y + e.height)
    if (n <= i && r <= t) return { x: n, y: r, width: i - n, height: t - r }
  }
  function vc (t, e, n) {
    var e = O({ rectHover: !0 }, e),
      i = (e.style = { strokeNoScale: !0 })
    if (((n = n || { x: -1, y: -1, width: 2, height: 2 }), t))
      return 0 === t.indexOf('image://')
        ? ((i.image = t.slice(8)), E(i, n), new Ns(e))
        : oc(t.replace('path://', ''), e, n, 'center')
  }
  function _c (t, e, n, i, r, o, a, s) {
    var l,
      n = n - t,
      i = i - e,
      a = a - r,
      s = s - o,
      u = a * i - n * s
    return !(
      ((l = u) <= 1e-6 && -1e-6 <= l) ||
      (r = ((l = t - r) * i - n * (t = e - o)) / u) < 0 ||
      1 < r ||
      (i = (l * s - a * t) / u) < 0 ||
      1 < i
    )
  }
  function xc (t) {
    var e = t.itemTooltipOption,
      n = t.componentModel,
      i = t.itemName,
      e = H(e) ? { formatter: e } : e,
      r = n.mainType,
      n = n.componentIndex,
      o = { componentType: r, name: i, $vars: ['name'] },
      a = ((o[r + 'Index'] = n), t.formatterParamsExtra),
      t =
        (a &&
          B(R(a), function (t) {
            Ft(o, t) || ((o[t] = a[t]), o.$vars.push(t))
          }),
        ul(t.el))
    ;(t.componentMainType = r),
      (t.componentIndex = n),
      (t.tooltipConfig = {
        name: i,
        option: E({ content: i, formatterParams: o }, e)
      })
  }
  function wc (t, e) {
    var n
    ;(n = t.isGroup ? e(t) : n) || t.traverse(e)
  }
  function bc (t, e) {
    if (t)
      if (V(t)) for (var n = 0; n < t.length; n++) wc(t[n], e)
      else wc(t, e)
  }
  ic('circle', Iu),
    ic('ellipse', Pu),
    ic('sector', ju),
    ic('ring', Qu),
    ic('polygon', ih),
    ic('polyline', sh),
    ic('rect', Us),
    ic('line', ph),
    ic('bezierCurve', vh),
    ic('arc', bh)
  var Sc = Object.freeze({
      __proto__: null,
      Arc: bh,
      BezierCurve: vh,
      BoundingRect: U,
      Circle: Iu,
      CompoundPath: Th,
      Ellipse: Pu,
      Group: no,
      Image: Ns,
      IncrementalDisplayable: n,
      Line: ph,
      LinearGradient: Ah,
      OrientedBoundingRect: Eh,
      Path: Is,
      Point: G,
      Polygon: ih,
      Polyline: sh,
      RadialGradient: Ih,
      Rect: Us,
      Ring: Qu,
      Sector: ju,
      Text: Zs,
      applyTransform: dc,
      clipPointsByRect: yc,
      clipRectByRect: mc,
      createIcon: vc,
      extendPath: nc,
      extendShape: tc,
      getShapeClass: rc,
      getTransform: pc,
      groupTransition: gc,
      initProps: Yh,
      isElementRemoved: qh,
      lineLineIntersect: _c,
      linePolygonIntersect: function (t, e, n, i, r) {
        for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
          var s = r[o]
          if (_c(t, e, n, i, s[0], s[1], a[0], a[1])) return !0
          a = s
        }
      },
      makeImage: ac,
      makePath: oc,
      mergePath: lc,
      registerShape: ic,
      removeElement: jh,
      removeElementWithFadeOut: Kh,
      resizePath: uc,
      setTooltipConfig: xc,
      subPixelOptimize: cc,
      subPixelOptimizeLine: hc,
      subPixelOptimizeRect: function (t) {
        return Fs(t.shape, t.shape, t.style), t
      },
      transformDirection: function (t, e, n) {
        var i =
            0 === e[4] || 0 === e[5] || 0 === e[0]
              ? 1
              : Math.abs((2 * e[4]) / e[0]),
          r =
            0 === e[4] || 0 === e[5] || 0 === e[2]
              ? 1
              : Math.abs((2 * e[4]) / e[2]),
          i = dc(
            [
              'left' === t ? -i : 'right' === t ? i : 0,
              'top' === t ? -r : 'bottom' === t ? r : 0
            ],
            e,
            n
          )
        return Math.abs(i[0]) > Math.abs(i[1])
          ? 0 < i[0]
            ? 'right'
            : 'left'
          : 0 < i[1]
          ? 'bottom'
          : 'top'
      },
      traverseElements: bc,
      updateProps: Xh
    }),
    Mc = {}
  function Tc (t, e) {
    for (var n = 0; n < ml.length; n++) {
      var i = ml[n],
        r = e[i],
        i = t.ensureState(i)
      ;(i.style = i.style || {}), (i.style.text = r)
    }
    var o = t.currentStates.slice()
    t.clearStates(!0), t.setStyle({ text: e.normal }), t.useStates(o, !0)
  }
  function Cc (t, e, n) {
    for (
      var i,
        r = t.labelFetcher,
        o = t.labelDataIndex,
        a = t.labelDimIndex,
        s = e.normal,
        l = {
          normal: (i =
            null ==
            (i = r
              ? r.getFormattedLabel(
                  o,
                  'normal',
                  null,
                  a,
                  s && s.get('formatter'),
                  null != n ? { interpolatedValue: n } : null
                )
              : i)
              ? S(t.defaultText)
                ? t.defaultText(o, t, n)
                : t.defaultText
              : i)
        },
        u = 0;
      u < ml.length;
      u++
    ) {
      var h = ml[u],
        c = e[h]
      l[h] = N(
        r ? r.getFormattedLabel(o, h, null, a, c && c.get('formatter')) : null,
        i
      )
    }
    return l
  }
  function Ic (t, e, n, i) {
    n = n || Mc
    for (var r = t instanceof Zs, o = !1, a = 0; a < vl.length; a++)
      if ((p = e[vl[a]]) && p.getShallow('show')) {
        o = !0
        break
      }
    var s = r ? t : t.getTextContent()
    if (o) {
      r ||
        (s || ((s = new Zs()), t.setTextContent(s)),
        t.stateProxy && (s.stateProxy = t.stateProxy))
      var l = Cc(n, e),
        u = e.normal,
        h = !!u.getShallow('show'),
        c = kc(u, i && i.normal, n, !1, !r)
      for (
        c.text = l.normal, r || t.setTextConfig(Dc(u, n, !1)), a = 0;
        a < ml.length;
        a++
      ) {
        var p,
          d,
          f,
          g = ml[a]
        ;(p = e[g]) &&
          ((d = s.ensureState(g)),
          (f = !!N(p.getShallow('show'), h)) != h && (d.ignore = !f),
          (d.style = kc(p, i && i[g], n, !0, !r)),
          (d.style.text = l[g]),
          r || (t.ensureState(g).textConfig = Dc(p, n, !0)))
      }
      ;(s.silent = !!u.getShallow('silent')),
        null != s.style.x && (c.x = s.style.x),
        null != s.style.y && (c.y = s.style.y),
        (s.ignore = !h),
        s.useStyle(c),
        s.dirty(),
        n.enableTextSetter &&
          (Rc(s).setLabelText = function (t) {
            t = Cc(n, e, t)
            Tc(s, t)
          })
    } else s && (s.ignore = !0)
    t.dirty()
  }
  function kc (t, e, n, i, r) {
    var o,
      a = {},
      s = a,
      l = t,
      u = n,
      h = i,
      c = r
    u = u || Mc
    var p,
      t = l.ecModel,
      d = t && t.option.textStyle,
      f = (function (t) {
        for (var e; t && t !== t.ecModel; ) {
          var n = (t.option || Mc).rich
          if (n) {
            e = e || {}
            for (var i = R(n), r = 0; r < i.length; r++) e[i[r]] = 1
          }
          t = t.parentModel
        }
        return e
      })(l)
    if (f)
      for (var g in ((p = {}), f))
        f.hasOwnProperty(g) &&
          ((o = l.getModel(['rich', g])),
          Oc((p[g] = {}), o, d, u, h, c, !1, !0))
    return (
      p && (s.rich = p),
      (t = l.get('overflow')) && (s.overflow = t),
      null != (t = l.get('minMargin')) && (s.margin = t),
      Oc(s, l, d, u, h, c, !0, !1),
      e && O(a, e),
      a
    )
  }
  function Dc (t, e, n) {
    e = e || {}
    var i = {},
      r = t.getShallow('rotate'),
      o = N(t.getShallow('distance'), n ? null : 5),
      a = t.getShallow('offset')
    return (
      null !=
        (n =
          'outside' === (n = t.getShallow('position') || (n ? null : 'inside'))
            ? e.defaultOutsidePosition || 'top'
            : n) && (i.position = n),
      null != a && (i.offset = a),
      null != r && ((r *= Math.PI / 180), (i.rotation = r)),
      null != o && (i.distance = o),
      (i.outsideFill =
        'inherit' === t.get('color') ? e.inheritColor || null : 'auto'),
      i
    )
  }
  var Ac = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'textShadowColor',
      'textShadowBlur',
      'textShadowOffsetX',
      'textShadowOffsetY'
    ],
    Pc = [
      'align',
      'lineHeight',
      'width',
      'height',
      'tag',
      'verticalAlign',
      'ellipsis'
    ],
    Lc = [
      'padding',
      'borderWidth',
      'borderRadius',
      'borderDashOffset',
      'backgroundColor',
      'borderColor',
      'shadowColor',
      'shadowBlur',
      'shadowOffsetX',
      'shadowOffsetY'
    ]
  function Oc (t, e, n, i, r, o, a, s) {
    n = (!r && n) || Mc
    var l = i && i.inheritColor,
      u = e.getShallow('color'),
      h = e.getShallow('textBorderColor'),
      c = N(e.getShallow('opacity'), n.opacity),
      u =
        (('inherit' !== u && 'auto' !== u) || (u = l || null),
        ('inherit' !== h && 'auto' !== h) || (h = l || null),
        o || ((u = u || n.color), (h = h || n.textBorderColor)),
        null != u && (t.fill = u),
        null != h && (t.stroke = h),
        N(e.getShallow('textBorderWidth'), n.textBorderWidth)),
      h =
        (null != u && (t.lineWidth = u),
        N(e.getShallow('textBorderType'), n.textBorderType)),
      u =
        (null != h && (t.lineDash = h),
        N(e.getShallow('textBorderDashOffset'), n.textBorderDashOffset))
    null != u && (t.lineDashOffset = u),
      null != (c = r || null != c || s ? c : i && i.defaultOpacity) &&
        (t.opacity = c),
      r || o || (null == t.fill && i.inheritColor && (t.fill = i.inheritColor))
    for (var p = 0; p < Ac.length; p++) {
      var d = Ac[p]
      null != (f = N(e.getShallow(d), n[d])) && (t[d] = f)
    }
    for (p = 0; p < Pc.length; p++)
      (d = Pc[p]), null != (f = e.getShallow(d)) && (t[d] = f)
    if (
      (null == t.verticalAlign &&
        null != (h = e.getShallow('baseline')) &&
        (t.verticalAlign = h),
      !a || !i.disableBox)
    ) {
      for (p = 0; p < Lc.length; p++) {
        var f,
          d = Lc[p]
        null != (f = e.getShallow(d)) && (t[d] = f)
      }
      u = e.getShallow('borderType')
      null != u && (t.borderDash = u),
        ('auto' !== t.backgroundColor && 'inherit' !== t.backgroundColor) ||
          !l ||
          (t.backgroundColor = l),
        ('auto' !== t.borderColor && 'inherit' !== t.borderColor) ||
          !l ||
          (t.borderColor = l)
    }
  }
  var Rc = Yo()
  function Nc (n, i, r, t, o) {
    var a,
      s,
      l,
      u = Rc(n)
    u.valueAnimation &&
      u.prevValue !== u.value &&
      ((a = u.defaultInterpolatedText),
      (s = N(u.interpolatedValue, u.prevValue)),
      (l = u.value),
      (n.percent = 0),
      (null == u.prevValue ? Yh : Xh)(
        n,
        { percent: 1 },
        t,
        i,
        null,
        function (t) {
          var e = (function (t, e, n, i, r) {
              var o = null == e || 'auto' === e
              if (null == i) return i
              if (W(i))
                return go(
                  (p = Po(n || 0, i, r)),
                  o ? Math.max(yo(n || 0), yo(i)) : e
                )
              if (H(i)) return r < 1 ? n : i
              for (
                var a = [],
                  s = n,
                  l = i,
                  u = Math.max(s ? s.length : 0, l.length),
                  h = 0;
                h < u;
                ++h
              ) {
                var c,
                  p,
                  d = t.getDimensionInfo(h)
                d && 'ordinal' === d.type
                  ? (a[h] = (r < 1 && s ? s : l)[h])
                  : ((p = Po((d = s && s[h] ? s[h] : 0), (c = l[h]), r)),
                    (a[h] = go(p, o ? Math.max(yo(d), yo(c)) : e)))
              }
              return a
            })(r, u.precision, s, l, t),
            t =
              ((u.interpolatedValue = 1 === t ? null : e),
              Cc(
                {
                  labelDataIndex: i,
                  labelFetcher: o,
                  defaultText: a ? a(e) : e + ''
                },
                u.statesModels,
                e
              ))
          Tc(n, t)
        }
      ))
  }
  var Bc = ['textStyle', 'color'],
    zc = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'padding',
      'lineHeight',
      'rich',
      'width',
      'height',
      'overflow'
    ],
    Ec = new Zs(),
    cc =
      ((Fc.prototype.getTextColor = function (t) {
        var e = this.ecModel
        return this.getShallow('color') || (!t && e ? e.get(Bc) : null)
      }),
      (Fc.prototype.getFont = function () {
        return (
          (t = {
            fontStyle: this.getShallow('fontStyle'),
            fontWeight: this.getShallow('fontWeight'),
            fontSize: this.getShallow('fontSize'),
            fontFamily: this.getShallow('fontFamily')
          }),
          (e = (e = this.ecModel) && e.getModel('textStyle')),
          It(
            [
              t.fontStyle || (e && e.getShallow('fontStyle')) || '',
              t.fontWeight || (e && e.getShallow('fontWeight')) || '',
              (t.fontSize || (e && e.getShallow('fontSize')) || 12) + 'px',
              t.fontFamily || (e && e.getShallow('fontFamily')) || 'sans-serif'
            ].join(' ')
          )
        )
        var t, e
      }),
      (Fc.prototype.getTextRect = function (t) {
        for (
          var e = {
              text: t,
              verticalAlign:
                this.getShallow('verticalAlign') || this.getShallow('baseline')
            },
            n = 0;
          n < zc.length;
          n++
        )
          e[zc[n]] = this.getShallow(zc[n])
        return Ec.useStyle(e), Ec.update(), Ec.getBoundingRect()
      }),
      Fc)
  function Fc () {}
  var Vc = [
      ['lineWidth', 'width'],
      ['stroke', 'color'],
      ['opacity'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['shadowColor'],
      ['lineDash', 'type'],
      ['lineDashOffset', 'dashOffset'],
      ['lineCap', 'cap'],
      ['lineJoin', 'join'],
      ['miterLimit']
    ],
    Hc = ua(Vc),
    Wc =
      ((Gc.prototype.getLineStyle = function (t) {
        return Hc(this, t)
      }),
      Gc)
  function Gc () {}
  var Uc = [
      ['fill', 'color'],
      ['stroke', 'borderColor'],
      ['lineWidth', 'borderWidth'],
      ['opacity'],
      ['shadowBlur'],
      ['shadowOffsetX'],
      ['shadowOffsetY'],
      ['shadowColor'],
      ['lineDash', 'borderType'],
      ['lineDashOffset', 'borderDashOffset'],
      ['lineCap', 'borderCap'],
      ['lineJoin', 'borderJoin'],
      ['miterLimit', 'borderMiterLimit']
    ],
    Xc = ua(Uc),
    Yc =
      ((qc.prototype.getItemStyle = function (t, e) {
        return Xc(this, t, e)
      }),
      qc)
  function qc () {}
  ;(Kc.prototype.init = function (t, e, n) {
    for (var i = 3; i < arguments.length; i++) i - 3, 0
  }),
    (Kc.prototype.mergeOption = function (t, e) {
      d(this.option, t, !0)
    }),
    (Kc.prototype.get = function (t, e) {
      return null == t
        ? this.option
        : this._doGet(this.parsePath(t), !e && this.parentModel)
    }),
    (Kc.prototype.getShallow = function (t, e) {
      var n = this.option,
        n = null == n ? n : n[t]
      return (
        null != n || e || ((e = this.parentModel) && (n = e.getShallow(t))), n
      )
    }),
    (Kc.prototype.getModel = function (t, e) {
      var n = null != t,
        t = n ? this.parsePath(t) : null
      return new Kc(
        n ? this._doGet(t) : this.option,
        (e =
          e ||
          (this.parentModel &&
            this.parentModel.getModel(this.resolveParentPath(t)))),
        this.ecModel
      )
    }),
    (Kc.prototype.isEmpty = function () {
      return null == this.option
    }),
    (Kc.prototype.restoreData = function () {}),
    (Kc.prototype.clone = function () {
      return new this.constructor(_(this.option))
    }),
    (Kc.prototype.parsePath = function (t) {
      return 'string' == typeof t ? t.split('.') : t
    }),
    (Kc.prototype.resolveParentPath = function (t) {
      return t
    }),
    (Kc.prototype.isAnimationEnabled = function () {
      if (!b.node && this.option)
        return null != this.option.animation
          ? !!this.option.animation
          : this.parentModel
          ? this.parentModel.isAnimationEnabled()
          : void 0
    }),
    (Kc.prototype._doGet = function (t, e) {
      var n = this.option
      if (t) {
        for (
          var i = 0;
          i < t.length &&
          (!t[i] || null != (n = n && 'object' == typeof n ? n[t[i]] : null));
          i++
        );
        null == n &&
          e &&
          (n = e._doGet(this.resolveParentPath(t), e.parentModel))
      }
      return n
    })
  var jc,
    Zc = Kc
  function Kc (t, e, n) {
    ;(this.parentModel = e), (this.ecModel = n), (this.option = t)
  }
  ia(Zc),
    (cp = Zc),
    (jc = ['__\0is_clz', oa++].join('_')),
    (cp.prototype[jc] = !0),
    (cp.isInstance = function (t) {
      return !(!t || !t[jc])
    }),
    lt(Zc, Wc),
    lt(Zc, Yc),
    lt(Zc, ca),
    lt(Zc, cc)
  var $c = Math.round(10 * Math.random())
  function Qc (t) {
    return [t || '', $c++].join('_')
  }
  var Jc = 'ZH',
    tp = 'EN',
    ep = tp,
    np = {},
    ip = {},
    rp =
      b.domSupported &&
      -1 <
        (
          document.documentElement.lang ||
          navigator.language ||
          navigator.browserLanguage
        )
          .toUpperCase()
          .indexOf(Jc)
        ? Jc
        : ep
  function op (t, e) {
    ;(t = t.toUpperCase()), (ip[t] = new Zc(e)), (np[t] = e)
  }
  op(tp, {
    time: {
      month: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthAbbr: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      dayOfWeekAbbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    legend: { selector: { all: 'All', inverse: 'Inv' } },
    toolbox: {
      brush: {
        title: {
          rect: 'Box Select',
          polygon: 'Lasso Select',
          lineX: 'Horizontally Select',
          lineY: 'Vertically Select',
          keep: 'Keep Selections',
          clear: 'Clear Selections'
        }
      },
      dataView: { title: 'Data View', lang: ['Data View', 'Close', 'Refresh'] },
      dataZoom: { title: { zoom: 'Zoom', back: 'Zoom Reset' } },
      magicType: {
        title: {
          line: 'Switch to Line Chart',
          bar: 'Switch to Bar Chart',
          stack: 'Stack',
          tiled: 'Tile'
        }
      },
      restore: { title: 'Restore' },
      saveAsImage: {
        title: 'Save as Image',
        lang: ['Right Click to Save Image']
      }
    },
    series: {
      typeNames: {
        pie: 'Pie chart',
        bar: 'Bar chart',
        line: 'Line chart',
        scatter: 'Scatter plot',
        effectScatter: 'Ripple scatter plot',
        radar: 'Radar chart',
        tree: 'Tree',
        treemap: 'Treemap',
        boxplot: 'Boxplot',
        candlestick: 'Candlestick',
        k: 'K line chart',
        heatmap: 'Heat map',
        map: 'Map',
        parallel: 'Parallel coordinate map',
        lines: 'Line graph',
        graph: 'Relationship graph',
        sankey: 'Sankey diagram',
        funnel: 'Funnel chart',
        gauge: 'Gauge',
        pictorialBar: 'Pictorial bar',
        themeRiver: 'Theme River Map',
        sunburst: 'Sunburst'
      }
    },
    aria: {
      general: {
        withTitle: 'This is a chart about "{title}"',
        withoutTitle: 'This is a chart'
      },
      series: {
        single: {
          prefix: '',
          withName: ' with type {seriesType} named {seriesName}.',
          withoutName: ' with type {seriesType}.'
        },
        multiple: {
          prefix: '. It consists of {seriesCount} series count.',
          withName:
            ' The {seriesId} series is a {seriesType} representing {seriesName}.',
          withoutName: ' The {seriesId} series is a {seriesType}.',
          separator: { middle: '', end: '' }
        }
      },
      data: {
        allData: 'The data is as follows: ',
        partialData: 'The first {displayCnt} items are: ',
        withName: 'the data for {name} is {value}',
        withoutName: '{value}',
        separator: { middle: ', ', end: '. ' }
      }
    }
  }),
    op(Jc, {
      time: {
        month: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        monthAbbr: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ],
        dayOfWeek: [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六'
        ],
        dayOfWeekAbbr: ['日', '一', '二', '三', '四', '五', '六']
      },
      legend: { selector: { all: '全选', inverse: '反选' } },
      toolbox: {
        brush: {
          title: {
            rect: '矩形选择',
            polygon: '圈选',
            lineX: '横向选择',
            lineY: '纵向选择',
            keep: '保持选择',
            clear: '清除选择'
          }
        },
        dataView: { title: '数据视图', lang: ['数据视图', '关闭', '刷新'] },
        dataZoom: { title: { zoom: '区域缩放', back: '区域缩放还原' } },
        magicType: {
          title: {
            line: '切换为折线图',
            bar: '切换为柱状图',
            stack: '切换为堆叠',
            tiled: '切换为平铺'
          }
        },
        restore: { title: '还原' },
        saveAsImage: { title: '保存为图片', lang: ['右键另存为图片'] }
      },
      series: {
        typeNames: {
          pie: '饼图',
          bar: '柱状图',
          line: '折线图',
          scatter: '散点图',
          effectScatter: '涟漪散点图',
          radar: '雷达图',
          tree: '树图',
          treemap: '矩形树图',
          boxplot: '箱型图',
          candlestick: 'K线图',
          k: 'K线图',
          heatmap: '热力图',
          map: '地图',
          parallel: '平行坐标图',
          lines: '线图',
          graph: '关系图',
          sankey: '桑基图',
          funnel: '漏斗图',
          gauge: '仪表盘图',
          pictorialBar: '象形柱图',
          themeRiver: '主题河流图',
          sunburst: '旭日图'
        }
      },
      aria: {
        general: {
          withTitle: '这是一个关于“{title}”的图表。',
          withoutTitle: '这是一个图表，'
        },
        series: {
          single: {
            prefix: '',
            withName: '图表类型是{seriesType}，表示{seriesName}。',
            withoutName: '图表类型是{seriesType}。'
          },
          multiple: {
            prefix: '它由{seriesCount}个图表系列组成。',
            withName:
              '第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',
            withoutName: '第{seriesId}个系列是一个{seriesType}，',
            separator: { middle: '；', end: '。' }
          }
        },
        data: {
          allData: '其数据是——',
          partialData: '其中，前{displayCnt}项是——',
          withName: '{name}的数据是{value}',
          withoutName: '{value}',
          separator: { middle: '，', end: '' }
        }
      }
    })
  var ap = 1e3,
    sp = 60 * ap,
    lp = 60 * sp,
    up = 24 * lp,
    oa = 365 * up,
    hp = {
      year: '{yyyy}',
      month: '{MMM}',
      day: '{d}',
      hour: '{HH}:{mm}',
      minute: '{HH}:{mm}',
      second: '{HH}:{mm}:{ss}',
      millisecond: '{HH}:{mm}:{ss} {SSS}',
      none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}'
    },
    cp = '{yyyy}-{MM}-{dd}',
    pp = {
      year: '{yyyy}',
      month: '{yyyy}-{MM}',
      day: cp,
      hour: cp + ' ' + hp.hour,
      minute: cp + ' ' + hp.minute,
      second: cp + ' ' + hp.second,
      millisecond: hp.none
    },
    dp = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
    fp = [
      'year',
      'half-year',
      'quarter',
      'month',
      'week',
      'half-week',
      'day',
      'half-day',
      'quarter-day',
      'hour',
      'minute',
      'second',
      'millisecond'
    ]
  function gp (t, e) {
    return '0000'.substr(0, e - (t += '').length) + t
  }
  function yp (t) {
    switch (t) {
      case 'half-year':
      case 'quarter':
        return 'month'
      case 'week':
      case 'half-week':
        return 'day'
      case 'half-day':
      case 'quarter-day':
        return 'hour'
      default:
        return t
    }
  }
  function mp (t, e, n, i) {
    var t = So(t),
      r = t[xp(n)](),
      o = t[wp(n)]() + 1,
      a = Math.floor((o - 1) / 3) + 1,
      s = t[bp(n)](),
      l = t['get' + (n ? 'UTC' : '') + 'Day'](),
      u = t[Sp(n)](),
      h = ((u - 1) % 12) + 1,
      c = t[Mp(n)](),
      p = t[Tp(n)](),
      t = t[Cp(n)](),
      n = (i instanceof Zc ? i : ip[i || rp] || ip[ep]).getModel('time'),
      i = n.get('month'),
      d = n.get('monthAbbr'),
      f = n.get('dayOfWeek'),
      n = n.get('dayOfWeekAbbr')
    return (e || '')
      .replace(/{yyyy}/g, r + '')
      .replace(/{yy}/g, gp((r % 100) + '', 2))
      .replace(/{Q}/g, a + '')
      .replace(/{MMMM}/g, i[o - 1])
      .replace(/{MMM}/g, d[o - 1])
      .replace(/{MM}/g, gp(o, 2))
      .replace(/{M}/g, o + '')
      .replace(/{dd}/g, gp(s, 2))
      .replace(/{d}/g, s + '')
      .replace(/{eeee}/g, f[l])
      .replace(/{ee}/g, n[l])
      .replace(/{e}/g, l + '')
      .replace(/{HH}/g, gp(u, 2))
      .replace(/{H}/g, u + '')
      .replace(/{hh}/g, gp(h + '', 2))
      .replace(/{h}/g, h + '')
      .replace(/{mm}/g, gp(c, 2))
      .replace(/{m}/g, c + '')
      .replace(/{ss}/g, gp(p, 2))
      .replace(/{s}/g, p + '')
      .replace(/{SSS}/g, gp(t, 3))
      .replace(/{S}/g, t + '')
  }
  function vp (t, e) {
    var t = So(t),
      n = t[wp(e)]() + 1,
      i = t[bp(e)](),
      r = t[Sp(e)](),
      o = t[Mp(e)](),
      a = t[Tp(e)](),
      t = 0 === t[Cp(e)](),
      e = t && 0 === a,
      a = e && 0 === o,
      o = a && 0 === r,
      r = o && 1 === i
    return r && 1 === n
      ? 'year'
      : r
      ? 'month'
      : o
      ? 'day'
      : a
      ? 'hour'
      : e
      ? 'minute'
      : t
      ? 'second'
      : 'millisecond'
  }
  function _p (t, e, n) {
    var i = W(t) ? So(t) : t
    switch ((e = e || vp(t, n))) {
      case 'year':
        return i[xp(n)]()
      case 'half-year':
        return 6 <= i[wp(n)]() ? 1 : 0
      case 'quarter':
        return Math.floor((i[wp(n)]() + 1) / 4)
      case 'month':
        return i[wp(n)]()
      case 'day':
        return i[bp(n)]()
      case 'half-day':
        return i[Sp(n)]() / 24
      case 'hour':
        return i[Sp(n)]()
      case 'minute':
        return i[Mp(n)]()
      case 'second':
        return i[Tp(n)]()
      case 'millisecond':
        return i[Cp(n)]()
    }
  }
  function xp (t) {
    return t ? 'getUTCFullYear' : 'getFullYear'
  }
  function wp (t) {
    return t ? 'getUTCMonth' : 'getMonth'
  }
  function bp (t) {
    return t ? 'getUTCDate' : 'getDate'
  }
  function Sp (t) {
    return t ? 'getUTCHours' : 'getHours'
  }
  function Mp (t) {
    return t ? 'getUTCMinutes' : 'getMinutes'
  }
  function Tp (t) {
    return t ? 'getUTCSeconds' : 'getSeconds'
  }
  function Cp (t) {
    return t ? 'getUTCMilliseconds' : 'getMilliseconds'
  }
  function Ip (t) {
    return t ? 'setUTCMonth' : 'setMonth'
  }
  function kp (t) {
    return t ? 'setUTCDate' : 'setDate'
  }
  function Dp (t) {
    return t ? 'setUTCHours' : 'setHours'
  }
  function Ap (t) {
    return t ? 'setUTCMinutes' : 'setMinutes'
  }
  function Pp (t) {
    return t ? 'setUTCSeconds' : 'setSeconds'
  }
  function Lp (t) {
    return t ? 'setUTCMilliseconds' : 'setMilliseconds'
  }
  function Op (t) {
    var e
    return ko(t)
      ? (e = (t + '').split('.'))[0].replace(
          /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
          '$1,'
        ) + (1 < e.length ? '.' + e[1] : '')
      : H(t)
      ? t
      : '-'
  }
  function Rp (t, e) {
    return (
      (t = (t || '').toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase()
      })),
      (t = e ? t && t.charAt(0).toUpperCase() + t.slice(1) : t)
    )
  }
  var Np = Tt
  function Bp (t, e, n) {
    function i (t) {
      return t && It(t) ? t : '-'
    }
    function r (t) {
      return null != t && !isNaN(t) && isFinite(t)
    }
    var o = 'time' === e,
      a = t instanceof Date
    if (o || a) {
      var o = o ? So(t) : t
      if (!isNaN(+o)) return mp(o, '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}', n)
      if (a) return '-'
    }
    return 'ordinal' === e
      ? ft(t)
        ? i(t)
        : W(t) && r(t)
        ? t + ''
        : '-'
      : r((o = Io(t)))
      ? Op(o)
      : ft(t)
      ? i(t)
      : 'boolean' == typeof t
      ? t + ''
      : '-'
  }
  function zp (t, e) {
    return '{' + t + (null == e ? '' : e) + '}'
  }
  var Ep = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  function Fp (t, e, n) {
    var i = (e = V(e) ? e : [e]).length
    if (!i) return ''
    for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
      var a = Ep[o]
      t = t.replace(zp(a), zp(a, 0))
    }
    for (var s = 0; s < i; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]]
        t = t.replace(zp(Ep[l], s), n ? xe(u) : u)
      }
    return t
  }
  function Vp (t, e) {
    var t = H(t) ? { color: t, extraCssText: e } : t || {},
      n = t.color,
      i = t.type,
      r = ((e = t.extraCssText), t.renderMode || 'html')
    return n
      ? 'html' === r
        ? 'subItem' === i
          ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
            xe(n) +
            ';' +
            (e || '') +
            '"></span>'
          : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
            xe(n) +
            ';' +
            (e || '') +
            '"></span>'
        : {
            renderMode: r,
            content: '{' + (t.markerId || 'markerX') + '|}  ',
            style:
              'subItem' === i
                ? { width: 4, height: 4, borderRadius: 2, backgroundColor: n }
                : { width: 10, height: 10, borderRadius: 5, backgroundColor: n }
          }
      : ''
  }
  function Hp (t, e) {
    return (
      (e = e || 'transparent'),
      H(t) ? t : (L(t) && t.colorStops && (t.colorStops[0] || {}).color) || e
    )
  }
  function Wp (t, e) {
    var n
    '_blank' === e || 'blank' === e
      ? (((n = window.open()).opener = null), (n.location.href = t))
      : window.open(t, e)
  }
  var Gp = B,
    Up = ['left', 'right', 'top', 'bottom', 'width', 'height'],
    Xp = [
      ['width', 'left', 'right'],
      ['height', 'top', 'bottom']
    ]
  function Yp (a, s, l, u, h) {
    var c = 0,
      p = 0,
      d = (null == u && (u = 1 / 0), null == h && (h = 1 / 0), 0)
    s.eachChild(function (t, e) {
      var n,
        i,
        r,
        o = t.getBoundingRect(),
        e = s.childAt(e + 1),
        e = e && e.getBoundingRect()
      ;(d =
        'horizontal' === a
          ? ((r = o.width + (e ? -e.x + o.x : 0)),
            (n = c + r) > u || t.newline
              ? ((c = 0), (n = r), (p += d + l), o.height)
              : Math.max(d, o.height))
          : ((r = o.height + (e ? -e.y + o.y : 0)),
            (i = p + r) > h || t.newline
              ? ((c += d + l), (p = 0), (i = r), o.width)
              : Math.max(d, o.width))),
        t.newline ||
          ((t.x = c),
          (t.y = p),
          t.markRedraw(),
          'horizontal' === a ? (c = n + l) : (p = i + l))
    })
  }
  var qp = Yp
  function jp (t, e, n) {
    n = Np(n || 0)
    var i = e.width,
      r = e.height,
      o = fo(t.left, i),
      a = fo(t.top, r),
      e = fo(t.right, i),
      s = fo(t.bottom, r),
      l = fo(t.width, i),
      u = fo(t.height, r),
      h = n[2] + n[0],
      c = n[1] + n[3],
      p = t.aspect
    switch (
      (isNaN(l) && (l = i - e - c - o),
      isNaN(u) && (u = r - s - h - a),
      null != p &&
        (isNaN(l) && isNaN(u) && (i / r < p ? (l = 0.8 * i) : (u = 0.8 * r)),
        isNaN(l) && (l = p * u),
        isNaN(u)) &&
        (u = l / p),
      isNaN(o) && (o = i - e - l - c),
      isNaN(a) && (a = r - s - u - h),
      t.left || t.right)
    ) {
      case 'center':
        o = i / 2 - l / 2 - n[3]
        break
      case 'right':
        o = i - l - c
    }
    switch (t.top || t.bottom) {
      case 'middle':
      case 'center':
        a = r / 2 - u / 2 - n[0]
        break
      case 'bottom':
        a = r - u - h
    }
    ;(o = o || 0),
      (a = a || 0),
      isNaN(l) && (l = i - c - o - (e || 0)),
      isNaN(u) && (u = r - h - a - (s || 0))
    p = new U(o + n[3], a + n[0], l, u)
    return (p.margin = n), p
  }
  function Zp (t) {
    t = t.layoutMode || t.constructor.layoutMode
    return L(t) ? t : t ? { type: t } : null
  }
  function Kp (l, u, t) {
    var h = t && t.ignoreSize,
      t = (V(h) || (h = [h, h]), n(Xp[0], 0)),
      e = n(Xp[1], 1)
    function n (t, e) {
      var n = {},
        i = 0,
        r = {},
        o = 0
      if (
        (Gp(t, function (t) {
          r[t] = l[t]
        }),
        Gp(t, function (t) {
          c(u, t) && (n[t] = r[t] = u[t]), p(n, t) && i++, p(r, t) && o++
        }),
        h[e])
      )
        p(u, t[1]) ? (r[t[2]] = null) : p(u, t[2]) && (r[t[1]] = null)
      else if (2 !== o && i) {
        if (!(2 <= i))
          for (var a = 0; a < t.length; a++) {
            var s = t[a]
            if (!c(n, s) && c(l, s)) {
              n[s] = l[s]
              break
            }
          }
        return n
      }
      return r
    }
    function c (t, e) {
      return t.hasOwnProperty(e)
    }
    function p (t, e) {
      return null != t[e] && 'auto' !== t[e]
    }
    function i (t, e, n) {
      Gp(t, function (t) {
        e[t] = n[t]
      })
    }
    i(Xp[0], l, t), i(Xp[1], l, e)
  }
  function $p (t) {
    return (
      (e = {}),
      (n = t) &&
        e &&
        Gp(Up, function (t) {
          n.hasOwnProperty(t) && (e[t] = n[t])
        }),
      e
    )
    var e, n
  }
  dt(Yp, 'vertical'), dt(Yp, 'horizontal')
  var Qp,
    Jp,
    td,
    ed,
    nd = Yo(),
    g =
      (u(id, (Qp = Zc)),
      (id.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n)
      }),
      (id.prototype.mergeDefaultAndTheme = function (t, e) {
        var n = Zp(this),
          i = n ? $p(t) : {}
        d(t, e.getTheme().get(this.mainType)),
          d(t, this.getDefaultOption()),
          n && Kp(t, i, n)
      }),
      (id.prototype.mergeOption = function (t, e) {
        d(this.option, t, !0)
        var n = Zp(this)
        n && Kp(this.option, t, n)
      }),
      (id.prototype.optionUpdated = function (t, e) {}),
      (id.prototype.getDefaultOption = function () {
        var t = this.constructor
        if (!(e = t) || !e[ea]) return t.defaultOption
        var e = nd(this)
        if (!e.defaultOption) {
          for (var n = [], i = t; i; ) {
            var r = i.prototype.defaultOption
            r && n.push(r), (i = i.superClass)
          }
          for (var o = {}, a = n.length - 1; 0 <= a; a--) o = d(o, n[a], !0)
          e.defaultOption = o
        }
        return e.defaultOption
      }),
      (id.prototype.getReferringComponents = function (t, e) {
        var n = t + 'Id'
        return $o(
          this.ecModel,
          t,
          { index: this.get(t + 'Index', !0), id: this.get(n, !0) },
          e
        )
      }),
      (id.prototype.getBoxLayoutParams = function () {
        return {
          left: this.get('left'),
          top: this.get('top'),
          right: this.get('right'),
          bottom: this.get('bottom'),
          width: this.get('width'),
          height: this.get('height')
        }
      }),
      (id.prototype.getZLevelKey = function () {
        return ''
      }),
      (id.prototype.setZLevel = function (t) {
        this.option.zlevel = t
      }),
      (id.protoInitialize =
        (((Wc = id.prototype).type = 'component'),
        (Wc.id = ''),
        (Wc.name = ''),
        (Wc.mainType = ''),
        (Wc.subType = ''),
        void (Wc.componentIndex = 0))),
      id)
  function id (t, e, n) {
    t = Qp.call(this, t, e, n) || this
    return (t.uid = Qc('ec_cpt_model')), t
  }
  function rd (t, e) {
    return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e]
  }
  ra(g, Zc),
    la(g),
    (ed = {}),
    ((td = g).registerSubTypeDefaulter = function (t, e) {
      t = na(t)
      ed[t.main] = e
    }),
    (td.determineSubType = function (t, e) {
      var n,
        i = e.type
      return (
        i || ((n = na(t).main), td.hasSubTypes(t) && ed[n] && (i = ed[n](e))), i
      )
    }),
    (Jp = function (t) {
      var e = []
      return (
        B(g.getClassesByMainType(t), function (t) {
          e = e.concat(t.dependencies || t.prototype.dependencies || [])
        }),
        (e = F(e, function (t) {
          return na(t).main
        })),
        'dataset' !== t && I(e, 'dataset') <= 0 && e.unshift('dataset'),
        e
      )
    }),
    (g.topologicalTravel = function (t, e, n, i) {
      if (t.length) {
        ;(c = {}),
          (p = []),
          B((h = e), function (n) {
            var e,
              i,
              r = rd(c, n),
              t =
                ((t = r.originalDeps = Jp(n)),
                (e = h),
                (i = []),
                B(t, function (t) {
                  0 <= I(e, t) && i.push(t)
                }),
                i)
            ;(r.entryCount = t.length),
              0 === r.entryCount && p.push(n),
              B(t, function (t) {
                I(r.predecessor, t) < 0 && r.predecessor.push(t)
                var e = rd(c, t)
                I(e.successor, t) < 0 && e.successor.push(n)
              })
          })
        var e = { graph: c, noEntryList: p },
          r = e.graph,
          o = e.noEntryList,
          a = {}
        for (
          B(t, function (t) {
            a[t] = !0
          });
          o.length;

        ) {
          var s = o.pop(),
            l = r[s],
            u = !!a[s]
          u && (n.call(i, s, l.originalDeps.slice()), delete a[s]),
            B(l.successor, u ? f : d)
        }
        B(a, function () {
          throw new Error('')
        })
      }
      var h, c, p
      function d (t) {
        r[t].entryCount--, 0 === r[t].entryCount && o.push(t)
      }
      function f (t) {
        ;(a[t] = !0), d(t)
      }
    })
  var Yc = '',
    ca =
      ('undefined' != typeof navigator && (Yc = navigator.platform || ''),
      'rgba(0, 0, 0, 0.2)'),
    od = {
      darkMode: 'auto',
      colorBy: 'series',
      color: [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc'
      ],
      gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
      aria: {
        decal: {
          decals: [
            {
              color: ca,
              dashArrayX: [1, 0],
              dashArrayY: [2, 5],
              symbolSize: 1,
              rotation: Math.PI / 6
            },
            {
              color: ca,
              symbol: 'circle',
              dashArrayX: [
                [8, 8],
                [0, 8, 8, 0]
              ],
              dashArrayY: [6, 0],
              symbolSize: 0.8
            },
            {
              color: ca,
              dashArrayX: [1, 0],
              dashArrayY: [4, 3],
              rotation: -Math.PI / 4
            },
            {
              color: ca,
              dashArrayX: [
                [6, 6],
                [0, 6, 6, 0]
              ],
              dashArrayY: [6, 0]
            },
            {
              color: ca,
              dashArrayX: [
                [1, 0],
                [1, 6]
              ],
              dashArrayY: [1, 0, 6, 0],
              rotation: Math.PI / 4
            },
            {
              color: ca,
              symbol: 'triangle',
              dashArrayX: [
                [9, 9],
                [0, 9, 9, 0]
              ],
              dashArrayY: [7, 2],
              symbolSize: 0.75
            }
          ]
        }
      },
      textStyle: {
        fontFamily: Yc.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'normal'
      },
      blendMode: null,
      stateAnimation: { duration: 300, easing: 'cubicOut' },
      animation: 'auto',
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      animationEasing: 'cubicInOut',
      animationEasingUpdate: 'cubicInOut',
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1
    },
    ad = z([
      'tooltip',
      'label',
      'itemName',
      'itemId',
      'itemGroupId',
      'seriesName'
    ]),
    sd = 'original',
    ld = 'arrayRows',
    ud = 'objectRows',
    hd = 'keyedColumns',
    cd = 'typedArray',
    pd = 'unknown',
    dd = 'column',
    fd = 'row',
    gd = { Must: 1, Might: 2, Not: 3 },
    yd = Yo()
  function md (n, t, e) {
    var r,
      i,
      o,
      a,
      s,
      l = {},
      u = _d(t)
    return (
      u &&
        n &&
        ((o = []),
        (a = []),
        (t = t.ecModel),
        (t = yd(t).datasetMap),
        (u = u.uid + '_' + e.seriesLayoutBy),
        B((n = n.slice()), function (t, e) {
          t = L(t) ? t : (n[e] = { name: t })
          'ordinal' === t.type && null == r && ((r = e), (i = c(t))),
            (l[t.name] = [])
        }),
        (s = t.get(u) || t.set(u, { categoryWayDim: i, valueWayDim: 0 })),
        B(n, function (t, e) {
          var n,
            i = t.name,
            t = c(t)
          null == r
            ? ((n = s.valueWayDim),
              h(l[i], n, t),
              h(a, n, t),
              (s.valueWayDim += t))
            : r === e
            ? (h(l[i], 0, t), h(o, 0, t))
            : ((n = s.categoryWayDim),
              h(l[i], n, t),
              h(a, n, t),
              (s.categoryWayDim += t))
        }),
        o.length && (l.itemName = o),
        a.length) &&
        (l.seriesName = a),
      l
    )
    function h (t, e, n) {
      for (var i = 0; i < n; i++) t.push(e + i)
    }
    function c (t) {
      t = t.dimsDef
      return t ? t.length : 1
    }
  }
  function vd (t, l, u) {
    var h,
      c,
      p,
      e = {}
    return (
      _d(t) &&
        ((c = l.sourceFormat),
        (p = l.dimensionsDefine),
        (c !== ud && c !== hd) ||
          B(p, function (t, e) {
            'name' === (L(t) ? t.name : t) && (h = e)
          }),
        (t = (function () {
          for (
            var t = {}, e = {}, n = [], i = 0, r = Math.min(5, u);
            i < r;
            i++
          ) {
            var o = wd(l.data, c, l.seriesLayoutBy, p, l.startIndex, i),
              a = (n.push(o), o === gd.Not)
            if (
              (a && null == t.v && i !== h && (t.v = i),
              (null != t.n && t.n !== t.v && (a || n[t.n] !== gd.Not)) ||
                (t.n = i),
              s(t) && n[t.n] !== gd.Not)
            )
              return t
            a ||
              (o === gd.Might && null == e.v && i !== h && (e.v = i),
              null != e.n && e.n !== e.v) ||
              (e.n = i)
          }
          function s (t) {
            return null != t.v && null != t.n
          }
          return s(t) ? t : s(e) ? e : null
        })())) &&
        ((e.value = [t.v]),
        (t = null != h ? h : t.n),
        (e.itemName = [t]),
        (e.seriesName = [t])),
      e
    )
  }
  function _d (t) {
    if (!t.get('data', !0))
      return $o(
        t.ecModel,
        'dataset',
        { index: t.get('datasetIndex', !0), id: t.get('datasetId', !0) },
        Ko
      ).models[0]
  }
  function xd (t, e) {
    return wd(
      t.data,
      t.sourceFormat,
      t.seriesLayoutBy,
      t.dimensionsDefine,
      t.startIndex,
      e
    )
  }
  function wd (t, e, n, i, r, o) {
    var a, s, l
    if (!yt(t)) {
      if (
        (i && (L((i = i[o])) ? ((s = i.name), (l = i.type)) : H(i) && (s = i)),
        null != l)
      )
        return 'ordinal' === l ? gd.Must : gd.Not
      if (e === ld) {
        var u = t
        if (n === fd) {
          for (var h = u[o], c = 0; c < (h || []).length && c < 5; c++)
            if (null != (a = m(h[r + c]))) return a
        } else
          for (c = 0; c < u.length && c < 5; c++) {
            var p = u[r + c]
            if (p && null != (a = m(p[o]))) return a
          }
      } else if (e === ud) {
        var d = t
        if (!s) return gd.Not
        for (c = 0; c < d.length && c < 5; c++)
          if ((g = d[c]) && null != (a = m(g[s]))) return a
      } else if (e === hd) {
        if (!s) return gd.Not
        if (!(h = t[s]) || yt(h)) return gd.Not
        for (c = 0; c < h.length && c < 5; c++)
          if (null != (a = m(h[c]))) return a
      } else if (e === sd)
        for (var f = t, c = 0; c < f.length && c < 5; c++) {
          var g = f[c],
            y = zo(g)
          if (!V(y)) return gd.Not
          if (null != (a = m(y[o]))) return a
        }
    }
    return gd.Not
    function m (t) {
      var e = H(t)
      return null != t && isFinite(t) && '' !== t
        ? e
          ? gd.Might
          : gd.Not
        : e && '-' !== t
        ? gd.Must
        : void 0
    }
  }
  var bd = z()
  var Sd = Yo(),
    Md =
      (Yo(),
      (Td.prototype.getColorFromPalette = function (t, e, n) {
        var i = Ro(this.get('color', !0)),
          r = this.get('colorLayer', !0),
          o = this,
          a = Sd
        return (
          (a = a((e = e || o))),
          (o = a.paletteIdx || 0),
          (e = a.paletteNameMap = a.paletteNameMap || {}).hasOwnProperty(t)
            ? e[t]
            : (r =
                (r =
                  null != n && r
                    ? (function (t, e) {
                        for (var n = t.length, i = 0; i < n; i++)
                          if (t[i].length > e) return t[i]
                        return t[n - 1]
                      })(r, n)
                    : i) || i) && r.length
            ? ((n = r[o]),
              t && (e[t] = n),
              (a.paletteIdx = (o + 1) % r.length),
              n)
            : void 0
        )
      }),
      (Td.prototype.clearColorPalette = function () {
        var t, e
        ;((e = Sd)((t = this)).paletteIdx = 0), (e(t).paletteNameMap = {})
      }),
      Td)
  function Td () {}
  var Cd,
    Id,
    kd,
    Dd,
    Ad = '\0_ec_inner',
    Pd =
      (u(s, (Dd = Zc)),
      (s.prototype.init = function (t, e, n, i, r, o) {
        ;(i = i || {}),
          (this.option = null),
          (this._theme = new Zc(i)),
          (this._locale = new Zc(r)),
          (this._optionManager = o)
      }),
      (s.prototype.setOption = function (t, e, n) {
        e = Rd(e)
        this._optionManager.setOption(t, n, e), this._resetOption(null, e)
      }),
      (s.prototype.resetOption = function (t, e) {
        return this._resetOption(t, Rd(e))
      }),
      (s.prototype._resetOption = function (t, e) {
        var n,
          i = !1,
          r = this._optionManager
        return (
          (t && 'recreate' !== t) ||
            ((n = r.mountOption('recreate' === t)),
            this.option && 'recreate' !== t
              ? (this.restoreData(), this._mergeOption(n, e))
              : kd(this, n),
            (i = !0)),
          ('timeline' !== t && 'media' !== t) || this.restoreData(),
          (t && 'recreate' !== t && 'timeline' !== t) ||
            ((n = r.getTimelineOption(this)) &&
              ((i = !0), this._mergeOption(n, e))),
          (t && 'recreate' !== t && 'media' !== t) ||
            ((n = r.getMediaOption(this)).length &&
              B(
                n,
                function (t) {
                  ;(i = !0), this._mergeOption(t, e)
                },
                this
              )),
          i
        )
      }),
      (s.prototype.mergeOption = function (t) {
        this._mergeOption(t, null)
      }),
      (s.prototype._mergeOption = function (i, t) {
        var r = this.option,
          h = this._componentsMap,
          c = this._componentsCount,
          n = [],
          o = z(),
          p = t && t.replaceMergeMainTypeMap
        ;(yd(this).datasetMap = z()),
          B(i, function (t, e) {
            null != t &&
              (g.hasClass(e)
                ? e && (n.push(e), o.set(e, !0))
                : (r[e] = null == r[e] ? _(t) : d(r[e], t, !0)))
          }),
          p &&
            p.each(function (t, e) {
              g.hasClass(e) && !o.get(e) && (n.push(e), o.set(e, !0))
            }),
          g.topologicalTravel(
            n,
            g.getAllClassMainTypes(),
            function (o) {
              ;(t = this), (n = Ro(i[(e = o)]))
              var t = (e = (e = bd.get(e)) && e(t)) ? n.concat(e) : n,
                e = h.get(o),
                n = Eo(
                  e,
                  t,
                  e
                    ? p && p.get(o)
                      ? 'replaceMerge'
                      : 'normalMerge'
                    : 'replaceAll'
                )
              Uo(n, o, g), (r[o] = null), h.set(o, null), c.set(o, 0)
              var a,
                s = [],
                l = [],
                u = 0
              B(
                n,
                function (t, e) {
                  var n = t.existing,
                    i = t.newOption
                  if (i) {
                    var r = g.getClass(o, t.keyInfo.subType, !('series' === o))
                    if (!r) return
                    if ('tooltip' === o) {
                      if (a) return
                      a = !0
                    }
                    n && n.constructor === r
                      ? ((n.name = t.keyInfo.name),
                        n.mergeOption(i, this),
                        n.optionUpdated(i, !1))
                      : ((e = O({ componentIndex: e }, t.keyInfo)),
                        O((n = new r(i, this, this, e)), e),
                        t.brandNew && (n.__requireNewView = !0),
                        n.init(i, this, this),
                        n.optionUpdated(null, !0))
                  } else n && (n.mergeOption({}, this), n.optionUpdated({}, !1))
                  n
                    ? (s.push(n.option), l.push(n), u++)
                    : (s.push(void 0), l.push(void 0))
                },
                this
              ),
                (r[o] = s),
                h.set(o, l),
                c.set(o, u),
                'series' === o && Cd(this)
            },
            this
          ),
          this._seriesIndices || Cd(this)
      }),
      (s.prototype.getOption = function () {
        var a = _(this.option)
        return (
          B(a, function (t, e) {
            if (g.hasClass(e)) {
              for (var n = Ro(t), i = n.length, r = !1, o = i - 1; 0 <= o; o--)
                n[o] && !Go(n[o]) ? (r = !0) : ((n[o] = null), r || i--)
              ;(n.length = i), (a[e] = n)
            }
          }),
          delete a[Ad],
          a
        )
      }),
      (s.prototype.getTheme = function () {
        return this._theme
      }),
      (s.prototype.getLocaleModel = function () {
        return this._locale
      }),
      (s.prototype.setUpdatePayload = function (t) {
        this._payload = t
      }),
      (s.prototype.getUpdatePayload = function () {
        return this._payload
      }),
      (s.prototype.getComponent = function (t, e) {
        var n = this._componentsMap.get(t)
        if (n) {
          t = n[e || 0]
          if (t) return t
          if (null == e)
            for (var i = 0; i < n.length; i++) if (n[i]) return n[i]
        }
      }),
      (s.prototype.queryComponents = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a = t.mainType
        return a &&
          ((n = t.index),
          (i = t.id),
          (r = t.name),
          (o = this._componentsMap.get(a))) &&
          o.length
          ? (null != n
              ? ((e = []),
                B(Ro(n), function (t) {
                  o[t] && e.push(o[t])
                }))
              : (e =
                  null != i
                    ? Ld('id', i, o)
                    : null != r
                    ? Ld('name', r, o)
                    : ct(o, function (t) {
                        return !!t
                      })),
            Od(e, t))
          : []
      }),
      (s.prototype.findComponents = function (t) {
        var e,
          n = t.query,
          i = t.mainType,
          r =
            ((r = i + 'Index'),
            (o = i + 'Id'),
            (e = i + 'Name'),
            !n || (null == n[r] && null == n[o] && null == n[e])
              ? null
              : { mainType: i, index: n[r], id: n[o], name: n[e] }),
          o = Od(
            r
              ? this.queryComponents(r)
              : ct(this._componentsMap.get(i), function (t) {
                  return !!t
                }),
            t
          )
        return t.filter ? ct(o, t.filter) : o
      }),
      (s.prototype.eachComponent = function (t, e, n) {
        var i = this._componentsMap
        if (S(t)) {
          var r = e,
            o = t
          i.each(function (t, e) {
            for (var n = 0; t && n < t.length; n++) {
              var i = t[n]
              i && o.call(r, e, i, i.componentIndex)
            }
          })
        } else
          for (
            var a = H(t) ? i.get(t) : L(t) ? this.findComponents(t) : null,
              s = 0;
            a && s < a.length;
            s++
          ) {
            var l = a[s]
            l && e.call(n, l, l.componentIndex)
          }
      }),
      (s.prototype.getSeriesByName = function (t) {
        var e = Ho(t, null)
        return ct(this._componentsMap.get('series'), function (t) {
          return !!t && null != e && t.name === e
        })
      }),
      (s.prototype.getSeriesByIndex = function (t) {
        return this._componentsMap.get('series')[t]
      }),
      (s.prototype.getSeriesByType = function (e) {
        return ct(this._componentsMap.get('series'), function (t) {
          return !!t && t.subType === e
        })
      }),
      (s.prototype.getSeries = function () {
        return ct(this._componentsMap.get('series'), function (t) {
          return !!t
        })
      }),
      (s.prototype.getSeriesCount = function () {
        return this._componentsCount.get('series')
      }),
      (s.prototype.eachSeries = function (n, i) {
        Id(this),
          B(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get('series')[t]
              n.call(i, e, t)
            },
            this
          )
      }),
      (s.prototype.eachRawSeries = function (e, n) {
        B(this._componentsMap.get('series'), function (t) {
          t && e.call(n, t, t.componentIndex)
        })
      }),
      (s.prototype.eachSeriesByType = function (n, i, r) {
        Id(this),
          B(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get('series')[t]
              e.subType === n && i.call(r, e, t)
            },
            this
          )
      }),
      (s.prototype.eachRawSeriesByType = function (t, e, n) {
        return B(this.getSeriesByType(t), e, n)
      }),
      (s.prototype.isSeriesFiltered = function (t) {
        return Id(this), null == this._seriesIndicesMap.get(t.componentIndex)
      }),
      (s.prototype.getCurrentSeriesIndices = function () {
        return (this._seriesIndices || []).slice()
      }),
      (s.prototype.filterSeries = function (n, i) {
        Id(this)
        var r = []
        B(
          this._seriesIndices,
          function (t) {
            var e = this._componentsMap.get('series')[t]
            n.call(i, e, t) && r.push(t)
          },
          this
        ),
          (this._seriesIndices = r),
          (this._seriesIndicesMap = z(r))
      }),
      (s.prototype.restoreData = function (n) {
        Cd(this)
        var t = this._componentsMap,
          i = []
        t.each(function (t, e) {
          g.hasClass(e) && i.push(e)
        }),
          g.topologicalTravel(i, g.getAllClassMainTypes(), function (e) {
            B(t.get(e), function (t) {
              !t ||
                ('series' === e &&
                  (function (t, e) {
                    {
                      var n, i
                      if (e)
                        return (
                          (n = e.seriesIndex),
                          (i = e.seriesId),
                          (e = e.seriesName),
                          (null != n && t.componentIndex !== n) ||
                            (null != i && t.id !== i) ||
                            (null != e && t.name !== e)
                        )
                    }
                  })(t, n)) ||
                t.restoreData()
            })
          })
      }),
      (s.internalField =
        ((Cd = function (t) {
          var e = (t._seriesIndices = [])
          B(t._componentsMap.get('series'), function (t) {
            t && e.push(t.componentIndex)
          }),
            (t._seriesIndicesMap = z(e))
        }),
        (Id = function (t) {}),
        void (kd = function (t, e) {
          ;(t.option = {}),
            (t.option[Ad] = 1),
            (t._componentsMap = z({ series: [] })),
            (t._componentsCount = z())
          var n,
            i,
            r = e.aria
          L(r) && null == r.enabled && (r.enabled = !0),
            (n = e),
            (r = t._theme.option),
            (i = n.color && !n.colorLayer),
            B(r, function (t, e) {
              ;('colorLayer' === e && i) ||
                g.hasClass(e) ||
                ('object' == typeof t
                  ? (n[e] = n[e] ? d(n[e], t, !1) : _(t))
                  : null == n[e] && (n[e] = t))
            }),
            d(e, od, !1),
            t._mergeOption(e, null)
        }))),
      s)
  function s () {
    return (null !== Dd && Dd.apply(this, arguments)) || this
  }
  function Ld (e, t, n) {
    var i, r
    return V(t)
      ? ((i = z()),
        B(t, function (t) {
          null != t && null != Ho(t, null) && i.set(t, !0)
        }),
        ct(n, function (t) {
          return t && i.get(t[e])
        }))
      : ((r = Ho(t, null)),
        ct(n, function (t) {
          return t && null != r && t[e] === r
        }))
  }
  function Od (t, e) {
    return e.hasOwnProperty('subType')
      ? ct(t, function (t) {
          return t && t.subType === e.subType
        })
      : t
  }
  function Rd (t) {
    var e = z()
    return (
      t &&
        B(Ro(t.replaceMerge), function (t) {
          e.set(t, !0)
        }),
      { replaceMergeMainTypeMap: e }
    )
  }
  lt(Pd, Md)
  function Nd (e) {
    B(
      Bd,
      function (t) {
        this[t] = pt(e[t], e)
      },
      this
    )
  }
  var Bd = [
      'getDom',
      'getZr',
      'getWidth',
      'getHeight',
      'getDevicePixelRatio',
      'dispatchAction',
      'isSSR',
      'isDisposed',
      'on',
      'off',
      'getDataURL',
      'getConnectedDataURL',
      'getOption',
      'getId',
      'updateLabelLayout'
    ],
    zd = {},
    Ed =
      ((Fd.prototype.create = function (n, i) {
        var r = []
        B(zd, function (t, e) {
          t = t.create(n, i)
          r = r.concat(t || [])
        }),
          (this._coordinateSystems = r)
      }),
      (Fd.prototype.update = function (e, n) {
        B(this._coordinateSystems, function (t) {
          t.update && t.update(e, n)
        })
      }),
      (Fd.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice()
      }),
      (Fd.register = function (t, e) {
        zd[t] = e
      }),
      (Fd.get = function (t) {
        return zd[t]
      }),
      Fd)
  function Fd () {
    this._coordinateSystems = []
  }
  var Vd = /^(min|max)?(.+)$/,
    Hd =
      ((Wd.prototype.setOption = function (t, e, n) {
        t &&
          (B(Ro(t.series), function (t) {
            t && t.data && yt(t.data) && Dt(t.data)
          }),
          B(Ro(t.dataset), function (t) {
            t && t.source && yt(t.source) && Dt(t.source)
          })),
          (t = _(t))
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p,
          d = this._optionBackup,
          t =
            ((i = e),
            (r = !d),
            (s = []),
            (t = (e = t).baseOption),
            (l = e.timeline),
            (u = e.options),
            (h = e.media),
            (c = !!e.media),
            (p = !!(u || l || (t && t.timeline))),
            t
              ? (a = t).timeline || (a.timeline = l)
              : ((p || c) && (e.options = e.media = null), (a = e)),
            c &&
              V(h) &&
              B(h, function (t) {
                t && t.option && (t.query ? s.push(t) : (o = o || t))
              }),
            f(a),
            B(u, f),
            B(s, function (t) {
              return f(t.option)
            }),
            {
              baseOption: a,
              timelineOptions: u || [],
              mediaDefault: o,
              mediaList: s
            })
        function f (e) {
          B(i, function (t) {
            t(e, r)
          })
        }
        ;(this._newBaseOption = t.baseOption),
          d
            ? (t.timelineOptions.length &&
                (d.timelineOptions = t.timelineOptions),
              t.mediaList.length && (d.mediaList = t.mediaList),
              t.mediaDefault && (d.mediaDefault = t.mediaDefault))
            : (this._optionBackup = t)
      }),
      (Wd.prototype.mountOption = function (t) {
        var e = this._optionBackup
        return (
          (this._timelineOptions = e.timelineOptions),
          (this._mediaList = e.mediaList),
          (this._mediaDefault = e.mediaDefault),
          (this._currentMediaIndices = []),
          _(t ? e.baseOption : this._newBaseOption)
        )
      }),
      (Wd.prototype.getTimelineOption = function (t) {
        var e,
          n = this._timelineOptions
        return (e =
          n.length && (t = t.getComponent('timeline'))
            ? _(n[t.getCurrentIndex()])
            : e)
      }),
      (Wd.prototype.getMediaOption = function (t) {
        var e,
          n,
          i = this._api.getWidth(),
          r = this._api.getHeight(),
          o = this._mediaList,
          a = this._mediaDefault,
          s = [],
          l = []
        if (o.length || a) {
          for (var u = 0, h = o.length; u < h; u++)
            !(function (t, e, n) {
              var i = { width: e, height: n, aspectratio: e / n },
                r = !0
              return (
                B(t, function (t, e) {
                  var n,
                    e = e.match(Vd)
                  e &&
                    e[1] &&
                    e[2] &&
                    ((n = e[1]),
                    (e = e[2].toLowerCase()),
                    (e = i[e]),
                    (t = t),
                    ('min' === (n = n)
                      ? t <= e
                      : 'max' === n
                      ? e <= t
                      : e === t) || (r = !1))
                }),
                r
              )
            })(o[u].query, i, r) || s.push(u)
          ;(s = !s.length && a ? [-1] : s).length &&
            ((e = s),
            (n = this._currentMediaIndices),
            e.join(',') !== n.join(',')) &&
            (l = F(s, function (t) {
              return _((-1 === t ? a : o[t]).option)
            })),
            (this._currentMediaIndices = s)
        }
        return l
      }),
      Wd)
  function Wd (t) {
    ;(this._timelineOptions = []),
      (this._mediaList = []),
      (this._currentMediaIndices = []),
      (this._api = t)
  }
  var Gd = B,
    Ud = L,
    Xd = [
      'areaStyle',
      'lineStyle',
      'nodeStyle',
      'linkStyle',
      'chordStyle',
      'label',
      'labelLine'
    ]
  function Yd (t) {
    var e = t && t.itemStyle
    if (e)
      for (var n = 0, i = Xd.length; n < i; n++) {
        var r = Xd[n],
          o = e.normal,
          a = e.emphasis
        o &&
          o[r] &&
          ((t[r] = t[r] || {}),
          t[r].normal ? d(t[r].normal, o[r]) : (t[r].normal = o[r]),
          (o[r] = null)),
          a &&
            a[r] &&
            ((t[r] = t[r] || {}),
            t[r].emphasis ? d(t[r].emphasis, a[r]) : (t[r].emphasis = a[r]),
            (a[r] = null))
      }
  }
  function qd (t, e, n) {
    var i, r
    t &&
      t[e] &&
      (t[e].normal || t[e].emphasis) &&
      ((i = t[e].normal),
      (r = t[e].emphasis),
      i &&
        (n ? ((t[e].normal = t[e].emphasis = null), E(t[e], i)) : (t[e] = i)),
      r) &&
      ((t.emphasis = t.emphasis || {}),
      (t.emphasis[e] = r).focus && (t.emphasis.focus = r.focus),
      r.blurScope) &&
      (t.emphasis.blurScope = r.blurScope)
  }
  function jd (t) {
    qd(t, 'itemStyle'),
      qd(t, 'lineStyle'),
      qd(t, 'areaStyle'),
      qd(t, 'label'),
      qd(t, 'labelLine'),
      qd(t, 'upperLabel'),
      qd(t, 'edgeLabel')
  }
  function Zd (t, e) {
    var n = Ud(t) && t[e],
      i = Ud(n) && n.textStyle
    if (i)
      for (var r = 0, o = Bo.length; r < o; r++) {
        var a = Bo[r]
        i.hasOwnProperty(a) && (n[a] = i[a])
      }
  }
  function Kd (t) {
    t && (jd(t), Zd(t, 'label'), t.emphasis) && Zd(t.emphasis, 'label')
  }
  function $d (t) {
    return V(t) ? t : t ? [t] : []
  }
  function Qd (t) {
    return (V(t) ? t[0] : t) || {}
  }
  function Jd (e, t) {
    Gd($d(e.series), function (t) {
      if (Ud(t))
        if (Ud(t)) {
          Yd(t),
            jd(t),
            Zd(t, 'label'),
            Zd(t, 'upperLabel'),
            Zd(t, 'edgeLabel'),
            t.emphasis &&
              (Zd(t.emphasis, 'label'),
              Zd(t.emphasis, 'upperLabel'),
              Zd(t.emphasis, 'edgeLabel'))
          var e = t.markPoint,
            n = (e && (Yd(e), Kd(e)), t.markLine),
            i = (n && (Yd(n), Kd(n)), t.markArea),
            r = (i && Kd(i), t.data)
          if ('graph' === t.type) {
            var r = r || t.nodes,
              o = t.links || t.edges
            if (o && !yt(o)) for (var a = 0; a < o.length; a++) Kd(o[a])
            B(t.categories, function (t) {
              jd(t)
            })
          }
          if (r && !yt(r)) for (a = 0; a < r.length; a++) Kd(r[a])
          if ((e = t.markPoint) && e.data)
            for (var s = e.data, a = 0; a < s.length; a++) Kd(s[a])
          if ((n = t.markLine) && n.data) {
            var l = n.data
            for (a = 0; a < l.length; a++)
              V(l[a]) ? (Kd(l[a][0]), Kd(l[a][1])) : Kd(l[a])
          }
          'gauge' === t.type
            ? (Zd(t, 'axisLabel'), Zd(t, 'title'), Zd(t, 'detail'))
            : 'treemap' === t.type
            ? (qd(t.breadcrumb, 'itemStyle'),
              B(t.levels, function (t) {
                jd(t)
              }))
            : 'tree' === t.type && jd(t.leaves)
        }
    })
    var n = [
      'xAxis',
      'yAxis',
      'radiusAxis',
      'angleAxis',
      'singleAxis',
      'parallelAxis',
      'radar'
    ]
    t && n.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis'),
      Gd(n, function (t) {
        Gd($d(e[t]), function (t) {
          t && (Zd(t, 'axisLabel'), Zd(t.axisPointer, 'label'))
        })
      }),
      Gd($d(e.parallel), function (t) {
        t = t && t.parallelAxisDefault
        Zd(t, 'axisLabel'), Zd(t && t.axisPointer, 'label')
      }),
      Gd($d(e.calendar), function (t) {
        qd(t, 'itemStyle'),
          Zd(t, 'dayLabel'),
          Zd(t, 'monthLabel'),
          Zd(t, 'yearLabel')
      }),
      Gd($d(e.radar), function (t) {
        Zd(t, 'name'),
          t.name &&
            null == t.axisName &&
            ((t.axisName = t.name), delete t.name),
          null != t.nameGap &&
            null == t.axisNameGap &&
            ((t.axisNameGap = t.nameGap), delete t.nameGap)
      }),
      Gd($d(e.geo), function (t) {
        Ud(t) &&
          (Kd(t),
          Gd($d(t.regions), function (t) {
            Kd(t)
          }))
      }),
      Gd($d(e.timeline), function (t) {
        Kd(t), qd(t, 'label'), qd(t, 'itemStyle'), qd(t, 'controlStyle', !0)
        t = t.data
        V(t) &&
          B(t, function (t) {
            L(t) && (qd(t, 'label'), qd(t, 'itemStyle'))
          })
      }),
      Gd($d(e.toolbox), function (t) {
        qd(t, 'iconStyle'),
          Gd(t.feature, function (t) {
            qd(t, 'iconStyle')
          })
      }),
      Zd(Qd(e.axisPointer), 'label'),
      Zd(Qd(e.tooltip).axisPointer, 'label')
  }
  function tf (e) {
    e &&
      B(ef, function (t) {
        t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]])
      })
  }
  var ef = [
      ['x', 'left'],
      ['y', 'top'],
      ['x2', 'right'],
      ['y2', 'bottom']
    ],
    nf = [
      'grid',
      'geo',
      'parallel',
      'legend',
      'toolbox',
      'title',
      'visualMap',
      'dataZoom',
      'timeline'
    ],
    rf = [
      ['borderRadius', 'barBorderRadius'],
      ['borderColor', 'barBorderColor'],
      ['borderWidth', 'barBorderWidth']
    ]
  function of (t) {
    var e = t && t.itemStyle
    if (e)
      for (var n = 0; n < rf.length; n++) {
        var i = rf[n][1],
          r = rf[n][0]
        null != e[i] && (e[r] = e[i])
      }
  }
  function af (t) {
    t &&
      'edge' === t.alignTo &&
      null != t.margin &&
      null == t.edgeDistance &&
      (t.edgeDistance = t.margin)
  }
  function sf (t) {
    t && t.downplay && !t.blur && (t.blur = t.downplay)
  }
  function lf (e, t) {
    Jd(e, t),
      (e.series = Ro(e.series)),
      B(e.series, function (t) {
        if (L(t)) {
          var e,
            n = t.type
          if ('line' === n) null != t.clipOverflow && (t.clip = t.clipOverflow)
          else if ('pie' === n || 'gauge' === n) {
            if (
              (null != t.clockWise && (t.clockwise = t.clockWise),
              af(t.label),
              (e = t.data) && !yt(e))
            )
              for (var i = 0; i < e.length; i++) af(e[i])
            null != t.hoverOffset &&
              ((t.emphasis = t.emphasis || {}),
              (t.emphasis.scaleSize = null)) &&
              (t.emphasis.scaleSize = t.hoverOffset)
          } else if ('gauge' === n) {
            var r = (function (t, e) {
              for (
                var n = e.split(','), i = t, r = 0;
                r < n.length && null != (i = i && i[n[r]]);
                r++
              );
              return i
            })(t, 'pointer.color')
            if (null != r) {
              var o = t
              var a = 'itemStyle.color'
              var s = void 0
              for (var l, u = a.split(','), h = o, c = 0; c < u.length - 1; c++)
                null == h[(l = u[c])] && (h[l] = {}), (h = h[l])
              ;(!s && null != h[u[c]]) || (h[u[c]] = r)
            }
          } else if ('bar' === n) {
            if (
              (of(t),
              of(t.backgroundStyle),
              of(t.emphasis),
              (e = t.data) && !yt(e))
            )
              for (i = 0; i < e.length; i++)
                'object' == typeof e[i] && (of(e[i]), of(e[i] && e[i].emphasis))
          } else
            'sunburst' === n
              ? ((a = t.highlightPolicy) &&
                  ((t.emphasis = t.emphasis || {}),
                  t.emphasis.focus || (t.emphasis.focus = a)),
                sf(t),
                (function t (e, n) {
                  if (e)
                    for (var i = 0; i < e.length; i++)
                      n(e[i]), e[i] && t(e[i].children, n)
                })(t.data, sf))
              : 'graph' === n || 'sankey' === n
              ? (o = t) &&
                null != o.focusNodeAdjacency &&
                ((o.emphasis = o.emphasis || {}), null == o.emphasis.focus) &&
                (o.emphasis.focus = 'adjacency')
              : 'map' === n &&
                (t.mapType && !t.map && (t.map = t.mapType), t.mapLocation) &&
                E(t, t.mapLocation)
          null != t.hoverAnimation &&
            ((t.emphasis = t.emphasis || {}), t.emphasis) &&
            null == t.emphasis.scale &&
            (t.emphasis.scale = t.hoverAnimation),
            tf(t)
        }
      }),
      e.dataRange && (e.visualMap = e.dataRange),
      B(nf, function (t) {
        t = e[t]
        t &&
          B((t = V(t) ? t : [t]), function (t) {
            tf(t)
          })
      })
  }
  function uf (_) {
    B(_, function (p, d) {
      var f = [],
        g = [NaN, NaN],
        t = [p.stackResultDimension, p.stackedOverDimension],
        y = p.data,
        m = p.isStackedByIndex,
        v = p.seriesModel.get('stackStrategy') || 'samesign'
      y.modify(t, function (t, e, n) {
        var i,
          r,
          o = y.get(p.stackedDimension, n)
        if (isNaN(o)) return g
        m ? (r = y.getRawIndex(n)) : (i = y.get(p.stackedByDimension, n))
        for (var a, s, l, u = NaN, h = d - 1; 0 <= h; h--) {
          var c = _[h]
          if (0 <= (r = m ? r : c.data.rawIndexOf(c.stackedByDimension, i))) {
            c = c.data.getByRawIndex(c.stackResultDimension, r)
            if (
              'all' === v ||
              ('positive' === v && 0 < c) ||
              ('negative' === v && c < 0) ||
              ('samesign' === v && 0 <= o && 0 < c) ||
              ('samesign' === v && o <= 0 && c < 0)
            ) {
              ;(a = o),
                (s = c),
                (l = void 0),
                (l = Math.max(yo(a), yo(s))),
                (a += s),
                (o = co < l ? a : go(a, l)),
                (u = c)
              break
            }
          }
        }
        return (f[0] = o), (f[1] = u), f
      })
    })
  }
  var hf,
    cf,
    pf = function (t) {
      ;(this.data = t.data || (t.sourceFormat === hd ? {} : [])),
        (this.sourceFormat = t.sourceFormat || pd),
        (this.seriesLayoutBy = t.seriesLayoutBy || dd),
        (this.startIndex = t.startIndex || 0),
        (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
        (this.metaRawOption = t.metaRawOption)
      var e = (this.dimensionsDefine = t.dimensionsDefine)
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n]
          null == i.type && xd(this, n) === gd.Must && (i.type = 'ordinal')
        }
    }
  function df (t) {
    return t instanceof pf
  }
  function ff (t, e, n) {
    n = n || yf(t)
    var i = e.seriesLayoutBy,
      r = (function (t, e, n, i, r) {
        var o, a
        if (!t)
          return {
            dimensionsDefine: mf(r),
            startIndex: a,
            dimensionsDetectedCount: o
          }
        {
          var s
          e === ld
            ? ((s = t),
              'auto' === i || null == i
                ? vf(
                    function (t) {
                      null != t &&
                        '-' !== t &&
                        (H(t) ? null == a && (a = 1) : (a = 0))
                    },
                    n,
                    s,
                    10
                  )
                : (a = W(i) ? i : i ? 1 : 0),
              r ||
                1 !== a ||
                ((r = []),
                vf(
                  function (t, e) {
                    r[e] = null != t ? t + '' : ''
                  },
                  n,
                  s,
                  1 / 0
                )),
              (o = r
                ? r.length
                : n === fd
                ? s.length
                : s[0]
                ? s[0].length
                : null))
            : e === ud
            ? (r =
                r ||
                (function (t) {
                  for (var e, n = 0; n < t.length && !(e = t[n++]); );
                  if (e) return R(e)
                })(t))
            : e === hd
            ? r ||
              ((r = []),
              B(t, function (t, e) {
                r.push(e)
              }))
            : e === sd && ((i = zo(t[0])), (o = (V(i) && i.length) || 1))
        }
        return {
          startIndex: a,
          dimensionsDefine: mf(r),
          dimensionsDetectedCount: o
        }
      })(t, n, i, e.sourceHeader, e.dimensions)
    return new pf({
      data: t,
      sourceFormat: n,
      seriesLayoutBy: i,
      dimensionsDefine: r.dimensionsDefine,
      startIndex: r.startIndex,
      dimensionsDetectedCount: r.dimensionsDetectedCount,
      metaRawOption: _(e)
    })
  }
  function gf (t) {
    return new pf({ data: t, sourceFormat: yt(t) ? cd : sd })
  }
  function yf (t) {
    var e = pd
    if (yt(t)) e = cd
    else if (V(t)) {
      0 === t.length && (e = ld)
      for (var n = 0, i = t.length; n < i; n++) {
        var r = t[n]
        if (null != r) {
          if (V(r)) {
            e = ld
            break
          }
          if (L(r)) {
            e = ud
            break
          }
        }
      }
    } else if (L(t))
      for (var o in t)
        if (Ft(t, o) && ut(t[o])) {
          e = hd
          break
        }
    return e
  }
  function mf (t) {
    var i
    if (t)
      return (
        (i = z()),
        F(t, function (t, e) {
          var n,
            t = {
              name: (t = L(t) ? t : { name: t }).name,
              displayName: t.displayName,
              type: t.type
            }
          return (
            null != t.name &&
              ((t.name += ''),
              null == t.displayName && (t.displayName = t.name),
              (n = i.get(t.name))
                ? (t.name += '-' + n.count++)
                : i.set(t.name, { count: 1 })),
            t
          )
        })
      )
  }
  function vf (t, e, n, i) {
    if (e === fd)
      for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r)
    else for (var o = n[0] || [], r = 0; r < o.length && r < i; r++) t(o[r], r)
  }
  function _f (t) {
    t = t.sourceFormat
    return t === ud || t === hd
  }
  ;(Mf.prototype.getSource = function () {
    return this._source
  }),
    (Mf.prototype.count = function () {
      return 0
    }),
    (Mf.prototype.getItem = function (t, e) {}),
    (Mf.prototype.appendData = function (t) {}),
    (Mf.prototype.clean = function () {}),
    (Mf.protoInitialize =
      (((cc = Mf.prototype).pure = !1), void (cc.persistent = !0))),
    (Mf.internalField =
      ((cf = function (t, e, n) {
        var i,
          r = n.sourceFormat,
          o = n.seriesLayoutBy,
          a = n.startIndex,
          n = n.dimensionsDefine
        O(t, hf[Nf(r, o)]),
          r === cd
            ? ((t.getItem = xf), (t.count = bf), (t.fillStorage = wf))
            : ((i = kf(r, o)),
              (t.getItem = pt(i, null, e, a, n)),
              (i = Pf(r, o)),
              (t.count = pt(i, null, e, a, n)))
      }),
      (xf = function (t, e) {
        ;(t -= this._offset), (e = e || [])
        for (
          var n = this._data, i = this._dimSize, r = i * t, o = 0;
          o < i;
          o++
        )
          e[o] = n[r + o]
        return e
      }),
      (wf = function (t, e, n, i) {
        for (var r = this._data, o = this._dimSize, a = 0; a < o; a++) {
          for (
            var s = i[a],
              l = null == s[0] ? 1 / 0 : s[0],
              u = null == s[1] ? -1 / 0 : s[1],
              h = e - t,
              c = n[a],
              p = 0;
            p < h;
            p++
          ) {
            var d = r[p * o + a]
            ;(c[t + p] = d) < l && (l = d), u < d && (u = d)
          }
          ;(s[0] = l), (s[1] = u)
        }
      }),
      (bf = function () {
        return this._data ? this._data.length / this._dimSize : 0
      }),
      ((cc = {})[ld + '_' + dd] = { pure: !0, appendData: Tf }),
      (cc[ld + '_' + fd] = {
        pure: !0,
        appendData: function () {
          throw new Error(
            'Do not support appendData when set seriesLayoutBy: "row".'
          )
        }
      }),
      (cc[ud] = { pure: !0, appendData: Tf }),
      (cc[hd] = {
        pure: !0,
        appendData: function (t) {
          var r = this._data
          B(t, function (t, e) {
            for (var n = r[e] || (r[e] = []), i = 0; i < (t || []).length; i++)
              n.push(t[i])
          })
        }
      }),
      (cc[sd] = { appendData: Tf }),
      (cc[cd] = {
        persistent: !1,
        pure: !0,
        appendData: function (t) {
          this._data = t
        },
        clean: function () {
          ;(this._offset += this.count()), (this._data = null)
        }
      }),
      void (hf = cc)))
  var xf,
    wf,
    bf,
    Sf = Mf
  function Mf (t, e) {
    var t = df(t) ? t : gf(t),
      n = ((this._source = t), (this._data = t.data))
    t.sourceFormat === cd &&
      ((this._offset = 0), (this._dimSize = e), (this._data = n)),
      cf(this, n, t)
  }
  function Tf (t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e])
  }
  function Cf (t, e, n, i) {
    return t[i]
  }
  ;((cp = {})[ld + '_' + dd] = function (t, e, n, i) {
    return t[i + e]
  }),
    (cp[ld + '_' + fd] = function (t, e, n, i, r) {
      i += e
      for (var o = r || [], a = t, s = 0; s < a.length; s++) {
        var l = a[s]
        o[s] = l ? l[i] : null
      }
      return o
    }),
    (cp[ud] = Cf),
    (cp[hd] = function (t, e, n, i, r) {
      for (var o = r || [], a = 0; a < n.length; a++) {
        var s = t[n[a].name]
        o[a] = s ? s[i] : null
      }
      return o
    }),
    (cp[sd] = Cf)
  var If = cp
  function kf (t, e) {
    return If[Nf(t, e)]
  }
  function Df (t, e, n) {
    return t.length
  }
  ;((Wc = {})[ld + '_' + dd] = function (t, e, n) {
    return Math.max(0, t.length - e)
  }),
    (Wc[ld + '_' + fd] = function (t, e, n) {
      t = t[0]
      return t ? Math.max(0, t.length - e) : 0
    }),
    (Wc[ud] = Df),
    (Wc[hd] = function (t, e, n) {
      t = t[n[0].name]
      return t ? t.length : 0
    }),
    (Wc[sd] = Df)
  var Af = Wc
  function Pf (t, e) {
    return Af[Nf(t, e)]
  }
  function Lf (t, e, n) {
    return t[e]
  }
  ;((ca = {})[ld] = Lf),
    (ca[ud] = function (t, e, n) {
      return t[n]
    }),
    (ca[hd] = Lf),
    (ca[sd] = function (t, e, n) {
      t = zo(t)
      return t instanceof Array ? t[e] : t
    }),
    (ca[cd] = Lf)
  var Of = ca
  function Rf (t) {
    return Of[t]
  }
  function Nf (t, e) {
    return t === ld ? t + '_' + e : t
  }
  function Bf (t, e, n) {
    if (t) {
      var i,
        r,
        e = t.getRawDataItem(e)
      if (null != e)
        return (
          (i = (r = t.getStore()).getSource().sourceFormat),
          null != n
            ? ((t = t.getDimensionIndex(n)),
              (n = r.getDimensionProperty(t)),
              Rf(i)(e, t, n))
            : ((r = e), i === sd ? zo(e) : r)
        )
    }
  }
  var zf = /\{@(.+?)\}/g,
    Yc =
      ((Ef.prototype.getDataParams = function (t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          o = n.getName(t),
          a = n.getRawDataItem(t),
          s = n.getItemVisual(t, 'style'),
          t = s && s[n.getItemVisual(t, 'drawType') || 'fill'],
          s = s && s.stroke,
          l = this.mainType,
          u = 'series' === l,
          n = n.userOutput && n.userOutput.get()
        return {
          componentType: l,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: u ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: u ? this.id : null,
          seriesName: u ? this.name : null,
          name: o,
          dataIndex: r,
          data: a,
          dataType: e,
          value: i,
          color: t,
          borderColor: s,
          dimensionNames: n ? n.fullDimensions : null,
          encode: n ? n.encode : null,
          $vars: ['seriesName', 'name', 'value']
        }
      }),
      (Ef.prototype.getFormattedLabel = function (i, t, e, n, r, o) {
        t = t || 'normal'
        var a = this.getData(e),
          e = this.getDataParams(i, e)
        return (
          o && (e.value = o.interpolatedValue),
          null != n && V(e.value) && (e.value = e.value[n]),
          S(
            (r =
              r ||
              a
                .getItemModel(i)
                .get(
                  'normal' === t
                    ? ['label', 'formatter']
                    : [t, 'label', 'formatter']
                ))
          )
            ? ((e.status = t), (e.dimensionIndex = n), r(e))
            : H(r)
            ? Fp(r, e).replace(zf, function (t, e) {
                var n = e.length,
                  n =
                    ('[' === e.charAt(0) &&
                      ']' === e.charAt(n - 1) &&
                      (e = +e.slice(1, n - 1)),
                    Bf(a, i, e))
                return null !=
                  (n =
                    o &&
                    V(o.interpolatedValue) &&
                    0 <= (e = a.getDimensionIndex(e))
                      ? o.interpolatedValue[e]
                      : n)
                  ? n + ''
                  : ''
              })
            : void 0
        )
      }),
      (Ef.prototype.getRawValue = function (t, e) {
        return Bf(this.getData(e), t)
      }),
      (Ef.prototype.formatTooltip = function (t, e, n) {}),
      Ef)
  function Ef () {}
  function Ff (t) {
    var e, n
    return L(t) ? t.type && (n = t) : (e = t), { text: e, frag: n }
  }
  function Vf (t) {
    return new Hf(t)
  }
  ;(Wf.prototype.perform = function (t) {
    var e,
      n = this._upstream,
      i = t && t.skip
    this._dirty &&
      n &&
      ((o = this.context).data = o.outputData = n.context.outputData),
      this.__pipeline && (this.__pipeline.currentTask = this),
      this._plan && !i && (e = this._plan(this.context))
    var r,
      o = u(this._modBy),
      a = this._modDataCount || 0,
      s = u(t && t.modBy),
      l = (t && t.modDataCount) || 0
    function u (t) {
      return (t = 1 <= t ? t : 1)
    }
    ;(o === s && a === l) || (e = 'reset'),
      (!this._dirty && 'reset' !== e) ||
        ((this._dirty = !1), (r = this._doReset(i))),
      (this._modBy = s),
      (this._modDataCount = l)
    o = t && t.step
    if (
      ((this._dueEnd = n
        ? n._outputDueEnd
        : this._count
        ? this._count(this.context)
        : 1 / 0),
      this._progress)
    ) {
      var h = this._dueIndex,
        c = Math.min(null != o ? this._dueIndex + o : 1 / 0, this._dueEnd)
      if (!i && (r || h < c)) {
        var p = this._progress
        if (V(p))
          for (var d = 0; d < p.length; d++) this._doProgress(p[d], h, c, s, l)
        else this._doProgress(p, h, c, s, l)
      }
      this._dueIndex = c
      a = null != this._settedOutputEnd ? this._settedOutputEnd : c
      this._outputDueEnd = a
    } else
      this._dueIndex = this._outputDueEnd =
        null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd
    return this.unfinished()
  }),
    (Wf.prototype.dirty = function () {
      ;(this._dirty = !0), this._onDirty && this._onDirty(this.context)
    }),
    (Wf.prototype._doProgress = function (t, e, n, i, r) {
      Zf.reset(e, n, i, r),
        (this._callingProgress = t),
        this._callingProgress(
          { start: e, end: n, count: n - e, next: Zf.next },
          this.context
        )
    }),
    (Wf.prototype._doReset = function (t) {
      ;(this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
        (this._settedOutputEnd = null),
        !t &&
          this._reset &&
          ((e = this._reset(this.context)) &&
            e.progress &&
            ((n = e.forceFirstProgress), (e = e.progress)),
          V(e)) &&
          !e.length &&
          (e = null),
        (this._progress = e),
        (this._modBy = this._modDataCount = null)
      var e,
        n,
        t = this._downstream
      return t && t.dirty(), n
    }),
    (Wf.prototype.unfinished = function () {
      return this._progress && this._dueIndex < this._dueEnd
    }),
    (Wf.prototype.pipe = function (t) {
      ;(this._downstream === t && !this._dirty) ||
        (((this._downstream = t)._upstream = this), t.dirty())
    }),
    (Wf.prototype.dispose = function () {
      this._disposed ||
        (this._upstream && (this._upstream._downstream = null),
        this._downstream && (this._downstream._upstream = null),
        (this._dirty = !1),
        (this._disposed = !0))
    }),
    (Wf.prototype.getUpstream = function () {
      return this._upstream
    }),
    (Wf.prototype.getDownstream = function () {
      return this._downstream
    }),
    (Wf.prototype.setOutputEnd = function (t) {
      this._outputDueEnd = this._settedOutputEnd = t
    })
  var Hf = Wf
  function Wf (t) {
    ;(this._reset = (t = t || {}).reset),
      (this._plan = t.plan),
      (this._count = t.count),
      (this._onDirty = t.onDirty),
      (this._dirty = !0)
  }
  var Gf,
    Uf,
    Xf,
    Yf,
    qf,
    jf,
    Zf = (jf = {
      reset: function (t, e, n, i) {
        ;(Uf = t),
          (Gf = e),
          (Xf = n),
          (Yf = i),
          (qf = Math.ceil(Yf / Xf)),
          (jf.next = 1 < Xf && 0 < Yf ? $f : Kf)
      }
    })
  function Kf () {
    return Uf < Gf ? Uf++ : null
  }
  function $f () {
    var t = (Uf % qf) * Xf + Math.ceil(Uf / qf),
      t = Gf <= Uf ? null : t < Yf ? t : Uf
    return Uf++, t
  }
  function Qf (t, e) {
    e = e && e.type
    return 'ordinal' === e
      ? t
      : null ==
          (t = 'time' !== e || W(t) || null == t || '-' === t ? t : +So(t)) ||
        '' === t
      ? NaN
      : +t
  }
  var Jf = z({
    number: function (t) {
      return parseFloat(t)
    },
    time: function (t) {
      return +So(t)
    },
    trim: function (t) {
      return H(t) ? It(t) : t
    }
  })
  function tg (t) {
    return Jf.get(t)
  }
  var eg = {
      lt: function (t, e) {
        return t < e
      },
      lte: function (t, e) {
        return t <= e
      },
      gt: function (t, e) {
        return e < t
      },
      gte: function (t, e) {
        return e <= t
      }
    },
    ng =
      ((og.prototype.evaluate = function (t) {
        return W(t)
          ? this._opFn(t, this._rvalFloat)
          : this._opFn(Io(t), this._rvalFloat)
      }),
      og),
    ig =
      ((rg.prototype.evaluate = function (t, e) {
        var n = W(t) ? t : Io(t),
          i = W(e) ? e : Io(e),
          r = isNaN(n),
          o = isNaN(i)
        return (
          r && (n = this._incomparable),
          o && (i = this._incomparable),
          r &&
            o &&
            ((r = H(t)), (o = H(e)), r && (n = o ? t : 0), o) &&
            (i = r ? e : 0),
          n < i ? this._resultLT : i < n ? -this._resultLT : 0
        )
      }),
      rg)
  function rg (t, e) {
    t = 'desc' === t
    ;(this._resultLT = t ? 1 : -1),
      (this._incomparable =
        'min' === (e = null == e ? (t ? 'min' : 'max') : e) ? -1 / 0 : 1 / 0)
  }
  function og (t, e) {
    W(e) || f(''), (this._opFn = eg[t]), (this._rvalFloat = Io(e))
  }
  sg.prototype.evaluate = function (t) {
    var e,
      n = t === this._rval
    return (
      n ||
        (e = typeof t) === this._rvalTypeof ||
        ('number' != e && 'number' !== this._rvalTypeof) ||
        (n = Io(t) === this._rvalFloat),
      this._isEQ ? n : !n
    )
  }
  var ag = sg
  function sg (t, e) {
    ;(this._rval = e),
      (this._isEQ = t),
      (this._rvalTypeof = typeof e),
      (this._rvalFloat = Io(e))
  }
  ;(ug.prototype.getRawData = function () {
    throw new Error('not supported')
  }),
    (ug.prototype.getRawDataItem = function (t) {
      throw new Error('not supported')
    }),
    (ug.prototype.cloneRawData = function () {}),
    (ug.prototype.getDimensionInfo = function (t) {}),
    (ug.prototype.cloneAllDimensionInfo = function () {}),
    (ug.prototype.count = function () {}),
    (ug.prototype.retrieveValue = function (t, e) {}),
    (ug.prototype.retrieveValueFromItem = function (t, e) {}),
    (ug.prototype.convertValue = Qf)
  var lg = ug
  function ug () {}
  function hg (t) {
    return yg(t.sourceFormat) || f(''), t.data
  }
  function cg (t) {
    var e = t.sourceFormat,
      n = t.data
    if ((yg(e) || f(''), e === ld)) {
      for (var i = [], r = 0, o = n.length; r < o; r++) i.push(n[r].slice())
      return i
    }
    if (e === ud) {
      for (i = [], r = 0, o = n.length; r < o; r++) i.push(O({}, n[r]))
      return i
    }
  }
  function pg (t, e, n) {
    if (null != n)
      return W(n) || (!isNaN(n) && !Ft(e, n)) ? t[n] : Ft(e, n) ? e[n] : void 0
  }
  function dg (t) {
    return _(t)
  }
  var fg = z()
  function gg (t, e) {
    var n = Ro(t),
      t = n.length
    t || f('')
    for (var i = 0, r = t; i < r; i++)
      (e = (function (t, i) {
        i.length || f(''), L(t) || f('')
        var e = t.type,
          d = fg.get(e),
          e =
            (d || f(''),
            F(i, function (t) {
              var e = t,
                t = d,
                n = new lg(),
                i = e.data,
                r = (n.sourceFormat = e.sourceFormat),
                o = e.startIndex,
                a = (e.seriesLayoutBy !== dd && f(''), []),
                s = {}
              if ((h = e.dimensionsDefine))
                B(h, function (t, e) {
                  var n = t.name,
                    e = { index: e, name: n, displayName: t.displayName }
                  a.push(e), null != n && (Ft(s, n) && f(''), (s[n] = e))
                })
              else
                for (var l = 0; l < e.dimensionsDetectedCount; l++)
                  a.push({ index: l })
              var u = kf(r, dd),
                h =
                  (t.__isBuiltIn &&
                    ((n.getRawDataItem = function (t) {
                      return u(i, o, a, t)
                    }),
                    (n.getRawData = pt(hg, null, e))),
                  (n.cloneRawData = pt(cg, null, e)),
                  Pf(r, dd)),
                c = ((n.count = pt(h, null, i, o, a)), Rf(r)),
                p =
                  ((n.retrieveValue = function (t, e) {
                    t = u(i, o, a, t)
                    return p(t, e)
                  }),
                  (n.retrieveValueFromItem = function (t, e) {
                    var n
                    return null != t && (n = a[e]) ? c(t, e, n.name) : void 0
                  }))
              return (
                (n.getDimensionInfo = pt(pg, null, a, s)),
                (n.cloneAllDimensionInfo = pt(dg, null, a)),
                n
              )
            }))
        return F(
          Ro(
            d.transform({
              upstream: e[0],
              upstreamList: e,
              config: _(t.config)
            })
          ),
          function (t, e) {
            L(t) || f(''), t.data || f(''), yg(yf(t.data)) || f('')
            var n = i[0],
              e =
                n && 0 === e && !t.dimensions
                  ? ((e = n.startIndex) &&
                      (t.data = n.data.slice(0, e).concat(t.data)),
                    {
                      seriesLayoutBy: dd,
                      sourceHeader: e,
                      dimensions: n.metaRawOption.dimensions
                    })
                  : {
                      seriesLayoutBy: dd,
                      sourceHeader: 0,
                      dimensions: t.dimensions
                    }
            return ff(t.data, e, null)
          }
        )
      })(n[i], e)),
        i !== r - 1 && (e.length = Math.max(e.length, 1))
    return e
  }
  function yg (t) {
    return t === ld || t === ud
  }
  var mg,
    cc = 'undefined',
    vg = typeof Uint32Array == cc ? Array : Uint32Array,
    _g = typeof Uint16Array == cc ? Array : Uint16Array,
    xg = typeof Int32Array == cc ? Array : Int32Array,
    cp = typeof Float64Array == cc ? Array : Float64Array,
    wg = { float: cp, int: xg, ordinal: Array, number: Array, time: cp }
  function bg (t) {
    return 65535 < t ? vg : _g
  }
  function Sg () {
    return [1 / 0, -1 / 0]
  }
  function Mg (t, e, n, i, r) {
    n = wg[n || 'float']
    if (r) {
      var o = t[e],
        a = o && o.length
      if (a !== i) {
        for (var s = new n(i), l = 0; l < a; l++) s[l] = o[l]
        t[e] = s
      }
    } else t[e] = new n(i)
  }
  ;(l.prototype.initData = function (t, e, n) {
    ;(this._provider = t),
      (this._chunks = []),
      (this._indices = null),
      (this.getRawIndex = this._getRawIdxIdentity)
    var i = t.getSource(),
      r = (this.defaultDimValueGetter = mg[i.sourceFormat])
    ;(this._dimValueGetter = n || r),
      (this._rawExtent = []),
      _f(i),
      (this._dimensions = F(e, function (t) {
        return { type: t.type, property: t.property }
      })),
      this._initDataFromProvider(0, t.count())
  }),
    (l.prototype.getProvider = function () {
      return this._provider
    }),
    (l.prototype.getSource = function () {
      return this._provider.getSource()
    }),
    (l.prototype.ensureCalculationDimension = function (t, e) {
      var n = this._calcDimNameToIdx,
        i = this._dimensions,
        r = n.get(t)
      if (null != r) {
        if (i[r].type === e) return r
      } else r = i.length
      return (
        (i[r] = { type: e }),
        n.set(t, r),
        (this._chunks[r] = new wg[e || 'float'](this._rawCount)),
        (this._rawExtent[r] = Sg()),
        r
      )
    }),
    (l.prototype.collectOrdinalMeta = function (t, e) {
      var n = this._chunks[t],
        i = this._dimensions[t],
        r = this._rawExtent,
        o = i.ordinalOffset || 0,
        a = n.length
      0 === o && (r[t] = Sg())
      for (var s = r[t], l = o; l < a; l++) {
        var u = (n[l] = e.parseAndCollect(n[l]))
        isNaN(u) || ((s[0] = Math.min(u, s[0])), (s[1] = Math.max(u, s[1])))
      }
      ;(i.ordinalMeta = e), (i.ordinalOffset = a), (i.type = 'ordinal')
    }),
    (l.prototype.getOrdinalMeta = function (t) {
      return this._dimensions[t].ordinalMeta
    }),
    (l.prototype.getDimensionProperty = function (t) {
      t = this._dimensions[t]
      return t && t.property
    }),
    (l.prototype.appendData = function (t) {
      var e = this._provider,
        n = this.count(),
        t = (e.appendData(t), e.count())
      return (
        e.persistent || (t += n),
        n < t && this._initDataFromProvider(n, t, !0),
        [n, t]
      )
    }),
    (l.prototype.appendValues = function (t, e) {
      for (
        var n = this._chunks,
          i = this._dimensions,
          r = i.length,
          o = this._rawExtent,
          a = this.count(),
          s = a + Math.max(t.length, e || 0),
          l = 0;
        l < r;
        l++
      )
        Mg(n, l, (d = i[l]).type, s, !0)
      for (var u = [], h = a; h < s; h++)
        for (var c = h - a, p = 0; p < r; p++) {
          var d = i[p],
            f = mg.arrayRows.call(this, t[c] || u, d.property, c, p),
            g = ((n[p][h] = f), o[p])
          f < g[0] && (g[0] = f), f > g[1] && (g[1] = f)
        }
      return { start: a, end: (this._rawCount = this._count = s) }
    }),
    (l.prototype._initDataFromProvider = function (t, e, n) {
      for (
        var i = this._provider,
          r = this._chunks,
          o = this._dimensions,
          a = o.length,
          s = this._rawExtent,
          l = F(o, function (t) {
            return t.property
          }),
          u = 0;
        u < a;
        u++
      ) {
        var h = o[u]
        s[u] || (s[u] = Sg()), Mg(r, u, h.type, e, n)
      }
      if (i.fillStorage) i.fillStorage(t, e, r, s)
      else
        for (var c = [], p = t; p < e; p++)
          for (var c = i.getItem(p, c), d = 0; d < a; d++) {
            var f = r[d],
              g = this._dimValueGetter(c, l[d], p, d),
              f = ((f[p] = g), s[d])
            g < f[0] && (f[0] = g), g > f[1] && (f[1] = g)
          }
      !i.persistent && i.clean && i.clean(),
        (this._rawCount = this._count = e),
        (this._extent = [])
    }),
    (l.prototype.count = function () {
      return this._count
    }),
    (l.prototype.get = function (t, e) {
      return 0 <= e && e < this._count && (t = this._chunks[t])
        ? t[this.getRawIndex(e)]
        : NaN
    }),
    (l.prototype.getValues = function (t, e) {
      var n = [],
        i = []
      if (null == e) {
        ;(e = t), (t = [])
        for (var r = 0; r < this._dimensions.length; r++) i.push(r)
      } else i = t
      for (var r = 0, o = i.length; r < o; r++) n.push(this.get(i[r], e))
      return n
    }),
    (l.prototype.getByRawIndex = function (t, e) {
      return 0 <= e && e < this._rawCount && (t = this._chunks[t]) ? t[e] : NaN
    }),
    (l.prototype.getSum = function (t) {
      var e = 0
      if (this._chunks[t])
        for (var n = 0, i = this.count(); n < i; n++) {
          var r = this.get(t, n)
          isNaN(r) || (e += r)
        }
      return e
    }),
    (l.prototype.getMedian = function (t) {
      var e = [],
        t =
          (this.each([t], function (t) {
            isNaN(t) || e.push(t)
          }),
          e.sort(function (t, e) {
            return t - e
          })),
        n = this.count()
      return 0 === n
        ? 0
        : n % 2 == 1
        ? t[(n - 1) / 2]
        : (t[n / 2] + t[n / 2 - 1]) / 2
    }),
    (l.prototype.indexOfRawIndex = function (t) {
      if (!(t >= this._rawCount || t < 0)) {
        if (!this._indices) return t
        var e = this._indices,
          n = e[t]
        if (null != n && n < this._count && n === t) return t
        for (var i = 0, r = this._count - 1; i <= r; ) {
          var o = ((i + r) / 2) | 0
          if (e[o] < t) i = 1 + o
          else {
            if (!(e[o] > t)) return o
            r = o - 1
          }
        }
      }
      return -1
    }),
    (l.prototype.indicesOfNearest = function (t, e, n) {
      var i = this._chunks[t],
        r = []
      if (i) {
        null == n && (n = 1 / 0)
        for (
          var o = 1 / 0, a = -1, s = 0, l = 0, u = this.count();
          l < u;
          l++
        ) {
          var h = e - i[this.getRawIndex(l)],
            c = Math.abs(h)
          c <= n &&
            ((c < o || (c === o && 0 <= h && a < 0)) &&
              ((o = c), (a = h), (s = 0)),
            h === a) &&
            (r[s++] = l)
        }
        r.length = s
      }
      return r
    }),
    (l.prototype.getIndices = function () {
      var t = this._indices
      if (t) {
        var e = t.constructor,
          n = this._count
        if (e === Array) for (var i = new e(n), r = 0; r < n; r++) i[r] = t[r]
        else i = new e(t.buffer, 0, n)
      } else
        for (
          i = new (e = bg(this._rawCount))(this.count()), r = 0;
          r < i.length;
          r++
        )
          i[r] = r
      return i
    }),
    (l.prototype.filter = function (t, e) {
      if (!this._count) return this
      for (
        var n = this.clone(),
          i = n.count(),
          r = new (bg(n._rawCount))(i),
          o = [],
          a = t.length,
          s = 0,
          l = t[0],
          u = n._chunks,
          h = 0;
        h < i;
        h++
      ) {
        var c = void 0,
          p = n.getRawIndex(h)
        if (0 === a) c = e(h)
        else if (1 === a) c = e(u[l][p], h)
        else {
          for (var d = 0; d < a; d++) o[d] = u[t[d]][p]
          ;(o[d] = h), (c = e.apply(null, o))
        }
        c && (r[s++] = p)
      }
      return (
        s < i && (n._indices = r),
        (n._count = s),
        (n._extent = []),
        n._updateGetRawIdx(),
        n
      )
    }),
    (l.prototype.selectRange = function (t) {
      var e = this.clone(),
        n = e._count
      if (!n) return this
      var i = R(t),
        r = i.length
      if (!r) return this
      var o = e.count(),
        a = new (bg(e._rawCount))(o),
        s = 0,
        l = i[0],
        u = t[l][0],
        h = t[l][1],
        c = e._chunks,
        l = !1
      if (!e._indices) {
        var p = 0
        if (1 === r) {
          for (var d = c[i[0]], f = 0; f < n; f++)
            (((v = d[f]) >= u && v <= h) || isNaN(v)) && (a[s++] = p), p++
          l = !0
        } else if (2 === r) {
          for (
            var d = c[i[0]], g = c[i[1]], y = t[i[1]][0], m = t[i[1]][1], f = 0;
            f < n;
            f++
          ) {
            var v = d[f],
              _ = g[f]
            ;((u <= v && v <= h) || isNaN(v)) &&
              ((y <= _ && _ <= m) || isNaN(_)) &&
              (a[s++] = p),
              p++
          }
          l = !0
        }
      }
      if (!l)
        if (1 === r)
          for (f = 0; f < o; f++) {
            var x = e.getRawIndex(f)
            ;(((v = c[i[0]][x]) >= u && v <= h) || isNaN(v)) && (a[s++] = x)
          }
        else
          for (f = 0; f < o; f++) {
            for (var w = !0, b = ((x = e.getRawIndex(f)), 0); b < r; b++) {
              var S = i[b]
              ;((v = c[S][x]) < t[S][0] || v > t[S][1]) && (w = !1)
            }
            w && (a[s++] = e.getRawIndex(f))
          }
      return (
        s < o && (e._indices = a),
        (e._count = s),
        (e._extent = []),
        e._updateGetRawIdx(),
        e
      )
    }),
    (l.prototype.map = function (t, e) {
      var n = this.clone(t)
      return this._updateDims(n, t, e), n
    }),
    (l.prototype.modify = function (t, e) {
      this._updateDims(this, t, e)
    }),
    (l.prototype._updateDims = function (t, e, n) {
      for (
        var i = t._chunks,
          r = [],
          o = e.length,
          a = t.count(),
          s = [],
          l = t._rawExtent,
          u = 0;
        u < e.length;
        u++
      )
        l[e[u]] = Sg()
      for (var h = 0; h < a; h++) {
        for (var c = t.getRawIndex(h), p = 0; p < o; p++) s[p] = i[e[p]][c]
        s[o] = h
        var d = n && n.apply(null, s)
        if (null != d)
          for (
            'object' != typeof d && ((r[0] = d), (d = r)), u = 0;
            u < d.length;
            u++
          ) {
            var f = e[u],
              g = d[u],
              y = l[f],
              f = i[f]
            f && (f[c] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g)
          }
      }
    }),
    (l.prototype.lttbDownSample = function (t, e) {
      var n,
        i = this.clone([t], !0),
        r = i._chunks[t],
        o = this.count(),
        a = 0,
        s = Math.floor(1 / e),
        l = this.getRawIndex(0),
        u = new (bg(this._rawCount))(Math.min(2 * (Math.ceil(o / s) + 2), o))
      u[a++] = l
      for (var h = 1; h < o - 1; h += s) {
        for (
          var c = Math.min(h + s, o - 1),
            p = Math.min(h + 2 * s, o),
            d = (p + c) / 2,
            f = 0,
            g = c;
          g < p;
          g++
        ) {
          var y = r[(M = this.getRawIndex(g))]
          isNaN(y) || (f += y)
        }
        f /= p - c
        for (
          var c = h,
            m = Math.min(h + s, o),
            v = h - 1,
            _ = r[l],
            x = -1,
            w = c,
            b = -1,
            S = 0,
            g = c;
          g < m;
          g++
        ) {
          var M,
            y = r[(M = this.getRawIndex(g))]
          isNaN(y)
            ? (S++, b < 0 && (b = M))
            : (n = Math.abs((v - d) * (y - _) - (v - g) * (f - _))) > x &&
              ((x = n), (w = M))
        }
        0 < S && S < m - c && ((u[a++] = Math.min(b, w)), (w = Math.max(b, w))),
          (l = u[a++] = w)
      }
      return (
        (u[a++] = this.getRawIndex(o - 1)),
        (i._count = a),
        (i._indices = u),
        (i.getRawIndex = this._getRawIdx),
        i
      )
    }),
    (l.prototype.downSample = function (t, e, n, i) {
      for (
        var r = this.clone([t], !0),
          o = r._chunks,
          a = [],
          s = Math.floor(1 / e),
          l = o[t],
          u = this.count(),
          h = (r._rawExtent[t] = Sg()),
          c = new (bg(this._rawCount))(Math.ceil(u / s)),
          p = 0,
          d = 0;
        d < u;
        d += s
      ) {
        u - d < s && (a.length = s = u - d)
        for (var f = 0; f < s; f++) {
          var g = this.getRawIndex(d + f)
          a[f] = l[g]
        }
        var y = n(a),
          m = this.getRawIndex(Math.min(d + i(a, y) || 0, u - 1))
        ;(l[m] = y) < h[0] && (h[0] = y), y > h[1] && (h[1] = y), (c[p++] = m)
      }
      return (r._count = p), (r._indices = c), r._updateGetRawIdx(), r
    }),
    (l.prototype.each = function (t, e) {
      if (this._count)
        for (
          var n = t.length, i = this._chunks, r = 0, o = this.count();
          r < o;
          r++
        ) {
          var a = this.getRawIndex(r)
          switch (n) {
            case 0:
              e(r)
              break
            case 1:
              e(i[t[0]][a], r)
              break
            case 2:
              e(i[t[0]][a], i[t[1]][a], r)
              break
            default:
              for (var s = 0, l = []; s < n; s++) l[s] = i[t[s]][a]
              ;(l[s] = r), e.apply(null, l)
          }
        }
    }),
    (l.prototype.getDataExtent = function (t) {
      var e = this._chunks[t],
        n = Sg()
      if (!e) return n
      var i,
        r = this.count()
      if (!this._indices) return this._rawExtent[t].slice()
      if ((i = this._extent[t])) return i.slice()
      for (var o = (i = n)[0], a = i[1], s = 0; s < r; s++) {
        var l = e[this.getRawIndex(s)]
        l < o && (o = l), a < l && (a = l)
      }
      return (this._extent[t] = i = [o, a])
    }),
    (l.prototype.getRawDataItem = function (t) {
      var e = this.getRawIndex(t)
      if (this._provider.persistent) return this._provider.getItem(e)
      for (var n = [], i = this._chunks, r = 0; r < i.length; r++)
        n.push(i[r][e])
      return n
    }),
    (l.prototype.clone = function (t, e) {
      var n,
        i,
        r = new l(),
        o = this._chunks,
        a =
          t &&
          ht(
            t,
            function (t, e) {
              return (t[e] = !0), t
            },
            {}
          )
      if (a)
        for (var s = 0; s < o.length; s++)
          r._chunks[s] = a[s]
            ? ((n = o[s]),
              (i = void 0),
              (i = n.constructor) === Array ? n.slice() : new i(n))
            : o[s]
      else r._chunks = o
      return (
        this._copyCommonProps(r),
        e || (r._indices = this._cloneIndices()),
        r._updateGetRawIdx(),
        r
      )
    }),
    (l.prototype._copyCommonProps = function (t) {
      ;(t._count = this._count),
        (t._rawCount = this._rawCount),
        (t._provider = this._provider),
        (t._dimensions = this._dimensions),
        (t._extent = _(this._extent)),
        (t._rawExtent = _(this._rawExtent))
    }),
    (l.prototype._cloneIndices = function () {
      if (this._indices) {
        var t = this._indices.constructor,
          e = void 0
        if (t === Array)
          for (var n = this._indices.length, e = new t(n), i = 0; i < n; i++)
            e[i] = this._indices[i]
        else e = new t(this._indices)
        return e
      }
      return null
    }),
    (l.prototype._getRawIdxIdentity = function (t) {
      return t
    }),
    (l.prototype._getRawIdx = function (t) {
      return t < this._count && 0 <= t ? this._indices[t] : -1
    }),
    (l.prototype._updateGetRawIdx = function () {
      this.getRawIndex = this._indices
        ? this._getRawIdx
        : this._getRawIdxIdentity
    }),
    (l.internalField = void (mg = {
      arrayRows: Cg,
      objectRows: function (t, e, n, i) {
        return Qf(t[e], this._dimensions[i])
      },
      keyedColumns: Cg,
      original: function (t, e, n, i) {
        t = t && (null == t.value ? t : t.value)
        return Qf(t instanceof Array ? t[i] : t, this._dimensions[i])
      },
      typedArray: function (t, e, n, i) {
        return t[i]
      }
    }))
  var Tg = l
  function l () {
    ;(this._chunks = []),
      (this._rawExtent = []),
      (this._extent = []),
      (this._count = 0),
      (this._rawCount = 0),
      (this._calcDimNameToIdx = z())
  }
  function Cg (t, e, n, i) {
    return Qf(t[i], this._dimensions[i])
  }
  ;(kg.prototype.dirty = function () {
    this._setLocalSource([], []), (this._storeList = []), (this._dirty = !0)
  }),
    (kg.prototype._setLocalSource = function (t, e) {
      ;(this._sourceList = t),
        (this._upstreamSignList = e),
        this._versionSignBase++,
        9e10 < this._versionSignBase && (this._versionSignBase = 0)
    }),
    (kg.prototype._getVersionSign = function () {
      return this._sourceHost.uid + '_' + this._versionSignBase
    }),
    (kg.prototype.prepareSource = function () {
      this._isDirty() && (this._createSource(), (this._dirty = !1))
    }),
    (kg.prototype._createSource = function () {
      this._setLocalSource([], [])
      var t,
        e,
        n,
        i,
        r,
        o,
        a,
        s = this._sourceHost,
        l = this._getUpstreamSourceManagers(),
        u = !!l.length
      Ag(s)
        ? ((i = s),
          (r = t = o = void 0),
          (e = u
            ? ((e = l[0]).prepareSource(),
              (o = (r = e.getSource()).data),
              (t = r.sourceFormat),
              [e._getVersionSign()])
            : ((t = yt((o = i.get('data', !0))) ? cd : sd), [])),
          (i = this._getSourceMetaRawOption() || {}),
          (r = (r && r.metaRawOption) || {}),
          (a = N(i.seriesLayoutBy, r.seriesLayoutBy) || null),
          (n = N(i.sourceHeader, r.sourceHeader)),
          (i = N(i.dimensions, r.dimensions)),
          (r =
            a !== r.seriesLayoutBy || !!n != !!r.sourceHeader || i
              ? [
                  ff(
                    o,
                    { seriesLayoutBy: a, sourceHeader: n, dimensions: i },
                    t
                  )
                ]
              : []))
        : ((o = s),
          (e = u
            ? ((r = (a = this._applyTransform(l)).sourceList),
              a.upstreamSignList)
            : ((r = [
                ff(o.get('source', !0), this._getSourceMetaRawOption(), null)
              ]),
              []))),
        this._setLocalSource(r, e)
    }),
    (kg.prototype._applyTransform = function (t) {
      var e,
        n = this._sourceHost,
        i = n.get('transform', !0),
        r = n.get('fromTransformResult', !0),
        o = (null != r && 1 !== t.length && Pg(''), []),
        a = []
      return (
        B(t, function (t) {
          t.prepareSource()
          var e = t.getSource(r || 0)
          null == r || e || Pg(''), o.push(e), a.push(t._getVersionSign())
        }),
        i
          ? (e = gg(i, o, n.componentIndex))
          : null != r &&
            (e = [
              new pf({
                data: (t = o[0]).data,
                sourceFormat: t.sourceFormat,
                seriesLayoutBy: t.seriesLayoutBy,
                dimensionsDefine: _(t.dimensionsDefine),
                startIndex: t.startIndex,
                dimensionsDetectedCount: t.dimensionsDetectedCount
              })
            ]),
        { sourceList: e, upstreamSignList: a }
      )
    }),
    (kg.prototype._isDirty = function () {
      if (this._dirty) return !0
      for (
        var t = this._getUpstreamSourceManagers(), e = 0;
        e < t.length;
        e++
      ) {
        var n = t[e]
        if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign())
          return !0
      }
    }),
    (kg.prototype.getSource = function (t) {
      var e = this._sourceList[(t = t || 0)]
      return (
        e || ((e = this._getUpstreamSourceManagers())[0] && e[0].getSource(t))
      )
    }),
    (kg.prototype.getSharedDataStore = function (t) {
      var e = t.makeStoreSchema()
      return this._innerGetDataStore(e.dimensions, t.source, e.hash)
    }),
    (kg.prototype._innerGetDataStore = function (t, e, n) {
      var i,
        r = this._storeList,
        o = r[0],
        r = (o = o || (r[0] = {}))[n]
      return (
        r ||
          ((i = this._getUpstreamSourceManagers()[0]),
          Ag(this._sourceHost) && i
            ? (r = i._innerGetDataStore(t, e, n))
            : (r = new Tg()).initData(new Sf(e, t.length), t),
          (o[n] = r)),
        r
      )
    }),
    (kg.prototype._getUpstreamSourceManagers = function () {
      var t,
        e = this._sourceHost
      return Ag(e)
        ? (t = _d(e))
          ? [t.getSourceManager()]
          : []
        : F(
            (t = e).get('transform', !0) || t.get('fromTransformResult', !0)
              ? $o(
                  t.ecModel,
                  'dataset',
                  {
                    index: t.get('fromDatasetIndex', !0),
                    id: t.get('fromDatasetId', !0)
                  },
                  Ko
                ).models
              : [],
            function (t) {
              return t.getSourceManager()
            }
          )
    }),
    (kg.prototype._getSourceMetaRawOption = function () {
      var t,
        e,
        n,
        i = this._sourceHost
      return (
        Ag(i)
          ? ((t = i.get('seriesLayoutBy', !0)),
            (e = i.get('sourceHeader', !0)),
            (n = i.get('dimensions', !0)))
          : this._getUpstreamSourceManagers().length ||
            ((t = (i = i).get('seriesLayoutBy', !0)),
            (e = i.get('sourceHeader', !0)),
            (n = i.get('dimensions', !0))),
        { seriesLayoutBy: t, sourceHeader: e, dimensions: n }
      )
    })
  var Ig = kg
  function kg (t) {
    ;(this._sourceList = []),
      (this._storeList = []),
      (this._upstreamSignList = []),
      (this._versionSignBase = 0),
      (this._dirty = !0),
      (this._sourceHost = t)
  }
  function Dg (t) {
    t.option.transform && Dt(t.option.transform)
  }
  function Ag (t) {
    return 'series' === t.mainType
  }
  function Pg (t) {
    throw new Error(t)
  }
  var Lg = 'line-height:1'
  function Og (t, e) {
    var n = t.color || '#6e7079',
      i = t.fontSize || 12,
      r = t.fontWeight || '400',
      o = t.color || '#464646',
      a = t.fontSize || 14,
      t = t.fontWeight || '900'
    return 'html' === e
      ? {
          nameStyle:
            'font-size:' +
            xe(i + '') +
            'px;color:' +
            xe(n) +
            ';font-weight:' +
            xe(r + ''),
          valueStyle:
            'font-size:' +
            xe(a + '') +
            'px;color:' +
            xe(o) +
            ';font-weight:' +
            xe(t + '')
        }
      : {
          nameStyle: { fontSize: i, fill: n, fontWeight: r },
          valueStyle: { fontSize: a, fill: o, fontWeight: t }
        }
  }
  var Rg = [0, 10, 20, 30],
    Ng = ['', '\n', '\n\n', '\n\n\n']
  function Bg (t, e) {
    return (e.type = t), e
  }
  function zg (t) {
    return 'section' === t.type
  }
  function Eg (t) {
    return zg(t) ? Fg : Vg
  }
  function Fg (i, r, t, o) {
    var n,
      e = r.noHeader,
      a =
        ((l = (function n (t) {
          var i, e, r
          return zg(t)
            ? ((i = 0),
              (e = t.blocks.length),
              (r = 1 < e || (0 < e && !t.noHeader)),
              B(t.blocks, function (t) {
                var e = n(t)
                i <= e && (i = e + +(r && (!e || (zg(t) && !t.noHeader))))
              }),
              i)
            : 0
        })(r)),
        { html: Rg[l], richText: Ng[l] }),
      s = [],
      l = r.blocks || [],
      u = (Ct(!l || V(l)), (l = l || []), i.orderMode),
      h =
        (r.sortBlocks &&
          u &&
          ((l = l.slice()),
          Ft((h = { valueAsc: 'asc', valueDesc: 'desc' }), u)
            ? ((n = new ig(h[u], null)),
              l.sort(function (t, e) {
                return n.evaluate(t.sortParam, e.sortParam)
              }))
            : 'seriesDesc' === u && l.reverse()),
        B(l, function (t, e) {
          var n = r.valueFormatter,
            n = Eg(t)(
              n ? O(O({}, i), { valueFormatter: n }) : i,
              t,
              0 < e ? a.html : 0,
              o
            )
          null != n && s.push(n)
        }),
        'richText' === i.renderMode
          ? s.join(a.richText)
          : Wg(s.join(''), e ? t : a.html))
    return e
      ? h
      : ((u = Bp(r.header, 'ordinal', i.useUTC)),
        (l = Og(o, i.renderMode).nameStyle),
        'richText' === i.renderMode
          ? Gg(i, u, l) + a.richText + h
          : Wg('<div style="' + l + ';' + Lg + ';">' + xe(u) + '</div>' + h, t))
  }
  function Vg (t, e, n, i) {
    var r,
      o,
      a,
      s,
      l = t.renderMode,
      u = e.noName,
      h = e.noValue,
      c = !e.markerType,
      p = e.name,
      d = t.useUTC,
      f =
        e.valueFormatter ||
        t.valueFormatter ||
        function (t) {
          return F((t = V(t) ? t : [t]), function (t, e) {
            return Bp(t, V(o) ? o[e] : o, d)
          })
        }
    if (!u || !h)
      return (
        (r = c
          ? ''
          : t.markupStyleCreator.makeTooltipMarker(
              e.markerType,
              e.markerColor || '#333',
              l
            )),
        (p = u ? '' : Bp(p, 'ordinal', d)),
        (o = e.valueType),
        (f = h ? [] : f(e.value)),
        (e = !c || !u),
        (a = !c && u),
        (i = Og(i, l)),
        (s = i.nameStyle),
        (i = i.valueStyle),
        'richText' === l
          ? (c ? '' : r) +
            (u ? '' : Gg(t, p, s)) +
            (h
              ? ''
              : (function (t, e, n, i, r) {
                  ;(r = [r]), (i = i ? 10 : 20)
                  return (
                    n && r.push({ padding: [0, 0, 0, i], align: 'right' }),
                    t.markupStyleCreator.wrapRichTextStyle(
                      V(e) ? e.join('  ') : e,
                      r
                    )
                  )
                })(t, f, e, a, i))
          : Wg(
              (c ? '' : r) +
                (u
                  ? ''
                  : '<span style="' +
                    s +
                    ';' +
                    (!c ? 'margin-left:2px' : '') +
                    '">' +
                    xe(p) +
                    '</span>') +
                (h
                  ? ''
                  : (function (t, e, n, i) {
                      e = e
                        ? 'float:right;margin-left:' + (n ? '10px' : '20px')
                        : ''
                      return (
                        (t = V(t) ? t : [t]),
                        '<span style="' +
                          e +
                          ';' +
                          i +
                          '">' +
                          F(t, xe).join('&nbsp;&nbsp;') +
                          '</span>'
                      )
                    })(f, e, a, i)),
              n
            )
      )
  }
  function Hg (t, e, n, i, r, o) {
    if (t)
      return Eg(t)(
        {
          useUTC: r,
          renderMode: n,
          orderMode: i,
          markupStyleCreator: e,
          valueFormatter: t.valueFormatter
        },
        t,
        0,
        o
      )
  }
  function Wg (t, e) {
    return (
      '<div style="margin: ' +
      e +
      'px 0 0;' +
      Lg +
      ';">' +
      t +
      '<div style="clear:both"></div></div>'
    )
  }
  function Gg (t, e, n) {
    return t.markupStyleCreator.wrapRichTextStyle(e, n)
  }
  function Ug (t, e) {
    t = t.get('padding')
    return null != t ? t : 'richText' === e ? [8, 10] : 10
  }
  ;(Yg.prototype._generateStyleName = function () {
    return '__EC_aUTo_' + this._nextStyleNameId++
  }),
    (Yg.prototype.makeTooltipMarker = function (t, e, n) {
      var i = 'richText' === n ? this._generateStyleName() : null,
        e = Vp({ color: e, type: t, renderMode: n, markerId: i })
      return H(e) ? e : ((this.richTextStyles[i] = e.style), e.content)
    }),
    (Yg.prototype.wrapRichTextStyle = function (t, e) {
      var n = {},
        e =
          (V(e)
            ? B(e, function (t) {
                return O(n, t)
              })
            : O(n, e),
          this._generateStyleName())
      return (this.richTextStyles[e] = n), '{' + e + '|' + t + '}'
    })
  var Xg = Yg
  function Yg () {
    ;(this.richTextStyles = {}), (this._nextStyleNameId = Do())
  }
  function qg (t) {
    var e,
      n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p = t.series,
      d = t.dataIndex,
      t = t.multipleSeries,
      f = p.getData(),
      g = f.mapDimensionsAll('defaultedTooltip'),
      y = g.length,
      m = p.getRawValue(d),
      v = V(m),
      _ =
        ((_ = d),
        Hp((w = p).getData().getItemVisual(_, 'style')[w.visualDrawType]))
    function x (t, e) {
      e = s.getDimensionInfo(e)
      e &&
        !1 !== e.otherDims.tooltip &&
        (l
          ? c.push(
              Bg('nameValue', {
                markerType: 'subItem',
                markerColor: a,
                name: e.displayName,
                value: t,
                valueType: e.type
              })
            )
          : (u.push(t), h.push(e.type)))
    }
    1 < y || (v && !y)
      ? ((w = m),
        (r = d),
        (o = g),
        (a = _),
        (s = p.getData()),
        (l = ht(
          w,
          function (t, e, n) {
            n = s.getDimensionInfo(n)
            return t || (n && !1 !== n.tooltip && null != n.displayName)
          },
          !1
        )),
        (u = []),
        (h = []),
        (c = []),
        o.length
          ? B(o, function (t) {
              x(Bf(s, r, t), t)
            })
          : B(w, x),
        (e = (o = { inlineValues: u, inlineValueTypes: h, blocks: c })
          .inlineValueTypes),
        (n = o.blocks),
        (i = (o = o.inlineValues)[0]))
      : y
      ? ((w = f.getDimensionInfo(g[0])), (i = o = Bf(f, d, g[0])), (e = w.type))
      : (i = o = v ? m[0] : m)
    var y = Wo(p),
      g = (y && p.name) || '',
      w = f.getName(d),
      v = t ? g : w
    return Bg('section', {
      header: g,
      noHeader: t || !y,
      sortParam: i,
      blocks: [
        Bg('nameValue', {
          markerType: 'item',
          markerColor: _,
          name: v,
          noName: !It(v),
          value: o,
          valueType: e
        })
      ].concat(n || [])
    })
  }
  var jg = Yo()
  function Zg (t, e) {
    return t.getName(e) || t.getId(e)
  }
  u(h, (Kg = g)),
    (h.prototype.init = function (t, e, n) {
      ;(this.seriesIndex = this.componentIndex),
        (this.dataTask = Vf({ count: Jg, reset: ty })),
        (this.dataTask.context = { model: this }),
        this.mergeDefaultAndTheme(t, n),
        (jg(this).sourceManager = new Ig(this)).prepareSource()
      t = this.getInitialData(t, n)
      ny(t, this),
        (this.dataTask.context.data = t),
        (jg(this).dataBeforeProcessed = t),
        Qg(this),
        this._initSelectedMapFromData(t)
    }),
    (h.prototype.mergeDefaultAndTheme = function (t, e) {
      var n = Zp(this),
        i = n ? $p(t) : {},
        r = this.subType
      g.hasClass(r),
        d(t, e.getTheme().get(this.subType)),
        d(t, this.getDefaultOption()),
        No(t, 'label', ['show']),
        this.fillDataTextStyle(t.data),
        n && Kp(t, i, n)
    }),
    (h.prototype.mergeOption = function (t, e) {
      ;(t = d(this.option, t, !0)), this.fillDataTextStyle(t.data)
      var n = Zp(this),
        n = (n && Kp(this.option, t, n), jg(this).sourceManager),
        n = (n.dirty(), n.prepareSource(), this.getInitialData(t, e))
      ny(n, this),
        this.dataTask.dirty(),
        (this.dataTask.context.data = n),
        (jg(this).dataBeforeProcessed = n),
        Qg(this),
        this._initSelectedMapFromData(n)
    }),
    (h.prototype.fillDataTextStyle = function (t) {
      if (t && !yt(t))
        for (var e = ['show'], n = 0; n < t.length; n++)
          t[n] && t[n].label && No(t[n], 'label', e)
    }),
    (h.prototype.getInitialData = function (t, e) {}),
    (h.prototype.appendData = function (t) {
      this.getRawData().appendData(t.data)
    }),
    (h.prototype.getData = function (t) {
      var e = ry(this)
      return e
        ? ((e = e.context.data), null == t ? e : e.getLinkedData(t))
        : jg(this).data
    }),
    (h.prototype.getAllData = function () {
      var t = this.getData()
      return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{ data: t }]
    }),
    (h.prototype.setData = function (t) {
      var e,
        n = ry(this)
      n &&
        (((e = n.context).outputData = t), n !== this.dataTask) &&
        (e.data = t),
        (jg(this).data = t)
    }),
    (h.prototype.getEncode = function () {
      var t = this.get('encode', !0)
      if (t) return z(t)
    }),
    (h.prototype.getSourceManager = function () {
      return jg(this).sourceManager
    }),
    (h.prototype.getSource = function () {
      return this.getSourceManager().getSource()
    }),
    (h.prototype.getRawData = function () {
      return jg(this).dataBeforeProcessed
    }),
    (h.prototype.getColorBy = function () {
      return this.get('colorBy') || 'series'
    }),
    (h.prototype.isColorBySeries = function () {
      return 'series' === this.getColorBy()
    }),
    (h.prototype.getBaseAxis = function () {
      var t = this.coordinateSystem
      return t && t.getBaseAxis && t.getBaseAxis()
    }),
    (h.prototype.formatTooltip = function (t, e, n) {
      return qg({ series: this, dataIndex: t, multipleSeries: e })
    }),
    (h.prototype.isAnimationEnabled = function () {
      var t = this.ecModel
      return (
        !!(!b.node || (t && t.ssr)) &&
        !!(t =
          (t = this.getShallow('animation')) &&
          this.getData().count() > this.getShallow('animationThreshold')
            ? !1
            : t)
      )
    }),
    (h.prototype.restoreData = function () {
      this.dataTask.dirty()
    }),
    (h.prototype.getColorFromPalette = function (t, e, n) {
      var i = this.ecModel
      return (
        Md.prototype.getColorFromPalette.call(this, t, e, n) ||
        i.getColorFromPalette(t, e, n)
      )
    }),
    (h.prototype.coordDimToDataDim = function (t) {
      return this.getRawData().mapDimensionsAll(t)
    }),
    (h.prototype.getProgressive = function () {
      return this.get('progressive')
    }),
    (h.prototype.getProgressiveThreshold = function () {
      return this.get('progressiveThreshold')
    }),
    (h.prototype.select = function (t, e) {
      this._innerSelect(this.getData(e), t)
    }),
    (h.prototype.unselect = function (t, e) {
      var n = this.option.selectedMap
      if (n) {
        var i = this.option.selectedMode,
          r = this.getData(e)
        if ('series' === i || 'all' === n)
          (this.option.selectedMap = {}), (this._selectedDataIndicesMap = {})
        else
          for (var o = 0; o < t.length; o++) {
            var a = Zg(r, t[o])
            ;(n[a] = !1), (this._selectedDataIndicesMap[a] = -1)
          }
      }
    }),
    (h.prototype.toggleSelect = function (t, e) {
      for (var n = [], i = 0; i < t.length; i++)
        (n[0] = t[i]),
          this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e)
    }),
    (h.prototype.getSelectedDataIndices = function () {
      if ('all' === this.option.selectedMap)
        return [].slice.call(this.getData().getIndices())
      for (
        var t = this._selectedDataIndicesMap, e = R(t), n = [], i = 0;
        i < e.length;
        i++
      ) {
        var r = t[e[i]]
        0 <= r && n.push(r)
      }
      return n
    }),
    (h.prototype.isSelected = function (t, e) {
      var n = this.option.selectedMap
      return (
        !!n &&
        ((e = this.getData(e)), 'all' === n || n[Zg(e, t)]) &&
        !e.getItemModel(t).get(['select', 'disabled'])
      )
    }),
    (h.prototype.isUniversalTransitionEnabled = function () {
      var t
      return (
        !!this.__universalTransitionEnabled ||
        (!!(t = this.option.universalTransition) &&
          (!0 === t || (t && t.enabled)))
      )
    }),
    (h.prototype._innerSelect = function (t, e) {
      var n,
        i = this.option,
        r = i.selectedMode,
        o = e.length
      if (r && o)
        if ('series' === r) i.selectedMap = 'all'
        else if ('multiple' === r) {
          L(i.selectedMap) || (i.selectedMap = {})
          for (var a = i.selectedMap, s = 0; s < o; s++) {
            var l = e[s]
            ;(a[(n = Zg(t, l))] = !0),
              (this._selectedDataIndicesMap[n] = t.getRawIndex(l))
          }
        } else
          ('single' !== r && !0 !== r) ||
            ((n = Zg(t, (r = e[o - 1]))),
            (i.selectedMap = (((i = {})[n] = !0), i)),
            (this._selectedDataIndicesMap =
              (((i = {})[n] = t.getRawIndex(r)), i)))
    }),
    (h.prototype._initSelectedMapFromData = function (n) {
      var i
      this.option.selectedMap ||
        ((i = []),
        n.hasItemOption &&
          n.each(function (t) {
            var e = n.getRawDataItem(t)
            e && e.selected && i.push(t)
          }),
        0 < i.length && this._innerSelect(n, i))
    }),
    (h.registerClass = function (t) {
      return g.registerClass(t)
    }),
    (h.protoInitialize =
      (((Wc = h.prototype).type = 'series.__base__'),
      (Wc.seriesIndex = 0),
      (Wc.ignoreStyleOnData = !1),
      (Wc.hasSymbolVisual = !1),
      (Wc.defaultSymbol = 'circle'),
      (Wc.visualStyleAccessPath = 'itemStyle'),
      void (Wc.visualDrawType = 'fill')))
  var Kg,
    $g = h
  function h () {
    var t = (null !== Kg && Kg.apply(this, arguments)) || this
    return (t._selectedDataIndicesMap = {}), t
  }
  function Qg (t) {
    var e,
      n,
      i = t.name
    Wo(t) ||
      (t.name =
        ((t = (e = (t = t).getRawData()).mapDimensionsAll('seriesName')),
        (n = []),
        B(t, function (t) {
          t = e.getDimensionInfo(t)
          t.displayName && n.push(t.displayName)
        }),
        n.join(' ') || i))
  }
  function Jg (t) {
    return t.model.getRawData().count()
  }
  function ty (t) {
    t = t.model
    return t.setData(t.getRawData().cloneShallow()), ey
  }
  function ey (t, e) {
    e.outputData &&
      t.end > e.outputData.count() &&
      e.model.getRawData().cloneShallow(e.outputData)
  }
  function ny (e, n) {
    B(Bt(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function (t) {
      e.wrapMethod(t, dt(iy, n))
    })
  }
  function iy (t, e) {
    t = ry(t)
    return t && t.setOutputEnd((e || this).count()), e
  }
  function ry (t) {
    var e,
      n = (t.ecModel || {}).scheduler,
      n = n && n.getPipeline(t.uid)
    if (n) return (n = n.currentTask) && (e = n.agentStubMap) ? e.get(t.uid) : n
  }
  lt($g, Yc), lt($g, Md), ra($g, g)
  ;(ay.prototype.init = function (t, e) {}),
    (ay.prototype.render = function (t, e, n, i) {}),
    (ay.prototype.dispose = function (t, e) {}),
    (ay.prototype.updateView = function (t, e, n, i) {}),
    (ay.prototype.updateLayout = function (t, e, n, i) {}),
    (ay.prototype.updateVisual = function (t, e, n, i) {}),
    (ay.prototype.toggleBlurSeries = function (t, e, n) {}),
    (ay.prototype.eachRendered = function (t) {
      var e = this.group
      e && e.traverse(t)
    })
  var oy = ay
  function ay () {
    ;(this.group = new no()), (this.uid = Qc('viewComponent'))
  }
  ia(oy), la(oy)
  var sy,
    ly = Yo(),
    uy =
      ((sy = Yo()),
      function (t) {
        var e = sy(t),
          t = t.pipelineContext,
          n = !!e.large,
          i = !!e.progressiveRender,
          r = (e.large = !(!t || !t.large)),
          e = (e.progressiveRender = !(!t || !t.progressiveRender))
        return !(n == r && i == e) && 'reset'
      }),
    hy =
      ((cy.prototype.init = function (t, e) {}),
      (cy.prototype.render = function (t, e, n, i) {}),
      (cy.prototype.highlight = function (t, e, n, i) {
        t = t.getData(i && i.dataType)
        t && dy(t, i, 'emphasis')
      }),
      (cy.prototype.downplay = function (t, e, n, i) {
        t = t.getData(i && i.dataType)
        t && dy(t, i, 'normal')
      }),
      (cy.prototype.remove = function (t, e) {
        this.group.removeAll()
      }),
      (cy.prototype.dispose = function (t, e) {}),
      (cy.prototype.updateView = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (cy.prototype.updateLayout = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (cy.prototype.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (cy.prototype.eachRendered = function (t) {
        bc(this.group, t)
      }),
      (cy.markUpdateMethod = function (t, e) {
        ly(t).updateMethod = e
      }),
      (cy.protoInitialize = void (cy.prototype.type = 'chart')),
      cy)
  function cy () {
    ;(this.group = new no()),
      (this.uid = Qc('viewChart')),
      (this.renderTask = Vf({ plan: fy, reset: gy })),
      (this.renderTask.context = { view: this })
  }
  function py (t, e, n) {
    t && iu(t) && ('emphasis' === e ? Hl : Wl)(t, n)
  }
  function dy (e, t, n) {
    var i,
      r = Xo(e, t),
      o =
        t && null != t.highlightKey
          ? ((t = t.highlightKey),
            (i = null == (i = cl[t]) && hl <= 32 ? (cl[t] = hl++) : i))
          : null
    null != r
      ? B(Ro(r), function (t) {
          py(e.getItemGraphicEl(t), n, o)
        })
      : e.eachItemGraphicEl(function (t) {
          py(t, n, o)
        })
  }
  function fy (t) {
    return uy(t.model)
  }
  function gy (t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      o = e.pipelineContext.progressiveRender,
      t = t.view,
      a = r && ly(r).updateMethod,
      o = o ? 'incrementalPrepareRender' : a && t[a] ? a : 'render'
    return 'render' !== o && t[o](e, n, i, r), yy[o]
  }
  ia(hy), la(hy)
  var yy = {
      incrementalPrepareRender: {
        progress: function (t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
        }
      },
      render: {
        forceFirstProgress: !0,
        progress: function (t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload)
        }
      }
    },
    my = '\0__throttleOriginMethod',
    vy = '\0__throttleRate',
    _y = '\0__throttleType'
  function xy (t, r, o) {
    var a,
      s,
      l,
      u,
      h,
      c = 0,
      p = 0,
      d = null
    function f () {
      ;(p = new Date().getTime()), (d = null), t.apply(l, u || [])
    }
    r = r || 0
    function e () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      ;(a = new Date().getTime()), (l = this), (u = t)
      var n = h || r,
        i = h || o
      ;(h = null),
        (s = a - (i ? c : p) - n),
        clearTimeout(d),
        i ? (d = setTimeout(f, n)) : 0 <= s ? f() : (d = setTimeout(f, -s)),
        (c = a)
    }
    return (
      (e.clear = function () {
        d && (clearTimeout(d), (d = null))
      }),
      (e.debounceNextCall = function (t) {
        h = t
      }),
      e
    )
  }
  function wy (t, e, n, i) {
    var r = t[e]
    if (r) {
      var o = r[my] || r,
        a = r[_y]
      if (r[vy] !== n || a !== i) {
        if (null == n || !i) return (t[e] = o)
        ;((r = t[e] = xy(o, n, 'debounce' === i))[my] = o),
          (r[_y] = i),
          (r[vy] = n)
      }
    }
  }
  function by (t, e) {
    var n = t[e]
    n && n[my] && (n.clear && n.clear(), (t[e] = n[my]))
  }
  var Sy = Yo(),
    My = { itemStyle: ua(Uc, !0), lineStyle: ua(Vc, !0) },
    Ty = { lineStyle: 'stroke', itemStyle: 'fill' }
  function Cy (t, e) {
    return (
      t.visualStyleMapper ||
      My[e] ||
      (console.warn("Unknown style type '" + e + "'."), My.itemStyle)
    )
  }
  function Iy (t, e) {
    return (
      t.visualDrawType ||
      Ty[e] ||
      (console.warn("Unknown style type '" + e + "'."), 'fill')
    )
  }
  var ca = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (r, t) {
        var e = r.getData(),
          n = r.visualStyleAccessPath || 'itemStyle',
          i = r.getModel(n),
          o = Cy(r, n)(i),
          i = i.getShallow('decal'),
          a = (i && (e.setVisual('decal', i), (i.dirty = !0)), Iy(r, n)),
          i = o[a],
          s = S(i) ? i : null,
          n = 'auto' === o.fill || 'auto' === o.stroke
        if (
          ((o[a] && !s && !n) ||
            ((i = r.getColorFromPalette(r.name, null, t.getSeriesCount())),
            o[a] || ((o[a] = i), e.setVisual('colorFromPalette', !0)),
            (o.fill = 'auto' === o.fill || S(o.fill) ? i : o.fill),
            (o.stroke = 'auto' === o.stroke || S(o.stroke) ? i : o.stroke)),
          e.setVisual('style', o),
          e.setVisual('drawType', a),
          !t.isSeriesFiltered(r) && s)
        )
          return (
            e.setVisual('colorFromPalette', !1),
            {
              dataEach: function (t, e) {
                var n = r.getDataParams(e),
                  i = O({}, o)
                ;(i[a] = s(n)), t.setItemVisual(e, 'style', i)
              }
            }
          )
      }
    },
    ky = new Zc(),
    cc = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        var i, r, o
        if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t))
          return (
            (e = t.getData()),
            (i = t.visualStyleAccessPath || 'itemStyle'),
            (r = Cy(t, i)),
            (o = e.getVisual('drawType')),
            {
              dataEach: e.hasItemOption
                ? function (t, e) {
                    var n = t.getRawDataItem(e)
                    n &&
                      n[i] &&
                      ((ky.option = n[i]),
                      (n = r(ky)),
                      O(t.ensureUniqueItemVisual(e, 'style'), n),
                      ky.option.decal &&
                        (t.setItemVisual(e, 'decal', ky.option.decal),
                        (ky.option.decal.dirty = !0)),
                      o in n) &&
                      t.setItemVisual(e, 'colorFromPalette', !1)
                  }
                : null
            }
          )
      }
    },
    cp = {
      performRawSeries: !0,
      overallReset: function (e) {
        var i = z()
        e.eachSeries(function (t) {
          var e,
            n = t.getColorBy()
          t.isColorBySeries() ||
            ((n = t.type + '-' + n),
            (e = i.get(n)) || i.set(n, (e = {})),
            (Sy(t).scope = e))
        }),
          e.eachSeries(function (i) {
            var r, o, a, s, t, l
            i.isColorBySeries() ||
              e.isSeriesFiltered(i) ||
              ((r = i.getRawData()),
              (o = {}),
              (a = i.getData()),
              (s = Sy(i).scope),
              (t = i.visualStyleAccessPath || 'itemStyle'),
              (l = Iy(i, t)),
              a.each(function (t) {
                var e = a.getRawIndex(t)
                o[e] = t
              }),
              r.each(function (t) {
                var e,
                  n = o[t]
                a.getItemVisual(n, 'colorFromPalette') &&
                  ((n = a.ensureUniqueItemVisual(n, 'style')),
                  (t = r.getName(t) || t + ''),
                  (e = r.count()),
                  (n[l] = i.getColorFromPalette(t, s, e)))
              }))
          })
      }
    },
    Dy = Math.PI
  ;(Py.prototype.restoreData = function (t, e) {
    t.restoreData(e),
      this._stageTaskMap.each(function (t) {
        t = t.overallTask
        t && t.dirty()
      })
  }),
    (Py.prototype.getPerformArgs = function (t, e) {
      var n, i
      if (t.__pipeline)
        return (
          (i = (n = this._pipelineMap.get(t.__pipeline.id)).context),
          {
            step: (e =
              !e &&
              n.progressiveEnabled &&
              (!i || i.progressiveRender) &&
              t.__idxInPipeline > n.blockIndex
                ? n.step
                : null),
            modBy: null != (t = i && i.modDataCount) ? Math.ceil(t / e) : null,
            modDataCount: t
          }
        )
    }),
    (Py.prototype.getPipeline = function (t) {
      return this._pipelineMap.get(t)
    }),
    (Py.prototype.updateStreamModes = function (t, e) {
      var n = this._pipelineMap.get(t.uid),
        i = t.getData().count(),
        e =
          n.progressiveEnabled &&
          e.incrementalPrepareRender &&
          i >= n.threshold,
        r = t.get('large') && i >= t.get('largeThreshold'),
        i = 'mod' === t.get('progressiveChunkMode') ? i : null
      t.pipelineContext = n.context = {
        progressiveRender: e,
        modDataCount: i,
        large: r
      }
    }),
    (Py.prototype.restorePipelines = function (t) {
      var i = this,
        r = (i._pipelineMap = z())
      t.eachSeries(function (t) {
        var e = t.getProgressive(),
          n = t.uid
        r.set(n, {
          id: n,
          head: null,
          tail: null,
          threshold: t.getProgressiveThreshold(),
          progressiveEnabled:
            e && !(t.preventIncremental && t.preventIncremental()),
          blockIndex: -1,
          step: Math.round(e || 700),
          count: 0
        }),
          i._pipe(t, t.dataTask)
      })
    }),
    (Py.prototype.prepareStageTasks = function () {
      var n = this._stageTaskMap,
        i = this.api.getModel(),
        r = this.api
      B(
        this._allHandlers,
        function (t) {
          var e = n.get(t.uid) || n.set(t.uid, {})
          Ct(!(t.reset && t.overallReset), ''),
            t.reset && this._createSeriesStageTask(t, e, i, r),
            t.overallReset && this._createOverallStageTask(t, e, i, r)
        },
        this
      )
    }),
    (Py.prototype.prepareView = function (t, e, n, i) {
      var r = t.renderTask,
        o = r.context
      ;(o.model = e),
        (o.ecModel = n),
        (o.api = i),
        (r.__block = !t.incrementalPrepareRender),
        this._pipe(e, r)
    }),
    (Py.prototype.performDataProcessorTasks = function (t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, { block: !0 })
    }),
    (Py.prototype.performVisualTasks = function (t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n)
    }),
    (Py.prototype._performStageTasks = function (t, s, l, u) {
      u = u || {}
      var h = !1,
        c = this
      function p (t, e) {
        return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
      }
      B(t, function (i, t) {
        var e, n, r, o, a
        ;(u.visualType && u.visualType !== i.visualType) ||
          ((e = (n = c._stageTaskMap.get(i.uid)).seriesTaskMap),
          (n = n.overallTask)
            ? ((o = n.agentStubMap).each(function (t) {
                p(u, t) && (t.dirty(), (r = !0))
              }),
              r && n.dirty(),
              c.updatePayload(n, l),
              (a = c.getPerformArgs(n, u.block)),
              o.each(function (t) {
                t.perform(a)
              }),
              n.perform(a) && (h = !0))
            : e &&
              e.each(function (t, e) {
                p(u, t) && t.dirty()
                var n = c.getPerformArgs(t, u.block)
                ;(n.skip =
                  !i.performRawSeries && s.isSeriesFiltered(t.context.model)),
                  c.updatePayload(t, l),
                  t.perform(n) && (h = !0)
              }))
      }),
        (this.unfinished = h || this.unfinished)
    }),
    (Py.prototype.performSeriesTasks = function (t) {
      var e
      t.eachSeries(function (t) {
        e = t.dataTask.perform() || e
      }),
        (this.unfinished = e || this.unfinished)
    }),
    (Py.prototype.plan = function () {
      this._pipelineMap.each(function (t) {
        var e = t.tail
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline
            break
          }
        } while ((e = e.getUpstream()))
      })
    }),
    (Py.prototype.updatePayload = function (t, e) {
      'remain' !== e && (t.context.payload = e)
    }),
    (Py.prototype._createSeriesStageTask = function (n, t, i, r) {
      var o = this,
        a = t.seriesTaskMap,
        s = (t.seriesTaskMap = z()),
        t = n.seriesType,
        e = n.getTargetSeries
      function l (t) {
        var e = t.uid,
          e = s.set(
            e,
            (a && a.get(e)) || Vf({ plan: By, reset: zy, count: Vy })
          )
        ;(e.context = {
          model: t,
          ecModel: i,
          api: r,
          useClearVisual: n.isVisual && !n.isLayout,
          plan: n.plan,
          reset: n.reset,
          scheduler: o
        }),
          o._pipe(t, e)
      }
      n.createOnAllSeries
        ? i.eachRawSeries(l)
        : t
        ? i.eachRawSeriesByType(t, l)
        : e && e(i, r).each(l)
    }),
    (Py.prototype._createOverallStageTask = function (t, e, n, i) {
      var r = this,
        o = (e.overallTask = e.overallTask || Vf({ reset: Ly })),
        a =
          ((o.context = {
            ecModel: n,
            api: i,
            overallReset: t.overallReset,
            scheduler: r
          }),
          o.agentStubMap),
        s = (o.agentStubMap = z()),
        e = t.seriesType,
        l = t.getTargetSeries,
        u = !0,
        h = !1
      function c (t) {
        var e = t.uid,
          e = s.set(
            e,
            (a && a.get(e)) || ((h = !0), Vf({ reset: Oy, onDirty: Ny }))
          )
        ;(e.context = { model: t, overallProgress: u }),
          (e.agent = o),
          (e.__block = u),
          r._pipe(t, e)
      }
      Ct(!t.createOnAllSeries, ''),
        e
          ? n.eachRawSeriesByType(e, c)
          : l
          ? l(n, i).each(c)
          : ((u = !1), B(n.getSeries(), c)),
        h && o.dirty()
    }),
    (Py.prototype._pipe = function (t, e) {
      ;(t = t.uid), (t = this._pipelineMap.get(t))
      t.head || (t.head = e),
        t.tail && t.tail.pipe(e),
        ((t.tail = e).__idxInPipeline = t.count++),
        (e.__pipeline = t)
    }),
    (Py.wrapStageHandler = function (t, e) {
      return (
        ((t = S(t)
          ? {
              overallReset: t,
              seriesType: (function (t) {
                Hy = null
                try {
                  t(Wy, Gy)
                } catch (t) {}
                return Hy
              })(t)
            }
          : t).uid = Qc('stageHandler')),
        e && (t.visualType = e),
        t
      )
    })
  var Ay = Py
  function Py (t, e, n, i) {
    ;(this._stageTaskMap = z()),
      (this.ecInstance = t),
      (this.api = e),
      (n = this._dataProcessorHandlers = n.slice()),
      (i = this._visualHandlers = i.slice()),
      (this._allHandlers = n.concat(i))
  }
  function Ly (t) {
    t.overallReset(t.ecModel, t.api, t.payload)
  }
  function Oy (t) {
    return t.overallProgress && Ry
  }
  function Ry () {
    this.agent.dirty(), this.getDownstream().dirty()
  }
  function Ny () {
    this.agent && this.agent.dirty()
  }
  function By (t) {
    return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null
  }
  function zy (t) {
    t.useClearVisual && t.data.clearAllVisual()
    t = t.resetDefines = Ro(t.reset(t.model, t.ecModel, t.api, t.payload))
    return 1 < t.length
      ? F(t, function (t, e) {
          return Fy(e)
        })
      : Ey
  }
  var Ey = Fy(0)
  function Fy (o) {
    return function (t, e) {
      var n = e.data,
        i = e.resetDefines[o]
      if (i && i.dataEach)
        for (var r = t.start; r < t.end; r++) i.dataEach(n, r)
      else i && i.progress && i.progress(t, n)
    }
  }
  function Vy (t) {
    return t.data.count()
  }
  var Hy,
    Wy = {},
    Gy = {}
  function Uy (t, e) {
    for (var n in e.prototype) t[n] = Vt
  }
  Uy(Wy, Pd),
    Uy(Gy, Nd),
    (Wy.eachSeriesByType = Wy.eachRawSeriesByType =
      function (t) {
        Hy = t
      }),
    (Wy.eachComponent = function (t) {
      'series' === t.mainType && t.subType && (Hy = t.subType)
    })
  function Xy () {
    return {
      axisLine: { lineStyle: { color: Yy } },
      splitLine: { lineStyle: { color: '#484753' } },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)']
        }
      },
      minorSplitLine: { lineStyle: { color: '#20203B' } }
    }
  }
  var Wc = [
      '#37A2DA',
      '#32C5E9',
      '#67E0E3',
      '#9FE6B8',
      '#FFDB5C',
      '#ff9f7f',
      '#fb7293',
      '#E062AE',
      '#E690D1',
      '#e7bcf3',
      '#9d96f5',
      '#8378EA',
      '#96BFFF'
    ],
    Yc = {
      color: Wc,
      colorLayer: [
        ['#37A2DA', '#ffd85c', '#fd7b5f'],
        ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'],
        [
          '#37A2DA',
          '#32C5E9',
          '#9FE6B8',
          '#FFDB5C',
          '#ff9f7f',
          '#fb7293',
          '#e7bcf3',
          '#8378EA',
          '#96BFFF'
        ],
        Wc
      ]
    },
    Yy = '#B9B8CE',
    Uc = '#100C2A',
    Vc = [
      '#4992ff',
      '#7cffb2',
      '#fddd60',
      '#ff6e76',
      '#58d9f9',
      '#05c091',
      '#ff8a45',
      '#8d48e3',
      '#dd79ff'
    ],
    Wc = {
      darkMode: !0,
      color: Vc,
      backgroundColor: Uc,
      axisPointer: {
        lineStyle: { color: '#817f91' },
        crossStyle: { color: '#817f91' },
        label: { color: '#fff' }
      },
      legend: { textStyle: { color: Yy } },
      textStyle: { color: Yy },
      title: {
        textStyle: { color: '#EEF1FA' },
        subtextStyle: { color: '#B9B8CE' }
      },
      toolbox: { iconStyle: { borderColor: Yy } },
      dataZoom: {
        borderColor: '#71708A',
        textStyle: { color: Yy },
        brushStyle: { color: 'rgba(135,163,206,0.3)' },
        handleStyle: { color: '#353450', borderColor: '#C5CBE3' },
        moveHandleStyle: { color: '#B0B6C3', opacity: 0.3 },
        fillerColor: 'rgba(135,163,206,0.2)',
        emphasis: {
          handleStyle: { borderColor: '#91B7F2', color: '#4D587D' },
          moveHandleStyle: { color: '#636D9A', opacity: 0.7 }
        },
        dataBackground: {
          lineStyle: { color: '#71708A', width: 1 },
          areaStyle: { color: '#71708A' }
        },
        selectedDataBackground: {
          lineStyle: { color: '#87A3CE' },
          areaStyle: { color: '#87A3CE' }
        }
      },
      visualMap: { textStyle: { color: Yy } },
      timeline: {
        lineStyle: { color: Yy },
        label: { color: Yy },
        controlStyle: { color: Yy, borderColor: Yy }
      },
      calendar: {
        itemStyle: { color: Uc },
        dayLabel: { color: Yy },
        monthLabel: { color: Yy },
        yearLabel: { color: Yy }
      },
      timeAxis: Xy(),
      logAxis: Xy(),
      valueAxis: Xy(),
      categoryAxis: Xy(),
      line: { symbol: 'circle' },
      graph: { color: Vc },
      gauge: {
        title: { color: Yy },
        axisLine: { lineStyle: { color: [[1, 'rgba(207,212,219,0.2)']] } },
        axisLabel: { color: Yy },
        detail: { color: '#EEF1FA' }
      },
      candlestick: {
        itemStyle: {
          color: '#f64e56',
          color0: '#54ea92',
          borderColor: '#f64e56',
          borderColor0: '#54ea92'
        }
      }
    },
    qy =
      ((Wc.categoryAxis.splitLine.show = !1),
      (jy.prototype.normalizeQuery = function (t) {
        var e,
          a,
          s,
          l = {},
          u = {},
          h = {}
        return (
          H(t)
            ? ((e = na(t)),
              (l.mainType = e.main || null),
              (l.subType = e.sub || null))
            : ((a = ['Index', 'Name', 'Id']),
              (s = { name: 1, dataIndex: 1, dataType: 1 }),
              B(t, function (t, e) {
                for (var n = !1, i = 0; i < a.length; i++) {
                  var r = a[i],
                    o = e.lastIndexOf(r)
                  0 < o &&
                    o === e.length - r.length &&
                    'data' !== (o = e.slice(0, o)) &&
                    ((l.mainType = o), (l[r.toLowerCase()] = t), (n = !0))
                }
                s.hasOwnProperty(e) && ((u[e] = t), (n = !0)), n || (h[e] = t)
              })),
          { cptQuery: l, dataQuery: u, otherQuery: h }
        )
      }),
      (jy.prototype.filter = function (t, e) {
        var n,
          i,
          r,
          o,
          a,
          s = this.eventInfo
        return (
          !s ||
          ((n = s.targetEl),
          (i = s.packedEvent),
          (r = s.model),
          (s = s.view),
          !r) ||
          !s ||
          ((o = e.cptQuery),
          (a = e.dataQuery),
          l(o, r, 'mainType') &&
            l(o, r, 'subType') &&
            l(o, r, 'index', 'componentIndex') &&
            l(o, r, 'name') &&
            l(o, r, 'id') &&
            l(a, i, 'name') &&
            l(a, i, 'dataIndex') &&
            l(a, i, 'dataType') &&
            (!s.filterForExposedEvent ||
              s.filterForExposedEvent(t, e.otherQuery, n, i)))
        )
        function l (t, e, n, i) {
          return null == t[n] || e[i || n] === t[n]
        }
      }),
      (jy.prototype.afterTrigger = function () {
        this.eventInfo = null
      }),
      jy)
  function jy () {}
  var Zy = ['symbol', 'symbolSize', 'symbolRotate', 'symbolOffset'],
    Ky = Zy.concat(['symbolKeepAspect']),
    Uc = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (a, t) {
        var e = a.getData()
        if (
          (a.legendIcon && e.setVisual('legendIcon', a.legendIcon),
          a.hasSymbolVisual)
        ) {
          for (var s, n = {}, l = {}, i = !1, r = 0; r < Zy.length; r++) {
            var o = Zy[r],
              u = a.get(o)
            S(u) ? ((i = !0), (l[o] = u)) : (n[o] = u)
          }
          if (
            ((n.symbol = n.symbol || a.defaultSymbol),
            e.setVisual(
              O(
                {
                  legendIcon: a.legendIcon || n.symbol,
                  symbolKeepAspect: a.get('symbolKeepAspect')
                },
                n
              )
            ),
            !t.isSeriesFiltered(a))
          )
            return (
              (s = R(l)),
              {
                dataEach: i
                  ? function (t, e) {
                      for (
                        var n = a.getRawValue(e), i = a.getDataParams(e), r = 0;
                        r < s.length;
                        r++
                      ) {
                        var o = s[r]
                        t.setItemVisual(e, o, l[o](n, i))
                      }
                    }
                  : null
              }
            )
        }
      }
    },
    Vc = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        if (t.hasSymbolVisual && !e.isSeriesFiltered(t))
          return {
            dataEach: t.getData().hasItemOption
              ? function (t, e) {
                  for (var n = t.getItemModel(e), i = 0; i < Ky.length; i++) {
                    var r = Ky[i],
                      o = n.getShallow(r, !0)
                    null != o && t.setItemVisual(e, r, o)
                  }
                }
              : null
          }
      }
    }
  function $y (o, t) {
    B(
      [
        [o + 'ToggleSelect', 'toggleSelect'],
        [o + 'Select', 'select'],
        [o + 'UnSelect', 'unselect']
      ],
      function (r) {
        t(r[0], function (t, e, n) {
          var i
          ;(t = O({}, t)),
            n.dispatchAction(
              O(t, {
                type: r[1],
                seriesIndex:
                  ((n = t),
                  (i = []),
                  e.eachComponent(
                    { mainType: 'series', subType: o, query: n },
                    function (t) {
                      i.push(t.seriesIndex)
                    }
                  ),
                  i)
              })
            )
        })
      }
    )
  }
  function Qy (t, e, s, n, l) {
    var u = t + e
    s.isSilent(u) ||
      n.eachComponent({ mainType: 'series', subType: 'pie' }, function (t) {
        for (
          var e,
            n,
            i = t.seriesIndex,
            r = t.option.selectedMap,
            o = l.selected,
            a = 0;
          a < o.length;
          a++
        )
          o[a].seriesIndex === i &&
            ((n = Xo((e = t.getData()), l.fromActionPayload)),
            s.trigger(u, {
              type: u,
              seriesId: t.id,
              name: V(n) ? e.getName(n[0]) : e.getName(n),
              selected: H(r) ? r : O({}, r)
            }))
      })
  }
  function Jy (t, e, n) {
    for (var i; t && (!e(t) || ((i = t), !n)); ) t = t.__hostTarget || t.parent
    return i
  }
  var t0 = Math.round(9 * Math.random()),
    e0 = 'function' == typeof Object.defineProperty,
    n0 =
      ((i0.prototype.get = function (t) {
        return this._guard(t)[this._id]
      }),
      (i0.prototype.set = function (t, e) {
        t = this._guard(t)
        return (
          e0
            ? Object.defineProperty(t, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0
              })
            : (t[this._id] = e),
          this
        )
      }),
      (i0.prototype.delete = function (t) {
        return !!this.has(t) && (delete this._guard(t)[this._id], !0)
      }),
      (i0.prototype.has = function (t) {
        return !!this._guard(t)[this._id]
      }),
      (i0.prototype._guard = function (t) {
        if (t !== Object(t))
          throw TypeError('Value of WeakMap is not a non-null object.')
        return t
      }),
      i0)
  function i0 () {
    this._id = '__ec_inner_' + t0++
  }
  var r0 = Is.extend({
      type: 'triangle',
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          e = e.height / 2
        t.moveTo(n, i - e),
          t.lineTo(n + r, i + e),
          t.lineTo(n - r, i + e),
          t.closePath()
      }
    }),
    o0 = Is.extend({
      type: 'diamond',
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          e = e.height / 2
        t.moveTo(n, i - e),
          t.lineTo(n + r, i),
          t.lineTo(n, i + e),
          t.lineTo(n - r, i),
          t.closePath()
      }
    }),
    a0 = Is.extend({
      type: 'pin',
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.x,
          i = e.y,
          r = (e.width / 5) * 3,
          e = Math.max(r, e.height),
          r = r / 2,
          o = (r * r) / (e - r),
          e = i - e + r + o,
          a = Math.asin(o / r),
          s = Math.cos(a) * r,
          l = Math.sin(a),
          u = Math.cos(a),
          h = 0.6 * r,
          c = 0.7 * r
        t.moveTo(n - s, e + o),
          t.arc(n, e, r, Math.PI - a, 2 * Math.PI + a),
          t.bezierCurveTo(n + s - l * h, e + o + u * h, n, i - c, n, i),
          t.bezierCurveTo(n, i - c, n - s + l * h, e + o + u * h, n - s, e + o),
          t.closePath()
      }
    }),
    s0 = Is.extend({
      type: 'arrow',
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          e = e.y,
          i = (i / 3) * 2
        t.moveTo(r, e),
          t.lineTo(r + i, e + n),
          t.lineTo(r, e + (n / 4) * 3),
          t.lineTo(r - i, e + n),
          t.lineTo(r, e),
          t.closePath()
      }
    }),
    l0 = {
      line: function (t, e, n, i, r) {
        ;(r.x1 = t), (r.y1 = e + i / 2), (r.x2 = t + n), (r.y2 = e + i / 2)
      },
      rect: function (t, e, n, i, r) {
        ;(r.x = t), (r.y = e), (r.width = n), (r.height = i)
      },
      roundRect: function (t, e, n, i, r) {
        ;(r.x = t),
          (r.y = e),
          (r.width = n),
          (r.height = i),
          (r.r = Math.min(n, i) / 4)
      },
      square: function (t, e, n, i, r) {
        n = Math.min(n, i)
        ;(r.x = t), (r.y = e), (r.width = n), (r.height = n)
      },
      circle: function (t, e, n, i, r) {
        ;(r.cx = t + n / 2), (r.cy = e + i / 2), (r.r = Math.min(n, i) / 2)
      },
      diamond: function (t, e, n, i, r) {
        ;(r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i)
      },
      pin: function (t, e, n, i, r) {
        ;(r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i)
      },
      arrow: function (t, e, n, i, r) {
        ;(r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i)
      },
      triangle: function (t, e, n, i, r) {
        ;(r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i)
      }
    },
    u0 = {},
    h0 =
      (B(
        {
          line: ph,
          rect: Us,
          roundRect: Us,
          square: Us,
          circle: Iu,
          diamond: o0,
          pin: a0,
          arrow: s0,
          triangle: r0
        },
        function (t, e) {
          u0[e] = new t()
        }
      ),
      Is.extend({
        type: 'symbol',
        shape: { symbolType: '', x: 0, y: 0, width: 0, height: 0 },
        calculateTextPosition: function (t, e, n) {
          var t = Gr(t, e, n),
            i = this.shape
          return (
            i &&
              'pin' === i.symbolType &&
              'inside' === e.position &&
              (t.y = n.y + 0.4 * n.height),
            t
          )
        },
        buildPath: function (t, e, n) {
          var i,
            r = e.symbolType
          'none' !== r &&
            ((i = (i = u0[r]) || u0[(r = 'rect')]),
            l0[r](e.x, e.y, e.width, e.height, i.shape),
            i.buildPath(t, i.shape, n))
        }
      }))
  function c0 (t, e) {
    var n
    'image' !== this.type &&
      ((n = this.style),
      this.__isEmptyBrush
        ? ((n.stroke = t), (n.fill = e || '#fff'), (n.lineWidth = 2))
        : 'line' === this.shape.symbolType
        ? (n.stroke = t)
        : (n.fill = t),
      this.markRedraw())
  }
  function p0 (t, e, n, i, r, o, a) {
    var s = 0 === t.indexOf('empty')
    return (
      ((a =
        0 ===
        (t = s ? t.substr(5, 1).toLowerCase() + t.substr(6) : t).indexOf(
          'image://'
        )
          ? ac(t.slice(8), new U(e, n, i, r), a ? 'center' : 'cover')
          : 0 === t.indexOf('path://')
          ? oc(t.slice(7), {}, new U(e, n, i, r), a ? 'center' : 'cover')
          : new h0({
              shape: { symbolType: t, x: e, y: n, width: i, height: r }
            })).__isEmptyBrush = s),
      (a.setColor = c0),
      o && a.setColor(o),
      a
    )
  }
  function d0 (t) {
    return isFinite(t)
  }
  function f0 (t, e, n) {
    for (
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p =
          'radial' === e.type
            ? ((i = t),
              (r = e),
              (a = (o = n).width),
              (s = o.height),
              (l = Math.min(a, s)),
              (u = null == r.x ? 0.5 : r.x),
              (h = null == r.y ? 0.5 : r.y),
              (c = null == r.r ? 0.5 : r.r),
              r.global || ((u = u * a + o.x), (h = h * s + o.y), (c *= l)),
              (u = d0(u) ? u : 0.5),
              (h = d0(h) ? h : 0.5),
              (c = 0 <= c && d0(c) ? c : 0.5),
              i.createRadialGradient(u, h, 0, u, h, c))
            : ((r = t),
              (a = n),
              (o = null == (s = e).x ? 0 : s.x),
              (l = null == s.x2 ? 1 : s.x2),
              (i = null == s.y ? 0 : s.y),
              (u = null == s.y2 ? 0 : s.y2),
              s.global ||
                ((o = o * a.width + a.x),
                (l = l * a.width + a.x),
                (i = i * a.height + a.y),
                (u = u * a.height + a.y)),
              (o = d0(o) ? o : 0),
              (l = d0(l) ? l : 1),
              (i = d0(i) ? i : 0),
              (u = d0(u) ? u : 0),
              r.createLinearGradient(o, i, l, u)),
        d = e.colorStops,
        f = 0;
      f < d.length;
      f++
    )
      p.addColorStop(d[f].offset, d[f].color)
    return p
  }
  function g0 (t) {
    return parseInt(t, 10)
  }
  function y0 (t, e, n) {
    var i = ['width', 'height'][e],
      r = ['clientWidth', 'clientHeight'][e],
      o = ['paddingLeft', 'paddingTop'][e],
      e = ['paddingRight', 'paddingBottom'][e]
    return null != n[i] && 'auto' !== n[i]
      ? parseFloat(n[i])
      : ((n = document.defaultView.getComputedStyle(t)),
        ((t[r] || g0(n[i]) || g0(t.style[i])) -
          (g0(n[o]) || 0) -
          (g0(n[e]) || 0)) |
          0)
  }
  function m0 (t) {
    var e,
      n = t.style,
      i =
        n.lineDash &&
        0 < n.lineWidth &&
        ((r = n.lineDash),
        (i = n.lineWidth),
        r && 'solid' !== r && 0 < i
          ? 'dashed' === r
            ? [4 * i, 2 * i]
            : 'dotted' === r
            ? [i]
            : W(r)
            ? [r]
            : V(r)
            ? r
            : null
          : null),
      r = n.lineDashOffset
    return (
      i &&
        (e = n.strokeNoScale && t.getLineScale ? t.getLineScale() : 1) &&
        1 !== e &&
        ((i = F(i, function (t) {
          return t / e
        })),
        (r /= e)),
      [i, r]
    )
  }
  var v0 = new us(!0)
  function _0 (t) {
    var e = t.stroke
    return !(null == e || 'none' === e || !(0 < t.lineWidth))
  }
  function x0 (t) {
    return 'string' == typeof t && 'none' !== t
  }
  function w0 (t) {
    t = t.fill
    return null != t && 'none' !== t
  }
  function b0 (t, e) {
    var n
    null != e.fillOpacity && 1 !== e.fillOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.fillOpacity * e.opacity),
        t.fill(),
        (t.globalAlpha = n))
      : t.fill()
  }
  function S0 (t, e) {
    var n
    null != e.strokeOpacity && 1 !== e.strokeOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.strokeOpacity * e.opacity),
        t.stroke(),
        (t.globalAlpha = n))
      : t.stroke()
  }
  function M0 (t, e, n) {
    var n = fa(e.image, e.__image, n)
    if (ya(n))
      return (
        (t = t.createPattern(n, e.repeat || 'repeat')),
        'function' == typeof DOMMatrix &&
          t &&
          t.setTransform &&
          ((n = new DOMMatrix()).translateSelf(e.x || 0, e.y || 0),
          n.rotateSelf(0, 0, (e.rotation || 0) * Ht),
          n.scaleSelf(e.scaleX || 1, e.scaleY || 1),
          t.setTransform(n)),
        t
      )
  }
  var T0 = ['shadowBlur', 'shadowOffsetX', 'shadowOffsetY'],
    C0 = [
      ['lineCap', 'butt'],
      ['lineJoin', 'miter'],
      ['miterLimit', 10]
    ]
  function I0 (t, e, n, i, r) {
    var o,
      a = !1
    if (!i && e === (n = n || {})) return !1
    ;(!i && e.opacity === n.opacity) ||
      (R0(t, r),
      (a = !0),
      (o = Math.max(Math.min(e.opacity, 1), 0)),
      (t.globalAlpha = isNaN(o) ? Aa.opacity : o)),
      (!i && e.blend === n.blend) ||
        (a || (R0(t, r), (a = !0)),
        (t.globalCompositeOperation = e.blend || Aa.blend))
    for (var s = 0; s < T0.length; s++) {
      var l = T0[s]
      ;(!i && e[l] === n[l]) ||
        (a || (R0(t, r), (a = !0)), (t[l] = t.dpr * (e[l] || 0)))
    }
    return (
      (!i && e.shadowColor === n.shadowColor) ||
        (a || (R0(t, r), (a = !0)),
        (t.shadowColor = e.shadowColor || Aa.shadowColor)),
      a
    )
  }
  function k0 (t, e, n, i, r) {
    var o = N0(e, r.inHover),
      a = i ? null : (n && N0(n, r.inHover)) || {}
    if (o !== a) {
      var s = I0(t, o, a, i, r)
      ;(i || o.fill !== a.fill) &&
        (s || (R0(t, r), (s = !0)), x0(o.fill)) &&
        (t.fillStyle = o.fill),
        (i || o.stroke !== a.stroke) &&
          (s || (R0(t, r), (s = !0)), x0(o.stroke)) &&
          (t.strokeStyle = o.stroke),
        (!i && o.opacity === a.opacity) ||
          (s || (R0(t, r), (s = !0)),
          (t.globalAlpha = null == o.opacity ? 1 : o.opacity)),
        e.hasStroke() &&
          ((n =
            o.lineWidth /
            (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1)),
          t.lineWidth !== n) &&
          (s || (R0(t, r), (s = !0)), (t.lineWidth = n))
      for (var l = 0; l < C0.length; l++) {
        var u = C0[l],
          h = u[0]
        ;(!i && o[h] === a[h]) ||
          (s || (R0(t, r), (s = !0)), (t[h] = o[h] || u[1]))
      }
    }
  }
  function D0 (t, e) {
    var e = e.transform,
      n = t.dpr || 1
    e
      ? t.setTransform(
          n * e[0],
          n * e[1],
          n * e[2],
          n * e[3],
          n * e[4],
          n * e[5]
        )
      : t.setTransform(n, 0, 0, n, 0, 0)
  }
  var A0 = 1,
    P0 = 2,
    L0 = 3,
    O0 = 4
  function R0 (t, e) {
    e.batchFill && t.fill(),
      e.batchStroke && t.stroke(),
      (e.batchFill = ''),
      (e.batchStroke = '')
  }
  function N0 (t, e) {
    return (e && t.__hoverStyle) || t.style
  }
  function B0 (t, e) {
    z0(t, e, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0)
  }
  function z0 (t, e, n, B) {
    var i = e.transform
    if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1))
      return (e.__dirty &= ~vn), (e.__isRendered = !1)
    var r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m,
      v,
      _,
      x,
      w,
      b,
      S,
      M,
      T,
      C,
      I = e.__clipPaths,
      k = n.prevElClipPaths,
      D = !1,
      A = !1
    if (
      !k ||
      (function (t, e) {
        if (t !== e && (t || e)) {
          if (!t || !e || t.length !== e.length) return 1
          for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return 1
        }
      })(I, k)
    ) {
      if (
        (k &&
          k.length &&
          (R0(t, n),
          t.restore(),
          (A = D = !0),
          (n.prevElClipPaths = null),
          (n.allClipped = !1),
          (n.prevEl = null)),
        I && I.length)
      ) {
        R0(t, n), t.save()
        var z = I,
          E = t
        k = n
        for (var F = !1, V = 0; V < z.length; V++) {
          var H = z[V],
            F = F || H.isZeroArea()
          D0(E, H), E.beginPath(), H.buildPath(E, H.shape), E.clip()
        }
        ;(k.allClipped = F), (D = !0)
      }
      n.prevElClipPaths = I
    }
    if (n.allClipped) e.__isRendered = !1
    else {
      e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush()
      var k = n.prevEl,
        P =
          (k || (A = D = !0),
          e instanceof Is &&
            e.autoBatch &&
            ((I = e.style),
            (P = w0(I)),
            (C = _0(I)),
            !(
              I.lineDash ||
              !(+P ^ +C) ||
              (P && 'string' != typeof I.fill) ||
              (C && 'string' != typeof I.stroke) ||
              I.strokePercent < 1 ||
              I.strokeOpacity < 1 ||
              I.fillOpacity < 1
            ))),
        D =
          (D ||
          ((C = i),
          (I = k.transform),
          C && I
            ? C[0] !== I[0] ||
              C[1] !== I[1] ||
              C[2] !== I[2] ||
              C[3] !== I[3] ||
              C[4] !== I[4] ||
              C[5] !== I[5]
            : C || I)
            ? (R0(t, n), D0(t, e))
            : P || R0(t, n),
          N0(e, n.inHover))
      if (e instanceof Is)
        n.lastDrawType !== A0 && ((A = !0), (n.lastDrawType = A0)),
          k0(t, e, k, A, n),
          (P && (n.batchFill || n.batchStroke)) || t.beginPath(),
          (i = t),
          (I = e),
          (O = P),
          (y = _0((a = D))),
          (m = w0(a)),
          (v = a.strokePercent),
          (_ = v < 1),
          (x = !I.path),
          (I.silent && !_) || !x || I.createPathProxy(),
          (w = I.path || v0),
          (b = I.__dirty),
          O ||
            ((s = a.fill),
            (T = a.stroke),
            (l = m && !!s.colorStops),
            (u = y && !!T.colorStops),
            (h = m && !!s.image),
            (c = y && !!T.image),
            (M = g = f = d = p = void 0),
            (l || u) && (M = I.getBoundingRect()),
            l &&
              ((p = b ? f0(i, s, M) : I.__canvasFillGradient),
              (I.__canvasFillGradient = p)),
            u &&
              ((d = b ? f0(i, T, M) : I.__canvasStrokeGradient),
              (I.__canvasStrokeGradient = d)),
            h &&
              ((f =
                b || !I.__canvasFillPattern
                  ? M0(i, s, I)
                  : I.__canvasFillPattern),
              (I.__canvasFillPattern = f)),
            c &&
              ((g =
                b || !I.__canvasStrokePattern
                  ? M0(i, T, I)
                  : I.__canvasStrokePattern),
              (I.__canvasStrokePattern = f)),
            l ? (i.fillStyle = p) : h && (f ? (i.fillStyle = f) : (m = !1)),
            u
              ? (i.strokeStyle = d)
              : c && (g ? (i.strokeStyle = g) : (y = !1))),
          (M = I.getGlobalScale()),
          w.setScale(M[0], M[1], I.segmentIgnoreThreshold),
          i.setLineDash && a.lineDash && ((S = (s = m0(I))[0]), (L = s[1])),
          (T = !0),
          (x || b & _n) &&
            (w.setDPR(i.dpr),
            _ ? w.setContext(null) : (w.setContext(i), (T = !1)),
            w.reset(),
            I.buildPath(w, I.shape, O),
            w.toStatic(),
            I.pathUpdated()),
          T && w.rebuildPath(i, _ ? v : 1),
          S && (i.setLineDash(S), (i.lineDashOffset = L)),
          O ||
            (a.strokeFirst
              ? (y && S0(i, a), m && b0(i, a))
              : (m && b0(i, a), y && S0(i, a))),
          S && i.setLineDash([]),
          P && ((n.batchFill = D.fill || ''), (n.batchStroke = D.stroke || ''))
      else if (e instanceof As)
        n.lastDrawType !== L0 && ((A = !0), (n.lastDrawType = L0)),
          k0(t, e, k, A, n),
          (l = t),
          (p = e),
          null != (f = (h = D).text) && (f += ''),
          f &&
            ((l.font = h.font || Z),
            (l.textAlign = h.textAlign),
            (l.textBaseline = h.textBaseline),
            (d = u = void 0),
            l.setLineDash && h.lineDash && ((u = (p = m0(p))[0]), (d = p[1])),
            u && (l.setLineDash(u), (l.lineDashOffset = d)),
            h.strokeFirst
              ? (_0(h) && l.strokeText(f, h.x, h.y),
                w0(h) && l.fillText(f, h.x, h.y))
              : (w0(h) && l.fillText(f, h.x, h.y),
                _0(h) && l.strokeText(f, h.x, h.y)),
            u) &&
            l.setLineDash([])
      else if (e instanceof Ns)
        n.lastDrawType !== P0 && ((A = !0), (n.lastDrawType = P0)),
          (c = k),
          (g = A),
          I0(t, N0(e, (M = n).inHover), c && N0(c, M.inHover), g, M),
          (s = t),
          (x = D),
          (I = (b = e).__image = fa(x.image, b.__image, b, b.onload)) &&
            ya(I) &&
            ((T = x.x || 0),
            (w = x.y || 0),
            (_ = b.getWidth()),
            (b = b.getHeight()),
            (v = I.width / I.height),
            null == _ && null != b
              ? (_ = b * v)
              : null == b && null != _
              ? (b = _ / v)
              : null == _ && null == b && ((_ = I.width), (b = I.height)),
            x.sWidth && x.sHeight
              ? ((r = x.sx || 0),
                (o = x.sy || 0),
                s.drawImage(I, r, o, x.sWidth, x.sHeight, T, w, _, b))
              : x.sx && x.sy
              ? ((v = _ - (r = x.sx)),
                (x = b - (o = x.sy)),
                s.drawImage(I, r, o, v, x, T, w, _, b))
              : s.drawImage(I, T, w, _, b))
      else if (e.getTemporalDisplayables) {
        n.lastDrawType !== O0 && ((A = !0), (n.lastDrawType = O0))
        {
          var W = t
          var L = e
          var O = n
          var G = L.getDisplayables(),
            U = L.getTemporalDisplayables()
          W.save()
          var R,
            X,
            Y = {
              prevElClipPaths: null,
              prevEl: null,
              allClipped: !1,
              viewWidth: O.viewWidth,
              viewHeight: O.viewHeight,
              inHover: O.inHover
            }
          for (R = L.getCursor(), X = G.length; R < X; R++)
            (N = G[R]).beforeBrush && N.beforeBrush(),
              N.innerBeforeBrush(),
              z0(W, N, Y, R === X - 1),
              N.innerAfterBrush(),
              N.afterBrush && N.afterBrush(),
              (Y.prevEl = N)
          for (var N, q = 0, j = U.length; q < j; q++)
            (N = U[q]).beforeBrush && N.beforeBrush(),
              N.innerBeforeBrush(),
              z0(W, N, Y, q === j - 1),
              N.innerAfterBrush(),
              N.afterBrush && N.afterBrush(),
              (Y.prevEl = N)
          L.clearTemporalDisplayables(), (L.notClear = !0), W.restore()
        }
      }
      P && B && R0(t, n),
        e.innerAfterBrush(),
        e.afterBrush && e.afterBrush(),
        ((n.prevEl = e).__dirty = 0),
        (e.__isRendered = !0)
    }
  }
  var E0 = new n0(),
    F0 = new ei(100),
    V0 = [
      'symbol',
      'symbolSize',
      'symbolKeepAspect',
      'color',
      'backgroundColor',
      'dashArrayX',
      'dashArrayY',
      'maxTileWidth',
      'maxTileHeight'
    ]
  function H0 (t, e) {
    if ('none' === t) return null
    var n = e.getDevicePixelRatio(),
      i = e.getZr(),
      r = 'svg' === i.painter.type,
      e = (t.dirty && E0.delete(t), E0.get(t))
    if (e) return e
    for (
      var o,
        a = E(t, {
          symbol: 'rect',
          symbolSize: 1,
          symbolKeepAspect: !0,
          color: 'rgba(0, 0, 0, 0.2)',
          backgroundColor: null,
          dashArrayX: 5,
          dashArrayY: 5,
          rotation: 0,
          maxTileWidth: 512,
          maxTileHeight: 512
        }),
        e =
          ('none' === a.backgroundColor && (a.backgroundColor = null),
          { repeat: 'repeat' }),
        s = e,
        l = [n],
        u = !0,
        h = 0;
      h < V0.length;
      ++h
    ) {
      var c = a[V0[h]]
      if (null != c && !V(c) && !H(c) && !W(c) && 'boolean' != typeof c) {
        u = !1
        break
      }
      l.push(c)
    }
    u &&
      ((o = l.join(',') + (r ? '-svg' : '')), (v = F0.get(o))) &&
      (r ? (s.svgElement = v) : (s.image = v))
    var p,
      d = (function t (e) {
        if (!e || 0 === e.length) return [[0, 0]]
        if (W(e)) return [[(o = Math.ceil(e)), o]]
        for (var n = !0, i = 0; i < e.length; ++i)
          if (!W(e[i])) {
            n = !1
            break
          }
        if (n) return t([e])
        var r = []
        for (i = 0; i < e.length; ++i) {
          var o
          W(e[i])
            ? ((o = Math.ceil(e[i])), r.push([o, o]))
            : (o = F(e[i], function (t) {
                return Math.ceil(t)
              })).length %
                2 ==
              1
            ? r.push(o.concat(o))
            : r.push(o)
        }
        return r
      })(a.dashArrayX),
      f = (function (t) {
        if (!t || ('object' == typeof t && 0 === t.length)) return [0, 0]
        if (W(t)) return [(e = Math.ceil(t)), e]
        var e = F(t, function (t) {
          return Math.ceil(t)
        })
        return t.length % 2 ? e.concat(e) : e
      })(a.dashArrayY),
      g = (function t (e) {
        if (!e || 0 === e.length) return [['rect']]
        if (H(e)) return [[e]]
        for (var n = !0, i = 0; i < e.length; ++i)
          if (!H(e[i])) {
            n = !1
            break
          }
        if (n) return t([e])
        var r = []
        for (i = 0; i < e.length; ++i) H(e[i]) ? r.push([e[i]]) : r.push(e[i])
        return r
      })(a.symbol),
      y = F(d, W0),
      m = W0(f),
      v = !r && q.createCanvas(),
      _ = r && { tag: 'g', attrs: {}, key: 'dcl', children: [] },
      x = (function () {
        for (var t = 1, e = 0, n = y.length; e < n; ++e) t = Ao(t, y[e])
        for (var i = 1, e = 0, n = g.length; e < n; ++e) i = Ao(i, g[e].length)
        t *= i
        var r = m * y.length * g.length
        return {
          width: Math.max(1, Math.min(t, a.maxTileWidth)),
          height: Math.max(1, Math.min(r, a.maxTileHeight))
        }
      })()
    v &&
      ((v.width = x.width * n),
      (v.height = x.height * n),
      (p = v.getContext('2d'))),
      p &&
        (p.clearRect(0, 0, v.width, v.height), a.backgroundColor) &&
        ((p.fillStyle = a.backgroundColor), p.fillRect(0, 0, v.width, v.height))
    for (var w = 0, b = 0; b < f.length; ++b) w += f[b]
    if (!(w <= 0))
      for (var S, M = -m, T = 0, C = 0, I = 0; M < x.height; ) {
        if (T % 2 == 0) {
          for (
            var k = (C / 2) % g.length, D = 0, A = 0, P = 0;
            D < 2 * x.width;

          ) {
            for (var L, O, R, B, N, z = 0, b = 0; b < d[I].length; ++b)
              z += d[I][b]
            if (z <= 0) break
            A % 2 == 0 &&
              ((O = 0.5 * (1 - a.symbolSize)),
              (L = D + d[I][A] * O),
              (O = M + f[T] * O),
              (R = d[I][A] * a.symbolSize),
              (B = f[T] * a.symbolSize),
              (N = (P / 2) % g[k].length),
              (L = L),
              (N = g[k][N]),
              (S = void 0),
              (N = p0(
                N,
                L * (S = r ? 1 : n),
                O * S,
                R * S,
                B * S,
                a.color,
                a.symbolKeepAspect
              )),
              r
                ? (L = i.painter.renderOneToVNode(N)) && _.children.push(L)
                : B0(p, N)),
              (D += d[I][A]),
              ++P,
              ++A === d[I].length && (A = 0)
          }
          ++I === d.length && (I = 0)
        }
        ;(M += f[T]), ++C, ++T === f.length && (T = 0)
      }
    return (
      u && F0.put(o, v || _),
      (s.image = v),
      (s.svgElement = _),
      (s.svgWidth = x.width),
      (s.svgHeight = x.height),
      (e.rotation = a.rotation),
      (e.scaleX = e.scaleY = r ? 1 : 1 / n),
      E0.set(t, e),
      (t.dirty = !1),
      e
    )
  }
  function W0 (t) {
    for (var e = 0, n = 0; n < t.length; ++n) e += t[n]
    return t.length % 2 == 1 ? 2 * e : e
  }
  var G0 = new ue(),
    U0 = {}
  var o0 = {
      PROCESSOR: { FILTER: 1e3, SERIES_FILTER: 800, STATISTIC: 5e3 },
      VISUAL: {
        LAYOUT: 1e3,
        PROGRESSIVE_LAYOUT: 1100,
        GLOBAL: 2e3,
        CHART: 3e3,
        POST_CHART_LAYOUT: 4600,
        COMPONENT: 4e3,
        BRUSH: 5e3,
        CHART_ITEM: 4500,
        ARIA: 6e3,
        DECAL: 7e3
      }
    },
    X0 = '__flagInMainProcess',
    Y0 = '__pendingUpdate',
    q0 = '__needsUpdateStatus',
    j0 = /^[a-zA-Z0-9_]+$/,
    Z0 = '__connectUpdateStatus'
  function K0 (n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      if (!this.isDisposed()) return Q0(this, n, t)
      this.id
    }
  }
  function $0 (n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      return Q0(this, n, t)
    }
  }
  function Q0 (t, e, n) {
    return (n[0] = n[0] && n[0].toLowerCase()), ue.prototype[e].apply(t, n)
  }
  u(_m, (mm = ue))
  var J0,
    tm,
    em,
    nm,
    im,
    rm,
    om,
    am,
    sm,
    lm,
    um,
    hm,
    cm,
    pm,
    dm,
    fm,
    gm,
    ym,
    mm,
    vm = _m,
    a0 = vm.prototype
  function _m () {
    return (null !== mm && mm.apply(this, arguments)) || this
  }
  ;(a0.on = $0('on')), (a0.off = $0('off'))
  u(c, (xm = ue)),
    (c.prototype._onframe = function () {
      if (!this._disposed) {
        ym(this)
        var t = this._scheduler
        if (this[Y0]) {
          var e = this[Y0].silent
          this[X0] = !0
          try {
            J0(this), nm.update.call(this, null, this[Y0].updateParams)
          } catch (t) {
            throw ((this[X0] = !1), (this[Y0] = null), t)
          }
          this._zr.flush(),
            (this[X0] = !1),
            (this[Y0] = null),
            am.call(this, e),
            sm.call(this, e)
        } else if (t.unfinished) {
          var n = 1,
            i = this._model,
            r = this._api
          t.unfinished = !1
          do {
            var o = +new Date()
          } while (
            (t.performSeriesTasks(i),
            t.performDataProcessorTasks(i),
            rm(this, i),
            t.performVisualTasks(i),
            pm(this, this._model, r, 'remain', {}),
            0 < (n -= +new Date() - o) && t.unfinished)
          )
          t.unfinished || this._zr.flush()
        }
      }
    }),
    (c.prototype.getDom = function () {
      return this._dom
    }),
    (c.prototype.getId = function () {
      return this.id
    }),
    (c.prototype.getZr = function () {
      return this._zr
    }),
    (c.prototype.isSSR = function () {
      return this._ssr
    }),
    (c.prototype.setOption = function (t, e, n) {
      if (!this[X0])
        if (this._disposed) this.id
        else {
          L(e) &&
            ((n = e.lazyUpdate),
            (i = e.silent),
            (r = e.replaceMerge),
            (o = e.transition),
            (e = e.notMerge)),
            (this[X0] = !0),
            (this._model && !e) ||
              ((e = new Hd(this._api)),
              (a = this._theme),
              ((s = this._model = new Pd()).scheduler = this._scheduler),
              (s.ssr = this._ssr),
              s.init(null, null, null, a, this._locale, e)),
            this._model.setOption(t, { replaceMerge: r }, Pm)
          var i,
            r,
            o,
            a,
            s = { seriesTransition: o, optionChanged: !0 }
          if (n)
            (this[Y0] = { silent: i, updateParams: s }),
              (this[X0] = !1),
              this.getZr().wakeUp()
          else {
            try {
              J0(this), nm.update.call(this, null, s)
            } catch (t) {
              throw ((this[Y0] = null), (this[X0] = !1), t)
            }
            this._ssr || this._zr.flush(),
              (this[Y0] = null),
              (this[X0] = !1),
              am.call(this, i),
              sm.call(this, i)
          }
        }
    }),
    (c.prototype.setTheme = function () {}),
    (c.prototype.getModel = function () {
      return this._model
    }),
    (c.prototype.getOption = function () {
      return this._model && this._model.getOption()
    }),
    (c.prototype.getWidth = function () {
      return this._zr.getWidth()
    }),
    (c.prototype.getHeight = function () {
      return this._zr.getHeight()
    }),
    (c.prototype.getDevicePixelRatio = function () {
      return (
        this._zr.painter.dpr ||
        (b.hasGlobalWindow && window.devicePixelRatio) ||
        1
      )
    }),
    (c.prototype.getRenderedCanvas = function (t) {
      return this.renderToCanvas(t)
    }),
    (c.prototype.renderToCanvas = function (t) {
      return this._zr.painter.getRenderedCanvas({
        backgroundColor:
          (t = t || {}).backgroundColor || this._model.get('backgroundColor'),
        pixelRatio: t.pixelRatio || this.getDevicePixelRatio()
      })
    }),
    (c.prototype.renderToSVGString = function (t) {
      return this._zr.painter.renderToString({
        useViewBox: (t = t || {}).useViewBox
      })
    }),
    (c.prototype.getSvgDataURL = function () {
      var t
      if (b.svgSupported)
        return (
          B((t = this._zr).storage.getDisplayList(), function (t) {
            t.stopAnimation(null, !0)
          }),
          t.painter.toDataURL()
        )
    }),
    (c.prototype.getDataURL = function (t) {
      var e, n, i, r
      if (!this._disposed)
        return (
          (r = (t = t || {}).excludeComponents),
          (e = this._model),
          (n = []),
          (i = this),
          B(r, function (t) {
            e.eachComponent({ mainType: t }, function (t) {
              t = i._componentsMap[t.__viewId]
              t.group.ignore || (n.push(t), (t.group.ignore = !0))
            })
          }),
          (r =
            'svg' === this._zr.painter.getType()
              ? this.getSvgDataURL()
              : this.renderToCanvas(t).toDataURL(
                  'image/' + ((t && t.type) || 'png')
                )),
          B(n, function (t) {
            t.group.ignore = !1
          }),
          r
        )
      this.id
    }),
    (c.prototype.getConnectedDataURL = function (i) {
      var r, o, a, s, l, u, h, c, p, e, t, n, d, f, g
      if (!this._disposed)
        return (
          (r = 'svg' === i.type),
          (o = this.group),
          (a = Math.min),
          (s = Math.max),
          Bm[o]
            ? ((u = l = 1 / 0),
              (c = h = -1 / 0),
              (p = []),
              (e = (i && i.pixelRatio) || this.getDevicePixelRatio()),
              B(Nm, function (t, e) {
                var n
                t.group === o &&
                  ((n = r
                    ? t.getZr().painter.getSvgDom().innerHTML
                    : t.renderToCanvas(_(i))),
                  (t = t.getDom().getBoundingClientRect()),
                  (l = a(t.left, l)),
                  (u = a(t.top, u)),
                  (h = s(t.right, h)),
                  (c = s(t.bottom, c)),
                  p.push({ dom: n, left: t.left, top: t.top }))
              }),
              (t = (h *= e) - (l *= e)),
              (n = (c *= e) - (u *= e)),
              (d = q.createCanvas()),
              (f = lo(d, { renderer: r ? 'svg' : 'canvas' })).resize({
                width: t,
                height: n
              }),
              r
                ? ((g = ''),
                  B(p, function (t) {
                    var e = t.left - l,
                      n = t.top - u
                    g +=
                      '<g transform="translate(' +
                      e +
                      ',' +
                      n +
                      ')">' +
                      t.dom +
                      '</g>'
                  }),
                  (f.painter.getSvgRoot().innerHTML = g),
                  i.connectedBackgroundColor &&
                    f.painter.setBackgroundColor(i.connectedBackgroundColor),
                  f.refreshImmediately(),
                  f.painter.toDataURL())
                : (i.connectedBackgroundColor &&
                    f.add(
                      new Us({
                        shape: { x: 0, y: 0, width: t, height: n },
                        style: { fill: i.connectedBackgroundColor }
                      })
                    ),
                  B(p, function (t) {
                    t = new Ns({
                      style: {
                        x: t.left * e - l,
                        y: t.top * e - u,
                        image: t.dom
                      }
                    })
                    f.add(t)
                  }),
                  f.refreshImmediately(),
                  d.toDataURL('image/' + ((i && i.type) || 'png'))))
            : this.getDataURL(i)
        )
      this.id
    }),
    (c.prototype.convertToPixel = function (t, e) {
      return im(this, 'convertToPixel', t, e)
    }),
    (c.prototype.convertFromPixel = function (t, e) {
      return im(this, 'convertFromPixel', t, e)
    }),
    (c.prototype.containPixel = function (t, i) {
      var r
      if (!this._disposed)
        return (
          B(
            jo(this._model, t),
            function (t, n) {
              0 <= n.indexOf('Models') &&
                B(
                  t,
                  function (t) {
                    var e = t.coordinateSystem
                    e && e.containPoint
                      ? (r = r || !!e.containPoint(i))
                      : 'seriesModels' === n &&
                        (e = this._chartsMap[t.__viewId]) &&
                        e.containPoint &&
                        (r = r || e.containPoint(i, t))
                  },
                  this
                )
            },
            this
          ),
          !!r
        )
      this.id
    }),
    (c.prototype.getVisual = function (t, e) {
      var t = jo(this._model, t, { defaultMainType: 'series' }),
        n = t.seriesModel.getData(),
        t = t.hasOwnProperty('dataIndexInside')
          ? t.dataIndexInside
          : t.hasOwnProperty('dataIndex')
          ? n.indexOfRawIndex(t.dataIndex)
          : null
      if (null != t) {
        var i = n,
          r = t,
          o = e
        switch (o) {
          case 'color':
            return i.getItemVisual(r, 'style')[i.getVisual('drawType')]
          case 'opacity':
            return i.getItemVisual(r, 'style').opacity
          case 'symbol':
          case 'symbolSize':
          case 'liftZ':
            return i.getItemVisual(r, o)
        }
      } else {
        var a = n,
          s = e
        switch (s) {
          case 'color':
            return a.getVisual('style')[a.getVisual('drawType')]
          case 'opacity':
            return a.getVisual('style').opacity
          case 'symbol':
          case 'symbolSize':
          case 'liftZ':
            return a.getVisual(s)
        }
      }
    }),
    (c.prototype.getViewOfComponentModel = function (t) {
      return this._componentsMap[t.__viewId]
    }),
    (c.prototype.getViewOfSeriesModel = function (t) {
      return this._chartsMap[t.__viewId]
    }),
    (c.prototype._initEvents = function () {
      var t,
        n,
        i,
        s = this
      B(Im, function (a) {
        function t (t) {
          var n,
            e,
            i,
            r = s.getModel(),
            o = t.target
          'globalout' === a
            ? (n = {})
            : o &&
              Jy(
                o,
                function (t) {
                  var e,
                    t = ul(t)
                  return t && null != t.dataIndex
                    ? ((e = t.dataModel || r.getSeriesByIndex(t.seriesIndex)),
                      (n =
                        (e && e.getDataParams(t.dataIndex, t.dataType, o)) ||
                        {}),
                      1)
                    : t.eventData && ((n = O({}, t.eventData)), 1)
                },
                !0
              ),
            n &&
              ((e = n.componentType),
              (i = n.componentIndex),
              ('markLine' !== e && 'markPoint' !== e && 'markArea' !== e) ||
                ((e = 'series'), (i = n.seriesIndex)),
              (i =
                (e = e && null != i && r.getComponent(e, i)) &&
                s['series' === e.mainType ? '_chartsMap' : '_componentsMap'][
                  e.__viewId
                ]),
              (n.event = t),
              (n.type = a),
              (s._$eventProcessor.eventInfo = {
                targetEl: o,
                packedEvent: n,
                model: e,
                view: i
              }),
              s.trigger(a, n))
        }
        ;(t.zrEventfulCallAtLast = !0), s._zr.on(a, t, s)
      }),
        B(Dm, function (t, e) {
          s._messageCenter.on(
            e,
            function (t) {
              this.trigger(e, t)
            },
            s
          )
        }),
        B(['selectchanged'], function (e) {
          s._messageCenter.on(
            e,
            function (t) {
              this.trigger(e, t)
            },
            s
          )
        }),
        (t = this._messageCenter),
        (i = (n = this)._api),
        t.on('selectchanged', function (t) {
          var e = i.getModel()
          t.isFromClick
            ? (Qy('map', 'selectchanged', n, e, t),
              Qy('pie', 'selectchanged', n, e, t))
            : 'select' === t.fromAction
            ? (Qy('map', 'selected', n, e, t), Qy('pie', 'selected', n, e, t))
            : 'unselect' === t.fromAction &&
              (Qy('map', 'unselected', n, e, t),
              Qy('pie', 'unselected', n, e, t))
        })
    }),
    (c.prototype.isDisposed = function () {
      return this._disposed
    }),
    (c.prototype.clear = function () {
      this._disposed ? this.id : this.setOption({ series: [] }, !0)
    }),
    (c.prototype.dispose = function () {
      var t, e, n
      this._disposed
        ? this.id
        : ((this._disposed = !0),
          this.getDom() && Qo(this.getDom(), Fm, ''),
          (e = (t = this)._api),
          (n = t._model),
          B(t._componentsViews, function (t) {
            t.dispose(n, e)
          }),
          B(t._chartsViews, function (t) {
            t.dispose(n, e)
          }),
          t._zr.dispose(),
          (t._dom =
            t._model =
            t._chartsMap =
            t._componentsMap =
            t._chartsViews =
            t._componentsViews =
            t._scheduler =
            t._api =
            t._zr =
            t._throttledZrFlush =
            t._theme =
            t._coordSysMgr =
            t._messageCenter =
              null),
          delete Nm[t.id])
    }),
    (c.prototype.resize = function (t) {
      if (!this[X0])
        if (this._disposed) this.id
        else {
          this._zr.resize(t)
          var e = this._model
          if ((this._loadingFX && this._loadingFX.resize(), e)) {
            var e = e.resetOption('media'),
              n = t && t.silent
            this[Y0] &&
              (null == n && (n = this[Y0].silent), (e = !0), (this[Y0] = null)),
              (this[X0] = !0)
            try {
              e && J0(this),
                nm.update.call(this, {
                  type: 'resize',
                  animation: O({ duration: 0 }, t && t.animation)
                })
            } catch (t) {
              throw ((this[X0] = !1), t)
            }
            ;(this[X0] = !1), am.call(this, n), sm.call(this, n)
          }
        }
    }),
    (c.prototype.showLoading = function (t, e) {
      this._disposed
        ? this.id
        : (L(t) && ((e = t), (t = '')),
          (t = t || 'default'),
          this.hideLoading(),
          Rm[t] &&
            ((t = Rm[t](this._api, e)),
            (e = this._zr),
            (this._loadingFX = t),
            e.add(t)))
    }),
    (c.prototype.hideLoading = function () {
      this._disposed
        ? this.id
        : (this._loadingFX && this._zr.remove(this._loadingFX),
          (this._loadingFX = null))
    }),
    (c.prototype.makeActionFromEvent = function (t) {
      var e = O({}, t)
      return (e.type = Dm[t.type]), e
    }),
    (c.prototype.dispatchAction = function (t, e) {
      var n
      this._disposed
        ? this.id
        : (L(e) || (e = { silent: !!e }),
          km[t.type] &&
            this._model &&
            (this[X0]
              ? this._pendingActions.push(t)
              : ((n = e.silent),
                om.call(this, t, n),
                (t = e.flush)
                  ? this._zr.flush()
                  : !1 !== t && b.browser.weChat && this._throttledZrFlush(),
                am.call(this, n),
                sm.call(this, n))))
    }),
    (c.prototype.updateLabelLayout = function () {
      G0.trigger('series:layoutlabels', this._model, this._api, {
        updatedSeries: []
      })
    }),
    (c.prototype.appendData = function (t) {
      var e
      this._disposed
        ? this.id
        : ((e = t.seriesIndex),
          this.getModel().getSeriesByIndex(e).appendData(t),
          (this._scheduler.unfinished = !0),
          this.getZr().wakeUp())
    }),
    (c.internalField =
      ((J0 = function (t) {
        var e = t._scheduler
        e.restorePipelines(t._model),
          e.prepareStageTasks(),
          tm(t, !0),
          tm(t, !1),
          e.plan()
      }),
      (tm = function (t, r) {
        for (
          var o = t._model,
            a = t._scheduler,
            s = r ? t._componentsViews : t._chartsViews,
            l = r ? t._componentsMap : t._chartsMap,
            u = t._zr,
            h = t._api,
            e = 0;
          e < s.length;
          e++
        )
          s[e].__alive = !1
        function n (t) {
          var e,
            n = t.__requireNewView,
            i = ((t.__requireNewView = !1), '_ec_' + t.id + '_' + t.type),
            n = !n && l[i]
          n ||
            ((e = na(t.type)),
            (n = new (
              r ? oy.getClass(e.main, e.sub) : hy.getClass(e.sub)
            )()).init(o, h),
            (l[i] = n),
            s.push(n),
            u.add(n.group)),
            (t.__viewId = n.__id = i),
            (n.__alive = !0),
            (n.__model = t),
            (n.group.__ecComponentInfo = {
              mainType: t.mainType,
              index: t.componentIndex
            }),
            r || a.prepareView(n, t, o, h)
        }
        for (
          r
            ? o.eachComponent(function (t, e) {
                'series' !== t && n(e)
              })
            : o.eachSeries(n),
            e = 0;
          e < s.length;

        ) {
          var i = s[e]
          i.__alive
            ? e++
            : (r || i.renderTask.dispose(),
              u.remove(i.group),
              i.dispose(o, h),
              s.splice(e, 1),
              l[i.__id] === i && delete l[i.__id],
              (i.__id = i.group.__ecComponentInfo = null))
        }
      }),
      (em = function (p, e, d, n, t) {
        var i,
          f,
          r = p._model
        function o (t) {
          t && t.__alive && t[e] && t[e](t.__model, r, p._api, d)
        }
        r.setUpdatePayload(d),
          n
            ? (((i = {})[n + 'Id'] = d[n + 'Id']),
              (i[n + 'Index'] = d[n + 'Index']),
              (i[n + 'Name'] = d[n + 'Name']),
              (i = { mainType: n, query: i }),
              t && (i.subType = t),
              null != (t = d.excludeSeriesId) &&
                ((f = z()),
                B(Ro(t), function (t) {
                  t = Ho(t, null)
                  null != t && f.set(t, !0)
                })),
              r &&
                r.eachComponent(
                  i,
                  function (t) {
                    if (!f || null == f.get(t.id))
                      if (ou(d))
                        if (t instanceof $g) {
                          if (
                            d.type === _l &&
                            !d.notBlur &&
                            !t.get(['emphasis', 'disabled'])
                          ) {
                            var e = t,
                              n = d,
                              i = p._api,
                              r = e.seriesIndex,
                              o = e.getData(n.dataType)
                            if (o) {
                              var n = (V((n = Xo(o, n))) ? n[0] : n) || 0,
                                a = o.getItemGraphicEl(n)
                              if (!a)
                                for (var s = o.count(), l = 0; !a && l < s; )
                                  a = o.getItemGraphicEl(l++)
                              a
                                ? jl(r, (n = ul(a)).focus, n.blurScope, i)
                                : ((n = e.get(['emphasis', 'focus'])),
                                  (e = e.get(['emphasis', 'blurScope'])),
                                  null != n && jl(r, n, e, i))
                            }
                          }
                        } else
                          (n = (r = Kl(
                            t.mainType,
                            t.componentIndex,
                            d.name,
                            p._api
                          )).focusSelf),
                            (e = r.dispatchers),
                            d.type === _l &&
                              n &&
                              !d.notBlur &&
                              Zl(t.mainType, t.componentIndex, p._api),
                            e &&
                              B(e, function (t) {
                                ;(d.type === _l ? Hl : Wl)(t)
                              })
                      else
                        ru(d) &&
                          t instanceof $g &&
                          ((i = t),
                          (u = d),
                          p._api,
                          ru(u) &&
                            ((h = u.dataType),
                            V((c = Xo(i.getData(h), u))) || (c = [c]),
                            i[
                              u.type === Sl
                                ? 'toggleSelect'
                                : u.type === wl
                                ? 'select'
                                : 'unselect'
                            ](c, h)),
                          $l(t),
                          gm(p))
                    var u, h, c
                  },
                  p
                ),
              r &&
                r.eachComponent(
                  i,
                  function (t) {
                    ;(f && null != f.get(t.id)) ||
                      o(
                        p['series' === n ? '_chartsMap' : '_componentsMap'][
                          t.__viewId
                        ]
                      )
                  },
                  p
                ))
            : B([].concat(p._componentsViews).concat(p._chartsViews), o)
      }),
      (nm = {
        prepareAndUpdate: function (t) {
          J0(this),
            nm.update.call(this, t, { optionChanged: null != t.newOption })
        },
        update: function (t, e) {
          var n = this._model,
            i = this._api,
            r = this._zr,
            o = this._coordSysMgr,
            a = this._scheduler
          n &&
            (n.setUpdatePayload(t),
            a.restoreData(n, t),
            a.performSeriesTasks(n),
            o.create(n, i),
            a.performDataProcessorTasks(n, t),
            rm(this, n),
            o.update(n, i),
            bm(n),
            a.performVisualTasks(n, t),
            hm(this, n, i, t, e),
            (o = n.get('backgroundColor') || 'transparent'),
            (a = n.get('darkMode')),
            r.setBackgroundColor(o),
            null != a && 'auto' !== a && r.setDarkMode(a),
            G0.trigger('afterupdate', n, i))
        },
        updateTransform: function (n) {
          var i,
            r,
            o = this,
            a = this._model,
            s = this._api
          a &&
            (a.setUpdatePayload(n),
            (i = []),
            a.eachComponent(function (t, e) {
              'series' !== t &&
                (t = o.getViewOfComponentModel(e)) &&
                t.__alive &&
                (!t.updateTransform ||
                  ((e = t.updateTransform(e, a, s, n)) && e.update)) &&
                i.push(t)
            }),
            (r = z()),
            a.eachSeries(function (t) {
              var e = o._chartsMap[t.__viewId]
              ;(!e.updateTransform ||
                ((e = e.updateTransform(t, a, s, n)) && e.update)) &&
                r.set(t.uid, 1)
            }),
            bm(a),
            this._scheduler.performVisualTasks(a, n, {
              setDirty: !0,
              dirtyMap: r
            }),
            pm(this, a, s, n, {}, r),
            G0.trigger('afterupdate', a, s))
        },
        updateView: function (t) {
          var e = this._model
          e &&
            (e.setUpdatePayload(t),
            hy.markUpdateMethod(t, 'updateView'),
            bm(e),
            this._scheduler.performVisualTasks(e, t, { setDirty: !0 }),
            hm(this, e, this._api, t, {}),
            G0.trigger('afterupdate', e, this._api))
        },
        updateVisual: function (n) {
          var i = this,
            r = this._model
          r &&
            (r.setUpdatePayload(n),
            r.eachSeries(function (t) {
              t.getData().clearAllVisual()
            }),
            hy.markUpdateMethod(n, 'updateVisual'),
            bm(r),
            this._scheduler.performVisualTasks(r, n, {
              visualType: 'visual',
              setDirty: !0
            }),
            r.eachComponent(function (t, e) {
              'series' !== t &&
                (t = i.getViewOfComponentModel(e)) &&
                t.__alive &&
                t.updateVisual(e, r, i._api, n)
            }),
            r.eachSeries(function (t) {
              i._chartsMap[t.__viewId].updateVisual(t, r, i._api, n)
            }),
            G0.trigger('afterupdate', r, this._api))
        },
        updateLayout: function (t) {
          nm.update.call(this, t)
        }
      }),
      (im = function (t, e, n, i) {
        if (t._disposed) t.id
        else
          for (
            var r = t._model,
              o = t._coordSysMgr.getCoordinateSystems(),
              a = jo(r, n),
              s = 0;
            s < o.length;
            s++
          ) {
            var l = o[s]
            if (l[e] && null != (l = l[e](r, a, i))) return l
          }
      }),
      (rm = function (t, e) {
        var n = t._chartsMap,
          i = t._scheduler
        e.eachSeries(function (t) {
          i.updateStreamModes(t, n[t.__viewId])
        })
      }),
      (om = function (i, t) {
        var r = this,
          e = this.getModel(),
          n = i.type,
          o = i.escapeConnect,
          a = km[n],
          s = a.actionInfo,
          l = (s.update || 'update').split(':'),
          u = l.pop(),
          h = null != l[0] && na(l[0]),
          l = ((this[X0] = !0), [i]),
          c = !1
        i.batch &&
          ((c = !0),
          (l = F(i.batch, function (t) {
            return ((t = E(O({}, t), i)).batch = null), t
          })))
        var p = [],
          d = ru(i),
          f = ou(i)
        if (
          (f && ql(this._api),
          B(l, function (t) {
            var e, n
            ;((y = (y = a.action(t, r._model, r._api)) || O({}, t)).type =
              s.event || y.type),
              p.push(y),
              f
                ? ((e = (n = Zo(i)).queryOptionMap),
                  (n = n.mainTypeSpecified ? e.keys()[0] : 'series'),
                  em(r, u, t, n),
                  gm(r))
                : d
                ? (em(r, u, t, 'series'), gm(r))
                : h && em(r, u, t, h.main, h.sub)
          }),
          'none' !== u && !f && !d && !h)
        )
          try {
            this[Y0]
              ? (J0(this), nm.update.call(this, i), (this[Y0] = null))
              : nm[u].call(this, i)
          } catch (i) {
            throw ((this[X0] = !1), i)
          }
        var g,
          y = c ? { type: s.event || n, escapeConnect: o, batch: p } : p[0]
        ;(this[X0] = !1),
          t ||
            ((l = this._messageCenter).trigger(y.type, y),
            d &&
              ((c = {
                type: 'selectchanged',
                escapeConnect: o,
                selected:
                  ((g = []),
                  e.eachSeries(function (n) {
                    B(n.getAllData(), function (t) {
                      t.data
                      var t = t.type,
                        e = n.getSelectedDataIndices()
                      0 < e.length &&
                        ((e = { dataIndex: e, seriesIndex: n.seriesIndex }),
                        null != t && (e.dataType = t),
                        g.push(e))
                    })
                  }),
                  g),
                isFromClick: i.isFromClick || !1,
                fromAction: i.type,
                fromActionPayload: i
              }),
              l.trigger(c.type, c)))
      }),
      (am = function (t) {
        for (var e = this._pendingActions; e.length; ) {
          var n = e.shift()
          om.call(this, n, t)
        }
      }),
      (sm = function (t) {
        t || this.trigger('updated')
      }),
      (lm = function (e, n) {
        e.on('rendered', function (t) {
          n.trigger('rendered', t),
            !e.animation.isFinished() ||
              n[Y0] ||
              n._scheduler.unfinished ||
              n._pendingActions.length ||
              n.trigger('finished')
        })
      }),
      (um = function (t, a) {
        t.on('mouseover', function (t) {
          var e,
            n,
            i,
            r,
            o = Jy(t.target, iu)
          o &&
            ((o = o),
            (e = t),
            (t = a._api),
            (n = ul(o)),
            (i = (r = Kl(
              n.componentMainType,
              n.componentIndex,
              n.componentHighDownName,
              t
            )).dispatchers),
            (r = r.focusSelf),
            i
              ? (r && Zl(n.componentMainType, n.componentIndex, t),
                B(i, function (t) {
                  return Fl(t, e)
                }))
              : (jl(n.seriesIndex, n.focus, n.blurScope, t),
                'self' === n.focus &&
                  Zl(n.componentMainType, n.componentIndex, t),
                Fl(o, e)),
            gm(a))
        })
          .on('mouseout', function (t) {
            var e,
              n,
              i = Jy(t.target, iu)
            i &&
              ((i = i),
              (e = t),
              ql((t = a._api)),
              (n = Kl(
                (n = ul(i)).componentMainType,
                n.componentIndex,
                n.componentHighDownName,
                t
              ).dispatchers)
                ? B(n, function (t) {
                    return Vl(t, e)
                  })
                : Vl(i, e),
              gm(a))
          })
          .on('click', function (t) {
            var e,
              t = Jy(
                t.target,
                function (t) {
                  return null != ul(t).dataIndex
                },
                !0
              )
            t &&
              ((e = t.selected ? 'unselect' : 'select'),
              (t = ul(t)),
              a._api.dispatchAction({
                type: e,
                dataType: t.dataType,
                dataIndexInside: t.dataIndex,
                seriesIndex: t.seriesIndex,
                isFromClick: !0
              }))
          })
      }),
      (hm = function (t, e, n, i, r) {
        var o, a, s, l, u, h, c
        ;(u = []),
          (c = !(h = [])),
          (o = e).eachComponent(function (t, e) {
            var n = e.get('zlevel') || 0,
              i = e.get('z') || 0,
              r = e.getZLevelKey()
            ;(c = c || !!r),
              ('series' === t ? h : u).push({
                zlevel: n,
                z: i,
                idx: e.componentIndex,
                type: t,
                key: r
              })
          }),
          c &&
            (mn((l = u.concat(h)), function (t, e) {
              return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel
            }),
            B(l, function (t) {
              var e = o.getComponent(t.type, t.idx),
                n = t.zlevel,
                t = t.key
              null != a && (n = Math.max(a, n)),
                t
                  ? (n === a && t !== s && n++, (s = t))
                  : s && (n === a && n++, (s = '')),
                (a = n),
                e.setZLevel(n)
            })),
          cm(t, e, n, i, r),
          B(t._chartsViews, function (t) {
            t.__alive = !1
          }),
          pm(t, e, n, i, r),
          B(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n)
          })
      }),
      (cm = function (t, n, i, r, e, o) {
        B(o || t._componentsViews, function (t) {
          var e = t.__model
          Tm(0, t), t.render(e, n, i, r), Mm(e, t), Cm(e, t)
        })
      }),
      (pm = function (r, t, e, o, n, a) {
        var i,
          s,
          l,
          u,
          h = r._scheduler,
          c =
            ((n = O(n || {}, { updatedSeries: t.getSeries() })),
            G0.trigger('series:beforeupdate', t, e, n),
            !1)
        t.eachSeries(function (t) {
          var e,
            n = r._chartsMap[t.__viewId],
            i = ((n.__alive = !0), n.renderTask)
          h.updatePayload(i, o),
            Tm(0, n),
            a && a.get(t.uid) && i.dirty(),
            i.perform(h.getPerformArgs(i)) && (c = !0),
            (n.group.silent = !!t.get('silent')),
            (i = n),
            (e = t.get('blendMode') || null),
            i.eachRendered(function (t) {
              t.isGroup || (t.style.blend = e)
            }),
            $l(t)
        }),
          (h.unfinished = c || h.unfinished),
          G0.trigger('series:layoutlabels', t, e, n),
          G0.trigger('series:transition', t, e, n),
          t.eachSeries(function (t) {
            var e = r._chartsMap[t.__viewId]
            Mm(t, e), Cm(t, e)
          }),
          (s = t),
          (l = (i = r)._zr.storage),
          (u = 0),
          l.traverse(function (t) {
            t.isGroup || u++
          }),
          u > s.get('hoverLayerThreshold') &&
            !b.node &&
            !b.worker &&
            s.eachSeries(function (t) {
              t.preventUsingHoverLayer ||
                ((t = i._chartsMap[t.__viewId]).__alive &&
                  t.eachRendered(function (t) {
                    t.states.emphasis && (t.states.emphasis.hoverLayer = !0)
                  }))
            }),
          G0.trigger('series:afterupdate', t, e, n)
      }),
      (gm = function (t) {
        ;(t[q0] = !0), t.getZr().wakeUp()
      }),
      (ym = function (t) {
        t[q0] &&
          (t.getZr().storage.traverse(function (t) {
            qh(t) || Sm(t)
          }),
          (t[q0] = !1))
      }),
      (dm = function (n) {
        return (
          u(t, (e = Nd)),
          (t.prototype.getCoordinateSystems = function () {
            return n._coordSysMgr.getCoordinateSystems()
          }),
          (t.prototype.getComponentByElement = function (t) {
            for (; t; ) {
              var e = t.__ecComponentInfo
              if (null != e) return n._model.getComponent(e.mainType, e.index)
              t = t.parent
            }
          }),
          (t.prototype.enterEmphasis = function (t, e) {
            Hl(t, e), gm(n)
          }),
          (t.prototype.leaveEmphasis = function (t, e) {
            Wl(t, e), gm(n)
          }),
          (t.prototype.enterBlur = function (t) {
            Nl(t, Al), gm(n)
          }),
          (t.prototype.leaveBlur = function (t) {
            Gl(t), gm(n)
          }),
          (t.prototype.enterSelect = function (t) {
            Ul(t), gm(n)
          }),
          (t.prototype.leaveSelect = function (t) {
            Xl(t), gm(n)
          }),
          (t.prototype.getModel = function () {
            return n.getModel()
          }),
          (t.prototype.getViewOfComponentModel = function (t) {
            return n.getViewOfComponentModel(t)
          }),
          (t.prototype.getViewOfSeriesModel = function (t) {
            return n.getViewOfSeriesModel(t)
          }),
          new t(n)
        )
        function t () {
          return (null !== e && e.apply(this, arguments)) || this
        }
        var e
      }),
      void (fm = function (i) {
        function r (t, e) {
          for (var n = 0; n < t.length; n++) t[n][Z0] = e
        }
        B(Dm, function (t, e) {
          i._messageCenter.on(e, function (t) {
            var e, n
            !Bm[i.group] ||
              0 === i[Z0] ||
              (t && t.escapeConnect) ||
              ((e = i.makeActionFromEvent(t)),
              (n = []),
              B(Nm, function (t) {
                t !== i && t.group === i.group && n.push(t)
              }),
              r(n, 0),
              B(n, function (t) {
                1 !== t[Z0] && t.dispatchAction(e)
              }),
              r(n, 2))
          })
        })
      })))
  var xm,
    wm = c,
    s0 = wm.prototype
  function c (t, e, n) {
    var i = xm.call(this, new qy()) || this,
      t =
        ((i._chartsViews = []),
        (i._chartsMap = {}),
        (i._componentsViews = []),
        (i._componentsMap = {}),
        (i._pendingActions = []),
        (n = n || {}),
        H(e) && (e = Om[e]),
        (i._dom = t),
        (i._zr = lo(t, {
          renderer: n.renderer || 'canvas',
          devicePixelRatio: n.devicePixelRatio,
          width: n.width,
          height: n.height,
          ssr: n.ssr,
          useDirtyRect: N(n.useDirtyRect, !1),
          useCoarsePointer: N(n.useCoarsePointer, 'auto'),
          pointerSize: n.pointerSize
        }))),
      n =
        ((i._ssr = n.ssr),
        (i._throttledZrFlush = xy(pt(t.flush, t), 17)),
        (e = _(e)) && lf(e, !0),
        (i._theme = e),
        (i._locale = H((e = n.locale || rp))
          ? ((n = np[e.toUpperCase()] || {}),
            e === Jc || e === tp ? _(n) : d(_(n), _(np[ep]), !1))
          : d(_(e), _(np[ep]), !1)),
        (i._coordSysMgr = new Ed()),
        (i._api = dm(i)))
    function r (t, e) {
      return t.__prio - e.__prio
    }
    return (
      mn(Lm, r),
      mn(Am, r),
      (i._scheduler = new Ay(i, n, Am, Lm)),
      (i._messageCenter = new vm()),
      i._initEvents(),
      (i.resize = pt(i.resize, i)),
      t.animation.on('frame', i._onframe, i),
      lm(t, i),
      um(t, i),
      Dt(i),
      i
    )
  }
  function bm (t) {
    t.clearColorPalette(),
      t.eachSeries(function (t) {
        t.clearColorPalette()
      })
  }
  function Sm (t) {
    for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
      var r = n[i]
      'emphasis' !== r && 'blur' !== r && 'select' !== r && e.push(r)
    }
    t.selected && t.states.select && e.push('select'),
      t.hoverState === yl && t.states.emphasis
        ? e.push('emphasis')
        : t.hoverState === gl && t.states.blur && e.push('blur'),
      t.useStates(e)
  }
  function Mm (t, e) {
    var n, i
    t.preventAutoZ ||
      ((n = t.get('z') || 0),
      (i = t.get('zlevel') || 0),
      e.eachRendered(function (t) {
        return (
          (function t (e, n, i, r) {
            var o = e.getTextContent(),
              a = e.getTextGuideLine()
            if (e.isGroup)
              for (var s = e.childrenRef(), l = 0; l < s.length; l++)
                r = Math.max(t(s[l], n, i, r), r)
            else (e.z = n), (e.zlevel = i), (r = Math.max(e.z2, r))
            o && ((o.z = n), (o.zlevel = i), isFinite(r)) && (o.z2 = r + 2),
              a &&
                ((o = e.textGuideLineConfig),
                (a.z = n),
                (a.zlevel = i),
                isFinite(r)) &&
                (a.z2 = r + (o && o.showAbove ? 1 : -1))
            return r
          })(t, n, i, -1 / 0),
          !0
        )
      }))
  }
  function Tm (t, e) {
    e.eachRendered(function (t) {
      var e, n
      qh(t) ||
        ((e = t.getTextContent()),
        (n = t.getTextGuideLine()),
        t.stateTransition && (t.stateTransition = null),
        e && e.stateTransition && (e.stateTransition = null),
        n && n.stateTransition && (n.stateTransition = null),
        t.hasState()
          ? ((t.prevStates = t.currentStates), t.clearStates())
          : t.prevStates && (t.prevStates = null))
    })
  }
  function Cm (t, e) {
    var n = t.getModel('stateAnimation'),
      r = t.isAnimationEnabled(),
      t = n.get('duration'),
      o =
        0 < t
          ? { duration: t, delay: n.get('delay'), easing: n.get('easing') }
          : null
    e.eachRendered(function (t) {
      var e, n, i
      t.states &&
        t.states.emphasis &&
        (qh(t) ||
          (t instanceof Is &&
            (((i = pl((n = t))).normalFill = n.style.fill),
            (i.normalStroke = n.style.stroke),
            (n = n.states.select || {}),
            (i.selectFill = (n.style && n.style.fill) || null),
            (i.selectStroke = (n.style && n.style.stroke) || null)),
          t.__dirty && (i = t.prevStates) && t.useStates(i),
          r &&
            ((t.stateTransition = o),
            (n = t.getTextContent()),
            (e = t.getTextGuideLine()),
            n && (n.stateTransition = o),
            e) &&
            (e.stateTransition = o),
          t.__dirty && Sm(t)))
    })
  }
  ;(s0.on = K0('on')),
    (s0.off = K0('off')),
    (s0.one = function (i, r, t) {
      var o = this
      this.on.call(
        this,
        i,
        function t () {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
          r && r.apply && r.apply(this, e), o.off(i, t)
        },
        t
      )
    })
  var Im = [
    'click',
    'dblclick',
    'mouseover',
    'mouseout',
    'mousemove',
    'mousedown',
    'mouseup',
    'globalout',
    'contextmenu'
  ]
  var km = {},
    Dm = {},
    Am = [],
    Pm = [],
    Lm = [],
    Om = {},
    Rm = {},
    Nm = {},
    Bm = {},
    zm = +new Date(),
    Em = +new Date(),
    Fm = '_echarts_instance_'
  function Vm (t) {
    Bm[t] = !1
  }
  r0 = Vm
  function Hm (t) {
    return Nm[((e = Fm), (t = t).getAttribute ? t.getAttribute(e) : t[e])]
    var e
  }
  function Wm (t, e) {
    Om[t] = e
  }
  function Gm (t) {
    I(Pm, t) < 0 && Pm.push(t)
  }
  function Um (t, e) {
    Jm(Am, t, e, 2e3)
  }
  function Xm (t) {
    qm('afterinit', t)
  }
  function Ym (t) {
    qm('afterupdate', t)
  }
  function qm (t, e) {
    G0.on(t, e)
  }
  function jm (t, e, n) {
    S(e) && ((n = e), (e = ''))
    var i = L(t) ? t.type : [t, (t = { event: e })][0]
    ;(t.event = (t.event || i).toLowerCase()),
      (e = t.event),
      Dm[e] ||
        (Ct(j0.test(i) && j0.test(e)),
        km[i] || (km[i] = { action: n, actionInfo: t }),
        (Dm[e] = i))
  }
  function Zm (t, e) {
    Ed.register(t, e)
  }
  function Km (t, e) {
    Jm(Lm, t, e, 1e3, 'layout')
  }
  function $m (t, e) {
    Jm(Lm, t, e, 3e3, 'visual')
  }
  var Qm = []
  function Jm (t, e, n, i, r) {
    ;(S(e) || L(e)) && ((n = e), (e = i)),
      0 <= I(Qm, n) ||
        (Qm.push(n),
        ((i = Ay.wrapStageHandler(n, r)).__prio = e),
        (i.__raw = n),
        t.push(i))
  }
  function tv (t, e) {
    Rm[t] = e
  }
  function ev (t, e, n) {
    var i = U0.registerMap
    i && i(t, e, n)
  }
  function nv (t) {
    var e = (t = _(t)).type,
      n = (e || f(''), e.split(':')),
      i = (2 !== n.length && f(''), !1)
    'echarts' === n[0] && ((e = n[1]), (i = !0)),
      (t.__isBuiltIn = i),
      fg.set(e, t)
  }
  $m(2e3, ca),
    $m(4500, cc),
    $m(4500, cp),
    $m(2e3, Uc),
    $m(4500, Vc),
    $m(7e3, function (e, i) {
      e.eachRawSeries(function (t) {
        var n
        !e.isSeriesFiltered(t) &&
          ((n = t.getData()).hasItemVisual() &&
            n.each(function (t) {
              var e = n.getItemVisual(t, 'decal')
              e && (n.ensureUniqueItemVisual(t, 'style').decal = H0(e, i))
            }),
          (t = n.getVisual('decal'))) &&
          (n.getVisual('style').decal = H0(t, i))
      })
    }),
    Gm(lf),
    Um(900, function (t) {
      var i = z()
      t.eachSeries(function (t) {
        var e,
          n = t.get('stack')
        n &&
          ((n = i.get(n) || i.set(n, [])),
          (t = {
            stackResultDimension: (e = t.getData()).getCalculationInfo(
              'stackResultDimension'
            ),
            stackedOverDimension: e.getCalculationInfo('stackedOverDimension'),
            stackedDimension: e.getCalculationInfo('stackedDimension'),
            stackedByDimension: e.getCalculationInfo('stackedByDimension'),
            isStackedByIndex: e.getCalculationInfo('isStackedByIndex'),
            data: e,
            seriesModel: t
          }).stackedDimension) &&
          (t.isStackedByIndex || t.stackedByDimension) &&
          (n.length &&
            e.setCalculationInfo(
              'stackedOnSeries',
              n[n.length - 1].seriesModel
            ),
          n.push(t))
      }),
        i.each(uf)
    }),
    tv('default', function (i, r) {
      E((r = r || {}), {
        text: 'loading',
        textColor: '#000',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontFamily: 'sans-serif',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        showSpinner: !0,
        color: '#5470c6',
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0
      })
      var t = new no(),
        o = new Us({ style: { fill: r.maskColor }, zlevel: r.zlevel, z: 1e4 })
      t.add(o)
      var a,
        s = new Zs({
          style: {
            text: r.text,
            fill: r.textColor,
            fontSize: r.fontSize,
            fontWeight: r.fontWeight,
            fontStyle: r.fontStyle,
            fontFamily: r.fontFamily
          },
          zlevel: r.zlevel,
          z: 10001
        }),
        l = new Us({
          style: { fill: 'none' },
          textContent: s,
          textConfig: { position: 'right', distance: 10 },
          zlevel: r.zlevel,
          z: 10001
        })
      return (
        t.add(l),
        r.showSpinner &&
          ((a = new bh({
            shape: {
              startAngle: -Dy / 2,
              endAngle: -Dy / 2 + 0.1,
              r: r.spinnerRadius
            },
            style: {
              stroke: r.color,
              lineCap: 'round',
              lineWidth: r.lineWidth
            },
            zlevel: r.zlevel,
            z: 10001
          }))
            .animateShape(!0)
            .when(1e3, { endAngle: (3 * Dy) / 2 })
            .start('circularInOut'),
          a
            .animateShape(!0)
            .when(1e3, { startAngle: (3 * Dy) / 2 })
            .delay(300)
            .start('circularInOut'),
          t.add(a)),
        (t.resize = function () {
          var t = s.getBoundingRect().width,
            e = r.showSpinner ? r.spinnerRadius : 0,
            t =
              (i.getWidth() - 2 * e - (r.showSpinner && t ? 10 : 0) - t) / 2 -
              (r.showSpinner && t ? 0 : 5 + t / 2) +
              (r.showSpinner ? 0 : t / 2) +
              (t ? 0 : e),
            n = i.getHeight() / 2
          r.showSpinner && a.setShape({ cx: t, cy: n }),
            l.setShape({ x: t - e, y: n - e, width: 2 * e, height: 2 * e }),
            o.setShape({
              x: 0,
              y: 0,
              width: i.getWidth(),
              height: i.getHeight()
            })
        }),
        t.resize(),
        t
      )
    }),
    jm({ type: _l, event: _l, update: _l }, Vt),
    jm({ type: xl, event: xl, update: xl }, Vt),
    jm({ type: wl, event: wl, update: wl }, Vt),
    jm({ type: bl, event: bl, update: bl }, Vt),
    jm({ type: Sl, event: Sl, update: Sl }, Vt),
    Wm('light', Yc),
    Wm('dark', Wc)
  function iv (t) {
    return null == t ? 0 : t.length || 1
  }
  function rv (t) {
    return t
  }
  ;(av.prototype.add = function (t) {
    return (this._add = t), this
  }),
    (av.prototype.update = function (t) {
      return (this._update = t), this
    }),
    (av.prototype.updateManyToOne = function (t) {
      return (this._updateManyToOne = t), this
    }),
    (av.prototype.updateOneToMany = function (t) {
      return (this._updateOneToMany = t), this
    }),
    (av.prototype.updateManyToMany = function (t) {
      return (this._updateManyToMany = t), this
    }),
    (av.prototype.remove = function (t) {
      return (this._remove = t), this
    }),
    (av.prototype.execute = function () {
      this[this._diffModeMultiple ? '_executeMultiple' : '_executeOneToOne']()
    }),
    (av.prototype._executeOneToOne = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = new Array(t.length),
        r = new Array(e.length)
      this._initIndexMap(t, null, i, '_oldKeyGetter'),
        this._initIndexMap(e, n, r, '_newKeyGetter')
      for (var o = 0; o < t.length; o++) {
        var a,
          s = i[o],
          l = n[s],
          u = iv(l)
        1 < u
          ? ((a = l.shift()),
            1 === l.length && (n[s] = l[0]),
            this._update && this._update(a, o))
          : 1 === u
          ? ((n[s] = null), this._update && this._update(l, o))
          : this._remove && this._remove(o)
      }
      this._performRestAdd(r, n)
    }),
    (av.prototype._executeMultiple = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = {},
        r = [],
        o = []
      this._initIndexMap(t, n, r, '_oldKeyGetter'),
        this._initIndexMap(e, i, o, '_newKeyGetter')
      for (var a = 0; a < r.length; a++) {
        var s = r[a],
          l = n[s],
          u = i[s],
          h = iv(l),
          c = iv(u)
        if (1 < h && 1 === c)
          this._updateManyToOne && this._updateManyToOne(u, l), (i[s] = null)
        else if (1 === h && 1 < c)
          this._updateOneToMany && this._updateOneToMany(u, l), (i[s] = null)
        else if (1 === h && 1 === c)
          this._update && this._update(u, l), (i[s] = null)
        else if (1 < h && 1 < c)
          this._updateManyToMany && this._updateManyToMany(u, l), (i[s] = null)
        else if (1 < h)
          for (var p = 0; p < h; p++) this._remove && this._remove(l[p])
        else this._remove && this._remove(l)
      }
      this._performRestAdd(o, i)
    }),
    (av.prototype._performRestAdd = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = e[i],
          o = iv(r)
        if (1 < o) for (var a = 0; a < o; a++) this._add && this._add(r[a])
        else 1 === o && this._add && this._add(r)
        e[i] = null
      }
    }),
    (av.prototype._initIndexMap = function (t, e, n, i) {
      for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var a,
          s,
          l = '_ec_' + this[i](t[o], o)
        r || (n[o] = l),
          e &&
            (0 === (s = iv((a = e[l])))
              ? ((e[l] = o), r && n.push(l))
              : 1 === s
              ? (e[l] = [a, o])
              : a.push(o))
      }
    })
  var ov = av
  function av (t, e, n, i, r, o) {
    ;(this._old = t),
      (this._new = e),
      (this._oldKeyGetter = n || rv),
      (this._newKeyGetter = i || rv),
      (this.context = r),
      (this._diffModeMultiple = 'multiple' === o)
  }
  ;(lv.prototype.get = function () {
    return {
      fullDimensions: this._getFullDimensionNames(),
      encode: this._encode
    }
  }),
    (lv.prototype._getFullDimensionNames = function () {
      return (
        this._cachedDimNames ||
          (this._cachedDimNames = this._schema
            ? this._schema.makeOutputDimensionNames()
            : []),
        this._cachedDimNames
      )
    })
  var sv = lv
  function lv (t, e) {
    ;(this._encode = t), (this._schema = e)
  }
  function uv (o, t) {
    var e = {},
      a = (e.encode = {}),
      s = z(),
      l = [],
      u = [],
      h = {},
      i =
        (B(o.dimensions, function (t) {
          var e,
            n,
            i = o.getDimensionInfo(t),
            r = i.coordDim
          r &&
            ((e = i.coordDimIndex),
            (hv(a, r)[e] = t),
            i.isExtraCoord ||
              (s.set(r, 1),
              'ordinal' !== (n = i.type) && 'time' !== n && (l[0] = t),
              (hv(h, r)[e] = o.getDimensionIndex(i.name))),
            i.defaultTooltip) &&
            u.push(t),
            ad.each(function (t, e) {
              var n = hv(a, e),
                e = i.otherDims[e]
              null != e && !1 !== e && (n[e] = i.name)
            })
        }),
        []),
      r = {},
      n =
        (s.each(function (t, e) {
          var n = a[e]
          ;(r[e] = n[0]), (i = i.concat(n))
        }),
        (e.dataDimsOnCoord = i),
        (e.dataDimIndicesOnCoord = F(i, function (t) {
          return o.getDimensionInfo(t).storeDimIndex
        })),
        (e.encodeFirstDimNotExtra = r),
        a.label),
      n = (n && n.length && (l = n.slice()), a.tooltip)
    return (
      n && n.length ? (u = n.slice()) : u.length || (u = l.slice()),
      (a.defaultedLabel = l),
      (a.defaultedTooltip = u),
      (e.userOutput = new sv(h, t)),
      e
    )
  }
  function hv (t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e]
  }
  var cv = function (t) {
      ;(this.otherDims = {}), null != t && O(this, t)
    },
    pv = Yo(),
    dv = { float: 'f', int: 'i', ordinal: 'o', number: 'n', time: 't' },
    fv =
      ((gv.prototype.isDimensionOmitted = function () {
        return this._dimOmitted
      }),
      (gv.prototype._updateDimOmitted = function (t) {
        !(this._dimOmitted = t) ||
          this._dimNameMap ||
          (this._dimNameMap = vv(this.source))
      }),
      (gv.prototype.getSourceDimensionIndex = function (t) {
        return N(this._dimNameMap.get(t), -1)
      }),
      (gv.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine
        if (e) return e[t]
      }),
      (gv.prototype.makeStoreSchema = function () {
        for (
          var t = this._fullDimCount,
            e = _f(this.source),
            n = !(30 < t),
            i = '',
            r = [],
            o = 0,
            a = 0;
          o < t;
          o++
        ) {
          var s,
            l = void 0,
            u = void 0,
            h = void 0,
            c = this.dimensions[a]
          c && c.storeDimIndex === o
            ? ((l = e ? c.name : null), (u = c.type), (h = c.ordinalMeta), a++)
            : (s = this.getSourceDimension(o)) &&
              ((l = e ? s.name : null), (u = s.type)),
            r.push({ property: l, type: u, ordinalMeta: h }),
            !e ||
              null == l ||
              (c && c.isCalculationCoord) ||
              (i += n ? l.replace(/\`/g, '`1').replace(/\$/g, '`2') : l),
            (i = i + '$' + (dv[u] || 'f')),
            h && (i += h.uid),
            (i += '$')
        }
        var p = this.source
        return {
          dimensions: r,
          hash: [p.seriesLayoutBy, p.startIndex, i].join('$$')
        }
      }),
      (gv.prototype.makeOutputDimensionNames = function () {
        for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
          var i = void 0,
            r = this.dimensions[n]
          r && r.storeDimIndex === e
            ? (r.isCalculationCoord || (i = r.name), n++)
            : (r = this.getSourceDimension(e)) && (i = r.name),
            t.push(i)
        }
        return t
      }),
      (gv.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t),
          (t.isCalculationCoord = !0),
          this._fullDimCount++,
          this._updateDimOmitted(!0)
      }),
      gv)
  function gv (t) {
    ;(this.dimensions = t.dimensions),
      (this._dimOmitted = t.dimensionOmitted),
      (this.source = t.source),
      (this._fullDimCount = t.fullDimensionCount),
      this._updateDimOmitted(t.dimensionOmitted)
  }
  function yv (t) {
    return t instanceof fv
  }
  function mv (t) {
    for (var e = z(), n = 0; n < (t || []).length; n++) {
      var i = t[n],
        i = L(i) ? i.name : i
      null != i && null == e.get(i) && e.set(i, n)
    }
    return e
  }
  function vv (t) {
    var e = pv(t)
    return e.dimNameMap || (e.dimNameMap = mv(t.dimensionsDefine))
  }
  var _v,
    xv,
    wv,
    bv,
    Sv,
    Mv,
    Tv,
    Cv = L,
    Iv = F,
    kv = 'undefined' == typeof Int32Array ? Array : Int32Array,
    Dv = [
      'hasItemOption',
      '_nameList',
      '_idList',
      '_invertedIndicesMap',
      '_dimSummary',
      'userOutput',
      '_rawData',
      '_dimValueGetter',
      '_nameDimIdx',
      '_idDimIdx',
      '_nameRepeatCount'
    ],
    Av = ['_approximateExtent'],
    Pv =
      ((p.prototype.getDimension = function (t) {
        var e
        return null == (e = this._recognizeDimIndex(t))
          ? t
          : ((e = t),
            this._dimOmitted
              ? null != (t = this._dimIdxToName.get(e))
                ? t
                : (t = this._schema.getSourceDimension(e))
                ? t.name
                : void 0
              : this.dimensions[e])
      }),
      (p.prototype.getDimensionIndex = function (t) {
        var e = this._recognizeDimIndex(t)
        return null != e
          ? e
          : null == t
          ? -1
          : (e = this._getDimInfo(t))
          ? e.storeDimIndex
          : this._dimOmitted
          ? this._schema.getSourceDimensionIndex(t)
          : -1
      }),
      (p.prototype._recognizeDimIndex = function (t) {
        if (
          W(t) ||
          (null != t &&
            !isNaN(t) &&
            !this._getDimInfo(t) &&
            (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        )
          return +t
      }),
      (p.prototype._getStoreDimIndex = function (t) {
        return this.getDimensionIndex(t)
      }),
      (p.prototype.getDimensionInfo = function (t) {
        return this._getDimInfo(this.getDimension(t))
      }),
      (p.prototype._initGetDimensionInfo = function (t) {
        var e = this._dimInfos
        this._getDimInfo = t
          ? function (t) {
              return e.hasOwnProperty(t) ? e[t] : void 0
            }
          : function (t) {
              return e[t]
            }
      }),
      (p.prototype.getDimensionsOnCoord = function () {
        return this._dimSummary.dataDimsOnCoord.slice()
      }),
      (p.prototype.mapDimension = function (t, e) {
        var n = this._dimSummary
        return null == e
          ? n.encodeFirstDimNotExtra[t]
          : (n = n.encode[t])
          ? n[e]
          : null
      }),
      (p.prototype.mapDimensionsAll = function (t) {
        return (this._dimSummary.encode[t] || []).slice()
      }),
      (p.prototype.getStore = function () {
        return this._store
      }),
      (p.prototype.initData = function (t, e, n) {
        var i,
          r,
          o = this
        ;(i = t instanceof Tg ? t : i) ||
          ((r = this.dimensions),
          (t = df(t) || ut(t) ? new Sf(t, r.length) : t),
          (i = new Tg()),
          (r = Iv(r, function (t) {
            return { type: o._dimInfos[t].type, property: t }
          })),
          i.initData(t, r, n)),
          (this._store = i),
          (this._nameList = (e || []).slice()),
          (this._idList = []),
          (this._nameRepeatCount = {}),
          this._doInit(0, i.count()),
          (this._dimSummary = uv(this, this._schema)),
          (this.userOutput = this._dimSummary.userOutput)
      }),
      (p.prototype.appendData = function (t) {
        t = this._store.appendData(t)
        this._doInit(t[0], t[1])
      }),
      (p.prototype.appendValues = function (t, e) {
        var t = this._store.appendValues(t, e.length),
          n = t.start,
          i = t.end,
          r = this._shouldMakeIdFromName()
        if ((this._updateOrdinalMeta(), e))
          for (var o = n; o < i; o++)
            (this._nameList[o] = e[o - n]), r && Tv(this, o)
      }),
      (p.prototype._updateOrdinalMeta = function () {
        for (
          var t = this._store, e = this.dimensions, n = 0;
          n < e.length;
          n++
        ) {
          var i = this._dimInfos[e[n]]
          i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta)
        }
      }),
      (p.prototype._shouldMakeIdFromName = function () {
        var t = this._store.getProvider()
        return (
          null == this._idDimIdx &&
          t.getSource().sourceFormat !== cd &&
          !t.fillStorage
        )
      }),
      (p.prototype._doInit = function (t, e) {
        if (!(e <= t)) {
          var n = this._store.getProvider(),
            i = (this._updateOrdinalMeta(), this._nameList),
            r = this._idList
          if (n.getSource().sourceFormat === sd && !n.pure)
            for (var o = [], a = t; a < e; a++) {
              var s = n.getItem(a, o)
              this.hasItemOption ||
                !L((l = s)) ||
                l instanceof Array ||
                (this.hasItemOption = !0),
                s &&
                  ((l = s.name),
                  null == i[a] && null != l && (i[a] = Ho(l, null)),
                  (s = s.id),
                  null == r[a]) &&
                  null != s &&
                  (r[a] = Ho(s, null))
            }
          if (this._shouldMakeIdFromName()) for (a = t; a < e; a++) Tv(this, a)
          _v(this)
        }
        var l
      }),
      (p.prototype.getApproximateExtent = function (t) {
        return (
          this._approximateExtent[t] ||
          this._store.getDataExtent(this._getStoreDimIndex(t))
        )
      }),
      (p.prototype.setApproximateExtent = function (t, e) {
        ;(e = this.getDimension(e)), (this._approximateExtent[e] = t.slice())
      }),
      (p.prototype.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
      }),
      (p.prototype.setCalculationInfo = function (t, e) {
        Cv(t) ? O(this._calculationInfo, t) : (this._calculationInfo[t] = e)
      }),
      (p.prototype.getName = function (t) {
        var t = this.getRawIndex(t),
          e = this._nameList[t]
        return (e =
          null ==
          (e =
            null == e && null != this._nameDimIdx
              ? wv(this, this._nameDimIdx, t)
              : e)
            ? ''
            : e)
      }),
      (p.prototype._getCategory = function (t, e) {
        ;(e = this._store.get(t, e)), (t = this._store.getOrdinalMeta(t))
        return t ? t.categories[e] : e
      }),
      (p.prototype.getId = function (t) {
        return xv(this, this.getRawIndex(t))
      }),
      (p.prototype.count = function () {
        return this._store.count()
      }),
      (p.prototype.get = function (t, e) {
        var n = this._store,
          t = this._dimInfos[t]
        if (t) return n.get(t.storeDimIndex, e)
      }),
      (p.prototype.getByRawIndex = function (t, e) {
        var n = this._store,
          t = this._dimInfos[t]
        if (t) return n.getByRawIndex(t.storeDimIndex, e)
      }),
      (p.prototype.getIndices = function () {
        return this._store.getIndices()
      }),
      (p.prototype.getDataExtent = function (t) {
        return this._store.getDataExtent(this._getStoreDimIndex(t))
      }),
      (p.prototype.getSum = function (t) {
        return this._store.getSum(this._getStoreDimIndex(t))
      }),
      (p.prototype.getMedian = function (t) {
        return this._store.getMedian(this._getStoreDimIndex(t))
      }),
      (p.prototype.getValues = function (t, e) {
        var n = this,
          i = this._store
        return V(t)
          ? i.getValues(
              Iv(t, function (t) {
                return n._getStoreDimIndex(t)
              }),
              e
            )
          : i.getValues(t)
      }),
      (p.prototype.hasValue = function (t) {
        for (
          var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length;
          n < i;
          n++
        )
          if (isNaN(this._store.get(e[n], t))) return !1
        return !0
      }),
      (p.prototype.indexOfName = function (t) {
        for (var e = 0, n = this._store.count(); e < n; e++)
          if (this.getName(e) === t) return e
        return -1
      }),
      (p.prototype.getRawIndex = function (t) {
        return this._store.getRawIndex(t)
      }),
      (p.prototype.indexOfRawIndex = function (t) {
        return this._store.indexOfRawIndex(t)
      }),
      (p.prototype.rawIndexOf = function (t, e) {
        t = (t && this._invertedIndicesMap[t])[e]
        return null == t || isNaN(t) ? -1 : t
      }),
      (p.prototype.indicesOfNearest = function (t, e, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n)
      }),
      (p.prototype.each = function (t, e, n) {
        S(t) && ((n = e), (e = t), (t = []))
        ;(n = n || this), (t = Iv(bv(t), this._getStoreDimIndex, this))
        this._store.each(t, n ? pt(e, n) : e)
      }),
      (p.prototype.filterSelf = function (t, e, n) {
        S(t) && ((n = e), (e = t), (t = []))
        ;(n = n || this), (t = Iv(bv(t), this._getStoreDimIndex, this))
        return (this._store = this._store.filter(t, n ? pt(e, n) : e)), this
      }),
      (p.prototype.selectRange = function (n) {
        var i = this,
          r = {}
        return (
          B(R(n), function (t) {
            var e = i._getStoreDimIndex(t)
            r[e] = n[t]
          }),
          (this._store = this._store.selectRange(r)),
          this
        )
      }),
      (p.prototype.mapArray = function (t, e, n) {
        S(t) && ((n = e), (e = t), (t = []))
        var i = []
        return (
          this.each(
            t,
            function () {
              i.push(e && e.apply(this, arguments))
            },
            (n = n || this)
          ),
          i
        )
      }),
      (p.prototype.map = function (t, e, n, i) {
        ;(n = n || i || this),
          (i = Iv(bv(t), this._getStoreDimIndex, this)),
          (t = Mv(this))
        return (t._store = this._store.map(i, n ? pt(e, n) : e)), t
      }),
      (p.prototype.modify = function (t, e, n, i) {
        ;(n = n || i || this), (i = Iv(bv(t), this._getStoreDimIndex, this))
        this._store.modify(i, n ? pt(e, n) : e)
      }),
      (p.prototype.downSample = function (t, e, n, i) {
        var r = Mv(this)
        return (
          (r._store = this._store.downSample(
            this._getStoreDimIndex(t),
            e,
            n,
            i
          )),
          r
        )
      }),
      (p.prototype.lttbDownSample = function (t, e) {
        var n = Mv(this)
        return (
          (n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e)),
          n
        )
      }),
      (p.prototype.getRawDataItem = function (t) {
        return this._store.getRawDataItem(t)
      }),
      (p.prototype.getItemModel = function (t) {
        var e = this.hostModel,
          t = this.getRawDataItem(t)
        return new Zc(t, e, e && e.ecModel)
      }),
      (p.prototype.diff = function (e) {
        var n = this
        return new ov(
          e ? e.getStore().getIndices() : [],
          this.getStore().getIndices(),
          function (t) {
            return xv(e, t)
          },
          function (t) {
            return xv(n, t)
          }
        )
      }),
      (p.prototype.getVisual = function (t) {
        var e = this._visual
        return e && e[t]
      }),
      (p.prototype.setVisual = function (t, e) {
        ;(this._visual = this._visual || {}),
          Cv(t) ? O(this._visual, t) : (this._visual[t] = e)
      }),
      (p.prototype.getItemVisual = function (t, e) {
        ;(t = this._itemVisuals[t]), (t = t && t[e])
        return null == t ? this.getVisual(e) : t
      }),
      (p.prototype.hasItemVisual = function () {
        return 0 < this._itemVisuals.length
      }),
      (p.prototype.ensureUniqueItemVisual = function (t, e) {
        var n = this._itemVisuals,
          i = n[t],
          n = (i = i || (n[t] = {}))[e]
        return (
          null == n &&
            (V((n = this.getVisual(e)))
              ? (n = n.slice())
              : Cv(n) && (n = O({}, n)),
            (i[e] = n)),
          n
        )
      }),
      (p.prototype.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {}
        ;(this._itemVisuals[t] = i), Cv(e) ? O(i, e) : (i[e] = n)
      }),
      (p.prototype.clearAllVisual = function () {
        ;(this._visual = {}), (this._itemVisuals = [])
      }),
      (p.prototype.setLayout = function (t, e) {
        Cv(t) ? O(this._layout, t) : (this._layout[t] = e)
      }),
      (p.prototype.getLayout = function (t) {
        return this._layout[t]
      }),
      (p.prototype.getItemLayout = function (t) {
        return this._itemLayouts[t]
      }),
      (p.prototype.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? O(this._itemLayouts[t] || {}, e) : e
      }),
      (p.prototype.clearItemLayouts = function () {
        this._itemLayouts.length = 0
      }),
      (p.prototype.setItemGraphicEl = function (t, e) {
        var n,
          i,
          r,
          o,
          a = this.hostModel && this.hostModel.seriesIndex
        ;(n = a),
          (i = this.dataType),
          (r = t),
          (a = e) &&
            (((o = ul(a)).dataIndex = r),
            (o.dataType = i),
            (o.seriesIndex = n),
            'group' === a.type) &&
            a.traverse(function (t) {
              t = ul(t)
              ;(t.seriesIndex = n), (t.dataIndex = r), (t.dataType = i)
            }),
          (this._graphicEls[t] = e)
      }),
      (p.prototype.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
      }),
      (p.prototype.eachItemGraphicEl = function (n, i) {
        B(this._graphicEls, function (t, e) {
          t && n && n.call(i, t, e)
        })
      }),
      (p.prototype.cloneShallow = function (t) {
        return (
          (t =
            t ||
            new p(
              this._schema || Iv(this.dimensions, this._getDimInfo, this),
              this.hostModel
            )),
          Sv(t, this),
          (t._store = this._store),
          t
        )
      }),
      (p.prototype.wrapMethod = function (t, e) {
        var n = this[t]
        S(n) &&
          ((this.__wrappedMethods = this.__wrappedMethods || []),
          this.__wrappedMethods.push(t),
          (this[t] = function () {
            var t = n.apply(this, arguments)
            return e.apply(this, [t].concat(Mt(arguments)))
          }))
      }),
      (p.internalField =
        ((_v = function (a) {
          var s = a._invertedIndicesMap
          B(s, function (t, e) {
            var n = a._dimInfos[e],
              i = n.ordinalMeta,
              r = a._store
            if (i) {
              t = s[e] = new kv(i.categories.length)
              for (var o = 0; o < t.length; o++) t[o] = -1
              for (o = 0; o < r.count(); o++) t[r.get(n.storeDimIndex, o)] = o
            }
          })
        }),
        (wv = function (t, e, n) {
          return Ho(t._getCategory(e, n), null)
        }),
        (xv = function (t, e) {
          var n = t._idList[e]
          return (n =
            null ==
            (n = null == n && null != t._idDimIdx ? wv(t, t._idDimIdx, e) : n)
              ? 'e\0\0' + e
              : n)
        }),
        (bv = function (t) {
          return (t = V(t) ? t : null != t ? [t] : [])
        }),
        (Mv = function (t) {
          var e = new p(
            t._schema || Iv(t.dimensions, t._getDimInfo, t),
            t.hostModel
          )
          return Sv(e, t), e
        }),
        (Sv = function (e, n) {
          B(Dv.concat(n.__wrappedMethods || []), function (t) {
            n.hasOwnProperty(t) && (e[t] = n[t])
          }),
            (e.__wrappedMethods = n.__wrappedMethods),
            B(Av, function (t) {
              e[t] = _(n[t])
            }),
            (e._calculationInfo = O({}, n._calculationInfo))
        }),
        void (Tv = function (t, e) {
          var n = t._nameList,
            i = t._idList,
            r = t._nameDimIdx,
            o = t._idDimIdx,
            a = n[e],
            s = i[e]
          null == a && null != r && (n[e] = a = wv(t, r, e)),
            null == s && null != o && (i[e] = s = wv(t, o, e)),
            null == s &&
              null != a &&
              ((s = a),
              1 < (r = (n = t._nameRepeatCount)[a] = (n[a] || 0) + 1) &&
                (s += '__ec__' + r),
              (i[e] = s))
        }))),
      p)
  function p (t, e) {
    ;(this.type = 'list'),
      (this._dimOmitted = !1),
      (this._nameList = []),
      (this._idList = []),
      (this._visual = {}),
      (this._layout = {}),
      (this._itemVisuals = []),
      (this._itemLayouts = []),
      (this._graphicEls = []),
      (this._approximateExtent = {}),
      (this._calculationInfo = {}),
      (this.hasItemOption = !1),
      (this.TRANSFERABLE_METHODS = [
        'cloneShallow',
        'downSample',
        'lttbDownSample',
        'map'
      ]),
      (this.CHANGABLE_METHODS = ['filterSelf', 'selectRange'])
    var n = !(this.DOWNSAMPLE_METHODS = ['downSample', 'lttbDownSample'])
    yv(t)
      ? ((r = t.dimensions),
        (this._dimOmitted = t.isDimensionOmitted()),
        (this._schema = t))
      : ((n = !0), (r = t))
    for (
      var i, r = r || ['x', 'y'], o = {}, a = [], s = {}, l = !1, u = {}, h = 0;
      h < r.length;
      h++
    ) {
      var c = r[h],
        c = H(c) ? new cv({ name: c }) : c instanceof cv ? c : new cv(c),
        p = c.name,
        d =
          ((c.type = c.type || 'float'),
          c.coordDim || ((c.coordDim = p), (c.coordDimIndex = 0)),
          (c.otherDims = c.otherDims || {}))
      a.push(p),
        null != u[p] && (l = !0),
        (o[p] = c).createInvertedIndices && (s[p] = []),
        0 === d.itemName && (this._nameDimIdx = h),
        0 === d.itemId && (this._idDimIdx = h),
        n && (c.storeDimIndex = h)
    }
    ;(this.dimensions = a),
      (this._dimInfos = o),
      this._initGetDimensionInfo(l),
      (this.hostModel = e),
      (this._invertedIndicesMap = s),
      this._dimOmitted &&
        ((i = this._dimIdxToName = z()),
        B(a, function (t) {
          i.set(o[t].storeDimIndex, t)
        }))
  }
  function Lv (t, e) {
    df(t) || (t = gf(t))
    for (
      var n,
        i,
        r = (e = e || {}).coordDimensions || [],
        o = e.dimensionsDefine || t.dimensionsDefine || [],
        a = z(),
        s = [],
        l =
          ((u = t),
          (n = r),
          (p = e.dimensionsCount),
          (i = Math.max(
            u.dimensionsDetectedCount || 1,
            n.length,
            o.length,
            p || 0
          )),
          B(n, function (t) {
            L(t) && (t = t.dimsDef) && (i = Math.max(i, t.length))
          }),
          i),
        u = e.canOmitUnusedDimensions && 30 < l,
        h = o === t.dimensionsDefine,
        c = h ? vv(t) : mv(o),
        p = e.encodeDefine,
        d = z((p = !p && e.encodeDefaulter ? e.encodeDefaulter(t, l) : p)),
        f = new xg(l),
        g = 0;
      g < f.length;
      g++
    )
      f[g] = -1
    function y (t) {
      var e,
        n,
        i,
        r = f[t]
      return r < 0
        ? ((e = L((e = o[t])) ? e : { name: e }),
          (n = new cv()),
          null != (i = e.name) &&
            null != c.get(i) &&
            (n.name = n.displayName = i),
          null != e.type && (n.type = e.type),
          null != e.displayName && (n.displayName = e.displayName),
          (f[t] = s.length),
          (n.storeDimIndex = t),
          s.push(n),
          n)
        : s[r]
    }
    if (!u) for (g = 0; g < l; g++) y(g)
    d.each(function (t, n) {
      var i,
        t = Ro(t).slice()
      1 === t.length && !H(t[0]) && t[0] < 0
        ? d.set(n, !1)
        : ((i = d.set(n, [])),
          B(t, function (t, e) {
            t = H(t) ? c.get(t) : t
            null != t && t < l && v(y((i[e] = t)), n, e)
          }))
    })
    var m = 0
    function v (t, e, n) {
      null != ad.get(e)
        ? (t.otherDims[e] = n)
        : ((t.coordDim = e), (t.coordDimIndex = n), a.set(e, !0))
    }
    B(r, function (t) {
      H(t)
        ? ((o = t), (r = {}))
        : ((o = (r = t).name),
          (t = r.ordinalMeta),
          (r.ordinalMeta = null),
          ((r = O({}, r)).ordinalMeta = t),
          (n = r.dimsDef),
          (i = r.otherDims),
          (r.name =
            r.coordDim =
            r.coordDimIndex =
            r.dimsDef =
            r.otherDims =
              null))
      var n,
        i,
        r,
        o,
        e = d.get(o)
      if (!1 !== e) {
        if (!(e = Ro(e)).length)
          for (var a = 0; a < ((n && n.length) || 1); a++) {
            for (; m < l && null != y(m).coordDim; ) m++
            m < l && e.push(m++)
          }
        B(e, function (t, e) {
          t = y(t)
          h && null != r.type && (t.type = r.type),
            v(E(t, r), o, e),
            null == t.name &&
              n &&
              (L((e = n[e])) || (e = { name: e }),
              (t.name = t.displayName = e.name),
              (t.defaultTooltip = e.defaultTooltip)),
            i && E(t.otherDims, i)
        })
      }
    })
    var _ = e.generateCoord,
      x = null != (w = e.generateCoordCount),
      w = _ ? w || 1 : 0,
      b = _ || 'value'
    function S (t) {
      null == t.name && (t.name = t.coordDim)
    }
    if (u)
      B(s, function (t) {
        S(t)
      }),
        s.sort(function (t, e) {
          return t.storeDimIndex - e.storeDimIndex
        })
    else
      for (var M = 0; M < l; M++) {
        var T = y(M)
        null == T.coordDim &&
          ((T.coordDim = (function (t, e, n) {
            if (n || e.hasKey(t)) {
              for (var i = 0; e.hasKey(t + i); ) i++
              t += i
            }
            return e.set(t, !0), t
          })(b, a, x)),
          (T.coordDimIndex = 0),
          (!_ || w <= 0) && (T.isExtraCoord = !0),
          w--),
          S(T),
          null != T.type ||
            (xd(t, M) !== gd.Must &&
              (!T.isExtraCoord ||
                (null == T.otherDims.itemName &&
                  null == T.otherDims.seriesName))) ||
            (T.type = 'ordinal')
      }
    for (var C = s, I = z(), k = 0; k < C.length; k++) {
      var D = C[k],
        A = D.name,
        P = I.get(A) || 0
      0 < P && (D.name = A + (P - 1)), P++, I.set(A, P)
    }
    return new fv({
      source: t,
      dimensions: s,
      fullDimensionCount: l,
      dimensionOmitted: u
    })
  }
  function Ov (t) {
    ;(this.coordSysDims = []),
      (this.axisMap = z()),
      (this.categoryAxisMap = z()),
      (this.coordSysName = t)
  }
  var Rv = {
    cartesian2d: function (t, e, n, i) {
      var r = t.getReferringComponents('xAxis', Ko).models[0],
        t = t.getReferringComponents('yAxis', Ko).models[0]
      ;(e.coordSysDims = ['x', 'y']),
        n.set('x', r),
        n.set('y', t),
        Nv(r) && (i.set('x', r), (e.firstCategoryDimIndex = 0)),
        Nv(t) &&
          (i.set('y', t), null == e.firstCategoryDimIndex) &&
          (e.firstCategoryDimIndex = 1)
    },
    singleAxis: function (t, e, n, i) {
      t = t.getReferringComponents('singleAxis', Ko).models[0]
      ;(e.coordSysDims = ['single']),
        n.set('single', t),
        Nv(t) && (i.set('single', t), (e.firstCategoryDimIndex = 0))
    },
    polar: function (t, e, n, i) {
      var t = t.getReferringComponents('polar', Ko).models[0],
        r = t.findAxisModel('radiusAxis'),
        t = t.findAxisModel('angleAxis')
      ;(e.coordSysDims = ['radius', 'angle']),
        n.set('radius', r),
        n.set('angle', t),
        Nv(r) && (i.set('radius', r), (e.firstCategoryDimIndex = 0)),
        Nv(t) &&
          (i.set('angle', t), null == e.firstCategoryDimIndex) &&
          (e.firstCategoryDimIndex = 1)
    },
    geo: function (t, e, n, i) {
      e.coordSysDims = ['lng', 'lat']
    },
    parallel: function (t, i, r, o) {
      var a = t.ecModel,
        t = a.getComponent('parallel', t.get('parallelIndex')),
        s = (i.coordSysDims = t.dimensions.slice())
      B(t.parallelAxisIndex, function (t, e) {
        var t = a.getComponent('parallelAxis', t),
          n = s[e]
        r.set(n, t),
          Nv(t) &&
            (o.set(n, t), null == i.firstCategoryDimIndex) &&
            (i.firstCategoryDimIndex = e)
      })
    }
  }
  function Nv (t) {
    return 'category' === t.get('type')
  }
  function Bv (t, e, n) {
    var i,
      r,
      o,
      a = (n = n || {}).byIndex,
      s = n.stackedCoordDimension
    yv(e.schema) ? ((r = e.schema), (i = r.dimensions), (o = e.store)) : (i = e)
    var l,
      u,
      h,
      c,
      p,
      d,
      f = !(!t || !t.get('stack'))
    return (
      B(i, function (t, e) {
        H(t) && (i[e] = t = { name: t }),
          f &&
            !t.isExtraCoord &&
            (a || l || !t.ordinalMeta || (l = t),
            u ||
              'ordinal' === t.type ||
              'time' === t.type ||
              (s && s !== t.coordDim) ||
              (u = t))
      }),
      !u || a || l || (a = !0),
      u &&
        ((h = '__\0ecstackresult_' + t.id),
        (c = '__\0ecstackedover_' + t.id),
        l && (l.createInvertedIndices = !0),
        (p = u.coordDim),
        (n = u.type),
        (d = 0),
        B(i, function (t) {
          t.coordDim === p && d++
        }),
        (e = {
          name: h,
          coordDim: p,
          coordDimIndex: d,
          type: n,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length
        }),
        (t = {
          name: c,
          coordDim: c,
          coordDimIndex: d + 1,
          type: n,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length + 1
        }),
        r
          ? (o &&
              ((e.storeDimIndex = o.ensureCalculationDimension(c, n)),
              (t.storeDimIndex = o.ensureCalculationDimension(h, n))),
            r.appendCalculationDimension(e),
            r.appendCalculationDimension(t))
          : (i.push(e), i.push(t))),
      {
        stackedDimension: u && u.name,
        stackedByDimension: l && l.name,
        isStackedByIndex: a,
        stackedOverDimension: c,
        stackResultDimension: h
      }
    )
  }
  function zv (t, e) {
    return !!e && e === t.getCalculationInfo('stackedDimension')
  }
  function Ev (t, e) {
    return zv(t, e) ? t.getCalculationInfo('stackResultDimension') : e
  }
  function Fv (t, e, n) {
    n = n || {}
    var i,
      r,
      o,
      a,
      s,
      l,
      u = e.getSourceManager(),
      h = !1,
      t =
        (t
          ? ((h = !0), (i = gf(t)))
          : (h = (i = u.getSource()).sourceFormat === sd),
        (function (t) {
          var e = t.get('coordinateSystem'),
            n = new Ov(e)
          if ((e = Rv[e])) return e(t, n, n.axisMap, n.categoryAxisMap), n
        })(e)),
      c =
        ((l = t),
        (c = (c = e).get('coordinateSystem')),
        (c = Ed.get(c)),
        (p = (p =
          l && l.coordSysDims
            ? F(l.coordSysDims, function (t) {
                var e = { name: t },
                  t = l.axisMap.get(t)
                return (
                  t &&
                    ((t = t.get('type')),
                    (e.type =
                      'category' === (t = t)
                        ? 'ordinal'
                        : 'time' === t
                        ? 'time'
                        : 'float')),
                  e
                )
              })
            : p) ||
          (c &&
            (c.getDimensionsInfo
              ? c.getDimensionsInfo()
              : c.dimensions.slice())) || ['x', 'y'])),
      p = n.useEncodeDefaulter,
      p = S(p) ? p : p ? dt(md, c, e) : null,
      c = {
        coordDimensions: c,
        generateCoord: n.generateCoord,
        encodeDefine: e.getEncode(),
        encodeDefaulter: p,
        canOmitUnusedDimensions: !h
      },
      p = Lv(i, c),
      d =
        ((c = p.dimensions),
        (r = n.createInvertedIndices),
        (o = t) &&
          B(c, function (t, e) {
            var n = t.coordDim,
              n = o.categoryAxisMap.get(n)
            n &&
              (null == a && (a = e), (t.ordinalMeta = n.getOrdinalMeta()), r) &&
              (t.createInvertedIndices = !0),
              null != t.otherDims.itemName && (s = !0)
          }),
        s || null == a || (c[a].otherDims.itemName = 0),
        a),
      n = h ? null : u.getSharedDataStore(p),
      t = Bv(e, { schema: p, store: n }),
      c = new Pv(p, e),
      p =
        (c.setCalculationInfo(t),
        null == d ||
        (u = i).sourceFormat !== sd ||
        V(
          zo(
            (function (t) {
              for (var e = 0; e < t.length && null == t[e]; ) e++
              return t[e]
            })(u.data || [])
          )
        )
          ? null
          : function (t, e, n, i) {
              return i === d ? n : this.defaultDimValueGetter(t, e, n, i)
            })
    return (c.hasItemOption = !1), c.initData(h ? i : n, null, p), c
  }
  ;(Hv.prototype.getSetting = function (t) {
    return this._setting[t]
  }),
    (Hv.prototype.unionExtent = function (t) {
      var e = this._extent
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }),
    (Hv.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e))
    }),
    (Hv.prototype.getExtent = function () {
      return this._extent.slice()
    }),
    (Hv.prototype.setExtent = function (t, e) {
      var n = this._extent
      isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }),
    (Hv.prototype.isInExtentRange = function (t) {
      return this._extent[0] <= t && this._extent[1] >= t
    }),
    (Hv.prototype.isBlank = function () {
      return this._isBlank
    }),
    (Hv.prototype.setBlank = function (t) {
      this._isBlank = t
    })
  var Vv = Hv
  function Hv (t) {
    ;(this._setting = t || {}), (this._extent = [1 / 0, -1 / 0])
  }
  la(Vv)
  var Wv = 0,
    Gv =
      ((Uv.createByAxisModel = function (t) {
        var t = t.option,
          e = t.data,
          e = e && F(e, Xv)
        return new Uv({
          categories: e,
          needCollect: !e,
          deduplication: !1 !== t.dedplication
        })
      }),
      (Uv.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t)
      }),
      (Uv.prototype.parseAndCollect = function (t) {
        var e,
          n,
          i = this._needCollect
        return H(t) || i
          ? (i && !this._deduplication
              ? ((e = this.categories.length), (this.categories[e] = t))
              : null == (e = (n = this._getOrCreateMap()).get(t)) &&
                (i
                  ? ((e = this.categories.length),
                    (this.categories[e] = t),
                    n.set(t, e))
                  : (e = NaN)),
            e)
          : t
      }),
      (Uv.prototype._getOrCreateMap = function () {
        return this._map || (this._map = z(this.categories))
      }),
      Uv)
  function Uv (t) {
    ;(this.categories = t.categories || []),
      (this._needCollect = t.needCollect),
      (this._deduplication = t.deduplication),
      (this.uid = ++Wv)
  }
  function Xv (t) {
    return L(t) && null != t.value ? t.value : t + ''
  }
  function Yv (t) {
    return 'interval' === t.type || 'log' === t.type
  }
  function qv (t, e, n, i) {
    var r = {},
      o = t[1] - t[0],
      o = (r.interval = Co(o / e, !0)),
      e =
        (null != n && o < n && (o = r.interval = n),
        null != i && i < o && (o = r.interval = i),
        (r.intervalPrecision = Zv(o)))
    return (
      (n = r.niceTickExtent =
        [go(Math.ceil(t[0] / o) * o, e), go(Math.floor(t[1] / o) * o, e)]),
      (i = t),
      isFinite(n[0]) || (n[0] = i[0]),
      isFinite(n[1]) || (n[1] = i[1]),
      Kv(n, 0, i),
      Kv(n, 1, i),
      n[0] > n[1] && (n[0] = n[1]),
      r
    )
  }
  function jv (t) {
    var e = Math.pow(10, To(t)),
      t = t / e
    return (
      t ? (2 === t ? (t = 3) : 3 === t ? (t = 5) : (t *= 2)) : (t = 1),
      go(t * e)
    )
  }
  function Zv (t) {
    return yo(t) + 2
  }
  function Kv (t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0])
  }
  function $v (t, e) {
    return t >= e[0] && t <= e[1]
  }
  function Qv (t, e) {
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0])
  }
  function Jv (t, e) {
    return t * (e[1] - e[0]) + e[0]
  }
  u(n_, (t_ = Vv)),
    (n_.prototype.parse = function (t) {
      return null == t
        ? NaN
        : H(t)
        ? this._ordinalMeta.getOrdinal(t)
        : Math.round(t)
    }),
    (n_.prototype.contain = function (t) {
      return (
        $v((t = this.parse(t)), this._extent) &&
        null != this._ordinalMeta.categories[t]
      )
    }),
    (n_.prototype.normalize = function (t) {
      return Qv((t = this._getTickNumber(this.parse(t))), this._extent)
    }),
    (n_.prototype.scale = function (t) {
      return (t = Math.round(Jv(t, this._extent))), this.getRawOrdinalNumber(t)
    }),
    (n_.prototype.getTicks = function () {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1]; )
        t.push({ value: n }), n++
      return t
    }),
    (n_.prototype.getMinorTicks = function (t) {}),
    (n_.prototype.setSortInfo = function (t) {
      if (null != t) {
        for (
          var e = t.ordinalNumbers,
            n = (this._ordinalNumbersByTick = []),
            i = (this._ticksByOrdinalNumber = []),
            r = 0,
            o = this._ordinalMeta.categories.length,
            a = Math.min(o, e.length);
          r < a;
          ++r
        ) {
          var s = e[r]
          i[(n[r] = s)] = r
        }
        for (var l = 0; r < o; ++r) {
          for (; null != i[l]; ) l++
          n.push(l), (i[l] = r)
        }
      } else this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null
    }),
    (n_.prototype._getTickNumber = function (t) {
      var e = this._ticksByOrdinalNumber
      return e && 0 <= t && t < e.length ? e[t] : t
    }),
    (n_.prototype.getRawOrdinalNumber = function (t) {
      var e = this._ordinalNumbersByTick
      return e && 0 <= t && t < e.length ? e[t] : t
    }),
    (n_.prototype.getLabel = function (t) {
      if (!this.isBlank())
        return (
          (t = this.getRawOrdinalNumber(t.value)),
          null == (t = this._ordinalMeta.categories[t]) ? '' : t + ''
        )
    }),
    (n_.prototype.count = function () {
      return this._extent[1] - this._extent[0] + 1
    }),
    (n_.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e))
    }),
    (n_.prototype.isInExtentRange = function (t) {
      return (
        (t = this._getTickNumber(t)),
        this._extent[0] <= t && this._extent[1] >= t
      )
    }),
    (n_.prototype.getOrdinalMeta = function () {
      return this._ordinalMeta
    }),
    (n_.prototype.calcNiceTicks = function () {}),
    (n_.prototype.calcNiceExtent = function () {}),
    (n_.type = 'ordinal')
  var t_,
    e_ = n_
  function n_ (t) {
    var t = t_.call(this, t) || this,
      e = ((t.type = 'ordinal'), t.getSetting('ordinalMeta'))
    return (
      V((e = e || new Gv({}))) &&
        (e = new Gv({
          categories: F(e, function (t) {
            return L(t) ? t.value : t
          })
        })),
      (t._ordinalMeta = e),
      (t._extent = t.getSetting('extent') || [0, e.categories.length - 1]),
      t
    )
  }
  Vv.registerClass(e_)
  var i_,
    r_ = go,
    o_ =
      (u(a_, (i_ = Vv)),
      (a_.prototype.parse = function (t) {
        return t
      }),
      (a_.prototype.contain = function (t) {
        return $v(t, this._extent)
      }),
      (a_.prototype.normalize = function (t) {
        return Qv(t, this._extent)
      }),
      (a_.prototype.scale = function (t) {
        return Jv(t, this._extent)
      }),
      (a_.prototype.setExtent = function (t, e) {
        var n = this._extent
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
      }),
      (a_.prototype.unionExtent = function (t) {
        var e = this._extent
        t[0] < e[0] && (e[0] = t[0]),
          t[1] > e[1] && (e[1] = t[1]),
          this.setExtent(e[0], e[1])
      }),
      (a_.prototype.getInterval = function () {
        return this._interval
      }),
      (a_.prototype.setInterval = function (t) {
        ;(this._interval = t),
          (this._niceExtent = this._extent.slice()),
          (this._intervalPrecision = Zv(t))
      }),
      (a_.prototype.getTicks = function (t) {
        var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          o = []
        if (e) {
          n[0] < i[0] &&
            o.push(t ? { value: r_(i[0] - e, r) } : { value: n[0] })
          for (
            var a = i[0];
            a <= i[1] &&
            (o.push({ value: a }),
            (a = r_(a + e, r)) !== o[o.length - 1].value);

          )
            if (1e4 < o.length) return []
          var s = o.length ? o[o.length - 1].value : i[1]
          n[1] > s && o.push(t ? { value: r_(s + e, r) } : { value: n[1] })
        }
        return o
      }),
      (a_.prototype.getMinorTicks = function (t) {
        for (
          var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1;
          r < e.length;
          r++
        ) {
          for (
            var o = e[r],
              a = e[r - 1],
              s = 0,
              l = [],
              u = (o.value - a.value) / t;
            s < t - 1;

          ) {
            var h = r_(a.value + (s + 1) * u)
            h > i[0] && h < i[1] && l.push(h), s++
          }
          n.push(l)
        }
        return n
      }),
      (a_.prototype.getLabel = function (t, e) {
        return null == t
          ? ''
          : (null == (e = e && e.precision)
              ? (e = yo(t.value) || 0)
              : 'auto' === e && (e = this._intervalPrecision),
            Op(r_(t.value, e, !0)))
      }),
      (a_.prototype.calcNiceTicks = function (t, e, n) {
        t = t || 5
        var i = this._extent,
          r = i[1] - i[0]
        isFinite(r) &&
          (r < 0 && i.reverse(),
          (r = qv(i, t, e, n)),
          (this._intervalPrecision = r.intervalPrecision),
          (this._interval = r.interval),
          (this._niceExtent = r.niceTickExtent))
      }),
      (a_.prototype.calcNiceExtent = function (t) {
        var e = this._extent,
          n =
            (e[0] === e[1] &&
              (0 !== e[0]
                ? ((n = Math.abs(e[0])),
                  t.fixMax || (e[1] += n / 2),
                  (e[0] -= n / 2))
                : (e[1] = 1)),
            e[1] - e[0]),
          n =
            (isFinite(n) || ((e[0] = 0), (e[1] = 1)),
            this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval),
            this._interval)
        t.fixMin || (e[0] = r_(Math.floor(e[0] / n) * n)),
          t.fixMax || (e[1] = r_(Math.ceil(e[1] / n) * n))
      }),
      (a_.prototype.setNiceExtent = function (t, e) {
        this._niceExtent = [t, e]
      }),
      (a_.type = 'interval'),
      a_)
  function a_ () {
    var t = (null !== i_ && i_.apply(this, arguments)) || this
    return (
      (t.type = 'interval'), (t._interval = 0), (t._intervalPrecision = 2), t
    )
  }
  Vv.registerClass(o_)
  function s_ (t) {
    return t.get('stack') || '__ec_stack_' + t.seriesIndex
  }
  function l_ (t) {
    return t.dim + t.index
  }
  function u_ (t, e) {
    var n = []
    return (
      e.eachSeriesByType(t, function (t) {
        var e
        ;(e = t).coordinateSystem &&
          'cartesian2d' === e.coordinateSystem.type &&
          n.push(t)
      }),
      n
    )
  }
  function h_ (t) {
    var a,
      d,
      u = (function (t) {
        var e,
          l = {},
          n =
            (B(t, function (t) {
              var e = t.coordinateSystem.getBaseAxis()
              if ('time' === e.type || 'value' === e.type)
                for (
                  var t = t.getData(),
                    n = e.dim + '_' + e.index,
                    i = t.getDimensionIndex(t.mapDimension(e.dim)),
                    r = t.getStore(),
                    o = 0,
                    a = r.count();
                  o < a;
                  ++o
                ) {
                  var s = r.get(i, o)
                  l[n] ? l[n].push(s) : (l[n] = [s])
                }
            }),
            {})
        for (e in l)
          if (l.hasOwnProperty(e)) {
            var i = l[e]
            if (i) {
              i.sort(function (t, e) {
                return t - e
              })
              for (var r = null, o = 1; o < i.length; ++o) {
                var a = i[o] - i[o - 1]
                0 < a && (r = null === r ? a : Math.min(r, a))
              }
              n[e] = r
            }
          }
        return n
      })(t),
      h = []
    return (
      B(t, function (t) {
        var e,
          n,
          i = t.coordinateSystem.getBaseAxis(),
          r = i.getExtent(),
          o =
            ((e =
              'category' === i.type
                ? i.getBandWidth()
                : 'value' === i.type || 'time' === i.type
                ? ((e = i.dim + '_' + i.index),
                  (e = u[e]),
                  (o = Math.abs(r[1] - r[0])),
                  (n = i.scale.getExtent()),
                  (n = Math.abs(n[1] - n[0])),
                  e ? (o / n) * e : o)
                : ((n = t.getData()), Math.abs(r[1] - r[0]) / n.count())),
            fo(t.get('barWidth'), e)),
          r = fo(t.get('barMaxWidth'), e),
          a = fo(
            t.get('barMinWidth') ||
              ((n = t).pipelineContext && n.pipelineContext.large ? 0.5 : 1),
            e
          ),
          s = t.get('barGap'),
          l = t.get('barCategoryGap')
        h.push({
          bandWidth: e,
          barWidth: o,
          barMaxWidth: r,
          barMinWidth: a,
          barGap: s,
          barCategoryGap: l,
          axisKey: l_(i),
          stackId: s_(t)
        })
      }),
      (a = {}),
      B(h, function (t, e) {
        var n = t.axisKey,
          i = t.bandWidth,
          i = a[n] || {
            bandWidth: i,
            remainedWidth: i,
            autoWidthCount: 0,
            categoryGap: null,
            gap: '20%',
            stacks: {}
          },
          r = i.stacks,
          n = ((a[n] = i), t.stackId),
          o =
            (r[n] || i.autoWidthCount++,
            (r[n] = r[n] || { width: 0, maxWidth: 0 }),
            t.barWidth),
          o =
            (o &&
              !r[n].width &&
              ((r[n].width = o),
              (o = Math.min(i.remainedWidth, o)),
              (i.remainedWidth -= o)),
            t.barMaxWidth),
          o = (o && (r[n].maxWidth = o), t.barMinWidth),
          r = (o && (r[n].minWidth = o), t.barGap),
          n = (null != r && (i.gap = r), t.barCategoryGap)
        null != n && (i.categoryGap = n)
      }),
      (d = {}),
      B(a, function (t, n) {
        d[n] = {}
        var e = t.stacks,
          i = t.bandWidth,
          r = t.categoryGap,
          o =
            (null == r &&
              ((o = R(e).length), (r = Math.max(35 - 4 * o, 15) + '%')),
            fo(r, i)),
          a = fo(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          u = (s - o) / (l + (l - 1) * a),
          u = Math.max(u, 0)
        B(e, function (t) {
          var e,
            n = t.maxWidth,
            i = t.minWidth
          t.width
            ? ((e = t.width),
              n && (e = Math.min(e, n)),
              i && (e = Math.max(e, i)),
              (t.width = e),
              (s -= e + a * e),
              l--)
            : ((e = u),
              n && n < e && (e = Math.min(n, s)),
              (e = i && e < i ? i : e) !== u &&
                ((t.width = e), (s -= e + a * e), l--))
        }),
          (u = (s - o) / (l + (l - 1) * a)),
          (u = Math.max(u, 0))
        var h,
          c = 0,
          p =
            (B(e, function (t, e) {
              t.width || (t.width = u), (c += (h = t).width * (1 + a))
            }),
            h && (c -= h.width * a),
            -c / 2)
        B(e, function (t, e) {
          ;(d[n][e] = d[n][e] || { bandWidth: i, offset: p, width: t.width }),
            (p += t.width * (1 + a))
        })
      }),
      d
    )
  }
  u(f_, (c_ = o_)),
    (f_.prototype.getLabel = function (t) {
      var e = this.getSetting('useUTC')
      return mp(
        t.value,
        pp[
          (function (t) {
            switch (t) {
              case 'year':
              case 'month':
                return 'day'
              case 'millisecond':
                return 'millisecond'
              default:
                return 'second'
            }
          })(yp(this._minLevelUnit))
        ] || pp.second,
        e,
        this.getSetting('locale')
      )
    }),
    (f_.prototype.getFormattedLabel = function (t, e, n) {
      var i = this.getSetting('useUTC'),
        r = this.getSetting('locale'),
        o = null
      if (H(n)) o = n
      else if (S(n)) o = n(t.value, e, { level: t.level })
      else {
        var a = O({}, hp)
        if (0 < t.level)
          for (var s = 0; s < dp.length; ++s)
            a[dp[s]] = '{primary|' + a[dp[s]] + '}'
        var l = n ? (!1 === n.inherit ? n : E(n, a)) : a,
          u = vp(t.value, i)
        if (l[u]) o = l[u]
        else if (l.inherit) {
          for (s = fp.indexOf(u) - 1; 0 <= s; --s)
            if (l[u]) {
              o = l[u]
              break
            }
          o = o || a.none
        }
        V(o) &&
          ((e =
            null == t.level ? 0 : 0 <= t.level ? t.level : o.length + t.level),
          (o = o[(e = Math.min(e, o.length - 1))]))
      }
      return mp(new Date(t.value), o, i, r)
    }),
    (f_.prototype.getTicks = function () {
      var t = this._interval,
        e = this._extent,
        n = []
      return (
        t &&
          (n.push({ value: e[0], level: 0 }),
          (t = this.getSetting('useUTC')),
          (t = (function (t, b, S, M) {
            var e = fp,
              n = 0
            function i (t, e, n) {
              var i,
                r,
                o = [],
                a = !e.length
              if (
                !(function (t, e, n, i) {
                  function r (t) {
                    return _p(c, t, i) === _p(p, t, i)
                  }
                  function o () {
                    return r('year')
                  }
                  function a () {
                    return o() && r('month')
                  }
                  function s () {
                    return a() && r('day')
                  }
                  function l () {
                    return s() && r('hour')
                  }
                  function u () {
                    return l() && r('minute')
                  }
                  function h () {
                    return u() && r('second')
                  }
                  var c = So(e),
                    p = So(n)
                  switch (t) {
                    case 'year':
                      return o()
                    case 'month':
                      return a()
                    case 'day':
                      return s()
                    case 'hour':
                      return l()
                    case 'minute':
                      return u()
                    case 'second':
                      return h()
                    case 'millisecond':
                      return h() && r('millisecond')
                  }
                })(yp(t), M[0], M[1], S)
              ) {
                a &&
                  (e = [
                    {
                      value: (function (t, e, n) {
                        var i = new Date(t)
                        switch (yp(e)) {
                          case 'year':
                          case 'month':
                            i[Ip(n)](0)
                          case 'day':
                            i[kp(n)](1)
                          case 'hour':
                            i[Dp(n)](0)
                          case 'minute':
                            i[Ap(n)](0)
                          case 'second':
                            i[Pp(n)](0), i[Lp(n)](0)
                        }
                        return i.getTime()
                      })(new Date(M[0]), t, S)
                    },
                    { value: M[1] }
                  ])
                for (var s = 0; s < e.length - 1; s++) {
                  var l = e[s].value,
                    u = e[s + 1].value
                  if (l !== u) {
                    var h = void 0,
                      c = void 0,
                      p = void 0
                    switch (t) {
                      case 'year':
                        ;(h = Math.max(1, Math.round(b / up / 365))),
                          (c = xp(S)),
                          (p = S ? 'setUTCFullYear' : 'setFullYear')
                        break
                      case 'half-year':
                      case 'quarter':
                      case 'month':
                        ;(r = b),
                          (h =
                            6 < (r /= 30 * up) ? 6 : 3 < r ? 3 : 2 < r ? 2 : 1),
                          (c = wp(S)),
                          (p = Ip(S))
                        break
                      case 'week':
                      case 'half-week':
                      case 'day':
                        ;(r = b),
                          (h =
                            16 < (r /= up)
                              ? 16
                              : 7.5 < r
                              ? 7
                              : 3.5 < r
                              ? 4
                              : 1.5 < r
                              ? 2
                              : 1),
                          (c = bp(S)),
                          (p = kp(S))
                        break
                      case 'half-day':
                      case 'quarter-day':
                      case 'hour':
                        ;(i = b),
                          (h =
                            12 < (i /= lp)
                              ? 12
                              : 6 < i
                              ? 6
                              : 3.5 < i
                              ? 4
                              : 2 < i
                              ? 2
                              : 1),
                          (c = Sp(S)),
                          (p = Dp(S))
                        break
                      case 'minute':
                        ;(h = g_(b, !0)), (c = Mp(S)), (p = Ap(S))
                        break
                      case 'second':
                        ;(h = g_(b, !1)), (c = Tp(S)), (p = Pp(S))
                        break
                      case 'millisecond':
                        ;(h = Co(b, !0)), (c = Cp(S)), (p = Lp(S))
                    }
                    w = x = _ = v = m = y = g = f = d = void 0
                    for (
                      var d = h,
                        f = l,
                        g = u,
                        y = c,
                        m = p,
                        v = o,
                        _ = new Date(f),
                        x = f,
                        w = _[y]();
                      x < g && x <= M[1];

                    )
                      v.push({ value: x }), _[m]((w += d)), (x = _.getTime())
                    v.push({ value: x, notAdd: !0 }),
                      'year' === t &&
                        1 < n.length &&
                        0 === s &&
                        n.unshift({ value: n[0].value - h })
                  }
                }
                for (s = 0; s < o.length; s++) n.push(o[s])
              }
            }
            for (
              var r = [], o = [], a = 0, s = 0, l = 0;
              l < e.length && n++ < 1e4;
              ++l
            ) {
              var u = yp(e[l])
              if (
                (function (t) {
                  return t === yp(t)
                })(e[l]) &&
                (i(e[l], r[r.length - 1] || [], o),
                u !== (e[l + 1] ? yp(e[l + 1]) : null))
              ) {
                if (o.length) {
                  ;(s = a),
                    o.sort(function (t, e) {
                      return t.value - e.value
                    })
                  for (var h = [], c = 0; c < o.length; ++c) {
                    var p = o[c].value
                    ;(0 !== c && o[c - 1].value === p) ||
                      (h.push(o[c]), p >= M[0] && p <= M[1] && a++)
                  }
                  u = (M[1] - M[0]) / b
                  if (1.5 * u < a && u / 1.5 < s) break
                  if ((r.push(h), u < a || t === e[l])) break
                }
                o = []
              }
            }
            var d = ct(
                F(r, function (t) {
                  return ct(t, function (t) {
                    return t.value >= M[0] && t.value <= M[1] && !t.notAdd
                  })
                }),
                function (t) {
                  return 0 < t.length
                }
              ),
              f = [],
              g = d.length - 1
            for (l = 0; l < d.length; ++l)
              for (var y = d[l], m = 0; m < y.length; ++m)
                f.push({ value: y[m].value, level: g - l })
            f.sort(function (t, e) {
              return t.value - e.value
            })
            var v = []
            for (l = 0; l < f.length; ++l)
              (0 !== l && f[l].value === f[l - 1].value) || v.push(f[l])
            return v
          })(this._minLevelUnit, this._approxInterval, t, e)),
          (n = n.concat(t)).push({ value: e[1], level: 0 })),
        n
      )
    }),
    (f_.prototype.calcNiceExtent = function (t) {
      var e,
        n = this._extent
      n[0] === n[1] && ((n[0] -= up), (n[1] += up)),
        n[1] === -1 / 0 &&
          n[0] === 1 / 0 &&
          ((e = new Date()),
          (n[1] = +new Date(e.getFullYear(), e.getMonth(), e.getDate())),
          (n[0] = n[1] - up)),
        this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval)
    }),
    (f_.prototype.calcNiceTicks = function (t, e, n) {
      var i = this._extent,
        i = i[1] - i[0],
        i =
          ((this._approxInterval = i / (t = t || 10)),
          null != e && this._approxInterval < e && (this._approxInterval = e),
          null != n && this._approxInterval > n && (this._approxInterval = n),
          d_.length),
        t = Math.min(
          (function (t, e, n, i) {
            for (; n < i; ) {
              var r = (n + i) >>> 1
              t[r][1] < e ? (n = 1 + r) : (i = r)
            }
            return n
          })(d_, this._approxInterval, 0, i),
          i - 1
        )
      ;(this._interval = d_[t][1]),
        (this._minLevelUnit = d_[Math.max(t - 1, 0)][0])
    }),
    (f_.prototype.parse = function (t) {
      return W(t) ? t : +So(t)
    }),
    (f_.prototype.contain = function (t) {
      return $v(this.parse(t), this._extent)
    }),
    (f_.prototype.normalize = function (t) {
      return Qv(this.parse(t), this._extent)
    }),
    (f_.prototype.scale = function (t) {
      return Jv(t, this._extent)
    }),
    (f_.type = 'time')
  var c_,
    p_ = f_,
    d_ = [
      ['second', ap],
      ['minute', sp],
      ['hour', lp],
      ['quarter-day', 6 * lp],
      ['half-day', 12 * lp],
      ['day', 1.2 * up],
      ['half-week', 3.5 * up],
      ['week', 7 * up],
      ['month', 31 * up],
      ['quarter', 95 * up],
      ['half-year', oa / 2],
      ['year', oa]
    ]
  function f_ (t) {
    t = c_.call(this, t) || this
    return (t.type = 'time'), t
  }
  function g_ (t, e) {
    return 30 < (t /= e ? sp : ap)
      ? 30
      : 20 < t
      ? 20
      : 15 < t
      ? 15
      : 10 < t
      ? 10
      : 5 < t
      ? 5
      : 2 < t
      ? 2
      : 1
  }
  Vv.registerClass(p_)
  var y_,
    m_ = Vv.prototype,
    v_ = o_.prototype,
    __ = go,
    x_ = Math.floor,
    w_ = Math.ceil,
    b_ = Math.pow,
    S_ = Math.log,
    M_ =
      (u(T_, (y_ = Vv)),
      (T_.prototype.getTicks = function (t) {
        var e = this._originalScale,
          n = this._extent,
          i = e.getExtent()
        return F(
          v_.getTicks.call(this, t),
          function (t) {
            var t = t.value,
              e = go(b_(this.base, t)),
              e = t === n[0] && this._fixMin ? C_(e, i[0]) : e
            return { value: t === n[1] && this._fixMax ? C_(e, i[1]) : e }
          },
          this
        )
      }),
      (T_.prototype.setExtent = function (t, e) {
        var n = S_(this.base)
        ;(t = S_(Math.max(0, t)) / n),
          (e = S_(Math.max(0, e)) / n),
          v_.setExtent.call(this, t, e)
      }),
      (T_.prototype.getExtent = function () {
        var t = this.base,
          e = m_.getExtent.call(this),
          t =
            ((e[0] = b_(t, e[0])),
            (e[1] = b_(t, e[1])),
            this._originalScale.getExtent())
        return (
          this._fixMin && (e[0] = C_(e[0], t[0])),
          this._fixMax && (e[1] = C_(e[1], t[1])),
          e
        )
      }),
      (T_.prototype.unionExtent = function (t) {
        this._originalScale.unionExtent(t)
        var e = this.base
        ;(t[0] = S_(t[0]) / S_(e)),
          (t[1] = S_(t[1]) / S_(e)),
          m_.unionExtent.call(this, t)
      }),
      (T_.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      }),
      (T_.prototype.calcNiceTicks = function (t) {
        t = t || 10
        var e = this._extent,
          n = e[1] - e[0]
        if (!(n == 1 / 0 || n <= 0)) {
          var i = Mo(n)
          for (
            (t / n) * i <= 0.5 && (i *= 10);
            !isNaN(i) && Math.abs(i) < 1 && 0 < Math.abs(i);

          )
            i *= 10
          t = [go(w_(e[0] / i) * i), go(x_(e[1] / i) * i)]
          ;(this._interval = i), (this._niceExtent = t)
        }
      }),
      (T_.prototype.calcNiceExtent = function (t) {
        v_.calcNiceExtent.call(this, t),
          (this._fixMin = t.fixMin),
          (this._fixMax = t.fixMax)
      }),
      (T_.prototype.parse = function (t) {
        return t
      }),
      (T_.prototype.contain = function (t) {
        return $v((t = S_(t) / S_(this.base)), this._extent)
      }),
      (T_.prototype.normalize = function (t) {
        return Qv((t = S_(t) / S_(this.base)), this._extent)
      }),
      (T_.prototype.scale = function (t) {
        return (t = Jv(t, this._extent)), b_(this.base, t)
      }),
      (T_.type = 'log'),
      T_),
    n0 = M_.prototype
  function T_ () {
    var t = (null !== y_ && y_.apply(this, arguments)) || this
    return (
      (t.type = 'log'),
      (t.base = 10),
      (t._originalScale = new o_()),
      (t._interval = 0),
      t
    )
  }
  function C_ (t, e) {
    return __(t, yo(e))
  }
  ;(n0.getMinorTicks = v_.getMinorTicks),
    (n0.getLabel = v_.getLabel),
    Vv.registerClass(M_)
  ;(k_.prototype._prepareParams = function (t, e, n) {
    n[1] < n[0] && (n = [NaN, NaN]),
      (this._dataMin = n[0]),
      (this._dataMax = n[1])
    var i = (this._isOrdinal = 'ordinal' === t.type),
      r =
        ((this._needCrossZero =
          'interval' === t.type && e.getNeedCrossZero && e.getNeedCrossZero()),
        (this._modelMinRaw = e.get('min', !0))),
      r =
        (S(r)
          ? (this._modelMinNum = P_(t, r({ min: n[0], max: n[1] })))
          : 'dataMin' !== r && (this._modelMinNum = P_(t, r)),
        (this._modelMaxRaw = e.get('max', !0)))
    S(r)
      ? (this._modelMaxNum = P_(t, r({ min: n[0], max: n[1] })))
      : 'dataMax' !== r && (this._modelMaxNum = P_(t, r)),
      i
        ? (this._axisDataLen = e.getCategories().length)
        : 'boolean' ==
            typeof (t = V((n = e.get('boundaryGap')))
              ? n
              : [n || 0, n || 0])[0] || 'boolean' == typeof t[1]
        ? (this._boundaryGapInner = [0, 0])
        : (this._boundaryGapInner = [Wr(t[0], 1), Wr(t[1], 1)])
  }),
    (k_.prototype.calculate = function () {
      var t = this._isOrdinal,
        e = this._dataMin,
        n = this._dataMax,
        i = this._axisDataLen,
        r = this._boundaryGapInner,
        o = t ? null : n - e || Math.abs(e),
        a = 'dataMin' === this._modelMinRaw ? e : this._modelMinNum,
        s = 'dataMax' === this._modelMaxRaw ? n : this._modelMaxNum,
        l = null != a,
        u = null != s,
        e =
          (null == a && (a = t ? (i ? 0 : NaN) : e - r[0] * o),
          null == s && (s = t ? (i ? i - 1 : NaN) : n + r[1] * o),
          (null != a && isFinite(a)) || (a = NaN),
          (null != s && isFinite(s)) || (s = NaN),
          wt(a) || wt(s) || (t && !i)),
        n =
          (this._needCrossZero &&
            (a = 0 < a && 0 < s && !l ? 0 : a) < 0 &&
            s < 0 &&
            !u &&
            (s = 0),
          this._determinedMin),
        r = this._determinedMax
      return (
        null != n && ((a = n), (l = !0)),
        null != r && ((s = r), (u = !0)),
        { min: a, max: s, minFixed: l, maxFixed: u, isBlank: e }
      )
    }),
    (k_.prototype.modifyDataMinMax = function (t, e) {
      this[A_[t]] = e
    }),
    (k_.prototype.setDeterminedMinMax = function (t, e) {
      this[D_[t]] = e
    }),
    (k_.prototype.freeze = function () {
      this.frozen = !0
    })
  var I_ = k_
  function k_ (t, e, n) {
    this._prepareParams(t, e, n)
  }
  var D_ = { min: '_determinedMin', max: '_determinedMax' },
    A_ = { min: '_dataMin', max: '_dataMax' }
  function P_ (t, e) {
    return null == e ? null : wt(e) ? NaN : t.parse(e)
  }
  function L_ (t, e) {
    var n,
      i,
      r,
      o,
      a,
      s,
      l = t.type,
      u =
        ((c = e),
        (u = (h = t).getExtent()),
        (
          h.rawExtentInfo || ((c = new I_(h, c, u)), (h.rawExtentInfo = c))
        ).calculate()),
      h = (t.setBlank(u.isBlank), u.min),
      c = u.max,
      t = e.ecModel
    return (
      t &&
        'time' === l &&
        ((l = u_('bar', t)),
        (n = !1),
        B(l, function (t) {
          n = n || t.getBaseAxis() === e.axis
        }),
        n) &&
        ((t = h_(l)),
        (l = h),
        (i = c),
        (t = t),
        (s = (s = (r = e).axis.getExtent())[1] - s[0]),
        (h = (t =
          void 0 ===
          (t = (function (t, e, n) {
            if (t && e)
              return null != (t = t[l_(e)]) && null != n ? t[s_(n)] : t
          })(t, r.axis))
            ? { min: l, max: i }
            : ((o = 1 / 0),
              B(t, function (t) {
                o = Math.min(t.offset, o)
              }),
              (a = -1 / 0),
              B(t, function (t) {
                a = Math.max(t.offset + t.width, a)
              }),
              (o = Math.abs(o)),
              (a = Math.abs(a)),
              {
                min: (l -=
                  (o / (r = o + a)) *
                  (s = (t = i - l) / (1 - (o + a) / s) - t)),
                max: (i += (a / r) * s)
              })).min),
        (c = t.max)),
      { extent: [h, c], fixMin: u.minFixed, fixMax: u.maxFixed }
    )
  }
  function O_ (t, e) {
    var n = L_(t, e),
      i = n.extent,
      r = e.get('splitNumber'),
      o = (t instanceof M_ && (t.base = e.get('logBase')), t.type),
      a = e.get('interval'),
      o = 'interval' === o || 'time' === o
    t.setExtent(i[0], i[1]),
      t.calcNiceExtent({
        splitNumber: r,
        fixMin: n.fixMin,
        fixMax: n.fixMax,
        minInterval: o ? e.get('minInterval') : null,
        maxInterval: o ? e.get('maxInterval') : null
      }),
      null != a && t.setInterval && t.setInterval(a)
  }
  function R_ (t, e) {
    if ((e = e || t.get('type')))
      switch (e) {
        case 'category':
          return new e_({
            ordinalMeta: t.getOrdinalMeta
              ? t.getOrdinalMeta()
              : t.getCategories(),
            extent: [1 / 0, -1 / 0]
          })
        case 'time':
          return new p_({
            locale: t.ecModel.getLocaleModel(),
            useUTC: t.ecModel.get('useUTC')
          })
        default:
          return new (Vv.getClass(e) || o_)()
      }
  }
  function N_ (n) {
    var i,
      r,
      e,
      t = n.getLabelModel().get('formatter'),
      o = 'category' === n.type ? n.scale.getExtent()[0] : null
    return 'time' === n.scale.type
      ? ((r = t),
        function (t, e) {
          return n.scale.getFormattedLabel(t, e, r)
        })
      : H(t)
      ? ((e = t),
        function (t) {
          t = n.scale.getLabel(t)
          return e.replace('{value}', null != t ? t : '')
        })
      : S(t)
      ? ((i = t),
        function (t, e) {
          return (
            null != o && (e = t.value - o),
            i(B_(n, t), e, null != t.level ? { level: t.level } : null)
          )
        })
      : function (t) {
          return n.scale.getLabel(t)
        }
  }
  function B_ (t, e) {
    return 'category' === t.type ? t.scale.getLabel(e) : e.value
  }
  function z_ (t) {
    var e,
      n,
      i,
      r = t.model,
      o = t.scale
    if (r.get(['axisLabel', 'show']) && !o.isBlank()) {
      var a,
        s,
        l = o.getExtent(),
        u = o instanceof e_ ? o.count() : (a = o.getTicks()).length,
        h = t.getLabelModel(),
        c = N_(t),
        p = 1
      40 < u && (p = Math.ceil(u / 40))
      for (var d = 0; d < u; d += p) {
        var f = c(a ? a[d] : { value: l[0] + d }, d),
          g =
            ((f = h.getTextRect(f)),
            (e = h.get('rotate') || 0),
            (n = i = g = n = void 0),
            (e = (e * Math.PI) / 180),
            (n = f.width),
            (g = f.height),
            (i = n * Math.abs(Math.cos(e)) + Math.abs(g * Math.sin(e))),
            (n = n * Math.abs(Math.sin(e)) + Math.abs(g * Math.cos(e))),
            new U(f.x, f.y, i, n))
        s ? s.union(g) : (s = g)
      }
      return s
    }
  }
  function E_ (t) {
    t = t.get('interval')
    return null == t ? 'auto' : t
  }
  function F_ (t) {
    return 'category' === t.type && 0 === E_(t.getLabelModel())
  }
  ;(H_.prototype.getNeedCrossZero = function () {
    return !this.option.scale
  }),
    (H_.prototype.getCoordSysModel = function () {})
  var V_ = H_
  function H_ () {}
  var a0 = Object.freeze({
      __proto__: null,
      createDimensions: function (t, e) {
        return Lv(t, e).dimensions
      },
      createList: function (t) {
        return Fv(null, t)
      },
      createScale: function (t, e) {
        var n = e
        return (
          (e = R_((n = e instanceof Zc ? n : new Zc(e)))).setExtent(t[0], t[1]),
          O_(e, n),
          e
        )
      },
      createSymbol: p0,
      createTextStyle: function (t, e) {
        return kc(t, null, null, 'normal' !== (e = e || {}).state)
      },
      dataStack: {
        isDimensionStacked: zv,
        enableDataStack: Bv,
        getStackedDimension: Ev
      },
      enableHoverEmphasis: Ql,
      getECData: ul,
      getLayoutRect: jp,
      mixinAxisModelCommonMethods: function (t) {
        lt(t, V_)
      }
    }),
    W_ = [],
    G_ = {
      registerPreprocessor: Gm,
      registerProcessor: Um,
      registerPostInit: Xm,
      registerPostUpdate: Ym,
      registerUpdateLifecycle: qm,
      registerAction: jm,
      registerCoordinateSystem: Zm,
      registerLayout: Km,
      registerVisual: $m,
      registerTransform: nv,
      registerLoading: tv,
      registerMap: ev,
      registerImpl: function (t, e) {
        U0[t] = e
      },
      PRIORITY: o0,
      ComponentModel: g,
      ComponentView: oy,
      SeriesModel: $g,
      ChartView: hy,
      registerComponentModel: function (t) {
        g.registerClass(t)
      },
      registerComponentView: function (t) {
        oy.registerClass(t)
      },
      registerSeriesModel: function (t) {
        $g.registerClass(t)
      },
      registerChartView: function (t) {
        hy.registerClass(t)
      },
      registerSubTypeDefaulter: function (t, e) {
        g.registerSubTypeDefaulter(t, e)
      },
      registerPainter: function (t, e) {
        uo(t, e)
      }
    }
  function U_ (t) {
    V(t)
      ? B(t, function (t) {
          U_(t)
        })
      : 0 <= I(W_, t) ||
        (W_.push(t), (t = S(t) ? { install: t } : t).install(G_))
  }
  var X_ = 1e-8
  function Y_ (t, e) {
    return Math.abs(t - e) < X_
  }
  function q_ (t, e, n) {
    var i = 0,
      r = t[0]
    if (r) {
      for (var o = 1; o < t.length; o++) {
        var a = t[o]
        ;(i += fs(r[0], r[1], a[0], a[1], e, n)), (r = a)
      }
      var s = t[0]
      return (
        (Y_(r[0], s[0]) && Y_(r[1], s[1])) ||
          (i += fs(r[0], r[1], s[0], s[1], e, n)),
        0 !== i
      )
    }
  }
  var j_ = []
  function Z_ (t, e) {
    for (var n = 0; n < t.length; n++) ne(t[n], t[n], e)
  }
  function K_ (t, e, n, i) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r]
      ;(o = i ? i.project(o) : o) &&
        isFinite(o[0]) &&
        isFinite(o[1]) &&
        (ie(e, e, o), re(n, n, o))
    }
  }
  ;($_.prototype.setCenter = function (t) {
    this._center = t
  }),
    ($_.prototype.getCenter = function () {
      return this._center || (this._center = this.calcCenter())
    })
  s0 = $_
  function $_ (t) {
    this.name = t
  }
  function Q_ (t, e) {
    ;(this.type = 'polygon'), (this.exterior = t), (this.interiors = e)
  }
  function J_ (t) {
    ;(this.type = 'linestring'), (this.points = t)
  }
  u(i1, (t1 = s0)),
    (i1.prototype.calcCenter = function () {
      for (var t, e, n = this.geometries, i = 0, r = 0; r < n.length; r++) {
        var o = n[r],
          a = o.exterior,
          a = a && a.length
        i < a && ((t = o), (i = a))
      }
      if (t) {
        for (
          var s = t.exterior,
            l = 0,
            u = 0,
            h = 0,
            c = s.length,
            p = s[c - 1][0],
            d = s[c - 1][1],
            f = 0;
          f < c;
          f++
        ) {
          var g = s[f][0],
            y = s[f][1],
            m = p * y - g * d
          ;(l += m), (u += (p + g) * m), (h += (d + y) * m), (p = g), (d = y)
        }
        return l ? [u / l / 3, h / l / 3, l] : [s[0][0] || 0, s[0][1] || 0]
      }
      return [(e = this.getBoundingRect()).x + e.width / 2, e.y + e.height / 2]
    }),
    (i1.prototype.getBoundingRect = function (e) {
      var n,
        i,
        t = this._rect
      return (
        (t && !e) ||
          ((n = [1 / 0, 1 / 0]),
          (i = [-1 / 0, -1 / 0]),
          B(this.geometries, function (t) {
            'polygon' === t.type
              ? K_(t.exterior, n, i, e)
              : B(t.points, function (t) {
                  K_(t, n, i, e)
                })
          }),
          (isFinite(n[0]) &&
            isFinite(n[1]) &&
            isFinite(i[0]) &&
            isFinite(i[1])) ||
            (n[0] = n[1] = i[0] = i[1] = 0),
          (t = new U(n[0], n[1], i[0] - n[0], i[1] - n[1])),
          e) ||
          (this._rect = t),
        t
      )
    }),
    (i1.prototype.contain = function (t) {
      var e = this.getBoundingRect(),
        n = this.geometries
      if (e.contain(t[0], t[1]))
        t: for (var i = 0, r = n.length; i < r; i++) {
          var o = n[i]
          if ('polygon' === o.type) {
            var a = o.exterior,
              s = o.interiors
            if (q_(a, t[0], t[1])) {
              for (var l = 0; l < (s ? s.length : 0); l++)
                if (q_(s[l], t[0], t[1])) continue t
              return !0
            }
          }
        }
      return !1
    }),
    (i1.prototype.transformTo = function (t, e, n, i) {
      var r = this.getBoundingRect(),
        o = r.width / r.height
      n ? (i = i || n / o) : (n = o * i)
      for (
        var o = new U(t, e, n, i),
          a = r.calculateTransform(o),
          s = this.geometries,
          l = 0;
        l < s.length;
        l++
      ) {
        var u = s[l]
        'polygon' === u.type
          ? (Z_(u.exterior, a),
            B(u.interiors, function (t) {
              Z_(t, a)
            }))
          : B(u.points, function (t) {
              Z_(t, a)
            })
      }
      ;(r = this._rect).copy(o),
        (this._center = [r.x + r.width / 2, r.y + r.height / 2])
    }),
    (i1.prototype.cloneShallow = function (t) {
      t = new i1((t = null == t ? this.name : t), this.geometries, this._center)
      return (t._rect = this._rect), (t.transformTo = null), t
    })
  var t1,
    e1,
    n1 = i1
  function i1 (t, e, n) {
    t = t1.call(this, t) || this
    return (
      (t.type = 'geoJSON'),
      (t.geometries = e),
      (t._center = n && [n[0], n[1]]),
      t
    )
  }
  function r1 (t, e) {
    t = e1.call(this, t) || this
    return (t.type = 'geoSVG'), (t._elOnlyForCalculate = e), t
  }
  function o1 (t, e, n) {
    for (var i = 0; i < t.length; i++) t[i] = a1(t[i], e[i], n)
  }
  function a1 (t, e, n) {
    for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
      var s = ((s = t.charCodeAt(a) - 64) >> 1) ^ -(1 & s),
        l = ((l = t.charCodeAt(a + 1) - 64) >> 1) ^ -(1 & l),
        r = (s += r),
        o = (l += o)
      i.push([s / n, l / n])
    }
    return i
  }
  function s1 (t, o) {
    return F(
      ct(
        (t = (e = t).UTF8Encoding
          ? (null == (r = (n = e).UTF8Scale) && (r = 1024),
            B(n.features, function (t) {
              var e = t.geometry,
                n = e.encodeOffsets,
                i = e.coordinates
              if (n)
                switch (e.type) {
                  case 'LineString':
                    e.coordinates = a1(i, n, r)
                    break
                  case 'Polygon':
                  case 'MultiLineString':
                    o1(i, n, r)
                    break
                  case 'MultiPolygon':
                    B(i, function (t, e) {
                      return o1(t, n[e], r)
                    })
                }
            }),
            (n.UTF8Encoding = !1),
            n)
          : e).features,
        function (t) {
          return t.geometry && t.properties && 0 < t.geometry.coordinates.length
        }
      ),
      function (t) {
        var e = t.properties,
          n = t.geometry,
          i = []
        switch (n.type) {
          case 'Polygon':
            var r = n.coordinates
            i.push(new Q_(r[0], r.slice(1)))
            break
          case 'MultiPolygon':
            B(n.coordinates, function (t) {
              t[0] && i.push(new Q_(t[0], t.slice(1)))
            })
            break
          case 'LineString':
            i.push(new J_([n.coordinates]))
            break
          case 'MultiLineString':
            i.push(new J_(n.coordinates))
        }
        t = new n1(e[o || 'name'], i, e.cp)
        return (t.properties = e), t
      }
    )
    var e, n, r
  }
  u(r1, (e1 = s0)),
    (r1.prototype.calcCenter = function () {
      for (
        var t = this._elOnlyForCalculate,
          e = t.getBoundingRect(),
          e = [e.x + e.width / 2, e.y + e.height / 2],
          n = Re(j_),
          i = t;
        i && !i.isGeoSVGGraphicRoot;

      )
        Be(n, i.getLocalTransform(), n), (i = i.parent)
      return Ve(n, n), ne(e, e, n), e
    })
  var ca = Object.freeze({
      __proto__: null,
      MAX_SAFE_INTEGER: 9007199254740991,
      asc: function (t) {
        return (
          t.sort(function (t, e) {
            return t - e
          }),
          t
        )
      },
      getPercentWithPrecision: function (t, e, n) {
        return (t[e] && _o(t, n)[e]) || 0
      },
      getPixelPrecision: vo,
      getPrecision: yo,
      getPrecisionSafe: mo,
      isNumeric: ko,
      isRadianAroundZero: wo,
      linearMap: po,
      nice: Co,
      numericToNumber: Io,
      parseDate: So,
      quantile: function (t, e) {
        var e = (t.length - 1) * e + 1,
          n = Math.floor(e),
          i = +t[n - 1]
        return (e = e - n) ? i + e * (t[n] - i) : i
      },
      quantity: Mo,
      quantityExponent: To,
      reformIntervals: function (t) {
        t.sort(function (t, e) {
          return (function t (e, n, i) {
            return (
              e.interval[i] < n.interval[i] ||
              (e.interval[i] === n.interval[i] &&
                (e.close[i] - n.close[i] == (i ? -1 : 1) || (!i && t(e, n, 1))))
            )
          })(t, e, 0)
            ? -1
            : 1
        })
        for (var e = -1 / 0, n = 1, i = 0; i < t.length; ) {
          for (var r = t[i].interval, o = t[i].close, a = 0; a < 2; a++)
            r[a] <= e && ((r[a] = e), (o[a] = a ? 1 : 1 - n)),
              (e = r[a]),
              (n = o[a])
          r[0] === r[1] && o[0] * o[1] != 1 ? t.splice(i, 1) : i++
        }
        return t
      },
      remRadian: xo,
      round: go
    }),
    cc = Object.freeze({ __proto__: null, format: mp, parse: So }),
    cp = Object.freeze({
      __proto__: null,
      Arc: bh,
      BezierCurve: vh,
      BoundingRect: U,
      Circle: Iu,
      CompoundPath: Th,
      Ellipse: Pu,
      Group: no,
      Image: Ns,
      IncrementalDisplayable: n,
      Line: ph,
      LinearGradient: Ah,
      Polygon: ih,
      Polyline: sh,
      RadialGradient: Ih,
      Rect: Us,
      Ring: Qu,
      Sector: ju,
      Text: Zs,
      clipPointsByRect: yc,
      clipRectByRect: mc,
      createIcon: vc,
      extendPath: nc,
      extendShape: tc,
      getShapeClass: rc,
      getTransform: pc,
      initProps: Yh,
      makeImage: ac,
      makePath: oc,
      mergePath: lc,
      registerShape: ic,
      resizePath: uc,
      updateProps: Xh
    }),
    Uc = Object.freeze({
      __proto__: null,
      addCommas: Op,
      capitalFirst: function (t) {
        return t && t.charAt(0).toUpperCase() + t.substr(1)
      },
      encodeHTML: xe,
      formatTime: function (t, e, n) {
        ;('week' !== t &&
          'month' !== t &&
          'quarter' !== t &&
          'half-year' !== t &&
          'year' !== t) ||
          (t = 'MM-dd\nyyyy')
        var i = (e = So(e))[(n = n ? 'getUTC' : 'get') + 'FullYear'](),
          r = e[n + 'Month']() + 1,
          o = e[n + 'Date'](),
          a = e[n + 'Hours'](),
          s = e[n + 'Minutes'](),
          l = e[n + 'Seconds'](),
          e = e[n + 'Milliseconds']()
        return t
          .replace('MM', gp(r, 2))
          .replace('M', r)
          .replace('yyyy', i)
          .replace('yy', gp((i % 100) + '', 2))
          .replace('dd', gp(o, 2))
          .replace('d', o)
          .replace('hh', gp(a, 2))
          .replace('h', a)
          .replace('mm', gp(s, 2))
          .replace('m', s)
          .replace('ss', gp(l, 2))
          .replace('s', l)
          .replace('SSS', gp(e, 3))
      },
      formatTpl: Fp,
      getTextRect: function (t, e, n, i, r, o, a, s) {
        return new Zs({
          style: {
            text: t,
            font: e,
            align: n,
            verticalAlign: i,
            padding: r,
            rich: o,
            overflow: a ? 'truncate' : null,
            lineHeight: s
          }
        }).getBoundingRect()
      },
      getTooltipMarker: Vp,
      normalizeCssArray: Np,
      toCamelCase: Rp,
      truncateText: va
    }),
    Vc = Object.freeze({
      __proto__: null,
      bind: pt,
      clone: _,
      curry: dt,
      defaults: E,
      each: B,
      extend: O,
      filter: ct,
      indexOf: I,
      inherits: st,
      isArray: V,
      isFunction: S,
      isObject: L,
      isString: H,
      map: F,
      merge: d,
      reduce: ht
    }),
    l1 = Yo()
  function u1 (t) {
    return 'category' === t.type
      ? ((r = (e = t).getLabelModel()),
        (o = c1(e, r)),
        !r.get('show') || e.scale.isBlank()
          ? { labels: [], labelCategoryInterval: o.labelCategoryInterval }
          : o)
      : ((r = (n = t).scale.getTicks()),
        (i = N_(n)),
        {
          labels: F(r, function (t, e) {
            return {
              level: t.level,
              formattedLabel: i(t, e),
              rawLabel: n.scale.getLabel(t),
              tickValue: t.value
            }
          })
        })
    var n, i, e, r, o
  }
  function h1 (t, e) {
    var n, i, r, o, a, s
    return 'category' === t.type
      ? ((e = e),
        (o = p1((n = t), 'ticks')),
        (a = E_(e)),
        (s = d1(o, a)) ||
          ((e.get('show') && !n.scale.isBlank()) || (i = []),
          (i = S(a)
            ? y1(n, a, !0)
            : 'auto' === a
            ? ((s = c1(n, n.getLabelModel())),
              (r = s.labelCategoryInterval),
              F(s.labels, function (t) {
                return t.tickValue
              }))
            : g1(n, (r = a), !0)),
          f1(o, a, { ticks: i, tickCategoryInterval: r })))
      : {
          ticks: F(t.scale.getTicks(), function (t) {
            return t.value
          })
        }
  }
  function c1 (t, e) {
    var n,
      i = p1(t, 'labels'),
      e = E_(e)
    return (
      d1(i, e) ||
      f1(i, e, {
        labels: S(e)
          ? y1(t, e)
          : g1(
              t,
              (n =
                'auto' === e
                  ? null != (t = l1((i = t)).autoInterval)
                    ? t
                    : (l1(i).autoInterval = i.calculateCategoryInterval())
                  : e)
            ),
        labelCategoryInterval: n
      })
    )
  }
  function p1 (t, e) {
    return l1(t)[e] || (l1(t)[e] = [])
  }
  function d1 (t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
  }
  function f1 (t, e, n) {
    return t.push({ key: e, value: n }), n
  }
  function g1 (t, e, n) {
    var i = N_(t),
      r = t.scale,
      o = r.getExtent(),
      a = t.getLabelModel(),
      s = [],
      l = Math.max((e || 0) + 1, 1),
      e = o[0],
      u = r.count(),
      u =
        (0 !== e &&
          1 < l &&
          2 < u / l &&
          (e = Math.round(Math.ceil(e / l) * l)),
        F_(t)),
      t = a.get('showMinLabel') || u,
      a = a.get('showMaxLabel') || u
    t && e !== o[0] && c(o[0])
    for (var h = e; h <= o[1]; h += l) c(h)
    function c (t) {
      var e = { value: t }
      s.push(
        n ? t : { formattedLabel: i(e), rawLabel: r.getLabel(e), tickValue: t }
      )
    }
    return a && h - l !== o[1] && c(o[1]), s
  }
  function y1 (t, i, r) {
    var o = t.scale,
      a = N_(t),
      s = []
    return (
      B(o.getTicks(), function (t) {
        var e = o.getLabel(t),
          n = t.value
        i(t.value, e) &&
          s.push(r ? n : { formattedLabel: a(t), rawLabel: e, tickValue: n })
      }),
      s
    )
  }
  var m1 = [0, 1],
    Yc =
      ((v1.prototype.contain = function (t) {
        var e = this._extent,
          n = Math.min(e[0], e[1]),
          e = Math.max(e[0], e[1])
        return n <= t && t <= e
      }),
      (v1.prototype.containData = function (t) {
        return this.scale.contain(t)
      }),
      (v1.prototype.getExtent = function () {
        return this._extent.slice()
      }),
      (v1.prototype.getPixelPrecision = function (t) {
        return vo(t || this.scale.getExtent(), this._extent)
      }),
      (v1.prototype.setExtent = function (t, e) {
        var n = this._extent
        ;(n[0] = t), (n[1] = e)
      }),
      (v1.prototype.dataToCoord = function (t, e) {
        var n = this._extent,
          i = this.scale
        return (
          (t = i.normalize(t)),
          this.onBand && 'ordinal' === i.type && _1((n = n.slice()), i.count()),
          po(t, m1, n, e)
        )
      }),
      (v1.prototype.coordToData = function (t, e) {
        var n = this._extent,
          i = this.scale,
          i =
            (this.onBand &&
              'ordinal' === i.type &&
              _1((n = n.slice()), i.count()),
            po(t, n, m1, e))
        return this.scale.scale(i)
      }),
      (v1.prototype.pointToData = function (t, e) {}),
      (v1.prototype.getTicksCoords = function (t) {
        var e,
          n,
          i,
          r,
          o = (t = t || {}).tickModel || this.getTickModel(),
          a = F(
            h1(this, o).ticks,
            function (t) {
              return {
                coord: this.dataToCoord(
                  'ordinal' === this.scale.type
                    ? this.scale.getRawOrdinalNumber(t)
                    : t
                ),
                tickValue: t
              }
            },
            this
          ),
          s = this,
          l = a,
          o = o.get('alignWithLabel'),
          t = t.clamp,
          u = l.length
        function h (t, e) {
          return (t = go(t)), (e = go(e)), r ? e < t : t < e
        }
        return (
          s.onBand &&
            !o &&
            u &&
            ((o = s.getExtent()),
            1 === u
              ? ((l[0].coord = o[0]), (e = l[1] = { coord: o[1] }))
              : ((n = l[u - 1].tickValue - l[0].tickValue),
                (i = (l[u - 1].coord - l[0].coord) / n),
                B(l, function (t) {
                  t.coord -= i / 2
                }),
                (n = 1 + s.scale.getExtent()[1] - l[u - 1].tickValue),
                (e = { coord: l[u - 1].coord + i * n }),
                l.push(e)),
            (r = o[0] > o[1]),
            h(l[0].coord, o[0]) && (t ? (l[0].coord = o[0]) : l.shift()),
            t && h(o[0], l[0].coord) && l.unshift({ coord: o[0] }),
            h(o[1], e.coord) && (t ? (e.coord = o[1]) : l.pop()),
            t) &&
            h(e.coord, o[1]) &&
            l.push({ coord: o[1] }),
          a
        )
      }),
      (v1.prototype.getMinorTicksCoords = function () {
        var t
        return 'ordinal' === this.scale.type
          ? []
          : ((t = this.model.getModel('minorTick').get('splitNumber')),
            F(
              this.scale.getMinorTicks((t = 0 < t && t < 100 ? t : 5)),
              function (t) {
                return F(
                  t,
                  function (t) {
                    return { coord: this.dataToCoord(t), tickValue: t }
                  },
                  this
                )
              },
              this
            ))
      }),
      (v1.prototype.getViewLabels = function () {
        return u1(this).labels
      }),
      (v1.prototype.getLabelModel = function () {
        return this.model.getModel('axisLabel')
      }),
      (v1.prototype.getTickModel = function () {
        return this.model.getModel('axisTick')
      }),
      (v1.prototype.getBandWidth = function () {
        var t = this._extent,
          e = this.scale.getExtent(),
          e = e[1] - e[0] + (this.onBand ? 1 : 0),
          t = (0 === e && (e = 1), Math.abs(t[1] - t[0]))
        return Math.abs(t) / e
      }),
      (v1.prototype.calculateCategoryInterval = function () {
        r = (n = d = this).getLabelModel()
        var t = {
            axisRotate: n.getRotate
              ? n.getRotate()
              : n.isHorizontal && !n.isHorizontal()
              ? 90
              : 0,
            labelRotate: r.get('rotate') || 0,
            font: r.getFont()
          },
          e = N_(d),
          n = ((t.axisRotate - t.labelRotate) / 180) * Math.PI,
          i = (r = d.scale).getExtent(),
          r = r.count()
        if (i[1] - i[0] < 1) return 0
        var o = 1
        40 < r && (o = Math.max(1, Math.floor(r / 40)))
        for (
          var a = i[0],
            s = d.dataToCoord(a + 1) - d.dataToCoord(a),
            l = Math.abs(s * Math.cos(n)),
            s = Math.abs(s * Math.sin(n)),
            u = 0,
            h = 0;
          a <= i[1];
          a += o
        )
          var c =
              1.3 * (p = Er(e({ value: a }), t.font, 'center', 'top')).width,
            p = 1.3 * p.height,
            u = Math.max(u, c, 7),
            h = Math.max(h, p, 7)
        var n = u / l,
          l = h / s,
          s =
            (isNaN(n) && (n = 1 / 0),
            isNaN(l) && (l = 1 / 0),
            Math.max(0, Math.floor(Math.min(n, l)))),
          n = l1(d.model),
          l = d.getExtent(),
          d = n.lastAutoInterval,
          f = n.lastTickCount
        return (
          null != d &&
          null != f &&
          Math.abs(d - s) <= 1 &&
          Math.abs(f - r) <= 1 &&
          s < d &&
          n.axisExtent0 === l[0] &&
          n.axisExtent1 === l[1]
            ? (s = d)
            : ((n.lastTickCount = r),
              (n.lastAutoInterval = s),
              (n.axisExtent0 = l[0]),
              (n.axisExtent1 = l[1])),
          s
        )
      }),
      v1)
  function v1 (t, e, n) {
    ;(this.onBand = !1),
      (this.inverse = !1),
      (this.dim = t),
      (this.scale = e),
      (this._extent = n || [0, 0])
  }
  function _1 (t, e) {
    e = (t[1] - t[0]) / e / 2
    ;(t[0] += e), (t[1] -= e)
  }
  var x1 = 2 * Math.PI,
    w1 = us.CMD,
    b1 = ['top', 'right', 'bottom', 'left']
  function S1 (t, e, n, i, r, o, a, s) {
    var l = r - t,
      u = o - e,
      n = n - t,
      i = i - e,
      h = Math.sqrt(n * n + i * i),
      l = (l * (n /= h) + u * (i /= h)) / h,
      u = (s && (l = Math.min(Math.max(l, 0), 1)), (a[0] = t + (l *= h) * n)),
      s = (a[1] = e + l * i)
    return Math.sqrt((u - r) * (u - r) + (s - o) * (s - o))
  }
  function M1 (t, e, n, i, r, o, a) {
    n < 0 && ((t += n), (n = -n)), i < 0 && ((e += i), (i = -i))
    ;(n = t + n),
      (i = e + i),
      (t = a[0] = Math.min(Math.max(r, t), n)),
      (n = a[1] = Math.min(Math.max(o, e), i))
    return Math.sqrt((t - r) * (t - r) + (n - o) * (n - o))
  }
  var T1 = []
  function C1 (t, e, n) {
    for (
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p = 0,
        d = 0,
        f = 0,
        g = 0,
        y = 1 / 0,
        m = e.data,
        v = t.x,
        _ = t.y,
        x = 0;
      x < m.length;

    ) {
      var w = m[x++],
        b = (1 === x && ((f = p = m[x]), (g = d = m[x + 1])), y)
      switch (w) {
        case w1.M:
          ;(p = f = m[x++]), (d = g = m[x++])
          break
        case w1.L:
          ;(b = S1(p, d, m[x], m[x + 1], v, _, T1, !0)),
            (p = m[x++]),
            (d = m[x++])
          break
        case w1.C:
          ;(b = Wn(
            p,
            d,
            m[x++],
            m[x++],
            m[x++],
            m[x++],
            m[x],
            m[x + 1],
            v,
            _,
            T1
          )),
            (p = m[x++]),
            (d = m[x++])
          break
        case w1.Q:
          ;(b = qn(p, d, m[x++], m[x++], m[x], m[x + 1], v, _, T1)),
            (p = m[x++]),
            (d = m[x++])
          break
        case w1.A:
          var S = m[x++],
            M = m[x++],
            T = m[x++],
            C = m[x++],
            I = m[x++],
            k = m[x++],
            D = ((x += 1), !!(1 - m[x++])),
            A = Math.cos(I) * T + S,
            P = Math.sin(I) * C + M
          x <= 1 && ((f = A), (g = P)),
            (P = (A = I) + k),
            (D = D),
            (a = ((v - (i = S)) * (o = C)) / T + S),
            (s = _),
            (l = T1),
            (c = h = u = void 0),
            (a -= i),
            (s -= r = M),
            (u = Math.sqrt(a * a + s * s)),
            (h = (a /= u) * o + i),
            (c = (s /= u) * o + r),
            (b =
              Math.abs(A - P) % x1 < 1e-4 ||
              ((P = D ? ((D = A), (A = ps(P)), ps(D)) : ((A = ps(A)), ps(P))) <
                A && (P += x1),
              (D = Math.atan2(s, a)) < 0 && (D += x1),
              A <= D && D <= P) ||
              (A <= D + x1 && D + x1 <= P)
                ? ((l[0] = h), (l[1] = c), u - o)
                : (c =
                    ((D = o * Math.cos(A) + i) - a) * (D - a) +
                    ((h = o * Math.sin(A) + r) - s) * (h - s)) <
                  (i =
                    ((u = o * Math.cos(P) + i) - a) * (u - a) +
                    ((A = o * Math.sin(P) + r) - s) * (A - s))
                ? ((l[0] = D), (l[1] = h), Math.sqrt(c))
                : ((l[0] = u), (l[1] = A), Math.sqrt(i))),
            (p = Math.cos(I + k) * T + S),
            (d = Math.sin(I + k) * C + M)
          break
        case w1.R:
          b = M1((f = p = m[x++]), (g = d = m[x++]), m[x++], m[x++], v, _, T1)
          break
        case w1.Z:
          ;(b = S1(p, d, f, g, v, _, T1, !0)), (p = f), (d = g)
      }
      b < y && ((y = b), n.set(T1[0], T1[1]))
    }
    return y
  }
  var I1 = new G(),
    Y = new G(),
    k1 = new G(),
    D1 = new G(),
    A1 = new G()
  function P1 (t, e) {
    if (t) {
      var n = t.getTextGuideLine(),
        i = t.getTextContent()
      if (i && n) {
        var r = t.textGuideLineConfig || {},
          o = [
            [0, 0],
            [0, 0],
            [0, 0]
          ],
          a = r.candidates || b1,
          s = i.getBoundingRect().clone(),
          l = (s.applyTransform(i.getComputedTransform()), 1 / 0),
          u = r.anchor,
          h = t.getComputedTransform(),
          c = h && Ve([], h),
          p = e.get('length2') || 0
        u && k1.copy(u)
        for (var d = 0; d < a.length; d++) {
          x = _ = v = m = y = g = f = void 0
          var f = a[d],
            g = 0,
            y = s,
            m = I1,
            v = D1,
            _ = y.width,
            x = y.height
          switch (f) {
            case 'top':
              m.set(y.x + _ / 2, y.y - g), v.set(0, -1)
              break
            case 'bottom':
              m.set(y.x + _ / 2, y.y + x + g), v.set(0, 1)
              break
            case 'left':
              m.set(y.x - g, y.y + x / 2), v.set(-1, 0)
              break
            case 'right':
              m.set(y.x + _ + g, y.y + x / 2), v.set(1, 0)
          }
          G.scaleAndAdd(Y, I1, D1, p), Y.transform(c)
          ;(f = t.getBoundingRect()),
            (f = u
              ? u.distance(Y)
              : t instanceof Is
              ? C1(Y, t.path, k1)
              : ((b = k1),
                (w = M1((w = f).x, f.y, f.width, f.height, Y.x, Y.y, T1)),
                b.set(T1[0], T1[1]),
                w))
          f < l &&
            ((l = f),
            Y.transform(h),
            k1.transform(h),
            k1.toArray(o[0]),
            Y.toArray(o[1]),
            I1.toArray(o[2]))
        }
        R1(o, e.get('minTurnAngle')), n.setShape({ points: o })
      }
    }
    var w, b
  }
  var L1 = [],
    O1 = new G()
  function R1 (t, e) {
    var n, i
    e <= 180 &&
      0 < e &&
      ((e = (e / 180) * Math.PI),
      I1.fromArray(t[0]),
      Y.fromArray(t[1]),
      k1.fromArray(t[2]),
      G.sub(D1, I1, Y),
      G.sub(A1, k1, Y),
      (i = D1.len()),
      (n = A1.len()),
      i < 0.001 ||
        n < 0.001 ||
        (D1.scale(1 / i),
        A1.scale(1 / n),
        (i = D1.dot(A1)),
        Math.cos(e) < i &&
          ((n = S1(Y.x, Y.y, k1.x, k1.y, I1.x, I1.y, L1, !1)),
          O1.fromArray(L1),
          O1.scaleAndAdd(A1, n / Math.tan(Math.PI - e)),
          (i =
            k1.x !== Y.x
              ? (O1.x - Y.x) / (k1.x - Y.x)
              : (O1.y - Y.y) / (k1.y - Y.y)),
          isNaN(i) ||
            (i < 0 ? G.copy(O1, Y) : 1 < i && G.copy(O1, k1),
            O1.toArray(t[1])))))
  }
  function N1 (t, e, n, i) {
    var r = 'normal' === n,
      n = r ? t : t.ensureState(n),
      e = ((n.ignore = e), i.get('smooth')),
      e =
        (e && !0 === e && (e = 0.3),
        (n.shape = n.shape || {}),
        0 < e && (n.shape.smooth = e),
        i.getModel('lineStyle').getLineStyle())
    r ? t.useStyle(e) : (n.style = e)
  }
  function B1 (t, e) {
    var n = e.smooth,
      i = e.points
    if (i)
      if ((t.moveTo(i[0][0], i[0][1]), 0 < n && 3 <= i.length)) {
        var e = Qt(i[0], i[1]),
          r = Qt(i[1], i[2])
        e && r
          ? ((n = Math.min(e, r) * n),
            (e = ee([], i[1], i[0], n / e)),
            (n = ee([], i[1], i[2], n / r)),
            (r = ee([], e, n, 0.5)),
            t.bezierCurveTo(e[0], e[1], e[0], e[1], r[0], r[1]),
            t.bezierCurveTo(n[0], n[1], n[0], n[1], i[2][0], i[2][1]))
          : (t.lineTo(i[1][0], i[1][1]), t.lineTo(i[2][0], i[2][1]))
      } else for (var o = 1; o < i.length; o++) t.lineTo(i[o][0], i[o][1])
  }
  function z1 (t, e, n) {
    var i = t.getTextGuideLine(),
      r = t.getTextContent()
    if (r) {
      for (
        var o = e.normal, a = o.get('show'), s = r.ignore, l = 0;
        l < vl.length;
        l++
      ) {
        var u,
          h = vl[l],
          c = e[h],
          p = 'normal' === h
        c &&
          ((u = c.get('show')),
          (p ? s : N(r.states[h] && r.states[h].ignore, s)) || !N(u, a)
            ? (u = p ? i : i && i.states[h]) && (u.ignore = !0)
            : (i ||
                ((i = new sh()),
                t.setTextGuideLine(i),
                p || (!s && a) || N1(i, !0, 'normal', e.normal),
                t.stateProxy && (i.stateProxy = t.stateProxy)),
              N1(i, !1, h, c)))
      }
      i &&
        (E(i.style, n),
        (i.style.fill = null),
        (n = o.get('showAbove')),
        ((t.textGuideLineConfig = t.textGuideLineConfig || {}).showAbove =
          n || !1),
        (i.buildPath = B1))
    } else i && t.removeTextGuideLine()
  }
  function E1 (t, e) {
    for (
      var n = { normal: t.getModel((e = e || 'labelLine')) }, i = 0;
      i < ml.length;
      i++
    ) {
      var r = ml[i]
      n[r] = t.getModel([r, e])
    }
    return n
  }
  function F1 (t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var i,
        r,
        o,
        a,
        s,
        l,
        u = t[n]
      u.defaultAttr.ignore ||
        ((r = (i = u.label).getComputedTransform()),
        (o = i.getBoundingRect()),
        (a = !r || (r[1] < 1e-5 && r[2] < 1e-5)),
        (l = i.style.margin || 0),
        (s = o.clone()).applyTransform(r),
        (s.x -= l / 2),
        (s.y -= l / 2),
        (s.width += l),
        (s.height += l),
        (l = a ? new Eh(o, r) : null),
        e.push({
          label: i,
          labelLine: u.labelLine,
          rect: s,
          localRect: o,
          obb: l,
          priority: u.priority,
          defaultAttr: u.defaultAttr,
          layoutOption: u.computedLayoutOption,
          axisAligned: a,
          transform: r
        }))
    }
    return e
  }
  function V1 (s, l, u, t, e, n) {
    var h = s.length
    if (!(h < 2)) {
      s.sort(function (t, e) {
        return t.rect[l] - e.rect[l]
      })
      for (var i, r = 0, o = !1, a = [], c = 0, p = 0; p < h; p++) {
        var d = s[p],
          f = d.rect,
          d =
            ((i = f[l] - r) < 0 && ((f[l] -= i), (d.label[l] -= i), (o = !0)),
            Math.max(-i, 0))
        a.push(d), (c += d), (r = f[l] + f[u])
      }
      0 < c && n && w(-c / h, 0, h)
      var g,
        y,
        m = s[0],
        v = s[h - 1]
      return (
        _(),
        g < 0 && b(-g, 0.8),
        y < 0 && b(y, 0.8),
        _(),
        x(g, y, 1),
        x(y, g, -1),
        _(),
        g < 0 && S(-g),
        y < 0 && S(y),
        o
      )
    }
    function _ () {
      ;(g = m.rect[l] - t), (y = e - v.rect[l] - v.rect[u])
    }
    function x (t, e, n) {
      t < 0 &&
        (0 < (e = Math.min(e, -t))
          ? (w(e * n, 0, h), (e = e + t) < 0 && b(-e * n, 1))
          : b(-t * n, 1))
    }
    function w (t, e, n) {
      0 !== t && (o = !0)
      for (var i = e; i < n; i++) {
        var r = s[i]
        ;(r.rect[l] += t), (r.label[l] += t)
      }
    }
    function b (t, e) {
      for (var n = [], i = 0, r = 1; r < h; r++) {
        var o = s[r - 1].rect,
          o = Math.max(s[r].rect[l] - o[l] - o[u], 0)
        n.push(o), (i += o)
      }
      if (i) {
        var a = Math.min(Math.abs(t) / i, e)
        if (0 < t) for (r = 0; r < h - 1; r++) w(n[r] * a, 0, r + 1)
        else for (r = h - 1; 0 < r; r--) w(-n[r - 1] * a, r, h)
      }
    }
    function S (t) {
      var e = t < 0 ? -1 : 1
      t = Math.abs(t)
      for (var n = Math.ceil(t / (h - 1)), i = 0; i < h - 1; i++)
        if ((0 < e ? w(n, 0, i + 1) : w(-n, h - i - 1, h), (t -= n) <= 0))
          return
    }
  }
  function H1 (t, e, n, i) {
    return V1(t, 'y', 'height', e, n, i)
  }
  function W1 (t) {
    var e = [],
      n =
        (t.sort(function (t, e) {
          return e.priority - t.priority
        }),
        new U(0, 0, 0, 0))
    function i (t) {
      var e
      t.ignore ||
        (null == (e = t.ensureState('emphasis')).ignore && (e.ignore = !1)),
        (t.ignore = !0)
    }
    for (var r = 0; r < t.length; r++) {
      var o = t[r],
        a = o.axisAligned,
        s = o.localRect,
        l = o.transform,
        u = o.label,
        h = o.labelLine
      n.copy(o.rect),
        (n.width -= 0.1),
        (n.height -= 0.1),
        (n.x += 0.05),
        (n.y += 0.05)
      for (var c = o.obb, p = !1, d = 0; d < e.length; d++) {
        var f = e[d]
        if (n.intersect(f.rect)) {
          if (a && f.axisAligned) {
            p = !0
            break
          }
          if (
            (f.obb || (f.obb = new Eh(f.localRect, f.transform)),
            (c = c || new Eh(s, l)).intersect(f.obb))
          ) {
            p = !0
            break
          }
        }
      }
      p
        ? (i(u), h && i(h))
        : (u.attr('ignore', o.defaultAttr.ignore),
          h && h.attr('ignore', o.defaultAttr.labelGuideIgnore),
          e.push(o))
    }
  }
  function G1 (t, e) {
    var n = t.label,
      e = e && e.getTextGuideLine()
    return {
      dataIndex: t.dataIndex,
      dataType: t.dataType,
      seriesIndex: t.seriesModel.seriesIndex,
      text: t.label.style.text,
      rect: t.hostRect,
      labelRect: t.rect,
      align: n.style.align,
      verticalAlign: n.style.verticalAlign,
      labelLinePoints: (function (t) {
        if (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice())
          return e
        }
      })(e && e.shape.points)
    }
  }
  var U1 = ['align', 'verticalAlign', 'width', 'height', 'fontSize'],
    X1 = new Pr(),
    Y1 = Yo(),
    q1 = Yo()
  function j1 (t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var r = n[i]
      null != e[r] && (t[r] = e[r])
    }
  }
  var Z1 = ['x', 'y', 'rotation'],
    K1 =
      (($1.prototype.clearLabels = function () {
        ;(this._labelList = []), (this._chartViewList = [])
      }),
      ($1.prototype._addLabel = function (t, e, n, i, r) {
        var o = i.style,
          a = i.__hostTarget.textConfig || {},
          s = i.getComputedTransform(),
          l = i.getBoundingRect().plain()
        U.applyTransform(l, l, s),
          s
            ? X1.setLocalTransform(s)
            : ((X1.x = X1.y = X1.rotation = X1.originX = X1.originY = 0),
              (X1.scaleX = X1.scaleY = 1)),
          (X1.rotation = ps(X1.rotation))
        var u,
          s = i.__hostTarget,
          h =
            (s &&
              ((u = s.getBoundingRect().plain()),
              (h = s.getComputedTransform()),
              U.applyTransform(u, u, h)),
            u && s.getTextGuideLine())
        this._labelList.push({
          label: i,
          labelLine: h,
          seriesModel: n,
          dataIndex: t,
          dataType: e,
          layoutOption: r,
          computedLayoutOption: null,
          rect: l,
          hostRect: u,
          priority: u ? u.width * u.height : 0,
          defaultAttr: {
            ignore: i.ignore,
            labelGuideIgnore: h && h.ignore,
            x: X1.x,
            y: X1.y,
            scaleX: X1.scaleX,
            scaleY: X1.scaleY,
            rotation: X1.rotation,
            style: {
              x: o.x,
              y: o.y,
              align: o.align,
              verticalAlign: o.verticalAlign,
              width: o.width,
              height: o.height,
              fontSize: o.fontSize
            },
            cursor: i.cursor,
            attachedPos: a.position,
            attachedRot: a.rotation
          }
        })
      }),
      ($1.prototype.addLabelsOfSeries = function (t) {
        var n = this,
          i = (this._chartViewList.push(t), t.__model),
          r = i.get('labelLayout')
        ;(S(r) || R(r).length) &&
          t.group.traverse(function (t) {
            if (t.ignore) return !0
            var e = t.getTextContent(),
              t = ul(t)
            e &&
              !e.disableLabelLayout &&
              n._addLabel(t.dataIndex, t.dataType, i, e, r)
          })
      }),
      ($1.prototype.updateLayoutConfig = function (t) {
        var e = t.getWidth(),
          n = t.getHeight()
        for (var i = 0; i < this._labelList.length; i++) {
          var r = this._labelList[i],
            o = r.label,
            a = o.__hostTarget,
            s = r.defaultAttr,
            l = void 0,
            l =
              (S(r.layoutOption) ? r.layoutOption(G1(r, a)) : r.layoutOption) ||
              {},
            u = ((r.computedLayoutOption = l), Math.PI / 180),
            h =
              (a &&
                a.setTextConfig({
                  local: !1,
                  position: null != l.x || null != l.y ? null : s.attachedPos,
                  rotation: null != l.rotate ? l.rotate * u : s.attachedRot,
                  offset: [l.dx || 0, l.dy || 0]
                }),
              !1)
          null != l.x
            ? ((o.x = fo(l.x, e)), o.setStyle('x', 0), (h = !0))
            : ((o.x = s.x), o.setStyle('x', s.style.x)),
            null != l.y
              ? ((o.y = fo(l.y, n)), o.setStyle('y', 0), (h = !0))
              : ((o.y = s.y), o.setStyle('y', s.style.y)),
            l.labelLinePoints &&
              (c = a.getTextGuideLine()) &&
              (c.setShape({ points: l.labelLinePoints }), (h = !1)),
            (Y1(o).needsUpdateLabelLine = h),
            (o.rotation = null != l.rotate ? l.rotate * u : s.rotation),
            (o.scaleX = s.scaleX),
            (o.scaleY = s.scaleY)
          for (var c, p = 0; p < U1.length; p++) {
            var d = U1[p]
            o.setStyle(d, (null != l[d] ? l : s.style)[d])
          }
          l.draggable
            ? ((o.draggable = !0),
              (o.cursor = 'move'),
              a &&
                ((c = r.seriesModel),
                null != r.dataIndex &&
                  (c = r.seriesModel
                    .getData(r.dataType)
                    .getItemModel(r.dataIndex)),
                o.on(
                  'drag',
                  (function (t, e) {
                    return function () {
                      P1(t, e)
                    }
                  })(a, c.getModel('labelLine'))
                )))
            : (o.off('drag'), (o.cursor = s.cursor))
        }
      }),
      ($1.prototype.layout = function (t) {
        var e,
          n = t.getWidth(),
          t = t.getHeight(),
          i = F1(this._labelList),
          r = ct(i, function (t) {
            return 'shiftX' === t.layoutOption.moveOverlap
          }),
          o = ct(i, function (t) {
            return 'shiftY' === t.layoutOption.moveOverlap
          })
        V1(r, 'x', 'width', 0, n, e),
          H1(o, 0, t),
          W1(
            ct(i, function (t) {
              return t.layoutOption.hideOverlap
            })
          )
      }),
      ($1.prototype.processLabelsOverall = function () {
        var a = this
        B(this._chartViewList, function (t) {
          var i = t.__model,
            r = t.ignoreLabelLineUpdate,
            o = i.isAnimationEnabled()
          t.group.traverse(function (t) {
            if (t.ignore && !t.forceLabelAnimation) return !0
            var e = !r,
              n = t.getTextContent()
            ;(e = !e && n ? Y1(n).needsUpdateLabelLine : e) &&
              a._updateLabelLine(t, i),
              o && a._animateLabels(t, i)
          })
        })
      }),
      ($1.prototype._updateLabelLine = function (t, e) {
        var n = t.getTextContent(),
          i = ul(t),
          r = i.dataIndex
        n &&
          null != r &&
          ((e = (n = e.getData(i.dataType)).getItemModel(r)),
          (i = {}),
          (r = n.getItemVisual(r, 'style')) &&
            ((n = n.getVisual('drawType')), (i.stroke = r[n])),
          (r = e.getModel('labelLine')),
          z1(t, E1(e), i),
          P1(t, r))
      }),
      ($1.prototype._animateLabels = function (t, e) {
        var n,
          i,
          r,
          o,
          a,
          s = t.getTextContent(),
          l = t.getTextGuideLine()
        !s ||
          (!t.forceLabelAnimation &&
            (s.ignore || s.invisible || t.disableLabelAnimation || qh(t))) ||
          ((r = (o = Y1(s)).oldLayout),
          (n = (i = ul(t)).dataIndex),
          (a = { x: s.x, y: s.y, rotation: s.rotation }),
          (i = e.getData(i.dataType)),
          r
            ? (s.attr(r),
              (t = t.prevStates) &&
                (0 <= I(t, 'select') && s.attr(o.oldLayoutSelect),
                0 <= I(t, 'emphasis')) &&
                s.attr(o.oldLayoutEmphasis),
              Xh(s, a, e, n))
            : (s.attr(a),
              Rc(s).valueAnimation ||
                ((t = N(s.style.opacity, 1)),
                (s.style.opacity = 0),
                Yh(s, { style: { opacity: t } }, e, n))),
          (o.oldLayout = a),
          s.states.select &&
            (j1((t = o.oldLayoutSelect = {}), a, Z1),
            j1(t, s.states.select, Z1)),
          s.states.emphasis &&
            (j1((t = o.oldLayoutEmphasis = {}), a, Z1),
            j1(t, s.states.emphasis, Z1)),
          Nc(s, n, i, e, e)),
          !l ||
            l.ignore ||
            l.invisible ||
            ((r = (o = q1(l)).oldLayout),
            (a = { points: l.shape.points }),
            r
              ? (l.attr({ shape: r }), Xh(l, { shape: a }, e))
              : (l.setShape(a),
                (l.style.strokePercent = 0),
                Yh(l, { style: { strokePercent: 1 } }, e)),
            (o.oldLayout = a))
      }),
      $1)
  function $1 () {
    ;(this._labelList = []), (this._chartViewList = [])
  }
  var Q1 = Yo()
  function J1 (t) {
    t.registerUpdateLifecycle('series:beforeupdate', function (t, e, n) {
      ;(Q1(e).labelManager || (Q1(e).labelManager = new K1())).clearLabels()
    }),
      t.registerUpdateLifecycle('series:layoutlabels', function (t, e, n) {
        var i = Q1(e).labelManager
        n.updatedSeries.forEach(function (t) {
          i.addLabelsOfSeries(e.getViewOfSeriesModel(t))
        }),
          i.updateLayoutConfig(e),
          i.layout(e),
          i.processLabelsOverall()
      })
  }
  function tx (t, e, n) {
    var i = q.createCanvas(),
      r = e.getWidth(),
      e = e.getHeight(),
      o = i.style
    return (
      o &&
        ((o.position = 'absolute'),
        (o.left = '0'),
        (o.top = '0'),
        (o.width = r + 'px'),
        (o.height = e + 'px'),
        i.setAttribute('data-zr-dom-id', t)),
      (i.width = r * n),
      (i.height = e * n),
      i
    )
  }
  U_(J1)
  u(ix, (ex = ue)),
    (ix.prototype.getElementCount = function () {
      return this.__endIndex - this.__startIndex
    }),
    (ix.prototype.afterBrush = function () {
      ;(this.__prevStartIndex = this.__startIndex),
        (this.__prevEndIndex = this.__endIndex)
    }),
    (ix.prototype.initContext = function () {
      ;(this.ctx = this.dom.getContext('2d')), (this.ctx.dpr = this.dpr)
    }),
    (ix.prototype.setUnpainted = function () {
      this.__firstTimePaint = !0
    }),
    (ix.prototype.createBackBuffer = function () {
      var t = this.dpr
      ;(this.domBack = tx('back-' + this.id, this.painter, t)),
        (this.ctxBack = this.domBack.getContext('2d')),
        1 !== t && this.ctxBack.scale(t, t)
    }),
    (ix.prototype.createRepaintRects = function (t, e, n, i) {
      if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null
      var r,
        l = [],
        u = this.maxRepaintRectCount,
        h = !1,
        c = new U(0, 0, 0, 0)
      function o (t) {
        if (t.isFinite() && !t.isZero())
          if (0 === l.length) (e = new U(0, 0, 0, 0)).copy(t), l.push(e)
          else {
            for (var e, n = !1, i = 1 / 0, r = 0, o = 0; o < l.length; ++o) {
              var a = l[o]
              if (a.intersect(t)) {
                var s = new U(0, 0, 0, 0)
                s.copy(a), s.union(t), (l[o] = s), (n = !0)
                break
              }
              h &&
                (c.copy(t),
                c.union(a),
                (s = t.width * t.height),
                (a = a.width * a.height),
                (a = c.width * c.height - s - a) < i) &&
                ((i = a), (r = o))
            }
            h && (l[r].union(t), (n = !0)),
              n || ((e = new U(0, 0, 0, 0)).copy(t), l.push(e)),
              (h = h || l.length >= u)
          }
      }
      for (var a, s = this.__startIndex; s < this.__endIndex; ++s)
        (p = t[s]) &&
          ((f = p.shouldBePainted(n, i, !0, !0)),
          (d =
            p.__isRendered && (p.__dirty & vn || !f)
              ? p.getPrevPaintRect()
              : null) && o(d),
          (a =
            f && (p.__dirty & vn || !p.__isRendered)
              ? p.getPaintRect()
              : null)) &&
          o(a)
      for (s = this.__prevStartIndex; s < this.__prevEndIndex; ++s) {
        var p,
          d,
          f = (p = e[s]).shouldBePainted(n, i, !0, !0)
        !p ||
          (f && p.__zr) ||
          !p.__isRendered ||
          ((d = p.getPrevPaintRect()) && o(d))
      }
      do {
        for (r = !1, s = 0; s < l.length; )
          if (l[s].isZero()) l.splice(s, 1)
          else {
            for (var g = s + 1; g < l.length; )
              l[s].intersect(l[g])
                ? ((r = !0), l[s].union(l[g]), l.splice(g, 1))
                : g++
            s++
          }
      } while (r)
      return (this._paintRects = l)
    }),
    (ix.prototype.debugGetPaintRects = function () {
      return (this._paintRects || []).slice()
    }),
    (ix.prototype.resize = function (t, e) {
      var n = this.dpr,
        i = this.dom,
        r = i.style,
        o = this.domBack
      r && ((r.width = t + 'px'), (r.height = e + 'px')),
        (i.width = t * n),
        (i.height = e * n),
        o &&
          ((o.width = t * n), (o.height = e * n), 1 !== n) &&
          this.ctxBack.scale(n, n)
    }),
    (ix.prototype.clear = function (t, o, e) {
      var n = this.dom,
        a = this.ctx,
        i = n.width,
        r = n.height,
        s = ((o = o || this.clearColor), this.motionBlur && !t),
        l = this.lastFrameAlpha,
        u = this.dpr,
        h = this,
        c =
          (s &&
            (this.domBack || this.createBackBuffer(),
            (this.ctxBack.globalCompositeOperation = 'copy'),
            this.ctxBack.drawImage(n, 0, 0, i / u, r / u)),
          this.domBack)
      function p (t, e, n, i) {
        var r
        a.clearRect(t, e, n, i),
          o &&
            'transparent' !== o &&
            ((r = void 0),
            vt(o)
              ? ((r =
                  ((o.global || (o.__width === n && o.__height === i)) &&
                    o.__canvasGradient) ||
                  f0(a, o, { x: 0, y: 0, width: n, height: i })),
                (o.__canvasGradient = r),
                (o.__width = n),
                (o.__height = i))
              : _t(o) &&
                ((o.scaleX = o.scaleX || u),
                (o.scaleY = o.scaleY || u),
                (r = M0(a, o, {
                  dirty: function () {
                    h.setUnpainted(), h.__painter.refresh()
                  }
                }))),
            a.save(),
            (a.fillStyle = r || o),
            a.fillRect(t, e, n, i),
            a.restore()),
          s &&
            (a.save(),
            (a.globalAlpha = l),
            a.drawImage(c, t, e, n, i),
            a.restore())
      }
      !e || s
        ? p(0, 0, i, r)
        : e.length &&
          B(e, function (t) {
            p(t.x * u, t.y * u, t.width * u, t.height * u)
          })
    })
  var ex,
    nx = ix
  function ix (t, e, n) {
    var i,
      r = ex.call(this) || this,
      t =
        ((r.motionBlur = !1),
        (r.lastFrameAlpha = 0.7),
        (r.dpr = 1),
        (r.virtual = !1),
        (r.config = {}),
        (r.incremental = !1),
        (r.zlevel = 0),
        (r.maxRepaintRectCount = 5),
        (r.__dirty = !0),
        (r.__firstTimePaint = !0),
        (r.__used = !1),
        (r.__drawIndex = 0),
        (r.__startIndex = 0),
        (r.__endIndex = 0),
        (r.__prevStartIndex = null),
        (r.__prevEndIndex = null),
        (n = n || br),
        'string' == typeof t ? (i = tx(t, e, n)) : L(t) && (t = (i = t).id),
        (r.id = t),
        (r.dom = i).style)
    return (
      t &&
        (Et(i),
        (i.onselectstart = function () {
          return !1
        }),
        (t.padding = '0'),
        (t.margin = '0'),
        (t.borderWidth = '0')),
      (r.painter = e),
      (r.dpr = n),
      r
    )
  }
  var rx = 314159
  ;(y.prototype.getType = function () {
    return 'canvas'
  }),
    (y.prototype.isSingleCanvas = function () {
      return this._singleCanvas
    }),
    (y.prototype.getViewportRoot = function () {
      return this._domRoot
    }),
    (y.prototype.getViewportRootOffset = function () {
      var t = this.getViewportRoot()
      if (t)
        return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 }
    }),
    (y.prototype.refresh = function (t) {
      var e = this.storage.getDisplayList(!0),
        n = this._prevDisplayList,
        i = this._zlevelList
      ;(this._redrawId = Math.random()),
        this._paintList(e, n, t, this._redrawId)
      for (var r = 0; r < i.length; r++) {
        var o,
          a = i[r],
          a = this._layers[a]
        !a.__builtin__ &&
          a.refresh &&
          ((o = 0 === r ? this._backgroundColor : null), a.refresh(o))
      }
      return (
        this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
      )
    }),
    (y.prototype.refreshHover = function () {
      this._paintHoverList(this.storage.getDisplayList(!1))
    }),
    (y.prototype._paintHoverList = function (t) {
      var e = t.length,
        n = this._hoverlayer
      if ((n && n.clear(), e)) {
        for (
          var i,
            r = {
              inHover: !0,
              viewWidth: this._width,
              viewHeight: this._height
            },
            o = 0;
          o < e;
          o++
        ) {
          var a = t[o]
          a.__inHover &&
            ((n = n || (this._hoverlayer = this.getLayer(1e5))),
            i || (i = n.ctx).save(),
            z0(i, a, r, o === e - 1))
        }
        i && i.restore()
      }
    }),
    (y.prototype.getHoverLayer = function () {
      return this.getLayer(1e5)
    }),
    (y.prototype.paintOne = function (t, e) {
      B0(t, e)
    }),
    (y.prototype._paintList = function (t, e, n, i) {
      var r, o, a
      this._redrawId === i &&
        ((n = n || !1),
        this._updateLayerStatus(t),
        (r = (o = this._doPaintList(t, e, n)).finished),
        (o = o.needsRefreshHover),
        this._needsManuallyCompositing && this._compositeManually(),
        o && this._paintHoverList(t),
        r
          ? this.eachLayer(function (t) {
              t.afterBrush && t.afterBrush()
            })
          : ((a = this),
            Tn(function () {
              a._paintList(t, e, n, i)
            })))
    }),
    (y.prototype._compositeManually = function () {
      var e = this.getLayer(rx).ctx,
        n = this._domRoot.width,
        i = this._domRoot.height
      e.clearRect(0, 0, n, i),
        this.eachBuiltinLayer(function (t) {
          t.virtual && e.drawImage(t.dom, 0, 0, n, i)
        })
    }),
    (y.prototype._doPaintList = function (d, f, g) {
      for (
        var y = this, m = [], v = this._opts.useDirtyRect, t = 0;
        t < this._zlevelList.length;
        t++
      ) {
        var e = this._zlevelList[t],
          e = this._layers[e]
        e.__builtin__ && e !== this._hoverlayer && (e.__dirty || g) && m.push(e)
      }
      for (var _ = !0, x = !1, w = this, n = 0; n < m.length; n++)
        !(function (t) {
          function e (t) {
            var e = {
              inHover: !1,
              allClipped: !1,
              prevEl: null,
              viewWidth: y._width,
              viewHeight: y._height
            }
            for (i = s; i < r.__endIndex; i++) {
              var n = d[i]
              if (
                (n.__inHover && (x = !0),
                y._doPaintEl(n, r, v, t, e, i === r.__endIndex - 1),
                l && 15 < Date.now() - u)
              )
                break
            }
            e.prevElClipPaths && o.restore()
          }
          var i,
            n,
            r = m[t],
            o = r.ctx,
            a = v && r.createRepaintRects(d, f, w._width, w._height),
            s = g ? r.__startIndex : r.__drawIndex,
            l = !g && r.incremental && Date.now,
            u = l && Date.now(),
            t = r.zlevel === w._zlevelList[0] ? w._backgroundColor : null
          ;(r.__startIndex !== r.__endIndex &&
            (s !== r.__startIndex ||
              ((n = d[s]).incremental && n.notClear && !g))) ||
            r.clear(!1, t, a),
            -1 === s &&
              (console.error('For some unknown reason. drawIndex is -1'),
              (s = r.__startIndex))
          if (a)
            if (0 === a.length) i = r.__endIndex
            else
              for (var h = w.dpr, c = 0; c < a.length; ++c) {
                var p = a[c]
                o.save(),
                  o.beginPath(),
                  o.rect(p.x * h, p.y * h, p.width * h, p.height * h),
                  o.clip(),
                  e(p),
                  o.restore()
              }
          else o.save(), e(), o.restore()
          ;(r.__drawIndex = i), r.__drawIndex < r.__endIndex && (_ = !1)
        })(n)
      return (
        b.wxa &&
          B(this._layers, function (t) {
            t && t.ctx && t.ctx.draw && t.ctx.draw()
          }),
        { finished: _, needsRefreshHover: x }
      )
    }),
    (y.prototype._doPaintEl = function (t, e, n, i, r, o) {
      e = e.ctx
      n
        ? ((n = t.getPaintRect()),
          (!i || (n && n.intersect(i))) &&
            (z0(e, t, r, o), t.setPrevPaintRect(n)))
        : z0(e, t, r, o)
    }),
    (y.prototype.getLayer = function (t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = rx)
      var n = this._layers[t]
      return (
        n ||
          (((n = new nx('zr_' + t, this, this.dpr)).zlevel = t),
          (n.__builtin__ = !0),
          this._layerConfig[t]
            ? d(n, this._layerConfig[t], !0)
            : this._layerConfig[t - 0.01] &&
              d(n, this._layerConfig[t - 0.01], !0),
          e && (n.virtual = e),
          this.insertLayer(t, n),
          n.initContext()),
        n
      )
    }),
    (y.prototype.insertLayer = function (t, e) {
      var n,
        i = this._layers,
        r = this._zlevelList,
        o = r.length,
        a = this._domRoot,
        s = null,
        l = -1
      if (
        !i[t] &&
        (n = e) &&
        (n.__builtin__ ||
          ('function' == typeof n.resize && 'function' == typeof n.refresh))
      ) {
        if (0 < o && t > r[0]) {
          for (l = 0; l < o - 1 && !(r[l] < t && r[l + 1] > t); l++);
          s = i[r[l]]
        }
        r.splice(l + 1, 0, t),
          (i[t] = e).virtual ||
            (s
              ? (n = s.dom).nextSibling
                ? a.insertBefore(e.dom, n.nextSibling)
                : a.appendChild(e.dom)
              : a.firstChild
              ? a.insertBefore(e.dom, a.firstChild)
              : a.appendChild(e.dom)),
          (e.__painter = this)
      }
    }),
    (y.prototype.eachLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i]
        t.call(e, this._layers[r], r)
      }
    }),
    (y.prototype.eachBuiltinLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r]
        o.__builtin__ && t.call(e, o, r)
      }
    }),
    (y.prototype.eachOtherLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r]
        o.__builtin__ || t.call(e, o, r)
      }
    }),
    (y.prototype.getLayers = function () {
      return this._layers
    }),
    (y.prototype._updateLayerStatus = function (t) {
      function e (t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), (r.__endIndex = t))
      }
      if (
        (this.eachBuiltinLayer(function (t, e) {
          t.__dirty = t.__used = !1
        }),
        this._singleCanvas)
      )
        for (var n = 1; n < t.length; n++)
          if ((s = t[n]).zlevel !== t[n - 1].zlevel || s.incremental) {
            this._needsManuallyCompositing = !0
            break
          }
      for (var i, r = null, o = 0, a = 0; a < t.length; a++) {
        var s,
          l = (s = t[a]).zlevel,
          u = void 0
        i !== l && ((i = l), (o = 0)),
          s.incremental
            ? (((u = this.getLayer(
                l + 0.001,
                this._needsManuallyCompositing
              )).incremental = !0),
              (o = 1))
            : (u = this.getLayer(
                l + (0 < o ? 0.01 : 0),
                this._needsManuallyCompositing
              )),
          u.__builtin__ ||
            ot('ZLevel ' + l + ' has been used by unkown layer ' + u.id),
          u !== r &&
            ((u.__used = !0),
            u.__startIndex !== a && (u.__dirty = !0),
            (u.__startIndex = a),
            u.incremental ? (u.__drawIndex = -1) : (u.__drawIndex = a),
            e(a),
            (r = u)),
          s.__dirty & vn &&
            !s.__inHover &&
            ((u.__dirty = !0), u.incremental) &&
            u.__drawIndex < 0 &&
            (u.__drawIndex = a)
      }
      e(a),
        this.eachBuiltinLayer(function (t, e) {
          !t.__used &&
            0 < t.getElementCount() &&
            ((t.__dirty = !0),
            (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
            t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
        })
    }),
    (y.prototype.clear = function () {
      return this.eachBuiltinLayer(this._clearLayer), this
    }),
    (y.prototype._clearLayer = function (t) {
      t.clear()
    }),
    (y.prototype.setBackgroundColor = function (t) {
      ;(this._backgroundColor = t),
        B(this._layers, function (t) {
          t.setUnpainted()
        })
    }),
    (y.prototype.configLayer = function (t, e) {
      if (e) {
        var n = this._layerConfig
        n[t] ? d(n[t], e, !0) : (n[t] = e)
        for (var i = 0; i < this._zlevelList.length; i++) {
          var r = this._zlevelList[i]
          ;(r !== t && r !== t + 0.01) || d(this._layers[r], n[t], !0)
        }
      }
    }),
    (y.prototype.delLayer = function (t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t]
      i &&
        (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(I(n, t), 1))
    }),
    (y.prototype.resize = function (t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot,
          i = ((n.style.display = 'none'), this._opts),
          r = this.root
        if (
          (null != t && (i.width = t),
          null != e && (i.height = e),
          (t = y0(r, 0, i)),
          (e = y0(r, 1, i)),
          (n.style.display = ''),
          this._width !== t || e !== this._height)
        ) {
          for (var o in ((n.style.width = t + 'px'),
          (n.style.height = e + 'px'),
          this._layers))
            this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e)
          this.refresh(!0)
        }
        ;(this._width = t), (this._height = e)
      } else {
        if (null == t || null == e) return
        ;(this._width = t), (this._height = e), this.getLayer(rx).resize(t, e)
      }
      return this
    }),
    (y.prototype.clearLayer = function (t) {
      t = this._layers[t]
      t && t.clear()
    }),
    (y.prototype.dispose = function () {
      ;(this.root.innerHTML = ''),
        (this.root = this.storage = this._domRoot = this._layers = null)
    }),
    (y.prototype.getRenderedCanvas = function (t) {
      if (this._singleCanvas && !this._compositeManually)
        return this._layers[rx].dom
      var e = new nx('image', this, (t = t || {}).pixelRatio || this.dpr),
        n =
          (e.initContext(),
          e.clear(!1, t.backgroundColor || this._backgroundColor),
          e.ctx)
      if (t.pixelRatio <= this.dpr) {
        this.refresh()
        var i = e.dom.width,
          r = e.dom.height
        this.eachLayer(function (t) {
          t.__builtin__
            ? n.drawImage(t.dom, 0, 0, i, r)
            : t.renderToCanvas && (n.save(), t.renderToCanvas(n), n.restore())
        })
      } else
        for (
          var o = {
              inHover: !1,
              viewWidth: this._width,
              viewHeight: this._height
            },
            a = this.storage.getDisplayList(!0),
            s = 0,
            l = a.length;
          s < l;
          s++
        ) {
          var u = a[s]
          z0(n, u, o, s === l - 1)
        }
      return e.dom
    }),
    (y.prototype.getWidth = function () {
      return this._width
    }),
    (y.prototype.getHeight = function () {
      return this._height
    })
  var ox = y
  function y (t, e, n, i) {
    ;(this.type = 'canvas'),
      (this._zlevelList = []),
      (this._prevDisplayList = []),
      (this._layers = {}),
      (this._layerConfig = {}),
      (this._needsManuallyCompositing = !1),
      (this.type = 'canvas')
    var r,
      o,
      a = !t.nodeName || 'CANVAS' === t.nodeName.toUpperCase(),
      e =
        ((this._opts = n = O({}, n || {})),
        (this.dpr = n.devicePixelRatio || br),
        (this._singleCanvas = a),
        (this.root = t).style && (Et(t), (t.innerHTML = '')),
        (this.storage = e),
        this._zlevelList),
      s = ((this._prevDisplayList = []), this._layers)
    a
      ? ((r = (a = t).width),
        (o = a.height),
        null != n.width && (r = n.width),
        null != n.height && (o = n.height),
        (this.dpr = n.devicePixelRatio || 1),
        (a.width = r * this.dpr),
        (a.height = o * this.dpr),
        (this._width = r),
        (this._height = o),
        ((r = new nx(a, this, this.dpr)).__builtin__ = !0),
        r.initContext(),
        ((s[rx] = r).zlevel = rx),
        e.push(rx),
        (this._domRoot = t))
      : ((this._width = y0(t, 0, n)),
        (this._height = y0(t, 1, n)),
        (r = this._domRoot =
          ((o = this._width),
          (a = this._height),
          ((s = document.createElement('div')).style.cssText =
            [
              'position:relative',
              'width:' + o + 'px',
              'height:' + a + 'px',
              'padding:0',
              'margin:0',
              'border-width:0'
            ].join(';') + ';'),
          s)),
        t.appendChild(r))
  }
  u(lx, (ax = g)),
    (lx.prototype.init = function (t, e, n) {
      ax.prototype.init.call(this, t, e, n),
        (this._sourceManager = new Ig(this)),
        Dg(this)
    }),
    (lx.prototype.mergeOption = function (t, e) {
      ax.prototype.mergeOption.call(this, t, e), Dg(this)
    }),
    (lx.prototype.optionUpdated = function () {
      this._sourceManager.dirty()
    }),
    (lx.prototype.getSourceManager = function () {
      return this._sourceManager
    }),
    (lx.type = 'dataset'),
    (lx.defaultOption = { seriesLayoutBy: dd })
  var ax,
    sx = lx
  function lx () {
    var t = (null !== ax && ax.apply(this, arguments)) || this
    return (t.type = 'dataset'), t
  }
  u(cx, (ux = oy)), (cx.type = 'dataset')
  var ux,
    hx = cx
  function cx () {
    var t = (null !== ux && ux.apply(this, arguments)) || this
    return (t.type = 'dataset'), t
  }
  function px (t) {
    t.registerComponentModel(sx), t.registerComponentView(hx)
  }
  U_([
    function (t) {
      t.registerPainter('canvas', ox)
    },
    px
  ]),
    U_(J1)
  var dx = 2 * Math.PI,
    fx = Math.PI / 180
  function gx (t, e) {
    return jp(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight()
    })
  }
  function yx (t, e) {
    var n = gx(t, e),
      i = t.get('center'),
      r = t.get('radius')
    V(r) || (r = [0, r])
    var o,
      a = fo(n.width, e.getWidth()),
      e = fo(n.height, e.getHeight()),
      s = Math.min(a, e),
      l = fo(r[0], s / 2),
      r = fo(r[1], s / 2),
      s = t.coordinateSystem
    return (
      (s = s
        ? ((o = (t = s.dataToPoint(i))[0] || 0), t[1] || 0)
        : ((o = fo((i = V(i) ? i : [i, i])[0], a) + n.x), fo(i[1], e) + n.y)),
      { cx: o, cy: s, r0: l, r: r }
    )
  }
  function mx (t, e, S) {
    e.eachSeriesByType(t, function (t) {
      var n,
        r = t.getData(),
        e = r.mapDimension('value'),
        i = gx(t, S),
        o = yx(t, S),
        a = o.cx,
        s = o.cy,
        l = o.r,
        u = o.r0,
        h = -t.get('startAngle') * fx,
        c = t.get('minAngle') * fx,
        p = 0,
        d =
          (r.each(e, function (t) {
            isNaN(t) || p++
          }),
          r.getSum(e)),
        f = (Math.PI / (d || p)) * 2,
        g = t.get('clockwise'),
        y = t.get('roseType'),
        m = t.get('stillShowZeroSum'),
        v = r.getDataExtent(e),
        _ = ((v[0] = 0), dx),
        x = 0,
        w = h,
        b = g ? 1 : -1
      r.setLayout({ viewRect: i, r: l }),
        r.each(e, function (t, e) {
          var n, i
          isNaN(t)
            ? r.setItemLayout(e, {
                angle: NaN,
                startAngle: NaN,
                endAngle: NaN,
                clockwise: g,
                cx: a,
                cy: s,
                r0: u,
                r: y ? NaN : l
              })
            : ((n = 'area' !== y ? (0 === d && m ? f : t * f) : dx / p) < c
                ? (_ -= n = c)
                : (x += t),
              (i = w + b * n),
              r.setItemLayout(e, {
                angle: n,
                startAngle: w,
                endAngle: i,
                clockwise: g,
                cx: a,
                cy: s,
                r0: u,
                r: y ? po(t, v, [u, l]) : l
              }),
              (w = i))
        }),
        _ < dx &&
          p &&
          (_ <= 0.001
            ? ((n = dx / p),
              r.each(e, function (t, e) {
                isNaN(t) ||
                  (((t = r.getItemLayout(e)).angle = n),
                  (t.startAngle = h + b * e * n),
                  (t.endAngle = h + b * (e + 1) * n))
              }))
            : ((f = _ / x),
              (w = h),
              r.each(e, function (t, e) {
                isNaN(t) ||
                  ((t = (e = r.getItemLayout(e)).angle === c ? c : t * f),
                  (e.startAngle = w),
                  (e.endAngle = w + b * t),
                  (w += b * t))
              })))
    })
  }
  var vx = Math.PI / 180
  function _x (t, s, l, u, h, e, n, i, r, o) {
    if (!(t.length < 2)) {
      for (var a, c = t.length, p = 0; p < c; p++)
        'outer' === t[p].position &&
          'labelLine' === t[p].labelAlignTo &&
          ((a = t[p].label.x - o),
          (t[p].linePoints[1][0] += a),
          (t[p].label.x = o))
      if (H1(t, r, r + n)) {
        for (
          var d,
            f,
            g,
            y,
            m,
            v = t,
            _ = { list: [], maxY: 0 },
            x = { list: [], maxY: 0 },
            w = 0;
          w < v.length;
          w++
        )
          'none' === v[w].labelAlignTo &&
            ((f = (d = v[w]).label.y > l ? x : _),
            (g = Math.abs(d.label.y - l)) >= f.maxY &&
              ((m = d.label.x - s - d.len2 * h),
              (y = u + d.len),
              (m =
                Math.abs(m) < y
                  ? Math.sqrt((g * g) / (1 - (m * m) / y / y))
                  : y),
              (f.rB = m),
              (f.maxY = g)),
            f.list.push(d))
        b(_), b(x)
      }
    }
    function b (t) {
      for (var e = t.rB, n = e * e, i = 0; i < t.list.length; i++) {
        var r = t.list[i],
          o = Math.abs(r.label.y - l),
          a = u + r.len,
          a = a * a,
          o = Math.sqrt((1 - Math.abs((o * o) / n)) * a),
          a = s + (o + r.len2) * h,
          o = a - r.label.x
        xx(r, r.targetTextWidth - o * h, !0), (r.label.x = a)
      }
    }
  }
  function xx (t, e, n) {
    var i, r, o, a, s, l, u
    void 0 === n && (n = !1),
      null == t.labelStyleWidth &&
        ((s = (i = t.label).style),
        (r = t.rect),
        (l = s.backgroundColor),
        (u = (u = s.padding) ? u[1] + u[3] : 0),
        (s = s.overflow),
        e < (o = r.width + (l ? 0 : u)) || n) &&
        ((a = r.height),
        s && s.match('break')
          ? (i.setStyle('backgroundColor', null),
            i.setStyle('width', e - u),
            (s = i.getBoundingRect()),
            i.setStyle('width', Math.ceil(s.width)),
            i.setStyle('backgroundColor', l))
          : ((s = e - u),
            (l = !(e < o) && (!n || s > t.unconstrainedWidth) ? null : s),
            i.setStyle('width', l)),
        (u = i.getBoundingRect()),
        (r.width = u.width),
        (e = (i.style.margin || 0) + 2.1),
        (r.height = u.height + e),
        (r.y -= (r.height - a) / 2))
  }
  function bx (t) {
    return 'center' === t.position
  }
  function Sx (t) {
    var S,
      M,
      T = t.getData(),
      C = [],
      I = !1,
      k = (t.get('minShowLabelAngle') || 0) * vx,
      e = T.getLayout('viewRect'),
      D = T.getLayout('r'),
      A = e.width,
      P = e.x,
      n = e.y,
      e = e.height
    function L (t) {
      t.ignore = !0
    }
    if (
      (T.each(function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p = T.getItemGraphicEl(t),
          d = p.shape,
          f = p.getTextContent(),
          g = p.getTextGuideLine(),
          t = T.getItemModel(t),
          y = t.getModel('label'),
          m = y.get('position') || t.get(['emphasis', 'label', 'position']),
          v = y.get('distanceToLabelLine'),
          _ = y.get('alignTo'),
          x = fo(y.get('edgeDistance'), A),
          w = y.get('bleedMargin'),
          t = t.getModel('labelLine'),
          b = fo(t.get('length'), A)
        ;(e = fo(t.get('length2'), A)),
          Math.abs(d.endAngle - d.startAngle) < k
            ? (B(f.states, L),
              (f.ignore = !0),
              g && (B(g.states, L), (g.ignore = !0)))
            : (function (t) {
                if (!t.ignore) return 1
                for (var e in t.states) if (!1 === t.states[e].ignore) return 1
              })(f) &&
              ((c = (d.startAngle + d.endAngle) / 2),
              (n = Math.cos(c)),
              (i = Math.sin(c)),
              (S = d.cx),
              (M = d.cy),
              (r = 'inside' === m || 'inner' === m),
              (l =
                'center' === m
                  ? ((o = d.cx), (a = d.cy), 'center')
                  : ((o =
                      (l = (r ? ((d.r + d.r0) / 2) * n : d.r * n) + S) + 3 * n),
                    (a =
                      (u = (r ? ((d.r + d.r0) / 2) * i : d.r * i) + M) + 3 * i),
                    r ||
                      ((s = l + n * (b + D - d.r)),
                      (d = u + i * (b + D - d.r)),
                      (h = s + (n < 0 ? -1 : 1) * e),
                      (o =
                        'edge' === _
                          ? n < 0
                            ? P + x
                            : P + A - x
                          : h + (n < 0 ? -v : v)),
                      (s = [
                        [l, u],
                        [s, (a = d)],
                        [h, d]
                      ])),
                    r
                      ? 'center'
                      : 'edge' === _
                      ? 0 < n
                        ? 'right'
                        : 'left'
                      : 0 < n
                      ? 'left'
                      : 'right')),
              (u = Math.PI),
              (h = 0),
              W((d = y.get('rotate')))
                ? (h = d * (u / 180))
                : 'center' === m
                ? (h = 0)
                : 'radial' === d || !0 === d
                ? (h = n < 0 ? -c + u : -c)
                : 'tangential' === d &&
                  'outside' !== m &&
                  'outer' !== m &&
                  ((y = Math.atan2(n, i)) < 0 && (y = 2 * u + y),
                  (h = (y = 0 < i ? u + y : y) - u)),
              (I = !!h),
              (f.x = o),
              (f.y = a),
              (f.rotation = h),
              f.setStyle({ verticalAlign: 'middle' }),
              r
                ? (f.setStyle({ align: l }),
                  (c = f.states.select) && ((c.x += f.x), (c.y += f.y)))
                : ((d = f.getBoundingRect().clone()).applyTransform(
                    f.getComputedTransform()
                  ),
                  (y = (f.style.margin || 0) + 2.1),
                  (d.y -= y / 2),
                  (d.height += y),
                  C.push({
                    label: f,
                    labelLine: g,
                    position: m,
                    len: b,
                    len2: e,
                    minTurnAngle: t.get('minTurnAngle'),
                    maxSurfaceAngle: t.get('maxSurfaceAngle'),
                    surfaceNormal: new G(n, i),
                    linePoints: s,
                    textAlign: l,
                    labelDistance: v,
                    labelAlignTo: _,
                    edgeDistance: x,
                    bleedMargin: w,
                    rect: d,
                    unconstrainedWidth: d.width,
                    labelStyleWidth: f.style.width
                  })),
              p.setTextConfig({ inside: r }))
      }),
      !I && t.get('avoidLabelOverlap'))
    ) {
      for (
        var i = C,
          r = S,
          o = ((t = M), D),
          a = A,
          s = P,
          l,
          u,
          h,
          c,
          p,
          d,
          f = [],
          g = [],
          y = Number.MAX_VALUE,
          m = -Number.MAX_VALUE,
          v = 0;
        v < i.length;
        v++
      ) {
        var _ = i[v].label
        bx(i[v]) ||
          (_.x < r
            ? ((y = Math.min(y, _.x)), f)
            : ((m = Math.max(m, _.x)), g)
          ).push(i[v])
      }
      for (v = 0; v < i.length; v++)
        !bx((u = i[v])) &&
          u.linePoints &&
          null == u.labelStyleWidth &&
          ((_ = u.label),
          (h = u.linePoints),
          (l = void 0),
          (l =
            'edge' === u.labelAlignTo
              ? _.x < r
                ? h[2][0] - u.labelDistance - s - u.edgeDistance
                : s + a - u.edgeDistance - h[2][0] - u.labelDistance
              : 'labelLine' === u.labelAlignTo
              ? _.x < r
                ? y - s - u.bleedMargin
                : s + a - m - u.bleedMargin
              : _.x < r
              ? _.x - s - u.bleedMargin
              : s + a - _.x - u.bleedMargin),
          (u.targetTextWidth = l),
          xx(u, l))
      for (
        _x(g, r, t, o, 1, 0, e, 0, n, m),
          _x(f, r, t, o, -1, 0, e, 0, n, y),
          v = 0;
        v < i.length;
        v++
      )
        !bx((u = i[v])) &&
          u.linePoints &&
          ((_ = u.label),
          (h = u.linePoints),
          (c = 'edge' === u.labelAlignTo),
          (p = (p = _.style.padding) ? p[1] + p[3] : 0),
          (p = _.style.backgroundColor ? 0 : p),
          (p = u.rect.width + p),
          (d = h[1][0] - h[2][0]),
          c
            ? _.x < r
              ? (h[2][0] = s + u.edgeDistance + p + u.labelDistance)
              : (h[2][0] = s + a - u.edgeDistance - p - u.labelDistance)
            : (_.x < r
                ? (h[2][0] = _.x + u.labelDistance)
                : (h[2][0] = _.x - u.labelDistance),
              (h[1][0] = h[2][0] + d)),
          (h[1][1] = h[2][1] = _.y))
    }
    for (var x = 0; x < C.length; x++) {
      var w,
        b = C[x],
        O = b.label,
        R = b.labelLine,
        N = isNaN(O.x) || isNaN(O.y)
      O &&
        (O.setStyle({ align: b.textAlign }),
        N && (B(O.states, L), (O.ignore = !0)),
        (w = O.states.select)) &&
        ((w.x += O.x), (w.y += O.y)),
        R &&
          ((w = b.linePoints),
          N || !w
            ? (B(R.states, L), (R.ignore = !0))
            : (R1(w, b.minTurnAngle),
              (function (t, e, n) {
                if (n <= 180 && 0 < n) {
                  ;(n = (n / 180) * Math.PI),
                    I1.fromArray(t[0]),
                    Y.fromArray(t[1]),
                    k1.fromArray(t[2]),
                    G.sub(D1, Y, I1),
                    G.sub(A1, k1, Y)
                  var i = D1.len(),
                    r = A1.len()
                  if (
                    !(i < 0.001 || r < 0.001) &&
                    (D1.scale(1 / i), A1.scale(1 / r), D1.dot(e) < Math.cos(n))
                  ) {
                    ;(i = S1(Y.x, Y.y, k1.x, k1.y, I1.x, I1.y, L1, !1)),
                      (r = (O1.fromArray(L1), Math.PI / 2)),
                      (e = r + Math.acos(A1.dot(e)) - n)
                    if (r <= e) G.copy(O1, k1)
                    else {
                      O1.scaleAndAdd(A1, i / Math.tan(Math.PI / 2 - e))
                      n =
                        k1.x !== Y.x
                          ? (O1.x - Y.x) / (k1.x - Y.x)
                          : (O1.y - Y.y) / (k1.y - Y.y)
                      if (isNaN(n)) return
                      n < 0 ? G.copy(O1, Y) : 1 < n && G.copy(O1, k1)
                    }
                    O1.toArray(t[1])
                  }
                }
              })(w, b.surfaceNormal, b.maxSurfaceAngle),
              R.setShape({ points: w }),
              (O.__hostTarget.textGuideLineConfig = {
                anchor: new G(w[0][0], w[0][1])
              })))
    }
  }
  function Mx (t, e, n) {
    t = t.get('borderRadius')
    if (null == t) return n ? { cornerRadius: 0 } : null
    V(t) || (t = [t, t, t, t])
    var i = Math.abs(e.r || 0 - e.r0 || 0)
    return {
      cornerRadius: F(t, function (t) {
        return Wr(t, i)
      })
    }
  }
  u(Ax, (Cx = ju)),
    (Ax.prototype.updateData = function (t, e, n, i) {
      var r = this,
        o = t.hostModel,
        a = t.getItemModel(e),
        s = a.getModel('emphasis'),
        l = t.getItemLayout(e),
        u = O(Mx(a.getModel('itemStyle'), l, !0), l)
      if (isNaN(u.startAngle)) r.setShape(u)
      else {
        i
          ? (r.setShape(u),
            (i = o.getShallow('animationType')),
            o.ecModel.ssr
              ? (Yh(r, { scaleX: 0, scaleY: 0 }, o, {
                  dataIndex: e,
                  isFrom: !0
                }),
                (r.originX = u.cx),
                (r.originY = u.cy))
              : 'scale' === i
              ? ((r.shape.r = l.r0), Yh(r, { shape: { r: l.r } }, o, e))
              : null != n
              ? (r.setShape({ startAngle: n, endAngle: n }),
                Yh(
                  r,
                  { shape: { startAngle: l.startAngle, endAngle: l.endAngle } },
                  o,
                  e
                ))
              : ((r.shape.endAngle = l.startAngle),
                Xh(r, { shape: { endAngle: l.endAngle } }, o, e)))
          : ((Gh((i = r)).oldStyle = i.style), Xh(r, { shape: u }, o, e)),
          r.useStyle(t.getItemVisual(e, 'style'))
        var h = r,
          c = a,
          p = void 0,
          d = void 0
        p = p || 'itemStyle'
        for (var f = 0; f < tu.length; f++) {
          var g = tu[f],
            y = c.getModel([g, p])
          h.ensureState(g).style = d ? d(y) : y[eu[p]]()
        }
        ;(n = (l.startAngle + l.endAngle) / 2),
          (i = o.get('selectedOffset')),
          (u = Math.cos(n) * i),
          (n = Math.sin(n) * i),
          (i = a.getShallow('cursor')),
          (i =
            (i && r.attr('cursor', i),
            this._updateLabel(o, t, e),
            (r.ensureState('emphasis').shape = O(
              { r: l.r + ((s.get('scale') && s.get('scaleSize')) || 0) },
              Mx(s.getModel('itemStyle'), l)
            )),
            O(r.ensureState('select'), {
              x: u,
              y: n,
              shape: Mx(a.getModel(['select', 'itemStyle']), l)
            }),
            O(r.ensureState('blur'), {
              shape: Mx(a.getModel(['blur', 'itemStyle']), l)
            }),
            r.getTextGuideLine())),
          (o = r.getTextContent())
        i && O(i.ensureState('select'), { x: u, y: n }),
          O(o.ensureState('select'), { x: u, y: n }),
          Jl(this, s.get('focus'), s.get('blurScope'), s.get('disabled'))
      }
    }),
    (Ax.prototype._updateLabel = function (t, e, n) {
      var i = e.getItemModel(n),
        r = i.getModel('labelLine'),
        o = e.getItemVisual(n, 'style'),
        a = o && o.fill,
        o = o && o.opacity,
        e =
          (Ic(
            this,
            (function (t, e) {
              for (
                var n = { normal: t.getModel((e = e || 'label')) }, i = 0;
                i < ml.length;
                i++
              ) {
                var r = ml[i]
                n[r] = t.getModel([r, e])
              }
              return n
            })(i),
            {
              labelFetcher: e.hostModel,
              labelDataIndex: n,
              inheritColor: a,
              defaultOpacity: o,
              defaultText: t.getFormattedLabel(n, 'normal') || e.getName(n)
            }
          ),
          this.getTextContent()),
        n =
          (this.setTextConfig({ position: null, rotation: null }),
          e.attr({ z2: 10 }),
          t.get(['label', 'position']))
      'outside' !== n && 'outer' !== n
        ? this.removeTextGuideLine()
        : (this.getTextGuideLine() ||
            ((e = new sh()), this.setTextGuideLine(e)),
          z1(this, E1(i), {
            stroke: a,
            opacity: St(r.get(['lineStyle', 'opacity']), o, 1)
          }))
    })
  var Tx,
    Cx,
    Ix = Ax,
    kx =
      (u(Dx, (Tx = hy)),
      (Dx.prototype.render = function (e, t, n, i) {
        var r,
          o = e.getData(),
          a = this._data,
          s = this.group
        if (!a && 0 < o.count()) {
          for (
            var l = o.getItemLayout(0), u = 1;
            isNaN(l && l.startAngle) && u < o.count();
            ++u
          )
            l = o.getItemLayout(u)
          l && (r = l.startAngle)
        }
        this._emptyCircleSector && s.remove(this._emptyCircleSector),
          0 === o.count() &&
            e.get('showEmptyCircle') &&
            ((n = new ju({ shape: yx(e, n) })).useStyle(
              e.getModel('emptyCircleStyle').getItemStyle()
            ),
            (this._emptyCircleSector = n),
            s.add(n)),
          o
            .diff(a)
            .add(function (t) {
              var e = new Ix(o, t, r)
              o.setItemGraphicEl(t, e), s.add(e)
            })
            .update(function (t, e) {
              e = a.getItemGraphicEl(e)
              e.updateData(o, t, r),
                e.off('click'),
                s.add(e),
                o.setItemGraphicEl(t, e)
            })
            .remove(function (t) {
              Kh(a.getItemGraphicEl(t), e, t)
            })
            .execute(),
          Sx(e),
          'expansion' !== e.get('animationTypeUpdate') && (this._data = o)
      }),
      (Dx.prototype.dispose = function () {}),
      (Dx.prototype.containPoint = function (t, e) {
        var n,
          e = e.getData().getItemLayout(0)
        if (e)
          return (
            (n = t[0] - e.cx),
            (t = t[1] - e.cy),
            (n = Math.sqrt(n * n + t * t)) <= e.r && n >= e.r0
          )
      }),
      (Dx.type = 'pie'),
      Dx)
  function Dx () {
    var t = (null !== Tx && Tx.apply(this, arguments)) || this
    return (t.ignoreLabelLineUpdate = !0), t
  }
  function Ax (t, e, n) {
    var i = Cx.call(this) || this,
      r = ((i.z2 = 2), new Zs())
    return i.setTextContent(r), i.updateData(t, e, n, !0), i
  }
  ;(Lx.prototype.getAllNames = function () {
    var t = this._getRawData()
    return t.mapArray(t.getName)
  }),
    (Lx.prototype.containName = function (t) {
      return 0 <= this._getRawData().indexOfName(t)
    }),
    (Lx.prototype.indexOfName = function (t) {
      return this._getDataWithEncodedVisual().indexOfName(t)
    }),
    (Lx.prototype.getItemVisual = function (t, e) {
      return this._getDataWithEncodedVisual().getItemVisual(t, e)
    })
  var Px = Lx
  function Lx (t, e) {
    ;(this._getDataWithEncodedVisual = t), (this._getRawData = e)
  }
  var Ox,
    Rx = Yo(),
    Nx =
      (u(Bx, (Ox = $g)),
      (Bx.prototype.init = function (t) {
        Ox.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new Px(
            pt(this.getData, this),
            pt(this.getRawData, this)
          )),
          this._defaultLabelLine(t)
      }),
      (Bx.prototype.mergeOption = function () {
        Ox.prototype.mergeOption.apply(this, arguments)
      }),
      (Bx.prototype.getInitialData = function () {
        return (
          (e = V(
            (e = {
              coordDimensions: ['value'],
              encodeDefaulter: dt(vd, (t = this))
            })
          )
            ? { coordDimensions: e }
            : O({ encodeDefine: t.getEncode() }, e)),
          (i = t.getSource()),
          (e = Lv(i, e).dimensions),
          (e = new Pv(e, t)).initData(i, n),
          e
        )
        var t, e, n, i
      }),
      (Bx.prototype.getDataParams = function (t) {
        var e,
          n = this.getData(),
          i = Rx(n),
          r = i.seats,
          i =
            (r ||
              ((e = []),
              n.each(n.mapDimension('value'), function (t) {
                e.push(t)
              }),
              (r = i.seats = _o(e, n.hostModel.get('percentPrecision')))),
            Ox.prototype.getDataParams.call(this, t))
        return (i.percent = r[t] || 0), i.$vars.push('percent'), i
      }),
      (Bx.prototype._defaultLabelLine = function (t) {
        No(t, 'labelLine', ['show'])
        var e = t.labelLine,
          n = t.emphasis.labelLine
        ;(e.show = e.show && t.label.show),
          (n.show = n.show && t.emphasis.label.show)
      }),
      (Bx.type = 'series.pie'),
      (Bx.defaultOption = {
        z: 2,
        legendHoverLink: !0,
        colorBy: 'data',
        center: ['50%', '50%'],
        radius: [0, '75%'],
        clockwise: !0,
        startAngle: 90,
        minAngle: 0,
        minShowLabelAngle: 0,
        selectedOffset: 10,
        percentPrecision: 2,
        stillShowZeroSum: !0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: null,
        height: null,
        label: {
          rotate: 0,
          show: !0,
          overflow: 'truncate',
          position: 'outer',
          alignTo: 'none',
          edgeDistance: '25%',
          bleedMargin: 10,
          distanceToLabelLine: 5
        },
        labelLine: {
          show: !0,
          length: 15,
          length2: 15,
          smooth: !1,
          minTurnAngle: 90,
          maxSurfaceAngle: 90,
          lineStyle: { width: 1, type: 'solid' }
        },
        itemStyle: { borderWidth: 1, borderJoin: 'round' },
        showEmptyCircle: !0,
        emptyCircleStyle: { color: 'lightgray', opacity: 1 },
        labelLayout: { hideOverlap: !0 },
        emphasis: { scale: !0, scaleSize: 5 },
        avoidLabelOverlap: !0,
        animationType: 'expansion',
        animationDuration: 1e3,
        animationTypeUpdate: 'transition',
        animationEasingUpdate: 'cubicInOut',
        animationDurationUpdate: 500,
        animationEasing: 'cubicInOut'
      }),
      Bx)
  function Bx () {
    return (null !== Ox && Ox.apply(this, arguments)) || this
  }
  U_(function (t) {
    t.registerChartView(kx),
      t.registerSeriesModel(Nx),
      $y('pie', t.registerAction),
      t.registerLayout(dt(mx, 'pie')),
      t.registerProcessor({
        seriesType: 'pie',
        reset: function (t, e) {
          var i,
            r = e.findComponents({ mainType: 'legend' })
          r &&
            r.length &&
            (i = t.getData()).filterSelf(function (t) {
              for (var e = i.getName(t), n = 0; n < r.length; n++)
                if (!r[n].isSelected(e)) return !1
              return !0
            })
        }
      }),
      t.registerProcessor({
        seriesType: 'pie',
        reset: function (t, e) {
          var n = t.getData()
          n.filterSelf(function (t) {
            var e = n.mapDimension('value'),
              e = n.get(e, t)
            return !(W(e) && !isNaN(e) && e < 0)
          })
        }
      })
  })
  u(Fx, (zx = g)),
    (Fx.type = 'grid'),
    (Fx.dependencies = ['xAxis', 'yAxis']),
    (Fx.layoutMode = 'box'),
    (Fx.defaultOption = {
      show: !1,
      z: 0,
      left: '10%',
      top: 60,
      right: '10%',
      bottom: 70,
      containLabel: !1,
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 1,
      borderColor: '#ccc'
    })
  var zx,
    Ex = Fx
  function Fx () {
    return (null !== zx && zx.apply(this, arguments)) || this
  }
  u(Wx, (Vx = g)),
    (Wx.prototype.getCoordSysModel = function () {
      return this.getReferringComponents('grid', Ko).models[0]
    }),
    (Wx.type = 'cartesian2dAxis')
  var Vx,
    Hx = Wx
  function Wx () {
    return (null !== Vx && Vx.apply(this, arguments)) || this
  }
  lt(Hx, V_)
  var Wc = {
      show: !0,
      z: 0,
      inverse: !1,
      name: '',
      nameLocation: 'end',
      nameRotate: null,
      nameTruncate: { maxWidth: null, ellipsis: '...', placeholder: '.' },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: { show: !1 },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: { color: '#6E7079', width: 1, type: 'solid' },
        symbol: ['none', 'none'],
        symbolSize: [10, 15]
      },
      axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      splitLine: {
        show: !0,
        lineStyle: { color: ['#E0E6F1'], width: 1, type: 'solid' }
      },
      splitArea: {
        show: !1,
        areaStyle: { color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'] }
      }
    },
    oa = d(
      {
        boundaryGap: !0,
        deduplication: null,
        splitLine: { show: !1 },
        axisTick: { alignWithLabel: !1, interval: 'auto' },
        axisLabel: { interval: 'auto' }
      },
      Wc
    ),
    n0 = d(
      {
        boundaryGap: [0, 0],
        axisLine: { show: 'auto' },
        axisTick: { show: 'auto' },
        splitNumber: 5,
        minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
        minorSplitLine: { show: !1, lineStyle: { color: '#F4F7FD', width: 1 } }
      },
      Wc
    ),
    Gx = {
      category: oa,
      value: n0,
      time: d(
        {
          splitNumber: 6,
          axisLabel: {
            showMinLabel: !1,
            showMaxLabel: !1,
            rich: { primary: { fontWeight: 'bold' } }
          },
          splitLine: { show: !1 }
        },
        n0
      ),
      log: E({ logBase: 10 }, n0)
    },
    Ux = { value: 1, category: 1, time: 1, log: 1 }
  function Xx (o, a, s, l) {
    B(Ux, function (t, r) {
      var e,
        n = d(d({}, Gx[r], !0), l, !0),
        n =
          (u(i, (e = s)),
          (i.prototype.mergeDefaultAndTheme = function (t, e) {
            var n = Zp(this),
              i = n ? $p(t) : {}
            d(t, e.getTheme().get(r + 'Axis')),
              d(t, this.getDefaultOption()),
              (t.type = Yx(t)),
              n && Kp(t, i, n)
          }),
          (i.prototype.optionUpdated = function () {
            'category' === this.option.type &&
              (this.__ordinalMeta = Gv.createByAxisModel(this))
          }),
          (i.prototype.getCategories = function (t) {
            var e = this.option
            if ('category' === e.type)
              return t ? e.data : this.__ordinalMeta.categories
          }),
          (i.prototype.getOrdinalMeta = function () {
            return this.__ordinalMeta
          }),
          (i.type = a + 'Axis.' + r),
          (i.defaultOption = n),
          i)
      function i () {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.type = a + 'Axis.' + r), t
      }
      o.registerComponentModel(n)
    }),
      o.registerSubTypeDefaulter(a + 'Axis', Yx)
  }
  function Yx (t) {
    return t.type || (t.data ? 'category' : 'value')
  }
  function qx (t) {
    ;(this.type = 'cartesian'),
      (this._dimList = []),
      (this._axes = {}),
      (this.name = t || '')
  }
  ;(qx.prototype.getAxis = function (t) {
    return this._axes[t]
  }),
    (qx.prototype.getAxes = function () {
      return F(
        this._dimList,
        function (t) {
          return this._axes[t]
        },
        this
      )
    }),
    (qx.prototype.getAxesByScale = function (e) {
      return (
        (e = e.toLowerCase()),
        ct(this.getAxes(), function (t) {
          return t.scale.type === e
        })
      )
    }),
    (qx.prototype.addAxis = function (t) {
      var e = t.dim
      ;(this._axes[e] = t), this._dimList.push(e)
    })
  var jx = ['x', 'y']
  function Zx (t) {
    return 'interval' === t.type || 'time' === t.type
  }
  u(Qx, (Kx = qx)),
    (Qx.prototype.calcAffineTransform = function () {
      this._transform = this._invTransform = null
      var t,
        e,
        n,
        i,
        r = this.getAxis('x').scale,
        o = this.getAxis('y').scale
      Zx(r) &&
        Zx(o) &&
        ((r = r.getExtent()),
        (o = o.getExtent()),
        (i = this.dataToPoint([r[0], o[0]])),
        (e = this.dataToPoint([r[1], o[1]])),
        (t = r[1] - r[0]),
        (n = o[1] - o[0]),
        t) &&
        n &&
        ((t = (e[0] - i[0]) / t),
        (e = (e[1] - i[1]) / n),
        (n = i[0] - r[0] * t),
        (r = i[1] - o[0] * e),
        (i = this._transform = [t, 0, 0, e, n, r]),
        (this._invTransform = Ve([], i)))
    }),
    (Qx.prototype.getBaseAxis = function () {
      return (
        this.getAxesByScale('ordinal')[0] ||
        this.getAxesByScale('time')[0] ||
        this.getAxis('x')
      )
    }),
    (Qx.prototype.containPoint = function (t) {
      var e = this.getAxis('x'),
        n = this.getAxis('y')
      return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
    }),
    (Qx.prototype.containData = function (t) {
      return (
        this.getAxis('x').containData(t[0]) &&
        this.getAxis('y').containData(t[1])
      )
    }),
    (Qx.prototype.containZone = function (t, e) {
      var t = this.dataToPoint(t),
        e = this.dataToPoint(e),
        n = this.getArea(),
        e = new U(t[0], t[1], e[0] - t[0], e[1] - t[1])
      return n.intersect(e)
    }),
    (Qx.prototype.dataToPoint = function (t, e, n) {
      n = n || []
      var i,
        r = t[0],
        o = t[1]
      return this._transform &&
        null != r &&
        isFinite(r) &&
        null != o &&
        isFinite(o)
        ? ne(n, t, this._transform)
        : ((t = this.getAxis('x')),
          (i = this.getAxis('y')),
          (n[0] = t.toGlobalCoord(t.dataToCoord(r, e))),
          (n[1] = i.toGlobalCoord(i.dataToCoord(o, e))),
          n)
    }),
    (Qx.prototype.clampData = function (t, e) {
      var n = this.getAxis('x').scale,
        i = this.getAxis('y').scale,
        r = n.getExtent(),
        o = i.getExtent(),
        n = n.parse(t[0]),
        i = i.parse(t[1])
      return (
        ((e = e || [])[0] = Math.min(
          Math.max(Math.min(r[0], r[1]), n),
          Math.max(r[0], r[1])
        )),
        (e[1] = Math.min(
          Math.max(Math.min(o[0], o[1]), i),
          Math.max(o[0], o[1])
        )),
        e
      )
    }),
    (Qx.prototype.pointToData = function (t, e) {
      var n,
        i,
        r = []
      return this._invTransform
        ? ne(r, t, this._invTransform)
        : ((n = this.getAxis('x')),
          (i = this.getAxis('y')),
          (r[0] = n.coordToData(n.toLocalCoord(t[0]), e)),
          (r[1] = i.coordToData(i.toLocalCoord(t[1]), e)),
          r)
    }),
    (Qx.prototype.getOtherAxis = function (t) {
      return this.getAxis('x' === t.dim ? 'y' : 'x')
    }),
    (Qx.prototype.getArea = function () {
      var t = this.getAxis('x').getGlobalExtent(),
        e = this.getAxis('y').getGlobalExtent(),
        n = Math.min(t[0], t[1]),
        i = Math.min(e[0], e[1]),
        t = Math.max(t[0], t[1]) - n,
        e = Math.max(e[0], e[1]) - i
      return new U(n, i, t, e)
    })
  var Kx,
    $x = Qx
  function Qx () {
    var t = (null !== Kx && Kx.apply(this, arguments)) || this
    return (t.type = 'cartesian2d'), (t.dimensions = jx), t
  }
  u(ew, (Jx = Yc)),
    (ew.prototype.isHorizontal = function () {
      var t = this.position
      return 'top' === t || 'bottom' === t
    }),
    (ew.prototype.getGlobalExtent = function (t) {
      var e = this.getExtent()
      return (
        (e[0] = this.toGlobalCoord(e[0])),
        (e[1] = this.toGlobalCoord(e[1])),
        t && e[0] > e[1] && e.reverse(),
        e
      )
    }),
    (ew.prototype.pointToData = function (t, e) {
      return this.coordToData(this.toLocalCoord(t['x' === this.dim ? 0 : 1]), e)
    }),
    (ew.prototype.setCategorySortInfo = function (t) {
      if ('category' !== this.type) return !1
      ;(this.model.option.categorySortInfo = t), this.scale.setSortInfo(t)
    })
  var Jx,
    tw = ew
  function ew (t, e, n, i, r) {
    t = Jx.call(this, t, e, n) || this
    return (
      (t.index = 0), (t.type = i || 'value'), (t.position = r || 'bottom'), t
    )
  }
  function nw (t, e, n) {
    n = n || {}
    var t = t.coordinateSystem,
      i = e.axis,
      r = {},
      o = i.getAxesOnZeroOf()[0],
      a = i.position,
      s = o ? 'onZero' : a,
      i = i.dim,
      t = t.getRect(),
      t = [t.x, t.x + t.width, t.y, t.y + t.height],
      l = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
      u = e.get('offset') || 0,
      u = 'x' === i ? [t[2] - u, t[3] + u] : [t[0] - u, t[1] + u],
      h =
        (o &&
          ((h = o.toGlobalCoord(o.dataToCoord(0))),
          (u[l.onZero] = Math.max(Math.min(h, u[1]), u[0]))),
        (r.position = ['y' === i ? u[l[s]] : t[0], 'x' === i ? u[l[s]] : t[3]]),
        (r.rotation = (Math.PI / 2) * ('x' === i ? 0 : 1)),
        (r.labelDirection =
          r.tickDirection =
          r.nameDirection =
            { top: -1, bottom: 1, left: -1, right: 1 }[a]),
        (r.labelOffset = o ? u[l[a]] - u[l.onZero] : 0),
        e.get(['axisTick', 'inside']) && (r.tickDirection = -r.tickDirection),
        bt(n.labelInside, e.get(['axisLabel', 'inside'])) &&
          (r.labelDirection = -r.labelDirection),
        e.get(['axisLabel', 'rotate']))
    return (r.labelRotate = 'top' === s ? -h : h), (r.z2 = 1), r
  }
  function iw (t) {
    return 'cartesian2d' === t.get('coordinateSystem')
  }
  function rw (i) {
    var r = { xAxisModel: null, yAxisModel: null }
    return (
      B(r, function (t, e) {
        var n = e.replace(/Model$/, ''),
          n = i.getReferringComponents(n, Ko).models[0]
        r[e] = n
      }),
      r
    )
  }
  var ow = Math.log
  ;(sw.prototype.getRect = function () {
    return this._rect
  }),
    (sw.prototype.update = function (t, e) {
      var n = this._axesMap
      function i (t) {
        var d,
          e = R(t),
          n = e.length
        if (n) {
          for (var i = [], r = n - 1; 0 <= r; r--) {
            var o = t[+e[r]],
              a = o.model,
              s = o.scale
            Yv(s) && a.get('alignTicks') && null == a.get('interval')
              ? i.push(o)
              : (O_(s, a), Yv(s) && (d = o))
          }
          i.length &&
            (d || O_((d = i.pop()).scale, d.model),
            B(i, function (t) {
              var e = t.scale,
                t = t.model,
                n = d.scale,
                i = o_.prototype,
                r = i.getTicks.call(n),
                o = i.getTicks.call(n, !0),
                a = r.length - 1,
                n = i.getInterval.call(n),
                s = (t = L_(e, t)).extent,
                l = t.fixMin,
                t = t.fixMax,
                u =
                  ('log' === e.type &&
                    ((u = ow(e.base)), (s = [ow(s[0]) / u, ow(s[1]) / u])),
                  e.setExtent(s[0], s[1]),
                  e.calcNiceExtent({ splitNumber: a, fixMin: l, fixMax: t }),
                  i.getExtent.call(e)),
                h =
                  (l && (s[0] = u[0]),
                  t && (s[1] = u[1]),
                  i.getInterval.call(e)),
                c = s[0],
                p = s[1]
              if (l && t) h = (p - c) / a
              else if (l)
                for (
                  p = s[0] + h * a;
                  p < s[1] && isFinite(p) && isFinite(s[1]);

                )
                  (h = jv(h)), (p = s[0] + h * a)
              else if (t)
                for (
                  c = s[1] - h * a;
                  c > s[0] && isFinite(c) && isFinite(s[0]);

                )
                  (h = jv(h)), (c = s[1] - h * a)
              else {
                u = (h = e.getTicks().length - 1 > a ? jv(h) : h) * a
                ;(c = go((p = Math.ceil(s[1] / h) * h) - u)) < 0 && 0 <= s[0]
                  ? ((c = 0), (p = go(u)))
                  : 0 < p && s[1] <= 0 && ((p = 0), (c = -go(u)))
              }
              ;(l = (r[0].value - o[0].value) / n),
                (t = (r[a].value - o[a].value) / n),
                i.setExtent.call(e, c + h * l, p + h * t),
                i.setInterval.call(e, h),
                (l || t) && i.setNiceExtent.call(e, c + h, p - h)
            }))
        }
      }
      this._updateScale(t, this.model), i(n.x), i(n.y)
      var r = {}
      B(n.x, function (t) {
        uw(n, 'y', t, r)
      }),
        B(n.y, function (t) {
          uw(n, 'x', t, r)
        }),
        this.resize(this.model, e)
    }),
    (sw.prototype.resize = function (t, e, n) {
      var i = t.getBoxLayoutParams(),
        n = !n && t.get('containLabel'),
        a = jp(i, { width: e.getWidth(), height: e.getHeight() }),
        r = ((this._rect = a), this._axesList)
      function o () {
        B(r, function (t) {
          var e,
            n,
            i = t.isHorizontal(),
            r = i ? [0, a.width] : [0, a.height],
            o = t.inverse ? 1 : 0
          t.setExtent(r[o], r[1 - o]),
            (r = t),
            (e = i ? a.x : a.y),
            (o = r.getExtent()),
            (n = o[0] + o[1]),
            (r.toGlobalCoord =
              'x' === r.dim
                ? function (t) {
                    return t + e
                  }
                : function (t) {
                    return n - t + e
                  }),
            (r.toLocalCoord =
              'x' === r.dim
                ? function (t) {
                    return t - e
                  }
                : function (t) {
                    return n - t + e
                  })
        })
      }
      o(),
        n &&
          (B(r, function (t) {
            var e, n, i
            t.model.get(['axisLabel', 'inside']) ||
              ((e = z_(t)) &&
                ((n = t.isHorizontal() ? 'height' : 'width'),
                (i = t.model.get(['axisLabel', 'margin'])),
                (a[n] -= e[n] + i),
                'top' === t.position
                  ? (a.y += e.height + i)
                  : 'left' === t.position && (a.x += e.width + i)))
          }),
          o()),
        B(this._coordsList, function (t) {
          t.calcAffineTransform()
        })
    }),
    (sw.prototype.getAxis = function (t, e) {
      t = this._axesMap[t]
      if (null != t) return t[e || 0]
    }),
    (sw.prototype.getAxes = function () {
      return this._axesList.slice()
    }),
    (sw.prototype.getCartesian = function (t, e) {
      if (null != t && null != e) return this._coordsMap['x' + t + 'y' + e]
      L(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex))
      for (var n = 0, i = this._coordsList; n < i.length; n++)
        if (i[n].getAxis('x').index === t || i[n].getAxis('y').index === e)
          return i[n]
    }),
    (sw.prototype.getCartesians = function () {
      return this._coordsList.slice()
    }),
    (sw.prototype.convertToPixel = function (t, e, n) {
      e = this._findConvertTarget(e)
      return e.cartesian
        ? e.cartesian.dataToPoint(n)
        : e.axis
        ? e.axis.toGlobalCoord(e.axis.dataToCoord(n))
        : null
    }),
    (sw.prototype.convertFromPixel = function (t, e, n) {
      e = this._findConvertTarget(e)
      return e.cartesian
        ? e.cartesian.pointToData(n)
        : e.axis
        ? e.axis.coordToData(e.axis.toLocalCoord(n))
        : null
    }),
    (sw.prototype._findConvertTarget = function (t) {
      var e,
        n,
        i = t.seriesModel,
        r =
          t.xAxisModel ||
          (i && i.getReferringComponents('xAxis', Ko).models[0]),
        o =
          t.yAxisModel ||
          (i && i.getReferringComponents('yAxis', Ko).models[0]),
        t = t.gridModel,
        a = this._coordsList
      return (
        i
          ? I(a, (e = i.coordinateSystem)) < 0 && (e = null)
          : r && o
          ? (e = this.getCartesian(r.componentIndex, o.componentIndex))
          : r
          ? (n = this.getAxis('x', r.componentIndex))
          : o
          ? (n = this.getAxis('y', o.componentIndex))
          : t && t.coordinateSystem === this && (e = this._coordsList[0]),
        { cartesian: e, axis: n }
      )
    }),
    (sw.prototype.containPoint = function (t) {
      var e = this._coordsList[0]
      if (e) return e.containPoint(t)
    }),
    (sw.prototype._initCartesian = function (o, t, e) {
      var a = this,
        s = this,
        l = { left: !1, right: !1, top: !1, bottom: !1 },
        u = { x: {}, y: {} },
        h = { x: 0, y: 0 }
      function n (r) {
        return function (t, e) {
          var n, i
          lw(t, o) &&
            ((n = t.get('position')),
            'x' === r
              ? 'top' !== n &&
                'bottom' !== n &&
                (n = l.bottom ? 'top' : 'bottom')
              : 'left' !== n &&
                'right' !== n &&
                (n = l.left ? 'right' : 'left'),
            (l[n] = !0),
            (i =
              'category' ===
              (n = new tw(r, R_(t), [0, 0], t.get('type'), n)).type),
            (n.onBand = i && t.get('boundaryGap')),
            (n.inverse = t.get('inverse')),
            ((t.axis = n).model = t),
            (n.grid = s),
            (n.index = e),
            s._axesList.push(n),
            (u[r][e] = n),
            h[r]++)
        }
      }
      t.eachComponent('xAxis', n('x'), this),
        t.eachComponent('yAxis', n('y'), this),
        h.x && h.y
          ? B((this._axesMap = u).x, function (i, r) {
              B(u.y, function (t, e) {
                var e = 'x' + r + 'y' + e,
                  n = new $x(e)
                ;(n.master = a),
                  (n.model = o),
                  (a._coordsMap[e] = n),
                  a._coordsList.push(n),
                  n.addAxis(i),
                  n.addAxis(t)
              })
            })
          : ((this._axesMap = {}), (this._axesList = []))
    }),
    (sw.prototype._updateScale = function (t, i) {
      function r (e, n) {
        var i, t, r
        B(
          ((i = e),
          (t = n.dim),
          (r = {}),
          B(i.mapDimensionsAll(t), function (t) {
            r[Ev(i, t)] = !0
          }),
          R(r)),
          function (t) {
            n.scale.unionExtentFromData(e, t)
          }
        )
      }
      B(this._axesList, function (t) {
        var e
        t.scale.setExtent(1 / 0, -1 / 0),
          'category' === t.type &&
            ((e = t.model.get('categorySortInfo')), t.scale.setSortInfo(e))
      }),
        t.eachSeries(function (t) {
          var e, n
          iw(t) &&
            ((n = (e = rw(t)).xAxisModel), (e = e.yAxisModel), lw(n, i)) &&
            lw(e, i) &&
            ((n = this.getCartesian(n.componentIndex, e.componentIndex)),
            (e = t.getData()),
            (t = n.getAxis('x')),
            (n = n.getAxis('y')),
            r(e, t),
            r(e, n))
        }, this)
    }),
    (sw.prototype.getTooltipAxes = function (n) {
      var i = [],
        r = []
      return (
        B(this.getCartesians(), function (t) {
          var e = null != n && 'auto' !== n ? t.getAxis(n) : t.getBaseAxis(),
            t = t.getOtherAxis(e)
          I(i, e) < 0 && i.push(e), I(r, t) < 0 && r.push(t)
        }),
        { baseAxes: i, otherAxes: r }
      )
    }),
    (sw.create = function (i, r) {
      var o = []
      return (
        i.eachComponent('grid', function (t, e) {
          var n = new sw(t, i, r)
          ;(n.name = 'grid_' + e),
            n.resize(t, r, !0),
            (t.coordinateSystem = n),
            o.push(n)
        }),
        i.eachSeries(function (t) {
          var e, n, i
          iw(t) &&
            ((e = (n = rw(t)).xAxisModel),
            (n = n.yAxisModel),
            (i = e.getCoordSysModel().coordinateSystem),
            (t.coordinateSystem = i.getCartesian(
              e.componentIndex,
              n.componentIndex
            )))
        }),
        o
      )
    }),
    (sw.dimensions = jx)
  var aw = sw
  function sw (t, e, n) {
    ;(this.type = 'grid'),
      (this._coordsMap = {}),
      (this._coordsList = []),
      (this._axesMap = {}),
      (this._axesList = []),
      (this.axisPointerEnabled = !0),
      (this.dimensions = jx),
      this._initCartesian(t, e, n),
      (this.model = t)
  }
  function lw (t, e) {
    return t.getCoordSysModel() === e
  }
  function uw (t, e, n, i) {
    n.getAxesOnZeroOf = function () {
      return r ? [r] : []
    }
    var r,
      o = t[e],
      t = n.model,
      e = t.get(['axisLine', 'onZero']),
      n = t.get(['axisLine', 'onZeroAxisIndex'])
    if (e) {
      if (null != n) hw(o[n]) && (r = o[n])
      else
        for (var a in o)
          if (o.hasOwnProperty(a) && hw(o[a]) && !i[s(o[a])]) {
            r = o[a]
            break
          }
      r && (i[s(r)] = !0)
    }
    function s (t) {
      return t.dim + '_' + t.index
    }
  }
  function hw (t) {
    return (
      t &&
      'category' !== t.type &&
      'time' !== t.type &&
      ((e = (t = (t = t).scale.getExtent())[0]),
      (t = t[1]),
      !((0 < e && 0 < t) || (e < 0 && t < 0)))
    )
    var e
  }
  var cw = Math.PI,
    pw =
      ((fw.prototype.hasBuilder = function (t) {
        return !!dw[t]
      }),
      (fw.prototype.add = function (t) {
        dw[t](this.opt, this.axisModel, this.group, this._transformGroup)
      }),
      (fw.prototype.getGroup = function () {
        return this.group
      }),
      (fw.innerTextLayout = function (t, e, n) {
        var i,
          e = xo(e - t),
          t = wo(e)
            ? ((i = 0 < n ? 'top' : 'bottom'), 'center')
            : wo(e - cw)
            ? ((i = 0 < n ? 'bottom' : 'top'), 'center')
            : ((i = 'middle'),
              0 < e && e < cw
                ? 0 < n
                  ? 'right'
                  : 'left'
                : 0 < n
                ? 'left'
                : 'right')
        return { rotation: e, textAlign: t, textVerticalAlign: i }
      }),
      (fw.makeAxisEventDataBase = function (t) {
        var e = { componentType: t.mainType, componentIndex: t.componentIndex }
        return (e[t.mainType + 'Index'] = t.componentIndex), e
      }),
      (fw.isLabelSilent = function (t) {
        var e = t.get('tooltip')
        return t.get('silent') || !(t.get('triggerEvent') || (e && e.show))
      }),
      fw),
    dw = {
      axisLine: function (i, t, r, e) {
        var o,
          a,
          s,
          l,
          u,
          h,
          c,
          n = t.get(['axisLine', 'show'])
        ;(n =
          'auto' === n && i.handleAutoShown
            ? i.handleAutoShown('axisLine')
            : n) &&
          ((n = t.axis.getExtent()),
          (e = e.transform),
          (o = [n[0], 0]),
          (a = [n[1], 0]),
          (s = a[0] < o[0]),
          e && (ne(o, o, e), ne(a, a, e)),
          (l = O(
            { lineCap: 'round' },
            t.getModel(['axisLine', 'lineStyle']).getLineStyle()
          )),
          hc(
            (n = new ph({
              shape: { x1: o[0], y1: o[1], x2: a[0], y2: a[1] },
              style: l,
              strokeContainThreshold: i.strokeContainThreshold || 5,
              silent: !0,
              z2: 1
            })).shape,
            n.style.lineWidth
          ),
          (n.anid = 'line'),
          r.add(n),
          null != (u = t.get(['axisLine', 'symbol']))) &&
          ((e = t.get(['axisLine', 'symbolSize'])),
          H(u) && (u = [u, u]),
          (H(e) || W(e)) && (e = [e, e]),
          (n = (function (t, e) {
            if (null != t)
              return [
                fo((t = V(t) ? t : [t, t])[0], e[0]) || 0,
                fo(N(t[1], t[0]), e[1]) || 0
              ]
          })(t.get(['axisLine', 'symbolOffset']) || 0, e)),
          (h = e[0]),
          (c = e[1]),
          B(
            [
              { rotate: i.rotation + Math.PI / 2, offset: n[0], r: 0 },
              {
                rotate: i.rotation - Math.PI / 2,
                offset: n[1],
                r: Math.sqrt(
                  (o[0] - a[0]) * (o[0] - a[0]) + (o[1] - a[1]) * (o[1] - a[1])
                )
              }
            ],
            function (t, e) {
              var n
              'none' !== u[e] &&
                null != u[e] &&
                ((e = p0(u[e], -h / 2, -c / 2, h, c, l.stroke, !0)),
                (n = t.r + t.offset),
                e.attr({
                  rotation: t.rotate,
                  x: (t = s ? a : o)[0] + n * Math.cos(i.rotation),
                  y: t[1] - n * Math.sin(i.rotation),
                  silent: !0,
                  z2: 11
                }),
                r.add(e))
            }
          ))
      },
      axisTickLabel: function (t, e, n, i) {
        var r,
          o,
          a,
          s = (function (t, e, n, i) {
            var r = n.axis,
              o = n.getModel('axisTick'),
              a = o.get('show')
            if (
              (a =
                'auto' === a && i.handleAutoShown
                  ? i.handleAutoShown('axisTick')
                  : a) &&
              !r.scale.isBlank()
            ) {
              for (
                var a = o.getModel('lineStyle'),
                  i = i.tickDirection * o.get('length'),
                  s = vw(
                    r.getTicksCoords(),
                    e.transform,
                    i,
                    E(a.getLineStyle(), {
                      stroke: n.get(['axisLine', 'lineStyle', 'color'])
                    }),
                    'ticks'
                  ),
                  l = 0;
                l < s.length;
                l++
              )
                t.add(s[l])
              return s
            }
          })(n, i, e, t),
          l = (function (l, u, h, c) {
            var p = h.axis
            {
              var d, f, t, e, g, y, m, v, _
              if (
                bt(c.axisLabelShow, h.get(['axisLabel', 'show'])) &&
                !p.scale.isBlank()
              )
                return (
                  (d = h.getModel('axisLabel')),
                  (f = d.get('margin')),
                  (t = p.getViewLabels()),
                  (e = ((bt(c.labelRotate, d.get('rotate')) || 0) * cw) / 180),
                  (g = pw.innerTextLayout(c.rotation, e, c.labelDirection)),
                  (y = h.getCategories && h.getCategories(!0)),
                  (m = []),
                  (v = pw.isLabelSilent(h)),
                  (_ = h.get('triggerEvent')),
                  B(t, function (t, e) {
                    var n =
                        'ordinal' === p.scale.type
                          ? p.scale.getRawOrdinalNumber(t.tickValue)
                          : t.tickValue,
                      i = t.formattedLabel,
                      r = t.rawLabel,
                      o = d,
                      a =
                        (o =
                          y && y[n] && L((a = y[n])) && a.textStyle
                            ? new Zc(a.textStyle, d, h.ecModel)
                            : o).getTextColor() ||
                        h.get(['axisLine', 'lineStyle', 'color']),
                      s = p.dataToCoord(n),
                      s = new Zs({
                        x: s,
                        y: c.labelOffset + c.labelDirection * f,
                        rotation: g.rotation,
                        silent: v,
                        z2: 10 + (t.level || 0),
                        style: kc(o, {
                          text: i,
                          align: o.getShallow('align', !0) || g.textAlign,
                          verticalAlign:
                            o.getShallow('verticalAlign', !0) ||
                            o.getShallow('baseline', !0) ||
                            g.textVerticalAlign,
                          fill: S(a)
                            ? a(
                                'category' === p.type
                                  ? r
                                  : 'value' === p.type
                                  ? n + ''
                                  : n,
                                e
                              )
                            : a
                        })
                      })
                    ;(s.anid = 'label_' + n),
                      _ &&
                        (((t = pw.makeAxisEventDataBase(h)).targetType =
                          'axisLabel'),
                        (t.value = r),
                        (t.tickIndex = e),
                        'category' === p.type && (t.dataIndex = n),
                        (ul(s).eventData = t)),
                      u.add(s),
                      s.updateTransform(),
                      m.push(s),
                      l.add(s),
                      s.decomposeTransform()
                  }),
                  m
                )
            }
          })(n, i, e, t),
          u = e,
          h = l,
          c =
            (F_(u.axis) ||
              ((d = u.get(['axisLabel', 'showMinLabel'])),
              (u = u.get(['axisLabel', 'showMaxLabel'])),
              (s = s || []),
              (y = (h = h || [])[0]),
              (f = h[1]),
              (r = h[h.length - 1]),
              (h = h[h.length - 2]),
              (o = s[0]),
              (g = s[1]),
              (a = s[s.length - 1]),
              (s = s[s.length - 2]),
              !1 === d
                ? (gw(y), gw(o))
                : yw(y, f) && (d ? (gw(f), gw(g)) : (gw(y), gw(o))),
              !1 === u
                ? (gw(r), gw(a))
                : yw(h, r) && (u ? (gw(h), gw(s)) : (gw(r), gw(a)))),
            n),
          p = i,
          d = e,
          f = t.tickDirection,
          g = d.axis,
          y = d.getModel('minorTick')
        if (y.get('show') && !g.scale.isBlank()) {
          var m = g.getMinorTicksCoords()
          if (m.length)
            for (
              var g = y.getModel('lineStyle'),
                v = f * y.get('length'),
                _ = E(
                  g.getLineStyle(),
                  E(d.getModel('axisTick').getLineStyle(), {
                    stroke: d.get(['axisLine', 'lineStyle', 'color'])
                  })
                ),
                x = 0;
              x < m.length;
              x++
            )
              for (
                var w = vw(m[x], p.transform, v, _, 'minorticks_' + x), b = 0;
                b < w.length;
                b++
              )
                c.add(w[b])
        }
        e.get(['axisLabel', 'hideOverlap']) &&
          W1(
            F1(
              F(l, function (t) {
                return {
                  label: t,
                  priority: t.z2,
                  defaultAttr: { ignore: t.ignore }
                }
              })
            )
          )
      },
      axisName: function (t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p = bt(t.axisName, e.get('name'))
        p &&
          ((l = e.get('nameLocation')),
          (s = t.nameDirection),
          (o = e.getModel('nameTextStyle')),
          (u = e.get('nameGap') || 0),
          (a = (h = e.axis.getExtent())[0] > h[1] ? -1 : 1),
          (a = [
            'start' === l
              ? h[0] - a * u
              : 'end' === l
              ? h[1] + a * u
              : (h[0] + h[1]) / 2,
            mw(l) ? t.labelOffset + s * u : 0
          ]),
          null != (u = e.get('nameRotate')) && (u = (u * cw) / 180),
          mw(l)
            ? (r = pw.innerTextLayout(
                t.rotation,
                null != u ? u : t.rotation,
                s
              ))
            : ((s = t.rotation),
              (l = l),
              (h = h),
              (u = xo((u = u || 0) - s)),
              (s = h[0] > h[1]),
              (h = ('start' === l && !s) || ('start' !== l && s)),
              (l = wo(u - cw / 2)
                ? ((c = h ? 'bottom' : 'top'), 'center')
                : wo(u - 1.5 * cw)
                ? ((c = h ? 'top' : 'bottom'), 'center')
                : ((c = 'middle'),
                  u < 1.5 * cw && cw / 2 < u
                    ? h
                      ? 'left'
                      : 'right'
                    : h
                    ? 'right'
                    : 'left')),
              (r = { rotation: u, textAlign: l, textVerticalAlign: c }),
              null == (c = t.axisNameAvailableWidth) ||
                ((c = Math.abs(c / Math.sin(r.rotation))), isFinite(c)) ||
                (c = null)),
          (s = o.getFont()),
          (u = (h = e.get('nameTruncate', !0) || {}).ellipsis),
          (l = bt(t.nameTruncateMaxWidth, h.maxWidth, c)),
          xc({
            el: (t = new Zs({
              x: a[0],
              y: a[1],
              rotation: r.rotation,
              silent: pw.isLabelSilent(e),
              style: kc(o, {
                text: p,
                font: s,
                overflow: 'truncate',
                width: l,
                ellipsis: u,
                fill:
                  o.getTextColor() || e.get(['axisLine', 'lineStyle', 'color']),
                align: o.get('align') || r.textAlign,
                verticalAlign: o.get('verticalAlign') || r.textVerticalAlign
              }),
              z2: 1
            })),
            componentModel: e,
            itemName: p
          }),
          (t.__fullText = p),
          (t.anid = 'name'),
          e.get('triggerEvent') &&
            (((h = pw.makeAxisEventDataBase(e)).targetType = 'axisName'),
            (h.name = p),
            (ul(t).eventData = h)),
          i.add(t),
          t.updateTransform(),
          n.add(t),
          t.decomposeTransform())
      }
    }
  function fw (t, e) {
    ;(this.group = new no()),
      (this.opt = e),
      (this.axisModel = t),
      E(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function () {
          return !0
        }
      })
    t = new no({ x: e.position[0], y: e.position[1], rotation: e.rotation })
    t.updateTransform(), (this._transformGroup = t)
  }
  function gw (t) {
    t && (t.ignore = !0)
  }
  function yw (t, e) {
    var n,
      i = t && t.getBoundingRect().clone(),
      r = e && e.getBoundingRect().clone()
    if (i && r)
      return (
        Ee((n = Re([])), n, -t.rotation),
        i.applyTransform(Be([], n, t.getLocalTransform())),
        r.applyTransform(Be([], n, e.getLocalTransform())),
        i.intersect(r)
      )
  }
  function mw (t) {
    return 'middle' === t || 'center' === t
  }
  function vw (t, e, n, i, r) {
    for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord,
        u =
          ((a[0] = u),
          (s[(a[1] = 0)] = u),
          (s[1] = n),
          e && (ne(a, a, e), ne(s, s, e)),
          new ph({
            shape: { x1: a[0], y1: a[1], x2: s[0], y2: s[1] },
            style: i,
            z2: 2,
            autoBatch: !0,
            silent: !0
          }))
      hc(u.shape, u.style.lineWidth),
        (u.anid = r + '_' + t[l].tickValue),
        o.push(u)
    }
    return o
  }
  function _w (t, e) {
    var r,
      h,
      c,
      o,
      p,
      d,
      f,
      n = {
        axesInfo: {},
        seriesInvolved: !1,
        coordSysAxesInfo: {},
        coordSysMap: {}
      }
    return (
      (h = n),
      (e = e),
      (o = (c = t).getComponent('tooltip')),
      (p = c.getComponent('axisPointer')),
      (d = p.get('link', !0) || []),
      (f = []),
      B(e.getCoordinateSystems(), function (s) {
        var l, u, t, e, n
        function i (t, e, n) {
          var i,
            r,
            o = n.model.getModel('axisPointer', p),
            a = o.get('show')
          a &&
            ('auto' !== a || t || bw(o)) &&
            (null == e && (e = o.get('triggerTooltip')),
            (a = (o = t
              ? (function (t, e, n, i, r, o) {
                  var a = e.getModel('axisPointer'),
                    s = {},
                    e =
                      (B(
                        [
                          'type',
                          'snap',
                          'lineStyle',
                          'shadowStyle',
                          'label',
                          'animation',
                          'animationDurationUpdate',
                          'animationEasingUpdate',
                          'z'
                        ],
                        function (t) {
                          s[t] = _(a.get(t))
                        }
                      ),
                      (s.snap = 'category' !== t.type && !!o),
                      'cross' === a.get('type') && (s.type = 'line'),
                      s.label || (s.label = {}))
                  null == e.show && (e.show = !1),
                    'cross' === r &&
                      ((r = a.get(['label', 'show'])),
                      (e.show = null == r || r),
                      o ||
                        ((r = s.lineStyle = a.get('crossStyle')) &&
                          E(e, r.textStyle)))
                  return t.model.getModel('axisPointer', new Zc(s, n, i))
                })(n, u, p, c, t, e)
              : o).get('snap')),
            (t = o.get('triggerEmphasis')),
            (i = Sw(n.model)),
            (r = e || a || 'category' === n.type),
            (e = h.axesInfo[i] =
              {
                key: i,
                axis: n,
                coordSys: s,
                axisPointerModel: o,
                triggerTooltip: e,
                triggerEmphasis: t,
                involveSeries: r,
                snap: a,
                useHandle: bw(o),
                seriesModels: [],
                linkGroup: null
              }),
            (l[i] = e),
            (h.seriesInvolved = h.seriesInvolved || r),
            null !=
              (t = (function (t, e) {
                for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
                  var o = t[r] || {}
                  if (
                    xw(o[i + 'AxisId'], n.id) ||
                    xw(o[i + 'AxisIndex'], n.componentIndex) ||
                    xw(o[i + 'AxisName'], n.name)
                  )
                    return r
                }
              })(d, n))) &&
            (((a = f[t] || (f[t] = { axesInfo: {} })).axesInfo[i] = e),
            (a.mapper = d[t].mapper),
            (e.linkGroup = a))
        }
        s.axisPointerEnabled &&
          ((t = Sw(s.model)),
          (l = h.coordSysAxesInfo[t] = {}),
          (u = (h.coordSysMap[t] = s).model.getModel('tooltip', o)),
          B(s.getAxes(), dt(i, !1, null)),
          s.getTooltipAxes) &&
          o &&
          u.get('show') &&
          ((t = 'axis' === u.get('trigger')),
          (e = 'cross' === u.get(['axisPointer', 'type'])),
          (n = s.getTooltipAxes(u.get(['axisPointer', 'axis']))),
          (t || e) && B(n.baseAxes, dt(i, !e || 'cross', t)),
          e) &&
          B(n.otherAxes, dt(i, 'cross', !1))
      }),
      n.seriesInvolved &&
        ((r = n),
        t.eachSeries(function (n) {
          var i = n.coordinateSystem,
            t = n.get(['tooltip', 'trigger'], !0),
            e = n.get(['tooltip', 'show'], !0)
          i &&
            'none' !== t &&
            !1 !== t &&
            'item' !== t &&
            !1 !== e &&
            !1 !== n.get(['axisPointer', 'show'], !0) &&
            B(r.coordSysAxesInfo[Sw(i.model)], function (t) {
              var e = t.axis
              i.getAxis(e.dim) === e &&
                (t.seriesModels.push(n),
                null == t.seriesDataCount && (t.seriesDataCount = 0),
                (t.seriesDataCount += n.getData().count()))
            })
        })),
      n
    )
  }
  function xw (t, e) {
    return 'all' === t || (V(t) && 0 <= I(t, e)) || t === e
  }
  function ww (t) {
    var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo
    return e && e.axesInfo[Sw(t)]
  }
  function bw (t) {
    return !!t.get(['handle', 'show'])
  }
  function Sw (t) {
    return t.type + '||' + t.id
  }
  var Mw,
    Tw = {},
    Cw =
      (u(Iw, (Mw = oy)),
      (Iw.prototype.render = function (t, e, n, i) {
        var r, o, a, s, l, u
        this.axisPointerClass &&
          (r = ww((r = t))) &&
          ((l = r.axisPointerModel),
          (o = r.axis.scale),
          (a = l.option),
          (u = l.get('status')),
          null != (s = l.get('value')) && (s = o.parse(s)),
          (l = bw(l)),
          null == u && (a.status = l ? 'show' : 'hide'),
          (u = o.getExtent().slice())[0] > u[1] && u.reverse(),
          (s = null == s || s > u[1] ? u[1] : s) < u[0] && (s = u[0]),
          (a.value = s),
          l) &&
          (a.status = r.axis.scale.isBlank() ? 'hide' : 'show'),
          Mw.prototype.render.apply(this, arguments),
          this._doUpdateAxisPointerClass(t, n, !0)
      }),
      (Iw.prototype.updateAxisPointer = function (t, e, n, i) {
        this._doUpdateAxisPointerClass(t, n, !1)
      }),
      (Iw.prototype.remove = function (t, e) {
        var n = this._axisPointer
        n && n.remove(e)
      }),
      (Iw.prototype.dispose = function (t, e) {
        this._disposeAxisPointer(e), Mw.prototype.dispose.apply(this, arguments)
      }),
      (Iw.prototype._doUpdateAxisPointerClass = function (t, e, n) {
        var i,
          r = Iw.getAxisPointerClass(this.axisPointerClass)
        r &&
          ((i = (i = ww((i = t))) && i.axisPointerModel)
            ? (this._axisPointer || (this._axisPointer = new r())).render(
                t,
                i,
                e,
                n
              )
            : this._disposeAxisPointer(e))
      }),
      (Iw.prototype._disposeAxisPointer = function (t) {
        this._axisPointer && this._axisPointer.dispose(t),
          (this._axisPointer = null)
      }),
      (Iw.registerAxisPointerClass = function (t, e) {
        Tw[t] = e
      }),
      (Iw.getAxisPointerClass = function (t) {
        return t && Tw[t]
      }),
      (Iw.type = 'axis'),
      Iw)
  function Iw () {
    var t = (null !== Mw && Mw.apply(this, arguments)) || this
    return (t.type = Iw.type), t
  }
  var kw = Yo()
  var Dw,
    Aw,
    Pw = ['axisLine', 'axisTickLabel', 'axisName'],
    Lw = ['splitArea', 'splitLine', 'minorSplitLine'],
    s0 =
      (u(Bw, (Aw = Cw)),
      (Bw.prototype.render = function (i, t, e, n) {
        this.group.removeAll()
        var r,
          o,
          a = this._axisGroup
        ;(this._axisGroup = new no()),
          this.group.add(this._axisGroup),
          i.get('show') &&
            ((o = nw((r = i.getCoordSysModel()), i)),
            (o = new pw(
              i,
              O(
                {
                  handleAutoShown: function (t) {
                    for (
                      var e = r.coordinateSystem.getCartesians(), n = 0;
                      n < e.length;
                      n++
                    )
                      if (Yv(e[n].getOtherAxis(i.axis).scale)) return !0
                    return !1
                  }
                },
                o
              )
            )),
            B(Pw, o.add, o),
            this._axisGroup.add(o.getGroup()),
            B(
              Lw,
              function (t) {
                i.get([t, 'show']) && Ow[t](this, this._axisGroup, i, r)
              },
              this
            ),
            (n && 'changeAxisOrder' === n.type && n.isInitSort) ||
              gc(a, this._axisGroup, i),
            Aw.prototype.render.call(this, i, t, e, n))
      }),
      (Bw.prototype.remove = function () {
        kw(this).splitAreaColors = null
      }),
      (Bw.type = 'cartesianAxis'),
      Bw),
    Ow = {
      splitLine: function (t, e, n, i) {
        var r = n.axis
        if (!r.scale.isBlank())
          for (
            var n = n.getModel('splitLine'),
              o = n.getModel('lineStyle'),
              a = V((a = o.get('color'))) ? a : [a],
              s = i.coordinateSystem.getRect(),
              l = r.isHorizontal(),
              u = 0,
              h = r.getTicksCoords({ tickModel: n }),
              c = [],
              p = [],
              d = o.getLineStyle(),
              f = 0;
            f < h.length;
            f++
          ) {
            var g = r.toGlobalCoord(h[f].coord),
              g =
                (l
                  ? ((c[0] = g),
                    (c[1] = s.y),
                    (p[0] = g),
                    (p[1] = s.y + s.height))
                  : ((c[0] = s.x),
                    (c[1] = g),
                    (p[0] = s.x + s.width),
                    (p[1] = g)),
                u++ % a.length),
              y = h[f].tickValue,
              y = new ph({
                anid: null != y ? 'line_' + h[f].tickValue : null,
                autoBatch: !0,
                shape: { x1: c[0], y1: c[1], x2: p[0], y2: p[1] },
                style: E({ stroke: a[g] }, d),
                silent: !0
              })
            hc(y.shape, d.lineWidth), e.add(y)
          }
      },
      minorSplitLine: function (t, e, n, i) {
        var r = n.axis,
          n = n.getModel('minorSplitLine').getModel('lineStyle'),
          o = i.coordinateSystem.getRect(),
          a = r.isHorizontal(),
          s = r.getMinorTicksCoords()
        if (s.length)
          for (
            var l = [], u = [], h = n.getLineStyle(), c = 0;
            c < s.length;
            c++
          )
            for (var p = 0; p < s[c].length; p++) {
              var d = r.toGlobalCoord(s[c][p].coord),
                d =
                  (a
                    ? ((l[0] = d),
                      (l[1] = o.y),
                      (u[0] = d),
                      (u[1] = o.y + o.height))
                    : ((l[0] = o.x),
                      (l[1] = d),
                      (u[0] = o.x + o.width),
                      (u[1] = d)),
                  new ph({
                    anid: 'minor_line_' + s[c][p].tickValue,
                    autoBatch: !0,
                    shape: { x1: l[0], y1: l[1], x2: u[0], y2: u[1] },
                    style: h,
                    silent: !0
                  }))
              hc(d.shape, h.lineWidth), e.add(d)
            }
      },
      splitArea: function (t, e, n, i) {
        var r = e,
          e = i,
          o = (i = n).axis
        if (!o.scale.isBlank()) {
          var i = i.getModel('splitArea'),
            n = i.getModel('areaStyle'),
            a = n.get('color'),
            s = e.coordinateSystem.getRect(),
            l = o.getTicksCoords({ tickModel: i, clamp: !0 })
          if (l.length) {
            var u = a.length,
              h = kw(t).splitAreaColors,
              c = z(),
              p = 0
            if (h)
              for (var d = 0; d < l.length; d++) {
                var f = h.get(l[d].tickValue)
                if (null != f) {
                  p = (f + (u - 1) * d) % u
                  break
                }
              }
            for (
              var g = o.toGlobalCoord(l[0].coord),
                y = n.getAreaStyle(),
                a = V(a) ? a : [a],
                d = 1;
              d < l.length;
              d++
            ) {
              var m = o.toGlobalCoord(l[d].coord),
                v = void 0,
                _ = void 0,
                x = void 0,
                w = void 0,
                g = o.isHorizontal()
                  ? ((v = g), (_ = s.y), (w = s.height), v + (x = m - v))
                  : ((v = s.x), (_ = g), (x = s.width), _ + (w = m - _)),
                m = l[d - 1].tickValue
              null != m && c.set(m, p),
                r.add(
                  new Us({
                    anid: null != m ? 'area_' + m : null,
                    shape: { x: v, y: _, width: x, height: w },
                    style: E({ fill: a[p] }, y),
                    autoBatch: !0,
                    silent: !0
                  })
                ),
                (p = (p + 1) % u)
            }
            kw(t).splitAreaColors = c
          }
        }
      }
    },
    Rw = (u(Nw, (Dw = s0)), (Nw.type = 'xAxis'), Nw)
  function Nw () {
    var t = (null !== Dw && Dw.apply(this, arguments)) || this
    return (t.type = Nw.type), t
  }
  function Bw () {
    var t = (null !== Aw && Aw.apply(this, arguments)) || this
    return (t.type = Bw.type), (t.axisPointerClass = 'CartesianAxisPointer'), t
  }
  u(Fw, (zw = s0)), (Fw.type = 'yAxis')
  var zw,
    Ew = Fw
  function Fw () {
    var t = (null !== zw && zw.apply(this, arguments)) || this
    return (t.type = Rw.type), t
  }
  u(Gw, (Vw = oy)),
    (Gw.prototype.render = function (t, e) {
      this.group.removeAll(),
        t.get('show') &&
          this.group.add(
            new Us({
              shape: t.coordinateSystem.getRect(),
              style: E({ fill: t.get('backgroundColor') }, t.getItemStyle()),
              silent: !0,
              z2: -1
            })
          )
    }),
    (Gw.type = 'grid')
  var Vw,
    Hw = Gw,
    Ww = { offset: 0 }
  function Gw () {
    var t = (null !== Vw && Vw.apply(this, arguments)) || this
    return (t.type = 'grid'), t
  }
  U_(function (t) {
    t.registerComponentView(Hw),
      t.registerComponentModel(Ex),
      t.registerCoordinateSystem('cartesian2d', aw),
      Xx(t, 'x', Hx, Ww),
      Xx(t, 'y', Hx, Ww),
      t.registerComponentView(Rw),
      t.registerComponentView(Ew),
      t.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
      })
  })
  u(Zw, (Xw = g)),
    (Zw.type = 'title'),
    (Zw.defaultOption = {
      z: 6,
      show: !0,
      text: '',
      target: 'blank',
      subtext: '',
      subtarget: 'blank',
      left: 0,
      top: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: { fontSize: 18, fontWeight: 'bold', color: '#464646' },
      subtextStyle: { fontSize: 12, color: '#6E7079' }
    })
  var Uw,
    Xw,
    Yw = Zw,
    qw =
      (u(jw, (Uw = oy)),
      (jw.prototype.render = function (t, e, n) {
        var i, r, o, a, s, l, u, h, c
        this.group.removeAll(),
          t.get('show') &&
            ((i = this.group),
            (u = t.getModel('textStyle')),
            (r = t.getModel('subtextStyle')),
            (h = t.get('textAlign')),
            (c = N(t.get('textBaseline'), t.get('textVerticalAlign'))),
            (s = (u = new Zs({
              style: kc(
                u,
                { text: t.get('text'), fill: u.getTextColor() },
                { disableBox: !0 }
              ),
              z2: 10
            })).getBoundingRect()),
            (l = t.get('subtext')),
            (r = new Zs({
              style: kc(
                r,
                {
                  text: l,
                  fill: r.getTextColor(),
                  y: s.height + t.get('itemGap'),
                  verticalAlign: 'top'
                },
                { disableBox: !0 }
              ),
              z2: 10
            })),
            (o = t.get('link')),
            (a = t.get('sublink')),
            (s = t.get('triggerEvent', !0)),
            (u.silent = !o && !s),
            (r.silent = !a && !s),
            o &&
              u.on('click', function () {
                Wp(o, '_' + t.get('target'))
              }),
            a &&
              r.on('click', function () {
                Wp(a, '_' + t.get('subtarget'))
              }),
            (ul(u).eventData = ul(r).eventData =
              s
                ? { componentType: 'title', componentIndex: t.componentIndex }
                : null),
            i.add(u),
            l && i.add(r),
            (s = i.getBoundingRect()),
            ((l = t.getBoxLayoutParams()).width = s.width),
            (l.height = s.height),
            (l = jp(
              l,
              { width: n.getWidth(), height: n.getHeight() },
              t.get('padding')
            )),
            h ||
              ('right' ===
              (h =
                'middle' === (h = t.get('left') || t.get('right'))
                  ? 'center'
                  : h)
                ? (l.x += l.width)
                : 'center' === h && (l.x += l.width / 2)),
            c ||
              ('bottom' ===
              (c =
                'center' === (c = t.get('top') || t.get('bottom'))
                  ? 'middle'
                  : c)
                ? (l.y += l.height)
                : 'middle' === c && (l.y += l.height / 2),
              (c = c || 'top')),
            (i.x = l.x),
            (i.y = l.y),
            i.markRedraw(),
            u.setStyle((n = { align: h, verticalAlign: c })),
            r.setStyle(n),
            (s = i.getBoundingRect()),
            (u = l.margin),
            ((h = t.getItemStyle(['color', 'opacity'])).fill =
              t.get('backgroundColor')),
            (c = new Us({
              shape: {
                x: s.x - u[3],
                y: s.y - u[0],
                width: s.width + u[1] + u[3],
                height: s.height + u[0] + u[2],
                r: t.get('borderRadius')
              },
              style: h,
              subPixelOptimize: !0,
              silent: !0
            })),
            i.add(c))
      }),
      (jw.type = 'title'),
      jw)
  function jw () {
    var t = (null !== Uw && Uw.apply(this, arguments)) || this
    return (t.type = jw.type), t
  }
  function Zw () {
    var t = (null !== Xw && Xw.apply(this, arguments)) || this
    return (
      (t.type = Zw.type), (t.layoutMode = { type: 'box', ignoreSize: !0 }), t
    )
  }
  U_(function (t) {
    t.registerComponentModel(Yw), t.registerComponentView(qw)
  })
  u(Qw, (Kw = g)),
    (Qw.prototype.init = function (t, e, n) {
      this.mergeDefaultAndTheme(t, n),
        (t.selected = t.selected || {}),
        this._updateSelector(t)
    }),
    (Qw.prototype.mergeOption = function (t, e) {
      Kw.prototype.mergeOption.call(this, t, e), this._updateSelector(t)
    }),
    (Qw.prototype._updateSelector = function (t) {
      var n = t.selector,
        i = this.ecModel
      V((n = !0 === n ? (t.selector = ['all', 'inverse']) : n)) &&
        B(n, function (t, e) {
          H(t) && (t = { type: t }),
            (n[e] = d(
              t,
              ((e = i),
              'all' === (t = t.type)
                ? {
                    type: 'all',
                    title: e.getLocaleModel().get(['legend', 'selector', 'all'])
                  }
                : 'inverse' === t
                ? {
                    type: 'inverse',
                    title: e
                      .getLocaleModel()
                      .get(['legend', 'selector', 'inverse'])
                  }
                : void 0)
            ))
        })
    }),
    (Qw.prototype.optionUpdated = function () {
      this._updateData(this.ecModel)
      var t = this._data
      if (t[0] && 'single' === this.get('selectedMode')) {
        for (var e = !1, n = 0; n < t.length; n++) {
          var i = t[n].get('name')
          if (this.isSelected(i)) {
            this.select(i), (e = !0)
            break
          }
        }
        e || this.select(t[0].get('name'))
      }
    }),
    (Qw.prototype._updateData = function (i) {
      var r = [],
        o = [],
        t =
          (i.eachRawSeries(function (t) {
            var e,
              n = t.name
            o.push(n),
              t.legendVisualProvider &&
              ((n = t.legendVisualProvider.getAllNames()),
              i.isSeriesFiltered(t) || (o = o.concat(n)),
              n.length)
                ? (r = r.concat(n))
                : (e = !0),
              e && Wo(t) && r.push(t.name)
          }),
          (this._availableNames = o),
          this.get('data') || r),
        e = z(),
        t = F(
          t,
          function (t) {
            return (
              (H(t) || W(t)) && (t = { name: t }),
              e.get(t.name)
                ? null
                : (e.set(t.name, !0), new Zc(t, this, this.ecModel))
            )
          },
          this
        )
      this._data = ct(t, function (t) {
        return !!t
      })
    }),
    (Qw.prototype.getData = function () {
      return this._data
    }),
    (Qw.prototype.select = function (t) {
      var e = this.option.selected
      'single' === this.get('selectedMode') &&
        B(this._data, function (t) {
          e[t.get('name')] = !1
        }),
        (e[t] = !0)
    }),
    (Qw.prototype.unSelect = function (t) {
      'single' !== this.get('selectedMode') && (this.option.selected[t] = !1)
    }),
    (Qw.prototype.toggleSelected = function (t) {
      var e = this.option.selected
      e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? 'unSelect' : 'select'](t)
    }),
    (Qw.prototype.allSelect = function () {
      var t = this._data,
        e = this.option.selected
      B(t, function (t) {
        e[t.get('name', !0)] = !0
      })
    }),
    (Qw.prototype.inverseSelect = function () {
      var t = this._data,
        e = this.option.selected
      B(t, function (t) {
        t = t.get('name', !0)
        e.hasOwnProperty(t) || (e[t] = !0), (e[t] = !e[t])
      })
    }),
    (Qw.prototype.isSelected = function (t) {
      var e = this.option.selected
      return !(e.hasOwnProperty(t) && !e[t]) && 0 <= I(this._availableNames, t)
    }),
    (Qw.prototype.getOrient = function () {
      return 'vertical' === this.get('orient')
        ? { index: 1, name: 'vertical' }
        : { index: 0, name: 'horizontal' }
    }),
    (Qw.type = 'legend.plain'),
    (Qw.dependencies = ['series']),
    (Qw.defaultOption = {
      z: 4,
      show: !0,
      orient: 'horizontal',
      left: 'center',
      top: 0,
      align: 'auto',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: 'inherit',
      symbolKeepAspect: !0,
      inactiveColor: '#ccc',
      inactiveBorderColor: '#ccc',
      inactiveBorderWidth: 'auto',
      itemStyle: {
        color: 'inherit',
        opacity: 'inherit',
        borderColor: 'inherit',
        borderWidth: 'auto',
        borderCap: 'inherit',
        borderJoin: 'inherit',
        borderDashOffset: 'inherit',
        borderMiterLimit: 'inherit'
      },
      lineStyle: {
        width: 'auto',
        color: 'inherit',
        inactiveColor: '#ccc',
        inactiveWidth: 2,
        opacity: 'inherit',
        type: 'inherit',
        cap: 'inherit',
        join: 'inherit',
        dashOffset: 'inherit',
        miterLimit: 'inherit'
      },
      textStyle: { color: '#333' },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: 'sans-serif',
        color: '#666',
        borderWidth: 1,
        borderColor: '#666'
      },
      emphasis: {
        selectorLabel: { show: !0, color: '#eee', backgroundColor: '#666' }
      },
      selectorPosition: 'auto',
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: { show: !1 }
    })
  var Kw,
    $w = Qw
  function Qw () {
    var t = (null !== Kw && Kw.apply(this, arguments)) || this
    return (
      (t.type = Qw.type), (t.layoutMode = { type: 'box', ignoreSize: !0 }), t
    )
  }
  var Jw,
    tb = dt,
    eb = B,
    nb = no,
    ib =
      (u(rb, (Jw = oy)),
      (rb.prototype.init = function () {
        this.group.add((this._contentGroup = new nb())),
          this.group.add((this._selectorGroup = new nb())),
          (this._isFirstRender = !0)
      }),
      (rb.prototype.getContentGroup = function () {
        return this._contentGroup
      }),
      (rb.prototype.getSelectorGroup = function () {
        return this._selectorGroup
      }),
      (rb.prototype.render = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = this._isFirstRender
        ;(this._isFirstRender = !1),
          this.resetInner(),
          t.get('show', !0) &&
            ((r = t.get('align')),
            (i = t.get('orient')),
            (r && 'auto' !== r) ||
              (r =
                'right' === t.get('left') && 'vertical' === i
                  ? 'right'
                  : 'left'),
            (a = t.get('selector', !0)),
            (s = t.get('selectorPosition', !0)),
            this.renderInner(
              r,
              t,
              e,
              n,
              a,
              i,
              (s =
                !a || (s && 'auto' !== s)
                  ? s
                  : 'horizontal' === i
                  ? 'end'
                  : 'start')
            ),
            (o = jp(
              (e = t.getBoxLayoutParams()),
              (i = { width: n.getWidth(), height: n.getHeight() }),
              (n = t.get('padding'))
            )),
            (o = jp(
              E(
                {
                  width: (r = this.layoutInner(t, r, o, l, a, s)).width,
                  height: r.height
                },
                e
              ),
              i,
              n
            )),
            (this.group.x = o.x - r.x),
            (this.group.y = o.y - r.y),
            this.group.markRedraw(),
            this.group.add(
              (this._backgroundEl =
                ((l = r),
                (s = Np((a = t).get('padding'))),
                ((e = a.getItemStyle(['color', 'opacity'])).fill =
                  a.get('backgroundColor')),
                new Us({
                  shape: {
                    x: l.x - s[3],
                    y: l.y - s[0],
                    width: l.width + s[1] + s[3],
                    height: l.height + s[0] + s[2],
                    r: a.get('borderRadius')
                  },
                  style: e,
                  silent: !0,
                  z2: -1
                })))
            ))
      }),
      (rb.prototype.resetInner = function () {
        this.getContentGroup().removeAll(),
          this._backgroundEl && this.group.remove(this._backgroundEl),
          this.getSelectorGroup().removeAll()
      }),
      (rb.prototype.renderInner = function (s, l, u, h, t, e, n) {
        var c = this.getContentGroup(),
          p = z(),
          d = l.get('selectedMode'),
          f = []
        u.eachRawSeries(function (t) {
          t.get('legendHoverLink') || f.push(t.id)
        }),
          eb(
            l.getData(),
            function (r, o) {
              var t,
                e,
                n,
                i,
                a = r.get('name')
              this.newlineDisabled || ('' !== a && '\n' !== a)
                ? ((t = u.getSeriesByName(a)[0]),
                  p.get(a) ||
                    (t
                      ? ((e =
                          (i = t.getData()).getVisual('legendLineStyle') || {}),
                        (n = i.getVisual('legendIcon')),
                        (i = i.getVisual('style')),
                        this._createItem(t, a, o, r, l, s, e, i, n, d, h)
                          .on('click', tb(ob, a, null, h, f))
                          .on('mouseover', tb(sb, t.name, null, h, f))
                          .on('mouseout', tb(lb, t.name, null, h, f)),
                        p.set(a, !0))
                      : u.eachRawSeries(function (t) {
                          var e, n, i
                          !p.get(a) &&
                            t.legendVisualProvider &&
                            (n = t.legendVisualProvider).containName(a) &&
                            ((i = n.indexOfName(a)),
                            (e = n.getItemVisual(i, 'style')),
                            (n = n.getItemVisual(i, 'legendIcon')),
                            (i = gi(e.fill)) &&
                              0 === i[3] &&
                              ((i[3] = 0.2),
                              (e = O(O({}, e), { fill: xi(i, 'rgba') }))),
                            this._createItem(t, a, o, r, l, s, {}, e, n, d, h)
                              .on('click', tb(ob, null, a, h, f))
                              .on('mouseover', tb(sb, null, a, h, f))
                              .on('mouseout', tb(lb, null, a, h, f)),
                            p.set(a, !0))
                        }, this)))
                : (((e = new nb()).newline = !0), c.add(e))
            },
            this
          ),
          t && this._createSelector(t, l, h, e, n)
      }),
      (rb.prototype._createSelector = function (t, i, r, e, n) {
        var o = this.getSelectorGroup()
        eb(t, function (t) {
          var e = t.type,
            n = new Zs({
              style: { x: 0, y: 0, align: 'center', verticalAlign: 'middle' },
              onclick: function () {
                r.dispatchAction({
                  type: 'all' === e ? 'legendAllSelect' : 'legendInverseSelect'
                })
              }
            })
          o.add(n),
            Ic(
              n,
              {
                normal: i.getModel('selectorLabel'),
                emphasis: i.getModel(['emphasis', 'selectorLabel'])
              },
              { defaultText: t.title }
            ),
            Ql(n)
        })
      }),
      (rb.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u, h) {
        var c = t.visualDrawType,
          p = r.get('itemWidth'),
          d = r.get('itemHeight'),
          f = r.isSelected(e),
          g = i.get('symbolRotate'),
          y = i.get('symbolKeepAspect'),
          m = i.get('icon'),
          a = (function (t, e, n, i, r, o, a) {
            function s (n, i) {
              'auto' === n.lineWidth && (n.lineWidth = 0 < i.lineWidth ? 2 : 0),
                eb(n, function (t, e) {
                  'inherit' === n[e] && (n[e] = i[e])
                })
            }
            var l = e.getModel('itemStyle'),
              u = l.getItemStyle(),
              t = 0 === t.lastIndexOf('empty', 0) ? 'fill' : 'stroke',
              l = l.getShallow('decal'),
              l =
                ((u.decal = l && 'inherit' !== l ? H0(l, a) : i.decal),
                'inherit' === u.fill && (u.fill = i[r]),
                'inherit' === u.stroke && (u.stroke = i[t]),
                'inherit' === u.opacity &&
                  (u.opacity = ('fill' === r ? i : n).opacity),
                s(u, i),
                e.getModel('lineStyle')),
              a = l.getLineStyle()
            s(a, n),
              'auto' === u.fill && (u.fill = i.fill),
              'auto' === u.stroke && (u.stroke = i.fill),
              'auto' === a.stroke && (a.stroke = i.fill),
              o ||
                ((r = e.get('inactiveBorderWidth')),
                (n = u[t]),
                (u.lineWidth =
                  'auto' === r ? (0 < i.lineWidth && n ? 2 : 0) : u.lineWidth),
                (u.fill = e.get('inactiveColor')),
                (u.stroke = e.get('inactiveBorderColor')),
                (a.stroke = l.get('inactiveColor')),
                (a.lineWidth = l.get('inactiveWidth')))
            return { itemStyle: u, lineStyle: a }
          })((l = m || l || 'roundRect'), i, a, s, c, f, h),
          s = new nb(),
          c = i.getModel('textStyle'),
          m =
            (!S(t.getLegendIcon) || (m && 'inherit' !== m)
              ? ((h =
                  'inherit' === m && t.getData().getVisual('symbol')
                    ? 'inherit' === g
                      ? t.getData().getVisual('symbolRotate')
                      : g
                    : 0),
                s.add(
                  ((m = {
                    itemWidth: p,
                    itemHeight: d,
                    icon: l,
                    iconRotate: h,
                    itemStyle: a.itemStyle,
                    lineStyle: a.lineStyle,
                    symbolKeepAspect: y
                  }),
                  (h = m.icon || 'roundRect'),
                  (v = p0(
                    h,
                    0,
                    0,
                    m.itemWidth,
                    m.itemHeight,
                    m.itemStyle.fill,
                    m.symbolKeepAspect
                  )).setStyle(m.itemStyle),
                  (v.rotation = ((m.iconRotate || 0) * Math.PI) / 180),
                  v.setOrigin([m.itemWidth / 2, m.itemHeight / 2]),
                  -1 < h.indexOf('empty') &&
                    ((v.style.stroke = v.style.fill),
                    (v.style.fill = '#fff'),
                    (v.style.lineWidth = 2)),
                  v)
                ))
              : s.add(
                  t.getLegendIcon({
                    itemWidth: p,
                    itemHeight: d,
                    icon: l,
                    iconRotate: g,
                    itemStyle: a.itemStyle,
                    lineStyle: a.lineStyle,
                    symbolKeepAspect: y
                  })
                ),
            'left' === o ? p + 5 : -5),
          h = o,
          v = r.get('formatter'),
          t = e,
          l =
            (H(v) && v
              ? (t = v.replace('{name}', null != e ? e : ''))
              : S(v) && (t = v(e)),
            f ? c.getTextColor() : i.get('inactiveColor')),
          g =
            (s.add(
              new Zs({
                style: kc(
                  c,
                  {
                    text: t,
                    x: m,
                    y: d / 2,
                    fill: l,
                    align: h,
                    verticalAlign: 'middle'
                  },
                  { inheritColor: l }
                )
              })
            ),
            new Us({ shape: s.getBoundingRect(), invisible: !0 })),
          a = i.getModel('tooltip')
        return (
          a.get('show') &&
            xc({
              el: g,
              componentModel: r,
              itemName: e,
              itemTooltipOption: a.option
            }),
          s.add(g),
          s.eachChild(function (t) {
            t.silent = !0
          }),
          (g.silent = !u),
          this.getContentGroup().add(s),
          Ql(s),
          (s.__legendDataIndex = n),
          s
        )
      }),
      (rb.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          h,
          c = this.getContentGroup(),
          p = this.getSelectorGroup(),
          n =
            (qp(t.get('orient'), c, t.get('itemGap'), n.width, n.height),
            c.getBoundingRect()),
          d = [-n.x, -n.y]
        return (
          p.markRedraw(),
          c.markRedraw(),
          r
            ? (qp('horizontal', p, t.get('selectorItemGap', !0)),
              (a = [-(r = p.getBoundingRect()).x, -r.y]),
              (s = t.get('selectorButtonGap', !0)),
              (l = 0 === (t = t.getOrient().index) ? 'width' : 'height'),
              (u = 0 === t ? 'height' : 'width'),
              (h = 0 === t ? 'y' : 'x'),
              'end' === o ? (a[t] += n[l] + s) : (d[t] += r[l] + s),
              (a[1 - t] += n[u] / 2 - r[u] / 2),
              (p.x = a[0]),
              (p.y = a[1]),
              (c.x = d[0]),
              (c.y = d[1]),
              ((o = { x: 0, y: 0 })[l] = n[l] + s + r[l]),
              (o[u] = Math.max(n[u], r[u])),
              (o[h] = Math.min(0, r[h] + a[1 - t])),
              o)
            : ((c.x = d[0]), (c.y = d[1]), this.group.getBoundingRect())
        )
      }),
      (rb.prototype.remove = function () {
        this.getContentGroup().removeAll(), (this._isFirstRender = !0)
      }),
      (rb.type = 'legend.plain'),
      rb)
  function rb () {
    var t = (null !== Jw && Jw.apply(this, arguments)) || this
    return (t.type = rb.type), (t.newlineDisabled = !1), t
  }
  function ob (t, e, n, i) {
    lb(t, e, n, i),
      n.dispatchAction({ type: 'legendToggleSelect', name: null != t ? t : e }),
      sb(t, e, n, i)
  }
  function ab (t) {
    for (
      var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length;
      i < r && !(e = n[i].states.emphasis);

    )
      i++
    return e && e.hoverLayer
  }
  function sb (t, e, n, i) {
    ab(n) ||
      n.dispatchAction({
        type: 'highlight',
        seriesName: t,
        name: e,
        excludeSeriesId: i
      })
  }
  function lb (t, e, n, i) {
    ab(n) ||
      n.dispatchAction({
        type: 'downplay',
        seriesName: t,
        name: e,
        excludeSeriesId: i
      })
  }
  function ub (t) {
    var n = t.findComponents({ mainType: 'legend' })
    n &&
      n.length &&
      t.filterSeries(function (t) {
        for (var e = 0; e < n.length; e++)
          if (!n[e].isSelected(t.name)) return !1
        return !0
      })
  }
  function hb (t, e, n) {
    var i,
      r = {},
      o = 'toggleSelected' === t
    return (
      n.eachComponent('legend', function (n) {
        o && null != i
          ? n[i ? 'select' : 'unSelect'](e.name)
          : 'allSelect' === t || 'inverseSelect' === t
          ? n[t]()
          : (n[t](e.name), (i = n.isSelected(e.name))),
          B(n.getData(), function (t) {
            var e,
              t = t.get('name')
            '\n' !== t &&
              '' !== t &&
              ((e = n.isSelected(t)),
              r.hasOwnProperty(t) ? (r[t] = r[t] && e) : (r[t] = e))
          })
      }),
      'allSelect' === t || 'inverseSelect' === t
        ? { selected: r }
        : { name: e.name, selected: r }
    )
  }
  function cb (t) {
    t.registerComponentModel($w),
      t.registerComponentView(ib),
      t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, ub),
      t.registerSubTypeDefaulter('legend', function () {
        return 'plain'
      }),
      (t = t).registerAction(
        'legendToggleSelect',
        'legendselectchanged',
        dt(hb, 'toggleSelected')
      ),
      t.registerAction(
        'legendAllSelect',
        'legendselectall',
        dt(hb, 'allSelect')
      ),
      t.registerAction(
        'legendInverseSelect',
        'legendinverseselect',
        dt(hb, 'inverseSelect')
      ),
      t.registerAction('legendSelect', 'legendselected', dt(hb, 'select')),
      t.registerAction('legendUnSelect', 'legendunselected', dt(hb, 'unSelect'))
  }
  u(fb, (pb = $w)),
    (fb.prototype.setScrollDataIndex = function (t) {
      this.option.scrollDataIndex = t
    }),
    (fb.prototype.init = function (t, e, n) {
      var i = $p(t)
      pb.prototype.init.call(this, t, e, n), gb(this, t, i)
    }),
    (fb.prototype.mergeOption = function (t, e) {
      pb.prototype.mergeOption.call(this, t, e), gb(this, this.option, t)
    }),
    (fb.type = 'legend.scroll'),
    (fb.defaultOption =
      ((vh = $w.defaultOption),
      (Iu = {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: 'end',
        pageFormatter: '{current}/{total}',
        pageIcons: {
          horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
          vertical: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']
        },
        pageIconColor: '#2f4554',
        pageIconInactiveColor: '#aaa',
        pageIconSize: 15,
        pageTextStyle: { color: '#333' },
        animationDurationUpdate: 800
      }),
      d(d({}, vh, !0), Iu, !0)))
  var pb,
    db = fb
  function fb () {
    var t = (null !== pb && pb.apply(this, arguments)) || this
    return (t.type = fb.type), t
  }
  function gb (t, e, n) {
    var i = [1, 1]
    ;(i[t.getOrient().index] = 0), Kp(e, n, { type: 'box', ignoreSize: !!i })
  }
  var yb,
    mb = no,
    vb = ['width', 'height'],
    _b = ['x', 'y'],
    xb =
      (u(wb, (yb = ib)),
      (wb.prototype.init = function () {
        yb.prototype.init.call(this),
          this.group.add((this._containerGroup = new mb())),
          this._containerGroup.add(this.getContentGroup()),
          this.group.add((this._controllerGroup = new mb()))
      }),
      (wb.prototype.resetInner = function () {
        yb.prototype.resetInner.call(this),
          this._controllerGroup.removeAll(),
          this._containerGroup.removeClipPath(),
          (this._containerGroup.__rectSize = null)
      }),
      (wb.prototype.renderInner = function (t, i, e, r, n, o, a) {
        var s = this,
          l =
            (yb.prototype.renderInner.call(this, t, i, e, r, n, o, a),
            this._controllerGroup),
          t = i.get('pageIconSize', !0),
          u = V(t) ? t : [t, t],
          e = (h('pagePrev', 0), i.getModel('pageTextStyle'))
        function h (t, e) {
          var n = t + 'DataIndex',
            e = vc(
              i.get('pageIcons', !0)[i.getOrient().name][e],
              { onclick: pt(s._pageGo, s, n, i, r) },
              { x: -u[0] / 2, y: -u[1] / 2, width: u[0], height: u[1] }
            )
          ;(e.name = t), l.add(e)
        }
        l.add(
          new Zs({
            name: 'pageText',
            style: {
              text: 'xx/xx',
              fill: e.getTextColor(),
              font: e.getFont(),
              verticalAlign: 'middle',
              align: 'center'
            },
            silent: !0
          })
        ),
          h('pageNext', 1)
      }),
      (wb.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a = this.getSelectorGroup(),
          s = t.getOrient().index,
          l = vb[s],
          u = _b[s],
          h = vb[1 - s],
          c = _b[1 - s],
          p =
            (r && qp('horizontal', a, t.get('selectorItemGap', !0)),
            t.get('selectorButtonGap', !0)),
          d = a.getBoundingRect(),
          f = [-d.x, -d.y],
          g = _(n),
          n =
            (r && (g[l] = n[l] - d[l] - p),
            this._layoutContentAndController(t, i, g, s, l, h, c, u))
        return (
          r &&
            ('end' === o
              ? (f[s] += n[l] + p)
              : ((t = d[l] + p), (f[s] -= t), (n[u] -= t)),
            (n[l] += d[l] + p),
            (f[1 - s] += n[c] + n[h] / 2 - d[h] / 2),
            (n[h] = Math.max(n[h], d[h])),
            (n[c] = Math.min(n[c], d[c] + f[1 - s])),
            (a.x = f[0]),
            (a.y = f[1]),
            a.markRedraw()),
          n
        )
      }),
      (wb.prototype._layoutContentAndController = function (
        t,
        e,
        n,
        i,
        r,
        o,
        a,
        s
      ) {
        var l = this.getContentGroup(),
          u = this._containerGroup,
          h = this._controllerGroup,
          c =
            (qp(
              t.get('orient'),
              l,
              t.get('itemGap'),
              i ? n.width : null,
              i ? null : n.height
            ),
            qp('horizontal', h, t.get('pageButtonItemGap', !0)),
            l.getBoundingRect()),
          p = h.getBoundingRect(),
          d = (this._showController = c[r] > n[r]),
          f = [-c.x, -c.y],
          e = (e || (f[i] = l[s]), [0, 0]),
          s = [-p.x, -p.y],
          g = N(t.get('pageButtonGap', !0), t.get('itemGap', !0)),
          f =
            (d &&
              ('end' === t.get('pageButtonPosition', !0)
                ? (s[i] += n[r] - p[r])
                : (e[i] += p[r] + g)),
            (s[1 - i] += c[o] / 2 - p[o] / 2),
            l.setPosition(f),
            u.setPosition(e),
            h.setPosition(s),
            { x: 0, y: 0 }),
          c =
            ((f[r] = (d ? n : c)[r]),
            (f[o] = Math.max(c[o], p[o])),
            (f[a] = Math.min(0, p[a] + s[1 - i])),
            (u.__rectSize = n[r]),
            d
              ? (((e = { x: 0, y: 0 })[r] = Math.max(n[r] - p[r] - g, 0)),
                (e[o] = f[o]),
                u.setClipPath(new Us({ shape: e })),
                (u.__rectSize = e[r]))
              : h.eachChild(function (t) {
                  t.attr({ invisible: !0, silent: !0 })
                }),
            this._getPageInfo(t))
        return (
          null != c.pageIndex &&
            Xh(
              l,
              { x: c.contentPosition[0], y: c.contentPosition[1] },
              d ? t : null
            ),
          this._updatePageInfoView(t, c),
          f
        )
      }),
      (wb.prototype._pageGo = function (t, e, n) {
        t = this._getPageInfo(e)[t]
        null != t &&
          n.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: t,
            legendId: e.id
          })
      }),
      (wb.prototype._updatePageInfoView = function (n, i) {
        var r = this._controllerGroup,
          t =
            (B(['pagePrev', 'pageNext'], function (t) {
              var e = null != i[t + 'DataIndex'],
                t = r.childOfName(t)
              t &&
                (t.setStyle(
                  'fill',
                  e
                    ? n.get('pageIconColor', !0)
                    : n.get('pageIconInactiveColor', !0)
                ),
                (t.cursor = e ? 'pointer' : 'default'))
            }),
            r.childOfName('pageText')),
          e = n.get('pageFormatter'),
          o = i.pageIndex,
          o = null != o ? o + 1 : 0,
          a = i.pageCount
        t &&
          e &&
          t.setStyle(
            'text',
            H(e)
              ? e
                  .replace('{current}', null == o ? '' : o + '')
                  .replace('{total}', null == a ? '' : a + '')
              : e({ current: o, total: a })
          )
      }),
      (wb.prototype._getPageInfo = function (t) {
        var e = t.get('scrollDataIndex', !0),
          n = this.getContentGroup(),
          i = this._containerGroup.__rectSize,
          t = t.getOrient().index,
          r = vb[t],
          o = _b[t],
          e = this._findTargetItemIndex(e),
          a = n.children(),
          s = a[e],
          l = a.length,
          u = l ? 1 : 0,
          h = {
            contentPosition: [n.x, n.y],
            pageCount: u,
            pageIndex: u - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null
          }
        if (s) {
          n = g(s)
          h.contentPosition[t] = -n.s
          for (var c = e + 1, p = n, d = n, f = null; c <= l; ++c)
            ((!(f = g(a[c])) && d.e > p.s + i) || (f && !y(f, p.s))) &&
              (p = d.i > p.i ? d : f) &&
              (null == h.pageNextDataIndex && (h.pageNextDataIndex = p.i),
              ++h.pageCount),
              (d = f)
          for (c = e - 1, d = p = n, f = null; -1 <= c; --c)
            ((f = g(a[c])) && y(d, f.s)) ||
              !(p.i < d.i) ||
              ((d = p),
              null == h.pagePrevDataIndex && (h.pagePrevDataIndex = p.i),
              ++h.pageCount,
              ++h.pageIndex),
              (p = f)
        }
        return h
        function g (t) {
          var e, n
          if (t)
            return {
              s: (n = (e = t.getBoundingRect())[o] + t[o]),
              e: n + e[r],
              i: t.__legendDataIndex
            }
        }
        function y (t, e) {
          return t.e >= e && t.s <= e + i
        }
      }),
      (wb.prototype._findTargetItemIndex = function (n) {
        return this._showController
          ? (this.getContentGroup().eachChild(function (t, e) {
              t = t.__legendDataIndex
              null == r && null != t && (r = e), t === n && (i = e)
            }),
            null != i ? i : r)
          : 0
        var i, r
      }),
      (wb.type = 'legend.scroll'),
      wb)
  function wb () {
    var t = (null !== yb && yb.apply(this, arguments)) || this
    return (
      (t.type = wb.type), (t.newlineDisabled = !0), (t._currentIndex = 0), t
    )
  }
  U_(function (t) {
    U_(cb),
      t.registerComponentModel(db),
      t.registerComponentView(xb),
      t.registerAction('legendScroll', 'legendscroll', function (t, e) {
        var n = t.scrollDataIndex
        null != n &&
          e.eachComponent(
            { mainType: 'legend', subType: 'scroll', query: t },
            function (t) {
              t.setScrollDataIndex(n)
            }
          )
      })
  })
  var bb = Yo(),
    Sb = _,
    Mb = pt
  function Tb () {
    ;(this._dragging = !1), (this.animationThreshold = 15)
  }
  function Cb (t, e, n, i) {
    !(function n (i, t) {
      {
        var r
        if (L(i) && L(t))
          return (
            (r = !0),
            B(t, function (t, e) {
              r = r && n(i[e], t)
            }),
            !!r
          )
      }
      return i === t
    })(bb(n).lastProp, i) &&
      ((bb(n).lastProp = i), e ? Xh(n, i, t) : (n.stopAnimation(), n.attr(i)))
  }
  function Ib (t, e) {
    t[e.get(['label', 'show']) ? 'show' : 'hide']()
  }
  function kb (t) {
    return { x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0 }
  }
  function Db (t, e, n) {
    var i = e.get('z'),
      r = e.get('zlevel')
    t &&
      t.traverse(function (t) {
        'group' !== t.type &&
          (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n))
      })
  }
  function Ab (t, e, n, i, r) {
    var o = Pb(n.get('value'), e.axis, e.ecModel, n.get('seriesDataIndices'), {
        precision: n.get(['label', 'precision']),
        formatter: n.get(['label', 'formatter'])
      }),
      n = n.getModel('label'),
      a = Np(n.get('padding') || 0),
      s = n.getFont(),
      l = Er(o, s),
      u = r.position,
      h = l.width + a[1] + a[3],
      l = l.height + a[0] + a[2],
      c = r.align,
      c =
        ('right' === c && (u[0] -= h),
        'center' === c && (u[0] -= h / 2),
        r.verticalAlign),
      i =
        ('bottom' === c && (u[1] -= l),
        'middle' === c && (u[1] -= l / 2),
        (r = u),
        (c = h),
        (h = l),
        (i = (l = i).getWidth()),
        (l = l.getHeight()),
        (r[0] = Math.min(r[0] + c, i) - c),
        (r[1] = Math.min(r[1] + h, l) - h),
        (r[0] = Math.max(r[0], 0)),
        (r[1] = Math.max(r[1], 0)),
        n.get('backgroundColor'))
    ;(i && 'auto' !== i) || (i = e.get(['axisLine', 'lineStyle', 'color'])),
      (t.label = {
        x: u[0],
        y: u[1],
        style: kc(n, {
          text: o,
          font: s,
          fill: n.getTextColor(),
          padding: a,
          backgroundColor: i
        }),
        z2: 10
      })
  }
  function Pb (t, e, n, i, r) {
    t = e.scale.parse(t)
    var o,
      a = e.scale.getLabel({ value: t }, { precision: r.precision }),
      r = r.formatter
    return (
      r &&
        ((o = {
          value: B_(e, { value: t }),
          axisDimension: e.dim,
          axisIndex: e.index,
          seriesData: []
        }),
        B(i, function (t) {
          var e = n.getSeriesByIndex(t.seriesIndex),
            t = t.dataIndexInside,
            e = e && e.getDataParams(t)
          e && o.seriesData.push(e)
        }),
        H(r) ? (a = r.replace('{value}', a)) : S(r) && (a = r(o))),
      a
    )
  }
  function Lb (t, e, n) {
    var i = Oe()
    return (
      Ee(i, i, n.rotation),
      ze(i, i, n.position),
      dc(
        [
          t.dataToCoord(e),
          (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)
        ],
        i
      )
    )
  }
  ;(Tb.prototype.render = function (t, e, n, i) {
    var r,
      o,
      a = e.get('value'),
      s = e.get('status')
    ;(this._axisModel = t),
      (this._axisPointerModel = e),
      (this._api = n),
      (!i && this._lastValue === a && this._lastStatus === s) ||
        ((this._lastValue = a),
        (this._lastStatus = s),
        (i = this._group),
        (r = this._handle),
        s && 'hide' !== s
          ? (i && i.show(),
            r && r.show(),
            this.makeElOption((s = {}), a, t, e, n),
            (o = s.graphicKey) !== this._lastGraphicKey && this.clear(n),
            (this._lastGraphicKey = o),
            (o = this._moveAnimation = this.determineAnimation(t, e)),
            i
              ? ((o = dt(Cb, e, o)),
                this.updatePointerEl(i, s, o),
                this.updateLabelEl(i, s, o, e))
              : ((i = this._group = new no()),
                this.createPointerEl(i, s, t, e),
                this.createLabelEl(i, s, t, e),
                n.getZr().add(i)),
            Db(i, e, !0),
            this._renderHandle(a))
          : (i && i.hide(), r && r.hide()))
  }),
    (Tb.prototype.remove = function (t) {
      this.clear(t)
    }),
    (Tb.prototype.dispose = function (t) {
      this.clear(t)
    }),
    (Tb.prototype.determineAnimation = function (t, e) {
      var n,
        i = e.get('animation'),
        r = t.axis,
        o = 'category' === r.type,
        e = e.get('snap')
      return (
        !(!e && !o) &&
        ('auto' === i || null == i
          ? ((n = this.animationThreshold),
            (o && r.getBandWidth() > n) ||
              (!!e &&
                ((o = ww(t).seriesDataCount),
                (e = r.getExtent()),
                Math.abs(e[0] - e[1]) / o > n)))
          : !0 === i)
      )
    }),
    (Tb.prototype.makeElOption = function (t, e, n, i, r) {}),
    (Tb.prototype.createPointerEl = function (t, e, n, i) {
      var r = e.pointer
      r && ((r = bb(t).pointerEl = new Sc[r.type](Sb(e.pointer))), t.add(r))
    }),
    (Tb.prototype.createLabelEl = function (t, e, n, i) {
      e.label && ((e = bb(t).labelEl = new Zs(Sb(e.label))), t.add(e), Ib(e, i))
    }),
    (Tb.prototype.updatePointerEl = function (t, e, n) {
      t = bb(t).pointerEl
      t &&
        e.pointer &&
        (t.setStyle(e.pointer.style), n(t, { shape: e.pointer.shape }))
    }),
    (Tb.prototype.updateLabelEl = function (t, e, n, i) {
      t = bb(t).labelEl
      t &&
        (t.setStyle(e.label.style),
        n(t, { x: e.label.x, y: e.label.y }),
        Ib(t, i))
    }),
    (Tb.prototype._renderHandle = function (t) {
      var e, n, i, r, o, a
      !this._dragging &&
        this.updateHandleTransform &&
        ((n = this._axisPointerModel),
        (i = this._api.getZr()),
        (r = this._handle),
        (o = n.getModel('handle')),
        (a = n.get('status')),
        o.get('show') && a && 'hide' !== a
          ? (this._handle ||
              ((e = !0),
              (r = this._handle =
                vc(o.get('icon'), {
                  cursor: 'move',
                  draggable: !0,
                  onmousemove: function (t) {
                    ke(t.event)
                  },
                  onmousedown: Mb(this._onHandleDragMove, this, 0, 0),
                  drift: Mb(this._onHandleDragMove, this),
                  ondragend: Mb(this._onHandleDragEnd, this)
                })),
              i.add(r)),
            Db(r, n, !1),
            r.setStyle(
              o.getItemStyle(null, [
                'color',
                'borderColor',
                'borderWidth',
                'opacity',
                'shadowColor',
                'shadowBlur',
                'shadowOffsetX',
                'shadowOffsetY'
              ])
            ),
            V((a = o.get('size'))) || (a = [a, a]),
            (r.scaleX = a[0] / 2),
            (r.scaleY = a[1] / 2),
            wy(
              this,
              '_doDispatchAxisPointer',
              o.get('throttle') || 0,
              'fixRate'
            ),
            this._moveHandleToValue(t, e))
          : (r && i.remove(r), (this._handle = null)))
    }),
    (Tb.prototype._moveHandleToValue = function (t, e) {
      Cb(
        this._axisPointerModel,
        !e && this._moveAnimation,
        this._handle,
        kb(this.getHandleTransform(t, this._axisModel, this._axisPointerModel))
      )
    }),
    (Tb.prototype._onHandleDragMove = function (t, e) {
      var n = this._handle
      n &&
        ((this._dragging = !0),
        (t = this.updateHandleTransform(
          kb(n),
          [t, e],
          this._axisModel,
          this._axisPointerModel
        )),
        (this._payloadInfo = t),
        n.stopAnimation(),
        n.attr(kb(t)),
        (bb(n).lastProp = null),
        this._doDispatchAxisPointer())
    }),
    (Tb.prototype._doDispatchAxisPointer = function () {
      var t, e
      this._handle &&
        ((t = this._payloadInfo),
        (e = this._axisModel),
        this._api.dispatchAction({
          type: 'updateAxisPointer',
          x: t.cursorPoint[0],
          y: t.cursorPoint[1],
          tooltipOption: t.tooltipOption,
          axesInfo: [{ axisDim: e.axis.dim, axisIndex: e.componentIndex }]
        }))
    }),
    (Tb.prototype._onHandleDragEnd = function () {
      var t
      ;(this._dragging = !1),
        this._handle &&
          ((t = this._axisPointerModel.get('value')),
          this._moveHandleToValue(t),
          this._api.dispatchAction({ type: 'hideTip' }))
    }),
    (Tb.prototype.clear = function (t) {
      ;(this._lastValue = null), (this._lastStatus = null)
      var t = t.getZr(),
        e = this._group,
        n = this._handle
      t &&
        e &&
        ((this._lastGraphicKey = null),
        e && t.remove(e),
        n && t.remove(n),
        (this._group = null),
        (this._handle = null),
        (this._payloadInfo = null)),
        by(this, '_doDispatchAxisPointer')
    }),
    (Tb.prototype.doClear = function () {}),
    (Tb.prototype.buildLabel = function (t, e, n) {
      return { x: t[(n = n || 0)], y: t[1 - n], width: e[n], height: e[1 - n] }
    })
  u(Nb, (Ob = Tb)),
    (Nb.prototype.makeElOption = function (t, e, n, i, r) {
      var o,
        a,
        s = n.axis,
        l = s.grid,
        u = i.get('type'),
        h = Bb(l, s).getOtherAxis(s).getGlobalExtent(),
        c = s.toGlobalCoord(s.dataToCoord(e, !0)),
        p =
          (u &&
            'none' !== u &&
            ((o = (a = i).get('type')),
            (a = a.getModel(o + 'Style')),
            'line' === o
              ? ((p = a.getLineStyle()).fill = null)
              : 'shadow' === o && ((p = a.getAreaStyle()).stroke = null),
            (o = p),
            ((a = zb[u](s, c, h)).style = o),
            (t.graphicKey = a.type),
            (t.pointer = a)),
          nw(l.model, n))
      ;(u = e),
        (s = t),
        (c = p),
        (h = n),
        (o = i),
        (a = r),
        (l = pw.innerTextLayout(c.rotation, 0, c.labelDirection)),
        (c.labelMargin = o.get(['label', 'margin'])),
        Ab(s, h, o, a, {
          position: Lb(h.axis, u, c),
          align: l.textAlign,
          verticalAlign: l.textVerticalAlign
        })
    }),
    (Nb.prototype.getHandleTransform = function (t, e, n) {
      var i = nw(e.axis.grid.model, e, { labelInside: !1 }),
        n = ((i.labelMargin = n.get(['handle', 'margin'])), Lb(e.axis, t, i))
      return {
        x: n[0],
        y: n[1],
        rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
      }
    }),
    (Nb.prototype.updateHandleTransform = function (t, e, n, i) {
      var n = n.axis,
        r = n.grid,
        o = n.getGlobalExtent(!0),
        r = Bb(r, n).getOtherAxis(n).getGlobalExtent(),
        n = 'x' === n.dim ? 0 : 1,
        a = [t.x, t.y],
        e =
          ((a[n] += e[n]),
          (a[n] = Math.min(o[1], a[n])),
          (a[n] = Math.max(o[0], a[n])),
          (r[1] + r[0]) / 2),
        o = [e, e]
      return (
        (o[n] = a[n]),
        {
          x: a[0],
          y: a[1],
          rotation: t.rotation,
          cursorPoint: o,
          tooltipOption: [{ verticalAlign: 'middle' }, { align: 'center' }][n]
        }
      )
    })
  var Ob,
    Rb = Nb
  function Nb () {
    return (null !== Ob && Ob.apply(this, arguments)) || this
  }
  function Bb (t, e) {
    var n = {}
    return (n[e.dim + 'AxisIndex'] = e.index), t.getCartesian(n)
  }
  var zb = {
    line: function (t, e, n) {
      return {
        type: 'Line',
        subPixelOptimize: !0,
        shape:
          ((i = [e, n[0]]),
          (e = [e, n[1]]),
          (n = Eb(t)),
          { x1: i[(n = n || 0)], y1: i[1 - n], x2: e[n], y2: e[1 - n] })
      }
      var i
    },
    shadow: function (t, e, n) {
      var i = Math.max(1, t.getBandWidth()),
        r = n[1] - n[0]
      return {
        type: 'Rect',
        shape:
          ((e = [e - i / 2, n[0]]),
          (n = [i, r]),
          (i = Eb(t)),
          { x: e[(i = i || 0)], y: e[1 - i], width: n[i], height: n[1 - i] })
      }
    }
  }
  function Eb (t) {
    return 'x' === t.dim ? 0 : 1
  }
  u(Hb, (Fb = g)),
    (Hb.type = 'axisPointer'),
    (Hb.defaultOption = {
      show: 'auto',
      z: 50,
      type: 'line',
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: { color: '#B9BEC9', width: 1, type: 'dashed' },
      shadowStyle: { color: 'rgba(210,219,238,0.2)' },
      label: {
        show: !0,
        formatter: null,
        precision: 'auto',
        margin: 3,
        color: '#fff',
        padding: [5, 7, 5, 7],
        backgroundColor: 'auto',
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
        size: 45,
        margin: 50,
        color: '#333',
        shadowBlur: 3,
        shadowColor: '#aaa',
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40
      }
    })
  var Fb,
    Vb = Hb
  function Hb () {
    var t = (null !== Fb && Fb.apply(this, arguments)) || this
    return (t.type = Hb.type), t
  }
  var Wb = Yo(),
    Gb = B
  function Ub (t, e, n) {
    var i, c, p
    function r (t, h) {
      c.on(t, function (e) {
        n = p
        var n,
          i,
          t,
          r,
          o,
          a,
          s,
          l = {
            dispatchAction: u,
            pendings: (i = { showTip: [], hideTip: [] })
          }
        function u (t) {
          var e = i[t.type]
          e ? e.push(t) : ((t.dispatchAction = u), n.dispatchAction(t))
        }
        Gb(Wb(c).records, function (t) {
          t && h(t, e, l.dispatchAction)
        }),
          (r = p),
          (a = (t = l.pendings).showTip.length),
          (s = t.hideTip.length),
          a ? (o = t.showTip[a - 1]) : s && (o = t.hideTip[s - 1]),
          o && ((o.dispatchAction = null), r.dispatchAction(o))
      })
    }
    b.node ||
      ((i = e.getZr()),
      Wb(i).records || (Wb(i).records = {}),
      (p = e),
      Wb((c = i)).initialized ||
        ((Wb(c).initialized = !0),
        r('click', dt(Yb, 'click')),
        r('mousemove', dt(Yb, 'mousemove')),
        r('globalout', Xb)),
      ((Wb(i).records[t] || (Wb(i).records[t] = {})).handler = n))
  }
  function Xb (t, e, n) {
    t.handler('leave', null, n)
  }
  function Yb (t, e, n, i) {
    e.handler(t, n, i)
  }
  function qb (t, e) {
    b.node ||
      ((e = e.getZr()), (Wb(e).records || {})[t] && (Wb(e).records[t] = null))
  }
  u(Kb, (jb = oy)),
    (Kb.prototype.render = function (t, e, n) {
      var e = e.getComponent('tooltip'),
        i = t.get('triggerOn') || (e && e.get('triggerOn')) || 'mousemove|click'
      Ub('axisPointer', n, function (t, e, n) {
        'none' !== i &&
          ('leave' === t || 0 <= i.indexOf(t)) &&
          n({
            type: 'updateAxisPointer',
            currTrigger: t,
            x: e && e.offsetX,
            y: e && e.offsetY
          })
      })
    }),
    (Kb.prototype.remove = function (t, e) {
      qb('axisPointer', e)
    }),
    (Kb.prototype.dispose = function (t, e) {
      qb('axisPointer', e)
    }),
    (Kb.type = 'axisPointer')
  var jb,
    Zb = Kb
  function Kb () {
    var t = (null !== jb && jb.apply(this, arguments)) || this
    return (t.type = Kb.type), t
  }
  function $b (t, e) {
    var n,
      i,
      r,
      o,
      a = [],
      s = t.seriesIndex
    return null == s ||
      !(e = e.getSeriesByIndex(s)) ||
      null == (s = Xo((n = e.getData()), t)) ||
      s < 0 ||
      V(s)
      ? { point: [] }
      : ((i = n.getItemGraphicEl(s)),
        (r = e.coordinateSystem),
        e.getTooltipPosition
          ? (a = e.getTooltipPosition(s) || [])
          : r && r.dataToPoint
          ? (a = t.isStacked
              ? ((e = r.getBaseAxis()),
                (t = r.getOtherAxis(e).dim),
                (e = e.dim),
                (t = 'x' === t || 'radius' === t ? 1 : 0),
                (e = n.mapDimension(e)),
                ((o = [])[t] = n.get(e, s)),
                (o[1 - t] = n.get(
                  n.getCalculationInfo('stackResultDimension'),
                  s
                )),
                r.dataToPoint(o) || [])
              : r.dataToPoint(
                  n.getValues(
                    F(r.dimensions, function (t) {
                      return n.mapDimension(t)
                    }),
                    s
                  )
                ) || [])
          : i &&
            ((e = i.getBoundingRect().clone()).applyTransform(i.transform),
            (a = [e.x + e.width / 2, e.y + e.height / 2])),
        { point: a, el: i })
  }
  var Qb = Yo()
  function Jb (t, e, n) {
    var o,
      a,
      i,
      s,
      l,
      r,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m = t.currTrigger,
      v = [t.x, t.y],
      _ = t,
      x = t.dispatchAction || pt(n.dispatchAction, n),
      w = e.getComponent('axisPointer').coordSysAxesInfo
    if (w)
      return (
        rS(v) &&
          (v = $b(
            { seriesIndex: _.seriesIndex, dataIndex: _.dataIndex },
            e
          ).point),
        (o = rS(v)),
        (a = _.axesInfo),
        (i = w.axesInfo),
        (s = 'leave' === m || rS(v)),
        (l = {}),
        (e = { list: [], map: {} }),
        (u = { showPointer: dt(eS, (r = {})), showTooltip: dt(nS, e) }),
        B(w.coordSysMap, function (t, e) {
          var r = o || t.containPoint(v)
          B(w.coordSysAxesInfo[e], function (t, e) {
            var n = t.axis,
              i = (function (t, e) {
                for (var n = 0; n < (t || []).length; n++) {
                  var i = t[n]
                  if (
                    e.axis.dim === i.axisDim &&
                    e.axis.model.componentIndex === i.axisIndex
                  )
                    return i
                }
              })(a, t)
            s ||
              !r ||
              (a && !i) ||
              (null !=
                (i = null != (i = i && i.value) || o ? i : n.pointToData(v)) &&
                tS(t, i, u, !1, l))
          })
        }),
        (h = {}),
        B(i, function (n, t) {
          var i = n.linkGroup
          i &&
            !r[t] &&
            B(i.axesInfo, function (t, e) {
              var e = r[e]
              t !== n &&
                e &&
                ((e = e.value),
                i.mapper && (e = n.axis.scale.parse(i.mapper(e, iS(t), iS(n)))),
                (h[n.key] = e))
            })
        }),
        B(h, function (t, e) {
          tS(i[e], t, u, !0, l)
        }),
        (g = r),
        (_ = i),
        (y = l.axesInfo = []),
        B(_, function (t, e) {
          var n = t.axisPointerModel.option,
            e = g[e]
          e
            ? (t.useHandle || (n.status = 'show'),
              (n.value = e.value),
              (n.seriesDataIndices = (e.payloadBatch || []).slice()))
            : t.useHandle || (n.status = 'hide'),
            'show' === n.status &&
              y.push({
                axisDim: t.axis.dim,
                axisIndex: t.axis.model.componentIndex,
                value: n.value
              })
        }),
        (m = e),
        (_ = t),
        (e = x),
        !rS((t = v)) && m.list.length
          ? ((x =
              ((m.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] ||
              {}),
            e({
              type: 'showTip',
              escapeConnect: !0,
              x: t[0],
              y: t[1],
              tooltipOption: _.tooltipOption,
              position: _.position,
              dataIndexInside: x.dataIndexInside,
              dataIndex: x.dataIndex,
              seriesIndex: x.seriesIndex,
              dataByCoordSys: m.list
            }))
          : e({ type: 'hideTip' }),
        (t = i),
        (x = (_ = n).getZr()),
        (m = 'axisPointerLastHighlights'),
        (c = Qb(x)[m] || {}),
        (p = Qb(x)[m] = {}),
        B(t, function (t, e) {
          var n = t.axisPointerModel.option
          'show' === n.status &&
            t.triggerEmphasis &&
            B(n.seriesDataIndices, function (t) {
              var e = t.seriesIndex + ' | ' + t.dataIndex
              p[e] = t
            })
        }),
        (d = []),
        (f = []),
        B(c, function (t, e) {
          p[e] || f.push(t)
        }),
        B(p, function (t, e) {
          c[e] || d.push(t)
        }),
        f.length &&
          _.dispatchAction({
            type: 'downplay',
            escapeConnect: !0,
            notBlur: !0,
            batch: f
          }),
        d.length &&
          _.dispatchAction({
            type: 'highlight',
            escapeConnect: !0,
            notBlur: !0,
            batch: d
          }),
        l
      )
  }
  function tS (t, e, n, i, r) {
    var o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g = t.axis
    !g.scale.isBlank() &&
      g.containData(e) &&
      (t.involveSeries
        ? ((l = e),
          (u = t.axis),
          (h = u.dim),
          (c = l),
          (p = []),
          (d = Number.MAX_VALUE),
          (f = -1),
          B(t.seriesModels, function (e, t) {
            var n,
              i = e.getData().mapDimensionsAll(h)
            if (e.getAxisTooltipData)
              var r = e.getAxisTooltipData(i, l, u),
                o = r.dataIndices,
                r = r.nestestValue
            else {
              if (
                !(o = e
                  .getData()
                  .indicesOfNearest(
                    i[0],
                    l,
                    'category' === u.type ? 0.5 : null
                  )).length
              )
                return
              r = e.getData().get(i[0], o[0])
            }
            null != r &&
              isFinite(r) &&
              ((i = l - r), (n = Math.abs(i)) <= d) &&
              ((n < d || (0 <= i && f < 0)) &&
                ((d = n), (f = i), (c = r), (p.length = 0)),
              B(o, function (t) {
                p.push({
                  seriesIndex: e.seriesIndex,
                  dataIndexInside: t,
                  dataIndex: e.getData().getRawIndex(t)
                })
              }))
          }),
          (s = (o = { payloadBatch: p, snapToValue: c }).snapToValue),
          (a = o.payloadBatch)[0] && null == r.seriesIndex && O(r, a[0]),
          !i && t.snap && g.containData(s) && null != s && (e = s),
          n.showPointer(t, e, a),
          n.showTooltip(t, o, s))
        : n.showPointer(t, e))
  }
  function eS (t, e, n, i) {
    t[e.key] = { value: n, payloadBatch: i }
  }
  function nS (t, e, n, i) {
    var r,
      o,
      n = n.payloadBatch,
      a = e.axis,
      s = a.model,
      l = e.axisPointerModel
    e.triggerTooltip &&
      n.length &&
      ((r = Sw((e = e.coordSys.model))),
      (o = t.map[r]) ||
        ((o = t.map[r] =
          {
            coordSysId: e.id,
            coordSysIndex: e.componentIndex,
            coordSysType: e.type,
            coordSysMainType: e.mainType,
            dataByAxis: []
          }),
        t.list.push(o)),
      o.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: s.componentIndex,
        axisType: s.type,
        axisId: s.id,
        value: i,
        valueLabelOpt: {
          precision: l.get(['label', 'precision']),
          formatter: l.get(['label', 'formatter'])
        },
        seriesDataIndices: n.slice()
      }))
  }
  function iS (t) {
    var e = t.axis.model,
      n = {},
      t = (n.axisDim = t.axis.dim)
    return (
      (n.axisIndex = n[t + 'AxisIndex'] = e.componentIndex),
      (n.axisName = n[t + 'AxisName'] = e.name),
      (n.axisId = n[t + 'AxisId'] = e.id),
      n
    )
  }
  function rS (t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
  }
  function oS (t) {
    Cw.registerAxisPointerClass('CartesianAxisPointer', Rb),
      t.registerComponentModel(Vb),
      t.registerComponentView(Zb),
      t.registerPreprocessor(function (t) {
        var e
        t &&
          ((t.axisPointer && 0 !== t.axisPointer.length) ||
            (t.axisPointer = {}),
          (e = t.axisPointer.link)) &&
          !V(e) &&
          (t.axisPointer.link = [e])
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent('axisPointer').coordSysAxesInfo = _w(t, e)
      }),
      t.registerAction(
        {
          type: 'updateAxisPointer',
          event: 'updateAxisPointer',
          update: ':updateAxisPointer'
        },
        Jb
      )
  }
  u(lS, (aS = g)),
    (lS.type = 'tooltip'),
    (lS.dependencies = ['axisPointer']),
    (lS.defaultOption = {
      z: 60,
      show: !0,
      showContent: !0,
      trigger: 'item',
      triggerOn: 'mousemove|click',
      alwaysShowContent: !1,
      displayMode: 'single',
      renderMode: 'auto',
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: '#fff',
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      borderRadius: 4,
      borderWidth: 1,
      padding: null,
      extraCssText: '',
      axisPointer: {
        type: 'line',
        axis: 'auto',
        animation: 'auto',
        animationDurationUpdate: 200,
        animationEasingUpdate: 'exponentialOut',
        crossStyle: { color: '#999', width: 1, type: 'dashed', textStyle: {} }
      },
      textStyle: { color: '#666', fontSize: 14 }
    })
  var aS,
    sS = lS
  function lS () {
    var t = (null !== aS && aS.apply(this, arguments)) || this
    return (t.type = lS.type), t
  }
  function uS (t) {
    var e = t.get('confine')
    return null != e ? e : 'richText' === t.get('renderMode')
  }
  function hS (t) {
    if (b.domSupported)
      for (
        var e = document.documentElement.style, n = 0, i = t.length;
        n < i;
        n++
      )
        if (t[n] in e) return t[n]
  }
  var cS = hS([
    'transform',
    'webkitTransform',
    'OTransform',
    'MozTransform',
    'msTransform'
  ])
  function pS (t, e) {
    if (!t) return e
    e = Rp(e, !0)
    var n = t.indexOf(e)
    return (t = -1 === n ? e : '-' + t.slice(0, n) + '-' + e).toLowerCase()
  }
  var dS = pS(
      hS([
        'webkitTransition',
        'transition',
        'OTransition',
        'MozTransition',
        'msTransition'
      ]),
      'transition'
    ),
    fS = pS(cS, 'transform'),
    gS =
      'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;' +
      (b.transform3dSupported ? 'will-change:transform;' : '')
  function yS (t, e, n) {
    var i,
      t = t.toFixed(0) + 'px',
      e = e.toFixed(0) + 'px'
    return b.transformSupported
      ? ((i =
          'translate' +
          ((i = b.transform3dSupported) ? '3d' : '') +
          '(' +
          t +
          ',' +
          e +
          (i ? ',0' : '') +
          ')'),
        n
          ? 'top:0;left:0;' + fS + ':' + i + ';'
          : [
              ['top', 0],
              ['left', 0],
              [cS, i]
            ])
      : n
      ? 'top:' + e + ';left:' + t + ';'
      : [
          ['top', e],
          ['left', t]
        ]
  }
  function mS (i, t, e) {
    var n,
      r,
      o = [],
      a = i.get('transitionDuration'),
      s = i.get('backgroundColor'),
      l = i.get('shadowBlur'),
      u = i.get('shadowColor'),
      h = i.get('shadowOffsetX'),
      c = i.get('shadowOffsetY'),
      p = i.getModel('textStyle'),
      d = Ug(i, 'html')
    return (
      o.push('box-shadow:' + (h + 'px ' + c + 'px ' + l + 'px ' + u)),
      t &&
        a &&
        o.push(
          ((u =
            'opacity' +
            (l =
              ' ' + (h = a) / 2 + 's ' + (c = 'cubic-bezier(0.23,1,0.32,1)')) +
            ',visibility' +
            l),
          e ||
            ((l = ' ' + h + 's ' + c),
            (u += b.transformSupported
              ? ',' + fS + l
              : ',left' + l + ',top' + l)),
          dS + ':' + u)
        ),
      s && o.push('background-color:' + s),
      B(['width', 'color', 'radius'], function (t) {
        var e = 'border-' + t,
          n = Rp(e),
          n = i.get(n)
        null != n && o.push(e + ':' + n + ('color' === t ? '' : 'px'))
      }),
      o.push(
        ((r = []),
        (t = (n = p).get('fontSize')),
        (a = n.getTextColor()) && r.push('color:' + a),
        r.push('font:' + n.getFont()),
        t && r.push('line-height:' + Math.round((3 * t) / 2) + 'px'),
        (a = n.get('textShadowColor')),
        (t = n.get('textShadowBlur') || 0),
        (e = n.get('textShadowOffsetX') || 0),
        (h = n.get('textShadowOffsetY') || 0),
        a &&
          t &&
          r.push('text-shadow:' + e + 'px ' + h + 'px ' + t + 'px ' + a),
        B(['decoration', 'align'], function (t) {
          var e = n.get(t)
          e && r.push('text-' + t + ':' + e)
        }),
        r.join(';'))
      ),
      null != d && o.push('padding:' + Np(d).join('px ') + 'px'),
      o.join(';') + ';'
    )
  }
  function vS (t, e, n, i, r) {
    var o,
      a,
      s = e && e.painter
    n
      ? (n = s && s.getViewportRoot()) &&
        ((o = t), (a = document.body), ye(ge, n, i, r, !0)) &&
        ye(o, a, ge[0], ge[1])
      : ((t[0] = i),
        (t[1] = r),
        (n = s && s.getViewportRootOffset()) &&
          ((t[0] += n.offsetLeft), (t[1] += n.offsetTop))),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight())
  }
  ;(xS.prototype.update = function (t) {
    var e = this._container,
      n =
        ((n = 'position'),
        (i =
          (i = e).currentStyle ||
          (document.defaultView && document.defaultView.getComputedStyle(i)))
          ? n
            ? i[n]
            : i
          : null),
      i = e.style,
      e =
        ('absolute' !== i.position &&
          'absolute' !== n &&
          (i.position = 'relative'),
        t.get('alwaysShowContent'))
    e && this._moveIfResized(),
      (this._alwaysShowContent = e),
      (this.el.className = t.get('className') || '')
  }),
    (xS.prototype.show = function (t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout)
      var n = this.el,
        i = n.style,
        r = this._styleCoord
      n.innerHTML
        ? (i.cssText =
            gS +
            mS(t, !this._firstShow, this._longHide) +
            yS(r[0], r[1], !0) +
            'border-color:' +
            Hp(e) +
            ';' +
            (t.get('extraCssText') || '') +
            ';pointer-events:' +
            (this._enterable ? 'auto' : 'none'))
        : (i.display = 'none'),
        (this._show = !0),
        (this._firstShow = !1),
        (this._longHide = !1)
    }),
    (xS.prototype.setContent = function (t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        h = this.el
      if (null != t) {
        var c = ''
        if (
          (H(r) &&
            'item' === n.get('trigger') &&
            !uS(n) &&
            ((n = n),
            (i = i),
            (c =
              H((r = r)) && 'inside' !== r
                ? ((o = n.get('backgroundColor')),
                  (n = n.get('borderWidth')),
                  (i = Hp(i)),
                  (r =
                    'left' === (r = r)
                      ? 'right'
                      : 'right' === r
                      ? 'left'
                      : 'top' === r
                      ? 'bottom'
                      : 'top'),
                  (p = Math.max(1.5 * Math.round(n), 6)),
                  (a = ''),
                  (s = fS + ':'),
                  -1 < I(['left', 'right'], r)
                    ? ((a += 'top:50%'),
                      (s +=
                        'translateY(-50%) rotate(' +
                        (u = 'left' == r ? -225 : -45) +
                        'deg)'))
                    : ((a += 'left:50%'),
                      (s +=
                        'translateX(-50%) rotate(' +
                        (u = 'top' == r ? 225 : 45) +
                        'deg)')),
                  (u = (u * Math.PI) / 180),
                  (u =
                    (l = p + n) * Math.abs(Math.cos(u)) +
                    l * Math.abs(Math.sin(u))),
                  (i = i + ' solid ' + n + 'px;'),
                  '<div style="' +
                    [
                      'position:absolute;width:' +
                        p +
                        'px;height:' +
                        p +
                        'px;z-index:-1;',
                      (a +=
                        ';' +
                        r +
                        ':-' +
                        Math.round(
                          100 *
                            ((u - Math.SQRT2 * n) / 2 +
                              Math.SQRT2 * n -
                              (u - l) / 2)
                        ) /
                          100 +
                        'px') +
                        ';' +
                        s +
                        ';',
                      'border-bottom:' + i,
                      'border-right:' + i,
                      'background-color:' + o + ';'
                    ].join('') +
                    '"></div>')
                : '')),
          H(t))
        )
          h.innerHTML = t + c
        else if (t) {
          ;(h.innerHTML = ''), V(t) || (t = [t])
          for (var p, d = 0; d < t.length; d++)
            mt(t[d]) && t[d].parentNode !== h && h.appendChild(t[d])
          c &&
            h.childNodes.length &&
            (((p = document.createElement('div')).innerHTML = c),
            h.appendChild(p))
        }
      } else h.innerHTML = ''
    }),
    (xS.prototype.setEnterable = function (t) {
      this._enterable = t
    }),
    (xS.prototype.getSize = function () {
      var t = this.el
      return [t.offsetWidth, t.offsetHeight]
    }),
    (xS.prototype.moveTo = function (t, e) {
      var n,
        i = this._styleCoord
      vS(i, this._zr, this._appendToBody, t, e),
        null != i[0] &&
          null != i[1] &&
          ((n = this.el.style),
          B(yS(i[0], i[1]), function (t) {
            n[t[0]] = t[1]
          }))
    }),
    (xS.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3]
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
    }),
    (xS.prototype.hide = function () {
      var t = this,
        e = this.el.style
      ;(e.visibility = 'hidden'),
        (e.opacity = '0'),
        b.transform3dSupported && (e.willChange = ''),
        (this._show = !1),
        (this._longHideTimeout = setTimeout(function () {
          return (t._longHide = !0)
        }, 500))
    }),
    (xS.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(pt(this.hide, this), t)))
          : this.hide())
    }),
    (xS.prototype.isShow = function () {
      return this._show
    }),
    (xS.prototype.dispose = function () {
      this.el.parentNode.removeChild(this.el)
    })
  var _S = xS
  function xS (t, e, n) {
    if (
      ((this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._enterable = !0),
      (this._alwaysShowContent = !1),
      (this._firstShow = !0),
      (this._longHide = !0),
      b.wxa)
    )
      return null
    var i = document.createElement('div'),
      r = ((i.domBelongToZr = !0), (this.el = i), (this._zr = e.getZr())),
      n = (this._appendToBody = n && n.appendToBody),
      o =
        (vS(this._styleCoord, r, n, e.getWidth() / 2, e.getHeight() / 2),
        (n ? document.body : t).appendChild(i),
        (this._container = t),
        this)
    ;(i.onmouseenter = function () {
      o._enterable && (clearTimeout(o._hideTimeout), (o._show = !0)),
        (o._inContent = !0)
    }),
      (i.onmousemove = function (t) {
        var e
        ;(t = t || window.event),
          o._enterable ||
            ((e = r.handler),
            Ie(r.painter.getViewportRoot(), t, !0),
            e.dispatch('mousemove', t))
      }),
      (i.onmouseleave = function () {
        ;(o._inContent = !1),
          o._enterable && o._show && o.hideLater(o._hideDelay)
      })
  }
  ;(bS.prototype.update = function (t) {
    t = t.get('alwaysShowContent')
    t && this._moveIfResized(), (this._alwaysShowContent = t)
  }),
    (bS.prototype.show = function () {
      this._hideTimeout && clearTimeout(this._hideTimeout),
        this.el.show(),
        (this._show = !0)
    }),
    (bS.prototype.setContent = function (t, e, n, i, r) {
      var o = this,
        a =
          (L(t) && f(''),
          this.el && this._zr.remove(this.el),
          n.getModel('textStyle')),
        s =
          ((this.el = new Zs({
            style: {
              rich: e.richTextStyles,
              text: t,
              lineHeight: 22,
              borderWidth: 1,
              borderColor: i,
              textShadowColor: a.get('textShadowColor'),
              fill: n.get(['textStyle', 'color']),
              padding: Ug(n, 'richText'),
              verticalAlign: 'top',
              align: 'left'
            },
            z: n.get('z')
          })),
          B(
            [
              'backgroundColor',
              'borderRadius',
              'shadowColor',
              'shadowBlur',
              'shadowOffsetX',
              'shadowOffsetY'
            ],
            function (t) {
              o.el.style[t] = n.get(t)
            }
          ),
          B(
            ['textShadowBlur', 'textShadowOffsetX', 'textShadowOffsetY'],
            function (t) {
              o.el.style[t] = a.get(t) || 0
            }
          ),
          this._zr.add(this.el),
          this)
      this.el.on('mouseover', function () {
        s._enterable && (clearTimeout(s._hideTimeout), (s._show = !0)),
          (s._inContent = !0)
      }),
        this.el.on('mouseout', function () {
          s._enterable && s._show && s.hideLater(s._hideDelay),
            (s._inContent = !1)
        })
    }),
    (bS.prototype.setEnterable = function (t) {
      this._enterable = t
    }),
    (bS.prototype.getSize = function () {
      var t = this.el,
        e = this.el.getBoundingRect(),
        t = MS(t.style)
      return [e.width + t.left + t.right, e.height + t.top + t.bottom]
    }),
    (bS.prototype.moveTo = function (t, e) {
      var n,
        i,
        r = this.el
      r &&
        (TS((i = this._styleCoord), this._zr, t, e),
        (t = i[0]),
        (e = i[1]),
        (n = SS((i = r.style).borderWidth || 0)),
        (i = MS(i)),
        (r.x = t + n + i.left),
        (r.y = e + n + i.top),
        r.markRedraw())
    }),
    (bS.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3]
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
    }),
    (bS.prototype.hide = function () {
      this.el && this.el.hide(), (this._show = !1)
    }),
    (bS.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(pt(this.hide, this), t)))
          : this.hide())
    }),
    (bS.prototype.isShow = function () {
      return this._show
    }),
    (bS.prototype.dispose = function () {
      this._zr.remove(this.el)
    })
  var wS = bS
  function bS (t) {
    ;(this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._alwaysShowContent = !1),
      (this._enterable = !0),
      (this._zr = t.getZr()),
      TS(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2)
  }
  function SS (t) {
    return Math.max(0, t)
  }
  function MS (t) {
    var e = SS(t.shadowBlur || 0),
      n = SS(t.shadowOffsetX || 0),
      t = SS(t.shadowOffsetY || 0)
    return {
      left: SS(e - n),
      right: SS(e + n),
      top: SS(e - t),
      bottom: SS(e + t)
    }
  }
  function TS (t, e, n, i) {
    ;(t[0] = n),
      (t[1] = i),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight())
  }
  var CS,
    IS = new Us({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
    kS =
      (u(DS, (CS = oy)),
      (DS.prototype.init = function (t, e) {
        var n
        !b.node &&
          e.getDom() &&
          ((t = t.getComponent('tooltip')),
          (n = this._renderMode =
            'auto' === (n = t.get('renderMode'))
              ? b.domSupported
                ? 'html'
                : 'richText'
              : n || 'html'),
          (this._tooltipContent =
            'richText' === n
              ? new wS(e)
              : new _S(e.getDom(), e, {
                  appendToBody: t.get('appendToBody', !0)
                })))
      }),
      (DS.prototype.render = function (t, e, n) {
        !b.node &&
          n.getDom() &&
          (this.group.removeAll(),
          (this._tooltipModel = t),
          (this._ecModel = e),
          (this._api = n),
          (e = this._tooltipContent).update(t),
          e.setEnterable(t.get('enterable')),
          this._initGlobalListener(),
          this._keepShow(),
          'richText' !== this._renderMode && t.get('transitionDuration')
            ? wy(this, '_updatePosition', 50, 'fixRate')
            : by(this, '_updatePosition'))
      }),
      (DS.prototype._initGlobalListener = function () {
        var i = this._tooltipModel.get('triggerOn')
        Ub(
          'itemTooltip',
          this._api,
          pt(function (t, e, n) {
            'none' !== i &&
              (0 <= i.indexOf(t)
                ? this._tryShow(e, n)
                : 'leave' === t && this._hide(n))
          }, this)
        )
      }),
      (DS.prototype._keepShow = function () {
        var t,
          e = this._tooltipModel,
          n = this._ecModel,
          i = this._api,
          r = e.get('triggerOn')
        null != this._lastX &&
          null != this._lastY &&
          'none' !== r &&
          'click' !== r &&
          ((t = this),
          clearTimeout(this._refreshUpdateTimeout),
          (this._refreshUpdateTimeout = setTimeout(function () {
            i.isDisposed() ||
              t.manuallyShowTip(e, n, i, {
                x: t._lastX,
                y: t._lastY,
                dataByCoordSys: t._lastDataByCoordSys
              })
          })))
      }),
      (DS.prototype.manuallyShowTip = function (t, e, n, i) {
        var r, o, a, s
        i.from !== this.uid &&
          !b.node &&
          n.getDom() &&
          ((r = PS(i, n)),
          (this._ticket = ''),
          (s = i.dataByCoordSys),
          (o = (function (n, t, e) {
            var i = Zo(n).queryOptionMap,
              r = i.keys()[0]
            if (r && 'series' !== r) {
              var o,
                t = $o(t, r, i.get(r), {
                  useDefault: !1,
                  enableAll: !1,
                  enableNone: !1
                }).models[0]
              if (t)
                return (
                  e.getViewOfComponentModel(t).group.traverse(function (t) {
                    var e = ul(t).tooltipConfig
                    if (e && e.name === n.name) return (o = t), !0
                  }),
                  o
                    ? {
                        componentMainType: r,
                        componentIndex: t.componentIndex,
                        el: o
                      }
                    : void 0
                )
            }
          })(i, e, n))
            ? ((a = o.el.getBoundingRect().clone()).applyTransform(
                o.el.transform
              ),
              this._tryShow(
                {
                  offsetX: a.x + a.width / 2,
                  offsetY: a.y + a.height / 2,
                  target: o.el,
                  position: i.position,
                  positionDefault: 'bottom'
                },
                r
              ))
            : i.tooltip && null != i.x && null != i.y
            ? (((a = IS).x = i.x),
              (a.y = i.y),
              a.update(),
              (ul(a).tooltipConfig = { name: null, option: i.tooltip }),
              this._tryShow({ offsetX: i.x, offsetY: i.y, target: a }, r))
            : s
            ? this._tryShow(
                {
                  offsetX: i.x,
                  offsetY: i.y,
                  position: i.position,
                  dataByCoordSys: s,
                  tooltipOption: i.tooltipOption
                },
                r
              )
            : null != i.seriesIndex
            ? this._manuallyAxisShowTip(t, e, n, i) ||
              ((a = (o = $b(i, e)).point[0]),
              (s = o.point[1]),
              null != a &&
                null != s &&
                this._tryShow(
                  {
                    offsetX: a,
                    offsetY: s,
                    target: o.el,
                    position: i.position,
                    positionDefault: 'bottom'
                  },
                  r
                ))
            : null != i.x &&
              null != i.y &&
              (n.dispatchAction({ type: 'updateAxisPointer', x: i.x, y: i.y }),
              this._tryShow(
                {
                  offsetX: i.x,
                  offsetY: i.y,
                  position: i.position,
                  target: n.getZr().findHover(i.x, i.y).target
                },
                r
              )))
      }),
      (DS.prototype.manuallyHideTip = function (t, e, n, i) {
        var r = this._tooltipContent
        this._tooltipModel && r.hideLater(this._tooltipModel.get('hideDelay')),
          (this._lastX = this._lastY = this._lastDataByCoordSys = null),
          i.from !== this.uid && this._hide(PS(i, n))
      }),
      (DS.prototype._manuallyAxisShowTip = function (t, e, n, i) {
        var r = i.seriesIndex,
          o = i.dataIndex,
          a = e.getComponent('axisPointer').coordSysAxesInfo
        if (null != r && null != o && null != a) {
          a = e.getSeriesByIndex(r)
          if (
            a &&
            'axis' ===
              AS(
                [
                  a.getData().getItemModel(o),
                  a,
                  (a.coordinateSystem || {}).model
                ],
                this._tooltipModel
              ).get('trigger')
          )
            return (
              n.dispatchAction({
                type: 'updateAxisPointer',
                seriesIndex: r,
                dataIndex: o,
                position: i.position
              }),
              !0
            )
        }
      }),
      (DS.prototype._tryShow = function (t, e) {
        var n,
          i,
          r,
          o = t.target
        this._tooltipModel &&
          ((this._lastX = t.offsetX),
          (this._lastY = t.offsetY),
          (n = t.dataByCoordSys) && n.length
            ? this._showAxisTooltip(n, t)
            : o
            ? (Jy(
                o,
                function (t) {
                  return null != ul(t).dataIndex
                    ? ((i = t), 1)
                    : null != ul(t).tooltipConfig && ((r = t), 1)
                },
                !(this._lastDataByCoordSys = null)
              ),
              i
                ? this._showSeriesItemTooltip(t, i, e)
                : r
                ? this._showComponentItemTooltip(t, r, e)
                : this._hide(e))
            : ((this._lastDataByCoordSys = null), this._hide(e)))
      }),
      (DS.prototype._showOrMove = function (t, e) {
        t = t.get('showDelay')
        ;(e = pt(e, this)),
          clearTimeout(this._showTimout),
          0 < t ? (this._showTimout = setTimeout(e, t)) : e()
      }),
      (DS.prototype._showAxisTooltip = function (t, e) {
        var u = this._ecModel,
          h = this._tooltipModel,
          n = [e.offsetX, e.offsetY],
          i = AS([e.tooltipOption], h),
          c = this._renderMode,
          p = [],
          d = Bg('section', { blocks: [], noHeader: !0 }),
          f = [],
          g = new Xg(),
          r =
            (B(t, function (t) {
              B(t.dataByAxis, function (r) {
                var o,
                  a,
                  s = u.getComponent(r.axisDim + 'Axis', r.axisIndex),
                  l = r.value
                s &&
                  null != l &&
                  ((o = Pb(l, s.axis, u, r.seriesDataIndices, r.valueLabelOpt)),
                  (a = Bg('section', {
                    header: o,
                    noHeader: !It(o),
                    sortBlocks: !0,
                    blocks: []
                  })),
                  d.blocks.push(a),
                  B(r.seriesDataIndices, function (t) {
                    var e,
                      n = u.getSeriesByIndex(t.seriesIndex),
                      t = t.dataIndexInside,
                      i = n.getDataParams(t)
                    i.dataIndex < 0 ||
                      ((i.axisDim = r.axisDim),
                      (i.axisIndex = r.axisIndex),
                      (i.axisType = r.axisType),
                      (i.axisId = r.axisId),
                      (i.axisValue = B_(s.axis, { value: l })),
                      (i.axisValueLabel = o),
                      (i.marker = g.makeTooltipMarker('item', Hp(i.color), c)),
                      (e = (t = Ff(n.formatTooltip(t, !0, null))).frag) &&
                        ((n = AS([n], h).get('valueFormatter')),
                        a.blocks.push(n ? O({ valueFormatter: n }, e) : e)),
                      t.text && f.push(t.text),
                      p.push(i))
                  }))
              })
            }),
            d.blocks.reverse(),
            f.reverse(),
            e.position),
          e = i.get('order'),
          e = Hg(d, g, c, e, u.get('useUTC'), i.get('textStyle')),
          e = (e && f.unshift(e), 'richText' === c ? '\n\n' : '<br/>'),
          o = f.join(e)
        this._showOrMove(i, function () {
          this._updateContentNotChangedOnAxis(t, p)
            ? this._updatePosition(i, r, n[0], n[1], this._tooltipContent, p)
            : this._showTooltipContent(
                i,
                o,
                p,
                Math.random() + '',
                n[0],
                n[1],
                r,
                null,
                g
              )
        })
      }),
      (DS.prototype._showSeriesItemTooltip = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = this._ecModel,
          e = ul(e),
          u = e.seriesIndex,
          h = l.getSeriesByIndex(u),
          c = e.dataModel || h,
          p = e.dataIndex,
          e = e.dataType,
          d = c.getData(e),
          f = this._renderMode,
          g = t.positionDefault,
          y = AS(
            [d.getItemModel(p), c, h && (h.coordinateSystem || {}).model],
            this._tooltipModel,
            g ? { position: g } : null
          ),
          h = y.get('trigger')
        ;(null != h && 'item' !== h) ||
          ((i = c.getDataParams(p, e)),
          (r = new Xg()),
          (i.marker = r.makeTooltipMarker('item', Hp(i.color), f)),
          (g = Ff(c.formatTooltip(p, !1, e))),
          (h = y.get('order')),
          (e = y.get('valueFormatter')),
          (o = g.frag),
          (a = o
            ? Hg(
                e ? O({ valueFormatter: e }, o) : o,
                r,
                f,
                h,
                l.get('useUTC'),
                y.get('textStyle')
              )
            : g.text),
          (s = 'item_' + c.name + '_' + p),
          this._showOrMove(y, function () {
            this._showTooltipContent(
              y,
              a,
              i,
              s,
              t.offsetX,
              t.offsetY,
              t.position,
              t.target,
              r
            )
          }),
          n({
            type: 'showTip',
            dataIndexInside: p,
            dataIndex: d.getRawIndex(p),
            seriesIndex: u,
            from: this.uid
          }))
      }),
      (DS.prototype._showComponentItemTooltip = function (e, n, t) {
        var i = ul(n),
          r = i.tooltipConfig.option || {},
          o = [(r = H(r) ? { content: r, formatter: r } : r)],
          i = this._ecModel.getComponent(i.componentMainType, i.componentIndex),
          i =
            (i && o.push(i),
            o.push({ formatter: r.content }),
            e.positionDefault),
          a = AS(o, this._tooltipModel, i ? { position: i } : null),
          s = a.get('content'),
          l = Math.random() + '',
          u = new Xg()
        this._showOrMove(a, function () {
          var t = _(a.get('formatterParams') || {})
          this._showTooltipContent(
            a,
            s,
            t,
            l,
            e.offsetX,
            e.offsetY,
            e.position,
            n,
            u
          )
        }),
          t({ type: 'showTip', from: this.uid })
      }),
      (DS.prototype._showTooltipContent = function (n, t, i, e, r, o, a, s, l) {
        var u, h, c, p, d
        ;(this._ticket = ''),
          n.get('showContent') &&
            n.get('show') &&
            ((u = this._tooltipContent).setEnterable(n.get('enterable')),
            (h = n.get('formatter')),
            (a = a || n.get('position')),
            (t = t),
            (c = this._getNearestPoint(
              [r, o],
              i,
              n.get('trigger'),
              n.get('borderColor')
            ).color),
            h &&
              (t = H(h)
                ? ((p = n.ecModel.get('useUTC')),
                  (t = h),
                  Fp(
                    (t =
                      (d = V(i) ? i[0] : i) &&
                      d.axisType &&
                      0 <= d.axisType.indexOf('time')
                        ? mp(d.axisValue, t, p)
                        : t),
                    i,
                    !0
                  ))
                : S(h)
                ? ((d = pt(function (t, e) {
                    t === this._ticket &&
                      (u.setContent(e, l, n, c, a),
                      this._updatePosition(n, a, r, o, u, i, s))
                  }, this)),
                  (this._ticket = e),
                  h(i, e, d))
                : h),
            u.setContent(t, l, n, c, a),
            u.show(n, c),
            this._updatePosition(n, a, r, o, u, i, s))
      }),
      (DS.prototype._getNearestPoint = function (t, e, n, i) {
        return 'axis' === n || V(e)
          ? { color: i || ('html' === this._renderMode ? '#fff' : 'none') }
          : V(e)
          ? void 0
          : { color: i || e.color || e.borderColor }
      }),
      (DS.prototype._updatePosition = function (t, e, n, i, r, o, a) {
        var s,
          l,
          u,
          h,
          c = this._api.getWidth(),
          p = this._api.getHeight(),
          d = ((e = e || t.get('position')), r.getSize()),
          f = t.get('align'),
          g = t.get('verticalAlign'),
          y = a && a.getBoundingRect().clone()
        a && y.applyTransform(a.transform),
          V(
            (e = S(e)
              ? e([n, i], o, r.el, y, {
                  viewSize: [c, p],
                  contentSize: d.slice()
                })
              : e)
          )
            ? ((n = fo(e[0], c)), (i = fo(e[1], p)))
            : L(e)
            ? (((o = e).width = d[0]),
              (o.height = d[1]),
              (n = (o = jp(o, { width: c, height: p })).x),
              (i = o.y),
              (g = f = null))
            : (i =
                ((n = (s =
                  H(e) && a
                    ? (function (t, e, n, i) {
                        var r = n[0],
                          o = n[1],
                          a = Math.ceil(Math.SQRT2 * i) + 8,
                          s = 0,
                          l = 0,
                          u = e.width,
                          h = e.height
                        switch (t) {
                          case 'inside':
                            ;(s = e.x + u / 2 - r / 2),
                              (l = e.y + h / 2 - o / 2)
                            break
                          case 'top':
                            ;(s = e.x + u / 2 - r / 2), (l = e.y - o - a)
                            break
                          case 'bottom':
                            ;(s = e.x + u / 2 - r / 2), (l = e.y + h + a)
                            break
                          case 'left':
                            ;(s = e.x - r - a), (l = e.y + h / 2 - o / 2)
                            break
                          case 'right':
                            ;(s = e.x + u + a), (l = e.y + h / 2 - o / 2)
                        }
                        return [s, l]
                      })(e, y, d, t.get('borderWidth'))
                    : ((o = n),
                      (a = i),
                      (e = c),
                      (y = p),
                      (l = f ? null : 20),
                      (u = g ? null : 20),
                      (h = (h = r).getSize()),
                      (s = h[0]),
                      (h = h[1]),
                      null != l &&
                        (e < o + s + l + 2 ? (o -= s + l) : (o += l)),
                      null != u && (y < a + h + u ? (a -= h + u) : (a += u)),
                      [o, a]))[0]),
                s[1])),
          f && (n -= LS(f) ? d[0] / 2 : 'right' === f ? d[0] : 0),
          g && (i -= LS(g) ? d[1] / 2 : 'bottom' === g ? d[1] : 0),
          uS(t) &&
            ((e = n),
            (l = i),
            (y = c),
            (h = p),
            (u = (u = r).getSize()),
            (o = u[0]),
            (u = u[1]),
            (e = Math.min(e + o, y) - o),
            (l = Math.min(l + u, h) - u),
            (n = (s = [(e = Math.max(e, 0)), (l = Math.max(l, 0))])[0]),
            (i = s[1])),
          r.moveTo(n, i)
      }),
      (DS.prototype._updateContentNotChangedOnAxis = function (n, o) {
        var t = this._lastDataByCoordSys,
          a = this._cbParamsList,
          s = !!t && t.length === n.length
        return (
          s &&
            B(t, function (t, e) {
              var t = t.dataByAxis || [],
                r = (n[e] || {}).dataByAxis || []
              ;(s = s && t.length === r.length) &&
                B(t, function (t, e) {
                  var e = r[e] || {},
                    n = t.seriesDataIndices || [],
                    i = e.seriesDataIndices || []
                  ;(s =
                    s &&
                    t.value === e.value &&
                    t.axisType === e.axisType &&
                    t.axisId === e.axisId &&
                    n.length === i.length) &&
                    B(n, function (t, e) {
                      e = i[e]
                      s =
                        s &&
                        t.seriesIndex === e.seriesIndex &&
                        t.dataIndex === e.dataIndex
                    }),
                    a &&
                      B(t.seriesDataIndices, function (t) {
                        var t = t.seriesIndex,
                          e = o[t],
                          t = a[t]
                        e && t && t.data !== e.data && (s = !1)
                      })
                })
            }),
          (this._lastDataByCoordSys = n),
          (this._cbParamsList = o),
          !!s
        )
      }),
      (DS.prototype._hide = function (t) {
        ;(this._lastDataByCoordSys = null),
          t({ type: 'hideTip', from: this.uid })
      }),
      (DS.prototype.dispose = function (t, e) {
        !b.node &&
          e.getDom() &&
          (by(this, '_updatePosition'),
          this._tooltipContent.dispose(),
          qb('itemTooltip', e))
      }),
      (DS.type = 'tooltip'),
      DS)
  function DS () {
    var t = (null !== CS && CS.apply(this, arguments)) || this
    return (t.type = DS.type), t
  }
  function AS (t, e, n) {
    for (
      var i = e.ecModel,
        r = n ? ((r = new Zc(n, i, i)), new Zc(e.option, r, i)) : e,
        o = t.length - 1;
      0 <= o;
      o--
    ) {
      var a = t[o]
      a &&
        (a = H((a = a instanceof Zc ? a.get('tooltip', !0) : a))
          ? { formatter: a }
          : a) &&
        (r = new Zc(a, r, i))
    }
    return r
  }
  function PS (t, e) {
    return t.dispatchAction || pt(e.dispatchAction, e)
  }
  function LS (t) {
    return 'center' === t || 'middle' === t
  }
  U_(function (t) {
    U_(oS),
      t.registerComponentModel(sS),
      t.registerComponentView(kS),
      t.registerAction(
        {
          type: 'showTip',
          event: 'showTip',
          update: 'tooltip:manuallyShowTip'
        },
        Vt
      ),
      t.registerAction(
        {
          type: 'hideTip',
          event: 'hideTip',
          update: 'tooltip:manuallyHideTip'
        },
        Vt
      )
  }),
    U_(px)
  var OS = {
      value: 'eq',
      '<': 'lt',
      '<=': 'lte',
      '>': 'gt',
      '>=': 'gte',
      '=': 'eq',
      '!=': 'ne',
      '<>': 'ne'
    },
    RS =
      ((XS.prototype.evaluate = function (t) {
        var e = typeof t
        return H(e)
          ? this._condVal.test(t)
          : !!W(e) && this._condVal.test(t + '')
      }),
      XS),
    NS =
      ((US.prototype.evaluate = function () {
        return this.value
      }),
      US),
    BS =
      ((GS.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (!t[e].evaluate()) return !1
        return !0
      }),
      GS),
    zS =
      ((WS.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (t[e].evaluate()) return !0
        return !1
      }),
      WS),
    ES =
      ((HS.prototype.evaluate = function () {
        return !this.child.evaluate()
      }),
      HS),
    FS =
      ((VS.prototype.evaluate = function () {
        for (
          var t = !!this.valueParser,
            e = (0, this.getValue)(this.valueGetterParam),
            n = t ? this.valueParser(e) : null,
            i = 0;
          i < this.subCondList.length;
          i++
        )
          if (!this.subCondList[i].evaluate(t ? n : e)) return !1
        return !0
      }),
      VS)
  function VS () {}
  function HS () {}
  function WS () {}
  function GS () {}
  function US () {}
  function XS (t) {
    null == (this._condVal = H(t) ? new RegExp(t) : xt(t) ? t : null) && f('')
  }
  function YS (t, e) {
    var n
    if (!0 === t || !1 === t) return ((n = new NS()).value = t), n
    {
      if ((jS(t) || f(''), t.and)) return qS('and', t, e)
      if (t.or) return qS('or', t, e)
      if (t.not)
        (n = e),
          jS((o = (o = t).not)) || f(''),
          ((l = new ES()).child = YS(o, n)),
          l.child || f('')
      else {
        for (
          var i = t,
            r = e,
            o = r.prepareGetValue(i),
            a = [],
            s = R(i),
            l = i.parser,
            u = l ? tg(l) : null,
            h = 0;
          h < s.length;
          h++
        ) {
          var c,
            p = s[h]
          'parser' === p ||
            r.valueGetterAttrMap.get(p) ||
            ((c = Ft(OS, p) ? OS[p] : p),
            (p = i[p]),
            (p = u ? u(p) : p),
            (c =
              (function (t, e) {
                return 'eq' === t || 'ne' === t
                  ? new ag('eq' === t, e)
                  : Ft(eg, t)
                  ? new ng(t, e)
                  : null
              })(c, p) ||
              ('reg' === c && new RS(p))) || f(''),
            a.push(c))
        }
        a.length || f(''),
          ((l = new FS()).valueGetterParam = o),
          (l.valueParser = u),
          (l.getValue = r.getValue),
          (l.subCondList = a)
      }
      return l
    }
  }
  function qS (t, e, n) {
    ;(e = e[t]),
      V(e) || f(''),
      e.length || f(''),
      (t = new ('and' === t ? BS : zS)())
    return (
      (t.children = F(e, function (t) {
        return YS(t, n)
      })),
      t.children.length || f(''),
      t
    )
  }
  function jS (t) {
    return L(t) && !ut(t)
  }
  KS.prototype.evaluate = function () {
    return this._cond.evaluate()
  }
  var ZS = KS
  function KS (t, e) {
    this._cond = YS(t, e)
  }
  var $S = {
      type: 'echarts:filter',
      transform: function (t) {
        for (
          var e,
            n,
            i = t.upstream,
            r =
              ((t = t.config),
              (n = {
                valueGetterAttrMap: z({ dimension: !0 }),
                prepareGetValue: function (t) {
                  var e = t.dimension,
                    t = (Ft(t, 'dimension') || f(''), i.getDimensionInfo(e))
                  return t || f(''), { dimIdx: t.index }
                },
                getValue: function (t) {
                  return i.retrieveValueFromItem(e, t.dimIdx)
                }
              }),
              new ZS(t, n)),
            o = [],
            a = 0,
            s = i.count();
          a < s;
          a++
        )
          (e = i.getRawDataItem(a)), r.evaluate() && o.push(e)
        return { data: o }
      }
    },
    QS = {
      type: 'echarts:sort',
      transform: function (t) {
        var a = t.upstream,
          t = t.config,
          t = Ro(t),
          s = (t.length || f(''), []),
          t =
            (B(t, function (t) {
              var e = t.dimension,
                n = t.order,
                i = t.parser,
                t = t.incomparable,
                e =
                  (null == e && f(''),
                  'asc' !== n && 'desc' !== n && f(''),
                  t && 'min' !== t && 'max' !== t && f(''),
                  'asc' !== n && 'desc' !== n && f(''),
                  a.getDimensionInfo(e)),
                r = (e || f(''), i ? tg(i) : null)
              i && !r && f(''),
                s.push({ dimIdx: e.index, parser: r, comparator: new ig(n, t) })
            }),
            a.sourceFormat)
        t !== ld && t !== ud && f('')
        for (var e = [], n = 0, i = a.count(); n < i; n++)
          e.push(a.getRawDataItem(n))
        return (
          e.sort(function (t, e) {
            for (var n = 0; n < s.length; n++) {
              var i = s[n],
                r = a.retrieveValueFromItem(t, i.dimIdx),
                o = a.retrieveValueFromItem(e, i.dimIdx),
                i =
                  (i.parser && ((r = i.parser(r)), (o = i.parser(o))),
                  i.comparator.evaluate(r, o))
              if (0 !== i) return i
            }
            return 0
          }),
          { data: e }
        )
      }
    }
  U_(function (t) {
    t.registerTransform($S), t.registerTransform(QS)
  })
  var JS = Math.sin,
    tM = Math.cos,
    eM = Math.PI,
    nM = 2 * Math.PI,
    iM = 180 / eM,
    rM =
      ((oM.prototype.reset = function (t) {
        ;(this._start = !0),
          (this._d = []),
          (this._str = ''),
          (this._p = Math.pow(10, t || 4))
      }),
      (oM.prototype.moveTo = function (t, e) {
        this._add('M', t, e)
      }),
      (oM.prototype.lineTo = function (t, e) {
        this._add('L', t, e)
      }),
      (oM.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
        this._add('C', t, e, n, i, r, o)
      }),
      (oM.prototype.quadraticCurveTo = function (t, e, n, i) {
        this._add('Q', t, e, n, i)
      }),
      (oM.prototype.arc = function (t, e, n, i, r, o) {
        this.ellipse(t, e, n, n, 0, i, r, o)
      }),
      (oM.prototype.ellipse = function (t, e, n, i, r, o, a, s) {
        var l,
          u = a - o,
          s = !s,
          h = Math.abs(u),
          c = Ti(h - nM) || (s ? nM <= u : nM <= -u),
          h = !!c || (!Ti(h) && eM <= (0 < u ? u % nM : (u % nM) + nM) == !!s),
          u = t + n * tM(o),
          p = e + i * JS(o),
          r = (this._start && this._add('M', u, p), Math.round(r * iM))
        c
          ? ((c = 1 / this._p),
            this._add(
              'A',
              n,
              i,
              r,
              1,
              +s,
              t + n * tM(o + (l = (s ? 1 : -1) * (nM - c))),
              e + i * JS(o + l)
            ),
            0.01 < c && this._add('A', n, i, r, 0, +s, u, p))
          : ((o = t + n * tM(a)),
            (l = e + i * JS(a)),
            this._add('A', n, i, r, +h, +s, o, l))
      }),
      (oM.prototype.rect = function (t, e, n, i) {
        this._add('M', t, e),
          this._add('l', n, 0),
          this._add('l', 0, i),
          this._add('l', -n, 0),
          this._add('Z')
      }),
      (oM.prototype.closePath = function () {
        0 < this._d.length && this._add('Z')
      }),
      (oM.prototype._add = function (t, e, n, i, r, o, a, s, l) {
        for (var u = [], h = this._p, c = 1; c < arguments.length; c++) {
          var p = arguments[c]
          if (isNaN(p)) return void (this._invalid = !0)
          u.push(Math.round(p * h) / h)
        }
        this._d.push(t + u.join(' ')), (this._start = 'Z' === t)
      }),
      (oM.prototype.generateStr = function () {
        ;(this._str = this._invalid ? '' : this._d.join('')), (this._d = [])
      }),
      (oM.prototype.getStr = function () {
        return this._str
      }),
      oM)
  function oM () {}
  var aM = 'none',
    sM = Math.round
  var lM = ['lineCap', 'miterLimit', 'lineJoin'],
    uM = F(lM, function (t) {
      return 'stroke-' + t.toLowerCase()
    })
  function hM (t, e, n, i) {
    var r = null == e.opacity ? 1 : e.opacity
    if (n instanceof Ns) t('opacity', r)
    else if (
      (null != (o = (o = e).fill) && o !== aM
        ? (t('fill', (o = Mi(e.fill)).color),
          (o =
            null != e.fillOpacity
              ? e.fillOpacity * o.opacity * r
              : o.opacity * r),
          (i || o < 1) && t('fill-opacity', o))
        : t('fill', aM),
      null != (o = (o = e).stroke) && o !== aM)
    ) {
      var o = Mi(e.stroke),
        a = (t('stroke', o.color), e.strokeNoScale ? n.getLineScale() : 1),
        a = a ? (e.lineWidth || 0) / a : 0,
        o =
          null != e.strokeOpacity
            ? e.strokeOpacity * o.opacity * r
            : o.opacity * r,
        r = e.strokeFirst
      ;(!i && 1 == a) || t('stroke-width', a),
        (i || r) && t('paint-order', r ? 'stroke' : 'fill'),
        (i || o < 1) && t('stroke-opacity', o),
        e.lineDash
          ? ((r = (a = m0(n))[0]),
            (o = a[1]),
            r &&
              ((o = sM(o || 0)), t('stroke-dasharray', r.join(',')), o || i) &&
              t('stroke-dashoffset', o))
          : i && t('stroke-dasharray', aM)
      for (var s = 0; s < lM.length; s++) {
        var l = lM[s]
        ;(i || e[l] !== Ms[l]) && (l = e[l] || Ms[l]) && t(uM[s], l)
      }
    } else i && t('stroke', aM)
  }
  var cM = 'http://www.w3.org/2000/svg',
    pM = 'http://www.w3.org/1999/xlink',
    dM = 'http://www.w3.org/2000/xmlns/',
    fM = 'http://www.w3.org/XML/1998/namespace'
  function gM (t) {
    return document.createElementNS(cM, t)
  }
  function yM (t, e, n, i, r) {
    return { tag: t, attrs: n || {}, children: i, text: r, key: e }
  }
  function mM (t, e) {
    var o = (e = e || {}).newline ? '\n' : ''
    return (function t (e) {
      var n = e.children,
        i = e.tag,
        r = e.attrs,
        e = e.text
      return (
        (function (t, e) {
          var n = []
          if (e)
            for (var i in e) {
              var r = e[i]
              !1 !== r &&
                (!0 !== r && null != r && (i += '="' + r + '"'), n.push(i))
            }
          return '<' + t + ' ' + n.join(' ') + '>'
        })(i, r) +
        ('style' !== i ? xe(e) : e || '') +
        (n ? o + F(n, t).join(o) + o : '') +
        '</' +
        i +
        '>'
      )
    })(t)
  }
  function vM (t) {
    return {
      zrId: t,
      shadowCache: {},
      patternCache: {},
      gradientCache: {},
      clipPathCache: {},
      defs: {},
      cssNodes: {},
      cssAnims: {},
      cssClassIdx: 0,
      cssAnimIdx: 0,
      shadowIdx: 0,
      gradientIdx: 0,
      patternIdx: 0,
      clipPathIdx: 0
    }
  }
  function _M (t, e, n, i) {
    return yM(
      'svg',
      'root',
      {
        width: t,
        height: e,
        xmlns: cM,
        'xmlns:xlink': pM,
        version: '1.1',
        baseProfile: 'full',
        viewBox: !!i && '0 0 ' + t + ' ' + e
      },
      n
    )
  }
  var xM = {
      cubicIn: '0.32,0,0.67,0',
      cubicOut: '0.33,1,0.68,1',
      cubicInOut: '0.65,0,0.35,1',
      quadraticIn: '0.11,0,0.5,0',
      quadraticOut: '0.5,1,0.89,1',
      quadraticInOut: '0.45,0,0.55,1',
      quarticIn: '0.5,0,0.75,0',
      quarticOut: '0.25,1,0.5,1',
      quarticInOut: '0.76,0,0.24,1',
      quinticIn: '0.64,0,0.78,0',
      quinticOut: '0.22,1,0.36,1',
      quinticInOut: '0.83,0,0.17,1',
      sinusoidalIn: '0.12,0,0.39,0',
      sinusoidalOut: '0.61,1,0.88,1',
      sinusoidalInOut: '0.37,0,0.63,1',
      exponentialIn: '0.7,0,0.84,0',
      exponentialOut: '0.16,1,0.3,1',
      exponentialInOut: '0.87,0,0.13,1',
      circularIn: '0.55,0,1,0.45',
      circularOut: '0,0.55,0.45,1',
      circularInOut: '0.85,0,0.15,1'
    },
    wM = 'transform-origin'
  var bM = {
    fill: 'fill',
    opacity: 'opacity',
    lineWidth: 'stroke-width',
    lineDashOffset: 'stroke-dashoffset'
  }
  function SM (t, e) {
    var n = e.zrId + '-ani-' + e.cssAnimIdx++
    return (e.cssAnims[n] = t), n
  }
  function MM (t) {
    return H(t) ? (xM[t] ? 'cubic-bezier(' + xM[t] + ')' : Zn(t) ? t : '') : ''
  }
  function TM (D, A, P, L) {
    var t = D.animators,
      e = t.length,
      n = []
    if (D instanceof Th) {
      if (
        (r = (function (t, e, u) {
          var h,
            c,
            t = t.shape.paths,
            p = {}
          if (
            (B(t, function (t) {
              var e = vM(u.zrId),
                t = ((e.animation = !0), TM(t, {}, e, !0), e.cssAnims),
                n = e.cssNodes,
                e = R(t),
                i = e.length
              if (i) {
                var r,
                  o,
                  a = t[(c = e[i - 1])]
                for (r in a) {
                  var s = a[r]
                  ;(p[r] = p[r] || { d: '' }), (p[r].d += s.d || '')
                }
                for (o in n) {
                  var l = n[o].animation
                  0 <= l.indexOf(c) && (h = l)
                }
              }
            }),
            h)
          )
            return (e.d = !1), (t = SM(p, u)), h.replace(c, t)
        })(D, A, P))
      )
        n.push(r)
      else if (!e) return
    } else if (!e) return
    for (var i, r, o, a = {}, s = 0; s < e; s++) {
      var l = t[s],
        u = [l.getMaxTime() / 1e3 + 's'],
        h = MM(l.getClip().easing),
        c = l.getDelay(),
        h =
          (u.push(h || 'linear'),
          c && u.push(c / 1e3 + 's'),
          l.getLoop() && u.push('infinite'),
          u.join(' '))
      ;(a[h] = a[h] || [h, []]), a[h][1].push(l)
    }
    function p (t) {
      var e,
        n = t[1],
        i = n.length,
        r = {},
        o = {},
        a = {},
        f = 'animation-timing-function'
      function s (t, e, n) {
        for (
          var i = t.getTracks(), r = t.getMaxTime(), o = 0;
          o < i.length;
          o++
        ) {
          var a = i[o]
          if (a.needsAnimate()) {
            var s = a.keyframes,
              l = a.propName
            if ((l = n ? n(l) : l))
              for (var u = 0; u < s.length; u++) {
                var h = s[u],
                  c = Math.round((h.time / r) * 100) + '%',
                  p = MM(h.easing),
                  d = h.rawValue
                ;(H(d) || W(d)) &&
                  ((e[c] = e[c] || {}), (e[c][l] = h.rawValue), p) &&
                  (e[c][f] = p)
              }
          }
        }
      }
      for (var l, u = 0; u < i; u++)
        (v = (m = n[u]).targetName) ? 'shape' === v && s(m, o) : L || s(m, r)
      for (S in r) {
        var h = {},
          c = (Rr(h, D), O(h, r[S]), Bi(h)),
          p = r[S][f]
        ;(a[S] = c ? { transform: c } : {}),
          (c = a[S]),
          (l = void 0),
          (l = (h = h).originX),
          (h = h.originY),
          (l || h) && (c[wM] = l + 'px ' + h + 'px'),
          p && (a[S][f] = p)
      }
      var d,
        g,
        y,
        m,
        v,
        _ = !0
      for (S in o) {
        a[S] = a[S] || {}
        var x = !e,
          p = o[S][f],
          w = (e = x ? new us() : e).len(),
          b =
            (e.reset(),
            (a[S].d =
              ((g = o[S]),
              (y = e),
              (b = void 0),
              (b = O({}, (d = D).shape)),
              O(b, g),
              d.buildPath(y, b),
              (g = new rM()).reset(Ni(d)),
              y.rebuildPath(g, 1),
              g.generateStr(),
              g.getStr())),
            e.len())
        if (!x && w !== b) {
          _ = !1
          break
        }
        p && (a[S][f] = p)
      }
      if (!_) for (var S in a) delete a[S].d
      if (!L)
        for (u = 0; u < i; u++)
          'style' === (v = (m = n[u]).targetName) &&
            s(m, a, function (t) {
              return bM[t]
            })
      for (var M, T = R(a), C = !0, u = 1; u < T.length; u++) {
        var I = T[u - 1],
          k = T[u]
        if (a[I][wM] !== a[k][wM]) {
          C = !1
          break
        }
        M = a[I][wM]
      }
      if (C && M) {
        for (var S in a) a[S][wM] && delete a[S][wM]
        A[wM] = M
      }
      if (
        ct(T, function (t) {
          return 0 < R(a[t]).length
        }).length
      )
        return SM(a, P) + ' ' + t[0] + ' both'
    }
    for (i in a) (r = p(a[i])) && n.push(r)
    n.length &&
      ((o = P.zrId + '-cls-' + P.cssClassIdx++),
      (P.cssNodes['.' + o] = { animation: n.join(',') }),
      (A.class = o))
  }
  var CM = Math.round
  function IM (t) {
    return t && H(t.src)
  }
  function kM (t) {
    return t && S(t.toDataURL)
  }
  function DM (i, r, o, a) {
    hM(
      function (t, e) {
        var n = 'fill' === t || 'stroke' === t
        n && Oi(e) ? EM(r, i, t, a) : n && Ai(e) ? FM(o, i, t, a) : (i[t] = e)
      },
      r,
      o,
      !1
    )
    var t = i,
      e = a
    if (
      (function (t) {
        return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY)
      })((f = (u = o).style))
    ) {
      var n = (function (t) {
          var e = t.style,
            t = t.getGlobalScale()
          return [
            e.shadowColor,
            (e.shadowBlur || 0).toFixed(2),
            (e.shadowOffsetX || 0).toFixed(2),
            (e.shadowOffsetY || 0).toFixed(2),
            t[0],
            t[1]
          ].join(',')
        })(u),
        s = e.shadowCache,
        l = s[n]
      if (!l) {
        var u = u.getGlobalScale(),
          h = u[0],
          u = u[1]
        if (!h || !u) return
        var c = f.shadowOffsetX || 0,
          p = f.shadowOffsetY || 0,
          d = f.shadowBlur,
          f = Mi(f.shadowColor),
          g = f.opacity,
          f = f.color,
          d = d / 2 / h + ' ' + d / 2 / u
        ;(l = e.zrId + '-s' + e.shadowIdx++),
          (e.defs[l] = yM(
            'filter',
            l,
            { id: l, x: '-100%', y: '-100%', width: '300%', height: '300%' },
            [
              yM('feDropShadow', '', {
                dx: c / h,
                dy: p / u,
                stdDeviation: d,
                'flood-color': f,
                'flood-opacity': g
              })
            ]
          )),
          (s[n] = l)
      }
      t.filter = Ri(l)
    }
  }
  function AM (t) {
    return Ti(t[0] - 1) && Ti(t[1]) && Ti(t[2]) && Ti(t[3] - 1)
  }
  function PM (t, e, n) {
    var i
    !e ||
      (Ti((i = e)[4]) && Ti(i[5]) && AM(e)) ||
      ((i = n ? 10 : 1e4),
      (t.transform = AM(e)
        ? 'translate(' + CM(e[4] * i) / i + ' ' + CM(e[5] * i) / i + ')'
        : 'matrix(' +
          Ci((n = e)[0]) +
          ',' +
          Ci(n[1]) +
          ',' +
          Ci(n[2]) +
          ',' +
          Ci(n[3]) +
          ',' +
          Ii(n[4]) +
          ',' +
          Ii(n[5]) +
          ')'))
  }
  function LM (t, e, n) {
    for (var i = t.points, r = [], o = 0; o < i.length; o++)
      r.push(CM(i[o][0] * n) / n), r.push(CM(i[o][1] * n) / n)
    e.points = r.join(' ')
  }
  function OM (t) {
    return !t.smooth
  }
  var RM,
    NM = {
      circle: [
        ((RM = F(['cx', 'cy', 'r'], function (t) {
          return 'string' == typeof t ? [t, t] : t
        })),
        function (t, e, n) {
          for (var i = 0; i < RM.length; i++) {
            var r = RM[i],
              o = t[r[0]]
            null != o && (e[r[1]] = CM(o * n) / n)
          }
        })
      ],
      polyline: [LM, OM],
      polygon: [LM, OM]
    }
  function BM (t, e) {
    var n,
      i,
      r,
      o = t.style,
      a = t.shape,
      s = NM[t.type],
      l = {},
      u = e.animation,
      h = 'path',
      c = t.style.strokePercent,
      p = (e.compress && Ni(t)) || 4
    return (
      !s ||
      e.willUpdate ||
      (s[1] && !s[1](a)) ||
      (u &&
        (function (t) {
          for (var e = t.animators, n = 0; n < e.length; n++)
            if ('shape' === e[n].targetName) return 1
        })(t)) ||
      c < 1
        ? ((u = !t.path || t.shapeChanged()),
          t.path || t.createPathProxy(),
          (r = t.path),
          u && (r.beginPath(), t.buildPath(r, t.shape), t.pathUpdated()),
          (u = r.getVersion()),
          (i = (n = t).__svgPathBuilder),
          (n.__svgPathVersion === u && i && c === n.__svgPathStrokePercent) ||
            ((i = i || (n.__svgPathBuilder = new rM())).reset(p),
            r.rebuildPath(i, c),
            i.generateStr(),
            (n.__svgPathVersion = u),
            (n.__svgPathStrokePercent = c)),
          (l.d = i.getStr()))
        : ((h = t.type), (r = Math.pow(10, p)), s[0](a, l, r)),
      PM(l, t.transform),
      DM(l, o, t, e),
      e.animation && TM(t, l, e),
      yM(h, t.id + '', l)
    )
  }
  function zM (t, e) {
    {
      if (t instanceof Is) return BM(t, e)
      if (t instanceof Ns) {
        var n,
          i = e,
          r = (n = t).style,
          o
        if (
          ((o = r.image) &&
            !H(o) &&
            (IM(o) ? (o = o.src) : kM(o) && (o = o.toDataURL())),
          o)
        )
          return (
            (a = r.x || 0),
            (s = r.y || 0),
            (o = { href: o, width: r.width, height: r.height }),
            a && (o.x = a),
            s && (o.y = s),
            PM(o, n.transform),
            DM(o, r, n, i),
            i.animation && TM(n, o, i),
            yM('image', n.id + '', o)
          )
      } else if (t instanceof As) {
        var a = t,
          s = e
        if (
          ((r = a.style),
          null != (i = r.text) && (i += ''),
          i && !isNaN(r.x) && !isNaN(r.y))
        ) {
          var n = r.font || Z,
            o = r.x || 0,
            l =
              ((t = r.y || 0),
              (e = Hr(n)),
              'top' === (l = r.textBaseline)
                ? (t += e / 2)
                : 'bottom' === l && (t -= e / 2),
              t),
            e = {
              'dominant-baseline': 'central',
              'text-anchor': ki[r.textAlign] || r.textAlign
            }
          if (nl(r)) {
            var t = '',
              u = r.fontStyle,
              h = tl(r.fontSize)
            if (!parseFloat(h)) return
            var c = r.fontFamily || w,
              p = r.fontWeight
            ;(t += 'font-size:' + h + ';font-family:' + c + ';'),
              u && 'normal' !== u && (t += 'font-style:' + u + ';'),
              p && 'normal' !== p && (t += 'font-weight:' + p + ';'),
              (e.style = t)
          } else e.style = 'font: ' + n
          return (
            i.match(/\s/) && (e['xml:space'] = 'preserve'),
            o && (e.x = o),
            l && (e.y = l),
            PM(e, a.transform),
            DM(e, r, a, s),
            s.animation && TM(a, e, s),
            yM('text', a.id + '', e, void 0, i)
          )
        }
      }
    }
  }
  function EM (t, e, n, i) {
    var r,
      t = t[n],
      o = { gradientUnits: t.global ? 'userSpaceOnUse' : 'objectBoundingBox' }
    if (Pi(t))
      (r = 'linearGradient'),
        (o.x1 = t.x),
        (o.y1 = t.y),
        (o.x2 = t.x2),
        (o.y2 = t.y2)
    else {
      if (!Li(t)) return
      ;(r = 'radialGradient'),
        (o.cx = N(t.x, 0.5)),
        (o.cy = N(t.y, 0.5)),
        (o.r = N(t.r, 0.5))
    }
    for (var a = t.colorStops, s = [], l = 0, u = a.length; l < u; ++l) {
      var h = 100 * Ii(a[l].offset) + '%',
        c = Mi(a[l].color),
        p = c.color,
        c = c.opacity,
        h = { offset: h }
      ;(h['stop-color'] = p),
        c < 1 && (h['stop-opacity'] = c),
        s.push(yM('stop', l + '', h))
    }
    var t = mM(yM(r, '', o, s)),
      d = i.gradientCache,
      f = d[t]
    f ||
      ((f = i.zrId + '-g' + i.gradientIdx++),
      (d[t] = f),
      (o.id = f),
      (i.defs[f] = yM(r, f, o, s))),
      (e[n] = Ri(f))
  }
  function FM (t, e, n, i) {
    var r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p = t.style[n],
      d = t.getBoundingRect(),
      f = {},
      g = p.repeat,
      y = 'no-repeat' === g,
      m = 'repeat-x' === g,
      v = 'repeat-y' === g
    Di(p)
      ? ((o = p.imageWidth),
        (a = p.imageHeight),
        (g = void 0),
        H((h = p.image))
          ? (g = h)
          : IM(h)
          ? (g = h.src)
          : kM(h) && (g = h.toDataURL()),
        'undefined' == typeof Image
          ? (Ct(
              o,
              (h =
                'Image width/height must been given explictly in svg-ssr renderer.')
            ),
            Ct(a, h))
          : (null != o && null != a) ||
            ((s = function (t, e) {
              var n, i
              t &&
                ((n = t.elm),
                (i = o || e.width),
                (e = a || e.height),
                'pattern' === t.tag &&
                  (m
                    ? ((e = 1), (i /= d.width))
                    : v && ((i = 1), (e /= d.height))),
                (t.attrs.width = i),
                (t.attrs.height = e),
                n) &&
                (n.setAttribute('width', i), n.setAttribute('height', e))
            }),
            (h = fa(g, null, t, function (t) {
              y || s(u, t), s(r, t)
            })) &&
              h.width &&
              h.height &&
              ((o = o || h.width), (a = a || h.height))),
        (r = yM('image', 'img', { href: g, width: o, height: a })),
        (f.width = o),
        (f.height = a))
      : p.svgElement &&
        ((r = _(p.svgElement)),
        (f.width = p.svgWidth),
        (f.height = p.svgHeight)),
      r &&
        (y
          ? (c = l = 1)
          : m
          ? ((l = 1), (c = f.width / d.width))
          : v
          ? ((c = 1), (l = f.height / d.height))
          : (f.patternUnits = 'userSpaceOnUse'),
        null == c || isNaN(c) || (f.width = c),
        null == l || isNaN(l) || (f.height = l),
        (t = Bi(p)) && (f.patternTransform = t),
        (h = mM((u = yM('pattern', '', f, [r])))),
        (c = (g = i.patternCache)[h]) ||
          ((c = i.zrId + '-p' + i.patternIdx++),
          (g[h] = c),
          (f.id = c),
          (u = i.defs[c] = yM('pattern', c, f, [r]))),
        (e[n] = Ri(c)))
  }
  function VM (t) {
    return document.createTextNode(t)
  }
  function HM (t, e, n) {
    t.insertBefore(e, n)
  }
  function WM (t, e) {
    t.removeChild(e)
  }
  function GM (t, e) {
    t.appendChild(e)
  }
  function UM (t) {
    return t.parentNode
  }
  function XM (t) {
    return t.nextSibling
  }
  function YM (t, e) {
    t.textContent = e
  }
  var qM = 58,
    jM = 120,
    ZM = yM('', '')
  function KM (t) {
    return void 0 === t
  }
  function $M (t) {
    return void 0 !== t
  }
  function QM (t, e) {
    var n = t.key === e.key
    return t.tag === e.tag && n
  }
  function JM (t) {
    var e,
      n = t.children,
      i = t.tag
    if ($M(i)) {
      var r = (t.elm = gM(i))
      if ((nT(ZM, t), V(n)))
        for (e = 0; e < n.length; ++e) {
          var o = n[e]
          null != o && GM(r, JM(o))
        }
      else $M(t.text) && !L(t.text) && GM(r, VM(t.text))
    } else t.elm = VM(t.text)
    return t.elm
  }
  function tT (t, e, n, i, r) {
    for (; i <= r; ++i) {
      var o = n[i]
      null != o && HM(t, JM(o), e)
    }
  }
  function eT (t, e, n, i) {
    for (; n <= i; ++n) {
      var r = e[n]
      null != r && ($M(r.tag) ? WM(UM(r.elm), r.elm) : WM(t, r.elm))
    }
  }
  function nT (t, e) {
    var n,
      i = e.elm,
      r = (t && t.attrs) || {},
      o = e.attrs || {}
    if (r !== o) {
      for (n in o) {
        var a = o[n]
        r[n] !== a &&
          (!0 === a
            ? i.setAttribute(n, '')
            : !1 === a
            ? i.removeAttribute(n)
            : n.charCodeAt(0) !== jM
            ? i.setAttribute(n, a)
            : 'xmlns:xlink' === n || 'xmlns' === n
            ? i.setAttributeNS(dM, n, a)
            : n.charCodeAt(3) === qM
            ? i.setAttributeNS(fM, n, a)
            : n.charCodeAt(5) === qM
            ? i.setAttributeNS(pM, n, a)
            : i.setAttribute(n, a))
      }
      for (n in r) n in o || i.removeAttribute(n)
    }
  }
  function iT (t, e, n) {
    for (
      var i,
        r,
        o,
        a = 0,
        s = 0,
        l = e.length - 1,
        u = e[0],
        h = e[l],
        c = n.length - 1,
        p = n[0],
        d = n[c];
      a <= l && s <= c;

    )
      null == u
        ? (u = e[++a])
        : null == h
        ? (h = e[--l])
        : null == p
        ? (p = n[++s])
        : null == d
        ? (d = n[--c])
        : QM(u, p)
        ? (rT(u, p), (u = e[++a]), (p = n[++s]))
        : QM(h, d)
        ? (rT(h, d), (h = e[--l]), (d = n[--c]))
        : QM(u, d)
        ? (rT(u, d), HM(t, u.elm, XM(h.elm)), (u = e[++a]), (d = n[--c]))
        : (p =
            (QM(h, p)
              ? (rT(h, p), HM(t, h.elm, u.elm), (h = e[--l]))
              : (KM(i) &&
                  (i = (function (t, e, n) {
                    for (var i = {}, r = e; r <= n; ++r) {
                      var o = t[r].key
                      void 0 !== o && (i[o] = r)
                    }
                    return i
                  })(e, a, l)),
                KM((r = i[p.key])) || (o = e[r]).tag !== p.tag
                  ? HM(t, JM(p), u.elm)
                  : (rT(o, p), (e[r] = void 0), HM(t, o.elm, u.elm))),
            n[++s]))
    ;(a <= l || s <= c) &&
      (l < a
        ? tT(t, null == n[c + 1] ? null : n[c + 1].elm, n, s, c)
        : eT(t, e, a, l))
  }
  function rT (t, e) {
    var n = (e.elm = t.elm),
      i = t.children,
      r = e.children
    t !== e &&
      (nT(t, e),
      KM(e.text)
        ? $M(i) && $M(r)
          ? i !== r && iT(n, i, r)
          : $M(r)
          ? ($M(t.text) && YM(n, ''), tT(n, null, r, 0, r.length - 1))
          : $M(i)
          ? eT(n, i, 0, i.length - 1)
          : $M(t.text) && YM(n, '')
        : t.text !== e.text &&
          ($M(i) && eT(n, i, 0, i.length - 1), YM(n, e.text)))
  }
  var oT = 0
  function aT (t, e, n) {
    var i
    ;(this.type = 'svg'),
      (this.refreshHover = sT()),
      (this.configLayer = sT()),
      (this.storage = e),
      (this._opts = n = O({}, n)),
      (this.root = t),
      (this._id = 'zr' + oT++),
      (this._oldVNode = _M(n.width, n.height)),
      t &&
        !n.ssr &&
        (((e = this._viewport = document.createElement('div')).style.cssText =
          'position:relative;overflow:hidden'),
        (i = this._svgDom = this._oldVNode.elm = gM('svg')),
        nT(null, this._oldVNode),
        e.appendChild(i),
        t.appendChild(e)),
      this.resize(n.width, n.height)
  }
  function sT () {
    return function () {}
  }
  ;(aT.prototype.getType = function () {
    return this.type
  }),
    (aT.prototype.getViewportRoot = function () {
      return this._viewport
    }),
    (aT.prototype.getViewportRootOffset = function () {
      var t = this.getViewportRoot()
      if (t)
        return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 }
    }),
    (aT.prototype.getSvgDom = function () {
      return this._svgDom
    }),
    (aT.prototype.refresh = function () {
      var t, e, n, i, r
      this.root &&
        (((t = this.renderToVNode({ willUpdate: !0 })).attrs.style =
          'position:absolute;left:0;top:0;user-select:none'),
        QM((e = this._oldVNode), (n = t))
          ? rT(e, n)
          : ((r = UM((i = e.elm))),
            JM(n),
            null !== r && (HM(r, n.elm, XM(i)), eT(r, [e], 0, 0))),
        (this._oldVNode = t))
    }),
    (aT.prototype.renderOneToVNode = function (t) {
      return zM(t, vM(this._id))
    }),
    (aT.prototype.renderToVNode = function (t) {
      t = t || {}
      var n,
        r,
        o,
        a,
        s,
        e = this.storage.getDisplayList(!0),
        i = this._width,
        l = this._height,
        u = vM(this._id),
        h =
          ((u.animation = t.animation),
          (u.willUpdate = t.willUpdate),
          (u.compress = t.compress),
          []),
        c = (this._bgVNode = (function (t, e, n, i) {
          var r
          n &&
            'none' !== n &&
            ((r = yM('rect', 'bg', {
              width: t,
              height: e,
              x: '0',
              y: '0',
              id: '0'
            })),
            Oi(n)
              ? EM({ fill: n }, r.attrs, 'fill', i)
              : Ai(n)
              ? FM(
                  {
                    style: { fill: n },
                    dirty: Vt,
                    getBoundingRect: function () {
                      return { width: t, height: e }
                    }
                  },
                  r.attrs,
                  'fill',
                  i
                )
              : ((i = Mi(n)),
                (n = i.color),
                (i = i.opacity),
                (r.attrs.fill = n),
                i < 1 && (r.attrs['fill-opacity'] = i)))
          return r
        })(i, l, this._backgroundColor, u)),
        c =
          (c && h.push(c),
          t.compress ? null : (this._mainVNode = yM('g', 'main', {}, []))),
        e =
          (this._paintList(e, u, c ? c.children : h),
          c && h.push(c),
          F(R(u.defs), function (t) {
            return u.defs[t]
          }))
      return (
        e.length && h.push(yM('defs', 'defs', {}, e)),
        t.animation &&
          ((n = u.cssNodes),
          (r = u.cssAnims),
          (o = (c = (c = { newline: !0 }) || {}).newline ? '\n' : ''),
          (a = ' {' + o),
          (s = o + '}'),
          (c = F(R(n), function (e) {
            return (
              e +
              a +
              F(R(n[e]), function (t) {
                return t + ':' + n[e][t] + ';'
              }).join(o) +
              s
            )
          }).join(o)),
          (e = F(R(r), function (i) {
            return (
              '@keyframes ' +
              i +
              a +
              F(R(r[i]), function (n) {
                return (
                  n +
                  a +
                  F(R(r[i][n]), function (t) {
                    var e = r[i][n][t]
                    return (
                      t + ':' + (e = 'd' === t ? 'path("' + e + '")' : e) + ';'
                    )
                  }).join(o) +
                  s
                )
              }).join(o) +
              s
            )
          }).join(o)),
          (c = c || e ? ['<![CDATA[', c, e, ']]>'].join(o) : '')) &&
          ((e = yM('style', 'stl', {}, [], c)), h.push(e)),
        _M(i, l, h, t.useViewBox)
      )
    }),
    (aT.prototype.renderToString = function (t) {
      return mM(
        this.renderToVNode({
          animation: N((t = t || {}).cssAnimation, !0),
          willUpdate: !1,
          compress: !0,
          useViewBox: N(t.useViewBox, !0)
        }),
        { newline: !0 }
      )
    }),
    (aT.prototype.setBackgroundColor = function (t) {
      this._backgroundColor = t
    }),
    (aT.prototype.getSvgRoot = function () {
      return this._mainVNode && this._mainVNode.elm
    }),
    (aT.prototype._paintList = function (t, e, n) {
      for (
        var i, r, o, a, s, l, u, h = t.length, c = [], p = 0, d = 0, f = 0;
        f < h;
        f++
      ) {
        var g = t[f]
        if (!g.invisible) {
          for (
            var y = g.__clipPaths,
              m = (y && y.length) || 0,
              v = (M && M.length) || 0,
              _ = void 0,
              _ = Math.max(m - 1, v - 1);
            0 <= _ && (!y || !M || y[_] !== M[_]);
            _--
          );
          for (var x = v - 1; _ < x; x--) i = c[--p - 1]
          for (var w = _ + 1; w < m; w++) {
            var b = {},
              S =
                ((r = y[w]),
                (o = b),
                (u = S = l = s = void 0),
                (l = (a = e).clipPathCache),
                (S = a.defs),
                (u = l[r.id]) ||
                  ((s = { id: (u = a.zrId + '-c' + a.clipPathIdx++) }),
                  (S[(l[r.id] = u)] = yM('clipPath', u, s, [BM(r, a)]))),
                (o['clip-path'] = Ri(u)),
                yM('g', 'clip-g-' + d++, b, []))
            ;(i ? i.children : n).push(S), (i = c[p++] = S)
          }
          var M = y,
            v = zM(g, e)
          v && (i ? i.children : n).push(v)
        }
      }
    }),
    (aT.prototype.resize = function (t, e) {
      var n = this._opts,
        i = this.root,
        r = this._viewport
      null != t && (n.width = t),
        null != e && (n.height = e),
        i &&
          r &&
          ((r.style.display = 'none'),
          (t = y0(i, 0, n)),
          (e = y0(i, 1, n)),
          (r.style.display = '')),
        (this._width === t && this._height === e) ||
          ((this._width = t),
          (this._height = e),
          r && (((i = r.style).width = t + 'px'), (i.height = e + 'px')),
          Ai(this._backgroundColor)
            ? this.refresh()
            : ((n = this._svgDom) &&
                (n.setAttribute('width', t), n.setAttribute('height', e)),
              (r = this._bgVNode && this._bgVNode.elm) &&
                (r.setAttribute('width', t), r.setAttribute('height', e))))
    }),
    (aT.prototype.getWidth = function () {
      return this._width
    }),
    (aT.prototype.getHeight = function () {
      return this._height
    }),
    (aT.prototype.dispose = function () {
      this.root && (this.root.innerHTML = ''),
        (this._svgDom =
          this._viewport =
          this.storage =
          this._oldVNode =
          this._bgVNode =
          this._mainVNode =
            null)
    }),
    (aT.prototype.clear = function () {
      this._svgDom && (this._svgDom.innerHTML = null), (this._oldVNode = null)
    }),
    (aT.prototype.toDataURL = function (t) {
      var e = this.renderToString(),
        n = 'data:image/svg+xml;'
      return t
        ? (e = zi(e)) && n + 'base64,' + e
        : n + 'charset=UTF-8,' + encodeURIComponent(e)
    }),
    uo('svg', aT),
    (t.Axis = Yc),
    (t.ChartView = hy),
    (t.ComponentModel = g),
    (t.ComponentView = oy),
    (t.List = Pv),
    (t.Model = Zc),
    (t.PRIORITY = o0),
    (t.SeriesModel = $g),
    (t.color = bi),
    (t.connect = function (e) {
      var t
      return (
        V(e) &&
          ((t = e),
          (e = null),
          B(t, function (t) {
            null != t.group && (e = t.group)
          }),
          (e = e || 'g_' + Em++),
          B(t, function (t) {
            t.group = e
          })),
        (Bm[e] = !0),
        e
      )
    }),
    (t.dataTool = {}),
    (t.dependencies = { zrender: '5.4.4' }),
    (t.disConnect = r0),
    (t.disconnect = Vm),
    (t.dispose = function (t) {
      H(t) ? (t = Nm[t]) : t instanceof wm || (t = Hm(t)),
        t instanceof wm && !t.isDisposed() && t.dispose()
    }),
    (t.env = b),
    (t.extendChartView = function (t) {
      return (t = hy.extend(t)), hy.registerClass(t), t
    }),
    (t.extendComponentModel = function (t) {
      return (t = g.extend(t)), g.registerClass(t), t
    }),
    (t.extendComponentView = function (t) {
      return (t = oy.extend(t)), oy.registerClass(t), t
    }),
    (t.extendSeriesModel = function (t) {
      return (t = $g.extend(t)), $g.registerClass(t), t
    }),
    (t.format = Uc),
    (t.getCoordinateSystemDimensions = function (t) {
      if ((t = Ed.get(t)))
        return t.getDimensionsInfo
          ? t.getDimensionsInfo()
          : t.dimensions.slice()
    }),
    (t.getInstanceByDom = Hm),
    (t.getInstanceById = function (t) {
      return Nm[t]
    }),
    (t.getMap = function (t) {
      var e = U0.getMap
      return e && e(t)
    }),
    (t.graphic = cp),
    (t.helper = a0),
    (t.init = function (t, e, n) {
      var i = !(n && n.ssr)
      if (i) {
        var r = Hm(t)
        if (r) return r
      }
      return (
        ((r = new wm(t, e, n)).id = 'ec_' + zm++),
        (Nm[r.id] = r),
        i && Qo(t, Fm, r.id),
        fm(r),
        G0.trigger('afterinit', r),
        r
      )
    }),
    (t.innerDrawElementOnCanvas = B0),
    (t.matrix = He),
    (t.number = ca),
    (t.parseGeoJSON = s1),
    (t.parseGeoJson = s1),
    (t.registerAction = jm),
    (t.registerCoordinateSystem = Zm),
    (t.registerLayout = Km),
    (t.registerLoading = tv),
    (t.registerLocale = op),
    (t.registerMap = ev),
    (t.registerPostInit = Xm),
    (t.registerPostUpdate = Ym),
    (t.registerPreprocessor = Gm),
    (t.registerProcessor = Um),
    (t.registerTheme = Wm),
    (t.registerTransform = nv),
    (t.registerUpdateLifecycle = qm),
    (t.registerVisual = $m),
    (t.setCanvasCreator = function (t) {
      k({ createCanvas: t })
    }),
    (t.setPlatformAPI = k),
    (t.throttle = xy),
    (t.time = cc),
    (t.use = U_),
    (t.util = Vc),
    (t.vector = ae),
    (t.version = '5.4.3'),
    (t.zrUtil = Wt),
    (t.zrender = ho)
})
