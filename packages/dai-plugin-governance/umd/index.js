/*! For license information please see index.js.LICENSE.txt */
!(function webpackUniversalModuleDefinition(t, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r())
    : 'function' == typeof define && define.amd
    ? define([], r)
    : 'object' == typeof exports
    ? (exports['@makerdao/dai-plugin-governance'] = r())
    : (t['@makerdao/dai-plugin-governance'] = r());
})(window, function() {
  return (function(t) {
    var r = {};
    function __webpack_require__(i) {
      if (r[i]) return r[i].exports;
      var a = (r[i] = { i: i, l: !1, exports: {} });
      return (
        t[i].call(a.exports, a, a.exports, __webpack_require__),
        (a.l = !0),
        a.exports
      );
    }
    return (
      (__webpack_require__.m = t),
      (__webpack_require__.c = r),
      (__webpack_require__.d = function(t, r, i) {
        __webpack_require__.o(t, r) ||
          Object.defineProperty(t, r, { enumerable: !0, get: i });
      }),
      (__webpack_require__.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (__webpack_require__.t = function(t, r) {
        if ((1 & r && (t = __webpack_require__(t)), 8 & r)) return t;
        if (4 & r && 'object' == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (__webpack_require__.r(i),
          Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
          2 & r && 'string' != typeof t)
        )
          for (var a in t)
            __webpack_require__.d(
              i,
              a,
              function(r) {
                return t[r];
              }.bind(null, a)
            );
        return i;
      }),
      (__webpack_require__.n = function(t) {
        var r =
          t && t.__esModule
            ? function getDefault() {
                return t.default;
              }
            : function getModuleExports() {
                return t;
              };
        return __webpack_require__.d(r, 'a', r), r;
      }),
      (__webpack_require__.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
      }),
      (__webpack_require__.p = ''),
      __webpack_require__((__webpack_require__.s = 81))
    );
  })([
    function(t, r) {
      (t.exports = function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      var i = (t.exports = { version: '2.6.12' });
      'number' == typeof __e && (__e = i);
    },
    function(t, r, i) {
      var a = i(39)('wks'),
        u = i(30),
        c = i(7).Symbol,
        l = 'function' == typeof c;
      (t.exports = function(t) {
        return a[t] || (a[t] = (l && c[t]) || (l ? c : u)('Symbol.' + t));
      }).store = a;
    },
    function(t, r) {
      (t.exports = function _classCallCheck(t, r) {
        if (!(t instanceof r))
          throw new TypeError('Cannot call a class as a function');
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      function _defineProperties(t, r) {
        for (var i = 0; i < r.length; i++) {
          var a = r[i];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a);
        }
      }
      (t.exports = function _createClass(t, r, i) {
        return (
          r && _defineProperties(t.prototype, r),
          i && _defineProperties(t, i),
          t
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.MAINNET_URL = r.STAGING_MAINNET_URL = r.KOVAN_URL = r.LOCAL_URL = r.ZERO_ADDRESS = r.PAUSE = r.END = r.ESM = r.CHIEF = r.BATCH_POLLING = r.POLLING = r.VOTE_PROXY_FACTORY = r.IOU = r.MKR = void 0);
      var a = i(51),
        u = (0, a.createCurrency)('MKR');
      r.MKR = u;
      var c = (0, a.createCurrency)('IOU');
      r.IOU = c;
      r.VOTE_PROXY_FACTORY = 'VOTE_PROXY_FACTORY';
      r.POLLING = 'POLLING';
      r.BATCH_POLLING = 'BATCH_POLLING';
      r.CHIEF = 'CHIEF';
      r.ESM = 'ESM';
      r.END = 'END';
      r.PAUSE = 'PAUSE';
      r.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
      r.LOCAL_URL = 'http://localhost:3001/v1';
      r.KOVAN_URL = 'https://api.hotdao.com/gov-kovan/v1';
      r.STAGING_MAINNET_URL = 'https://qa-gov-db.makerfoundation.com/api/v1';
      r.MAINNET_URL = 'https://api.hotdao.com/gov-mainnet/v1';
    },
    function(t, r, i) {
      var a = i(7),
        u = i(1),
        c = i(33),
        l = i(18),
        p = i(13),
        $export = function(t, r, i) {
          var d,
            y,
            h,
            v = t & $export.F,
            g = t & $export.G,
            m = t & $export.S,
            b = t & $export.P,
            _ = t & $export.B,
            w = t & $export.W,
            x = g ? u : u[r] || (u[r] = {}),
            O = x.prototype,
            S = g ? a : m ? a[r] : (a[r] || {}).prototype;
          for (d in (g && (i = r), i))
            ((y = !v && S && void 0 !== S[d]) && p(x, d)) ||
              ((h = y ? S[d] : i[d]),
              (x[d] =
                g && 'function' != typeof S[d]
                  ? i[d]
                  : _ && y
                  ? c(h, a)
                  : w && S[d] == h
                  ? (function(t) {
                      var F = function(r, i, a) {
                        if (this instanceof t) {
                          switch (arguments.length) {
                            case 0:
                              return new t();
                            case 1:
                              return new t(r);
                            case 2:
                              return new t(r, i);
                          }
                          return new t(r, i, a);
                        }
                        return t.apply(this, arguments);
                      };
                      return (F.prototype = t.prototype), F;
                    })(h)
                  : b && 'function' == typeof h
                  ? c(Function.call, h)
                  : h),
              b &&
                (((x.virtual || (x.virtual = {}))[d] = h),
                t & $export.R && O && !O[d] && l(O, d, h)));
        };
      ($export.F = 1),
        ($export.G = 2),
        ($export.S = 4),
        ($export.P = 8),
        ($export.B = 16),
        ($export.W = 32),
        ($export.U = 64),
        ($export.R = 128),
        (t.exports = $export);
    },
    function(t, r) {
      var i = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = i);
    },
    function(t, r, i) {
      var a = i(12),
        u = i(53),
        c = i(34),
        l = Object.defineProperty;
      r.f = i(9)
        ? Object.defineProperty
        : function defineProperty(t, r, i) {
            if ((a(t), (r = c(r, !0)), a(i), u))
              try {
                return l(t, r, i);
              } catch (t) {}
            if ('get' in i || 'set' in i)
              throw TypeError('Accessors not supported!');
            return 'value' in i && (t[r] = i.value), t;
          };
    },
    function(t, r, i) {
      t.exports = !i(20)(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7;
            }
          }).a
        );
      });
    },
    function(t, r, i) {
      t.exports = i(137);
    },
    function(t, r) {
      function asyncGeneratorStep(t, r, i, a, u, c, l) {
        try {
          var p = t[c](l),
            d = p.value;
        } catch (t) {
          return void i(t);
        }
        p.done ? r(d) : Promise.resolve(d).then(a, u);
      }
      (t.exports = function _asyncToGenerator(t) {
        return function() {
          var r = this,
            i = arguments;
          return new Promise(function(a, u) {
            var c = t.apply(r, i);
            function _next(t) {
              asyncGeneratorStep(c, a, u, _next, _throw, 'next', t);
            }
            function _throw(t) {
              asyncGeneratorStep(c, a, u, _next, _throw, 'throw', t);
            }
            _next(void 0);
          });
        };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      var a = i(19);
      t.exports = function(t) {
        if (!a(t)) throw TypeError(t + ' is not an object!');
        return t;
      };
    },
    function(t, r) {
      var i = {}.hasOwnProperty;
      t.exports = function(t, r) {
        return i.call(t, r);
      };
    },
    function(t, r, i) {
      var a = i(141);
      (t.exports = function _inherits(t, r) {
        if ('function' != typeof r && null !== r)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(r && r.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          r && a(t, r);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      var a = i(32).default,
        u = i(72);
      (t.exports = function _possibleConstructorReturn(t, r) {
        return !r || ('object' !== a(r) && 'function' != typeof r) ? u(t) : r;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      function _getPrototypeOf(r) {
        return (
          (t.exports = _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          _getPrototypeOf(r)
        );
      }
      (t.exports = _getPrototypeOf),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      !(function webpackUniversalModuleDefinition(r, i) {
        t.exports = i();
      })(window, function() {
        return (function(t) {
          var r = {};
          function __webpack_require__(i) {
            if (r[i]) return r[i].exports;
            var a = (r[i] = { i: i, l: !1, exports: {} });
            return (
              t[i].call(a.exports, a, a.exports, __webpack_require__),
              (a.l = !0),
              a.exports
            );
          }
          return (
            (__webpack_require__.m = t),
            (__webpack_require__.c = r),
            (__webpack_require__.d = function(t, r, i) {
              __webpack_require__.o(t, r) ||
                Object.defineProperty(t, r, { enumerable: !0, get: i });
            }),
            (__webpack_require__.r = function(t) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: 'Module'
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (__webpack_require__.t = function(t, r) {
              if ((1 & r && (t = __webpack_require__(t)), 8 & r)) return t;
              if (4 & r && 'object' == typeof t && t && t.__esModule) return t;
              var i = Object.create(null);
              if (
                (__webpack_require__.r(i),
                Object.defineProperty(i, 'default', {
                  enumerable: !0,
                  value: t
                }),
                2 & r && 'string' != typeof t)
              )
                for (var a in t)
                  __webpack_require__.d(
                    i,
                    a,
                    function(r) {
                      return t[r];
                    }.bind(null, a)
                  );
              return i;
            }),
            (__webpack_require__.n = function(t) {
              var r =
                t && t.__esModule
                  ? function getDefault() {
                      return t.default;
                    }
                  : function getModuleExports() {
                      return t;
                    };
              return __webpack_require__.d(r, 'a', r), r;
            }),
            (__webpack_require__.o = function(t, r) {
              return Object.prototype.hasOwnProperty.call(t, r);
            }),
            (__webpack_require__.p = ''),
            __webpack_require__((__webpack_require__.s = 32))
          );
        })([
          function(t, r) {
            t.exports = function _interopRequireDefault(t) {
              return t && t.__esModule ? t : { default: t };
            };
          },
          function(t, r) {
            t.exports = function _classCallCheck(t, r) {
              if (!(t instanceof r))
                throw new TypeError('Cannot call a class as a function');
            };
          },
          function(t, r) {
            function _getPrototypeOf(r) {
              return (
                (t.exports = _getPrototypeOf = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function _getPrototypeOf(t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                    }),
                _getPrototypeOf(r)
              );
            }
            t.exports = _getPrototypeOf;
          },
          function(t, r) {
            function _typeof(r) {
              return (
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? (t.exports = _typeof = function _typeof(t) {
                      return typeof t;
                    })
                  : (t.exports = _typeof = function _typeof(t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
                _typeof(r)
              );
            }
            t.exports = _typeof;
          },
          function(t, r) {
            function _defineProperties(t, r) {
              for (var i = 0; i < r.length; i++) {
                var a = r[i];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(t, a.key, a);
              }
            }
            t.exports = function _createClass(t, r, i) {
              return (
                r && _defineProperties(t.prototype, r),
                i && _defineProperties(t, i),
                t
              );
            };
          },
          function(t, r, i) {
            var a = i(14);
            t.exports = function _inherits(t, r) {
              if ('function' != typeof r && null !== r)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (t.prototype = Object.create(r && r.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                r && a(t, r);
            };
          },
          function(t, r, i) {
            var a = i(3),
              u = i(36);
            t.exports = function _possibleConstructorReturn(t, r) {
              return !r || ('object' !== a(r) && 'function' != typeof r)
                ? u(t)
                : r;
            };
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.serviceTypeTransitions = r.default = void 0);
            var u = a(i(16));
            r.default = {
              LOCAL: 'LOCAL',
              PUBLIC: 'PUBLIC',
              PRIVATE: 'PRIVATE'
            };
            var c = {
              LOCAL: {
                CREATED: [u.default.INITIALIZING],
                INITIALIZING: [u.default.CREATED, u.default.READY],
                READY: [u.default.ERROR],
                ERROR: []
              },
              PUBLIC: {
                CREATED: [u.default.INITIALIZING],
                INITIALIZING: [u.default.CREATED, u.default.OFFLINE],
                OFFLINE: [u.default.CONNECTING],
                CONNECTING: [u.default.OFFLINE, u.default.READY],
                READY: [u.default.OFFLINE, u.default.ERROR],
                ERROR: []
              },
              PRIVATE: {
                CREATED: [u.default.INITIALIZING],
                INITIALIZING: [u.default.CREATED, u.default.OFFLINE],
                OFFLINE: [u.default.CONNECTING],
                CONNECTING: [u.default.OFFLINE, u.default.ONLINE],
                ONLINE: [u.default.OFFLINE, u.default.AUTHENTICATING],
                AUTHENTICATING: [u.default.ONLINE, u.default.READY],
                READY: [u.default.OFFLINE, u.default.ONLINE, u.default.ERROR],
                ERROR: []
              }
            };
            r.serviceTypeTransitions = c;
          },
          function(t, r, i) {
            var a = i(26),
              u =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
              c = a || u || Function('return this')();
            t.exports = c;
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0);
            var u = a(i(1)),
              c = a(i(4)),
              l = a(i(13)),
              p = a(i(7)),
              d = a(i(16));
            function _defineLifeCycleMethods(t) {
              void 0 === this.initialize && (this.initialize = function() {}),
                t !== p.default.LOCAL &&
                  (void 0 === this.connect && (this.connect = function() {}),
                  (this.disconnect = function() {})),
                t === p.default.PRIVATE &&
                  (void 0 === this.authenticate &&
                    (this.authenticate = function() {}),
                  (this.deauthenticate = function() {}));
            }
            function _buildServiceManager(t, r, i) {
              var a = this,
                u =
                  t === p.default.LOCAL
                    ? null
                    : function(t) {
                        return (a.disconnect = t), a.connect();
                      },
                c =
                  t !== p.default.PRIVATE
                    ? null
                    : function(t) {
                        return (a.deauthenticate = t), a.authenticate();
                      };
              return new l.default(
                r,
                i,
                function(t) {
                  return a.initialize(t);
                },
                u,
                c
              );
            }
            function _installLifeCycleHooks(t) {
              var r = this;
              t.onInitialized(function() {
                t.type() !== p.default.LOCAL &&
                  t.dependencies().forEach(function(t) {
                    r.get(t)
                      .manager()
                      .onDisconnected(function() {
                        return r.disconnect();
                      });
                  }),
                  t.type() === p.default.PRIVATE &&
                    t.dependencies().forEach(function(t) {
                      r.get(t)
                        .manager()
                        .onDeauthenticated(function() {
                          return r.deauthenticate();
                        });
                    });
              });
            }
            function _guardLifeCycleMethods() {
              var t = {
                initialize: this.initialize,
                connect: this.connect,
                authenticate: this.authenticate
              };
              (this.initialize = function(r) {
                if (this.manager().state() !== d.default.INITIALIZING)
                  throw new Error(
                    'Expected state INITIALIZING, but got ' +
                      this.manager().state() +
                      '. Did you mean to call service.manager().initialize() instead of service.initialize()?'
                  );
                return t.initialize.apply(this, [r]);
              }),
                void 0 !== t.connect &&
                  (this.connect = function() {
                    if (this.manager().state() !== d.default.CONNECTING)
                      throw new Error(
                        'Expected state CONNECTING, but got ' +
                          this.manager().state() +
                          '. Did you mean to call service.manager().connect() instead of service.connect()?'
                      );
                    return t.connect.apply(this);
                  }),
                void 0 !== t.authenticate &&
                  (this.authenticate = function() {
                    if (this.manager().state() !== d.default.AUTHENTICATING)
                      throw new Error(
                        'Expected state AUTHENTICATING, but got ' +
                          this.manager().state() +
                          '. Did you mean to call service.manager().authenticate() instead of service.authenticate()?'
                      );
                    return t.authenticate.apply(this);
                  });
            }
            var y = (function() {
              function ServiceBase(t, r) {
                var i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
                if (
                  ((0, u.default)(this, ServiceBase),
                  r || (r = this.constructor.role),
                  this.constructor.dependencies &&
                    (i = this.constructor.dependencies),
                  void 0 === p.default[t])
                )
                  throw new Error('Invalid ServiceType: ' + t);
                _defineLifeCycleMethods.call(this, t),
                  (this._serviceManager = _buildServiceManager.call(
                    this,
                    t,
                    r,
                    i
                  )),
                  _installLifeCycleHooks.call(this, this._serviceManager),
                  _guardLifeCycleMethods.call(this);
              }
              return (
                (0, c.default)(ServiceBase, [
                  {
                    key: 'manager',
                    value: function manager() {
                      return this._serviceManager;
                    }
                  },
                  {
                    key: 'get',
                    value: function get(t) {
                      return this._serviceManager.dependency(t);
                    }
                  }
                ]),
                ServiceBase
              );
            })();
            r.default = y;
          },
          function(t, r, i) {
            var a = i(17)(Object, 'create');
            t.exports = a;
          },
          function(t, r, i) {
            var a = i(73);
            t.exports = function assocIndexOf(t, r) {
              for (var i = t.length; i--; ) if (a(t[i][0], r)) return i;
              return -1;
            };
          },
          function(t, r, i) {
            var a = i(79);
            t.exports = function getMapData(t, r) {
              var i = t.__data__;
              return a(r) ? i['string' == typeof r ? 'string' : 'hash'] : i.map;
            };
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.DependencyNotResolvedError = r.UnknownDependencyError = r.InvalidServiceError = r.default = void 0);
            var u = a(i(3)),
              c = a(i(34)),
              l = a(i(4)),
              p = a(i(1)),
              d = a(i(5)),
              y = a(i(6)),
              h = a(i(2)),
              v = a(i(15)),
              g = a(i(40));
            function _createSuper(t) {
              var r = (function _isNativeReflectConstruct() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })();
              return function() {
                var i,
                  a = (0, h.default)(t);
                if (r) {
                  var u = (0, h.default)(this).constructor;
                  i = Reflect.construct(a, arguments, u);
                } else i = a.apply(this, arguments);
                return (0, y.default)(this, i);
              };
            }
            var m = (function(t) {
              (0, d.default)(InvalidServiceError, t);
              var r = _createSuper(InvalidServiceError);
              function InvalidServiceError(t) {
                return (
                  (0, p.default)(this, InvalidServiceError), r.call(this, t)
                );
              }
              return InvalidServiceError;
            })((0, v.default)(Error));
            r.InvalidServiceError = m;
            var b = (function(t) {
              (0, d.default)(UnknownDependencyError, t);
              var r = _createSuper(UnknownDependencyError);
              function UnknownDependencyError(t, i) {
                return (
                  (0, p.default)(this, UnknownDependencyError),
                  r.call(
                    this,
                    'Injected service ' + i + ' is not a dependency of ' + t
                  )
                );
              }
              return UnknownDependencyError;
            })((0, v.default)(Error));
            r.UnknownDependencyError = b;
            var _ = (function(t) {
              (0, d.default)(DependencyNotResolvedError, t);
              var r = _createSuper(DependencyNotResolvedError);
              function DependencyNotResolvedError(t, i) {
                return (
                  (0, p.default)(this, DependencyNotResolvedError),
                  r.call(
                    this,
                    'Dependency ' + i + ' of service ' + t + ' is unavailable.'
                  )
                );
              }
              return DependencyNotResolvedError;
            })((0, v.default)(Error));
            function _waitForDependencies(t) {
              return Promise.all(
                this.dependencies().map(function(r) {
                  return t(r);
                })
              );
            }
            r.DependencyNotResolvedError = _;
            var w = (function(t) {
              (0, d.default)(ServiceManager, t);
              var r = _createSuper(ServiceManager);
              function ServiceManager(t) {
                var i,
                  a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  u =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  c =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : null,
                  l =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : null;
                if (
                  ((0, p.default)(this, ServiceManager),
                  (i = r.call(this, u, c, l)),
                  !t)
                )
                  throw new Error('Service name must not be empty.');
                return (
                  (i._name = t),
                  (i._dependencies = a),
                  (i._injections = {}),
                  a.forEach(function(t) {
                    return (i._injections[t] = null);
                  }),
                  i
                );
              }
              return (
                (0, l.default)(ServiceManager, null, [
                  {
                    key: 'isValidService',
                    value: function isValidService(t) {
                      return (
                        null !== t &&
                        'object' === (0, u.default)(t) &&
                        'function' == typeof t.manager
                      );
                    }
                  }
                ]),
                (0, l.default)(ServiceManager, [
                  {
                    key: 'name',
                    value: function name() {
                      return this._name;
                    }
                  },
                  {
                    key: 'dependencies',
                    value: function dependencies() {
                      return this._dependencies;
                    }
                  },
                  {
                    key: 'inject',
                    value: function inject(t, r) {
                      if (void 0 === this._injections[t])
                        throw new b(this.name(), t);
                      if (!ServiceManager.isValidService(r))
                        throw new m(
                          'Cannot inject invalid service in ' + this.name()
                        );
                      return (this._injections[t] = r), this;
                    }
                  },
                  {
                    key: 'dependency',
                    value: function dependency(t) {
                      if (!this._injections[t]) throw new _(this.name(), t);
                      return this._injections[t];
                    }
                  },
                  {
                    key: 'initialize',
                    value: function initialize() {
                      var t = this;
                      return this.initializeDependencies().then(function() {
                        return (0, c.default)(
                          (0, h.default)(ServiceManager.prototype),
                          'initialize',
                          t
                        ).call(t, t._settings);
                      });
                    }
                  },
                  {
                    key: 'connect',
                    value: function connect() {
                      var t = this;
                      return this.connectDependencies().then(function() {
                        return (0, c.default)(
                          (0, h.default)(ServiceManager.prototype),
                          'connect',
                          t
                        ).call(t);
                      });
                    }
                  },
                  {
                    key: 'authenticate',
                    value: function authenticate() {
                      var t = this;
                      return this.authenticateDependencies().then(function() {
                        return (0, c.default)(
                          (0, h.default)(ServiceManager.prototype),
                          'authenticate',
                          t
                        ).call(t);
                      });
                    }
                  },
                  {
                    key: 'initializeDependencies',
                    value: function initializeDependencies() {
                      var t = this;
                      return _waitForDependencies.call(this, function(r) {
                        return t
                          .dependency(r)
                          .manager()
                          .initialize();
                      });
                    }
                  },
                  {
                    key: 'connectDependencies',
                    value: function connectDependencies() {
                      var t = this;
                      return _waitForDependencies.call(this, function(r) {
                        return t
                          .dependency(r)
                          .manager()
                          .connect();
                      });
                    }
                  },
                  {
                    key: 'authenticateDependencies',
                    value: function authenticateDependencies() {
                      var t = this;
                      return _waitForDependencies.call(this, function(r) {
                        return t
                          .dependency(r)
                          .manager()
                          .authenticate();
                      });
                    }
                  },
                  {
                    key: 'createService',
                    value: function createService() {
                      var t = this;
                      return {
                        manager: function manager() {
                          return t;
                        }
                      };
                    }
                  }
                ]),
                ServiceManager
              );
            })(g.default);
            r.default = w;
          },
          function(t, r) {
            function _setPrototypeOf(r, i) {
              return (
                (t.exports = _setPrototypeOf =
                  Object.setPrototypeOf ||
                  function _setPrototypeOf(t, r) {
                    return (t.__proto__ = r), t;
                  }),
                _setPrototypeOf(r, i)
              );
            }
            t.exports = _setPrototypeOf;
          },
          function(t, r, i) {
            var a = i(2),
              u = i(14),
              c = i(37),
              l = i(38);
            function _wrapNativeSuper(r) {
              var i = 'function' == typeof Map ? new Map() : void 0;
              return (
                (t.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
                  if (null === t || !c(t)) return t;
                  if ('function' != typeof t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  if (void 0 !== i) {
                    if (i.has(t)) return i.get(t);
                    i.set(t, Wrapper);
                  }
                  function Wrapper() {
                    return l(t, arguments, a(this).constructor);
                  }
                  return (
                    (Wrapper.prototype = Object.create(t.prototype, {
                      constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                      }
                    })),
                    u(Wrapper, t)
                  );
                }),
                _wrapNativeSuper(r)
              );
            }
            t.exports = _wrapNativeSuper;
          },
          function(t, r, i) {
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0);
            r.default = {
              CREATED: 'CREATED',
              INITIALIZING: 'INITIALIZING',
              OFFLINE: 'OFFLINE',
              CONNECTING: 'CONNECTING',
              ONLINE: 'ONLINE',
              AUTHENTICATING: 'AUTHENTICATING',
              READY: 'READY',
              ERROR: 'ERROR'
            };
          },
          function(t, r, i) {
            var a = i(58),
              u = i(65);
            t.exports = function getNative(t, r) {
              var i = u(t, r);
              return a(i) ? i : void 0;
            };
          },
          function(t, r, i) {
            var a = i(25),
              u = i(60),
              c = i(61),
              l = a ? a.toStringTag : void 0;
            t.exports = function baseGetTag(t) {
              return null == t
                ? void 0 === t
                  ? '[object Undefined]'
                  : '[object Null]'
                : l && l in Object(t)
                ? u(t)
                : c(t);
            };
          },
          function(t, r) {
            t.exports = function isObjectLike(t) {
              return null != t && 'object' == typeof t;
            };
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = function standardizeConfig(t, r, i) {
                if (r instanceof Array)
                  return 'boolean' == typeof r[0] && i
                    ? [resolveNameForBoolean(t, r[0], i), r[1]]
                    : r;
                var a,
                  l = {};
                switch ((0, u.default)(r)) {
                  case 'string':
                  case 'function':
                    a = r;
                    break;
                  case 'object':
                    r instanceof c.default
                      ? (a = r)
                      : ((a = !i || resolveNameForBoolean(t, !0, i)), (l = r));
                    break;
                  case 'boolean':
                    a = i ? resolveNameForBoolean(t, r, i) : r;
                    break;
                  default:
                    throw new Error(
                      'could not parse settings for '.concat(t, ':'),
                      r
                    );
                }
                return [a, l];
              });
            var u = a(i(3)),
              c = a(i(9));
            function resolveNameForBoolean(t, r, i) {
              var a,
                u = i.defaults,
                c = i.disabled;
              if (r) {
                if (!(a = u[t]))
                  throw new Error(
                    'The "'.concat(t, '" service has no default')
                  );
              } else if (!(a = c[t]))
                throw new Error(
                  'The "'.concat(t, '" service cannot be disabled')
                );
              return a;
            }
          },
          function(t, r, i) {
            var a = i(3);
            function _getRequireWildcardCache() {
              if ('function' != typeof WeakMap) return null;
              var t = new WeakMap();
              return (
                (_getRequireWildcardCache = function _getRequireWildcardCache() {
                  return t;
                }),
                t
              );
            }
            t.exports = function _interopRequireWildcard(t) {
              if (t && t.__esModule) return t;
              if (null === t || ('object' !== a(t) && 'function' != typeof t))
                return { default: t };
              var r = _getRequireWildcardCache();
              if (r && r.has(t)) return r.get(t);
              var i = {},
                u = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var c in t)
                if (Object.prototype.hasOwnProperty.call(t, c)) {
                  var l = u ? Object.getOwnPropertyDescriptor(t, c) : null;
                  l && (l.get || l.set)
                    ? Object.defineProperty(i, c, l)
                    : (i[c] = t[c]);
                }
              return (i.default = t), r && r.set(t, i), i;
            };
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = r.IllegalStateError = void 0);
            var u = a(i(3)),
              c = a(i(4)),
              l = a(i(1)),
              p = a(i(5)),
              d = a(i(6)),
              y = a(i(2));
            var h = (function(t) {
              (0, p.default)(IllegalStateError, t);
              var r = (function _createSuper(t) {
                var r = (function _isNativeReflectConstruct() {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function() {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function() {
                  var i,
                    a = (0, y.default)(t);
                  if (r) {
                    var u = (0, y.default)(this).constructor;
                    i = Reflect.construct(a, arguments, u);
                  } else i = a.apply(this, arguments);
                  return (0, d.default)(this, i);
                };
              })(IllegalStateError);
              function IllegalStateError() {
                return (
                  (0, l.default)(this, IllegalStateError),
                  r.apply(this, arguments)
                );
              }
              return IllegalStateError;
            })((0, a(i(15)).default)(Error));
            r.IllegalStateError = h;
            var v = (function() {
              function StateMachine(t, r) {
                if (
                  ((0, l.default)(this, StateMachine),
                  'object' !== (0, u.default)(r))
                )
                  throw new Error(
                    'StateMachine transitions parameter must be an object.'
                  );
                if (
                  Object.keys(r).filter(function(t) {
                    return r.hasOwnProperty(t) && !(r[t] instanceof Array);
                  }).length > 0
                )
                  throw new Error(
                    'Illegal StateMachine transition found: not an array.'
                  );
                if (
                  Object.keys(r).filter(function(t) {
                    return (
                      r.hasOwnProperty(t) &&
                      r[t].filter(function(t) {
                        return !r[t];
                      }).length > 0
                    );
                  }).length > 0
                )
                  throw new Error(
                    'Illegal StateMachine transition found: target state not in transition map.'
                  );
                if (!(r[t] instanceof Array))
                  throw new Error(
                    'Initial state ' + t + ' is not set in the transitions map.'
                  );
                (this._state = t),
                  (this._nextStates = r),
                  (this._stateChangedHandlers = []);
              }
              return (
                (0, c.default)(StateMachine, [
                  {
                    key: 'onStateChanged',
                    value: function onStateChanged(t) {
                      this._stateChangedHandlers.push(t);
                    }
                  },
                  {
                    key: 'state',
                    value: function state() {
                      return this._state;
                    }
                  },
                  {
                    key: 'inState',
                    value: function inState(t) {
                      return (
                        t instanceof Array || (t = [t]),
                        t.indexOf(this._state) >= 0
                      );
                    }
                  },
                  {
                    key: 'assertState',
                    value: function assertState(t) {
                      var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : '';
                      if (!this.inState(t))
                        throw new h(
                          'Illegal operation for state ' +
                            this._state +
                            (r.length > 0 ? ': ' + r : '')
                        );
                    }
                  },
                  {
                    key: 'transitionTo',
                    value: function transitionTo(t) {
                      if (void 0 === this._nextStates[t])
                        throw new h('Cannot set illegal state: ' + t);
                      if (t !== this._state) {
                        if (this._nextStates[this._state].indexOf(t) < 0)
                          throw new h(
                            'Illegal state transition: ' +
                              this._state +
                              ' to ' +
                              t
                          );
                        var r = this._state;
                        (this._state = t),
                          this._stateChangedHandlers.forEach(function(i) {
                            return i(r, t);
                          });
                      }
                      return this;
                    }
                  }
                ]),
                StateMachine
              );
            })();
            r.default = v;
          },
          function(t, r, i) {
            var a = i(52);
            t.exports = function uniq(t) {
              return t && t.length ? a(t) : [];
            };
          },
          function(t, r, i) {
            var a = i(18),
              u = i(27);
            t.exports = function isFunction(t) {
              if (!u(t)) return !1;
              var r = a(t);
              return (
                '[object Function]' == r ||
                '[object GeneratorFunction]' == r ||
                '[object AsyncFunction]' == r ||
                '[object Proxy]' == r
              );
            };
          },
          function(t, r, i) {
            var a = i(8).Symbol;
            t.exports = a;
          },
          function(t, r, i) {
            (function(r) {
              var i = 'object' == typeof r && r && r.Object === Object && r;
              t.exports = i;
            }.call(this, i(59)));
          },
          function(t, r) {
            t.exports = function isObject(t) {
              var r = typeof t;
              return null != t && ('object' == r || 'function' == r);
            };
          },
          function(t, r) {
            t.exports = function setToArray(t) {
              var r = -1,
                i = Array(t.size);
              return (
                t.forEach(function(t) {
                  i[++r] = t;
                }),
                i
              );
            };
          },
          function(t, r, i) {
            var a = i(21),
              u = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.orderServices = orderServices),
              Object.defineProperty(r, 'InvalidServiceError', {
                enumerable: !0,
                get: function get() {
                  return _.InvalidServiceError;
                }
              }),
              (r.ServiceNotFoundError = r.ServiceAlreadyRegisteredError = r.ExtractedServiceError = r.default = void 0);
            var c = u(i(95)),
              l = u(i(97)),
              p = u(i(4)),
              d = u(i(1)),
              y = u(i(5)),
              h = u(i(6)),
              v = u(i(2)),
              g = u(i(15)),
              m = u(i(98)),
              b = u(i(23)),
              _ = a(i(13)),
              w = u(i(119));
            function _createForOfIteratorHelper(t) {
              if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
                if (
                  Array.isArray(t) ||
                  (t = (function _unsupportedIterableToArray(t, r) {
                    if (t) {
                      if ('string' == typeof t) return _arrayLikeToArray(t, r);
                      var i = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        'Object' === i &&
                          t.constructor &&
                          (i = t.constructor.name),
                        'Map' === i || 'Set' === i
                          ? Array.from(t)
                          : 'Arguments' === i ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                          ? _arrayLikeToArray(t, r)
                          : void 0
                      );
                    }
                  })(t))
                ) {
                  var r = 0,
                    i = function F() {};
                  return {
                    s: i,
                    n: function n() {
                      return r >= t.length
                        ? { done: !0 }
                        : { done: !1, value: t[r++] };
                    },
                    e: function e(t) {
                      throw t;
                    },
                    f: i
                  };
                }
                throw new TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              }
              var a,
                u,
                c = !0,
                l = !1;
              return {
                s: function s() {
                  a = t[Symbol.iterator]();
                },
                n: function n() {
                  var t = a.next();
                  return (c = t.done), t;
                },
                e: function e(t) {
                  (l = !0), (u = t);
                },
                f: function f() {
                  try {
                    c || null == a.return || a.return();
                  } finally {
                    if (l) throw u;
                  }
                }
              };
            }
            function _arrayLikeToArray(t, r) {
              (null == r || r > t.length) && (r = t.length);
              for (var i = 0, a = new Array(r); i < r; i++) a[i] = t[i];
              return a;
            }
            function _createSuper(t) {
              var r = (function _isNativeReflectConstruct() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function() {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })();
              return function() {
                var i,
                  a = (0, v.default)(t);
                if (r) {
                  var u = (0, v.default)(this).constructor;
                  i = Reflect.construct(a, arguments, u);
                } else i = a.apply(this, arguments);
                return (0, h.default)(this, i);
              };
            }
            var x = (function(t) {
              (0, y.default)(ServiceAlreadyRegisteredError, t);
              var r = _createSuper(ServiceAlreadyRegisteredError);
              function ServiceAlreadyRegisteredError(t) {
                return (
                  (0, d.default)(this, ServiceAlreadyRegisteredError),
                  r.call(
                    this,
                    "Service with name '" +
                      t +
                      "' is already registered with this container."
                  )
                );
              }
              return ServiceAlreadyRegisteredError;
            })((0, g.default)(Error));
            r.ServiceAlreadyRegisteredError = x;
            var O = (function(t) {
              (0, y.default)(ServiceNotFoundError, t);
              var r = _createSuper(ServiceNotFoundError);
              function ServiceNotFoundError(t) {
                return (
                  (0, d.default)(this, ServiceNotFoundError),
                  r.call(
                    this,
                    "Service with name '" +
                      t +
                      "' cannot be found in this container."
                  )
                );
              }
              return ServiceNotFoundError;
            })((0, g.default)(Error));
            r.ServiceNotFoundError = O;
            var S = (function(t) {
              (0, y.default)(ExtractedServiceError, t);
              var r = _createSuper(ExtractedServiceError);
              function ExtractedServiceError(t) {
                return (
                  (0, d.default)(this, ExtractedServiceError),
                  r.call(
                    this,
                    "Service with name '" +
                      t +
                      "' has been extracted from the core dai.js library into a discrete plugin. Please refer to the documentation here to install and add it to your configuration: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins) \n\n"
                  )
                );
              }
              return ExtractedServiceError;
            })((0, g.default)(Error));
            function orderServices(t) {
              var r,
                i = [],
                a = [],
                u = _createForOfIteratorHelper(t);
              try {
                var c = function _loop() {
                  var t = r.value,
                    u = t.manager().name(),
                    c = t.manager().dependencies();
                  0 === c.length
                    ? a.push(u)
                    : c.forEach(function(t) {
                        return i.push([t, u]);
                      });
                };
                for (u.s(); !(r = u.n()).done; ) c();
              } catch (t) {
                u.e(t);
              } finally {
                u.f();
              }
              return (0, b.default)((0, w.default)(i).concat(a));
            }
            r.ExtractedServiceError = S;
            var k = (function() {
              function Container() {
                (0, d.default)(this, Container),
                  (this._services = {}),
                  (this.isAuthenticated = !1);
              }
              var t;
              return (
                (0, p.default)(Container, [
                  {
                    key: 'register',
                    value: function register(t) {
                      var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      if (!_.default.isValidService(t))
                        throw new _.InvalidServiceError(
                          'Service must be an object with manager() method returning a valid ServiceManager'
                        );
                      r = r || t.manager().name();
                      var i = this.service(r, !1);
                      if (void 0 !== i && i !== t) throw new x(r);
                      return (this._services[r] = t), this;
                    }
                  },
                  {
                    key: 'service',
                    value: function service(t) {
                      var r =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        i = ['exchange'];
                      if (!t) throw new Error('Provide a service name.');
                      if (!this._services[t] && r && i.includes(t))
                        throw new S(t);
                      if (!this._services[t] && r) throw new O(t);
                      return this._services[t];
                    }
                  },
                  {
                    key: 'getRegisteredServiceNames',
                    value: function getRegisteredServiceNames() {
                      return Object.keys(this._services);
                    }
                  },
                  {
                    key: 'injectDependencies',
                    value: function injectDependencies() {
                      var t,
                        r = _createForOfIteratorHelper(
                          (0, m.default)(this._services)
                        );
                      try {
                        for (r.s(); !(t = r.n()).done; ) {
                          var i,
                            a = t.value.manager(),
                            u = _createForOfIteratorHelper(a.dependencies());
                          try {
                            for (u.s(); !(i = u.n()).done; ) {
                              var c = i.value;
                              if (!this._services[c]) throw new O(c);
                              a.inject(c, this._services[c]);
                            }
                          } catch (t) {
                            u.e(t);
                          } finally {
                            u.f();
                          }
                        }
                      } catch (t) {
                        r.e(t);
                      } finally {
                        r.f();
                      }
                    }
                  },
                  {
                    key: 'initialize',
                    value: function initialize() {
                      return this._waitForServices(function(t) {
                        return t.manager().initialize();
                      });
                    }
                  },
                  {
                    key: 'connect',
                    value: function connect() {
                      return this._waitForServices(function(t) {
                        return t.manager().connect();
                      });
                    }
                  },
                  {
                    key: 'authenticate',
                    value: function authenticate() {
                      var t = this;
                      return this._waitForServices(function(t) {
                        return t.manager().authenticate();
                      }).then(function() {
                        t.isAuthenticated = !0;
                      });
                    }
                  },
                  {
                    key: '_waitForServices',
                    value:
                      ((t = (0, l.default)(
                        c.default.mark(function _callee(t) {
                          var r, i, a;
                          return c.default.wrap(
                            function _callee$(u) {
                              for (;;)
                                switch ((u.prev = u.next)) {
                                  case 0:
                                    this._orderedServiceNames ||
                                      (this._orderedServiceNames = orderServices(
                                        (0, m.default)(this._services)
                                      )),
                                      (r = _createForOfIteratorHelper(
                                        this._orderedServiceNames
                                      )),
                                      (u.prev = 2),
                                      r.s();
                                  case 4:
                                    if ((i = r.n()).done) {
                                      u.next = 13;
                                      break;
                                    }
                                    if (((a = i.value), this._services[a])) {
                                      u.next = 9;
                                      break;
                                    }
                                    throw new Error(
                                      'No service for '.concat(a)
                                    );
                                  case 9:
                                    return (u.next = 11), t(this._services[a]);
                                  case 11:
                                    u.next = 4;
                                    break;
                                  case 13:
                                    u.next = 18;
                                    break;
                                  case 15:
                                    (u.prev = 15),
                                      (u.t0 = u.catch(2)),
                                      r.e(u.t0);
                                  case 18:
                                    return (u.prev = 18), r.f(), u.finish(18);
                                  case 21:
                                  case 'end':
                                    return u.stop();
                                }
                            },
                            _callee,
                            this,
                            [[2, 15, 18, 21]]
                          );
                        })
                      )),
                      function _waitForServices(r) {
                        return t.apply(this, arguments);
                      })
                  }
                ]),
                Container
              );
            })();
            r.default = k;
          },
          function(t, r) {
            t.exports = function(t) {
              return (
                t.webpackPolyfill ||
                  ((t.deprecate = function() {}),
                  (t.paths = []),
                  t.children || (t.children = []),
                  Object.defineProperty(t, 'loaded', {
                    enumerable: !0,
                    get: function() {
                      return t.l;
                    }
                  }),
                  Object.defineProperty(t, 'id', {
                    enumerable: !0,
                    get: function() {
                      return t.i;
                    }
                  }),
                  (t.webpackPolyfill = 1)),
                t
              );
            };
          },
          function(t, r) {
            t.exports = function isLength(t) {
              return (
                'number' == typeof t &&
                t > -1 &&
                t % 1 == 0 &&
                t <= 9007199254740991
              );
            };
          },
          function(t, r, i) {
            t.exports = i(33);
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              Object.defineProperty(r, 'standardizeConfig', {
                enumerable: !0,
                get: function get() {
                  return u.default;
                }
              }),
              Object.defineProperty(r, 'ServiceProvider', {
                enumerable: !0,
                get: function get() {
                  return c.default;
                }
              }),
              Object.defineProperty(r, 'Container', {
                enumerable: !0,
                get: function get() {
                  return l.default;
                }
              }),
              Object.defineProperty(r, 'LocalService', {
                enumerable: !0,
                get: function get() {
                  return p.default;
                }
              }),
              Object.defineProperty(r, 'PublicService', {
                enumerable: !0,
                get: function get() {
                  return d.default;
                }
              }),
              Object.defineProperty(r, 'PrivateService', {
                enumerable: !0,
                get: function get() {
                  return y.default;
                }
              }),
              Object.defineProperty(r, 'ServiceManager', {
                enumerable: !0,
                get: function get() {
                  return h.default;
                }
              }),
              Object.defineProperty(r, 'StateMachine', {
                enumerable: !0,
                get: function get() {
                  return v.default;
                }
              });
            var u = a(i(20)),
              c = a(i(45)),
              l = a(i(29)),
              p = a(i(120)),
              d = a(i(121)),
              y = a(i(122)),
              h = a(i(13)),
              v = a(i(22));
          },
          function(t, r, i) {
            var a = i(35);
            function _get(r, i, u) {
              return (
                'undefined' != typeof Reflect && Reflect.get
                  ? (t.exports = _get = Reflect.get)
                  : (t.exports = _get = function _get(t, r, i) {
                      var u = a(t, r);
                      if (u) {
                        var c = Object.getOwnPropertyDescriptor(u, r);
                        return c.get ? c.get.call(i) : c.value;
                      }
                    }),
                _get(r, i, u || r)
              );
            }
            t.exports = _get;
          },
          function(t, r, i) {
            var a = i(2);
            t.exports = function _superPropBase(t, r) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, r) &&
                null !== (t = a(t));

              );
              return t;
            };
          },
          function(t, r) {
            t.exports = function _assertThisInitialized(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            };
          },
          function(t, r) {
            t.exports = function _isNativeFunction(t) {
              return -1 !== Function.toString.call(t).indexOf('[native code]');
            };
          },
          function(t, r, i) {
            var a = i(14),
              u = i(39);
            function _construct(r, i, c) {
              return (
                u()
                  ? (t.exports = _construct = Reflect.construct)
                  : (t.exports = _construct = function _construct(t, r, i) {
                      var u = [null];
                      u.push.apply(u, r);
                      var c = new (Function.bind.apply(t, u))();
                      return i && a(c, i.prototype), c;
                    }),
                _construct.apply(null, arguments)
              );
            }
            t.exports = _construct;
          },
          function(t, r) {
            t.exports = function _isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function() {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            };
          },
          function(t, r, i) {
            var a = i(21),
              u = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0);
            var c = u(i(1)),
              l = u(i(4)),
              p = u(i(22)),
              d = u(i(16)),
              y = a(i(7)),
              h = (0, u(i(41)).default)('dai:ServiceManagerBase');
            function _promisify(t) {
              return new Promise(function(r, i) {
                try {
                  r(t());
                } catch (t) {
                  i(t.message);
                }
              });
            }
            var v = (function() {
              function ServiceManagerBase() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                if (
                  ((0, c.default)(this, ServiceManagerBase),
                  null !== t && 'function' != typeof t)
                )
                  throw new Error(
                    'Invalid argument init: not a function or null.'
                  );
                if (
                  (null === t &&
                    (t = function init() {
                      return Promise.resolve();
                    }),
                  null !== r && 'function' != typeof r)
                )
                  throw new Error(
                    'Invalid argument connect: not a function or null.'
                  );
                if (
                  (null === r &&
                    null !== i &&
                    (r = function connect() {
                      return Promise.resolve();
                    }),
                  null !== i && 'function' != typeof i)
                )
                  throw new Error(
                    'Invalid argument auth: not a function or null.'
                  );
                (this._init = t),
                  (this._connect = r),
                  (this._auth = i),
                  (this._type =
                    null === i
                      ? null === r
                        ? y.default.LOCAL
                        : y.default.PUBLIC
                      : y.default.PRIVATE),
                  (this._state = new p.default(
                    d.default.CREATED,
                    y.serviceTypeTransitions[this._type]
                  )),
                  (this._initPromise = null),
                  (this._connectPromise = null),
                  (this._authPromise = null);
              }
              return (
                (0, l.default)(ServiceManagerBase, [
                  {
                    key: 'initialize',
                    value: function initialize(t) {
                      var r = this;
                      if (this._state.inState(d.default.CREATED)) {
                        if (this._initPromise)
                          throw new Error(
                            'Unexpected init promise in state CREATED.'
                          );
                        this._state.transitionTo(d.default.INITIALIZING),
                          (this._initPromise = _promisify(function() {
                            return r._init(t);
                          }).then(
                            function() {
                              return r._state.transitionTo(
                                r._type === y.default.LOCAL
                                  ? d.default.READY
                                  : d.default.OFFLINE
                              );
                            },
                            function(t) {
                              throw (h(t),
                              r._state.transitionTo(d.default.CREATED),
                              t);
                            }
                          ));
                      }
                      return this._initPromise;
                    }
                  },
                  {
                    key: 'connect',
                    value: function connect() {
                      var t = this;
                      return this._type === y.default.LOCAL
                        ? this.initialize()
                        : (this._state.inState([
                            d.default.CREATED,
                            d.default.INITIALIZING,
                            d.default.OFFLINE
                          ]) &&
                            null === this._connectPromise &&
                            (this._connectPromise = this.initialize().then(
                              function() {
                                return (
                                  t._state.transitionTo(d.default.CONNECTING),
                                  _promisify(function() {
                                    return t._connect(function() {
                                      return t._disconnect();
                                    });
                                  }).then(
                                    function() {
                                      t._state.inState(d.default.CONNECTING) &&
                                        t._state.transitionTo(
                                          t._type === y.default.PUBLIC
                                            ? d.default.READY
                                            : d.default.ONLINE
                                        );
                                    },
                                    function(r) {
                                      throw (h('connect error:', r),
                                      t._state.inState(d.default.CONNECTING) &&
                                        t._state.transitionTo(
                                          d.default.OFFLINE
                                        ),
                                      r);
                                    }
                                  )
                                );
                              }
                            )),
                          this._connectPromise);
                    }
                  },
                  {
                    key: 'authenticate',
                    value: function authenticate() {
                      var t = this;
                      return this._type !== y.default.PRIVATE
                        ? this.connect()
                        : (this._state.inState([
                            d.default.CREATED,
                            d.default.INITIALIZING,
                            d.default.OFFLINE,
                            d.default.CONNECTING,
                            d.default.ONLINE
                          ]) &&
                            null === this._authPromise &&
                            (this._authPromise = this.connect().then(
                              function() {
                                return (
                                  t._state.transitionTo(
                                    d.default.AUTHENTICATING
                                  ),
                                  _promisify(function() {
                                    return t._auth(function() {
                                      return t._deauthenticate();
                                    });
                                  }).then(
                                    function() {
                                      t._state.inState(
                                        d.default.AUTHENTICATING
                                      ) &&
                                        t._state.transitionTo(d.default.READY);
                                    },
                                    function(r) {
                                      h('authenticate error: ' + r),
                                        t._state.inState(
                                          d.default.AUTHENTICATING
                                        ) &&
                                          t._state.transitionTo(
                                            d.default.ONLINE
                                          );
                                    }
                                  )
                                );
                              }
                            )),
                          this._authPromise);
                    }
                  },
                  {
                    key: 'settings',
                    value: function settings(t) {
                      return (this._settings = t), this;
                    }
                  },
                  {
                    key: 'state',
                    value: function state() {
                      return this._state.state();
                    }
                  },
                  {
                    key: 'type',
                    value: function type() {
                      return this._type;
                    }
                  },
                  {
                    key: 'isInitialized',
                    value: function isInitialized() {
                      return !this._state.inState([
                        d.default.CREATED,
                        d.default.INITIALIZING
                      ]);
                    }
                  },
                  {
                    key: 'isConnected',
                    value: function isConnected() {
                      return this._type === y.default.LOCAL
                        ? null
                        : this._state.inState([
                            d.default.ONLINE,
                            d.default.AUTHENTICATING,
                            d.default.READY
                          ]);
                    }
                  },
                  {
                    key: 'isAuthenticated',
                    value: function isAuthenticated() {
                      return this._type === y.default.PRIVATE
                        ? this._state.inState(d.default.READY)
                        : null;
                    }
                  },
                  {
                    key: 'isReady',
                    value: function isReady() {
                      return this._state.inState(d.default.READY);
                    }
                  },
                  {
                    key: 'onInitialized',
                    value: function onInitialized(t) {
                      return (
                        this._state.onStateChanged(function(r, i) {
                          r !== d.default.INITIALIZING ||
                            (i !== d.default.OFFLINE &&
                              i !== d.default.READY) ||
                            t();
                        }),
                        this
                      );
                    }
                  },
                  {
                    key: 'onConnected',
                    value: function onConnected(t) {
                      return (
                        this._state.onStateChanged(function(r, i) {
                          r !== d.default.CONNECTING ||
                            (i !== d.default.ONLINE && i !== d.default.READY) ||
                            t();
                        }),
                        this
                      );
                    }
                  },
                  {
                    key: 'onDisconnected',
                    value: function onDisconnected(t) {
                      return (
                        this._state.onStateChanged(function(r, i) {
                          i !== d.default.OFFLINE ||
                            (r !== d.default.ONLINE && r !== d.default.READY) ||
                            t();
                        }),
                        this
                      );
                    }
                  },
                  {
                    key: 'onAuthenticated',
                    value: function onAuthenticated(t) {
                      return (
                        this._state.onStateChanged(function(r, i) {
                          r === d.default.AUTHENTICATING &&
                            i === d.default.READY &&
                            t();
                        }),
                        this
                      );
                    }
                  },
                  {
                    key: 'onDeauthenticated',
                    value: function onDeauthenticated(t) {
                      return (
                        this.type() === y.default.PRIVATE &&
                          this._state.onStateChanged(function(r, i) {
                            (i !== d.default.OFFLINE &&
                              i !== d.default.ONLINE) ||
                              r !== d.default.READY ||
                              t();
                          }),
                        this
                      );
                    }
                  },
                  {
                    key: 'onReady',
                    value: function onReady(t) {
                      return (
                        this._state.onStateChanged(function(r, i) {
                          i === d.default.READY && t();
                        }),
                        this
                      );
                    }
                  },
                  {
                    key: 'onStateChanged',
                    value: function onStateChanged(t) {
                      return this._state.onStateChanged(t), this;
                    }
                  },
                  {
                    key: '_disconnect',
                    value: function _disconnect() {
                      if (this._type === y.default.LOCAL)
                        throw new Error(
                          '_disconnect must not be called on a Local Service'
                        );
                      this._state.inState(d.default.AUTHENTICATING) &&
                        this._deauthenticate(),
                        this._state.inState([
                          d.default.READY,
                          d.default.ONLINE,
                          d.default.CONNECTING
                        ]) &&
                          ((this._authPromise = null),
                          (this._connectPromise = null),
                          this._state.transitionTo(d.default.OFFLINE));
                    }
                  },
                  {
                    key: '_deauthenticate',
                    value: function _deauthenticate() {
                      if (this._type !== y.default.PRIVATE)
                        throw new Error(
                          '_deauthenticate must not be called on a Local or Public Service'
                        );
                      this._state.inState([
                        d.default.READY,
                        d.default.AUTHENTICATING
                      ]) &&
                        ((this._authPromise = null),
                        this._state.transitionTo(d.default.ONLINE));
                    }
                  }
                ]),
                ServiceManagerBase
              );
            })();
            r.default = v;
          },
          function(t, r, i) {
            (function(a) {
              function load() {
                var t;
                try {
                  t = r.storage.debug;
                } catch (t) {}
                return !t && void 0 !== a && 'env' in a && (t = a.env.DEBUG), t;
              }
              ((r = t.exports = i(43)).log = function log() {
                return (
                  'object' == typeof console &&
                  console.log &&
                  Function.prototype.apply.call(console.log, console, arguments)
                );
              }),
                (r.formatArgs = function formatArgs(t) {
                  var i = this.useColors;
                  if (
                    ((t[0] =
                      (i ? '%c' : '') +
                      this.namespace +
                      (i ? ' %c' : ' ') +
                      t[0] +
                      (i ? '%c ' : ' ') +
                      '+' +
                      r.humanize(this.diff)),
                    i)
                  ) {
                    var a = 'color: ' + this.color;
                    t.splice(1, 0, a, 'color: inherit');
                    var u = 0,
                      c = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function(t) {
                      '%%' !== t && (u++, '%c' === t && (c = u));
                    }),
                      t.splice(c, 0, a);
                  }
                }),
                (r.save = function save(t) {
                  try {
                    null == t
                      ? r.storage.removeItem('debug')
                      : (r.storage.debug = t);
                  } catch (t) {}
                }),
                (r.load = load),
                (r.useColors = function useColors() {
                  return (
                    !(
                      'undefined' == typeof window ||
                      !window.process ||
                      'renderer' !== window.process.type
                    ) ||
                    ('undefined' != typeof document &&
                      document.documentElement &&
                      document.documentElement.style &&
                      document.documentElement.style.WebkitAppearance) ||
                      ('undefined' != typeof window &&
                        window.console &&
                        (window.console.firebug ||
                          (window.console.exception &&
                            window.console.table))) ||
                      ('undefined' != typeof navigator &&
                        navigator.userAgent &&
                        navigator.userAgent
                          .toLowerCase()
                          .match(/firefox\/(\d+)/) &&
                        parseInt(RegExp.$1, 10) >= 31) ||
                      ('undefined' != typeof navigator &&
                        navigator.userAgent &&
                        navigator.userAgent
                          .toLowerCase()
                          .match(/applewebkit\/(\d+)/))
                  );
                }),
                (r.storage =
                  'undefined' != typeof chrome && void 0 !== chrome.storage
                    ? chrome.storage.local
                    : (function localstorage() {
                        try {
                          return window.localStorage;
                        } catch (t) {}
                      })()),
                (r.colors = [
                  'lightseagreen',
                  'forestgreen',
                  'goldenrod',
                  'dodgerblue',
                  'darkorchid',
                  'crimson'
                ]),
                (r.formatters.j = function(t) {
                  try {
                    return JSON.stringify(t);
                  } catch (t) {
                    return '[UnexpectedJSONParseError]: ' + t.message;
                  }
                }),
                r.enable(load());
            }.call(this, i(42)));
          },
          function(t, r) {
            var i,
              a,
              u = (t.exports = {});
            function defaultSetTimout() {
              throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
              throw new Error('clearTimeout has not been defined');
            }
            function runTimeout(t) {
              if (i === setTimeout) return setTimeout(t, 0);
              if ((i === defaultSetTimout || !i) && setTimeout)
                return (i = setTimeout), setTimeout(t, 0);
              try {
                return i(t, 0);
              } catch (r) {
                try {
                  return i.call(null, t, 0);
                } catch (r) {
                  return i.call(this, t, 0);
                }
              }
            }
            !(function() {
              try {
                i =
                  'function' == typeof setTimeout
                    ? setTimeout
                    : defaultSetTimout;
              } catch (t) {
                i = defaultSetTimout;
              }
              try {
                a =
                  'function' == typeof clearTimeout
                    ? clearTimeout
                    : defaultClearTimeout;
              } catch (t) {
                a = defaultClearTimeout;
              }
            })();
            var c,
              l = [],
              p = !1,
              d = -1;
            function cleanUpNextTick() {
              p &&
                c &&
                ((p = !1),
                c.length ? (l = c.concat(l)) : (d = -1),
                l.length && drainQueue());
            }
            function drainQueue() {
              if (!p) {
                var t = runTimeout(cleanUpNextTick);
                p = !0;
                for (var r = l.length; r; ) {
                  for (c = l, l = []; ++d < r; ) c && c[d].run();
                  (d = -1), (r = l.length);
                }
                (c = null),
                  (p = !1),
                  (function runClearTimeout(t) {
                    if (a === clearTimeout) return clearTimeout(t);
                    if ((a === defaultClearTimeout || !a) && clearTimeout)
                      return (a = clearTimeout), clearTimeout(t);
                    try {
                      a(t);
                    } catch (r) {
                      try {
                        return a.call(null, t);
                      } catch (r) {
                        return a.call(this, t);
                      }
                    }
                  })(t);
              }
            }
            function Item(t, r) {
              (this.fun = t), (this.array = r);
            }
            function noop() {}
            (u.nextTick = function(t) {
              var r = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                  r[i - 1] = arguments[i];
              l.push(new Item(t, r)),
                1 !== l.length || p || runTimeout(drainQueue);
            }),
              (Item.prototype.run = function() {
                this.fun.apply(null, this.array);
              }),
              (u.title = 'browser'),
              (u.browser = !0),
              (u.env = {}),
              (u.argv = []),
              (u.version = ''),
              (u.versions = {}),
              (u.on = noop),
              (u.addListener = noop),
              (u.once = noop),
              (u.off = noop),
              (u.removeListener = noop),
              (u.removeAllListeners = noop),
              (u.emit = noop),
              (u.prependListener = noop),
              (u.prependOnceListener = noop),
              (u.listeners = function(t) {
                return [];
              }),
              (u.binding = function(t) {
                throw new Error('process.binding is not supported');
              }),
              (u.cwd = function() {
                return '/';
              }),
              (u.chdir = function(t) {
                throw new Error('process.chdir is not supported');
              }),
              (u.umask = function() {
                return 0;
              });
          },
          function(t, r, i) {
            var a;
            function createDebug(t) {
              function debug() {
                if (debug.enabled) {
                  var t = debug,
                    i = +new Date(),
                    u = i - (a || i);
                  (t.diff = u), (t.prev = a), (t.curr = i), (a = i);
                  for (
                    var c = new Array(arguments.length), l = 0;
                    l < c.length;
                    l++
                  )
                    c[l] = arguments[l];
                  (c[0] = r.coerce(c[0])),
                    'string' != typeof c[0] && c.unshift('%O');
                  var p = 0;
                  (c[0] = c[0].replace(/%([a-zA-Z%])/g, function(i, a) {
                    if ('%%' === i) return i;
                    p++;
                    var u = r.formatters[a];
                    if ('function' == typeof u) {
                      var l = c[p];
                      (i = u.call(t, l)), c.splice(p, 1), p--;
                    }
                    return i;
                  })),
                    r.formatArgs.call(t, c);
                  var d = debug.log || r.log || console.log.bind(console);
                  d.apply(t, c);
                }
              }
              return (
                (debug.namespace = t),
                (debug.enabled = r.enabled(t)),
                (debug.useColors = r.useColors()),
                (debug.color = (function selectColor(t) {
                  var i,
                    a = 0;
                  for (i in t) (a = (a << 5) - a + t.charCodeAt(i)), (a |= 0);
                  return r.colors[Math.abs(a) % r.colors.length];
                })(t)),
                'function' == typeof r.init && r.init(debug),
                debug
              );
            }
            ((r = t.exports = createDebug.debug = createDebug.default = createDebug).coerce = function coerce(
              t
            ) {
              return t instanceof Error ? t.stack || t.message : t;
            }),
              (r.disable = function disable() {
                r.enable('');
              }),
              (r.enable = function enable(t) {
                r.save(t), (r.names = []), (r.skips = []);
                for (
                  var i = ('string' == typeof t ? t : '').split(/[\s,]+/),
                    a = i.length,
                    u = 0;
                  u < a;
                  u++
                )
                  i[u] &&
                    ('-' === (t = i[u].replace(/\*/g, '.*?'))[0]
                      ? r.skips.push(new RegExp('^' + t.substr(1) + '$'))
                      : r.names.push(new RegExp('^' + t + '$')));
              }),
              (r.enabled = function enabled(t) {
                var i, a;
                for (i = 0, a = r.skips.length; i < a; i++)
                  if (r.skips[i].test(t)) return !1;
                for (i = 0, a = r.names.length; i < a; i++)
                  if (r.names[i].test(t)) return !0;
                return !1;
              }),
              (r.humanize = i(44)),
              (r.names = []),
              (r.skips = []),
              (r.formatters = {});
          },
          function(t, r) {
            var i = 1e3,
              a = 6e4,
              u = 60 * a,
              c = 24 * u;
            function plural(t, r, i) {
              if (!(t < r))
                return t < 1.5 * r
                  ? Math.floor(t / r) + ' ' + i
                  : Math.ceil(t / r) + ' ' + i + 's';
            }
            t.exports = function(t, r) {
              r = r || {};
              var l = typeof t;
              if ('string' === l && t.length > 0)
                return (function parse(t) {
                  if (!((t = String(t)).length > 100)) {
                    var r = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                      t
                    );
                    if (r) {
                      var l = parseFloat(r[1]);
                      switch ((r[2] || 'ms').toLowerCase()) {
                        case 'years':
                        case 'year':
                        case 'yrs':
                        case 'yr':
                        case 'y':
                          return 315576e5 * l;
                        case 'days':
                        case 'day':
                        case 'd':
                          return l * c;
                        case 'hours':
                        case 'hour':
                        case 'hrs':
                        case 'hr':
                        case 'h':
                          return l * u;
                        case 'minutes':
                        case 'minute':
                        case 'mins':
                        case 'min':
                        case 'm':
                          return l * a;
                        case 'seconds':
                        case 'second':
                        case 'secs':
                        case 'sec':
                        case 's':
                          return l * i;
                        case 'milliseconds':
                        case 'millisecond':
                        case 'msecs':
                        case 'msec':
                        case 'ms':
                          return l;
                        default:
                          return;
                      }
                    }
                  }
                })(t);
              if ('number' === l && !1 === isNaN(t))
                return r.long
                  ? (function fmtLong(t) {
                      return (
                        plural(t, c, 'day') ||
                        plural(t, u, 'hour') ||
                        plural(t, a, 'minute') ||
                        plural(t, i, 'second') ||
                        t + ' ms'
                      );
                    })(t)
                  : (function fmtShort(t) {
                      return t >= c
                        ? Math.round(t / c) + 'd'
                        : t >= u
                        ? Math.round(t / u) + 'h'
                        : t >= a
                        ? Math.round(t / a) + 'm'
                        : t >= i
                        ? Math.round(t / i) + 's'
                        : t + 'ms';
                    })(t);
              throw new Error(
                'val is not a non-empty string or a valid number. val=' +
                  JSON.stringify(t)
              );
            };
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0);
            var u = a(i(3)),
              c = a(i(46)),
              l = a(i(1)),
              p = a(i(4)),
              d = a(i(23)),
              y = a(i(29)),
              h = a(i(20));
            function _arrayLikeToArray(t, r) {
              (null == r || r > t.length) && (r = t.length);
              for (var i = 0, a = new Array(r); i < r; i++) a[i] = t[i];
              return a;
            }
            var v = (function() {
              function ServiceProvider(t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = r.services,
                  a = void 0 === i ? {} : i,
                  u = r.defaults,
                  c = void 0 === u ? {} : u,
                  p = r.disabled,
                  d = void 0 === p ? {} : p;
                (0, l.default)(this, ServiceProvider),
                  (this._config = t),
                  (this._services = a),
                  (this._resolver = { defaults: c, disabled: d });
              }
              return (
                (0, p.default)(ServiceProvider, [
                  {
                    key: 'supports',
                    value: function supports(t) {
                      return !!this._services[t];
                    }
                  },
                  {
                    key: 'buildContainer',
                    value: function buildContainer() {
                      var t = new y.default();
                      for (var r in this._config) {
                        var i = (0, h.default)(
                            r,
                            this._config[r],
                            this._resolver
                          ),
                          a = (0, c.default)(i, 2),
                          l = a[0],
                          p = a[1],
                          d = void 0;
                        if ('object' == (0, u.default)(l)) d = l;
                        else if ('function' == typeof l) d = new l();
                        else {
                          if (!this.supports(l) && 'exchange' === r)
                            throw new Error(
                              'This service has been extracted from dai.js. Please refer to the documentation to add it as a plugin: \n\n https://github.com/makerdao/dai.js/wiki/Basic-Usage-(Plugins)'
                            );
                          if (!this.supports(l))
                            throw new Error(
                              'Unsupported service in configuration: ' + l
                            );
                          d = new this._services[l]();
                        }
                        var v = d.manager().name();
                        if (v !== r)
                          throw new Error(
                            'Role mismatch: "'.concat(v, '", "').concat(r, '"')
                          );
                        d.manager().settings(p), t.register(d, r);
                      }
                      return (
                        this._registerDependencies(t),
                        t.injectDependencies(),
                        (this._container = t),
                        t
                      );
                    }
                  },
                  {
                    key: '_registerDependencies',
                    value: function _registerDependencies(t) {
                      var r = t.getRegisteredServiceNames(),
                        i = r
                          .reduce(function(r, i) {
                            var a = t
                              .service(i)
                              .manager()
                              .dependencies();
                            return (0, d.default)(r.concat(a));
                          }, [])
                          .filter(function(t) {
                            return !r.includes(t);
                          });
                      if (0 !== i.length) {
                        var a,
                          u = (function _createForOfIteratorHelper(t) {
                            if (
                              'undefined' == typeof Symbol ||
                              null == t[Symbol.iterator]
                            ) {
                              if (
                                Array.isArray(t) ||
                                (t = (function _unsupportedIterableToArray(
                                  t,
                                  r
                                ) {
                                  if (t) {
                                    if ('string' == typeof t)
                                      return _arrayLikeToArray(t, r);
                                    var i = Object.prototype.toString
                                      .call(t)
                                      .slice(8, -1);
                                    return (
                                      'Object' === i &&
                                        t.constructor &&
                                        (i = t.constructor.name),
                                      'Map' === i || 'Set' === i
                                        ? Array.from(t)
                                        : 'Arguments' === i ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            i
                                          )
                                        ? _arrayLikeToArray(t, r)
                                        : void 0
                                    );
                                  }
                                })(t))
                              ) {
                                var r = 0,
                                  i = function F() {};
                                return {
                                  s: i,
                                  n: function n() {
                                    return r >= t.length
                                      ? { done: !0 }
                                      : { done: !1, value: t[r++] };
                                  },
                                  e: function e(t) {
                                    throw t;
                                  },
                                  f: i
                                };
                              }
                              throw new TypeError(
                                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                              );
                            }
                            var a,
                              u,
                              c = !0,
                              l = !1;
                            return {
                              s: function s() {
                                a = t[Symbol.iterator]();
                              },
                              n: function n() {
                                var t = a.next();
                                return (c = t.done), t;
                              },
                              e: function e(t) {
                                (l = !0), (u = t);
                              },
                              f: function f() {
                                try {
                                  c || null == a.return || a.return();
                                } finally {
                                  if (l) throw u;
                                }
                              }
                            };
                          })(i);
                        try {
                          for (u.s(); !(a = u.n()).done; ) {
                            var c = a.value,
                              l = this._resolver.defaults[c];
                            if (
                              ('string' == typeof l && (l = this._services[l]),
                              !l)
                            )
                              throw new Error(
                                'No service found for "'.concat(c, '"')
                              );
                            t.register(new l(), c);
                          }
                        } catch (t) {
                          u.e(t);
                        } finally {
                          u.f();
                        }
                        this._registerDependencies(t);
                      }
                    }
                  },
                  {
                    key: 'service',
                    value: function service(t) {
                      return (
                        this._container || this.buildContainer(),
                        this._container.service(t)
                      );
                    }
                  }
                ]),
                ServiceProvider
              );
            })();
            r.default = v;
          },
          function(t, r, i) {
            var a = i(47),
              u = i(48),
              c = i(49),
              l = i(51);
            t.exports = function _slicedToArray(t, r) {
              return a(t) || u(t, r) || c(t, r) || l();
            };
          },
          function(t, r) {
            t.exports = function _arrayWithHoles(t) {
              if (Array.isArray(t)) return t;
            };
          },
          function(t, r) {
            t.exports = function _iterableToArrayLimit(t, r) {
              if (
                'undefined' != typeof Symbol &&
                Symbol.iterator in Object(t)
              ) {
                var i = [],
                  a = !0,
                  u = !1,
                  c = void 0;
                try {
                  for (
                    var l, p = t[Symbol.iterator]();
                    !(a = (l = p.next()).done) &&
                    (i.push(l.value), !r || i.length !== r);
                    a = !0
                  );
                } catch (t) {
                  (u = !0), (c = t);
                } finally {
                  try {
                    a || null == p.return || p.return();
                  } finally {
                    if (u) throw c;
                  }
                }
                return i;
              }
            };
          },
          function(t, r, i) {
            var a = i(50);
            t.exports = function _unsupportedIterableToArray(t, r) {
              if (t) {
                if ('string' == typeof t) return a(t, r);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === i && t.constructor && (i = t.constructor.name),
                  'Map' === i || 'Set' === i
                    ? Array.from(t)
                    : 'Arguments' === i ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                    ? a(t, r)
                    : void 0
                );
              }
            };
          },
          function(t, r) {
            t.exports = function _arrayLikeToArray(t, r) {
              (null == r || r > t.length) && (r = t.length);
              for (var i = 0, a = new Array(r); i < r; i++) a[i] = t[i];
              return a;
            };
          },
          function(t, r) {
            t.exports = function _nonIterableRest() {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            };
          },
          function(t, r, i) {
            var a = i(53),
              u = i(85),
              c = i(90),
              l = i(91),
              p = i(92),
              d = i(28);
            t.exports = function baseUniq(t, r, i) {
              var y = -1,
                h = u,
                v = t.length,
                g = !0,
                m = [],
                b = m;
              if (i) (g = !1), (h = c);
              else if (v >= 200) {
                var _ = r ? null : p(t);
                if (_) return d(_);
                (g = !1), (h = l), (b = new a());
              } else b = r ? [] : m;
              e: for (; ++y < v; ) {
                var w = t[y],
                  x = r ? r(w) : w;
                if (((w = i || 0 !== w ? w : 0), g && x == x)) {
                  for (var O = b.length; O--; ) if (b[O] === x) continue e;
                  r && b.push(x), m.push(w);
                } else h(b, x, i) || (b !== m && b.push(x), m.push(w));
              }
              return m;
            };
          },
          function(t, r, i) {
            var a = i(54),
              u = i(83),
              c = i(84);
            function SetCache(t) {
              var r = -1,
                i = null == t ? 0 : t.length;
              for (this.__data__ = new a(); ++r < i; ) this.add(t[r]);
            }
            (SetCache.prototype.add = SetCache.prototype.push = u),
              (SetCache.prototype.has = c),
              (t.exports = SetCache);
          },
          function(t, r, i) {
            var a = i(55),
              u = i(78),
              c = i(80),
              l = i(81),
              p = i(82);
            function MapCache(t) {
              var r = -1,
                i = null == t ? 0 : t.length;
              for (this.clear(); ++r < i; ) {
                var a = t[r];
                this.set(a[0], a[1]);
              }
            }
            (MapCache.prototype.clear = a),
              (MapCache.prototype.delete = u),
              (MapCache.prototype.get = c),
              (MapCache.prototype.has = l),
              (MapCache.prototype.set = p),
              (t.exports = MapCache);
          },
          function(t, r, i) {
            var a = i(56),
              u = i(70),
              c = i(77);
            t.exports = function mapCacheClear() {
              (this.size = 0),
                (this.__data__ = {
                  hash: new a(),
                  map: new (c || u)(),
                  string: new a()
                });
            };
          },
          function(t, r, i) {
            var a = i(57),
              u = i(66),
              c = i(67),
              l = i(68),
              p = i(69);
            function Hash(t) {
              var r = -1,
                i = null == t ? 0 : t.length;
              for (this.clear(); ++r < i; ) {
                var a = t[r];
                this.set(a[0], a[1]);
              }
            }
            (Hash.prototype.clear = a),
              (Hash.prototype.delete = u),
              (Hash.prototype.get = c),
              (Hash.prototype.has = l),
              (Hash.prototype.set = p),
              (t.exports = Hash);
          },
          function(t, r, i) {
            var a = i(10);
            t.exports = function hashClear() {
              (this.__data__ = a ? a(null) : {}), (this.size = 0);
            };
          },
          function(t, r, i) {
            var a = i(24),
              u = i(62),
              c = i(27),
              l = i(64),
              p = /^\[object .+?Constructor\]$/,
              d = Function.prototype,
              y = Object.prototype,
              h = d.toString,
              v = y.hasOwnProperty,
              g = RegExp(
                '^' +
                  h
                    .call(v)
                    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      '$1.*?'
                    ) +
                  '$'
              );
            t.exports = function baseIsNative(t) {
              return !(!c(t) || u(t)) && (a(t) ? g : p).test(l(t));
            };
          },
          function(t, r) {
            var i;
            i = (function() {
              return this;
            })();
            try {
              i = i || new Function('return this')();
            } catch (t) {
              'object' == typeof window && (i = window);
            }
            t.exports = i;
          },
          function(t, r, i) {
            var a = i(25),
              u = Object.prototype,
              c = u.hasOwnProperty,
              l = u.toString,
              p = a ? a.toStringTag : void 0;
            t.exports = function getRawTag(t) {
              var r = c.call(t, p),
                i = t[p];
              try {
                t[p] = void 0;
                var a = !0;
              } catch (t) {}
              var u = l.call(t);
              return a && (r ? (t[p] = i) : delete t[p]), u;
            };
          },
          function(t, r) {
            var i = Object.prototype.toString;
            t.exports = function objectToString(t) {
              return i.call(t);
            };
          },
          function(t, r, i) {
            var a,
              u = i(63),
              c = (a = /[^.]+$/.exec((u && u.keys && u.keys.IE_PROTO) || ''))
                ? 'Symbol(src)_1.' + a
                : '';
            t.exports = function isMasked(t) {
              return !!c && c in t;
            };
          },
          function(t, r, i) {
            var a = i(8)['__core-js_shared__'];
            t.exports = a;
          },
          function(t, r) {
            var i = Function.prototype.toString;
            t.exports = function toSource(t) {
              if (null != t) {
                try {
                  return i.call(t);
                } catch (t) {}
                try {
                  return t + '';
                } catch (t) {}
              }
              return '';
            };
          },
          function(t, r) {
            t.exports = function getValue(t, r) {
              return null == t ? void 0 : t[r];
            };
          },
          function(t, r) {
            t.exports = function hashDelete(t) {
              var r = this.has(t) && delete this.__data__[t];
              return (this.size -= r ? 1 : 0), r;
            };
          },
          function(t, r, i) {
            var a = i(10),
              u = Object.prototype.hasOwnProperty;
            t.exports = function hashGet(t) {
              var r = this.__data__;
              if (a) {
                var i = r[t];
                return '__lodash_hash_undefined__' === i ? void 0 : i;
              }
              return u.call(r, t) ? r[t] : void 0;
            };
          },
          function(t, r, i) {
            var a = i(10),
              u = Object.prototype.hasOwnProperty;
            t.exports = function hashHas(t) {
              var r = this.__data__;
              return a ? void 0 !== r[t] : u.call(r, t);
            };
          },
          function(t, r, i) {
            var a = i(10);
            t.exports = function hashSet(t, r) {
              var i = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (i[t] = a && void 0 === r ? '__lodash_hash_undefined__' : r),
                this
              );
            };
          },
          function(t, r, i) {
            var a = i(71),
              u = i(72),
              c = i(74),
              l = i(75),
              p = i(76);
            function ListCache(t) {
              var r = -1,
                i = null == t ? 0 : t.length;
              for (this.clear(); ++r < i; ) {
                var a = t[r];
                this.set(a[0], a[1]);
              }
            }
            (ListCache.prototype.clear = a),
              (ListCache.prototype.delete = u),
              (ListCache.prototype.get = c),
              (ListCache.prototype.has = l),
              (ListCache.prototype.set = p),
              (t.exports = ListCache);
          },
          function(t, r) {
            t.exports = function listCacheClear() {
              (this.__data__ = []), (this.size = 0);
            };
          },
          function(t, r, i) {
            var a = i(11),
              u = Array.prototype.splice;
            t.exports = function listCacheDelete(t) {
              var r = this.__data__,
                i = a(r, t);
              return !(
                i < 0 ||
                (i == r.length - 1 ? r.pop() : u.call(r, i, 1), --this.size, 0)
              );
            };
          },
          function(t, r) {
            t.exports = function eq(t, r) {
              return t === r || (t != t && r != r);
            };
          },
          function(t, r, i) {
            var a = i(11);
            t.exports = function listCacheGet(t) {
              var r = this.__data__,
                i = a(r, t);
              return i < 0 ? void 0 : r[i][1];
            };
          },
          function(t, r, i) {
            var a = i(11);
            t.exports = function listCacheHas(t) {
              return a(this.__data__, t) > -1;
            };
          },
          function(t, r, i) {
            var a = i(11);
            t.exports = function listCacheSet(t, r) {
              var i = this.__data__,
                u = a(i, t);
              return (
                u < 0 ? (++this.size, i.push([t, r])) : (i[u][1] = r), this
              );
            };
          },
          function(t, r, i) {
            var a = i(17)(i(8), 'Map');
            t.exports = a;
          },
          function(t, r, i) {
            var a = i(12);
            t.exports = function mapCacheDelete(t) {
              var r = a(this, t).delete(t);
              return (this.size -= r ? 1 : 0), r;
            };
          },
          function(t, r) {
            t.exports = function isKeyable(t) {
              var r = typeof t;
              return 'string' == r ||
                'number' == r ||
                'symbol' == r ||
                'boolean' == r
                ? '__proto__' !== t
                : null === t;
            };
          },
          function(t, r, i) {
            var a = i(12);
            t.exports = function mapCacheGet(t) {
              return a(this, t).get(t);
            };
          },
          function(t, r, i) {
            var a = i(12);
            t.exports = function mapCacheHas(t) {
              return a(this, t).has(t);
            };
          },
          function(t, r, i) {
            var a = i(12);
            t.exports = function mapCacheSet(t, r) {
              var i = a(this, t),
                u = i.size;
              return i.set(t, r), (this.size += i.size == u ? 0 : 1), this;
            };
          },
          function(t, r) {
            t.exports = function setCacheAdd(t) {
              return this.__data__.set(t, '__lodash_hash_undefined__'), this;
            };
          },
          function(t, r) {
            t.exports = function setCacheHas(t) {
              return this.__data__.has(t);
            };
          },
          function(t, r, i) {
            var a = i(86);
            t.exports = function arrayIncludes(t, r) {
              return !(null == t || !t.length) && a(t, r, 0) > -1;
            };
          },
          function(t, r, i) {
            var a = i(87),
              u = i(88),
              c = i(89);
            t.exports = function baseIndexOf(t, r, i) {
              return r == r ? c(t, r, i) : a(t, u, i);
            };
          },
          function(t, r) {
            t.exports = function baseFindIndex(t, r, i, a) {
              for (var u = t.length, c = i + (a ? 1 : -1); a ? c-- : ++c < u; )
                if (r(t[c], c, t)) return c;
              return -1;
            };
          },
          function(t, r) {
            t.exports = function baseIsNaN(t) {
              return t != t;
            };
          },
          function(t, r) {
            t.exports = function strictIndexOf(t, r, i) {
              for (var a = i - 1, u = t.length; ++a < u; )
                if (t[a] === r) return a;
              return -1;
            };
          },
          function(t, r) {
            t.exports = function arrayIncludesWith(t, r, i) {
              for (var a = -1, u = null == t ? 0 : t.length; ++a < u; )
                if (i(r, t[a])) return !0;
              return !1;
            };
          },
          function(t, r) {
            t.exports = function cacheHas(t, r) {
              return t.has(r);
            };
          },
          function(t, r, i) {
            var a = i(93),
              u = i(94),
              c = i(28),
              l =
                a && 1 / c(new a([, -0]))[1] == 1 / 0
                  ? function(t) {
                      return new a(t);
                    }
                  : u;
            t.exports = l;
          },
          function(t, r, i) {
            var a = i(17)(i(8), 'Set');
            t.exports = a;
          },
          function(t, r) {
            t.exports = function noop() {};
          },
          function(t, r, i) {
            t.exports = i(96);
          },
          function(t, r, i) {
            var a = (function(t) {
              var r = Object.prototype,
                i = r.hasOwnProperty,
                a = 'function' == typeof Symbol ? Symbol : {},
                u = a.iterator || '@@iterator',
                c = a.asyncIterator || '@@asyncIterator',
                l = a.toStringTag || '@@toStringTag';
              function wrap(t, r, i, a) {
                var u = r && r.prototype instanceof Generator ? r : Generator,
                  c = Object.create(u.prototype),
                  l = new Context(a || []);
                return (
                  (c._invoke = (function makeInvokeMethod(t, r, i) {
                    var a = 'suspendedStart';
                    return function invoke(u, c) {
                      if ('executing' === a)
                        throw new Error('Generator is already running');
                      if ('completed' === a) {
                        if ('throw' === u) throw c;
                        return { value: void 0, done: !0 };
                      }
                      for (i.method = u, i.arg = c; ; ) {
                        var l = i.delegate;
                        if (l) {
                          var d = maybeInvokeDelegate(l, i);
                          if (d) {
                            if (d === p) continue;
                            return d;
                          }
                        }
                        if ('next' === i.method) i.sent = i._sent = i.arg;
                        else if ('throw' === i.method) {
                          if ('suspendedStart' === a)
                            throw ((a = 'completed'), i.arg);
                          i.dispatchException(i.arg);
                        } else
                          'return' === i.method && i.abrupt('return', i.arg);
                        a = 'executing';
                        var y = tryCatch(t, r, i);
                        if ('normal' === y.type) {
                          if (
                            ((a = i.done ? 'completed' : 'suspendedYield'),
                            y.arg === p)
                          )
                            continue;
                          return { value: y.arg, done: i.done };
                        }
                        'throw' === y.type &&
                          ((a = 'completed'),
                          (i.method = 'throw'),
                          (i.arg = y.arg));
                      }
                    };
                  })(t, i, l)),
                  c
                );
              }
              function tryCatch(t, r, i) {
                try {
                  return { type: 'normal', arg: t.call(r, i) };
                } catch (t) {
                  return { type: 'throw', arg: t };
                }
              }
              t.wrap = wrap;
              var p = {};
              function Generator() {}
              function GeneratorFunction() {}
              function GeneratorFunctionPrototype() {}
              var d = {};
              d[u] = function() {
                return this;
              };
              var y = Object.getPrototypeOf,
                h = y && y(y(values([])));
              h && h !== r && i.call(h, u) && (d = h);
              var v = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
                d
              ));
              function defineIteratorMethods(t) {
                ['next', 'throw', 'return'].forEach(function(r) {
                  t[r] = function(t) {
                    return this._invoke(r, t);
                  };
                });
              }
              function AsyncIterator(t, r) {
                var a;
                this._invoke = function enqueue(u, c) {
                  function callInvokeWithMethodAndArg() {
                    return new r(function(a, l) {
                      !(function invoke(a, u, c, l) {
                        var p = tryCatch(t[a], t, u);
                        if ('throw' !== p.type) {
                          var d = p.arg,
                            y = d.value;
                          return y &&
                            'object' == typeof y &&
                            i.call(y, '__await')
                            ? r.resolve(y.__await).then(
                                function(t) {
                                  invoke('next', t, c, l);
                                },
                                function(t) {
                                  invoke('throw', t, c, l);
                                }
                              )
                            : r.resolve(y).then(
                                function(t) {
                                  (d.value = t), c(d);
                                },
                                function(t) {
                                  return invoke('throw', t, c, l);
                                }
                              );
                        }
                        l(p.arg);
                      })(u, c, a, l);
                    });
                  }
                  return (a = a
                    ? a.then(
                        callInvokeWithMethodAndArg,
                        callInvokeWithMethodAndArg
                      )
                    : callInvokeWithMethodAndArg());
                };
              }
              function maybeInvokeDelegate(t, r) {
                var i = t.iterator[r.method];
                if (void 0 === i) {
                  if (((r.delegate = null), 'throw' === r.method)) {
                    if (
                      t.iterator.return &&
                      ((r.method = 'return'),
                      (r.arg = void 0),
                      maybeInvokeDelegate(t, r),
                      'throw' === r.method)
                    )
                      return p;
                    (r.method = 'throw'),
                      (r.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return p;
                }
                var a = tryCatch(i, t.iterator, r.arg);
                if ('throw' === a.type)
                  return (
                    (r.method = 'throw'),
                    (r.arg = a.arg),
                    (r.delegate = null),
                    p
                  );
                var u = a.arg;
                return u
                  ? u.done
                    ? ((r[t.resultName] = u.value),
                      (r.next = t.nextLoc),
                      'return' !== r.method &&
                        ((r.method = 'next'), (r.arg = void 0)),
                      (r.delegate = null),
                      p)
                    : u
                  : ((r.method = 'throw'),
                    (r.arg = new TypeError('iterator result is not an object')),
                    (r.delegate = null),
                    p);
              }
              function pushTryEntry(t) {
                var r = { tryLoc: t[0] };
                1 in t && (r.catchLoc = t[1]),
                  2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
                  this.tryEntries.push(r);
              }
              function resetTryEntry(t) {
                var r = t.completion || {};
                (r.type = 'normal'), delete r.arg, (t.completion = r);
              }
              function Context(t) {
                (this.tryEntries = [{ tryLoc: 'root' }]),
                  t.forEach(pushTryEntry, this),
                  this.reset(!0);
              }
              function values(t) {
                if (t) {
                  var r = t[u];
                  if (r) return r.call(t);
                  if ('function' == typeof t.next) return t;
                  if (!isNaN(t.length)) {
                    var a = -1,
                      c = function next() {
                        for (; ++a < t.length; )
                          if (i.call(t, a))
                            return (next.value = t[a]), (next.done = !1), next;
                        return (next.value = void 0), (next.done = !0), next;
                      };
                    return (c.next = c);
                  }
                }
                return { next: doneResult };
              }
              function doneResult() {
                return { value: void 0, done: !0 };
              }
              return (
                (GeneratorFunction.prototype = v.constructor = GeneratorFunctionPrototype),
                (GeneratorFunctionPrototype.constructor = GeneratorFunction),
                (GeneratorFunctionPrototype[l] = GeneratorFunction.displayName =
                  'GeneratorFunction'),
                (t.isGeneratorFunction = function(t) {
                  var r = 'function' == typeof t && t.constructor;
                  return (
                    !!r &&
                    (r === GeneratorFunction ||
                      'GeneratorFunction' === (r.displayName || r.name))
                  );
                }),
                (t.mark = function(t) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                      : ((t.__proto__ = GeneratorFunctionPrototype),
                        l in t || (t[l] = 'GeneratorFunction')),
                    (t.prototype = Object.create(v)),
                    t
                  );
                }),
                (t.awrap = function(t) {
                  return { __await: t };
                }),
                defineIteratorMethods(AsyncIterator.prototype),
                (AsyncIterator.prototype[c] = function() {
                  return this;
                }),
                (t.AsyncIterator = AsyncIterator),
                (t.async = function(r, i, a, u, c) {
                  void 0 === c && (c = Promise);
                  var l = new AsyncIterator(wrap(r, i, a, u), c);
                  return t.isGeneratorFunction(i)
                    ? l
                    : l.next().then(function(t) {
                        return t.done ? t.value : l.next();
                      });
                }),
                defineIteratorMethods(v),
                (v[l] = 'Generator'),
                (v[u] = function() {
                  return this;
                }),
                (v.toString = function() {
                  return '[object Generator]';
                }),
                (t.keys = function(t) {
                  var r = [];
                  for (var i in t) r.push(i);
                  return (
                    r.reverse(),
                    function next() {
                      for (; r.length; ) {
                        var i = r.pop();
                        if (i in t)
                          return (next.value = i), (next.done = !1), next;
                      }
                      return (next.done = !0), next;
                    }
                  );
                }),
                (t.values = values),
                (Context.prototype = {
                  constructor: Context,
                  reset: function(t) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = void 0),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = 'next'),
                      (this.arg = void 0),
                      this.tryEntries.forEach(resetTryEntry),
                      !t)
                    )
                      for (var r in this)
                        't' === r.charAt(0) &&
                          i.call(this, r) &&
                          !isNaN(+r.slice(1)) &&
                          (this[r] = void 0);
                  },
                  stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ('throw' === t.type) throw t.arg;
                    return this.rval;
                  },
                  dispatchException: function(t) {
                    if (this.done) throw t;
                    var r = this;
                    function handle(i, a) {
                      return (
                        (c.type = 'throw'),
                        (c.arg = t),
                        (r.next = i),
                        a && ((r.method = 'next'), (r.arg = void 0)),
                        !!a
                      );
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                      var u = this.tryEntries[a],
                        c = u.completion;
                      if ('root' === u.tryLoc) return handle('end');
                      if (u.tryLoc <= this.prev) {
                        var l = i.call(u, 'catchLoc'),
                          p = i.call(u, 'finallyLoc');
                        if (l && p) {
                          if (this.prev < u.catchLoc)
                            return handle(u.catchLoc, !0);
                          if (this.prev < u.finallyLoc)
                            return handle(u.finallyLoc);
                        } else if (l) {
                          if (this.prev < u.catchLoc)
                            return handle(u.catchLoc, !0);
                        } else {
                          if (!p)
                            throw new Error(
                              'try statement without catch or finally'
                            );
                          if (this.prev < u.finallyLoc)
                            return handle(u.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function(t, r) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                      var u = this.tryEntries[a];
                      if (
                        u.tryLoc <= this.prev &&
                        i.call(u, 'finallyLoc') &&
                        this.prev < u.finallyLoc
                      ) {
                        var c = u;
                        break;
                      }
                    }
                    c &&
                      ('break' === t || 'continue' === t) &&
                      c.tryLoc <= r &&
                      r <= c.finallyLoc &&
                      (c = null);
                    var l = c ? c.completion : {};
                    return (
                      (l.type = t),
                      (l.arg = r),
                      c
                        ? ((this.method = 'next'),
                          (this.next = c.finallyLoc),
                          p)
                        : this.complete(l)
                    );
                  },
                  complete: function(t, r) {
                    if ('throw' === t.type) throw t.arg;
                    return (
                      'break' === t.type || 'continue' === t.type
                        ? (this.next = t.arg)
                        : 'return' === t.type
                        ? ((this.rval = this.arg = t.arg),
                          (this.method = 'return'),
                          (this.next = 'end'))
                        : 'normal' === t.type && r && (this.next = r),
                      p
                    );
                  },
                  finish: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var i = this.tryEntries[r];
                      if (i.finallyLoc === t)
                        return (
                          this.complete(i.completion, i.afterLoc),
                          resetTryEntry(i),
                          p
                        );
                    }
                  },
                  catch: function(t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var i = this.tryEntries[r];
                      if (i.tryLoc === t) {
                        var a = i.completion;
                        if ('throw' === a.type) {
                          var u = a.arg;
                          resetTryEntry(i);
                        }
                        return u;
                      }
                    }
                    throw new Error('illegal catch attempt');
                  },
                  delegateYield: function(t, r, i) {
                    return (
                      (this.delegate = {
                        iterator: values(t),
                        resultName: r,
                        nextLoc: i
                      }),
                      'next' === this.method && (this.arg = void 0),
                      p
                    );
                  }
                }),
                t
              );
            })(t.exports);
            try {
              regeneratorRuntime = a;
            } catch (t) {
              Function('r', 'regeneratorRuntime = r')(a);
            }
          },
          function(t, r) {
            function asyncGeneratorStep(t, r, i, a, u, c, l) {
              try {
                var p = t[c](l),
                  d = p.value;
              } catch (t) {
                return void i(t);
              }
              p.done ? r(d) : Promise.resolve(d).then(a, u);
            }
            t.exports = function _asyncToGenerator(t) {
              return function() {
                var r = this,
                  i = arguments;
                return new Promise(function(a, u) {
                  var c = t.apply(r, i);
                  function _next(t) {
                    asyncGeneratorStep(c, a, u, _next, _throw, 'next', t);
                  }
                  function _throw(t) {
                    asyncGeneratorStep(c, a, u, _next, _throw, 'throw', t);
                  }
                  _next(void 0);
                });
              };
            };
          },
          function(t, r, i) {
            var a = i(99),
              u = i(101);
            t.exports = function values(t) {
              return null == t ? [] : a(t, u(t));
            };
          },
          function(t, r, i) {
            var a = i(100);
            t.exports = function baseValues(t, r) {
              return a(r, function(r) {
                return t[r];
              });
            };
          },
          function(t, r) {
            t.exports = function arrayMap(t, r) {
              for (
                var i = -1, a = null == t ? 0 : t.length, u = Array(a);
                ++i < a;

              )
                u[i] = r(t[i], i, t);
              return u;
            };
          },
          function(t, r, i) {
            var a = i(102),
              u = i(114),
              c = i(118);
            t.exports = function keys(t) {
              return c(t) ? a(t) : u(t);
            };
          },
          function(t, r, i) {
            var a = i(103),
              u = i(104),
              c = i(106),
              l = i(107),
              p = i(109),
              d = i(110),
              y = Object.prototype.hasOwnProperty;
            t.exports = function arrayLikeKeys(t, r) {
              var i = c(t),
                h = !i && u(t),
                v = !i && !h && l(t),
                g = !i && !h && !v && d(t),
                m = i || h || v || g,
                b = m ? a(t.length, String) : [],
                _ = b.length;
              for (var w in t)
                (!r && !y.call(t, w)) ||
                  (m &&
                    ('length' == w ||
                      (v && ('offset' == w || 'parent' == w)) ||
                      (g &&
                        ('buffer' == w ||
                          'byteLength' == w ||
                          'byteOffset' == w)) ||
                      p(w, _))) ||
                  b.push(w);
              return b;
            };
          },
          function(t, r) {
            t.exports = function baseTimes(t, r) {
              for (var i = -1, a = Array(t); ++i < t; ) a[i] = r(i);
              return a;
            };
          },
          function(t, r, i) {
            var a = i(105),
              u = i(19),
              c = Object.prototype,
              l = c.hasOwnProperty,
              p = c.propertyIsEnumerable,
              d = a(
                (function() {
                  return arguments;
                })()
              )
                ? a
                : function(t) {
                    return u(t) && l.call(t, 'callee') && !p.call(t, 'callee');
                  };
            t.exports = d;
          },
          function(t, r, i) {
            var a = i(18),
              u = i(19);
            t.exports = function baseIsArguments(t) {
              return u(t) && '[object Arguments]' == a(t);
            };
          },
          function(t, r) {
            var i = Array.isArray;
            t.exports = i;
          },
          function(t, r, i) {
            (function(t) {
              var a = i(8),
                u = i(108),
                c = r && !r.nodeType && r,
                l = c && 'object' == typeof t && t && !t.nodeType && t,
                p = l && l.exports === c ? a.Buffer : void 0,
                d = (p ? p.isBuffer : void 0) || u;
              t.exports = d;
            }.call(this, i(30)(t)));
          },
          function(t, r) {
            t.exports = function stubFalse() {
              return !1;
            };
          },
          function(t, r) {
            var i = /^(?:0|[1-9]\d*)$/;
            t.exports = function isIndex(t, r) {
              var a = typeof t;
              return (
                !!(r = null == r ? 9007199254740991 : r) &&
                ('number' == a || ('symbol' != a && i.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < r
              );
            };
          },
          function(t, r, i) {
            var a = i(111),
              u = i(112),
              c = i(113),
              l = c && c.isTypedArray,
              p = l ? u(l) : a;
            t.exports = p;
          },
          function(t, r, i) {
            var a = i(18),
              u = i(31),
              c = i(19),
              l = {};
            (l['[object Float32Array]'] = l['[object Float64Array]'] = l[
              '[object Int8Array]'
            ] = l['[object Int16Array]'] = l['[object Int32Array]'] = l[
              '[object Uint8Array]'
            ] = l['[object Uint8ClampedArray]'] = l['[object Uint16Array]'] = l[
              '[object Uint32Array]'
            ] = !0),
              (l['[object Arguments]'] = l['[object Array]'] = l[
                '[object ArrayBuffer]'
              ] = l['[object Boolean]'] = l['[object DataView]'] = l[
                '[object Date]'
              ] = l['[object Error]'] = l['[object Function]'] = l[
                '[object Map]'
              ] = l['[object Number]'] = l['[object Object]'] = l[
                '[object RegExp]'
              ] = l['[object Set]'] = l['[object String]'] = l[
                '[object WeakMap]'
              ] = !1),
              (t.exports = function baseIsTypedArray(t) {
                return c(t) && u(t.length) && !!l[a(t)];
              });
          },
          function(t, r) {
            t.exports = function baseUnary(t) {
              return function(r) {
                return t(r);
              };
            };
          },
          function(t, r, i) {
            (function(t) {
              var a = i(26),
                u = r && !r.nodeType && r,
                c = u && 'object' == typeof t && t && !t.nodeType && t,
                l = c && c.exports === u && a.process,
                p = (function() {
                  try {
                    return (
                      (c && c.require && c.require('util').types) ||
                      (l && l.binding && l.binding('util'))
                    );
                  } catch (t) {}
                })();
              t.exports = p;
            }.call(this, i(30)(t)));
          },
          function(t, r, i) {
            var a = i(115),
              u = i(116),
              c = Object.prototype.hasOwnProperty;
            t.exports = function baseKeys(t) {
              if (!a(t)) return u(t);
              var r = [];
              for (var i in Object(t))
                c.call(t, i) && 'constructor' != i && r.push(i);
              return r;
            };
          },
          function(t, r) {
            var i = Object.prototype;
            t.exports = function isPrototype(t) {
              var r = t && t.constructor;
              return t === (('function' == typeof r && r.prototype) || i);
            };
          },
          function(t, r, i) {
            var a = i(117)(Object.keys, Object);
            t.exports = a;
          },
          function(t, r) {
            t.exports = function overArg(t, r) {
              return function(i) {
                return t(r(i));
              };
            };
          },
          function(t, r, i) {
            var a = i(24),
              u = i(31);
            t.exports = function isArrayLike(t) {
              return null != t && u(t.length) && !a(t);
            };
          },
          function(t, r) {
            function toposort(t, r) {
              var i = t.length,
                a = new Array(i),
                u = {},
                c = i,
                l = (function makeOutgoingEdges(t) {
                  for (var r = new Map(), i = 0, a = t.length; i < a; i++) {
                    var u = t[i];
                    r.has(u[0]) || r.set(u[0], new Set()),
                      r.has(u[1]) || r.set(u[1], new Set()),
                      r.get(u[0]).add(u[1]);
                  }
                  return r;
                })(r),
                p = (function makeNodesHash(t) {
                  for (var r = new Map(), i = 0, a = t.length; i < a; i++)
                    r.set(t[i], i);
                  return r;
                })(t);
              for (
                r.forEach(function(t) {
                  if (!p.has(t[0]) || !p.has(t[1]))
                    throw new Error(
                      'Unknown node. There is an unknown node in the supplied edges.'
                    );
                });
                c--;

              )
                u[c] || visit(t[c], c, new Set());
              return a;
              function visit(t, r, c) {
                if (c.has(t)) {
                  var d;
                  try {
                    d = ', node was:' + JSON.stringify(t);
                  } catch (t) {
                    d = '';
                  }
                  throw new Error('Cyclic dependency' + d);
                }
                if (!p.has(t))
                  throw new Error(
                    'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' +
                      JSON.stringify(t)
                  );
                if (!u[r]) {
                  u[r] = !0;
                  var y = l.get(t) || new Set();
                  if ((r = (y = Array.from(y)).length)) {
                    c.add(t);
                    do {
                      var h = y[--r];
                      visit(h, p.get(h), c);
                    } while (r);
                    c.delete(t);
                  }
                  a[--i] = t;
                }
              }
            }
            (t.exports = function(t) {
              return toposort(
                (function uniqueNodes(t) {
                  for (var r = new Set(), i = 0, a = t.length; i < a; i++) {
                    var u = t[i];
                    r.add(u[0]), r.add(u[1]);
                  }
                  return Array.from(r);
                })(t),
                t
              );
            }),
              (t.exports.array = toposort);
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0);
            var u = a(i(1)),
              c = a(i(5)),
              l = a(i(6)),
              p = a(i(2)),
              d = a(i(7));
            var y = (function(t) {
              (0, c.default)(LocalService, t);
              var r = (function _createSuper(t) {
                var r = (function _isNativeReflectConstruct() {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function() {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function() {
                  var i,
                    a = (0, p.default)(t);
                  if (r) {
                    var u = (0, p.default)(this).constructor;
                    i = Reflect.construct(a, arguments, u);
                  } else i = a.apply(this, arguments);
                  return (0, l.default)(this, i);
                };
              })(LocalService);
              function LocalService(t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return (
                  (0, u.default)(this, LocalService),
                  r.call(this, d.default.LOCAL, t, i)
                );
              }
              return LocalService;
            })(a(i(9)).default);
            r.default = y;
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0);
            var u = a(i(1)),
              c = a(i(5)),
              l = a(i(6)),
              p = a(i(2)),
              d = a(i(7));
            var y = (function(t) {
              (0, c.default)(PublicService, t);
              var r = (function _createSuper(t) {
                var r = (function _isNativeReflectConstruct() {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function() {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function() {
                  var i,
                    a = (0, p.default)(t);
                  if (r) {
                    var u = (0, p.default)(this).constructor;
                    i = Reflect.construct(a, arguments, u);
                  } else i = a.apply(this, arguments);
                  return (0, l.default)(this, i);
                };
              })(PublicService);
              function PublicService(t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return (
                  (0, u.default)(this, PublicService),
                  r.call(this, d.default.PUBLIC, t, i)
                );
              }
              return PublicService;
            })(a(i(9)).default);
            r.default = y;
          },
          function(t, r, i) {
            var a = i(0);
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.default = void 0);
            var u = a(i(1)),
              c = a(i(5)),
              l = a(i(6)),
              p = a(i(2)),
              d = a(i(7));
            var y = (function(t) {
              (0, c.default)(PrivateService, t);
              var r = (function _createSuper(t) {
                var r = (function _isNativeReflectConstruct() {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function() {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function() {
                  var i,
                    a = (0, p.default)(t);
                  if (r) {
                    var u = (0, p.default)(this).constructor;
                    i = Reflect.construct(a, arguments, u);
                  } else i = a.apply(this, arguments);
                  return (0, l.default)(this, i);
                };
              })(PrivateService);
              function PrivateService(t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return (
                  (0, u.default)(this, PrivateService),
                  r.call(this, d.default.PRIVATE, t, i)
                );
              }
              return PrivateService;
            })(a(i(9)).default);
            r.default = y;
          }
        ]);
      });
    },
    function(t, r, i) {
      var a = i(8),
        u = i(25);
      t.exports = i(9)
        ? function(t, r, i) {
            return a.f(t, r, u(1, i));
          }
        : function(t, r, i) {
            return (t[r] = i), t;
          };
    },
    function(t, r) {
      t.exports = function(t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t;
      };
    },
    function(t, r) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function(t, r, i) {
      var a = i(56),
        u = i(36);
      t.exports = function(t) {
        return a(u(t));
      };
    },
    function(t, r, i) {
      var a = i(138),
        u = i(139),
        c = i(70),
        l = i(140);
      (t.exports = function _slicedToArray(t, r) {
        return a(t) || u(t, r) || c(t, r) || l();
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      (function(t) {
        var a = i(0);
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.fromBuffer = r.toBuffer = r.paddedArray = r.getCurrency = r.netIdtoSpockUrlStaging = r.netIdtoSpockUrl = r.netIdToName = void 0);
        var u = a(i(48)),
          c = i(51),
          l = a(i(73)),
          p = i(5);
        r.netIdToName = function netIdToName(t) {
          switch (parseInt(t, 10)) {
            case 1:
              return 'mainnet';
            case 42:
              return 'kovan';
            case 999:
              return 'ganache';
            default:
              return '';
          }
        };
        r.netIdtoSpockUrl = function netIdtoSpockUrl(t) {
          switch (parseInt(t, 10)) {
            case 1:
              return p.MAINNET_URL;
            case 42:
              return p.KOVAN_URL;
            default:
              return p.STAGING_MAINNET_URL;
          }
        };
        r.netIdtoSpockUrlStaging = function netIdtoSpockUrlStaging(t) {
          switch (parseInt(t, 10)) {
            case 1:
              return p.STAGING_MAINNET_URL;
            case 42:
              return p.KOVAN_URL;
            default:
              return p.STAGING_MAINNET_URL;
          }
        };
        var d = (0, c.createGetCurrency)({ MKR: p.MKR });
        r.getCurrency = d;
        r.paddedArray = function paddedArray(t, r) {
          var i;
          return (i = Array.from({ length: t }).map(function() {
            return 0;
          })).concat.apply(i, (0, u.default)(r));
        };
        r.toBuffer = function toBuffer(r, i) {
          var a,
            u,
            c,
            p,
            d = new l.default(r).toString(16);
          if (
            (i || (i = {}),
            (c = { 1: 'big', '-1': 'little' }[i.endian] || i.endian || 'big'),
            '-' === d.charAt(0))
          )
            throw new Error(
              'Converting negative numbers to Buffers not supported yet'
            );
          for (
            p = 'auto' === i.size ? Math.ceil(d.length / 2) : i.size || 1,
              u = Math.ceil(d.length / (2 * p)) * p,
              a = t.alloc(u);
            d.length < 2 * u;

          )
            d = '0'.concat(d);
          return (
            d
              .split(new RegExp('(.{'.concat(2 * p, '})')))
              .filter(function(t) {
                return t.length > 0;
              })
              .forEach(function(t, r) {
                for (var i = 0; i < p; i++) {
                  a[r * p + ('big' === c ? i : p - i - 1)] = parseInt(
                    t.slice(2 * i, 2 * i + 2),
                    16
                  );
                }
              }),
            a
          );
        };
        r.fromBuffer = function fromBuffer(t, r) {
          r || (r = {});
          var i = { 1: 'big', '-1': 'little' }[r.endian] || r.endian || 'big',
            a = 'auto' === r.size ? Math.ceil(t.length) : r.size || 1;
          if (t.length % a != 0)
            throw new RangeError(
              'Buffer length ('
                .concat(t.length, ') must be a multiple of size (')
                .concat(a, ')')
            );
          for (var u = [], c = 0; c < t.length; c += a) {
            for (var p = [], d = 0; d < a; d++)
              p.push(t[c + ('big' === i ? d : a - d - 1)]);
            u.push(
              p
                .map(function(t) {
                  return (t < 16 ? '0' : '') + t.toString(16);
                })
                .join('')
            );
          }
          return new l.default(u.join(''), 16);
        };
      }.call(this, i(142).Buffer));
    },
    function(t, r) {
      (t.exports = function _defineProperty(t, r, i) {
        return (
          r in t
            ? Object.defineProperty(t, r, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[r] = i),
          t
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      t.exports = function(t, r) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: r
        };
      };
    },
    function(t, r, i) {
      var a = i(36);
      t.exports = function(t) {
        return Object(a(t));
      };
    },
    function(t, r) {
      t.exports = {};
    },
    function(t, r, i) {
      var a = i(55),
        u = i(40);
      t.exports =
        Object.keys ||
        function keys(t) {
          return a(t, u);
        };
    },
    function(t, r) {
      t.exports = !0;
    },
    function(t, r) {
      var i = 0,
        a = Math.random();
      t.exports = function(t) {
        return 'Symbol('.concat(
          void 0 === t ? '' : t,
          ')_',
          (++i + a).toString(36)
        );
      };
    },
    function(t, r) {
      r.f = {}.propertyIsEnumerable;
    },
    function(t, r) {
      function _typeof(r) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? ((t.exports = _typeof = function _typeof(t) {
                return typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = _typeof = function _typeof(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          _typeof(r)
        );
      }
      (t.exports = _typeof),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      var a = i(85);
      t.exports = function(t, r, i) {
        if ((a(t), void 0 === r)) return t;
        switch (i) {
          case 1:
            return function(i) {
              return t.call(r, i);
            };
          case 2:
            return function(i, a) {
              return t.call(r, i, a);
            };
          case 3:
            return function(i, a, u) {
              return t.call(r, i, a, u);
            };
        }
        return function() {
          return t.apply(r, arguments);
        };
      };
    },
    function(t, r, i) {
      var a = i(19);
      t.exports = function(t, r) {
        if (!a(t)) return t;
        var i, u;
        if (r && 'function' == typeof (i = t.toString) && !a((u = i.call(t))))
          return u;
        if ('function' == typeof (i = t.valueOf) && !a((u = i.call(t))))
          return u;
        if (!r && 'function' == typeof (i = t.toString) && !a((u = i.call(t))))
          return u;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(t, r) {
      var i = {}.toString;
      t.exports = function(t) {
        return i.call(t).slice(8, -1);
      };
    },
    function(t, r) {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function(t, r) {
      var i = Math.ceil,
        a = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? a : i)(t);
      };
    },
    function(t, r, i) {
      var a = i(39)('keys'),
        u = i(30);
      t.exports = function(t) {
        return a[t] || (a[t] = u(t));
      };
    },
    function(t, r, i) {
      var a = i(1),
        u = i(7),
        c = u['__core-js_shared__'] || (u['__core-js_shared__'] = {});
      (t.exports = function(t, r) {
        return c[t] || (c[t] = void 0 !== r ? r : {});
      })('versions', []).push({
        version: a.version,
        mode: i(29) ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      });
    },
    function(t, r) {
      t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      );
    },
    function(t, r) {
      r.f = Object.getOwnPropertySymbols;
    },
    function(t, r, i) {
      var a = i(94)(!0);
      i(63)(
        String,
        'String',
        function(t) {
          (this._t = String(t)), (this._i = 0);
        },
        function() {
          var t,
            r = this._t,
            i = this._i;
          return i >= r.length
            ? { value: void 0, done: !0 }
            : ((t = a(r, i)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function(t, r, i) {
      var a = i(12),
        u = i(96),
        c = i(40),
        l = i(38)('IE_PROTO'),
        Empty = function() {},
        createDict = function() {
          var t,
            r = i(54)('iframe'),
            a = c.length;
          for (
            r.style.display = 'none',
              i(97).appendChild(r),
              r.src = 'javascript:',
              (t = r.contentWindow.document).open(),
              t.write('<script>document.F=Object</script>'),
              t.close(),
              createDict = t.F;
            a--;

          )
            delete createDict.prototype[c[a]];
          return createDict();
        };
      t.exports =
        Object.create ||
        function create(t, r) {
          var i;
          return (
            null !== t
              ? ((Empty.prototype = a(t)),
                (i = new Empty()),
                (Empty.prototype = null),
                (i[l] = t))
              : (i = createDict()),
            void 0 === r ? i : u(i, r)
          );
        };
    },
    function(t, r, i) {
      var a = i(8).f,
        u = i(13),
        c = i(2)('toStringTag');
      t.exports = function(t, r, i) {
        t &&
          !u((t = i ? t : t.prototype), c) &&
          a(t, c, { configurable: !0, value: r });
      };
    },
    function(t, r, i) {
      r.f = i(2);
    },
    function(t, r, i) {
      var a = i(7),
        u = i(1),
        c = i(29),
        l = i(45),
        p = i(8).f;
      t.exports = function(t) {
        var r = u.Symbol || (u.Symbol = c ? {} : a.Symbol || {});
        '_' == t.charAt(0) || t in r || p(r, t, { value: l.f(t) });
      };
    },
    function(t, r) {
      var i;
      i = (function() {
        return this;
      })();
      try {
        i = i || new Function('return this')();
      } catch (t) {
        'object' == typeof window && (i = window);
      }
      t.exports = i;
    },
    function(t, r, i) {
      var a = i(146),
        u = i(147),
        c = i(70),
        l = i(148);
      (t.exports = function _toConsumableArray(t) {
        return a(t) || u(t) || c(t) || l();
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      var a = i(176).Symbol;
      t.exports = a;
    },
    function(t, r) {
      var i = RegExp(
        '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
      );
      t.exports = function hasUnicode(t) {
        return i.test(t);
      };
    },
    function(t, r, i) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.createGetCurrency = r.Currency = void 0);
      var a = _interopRequireDefault(i(52)),
        u = _interopRequireDefault(i(58)),
        c = _interopRequireDefault(i(60)),
        l = _interopRequireDefault(i(61)),
        p = _interopRequireDefault(i(68));
      (r.createCurrency = function createCurrency(t) {
        var r = function creatorFn(t, r) {
            return new i(t, r);
          },
          i = (function(i) {
            function CurrencyX(i, a) {
              (0, c.default)(this, CurrencyX);
              var p = (0, l.default)(
                this,
                (CurrencyX.__proto__ || (0, u.default)(CurrencyX)).call(
                  this,
                  i,
                  a
                )
              );
              return (p.symbol = t), (p.type = r), p;
            }
            return (0, p.default)(CurrencyX, i), CurrencyX;
          })(y);
        return (
          Object.defineProperty(i, 'name', { value: t }),
          Object.defineProperty(i, 'symbol', { value: t }),
          (0, a.default)(r, {
            wei: makeShiftedCreatorFn(r, t, 'wei'),
            ray: makeShiftedCreatorFn(r, t, 'ray'),
            rad: makeShiftedCreatorFn(r, t, 'rad'),
            symbol: t,
            isInstance: function isInstance(t) {
              return t instanceof i;
            }
          }),
          (0, a.default)(i, { wei: r.wei, ray: r.ray }),
          r
        );
      }),
        (r.createCurrencyRatio = function createCurrencyRatio(t, r) {
          var i = t(0).constructor,
            u = r(0).constructor,
            c = function creatorFn(t, r) {
              return new d.CurrencyRatio(t, i, u, r);
            },
            l = i.symbol + '/' + u.symbol;
          return (
            (0, a.default)(c, {
              wei: makeShiftedCreatorFn(c, l, 'wei'),
              ray: makeShiftedCreatorFn(c, l, 'ray'),
              rad: makeShiftedCreatorFn(c, l, 'rad'),
              symbol: l,
              isInstance: function isInstance(t) {
                return t instanceof d.CurrencyRatio && t.symbol === l;
              }
            }),
            c
          );
        });
      var d = i(118);
      function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var y = (r.Currency = d.Currency);
      function makeShiftedCreatorFn(t, r, i) {
        var a = function fn(r) {
          return t(r, i);
        };
        return (a.symbol = r), (a.shift = i), a;
      }
      r.createGetCurrency = function createGetCurrency(t) {
        return function(r, i) {
          if (r instanceof y) return r;
          if (!i) throw new Error('Amount is not a Currency');
          var a = 'string' == typeof i ? i.toUpperCase() : i.symbol,
            u = t[a];
          if (!u) throw new Error('Couldn\'t find currency for "' + a + '"');
          return u(r, i.shift);
        };
      };
    },
    function(t, r, i) {
      t.exports = { default: i(83), __esModule: !0 };
    },
    function(t, r, i) {
      t.exports =
        !i(9) &&
        !i(20)(function() {
          return (
            7 !=
            Object.defineProperty(i(54)('div'), 'a', {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    function(t, r, i) {
      var a = i(19),
        u = i(7).document,
        c = a(u) && a(u.createElement);
      t.exports = function(t) {
        return c ? u.createElement(t) : {};
      };
    },
    function(t, r, i) {
      var a = i(13),
        u = i(21),
        c = i(87)(!1),
        l = i(38)('IE_PROTO');
      t.exports = function(t, r) {
        var i,
          p = u(t),
          d = 0,
          y = [];
        for (i in p) i != l && a(p, i) && y.push(i);
        for (; r.length > d; ) a(p, (i = r[d++])) && (~c(y, i) || y.push(i));
        return y;
      };
    },
    function(t, r, i) {
      var a = i(35);
      t.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return 'String' == a(t) ? t.split('') : Object(t);
          };
    },
    function(t, r, i) {
      var a = i(37),
        u = Math.min;
      t.exports = function(t) {
        return t > 0 ? u(a(t), 9007199254740991) : 0;
      };
    },
    function(t, r, i) {
      t.exports = { default: i(89), __esModule: !0 };
    },
    function(t, r, i) {
      var a = i(13),
        u = i(26),
        c = i(38)('IE_PROTO'),
        l = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = u(t)),
            a(t, c)
              ? t[c]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? l
              : null
          );
        };
    },
    function(t, r, i) {
      (r.__esModule = !0),
        (r.default = function(t, r) {
          if (!(t instanceof r))
            throw new TypeError('Cannot call a class as a function');
        });
    },
    function(t, r, i) {
      r.__esModule = !0;
      var a = (function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      })(i(62));
      r.default = function(t, r) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !r ||
          ('object' !== (void 0 === r ? 'undefined' : (0, a.default)(r)) &&
            'function' != typeof r)
          ? t
          : r;
      };
    },
    function(t, r, i) {
      r.__esModule = !0;
      var a = _interopRequireDefault(i(92)),
        u = _interopRequireDefault(i(101)),
        c =
          'function' == typeof u.default && 'symbol' == typeof a.default
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof u.default &&
                  t.constructor === u.default &&
                  t !== u.default.prototype
                  ? 'symbol'
                  : typeof t;
              };
      function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      }
      r.default =
        'function' == typeof u.default && 'symbol' === c(a.default)
          ? function(t) {
              return void 0 === t ? 'undefined' : c(t);
            }
          : function(t) {
              return t &&
                'function' == typeof u.default &&
                t.constructor === u.default &&
                t !== u.default.prototype
                ? 'symbol'
                : void 0 === t
                ? 'undefined'
                : c(t);
            };
    },
    function(t, r, i) {
      var a = i(29),
        u = i(6),
        c = i(64),
        l = i(18),
        p = i(27),
        d = i(95),
        y = i(44),
        h = i(59),
        v = i(2)('iterator'),
        g = !([].keys && 'next' in [].keys()),
        returnThis = function() {
          return this;
        };
      t.exports = function(t, r, i, m, b, _, w) {
        d(i, r, m);
        var x,
          O,
          S,
          getMethod = function(t) {
            if (!g && t in T) return T[t];
            switch (t) {
              case 'keys':
                return function keys() {
                  return new i(this, t);
                };
              case 'values':
                return function values() {
                  return new i(this, t);
                };
            }
            return function entries() {
              return new i(this, t);
            };
          },
          k = r + ' Iterator',
          E = 'values' == b,
          A = !1,
          T = t.prototype,
          N = T[v] || T['@@iterator'] || (b && T[b]),
          P = N || getMethod(b),
          C = b ? (E ? getMethod('entries') : P) : void 0,
          I = ('Array' == r && T.entries) || N;
        if (
          (I &&
            (S = h(I.call(new t()))) !== Object.prototype &&
            S.next &&
            (y(S, k, !0),
            a || 'function' == typeof S[v] || l(S, v, returnThis)),
          E &&
            N &&
            'values' !== N.name &&
            ((A = !0),
            (P = function values() {
              return N.call(this);
            })),
          (a && !w) || (!g && !A && T[v]) || l(T, v, P),
          (p[r] = P),
          (p[k] = returnThis),
          b)
        )
          if (
            ((x = {
              values: E ? P : getMethod('values'),
              keys: _ ? P : getMethod('keys'),
              entries: C
            }),
            w)
          )
            for (O in x) O in T || c(T, O, x[O]);
          else u(u.P + u.F * (g || A), r, x);
        return x;
      };
    },
    function(t, r, i) {
      t.exports = i(18);
    },
    function(t, r, i) {
      i(98);
      for (
        var a = i(7),
          u = i(18),
          c = i(27),
          l = i(2)('toStringTag'),
          p = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ','
          ),
          d = 0;
        d < p.length;
        d++
      ) {
        var y = p[d],
          h = a[y],
          v = h && h.prototype;
        v && !v[l] && u(v, l, y), (c[y] = c.Array);
      }
    },
    function(t, r, i) {
      var a = i(55),
        u = i(40).concat('length', 'prototype');
      r.f =
        Object.getOwnPropertyNames ||
        function getOwnPropertyNames(t) {
          return a(t, u);
        };
    },
    function(t, r, i) {
      var a = i(31),
        u = i(25),
        c = i(21),
        l = i(34),
        p = i(13),
        d = i(53),
        y = Object.getOwnPropertyDescriptor;
      r.f = i(9)
        ? y
        : function getOwnPropertyDescriptor(t, r) {
            if (((t = c(t)), (r = l(r, !0)), d))
              try {
                return y(t, r);
              } catch (t) {}
            if (p(t, r)) return u(!a.f.call(t, r), t[r]);
          };
    },
    function(t, r, i) {
      r.__esModule = !0;
      var a = _interopRequireDefault(i(111)),
        u = _interopRequireDefault(i(115)),
        c = _interopRequireDefault(i(62));
      function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      }
      r.default = function(t, r) {
        if ('function' != typeof r && null !== r)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              (void 0 === r ? 'undefined' : (0, c.default)(r))
          );
        (t.prototype = (0, u.default)(r && r.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          r && (a.default ? (0, a.default)(t, r) : (t.__proto__ = r));
      };
    },
    function(t, r, i) {
      var a = i(122),
        u = i(2)('iterator'),
        c = i(27);
      t.exports = i(1).getIteratorMethod = function(t) {
        if (null != t) return t[u] || t['@@iterator'] || c[a(t)];
      };
    },
    function(t, r, i) {
      var a = i(71);
      (t.exports = function _unsupportedIterableToArray(t, r) {
        if (t) {
          if ('string' == typeof t) return a(t, r);
          var i = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === i && t.constructor && (i = t.constructor.name),
            'Map' === i || 'Set' === i
              ? Array.from(t)
              : 'Arguments' === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? a(t, r)
              : void 0
          );
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      (t.exports = function _arrayLikeToArray(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var i = 0, a = new Array(r); i < r; i++) a[i] = t[i];
        return a;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      (t.exports = function _assertThisInitialized(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      var a;
      !(function(u) {
        var c,
          l = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          p = Math.ceil,
          d = Math.floor,
          y = '[BigNumber Error] ',
          h = y + 'Number primitive has more than 15 significant digits: ',
          v = 1e14,
          g = [
            1,
            10,
            100,
            1e3,
            1e4,
            1e5,
            1e6,
            1e7,
            1e8,
            1e9,
            1e10,
            1e11,
            1e12,
            1e13
          ],
          m = 1e9;
        function bitFloor(t) {
          var r = 0 | t;
          return t > 0 || t === r ? r : r - 1;
        }
        function coeffToString(t) {
          for (var r, i, a = 1, u = t.length, c = t[0] + ''; a < u; ) {
            for (i = 14 - (r = t[a++] + '').length; i--; r = '0' + r);
            c += r;
          }
          for (u = c.length; 48 === c.charCodeAt(--u); );
          return c.slice(0, u + 1 || 1);
        }
        function compare(t, r) {
          var i,
            a,
            u = t.c,
            c = r.c,
            l = t.s,
            p = r.s,
            d = t.e,
            y = r.e;
          if (!l || !p) return null;
          if (((i = u && !u[0]), (a = c && !c[0]), i || a))
            return i ? (a ? 0 : -p) : l;
          if (l != p) return l;
          if (((i = l < 0), (a = d == y), !u || !c))
            return a ? 0 : !u ^ i ? 1 : -1;
          if (!a) return (d > y) ^ i ? 1 : -1;
          for (p = (d = u.length) < (y = c.length) ? d : y, l = 0; l < p; l++)
            if (u[l] != c[l]) return (u[l] > c[l]) ^ i ? 1 : -1;
          return d == y ? 0 : (d > y) ^ i ? 1 : -1;
        }
        function intCheck(t, r, i, a) {
          if (t < r || t > i || t !== (t < 0 ? p(t) : d(t)))
            throw Error(
              y +
                (a || 'Argument') +
                ('number' == typeof t
                  ? t < r || t > i
                    ? ' out of range: '
                    : ' not an integer: '
                  : ' not a primitive number: ') +
                t
            );
        }
        function isArray(t) {
          return '[object Array]' == Object.prototype.toString.call(t);
        }
        function isOdd(t) {
          var r = t.c.length - 1;
          return bitFloor(t.e / 14) == r && t.c[r] % 2 != 0;
        }
        function toExponential(t, r) {
          return (
            (t.length > 1 ? t.charAt(0) + '.' + t.slice(1) : t) +
            (r < 0 ? 'e' : 'e+') +
            r
          );
        }
        function toFixedPoint(t, r, i) {
          var a, u;
          if (r < 0) {
            for (u = i + '.'; ++r; u += i);
            t = u + t;
          } else if (++r > (a = t.length)) {
            for (u = i, r -= a; --r; u += i);
            t += u;
          } else r < a && (t = t.slice(0, r) + '.' + t.slice(r));
          return t;
        }
        ((c = (function clone(t) {
          var r,
            i,
            a,
            u,
            c,
            b,
            _,
            w,
            x,
            O = (BigNumber.prototype = {
              constructor: BigNumber,
              toString: null,
              valueOf: null
            }),
            S = new BigNumber(1),
            k = 20,
            E = 4,
            A = -7,
            T = 21,
            N = -1e7,
            P = 1e7,
            C = !1,
            I = 1,
            B = 0,
            R = {
              decimalSeparator: '.',
              groupSeparator: ',',
              groupSize: 3,
              secondaryGroupSize: 0,
              fractionGroupSeparator: ' ',
              fractionGroupSize: 0
            },
            j = '0123456789abcdefghijklmnopqrstuvwxyz';
          function BigNumber(t, r) {
            var u,
              c,
              p,
              y,
              v,
              g,
              m,
              b,
              _ = this;
            if (!(_ instanceof BigNumber)) return new BigNumber(t, r);
            if (null == r) {
              if (t instanceof BigNumber)
                return (
                  (_.s = t.s),
                  (_.e = t.e),
                  void (_.c = (t = t.c) ? t.slice() : t)
                );
              if ((g = 'number' == typeof t) && 0 * t == 0) {
                if (((_.s = 1 / t < 0 ? ((t = -t), -1) : 1), t === ~~t)) {
                  for (y = 0, v = t; v >= 10; v /= 10, y++);
                  return (_.e = y), void (_.c = [t]);
                }
                b = t + '';
              } else {
                if (!l.test((b = t + ''))) return a(_, b, g);
                _.s = 45 == b.charCodeAt(0) ? ((b = b.slice(1)), -1) : 1;
              }
              (y = b.indexOf('.')) > -1 && (b = b.replace('.', '')),
                (v = b.search(/e/i)) > 0
                  ? (y < 0 && (y = v),
                    (y += +b.slice(v + 1)),
                    (b = b.substring(0, v)))
                  : y < 0 && (y = b.length);
            } else {
              if ((intCheck(r, 2, j.length, 'Base'), (b = t + ''), 10 == r))
                return round(
                  (_ = new BigNumber(t instanceof BigNumber ? t : b)),
                  k + _.e + 1,
                  E
                );
              if ((g = 'number' == typeof t)) {
                if (0 * t != 0) return a(_, b, g, r);
                if (
                  ((_.s = 1 / t < 0 ? ((b = b.slice(1)), -1) : 1),
                  BigNumber.DEBUG && b.replace(/^0\.0*|\./, '').length > 15)
                )
                  throw Error(h + t);
                g = !1;
              } else _.s = 45 === b.charCodeAt(0) ? ((b = b.slice(1)), -1) : 1;
              for (u = j.slice(0, r), y = v = 0, m = b.length; v < m; v++)
                if (u.indexOf((c = b.charAt(v))) < 0) {
                  if ('.' == c) {
                    if (v > y) {
                      y = m;
                      continue;
                    }
                  } else if (
                    !p &&
                    ((b == b.toUpperCase() && (b = b.toLowerCase())) ||
                      (b == b.toLowerCase() && (b = b.toUpperCase())))
                  ) {
                    (p = !0), (v = -1), (y = 0);
                    continue;
                  }
                  return a(_, t + '', g, r);
                }
              (y = (b = i(b, r, 10, _.s)).indexOf('.')) > -1
                ? (b = b.replace('.', ''))
                : (y = b.length);
            }
            for (v = 0; 48 === b.charCodeAt(v); v++);
            for (m = b.length; 48 === b.charCodeAt(--m); );
            if ((b = b.slice(v, ++m))) {
              if (
                ((m -= v),
                g &&
                  BigNumber.DEBUG &&
                  m > 15 &&
                  (t > 9007199254740991 || t !== d(t)))
              )
                throw Error(h + _.s * t);
              if ((y = y - v - 1) > P) _.c = _.e = null;
              else if (y < N) _.c = [(_.e = 0)];
              else {
                if (
                  ((_.e = y),
                  (_.c = []),
                  (v = (y + 1) % 14),
                  y < 0 && (v += 14),
                  v < m)
                ) {
                  for (v && _.c.push(+b.slice(0, v)), m -= 14; v < m; )
                    _.c.push(+b.slice(v, (v += 14)));
                  v = 14 - (b = b.slice(v)).length;
                } else v -= m;
                for (; v--; b += '0');
                _.c.push(+b);
              }
            } else _.c = [(_.e = 0)];
          }
          function format(t, r, i, a) {
            var u, c, l, p, d;
            if ((null == i ? (i = E) : intCheck(i, 0, 8), !t.c))
              return t.toString();
            if (((u = t.c[0]), (l = t.e), null == r))
              (d = coeffToString(t.c)),
                (d =
                  1 == a || (2 == a && l <= A)
                    ? toExponential(d, l)
                    : toFixedPoint(d, l, '0'));
            else if (
              ((c = (t = round(new BigNumber(t), r, i)).e),
              (p = (d = coeffToString(t.c)).length),
              1 == a || (2 == a && (r <= c || c <= A)))
            ) {
              for (; p < r; d += '0', p++);
              d = toExponential(d, c);
            } else if (((r -= l), (d = toFixedPoint(d, c, '0')), c + 1 > p)) {
              if (--r > 0) for (d += '.'; r--; d += '0');
            } else if ((r += c - p) > 0)
              for (c + 1 == p && (d += '.'); r--; d += '0');
            return t.s < 0 && u ? '-' + d : d;
          }
          function maxOrMin(t, r) {
            var i,
              a,
              u = 0;
            for (
              isArray(t[0]) && (t = t[0]), i = new BigNumber(t[0]);
              ++u < t.length;

            ) {
              if (!(a = new BigNumber(t[u])).s) {
                i = a;
                break;
              }
              r.call(i, a) && (i = a);
            }
            return i;
          }
          function normalise(t, r, i) {
            for (var a = 1, u = r.length; !r[--u]; r.pop());
            for (u = r[0]; u >= 10; u /= 10, a++);
            return (
              (i = a + 14 * i - 1) > P
                ? (t.c = t.e = null)
                : i < N
                ? (t.c = [(t.e = 0)])
                : ((t.e = i), (t.c = r)),
              t
            );
          }
          function round(t, r, i, a) {
            var u,
              c,
              l,
              y,
              h,
              m,
              b,
              _ = t.c,
              w = g;
            if (_) {
              e: {
                for (u = 1, y = _[0]; y >= 10; y /= 10, u++);
                if ((c = r - u) < 0)
                  (c += 14),
                    (l = r),
                    (b = ((h = _[(m = 0)]) / w[u - l - 1]) % 10 | 0);
                else if ((m = p((c + 1) / 14)) >= _.length) {
                  if (!a) break e;
                  for (; _.length <= m; _.push(0));
                  (h = b = 0), (u = 1), (l = (c %= 14) - 14 + 1);
                } else {
                  for (h = y = _[m], u = 1; y >= 10; y /= 10, u++);
                  b =
                    (l = (c %= 14) - 14 + u) < 0
                      ? 0
                      : (h / w[u - l - 1]) % 10 | 0;
                }
                if (
                  ((a =
                    a ||
                    r < 0 ||
                    null != _[m + 1] ||
                    (l < 0 ? h : h % w[u - l - 1])),
                  (a =
                    i < 4
                      ? (b || a) && (0 == i || i == (t.s < 0 ? 3 : 2))
                      : b > 5 ||
                        (5 == b &&
                          (4 == i ||
                            a ||
                            (6 == i &&
                              (c > 0 ? (l > 0 ? h / w[u - l] : 0) : _[m - 1]) %
                                10 &
                                1) ||
                            i == (t.s < 0 ? 8 : 7)))),
                  r < 1 || !_[0])
                )
                  return (
                    (_.length = 0),
                    a
                      ? ((r -= t.e + 1),
                        (_[0] = w[(14 - (r % 14)) % 14]),
                        (t.e = -r || 0))
                      : (_[0] = t.e = 0),
                    t
                  );
                if (
                  (0 == c
                    ? ((_.length = m), (y = 1), m--)
                    : ((_.length = m + 1),
                      (y = w[14 - c]),
                      (_[m] = l > 0 ? d((h / w[u - l]) % w[l]) * y : 0)),
                  a)
                )
                  for (;;) {
                    if (0 == m) {
                      for (c = 1, l = _[0]; l >= 10; l /= 10, c++);
                      for (l = _[0] += y, y = 1; l >= 10; l /= 10, y++);
                      c != y && (t.e++, _[0] == v && (_[0] = 1));
                      break;
                    }
                    if (((_[m] += y), _[m] != v)) break;
                    (_[m--] = 0), (y = 1);
                  }
                for (c = _.length; 0 === _[--c]; _.pop());
              }
              t.e > P ? (t.c = t.e = null) : t.e < N && (t.c = [(t.e = 0)]);
            }
            return t;
          }
          return (
            (BigNumber.clone = clone),
            (BigNumber.ROUND_UP = 0),
            (BigNumber.ROUND_DOWN = 1),
            (BigNumber.ROUND_CEIL = 2),
            (BigNumber.ROUND_FLOOR = 3),
            (BigNumber.ROUND_HALF_UP = 4),
            (BigNumber.ROUND_HALF_DOWN = 5),
            (BigNumber.ROUND_HALF_EVEN = 6),
            (BigNumber.ROUND_HALF_CEIL = 7),
            (BigNumber.ROUND_HALF_FLOOR = 8),
            (BigNumber.EUCLID = 9),
            (BigNumber.config = BigNumber.set = function(t) {
              var r, i;
              if (null != t) {
                if ('object' != typeof t)
                  throw Error(y + 'Object expected: ' + t);
                if (
                  (t.hasOwnProperty((r = 'DECIMAL_PLACES')) &&
                    (intCheck((i = t[r]), 0, m, r), (k = i)),
                  t.hasOwnProperty((r = 'ROUNDING_MODE')) &&
                    (intCheck((i = t[r]), 0, 8, r), (E = i)),
                  t.hasOwnProperty((r = 'EXPONENTIAL_AT')) &&
                    (isArray((i = t[r]))
                      ? (intCheck(i[0], -m, 0, r),
                        intCheck(i[1], 0, m, r),
                        (A = i[0]),
                        (T = i[1]))
                      : (intCheck(i, -m, m, r), (A = -(T = i < 0 ? -i : i)))),
                  t.hasOwnProperty((r = 'RANGE')))
                )
                  if (isArray((i = t[r])))
                    intCheck(i[0], -m, -1, r),
                      intCheck(i[1], 1, m, r),
                      (N = i[0]),
                      (P = i[1]);
                  else {
                    if ((intCheck(i, -m, m, r), !i))
                      throw Error(y + r + ' cannot be zero: ' + i);
                    N = -(P = i < 0 ? -i : i);
                  }
                if (t.hasOwnProperty((r = 'CRYPTO'))) {
                  if ((i = t[r]) !== !!i)
                    throw Error(y + r + ' not true or false: ' + i);
                  if (i) {
                    if (
                      'undefined' == typeof crypto ||
                      !crypto ||
                      (!crypto.getRandomValues && !crypto.randomBytes)
                    )
                      throw ((C = !i), Error(y + 'crypto unavailable'));
                    C = i;
                  } else C = i;
                }
                if (
                  (t.hasOwnProperty((r = 'MODULO_MODE')) &&
                    (intCheck((i = t[r]), 0, 9, r), (I = i)),
                  t.hasOwnProperty((r = 'POW_PRECISION')) &&
                    (intCheck((i = t[r]), 0, m, r), (B = i)),
                  t.hasOwnProperty((r = 'FORMAT')))
                ) {
                  if ('object' != typeof (i = t[r]))
                    throw Error(y + r + ' not an object: ' + i);
                  R = i;
                }
                if (t.hasOwnProperty((r = 'ALPHABET'))) {
                  if ('string' != typeof (i = t[r]) || /^.$|\.|(.).*\1/.test(i))
                    throw Error(y + r + ' invalid: ' + i);
                  j = i;
                }
              }
              return {
                DECIMAL_PLACES: k,
                ROUNDING_MODE: E,
                EXPONENTIAL_AT: [A, T],
                RANGE: [N, P],
                CRYPTO: C,
                MODULO_MODE: I,
                POW_PRECISION: B,
                FORMAT: R,
                ALPHABET: j
              };
            }),
            (BigNumber.isBigNumber = function(t) {
              return (
                t instanceof BigNumber || (t && !0 === t._isBigNumber) || !1
              );
            }),
            (BigNumber.maximum = BigNumber.max = function() {
              return maxOrMin(arguments, O.lt);
            }),
            (BigNumber.minimum = BigNumber.min = function() {
              return maxOrMin(arguments, O.gt);
            }),
            (BigNumber.random =
              ((u =
                (9007199254740992 * Math.random()) & 2097151
                  ? function() {
                      return d(9007199254740992 * Math.random());
                    }
                  : function() {
                      return (
                        8388608 * ((1073741824 * Math.random()) | 0) +
                        ((8388608 * Math.random()) | 0)
                      );
                    }),
              function(t) {
                var r,
                  i,
                  a,
                  c,
                  l,
                  h = 0,
                  v = [],
                  b = new BigNumber(S);
                if (
                  (null == t ? (t = k) : intCheck(t, 0, m), (c = p(t / 14)), C)
                )
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((c *= 2)));
                      h < c;

                    )
                      (l = 131072 * r[h] + (r[h + 1] >>> 11)) >= 9e15
                        ? ((i = crypto.getRandomValues(new Uint32Array(2))),
                          (r[h] = i[0]),
                          (r[h + 1] = i[1]))
                        : (v.push(l % 1e14), (h += 2));
                    h = c / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((C = !1), Error(y + 'crypto unavailable'));
                    for (r = crypto.randomBytes((c *= 7)); h < c; )
                      (l =
                        281474976710656 * (31 & r[h]) +
                        1099511627776 * r[h + 1] +
                        4294967296 * r[h + 2] +
                        16777216 * r[h + 3] +
                        (r[h + 4] << 16) +
                        (r[h + 5] << 8) +
                        r[h + 6]) >= 9e15
                        ? crypto.randomBytes(7).copy(r, h)
                        : (v.push(l % 1e14), (h += 7));
                    h = c / 7;
                  }
                if (!C) for (; h < c; ) (l = u()) < 9e15 && (v[h++] = l % 1e14);
                for (
                  t %= 14,
                    (c = v[--h]) &&
                      t &&
                      ((l = g[14 - t]), (v[h] = d(c / l) * l));
                  0 === v[h];
                  v.pop(), h--
                );
                if (h < 0) v = [(a = 0)];
                else {
                  for (a = -1; 0 === v[0]; v.splice(0, 1), a -= 14);
                  for (h = 1, l = v[0]; l >= 10; l /= 10, h++);
                  h < 14 && (a -= 14 - h);
                }
                return (b.e = a), (b.c = v), b;
              })),
            (i = (function() {
              function toBaseOut(t, r, i, a) {
                for (var u, c, l = [0], p = 0, d = t.length; p < d; ) {
                  for (c = l.length; c--; l[c] *= r);
                  for (
                    l[0] += a.indexOf(t.charAt(p++)), u = 0;
                    u < l.length;
                    u++
                  )
                    l[u] > i - 1 &&
                      (null == l[u + 1] && (l[u + 1] = 0),
                      (l[u + 1] += (l[u] / i) | 0),
                      (l[u] %= i));
                }
                return l.reverse();
              }
              return function(t, i, a, u, c) {
                var l,
                  p,
                  d,
                  y,
                  h,
                  v,
                  g,
                  m,
                  b = t.indexOf('.'),
                  _ = k,
                  w = E;
                for (
                  b >= 0 &&
                    ((y = B),
                    (B = 0),
                    (t = t.replace('.', '')),
                    (v = (m = new BigNumber(i)).pow(t.length - b)),
                    (B = y),
                    (m.c = toBaseOut(
                      toFixedPoint(coeffToString(v.c), v.e, '0'),
                      10,
                      a,
                      '0123456789'
                    )),
                    (m.e = m.c.length)),
                    d = y = (g = toBaseOut(
                      t,
                      i,
                      a,
                      c ? ((l = j), '0123456789') : ((l = '0123456789'), j)
                    )).length;
                  0 == g[--y];
                  g.pop()
                );
                if (!g[0]) return l.charAt(0);
                if (
                  (b < 0
                    ? --d
                    : ((v.c = g),
                      (v.e = d),
                      (v.s = u),
                      (g = (v = r(v, m, _, w, a)).c),
                      (h = v.r),
                      (d = v.e)),
                  (b = g[(p = d + _ + 1)]),
                  (y = a / 2),
                  (h = h || p < 0 || null != g[p + 1]),
                  (h =
                    w < 4
                      ? (null != b || h) && (0 == w || w == (v.s < 0 ? 3 : 2))
                      : b > y ||
                        (b == y &&
                          (4 == w ||
                            h ||
                            (6 == w && 1 & g[p - 1]) ||
                            w == (v.s < 0 ? 8 : 7)))),
                  p < 1 || !g[0])
                )
                  t = h
                    ? toFixedPoint(l.charAt(1), -_, l.charAt(0))
                    : l.charAt(0);
                else {
                  if (((g.length = p), h))
                    for (--a; ++g[--p] > a; )
                      (g[p] = 0), p || (++d, (g = [1].concat(g)));
                  for (y = g.length; !g[--y]; );
                  for (b = 0, t = ''; b <= y; t += l.charAt(g[b++]));
                  t = toFixedPoint(t, d, l.charAt(0));
                }
                return t;
              };
            })()),
            (r = (function() {
              function multiply(t, r, i) {
                var a,
                  u,
                  c,
                  l,
                  p = 0,
                  d = t.length,
                  y = r % 1e7,
                  h = (r / 1e7) | 0;
                for (t = t.slice(); d--; )
                  (p =
                    (((u =
                      y * (c = t[d] % 1e7) +
                      ((a = h * c + (l = (t[d] / 1e7) | 0) * y) % 1e7) * 1e7 +
                      p) /
                      i) |
                      0) +
                    ((a / 1e7) | 0) +
                    h * l),
                    (t[d] = u % i);
                return p && (t = [p].concat(t)), t;
              }
              function compare(t, r, i, a) {
                var u, c;
                if (i != a) c = i > a ? 1 : -1;
                else
                  for (u = c = 0; u < i; u++)
                    if (t[u] != r[u]) {
                      c = t[u] > r[u] ? 1 : -1;
                      break;
                    }
                return c;
              }
              function subtract(t, r, i, a) {
                for (var u = 0; i--; )
                  (t[i] -= u),
                    (u = t[i] < r[i] ? 1 : 0),
                    (t[i] = u * a + t[i] - r[i]);
                for (; !t[0] && t.length > 1; t.splice(0, 1));
              }
              return function(t, r, i, a, u) {
                var c,
                  l,
                  p,
                  y,
                  h,
                  g,
                  m,
                  b,
                  _,
                  w,
                  x,
                  O,
                  S,
                  k,
                  E,
                  A,
                  T,
                  N = t.s == r.s ? 1 : -1,
                  P = t.c,
                  C = r.c;
                if (!(P && P[0] && C && C[0]))
                  return new BigNumber(
                    t.s && r.s && (P ? !C || P[0] != C[0] : C)
                      ? (P && 0 == P[0]) || !C
                        ? 0 * N
                        : N / 0
                      : NaN
                  );
                for (
                  _ = (b = new BigNumber(N)).c = [],
                    N = i + (l = t.e - r.e) + 1,
                    u ||
                      ((u = v),
                      (l = bitFloor(t.e / 14) - bitFloor(r.e / 14)),
                      (N = (N / 14) | 0)),
                    p = 0;
                  C[p] == (P[p] || 0);
                  p++
                );
                if ((C[p] > (P[p] || 0) && l--, N < 0)) _.push(1), (y = !0);
                else {
                  for (
                    k = P.length,
                      A = C.length,
                      p = 0,
                      N += 2,
                      (h = d(u / (C[0] + 1))) > 1 &&
                        ((C = multiply(C, h, u)),
                        (P = multiply(P, h, u)),
                        (A = C.length),
                        (k = P.length)),
                      S = A,
                      x = (w = P.slice(0, A)).length;
                    x < A;
                    w[x++] = 0
                  );
                  (T = C.slice()),
                    (T = [0].concat(T)),
                    (E = C[0]),
                    C[1] >= u / 2 && E++;
                  do {
                    if (((h = 0), (c = compare(C, w, A, x)) < 0)) {
                      if (
                        ((O = w[0]),
                        A != x && (O = O * u + (w[1] || 0)),
                        (h = d(O / E)) > 1)
                      )
                        for (
                          h >= u && (h = u - 1),
                            m = (g = multiply(C, h, u)).length,
                            x = w.length;
                          1 == compare(g, w, m, x);

                        )
                          h--,
                            subtract(g, A < m ? T : C, m, u),
                            (m = g.length),
                            (c = 1);
                      else 0 == h && (c = h = 1), (m = (g = C.slice()).length);
                      if (
                        (m < x && (g = [0].concat(g)),
                        subtract(w, g, x, u),
                        (x = w.length),
                        -1 == c)
                      )
                        for (; compare(C, w, A, x) < 1; )
                          h++, subtract(w, A < x ? T : C, x, u), (x = w.length);
                    } else 0 === c && (h++, (w = [0]));
                    (_[p++] = h),
                      w[0] ? (w[x++] = P[S] || 0) : ((w = [P[S]]), (x = 1));
                  } while ((S++ < k || null != w[0]) && N--);
                  (y = null != w[0]), _[0] || _.splice(0, 1);
                }
                if (u == v) {
                  for (p = 1, N = _[0]; N >= 10; N /= 10, p++);
                  round(b, i + (b.e = p + 14 * l - 1) + 1, a, y);
                } else (b.e = l), (b.r = +y);
                return b;
              };
            })()),
            (c = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
            (b = /^([^.]+)\.$/),
            (_ = /^\.([^.]+)$/),
            (w = /^-?(Infinity|NaN)$/),
            (x = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
            (a = function(t, r, i, a) {
              var u,
                l = i ? r : r.replace(x, '');
              if (w.test(l))
                (t.s = isNaN(l) ? null : l < 0 ? -1 : 1), (t.c = t.e = null);
              else {
                if (
                  !i &&
                  ((l = l.replace(c, function(t, r, i) {
                    return (
                      (u =
                        'x' == (i = i.toLowerCase()) ? 16 : 'b' == i ? 2 : 8),
                      a && a != u ? t : r
                    );
                  })),
                  a && ((u = a), (l = l.replace(b, '$1').replace(_, '0.$1'))),
                  r != l)
                )
                  return new BigNumber(l, u);
                if (BigNumber.DEBUG)
                  throw Error(
                    y + 'Not a' + (a ? ' base ' + a : '') + ' number: ' + r
                  );
                t.c = t.e = t.s = null;
              }
            }),
            (O.absoluteValue = O.abs = function() {
              var t = new BigNumber(this);
              return t.s < 0 && (t.s = 1), t;
            }),
            (O.comparedTo = function(t, r) {
              return compare(this, new BigNumber(t, r));
            }),
            (O.decimalPlaces = O.dp = function(t, r) {
              var i,
                a,
                u,
                c = this;
              if (null != t)
                return (
                  intCheck(t, 0, m),
                  null == r ? (r = E) : intCheck(r, 0, 8),
                  round(new BigNumber(c), t + c.e + 1, r)
                );
              if (!(i = c.c)) return null;
              if (
                ((a = 14 * ((u = i.length - 1) - bitFloor(this.e / 14))),
                (u = i[u]))
              )
                for (; u % 10 == 0; u /= 10, a--);
              return a < 0 && (a = 0), a;
            }),
            (O.dividedBy = O.div = function(t, i) {
              return r(this, new BigNumber(t, i), k, E);
            }),
            (O.dividedToIntegerBy = O.idiv = function(t, i) {
              return r(this, new BigNumber(t, i), 0, 1);
            }),
            (O.exponentiatedBy = O.pow = function(t, r) {
              var i,
                a,
                u,
                c,
                l,
                h,
                v,
                g = this;
              if ((t = new BigNumber(t)).c && !t.isInteger())
                throw Error(y + 'Exponent not an integer: ' + t);
              if (
                (null != r && (r = new BigNumber(r)),
                (c = t.e > 14),
                !g.c ||
                  !g.c[0] ||
                  (1 == g.c[0] && !g.e && 1 == g.c.length) ||
                  !t.c ||
                  !t.c[0])
              )
                return (
                  (v = new BigNumber(
                    Math.pow(+g.valueOf(), c ? 2 - isOdd(t) : +t)
                  )),
                  r ? v.mod(r) : v
                );
              if (((l = t.s < 0), r)) {
                if (r.c ? !r.c[0] : !r.s) return new BigNumber(NaN);
                (a = !l && g.isInteger() && r.isInteger()) && (g = g.mod(r));
              } else {
                if (
                  t.e > 9 &&
                  (g.e > 0 ||
                    g.e < -1 ||
                    (0 == g.e
                      ? g.c[0] > 1 || (c && g.c[1] >= 24e7)
                      : g.c[0] < 8e13 || (c && g.c[0] <= 9999975e7)))
                )
                  return (
                    (u = g.s < 0 && isOdd(t) ? -0 : 0),
                    g.e > -1 && (u = 1 / u),
                    new BigNumber(l ? 1 / u : u)
                  );
                B && (u = p(B / 14 + 2));
              }
              for (
                c ? ((i = new BigNumber(0.5)), (h = isOdd(t))) : (h = t % 2),
                  l && (t.s = 1),
                  v = new BigNumber(S);
                ;

              ) {
                if (h) {
                  if (!(v = v.times(g)).c) break;
                  u ? v.c.length > u && (v.c.length = u) : a && (v = v.mod(r));
                }
                if (c) {
                  if ((round((t = t.times(i)), t.e + 1, 1), !t.c[0])) break;
                  (c = t.e > 14), (h = isOdd(t));
                } else {
                  if (!(t = d(t / 2))) break;
                  h = t % 2;
                }
                (g = g.times(g)),
                  u
                    ? g.c && g.c.length > u && (g.c.length = u)
                    : a && (g = g.mod(r));
              }
              return a
                ? v
                : (l && (v = S.div(v)),
                  r ? v.mod(r) : u ? round(v, B, E, void 0) : v);
            }),
            (O.integerValue = function(t) {
              var r = new BigNumber(this);
              return (
                null == t ? (t = E) : intCheck(t, 0, 8), round(r, r.e + 1, t)
              );
            }),
            (O.isEqualTo = O.eq = function(t, r) {
              return 0 === compare(this, new BigNumber(t, r));
            }),
            (O.isFinite = function() {
              return !!this.c;
            }),
            (O.isGreaterThan = O.gt = function(t, r) {
              return compare(this, new BigNumber(t, r)) > 0;
            }),
            (O.isGreaterThanOrEqualTo = O.gte = function(t, r) {
              return 1 === (r = compare(this, new BigNumber(t, r))) || 0 === r;
            }),
            (O.isInteger = function() {
              return !!this.c && bitFloor(this.e / 14) > this.c.length - 2;
            }),
            (O.isLessThan = O.lt = function(t, r) {
              return compare(this, new BigNumber(t, r)) < 0;
            }),
            (O.isLessThanOrEqualTo = O.lte = function(t, r) {
              return -1 === (r = compare(this, new BigNumber(t, r))) || 0 === r;
            }),
            (O.isNaN = function() {
              return !this.s;
            }),
            (O.isNegative = function() {
              return this.s < 0;
            }),
            (O.isPositive = function() {
              return this.s > 0;
            }),
            (O.isZero = function() {
              return !!this.c && 0 == this.c[0];
            }),
            (O.minus = function(t, r) {
              var i,
                a,
                u,
                c,
                l = this,
                p = l.s;
              if (((r = (t = new BigNumber(t, r)).s), !p || !r))
                return new BigNumber(NaN);
              if (p != r) return (t.s = -r), l.plus(t);
              var d = l.e / 14,
                y = t.e / 14,
                h = l.c,
                g = t.c;
              if (!d || !y) {
                if (!h || !g)
                  return h ? ((t.s = -r), t) : new BigNumber(g ? l : NaN);
                if (!h[0] || !g[0])
                  return g[0]
                    ? ((t.s = -r), t)
                    : new BigNumber(h[0] ? l : 3 == E ? -0 : 0);
              }
              if (
                ((d = bitFloor(d)),
                (y = bitFloor(y)),
                (h = h.slice()),
                (p = d - y))
              ) {
                for (
                  (c = p < 0) ? ((p = -p), (u = h)) : ((y = d), (u = g)),
                    u.reverse(),
                    r = p;
                  r--;
                  u.push(0)
                );
                u.reverse();
              } else
                for (
                  a = (c = (p = h.length) < (r = g.length)) ? p : r, p = r = 0;
                  r < a;
                  r++
                )
                  if (h[r] != g[r]) {
                    c = h[r] < g[r];
                    break;
                  }
              if (
                (c && ((u = h), (h = g), (g = u), (t.s = -t.s)),
                (r = (a = g.length) - (i = h.length)) > 0)
              )
                for (; r--; h[i++] = 0);
              for (r = v - 1; a > p; ) {
                if (h[--a] < g[a]) {
                  for (i = a; i && !h[--i]; h[i] = r);
                  --h[i], (h[a] += v);
                }
                h[a] -= g[a];
              }
              for (; 0 == h[0]; h.splice(0, 1), --y);
              return h[0]
                ? normalise(t, h, y)
                : ((t.s = 3 == E ? -1 : 1), (t.c = [(t.e = 0)]), t);
            }),
            (O.modulo = O.mod = function(t, i) {
              var a,
                u,
                c = this;
              return (
                (t = new BigNumber(t, i)),
                !c.c || !t.s || (t.c && !t.c[0])
                  ? new BigNumber(NaN)
                  : !t.c || (c.c && !c.c[0])
                  ? new BigNumber(c)
                  : (9 == I
                      ? ((u = t.s),
                        (t.s = 1),
                        (a = r(c, t, 0, 3)),
                        (t.s = u),
                        (a.s *= u))
                      : (a = r(c, t, 0, I)),
                    (t = c.minus(a.times(t))).c[0] || 1 != I || (t.s = c.s),
                    t)
              );
            }),
            (O.multipliedBy = O.times = function(t, r) {
              var i,
                a,
                u,
                c,
                l,
                p,
                d,
                y,
                h,
                g,
                m,
                b,
                _,
                w,
                x = this,
                O = x.c,
                S = (t = new BigNumber(t, r)).c;
              if (!(O && S && O[0] && S[0]))
                return (
                  !x.s || !t.s || (O && !O[0] && !S) || (S && !S[0] && !O)
                    ? (t.c = t.e = t.s = null)
                    : ((t.s *= x.s),
                      O && S ? ((t.c = [0]), (t.e = 0)) : (t.c = t.e = null)),
                  t
                );
              for (
                a = bitFloor(x.e / 14) + bitFloor(t.e / 14),
                  t.s *= x.s,
                  (d = O.length) < (g = S.length) &&
                    ((_ = O), (O = S), (S = _), (u = d), (d = g), (g = u)),
                  u = d + g,
                  _ = [];
                u--;
                _.push(0)
              );
              for (w = v, 1e7, u = g; --u >= 0; ) {
                for (
                  i = 0, m = S[u] % 1e7, b = (S[u] / 1e7) | 0, c = u + (l = d);
                  c > u;

                )
                  (i =
                    (((y =
                      m * (y = O[--l] % 1e7) +
                      ((p = b * y + (h = (O[l] / 1e7) | 0) * m) % 1e7) * 1e7 +
                      _[c] +
                      i) /
                      w) |
                      0) +
                    ((p / 1e7) | 0) +
                    b * h),
                    (_[c--] = y % w);
                _[c] = i;
              }
              return i ? ++a : _.splice(0, 1), normalise(t, _, a);
            }),
            (O.negated = function() {
              var t = new BigNumber(this);
              return (t.s = -t.s || null), t;
            }),
            (O.plus = function(t, r) {
              var i,
                a = this,
                u = a.s;
              if (((r = (t = new BigNumber(t, r)).s), !u || !r))
                return new BigNumber(NaN);
              if (u != r) return (t.s = -r), a.minus(t);
              var c = a.e / 14,
                l = t.e / 14,
                p = a.c,
                d = t.c;
              if (!c || !l) {
                if (!p || !d) return new BigNumber(u / 0);
                if (!p[0] || !d[0])
                  return d[0] ? t : new BigNumber(p[0] ? a : 0 * u);
              }
              if (
                ((c = bitFloor(c)),
                (l = bitFloor(l)),
                (p = p.slice()),
                (u = c - l))
              ) {
                for (
                  u > 0 ? ((l = c), (i = d)) : ((u = -u), (i = p)), i.reverse();
                  u--;
                  i.push(0)
                );
                i.reverse();
              }
              for (
                (u = p.length) - (r = d.length) < 0 &&
                  ((i = d), (d = p), (p = i), (r = u)),
                  u = 0;
                r;

              )
                (u = ((p[--r] = p[r] + d[r] + u) / v) | 0),
                  (p[r] = v === p[r] ? 0 : p[r] % v);
              return u && ((p = [u].concat(p)), ++l), normalise(t, p, l);
            }),
            (O.precision = O.sd = function(t, r) {
              var i,
                a,
                u,
                c = this;
              if (null != t && t !== !!t)
                return (
                  intCheck(t, 1, m),
                  null == r ? (r = E) : intCheck(r, 0, 8),
                  round(new BigNumber(c), t, r)
                );
              if (!(i = c.c)) return null;
              if (((a = 14 * (u = i.length - 1) + 1), (u = i[u]))) {
                for (; u % 10 == 0; u /= 10, a--);
                for (u = i[0]; u >= 10; u /= 10, a++);
              }
              return t && c.e + 1 > a && (a = c.e + 1), a;
            }),
            (O.shiftedBy = function(t) {
              return (
                intCheck(t, -9007199254740991, 9007199254740991),
                this.times('1e' + t)
              );
            }),
            (O.squareRoot = O.sqrt = function() {
              var t,
                i,
                a,
                u,
                c,
                l = this,
                p = l.c,
                d = l.s,
                y = l.e,
                h = k + 4,
                v = new BigNumber('0.5');
              if (1 !== d || !p || !p[0])
                return new BigNumber(
                  !d || (d < 0 && (!p || p[0])) ? NaN : p ? l : 1 / 0
                );
              if (
                (0 == (d = Math.sqrt(+l)) || d == 1 / 0
                  ? (((i = coeffToString(p)).length + y) % 2 == 0 && (i += '0'),
                    (d = Math.sqrt(i)),
                    (y = bitFloor((y + 1) / 2) - (y < 0 || y % 2)),
                    (a = new BigNumber(
                      (i =
                        d == 1 / 0
                          ? '1e' + y
                          : (i = d.toExponential()).slice(
                              0,
                              i.indexOf('e') + 1
                            ) + y)
                    )))
                  : (a = new BigNumber(d + '')),
                a.c[0])
              )
                for ((d = (y = a.e) + h) < 3 && (d = 0); ; )
                  if (
                    ((c = a),
                    (a = v.times(c.plus(r(l, c, h, 1)))),
                    coeffToString(c.c).slice(0, d) ===
                      (i = coeffToString(a.c)).slice(0, d))
                  ) {
                    if (
                      (a.e < y && --d,
                      '9999' != (i = i.slice(d - 3, d + 1)) &&
                        (u || '4999' != i))
                    ) {
                      (+i && (+i.slice(1) || '5' != i.charAt(0))) ||
                        (round(a, a.e + k + 2, 1), (t = !a.times(a).eq(l)));
                      break;
                    }
                    if (!u && (round(c, c.e + k + 2, 0), c.times(c).eq(l))) {
                      a = c;
                      break;
                    }
                    (h += 4), (d += 4), (u = 1);
                  }
              return round(a, a.e + k + 1, E, t);
            }),
            (O.toExponential = function(t, r) {
              return (
                null != t && (intCheck(t, 0, m), t++), format(this, t, r, 1)
              );
            }),
            (O.toFixed = function(t, r) {
              return (
                null != t && (intCheck(t, 0, m), (t = t + this.e + 1)),
                format(this, t, r)
              );
            }),
            (O.toFormat = function(t, r) {
              var i = this.toFixed(t, r);
              if (this.c) {
                var a,
                  u = i.split('.'),
                  c = +R.groupSize,
                  l = +R.secondaryGroupSize,
                  p = R.groupSeparator,
                  d = u[0],
                  y = u[1],
                  h = this.s < 0,
                  v = h ? d.slice(1) : d,
                  g = v.length;
                if (
                  (l && ((a = c), (c = l), (l = a), (g -= a)), c > 0 && g > 0)
                ) {
                  for (a = g % c || c, d = v.substr(0, a); a < g; a += c)
                    d += p + v.substr(a, c);
                  l > 0 && (d += p + v.slice(a)), h && (d = '-' + d);
                }
                i = y
                  ? d +
                    R.decimalSeparator +
                    ((l = +R.fractionGroupSize)
                      ? y.replace(
                          new RegExp('\\d{' + l + '}\\B', 'g'),
                          '$&' + R.fractionGroupSeparator
                        )
                      : y)
                  : d;
              }
              return i;
            }),
            (O.toFraction = function(t) {
              var i,
                a,
                u,
                c,
                l,
                p,
                d,
                h,
                v,
                m,
                b,
                _,
                w = this,
                x = w.c;
              if (
                null != t &&
                ((!(h = new BigNumber(t)).isInteger() && (h.c || 1 !== h.s)) ||
                  h.lt(S))
              )
                throw Error(
                  y +
                    'Argument ' +
                    (h.isInteger() ? 'out of range: ' : 'not an integer: ') +
                    t
                );
              if (!x) return w.toString();
              for (
                a = new BigNumber(S),
                  m = u = new BigNumber(S),
                  c = v = new BigNumber(S),
                  _ = coeffToString(x),
                  p = a.e = _.length - w.e - 1,
                  a.c[0] = g[(d = p % 14) < 0 ? 14 + d : d],
                  t = !t || h.comparedTo(a) > 0 ? (p > 0 ? a : m) : h,
                  d = P,
                  P = 1 / 0,
                  h = new BigNumber(_),
                  v.c[0] = 0;
                (b = r(h, a, 0, 1)),
                  1 != (l = u.plus(b.times(c))).comparedTo(t);

              )
                (u = c),
                  (c = l),
                  (m = v.plus(b.times((l = m)))),
                  (v = l),
                  (a = h.minus(b.times((l = a)))),
                  (h = l);
              return (
                (l = r(t.minus(u), c, 0, 1)),
                (v = v.plus(l.times(m))),
                (u = u.plus(l.times(c))),
                (v.s = m.s = w.s),
                (i =
                  r(m, c, (p *= 2), E)
                    .minus(w)
                    .abs()
                    .comparedTo(
                      r(v, u, p, E)
                        .minus(w)
                        .abs()
                    ) < 1
                    ? [m.toString(), c.toString()]
                    : [v.toString(), u.toString()]),
                (P = d),
                i
              );
            }),
            (O.toNumber = function() {
              return +this;
            }),
            (O.toPrecision = function(t, r) {
              return null != t && intCheck(t, 1, m), format(this, t, r, 2);
            }),
            (O.toString = function(t) {
              var r,
                a = this,
                u = a.s,
                c = a.e;
              return (
                null === c
                  ? u
                    ? ((r = 'Infinity'), u < 0 && (r = '-' + r))
                    : (r = 'NaN')
                  : ((r = coeffToString(a.c)),
                    null == t
                      ? (r =
                          c <= A || c >= T
                            ? toExponential(r, c)
                            : toFixedPoint(r, c, '0'))
                      : (intCheck(t, 2, j.length, 'Base'),
                        (r = i(toFixedPoint(r, c, '0'), 10, t, u, !0))),
                    u < 0 && a.c[0] && (r = '-' + r)),
                r
              );
            }),
            (O.valueOf = O.toJSON = function() {
              var t,
                r = this,
                i = r.e;
              return null === i
                ? r.toString()
                : ((t = coeffToString(r.c)),
                  (t =
                    i <= A || i >= T
                      ? toExponential(t, i)
                      : toFixedPoint(t, i, '0')),
                  r.s < 0 ? '-' + t : t);
            }),
            (O._isBigNumber = !0),
            null != t && BigNumber.set(t),
            BigNumber
          );
        })()).default = c.BigNumber = c),
          void 0 ===
            (a = function() {
              return c;
            }.call(r, i, r, t)) || (t.exports = a);
      })();
    },
    function(t) {
      t.exports = JSON.parse(
        '{"chief":{"inception_block":{"mainnet":"0x487813","kovan":"0x649575"},"events":{"etch":"0x4f0892983790f53eea39a7a496f6cb40e8811b313871337b6a761efc6c67bb1f","vote_slate":"0xa69beaba00000000000000000000000000000000000000000000000000000000","vote_addresses":"0xed08132900000000000000000000000000000000000000000000000000000000","lock":"0xdd46706400000000000000000000000000000000000000000000000000000000","free":"0xd8ccd0f300000000000000000000000000000000000000000000000000000000"}},"pause":{"inception_block":{"mainnet":"8928171","kovan":"14764552"},"events":{"exec":"0x168ccd6700000000000000000000000000000000000000000000000000000000","plot":"0x46d2fbbb00000000000000000000000000000000000000000000000000000000"}},"proxy_factory":{"initiate_link_gas":45840,"approve_link_gas":886503,"send_mkr_gas":46471,"total_link_gas":1123568}}'
      );
    },
    function(t, r, i) {
      (function(r) {
        var a = i(157);
        function compare(t, r) {
          if (t === r) return 0;
          for (
            var i = t.length, a = r.length, u = 0, c = Math.min(i, a);
            u < c;
            ++u
          )
            if (t[u] !== r[u]) {
              (i = t[u]), (a = r[u]);
              break;
            }
          return i < a ? -1 : a < i ? 1 : 0;
        }
        function isBuffer(t) {
          return r.Buffer && 'function' == typeof r.Buffer.isBuffer
            ? r.Buffer.isBuffer(t)
            : !(null == t || !t._isBuffer);
        }
        var u = i(158),
          c = Object.prototype.hasOwnProperty,
          l = Array.prototype.slice,
          p = 'foo' === function foo() {}.name;
        function pToString(t) {
          return Object.prototype.toString.call(t);
        }
        function isView(t) {
          return (
            !isBuffer(t) &&
            'function' == typeof r.ArrayBuffer &&
              ('function' == typeof ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : !!t &&
                  (t instanceof DataView ||
                    !!(t.buffer && t.buffer instanceof ArrayBuffer)))
          );
        }
        var d = (t.exports = ok),
          y = /\s*function\s+([^\(\s]*)\s*/;
        function getName(t) {
          if (u.isFunction(t)) {
            if (p) return t.name;
            var r = t.toString().match(y);
            return r && r[1];
          }
        }
        function truncate(t, r) {
          return 'string' == typeof t ? (t.length < r ? t : t.slice(0, r)) : t;
        }
        function inspect(t) {
          if (p || !u.isFunction(t)) return u.inspect(t);
          var r = getName(t);
          return '[Function' + (r ? ': ' + r : '') + ']';
        }
        function fail(t, r, i, a, u) {
          throw new d.AssertionError({
            message: i,
            actual: t,
            expected: r,
            operator: a,
            stackStartFunction: u
          });
        }
        function ok(t, r) {
          t || fail(t, !0, r, '==', d.ok);
        }
        function _deepEqual(t, r, i, a) {
          if (t === r) return !0;
          if (isBuffer(t) && isBuffer(r)) return 0 === compare(t, r);
          if (u.isDate(t) && u.isDate(r)) return t.getTime() === r.getTime();
          if (u.isRegExp(t) && u.isRegExp(r))
            return (
              t.source === r.source &&
              t.global === r.global &&
              t.multiline === r.multiline &&
              t.lastIndex === r.lastIndex &&
              t.ignoreCase === r.ignoreCase
            );
          if (
            (null !== t && 'object' == typeof t) ||
            (null !== r && 'object' == typeof r)
          ) {
            if (
              isView(t) &&
              isView(r) &&
              pToString(t) === pToString(r) &&
              !(t instanceof Float32Array || t instanceof Float64Array)
            )
              return (
                0 ===
                compare(new Uint8Array(t.buffer), new Uint8Array(r.buffer))
              );
            if (isBuffer(t) !== isBuffer(r)) return !1;
            var c = (a = a || { actual: [], expected: [] }).actual.indexOf(t);
            return (
              (-1 !== c && c === a.expected.indexOf(r)) ||
              (a.actual.push(t),
              a.expected.push(r),
              (function objEquiv(t, r, i, a) {
                if (null == t || null == r) return !1;
                if (u.isPrimitive(t) || u.isPrimitive(r)) return t === r;
                if (i && Object.getPrototypeOf(t) !== Object.getPrototypeOf(r))
                  return !1;
                var c = isArguments(t),
                  p = isArguments(r);
                if ((c && !p) || (!c && p)) return !1;
                if (c)
                  return (t = l.call(t)), (r = l.call(r)), _deepEqual(t, r, i);
                var d,
                  y,
                  v = h(t),
                  g = h(r);
                if (v.length !== g.length) return !1;
                for (v.sort(), g.sort(), y = v.length - 1; y >= 0; y--)
                  if (v[y] !== g[y]) return !1;
                for (y = v.length - 1; y >= 0; y--)
                  if (((d = v[y]), !_deepEqual(t[d], r[d], i, a))) return !1;
                return !0;
              })(t, r, i, a))
            );
          }
          return i ? t === r : t == r;
        }
        function isArguments(t) {
          return '[object Arguments]' == Object.prototype.toString.call(t);
        }
        function expectedException(t, r) {
          if (!t || !r) return !1;
          if ('[object RegExp]' == Object.prototype.toString.call(r))
            return r.test(t);
          try {
            if (t instanceof r) return !0;
          } catch (t) {}
          return !Error.isPrototypeOf(r) && !0 === r.call({}, t);
        }
        function _throws(t, r, i, a) {
          var c;
          if ('function' != typeof r)
            throw new TypeError('"block" argument must be a function');
          'string' == typeof i && ((a = i), (i = null)),
            (c = (function _tryBlock(t) {
              var r;
              try {
                t();
              } catch (t) {
                r = t;
              }
              return r;
            })(r)),
            (a =
              (i && i.name ? ' (' + i.name + ').' : '.') + (a ? ' ' + a : '.')),
            t && !c && fail(c, i, 'Missing expected exception' + a);
          var l = 'string' == typeof a,
            p = !t && c && !i;
          if (
            (((!t && u.isError(c) && l && expectedException(c, i)) || p) &&
              fail(c, i, 'Got unwanted exception' + a),
            (t && c && i && !expectedException(c, i)) || (!t && c))
          )
            throw c;
        }
        (d.AssertionError = function AssertionError(t) {
          (this.name = 'AssertionError'),
            (this.actual = t.actual),
            (this.expected = t.expected),
            (this.operator = t.operator),
            t.message
              ? ((this.message = t.message), (this.generatedMessage = !1))
              : ((this.message = (function getMessage(t) {
                  return (
                    truncate(inspect(t.actual), 128) +
                    ' ' +
                    t.operator +
                    ' ' +
                    truncate(inspect(t.expected), 128)
                  );
                })(this)),
                (this.generatedMessage = !0));
          var r = t.stackStartFunction || fail;
          if (Error.captureStackTrace) Error.captureStackTrace(this, r);
          else {
            var i = new Error();
            if (i.stack) {
              var a = i.stack,
                u = getName(r),
                c = a.indexOf('\n' + u);
              if (c >= 0) {
                var l = a.indexOf('\n', c + 1);
                a = a.substring(l + 1);
              }
              this.stack = a;
            }
          }
        }),
          u.inherits(d.AssertionError, Error),
          (d.fail = fail),
          (d.ok = ok),
          (d.equal = function equal(t, r, i) {
            t != r && fail(t, r, i, '==', d.equal);
          }),
          (d.notEqual = function notEqual(t, r, i) {
            t == r && fail(t, r, i, '!=', d.notEqual);
          }),
          (d.deepEqual = function deepEqual(t, r, i) {
            _deepEqual(t, r, !1) || fail(t, r, i, 'deepEqual', d.deepEqual);
          }),
          (d.deepStrictEqual = function deepStrictEqual(t, r, i) {
            _deepEqual(t, r, !0) ||
              fail(t, r, i, 'deepStrictEqual', d.deepStrictEqual);
          }),
          (d.notDeepEqual = function notDeepEqual(t, r, i) {
            _deepEqual(t, r, !1) &&
              fail(t, r, i, 'notDeepEqual', d.notDeepEqual);
          }),
          (d.notDeepStrictEqual = function notDeepStrictEqual(t, r, i) {
            _deepEqual(t, r, !0) &&
              fail(t, r, i, 'notDeepStrictEqual', notDeepStrictEqual);
          }),
          (d.strictEqual = function strictEqual(t, r, i) {
            t !== r && fail(t, r, i, '===', d.strictEqual);
          }),
          (d.notStrictEqual = function notStrictEqual(t, r, i) {
            t === r && fail(t, r, i, '!==', d.notStrictEqual);
          }),
          (d.throws = function(t, r, i) {
            _throws(!0, t, r, i);
          }),
          (d.doesNotThrow = function(t, r, i) {
            _throws(!1, t, r, i);
          }),
          (d.ifError = function(t) {
            if (t) throw t;
          }),
          (d.strict = a(
            function strict(t, r) {
              t || fail(t, !0, r, '==', strict);
            },
            d,
            {
              equal: d.strictEqual,
              deepEqual: d.deepStrictEqual,
              notEqual: d.notStrictEqual,
              notDeepEqual: d.notDeepStrictEqual
            }
          )),
          (d.strict.strict = d.strict);
        var h =
          Object.keys ||
          function(t) {
            var r = [];
            for (var i in t) c.call(t, i) && r.push(i);
            return r;
          };
      }.call(this, i(47)));
    },
    function(t, r, i) {
      var a = i(170);
      t.exports = function toInteger(t) {
        var r = a(t),
          i = r % 1;
        return r == r ? (i ? r - i : r) : 0;
      };
    },
    function(t, r, i) {
      var a = i(175),
        u = i(180);
      t.exports = function isSymbol(t) {
        return 'symbol' == typeof t || (u(t) && '[object Symbol]' == a(t));
      };
    },
    function(t, r, i) {
      var a = i(49),
        u = i(186),
        c = i(187),
        l = i(77),
        p = a ? a.prototype : void 0,
        d = p ? p.toString : void 0;
      t.exports = function baseToString(t) {
        if ('string' == typeof t) return t;
        if (c(t)) return u(t, baseToString) + '';
        if (l(t)) return d ? d.call(t) : '';
        var r = t + '';
        return '0' == r && 1 / t == -1 / 0 ? '-0' : r;
      };
    },
    function(t, r, i) {
      var a = i(190),
        u = i(50),
        c = i(192);
      t.exports = function stringSize(t) {
        return u(t) ? c(t) : a(t);
      };
    },
    function(t, r, i) {
      function _isPlaceholder(t) {
        return (
          null != t &&
          'object' == typeof t &&
          !0 === t['@@functional/placeholder']
        );
      }
      function _curry1(t) {
        return function f1(r) {
          return 0 === arguments.length || _isPlaceholder(r)
            ? f1
            : t.apply(this, arguments);
        };
      }
      i.r(r),
        i.d(r, 'F', function() {
          return u;
        }),
        i.d(r, 'T', function() {
          return c;
        }),
        i.d(r, '__', function() {
          return l;
        }),
        i.d(r, 'add', function() {
          return p;
        }),
        i.d(r, 'addIndex', function() {
          return y;
        }),
        i.d(r, 'adjust', function() {
          return h;
        }),
        i.d(r, 'all', function() {
          return b;
        }),
        i.d(r, 'allPass', function() {
          return D;
        }),
        i.d(r, 'always', function() {
          return a;
        }),
        i.d(r, 'and', function() {
          return U;
        }),
        i.d(r, 'any', function() {
          return W;
        }),
        i.d(r, 'anyPass', function() {
          return V;
        }),
        i.d(r, 'ap', function() {
          return z;
        }),
        i.d(r, 'aperture', function() {
          return $;
        }),
        i.d(r, 'append', function() {
          return H;
        }),
        i.d(r, 'apply', function() {
          return Y;
        }),
        i.d(r, 'applySpec', function() {
          return Q;
        }),
        i.d(r, 'applyTo', function() {
          return J;
        }),
        i.d(r, 'ascend', function() {
          return Z;
        }),
        i.d(r, 'assoc', function() {
          return ee;
        }),
        i.d(r, 'assocPath', function() {
          return ne;
        }),
        i.d(r, 'binary', function() {
          return ie;
        }),
        i.d(r, 'bind', function() {
          return O;
        }),
        i.d(r, 'both', function() {
          return ce;
        }),
        i.d(r, 'call', function() {
          return fe;
        }),
        i.d(r, 'chain', function() {
          return pe;
        }),
        i.d(r, 'clamp', function() {
          return de;
        }),
        i.d(r, 'clone', function() {
          return he;
        }),
        i.d(r, 'comparator', function() {
          return ve;
        }),
        i.d(r, 'complement', function() {
          return me;
        }),
        i.d(r, 'compose', function() {
          return compose;
        }),
        i.d(r, 'composeK', function() {
          return composeK;
        }),
        i.d(r, 'composeP', function() {
          return composeP;
        }),
        i.d(r, 'concat', function() {
          return Pe;
        }),
        i.d(r, 'cond', function() {
          return Ce;
        }),
        i.d(r, 'construct', function() {
          return Be;
        }),
        i.d(r, 'constructN', function() {
          return Ie;
        }),
        i.d(r, 'contains', function() {
          return Re;
        }),
        i.d(r, 'converge', function() {
          return je;
        }),
        i.d(r, 'countBy', function() {
          return De;
        }),
        i.d(r, 'curry', function() {
          return se;
        }),
        i.d(r, 'curryN', function() {
          return d;
        }),
        i.d(r, 'dec', function() {
          return Fe;
        }),
        i.d(r, 'defaultTo', function() {
          return Ue;
        }),
        i.d(r, 'descend', function() {
          return qe;
        }),
        i.d(r, 'difference', function() {
          return Ge;
        }),
        i.d(r, 'differenceWith', function() {
          return We;
        }),
        i.d(r, 'dissoc', function() {
          return Ve;
        }),
        i.d(r, 'dissocPath', function() {
          return $e;
        }),
        i.d(r, 'divide', function() {
          return He;
        }),
        i.d(r, 'drop', function() {
          return Ke;
        }),
        i.d(r, 'dropLast', function() {
          return et;
        }),
        i.d(r, 'dropLastWhile', function() {
          return rt;
        }),
        i.d(r, 'dropRepeats', function() {
          return ct;
        }),
        i.d(r, 'dropRepeatsWith', function() {
          return ut;
        }),
        i.d(r, 'dropWhile', function() {
          return ft;
        }),
        i.d(r, 'either', function() {
          return dt;
        }),
        i.d(r, 'empty', function() {
          return yt;
        }),
        i.d(r, 'endsWith', function() {
          return vt;
        }),
        i.d(r, 'eqBy', function() {
          return mt;
        }),
        i.d(r, 'eqProps', function() {
          return bt;
        }),
        i.d(r, 'equals', function() {
          return Oe;
        }),
        i.d(r, 'evolve', function() {
          return _t;
        }),
        i.d(r, 'filter', function() {
          return Ae;
        }),
        i.d(r, 'find', function() {
          return xt;
        }),
        i.d(r, 'findIndex', function() {
          return St;
        }),
        i.d(r, 'findLast', function() {
          return Et;
        }),
        i.d(r, 'findLastIndex', function() {
          return Tt;
        }),
        i.d(r, 'flatten', function() {
          return Nt;
        }),
        i.d(r, 'flip', function() {
          return Pt;
        }),
        i.d(r, 'forEach', function() {
          return Ct;
        }),
        i.d(r, 'forEachObjIndexed', function() {
          return It;
        }),
        i.d(r, 'fromPairs', function() {
          return Bt;
        }),
        i.d(r, 'groupBy', function() {
          return Rt;
        }),
        i.d(r, 'groupWith', function() {
          return jt;
        }),
        i.d(r, 'gt', function() {
          return Mt;
        }),
        i.d(r, 'gte', function() {
          return Lt;
        }),
        i.d(r, 'has', function() {
          return Dt;
        }),
        i.d(r, 'hasIn', function() {
          return Ft;
        }),
        i.d(r, 'head', function() {
          return Ut;
        }),
        i.d(r, 'identical', function() {
          return xe;
        }),
        i.d(r, 'identity', function() {
          return qt;
        }),
        i.d(r, 'ifElse', function() {
          return Gt;
        }),
        i.d(r, 'inc', function() {
          return Wt;
        }),
        i.d(r, 'indexBy', function() {
          return Vt;
        }),
        i.d(r, 'indexOf', function() {
          return zt;
        }),
        i.d(r, 'init', function() {
          return Xt;
        }),
        i.d(r, 'innerJoin', function() {
          return $t;
        }),
        i.d(r, 'insert', function() {
          return Ht;
        }),
        i.d(r, 'insertAll', function() {
          return Yt;
        }),
        i.d(r, 'intersection', function() {
          return Zt;
        }),
        i.d(r, 'intersperse', function() {
          return er;
        }),
        i.d(r, 'into', function() {
          return ur;
        }),
        i.d(r, 'invert', function() {
          return cr;
        }),
        i.d(r, 'invertObj', function() {
          return sr;
        }),
        i.d(r, 'invoker', function() {
          return fr;
        }),
        i.d(r, 'is', function() {
          return lr;
        }),
        i.d(r, 'isEmpty', function() {
          return pr;
        }),
        i.d(r, 'isNil', function() {
          return re;
        }),
        i.d(r, 'join', function() {
          return dr;
        }),
        i.d(r, 'juxt', function() {
          return yr;
        }),
        i.d(r, 'keys', function() {
          return I;
        }),
        i.d(r, 'keysIn', function() {
          return hr;
        }),
        i.d(r, 'last', function() {
          return at;
        }),
        i.d(r, 'lastIndexOf', function() {
          return vr;
        }),
        i.d(r, 'length', function() {
          return gr;
        }),
        i.d(r, 'lens', function() {
          return mr;
        }),
        i.d(r, 'lensIndex', function() {
          return br;
        }),
        i.d(r, 'lensPath', function() {
          return _r;
        }),
        i.d(r, 'lensProp', function() {
          return wr;
        }),
        i.d(r, 'lift', function() {
          return ue;
        }),
        i.d(r, 'liftN', function() {
          return ae;
        }),
        i.d(r, 'lt', function() {
          return xr;
        }),
        i.d(r, 'lte', function() {
          return Or;
        }),
        i.d(r, 'map', function() {
          return B;
        }),
        i.d(r, 'mapAccum', function() {
          return Sr;
        }),
        i.d(r, 'mapAccumRight', function() {
          return kr;
        }),
        i.d(r, 'mapObjIndexed', function() {
          return Er;
        }),
        i.d(r, 'match', function() {
          return Ar;
        }),
        i.d(r, 'mathMod', function() {
          return Tr;
        }),
        i.d(r, 'max', function() {
          return _;
        }),
        i.d(r, 'maxBy', function() {
          return Nr;
        }),
        i.d(r, 'mean', function() {
          return Cr;
        }),
        i.d(r, 'median', function() {
          return Ir;
        }),
        i.d(r, 'memoize', function() {
          return Rr;
        }),
        i.d(r, 'memoizeWith', function() {
          return Br;
        }),
        i.d(r, 'merge', function() {
          return jr;
        }),
        i.d(r, 'mergeAll', function() {
          return Mr;
        }),
        i.d(r, 'mergeDeepLeft', function() {
          return Fr;
        }),
        i.d(r, 'mergeDeepRight', function() {
          return Ur;
        }),
        i.d(r, 'mergeDeepWith', function() {
          return qr;
        }),
        i.d(r, 'mergeDeepWithKey', function() {
          return Dr;
        }),
        i.d(r, 'mergeWith', function() {
          return Gr;
        }),
        i.d(r, 'mergeWithKey', function() {
          return Lr;
        }),
        i.d(r, 'min', function() {
          return Wr;
        }),
        i.d(r, 'minBy', function() {
          return Vr;
        }),
        i.d(r, 'modulo', function() {
          return zr;
        }),
        i.d(r, 'multiply', function() {
          return Xr;
        }),
        i.d(r, 'nAry', function() {
          return oe;
        }),
        i.d(r, 'negate', function() {
          return $r;
        }),
        i.d(r, 'none', function() {
          return Hr;
        }),
        i.d(r, 'not', function() {
          return ge;
        }),
        i.d(r, 'nth', function() {
          return it;
        }),
        i.d(r, 'nthArg', function() {
          return Yr;
        }),
        i.d(r, 'o', function() {
          return Kr;
        }),
        i.d(r, 'objOf', function() {
          return rr;
        }),
        i.d(r, 'of', function() {
          return Qr;
        }),
        i.d(r, 'omit', function() {
          return Jr;
        }),
        i.d(r, 'once', function() {
          return Zr;
        }),
        i.d(r, 'or', function() {
          return pt;
        }),
        i.d(r, 'over', function() {
          return en;
        }),
        i.d(r, 'pair', function() {
          return tn;
        }),
        i.d(r, 'partial', function() {
          return rn;
        }),
        i.d(r, 'partialRight', function() {
          return nn;
        }),
        i.d(r, 'partition', function() {
          return on;
        }),
        i.d(r, 'path', function() {
          return R;
        }),
        i.d(r, 'pathEq', function() {
          return an;
        }),
        i.d(r, 'pathOr', function() {
          return un;
        }),
        i.d(r, 'pathSatisfies', function() {
          return cn;
        }),
        i.d(r, 'pick', function() {
          return sn;
        }),
        i.d(r, 'pickAll', function() {
          return ln;
        }),
        i.d(r, 'pickBy', function() {
          return pn;
        }),
        i.d(r, 'pipe', function() {
          return pipe;
        }),
        i.d(r, 'pipeK', function() {
          return pipeK;
        }),
        i.d(r, 'pipeP', function() {
          return pipeP;
        }),
        i.d(r, 'pluck', function() {
          return M;
        }),
        i.d(r, 'prepend', function() {
          return dn;
        }),
        i.d(r, 'product', function() {
          return yn;
        }),
        i.d(r, 'project', function() {
          return vn;
        }),
        i.d(r, 'prop', function() {
          return j;
        }),
        i.d(r, 'propEq', function() {
          return gn;
        }),
        i.d(r, 'propIs', function() {
          return mn;
        }),
        i.d(r, 'propOr', function() {
          return bn;
        }),
        i.d(r, 'propSatisfies', function() {
          return _n;
        }),
        i.d(r, 'props', function() {
          return wn;
        }),
        i.d(r, 'range', function() {
          return xn;
        }),
        i.d(r, 'reduce', function() {
          return L;
        }),
        i.d(r, 'reduceBy', function() {
          return Le;
        }),
        i.d(r, 'reduceRight', function() {
          return On;
        }),
        i.d(r, 'reduceWhile', function() {
          return Sn;
        }),
        i.d(r, 'reduced', function() {
          return kn;
        }),
        i.d(r, 'reject', function() {
          return Te;
        }),
        i.d(r, 'remove', function() {
          return ze;
        }),
        i.d(r, 'repeat', function() {
          return An;
        }),
        i.d(r, 'replace', function() {
          return Tn;
        }),
        i.d(r, 'reverse', function() {
          return we;
        }),
        i.d(r, 'scan', function() {
          return Nn;
        }),
        i.d(r, 'sequence', function() {
          return Pn;
        }),
        i.d(r, 'set', function() {
          return Cn;
        }),
        i.d(r, 'slice', function() {
          return be;
        }),
        i.d(r, 'sort', function() {
          return In;
        }),
        i.d(r, 'sortBy', function() {
          return Bn;
        }),
        i.d(r, 'sortWith', function() {
          return Rn;
        }),
        i.d(r, 'split', function() {
          return jn;
        }),
        i.d(r, 'splitAt', function() {
          return Mn;
        }),
        i.d(r, 'splitEvery', function() {
          return Ln;
        }),
        i.d(r, 'splitWhen', function() {
          return Dn;
        }),
        i.d(r, 'startsWith', function() {
          return Fn;
        }),
        i.d(r, 'subtract', function() {
          return Un;
        }),
        i.d(r, 'sum', function() {
          return Pr;
        }),
        i.d(r, 'symmetricDifference', function() {
          return qn;
        }),
        i.d(r, 'symmetricDifferenceWith', function() {
          return Gn;
        }),
        i.d(r, 'tail', function() {
          return _e;
        }),
        i.d(r, 'take', function() {
          return Je;
        }),
        i.d(r, 'takeLast', function() {
          return ht;
        }),
        i.d(r, 'takeLastWhile', function() {
          return Wn;
        }),
        i.d(r, 'takeWhile', function() {
          return zn;
        }),
        i.d(r, 'tap', function() {
          return $n;
        }),
        i.d(r, 'test', function() {
          return Hn;
        }),
        i.d(r, 'times', function() {
          return En;
        }),
        i.d(r, 'toLower', function() {
          return Yn;
        }),
        i.d(r, 'toPairs', function() {
          return Kn;
        }),
        i.d(r, 'toPairsIn', function() {
          return Qn;
        }),
        i.d(r, 'toString', function() {
          return Ne;
        }),
        i.d(r, 'toUpper', function() {
          return Jn;
        }),
        i.d(r, 'transduce', function() {
          return Zn;
        }),
        i.d(r, 'transpose', function() {
          return eo;
        }),
        i.d(r, 'traverse', function() {
          return to;
        }),
        i.d(r, 'trim', function() {
          return no;
        }),
        i.d(r, 'tryCatch', function() {
          return oo;
        }),
        i.d(r, 'type', function() {
          return ye;
        }),
        i.d(r, 'unapply', function() {
          return io;
        }),
        i.d(r, 'unary', function() {
          return ao;
        }),
        i.d(r, 'uncurryN', function() {
          return uo;
        }),
        i.d(r, 'unfold', function() {
          return co;
        }),
        i.d(r, 'union', function() {
          return so;
        }),
        i.d(r, 'unionWith', function() {
          return lo;
        }),
        i.d(r, 'uniq', function() {
          return Jt;
        }),
        i.d(r, 'uniqBy', function() {
          return Qt;
        }),
        i.d(r, 'uniqWith', function() {
          return fo;
        }),
        i.d(r, 'unless', function() {
          return po;
        }),
        i.d(r, 'unnest', function() {
          return yo;
        }),
        i.d(r, 'until', function() {
          return ho;
        }),
        i.d(r, 'update', function() {
          return Xe;
        }),
        i.d(r, 'useWith', function() {
          return hn;
        }),
        i.d(r, 'values', function() {
          return K;
        }),
        i.d(r, 'valuesIn', function() {
          return vo;
        }),
        i.d(r, 'view', function() {
          return go;
        }),
        i.d(r, 'when', function() {
          return mo;
        }),
        i.d(r, 'where', function() {
          return bo;
        }),
        i.d(r, 'whereEq', function() {
          return _o;
        }),
        i.d(r, 'without', function() {
          return wo;
        }),
        i.d(r, 'xprod', function() {
          return xo;
        }),
        i.d(r, 'zip', function() {
          return Oo;
        }),
        i.d(r, 'zipObj', function() {
          return So;
        }),
        i.d(r, 'zipWith', function() {
          return ko;
        });
      var a = _curry1(function always(t) {
          return function() {
            return t;
          };
        }),
        u = a(!1),
        c = a(!0),
        l = { '@@functional/placeholder': !0 };
      function _curry2(t) {
        return function f2(r, i) {
          switch (arguments.length) {
            case 0:
              return f2;
            case 1:
              return _isPlaceholder(r)
                ? f2
                : _curry1(function(i) {
                    return t(r, i);
                  });
            default:
              return _isPlaceholder(r) && _isPlaceholder(i)
                ? f2
                : _isPlaceholder(r)
                ? _curry1(function(r) {
                    return t(r, i);
                  })
                : _isPlaceholder(i)
                ? _curry1(function(i) {
                    return t(r, i);
                  })
                : t(r, i);
          }
        };
      }
      var p = _curry2(function add(t, r) {
        return Number(t) + Number(r);
      });
      function _concat(t, r) {
        var i;
        r = r || [];
        var a = (t = t || []).length,
          u = r.length,
          c = [];
        for (i = 0; i < a; ) (c[c.length] = t[i]), (i += 1);
        for (i = 0; i < u; ) (c[c.length] = r[i]), (i += 1);
        return c;
      }
      function _arity(t, r) {
        switch (t) {
          case 0:
            return function() {
              return r.apply(this, arguments);
            };
          case 1:
            return function(t) {
              return r.apply(this, arguments);
            };
          case 2:
            return function(t, i) {
              return r.apply(this, arguments);
            };
          case 3:
            return function(t, i, a) {
              return r.apply(this, arguments);
            };
          case 4:
            return function(t, i, a, u) {
              return r.apply(this, arguments);
            };
          case 5:
            return function(t, i, a, u, c) {
              return r.apply(this, arguments);
            };
          case 6:
            return function(t, i, a, u, c, l) {
              return r.apply(this, arguments);
            };
          case 7:
            return function(t, i, a, u, c, l, p) {
              return r.apply(this, arguments);
            };
          case 8:
            return function(t, i, a, u, c, l, p, d) {
              return r.apply(this, arguments);
            };
          case 9:
            return function(t, i, a, u, c, l, p, d, y) {
              return r.apply(this, arguments);
            };
          case 10:
            return function(t, i, a, u, c, l, p, d, y, h) {
              return r.apply(this, arguments);
            };
          default:
            throw new Error(
              'First argument to _arity must be a non-negative integer no greater than ten'
            );
        }
      }
      function _curryN(t, r, i) {
        return function() {
          for (
            var a = [], u = 0, c = t, l = 0;
            l < r.length || u < arguments.length;

          ) {
            var p;
            l < r.length && (!_isPlaceholder(r[l]) || u >= arguments.length)
              ? (p = r[l])
              : ((p = arguments[u]), (u += 1)),
              (a[l] = p),
              _isPlaceholder(p) || (c -= 1),
              (l += 1);
          }
          return c <= 0 ? i.apply(this, a) : _arity(c, _curryN(t, a, i));
        };
      }
      var d = _curry2(function curryN(t, r) {
          return 1 === t ? _curry1(r) : _arity(t, _curryN(t, [], r));
        }),
        y = _curry1(function addIndex(t) {
          return d(t.length, function() {
            var r = 0,
              i = arguments[0],
              a = arguments[arguments.length - 1],
              u = Array.prototype.slice.call(arguments, 0);
            return (
              (u[0] = function() {
                var t = i.apply(this, _concat(arguments, [r, a]));
                return (r += 1), t;
              }),
              t.apply(this, u)
            );
          });
        });
      function _curry3(t) {
        return function f3(r, i, a) {
          switch (arguments.length) {
            case 0:
              return f3;
            case 1:
              return _isPlaceholder(r)
                ? f3
                : _curry2(function(i, a) {
                    return t(r, i, a);
                  });
            case 2:
              return _isPlaceholder(r) && _isPlaceholder(i)
                ? f3
                : _isPlaceholder(r)
                ? _curry2(function(r, a) {
                    return t(r, i, a);
                  })
                : _isPlaceholder(i)
                ? _curry2(function(i, a) {
                    return t(r, i, a);
                  })
                : _curry1(function(a) {
                    return t(r, i, a);
                  });
            default:
              return _isPlaceholder(r) && _isPlaceholder(i) && _isPlaceholder(a)
                ? f3
                : _isPlaceholder(r) && _isPlaceholder(i)
                ? _curry2(function(r, i) {
                    return t(r, i, a);
                  })
                : _isPlaceholder(r) && _isPlaceholder(a)
                ? _curry2(function(r, a) {
                    return t(r, i, a);
                  })
                : _isPlaceholder(i) && _isPlaceholder(a)
                ? _curry2(function(i, a) {
                    return t(r, i, a);
                  })
                : _isPlaceholder(r)
                ? _curry1(function(r) {
                    return t(r, i, a);
                  })
                : _isPlaceholder(i)
                ? _curry1(function(i) {
                    return t(r, i, a);
                  })
                : _isPlaceholder(a)
                ? _curry1(function(a) {
                    return t(r, i, a);
                  })
                : t(r, i, a);
          }
        };
      }
      var h = _curry3(function adjust(t, r, i) {
          if (r >= i.length || r < -i.length) return i;
          var a = (r < 0 ? i.length : 0) + r,
            u = _concat(i);
          return (u[a] = t(i[a])), u;
        }),
        v =
          Array.isArray ||
          function _isArray(t) {
            return (
              null != t &&
              t.length >= 0 &&
              '[object Array]' === Object.prototype.toString.call(t)
            );
          };
      function _isTransformer(t) {
        return 'function' == typeof t['@@transducer/step'];
      }
      function _dispatchable(t, r, i) {
        return function() {
          if (0 === arguments.length) return i();
          var a = Array.prototype.slice.call(arguments, 0),
            u = a.pop();
          if (!v(u)) {
            for (var c = 0; c < t.length; ) {
              if ('function' == typeof u[t[c]]) return u[t[c]].apply(u, a);
              c += 1;
            }
            if (_isTransformer(u)) {
              var l = r.apply(null, a);
              return l(u);
            }
          }
          return i.apply(this, arguments);
        };
      }
      function _reduced(t) {
        return t && t['@@transducer/reduced']
          ? t
          : { '@@transducer/value': t, '@@transducer/reduced': !0 };
      }
      var g = {
          init: function() {
            return this.xf['@@transducer/init']();
          },
          result: function(t) {
            return this.xf['@@transducer/result'](t);
          }
        },
        m = (function() {
          function XAll(t, r) {
            (this.xf = r), (this.f = t), (this.all = !0);
          }
          return (
            (XAll.prototype['@@transducer/init'] = g.init),
            (XAll.prototype['@@transducer/result'] = function(t) {
              return (
                this.all && (t = this.xf['@@transducer/step'](t, !0)),
                this.xf['@@transducer/result'](t)
              );
            }),
            (XAll.prototype['@@transducer/step'] = function(t, r) {
              return (
                this.f(r) ||
                  ((this.all = !1),
                  (t = _reduced(this.xf['@@transducer/step'](t, !1)))),
                t
              );
            }),
            XAll
          );
        })(),
        b = _curry2(
          _dispatchable(
            ['all'],
            _curry2(function _xall(t, r) {
              return new m(t, r);
            }),
            function all(t, r) {
              for (var i = 0; i < r.length; ) {
                if (!t(r[i])) return !1;
                i += 1;
              }
              return !0;
            }
          )
        ),
        _ = _curry2(function max(t, r) {
          return r > t ? r : t;
        });
      function _map(t, r) {
        for (var i = 0, a = r.length, u = Array(a); i < a; )
          (u[i] = t(r[i])), (i += 1);
        return u;
      }
      function _isString(t) {
        return '[object String]' === Object.prototype.toString.call(t);
      }
      var w = _curry1(function isArrayLike(t) {
          return (
            !!v(t) ||
            (!!t &&
              'object' == typeof t &&
                !_isString(t) &&
                  (1 === t.nodeType
                    ? !!t.length
                    : 0 === t.length ||
                      (t.length > 0 &&
                        t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1))))
          );
        }),
        x = (function() {
          function XWrap(t) {
            this.f = t;
          }
          return (
            (XWrap.prototype['@@transducer/init'] = function() {
              throw new Error('init not implemented on XWrap');
            }),
            (XWrap.prototype['@@transducer/result'] = function(t) {
              return t;
            }),
            (XWrap.prototype['@@transducer/step'] = function(t, r) {
              return this.f(t, r);
            }),
            XWrap
          );
        })();
      function _xwrap(t) {
        return new x(t);
      }
      var O = _curry2(function bind(t, r) {
        return _arity(t.length, function() {
          return t.apply(r, arguments);
        });
      });
      function _iterableReduce(t, r, i) {
        for (var a = i.next(); !a.done; ) {
          if (
            (r = t['@@transducer/step'](r, a.value)) &&
            r['@@transducer/reduced']
          ) {
            r = r['@@transducer/value'];
            break;
          }
          a = i.next();
        }
        return t['@@transducer/result'](r);
      }
      function _methodReduce(t, r, i, a) {
        return t['@@transducer/result'](i[a](O(t['@@transducer/step'], t), r));
      }
      var S = 'undefined' != typeof Symbol ? Symbol.iterator : '@@iterator';
      function _reduce(t, r, i) {
        if (('function' == typeof t && (t = _xwrap(t)), w(i)))
          return (function _arrayReduce(t, r, i) {
            for (var a = 0, u = i.length; a < u; ) {
              if (
                (r = t['@@transducer/step'](r, i[a])) &&
                r['@@transducer/reduced']
              ) {
                r = r['@@transducer/value'];
                break;
              }
              a += 1;
            }
            return t['@@transducer/result'](r);
          })(t, r, i);
        if ('function' == typeof i['fantasy-land/reduce'])
          return _methodReduce(t, r, i, 'fantasy-land/reduce');
        if (null != i[S]) return _iterableReduce(t, r, i[S]());
        if ('function' == typeof i.next) return _iterableReduce(t, r, i);
        if ('function' == typeof i.reduce)
          return _methodReduce(t, r, i, 'reduce');
        throw new TypeError('reduce: list must be array or iterable');
      }
      var k = (function() {
          function XMap(t, r) {
            (this.xf = r), (this.f = t);
          }
          return (
            (XMap.prototype['@@transducer/init'] = g.init),
            (XMap.prototype['@@transducer/result'] = g.result),
            (XMap.prototype['@@transducer/step'] = function(t, r) {
              return this.xf['@@transducer/step'](t, this.f(r));
            }),
            XMap
          );
        })(),
        E = _curry2(function _xmap(t, r) {
          return new k(t, r);
        });
      function _has(t, r) {
        return Object.prototype.hasOwnProperty.call(r, t);
      }
      var A = Object.prototype.toString,
        internal_isArguments = function() {
          return '[object Arguments]' === A.call(arguments)
            ? function _isArguments(t) {
                return '[object Arguments]' === A.call(t);
              }
            : function _isArguments(t) {
                return _has('callee', t);
              };
        },
        T = !{ toString: null }.propertyIsEnumerable('toString'),
        N = [
          'constructor',
          'valueOf',
          'isPrototypeOf',
          'toString',
          'propertyIsEnumerable',
          'hasOwnProperty',
          'toLocaleString'
        ],
        P = (function() {
          return arguments.propertyIsEnumerable('length');
        })(),
        C = function contains(t, r) {
          for (var i = 0; i < t.length; ) {
            if (t[i] === r) return !0;
            i += 1;
          }
          return !1;
        },
        I = _curry1(
          'function' != typeof Object.keys || P
            ? function keys(t) {
                if (Object(t) !== t) return [];
                var r,
                  i,
                  a = [],
                  u = P && internal_isArguments(t);
                for (r in t)
                  !_has(r, t) || (u && 'length' === r) || (a[a.length] = r);
                if (T)
                  for (i = N.length - 1; i >= 0; )
                    _has((r = N[i]), t) && !C(a, r) && (a[a.length] = r),
                      (i -= 1);
                return a;
              }
            : function keys(t) {
                return Object(t) !== t ? [] : Object.keys(t);
              }
        ),
        B = _curry2(
          _dispatchable(['fantasy-land/map', 'map'], E, function map(t, r) {
            switch (Object.prototype.toString.call(r)) {
              case '[object Function]':
                return d(r.length, function() {
                  return t.call(this, r.apply(this, arguments));
                });
              case '[object Object]':
                return _reduce(
                  function(i, a) {
                    return (i[a] = t(r[a])), i;
                  },
                  {},
                  I(r)
                );
              default:
                return _map(t, r);
            }
          })
        ),
        R = _curry2(function path(t, r) {
          for (var i = r, a = 0; a < t.length; ) {
            if (null == i) return;
            (i = i[t[a]]), (a += 1);
          }
          return i;
        }),
        j = _curry2(function prop(t, r) {
          return R([t], r);
        }),
        M = _curry2(function pluck(t, r) {
          return B(j(t), r);
        }),
        L = _curry3(_reduce),
        D = _curry1(function allPass(t) {
          return d(L(_, 0, M('length', t)), function() {
            for (var r = 0, i = t.length; r < i; ) {
              if (!t[r].apply(this, arguments)) return !1;
              r += 1;
            }
            return !0;
          });
        }),
        U = _curry2(function and(t, r) {
          return t && r;
        }),
        q = (function() {
          function XAny(t, r) {
            (this.xf = r), (this.f = t), (this.any = !1);
          }
          return (
            (XAny.prototype['@@transducer/init'] = g.init),
            (XAny.prototype['@@transducer/result'] = function(t) {
              return (
                this.any || (t = this.xf['@@transducer/step'](t, !1)),
                this.xf['@@transducer/result'](t)
              );
            }),
            (XAny.prototype['@@transducer/step'] = function(t, r) {
              return (
                this.f(r) &&
                  ((this.any = !0),
                  (t = _reduced(this.xf['@@transducer/step'](t, !0)))),
                t
              );
            }),
            XAny
          );
        })(),
        G = _curry2(function _xany(t, r) {
          return new q(t, r);
        }),
        W = _curry2(
          _dispatchable(['any'], G, function any(t, r) {
            for (var i = 0; i < r.length; ) {
              if (t(r[i])) return !0;
              i += 1;
            }
            return !1;
          })
        ),
        V = _curry1(function anyPass(t) {
          return d(L(_, 0, M('length', t)), function() {
            for (var r = 0, i = t.length; r < i; ) {
              if (t[r].apply(this, arguments)) return !0;
              r += 1;
            }
            return !1;
          });
        }),
        z = _curry2(function ap(t, r) {
          return 'function' == typeof r['fantasy-land/ap']
            ? r['fantasy-land/ap'](t)
            : 'function' == typeof t.ap
            ? t.ap(r)
            : 'function' == typeof t
            ? function(i) {
                return t(i)(r(i));
              }
            : _reduce(
                function(t, i) {
                  return _concat(t, B(i, r));
                },
                [],
                t
              );
        });
      function _aperture(t, r) {
        for (
          var i = 0, a = r.length - (t - 1), u = new Array(a >= 0 ? a : 0);
          i < a;

        )
          (u[i] = Array.prototype.slice.call(r, i, i + t)), (i += 1);
        return u;
      }
      var X = (function() {
          function XAperture(t, r) {
            (this.xf = r),
              (this.pos = 0),
              (this.full = !1),
              (this.acc = new Array(t));
          }
          return (
            (XAperture.prototype['@@transducer/init'] = g.init),
            (XAperture.prototype['@@transducer/result'] = function(t) {
              return (this.acc = null), this.xf['@@transducer/result'](t);
            }),
            (XAperture.prototype['@@transducer/step'] = function(t, r) {
              return (
                this.store(r),
                this.full ? this.xf['@@transducer/step'](t, this.getCopy()) : t
              );
            }),
            (XAperture.prototype.store = function(t) {
              (this.acc[this.pos] = t),
                (this.pos += 1),
                this.pos === this.acc.length &&
                  ((this.pos = 0), (this.full = !0));
            }),
            (XAperture.prototype.getCopy = function() {
              return _concat(
                Array.prototype.slice.call(this.acc, this.pos),
                Array.prototype.slice.call(this.acc, 0, this.pos)
              );
            }),
            XAperture
          );
        })(),
        $ = _curry2(
          _dispatchable(
            [],
            _curry2(function _xaperture(t, r) {
              return new X(t, r);
            }),
            _aperture
          )
        ),
        H = _curry2(function append(t, r) {
          return _concat(r, [t]);
        }),
        Y = _curry2(function apply(t, r) {
          return t.apply(this, r);
        }),
        K = _curry1(function values(t) {
          for (var r = I(t), i = r.length, a = [], u = 0; u < i; )
            (a[u] = t[r[u]]), (u += 1);
          return a;
        }),
        Q = _curry1(function applySpec(t) {
          return (
            (t = B(function(t) {
              return 'function' == typeof t ? t : applySpec(t);
            }, t)),
            d(L(_, 0, M('length', K(t))), function() {
              var r = arguments;
              return B(function(t) {
                return Y(t, r);
              }, t);
            })
          );
        }),
        J = _curry2(function applyTo(t, r) {
          return r(t);
        }),
        Z = _curry3(function ascend(t, r, i) {
          var a = t(r),
            u = t(i);
          return a < u ? -1 : a > u ? 1 : 0;
        }),
        ee = _curry3(function assoc(t, r, i) {
          var a = {};
          for (var u in i) a[u] = i[u];
          return (a[t] = r), a;
        }),
        te =
          Number.isInteger ||
          function _isInteger(t) {
            return t << 0 === t;
          },
        re = _curry1(function isNil(t) {
          return null == t;
        }),
        ne = _curry3(function assocPath(t, r, i) {
          if (0 === t.length) return r;
          var a = t[0];
          if (t.length > 1) {
            var u = !re(i) && _has(a, i) ? i[a] : te(t[1]) ? [] : {};
            r = assocPath(Array.prototype.slice.call(t, 1), r, u);
          }
          if (te(a) && v(i)) {
            var c = [].concat(i);
            return (c[a] = r), c;
          }
          return ee(a, r, i);
        }),
        oe = _curry2(function nAry(t, r) {
          switch (t) {
            case 0:
              return function() {
                return r.call(this);
              };
            case 1:
              return function(t) {
                return r.call(this, t);
              };
            case 2:
              return function(t, i) {
                return r.call(this, t, i);
              };
            case 3:
              return function(t, i, a) {
                return r.call(this, t, i, a);
              };
            case 4:
              return function(t, i, a, u) {
                return r.call(this, t, i, a, u);
              };
            case 5:
              return function(t, i, a, u, c) {
                return r.call(this, t, i, a, u, c);
              };
            case 6:
              return function(t, i, a, u, c, l) {
                return r.call(this, t, i, a, u, c, l);
              };
            case 7:
              return function(t, i, a, u, c, l, p) {
                return r.call(this, t, i, a, u, c, l, p);
              };
            case 8:
              return function(t, i, a, u, c, l, p, d) {
                return r.call(this, t, i, a, u, c, l, p, d);
              };
            case 9:
              return function(t, i, a, u, c, l, p, d, y) {
                return r.call(this, t, i, a, u, c, l, p, d, y);
              };
            case 10:
              return function(t, i, a, u, c, l, p, d, y, h) {
                return r.call(this, t, i, a, u, c, l, p, d, y, h);
              };
            default:
              throw new Error(
                'First argument to nAry must be a non-negative integer no greater than ten'
              );
          }
        }),
        ie = _curry1(function binary(t) {
          return oe(2, t);
        });
      function _isFunction(t) {
        return '[object Function]' === Object.prototype.toString.call(t);
      }
      var ae = _curry2(function liftN(t, r) {
          var i = d(t, r);
          return d(t, function() {
            return _reduce(
              z,
              B(i, arguments[0]),
              Array.prototype.slice.call(arguments, 1)
            );
          });
        }),
        ue = _curry1(function lift(t) {
          return ae(t.length, t);
        }),
        ce = _curry2(function both(t, r) {
          return _isFunction(t)
            ? function _both() {
                return t.apply(this, arguments) && r.apply(this, arguments);
              }
            : ue(U)(t, r);
        }),
        se = _curry1(function curry(t) {
          return d(t.length, t);
        }),
        fe = se(function call(t) {
          return t.apply(this, Array.prototype.slice.call(arguments, 1));
        });
      function _makeFlat(t) {
        return function flatt(r) {
          for (var i, a, u, c = [], l = 0, p = r.length; l < p; ) {
            if (w(r[l]))
              for (u = 0, a = (i = t ? flatt(r[l]) : r[l]).length; u < a; )
                (c[c.length] = i[u]), (u += 1);
            else c[c.length] = r[l];
            l += 1;
          }
          return c;
        };
      }
      var le = function _xcat(t) {
          var r = (function(t) {
            return {
              '@@transducer/init': g.init,
              '@@transducer/result': function(r) {
                return t['@@transducer/result'](r);
              },
              '@@transducer/step': function(r, i) {
                var a = t['@@transducer/step'](r, i);
                return a['@@transducer/reduced']
                  ? (function _forceReduced(t) {
                      return {
                        '@@transducer/value': t,
                        '@@transducer/reduced': !0
                      };
                    })(a)
                  : a;
              }
            };
          })(t);
          return {
            '@@transducer/init': g.init,
            '@@transducer/result': function(t) {
              return r['@@transducer/result'](t);
            },
            '@@transducer/step': function(t, i) {
              return w(i) ? _reduce(r, t, i) : _reduce(r, t, [i]);
            }
          };
        },
        pe = _curry2(
          _dispatchable(
            ['fantasy-land/chain', 'chain'],
            _curry2(function _xchain(t, r) {
              return B(t, le(r));
            }),
            function chain(t, r) {
              return 'function' == typeof r
                ? function(i) {
                    return t(r(i))(i);
                  }
                : _makeFlat(!1)(B(t, r));
            }
          )
        ),
        de = _curry3(function clamp(t, r, i) {
          if (t > r)
            throw new Error(
              'min must not be greater than max in clamp(min, max, value)'
            );
          return i < t ? t : i > r ? r : i;
        });
      function _cloneRegExp(t) {
        return new RegExp(
          t.source,
          (t.global ? 'g' : '') +
            (t.ignoreCase ? 'i' : '') +
            (t.multiline ? 'm' : '') +
            (t.sticky ? 'y' : '') +
            (t.unicode ? 'u' : '')
        );
      }
      var ye = _curry1(function type(t) {
        return null === t
          ? 'Null'
          : void 0 === t
          ? 'Undefined'
          : Object.prototype.toString.call(t).slice(8, -1);
      });
      function _clone(t, r, i, a) {
        var u = function copy(u) {
          for (var c = r.length, l = 0; l < c; ) {
            if (t === r[l]) return i[l];
            l += 1;
          }
          for (var p in ((r[l + 1] = t), (i[l + 1] = u), t))
            u[p] = a ? _clone(t[p], r, i, !0) : t[p];
          return u;
        };
        switch (ye(t)) {
          case 'Object':
            return u({});
          case 'Array':
            return u([]);
          case 'Date':
            return new Date(t.valueOf());
          case 'RegExp':
            return _cloneRegExp(t);
          default:
            return t;
        }
      }
      var he = _curry1(function clone(t) {
          return null != t && 'function' == typeof t.clone
            ? t.clone()
            : _clone(t, [], [], !0);
        }),
        ve = _curry1(function comparator(t) {
          return function(r, i) {
            return t(r, i) ? -1 : t(i, r) ? 1 : 0;
          };
        }),
        ge = _curry1(function not(t) {
          return !t;
        }),
        me = ue(ge);
      function _pipe(t, r) {
        return function() {
          return r.call(this, t.apply(this, arguments));
        };
      }
      function _checkForMethod(t, r) {
        return function() {
          var i = arguments.length;
          if (0 === i) return r();
          var a = arguments[i - 1];
          return v(a) || 'function' != typeof a[t]
            ? r.apply(this, arguments)
            : a[t].apply(a, Array.prototype.slice.call(arguments, 0, i - 1));
        };
      }
      var be = _curry3(
          _checkForMethod('slice', function slice(t, r, i) {
            return Array.prototype.slice.call(i, t, r);
          })
        ),
        _e = _curry1(_checkForMethod('tail', be(1, 1 / 0)));
      function pipe() {
        if (0 === arguments.length)
          throw new Error('pipe requires at least one argument');
        return _arity(
          arguments[0].length,
          L(_pipe, arguments[0], _e(arguments))
        );
      }
      var we = _curry1(function reverse(t) {
        return _isString(t)
          ? t
              .split('')
              .reverse()
              .join('')
          : Array.prototype.slice.call(t, 0).reverse();
      });
      function compose() {
        if (0 === arguments.length)
          throw new Error('compose requires at least one argument');
        return pipe.apply(this, we(arguments));
      }
      function composeK() {
        if (0 === arguments.length)
          throw new Error('composeK requires at least one argument');
        var t = Array.prototype.slice.call(arguments),
          r = t.pop();
        return compose(compose.apply(this, B(pe, t)), r);
      }
      function _pipeP(t, r) {
        return function() {
          var i = this;
          return t.apply(i, arguments).then(function(t) {
            return r.call(i, t);
          });
        };
      }
      function pipeP() {
        if (0 === arguments.length)
          throw new Error('pipeP requires at least one argument');
        return _arity(
          arguments[0].length,
          L(_pipeP, arguments[0], _e(arguments))
        );
      }
      function composeP() {
        if (0 === arguments.length)
          throw new Error('composeP requires at least one argument');
        return pipeP.apply(this, we(arguments));
      }
      function _arrayFromIterator(t) {
        for (var r, i = []; !(r = t.next()).done; ) i.push(r.value);
        return i;
      }
      function _containsWith(t, r, i) {
        for (var a = 0, u = i.length; a < u; ) {
          if (t(r, i[a])) return !0;
          a += 1;
        }
        return !1;
      }
      var xe = _curry2(function identical(t, r) {
        return t === r ? 0 !== t || 1 / t == 1 / r : t != t && r != r;
      });
      function _uniqContentEquals(t, r, i, a) {
        var u = _arrayFromIterator(t);
        function eq(t, r) {
          return _equals(t, r, i.slice(), a.slice());
        }
        return !_containsWith(
          function(t, r) {
            return !_containsWith(eq, r, t);
          },
          _arrayFromIterator(r),
          u
        );
      }
      function _equals(t, r, i, a) {
        if (xe(t, r)) return !0;
        var u = ye(t);
        if (u !== ye(r)) return !1;
        if (null == t || null == r) return !1;
        if (
          'function' == typeof t['fantasy-land/equals'] ||
          'function' == typeof r['fantasy-land/equals']
        )
          return (
            'function' == typeof t['fantasy-land/equals'] &&
            t['fantasy-land/equals'](r) &&
            'function' == typeof r['fantasy-land/equals'] &&
            r['fantasy-land/equals'](t)
          );
        if ('function' == typeof t.equals || 'function' == typeof r.equals)
          return (
            'function' == typeof t.equals &&
            t.equals(r) &&
            'function' == typeof r.equals &&
            r.equals(t)
          );
        switch (u) {
          case 'Arguments':
          case 'Array':
          case 'Object':
            if (
              'function' == typeof t.constructor &&
              'Promise' ===
                (function _functionName(t) {
                  var r = String(t).match(/^function (\w*)/);
                  return null == r ? '' : r[1];
                })(t.constructor)
            )
              return t === r;
            break;
          case 'Boolean':
          case 'Number':
          case 'String':
            if (typeof t != typeof r || !xe(t.valueOf(), r.valueOf()))
              return !1;
            break;
          case 'Date':
            if (!xe(t.valueOf(), r.valueOf())) return !1;
            break;
          case 'Error':
            return t.name === r.name && t.message === r.message;
          case 'RegExp':
            if (
              t.source !== r.source ||
              t.global !== r.global ||
              t.ignoreCase !== r.ignoreCase ||
              t.multiline !== r.multiline ||
              t.sticky !== r.sticky ||
              t.unicode !== r.unicode
            )
              return !1;
        }
        for (var c = i.length - 1; c >= 0; ) {
          if (i[c] === t) return a[c] === r;
          c -= 1;
        }
        switch (u) {
          case 'Map':
            return (
              t.size === r.size &&
              _uniqContentEquals(
                t.entries(),
                r.entries(),
                i.concat([t]),
                a.concat([r])
              )
            );
          case 'Set':
            return (
              t.size === r.size &&
              _uniqContentEquals(
                t.values(),
                r.values(),
                i.concat([t]),
                a.concat([r])
              )
            );
          case 'Arguments':
          case 'Array':
          case 'Object':
          case 'Boolean':
          case 'Number':
          case 'String':
          case 'Date':
          case 'Error':
          case 'RegExp':
          case 'Int8Array':
          case 'Uint8Array':
          case 'Uint8ClampedArray':
          case 'Int16Array':
          case 'Uint16Array':
          case 'Int32Array':
          case 'Uint32Array':
          case 'Float32Array':
          case 'Float64Array':
          case 'ArrayBuffer':
            break;
          default:
            return !1;
        }
        var l = I(t);
        if (l.length !== I(r).length) return !1;
        var p = i.concat([t]),
          d = a.concat([r]);
        for (c = l.length - 1; c >= 0; ) {
          var y = l[c];
          if (!_has(y, r) || !_equals(r[y], t[y], p, d)) return !1;
          c -= 1;
        }
        return !0;
      }
      var Oe = _curry2(function equals(t, r) {
        return _equals(t, r, [], []);
      });
      function _indexOf(t, r, i) {
        var a, u;
        if ('function' == typeof t.indexOf)
          switch (typeof r) {
            case 'number':
              if (0 === r) {
                for (a = 1 / r; i < t.length; ) {
                  if (0 === (u = t[i]) && 1 / u === a) return i;
                  i += 1;
                }
                return -1;
              }
              if (r != r) {
                for (; i < t.length; ) {
                  if ('number' == typeof (u = t[i]) && u != u) return i;
                  i += 1;
                }
                return -1;
              }
              return t.indexOf(r, i);
            case 'string':
            case 'boolean':
            case 'function':
            case 'undefined':
              return t.indexOf(r, i);
            case 'object':
              if (null === r) return t.indexOf(r, i);
          }
        for (; i < t.length; ) {
          if (Oe(t[i], r)) return i;
          i += 1;
        }
        return -1;
      }
      function _contains(t, r) {
        return _indexOf(r, t, 0) >= 0;
      }
      function _quote(t) {
        return (
          '"' +
          t
            .replace(/\\/g, '\\\\')
            .replace(/[\b]/g, '\\b')
            .replace(/\f/g, '\\f')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t')
            .replace(/\v/g, '\\v')
            .replace(/\0/g, '\\0')
            .replace(/"/g, '\\"') +
          '"'
        );
      }
      var Se = function pad(t) {
          return (t < 10 ? '0' : '') + t;
        },
        ke =
          'function' == typeof Date.prototype.toISOString
            ? function _toISOString(t) {
                return t.toISOString();
              }
            : function _toISOString(t) {
                return (
                  t.getUTCFullYear() +
                  '-' +
                  Se(t.getUTCMonth() + 1) +
                  '-' +
                  Se(t.getUTCDate()) +
                  'T' +
                  Se(t.getUTCHours()) +
                  ':' +
                  Se(t.getUTCMinutes()) +
                  ':' +
                  Se(t.getUTCSeconds()) +
                  '.' +
                  (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
                  'Z'
                );
              };
      function _complement(t) {
        return function() {
          return !t.apply(this, arguments);
        };
      }
      function _filter(t, r) {
        for (var i = 0, a = r.length, u = []; i < a; )
          t(r[i]) && (u[u.length] = r[i]), (i += 1);
        return u;
      }
      function _isObject(t) {
        return '[object Object]' === Object.prototype.toString.call(t);
      }
      var Ee = (function() {
          function XFilter(t, r) {
            (this.xf = r), (this.f = t);
          }
          return (
            (XFilter.prototype['@@transducer/init'] = g.init),
            (XFilter.prototype['@@transducer/result'] = g.result),
            (XFilter.prototype['@@transducer/step'] = function(t, r) {
              return this.f(r) ? this.xf['@@transducer/step'](t, r) : t;
            }),
            XFilter
          );
        })(),
        Ae = _curry2(
          _dispatchable(
            ['filter'],
            _curry2(function _xfilter(t, r) {
              return new Ee(t, r);
            }),
            function(t, r) {
              return _isObject(r)
                ? _reduce(
                    function(i, a) {
                      return t(r[a]) && (i[a] = r[a]), i;
                    },
                    {},
                    I(r)
                  )
                : _filter(t, r);
            }
          )
        ),
        Te = _curry2(function reject(t, r) {
          return Ae(_complement(t), r);
        });
      var Ne = _curry1(function toString(t) {
          return (function _toString(t, r) {
            var i = function recur(i) {
                var a = r.concat([t]);
                return _contains(i, a) ? '<Circular>' : _toString(i, a);
              },
              mapPairs = function(t, r) {
                return _map(function(r) {
                  return _quote(r) + ': ' + i(t[r]);
                }, r.slice().sort());
              };
            switch (Object.prototype.toString.call(t)) {
              case '[object Arguments]':
                return (
                  '(function() { return arguments; }(' +
                  _map(i, t).join(', ') +
                  '))'
                );
              case '[object Array]':
                return (
                  '[' +
                  _map(i, t)
                    .concat(
                      mapPairs(
                        t,
                        Te(function(t) {
                          return /^\d+$/.test(t);
                        }, I(t))
                      )
                    )
                    .join(', ') +
                  ']'
                );
              case '[object Boolean]':
                return 'object' == typeof t
                  ? 'new Boolean(' + i(t.valueOf()) + ')'
                  : t.toString();
              case '[object Date]':
                return (
                  'new Date(' +
                  (isNaN(t.valueOf()) ? i(NaN) : _quote(ke(t))) +
                  ')'
                );
              case '[object Null]':
                return 'null';
              case '[object Number]':
                return 'object' == typeof t
                  ? 'new Number(' + i(t.valueOf()) + ')'
                  : 1 / t == -1 / 0
                  ? '-0'
                  : t.toString(10);
              case '[object String]':
                return 'object' == typeof t
                  ? 'new String(' + i(t.valueOf()) + ')'
                  : _quote(t);
              case '[object Undefined]':
                return 'undefined';
              default:
                if ('function' == typeof t.toString) {
                  var a = t.toString();
                  if ('[object Object]' !== a) return a;
                }
                return '{' + mapPairs(t, I(t)).join(', ') + '}';
            }
          })(t, []);
        }),
        Pe = _curry2(function concat(t, r) {
          if (v(t)) {
            if (v(r)) return t.concat(r);
            throw new TypeError(Ne(r) + ' is not an array');
          }
          if (_isString(t)) {
            if (_isString(r)) return t + r;
            throw new TypeError(Ne(r) + ' is not a string');
          }
          if (null != t && _isFunction(t['fantasy-land/concat']))
            return t['fantasy-land/concat'](r);
          if (null != t && _isFunction(t.concat)) return t.concat(r);
          throw new TypeError(
            Ne(t) +
              ' does not have a method named "concat" or "fantasy-land/concat"'
          );
        }),
        Ce = _curry1(function cond(t) {
          return _arity(
            L(
              _,
              0,
              B(function(t) {
                return t[0].length;
              }, t)
            ),
            function() {
              for (var r = 0; r < t.length; ) {
                if (t[r][0].apply(this, arguments))
                  return t[r][1].apply(this, arguments);
                r += 1;
              }
            }
          );
        }),
        Ie = _curry2(function constructN(t, r) {
          if (t > 10)
            throw new Error('Constructor with greater than ten arguments');
          return 0 === t
            ? function() {
                return new r();
              }
            : se(
                oe(t, function(t, i, a, u, c, l, p, d, y, h) {
                  switch (arguments.length) {
                    case 1:
                      return new r(t);
                    case 2:
                      return new r(t, i);
                    case 3:
                      return new r(t, i, a);
                    case 4:
                      return new r(t, i, a, u);
                    case 5:
                      return new r(t, i, a, u, c);
                    case 6:
                      return new r(t, i, a, u, c, l);
                    case 7:
                      return new r(t, i, a, u, c, l, p);
                    case 8:
                      return new r(t, i, a, u, c, l, p, d);
                    case 9:
                      return new r(t, i, a, u, c, l, p, d, y);
                    case 10:
                      return new r(t, i, a, u, c, l, p, d, y, h);
                  }
                })
              );
        }),
        Be = _curry1(function construct(t) {
          return Ie(t.length, t);
        }),
        Re = _curry2(_contains),
        je = _curry2(function converge(t, r) {
          return d(L(_, 0, M('length', r)), function() {
            var i = arguments,
              a = this;
            return t.apply(
              a,
              _map(function(t) {
                return t.apply(a, i);
              }, r)
            );
          });
        }),
        Me = (function() {
          function XReduceBy(t, r, i, a) {
            (this.valueFn = t),
              (this.valueAcc = r),
              (this.keyFn = i),
              (this.xf = a),
              (this.inputs = {});
          }
          return (
            (XReduceBy.prototype['@@transducer/init'] = g.init),
            (XReduceBy.prototype['@@transducer/result'] = function(t) {
              var r;
              for (r in this.inputs)
                if (
                  _has(r, this.inputs) &&
                  (t = this.xf['@@transducer/step'](t, this.inputs[r]))[
                    '@@transducer/reduced'
                  ]
                ) {
                  t = t['@@transducer/value'];
                  break;
                }
              return (this.inputs = null), this.xf['@@transducer/result'](t);
            }),
            (XReduceBy.prototype['@@transducer/step'] = function(t, r) {
              var i = this.keyFn(r);
              return (
                (this.inputs[i] = this.inputs[i] || [i, this.valueAcc]),
                (this.inputs[i][1] = this.valueFn(this.inputs[i][1], r)),
                t
              );
            }),
            XReduceBy
          );
        })(),
        Le = _curryN(
          4,
          [],
          _dispatchable(
            [],
            _curryN(4, [], function _xreduceBy(t, r, i, a) {
              return new Me(t, r, i, a);
            }),
            function reduceBy(t, r, i, a) {
              return _reduce(
                function(a, u) {
                  var c = i(u);
                  return (a[c] = t(_has(c, a) ? a[c] : r, u)), a;
                },
                {},
                a
              );
            }
          )
        ),
        De = Le(function(t, r) {
          return t + 1;
        }, 0),
        Fe = p(-1),
        Ue = _curry2(function defaultTo(t, r) {
          return null == r || r != r ? t : r;
        }),
        qe = _curry3(function descend(t, r, i) {
          var a = t(r),
            u = t(i);
          return a > u ? -1 : a < u ? 1 : 0;
        }),
        Ge = _curry2(function difference(t, r) {
          for (var i = [], a = 0, u = t.length; a < u; )
            _contains(t[a], r) || _contains(t[a], i) || (i[i.length] = t[a]),
              (a += 1);
          return i;
        }),
        We = _curry3(function differenceWith(t, r, i) {
          for (var a = [], u = 0, c = r.length; u < c; )
            _containsWith(t, r[u], i) ||
              _containsWith(t, r[u], a) ||
              a.push(r[u]),
              (u += 1);
          return a;
        }),
        Ve = _curry2(function dissoc(t, r) {
          var i = {};
          for (var a in r) i[a] = r[a];
          return delete i[t], i;
        }),
        ze = _curry3(function remove(t, r, i) {
          var a = Array.prototype.slice.call(i, 0);
          return a.splice(t, r), a;
        }),
        Xe = _curry3(function update(t, r, i) {
          return h(a(r), t, i);
        }),
        $e = _curry2(function dissocPath(t, r) {
          switch (t.length) {
            case 0:
              return r;
            case 1:
              return te(t[0]) ? ze(t[0], 1, r) : Ve(t[0], r);
            default:
              var i = t[0],
                a = Array.prototype.slice.call(t, 1);
              return null == r[i]
                ? r
                : te(t[0])
                ? Xe(i, dissocPath(a, r[i]), r)
                : ee(i, dissocPath(a, r[i]), r);
          }
        }),
        He = _curry2(function divide(t, r) {
          return t / r;
        }),
        Ye = (function() {
          function XDrop(t, r) {
            (this.xf = r), (this.n = t);
          }
          return (
            (XDrop.prototype['@@transducer/init'] = g.init),
            (XDrop.prototype['@@transducer/result'] = g.result),
            (XDrop.prototype['@@transducer/step'] = function(t, r) {
              return this.n > 0
                ? ((this.n -= 1), t)
                : this.xf['@@transducer/step'](t, r);
            }),
            XDrop
          );
        })(),
        Ke = _curry2(
          _dispatchable(
            ['drop'],
            _curry2(function _xdrop(t, r) {
              return new Ye(t, r);
            }),
            function drop(t, r) {
              return be(Math.max(0, t), 1 / 0, r);
            }
          )
        ),
        Qe = (function() {
          function XTake(t, r) {
            (this.xf = r), (this.n = t), (this.i = 0);
          }
          return (
            (XTake.prototype['@@transducer/init'] = g.init),
            (XTake.prototype['@@transducer/result'] = g.result),
            (XTake.prototype['@@transducer/step'] = function(t, r) {
              this.i += 1;
              var i = 0 === this.n ? t : this.xf['@@transducer/step'](t, r);
              return this.n >= 0 && this.i >= this.n ? _reduced(i) : i;
            }),
            XTake
          );
        })(),
        Je = _curry2(
          _dispatchable(
            ['take'],
            _curry2(function _xtake(t, r) {
              return new Qe(t, r);
            }),
            function take(t, r) {
              return be(0, t < 0 ? 1 / 0 : t, r);
            }
          )
        );
      function dropLast(t, r) {
        return Je(t < r.length ? r.length - t : 0, r);
      }
      var Ze = (function() {
          function XDropLast(t, r) {
            (this.xf = r),
              (this.pos = 0),
              (this.full = !1),
              (this.acc = new Array(t));
          }
          return (
            (XDropLast.prototype['@@transducer/init'] = g.init),
            (XDropLast.prototype['@@transducer/result'] = function(t) {
              return (this.acc = null), this.xf['@@transducer/result'](t);
            }),
            (XDropLast.prototype['@@transducer/step'] = function(t, r) {
              return (
                this.full &&
                  (t = this.xf['@@transducer/step'](t, this.acc[this.pos])),
                this.store(r),
                t
              );
            }),
            (XDropLast.prototype.store = function(t) {
              (this.acc[this.pos] = t),
                (this.pos += 1),
                this.pos === this.acc.length &&
                  ((this.pos = 0), (this.full = !0));
            }),
            XDropLast
          );
        })(),
        et = _curry2(
          _dispatchable(
            [],
            _curry2(function _xdropLast(t, r) {
              return new Ze(t, r);
            }),
            dropLast
          )
        );
      function dropLastWhile(t, r) {
        for (var i = r.length - 1; i >= 0 && t(r[i]); ) i -= 1;
        return be(0, i + 1, r);
      }
      var tt = (function() {
          function XDropLastWhile(t, r) {
            (this.f = t), (this.retained = []), (this.xf = r);
          }
          return (
            (XDropLastWhile.prototype['@@transducer/init'] = g.init),
            (XDropLastWhile.prototype['@@transducer/result'] = function(t) {
              return (this.retained = null), this.xf['@@transducer/result'](t);
            }),
            (XDropLastWhile.prototype['@@transducer/step'] = function(t, r) {
              return this.f(r) ? this.retain(t, r) : this.flush(t, r);
            }),
            (XDropLastWhile.prototype.flush = function(t, r) {
              return (
                (t = _reduce(this.xf['@@transducer/step'], t, this.retained)),
                (this.retained = []),
                this.xf['@@transducer/step'](t, r)
              );
            }),
            (XDropLastWhile.prototype.retain = function(t, r) {
              return this.retained.push(r), t;
            }),
            XDropLastWhile
          );
        })(),
        rt = _curry2(
          _dispatchable(
            [],
            _curry2(function _xdropLastWhile(t, r) {
              return new tt(t, r);
            }),
            dropLastWhile
          )
        ),
        nt = (function() {
          function XDropRepeatsWith(t, r) {
            (this.xf = r),
              (this.pred = t),
              (this.lastValue = void 0),
              (this.seenFirstValue = !1);
          }
          return (
            (XDropRepeatsWith.prototype['@@transducer/init'] = g.init),
            (XDropRepeatsWith.prototype['@@transducer/result'] = g.result),
            (XDropRepeatsWith.prototype['@@transducer/step'] = function(t, r) {
              var i = !1;
              return (
                this.seenFirstValue
                  ? this.pred(this.lastValue, r) && (i = !0)
                  : (this.seenFirstValue = !0),
                (this.lastValue = r),
                i ? t : this.xf['@@transducer/step'](t, r)
              );
            }),
            XDropRepeatsWith
          );
        })(),
        ot = _curry2(function _xdropRepeatsWith(t, r) {
          return new nt(t, r);
        }),
        it = _curry2(function nth(t, r) {
          var i = t < 0 ? r.length + t : t;
          return _isString(r) ? r.charAt(i) : r[i];
        }),
        at = it(-1),
        ut = _curry2(
          _dispatchable([], ot, function dropRepeatsWith(t, r) {
            var i = [],
              a = 1,
              u = r.length;
            if (0 !== u)
              for (i[0] = r[0]; a < u; )
                t(at(i), r[a]) || (i[i.length] = r[a]), (a += 1);
            return i;
          })
        ),
        ct = _curry1(_dispatchable([], ot(Oe), ut(Oe))),
        st = (function() {
          function XDropWhile(t, r) {
            (this.xf = r), (this.f = t);
          }
          return (
            (XDropWhile.prototype['@@transducer/init'] = g.init),
            (XDropWhile.prototype['@@transducer/result'] = g.result),
            (XDropWhile.prototype['@@transducer/step'] = function(t, r) {
              if (this.f) {
                if (this.f(r)) return t;
                this.f = null;
              }
              return this.xf['@@transducer/step'](t, r);
            }),
            XDropWhile
          );
        })(),
        ft = _curry2(
          _dispatchable(
            ['dropWhile'],
            _curry2(function _xdropWhile(t, r) {
              return new st(t, r);
            }),
            function dropWhile(t, r) {
              for (var i = 0, a = r.length; i < a && t(r[i]); ) i += 1;
              return be(i, 1 / 0, r);
            }
          )
        ),
        pt = _curry2(function or(t, r) {
          return t || r;
        }),
        dt = _curry2(function either(t, r) {
          return _isFunction(t)
            ? function _either() {
                return t.apply(this, arguments) || r.apply(this, arguments);
              }
            : ue(pt)(t, r);
        }),
        yt = _curry1(function empty(t) {
          return null != t && 'function' == typeof t['fantasy-land/empty']
            ? t['fantasy-land/empty']()
            : null != t &&
              null != t.constructor &&
              'function' == typeof t.constructor['fantasy-land/empty']
            ? t.constructor['fantasy-land/empty']()
            : null != t && 'function' == typeof t.empty
            ? t.empty()
            : null != t &&
              null != t.constructor &&
              'function' == typeof t.constructor.empty
            ? t.constructor.empty()
            : v(t)
            ? []
            : _isString(t)
            ? ''
            : _isObject(t)
            ? {}
            : internal_isArguments(t)
            ? (function() {
                return arguments;
              })()
            : void 0;
        }),
        ht = _curry2(function takeLast(t, r) {
          return Ke(t >= 0 ? r.length - t : 0, r);
        }),
        vt = _curry2(function(t, r) {
          return Oe(ht(t.length, r), t);
        }),
        mt = _curry3(function eqBy(t, r, i) {
          return Oe(t(r), t(i));
        }),
        bt = _curry3(function eqProps(t, r, i) {
          return Oe(r[t], i[t]);
        }),
        _t = _curry2(function evolve(t, r) {
          var i,
            a,
            u,
            c = {};
          for (a in r)
            (u = typeof (i = t[a])),
              (c[a] =
                'function' === u
                  ? i(r[a])
                  : i && 'object' === u
                  ? evolve(i, r[a])
                  : r[a]);
          return c;
        }),
        wt = (function() {
          function XFind(t, r) {
            (this.xf = r), (this.f = t), (this.found = !1);
          }
          return (
            (XFind.prototype['@@transducer/init'] = g.init),
            (XFind.prototype['@@transducer/result'] = function(t) {
              return (
                this.found || (t = this.xf['@@transducer/step'](t, void 0)),
                this.xf['@@transducer/result'](t)
              );
            }),
            (XFind.prototype['@@transducer/step'] = function(t, r) {
              return (
                this.f(r) &&
                  ((this.found = !0),
                  (t = _reduced(this.xf['@@transducer/step'](t, r)))),
                t
              );
            }),
            XFind
          );
        })(),
        xt = _curry2(
          _dispatchable(
            ['find'],
            _curry2(function _xfind(t, r) {
              return new wt(t, r);
            }),
            function find(t, r) {
              for (var i = 0, a = r.length; i < a; ) {
                if (t(r[i])) return r[i];
                i += 1;
              }
            }
          )
        ),
        Ot = (function() {
          function XFindIndex(t, r) {
            (this.xf = r), (this.f = t), (this.idx = -1), (this.found = !1);
          }
          return (
            (XFindIndex.prototype['@@transducer/init'] = g.init),
            (XFindIndex.prototype['@@transducer/result'] = function(t) {
              return (
                this.found || (t = this.xf['@@transducer/step'](t, -1)),
                this.xf['@@transducer/result'](t)
              );
            }),
            (XFindIndex.prototype['@@transducer/step'] = function(t, r) {
              return (
                (this.idx += 1),
                this.f(r) &&
                  ((this.found = !0),
                  (t = _reduced(this.xf['@@transducer/step'](t, this.idx)))),
                t
              );
            }),
            XFindIndex
          );
        })(),
        St = _curry2(
          _dispatchable(
            [],
            _curry2(function _xfindIndex(t, r) {
              return new Ot(t, r);
            }),
            function findIndex(t, r) {
              for (var i = 0, a = r.length; i < a; ) {
                if (t(r[i])) return i;
                i += 1;
              }
              return -1;
            }
          )
        ),
        kt = (function() {
          function XFindLast(t, r) {
            (this.xf = r), (this.f = t);
          }
          return (
            (XFindLast.prototype['@@transducer/init'] = g.init),
            (XFindLast.prototype['@@transducer/result'] = function(t) {
              return this.xf['@@transducer/result'](
                this.xf['@@transducer/step'](t, this.last)
              );
            }),
            (XFindLast.prototype['@@transducer/step'] = function(t, r) {
              return this.f(r) && (this.last = r), t;
            }),
            XFindLast
          );
        })(),
        Et = _curry2(
          _dispatchable(
            [],
            _curry2(function _xfindLast(t, r) {
              return new kt(t, r);
            }),
            function findLast(t, r) {
              for (var i = r.length - 1; i >= 0; ) {
                if (t(r[i])) return r[i];
                i -= 1;
              }
            }
          )
        ),
        At = (function() {
          function XFindLastIndex(t, r) {
            (this.xf = r), (this.f = t), (this.idx = -1), (this.lastIdx = -1);
          }
          return (
            (XFindLastIndex.prototype['@@transducer/init'] = g.init),
            (XFindLastIndex.prototype['@@transducer/result'] = function(t) {
              return this.xf['@@transducer/result'](
                this.xf['@@transducer/step'](t, this.lastIdx)
              );
            }),
            (XFindLastIndex.prototype['@@transducer/step'] = function(t, r) {
              return (this.idx += 1), this.f(r) && (this.lastIdx = this.idx), t;
            }),
            XFindLastIndex
          );
        })(),
        Tt = _curry2(
          _dispatchable(
            [],
            _curry2(function _xfindLastIndex(t, r) {
              return new At(t, r);
            }),
            function findLastIndex(t, r) {
              for (var i = r.length - 1; i >= 0; ) {
                if (t(r[i])) return i;
                i -= 1;
              }
              return -1;
            }
          )
        ),
        Nt = _curry1(_makeFlat(!0)),
        Pt = _curry1(function flip(t) {
          return d(t.length, function(r, i) {
            var a = Array.prototype.slice.call(arguments, 0);
            return (a[0] = i), (a[1] = r), t.apply(this, a);
          });
        }),
        Ct = _curry2(
          _checkForMethod('forEach', function forEach(t, r) {
            for (var i = r.length, a = 0; a < i; ) t(r[a]), (a += 1);
            return r;
          })
        ),
        It = _curry2(function forEachObjIndexed(t, r) {
          for (var i = I(r), a = 0; a < i.length; ) {
            var u = i[a];
            t(r[u], u, r), (a += 1);
          }
          return r;
        }),
        Bt = _curry1(function fromPairs(t) {
          for (var r = {}, i = 0; i < t.length; )
            (r[t[i][0]] = t[i][1]), (i += 1);
          return r;
        }),
        Rt = _curry2(
          _checkForMethod(
            'groupBy',
            Le(function(t, r) {
              return null == t && (t = []), t.push(r), t;
            }, null)
          )
        ),
        jt = _curry2(function(t, r) {
          for (var i = [], a = 0, u = r.length; a < u; ) {
            for (var c = a + 1; c < u && t(r[c - 1], r[c]); ) c += 1;
            i.push(r.slice(a, c)), (a = c);
          }
          return i;
        }),
        Mt = _curry2(function gt(t, r) {
          return t > r;
        }),
        Lt = _curry2(function gte(t, r) {
          return t >= r;
        }),
        Dt = _curry2(_has),
        Ft = _curry2(function hasIn(t, r) {
          return t in r;
        }),
        Ut = it(0);
      function _identity(t) {
        return t;
      }
      var qt = _curry1(_identity),
        Gt = _curry3(function ifElse(t, r, i) {
          return d(Math.max(t.length, r.length, i.length), function _ifElse() {
            return t.apply(this, arguments)
              ? r.apply(this, arguments)
              : i.apply(this, arguments);
          });
        }),
        Wt = p(1),
        Vt = Le(function(t, r) {
          return r;
        }, null),
        zt = _curry2(function indexOf(t, r) {
          return 'function' != typeof r.indexOf || v(r)
            ? _indexOf(r, t, 0)
            : r.indexOf(t);
        }),
        Xt = be(0, -1),
        $t = _curry3(function innerJoin(t, r, i) {
          return _filter(function(r) {
            return _containsWith(t, r, i);
          }, r);
        }),
        Ht = _curry3(function insert(t, r, i) {
          t = t < i.length && t >= 0 ? t : i.length;
          var a = Array.prototype.slice.call(i, 0);
          return a.splice(t, 0, r), a;
        }),
        Yt = _curry3(function insertAll(t, r, i) {
          return (
            (t = t < i.length && t >= 0 ? t : i.length),
            [].concat(
              Array.prototype.slice.call(i, 0, t),
              r,
              Array.prototype.slice.call(i, t)
            )
          );
        });
      function hasOrAdd(t, r, i) {
        var a,
          u = typeof t;
        switch (u) {
          case 'string':
          case 'number':
            return 0 === t && 1 / t == -1 / 0
              ? !!i._items['-0'] || (r && (i._items['-0'] = !0), !1)
              : null !== i._nativeSet
              ? r
                ? ((a = i._nativeSet.size),
                  i._nativeSet.add(t),
                  i._nativeSet.size === a)
                : i._nativeSet.has(t)
              : u in i._items
              ? t in i._items[u] || (r && (i._items[u][t] = !0), !1)
              : (r && ((i._items[u] = {}), (i._items[u][t] = !0)), !1);
          case 'boolean':
            if (u in i._items) {
              var c = t ? 1 : 0;
              return !!i._items[u][c] || (r && (i._items[u][c] = !0), !1);
            }
            return r && (i._items[u] = t ? [!1, !0] : [!0, !1]), !1;
          case 'function':
            return null !== i._nativeSet
              ? r
                ? ((a = i._nativeSet.size),
                  i._nativeSet.add(t),
                  i._nativeSet.size === a)
                : i._nativeSet.has(t)
              : u in i._items
              ? !!_contains(t, i._items[u]) || (r && i._items[u].push(t), !1)
              : (r && (i._items[u] = [t]), !1);
          case 'undefined':
            return !!i._items[u] || (r && (i._items[u] = !0), !1);
          case 'object':
            if (null === t)
              return !!i._items.null || (r && (i._items.null = !0), !1);
          default:
            return (u = Object.prototype.toString.call(t)) in i._items
              ? !!_contains(t, i._items[u]) || (r && i._items[u].push(t), !1)
              : (r && (i._items[u] = [t]), !1);
        }
      }
      var Kt = (function() {
          function _Set() {
            (this._nativeSet = 'function' == typeof Set ? new Set() : null),
              (this._items = {});
          }
          return (
            (_Set.prototype.add = function(t) {
              return !hasOrAdd(t, !0, this);
            }),
            (_Set.prototype.has = function(t) {
              return hasOrAdd(t, !1, this);
            }),
            _Set
          );
        })(),
        Qt = _curry2(function uniqBy(t, r) {
          for (var i, a, u = new Kt(), c = [], l = 0; l < r.length; )
            (i = t((a = r[l]))), u.add(i) && c.push(a), (l += 1);
          return c;
        }),
        Jt = Qt(qt),
        Zt = _curry2(function intersection(t, r) {
          var i, a;
          return (
            t.length > r.length ? ((i = t), (a = r)) : ((i = r), (a = t)),
            Jt(_filter(Pt(_contains)(i), a))
          );
        }),
        er = _curry2(
          _checkForMethod('intersperse', function intersperse(t, r) {
            for (var i = [], a = 0, u = r.length; a < u; )
              a === u - 1 ? i.push(r[a]) : i.push(r[a], t), (a += 1);
            return i;
          })
        );
      var tr =
          'function' == typeof Object.assign
            ? Object.assign
            : function _objectAssign(t) {
                if (null == t)
                  throw new TypeError(
                    'Cannot convert undefined or null to object'
                  );
                for (var r = Object(t), i = 1, a = arguments.length; i < a; ) {
                  var u = arguments[i];
                  if (null != u) for (var c in u) _has(c, u) && (r[c] = u[c]);
                  i += 1;
                }
                return r;
              },
        rr = _curry2(function objOf(t, r) {
          var i = {};
          return (i[t] = r), i;
        }),
        nr = {
          '@@transducer/init': Array,
          '@@transducer/step': function(t, r) {
            return t.push(r), t;
          },
          '@@transducer/result': _identity
        },
        ir = {
          '@@transducer/init': String,
          '@@transducer/step': function(t, r) {
            return t + r;
          },
          '@@transducer/result': _identity
        },
        ar = {
          '@@transducer/init': Object,
          '@@transducer/step': function(t, r) {
            return tr(t, w(r) ? rr(r[0], r[1]) : r);
          },
          '@@transducer/result': _identity
        };
      var ur = _curry3(function into(t, r, i) {
          return _isTransformer(t)
            ? _reduce(r(t), t['@@transducer/init'](), i)
            : _reduce(
                r(
                  (function _stepCat(t) {
                    if (_isTransformer(t)) return t;
                    if (w(t)) return nr;
                    if ('string' == typeof t) return ir;
                    if ('object' == typeof t) return ar;
                    throw new Error('Cannot create transformer for ' + t);
                  })(t)
                ),
                _clone(t, [], [], !1),
                i
              );
        }),
        cr = _curry1(function invert(t) {
          for (var r = I(t), i = r.length, a = 0, u = {}; a < i; ) {
            var c = r[a],
              l = t[c],
              p = _has(l, u) ? u[l] : (u[l] = []);
            (p[p.length] = c), (a += 1);
          }
          return u;
        }),
        sr = _curry1(function invertObj(t) {
          for (var r = I(t), i = r.length, a = 0, u = {}; a < i; ) {
            var c = r[a];
            (u[t[c]] = c), (a += 1);
          }
          return u;
        }),
        fr = _curry2(function invoker(t, r) {
          return d(t + 1, function() {
            var i = arguments[t];
            if (null != i && _isFunction(i[r]))
              return i[r].apply(i, Array.prototype.slice.call(arguments, 0, t));
            throw new TypeError(
              Ne(i) + ' does not have a method named "' + r + '"'
            );
          });
        }),
        lr = _curry2(function is(t, r) {
          return (null != r && r.constructor === t) || r instanceof t;
        }),
        pr = _curry1(function isEmpty(t) {
          return null != t && Oe(t, yt(t));
        }),
        dr = fr(1, 'join'),
        yr = _curry1(function juxt(t) {
          return je(function() {
            return Array.prototype.slice.call(arguments, 0);
          }, t);
        }),
        hr = _curry1(function keysIn(t) {
          var r,
            i = [];
          for (r in t) i[i.length] = r;
          return i;
        }),
        vr = _curry2(function lastIndexOf(t, r) {
          if ('function' != typeof r.lastIndexOf || v(r)) {
            for (var i = r.length - 1; i >= 0; ) {
              if (Oe(r[i], t)) return i;
              i -= 1;
            }
            return -1;
          }
          return r.lastIndexOf(t);
        });
      function _isNumber(t) {
        return '[object Number]' === Object.prototype.toString.call(t);
      }
      var gr = _curry1(function length(t) {
          return null != t && _isNumber(t.length) ? t.length : NaN;
        }),
        mr = _curry2(function lens(t, r) {
          return function(i) {
            return function(a) {
              return B(function(t) {
                return r(t, a);
              }, i(t(a)));
            };
          };
        }),
        br = _curry1(function lensIndex(t) {
          return mr(it(t), Xe(t));
        }),
        _r = _curry1(function lensPath(t) {
          return mr(R(t), ne(t));
        }),
        wr = _curry1(function lensProp(t) {
          return mr(j(t), ee(t));
        }),
        xr = _curry2(function lt(t, r) {
          return t < r;
        }),
        Or = _curry2(function lte(t, r) {
          return t <= r;
        }),
        Sr = _curry3(function mapAccum(t, r, i) {
          for (var a = 0, u = i.length, c = [], l = [r]; a < u; )
            (l = t(l[0], i[a])), (c[a] = l[1]), (a += 1);
          return [l[0], c];
        }),
        kr = _curry3(function mapAccumRight(t, r, i) {
          for (var a = i.length - 1, u = [], c = [r]; a >= 0; )
            (c = t(i[a], c[0])), (u[a] = c[1]), (a -= 1);
          return [u, c[0]];
        }),
        Er = _curry2(function mapObjIndexed(t, r) {
          return _reduce(
            function(i, a) {
              return (i[a] = t(r[a], a, r)), i;
            },
            {},
            I(r)
          );
        }),
        Ar = _curry2(function match(t, r) {
          return r.match(t) || [];
        }),
        Tr = _curry2(function mathMod(t, r) {
          return te(t) ? (!te(r) || r < 1 ? NaN : ((t % r) + r) % r) : NaN;
        }),
        Nr = _curry3(function maxBy(t, r, i) {
          return t(i) > t(r) ? i : r;
        }),
        Pr = L(p, 0),
        Cr = _curry1(function mean(t) {
          return Pr(t) / t.length;
        }),
        Ir = _curry1(function median(t) {
          var r = t.length;
          if (0 === r) return NaN;
          var i = 2 - (r % 2),
            a = (r - i) / 2;
          return Cr(
            Array.prototype.slice
              .call(t, 0)
              .sort(function(t, r) {
                return t < r ? -1 : t > r ? 1 : 0;
              })
              .slice(a, a + i)
          );
        }),
        Br = _curry2(function memoizeWith(t, r) {
          var i = {};
          return _arity(r.length, function() {
            var a = t.apply(this, arguments);
            return _has(a, i) || (i[a] = r.apply(this, arguments)), i[a];
          });
        }),
        Rr = Br(function() {
          return Ne(arguments);
        }),
        jr = _curry2(function merge(t, r) {
          return tr({}, t, r);
        }),
        Mr = _curry1(function mergeAll(t) {
          return tr.apply(null, [{}].concat(t));
        }),
        Lr = _curry3(function mergeWithKey(t, r, i) {
          var a,
            u = {};
          for (a in r)
            _has(a, r) && (u[a] = _has(a, i) ? t(a, r[a], i[a]) : r[a]);
          for (a in i) _has(a, i) && !_has(a, u) && (u[a] = i[a]);
          return u;
        }),
        Dr = _curry3(function mergeDeepWithKey(t, r, i) {
          return Lr(
            function(r, i, a) {
              return _isObject(i) && _isObject(a)
                ? mergeDeepWithKey(t, i, a)
                : t(r, i, a);
            },
            r,
            i
          );
        }),
        Fr = _curry2(function mergeDeepLeft(t, r) {
          return Dr(
            function(t, r, i) {
              return r;
            },
            t,
            r
          );
        }),
        Ur = _curry2(function mergeDeepRight(t, r) {
          return Dr(
            function(t, r, i) {
              return i;
            },
            t,
            r
          );
        }),
        qr = _curry3(function mergeDeepWith(t, r, i) {
          return Dr(
            function(r, i, a) {
              return t(i, a);
            },
            r,
            i
          );
        }),
        Gr = _curry3(function mergeWith(t, r, i) {
          return Lr(
            function(r, i, a) {
              return t(i, a);
            },
            r,
            i
          );
        }),
        Wr = _curry2(function min(t, r) {
          return r < t ? r : t;
        }),
        Vr = _curry3(function minBy(t, r, i) {
          return t(i) < t(r) ? i : r;
        }),
        zr = _curry2(function modulo(t, r) {
          return t % r;
        }),
        Xr = _curry2(function multiply(t, r) {
          return t * r;
        }),
        $r = _curry1(function negate(t) {
          return -t;
        }),
        Hr = _curry2(_complement(_dispatchable(['any'], G, W))),
        Yr = _curry1(function nthArg(t) {
          return d(t < 0 ? 1 : t + 1, function() {
            return it(t, arguments);
          });
        }),
        Kr = _curry3(function o(t, r, i) {
          return t(r(i));
        });
      function _of(t) {
        return [t];
      }
      var Qr = _curry1(_of),
        Jr = _curry2(function omit(t, r) {
          for (var i = {}, a = {}, u = 0, c = t.length; u < c; )
            (a[t[u]] = 1), (u += 1);
          for (var l in r) a.hasOwnProperty(l) || (i[l] = r[l]);
          return i;
        }),
        Zr = _curry1(function once(t) {
          var r,
            i = !1;
          return _arity(t.length, function() {
            return i ? r : ((i = !0), (r = t.apply(this, arguments)));
          });
        }),
        Identity = function(t) {
          return {
            value: t,
            map: function(r) {
              return Identity(r(t));
            }
          };
        },
        en = _curry3(function over(t, r, i) {
          return t(function(t) {
            return Identity(r(t));
          })(i).value;
        }),
        tn = _curry2(function pair(t, r) {
          return [t, r];
        });
      function _createPartialApplicator(t) {
        return _curry2(function(r, i) {
          return _arity(Math.max(0, r.length - i.length), function() {
            return r.apply(this, t(i, arguments));
          });
        });
      }
      var rn = _createPartialApplicator(_concat),
        nn = _createPartialApplicator(Pt(_concat)),
        on = yr([Ae, Te]),
        an = _curry3(function pathEq(t, r, i) {
          return Oe(R(t, i), r);
        }),
        un = _curry3(function pathOr(t, r, i) {
          return Ue(t, R(r, i));
        }),
        cn = _curry3(function pathSatisfies(t, r, i) {
          return r.length > 0 && t(R(r, i));
        }),
        sn = _curry2(function pick(t, r) {
          for (var i = {}, a = 0; a < t.length; )
            t[a] in r && (i[t[a]] = r[t[a]]), (a += 1);
          return i;
        }),
        ln = _curry2(function pickAll(t, r) {
          for (var i = {}, a = 0, u = t.length; a < u; ) {
            var c = t[a];
            (i[c] = r[c]), (a += 1);
          }
          return i;
        }),
        pn = _curry2(function pickBy(t, r) {
          var i = {};
          for (var a in r) t(r[a], a, r) && (i[a] = r[a]);
          return i;
        });
      function pipeK() {
        if (0 === arguments.length)
          throw new Error('pipeK requires at least one argument');
        return composeK.apply(this, we(arguments));
      }
      var dn = _curry2(function prepend(t, r) {
          return _concat([t], r);
        }),
        yn = L(Xr, 1),
        hn = _curry2(function useWith(t, r) {
          return d(r.length, function() {
            for (var i = [], a = 0; a < r.length; )
              i.push(r[a].call(this, arguments[a])), (a += 1);
            return t.apply(
              this,
              i.concat(Array.prototype.slice.call(arguments, r.length))
            );
          });
        }),
        vn = hn(_map, [ln, qt]),
        gn = _curry3(function propEq(t, r, i) {
          return Oe(r, i[t]);
        }),
        mn = _curry3(function propIs(t, r, i) {
          return lr(t, i[r]);
        }),
        bn = _curry3(function propOr(t, r, i) {
          return null != i && _has(r, i) ? i[r] : t;
        }),
        _n = _curry3(function propSatisfies(t, r, i) {
          return t(i[r]);
        }),
        wn = _curry2(function props(t, r) {
          for (var i = t.length, a = [], u = 0; u < i; )
            (a[u] = r[t[u]]), (u += 1);
          return a;
        }),
        xn = _curry2(function range(t, r) {
          if (!_isNumber(t) || !_isNumber(r))
            throw new TypeError('Both arguments to range must be numbers');
          for (var i = [], a = t; a < r; ) i.push(a), (a += 1);
          return i;
        }),
        On = _curry3(function reduceRight(t, r, i) {
          for (var a = i.length - 1; a >= 0; ) (r = t(i[a], r)), (a -= 1);
          return r;
        }),
        Sn = _curryN(4, [], function _reduceWhile(t, r, i, a) {
          return _reduce(
            function(i, a) {
              return t(i, a) ? r(i, a) : _reduced(i);
            },
            i,
            a
          );
        }),
        kn = _curry1(_reduced),
        En = _curry2(function times(t, r) {
          var i,
            a = Number(r),
            u = 0;
          if (a < 0 || isNaN(a))
            throw new RangeError('n must be a non-negative number');
          for (i = new Array(a); u < a; ) (i[u] = t(u)), (u += 1);
          return i;
        }),
        An = _curry2(function repeat(t, r) {
          return En(a(t), r);
        }),
        Tn = _curry3(function replace(t, r, i) {
          return i.replace(t, r);
        }),
        Nn = _curry3(function scan(t, r, i) {
          for (var a = 0, u = i.length, c = [r]; a < u; )
            (r = t(r, i[a])), (c[a + 1] = r), (a += 1);
          return c;
        }),
        Pn = _curry2(function sequence(t, r) {
          return 'function' == typeof r.sequence
            ? r.sequence(t)
            : On(
                function(t, r) {
                  return z(B(dn, t), r);
                },
                t([]),
                r
              );
        }),
        Cn = _curry3(function set(t, r, i) {
          return en(t, a(r), i);
        }),
        In = _curry2(function sort(t, r) {
          return Array.prototype.slice.call(r, 0).sort(t);
        }),
        Bn = _curry2(function sortBy(t, r) {
          return Array.prototype.slice.call(r, 0).sort(function(r, i) {
            var a = t(r),
              u = t(i);
            return a < u ? -1 : a > u ? 1 : 0;
          });
        }),
        Rn = _curry2(function sortWith(t, r) {
          return Array.prototype.slice.call(r, 0).sort(function(r, i) {
            for (var a = 0, u = 0; 0 === a && u < t.length; )
              (a = t[u](r, i)), (u += 1);
            return a;
          });
        }),
        jn = fr(1, 'split'),
        Mn = _curry2(function splitAt(t, r) {
          return [be(0, t, r), be(t, gr(r), r)];
        }),
        Ln = _curry2(function splitEvery(t, r) {
          if (t <= 0)
            throw new Error(
              'First argument to splitEvery must be a positive integer'
            );
          for (var i = [], a = 0; a < r.length; ) i.push(be(a, (a += t), r));
          return i;
        }),
        Dn = _curry2(function splitWhen(t, r) {
          for (var i = 0, a = r.length, u = []; i < a && !t(r[i]); )
            u.push(r[i]), (i += 1);
          return [u, Array.prototype.slice.call(r, i)];
        }),
        Fn = _curry2(function(t, r) {
          return Oe(Je(t.length, r), t);
        }),
        Un = _curry2(function subtract(t, r) {
          return Number(t) - Number(r);
        }),
        qn = _curry2(function symmetricDifference(t, r) {
          return Pe(Ge(t, r), Ge(r, t));
        }),
        Gn = _curry3(function symmetricDifferenceWith(t, r, i) {
          return Pe(We(t, r, i), We(t, i, r));
        }),
        Wn = _curry2(function takeLastWhile(t, r) {
          for (var i = r.length - 1; i >= 0 && t(r[i]); ) i -= 1;
          return be(i + 1, 1 / 0, r);
        }),
        Vn = (function() {
          function XTakeWhile(t, r) {
            (this.xf = r), (this.f = t);
          }
          return (
            (XTakeWhile.prototype['@@transducer/init'] = g.init),
            (XTakeWhile.prototype['@@transducer/result'] = g.result),
            (XTakeWhile.prototype['@@transducer/step'] = function(t, r) {
              return this.f(r)
                ? this.xf['@@transducer/step'](t, r)
                : _reduced(t);
            }),
            XTakeWhile
          );
        })(),
        zn = _curry2(
          _dispatchable(
            ['takeWhile'],
            _curry2(function _xtakeWhile(t, r) {
              return new Vn(t, r);
            }),
            function takeWhile(t, r) {
              for (var i = 0, a = r.length; i < a && t(r[i]); ) i += 1;
              return be(0, i, r);
            }
          )
        ),
        Xn = (function() {
          function XTap(t, r) {
            (this.xf = r), (this.f = t);
          }
          return (
            (XTap.prototype['@@transducer/init'] = g.init),
            (XTap.prototype['@@transducer/result'] = g.result),
            (XTap.prototype['@@transducer/step'] = function(t, r) {
              return this.f(r), this.xf['@@transducer/step'](t, r);
            }),
            XTap
          );
        })(),
        $n = _curry2(
          _dispatchable(
            [],
            _curry2(function _xtap(t, r) {
              return new Xn(t, r);
            }),
            function tap(t, r) {
              return t(r), r;
            }
          )
        );
      var Hn = _curry2(function test(t, r) {
          if (
            !(function _isRegExp(t) {
              return '[object RegExp]' === Object.prototype.toString.call(t);
            })(t)
          )
            throw new TypeError(
              '‘test’ requires a value of type RegExp as its first argument; received ' +
                Ne(t)
            );
          return _cloneRegExp(t).test(r);
        }),
        Yn = fr(0, 'toLowerCase'),
        Kn = _curry1(function toPairs(t) {
          var r = [];
          for (var i in t) _has(i, t) && (r[r.length] = [i, t[i]]);
          return r;
        }),
        Qn = _curry1(function toPairsIn(t) {
          var r = [];
          for (var i in t) r[r.length] = [i, t[i]];
          return r;
        }),
        Jn = fr(0, 'toUpperCase'),
        Zn = d(4, function transduce(t, r, i, a) {
          return _reduce(t('function' == typeof r ? _xwrap(r) : r), i, a);
        }),
        eo = _curry1(function transpose(t) {
          for (var r = 0, i = []; r < t.length; ) {
            for (var a = t[r], u = 0; u < a.length; )
              void 0 === i[u] && (i[u] = []), i[u].push(a[u]), (u += 1);
            r += 1;
          }
          return i;
        }),
        to = _curry3(function traverse(t, r, i) {
          return 'function' == typeof i['fantasy-land/traverse']
            ? i['fantasy-land/traverse'](r, t)
            : Pn(t, B(r, i));
        }),
        ro = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff',
        no = _curry1(
          'function' == typeof String.prototype.trim && !ro.trim() && '​'.trim()
            ? function trim(t) {
                return t.trim();
              }
            : function trim(t) {
                var r = new RegExp('^[' + ro + '][' + ro + ']*'),
                  i = new RegExp('[' + ro + '][' + ro + ']*$');
                return t.replace(r, '').replace(i, '');
              }
        ),
        oo = _curry2(function _tryCatch(t, r) {
          return _arity(t.length, function() {
            try {
              return t.apply(this, arguments);
            } catch (t) {
              return r.apply(this, _concat([t], arguments));
            }
          });
        }),
        io = _curry1(function unapply(t) {
          return function() {
            return t(Array.prototype.slice.call(arguments, 0));
          };
        }),
        ao = _curry1(function unary(t) {
          return oe(1, t);
        }),
        uo = _curry2(function uncurryN(t, r) {
          return d(t, function() {
            for (var i, a = 1, u = r, c = 0; a <= t && 'function' == typeof u; )
              (i = a === t ? arguments.length : c + u.length),
                (u = u.apply(
                  this,
                  Array.prototype.slice.call(arguments, c, i)
                )),
                (a += 1),
                (c = i);
            return u;
          });
        }),
        co = _curry2(function unfold(t, r) {
          for (var i = t(r), a = []; i && i.length; )
            (a[a.length] = i[0]), (i = t(i[1]));
          return a;
        }),
        so = _curry2(compose(Jt, _concat)),
        fo = _curry2(function uniqWith(t, r) {
          for (var i, a = 0, u = r.length, c = []; a < u; )
            _containsWith(t, (i = r[a]), c) || (c[c.length] = i), (a += 1);
          return c;
        }),
        lo = _curry3(function unionWith(t, r, i) {
          return fo(t, _concat(r, i));
        }),
        po = _curry3(function unless(t, r, i) {
          return t(i) ? i : r(i);
        }),
        yo = pe(_identity),
        ho = _curry3(function until(t, r, i) {
          for (var a = i; !t(a); ) a = r(a);
          return a;
        }),
        vo = _curry1(function valuesIn(t) {
          var r,
            i = [];
          for (r in t) i[i.length] = t[r];
          return i;
        }),
        Const = function(t) {
          return {
            value: t,
            'fantasy-land/map': function() {
              return this;
            }
          };
        },
        go = _curry2(function view(t, r) {
          return t(Const)(r).value;
        }),
        mo = _curry3(function when(t, r, i) {
          return t(i) ? r(i) : i;
        }),
        bo = _curry2(function where(t, r) {
          for (var i in t) if (_has(i, t) && !t[i](r[i])) return !1;
          return !0;
        }),
        _o = _curry2(function whereEq(t, r) {
          return bo(B(Oe, t), r);
        }),
        wo = _curry2(function(t, r) {
          return Te(Pt(_contains)(t), r);
        }),
        xo = _curry2(function xprod(t, r) {
          for (var i, a = 0, u = t.length, c = r.length, l = []; a < u; ) {
            for (i = 0; i < c; ) (l[l.length] = [t[a], r[i]]), (i += 1);
            a += 1;
          }
          return l;
        }),
        Oo = _curry2(function zip(t, r) {
          for (var i = [], a = 0, u = Math.min(t.length, r.length); a < u; )
            (i[a] = [t[a], r[a]]), (a += 1);
          return i;
        }),
        So = _curry2(function zipObj(t, r) {
          for (var i = 0, a = Math.min(t.length, r.length), u = {}; i < a; )
            (u[t[i]] = r[i]), (i += 1);
          return u;
        }),
        ko = _curry3(function zipWith(t, r, i) {
          for (var a = [], u = 0, c = Math.min(r.length, i.length); u < c; )
            (a[u] = t(r[u], i[u])), (u += 1);
          return a;
        });
    },
    function(t, r, i) {
      t.exports = i(82);
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        Object.defineProperty(r, 'MKR', {
          enumerable: !0,
          get: function get() {
            return l.MKR;
          }
        }),
        Object.defineProperty(r, 'IOU', {
          enumerable: !0,
          get: function get() {
            return l.IOU;
          }
        }),
        (r.default = void 0);
      var u = a(i(24)),
        c = i(80),
        l = i(5),
        p = a(i(136)),
        d = a(i(149)),
        y = a(i(152)),
        h = a(i(154)),
        v = a(i(156)),
        g = a(i(162)),
        m = a(i(181));
      function ownKeys(t, r) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          r &&
            (a = a.filter(function(r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            i.push.apply(i, a);
        }
        return i;
      }
      function _objectSpread(t) {
        for (var r = 1; r < arguments.length; r++) {
          var i = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(i), !0).forEach(function(r) {
                (0, u.default)(t, r, i[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ownKeys(Object(i)).forEach(function(r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(i, r)
                );
              });
        }
        return t;
      }
      var b = {
        addConfig: function addConfig(t, r) {
          var a,
            b,
            _ = r.network,
            w = void 0 === _ ? 'mainnet' : _,
            x = r.staging,
            O = void 0 !== x && x,
            S = { kovan: i(197), mainnet: i(198) };
          try {
            S.testnet = i(199);
          } catch (t) {}
          var k = 'ganache' == w ? 'testnet' : w,
            E =
              ((a = {}),
              (0, u.default)(a, l.ESM, {
                address: (0, c.map)((0, c.prop)('MCD_ESM'), S),
                abi: i(200)
              }),
              (0, u.default)(a, l.END, {
                address: (0, c.map)((0, c.prop)('MCD_END'), S),
                abi: i(201)
              }),
              a),
            A = _objectSpread(
              ((b = {}),
              (0, u.default)(b, l.CHIEF, {
                address: (0, c.map)((0, c.prop)('MCD_ADM'), S),
                abi: i(202)
              }),
              (0, u.default)(b, l.VOTE_PROXY_FACTORY, {
                address: (0, c.map)((0, c.prop)('VOTE_PROXY_FACTORY'), S),
                abi: i(203)
              }),
              (0, u.default)(b, l.POLLING, {
                address: (0, c.map)((0, c.prop)('POLLING'), S),
                abi: i(204)
              }),
              (0, u.default)(b, l.BATCH_POLLING, {
                address: (0, c.map)((0, c.prop)('BATCH_POLLING'), S),
                abi: i(205)
              }),
              (0, u.default)(b, l.PAUSE, {
                address: (0, c.map)((0, c.prop)('PAUSE'), S),
                abi: i(206)
              }),
              b),
              E
            );
          return _objectSpread(
            _objectSpread({}, t),
            {},
            {
              additionalServices: [
                'chief',
                'voteProxy',
                'voteProxyFactory',
                'govPolling',
                'govQueryApi',
                'esm',
                'spell'
              ],
              chief: [p.default],
              voteProxy: [d.default],
              voteProxyFactory: [y.default],
              govPolling: [h.default],
              govQueryApi: [v.default, { staging: O }],
              esm: [g.default],
              spell: [m.default],
              smartContract: { addContracts: A },
              token: {
                erc20: [
                  {
                    currency: l.MKR,
                    symbol: l.MKR.symbol,
                    address: S[k].SAI_GOV ? S[k].SAI_GOV : S[k].GOV
                  },
                  {
                    currency: l.IOU,
                    symbol: l.IOU.symbol,
                    address: S[k].MCD_IOU
                  }
                ]
              }
            }
          );
        }
      };
      r.default = b;
    },
    function(t, r, i) {
      i(84), (t.exports = i(1).Object.assign);
    },
    function(t, r, i) {
      var a = i(6);
      a(a.S + a.F, 'Object', { assign: i(86) });
    },
    function(t, r) {
      t.exports = function(t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t;
      };
    },
    function(t, r, i) {
      var a = i(9),
        u = i(28),
        c = i(41),
        l = i(31),
        p = i(26),
        d = i(56),
        y = Object.assign;
      t.exports =
        !y ||
        i(20)(function() {
          var t = {},
            r = {},
            i = Symbol(),
            a = 'abcdefghijklmnopqrst';
          return (
            (t[i] = 7),
            a.split('').forEach(function(t) {
              r[t] = t;
            }),
            7 != y({}, t)[i] || Object.keys(y({}, r)).join('') != a
          );
        })
          ? function assign(t, r) {
              for (
                var i = p(t), y = arguments.length, h = 1, v = c.f, g = l.f;
                y > h;

              )
                for (
                  var m,
                    b = d(arguments[h++]),
                    _ = v ? u(b).concat(v(b)) : u(b),
                    w = _.length,
                    x = 0;
                  w > x;

                )
                  (m = _[x++]), (a && !g.call(b, m)) || (i[m] = b[m]);
              return i;
            }
          : y;
    },
    function(t, r, i) {
      var a = i(21),
        u = i(57),
        c = i(88);
      t.exports = function(t) {
        return function(r, i, l) {
          var p,
            d = a(r),
            y = u(d.length),
            h = c(l, y);
          if (t && i != i) {
            for (; y > h; ) if ((p = d[h++]) != p) return !0;
          } else
            for (; y > h; h++)
              if ((t || h in d) && d[h] === i) return t || h || 0;
          return !t && -1;
        };
      };
    },
    function(t, r, i) {
      var a = i(37),
        u = Math.max,
        c = Math.min;
      t.exports = function(t, r) {
        return (t = a(t)) < 0 ? u(t + r, 0) : c(t, r);
      };
    },
    function(t, r, i) {
      i(90), (t.exports = i(1).Object.getPrototypeOf);
    },
    function(t, r, i) {
      var a = i(26),
        u = i(59);
      i(91)('getPrototypeOf', function() {
        return function getPrototypeOf(t) {
          return u(a(t));
        };
      });
    },
    function(t, r, i) {
      var a = i(6),
        u = i(1),
        c = i(20);
      t.exports = function(t, r) {
        var i = (u.Object || {})[t] || Object[t],
          l = {};
        (l[t] = r(i)),
          a(
            a.S +
              a.F *
                c(function() {
                  i(1);
                }),
            'Object',
            l
          );
      };
    },
    function(t, r, i) {
      t.exports = { default: i(93), __esModule: !0 };
    },
    function(t, r, i) {
      i(42), i(65), (t.exports = i(45).f('iterator'));
    },
    function(t, r, i) {
      var a = i(37),
        u = i(36);
      t.exports = function(t) {
        return function(r, i) {
          var c,
            l,
            p = String(u(r)),
            d = a(i),
            y = p.length;
          return d < 0 || d >= y
            ? t
              ? ''
              : void 0
            : (c = p.charCodeAt(d)) < 55296 ||
              c > 56319 ||
              d + 1 === y ||
              (l = p.charCodeAt(d + 1)) < 56320 ||
              l > 57343
            ? t
              ? p.charAt(d)
              : c
            : t
            ? p.slice(d, d + 2)
            : l - 56320 + ((c - 55296) << 10) + 65536;
        };
      };
    },
    function(t, r, i) {
      var a = i(43),
        u = i(25),
        c = i(44),
        l = {};
      i(18)(l, i(2)('iterator'), function() {
        return this;
      }),
        (t.exports = function(t, r, i) {
          (t.prototype = a(l, { next: u(1, i) })), c(t, r + ' Iterator');
        });
    },
    function(t, r, i) {
      var a = i(8),
        u = i(12),
        c = i(28);
      t.exports = i(9)
        ? Object.defineProperties
        : function defineProperties(t, r) {
            u(t);
            for (var i, l = c(r), p = l.length, d = 0; p > d; )
              a.f(t, (i = l[d++]), r[i]);
            return t;
          };
    },
    function(t, r, i) {
      var a = i(7).document;
      t.exports = a && a.documentElement;
    },
    function(t, r, i) {
      var a = i(99),
        u = i(100),
        c = i(27),
        l = i(21);
      (t.exports = i(63)(
        Array,
        'Array',
        function(t, r) {
          (this._t = l(t)), (this._i = 0), (this._k = r);
        },
        function() {
          var t = this._t,
            r = this._k,
            i = this._i++;
          return !t || i >= t.length
            ? ((this._t = void 0), u(1))
            : u(0, 'keys' == r ? i : 'values' == r ? t[i] : [i, t[i]]);
        },
        'values'
      )),
        (c.Arguments = c.Array),
        a('keys'),
        a('values'),
        a('entries');
    },
    function(t, r) {
      t.exports = function() {};
    },
    function(t, r) {
      t.exports = function(t, r) {
        return { value: r, done: !!t };
      };
    },
    function(t, r, i) {
      t.exports = { default: i(102), __esModule: !0 };
    },
    function(t, r, i) {
      i(103), i(108), i(109), i(110), (t.exports = i(1).Symbol);
    },
    function(t, r, i) {
      var a = i(7),
        u = i(13),
        c = i(9),
        l = i(6),
        p = i(64),
        d = i(104).KEY,
        y = i(20),
        h = i(39),
        v = i(44),
        g = i(30),
        m = i(2),
        b = i(45),
        _ = i(46),
        w = i(105),
        x = i(106),
        O = i(12),
        S = i(19),
        k = i(26),
        E = i(21),
        A = i(34),
        T = i(25),
        N = i(43),
        P = i(107),
        C = i(67),
        I = i(41),
        B = i(8),
        R = i(28),
        j = C.f,
        M = B.f,
        L = P.f,
        D = a.Symbol,
        U = a.JSON,
        q = U && U.stringify,
        G = m('_hidden'),
        W = m('toPrimitive'),
        V = {}.propertyIsEnumerable,
        z = h('symbol-registry'),
        X = h('symbols'),
        $ = h('op-symbols'),
        H = Object.prototype,
        Y = 'function' == typeof D && !!I.f,
        K = a.QObject,
        Q = !K || !K.prototype || !K.prototype.findChild,
        J =
          c &&
          y(function() {
            return (
              7 !=
              N(
                M({}, 'a', {
                  get: function() {
                    return M(this, 'a', { value: 7 }).a;
                  }
                })
              ).a
            );
          })
            ? function(t, r, i) {
                var a = j(H, r);
                a && delete H[r], M(t, r, i), a && t !== H && M(H, r, a);
              }
            : M,
        wrap = function(t) {
          var r = (X[t] = N(D.prototype));
          return (r._k = t), r;
        },
        Z =
          Y && 'symbol' == typeof D.iterator
            ? function(t) {
                return 'symbol' == typeof t;
              }
            : function(t) {
                return t instanceof D;
              },
        ee = function defineProperty(t, r, i) {
          return (
            t === H && ee($, r, i),
            O(t),
            (r = A(r, !0)),
            O(i),
            u(X, r)
              ? (i.enumerable
                  ? (u(t, G) && t[G][r] && (t[G][r] = !1),
                    (i = N(i, { enumerable: T(0, !1) })))
                  : (u(t, G) || M(t, G, T(1, {})), (t[G][r] = !0)),
                J(t, r, i))
              : M(t, r, i)
          );
        },
        te = function defineProperties(t, r) {
          O(t);
          for (var i, a = w((r = E(r))), u = 0, c = a.length; c > u; )
            ee(t, (i = a[u++]), r[i]);
          return t;
        },
        re = function propertyIsEnumerable(t) {
          var r = V.call(this, (t = A(t, !0)));
          return (
            !(this === H && u(X, t) && !u($, t)) &&
            (!(r || !u(this, t) || !u(X, t) || (u(this, G) && this[G][t])) || r)
          );
        },
        ne = function getOwnPropertyDescriptor(t, r) {
          if (((t = E(t)), (r = A(r, !0)), t !== H || !u(X, r) || u($, r))) {
            var i = j(t, r);
            return (
              !i || !u(X, r) || (u(t, G) && t[G][r]) || (i.enumerable = !0), i
            );
          }
        },
        oe = function getOwnPropertyNames(t) {
          for (var r, i = L(E(t)), a = [], c = 0; i.length > c; )
            u(X, (r = i[c++])) || r == G || r == d || a.push(r);
          return a;
        },
        ie = function getOwnPropertySymbols(t) {
          for (
            var r, i = t === H, a = L(i ? $ : E(t)), c = [], l = 0;
            a.length > l;

          )
            !u(X, (r = a[l++])) || (i && !u(H, r)) || c.push(X[r]);
          return c;
        };
      Y ||
        (p(
          (D = function Symbol() {
            if (this instanceof D)
              throw TypeError('Symbol is not a constructor!');
            var t = g(arguments.length > 0 ? arguments[0] : void 0),
              $set = function(r) {
                this === H && $set.call($, r),
                  u(this, G) && u(this[G], t) && (this[G][t] = !1),
                  J(this, t, T(1, r));
              };
            return c && Q && J(H, t, { configurable: !0, set: $set }), wrap(t);
          }).prototype,
          'toString',
          function toString() {
            return this._k;
          }
        ),
        (C.f = ne),
        (B.f = ee),
        (i(66).f = P.f = oe),
        (i(31).f = re),
        (I.f = ie),
        c && !i(29) && p(H, 'propertyIsEnumerable', re, !0),
        (b.f = function(t) {
          return wrap(m(t));
        })),
        l(l.G + l.W + l.F * !Y, { Symbol: D });
      for (
        var ae = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          ue = 0;
        ae.length > ue;

      )
        m(ae[ue++]);
      for (var ce = R(m.store), se = 0; ce.length > se; ) _(ce[se++]);
      l(l.S + l.F * !Y, 'Symbol', {
        for: function(t) {
          return u(z, (t += '')) ? z[t] : (z[t] = D(t));
        },
        keyFor: function keyFor(t) {
          if (!Z(t)) throw TypeError(t + ' is not a symbol!');
          for (var r in z) if (z[r] === t) return r;
        },
        useSetter: function() {
          Q = !0;
        },
        useSimple: function() {
          Q = !1;
        }
      }),
        l(l.S + l.F * !Y, 'Object', {
          create: function create(t, r) {
            return void 0 === r ? N(t) : te(N(t), r);
          },
          defineProperty: ee,
          defineProperties: te,
          getOwnPropertyDescriptor: ne,
          getOwnPropertyNames: oe,
          getOwnPropertySymbols: ie
        });
      var fe = y(function() {
        I.f(1);
      });
      l(l.S + l.F * fe, 'Object', {
        getOwnPropertySymbols: function getOwnPropertySymbols(t) {
          return I.f(k(t));
        }
      }),
        U &&
          l(
            l.S +
              l.F *
                (!Y ||
                  y(function() {
                    var t = D();
                    return (
                      '[null]' != q([t]) ||
                      '{}' != q({ a: t }) ||
                      '{}' != q(Object(t))
                    );
                  })),
            'JSON',
            {
              stringify: function stringify(t) {
                for (var r, i, a = [t], u = 1; arguments.length > u; )
                  a.push(arguments[u++]);
                if (((i = r = a[1]), (S(r) || void 0 !== t) && !Z(t)))
                  return (
                    x(r) ||
                      (r = function(t, r) {
                        if (
                          ('function' == typeof i && (r = i.call(this, t, r)),
                          !Z(r))
                        )
                          return r;
                      }),
                    (a[1] = r),
                    q.apply(U, a)
                  );
              }
            }
          ),
        D.prototype[W] || i(18)(D.prototype, W, D.prototype.valueOf),
        v(D, 'Symbol'),
        v(Math, 'Math', !0),
        v(a.JSON, 'JSON', !0);
    },
    function(t, r, i) {
      var a = i(30)('meta'),
        u = i(19),
        c = i(13),
        l = i(8).f,
        p = 0,
        d =
          Object.isExtensible ||
          function() {
            return !0;
          },
        y = !i(20)(function() {
          return d(Object.preventExtensions({}));
        }),
        setMeta = function(t) {
          l(t, a, { value: { i: 'O' + ++p, w: {} } });
        },
        h = (t.exports = {
          KEY: a,
          NEED: !1,
          fastKey: function(t, r) {
            if (!u(t))
              return 'symbol' == typeof t
                ? t
                : ('string' == typeof t ? 'S' : 'P') + t;
            if (!c(t, a)) {
              if (!d(t)) return 'F';
              if (!r) return 'E';
              setMeta(t);
            }
            return t[a].i;
          },
          getWeak: function(t, r) {
            if (!c(t, a)) {
              if (!d(t)) return !0;
              if (!r) return !1;
              setMeta(t);
            }
            return t[a].w;
          },
          onFreeze: function(t) {
            return y && h.NEED && d(t) && !c(t, a) && setMeta(t), t;
          }
        });
    },
    function(t, r, i) {
      var a = i(28),
        u = i(41),
        c = i(31);
      t.exports = function(t) {
        var r = a(t),
          i = u.f;
        if (i)
          for (var l, p = i(t), d = c.f, y = 0; p.length > y; )
            d.call(t, (l = p[y++])) && r.push(l);
        return r;
      };
    },
    function(t, r, i) {
      var a = i(35);
      t.exports =
        Array.isArray ||
        function isArray(t) {
          return 'Array' == a(t);
        };
    },
    function(t, r, i) {
      var a = i(21),
        u = i(66).f,
        c = {}.toString,
        l =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function getOwnPropertyNames(t) {
        return l && '[object Window]' == c.call(t)
          ? (function(t) {
              try {
                return u(t);
              } catch (t) {
                return l.slice();
              }
            })(t)
          : u(a(t));
      };
    },
    function(t, r) {},
    function(t, r, i) {
      i(46)('asyncIterator');
    },
    function(t, r, i) {
      i(46)('observable');
    },
    function(t, r, i) {
      t.exports = { default: i(112), __esModule: !0 };
    },
    function(t, r, i) {
      i(113), (t.exports = i(1).Object.setPrototypeOf);
    },
    function(t, r, i) {
      var a = i(6);
      a(a.S, 'Object', { setPrototypeOf: i(114).set });
    },
    function(t, r, i) {
      var a = i(19),
        u = i(12),
        check = function(t, r) {
          if ((u(t), !a(r) && null !== r))
            throw TypeError(r + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(t, r, a) {
                try {
                  (a = i(33)(
                    Function.call,
                    i(67).f(Object.prototype, '__proto__').set,
                    2
                  ))(t, []),
                    (r = !(t instanceof Array));
                } catch (t) {
                  r = !0;
                }
                return function setPrototypeOf(t, i) {
                  return check(t, i), r ? (t.__proto__ = i) : a(t, i), t;
                };
              })({}, !1)
            : void 0),
        check: check
      };
    },
    function(t, r, i) {
      t.exports = { default: i(116), __esModule: !0 };
    },
    function(t, r, i) {
      i(117);
      var a = i(1).Object;
      t.exports = function create(t, r) {
        return a.create(t, r);
      };
    },
    function(t, r, i) {
      var a = i(6);
      a(a.S, 'Object', { create: i(43) });
    },
    function(t, r, i) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.CurrencyRatio = r.Currency = void 0);
      var a = _interopRequireDefault(i(119)),
        u = _interopRequireDefault(i(123)),
        c = _interopRequireDefault(i(52)),
        l = _interopRequireDefault(i(58)),
        p = _interopRequireDefault(i(61)),
        d = _interopRequireDefault(i(68)),
        y = _interopRequireDefault(i(60)),
        h = _interopRequireDefault(i(131)),
        v = _interopRequireDefault(i(135));
      function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function amountToBigNumber(t) {
        if (t instanceof g || 'function' == typeof t.toBigNumber)
          return t.toBigNumber();
        var r = (0, v.default)(t);
        if (r.isNaN()) throw new Error('amount "' + t + '" is not a number');
        return r;
      }
      var g = (r.Currency = (function() {
          function Currency(t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            (0, y.default)(this, Currency),
              'wei' === r && (r = -18),
              'ray' === r && (r = -27),
              'rad' === r && (r = -45),
              (this._amount = r
                ? amountToBigNumber(t).shiftedBy(r)
                : amountToBigNumber(t)),
              (this.symbol = '???');
          }
          return (
            (0, h.default)(Currency, [
              {
                key: 'isEqual',
                value: function isEqual(t) {
                  return this._amount.eq(t._amount) && this.symbol == t.symbol;
                }
              },
              {
                key: 'toString',
                value: function toString() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 2;
                  return this._amount.toFixed(t) + ' ' + this.symbol;
                }
              },
              {
                key: 'toBigNumber',
                value: function toBigNumber() {
                  return this._amount;
                }
              },
              {
                key: 'toNumber',
                value: function toNumber() {
                  return this._amount.toNumber();
                }
              },
              {
                key: 'toFixed',
                value: function toFixed() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return (
                    'wei' === t && (t = 18),
                    'ray' === t && (t = 27),
                    'rad' === t && (t = 45),
                    this._amount
                      .shiftedBy(t)
                      .integerValue(v.default.ROUND_DOWN)
                      .toFixed()
                  );
                }
              },
              {
                key: 'isSameType',
                value: function isSameType(t) {
                  return this.symbol === t.symbol;
                }
              }
            ]),
            Currency
          );
        })()),
        m = (r.CurrencyRatio = (function(t) {
          function CurrencyRatio(t, r, i, a) {
            (0, y.default)(this, CurrencyRatio);
            var u = (0, p.default)(
              this,
              (CurrencyRatio.__proto__ || (0, l.default)(CurrencyRatio)).call(
                this,
                t,
                a
              )
            );
            return (
              (u.numerator = r),
              (u.denominator = i),
              (u.symbol = r.symbol + '/' + i.symbol),
              u
            );
          }
          return (0, d.default)(CurrencyRatio, t), CurrencyRatio;
        })(g));
      function bigNumberFnWrapper(t, r) {
        return function(i) {
          !(function assertValidOperation(t, r, i) {
            if (!i && 0 !== i)
              throw new Error(
                'Invalid operation: ' +
                  r.symbol +
                  ' ' +
                  t +
                  ' with no right operand'
              );
            if (i instanceof g && !r.isSameType(i)) {
              if (i instanceof m)
                switch (t) {
                  case 'times':
                    if (r.isSameType(i.denominator)) return;
                    break;
                  case 'div':
                    if (r.isSameType(i.numerator)) return;
                }
              else
                switch (t) {
                  case 'div':
                    return;
                }
              throw new Error(
                'Invalid operation: ' + r.symbol + ' ' + t + ' ' + i.symbol
              );
            }
          })(t, this, i);
          var a = i instanceof g ? i.toBigNumber() : i,
            u = this.toBigNumber()[t](a);
          return r
            ? u
            : (function bigNumberFnResult(t, r, i, a) {
                if (i instanceof m)
                  switch (t) {
                    case 'times':
                      return new i.numerator(a);
                    case 'div':
                      return new i.denominator(a);
                  }
                return i instanceof g && !r.isSameType(i)
                  ? new m(a, r.constructor, i.constructor)
                  : r instanceof m
                  ? new r.constructor(a, r.numerator, r.denominator, r.shift)
                  : new r.constructor(a);
              })(t, this, i, u);
        };
      }
      (0, c.default)(
        g.prototype,
        [
          ['plus', 'add'],
          ['minus', 'sub'],
          ['times', 'multipliedBy', 'mul'],
          ['div', 'dividedBy'],
          ['shiftedBy']
        ].reduce(function(t, r) {
          var i = (0, u.default)(r),
            c = i[0],
            l = i.slice(1);
          t[c] = bigNumberFnWrapper(c);
          var p = !0,
            d = !1,
            y = void 0;
          try {
            for (
              var h, v = (0, a.default)(l);
              !(p = (h = v.next()).done);
              p = !0
            ) {
              t[h.value] = t[c];
            }
          } catch (t) {
            (d = !0), (y = t);
          } finally {
            try {
              !p && v.return && v.return();
            } finally {
              if (d) throw y;
            }
          }
          return t;
        }, {}),
        [
          ['isLessThan', 'lt'],
          ['isLessThanOrEqualTo', 'lte'],
          ['isGreaterThan', 'gt'],
          ['isGreaterThanOrEqualTo', 'gte'],
          ['eq']
        ].reduce(function(t, r) {
          var i = (0, u.default)(r),
            c = i[0],
            l = i.slice(1);
          t[c] = bigNumberFnWrapper(c, !0);
          var p = !0,
            d = !1,
            y = void 0;
          try {
            for (
              var h, v = (0, a.default)(l);
              !(p = (h = v.next()).done);
              p = !0
            ) {
              t[h.value] = t[c];
            }
          } catch (t) {
            (d = !0), (y = t);
          } finally {
            try {
              !p && v.return && v.return();
            } finally {
              if (d) throw y;
            }
          }
          return t;
        }, {})
      );
    },
    function(t, r, i) {
      t.exports = { default: i(120), __esModule: !0 };
    },
    function(t, r, i) {
      i(65), i(42), (t.exports = i(121));
    },
    function(t, r, i) {
      var a = i(12),
        u = i(69);
      t.exports = i(1).getIterator = function(t) {
        var r = u(t);
        if ('function' != typeof r) throw TypeError(t + ' is not iterable!');
        return a(r.call(t));
      };
    },
    function(t, r, i) {
      var a = i(35),
        u = i(2)('toStringTag'),
        c =
          'Arguments' ==
          a(
            (function() {
              return arguments;
            })()
          );
      t.exports = function(t) {
        var r, i, l;
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (i = (function(t, r) {
              try {
                return t[r];
              } catch (t) {}
            })((r = Object(t)), u))
          ? i
          : c
          ? a(r)
          : 'Object' == (l = a(r)) && 'function' == typeof r.callee
          ? 'Arguments'
          : l;
      };
    },
    function(t, r, i) {
      r.__esModule = !0;
      var a = (function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      })(i(124));
      r.default = function(t) {
        return Array.isArray(t) ? t : (0, a.default)(t);
      };
    },
    function(t, r, i) {
      t.exports = { default: i(125), __esModule: !0 };
    },
    function(t, r, i) {
      i(42), i(126), (t.exports = i(1).Array.from);
    },
    function(t, r, i) {
      var a = i(33),
        u = i(6),
        c = i(26),
        l = i(127),
        p = i(128),
        d = i(57),
        y = i(129),
        h = i(69);
      u(
        u.S +
          u.F *
            !i(130)(function(t) {
              Array.from(t);
            }),
        'Array',
        {
          from: function from(t) {
            var r,
              i,
              u,
              v,
              g = c(t),
              m = 'function' == typeof this ? this : Array,
              b = arguments.length,
              _ = b > 1 ? arguments[1] : void 0,
              w = void 0 !== _,
              x = 0,
              O = h(g);
            if (
              (w && (_ = a(_, b > 2 ? arguments[2] : void 0, 2)),
              null == O || (m == Array && p(O)))
            )
              for (i = new m((r = d(g.length))); r > x; x++)
                y(i, x, w ? _(g[x], x) : g[x]);
            else
              for (v = O.call(g), i = new m(); !(u = v.next()).done; x++)
                y(i, x, w ? l(v, _, [u.value, x], !0) : u.value);
            return (i.length = x), i;
          }
        }
      );
    },
    function(t, r, i) {
      var a = i(12);
      t.exports = function(t, r, i, u) {
        try {
          return u ? r(a(i)[0], i[1]) : r(i);
        } catch (r) {
          var c = t.return;
          throw (void 0 !== c && a(c.call(t)), r);
        }
      };
    },
    function(t, r, i) {
      var a = i(27),
        u = i(2)('iterator'),
        c = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (a.Array === t || c[u] === t);
      };
    },
    function(t, r, i) {
      var a = i(8),
        u = i(25);
      t.exports = function(t, r, i) {
        r in t ? a.f(t, r, u(0, i)) : (t[r] = i);
      };
    },
    function(t, r, i) {
      var a = i(2)('iterator'),
        u = !1;
      try {
        var c = [7][a]();
        (c.return = function() {
          u = !0;
        }),
          Array.from(c, function() {
            throw 2;
          });
      } catch (t) {}
      t.exports = function(t, r) {
        if (!r && !u) return !1;
        var i = !1;
        try {
          var c = [7],
            l = c[a]();
          (l.next = function() {
            return { done: (i = !0) };
          }),
            (c[a] = function() {
              return l;
            }),
            t(c);
        } catch (t) {}
        return i;
      };
    },
    function(t, r, i) {
      r.__esModule = !0;
      var a = (function _interopRequireDefault(t) {
        return t && t.__esModule ? t : { default: t };
      })(i(132));
      r.default = (function() {
        function defineProperties(t, r) {
          for (var i = 0; i < r.length; i++) {
            var u = r[i];
            (u.enumerable = u.enumerable || !1),
              (u.configurable = !0),
              'value' in u && (u.writable = !0),
              (0, a.default)(t, u.key, u);
          }
        }
        return function(t, r, i) {
          return (
            r && defineProperties(t.prototype, r),
            i && defineProperties(t, i),
            t
          );
        };
      })();
    },
    function(t, r, i) {
      t.exports = { default: i(133), __esModule: !0 };
    },
    function(t, r, i) {
      i(134);
      var a = i(1).Object;
      t.exports = function defineProperty(t, r, i) {
        return a.defineProperty(t, r, i);
      };
    },
    function(t, r, i) {
      var a = i(6);
      a(a.S + a.F * !i(9), 'Object', { defineProperty: i(8).f });
    },
    function(t, r, i) {
      var a;
      !(function(u) {
        var c,
          l = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
          d = Math.ceil,
          y = Math.floor,
          h = '[BigNumber Error] ',
          v = h + 'Number primitive has more than 15 significant digits: ',
          g = 1e14,
          m = [
            1,
            10,
            100,
            1e3,
            1e4,
            1e5,
            1e6,
            1e7,
            1e8,
            1e9,
            1e10,
            1e11,
            1e12,
            1e13
          ],
          b = 1e9;
        function bitFloor(t) {
          var r = 0 | t;
          return t > 0 || t === r ? r : r - 1;
        }
        function coeffToString(t) {
          for (var r, i, a = 1, u = t.length, c = t[0] + ''; a < u; ) {
            for (i = 14 - (r = t[a++] + '').length; i--; r = '0' + r);
            c += r;
          }
          for (u = c.length; 48 === c.charCodeAt(--u); );
          return c.slice(0, u + 1 || 1);
        }
        function compare(t, r) {
          var i,
            a,
            u = t.c,
            c = r.c,
            l = t.s,
            p = r.s,
            d = t.e,
            y = r.e;
          if (!l || !p) return null;
          if (((i = u && !u[0]), (a = c && !c[0]), i || a))
            return i ? (a ? 0 : -p) : l;
          if (l != p) return l;
          if (((i = l < 0), (a = d == y), !u || !c))
            return a ? 0 : !u ^ i ? 1 : -1;
          if (!a) return (d > y) ^ i ? 1 : -1;
          for (p = (d = u.length) < (y = c.length) ? d : y, l = 0; l < p; l++)
            if (u[l] != c[l]) return (u[l] > c[l]) ^ i ? 1 : -1;
          return d == y ? 0 : (d > y) ^ i ? 1 : -1;
        }
        function intCheck(t, r, i, a) {
          if (t < r || t > i || t !== y(t))
            throw Error(
              h +
                (a || 'Argument') +
                ('number' == typeof t
                  ? t < r || t > i
                    ? ' out of range: '
                    : ' not an integer: '
                  : ' not a primitive number: ') +
                String(t)
            );
        }
        function isOdd(t) {
          var r = t.c.length - 1;
          return bitFloor(t.e / 14) == r && t.c[r] % 2 != 0;
        }
        function toExponential(t, r) {
          return (
            (t.length > 1 ? t.charAt(0) + '.' + t.slice(1) : t) +
            (r < 0 ? 'e' : 'e+') +
            r
          );
        }
        function toFixedPoint(t, r, i) {
          var a, u;
          if (r < 0) {
            for (u = i + '.'; ++r; u += i);
            t = u + t;
          } else if (++r > (a = t.length)) {
            for (u = i, r -= a; --r; u += i);
            t += u;
          } else r < a && (t = t.slice(0, r) + '.' + t.slice(r));
          return t;
        }
        ((c = (function clone(t) {
          var r,
            i,
            a,
            u,
            c,
            _,
            w,
            x,
            O,
            S = (BigNumber.prototype = {
              constructor: BigNumber,
              toString: null,
              valueOf: null
            }),
            k = new BigNumber(1),
            E = 20,
            A = 4,
            T = -7,
            N = 21,
            P = -1e7,
            C = 1e7,
            I = !1,
            B = 1,
            R = 0,
            j = {
              prefix: '',
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ',',
              decimalSeparator: '.',
              fractionGroupSize: 0,
              fractionGroupSeparator: ' ',
              suffix: ''
            },
            M = '0123456789abcdefghijklmnopqrstuvwxyz';
          function BigNumber(t, r) {
            var u,
              c,
              p,
              d,
              h,
              g,
              m,
              b,
              _ = this;
            if (!(_ instanceof BigNumber)) return new BigNumber(t, r);
            if (null == r) {
              if (t && !0 === t._isBigNumber)
                return (
                  (_.s = t.s),
                  void (!t.c || t.e > C
                    ? (_.c = _.e = null)
                    : t.e < P
                    ? (_.c = [(_.e = 0)])
                    : ((_.e = t.e), (_.c = t.c.slice())))
                );
              if ((g = 'number' == typeof t) && 0 * t == 0) {
                if (((_.s = 1 / t < 0 ? ((t = -t), -1) : 1), t === ~~t)) {
                  for (d = 0, h = t; h >= 10; h /= 10, d++);
                  return void (d > C
                    ? (_.c = _.e = null)
                    : ((_.e = d), (_.c = [t])));
                }
                b = String(t);
              } else {
                if (!l.test((b = String(t)))) return a(_, b, g);
                _.s = 45 == b.charCodeAt(0) ? ((b = b.slice(1)), -1) : 1;
              }
              (d = b.indexOf('.')) > -1 && (b = b.replace('.', '')),
                (h = b.search(/e/i)) > 0
                  ? (d < 0 && (d = h),
                    (d += +b.slice(h + 1)),
                    (b = b.substring(0, h)))
                  : d < 0 && (d = b.length);
            } else {
              if ((intCheck(r, 2, M.length, 'Base'), 10 == r))
                return round((_ = new BigNumber(t)), E + _.e + 1, A);
              if (((b = String(t)), (g = 'number' == typeof t))) {
                if (0 * t != 0) return a(_, b, g, r);
                if (
                  ((_.s = 1 / t < 0 ? ((b = b.slice(1)), -1) : 1),
                  BigNumber.DEBUG && b.replace(/^0\.0*|\./, '').length > 15)
                )
                  throw Error(v + t);
              } else _.s = 45 === b.charCodeAt(0) ? ((b = b.slice(1)), -1) : 1;
              for (u = M.slice(0, r), d = h = 0, m = b.length; h < m; h++)
                if (u.indexOf((c = b.charAt(h))) < 0) {
                  if ('.' == c) {
                    if (h > d) {
                      d = m;
                      continue;
                    }
                  } else if (
                    !p &&
                    ((b == b.toUpperCase() && (b = b.toLowerCase())) ||
                      (b == b.toLowerCase() && (b = b.toUpperCase())))
                  ) {
                    (p = !0), (h = -1), (d = 0);
                    continue;
                  }
                  return a(_, String(t), g, r);
                }
              (g = !1),
                (d = (b = i(b, r, 10, _.s)).indexOf('.')) > -1
                  ? (b = b.replace('.', ''))
                  : (d = b.length);
            }
            for (h = 0; 48 === b.charCodeAt(h); h++);
            for (m = b.length; 48 === b.charCodeAt(--m); );
            if ((b = b.slice(h, ++m))) {
              if (
                ((m -= h),
                g &&
                  BigNumber.DEBUG &&
                  m > 15 &&
                  (t > 9007199254740991 || t !== y(t)))
              )
                throw Error(v + _.s * t);
              if ((d = d - h - 1) > C) _.c = _.e = null;
              else if (d < P) _.c = [(_.e = 0)];
              else {
                if (
                  ((_.e = d),
                  (_.c = []),
                  (h = (d + 1) % 14),
                  d < 0 && (h += 14),
                  h < m)
                ) {
                  for (h && _.c.push(+b.slice(0, h)), m -= 14; h < m; )
                    _.c.push(+b.slice(h, (h += 14)));
                  h = 14 - (b = b.slice(h)).length;
                } else h -= m;
                for (; h--; b += '0');
                _.c.push(+b);
              }
            } else _.c = [(_.e = 0)];
          }
          function format(t, r, i, a) {
            var u, c, l, p, d;
            if ((null == i ? (i = A) : intCheck(i, 0, 8), !t.c))
              return t.toString();
            if (((u = t.c[0]), (l = t.e), null == r))
              (d = coeffToString(t.c)),
                (d =
                  1 == a || (2 == a && (l <= T || l >= N))
                    ? toExponential(d, l)
                    : toFixedPoint(d, l, '0'));
            else if (
              ((c = (t = round(new BigNumber(t), r, i)).e),
              (p = (d = coeffToString(t.c)).length),
              1 == a || (2 == a && (r <= c || c <= T)))
            ) {
              for (; p < r; d += '0', p++);
              d = toExponential(d, c);
            } else if (((r -= l), (d = toFixedPoint(d, c, '0')), c + 1 > p)) {
              if (--r > 0) for (d += '.'; r--; d += '0');
            } else if ((r += c - p) > 0)
              for (c + 1 == p && (d += '.'); r--; d += '0');
            return t.s < 0 && u ? '-' + d : d;
          }
          function maxOrMin(t, r) {
            for (var i, a = 1, u = new BigNumber(t[0]); a < t.length; a++) {
              if (!(i = new BigNumber(t[a])).s) {
                u = i;
                break;
              }
              r.call(u, i) && (u = i);
            }
            return u;
          }
          function normalise(t, r, i) {
            for (var a = 1, u = r.length; !r[--u]; r.pop());
            for (u = r[0]; u >= 10; u /= 10, a++);
            return (
              (i = a + 14 * i - 1) > C
                ? (t.c = t.e = null)
                : i < P
                ? (t.c = [(t.e = 0)])
                : ((t.e = i), (t.c = r)),
              t
            );
          }
          function round(t, r, i, a) {
            var u,
              c,
              l,
              p,
              h,
              v,
              b,
              _ = t.c,
              w = m;
            if (_) {
              e: {
                for (u = 1, p = _[0]; p >= 10; p /= 10, u++);
                if ((c = r - u) < 0)
                  (c += 14),
                    (l = r),
                    (b = ((h = _[(v = 0)]) / w[u - l - 1]) % 10 | 0);
                else if ((v = d((c + 1) / 14)) >= _.length) {
                  if (!a) break e;
                  for (; _.length <= v; _.push(0));
                  (h = b = 0), (u = 1), (l = (c %= 14) - 14 + 1);
                } else {
                  for (h = p = _[v], u = 1; p >= 10; p /= 10, u++);
                  b =
                    (l = (c %= 14) - 14 + u) < 0
                      ? 0
                      : (h / w[u - l - 1]) % 10 | 0;
                }
                if (
                  ((a =
                    a ||
                    r < 0 ||
                    null != _[v + 1] ||
                    (l < 0 ? h : h % w[u - l - 1])),
                  (a =
                    i < 4
                      ? (b || a) && (0 == i || i == (t.s < 0 ? 3 : 2))
                      : b > 5 ||
                        (5 == b &&
                          (4 == i ||
                            a ||
                            (6 == i &&
                              (c > 0 ? (l > 0 ? h / w[u - l] : 0) : _[v - 1]) %
                                10 &
                                1) ||
                            i == (t.s < 0 ? 8 : 7)))),
                  r < 1 || !_[0])
                )
                  return (
                    (_.length = 0),
                    a
                      ? ((r -= t.e + 1),
                        (_[0] = w[(14 - (r % 14)) % 14]),
                        (t.e = -r || 0))
                      : (_[0] = t.e = 0),
                    t
                  );
                if (
                  (0 == c
                    ? ((_.length = v), (p = 1), v--)
                    : ((_.length = v + 1),
                      (p = w[14 - c]),
                      (_[v] = l > 0 ? y((h / w[u - l]) % w[l]) * p : 0)),
                  a)
                )
                  for (;;) {
                    if (0 == v) {
                      for (c = 1, l = _[0]; l >= 10; l /= 10, c++);
                      for (l = _[0] += p, p = 1; l >= 10; l /= 10, p++);
                      c != p && (t.e++, _[0] == g && (_[0] = 1));
                      break;
                    }
                    if (((_[v] += p), _[v] != g)) break;
                    (_[v--] = 0), (p = 1);
                  }
                for (c = _.length; 0 === _[--c]; _.pop());
              }
              t.e > C ? (t.c = t.e = null) : t.e < P && (t.c = [(t.e = 0)]);
            }
            return t;
          }
          function valueOf(t) {
            var r,
              i = t.e;
            return null === i
              ? t.toString()
              : ((r = coeffToString(t.c)),
                (r =
                  i <= T || i >= N
                    ? toExponential(r, i)
                    : toFixedPoint(r, i, '0')),
                t.s < 0 ? '-' + r : r);
          }
          return (
            (BigNumber.clone = clone),
            (BigNumber.ROUND_UP = 0),
            (BigNumber.ROUND_DOWN = 1),
            (BigNumber.ROUND_CEIL = 2),
            (BigNumber.ROUND_FLOOR = 3),
            (BigNumber.ROUND_HALF_UP = 4),
            (BigNumber.ROUND_HALF_DOWN = 5),
            (BigNumber.ROUND_HALF_EVEN = 6),
            (BigNumber.ROUND_HALF_CEIL = 7),
            (BigNumber.ROUND_HALF_FLOOR = 8),
            (BigNumber.EUCLID = 9),
            (BigNumber.config = BigNumber.set = function(t) {
              var r, i;
              if (null != t) {
                if ('object' != typeof t)
                  throw Error(h + 'Object expected: ' + t);
                if (
                  (t.hasOwnProperty((r = 'DECIMAL_PLACES')) &&
                    (intCheck((i = t[r]), 0, b, r), (E = i)),
                  t.hasOwnProperty((r = 'ROUNDING_MODE')) &&
                    (intCheck((i = t[r]), 0, 8, r), (A = i)),
                  t.hasOwnProperty((r = 'EXPONENTIAL_AT')) &&
                    ((i = t[r]) && i.pop
                      ? (intCheck(i[0], -b, 0, r),
                        intCheck(i[1], 0, b, r),
                        (T = i[0]),
                        (N = i[1]))
                      : (intCheck(i, -b, b, r), (T = -(N = i < 0 ? -i : i)))),
                  t.hasOwnProperty((r = 'RANGE')))
                )
                  if ((i = t[r]) && i.pop)
                    intCheck(i[0], -b, -1, r),
                      intCheck(i[1], 1, b, r),
                      (P = i[0]),
                      (C = i[1]);
                  else {
                    if ((intCheck(i, -b, b, r), !i))
                      throw Error(h + r + ' cannot be zero: ' + i);
                    P = -(C = i < 0 ? -i : i);
                  }
                if (t.hasOwnProperty((r = 'CRYPTO'))) {
                  if ((i = t[r]) !== !!i)
                    throw Error(h + r + ' not true or false: ' + i);
                  if (i) {
                    if (
                      'undefined' == typeof crypto ||
                      !crypto ||
                      (!crypto.getRandomValues && !crypto.randomBytes)
                    )
                      throw ((I = !i), Error(h + 'crypto unavailable'));
                    I = i;
                  } else I = i;
                }
                if (
                  (t.hasOwnProperty((r = 'MODULO_MODE')) &&
                    (intCheck((i = t[r]), 0, 9, r), (B = i)),
                  t.hasOwnProperty((r = 'POW_PRECISION')) &&
                    (intCheck((i = t[r]), 0, b, r), (R = i)),
                  t.hasOwnProperty((r = 'FORMAT')))
                ) {
                  if ('object' != typeof (i = t[r]))
                    throw Error(h + r + ' not an object: ' + i);
                  j = i;
                }
                if (t.hasOwnProperty((r = 'ALPHABET'))) {
                  if (
                    'string' != typeof (i = t[r]) ||
                    /^.$|[+-.\s]|(.).*\1/.test(i)
                  )
                    throw Error(h + r + ' invalid: ' + i);
                  M = i;
                }
              }
              return {
                DECIMAL_PLACES: E,
                ROUNDING_MODE: A,
                EXPONENTIAL_AT: [T, N],
                RANGE: [P, C],
                CRYPTO: I,
                MODULO_MODE: B,
                POW_PRECISION: R,
                FORMAT: j,
                ALPHABET: M
              };
            }),
            (BigNumber.isBigNumber = function(t) {
              if (!t || !0 !== t._isBigNumber) return !1;
              if (!BigNumber.DEBUG) return !0;
              var r,
                i,
                a = t.c,
                u = t.e,
                c = t.s;
              e: if ('[object Array]' == {}.toString.call(a)) {
                if ((1 === c || -1 === c) && u >= -b && u <= b && u === y(u)) {
                  if (0 === a[0]) {
                    if (0 === u && 1 === a.length) return !0;
                    break e;
                  }
                  if (
                    ((r = (u + 1) % 14) < 1 && (r += 14),
                    String(a[0]).length == r)
                  ) {
                    for (r = 0; r < a.length; r++)
                      if ((i = a[r]) < 0 || i >= g || i !== y(i)) break e;
                    if (0 !== i) return !0;
                  }
                }
              } else if (
                null === a &&
                null === u &&
                (null === c || 1 === c || -1 === c)
              )
                return !0;
              throw Error(h + 'Invalid BigNumber: ' + t);
            }),
            (BigNumber.maximum = BigNumber.max = function() {
              return maxOrMin(arguments, S.lt);
            }),
            (BigNumber.minimum = BigNumber.min = function() {
              return maxOrMin(arguments, S.gt);
            }),
            (BigNumber.random =
              ((u =
                (9007199254740992 * Math.random()) & 2097151
                  ? function() {
                      return y(9007199254740992 * Math.random());
                    }
                  : function() {
                      return (
                        8388608 * ((1073741824 * Math.random()) | 0) +
                        ((8388608 * Math.random()) | 0)
                      );
                    }),
              function(t) {
                var r,
                  i,
                  a,
                  c,
                  l,
                  p = 0,
                  v = [],
                  g = new BigNumber(k);
                if (
                  (null == t ? (t = E) : intCheck(t, 0, b), (c = d(t / 14)), I)
                )
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((c *= 2)));
                      p < c;

                    )
                      (l = 131072 * r[p] + (r[p + 1] >>> 11)) >= 9e15
                        ? ((i = crypto.getRandomValues(new Uint32Array(2))),
                          (r[p] = i[0]),
                          (r[p + 1] = i[1]))
                        : (v.push(l % 1e14), (p += 2));
                    p = c / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((I = !1), Error(h + 'crypto unavailable'));
                    for (r = crypto.randomBytes((c *= 7)); p < c; )
                      (l =
                        281474976710656 * (31 & r[p]) +
                        1099511627776 * r[p + 1] +
                        4294967296 * r[p + 2] +
                        16777216 * r[p + 3] +
                        (r[p + 4] << 16) +
                        (r[p + 5] << 8) +
                        r[p + 6]) >= 9e15
                        ? crypto.randomBytes(7).copy(r, p)
                        : (v.push(l % 1e14), (p += 7));
                    p = c / 7;
                  }
                if (!I) for (; p < c; ) (l = u()) < 9e15 && (v[p++] = l % 1e14);
                for (
                  t %= 14,
                    (c = v[--p]) &&
                      t &&
                      ((l = m[14 - t]), (v[p] = y(c / l) * l));
                  0 === v[p];
                  v.pop(), p--
                );
                if (p < 0) v = [(a = 0)];
                else {
                  for (a = -1; 0 === v[0]; v.splice(0, 1), a -= 14);
                  for (p = 1, l = v[0]; l >= 10; l /= 10, p++);
                  p < 14 && (a -= 14 - p);
                }
                return (g.e = a), (g.c = v), g;
              })),
            (BigNumber.sum = function() {
              for (
                var t = 1, r = arguments, i = new BigNumber(r[0]);
                t < r.length;

              )
                i = i.plus(r[t++]);
              return i;
            }),
            (i = (function() {
              function toBaseOut(t, r, i, a) {
                for (var u, c, l = [0], p = 0, d = t.length; p < d; ) {
                  for (c = l.length; c--; l[c] *= r);
                  for (
                    l[0] += a.indexOf(t.charAt(p++)), u = 0;
                    u < l.length;
                    u++
                  )
                    l[u] > i - 1 &&
                      (null == l[u + 1] && (l[u + 1] = 0),
                      (l[u + 1] += (l[u] / i) | 0),
                      (l[u] %= i));
                }
                return l.reverse();
              }
              return function(t, i, a, u, c) {
                var l,
                  p,
                  d,
                  y,
                  h,
                  v,
                  g,
                  m,
                  b = t.indexOf('.'),
                  _ = E,
                  w = A;
                for (
                  b >= 0 &&
                    ((y = R),
                    (R = 0),
                    (t = t.replace('.', '')),
                    (v = (m = new BigNumber(i)).pow(t.length - b)),
                    (R = y),
                    (m.c = toBaseOut(
                      toFixedPoint(coeffToString(v.c), v.e, '0'),
                      10,
                      a,
                      '0123456789'
                    )),
                    (m.e = m.c.length)),
                    d = y = (g = toBaseOut(
                      t,
                      i,
                      a,
                      c ? ((l = M), '0123456789') : ((l = '0123456789'), M)
                    )).length;
                  0 == g[--y];
                  g.pop()
                );
                if (!g[0]) return l.charAt(0);
                if (
                  (b < 0
                    ? --d
                    : ((v.c = g),
                      (v.e = d),
                      (v.s = u),
                      (g = (v = r(v, m, _, w, a)).c),
                      (h = v.r),
                      (d = v.e)),
                  (b = g[(p = d + _ + 1)]),
                  (y = a / 2),
                  (h = h || p < 0 || null != g[p + 1]),
                  (h =
                    w < 4
                      ? (null != b || h) && (0 == w || w == (v.s < 0 ? 3 : 2))
                      : b > y ||
                        (b == y &&
                          (4 == w ||
                            h ||
                            (6 == w && 1 & g[p - 1]) ||
                            w == (v.s < 0 ? 8 : 7)))),
                  p < 1 || !g[0])
                )
                  t = h
                    ? toFixedPoint(l.charAt(1), -_, l.charAt(0))
                    : l.charAt(0);
                else {
                  if (((g.length = p), h))
                    for (--a; ++g[--p] > a; )
                      (g[p] = 0), p || (++d, (g = [1].concat(g)));
                  for (y = g.length; !g[--y]; );
                  for (b = 0, t = ''; b <= y; t += l.charAt(g[b++]));
                  t = toFixedPoint(t, d, l.charAt(0));
                }
                return t;
              };
            })()),
            (r = (function() {
              function multiply(t, r, i) {
                var a,
                  u,
                  c,
                  l,
                  p = 0,
                  d = t.length,
                  y = r % 1e7,
                  h = (r / 1e7) | 0;
                for (t = t.slice(); d--; )
                  (p =
                    (((u =
                      y * (c = t[d] % 1e7) +
                      ((a = h * c + (l = (t[d] / 1e7) | 0) * y) % 1e7) * 1e7 +
                      p) /
                      i) |
                      0) +
                    ((a / 1e7) | 0) +
                    h * l),
                    (t[d] = u % i);
                return p && (t = [p].concat(t)), t;
              }
              function compare(t, r, i, a) {
                var u, c;
                if (i != a) c = i > a ? 1 : -1;
                else
                  for (u = c = 0; u < i; u++)
                    if (t[u] != r[u]) {
                      c = t[u] > r[u] ? 1 : -1;
                      break;
                    }
                return c;
              }
              function subtract(t, r, i, a) {
                for (var u = 0; i--; )
                  (t[i] -= u),
                    (u = t[i] < r[i] ? 1 : 0),
                    (t[i] = u * a + t[i] - r[i]);
                for (; !t[0] && t.length > 1; t.splice(0, 1));
              }
              return function(t, r, i, a, u) {
                var c,
                  l,
                  p,
                  d,
                  h,
                  v,
                  m,
                  b,
                  _,
                  w,
                  x,
                  O,
                  S,
                  k,
                  E,
                  A,
                  T,
                  N = t.s == r.s ? 1 : -1,
                  P = t.c,
                  C = r.c;
                if (!(P && P[0] && C && C[0]))
                  return new BigNumber(
                    t.s && r.s && (P ? !C || P[0] != C[0] : C)
                      ? (P && 0 == P[0]) || !C
                        ? 0 * N
                        : N / 0
                      : NaN
                  );
                for (
                  _ = (b = new BigNumber(N)).c = [],
                    N = i + (l = t.e - r.e) + 1,
                    u ||
                      ((u = g),
                      (l = bitFloor(t.e / 14) - bitFloor(r.e / 14)),
                      (N = (N / 14) | 0)),
                    p = 0;
                  C[p] == (P[p] || 0);
                  p++
                );
                if ((C[p] > (P[p] || 0) && l--, N < 0)) _.push(1), (d = !0);
                else {
                  for (
                    k = P.length,
                      A = C.length,
                      p = 0,
                      N += 2,
                      (h = y(u / (C[0] + 1))) > 1 &&
                        ((C = multiply(C, h, u)),
                        (P = multiply(P, h, u)),
                        (A = C.length),
                        (k = P.length)),
                      S = A,
                      x = (w = P.slice(0, A)).length;
                    x < A;
                    w[x++] = 0
                  );
                  (T = C.slice()),
                    (T = [0].concat(T)),
                    (E = C[0]),
                    C[1] >= u / 2 && E++;
                  do {
                    if (((h = 0), (c = compare(C, w, A, x)) < 0)) {
                      if (
                        ((O = w[0]),
                        A != x && (O = O * u + (w[1] || 0)),
                        (h = y(O / E)) > 1)
                      )
                        for (
                          h >= u && (h = u - 1),
                            m = (v = multiply(C, h, u)).length,
                            x = w.length;
                          1 == compare(v, w, m, x);

                        )
                          h--,
                            subtract(v, A < m ? T : C, m, u),
                            (m = v.length),
                            (c = 1);
                      else 0 == h && (c = h = 1), (m = (v = C.slice()).length);
                      if (
                        (m < x && (v = [0].concat(v)),
                        subtract(w, v, x, u),
                        (x = w.length),
                        -1 == c)
                      )
                        for (; compare(C, w, A, x) < 1; )
                          h++, subtract(w, A < x ? T : C, x, u), (x = w.length);
                    } else 0 === c && (h++, (w = [0]));
                    (_[p++] = h),
                      w[0] ? (w[x++] = P[S] || 0) : ((w = [P[S]]), (x = 1));
                  } while ((S++ < k || null != w[0]) && N--);
                  (d = null != w[0]), _[0] || _.splice(0, 1);
                }
                if (u == g) {
                  for (p = 1, N = _[0]; N >= 10; N /= 10, p++);
                  round(b, i + (b.e = p + 14 * l - 1) + 1, a, d);
                } else (b.e = l), (b.r = +d);
                return b;
              };
            })()),
            (c = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
            (_ = /^([^.]+)\.$/),
            (w = /^\.([^.]+)$/),
            (x = /^-?(Infinity|NaN)$/),
            (O = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
            (a = function(t, r, i, a) {
              var u,
                l = i ? r : r.replace(O, '');
              if (x.test(l)) t.s = isNaN(l) ? null : l < 0 ? -1 : 1;
              else {
                if (
                  !i &&
                  ((l = l.replace(c, function(t, r, i) {
                    return (
                      (u =
                        'x' == (i = i.toLowerCase()) ? 16 : 'b' == i ? 2 : 8),
                      a && a != u ? t : r
                    );
                  })),
                  a && ((u = a), (l = l.replace(_, '$1').replace(w, '0.$1'))),
                  r != l)
                )
                  return new BigNumber(l, u);
                if (BigNumber.DEBUG)
                  throw Error(
                    h + 'Not a' + (a ? ' base ' + a : '') + ' number: ' + r
                  );
                t.s = null;
              }
              t.c = t.e = null;
            }),
            (S.absoluteValue = S.abs = function() {
              var t = new BigNumber(this);
              return t.s < 0 && (t.s = 1), t;
            }),
            (S.comparedTo = function(t, r) {
              return compare(this, new BigNumber(t, r));
            }),
            (S.decimalPlaces = S.dp = function(t, r) {
              var i,
                a,
                u,
                c = this;
              if (null != t)
                return (
                  intCheck(t, 0, b),
                  null == r ? (r = A) : intCheck(r, 0, 8),
                  round(new BigNumber(c), t + c.e + 1, r)
                );
              if (!(i = c.c)) return null;
              if (
                ((a = 14 * ((u = i.length - 1) - bitFloor(this.e / 14))),
                (u = i[u]))
              )
                for (; u % 10 == 0; u /= 10, a--);
              return a < 0 && (a = 0), a;
            }),
            (S.dividedBy = S.div = function(t, i) {
              return r(this, new BigNumber(t, i), E, A);
            }),
            (S.dividedToIntegerBy = S.idiv = function(t, i) {
              return r(this, new BigNumber(t, i), 0, 1);
            }),
            (S.exponentiatedBy = S.pow = function(t, r) {
              var i,
                a,
                u,
                c,
                l,
                p,
                v,
                g,
                m = this;
              if ((t = new BigNumber(t)).c && !t.isInteger())
                throw Error(h + 'Exponent not an integer: ' + valueOf(t));
              if (
                (null != r && (r = new BigNumber(r)),
                (l = t.e > 14),
                !m.c ||
                  !m.c[0] ||
                  (1 == m.c[0] && !m.e && 1 == m.c.length) ||
                  !t.c ||
                  !t.c[0])
              )
                return (
                  (g = new BigNumber(
                    Math.pow(+valueOf(m), l ? 2 - isOdd(t) : +valueOf(t))
                  )),
                  r ? g.mod(r) : g
                );
              if (((p = t.s < 0), r)) {
                if (r.c ? !r.c[0] : !r.s) return new BigNumber(NaN);
                (a = !p && m.isInteger() && r.isInteger()) && (m = m.mod(r));
              } else {
                if (
                  t.e > 9 &&
                  (m.e > 0 ||
                    m.e < -1 ||
                    (0 == m.e
                      ? m.c[0] > 1 || (l && m.c[1] >= 24e7)
                      : m.c[0] < 8e13 || (l && m.c[0] <= 9999975e7)))
                )
                  return (
                    (c = m.s < 0 && isOdd(t) ? -0 : 0),
                    m.e > -1 && (c = 1 / c),
                    new BigNumber(p ? 1 / c : c)
                  );
                R && (c = d(R / 14 + 2));
              }
              for (
                l
                  ? ((i = new BigNumber(0.5)), p && (t.s = 1), (v = isOdd(t)))
                  : (v = (u = Math.abs(+valueOf(t))) % 2),
                  g = new BigNumber(k);
                ;

              ) {
                if (v) {
                  if (!(g = g.times(m)).c) break;
                  c ? g.c.length > c && (g.c.length = c) : a && (g = g.mod(r));
                }
                if (u) {
                  if (0 === (u = y(u / 2))) break;
                  v = u % 2;
                } else if ((round((t = t.times(i)), t.e + 1, 1), t.e > 14))
                  v = isOdd(t);
                else {
                  if (0 === (u = +valueOf(t))) break;
                  v = u % 2;
                }
                (m = m.times(m)),
                  c
                    ? m.c && m.c.length > c && (m.c.length = c)
                    : a && (m = m.mod(r));
              }
              return a
                ? g
                : (p && (g = k.div(g)),
                  r ? g.mod(r) : c ? round(g, R, A, void 0) : g);
            }),
            (S.integerValue = function(t) {
              var r = new BigNumber(this);
              return (
                null == t ? (t = A) : intCheck(t, 0, 8), round(r, r.e + 1, t)
              );
            }),
            (S.isEqualTo = S.eq = function(t, r) {
              return 0 === compare(this, new BigNumber(t, r));
            }),
            (S.isFinite = function() {
              return !!this.c;
            }),
            (S.isGreaterThan = S.gt = function(t, r) {
              return compare(this, new BigNumber(t, r)) > 0;
            }),
            (S.isGreaterThanOrEqualTo = S.gte = function(t, r) {
              return 1 === (r = compare(this, new BigNumber(t, r))) || 0 === r;
            }),
            (S.isInteger = function() {
              return !!this.c && bitFloor(this.e / 14) > this.c.length - 2;
            }),
            (S.isLessThan = S.lt = function(t, r) {
              return compare(this, new BigNumber(t, r)) < 0;
            }),
            (S.isLessThanOrEqualTo = S.lte = function(t, r) {
              return -1 === (r = compare(this, new BigNumber(t, r))) || 0 === r;
            }),
            (S.isNaN = function() {
              return !this.s;
            }),
            (S.isNegative = function() {
              return this.s < 0;
            }),
            (S.isPositive = function() {
              return this.s > 0;
            }),
            (S.isZero = function() {
              return !!this.c && 0 == this.c[0];
            }),
            (S.minus = function(t, r) {
              var i,
                a,
                u,
                c,
                l = this,
                p = l.s;
              if (((r = (t = new BigNumber(t, r)).s), !p || !r))
                return new BigNumber(NaN);
              if (p != r) return (t.s = -r), l.plus(t);
              var d = l.e / 14,
                y = t.e / 14,
                h = l.c,
                v = t.c;
              if (!d || !y) {
                if (!h || !v)
                  return h ? ((t.s = -r), t) : new BigNumber(v ? l : NaN);
                if (!h[0] || !v[0])
                  return v[0]
                    ? ((t.s = -r), t)
                    : new BigNumber(h[0] ? l : 3 == A ? -0 : 0);
              }
              if (
                ((d = bitFloor(d)),
                (y = bitFloor(y)),
                (h = h.slice()),
                (p = d - y))
              ) {
                for (
                  (c = p < 0) ? ((p = -p), (u = h)) : ((y = d), (u = v)),
                    u.reverse(),
                    r = p;
                  r--;
                  u.push(0)
                );
                u.reverse();
              } else
                for (
                  a = (c = (p = h.length) < (r = v.length)) ? p : r, p = r = 0;
                  r < a;
                  r++
                )
                  if (h[r] != v[r]) {
                    c = h[r] < v[r];
                    break;
                  }
              if (
                (c && ((u = h), (h = v), (v = u), (t.s = -t.s)),
                (r = (a = v.length) - (i = h.length)) > 0)
              )
                for (; r--; h[i++] = 0);
              for (r = g - 1; a > p; ) {
                if (h[--a] < v[a]) {
                  for (i = a; i && !h[--i]; h[i] = r);
                  --h[i], (h[a] += g);
                }
                h[a] -= v[a];
              }
              for (; 0 == h[0]; h.splice(0, 1), --y);
              return h[0]
                ? normalise(t, h, y)
                : ((t.s = 3 == A ? -1 : 1), (t.c = [(t.e = 0)]), t);
            }),
            (S.modulo = S.mod = function(t, i) {
              var a,
                u,
                c = this;
              return (
                (t = new BigNumber(t, i)),
                !c.c || !t.s || (t.c && !t.c[0])
                  ? new BigNumber(NaN)
                  : !t.c || (c.c && !c.c[0])
                  ? new BigNumber(c)
                  : (9 == B
                      ? ((u = t.s),
                        (t.s = 1),
                        (a = r(c, t, 0, 3)),
                        (t.s = u),
                        (a.s *= u))
                      : (a = r(c, t, 0, B)),
                    (t = c.minus(a.times(t))).c[0] || 1 != B || (t.s = c.s),
                    t)
              );
            }),
            (S.multipliedBy = S.times = function(t, r) {
              var i,
                a,
                u,
                c,
                l,
                p,
                d,
                y,
                h,
                v,
                m,
                b,
                _,
                w,
                x = this,
                O = x.c,
                S = (t = new BigNumber(t, r)).c;
              if (!(O && S && O[0] && S[0]))
                return (
                  !x.s || !t.s || (O && !O[0] && !S) || (S && !S[0] && !O)
                    ? (t.c = t.e = t.s = null)
                    : ((t.s *= x.s),
                      O && S ? ((t.c = [0]), (t.e = 0)) : (t.c = t.e = null)),
                  t
                );
              for (
                a = bitFloor(x.e / 14) + bitFloor(t.e / 14),
                  t.s *= x.s,
                  (d = O.length) < (v = S.length) &&
                    ((_ = O), (O = S), (S = _), (u = d), (d = v), (v = u)),
                  u = d + v,
                  _ = [];
                u--;
                _.push(0)
              );
              for (w = g, 1e7, u = v; --u >= 0; ) {
                for (
                  i = 0, m = S[u] % 1e7, b = (S[u] / 1e7) | 0, c = u + (l = d);
                  c > u;

                )
                  (i =
                    (((y =
                      m * (y = O[--l] % 1e7) +
                      ((p = b * y + (h = (O[l] / 1e7) | 0) * m) % 1e7) * 1e7 +
                      _[c] +
                      i) /
                      w) |
                      0) +
                    ((p / 1e7) | 0) +
                    b * h),
                    (_[c--] = y % w);
                _[c] = i;
              }
              return i ? ++a : _.splice(0, 1), normalise(t, _, a);
            }),
            (S.negated = function() {
              var t = new BigNumber(this);
              return (t.s = -t.s || null), t;
            }),
            (S.plus = function(t, r) {
              var i,
                a = this,
                u = a.s;
              if (((r = (t = new BigNumber(t, r)).s), !u || !r))
                return new BigNumber(NaN);
              if (u != r) return (t.s = -r), a.minus(t);
              var c = a.e / 14,
                l = t.e / 14,
                p = a.c,
                d = t.c;
              if (!c || !l) {
                if (!p || !d) return new BigNumber(u / 0);
                if (!p[0] || !d[0])
                  return d[0] ? t : new BigNumber(p[0] ? a : 0 * u);
              }
              if (
                ((c = bitFloor(c)),
                (l = bitFloor(l)),
                (p = p.slice()),
                (u = c - l))
              ) {
                for (
                  u > 0 ? ((l = c), (i = d)) : ((u = -u), (i = p)), i.reverse();
                  u--;
                  i.push(0)
                );
                i.reverse();
              }
              for (
                (u = p.length) - (r = d.length) < 0 &&
                  ((i = d), (d = p), (p = i), (r = u)),
                  u = 0;
                r;

              )
                (u = ((p[--r] = p[r] + d[r] + u) / g) | 0),
                  (p[r] = g === p[r] ? 0 : p[r] % g);
              return u && ((p = [u].concat(p)), ++l), normalise(t, p, l);
            }),
            (S.precision = S.sd = function(t, r) {
              var i,
                a,
                u,
                c = this;
              if (null != t && t !== !!t)
                return (
                  intCheck(t, 1, b),
                  null == r ? (r = A) : intCheck(r, 0, 8),
                  round(new BigNumber(c), t, r)
                );
              if (!(i = c.c)) return null;
              if (((a = 14 * (u = i.length - 1) + 1), (u = i[u]))) {
                for (; u % 10 == 0; u /= 10, a--);
                for (u = i[0]; u >= 10; u /= 10, a++);
              }
              return t && c.e + 1 > a && (a = c.e + 1), a;
            }),
            (S.shiftedBy = function(t) {
              return (
                intCheck(t, -9007199254740991, 9007199254740991),
                this.times('1e' + t)
              );
            }),
            (S.squareRoot = S.sqrt = function() {
              var t,
                i,
                a,
                u,
                c,
                l = this,
                p = l.c,
                d = l.s,
                y = l.e,
                h = E + 4,
                v = new BigNumber('0.5');
              if (1 !== d || !p || !p[0])
                return new BigNumber(
                  !d || (d < 0 && (!p || p[0])) ? NaN : p ? l : 1 / 0
                );
              if (
                (0 == (d = Math.sqrt(+valueOf(l))) || d == 1 / 0
                  ? (((i = coeffToString(p)).length + y) % 2 == 0 && (i += '0'),
                    (d = Math.sqrt(+i)),
                    (y = bitFloor((y + 1) / 2) - (y < 0 || y % 2)),
                    (a = new BigNumber(
                      (i =
                        d == 1 / 0
                          ? '1e' + y
                          : (i = d.toExponential()).slice(
                              0,
                              i.indexOf('e') + 1
                            ) + y)
                    )))
                  : (a = new BigNumber(d + '')),
                a.c[0])
              )
                for ((d = (y = a.e) + h) < 3 && (d = 0); ; )
                  if (
                    ((c = a),
                    (a = v.times(c.plus(r(l, c, h, 1)))),
                    coeffToString(c.c).slice(0, d) ===
                      (i = coeffToString(a.c)).slice(0, d))
                  ) {
                    if (
                      (a.e < y && --d,
                      '9999' != (i = i.slice(d - 3, d + 1)) &&
                        (u || '4999' != i))
                    ) {
                      (+i && (+i.slice(1) || '5' != i.charAt(0))) ||
                        (round(a, a.e + E + 2, 1), (t = !a.times(a).eq(l)));
                      break;
                    }
                    if (!u && (round(c, c.e + E + 2, 0), c.times(c).eq(l))) {
                      a = c;
                      break;
                    }
                    (h += 4), (d += 4), (u = 1);
                  }
              return round(a, a.e + E + 1, A, t);
            }),
            (S.toExponential = function(t, r) {
              return (
                null != t && (intCheck(t, 0, b), t++), format(this, t, r, 1)
              );
            }),
            (S.toFixed = function(t, r) {
              return (
                null != t && (intCheck(t, 0, b), (t = t + this.e + 1)),
                format(this, t, r)
              );
            }),
            (S.toFormat = function(t, r, i) {
              var a,
                u = this;
              if (null == i)
                null != t && r && 'object' == typeof r
                  ? ((i = r), (r = null))
                  : t && 'object' == typeof t
                  ? ((i = t), (t = r = null))
                  : (i = j);
              else if ('object' != typeof i)
                throw Error(h + 'Argument not an object: ' + i);
              if (((a = u.toFixed(t, r)), u.c)) {
                var c,
                  l = a.split('.'),
                  p = +i.groupSize,
                  d = +i.secondaryGroupSize,
                  y = i.groupSeparator || '',
                  v = l[0],
                  g = l[1],
                  m = u.s < 0,
                  b = m ? v.slice(1) : v,
                  _ = b.length;
                if (
                  (d && ((c = p), (p = d), (d = c), (_ -= c)), p > 0 && _ > 0)
                ) {
                  for (c = _ % p || p, v = b.substr(0, c); c < _; c += p)
                    v += y + b.substr(c, p);
                  d > 0 && (v += y + b.slice(c)), m && (v = '-' + v);
                }
                a = g
                  ? v +
                    (i.decimalSeparator || '') +
                    ((d = +i.fractionGroupSize)
                      ? g.replace(
                          new RegExp('\\d{' + d + '}\\B', 'g'),
                          '$&' + (i.fractionGroupSeparator || '')
                        )
                      : g)
                  : v;
              }
              return (i.prefix || '') + a + (i.suffix || '');
            }),
            (S.toFraction = function(t) {
              var i,
                a,
                u,
                c,
                l,
                p,
                d,
                y,
                v,
                g,
                b,
                _,
                w = this,
                x = w.c;
              if (
                null != t &&
                ((!(d = new BigNumber(t)).isInteger() && (d.c || 1 !== d.s)) ||
                  d.lt(k))
              )
                throw Error(
                  h +
                    'Argument ' +
                    (d.isInteger() ? 'out of range: ' : 'not an integer: ') +
                    valueOf(d)
                );
              if (!x) return new BigNumber(w);
              for (
                i = new BigNumber(k),
                  v = a = new BigNumber(k),
                  u = y = new BigNumber(k),
                  _ = coeffToString(x),
                  l = i.e = _.length - w.e - 1,
                  i.c[0] = m[(p = l % 14) < 0 ? 14 + p : p],
                  t = !t || d.comparedTo(i) > 0 ? (l > 0 ? i : v) : d,
                  p = C,
                  C = 1 / 0,
                  d = new BigNumber(_),
                  y.c[0] = 0;
                (g = r(d, i, 0, 1)),
                  1 != (c = a.plus(g.times(u))).comparedTo(t);

              )
                (a = u),
                  (u = c),
                  (v = y.plus(g.times((c = v)))),
                  (y = c),
                  (i = d.minus(g.times((c = i)))),
                  (d = c);
              return (
                (c = r(t.minus(a), u, 0, 1)),
                (y = y.plus(c.times(v))),
                (a = a.plus(c.times(u))),
                (y.s = v.s = w.s),
                (b =
                  r(v, u, (l *= 2), A)
                    .minus(w)
                    .abs()
                    .comparedTo(
                      r(y, a, l, A)
                        .minus(w)
                        .abs()
                    ) < 1
                    ? [v, u]
                    : [y, a]),
                (C = p),
                b
              );
            }),
            (S.toNumber = function() {
              return +valueOf(this);
            }),
            (S.toPrecision = function(t, r) {
              return null != t && intCheck(t, 1, b), format(this, t, r, 2);
            }),
            (S.toString = function(t) {
              var r,
                a = this,
                u = a.s,
                c = a.e;
              return (
                null === c
                  ? u
                    ? ((r = 'Infinity'), u < 0 && (r = '-' + r))
                    : (r = 'NaN')
                  : (null == t
                      ? (r =
                          c <= T || c >= N
                            ? toExponential(coeffToString(a.c), c)
                            : toFixedPoint(coeffToString(a.c), c, '0'))
                      : 10 === t
                      ? (r = toFixedPoint(
                          coeffToString(
                            (a = round(new BigNumber(a), E + c + 1, A)).c
                          ),
                          a.e,
                          '0'
                        ))
                      : (intCheck(t, 2, M.length, 'Base'),
                        (r = i(
                          toFixedPoint(coeffToString(a.c), c, '0'),
                          10,
                          t,
                          u,
                          !0
                        ))),
                    u < 0 && a.c[0] && (r = '-' + r)),
                r
              );
            }),
            (S.valueOf = S.toJSON = function() {
              return valueOf(this);
            }),
            (S._isBigNumber = !0),
            p &&
              ((S[Symbol.toStringTag] = 'BigNumber'),
              (S[Symbol.for('nodejs.util.inspect.custom')] = S.valueOf)),
            null != t && BigNumber.set(t),
            BigNumber
          );
        })()).default = c.BigNumber = c),
          void 0 ===
            (a = function() {
              return c;
            }.call(r, i, r, t)) || (t.exports = a);
      })();
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(10)),
        c = a(i(22)),
        l = a(i(11)),
        p = a(i(3)),
        d = a(i(4)),
        y = a(i(72)),
        h = a(i(14)),
        v = a(i(15)),
        g = a(i(16)),
        m = a(i(24)),
        b = i(17),
        _ = i(5),
        w = i(23),
        x = i(80);
      function _createForOfIteratorHelper(t, r) {
        var i =
          ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!i) {
          if (
            Array.isArray(t) ||
            (i = (function _unsupportedIterableToArray(t, r) {
              if (!t) return;
              if ('string' == typeof t) return _arrayLikeToArray(t, r);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === i && t.constructor && (i = t.constructor.name);
              if ('Map' === i || 'Set' === i) return Array.from(t);
              if (
                'Arguments' === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              )
                return _arrayLikeToArray(t, r);
            })(t)) ||
            (r && t && 'number' == typeof t.length)
          ) {
            i && (t = i);
            var a = 0,
              u = function F() {};
            return {
              s: u,
              n: function n() {
                return a >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[a++] };
              },
              e: function e(t) {
                throw t;
              },
              f: u
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var c,
          l = !0,
          p = !1;
        return {
          s: function s() {
            i = i.call(t);
          },
          n: function n() {
            var t = i.next();
            return (l = t.done), t;
          },
          e: function e(t) {
            (p = !0), (c = t);
          },
          f: function f() {
            try {
              l || null == i.return || i.return();
            } finally {
              if (p) throw c;
            }
          }
        };
      }
      function _arrayLikeToArray(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var i = 0, a = new Array(r); i < r; i++) a[i] = t[i];
        return a;
      }
      function ownKeys(t, r) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          r &&
            (a = a.filter(function(r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            i.push.apply(i, a);
        }
        return i;
      }
      function _objectSpread(t) {
        for (var r = 1; r < arguments.length; r++) {
          var i = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(i), !0).forEach(function(r) {
                (0, m.default)(t, r, i[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ownKeys(Object(i)).forEach(function(r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(i, r)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var i,
            a = (0, g.default)(t);
          if (r) {
            var u = (0, g.default)(this).constructor;
            i = Reflect.construct(a, arguments, u);
          } else i = a.apply(this, arguments);
          return (0, v.default)(this, i);
        };
      }
      var O = a(i(74)).default.chief,
        S = (function(t) {
          (0, h.default)(ChiefService, t);
          var r,
            i,
            a,
            v = _createSuper(ChiefService);
          function ChiefService() {
            var t,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'chief';
            return (
              (0, p.default)(this, ChiefService),
              (t = v.call(this, r, ['smartContract', 'web3'])),
              (0, m.default)(
                (0, y.default)(t),
                'paddedBytes32ToAddress',
                function(t) {
                  return t.length > 42 ? '0x' + (0, x.takeLast)(40, t) : t;
                }
              ),
              (0, m.default)(
                (0, y.default)(t),
                'parseVoteAddressData',
                function(t) {
                  for (
                    var r = [], i = t.substr(330), a = 0;
                    a < i.length / 64;
                    a++
                  ) {
                    var u = '0x'.concat(i.substring(64 * a + 24, 64 * (a + 1)));
                    42 === u.length && r.push(u);
                  }
                  return r;
                }
              ),
              (0, m.default)(
                (0, y.default)(t),
                'memoizedGetSlateAddresses',
                (0, x.memoizeWith)(x.identity, t.getSlateAddresses)
              ),
              (0, m.default)(
                (0, y.default)(t),
                'getDetailedLockLogs',
                (0, l.default)(
                  u.default.mark(function _callee() {
                    var r, i, a, c, l;
                    return u.default.wrap(function _callee$(u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (
                              (r = t._chiefContract().address),
                              (i = t.get('web3')),
                              (a = i.network),
                              (c = (0, w.netIdToName)(a)),
                              (u.next = 6),
                              i.getPastLogs({
                                fromBlock: O.inception_block[c],
                                toBlock: 'latest',
                                address: r,
                                topics: [O.events.lock]
                              })
                            );
                          case 6:
                            return (
                              (l = u.sent),
                              u.abrupt(
                                'return',
                                l.map(function(r) {
                                  return {
                                    blockNumber: r.blockNumber,
                                    sender: t.paddedBytes32ToAddress(
                                      r.topics[1]
                                    ),
                                    amount: _.MKR.wei(r.topics[2])
                                  };
                                })
                              )
                            );
                          case 8:
                          case 'end':
                            return u.stop();
                        }
                    }, _callee);
                  })
                )
              ),
              (0, m.default)(
                (0, y.default)(t),
                'getDetailedFreeLogs',
                (0, l.default)(
                  u.default.mark(function _callee2() {
                    var r, i, a, c, l;
                    return u.default.wrap(function _callee2$(u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (
                              (r = t._chiefContract().address),
                              (i = t.get('web3')),
                              (a = i.network),
                              (c = (0, w.netIdToName)(a)),
                              (u.next = 6),
                              i.getPastLogs({
                                fromBlock: O.inception_block[c],
                                toBlock: 'latest',
                                address: r,
                                topics: [O.events.free]
                              })
                            );
                          case 6:
                            return (
                              (l = u.sent),
                              u.abrupt(
                                'return',
                                l.map(function(r) {
                                  return {
                                    blockNumber: r.blockNumber,
                                    sender: t.paddedBytes32ToAddress(
                                      r.topics[1]
                                    ),
                                    amount: _.MKR.wei(r.topics[2])
                                  };
                                })
                              )
                            );
                          case 8:
                          case 'end':
                            return u.stop();
                        }
                    }, _callee2);
                  })
                )
              ),
              (0, m.default)(
                (0, y.default)(t),
                'getLockLogs',
                (0, l.default)(
                  u.default.mark(function _callee3() {
                    var r, i, a, c, l;
                    return u.default.wrap(function _callee3$(u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (
                              (r = t._chiefContract().address),
                              (i = t.get('web3')),
                              (a = i.network),
                              (c = (0, w.netIdToName)(a)),
                              (u.next = 6),
                              i.getPastLogs({
                                fromBlock: O.inception_block[c],
                                toBlock: 'latest',
                                address: r,
                                topics: [O.events.lock]
                              })
                            );
                          case 6:
                            return (
                              (l = u.sent),
                              u.abrupt(
                                'return',
                                (0, x.uniq)(
                                  l
                                    .map(function(t) {
                                      return (0, x.nth)(1, t.topics);
                                    })
                                    .map(t.paddedBytes32ToAddress)
                                )
                              )
                            );
                          case 8:
                          case 'end':
                            return u.stop();
                        }
                    }, _callee3);
                  })
                )
              ),
              (0, m.default)(
                (0, y.default)(t),
                'getVoteAddressLogs',
                (0, l.default)(
                  u.default.mark(function _callee4() {
                    var r, i, a, c, l;
                    return u.default.wrap(function _callee4$(u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (
                              (r = t._chiefContract().address),
                              (i = t.get('web3')),
                              (a = i.network),
                              (c = (0, w.netIdToName)(a)),
                              (u.next = 6),
                              i.getPastLogs({
                                fromBlock: O.inception_block[c],
                                toBlock: 'latest',
                                address: r,
                                topics: [O.events.vote_addresses]
                              })
                            );
                          case 6:
                            return (
                              (l = u.sent),
                              u.abrupt(
                                'return',
                                l.map(function(r) {
                                  return {
                                    blockNumber: r.blockNumber,
                                    sender: t.paddedBytes32ToAddress(
                                      r.topics[1]
                                    ),
                                    candidates: t.parseVoteAddressData(r.data)
                                  };
                                })
                              )
                            );
                          case 8:
                          case 'end':
                            return u.stop();
                        }
                    }, _callee4);
                  })
                )
              ),
              (0, m.default)(
                (0, y.default)(t),
                'getVoteSlateLogs',
                (0, l.default)(
                  u.default.mark(function _callee5() {
                    var r, i, a, c, l;
                    return u.default.wrap(function _callee5$(u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (
                              (r = t._chiefContract().address),
                              (i = t.get('web3')),
                              (a = i.network),
                              (c = (0, w.netIdToName)(a)),
                              (u.next = 6),
                              i.getPastLogs({
                                fromBlock: O.inception_block[c],
                                toBlock: 'latest',
                                address: r,
                                topics: [O.events.vote_slate]
                              })
                            );
                          case 6:
                            return (
                              (l = u.sent),
                              u.abrupt(
                                'return',
                                l.map(function(r) {
                                  return {
                                    blockNumber: r.blockNumber,
                                    sender: t.paddedBytes32ToAddress(
                                      r.topics[1]
                                    ),
                                    slate: r.topics[2]
                                  };
                                })
                              )
                            );
                          case 8:
                          case 'end':
                            return u.stop();
                        }
                    }, _callee5);
                  })
                )
              ),
              t
            );
          }
          return (
            (0, d.default)(ChiefService, [
              {
                key: 'etch',
                value: function etch(t) {
                  return this._chiefContract().etch(t);
                }
              },
              {
                key: 'lift',
                value: function lift(t) {
                  return this._chiefContract().lift(t);
                }
              },
              {
                key: 'vote',
                value: function vote(t) {
                  return Array.isArray(t)
                    ? this._chiefContract()['vote(address[])'](t)
                    : this._chiefContract()['vote(bytes32)'](t);
                }
              },
              {
                key: 'lock',
                value: function lock(t) {
                  var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : _.MKR,
                    i = (0, w.getCurrency)(t, r).toFixed('wei');
                  return this._chiefContract().lock(i);
                }
              },
              {
                key: 'free',
                value: function free(t) {
                  var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : _.MKR,
                    i = (0, w.getCurrency)(t, r).toFixed('wei');
                  return this._chiefContract().free(i);
                }
              },
              {
                key: 'getVoteTally',
                value:
                  ((a = (0, l.default)(
                    u.default.mark(function _callee6() {
                      var t,
                        r,
                        i,
                        a,
                        l,
                        p,
                        d,
                        y,
                        h,
                        v,
                        g,
                        m,
                        b,
                        _,
                        w = this;
                      return u.default.wrap(
                        function _callee6$(u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                return (u.next = 2), this.getLockLogs();
                              case 2:
                                return (
                                  (t = u.sent),
                                  (u.next = 5),
                                  Promise.all(
                                    t.map(function(t) {
                                      return w
                                        .getNumDeposits(t)
                                        .then(function(r) {
                                          return {
                                            address: t,
                                            deposits: parseFloat(r)
                                          };
                                        });
                                    })
                                  )
                                );
                              case 5:
                                return (
                                  (r = u.sent),
                                  (u.next = 8),
                                  Promise.all(
                                    r.map(function(t) {
                                      return w
                                        .getVotedSlate(t.address)
                                        .then(function(r) {
                                          return _objectSpread(
                                            _objectSpread({}, t),
                                            {},
                                            { slate: r }
                                          );
                                        });
                                    })
                                  )
                                );
                              case 8:
                                return (
                                  (i = u.sent),
                                  (u.next = 11),
                                  Promise.all(
                                    i.map(function(t) {
                                      return w
                                        .memoizedGetSlateAddresses(t.slate)
                                        .then(function(r) {
                                          return _objectSpread(
                                            _objectSpread({}, t),
                                            {},
                                            { votes: r }
                                          );
                                        });
                                    })
                                  )
                                );
                              case 11:
                                (a = u.sent),
                                  (l = {}),
                                  (p = _createForOfIteratorHelper(a));
                                try {
                                  for (p.s(); !(d = p.n()).done; ) {
                                    (y = d.value),
                                      (h = _createForOfIteratorHelper(y.votes));
                                    try {
                                      for (h.s(); !(v = h.n()).done; )
                                        (g = (g = v.value).toLowerCase()),
                                          void 0 === l[g]
                                            ? (l[g] = {
                                                approvals: y.deposits,
                                                addresses: [
                                                  {
                                                    address: y.address,
                                                    deposits: y.deposits
                                                  }
                                                ]
                                              })
                                            : ((l[g].approvals += y.deposits),
                                              l[g].addresses.push({
                                                address: y.address,
                                                deposits: y.deposits
                                              }));
                                    } catch (t) {
                                      h.e(t);
                                    } finally {
                                      h.f();
                                    }
                                  }
                                } catch (t) {
                                  p.e(t);
                                } finally {
                                  p.f();
                                }
                                for (
                                  m = function _loop() {
                                    var t = (0, c.default)(_[b], 2),
                                      r = t[0],
                                      i = t[1].addresses.sort(function(t, r) {
                                        return r.deposits - t.deposits;
                                      }),
                                      a = l[r].approvals,
                                      u = i.map(function(t) {
                                        return _objectSpread(
                                          _objectSpread({}, t),
                                          {},
                                          {
                                            percent: (
                                              (100 * t.deposits) /
                                              a
                                            ).toFixed(2)
                                          }
                                        );
                                      });
                                    l[r] = u;
                                  },
                                    b = 0,
                                    _ = Object.entries(l);
                                  b < _.length;
                                  b++
                                )
                                  m();
                                return u.abrupt('return', l);
                              case 18:
                              case 'end':
                                return u.stop();
                            }
                        },
                        _callee6,
                        this
                      );
                    })
                  )),
                  function getVoteTally() {
                    return a.apply(this, arguments);
                  })
              },
              {
                key: 'getVotedSlate',
                value: function getVotedSlate(t) {
                  return this._chiefContract().votes(t);
                }
              },
              {
                key: 'getNumDeposits',
                value: function getNumDeposits(t) {
                  return this._chiefContract()
                    .deposits(t)
                    .then(_.MKR.wei);
                }
              },
              {
                key: 'getApprovalCount',
                value: function getApprovalCount(t) {
                  return this._chiefContract()
                    .approvals(t)
                    .then(_.MKR.wei);
                }
              },
              {
                key: 'getHat',
                value: function getHat() {
                  return this._chiefContract().hat();
                }
              },
              {
                key: 'getSlateAddresses',
                value:
                  ((i = (0, l.default)(
                    u.default.mark(function _callee7(t) {
                      var r,
                        i = arguments;
                      return u.default.wrap(
                        function _callee7$(a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r =
                                    i.length > 1 && void 0 !== i[1] ? i[1] : 0),
                                  (a.prev = 1),
                                  (a.next = 4),
                                  this._chiefContract().slates(t, r)
                                );
                              case 4:
                                return (
                                  (a.t1 = a.sent),
                                  (a.t0 = [a.t1]),
                                  (a.next = 8),
                                  this.getSlateAddresses(t, r + 1)
                                );
                              case 8:
                                return (
                                  (a.t2 = a.sent),
                                  a.abrupt(
                                    'return',
                                    a.t0.concat.call(a.t0, a.t2)
                                  )
                                );
                              case 12:
                                return (
                                  (a.prev = 12),
                                  (a.t3 = a.catch(1)),
                                  a.abrupt('return', [])
                                );
                              case 15:
                              case 'end':
                                return a.stop();
                            }
                        },
                        _callee7,
                        this,
                        [[1, 12]]
                      );
                    })
                  )),
                  function getSlateAddresses(t) {
                    return i.apply(this, arguments);
                  })
              },
              {
                key: 'getLockAddressLogs',
                value: function getLockAddressLogs() {
                  var t = this;
                  return new Promise(function(r, i) {
                    t._chiefContract({ web3js: !0 })
                      .LogNote(
                        { sig: '0xdd467064' },
                        { fromBlock: 0, toBlock: 'latest' }
                      )
                      .get(function(t, a) {
                        t && i(t),
                          r(
                            a.map(function(t) {
                              return t.args.guy;
                            })
                          );
                      });
                  });
                }
              },
              {
                key: 'getEtchSlateLogs',
                value: function getEtchSlateLogs() {
                  var t = this;
                  return new Promise(function(r, i) {
                    t._chiefContract({ web3js: !0 })
                      .Etch({}, { fromBlock: 0, toBlock: 'latest' })
                      .get(function(t, a) {
                        t && i(t),
                          r(
                            a.map(function(t) {
                              return t.args.slate;
                            })
                          );
                      });
                  });
                }
              },
              {
                key: 'getAllSlates',
                value:
                  ((r = (0, l.default)(
                    u.default.mark(function _callee8() {
                      var t, r, i, a, c;
                      return u.default.wrap(
                        function _callee8$(u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                return (
                                  (t = this._chiefContract().address),
                                  (r = this.get('web3')),
                                  (i = r.network),
                                  (a = (0, w.netIdToName)(i)),
                                  (u.next = 6),
                                  r.getPastLogs({
                                    fromBlock: O.inception_block[a],
                                    toBlock: 'latest',
                                    address: t,
                                    topics: [O.events.etch]
                                  })
                                );
                              case 6:
                                return (
                                  (c = u.sent),
                                  u.abrupt(
                                    'return',
                                    c.map(function(t) {
                                      return t.topics[1];
                                    })
                                  )
                                );
                              case 8:
                              case 'end':
                                return u.stop();
                            }
                        },
                        _callee8,
                        this
                      );
                    })
                  )),
                  function getAllSlates() {
                    return r.apply(this, arguments);
                  })
              },
              {
                key: '_chiefContract',
                value: function _chiefContract() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = t.web3js,
                    i = void 0 !== r && r;
                  return i
                    ? this.get('smartContract').getWeb3ContractByName(_.CHIEF)
                    : this.get('smartContract').getContractByName(_.CHIEF);
                }
              }
            ]),
            ChiefService
          );
        })(b.LocalService);
      r.default = S;
    },
    function(t, r, i) {
      var a = (function(t) {
        var r = Object.prototype,
          i = r.hasOwnProperty,
          a = 'function' == typeof Symbol ? Symbol : {},
          u = a.iterator || '@@iterator',
          c = a.asyncIterator || '@@asyncIterator',
          l = a.toStringTag || '@@toStringTag';
        function define(t, r, i) {
          return (
            Object.defineProperty(t, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
            t[r]
          );
        }
        try {
          define({}, '');
        } catch (t) {
          define = function(t, r, i) {
            return (t[r] = i);
          };
        }
        function wrap(t, r, i, a) {
          var u = r && r.prototype instanceof Generator ? r : Generator,
            c = Object.create(u.prototype),
            l = new Context(a || []);
          return (
            (c._invoke = (function makeInvokeMethod(t, r, i) {
              var a = 'suspendedStart';
              return function invoke(u, c) {
                if ('executing' === a)
                  throw new Error('Generator is already running');
                if ('completed' === a) {
                  if ('throw' === u) throw c;
                  return doneResult();
                }
                for (i.method = u, i.arg = c; ; ) {
                  var l = i.delegate;
                  if (l) {
                    var d = maybeInvokeDelegate(l, i);
                    if (d) {
                      if (d === p) continue;
                      return d;
                    }
                  }
                  if ('next' === i.method) i.sent = i._sent = i.arg;
                  else if ('throw' === i.method) {
                    if ('suspendedStart' === a)
                      throw ((a = 'completed'), i.arg);
                    i.dispatchException(i.arg);
                  } else 'return' === i.method && i.abrupt('return', i.arg);
                  a = 'executing';
                  var y = tryCatch(t, r, i);
                  if ('normal' === y.type) {
                    if (
                      ((a = i.done ? 'completed' : 'suspendedYield'),
                      y.arg === p)
                    )
                      continue;
                    return { value: y.arg, done: i.done };
                  }
                  'throw' === y.type &&
                    ((a = 'completed'), (i.method = 'throw'), (i.arg = y.arg));
                }
              };
            })(t, i, l)),
            c
          );
        }
        function tryCatch(t, r, i) {
          try {
            return { type: 'normal', arg: t.call(r, i) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        t.wrap = wrap;
        var p = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var d = {};
        d[u] = function() {
          return this;
        };
        var y = Object.getPrototypeOf,
          h = y && y(y(values([])));
        h && h !== r && i.call(h, u) && (d = h);
        var v = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
          d
        ));
        function defineIteratorMethods(t) {
          ['next', 'throw', 'return'].forEach(function(r) {
            define(t, r, function(t) {
              return this._invoke(r, t);
            });
          });
        }
        function AsyncIterator(t, r) {
          var a;
          this._invoke = function enqueue(u, c) {
            function callInvokeWithMethodAndArg() {
              return new r(function(a, l) {
                !(function invoke(a, u, c, l) {
                  var p = tryCatch(t[a], t, u);
                  if ('throw' !== p.type) {
                    var d = p.arg,
                      y = d.value;
                    return y && 'object' == typeof y && i.call(y, '__await')
                      ? r.resolve(y.__await).then(
                          function(t) {
                            invoke('next', t, c, l);
                          },
                          function(t) {
                            invoke('throw', t, c, l);
                          }
                        )
                      : r.resolve(y).then(
                          function(t) {
                            (d.value = t), c(d);
                          },
                          function(t) {
                            return invoke('throw', t, c, l);
                          }
                        );
                  }
                  l(p.arg);
                })(u, c, a, l);
              });
            }
            return (a = a
              ? a.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
              : callInvokeWithMethodAndArg());
          };
        }
        function maybeInvokeDelegate(t, r) {
          var i = t.iterator[r.method];
          if (void 0 === i) {
            if (((r.delegate = null), 'throw' === r.method)) {
              if (
                t.iterator.return &&
                ((r.method = 'return'),
                (r.arg = void 0),
                maybeInvokeDelegate(t, r),
                'throw' === r.method)
              )
                return p;
              (r.method = 'throw'),
                (r.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var a = tryCatch(i, t.iterator, r.arg);
          if ('throw' === a.type)
            return (
              (r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), p
            );
          var u = a.arg;
          return u
            ? u.done
              ? ((r[t.resultName] = u.value),
                (r.next = t.nextLoc),
                'return' !== r.method &&
                  ((r.method = 'next'), (r.arg = void 0)),
                (r.delegate = null),
                p)
              : u
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              p);
        }
        function pushTryEntry(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]),
            2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
            this.tryEntries.push(r);
        }
        function resetTryEntry(t) {
          var r = t.completion || {};
          (r.type = 'normal'), delete r.arg, (t.completion = r);
        }
        function Context(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(t) {
          if (t) {
            var r = t[u];
            if (r) return r.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                c = function next() {
                  for (; ++a < t.length; )
                    if (i.call(t, a))
                      return (next.value = t[a]), (next.done = !1), next;
                  return (next.value = void 0), (next.done = !0), next;
                };
              return (c.next = c);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: void 0, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = v.constructor = GeneratorFunctionPrototype),
          (GeneratorFunctionPrototype.constructor = GeneratorFunction),
          (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, l, 'GeneratorFunction')),
          (t.isGeneratorFunction = function(t) {
            var r = 'function' == typeof t && t.constructor;
            return (
              !!r &&
              (r === GeneratorFunction ||
                'GeneratorFunction' === (r.displayName || r.name))
            );
          }),
          (t.mark = function(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                : ((t.__proto__ = GeneratorFunctionPrototype),
                  define(t, l, 'GeneratorFunction')),
              (t.prototype = Object.create(v)),
              t
            );
          }),
          (t.awrap = function(t) {
            return { __await: t };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          (AsyncIterator.prototype[c] = function() {
            return this;
          }),
          (t.AsyncIterator = AsyncIterator),
          (t.async = function(r, i, a, u, c) {
            void 0 === c && (c = Promise);
            var l = new AsyncIterator(wrap(r, i, a, u), c);
            return t.isGeneratorFunction(i)
              ? l
              : l.next().then(function(t) {
                  return t.done ? t.value : l.next();
                });
          }),
          defineIteratorMethods(v),
          define(v, l, 'Generator'),
          (v[u] = function() {
            return this;
          }),
          (v.toString = function() {
            return '[object Generator]';
          }),
          (t.keys = function(t) {
            var r = [];
            for (var i in t) r.push(i);
            return (
              r.reverse(),
              function next() {
                for (; r.length; ) {
                  var i = r.pop();
                  if (i in t) return (next.value = i), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (t.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !t)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    i.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = void 0);
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function(t) {
              if (this.done) throw t;
              var r = this;
              function handle(i, a) {
                return (
                  (c.type = 'throw'),
                  (c.arg = t),
                  (r.next = i),
                  a && ((r.method = 'next'), (r.arg = void 0)),
                  !!a
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var u = this.tryEntries[a],
                  c = u.completion;
                if ('root' === u.tryLoc) return handle('end');
                if (u.tryLoc <= this.prev) {
                  var l = i.call(u, 'catchLoc'),
                    p = i.call(u, 'finallyLoc');
                  if (l && p) {
                    if (this.prev < u.catchLoc) return handle(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return handle(u.finallyLoc);
                  } else if (l) {
                    if (this.prev < u.catchLoc) return handle(u.catchLoc, !0);
                  } else {
                    if (!p)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < u.finallyLoc) return handle(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t, r) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var u = this.tryEntries[a];
                if (
                  u.tryLoc <= this.prev &&
                  i.call(u, 'finallyLoc') &&
                  this.prev < u.finallyLoc
                ) {
                  var c = u;
                  break;
                }
              }
              c &&
                ('break' === t || 'continue' === t) &&
                c.tryLoc <= r &&
                r <= c.finallyLoc &&
                (c = null);
              var l = c ? c.completion : {};
              return (
                (l.type = t),
                (l.arg = r),
                c
                  ? ((this.method = 'next'), (this.next = c.finallyLoc), p)
                  : this.complete(l)
              );
            },
            complete: function(t, r) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && r && (this.next = r),
                p
              );
            },
            finish: function(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (i.finallyLoc === t)
                  return (
                    this.complete(i.completion, i.afterLoc), resetTryEntry(i), p
                  );
              }
            },
            catch: function(t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (i.tryLoc === t) {
                  var a = i.completion;
                  if ('throw' === a.type) {
                    var u = a.arg;
                    resetTryEntry(i);
                  }
                  return u;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function(t, r, i) {
              return (
                (this.delegate = {
                  iterator: values(t),
                  resultName: r,
                  nextLoc: i
                }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            }
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = a;
      } catch (t) {
        Function('r', 'regeneratorRuntime = r')(a);
      }
    },
    function(t, r) {
      (t.exports = function _arrayWithHoles(t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      (t.exports = function _iterableToArrayLimit(t, r) {
        var i =
          t &&
          (('undefined' != typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator']);
        if (null != i) {
          var a,
            u,
            c = [],
            l = !0,
            p = !1;
          try {
            for (
              i = i.call(t);
              !(l = (a = i.next()).done) &&
              (c.push(a.value), !r || c.length !== r);
              l = !0
            );
          } catch (t) {
            (p = !0), (u = t);
          } finally {
            try {
              l || null == i.return || i.return();
            } finally {
              if (p) throw u;
            }
          }
          return c;
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      (t.exports = function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      function _setPrototypeOf(r, i) {
        return (
          (t.exports = _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(t, r) {
              return (t.__proto__ = r), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          _setPrototypeOf(r, i)
        );
      }
      (t.exports = _setPrototypeOf),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      (function(t) {
        var a = i(143),
          u = i(144),
          c = i(145);
        function kMaxLength() {
          return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function createBuffer(t, r) {
          if (kMaxLength() < r)
            throw new RangeError('Invalid typed array length');
          return (
            Buffer.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(r)).__proto__ = Buffer.prototype)
              : (null === t && (t = new Buffer(r)), (t.length = r)),
            t
          );
        }
        function Buffer(t, r, i) {
          if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer))
            return new Buffer(t, r, i);
          if ('number' == typeof t) {
            if ('string' == typeof r)
              throw new Error(
                'If encoding is specified then the first argument must be a string'
              );
            return allocUnsafe(this, t);
          }
          return from(this, t, r, i);
        }
        function from(t, r, i, a) {
          if ('number' == typeof r)
            throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && r instanceof ArrayBuffer
            ? (function fromArrayBuffer(t, r, i, a) {
                if ((r.byteLength, i < 0 || r.byteLength < i))
                  throw new RangeError("'offset' is out of bounds");
                if (r.byteLength < i + (a || 0))
                  throw new RangeError("'length' is out of bounds");
                r =
                  void 0 === i && void 0 === a
                    ? new Uint8Array(r)
                    : void 0 === a
                    ? new Uint8Array(r, i)
                    : new Uint8Array(r, i, a);
                Buffer.TYPED_ARRAY_SUPPORT
                  ? ((t = r).__proto__ = Buffer.prototype)
                  : (t = fromArrayLike(t, r));
                return t;
              })(t, r, i, a)
            : 'string' == typeof r
            ? (function fromString(t, r, i) {
                ('string' == typeof i && '' !== i) || (i = 'utf8');
                if (!Buffer.isEncoding(i))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var a = 0 | byteLength(r, i),
                  u = (t = createBuffer(t, a)).write(r, i);
                u !== a && (t = t.slice(0, u));
                return t;
              })(t, r, i)
            : (function fromObject(t, r) {
                if (Buffer.isBuffer(r)) {
                  var i = 0 | checked(r.length);
                  return (
                    0 === (t = createBuffer(t, i)).length || r.copy(t, 0, 0, i),
                    t
                  );
                }
                if (r) {
                  if (
                    ('undefined' != typeof ArrayBuffer &&
                      r.buffer instanceof ArrayBuffer) ||
                    'length' in r
                  )
                    return 'number' != typeof r.length ||
                      (function isnan(t) {
                        return t != t;
                      })(r.length)
                      ? createBuffer(t, 0)
                      : fromArrayLike(t, r);
                  if ('Buffer' === r.type && c(r.data))
                    return fromArrayLike(t, r.data);
                }
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                );
              })(t, r);
        }
        function assertSize(t) {
          if ('number' != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function allocUnsafe(t, r) {
          if (
            (assertSize(r),
            (t = createBuffer(t, r < 0 ? 0 : 0 | checked(r))),
            !Buffer.TYPED_ARRAY_SUPPORT)
          )
            for (var i = 0; i < r; ++i) t[i] = 0;
          return t;
        }
        function fromArrayLike(t, r) {
          var i = r.length < 0 ? 0 : 0 | checked(r.length);
          t = createBuffer(t, i);
          for (var a = 0; a < i; a += 1) t[a] = 255 & r[a];
          return t;
        }
        function checked(t) {
          if (t >= kMaxLength())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                kMaxLength().toString(16) +
                ' bytes'
            );
          return 0 | t;
        }
        function byteLength(t, r) {
          if (Buffer.isBuffer(t)) return t.length;
          if (
            'undefined' != typeof ArrayBuffer &&
            'function' == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          'string' != typeof t && (t = '' + t);
          var i = t.length;
          if (0 === i) return 0;
          for (var a = !1; ; )
            switch (r) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return i;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return utf8ToBytes(t).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * i;
              case 'hex':
                return i >>> 1;
              case 'base64':
                return base64ToBytes(t).length;
              default:
                if (a) return utf8ToBytes(t).length;
                (r = ('' + r).toLowerCase()), (a = !0);
            }
        }
        function slowToString(t, r, i) {
          var a = !1;
          if (((void 0 === r || r < 0) && (r = 0), r > this.length)) return '';
          if (((void 0 === i || i > this.length) && (i = this.length), i <= 0))
            return '';
          if ((i >>>= 0) <= (r >>>= 0)) return '';
          for (t || (t = 'utf8'); ; )
            switch (t) {
              case 'hex':
                return hexSlice(this, r, i);
              case 'utf8':
              case 'utf-8':
                return utf8Slice(this, r, i);
              case 'ascii':
                return asciiSlice(this, r, i);
              case 'latin1':
              case 'binary':
                return latin1Slice(this, r, i);
              case 'base64':
                return base64Slice(this, r, i);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return utf16leSlice(this, r, i);
              default:
                if (a) throw new TypeError('Unknown encoding: ' + t);
                (t = (t + '').toLowerCase()), (a = !0);
            }
        }
        function swap(t, r, i) {
          var a = t[r];
          (t[r] = t[i]), (t[i] = a);
        }
        function bidirectionalIndexOf(t, r, i, a, u) {
          if (0 === t.length) return -1;
          if (
            ('string' == typeof i
              ? ((a = i), (i = 0))
              : i > 2147483647
              ? (i = 2147483647)
              : i < -2147483648 && (i = -2147483648),
            (i = +i),
            isNaN(i) && (i = u ? 0 : t.length - 1),
            i < 0 && (i = t.length + i),
            i >= t.length)
          ) {
            if (u) return -1;
            i = t.length - 1;
          } else if (i < 0) {
            if (!u) return -1;
            i = 0;
          }
          if (
            ('string' == typeof r && (r = Buffer.from(r, a)),
            Buffer.isBuffer(r))
          )
            return 0 === r.length ? -1 : arrayIndexOf(t, r, i, a, u);
          if ('number' == typeof r)
            return (
              (r &= 255),
              Buffer.TYPED_ARRAY_SUPPORT &&
              'function' == typeof Uint8Array.prototype.indexOf
                ? u
                  ? Uint8Array.prototype.indexOf.call(t, r, i)
                  : Uint8Array.prototype.lastIndexOf.call(t, r, i)
                : arrayIndexOf(t, [r], i, a, u)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function arrayIndexOf(t, r, i, a, u) {
          var c,
            l = 1,
            p = t.length,
            d = r.length;
          if (
            void 0 !== a &&
            ('ucs2' === (a = String(a).toLowerCase()) ||
              'ucs-2' === a ||
              'utf16le' === a ||
              'utf-16le' === a)
          ) {
            if (t.length < 2 || r.length < 2) return -1;
            (l = 2), (p /= 2), (d /= 2), (i /= 2);
          }
          function read(t, r) {
            return 1 === l ? t[r] : t.readUInt16BE(r * l);
          }
          if (u) {
            var y = -1;
            for (c = i; c < p; c++)
              if (read(t, c) === read(r, -1 === y ? 0 : c - y)) {
                if ((-1 === y && (y = c), c - y + 1 === d)) return y * l;
              } else -1 !== y && (c -= c - y), (y = -1);
          } else
            for (i + d > p && (i = p - d), c = i; c >= 0; c--) {
              for (var h = !0, v = 0; v < d; v++)
                if (read(t, c + v) !== read(r, v)) {
                  h = !1;
                  break;
                }
              if (h) return c;
            }
          return -1;
        }
        function hexWrite(t, r, i, a) {
          i = Number(i) || 0;
          var u = t.length - i;
          a ? (a = Number(a)) > u && (a = u) : (a = u);
          var c = r.length;
          if (c % 2 != 0) throw new TypeError('Invalid hex string');
          a > c / 2 && (a = c / 2);
          for (var l = 0; l < a; ++l) {
            var p = parseInt(r.substr(2 * l, 2), 16);
            if (isNaN(p)) return l;
            t[i + l] = p;
          }
          return l;
        }
        function utf8Write(t, r, i, a) {
          return blitBuffer(utf8ToBytes(r, t.length - i), t, i, a);
        }
        function asciiWrite(t, r, i, a) {
          return blitBuffer(
            (function asciiToBytes(t) {
              for (var r = [], i = 0; i < t.length; ++i)
                r.push(255 & t.charCodeAt(i));
              return r;
            })(r),
            t,
            i,
            a
          );
        }
        function latin1Write(t, r, i, a) {
          return asciiWrite(t, r, i, a);
        }
        function base64Write(t, r, i, a) {
          return blitBuffer(base64ToBytes(r), t, i, a);
        }
        function ucs2Write(t, r, i, a) {
          return blitBuffer(
            (function utf16leToBytes(t, r) {
              for (
                var i, a, u, c = [], l = 0;
                l < t.length && !((r -= 2) < 0);
                ++l
              )
                (i = t.charCodeAt(l)),
                  (a = i >> 8),
                  (u = i % 256),
                  c.push(u),
                  c.push(a);
              return c;
            })(r, t.length - i),
            t,
            i,
            a
          );
        }
        function base64Slice(t, r, i) {
          return 0 === r && i === t.length
            ? a.fromByteArray(t)
            : a.fromByteArray(t.slice(r, i));
        }
        function utf8Slice(t, r, i) {
          i = Math.min(t.length, i);
          for (var a = [], u = r; u < i; ) {
            var c,
              l,
              p,
              d,
              y = t[u],
              h = null,
              v = y > 239 ? 4 : y > 223 ? 3 : y > 191 ? 2 : 1;
            if (u + v <= i)
              switch (v) {
                case 1:
                  y < 128 && (h = y);
                  break;
                case 2:
                  128 == (192 & (c = t[u + 1])) &&
                    (d = ((31 & y) << 6) | (63 & c)) > 127 &&
                    (h = d);
                  break;
                case 3:
                  (c = t[u + 1]),
                    (l = t[u + 2]),
                    128 == (192 & c) &&
                      128 == (192 & l) &&
                      (d = ((15 & y) << 12) | ((63 & c) << 6) | (63 & l)) >
                        2047 &&
                      (d < 55296 || d > 57343) &&
                      (h = d);
                  break;
                case 4:
                  (c = t[u + 1]),
                    (l = t[u + 2]),
                    (p = t[u + 3]),
                    128 == (192 & c) &&
                      128 == (192 & l) &&
                      128 == (192 & p) &&
                      (d =
                        ((15 & y) << 18) |
                        ((63 & c) << 12) |
                        ((63 & l) << 6) |
                        (63 & p)) > 65535 &&
                      d < 1114112 &&
                      (h = d);
              }
            null === h
              ? ((h = 65533), (v = 1))
              : h > 65535 &&
                ((h -= 65536),
                a.push(((h >>> 10) & 1023) | 55296),
                (h = 56320 | (1023 & h))),
              a.push(h),
              (u += v);
          }
          return (function decodeCodePointsArray(t) {
            var r = t.length;
            if (r <= 4096) return String.fromCharCode.apply(String, t);
            var i = '',
              a = 0;
            for (; a < r; )
              i += String.fromCharCode.apply(String, t.slice(a, (a += 4096)));
            return i;
          })(a);
        }
        (r.Buffer = Buffer),
          (r.SlowBuffer = function SlowBuffer(t) {
            +t != t && (t = 0);
            return Buffer.alloc(+t);
          }),
          (r.INSPECT_MAX_BYTES = 50),
          (Buffer.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function typedArraySupport() {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                          return 42;
                        }
                      }),
                      42 === t.foo() &&
                        'function' == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (r.kMaxLength = kMaxLength()),
          (Buffer.poolSize = 8192),
          (Buffer._augment = function(t) {
            return (t.__proto__ = Buffer.prototype), t;
          }),
          (Buffer.from = function(t, r, i) {
            return from(null, t, r, i);
          }),
          Buffer.TYPED_ARRAY_SUPPORT &&
            ((Buffer.prototype.__proto__ = Uint8Array.prototype),
            (Buffer.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              Buffer[Symbol.species] === Buffer &&
              Object.defineProperty(Buffer, Symbol.species, {
                value: null,
                configurable: !0
              })),
          (Buffer.alloc = function(t, r, i) {
            return (function alloc(t, r, i, a) {
              return (
                assertSize(r),
                r <= 0
                  ? createBuffer(t, r)
                  : void 0 !== i
                  ? 'string' == typeof a
                    ? createBuffer(t, r).fill(i, a)
                    : createBuffer(t, r).fill(i)
                  : createBuffer(t, r)
              );
            })(null, t, r, i);
          }),
          (Buffer.allocUnsafe = function(t) {
            return allocUnsafe(null, t);
          }),
          (Buffer.allocUnsafeSlow = function(t) {
            return allocUnsafe(null, t);
          }),
          (Buffer.isBuffer = function isBuffer(t) {
            return !(null == t || !t._isBuffer);
          }),
          (Buffer.compare = function compare(t, r) {
            if (!Buffer.isBuffer(t) || !Buffer.isBuffer(r))
              throw new TypeError('Arguments must be Buffers');
            if (t === r) return 0;
            for (
              var i = t.length, a = r.length, u = 0, c = Math.min(i, a);
              u < c;
              ++u
            )
              if (t[u] !== r[u]) {
                (i = t[u]), (a = r[u]);
                break;
              }
            return i < a ? -1 : a < i ? 1 : 0;
          }),
          (Buffer.isEncoding = function isEncoding(t) {
            switch (String(t).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (Buffer.concat = function concat(t, r) {
            if (!c(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return Buffer.alloc(0);
            var i;
            if (void 0 === r)
              for (r = 0, i = 0; i < t.length; ++i) r += t[i].length;
            var a = Buffer.allocUnsafe(r),
              u = 0;
            for (i = 0; i < t.length; ++i) {
              var l = t[i];
              if (!Buffer.isBuffer(l))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              l.copy(a, u), (u += l.length);
            }
            return a;
          }),
          (Buffer.byteLength = byteLength),
          (Buffer.prototype._isBuffer = !0),
          (Buffer.prototype.swap16 = function swap16() {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var r = 0; r < t; r += 2) swap(this, r, r + 1);
            return this;
          }),
          (Buffer.prototype.swap32 = function swap32() {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var r = 0; r < t; r += 4)
              swap(this, r, r + 3), swap(this, r + 1, r + 2);
            return this;
          }),
          (Buffer.prototype.swap64 = function swap64() {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var r = 0; r < t; r += 8)
              swap(this, r, r + 7),
                swap(this, r + 1, r + 6),
                swap(this, r + 2, r + 5),
                swap(this, r + 3, r + 4);
            return this;
          }),
          (Buffer.prototype.toString = function toString() {
            var t = 0 | this.length;
            return 0 === t
              ? ''
              : 0 === arguments.length
              ? utf8Slice(this, 0, t)
              : slowToString.apply(this, arguments);
          }),
          (Buffer.prototype.equals = function equals(t) {
            if (!Buffer.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            return this === t || 0 === Buffer.compare(this, t);
          }),
          (Buffer.prototype.inspect = function inspect() {
            var t = '',
              i = r.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString('hex', 0, i)
                  .match(/.{2}/g)
                  .join(' ')),
                this.length > i && (t += ' ... ')),
              '<Buffer ' + t + '>'
            );
          }),
          (Buffer.prototype.compare = function compare(t, r, i, a, u) {
            if (!Buffer.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            if (
              (void 0 === r && (r = 0),
              void 0 === i && (i = t ? t.length : 0),
              void 0 === a && (a = 0),
              void 0 === u && (u = this.length),
              r < 0 || i > t.length || a < 0 || u > this.length)
            )
              throw new RangeError('out of range index');
            if (a >= u && r >= i) return 0;
            if (a >= u) return -1;
            if (r >= i) return 1;
            if (this === t) return 0;
            for (
              var c = (u >>>= 0) - (a >>>= 0),
                l = (i >>>= 0) - (r >>>= 0),
                p = Math.min(c, l),
                d = this.slice(a, u),
                y = t.slice(r, i),
                h = 0;
              h < p;
              ++h
            )
              if (d[h] !== y[h]) {
                (c = d[h]), (l = y[h]);
                break;
              }
            return c < l ? -1 : l < c ? 1 : 0;
          }),
          (Buffer.prototype.includes = function includes(t, r, i) {
            return -1 !== this.indexOf(t, r, i);
          }),
          (Buffer.prototype.indexOf = function indexOf(t, r, i) {
            return bidirectionalIndexOf(this, t, r, i, !0);
          }),
          (Buffer.prototype.lastIndexOf = function lastIndexOf(t, r, i) {
            return bidirectionalIndexOf(this, t, r, i, !1);
          }),
          (Buffer.prototype.write = function write(t, r, i, a) {
            if (void 0 === r) (a = 'utf8'), (i = this.length), (r = 0);
            else if (void 0 === i && 'string' == typeof r)
              (a = r), (i = this.length), (r = 0);
            else {
              if (!isFinite(r))
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                );
              (r |= 0),
                isFinite(i)
                  ? ((i |= 0), void 0 === a && (a = 'utf8'))
                  : ((a = i), (i = void 0));
            }
            var u = this.length - r;
            if (
              ((void 0 === i || i > u) && (i = u),
              (t.length > 0 && (i < 0 || r < 0)) || r > this.length)
            )
              throw new RangeError('Attempt to write outside buffer bounds');
            a || (a = 'utf8');
            for (var c = !1; ; )
              switch (a) {
                case 'hex':
                  return hexWrite(this, t, r, i);
                case 'utf8':
                case 'utf-8':
                  return utf8Write(this, t, r, i);
                case 'ascii':
                  return asciiWrite(this, t, r, i);
                case 'latin1':
                case 'binary':
                  return latin1Write(this, t, r, i);
                case 'base64':
                  return base64Write(this, t, r, i);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return ucs2Write(this, t, r, i);
                default:
                  if (c) throw new TypeError('Unknown encoding: ' + a);
                  (a = ('' + a).toLowerCase()), (c = !0);
              }
          }),
          (Buffer.prototype.toJSON = function toJSON() {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          });
        function asciiSlice(t, r, i) {
          var a = '';
          i = Math.min(t.length, i);
          for (var u = r; u < i; ++u) a += String.fromCharCode(127 & t[u]);
          return a;
        }
        function latin1Slice(t, r, i) {
          var a = '';
          i = Math.min(t.length, i);
          for (var u = r; u < i; ++u) a += String.fromCharCode(t[u]);
          return a;
        }
        function hexSlice(t, r, i) {
          var a = t.length;
          (!r || r < 0) && (r = 0), (!i || i < 0 || i > a) && (i = a);
          for (var u = '', c = r; c < i; ++c) u += toHex(t[c]);
          return u;
        }
        function utf16leSlice(t, r, i) {
          for (var a = t.slice(r, i), u = '', c = 0; c < a.length; c += 2)
            u += String.fromCharCode(a[c] + 256 * a[c + 1]);
          return u;
        }
        function checkOffset(t, r, i) {
          if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
          if (t + r > i)
            throw new RangeError('Trying to access beyond buffer length');
        }
        function checkInt(t, r, i, a, u, c) {
          if (!Buffer.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (r > u || r < c)
            throw new RangeError('"value" argument is out of bounds');
          if (i + a > t.length) throw new RangeError('Index out of range');
        }
        function objectWriteUInt16(t, r, i, a) {
          r < 0 && (r = 65535 + r + 1);
          for (var u = 0, c = Math.min(t.length - i, 2); u < c; ++u)
            t[i + u] =
              (r & (255 << (8 * (a ? u : 1 - u)))) >>> (8 * (a ? u : 1 - u));
        }
        function objectWriteUInt32(t, r, i, a) {
          r < 0 && (r = 4294967295 + r + 1);
          for (var u = 0, c = Math.min(t.length - i, 4); u < c; ++u)
            t[i + u] = (r >>> (8 * (a ? u : 3 - u))) & 255;
        }
        function checkIEEE754(t, r, i, a, u, c) {
          if (i + a > t.length) throw new RangeError('Index out of range');
          if (i < 0) throw new RangeError('Index out of range');
        }
        function writeFloat(t, r, i, a, c) {
          return (
            c || checkIEEE754(t, 0, i, 4), u.write(t, r, i, a, 23, 4), i + 4
          );
        }
        function writeDouble(t, r, i, a, c) {
          return (
            c || checkIEEE754(t, 0, i, 8), u.write(t, r, i, a, 52, 8), i + 8
          );
        }
        (Buffer.prototype.slice = function slice(t, r) {
          var i,
            a = this.length;
          if (
            ((t = ~~t) < 0 ? (t += a) < 0 && (t = 0) : t > a && (t = a),
            (r = void 0 === r ? a : ~~r) < 0
              ? (r += a) < 0 && (r = 0)
              : r > a && (r = a),
            r < t && (r = t),
            Buffer.TYPED_ARRAY_SUPPORT)
          )
            (i = this.subarray(t, r)).__proto__ = Buffer.prototype;
          else {
            var u = r - t;
            i = new Buffer(u, void 0);
            for (var c = 0; c < u; ++c) i[c] = this[c + t];
          }
          return i;
        }),
          (Buffer.prototype.readUIntLE = function readUIntLE(t, r, i) {
            (t |= 0), (r |= 0), i || checkOffset(t, r, this.length);
            for (var a = this[t], u = 1, c = 0; ++c < r && (u *= 256); )
              a += this[t + c] * u;
            return a;
          }),
          (Buffer.prototype.readUIntBE = function readUIntBE(t, r, i) {
            (t |= 0), (r |= 0), i || checkOffset(t, r, this.length);
            for (var a = this[t + --r], u = 1; r > 0 && (u *= 256); )
              a += this[t + --r] * u;
            return a;
          }),
          (Buffer.prototype.readUInt8 = function readUInt8(t, r) {
            return r || checkOffset(t, 1, this.length), this[t];
          }),
          (Buffer.prototype.readUInt16LE = function readUInt16LE(t, r) {
            return (
              r || checkOffset(t, 2, this.length), this[t] | (this[t + 1] << 8)
            );
          }),
          (Buffer.prototype.readUInt16BE = function readUInt16BE(t, r) {
            return (
              r || checkOffset(t, 2, this.length), (this[t] << 8) | this[t + 1]
            );
          }),
          (Buffer.prototype.readUInt32LE = function readUInt32LE(t, r) {
            return (
              r || checkOffset(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (Buffer.prototype.readUInt32BE = function readUInt32BE(t, r) {
            return (
              r || checkOffset(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (Buffer.prototype.readIntLE = function readIntLE(t, r, i) {
            (t |= 0), (r |= 0), i || checkOffset(t, r, this.length);
            for (var a = this[t], u = 1, c = 0; ++c < r && (u *= 256); )
              a += this[t + c] * u;
            return a >= (u *= 128) && (a -= Math.pow(2, 8 * r)), a;
          }),
          (Buffer.prototype.readIntBE = function readIntBE(t, r, i) {
            (t |= 0), (r |= 0), i || checkOffset(t, r, this.length);
            for (var a = r, u = 1, c = this[t + --a]; a > 0 && (u *= 256); )
              c += this[t + --a] * u;
            return c >= (u *= 128) && (c -= Math.pow(2, 8 * r)), c;
          }),
          (Buffer.prototype.readInt8 = function readInt8(t, r) {
            return (
              r || checkOffset(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (Buffer.prototype.readInt16LE = function readInt16LE(t, r) {
            r || checkOffset(t, 2, this.length);
            var i = this[t] | (this[t + 1] << 8);
            return 32768 & i ? 4294901760 | i : i;
          }),
          (Buffer.prototype.readInt16BE = function readInt16BE(t, r) {
            r || checkOffset(t, 2, this.length);
            var i = this[t + 1] | (this[t] << 8);
            return 32768 & i ? 4294901760 | i : i;
          }),
          (Buffer.prototype.readInt32LE = function readInt32LE(t, r) {
            return (
              r || checkOffset(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (Buffer.prototype.readInt32BE = function readInt32BE(t, r) {
            return (
              r || checkOffset(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (Buffer.prototype.readFloatLE = function readFloatLE(t, r) {
            return (
              r || checkOffset(t, 4, this.length), u.read(this, t, !0, 23, 4)
            );
          }),
          (Buffer.prototype.readFloatBE = function readFloatBE(t, r) {
            return (
              r || checkOffset(t, 4, this.length), u.read(this, t, !1, 23, 4)
            );
          }),
          (Buffer.prototype.readDoubleLE = function readDoubleLE(t, r) {
            return (
              r || checkOffset(t, 8, this.length), u.read(this, t, !0, 52, 8)
            );
          }),
          (Buffer.prototype.readDoubleBE = function readDoubleBE(t, r) {
            return (
              r || checkOffset(t, 8, this.length), u.read(this, t, !1, 52, 8)
            );
          }),
          (Buffer.prototype.writeUIntLE = function writeUIntLE(t, r, i, a) {
            ((t = +t), (r |= 0), (i |= 0), a) ||
              checkInt(this, t, r, i, Math.pow(2, 8 * i) - 1, 0);
            var u = 1,
              c = 0;
            for (this[r] = 255 & t; ++c < i && (u *= 256); )
              this[r + c] = (t / u) & 255;
            return r + i;
          }),
          (Buffer.prototype.writeUIntBE = function writeUIntBE(t, r, i, a) {
            ((t = +t), (r |= 0), (i |= 0), a) ||
              checkInt(this, t, r, i, Math.pow(2, 8 * i) - 1, 0);
            var u = i - 1,
              c = 1;
            for (this[r + u] = 255 & t; --u >= 0 && (c *= 256); )
              this[r + u] = (t / c) & 255;
            return r + i;
          }),
          (Buffer.prototype.writeUInt8 = function writeUInt8(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 1, 255, 0),
              Buffer.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[r] = 255 & t),
              r + 1
            );
          }),
          (Buffer.prototype.writeUInt16LE = function writeUInt16LE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 2, 65535, 0),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8))
                : objectWriteUInt16(this, t, r, !0),
              r + 2
            );
          }),
          (Buffer.prototype.writeUInt16BE = function writeUInt16BE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 2, 65535, 0),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t))
                : objectWriteUInt16(this, t, r, !1),
              r + 2
            );
          }),
          (Buffer.prototype.writeUInt32LE = function writeUInt32LE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 4, 4294967295, 0),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r + 3] = t >>> 24),
                  (this[r + 2] = t >>> 16),
                  (this[r + 1] = t >>> 8),
                  (this[r] = 255 & t))
                : objectWriteUInt32(this, t, r, !0),
              r + 4
            );
          }),
          (Buffer.prototype.writeUInt32BE = function writeUInt32BE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 4, 4294967295, 0),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r] = t >>> 24),
                  (this[r + 1] = t >>> 16),
                  (this[r + 2] = t >>> 8),
                  (this[r + 3] = 255 & t))
                : objectWriteUInt32(this, t, r, !1),
              r + 4
            );
          }),
          (Buffer.prototype.writeIntLE = function writeIntLE(t, r, i, a) {
            if (((t = +t), (r |= 0), !a)) {
              var u = Math.pow(2, 8 * i - 1);
              checkInt(this, t, r, i, u - 1, -u);
            }
            var c = 0,
              l = 1,
              p = 0;
            for (this[r] = 255 & t; ++c < i && (l *= 256); )
              t < 0 && 0 === p && 0 !== this[r + c - 1] && (p = 1),
                (this[r + c] = (((t / l) >> 0) - p) & 255);
            return r + i;
          }),
          (Buffer.prototype.writeIntBE = function writeIntBE(t, r, i, a) {
            if (((t = +t), (r |= 0), !a)) {
              var u = Math.pow(2, 8 * i - 1);
              checkInt(this, t, r, i, u - 1, -u);
            }
            var c = i - 1,
              l = 1,
              p = 0;
            for (this[r + c] = 255 & t; --c >= 0 && (l *= 256); )
              t < 0 && 0 === p && 0 !== this[r + c + 1] && (p = 1),
                (this[r + c] = (((t / l) >> 0) - p) & 255);
            return r + i;
          }),
          (Buffer.prototype.writeInt8 = function writeInt8(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 1, 127, -128),
              Buffer.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[r] = 255 & t),
              r + 1
            );
          }),
          (Buffer.prototype.writeInt16LE = function writeInt16LE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 2, 32767, -32768),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8))
                : objectWriteUInt16(this, t, r, !0),
              r + 2
            );
          }),
          (Buffer.prototype.writeInt16BE = function writeInt16BE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 2, 32767, -32768),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t))
                : objectWriteUInt16(this, t, r, !1),
              r + 2
            );
          }),
          (Buffer.prototype.writeInt32LE = function writeInt32LE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 4, 2147483647, -2147483648),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r] = 255 & t),
                  (this[r + 1] = t >>> 8),
                  (this[r + 2] = t >>> 16),
                  (this[r + 3] = t >>> 24))
                : objectWriteUInt32(this, t, r, !0),
              r + 4
            );
          }),
          (Buffer.prototype.writeInt32BE = function writeInt32BE(t, r, i) {
            return (
              (t = +t),
              (r |= 0),
              i || checkInt(this, t, r, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              Buffer.TYPED_ARRAY_SUPPORT
                ? ((this[r] = t >>> 24),
                  (this[r + 1] = t >>> 16),
                  (this[r + 2] = t >>> 8),
                  (this[r + 3] = 255 & t))
                : objectWriteUInt32(this, t, r, !1),
              r + 4
            );
          }),
          (Buffer.prototype.writeFloatLE = function writeFloatLE(t, r, i) {
            return writeFloat(this, t, r, !0, i);
          }),
          (Buffer.prototype.writeFloatBE = function writeFloatBE(t, r, i) {
            return writeFloat(this, t, r, !1, i);
          }),
          (Buffer.prototype.writeDoubleLE = function writeDoubleLE(t, r, i) {
            return writeDouble(this, t, r, !0, i);
          }),
          (Buffer.prototype.writeDoubleBE = function writeDoubleBE(t, r, i) {
            return writeDouble(this, t, r, !1, i);
          }),
          (Buffer.prototype.copy = function copy(t, r, i, a) {
            if (
              (i || (i = 0),
              a || 0 === a || (a = this.length),
              r >= t.length && (r = t.length),
              r || (r = 0),
              a > 0 && a < i && (a = i),
              a === i)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (r < 0) throw new RangeError('targetStart out of bounds');
            if (i < 0 || i >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (a < 0) throw new RangeError('sourceEnd out of bounds');
            a > this.length && (a = this.length),
              t.length - r < a - i && (a = t.length - r + i);
            var u,
              c = a - i;
            if (this === t && i < r && r < a)
              for (u = c - 1; u >= 0; --u) t[u + r] = this[u + i];
            else if (c < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
              for (u = 0; u < c; ++u) t[u + r] = this[u + i];
            else Uint8Array.prototype.set.call(t, this.subarray(i, i + c), r);
            return c;
          }),
          (Buffer.prototype.fill = function fill(t, r, i, a) {
            if ('string' == typeof t) {
              if (
                ('string' == typeof r
                  ? ((a = r), (r = 0), (i = this.length))
                  : 'string' == typeof i && ((a = i), (i = this.length)),
                1 === t.length)
              ) {
                var u = t.charCodeAt(0);
                u < 256 && (t = u);
              }
              if (void 0 !== a && 'string' != typeof a)
                throw new TypeError('encoding must be a string');
              if ('string' == typeof a && !Buffer.isEncoding(a))
                throw new TypeError('Unknown encoding: ' + a);
            } else 'number' == typeof t && (t &= 255);
            if (r < 0 || this.length < r || this.length < i)
              throw new RangeError('Out of range index');
            if (i <= r) return this;
            var c;
            if (
              ((r >>>= 0),
              (i = void 0 === i ? this.length : i >>> 0),
              t || (t = 0),
              'number' == typeof t)
            )
              for (c = r; c < i; ++c) this[c] = t;
            else {
              var l = Buffer.isBuffer(t)
                  ? t
                  : utf8ToBytes(new Buffer(t, a).toString()),
                p = l.length;
              for (c = 0; c < i - r; ++c) this[c + r] = l[c % p];
            }
            return this;
          });
        var l = /[^+\/0-9A-Za-z-_]/g;
        function toHex(t) {
          return t < 16 ? '0' + t.toString(16) : t.toString(16);
        }
        function utf8ToBytes(t, r) {
          var i;
          r = r || 1 / 0;
          for (var a = t.length, u = null, c = [], l = 0; l < a; ++l) {
            if ((i = t.charCodeAt(l)) > 55295 && i < 57344) {
              if (!u) {
                if (i > 56319) {
                  (r -= 3) > -1 && c.push(239, 191, 189);
                  continue;
                }
                if (l + 1 === a) {
                  (r -= 3) > -1 && c.push(239, 191, 189);
                  continue;
                }
                u = i;
                continue;
              }
              if (i < 56320) {
                (r -= 3) > -1 && c.push(239, 191, 189), (u = i);
                continue;
              }
              i = 65536 + (((u - 55296) << 10) | (i - 56320));
            } else u && (r -= 3) > -1 && c.push(239, 191, 189);
            if (((u = null), i < 128)) {
              if ((r -= 1) < 0) break;
              c.push(i);
            } else if (i < 2048) {
              if ((r -= 2) < 0) break;
              c.push((i >> 6) | 192, (63 & i) | 128);
            } else if (i < 65536) {
              if ((r -= 3) < 0) break;
              c.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
            } else {
              if (!(i < 1114112)) throw new Error('Invalid code point');
              if ((r -= 4) < 0) break;
              c.push(
                (i >> 18) | 240,
                ((i >> 12) & 63) | 128,
                ((i >> 6) & 63) | 128,
                (63 & i) | 128
              );
            }
          }
          return c;
        }
        function base64ToBytes(t) {
          return a.toByteArray(
            (function base64clean(t) {
              if (
                (t = (function stringtrim(t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
                })(t).replace(l, '')).length < 2
              )
                return '';
              for (; t.length % 4 != 0; ) t += '=';
              return t;
            })(t)
          );
        }
        function blitBuffer(t, r, i, a) {
          for (var u = 0; u < a && !(u + i >= r.length || u >= t.length); ++u)
            r[u + i] = t[u];
          return u;
        }
      }.call(this, i(47)));
    },
    function(t, r, i) {
      (r.byteLength = function byteLength(t) {
        var r = getLens(t),
          i = r[0],
          a = r[1];
        return (3 * (i + a)) / 4 - a;
      }),
        (r.toByteArray = function toByteArray(t) {
          var r,
            i,
            a = getLens(t),
            l = a[0],
            p = a[1],
            d = new c(
              (function _byteLength(t, r, i) {
                return (3 * (r + i)) / 4 - i;
              })(0, l, p)
            ),
            y = 0,
            h = p > 0 ? l - 4 : l;
          for (i = 0; i < h; i += 4)
            (r =
              (u[t.charCodeAt(i)] << 18) |
              (u[t.charCodeAt(i + 1)] << 12) |
              (u[t.charCodeAt(i + 2)] << 6) |
              u[t.charCodeAt(i + 3)]),
              (d[y++] = (r >> 16) & 255),
              (d[y++] = (r >> 8) & 255),
              (d[y++] = 255 & r);
          2 === p &&
            ((r = (u[t.charCodeAt(i)] << 2) | (u[t.charCodeAt(i + 1)] >> 4)),
            (d[y++] = 255 & r));
          1 === p &&
            ((r =
              (u[t.charCodeAt(i)] << 10) |
              (u[t.charCodeAt(i + 1)] << 4) |
              (u[t.charCodeAt(i + 2)] >> 2)),
            (d[y++] = (r >> 8) & 255),
            (d[y++] = 255 & r));
          return d;
        }),
        (r.fromByteArray = function fromByteArray(t) {
          for (
            var r, i = t.length, u = i % 3, c = [], l = 0, p = i - u;
            l < p;
            l += 16383
          )
            c.push(encodeChunk(t, l, l + 16383 > p ? p : l + 16383));
          1 === u
            ? ((r = t[i - 1]), c.push(a[r >> 2] + a[(r << 4) & 63] + '=='))
            : 2 === u &&
              ((r = (t[i - 2] << 8) + t[i - 1]),
              c.push(a[r >> 10] + a[(r >> 4) & 63] + a[(r << 2) & 63] + '='));
          return c.join('');
        });
      for (
        var a = [],
          u = [],
          c = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          l =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          p = 0,
          d = l.length;
        p < d;
        ++p
      )
        (a[p] = l[p]), (u[l.charCodeAt(p)] = p);
      function getLens(t) {
        var r = t.length;
        if (r % 4 > 0)
          throw new Error('Invalid string. Length must be a multiple of 4');
        var i = t.indexOf('=');
        return -1 === i && (i = r), [i, i === r ? 0 : 4 - (i % 4)];
      }
      function encodeChunk(t, r, i) {
        for (var u, c, l = [], p = r; p < i; p += 3)
          (u =
            ((t[p] << 16) & 16711680) +
            ((t[p + 1] << 8) & 65280) +
            (255 & t[p + 2])),
            l.push(
              a[((c = u) >> 18) & 63] +
                a[(c >> 12) & 63] +
                a[(c >> 6) & 63] +
                a[63 & c]
            );
        return l.join('');
      }
      (u['-'.charCodeAt(0)] = 62), (u['_'.charCodeAt(0)] = 63);
    },
    function(t, r) {
      (r.read = function(t, r, i, a, u) {
        var c,
          l,
          p = 8 * u - a - 1,
          d = (1 << p) - 1,
          y = d >> 1,
          h = -7,
          v = i ? u - 1 : 0,
          g = i ? -1 : 1,
          m = t[r + v];
        for (
          v += g, c = m & ((1 << -h) - 1), m >>= -h, h += p;
          h > 0;
          c = 256 * c + t[r + v], v += g, h -= 8
        );
        for (
          l = c & ((1 << -h) - 1), c >>= -h, h += a;
          h > 0;
          l = 256 * l + t[r + v], v += g, h -= 8
        );
        if (0 === c) c = 1 - y;
        else {
          if (c === d) return l ? NaN : (1 / 0) * (m ? -1 : 1);
          (l += Math.pow(2, a)), (c -= y);
        }
        return (m ? -1 : 1) * l * Math.pow(2, c - a);
      }),
        (r.write = function(t, r, i, a, u, c) {
          var l,
            p,
            d,
            y = 8 * c - u - 1,
            h = (1 << y) - 1,
            v = h >> 1,
            g = 23 === u ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            m = a ? 0 : c - 1,
            b = a ? 1 : -1,
            _ = r < 0 || (0 === r && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((p = isNaN(r) ? 1 : 0), (l = h))
                : ((l = Math.floor(Math.log(r) / Math.LN2)),
                  r * (d = Math.pow(2, -l)) < 1 && (l--, (d *= 2)),
                  (r += l + v >= 1 ? g / d : g * Math.pow(2, 1 - v)) * d >= 2 &&
                    (l++, (d /= 2)),
                  l + v >= h
                    ? ((p = 0), (l = h))
                    : l + v >= 1
                    ? ((p = (r * d - 1) * Math.pow(2, u)), (l += v))
                    : ((p = r * Math.pow(2, v - 1) * Math.pow(2, u)), (l = 0)));
            u >= 8;
            t[i + m] = 255 & p, m += b, p /= 256, u -= 8
          );
          for (
            l = (l << u) | p, y += u;
            y > 0;
            t[i + m] = 255 & l, m += b, l /= 256, y -= 8
          );
          t[i + m - b] |= 128 * _;
        });
    },
    function(t, r) {
      var i = {}.toString;
      t.exports =
        Array.isArray ||
        function(t) {
          return '[object Array]' == i.call(t);
        };
    },
    function(t, r, i) {
      var a = i(71);
      (t.exports = function _arrayWithoutHoles(t) {
        if (Array.isArray(t)) return a(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      (t.exports = function _iterableToArray(t) {
        if (
          ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t['@@iterator']
        )
          return Array.from(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      (t.exports = function _nonIterableSpread() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(10)),
        c = a(i(22)),
        l = a(i(24)),
        p = a(i(11)),
        d = a(i(3)),
        y = a(i(4)),
        h = a(i(14)),
        v = a(i(15)),
        g = a(i(16)),
        m = i(17),
        b = a(i(150)),
        _ = i(5),
        w = i(23),
        x = a(i(151));
      function _createSuper(t) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var i,
            a = (0, g.default)(t);
          if (r) {
            var u = (0, g.default)(this).constructor;
            i = Reflect.construct(a, arguments, u);
          } else i = a.apply(this, arguments);
          return (0, v.default)(this, i);
        };
      }
      var O = (function(t) {
        (0, h.default)(VoteProxyService, t);
        var r,
          i,
          a,
          v = _createSuper(VoteProxyService);
        function VoteProxyService() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'voteProxy';
          return (
            (0, d.default)(this, VoteProxyService),
            v.call(this, t, ['smartContract', 'chief'])
          );
        }
        return (
          (0, y.default)(VoteProxyService, [
            {
              key: 'lock',
              value: function lock(t, r) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : _.MKR,
                  a = (0, w.getCurrency)(r, i).toFixed('wei');
                return this._proxyContract(t).lock(a);
              }
            },
            {
              key: 'free',
              value: function free(t, r) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : _.MKR,
                  a = (0, w.getCurrency)(r, i).toFixed('wei');
                return this._proxyContract(t).free(a);
              }
            },
            {
              key: 'freeAll',
              value: function freeAll(t) {
                return this._proxyContract(t).freeAll();
              }
            },
            {
              key: 'voteExec',
              value: function voteExec(t, r) {
                return Array.isArray(r)
                  ? this._proxyContract(t)['vote(address[])'](r)
                  : this._proxyContract(t)['vote(bytes32)'](r);
              }
            },
            {
              key: 'getVotedProposalAddresses',
              value:
                ((a = (0, p.default)(
                  u.default.mark(function _callee(t) {
                    var r;
                    return u.default.wrap(
                      function _callee$(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (i.next = 2), this.get('chief').getVotedSlate(t)
                              );
                            case 2:
                              return (
                                (r = i.sent),
                                i.abrupt(
                                  'return',
                                  this.get('chief').getSlateAddresses(r)
                                )
                              );
                            case 4:
                            case 'end':
                              return i.stop();
                          }
                      },
                      _callee,
                      this
                    );
                  })
                )),
                function getVotedProposalAddresses(t) {
                  return a.apply(this, arguments);
                })
            },
            {
              key: 'getVoteProxy',
              value:
                ((i = (0, p.default)(
                  u.default.mark(function _callee2(t) {
                    var r, i, a, c, p, d, y;
                    return u.default.wrap(
                      function _callee2$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (u.next = 2), this._getProxyStatus(t);
                            case 2:
                              if (
                                ((i = u.sent),
                                (a = i.hasProxy),
                                (c = i.role),
                                (p = i.address),
                                a)
                              ) {
                                u.next = 8;
                                break;
                              }
                              return u.abrupt('return', {
                                hasProxy: a,
                                voteProxy: null
                              });
                            case 8:
                              return (
                                (d = 'hot' === c ? 'cold' : 'hot'),
                                (u.next = 11),
                                this._getAddressOfRole(p, d)
                              );
                            case 11:
                              return (
                                (y = u.sent),
                                u.abrupt('return', {
                                  hasProxy: a,
                                  voteProxy: new b.default(
                                    ((r = {
                                      voteProxyService: this,
                                      proxyAddress: p
                                    }),
                                    (0, l.default)(
                                      r,
                                      ''.concat(c, 'Address'),
                                      t
                                    ),
                                    (0, l.default)(
                                      r,
                                      ''.concat(d, 'Address'),
                                      y
                                    ),
                                    r)
                                  )
                                })
                              );
                            case 13:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee2,
                      this
                    );
                  })
                )),
                function getVoteProxy(t) {
                  return i.apply(this, arguments);
                })
            },
            {
              key: '_proxyContract',
              value: function _proxyContract(t) {
                return this.get('smartContract').getContractByAddressAndAbi(
                  t,
                  x.default
                );
              }
            },
            {
              key: '_proxyFactoryContract',
              value: function _proxyFactoryContract() {
                return this.get('smartContract').getContractByName(
                  _.VOTE_PROXY_FACTORY
                );
              }
            },
            {
              key: '_getProxyStatus',
              value:
                ((r = (0, p.default)(
                  u.default.mark(function _callee3(t) {
                    var r, i, a, l;
                    return u.default.wrap(
                      function _callee3$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (u.next = 2),
                                Promise.all([
                                  this._proxyFactoryContract().coldMap(t),
                                  this._proxyFactoryContract().hotMap(t)
                                ])
                              );
                            case 2:
                              if (
                                ((r = u.sent),
                                (i = (0, c.default)(r, 2)),
                                (a = i[0]),
                                (l = i[1]),
                                a === _.ZERO_ADDRESS)
                              ) {
                                u.next = 8;
                                break;
                              }
                              return u.abrupt('return', {
                                role: 'cold',
                                address: a,
                                hasProxy: !0
                              });
                            case 8:
                              if (l === _.ZERO_ADDRESS) {
                                u.next = 10;
                                break;
                              }
                              return u.abrupt('return', {
                                role: 'hot',
                                address: l,
                                hasProxy: !0
                              });
                            case 10:
                              return u.abrupt('return', {
                                role: null,
                                address: '',
                                hasProxy: !1
                              });
                            case 11:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee3,
                      this
                    );
                  })
                )),
                function _getProxyStatus(t) {
                  return r.apply(this, arguments);
                })
            },
            {
              key: '_getAddressOfRole',
              value: function _getAddressOfRole(t, r) {
                return 'hot' === r
                  ? this._proxyContract(t).hot()
                  : 'cold' === r
                  ? this._proxyContract(t).cold()
                  : null;
              }
            }
          ]),
          VoteProxyService
        );
      })(m.LocalService);
      (r.default = O),
        Object.assign(
          O.prototype,
          ['getVotedSlate', 'getNumDeposits'].reduce(function(t, r) {
            return (
              (t[r] = function() {
                var t;
                return (t = this.get('chief'))[r].apply(t, arguments);
              }),
              t
            );
          }, {})
        );
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(3)),
        c = a(i(4)),
        l = (function() {
          function VoteProxy(t) {
            var r = t.voteProxyService,
              i = t.proxyAddress,
              a = t.coldAddress,
              c = t.hotAddress;
            (0, u.default)(this, VoteProxy),
              (this._voteProxyService = r),
              (this._proxyAddress = i),
              (this._coldAddress = a),
              (this._hotAddress = c);
          }
          return (
            (0, c.default)(VoteProxy, [
              {
                key: 'getProxyAddress',
                value: function getProxyAddress() {
                  return this._proxyAddress;
                }
              },
              {
                key: 'getColdAddress',
                value: function getColdAddress() {
                  return this._coldAddress;
                }
              },
              {
                key: 'getHotAddress',
                value: function getHotAddress() {
                  return this._hotAddress;
                }
              }
            ]),
            VoteProxy
          );
        })();
      r.default = l;
      Object.assign(
        l.prototype,
        [
          'lock',
          'free',
          'voteExec',
          'getNumDeposits',
          'getVotedProposalAddresses'
        ].reduce(function(t, r) {
          return (
            (t[r] = function() {
              for (
                var t, i = arguments.length, a = new Array(i), u = 0;
                u < i;
                u++
              )
                a[u] = arguments[u];
              return (t = this._voteProxyService)[r].apply(
                t,
                [this._proxyAddress].concat(a)
              );
            }),
            t
          );
        }, {})
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"gov","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cold","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"freeAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"iou","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"slate","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"free","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"lock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hot","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"yays","type":"address[]"}],"name":"vote","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"chief","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_chief","type":"address"},{"name":"_cold","type":"address"},{"name":"_hot","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
      );
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(3)),
        c = a(i(4)),
        l = a(i(14)),
        p = a(i(15)),
        d = a(i(16)),
        y = i(17),
        h = i(5),
        v = a(i(153));
      function _createSuper(t) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var i,
            a = (0, d.default)(t);
          if (r) {
            var u = (0, d.default)(this).constructor;
            i = Reflect.construct(a, arguments, u);
          } else i = a.apply(this, arguments);
          return (0, p.default)(this, i);
        };
      }
      var g = (function(t) {
        (0, l.default)(VoteProxyFactoryService, t);
        var r = _createSuper(VoteProxyFactoryService);
        function VoteProxyFactoryService() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'voteProxyFactory';
          return (
            (0, u.default)(this, VoteProxyFactoryService),
            r.call(this, t, [
              'smartContract',
              'voteProxy',
              'transactionManager'
            ])
          );
        }
        return (
          (0, c.default)(VoteProxyFactoryService, [
            {
              key: 'initiateLink',
              value: function initiateLink(t) {
                return this._proxyFactoryContract().initiateLink(t);
              }
            },
            {
              key: 'approveLink',
              value: function approveLink(t) {
                return new v.default(
                  this._proxyFactoryContract(),
                  this.get('transactionManager')
                ).build('approveLink', [t]);
              }
            },
            {
              key: 'breakLink',
              value: function breakLink() {
                return this._proxyFactoryContract().breakLink();
              }
            },
            {
              key: 'getVoteProxy',
              value: function getVoteProxy(t) {
                return this.get('voteProxy').getVoteProxy(t);
              }
            },
            {
              key: '_proxyFactoryContract',
              value: function _proxyFactoryContract() {
                return this.get('smartContract').getContractByName(
                  h.VOTE_PROXY_FACTORY
                );
              }
            }
          ]),
          VoteProxyFactoryService
        );
      })(y.LocalService);
      r.default = g;
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(10)),
        c = a(i(48)),
        l = a(i(11)),
        p = a(i(3)),
        d = a(i(4)),
        y = (function() {
          function ApproveLinkTransaction(t, r) {
            (0, p.default)(this, ApproveLinkTransaction),
              (this._contract = t),
              (this._txMgr = r);
          }
          return (
            (0, d.default)(ApproveLinkTransaction, [
              {
                key: 'fees',
                get: function get() {
                  return this._txMgr.getTransaction(this.promise).fees();
                }
              },
              {
                key: 'timeStamp',
                get: function get() {
                  return this._txMgr.getTransaction(this.promise).timeStamp();
                }
              },
              {
                key: 'timeStampSubmitted',
                get: function get() {
                  return this._txMgr
                    .getTransaction(this.promise)
                    .timeStampSubmitted();
                }
              },
              {
                key: 'build',
                value: function build(t, r) {
                  var i = this,
                    a = (0, l.default)(
                      u.default.mark(function _callee() {
                        var l, p;
                        return u.default.wrap(function _callee$(u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                return (u.next = 2), 0;
                              case 2:
                                return (
                                  (u.next = 4),
                                  (l = i._contract)[t].apply(
                                    l,
                                    [].concat((0, c.default)(r), [
                                      { promise: a }
                                    ])
                                  )
                                );
                              case 4:
                                return (
                                  (p = u.sent),
                                  i._parseLogs(p.receipt.logs),
                                  u.abrupt('return', i)
                                );
                              case 7:
                              case 'end':
                                return u.stop();
                            }
                        }, _callee);
                      })
                    )();
                  return (this.promise = a), a;
                }
              },
              {
                key: '_parseLogs',
                value: function _parseLogs(t) {
                  var r = this._contract.interface.events.LinkConfirmed,
                    i = this._txMgr.get('web3')._web3,
                    a = i.utils.keccak256(i.utils.toHex(r.signature)),
                    u = t.filter(function(t) {
                      return t.topics[0].toLowerCase() === a.toLowerCase();
                    }),
                    c = r.parse(u[0].topics, u[0].data);
                  this.proxyAddress = c.voteProxy;
                }
              }
            ]),
            ApproveLinkTransaction
          );
        })();
      r.default = y;
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(10)),
        c = a(i(22)),
        l = a(i(11)),
        p = a(i(3)),
        d = a(i(4)),
        y = a(i(14)),
        h = a(i(15)),
        v = a(i(16)),
        g = i(17),
        m = i(5),
        b = i(23),
        _ = i(155);
      function _createSuper(t) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var i,
            a = (0, v.default)(t);
          if (r) {
            var u = (0, v.default)(this).constructor;
            i = Reflect.construct(a, arguments, u);
          } else i = a.apply(this, arguments);
          return (0, h.default)(this, i);
        };
      }
      var w = (function(t) {
        (0, y.default)(GovPollingService, t);
        var r,
          i,
          a,
          h,
          v,
          g,
          w,
          x,
          O,
          S,
          k,
          E,
          A,
          T,
          N,
          P,
          C,
          I,
          B = _createSuper(GovPollingService);
        function GovPollingService() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'govPolling';
          return (
            (0, p.default)(this, GovPollingService),
            B.call(this, t, [
              'smartContract',
              'govQueryApi',
              'token',
              'chief',
              'voteProxy'
            ])
          );
        }
        return (
          (0, d.default)(GovPollingService, [
            {
              key: 'createPoll',
              value:
                ((I = (0, l.default)(
                  u.default.mark(function _callee(t, r, i, a) {
                    var c, l;
                    return u.default.wrap(
                      function _callee$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (u.next = 2),
                                this._pollingContract().createPoll(t, r, i, a)
                              );
                            case 2:
                              return (
                                (c = u.sent),
                                (l = parseInt(c.receipt.logs[0].topics[2])),
                                u.abrupt('return', l)
                              );
                            case 5:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee,
                      this
                    );
                  })
                )),
                function createPoll(t, r, i, a) {
                  return I.apply(this, arguments);
                })
            },
            {
              key: 'withdrawPoll',
              value: function withdrawPoll(t) {
                return this._pollingContract().withdrawPoll(t);
              }
            },
            {
              key: 'vote',
              value: function vote(t, r) {
                if (t.length !== r.length || 0 === t.length)
                  throw new Error(
                    'poll id array and option id array must be the same length and have a non-zero number of elements'
                  );
                var i = r.map(function(t) {
                  if (!Array.isArray(t)) return t;
                  if (1 === t.length) return t[0];
                  var r = new Uint8Array(32);
                  return (
                    t.forEach(function(t, i) {
                      r[r.length - i - 1] = t;
                    }),
                    (0, b.fromBuffer)(r).toString()
                  );
                });
                if (1 === t.length) {
                  return this._batchPollingContract()['vote(uint256,uint256)'](
                    t[0],
                    i[0]
                  );
                }
                return this._batchPollingContract()[
                  'vote(uint256[],uint256[])'
                ](t, i);
              }
            },
            {
              key: 'voteRankedChoice',
              value: function voteRankedChoice(t, r) {
                var i = new Uint8Array(32);
                r.forEach(function(t, r) {
                  i[i.length - r - 1] = t + 1;
                });
                var a = (0, b.fromBuffer)(i).toString();
                return this._batchPollingContract().vote(t, a);
              }
            },
            {
              key: 'voteLegacy',
              value: function voteLegacy(t, r) {
                return this._pollingContract().vote(t, r);
              }
            },
            {
              key: 'voteRankedChoiceLegacy',
              value: function voteRankedChoiceLegacy(t, r) {
                var i = new Uint8Array(32);
                r.forEach(function(t, r) {
                  i[i.length - r - 1] = t + 1;
                });
                var a = (0, b.fromBuffer)(i).toString();
                return this._pollingContract().vote(t, a);
              }
            },
            {
              key: '_pollingContract',
              value: function _pollingContract() {
                return this.get('smartContract').getContractByName(m.POLLING);
              }
            },
            {
              key: '_batchPollingContract',
              value: function _batchPollingContract() {
                return this.get('smartContract').getContractByName(
                  m.BATCH_POLLING
                );
              }
            },
            {
              key: 'getPoll',
              value:
                ((C = (0, l.default)(
                  u.default.mark(function _callee2(t) {
                    var r, i, a, c, l;
                    return u.default.wrap(
                      function _callee2$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (u.next = 2), this.getAllWhitelistedPolls()
                              );
                            case 2:
                              for (
                                r = u.sent,
                                  i = r.filter(function(r) {
                                    return r.multiHash === t;
                                  }),
                                  a = 1 / 0,
                                  l = 0;
                                l < i.length;
                                l++
                              )
                                i[l].pollId < a &&
                                  ((a = i[l].pollId), (c = i[l]));
                              return u.abrupt('return', c);
                            case 7:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee2,
                      this
                    );
                  })
                )),
                function getPoll(t) {
                  return C.apply(this, arguments);
                })
            },
            {
              key: '_getPoll',
              value:
                ((P = (0, l.default)(
                  u.default.mark(function _callee3(t) {
                    var r;
                    return u.default.wrap(
                      function _callee3$(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (i.next = 2), this.getAllWhitelistedPolls()
                              );
                            case 2:
                              return (
                                (r = i.sent),
                                i.abrupt(
                                  'return',
                                  r.find(function(r) {
                                    return parseInt(r.pollId) === parseInt(t);
                                  })
                                )
                              );
                            case 4:
                            case 'end':
                              return i.stop();
                          }
                      },
                      _callee3,
                      this
                    );
                  })
                )),
                function _getPoll(t) {
                  return P.apply(this, arguments);
                })
            },
            {
              key: 'getAllWhitelistedPolls',
              value:
                ((N = (0, l.default)(
                  u.default.mark(function _callee4() {
                    return u.default.wrap(
                      function _callee4$(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!this.polls) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt('return', this.polls);
                            case 2:
                              return (
                                (t.next = 4),
                                this.get('govQueryApi').getAllWhitelistedPolls()
                              );
                            case 4:
                              return (
                                (this.polls = t.sent),
                                t.abrupt('return', this.polls)
                              );
                            case 6:
                            case 'end':
                              return t.stop();
                          }
                      },
                      _callee4,
                      this
                    );
                  })
                )),
                function getAllWhitelistedPolls() {
                  return N.apply(this, arguments);
                })
            },
            {
              key: 'refresh',
              value: function refresh() {
                this.polls = null;
              }
            },
            {
              key: 'getOptionVotingFor',
              value:
                ((T = (0, l.default)(
                  u.default.mark(function _callee5(t, r) {
                    return u.default.wrap(
                      function _callee5$(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return i.abrupt(
                                'return',
                                this.get('govQueryApi').getOptionVotingFor(
                                  t.toLowerCase(),
                                  r
                                )
                              );
                            case 1:
                            case 'end':
                              return i.stop();
                          }
                      },
                      _callee5,
                      this
                    );
                  })
                )),
                function getOptionVotingFor(t, r) {
                  return T.apply(this, arguments);
                })
            },
            {
              key: 'getOptionVotingForRankedChoice',
              value:
                ((A = (0, l.default)(
                  u.default.mark(function _callee6(t, r) {
                    var i, a, c;
                    return u.default.wrap(
                      function _callee6$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (u.next = 2),
                                this.get(
                                  'govQueryApi'
                                ).getOptionVotingForRankedChoice(
                                  t.toLowerCase(),
                                  r
                                )
                              );
                            case 2:
                              if ((i = u.sent)) {
                                u.next = 5;
                                break;
                              }
                              return u.abrupt('return', []);
                            case 5:
                              return (
                                (a = (0, b.toBuffer)(i, { endian: 'little' })),
                                (c = (0, b.paddedArray)(32 - a.length, a)),
                                u.abrupt(
                                  'return',
                                  c.reverse().filter(function(t) {
                                    return 0 !== t && '0' !== t;
                                  })
                                )
                              );
                            case 8:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee6,
                      this
                    );
                  })
                )),
                function getOptionVotingForRankedChoice(t, r) {
                  return A.apply(this, arguments);
                })
            },
            {
              key: 'getAllOptionsVotingFor',
              value:
                ((E = (0, l.default)(
                  u.default.mark(function _callee7(t) {
                    var r;
                    return u.default.wrap(
                      function _callee7$(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (i.next = 2),
                                this.get('govQueryApi').getAllOptionsVotingFor(
                                  t.toLowerCase()
                                )
                              );
                            case 2:
                              if ((r = i.sent)) {
                                i.next = 5;
                                break;
                              }
                              return i.abrupt('return', []);
                            case 5:
                              return i.abrupt(
                                'return',
                                r.map(function(t) {
                                  var r = null;
                                  if (t.optionIdRaw) {
                                    var i = (0, b.toBuffer)(t.optionIdRaw, {
                                      endian: 'little'
                                    });
                                    r = (0, b.paddedArray)(32 - i.length, i)
                                      .reverse()
                                      .filter(function(t) {
                                        return 0 !== t && '0' !== t;
                                      });
                                  }
                                  return {
                                    pollId: t.pollId,
                                    option: t.optionId,
                                    rankedChoiceOption: r
                                  };
                                })
                              );
                            case 6:
                            case 'end':
                              return i.stop();
                          }
                      },
                      _callee7,
                      this
                    );
                  })
                )),
                function getAllOptionsVotingFor(t) {
                  return E.apply(this, arguments);
                })
            },
            {
              key: 'getNumUniqueVoters',
              value:
                ((k = (0, l.default)(
                  u.default.mark(function _callee8(t) {
                    return u.default.wrap(
                      function _callee8$(r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return r.abrupt(
                                'return',
                                this.get('govQueryApi').getNumUniqueVoters(t)
                              );
                            case 1:
                            case 'end':
                              return r.stop();
                          }
                      },
                      _callee8,
                      this
                    );
                  })
                )),
                function getNumUniqueVoters(t) {
                  return k.apply(this, arguments);
                })
            },
            {
              key: 'getMkrWeight',
              value:
                ((S = (0, l.default)(
                  u.default.mark(function _callee9(t) {
                    var r;
                    return u.default.wrap(
                      function _callee9$(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (i.next = 2),
                                this.get('govQueryApi').getMkrWeight(
                                  t.toLowerCase(),
                                  2147483647
                                )
                              );
                            case 2:
                              return (
                                (r = i.sent), i.abrupt('return', (0, m.MKR)(r))
                              );
                            case 4:
                            case 'end':
                              return i.stop();
                          }
                      },
                      _callee9,
                      this
                    );
                  })
                )),
                function getMkrWeight(t) {
                  return S.apply(this, arguments);
                })
            },
            {
              key: 'getMkrWeightFromChain',
              value:
                ((O = (0, l.default)(
                  u.default.mark(function _callee10(t) {
                    var r, i, a, c, l, p, d;
                    return u.default.wrap(
                      function _callee10$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (u.next = 2),
                                this.get('voteProxy').getVoteProxy(t)
                              );
                            case 2:
                              return (
                                (r = u.sent),
                                (i = r.hasProxy),
                                (a = r.voteProxy),
                                (c = [
                                  this.get('token')
                                    .getToken(m.MKR)
                                    .balanceOf(t),
                                  this.get('chief').getNumDeposits(t)
                                ]),
                                i &&
                                  ((l =
                                    t.toLowerCase() ===
                                    a.getHotAddress().toLowerCase()
                                      ? a.getColdAddress()
                                      : a.getHotAddress()),
                                  (c = c.concat([
                                    this.get('token')
                                      .getToken(m.MKR)
                                      .balanceOf(l),
                                    this.get('chief').getNumDeposits(l),
                                    this.get('chief').getNumDeposits(
                                      a.getProxyAddress()
                                    )
                                  ]))),
                                (u.next = 9),
                                Promise.all(c)
                              );
                            case 9:
                              return (
                                (p = u.sent),
                                (d = p.reduce(function(t, r) {
                                  return t.plus(r);
                                }, (0, m.MKR)(0))),
                                u.abrupt('return', {
                                  mkrBalance: p[0],
                                  chiefBalance: p[1],
                                  linkedMkrBalance: i ? p[2] : null,
                                  linkedChiefBalance: i ? p[3] : null,
                                  proxyChiefBalance: i ? p[4] : null,
                                  total: d
                                })
                              );
                            case 12:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee10,
                      this
                    );
                  })
                )),
                function getMkrWeightFromChain(t) {
                  return O.apply(this, arguments);
                })
            },
            {
              key: 'getMkrAmtVoted',
              value:
                ((x = (0, l.default)(
                  u.default.mark(function _callee11(t) {
                    var r, i, a, c;
                    return u.default.wrap(
                      function _callee11$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (u.next = 2), this._getPoll(t);
                            case 2:
                              return (
                                (r = u.sent),
                                (i = r.endDate),
                                (a = Math.floor(i / 1e3)),
                                (u.next = 7),
                                this.get('govQueryApi').getMkrSupport(t, a)
                              );
                            case 7:
                              return (
                                (c = u.sent),
                                u.abrupt(
                                  'return',
                                  (0, m.MKR)(
                                    c.reduce(function(t, r) {
                                      return t + r.mkrSupport;
                                    }, 0)
                                  )
                                )
                              );
                            case 9:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee11,
                      this
                    );
                  })
                )),
                function getMkrAmtVoted(t) {
                  return x.apply(this, arguments);
                })
            },
            {
              key: 'getMkrAmtVotedRankedChoice',
              value:
                ((w = (0, l.default)(
                  u.default.mark(function _callee12(t) {
                    var r, i, a, c;
                    return u.default.wrap(
                      function _callee12$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (u.next = 2), this._getPoll(t);
                            case 2:
                              return (
                                (r = u.sent),
                                (i = r.endDate),
                                (a = Math.floor(i / 1e3)),
                                (u.next = 7),
                                this.get(
                                  'govQueryApi'
                                ).getMkrSupportRankedChoice(t, a)
                              );
                            case 7:
                              return (
                                (c = u.sent),
                                u.abrupt(
                                  'return',
                                  (0, m.MKR)(
                                    c.reduce(function(t, r) {
                                      return t + parseFloat(r.mkrSupport);
                                    }, 0)
                                  )
                                )
                              );
                            case 9:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee12,
                      this
                    );
                  })
                )),
                function getMkrAmtVotedRankedChoice(t) {
                  return w.apply(this, arguments);
                })
            },
            {
              key: 'getTallyRankedChoiceIrv',
              value:
                ((g = (0, l.default)(
                  u.default.mark(function _callee13(t) {
                    var r, i, a, c;
                    return u.default.wrap(
                      function _callee13$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (u.next = 2), this._getPoll(t);
                            case 2:
                              return (
                                (r = u.sent),
                                (i = r.endDate),
                                (a = Math.floor(i / 1e3)),
                                (u.next = 7),
                                this.get(
                                  'govQueryApi'
                                ).getMkrSupportRankedChoice(t, a)
                              );
                            case 7:
                              return (
                                (c = u.sent), u.abrupt('return', this.runoff(c))
                              );
                            case 9:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee13,
                      this
                    );
                  })
                )),
                function getTallyRankedChoiceIrv(t) {
                  return g.apply(this, arguments);
                })
            },
            {
              key: 'runoff',
              value: function runoff(t) {
                return (0, _.rankedChoiceIRV)(t);
              }
            },
            {
              key: 'getPercentageMkrVoted',
              value:
                ((v = (0, l.default)(
                  u.default.mark(function _callee14(t) {
                    var r, i, a, l;
                    return u.default.wrap(
                      function _callee14$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (u.next = 2),
                                Promise.all([
                                  this.getMkrAmtVoted(t),
                                  this.get('token')
                                    .getToken(m.MKR)
                                    .totalSupply()
                                ])
                              );
                            case 2:
                              return (
                                (r = u.sent),
                                (i = (0, c.default)(r, 2)),
                                (a = i[0]),
                                (l = i[1]),
                                u.abrupt(
                                  'return',
                                  a
                                    .div(l)
                                    .times(100)
                                    .toNumber()
                                )
                              );
                            case 7:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee14,
                      this
                    );
                  })
                )),
                function getPercentageMkrVoted(t) {
                  return v.apply(this, arguments);
                })
            },
            {
              key: 'getPercentageMkrVotedRankedChoice',
              value:
                ((h = (0, l.default)(
                  u.default.mark(function _callee15(t) {
                    var r, i, a, l;
                    return u.default.wrap(
                      function _callee15$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (u.next = 2),
                                Promise.all([
                                  this.getMkrAmtVotedRankedChoice(t),
                                  this.get('token')
                                    .getToken(m.MKR)
                                    .totalSupply()
                                ])
                              );
                            case 2:
                              return (
                                (r = u.sent),
                                (i = (0, c.default)(r, 2)),
                                (a = i[0]),
                                (l = i[1]),
                                u.abrupt(
                                  'return',
                                  a
                                    .div(l)
                                    .times(100)
                                    .toNumber()
                                )
                              );
                            case 7:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee15,
                      this
                    );
                  })
                )),
                function getPercentageMkrVotedRankedChoice(t) {
                  return h.apply(this, arguments);
                })
            },
            {
              key: 'getWinningProposal',
              value:
                ((a = (0, l.default)(
                  u.default.mark(function _callee16(t) {
                    var r, i, a, c, l, p;
                    return u.default.wrap(
                      function _callee16$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (u.next = 2), this._getPoll(t);
                            case 2:
                              return (
                                (r = u.sent),
                                (i = r.endDate),
                                (a = Math.floor(i / 1e3)),
                                (u.next = 7),
                                this.get('govQueryApi').getMkrSupport(t, a)
                              );
                            case 7:
                              for (
                                c = u.sent, l = c[0], p = 1;
                                p < c.length;
                                p++
                              )
                                c[p].mkrSupport > l.mkrSupport && (l = c[p]);
                              return u.abrupt('return', l ? l.optionId : 0);
                            case 11:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee16,
                      this
                    );
                  })
                )),
                function getWinningProposal(t) {
                  return a.apply(this, arguments);
                })
            },
            {
              key: 'getVoteLogs',
              value:
                ((i = (0, l.default)(
                  u.default.mark(function _callee17() {
                    var t,
                      r,
                      i,
                      a = arguments;
                    return u.default.wrap(
                      function _callee17$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (t =
                                  a.length > 0 && void 0 !== a[0] ? a[0] : 0),
                                (r =
                                  a.length > 1 && void 0 !== a[1]
                                    ? a[1]
                                    : 'latest'),
                                (i = this.get('smartContract').get('web3')),
                                u.abrupt(
                                  'return',
                                  i.getPastLogs({
                                    address: this._batchPollingContract()
                                      .address,
                                    toBlock: r,
                                    fromBlock: t
                                  })
                                )
                              );
                            case 4:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee17,
                      this
                    );
                  })
                )),
                function getVoteLogs() {
                  return i.apply(this, arguments);
                })
            },
            {
              key: 'getCompletedPolls',
              value:
                ((r = (0, l.default)(
                  u.default.mark(function _callee18(t) {
                    var r,
                      i = this;
                    return u.default.wrap(
                      function _callee18$(a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (r = []), (a.next = 3), this.getVoteLogs();
                            case 3:
                              return (
                                a.sent.map(function(a) {
                                  if (
                                    '0x'.concat(a.topics[1].slice(-40)) === t
                                  ) {
                                    var u = parseInt(a.topics[3]),
                                      c = [];
                                    u > 100 &&
                                      (c = i._decodeRankedChoiceOptions(
                                        a.topics[3]
                                      )),
                                      r.push({
                                        pollId: parseInt(a.topics[2]),
                                        option: u,
                                        rankedChoiceOption: c
                                      });
                                  }
                                }),
                                a.abrupt('return', r)
                              );
                            case 6:
                            case 'end':
                              return a.stop();
                          }
                      },
                      _callee18,
                      this
                    );
                  })
                )),
                function getCompletedPolls(t) {
                  return r.apply(this, arguments);
                })
            },
            {
              key: '_decodeRankedChoiceOptions',
              value: function _decodeRankedChoiceOptions(t) {
                var r = [];
                return (
                  (t = t.match(/.{1,2}/g).reverse()).map(function(t) {
                    (t = parseInt(t)) > 0 && r.push(t);
                  }),
                  r
                );
              }
            }
          ]),
          GovPollingService
        );
      })(g.PrivateService);
      r.default = w;
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.rankedChoiceIRVAlt = r.rankedChoiceIRV = void 0);
      var u = a(i(32)),
        c = a(i(22)),
        l = a(i(24)),
        p = a(i(73));
      function ownKeys(t, r) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          r &&
            (a = a.filter(function(r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            i.push.apply(i, a);
        }
        return i;
      }
      function _objectSpread(t) {
        for (var r = 1; r < arguments.length; r++) {
          var i = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(i), !0).forEach(function(r) {
                (0, l.default)(t, r, i[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ownKeys(Object(i)).forEach(function(r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(i, r)
                );
              });
        }
        return t;
      }
      r.rankedChoiceIRV = function rankedChoiceIRV(t) {
        var r = t.reduce(function(t, r) {
            return (0, p.default)(r.mkrSupport || 0).plus(t);
          }, (0, p.default)(0)),
          i = {
            rounds: 1,
            winner: null,
            totalMkrParticipation: r,
            options: {},
            numVoters: t.length
          },
          a = {
            firstChoice: (0, p.default)(0),
            transfer: (0, p.default)(0),
            winner: !1,
            eliminated: !1
          };
        if (0 === t.length) return i;
        if (
          (t.forEach(function(t) {
            (t.choice = t.ballot.pop()),
              i.options[t.choice] ||
                (i.options[t.choice] = _objectSpread({}, a)),
              (i.options[t.choice].firstChoice = (0, p.default)(
                i.options[t.choice].firstChoice
              ).plus(t.mkrSupport || 0));
          }),
          Object.entries(i.options).forEach(function(t) {
            var a = (0, c.default)(t, 2),
              u = a[0];
            a[1].firstChoice.gt(r.div(2)) && (i.winner = u);
          }),
          i.winner)
        )
          return (i.options[i.winner].winner = !0), i;
        for (
          var l = function _loop() {
            i.rounds++;
            var u = Object.entries(i.options)
                .filter(function(t) {
                  return !(0, c.default)(t, 2)[1].eliminated;
                })
                .reduce(function(t, r) {
                  var i = (0, c.default)(t, 2)[1],
                    a = (0, c.default)(r, 2)[1];
                  return a.firstChoice
                    .plus(a.transfer)
                    .lt(i.firstChoice.plus(i.transfer))
                    ? r
                    : t;
                }),
              l = (0, c.default)(u, 1)[0];
            (i.options[l].eliminated = !0),
              t
                .map(function(t, r) {
                  return _objectSpread(_objectSpread({}, t), {}, { index: r });
                })
                .filter(function(t) {
                  return parseInt(t.choice) === parseInt(l);
                })
                .filter(function(t) {
                  return 0 !== t.ballot[t.ballot.length - 1];
                })
                .forEach(function(r) {
                  var u = t[r.index].choice;
                  if (
                    ((t[r.index].choice = t[r.index].ballot.pop()),
                    i.options[t[r.index].choice] ||
                      (i.options[t[r.index].choice] = _objectSpread({}, a)),
                    i.options[t[r.index].choice].eliminated)
                  ) {
                    t[r.index].choice = t[r.index].ballot.pop();
                    for (var c = !1; 0 !== t[r.index].choice; ) {
                      if (
                        (i.options[t[r.index].choice] ||
                          (i.options[t[r.index].choice] = _objectSpread({}, a)),
                        !i.options[t[r.index].choice].eliminated)
                      ) {
                        c = !0;
                        break;
                      }
                      t[r.index].choice = t[r.index].ballot.pop();
                    }
                    if (!c) return;
                  }
                  i.options[t[r.index].choice].eliminated ||
                    ((i.options[t[r.index].choice].transfer = (0, p.default)(
                      i.options[t[r.index].choice].transfer
                    ).plus(r.mkrSupport || 0)),
                    (i.options[u].transfer = (0, p.default)(
                      i.options[u].transfer
                    ).minus(r.mkrSupport || 0)));
                }),
              Object.entries(i.options).forEach(function(t) {
                var a = (0, c.default)(t, 2),
                  u = a[0],
                  l = a[1],
                  p = l.firstChoice,
                  d = l.transfer;
                p.plus(d).gt(r.div(2)) && (i.winner = u);
              });
            var d = Object.entries(i.options).filter(function(t) {
              return !(0, c.default)(t, 2)[1].eliminated;
            }).length;
            if ((i.rounds > 32 || 1 === d) && !i.winner) return { v: i };
            if (2 === Object.keys(i.options).length && !i.winner)
              return { v: i };
            if (1 === Object.keys(i.options).length)
              throw new Error('Invalid ranked choice tally '.concat(i.options));
          };
          !i.winner;

        ) {
          var d = l();
          if ('object' === (0, u.default)(d)) return d.v;
        }
        return (i.options[i.winner].winner = !0), i;
      };
      r.rankedChoiceIRVAlt = function rankedChoiceIRVAlt(t) {
        var r = t.reduce(function(t, r) {
            return (0, p.default)(r.mkrSupport || 0).plus(t);
          }, (0, p.default)(0)),
          i = {
            rounds: 1,
            winner: null,
            totalMkrParticipation: r,
            options: {},
            numVoters: t.length
          },
          a = {
            firstChoice: (0, p.default)(0),
            transfer: (0, p.default)(0),
            winner: !1,
            eliminated: !1
          };
        if (0 === t.length) return i;
        if (
          (t.forEach(function(t) {
            (t.choice = t.ballot.pop()),
              i.options[t.choice] ||
                (i.options[t.choice] = _objectSpread({}, a)),
              (i.options[t.choice].firstChoice = (0, p.default)(
                i.options[t.choice].firstChoice
              ).plus(t.mkrSupport || 0));
          }),
          Object.entries(i.options).forEach(function(t) {
            var a = (0, c.default)(t, 2),
              u = a[0];
            a[1].firstChoice.gt(r.div(2)) && (i.winner = u);
          }),
          i.winner)
        )
          return (i.options[i.winner].winner = !0), i;
        for (
          var l = function _loop2() {
            i.rounds++;
            var u = Object.entries(i.options).filter(function(t) {
                return !(0, c.default)(t, 2)[1].eliminated;
              }),
              l = u.reduce(function(t, r) {
                var i = (0, c.default)(t, 2)[1],
                  a = (0, c.default)(r, 2)[1];
                return a.firstChoice
                  .plus(a.transfer)
                  .lt(i.firstChoice.plus(i.transfer))
                  ? r
                  : t;
              }),
              d = (0, c.default)(l, 1)[0];
            if (
              ((i.options[d].eliminated = !0),
              t
                .map(function(t, r) {
                  return _objectSpread(_objectSpread({}, t), {}, { index: r });
                })
                .filter(function(t) {
                  return parseInt(t.choice) === parseInt(d);
                })
                .filter(function(t) {
                  return 0 !== t.ballot[t.ballot.length - 1];
                })
                .forEach(function(r) {
                  var u = t[r.index].choice;
                  if (
                    ((t[r.index].choice = t[r.index].ballot.pop()),
                    i.options[t[r.index].choice] ||
                      (i.options[t[r.index].choice] = _objectSpread({}, a)),
                    i.options[t[r.index].choice].eliminated)
                  ) {
                    t[r.index].choice = t[r.index].ballot.pop();
                    for (var c = !1; 0 !== t[r.index].choice; ) {
                      if (
                        (i.options[t[r.index].choice] ||
                          (i.options[t[r.index].choice] = _objectSpread({}, a)),
                        !i.options[t[r.index].choice].eliminated)
                      ) {
                        c = !0;
                        break;
                      }
                      t[r.index].choice = t[r.index].ballot.pop();
                    }
                    if (!c) return;
                  }
                  i.options[t[r.index].choice].eliminated ||
                    ((i.options[t[r.index].choice].transfer = (0, p.default)(
                      i.options[t[r.index].choice].transfer
                    ).plus(r.mkrSupport || 0)),
                    (i.options[u].transfer = (0, p.default)(
                      i.options[u].transfer
                    ).minus(r.mkrSupport || 0)));
                }),
              Object.entries(i.options).forEach(function(t) {
                var a = (0, c.default)(t, 2),
                  u = a[0],
                  l = a[1],
                  p = l.firstChoice,
                  d = l.transfer;
                p.plus(d).gt(r.div(2)) && (i.winner = u);
              }),
              (i.rounds > 32 && !i.winner) ||
                ((1 === u.length || 0 === u.length) && !i.winner))
            ) {
              var y,
                h = (0, p.default)(0);
              Object.entries(i.options).forEach(function(t) {
                var r = (0, c.default)(t, 2),
                  i = r[0],
                  a = r[1],
                  u = a.firstChoice,
                  l = a.transfer;
                u.plus(l).gt(h) && ((h = u.plus(l)), (y = i));
              }),
                (i.winner = y);
            }
            if (2 === Object.keys(i.options).length) return { v: i };
            if (1 === Object.keys(i.options).length)
              throw new Error('Invalid ranked choice tally '.concat(i.options));
          };
          !i.winner;

        ) {
          var d = l();
          if ('object' === (0, u.default)(d)) return d.v;
        }
        return (i.options[i.winner].winner = !0), i;
      };
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(10)),
        c = a(i(24)),
        l = a(i(11)),
        p = a(i(3)),
        d = a(i(4)),
        y = a(i(14)),
        h = a(i(15)),
        v = a(i(16)),
        g = i(17),
        m = a(i(75)),
        b = i(23);
      function ownKeys(t, r) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          r &&
            (a = a.filter(function(r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            i.push.apply(i, a);
        }
        return i;
      }
      function _objectSpread(t) {
        for (var r = 1; r < arguments.length; r++) {
          var i = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(i), !0).forEach(function(r) {
                (0, c.default)(t, r, i[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ownKeys(Object(i)).forEach(function(r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(i, r)
                );
              });
        }
        return t;
      }
      function _createSuper(t) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var i,
            a = (0, v.default)(t);
          if (r) {
            var u = (0, v.default)(this).constructor;
            i = Reflect.construct(a, arguments, u);
          } else i = a.apply(this, arguments);
          return (0, h.default)(this, i);
        };
      }
      var _ = (function(t) {
        (0, y.default)(QueryApi, t);
        var r,
          i,
          a,
          c,
          h,
          v,
          g,
          _,
          w,
          x,
          O,
          S,
          k = _createSuper(QueryApi);
        function QueryApi() {
          var t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'govQueryApi';
          return (
            (0, p.default)(this, QueryApi),
            ((t = k.call(this, r, ['web3'])).queryPromises = {}),
            (t.staging = !1),
            t
          );
        }
        return (
          (0, d.default)(QueryApi, [
            {
              key: 'getQueryResponse',
              value:
                ((S = (0, l.default)(
                  u.default.mark(function _callee(t, r) {
                    var i, a, c;
                    return u.default.wrap(function _callee$(u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (
                              (u.next = 2),
                              fetch(t, {
                                method: 'POST',
                                headers: {
                                  Accept: 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ query: r })
                              })
                            );
                          case 2:
                            return (i = u.sent), (u.next = 5), i.json();
                          case 5:
                            return (
                              (a = u.sent),
                              (c = a.data),
                              (0, m.default)(
                                c,
                                'error fetching data from '.concat(t)
                              ),
                              u.abrupt('return', c)
                            );
                          case 9:
                          case 'end':
                            return u.stop();
                        }
                    }, _callee);
                  })
                )),
                function getQueryResponse(t, r) {
                  return S.apply(this, arguments);
                })
            },
            {
              key: 'getQueryResponseMemoized',
              value:
                ((O = (0, l.default)(
                  u.default.mark(function _callee2(t, r) {
                    var i;
                    return u.default.wrap(
                      function _callee2$(a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (
                                ((i = ''.concat(t, ';').concat(r)),
                                !this.queryPromises[i])
                              ) {
                                a.next = 3;
                                break;
                              }
                              return a.abrupt('return', this.queryPromises[i]);
                            case 3:
                              return (
                                (this.queryPromises[i] = this.getQueryResponse(
                                  t,
                                  r
                                )),
                                a.abrupt('return', this.queryPromises[i])
                              );
                            case 5:
                            case 'end':
                              return a.stop();
                          }
                      },
                      _callee2,
                      this
                    );
                  })
                )),
                function getQueryResponseMemoized(t, r) {
                  return O.apply(this, arguments);
                })
            },
            {
              key: 'initialize',
              value: function initialize(t) {
                t.staging && (this.staging = !0);
              }
            },
            {
              key: 'connect',
              value: function connect() {
                var t = this.get('web3').network;
                this.serverUrl = this.staging
                  ? (0, b.netIdtoSpockUrlStaging)(t)
                  : (0, b.netIdtoSpockUrl)(t);
              }
            },
            {
              key: 'getAllWhitelistedPolls',
              value:
                ((x = (0, l.default)(
                  u.default.mark(function _callee3() {
                    var t;
                    return u.default.wrap(
                      function _callee3$(r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (r.next = 3),
                                this.getQueryResponse(
                                  this.serverUrl,
                                  '{activePolls {\n      nodes {\n          creator\n          pollId\n          blockCreated\n          startDate\n          endDate\n          multiHash\n          url\n        }\n      }\n    }'
                                )
                              );
                            case 3:
                              return (
                                (t = r.sent),
                                r.abrupt(
                                  'return',
                                  t.activePolls.nodes.map(function(t) {
                                    return (
                                      (t.startDate = new Date(
                                        1e3 * t.startDate
                                      )),
                                      (t.endDate = new Date(1e3 * t.endDate)),
                                      t
                                    );
                                  })
                                )
                              );
                            case 5:
                            case 'end':
                              return r.stop();
                          }
                      },
                      _callee3,
                      this
                    );
                  })
                )),
                function getAllWhitelistedPolls() {
                  return x.apply(this, arguments);
                })
            },
            {
              key: 'getNumUniqueVoters',
              value:
                ((w = (0, l.default)(
                  u.default.mark(function _callee4(t) {
                    var r, i;
                    return u.default.wrap(
                      function _callee4$(a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = '{uniqueVoters(argPollId:'.concat(
                                  t,
                                  '){\n      nodes\n    }\n    }'
                                )),
                                (a.next = 3),
                                this.getQueryResponse(this.serverUrl, r)
                              );
                            case 3:
                              return (
                                (i = a.sent),
                                a.abrupt(
                                  'return',
                                  parseInt(i.uniqueVoters.nodes[0])
                                )
                              );
                            case 5:
                            case 'end':
                              return a.stop();
                          }
                      },
                      _callee4,
                      this
                    );
                  })
                )),
                function getNumUniqueVoters(t) {
                  return w.apply(this, arguments);
                })
            },
            {
              key: 'getMkrWeight',
              value:
                ((_ = (0, l.default)(
                  u.default.mark(function _callee5(t, r) {
                    var i, a;
                    return u.default.wrap(
                      function _callee5$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (i = '{totalMkrWeightProxyAndNoProxyByAddressAtTime(argAddress: "'
                                  .concat(t, '", argUnix: ')
                                  .concat(
                                    r,
                                    '){\n      nodes {\n        address\n        weight\n      }\n    }\n    }'
                                  )),
                                (u.next = 3),
                                this.getQueryResponse(this.serverUrl, i)
                              );
                            case 3:
                              if (
                                (a = u.sent)
                                  .totalMkrWeightProxyAndNoProxyByAddressAtTime
                                  .nodes[0]
                              ) {
                                u.next = 6;
                                break;
                              }
                              return u.abrupt('return', 0);
                            case 6:
                              return u.abrupt(
                                'return',
                                a.totalMkrWeightProxyAndNoProxyByAddressAtTime
                                  .nodes[0].weight
                              );
                            case 7:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee5,
                      this
                    );
                  })
                )),
                function getMkrWeight(t, r) {
                  return _.apply(this, arguments);
                })
            },
            {
              key: 'getOptionVotingFor',
              value:
                ((g = (0, l.default)(
                  u.default.mark(function _callee6(t, r) {
                    var i, a;
                    return u.default.wrap(
                      function _callee6$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (i = '{\n      currentVote(argAddress: "'
                                  .concat(t, '", argPollId: ')
                                  .concat(
                                    r,
                                    '){\n        nodes{\n          optionId\n        }\n      }\n    }'
                                  )),
                                (u.next = 3),
                                this.getQueryResponse(this.serverUrl, i)
                              );
                            case 3:
                              if ((a = u.sent).currentVote.nodes[0]) {
                                u.next = 6;
                                break;
                              }
                              return u.abrupt('return', null);
                            case 6:
                              return u.abrupt(
                                'return',
                                a.currentVote.nodes[0].optionId
                              );
                            case 7:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee6,
                      this
                    );
                  })
                )),
                function getOptionVotingFor(t, r) {
                  return g.apply(this, arguments);
                })
            },
            {
              key: 'getAllOptionsVotingFor',
              value:
                ((v = (0, l.default)(
                  u.default.mark(function _callee7(t) {
                    var r, i;
                    return u.default.wrap(
                      function _callee7$(a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = '{\n      allCurrentVotes(argAddress: "'.concat(
                                  t,
                                  '"){\n        nodes{\n          pollId\n          optionId\n          optionIdRaw\n        }\n      }\n    }'
                                )),
                                (a.next = 3),
                                this.getQueryResponse(this.serverUrl, r)
                              );
                            case 3:
                              if ((i = a.sent).allCurrentVotes.nodes[0]) {
                                a.next = 6;
                                break;
                              }
                              return a.abrupt('return', null);
                            case 6:
                              return a.abrupt(
                                'return',
                                i.allCurrentVotes.nodes
                              );
                            case 7:
                            case 'end':
                              return a.stop();
                          }
                      },
                      _callee7,
                      this
                    );
                  })
                )),
                function getAllOptionsVotingFor(t) {
                  return v.apply(this, arguments);
                })
            },
            {
              key: 'getOptionVotingForRankedChoice',
              value:
                ((h = (0, l.default)(
                  u.default.mark(function _callee8(t, r) {
                    var i, a;
                    return u.default.wrap(
                      function _callee8$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (i = '{\n      currentVoteRankedChoice(argAddress: "'
                                  .concat(t, '", argPollId: ')
                                  .concat(
                                    r,
                                    '){\n        nodes{\n          optionIdRaw\n        }\n      }\n    }'
                                  )),
                                (u.next = 3),
                                this.getQueryResponse(this.serverUrl, i)
                              );
                            case 3:
                              if (
                                (a = u.sent).currentVoteRankedChoice.nodes[0]
                              ) {
                                u.next = 6;
                                break;
                              }
                              return u.abrupt('return', null);
                            case 6:
                              return u.abrupt(
                                'return',
                                a.currentVoteRankedChoice.nodes[0].optionIdRaw
                              );
                            case 7:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee8,
                      this
                    );
                  })
                )),
                function getOptionVotingForRankedChoice(t, r) {
                  return h.apply(this, arguments);
                })
            },
            {
              key: 'getBlockNumber',
              value:
                ((c = (0, l.default)(
                  u.default.mark(function _callee9(t) {
                    var r, i;
                    return u.default.wrap(
                      function _callee9$(a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (r = '{\n      timeToBlockNumber(argUnix: '.concat(
                                  t,
                                  '){\n      nodes\n    }\n    }'
                                )),
                                (a.next = 3),
                                this.getQueryResponseMemoized(this.serverUrl, r)
                              );
                            case 3:
                              return (
                                (i = a.sent),
                                a.abrupt('return', i.timeToBlockNumber.nodes[0])
                              );
                            case 5:
                            case 'end':
                              return a.stop();
                          }
                      },
                      _callee9,
                      this
                    );
                  })
                )),
                function getBlockNumber(t) {
                  return c.apply(this, arguments);
                })
            },
            {
              key: 'getMkrSupportRankedChoice',
              value:
                ((a = (0, l.default)(
                  u.default.mark(function _callee10(t, r) {
                    var i, a;
                    return u.default.wrap(
                      function _callee10$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (i = '{voteMkrWeightsAtTimeRankedChoice(argPollId: '
                                  .concat(t, ', argUnix: ')
                                  .concat(
                                    r,
                                    '){\n      nodes{\n        optionIdRaw\n        mkrSupport\n      }\n    }\n    }'
                                  )),
                                (u.next = 3),
                                this.getQueryResponseMemoized(this.serverUrl, i)
                              );
                            case 3:
                              return (
                                (a = u.sent),
                                u.abrupt(
                                  'return',
                                  a.voteMkrWeightsAtTimeRankedChoice.nodes.map(
                                    function(t) {
                                      var r = (0, b.toBuffer)(t.optionIdRaw, {
                                          endian: 'little'
                                        }),
                                        i = (0, b.paddedArray)(
                                          32 - r.length,
                                          r
                                        );
                                      return _objectSpread(
                                        _objectSpread({}, t),
                                        {},
                                        { ballot: i }
                                      );
                                    }
                                  )
                                )
                              );
                            case 5:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee10,
                      this
                    );
                  })
                )),
                function getMkrSupportRankedChoice(t, r) {
                  return a.apply(this, arguments);
                })
            },
            {
              key: 'getMkrSupport',
              value:
                ((i = (0, l.default)(
                  u.default.mark(function _callee11(t, r) {
                    var i, a, c, l;
                    return u.default.wrap(
                      function _callee11$(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              return (
                                (i = '{voteOptionMkrWeightsAtTime(argPollId: '
                                  .concat(t, ', argUnix: ')
                                  .concat(
                                    r,
                                    '){\n    nodes{\n      optionId\n      mkrSupport\n    }\n  }\n  }'
                                  )),
                                (u.next = 3),
                                this.getQueryResponseMemoized(this.serverUrl, i)
                              );
                            case 3:
                              return (
                                (a = u.sent),
                                (c = a.voteOptionMkrWeightsAtTime.nodes),
                                (l = c.reduce(function(t, r) {
                                  return (
                                    t +
                                    (isNaN(parseFloat(r.mkrSupport))
                                      ? 0
                                      : parseFloat(r.mkrSupport))
                                  );
                                }, 0)),
                                u.abrupt(
                                  'return',
                                  c.map(function(t) {
                                    var r = isNaN(parseFloat(t.mkrSupport))
                                      ? 0
                                      : parseFloat(t.mkrSupport);
                                    return (
                                      (t.mkrSupport = r),
                                      (t.percentage = (100 * r) / l),
                                      t
                                    );
                                  })
                                )
                              );
                            case 7:
                            case 'end':
                              return u.stop();
                          }
                      },
                      _callee11,
                      this
                    );
                  })
                )),
                function getMkrSupport(t, r) {
                  return i.apply(this, arguments);
                })
            },
            {
              key: 'getEsmJoins',
              value:
                ((r = (0, l.default)(
                  u.default.mark(function _callee12() {
                    var t, r;
                    return u.default.wrap(
                      function _callee12$(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (i.next = 3),
                                this.getQueryResponse(
                                  this.serverUrl,
                                  '{allEsmJoins {\n      nodes {\n        txFrom\n        txHash\n        joinAmount\n        blockTimestamp\n      }\n  }\n  }'
                                )
                              );
                            case 3:
                              return (
                                (t = i.sent),
                                (r = t.allEsmJoins.nodes),
                                i.abrupt('return', r)
                              );
                            case 6:
                            case 'end':
                              return i.stop();
                          }
                      },
                      _callee12,
                      this
                    );
                  })
                )),
                function getEsmJoins() {
                  return r.apply(this, arguments);
                })
            }
          ]),
          QueryApi
        );
      })(g.PublicService);
      r.default = _;
    },
    function(t, r, i) {
      var a = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable;
      function toObject(t) {
        if (null == t)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(t);
      }
      t.exports = (function shouldUseNative() {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc');
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var r = {}, i = 0; i < 10; i++)
            r['_' + String.fromCharCode(i)] = i;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(r)
              .map(function(t) {
                return r[t];
              })
              .join('')
          )
            return !1;
          var a = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(t) {
              a[t] = t;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, a)).join('')
          );
        } catch (t) {
          return !1;
        }
      })()
        ? Object.assign
        : function(t, r) {
            for (var i, l, p = toObject(t), d = 1; d < arguments.length; d++) {
              for (var y in (i = Object(arguments[d])))
                u.call(i, y) && (p[y] = i[y]);
              if (a) {
                l = a(i);
                for (var h = 0; h < l.length; h++)
                  c.call(i, l[h]) && (p[l[h]] = i[l[h]]);
              }
            }
            return p;
          };
    },
    function(t, r, i) {
      (function(t) {
        var a =
            Object.getOwnPropertyDescriptors ||
            function getOwnPropertyDescriptors(t) {
              for (var r = Object.keys(t), i = {}, a = 0; a < r.length; a++)
                i[r[a]] = Object.getOwnPropertyDescriptor(t, r[a]);
              return i;
            },
          u = /%[sdj%]/g;
        (r.format = function(t) {
          if (!isString(t)) {
            for (var r = [], i = 0; i < arguments.length; i++)
              r.push(inspect(arguments[i]));
            return r.join(' ');
          }
          i = 1;
          for (
            var a = arguments,
              c = a.length,
              l = String(t).replace(u, function(t) {
                if ('%%' === t) return '%';
                if (i >= c) return t;
                switch (t) {
                  case '%s':
                    return String(a[i++]);
                  case '%d':
                    return Number(a[i++]);
                  case '%j':
                    try {
                      return JSON.stringify(a[i++]);
                    } catch (t) {
                      return '[Circular]';
                    }
                  default:
                    return t;
                }
              }),
              p = a[i];
            i < c;
            p = a[++i]
          )
            isNull(p) || !isObject(p)
              ? (l += ' ' + p)
              : (l += ' ' + inspect(p));
          return l;
        }),
          (r.deprecate = function(i, a) {
            if (void 0 !== t && !0 === t.noDeprecation) return i;
            if (void 0 === t)
              return function() {
                return r.deprecate(i, a).apply(this, arguments);
              };
            var u = !1;
            return function deprecated() {
              if (!u) {
                if (t.throwDeprecation) throw new Error(a);
                t.traceDeprecation ? console.trace(a) : console.error(a),
                  (u = !0);
              }
              return i.apply(this, arguments);
            };
          });
        var c,
          l = {};
        function inspect(t, i) {
          var a = { seen: [], stylize: stylizeNoColor };
          return (
            arguments.length >= 3 && (a.depth = arguments[2]),
            arguments.length >= 4 && (a.colors = arguments[3]),
            isBoolean(i) ? (a.showHidden = i) : i && r._extend(a, i),
            isUndefined(a.showHidden) && (a.showHidden = !1),
            isUndefined(a.depth) && (a.depth = 2),
            isUndefined(a.colors) && (a.colors = !1),
            isUndefined(a.customInspect) && (a.customInspect = !0),
            a.colors && (a.stylize = stylizeWithColor),
            formatValue(a, t, a.depth)
          );
        }
        function stylizeWithColor(t, r) {
          var i = inspect.styles[r];
          return i
            ? '[' +
                inspect.colors[i][0] +
                'm' +
                t +
                '[' +
                inspect.colors[i][1] +
                'm'
            : t;
        }
        function stylizeNoColor(t, r) {
          return t;
        }
        function formatValue(t, i, a) {
          if (
            t.customInspect &&
            i &&
            isFunction(i.inspect) &&
            i.inspect !== r.inspect &&
            (!i.constructor || i.constructor.prototype !== i)
          ) {
            var u = i.inspect(a, t);
            return isString(u) || (u = formatValue(t, u, a)), u;
          }
          var c = (function formatPrimitive(t, r) {
            if (isUndefined(r)) return t.stylize('undefined', 'undefined');
            if (isString(r)) {
              var i =
                "'" +
                JSON.stringify(r)
                  .replace(/^"|"$/g, '')
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return t.stylize(i, 'string');
            }
            if (isNumber(r)) return t.stylize('' + r, 'number');
            if (isBoolean(r)) return t.stylize('' + r, 'boolean');
            if (isNull(r)) return t.stylize('null', 'null');
          })(t, i);
          if (c) return c;
          var l = Object.keys(i),
            p = (function arrayToHash(t) {
              var r = {};
              return (
                t.forEach(function(t, i) {
                  r[t] = !0;
                }),
                r
              );
            })(l);
          if (
            (t.showHidden && (l = Object.getOwnPropertyNames(i)),
            isError(i) &&
              (l.indexOf('message') >= 0 || l.indexOf('description') >= 0))
          )
            return formatError(i);
          if (0 === l.length) {
            if (isFunction(i)) {
              var d = i.name ? ': ' + i.name : '';
              return t.stylize('[Function' + d + ']', 'special');
            }
            if (isRegExp(i))
              return t.stylize(RegExp.prototype.toString.call(i), 'regexp');
            if (isDate(i))
              return t.stylize(Date.prototype.toString.call(i), 'date');
            if (isError(i)) return formatError(i);
          }
          var y,
            h = '',
            v = !1,
            g = ['{', '}'];
          (isArray(i) && ((v = !0), (g = ['[', ']'])), isFunction(i)) &&
            (h = ' [Function' + (i.name ? ': ' + i.name : '') + ']');
          return (
            isRegExp(i) && (h = ' ' + RegExp.prototype.toString.call(i)),
            isDate(i) && (h = ' ' + Date.prototype.toUTCString.call(i)),
            isError(i) && (h = ' ' + formatError(i)),
            0 !== l.length || (v && 0 != i.length)
              ? a < 0
                ? isRegExp(i)
                  ? t.stylize(RegExp.prototype.toString.call(i), 'regexp')
                  : t.stylize('[Object]', 'special')
                : (t.seen.push(i),
                  (y = v
                    ? (function formatArray(t, r, i, a, u) {
                        for (var c = [], l = 0, p = r.length; l < p; ++l)
                          hasOwnProperty(r, String(l))
                            ? c.push(formatProperty(t, r, i, a, String(l), !0))
                            : c.push('');
                        return (
                          u.forEach(function(u) {
                            u.match(/^\d+$/) ||
                              c.push(formatProperty(t, r, i, a, u, !0));
                          }),
                          c
                        );
                      })(t, i, a, p, l)
                    : l.map(function(r) {
                        return formatProperty(t, i, a, p, r, v);
                      })),
                  t.seen.pop(),
                  (function reduceToSingleString(t, r, i) {
                    if (
                      t.reduce(function(t, r) {
                        return (
                          r.indexOf('\n') >= 0 && 0,
                          t + r.replace(/\u001b\[\d\d?m/g, '').length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        i[0] +
                        ('' === r ? '' : r + '\n ') +
                        ' ' +
                        t.join(',\n  ') +
                        ' ' +
                        i[1]
                      );
                    return i[0] + r + ' ' + t.join(', ') + ' ' + i[1];
                  })(y, h, g))
              : g[0] + h + g[1]
          );
        }
        function formatError(t) {
          return '[' + Error.prototype.toString.call(t) + ']';
        }
        function formatProperty(t, r, i, a, u, c) {
          var l, p, d;
          if (
            ((d = Object.getOwnPropertyDescriptor(r, u) || { value: r[u] }).get
              ? (p = d.set
                  ? t.stylize('[Getter/Setter]', 'special')
                  : t.stylize('[Getter]', 'special'))
              : d.set && (p = t.stylize('[Setter]', 'special')),
            hasOwnProperty(a, u) || (l = '[' + u + ']'),
            p ||
              (t.seen.indexOf(d.value) < 0
                ? (p = isNull(i)
                    ? formatValue(t, d.value, null)
                    : formatValue(t, d.value, i - 1)).indexOf('\n') > -1 &&
                  (p = c
                    ? p
                        .split('\n')
                        .map(function(t) {
                          return '  ' + t;
                        })
                        .join('\n')
                        .substr(2)
                    : '\n' +
                      p
                        .split('\n')
                        .map(function(t) {
                          return '   ' + t;
                        })
                        .join('\n'))
                : (p = t.stylize('[Circular]', 'special'))),
            isUndefined(l))
          ) {
            if (c && u.match(/^\d+$/)) return p;
            (l = JSON.stringify('' + u)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((l = l.substr(1, l.length - 2)), (l = t.stylize(l, 'name')))
              : ((l = l
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (l = t.stylize(l, 'string')));
          }
          return l + ': ' + p;
        }
        function isArray(t) {
          return Array.isArray(t);
        }
        function isBoolean(t) {
          return 'boolean' == typeof t;
        }
        function isNull(t) {
          return null === t;
        }
        function isNumber(t) {
          return 'number' == typeof t;
        }
        function isString(t) {
          return 'string' == typeof t;
        }
        function isUndefined(t) {
          return void 0 === t;
        }
        function isRegExp(t) {
          return isObject(t) && '[object RegExp]' === objectToString(t);
        }
        function isObject(t) {
          return 'object' == typeof t && null !== t;
        }
        function isDate(t) {
          return isObject(t) && '[object Date]' === objectToString(t);
        }
        function isError(t) {
          return (
            isObject(t) &&
            ('[object Error]' === objectToString(t) || t instanceof Error)
          );
        }
        function isFunction(t) {
          return 'function' == typeof t;
        }
        function objectToString(t) {
          return Object.prototype.toString.call(t);
        }
        function pad(t) {
          return t < 10 ? '0' + t.toString(10) : t.toString(10);
        }
        (r.debuglog = function(i) {
          if (
            (isUndefined(c) && (c = t.env.NODE_DEBUG || ''),
            (i = i.toUpperCase()),
            !l[i])
          )
            if (new RegExp('\\b' + i + '\\b', 'i').test(c)) {
              var a = t.pid;
              l[i] = function() {
                var t = r.format.apply(r, arguments);
                console.error('%s %d: %s', i, a, t);
              };
            } else l[i] = function() {};
          return l[i];
        }),
          (r.inspect = inspect),
          (inspect.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
          }),
          (inspect.styles = {
            special: 'cyan',
            number: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            date: 'magenta',
            regexp: 'red'
          }),
          (r.isArray = isArray),
          (r.isBoolean = isBoolean),
          (r.isNull = isNull),
          (r.isNullOrUndefined = function isNullOrUndefined(t) {
            return null == t;
          }),
          (r.isNumber = isNumber),
          (r.isString = isString),
          (r.isSymbol = function isSymbol(t) {
            return 'symbol' == typeof t;
          }),
          (r.isUndefined = isUndefined),
          (r.isRegExp = isRegExp),
          (r.isObject = isObject),
          (r.isDate = isDate),
          (r.isError = isError),
          (r.isFunction = isFunction),
          (r.isPrimitive = function isPrimitive(t) {
            return (
              null === t ||
              'boolean' == typeof t ||
              'number' == typeof t ||
              'string' == typeof t ||
              'symbol' == typeof t ||
              void 0 === t
            );
          }),
          (r.isBuffer = i(160));
        var p = [
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
        ];
        function timestamp() {
          var t = new Date(),
            r = [
              pad(t.getHours()),
              pad(t.getMinutes()),
              pad(t.getSeconds())
            ].join(':');
          return [t.getDate(), p[t.getMonth()], r].join(' ');
        }
        function hasOwnProperty(t, r) {
          return Object.prototype.hasOwnProperty.call(t, r);
        }
        (r.log = function() {
          console.log('%s - %s', timestamp(), r.format.apply(r, arguments));
        }),
          (r.inherits = i(161)),
          (r._extend = function(t, r) {
            if (!r || !isObject(r)) return t;
            for (var i = Object.keys(r), a = i.length; a--; ) t[i[a]] = r[i[a]];
            return t;
          });
        var d =
          'undefined' != typeof Symbol
            ? Symbol('util.promisify.custom')
            : void 0;
        function callbackifyOnRejected(t, r) {
          if (!t) {
            var i = new Error('Promise was rejected with a falsy value');
            (i.reason = t), (t = i);
          }
          return r(t);
        }
        (r.promisify = function promisify(t) {
          if ('function' != typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (d && t[d]) {
            var r;
            if ('function' != typeof (r = t[d]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(r, d, {
                value: r,
                enumerable: !1,
                writable: !1,
                configurable: !0
              }),
              r
            );
          }
          function r() {
            for (
              var r,
                i,
                a = new Promise(function(t, a) {
                  (r = t), (i = a);
                }),
                u = [],
                c = 0;
              c < arguments.length;
              c++
            )
              u.push(arguments[c]);
            u.push(function(t, a) {
              t ? i(t) : r(a);
            });
            try {
              t.apply(this, u);
            } catch (t) {
              i(t);
            }
            return a;
          }
          return (
            Object.setPrototypeOf(r, Object.getPrototypeOf(t)),
            d &&
              Object.defineProperty(r, d, {
                value: r,
                enumerable: !1,
                writable: !1,
                configurable: !0
              }),
            Object.defineProperties(r, a(t))
          );
        }),
          (r.promisify.custom = d),
          (r.callbackify = function callbackify(r) {
            if ('function' != typeof r)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function callbackified() {
              for (var i = [], a = 0; a < arguments.length; a++)
                i.push(arguments[a]);
              var u = i.pop();
              if ('function' != typeof u)
                throw new TypeError(
                  'The last argument must be of type Function'
                );
              var c = this,
                cb = function() {
                  return u.apply(c, arguments);
                };
              r.apply(this, i).then(
                function(r) {
                  t.nextTick(cb, null, r);
                },
                function(r) {
                  t.nextTick(callbackifyOnRejected, r, cb);
                }
              );
            }
            return (
              Object.setPrototypeOf(callbackified, Object.getPrototypeOf(r)),
              Object.defineProperties(callbackified, a(r)),
              callbackified
            );
          });
      }.call(this, i(159)));
    },
    function(t, r) {
      var i,
        a,
        u = (t.exports = {});
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      function runTimeout(t) {
        if (i === setTimeout) return setTimeout(t, 0);
        if ((i === defaultSetTimout || !i) && setTimeout)
          return (i = setTimeout), setTimeout(t, 0);
        try {
          return i(t, 0);
        } catch (r) {
          try {
            return i.call(null, t, 0);
          } catch (r) {
            return i.call(this, t, 0);
          }
        }
      }
      !(function() {
        try {
          i = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (t) {
          i = defaultSetTimout;
        }
        try {
          a =
            'function' == typeof clearTimeout
              ? clearTimeout
              : defaultClearTimeout;
        } catch (t) {
          a = defaultClearTimeout;
        }
      })();
      var c,
        l = [],
        p = !1,
        d = -1;
      function cleanUpNextTick() {
        p &&
          c &&
          ((p = !1),
          c.length ? (l = c.concat(l)) : (d = -1),
          l.length && drainQueue());
      }
      function drainQueue() {
        if (!p) {
          var t = runTimeout(cleanUpNextTick);
          p = !0;
          for (var r = l.length; r; ) {
            for (c = l, l = []; ++d < r; ) c && c[d].run();
            (d = -1), (r = l.length);
          }
          (c = null),
            (p = !1),
            (function runClearTimeout(t) {
              if (a === clearTimeout) return clearTimeout(t);
              if ((a === defaultClearTimeout || !a) && clearTimeout)
                return (a = clearTimeout), clearTimeout(t);
              try {
                return a(t);
              } catch (r) {
                try {
                  return a.call(null, t);
                } catch (r) {
                  return a.call(this, t);
                }
              }
            })(t);
        }
      }
      function Item(t, r) {
        (this.fun = t), (this.array = r);
      }
      function noop() {}
      (u.nextTick = function(t) {
        var r = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
        l.push(new Item(t, r)), 1 !== l.length || p || runTimeout(drainQueue);
      }),
        (Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (u.title = 'browser'),
        (u.browser = !0),
        (u.env = {}),
        (u.argv = []),
        (u.version = ''),
        (u.versions = {}),
        (u.on = noop),
        (u.addListener = noop),
        (u.once = noop),
        (u.off = noop),
        (u.removeListener = noop),
        (u.removeAllListeners = noop),
        (u.emit = noop),
        (u.prependListener = noop),
        (u.prependOnceListener = noop),
        (u.listeners = function(t) {
          return [];
        }),
        (u.binding = function(t) {
          throw new Error('process.binding is not supported');
        }),
        (u.cwd = function() {
          return '/';
        }),
        (u.chdir = function(t) {
          throw new Error('process.chdir is not supported');
        }),
        (u.umask = function() {
          return 0;
        });
    },
    function(t, r) {
      t.exports = function isBuffer(t) {
        return (
          t &&
          'object' == typeof t &&
          'function' == typeof t.copy &&
          'function' == typeof t.fill &&
          'function' == typeof t.readUInt8
        );
      };
    },
    function(t, r) {
      'function' == typeof Object.create
        ? (t.exports = function inherits(t, r) {
            (t.super_ = r),
              (t.prototype = Object.create(r.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }));
          })
        : (t.exports = function inherits(t, r) {
            t.super_ = r;
            var TempCtor = function() {};
            (TempCtor.prototype = r.prototype),
              (t.prototype = new TempCtor()),
              (t.prototype.constructor = t);
          });
    },
    function(t, r, i) {
      var a = i(0),
        u = i(163);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var c,
        l,
        p,
        d = a(i(10)),
        y = a(i(22)),
        h = a(i(11)),
        v = a(i(3)),
        g = a(i(4)),
        m = a(i(14)),
        b = a(i(15)),
        _ = a(i(16)),
        w = a(i(164)),
        x = i(17),
        O = i(5),
        S = i(23),
        k = u(i(165));
      function _createSuper(t) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var i,
            a = (0, _.default)(t);
          if (r) {
            var u = (0, _.default)(this).constructor;
            i = Reflect.construct(a, arguments, u);
          } else i = a.apply(this, arguments);
          return (0, b.default)(this, i);
        };
      }
      var E =
        ((c = (0, k.tracksTransactionsWithOptions)({ numArguments: 3 })),
        (l = (0, k.tracksTransactionsWithOptions)({ numArguments: 2 })),
        (p = (function(t) {
          (0, m.default)(EsmService, t);
          var r,
            i,
            a,
            u,
            c,
            l,
            p,
            b,
            _,
            w = _createSuper(EsmService);
          function EsmService() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'esm';
            return (
              (0, v.default)(this, EsmService),
              w.call(this, t, [
                'smartContract',
                'web3',
                'token',
                'allowance',
                'govQueryApi'
              ])
            );
          }
          return (
            (0, g.default)(EsmService, [
              {
                key: 'thresholdAmount',
                value:
                  ((_ = (0, h.default)(
                    d.default.mark(function _callee() {
                      var t;
                      return d.default.wrap(
                        function _callee$(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (r.next = 2), this._esmContract().min();
                              case 2:
                                return (
                                  (t = r.sent),
                                  r.abrupt(
                                    'return',
                                    (0, S.getCurrency)(t, O.MKR).shiftedBy(-18)
                                  )
                                );
                              case 4:
                              case 'end':
                                return r.stop();
                            }
                        },
                        _callee,
                        this
                      );
                    })
                  )),
                  function thresholdAmount() {
                    return _.apply(this, arguments);
                  })
              },
              {
                key: 'fired',
                value:
                  ((b = (0, h.default)(
                    d.default.mark(function _callee2() {
                      var t;
                      return d.default.wrap(
                        function _callee2$(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.next = 2), this._esmContract().fired()
                                );
                              case 2:
                                return (
                                  (t = r.sent), r.abrupt('return', t.eq(1))
                                );
                              case 4:
                              case 'end':
                                return r.stop();
                            }
                        },
                        _callee2,
                        this
                      );
                    })
                  )),
                  function fired() {
                    return b.apply(this, arguments);
                  })
              },
              {
                key: 'emergencyShutdownActive',
                value:
                  ((p = (0, h.default)(
                    d.default.mark(function _callee3() {
                      var t;
                      return d.default.wrap(
                        function _callee3$(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (r.next = 2), this._endContract().live();
                              case 2:
                                return (
                                  (t = r.sent), r.abrupt('return', t.eq(0))
                                );
                              case 4:
                              case 'end':
                                return r.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    })
                  )),
                  function emergencyShutdownActive() {
                    return p.apply(this, arguments);
                  })
              },
              {
                key: 'canFire',
                value:
                  ((l = (0, h.default)(
                    d.default.mark(function _callee4() {
                      var t, r, i, a;
                      return d.default.wrap(
                        function _callee4$(u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                return (
                                  (u.next = 2),
                                  Promise.all([
                                    this.fired(),
                                    this.emergencyShutdownActive()
                                  ])
                                );
                              case 2:
                                return (
                                  (t = u.sent),
                                  (r = (0, y.default)(t, 2)),
                                  (i = r[0]),
                                  (a = r[1]),
                                  u.abrupt('return', !i && !a)
                                );
                              case 7:
                              case 'end':
                                return u.stop();
                            }
                        },
                        _callee4,
                        this
                      );
                    })
                  )),
                  function canFire() {
                    return l.apply(this, arguments);
                  })
              },
              {
                key: 'getTotalStaked',
                value:
                  ((c = (0, h.default)(
                    d.default.mark(function _callee5() {
                      var t;
                      return d.default.wrap(
                        function _callee5$(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (r.next = 2), this._esmContract().Sum();
                              case 2:
                                return (
                                  (t = r.sent),
                                  r.abrupt(
                                    'return',
                                    (0, S.getCurrency)(t, O.MKR).shiftedBy(-18)
                                  )
                                );
                              case 4:
                              case 'end':
                                return r.stop();
                            }
                        },
                        _callee5,
                        this
                      );
                    })
                  )),
                  function getTotalStaked() {
                    return c.apply(this, arguments);
                  })
              },
              {
                key: 'getTotalStakedByAddress',
                value:
                  ((u = (0, h.default)(
                    d.default.mark(function _callee6() {
                      var t,
                        r,
                        i = arguments;
                      return d.default.wrap(
                        function _callee6$(a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (t =
                                    i.length > 0 && void 0 !== i[0] && i[0]) ||
                                    (t = this.get('web3').currentAddress()),
                                  (a.next = 4),
                                  this._esmContract().sum(t)
                                );
                              case 4:
                                return (
                                  (r = a.sent),
                                  a.abrupt(
                                    'return',
                                    (0, S.getCurrency)(r, O.MKR).shiftedBy(-18)
                                  )
                                );
                              case 6:
                              case 'end':
                                return a.stop();
                            }
                        },
                        _callee6,
                        this
                      );
                    })
                  )),
                  function getTotalStakedByAddress() {
                    return u.apply(this, arguments);
                  })
              },
              {
                key: 'stake',
                value:
                  ((a = (0, h.default)(
                    d.default.mark(function _callee7(t) {
                      var r,
                        i,
                        a,
                        u,
                        c,
                        l,
                        p,
                        h,
                        v = arguments;
                      return d.default.wrap(
                        function _callee7$(d) {
                          for (;;)
                            switch ((d.prev = d.next)) {
                              case 0:
                                if (
                                  ((r =
                                    v.length > 1 && void 0 !== v[1] && v[1]),
                                  (i = v.length > 2 ? v[2] : void 0),
                                  (a = i.promise),
                                  (u = (0, S.getCurrency)(t, O.MKR)),
                                  r)
                                ) {
                                  d.next = 14;
                                  break;
                                }
                                return (
                                  (d.next = 6),
                                  Promise.all([
                                    this.fired(),
                                    this.get('token')
                                      .getToken(O.MKR)
                                      .balance()
                                  ])
                                );
                              case 6:
                                if (
                                  ((c = d.sent),
                                  (l = (0, y.default)(c, 2)),
                                  (p = l[0]),
                                  (h = l[1]),
                                  !p)
                                ) {
                                  d.next = 12;
                                  break;
                                }
                                throw new Error(
                                  'cannot join when emergency shutdown has been fired'
                                );
                              case 12:
                                if (!h.lt(u)) {
                                  d.next = 14;
                                  break;
                                }
                                throw new Error(
                                  'amount to join is greater than the user balance'
                                );
                              case 14:
                                return d.abrupt(
                                  'return',
                                  this._esmContract().join(u.toFixed('wei'), {
                                    promise: a
                                  })
                                );
                              case 15:
                              case 'end':
                                return d.stop();
                            }
                        },
                        _callee7,
                        this
                      );
                    })
                  )),
                  function stake(t) {
                    return a.apply(this, arguments);
                  })
              },
              {
                key: 'triggerEmergencyShutdown',
                value:
                  ((i = (0, h.default)(
                    d.default.mark(function _callee8() {
                      var t,
                        r,
                        i,
                        a,
                        u,
                        c,
                        l = arguments;
                      return d.default.wrap(
                        function _callee8$(p) {
                          for (;;)
                            switch ((p.prev = p.next)) {
                              case 0:
                                if (
                                  ((t =
                                    l.length > 0 && void 0 !== l[0] && l[0]),
                                  (l.length > 1 ? l[1] : void 0).promise,
                                  t)
                                ) {
                                  p.next = 14;
                                  break;
                                }
                                return (
                                  (p.next = 5),
                                  Promise.all([
                                    this.thresholdAmount(),
                                    this.getTotalStaked(),
                                    this.canFire()
                                  ])
                                );
                              case 5:
                                if (
                                  ((r = p.sent),
                                  (i = (0, y.default)(r, 3)),
                                  (a = i[0]),
                                  (u = i[1]),
                                  (c = i[2]),
                                  !u.lt(a))
                                ) {
                                  p.next = 12;
                                  break;
                                }
                                throw new Error(
                                  'total amount of staked MKR has not reached the required threshold'
                                );
                              case 12:
                                if (c) {
                                  p.next = 14;
                                  break;
                                }
                                throw new Error(
                                  'emergency shutdown has already been initiated'
                                );
                              case 14:
                                return p.abrupt(
                                  'return',
                                  this._esmContract().fire()
                                );
                              case 15:
                              case 'end':
                                return p.stop();
                            }
                        },
                        _callee8,
                        this
                      );
                    })
                  )),
                  function triggerEmergencyShutdown() {
                    return i.apply(this, arguments);
                  })
              },
              {
                key: 'getStakingHistory',
                value:
                  ((r = (0, h.default)(
                    d.default.mark(function _callee9() {
                      var t, r, i;
                      return d.default.wrap(
                        function _callee9$(a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (a.next = 2),
                                  this.get('govQueryApi').getEsmJoins()
                                );
                              case 2:
                                return (
                                  (t = a.sent),
                                  (r = t.map(function(t) {
                                    return {
                                      transactionHash: t.txHash,
                                      senderAddress: t.txFrom,
                                      amount: (0, O.MKR)(t.joinAmount),
                                      time: new Date(t.blockTimestamp)
                                    };
                                  })),
                                  (i = r.sort(function(t, r) {
                                    return r.time - t.time;
                                  })),
                                  a.abrupt('return', i)
                                );
                              case 6:
                              case 'end':
                                return a.stop();
                            }
                        },
                        _callee9,
                        this
                      );
                    })
                  )),
                  function getStakingHistory() {
                    return r.apply(this, arguments);
                  })
              },
              {
                key: '_esmContract',
                value: function _esmContract() {
                  return this.get('smartContract').getContractByName(O.ESM);
                }
              },
              {
                key: '_endContract',
                value: function _endContract() {
                  return this.get('smartContract').getContractByName(O.END);
                }
              }
            ]),
            EsmService
          );
        })(x.PrivateService)),
        (0, w.default)(
          p.prototype,
          'stake',
          [c],
          Object.getOwnPropertyDescriptor(p.prototype, 'stake'),
          p.prototype
        ),
        (0, w.default)(
          p.prototype,
          'triggerEmergencyShutdown',
          [l],
          Object.getOwnPropertyDescriptor(
            p.prototype,
            'triggerEmergencyShutdown'
          ),
          p.prototype
        ),
        p);
      r.default = E;
    },
    function(t, r, i) {
      var a = i(32).default;
      function _getRequireWildcardCache() {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (_getRequireWildcardCache = function _getRequireWildcardCache() {
            return t;
          }),
          t
        );
      }
      (t.exports = function _interopRequireWildcard(t) {
        if (t && t.__esModule) return t;
        if (null === t || ('object' !== a(t) && 'function' != typeof t))
          return { default: t };
        var r = _getRequireWildcardCache();
        if (r && r.has(t)) return r.get(t);
        var i = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var c in t)
          if (Object.prototype.hasOwnProperty.call(t, c)) {
            var l = u ? Object.getOwnPropertyDescriptor(t, c) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(i, c, l)
              : (i[c] = t[c]);
          }
        return (i.default = t), r && r.set(t, i), i;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r) {
      (t.exports = function _applyDecoratedDescriptor(t, r, i, a, u) {
        var c = {};
        return (
          Object.keys(a).forEach(function(t) {
            c[t] = a[t];
          }),
          (c.enumerable = !!c.enumerable),
          (c.configurable = !!c.configurable),
          ('value' in c || c.initializer) && (c.writable = !0),
          (c = i
            .slice()
            .reverse()
            .reduce(function(i, a) {
              return a(t, r, i) || i;
            }, c)),
          u &&
            void 0 !== c.initializer &&
            ((c.value = c.initializer ? c.initializer.call(u) : void 0),
            (c.initializer = void 0)),
          void 0 === c.initializer &&
            (Object.defineProperty(t, r, c), (c = null)),
          c
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.tracksTransactionsWithOptions = tracksTransactionsWithOptions),
        (r.default = void 0);
      var u = a(i(10)),
        c = a(i(48)),
        l = a(i(11)),
        p = a(i(32)),
        d = a(i(166)),
        y = tracksTransactionsWithOptions({});
      function tracksTransactionsWithOptions(t) {
        var r = t.numArguments;
        return function(t, i, a) {
          var y = a.value,
            h = r || y.length;
          return (
            (a.value = function() {
              for (
                var t = this, r = arguments.length, i = new Array(r), a = 0;
                a < r;
                a++
              )
                i[a] = arguments[a];
              var v,
                g = i[i.length - 1];
              'object' === (0, p.default)(g) &&
              null !== g &&
              g.constructor === Object
                ? ((i = i.slice(0, i.length - 1)), (v = g))
                : (v = {});
              var m = (0, l.default)(
                u.default.mark(function _callee() {
                  var r;
                  return u.default.wrap(function _callee$(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), 0;
                        case 2:
                          return (
                            v.promise || (v.promise = m),
                            (r = [].concat(
                              (0, c.default)(i),
                              (0, c.default)(
                                (0, d.default)(h - 1 - i.length, function() {})
                              ),
                              [v]
                            )),
                            a.abrupt('return', y.apply(t, r))
                          );
                        case 5:
                        case 'end':
                          return a.stop();
                      }
                  }, _callee);
                })
              )();
              return m;
            }),
            a
          );
        };
      }
      r.default = y;
    },
    function(t, r, i) {
      var a = i(167),
        u = i(168),
        c = i(76),
        l = Math.min;
      t.exports = function times(t, r) {
        if ((t = c(t)) < 1 || t > 9007199254740991) return [];
        var i = 4294967295,
          p = l(t, 4294967295);
        (r = u(r)), (t -= 4294967295);
        for (var d = a(p, r); ++i < t; ) r(i);
        return d;
      };
    },
    function(t, r) {
      t.exports = function baseTimes(t, r) {
        for (var i = -1, a = Array(t); ++i < t; ) a[i] = r(i);
        return a;
      };
    },
    function(t, r, i) {
      var a = i(169);
      t.exports = function castFunction(t) {
        return 'function' == typeof t ? t : a;
      };
    },
    function(t, r) {
      t.exports = function identity(t) {
        return t;
      };
    },
    function(t, r, i) {
      var a = i(171);
      t.exports = function toFinite(t) {
        return t
          ? (t = a(t)) === 1 / 0 || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    function(t, r, i) {
      var a = i(172),
        u = i(174),
        c = i(77),
        l = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        y = parseInt;
      t.exports = function toNumber(t) {
        if ('number' == typeof t) return t;
        if (c(t)) return NaN;
        if (u(t)) {
          var r = 'function' == typeof t.valueOf ? t.valueOf() : t;
          t = u(r) ? r + '' : r;
        }
        if ('string' != typeof t) return 0 === t ? t : +t;
        t = a(t);
        var i = p.test(t);
        return i || d.test(t) ? y(t.slice(2), i ? 2 : 8) : l.test(t) ? NaN : +t;
      };
    },
    function(t, r, i) {
      var a = i(173),
        u = /^\s+/;
      t.exports = function baseTrim(t) {
        return t ? t.slice(0, a(t) + 1).replace(u, '') : t;
      };
    },
    function(t, r) {
      var i = /\s/;
      t.exports = function trimmedEndIndex(t) {
        for (var r = t.length; r-- && i.test(t.charAt(r)); );
        return r;
      };
    },
    function(t, r) {
      t.exports = function isObject(t) {
        var r = typeof t;
        return null != t && ('object' == r || 'function' == r);
      };
    },
    function(t, r, i) {
      var a = i(49),
        u = i(178),
        c = i(179),
        l = a ? a.toStringTag : void 0;
      t.exports = function baseGetTag(t) {
        return null == t
          ? void 0 === t
            ? '[object Undefined]'
            : '[object Null]'
          : l && l in Object(t)
          ? u(t)
          : c(t);
      };
    },
    function(t, r, i) {
      var a = i(177),
        u = 'object' == typeof self && self && self.Object === Object && self,
        c = a || u || Function('return this')();
      t.exports = c;
    },
    function(t, r, i) {
      (function(r) {
        var i = 'object' == typeof r && r && r.Object === Object && r;
        t.exports = i;
      }.call(this, i(47)));
    },
    function(t, r, i) {
      var a = i(49),
        u = Object.prototype,
        c = u.hasOwnProperty,
        l = u.toString,
        p = a ? a.toStringTag : void 0;
      t.exports = function getRawTag(t) {
        var r = c.call(t, p),
          i = t[p];
        try {
          t[p] = void 0;
          var a = !0;
        } catch (t) {}
        var u = l.call(t);
        return a && (r ? (t[p] = i) : delete t[p]), u;
      };
    },
    function(t, r) {
      var i = Object.prototype.toString;
      t.exports = function objectToString(t) {
        return i.call(t);
      };
    },
    function(t, r) {
      t.exports = function isObjectLike(t) {
        return null != t && 'object' == typeof t;
      };
    },
    function(t, r, i) {
      var a = i(0);
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0);
      var u = a(i(10)),
        c = a(i(22)),
        l = a(i(11)),
        p = a(i(3)),
        d = a(i(4)),
        y = a(i(14)),
        h = a(i(15)),
        v = a(i(16)),
        g = i(17),
        m = i(5),
        b = a(i(182)),
        _ = a(i(183)),
        w = a(i(75)),
        x = a(i(74)),
        O = i(23);
      function _createSuper(t) {
        var r = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var i,
            a = (0, v.default)(t);
          if (r) {
            var u = (0, v.default)(this).constructor;
            i = Reflect.construct(a, arguments, u);
          } else i = a.apply(this, arguments);
          return (0, h.default)(this, i);
        };
      }
      var S = x.default.pause,
        k = (function(t) {
          (0, y.default)(SpellService, t);
          var r,
            i,
            a,
            h,
            v,
            g,
            x = _createSuper(SpellService);
          function SpellService() {
            var t,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'spell';
            return (
              (0, p.default)(this, SpellService),
              ((t = x.call(this, r, ['smartContract', 'web3'])).eta = {}),
              (t.done = {}),
              (t.action = {}),
              (t.executionDate = {}),
              (t.scheduledDate = {}),
              (t.nextCastTime = {}),
              t
            );
          }
          return (
            (0, d.default)(SpellService, [
              {
                key: 'getDelayInSeconds',
                value: function getDelayInSeconds() {
                  return (
                    this.delay || (this.delay = this._pauseContract().delay()),
                    this.delay
                  );
                }
              },
              {
                key: 'getEta',
                value:
                  ((g = (0, l.default)(
                    u.default.mark(function _callee(t) {
                      var r, i;
                      return u.default.wrap(
                        function _callee$(a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                if (!this.eta[t]) {
                                  a.next = 2;
                                  break;
                                }
                                return a.abrupt('return', this.eta[t]);
                              case 2:
                                return (
                                  (r = this.get(
                                    'smartContract'
                                  ).getContractByAddressAndAbi(t, b.default)),
                                  (a.next = 5),
                                  r.eta()
                                );
                              case 5:
                                if ((i = a.sent).toNumber()) {
                                  a.next = 8;
                                  break;
                                }
                                return a.abrupt('return', void 0);
                              case 8:
                                return (
                                  (this.eta[t] = new Date(1e3 * i.toNumber())),
                                  a.abrupt('return', this.eta[t])
                                );
                              case 10:
                              case 'end':
                                return a.stop();
                            }
                        },
                        _callee,
                        this
                      );
                    })
                  )),
                  function getEta(t) {
                    return g.apply(this, arguments);
                  })
              },
              {
                key: 'getNextCastTime',
                value:
                  ((v = (0, l.default)(
                    u.default.mark(function _callee2(t) {
                      var r, i;
                      return u.default.wrap(
                        function _callee2$(a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                if (!this.nextCastTime[t]) {
                                  a.next = 2;
                                  break;
                                }
                                return a.abrupt('return', this.nextCastTime[t]);
                              case 2:
                                return (
                                  (r = this.get(
                                    'smartContract'
                                  ).getContractByAddressAndAbi(t, b.default)),
                                  (a.next = 5),
                                  r.nextCastTime()
                                );
                              case 5:
                                if ((i = a.sent).toNumber()) {
                                  a.next = 8;
                                  break;
                                }
                                return a.abrupt('return', void 0);
                              case 8:
                                return (
                                  (this.nextCastTime[t] = new Date(
                                    1e3 * i.toNumber()
                                  )),
                                  a.abrupt('return', this.nextCastTime[t])
                                );
                              case 10:
                              case 'end':
                                return a.stop();
                            }
                        },
                        _callee2,
                        this
                      );
                    })
                  )),
                  function getNextCastTime(t) {
                    return v.apply(this, arguments);
                  })
              },
              {
                key: 'getScheduledDate',
                value:
                  ((h = (0, l.default)(
                    u.default.mark(function _callee3(t) {
                      var r, i, a, l, p, d, y, h, v, g, m;
                      return u.default.wrap(
                        function _callee3$(u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                if (!this.scheduledDate[t]) {
                                  u.next = 2;
                                  break;
                                }
                                return u.abrupt(
                                  'return',
                                  this.scheduledDate[t]
                                );
                              case 2:
                                return (u.next = 4), this.getEta(t);
                              case 4:
                                return (
                                  (r = u.sent),
                                  (0, w.default)(
                                    r,
                                    'spell '.concat(
                                      t,
                                      ' has not been scheduled'
                                    )
                                  ),
                                  (i = this._pauseContract().address),
                                  (a = this.get('web3')),
                                  (l = a.network),
                                  (p = (0, O.netIdToName)(l)),
                                  (d =
                                    '0x' +
                                    (0, _.default)(
                                      t.replace(/^0x/, ''),
                                      64,
                                      '0'
                                    )),
                                  (u.next = 13),
                                  a.getPastLogs({
                                    fromBlock: S.inception_block[p],
                                    toBlock: 'latest',
                                    address: i,
                                    topics: [S.events.plot, d]
                                  })
                                );
                              case 13:
                                return (
                                  (y = u.sent),
                                  (h = (0, c.default)(y, 1)),
                                  (v = h[0]),
                                  (u.next = 18),
                                  a.getBlock(v.blockNumber)
                                );
                              case 18:
                                return (
                                  (g = u.sent),
                                  (m = g.timestamp),
                                  (this.scheduledDate[t] = new Date(1e3 * m)),
                                  u.abrupt('return', this.scheduledDate[t])
                                );
                              case 22:
                              case 'end':
                                return u.stop();
                            }
                        },
                        _callee3,
                        this
                      );
                    })
                  )),
                  function getScheduledDate(t) {
                    return h.apply(this, arguments);
                  })
              },
              {
                key: 'getDone',
                value:
                  ((a = (0, l.default)(
                    u.default.mark(function _callee4(t) {
                      var r;
                      return u.default.wrap(
                        function _callee4$(i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                if (!this.done[t]) {
                                  i.next = 2;
                                  break;
                                }
                                return i.abrupt('return', this.done[t]);
                              case 2:
                                return (
                                  (r = this.get(
                                    'smartContract'
                                  ).getContractByAddressAndAbi(t, b.default)),
                                  (this.done[t] = r.done()),
                                  i.abrupt('return', this.done[t])
                                );
                              case 5:
                              case 'end':
                                return i.stop();
                            }
                        },
                        _callee4,
                        this
                      );
                    })
                  )),
                  function getDone(t) {
                    return a.apply(this, arguments);
                  })
              },
              {
                key: 'getAction',
                value:
                  ((i = (0, l.default)(
                    u.default.mark(function _callee5(t) {
                      var r;
                      return u.default.wrap(
                        function _callee5$(i) {
                          for (;;)
                            switch ((i.prev = i.next)) {
                              case 0:
                                if (!this.action[t]) {
                                  i.next = 2;
                                  break;
                                }
                                return i.abrupt('return', this.action[t]);
                              case 2:
                                return (
                                  (r = this.get(
                                    'smartContract'
                                  ).getContractByAddressAndAbi(t, b.default)),
                                  (this.action[t] = r.action()),
                                  i.abrupt('return', this.action[t])
                                );
                              case 5:
                              case 'end':
                                return i.stop();
                            }
                        },
                        _callee5,
                        this
                      );
                    })
                  )),
                  function getAction(t) {
                    return i.apply(this, arguments);
                  })
              },
              {
                key: 'getExecutionDate',
                value:
                  ((r = (0, l.default)(
                    u.default.mark(function _callee6(t) {
                      var r, i, a, l, p, d, y, h, v, g, m;
                      return u.default.wrap(
                        function _callee6$(u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                if (!this.executionDate[t]) {
                                  u.next = 2;
                                  break;
                                }
                                return u.abrupt(
                                  'return',
                                  this.executionDate[t]
                                );
                              case 2:
                                return (u.next = 4), this.getDone(t);
                              case 4:
                                return (
                                  (r = u.sent),
                                  (0, w.default)(
                                    r,
                                    'spell '.concat(t, ' has not been executed')
                                  ),
                                  (i = this._pauseContract().address),
                                  (a = this.get('web3')),
                                  (l = a.network),
                                  (p = (0, O.netIdToName)(l)),
                                  (d =
                                    '0x' +
                                    (0, _.default)(
                                      t.replace(/^0x/, ''),
                                      64,
                                      '0'
                                    )),
                                  (u.next = 13),
                                  a.getPastLogs({
                                    fromBlock: S.inception_block[p],
                                    toBlock: 'latest',
                                    address: i,
                                    topics: [S.events.exec, d]
                                  })
                                );
                              case 13:
                                return (
                                  (y = u.sent),
                                  (h = (0, c.default)(y, 1)),
                                  (v = h[0]),
                                  (u.next = 18),
                                  a.getBlock(v.blockNumber)
                                );
                              case 18:
                                return (
                                  (g = u.sent),
                                  (m = g.timestamp),
                                  (this.executionDate[t] = new Date(1e3 * m)),
                                  u.abrupt('return', this.executionDate[t])
                                );
                              case 22:
                              case 'end':
                                return u.stop();
                            }
                        },
                        _callee6,
                        this
                      );
                    })
                  )),
                  function getExecutionDate(t) {
                    return r.apply(this, arguments);
                  })
              },
              {
                key: 'refresh',
                value: function refresh() {
                  (this.delay = null),
                    (this.eta = {}),
                    (this.done = {}),
                    (this.executionDate = {}),
                    (this.scheduledDate = {});
                }
              },
              {
                key: '_pauseContract',
                value: function _pauseContract() {
                  return this.get('smartContract').getContractByName(m.PAUSE);
                }
              }
            ]),
            SpellService
          );
        })(g.PublicService);
      r.default = k;
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"SAIMOM","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SCDCAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"action","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cast","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"done","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextCastTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pause","outputs":[{"internalType":"contract DSPauseAbstract","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"schedule","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sig","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tag","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    function(t, r, i) {
      var a = i(184),
        u = i(79),
        c = i(76),
        l = i(196);
      t.exports = function padStart(t, r, i) {
        t = l(t);
        var p = (r = c(r)) ? u(t) : 0;
        return r && p < r ? a(r - p, i) + t : t;
      };
    },
    function(t, r, i) {
      var a = i(185),
        u = i(78),
        c = i(188),
        l = i(50),
        p = i(79),
        d = i(193),
        y = Math.ceil;
      t.exports = function createPadding(t, r) {
        var i = (r = void 0 === r ? ' ' : u(r)).length;
        if (i < 2) return i ? a(r, t) : r;
        var h = a(r, y(t / p(r)));
        return l(r) ? c(d(h), 0, t).join('') : h.slice(0, t);
      };
    },
    function(t, r) {
      var i = Math.floor;
      t.exports = function baseRepeat(t, r) {
        var a = '';
        if (!t || r < 1 || r > 9007199254740991) return a;
        do {
          r % 2 && (a += t), (r = i(r / 2)) && (t += t);
        } while (r);
        return a;
      };
    },
    function(t, r) {
      t.exports = function arrayMap(t, r) {
        for (var i = -1, a = null == t ? 0 : t.length, u = Array(a); ++i < a; )
          u[i] = r(t[i], i, t);
        return u;
      };
    },
    function(t, r) {
      var i = Array.isArray;
      t.exports = i;
    },
    function(t, r, i) {
      var a = i(189);
      t.exports = function castSlice(t, r, i) {
        var u = t.length;
        return (i = void 0 === i ? u : i), !r && i >= u ? t : a(t, r, i);
      };
    },
    function(t, r) {
      t.exports = function baseSlice(t, r, i) {
        var a = -1,
          u = t.length;
        r < 0 && (r = -r > u ? 0 : u + r),
          (i = i > u ? u : i) < 0 && (i += u),
          (u = r > i ? 0 : (i - r) >>> 0),
          (r >>>= 0);
        for (var c = Array(u); ++a < u; ) c[a] = t[a + r];
        return c;
      };
    },
    function(t, r, i) {
      var a = i(191)('length');
      t.exports = a;
    },
    function(t, r) {
      t.exports = function baseProperty(t) {
        return function(r) {
          return null == r ? void 0 : r[t];
        };
      };
    },
    function(t, r) {
      var i = '[\\ud800-\\udfff]',
        a = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        u = '\\ud83c[\\udffb-\\udfff]',
        c = '[^\\ud800-\\udfff]',
        l = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        p = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        d = '(?:' + a + '|' + u + ')' + '?',
        y =
          '[\\ufe0e\\ufe0f]?' +
          d +
          ('(?:\\u200d(?:' +
            [c, l, p].join('|') +
            ')[\\ufe0e\\ufe0f]?' +
            d +
            ')*'),
        h = '(?:' + [c + a + '?', a, l, p, i].join('|') + ')',
        v = RegExp(u + '(?=' + u + ')|' + h + y, 'g');
      t.exports = function unicodeSize(t) {
        for (var r = (v.lastIndex = 0); v.test(t); ) ++r;
        return r;
      };
    },
    function(t, r, i) {
      var a = i(194),
        u = i(50),
        c = i(195);
      t.exports = function stringToArray(t) {
        return u(t) ? c(t) : a(t);
      };
    },
    function(t, r) {
      t.exports = function asciiToArray(t) {
        return t.split('');
      };
    },
    function(t, r) {
      var i = '[\\ud800-\\udfff]',
        a = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        u = '\\ud83c[\\udffb-\\udfff]',
        c = '[^\\ud800-\\udfff]',
        l = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        p = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        d = '(?:' + a + '|' + u + ')' + '?',
        y =
          '[\\ufe0e\\ufe0f]?' +
          d +
          ('(?:\\u200d(?:' +
            [c, l, p].join('|') +
            ')[\\ufe0e\\ufe0f]?' +
            d +
            ')*'),
        h = '(?:' + [c + a + '?', a, l, p, i].join('|') + ')',
        v = RegExp(u + '(?=' + u + ')|' + h + y, 'g');
      t.exports = function unicodeToArray(t) {
        return t.match(v) || [];
      };
    },
    function(t, r, i) {
      var a = i(78);
      t.exports = function toString(t) {
        return null == t ? '' : a(t);
      };
    },
    function(t) {
      t.exports = JSON.parse(
        '{"MCD_ADM":"0xaa36e5592a72b1E3Ea64A3cA814b4D856Bc6d178","VOTE_PROXY_FACTORY":"0x454FAD528884FeE7Ab142DB44E664e1579172A98","POLLING":"0x7804091aae6fdff12d38d1c50ba97d10eb861de6","BATCH_POLLING":"0x7804091aae6fdff12d38d1c50ba97d10eb861de6","MCD_ESM":"0xF05a94F90cc8A0717a56b3fc573aaB3262E85661","MCD_END":"0xd231316e6316D51EB16E5495F0eb286F0a06d757","GOV":"0x66d2871758f9a4c54f8D31A4e72223AdAc36C8ba","MCD_IOU":"0x774fd7dE54411c31b08b803Db76bff21a2E0Ea06","PAUSE":"0xC15d901377A6b0f1F35DEaca774516dC5d3e673B"}'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '{"MCD_ADM":"0x0a3f6849f78076aefaDf113F5BED87720274dDC0","VOTE_PROXY_FACTORY":"0x6FCD258af181B3221073A96dD90D1f7AE7eEc408","GOV":"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2","MCD_IOU":"0xa618e54de493ec29432ebd2ca7f14efbf6ac17f7","POLLING":"0xF9be8F0945acDdeeDaA64DFCA5Fe9629D0CF8E5D","BATCH_POLLING":"0xD3A9FE267852281a1e6307a1C37CDfD76d39b133","MCD_ESM":"0x0581a0abe32aae9b5f0f68defab77c6759100085","MCD_END":"0xab14d3ce3f733cacb76ec2abe7d2fcb00c99f3d5","PAUSE":"0xbe286431454714f511008713973d3b053a2d38f3"}'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '{"POLLING":"0x9A2810a12197CB844af4BA74a4b81bC1CA727130","BATCH_POLLING":"0xa9D33Ce18803b0742460ffb1b33B6c40f95178BC","VOTE_PROXY_FACTORY":"0x1F398c945F8de27650c74C1881f1c96eC8720472","MCD_ESM":"0xb379BdC949F09e0E1c866785D1896B763E1387b0","MCD_END":"0x31880D3A1E5cbF402b6F9840e7aDC6E7962b771B","PAUSE":"0x2125C30dA5DcA0819aEC5e4cdbF58Bfe91918e43","MCD_ADM":"0x923bA231643e473b1e98aE606d954f2609C99985","MCD_IOU":"0x7B78e7F3F84c360Df5e1B770D4355aD2d4d206C9","SAI_GOV":"0x1c3ac7216250edc5b9daa5598da0579688b9dbd5"}'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"gem_","type":"address"},{"internalType":"address","name":"end_","type":"address"},{"internalType":"address","name":"pit_","type":"address"},{"internalType":"uint256","name":"min_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"constant":true,"inputs":[],"name":"Sum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"end","outputs":[{"internalType":"contract EndLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"fire","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"fired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gem","outputs":[{"internalType":"contract GemLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"join","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"min","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pit","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"sum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"Art","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"cage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"cash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cat","outputs":[{"internalType":"contract CatLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"debt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"fix","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"flow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"free","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"gap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"live","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"out","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pack","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pot","outputs":[{"internalType":"contract PotLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"urn","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"skip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"spot","outputs":[{"internalType":"contract Spotty","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"tag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"thaw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"vat","outputs":[{"internalType":"contract VatLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vow","outputs":[{"internalType":"contract VowLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"when","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract DSToken","name":"GOV","type":"address"},{"internalType":"contract DSToken","name":"IOU","type":"address"},{"internalType":"uint256","name":"MAX_YAYS","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"slate","type":"bytes32"}],"name":"Etch","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":true,"internalType":"bytes32","name":"foo","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"bar","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":true,"inputs":[],"name":"GOV","outputs":[{"internalType":"contract DSToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"IOU","outputs":[{"internalType":"contract DSToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_YAYS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"approvals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"internalType":"contract DSAuthority","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"caller","type":"address"},{"internalType":"address","name":"code","type":"address"},{"internalType":"bytes4","name":"sig","type":"bytes4"}],"name":"canCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"yays","type":"address[]"}],"name":"etch","outputs":[{"internalType":"bytes32","name":"slate","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"free","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"code","type":"address"},{"internalType":"bytes4","name":"sig","type":"bytes4"}],"name":"getCapabilityRoles","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"getUserRoles","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"uint8","name":"role","type":"uint8"}],"name":"hasUserRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hat","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"code","type":"address"},{"internalType":"bytes4","name":"sig","type":"bytes4"}],"name":"isCapabilityPublic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"isUserRoot","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"last","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"launch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"whom","type":"address"}],"name":"lift","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"live","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"lock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract DSAuthority","name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"code","type":"address"},{"internalType":"bytes4","name":"sig","type":"bytes4"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setPublicCapability","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint8","name":"role","type":"uint8"},{"internalType":"address","name":"code","type":"address"},{"internalType":"bytes4","name":"sig","type":"bytes4"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setRoleCapability","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setRootUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"uint8","name":"role","type":"uint8"},{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setUserRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"slates","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"slate","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"yays","type":"address[]"}],"name":"vote","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"chief_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"cold","type":"address"},{"indexed":true,"internalType":"address","name":"hot","type":"address"},{"indexed":true,"internalType":"address","name":"voteProxy","type":"address"}],"name":"LinkConfirmed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"cold","type":"address"},{"indexed":true,"internalType":"address","name":"hot","type":"address"}],"name":"LinkRequested","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"cold","type":"address"}],"name":"approveLink","outputs":[{"internalType":"contract VoteProxy","name":"voteProxy","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"breakLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"chief","outputs":[{"internalType":"contract ChiefLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"coldMap","outputs":[{"internalType":"contract VoteProxy","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"hasProxy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hotMap","outputs":[{"internalType":"contract VoteProxy","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"hot","type":"address"}],"name":"initiateLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"linkRequests","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"linkSelf","outputs":[{"internalType":"contract VoteProxy","name":"voteProxy","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"constant":false,"inputs":[{"name":"pollId","type":"uint256"}],"name":"withdrawPoll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollIds","type":"uint256[]"}],"name":"withdrawPoll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollIds","type":"uint256[]"},{"name":"optionIds","type":"uint256[]"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollId","type":"uint256"},{"name":"optionId","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"npoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"startDate","type":"uint256"},{"name":"endDate","type":"uint256"},{"name":"multiHash","type":"string"},{"name":"url","type":"string"}],"name":"createPoll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"blockCreated","type":"uint256"},{"indexed":true,"name":"pollId","type":"uint256"},{"indexed":false,"name":"startDate","type":"uint256"},{"indexed":false,"name":"endDate","type":"uint256"},{"indexed":false,"name":"multiHash","type":"string"},{"indexed":false,"name":"url","type":"string"}],"name":"PollCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"blockWithdrawn","type":"uint256"},{"indexed":false,"name":"pollId","type":"uint256"}],"name":"PollWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"voter","type":"address"},{"indexed":true,"name":"pollId","type":"uint256"},{"indexed":true,"name":"optionId","type":"uint256"}],"name":"Voted","type":"event"}]'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"constant":false,"inputs":[{"name":"pollId","type":"uint256"}],"name":"withdrawPoll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollIds","type":"uint256[]"}],"name":"withdrawPoll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollIds","type":"uint256[]"},{"name":"optionIds","type":"uint256[]"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollId","type":"uint256"},{"name":"optionId","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"npoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"startDate","type":"uint256"},{"name":"endDate","type":"uint256"},{"name":"multiHash","type":"string"},{"name":"url","type":"string"}],"name":"createPoll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"blockCreated","type":"uint256"},{"indexed":true,"name":"pollId","type":"uint256"},{"indexed":false,"name":"startDate","type":"uint256"},{"indexed":false,"name":"endDate","type":"uint256"},{"indexed":false,"name":"multiHash","type":"string"},{"indexed":false,"name":"url","type":"string"}],"name":"PollCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"blockWithdrawn","type":"uint256"},{"indexed":false,"name":"pollId","type":"uint256"}],"name":"PollWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"voter","type":"address"},{"indexed":true,"name":"pollId","type":"uint256"},{"indexed":true,"name":"optionId","type":"uint256"}],"name":"Voted","type":"event"}]'
      );
    },
    function(t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"uint256","name":"delay_","type":"uint256"},{"internalType":"address","name":"owner_","type":"address"},{"internalType":"contract DSAuthority","name":"authority_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":true,"internalType":"bytes32","name":"foo","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"bar","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"internalType":"contract DSAuthority","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"bytes32","name":"tag","type":"bytes32"},{"internalType":"bytes","name":"fax","type":"bytes"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"drop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"bytes32","name":"tag","type":"bytes32"},{"internalType":"bytes","name":"fax","type":"bytes"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"exec","outputs":[{"internalType":"bytes","name":"out","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"plans","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"bytes32","name":"tag","type":"bytes32"},{"internalType":"bytes","name":"fax","type":"bytes"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"plot","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"proxy","outputs":[{"internalType":"contract DSPauseProxy","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract DSAuthority","name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"delay_","type":"uint256"}],"name":"setDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    }
  ]);
});
//# sourceMappingURL=index.js.map
