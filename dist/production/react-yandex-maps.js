var e,
  t = require('react'),
  n = (e = t) && 'object' == typeof e && 'default' in e ? e.default : e;
function o(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var r = 'function' == typeof Symbol && Symbol.for;
r && Symbol.for('react.element'),
  r && Symbol.for('react.portal'),
  r && Symbol.for('react.fragment'),
  r && Symbol.for('react.strict_mode'),
  r && Symbol.for('react.profiler'),
  r && Symbol.for('react.provider'),
  r && Symbol.for('react.context'),
  r && Symbol.for('react.async_mode'),
  r && Symbol.for('react.concurrent_mode'),
  r && Symbol.for('react.forward_ref'),
  r && Symbol.for('react.suspense'),
  r && Symbol.for('react.suspense_list'),
  r && Symbol.for('react.memo'),
  r && Symbol.for('react.lazy'),
  r && Symbol.for('react.block'),
  r && Symbol.for('react.fundamental'),
  r && Symbol.for('react.responder'),
  r && Symbol.for('react.scope');
var a = o(function(e, t) {
    !(function() {
      var e = 'function' == typeof Symbol && Symbol.for,
        n = e ? Symbol.for('react.element') : 60103,
        o = e ? Symbol.for('react.portal') : 60106,
        r = e ? Symbol.for('react.fragment') : 60107,
        a = e ? Symbol.for('react.strict_mode') : 60108,
        s = e ? Symbol.for('react.profiler') : 60114,
        i = e ? Symbol.for('react.provider') : 60109,
        p = e ? Symbol.for('react.context') : 60110,
        c = e ? Symbol.for('react.async_mode') : 60111,
        u = e ? Symbol.for('react.concurrent_mode') : 60111,
        f = e ? Symbol.for('react.forward_ref') : 60112,
        l = e ? Symbol.for('react.suspense') : 60113,
        d = e ? Symbol.for('react.suspense_list') : 60120,
        y = e ? Symbol.for('react.memo') : 60115,
        m = e ? Symbol.for('react.lazy') : 60116,
        h = e ? Symbol.for('react.block') : 60121,
        b = e ? Symbol.for('react.fundamental') : 60117,
        v = e ? Symbol.for('react.responder') : 60118,
        O = e ? Symbol.for('react.scope') : 60119;
      function g(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              var d = e.type;
              switch (d) {
                case c:
                case u:
                case r:
                case s:
                case a:
                case l:
                  return d;
                default:
                  var h = d && d.$$typeof;
                  switch (h) {
                    case p:
                    case f:
                    case m:
                    case y:
                    case i:
                      return h;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      var j = u,
        _ = p,
        w = i,
        x = n,
        S = f,
        E = r,
        R = m,
        C = y,
        T = o,
        P = s,
        M = a,
        k = l,
        A = !1;
      function I(e) {
        return g(e) === u;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = j),
        (t.ContextConsumer = _),
        (t.ContextProvider = w),
        (t.Element = x),
        (t.ForwardRef = S),
        (t.Fragment = E),
        (t.Lazy = R),
        (t.Memo = C),
        (t.Portal = T),
        (t.Profiler = P),
        (t.StrictMode = M),
        (t.Suspense = k),
        (t.isAsyncMode = function(e) {
          return (
            A ||
              ((A = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )),
            I(e) || g(e) === c
          );
        }),
        (t.isConcurrentMode = I),
        (t.isContextConsumer = function(e) {
          return g(e) === p;
        }),
        (t.isContextProvider = function(e) {
          return g(e) === i;
        }),
        (t.isElement = function(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function(e) {
          return g(e) === f;
        }),
        (t.isFragment = function(e) {
          return g(e) === r;
        }),
        (t.isLazy = function(e) {
          return g(e) === m;
        }),
        (t.isMemo = function(e) {
          return g(e) === y;
        }),
        (t.isPortal = function(e) {
          return g(e) === o;
        }),
        (t.isProfiler = function(e) {
          return g(e) === s;
        }),
        (t.isStrictMode = function(e) {
          return g(e) === a;
        }),
        (t.isSuspense = function(e) {
          return g(e) === l;
        }),
        (t.isValidElementType = function(e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === r ||
            e === u ||
            e === s ||
            e === a ||
            e === l ||
            e === d ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === y ||
                e.$$typeof === i ||
                e.$$typeof === p ||
                e.$$typeof === f ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === O ||
                e.$$typeof === h))
          );
        }),
        (t.typeOf = g);
    })();
  }),
  s = o(function(e) {
    e.exports = a;
  }),
  i = Object.getOwnPropertySymbols,
  p = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = (function() {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function(e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var o = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
          o[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function(e, t) {
        for (
          var n,
            o,
            r = (function(e) {
              if (null == e)
                throw new TypeError(
                  'Object.assign cannot be called with null or undefined'
                );
              return Object(e);
            })(e),
            a = 1;
          a < arguments.length;
          a++
        ) {
          for (var s in (n = Object(arguments[a])))
            p.call(n, s) && (r[s] = n[s]);
          if (i) {
            o = i(n);
            for (var u = 0; u < o.length; u++)
              c.call(n, o[u]) && (r[o[u]] = n[o[u]]);
          }
        }
        return r;
      },
  f = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  l = function() {},
  d = f,
  y = {},
  m = Function.call.bind(Object.prototype.hasOwnProperty);
function h(e, t, n, o, r) {
  for (var a in e)
    if (m(e, a)) {
      var s;
      try {
        if ('function' != typeof e[a]) {
          var i = Error(
            (o || 'React class') +
              ': ' +
              n +
              ' type `' +
              a +
              '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
              typeof e[a] +
              '`.'
          );
          throw ((i.name = 'Invariant Violation'), i);
        }
        s = e[a](t, a, o, n, null, d);
      } catch (e) {
        s = e;
      }
      if (
        (!s ||
          s instanceof Error ||
          l(
            (o || 'React class') +
              ': type specification of ' +
              n +
              ' `' +
              a +
              '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
              typeof s +
              '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
          ),
        s instanceof Error && !(s.message in y))
      ) {
        y[s.message] = !0;
        var p = r ? r() : '';
        l('Failed ' + n + ' type: ' + s.message + (null != p ? p : ''));
      }
    }
}
(l = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
}),
  (h.resetWarningCache = function() {
    y = {};
  });
var b = h,
  v = Function.call.bind(Object.prototype.hasOwnProperty),
  O = function() {};
function g() {
  return null;
}
O = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
};
var j = o(function(e) {
    e.exports = (function(e, t) {
      var n = 'function' == typeof Symbol && Symbol.iterator,
        o = '@@iterator',
        r = '<<anonymous>>',
        a = {
          array: c('array'),
          bool: c('boolean'),
          func: c('function'),
          number: c('number'),
          object: c('object'),
          string: c('string'),
          symbol: c('symbol'),
          any: p(g),
          arrayOf: function(e) {
            return p(function(t, n, o, r, a) {
              if ('function' != typeof e)
                return new i(
                  'Property `' +
                    a +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside arrayOf.'
                );
              var s = t[n];
              if (!Array.isArray(s))
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    d(s) +
                    '` supplied to `' +
                    o +
                    '`, expected an array.'
                );
              for (var p = 0; p < s.length; p++) {
                var c = e(s, p, o, r, a + '[' + p + ']', f);
                if (c instanceof Error) return c;
              }
              return null;
            });
          },
          element: p(function(t, n, o, r, a) {
            var s = t[n];
            return e(s)
              ? null
              : new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    d(s) +
                    '` supplied to `' +
                    o +
                    '`, expected a single ReactElement.'
                );
          }),
          elementType: p(function(e, t, n, o, r) {
            var a = e[t];
            return s.isValidElementType(a)
              ? null
              : new i(
                  'Invalid ' +
                    o +
                    ' `' +
                    r +
                    '` of type `' +
                    d(a) +
                    '` supplied to `' +
                    n +
                    '`, expected a single ReactElement type.'
                );
          }),
          instanceOf: function(e) {
            return p(function(t, n, o, a, s) {
              var p;
              return t[n] instanceof e
                ? null
                : new i(
                    'Invalid ' +
                      a +
                      ' `' +
                      s +
                      '` of type `' +
                      ((p = t[n]).constructor && p.constructor.name
                        ? p.constructor.name
                        : r) +
                      '` supplied to `' +
                      o +
                      '`, expected instance of `' +
                      (e.name || r) +
                      '`.'
                  );
            });
          },
          node: p(function(e, t, n, o, r) {
            return l(e[t])
              ? null
              : new i(
                  'Invalid ' +
                    o +
                    ' `' +
                    r +
                    '` supplied to `' +
                    n +
                    '`, expected a ReactNode.'
                );
          }),
          objectOf: function(e) {
            return p(function(t, n, o, r, a) {
              if ('function' != typeof e)
                return new i(
                  'Property `' +
                    a +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside objectOf.'
                );
              var s = t[n],
                p = d(s);
              if ('object' !== p)
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    p +
                    '` supplied to `' +
                    o +
                    '`, expected an object.'
                );
              for (var c in s)
                if (v(s, c)) {
                  var u = e(s, c, o, r, a + '.' + c, f);
                  if (u instanceof Error) return u;
                }
              return null;
            });
          },
          oneOf: function(e) {
            return Array.isArray(e)
              ? p(function(t, n, o, r, a) {
                  for (var s = t[n], p = 0; p < e.length; p++)
                    if (
                      (c = s) === (u = e[p])
                        ? 0 !== c || 1 / c == 1 / u
                        : c != c && u != u
                    )
                      return null;
                  var c,
                    u,
                    f = JSON.stringify(e, function(e, t) {
                      return 'symbol' === y(t) ? String(t) : t;
                    });
                  return new i(
                    'Invalid ' +
                      r +
                      ' `' +
                      a +
                      '` of value `' +
                      String(s) +
                      '` supplied to `' +
                      o +
                      '`, expected one of ' +
                      f +
                      '.'
                  );
                })
              : (O(
                  arguments.length > 1
                    ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    : 'Invalid argument supplied to oneOf, expected an array.'
                ),
                g);
          },
          oneOfType: function(e) {
            if (!Array.isArray(e))
              return (
                O(
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ),
                g
              );
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if ('function' != typeof n)
                return (
                  O(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                      m(n) +
                      ' at index ' +
                      t +
                      '.'
                  ),
                  g
                );
            }
            return p(function(t, n, o, r, a) {
              for (var s = 0; s < e.length; s++)
                if (null == (0, e[s])(t, n, o, r, a, f)) return null;
              return new i(
                'Invalid ' + r + ' `' + a + '` supplied to `' + o + '`.'
              );
            });
          },
          shape: function(e) {
            return p(function(t, n, o, r, a) {
              var s = t[n],
                p = d(s);
              if ('object' !== p)
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    p +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.'
                );
              for (var c in e) {
                var u = e[c];
                if (u) {
                  var l = u(s, c, o, r, a + '.' + c, f);
                  if (l) return l;
                }
              }
              return null;
            });
          },
          exact: function(e) {
            return p(function(t, n, o, r, a) {
              var s = t[n],
                p = d(s);
              if ('object' !== p)
                return new i(
                  'Invalid ' +
                    r +
                    ' `' +
                    a +
                    '` of type `' +
                    p +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.'
                );
              var c = u({}, t[n], e);
              for (var l in c) {
                var y = e[l];
                if (!y)
                  return new i(
                    'Invalid ' +
                      r +
                      ' `' +
                      a +
                      '` key `' +
                      l +
                      '` supplied to `' +
                      o +
                      '`.\nBad object: ' +
                      JSON.stringify(t[n], null, '  ') +
                      '\nValid keys: ' +
                      JSON.stringify(Object.keys(e), null, '  ')
                  );
                var m = y(s, l, o, r, a + '.' + l, f);
                if (m) return m;
              }
              return null;
            });
          },
        };
      function i(e) {
        (this.message = e), (this.stack = '');
      }
      function p(e) {
        var n = {},
          o = 0;
        function a(a, s, p, c, u, l, d) {
          if (((c = c || r), (l = l || p), d !== f)) {
            if (t) {
              var y = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((y.name = 'Invariant Violation'), y);
            }
            if ('undefined' != typeof console) {
              var m = c + ':' + p;
              !n[m] &&
                o < 3 &&
                (O(
                  'You are manually calling a React.PropTypes validation function for the `' +
                    l +
                    '` prop on `' +
                    c +
                    '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                ),
                (n[m] = !0),
                o++);
            }
          }
          return null == s[p]
            ? a
              ? new i(
                  null === s[p]
                    ? 'The ' +
                      u +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      c +
                      '`, but its value is `null`.'
                    : 'The ' +
                      u +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      c +
                      '`, but its value is `undefined`.'
                )
              : null
            : e(s, p, c, u, l);
        }
        var s = a.bind(null, !1);
        return (s.isRequired = a.bind(null, !0)), s;
      }
      function c(e) {
        return p(function(t, n, o, r, a, s) {
          var p = t[n];
          return d(p) !== e
            ? new i(
                'Invalid ' +
                  r +
                  ' `' +
                  a +
                  '` of type `' +
                  y(p) +
                  '` supplied to `' +
                  o +
                  '`, expected `' +
                  e +
                  '`.'
              )
            : null;
        });
      }
      function l(t) {
        switch (typeof t) {
          case 'number':
          case 'string':
          case 'undefined':
            return !0;
          case 'boolean':
            return !t;
          case 'object':
            if (Array.isArray(t)) return t.every(l);
            if (null === t || e(t)) return !0;
            var r = (function(e) {
              var r = t && ((n && t[n]) || t[o]);
              if ('function' == typeof r) return r;
            })();
            if (!r) return !1;
            var a,
              s = r.call(t);
            if (r !== t.entries) {
              for (; !(a = s.next()).done; ) if (!l(a.value)) return !1;
            } else
              for (; !(a = s.next()).done; ) {
                var i = a.value;
                if (i && !l(i[1])) return !1;
              }
            return !0;
          default:
            return !1;
        }
      }
      function d(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? 'array'
          : e instanceof RegExp
          ? 'object'
          : (function(e, t) {
              return (
                'symbol' === e ||
                (!!t &&
                  ('Symbol' === t['@@toStringTag'] ||
                    ('function' == typeof Symbol && t instanceof Symbol)))
              );
            })(t, e)
          ? 'symbol'
          : t;
      }
      function y(e) {
        if (null == e) return '' + e;
        var t = d(e);
        if ('object' === t) {
          if (e instanceof Date) return 'date';
          if (e instanceof RegExp) return 'regexp';
        }
        return t;
      }
      function m(e) {
        var t = y(e);
        switch (t) {
          case 'array':
          case 'object':
            return 'an ' + t;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + t;
          default:
            return t;
        }
      }
      return (
        (i.prototype = Error.prototype),
        (a.checkPropTypes = b),
        (a.resetWarningCache = b.resetWarningCache),
        (a.PropTypes = a),
        a
      );
    })(s.isElement, !0);
  }),
  _ = (function(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  })(
    o(function(e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          return (
            e.displayName ||
            e.name ||
            ('string' == typeof e && e.length > 0 ? e : 'Unknown')
          );
        });
    })
  ),
  w = function(e, t) {
    var n = {};
    for (var o in e) -1 === t.indexOf(o) && (n[o] = e[o]);
    return n;
  };
function x(e, t) {
  return (x =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function S(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    x(e, t);
}
var E =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  R =
    n.createContext ||
    function(e, n) {
      var o,
        r,
        a =
          '__create-react-context-' +
          (E.__global_unique_id__ = (E.__global_unique_id__ || 0) + 1) +
          '__',
        s = (function(e) {
          function t() {
            var t, n, o;
            return (
              ((t = e.apply(this, arguments) || this).emitter =
                ((n = t.props.value),
                (o = []),
                {
                  on: function(e) {
                    o.push(e);
                  },
                  off: function(e) {
                    o = o.filter(function(t) {
                      return t !== e;
                    });
                  },
                  get: function() {
                    return n;
                  },
                  set: function(e, t) {
                    (n = e),
                      o.forEach(function(e) {
                        return e(n, t);
                      });
                  },
                })),
              t
            );
          }
          S(t, e);
          var o = t.prototype;
          return (
            (o.getChildContext = function() {
              var e;
              return ((e = {})[a] = this.emitter), e;
            }),
            (o.componentWillReceiveProps = function(e) {
              if (this.props.value !== e.value) {
                var t,
                  o = this.props.value,
                  r = e.value;
                ((a = o) === (s = r)
                ? 0 !== a || 1 / a == 1 / s
                : a != a && s != s)
                  ? (t = 0)
                  : ((function(e, a) {
                      if (
                        (1073741823 &
                          (t =
                            'function' == typeof n ? n(o, r) : 1073741823)) !==
                        t
                      ) {
                        var s =
                          'Warning: calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: ' +
                          t;
                        'undefined' != typeof console && console.warn(s);
                        try {
                          throw Error(s);
                        } catch (e) {}
                      }
                    })(),
                    0 != (t |= 0) && this.emitter.set(e.value, t));
              }
              var a, s;
            }),
            (o.render = function() {
              return this.props.children;
            }),
            t
          );
        })(t.Component);
      s.childContextTypes = (((o = {})[a] = j.object.isRequired), o);
      var i = (function(t) {
        function n() {
          var e;
          return (
            ((e = t.apply(this, arguments) || this).state = {
              value: e.getValue(),
            }),
            (e.onUpdate = function(t, n) {
              0 != ((0 | e.observedBits) & n) &&
                e.setState({ value: e.getValue() });
            }),
            e
          );
        }
        S(n, t);
        var o = n.prototype;
        return (
          (o.componentWillReceiveProps = function(e) {
            var t = e.observedBits;
            this.observedBits = null == t ? 1073741823 : t;
          }),
          (o.componentDidMount = function() {
            this.context[a] && this.context[a].on(this.onUpdate);
            var e = this.props.observedBits;
            this.observedBits = null == e ? 1073741823 : e;
          }),
          (o.componentWillUnmount = function() {
            this.context[a] && this.context[a].off(this.onUpdate);
          }),
          (o.getValue = function() {
            return this.context[a] ? this.context[a].get() : e;
          }),
          (o.render = function() {
            return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
              this.state.value
            );
            var e;
          }),
          n
        );
      })(t.Component);
      return (
        (i.contextTypes = (((r = {})[a] = j.object), r)),
        { Provider: s, Consumer: i }
      );
    },
  C = R(null),
  T = function(e) {
    var t = _(e),
      o = function(o) {
        return n.createElement(C.Consumer, null, function(r) {
          if (null === r)
            throw new Error(
              "Couldn't find Yandex.Maps API in the context. Make sure that <" +
                t +
                ' /> is inside <YMaps /> provider'
            );
          return n.createElement(e, Object.assign({}, { ymaps: r }, o));
        });
      };
    return (o.displayName = 'withYMapsContext(' + t + ')'), o;
  },
  P = R(null),
  M = function(e) {
    var t = function(t) {
      return n.createElement(P.Consumer, null, function(o) {
        return n.createElement(e, Object.assign({}, { parent: o }, t));
      });
    };
    return (t.displayName = 'withParentContext(' + _(e) + ')'), t;
  };
function k(e, t, o) {
  void 0 === t && (t = !1), void 0 === o && (o = []);
  var r = (function(r) {
    function a() {
      r.call(this), (this.state = { loading: !0 }), (this._isMounted = !1);
    }
    return (
      r && (a.__proto__ = r),
      ((a.prototype = Object.create(r && r.prototype)).constructor = a),
      (a.prototype.componentDidMount = function() {
        var e = this;
        (this._isMounted = !0),
          this.props.ymaps
            .load()
            .then(function(t) {
              return Promise.all(
                o.concat(e.props.modules).map(t.loadModule)
              ).then(function() {
                !0 === e._isMounted &&
                  e.setState({ loading: !1 }, function() {
                    e.props.onLoad(t);
                  });
              });
            })
            .catch(function(t) {
              !0 === e._isMounted && e.props.onError(t);
            });
      }),
      (a.prototype.componentWillUnmount = function() {
        this._isMounted = !1;
      }),
      (a.prototype.render = function() {
        var o = this.props.ymaps,
          r = !1 === t || !1 === this.state.loading,
          a = w(this.props, ['onLoad', 'onError', 'modules', 'ymaps']);
        return (
          r && n.createElement(e, Object.assign({}, { ymaps: o.getApi() }, a))
        );
      }),
      a
    );
  })(n.Component);
  return (
    (r.displayName = 'withYMaps(' + _(e) + ')'),
    (r.propTypes = {
      onLoad: j.func,
      onError: j.func,
      modules: j.arrayOf(j.string),
      ymaps: j.object,
    }),
    (r.defaultProps = {
      onLoad: Function.prototype,
      onError: Function.prototype,
      modules: [],
    }),
    T(r)
  );
}
var A = { lang: 'ru_RU', load: '', ns: '', mode: 'debug' },
  I = {},
  D = function(e) {
    var t = Date.now().toString(32);
    (this.options = e),
      (this.namespace = e.query.ns || A.ns),
      (this.onload = '__yandex-maps-api-onload__$$' + t),
      (this.onerror = '__yandex-maps-api-onerror__$$' + t);
  };
(D.prototype.getApi = function() {
  return 'undefined' != typeof window && this.namespace
    ? window[this.namespace]
    : this.api;
}),
  (D.prototype.setApi = function(e) {
    return (this.api = e);
  }),
  (D.prototype.getPromise = function() {
    return this.namespace ? I[this.namespace] : this.promise;
  }),
  (D.prototype.setPromise = function(e) {
    return this.namespace
      ? (I[this.namespace] = this.promise = e)
      : (this.promise = e);
  }),
  (D.prototype.load = function() {
    var e = this;
    if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
    if (this.getPromise()) return this.setPromise(this.getPromise());
    var t = Object.assign(
        { onload: this.onload, onerror: this.onerror },
        A,
        this.options.query
      ),
      n = Object.keys(t)
        .map(function(e) {
          return e + '=' + t[e];
        })
        .join('&'),
      o = [
        'https://' +
          (this.options.enterprise ? 'enterprise.' : '') +
          'api-maps.yandex.ru',
        this.options.version,
        '?' + n,
      ].join('/'),
      r = new Promise(function(t, n) {
        (window[e.onload] = function(n) {
          delete window[e.onload],
            (n.loadModule = e.loadModule.bind(e)),
            n.ready(function() {
              return t(e.setApi(n));
            });
        }),
          (window[e.onerror] = function(t) {
            delete window[e.onerror], n(t);
          }),
          e.fetchScript(o).catch(window[e.onerror]);
      });
    return this.setPromise(r);
  }),
  (D.prototype.fetchScript = function(e) {
    var t = this;
    return new Promise(function(n, o) {
      (t.script = document.createElement('script')),
        (t.script.type = 'text/javascript'),
        (t.script.onload = n),
        (t.script.onerror = o),
        (t.script.src = e),
        (t.script.async = 'async'),
        document.head.appendChild(t.script);
    });
  }),
  (D.prototype.loadModule = function(e) {
    var t = this;
    return new Promise(function(n, o) {
      t.getApi().modules.require(
        e,
        function(o) {
          !(function(e, t, n, o) {
            void 0 === o && (o = !1),
              (t = 'string' == typeof t ? t.split('.') : t.slice());
            for (var r, a = e; t.length > 1; )
              a[(r = t.shift())] || (a[r] = {}), (a = a[r]);
            a[t[0]] = (!0 === o && a[t[0]]) || n;
          })(t.api, e, o, !0),
            n(o);
        },
        o,
        t.getApi()
      );
    });
  }),
  (D._name = '__react-yandex-maps__');
var U = (function(e) {
  function t(t) {
    e.call(this, t), (this.ymaps = new D(t));
  }
  return (
    e && (t.__proto__ = e),
    ((t.prototype = Object.create(e && e.prototype)).constructor = t),
    (t.prototype.componentDidMount = function() {
      !0 === this.props.preload && this.ymaps.load();
    }),
    (t.prototype.render = function() {
      return n.createElement(
        C.Provider,
        { value: this.ymaps },
        this.props.children
      );
    }),
    t
  );
})(n.Component);
(U.propTypes = {
  version: j.string.isRequired,
  enterprise: j.bool,
  query: j.shape({
    lang: j.oneOf(['tr_TR', 'en_US', 'en_RU', 'ru_RU', 'ru_UA', 'uk_UA']),
    apikey: j.string,
    coordorder: j.oneOf(['latlong', 'longlat']),
    load: j.string,
    mode: j.oneOf(['release', 'debug']),
    csp: j.bool,
    ns: j.string,
  }),
  children: j.node,
  preload: j.bool,
}),
  (U.defaultProps = {
    version: '2.1',
    enterprise: !1,
    query: { lang: 'ru_RU', load: '', ns: '' },
    preload: !1,
  });
var $ = /^on(?=[A-Z])/;
function q(e) {
  return Object.keys(e).reduce(
    function(t, n) {
      if ($.test(n)) {
        var o = n.replace($, '').toLowerCase();
        t._events[o] = e[n];
      } else t[n] = e[n];
      return t;
    },
    { _events: {} }
  );
}
function B(e, t, n) {
  'function' == typeof n && e.events.add(t, n);
}
function F(e, t, n) {
  'function' == typeof n && e.events.remove(t, n);
}
function N(e, t, n) {
  Object.keys(Object.assign({}, t, n)).forEach(function(o) {
    t[o] !== n[o] && (F(e, o, t[o]), B(e, o, n[o]));
  });
}
var L = function(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.slice(1);
};
function W(e, t) {
  return void 0 !== e[t] || void 0 === e[L(t)];
}
function G(e, t, n) {
  return (W(e, t) ? e[t] : e[L(t)]) || n;
}
function z(e, t, n) {
  if ((void 0 === n && (n = null), e !== t)) {
    if (
      (e &&
        (e.hasOwnProperty('current')
          ? (e.current = null)
          : 'function' == typeof e && e(null)),
      !t)
    )
      return;
    t.hasOwnProperty('current')
      ? (t.current = n)
      : 'function' == typeof t && t(n);
  }
}
function Y(e) {
  var t = e.width,
    n = e.height,
    o = e.style,
    r = e.className;
  return void 0 !== o || void 0 !== r
    ? Object.assign({}, o && { style: o }, r && { className: r })
    : { style: { width: t, height: n } };
}
var V = (function(e) {
    function t() {
      var t = this;
      e.call(this),
        (this.state = { instance: null }),
        (this._parentElement = null),
        (this._getRef = function(e) {
          t._parentElement = e;
        });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = t.mountObject(
          this._parentElement,
          this.props.ymaps.Map,
          this.props
        );
        this.setState({ instance: e });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateObject(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        t.unmountObject(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        var e = Y(this.props),
          t = q(this.props),
          o = w(t, [
            '_events',
            'state',
            'defaultState',
            'options',
            'defaultOptions',
            'instanceRef',
            'ymaps',
            'children',
            'width',
            'height',
            'style',
            'className',
          ]);
        return n.createElement(
          P.Provider,
          { value: this.state.instance },
          n.createElement(
            'div',
            Object.assign({}, { ref: this._getRef }, e, o),
            this.props.children
          )
        );
      }),
      (t.mountObject = function(e, t, n) {
        var o = q(n),
          r = o.instanceRef,
          a = o._events,
          s = new t(e, G(n, 'state'), G(n, 'options'));
        return (
          Object.keys(a).forEach(function(e) {
            return B(s, e, a[e]);
          }),
          z(null, r, s),
          s
        );
      }),
      (t.updateObject = function(e, t, n) {
        var o = q(n),
          r = o._events,
          a = o.instanceRef,
          s = q(t),
          i = s._events,
          p = s.instanceRef;
        if (W(n, 'state')) {
          var c = G(t, 'state', {}),
            u = G(n, 'state', {});
          c.type !== u.type && e.setType(u.type),
            c.behaviors !== u.behaviors &&
              (c.behaviors && e.behaviors.disable(c.behaviors),
              u.behaviors && e.behaviors.enable(u.behaviors)),
            u.zoom && c.zoom !== u.zoom && e.setZoom(u.zoom),
            u.center && c.center !== u.center && e.setCenter(u.center),
            u.bounds && c.bounds !== u.bounds && e.setBounds(u.bounds);
        }
        if (W(n, 'options')) {
          var f = G(t, 'options'),
            l = G(n, 'options', {});
          f !== l && e.options.set(l);
        }
        (G(t, 'width') === G(n, 'width') &&
          G(t, 'height') === G(n, 'height')) ||
          e.container.fitToViewport(),
          N(e, i, r),
          z(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return F(e, t, r[t]);
          }),
          e.destroy(),
          z(o));
      }),
      t
    );
  })(n.Component),
  Z = {
    bounds: j.arrayOf(j.arrayOf(j.number)),
    center: j.arrayOf(j.number),
    controls: j.arrayOf(j.string),
    behaviors: j.arrayOf(j.string),
    margin: j.oneOfType([j.arrayOf(j.number), j.arrayOf(j.arrayOf(j.number))]),
    type: j.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid']),
    zoom: j.number,
  },
  J = {};
(V.propTypes = {
  state: j.shape(Z),
  defaultState: j.shape(Z),
  options: j.shape(J),
  defaultOptions: j.shape(J),
  instanceRef: j.func,
  ymaps: j.object,
  children: j.node,
  width: j.oneOfType([j.number, j.string]),
  height: j.oneOfType([j.number, j.string]),
  style: j.object,
  className: j.string,
}),
  (V.defaultProps = { width: 320, height: 240 });
var H = k(V, !0, ['Map']),
  K = (function(e) {
    function t() {
      var t = this;
      e.call(this),
        (this.state = { instance: null }),
        (this._parentElement = null),
        (this._getRef = function(e) {
          t._parentElement = e;
        });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = this;
        (this._mounted = !0),
          this.props.ymaps.panorama.isSupported() &&
            t
              .mountObject(
                this._parentElement,
                this.props.ymaps.panorama,
                this.props
              )
              .then(function(t) {
                return e._mounted && e.setState({ instance: t });
              });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateObject(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        (this._mounted = !1), t.unmountObject(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        var e = Y(this.props);
        return n.createElement(
          'div',
          Object.assign({}, { ref: this._getRef }, e)
        );
      }),
      (t.mountObject = function(e, t, n) {
        var o = q(n),
          r = o.instanceRef,
          a = o._events,
          s = G(n, 'point'),
          i = G(n, 'locateOptions'),
          p = G(n, 'options');
        return new Promise(function(n, o) {
          t.locate(s, i).done(function(o) {
            if (o.length > 0) {
              var s = new t.Player(e, o[0], p);
              z(null, r, s),
                Object.keys(a).forEach(function(e) {
                  return B(s, e, a[e]);
                }),
                n(s);
            }
          }, o);
        });
      }),
      (t.updateObject = function(e, t, n) {
        var o = q(n),
          r = o._events,
          a = o.instanceRef,
          s = q(t),
          i = s._events,
          p = s.instanceRef;
        if (W(n, 'options')) {
          var c = G(t, 'options'),
            u = G(n, 'options');
          c !== u && e.options.set(u);
        }
        if (W(n, 'point')) {
          var f = G(n, 'point'),
            l = G(t, 'point'),
            d = G(n, 'locateOptions');
          f !== l && e.moveTo(f, d);
        }
        N(e, i, r), z(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return F(e, t, r[t]);
          }),
          z(o));
      }),
      t
    );
  })(n.Component),
  Q = {};
(K.propTypes = {
  options: j.shape(Q),
  defaultOptions: j.shape(Q),
  point: j.arrayOf(j.number),
  defaultPoint: j.arrayOf(j.number),
  locateOptions: j.shape({
    layer: j.oneOf(['yandex#panorama', 'yandex#airPanorama']),
  }),
  instanceRef: j.func,
  ymaps: j.object,
  children: j.node,
  width: j.oneOfType([j.number, j.string]),
  height: j.oneOfType([j.number, j.string]),
  style: j.object,
  className: j.string,
}),
  (K.defaultProps = { width: 320, height: 240 });
var X = k(K, !0, [
    'panorama.isSupported',
    'panorama.locate',
    'panorama.createPlayer',
    'panorama.Player',
  ]),
  ee = (function(e) {
    function t() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = t.mountControl(
          this.props.ymaps.control[this.props.name],
          this.props
        );
        this.setState({ instance: e });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateControl(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        t.unmountControl(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        return n.createElement(
          P.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (t.mountControl = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n.lazy,
          s = n._events,
          i = new e({
            data: G(t, 'data'),
            options: G(t, 'options'),
            state: G(t, 'state'),
            mapTypes: G(t, 'mapTypes'),
            lazy: a,
          });
        if (
          (Object.keys(s).forEach(function(e) {
            return B(i, e, s[e]);
          }),
          r && r.controls && 'function' == typeof r.controls.add)
        )
          r.controls.add(i);
        else {
          if (!r || !r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ' + t.name);
          r.add(i);
        }
        return z(null, o, i), i;
      }),
      (t.updateControl = function(e, t, n) {
        var o = q(n),
          r = o._events,
          a = o.instanceRef,
          s = q(t),
          i = s._events,
          p = s.instanceRef;
        if (W(n, 'options')) {
          var c = G(t, 'options'),
            u = G(n, 'options');
          c !== u && e.options.set(u);
        }
        if (W(n, 'data')) {
          var f = G(t, 'data'),
            l = G(n, 'data');
          f !== l && e.data.set(l);
        }
        if (W(n, 'state')) {
          var d = G(t, 'state'),
            y = G(n, 'state');
          d !== y && e.state.set(y);
        }
        if (W(n, 'mapTypes')) {
          var m = G(t, 'mapTypes'),
            h = G(n, 'mapTypes');
          m !== h &&
            (e.removeAllMapTypes(),
            h.forEach(function(t) {
              return e.addMapType(t);
            }));
        }
        N(e, i, r), z(p, a, e);
      }),
      (t.unmountControl = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return F(e, t, a[t]);
          }),
          r.controls && 'function' == typeof r.controls.remove
            ? r.controls.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          z(o));
      }),
      t
    );
  })(n.Component);
function te(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'Button' }));
}
(ee.propTypes = {
  children: j.node,
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
  name: j.oneOf([
    'Button',
    'FullscreenControl',
    'GeolocationControl',
    'ListBox',
    'ListBoxItem',
    'RouteButton',
    'RouteEditor',
    'RoutePanel',
    'RulerControl',
    'SearchControl',
    'TrafficControl',
    'TypeSelector',
    'ZoomControl',
  ]).isRequired,
}),
  (te.propTypes = {
    data: j.shape({}),
    defaultData: j.shape({}),
    options: j.shape({}),
    defaultOptions: j.shape({}),
    state: j.shape({}),
    defaultState: j.shape({}),
  });
var ne = M(k(te, !0, ['control.Button']));
function oe(e) {
  return n.createElement(
    ee,
    Object.assign({}, e, { name: 'FullscreenControl' })
  );
}
oe.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var re = M(k(oe, !0, ['control.FullscreenControl']));
function ae(e) {
  return n.createElement(
    ee,
    Object.assign({}, e, { name: 'GeolocationControl' })
  );
}
ae.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var se = M(k(ae, !0, ['control.GeolocationControl']));
function ie(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'ListBox' }));
}
ie.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var pe = M(k(ie, !0, ['control.ListBox']));
function ce(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'ListBoxItem' }));
}
ce.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var ue = M(k(ce, !0, ['control.ListBoxItem']));
function fe(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'RouteButton' }));
}
fe.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var le = M(k(fe, !0, ['control.RouteButton']));
function de(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'RouteEditor' }));
}
de.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var ye = M(k(de, !0, ['control.RouteEditor']));
function me(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'RoutePanel' }));
}
me.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var he = M(k(me, !0, ['control.RoutePanel']));
function be(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'RulerControl' }));
}
be.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var ve = M(k(be, !0, ['control.RulerControl']));
function Oe(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'SearchControl' }));
}
Oe.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var ge = M(k(Oe, !0, ['control.SearchControl']));
function je(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'TrafficControl' }));
}
je.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var _e = M(k(je, !0, ['control.TrafficControl']));
function we(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'TypeSelector' }));
}
we.propTypes = {
  mapTypes: j.arrayOf(
    j.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  defaultMapTypes: j.arrayOf(
    j.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var xe = M(k(we, !0, ['control.TypeSelector']));
function Se(e) {
  return n.createElement(ee, Object.assign({}, e, { name: 'ZoomControl' }));
}
Se.propTypes = {
  data: j.shape({}),
  defaultData: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
  state: j.shape({}),
  defaultState: j.shape({}),
};
var Ee = M(k(Se, !0, ['control.ZoomControl'])),
  Re = (function(e) {
    function t() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = t.mountObject(this.props.ymaps.Clusterer, this.props);
        this.setState({ instance: e });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateObject(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        t.unmountObject(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        return n.createElement(
          P.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (t.mountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          s = new e(G(t, 'options'));
        if (
          (Object.keys(a).forEach(function(e) {
            return B(s, e, a[e]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.add)
        )
          r.geoObjects.add(s);
        else {
          if (!r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount Clusterer');
          r.add(s);
        }
        return z(null, o, s), s;
      }),
      (t.updateObject = function(e, t, n) {
        var o = q(n),
          r = o._events,
          a = o.instanceRef,
          s = q(t),
          i = s._events,
          p = s.instanceRef;
        if (W(n, 'options')) {
          var c = G(t, 'options'),
            u = G(n, 'options');
          c !== u && e.options.set(u);
        }
        N(e, i, r), z(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return F(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          z(o));
      }),
      t
    );
  })(n.Component);
Re.propTypes = {
  options: j.shape({}),
  defaultOptions: j.shape({}),
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
  children: j.node,
};
var Ce = M(k(Re, !0, ['Clusterer'])),
  Te = (function(e) {
    function t() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = t.mountObject(this.props.ymaps.ObjectManager, this.props);
        this.setState({ instance: e });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateObject(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        t.unmountObject(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        return null;
      }),
      (t.mountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          s = G(t, 'options', {}),
          i = G(t, 'features', {}),
          p = G(t, 'filter', null),
          c = G(t, 'objects', {}),
          u = G(t, 'clusters', {}),
          f = new e(s);
        if (
          (f.add(i || []),
          f.setFilter(p),
          f.objects.options.set(c),
          f.clusters.options.set(u),
          Object.keys(a).forEach(function(e) {
            return B(f, e, a[e]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.add)
        )
          r.geoObjects.add(f);
        else {
          if (!r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ObjectManager');
          r.add(f);
        }
        return z(null, o, f), f;
      }),
      (t.updateObject = function(e, t, n) {
        var o = q(n),
          r = o._events,
          a = o.instanceRef,
          s = q(t),
          i = s._events,
          p = s.instanceRef;
        if (W(n, 'options')) {
          var c = G(t, 'options'),
            u = G(n, 'options');
          c !== u && e.options.set(u);
        }
        if (W(n, 'objects')) {
          var f = G(t, 'objects'),
            l = G(n, 'objects');
          f !== l && e.objects.options.set(l);
        }
        if (W(n, 'clusters')) {
          var d = G(t, 'clusters'),
            y = G(n, 'clusters');
          d !== y && e.clusters.options.set(y);
        }
        if (W(n, 'filter')) {
          var m = G(t, 'filter'),
            h = G(n, 'filter');
          m !== h && e.setFilter(h);
        }
        if (W(n, 'features')) {
          var b = G(t, 'features'),
            v = G(n, 'features');
          b !== v && (e.remove(b), e.add(v));
        }
        N(e, i, r), z(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return F(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          z(o));
      }),
      t
    );
  })(n.Component),
  Pe = j.shape({
    id: j.oneOfType([j.number, j.string]).isRequired,
    type: j.oneOf(['Feature']).isRequired,
    geometry: j.object.isRequired,
    options: j.object,
    properties: j.object,
  }),
  Me = { type: j.oneOf(['FeatureCollection']).isRequired };
Me.features = j.arrayOf(j.oneOfType([j.shape(Me), Pe])).isRequired;
var ke = j.shape(Me),
  Ae = j.oneOfType([j.arrayOf(j.oneOfType([ke, Pe])), ke]),
  Ie = j.oneOfType([j.string, j.func]),
  De = j.shape({}),
  Ue = j.shape({}),
  $e = j.shape({});
Te.propTypes = {
  features: Ae,
  defaultFeatures: Ae,
  filter: Ie,
  defaultFilter: Ie,
  options: De,
  defaultOptions: De,
  objects: Ue,
  defaultObjects: Ue,
  clusters: $e,
  defaultClusters: $e,
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
};
var qe = M(k(Te, !0, ['ObjectManager'])),
  Be = (function(e) {
    function t() {
      e.call(this), (this.state = { instance: null });
    }
    return (
      e && (t.__proto__ = e),
      ((t.prototype = Object.create(e && e.prototype)).constructor = t),
      (t.prototype.componentDidMount = function() {
        var e = this.props,
          n = e.name,
          o = e.ymaps,
          r = e.dangerZone,
          a = t.mountObject(
            r && 'function' == typeof r.modifyConstructor
              ? r.modifyConstructor(o[n])
              : o[n],
            this.props
          );
        this.setState({ instance: a });
      }),
      (t.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          t.updateObject(this.state.instance, e, this.props);
      }),
      (t.prototype.componentWillUnmount = function() {
        t.unmountObject(this.state.instance, this.props);
      }),
      (t.prototype.render = function() {
        return null;
      }),
      (t.mountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          s = new e(G(t, 'geometry'), G(t, 'properties'), G(t, 'options'));
        if (
          (Object.keys(a).forEach(function(e) {
            return B(s, e, a[e]);
          }),
          r && r.geoObjects && 'function' == typeof r.geoObjects.add)
        )
          r.geoObjects.add(s);
        else {
          if (!r || !r.add || 'function' != typeof r.add)
            throw new Error('No parent found to mount ' + t.name);
          r.add(s);
        }
        return z(null, o, s), s;
      }),
      (t.updateObject = function(e, t, n) {
        var o = q(n),
          r = o._events,
          a = o.instanceRef,
          s = q(t),
          i = s._events,
          p = s.instanceRef;
        if (W(n, 'geometry')) {
          var c = G(t, 'geometry', {}),
            u = G(n, 'geometry', {});
          Array.isArray(u) && u !== c
            ? Array.isArray(u[0]) && 'number' == typeof u[1]
              ? (e.geometry.setCoordinates(u[0]), e.geometry.setRadius(u[1]))
              : e.geometry.setCoordinates(u)
            : 'object' == typeof u &&
              (u.coordinates !== c.coordinates &&
                e.geometry.setCoordinates(u.coordinates),
              u.radius !== c.radius && e.geometry.setRadius(u.radius));
        }
        if (W(n, 'properties')) {
          var f = G(t, 'properties'),
            l = G(n, 'properties');
          f !== l && e.properties.set(l);
        }
        if (W(n, 'options')) {
          var d = G(t, 'options'),
            y = G(n, 'options');
          d !== y && e.options.set(y);
        }
        N(e, i, r), z(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = q(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return F(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          z(o));
      }),
      t
    );
  })(n.Component);
Be.propTypes = {
  instanceRef: j.func,
  ymaps: j.object,
  parent: j.object,
  name: j.oneOf([
    'GeoObject',
    'Placemark',
    'Polyline',
    'Rectangle',
    'Polygon',
    'Circle',
  ]).isRequired,
  dangerZone: j.shape({ modifyConstructor: j.func }),
};
var Fe = {
  modifyConstructor: function(e) {
    function t(t, n, o) {
      e.call(this, { geometry: t, properties: n }, o);
    }
    return (t.prototype = e.prototype), t;
  },
};
function Ne(e) {
  return n.createElement(
    Be,
    Object.assign({}, e, { name: 'GeoObject', dangerZone: Fe })
  );
}
var Le = j.shape({
  type: j.oneOf(['Point', 'LineString', 'Rectangle', 'Polygon', 'Circle'])
    .isRequired,
  coordinates: j.oneOfType([
    j.arrayOf(j.number),
    j.arrayOf(j.arrayOf(j.number)),
    j.arrayOf(j.arrayOf(j.arrayOf(j.number))),
  ]).isRequired,
  radius: j.number,
});
Ne.propTypes = {
  geometry: Le,
  defaultGeometry: Le,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var We = M(k(Ne, !0, ['GeoObject']));
function Ge(e) {
  return n.createElement(Be, Object.assign({}, e, { name: 'Circle' }));
}
var ze = j.arrayOf(j.oneOfType([j.number, j.arrayOf(j.number)]));
Ge.propTypes = {
  geometry: ze,
  defaultGeometry: ze,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var Ye = M(k(Ge, !0, ['Circle']));
function Ve(e) {
  return n.createElement(Be, Object.assign({}, e, { name: 'Placemark' }));
}
var Ze = j.arrayOf(j.number);
Ve.propTypes = {
  geometry: Ze,
  defaultGeometry: Ze,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var Je = M(k(Ve, !0, ['Placemark']));
function He(e) {
  return n.createElement(Be, Object.assign({}, e, { name: 'Polygon' }));
}
var Ke = j.arrayOf(j.arrayOf(j.arrayOf(j.number)));
He.propTypes = {
  geometry: Ke,
  defaultGeometry: Ke,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var Qe = M(k(He, !0, ['Polygon']));
function Xe(e) {
  return n.createElement(Be, Object.assign({}, e, { name: 'Polyline' }));
}
var et = j.arrayOf(j.arrayOf(j.number));
Xe.propTypes = {
  geometry: et,
  defaultGeometry: et,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var tt = M(k(Xe, !0, ['Polyline']));
function nt(e) {
  return n.createElement(Be, Object.assign({}, e, { name: 'Rectangle' }));
}
var ot = j.arrayOf(j.arrayOf(j.number));
nt.propTypes = {
  geometry: ot,
  defaultGeometry: ot,
  properties: j.shape({}),
  defaultProperties: j.shape({}),
  options: j.shape({}),
  defaultOptions: j.shape({}),
};
var rt = M(k(nt, !0, ['Rectangle']));
(exports.withYMaps = k),
  (exports.YMaps = U),
  (exports.Map = H),
  (exports.Panorama = X),
  (exports.Button = ne),
  (exports.FullscreenControl = re),
  (exports.GeolocationControl = se),
  (exports.ListBox = pe),
  (exports.ListBoxItem = ue),
  (exports.RouteButton = le),
  (exports.RouteEditor = ye),
  (exports.RoutePanel = he),
  (exports.RulerControl = ve),
  (exports.SearchControl = ge),
  (exports.TrafficControl = _e),
  (exports.TypeSelector = xe),
  (exports.ZoomControl = Ee),
  (exports.Clusterer = Ce),
  (exports.ObjectManager = qe),
  (exports.GeoObject = We),
  (exports.Circle = Ye),
  (exports.Placemark = Je),
  (exports.Polygon = Qe),
  (exports.Polyline = tt),
  (exports.Rectangle = rt);
//# sourceMappingURL=react-yandex-maps.js.map
