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
      (se = (Gt = b).browser),
      (at = et.match(/Firefox\/([\d.]+)/)),
      (q = et.match(/MSIE\s([\d.]+)/) || et.match(/Trident\/.+?rv:(([\d.]+))/)),
      (tt = et.match(/Edge?\/([\d.]+)/)),
      (et = /micromessenger/i.test(et)),
      at && ((se.firefox = !0), (se.version = at[1])),
      q && ((se.ie = !0), (se.version = q[1])),
      tt &&
        ((se.edge = !0),
        (se.version = tt[1]),
        (se.newEdge = 18 < +tt[1].split('.')[0])),
      et && (se.weChat = !0),
      (Gt.svgSupported = 'undefined' != typeof SVGRect),
      (Gt.touchEventsSupported =
        'ontouchstart' in window && !se.ie && !se.edge),
      (Gt.pointerEventsSupported =
        'onpointerdown' in window && (se.edge || (se.ie && 11 <= +se.version))),
      (Gt.domSupported = 'undefined' != typeof document),
      (at = document.documentElement.style),
      (Gt.transform3dSupported =
        ((se.ie && 'transition' in at) ||
          se.edge ||
          ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()) ||
          'MozPerspective' in at) &&
        !('OTransition' in at)),
      (Gt.transformSupported =
        Gt.transform3dSupported || (se.ie && 9 <= +se.version)))
  var x = 12,
    w = 'sans-serif',
    K = x + 'px ' + w
  var C,
    k,
    D = (function (t) {
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
    U = {
      createCanvas: function () {
        return (
          'undefined' != typeof document && document.createElement('canvas')
        )
      },
      measureText: function (t, e) {
        if ((C || ((n = U.createCanvas()), (C = n && n.getContext('2d'))), C))
          return k !== e && (k = C.font = e || K), C.measureText(t)
        t = t || ''
        var n = /(\d+)px/.exec((e = e || K)),
          i = (n && +n[1]) || x,
          r = 0
        if (0 <= e.indexOf('mono')) r = i * t.length
        else
          for (var o = 0; o < t.length; o++) {
            var a = D[t[o]]
            r += null == a ? i : a * i
          }
        return { width: r }
      },
      loadImage: function (t, e, n) {
        var i = new Image()
        return (i.onload = e), (i.onerror = n), (i.src = t), i
      }
    }
  function A (t) {
    for (var e in U) t[e] && (U[e] = t[e])
  }
  var P = ht(
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
    X = ht(
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
    Y = Object.prototype.toString,
    q = Array.prototype,
    j = q.forEach,
    $ = q.filter,
    Q = q.slice,
    J = q.map,
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
      n = Y.call(t)
    if ('[object Array]' === n) {
      if (!Pt(t))
        for (var e = [], i = 0, r = t.length; i < r; i++) e[i] = _(t[i])
    } else if (X[n]) {
      if (!Pt(t)) {
        var o = t.constructor
        if (o.from) e = o.from(t)
        else
          for (e = new o(t.length), i = 0, r = t.length; i < r; i++) e[i] = t[i]
      }
    } else if (!P[n] && !Pt(t) && !vt(t))
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
        vt(o) ||
        vt(r) ||
        yt(o) ||
        yt(r) ||
        Pt(o) ||
        Pt(r)
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
    for (var i = B(e), r = 0; r < i.length; r++) {
      var o = i[r]
      ;(n ? null != e[o] : null == t[o]) && (t[o] = e[o])
    }
    return t
  }
  var at = U.createCanvas
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
  function R (t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === j) t.forEach(e, n)
      else if (t.length === +t.length)
        for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t)
      else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
  }
  function F (t, e, n) {
    if (!t) return []
    if (!e) return Tt(t)
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
    if (!e) return Tt(t)
    if (t.filter && t.filter === $) return t.filter(e, n)
    for (var i = [], r = 0, o = t.length; r < o; r++)
      e.call(n, t[r], r, t) && i.push(t[r])
    return i
  }
  function B (t) {
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
    return Array.isArray ? Array.isArray(t) : '[object Array]' === Y.call(t)
  }
  function S (t) {
    return 'function' == typeof t
  }
  function H (t) {
    return 'string' == typeof t
  }
  function ft (t) {
    return '[object String]' === Y.call(t)
  }
  function gt (t) {
    return 'number' == typeof t
  }
  function L (t) {
    var e = typeof t
    return 'function' == e || (!!t && 'object' == e)
  }
  function yt (t) {
    return !!P[Y.call(t)]
  }
  function mt (t) {
    return !!X[Y.call(t)]
  }
  function vt (t) {
    return (
      'object' == typeof t &&
      'number' == typeof t.nodeType &&
      'object' == typeof t.ownerDocument
    )
  }
  function _t (t) {
    return null != t.colorStops
  }
  function xt (t) {
    return null != t.image
  }
  function wt (t) {
    return '[object RegExp]' === Y.call(t)
  }
  function bt (t) {
    return t != t
  }
  function St () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
    for (var n = 0, i = t.length; n < i; n++) if (null != t[n]) return t[n]
  }
  function N (t, e) {
    return null != t ? t : e
  }
  function Mt (t, e, n) {
    return null != t ? t : null != e ? e : n
  }
  function Tt (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
    return Q.apply(t, e)
  }
  function Ct (t) {
    var e
    return 'number' == typeof t
      ? [t, t, t, t]
      : 2 === (e = t.length)
      ? [t[0], t[1], t[0], t[1]]
      : 3 === e
      ? [t[0], t[1], t[2], t[1]]
      : t
  }
  function It (t, e) {
    if (!t) throw new Error(e)
  }
  function kt (t) {
    return null == t
      ? null
      : 'function' == typeof t.trim
      ? t.trim()
      : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  }
  var Dt = '__ec_primitive__'
  function At (t) {
    t[Dt] = !0
  }
  function Pt (t) {
    return t[Dt]
  }
  ;(Rt.prototype.delete = function (t) {
    var e = this.has(t)
    return e && delete this.data[t], e
  }),
    (Rt.prototype.has = function (t) {
      return this.data.hasOwnProperty(t)
    }),
    (Rt.prototype.get = function (t) {
      return this.data[t]
    }),
    (Rt.prototype.set = function (t, e) {
      return (this.data[t] = e), this
    }),
    (Rt.prototype.keys = function () {
      return B(this.data)
    }),
    (Rt.prototype.forEach = function (t) {
      var e,
        n = this.data
      for (e in n) n.hasOwnProperty(e) && t(n[e], e)
    })
  var Lt = Rt,
    Ot = 'function' == typeof Map
  function Rt () {
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
      return Ot ? Array.from(t) : t
    }),
    (Nt.prototype.removeKey = function (t) {
      this.data.delete(t)
    })
  var Bt = Nt
  function Nt (t) {
    var n = V(t),
      i = ((this.data = new (Ot ? Map : Lt)()), this)
    function e (t, e) {
      n ? i.set(t, e) : i.set(e, t)
    }
    t instanceof Nt ? t.each(e) : t && R(t, e)
  }
  function z (t) {
    return new Bt(t)
  }
  function zt (t, e) {
    for (
      var n = new t.constructor(t.length + e.length), i = 0;
      i < t.length;
      i++
    )
      n[i] = t[i]
    for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i]
    return n
  }
  function Et (t, e) {
    var n,
      t = Object.create
        ? Object.create(t)
        : (((n = function () {}).prototype = t), new n())
    return e && O(t, e), t
  }
  function Ft (t) {
    t = t.style
    ;(t.webkitUserSelect = 'none'),
      (t.userSelect = 'none'),
      (t.webkitTapHighlightColor = 'rgba(0,0,0,0)'),
      (t['-webkit-touch-callout'] = 'none')
  }
  function Vt (t, e) {
    return t.hasOwnProperty(e)
  }
  function Ht () {}
  var Wt = 180 / Math.PI,
    Gt = Object.freeze({
      __proto__: null,
      HashMap: Bt,
      RADIAN_TO_DEGREE: Wt,
      assert: It,
      bind: pt,
      clone: _,
      concatArray: zt,
      createCanvas: at,
      createHashMap: z,
      createObject: Et,
      curry: dt,
      defaults: E,
      disableUserSelect: Ft,
      each: R,
      eqNaN: bt,
      extend: O,
      filter: ct,
      find: function (t, e, n) {
        if (t && e)
          for (var i = 0, r = t.length; i < r; i++)
            if (e.call(n, t[i], i, t)) return t[i]
      },
      guid: rt,
      hasOwn: Vt,
      indexOf: I,
      inherits: st,
      isArray: V,
      isArrayLike: ut,
      isBuiltInObject: yt,
      isDom: vt,
      isFunction: S,
      isGradientObject: _t,
      isImagePatternObject: xt,
      isNumber: gt,
      isObject: L,
      isPrimitive: Pt,
      isRegExp: wt,
      isString: H,
      isStringSafe: ft,
      isTypedArray: mt,
      keys: B,
      logError: ot,
      map: F,
      merge: d,
      mergeAll: function (t, e) {
        for (var n = t[0], i = 1, r = t.length; i < r; i++) n = d(n, t[i], e)
        return n
      },
      mixin: lt,
      noop: Ht,
      normalizeCssArray: Ct,
      reduce: ht,
      retrieve: St,
      retrieve2: N,
      retrieve3: Mt,
      setAsPrimitive: At,
      slice: Tt,
      trim: kt
    })
  function Ut (t, e) {
    return [(t = null == t ? 0 : t), (e = null == e ? 0 : e)]
  }
  function Xt (t) {
    return [t[0], t[1]]
  }
  function Yt (t, e, n) {
    return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t
  }
  function qt (t, e, n) {
    return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t
  }
  function jt (t) {
    return Math.sqrt(Zt(t))
  }
  function Zt (t) {
    return t[0] * t[0] + t[1] * t[1]
  }
  function Kt (t, e, n) {
    return (t[0] = e[0] * n), (t[1] = e[1] * n), t
  }
  function $t (t, e) {
    var n = jt(e)
    return (
      0 === n
        ? ((t[0] = 0), (t[1] = 0))
        : ((t[0] = e[0] / n), (t[1] = e[1] / n)),
      t
    )
  }
  function Qt (t, e) {
    return Math.sqrt(
      (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    )
  }
  var Jt = Qt
  function te (t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
  }
  var ee = te
  function ne (t, e, n, i) {
    return (
      (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t
    )
  }
  function ie (t, e, n) {
    var i = e[0],
      e = e[1]
    return (
      (t[0] = n[0] * i + n[2] * e + n[4]),
      (t[1] = n[1] * i + n[3] * e + n[5]),
      t
    )
  }
  function re (t, e, n) {
    return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t
  }
  function oe (t, e, n) {
    return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t
  }
  function ae (t, e) {
    ;(this.target = t), (this.topTarget = e && e.topTarget)
  }
  var se = Object.freeze({
      __proto__: null,
      add: Yt,
      applyTransform: ie,
      clone: Xt,
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t
      },
      create: Ut,
      dist: Jt,
      distSquare: ee,
      distance: Qt,
      distanceSquare: te,
      div: function (t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t
      },
      dot: function (t, e) {
        return t[0] * e[0] + t[1] * e[1]
      },
      len: jt,
      lenSquare: Zt,
      length: jt,
      lengthSquare: Zt,
      lerp: ne,
      max: oe,
      min: re,
      mul: function (t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t
      },
      negate: function (t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t
      },
      normalize: $t,
      scale: Kt,
      scaleAndAdd: function (t, e, n, i) {
        return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t
      },
      set: function (t, e, n) {
        return (t[0] = e), (t[1] = n), t
      },
      sub: qt
    }),
    le =
      ((ue.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable; )
          e = e.parent || e.__hostTarget
        e &&
          (((this._draggingTarget = e).dragging = !0),
          (this._x = t.offsetX),
          (this._y = t.offsetY),
          this.handler.dispatchToElement(new ae(e, t), 'dragstart', t.event))
      }),
      (ue.prototype._drag = function (t) {
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
          this.handler.dispatchToElement(new ae(o, t), 'drag', t.event),
          (i = this.handler.findHover(e, n, o).target),
          (r = this._dropTarget),
          o !== (this._dropTarget = i)) &&
          (r &&
            i !== r &&
            this.handler.dispatchToElement(new ae(r, t), 'dragleave', t.event),
          i) &&
          i !== r &&
          this.handler.dispatchToElement(new ae(i, t), 'dragenter', t.event)
      }),
      (ue.prototype._dragEnd = function (t) {
        var e = this._draggingTarget
        e && (e.dragging = !1),
          this.handler.dispatchToElement(new ae(e, t), 'dragend', t.event),
          this._dropTarget &&
            this.handler.dispatchToElement(
              new ae(this._dropTarget, t),
              'drop',
              t.event
            ),
          (this._draggingTarget = null),
          (this._dropTarget = null)
      }),
      ue)
  function ue (t) {
    ;(this.handler = t).on('mousedown', this._dragStart, this),
      t.on('mousemove', this._drag, this),
      t.on('mouseup', this._dragEnd, this)
  }
  ;(ce.prototype.on = function (t, e, n, i) {
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
    (ce.prototype.isSilent = function (t) {
      var e = this._$handlers
      return !e || !e[t] || !e[t].length
    }),
    (ce.prototype.off = function (t, e) {
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
    (ce.prototype.trigger = function (t) {
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
    (ce.prototype.triggerWithContext = function (t) {
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
  var he = ce
  function ce (t) {
    t && (this._$eventProcessor = t)
  }
  var pe = Math.log(2)
  function de (t, e, n, i, r, o) {
    var a,
      s = i + '-' + r,
      l = t.length
    if (o.hasOwnProperty(s)) return o[s]
    if (1 === e)
      return (a = Math.round(Math.log(((1 << l) - 1) & ~r) / pe)), t[n][a]
    for (var u = i | (1 << n), h = n + 1; i & (1 << h); ) h++
    for (var c = 0, p = 0, d = 0; p < l; p++) {
      var f = 1 << p
      f & r ||
        ((c += (d % 2 ? -1 : 1) * t[n][p] * de(t, e - 1, h, u, r | f, o)), d++)
    }
    return (o[s] = c)
  }
  function fe (t, e) {
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
      r = de(n, 8, 0, 0, 0, i)
    if (0 !== r) {
      for (var o = [], a = 0; a < 8; a++)
        for (var s = 0; s < 8; s++)
          null == o[s] && (o[s] = 0),
            (o[s] +=
              ((((a + s) % 2 ? -1 : 1) *
                de(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i)) /
                r) *
              e[a])
      return function (t, e, n) {
        var i = e * o[6] + n * o[7] + 1
        ;(t[0] = (e * o[0] + n * o[1] + o[2]) / i),
          (t[1] = (e * o[3] + n * o[4] + o[5]) / i)
      }
    }
  }
  var ge = '___zrEVENTSAVED',
    ye = []
  function me (t, e, n, i, r) {
    if (e.getBoundingClientRect && b.domSupported && !ve(e)) {
      var o = e[ge] || (e[ge] = {}),
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
            : ((e.srcCoords = a), (e[i] = n ? fe(s, a) : fe(a, s)))
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
  function ve (t) {
    return 'CANVAS' === t.nodeName.toUpperCase()
  }
  var _e = /([&<>"'])/g,
    xe = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  function we (t) {
    return null == t
      ? ''
      : (t + '').replace(_e, function (t, e) {
          return xe[e]
        })
  }
  var be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Se = [],
    Me = b.browser.firefox && +b.browser.version.split('.')[0] < 39
  function Te (t, e, n, i) {
    return (
      (n = n || {}),
      i
        ? Ce(t, e, n)
        : Me && null != e.layerX && e.layerX !== e.offsetX
        ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
        : null != e.offsetX
        ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
        : Ce(t, e, n),
      n
    )
  }
  function Ce (t, e, n) {
    if (b.domSupported && t.getBoundingClientRect) {
      var i,
        r = e.clientX,
        e = e.clientY
      if (ve(t))
        return (
          (i = t.getBoundingClientRect()),
          (n.zrX = r - i.left),
          (n.zrY = e - i.top)
        )
      if (me(Se, t, r, e)) return (n.zrX = Se[0]), (n.zrY = Se[1])
    }
    n.zrX = n.zrY = 0
  }
  function Ie (t) {
    return t || window.event
  }
  function ke (t, e, n) {
    var i
    return (
      null == (e = Ie(e)).zrX &&
        ((i = e.type) && 0 <= i.indexOf('touch')
          ? (i = ('touchend' !== i ? e.targetTouches : e.changedTouches)[0]) &&
            Te(t, i, e, n)
          : (Te(t, e, e, n),
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
        null == e.which && void 0 !== i && be.test(e.type)) &&
        (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
      e
    )
  }
  var De = function (t) {
      t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0)
    },
    Ae =
      ((Pe.prototype.recognize = function (t, e, n) {
        return this._doTrack(t, e, n), this._recognize(t)
      }),
      (Pe.prototype.clear = function () {
        return (this._track.length = 0), this
      }),
      (Pe.prototype._doTrack = function (t, e, n) {
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
              l = Te(n, s, {})
            r.points.push([l.zrX, l.zrY]), r.touches.push(s)
          }
          this._track.push(r)
        }
      }),
      (Pe.prototype._recognize = function (t) {
        for (var e in Oe)
          if (Oe.hasOwnProperty(e)) {
            e = Oe[e](this._track, t)
            if (e) return e
          }
      }),
      Pe)
  function Pe () {
    this._track = []
  }
  function Le (t) {
    var e = t[1][0] - t[0][0],
      t = t[1][1] - t[0][1]
    return Math.sqrt(e * e + t * t)
  }
  var Oe = {
    pinch: function (t, e) {
      var n = t.length
      if (n) {
        var i = (t[n - 1] || {}).points,
          n = (t[n - 2] || {}).points || i
        if (n && 1 < n.length && i && 1 < i.length)
          return (
            (n = Le(i) / Le(n)),
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
  function Re () {
    return [1, 0, 0, 1, 0, 0]
  }
  function Be (t) {
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
  function ze (t, e, n) {
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
  function Ee (t, e, n) {
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
  function Fe (t, e, n) {
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
  function Ve (t, e, n) {
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
  function He (t, e) {
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
  var We = Object.freeze({
      __proto__: null,
      clone: function (t) {
        var e = Re()
        return Ne(e, t), e
      },
      copy: Ne,
      create: Re,
      identity: Be,
      invert: He,
      mul: ze,
      rotate: Fe,
      scale: Ve,
      translate: Ee
    }),
    M =
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
  var Ge = Math.min,
    Ue = Math.max,
    Xe = new M(),
    Ye = new M(),
    qe = new M(),
    je = new M(),
    Ze = new M(),
    Ke = new M(),
    W =
      (($e.prototype.union = function (t) {
        var e = Ge(t.x, this.x),
          n = Ge(t.y, this.y)
        isFinite(this.x) && isFinite(this.width)
          ? (this.width = Ue(t.x + t.width, this.x + this.width) - e)
          : (this.width = t.width),
          isFinite(this.y) && isFinite(this.height)
            ? (this.height = Ue(t.y + t.height, this.y + this.height) - n)
            : (this.height = t.height),
          (this.x = e),
          (this.y = n)
      }),
      ($e.prototype.applyTransform = function (t) {
        $e.applyTransform(this, this, t)
      }),
      ($e.prototype.calculateTransform = function (t) {
        var e = t.width / this.width,
          n = t.height / this.height,
          i = Re()
        return (
          Ee(i, i, [-this.x, -this.y]),
          Ve(i, i, [e, n]),
          Ee(i, i, [t.x, t.y]),
          i
        )
      }),
      ($e.prototype.intersect = function (t, e) {
        if (!t) return !1
        t instanceof $e || (t = $e.create(t))
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
              ? i < l && ((i = l), r < o ? M.set(Ke, -r, 0) : M.set(Ke, o, 0))
              : l < n && ((n = l), r < o ? M.set(Ze, r, 0) : M.set(Ze, -o, 0)),
            h < y || t < d
              ? i < u && ((i = u), a < s ? M.set(Ke, 0, -a) : M.set(Ke, 0, s))
              : l < n && ((n = l), a < s ? M.set(Ze, 0, a) : M.set(Ze, 0, -s))),
          e && M.copy(e, m ? Ze : Ke),
          m
        )
      }),
      ($e.prototype.contain = function (t, e) {
        var n = this
        return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
      }),
      ($e.prototype.clone = function () {
        return new $e(this.x, this.y, this.width, this.height)
      }),
      ($e.prototype.copy = function (t) {
        $e.copy(this, t)
      }),
      ($e.prototype.plain = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height }
      }),
      ($e.prototype.isFinite = function () {
        return (
          isFinite(this.x) &&
          isFinite(this.y) &&
          isFinite(this.width) &&
          isFinite(this.height)
        )
      }),
      ($e.prototype.isZero = function () {
        return 0 === this.width || 0 === this.height
      }),
      ($e.create = function (t) {
        return new $e(t.x, t.y, t.width, t.height)
      }),
      ($e.copy = function (t, e) {
        ;(t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height)
      }),
      ($e.applyTransform = function (t, e, n) {
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
            : ((Xe.x = qe.x = e.x),
              (Xe.y = je.y = e.y),
              (Ye.x = je.x = e.x + e.width),
              (Ye.y = qe.y = e.y + e.height),
              Xe.transform(n),
              je.transform(n),
              Ye.transform(n),
              qe.transform(n),
              (t.x = Ge(Xe.x, Ye.x, qe.x, je.x)),
              (t.y = Ge(Xe.y, Ye.y, qe.y, je.y)),
              (o = Ue(Xe.x, Ye.x, qe.x, je.x)),
              (a = Ue(Xe.y, Ye.y, qe.y, je.y)),
              (t.width = o - t.x),
              (t.height = a - t.y))
          : t !== e && $e.copy(t, e)
      }),
      $e)
  function $e (t, e, n, i) {
    n < 0 && ((t += n), (n = -n)),
      i < 0 && ((e += i), (i = -i)),
      (this.x = t),
      (this.y = e),
      (this.width = n),
      (this.height = i)
  }
  var Qe = 'silent'
  function Je () {
    De(this.event)
  }
  function tn (t, e) {
    ;(this.x = t), (this.y = e)
  }
  u(un, (nn = he)),
    (un.prototype.dispose = function () {}),
    (un.prototype.setCursor = function () {})
  var en,
    nn,
    rn = un,
    on = [
      'click',
      'dblclick',
      'mousewheel',
      'mouseout',
      'mouseup',
      'mousedown',
      'mousemove',
      'contextmenu'
    ],
    an = new W(0, 0, 0, 0),
    sn =
      (u(ln, (en = he)),
      (ln.prototype.setHandlerProxy = function (e) {
        this.proxy && this.proxy.dispose(),
          e &&
            (R(
              on,
              function (t) {
                e.on && e.on(t, this[t], this)
              },
              this
            ),
            (e.handler = this)),
          (this.proxy = e)
      }),
      (ln.prototype.mousemove = function (t) {
        var e = t.zrX,
          n = t.zrY,
          i = cn(this, e, n),
          r = this._hovered,
          o = r.target,
          i =
            (o && !o.__zr && (o = (r = this.findHover(r.x, r.y)).target),
            (this._hovered = i ? new tn(e, n) : this.findHover(e, n))),
          e = i.target,
          n = this.proxy
        n.setCursor && n.setCursor(e ? e.cursor : 'default'),
          o && e !== o && this.dispatchToElement(r, 'mouseout', t),
          this.dispatchToElement(i, 'mousemove', t),
          e && e !== o && this.dispatchToElement(i, 'mouseover', t)
      }),
      (ln.prototype.mouseout = function (t) {
        var e = t.zrEventControl
        'only_globalout' !== e &&
          this.dispatchToElement(this._hovered, 'mouseout', t),
          'no_globalout' !== e &&
            this.trigger('globalout', { type: 'globalout', event: t })
      }),
      (ln.prototype.resize = function () {
        this._hovered = new tn(0, 0)
      }),
      (ln.prototype.dispatch = function (t, e) {
        t = this[t]
        t && t.call(this, e)
      }),
      (ln.prototype.dispose = function () {
        this.proxy.dispose(),
          (this.storage = null),
          (this.proxy = null),
          (this.painter = null)
      }),
      (ln.prototype.setCursorStyle = function (t) {
        var e = this.proxy
        e.setCursor && e.setCursor(t)
      }),
      (ln.prototype.dispatchToElement = function (t, e, n) {
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
                stop: Je
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
      (ln.prototype.findHover = function (t, e, n) {
        var i = this.storage.getDisplayList(),
          r = new tn(t, e)
        if ((hn(i, r, t, e, n), this._pointerSize && !r.target)) {
          for (
            var o = [],
              a = this._pointerSize,
              s = a / 2,
              l = new W(t - s, e - s, a, a),
              u = i.length - 1;
            0 <= u;
            u--
          ) {
            var h = i[u]
            h === n ||
              h.ignore ||
              h.ignoreCoarsePointer ||
              (h.parent && h.parent.ignoreCoarsePointer) ||
              (an.copy(h.getBoundingRect()),
              h.transform && an.applyTransform(h.transform),
              an.intersect(l) && o.push(h))
          }
          if (o.length)
            for (var c = Math.PI / 12, p = 2 * Math.PI, d = 0; d < s; d += 4)
              for (var f = 0; f < p; f += c)
                if (
                  (hn(o, r, t + d * Math.cos(f), e + d * Math.sin(f), n),
                  r.target)
                )
                  return r
        }
        return r
      }),
      (ln.prototype.processGesture = function (t, e) {
        this._gestureMgr || (this._gestureMgr = new Ae())
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
            ((n = new tn()).target = i.target),
            this.dispatchToElement(n, e, i.event))
      }),
      ln)
  function ln (t, e, n, i, r) {
    var o = en.call(this) || this
    return (
      (o._hovered = new tn(0, 0)),
      (o.storage = t),
      (o.painter = e),
      (o.painterRoot = i),
      (o._pointerSize = r),
      (n = n || new rn()),
      (o.proxy = null),
      o.setHandlerProxy(n),
      (o._draggingMgr = new le(o)),
      o
    )
  }
  function un () {
    var t = (null !== nn && nn.apply(this, arguments)) || this
    return (t.handler = null), t
  }
  function hn (t, e, n, i, r) {
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
            return !r || Qe
          }
          return !1
        })(a, n, i)) &&
        (e.topTarget || (e.topTarget = a), s !== Qe)
      ) {
        e.target = a
        break
      }
    }
  }
  function cn (t, e, n) {
    t = t.painter
    return e < 0 || e > t.getWidth() || n < 0 || n > t.getHeight()
  }
  R(
    ['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'],
    function (a) {
      sn.prototype[a] = function (t) {
        var e,
          n,
          i = t.zrX,
          r = t.zrY,
          o = cn(this, i, r)
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
            4 < Jt(this._downPoint, [t.zrX, t.zrY])
          )
            return
          this._downPoint = null
        }
        this.dispatchToElement(e, a, t)
      }
    }
  )
  var pn = 32,
    dn = 7
  function fn (t, e, n, i) {
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
  function gn (t, e, n, i, r) {
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
  function yn (t, e, n, i, r, o) {
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
  function mn (t, e, n, i, r, o) {
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
  function vn (t, e, n, i) {
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
      if (r < pn) gn(t, n, i, n + (l = fn(t, n, i, e)), e)
      else {
        ;(g = e),
          (y = dn),
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
            for (var e = 0; pn <= t; ) (e |= 1 & t), (t >>= 1)
            return t + e
          })(r)
        do {} while (
          ((l = fn(t, n, i, e)) < c &&
            (gn(t, n, n + (u = c < (u = r) ? c : r), n + l, e), (l = u)),
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
          mn(f[i], f, e, n, 0, g))
      ;(e += t),
        0 != (n -= t) &&
          0 !== (r = yn(f[e + n - 1], f, i, r, r - 1, g)) &&
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
                      if (0 !== (l = mn(f[a], m, o, e, 0, g))) {
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
                      if (0 !== (u = yn(m[o], f, a, i, 0, g))) {
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
                    } while ((c--, dn <= l || dn <= u))
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
                      if (0 != (c = e - mn(m[a], f, t, e, e - 1, g))) {
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
                      if (0 != (p = i - yn(f[o], m, 0, i, i - 1, g))) {
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
                    } while ((h--, dn <= c || dn <= p))
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
  var _n = 1,
    xn = 4,
    wn = !1
  function bn () {
    wn ||
      ((wn = !0),
      console.warn(
        'z / z2 / zlevel of displayable is invalid, which may cause unexpected errors'
      ))
  }
  function Sn (t, e) {
    return t.zlevel === e.zlevel
      ? t.z === e.z
        ? t.z2 - e.z2
        : t.z - e.z
      : t.zlevel - e.zlevel
  }
  ;(Tn.prototype.traverse = function (t, e) {
    for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
  }),
    (Tn.prototype.getDisplayList = function (t, e) {
      e = e || !1
      var n = this._displayList
      return (!t && n.length) || this.updateDisplayList(e), n
    }),
    (Tn.prototype.updateDisplayList = function (t) {
      this._displayListLen = 0
      for (
        var e = this._roots, n = this._displayList, i = 0, r = e.length;
        i < r;
        i++
      )
        this._updateAndAddDisplayable(e[i], null, t)
      ;(n.length = this._displayListLen), vn(n, Sn)
    }),
    (Tn.prototype._updateAndAddDisplayable = function (t, e, n) {
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
            t.__dirty && (l.__dirty |= _n),
              this._updateAndAddDisplayable(l, e, n)
          }
          t.__dirty = 0
        } else {
          i = t
          e && e.length
            ? (i.__clipPaths = e)
            : i.__clipPaths && 0 < i.__clipPaths.length && (i.__clipPaths = []),
            isNaN(i.z) && (bn(), (i.z = 0)),
            isNaN(i.z2) && (bn(), (i.z2 = 0)),
            isNaN(i.zlevel) && (bn(), (i.zlevel = 0)),
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
    (Tn.prototype.addRoot = function (t) {
      ;(t.__zr && t.__zr.storage === this) || this._roots.push(t)
    }),
    (Tn.prototype.delRoot = function (t) {
      if (t instanceof Array)
        for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e])
      else {
        var i = I(this._roots, t)
        0 <= i && this._roots.splice(i, 1)
      }
    }),
    (Tn.prototype.delAllRoots = function () {
      ;(this._roots = []), (this._displayList = []), (this._displayListLen = 0)
    }),
    (Tn.prototype.getRoots = function () {
      return this._roots
    }),
    (Tn.prototype.dispose = function () {
      ;(this._displayList = null), (this._roots = null)
    })
  var Mn = Tn
  function Tn () {
    ;(this._roots = []),
      (this._displayList = []),
      (this._displayListLen = 0),
      (this.displayableSortFunc = Sn)
  }
  var Cn =
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
    In = {
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
        return 1 - In.bounceOut(1 - t)
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
          ? 0.5 * In.bounceIn(2 * t)
          : 0.5 * In.bounceOut(2 * t - 1) + 0.5
      }
    },
    kn = Math.pow,
    Dn = Math.sqrt,
    An = 1e-8,
    Pn = Dn(3),
    Ln = 1 / 3,
    On = Ut(),
    Rn = Ut(),
    Bn = Ut()
  function Nn (t) {
    return -An < t && t < An
  }
  function zn (t) {
    return An < t || t < -An
  }
  function En (t, e, n, i, r) {
    var o = 1 - r
    return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
  }
  function Fn (t, e, n, i, r) {
    var o = 1 - r
    return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
  }
  function Vn (t, e, n, i, r, o) {
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
        ? ((e = r * n + 1.5 * i * (-l - (t = Dn(e)))),
          0 <=
            (s =
              (-n -
                ((t =
                  (t = r * n + 1.5 * i * (-l + t)) < 0
                    ? -kn(-t, Ln)
                    : kn(t, Ln)) +
                  (e = e < 0 ? -kn(-e, Ln) : kn(e, Ln)))) /
              (3 * i)) &&
            s <= 1 &&
            (o[u++] = s))
        : ((t = (2 * r * n - 3 * i * l) / (2 * Dn(r * r * r))),
          (e = Math.acos(t) / 3),
          (s = (-n - 2 * (l = Dn(r)) * (t = Math.cos(e))) / (3 * i)),
          (a = (-n + l * (t + Pn * Math.sin(e))) / (3 * i)),
          (r = (-n + l * (t - Pn * Math.sin(e))) / (3 * i)),
          0 <= s && s <= 1 && (o[u++] = s),
          0 <= a && a <= 1 && (o[u++] = a),
          0 <= r && r <= 1 && (o[u++] = r)),
      u
    )
  }
  function Hn (t, e, n, i, r) {
    var o,
      a = 6 * n - 12 * e + 6 * t,
      i = 9 * e + 3 * i - 3 * t - 9 * n,
      n = 3 * e - 3 * t,
      e = 0
    return (
      Nn(i)
        ? zn(a) && 0 <= (o = -n / a) && o <= 1 && (r[e++] = o)
        : Nn((t = a * a - 4 * i * n))
        ? (r[0] = -a / (2 * i))
        : 0 < t &&
          ((t = (-a - (n = Dn(t))) / (2 * i)),
          0 <= (o = (-a + n) / (2 * i)) && o <= 1 && (r[e++] = o),
          0 <= t) &&
          t <= 1 &&
          (r[e++] = t),
      e
    )
  }
  function Wn (t, e, n, i, r, o) {
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
  function Gn (t, e, n, i, r, o, a, s, l, u, h) {
    var c,
      p,
      d,
      f,
      g = 0.005,
      y = 1 / 0
    ;(On[0] = l), (On[1] = u)
    for (var m = 0; m < 1; m += 0.05)
      (Rn[0] = En(t, n, r, a, m)),
        (Rn[1] = En(e, i, o, s, m)),
        (d = ee(On, Rn)) < y && ((c = m), (y = d))
    for (var y = 1 / 0, v = 0; v < 32 && !(g < 1e-4); v++)
      (p = c + g),
        (Rn[0] = En(t, n, r, a, (f = c - g))),
        (Rn[1] = En(e, i, o, s, f)),
        (d = ee(Rn, On)),
        0 <= f && d < y
          ? ((c = f), (y = d))
          : ((Bn[0] = En(t, n, r, a, p)),
            (Bn[1] = En(e, i, o, s, p)),
            (f = ee(Bn, On)),
            p <= 1 && f < y ? ((c = p), (y = f)) : (g *= 0.5))
    return h && ((h[0] = En(t, n, r, a, c)), (h[1] = En(e, i, o, s, c))), Dn(y)
  }
  function Un (t, e, n, i) {
    var r = 1 - i
    return r * (r * t + 2 * i * e) + i * i * n
  }
  function Xn (t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e))
  }
  function Yn (t, e, n) {
    n = t + n - 2 * e
    return 0 == n ? 0.5 : (t - e) / n
  }
  function qn (t, e, n, i, r) {
    var o = (e - t) * i + t,
      e = (n - e) * i + e,
      i = (e - o) * i + o
    ;(r[0] = t), (r[1] = o), (r[2] = i), (r[3] = i), (r[4] = e), (r[5] = n)
  }
  function jn (t, e, n, i, r, o, a, s, l) {
    var u,
      h = 0.005,
      c = 1 / 0
    ;(On[0] = a), (On[1] = s)
    for (var p = 0; p < 1; p += 0.05)
      (Rn[0] = Un(t, n, r, p)),
        (Rn[1] = Un(e, i, o, p)),
        (y = ee(On, Rn)) < c && ((u = p), (c = y))
    for (var c = 1 / 0, d = 0; d < 32 && !(h < 1e-4); d++) {
      var f = u - h,
        g = u + h,
        y = ((Rn[0] = Un(t, n, r, f)), (Rn[1] = Un(e, i, o, f)), ee(Rn, On))
      0 <= f && y < c
        ? ((u = f), (c = y))
        : ((Bn[0] = Un(t, n, r, g)),
          (Bn[1] = Un(e, i, o, g)),
          (f = ee(Bn, On)),
          g <= 1 && f < c ? ((u = g), (c = f)) : (h *= 0.5))
    }
    return l && ((l[0] = Un(t, n, r, u)), (l[1] = Un(e, i, o, u))), Dn(c)
  }
  var Zn = /cubic-bezier\(([0-9,\.e ]+)\)/
  function Kn (t) {
    t = t && Zn.exec(t)
    if (t) {
      var e,
        t = t[1].split(','),
        n = +kt(t[0]),
        i = +kt(t[1]),
        r = +kt(t[2]),
        o = +kt(t[3])
      if (!isNaN(n + i + r + o))
        return (
          (e = []),
          function (t) {
            return t <= 0
              ? 0
              : 1 <= t
              ? 1
              : Vn(0, n, r, 1, t, e) && En(0, i, o, 1, e[0])
          }
        )
    }
  }
  ;(Qn.prototype.step = function (t, e) {
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
    (Qn.prototype.pause = function () {
      this._paused = !0
    }),
    (Qn.prototype.resume = function () {
      this._paused = !1
    }),
    (Qn.prototype.setEasing = function (t) {
      ;(this.easing = t), (this.easingFunc = S(t) ? t : In[t] || Kn(t))
    })
  var $n = Qn
  function Qn (t) {
    ;(this._inited = !1),
      (this._startTime = 0),
      (this._pausedTime = 0),
      (this._paused = !1),
      (this._life = t.life || 1e3),
      (this._delay = t.delay || 0),
      (this.loop = t.loop || !1),
      (this.onframe = t.onframe || Ht),
      (this.ondestroy = t.ondestroy || Ht),
      (this.onrestart = t.onrestart || Ht),
      t.easing && this.setEasing(t.easing)
  }
  function Jn (t) {
    this.value = t
  }
  ;(ei.prototype.insert = function (t) {
    t = new Jn(t)
    return this.insertEntry(t), t
  }),
    (ei.prototype.insertEntry = function (t) {
      this.head
        ? (((this.tail.next = t).prev = this.tail),
          (t.next = null),
          (this.tail = t))
        : (this.head = this.tail = t),
        this._len++
    }),
    (ei.prototype.remove = function (t) {
      var e = t.prev,
        n = t.next
      e ? (e.next = n) : (this.head = n),
        n ? (n.prev = e) : (this.tail = e),
        (t.next = t.prev = null),
        this._len--
    }),
    (ei.prototype.len = function () {
      return this._len
    }),
    (ei.prototype.clear = function () {
      ;(this.head = this.tail = null), (this._len = 0)
    })
  var ti = ei
  function ei () {
    this._len = 0
  }
  ;(ii.prototype.put = function (t, e) {
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
        n ? (n.value = e) : (n = new Jn(e)),
        (n.key = t),
        r.insertEntry(n),
        (o[t] = n)),
      a
    )
  }),
    (ii.prototype.get = function (t) {
      var t = this._map[t],
        e = this._list
      if (null != t)
        return t !== e.tail && (e.remove(t), e.insertEntry(t)), t.value
    }),
    (ii.prototype.clear = function () {
      this._list.clear(), (this._map = {})
    }),
    (ii.prototype.len = function () {
      return this._list.len()
    })
  var ni = ii
  function ii (t) {
    ;(this._list = new ti()),
      (this._maxSize = 10),
      (this._map = {}),
      (this._maxSize = t)
  }
  var ri = {
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
  function oi (t) {
    return (t = Math.round(t)) < 0 ? 0 : 255 < t ? 255 : t
  }
  function ai (t) {
    return t < 0 ? 0 : 1 < t ? 1 : t
  }
  function si (t) {
    return t.length && '%' === t.charAt(t.length - 1)
      ? oi((parseFloat(t) / 100) * 255)
      : oi(parseInt(t, 10))
  }
  function li (t) {
    return t.length && '%' === t.charAt(t.length - 1)
      ? ai(parseFloat(t) / 100)
      : ai(parseFloat(t))
  }
  function ui (t, e, n) {
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
  function hi (t, e, n) {
    return t + (e - t) * n
  }
  function ci (t, e, n, i, r) {
    return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t
  }
  function pi (t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t
  }
  var di = new ni(20),
    fi = null
  function gi (t, e) {
    fi && pi(fi, e), (fi = di.put(t, fi || e.slice()))
  }
  function yi (t, e) {
    if (t) {
      e = e || []
      var n = di.get(t)
      if (n) return pi(e, n)
      n = (t += '').replace(/ /g, '').toLowerCase()
      if (n in ri) return pi(e, ri[n]), gi(t, e), e
      var i = n.length
      if ('#' === n.charAt(0))
        return 4 === i || 5 === i
          ? 0 <= (r = parseInt(n.slice(1, 4), 16)) && r <= 4095
            ? (ci(
                e,
                ((3840 & r) >> 4) | ((3840 & r) >> 8),
                (240 & r) | ((240 & r) >> 4),
                (15 & r) | ((15 & r) << 4),
                5 === i ? parseInt(n.slice(4), 16) / 15 : 1
              ),
              gi(t, e),
              e)
            : void ci(e, 0, 0, 0, 1)
          : 7 === i || 9 === i
          ? 0 <= (r = parseInt(n.slice(1, 7), 16)) && r <= 16777215
            ? (ci(
                e,
                (16711680 & r) >> 16,
                (65280 & r) >> 8,
                255 & r,
                9 === i ? parseInt(n.slice(7), 16) / 255 : 1
              ),
              gi(t, e),
              e)
            : void ci(e, 0, 0, 0, 1)
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
                ? ci(e, +a[0], +a[1], +a[2], 1)
                : ci(e, 0, 0, 0, 1)
            s = li(a.pop())
          case 'rgb':
            return 3 <= a.length
              ? (ci(
                  e,
                  si(a[0]),
                  si(a[1]),
                  si(a[2]),
                  3 === a.length ? s : li(a[3])
                ),
                gi(t, e),
                e)
              : void ci(e, 0, 0, 0, 1)
          case 'hsla':
            return 4 !== a.length
              ? void ci(e, 0, 0, 0, 1)
              : ((a[3] = li(a[3])), mi(a, e), gi(t, e), e)
          case 'hsl':
            return 3 !== a.length
              ? void ci(e, 0, 0, 0, 1)
              : (mi(a, e), gi(t, e), e)
          default:
            return
        }
      }
      ci(e, 0, 0, 0, 1)
    }
  }
  function mi (t, e) {
    var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
      i = li(t[1]),
      r = li(t[2]),
      i = r <= 0.5 ? r * (i + 1) : r + i - r * i,
      r = 2 * r - i
    return (
      ci(
        (e = e || []),
        oi(255 * ui(r, i, n + 1 / 3)),
        oi(255 * ui(r, i, n)),
        oi(255 * ui(r, i, n - 1 / 3)),
        1
      ),
      4 === t.length && (e[3] = t[3]),
      e
    )
  }
  function vi (t, e) {
    var n = yi(t)
    if (n) {
      for (var i = 0; i < 3; i++)
        (n[i] = e < 0 ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0),
          255 < n[i] ? (n[i] = 255) : n[i] < 0 && (n[i] = 0)
      return wi(n, 4 === n.length ? 'rgba' : 'rgb')
    }
  }
  function _i (t, e, n) {
    var i, r, o
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (n = n || []),
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (o = Math.ceil(t)),
        (r = e[i]),
        (e = e[o]),
        (n[0] = oi(hi(r[0], e[0], (o = t - i)))),
        (n[1] = oi(hi(r[1], e[1], o))),
        (n[2] = oi(hi(r[2], e[2], o))),
        (n[3] = ai(hi(r[3], e[3], o))),
        n
      )
  }
  function xi (t, e, n) {
    var i, r, o, a
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (r = Math.ceil(t)),
        (a = yi(e[i])),
        (e = yi(e[r])),
        (a = wi(
          [
            oi(hi(a[0], e[0], (o = t - i))),
            oi(hi(a[1], e[1], o)),
            oi(hi(a[2], e[2], o)),
            ai(hi(a[3], e[3], o))
          ],
          'rgba'
        )),
        n ? { color: a, leftIndex: i, rightIndex: r, value: t } : a
      )
  }
  function wi (t, e) {
    var n
    if (t && t.length)
      return (
        (n = t[0] + ',' + t[1] + ',' + t[2]),
        ('rgba' !== e && 'hsva' !== e && 'hsla' !== e) || (n += ',' + t[3]),
        e + '(' + n + ')'
      )
  }
  function bi (t, e) {
    t = yi(t)
    return t
      ? ((0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) * t[3]) / 255 +
          (1 - t[3]) * e
      : 0
  }
  var Si = Object.freeze({
      __proto__: null,
      fastLerp: _i,
      fastMapToColor: _i,
      lerp: xi,
      lift: vi,
      lum: bi,
      mapToColor: xi,
      modifyAlpha: function (t, e) {
        if ((t = yi(t)) && null != e) return (t[3] = ai(e)), wi(t, 'rgba')
      },
      modifyHSL: function (t, e, n, i) {
        var r = yi(t)
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
            null != n && (r[1] = li(n)),
            null != i && (r[2] = li(i)),
            wi(mi(r), 'rgba')
          )
      },
      parse: yi,
      random: function () {
        return wi(
          [
            Math.round(255 * Math.random()),
            Math.round(255 * Math.random()),
            Math.round(255 * Math.random())
          ],
          'rgb'
        )
      },
      stringify: wi,
      toHex: function (t) {
        if ((t = yi(t)))
          return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2])
            .toString(16)
            .slice(1)
      }
    }),
    Mi = Math.round
  function Ti (t) {
    var e, n
    return (
      t && 'transparent' !== t
        ? 'string' == typeof t &&
          -1 < t.indexOf('rgba') &&
          (n = yi(t)) &&
          ((t = 'rgb(' + n[0] + ',' + n[1] + ',' + n[2] + ')'), (e = n[3]))
        : (t = 'none'),
      { color: t, opacity: null == e ? 1 : e }
    )
  }
  function Ci (t) {
    return t < 1e-4 && -1e-4 < t
  }
  function Ii (t) {
    return Mi(1e3 * t) / 1e3
  }
  function ki (t) {
    return Mi(1e4 * t) / 1e4
  }
  var Di = { left: 'start', right: 'end', center: 'middle', middle: 'middle' }
  function Ai (t) {
    return t && !!t.image
  }
  function Pi (t) {
    return Ai(t) || ((t = t) && !!t.svgElement)
  }
  function Li (t) {
    return 'linear' === t.type
  }
  function Oi (t) {
    return 'radial' === t.type
  }
  function Ri (t) {
    return t && ('linear' === t.type || 'radial' === t.type)
  }
  function Bi (t) {
    return 'url(#' + t + ')'
  }
  function Ni (t) {
    ;(t = t.getGlobalScale()), (t = Math.max(t[0], t[1]))
    return Math.max(Math.ceil(Math.log(t) / Math.log(10)), 1)
  }
  function zi (t) {
    var e = t.x || 0,
      n = t.y || 0,
      i = (t.rotation || 0) * Wt,
      r = N(t.scaleX, 1),
      o = N(t.scaleY, 1),
      a = t.skewX || 0,
      t = t.skewY || 0,
      s = []
    return (
      (e || n) && s.push('translate(' + e + 'px,' + n + 'px)'),
      i && s.push('rotate(' + i + ')'),
      (1 === r && 1 === o) || s.push('scale(' + r + ',' + o + ')'),
      (a || t) && s.push('skew(' + Mi(a * Wt) + 'deg, ' + Mi(t * Wt) + 'deg)'),
      s.join(' ')
    )
  }
  var Ei =
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
    Fi = Array.prototype.slice
  function Vi (t, e, n) {
    return (e - t) * n + t
  }
  function Hi (t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = Vi(e[o], n[o], i)
    return t
  }
  function Wi (t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = e[o] + n[o] * i
    return t
  }
  function Gi (t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; a < r; a++) {
      t[a] || (t[a] = [])
      for (var s = 0; s < o; s++) t[a][s] = e[a][s] + n[a][s] * i
    }
    return t
  }
  function Ui (t) {
    if (ut(t)) {
      var e = t.length
      if (ut(t[0])) {
        for (var n = [], i = 0; i < e; i++) n.push(Fi.call(t[i]))
        return n
      }
      return Fi.call(t)
    }
    return t
  }
  function Xi (t) {
    return (
      (t[0] = Math.floor(t[0]) || 0),
      (t[1] = Math.floor(t[1]) || 0),
      (t[2] = Math.floor(t[2]) || 0),
      (t[3] = null == t[3] ? 1 : t[3]),
      'rgba(' + t.join(',') + ')'
    )
  }
  function Yi (t) {
    return 4 === t || 5 === t
  }
  function qi (t) {
    return 1 === t || 2 === t
  }
  var ji = [0, 0, 0, 0],
    Zi =
      ((Qi.prototype.isFinished = function () {
        return this._finished
      }),
      (Qi.prototype.setFinished = function () {
        ;(this._finished = !0),
          this._additiveTrack && this._additiveTrack.setFinished()
      }),
      (Qi.prototype.needsAnimate = function () {
        return 1 <= this.keyframes.length
      }),
      (Qi.prototype.getAdditiveTrack = function () {
        return this._additiveTrack
      }),
      (Qi.prototype.addKeyframe = function (t, e, n) {
        this._needsSort = !0
        var i,
          r = this.keyframes,
          o = r.length,
          a = !1,
          s = 6,
          l = e,
          u =
            (ut(e)
              ? ((1 == (s = i = ut((i = e) && i[0]) ? 2 : 1) && !gt(e[0])) ||
                  (2 == i && !gt(e[0][0]))) &&
                (a = !0)
              : gt(e) && !bt(e)
              ? (s = 0)
              : H(e)
              ? isNaN(+e)
                ? (i = yi(e)) && ((l = i), (s = 3))
                : (s = 0)
              : _t(e) &&
                (((u = O({}, l)).colorStops = F(e.colorStops, function (t) {
                  return { offset: t.offset, color: yi(t.color) }
                })),
                Li(e) ? (s = 4) : Oi(e) && (s = 5),
                (l = u)),
            0 === o
              ? (this.valType = s)
              : (s === this.valType && 6 !== s) || (a = !0),
            (this.discrete = this.discrete || a),
            { time: t, value: l, rawValue: e, percent: 0 })
        return (
          n && ((u.easing = n), (u.easingFunc = S(n) ? n : In[n] || Kn(n))),
          r.push(u),
          u
        )
      }),
      (Qi.prototype.prepare = function (t, e) {
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
            s = qi(i),
            l = Yi(i),
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
                      g.push(1 === f ? y[v] : Fi.call(y[v]))
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
              ? (n[u].additiveValue = Wi([], n[u].value, C, -1))
              : qi(i) &&
                (n[u].additiveValue = (1 === i ? Wi : Gi)(
                  [],
                  n[u].value,
                  C,
                  -1
                ))
        }
      }),
      (Qi.prototype.step = function (t, e) {
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
            (g = s ? this._additiveValue : d ? ji : t[p]),
            (qi(u) || d) && (g = g || (this._additiveValue = [])),
            this.discrete
              ? (t[p] = (o < 1 ? i : r).rawValue)
              : qi(u)
              ? (1 === u
                  ? Hi
                  : function (t, e, n, i) {
                      for (
                        var r = e.length, o = r && e[0].length, a = 0;
                        a < r;
                        a++
                      ) {
                        t[a] || (t[a] = [])
                        for (var s = 0; s < o; s++)
                          t[a][s] = Vi(e[a][s], n[a][s], i)
                      }
                    })(g, i[l], r[l], o)
              : Yi(u)
              ? ((f = i[l]),
                (a = r[l]),
                (t[p] = {
                  type: (u = 4 === u) ? 'linear' : 'radial',
                  x: Vi(f.x, a.x, o),
                  y: Vi(f.y, a.y, o),
                  colorStops: F(f.colorStops, function (t, e) {
                    e = a.colorStops[e]
                    return {
                      offset: Vi(t.offset, e.offset, o),
                      color: Xi(Hi([], t.color, e.color, o))
                    }
                  }),
                  global: a.global
                }),
                u
                  ? ((t[p].x2 = Vi(f.x2, a.x2, o)),
                    (t[p].y2 = Vi(f.y2, a.y2, o)))
                  : (t[p].r = Vi(f.r, a.r, o)))
              : d
              ? (Hi(g, i[l], r[l], o), s || (t[p] = Xi(g)))
              : ((u = Vi(i[l], r[l], o)),
                s ? (this._additiveValue = u) : (t[p] = u)),
            s) &&
            this._addToTarget(t)
        }
      }),
      (Qi.prototype._addToTarget = function (t) {
        var e = this.valType,
          n = this.propName,
          i = this._additiveValue
        0 === e
          ? (t[n] = t[n] + i)
          : 3 === e
          ? (yi(t[n], ji), Wi(ji, ji, i, 1), (t[n] = Xi(ji)))
          : 1 === e
          ? Wi(t[n], t[n], i, 1)
          : 2 === e && Gi(t[n], t[n], i, 1)
      }),
      Qi),
    Ki =
      (($i.prototype.getMaxTime = function () {
        return this._maxTime
      }),
      ($i.prototype.getDelay = function () {
        return this._delay
      }),
      ($i.prototype.getLoop = function () {
        return this._loop
      }),
      ($i.prototype.getTarget = function () {
        return this._target
      }),
      ($i.prototype.changeTarget = function (t) {
        this._target = t
      }),
      ($i.prototype.when = function (t, e, n) {
        return this.whenWithKeys(t, e, B(e), n)
      }),
      ($i.prototype.whenWithKeys = function (t, e, n, i) {
        for (var r = this._tracks, o = 0; o < n.length; o++) {
          var a = n[o]
          if (!(l = r[a])) {
            var s,
              l = (r[a] = new Zi(a)),
              u = void 0,
              h = this._getAdditiveTrack(a)
            if (
              (h
                ? ((u = (s = (s = h.keyframes)[s.length - 1]) && s.value),
                  3 === h.valType && (u = u && Xi(u)))
                : (u = this._target[a]),
              null == u)
            )
              continue
            0 < t && l.addKeyframe(0, Ui(u), i), this._trackKeys.push(a)
          }
          l.addKeyframe(t, Ui(e[a]), i)
        }
        return (this._maxTime = Math.max(this._maxTime, t)), this
      }),
      ($i.prototype.pause = function () {
        this._clip.pause(), (this._paused = !0)
      }),
      ($i.prototype.resume = function () {
        this._clip.resume(), (this._paused = !1)
      }),
      ($i.prototype.isPaused = function () {
        return !!this._paused
      }),
      ($i.prototype.duration = function (t) {
        return (this._maxTime = t), (this._force = !0), this
      }),
      ($i.prototype._doneCallback = function () {
        this._setTracksFinished(), (this._clip = null)
        var t = this._doneCbs
        if (t) for (var e = t.length, n = 0; n < e; n++) t[n].call(this)
      }),
      ($i.prototype._abortedCallback = function () {
        this._setTracksFinished()
        var t = this.animation,
          e = this._abortedCbs
        if ((t && t.removeClip(this._clip), (this._clip = null), e))
          for (var n = 0; n < e.length; n++) e[n].call(this)
      }),
      ($i.prototype._setTracksFinished = function () {
        for (
          var t = this._tracks, e = this._trackKeys, n = 0;
          n < e.length;
          n++
        )
          t[e[n]].setFinished()
      }),
      ($i.prototype._getAdditiveTrack = function (t) {
        var e,
          n = this._additiveAnimators
        if (n)
          for (var i = 0; i < n.length; i++) {
            var r = n[i].getTrack(t)
            r && (e = r)
          }
        return e
      }),
      ($i.prototype.start = function (t) {
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
              ? ((e = new $n({
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
      ($i.prototype.stop = function (t) {
        var e
        this._clip &&
          ((e = this._clip), t && e.onframe(1), this._abortedCallback())
      }),
      ($i.prototype.delay = function (t) {
        return (this._delay = t), this
      }),
      ($i.prototype.during = function (t) {
        return (
          t &&
            (this._onframeCbs || (this._onframeCbs = []),
            this._onframeCbs.push(t)),
          this
        )
      }),
      ($i.prototype.done = function (t) {
        return (
          t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
          this
        )
      }),
      ($i.prototype.aborted = function (t) {
        return (
          t &&
            (this._abortedCbs || (this._abortedCbs = []),
            this._abortedCbs.push(t)),
          this
        )
      }),
      ($i.prototype.getClip = function () {
        return this._clip
      }),
      ($i.prototype.getTrack = function (t) {
        return this._tracks[t]
      }),
      ($i.prototype.getTracks = function () {
        var e = this
        return F(this._trackKeys, function (t) {
          return e._tracks[t]
        })
      }),
      ($i.prototype.stopTracks = function (t, e) {
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
      ($i.prototype.saveTo = function (t, e, n) {
        if (t) {
          e = e || this._trackKeys
          for (var i = 0; i < e.length; i++) {
            var r = e[i],
              o = this._tracks[r]
            o &&
              !o.isFinished() &&
              (o = (o = o.keyframes)[n ? 0 : o.length - 1]) &&
              (t[r] = Ui(o.rawValue))
          }
        }
      }),
      ($i.prototype.__changeFinalValue = function (t, e) {
        e = e || B(t)
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
      $i)
  function $i (t, e, n, i) {
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
  function Qi (t) {
    ;(this.keyframes = []),
      (this.discrete = !1),
      (this._invalid = !1),
      (this._needsSort = !1),
      (this._lastFr = 0),
      (this._lastFrP = 0),
      (this.propName = t)
  }
  function Ji () {
    return new Date().getTime()
  }
  u(nr, (tr = he)),
    (nr.prototype.addClip = function (t) {
      t.animation && this.removeClip(t),
        this._head
          ? (((this._tail.next = t).prev = this._tail),
            (t.next = null),
            (this._tail = t))
          : (this._head = this._tail = t),
        (t.animation = this)
    }),
    (nr.prototype.addAnimator = function (t) {
      t.animation = this
      t = t.getClip()
      t && this.addClip(t)
    }),
    (nr.prototype.removeClip = function (t) {
      var e, n
      t.animation &&
        ((e = t.prev),
        (n = t.next),
        e ? (e.next = n) : (this._head = n),
        n ? (n.prev = e) : (this._tail = e),
        (t.next = t.prev = t.animation = null))
    }),
    (nr.prototype.removeAnimator = function (t) {
      var e = t.getClip()
      e && this.removeClip(e), (t.animation = null)
    }),
    (nr.prototype.update = function (t) {
      for (
        var e = Ji() - this._pausedTime, n = e - this._time, i = this._head;
        i;

      )
        var r = i.next,
          i = (i.step(e, n) && (i.ondestroy(), this.removeClip(i)), r)
      ;(this._time = e),
        t ||
          (this.trigger('frame', n), this.stage.update && this.stage.update())
    }),
    (nr.prototype._startLoop = function () {
      var e = this
      ;(this._running = !0),
        Cn(function t () {
          e._running && (Cn(t), !e._paused) && e.update()
        })
    }),
    (nr.prototype.start = function () {
      this._running ||
        ((this._time = Ji()), (this._pausedTime = 0), this._startLoop())
    }),
    (nr.prototype.stop = function () {
      this._running = !1
    }),
    (nr.prototype.pause = function () {
      this._paused || ((this._pauseStart = Ji()), (this._paused = !0))
    }),
    (nr.prototype.resume = function () {
      this._paused &&
        ((this._pausedTime += Ji() - this._pauseStart), (this._paused = !1))
    }),
    (nr.prototype.clear = function () {
      for (var t = this._head; t; ) {
        var e = t.next
        ;(t.prev = t.next = t.animation = null), (t = e)
      }
      this._head = this._tail = null
    }),
    (nr.prototype.isFinished = function () {
      return null == this._head
    }),
    (nr.prototype.animate = function (t, e) {
      ;(e = e || {}), this.start()
      t = new Ki(t, e.loop)
      return this.addAnimator(t), t
    })
  var tr,
    er = nr
  function nr (t) {
    var e = tr.call(this) || this
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
  var ir,
    rr = b.domSupported,
    or =
      ((ir = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 }),
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
          return ir.hasOwnProperty(e) ? e : t
        })
      }),
    ar = ['mousemove', 'mouseup'],
    sr = ['pointermove', 'pointerup'],
    lr = !1
  function ur (t) {
    t = t.pointerType
    return 'pen' === t || 'touch' === t
  }
  function hr (t) {
    t && (t.zrByTouch = !0)
  }
  function cr (t, e) {
    for (
      var n = e, i = !1;
      n &&
      9 !== n.nodeType &&
      !(i = n.domBelongToZr || (n !== e && n === t.painterRoot));

    )
      n = n.parentNode
    return i
  }
  var pr = function (t, e) {
      ;(this.stopPropagation = Ht),
        (this.stopImmediatePropagation = Ht),
        (this.preventDefault = Ht),
        (this.type = e.type),
        (this.target = this.currentTarget = t.dom),
        (this.pointerType = e.pointerType),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY)
    },
    dr = {
      mousedown: function (t) {
        ;(t = ke(this.dom, t)),
          (this.__mayPointerCapture = [t.zrX, t.zrY]),
          this.trigger('mousedown', t)
      },
      mousemove: function (t) {
        t = ke(this.dom, t)
        var e = this.__mayPointerCapture
        !e ||
          (t.zrX === e[0] && t.zrY === e[1]) ||
          this.__togglePointerCapture(!0),
          this.trigger('mousemove', t)
      },
      mouseup: function (t) {
        ;(t = ke(this.dom, t)),
          this.__togglePointerCapture(!1),
          this.trigger('mouseup', t)
      },
      mouseout: function (t) {
        cr(this, (t = ke(this.dom, t)).toElement || t.relatedTarget) ||
          (this.__pointerCapturing && (t.zrEventControl = 'no_globalout'),
          this.trigger('mouseout', t))
      },
      wheel: function (t) {
        ;(lr = !0), (t = ke(this.dom, t)), this.trigger('mousewheel', t)
      },
      mousewheel: function (t) {
        lr || ((t = ke(this.dom, t)), this.trigger('mousewheel', t))
      },
      touchstart: function (t) {
        hr((t = ke(this.dom, t))),
          (this.__lastTouchMoment = new Date()),
          this.handler.processGesture(t, 'start'),
          dr.mousemove.call(this, t),
          dr.mousedown.call(this, t)
      },
      touchmove: function (t) {
        hr((t = ke(this.dom, t))),
          this.handler.processGesture(t, 'change'),
          dr.mousemove.call(this, t)
      },
      touchend: function (t) {
        hr((t = ke(this.dom, t))),
          this.handler.processGesture(t, 'end'),
          dr.mouseup.call(this, t),
          +new Date() - +this.__lastTouchMoment < 300 && dr.click.call(this, t)
      },
      pointerdown: function (t) {
        dr.mousedown.call(this, t)
      },
      pointermove: function (t) {
        ur(t) || dr.mousemove.call(this, t)
      },
      pointerup: function (t) {
        dr.mouseup.call(this, t)
      },
      pointerout: function (t) {
        ur(t) || dr.mouseout.call(this, t)
      }
    },
    fr =
      (R(['click', 'dblclick', 'contextmenu'], function (e) {
        dr[e] = function (t) {
          ;(t = ke(this.dom, t)), this.trigger(e, t)
        }
      }),
      {
        pointermove: function (t) {
          ur(t) || fr.mousemove.call(this, t)
        },
        pointerup: function (t) {
          fr.mouseup.call(this, t)
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
  function gr (i, r) {
    var o = r.domHandlers
    b.pointerEventsSupported
      ? R(or.pointer, function (e) {
          mr(r, e, function (t) {
            o[e].call(i, t)
          })
        })
      : (b.touchEventsSupported &&
          R(or.touch, function (n) {
            mr(r, n, function (t) {
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
        R(or.mouse, function (e) {
          mr(r, e, function (t) {
            ;(t = Ie(t)), r.touching || o[e].call(i, t)
          })
        }))
  }
  function yr (i, r) {
    function t (n) {
      mr(
        r,
        n,
        function (t) {
          var e
          ;(t = Ie(t)),
            cr(i, t.target) ||
              ((e = t),
              (t = ke(i.dom, new pr(i, e), !0)),
              r.domHandlers[n].call(i, t))
        },
        { capture: !0 }
      )
    }
    b.pointerEventsSupported ? R(sr, t) : b.touchEventsSupported || R(ar, t)
  }
  function mr (t, e, n, i) {
    ;(t.mounted[e] = n),
      (t.listenerOpts[e] = i),
      t.domTarget.addEventListener(e, n, i)
  }
  function vr (t) {
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
  function _r (t, e) {
    ;(this.mounted = {}),
      (this.listenerOpts = {}),
      (this.touching = !1),
      (this.domTarget = t),
      (this.domHandlers = e)
  }
  u(br, (xr = he)),
    (br.prototype.dispose = function () {
      vr(this._localHandlerScope), rr && vr(this._globalHandlerScope)
    }),
    (br.prototype.setCursor = function (t) {
      this.dom.style && (this.dom.style.cursor = t || 'default')
    }),
    (br.prototype.__togglePointerCapture = function (t) {
      var e
      ;(this.__mayPointerCapture = null),
        rr &&
          +this.__pointerCapturing ^ +t &&
          ((this.__pointerCapturing = t),
          (e = this._globalHandlerScope),
          t ? yr(this, e) : vr(e))
    })
  var xr,
    wr = br
  function br (t, e) {
    var n = xr.call(this) || this
    return (
      (n.__pointerCapturing = !1),
      (n.dom = t),
      (n.painterRoot = e),
      (n._localHandlerScope = new _r(t, dr)),
      rr && (n._globalHandlerScope = new _r(document, fr)),
      gr(n, n._localHandlerScope),
      n
    )
  }
  var n = 1,
    Sr = (n = b.hasGlobalWindow
      ? Math.max(
          window.devicePixelRatio ||
            (window.screen &&
              window.screen.deviceXDPI / window.screen.logicalXDPI) ||
            1,
          1
        )
      : n),
    Mr = '#333',
    Tr = '#ccc',
    Cr = Be
  function Ir (t) {
    return 5e-5 < t || t < -5e-5
  }
  var kr = [],
    Dr = [],
    Ar = Re(),
    Pr = Math.abs,
    Lr =
      ((Or.prototype.getLocalTransform = function (t) {
        return Or.getLocalTransform(this, t)
      }),
      (Or.prototype.setPosition = function (t) {
        ;(this.x = t[0]), (this.y = t[1])
      }),
      (Or.prototype.setScale = function (t) {
        ;(this.scaleX = t[0]), (this.scaleY = t[1])
      }),
      (Or.prototype.setSkew = function (t) {
        ;(this.skewX = t[0]), (this.skewY = t[1])
      }),
      (Or.prototype.setOrigin = function (t) {
        ;(this.originX = t[0]), (this.originY = t[1])
      }),
      (Or.prototype.needLocalTransform = function () {
        return (
          Ir(this.rotation) ||
          Ir(this.x) ||
          Ir(this.y) ||
          Ir(this.scaleX - 1) ||
          Ir(this.scaleY - 1) ||
          Ir(this.skewX) ||
          Ir(this.skewY)
        )
      }),
      (Or.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          n = this.transform
        e || t
          ? ((n = n || Re()),
            e ? this.getLocalTransform(n) : Cr(n),
            t && (e ? ze(n, t, n) : Ne(n, t)),
            (this.transform = n),
            this._resolveGlobalScaleRatio(n))
          : n && (Cr(n), (this.invTransform = null))
      }),
      (Or.prototype._resolveGlobalScaleRatio = function (t) {
        var e,
          n,
          i = this.globalScaleRatio
        null != i &&
          1 !== i &&
          (this.getGlobalScale(kr),
          (n = ((kr[1] - (n = kr[1] < 0 ? -1 : 1)) * i + n) / kr[1] || 0),
          (t[0] *= i =
            ((kr[0] - (e = kr[0] < 0 ? -1 : 1)) * i + e) / kr[0] || 0),
          (t[1] *= i),
          (t[2] *= n),
          (t[3] *= n)),
          (this.invTransform = this.invTransform || Re()),
          He(this.invTransform, t)
      }),
      (Or.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t; ) e.push(t), (t = t.parent)
        for (; (t = e.pop()); ) t.updateTransform()
        return this.transform
      }),
      (Or.prototype.setLocalTransform = function (t) {
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
      (Or.prototype.decomposeTransform = function () {
        var t, e, n
        this.transform &&
          ((e = this.parent),
          (t = this.transform),
          e && e.transform && (ze(Dr, e.invTransform, t), (t = Dr)),
          (e = this.originX),
          (n = this.originY),
          (e || n) &&
            ((Ar[4] = e),
            (Ar[5] = n),
            ze(Dr, t, Ar),
            (Dr[4] -= e),
            (Dr[5] -= n),
            (t = Dr)),
          this.setLocalTransform(t))
      }),
      (Or.prototype.getGlobalScale = function (t) {
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
      (Or.prototype.transformCoordToLocal = function (t, e) {
        ;(t = [t, e]), (e = this.invTransform)
        return e && ie(t, t, e), t
      }),
      (Or.prototype.transformCoordToGlobal = function (t, e) {
        ;(t = [t, e]), (e = this.transform)
        return e && ie(t, t, e), t
      }),
      (Or.prototype.getLineScale = function () {
        var t = this.transform
        return t && 1e-10 < Pr(t[0] - 1) && 1e-10 < Pr(t[3] - 1)
          ? Math.sqrt(Pr(t[0] * t[3] - t[2] * t[1]))
          : 1
      }),
      (Or.prototype.copyTransform = function (t) {
        Br(this, t)
      }),
      (Or.getLocalTransform = function (t, e) {
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
          l && Fe(e, e, l),
          (e[4] += n + u),
          (e[5] += i + h),
          e
        )
      }),
      (Or.initDefaultProps =
        (((n = Or.prototype).scaleX = n.scaleY = n.globalScaleRatio = 1),
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
      Or)
  function Or () {}
  var Rr = [
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
  function Br (t, e) {
    for (var n = 0; n < Rr.length; n++) {
      var i = Rr[n]
      t[i] = e[i]
    }
  }
  var Nr = {}
  function zr (t, e) {
    var n = Nr[(e = e || K)],
      i = (n = n || (Nr[e] = new ni(500))).get(t)
    return null == i && ((i = U.measureText(t, e).width), n.put(t, i)), i
  }
  function Er (t, e, n, i) {
    ;(t = zr(t, e)), (e = Wr(e)), (n = Vr(0, t, n)), (i = Hr(0, e, i))
    return new W(n, i, t, e)
  }
  function Fr (t, e, n, i) {
    var r = ((t || '') + '').split('\n')
    if (1 === r.length) return Er(r[0], e, n, i)
    for (var o = new W(0, 0, 0, 0), a = 0; a < r.length; a++) {
      var s = Er(r[a], e, n, i)
      0 === a ? o.copy(s) : o.union(s)
    }
    return o
  }
  function Vr (t, e, n) {
    return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t
  }
  function Hr (t, e, n) {
    return 'middle' === n ? (t -= e / 2) : 'bottom' === n && (t -= e), t
  }
  function Wr (t) {
    return zr('国', t)
  }
  function Gr (t, e) {
    return 'string' == typeof t
      ? 0 <= t.lastIndexOf('%')
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : t
  }
  function Ur (t, e, n) {
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
      (l += Gr(i[0], n.width)), (u += Gr(i[1], n.height)), (c = h = null)
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
  var Xr,
    Yr = '__zr_normal__',
    qr = Rr.concat(['ignore']),
    jr = ht(
      Rr,
      function (t, e) {
        return (t[e] = !0), t
      },
      { ignore: !1 }
    ),
    Zr = {},
    Kr = new W(0, 0, 0, 0),
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
            ((u = Kr),
            t.layoutRect
              ? u.copy(t.layoutRect)
              : u.copy(this.getBoundingRect()),
            l || u.applyTransform(this.transform),
            this.calculateTextPosition
              ? this.calculateTextPosition(Zr, t, u)
              : Ur(Zr, t, u),
            (e.x = Zr.x),
            (e.y = Zr.y),
            (n = Zr.align),
            (i = Zr.verticalAlign),
            (o = t.origin)) &&
            null != t.rotation &&
            ((s = a = void 0),
            (s =
              'center' === o
                ? ((a = 0.5 * u.width), 0.5 * u.height)
                : ((a = Gr(o[0], u.width)), Gr(o[1], u.height))),
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
          (c.__dirty |= _n),
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
        return this.__zr && this.__zr.isDarkMode() ? Tr : Mr
      }),
      (i.prototype.getOutsideStroke = function (t) {
        for (
          var e = this.__zr && this.__zr.getBackgroundColor(),
            n = 'string' == typeof e && yi(e),
            i = (n = n || [255, 255, 255, 1])[3],
            r = this.__zr.isDarkMode(),
            o = 0;
          o < 3;
          o++
        )
          n[o] = n[o] * i + (r ? 0 : 255) * (1 - i)
        return (n[3] = 1), wi(n, 'rgba')
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
          for (var n = B(t), i = 0; i < n.length; i++) {
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
            (r && r !== Yr) ||
            ((r = (r = i.targetName) ? e[r] : e), i.saveTo(r))
        }
      }),
      (i.prototype._innerSaveToNormal = function (t) {
        var e = (e = this._normalState) || (this._normalState = {})
        t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
          this._savePrimaryToNormal(t, e, qr)
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
        this.useState(Yr, !1, t)
      }),
      (i.prototype.useState = function (t, e, n, i) {
        var r = t === Yr
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
                  (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~_n)),
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
                (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~_n))
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
        for (var s = {}, l = !1, u = 0; u < qr.length; u++) {
          var h = qr[u],
            c = r && jr[h]
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
          (t.innerTransformable = new Lr()),
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
        this.__dirty |= _n
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
          i = new Ki(i, e, n)
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
        Qr(this, t, e, n)
      }),
      (i.prototype.animateFrom = function (t, e, n) {
        Qr(this, t, e, n, !0)
      }),
      (i.prototype._transitionState = function (t, e, n, i) {
        for (var r = Qr(this, e, n, i), o = 0; o < r.length; o++)
          r[o].__fromStateTransition = t
      }),
      (i.prototype.getBoundingRect = function () {
        return null
      }),
      (i.prototype.getPaintRect = function () {
        return null
      }),
      (i.initDefaultProps =
        (((Xr = i.prototype).type = 'element'),
        (Xr.name = ''),
        (Xr.ignore =
          Xr.silent =
          Xr.isGroup =
          Xr.draggable =
          Xr.dragging =
          Xr.ignoreClip =
          Xr.__inHover =
            !1),
        (Xr.__dirty = _n),
        void (
          Object.defineProperty &&
          ($r('position', '_legacyPos', 'x', 'y'),
          $r('scale', '_legacyScale', 'scaleX', 'scaleY'),
          $r('origin', '_legacyOrigin', 'originX', 'originY'))
        ))),
      i)
  function i (t) {
    ;(this.id = it++),
      (this.animators = []),
      (this.currentStates = []),
      (this.states = {}),
      this._init(t)
  }
  function $r (t, e, n, i) {
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
    Object.defineProperty(Xr, t, {
      get: function () {
        return this[e] || r(this, (this[e] = [])), this[e]
      },
      set: function (t) {
        ;(this[n] = t[0]), (this[i] = t[1]), (this[e] = t), r(this, t)
      }
    })
  }
  function Qr (t, e, n, i, r) {
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
            var u = B(r),
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
              ? !L(_) || ut(_) || _t(_)
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
                return !eo(r[t], i[t])
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
                (C[(v = y[w])] = Ui(i[v])), to(i, r, v)
            ;((S = new Ki(
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
  function Jr (t, e, n) {
    for (var i = 0; i < n; i++) t[i] = e[i]
  }
  function to (t, e, n) {
    if (ut(e[n]))
      if ((ut(t[n]) || (t[n] = []), mt(e[n]))) {
        var i = e[n].length
        t[n].length !== i &&
          ((t[n] = new e[n].constructor(i)), Jr(t[n], e[n], i))
      } else {
        var r = e[n],
          o = t[n],
          a = r.length
        if (ut(r[0]))
          for (var s = r[0].length, l = 0; l < a; l++)
            o[l] ? Jr(o[l], r[l], s) : (o[l] = Array.prototype.slice.call(r[l]))
        else Jr(o, r, a)
        o.length = r.length
      }
    else t[n] = e[n]
  }
  function eo (t, e) {
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
  lt(n, he), lt(n, Lr)
  u(ro, (no = n)),
    (ro.prototype.childrenRef = function () {
      return this._children
    }),
    (ro.prototype.children = function () {
      return this._children.slice()
    }),
    (ro.prototype.childAt = function (t) {
      return this._children[t]
    }),
    (ro.prototype.childOfName = function (t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n]
    }),
    (ro.prototype.childCount = function () {
      return this._children.length
    }),
    (ro.prototype.add = function (t) {
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          (this._children.push(t), this._doAdd(t)),
        this
      )
    }),
    (ro.prototype.addBefore = function (t, e) {
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
    (ro.prototype.replace = function (t, e) {
      t = I(this._children, t)
      return 0 <= t && this.replaceAt(e, t), this
    }),
    (ro.prototype.replaceAt = function (t, e) {
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
    (ro.prototype._doAdd = function (t) {
      t.parent && t.parent.remove(t)
      var e = (t.parent = this).__zr
      e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh()
    }),
    (ro.prototype.remove = function (t) {
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
    (ro.prototype.removeAll = function () {
      for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
        var i = t[n]
        e && i.removeSelfFromZr(e), (i.parent = null)
      }
      return (t.length = 0), this
    }),
    (ro.prototype.eachChild = function (t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i]
        t.call(e, r, i)
      }
      return this
    }),
    (ro.prototype.traverse = function (t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n],
          r = t.call(e, i)
        i.isGroup && !r && i.traverse(t, e)
      }
      return this
    }),
    (ro.prototype.addSelfToZr = function (t) {
      no.prototype.addSelfToZr.call(this, t)
      for (var e = 0; e < this._children.length; e++)
        this._children[e].addSelfToZr(t)
    }),
    (ro.prototype.removeSelfFromZr = function (t) {
      no.prototype.removeSelfFromZr.call(this, t)
      for (var e = 0; e < this._children.length; e++)
        this._children[e].removeSelfFromZr(t)
    }),
    (ro.prototype.getBoundingRect = function (t) {
      for (
        var e = new W(0, 0, 0, 0),
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
            ? (W.applyTransform(e, a, s), (r = r || e.clone()).union(e))
            : (r = r || a.clone()).union(a))
      }
      return r || e
    })
  var no,
    io = ro
  function ro (t) {
    var e = no.call(this) || this
    return (e.isGroup = !0), (e._children = []), e.attr(t), e
  }
  io.prototype.type = 'group'
  var oo = {},
    ao = {}
  ;(lo.prototype.add = function (t) {
    t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
  }),
    (lo.prototype.remove = function (t) {
      t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
    }),
    (lo.prototype.configLayer = function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this.refresh()
    }),
    (lo.prototype.setBackgroundColor = function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
        this.refresh(),
        (this._backgroundColor = t),
        (this._darkMode = (function (t) {
          if (t) {
            if ('string' == typeof t) return bi(t, 1) < 0.4
            if (t.colorStops) {
              for (var e = t.colorStops, n = 0, i = e.length, r = 0; r < i; r++)
                n += bi(e[r].color, 1)
              return (n /= i) < 0.4
            }
          }
          return !1
        })(t))
    }),
    (lo.prototype.getBackgroundColor = function () {
      return this._backgroundColor
    }),
    (lo.prototype.setDarkMode = function (t) {
      this._darkMode = t
    }),
    (lo.prototype.isDarkMode = function () {
      return this._darkMode
    }),
    (lo.prototype.refreshImmediately = function (t) {
      t || this.animation.update(!0),
        (this._needsRefresh = !1),
        this.painter.refresh(),
        (this._needsRefresh = !1)
    }),
    (lo.prototype.refresh = function () {
      ;(this._needsRefresh = !0), this.animation.start()
    }),
    (lo.prototype.flush = function () {
      this._flush(!1)
    }),
    (lo.prototype._flush = function (t) {
      var e,
        n = Ji(),
        t =
          (this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
          this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately()),
          Ji())
      e
        ? ((this._stillFrameAccum = 0),
          this.trigger('rendered', { elapsedTime: t - n }))
        : 0 < this._sleepAfterStill &&
          (this._stillFrameAccum++,
          this._stillFrameAccum > this._sleepAfterStill) &&
          this.animation.stop()
    }),
    (lo.prototype.setSleepAfterStill = function (t) {
      this._sleepAfterStill = t
    }),
    (lo.prototype.wakeUp = function () {
      this.animation.start(), (this._stillFrameAccum = 0)
    }),
    (lo.prototype.refreshHover = function () {
      this._needsRefreshHover = !0
    }),
    (lo.prototype.refreshHoverImmediately = function () {
      ;(this._needsRefreshHover = !1),
        this.painter.refreshHover &&
          'canvas' === this.painter.getType() &&
          this.painter.refreshHover()
    }),
    (lo.prototype.resize = function (t) {
      this.painter.resize((t = t || {}).width, t.height), this.handler.resize()
    }),
    (lo.prototype.clearAnimation = function () {
      this.animation.clear()
    }),
    (lo.prototype.getWidth = function () {
      return this.painter.getWidth()
    }),
    (lo.prototype.getHeight = function () {
      return this.painter.getHeight()
    }),
    (lo.prototype.setCursorStyle = function (t) {
      this.handler.setCursorStyle(t)
    }),
    (lo.prototype.findHover = function (t, e) {
      return this.handler.findHover(t, e)
    }),
    (lo.prototype.on = function (t, e, n) {
      return this.handler.on(t, e, n), this
    }),
    (lo.prototype.off = function (t, e) {
      this.handler.off(t, e)
    }),
    (lo.prototype.trigger = function (t, e) {
      this.handler.trigger(t, e)
    }),
    (lo.prototype.clear = function () {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof io && t[e].removeSelfFromZr(this)
      this.storage.delAllRoots(), this.painter.clear()
    }),
    (lo.prototype.dispose = function () {
      var t
      this.animation.stop(),
        this.clear(),
        this.storage.dispose(),
        this.painter.dispose(),
        this.handler.dispose(),
        (this.animation = this.storage = this.painter = this.handler = null),
        (t = this.id),
        delete ao[t]
    })
  var so = lo
  function lo (t, e, n) {
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
        new Mn()),
      o = n.renderer || 'canvas',
      o =
        (oo[o] || (o = B(oo)[0]),
        (n.useDirtyRect = null != n.useDirtyRect && n.useDirtyRect),
        new oo[o](e, r, n, t)),
      e = n.ssr || o.ssrOnly
    ;(this.storage = r), (this.painter = o)
    var a,
      t = b.node || b.worker || e ? null : new wr(o.getViewportRoot(), o.root),
      s = n.useCoarsePointer
    ;(null == s || 'auto' === s ? b.touchEventsSupported : s) &&
      (a = N(n.pointerSize, 44)),
      (this.handler = new sn(r, o, t, o.root, a)),
      (this.animation = new er({
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
  function uo (t, e) {
    t = new so(it++, t, e)
    return (ao[t.id] = t)
  }
  function ho (t, e) {
    oo[t] = e
  }
  var co = Object.freeze({
      __proto__: null,
      dispose: function (t) {
        t.dispose()
      },
      disposeAll: function () {
        for (var t in ao) ao.hasOwnProperty(t) && ao[t].dispose()
        ao = {}
      },
      getInstance: function (t) {
        return ao[t]
      },
      init: uo,
      registerPainter: ho,
      version: '5.4.4'
    }),
    po = 20
  function fo (t, e, n, i) {
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
  function go (t, e) {
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
  function yo (t, e, n) {
    return (
      null == e && (e = 10),
      (e = Math.min(Math.max(0, e), po)),
      (t = (+t).toFixed(e)),
      n ? t : +t
    )
  }
  function mo (t) {
    if (((t = +t), isNaN(t))) return 0
    if (1e-14 < t)
      for (var e = 1, n = 0; n < 15; n++, e *= 10)
        if (Math.round(t * e) / e === t) return n
    return vo(t)
  }
  function vo (t) {
    var t = t.toString().toLowerCase(),
      e = t.indexOf('e'),
      n = 0 < e ? +t.slice(e + 1) : 0,
      e = 0 < e ? e : t.length,
      t = t.indexOf('.')
    return Math.max(0, (t < 0 ? 0 : e - 1 - t) - n)
  }
  function _o (t, e) {
    var n = Math.log,
      i = Math.LN10,
      t = Math.floor(n(t[1] - t[0]) / i),
      n = Math.round(n(Math.abs(e[1] - e[0])) / i),
      e = Math.min(Math.max(-t + n, 0), 20)
    return isFinite(e) ? e : 20
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
  function Bo (t, e, n) {
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
  var No = [
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
        (R(n, function (t, e) {
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
        R((p = n), function (t, e) {
          var n, i, r
          t &&
            null != t.id &&
            ((n = Vo(t.id)), null != (i = c.get(n))) &&
            (It(!(r = u[i]).newOption, 'Duplicated option on id "' + n + '".'),
            (r.newOption = t),
            (r.existing = h[i]),
            (p[e] = null))
        })),
      d &&
        ((s = e),
        R((l = n), function (t, e) {
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
          R(n, function (t) {
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
          R(n, function (t) {
            i.push({
              newOption: t,
              brandNew: !0,
              existing: null,
              keyInfo: null
            })
          })),
      (t = e),
      (a = z()),
      R(t, function (t) {
        var e = t.existing
        e && a.set(e.id, t)
      }),
      R(t, function (t) {
        var e = t.newOption
        It(
          !e || null == e.id || !a.get(e.id) || a.get(e.id) === t,
          'id duplicates: ' + (e && e.id)
        ),
          e && null != e.id && a.set(e.id, t),
          t.keyInfo || (t.keyInfo = {})
      }),
      R(t, function (t, e) {
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
    return null == t ? e : H(t) ? t : gt(t) || ft(t) ? t + '' : e
  }
  function Wo (t) {
    t = t.name
    return !(!t || !t.indexOf(Lo))
  }
  function Go (t) {
    return t && null != t.id && 0 === Vo(t.id).indexOf(Oo)
  }
  function Uo (t, r, o) {
    R(t, function (t) {
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
      R(e, function (t, e) {
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
          ? (It(
              i.enableNone,
              '`"none"` or `false` is not a valid value on index option.'
            ),
            (a.models = []))
          : ('all' === r &&
              (It(i.enableAll, '`"all"` is not a valid value on index option.'),
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
          (It(
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
            ? R(t, function (t, e) {
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
          R(r, function (t, e) {
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
  var da = new ni(50)
  function fa (t, e, n, i, r) {
    return t
      ? 'string' == typeof t
        ? ((e && e.__zrImageSrc === t) ||
            !n ||
            ((n = { hostEl: n, cb: i, cbPayload: r }),
            (i = da.get(t))
              ? ya((e = i.image)) || i.pending.push(n)
              : (((e = U.loadImage(t, ga, ga)).__zrImageSrc = t),
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
      a = ((r.cnCharWidth = zr('国', e)), (r.ascCharWidth = zr('a', e)))
    r.placeholder = N(i.placeholder, '')
    for (var s = (t = Math.max(0, t - 1)), l = 0; l < o && a <= s; l++) s -= a
    i = zr(n, e)
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
    var o = zr(t, i)
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
          o = zr((t = t.substr(0, s)), i)
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
            C = ((D.contentHeight = Wr(T)), N(b.height, D.contentHeight))
          if (
            ((D.innerHeight = C),
            S && (C += S[0] + S[2]),
            (D.height = C),
            (D.lineHeight = Mt(b.lineHeight, e.lineHeight, C)),
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
              (D.contentWidth = zr(D.text, T)))
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
                    (D.width = D.contentWidth = zr(D.text, T)))
                : (D.contentWidth = zr(D.text, T))),
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
          ? ((t = Gr(l.width, i.width) + n),
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
          : (y.width = a ? a[p] : zr(g, h)),
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
        ? ((d = zr(g, e)),
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
        for (var e = B(t), n = 0; n < e.length; n++) {
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
            (Ba.width = t),
            (Ba.height = e),
            !Ra.intersect(Ba))) ||
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
            (o = this._paintRect || (this._paintRect = new W(0, 0, 0, 0))),
            r ? W.applyTransform(o, t, r) : o.copy(t),
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
          ? ((this._prevPaintRect = this._prevPaintRect || new W(0, 0, 0, 0)),
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
        return Et(Aa, t)
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
              for (var u = B(l), h = 0; h < u.length; h++)
                (p = u[h]) in a && ((a[p] = a[p]), (this.style[p] = l[p]))
            for (var c = B(a), h = 0; h < c.length; h++) {
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
        void (n.__dirty = 2 | _n))),
      r),
    Ra = new W(0, 0, 0, 0),
    Ba = new W(0, 0, 0, 0)
  function r (t) {
    return ka.call(this, t) || this
  }
  var Na = Math.min,
    za = Math.max,
    Ea = Math.sin,
    Fa = Math.cos,
    Va = 2 * Math.PI,
    Ha = Ut(),
    Wa = Ut(),
    Ga = Ut()
  function Ua (t, e, n, i, r, o) {
    ;(r[0] = Na(t, n)), (r[1] = Na(e, i)), (o[0] = za(t, n)), (o[1] = za(e, i))
  }
  var Xa = [],
    Ya = []
  var G = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
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
        ((this._ux = is(n / Sr / t) || 0), (this._uy = is(n / Sr / e) || 0))
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
        this.addData(G.M, t, e),
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
        this.addData(G.L, t, e),
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
        this.addData(G.C, t, e, n, i, r, o),
        this._ctx && this._ctx.bezierCurveTo(t, e, n, i, r, o),
        (this._xi = r),
        (this._yi = o),
        this
      )
    }),
    (o.prototype.quadraticCurveTo = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this.addData(G.Q, t, e, n, i),
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
        this.addData(G.A, t, e, n, n, i, h, 0, o ? 0 : 1),
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
        this.addData(G.R, t, e, n, i),
        this
      )
    }),
    (o.prototype.closePath = function () {
      this._drawPendingPt(), this.addData(G.Z)
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
          case G.M:
            ;(r = a = i[l++]),
              (o = s = i[l++]),
              ($a[0] = a),
              ($a[1] = s),
              (Qa[0] = a),
              (Qa[1] = s)
            break
          case G.L:
            Ua(r, o, i[l], i[l + 1], $a, Qa), (r = i[l++]), (o = i[l++])
            break
          case G.C:
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
              w = Hn,
              b = En,
              S = w(c, d, g, m, Xa)
            ;(_[0] = 1 / 0), (_[1] = 1 / 0), (x[0] = -1 / 0), (x[1] = -1 / 0)
            for (var M = 0; M < S; M++) {
              var T = b(c, d, g, m, Xa[M])
              ;(_[0] = Na(T, _[0])), (x[0] = za(T, x[0]))
            }
            for (S = w(p, f, y, v, Ya), M = 0; M < S; M++) {
              var C = b(p, f, y, v, Ya[M])
              ;(_[1] = Na(C, _[1])), (x[1] = za(C, x[1]))
            }
            ;(_[0] = Na(c, _[0])),
              (x[0] = za(c, x[0])),
              (_[0] = Na(m, _[0])),
              (x[0] = za(m, x[0])),
              (_[1] = Na(p, _[1])),
              (x[1] = za(p, x[1])),
              (_[1] = Na(v, _[1])),
              (x[1] = za(v, x[1])),
              (r = i[l++]),
              (o = i[l++])
            break
          case G.Q:
            ;(w = r),
              (t = o),
              (L = i[l++]),
              (k = i[l++]),
              (P = i[l]),
              (e = i[l + 1]),
              (A = $a),
              (O = Qa),
              (n = D = n = I = void 0),
              (I = Un),
              (n = za(Na((D = Yn)(w, L, P), 1), 0)),
              (D = za(Na(D(t, k, e), 1), 0)),
              (L = I(w, L, P, n)),
              (n = I(t, k, e, D)),
              (A[0] = Na(w, P, L)),
              (A[1] = Na(t, e, n)),
              (O[0] = za(w, P, L)),
              (O[1] = za(t, e, n)),
              (r = i[l++]),
              (o = i[l++])
            break
          case G.A:
            var I = i[l++],
              k = i[l++],
              D = i[l++],
              A = i[l++],
              P = i[l++],
              L = i[l++] + P,
              O = ((l += 1), !i[l++])
            h && ((a = es(P) * D + I), (s = ns(P) * A + k)),
              (function (t, e, n, i, r, o, a, s, l) {
                var u = re,
                  h = oe,
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
          case G.R:
            Ua(
              (a = r = i[l++]),
              (s = o = i[l++]),
              a + i[l++],
              s + i[l++],
              $a,
              Qa
            )
            break
          case G.Z:
            ;(r = a), (o = s)
        }
        re(Za, Za, $a), oe(Ka, Ka, Qa)
      }
      return (
        0 === l && (Za[0] = Za[1] = Ka[0] = Ka[1] = 0),
        new W(Za[0], Za[1], Ka[0] - Za[0], Ka[1] - Za[1])
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
          case G.M:
            ;(r = a = t[c++]), (o = s = t[c++])
            break
          case G.L:
            var g = t[c++],
              y = (_ = t[c++]) - o
            ;(is((I = g - r)) > n || is(y) > i || c === e - 1) &&
              ((f = Math.sqrt(I * I + y * y)), (r = g), (o = _))
            break
          case G.C:
            var m = t[c++],
              v = t[c++],
              _ = ((g = t[c++]), t[c++]),
              x = t[c++],
              w = t[c++],
              f = (function (t, e, n, i, r, o, a, s, l) {
                for (var u = t, h = e, c = 0, p = 1 / l, d = 1; d <= l; d++) {
                  var f = d * p,
                    g = En(t, n, r, a, f),
                    f = En(e, i, o, s, f),
                    y = g - u,
                    m = f - h
                  ;(c += Math.sqrt(y * y + m * m)), (u = g), (h = f)
                }
                return c
              })(r, o, m, v, g, _, x, w, 10),
              r = x,
              o = w
            break
          case G.Q:
            ;(f = (function (t, e, n, i, r, o, a) {
              for (var s = t, l = e, u = 0, h = 1 / a, c = 1; c <= a; c++) {
                var p = c * h,
                  d = Un(t, n, r, p),
                  p = Un(e, i, o, p),
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
          case G.A:
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
          case G.R:
            ;(a = r = t[c++]), (s = o = t[c++]), (f = 2 * t[c++] + 2 * t[c++])
            break
          case G.Z:
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
        N = this._ux,
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
            m !== G.L && 0 < f && (t.lineTo(l, u), (f = 0)),
            m)
          ) {
            case G.M:
              ;(n = r = h[g++]), (i = o = h[g++]), t.moveTo(r, o)
              break
            case G.L:
              var v = h[g++],
                _ = h[g++],
                x = is(v - r),
                w = is(_ - o)
              if (N < x || z < w) {
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
            case G.C:
              var S = h[g++],
                M = h[g++],
                T = h[g++],
                C = h[g++],
                w = h[g++],
                x = h[g++]
              if (c) {
                if (p + (y = a[d++]) > s) {
                  Wn(r, S, T, w, (b = (s - p) / y), qa),
                    Wn(o, M, C, x, b, ja),
                    t.bezierCurveTo(qa[1], ja[1], qa[2], ja[2], qa[3], ja[3])
                  break t
                }
                p += y
              }
              t.bezierCurveTo(S, M, T, C, w, x), (r = w), (o = x)
              break
            case G.Q:
              if (((S = h[g++]), (M = h[g++]), (T = h[g++]), (C = h[g++]), c)) {
                if (p + (y = a[d++]) > s) {
                  qn(r, S, T, (b = (s - p) / y), qa),
                    qn(o, M, C, b, ja),
                    t.quadraticCurveTo(qa[1], ja[1], qa[2], ja[2])
                  break t
                }
                p += y
              }
              t.quadraticCurveTo(S, M, T, C), (r = T), (o = C)
              break
            case G.A:
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
                B = P + L,
                W = !1
              if (
                (c &&
                  (p + (y = a[d++]) > s &&
                    ((B = P + (L * (s - p)) / y), (W = !0)),
                  (p += y)),
                R && t.ellipse
                  ? t.ellipse(I, k, D, A, O, P, B, V)
                  : t.arc(I, k, H, P, B, V),
                W)
              )
                break t
              F && ((n = es(P) * D + I), (i = ns(P) * A + k)),
                (r = es(B) * D + I),
                (o = ns(B) * A + k)
              break
            case G.R:
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
            case G.Z:
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
    (o.CMD = G),
    (o.initDefaultProps =
      (((Tu = o.prototype)._saveData = !0),
      (Tu._ux = 0),
      (Tu._uy = 0),
      (Tu._pendingPtDist = 0),
      void (Tu._version = 0)))
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
    var h = Vn(e, i, o, s, u, vs)
    if (0 === h) return 0
    for (var c, p = 0, d = -1, f = void 0, g = void 0, y = 0; y < h; y++) {
      var m = vs[y],
        v = 0 === m || 1 === m ? 0.5 : 1
      En(t, n, r, a, m) < l ||
        (d < 0 &&
          ((d = Hn(e, i, o, s, _s)),
          _s[1] < _s[0] &&
            1 < d &&
            ((c = void 0), (c = _s[0]), (_s[0] = _s[1]), (_s[1] = c)),
          (f = En(e, i, o, s, _s[0])),
          1 < d) &&
          (g = En(e, i, o, s, _s[1])),
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
        ? zn(u) && 0 <= (p = -l / u) && p <= 1 && (c[s++] = p)
        : Nn((l = u * u - 4 * h * l))
        ? 0 <= (p = -u / (2 * h)) && p <= 1 && (c[s++] = p)
        : 0 < l &&
          ((d = (-u - (l = Dn(l))) / (2 * h)),
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
    var g = Yn(e, i, o)
    if (0 <= g && g <= 1) {
      for (var y = 0, m = Un(e, i, o, g), v = 0; v < f; v++) {
        var _ = 0 === vs[v] || 1 === vs[v] ? 0.5 : 1
        Un(t, n, r, vs[v]) < a ||
          (vs[v] < g ? (y += m < e ? _ : -_) : (y += o < m ? _ : -_))
      }
      return y
    }
    return (
      (_ = 0 === vs[0] || 1 === vs[0] ? 0.5 : 1),
      Un(t, n, r, vs[0]) < a ? 0 : o < e ? _ : -_
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
                    ) && Gn(t, e, n, i, r, o, a, s, u, h, null) <= l / 2
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
                    ) && jn(t, e, n, i, r, o, s, l, null) <= a / 2
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
    Cs = Rr.concat(['invisible', 'culling', 'z', 'z2', 'zlevel', 'parent']),
    Z =
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
          i.__dirty |= _n
        } else this._decalEl && (this._decalEl = null)
      }),
      (a.prototype.getDecalElement = function () {
        return this._decalEl
      }),
      (a.prototype._init = function (t) {
        var e = B(t),
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
          if (H(e)) return 0.5 < (t = bi(e, 0)) ? Mr : 0.2 < t ? '#eee' : Tr
          if (e) return Tr
        }
        return Mr
      }),
      (a.prototype.getInsideTextStroke = function (t) {
        var e = this.style.fill
        if (H(e)) {
          var n = this.__zr
          if (!(!n || !n.isDarkMode()) == bi(t, 0) < 0.4) return e
        }
      }),
      (a.prototype.buildPath = function (t, e, n) {}),
      (a.prototype.pathUpdated = function () {
        this.__dirty &= ~xn
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
            (t || this.__dirty & xn) &&
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
        ;(this.__dirty |= xn),
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
        return !!(this.__dirty & xn)
      }),
      (a.prototype.createStyle = function (t) {
        return Et(Ms, t)
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
            for (var l = {}, u = B(a), h = 0; h < u.length; h++) {
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
        (((Tu = a.prototype).type = 'path'),
        (Tu.strokeContainThreshold = 5),
        (Tu.segmentIgnoreThreshold = 0),
        (Tu.subPixelOptimize = !1),
        (Tu.autoBatch = !1),
        void (Tu.__dirty = 2 | _n | xn))),
      a)
  function a (t) {
    return Ss.call(this, t) || this
  }
  var Is,
    ks = E(
      {
        strokeFirst: !0,
        font: K,
        x: 0,
        y: 0,
        textAlign: 'left',
        textBaseline: 'top',
        miterLimit: 2
      },
      Ms
    ),
    Ds =
      (u(As, (Is = n)),
      (As.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke
        return null != e && 'none' !== e && 0 < t.lineWidth
      }),
      (As.prototype.hasFill = function () {
        var t = this.style.fill
        return null != t && 'none' !== t
      }),
      (As.prototype.createStyle = function (t) {
        return Et(ks, t)
      }),
      (As.prototype.setBoundingRect = function (t) {
        this._rect = t
      }),
      (As.prototype.getBoundingRect = function () {
        var t,
          e = this.style
        return (
          this._rect ||
            (null != (t = e.text) ? (t += '') : (t = ''),
            ((t = Fr(t, e.font, e.textAlign, e.textBaseline)).x += e.x || 0),
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
      (As.initDefaultProps = void (As.prototype.dirtyRectTolerance = 10)),
      As)
  function As () {
    return (null !== Is && Is.apply(this, arguments)) || this
  }
  Ds.prototype.type = 'tspan'
  var Ps = E({ x: 0, y: 0 }, Aa),
    Ls = {
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
  u(Bs, (Os = n)),
    (Bs.prototype.createStyle = function (t) {
      return Et(Ps, t)
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
      return Ls
    }),
    (Bs.prototype.getBoundingRect = function () {
      var t = this.style
      return (
        this._rect ||
          (this._rect = new W(
            t.x || 0,
            t.y || 0,
            this.getWidth(),
            this.getHeight()
          )),
        this._rect
      )
    })
  var Os,
    Rs = Bs
  function Bs () {
    return (null !== Os && Os.apply(this, arguments)) || this
  }
  Rs.prototype.type = 'image'
  var Ns = Math.round
  function zs (t, e, n) {
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
          (Ns(2 * i) === Ns(2 * r) && (t.x1 = t.x2 = Fs(i, n, !0)),
          Ns(2 * o) === Ns(2 * e)) &&
          (t.y1 = t.y2 = Fs(o, n, !0)),
        t
      )
  }
  function Es (t, e, n) {
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
          ((t.x = Fs(i, n, !0)),
          (t.y = Fs(r, n, !0)),
          (t.width = Math.max(Fs(i + o, n, !1) - t.x, 0 === o ? 0 : 1)),
          (t.height = Math.max(Fs(r + e, n, !1) - t.y, 0 === e ? 0 : 1))),
        t
      )
  }
  function Fs (t, e, n) {
    var i
    return e
      ? ((i = Ns(2 * t)) + Ns(e)) % 2 == 0
        ? i / 2
        : (i + (n ? 1 : -1)) / 2
      : t
  }
  function Vs () {
    ;(this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0)
  }
  var Hs,
    Ws = {},
    Gs =
      (u(Us, (Hs = Z)),
      (Us.prototype.getDefaultShape = function () {
        return new Vs()
      }),
      (Us.prototype.buildPath = function (t, e) {
        var n, i, r, o, a, s, l, u, h, c, p, d, f, g
        this.subPixelOptimize
          ? ((n = (a = Es(Ws, e, this.style)).x),
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
      (Us.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height
      }),
      Us)
  function Us (t) {
    return Hs.call(this, t) || this
  }
  Gs.prototype.type = 'rect'
  var Xs,
    Ys = { fill: '#000' },
    qs = {
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
    js =
      (u(Qs, (Xs = n)),
      (Qs.prototype.childrenRef = function () {
        return this._children
      }),
      (Qs.prototype.update = function () {
        Xs.prototype.update.call(this),
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
      (Qs.prototype.updateTransform = function () {
        var t = this.innerTransformable
        t
          ? (t.updateTransform(), t.transform && (this.transform = t.transform))
          : Xs.prototype.updateTransform.call(this)
      }),
      (Qs.prototype.getLocalTransform = function (t) {
        var e = this.innerTransformable
        return e
          ? e.getLocalTransform(t)
          : Xs.prototype.getLocalTransform.call(this, t)
      }),
      (Qs.prototype.getComputedTransform = function () {
        return (
          this.__hostTarget &&
            (this.__hostTarget.getComputedTransform(),
            this.__hostTarget.updateInnerText(!0)),
          Xs.prototype.getComputedTransform.call(this)
        )
      }),
      (Qs.prototype._updateSubTexts = function () {
        var t
        ;(this._childCursor = 0),
          nl((t = this.style)),
          R(t.rich, nl),
          this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
          (this._children.length = this._childCursor),
          this.styleUpdated()
      }),
      (Qs.prototype.addSelfToZr = function (t) {
        Xs.prototype.addSelfToZr.call(this, t)
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = t
      }),
      (Qs.prototype.removeSelfFromZr = function (t) {
        Xs.prototype.removeSelfFromZr.call(this, t)
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = null
      }),
      (Qs.prototype.getBoundingRect = function () {
        if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
          for (
            var t = new W(0, 0, 0, 0),
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
      (Qs.prototype.setDefaultTextStyle = function (t) {
        this._defaultStyle = t || Ys
      }),
      (Qs.prototype.setTextContent = function (t) {}),
      (Qs.prototype._mergeStyle = function (t, e) {
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
      (Qs.prototype._mergeRich = function (t, e) {
        for (var n = B(e), i = 0; i < n.length; i++) {
          var r = n[i]
          ;(t[r] = t[r] || {}), O(t[r], e[r])
        }
      }),
      (Qs.prototype.getAnimationStyleProps = function () {
        return qs
      }),
      (Qs.prototype._getOrCreateChild = function (t) {
        var e = this._children[this._childCursor]
        return (
          (e && e instanceof t) || (e = new t()),
          ((this._children[this._childCursor++] = e).__zr = this.__zr),
          (e.parent = this),
          e
        )
      }),
      (Qs.prototype._updatePlainTexts = function () {
        var t,
          e = this.style,
          n = e.font || K,
          i = e.padding,
          r = (function (t, e) {
            null != t && (t += '')
            var n,
              i = e.overflow,
              r = e.padding,
              o = e.font,
              a = 'truncate' === i,
              s = Wr(o),
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
              g = Math.max(zr(n[f], o), g)
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
          })(al(e), e),
          o = sl(e),
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
          v = Hr(f, r.contentHeight, y)
        ;(o || i) &&
          ((t = Vr(d, l, g)), (f = Hr(f, s, y)), o) &&
          this._renderBackground(e, e, t, f, l, s),
          (v += c / 2),
          i &&
            ((m = ol(d, g, i)),
            'top' === y ? (v += i[0]) : 'bottom' === y && (v -= i[2]))
        for (
          var _ = 0,
            o = !1,
            x = rl((('fill' in e) ? e : ((o = !0), p)).fill),
            w = il(
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
          var C = this._getOrCreateChild(Ds),
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
            tl(I, e),
            (v += c),
            S &&
              C.setBoundingRect(
                new W(
                  Vr(I.x, e.width, I.textAlign),
                  Hr(I.y, M, I.textBaseline),
                  u,
                  M
                )
              )
        }
      }),
      (Qs.prototype._updateRichTexts = function () {
        var t = this.style,
          e = Ma(al(t), t),
          n = e.width,
          i = e.outerWidth,
          r = e.outerHeight,
          o = t.padding,
          a = t.x || 0,
          s = t.y || 0,
          l = this._defaultStyle,
          u = t.align || l.align,
          l = t.verticalAlign || l.verticalAlign,
          a = Vr(a, i, u),
          u = Hr(s, r, l),
          h = a,
          c = u,
          p = (o && ((h += o[3]), (c += o[0])), h + n)
        sl(t) && this._renderBackground(t, t, a, u, i, r)
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
      (Qs.prototype._placeToken = function (t, e, n, i, r, o, a) {
        var s = e.rich[t.styleName] || {},
          l = ((s.text = t.text), t.verticalAlign),
          u = i + n / 2,
          l =
            ('top' === l
              ? (u = i + t.height / 2)
              : 'bottom' === l && (u = i + n - t.height / 2),
            !t.isLineHolder &&
              sl(s) &&
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
              ((r = ol(r, o, i)),
              (u -= t.height / 2 - i[0] - t.innerHeight / 2)),
            this._getOrCreateChild(Ds)),
          i = n.createStyle(),
          h = (n.useStyle(i), this._defaultStyle),
          c = !1,
          p = 0,
          d = rl(('fill' in s ? s : 'fill' in e ? e : ((c = !0), h)).fill),
          l = il(
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
            (i.font = t.font || K),
            (i.opacity = Mt(s.opacity, e.opacity, 1)),
            tl(i, s),
            l &&
              ((i.lineWidth = Mt(s.lineWidth, e.lineWidth, p)),
              (i.lineDash = N(s.lineDash, e.lineDash)),
              (i.lineDashOffset = e.lineDashOffset || 0),
              (i.stroke = l)),
            d && (i.fill = d),
            t.contentWidth),
          h = t.contentHeight
        n.setBoundingRect(
          new W(Vr(i.x, c, i.textAlign), Hr(i.y, h, i.textBaseline), c, h)
        )
      }),
      (Qs.prototype._renderBackground = function (t, e, n, i, r, o) {
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
              ((a = this._getOrCreateChild(Gs)).useStyle(a.createStyle()),
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
                (((s = this._getOrCreateChild(Rs)).onload = function () {
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
          (g.opacity = Mt(t.opacity, e.opacity, 1))
      }),
      (Qs.makeFont = function (t) {
        var e = ''
        return (
          ((e = el(t)
            ? [
                t.fontStyle,
                t.fontWeight,
                Js(t.fontSize),
                t.fontFamily || 'sans-serif'
              ].join(' ')
            : e) &&
            kt(e)) ||
          t.textFont ||
          t.font
        )
      }),
      Qs),
    Zs = { left: !0, right: 1, center: 1 },
    Ks = { top: 1, bottom: 1, middle: 1 },
    $s = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily']
  function Qs (t) {
    var e = Xs.call(this) || this
    return (
      (e.type = 'text'),
      (e._children = []),
      (e._defaultStyle = Ys),
      e.attr(t),
      e
    )
  }
  function Js (t) {
    return 'string' != typeof t ||
      (-1 === t.indexOf('px') &&
        -1 === t.indexOf('rem') &&
        -1 === t.indexOf('em'))
      ? isNaN(+t)
        ? x + 'px'
        : t + 'px'
      : t
  }
  function tl (t, e) {
    for (var n = 0; n < $s.length; n++) {
      var i = $s[n],
        r = e[i]
      null != r && (t[i] = r)
    }
  }
  function el (t) {
    return null != t.fontSize || t.fontFamily || t.fontWeight
  }
  function nl (t) {
    var e
    t &&
      ((t.font = js.makeFont(t)),
      (e = t.align),
      (t.align =
        null == (e = 'middle' === e ? 'center' : e) || Zs[e] ? e : 'left'),
      (e = t.verticalAlign),
      (t.verticalAlign =
        null == (e = 'center' === e ? 'middle' : e) || Ks[e] ? e : 'top'),
      t.padding) &&
      (t.padding = Ct(t.padding))
  }
  function il (t, e) {
    return null == t || e <= 0 || 'transparent' === t || 'none' === t
      ? null
      : t.image || t.colorStops
      ? '#000'
      : t
  }
  function rl (t) {
    return null == t || 'none' === t
      ? null
      : t.image || t.colorStops
      ? '#000'
      : t
  }
  function ol (t, e, n) {
    return 'right' === e
      ? t - n[1]
      : 'center' === e
      ? t + n[3] / 2 - n[1] / 2
      : t + n[3]
  }
  function al (t) {
    t = t.text
    return null != t && (t += ''), t
  }
  function sl (t) {
    return !!(
      t.backgroundColor ||
      t.lineHeight ||
      (t.borderWidth && t.borderColor)
    )
  }
  var T = Yo(),
    ll = 1,
    ul = {},
    hl = Yo(),
    cl = Yo(),
    pl = 0,
    dl = 1,
    fl = 2,
    gl = ['emphasis', 'blur', 'select'],
    yl = ['normal', 'emphasis', 'blur', 'select'],
    ml = 'highlight',
    vl = 'downplay',
    _l = 'select',
    xl = 'unselect',
    wl = 'toggleSelect'
  function bl (t) {
    return null != t && 'none' !== t
  }
  var Sl = new ni(100)
  function Ml (t) {
    var e
    return H(t)
      ? ((e = Sl.get(t)) || ((e = vi(t, -0.1)), Sl.put(t, e)), e)
      : _t(t)
      ? (((e = O({}, t)).colorStops = F(t.colorStops, function (t) {
          return { offset: t.offset, color: vi(t.color, -0.1) }
        })),
        e)
      : t
  }
  function Tl (t, e, n) {
    t.onHoverStateChange &&
      (t.hoverState || 0) !== n &&
      t.onHoverStateChange(e),
      (t.hoverState = n)
  }
  function Cl (t) {
    Tl(t, 'emphasis', fl)
  }
  function Il (t) {
    t.hoverState === fl && Tl(t, 'normal', pl)
  }
  function kl (t) {
    Tl(t, 'blur', dl)
  }
  function Dl (t) {
    t.hoverState === dl && Tl(t, 'normal', pl)
  }
  function Al (t) {
    t.selected = !0
  }
  function Pl (t) {
    t.selected = !1
  }
  function Ll (t, e, n) {
    e(t, n)
  }
  function Ol (t, e, n) {
    Ll(t, e, n),
      t.isGroup &&
        t.traverse(function (t) {
          Ll(t, e, n)
        })
  }
  function Rl (t, e, n) {
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
  function Bl (t, e) {
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
          n instanceof Z &&
            ((r = hl(n)),
            (o = (e && r.selectFill) || r.normalFill),
            (e = (e && r.selectStroke) || r.normalStroke),
            bl(o) || bl(e)) &&
            ('inherit' === (r = (i = i || {}).style || {}).fill
              ? ((a = !0), (i = O({}, i)), ((r = O({}, r)).fill = o))
              : !bl(r.fill) && bl(o)
              ? ((a = !0), (i = O({}, i)), ((r = O({}, r)).fill = Ml(o)))
              : !bl(r.stroke) &&
                bl(e) &&
                (a || ((i = O({}, i)), (r = O({}, r))), (r.stroke = Ml(e))),
            (i.style = r)),
          i &&
            null == i.z2 &&
            (a || (i = O({}, i)),
            (o = n.z2EmphasisLift),
            (i.z2 = n.z2 + (null != o ? o : 10))),
          i
        )
      if ('blur' === t) return Rl(this, t, s)
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
  function Nl (t) {
    t.stateProxy = Bl
    var e = t.getTextContent(),
      t = t.getTextGuideLine()
    e && (e.stateProxy = Bl), t && (t.stateProxy = Bl)
  }
  function zl (t, e) {
    Ul(t, e) || t.__highByOuter || Ol(t, Cl)
  }
  function El (t, e) {
    Ul(t, e) || t.__highByOuter || Ol(t, Il)
  }
  function Fl (t, e) {
    ;(t.__highByOuter |= 1 << (e || 0)), Ol(t, Cl)
  }
  function Vl (t, e) {
    ;(t.__highByOuter &= ~(1 << (e || 0))) || Ol(t, Il)
  }
  function Hl (t) {
    Ol(t, Dl)
  }
  function Wl (t) {
    Ol(t, Al)
  }
  function Gl (t) {
    Ol(t, Pl)
  }
  function Ul (t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch
  }
  function Xl (r) {
    var e = r.getModel(),
      o = [],
      a = []
    e.eachComponent(function (t, e) {
      var n = cl(e),
        t = 'series' === t,
        i = t ? r.getViewOfSeriesModel(e) : r.getViewOfComponentModel(e)
      t || a.push(i),
        n.isBlured &&
          (i.group.traverse(function (t) {
            Dl(t)
          }),
          t) &&
          o.push(e),
        (n.isBlured = !1)
    }),
      R(a, function (t) {
        t && t.toggleBlurSeries && t.toggleBlurSeries(o, !1, e)
      })
  }
  function Yl (t, o, a, s) {
    var l,
      u,
      h,
      n = s.getModel()
    function c (t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = t.getItemGraphicEl(e[n])
        i && Hl(i)
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
                ;(t.__highByOuter && e && 'self' === o) || kl(t)
              }),
              ut(o))
            )
              c(t.getData(), o)
            else if (L(o))
              for (var i = B(o), r = 0; r < i.length; r++)
                c(t.getData(i[r]), o[i[r]])
            h.push(t), (cl(t).isBlured = !0)
          }
        }),
        n.eachComponent(function (t, e) {
          'series' !== t &&
            (t = s.getViewOfComponentModel(e)) &&
            t.toggleBlurSeries &&
            t.toggleBlurSeries(h, !0, n)
        }))
  }
  function ql (t, e, n) {
    null != t &&
      null != e &&
      (t = n.getModel().getComponent(t, e)) &&
      ((cl(t).isBlured = !0), (e = n.getViewOfComponentModel(t))) &&
      e.focusBlurEnabled &&
      e.group.traverse(function (t) {
        kl(t)
      })
  }
  function jl (t, e, n, i) {
    var r = { focusSelf: !1, dispatchers: null }
    if (null == t || 'series' === t || null == e || null == n) return r
    t = i.getModel().getComponent(t, e)
    if (!t) return r
    e = i.getViewOfComponentModel(t)
    if (!e || !e.findHighDownDispatchers) return r
    for (var o, a = e.findHighDownDispatchers(n), s = 0; s < a.length; s++)
      if ('self' === T(a[s]).focus) {
        o = !0
        break
      }
    return { focusSelf: o, dispatchers: a }
  }
  function Zl (i) {
    R(i.getAllData(), function (t) {
      var e = t.data,
        n = t.type
      e.eachItemGraphicEl(function (t, e) {
        ;(i.isSelected(e, n) ? Wl : Gl)(t)
      })
    })
  }
  function Kl (t, e, n) {
    tu(t, !0), Ol(t, Nl)
    ;(t = T(t)),
      null != e
        ? ((t.focus = e), (t.blurScope = n))
        : t.focus && (t.focus = null)
  }
  function $l (t, e, n, i) {
    i ? tu(t, !1) : Kl(t, e, n)
  }
  var Ql = ['emphasis', 'blur', 'select'],
    Jl = {
      itemStyle: 'getItemStyle',
      lineStyle: 'getLineStyle',
      areaStyle: 'getAreaStyle'
    }
  function tu (t, e) {
    var e = !1 === e,
      n = t
    t.highDownSilentOnTouch &&
      (n.__highDownSilentOnTouch = t.highDownSilentOnTouch),
      (e && !n.__highDownDispatcher) ||
        ((n.__highByOuter = n.__highByOuter || 0),
        (n.__highDownDispatcher = !e))
  }
  function eu (t) {
    return !(!t || !t.__highDownDispatcher)
  }
  function nu (t) {
    t = t.type
    return t === _l || t === xl || t === wl
  }
  function iu (t) {
    t = t.type
    return t === ml || t === vl
  }
  var ru = us.CMD,
    ou = [[], [], []],
    au = Math.sqrt,
    su = Math.atan2
  var lu = Math.sqrt,
    uu = Math.sin,
    hu = Math.cos,
    cu = Math.PI
  function pu (t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1])
  }
  function du (t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (pu(t) * pu(e))
  }
  function fu (t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(du(t, e))
  }
  function gu (t, e, n, i, r, o, a, s, l, u, h) {
    var l = l * (cu / 180),
      c = (hu(l) * (t - n)) / 2 + (uu(l) * (e - i)) / 2,
      p = (-1 * uu(l) * (t - n)) / 2 + (hu(l) * (e - i)) / 2,
      d = (c * c) / (a * a) + (p * p) / (s * s),
      d =
        (1 < d && ((a *= lu(d)), (s *= lu(d))),
        (r === o ? -1 : 1) *
          lu(
            (a * a * (s * s) - a * a * (p * p) - s * s * (c * c)) /
              (a * a * (p * p) + s * s * (c * c))
          ) || 0),
      r = (d * a * p) / s,
      d = (d * -s * c) / a,
      t = (t + n) / 2 + hu(l) * r - uu(l) * d,
      n = (e + i) / 2 + uu(l) * r + hu(l) * d,
      e = fu([1, 0], [(c - r) / a, (p - d) / s]),
      i = [(c - r) / a, (p - d) / s],
      c = [(-1 * c - r) / a, (-1 * p - d) / s],
      r = fu(i, c)
    du(i, c) <= -1 && (r = cu),
      (r = 1 <= du(i, c) ? 0 : r) < 0 &&
        ((p = Math.round((r / cu) * 1e6) / 1e6), (r = 2 * cu + (p % 2) * cu)),
      h.addData(u, t, n, a, s, e, r, l, o)
  }
  var yu = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    mu = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g
  u(xu, (vu = Z)), (xu.prototype.applyTransform = function (t) {})
  var vu,
    _u = xu
  function xu () {
    return (null !== vu && vu.apply(this, arguments)) || this
  }
  function wu (t) {
    return null != t.setData
  }
  function bu (t, e) {
    var S = (function (t) {
        var e = new us()
        if (t) {
          var n,
            i = 0,
            r = 0,
            o = i,
            a = r,
            s = us.CMD,
            l = t.match(yu)
          if (l) {
            for (var u = 0; u < l.length; u++) {
              for (
                var h = l[u],
                  c = h.charAt(0),
                  p = void 0,
                  d = h.match(mu) || [],
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
                      gu(
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
                      gu(
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
        wu(t)
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
              u = ru.M,
              h = ru.C,
              c = ru.L,
              p = ru.R,
              d = ru.A,
              f = ru.Q,
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
                  _ = au(n[0] * n[0] + n[1] * n[1]),
                  x = au(n[2] * n[2] + n[3] * n[3]),
                  w = su(-n[1] / x, n[0] / _)
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
                  ie(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1]),
                  (a[0] += s[g++]),
                  (a[1] += s[g++]),
                  ie(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1])
            }
            for (o = 0; o < r; o++) {
              var b = ou[o]
              ;(b[0] = s[g++]),
                (b[1] = s[g++]),
                ie(b, b, n),
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
  function Su () {
    ;(this.cx = 0), (this.cy = 0), (this.r = 0)
  }
  u(Cu, (Mu = Z)),
    (Cu.prototype.getDefaultShape = function () {
      return new Su()
    }),
    (Cu.prototype.buildPath = function (t, e) {
      t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
    })
  var Mu,
    Tu = Cu
  function Cu (t) {
    return Mu.call(this, t) || this
  }
  Tu.prototype.type = 'circle'
  function Iu () {
    ;(this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0)
  }
  u(Au, (ku = Z)),
    (Au.prototype.getDefaultShape = function () {
      return new Iu()
    }),
    (Au.prototype.buildPath = function (t, e) {
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
  var ku,
    Du = Au
  function Au (t) {
    return ku.call(this, t) || this
  }
  Du.prototype.type = 'ellipse'
  var Pu = Math.PI,
    Lu = 2 * Pu,
    Ou = Math.sin,
    Ru = Math.cos,
    Bu = Math.acos,
    Nu = Math.atan2,
    zu = Math.abs,
    Eu = Math.sqrt,
    Fu = Math.max,
    Vu = Math.min,
    Hu = 1e-4
  function Wu (t, e, n, i, r, o, a) {
    var s = t - n,
      l = e - i,
      a = (a ? o : -o) / Eu(s * s + l * l),
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
      n = (c < 0 ? -1 : 1) * Eu(Fu(0, o * o * p - s * s)),
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
  function Gu (t, e) {
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
      L = Fu(e.r, 0),
      O = Fu(e.r0 || 0, 0),
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
        (w = zu(n - R)),
        Hu < (a = Lu < w && w % Lu) && (w = a),
        Hu < L
          ? Lu - Hu < w
            ? (t.moveTo(i + L * Ru(R), r + L * Ou(R)),
              t.arc(i, r, L, R, n, !o),
              Hu < O &&
                (t.moveTo(i + O * Ru(n), r + O * Ou(n)),
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
              (y = L * Ru(R)),
              (m = L * Ou(R)),
              (v = O * Ru(n)),
              (_ = O * Ou(n)),
              (x = Hu < w) &&
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
                (e = zu(L - O) / 2),
                (M = Vu(e, l)),
                (T = Vu(e, u)),
                (C = Vu(e, a)),
                (I = Vu(e, s)),
                (b = h = Fu(M, T)),
                (S = c = Fu(C, I)),
                Hu < h || Hu < c) &&
                ((p = L * Ru(n)),
                (d = L * Ou(n)),
                (f = O * Ru(R)),
                (g = O * Ou(R)),
                w < Pu) &&
                (e = (function (t, e, n, i, r, o, a, s) {
                  var l = (s = s - o) * (n = n - t) - (a = a - r) * (i = i - e)
                  if (!(l * l < Hu))
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
                  Ou(
                    Bu(
                      (M * C + T * I) / (Eu(M * M + T * T) * Eu(C * C + I * I))
                    ) / 2
                  )),
                (M = Eu(e[0] * e[0] + e[1] * e[1])),
                (b = Vu(h, (L - M) / (1 + w))),
                (S = Vu(c, (O - M) / (w - 1)))),
              x
                ? Hu < b
                  ? ((k = Vu(l, b)),
                    (D = Vu(u, b)),
                    (A = Wu(f, g, y, m, L, k, o)),
                    (P = Wu(p, d, v, _, L, D, o)),
                    t.moveTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    b < h && k === D
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          b,
                          Nu(A.y0, A.x0),
                          Nu(P.y0, P.x0),
                          !o
                        )
                      : (0 < k &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            k,
                            Nu(A.y0, A.x0),
                            Nu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          L,
                          Nu(A.cy + A.y1, A.cx + A.x1),
                          Nu(P.cy + P.y1, P.cx + P.x1),
                          !o
                        ),
                        0 < D &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            D,
                            Nu(P.y1, P.x1),
                            Nu(P.y0, P.x0),
                            !o
                          )))
                  : (t.moveTo(i + y, r + m), t.arc(i, r, L, R, n, !o))
                : t.moveTo(i + y, r + m),
              Hu < O && x
                ? Hu < S
                  ? ((k = Vu(a, S)),
                    (A = Wu(v, _, p, d, O, -(D = Vu(s, S)), o)),
                    (P = Wu(y, m, f, g, O, -k, o)),
                    t.lineTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    S < c && k === D
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          S,
                          Nu(A.y0, A.x0),
                          Nu(P.y0, P.x0),
                          !o
                        )
                      : (0 < D &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            D,
                            Nu(A.y0, A.x0),
                            Nu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          O,
                          Nu(A.cy + A.y1, A.cx + A.x1),
                          Nu(P.cy + P.y1, P.cx + P.x1),
                          o
                        ),
                        0 < k &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            k,
                            Nu(P.y1, P.x1),
                            Nu(P.y0, P.x0),
                            !o
                          )))
                  : (t.lineTo(i + v, r + _), t.arc(i, r, O, n, R, o))
                : t.lineTo(i + v, r + _))
          : t.moveTo(i, r),
        t.closePath()))
  }
  function Uu () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r0 = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0),
      (this.cornerRadius = 0)
  }
  u(qu, (Xu = Z)),
    (qu.prototype.getDefaultShape = function () {
      return new Uu()
    }),
    (qu.prototype.buildPath = function (t, e) {
      Gu(t, e)
    }),
    (qu.prototype.isZeroArea = function () {
      return (
        this.shape.startAngle === this.shape.endAngle ||
        this.shape.r === this.shape.r0
      )
    })
  var Xu,
    Yu = qu
  function qu (t) {
    return Xu.call(this, t) || this
  }
  Yu.prototype.type = 'sector'
  function ju () {
    ;(this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0)
  }
  u($u, (Zu = Z)),
    ($u.prototype.getDefaultShape = function () {
      return new ju()
    }),
    ($u.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = 2 * Math.PI
      t.moveTo(n + e.r, i),
        t.arc(n, i, e.r, 0, r, !1),
        t.moveTo(n + e.r0, i),
        t.arc(n, i, e.r0, 0, r, !0)
    })
  var Zu,
    Ku = $u
  function $u (t) {
    return Zu.call(this, t) || this
  }
  function Qu (t, e, n) {
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
              re(h, h, t[p]), oe(c, c, t[p])
            re(h, h, i[0]), oe(c, c, i[1])
          }
          for (p = 0, d = t.length; p < d; p++) {
            var f = t[p]
            if (n) (r = t[p ? p - 1 : d - 1]), (o = t[(p + 1) % d])
            else {
              if (0 === p || p === d - 1) {
                a.push(Xt(t[p]))
                continue
              }
              ;(r = t[p - 1]), (o = t[p + 1])
            }
            qt(s, o, r), Kt(s, s, e)
            var g = Qt(f, r),
              y = Qt(f, o),
              m = g + y,
              m =
                (0 !== m && ((g /= m), (y /= m)),
                Kt(l, s, -g),
                Kt(u, s, y),
                Yt([], f, l)),
              g = Yt([], f, u)
            i && (oe(m, m, h), re(m, m, c), oe(g, g, h), re(g, g, c)),
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
  Ku.prototype.type = 'ring'
  function Ju () {
    ;(this.points = null), (this.smooth = 0), (this.smoothConstraint = null)
  }
  u(nh, (th = Z)),
    (nh.prototype.getDefaultShape = function () {
      return new Ju()
    }),
    (nh.prototype.buildPath = function (t, e) {
      Qu(t, e, !0)
    })
  var th,
    eh = nh
  function nh (t) {
    return th.call(this, t) || this
  }
  eh.prototype.type = 'polygon'
  function ih () {
    ;(this.points = null),
      (this.percent = 1),
      (this.smooth = 0),
      (this.smoothConstraint = null)
  }
  u(ah, (rh = Z)),
    (ah.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null }
    }),
    (ah.prototype.getDefaultShape = function () {
      return new ih()
    }),
    (ah.prototype.buildPath = function (t, e) {
      Qu(t, e, !1)
    })
  var rh,
    oh = ah
  function ah (t) {
    return rh.call(this, t) || this
  }
  oh.prototype.type = 'polyline'
  function sh () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.percent = 1)
  }
  var lh,
    uh = {},
    hh =
      (u(ch, (lh = Z)),
      (ch.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (ch.prototype.getDefaultShape = function () {
        return new sh()
      }),
      (ch.prototype.buildPath = function (t, e) {
        o = (
          this.subPixelOptimize
            ? ((n = (o = zs(uh, e, this.style)).x1), (i = o.y1), (r = o.x2), o)
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
      (ch.prototype.pointAt = function (t) {
        var e = this.shape
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
      }),
      ch)
  function ch (t) {
    return lh.call(this, t) || this
  }
  hh.prototype.type = 'line'
  function ph () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.cpx1 = 0),
      (this.cpy1 = 0),
      (this.percent = 1)
  }
  var dh = []
  function fh (t, e, n) {
    var i = t.cpx2,
      r = t.cpy2
    return null != i || null != r
      ? [
          (n ? Fn : En)(t.x1, t.cpx1, t.cpx2, t.x2, e),
          (n ? Fn : En)(t.y1, t.cpy1, t.cpy2, t.y2, e)
        ]
      : [
          (n ? Xn : Un)(t.x1, t.cpx1, t.x2, e),
          (n ? Xn : Un)(t.y1, t.cpy1, t.y2, e)
        ]
  }
  u(mh, (gh = Z)),
    (mh.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null }
    }),
    (mh.prototype.getDefaultShape = function () {
      return new ph()
    }),
    (mh.prototype.buildPath = function (t, e) {
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
              (qn(n, a, r, e, dh),
              (a = dh[1]),
              (r = dh[2]),
              qn(i, s, o, e, dh),
              (s = dh[1]),
              (o = dh[2])),
            t.quadraticCurveTo(a, s, r, o))
          : (e < 1 &&
              (Wn(n, a, l, r, e, dh),
              (a = dh[1]),
              (l = dh[2]),
              (r = dh[3]),
              Wn(i, s, u, o, e, dh),
              (s = dh[1]),
              (u = dh[2]),
              (o = dh[3])),
            t.bezierCurveTo(a, s, l, u, r, o)))
    }),
    (mh.prototype.pointAt = function (t) {
      return fh(this.shape, t, !1)
    }),
    (mh.prototype.tangentAt = function (t) {
      t = fh(this.shape, t, !0)
      return $t(t, t)
    })
  var gh,
    yh = mh
  function mh (t) {
    return gh.call(this, t) || this
  }
  yh.prototype.type = 'bezier-curve'
  function vh () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0)
  }
  u(wh, (_h = Z)),
    (wh.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null }
    }),
    (wh.prototype.getDefaultShape = function () {
      return new vh()
    }),
    (wh.prototype.buildPath = function (t, e) {
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
  var _h,
    xh = wh
  function wh (t) {
    return _h.call(this, t) || this
  }
  xh.prototype.type = 'arc'
  u(Mh, (bh = Z)),
    (Mh.prototype._updatePathDirty = function () {
      for (
        var t = this.shape.paths, e = this.shapeChanged(), n = 0;
        n < t.length;
        n++
      )
        e = e || t[n].shapeChanged()
      e && this.dirtyShape()
    }),
    (Mh.prototype.beforeBrush = function () {
      this._updatePathDirty()
      for (
        var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0;
        n < t.length;
        n++
      )
        t[n].path || t[n].createPathProxy(),
          t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold)
    }),
    (Mh.prototype.buildPath = function (t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++)
        n[i].buildPath(t, n[i].shape, !0)
    }),
    (Mh.prototype.afterBrush = function () {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
        t[e].pathUpdated()
    }),
    (Mh.prototype.getBoundingRect = function () {
      return (
        this._updatePathDirty.call(this), Z.prototype.getBoundingRect.call(this)
      )
    })
  var bh,
    Sh = Mh
  function Mh () {
    var t = (null !== bh && bh.apply(this, arguments)) || this
    return (t.type = 'compound'), t
  }
  Ch.prototype.addColorStop = function (t, e) {
    this.colorStops.push({ offset: t, color: e })
  }
  var Th = Ch
  function Ch (t) {
    this.colorStops = t || []
  }
  u(Dh, (Ih = Th))
  var Ih,
    kh = Dh
  function Dh (t, e, n, i, r, o) {
    r = Ih.call(this, r) || this
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
  u(Ph, (Ah = Th))
  var Ah,
    Th = Ph
  function Ph (t, e, n, i, r) {
    i = Ah.call(this, i) || this
    return (
      (i.x = null == t ? 0.5 : t),
      (i.y = null == e ? 0.5 : e),
      (i.r = null == n ? 0.5 : n),
      (i.type = 'radial'),
      (i.global = r || !1),
      i
    )
  }
  var Lh = [0, 0],
    Oh = [0, 0],
    Rh = new M(),
    Bh = new M(),
    Nh =
      ((zh.prototype.fromBoundingRect = function (t, e) {
        var n = this._corners,
          i = this._axes,
          r = t.x,
          o = t.y,
          a = r + t.width,
          t = o + t.height
        if ((n[0].set(r, o), n[1].set(a, o), n[2].set(a, t), n[3].set(r, t), e))
          for (var s = 0; s < 4; s++) n[s].transform(e)
        for (
          M.sub(i[0], n[1], n[0]),
            M.sub(i[1], n[3], n[0]),
            i[0].normalize(),
            i[1].normalize(),
            s = 0;
          s < 2;
          s++
        )
          this._origin[s] = i[s].dot(n[0])
      }),
      (zh.prototype.intersect = function (t, e) {
        var n = !0,
          i = !e
        return (
          Rh.set(1 / 0, 1 / 0),
          Bh.set(0, 0),
          (!this._intersectCheckOneSide(this, t, Rh, Bh, i, 1) &&
            ((n = !1), i)) ||
            (!this._intersectCheckOneSide(t, this, Rh, Bh, i, -1) &&
              ((n = !1), i)) ||
            i ||
            M.copy(e, n ? Rh : Bh),
          n
        )
      }),
      (zh.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
        for (var a = !0, s = 0; s < 2; s++) {
          var l = this._axes[s]
          if (
            (this._getProjMinMaxOnAxis(s, t._corners, Lh),
            this._getProjMinMaxOnAxis(s, e._corners, Oh),
            Lh[1] < Oh[0] || Oh[1] < Lh[0])
          ) {
            if (((a = !1), r)) return a
            var u = Math.abs(Oh[0] - Lh[1]),
              h = Math.abs(Lh[0] - Oh[1])
            Math.min(u, h) > i.len() &&
              (u < h ? M.scale(i, l, -u * o) : M.scale(i, l, h * o))
          } else
            n &&
              ((u = Math.abs(Oh[0] - Lh[1])),
              (h = Math.abs(Lh[0] - Oh[1])),
              Math.min(u, h) < n.len()) &&
              (u < h ? M.scale(n, l, u * o) : M.scale(n, l, -h * o))
        }
        return a
      }),
      (zh.prototype._getProjMinMaxOnAxis = function (t, e, n) {
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
      zh)
  function zh (t, e) {
    ;(this._corners = []), (this._axes = []), (this._origin = [0, 0])
    for (var n = 0; n < 4; n++) this._corners[n] = new M()
    for (n = 0; n < 2; n++) this._axes[n] = new M()
    t && this.fromBoundingRect(t, e)
  }
  var Eh,
    Fh = [],
    n =
      (u(Vh, (Eh = n)),
      (Vh.prototype.traverse = function (t, e) {
        t.call(e, this)
      }),
      (Vh.prototype.useStyle = function () {
        this.style = {}
      }),
      (Vh.prototype.getCursor = function () {
        return this._cursor
      }),
      (Vh.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length
      }),
      (Vh.prototype.clearDisplaybles = function () {
        ;(this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          this.markRedraw(),
          (this.notClear = !1)
      }),
      (Vh.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = []
      }),
      (Vh.prototype.addDisplayable = function (t, e) {
        ;(e ? this._temporaryDisplayables : this._displayables).push(t),
          this.markRedraw()
      }),
      (Vh.prototype.addDisplayables = function (t, e) {
        e = e || !1
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
      }),
      (Vh.prototype.getDisplayables = function () {
        return this._displayables
      }),
      (Vh.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables
      }),
      (Vh.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++)
          t && t(this._displayables[e])
        for (e = 0; e < this._temporaryDisplayables.length; e++)
          t && t(this._temporaryDisplayables[e])
      }),
      (Vh.prototype.update = function () {
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
      (Vh.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (
            var t = new W(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0;
            e < this._displayables.length;
            e++
          ) {
            var n = this._displayables[e],
              i = n.getBoundingRect().clone()
            n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Fh)),
              t.union(i)
          }
          this._rect = t
        }
        return this._rect
      }),
      (Vh.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e)
        if (this.getBoundingRect().contain(n[0], n[1]))
          for (var i = 0; i < this._displayables.length; i++)
            if (this._displayables[i].contain(t, e)) return !0
        return !1
      }),
      Vh)
  function Vh () {
    var t = (null !== Eh && Eh.apply(this, arguments)) || this
    return (
      (t.notClear = !0),
      (t.incremental = !0),
      (t._displayables = []),
      (t._temporaryDisplayables = []),
      (t._cursor = 0),
      t
    )
  }
  var Hh = Yo()
  function Wh (t, e, n, i, r, o, a) {
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
  function Gh (t, e, n, i, r, o) {
    Wh('update', t, e, n, i, r, o)
  }
  function Uh (t, e, n, i, r, o) {
    Wh('enter', t, e, n, i, r, o)
  }
  function Xh (t) {
    if (!t.__zr) return !0
    for (var e = 0; e < t.animators.length; e++)
      if ('leave' === t.animators[e].scope) return !0
    return !1
  }
  function Yh (t, e, n, i, r, o) {
    Xh(t) || Wh('leave', t, e, n, i, r, o)
  }
  function qh (t, e, n, i) {
    t.removeTextContent(),
      t.removeTextGuideLine(),
      Yh(t, { style: { opacity: 0 } }, e, n, i)
  }
  function jh (t, e, n) {
    function i () {
      t.parent && t.parent.remove(t)
    }
    t.isGroup
      ? t.traverse(function (t) {
          t.isGroup || qh(t, e, n, i)
        })
      : qh(t, e, n, i)
  }
  var Zh = Math.max,
    Kh = Math.min,
    $h = {}
  function Qh (t) {
    return Z.extend(t)
  }
  var Jh = function (t, e) {
    var n,
      i = bu(t, e)
    return u(r, (n = _u)), r
    function r (t) {
      t = n.call(this, t) || this
      return (
        (t.applyTransform = i.applyTransform), (t.buildPath = i.buildPath), t
      )
    }
  }
  function tc (t, e) {
    return Jh(t, e)
  }
  function ec (t, e) {
    $h[t] = e
  }
  function nc (t) {
    if ($h.hasOwnProperty(t)) return $h[t]
  }
  function ic (t, e, n, i) {
    t = new _u(bu(t, e))
    return (
      n && ('center' === i && (n = oc(n, t.getBoundingRect())), sc(t, n)), t
    )
  }
  function rc (t, e, n) {
    var i = new Rs({
      style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
      onload: function (t) {
        'center' === n &&
          ((t = { width: t.width, height: t.height }), i.setStyle(oc(e, t)))
      }
    })
    return i
  }
  function oc (t, e) {
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
  function ac (t, e) {
    for (var n = [], i = t.length, r = 0; r < i; r++) {
      var o = t[r]
      n.push(o.getUpdatedPathProxy(!0))
    }
    return (
      (e = new Z(e)).createPathProxy(),
      (e.buildPath = function (t) {
        var e
        wu(t) && (t.appendPath(n), (e = t.getContext())) && t.rebuildPath(e, 1)
      }),
      e
    )
  }
  function sc (t, e) {
    t.applyTransform &&
      ((e = t.getBoundingRect().calculateTransform(e)), t.applyTransform(e))
  }
  function lc (t, e) {
    return zs(t, t, { lineWidth: e }), t
  }
  var uc = Fs
  function hc (t, e) {
    for (var n = Be([]); t && t !== e; )
      ze(n, t.getLocalTransform(), n), (t = t.parent)
    return n
  }
  function cc (t, e, n) {
    return (
      e && !ut(e) && (e = Lr.getLocalTransform(e)),
      ie([], t, (e = n ? He([], e) : e))
    )
  }
  function pc (t) {
    return !t.isGroup
  }
  function dc (t, e, i) {
    var n, r
    function o (t) {
      var e = { x: t.x, y: t.y, rotation: t.rotation }
      return null != t.shape && (e.shape = O({}, t.shape)), e
    }
    t &&
      e &&
      ((n = {}),
      t.traverse(function (t) {
        pc(t) && t.anid && (n[t.anid] = t)
      }),
      (r = n),
      e.traverse(function (t) {
        var e, n
        pc(t) &&
          t.anid &&
          (e = r[t.anid]) &&
          ((n = o(t)), t.attr(o(e)), Gh(t, n, i, T(t).dataIndex))
      }))
  }
  function fc (t, n) {
    return F(t, function (t) {
      var e = t[0],
        e = Zh(e, n.x),
        t = ((e = Kh(e, n.x + n.width)), t[1]),
        t = Zh(t, n.y)
      return [e, Kh(t, n.y + n.height)]
    })
  }
  function gc (t, e) {
    var n = Zh(t.x, e.x),
      i = Kh(t.x + t.width, e.x + e.width),
      r = Zh(t.y, e.y),
      t = Kh(t.y + t.height, e.y + e.height)
    if (n <= i && r <= t) return { x: n, y: r, width: i - n, height: t - r }
  }
  function yc (t, e, n) {
    var e = O({ rectHover: !0 }, e),
      i = (e.style = { strokeNoScale: !0 })
    if (((n = n || { x: -1, y: -1, width: 2, height: 2 }), t))
      return 0 === t.indexOf('image://')
        ? ((i.image = t.slice(8)), E(i, n), new Rs(e))
        : ic(t.replace('path://', ''), e, n, 'center')
  }
  function mc (t, e, n, i, r, o, a, s) {
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
  function vc (t) {
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
          R(B(a), function (t) {
            Vt(o, t) || ((o[t] = a[t]), o.$vars.push(t))
          }),
        T(t.el))
    ;(t.componentMainType = r),
      (t.componentIndex = n),
      (t.tooltipConfig = {
        name: i,
        option: E({ content: i, formatterParams: o }, e)
      })
  }
  function _c (t, e) {
    var n
    ;(n = t.isGroup ? e(t) : n) || t.traverse(e)
  }
  function xc (t, e) {
    if (t)
      if (V(t)) for (var n = 0; n < t.length; n++) _c(t[n], e)
      else _c(t, e)
  }
  ec('circle', Tu),
    ec('ellipse', Du),
    ec('sector', Yu),
    ec('ring', Ku),
    ec('polygon', eh),
    ec('polyline', oh),
    ec('rect', Gs),
    ec('line', hh),
    ec('bezierCurve', yh),
    ec('arc', xh)
  var wc = Object.freeze({
      __proto__: null,
      Arc: xh,
      BezierCurve: yh,
      BoundingRect: W,
      Circle: Tu,
      CompoundPath: Sh,
      Ellipse: Du,
      Group: io,
      Image: Rs,
      IncrementalDisplayable: n,
      Line: hh,
      LinearGradient: kh,
      OrientedBoundingRect: Nh,
      Path: Z,
      Point: M,
      Polygon: eh,
      Polyline: oh,
      RadialGradient: Th,
      Rect: Gs,
      Ring: Ku,
      Sector: Yu,
      Text: js,
      applyTransform: cc,
      clipPointsByRect: fc,
      clipRectByRect: gc,
      createIcon: yc,
      extendPath: tc,
      extendShape: Qh,
      getShapeClass: nc,
      getTransform: hc,
      groupTransition: dc,
      initProps: Uh,
      isElementRemoved: Xh,
      lineLineIntersect: mc,
      linePolygonIntersect: function (t, e, n, i, r) {
        for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
          var s = r[o]
          if (mc(t, e, n, i, s[0], s[1], a[0], a[1])) return !0
          a = s
        }
      },
      makeImage: rc,
      makePath: ic,
      mergePath: ac,
      registerShape: ec,
      removeElement: Yh,
      removeElementWithFadeOut: jh,
      resizePath: sc,
      setTooltipConfig: vc,
      subPixelOptimize: uc,
      subPixelOptimizeLine: lc,
      subPixelOptimizeRect: function (t) {
        return Es(t.shape, t.shape, t.style), t
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
          i = cc(
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
      traverseElements: xc,
      updateProps: Gh
    }),
    bc = {}
  function Sc (t, e) {
    for (var n = 0; n < gl.length; n++) {
      var i = gl[n],
        r = e[i],
        i = t.ensureState(i)
      ;(i.style = i.style || {}), (i.style.text = r)
    }
    var o = t.currentStates.slice()
    t.clearStates(!0), t.setStyle({ text: e.normal }), t.useStates(o, !0)
  }
  function Mc (t, e, n) {
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
      u < gl.length;
      u++
    ) {
      var h = gl[u],
        c = e[h]
      l[h] = N(
        r ? r.getFormattedLabel(o, h, null, a, c && c.get('formatter')) : null,
        i
      )
    }
    return l
  }
  function Tc (t, e, n, i) {
    n = n || bc
    for (var r = t instanceof js, o = !1, a = 0; a < yl.length; a++)
      if ((p = e[yl[a]]) && p.getShallow('show')) {
        o = !0
        break
      }
    var s = r ? t : t.getTextContent()
    if (o) {
      r ||
        (s || ((s = new js()), t.setTextContent(s)),
        t.stateProxy && (s.stateProxy = t.stateProxy))
      var l = Mc(n, e),
        u = e.normal,
        h = !!u.getShallow('show'),
        c = Cc(u, i && i.normal, n, !1, !r)
      for (
        c.text = l.normal, r || t.setTextConfig(Ic(u, n, !1)), a = 0;
        a < gl.length;
        a++
      ) {
        var p,
          d,
          f,
          g = gl[a]
        ;(p = e[g]) &&
          ((d = s.ensureState(g)),
          (f = !!N(p.getShallow('show'), h)) != h && (d.ignore = !f),
          (d.style = Cc(p, i && i[g], n, !0, !r)),
          (d.style.text = l[g]),
          r || (t.ensureState(g).textConfig = Ic(p, n, !0)))
      }
      ;(s.silent = !!u.getShallow('silent')),
        null != s.style.x && (c.x = s.style.x),
        null != s.style.y && (c.y = s.style.y),
        (s.ignore = !h),
        s.useStyle(c),
        s.dirty(),
        n.enableTextSetter &&
          (Lc(s).setLabelText = function (t) {
            t = Mc(n, e, t)
            Sc(s, t)
          })
    } else s && (s.ignore = !0)
    t.dirty()
  }
  function Cc (t, e, n, i, r) {
    var o,
      a = {},
      s = a,
      l = t,
      u = n,
      h = i,
      c = r
    u = u || bc
    var p,
      t = l.ecModel,
      d = t && t.option.textStyle,
      f = (function (t) {
        for (var e; t && t !== t.ecModel; ) {
          var n = (t.option || bc).rich
          if (n) {
            e = e || {}
            for (var i = B(n), r = 0; r < i.length; r++) e[i[r]] = 1
          }
          t = t.parentModel
        }
        return e
      })(l)
    if (f)
      for (var g in ((p = {}), f))
        f.hasOwnProperty(g) &&
          ((o = l.getModel(['rich', g])),
          Pc((p[g] = {}), o, d, u, h, c, !1, !0))
    return (
      p && (s.rich = p),
      (t = l.get('overflow')) && (s.overflow = t),
      null != (t = l.get('minMargin')) && (s.margin = t),
      Pc(s, l, d, u, h, c, !0, !1),
      e && O(a, e),
      a
    )
  }
  function Ic (t, e, n) {
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
  var kc = [
      'fontStyle',
      'fontWeight',
      'fontSize',
      'fontFamily',
      'textShadowColor',
      'textShadowBlur',
      'textShadowOffsetX',
      'textShadowOffsetY'
    ],
    Dc = [
      'align',
      'lineHeight',
      'width',
      'height',
      'tag',
      'verticalAlign',
      'ellipsis'
    ],
    Ac = [
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
  function Pc (t, e, n, i, r, o, a, s) {
    n = (!r && n) || bc
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
    for (var p = 0; p < kc.length; p++) {
      var d = kc[p]
      null != (f = N(e.getShallow(d), n[d])) && (t[d] = f)
    }
    for (p = 0; p < Dc.length; p++)
      (d = Dc[p]), null != (f = e.getShallow(d)) && (t[d] = f)
    if (
      (null == t.verticalAlign &&
        null != (h = e.getShallow('baseline')) &&
        (t.verticalAlign = h),
      !a || !i.disableBox)
    ) {
      for (p = 0; p < Ac.length; p++) {
        var f,
          d = Ac[p]
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
  var Lc = Yo()
  function Oc (n, i, r, t, o) {
    var a,
      s,
      l,
      u = Lc(n)
    u.valueAnimation &&
      u.prevValue !== u.value &&
      ((a = u.defaultInterpolatedText),
      (s = N(u.interpolatedValue, u.prevValue)),
      (l = u.value),
      (n.percent = 0),
      (null == u.prevValue ? Uh : Gh)(
        n,
        { percent: 1 },
        t,
        i,
        null,
        function (t) {
          var e = (function (t, e, n, i, r) {
              var o = null == e || 'auto' === e
              if (null == i) return i
              if (gt(i))
                return yo(
                  (p = Po(n || 0, i, r)),
                  o ? Math.max(mo(n || 0), mo(i)) : e
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
                    (a[h] = yo(p, o ? Math.max(mo(d), mo(c)) : e)))
              }
              return a
            })(r, u.precision, s, l, t),
            t =
              ((u.interpolatedValue = 1 === t ? null : e),
              Mc(
                {
                  labelDataIndex: i,
                  labelFetcher: o,
                  defaultText: a ? a(e) : e + ''
                },
                u.statesModels,
                e
              ))
          Sc(n, t)
        }
      ))
  }
  var Rc = ['textStyle', 'color'],
    Bc = [
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
    Nc = new js(),
    uc =
      ((zc.prototype.getTextColor = function (t) {
        var e = this.ecModel
        return this.getShallow('color') || (!t && e ? e.get(Rc) : null)
      }),
      (zc.prototype.getFont = function () {
        return (
          (t = {
            fontStyle: this.getShallow('fontStyle'),
            fontWeight: this.getShallow('fontWeight'),
            fontSize: this.getShallow('fontSize'),
            fontFamily: this.getShallow('fontFamily')
          }),
          (e = (e = this.ecModel) && e.getModel('textStyle')),
          kt(
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
      (zc.prototype.getTextRect = function (t) {
        for (
          var e = {
              text: t,
              verticalAlign:
                this.getShallow('verticalAlign') || this.getShallow('baseline')
            },
            n = 0;
          n < Bc.length;
          n++
        )
          e[Bc[n]] = this.getShallow(Bc[n])
        return Nc.useStyle(e), Nc.update(), Nc.getBoundingRect()
      }),
      zc)
  function zc () {}
  var Ec = [
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
    Fc = ua(Ec),
    Vc =
      ((Hc.prototype.getLineStyle = function (t) {
        return Fc(this, t)
      }),
      Hc)
  function Hc () {}
  var Wc = [
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
    Gc = ua(Wc),
    Uc =
      ((Xc.prototype.getItemStyle = function (t, e) {
        return Gc(this, t, e)
      }),
      Xc)
  function Xc () {}
  ;(jc.prototype.init = function (t, e, n) {
    for (var i = 3; i < arguments.length; i++) i - 3, 0
  }),
    (jc.prototype.mergeOption = function (t, e) {
      d(this.option, t, !0)
    }),
    (jc.prototype.get = function (t, e) {
      return null == t
        ? this.option
        : this._doGet(this.parsePath(t), !e && this.parentModel)
    }),
    (jc.prototype.getShallow = function (t, e) {
      var n = this.option,
        n = null == n ? n : n[t]
      return (
        null != n || e || ((e = this.parentModel) && (n = e.getShallow(t))), n
      )
    }),
    (jc.prototype.getModel = function (t, e) {
      var n = null != t,
        t = n ? this.parsePath(t) : null
      return new jc(
        n ? this._doGet(t) : this.option,
        (e =
          e ||
          (this.parentModel &&
            this.parentModel.getModel(this.resolveParentPath(t)))),
        this.ecModel
      )
    }),
    (jc.prototype.isEmpty = function () {
      return null == this.option
    }),
    (jc.prototype.restoreData = function () {}),
    (jc.prototype.clone = function () {
      return new this.constructor(_(this.option))
    }),
    (jc.prototype.parsePath = function (t) {
      return 'string' == typeof t ? t.split('.') : t
    }),
    (jc.prototype.resolveParentPath = function (t) {
      return t
    }),
    (jc.prototype.isAnimationEnabled = function () {
      if (!b.node && this.option)
        return null != this.option.animation
          ? !!this.option.animation
          : this.parentModel
          ? this.parentModel.isAnimationEnabled()
          : void 0
    }),
    (jc.prototype._doGet = function (t, e) {
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
  var Yc,
    qc = jc
  function jc (t, e, n) {
    ;(this.parentModel = e), (this.ecModel = n), (this.option = t)
  }
  ia(qc),
    (hp = qc),
    (Yc = ['__\0is_clz', oa++].join('_')),
    (hp.prototype[Yc] = !0),
    (hp.isInstance = function (t) {
      return !(!t || !t[Yc])
    }),
    lt(qc, Vc),
    lt(qc, Uc),
    lt(qc, ca),
    lt(qc, uc)
  var Zc = Math.round(10 * Math.random())
  function Kc (t) {
    return [t || '', Zc++].join('_')
  }
  function $c (t, e) {
    return d(d({}, t, !0), e, !0)
  }
  var Qc = 'ZH',
    Jc = 'EN',
    tp = Jc,
    ep = {},
    np = {},
    ip =
      b.domSupported &&
      -1 <
        (
          document.documentElement.lang ||
          navigator.language ||
          navigator.browserLanguage
        )
          .toUpperCase()
          .indexOf(Qc)
        ? Qc
        : tp
  function rp (t, e) {
    ;(t = t.toUpperCase()), (np[t] = new qc(e)), (ep[t] = e)
  }
  rp(Jc, {
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
    rp(Qc, {
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
  var op = 1e3,
    ap = 60 * op,
    sp = 60 * ap,
    lp = 24 * sp,
    oa = 365 * lp,
    up = {
      year: '{yyyy}',
      month: '{MMM}',
      day: '{d}',
      hour: '{HH}:{mm}',
      minute: '{HH}:{mm}',
      second: '{HH}:{mm}:{ss}',
      millisecond: '{HH}:{mm}:{ss} {SSS}',
      none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}'
    },
    hp = '{yyyy}-{MM}-{dd}',
    cp = {
      year: '{yyyy}',
      month: '{yyyy}-{MM}',
      day: hp,
      hour: hp + ' ' + up.hour,
      minute: hp + ' ' + up.minute,
      second: hp + ' ' + up.second,
      millisecond: up.none
    },
    pp = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
    dp = [
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
  function fp (t, e) {
    return '0000'.substr(0, e - (t += '').length) + t
  }
  function gp (t) {
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
  function yp (t, e, n, i) {
    var t = So(t),
      r = t[_p(n)](),
      o = t[xp(n)]() + 1,
      a = Math.floor((o - 1) / 3) + 1,
      s = t[wp(n)](),
      l = t['get' + (n ? 'UTC' : '') + 'Day'](),
      u = t[bp(n)](),
      h = ((u - 1) % 12) + 1,
      c = t[Sp(n)](),
      p = t[Mp(n)](),
      t = t[Tp(n)](),
      n = (i instanceof qc ? i : np[i || ip] || np[tp]).getModel('time'),
      i = n.get('month'),
      d = n.get('monthAbbr'),
      f = n.get('dayOfWeek'),
      n = n.get('dayOfWeekAbbr')
    return (e || '')
      .replace(/{yyyy}/g, r + '')
      .replace(/{yy}/g, fp((r % 100) + '', 2))
      .replace(/{Q}/g, a + '')
      .replace(/{MMMM}/g, i[o - 1])
      .replace(/{MMM}/g, d[o - 1])
      .replace(/{MM}/g, fp(o, 2))
      .replace(/{M}/g, o + '')
      .replace(/{dd}/g, fp(s, 2))
      .replace(/{d}/g, s + '')
      .replace(/{eeee}/g, f[l])
      .replace(/{ee}/g, n[l])
      .replace(/{e}/g, l + '')
      .replace(/{HH}/g, fp(u, 2))
      .replace(/{H}/g, u + '')
      .replace(/{hh}/g, fp(h + '', 2))
      .replace(/{h}/g, h + '')
      .replace(/{mm}/g, fp(c, 2))
      .replace(/{m}/g, c + '')
      .replace(/{ss}/g, fp(p, 2))
      .replace(/{s}/g, p + '')
      .replace(/{SSS}/g, fp(t, 3))
      .replace(/{S}/g, t + '')
  }
  function mp (t, e) {
    var t = So(t),
      n = t[xp(e)]() + 1,
      i = t[wp(e)](),
      r = t[bp(e)](),
      o = t[Sp(e)](),
      a = t[Mp(e)](),
      t = 0 === t[Tp(e)](),
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
  function vp (t, e, n) {
    var i = gt(t) ? So(t) : t
    switch ((e = e || mp(t, n))) {
      case 'year':
        return i[_p(n)]()
      case 'half-year':
        return 6 <= i[xp(n)]() ? 1 : 0
      case 'quarter':
        return Math.floor((i[xp(n)]() + 1) / 4)
      case 'month':
        return i[xp(n)]()
      case 'day':
        return i[wp(n)]()
      case 'half-day':
        return i[bp(n)]() / 24
      case 'hour':
        return i[bp(n)]()
      case 'minute':
        return i[Sp(n)]()
      case 'second':
        return i[Mp(n)]()
      case 'millisecond':
        return i[Tp(n)]()
    }
  }
  function _p (t) {
    return t ? 'getUTCFullYear' : 'getFullYear'
  }
  function xp (t) {
    return t ? 'getUTCMonth' : 'getMonth'
  }
  function wp (t) {
    return t ? 'getUTCDate' : 'getDate'
  }
  function bp (t) {
    return t ? 'getUTCHours' : 'getHours'
  }
  function Sp (t) {
    return t ? 'getUTCMinutes' : 'getMinutes'
  }
  function Mp (t) {
    return t ? 'getUTCSeconds' : 'getSeconds'
  }
  function Tp (t) {
    return t ? 'getUTCMilliseconds' : 'getMilliseconds'
  }
  function Cp (t) {
    return t ? 'setUTCMonth' : 'setMonth'
  }
  function Ip (t) {
    return t ? 'setUTCDate' : 'setDate'
  }
  function kp (t) {
    return t ? 'setUTCHours' : 'setHours'
  }
  function Dp (t) {
    return t ? 'setUTCMinutes' : 'setMinutes'
  }
  function Ap (t) {
    return t ? 'setUTCSeconds' : 'setSeconds'
  }
  function Pp (t) {
    return t ? 'setUTCMilliseconds' : 'setMilliseconds'
  }
  function Lp (t) {
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
  function Op (t, e) {
    return (
      (t = (t || '').toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase()
      })),
      (t = e ? t && t.charAt(0).toUpperCase() + t.slice(1) : t)
    )
  }
  var Rp = Ct
  function Bp (t, e, n) {
    function i (t) {
      return t && kt(t) ? t : '-'
    }
    function r (t) {
      return null != t && !isNaN(t) && isFinite(t)
    }
    var o = 'time' === e,
      a = t instanceof Date
    if (o || a) {
      var o = o ? So(t) : t
      if (!isNaN(+o)) return yp(o, '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}', n)
      if (a) return '-'
    }
    return 'ordinal' === e
      ? ft(t)
        ? i(t)
        : gt(t) && r(t)
        ? t + ''
        : '-'
      : r((o = Io(t)))
      ? Lp(o)
      : ft(t)
      ? i(t)
      : 'boolean' == typeof t
      ? t + ''
      : '-'
  }
  function Np (t, e) {
    return '{' + t + (null == e ? '' : e) + '}'
  }
  var zp = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  function Ep (t, e, n) {
    var i = (e = V(e) ? e : [e]).length
    if (!i) return ''
    for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
      var a = zp[o]
      t = t.replace(Np(a), Np(a, 0))
    }
    for (var s = 0; s < i; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]]
        t = t.replace(Np(zp[l], s), n ? we(u) : u)
      }
    return t
  }
  function Fp (t, e) {
    var t = H(t) ? { color: t, extraCssText: e } : t || {},
      n = t.color,
      i = t.type,
      r = ((e = t.extraCssText), t.renderMode || 'html')
    return n
      ? 'html' === r
        ? 'subItem' === i
          ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
            we(n) +
            ';' +
            (e || '') +
            '"></span>'
          : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
            we(n) +
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
  function Vp (t, e) {
    return (
      (e = e || 'transparent'),
      H(t) ? t : (L(t) && t.colorStops && (t.colorStops[0] || {}).color) || e
    )
  }
  function Hp (t, e) {
    var n
    '_blank' === e || 'blank' === e
      ? (((n = window.open()).opener = null), (n.location.href = t))
      : window.open(t, e)
  }
  var Wp = R,
    Gp = ['left', 'right', 'top', 'bottom', 'width', 'height'],
    Up = [
      ['width', 'left', 'right'],
      ['height', 'top', 'bottom']
    ]
  function Xp (a, s, l, u, h) {
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
  var Yp = Xp
  function qp (t, e, n) {
    n = Rp(n || 0)
    var i = e.width,
      r = e.height,
      o = go(t.left, i),
      a = go(t.top, r),
      e = go(t.right, i),
      s = go(t.bottom, r),
      l = go(t.width, i),
      u = go(t.height, r),
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
    p = new W(o + n[3], a + n[0], l, u)
    return (p.margin = n), p
  }
  function jp (t) {
    t = t.layoutMode || t.constructor.layoutMode
    return L(t) ? t : t ? { type: t } : null
  }
  function Zp (l, u, t) {
    var h = t && t.ignoreSize,
      t = (V(h) || (h = [h, h]), n(Up[0], 0)),
      e = n(Up[1], 1)
    function n (t, e) {
      var n = {},
        i = 0,
        r = {},
        o = 0
      if (
        (Wp(t, function (t) {
          r[t] = l[t]
        }),
        Wp(t, function (t) {
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
      Wp(t, function (t) {
        e[t] = n[t]
      })
    }
    i(Up[0], l, t), i(Up[1], l, e)
  }
  function Kp (t) {
    return (
      (e = {}),
      (n = t) &&
        e &&
        Wp(Gp, function (t) {
          n.hasOwnProperty(t) && (e[t] = n[t])
        }),
      e
    )
    var e, n
  }
  dt(Xp, 'vertical'), dt(Xp, 'horizontal')
  var $p,
    Qp,
    Jp,
    td,
    ed = Yo(),
    g =
      (u(nd, ($p = qc)),
      (nd.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n)
      }),
      (nd.prototype.mergeDefaultAndTheme = function (t, e) {
        var n = jp(this),
          i = n ? Kp(t) : {}
        d(t, e.getTheme().get(this.mainType)),
          d(t, this.getDefaultOption()),
          n && Zp(t, i, n)
      }),
      (nd.prototype.mergeOption = function (t, e) {
        d(this.option, t, !0)
        var n = jp(this)
        n && Zp(this.option, t, n)
      }),
      (nd.prototype.optionUpdated = function (t, e) {}),
      (nd.prototype.getDefaultOption = function () {
        var t = this.constructor
        if (!(e = t) || !e[ea]) return t.defaultOption
        var e = ed(this)
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
      (nd.prototype.getReferringComponents = function (t, e) {
        var n = t + 'Id'
        return $o(
          this.ecModel,
          t,
          { index: this.get(t + 'Index', !0), id: this.get(n, !0) },
          e
        )
      }),
      (nd.prototype.getBoxLayoutParams = function () {
        return {
          left: this.get('left'),
          top: this.get('top'),
          right: this.get('right'),
          bottom: this.get('bottom'),
          width: this.get('width'),
          height: this.get('height')
        }
      }),
      (nd.prototype.getZLevelKey = function () {
        return ''
      }),
      (nd.prototype.setZLevel = function (t) {
        this.option.zlevel = t
      }),
      (nd.protoInitialize =
        (((Vc = nd.prototype).type = 'component'),
        (Vc.id = ''),
        (Vc.name = ''),
        (Vc.mainType = ''),
        (Vc.subType = ''),
        void (Vc.componentIndex = 0))),
      nd)
  function nd (t, e, n) {
    t = $p.call(this, t, e, n) || this
    return (t.uid = Kc('ec_cpt_model')), t
  }
  function id (t, e) {
    return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e]
  }
  ra(g, qc),
    la(g),
    (td = {}),
    ((Jp = g).registerSubTypeDefaulter = function (t, e) {
      t = na(t)
      td[t.main] = e
    }),
    (Jp.determineSubType = function (t, e) {
      var n,
        i = e.type
      return (
        i || ((n = na(t).main), Jp.hasSubTypes(t) && td[n] && (i = td[n](e))), i
      )
    }),
    (Qp = function (t) {
      var e = []
      return (
        R(g.getClassesByMainType(t), function (t) {
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
          R((h = e), function (n) {
            var e,
              i,
              r = id(c, n),
              t =
                ((t = r.originalDeps = Qp(n)),
                (e = h),
                (i = []),
                R(t, function (t) {
                  0 <= I(e, t) && i.push(t)
                }),
                i)
            ;(r.entryCount = t.length),
              0 === r.entryCount && p.push(n),
              R(t, function (t) {
                I(r.predecessor, t) < 0 && r.predecessor.push(t)
                var e = id(c, t)
                I(e.successor, t) < 0 && e.successor.push(n)
              })
          })
        var e = { graph: c, noEntryList: p },
          r = e.graph,
          o = e.noEntryList,
          a = {}
        for (
          R(t, function (t) {
            a[t] = !0
          });
          o.length;

        ) {
          var s = o.pop(),
            l = r[s],
            u = !!a[s]
          u && (n.call(i, s, l.originalDeps.slice()), delete a[s]),
            R(l.successor, u ? f : d)
        }
        R(a, function () {
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
  var Uc = '',
    ca =
      ('undefined' != typeof navigator && (Uc = navigator.platform || ''),
      'rgba(0, 0, 0, 0.2)'),
    rd = {
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
        fontFamily: Uc.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
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
    od = z([
      'tooltip',
      'label',
      'itemName',
      'itemId',
      'itemGroupId',
      'seriesName'
    ]),
    ad = 'original',
    sd = 'arrayRows',
    ld = 'objectRows',
    ud = 'keyedColumns',
    hd = 'typedArray',
    cd = 'unknown',
    pd = 'column',
    dd = 'row',
    fd = { Must: 1, Might: 2, Not: 3 },
    gd = Yo()
  function yd (n, t, e) {
    var r,
      i,
      o,
      a,
      s,
      l = {},
      u = md(t)
    return (
      u &&
        n &&
        ((o = []),
        (a = []),
        (t = t.ecModel),
        (t = gd(t).datasetMap),
        (u = u.uid + '_' + e.seriesLayoutBy),
        R((n = n.slice()), function (t, e) {
          t = L(t) ? t : (n[e] = { name: t })
          'ordinal' === t.type && null == r && ((r = e), (i = c(t))),
            (l[t.name] = [])
        }),
        (s = t.get(u) || t.set(u, { categoryWayDim: i, valueWayDim: 0 })),
        R(n, function (t, e) {
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
  function md (t) {
    if (!t.get('data', !0))
      return $o(
        t.ecModel,
        'dataset',
        { index: t.get('datasetIndex', !0), id: t.get('datasetId', !0) },
        Ko
      ).models[0]
  }
  function vd (t, e) {
    var n,
      i,
      r,
      o = t.data,
      a = t.sourceFormat,
      s = t.seriesLayoutBy,
      l = t.dimensionsDefine,
      u = t.startIndex,
      h = e
    if (!mt(o)) {
      if (
        (l && (L((l = l[h])) ? ((i = l.name), (r = l.type)) : H(l) && (i = l)),
        null != r)
      )
        return 'ordinal' === r ? fd.Must : fd.Not
      if (a === sd) {
        var c = o
        if (s === dd) {
          for (var p = c[h], d = 0; d < (p || []).length && d < 5; d++)
            if (null != (n = _(p[u + d]))) return n
        } else
          for (d = 0; d < c.length && d < 5; d++) {
            var f = c[u + d]
            if (f && null != (n = _(f[h]))) return n
          }
      } else if (a === ld) {
        var g = o
        if (!i) return fd.Not
        for (d = 0; d < g.length && d < 5; d++)
          if ((m = g[d]) && null != (n = _(m[i]))) return n
      } else if (a === ud) {
        l = o
        if (!i) return fd.Not
        if (!(p = l[i]) || mt(p)) return fd.Not
        for (d = 0; d < p.length && d < 5; d++)
          if (null != (n = _(p[d]))) return n
      } else if (a === ad) {
        var y = o
        for (d = 0; d < y.length && d < 5; d++) {
          var m = y[d],
            v = zo(m)
          if (!V(v)) return fd.Not
          if (null != (n = _(v[h]))) return n
        }
      }
    }
    return fd.Not
    function _ (t) {
      var e = H(t)
      return null != t && isFinite(t) && '' !== t
        ? e
          ? fd.Might
          : fd.Not
        : e && '-' !== t
        ? fd.Must
        : void 0
    }
  }
  var _d = z()
  var xd = Yo(),
    wd =
      (Yo(),
      (bd.prototype.getColorFromPalette = function (t, e, n) {
        var i = Ro(this.get('color', !0)),
          r = this.get('colorLayer', !0),
          o = this,
          a = xd
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
      (bd.prototype.clearColorPalette = function () {
        var t, e
        ;((e = xd)((t = this)).paletteIdx = 0), (e(t).paletteNameMap = {})
      }),
      bd)
  function bd () {}
  var Sd,
    Md,
    Td,
    Cd,
    Id = '\0_ec_inner',
    kd =
      (u(s, (Cd = qc)),
      (s.prototype.init = function (t, e, n, i, r, o) {
        ;(i = i || {}),
          (this.option = null),
          (this._theme = new qc(i)),
          (this._locale = new qc(r)),
          (this._optionManager = o)
      }),
      (s.prototype.setOption = function (t, e, n) {
        e = Pd(e)
        this._optionManager.setOption(t, n, e), this._resetOption(null, e)
      }),
      (s.prototype.resetOption = function (t, e) {
        return this._resetOption(t, Pd(e))
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
              : Td(this, n),
            (i = !0)),
          ('timeline' !== t && 'media' !== t) || this.restoreData(),
          (t && 'recreate' !== t && 'timeline' !== t) ||
            ((n = r.getTimelineOption(this)) &&
              ((i = !0), this._mergeOption(n, e))),
          (t && 'recreate' !== t && 'media' !== t) ||
            ((n = r.getMediaOption(this)).length &&
              R(
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
        ;(gd(this).datasetMap = z()),
          R(i, function (t, e) {
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
              var t = (e = (e = _d.get(e)) && e(t)) ? n.concat(e) : n,
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
              R(
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
                'series' === o && Sd(this)
            },
            this
          ),
          this._seriesIndices || Sd(this)
      }),
      (s.prototype.getOption = function () {
        var a = _(this.option)
        return (
          R(a, function (t, e) {
            if (g.hasClass(e)) {
              for (var n = Ro(t), i = n.length, r = !1, o = i - 1; 0 <= o; o--)
                n[o] && !Go(n[o]) ? (r = !0) : ((n[o] = null), r || i--)
              ;(n.length = i), (a[e] = n)
            }
          }),
          delete a[Id],
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
                R(Ro(n), function (t) {
                  o[t] && e.push(o[t])
                }))
              : (e =
                  null != i
                    ? Dd('id', i, o)
                    : null != r
                    ? Dd('name', r, o)
                    : ct(o, function (t) {
                        return !!t
                      })),
            Ad(e, t))
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
          o = Ad(
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
        Md(this),
          R(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get('series')[t]
              n.call(i, e, t)
            },
            this
          )
      }),
      (s.prototype.eachRawSeries = function (e, n) {
        R(this._componentsMap.get('series'), function (t) {
          t && e.call(n, t, t.componentIndex)
        })
      }),
      (s.prototype.eachSeriesByType = function (n, i, r) {
        Md(this),
          R(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get('series')[t]
              e.subType === n && i.call(r, e, t)
            },
            this
          )
      }),
      (s.prototype.eachRawSeriesByType = function (t, e, n) {
        return R(this.getSeriesByType(t), e, n)
      }),
      (s.prototype.isSeriesFiltered = function (t) {
        return Md(this), null == this._seriesIndicesMap.get(t.componentIndex)
      }),
      (s.prototype.getCurrentSeriesIndices = function () {
        return (this._seriesIndices || []).slice()
      }),
      (s.prototype.filterSeries = function (n, i) {
        Md(this)
        var r = []
        R(
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
        Sd(this)
        var t = this._componentsMap,
          i = []
        t.each(function (t, e) {
          g.hasClass(e) && i.push(e)
        }),
          g.topologicalTravel(i, g.getAllClassMainTypes(), function (e) {
            R(t.get(e), function (t) {
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
        ((Sd = function (t) {
          var e = (t._seriesIndices = [])
          R(t._componentsMap.get('series'), function (t) {
            t && e.push(t.componentIndex)
          }),
            (t._seriesIndicesMap = z(e))
        }),
        (Md = function (t) {}),
        void (Td = function (t, e) {
          ;(t.option = {}),
            (t.option[Id] = 1),
            (t._componentsMap = z({ series: [] })),
            (t._componentsCount = z())
          var n,
            i,
            r = e.aria
          L(r) && null == r.enabled && (r.enabled = !0),
            (n = e),
            (r = t._theme.option),
            (i = n.color && !n.colorLayer),
            R(r, function (t, e) {
              ;('colorLayer' === e && i) ||
                g.hasClass(e) ||
                ('object' == typeof t
                  ? (n[e] = n[e] ? d(n[e], t, !1) : _(t))
                  : null == n[e] && (n[e] = t))
            }),
            d(e, rd, !1),
            t._mergeOption(e, null)
        }))),
      s)
  function s () {
    return (null !== Cd && Cd.apply(this, arguments)) || this
  }
  function Dd (e, t, n) {
    var i, r
    return V(t)
      ? ((i = z()),
        R(t, function (t) {
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
  function Ad (t, e) {
    return e.hasOwnProperty('subType')
      ? ct(t, function (t) {
          return t && t.subType === e.subType
        })
      : t
  }
  function Pd (t) {
    var e = z()
    return (
      t &&
        R(Ro(t.replaceMerge), function (t) {
          e.set(t, !0)
        }),
      { replaceMergeMainTypeMap: e }
    )
  }
  lt(kd, wd)
  function Ld (e) {
    R(
      Od,
      function (t) {
        this[t] = pt(e[t], e)
      },
      this
    )
  }
  var Od = [
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
    Rd = {},
    Bd =
      ((Nd.prototype.create = function (n, i) {
        var r = []
        R(Rd, function (t, e) {
          t = t.create(n, i)
          r = r.concat(t || [])
        }),
          (this._coordinateSystems = r)
      }),
      (Nd.prototype.update = function (e, n) {
        R(this._coordinateSystems, function (t) {
          t.update && t.update(e, n)
        })
      }),
      (Nd.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice()
      }),
      (Nd.register = function (t, e) {
        Rd[t] = e
      }),
      (Nd.get = function (t) {
        return Rd[t]
      }),
      Nd)
  function Nd () {
    this._coordinateSystems = []
  }
  var zd = /^(min|max)?(.+)$/,
    Ed =
      ((Fd.prototype.setOption = function (t, e, n) {
        t &&
          (R(Ro(t.series), function (t) {
            t && t.data && mt(t.data) && At(t.data)
          }),
          R(Ro(t.dataset), function (t) {
            t && t.source && mt(t.source) && At(t.source)
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
              R(h, function (t) {
                t && t.option && (t.query ? s.push(t) : (o = o || t))
              }),
            f(a),
            R(u, f),
            R(s, function (t) {
              return f(t.option)
            }),
            {
              baseOption: a,
              timelineOptions: u || [],
              mediaDefault: o,
              mediaList: s
            })
        function f (e) {
          R(i, function (t) {
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
      (Fd.prototype.mountOption = function (t) {
        var e = this._optionBackup
        return (
          (this._timelineOptions = e.timelineOptions),
          (this._mediaList = e.mediaList),
          (this._mediaDefault = e.mediaDefault),
          (this._currentMediaIndices = []),
          _(t ? e.baseOption : this._newBaseOption)
        )
      }),
      (Fd.prototype.getTimelineOption = function (t) {
        var e,
          n = this._timelineOptions
        return (e =
          n.length && (t = t.getComponent('timeline'))
            ? _(n[t.getCurrentIndex()])
            : e)
      }),
      (Fd.prototype.getMediaOption = function (t) {
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
                R(t, function (t, e) {
                  var n,
                    e = e.match(zd)
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
      Fd)
  function Fd (t) {
    ;(this._timelineOptions = []),
      (this._mediaList = []),
      (this._currentMediaIndices = []),
      (this._api = t)
  }
  var Vd = R,
    Hd = L,
    Wd = [
      'areaStyle',
      'lineStyle',
      'nodeStyle',
      'linkStyle',
      'chordStyle',
      'label',
      'labelLine'
    ]
  function Gd (t) {
    var e = t && t.itemStyle
    if (e)
      for (var n = 0, i = Wd.length; n < i; n++) {
        var r = Wd[n],
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
  function Ud (t, e, n) {
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
  function Xd (t) {
    Ud(t, 'itemStyle'),
      Ud(t, 'lineStyle'),
      Ud(t, 'areaStyle'),
      Ud(t, 'label'),
      Ud(t, 'labelLine'),
      Ud(t, 'upperLabel'),
      Ud(t, 'edgeLabel')
  }
  function Yd (t, e) {
    var n = Hd(t) && t[e],
      i = Hd(n) && n.textStyle
    if (i)
      for (var r = 0, o = No.length; r < o; r++) {
        var a = No[r]
        i.hasOwnProperty(a) && (n[a] = i[a])
      }
  }
  function qd (t) {
    t && (Xd(t), Yd(t, 'label'), t.emphasis) && Yd(t.emphasis, 'label')
  }
  function jd (t) {
    return V(t) ? t : t ? [t] : []
  }
  function Zd (t) {
    return (V(t) ? t[0] : t) || {}
  }
  function Kd (e, t) {
    Vd(jd(e.series), function (t) {
      if (Hd(t))
        if (Hd(t)) {
          Gd(t),
            Xd(t),
            Yd(t, 'label'),
            Yd(t, 'upperLabel'),
            Yd(t, 'edgeLabel'),
            t.emphasis &&
              (Yd(t.emphasis, 'label'),
              Yd(t.emphasis, 'upperLabel'),
              Yd(t.emphasis, 'edgeLabel'))
          var e = t.markPoint,
            n = (e && (Gd(e), qd(e)), t.markLine),
            i = (n && (Gd(n), qd(n)), t.markArea),
            r = (i && qd(i), t.data)
          if ('graph' === t.type) {
            var r = r || t.nodes,
              o = t.links || t.edges
            if (o && !mt(o)) for (var a = 0; a < o.length; a++) qd(o[a])
            R(t.categories, function (t) {
              Xd(t)
            })
          }
          if (r && !mt(r)) for (a = 0; a < r.length; a++) qd(r[a])
          if ((e = t.markPoint) && e.data)
            for (var s = e.data, a = 0; a < s.length; a++) qd(s[a])
          if ((n = t.markLine) && n.data) {
            var l = n.data
            for (a = 0; a < l.length; a++)
              V(l[a]) ? (qd(l[a][0]), qd(l[a][1])) : qd(l[a])
          }
          'gauge' === t.type
            ? (Yd(t, 'axisLabel'), Yd(t, 'title'), Yd(t, 'detail'))
            : 'treemap' === t.type
            ? (Ud(t.breadcrumb, 'itemStyle'),
              R(t.levels, function (t) {
                Xd(t)
              }))
            : 'tree' === t.type && Xd(t.leaves)
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
      Vd(n, function (t) {
        Vd(jd(e[t]), function (t) {
          t && (Yd(t, 'axisLabel'), Yd(t.axisPointer, 'label'))
        })
      }),
      Vd(jd(e.parallel), function (t) {
        t = t && t.parallelAxisDefault
        Yd(t, 'axisLabel'), Yd(t && t.axisPointer, 'label')
      }),
      Vd(jd(e.calendar), function (t) {
        Ud(t, 'itemStyle'),
          Yd(t, 'dayLabel'),
          Yd(t, 'monthLabel'),
          Yd(t, 'yearLabel')
      }),
      Vd(jd(e.radar), function (t) {
        Yd(t, 'name'),
          t.name &&
            null == t.axisName &&
            ((t.axisName = t.name), delete t.name),
          null != t.nameGap &&
            null == t.axisNameGap &&
            ((t.axisNameGap = t.nameGap), delete t.nameGap)
      }),
      Vd(jd(e.geo), function (t) {
        Hd(t) &&
          (qd(t),
          Vd(jd(t.regions), function (t) {
            qd(t)
          }))
      }),
      Vd(jd(e.timeline), function (t) {
        qd(t), Ud(t, 'label'), Ud(t, 'itemStyle'), Ud(t, 'controlStyle', !0)
        t = t.data
        V(t) &&
          R(t, function (t) {
            L(t) && (Ud(t, 'label'), Ud(t, 'itemStyle'))
          })
      }),
      Vd(jd(e.toolbox), function (t) {
        Ud(t, 'iconStyle'),
          Vd(t.feature, function (t) {
            Ud(t, 'iconStyle')
          })
      }),
      Yd(Zd(e.axisPointer), 'label'),
      Yd(Zd(e.tooltip).axisPointer, 'label')
  }
  function $d (e) {
    e &&
      R(Qd, function (t) {
        t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]])
      })
  }
  var Qd = [
      ['x', 'left'],
      ['y', 'top'],
      ['x2', 'right'],
      ['y2', 'bottom']
    ],
    Jd = [
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
    tf = [
      ['borderRadius', 'barBorderRadius'],
      ['borderColor', 'barBorderColor'],
      ['borderWidth', 'barBorderWidth']
    ]
  function ef (t) {
    var e = t && t.itemStyle
    if (e)
      for (var n = 0; n < tf.length; n++) {
        var i = tf[n][1],
          r = tf[n][0]
        null != e[i] && (e[r] = e[i])
      }
  }
  function nf (t) {
    t &&
      'edge' === t.alignTo &&
      null != t.margin &&
      null == t.edgeDistance &&
      (t.edgeDistance = t.margin)
  }
  function rf (t) {
    t && t.downplay && !t.blur && (t.blur = t.downplay)
  }
  function of (e, t) {
    Kd(e, t),
      (e.series = Ro(e.series)),
      R(e.series, function (t) {
        if (L(t)) {
          var e,
            n = t.type
          if ('line' === n) null != t.clipOverflow && (t.clip = t.clipOverflow)
          else if ('pie' === n || 'gauge' === n) {
            if (
              (null != t.clockWise && (t.clockwise = t.clockWise),
              nf(t.label),
              (e = t.data) && !mt(e))
            )
              for (var i = 0; i < e.length; i++) nf(e[i])
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
              (ef(t),
              ef(t.backgroundStyle),
              ef(t.emphasis),
              (e = t.data) && !mt(e))
            )
              for (i = 0; i < e.length; i++)
                'object' == typeof e[i] && (ef(e[i]), ef(e[i] && e[i].emphasis))
          } else
            'sunburst' === n
              ? ((a = t.highlightPolicy) &&
                  ((t.emphasis = t.emphasis || {}),
                  t.emphasis.focus || (t.emphasis.focus = a)),
                rf(t),
                (function t (e, n) {
                  if (e)
                    for (var i = 0; i < e.length; i++)
                      n(e[i]), e[i] && t(e[i].children, n)
                })(t.data, rf))
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
            $d(t)
        }
      }),
      e.dataRange && (e.visualMap = e.dataRange),
      R(Jd, function (t) {
        t = e[t]
        t &&
          R((t = V(t) ? t : [t]), function (t) {
            $d(t)
          })
      })
  }
  function af (_) {
    R(_, function (p, d) {
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
                (l = Math.max(mo(a), mo(s))),
                (a += s),
                (o = po < l ? a : yo(a, l)),
                (u = c)
              break
            }
          }
        }
        return (f[0] = o), (f[1] = u), f
      })
    })
  }
  var sf,
    lf,
    uf = function (t) {
      ;(this.data = t.data || (t.sourceFormat === ud ? {} : [])),
        (this.sourceFormat = t.sourceFormat || cd),
        (this.seriesLayoutBy = t.seriesLayoutBy || pd),
        (this.startIndex = t.startIndex || 0),
        (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
        (this.metaRawOption = t.metaRawOption)
      var e = (this.dimensionsDefine = t.dimensionsDefine)
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n]
          null == i.type && vd(this, n) === fd.Must && (i.type = 'ordinal')
        }
    }
  function hf (t) {
    return t instanceof uf
  }
  function cf (t, e, n) {
    n = n || df(t)
    var i = e.seriesLayoutBy,
      r = (function (t, e, n, i, r) {
        var o, a
        if (!t)
          return {
            dimensionsDefine: ff(r),
            startIndex: a,
            dimensionsDetectedCount: o
          }
        {
          var s
          e === sd
            ? ((s = t),
              'auto' === i || null == i
                ? gf(
                    function (t) {
                      null != t &&
                        '-' !== t &&
                        (H(t) ? null == a && (a = 1) : (a = 0))
                    },
                    n,
                    s,
                    10
                  )
                : (a = gt(i) ? i : i ? 1 : 0),
              r ||
                1 !== a ||
                ((r = []),
                gf(
                  function (t, e) {
                    r[e] = null != t ? t + '' : ''
                  },
                  n,
                  s,
                  1 / 0
                )),
              (o = r
                ? r.length
                : n === dd
                ? s.length
                : s[0]
                ? s[0].length
                : null))
            : e === ld
            ? (r =
                r ||
                (function (t) {
                  for (var e, n = 0; n < t.length && !(e = t[n++]); );
                  if (e) return B(e)
                })(t))
            : e === ud
            ? r ||
              ((r = []),
              R(t, function (t, e) {
                r.push(e)
              }))
            : e === ad && ((i = zo(t[0])), (o = (V(i) && i.length) || 1))
        }
        return {
          startIndex: a,
          dimensionsDefine: ff(r),
          dimensionsDetectedCount: o
        }
      })(t, n, i, e.sourceHeader, e.dimensions)
    return new uf({
      data: t,
      sourceFormat: n,
      seriesLayoutBy: i,
      dimensionsDefine: r.dimensionsDefine,
      startIndex: r.startIndex,
      dimensionsDetectedCount: r.dimensionsDetectedCount,
      metaRawOption: _(e)
    })
  }
  function pf (t) {
    return new uf({ data: t, sourceFormat: mt(t) ? hd : ad })
  }
  function df (t) {
    var e = cd
    if (mt(t)) e = hd
    else if (V(t)) {
      0 === t.length && (e = sd)
      for (var n = 0, i = t.length; n < i; n++) {
        var r = t[n]
        if (null != r) {
          if (V(r)) {
            e = sd
            break
          }
          if (L(r)) {
            e = ld
            break
          }
        }
      }
    } else if (L(t))
      for (var o in t)
        if (Vt(t, o) && ut(t[o])) {
          e = ud
          break
        }
    return e
  }
  function ff (t) {
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
  function gf (t, e, n, i) {
    if (e === dd)
      for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r)
    else for (var o = n[0] || [], r = 0; r < o.length && r < i; r++) t(o[r], r)
  }
  function yf (t) {
    t = t.sourceFormat
    return t === ld || t === ud
  }
  ;(wf.prototype.getSource = function () {
    return this._source
  }),
    (wf.prototype.count = function () {
      return 0
    }),
    (wf.prototype.getItem = function (t, e) {}),
    (wf.prototype.appendData = function (t) {}),
    (wf.prototype.clean = function () {}),
    (wf.protoInitialize =
      (((uc = wf.prototype).pure = !1), void (uc.persistent = !0))),
    (wf.internalField =
      ((lf = function (t, e, n) {
        var i,
          r = n.sourceFormat,
          o = n.seriesLayoutBy,
          a = n.startIndex,
          n = n.dimensionsDefine
        O(t, sf[Lf(r, o)]),
          r === hd
            ? ((t.getItem = mf), (t.count = _f), (t.fillStorage = vf))
            : ((i = Tf(r, o)),
              (t.getItem = pt(i, null, e, a, n)),
              (i = kf(r, o)),
              (t.count = pt(i, null, e, a, n)))
      }),
      (mf = function (t, e) {
        ;(t -= this._offset), (e = e || [])
        for (
          var n = this._data, i = this._dimSize, r = i * t, o = 0;
          o < i;
          o++
        )
          e[o] = n[r + o]
        return e
      }),
      (vf = function (t, e, n, i) {
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
      (_f = function () {
        return this._data ? this._data.length / this._dimSize : 0
      }),
      ((uc = {})[sd + '_' + pd] = { pure: !0, appendData: bf }),
      (uc[sd + '_' + dd] = {
        pure: !0,
        appendData: function () {
          throw new Error(
            'Do not support appendData when set seriesLayoutBy: "row".'
          )
        }
      }),
      (uc[ld] = { pure: !0, appendData: bf }),
      (uc[ud] = {
        pure: !0,
        appendData: function (t) {
          var r = this._data
          R(t, function (t, e) {
            for (var n = r[e] || (r[e] = []), i = 0; i < (t || []).length; i++)
              n.push(t[i])
          })
        }
      }),
      (uc[ad] = { appendData: bf }),
      (uc[hd] = {
        persistent: !1,
        pure: !0,
        appendData: function (t) {
          this._data = t
        },
        clean: function () {
          ;(this._offset += this.count()), (this._data = null)
        }
      }),
      void (sf = uc)))
  var mf,
    vf,
    _f,
    xf = wf
  function wf (t, e) {
    var t = hf(t) ? t : pf(t),
      n = ((this._source = t), (this._data = t.data))
    t.sourceFormat === hd &&
      ((this._offset = 0), (this._dimSize = e), (this._data = n)),
      lf(this, n, t)
  }
  function bf (t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e])
  }
  function Sf (t, e, n, i) {
    return t[i]
  }
  ;((hp = {})[sd + '_' + pd] = function (t, e, n, i) {
    return t[i + e]
  }),
    (hp[sd + '_' + dd] = function (t, e, n, i, r) {
      i += e
      for (var o = r || [], a = t, s = 0; s < a.length; s++) {
        var l = a[s]
        o[s] = l ? l[i] : null
      }
      return o
    }),
    (hp[ld] = Sf),
    (hp[ud] = function (t, e, n, i, r) {
      for (var o = r || [], a = 0; a < n.length; a++) {
        var s = t[n[a].name]
        o[a] = s ? s[i] : null
      }
      return o
    }),
    (hp[ad] = Sf)
  var Mf = hp
  function Tf (t, e) {
    return Mf[Lf(t, e)]
  }
  function Cf (t, e, n) {
    return t.length
  }
  ;((Vc = {})[sd + '_' + pd] = function (t, e, n) {
    return Math.max(0, t.length - e)
  }),
    (Vc[sd + '_' + dd] = function (t, e, n) {
      t = t[0]
      return t ? Math.max(0, t.length - e) : 0
    }),
    (Vc[ld] = Cf),
    (Vc[ud] = function (t, e, n) {
      t = t[n[0].name]
      return t ? t.length : 0
    }),
    (Vc[ad] = Cf)
  var If = Vc
  function kf (t, e) {
    return If[Lf(t, e)]
  }
  function Df (t, e, n) {
    return t[e]
  }
  ;((ca = {})[sd] = Df),
    (ca[ld] = function (t, e, n) {
      return t[n]
    }),
    (ca[ud] = Df),
    (ca[ad] = function (t, e, n) {
      t = zo(t)
      return t instanceof Array ? t[e] : t
    }),
    (ca[hd] = Df)
  var Af = ca
  function Pf (t) {
    return Af[t]
  }
  function Lf (t, e) {
    return t === sd ? t + '_' + e : t
  }
  function Of (t, e, n) {
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
              Pf(i)(e, t, n))
            : ((r = e), i === ad ? zo(e) : r)
        )
    }
  }
  var Rf = /\{@(.+?)\}/g,
    Uc =
      ((Bf.prototype.getDataParams = function (t, e) {
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
      (Bf.prototype.getFormattedLabel = function (i, t, e, n, r, o) {
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
            ? Ep(r, e).replace(Rf, function (t, e) {
                var n = e.length,
                  n =
                    ('[' === e.charAt(0) &&
                      ']' === e.charAt(n - 1) &&
                      (e = +e.slice(1, n - 1)),
                    Of(a, i, e))
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
      (Bf.prototype.getRawValue = function (t, e) {
        return Of(this.getData(e), t)
      }),
      (Bf.prototype.formatTooltip = function (t, e, n) {}),
      Bf)
  function Bf () {}
  function Nf (t) {
    var e, n
    return L(t) ? t.type && (n = t) : (e = t), { text: e, frag: n }
  }
  function zf (t) {
    return new Ef(t)
  }
  ;(Ff.prototype.perform = function (t) {
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
    (Ff.prototype.dirty = function () {
      ;(this._dirty = !0), this._onDirty && this._onDirty(this.context)
    }),
    (Ff.prototype._doProgress = function (t, e, n, i, r) {
      Yf.reset(e, n, i, r),
        (this._callingProgress = t),
        this._callingProgress(
          { start: e, end: n, count: n - e, next: Yf.next },
          this.context
        )
    }),
    (Ff.prototype._doReset = function (t) {
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
    (Ff.prototype.unfinished = function () {
      return this._progress && this._dueIndex < this._dueEnd
    }),
    (Ff.prototype.pipe = function (t) {
      ;(this._downstream === t && !this._dirty) ||
        (((this._downstream = t)._upstream = this), t.dirty())
    }),
    (Ff.prototype.dispose = function () {
      this._disposed ||
        (this._upstream && (this._upstream._downstream = null),
        this._downstream && (this._downstream._upstream = null),
        (this._dirty = !1),
        (this._disposed = !0))
    }),
    (Ff.prototype.getUpstream = function () {
      return this._upstream
    }),
    (Ff.prototype.getDownstream = function () {
      return this._downstream
    }),
    (Ff.prototype.setOutputEnd = function (t) {
      this._outputDueEnd = this._settedOutputEnd = t
    })
  var Ef = Ff
  function Ff (t) {
    ;(this._reset = (t = t || {}).reset),
      (this._plan = t.plan),
      (this._count = t.count),
      (this._onDirty = t.onDirty),
      (this._dirty = !0)
  }
  var Vf,
    Hf,
    Wf,
    Gf,
    Uf,
    Xf,
    Yf = (Xf = {
      reset: function (t, e, n, i) {
        ;(Hf = t),
          (Vf = e),
          (Wf = n),
          (Gf = i),
          (Uf = Math.ceil(Gf / Wf)),
          (Xf.next = 1 < Wf && 0 < Gf ? jf : qf)
      }
    })
  function qf () {
    return Hf < Vf ? Hf++ : null
  }
  function jf () {
    var t = (Hf % Uf) * Wf + Math.ceil(Hf / Uf),
      t = Vf <= Hf ? null : t < Gf ? t : Hf
    return Hf++, t
  }
  function Zf (t, e) {
    e = e && e.type
    return 'ordinal' === e
      ? t
      : null ==
          (t = 'time' !== e || gt(t) || null == t || '-' === t ? t : +So(t)) ||
        '' === t
      ? NaN
      : +t
  }
  var Kf = z({
    number: function (t) {
      return parseFloat(t)
    },
    time: function (t) {
      return +So(t)
    },
    trim: function (t) {
      return H(t) ? kt(t) : t
    }
  })
  function $f (t) {
    return Kf.get(t)
  }
  var Qf = {
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
    Jf =
      ((ng.prototype.evaluate = function (t) {
        return gt(t)
          ? this._opFn(t, this._rvalFloat)
          : this._opFn(Io(t), this._rvalFloat)
      }),
      ng),
    tg =
      ((eg.prototype.evaluate = function (t, e) {
        var n = gt(t) ? t : Io(t),
          i = gt(e) ? e : Io(e),
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
      eg)
  function eg (t, e) {
    t = 'desc' === t
    ;(this._resultLT = t ? 1 : -1),
      (this._incomparable =
        'min' === (e = null == e ? (t ? 'min' : 'max') : e) ? -1 / 0 : 1 / 0)
  }
  function ng (t, e) {
    gt(e) || f(''), (this._opFn = Qf[t]), (this._rvalFloat = Io(e))
  }
  rg.prototype.evaluate = function (t) {
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
  var ig = rg
  function rg (t, e) {
    ;(this._rval = e),
      (this._isEQ = t),
      (this._rvalTypeof = typeof e),
      (this._rvalFloat = Io(e))
  }
  ;(ag.prototype.getRawData = function () {
    throw new Error('not supported')
  }),
    (ag.prototype.getRawDataItem = function (t) {
      throw new Error('not supported')
    }),
    (ag.prototype.cloneRawData = function () {}),
    (ag.prototype.getDimensionInfo = function (t) {}),
    (ag.prototype.cloneAllDimensionInfo = function () {}),
    (ag.prototype.count = function () {}),
    (ag.prototype.retrieveValue = function (t, e) {}),
    (ag.prototype.retrieveValueFromItem = function (t, e) {}),
    (ag.prototype.convertValue = Zf)
  var og = ag
  function ag () {}
  function sg (t) {
    return dg(t.sourceFormat) || f(''), t.data
  }
  function lg (t) {
    var e = t.sourceFormat,
      n = t.data
    if ((dg(e) || f(''), e === sd)) {
      for (var i = [], r = 0, o = n.length; r < o; r++) i.push(n[r].slice())
      return i
    }
    if (e === ld) {
      for (i = [], r = 0, o = n.length; r < o; r++) i.push(O({}, n[r]))
      return i
    }
  }
  function ug (t, e, n) {
    if (null != n)
      return gt(n) || (!isNaN(n) && !Vt(e, n)) ? t[n] : Vt(e, n) ? e[n] : void 0
  }
  function hg (t) {
    return _(t)
  }
  var cg = z()
  function pg (t, e) {
    var n = Ro(t),
      t = n.length
    t || f('')
    for (var i = 0, r = t; i < r; i++)
      (e = (function (t, i) {
        i.length || f(''), L(t) || f('')
        var e = t.type,
          d = cg.get(e),
          e =
            (d || f(''),
            F(i, function (t) {
              var e = t,
                t = d,
                n = new og(),
                i = e.data,
                r = (n.sourceFormat = e.sourceFormat),
                o = e.startIndex,
                a = (e.seriesLayoutBy !== pd && f(''), []),
                s = {}
              if ((h = e.dimensionsDefine))
                R(h, function (t, e) {
                  var n = t.name,
                    e = { index: e, name: n, displayName: t.displayName }
                  a.push(e), null != n && (Vt(s, n) && f(''), (s[n] = e))
                })
              else
                for (var l = 0; l < e.dimensionsDetectedCount; l++)
                  a.push({ index: l })
              var u = Tf(r, pd),
                h =
                  (t.__isBuiltIn &&
                    ((n.getRawDataItem = function (t) {
                      return u(i, o, a, t)
                    }),
                    (n.getRawData = pt(sg, null, e))),
                  (n.cloneRawData = pt(lg, null, e)),
                  kf(r, pd)),
                c = ((n.count = pt(h, null, i, o, a)), Pf(r)),
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
                (n.getDimensionInfo = pt(ug, null, a, s)),
                (n.cloneAllDimensionInfo = pt(hg, null, a)),
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
            L(t) || f(''), t.data || f(''), dg(df(t.data)) || f('')
            var n = i[0],
              e =
                n && 0 === e && !t.dimensions
                  ? ((e = n.startIndex) &&
                      (t.data = n.data.slice(0, e).concat(t.data)),
                    {
                      seriesLayoutBy: pd,
                      sourceHeader: e,
                      dimensions: n.metaRawOption.dimensions
                    })
                  : {
                      seriesLayoutBy: pd,
                      sourceHeader: 0,
                      dimensions: t.dimensions
                    }
            return cf(t.data, e, null)
          }
        )
      })(n[i], e)),
        i !== r - 1 && (e.length = Math.max(e.length, 1))
    return e
  }
  function dg (t) {
    return t === sd || t === ld
  }
  var fg,
    uc = 'undefined',
    gg = typeof Uint32Array == uc ? Array : Uint32Array,
    yg = typeof Uint16Array == uc ? Array : Uint16Array,
    mg = typeof Int32Array == uc ? Array : Int32Array,
    hp = typeof Float64Array == uc ? Array : Float64Array,
    vg = { float: hp, int: mg, ordinal: Array, number: Array, time: hp }
  function _g (t) {
    return 65535 < t ? gg : yg
  }
  function xg () {
    return [1 / 0, -1 / 0]
  }
  function wg (t, e, n, i, r) {
    n = vg[n || 'float']
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
      r = (this.defaultDimValueGetter = fg[i.sourceFormat])
    ;(this._dimValueGetter = n || r),
      (this._rawExtent = []),
      yf(i),
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
        (this._chunks[r] = new vg[e || 'float'](this._rawCount)),
        (this._rawExtent[r] = xg()),
        r
      )
    }),
    (l.prototype.collectOrdinalMeta = function (t, e) {
      var n = this._chunks[t],
        i = this._dimensions[t],
        r = this._rawExtent,
        o = i.ordinalOffset || 0,
        a = n.length
      0 === o && (r[t] = xg())
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
        wg(n, l, (d = i[l]).type, s, !0)
      for (var u = [], h = a; h < s; h++)
        for (var c = h - a, p = 0; p < r; p++) {
          var d = i[p],
            f = fg.arrayRows.call(this, t[c] || u, d.property, c, p),
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
        s[u] || (s[u] = xg()), wg(r, u, h.type, e, n)
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
          i = new (e = _g(this._rawCount))(this.count()), r = 0;
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
          r = new (_g(n._rawCount))(i),
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
      var i = B(t),
        r = i.length
      if (!r) return this
      var o = e.count(),
        a = new (_g(e._rawCount))(o),
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
        l[e[u]] = xg()
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
        u = new (_g(this._rawCount))(Math.min(2 * (Math.ceil(o / s) + 2), o))
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
          h = (r._rawExtent[t] = xg()),
          c = new (_g(this._rawCount))(Math.ceil(u / s)),
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
        n = xg()
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
    (l.internalField = void (fg = {
      arrayRows: Sg,
      objectRows: function (t, e, n, i) {
        return Zf(t[e], this._dimensions[i])
      },
      keyedColumns: Sg,
      original: function (t, e, n, i) {
        t = t && (null == t.value ? t : t.value)
        return Zf(t instanceof Array ? t[i] : t, this._dimensions[i])
      },
      typedArray: function (t, e, n, i) {
        return t[i]
      }
    }))
  var bg = l
  function l () {
    ;(this._chunks = []),
      (this._rawExtent = []),
      (this._extent = []),
      (this._count = 0),
      (this._rawCount = 0),
      (this._calcDimNameToIdx = z())
  }
  function Sg (t, e, n, i) {
    return Zf(t[i], this._dimensions[i])
  }
  ;(Tg.prototype.dirty = function () {
    this._setLocalSource([], []), (this._storeList = []), (this._dirty = !0)
  }),
    (Tg.prototype._setLocalSource = function (t, e) {
      ;(this._sourceList = t),
        (this._upstreamSignList = e),
        this._versionSignBase++,
        9e10 < this._versionSignBase && (this._versionSignBase = 0)
    }),
    (Tg.prototype._getVersionSign = function () {
      return this._sourceHost.uid + '_' + this._versionSignBase
    }),
    (Tg.prototype.prepareSource = function () {
      this._isDirty() && (this._createSource(), (this._dirty = !1))
    }),
    (Tg.prototype._createSource = function () {
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
      Ig(s)
        ? ((i = s),
          (r = t = o = void 0),
          (e = u
            ? ((e = l[0]).prepareSource(),
              (o = (r = e.getSource()).data),
              (t = r.sourceFormat),
              [e._getVersionSign()])
            : ((t = mt((o = i.get('data', !0))) ? hd : ad), [])),
          (i = this._getSourceMetaRawOption() || {}),
          (r = (r && r.metaRawOption) || {}),
          (a = N(i.seriesLayoutBy, r.seriesLayoutBy) || null),
          (n = N(i.sourceHeader, r.sourceHeader)),
          (i = N(i.dimensions, r.dimensions)),
          (r =
            a !== r.seriesLayoutBy || !!n != !!r.sourceHeader || i
              ? [
                  cf(
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
                cf(o.get('source', !0), this._getSourceMetaRawOption(), null)
              ]),
              []))),
        this._setLocalSource(r, e)
    }),
    (Tg.prototype._applyTransform = function (t) {
      var e,
        n = this._sourceHost,
        i = n.get('transform', !0),
        r = n.get('fromTransformResult', !0),
        o = (null != r && 1 !== t.length && kg(''), []),
        a = []
      return (
        R(t, function (t) {
          t.prepareSource()
          var e = t.getSource(r || 0)
          null == r || e || kg(''), o.push(e), a.push(t._getVersionSign())
        }),
        i
          ? (e = pg(i, o, n.componentIndex))
          : null != r &&
            (e = [
              new uf({
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
    (Tg.prototype._isDirty = function () {
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
    (Tg.prototype.getSource = function (t) {
      var e = this._sourceList[(t = t || 0)]
      return (
        e || ((e = this._getUpstreamSourceManagers())[0] && e[0].getSource(t))
      )
    }),
    (Tg.prototype.getSharedDataStore = function (t) {
      var e = t.makeStoreSchema()
      return this._innerGetDataStore(e.dimensions, t.source, e.hash)
    }),
    (Tg.prototype._innerGetDataStore = function (t, e, n) {
      var i,
        r = this._storeList,
        o = r[0],
        r = (o = o || (r[0] = {}))[n]
      return (
        r ||
          ((i = this._getUpstreamSourceManagers()[0]),
          Ig(this._sourceHost) && i
            ? (r = i._innerGetDataStore(t, e, n))
            : (r = new bg()).initData(new xf(e, t.length), t),
          (o[n] = r)),
        r
      )
    }),
    (Tg.prototype._getUpstreamSourceManagers = function () {
      var t,
        e = this._sourceHost
      return Ig(e)
        ? (t = md(e))
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
    (Tg.prototype._getSourceMetaRawOption = function () {
      var t,
        e,
        n,
        i = this._sourceHost
      return (
        Ig(i)
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
  var Mg = Tg
  function Tg (t) {
    ;(this._sourceList = []),
      (this._storeList = []),
      (this._upstreamSignList = []),
      (this._versionSignBase = 0),
      (this._dirty = !0),
      (this._sourceHost = t)
  }
  function Cg (t) {
    t.option.transform && At(t.option.transform)
  }
  function Ig (t) {
    return 'series' === t.mainType
  }
  function kg (t) {
    throw new Error(t)
  }
  var Dg = 'line-height:1'
  function Ag (t, e) {
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
            we(i + '') +
            'px;color:' +
            we(n) +
            ';font-weight:' +
            we(r + ''),
          valueStyle:
            'font-size:' +
            we(a + '') +
            'px;color:' +
            we(o) +
            ';font-weight:' +
            we(t + '')
        }
      : {
          nameStyle: { fontSize: i, fill: n, fontWeight: r },
          valueStyle: { fontSize: a, fill: o, fontWeight: t }
        }
  }
  var Pg = [0, 10, 20, 30],
    Lg = ['', '\n', '\n\n', '\n\n\n']
  function Og (t, e) {
    return (e.type = t), e
  }
  function Rg (t) {
    return 'section' === t.type
  }
  function Bg (t) {
    return Rg(t) ? Ng : zg
  }
  function Ng (i, r, t, o) {
    var n,
      e = r.noHeader,
      a =
        ((l = (function n (t) {
          var i, e, r
          return Rg(t)
            ? ((i = 0),
              (e = t.blocks.length),
              (r = 1 < e || (0 < e && !t.noHeader)),
              R(t.blocks, function (t) {
                var e = n(t)
                i <= e && (i = e + +(r && (!e || (Rg(t) && !t.noHeader))))
              }),
              i)
            : 0
        })(r)),
        { html: Pg[l], richText: Lg[l] }),
      s = [],
      l = r.blocks || [],
      u = (It(!l || V(l)), (l = l || []), i.orderMode),
      h =
        (r.sortBlocks &&
          u &&
          ((l = l.slice()),
          Vt((h = { valueAsc: 'asc', valueDesc: 'desc' }), u)
            ? ((n = new tg(h[u], null)),
              l.sort(function (t, e) {
                return n.evaluate(t.sortParam, e.sortParam)
              }))
            : 'seriesDesc' === u && l.reverse()),
        R(l, function (t, e) {
          var n = r.valueFormatter,
            n = Bg(t)(
              n ? O(O({}, i), { valueFormatter: n }) : i,
              t,
              0 < e ? a.html : 0,
              o
            )
          null != n && s.push(n)
        }),
        'richText' === i.renderMode
          ? s.join(a.richText)
          : Fg(s.join(''), e ? t : a.html))
    return e
      ? h
      : ((u = Bp(r.header, 'ordinal', i.useUTC)),
        (l = Ag(o, i.renderMode).nameStyle),
        'richText' === i.renderMode
          ? Vg(i, u, l) + a.richText + h
          : Fg('<div style="' + l + ';' + Dg + ';">' + we(u) + '</div>' + h, t))
  }
  function zg (t, e, n, i) {
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
        (i = Ag(i, l)),
        (s = i.nameStyle),
        (i = i.valueStyle),
        'richText' === l
          ? (c ? '' : r) +
            (u ? '' : Vg(t, p, s)) +
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
          : Fg(
              (c ? '' : r) +
                (u
                  ? ''
                  : '<span style="' +
                    s +
                    ';' +
                    (!c ? 'margin-left:2px' : '') +
                    '">' +
                    we(p) +
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
                          F(t, we).join('&nbsp;&nbsp;') +
                          '</span>'
                      )
                    })(f, e, a, i)),
              n
            )
      )
  }
  function Eg (t, e, n, i, r, o) {
    if (t)
      return Bg(t)(
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
  function Fg (t, e) {
    return (
      '<div style="margin: ' +
      e +
      'px 0 0;' +
      Dg +
      ';">' +
      t +
      '<div style="clear:both"></div></div>'
    )
  }
  function Vg (t, e, n) {
    return t.markupStyleCreator.wrapRichTextStyle(e, n)
  }
  function Hg (t, e) {
    t = t.get('padding')
    return null != t ? t : 'richText' === e ? [8, 10] : 10
  }
  ;(Gg.prototype._generateStyleName = function () {
    return '__EC_aUTo_' + this._nextStyleNameId++
  }),
    (Gg.prototype.makeTooltipMarker = function (t, e, n) {
      var i = 'richText' === n ? this._generateStyleName() : null,
        e = Fp({ color: e, type: t, renderMode: n, markerId: i })
      return H(e) ? e : ((this.richTextStyles[i] = e.style), e.content)
    }),
    (Gg.prototype.wrapRichTextStyle = function (t, e) {
      var n = {},
        e =
          (V(e)
            ? R(e, function (t) {
                return O(n, t)
              })
            : O(n, e),
          this._generateStyleName())
      return (this.richTextStyles[e] = n), '{' + e + '|' + t + '}'
    })
  var Wg = Gg
  function Gg () {
    ;(this.richTextStyles = {}), (this._nextStyleNameId = Do())
  }
  function Ug (t) {
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
        Vp((w = p).getData().getItemVisual(_, 'style')[w.visualDrawType]))
    function x (t, e) {
      e = s.getDimensionInfo(e)
      e &&
        !1 !== e.otherDims.tooltip &&
        (l
          ? c.push(
              Og('nameValue', {
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
          ? R(o, function (t) {
              x(Of(s, r, t), t)
            })
          : R(w, x),
        (e = (o = { inlineValues: u, inlineValueTypes: h, blocks: c })
          .inlineValueTypes),
        (n = o.blocks),
        (i = (o = o.inlineValues)[0]))
      : y
      ? ((w = f.getDimensionInfo(g[0])), (i = o = Of(f, d, g[0])), (e = w.type))
      : (i = o = v ? m[0] : m)
    var y = Wo(p),
      g = (y && p.name) || '',
      w = f.getName(d),
      v = t ? g : w
    return Og('section', {
      header: g,
      noHeader: t || !y,
      sortParam: i,
      blocks: [
        Og('nameValue', {
          markerType: 'item',
          markerColor: _,
          name: v,
          noName: !kt(v),
          value: o,
          valueType: e
        })
      ].concat(n || [])
    })
  }
  var Xg = Yo()
  function Yg (t, e) {
    return t.getName(e) || t.getId(e)
  }
  u(h, (qg = g)),
    (h.prototype.init = function (t, e, n) {
      ;(this.seriesIndex = this.componentIndex),
        (this.dataTask = zf({ count: Kg, reset: $g })),
        (this.dataTask.context = { model: this }),
        this.mergeDefaultAndTheme(t, n),
        (Xg(this).sourceManager = new Mg(this)).prepareSource()
      t = this.getInitialData(t, n)
      Jg(t, this),
        (this.dataTask.context.data = t),
        (Xg(this).dataBeforeProcessed = t),
        Zg(this),
        this._initSelectedMapFromData(t)
    }),
    (h.prototype.mergeDefaultAndTheme = function (t, e) {
      var n = jp(this),
        i = n ? Kp(t) : {},
        r = this.subType
      g.hasClass(r),
        d(t, e.getTheme().get(this.subType)),
        d(t, this.getDefaultOption()),
        Bo(t, 'label', ['show']),
        this.fillDataTextStyle(t.data),
        n && Zp(t, i, n)
    }),
    (h.prototype.mergeOption = function (t, e) {
      ;(t = d(this.option, t, !0)), this.fillDataTextStyle(t.data)
      var n = jp(this),
        n = (n && Zp(this.option, t, n), Xg(this).sourceManager),
        n = (n.dirty(), n.prepareSource(), this.getInitialData(t, e))
      Jg(n, this),
        this.dataTask.dirty(),
        (this.dataTask.context.data = n),
        (Xg(this).dataBeforeProcessed = n),
        Zg(this),
        this._initSelectedMapFromData(n)
    }),
    (h.prototype.fillDataTextStyle = function (t) {
      if (t && !mt(t))
        for (var e = ['show'], n = 0; n < t.length; n++)
          t[n] && t[n].label && Bo(t[n], 'label', e)
    }),
    (h.prototype.getInitialData = function (t, e) {}),
    (h.prototype.appendData = function (t) {
      this.getRawData().appendData(t.data)
    }),
    (h.prototype.getData = function (t) {
      var e = ey(this)
      return e
        ? ((e = e.context.data), null == t ? e : e.getLinkedData(t))
        : Xg(this).data
    }),
    (h.prototype.getAllData = function () {
      var t = this.getData()
      return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{ data: t }]
    }),
    (h.prototype.setData = function (t) {
      var e,
        n = ey(this)
      n &&
        (((e = n.context).outputData = t), n !== this.dataTask) &&
        (e.data = t),
        (Xg(this).data = t)
    }),
    (h.prototype.getEncode = function () {
      var t = this.get('encode', !0)
      if (t) return z(t)
    }),
    (h.prototype.getSourceManager = function () {
      return Xg(this).sourceManager
    }),
    (h.prototype.getSource = function () {
      return this.getSourceManager().getSource()
    }),
    (h.prototype.getRawData = function () {
      return Xg(this).dataBeforeProcessed
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
      return Ug({ series: this, dataIndex: t, multipleSeries: e })
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
        wd.prototype.getColorFromPalette.call(this, t, e, n) ||
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
            var a = Yg(r, t[o])
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
        var t = this._selectedDataIndicesMap, e = B(t), n = [], i = 0;
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
        ((e = this.getData(e)), 'all' === n || n[Yg(e, t)]) &&
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
            ;(a[(n = Yg(t, l))] = !0),
              (this._selectedDataIndicesMap[n] = t.getRawIndex(l))
          }
        } else
          ('single' !== r && !0 !== r) ||
            ((n = Yg(t, (r = e[o - 1]))),
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
      (((Vc = h.prototype).type = 'series.__base__'),
      (Vc.seriesIndex = 0),
      (Vc.ignoreStyleOnData = !1),
      (Vc.hasSymbolVisual = !1),
      (Vc.defaultSymbol = 'circle'),
      (Vc.visualStyleAccessPath = 'itemStyle'),
      void (Vc.visualDrawType = 'fill')))
  var qg,
    jg = h
  function h () {
    var t = (null !== qg && qg.apply(this, arguments)) || this
    return (t._selectedDataIndicesMap = {}), t
  }
  function Zg (t) {
    var e,
      n,
      i = t.name
    Wo(t) ||
      (t.name =
        ((t = (e = (t = t).getRawData()).mapDimensionsAll('seriesName')),
        (n = []),
        R(t, function (t) {
          t = e.getDimensionInfo(t)
          t.displayName && n.push(t.displayName)
        }),
        n.join(' ') || i))
  }
  function Kg (t) {
    return t.model.getRawData().count()
  }
  function $g (t) {
    t = t.model
    return t.setData(t.getRawData().cloneShallow()), Qg
  }
  function Qg (t, e) {
    e.outputData &&
      t.end > e.outputData.count() &&
      e.model.getRawData().cloneShallow(e.outputData)
  }
  function Jg (e, n) {
    R(zt(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function (t) {
      e.wrapMethod(t, dt(ty, n))
    })
  }
  function ty (t, e) {
    t = ey(t)
    return t && t.setOutputEnd((e || this).count()), e
  }
  function ey (t) {
    var e,
      n = (t.ecModel || {}).scheduler,
      n = n && n.getPipeline(t.uid)
    if (n) return (n = n.currentTask) && (e = n.agentStubMap) ? e.get(t.uid) : n
  }
  lt(jg, Uc), lt(jg, wd), ra(jg, g)
  ;(iy.prototype.init = function (t, e) {}),
    (iy.prototype.render = function (t, e, n, i) {}),
    (iy.prototype.dispose = function (t, e) {}),
    (iy.prototype.updateView = function (t, e, n, i) {}),
    (iy.prototype.updateLayout = function (t, e, n, i) {}),
    (iy.prototype.updateVisual = function (t, e, n, i) {}),
    (iy.prototype.toggleBlurSeries = function (t, e, n) {}),
    (iy.prototype.eachRendered = function (t) {
      var e = this.group
      e && e.traverse(t)
    })
  var ny = iy
  function iy () {
    ;(this.group = new io()), (this.uid = Kc('viewComponent'))
  }
  function ry () {
    var o = Yo()
    return function (t) {
      var e = o(t),
        t = t.pipelineContext,
        n = !!e.large,
        i = !!e.progressiveRender,
        r = (e.large = !(!t || !t.large)),
        e = (e.progressiveRender = !(!t || !t.progressiveRender))
      return !(n == r && i == e) && 'reset'
    }
  }
  ia(ny), la(ny)
  var oy = Yo(),
    ay = ry(),
    sy =
      ((ly.prototype.init = function (t, e) {}),
      (ly.prototype.render = function (t, e, n, i) {}),
      (ly.prototype.highlight = function (t, e, n, i) {
        t = t.getData(i && i.dataType)
        t && hy(t, i, 'emphasis')
      }),
      (ly.prototype.downplay = function (t, e, n, i) {
        t = t.getData(i && i.dataType)
        t && hy(t, i, 'normal')
      }),
      (ly.prototype.remove = function (t, e) {
        this.group.removeAll()
      }),
      (ly.prototype.dispose = function (t, e) {}),
      (ly.prototype.updateView = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (ly.prototype.updateLayout = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (ly.prototype.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (ly.prototype.eachRendered = function (t) {
        xc(this.group, t)
      }),
      (ly.markUpdateMethod = function (t, e) {
        oy(t).updateMethod = e
      }),
      (ly.protoInitialize = void (ly.prototype.type = 'chart')),
      ly)
  function ly () {
    ;(this.group = new io()),
      (this.uid = Kc('viewChart')),
      (this.renderTask = zf({ plan: cy, reset: py })),
      (this.renderTask.context = { view: this })
  }
  function uy (t, e, n) {
    t && eu(t) && ('emphasis' === e ? Fl : Vl)(t, n)
  }
  function hy (e, t, n) {
    var i,
      r = Xo(e, t),
      o =
        t && null != t.highlightKey
          ? ((t = t.highlightKey),
            (i = null == (i = ul[t]) && ll <= 32 ? (ul[t] = ll++) : i))
          : null
    null != r
      ? R(Ro(r), function (t) {
          uy(e.getItemGraphicEl(t), n, o)
        })
      : e.eachItemGraphicEl(function (t) {
          uy(t, n, o)
        })
  }
  function cy (t) {
    return ay(t.model)
  }
  function py (t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      o = e.pipelineContext.progressiveRender,
      t = t.view,
      a = r && oy(r).updateMethod,
      o = o ? 'incrementalPrepareRender' : a && t[a] ? a : 'render'
    return 'render' !== o && t[o](e, n, i, r), dy[o]
  }
  ia(sy), la(sy)
  var dy = {
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
    fy = '\0__throttleOriginMethod',
    gy = '\0__throttleRate',
    yy = '\0__throttleType'
  function my (t, r, o) {
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
  function vy (t, e, n, i) {
    var r = t[e]
    if (r) {
      var o = r[fy] || r,
        a = r[yy]
      if (r[gy] !== n || a !== i) {
        if (null == n || !i) return (t[e] = o)
        ;((r = t[e] = my(o, n, 'debounce' === i))[fy] = o),
          (r[yy] = i),
          (r[gy] = n)
      }
    }
  }
  function _y (t, e) {
    var n = t[e]
    n && n[fy] && (n.clear && n.clear(), (t[e] = n[fy]))
  }
  var xy = Yo(),
    wy = { itemStyle: ua(Wc, !0), lineStyle: ua(Ec, !0) },
    by = { lineStyle: 'stroke', itemStyle: 'fill' }
  function Sy (t, e) {
    return (
      t.visualStyleMapper ||
      wy[e] ||
      (console.warn("Unknown style type '" + e + "'."), wy.itemStyle)
    )
  }
  function My (t, e) {
    return (
      t.visualDrawType ||
      by[e] ||
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
          o = Sy(r, n)(i),
          i = i.getShallow('decal'),
          a = (i && (e.setVisual('decal', i), (i.dirty = !0)), My(r, n)),
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
    Ty = new qc(),
    uc = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        var i, r, o
        if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t))
          return (
            (e = t.getData()),
            (i = t.visualStyleAccessPath || 'itemStyle'),
            (r = Sy(t, i)),
            (o = e.getVisual('drawType')),
            {
              dataEach: e.hasItemOption
                ? function (t, e) {
                    var n = t.getRawDataItem(e)
                    n &&
                      n[i] &&
                      ((Ty.option = n[i]),
                      (n = r(Ty)),
                      O(t.ensureUniqueItemVisual(e, 'style'), n),
                      Ty.option.decal &&
                        (t.setItemVisual(e, 'decal', Ty.option.decal),
                        (Ty.option.decal.dirty = !0)),
                      o in n) &&
                      t.setItemVisual(e, 'colorFromPalette', !1)
                  }
                : null
            }
          )
      }
    },
    hp = {
      performRawSeries: !0,
      overallReset: function (e) {
        var i = z()
        e.eachSeries(function (t) {
          var e,
            n = t.getColorBy()
          t.isColorBySeries() ||
            ((n = t.type + '-' + n),
            (e = i.get(n)) || i.set(n, (e = {})),
            (xy(t).scope = e))
        }),
          e.eachSeries(function (i) {
            var r, o, a, s, t, l
            i.isColorBySeries() ||
              e.isSeriesFiltered(i) ||
              ((r = i.getRawData()),
              (o = {}),
              (a = i.getData()),
              (s = xy(i).scope),
              (t = i.visualStyleAccessPath || 'itemStyle'),
              (l = My(i, t)),
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
    Cy = Math.PI
  ;(ky.prototype.restoreData = function (t, e) {
    t.restoreData(e),
      this._stageTaskMap.each(function (t) {
        t = t.overallTask
        t && t.dirty()
      })
  }),
    (ky.prototype.getPerformArgs = function (t, e) {
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
    (ky.prototype.getPipeline = function (t) {
      return this._pipelineMap.get(t)
    }),
    (ky.prototype.updateStreamModes = function (t, e) {
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
    (ky.prototype.restorePipelines = function (t) {
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
    (ky.prototype.prepareStageTasks = function () {
      var n = this._stageTaskMap,
        i = this.api.getModel(),
        r = this.api
      R(
        this._allHandlers,
        function (t) {
          var e = n.get(t.uid) || n.set(t.uid, {})
          It(!(t.reset && t.overallReset), ''),
            t.reset && this._createSeriesStageTask(t, e, i, r),
            t.overallReset && this._createOverallStageTask(t, e, i, r)
        },
        this
      )
    }),
    (ky.prototype.prepareView = function (t, e, n, i) {
      var r = t.renderTask,
        o = r.context
      ;(o.model = e),
        (o.ecModel = n),
        (o.api = i),
        (r.__block = !t.incrementalPrepareRender),
        this._pipe(e, r)
    }),
    (ky.prototype.performDataProcessorTasks = function (t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, { block: !0 })
    }),
    (ky.prototype.performVisualTasks = function (t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n)
    }),
    (ky.prototype._performStageTasks = function (t, s, l, u) {
      u = u || {}
      var h = !1,
        c = this
      function p (t, e) {
        return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
      }
      R(t, function (i, t) {
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
    (ky.prototype.performSeriesTasks = function (t) {
      var e
      t.eachSeries(function (t) {
        e = t.dataTask.perform() || e
      }),
        (this.unfinished = e || this.unfinished)
    }),
    (ky.prototype.plan = function () {
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
    (ky.prototype.updatePayload = function (t, e) {
      'remain' !== e && (t.context.payload = e)
    }),
    (ky.prototype._createSeriesStageTask = function (n, t, i, r) {
      var o = this,
        a = t.seriesTaskMap,
        s = (t.seriesTaskMap = z()),
        t = n.seriesType,
        e = n.getTargetSeries
      function l (t) {
        var e = t.uid,
          e = s.set(
            e,
            (a && a.get(e)) || zf({ plan: Oy, reset: Ry, count: zy })
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
    (ky.prototype._createOverallStageTask = function (t, e, n, i) {
      var r = this,
        o = (e.overallTask = e.overallTask || zf({ reset: Dy })),
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
            (a && a.get(e)) || ((h = !0), zf({ reset: Ay, onDirty: Ly }))
          )
        ;(e.context = { model: t, overallProgress: u }),
          (e.agent = o),
          (e.__block = u),
          r._pipe(t, e)
      }
      It(!t.createOnAllSeries, ''),
        e
          ? n.eachRawSeriesByType(e, c)
          : l
          ? l(n, i).each(c)
          : ((u = !1), R(n.getSeries(), c)),
        h && o.dirty()
    }),
    (ky.prototype._pipe = function (t, e) {
      ;(t = t.uid), (t = this._pipelineMap.get(t))
      t.head || (t.head = e),
        t.tail && t.tail.pipe(e),
        ((t.tail = e).__idxInPipeline = t.count++),
        (e.__pipeline = t)
    }),
    (ky.wrapStageHandler = function (t, e) {
      return (
        ((t = S(t)
          ? {
              overallReset: t,
              seriesType: (function (t) {
                Ey = null
                try {
                  t(Fy, Vy)
                } catch (t) {}
                return Ey
              })(t)
            }
          : t).uid = Kc('stageHandler')),
        e && (t.visualType = e),
        t
      )
    })
  var Iy = ky
  function ky (t, e, n, i) {
    ;(this._stageTaskMap = z()),
      (this.ecInstance = t),
      (this.api = e),
      (n = this._dataProcessorHandlers = n.slice()),
      (i = this._visualHandlers = i.slice()),
      (this._allHandlers = n.concat(i))
  }
  function Dy (t) {
    t.overallReset(t.ecModel, t.api, t.payload)
  }
  function Ay (t) {
    return t.overallProgress && Py
  }
  function Py () {
    this.agent.dirty(), this.getDownstream().dirty()
  }
  function Ly () {
    this.agent && this.agent.dirty()
  }
  function Oy (t) {
    return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null
  }
  function Ry (t) {
    t.useClearVisual && t.data.clearAllVisual()
    t = t.resetDefines = Ro(t.reset(t.model, t.ecModel, t.api, t.payload))
    return 1 < t.length
      ? F(t, function (t, e) {
          return Ny(e)
        })
      : By
  }
  var By = Ny(0)
  function Ny (o) {
    return function (t, e) {
      var n = e.data,
        i = e.resetDefines[o]
      if (i && i.dataEach)
        for (var r = t.start; r < t.end; r++) i.dataEach(n, r)
      else i && i.progress && i.progress(t, n)
    }
  }
  function zy (t) {
    return t.data.count()
  }
  var Ey,
    Fy = {},
    Vy = {}
  function Hy (t, e) {
    for (var n in e.prototype) t[n] = Ht
  }
  Hy(Fy, kd),
    Hy(Vy, Ld),
    (Fy.eachSeriesByType = Fy.eachRawSeriesByType =
      function (t) {
        Ey = t
      }),
    (Fy.eachComponent = function (t) {
      'series' === t.mainType && t.subType && (Ey = t.subType)
    })
  function Wy () {
    return {
      axisLine: { lineStyle: { color: Gy } },
      splitLine: { lineStyle: { color: '#484753' } },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)']
        }
      },
      minorSplitLine: { lineStyle: { color: '#20203B' } }
    }
  }
  var Vc = [
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
    Uc = {
      color: Vc,
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
        Vc
      ]
    },
    Gy = '#B9B8CE',
    Wc = '#100C2A',
    Ec = [
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
    Vc = {
      darkMode: !0,
      color: Ec,
      backgroundColor: Wc,
      axisPointer: {
        lineStyle: { color: '#817f91' },
        crossStyle: { color: '#817f91' },
        label: { color: '#fff' }
      },
      legend: { textStyle: { color: Gy } },
      textStyle: { color: Gy },
      title: {
        textStyle: { color: '#EEF1FA' },
        subtextStyle: { color: '#B9B8CE' }
      },
      toolbox: { iconStyle: { borderColor: Gy } },
      dataZoom: {
        borderColor: '#71708A',
        textStyle: { color: Gy },
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
      visualMap: { textStyle: { color: Gy } },
      timeline: {
        lineStyle: { color: Gy },
        label: { color: Gy },
        controlStyle: { color: Gy, borderColor: Gy }
      },
      calendar: {
        itemStyle: { color: Wc },
        dayLabel: { color: Gy },
        monthLabel: { color: Gy },
        yearLabel: { color: Gy }
      },
      timeAxis: Wy(),
      logAxis: Wy(),
      valueAxis: Wy(),
      categoryAxis: Wy(),
      line: { symbol: 'circle' },
      graph: { color: Ec },
      gauge: {
        title: { color: Gy },
        axisLine: { lineStyle: { color: [[1, 'rgba(207,212,219,0.2)']] } },
        axisLabel: { color: Gy },
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
    Uy =
      ((Vc.categoryAxis.splitLine.show = !1),
      (Xy.prototype.normalizeQuery = function (t) {
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
              R(t, function (t, e) {
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
      (Xy.prototype.filter = function (t, e) {
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
      (Xy.prototype.afterTrigger = function () {
        this.eventInfo = null
      }),
      Xy)
  function Xy () {}
  var Yy = ['symbol', 'symbolSize', 'symbolRotate', 'symbolOffset'],
    qy = Yy.concat(['symbolKeepAspect']),
    Wc = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (a, t) {
        var e = a.getData()
        if (
          (a.legendIcon && e.setVisual('legendIcon', a.legendIcon),
          a.hasSymbolVisual)
        ) {
          for (var s, n = {}, l = {}, i = !1, r = 0; r < Yy.length; r++) {
            var o = Yy[r],
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
              (s = B(l)),
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
    Ec = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        if (t.hasSymbolVisual && !e.isSeriesFiltered(t))
          return {
            dataEach: t.getData().hasItemOption
              ? function (t, e) {
                  for (var n = t.getItemModel(e), i = 0; i < qy.length; i++) {
                    var r = qy[i],
                      o = n.getShallow(r, !0)
                    null != o && t.setItemVisual(e, r, o)
                  }
                }
              : null
          }
      }
    }
  function jy (t, e, s, n, l) {
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
  function Zy (t, e, n) {
    for (var i; t && (!e(t) || ((i = t), !n)); ) t = t.__hostTarget || t.parent
    return i
  }
  var Ky = Math.round(9 * Math.random()),
    $y = 'function' == typeof Object.defineProperty,
    Qy =
      ((Jy.prototype.get = function (t) {
        return this._guard(t)[this._id]
      }),
      (Jy.prototype.set = function (t, e) {
        t = this._guard(t)
        return (
          $y
            ? Object.defineProperty(t, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0
              })
            : (t[this._id] = e),
          this
        )
      }),
      (Jy.prototype.delete = function (t) {
        return !!this.has(t) && (delete this._guard(t)[this._id], !0)
      }),
      (Jy.prototype.has = function (t) {
        return !!this._guard(t)[this._id]
      }),
      (Jy.prototype._guard = function (t) {
        if (t !== Object(t))
          throw TypeError('Value of WeakMap is not a non-null object.')
        return t
      }),
      Jy)
  function Jy () {
    this._id = '__ec_inner_' + Ky++
  }
  var t0 = Z.extend({
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
    e0 = Z.extend({
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
    n0 = Z.extend({
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
    i0 = Z.extend({
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
    r0 = {
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
    o0 = {},
    a0 =
      (R(
        {
          line: hh,
          rect: Gs,
          roundRect: Gs,
          square: Gs,
          circle: Tu,
          diamond: e0,
          pin: n0,
          arrow: i0,
          triangle: t0
        },
        function (t, e) {
          o0[e] = new t()
        }
      ),
      Z.extend({
        type: 'symbol',
        shape: { symbolType: '', x: 0, y: 0, width: 0, height: 0 },
        calculateTextPosition: function (t, e, n) {
          var t = Ur(t, e, n),
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
            ((i = (i = o0[r]) || o0[(r = 'rect')]),
            r0[r](e.x, e.y, e.width, e.height, i.shape),
            i.buildPath(t, i.shape, n))
        }
      }))
  function s0 (t, e) {
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
  function l0 (t, e, n, i, r, o, a) {
    var s = 0 === t.indexOf('empty')
    return (
      ((a =
        0 ===
        (t = s ? t.substr(5, 1).toLowerCase() + t.substr(6) : t).indexOf(
          'image://'
        )
          ? rc(t.slice(8), new W(e, n, i, r), a ? 'center' : 'cover')
          : 0 === t.indexOf('path://')
          ? ic(t.slice(7), {}, new W(e, n, i, r), a ? 'center' : 'cover')
          : new a0({
              shape: { symbolType: t, x: e, y: n, width: i, height: r }
            })).__isEmptyBrush = s),
      (a.setColor = s0),
      o && a.setColor(o),
      a
    )
  }
  function u0 (t) {
    return isFinite(t)
  }
  function h0 (t, e, n) {
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
              (u = u0(u) ? u : 0.5),
              (h = u0(h) ? h : 0.5),
              (c = 0 <= c && u0(c) ? c : 0.5),
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
              (o = u0(o) ? o : 0),
              (l = u0(l) ? l : 1),
              (i = u0(i) ? i : 0),
              (u = u0(u) ? u : 0),
              r.createLinearGradient(o, i, l, u)),
        d = e.colorStops,
        f = 0;
      f < d.length;
      f++
    )
      p.addColorStop(d[f].offset, d[f].color)
    return p
  }
  function c0 (t) {
    return parseInt(t, 10)
  }
  function p0 (t, e, n) {
    var i = ['width', 'height'][e],
      r = ['clientWidth', 'clientHeight'][e],
      o = ['paddingLeft', 'paddingTop'][e],
      e = ['paddingRight', 'paddingBottom'][e]
    return null != n[i] && 'auto' !== n[i]
      ? parseFloat(n[i])
      : ((n = document.defaultView.getComputedStyle(t)),
        ((t[r] || c0(n[i]) || c0(t.style[i])) -
          (c0(n[o]) || 0) -
          (c0(n[e]) || 0)) |
          0)
  }
  function d0 (t) {
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
            : gt(r)
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
  var f0 = new us(!0)
  function g0 (t) {
    var e = t.stroke
    return !(null == e || 'none' === e || !(0 < t.lineWidth))
  }
  function y0 (t) {
    return 'string' == typeof t && 'none' !== t
  }
  function m0 (t) {
    t = t.fill
    return null != t && 'none' !== t
  }
  function v0 (t, e) {
    var n
    null != e.fillOpacity && 1 !== e.fillOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.fillOpacity * e.opacity),
        t.fill(),
        (t.globalAlpha = n))
      : t.fill()
  }
  function _0 (t, e) {
    var n
    null != e.strokeOpacity && 1 !== e.strokeOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.strokeOpacity * e.opacity),
        t.stroke(),
        (t.globalAlpha = n))
      : t.stroke()
  }
  function x0 (t, e, n) {
    var n = fa(e.image, e.__image, n)
    if (ya(n))
      return (
        (t = t.createPattern(n, e.repeat || 'repeat')),
        'function' == typeof DOMMatrix &&
          t &&
          t.setTransform &&
          ((n = new DOMMatrix()).translateSelf(e.x || 0, e.y || 0),
          n.rotateSelf(0, 0, (e.rotation || 0) * Wt),
          n.scaleSelf(e.scaleX || 1, e.scaleY || 1),
          t.setTransform(n)),
        t
      )
  }
  var w0 = ['shadowBlur', 'shadowOffsetX', 'shadowOffsetY'],
    b0 = [
      ['lineCap', 'butt'],
      ['lineJoin', 'miter'],
      ['miterLimit', 10]
    ]
  function S0 (t, e, n, i, r) {
    var o,
      a = !1
    if (!i && e === (n = n || {})) return !1
    ;(!i && e.opacity === n.opacity) ||
      (A0(t, r),
      (a = !0),
      (o = Math.max(Math.min(e.opacity, 1), 0)),
      (t.globalAlpha = isNaN(o) ? Aa.opacity : o)),
      (!i && e.blend === n.blend) ||
        (a || (A0(t, r), (a = !0)),
        (t.globalCompositeOperation = e.blend || Aa.blend))
    for (var s = 0; s < w0.length; s++) {
      var l = w0[s]
      ;(!i && e[l] === n[l]) ||
        (a || (A0(t, r), (a = !0)), (t[l] = t.dpr * (e[l] || 0)))
    }
    return (
      (!i && e.shadowColor === n.shadowColor) ||
        (a || (A0(t, r), (a = !0)),
        (t.shadowColor = e.shadowColor || Aa.shadowColor)),
      a
    )
  }
  function M0 (t, e, n, i, r) {
    var o = P0(e, r.inHover),
      a = i ? null : (n && P0(n, r.inHover)) || {}
    if (o !== a) {
      var s = S0(t, o, a, i, r)
      ;(i || o.fill !== a.fill) &&
        (s || (A0(t, r), (s = !0)), y0(o.fill)) &&
        (t.fillStyle = o.fill),
        (i || o.stroke !== a.stroke) &&
          (s || (A0(t, r), (s = !0)), y0(o.stroke)) &&
          (t.strokeStyle = o.stroke),
        (!i && o.opacity === a.opacity) ||
          (s || (A0(t, r), (s = !0)),
          (t.globalAlpha = null == o.opacity ? 1 : o.opacity)),
        e.hasStroke() &&
          ((n =
            o.lineWidth /
            (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1)),
          t.lineWidth !== n) &&
          (s || (A0(t, r), (s = !0)), (t.lineWidth = n))
      for (var l = 0; l < b0.length; l++) {
        var u = b0[l],
          h = u[0]
        ;(!i && o[h] === a[h]) ||
          (s || (A0(t, r), (s = !0)), (t[h] = o[h] || u[1]))
      }
    }
  }
  function T0 (t, e) {
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
  var C0 = 1,
    I0 = 2,
    k0 = 3,
    D0 = 4
  function A0 (t, e) {
    e.batchFill && t.fill(),
      e.batchStroke && t.stroke(),
      (e.batchFill = ''),
      (e.batchStroke = '')
  }
  function P0 (t, e) {
    return (e && t.__hoverStyle) || t.style
  }
  function L0 (t, e) {
    O0(t, e, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0)
  }
  function O0 (t, e, n, N) {
    var i = e.transform
    if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1))
      return (e.__dirty &= ~_n), (e.__isRendered = !1)
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
          (A0(t, n),
          t.restore(),
          (A = D = !0),
          (n.prevElClipPaths = null),
          (n.allClipped = !1),
          (n.prevEl = null)),
        I && I.length)
      ) {
        A0(t, n), t.save()
        var z = I,
          E = t
        k = n
        for (var F = !1, V = 0; V < z.length; V++) {
          var H = z[V],
            F = F || H.isZeroArea()
          T0(E, H), E.beginPath(), H.buildPath(E, H.shape), E.clip()
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
          e instanceof Z &&
            e.autoBatch &&
            ((I = e.style),
            (P = m0(I)),
            (C = g0(I)),
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
            ? (A0(t, n), T0(t, e))
            : P || A0(t, n),
          P0(e, n.inHover))
      if (e instanceof Z)
        n.lastDrawType !== C0 && ((A = !0), (n.lastDrawType = C0)),
          M0(t, e, k, A, n),
          (P && (n.batchFill || n.batchStroke)) || t.beginPath(),
          (i = t),
          (I = e),
          (O = P),
          (y = g0((a = D))),
          (m = m0(a)),
          (v = a.strokePercent),
          (_ = v < 1),
          (x = !I.path),
          (I.silent && !_) || !x || I.createPathProxy(),
          (w = I.path || f0),
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
              ((p = b ? h0(i, s, M) : I.__canvasFillGradient),
              (I.__canvasFillGradient = p)),
            u &&
              ((d = b ? h0(i, T, M) : I.__canvasStrokeGradient),
              (I.__canvasStrokeGradient = d)),
            h &&
              ((f =
                b || !I.__canvasFillPattern
                  ? x0(i, s, I)
                  : I.__canvasFillPattern),
              (I.__canvasFillPattern = f)),
            c &&
              ((g =
                b || !I.__canvasStrokePattern
                  ? x0(i, T, I)
                  : I.__canvasStrokePattern),
              (I.__canvasStrokePattern = f)),
            l ? (i.fillStyle = p) : h && (f ? (i.fillStyle = f) : (m = !1)),
            u
              ? (i.strokeStyle = d)
              : c && (g ? (i.strokeStyle = g) : (y = !1))),
          (M = I.getGlobalScale()),
          w.setScale(M[0], M[1], I.segmentIgnoreThreshold),
          i.setLineDash && a.lineDash && ((S = (s = d0(I))[0]), (L = s[1])),
          (T = !0),
          (x || b & xn) &&
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
              ? (y && _0(i, a), m && v0(i, a))
              : (m && v0(i, a), y && _0(i, a))),
          S && i.setLineDash([]),
          P && ((n.batchFill = D.fill || ''), (n.batchStroke = D.stroke || ''))
      else if (e instanceof Ds)
        n.lastDrawType !== k0 && ((A = !0), (n.lastDrawType = k0)),
          M0(t, e, k, A, n),
          (l = t),
          (p = e),
          null != (f = (h = D).text) && (f += ''),
          f &&
            ((l.font = h.font || K),
            (l.textAlign = h.textAlign),
            (l.textBaseline = h.textBaseline),
            (d = u = void 0),
            l.setLineDash && h.lineDash && ((u = (p = d0(p))[0]), (d = p[1])),
            u && (l.setLineDash(u), (l.lineDashOffset = d)),
            h.strokeFirst
              ? (g0(h) && l.strokeText(f, h.x, h.y),
                m0(h) && l.fillText(f, h.x, h.y))
              : (m0(h) && l.fillText(f, h.x, h.y),
                g0(h) && l.strokeText(f, h.x, h.y)),
            u) &&
            l.setLineDash([])
      else if (e instanceof Rs)
        n.lastDrawType !== I0 && ((A = !0), (n.lastDrawType = I0)),
          (c = k),
          (g = A),
          S0(t, P0(e, (M = n).inHover), c && P0(c, M.inHover), g, M),
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
        n.lastDrawType !== D0 && ((A = !0), (n.lastDrawType = D0))
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
            (B = G[R]).beforeBrush && B.beforeBrush(),
              B.innerBeforeBrush(),
              O0(W, B, Y, R === X - 1),
              B.innerAfterBrush(),
              B.afterBrush && B.afterBrush(),
              (Y.prevEl = B)
          for (var B, q = 0, j = U.length; q < j; q++)
            (B = U[q]).beforeBrush && B.beforeBrush(),
              B.innerBeforeBrush(),
              O0(W, B, Y, q === j - 1),
              B.innerAfterBrush(),
              B.afterBrush && B.afterBrush(),
              (Y.prevEl = B)
          L.clearTemporalDisplayables(), (L.notClear = !0), W.restore()
        }
      }
      P && N && A0(t, n),
        e.innerAfterBrush(),
        e.afterBrush && e.afterBrush(),
        ((n.prevEl = e).__dirty = 0),
        (e.__isRendered = !0)
    }
  }
  var R0 = new Qy(),
    B0 = new ni(100),
    N0 = [
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
  function z0 (t, e) {
    if ('none' === t) return null
    var n = e.getDevicePixelRatio(),
      i = e.getZr(),
      r = 'svg' === i.painter.type,
      e = (t.dirty && R0.delete(t), R0.get(t))
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
      h < N0.length;
      ++h
    ) {
      var c = a[N0[h]]
      if (null != c && !V(c) && !H(c) && !gt(c) && 'boolean' != typeof c) {
        u = !1
        break
      }
      l.push(c)
    }
    u &&
      ((o = l.join(',') + (r ? '-svg' : '')), (v = B0.get(o))) &&
      (r ? (s.svgElement = v) : (s.image = v))
    var p,
      d = (function t (e) {
        if (!e || 0 === e.length) return [[0, 0]]
        if (gt(e)) return [[(o = Math.ceil(e)), o]]
        for (var n = !0, i = 0; i < e.length; ++i)
          if (!gt(e[i])) {
            n = !1
            break
          }
        if (n) return t([e])
        var r = []
        for (i = 0; i < e.length; ++i) {
          var o
          gt(e[i])
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
        if (gt(t)) return [(e = Math.ceil(t)), e]
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
      y = F(d, E0),
      m = E0(f),
      v = !r && U.createCanvas(),
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
            for (var L, O, R, N, B, z = 0, b = 0; b < d[I].length; ++b)
              z += d[I][b]
            if (z <= 0) break
            A % 2 == 0 &&
              ((O = 0.5 * (1 - a.symbolSize)),
              (L = D + d[I][A] * O),
              (O = M + f[T] * O),
              (R = d[I][A] * a.symbolSize),
              (N = f[T] * a.symbolSize),
              (B = (P / 2) % g[k].length),
              (L = L),
              (B = g[k][B]),
              (S = void 0),
              (B = l0(
                B,
                L * (S = r ? 1 : n),
                O * S,
                R * S,
                N * S,
                a.color,
                a.symbolKeepAspect
              )),
              r
                ? (L = i.painter.renderOneToVNode(B)) && _.children.push(L)
                : L0(p, B)),
              (D += d[I][A]),
              ++P,
              ++A === d[I].length && (A = 0)
          }
          ++I === d.length && (I = 0)
        }
        ;(M += f[T]), ++C, ++T === f.length && (T = 0)
      }
    return (
      u && B0.put(o, v || _),
      (s.image = v),
      (s.svgElement = _),
      (s.svgWidth = x.width),
      (s.svgHeight = x.height),
      (e.rotation = a.rotation),
      (e.scaleX = e.scaleY = r ? 1 : 1 / n),
      R0.set(t, e),
      (t.dirty = !1),
      e
    )
  }
  function E0 (t) {
    for (var e = 0, n = 0; n < t.length; ++n) e += t[n]
    return t.length % 2 == 1 ? 2 * e : e
  }
  var F0 = new he(),
    V0 = {}
  var e0 = {
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
    H0 = '__flagInMainProcess',
    W0 = '__pendingUpdate',
    G0 = '__needsUpdateStatus',
    U0 = /^[a-zA-Z0-9_]+$/,
    X0 = '__connectUpdateStatus'
  function Y0 (n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      if (!this.isDisposed()) return j0(this, n, t)
      this.id
    }
  }
  function q0 (n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      return j0(this, n, t)
    }
  }
  function j0 (t, e, n) {
    return (n[0] = n[0] && n[0].toLowerCase()), he.prototype[e].apply(t, n)
  }
  u(gm, (dm = he))
  var Z0,
    K0,
    $0,
    Q0,
    J0,
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
    fm = gm,
    n0 = fm.prototype
  function gm () {
    return (null !== dm && dm.apply(this, arguments)) || this
  }
  ;(n0.on = q0('on')), (n0.off = q0('off'))
  u(c, (ym = he)),
    (c.prototype._onframe = function () {
      if (!this._disposed) {
        pm(this)
        var t = this._scheduler
        if (this[W0]) {
          var e = this[W0].silent
          this[H0] = !0
          try {
            Z0(this), Q0.update.call(this, null, this[W0].updateParams)
          } catch (t) {
            throw ((this[H0] = !1), (this[W0] = null), t)
          }
          this._zr.flush(),
            (this[H0] = !1),
            (this[W0] = null),
            nm.call(this, e),
            im.call(this, e)
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
            tm(this, i),
            t.performVisualTasks(i),
            lm(this, this._model, r, 'remain', {}),
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
      if (!this[H0])
        if (this._disposed) this.id
        else {
          L(e) &&
            ((n = e.lazyUpdate),
            (i = e.silent),
            (r = e.replaceMerge),
            (o = e.transition),
            (e = e.notMerge)),
            (this[H0] = !0),
            (this._model && !e) ||
              ((e = new Ed(this._api)),
              (a = this._theme),
              ((s = this._model = new kd()).scheduler = this._scheduler),
              (s.ssr = this._ssr),
              s.init(null, null, null, a, this._locale, e)),
            this._model.setOption(t, { replaceMerge: r }, Im)
          var i,
            r,
            o,
            a,
            s = { seriesTransition: o, optionChanged: !0 }
          if (n)
            (this[W0] = { silent: i, updateParams: s }),
              (this[H0] = !1),
              this.getZr().wakeUp()
          else {
            try {
              Z0(this), Q0.update.call(this, null, s)
            } catch (t) {
              throw ((this[W0] = null), (this[H0] = !1), t)
            }
            this._ssr || this._zr.flush(),
              (this[W0] = null),
              (this[H0] = !1),
              nm.call(this, i),
              im.call(this, i)
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
          R((t = this._zr).storage.getDisplayList(), function (t) {
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
          R(r, function (t) {
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
          R(n, function (t) {
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
          Lm[o]
            ? ((u = l = 1 / 0),
              (c = h = -1 / 0),
              (p = []),
              (e = (i && i.pixelRatio) || this.getDevicePixelRatio()),
              R(Pm, function (t, e) {
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
              (d = U.createCanvas()),
              (f = uo(d, { renderer: r ? 'svg' : 'canvas' })).resize({
                width: t,
                height: n
              }),
              r
                ? ((g = ''),
                  R(p, function (t) {
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
                      new Gs({
                        shape: { x: 0, y: 0, width: t, height: n },
                        style: { fill: i.connectedBackgroundColor }
                      })
                    ),
                  R(p, function (t) {
                    t = new Rs({
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
      return J0(this, 'convertToPixel', t, e)
    }),
    (c.prototype.convertFromPixel = function (t, e) {
      return J0(this, 'convertFromPixel', t, e)
    }),
    (c.prototype.containPixel = function (t, i) {
      var r
      if (!this._disposed)
        return (
          R(
            jo(this._model, t),
            function (t, n) {
              0 <= n.indexOf('Models') &&
                R(
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
      R(Sm, function (a) {
        function t (t) {
          var n,
            e,
            i,
            r = s.getModel(),
            o = t.target
          'globalout' === a
            ? (n = {})
            : o &&
              Zy(
                o,
                function (t) {
                  var e,
                    t = T(t)
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
        R(Tm, function (t, e) {
          s._messageCenter.on(
            e,
            function (t) {
              this.trigger(e, t)
            },
            s
          )
        }),
        R(['selectchanged'], function (e) {
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
            ? (jy('map', 'selectchanged', n, e, t),
              jy('pie', 'selectchanged', n, e, t))
            : 'select' === t.fromAction
            ? (jy('map', 'selected', n, e, t), jy('pie', 'selected', n, e, t))
            : 'unselect' === t.fromAction &&
              (jy('map', 'unselected', n, e, t),
              jy('pie', 'unselected', n, e, t))
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
          this.getDom() && Qo(this.getDom(), Bm, ''),
          (e = (t = this)._api),
          (n = t._model),
          R(t._componentsViews, function (t) {
            t.dispose(n, e)
          }),
          R(t._chartsViews, function (t) {
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
          delete Pm[t.id])
    }),
    (c.prototype.resize = function (t) {
      if (!this[H0])
        if (this._disposed) this.id
        else {
          this._zr.resize(t)
          var e = this._model
          if ((this._loadingFX && this._loadingFX.resize(), e)) {
            var e = e.resetOption('media'),
              n = t && t.silent
            this[W0] &&
              (null == n && (n = this[W0].silent), (e = !0), (this[W0] = null)),
              (this[H0] = !0)
            try {
              e && Z0(this),
                Q0.update.call(this, {
                  type: 'resize',
                  animation: O({ duration: 0 }, t && t.animation)
                })
            } catch (t) {
              throw ((this[H0] = !1), t)
            }
            ;(this[H0] = !1), nm.call(this, n), im.call(this, n)
          }
        }
    }),
    (c.prototype.showLoading = function (t, e) {
      this._disposed
        ? this.id
        : (L(t) && ((e = t), (t = '')),
          (t = t || 'default'),
          this.hideLoading(),
          Am[t] &&
            ((t = Am[t](this._api, e)),
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
      return (e.type = Tm[t.type]), e
    }),
    (c.prototype.dispatchAction = function (t, e) {
      var n
      this._disposed
        ? this.id
        : (L(e) || (e = { silent: !!e }),
          Mm[t.type] &&
            this._model &&
            (this[H0]
              ? this._pendingActions.push(t)
              : ((n = e.silent),
                em.call(this, t, n),
                (t = e.flush)
                  ? this._zr.flush()
                  : !1 !== t && b.browser.weChat && this._throttledZrFlush(),
                nm.call(this, n),
                im.call(this, n))))
    }),
    (c.prototype.updateLabelLayout = function () {
      F0.trigger('series:layoutlabels', this._model, this._api, {
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
      ((Z0 = function (t) {
        var e = t._scheduler
        e.restorePipelines(t._model),
          e.prepareStageTasks(),
          K0(t, !0),
          K0(t, !1),
          e.plan()
      }),
      (K0 = function (t, r) {
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
              r ? ny.getClass(e.main, e.sub) : sy.getClass(e.sub)
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
      ($0 = function (p, e, d, n, t) {
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
                R(Ro(t), function (t) {
                  t = Ho(t, null)
                  null != t && f.set(t, !0)
                })),
              r &&
                r.eachComponent(
                  i,
                  function (t) {
                    if (!f || null == f.get(t.id))
                      if (iu(d))
                        if (t instanceof jg) {
                          if (
                            d.type === ml &&
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
                                ? Yl(r, (n = T(a)).focus, n.blurScope, i)
                                : ((n = e.get(['emphasis', 'focus'])),
                                  (e = e.get(['emphasis', 'blurScope'])),
                                  null != n && Yl(r, n, e, i))
                            }
                          }
                        } else
                          (n = (r = jl(
                            t.mainType,
                            t.componentIndex,
                            d.name,
                            p._api
                          )).focusSelf),
                            (e = r.dispatchers),
                            d.type === ml &&
                              n &&
                              !d.notBlur &&
                              ql(t.mainType, t.componentIndex, p._api),
                            e &&
                              R(e, function (t) {
                                ;(d.type === ml ? Fl : Vl)(t)
                              })
                      else
                        nu(d) &&
                          t instanceof jg &&
                          ((i = t),
                          (u = d),
                          p._api,
                          nu(u) &&
                            ((h = u.dataType),
                            V((c = Xo(i.getData(h), u))) || (c = [c]),
                            i[
                              u.type === wl
                                ? 'toggleSelect'
                                : u.type === _l
                                ? 'select'
                                : 'unselect'
                            ](c, h)),
                          Zl(t),
                          cm(p))
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
            : R([].concat(p._componentsViews).concat(p._chartsViews), o)
      }),
      (Q0 = {
        prepareAndUpdate: function (t) {
          Z0(this),
            Q0.update.call(this, t, { optionChanged: null != t.newOption })
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
            tm(this, n),
            o.update(n, i),
            vm(n),
            a.performVisualTasks(n, t),
            am(this, n, i, t, e),
            (o = n.get('backgroundColor') || 'transparent'),
            (a = n.get('darkMode')),
            r.setBackgroundColor(o),
            null != a && 'auto' !== a && r.setDarkMode(a),
            F0.trigger('afterupdate', n, i))
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
            vm(a),
            this._scheduler.performVisualTasks(a, n, {
              setDirty: !0,
              dirtyMap: r
            }),
            lm(this, a, s, n, {}, r),
            F0.trigger('afterupdate', a, s))
        },
        updateView: function (t) {
          var e = this._model
          e &&
            (e.setUpdatePayload(t),
            sy.markUpdateMethod(t, 'updateView'),
            vm(e),
            this._scheduler.performVisualTasks(e, t, { setDirty: !0 }),
            am(this, e, this._api, t, {}),
            F0.trigger('afterupdate', e, this._api))
        },
        updateVisual: function (n) {
          var i = this,
            r = this._model
          r &&
            (r.setUpdatePayload(n),
            r.eachSeries(function (t) {
              t.getData().clearAllVisual()
            }),
            sy.markUpdateMethod(n, 'updateVisual'),
            vm(r),
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
            F0.trigger('afterupdate', r, this._api))
        },
        updateLayout: function (t) {
          Q0.update.call(this, t)
        }
      }),
      (J0 = function (t, e, n, i) {
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
      (tm = function (t, e) {
        var n = t._chartsMap,
          i = t._scheduler
        e.eachSeries(function (t) {
          i.updateStreamModes(t, n[t.__viewId])
        })
      }),
      (em = function (i, t) {
        var r = this,
          e = this.getModel(),
          n = i.type,
          o = i.escapeConnect,
          a = Mm[n],
          s = a.actionInfo,
          l = (s.update || 'update').split(':'),
          u = l.pop(),
          h = null != l[0] && na(l[0]),
          l = ((this[H0] = !0), [i]),
          c = !1
        i.batch &&
          ((c = !0),
          (l = F(i.batch, function (t) {
            return ((t = E(O({}, t), i)).batch = null), t
          })))
        var p = [],
          d = nu(i),
          f = iu(i)
        if (
          (f && Xl(this._api),
          R(l, function (t) {
            var e, n
            ;((y = (y = a.action(t, r._model, r._api)) || O({}, t)).type =
              s.event || y.type),
              p.push(y),
              f
                ? ((e = (n = Zo(i)).queryOptionMap),
                  (n = n.mainTypeSpecified ? e.keys()[0] : 'series'),
                  $0(r, u, t, n),
                  cm(r))
                : d
                ? ($0(r, u, t, 'series'), cm(r))
                : h && $0(r, u, t, h.main, h.sub)
          }),
          'none' !== u && !f && !d && !h)
        )
          try {
            this[W0]
              ? (Z0(this), Q0.update.call(this, i), (this[W0] = null))
              : Q0[u].call(this, i)
          } catch (i) {
            throw ((this[H0] = !1), i)
          }
        var g,
          y = c ? { type: s.event || n, escapeConnect: o, batch: p } : p[0]
        ;(this[H0] = !1),
          t ||
            ((l = this._messageCenter).trigger(y.type, y),
            d &&
              ((c = {
                type: 'selectchanged',
                escapeConnect: o,
                selected:
                  ((g = []),
                  e.eachSeries(function (n) {
                    R(n.getAllData(), function (t) {
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
      (nm = function (t) {
        for (var e = this._pendingActions; e.length; ) {
          var n = e.shift()
          em.call(this, n, t)
        }
      }),
      (im = function (t) {
        t || this.trigger('updated')
      }),
      (rm = function (e, n) {
        e.on('rendered', function (t) {
          n.trigger('rendered', t),
            !e.animation.isFinished() ||
              n[W0] ||
              n._scheduler.unfinished ||
              n._pendingActions.length ||
              n.trigger('finished')
        })
      }),
      (om = function (t, a) {
        t.on('mouseover', function (t) {
          var e,
            n,
            i,
            r,
            o = Zy(t.target, eu)
          o &&
            ((o = o),
            (e = t),
            (t = a._api),
            (n = T(o)),
            (i = (r = jl(
              n.componentMainType,
              n.componentIndex,
              n.componentHighDownName,
              t
            )).dispatchers),
            (r = r.focusSelf),
            i
              ? (r && ql(n.componentMainType, n.componentIndex, t),
                R(i, function (t) {
                  return zl(t, e)
                }))
              : (Yl(n.seriesIndex, n.focus, n.blurScope, t),
                'self' === n.focus &&
                  ql(n.componentMainType, n.componentIndex, t),
                zl(o, e)),
            cm(a))
        })
          .on('mouseout', function (t) {
            var e,
              n,
              i = Zy(t.target, eu)
            i &&
              ((i = i),
              (e = t),
              Xl((t = a._api)),
              (n = jl(
                (n = T(i)).componentMainType,
                n.componentIndex,
                n.componentHighDownName,
                t
              ).dispatchers)
                ? R(n, function (t) {
                    return El(t, e)
                  })
                : El(i, e),
              cm(a))
          })
          .on('click', function (t) {
            var e,
              t = Zy(
                t.target,
                function (t) {
                  return null != T(t).dataIndex
                },
                !0
              )
            t &&
              ((e = t.selected ? 'unselect' : 'select'),
              (t = T(t)),
              a._api.dispatchAction({
                type: e,
                dataType: t.dataType,
                dataIndexInside: t.dataIndex,
                seriesIndex: t.seriesIndex,
                isFromClick: !0
              }))
          })
      }),
      (am = function (t, e, n, i, r) {
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
            (vn((l = u.concat(h)), function (t, e) {
              return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel
            }),
            R(l, function (t) {
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
          sm(t, e, n, i, r),
          R(t._chartsViews, function (t) {
            t.__alive = !1
          }),
          lm(t, e, n, i, r),
          R(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n)
          })
      }),
      (sm = function (t, n, i, r, e, o) {
        R(o || t._componentsViews, function (t) {
          var e = t.__model
          wm(0, t), t.render(e, n, i, r), xm(e, t), bm(e, t)
        })
      }),
      (lm = function (r, t, e, o, n, a) {
        var i,
          s,
          l,
          u,
          h = r._scheduler,
          c =
            ((n = O(n || {}, { updatedSeries: t.getSeries() })),
            F0.trigger('series:beforeupdate', t, e, n),
            !1)
        t.eachSeries(function (t) {
          var e,
            n = r._chartsMap[t.__viewId],
            i = ((n.__alive = !0), n.renderTask)
          h.updatePayload(i, o),
            wm(0, n),
            a && a.get(t.uid) && i.dirty(),
            i.perform(h.getPerformArgs(i)) && (c = !0),
            (n.group.silent = !!t.get('silent')),
            (i = n),
            (e = t.get('blendMode') || null),
            i.eachRendered(function (t) {
              t.isGroup || (t.style.blend = e)
            }),
            Zl(t)
        }),
          (h.unfinished = c || h.unfinished),
          F0.trigger('series:layoutlabels', t, e, n),
          F0.trigger('series:transition', t, e, n),
          t.eachSeries(function (t) {
            var e = r._chartsMap[t.__viewId]
            xm(t, e), bm(t, e)
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
          F0.trigger('series:afterupdate', t, e, n)
      }),
      (cm = function (t) {
        ;(t[G0] = !0), t.getZr().wakeUp()
      }),
      (pm = function (t) {
        t[G0] &&
          (t.getZr().storage.traverse(function (t) {
            Xh(t) || _m(t)
          }),
          (t[G0] = !1))
      }),
      (um = function (n) {
        return (
          u(t, (e = Ld)),
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
            Fl(t, e), cm(n)
          }),
          (t.prototype.leaveEmphasis = function (t, e) {
            Vl(t, e), cm(n)
          }),
          (t.prototype.enterBlur = function (t) {
            Ol(t, kl), cm(n)
          }),
          (t.prototype.leaveBlur = function (t) {
            Hl(t), cm(n)
          }),
          (t.prototype.enterSelect = function (t) {
            Wl(t), cm(n)
          }),
          (t.prototype.leaveSelect = function (t) {
            Gl(t), cm(n)
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
      void (hm = function (i) {
        function r (t, e) {
          for (var n = 0; n < t.length; n++) t[n][X0] = e
        }
        R(Tm, function (t, e) {
          i._messageCenter.on(e, function (t) {
            var e, n
            !Lm[i.group] ||
              0 === i[X0] ||
              (t && t.escapeConnect) ||
              ((e = i.makeActionFromEvent(t)),
              (n = []),
              R(Pm, function (t) {
                t !== i && t.group === i.group && n.push(t)
              }),
              r(n, 0),
              R(n, function (t) {
                1 !== t[X0] && t.dispatchAction(e)
              }),
              r(n, 2))
          })
        })
      })))
  var ym,
    mm = c,
    i0 = mm.prototype
  function c (t, e, n) {
    var i = ym.call(this, new Uy()) || this,
      t =
        ((i._chartsViews = []),
        (i._chartsMap = {}),
        (i._componentsViews = []),
        (i._componentsMap = {}),
        (i._pendingActions = []),
        (n = n || {}),
        H(e) && (e = Dm[e]),
        (i._dom = t),
        (i._zr = uo(t, {
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
        (i._throttledZrFlush = my(pt(t.flush, t), 17)),
        (e = _(e)) && of(e, !0),
        (i._theme = e),
        (i._locale = H((e = n.locale || ip))
          ? ((n = ep[e.toUpperCase()] || {}),
            e === Qc || e === Jc ? _(n) : d(_(n), _(ep[tp]), !1))
          : d(_(e), _(ep[tp]), !1)),
        (i._coordSysMgr = new Bd()),
        (i._api = um(i)))
    function r (t, e) {
      return t.__prio - e.__prio
    }
    return (
      vn(km, r),
      vn(Cm, r),
      (i._scheduler = new Iy(i, n, Cm, km)),
      (i._messageCenter = new fm()),
      i._initEvents(),
      (i.resize = pt(i.resize, i)),
      t.animation.on('frame', i._onframe, i),
      rm(t, i),
      om(t, i),
      At(i),
      i
    )
  }
  function vm (t) {
    t.clearColorPalette(),
      t.eachSeries(function (t) {
        t.clearColorPalette()
      })
  }
  function _m (t) {
    for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
      var r = n[i]
      'emphasis' !== r && 'blur' !== r && 'select' !== r && e.push(r)
    }
    t.selected && t.states.select && e.push('select'),
      t.hoverState === fl && t.states.emphasis
        ? e.push('emphasis')
        : t.hoverState === dl && t.states.blur && e.push('blur'),
      t.useStates(e)
  }
  function xm (t, e) {
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
  function wm (t, e) {
    e.eachRendered(function (t) {
      var e, n
      Xh(t) ||
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
  function bm (t, e) {
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
        (Xh(t) ||
          (t instanceof Z &&
            (((i = hl((n = t))).normalFill = n.style.fill),
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
          t.__dirty && _m(t)))
    })
  }
  ;(i0.on = Y0('on')),
    (i0.off = Y0('off')),
    (i0.one = function (i, r, t) {
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
  var Sm = [
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
  var Mm = {},
    Tm = {},
    Cm = [],
    Im = [],
    km = [],
    Dm = {},
    Am = {},
    Pm = {},
    Lm = {},
    Om = +new Date(),
    Rm = +new Date(),
    Bm = '_echarts_instance_'
  function Nm (t) {
    Lm[t] = !1
  }
  t0 = Nm
  function zm (t) {
    return Pm[((e = Bm), (t = t).getAttribute ? t.getAttribute(e) : t[e])]
    var e
  }
  function Em (t, e) {
    Dm[t] = e
  }
  function Fm (t) {
    I(Im, t) < 0 && Im.push(t)
  }
  function Vm (t, e) {
    Zm(Cm, t, e, 2e3)
  }
  function Hm (t) {
    Gm('afterinit', t)
  }
  function Wm (t) {
    Gm('afterupdate', t)
  }
  function Gm (t, e) {
    F0.on(t, e)
  }
  function Um (t, e, n) {
    S(e) && ((n = e), (e = ''))
    var i = L(t) ? t.type : [t, (t = { event: e })][0]
    ;(t.event = (t.event || i).toLowerCase()),
      (e = t.event),
      Tm[e] ||
        (It(U0.test(i) && U0.test(e)),
        Mm[i] || (Mm[i] = { action: n, actionInfo: t }),
        (Tm[e] = i))
  }
  function Xm (t, e) {
    Bd.register(t, e)
  }
  function Ym (t, e) {
    Zm(km, t, e, 1e3, 'layout')
  }
  function qm (t, e) {
    Zm(km, t, e, 3e3, 'visual')
  }
  var jm = []
  function Zm (t, e, n, i, r) {
    ;(S(e) || L(e)) && ((n = e), (e = i)),
      0 <= I(jm, n) ||
        (jm.push(n),
        ((i = Iy.wrapStageHandler(n, r)).__prio = e),
        (i.__raw = n),
        t.push(i))
  }
  function Km (t, e) {
    Am[t] = e
  }
  function $m (t, e, n) {
    var i = V0.registerMap
    i && i(t, e, n)
  }
  function Qm (t) {
    var e = (t = _(t)).type,
      n = (e || f(''), e.split(':')),
      i = (2 !== n.length && f(''), !1)
    'echarts' === n[0] && ((e = n[1]), (i = !0)),
      (t.__isBuiltIn = i),
      cg.set(e, t)
  }
  qm(2e3, ca),
    qm(4500, uc),
    qm(4500, hp),
    qm(2e3, Wc),
    qm(4500, Ec),
    qm(7e3, function (e, i) {
      e.eachRawSeries(function (t) {
        var n
        !e.isSeriesFiltered(t) &&
          ((n = t.getData()).hasItemVisual() &&
            n.each(function (t) {
              var e = n.getItemVisual(t, 'decal')
              e && (n.ensureUniqueItemVisual(t, 'style').decal = z0(e, i))
            }),
          (t = n.getVisual('decal'))) &&
          (n.getVisual('style').decal = z0(t, i))
      })
    }),
    Fm(of),
    Vm(900, function (t) {
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
        i.each(af)
    }),
    Km('default', function (i, r) {
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
      var t = new io(),
        o = new Gs({ style: { fill: r.maskColor }, zlevel: r.zlevel, z: 1e4 })
      t.add(o)
      var a,
        s = new js({
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
        l = new Gs({
          style: { fill: 'none' },
          textContent: s,
          textConfig: { position: 'right', distance: 10 },
          zlevel: r.zlevel,
          z: 10001
        })
      return (
        t.add(l),
        r.showSpinner &&
          ((a = new xh({
            shape: {
              startAngle: -Cy / 2,
              endAngle: -Cy / 2 + 0.1,
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
            .when(1e3, { endAngle: (3 * Cy) / 2 })
            .start('circularInOut'),
          a
            .animateShape(!0)
            .when(1e3, { startAngle: (3 * Cy) / 2 })
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
    Um({ type: ml, event: ml, update: ml }, Ht),
    Um({ type: vl, event: vl, update: vl }, Ht),
    Um({ type: _l, event: _l, update: _l }, Ht),
    Um({ type: xl, event: xl, update: xl }, Ht),
    Um({ type: wl, event: wl, update: wl }, Ht),
    Em('light', Uc),
    Em('dark', Vc)
  function Jm (t) {
    return null == t ? 0 : t.length || 1
  }
  function tv (t) {
    return t
  }
  ;(nv.prototype.add = function (t) {
    return (this._add = t), this
  }),
    (nv.prototype.update = function (t) {
      return (this._update = t), this
    }),
    (nv.prototype.updateManyToOne = function (t) {
      return (this._updateManyToOne = t), this
    }),
    (nv.prototype.updateOneToMany = function (t) {
      return (this._updateOneToMany = t), this
    }),
    (nv.prototype.updateManyToMany = function (t) {
      return (this._updateManyToMany = t), this
    }),
    (nv.prototype.remove = function (t) {
      return (this._remove = t), this
    }),
    (nv.prototype.execute = function () {
      this[this._diffModeMultiple ? '_executeMultiple' : '_executeOneToOne']()
    }),
    (nv.prototype._executeOneToOne = function () {
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
          u = Jm(l)
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
    (nv.prototype._executeMultiple = function () {
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
          h = Jm(l),
          c = Jm(u)
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
    (nv.prototype._performRestAdd = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = e[i],
          o = Jm(r)
        if (1 < o) for (var a = 0; a < o; a++) this._add && this._add(r[a])
        else 1 === o && this._add && this._add(r)
        e[i] = null
      }
    }),
    (nv.prototype._initIndexMap = function (t, e, n, i) {
      for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var a,
          s,
          l = '_ec_' + this[i](t[o], o)
        r || (n[o] = l),
          e &&
            (0 === (s = Jm((a = e[l])))
              ? ((e[l] = o), r && n.push(l))
              : 1 === s
              ? (e[l] = [a, o])
              : a.push(o))
      }
    })
  var ev = nv
  function nv (t, e, n, i, r, o) {
    ;(this._old = t),
      (this._new = e),
      (this._oldKeyGetter = n || tv),
      (this._newKeyGetter = i || tv),
      (this.context = r),
      (this._diffModeMultiple = 'multiple' === o)
  }
  ;(rv.prototype.get = function () {
    return {
      fullDimensions: this._getFullDimensionNames(),
      encode: this._encode
    }
  }),
    (rv.prototype._getFullDimensionNames = function () {
      return (
        this._cachedDimNames ||
          (this._cachedDimNames = this._schema
            ? this._schema.makeOutputDimensionNames()
            : []),
        this._cachedDimNames
      )
    })
  var iv = rv
  function rv (t, e) {
    ;(this._encode = t), (this._schema = e)
  }
  function ov (o, t) {
    var e = {},
      a = (e.encode = {}),
      s = z(),
      l = [],
      u = [],
      h = {},
      i =
        (R(o.dimensions, function (t) {
          var e,
            n,
            i = o.getDimensionInfo(t),
            r = i.coordDim
          r &&
            ((e = i.coordDimIndex),
            (av(a, r)[e] = t),
            i.isExtraCoord ||
              (s.set(r, 1),
              'ordinal' !== (n = i.type) && 'time' !== n && (l[0] = t),
              (av(h, r)[e] = o.getDimensionIndex(i.name))),
            i.defaultTooltip) &&
            u.push(t),
            od.each(function (t, e) {
              var n = av(a, e),
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
      (e.userOutput = new iv(h, t)),
      e
    )
  }
  function av (t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e]
  }
  var sv = function (t) {
      ;(this.otherDims = {}), null != t && O(this, t)
    },
    lv = Yo(),
    uv = { float: 'f', int: 'i', ordinal: 'o', number: 'n', time: 't' },
    hv =
      ((cv.prototype.isDimensionOmitted = function () {
        return this._dimOmitted
      }),
      (cv.prototype._updateDimOmitted = function (t) {
        !(this._dimOmitted = t) ||
          this._dimNameMap ||
          (this._dimNameMap = fv(this.source))
      }),
      (cv.prototype.getSourceDimensionIndex = function (t) {
        return N(this._dimNameMap.get(t), -1)
      }),
      (cv.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine
        if (e) return e[t]
      }),
      (cv.prototype.makeStoreSchema = function () {
        for (
          var t = this._fullDimCount,
            e = yf(this.source),
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
            (i = i + '$' + (uv[u] || 'f')),
            h && (i += h.uid),
            (i += '$')
        }
        var p = this.source
        return {
          dimensions: r,
          hash: [p.seriesLayoutBy, p.startIndex, i].join('$$')
        }
      }),
      (cv.prototype.makeOutputDimensionNames = function () {
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
      (cv.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t),
          (t.isCalculationCoord = !0),
          this._fullDimCount++,
          this._updateDimOmitted(!0)
      }),
      cv)
  function cv (t) {
    ;(this.dimensions = t.dimensions),
      (this._dimOmitted = t.dimensionOmitted),
      (this.source = t.source),
      (this._fullDimCount = t.fullDimensionCount),
      this._updateDimOmitted(t.dimensionOmitted)
  }
  function pv (t) {
    return t instanceof hv
  }
  function dv (t) {
    for (var e = z(), n = 0; n < (t || []).length; n++) {
      var i = t[n],
        i = L(i) ? i.name : i
      null != i && null == e.get(i) && e.set(i, n)
    }
    return e
  }
  function fv (t) {
    var e = lv(t)
    return e.dimNameMap || (e.dimNameMap = dv(t.dimensionsDefine))
  }
  var gv,
    yv,
    mv,
    vv,
    _v,
    xv,
    wv,
    bv = L,
    Sv = F,
    Mv = 'undefined' == typeof Int32Array ? Array : Int32Array,
    Tv = [
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
    Cv = ['_approximateExtent'],
    Iv =
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
          gt(t) ||
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
        ;(i = t instanceof bg ? t : i) ||
          ((r = this.dimensions),
          (t = hf(t) || ut(t) ? new xf(t, r.length) : t),
          (i = new bg()),
          (r = Sv(r, function (t) {
            return { type: o._dimInfos[t].type, property: t }
          })),
          i.initData(t, r, n)),
          (this._store = i),
          (this._nameList = (e || []).slice()),
          (this._idList = []),
          (this._nameRepeatCount = {}),
          this._doInit(0, i.count()),
          (this._dimSummary = ov(this, this._schema)),
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
            (this._nameList[o] = e[o - n]), r && wv(this, o)
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
          t.getSource().sourceFormat !== hd &&
          !t.fillStorage
        )
      }),
      (p.prototype._doInit = function (t, e) {
        if (!(e <= t)) {
          var n = this._store.getProvider(),
            i = (this._updateOrdinalMeta(), this._nameList),
            r = this._idList
          if (n.getSource().sourceFormat === ad && !n.pure)
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
          if (this._shouldMakeIdFromName()) for (a = t; a < e; a++) wv(this, a)
          gv(this)
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
        bv(t) ? O(this._calculationInfo, t) : (this._calculationInfo[t] = e)
      }),
      (p.prototype.getName = function (t) {
        var t = this.getRawIndex(t),
          e = this._nameList[t]
        return (e =
          null ==
          (e =
            null == e && null != this._nameDimIdx
              ? mv(this, this._nameDimIdx, t)
              : e)
            ? ''
            : e)
      }),
      (p.prototype._getCategory = function (t, e) {
        ;(e = this._store.get(t, e)), (t = this._store.getOrdinalMeta(t))
        return t ? t.categories[e] : e
      }),
      (p.prototype.getId = function (t) {
        return yv(this, this.getRawIndex(t))
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
              Sv(t, function (t) {
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
        ;(n = n || this), (t = Sv(vv(t), this._getStoreDimIndex, this))
        this._store.each(t, n ? pt(e, n) : e)
      }),
      (p.prototype.filterSelf = function (t, e, n) {
        S(t) && ((n = e), (e = t), (t = []))
        ;(n = n || this), (t = Sv(vv(t), this._getStoreDimIndex, this))
        return (this._store = this._store.filter(t, n ? pt(e, n) : e)), this
      }),
      (p.prototype.selectRange = function (n) {
        var i = this,
          r = {}
        return (
          R(B(n), function (t) {
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
          (i = Sv(vv(t), this._getStoreDimIndex, this)),
          (t = xv(this))
        return (t._store = this._store.map(i, n ? pt(e, n) : e)), t
      }),
      (p.prototype.modify = function (t, e, n, i) {
        ;(n = n || i || this), (i = Sv(vv(t), this._getStoreDimIndex, this))
        this._store.modify(i, n ? pt(e, n) : e)
      }),
      (p.prototype.downSample = function (t, e, n, i) {
        var r = xv(this)
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
        var n = xv(this)
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
        return new qc(t, e, e && e.ecModel)
      }),
      (p.prototype.diff = function (e) {
        var n = this
        return new ev(
          e ? e.getStore().getIndices() : [],
          this.getStore().getIndices(),
          function (t) {
            return yv(e, t)
          },
          function (t) {
            return yv(n, t)
          }
        )
      }),
      (p.prototype.getVisual = function (t) {
        var e = this._visual
        return e && e[t]
      }),
      (p.prototype.setVisual = function (t, e) {
        ;(this._visual = this._visual || {}),
          bv(t) ? O(this._visual, t) : (this._visual[t] = e)
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
              : bv(n) && (n = O({}, n)),
            (i[e] = n)),
          n
        )
      }),
      (p.prototype.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {}
        ;(this._itemVisuals[t] = i), bv(e) ? O(i, e) : (i[e] = n)
      }),
      (p.prototype.clearAllVisual = function () {
        ;(this._visual = {}), (this._itemVisuals = [])
      }),
      (p.prototype.setLayout = function (t, e) {
        bv(t) ? O(this._layout, t) : (this._layout[t] = e)
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
            (((o = T(a)).dataIndex = r),
            (o.dataType = i),
            (o.seriesIndex = n),
            'group' === a.type) &&
            a.traverse(function (t) {
              t = T(t)
              ;(t.seriesIndex = n), (t.dataIndex = r), (t.dataType = i)
            }),
          (this._graphicEls[t] = e)
      }),
      (p.prototype.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
      }),
      (p.prototype.eachItemGraphicEl = function (n, i) {
        R(this._graphicEls, function (t, e) {
          t && n && n.call(i, t, e)
        })
      }),
      (p.prototype.cloneShallow = function (t) {
        return (
          (t =
            t ||
            new p(
              this._schema || Sv(this.dimensions, this._getDimInfo, this),
              this.hostModel
            )),
          _v(t, this),
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
            return e.apply(this, [t].concat(Tt(arguments)))
          }))
      }),
      (p.internalField =
        ((gv = function (a) {
          var s = a._invertedIndicesMap
          R(s, function (t, e) {
            var n = a._dimInfos[e],
              i = n.ordinalMeta,
              r = a._store
            if (i) {
              t = s[e] = new Mv(i.categories.length)
              for (var o = 0; o < t.length; o++) t[o] = -1
              for (o = 0; o < r.count(); o++) t[r.get(n.storeDimIndex, o)] = o
            }
          })
        }),
        (mv = function (t, e, n) {
          return Ho(t._getCategory(e, n), null)
        }),
        (yv = function (t, e) {
          var n = t._idList[e]
          return (n =
            null ==
            (n = null == n && null != t._idDimIdx ? mv(t, t._idDimIdx, e) : n)
              ? 'e\0\0' + e
              : n)
        }),
        (vv = function (t) {
          return (t = V(t) ? t : null != t ? [t] : [])
        }),
        (xv = function (t) {
          var e = new p(
            t._schema || Sv(t.dimensions, t._getDimInfo, t),
            t.hostModel
          )
          return _v(e, t), e
        }),
        (_v = function (e, n) {
          R(Tv.concat(n.__wrappedMethods || []), function (t) {
            n.hasOwnProperty(t) && (e[t] = n[t])
          }),
            (e.__wrappedMethods = n.__wrappedMethods),
            R(Cv, function (t) {
              e[t] = _(n[t])
            }),
            (e._calculationInfo = O({}, n._calculationInfo))
        }),
        void (wv = function (t, e) {
          var n = t._nameList,
            i = t._idList,
            r = t._nameDimIdx,
            o = t._idDimIdx,
            a = n[e],
            s = i[e]
          null == a && null != r && (n[e] = a = mv(t, r, e)),
            null == s && null != o && (i[e] = s = mv(t, o, e)),
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
    pv(t)
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
        c = H(c) ? new sv({ name: c }) : c instanceof sv ? c : new sv(c),
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
        R(a, function (t) {
          i.set(o[t].storeDimIndex, t)
        }))
  }
  function kv (t, e) {
    hf(t) || (t = pf(t))
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
          R(n, function (t) {
            L(t) && (t = t.dimsDef) && (i = Math.max(i, t.length))
          }),
          i),
        u = e.canOmitUnusedDimensions && 30 < l,
        h = o === t.dimensionsDefine,
        c = h ? fv(t) : dv(o),
        p = e.encodeDefine,
        d = z((p = !p && e.encodeDefaulter ? e.encodeDefaulter(t, l) : p)),
        f = new mg(l),
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
          (n = new sv()),
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
          R(t, function (t, e) {
            t = H(t) ? c.get(t) : t
            null != t && t < l && v(y((i[e] = t)), n, e)
          }))
    })
    var m = 0
    function v (t, e, n) {
      null != od.get(e)
        ? (t.otherDims[e] = n)
        : ((t.coordDim = e), (t.coordDimIndex = n), a.set(e, !0))
    }
    R(r, function (t) {
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
        R(e, function (t, e) {
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
      R(s, function (t) {
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
            (vd(t, M) !== fd.Must &&
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
    return new hv({
      source: t,
      dimensions: s,
      fullDimensionCount: l,
      dimensionOmitted: u
    })
  }
  function Dv (t) {
    ;(this.coordSysDims = []),
      (this.axisMap = z()),
      (this.categoryAxisMap = z()),
      (this.coordSysName = t)
  }
  var Av = {
    cartesian2d: function (t, e, n, i) {
      var r = t.getReferringComponents('xAxis', Ko).models[0],
        t = t.getReferringComponents('yAxis', Ko).models[0]
      ;(e.coordSysDims = ['x', 'y']),
        n.set('x', r),
        n.set('y', t),
        Pv(r) && (i.set('x', r), (e.firstCategoryDimIndex = 0)),
        Pv(t) &&
          (i.set('y', t), null == e.firstCategoryDimIndex) &&
          (e.firstCategoryDimIndex = 1)
    },
    singleAxis: function (t, e, n, i) {
      t = t.getReferringComponents('singleAxis', Ko).models[0]
      ;(e.coordSysDims = ['single']),
        n.set('single', t),
        Pv(t) && (i.set('single', t), (e.firstCategoryDimIndex = 0))
    },
    polar: function (t, e, n, i) {
      var t = t.getReferringComponents('polar', Ko).models[0],
        r = t.findAxisModel('radiusAxis'),
        t = t.findAxisModel('angleAxis')
      ;(e.coordSysDims = ['radius', 'angle']),
        n.set('radius', r),
        n.set('angle', t),
        Pv(r) && (i.set('radius', r), (e.firstCategoryDimIndex = 0)),
        Pv(t) &&
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
      R(t.parallelAxisIndex, function (t, e) {
        var t = a.getComponent('parallelAxis', t),
          n = s[e]
        r.set(n, t),
          Pv(t) &&
            (o.set(n, t), null == i.firstCategoryDimIndex) &&
            (i.firstCategoryDimIndex = e)
      })
    }
  }
  function Pv (t) {
    return 'category' === t.get('type')
  }
  function Lv (t, e, n) {
    var i,
      r,
      o,
      a = (n = n || {}).byIndex,
      s = n.stackedCoordDimension
    pv(e.schema) ? ((r = e.schema), (i = r.dimensions), (o = e.store)) : (i = e)
    var l,
      u,
      h,
      c,
      p,
      d,
      f = !(!t || !t.get('stack'))
    return (
      R(i, function (t, e) {
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
        R(i, function (t) {
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
  function Ov (t, e) {
    return !!e && e === t.getCalculationInfo('stackedDimension')
  }
  function Rv (t, e) {
    return Ov(t, e) ? t.getCalculationInfo('stackResultDimension') : e
  }
  function Bv (t, e, n) {
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
          ? ((h = !0), (i = pf(t)))
          : (h = (i = u.getSource()).sourceFormat === ad),
        (function (t) {
          var e = t.get('coordinateSystem'),
            n = new Dv(e)
          if ((e = Av[e])) return e(t, n, n.axisMap, n.categoryAxisMap), n
        })(e)),
      c =
        ((l = t),
        (c = (c = e).get('coordinateSystem')),
        (c = Bd.get(c)),
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
      p = S(p) ? p : p ? dt(yd, c, e) : null,
      c = {
        coordDimensions: c,
        generateCoord: n.generateCoord,
        encodeDefine: e.getEncode(),
        encodeDefaulter: p,
        canOmitUnusedDimensions: !h
      },
      p = kv(i, c),
      d =
        ((c = p.dimensions),
        (r = n.createInvertedIndices),
        (o = t) &&
          R(c, function (t, e) {
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
      t = Lv(e, { schema: p, store: n }),
      c = new Iv(p, e),
      p =
        (c.setCalculationInfo(t),
        null == d ||
        (u = i).sourceFormat !== ad ||
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
  ;(zv.prototype.getSetting = function (t) {
    return this._setting[t]
  }),
    (zv.prototype.unionExtent = function (t) {
      var e = this._extent
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }),
    (zv.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e))
    }),
    (zv.prototype.getExtent = function () {
      return this._extent.slice()
    }),
    (zv.prototype.setExtent = function (t, e) {
      var n = this._extent
      isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }),
    (zv.prototype.isInExtentRange = function (t) {
      return this._extent[0] <= t && this._extent[1] >= t
    }),
    (zv.prototype.isBlank = function () {
      return this._isBlank
    }),
    (zv.prototype.setBlank = function (t) {
      this._isBlank = t
    })
  var Nv = zv
  function zv (t) {
    ;(this._setting = t || {}), (this._extent = [1 / 0, -1 / 0])
  }
  la(Nv)
  var Ev = 0,
    Fv =
      ((Vv.createByAxisModel = function (t) {
        var t = t.option,
          e = t.data,
          e = e && F(e, Hv)
        return new Vv({
          categories: e,
          needCollect: !e,
          deduplication: !1 !== t.dedplication
        })
      }),
      (Vv.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t)
      }),
      (Vv.prototype.parseAndCollect = function (t) {
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
      (Vv.prototype._getOrCreateMap = function () {
        return this._map || (this._map = z(this.categories))
      }),
      Vv)
  function Vv (t) {
    ;(this.categories = t.categories || []),
      (this._needCollect = t.needCollect),
      (this._deduplication = t.deduplication),
      (this.uid = ++Ev)
  }
  function Hv (t) {
    return L(t) && null != t.value ? t.value : t + ''
  }
  function Wv (t) {
    return 'interval' === t.type || 'log' === t.type
  }
  function Gv (t, e, n, i) {
    var r = {},
      o = t[1] - t[0],
      o = (r.interval = Co(o / e, !0)),
      e =
        (null != n && o < n && (o = r.interval = n),
        null != i && i < o && (o = r.interval = i),
        (r.intervalPrecision = Xv(o)))
    return (
      (n = r.niceTickExtent =
        [yo(Math.ceil(t[0] / o) * o, e), yo(Math.floor(t[1] / o) * o, e)]),
      (i = t),
      isFinite(n[0]) || (n[0] = i[0]),
      isFinite(n[1]) || (n[1] = i[1]),
      Yv(n, 0, i),
      Yv(n, 1, i),
      n[0] > n[1] && (n[0] = n[1]),
      r
    )
  }
  function Uv (t) {
    var e = Math.pow(10, To(t)),
      t = t / e
    return (
      t ? (2 === t ? (t = 3) : 3 === t ? (t = 5) : (t *= 2)) : (t = 1),
      yo(t * e)
    )
  }
  function Xv (t) {
    return mo(t) + 2
  }
  function Yv (t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0])
  }
  function qv (t, e) {
    return t >= e[0] && t <= e[1]
  }
  function jv (t, e) {
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0])
  }
  function Zv (t, e) {
    return t * (e[1] - e[0]) + e[0]
  }
  u(Qv, (Kv = Nv)),
    (Qv.prototype.parse = function (t) {
      return null == t
        ? NaN
        : H(t)
        ? this._ordinalMeta.getOrdinal(t)
        : Math.round(t)
    }),
    (Qv.prototype.contain = function (t) {
      return (
        qv((t = this.parse(t)), this._extent) &&
        null != this._ordinalMeta.categories[t]
      )
    }),
    (Qv.prototype.normalize = function (t) {
      return jv((t = this._getTickNumber(this.parse(t))), this._extent)
    }),
    (Qv.prototype.scale = function (t) {
      return (t = Math.round(Zv(t, this._extent))), this.getRawOrdinalNumber(t)
    }),
    (Qv.prototype.getTicks = function () {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1]; )
        t.push({ value: n }), n++
      return t
    }),
    (Qv.prototype.getMinorTicks = function (t) {}),
    (Qv.prototype.setSortInfo = function (t) {
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
    (Qv.prototype._getTickNumber = function (t) {
      var e = this._ticksByOrdinalNumber
      return e && 0 <= t && t < e.length ? e[t] : t
    }),
    (Qv.prototype.getRawOrdinalNumber = function (t) {
      var e = this._ordinalNumbersByTick
      return e && 0 <= t && t < e.length ? e[t] : t
    }),
    (Qv.prototype.getLabel = function (t) {
      if (!this.isBlank())
        return (
          (t = this.getRawOrdinalNumber(t.value)),
          null == (t = this._ordinalMeta.categories[t]) ? '' : t + ''
        )
    }),
    (Qv.prototype.count = function () {
      return this._extent[1] - this._extent[0] + 1
    }),
    (Qv.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e))
    }),
    (Qv.prototype.isInExtentRange = function (t) {
      return (
        (t = this._getTickNumber(t)),
        this._extent[0] <= t && this._extent[1] >= t
      )
    }),
    (Qv.prototype.getOrdinalMeta = function () {
      return this._ordinalMeta
    }),
    (Qv.prototype.calcNiceTicks = function () {}),
    (Qv.prototype.calcNiceExtent = function () {}),
    (Qv.type = 'ordinal')
  var Kv,
    $v = Qv
  function Qv (t) {
    var t = Kv.call(this, t) || this,
      e = ((t.type = 'ordinal'), t.getSetting('ordinalMeta'))
    return (
      V((e = e || new Fv({}))) &&
        (e = new Fv({
          categories: F(e, function (t) {
            return L(t) ? t.value : t
          })
        })),
      (t._ordinalMeta = e),
      (t._extent = t.getSetting('extent') || [0, e.categories.length - 1]),
      t
    )
  }
  Nv.registerClass($v)
  var Jv,
    t_ = yo,
    e_ =
      (u(n_, (Jv = Nv)),
      (n_.prototype.parse = function (t) {
        return t
      }),
      (n_.prototype.contain = function (t) {
        return qv(t, this._extent)
      }),
      (n_.prototype.normalize = function (t) {
        return jv(t, this._extent)
      }),
      (n_.prototype.scale = function (t) {
        return Zv(t, this._extent)
      }),
      (n_.prototype.setExtent = function (t, e) {
        var n = this._extent
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
      }),
      (n_.prototype.unionExtent = function (t) {
        var e = this._extent
        t[0] < e[0] && (e[0] = t[0]),
          t[1] > e[1] && (e[1] = t[1]),
          this.setExtent(e[0], e[1])
      }),
      (n_.prototype.getInterval = function () {
        return this._interval
      }),
      (n_.prototype.setInterval = function (t) {
        ;(this._interval = t),
          (this._niceExtent = this._extent.slice()),
          (this._intervalPrecision = Xv(t))
      }),
      (n_.prototype.getTicks = function (t) {
        var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          o = []
        if (e) {
          n[0] < i[0] &&
            o.push(t ? { value: t_(i[0] - e, r) } : { value: n[0] })
          for (
            var a = i[0];
            a <= i[1] &&
            (o.push({ value: a }),
            (a = t_(a + e, r)) !== o[o.length - 1].value);

          )
            if (1e4 < o.length) return []
          var s = o.length ? o[o.length - 1].value : i[1]
          n[1] > s && o.push(t ? { value: t_(s + e, r) } : { value: n[1] })
        }
        return o
      }),
      (n_.prototype.getMinorTicks = function (t) {
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
            var h = t_(a.value + (s + 1) * u)
            h > i[0] && h < i[1] && l.push(h), s++
          }
          n.push(l)
        }
        return n
      }),
      (n_.prototype.getLabel = function (t, e) {
        return null == t
          ? ''
          : (null == (e = e && e.precision)
              ? (e = mo(t.value) || 0)
              : 'auto' === e && (e = this._intervalPrecision),
            Lp(t_(t.value, e, !0)))
      }),
      (n_.prototype.calcNiceTicks = function (t, e, n) {
        t = t || 5
        var i = this._extent,
          r = i[1] - i[0]
        isFinite(r) &&
          (r < 0 && i.reverse(),
          (r = Gv(i, t, e, n)),
          (this._intervalPrecision = r.intervalPrecision),
          (this._interval = r.interval),
          (this._niceExtent = r.niceTickExtent))
      }),
      (n_.prototype.calcNiceExtent = function (t) {
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
        t.fixMin || (e[0] = t_(Math.floor(e[0] / n) * n)),
          t.fixMax || (e[1] = t_(Math.ceil(e[1] / n) * n))
      }),
      (n_.prototype.setNiceExtent = function (t, e) {
        this._niceExtent = [t, e]
      }),
      (n_.type = 'interval'),
      n_)
  function n_ () {
    var t = (null !== Jv && Jv.apply(this, arguments)) || this
    return (
      (t.type = 'interval'), (t._interval = 0), (t._intervalPrecision = 2), t
    )
  }
  Nv.registerClass(e_)
  var i_ = 'undefined' != typeof Float32Array,
    r_ = i_ ? Float32Array : Array
  function o_ (t) {
    return V(t) ? (i_ ? new Float32Array(t) : t) : new r_(t)
  }
  var a_ = '__ec_stack_'
  function s_ (t) {
    return t.get('stack') || a_ + t.seriesIndex
  }
  function l_ (t) {
    return t.dim + t.index
  }
  function u_ (t, e) {
    var n = []
    return (
      e.eachSeriesByType(t, function (t) {
        p_(t) && n.push(t)
      }),
      n
    )
  }
  function h_ (t) {
    var a,
      d,
      l = (function (t) {
        var e,
          l = {},
          n =
            (R(t, function (t) {
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
      u = []
    return (
      R(t, function (t) {
        var e,
          n = t.coordinateSystem.getBaseAxis(),
          i = n.getExtent(),
          r =
            ((e =
              'category' === n.type
                ? n.getBandWidth()
                : 'value' === n.type || 'time' === n.type
                ? ((e = n.dim + '_' + n.index),
                  (e = l[e]),
                  (r = Math.abs(i[1] - i[0])),
                  (o = n.scale.getExtent()),
                  (o = Math.abs(o[1] - o[0])),
                  e ? (r / o) * e : r)
                : ((o = t.getData()), Math.abs(i[1] - i[0]) / o.count())),
            go(t.get('barWidth'), e)),
          i = go(t.get('barMaxWidth'), e),
          o = go(t.get('barMinWidth') || (d_(t) ? 0.5 : 1), e),
          a = t.get('barGap'),
          s = t.get('barCategoryGap')
        u.push({
          bandWidth: e,
          barWidth: r,
          barMaxWidth: i,
          barMinWidth: o,
          barGap: a,
          barCategoryGap: s,
          axisKey: l_(n),
          stackId: s_(t)
        })
      }),
      (a = {}),
      R(u, function (t, e) {
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
      R(a, function (t, n) {
        d[n] = {}
        var e = t.stacks,
          i = t.bandWidth,
          r = t.categoryGap,
          o =
            (null == r &&
              ((o = B(e).length), (r = Math.max(35 - 4 * o, 15) + '%')),
            go(r, i)),
          a = go(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          u = (s - o) / (l + (l - 1) * a),
          u = Math.max(u, 0)
        R(e, function (t) {
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
            (R(e, function (t, e) {
              t.width || (t.width = u), (c += (h = t).width * (1 + a))
            }),
            h && (c -= h.width * a),
            -c / 2)
        R(e, function (t, e) {
          ;(d[n][e] = d[n][e] || { bandWidth: i, offset: p, width: t.width }),
            (p += t.width * (1 + a))
        })
      }),
      d
    )
  }
  function c_ (t, e) {
    var t = u_(t, e),
      r = h_(t)
    R(t, function (t) {
      var e = t.getData(),
        n = t.coordinateSystem.getBaseAxis(),
        t = s_(t),
        n = r[l_(n)][t],
        t = n.offset,
        i = n.width
      e.setLayout({ bandWidth: n.bandWidth, offset: t, size: i })
    })
  }
  function p_ (t) {
    return t.coordinateSystem && 'cartesian2d' === t.coordinateSystem.type
  }
  function d_ (t) {
    return t.pipelineContext && t.pipelineContext.large
  }
  u(m_, (f_ = e_)),
    (m_.prototype.getLabel = function (t) {
      var e = this.getSetting('useUTC')
      return yp(
        t.value,
        cp[
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
          })(gp(this._minLevelUnit))
        ] || cp.second,
        e,
        this.getSetting('locale')
      )
    }),
    (m_.prototype.getFormattedLabel = function (t, e, n) {
      var i = this.getSetting('useUTC'),
        r = this.getSetting('locale'),
        o = null
      if (H(n)) o = n
      else if (S(n)) o = n(t.value, e, { level: t.level })
      else {
        var a = O({}, up)
        if (0 < t.level)
          for (var s = 0; s < pp.length; ++s)
            a[pp[s]] = '{primary|' + a[pp[s]] + '}'
        var l = n ? (!1 === n.inherit ? n : E(n, a)) : a,
          u = mp(t.value, i)
        if (l[u]) o = l[u]
        else if (l.inherit) {
          for (s = dp.indexOf(u) - 1; 0 <= s; --s)
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
      return yp(new Date(t.value), o, i, r)
    }),
    (m_.prototype.getTicks = function () {
      var t = this._interval,
        e = this._extent,
        n = []
      return (
        t &&
          (n.push({ value: e[0], level: 0 }),
          (t = this.getSetting('useUTC')),
          (t = (function (t, b, S, M) {
            var e = dp,
              n = 0
            function i (t, e, n) {
              var i,
                r,
                o = [],
                a = !e.length
              if (
                !(function (t, e, n, i) {
                  function r (t) {
                    return vp(c, t, i) === vp(p, t, i)
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
                })(gp(t), M[0], M[1], S)
              ) {
                a &&
                  (e = [
                    {
                      value: (function (t, e, n) {
                        var i = new Date(t)
                        switch (gp(e)) {
                          case 'year':
                          case 'month':
                            i[Cp(n)](0)
                          case 'day':
                            i[Ip(n)](1)
                          case 'hour':
                            i[kp(n)](0)
                          case 'minute':
                            i[Dp(n)](0)
                          case 'second':
                            i[Ap(n)](0), i[Pp(n)](0)
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
                        ;(h = Math.max(1, Math.round(b / lp / 365))),
                          (c = _p(S)),
                          (p = S ? 'setUTCFullYear' : 'setFullYear')
                        break
                      case 'half-year':
                      case 'quarter':
                      case 'month':
                        ;(r = b),
                          (h =
                            6 < (r /= 30 * lp) ? 6 : 3 < r ? 3 : 2 < r ? 2 : 1),
                          (c = xp(S)),
                          (p = Cp(S))
                        break
                      case 'week':
                      case 'half-week':
                      case 'day':
                        ;(r = b),
                          (h =
                            16 < (r /= lp)
                              ? 16
                              : 7.5 < r
                              ? 7
                              : 3.5 < r
                              ? 4
                              : 1.5 < r
                              ? 2
                              : 1),
                          (c = wp(S)),
                          (p = Ip(S))
                        break
                      case 'half-day':
                      case 'quarter-day':
                      case 'hour':
                        ;(i = b),
                          (h =
                            12 < (i /= sp)
                              ? 12
                              : 6 < i
                              ? 6
                              : 3.5 < i
                              ? 4
                              : 2 < i
                              ? 2
                              : 1),
                          (c = bp(S)),
                          (p = kp(S))
                        break
                      case 'minute':
                        ;(h = v_(b, !0)), (c = Sp(S)), (p = Dp(S))
                        break
                      case 'second':
                        ;(h = v_(b, !1)), (c = Mp(S)), (p = Ap(S))
                        break
                      case 'millisecond':
                        ;(h = Co(b, !0)), (c = Tp(S)), (p = Pp(S))
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
              var u = gp(e[l])
              if (
                (function (t) {
                  return t === gp(t)
                })(e[l]) &&
                (i(e[l], r[r.length - 1] || [], o),
                u !== (e[l + 1] ? gp(e[l + 1]) : null))
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
    (m_.prototype.calcNiceExtent = function (t) {
      var e,
        n = this._extent
      n[0] === n[1] && ((n[0] -= lp), (n[1] += lp)),
        n[1] === -1 / 0 &&
          n[0] === 1 / 0 &&
          ((e = new Date()),
          (n[1] = +new Date(e.getFullYear(), e.getMonth(), e.getDate())),
          (n[0] = n[1] - lp)),
        this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval)
    }),
    (m_.prototype.calcNiceTicks = function (t, e, n) {
      var i = this._extent,
        i = i[1] - i[0],
        i =
          ((this._approxInterval = i / (t = t || 10)),
          null != e && this._approxInterval < e && (this._approxInterval = e),
          null != n && this._approxInterval > n && (this._approxInterval = n),
          y_.length),
        t = Math.min(
          (function (t, e, n, i) {
            for (; n < i; ) {
              var r = (n + i) >>> 1
              t[r][1] < e ? (n = 1 + r) : (i = r)
            }
            return n
          })(y_, this._approxInterval, 0, i),
          i - 1
        )
      ;(this._interval = y_[t][1]),
        (this._minLevelUnit = y_[Math.max(t - 1, 0)][0])
    }),
    (m_.prototype.parse = function (t) {
      return gt(t) ? t : +So(t)
    }),
    (m_.prototype.contain = function (t) {
      return qv(this.parse(t), this._extent)
    }),
    (m_.prototype.normalize = function (t) {
      return jv(this.parse(t), this._extent)
    }),
    (m_.prototype.scale = function (t) {
      return Zv(t, this._extent)
    }),
    (m_.type = 'time')
  var f_,
    g_ = m_,
    y_ = [
      ['second', op],
      ['minute', ap],
      ['hour', sp],
      ['quarter-day', 6 * sp],
      ['half-day', 12 * sp],
      ['day', 1.2 * lp],
      ['half-week', 3.5 * lp],
      ['week', 7 * lp],
      ['month', 31 * lp],
      ['quarter', 95 * lp],
      ['half-year', oa / 2],
      ['year', oa]
    ]
  function m_ (t) {
    t = f_.call(this, t) || this
    return (t.type = 'time'), t
  }
  function v_ (t, e) {
    return 30 < (t /= e ? ap : op)
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
  Nv.registerClass(g_)
  var __,
    x_ = Nv.prototype,
    w_ = e_.prototype,
    b_ = yo,
    S_ = Math.floor,
    M_ = Math.ceil,
    T_ = Math.pow,
    C_ = Math.log,
    I_ =
      (u(k_, (__ = Nv)),
      (k_.prototype.getTicks = function (t) {
        var e = this._originalScale,
          n = this._extent,
          i = e.getExtent()
        return F(
          w_.getTicks.call(this, t),
          function (t) {
            var t = t.value,
              e = yo(T_(this.base, t)),
              e = t === n[0] && this._fixMin ? D_(e, i[0]) : e
            return { value: t === n[1] && this._fixMax ? D_(e, i[1]) : e }
          },
          this
        )
      }),
      (k_.prototype.setExtent = function (t, e) {
        var n = C_(this.base)
        ;(t = C_(Math.max(0, t)) / n),
          (e = C_(Math.max(0, e)) / n),
          w_.setExtent.call(this, t, e)
      }),
      (k_.prototype.getExtent = function () {
        var t = this.base,
          e = x_.getExtent.call(this),
          t =
            ((e[0] = T_(t, e[0])),
            (e[1] = T_(t, e[1])),
            this._originalScale.getExtent())
        return (
          this._fixMin && (e[0] = D_(e[0], t[0])),
          this._fixMax && (e[1] = D_(e[1], t[1])),
          e
        )
      }),
      (k_.prototype.unionExtent = function (t) {
        this._originalScale.unionExtent(t)
        var e = this.base
        ;(t[0] = C_(t[0]) / C_(e)),
          (t[1] = C_(t[1]) / C_(e)),
          x_.unionExtent.call(this, t)
      }),
      (k_.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      }),
      (k_.prototype.calcNiceTicks = function (t) {
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
          t = [yo(M_(e[0] / i) * i), yo(S_(e[1] / i) * i)]
          ;(this._interval = i), (this._niceExtent = t)
        }
      }),
      (k_.prototype.calcNiceExtent = function (t) {
        w_.calcNiceExtent.call(this, t),
          (this._fixMin = t.fixMin),
          (this._fixMax = t.fixMax)
      }),
      (k_.prototype.parse = function (t) {
        return t
      }),
      (k_.prototype.contain = function (t) {
        return qv((t = C_(t) / C_(this.base)), this._extent)
      }),
      (k_.prototype.normalize = function (t) {
        return jv((t = C_(t) / C_(this.base)), this._extent)
      }),
      (k_.prototype.scale = function (t) {
        return (t = Zv(t, this._extent)), T_(this.base, t)
      }),
      (k_.type = 'log'),
      k_),
    Qy = I_.prototype
  function k_ () {
    var t = (null !== __ && __.apply(this, arguments)) || this
    return (
      (t.type = 'log'),
      (t.base = 10),
      (t._originalScale = new e_()),
      (t._interval = 0),
      t
    )
  }
  function D_ (t, e) {
    return b_(t, mo(e))
  }
  ;(Qy.getMinorTicks = w_.getMinorTicks),
    (Qy.getLabel = w_.getLabel),
    Nv.registerClass(I_)
  ;(P_.prototype._prepareParams = function (t, e, n) {
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
          ? (this._modelMinNum = R_(t, r({ min: n[0], max: n[1] })))
          : 'dataMin' !== r && (this._modelMinNum = R_(t, r)),
        (this._modelMaxRaw = e.get('max', !0)))
    S(r)
      ? (this._modelMaxNum = R_(t, r({ min: n[0], max: n[1] })))
      : 'dataMax' !== r && (this._modelMaxNum = R_(t, r)),
      i
        ? (this._axisDataLen = e.getCategories().length)
        : 'boolean' ==
            typeof (t = V((n = e.get('boundaryGap')))
              ? n
              : [n || 0, n || 0])[0] || 'boolean' == typeof t[1]
        ? (this._boundaryGapInner = [0, 0])
        : (this._boundaryGapInner = [Gr(t[0], 1), Gr(t[1], 1)])
  }),
    (P_.prototype.calculate = function () {
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
          bt(a) || bt(s) || (t && !i)),
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
    (P_.prototype.modifyDataMinMax = function (t, e) {
      this[O_[t]] = e
    }),
    (P_.prototype.setDeterminedMinMax = function (t, e) {
      this[L_[t]] = e
    }),
    (P_.prototype.freeze = function () {
      this.frozen = !0
    })
  var A_ = P_
  function P_ (t, e, n) {
    this._prepareParams(t, e, n)
  }
  var L_ = { min: '_determinedMin', max: '_determinedMax' },
    O_ = { min: '_dataMin', max: '_dataMax' }
  function R_ (t, e) {
    return null == e ? null : bt(e) ? NaN : t.parse(e)
  }
  function B_ (t, e) {
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
          h.rawExtentInfo || ((c = new A_(h, c, u)), (h.rawExtentInfo = c))
        ).calculate()),
      h = (t.setBlank(u.isBlank), u.min),
      c = u.max,
      t = e.ecModel
    return (
      t &&
        'time' === l &&
        ((l = u_('bar', t)),
        (n = !1),
        R(l, function (t) {
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
              R(t, function (t) {
                o = Math.min(t.offset, o)
              }),
              (a = -1 / 0),
              R(t, function (t) {
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
  function N_ (t, e) {
    var n = B_(t, e),
      i = n.extent,
      r = e.get('splitNumber'),
      o = (t instanceof I_ && (t.base = e.get('logBase')), t.type),
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
  function z_ (t, e) {
    if ((e = e || t.get('type')))
      switch (e) {
        case 'category':
          return new $v({
            ordinalMeta: t.getOrdinalMeta
              ? t.getOrdinalMeta()
              : t.getCategories(),
            extent: [1 / 0, -1 / 0]
          })
        case 'time':
          return new g_({
            locale: t.ecModel.getLocaleModel(),
            useUTC: t.ecModel.get('useUTC')
          })
        default:
          return new (Nv.getClass(e) || e_)()
      }
  }
  function E_ (n) {
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
            i(F_(n, t), e, null != t.level ? { level: t.level } : null)
          )
        })
      : function (t) {
          return n.scale.getLabel(t)
        }
  }
  function F_ (t, e) {
    return 'category' === t.type ? t.scale.getLabel(e) : e.value
  }
  function V_ (t) {
    var e,
      n,
      i,
      r = t.model,
      o = t.scale
    if (r.get(['axisLabel', 'show']) && !o.isBlank()) {
      var a,
        s,
        l = o.getExtent(),
        u = o instanceof $v ? o.count() : (a = o.getTicks()).length,
        h = t.getLabelModel(),
        c = E_(t),
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
            new W(f.x, f.y, i, n))
        s ? s.union(g) : (s = g)
      }
      return s
    }
  }
  function H_ (t) {
    t = t.get('interval')
    return null == t ? 'auto' : t
  }
  function W_ (t) {
    return 'category' === t.type && 0 === H_(t.getLabelModel())
  }
  ;(U_.prototype.getNeedCrossZero = function () {
    return !this.option.scale
  }),
    (U_.prototype.getCoordSysModel = function () {})
  var G_ = U_
  function U_ () {}
  var n0 = Object.freeze({
      __proto__: null,
      createDimensions: function (t, e) {
        return kv(t, e).dimensions
      },
      createList: function (t) {
        return Bv(null, t)
      },
      createScale: function (t, e) {
        var n = e
        return (
          (e = z_((n = e instanceof qc ? n : new qc(e)))).setExtent(t[0], t[1]),
          N_(e, n),
          e
        )
      },
      createSymbol: l0,
      createTextStyle: function (t, e) {
        return Cc(t, null, null, 'normal' !== (e = e || {}).state)
      },
      dataStack: {
        isDimensionStacked: Ov,
        enableDataStack: Lv,
        getStackedDimension: Rv
      },
      enableHoverEmphasis: Kl,
      getECData: T,
      getLayoutRect: qp,
      mixinAxisModelCommonMethods: function (t) {
        lt(t, G_)
      }
    }),
    X_ = [],
    Y_ = {
      registerPreprocessor: Fm,
      registerProcessor: Vm,
      registerPostInit: Hm,
      registerPostUpdate: Wm,
      registerUpdateLifecycle: Gm,
      registerAction: Um,
      registerCoordinateSystem: Xm,
      registerLayout: Ym,
      registerVisual: qm,
      registerTransform: Qm,
      registerLoading: Km,
      registerMap: $m,
      registerImpl: function (t, e) {
        V0[t] = e
      },
      PRIORITY: e0,
      ComponentModel: g,
      ComponentView: ny,
      SeriesModel: jg,
      ChartView: sy,
      registerComponentModel: function (t) {
        g.registerClass(t)
      },
      registerComponentView: function (t) {
        ny.registerClass(t)
      },
      registerSeriesModel: function (t) {
        jg.registerClass(t)
      },
      registerChartView: function (t) {
        sy.registerClass(t)
      },
      registerSubTypeDefaulter: function (t, e) {
        g.registerSubTypeDefaulter(t, e)
      },
      registerPainter: function (t, e) {
        ho(t, e)
      }
    }
  function q_ (t) {
    V(t)
      ? R(t, function (t) {
          q_(t)
        })
      : 0 <= I(X_, t) ||
        (X_.push(t), (t = S(t) ? { install: t } : t).install(Y_))
  }
  var j_ = 1e-8
  function Z_ (t, e) {
    return Math.abs(t - e) < j_
  }
  function K_ (t, e, n) {
    var i = 0,
      r = t[0]
    if (r) {
      for (var o = 1; o < t.length; o++) {
        var a = t[o]
        ;(i += fs(r[0], r[1], a[0], a[1], e, n)), (r = a)
      }
      var s = t[0]
      return (
        (Z_(r[0], s[0]) && Z_(r[1], s[1])) ||
          (i += fs(r[0], r[1], s[0], s[1], e, n)),
        0 !== i
      )
    }
  }
  var $_ = []
  function Q_ (t, e) {
    for (var n = 0; n < t.length; n++) ie(t[n], t[n], e)
  }
  function J_ (t, e, n, i) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r]
      ;(o = i ? i.project(o) : o) &&
        isFinite(o[0]) &&
        isFinite(o[1]) &&
        (re(e, e, o), oe(n, n, o))
    }
  }
  ;(t1.prototype.setCenter = function (t) {
    this._center = t
  }),
    (t1.prototype.getCenter = function () {
      return this._center || (this._center = this.calcCenter())
    })
  i0 = t1
  function t1 (t) {
    this.name = t
  }
  function e1 (t, e) {
    ;(this.type = 'polygon'), (this.exterior = t), (this.interiors = e)
  }
  function n1 (t) {
    ;(this.type = 'linestring'), (this.points = t)
  }
  u(a1, (i1 = i0)),
    (a1.prototype.calcCenter = function () {
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
    (a1.prototype.getBoundingRect = function (e) {
      var n,
        i,
        t = this._rect
      return (
        (t && !e) ||
          ((n = [1 / 0, 1 / 0]),
          (i = [-1 / 0, -1 / 0]),
          R(this.geometries, function (t) {
            'polygon' === t.type
              ? J_(t.exterior, n, i, e)
              : R(t.points, function (t) {
                  J_(t, n, i, e)
                })
          }),
          (isFinite(n[0]) &&
            isFinite(n[1]) &&
            isFinite(i[0]) &&
            isFinite(i[1])) ||
            (n[0] = n[1] = i[0] = i[1] = 0),
          (t = new W(n[0], n[1], i[0] - n[0], i[1] - n[1])),
          e) ||
          (this._rect = t),
        t
      )
    }),
    (a1.prototype.contain = function (t) {
      var e = this.getBoundingRect(),
        n = this.geometries
      if (e.contain(t[0], t[1]))
        t: for (var i = 0, r = n.length; i < r; i++) {
          var o = n[i]
          if ('polygon' === o.type) {
            var a = o.exterior,
              s = o.interiors
            if (K_(a, t[0], t[1])) {
              for (var l = 0; l < (s ? s.length : 0); l++)
                if (K_(s[l], t[0], t[1])) continue t
              return !0
            }
          }
        }
      return !1
    }),
    (a1.prototype.transformTo = function (t, e, n, i) {
      var r = this.getBoundingRect(),
        o = r.width / r.height
      n ? (i = i || n / o) : (n = o * i)
      for (
        var o = new W(t, e, n, i),
          a = r.calculateTransform(o),
          s = this.geometries,
          l = 0;
        l < s.length;
        l++
      ) {
        var u = s[l]
        'polygon' === u.type
          ? (Q_(u.exterior, a),
            R(u.interiors, function (t) {
              Q_(t, a)
            }))
          : R(u.points, function (t) {
              Q_(t, a)
            })
      }
      ;(r = this._rect).copy(o),
        (this._center = [r.x + r.width / 2, r.y + r.height / 2])
    }),
    (a1.prototype.cloneShallow = function (t) {
      t = new a1((t = null == t ? this.name : t), this.geometries, this._center)
      return (t._rect = this._rect), (t.transformTo = null), t
    })
  var i1,
    r1,
    o1 = a1
  function a1 (t, e, n) {
    t = i1.call(this, t) || this
    return (
      (t.type = 'geoJSON'),
      (t.geometries = e),
      (t._center = n && [n[0], n[1]]),
      t
    )
  }
  function s1 (t, e) {
    t = r1.call(this, t) || this
    return (t.type = 'geoSVG'), (t._elOnlyForCalculate = e), t
  }
  function l1 (t, e, n) {
    for (var i = 0; i < t.length; i++) t[i] = u1(t[i], e[i], n)
  }
  function u1 (t, e, n) {
    for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
      var s = ((s = t.charCodeAt(a) - 64) >> 1) ^ -(1 & s),
        l = ((l = t.charCodeAt(a + 1) - 64) >> 1) ^ -(1 & l),
        r = (s += r),
        o = (l += o)
      i.push([s / n, l / n])
    }
    return i
  }
  function h1 (t, o) {
    return F(
      ct(
        (t = (e = t).UTF8Encoding
          ? (null == (r = (n = e).UTF8Scale) && (r = 1024),
            R(n.features, function (t) {
              var e = t.geometry,
                n = e.encodeOffsets,
                i = e.coordinates
              if (n)
                switch (e.type) {
                  case 'LineString':
                    e.coordinates = u1(i, n, r)
                    break
                  case 'Polygon':
                  case 'MultiLineString':
                    l1(i, n, r)
                    break
                  case 'MultiPolygon':
                    R(i, function (t, e) {
                      return l1(t, n[e], r)
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
            i.push(new e1(r[0], r.slice(1)))
            break
          case 'MultiPolygon':
            R(n.coordinates, function (t) {
              t[0] && i.push(new e1(t[0], t.slice(1)))
            })
            break
          case 'LineString':
            i.push(new n1([n.coordinates]))
            break
          case 'MultiLineString':
            i.push(new n1(n.coordinates))
        }
        t = new o1(e[o || 'name'], i, e.cp)
        return (t.properties = e), t
      }
    )
    var e, n, r
  }
  u(s1, (r1 = i0)),
    (s1.prototype.calcCenter = function () {
      for (
        var t = this._elOnlyForCalculate,
          e = t.getBoundingRect(),
          e = [e.x + e.width / 2, e.y + e.height / 2],
          n = Be($_),
          i = t;
        i && !i.isGeoSVGGraphicRoot;

      )
        ze(n, i.getLocalTransform(), n), (i = i.parent)
      return He(n, n), ie(e, e, n), e
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
        return (
          (t[e] &&
            (function (t, e) {
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
                  var l = Number.NEGATIVE_INFINITY,
                    u = null,
                    h = 0,
                    c = s.length;
                  h < c;
                  ++h
                )
                  s[h] > l && ((l = s[h]), (u = h))
                ++o[u], (s[u] = 0), ++a
              }
              return F(o, function (t) {
                return t / i
              })
            })(t, n)[e]) ||
          0
        )
      },
      getPixelPrecision: _o,
      getPrecision: mo,
      getPrecisionSafe: vo,
      isNumeric: ko,
      isRadianAroundZero: wo,
      linearMap: fo,
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
      round: yo
    }),
    uc = Object.freeze({ __proto__: null, format: yp, parse: So }),
    hp = Object.freeze({
      __proto__: null,
      Arc: xh,
      BezierCurve: yh,
      BoundingRect: W,
      Circle: Tu,
      CompoundPath: Sh,
      Ellipse: Du,
      Group: io,
      Image: Rs,
      IncrementalDisplayable: n,
      Line: hh,
      LinearGradient: kh,
      Polygon: eh,
      Polyline: oh,
      RadialGradient: Th,
      Rect: Gs,
      Ring: Ku,
      Sector: Yu,
      Text: js,
      clipPointsByRect: fc,
      clipRectByRect: gc,
      createIcon: yc,
      extendPath: tc,
      extendShape: Qh,
      getShapeClass: nc,
      getTransform: hc,
      initProps: Uh,
      makeImage: rc,
      makePath: ic,
      mergePath: ac,
      registerShape: ec,
      resizePath: sc,
      updateProps: Gh
    }),
    Wc = Object.freeze({
      __proto__: null,
      addCommas: Lp,
      capitalFirst: function (t) {
        return t && t.charAt(0).toUpperCase() + t.substr(1)
      },
      encodeHTML: we,
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
          .replace('MM', fp(r, 2))
          .replace('M', r)
          .replace('yyyy', i)
          .replace('yy', fp((i % 100) + '', 2))
          .replace('dd', fp(o, 2))
          .replace('d', o)
          .replace('hh', fp(a, 2))
          .replace('h', a)
          .replace('mm', fp(s, 2))
          .replace('m', s)
          .replace('ss', fp(l, 2))
          .replace('s', l)
          .replace('SSS', fp(e, 3))
      },
      formatTpl: Ep,
      getTextRect: function (t, e, n, i, r, o, a, s) {
        return new js({
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
      getTooltipMarker: Fp,
      normalizeCssArray: Rp,
      toCamelCase: Op,
      truncateText: va
    }),
    Ec = Object.freeze({
      __proto__: null,
      bind: pt,
      clone: _,
      curry: dt,
      defaults: E,
      each: R,
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
    c1 = Yo()
  function p1 (t) {
    return 'category' === t.type
      ? ((r = (e = t).getLabelModel()),
        (o = f1(e, r)),
        !r.get('show') || e.scale.isBlank()
          ? { labels: [], labelCategoryInterval: o.labelCategoryInterval }
          : o)
      : ((r = (n = t).scale.getTicks()),
        (i = E_(n)),
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
  function d1 (t, e) {
    var n, i, r, o, a, s
    return 'category' === t.type
      ? ((e = e),
        (o = g1((n = t), 'ticks')),
        (a = H_(e)),
        (s = y1(o, a)) ||
          ((e.get('show') && !n.scale.isBlank()) || (i = []),
          (i = S(a)
            ? _1(n, a, !0)
            : 'auto' === a
            ? ((s = f1(n, n.getLabelModel())),
              (r = s.labelCategoryInterval),
              F(s.labels, function (t) {
                return t.tickValue
              }))
            : v1(n, (r = a), !0)),
          m1(o, a, { ticks: i, tickCategoryInterval: r })))
      : {
          ticks: F(t.scale.getTicks(), function (t) {
            return t.value
          })
        }
  }
  function f1 (t, e) {
    var n,
      i = g1(t, 'labels'),
      e = H_(e)
    return (
      y1(i, e) ||
      m1(i, e, {
        labels: S(e)
          ? _1(t, e)
          : v1(
              t,
              (n =
                'auto' === e
                  ? null != (t = c1((i = t)).autoInterval)
                    ? t
                    : (c1(i).autoInterval = i.calculateCategoryInterval())
                  : e)
            ),
        labelCategoryInterval: n
      })
    )
  }
  function g1 (t, e) {
    return c1(t)[e] || (c1(t)[e] = [])
  }
  function y1 (t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
  }
  function m1 (t, e, n) {
    return t.push({ key: e, value: n }), n
  }
  function v1 (t, e, n) {
    var i = E_(t),
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
        W_(t)),
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
  function _1 (t, i, r) {
    var o = t.scale,
      a = E_(t),
      s = []
    return (
      R(o.getTicks(), function (t) {
        var e = o.getLabel(t),
          n = t.value
        i(t.value, e) &&
          s.push(r ? n : { formattedLabel: a(t), rawLabel: e, tickValue: n })
      }),
      s
    )
  }
  var x1 = [0, 1],
    Uc =
      ((w1.prototype.contain = function (t) {
        var e = this._extent,
          n = Math.min(e[0], e[1]),
          e = Math.max(e[0], e[1])
        return n <= t && t <= e
      }),
      (w1.prototype.containData = function (t) {
        return this.scale.contain(t)
      }),
      (w1.prototype.getExtent = function () {
        return this._extent.slice()
      }),
      (w1.prototype.getPixelPrecision = function (t) {
        return _o(t || this.scale.getExtent(), this._extent)
      }),
      (w1.prototype.setExtent = function (t, e) {
        var n = this._extent
        ;(n[0] = t), (n[1] = e)
      }),
      (w1.prototype.dataToCoord = function (t, e) {
        var n = this._extent,
          i = this.scale
        return (
          (t = i.normalize(t)),
          this.onBand && 'ordinal' === i.type && b1((n = n.slice()), i.count()),
          fo(t, x1, n, e)
        )
      }),
      (w1.prototype.coordToData = function (t, e) {
        var n = this._extent,
          i = this.scale,
          i =
            (this.onBand &&
              'ordinal' === i.type &&
              b1((n = n.slice()), i.count()),
            fo(t, n, x1, e))
        return this.scale.scale(i)
      }),
      (w1.prototype.pointToData = function (t, e) {}),
      (w1.prototype.getTicksCoords = function (t) {
        var e,
          n,
          i,
          r,
          o = (t = t || {}).tickModel || this.getTickModel(),
          a = F(
            d1(this, o).ticks,
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
          return (t = yo(t)), (e = yo(e)), r ? e < t : t < e
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
                R(l, function (t) {
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
      (w1.prototype.getMinorTicksCoords = function () {
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
      (w1.prototype.getViewLabels = function () {
        return p1(this).labels
      }),
      (w1.prototype.getLabelModel = function () {
        return this.model.getModel('axisLabel')
      }),
      (w1.prototype.getTickModel = function () {
        return this.model.getModel('axisTick')
      }),
      (w1.prototype.getBandWidth = function () {
        var t = this._extent,
          e = this.scale.getExtent(),
          e = e[1] - e[0] + (this.onBand ? 1 : 0),
          t = (0 === e && (e = 1), Math.abs(t[1] - t[0]))
        return Math.abs(t) / e
      }),
      (w1.prototype.calculateCategoryInterval = function () {
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
          e = E_(d),
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
              1.3 * (p = Fr(e({ value: a }), t.font, 'center', 'top')).width,
            p = 1.3 * p.height,
            u = Math.max(u, c, 7),
            h = Math.max(h, p, 7)
        var n = u / l,
          l = h / s,
          s =
            (isNaN(n) && (n = 1 / 0),
            isNaN(l) && (l = 1 / 0),
            Math.max(0, Math.floor(Math.min(n, l)))),
          n = c1(d.model),
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
      w1)
  function w1 (t, e, n) {
    ;(this.onBand = !1),
      (this.inverse = !1),
      (this.dim = t),
      (this.scale = e),
      (this._extent = n || [0, 0])
  }
  function b1 (t, e) {
    e = (t[1] - t[0]) / e / 2
    ;(t[0] += e), (t[1] -= e)
  }
  var S1 = 2 * Math.PI,
    M1 = us.CMD,
    T1 = ['top', 'right', 'bottom', 'left']
  function C1 (t, e, n, i, r, o, a, s) {
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
  function I1 (t, e, n, i, r, o, a) {
    n < 0 && ((t += n), (n = -n)), i < 0 && ((e += i), (i = -i))
    ;(n = t + n),
      (i = e + i),
      (t = a[0] = Math.min(Math.max(r, t), n)),
      (n = a[1] = Math.min(Math.max(o, e), i))
    return Math.sqrt((t - r) * (t - r) + (n - o) * (n - o))
  }
  var k1 = []
  function D1 (t, e, n) {
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
        case M1.M:
          ;(p = f = m[x++]), (d = g = m[x++])
          break
        case M1.L:
          ;(b = C1(p, d, m[x], m[x + 1], v, _, k1, !0)),
            (p = m[x++]),
            (d = m[x++])
          break
        case M1.C:
          ;(b = Gn(
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
            k1
          )),
            (p = m[x++]),
            (d = m[x++])
          break
        case M1.Q:
          ;(b = jn(p, d, m[x++], m[x++], m[x], m[x + 1], v, _, k1)),
            (p = m[x++]),
            (d = m[x++])
          break
        case M1.A:
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
            (l = k1),
            (c = h = u = void 0),
            (a -= i),
            (s -= r = M),
            (u = Math.sqrt(a * a + s * s)),
            (h = (a /= u) * o + i),
            (c = (s /= u) * o + r),
            (b =
              Math.abs(A - P) % S1 < 1e-4 ||
              ((P = D ? ((D = A), (A = ps(P)), ps(D)) : ((A = ps(A)), ps(P))) <
                A && (P += S1),
              (D = Math.atan2(s, a)) < 0 && (D += S1),
              A <= D && D <= P) ||
              (A <= D + S1 && D + S1 <= P)
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
        case M1.R:
          b = I1((f = p = m[x++]), (g = d = m[x++]), m[x++], m[x++], v, _, k1)
          break
        case M1.Z:
          ;(b = C1(p, d, f, g, v, _, k1, !0)), (p = f), (d = g)
      }
      b < y && ((y = b), n.set(k1[0], k1[1]))
    }
    return y
  }
  var A1 = new M(),
    P1 = new M(),
    L1 = new M(),
    O1 = new M(),
    R1 = new M()
  function B1 (t, e) {
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
          a = r.candidates || T1,
          s = i.getBoundingRect().clone(),
          l = (s.applyTransform(i.getComputedTransform()), 1 / 0),
          u = r.anchor,
          h = t.getComputedTransform(),
          c = h && He([], h),
          p = e.get('length2') || 0
        u && L1.copy(u)
        for (var d, f = 0; f < a.length; f++) {
          w = x = _ = v = m = y = g = void 0
          var g = a[f],
            y = 0,
            m = s,
            v = A1,
            _ = O1,
            x = m.width,
            w = m.height
          switch (g) {
            case 'top':
              v.set(m.x + x / 2, m.y - y), _.set(0, -1)
              break
            case 'bottom':
              v.set(m.x + x / 2, m.y + w + y), _.set(0, 1)
              break
            case 'left':
              v.set(m.x - y, m.y + w / 2), _.set(-1, 0)
              break
            case 'right':
              v.set(m.x + x + y, m.y + w / 2), _.set(1, 0)
          }
          M.scaleAndAdd(P1, A1, O1, p), P1.transform(c)
          ;(g = t.getBoundingRect()),
            (g = u
              ? u.distance(P1)
              : t instanceof Z
              ? D1(P1, t.path, L1)
              : ((S = L1),
                (b = I1((b = g).x, g.y, g.width, g.height, P1.x, P1.y, k1)),
                S.set(k1[0], k1[1]),
                b))
          g < l &&
            ((l = g),
            P1.transform(h),
            L1.transform(h),
            L1.toArray(o[0]),
            P1.toArray(o[1]),
            A1.toArray(o[2]))
        }
        ;(i = o), (r = e.get('minTurnAngle'))
        r <= 180 &&
          0 < r &&
          ((r = (r / 180) * Math.PI),
          A1.fromArray(i[0]),
          P1.fromArray(i[1]),
          L1.fromArray(i[2]),
          M.sub(O1, A1, P1),
          M.sub(R1, L1, P1),
          (e = O1.len()),
          (d = R1.len()),
          e < 0.001 ||
            d < 0.001 ||
            (O1.scale(1 / e),
            R1.scale(1 / d),
            (e = O1.dot(R1)),
            Math.cos(r) < e &&
              ((d = C1(P1.x, P1.y, L1.x, L1.y, A1.x, A1.y, N1, !1)),
              z1.fromArray(N1),
              z1.scaleAndAdd(R1, d / Math.tan(Math.PI - r)),
              (e =
                L1.x !== P1.x
                  ? (z1.x - P1.x) / (L1.x - P1.x)
                  : (z1.y - P1.y) / (L1.y - P1.y)),
              isNaN(e) ||
                (e < 0 ? M.copy(z1, P1) : 1 < e && M.copy(z1, L1),
                z1.toArray(i[1]))))),
          n.setShape({ points: o })
      }
    }
    var b, S
  }
  var N1 = [],
    z1 = new M()
  function E1 (t, e, n, i) {
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
  function F1 (t, e) {
    var n = e.smooth,
      i = e.points
    if (i)
      if ((t.moveTo(i[0][0], i[0][1]), 0 < n && 3 <= i.length)) {
        var e = Jt(i[0], i[1]),
          r = Jt(i[1], i[2])
        e && r
          ? ((n = Math.min(e, r) * n),
            (e = ne([], i[1], i[0], n / e)),
            (n = ne([], i[1], i[2], n / r)),
            (r = ne([], e, n, 0.5)),
            t.bezierCurveTo(e[0], e[1], e[0], e[1], r[0], r[1]),
            t.bezierCurveTo(n[0], n[1], n[0], n[1], i[2][0], i[2][1]))
          : (t.lineTo(i[1][0], i[1][1]), t.lineTo(i[2][0], i[2][1]))
      } else for (var o = 1; o < i.length; o++) t.lineTo(i[o][0], i[o][1])
  }
  function V1 (t) {
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
        (l = a ? new Nh(o, r) : null),
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
  function H1 (s, l, u, t, e, n) {
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
  function W1 (t) {
    var e = [],
      n =
        (t.sort(function (t, e) {
          return e.priority - t.priority
        }),
        new W(0, 0, 0, 0))
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
            (f.obb || (f.obb = new Nh(f.localRect, f.transform)),
            (c = c || new Nh(s, l)).intersect(f.obb))
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
    X1 = new Lr(),
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
        W.applyTransform(l, l, s),
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
              W.applyTransform(u, u, h)),
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
        ;(S(r) || B(r).length) &&
          t.group.traverse(function (t) {
            if (t.ignore) return !0
            var e = t.getTextContent(),
              t = T(t)
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
            ? ((o.x = go(l.x, e)), o.setStyle('x', 0), (h = !0))
            : ((o.x = s.x), o.setStyle('x', s.style.x)),
            null != l.y
              ? ((o.y = go(l.y, n)), o.setStyle('y', 0), (h = !0))
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
                      B1(t, e)
                    }
                  })(a, c.getModel('labelLine'))
                )))
            : (o.off('drag'), (o.cursor = s.cursor))
        }
      }),
      ($1.prototype.layout = function (t) {
        var e,
          n,
          i = t.getWidth(),
          t = t.getHeight(),
          r = V1(this._labelList),
          o = ct(r, function (t) {
            return 'shiftX' === t.layoutOption.moveOverlap
          }),
          a = ct(r, function (t) {
            return 'shiftY' === t.layoutOption.moveOverlap
          })
        H1(o, 'x', 'width', 0, i, n),
          H1(a, 'y', 'height', 0, t, e),
          W1(
            ct(r, function (t) {
              return t.layoutOption.hideOverlap
            })
          )
      }),
      ($1.prototype.processLabelsOverall = function () {
        var a = this
        R(this._chartViewList, function (t) {
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
          i = T(t),
          r = i.dataIndex
        if (n && null != r) {
          var n = e.getData(i.dataType),
            e = n.getItemModel(r),
            i = {},
            r = n.getItemVisual(r, 'style'),
            r =
              (r && ((n = n.getVisual('drawType')), (i.stroke = r[n])),
              e.getModel('labelLine')),
            o = t,
            a = (function (t, e) {
              for (
                var n = { normal: t.getModel((e = e || 'labelLine')) }, i = 0;
                i < gl.length;
                i++
              ) {
                var r = gl[i]
                n[r] = t.getModel([r, e])
              }
              return n
            })(e),
            n = i,
            s = o.getTextGuideLine(),
            l = o.getTextContent()
          if (l) {
            for (
              var e = a.normal, u = e.get('show'), h = l.ignore, c = 0;
              c < yl.length;
              c++
            ) {
              var p,
                d = yl[c],
                f = a[d],
                g = 'normal' === d
              f &&
                ((p = f.get('show')),
                (g ? h : N(l.states[d] && l.states[d].ignore, h)) || !N(p, u)
                  ? (p = g ? s : s && s.states[d]) && (p.ignore = !0)
                  : (s ||
                      ((s = new oh()),
                      o.setTextGuideLine(s),
                      g || (!h && u) || E1(s, !0, 'normal', a.normal),
                      o.stateProxy && (s.stateProxy = o.stateProxy)),
                    E1(s, !1, d, f)))
            }
            s &&
              (E(s.style, n),
              (s.style.fill = null),
              (n = e.get('showAbove')),
              ((o.textGuideLineConfig = o.textGuideLineConfig || {}).showAbove =
                n || !1),
              (s.buildPath = F1))
          } else s && o.removeTextGuideLine()
          B1(t, r)
        }
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
            (s.ignore || s.invisible || t.disableLabelAnimation || Xh(t))) ||
          ((r = (o = Y1(s)).oldLayout),
          (n = (i = T(t)).dataIndex),
          (a = { x: s.x, y: s.y, rotation: s.rotation }),
          (i = e.getData(i.dataType)),
          r
            ? (s.attr(r),
              (t = t.prevStates) &&
                (0 <= I(t, 'select') && s.attr(o.oldLayoutSelect),
                0 <= I(t, 'emphasis')) &&
                s.attr(o.oldLayoutEmphasis),
              Gh(s, a, e, n))
            : (s.attr(a),
              Lc(s).valueAnimation ||
                ((t = N(s.style.opacity, 1)),
                (s.style.opacity = 0),
                Uh(s, { style: { opacity: t } }, e, n))),
          (o.oldLayout = a),
          s.states.select &&
            (j1((t = o.oldLayoutSelect = {}), a, Z1),
            j1(t, s.states.select, Z1)),
          s.states.emphasis &&
            (j1((t = o.oldLayoutEmphasis = {}), a, Z1),
            j1(t, s.states.emphasis, Z1)),
          Oc(s, n, i, e, e)),
          !l ||
            l.ignore ||
            l.invisible ||
            ((r = (o = q1(l)).oldLayout),
            (a = { points: l.shape.points }),
            r
              ? (l.attr({ shape: r }), Gh(l, { shape: a }, e))
              : (l.setShape(a),
                (l.style.strokePercent = 0),
                Uh(l, { style: { strokePercent: 1 } }, e)),
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
    var i = U.createCanvas(),
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
  q_(J1)
  u(ix, (ex = he)),
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
        c = new W(0, 0, 0, 0)
      function o (t) {
        if (t.isFinite() && !t.isZero())
          if (0 === l.length) (e = new W(0, 0, 0, 0)).copy(t), l.push(e)
          else {
            for (var e, n = !1, i = 1 / 0, r = 0, o = 0; o < l.length; ++o) {
              var a = l[o]
              if (a.intersect(t)) {
                var s = new W(0, 0, 0, 0)
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
              n || ((e = new W(0, 0, 0, 0)).copy(t), l.push(e)),
              (h = h || l.length >= u)
          }
      }
      for (var a, s = this.__startIndex; s < this.__endIndex; ++s)
        (p = t[s]) &&
          ((f = p.shouldBePainted(n, i, !0, !0)),
          (d =
            p.__isRendered && (p.__dirty & _n || !f)
              ? p.getPrevPaintRect()
              : null) && o(d),
          (a =
            f && (p.__dirty & _n || !p.__isRendered)
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
            _t(o)
              ? ((r =
                  ((o.global || (o.__width === n && o.__height === i)) &&
                    o.__canvasGradient) ||
                  h0(a, o, { x: 0, y: 0, width: n, height: i })),
                (o.__canvasGradient = r),
                (o.__width = n),
                (o.__height = i))
              : xt(o) &&
                ((o.scaleX = o.scaleX || u),
                (o.scaleY = o.scaleY || u),
                (r = x0(a, o, {
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
          R(e, function (t) {
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
        (n = n || Sr),
        'string' == typeof t ? (i = tx(t, e, n)) : L(t) && (t = (i = t).id),
        (r.id = t),
        (r.dom = i).style)
    return (
      t &&
        (Ft(i),
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
            O0(i, a, r, o === e - 1))
        }
        i && i.restore()
      }
    }),
    (y.prototype.getHoverLayer = function () {
      return this.getLayer(1e5)
    }),
    (y.prototype.paintOne = function (t, e) {
      L0(t, e)
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
            Cn(function () {
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
          R(this._layers, function (t) {
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
            (O0(e, t, r, o), t.setPrevPaintRect(n)))
        : O0(e, t, r, o)
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
          s.__dirty & _n &&
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
        R(this._layers, function (t) {
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
          (t = p0(r, 0, i)),
          (e = p0(r, 1, i)),
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
          O0(n, u, o, s === l - 1)
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
        (this.dpr = n.devicePixelRatio || Sr),
        (this._singleCanvas = a),
        (this.root = t).style && (Ft(t), (t.innerHTML = '')),
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
      : ((this._width = p0(t, 0, n)),
        (this._height = p0(t, 1, n)),
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
        (this._sourceManager = new Mg(this)),
        Cg(this)
    }),
    (lx.prototype.mergeOption = function (t, e) {
      ax.prototype.mergeOption.call(this, t, e), Cg(this)
    }),
    (lx.prototype.optionUpdated = function () {
      this._sourceManager.dirty()
    }),
    (lx.prototype.getSourceManager = function () {
      return this._sourceManager
    }),
    (lx.type = 'dataset'),
    (lx.defaultOption = { seriesLayoutBy: pd })
  var ax,
    sx = lx
  function lx () {
    var t = (null !== ax && ax.apply(this, arguments)) || this
    return (t.type = 'dataset'), t
  }
  u(cx, (ux = ny)), (cx.type = 'dataset')
  var ux,
    hx = cx
  function cx () {
    var t = (null !== ux && ux.apply(this, arguments)) || this
    return (t.type = 'dataset'), t
  }
  function px (t) {
    t.registerComponentModel(sx), t.registerComponentView(hx)
  }
  q_([
    function (t) {
      t.registerPainter('canvas', ox)
    },
    px
  ]),
    q_(J1)
  var dx = {
      average: function (t) {
        for (var e = 0, n = 0, i = 0; i < t.length; i++)
          isNaN(t[i]) || ((e += t[i]), n++)
        return 0 === n ? NaN : e / n
      },
      sum: function (t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0
        return e
      },
      max: function (t) {
        for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n])
        return isFinite(e) ? e : NaN
      },
      min: function (t) {
        for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n])
        return isFinite(e) ? e : NaN
      },
      nearest: function (t) {
        return t[0]
      }
    },
    fx = function (t) {
      return Math.round(t.length / 2)
    }
  u(yx, (gx = jg)),
    (yx.prototype.getInitialData = function (t, e) {
      return Bv(null, this, { useEncodeDefaulter: !0 })
    }),
    (yx.prototype.getMarkerPosition = function (t, c, e) {
      var p,
        d,
        n = this.coordinateSystem
      return n && n.clampData
        ? ((p = n.clampData(t)),
          (d = n.dataToPoint(p)),
          e
            ? R(n.getAxes(), function (t, e) {
                if ('category' === t.type && null != c) {
                  var n = t.getTicksCoords(),
                    i = p[e],
                    r = 'x1' === c[e] || 'y1' === c[e]
                  if ((r && (i += 1), !(n.length < 2)))
                    if (2 === n.length)
                      d[e] = t.toGlobalCoord(t.getExtent()[r ? 1 : 0])
                    else {
                      for (
                        var o = void 0, a = void 0, s = 1, l = 0;
                        l < n.length;
                        l++
                      ) {
                        var u = n[l].coord,
                          h =
                            l === n.length - 1
                              ? n[l - 1].tickValue + s
                              : n[l].tickValue
                        if (h === i) {
                          a = u
                          break
                        }
                        if (h < i) o = u
                        else if (null != o && i < h) {
                          a = (u + o) / 2
                          break
                        }
                        1 === l && (s = h - n[0].tickValue)
                      }
                      null == a && (a = (o ? n[n.length - 1] : n[0]).coord),
                        (d[e] = t.toGlobalCoord(a))
                    }
                }
              })
            : ((e = (t = this.getData()).getLayout('offset')),
              (t = t.getLayout('size')),
              (n = n.getBaseAxis().isHorizontal() ? 0 : 1),
              (d[n] += e + t / 2)),
          d)
        : [NaN, NaN]
    }),
    (yx.type = 'series.__base_bar__'),
    (yx.defaultOption = {
      z: 2,
      coordinateSystem: 'cartesian2d',
      legendHoverLink: !0,
      barMinHeight: 0,
      barMinAngle: 0,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: 'mod'
    })
  var gx,
    Vc = yx
  function yx () {
    var t = (null !== gx && gx.apply(this, arguments)) || this
    return (t.type = yx.type), t
  }
  jg.registerClass(Vc)
  u(_x, (mx = Vc)),
    (_x.prototype.getInitialData = function () {
      return Bv(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get('realtimeSort', !0) || null
      })
    }),
    (_x.prototype.getProgressive = function () {
      return !!this.get('large') && this.get('progressive')
    }),
    (_x.prototype.getProgressiveThreshold = function () {
      var t = this.get('progressiveThreshold'),
        e = this.get('largeThreshold')
      return (t = t < e ? e : t)
    }),
    (_x.prototype.brushSelector = function (t, e, n) {
      return n.rect(e.getItemLayout(t))
    }),
    (_x.type = 'series.bar'),
    (_x.dependencies = ['grid', 'polar']),
    (_x.defaultOption = $c(Vc.defaultOption, {
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
        borderColor: null,
        borderWidth: 0,
        borderType: 'solid',
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1
      },
      select: { itemStyle: { borderColor: '#212121' } },
      realtimeSort: !1
    }))
  var mx,
    vx = _x
  function _x () {
    var t = (null !== mx && mx.apply(this, arguments)) || this
    return (t.type = _x.type), t
  }
  function xx (t, e, n, i, r) {
    return t
      ? 'polar' === t.type
        ? ((l = e),
          (u = n),
          (h = (s = t).getArea()),
          (c = yo(h.r0, 1)),
          (p = yo(h.r, 1)),
          (d = new Yu({
            shape: {
              cx: yo(s.cx, 1),
              cy: yo(s.cy, 1),
              r0: c,
              r: p,
              startAngle: h.startAngle,
              endAngle: h.endAngle,
              clockwise: h.clockwise
            }
          })),
          l &&
            ('angle' === s.getBaseAxis().dim
              ? (d.shape.endAngle = h.startAngle)
              : (d.shape.r = c),
            Uh(d, { shape: { endAngle: h.endAngle, r: p } }, u)),
          d)
        : 'cartesian2d' === t.type
        ? ((l = e),
          (s = n),
          (c = i),
          (o = r),
          (u = (p = (h = t).getArea()).x),
          (d = p.y),
          (e = p.width),
          (p = p.height),
          (n = s.get(['lineStyle', 'width']) || 2),
          (u -= n / 2),
          (d -= n / 2),
          (e += n),
          (p += n),
          (u = Math.floor(u)),
          (e = Math.round(e)),
          (a = new Gs({ shape: { x: u, y: d, width: e, height: p } })),
          l &&
            ((l = (n = h.getBaseAxis()).isHorizontal()),
            (h = n.inverse),
            l
              ? (h && (a.shape.x += e), (a.shape.width = 0))
              : (h || (a.shape.y += p), (a.shape.height = 0)),
            (n = S(o)
              ? function (t) {
                  o(t, a)
                }
              : null),
            Uh(
              a,
              { shape: { width: e, height: p, x: u, y: d } },
              s,
              null,
              c,
              n
            )),
          a)
        : null
      : null
    var o, a, s, l, u, h, c, p, d
  }
  function bx () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r0 = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0)
  }
  u(Tx, (Sx = Z)),
    (Tx.prototype.getDefaultShape = function () {
      return new bx()
    }),
    (Tx.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = Math.max(e.r0 || 0, 0),
        o = Math.max(e.r, 0),
        a = 0.5 * (o - r),
        s = r + a,
        l = e.startAngle,
        u = e.endAngle,
        e = e.clockwise,
        h = 2 * Math.PI,
        c = e ? u - l < h : l - u < h,
        h = (c || (l = u - (e ? h : -h)), Math.cos(l)),
        p = Math.sin(l),
        d = Math.cos(u),
        f = Math.sin(u)
      c
        ? (t.moveTo(h * r + n, p * r + i),
          t.arc(h * s + n, p * s + i, a, -Math.PI + l, l, !e))
        : t.moveTo(h * o + n, p * o + i),
        t.arc(n, i, o, l, u, !e),
        t.arc(d * s + n, f * s + i, a, u - 2 * Math.PI, u - Math.PI, !e),
        0 !== r && t.arc(n, i, r, u, l, e)
    })
  var Sx,
    Mx = Tx
  function Tx (t) {
    t = Sx.call(this, t) || this
    return (t.type = 'sausage'), t
  }
  function Cx (t, e) {
    return t.type === e
  }
  function Ix (t, e, n) {
    return e * Math.sin(t) * (n ? -1 : 1)
  }
  function kx (t, e, n) {
    return e * Math.cos(t) * (n ? 1 : -1)
  }
  var Dx = Math.max,
    Ax = Math.min
  u(Bx, (Px = sy)),
    (Bx.prototype.render = function (t, e, n, i) {
      ;(this._model = t),
        this._removeOnRenderedListener(n),
        this._updateDrawMode(t)
      var r = t.get('coordinateSystem')
      ;('cartesian2d' !== r && 'polar' !== r) ||
        ((this._progressiveEls = null),
        this._isLargeDraw
          ? this._renderLarge(t, e, n)
          : this._renderNormal(t, e, n, i))
    }),
    (Bx.prototype.incrementalPrepareRender = function (t) {
      this._clear(), this._updateDrawMode(t), this._updateLargeClip(t)
    }),
    (Bx.prototype.incrementalRender = function (t, e) {
      ;(this._progressiveEls = []), this._incrementalRenderLarge(t, e)
    }),
    (Bx.prototype.eachRendered = function (t) {
      xc(this._progressiveEls || this.group, t)
    }),
    (Bx.prototype._updateDrawMode = function (t) {
      t = t.pipelineContext.large
      ;(null != this._isLargeDraw && t === this._isLargeDraw) ||
        ((this._isLargeDraw = t), this._clear())
    }),
    (Bx.prototype._renderNormal = function (a, t, e, n) {
      var s,
        i,
        r,
        l = this.group,
        u = a.getData(),
        h = this._data,
        c = a.coordinateSystem,
        p = c.getBaseAxis(),
        d =
          ('cartesian2d' === c.type
            ? (s = p.isHorizontal())
            : 'polar' === c.type && (s = 'angle' === p.dim),
          a.isAnimationEnabled() ? a : null),
        f = (function (t, e) {
          var t = t.get('realtimeSort', !0),
            n = e.getBaseAxis()
          if (t && 'category' === n.type && 'cartesian2d' === e.type)
            return { baseAxis: n, otherAxis: e.getOtherAxis(n) }
        })(a, c),
        g = (f && this._enableRealtimeSort(f, u, e), a.get('clip', !0) || f),
        y =
          ((e = u),
          (r = (i = c).getArea && i.getArea()),
          !Cx(i, 'cartesian2d') ||
            ('category' === (i = i.getBaseAxis()).type && i.onBand) ||
            ((e = e.getLayout('bandWidth')),
            i.isHorizontal()
              ? ((r.x -= e), (r.width += 2 * e))
              : ((r.y -= e), (r.height += 2 * e))),
          r),
        m = (l.removeClipPath(), a.get('roundCap', !0)),
        v = a.get('showBackground', !0),
        _ = a.getModel('backgroundStyle'),
        x = _.get('borderRadius') || 0,
        w = [],
        b = this._backgroundEls,
        S = n && n.isInitSort,
        M = n && 'changeAxisOrder' === n.type
      function T (t) {
        var e = Hx[c.type](u, t),
          n =
            ((n = s),
            new ('polar' === c.type ? Yu : Gs)({
              shape: Kx(n, e, c),
              silent: !0,
              z2: 0
            }))
        return (
          n.useStyle(_.getItemStyle()),
          'cartesian2d' === c.type
            ? n.setShape('r', x)
            : n.setShape('cornerRadius', x),
          (w[t] = n)
        )
      }
      u.diff(h)
        .add(function (t) {
          var e,
            n,
            i = u.getItemModel(t),
            r = Hx[c.type](u, t, i)
          v && T(t),
            u.hasValue(t) &&
              Vx[c.type](r) &&
              ((e = !1),
              g && (e = Ox[c.type](y, r)),
              (n = Rx[c.type](a, u, t, r, s, d, p.model, !1, m)),
              f && (n.forceLabelAnimation = !0),
              Gx(n, u, t, i, r, a, s, 'polar' === c.type),
              S
                ? n.attr({ shape: r })
                : f
                ? Nx(f, d, n, r, t, s, !1, !1)
                : Uh(n, { shape: r }, a, t),
              u.setItemGraphicEl(t, n),
              l.add(n),
              (n.ignore = e))
        })
        .update(function (t, e) {
          var n,
            i = u.getItemModel(t),
            r = Hx[c.type](u, t, i),
            o =
              (v &&
                ((o = void 0),
                0 === b.length
                  ? (o = T(e))
                  : ((o = b[e]).useStyle(_.getItemStyle()),
                    'cartesian2d' === c.type
                      ? o.setShape('r', x)
                      : o.setShape('cornerRadius', x),
                    (w[t] = o)),
                (n = Hx[c.type](u, t)),
                Gh(o, { shape: Kx(s, n, c) }, d, t)),
              h.getItemGraphicEl(e))
          u.hasValue(t) && Vx[c.type](r)
            ? ((n = !1),
              g && (n = Ox[c.type](y, r)) && l.remove(o),
              o
                ? (Hh((e = o)).oldStyle = e.style)
                : (o = Rx[c.type](a, u, t, r, s, d, p.model, !!o, m)),
              f && (o.forceLabelAnimation = !0),
              M
                ? (e = o.getTextContent()) &&
                  null != (e = Lc(e)).prevValue &&
                  (e.prevValue = e.value)
                : Gx(o, u, t, i, r, a, s, 'polar' === c.type),
              S
                ? o.attr({ shape: r })
                : f
                ? Nx(f, d, o, r, t, s, !0, M)
                : Gh(o, { shape: r }, a, t, null),
              u.setItemGraphicEl(t, o),
              (o.ignore = n),
              l.add(o))
            : l.remove(o)
        })
        .remove(function (t) {
          var e = h.getItemGraphicEl(t)
          e && jh(e, a, t)
        })
        .execute()
      var o = this._backgroundGroup || (this._backgroundGroup = new io())
      o.removeAll()
      for (var C = 0; C < w.length; ++C) o.add(w[C])
      l.add(o), (this._backgroundEls = w), (this._data = u)
    }),
    (Bx.prototype._renderLarge = function (t, e, n) {
      this._clear(), jx(t, this.group), this._updateLargeClip(t)
    }),
    (Bx.prototype._incrementalRenderLarge = function (t, e) {
      this._removeBackground(), jx(e, this.group, this._progressiveEls, !0)
    }),
    (Bx.prototype._updateLargeClip = function (t) {
      var t = t.get('clip', !0) && xx(t.coordinateSystem, !1, t),
        e = this.group
      t ? e.setClipPath(t) : e.removeClipPath()
    }),
    (Bx.prototype._enableRealtimeSort = function (t, e, n) {
      var i,
        r,
        o = this
      e.count() &&
        ((i = t.baseAxis),
        this._isFirstFrame
          ? (this._dispatchInitSort(e, t, n), (this._isFirstFrame = !1))
          : ((r = function (t) {
              ;(t = e.getItemGraphicEl(t)), (t = t && t.shape)
              return (t && Math.abs(i.isHorizontal() ? t.height : t.width)) || 0
            }),
            (this._onRendered = function () {
              o._updateSortWithinSameData(e, r, i, n)
            }),
            n.getZr().on('rendered', this._onRendered)))
    }),
    (Bx.prototype._dataSort = function (t, e, i) {
      var r = []
      return (
        t.each(t.mapDimension(e.dim), function (t, e) {
          var n = i(e)
          r.push({
            dataIndex: e,
            mappedValue: null == n ? NaN : n,
            ordinalNumber: t
          })
        }),
        r.sort(function (t, e) {
          return e.mappedValue - t.mappedValue
        }),
        {
          ordinalNumbers: F(r, function (t) {
            return t.ordinalNumber
          })
        }
      )
    }),
    (Bx.prototype._isOrderChangedWithinSameData = function (t, e, n) {
      for (
        var i = n.scale,
          r = t.mapDimension(n.dim),
          o = Number.MAX_VALUE,
          a = 0,
          s = i.getOrdinalMeta().categories.length;
        a < s;
        ++a
      ) {
        var l = t.rawIndexOf(r, i.getRawOrdinalNumber(a)),
          l = l < 0 ? Number.MIN_VALUE : e(t.indexOfRawIndex(l))
        if (o < l) return !0
        o = l
      }
      return !1
    }),
    (Bx.prototype._isOrderDifferentInView = function (t, e) {
      for (
        var n = e.scale,
          e = n.getExtent(),
          i = Math.max(0, e[0]),
          r = Math.min(e[1], n.getOrdinalMeta().categories.length - 1);
        i <= r;
        ++i
      )
        if (t.ordinalNumbers[i] !== n.getRawOrdinalNumber(i)) return !0
    }),
    (Bx.prototype._updateSortWithinSameData = function (t, e, n, i) {
      this._isOrderChangedWithinSameData(t, e, n) &&
        ((t = this._dataSort(t, n, e)), this._isOrderDifferentInView(t, n)) &&
        (this._removeOnRenderedListener(i),
        i.dispatchAction({
          type: 'changeAxisOrder',
          componentType: n.dim + 'Axis',
          axisId: n.index,
          sortInfo: t
        }))
    }),
    (Bx.prototype._dispatchInitSort = function (e, n, t) {
      var i = n.baseAxis,
        r = this._dataSort(e, i, function (t) {
          return e.get(e.mapDimension(n.otherAxis.dim), t)
        })
      t.dispatchAction({
        type: 'changeAxisOrder',
        componentType: i.dim + 'Axis',
        isInitSort: !0,
        axisId: i.index,
        sortInfo: r
      })
    }),
    (Bx.prototype.remove = function (t, e) {
      this._clear(this._model), this._removeOnRenderedListener(e)
    }),
    (Bx.prototype.dispose = function (t, e) {
      this._removeOnRenderedListener(e)
    }),
    (Bx.prototype._removeOnRenderedListener = function (t) {
      this._onRendered &&
        (t.getZr().off('rendered', this._onRendered), (this._onRendered = null))
    }),
    (Bx.prototype._clear = function (e) {
      var t = this.group,
        n = this._data
      e && e.isAnimationEnabled() && n && !this._isLargeDraw
        ? (this._removeBackground(),
          (this._backgroundEls = []),
          n.eachItemGraphicEl(function (t) {
            jh(t, e, T(t).dataIndex)
          }))
        : t.removeAll(),
        (this._data = null),
        (this._isFirstFrame = !0)
    }),
    (Bx.prototype._removeBackground = function () {
      this.group.remove(this._backgroundGroup), (this._backgroundGroup = null)
    }),
    (Bx.type = 'bar')
  var Px,
    Lx = Bx,
    Ox = {
      cartesian2d: function (t, e) {
        var n = e.width < 0 ? -1 : 1,
          i = e.height < 0 ? -1 : 1,
          r =
            (n < 0 && ((e.x += e.width), (e.width = -e.width)),
            i < 0 && ((e.y += e.height), (e.height = -e.height)),
            t.x + t.width),
          o = t.y + t.height,
          a = Dx(e.x, t.x),
          s = Ax(e.x + e.width, r),
          t = Dx(e.y, t.y),
          l = Ax(e.y + e.height, o),
          u = s < a,
          h = l < t
        return (
          (e.x = u && r < a ? s : a),
          (e.y = h && o < t ? l : t),
          (e.width = u ? 0 : s - a),
          (e.height = h ? 0 : l - t),
          n < 0 && ((e.x += e.width), (e.width = -e.width)),
          i < 0 && ((e.y += e.height), (e.height = -e.height)),
          u || h
        )
      },
      polar: function (t, e) {
        var n,
          i = e.r0 <= e.r ? 1 : -1,
          r = (i < 0 && ((n = e.r), (e.r = e.r0), (e.r0 = n)), Ax(e.r, t.r)),
          t = Dx(e.r0, t.r0),
          r = (e.r = r) - (e.r0 = t) < 0
        return i < 0 && ((n = e.r), (e.r = e.r0), (e.r0 = n)), r
      }
    },
    Rx = {
      cartesian2d: function (t, e, n, i, r, o, a, s, l) {
        i = new Gs({ shape: O({}, i), z2: 1 })
        return (
          (i.__dataIndex = n),
          (i.name = 'item'),
          o && (i.shape[r ? 'height' : 'width'] = 0),
          i
        )
      },
      polar: function (t, e, n, i, r, o, a, s, l) {
        var w,
          b,
          l = !r && l ? Mx : Yu,
          u = new l({ shape: i, z2: 1 }),
          h = ((u.name = 'item'), Wx(r))
        return (
          (u.calculateTextPosition =
            ((w = h),
            (b = ({ isRoundCap: l === Mx } || {}).isRoundCap),
            function (t, e, n) {
              var i = e.position
              if (!i || i instanceof Array) return Ur(t, e, n)
              var i = w(i),
                r = null != e.distance ? e.distance : 5,
                o = this.shape,
                a = o.cx,
                s = o.cy,
                l = o.r,
                u = o.r0,
                h = (l + u) / 2,
                c = o.startAngle,
                p = o.endAngle,
                d = (c + p) / 2,
                f = b ? Math.abs(l - u) / 2 : 0,
                g = Math.cos,
                y = Math.sin,
                m = a + l * g(c),
                v = s + l * y(c),
                _ = 'left',
                x = 'top'
              switch (i) {
                case 'startArc':
                  ;(m = a + (u - r) * g(d)),
                    (v = s + (u - r) * y(d)),
                    (_ = 'center'),
                    (x = 'top')
                  break
                case 'insideStartArc':
                  ;(m = a + (u + r) * g(d)),
                    (v = s + (u + r) * y(d)),
                    (_ = 'center'),
                    (x = 'bottom')
                  break
                case 'startAngle':
                  ;(m = a + h * g(c) + Ix(c, r + f, !1)),
                    (v = s + h * y(c) + kx(c, r + f, !1)),
                    (_ = 'right'),
                    (x = 'middle')
                  break
                case 'insideStartAngle':
                  ;(m = a + h * g(c) + Ix(c, f - r, !1)),
                    (v = s + h * y(c) + kx(c, f - r, !1)),
                    (_ = 'left'),
                    (x = 'middle')
                  break
                case 'middle':
                  ;(m = a + h * g(d)),
                    (v = s + h * y(d)),
                    (_ = 'center'),
                    (x = 'middle')
                  break
                case 'endArc':
                  ;(m = a + (l + r) * g(d)),
                    (v = s + (l + r) * y(d)),
                    (_ = 'center'),
                    (x = 'bottom')
                  break
                case 'insideEndArc':
                  ;(m = a + (l - r) * g(d)),
                    (v = s + (l - r) * y(d)),
                    (_ = 'center'),
                    (x = 'top')
                  break
                case 'endAngle':
                  ;(m = a + h * g(p) + Ix(p, r + f, !0)),
                    (v = s + h * y(p) + kx(p, r + f, !0)),
                    (_ = 'left'),
                    (x = 'middle')
                  break
                case 'insideEndAngle':
                  ;(m = a + h * g(p) + Ix(p, f - r, !0)),
                    (v = s + h * y(p) + kx(p, f - r, !0)),
                    (_ = 'right'),
                    (x = 'middle')
                  break
                default:
                  return Ur(t, e, n)
              }
              return (
                ((t = t || {}).x = m),
                (t.y = v),
                (t.align = _),
                (t.verticalAlign = x),
                t
              )
            })),
          o &&
            ((h = {}),
            (u.shape[(l = r ? 'r' : 'endAngle')] = r ? i.r0 : i.startAngle),
            (h[l] = i[l]),
            (s ? Gh : Uh)(u, { shape: h }, o)),
          u
        )
      }
    }
  function Bx () {
    var t = Px.call(this) || this
    return (t.type = Bx.type), (t._isFirstFrame = !0), t
  }
  function Nx (t, e, n, i, r, o, a, s) {
    var l,
      o = o
        ? ((l = { x: i.x, width: i.width }), { y: i.y, height: i.height })
        : ((l = { y: i.y, height: i.height }), { x: i.x, width: i.width })
    s || (a ? Gh : Uh)(n, { shape: o }, e, r, null),
      (a ? Gh : Uh)(n, { shape: l }, e ? t.baseAxis.model : null, r)
  }
  function zx (t, e) {
    for (var n = 0; n < e.length; n++) if (!isFinite(t[e[n]])) return 1
  }
  var Ex = ['x', 'y', 'width', 'height'],
    Fx = ['cx', 'cy', 'r', 'startAngle', 'endAngle'],
    Vx = {
      cartesian2d: function (t) {
        return !zx(t, Ex)
      },
      polar: function (t) {
        return !zx(t, Fx)
      }
    },
    Hx = {
      cartesian2d: function (t, e, n) {
        var t = t.getItemLayout(e),
          i =
            n &&
            ((e = t), (i = (n = n).get(['itemStyle', 'borderColor']))) &&
            'none' !== i
              ? ((i = n.get(['itemStyle', 'borderWidth']) || 0),
                (n = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width)),
                (e = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height)),
                Math.min(i, n, e))
              : 0,
          n = 0 < t.width ? 1 : -1,
          e = 0 < t.height ? 1 : -1
        return {
          x: t.x + (n * i) / 2,
          y: t.y + (e * i) / 2,
          width: t.width - n * i,
          height: t.height - e * i
        }
      },
      polar: function (t, e, n) {
        t = t.getItemLayout(e)
        return {
          cx: t.cx,
          cy: t.cy,
          r0: t.r0,
          r: t.r,
          startAngle: t.startAngle,
          endAngle: t.endAngle,
          clockwise: t.clockwise
        }
      }
    }
  function Wx (t) {
    return (
      (e = t ? 'Arc' : 'Angle'),
      function (t) {
        switch (t) {
          case 'start':
          case 'insideStart':
          case 'end':
          case 'insideEnd':
            return t + e
          default:
            return t
        }
      }
    )
    var e
  }
  function Gx (t, s, e, n, i, r, o, a) {
    var l = s.getItemVisual(e, 'style'),
      u =
        (a
          ? r.get('roundCap') ||
            (O(
              (u = t.shape),
              (function (t, e, n) {
                if (null == (t = t.get('borderRadius')))
                  return n ? { cornerRadius: 0 } : null
                V(t) || (t = [t, t, t, t])
                var i = Math.abs(e.r || 0 - e.r0 || 0)
                return {
                  cornerRadius: F(t, function (t) {
                    return Gr(t, i)
                  })
                }
              })(n.getModel('itemStyle'), u, !0)
            ),
            t.setShape(u))
          : ((u = n.get(['itemStyle', 'borderRadius']) || 0),
            t.setShape('r', u)),
        t.useStyle(l),
        n.getShallow('cursor')),
      u =
        (u && t.attr('cursor', u),
        a
          ? o
            ? i.r >= i.r0
              ? 'endArc'
              : 'startArc'
            : i.endAngle >= i.startAngle
            ? 'endAngle'
            : 'startAngle'
          : o
          ? 0 <= i.height
            ? 'bottom'
            : 'top'
          : 0 <= i.width
          ? 'right'
          : 'left'),
      h = (function (t, e) {
        for (
          var n = { normal: t.getModel((e = e || 'label')) }, i = 0;
          i < gl.length;
          i++
        ) {
          var r = gl[i]
          n[r] = t.getModel([r, e])
        }
        return n
      })(n),
      l =
        (Tc(t, h, {
          labelFetcher: r,
          labelDataIndex: e,
          defaultText: (function (t, e) {
            var n,
              i = t.mapDimensionsAll('defaultedLabel'),
              r = i.length
            if (1 === r) return null != (n = Of(t, e, i[0])) ? n + '' : null
            if (r) {
              for (var o = [], a = 0; a < i.length; a++) o.push(Of(t, e, i[a]))
              return o.join(' ')
            }
          })(r.getData(), e),
          inheritColor: l.fill,
          defaultOpacity: l.opacity,
          defaultOutsidePosition: u
        }),
        t.getTextContent()),
      h =
        (a &&
          l &&
          ((a = n.get(['label', 'position'])),
          (t.textConfig.inside = 'middle' === a || null),
          (function (t, e, n, i) {
            if (gt(i)) t.setTextConfig({ rotation: i })
            else if (V(e)) t.setTextConfig({ rotation: 0 })
            else {
              var r,
                i = t.shape,
                o = i.clockwise ? i.startAngle : i.endAngle,
                a = i.clockwise ? i.endAngle : i.startAngle,
                s = (o + a) / 2,
                i = n(e)
              switch (i) {
                case 'startArc':
                case 'insideStartArc':
                case 'middle':
                case 'insideEndArc':
                case 'endArc':
                  r = s
                  break
                case 'startAngle':
                case 'insideStartAngle':
                  r = o
                  break
                case 'endAngle':
                case 'insideEndAngle':
                  r = a
                  break
                default:
                  return t.setTextConfig({ rotation: 0 })
              }
              n = 1.5 * Math.PI - r
              'middle' === i &&
                n > Math.PI / 2 &&
                n < 1.5 * Math.PI &&
                (n -= Math.PI),
                t.setTextConfig({ rotation: n })
            }
          })(t, 'outside' === a ? u : a, Wx(o), n.get(['label', 'rotate']))),
        (u = l),
        (a = h),
        (o = r.getRawValue(e)),
        (l = function (t) {
          var e = s,
            n = t,
            i = e.mapDimensionsAll('defaultedLabel')
          if (!V(n)) return n + ''
          for (var r = [], o = 0; o < i.length; o++) {
            var a = e.getDimensionIndex(i[o])
            0 <= a && r.push(n[a])
          }
          return r.join(' ')
        }),
        u &&
          (((u = Lc(u)).prevValue = u.value),
          (u.value = o),
          (o = a.normal),
          (u.valueAnimation = o.get('valueAnimation')),
          u.valueAnimation) &&
          ((u.precision = o.get('precision')),
          (u.defaultInterpolatedText = l),
          (u.statesModels = a)),
        n.getModel(['emphasis'])),
      c = ($l(t, h.get('focus'), h.get('blurScope'), h.get('disabled')), t),
      p = n,
      d = void 0,
      f = void 0
    d = d || 'itemStyle'
    for (var g = 0; g < Ql.length; g++) {
      var y = Ql[g],
        m = p.getModel([y, d])
      c.ensureState(y).style = f ? f(m) : m[Jl[d]]()
    }
    null != (r = i).startAngle &&
      null != r.endAngle &&
      r.startAngle === r.endAngle &&
      ((t.style.fill = 'none'),
      (t.style.stroke = 'none'),
      R(t.states, function (t) {
        t.style && (t.style.fill = t.style.stroke = 'none')
      }))
  }
  function Ux () {}
  u(qx, (Xx = Z)),
    (qx.prototype.getDefaultShape = function () {
      return new Ux()
    }),
    (qx.prototype.buildPath = function (t, e) {
      for (
        var n = e.points,
          i = this.baseDimIdx,
          r = 1 - this.baseDimIdx,
          o = [],
          a = [],
          s = this.barWidth,
          l = 0;
        l < n.length;
        l += 3
      )
        (a[i] = s),
          (a[r] = n[l + 2]),
          (o[i] = n[l + i]),
          (o[r] = n[l + r]),
          t.rect(o[0], o[1], a[0], a[1])
    })
  var Xx,
    Yx = qx
  function qx (t) {
    t = Xx.call(this, t) || this
    return (t.type = 'largeBar'), t
  }
  function jx (t, e, n, i) {
    var r = t.getData(),
      o = r.getLayout('valueAxisHorizontal') ? 1 : 0,
      a = r.getLayout('largeDataIndices'),
      s = r.getLayout('size'),
      l = t.getModel('backgroundStyle'),
      u = r.getLayout('largeBackgroundPoints'),
      l =
        (u &&
          (((u = new Yx({
            shape: { points: u },
            incremental: !!i,
            silent: !0,
            z2: 0
          })).baseDimIdx = o),
          (u.largeDataIndices = a),
          (u.barWidth = s),
          u.useStyle(l.getItemStyle()),
          e.add(u),
          n) &&
          n.push(u),
        new Yx({
          shape: { points: r.getLayout('largePoints') },
          incremental: !!i,
          ignoreCoarsePointer: !0,
          z2: 1
        }))
    ;(l.baseDimIdx = o),
      (l.largeDataIndices = a),
      (l.barWidth = s),
      e.add(l),
      l.useStyle(r.getVisual('style')),
      (T(l).seriesIndex = t.seriesIndex),
      t.get('silent') || (l.on('mousedown', Zx), l.on('mousemove', Zx)),
      n && n.push(l)
  }
  var Zx = my(
    function (t) {
      t = (function (t, e, n) {
        for (
          var i = t.baseDimIdx,
            r = 1 - i,
            o = t.shape.points,
            a = t.largeDataIndices,
            s = [],
            l = [],
            u = t.barWidth,
            h = 0,
            c = o.length / 3;
          h < c;
          h++
        ) {
          var p = 3 * h
          if (
            ((l[i] = u),
            (l[r] = o[2 + p]),
            (s[i] = o[p + i]),
            (s[r] = o[p + r]),
            l[r] < 0 && ((s[r] += l[r]), (l[r] = -l[r])),
            s[0] <= e && e <= s[0] + l[0] && s[1] <= n && n <= s[1] + l[1])
          )
            return a[h]
        }
        return -1
      })(this, t.offsetX, t.offsetY)
      T(this).dataIndex = 0 <= t ? t : null
    },
    30,
    !1
  )
  function Kx (t, e, n) {
    var i, r
    return Cx(n, 'cartesian2d')
      ? ((r = e),
        (i = n.getArea()),
        {
          x: (t ? r : i).x,
          y: (t ? i : r).y,
          width: (t ? r : i).width,
          height: (t ? i : r).height
        })
      : ((r = e),
        {
          cx: (i = n.getArea()).cx,
          cy: i.cy,
          r0: (t ? i : r).r0,
          r: (t ? i : r).r,
          startAngle: t ? r.startAngle : 0,
          endAngle: t ? r.endAngle : 2 * Math.PI
        })
  }
  q_(function (t) {
    t.registerChartView(Lx),
      t.registerSeriesModel(vx),
      t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, dt(c_, 'bar')),
      t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, {
        seriesType: 'bar',
        plan: ry(),
        reset: function (t) {
          var e, x, n, w, b, S, i, r, M, T, C, I, k, D, A, P
          if (p_(t))
            return (
              (e = t.getData()),
              (i = (x = t.coordinateSystem).getBaseAxis()),
              (n = x.getOtherAxis(i)),
              (w = e.getDimensionIndex(e.mapDimension(n.dim))),
              (b = e.getDimensionIndex(e.mapDimension(i.dim))),
              (S = t.get('showBackground', !0)),
              (i = e.mapDimension(n.dim)),
              (r = e.getCalculationInfo('stackResultDimension')),
              (M = Ov(e, i) && !!e.getCalculationInfo('stackedOnSeries')),
              (T = n.isHorizontal()),
              (C = n.toGlobalCoord(n.dataToCoord('log' === n.type ? 1 : 0))),
              (I = d_(t)),
              (k = t.get('barMinHeight') || 0),
              (D = r && e.getDimensionIndex(r)),
              (A = e.getLayout('size')),
              (P = e.getLayout('offset')),
              {
                progress: function (t, e) {
                  for (
                    var n,
                      i = t.count,
                      r = I && o_(3 * i),
                      o = I && S && o_(3 * i),
                      a = I && o_(i),
                      s = x.master.getRect(),
                      l = T ? s.width : s.height,
                      u = e.getStore(),
                      h = 0;
                    null != (n = t.next());

                  ) {
                    var c,
                      p = u.get(M ? D : w, n),
                      d = u.get(b, n),
                      f = C,
                      g = void 0,
                      y = (M && (g = +p - u.get(w, n)), void 0),
                      m = void 0,
                      v = void 0,
                      _ = void 0
                    T
                      ? ((c = x.dataToPoint([p, d])),
                        (y = f = M ? x.dataToPoint([g, d])[0] : f),
                        (m = c[1] + P),
                        (v = c[0] - f),
                        (_ = A),
                        Math.abs(v) < k && (v = (v < 0 ? -1 : 1) * k))
                      : ((c = x.dataToPoint([d, p])),
                        M && (f = x.dataToPoint([d, g])[1]),
                        (y = c[0] + P),
                        (m = f),
                        (v = A),
                        (_ = c[1] - f),
                        Math.abs(_) < k && (_ = (_ <= 0 ? -1 : 1) * k)),
                      I
                        ? ((r[h] = y),
                          (r[h + 1] = m),
                          (r[h + 2] = T ? v : _),
                          o &&
                            ((o[h] = T ? s.x : y),
                            (o[h + 1] = T ? m : s.y),
                            (o[h + 2] = l)),
                          (a[n] = n))
                        : e.setItemLayout(n, {
                            x: y,
                            y: m,
                            width: v,
                            height: _
                          }),
                      (h += 3)
                  }
                  I &&
                    e.setLayout({
                      largePoints: r,
                      largeDataIndices: a,
                      largeBackgroundPoints: o,
                      valueAxisHorizontal: T
                    })
                }
              }
            )
        }
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, {
        seriesType: 'bar',
        reset: function (t, e, n) {
          var i,
            r = t.getData(),
            o = t.get('sampling'),
            a = t.coordinateSystem,
            s = r.count()
          10 < s &&
            'cartesian2d' === a.type &&
            o &&
            ((i = a.getBaseAxis()),
            (a = a.getOtherAxis(i)),
            (i = i.getExtent()),
            (n = n.getDevicePixelRatio()),
            (i = Math.abs(i[1] - i[0]) * (n || 1)),
            (n = Math.round(s / i)),
            isFinite(n)) &&
            1 < n &&
            ('lttb' === o &&
              t.setData(r.lttbDownSample(r.mapDimension(a.dim), 1 / n)),
            (s = void 0),
            H(o) ? (s = dx[o]) : S(o) && (s = o),
            s) &&
            t.setData(r.downSample(r.mapDimension(a.dim), 1 / n, s, fx))
        }
      }),
      t.registerAction(
        { type: 'changeAxisOrder', event: 'changeAxisOrder', update: 'update' },
        function (e, t) {
          var n = e.componentType || 'series'
          t.eachComponent({ mainType: n, query: e }, function (t) {
            e.sortInfo && t.axis.setCategorySortInfo(e.sortInfo)
          })
        }
      )
  })
  u(Jx, ($x = g)),
    (Jx.type = 'grid'),
    (Jx.dependencies = ['xAxis', 'yAxis']),
    (Jx.layoutMode = 'box'),
    (Jx.defaultOption = {
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
  var $x,
    Qx = Jx
  function Jx () {
    return (null !== $x && $x.apply(this, arguments)) || this
  }
  u(nw, (tw = g)),
    (nw.prototype.getCoordSysModel = function () {
      return this.getReferringComponents('grid', Ko).models[0]
    }),
    (nw.type = 'cartesian2dAxis')
  var tw,
    ew = nw
  function nw () {
    return (null !== tw && tw.apply(this, arguments)) || this
  }
  lt(ew, G_)
  var oa = {
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
    Qy = d(
      {
        boundaryGap: !0,
        deduplication: null,
        splitLine: { show: !1 },
        axisTick: { alignWithLabel: !1, interval: 'auto' },
        axisLabel: { interval: 'auto' }
      },
      oa
    ),
    i0 = d(
      {
        boundaryGap: [0, 0],
        axisLine: { show: 'auto' },
        axisTick: { show: 'auto' },
        splitNumber: 5,
        minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
        minorSplitLine: { show: !1, lineStyle: { color: '#F4F7FD', width: 1 } }
      },
      oa
    ),
    iw = {
      category: Qy,
      value: i0,
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
        i0
      ),
      log: E({ logBase: 10 }, i0)
    },
    rw = { value: 1, category: 1, time: 1, log: 1 }
  function ow (o, a, s, l) {
    R(rw, function (t, r) {
      var e,
        n = d(d({}, iw[r], !0), l, !0),
        n =
          (u(i, (e = s)),
          (i.prototype.mergeDefaultAndTheme = function (t, e) {
            var n = jp(this),
              i = n ? Kp(t) : {}
            d(t, e.getTheme().get(r + 'Axis')),
              d(t, this.getDefaultOption()),
              (t.type = aw(t)),
              n && Zp(t, i, n)
          }),
          (i.prototype.optionUpdated = function () {
            'category' === this.option.type &&
              (this.__ordinalMeta = Fv.createByAxisModel(this))
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
      o.registerSubTypeDefaulter(a + 'Axis', aw)
  }
  function aw (t) {
    return t.type || (t.data ? 'category' : 'value')
  }
  function sw (t) {
    ;(this.type = 'cartesian'),
      (this._dimList = []),
      (this._axes = {}),
      (this.name = t || '')
  }
  ;(sw.prototype.getAxis = function (t) {
    return this._axes[t]
  }),
    (sw.prototype.getAxes = function () {
      return F(
        this._dimList,
        function (t) {
          return this._axes[t]
        },
        this
      )
    }),
    (sw.prototype.getAxesByScale = function (e) {
      return (
        (e = e.toLowerCase()),
        ct(this.getAxes(), function (t) {
          return t.scale.type === e
        })
      )
    }),
    (sw.prototype.addAxis = function (t) {
      var e = t.dim
      ;(this._axes[e] = t), this._dimList.push(e)
    })
  var lw = ['x', 'y']
  function uw (t) {
    return 'interval' === t.type || 'time' === t.type
  }
  u(pw, (hw = sw)),
    (pw.prototype.calcAffineTransform = function () {
      this._transform = this._invTransform = null
      var t,
        e,
        n,
        i,
        r = this.getAxis('x').scale,
        o = this.getAxis('y').scale
      uw(r) &&
        uw(o) &&
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
        (this._invTransform = He([], i)))
    }),
    (pw.prototype.getBaseAxis = function () {
      return (
        this.getAxesByScale('ordinal')[0] ||
        this.getAxesByScale('time')[0] ||
        this.getAxis('x')
      )
    }),
    (pw.prototype.containPoint = function (t) {
      var e = this.getAxis('x'),
        n = this.getAxis('y')
      return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
    }),
    (pw.prototype.containData = function (t) {
      return (
        this.getAxis('x').containData(t[0]) &&
        this.getAxis('y').containData(t[1])
      )
    }),
    (pw.prototype.containZone = function (t, e) {
      var t = this.dataToPoint(t),
        e = this.dataToPoint(e),
        n = this.getArea(),
        e = new W(t[0], t[1], e[0] - t[0], e[1] - t[1])
      return n.intersect(e)
    }),
    (pw.prototype.dataToPoint = function (t, e, n) {
      n = n || []
      var i,
        r = t[0],
        o = t[1]
      return this._transform &&
        null != r &&
        isFinite(r) &&
        null != o &&
        isFinite(o)
        ? ie(n, t, this._transform)
        : ((t = this.getAxis('x')),
          (i = this.getAxis('y')),
          (n[0] = t.toGlobalCoord(t.dataToCoord(r, e))),
          (n[1] = i.toGlobalCoord(i.dataToCoord(o, e))),
          n)
    }),
    (pw.prototype.clampData = function (t, e) {
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
    (pw.prototype.pointToData = function (t, e) {
      var n,
        i,
        r = []
      return this._invTransform
        ? ie(r, t, this._invTransform)
        : ((n = this.getAxis('x')),
          (i = this.getAxis('y')),
          (r[0] = n.coordToData(n.toLocalCoord(t[0]), e)),
          (r[1] = i.coordToData(i.toLocalCoord(t[1]), e)),
          r)
    }),
    (pw.prototype.getOtherAxis = function (t) {
      return this.getAxis('x' === t.dim ? 'y' : 'x')
    }),
    (pw.prototype.getArea = function () {
      var t = this.getAxis('x').getGlobalExtent(),
        e = this.getAxis('y').getGlobalExtent(),
        n = Math.min(t[0], t[1]),
        i = Math.min(e[0], e[1]),
        t = Math.max(t[0], t[1]) - n,
        e = Math.max(e[0], e[1]) - i
      return new W(n, i, t, e)
    })
  var hw,
    cw = pw
  function pw () {
    var t = (null !== hw && hw.apply(this, arguments)) || this
    return (t.type = 'cartesian2d'), (t.dimensions = lw), t
  }
  u(gw, (dw = Uc)),
    (gw.prototype.isHorizontal = function () {
      var t = this.position
      return 'top' === t || 'bottom' === t
    }),
    (gw.prototype.getGlobalExtent = function (t) {
      var e = this.getExtent()
      return (
        (e[0] = this.toGlobalCoord(e[0])),
        (e[1] = this.toGlobalCoord(e[1])),
        t && e[0] > e[1] && e.reverse(),
        e
      )
    }),
    (gw.prototype.pointToData = function (t, e) {
      return this.coordToData(this.toLocalCoord(t['x' === this.dim ? 0 : 1]), e)
    }),
    (gw.prototype.setCategorySortInfo = function (t) {
      if ('category' !== this.type) return !1
      ;(this.model.option.categorySortInfo = t), this.scale.setSortInfo(t)
    })
  var dw,
    fw = gw
  function gw (t, e, n, i, r) {
    t = dw.call(this, t, e, n) || this
    return (
      (t.index = 0), (t.type = i || 'value'), (t.position = r || 'bottom'), t
    )
  }
  function yw (t, e, n) {
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
        St(n.labelInside, e.get(['axisLabel', 'inside'])) &&
          (r.labelDirection = -r.labelDirection),
        e.get(['axisLabel', 'rotate']))
    return (r.labelRotate = 'top' === s ? -h : h), (r.z2 = 1), r
  }
  function mw (t) {
    return 'cartesian2d' === t.get('coordinateSystem')
  }
  function vw (i) {
    var r = { xAxisModel: null, yAxisModel: null }
    return (
      R(r, function (t, e) {
        var n = e.replace(/Model$/, ''),
          n = i.getReferringComponents(n, Ko).models[0]
        r[e] = n
      }),
      r
    )
  }
  var _w = Math.log
  ;(ww.prototype.getRect = function () {
    return this._rect
  }),
    (ww.prototype.update = function (t, e) {
      var n = this._axesMap
      function i (t) {
        var d,
          e = B(t),
          n = e.length
        if (n) {
          for (var i = [], r = n - 1; 0 <= r; r--) {
            var o = t[+e[r]],
              a = o.model,
              s = o.scale
            Wv(s) && a.get('alignTicks') && null == a.get('interval')
              ? i.push(o)
              : (N_(s, a), Wv(s) && (d = o))
          }
          i.length &&
            (d || N_((d = i.pop()).scale, d.model),
            R(i, function (t) {
              var e = t.scale,
                t = t.model,
                n = d.scale,
                i = e_.prototype,
                r = i.getTicks.call(n),
                o = i.getTicks.call(n, !0),
                a = r.length - 1,
                n = i.getInterval.call(n),
                s = (t = B_(e, t)).extent,
                l = t.fixMin,
                t = t.fixMax,
                u =
                  ('log' === e.type &&
                    ((u = _w(e.base)), (s = [_w(s[0]) / u, _w(s[1]) / u])),
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
                  (h = Uv(h)), (p = s[0] + h * a)
              else if (t)
                for (
                  c = s[1] - h * a;
                  c > s[0] && isFinite(c) && isFinite(s[0]);

                )
                  (h = Uv(h)), (c = s[1] - h * a)
              else {
                u = (h = e.getTicks().length - 1 > a ? Uv(h) : h) * a
                ;(c = yo((p = Math.ceil(s[1] / h) * h) - u)) < 0 && 0 <= s[0]
                  ? ((c = 0), (p = yo(u)))
                  : 0 < p && s[1] <= 0 && ((p = 0), (c = -yo(u)))
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
      R(n.x, function (t) {
        Sw(n, 'y', t, r)
      }),
        R(n.y, function (t) {
          Sw(n, 'x', t, r)
        }),
        this.resize(this.model, e)
    }),
    (ww.prototype.resize = function (t, e, n) {
      var i = t.getBoxLayoutParams(),
        n = !n && t.get('containLabel'),
        a = qp(i, { width: e.getWidth(), height: e.getHeight() }),
        r = ((this._rect = a), this._axesList)
      function o () {
        R(r, function (t) {
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
          (R(r, function (t) {
            var e, n, i
            t.model.get(['axisLabel', 'inside']) ||
              ((e = V_(t)) &&
                ((n = t.isHorizontal() ? 'height' : 'width'),
                (i = t.model.get(['axisLabel', 'margin'])),
                (a[n] -= e[n] + i),
                'top' === t.position
                  ? (a.y += e.height + i)
                  : 'left' === t.position && (a.x += e.width + i)))
          }),
          o()),
        R(this._coordsList, function (t) {
          t.calcAffineTransform()
        })
    }),
    (ww.prototype.getAxis = function (t, e) {
      t = this._axesMap[t]
      if (null != t) return t[e || 0]
    }),
    (ww.prototype.getAxes = function () {
      return this._axesList.slice()
    }),
    (ww.prototype.getCartesian = function (t, e) {
      if (null != t && null != e) return this._coordsMap['x' + t + 'y' + e]
      L(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex))
      for (var n = 0, i = this._coordsList; n < i.length; n++)
        if (i[n].getAxis('x').index === t || i[n].getAxis('y').index === e)
          return i[n]
    }),
    (ww.prototype.getCartesians = function () {
      return this._coordsList.slice()
    }),
    (ww.prototype.convertToPixel = function (t, e, n) {
      e = this._findConvertTarget(e)
      return e.cartesian
        ? e.cartesian.dataToPoint(n)
        : e.axis
        ? e.axis.toGlobalCoord(e.axis.dataToCoord(n))
        : null
    }),
    (ww.prototype.convertFromPixel = function (t, e, n) {
      e = this._findConvertTarget(e)
      return e.cartesian
        ? e.cartesian.pointToData(n)
        : e.axis
        ? e.axis.coordToData(e.axis.toLocalCoord(n))
        : null
    }),
    (ww.prototype._findConvertTarget = function (t) {
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
    (ww.prototype.containPoint = function (t) {
      var e = this._coordsList[0]
      if (e) return e.containPoint(t)
    }),
    (ww.prototype._initCartesian = function (o, t, e) {
      var a = this,
        s = this,
        l = { left: !1, right: !1, top: !1, bottom: !1 },
        u = { x: {}, y: {} },
        h = { x: 0, y: 0 }
      function n (r) {
        return function (t, e) {
          var n, i
          bw(t, o) &&
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
              (n = new fw(r, z_(t), [0, 0], t.get('type'), n)).type),
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
          ? R((this._axesMap = u).x, function (i, r) {
              R(u.y, function (t, e) {
                var e = 'x' + r + 'y' + e,
                  n = new cw(e)
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
    (ww.prototype._updateScale = function (t, i) {
      function r (e, n) {
        var i, t, r
        R(
          ((i = e),
          (t = n.dim),
          (r = {}),
          R(i.mapDimensionsAll(t), function (t) {
            r[Rv(i, t)] = !0
          }),
          B(r)),
          function (t) {
            n.scale.unionExtentFromData(e, t)
          }
        )
      }
      R(this._axesList, function (t) {
        var e
        t.scale.setExtent(1 / 0, -1 / 0),
          'category' === t.type &&
            ((e = t.model.get('categorySortInfo')), t.scale.setSortInfo(e))
      }),
        t.eachSeries(function (t) {
          var e, n
          mw(t) &&
            ((n = (e = vw(t)).xAxisModel), (e = e.yAxisModel), bw(n, i)) &&
            bw(e, i) &&
            ((n = this.getCartesian(n.componentIndex, e.componentIndex)),
            (e = t.getData()),
            (t = n.getAxis('x')),
            (n = n.getAxis('y')),
            r(e, t),
            r(e, n))
        }, this)
    }),
    (ww.prototype.getTooltipAxes = function (n) {
      var i = [],
        r = []
      return (
        R(this.getCartesians(), function (t) {
          var e = null != n && 'auto' !== n ? t.getAxis(n) : t.getBaseAxis(),
            t = t.getOtherAxis(e)
          I(i, e) < 0 && i.push(e), I(r, t) < 0 && r.push(t)
        }),
        { baseAxes: i, otherAxes: r }
      )
    }),
    (ww.create = function (i, r) {
      var o = []
      return (
        i.eachComponent('grid', function (t, e) {
          var n = new ww(t, i, r)
          ;(n.name = 'grid_' + e),
            n.resize(t, r, !0),
            (t.coordinateSystem = n),
            o.push(n)
        }),
        i.eachSeries(function (t) {
          var e, n, i
          mw(t) &&
            ((e = (n = vw(t)).xAxisModel),
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
    (ww.dimensions = lw)
  var xw = ww
  function ww (t, e, n) {
    ;(this.type = 'grid'),
      (this._coordsMap = {}),
      (this._coordsList = []),
      (this._axesMap = {}),
      (this._axesList = []),
      (this.axisPointerEnabled = !0),
      (this.dimensions = lw),
      this._initCartesian(t, e, n),
      (this.model = t)
  }
  function bw (t, e) {
    return t.getCoordSysModel() === e
  }
  function Sw (t, e, n, i) {
    n.getAxesOnZeroOf = function () {
      return r ? [r] : []
    }
    var r,
      o = t[e],
      t = n.model,
      e = t.get(['axisLine', 'onZero']),
      n = t.get(['axisLine', 'onZeroAxisIndex'])
    if (e) {
      if (null != n) Mw(o[n]) && (r = o[n])
      else
        for (var a in o)
          if (o.hasOwnProperty(a) && Mw(o[a]) && !i[s(o[a])]) {
            r = o[a]
            break
          }
      r && (i[s(r)] = !0)
    }
    function s (t) {
      return t.dim + '_' + t.index
    }
  }
  function Mw (t) {
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
  var Tw = Math.PI,
    Cw =
      ((kw.prototype.hasBuilder = function (t) {
        return !!Iw[t]
      }),
      (kw.prototype.add = function (t) {
        Iw[t](this.opt, this.axisModel, this.group, this._transformGroup)
      }),
      (kw.prototype.getGroup = function () {
        return this.group
      }),
      (kw.innerTextLayout = function (t, e, n) {
        var i,
          e = xo(e - t),
          t = wo(e)
            ? ((i = 0 < n ? 'top' : 'bottom'), 'center')
            : wo(e - Tw)
            ? ((i = 0 < n ? 'bottom' : 'top'), 'center')
            : ((i = 'middle'),
              0 < e && e < Tw
                ? 0 < n
                  ? 'right'
                  : 'left'
                : 0 < n
                ? 'left'
                : 'right')
        return { rotation: e, textAlign: t, textVerticalAlign: i }
      }),
      (kw.makeAxisEventDataBase = function (t) {
        var e = { componentType: t.mainType, componentIndex: t.componentIndex }
        return (e[t.mainType + 'Index'] = t.componentIndex), e
      }),
      (kw.isLabelSilent = function (t) {
        var e = t.get('tooltip')
        return t.get('silent') || !(t.get('triggerEvent') || (e && e.show))
      }),
      kw),
    Iw = {
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
          e && (ie(o, o, e), ie(a, a, e)),
          (l = O(
            { lineCap: 'round' },
            t.getModel(['axisLine', 'lineStyle']).getLineStyle()
          )),
          lc(
            (n = new hh({
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
          (H(e) || gt(e)) && (e = [e, e]),
          (n = (function (t, e) {
            if (null != t)
              return [
                go((t = V(t) ? t : [t, t])[0], e[0]) || 0,
                go(N(t[1], t[0]), e[1]) || 0
              ]
          })(t.get(['axisLine', 'symbolOffset']) || 0, e)),
          (h = e[0]),
          (c = e[1]),
          R(
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
                ((e = l0(u[e], -h / 2, -c / 2, h, c, l.stroke, !0)),
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
                  s = Lw(
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
                St(c.axisLabelShow, h.get(['axisLabel', 'show'])) &&
                !p.scale.isBlank()
              )
                return (
                  (d = h.getModel('axisLabel')),
                  (f = d.get('margin')),
                  (t = p.getViewLabels()),
                  (e = ((St(c.labelRotate, d.get('rotate')) || 0) * Tw) / 180),
                  (g = Cw.innerTextLayout(c.rotation, e, c.labelDirection)),
                  (y = h.getCategories && h.getCategories(!0)),
                  (m = []),
                  (v = Cw.isLabelSilent(h)),
                  (_ = h.get('triggerEvent')),
                  R(t, function (t, e) {
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
                            ? new qc(a.textStyle, d, h.ecModel)
                            : o).getTextColor() ||
                        h.get(['axisLine', 'lineStyle', 'color']),
                      s = p.dataToCoord(n),
                      s = new js({
                        x: s,
                        y: c.labelOffset + c.labelDirection * f,
                        rotation: g.rotation,
                        silent: v,
                        z2: 10 + (t.level || 0),
                        style: Cc(o, {
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
                        (((t = Cw.makeAxisEventDataBase(h)).targetType =
                          'axisLabel'),
                        (t.value = r),
                        (t.tickIndex = e),
                        'category' === p.type && (t.dataIndex = n),
                        (T(s).eventData = t)),
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
            (W_(u.axis) ||
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
                ? (Dw(y), Dw(o))
                : Aw(y, f) && (d ? (Dw(f), Dw(g)) : (Dw(y), Dw(o))),
              !1 === u
                ? (Dw(r), Dw(a))
                : Aw(h, r) && (u ? (Dw(h), Dw(s)) : (Dw(r), Dw(a)))),
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
                var w = Lw(m[x], p.transform, v, _, 'minorticks_' + x), b = 0;
                b < w.length;
                b++
              )
                c.add(w[b])
        }
        e.get(['axisLabel', 'hideOverlap']) &&
          W1(
            V1(
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
          p = St(t.axisName, e.get('name'))
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
            Pw(l) ? t.labelOffset + s * u : 0
          ]),
          null != (u = e.get('nameRotate')) && (u = (u * Tw) / 180),
          Pw(l)
            ? (r = Cw.innerTextLayout(
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
              (l = wo(u - Tw / 2)
                ? ((c = h ? 'bottom' : 'top'), 'center')
                : wo(u - 1.5 * Tw)
                ? ((c = h ? 'top' : 'bottom'), 'center')
                : ((c = 'middle'),
                  u < 1.5 * Tw && Tw / 2 < u
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
          (l = St(t.nameTruncateMaxWidth, h.maxWidth, c)),
          vc({
            el: (t = new js({
              x: a[0],
              y: a[1],
              rotation: r.rotation,
              silent: Cw.isLabelSilent(e),
              style: Cc(o, {
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
            (((h = Cw.makeAxisEventDataBase(e)).targetType = 'axisName'),
            (h.name = p),
            (T(t).eventData = h)),
          i.add(t),
          t.updateTransform(),
          n.add(t),
          t.decomposeTransform())
      }
    }
  function kw (t, e) {
    ;(this.group = new io()),
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
    t = new io({ x: e.position[0], y: e.position[1], rotation: e.rotation })
    t.updateTransform(), (this._transformGroup = t)
  }
  function Dw (t) {
    t && (t.ignore = !0)
  }
  function Aw (t, e) {
    var n,
      i = t && t.getBoundingRect().clone(),
      r = e && e.getBoundingRect().clone()
    if (i && r)
      return (
        Fe((n = Be([])), n, -t.rotation),
        i.applyTransform(ze([], n, t.getLocalTransform())),
        r.applyTransform(ze([], n, e.getLocalTransform())),
        i.intersect(r)
      )
  }
  function Pw (t) {
    return 'middle' === t || 'center' === t
  }
  function Lw (t, e, n, i, r) {
    for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord,
        u =
          ((a[0] = u),
          (s[(a[1] = 0)] = u),
          (s[1] = n),
          e && (ie(a, a, e), ie(s, s, e)),
          new hh({
            shape: { x1: a[0], y1: a[1], x2: s[0], y2: s[1] },
            style: i,
            z2: 2,
            autoBatch: !0,
            silent: !0
          }))
      lc(u.shape, u.style.lineWidth),
        (u.anid = r + '_' + t[l].tickValue),
        o.push(u)
    }
    return o
  }
  function Ow (t, e) {
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
      R(e.getCoordinateSystems(), function (s) {
        var l, u, t, e, n
        function i (t, e, n) {
          var i,
            r,
            o = n.model.getModel('axisPointer', p),
            a = o.get('show')
          a &&
            ('auto' !== a || t || Nw(o)) &&
            (null == e && (e = o.get('triggerTooltip')),
            (a = (o = t
              ? (function (t, e, n, i, r, o) {
                  var a = e.getModel('axisPointer'),
                    s = {},
                    e =
                      (R(
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
                  return t.model.getModel('axisPointer', new qc(s, n, i))
                })(n, u, p, c, t, e)
              : o).get('snap')),
            (t = o.get('triggerEmphasis')),
            (i = zw(n.model)),
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
                useHandle: Nw(o),
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
                    Rw(o[i + 'AxisId'], n.id) ||
                    Rw(o[i + 'AxisIndex'], n.componentIndex) ||
                    Rw(o[i + 'AxisName'], n.name)
                  )
                    return r
                }
              })(d, n))) &&
            (((a = f[t] || (f[t] = { axesInfo: {} })).axesInfo[i] = e),
            (a.mapper = d[t].mapper),
            (e.linkGroup = a))
        }
        s.axisPointerEnabled &&
          ((t = zw(s.model)),
          (l = h.coordSysAxesInfo[t] = {}),
          (u = (h.coordSysMap[t] = s).model.getModel('tooltip', o)),
          R(s.getAxes(), dt(i, !1, null)),
          s.getTooltipAxes) &&
          o &&
          u.get('show') &&
          ((t = 'axis' === u.get('trigger')),
          (e = 'cross' === u.get(['axisPointer', 'type'])),
          (n = s.getTooltipAxes(u.get(['axisPointer', 'axis']))),
          (t || e) && R(n.baseAxes, dt(i, !e || 'cross', t)),
          e) &&
          R(n.otherAxes, dt(i, 'cross', !1))
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
            R(r.coordSysAxesInfo[zw(i.model)], function (t) {
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
  function Rw (t, e) {
    return 'all' === t || (V(t) && 0 <= I(t, e)) || t === e
  }
  function Bw (t) {
    var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo
    return e && e.axesInfo[zw(t)]
  }
  function Nw (t) {
    return !!t.get(['handle', 'show'])
  }
  function zw (t) {
    return t.type + '||' + t.id
  }
  var Ew,
    Fw = {},
    Vw =
      (u(Hw, (Ew = ny)),
      (Hw.prototype.render = function (t, e, n, i) {
        var r, o, a, s, l, u
        this.axisPointerClass &&
          (r = Bw((r = t))) &&
          ((l = r.axisPointerModel),
          (o = r.axis.scale),
          (a = l.option),
          (u = l.get('status')),
          null != (s = l.get('value')) && (s = o.parse(s)),
          (l = Nw(l)),
          null == u && (a.status = l ? 'show' : 'hide'),
          (u = o.getExtent().slice())[0] > u[1] && u.reverse(),
          (s = null == s || s > u[1] ? u[1] : s) < u[0] && (s = u[0]),
          (a.value = s),
          l) &&
          (a.status = r.axis.scale.isBlank() ? 'hide' : 'show'),
          Ew.prototype.render.apply(this, arguments),
          this._doUpdateAxisPointerClass(t, n, !0)
      }),
      (Hw.prototype.updateAxisPointer = function (t, e, n, i) {
        this._doUpdateAxisPointerClass(t, n, !1)
      }),
      (Hw.prototype.remove = function (t, e) {
        var n = this._axisPointer
        n && n.remove(e)
      }),
      (Hw.prototype.dispose = function (t, e) {
        this._disposeAxisPointer(e), Ew.prototype.dispose.apply(this, arguments)
      }),
      (Hw.prototype._doUpdateAxisPointerClass = function (t, e, n) {
        var i,
          r = Hw.getAxisPointerClass(this.axisPointerClass)
        r &&
          ((i = (i = Bw((i = t))) && i.axisPointerModel)
            ? (this._axisPointer || (this._axisPointer = new r())).render(
                t,
                i,
                e,
                n
              )
            : this._disposeAxisPointer(e))
      }),
      (Hw.prototype._disposeAxisPointer = function (t) {
        this._axisPointer && this._axisPointer.dispose(t),
          (this._axisPointer = null)
      }),
      (Hw.registerAxisPointerClass = function (t, e) {
        Fw[t] = e
      }),
      (Hw.getAxisPointerClass = function (t) {
        return t && Fw[t]
      }),
      (Hw.type = 'axis'),
      Hw)
  function Hw () {
    var t = (null !== Ew && Ew.apply(this, arguments)) || this
    return (t.type = Hw.type), t
  }
  var Ww = Yo()
  var Gw,
    Uw,
    Xw = ['axisLine', 'axisTickLabel', 'axisName'],
    Yw = ['splitArea', 'splitLine', 'minorSplitLine'],
    yh =
      (u(Kw, (Uw = Vw)),
      (Kw.prototype.render = function (i, t, e, n) {
        this.group.removeAll()
        var r,
          o,
          a = this._axisGroup
        ;(this._axisGroup = new io()),
          this.group.add(this._axisGroup),
          i.get('show') &&
            ((o = yw((r = i.getCoordSysModel()), i)),
            (o = new Cw(
              i,
              O(
                {
                  handleAutoShown: function (t) {
                    for (
                      var e = r.coordinateSystem.getCartesians(), n = 0;
                      n < e.length;
                      n++
                    )
                      if (Wv(e[n].getOtherAxis(i.axis).scale)) return !0
                    return !1
                  }
                },
                o
              )
            )),
            R(Xw, o.add, o),
            this._axisGroup.add(o.getGroup()),
            R(
              Yw,
              function (t) {
                i.get([t, 'show']) && qw[t](this, this._axisGroup, i, r)
              },
              this
            ),
            (n && 'changeAxisOrder' === n.type && n.isInitSort) ||
              dc(a, this._axisGroup, i),
            Uw.prototype.render.call(this, i, t, e, n))
      }),
      (Kw.prototype.remove = function () {
        Ww(this).splitAreaColors = null
      }),
      (Kw.type = 'cartesianAxis'),
      Kw),
    qw = {
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
              y = new hh({
                anid: null != y ? 'line_' + h[f].tickValue : null,
                autoBatch: !0,
                shape: { x1: c[0], y1: c[1], x2: p[0], y2: p[1] },
                style: E({ stroke: a[g] }, d),
                silent: !0
              })
            lc(y.shape, d.lineWidth), e.add(y)
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
                  new hh({
                    anid: 'minor_line_' + s[c][p].tickValue,
                    autoBatch: !0,
                    shape: { x1: l[0], y1: l[1], x2: u[0], y2: u[1] },
                    style: h,
                    silent: !0
                  }))
              lc(d.shape, h.lineWidth), e.add(d)
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
              h = Ww(t).splitAreaColors,
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
                  new Gs({
                    anid: null != m ? 'area_' + m : null,
                    shape: { x: v, y: _, width: x, height: w },
                    style: E({ fill: a[p] }, y),
                    autoBatch: !0,
                    silent: !0
                  })
                ),
                (p = (p + 1) % u)
            }
            Ww(t).splitAreaColors = c
          }
        }
      }
    },
    jw = (u(Zw, (Gw = yh)), (Zw.type = 'xAxis'), Zw)
  function Zw () {
    var t = (null !== Gw && Gw.apply(this, arguments)) || this
    return (t.type = Zw.type), t
  }
  function Kw () {
    var t = (null !== Uw && Uw.apply(this, arguments)) || this
    return (t.type = Kw.type), (t.axisPointerClass = 'CartesianAxisPointer'), t
  }
  u(Jw, ($w = yh)), (Jw.type = 'yAxis')
  var $w,
    Qw = Jw
  function Jw () {
    var t = (null !== $w && $w.apply(this, arguments)) || this
    return (t.type = jw.type), t
  }
  u(ib, (tb = ny)),
    (ib.prototype.render = function (t, e) {
      this.group.removeAll(),
        t.get('show') &&
          this.group.add(
            new Gs({
              shape: t.coordinateSystem.getRect(),
              style: E({ fill: t.get('backgroundColor') }, t.getItemStyle()),
              silent: !0,
              z2: -1
            })
          )
    }),
    (ib.type = 'grid')
  var tb,
    eb = ib,
    nb = { offset: 0 }
  function ib () {
    var t = (null !== tb && tb.apply(this, arguments)) || this
    return (t.type = 'grid'), t
  }
  q_(function (t) {
    t.registerComponentView(eb),
      t.registerComponentModel(Qx),
      t.registerCoordinateSystem('cartesian2d', xw),
      ow(t, 'x', ew, nb),
      ow(t, 'y', ew, nb),
      t.registerComponentView(jw),
      t.registerComponentView(Qw),
      t.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
      })
  })
  u(ub, (ob = g)),
    (ub.type = 'title'),
    (ub.defaultOption = {
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
  var rb,
    ob,
    ab = ub,
    sb =
      (u(lb, (rb = ny)),
      (lb.prototype.render = function (t, e, n) {
        var i, r, o, a, s, l, u, h, c
        this.group.removeAll(),
          t.get('show') &&
            ((i = this.group),
            (u = t.getModel('textStyle')),
            (r = t.getModel('subtextStyle')),
            (h = t.get('textAlign')),
            (c = N(t.get('textBaseline'), t.get('textVerticalAlign'))),
            (s = (u = new js({
              style: Cc(
                u,
                { text: t.get('text'), fill: u.getTextColor() },
                { disableBox: !0 }
              ),
              z2: 10
            })).getBoundingRect()),
            (l = t.get('subtext')),
            (r = new js({
              style: Cc(
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
                Hp(o, '_' + t.get('target'))
              }),
            a &&
              r.on('click', function () {
                Hp(a, '_' + t.get('subtarget'))
              }),
            (T(u).eventData = T(r).eventData =
              s
                ? { componentType: 'title', componentIndex: t.componentIndex }
                : null),
            i.add(u),
            l && i.add(r),
            (s = i.getBoundingRect()),
            ((l = t.getBoxLayoutParams()).width = s.width),
            (l.height = s.height),
            (l = qp(
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
            (c = new Gs({
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
      (lb.type = 'title'),
      lb)
  function lb () {
    var t = (null !== rb && rb.apply(this, arguments)) || this
    return (t.type = lb.type), t
  }
  function ub () {
    var t = (null !== ob && ob.apply(this, arguments)) || this
    return (
      (t.type = ub.type), (t.layoutMode = { type: 'box', ignoreSize: !0 }), t
    )
  }
  q_(function (t) {
    t.registerComponentModel(ab), t.registerComponentView(sb)
  })
  u(pb, (hb = g)),
    (pb.prototype.init = function (t, e, n) {
      this.mergeDefaultAndTheme(t, n),
        (t.selected = t.selected || {}),
        this._updateSelector(t)
    }),
    (pb.prototype.mergeOption = function (t, e) {
      hb.prototype.mergeOption.call(this, t, e), this._updateSelector(t)
    }),
    (pb.prototype._updateSelector = function (t) {
      var n = t.selector,
        i = this.ecModel
      V((n = !0 === n ? (t.selector = ['all', 'inverse']) : n)) &&
        R(n, function (t, e) {
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
    (pb.prototype.optionUpdated = function () {
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
    (pb.prototype._updateData = function (i) {
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
              (H(t) || gt(t)) && (t = { name: t }),
              e.get(t.name)
                ? null
                : (e.set(t.name, !0), new qc(t, this, this.ecModel))
            )
          },
          this
        )
      this._data = ct(t, function (t) {
        return !!t
      })
    }),
    (pb.prototype.getData = function () {
      return this._data
    }),
    (pb.prototype.select = function (t) {
      var e = this.option.selected
      'single' === this.get('selectedMode') &&
        R(this._data, function (t) {
          e[t.get('name')] = !1
        }),
        (e[t] = !0)
    }),
    (pb.prototype.unSelect = function (t) {
      'single' !== this.get('selectedMode') && (this.option.selected[t] = !1)
    }),
    (pb.prototype.toggleSelected = function (t) {
      var e = this.option.selected
      e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? 'unSelect' : 'select'](t)
    }),
    (pb.prototype.allSelect = function () {
      var t = this._data,
        e = this.option.selected
      R(t, function (t) {
        e[t.get('name', !0)] = !0
      })
    }),
    (pb.prototype.inverseSelect = function () {
      var t = this._data,
        e = this.option.selected
      R(t, function (t) {
        t = t.get('name', !0)
        e.hasOwnProperty(t) || (e[t] = !0), (e[t] = !e[t])
      })
    }),
    (pb.prototype.isSelected = function (t) {
      var e = this.option.selected
      return !(e.hasOwnProperty(t) && !e[t]) && 0 <= I(this._availableNames, t)
    }),
    (pb.prototype.getOrient = function () {
      return 'vertical' === this.get('orient')
        ? { index: 1, name: 'vertical' }
        : { index: 0, name: 'horizontal' }
    }),
    (pb.type = 'legend.plain'),
    (pb.dependencies = ['series']),
    (pb.defaultOption = {
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
  var hb,
    cb = pb
  function pb () {
    var t = (null !== hb && hb.apply(this, arguments)) || this
    return (
      (t.type = pb.type), (t.layoutMode = { type: 'box', ignoreSize: !0 }), t
    )
  }
  var db,
    fb = dt,
    gb = R,
    yb = io,
    mb =
      (u(vb, (db = ny)),
      (vb.prototype.init = function () {
        this.group.add((this._contentGroup = new yb())),
          this.group.add((this._selectorGroup = new yb())),
          (this._isFirstRender = !0)
      }),
      (vb.prototype.getContentGroup = function () {
        return this._contentGroup
      }),
      (vb.prototype.getSelectorGroup = function () {
        return this._selectorGroup
      }),
      (vb.prototype.render = function (t, e, n) {
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
            (o = qp(
              (e = t.getBoxLayoutParams()),
              (i = { width: n.getWidth(), height: n.getHeight() }),
              (n = t.get('padding'))
            )),
            (o = qp(
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
                (s = Rp((a = t).get('padding'))),
                ((e = a.getItemStyle(['color', 'opacity'])).fill =
                  a.get('backgroundColor')),
                new Gs({
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
      (vb.prototype.resetInner = function () {
        this.getContentGroup().removeAll(),
          this._backgroundEl && this.group.remove(this._backgroundEl),
          this.getSelectorGroup().removeAll()
      }),
      (vb.prototype.renderInner = function (s, l, u, h, t, e, n) {
        var c = this.getContentGroup(),
          p = z(),
          d = l.get('selectedMode'),
          f = []
        u.eachRawSeries(function (t) {
          t.get('legendHoverLink') || f.push(t.id)
        }),
          gb(
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
                          .on('click', fb(_b, a, null, h, f))
                          .on('mouseover', fb(wb, t.name, null, h, f))
                          .on('mouseout', fb(bb, t.name, null, h, f)),
                        p.set(a, !0))
                      : u.eachRawSeries(function (t) {
                          var e, n, i
                          !p.get(a) &&
                            t.legendVisualProvider &&
                            (n = t.legendVisualProvider).containName(a) &&
                            ((i = n.indexOfName(a)),
                            (e = n.getItemVisual(i, 'style')),
                            (n = n.getItemVisual(i, 'legendIcon')),
                            (i = yi(e.fill)) &&
                              0 === i[3] &&
                              ((i[3] = 0.2),
                              (e = O(O({}, e), { fill: wi(i, 'rgba') }))),
                            this._createItem(t, a, o, r, l, s, {}, e, n, d, h)
                              .on('click', fb(_b, null, a, h, f))
                              .on('mouseover', fb(wb, null, a, h, f))
                              .on('mouseout', fb(bb, null, a, h, f)),
                            p.set(a, !0))
                        }, this)))
                : (((e = new yb()).newline = !0), c.add(e))
            },
            this
          ),
          t && this._createSelector(t, l, h, e, n)
      }),
      (vb.prototype._createSelector = function (t, i, r, e, n) {
        var o = this.getSelectorGroup()
        gb(t, function (t) {
          var e = t.type,
            n = new js({
              style: { x: 0, y: 0, align: 'center', verticalAlign: 'middle' },
              onclick: function () {
                r.dispatchAction({
                  type: 'all' === e ? 'legendAllSelect' : 'legendInverseSelect'
                })
              }
            })
          o.add(n),
            Tc(
              n,
              {
                normal: i.getModel('selectorLabel'),
                emphasis: i.getModel(['emphasis', 'selectorLabel'])
              },
              { defaultText: t.title }
            ),
            Kl(n)
        })
      }),
      (vb.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u, h) {
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
                gb(n, function (t, e) {
                  'inherit' === n[e] && (n[e] = i[e])
                })
            }
            var l = e.getModel('itemStyle'),
              u = l.getItemStyle(),
              t = 0 === t.lastIndexOf('empty', 0) ? 'fill' : 'stroke',
              l = l.getShallow('decal'),
              l =
                ((u.decal = l && 'inherit' !== l ? z0(l, a) : i.decal),
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
          s = new yb(),
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
                  (v = l0(
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
              new js({
                style: Cc(
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
            new Gs({ shape: s.getBoundingRect(), invisible: !0 })),
          a = i.getModel('tooltip')
        return (
          a.get('show') &&
            vc({
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
          Kl(s),
          (s.__legendDataIndex = n),
          s
        )
      }),
      (vb.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          h,
          c = this.getContentGroup(),
          p = this.getSelectorGroup(),
          n =
            (Yp(t.get('orient'), c, t.get('itemGap'), n.width, n.height),
            c.getBoundingRect()),
          d = [-n.x, -n.y]
        return (
          p.markRedraw(),
          c.markRedraw(),
          r
            ? (Yp('horizontal', p, t.get('selectorItemGap', !0)),
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
      (vb.prototype.remove = function () {
        this.getContentGroup().removeAll(), (this._isFirstRender = !0)
      }),
      (vb.type = 'legend.plain'),
      vb)
  function vb () {
    var t = (null !== db && db.apply(this, arguments)) || this
    return (t.type = vb.type), (t.newlineDisabled = !1), t
  }
  function _b (t, e, n, i) {
    bb(t, e, n, i),
      n.dispatchAction({ type: 'legendToggleSelect', name: null != t ? t : e }),
      wb(t, e, n, i)
  }
  function xb (t) {
    for (
      var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length;
      i < r && !(e = n[i].states.emphasis);

    )
      i++
    return e && e.hoverLayer
  }
  function wb (t, e, n, i) {
    xb(n) ||
      n.dispatchAction({
        type: 'highlight',
        seriesName: t,
        name: e,
        excludeSeriesId: i
      })
  }
  function bb (t, e, n, i) {
    xb(n) ||
      n.dispatchAction({
        type: 'downplay',
        seriesName: t,
        name: e,
        excludeSeriesId: i
      })
  }
  function Sb (t) {
    var n = t.findComponents({ mainType: 'legend' })
    n &&
      n.length &&
      t.filterSeries(function (t) {
        for (var e = 0; e < n.length; e++)
          if (!n[e].isSelected(t.name)) return !1
        return !0
      })
  }
  function Mb (t, e, n) {
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
          R(n.getData(), function (t) {
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
  function Tb (t) {
    t.registerComponentModel(cb),
      t.registerComponentView(mb),
      t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, Sb),
      t.registerSubTypeDefaulter('legend', function () {
        return 'plain'
      }),
      (t = t).registerAction(
        'legendToggleSelect',
        'legendselectchanged',
        dt(Mb, 'toggleSelected')
      ),
      t.registerAction(
        'legendAllSelect',
        'legendselectall',
        dt(Mb, 'allSelect')
      ),
      t.registerAction(
        'legendInverseSelect',
        'legendinverseselect',
        dt(Mb, 'inverseSelect')
      ),
      t.registerAction('legendSelect', 'legendselected', dt(Mb, 'select')),
      t.registerAction('legendUnSelect', 'legendunselected', dt(Mb, 'unSelect'))
  }
  u(kb, (Cb = cb)),
    (kb.prototype.setScrollDataIndex = function (t) {
      this.option.scrollDataIndex = t
    }),
    (kb.prototype.init = function (t, e, n) {
      var i = Kp(t)
      Cb.prototype.init.call(this, t, e, n), Db(this, t, i)
    }),
    (kb.prototype.mergeOption = function (t, e) {
      Cb.prototype.mergeOption.call(this, t, e), Db(this, this.option, t)
    }),
    (kb.type = 'legend.scroll'),
    (kb.defaultOption = $c(cb.defaultOption, {
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
    }))
  var Cb,
    Ib = kb
  function kb () {
    var t = (null !== Cb && Cb.apply(this, arguments)) || this
    return (t.type = kb.type), t
  }
  function Db (t, e, n) {
    var i = [1, 1]
    ;(i[t.getOrient().index] = 0), Zp(e, n, { type: 'box', ignoreSize: !!i })
  }
  var Ab,
    Pb = io,
    Lb = ['width', 'height'],
    Ob = ['x', 'y'],
    Rb =
      (u(Bb, (Ab = mb)),
      (Bb.prototype.init = function () {
        Ab.prototype.init.call(this),
          this.group.add((this._containerGroup = new Pb())),
          this._containerGroup.add(this.getContentGroup()),
          this.group.add((this._controllerGroup = new Pb()))
      }),
      (Bb.prototype.resetInner = function () {
        Ab.prototype.resetInner.call(this),
          this._controllerGroup.removeAll(),
          this._containerGroup.removeClipPath(),
          (this._containerGroup.__rectSize = null)
      }),
      (Bb.prototype.renderInner = function (t, i, e, r, n, o, a) {
        var s = this,
          l =
            (Ab.prototype.renderInner.call(this, t, i, e, r, n, o, a),
            this._controllerGroup),
          t = i.get('pageIconSize', !0),
          u = V(t) ? t : [t, t],
          e = (h('pagePrev', 0), i.getModel('pageTextStyle'))
        function h (t, e) {
          var n = t + 'DataIndex',
            e = yc(
              i.get('pageIcons', !0)[i.getOrient().name][e],
              { onclick: pt(s._pageGo, s, n, i, r) },
              { x: -u[0] / 2, y: -u[1] / 2, width: u[0], height: u[1] }
            )
          ;(e.name = t), l.add(e)
        }
        l.add(
          new js({
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
      (Bb.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a = this.getSelectorGroup(),
          s = t.getOrient().index,
          l = Lb[s],
          u = Ob[s],
          h = Lb[1 - s],
          c = Ob[1 - s],
          p =
            (r && Yp('horizontal', a, t.get('selectorItemGap', !0)),
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
      (Bb.prototype._layoutContentAndController = function (
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
            (Yp(
              t.get('orient'),
              l,
              t.get('itemGap'),
              i ? n.width : null,
              i ? null : n.height
            ),
            Yp('horizontal', h, t.get('pageButtonItemGap', !0)),
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
                u.setClipPath(new Gs({ shape: e })),
                (u.__rectSize = e[r]))
              : h.eachChild(function (t) {
                  t.attr({ invisible: !0, silent: !0 })
                }),
            this._getPageInfo(t))
        return (
          null != c.pageIndex &&
            Gh(
              l,
              { x: c.contentPosition[0], y: c.contentPosition[1] },
              d ? t : null
            ),
          this._updatePageInfoView(t, c),
          f
        )
      }),
      (Bb.prototype._pageGo = function (t, e, n) {
        t = this._getPageInfo(e)[t]
        null != t &&
          n.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: t,
            legendId: e.id
          })
      }),
      (Bb.prototype._updatePageInfoView = function (n, i) {
        var r = this._controllerGroup,
          t =
            (R(['pagePrev', 'pageNext'], function (t) {
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
      (Bb.prototype._getPageInfo = function (t) {
        var e = t.get('scrollDataIndex', !0),
          n = this.getContentGroup(),
          i = this._containerGroup.__rectSize,
          t = t.getOrient().index,
          r = Lb[t],
          o = Ob[t],
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
      (Bb.prototype._findTargetItemIndex = function (n) {
        return this._showController
          ? (this.getContentGroup().eachChild(function (t, e) {
              t = t.__legendDataIndex
              null == r && null != t && (r = e), t === n && (i = e)
            }),
            null != i ? i : r)
          : 0
        var i, r
      }),
      (Bb.type = 'legend.scroll'),
      Bb)
  function Bb () {
    var t = (null !== Ab && Ab.apply(this, arguments)) || this
    return (
      (t.type = Bb.type), (t.newlineDisabled = !0), (t._currentIndex = 0), t
    )
  }
  q_(function (t) {
    q_(Tb),
      t.registerComponentModel(Ib),
      t.registerComponentView(Rb),
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
  var Nb = Yo(),
    zb = _,
    Eb = pt
  function Fb () {
    ;(this._dragging = !1), (this.animationThreshold = 15)
  }
  function Vb (t, e, n, i) {
    !(function n (i, t) {
      {
        var r
        if (L(i) && L(t))
          return (
            (r = !0),
            R(t, function (t, e) {
              r = r && n(i[e], t)
            }),
            !!r
          )
      }
      return i === t
    })(Nb(n).lastProp, i) &&
      ((Nb(n).lastProp = i), e ? Gh(n, i, t) : (n.stopAnimation(), n.attr(i)))
  }
  function Hb (t, e) {
    t[e.get(['label', 'show']) ? 'show' : 'hide']()
  }
  function Wb (t) {
    return { x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0 }
  }
  function Gb (t, e, n) {
    var i = e.get('z'),
      r = e.get('zlevel')
    t &&
      t.traverse(function (t) {
        'group' !== t.type &&
          (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n))
      })
  }
  function Ub (t, e, n, i, r) {
    var o = Xb(n.get('value'), e.axis, e.ecModel, n.get('seriesDataIndices'), {
        precision: n.get(['label', 'precision']),
        formatter: n.get(['label', 'formatter'])
      }),
      n = n.getModel('label'),
      a = Rp(n.get('padding') || 0),
      s = n.getFont(),
      l = Fr(o, s),
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
        style: Cc(n, {
          text: o,
          font: s,
          fill: n.getTextColor(),
          padding: a,
          backgroundColor: i
        }),
        z2: 10
      })
  }
  function Xb (t, e, n, i, r) {
    t = e.scale.parse(t)
    var o,
      a = e.scale.getLabel({ value: t }, { precision: r.precision }),
      r = r.formatter
    return (
      r &&
        ((o = {
          value: F_(e, { value: t }),
          axisDimension: e.dim,
          axisIndex: e.index,
          seriesData: []
        }),
        R(i, function (t) {
          var e = n.getSeriesByIndex(t.seriesIndex),
            t = t.dataIndexInside,
            e = e && e.getDataParams(t)
          e && o.seriesData.push(e)
        }),
        H(r) ? (a = r.replace('{value}', a)) : S(r) && (a = r(o))),
      a
    )
  }
  function Yb (t, e, n) {
    var i = Re()
    return (
      Fe(i, i, n.rotation),
      Ee(i, i, n.position),
      cc(
        [
          t.dataToCoord(e),
          (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)
        ],
        i
      )
    )
  }
  ;(Fb.prototype.render = function (t, e, n, i) {
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
              ? ((o = dt(Vb, e, o)),
                this.updatePointerEl(i, s, o),
                this.updateLabelEl(i, s, o, e))
              : ((i = this._group = new io()),
                this.createPointerEl(i, s, t, e),
                this.createLabelEl(i, s, t, e),
                n.getZr().add(i)),
            Gb(i, e, !0),
            this._renderHandle(a))
          : (i && i.hide(), r && r.hide()))
  }),
    (Fb.prototype.remove = function (t) {
      this.clear(t)
    }),
    (Fb.prototype.dispose = function (t) {
      this.clear(t)
    }),
    (Fb.prototype.determineAnimation = function (t, e) {
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
                ((o = Bw(t).seriesDataCount),
                (e = r.getExtent()),
                Math.abs(e[0] - e[1]) / o > n)))
          : !0 === i)
      )
    }),
    (Fb.prototype.makeElOption = function (t, e, n, i, r) {}),
    (Fb.prototype.createPointerEl = function (t, e, n, i) {
      var r = e.pointer
      r && ((r = Nb(t).pointerEl = new wc[r.type](zb(e.pointer))), t.add(r))
    }),
    (Fb.prototype.createLabelEl = function (t, e, n, i) {
      e.label && ((e = Nb(t).labelEl = new js(zb(e.label))), t.add(e), Hb(e, i))
    }),
    (Fb.prototype.updatePointerEl = function (t, e, n) {
      t = Nb(t).pointerEl
      t &&
        e.pointer &&
        (t.setStyle(e.pointer.style), n(t, { shape: e.pointer.shape }))
    }),
    (Fb.prototype.updateLabelEl = function (t, e, n, i) {
      t = Nb(t).labelEl
      t &&
        (t.setStyle(e.label.style),
        n(t, { x: e.label.x, y: e.label.y }),
        Hb(t, i))
    }),
    (Fb.prototype._renderHandle = function (t) {
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
                yc(o.get('icon'), {
                  cursor: 'move',
                  draggable: !0,
                  onmousemove: function (t) {
                    De(t.event)
                  },
                  onmousedown: Eb(this._onHandleDragMove, this, 0, 0),
                  drift: Eb(this._onHandleDragMove, this),
                  ondragend: Eb(this._onHandleDragEnd, this)
                })),
              i.add(r)),
            Gb(r, n, !1),
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
            vy(
              this,
              '_doDispatchAxisPointer',
              o.get('throttle') || 0,
              'fixRate'
            ),
            this._moveHandleToValue(t, e))
          : (r && i.remove(r), (this._handle = null)))
    }),
    (Fb.prototype._moveHandleToValue = function (t, e) {
      Vb(
        this._axisPointerModel,
        !e && this._moveAnimation,
        this._handle,
        Wb(this.getHandleTransform(t, this._axisModel, this._axisPointerModel))
      )
    }),
    (Fb.prototype._onHandleDragMove = function (t, e) {
      var n = this._handle
      n &&
        ((this._dragging = !0),
        (t = this.updateHandleTransform(
          Wb(n),
          [t, e],
          this._axisModel,
          this._axisPointerModel
        )),
        (this._payloadInfo = t),
        n.stopAnimation(),
        n.attr(Wb(t)),
        (Nb(n).lastProp = null),
        this._doDispatchAxisPointer())
    }),
    (Fb.prototype._doDispatchAxisPointer = function () {
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
    (Fb.prototype._onHandleDragEnd = function () {
      var t
      ;(this._dragging = !1),
        this._handle &&
          ((t = this._axisPointerModel.get('value')),
          this._moveHandleToValue(t),
          this._api.dispatchAction({ type: 'hideTip' }))
    }),
    (Fb.prototype.clear = function (t) {
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
        _y(this, '_doDispatchAxisPointer')
    }),
    (Fb.prototype.doClear = function () {}),
    (Fb.prototype.buildLabel = function (t, e, n) {
      return { x: t[(n = n || 0)], y: t[1 - n], width: e[n], height: e[1 - n] }
    })
  u(Zb, (qb = Fb)),
    (Zb.prototype.makeElOption = function (t, e, n, i, r) {
      var o,
        a,
        s = n.axis,
        l = s.grid,
        u = i.get('type'),
        h = Kb(l, s).getOtherAxis(s).getGlobalExtent(),
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
            ((a = $b[u](s, c, h)).style = o),
            (t.graphicKey = a.type),
            (t.pointer = a)),
          yw(l.model, n))
      ;(u = e),
        (s = t),
        (c = p),
        (h = n),
        (o = i),
        (a = r),
        (l = Cw.innerTextLayout(c.rotation, 0, c.labelDirection)),
        (c.labelMargin = o.get(['label', 'margin'])),
        Ub(s, h, o, a, {
          position: Yb(h.axis, u, c),
          align: l.textAlign,
          verticalAlign: l.textVerticalAlign
        })
    }),
    (Zb.prototype.getHandleTransform = function (t, e, n) {
      var i = yw(e.axis.grid.model, e, { labelInside: !1 }),
        n = ((i.labelMargin = n.get(['handle', 'margin'])), Yb(e.axis, t, i))
      return {
        x: n[0],
        y: n[1],
        rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
      }
    }),
    (Zb.prototype.updateHandleTransform = function (t, e, n, i) {
      var n = n.axis,
        r = n.grid,
        o = n.getGlobalExtent(!0),
        r = Kb(r, n).getOtherAxis(n).getGlobalExtent(),
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
  var qb,
    jb = Zb
  function Zb () {
    return (null !== qb && qb.apply(this, arguments)) || this
  }
  function Kb (t, e) {
    var n = {}
    return (n[e.dim + 'AxisIndex'] = e.index), t.getCartesian(n)
  }
  var $b = {
    line: function (t, e, n) {
      return {
        type: 'Line',
        subPixelOptimize: !0,
        shape:
          ((i = [e, n[0]]),
          (e = [e, n[1]]),
          (n = Qb(t)),
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
          (i = Qb(t)),
          { x: e[(i = i || 0)], y: e[1 - i], width: n[i], height: n[1 - i] })
      }
    }
  }
  function Qb (t) {
    return 'x' === t.dim ? 0 : 1
  }
  u(eS, (Jb = g)),
    (eS.type = 'axisPointer'),
    (eS.defaultOption = {
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
  var Jb,
    tS = eS
  function eS () {
    var t = (null !== Jb && Jb.apply(this, arguments)) || this
    return (t.type = eS.type), t
  }
  var nS = Yo(),
    iS = R
  function rS (t, e, n) {
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
        iS(nS(c).records, function (t) {
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
      nS(i).records || (nS(i).records = {}),
      (p = e),
      nS((c = i)).initialized ||
        ((nS(c).initialized = !0),
        r('click', dt(aS, 'click')),
        r('mousemove', dt(aS, 'mousemove')),
        r('globalout', oS)),
      ((nS(i).records[t] || (nS(i).records[t] = {})).handler = n))
  }
  function oS (t, e, n) {
    t.handler('leave', null, n)
  }
  function aS (t, e, n, i) {
    e.handler(t, n, i)
  }
  function sS (t, e) {
    b.node ||
      ((e = e.getZr()), (nS(e).records || {})[t] && (nS(e).records[t] = null))
  }
  u(hS, (lS = ny)),
    (hS.prototype.render = function (t, e, n) {
      var e = e.getComponent('tooltip'),
        i = t.get('triggerOn') || (e && e.get('triggerOn')) || 'mousemove|click'
      rS('axisPointer', n, function (t, e, n) {
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
    (hS.prototype.remove = function (t, e) {
      sS('axisPointer', e)
    }),
    (hS.prototype.dispose = function (t, e) {
      sS('axisPointer', e)
    }),
    (hS.type = 'axisPointer')
  var lS,
    uS = hS
  function hS () {
    var t = (null !== lS && lS.apply(this, arguments)) || this
    return (t.type = hS.type), t
  }
  function cS (t, e) {
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
  var pS = Yo()
  function dS (t, e, n) {
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
        vS(v) &&
          (v = cS(
            { seriesIndex: _.seriesIndex, dataIndex: _.dataIndex },
            e
          ).point),
        (o = vS(v)),
        (a = _.axesInfo),
        (i = w.axesInfo),
        (s = 'leave' === m || vS(v)),
        (l = {}),
        (e = { list: [], map: {} }),
        (u = { showPointer: dt(gS, (r = {})), showTooltip: dt(yS, e) }),
        R(w.coordSysMap, function (t, e) {
          var r = o || t.containPoint(v)
          R(w.coordSysAxesInfo[e], function (t, e) {
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
                fS(t, i, u, !1, l))
          })
        }),
        (h = {}),
        R(i, function (n, t) {
          var i = n.linkGroup
          i &&
            !r[t] &&
            R(i.axesInfo, function (t, e) {
              var e = r[e]
              t !== n &&
                e &&
                ((e = e.value),
                i.mapper && (e = n.axis.scale.parse(i.mapper(e, mS(t), mS(n)))),
                (h[n.key] = e))
            })
        }),
        R(h, function (t, e) {
          fS(i[e], t, u, !0, l)
        }),
        (g = r),
        (_ = i),
        (y = l.axesInfo = []),
        R(_, function (t, e) {
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
        !vS((t = v)) && m.list.length
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
        (c = pS(x)[m] || {}),
        (p = pS(x)[m] = {}),
        R(t, function (t, e) {
          var n = t.axisPointerModel.option
          'show' === n.status &&
            t.triggerEmphasis &&
            R(n.seriesDataIndices, function (t) {
              var e = t.seriesIndex + ' | ' + t.dataIndex
              p[e] = t
            })
        }),
        (d = []),
        (f = []),
        R(c, function (t, e) {
          p[e] || f.push(t)
        }),
        R(p, function (t, e) {
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
  function fS (t, e, n, i, r) {
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
          R(t.seriesModels, function (e, t) {
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
              R(o, function (t) {
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
  function gS (t, e, n, i) {
    t[e.key] = { value: n, payloadBatch: i }
  }
  function yS (t, e, n, i) {
    var r,
      o,
      n = n.payloadBatch,
      a = e.axis,
      s = a.model,
      l = e.axisPointerModel
    e.triggerTooltip &&
      n.length &&
      ((r = zw((e = e.coordSys.model))),
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
  function mS (t) {
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
  function vS (t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
  }
  function _S (t) {
    Vw.registerAxisPointerClass('CartesianAxisPointer', jb),
      t.registerComponentModel(tS),
      t.registerComponentView(uS),
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
        t.getComponent('axisPointer').coordSysAxesInfo = Ow(t, e)
      }),
      t.registerAction(
        {
          type: 'updateAxisPointer',
          event: 'updateAxisPointer',
          update: ':updateAxisPointer'
        },
        dS
      )
  }
  u(bS, (xS = g)),
    (bS.type = 'tooltip'),
    (bS.dependencies = ['axisPointer']),
    (bS.defaultOption = {
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
  var xS,
    wS = bS
  function bS () {
    var t = (null !== xS && xS.apply(this, arguments)) || this
    return (t.type = bS.type), t
  }
  function SS (t) {
    var e = t.get('confine')
    return null != e ? e : 'richText' === t.get('renderMode')
  }
  function MS (t) {
    if (b.domSupported)
      for (
        var e = document.documentElement.style, n = 0, i = t.length;
        n < i;
        n++
      )
        if (t[n] in e) return t[n]
  }
  var TS = MS([
    'transform',
    'webkitTransform',
    'OTransform',
    'MozTransform',
    'msTransform'
  ])
  function CS (t, e) {
    if (!t) return e
    e = Op(e, !0)
    var n = t.indexOf(e)
    return (t = -1 === n ? e : '-' + t.slice(0, n) + '-' + e).toLowerCase()
  }
  var IS = CS(
      MS([
        'webkitTransition',
        'transition',
        'OTransition',
        'MozTransition',
        'msTransition'
      ]),
      'transition'
    ),
    kS = CS(TS, 'transform'),
    DS =
      'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;' +
      (b.transform3dSupported ? 'will-change:transform;' : '')
  function AS (t, e, n) {
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
          ? 'top:0;left:0;' + kS + ':' + i + ';'
          : [
              ['top', 0],
              ['left', 0],
              [TS, i]
            ])
      : n
      ? 'top:' + e + ';left:' + t + ';'
      : [
          ['top', e],
          ['left', t]
        ]
  }
  function PS (i, t, e) {
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
      d = Hg(i, 'html')
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
              ? ',' + kS + l
              : ',left' + l + ',top' + l)),
          IS + ':' + u)
        ),
      s && o.push('background-color:' + s),
      R(['width', 'color', 'radius'], function (t) {
        var e = 'border-' + t,
          n = Op(e),
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
        R(['decoration', 'align'], function (t) {
          var e = n.get(t)
          e && r.push('text-' + t + ':' + e)
        }),
        r.join(';'))
      ),
      null != d && o.push('padding:' + Rp(d).join('px ') + 'px'),
      o.join(';') + ';'
    )
  }
  function LS (t, e, n, i, r) {
    var o,
      a,
      s = e && e.painter
    n
      ? (n = s && s.getViewportRoot()) &&
        ((o = t), (a = document.body), me(ye, n, i, r, !0)) &&
        me(o, a, ye[0], ye[1])
      : ((t[0] = i),
        (t[1] = r),
        (n = s && s.getViewportRootOffset()) &&
          ((t[0] += n.offsetLeft), (t[1] += n.offsetTop))),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight())
  }
  ;(RS.prototype.update = function (t) {
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
    (RS.prototype.show = function (t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout)
      var n = this.el,
        i = n.style,
        r = this._styleCoord
      n.innerHTML
        ? (i.cssText =
            DS +
            PS(t, !this._firstShow, this._longHide) +
            AS(r[0], r[1], !0) +
            'border-color:' +
            Vp(e) +
            ';' +
            (t.get('extraCssText') || '') +
            ';pointer-events:' +
            (this._enterable ? 'auto' : 'none'))
        : (i.display = 'none'),
        (this._show = !0),
        (this._firstShow = !1),
        (this._longHide = !1)
    }),
    (RS.prototype.setContent = function (t, e, n, i, r) {
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
            !SS(n) &&
            ((n = n),
            (i = i),
            (c =
              H((r = r)) && 'inside' !== r
                ? ((o = n.get('backgroundColor')),
                  (n = n.get('borderWidth')),
                  (i = Vp(i)),
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
                  (s = kS + ':'),
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
            vt(t[d]) && t[d].parentNode !== h && h.appendChild(t[d])
          c &&
            h.childNodes.length &&
            (((p = document.createElement('div')).innerHTML = c),
            h.appendChild(p))
        }
      } else h.innerHTML = ''
    }),
    (RS.prototype.setEnterable = function (t) {
      this._enterable = t
    }),
    (RS.prototype.getSize = function () {
      var t = this.el
      return [t.offsetWidth, t.offsetHeight]
    }),
    (RS.prototype.moveTo = function (t, e) {
      var n,
        i = this._styleCoord
      LS(i, this._zr, this._appendToBody, t, e),
        null != i[0] &&
          null != i[1] &&
          ((n = this.el.style),
          R(AS(i[0], i[1]), function (t) {
            n[t[0]] = t[1]
          }))
    }),
    (RS.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3]
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
    }),
    (RS.prototype.hide = function () {
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
    (RS.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(pt(this.hide, this), t)))
          : this.hide())
    }),
    (RS.prototype.isShow = function () {
      return this._show
    }),
    (RS.prototype.dispose = function () {
      this.el.parentNode.removeChild(this.el)
    })
  var OS = RS
  function RS (t, e, n) {
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
        (LS(this._styleCoord, r, n, e.getWidth() / 2, e.getHeight() / 2),
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
            ke(r.painter.getViewportRoot(), t, !0),
            e.dispatch('mousemove', t))
      }),
      (i.onmouseleave = function () {
        ;(o._inContent = !1),
          o._enterable && o._show && o.hideLater(o._hideDelay)
      })
  }
  ;(NS.prototype.update = function (t) {
    t = t.get('alwaysShowContent')
    t && this._moveIfResized(), (this._alwaysShowContent = t)
  }),
    (NS.prototype.show = function () {
      this._hideTimeout && clearTimeout(this._hideTimeout),
        this.el.show(),
        (this._show = !0)
    }),
    (NS.prototype.setContent = function (t, e, n, i, r) {
      var o = this,
        a =
          (L(t) && f(''),
          this.el && this._zr.remove(this.el),
          n.getModel('textStyle')),
        s =
          ((this.el = new js({
            style: {
              rich: e.richTextStyles,
              text: t,
              lineHeight: 22,
              borderWidth: 1,
              borderColor: i,
              textShadowColor: a.get('textShadowColor'),
              fill: n.get(['textStyle', 'color']),
              padding: Hg(n, 'richText'),
              verticalAlign: 'top',
              align: 'left'
            },
            z: n.get('z')
          })),
          R(
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
          R(
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
    (NS.prototype.setEnterable = function (t) {
      this._enterable = t
    }),
    (NS.prototype.getSize = function () {
      var t = this.el,
        e = this.el.getBoundingRect(),
        t = ES(t.style)
      return [e.width + t.left + t.right, e.height + t.top + t.bottom]
    }),
    (NS.prototype.moveTo = function (t, e) {
      var n,
        i,
        r = this.el
      r &&
        (FS((i = this._styleCoord), this._zr, t, e),
        (t = i[0]),
        (e = i[1]),
        (n = zS((i = r.style).borderWidth || 0)),
        (i = ES(i)),
        (r.x = t + n + i.left),
        (r.y = e + n + i.top),
        r.markRedraw())
    }),
    (NS.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3]
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
    }),
    (NS.prototype.hide = function () {
      this.el && this.el.hide(), (this._show = !1)
    }),
    (NS.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(pt(this.hide, this), t)))
          : this.hide())
    }),
    (NS.prototype.isShow = function () {
      return this._show
    }),
    (NS.prototype.dispose = function () {
      this._zr.remove(this.el)
    })
  var BS = NS
  function NS (t) {
    ;(this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._alwaysShowContent = !1),
      (this._enterable = !0),
      (this._zr = t.getZr()),
      FS(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2)
  }
  function zS (t) {
    return Math.max(0, t)
  }
  function ES (t) {
    var e = zS(t.shadowBlur || 0),
      n = zS(t.shadowOffsetX || 0),
      t = zS(t.shadowOffsetY || 0)
    return {
      left: zS(e - n),
      right: zS(e + n),
      top: zS(e - t),
      bottom: zS(e + t)
    }
  }
  function FS (t, e, n, i) {
    ;(t[0] = n),
      (t[1] = i),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight())
  }
  var VS,
    HS = new Gs({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
    WS =
      (u(GS, (VS = ny)),
      (GS.prototype.init = function (t, e) {
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
              ? new BS(e)
              : new OS(e.getDom(), e, {
                  appendToBody: t.get('appendToBody', !0)
                })))
      }),
      (GS.prototype.render = function (t, e, n) {
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
            ? vy(this, '_updatePosition', 50, 'fixRate')
            : _y(this, '_updatePosition'))
      }),
      (GS.prototype._initGlobalListener = function () {
        var i = this._tooltipModel.get('triggerOn')
        rS(
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
      (GS.prototype._keepShow = function () {
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
      (GS.prototype.manuallyShowTip = function (t, e, n, i) {
        var r, o, a, s
        i.from !== this.uid &&
          !b.node &&
          n.getDom() &&
          ((r = XS(i, n)),
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
                    var e = T(t).tooltipConfig
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
            ? (((a = HS).x = i.x),
              (a.y = i.y),
              a.update(),
              (T(a).tooltipConfig = { name: null, option: i.tooltip }),
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
              ((a = (o = cS(i, e)).point[0]),
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
      (GS.prototype.manuallyHideTip = function (t, e, n, i) {
        var r = this._tooltipContent
        this._tooltipModel && r.hideLater(this._tooltipModel.get('hideDelay')),
          (this._lastX = this._lastY = this._lastDataByCoordSys = null),
          i.from !== this.uid && this._hide(XS(i, n))
      }),
      (GS.prototype._manuallyAxisShowTip = function (t, e, n, i) {
        var r = i.seriesIndex,
          o = i.dataIndex,
          a = e.getComponent('axisPointer').coordSysAxesInfo
        if (null != r && null != o && null != a) {
          a = e.getSeriesByIndex(r)
          if (
            a &&
            'axis' ===
              US(
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
      (GS.prototype._tryShow = function (t, e) {
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
            ? (Zy(
                o,
                function (t) {
                  return null != T(t).dataIndex
                    ? ((i = t), 1)
                    : null != T(t).tooltipConfig && ((r = t), 1)
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
      (GS.prototype._showOrMove = function (t, e) {
        t = t.get('showDelay')
        ;(e = pt(e, this)),
          clearTimeout(this._showTimout),
          0 < t ? (this._showTimout = setTimeout(e, t)) : e()
      }),
      (GS.prototype._showAxisTooltip = function (t, e) {
        var u = this._ecModel,
          h = this._tooltipModel,
          n = [e.offsetX, e.offsetY],
          i = US([e.tooltipOption], h),
          c = this._renderMode,
          p = [],
          d = Og('section', { blocks: [], noHeader: !0 }),
          f = [],
          g = new Wg(),
          r =
            (R(t, function (t) {
              R(t.dataByAxis, function (r) {
                var o,
                  a,
                  s = u.getComponent(r.axisDim + 'Axis', r.axisIndex),
                  l = r.value
                s &&
                  null != l &&
                  ((o = Xb(l, s.axis, u, r.seriesDataIndices, r.valueLabelOpt)),
                  (a = Og('section', {
                    header: o,
                    noHeader: !kt(o),
                    sortBlocks: !0,
                    blocks: []
                  })),
                  d.blocks.push(a),
                  R(r.seriesDataIndices, function (t) {
                    var e,
                      n = u.getSeriesByIndex(t.seriesIndex),
                      t = t.dataIndexInside,
                      i = n.getDataParams(t)
                    i.dataIndex < 0 ||
                      ((i.axisDim = r.axisDim),
                      (i.axisIndex = r.axisIndex),
                      (i.axisType = r.axisType),
                      (i.axisId = r.axisId),
                      (i.axisValue = F_(s.axis, { value: l })),
                      (i.axisValueLabel = o),
                      (i.marker = g.makeTooltipMarker('item', Vp(i.color), c)),
                      (e = (t = Nf(n.formatTooltip(t, !0, null))).frag) &&
                        ((n = US([n], h).get('valueFormatter')),
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
          e = Eg(d, g, c, e, u.get('useUTC'), i.get('textStyle')),
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
      (GS.prototype._showSeriesItemTooltip = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = this._ecModel,
          e = T(e),
          u = e.seriesIndex,
          h = l.getSeriesByIndex(u),
          c = e.dataModel || h,
          p = e.dataIndex,
          e = e.dataType,
          d = c.getData(e),
          f = this._renderMode,
          g = t.positionDefault,
          y = US(
            [d.getItemModel(p), c, h && (h.coordinateSystem || {}).model],
            this._tooltipModel,
            g ? { position: g } : null
          ),
          h = y.get('trigger')
        ;(null != h && 'item' !== h) ||
          ((i = c.getDataParams(p, e)),
          (r = new Wg()),
          (i.marker = r.makeTooltipMarker('item', Vp(i.color), f)),
          (g = Nf(c.formatTooltip(p, !1, e))),
          (h = y.get('order')),
          (e = y.get('valueFormatter')),
          (o = g.frag),
          (a = o
            ? Eg(
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
      (GS.prototype._showComponentItemTooltip = function (e, n, t) {
        var i = T(n),
          r = i.tooltipConfig.option || {},
          o = [(r = H(r) ? { content: r, formatter: r } : r)],
          i = this._ecModel.getComponent(i.componentMainType, i.componentIndex),
          i =
            (i && o.push(i),
            o.push({ formatter: r.content }),
            e.positionDefault),
          a = US(o, this._tooltipModel, i ? { position: i } : null),
          s = a.get('content'),
          l = Math.random() + '',
          u = new Wg()
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
      (GS.prototype._showTooltipContent = function (n, t, i, e, r, o, a, s, l) {
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
                  Ep(
                    (t =
                      (d = V(i) ? i[0] : i) &&
                      d.axisType &&
                      0 <= d.axisType.indexOf('time')
                        ? yp(d.axisValue, t, p)
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
      (GS.prototype._getNearestPoint = function (t, e, n, i) {
        return 'axis' === n || V(e)
          ? { color: i || ('html' === this._renderMode ? '#fff' : 'none') }
          : V(e)
          ? void 0
          : { color: i || e.color || e.borderColor }
      }),
      (GS.prototype._updatePosition = function (t, e, n, i, r, o, a) {
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
            ? ((n = go(e[0], c)), (i = go(e[1], p)))
            : L(e)
            ? (((o = e).width = d[0]),
              (o.height = d[1]),
              (n = (o = qp(o, { width: c, height: p })).x),
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
          f && (n -= YS(f) ? d[0] / 2 : 'right' === f ? d[0] : 0),
          g && (i -= YS(g) ? d[1] / 2 : 'bottom' === g ? d[1] : 0),
          SS(t) &&
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
      (GS.prototype._updateContentNotChangedOnAxis = function (n, o) {
        var t = this._lastDataByCoordSys,
          a = this._cbParamsList,
          s = !!t && t.length === n.length
        return (
          s &&
            R(t, function (t, e) {
              var t = t.dataByAxis || [],
                r = (n[e] || {}).dataByAxis || []
              ;(s = s && t.length === r.length) &&
                R(t, function (t, e) {
                  var e = r[e] || {},
                    n = t.seriesDataIndices || [],
                    i = e.seriesDataIndices || []
                  ;(s =
                    s &&
                    t.value === e.value &&
                    t.axisType === e.axisType &&
                    t.axisId === e.axisId &&
                    n.length === i.length) &&
                    R(n, function (t, e) {
                      e = i[e]
                      s =
                        s &&
                        t.seriesIndex === e.seriesIndex &&
                        t.dataIndex === e.dataIndex
                    }),
                    a &&
                      R(t.seriesDataIndices, function (t) {
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
      (GS.prototype._hide = function (t) {
        ;(this._lastDataByCoordSys = null),
          t({ type: 'hideTip', from: this.uid })
      }),
      (GS.prototype.dispose = function (t, e) {
        !b.node &&
          e.getDom() &&
          (_y(this, '_updatePosition'),
          this._tooltipContent.dispose(),
          sS('itemTooltip', e))
      }),
      (GS.type = 'tooltip'),
      GS)
  function GS () {
    var t = (null !== VS && VS.apply(this, arguments)) || this
    return (t.type = GS.type), t
  }
  function US (t, e, n) {
    for (
      var i = e.ecModel,
        r = n ? ((r = new qc(n, i, i)), new qc(e.option, r, i)) : e,
        o = t.length - 1;
      0 <= o;
      o--
    ) {
      var a = t[o]
      a &&
        (a = H((a = a instanceof qc ? a.get('tooltip', !0) : a))
          ? { formatter: a }
          : a) &&
        (r = new qc(a, r, i))
    }
    return r
  }
  function XS (t, e) {
    return t.dispatchAction || pt(e.dispatchAction, e)
  }
  function YS (t) {
    return 'center' === t || 'middle' === t
  }
  q_(function (t) {
    q_(_S),
      t.registerComponentModel(wS),
      t.registerComponentView(WS),
      t.registerAction(
        {
          type: 'showTip',
          event: 'showTip',
          update: 'tooltip:manuallyShowTip'
        },
        Ht
      ),
      t.registerAction(
        {
          type: 'hideTip',
          event: 'hideTip',
          update: 'tooltip:manuallyHideTip'
        },
        Ht
      )
  }),
    q_(px)
  var qS = {
      value: 'eq',
      '<': 'lt',
      '<=': 'lte',
      '>': 'gt',
      '>=': 'gte',
      '=': 'eq',
      '!=': 'ne',
      '<>': 'ne'
    },
    jS =
      ((oM.prototype.evaluate = function (t) {
        var e = typeof t
        return H(e)
          ? this._condVal.test(t)
          : !!gt(e) && this._condVal.test(t + '')
      }),
      oM),
    ZS =
      ((rM.prototype.evaluate = function () {
        return this.value
      }),
      rM),
    KS =
      ((iM.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (!t[e].evaluate()) return !1
        return !0
      }),
      iM),
    $S =
      ((nM.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (t[e].evaluate()) return !0
        return !1
      }),
      nM),
    QS =
      ((eM.prototype.evaluate = function () {
        return !this.child.evaluate()
      }),
      eM),
    JS =
      ((tM.prototype.evaluate = function () {
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
      tM)
  function tM () {}
  function eM () {}
  function nM () {}
  function iM () {}
  function rM () {}
  function oM (t) {
    null == (this._condVal = H(t) ? new RegExp(t) : wt(t) ? t : null) && f('')
  }
  function aM (t, e) {
    var n
    if (!0 === t || !1 === t) return ((n = new ZS()).value = t), n
    {
      if ((lM(t) || f(''), t.and)) return sM('and', t, e)
      if (t.or) return sM('or', t, e)
      if (t.not)
        (n = e),
          lM((o = (o = t).not)) || f(''),
          ((l = new QS()).child = aM(o, n)),
          l.child || f('')
      else {
        for (
          var i = t,
            r = e,
            o = r.prepareGetValue(i),
            a = [],
            s = B(i),
            l = i.parser,
            u = l ? $f(l) : null,
            h = 0;
          h < s.length;
          h++
        ) {
          var c,
            p = s[h]
          'parser' === p ||
            r.valueGetterAttrMap.get(p) ||
            ((c = Vt(qS, p) ? qS[p] : p),
            (p = i[p]),
            (p = u ? u(p) : p),
            (c =
              (function (t, e) {
                return 'eq' === t || 'ne' === t
                  ? new ig('eq' === t, e)
                  : Vt(Qf, t)
                  ? new Jf(t, e)
                  : null
              })(c, p) ||
              ('reg' === c && new jS(p))) || f(''),
            a.push(c))
        }
        a.length || f(''),
          ((l = new JS()).valueGetterParam = o),
          (l.valueParser = u),
          (l.getValue = r.getValue),
          (l.subCondList = a)
      }
      return l
    }
  }
  function sM (t, e, n) {
    ;(e = e[t]),
      V(e) || f(''),
      e.length || f(''),
      (t = new ('and' === t ? KS : $S)())
    return (
      (t.children = F(e, function (t) {
        return aM(t, n)
      })),
      t.children.length || f(''),
      t
    )
  }
  function lM (t) {
    return L(t) && !ut(t)
  }
  hM.prototype.evaluate = function () {
    return this._cond.evaluate()
  }
  var uM = hM
  function hM (t, e) {
    this._cond = aM(t, e)
  }
  var cM = {
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
                    t = (Vt(t, 'dimension') || f(''), i.getDimensionInfo(e))
                  return t || f(''), { dimIdx: t.index }
                },
                getValue: function (t) {
                  return i.retrieveValueFromItem(e, t.dimIdx)
                }
              }),
              new uM(t, n)),
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
    pM = {
      type: 'echarts:sort',
      transform: function (t) {
        var a = t.upstream,
          t = t.config,
          t = Ro(t),
          s = (t.length || f(''), []),
          t =
            (R(t, function (t) {
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
                r = (e || f(''), i ? $f(i) : null)
              i && !r && f(''),
                s.push({ dimIdx: e.index, parser: r, comparator: new tg(n, t) })
            }),
            a.sourceFormat)
        t !== sd && t !== ld && f('')
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
  q_(function (t) {
    t.registerTransform(cM), t.registerTransform(pM)
  })
  var dM = Math.sin,
    fM = Math.cos,
    gM = Math.PI,
    yM = 2 * Math.PI,
    mM = 180 / gM,
    vM =
      ((_M.prototype.reset = function (t) {
        ;(this._start = !0),
          (this._d = []),
          (this._str = ''),
          (this._p = Math.pow(10, t || 4))
      }),
      (_M.prototype.moveTo = function (t, e) {
        this._add('M', t, e)
      }),
      (_M.prototype.lineTo = function (t, e) {
        this._add('L', t, e)
      }),
      (_M.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
        this._add('C', t, e, n, i, r, o)
      }),
      (_M.prototype.quadraticCurveTo = function (t, e, n, i) {
        this._add('Q', t, e, n, i)
      }),
      (_M.prototype.arc = function (t, e, n, i, r, o) {
        this.ellipse(t, e, n, n, 0, i, r, o)
      }),
      (_M.prototype.ellipse = function (t, e, n, i, r, o, a, s) {
        var l,
          u = a - o,
          s = !s,
          h = Math.abs(u),
          c = Ci(h - yM) || (s ? yM <= u : yM <= -u),
          h = !!c || (!Ci(h) && gM <= (0 < u ? u % yM : (u % yM) + yM) == !!s),
          u = t + n * fM(o),
          p = e + i * dM(o),
          r = (this._start && this._add('M', u, p), Math.round(r * mM))
        c
          ? ((c = 1 / this._p),
            this._add(
              'A',
              n,
              i,
              r,
              1,
              +s,
              t + n * fM(o + (l = (s ? 1 : -1) * (yM - c))),
              e + i * dM(o + l)
            ),
            0.01 < c && this._add('A', n, i, r, 0, +s, u, p))
          : ((o = t + n * fM(a)),
            (l = e + i * dM(a)),
            this._add('A', n, i, r, +h, +s, o, l))
      }),
      (_M.prototype.rect = function (t, e, n, i) {
        this._add('M', t, e),
          this._add('l', n, 0),
          this._add('l', 0, i),
          this._add('l', -n, 0),
          this._add('Z')
      }),
      (_M.prototype.closePath = function () {
        0 < this._d.length && this._add('Z')
      }),
      (_M.prototype._add = function (t, e, n, i, r, o, a, s, l) {
        for (var u = [], h = this._p, c = 1; c < arguments.length; c++) {
          var p = arguments[c]
          if (isNaN(p)) return void (this._invalid = !0)
          u.push(Math.round(p * h) / h)
        }
        this._d.push(t + u.join(' ')), (this._start = 'Z' === t)
      }),
      (_M.prototype.generateStr = function () {
        ;(this._str = this._invalid ? '' : this._d.join('')), (this._d = [])
      }),
      (_M.prototype.getStr = function () {
        return this._str
      }),
      _M)
  function _M () {}
  var xM = 'none',
    wM = Math.round
  var bM = ['lineCap', 'miterLimit', 'lineJoin'],
    SM = F(bM, function (t) {
      return 'stroke-' + t.toLowerCase()
    })
  function MM (t, e, n, i) {
    var r = null == e.opacity ? 1 : e.opacity
    if (n instanceof Rs) t('opacity', r)
    else if (
      (null != (o = (o = e).fill) && o !== xM
        ? (t('fill', (o = Ti(e.fill)).color),
          (o =
            null != e.fillOpacity
              ? e.fillOpacity * o.opacity * r
              : o.opacity * r),
          (i || o < 1) && t('fill-opacity', o))
        : t('fill', xM),
      null != (o = (o = e).stroke) && o !== xM)
    ) {
      var o = Ti(e.stroke),
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
          ? ((r = (a = d0(n))[0]),
            (o = a[1]),
            r &&
              ((o = wM(o || 0)), t('stroke-dasharray', r.join(',')), o || i) &&
              t('stroke-dashoffset', o))
          : i && t('stroke-dasharray', xM)
      for (var s = 0; s < bM.length; s++) {
        var l = bM[s]
        ;(i || e[l] !== Ms[l]) && (l = e[l] || Ms[l]) && t(SM[s], l)
      }
    } else i && t('stroke', xM)
  }
  var TM = 'http://www.w3.org/2000/svg',
    CM = 'http://www.w3.org/1999/xlink',
    IM = 'http://www.w3.org/2000/xmlns/',
    kM = 'http://www.w3.org/XML/1998/namespace'
  function DM (t) {
    return document.createElementNS(TM, t)
  }
  function AM (t, e, n, i, r) {
    return { tag: t, attrs: n || {}, children: i, text: r, key: e }
  }
  function PM (t, e) {
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
        ('style' !== i ? we(e) : e || '') +
        (n ? o + F(n, t).join(o) + o : '') +
        '</' +
        i +
        '>'
      )
    })(t)
  }
  function LM (t) {
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
  function OM (t, e, n, i) {
    return AM(
      'svg',
      'root',
      {
        width: t,
        height: e,
        xmlns: TM,
        'xmlns:xlink': CM,
        version: '1.1',
        baseProfile: 'full',
        viewBox: !!i && '0 0 ' + t + ' ' + e
      },
      n
    )
  }
  var RM = {
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
    BM = 'transform-origin'
  var NM = {
    fill: 'fill',
    opacity: 'opacity',
    lineWidth: 'stroke-width',
    lineDashOffset: 'stroke-dashoffset'
  }
  function zM (t, e) {
    var n = e.zrId + '-ani-' + e.cssAnimIdx++
    return (e.cssAnims[n] = t), n
  }
  function EM (t) {
    return H(t) ? (RM[t] ? 'cubic-bezier(' + RM[t] + ')' : Kn(t) ? t : '') : ''
  }
  function FM (D, A, P, L) {
    var t = D.animators,
      e = t.length,
      n = []
    if (D instanceof Sh) {
      if (
        (r = (function (t, e, u) {
          var h,
            c,
            t = t.shape.paths,
            p = {}
          if (
            (R(t, function (t) {
              var e = LM(u.zrId),
                t = ((e.animation = !0), FM(t, {}, e, !0), e.cssAnims),
                n = e.cssNodes,
                e = B(t),
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
            return (e.d = !1), (t = zM(p, u)), h.replace(c, t)
        })(D, A, P))
      )
        n.push(r)
      else if (!e) return
    } else if (!e) return
    for (var i, r, o, a = {}, s = 0; s < e; s++) {
      var l = t[s],
        u = [l.getMaxTime() / 1e3 + 's'],
        h = EM(l.getClip().easing),
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
                  p = EM(h.easing),
                  d = h.rawValue
                ;(H(d) || gt(d)) &&
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
          c = (Br(h, D), O(h, r[S]), zi(h)),
          p = r[S][f]
        ;(a[S] = c ? { transform: c } : {}),
          (c = a[S]),
          (l = void 0),
          (l = (h = h).originX),
          (h = h.originY),
          (l || h) && (c[BM] = l + 'px ' + h + 'px'),
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
              (g = new vM()).reset(Ni(d)),
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
              return NM[t]
            })
      for (var M, T = B(a), C = !0, u = 1; u < T.length; u++) {
        var I = T[u - 1],
          k = T[u]
        if (a[I][BM] !== a[k][BM]) {
          C = !1
          break
        }
        M = a[I][BM]
      }
      if (C && M) {
        for (var S in a) a[S][BM] && delete a[S][BM]
        A[BM] = M
      }
      if (
        ct(T, function (t) {
          return 0 < B(a[t]).length
        }).length
      )
        return zM(a, P) + ' ' + t[0] + ' both'
    }
    for (i in a) (r = p(a[i])) && n.push(r)
    n.length &&
      ((o = P.zrId + '-cls-' + P.cssClassIdx++),
      (P.cssNodes['.' + o] = { animation: n.join(',') }),
      (A.class = o))
  }
  var VM = Math.round
  function HM (t) {
    return t && H(t.src)
  }
  function WM (t) {
    return t && S(t.toDataURL)
  }
  function GM (i, r, o, a) {
    MM(
      function (t, e) {
        var n = 'fill' === t || 'stroke' === t
        n && Ri(e) ? QM(r, i, t, a) : n && Pi(e) ? JM(o, i, t, a) : (i[t] = e)
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
          f = Ti(f.shadowColor),
          g = f.opacity,
          f = f.color,
          d = d / 2 / h + ' ' + d / 2 / u
        ;(l = e.zrId + '-s' + e.shadowIdx++),
          (e.defs[l] = AM(
            'filter',
            l,
            { id: l, x: '-100%', y: '-100%', width: '300%', height: '300%' },
            [
              AM('feDropShadow', '', {
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
      t.filter = Bi(l)
    }
  }
  function UM (t) {
    return Ci(t[0] - 1) && Ci(t[1]) && Ci(t[2]) && Ci(t[3] - 1)
  }
  function XM (t, e, n) {
    var i
    !e ||
      (Ci((i = e)[4]) && Ci(i[5]) && UM(e)) ||
      ((i = n ? 10 : 1e4),
      (t.transform = UM(e)
        ? 'translate(' + VM(e[4] * i) / i + ' ' + VM(e[5] * i) / i + ')'
        : 'matrix(' +
          Ii((n = e)[0]) +
          ',' +
          Ii(n[1]) +
          ',' +
          Ii(n[2]) +
          ',' +
          Ii(n[3]) +
          ',' +
          ki(n[4]) +
          ',' +
          ki(n[5]) +
          ')'))
  }
  function YM (t, e, n) {
    for (var i = t.points, r = [], o = 0; o < i.length; o++)
      r.push(VM(i[o][0] * n) / n), r.push(VM(i[o][1] * n) / n)
    e.points = r.join(' ')
  }
  function qM (t) {
    return !t.smooth
  }
  var jM,
    ZM = {
      circle: [
        ((jM = F(['cx', 'cy', 'r'], function (t) {
          return 'string' == typeof t ? [t, t] : t
        })),
        function (t, e, n) {
          for (var i = 0; i < jM.length; i++) {
            var r = jM[i],
              o = t[r[0]]
            null != o && (e[r[1]] = VM(o * n) / n)
          }
        })
      ],
      polyline: [YM, qM],
      polygon: [YM, qM]
    }
  function KM (t, e) {
    var n,
      i,
      r,
      o = t.style,
      a = t.shape,
      s = ZM[t.type],
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
            ((i = i || (n.__svgPathBuilder = new vM())).reset(p),
            r.rebuildPath(i, c),
            i.generateStr(),
            (n.__svgPathVersion = u),
            (n.__svgPathStrokePercent = c)),
          (l.d = i.getStr()))
        : ((h = t.type), (r = Math.pow(10, p)), s[0](a, l, r)),
      XM(l, t.transform),
      GM(l, o, t, e),
      e.animation && FM(t, l, e),
      AM(h, t.id + '', l)
    )
  }
  function $M (t, e) {
    {
      if (t instanceof Z) return KM(t, e)
      if (t instanceof Rs) {
        var n,
          i = e,
          r = (n = t).style,
          o
        if (
          ((o = r.image) &&
            !H(o) &&
            (HM(o) ? (o = o.src) : WM(o) && (o = o.toDataURL())),
          o)
        )
          return (
            (a = r.x || 0),
            (s = r.y || 0),
            (o = { href: o, width: r.width, height: r.height }),
            a && (o.x = a),
            s && (o.y = s),
            XM(o, n.transform),
            GM(o, r, n, i),
            i.animation && FM(n, o, i),
            AM('image', n.id + '', o)
          )
      } else if (t instanceof Ds) {
        var a = t,
          s = e
        if (
          ((r = a.style),
          null != (i = r.text) && (i += ''),
          i && !isNaN(r.x) && !isNaN(r.y))
        ) {
          var n = r.font || K,
            o = r.x || 0,
            l =
              ((t = r.y || 0),
              (e = Wr(n)),
              'top' === (l = r.textBaseline)
                ? (t += e / 2)
                : 'bottom' === l && (t -= e / 2),
              t),
            e = {
              'dominant-baseline': 'central',
              'text-anchor': Di[r.textAlign] || r.textAlign
            }
          if (el(r)) {
            var t = '',
              u = r.fontStyle,
              h = Js(r.fontSize)
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
            XM(e, a.transform),
            GM(e, r, a, s),
            s.animation && FM(a, e, s),
            AM('text', a.id + '', e, void 0, i)
          )
        }
      }
    }
  }
  function QM (t, e, n, i) {
    var r,
      t = t[n],
      o = { gradientUnits: t.global ? 'userSpaceOnUse' : 'objectBoundingBox' }
    if (Li(t))
      (r = 'linearGradient'),
        (o.x1 = t.x),
        (o.y1 = t.y),
        (o.x2 = t.x2),
        (o.y2 = t.y2)
    else {
      if (!Oi(t)) return
      ;(r = 'radialGradient'),
        (o.cx = N(t.x, 0.5)),
        (o.cy = N(t.y, 0.5)),
        (o.r = N(t.r, 0.5))
    }
    for (var a = t.colorStops, s = [], l = 0, u = a.length; l < u; ++l) {
      var h = 100 * ki(a[l].offset) + '%',
        c = Ti(a[l].color),
        p = c.color,
        c = c.opacity,
        h = { offset: h }
      ;(h['stop-color'] = p),
        c < 1 && (h['stop-opacity'] = c),
        s.push(AM('stop', l + '', h))
    }
    var t = PM(AM(r, '', o, s)),
      d = i.gradientCache,
      f = d[t]
    f ||
      ((f = i.zrId + '-g' + i.gradientIdx++),
      (d[t] = f),
      (o.id = f),
      (i.defs[f] = AM(r, f, o, s))),
      (e[n] = Bi(f))
  }
  function JM (t, e, n, i) {
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
    Ai(p)
      ? ((o = p.imageWidth),
        (a = p.imageHeight),
        (g = void 0),
        H((h = p.image))
          ? (g = h)
          : HM(h)
          ? (g = h.src)
          : WM(h) && (g = h.toDataURL()),
        'undefined' == typeof Image
          ? (It(
              o,
              (h =
                'Image width/height must been given explictly in svg-ssr renderer.')
            ),
            It(a, h))
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
        (r = AM('image', 'img', { href: g, width: o, height: a })),
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
        (t = zi(p)) && (f.patternTransform = t),
        (h = PM((u = AM('pattern', '', f, [r])))),
        (c = (g = i.patternCache)[h]) ||
          ((c = i.zrId + '-p' + i.patternIdx++),
          (g[h] = c),
          (f.id = c),
          (u = i.defs[c] = AM('pattern', c, f, [r]))),
        (e[n] = Bi(c)))
  }
  function tT (t) {
    return document.createTextNode(t)
  }
  function eT (t, e, n) {
    t.insertBefore(e, n)
  }
  function nT (t, e) {
    t.removeChild(e)
  }
  function iT (t, e) {
    t.appendChild(e)
  }
  function rT (t) {
    return t.parentNode
  }
  function oT (t) {
    return t.nextSibling
  }
  function aT (t, e) {
    t.textContent = e
  }
  var sT = 58,
    lT = 120,
    uT = AM('', '')
  function hT (t) {
    return void 0 === t
  }
  function cT (t) {
    return void 0 !== t
  }
  function pT (t, e) {
    var n = t.key === e.key
    return t.tag === e.tag && n
  }
  function dT (t) {
    var e,
      n = t.children,
      i = t.tag
    if (cT(i)) {
      var r = (t.elm = DM(i))
      if ((yT(uT, t), V(n)))
        for (e = 0; e < n.length; ++e) {
          var o = n[e]
          null != o && iT(r, dT(o))
        }
      else cT(t.text) && !L(t.text) && iT(r, tT(t.text))
    } else t.elm = tT(t.text)
    return t.elm
  }
  function fT (t, e, n, i, r) {
    for (; i <= r; ++i) {
      var o = n[i]
      null != o && eT(t, dT(o), e)
    }
  }
  function gT (t, e, n, i) {
    for (; n <= i; ++n) {
      var r = e[n]
      null != r && (cT(r.tag) ? nT(rT(r.elm), r.elm) : nT(t, r.elm))
    }
  }
  function yT (t, e) {
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
            : n.charCodeAt(0) !== lT
            ? i.setAttribute(n, a)
            : 'xmlns:xlink' === n || 'xmlns' === n
            ? i.setAttributeNS(IM, n, a)
            : n.charCodeAt(3) === sT
            ? i.setAttributeNS(kM, n, a)
            : n.charCodeAt(5) === sT
            ? i.setAttributeNS(CM, n, a)
            : i.setAttribute(n, a))
      }
      for (n in r) n in o || i.removeAttribute(n)
    }
  }
  function mT (t, e, n) {
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
        : pT(u, p)
        ? (vT(u, p), (u = e[++a]), (p = n[++s]))
        : pT(h, d)
        ? (vT(h, d), (h = e[--l]), (d = n[--c]))
        : pT(u, d)
        ? (vT(u, d), eT(t, u.elm, oT(h.elm)), (u = e[++a]), (d = n[--c]))
        : (p =
            (pT(h, p)
              ? (vT(h, p), eT(t, h.elm, u.elm), (h = e[--l]))
              : (hT(i) &&
                  (i = (function (t, e, n) {
                    for (var i = {}, r = e; r <= n; ++r) {
                      var o = t[r].key
                      void 0 !== o && (i[o] = r)
                    }
                    return i
                  })(e, a, l)),
                hT((r = i[p.key])) || (o = e[r]).tag !== p.tag
                  ? eT(t, dT(p), u.elm)
                  : (vT(o, p), (e[r] = void 0), eT(t, o.elm, u.elm))),
            n[++s]))
    ;(a <= l || s <= c) &&
      (l < a
        ? fT(t, null == n[c + 1] ? null : n[c + 1].elm, n, s, c)
        : gT(t, e, a, l))
  }
  function vT (t, e) {
    var n = (e.elm = t.elm),
      i = t.children,
      r = e.children
    t !== e &&
      (yT(t, e),
      hT(e.text)
        ? cT(i) && cT(r)
          ? i !== r && mT(n, i, r)
          : cT(r)
          ? (cT(t.text) && aT(n, ''), fT(n, null, r, 0, r.length - 1))
          : cT(i)
          ? gT(n, i, 0, i.length - 1)
          : cT(t.text) && aT(n, '')
        : t.text !== e.text &&
          (cT(i) && gT(n, i, 0, i.length - 1), aT(n, e.text)))
  }
  var _T = 0
  function xT (t, e, n) {
    var i
    ;(this.type = 'svg'),
      (this.refreshHover = wT()),
      (this.configLayer = wT()),
      (this.storage = e),
      (this._opts = n = O({}, n)),
      (this.root = t),
      (this._id = 'zr' + _T++),
      (this._oldVNode = OM(n.width, n.height)),
      t &&
        !n.ssr &&
        (((e = this._viewport = document.createElement('div')).style.cssText =
          'position:relative;overflow:hidden'),
        (i = this._svgDom = this._oldVNode.elm = DM('svg')),
        yT(null, this._oldVNode),
        e.appendChild(i),
        t.appendChild(e)),
      this.resize(n.width, n.height)
  }
  function wT () {
    return function () {}
  }
  ;(xT.prototype.getType = function () {
    return this.type
  }),
    (xT.prototype.getViewportRoot = function () {
      return this._viewport
    }),
    (xT.prototype.getViewportRootOffset = function () {
      var t = this.getViewportRoot()
      if (t)
        return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 }
    }),
    (xT.prototype.getSvgDom = function () {
      return this._svgDom
    }),
    (xT.prototype.refresh = function () {
      var t, e, n, i, r
      this.root &&
        (((t = this.renderToVNode({ willUpdate: !0 })).attrs.style =
          'position:absolute;left:0;top:0;user-select:none'),
        pT((e = this._oldVNode), (n = t))
          ? vT(e, n)
          : ((r = rT((i = e.elm))),
            dT(n),
            null !== r && (eT(r, n.elm, oT(i)), gT(r, [e], 0, 0))),
        (this._oldVNode = t))
    }),
    (xT.prototype.renderOneToVNode = function (t) {
      return $M(t, LM(this._id))
    }),
    (xT.prototype.renderToVNode = function (t) {
      t = t || {}
      var n,
        r,
        o,
        a,
        s,
        e = this.storage.getDisplayList(!0),
        i = this._width,
        l = this._height,
        u = LM(this._id),
        h =
          ((u.animation = t.animation),
          (u.willUpdate = t.willUpdate),
          (u.compress = t.compress),
          []),
        c = (this._bgVNode = (function (t, e, n, i) {
          var r
          n &&
            'none' !== n &&
            ((r = AM('rect', 'bg', {
              width: t,
              height: e,
              x: '0',
              y: '0',
              id: '0'
            })),
            Ri(n)
              ? QM({ fill: n }, r.attrs, 'fill', i)
              : Pi(n)
              ? JM(
                  {
                    style: { fill: n },
                    dirty: Ht,
                    getBoundingRect: function () {
                      return { width: t, height: e }
                    }
                  },
                  r.attrs,
                  'fill',
                  i
                )
              : ((i = Ti(n)),
                (n = i.color),
                (i = i.opacity),
                (r.attrs.fill = n),
                i < 1 && (r.attrs['fill-opacity'] = i)))
          return r
        })(i, l, this._backgroundColor, u)),
        c =
          (c && h.push(c),
          t.compress ? null : (this._mainVNode = AM('g', 'main', {}, []))),
        e =
          (this._paintList(e, u, c ? c.children : h),
          c && h.push(c),
          F(B(u.defs), function (t) {
            return u.defs[t]
          }))
      return (
        e.length && h.push(AM('defs', 'defs', {}, e)),
        t.animation &&
          ((n = u.cssNodes),
          (r = u.cssAnims),
          (o = (c = (c = { newline: !0 }) || {}).newline ? '\n' : ''),
          (a = ' {' + o),
          (s = o + '}'),
          (c = F(B(n), function (e) {
            return (
              e +
              a +
              F(B(n[e]), function (t) {
                return t + ':' + n[e][t] + ';'
              }).join(o) +
              s
            )
          }).join(o)),
          (e = F(B(r), function (i) {
            return (
              '@keyframes ' +
              i +
              a +
              F(B(r[i]), function (n) {
                return (
                  n +
                  a +
                  F(B(r[i][n]), function (t) {
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
          ((e = AM('style', 'stl', {}, [], c)), h.push(e)),
        OM(i, l, h, t.useViewBox)
      )
    }),
    (xT.prototype.renderToString = function (t) {
      return PM(
        this.renderToVNode({
          animation: N((t = t || {}).cssAnimation, !0),
          willUpdate: !1,
          compress: !0,
          useViewBox: N(t.useViewBox, !0)
        }),
        { newline: !0 }
      )
    }),
    (xT.prototype.setBackgroundColor = function (t) {
      this._backgroundColor = t
    }),
    (xT.prototype.getSvgRoot = function () {
      return this._mainVNode && this._mainVNode.elm
    }),
    (xT.prototype._paintList = function (t, e, n) {
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
                  (S[(l[r.id] = u)] = AM('clipPath', u, s, [KM(r, a)]))),
                (o['clip-path'] = Bi(u)),
                AM('g', 'clip-g-' + d++, b, []))
            ;(i ? i.children : n).push(S), (i = c[p++] = S)
          }
          var M = y,
            v = $M(g, e)
          v && (i ? i.children : n).push(v)
        }
      }
    }),
    (xT.prototype.resize = function (t, e) {
      var n = this._opts,
        i = this.root,
        r = this._viewport
      null != t && (n.width = t),
        null != e && (n.height = e),
        i &&
          r &&
          ((r.style.display = 'none'),
          (t = p0(i, 0, n)),
          (e = p0(i, 1, n)),
          (r.style.display = '')),
        (this._width === t && this._height === e) ||
          ((this._width = t),
          (this._height = e),
          r && (((i = r.style).width = t + 'px'), (i.height = e + 'px')),
          Pi(this._backgroundColor)
            ? this.refresh()
            : ((n = this._svgDom) &&
                (n.setAttribute('width', t), n.setAttribute('height', e)),
              (r = this._bgVNode && this._bgVNode.elm) &&
                (r.setAttribute('width', t), r.setAttribute('height', e))))
    }),
    (xT.prototype.getWidth = function () {
      return this._width
    }),
    (xT.prototype.getHeight = function () {
      return this._height
    }),
    (xT.prototype.dispose = function () {
      this.root && (this.root.innerHTML = ''),
        (this._svgDom =
          this._viewport =
          this.storage =
          this._oldVNode =
          this._bgVNode =
          this._mainVNode =
            null)
    }),
    (xT.prototype.clear = function () {
      this._svgDom && (this._svgDom.innerHTML = null), (this._oldVNode = null)
    }),
    (xT.prototype.toDataURL = function (t) {
      var e = this.renderToString(),
        n = 'data:image/svg+xml;'
      return t
        ? (e = Ei(e)) && n + 'base64,' + e
        : n + 'charset=UTF-8,' + encodeURIComponent(e)
    }),
    ho('svg', xT),
    (t.Axis = Uc),
    (t.ChartView = sy),
    (t.ComponentModel = g),
    (t.ComponentView = ny),
    (t.List = Iv),
    (t.Model = qc),
    (t.PRIORITY = e0),
    (t.SeriesModel = jg),
    (t.color = Si),
    (t.connect = function (e) {
      var t
      return (
        V(e) &&
          ((t = e),
          (e = null),
          R(t, function (t) {
            null != t.group && (e = t.group)
          }),
          (e = e || 'g_' + Rm++),
          R(t, function (t) {
            t.group = e
          })),
        (Lm[e] = !0),
        e
      )
    }),
    (t.dataTool = {}),
    (t.dependencies = { zrender: '5.4.4' }),
    (t.disConnect = t0),
    (t.disconnect = Nm),
    (t.dispose = function (t) {
      H(t) ? (t = Pm[t]) : t instanceof mm || (t = zm(t)),
        t instanceof mm && !t.isDisposed() && t.dispose()
    }),
    (t.env = b),
    (t.extendChartView = function (t) {
      return (t = sy.extend(t)), sy.registerClass(t), t
    }),
    (t.extendComponentModel = function (t) {
      return (t = g.extend(t)), g.registerClass(t), t
    }),
    (t.extendComponentView = function (t) {
      return (t = ny.extend(t)), ny.registerClass(t), t
    }),
    (t.extendSeriesModel = function (t) {
      return (t = jg.extend(t)), jg.registerClass(t), t
    }),
    (t.format = Wc),
    (t.getCoordinateSystemDimensions = function (t) {
      if ((t = Bd.get(t)))
        return t.getDimensionsInfo
          ? t.getDimensionsInfo()
          : t.dimensions.slice()
    }),
    (t.getInstanceByDom = zm),
    (t.getInstanceById = function (t) {
      return Pm[t]
    }),
    (t.getMap = function (t) {
      var e = V0.getMap
      return e && e(t)
    }),
    (t.graphic = hp),
    (t.helper = n0),
    (t.init = function (t, e, n) {
      var i = !(n && n.ssr)
      if (i) {
        var r = zm(t)
        if (r) return r
      }
      return (
        ((r = new mm(t, e, n)).id = 'ec_' + Om++),
        (Pm[r.id] = r),
        i && Qo(t, Bm, r.id),
        hm(r),
        F0.trigger('afterinit', r),
        r
      )
    }),
    (t.innerDrawElementOnCanvas = L0),
    (t.matrix = We),
    (t.number = ca),
    (t.parseGeoJSON = h1),
    (t.parseGeoJson = h1),
    (t.registerAction = Um),
    (t.registerCoordinateSystem = Xm),
    (t.registerLayout = Ym),
    (t.registerLoading = Km),
    (t.registerLocale = rp),
    (t.registerMap = $m),
    (t.registerPostInit = Hm),
    (t.registerPostUpdate = Wm),
    (t.registerPreprocessor = Fm),
    (t.registerProcessor = Vm),
    (t.registerTheme = Em),
    (t.registerTransform = Qm),
    (t.registerUpdateLifecycle = Gm),
    (t.registerVisual = qm),
    (t.setCanvasCreator = function (t) {
      A({ createCanvas: t })
    }),
    (t.setPlatformAPI = A),
    (t.throttle = my),
    (t.time = uc),
    (t.use = q_),
    (t.util = Ec),
    (t.vector = se),
    (t.version = '5.4.3'),
    (t.zrUtil = Gt),
    (t.zrender = co)
})
