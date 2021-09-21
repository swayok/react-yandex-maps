import e, { Component as t } from 'react';
function n(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var o = 'function' == typeof Symbol && Symbol.for;
o && Symbol.for('react.element'),
  o && Symbol.for('react.portal'),
  o && Symbol.for('react.fragment'),
  o && Symbol.for('react.strict_mode'),
  o && Symbol.for('react.profiler'),
  o && Symbol.for('react.provider'),
  o && Symbol.for('react.context'),
  o && Symbol.for('react.async_mode'),
  o && Symbol.for('react.concurrent_mode'),
  o && Symbol.for('react.forward_ref'),
  o && Symbol.for('react.suspense'),
  o && Symbol.for('react.suspense_list'),
  o && Symbol.for('react.memo'),
  o && Symbol.for('react.lazy'),
  o && Symbol.for('react.block'),
  o && Symbol.for('react.fundamental'),
  o && Symbol.for('react.responder'),
  o && Symbol.for('react.scope');
var r = n(function(e, t) {
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
        S = n,
        E = f,
        R = r,
        T = m,
        C = y,
        P = o,
        x = s,
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
        (t.Element = S),
        (t.ForwardRef = E),
        (t.Fragment = R),
        (t.Lazy = T),
        (t.Memo = C),
        (t.Portal = P),
        (t.Profiler = x),
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
  a = n(function(e) {
    e.exports = r;
  }),
  s = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  c = (function() {
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
          for (var c in (n = Object(arguments[a])))
            i.call(n, c) && (r[c] = n[c]);
          if (s) {
            o = s(n);
            for (var u = 0; u < o.length; u++)
              p.call(n, o[u]) && (r[o[u]] = n[o[u]]);
          }
        }
        return r;
      },
  u = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  f = function() {},
  l = u,
  d = {},
  y = Function.call.bind(Object.prototype.hasOwnProperty);
function m(e, t, n, o, r) {
  for (var a in e)
    if (y(e, a)) {
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
        s = e[a](t, a, o, n, null, l);
      } catch (e) {
        s = e;
      }
      if (
        (!s ||
          s instanceof Error ||
          f(
            (o || 'React class') +
              ': type specification of ' +
              n +
              ' `' +
              a +
              '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
              typeof s +
              '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
          ),
        s instanceof Error && !(s.message in d))
      ) {
        d[s.message] = !0;
        var p = r ? r() : '';
        f('Failed ' + n + ' type: ' + s.message + (null != p ? p : ''));
      }
    }
}
(f = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
}),
  (m.resetWarningCache = function() {
    d = {};
  });
var h = m,
  b = Function.call.bind(Object.prototype.hasOwnProperty),
  v = function() {};
function O() {
  return null;
}
v = function(e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
};
var g = n(function(e) {
    e.exports = (function(e, t) {
      var n = 'function' == typeof Symbol && Symbol.iterator,
        o = '@@iterator',
        r = '<<anonymous>>',
        s = {
          array: f('array'),
          bool: f('boolean'),
          func: f('function'),
          number: f('number'),
          object: f('object'),
          string: f('string'),
          symbol: f('symbol'),
          any: p(O),
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
                var c = e(s, p, o, r, a + '[' + p + ']', u);
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
            var s = e[t];
            return a.isValidElementType(s)
              ? null
              : new i(
                  'Invalid ' +
                    o +
                    ' `' +
                    r +
                    '` of type `' +
                    d(s) +
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
                if (b(s, c)) {
                  var f = e(s, c, o, r, a + '.' + c, u);
                  if (f instanceof Error) return f;
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
              : (v(
                  arguments.length > 1
                    ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    : 'Invalid argument supplied to oneOf, expected an array.'
                ),
                O);
          },
          oneOfType: function(e) {
            if (!Array.isArray(e))
              return (
                v(
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ),
                O
              );
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if ('function' != typeof n)
                return (
                  v(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                      m(n) +
                      ' at index ' +
                      t +
                      '.'
                  ),
                  O
                );
            }
            return p(function(t, n, o, r, a) {
              for (var s = 0; s < e.length; s++)
                if (null == (0, e[s])(t, n, o, r, a, u)) return null;
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
                var f = e[c];
                if (f) {
                  var l = f(s, c, o, r, a + '.' + c, u);
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
              var f = c({}, t[n], e);
              for (var l in f) {
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
                var m = y(s, l, o, r, a + '.' + l, u);
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
        function a(a, s, p, c, f, l, d) {
          if (((c = c || r), (l = l || p), d !== u)) {
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
                (v(
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
                      f +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      c +
                      '`, but its value is `null`.'
                    : 'The ' +
                      f +
                      ' `' +
                      l +
                      '` is marked as required in `' +
                      c +
                      '`, but its value is `undefined`.'
                )
              : null
            : e(s, p, c, f, l);
        }
        var s = a.bind(null, !1);
        return (s.isRequired = a.bind(null, !0)), s;
      }
      function f(e) {
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
        (s.checkPropTypes = h),
        (s.resetWarningCache = h.resetWarningCache),
        (s.PropTypes = s),
        s
      );
    })(a.isElement, !0);
  }),
  j = (function(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  })(
    n(function(e, t) {
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
  _ = function(e, t) {
    var n = {};
    for (var o in e) -1 === t.indexOf(o) && (n[o] = e[o]);
    return n;
  };
function w(e, t) {
  return (w =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function S(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    w(e, t);
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
    e.createContext ||
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
        })(t);
      s.childContextTypes = (((o = {})[a] = g.object.isRequired), o);
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
      })(t);
      return (
        (i.contextTypes = (((r = {})[a] = g.object), r)),
        { Provider: s, Consumer: i }
      );
    },
  T = R(null),
  C = function(t) {
    var n = j(t),
      o = function(o) {
        return e.createElement(T.Consumer, null, function(r) {
          if (null === r)
            throw new Error(
              "Couldn't find Yandex.Maps API in the context. Make sure that <" +
                n +
                ' /> is inside <YMaps /> provider'
            );
          return e.createElement(t, Object.assign({}, { ymaps: r }, o));
        });
      };
    return (o.displayName = 'withYMapsContext(' + n + ')'), o;
  },
  P = R(null),
  x = function(t) {
    var n = function(n) {
      return e.createElement(P.Consumer, null, function(o) {
        return e.createElement(t, Object.assign({}, { parent: o }, n));
      });
    };
    return (n.displayName = 'withParentContext(' + j(t) + ')'), n;
  };
function M(t, n, o) {
  void 0 === n && (n = !1), void 0 === o && (o = []);
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
          r = !1 === n || !1 === this.state.loading,
          a = _(this.props, ['onLoad', 'onError', 'modules', 'ymaps']);
        return (
          r && e.createElement(t, Object.assign({}, { ymaps: o.getApi() }, a))
        );
      }),
      a
    );
  })(e.Component);
  return (
    (r.displayName = 'withYMaps(' + j(t) + ')'),
    (r.propTypes = {
      onLoad: g.func,
      onError: g.func,
      modules: g.arrayOf(g.string),
      ymaps: g.object,
    }),
    (r.defaultProps = {
      onLoad: Function.prototype,
      onError: Function.prototype,
      modules: [],
    }),
    C(r)
  );
}
var k = { lang: 'ru_RU', load: '', ns: '', mode: 'debug' },
  A = {},
  I = function(e) {
    var t = Date.now().toString(32);
    (this.options = e),
      (this.namespace = e.query.ns || k.ns),
      (this.onload = '__yandex-maps-api-onload__$$' + t),
      (this.onerror = '__yandex-maps-api-onerror__$$' + t);
  };
(I.prototype.getApi = function() {
  return 'undefined' != typeof window && this.namespace
    ? window[this.namespace]
    : this.api;
}),
  (I.prototype.setApi = function(e) {
    return (this.api = e);
  }),
  (I.prototype.getPromise = function() {
    return this.namespace ? A[this.namespace] : this.promise;
  }),
  (I.prototype.setPromise = function(e) {
    return this.namespace
      ? (A[this.namespace] = this.promise = e)
      : (this.promise = e);
  }),
  (I.prototype.load = function() {
    var e = this;
    if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
    if (this.getPromise()) return this.setPromise(this.getPromise());
    var t = Object.assign(
        { onload: this.onload, onerror: this.onerror },
        k,
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
  (I.prototype.fetchScript = function(e) {
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
  (I.prototype.loadModule = function(e) {
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
  (I._name = '__react-yandex-maps__');
var D = (function(t) {
  function n(e) {
    t.call(this, e), (this.ymaps = new I(e));
  }
  return (
    t && (n.__proto__ = t),
    ((n.prototype = Object.create(t && t.prototype)).constructor = n),
    (n.prototype.componentDidMount = function() {
      !0 === this.props.preload && this.ymaps.load();
    }),
    (n.prototype.render = function() {
      return e.createElement(
        T.Provider,
        { value: this.ymaps },
        this.props.children
      );
    }),
    n
  );
})(e.Component);
(D.propTypes = {
  version: g.string.isRequired,
  enterprise: g.bool,
  query: g.shape({
    lang: g.oneOf(['tr_TR', 'en_US', 'en_RU', 'ru_RU', 'ru_UA', 'uk_UA']),
    apikey: g.string,
    coordorder: g.oneOf(['latlong', 'longlat']),
    load: g.string,
    mode: g.oneOf(['release', 'debug']),
    csp: g.bool,
    ns: g.string,
  }),
  children: g.node,
  preload: g.bool,
}),
  (D.defaultProps = {
    version: '2.1',
    enterprise: !1,
    query: { lang: 'ru_RU', load: '', ns: '' },
    preload: !1,
  });
var U = /^on(?=[A-Z])/;
function $(e) {
  return Object.keys(e).reduce(
    function(t, n) {
      if (U.test(n)) {
        var o = n.replace(U, '').toLowerCase();
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
function q(e, t, n) {
  'function' == typeof n && e.events.remove(t, n);
}
function F(e, t, n) {
  Object.keys(Object.assign({}, t, n)).forEach(function(o) {
    t[o] !== n[o] && (q(e, o, t[o]), B(e, o, n[o]));
  });
}
var N = function(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.slice(1);
};
function L(e, t) {
  return void 0 !== e[t] || void 0 === e[N(t)];
}
function W(e, t, n) {
  return (L(e, t) ? e[t] : e[N(t)]) || n;
}
function G(e, t, n) {
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
function z(e) {
  var t = e.width,
    n = e.height,
    o = e.style,
    r = e.className;
  return void 0 !== o || void 0 !== r
    ? Object.assign({}, o && { style: o }, r && { className: r })
    : { style: { width: t, height: n } };
}
var V = (function(t) {
    function n() {
      var e = this;
      t.call(this),
        (this.state = { instance: null }),
        (this._parentElement = null),
        (this._getRef = function(t) {
          e._parentElement = t;
        });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        var e = n.mountObject(
          this._parentElement,
          this.props.ymaps.Map,
          this.props
        );
        this.setState({ instance: e });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateObject(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        var t = z(this.props),
          n = $(this.props),
          o = _(n, [
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
        return e.createElement(
          P.Provider,
          { value: this.state.instance },
          e.createElement(
            'div',
            Object.assign({}, { ref: this._getRef }, t, o),
            this.props.children
          )
        );
      }),
      (n.mountObject = function(e, t, n) {
        var o = $(n),
          r = o.instanceRef,
          a = o._events,
          s = new t(e, W(n, 'state'), W(n, 'options'));
        return (
          Object.keys(a).forEach(function(e) {
            return B(s, e, a[e]);
          }),
          G(null, r, s),
          s
        );
      }),
      (n.updateObject = function(e, t, n) {
        var o = $(n),
          r = o._events,
          a = o.instanceRef,
          s = $(t),
          i = s._events,
          p = s.instanceRef;
        if (L(n, 'state')) {
          var c = W(t, 'state', {}),
            u = W(n, 'state', {});
          c.type !== u.type && e.setType(u.type),
            c.behaviors !== u.behaviors &&
              (c.behaviors && e.behaviors.disable(c.behaviors),
              u.behaviors && e.behaviors.enable(u.behaviors)),
            u.zoom && c.zoom !== u.zoom && e.setZoom(u.zoom),
            u.center && c.center !== u.center && e.setCenter(u.center),
            u.bounds && c.bounds !== u.bounds && e.setBounds(u.bounds);
        }
        if (L(n, 'options')) {
          var f = W(t, 'options'),
            l = W(n, 'options', {});
          f !== l && e.options.set(l);
        }
        (W(t, 'width') === W(n, 'width') &&
          W(t, 'height') === W(n, 'height')) ||
          e.container.fitToViewport(),
          F(e, i, r),
          G(p, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return q(e, t, r[t]);
          }),
          e.destroy(),
          G(o));
      }),
      n
    );
  })(e.Component),
  Y = {
    bounds: g.arrayOf(g.arrayOf(g.number)),
    center: g.arrayOf(g.number),
    controls: g.arrayOf(g.string),
    behaviors: g.arrayOf(g.string),
    margin: g.oneOfType([g.arrayOf(g.number), g.arrayOf(g.arrayOf(g.number))]),
    type: g.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid']),
    zoom: g.number,
  },
  Z = {};
(V.propTypes = {
  state: g.shape(Y),
  defaultState: g.shape(Y),
  options: g.shape(Z),
  defaultOptions: g.shape(Z),
  instanceRef: g.func,
  ymaps: g.object,
  children: g.node,
  width: g.oneOfType([g.number, g.string]),
  height: g.oneOfType([g.number, g.string]),
  style: g.object,
  className: g.string,
}),
  (V.defaultProps = { width: 320, height: 240 });
var J = M(V, !0, ['Map']),
  H = (function(t) {
    function n() {
      var e = this;
      t.call(this),
        (this.state = { instance: null }),
        (this._parentElement = null),
        (this._getRef = function(t) {
          e._parentElement = t;
        });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        var e = this;
        (this._mounted = !0),
          this.props.ymaps.panorama.isSupported() &&
            n
              .mountObject(
                this._parentElement,
                this.props.ymaps.panorama,
                this.props
              )
              .then(function(t) {
                return e._mounted && e.setState({ instance: t });
              });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateObject(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        (this._mounted = !1), n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        var t = z(this.props);
        return e.createElement(
          'div',
          Object.assign({}, { ref: this._getRef }, t)
        );
      }),
      (n.mountObject = function(e, t, n) {
        var o = $(n),
          r = o.instanceRef,
          a = o._events,
          s = W(n, 'point'),
          i = W(n, 'locateOptions'),
          p = W(n, 'options');
        return new Promise(function(n, o) {
          t.locate(s, i).done(function(o) {
            if (o.length > 0) {
              var s = new t.Player(e, o[0], p);
              G(null, r, s),
                Object.keys(a).forEach(function(e) {
                  return B(s, e, a[e]);
                }),
                n(s);
            }
          }, o);
        });
      }),
      (n.updateObject = function(e, t, n) {
        var o = $(n),
          r = o._events,
          a = o.instanceRef,
          s = $(t),
          i = s._events,
          p = s.instanceRef;
        if (L(n, 'options')) {
          var c = W(t, 'options'),
            u = W(n, 'options');
          c !== u && e.options.set(u);
        }
        if (L(n, 'point')) {
          var f = W(n, 'point'),
            l = W(t, 'point'),
            d = W(n, 'locateOptions');
          f !== l && e.moveTo(f, d);
        }
        F(e, i, r), G(p, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n._events;
        null !== e &&
          (Object.keys(r).forEach(function(t) {
            return q(e, t, r[t]);
          }),
          G(o));
      }),
      n
    );
  })(e.Component),
  K = {};
(H.propTypes = {
  options: g.shape(K),
  defaultOptions: g.shape(K),
  point: g.arrayOf(g.number),
  defaultPoint: g.arrayOf(g.number),
  locateOptions: g.shape({
    layer: g.oneOf(['yandex#panorama', 'yandex#airPanorama']),
  }),
  instanceRef: g.func,
  ymaps: g.object,
  children: g.node,
  width: g.oneOfType([g.number, g.string]),
  height: g.oneOfType([g.number, g.string]),
  style: g.object,
  className: g.string,
}),
  (H.defaultProps = { width: 320, height: 240 });
var Q = M(H, !0, [
    'panorama.isSupported',
    'panorama.locate',
    'panorama.createPlayer',
    'panorama.Player',
  ]),
  X = (function(t) {
    function n() {
      t.call(this), (this.state = { instance: null });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        var e = n.mountControl(
          this.props.ymaps.control[this.props.name],
          this.props
        );
        this.setState({ instance: e });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateControl(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        n.unmountControl(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        return e.createElement(
          P.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (n.mountControl = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n.lazy,
          s = n._events,
          i = new e({
            data: W(t, 'data'),
            options: W(t, 'options'),
            state: W(t, 'state'),
            mapTypes: W(t, 'mapTypes'),
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
        return G(null, o, i), i;
      }),
      (n.updateControl = function(e, t, n) {
        var o = $(n),
          r = o._events,
          a = o.instanceRef,
          s = $(t),
          i = s._events,
          p = s.instanceRef;
        if (L(n, 'options')) {
          var c = W(t, 'options'),
            u = W(n, 'options');
          c !== u && e.options.set(u);
        }
        if (L(n, 'data')) {
          var f = W(t, 'data'),
            l = W(n, 'data');
          f !== l && e.data.set(l);
        }
        if (L(n, 'state')) {
          var d = W(t, 'state'),
            y = W(n, 'state');
          d !== y && e.state.set(y);
        }
        if (L(n, 'mapTypes')) {
          var m = W(t, 'mapTypes'),
            h = W(n, 'mapTypes');
          m !== h &&
            (e.removeAllMapTypes(),
            h.forEach(function(t) {
              return e.addMapType(t);
            }));
        }
        F(e, i, r), G(p, a, e);
      }),
      (n.unmountControl = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return q(e, t, a[t]);
          }),
          r.controls && 'function' == typeof r.controls.remove
            ? r.controls.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          G(o));
      }),
      n
    );
  })(e.Component);
function ee(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'Button' }));
}
(X.propTypes = {
  children: g.node,
  instanceRef: g.func,
  ymaps: g.object,
  parent: g.object,
  name: g.oneOf([
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
  (ee.propTypes = {
    data: g.shape({}),
    defaultData: g.shape({}),
    options: g.shape({}),
    defaultOptions: g.shape({}),
    state: g.shape({}),
    defaultState: g.shape({}),
  });
var te = x(M(ee, !0, ['control.Button']));
function ne(t) {
  return e.createElement(
    X,
    Object.assign({}, t, { name: 'FullscreenControl' })
  );
}
ne.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var oe = x(M(ne, !0, ['control.FullscreenControl']));
function re(t) {
  return e.createElement(
    X,
    Object.assign({}, t, { name: 'GeolocationControl' })
  );
}
re.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var ae = x(M(re, !0, ['control.GeolocationControl']));
function se(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'ListBox' }));
}
se.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var ie = x(M(se, !0, ['control.ListBox']));
function pe(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'ListBoxItem' }));
}
pe.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var ce = x(M(pe, !0, ['control.ListBoxItem']));
function ue(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'RouteButton' }));
}
ue.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var fe = x(M(ue, !0, ['control.RouteButton']));
function le(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'RouteEditor' }));
}
le.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var de = x(M(le, !0, ['control.RouteEditor']));
function ye(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'RoutePanel' }));
}
ye.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var me = x(M(ye, !0, ['control.RoutePanel']));
function he(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'RulerControl' }));
}
he.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var be = x(M(he, !0, ['control.RulerControl']));
function ve(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'SearchControl' }));
}
ve.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var Oe = x(M(ve, !0, ['control.SearchControl']));
function ge(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'TrafficControl' }));
}
ge.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var je = x(M(ge, !0, ['control.TrafficControl']));
function _e(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'TypeSelector' }));
}
_e.propTypes = {
  mapTypes: g.arrayOf(
    g.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  defaultMapTypes: g.arrayOf(
    g.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
  ),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var we = x(M(_e, !0, ['control.TypeSelector']));
function Se(t) {
  return e.createElement(X, Object.assign({}, t, { name: 'ZoomControl' }));
}
Se.propTypes = {
  data: g.shape({}),
  defaultData: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
  state: g.shape({}),
  defaultState: g.shape({}),
};
var Ee = x(M(Se, !0, ['control.ZoomControl'])),
  Re = (function(t) {
    function n() {
      t.call(this), (this.state = { instance: null });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
      (n.prototype.componentDidMount = function() {
        var e = n.mountObject(this.props.ymaps.Clusterer, this.props);
        this.setState({ instance: e });
      }),
      (n.prototype.componentDidUpdate = function(e) {
        null !== this.state.instance &&
          n.updateObject(this.state.instance, e, this.props);
      }),
      (n.prototype.componentWillUnmount = function() {
        n.unmountObject(this.state.instance, this.props);
      }),
      (n.prototype.render = function() {
        return e.createElement(
          P.Provider,
          { value: this.state.instance },
          this.props.children
        );
      }),
      (n.mountObject = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          s = new e(W(t, 'options'));
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
        return G(null, o, s), s;
      }),
      (n.updateObject = function(e, t, n) {
        var o = $(n),
          r = o._events,
          a = o.instanceRef,
          s = $(t),
          i = s._events,
          p = s.instanceRef;
        if (L(n, 'options')) {
          var c = W(t, 'options'),
            u = W(n, 'options');
          c !== u && e.options.set(u);
        }
        F(e, i, r), G(p, a, e);
      }),
      (n.unmountObject = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return q(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          G(o));
      }),
      n
    );
  })(e.Component);
Re.propTypes = {
  options: g.shape({}),
  defaultOptions: g.shape({}),
  instanceRef: g.func,
  ymaps: g.object,
  parent: g.object,
  children: g.node,
};
var Te = x(M(Re, !0, ['Clusterer'])),
  Ce = (function(e) {
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
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          s = W(t, 'options', {}),
          i = W(t, 'features', {}),
          p = W(t, 'filter', null),
          c = W(t, 'objects', {}),
          u = W(t, 'clusters', {}),
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
        return G(null, o, f), f;
      }),
      (t.updateObject = function(e, t, n) {
        var o = $(n),
          r = o._events,
          a = o.instanceRef,
          s = $(t),
          i = s._events,
          p = s.instanceRef;
        if (L(n, 'options')) {
          var c = W(t, 'options'),
            u = W(n, 'options');
          c !== u && e.options.set(u);
        }
        if (L(n, 'objects')) {
          var f = W(t, 'objects'),
            l = W(n, 'objects');
          f !== l && e.objects.options.set(l);
        }
        if (L(n, 'clusters')) {
          var d = W(t, 'clusters'),
            y = W(n, 'clusters');
          d !== y && e.clusters.options.set(y);
        }
        if (L(n, 'filter')) {
          var m = W(t, 'filter'),
            h = W(n, 'filter');
          m !== h && e.setFilter(h);
        }
        if (L(n, 'features')) {
          var b = W(t, 'features'),
            v = W(n, 'features');
          b !== v && (e.remove(b), e.add(v));
        }
        F(e, i, r), G(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return q(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          G(o));
      }),
      t
    );
  })(e.Component),
  Pe = g.shape({
    id: g.oneOfType([g.number, g.string]).isRequired,
    type: g.oneOf(['Feature']).isRequired,
    geometry: g.object.isRequired,
    options: g.object,
    properties: g.object,
  }),
  xe = { type: g.oneOf(['FeatureCollection']).isRequired };
xe.features = g.arrayOf(g.oneOfType([g.shape(xe), Pe])).isRequired;
var Me = g.shape(xe),
  ke = g.oneOfType([g.arrayOf(g.oneOfType([Me, Pe])), Me]),
  Ae = g.oneOfType([g.string, g.func]),
  Ie = g.shape({}),
  De = g.shape({}),
  Ue = g.shape({});
Ce.propTypes = {
  features: ke,
  defaultFeatures: ke,
  filter: Ae,
  defaultFilter: Ae,
  options: Ie,
  defaultOptions: Ie,
  objects: De,
  defaultObjects: De,
  clusters: Ue,
  defaultClusters: Ue,
  instanceRef: g.func,
  ymaps: g.object,
  parent: g.object,
};
var $e = x(M(Ce, !0, ['ObjectManager'])),
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
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events,
          s = new e(W(t, 'geometry'), W(t, 'properties'), W(t, 'options'));
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
        return G(null, o, s), s;
      }),
      (t.updateObject = function(e, t, n) {
        var o = $(n),
          r = o._events,
          a = o.instanceRef,
          s = $(t),
          i = s._events,
          p = s.instanceRef;
        if (L(n, 'geometry')) {
          var c = W(t, 'geometry', {}),
            u = W(n, 'geometry', {});
          Array.isArray(u) && u !== c
            ? Array.isArray(u[0]) && 'number' == typeof u[1]
              ? (e.geometry.setCoordinates(u[0]), e.geometry.setRadius(u[1]))
              : e.geometry.setCoordinates(u)
            : 'object' == typeof u &&
              (u.coordinates !== c.coordinates &&
                e.geometry.setCoordinates(u.coordinates),
              u.radius !== c.radius && e.geometry.setRadius(u.radius));
        }
        if (L(n, 'properties')) {
          var f = W(t, 'properties'),
            l = W(n, 'properties');
          f !== l && e.properties.set(l);
        }
        if (L(n, 'options')) {
          var d = W(t, 'options'),
            y = W(n, 'options');
          d !== y && e.options.set(y);
        }
        F(e, i, r), G(p, a, e);
      }),
      (t.unmountObject = function(e, t) {
        var n = $(t),
          o = n.instanceRef,
          r = n.parent,
          a = n._events;
        null !== e &&
          (Object.keys(a).forEach(function(t) {
            return q(e, t, a[t]);
          }),
          r.geoObjects && 'function' == typeof r.geoObjects.remove
            ? r.geoObjects.remove(e)
            : r.remove && 'function' == typeof r.remove && r.remove(e),
          G(o));
      }),
      t
    );
  })(e.Component);
Be.propTypes = {
  instanceRef: g.func,
  ymaps: g.object,
  parent: g.object,
  name: g.oneOf([
    'GeoObject',
    'Placemark',
    'Polyline',
    'Rectangle',
    'Polygon',
    'Circle',
  ]).isRequired,
  dangerZone: g.shape({ modifyConstructor: g.func }),
};
var qe = {
  modifyConstructor: function(e) {
    function t(t, n, o) {
      e.call(this, { geometry: t, properties: n }, o);
    }
    return (t.prototype = e.prototype), t;
  },
};
function Fe(t) {
  return e.createElement(
    Be,
    Object.assign({}, t, { name: 'GeoObject', dangerZone: qe })
  );
}
var Ne = g.shape({
  type: g.oneOf(['Point', 'LineString', 'Rectangle', 'Polygon', 'Circle'])
    .isRequired,
  coordinates: g.oneOfType([
    g.arrayOf(g.number),
    g.arrayOf(g.arrayOf(g.number)),
    g.arrayOf(g.arrayOf(g.arrayOf(g.number))),
  ]).isRequired,
  radius: g.number,
});
Fe.propTypes = {
  geometry: Ne,
  defaultGeometry: Ne,
  properties: g.shape({}),
  defaultProperties: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
};
var Le = x(M(Fe, !0, ['GeoObject']));
function We(t) {
  return e.createElement(Be, Object.assign({}, t, { name: 'Circle' }));
}
var Ge = g.arrayOf(g.oneOfType([g.number, g.arrayOf(g.number)]));
We.propTypes = {
  geometry: Ge,
  defaultGeometry: Ge,
  properties: g.shape({}),
  defaultProperties: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
};
var ze = x(M(We, !0, ['Circle']));
function Ve(t) {
  return e.createElement(Be, Object.assign({}, t, { name: 'Placemark' }));
}
var Ye = g.arrayOf(g.number);
Ve.propTypes = {
  geometry: Ye,
  defaultGeometry: Ye,
  properties: g.shape({}),
  defaultProperties: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
};
var Ze = x(M(Ve, !0, ['Placemark']));
function Je(t) {
  return e.createElement(Be, Object.assign({}, t, { name: 'Polygon' }));
}
var He = g.arrayOf(g.arrayOf(g.arrayOf(g.number)));
Je.propTypes = {
  geometry: He,
  defaultGeometry: He,
  properties: g.shape({}),
  defaultProperties: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
};
var Ke = x(M(Je, !0, ['Polygon']));
function Qe(t) {
  return e.createElement(Be, Object.assign({}, t, { name: 'Polyline' }));
}
var Xe = g.arrayOf(g.arrayOf(g.number));
Qe.propTypes = {
  geometry: Xe,
  defaultGeometry: Xe,
  properties: g.shape({}),
  defaultProperties: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
};
var et = x(M(Qe, !0, ['Polyline']));
function tt(t) {
  return e.createElement(Be, Object.assign({}, t, { name: 'Rectangle' }));
}
var nt = g.arrayOf(g.arrayOf(g.number));
tt.propTypes = {
  geometry: nt,
  defaultGeometry: nt,
  properties: g.shape({}),
  defaultProperties: g.shape({}),
  options: g.shape({}),
  defaultOptions: g.shape({}),
};
var ot = x(M(tt, !0, ['Rectangle']));
export {
  M as withYMaps,
  D as YMaps,
  J as Map,
  Q as Panorama,
  te as Button,
  oe as FullscreenControl,
  ae as GeolocationControl,
  ie as ListBox,
  ce as ListBoxItem,
  fe as RouteButton,
  de as RouteEditor,
  me as RoutePanel,
  be as RulerControl,
  Oe as SearchControl,
  je as TrafficControl,
  we as TypeSelector,
  Ee as ZoomControl,
  Te as Clusterer,
  $e as ObjectManager,
  Le as GeoObject,
  ze as Circle,
  Ze as Placemark,
  Ke as Polygon,
  et as Polyline,
  ot as Rectangle,
};
//# sourceMappingURL=react-yandex-maps.esm.js.map
