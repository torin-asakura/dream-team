module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Egc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9xZ");







const Item = ({
  review
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  width: 405,
  border: "1px solid blue",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    flexBasis: 24
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 24
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      height: 32,
      border: "1px solid black",
      children: review.title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 4
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      height: 24,
      border: "1px solid black",
      children: review.review.respondent
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 16
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: "100%",
      border: "1px solid black",
      children: review.content
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 16
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      height: 24,
      border: "1px solid black",
      children: "+ \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 24
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    flexBasis: 24
  })]
});



/***/ }),

/***/ "+tDu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__("UPyE");
var utilities = __webpack_require__("cu/J");
var tslib = __webpack_require__("rHeM");
var utils = __webpack_require__("ZYa/");

function passthrough(op, forward) {
    return (forward ? forward(op) : utilities.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    tslib.__extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return utilities.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || utilities.Observable.of()
                    : rightLink.request(operation) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || utilities.Observable.of()
                    : rightLink.request(operation, forward) || utilities.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(utils.createOperation(operation.context, utils.transformOperation(utils.validateOperation(operation)))) || utilities.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && tsInvariant.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || utilities.Observable.of(); }) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || utilities.Observable.of();
                }) || utilities.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new tsInvariant.InvariantError('request is not implemented') : new tsInvariant.InvariantError(23);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

var empty = ApolloLink.empty;

var from = ApolloLink.from;

var split = ApolloLink.split;

var concat = ApolloLink.concat;

var execute = ApolloLink.execute;

__DEV__ ? tsInvariant.invariant("boolean" === typeof utilities.DEV, utilities.DEV) : tsInvariant.invariant("boolean" === typeof utilities.DEV, 24);

exports.ApolloLink = ApolloLink;
exports.concat = concat;
exports.empty = empty;
exports.execute = execute;
exports.from = from;
exports.split = split;
//# sourceMappingURL=core.cjs.js.map


/***/ }),

/***/ "+zLr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9xZ");
/* harmony import */ var _ui_condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oG5o");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LYXN");








const Item = ({
  contentObject: {
    title,
    content,
    excerpt,
    fragments
  }
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  height: 444,
  border: "1px solid black",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_condition__WEBPACK_IMPORTED_MODULE_3__["Condition"], {
    match: !(fragments !== null && fragments !== void 0 && fragments.reverse),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: "100%",
      border: "1px solid red",
      children: "Image"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_content__WEBPACK_IMPORTED_MODULE_4__["Content"], {
      title: title,
      content: content,
      excerpt: excerpt
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_condition__WEBPACK_IMPORTED_MODULE_3__["Condition"], {
    match: fragments === null || fragments === void 0 ? void 0 : fragments.reverse,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_content__WEBPACK_IMPORTED_MODULE_4__["Content"], {
      title: title,
      content: content,
      excerpt: excerpt
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: "100%",
      border: "1px solid red",
      children: "Image"
    })]
  })]
});



/***/ }),

/***/ "/J7S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

const safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return global }) ||
  maybe(function() { return Function("return this")() })
);

let needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "production" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

exports.install = install;
exports.remove = remove;
//# sourceMappingURL=main.js.map


/***/ }),

/***/ "/VSv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__("rHeM");
var tsInvariant = __webpack_require__("UPyE");
var utilities = __webpack_require__("cu/J");

__DEV__ ? tsInvariant.invariant("boolean" === typeof utilities.DEV, utilities.DEV) : tsInvariant.invariant("boolean" === typeof utilities.DEV, 22);
function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (utilities.isNonEmptyArray(err.graphQLErrors) || utilities.isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += err.networkError.message + "\n";
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    tslib.__extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

exports.ApolloError = ApolloError;
exports.isApolloError = isApolloError;
//# sourceMappingURL=errors.cjs.js.map


/***/ }),

/***/ "0IRf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("mBxs");
} else {}


/***/ }),

/***/ "0sKP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__("UPyE");
var utilities = __webpack_require__("cu/J");
var context = __webpack_require__("kSir");
var hooks = __webpack_require__("DRiQ");
var parser = __webpack_require__("8THZ");

__DEV__ ? tsInvariant.invariant("boolean" === typeof utilities.DEV, utilities.DEV) : tsInvariant.invariant("boolean" === typeof utilities.DEV, 37);

exports.ApolloConsumer = context.ApolloConsumer;
exports.ApolloProvider = context.ApolloProvider;
exports.getApolloContext = context.getApolloContext;
exports.resetApolloContext = context.resetApolloContext;
exports.DocumentType = parser.DocumentType;
exports.operationName = parser.operationName;
exports.parser = parser.parser;
Object.keys(hooks).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = hooks[k];
});
//# sourceMappingURL=react.cjs.js.map


/***/ }),

/***/ "1XEf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function sheetForTag(tag) {
  if (tag.sheet) return tag.sheet;
  for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
}

function createStyleElement(options) {
  var tag = document.createElement("style");
  return tag.setAttribute("data-emotion", options.key), void 0 !== options.nonce && tag.setAttribute("nonce", options.nonce), 
  tag.appendChild(document.createTextNode("")), tag.setAttribute("data-s", ""), tag;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var StyleSheet = function() {
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      before = 0 === _this.tags.length ? _this.prepend ? _this.container.firstChild : _this.before : _this.tags[_this.tags.length - 1].nextSibling, 
      _this.container.insertBefore(tag, before), _this.tags.push(tag);
    }, this.isSpeedy = void 0 === options.speedy || options.speedy, this.tags = [], 
    this.ctr = 0, this.nonce = options.nonce, this.key = options.key, this.container = options.container, 
    this.prepend = options.prepend, this.before = null;
  }
  var _proto = StyleSheet.prototype;
  return _proto.hydrate = function(nodes) {
    nodes.forEach(this._insertTag);
  }, _proto.insert = function(rule) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(createStyleElement(this));
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        0;
      }
    } else tag.appendChild(document.createTextNode(rule));
    this.ctr++;
  }, _proto.flush = function() {
    this.tags.forEach((function(tag) {
      return tag.parentNode.removeChild(tag);
    })), this.tags = [], this.ctr = 0;
  }, StyleSheet;
}();

exports.StyleSheet = StyleSheet;


/***/ }),

/***/ "1Yrn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9xZ");







const Content = ({
  title,
  excerpt,
  content
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  width: "100%",
  border: "1px solid blue",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    width: "100%",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      height: 16,
      width: "100%",
      children: title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: "100%",
      children: excerpt
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      width: "100%",
      children: content
    })]
  })
});



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cFSR");


/***/ }),

/***/ "2lJ6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__("R83w");

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Jbvi")(module)))

/***/ }),

/***/ "3YhR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "46OI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const styled_1 = __importDefault(__webpack_require__("jRWd"));
const layout_1 = __webpack_require__("JOlZ");
const Column = styled_1.default(layout_1.Layout)();
exports.Column = Column;
Column.defaultProps = {
    boxSizing: 'border-box',
    flexDirection: 'column',
    display: 'flex',
    height: '100%',
};


/***/ }),

/***/ "479R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Condition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* eslint-disable react/require-default-props */



const Condition = (_ref) => {
  let {
    match
  } = _ref,
      props = _objectWithoutProperties(_ref, ["match"]);

  return match ? /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], props) : null;
};



/***/ }),

/***/ "4gcX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("JeQz");
} else {}


/***/ }),

/***/ "6Z3W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("pO7z");
} else {}


/***/ }),

/***/ "6o9n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("70+z"), exports);
__exportStar(__webpack_require__("JOlZ"), exports);
__exportStar(__webpack_require__("q1IT"), exports);
__exportStar(__webpack_require__("k2Dz"), exports);


/***/ }),

/***/ "6tLI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+Egc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _item_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qyQU");
/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_item_interface__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "70+z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("46OI"), exports);


/***/ }),

/***/ "7IO8":
/***/ (function(module, exports) {



/***/ }),

/***/ "7fkC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.layout = void 0;

var _core = __webpack_require__("Ew0i");

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return (0, _core.get)(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = (0, _core.system)(config);
exports.layout = layout;
var _default = layout;
exports["default"] = _default;

/***/ }),

/***/ "8THZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__("UPyE");

exports.DocumentType = void 0;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(exports.DocumentType || (exports.DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case exports.DocumentType.Query:
            name = 'Query';
            break;
        case exports.DocumentType.Mutation:
            name = 'Mutation';
            break;
        case exports.DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? tsInvariant.invariant(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : tsInvariant.invariant(!!document && !!document.kind, 38);
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
    __DEV__ ? tsInvariant.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : tsInvariant.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 39);
    __DEV__ ? tsInvariant.invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : tsInvariant.invariant(queries.length + mutations.length + subscriptions.length <= 1, 40);
    type = queries.length ? exports.DocumentType.Query : exports.DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = exports.DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? tsInvariant.invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : tsInvariant.invariant(definitions.length === 1, 41);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}

exports.operationName = operationName;
exports.parser = parser;
//# sourceMappingURL=parser.cjs.js.map


/***/ }),

/***/ "8dIq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9xZ");








const Item = ({
  category
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  width: "100%",
  maxWidth: 624,
  border: "1px solid blue",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    flexBasis: 32
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        border: "1px solid black",
        width: 56,
        height: 56,
        children: "Icon"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 24
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        height: 40,
        border: "1px solid black",
        width: "100%",
        children: category.name
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        border: "1px solid black",
        width: "100%",
        flexWrap: "wrap",
        children: category.skills.nodes.map(({
          title
        }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          px: "12px",
          py: "8px",
          children: title
        }))
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    flexBasis: 32
  })]
});



/***/ }),

/***/ "9vJd":
/***/ (function(module, exports) {



/***/ }),

/***/ "ASJh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var memoize = __webpack_require__("q/ih");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var memoize__default = _interopDefault(memoize), reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = memoize__default.default((function(prop) {
  return reactPropsRegex.test(prop) || 111 === prop.charCodeAt(0) && 110 === prop.charCodeAt(1) && prop.charCodeAt(2) < 91;
}));

exports.default = isPropValid;


/***/ }),

/***/ "D/5K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.typography = void 0;

var _core = __webpack_require__("Ew0i");

var defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = (0, _core.system)(config);
exports.typography = typography;
var _default = typography;
exports["default"] = _default;

/***/ }),

/***/ "DFEm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var utilities = __webpack_require__("cu/J");
var tslib = __webpack_require__("rHeM");
var tsInvariant = __webpack_require__("UPyE");
var core = __webpack_require__("+tDu");
var http = __webpack_require__("TO7t");
var equality = __webpack_require__("nOev");
var cache = __webpack_require__("pFDM");
var errors = __webpack_require__("/VSv");
var graphql = __webpack_require__("T7Fc");
var utils = __webpack_require__("ZYa/");
var graphqlTag = __webpack_require__("GeHN");

var version = '3.4.5';

exports.NetworkStatus = void 0;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(exports.NetworkStatus || (exports.NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}

var warnedAboutUpdateQuery = false;
var ObservableQuery = (function (_super) {
    tslib.__extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            if (_this.lastError) {
                observer.error && observer.error(_this.lastError);
            }
            else if (_this.lastResult) {
                observer.next && observer.next(_this.lastResult);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.observer = {
            next: function (result) {
                if (_this.lastError || _this.isDifferentFromLastResult(result)) {
                    _this.updateLastResult(result);
                    utilities.iterateObserversSafely(_this.observers, 'next', result);
                }
            },
            error: function (error) {
                _this.updateLastResult(tslib.__assign(tslib.__assign({}, _this.lastResult), { error: error, errors: error.graphQLErrors, networkStatus: exports.NetworkStatus.error, loading: false }));
                utilities.iterateObserversSafely(_this.observers, 'error', _this.lastError = error);
            },
        };
        _this.isTornDown = false;
        _this.options = options;
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = utilities.getOperationDefinition(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
        _this.queryManager = queryManager;
        _this.queryInfo = queryInfo;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var _a = this, lastResult = _a.lastResult, _b = _a.options.fetchPolicy, fetchPolicy = _b === void 0 ? "cache-first" : _b;
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            exports.NetworkStatus.ready;
        var result = tslib.__assign(tslib.__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus });
        if (!this.queryManager.transform(this.options.query).hasForcedResolvers) {
            var diff = this.queryInfo.getDiff();
            result.data = (diff.complete ||
                this.options.returnPartialData) ? diff.result : void 0;
            if (diff.complete) {
                if (result.networkStatus === exports.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = exports.NetworkStatus.ready;
                    result.loading = false;
                }
                delete result.partial;
            }
            else if (fetchPolicy !== "no-cache") {
                result.partial = true;
            }
            if (!diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                result.error = new errors.ApolloError({ clientErrors: diff.missing });
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        return !equality.equal(this.lastResultSnapshot, newResult);
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else if (fetchPolicy !== 'cache-and-network') {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (variables && !equality.equal(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = tslib.__assign(tslib.__assign({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, exports.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = tslib.__assign(tslib.__assign({}, (fetchMoreOptions.query ? fetchMoreOptions : tslib.__assign(tslib.__assign(tslib.__assign({}, this.options), fetchMoreOptions), { variables: tslib.__assign(tslib.__assign({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.queryInfo.networkStatus = exports.NetworkStatus.fetchMore;
            this.observe();
        }
        return this.queryManager.fetchQuery(qid, combinedOptions, exports.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            var data = fetchMoreResult.data;
            var updateQuery = fetchMoreOptions.updateQuery;
            if (updateQuery) {
                if (__DEV__ &&
                    !warnedAboutUpdateQuery) {
                    __DEV__ && tsInvariant.invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
                    warnedAboutUpdateQuery = true;
                }
                _this.updateQuery(function (previous) { return updateQuery(previous, {
                    fetchMoreResult: data,
                    variables: combinedOptions.variables,
                }); });
            }
            else {
                _this.queryManager.cache.writeQuery({
                    query: combinedOptions.query,
                    variables: combinedOptions.variables,
                    data: data,
                });
            }
            return fetchMoreResult;
        }).finally(function () {
            _this.queryManager.stopQuery(qid);
            _this.reobserve();
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && tsInvariant.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if (equality.equal(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.initialFetchPolicy,
            variables: variables,
        }, exports.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var _a;
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            previousResult: (_a = this.lastResult) === null || _a === void 0 ? void 0 : _a.data,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? tsInvariant.invariant(pollInterval, 'Attempted to start a polling query without a polling interval.') : tsInvariant.invariant(pollInterval, 13);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: "network-only",
                    }, exports.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult) {
        var previousResult = this.lastResult;
        this.lastResult = newResult;
        this.lastResultSnapshot = this.queryManager.assumeImmutableResults
            ? newResult
            : utilities.cloneDeep(newResult);
        if (!utilities.isNonEmptyArray(newResult.errors)) {
            delete this.lastError;
        }
        return previousResult;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === exports.NetworkStatus.refetch ||
            newNetworkStatus === exports.NetworkStatus.fetchMore ||
            newNetworkStatus === exports.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var options = useDisposableConcast
            ? utilities.compact(this.options, newOptions)
            : Object.assign(this.options, utilities.compact(newOptions));
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !newOptions.fetchPolicy &&
                !equality.equal(newOptions.variables, oldVariables)) {
                options.fetchPolicy = this.initialFetchPolicy;
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = exports.NetworkStatus.setVariables;
                }
            }
        }
        var concast = this.fetch(options, newNetworkStatus);
        if (!useDisposableConcast) {
            if (this.concast) {
                this.concast.removeObserver(this.observer, true);
            }
            this.concast = concast;
        }
        concast.addObserver(this.observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.observer.next(this.getCurrentResult(false));
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(utilities.Observable));
utilities.fixObservableSubclass(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && tsInvariant.invariant.error('Unhandled error', error.message, error.stack);
}
function applyNextFetchPolicy(options) {
    var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, nextFetchPolicy = options.nextFetchPolicy;
    if (nextFetchPolicy) {
        options.fetchPolicy = typeof nextFetchPolicy === "function"
            ? nextFetchPolicy.call(options, fetchPolicy)
            : nextFetchPolicy;
    }
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = utilities.mergeDeep(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = utilities.mergeDeep(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (tslib.__assign(tslib.__assign({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (utilities.hasDirectives(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return utilities.removeClientSetsFromDocument(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return tslib.__assign(tslib.__assign({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (tslib.__assign(tslib.__assign({}, variables), data.exportedVariables)); })];
                }
                return [2, tslib.__assign({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        graphql.visit(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: utilities.buildQueryFromSelectionSet(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return tslib.__generator(this, function (_b) {
                mainDefinition = utilities.getMainDefinition(document);
                fragments = utilities.getFragmentDefinitions(document);
                fragmentMap = utilities.createFragmentMap(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: tslib.__assign(tslib.__assign({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return tslib.__awaiter(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return tslib.__generator(this, function (_a) {
                        if (!utilities.shouldInclude(selection, variables)) {
                            return [2];
                        }
                        if (utilities.isField(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[utilities.resultKeyNameFromField(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (utilities.isInlineFragment(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? tsInvariant.invariant(fragment, "No fragment named " + selection.name.value) : tsInvariant.invariant(fragment, 12);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return utilities.mergeDeepArray(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = utilities.resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(cache.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                utilities.argumentsObjectFromField(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

var destructiveMethodCounts = new (utilities.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || exports.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== exports.NetworkStatus.loading &&
            !equality.equal(this.variables, query.variables)) {
            networkStatus = exports.NetworkStatus.setVariables;
        }
        if (!equality.equal(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && equality.equal(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: !oq || oq.options.canonizeResults !== false,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !equality.equal(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                if (_this.getDiff().fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    oq.reobserve();
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if (isNetworkRequestInFlight(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = tslib.__assign(tslib.__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !equality.equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            equality.equal(variables, lastWrite.variables) &&
            equality.equal(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = utilities.isNonEmptyArray(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: _this.document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = exports.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = exports.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());
function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !utilities.graphQLResultHasError(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new tsInvariant.InvariantError('QueryManager stopped while query was in flight') : new tsInvariant.InvariantError(14));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, keepRootFields = _a.keepRootFields, context = _a.context;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mutationId, mutationStoreValue, self;
            return tslib.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        __DEV__ ? tsInvariant.invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : tsInvariant.invariant(mutation, 15);
                        __DEV__ ? tsInvariant.invariant(!fetchPolicy || fetchPolicy === 'no-cache', "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior.") : tsInvariant.invariant(!fetchPolicy || fetchPolicy === 'no-cache', 16);
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_e.sent());
                        _e.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return utilities.asyncMap(self.getObservableFromLink(mutation, tslib.__assign(tslib.__assign({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if (utilities.graphQLResultHasError(result) && errorPolicy === 'none') {
                                        throw new errors.ApolloError({
                                            graphQLErrors: result.errors,
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = tslib.__assign({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        utilities.graphQLResultHasError(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        resolve(storeResult);
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof errors.ApolloError ? err : new errors.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && utilities.getOperationName(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = tslib.__assign(tslib.__assign({}, result), { data: diff.result });
                            }
                        }
                        update(cache, result, {
                            context: mutation.context,
                            variables: mutation.variables,
                        });
                    }
                    if (!skipCache && !mutation.keepRootFields) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult(tslib.__assign(tslib.__assign({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && tsInvariant.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = utilities.removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: utilities.hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: utilities.getDefaultValues(utilities.getOperationDefinition(transformed)),
                asQuery: tslib.__assign(tslib.__assign({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return tslib.__assign(tslib.__assign({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return tslib.__assign(tslib.__assign({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = tslib.__assign(tslib.__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: options.query,
            observableQuery: observable,
            variables: options.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? tsInvariant.invariant(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : tsInvariant.invariant(options.query, 17);
        __DEV__ ? tsInvariant.invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : tsInvariant.invariant(options.query.kind === 'Document', 18);
        __DEV__ ? tsInvariant.invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : tsInvariant.invariant(!options.returnPartialData, 19);
        __DEV__ ? tsInvariant.invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : tsInvariant.invariant(!options.pollInterval, 20);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function () {
        this.cancelPendingFetches(__DEV__ ? new tsInvariant.InvariantError('Store reset while query was in flight (not completed in link chain)') : new tsInvariant.InvariantError(21));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = exports.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset();
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if (utilities.isDocumentNode(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if (utilities.isNonNullObject(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" || !oq.hasObservers()) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = utilities.makeUniqueId("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: tslib.__assign(tslib.__assign({}, options), { fetchPolicy: "network-only" }),
                });
                tsInvariant.invariant(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && tsInvariant.invariant.warn("Unknown query " + (typeof nameOrDoc === "string" ? "named " : "") + JSON.stringify(nameOrDoc, null, 2) + " requested in refetchQueries options.include array");
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if (shouldWriteResult(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if (utilities.graphQLResultHasError(result)) {
                    throw new errors.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new utilities.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: utilities.getOperationName(serverQuery) || void 0,
                context: this.prepareContext(tslib.__assign(tslib.__assign({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = cache.canonicalStringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new utilities.Concast([
                        core.execute(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new utilities.Concast([
                    core.execute(link, operation)
                ]);
            }
        }
        else {
            observable = new utilities.Concast([
                utilities.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = utilities.asyncMap(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return utilities.asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
            var hasErrors = utilities.isNonEmptyArray(result.errors);
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new errors.ApolloError({
                        graphQLErrors: result.errors,
                    }));
                }
                queryInfo.markResult(result, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: queryInfo.networkStatus || exports.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
            }
            return aqr;
        }, function (networkError) {
            var error = errors.isApolloError(networkError)
                ? networkError
                : new errors.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = exports.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function (reason) {
            Promise.resolve().then(function () { return concast.cancel(reason); });
        });
        var concast = new utilities.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.cleanup(function () {
            _this.fetchCancelFns.delete(queryId);
            applyNextFetchPolicy(options);
        });
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? utilities.makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return false;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: query,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || exports.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                utilities.isNonEmptyArray(diff.missing) &&
                !equality.equal(data, {}) &&
                !returnPartialData) {
                __DEV__ && tsInvariant.invariant.debug("Missing cache result fields: " + diff.missing.map(function (m) { return m.path.join('.'); }).join(', '), diff.missing);
            }
            var fromData = function (data) { return utilities.Observable.of(tslib.__assign({ data: data, loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === exports.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
            });
        };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            isNetworkRequestInFlight(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return tslib.__assign(tslib.__assign({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
    return utilities.compact(defaults, options, options.variables && {
        variables: tslib.__assign(tslib.__assign({}, defaults.variables), options.variables),
    });
}
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new http.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : core.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new tsInvariant.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new tsInvariant.InvariantError(10);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && tsInvariant.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? tsInvariant.invariant(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : tsInvariant.invariant(options.fetchPolicy !== 'cache-and-network', 11);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return core.execute(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && tsInvariant.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error " + error);
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

tsInvariant.setVerbosity(utilities.DEV ? "log" : "silent");

exports.Observable = utilities.Observable;
exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.setLogVerbosity = tsInvariant.setVerbosity;
exports.ApolloCache = cache.ApolloCache;
exports.Cache = cache.Cache;
exports.InMemoryCache = cache.InMemoryCache;
exports.MissingFieldError = cache.MissingFieldError;
exports.defaultDataIdFromObject = cache.defaultDataIdFromObject;
exports.makeVar = cache.makeVar;
exports.ApolloError = errors.ApolloError;
exports.isApolloError = errors.isApolloError;
exports.fromError = utils.fromError;
exports.fromPromise = utils.fromPromise;
exports.throwServerError = utils.throwServerError;
exports.toPromise = utils.toPromise;
exports.disableExperimentalFragmentVariables = graphqlTag.disableExperimentalFragmentVariables;
exports.disableFragmentWarnings = graphqlTag.disableFragmentWarnings;
exports.enableExperimentalFragmentVariables = graphqlTag.enableExperimentalFragmentVariables;
exports.gql = graphqlTag.gql;
exports.resetCaches = graphqlTag.resetCaches;
exports.ApolloClient = ApolloClient;
exports.ObservableQuery = ObservableQuery;
exports.applyNextFetchPolicy = applyNextFetchPolicy;
exports.mergeOptions = mergeOptions;
Object.keys(core).forEach(function (k) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
});
Object.keys(http).forEach(function (k) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = http[k];
});
//# sourceMappingURL=core.cjs.js.map


/***/ }),

/***/ "DRiQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var tsInvariant = __webpack_require__("UPyE");
var context = __webpack_require__("kSir");
var tslib = __webpack_require__("rHeM");
var data = __webpack_require__("IjYG");
var equality = __webpack_require__("nOev");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            n[k] = e[k];
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function useApolloClient() {
    var client = React__namespace.useContext(context.getApolloContext()).client;
    __DEV__ ? tsInvariant.invariant(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.') : tsInvariant.invariant(client, 36);
    return client;
}

function useDeepMemo(memoFn, key) {
    var ref = React.useRef();
    if (!ref.current || !equality.equal(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}

function useAfterFastRefresh(effectFn) {
    if (__DEV__) {
        var didRefresh_1 = React.useRef(false);
        React.useEffect(function () {
            return function () {
                didRefresh_1.current = true;
            };
        }, []);
        React.useEffect(function () {
            if (didRefresh_1.current === true) {
                didRefresh_1.current = false;
                effectFn();
            }
        }, []);
    }
}

function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context$1 = React.useContext(context.getApolloContext());
    var _a = React.useReducer(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? tslib.__assign(tslib.__assign({}, options), { query: query }) : { query: query };
    var queryDataRef = React.useRef();
    var queryData = queryDataRef.current || (queryDataRef.current = new data.QueryData({
        options: updatedOptions,
        context: context$1,
        onNewData: function () {
            if (!queryData.ssrInitiated()) {
                Promise.resolve().then(function () { return queryDataRef.current && queryDataRef.current.isMounted && forceUpdate(); });
            }
            else {
                forceUpdate();
            }
        }
    }));
    queryData.setOptions(updatedOptions);
    queryData.context = context$1;
    var memo = {
        options: tslib.__assign(tslib.__assign({}, updatedOptions), { onError: void 0, onCompleted: void 0 }),
        context: context$1,
        tick: tick
    };
    var result = useDeepMemo(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    if (__DEV__) {
        useAfterFastRefresh(forceUpdate);
    }
    React.useEffect(function () {
        return function () {
            queryData.cleanup();
            queryDataRef.current = void 0;
        };
    }, []);
    React.useEffect(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
        queryData.currentObservable,
    ]);
    return result;
}

function useLazyQuery(query, options) {
    return useBaseQuery(query, options, true);
}

function useMutation(mutation, options) {
    var context$1 = React.useContext(context.getApolloContext());
    var _a = React.useState({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? tslib.__assign(tslib.__assign({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = React.useRef();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new data.MutationData({
                options: updatedOptions,
                context: context$1,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context$1;
    React.useEffect(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}

function useQuery(query, options) {
    return useBaseQuery(query, options, false);
}

function useSubscription(subscription, options) {
    var _a = React.useReducer(function (x) { return x + 1; }, 0), forceUpdate = _a[1];
    var context$1 = React.useContext(context.getApolloContext());
    var updatedOptions = options
        ? tslib.__assign(tslib.__assign({}, options), { subscription: subscription }) : { subscription: subscription };
    var _b = React.useState({
        loading: !updatedOptions.skip,
        error: void 0,
        data: void 0,
    }), result = _b[0], setResult = _b[1];
    var subscriptionDataRef = React.useRef();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new data.SubscriptionData({
                options: updatedOptions,
                context: context$1,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context$1;
    if (__DEV__) {
        useAfterFastRefresh(forceUpdate);
    }
    React.useEffect(function () { return subscriptionData.afterExecute(); });
    React.useEffect(function () {
        return function () {
            subscriptionData.cleanup();
            subscriptionDataRef.current = void 0;
        };
    }, []);
    return subscriptionData.execute(result);
}

function useReactiveVar(rv) {
    var value = rv();
    var setValue = React.useState(value)[1];
    React.useEffect(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}

exports.useApolloClient = useApolloClient;
exports.useLazyQuery = useLazyQuery;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useReactiveVar = useReactiveVar;
exports.useSubscription = useSubscription;
//# sourceMappingURL=hooks.cjs.js.map


/***/ }),

/***/ "Db8u":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__("rHeM"), __webpack_require__("T7Fc")) :
    undefined;
}(this, (function (exports, tslib, graphql) { 'use strict';

    var docCache = new Map();
    var fragmentSourceMap = new Map();
    var printFragmentWarnings = true;
    var experimentalFragmentVariables = false;
    function normalize(string) {
        return string.replace(/[\s,]+/g, ' ').trim();
    }
    function cacheKeyFromLoc(loc) {
        return normalize(loc.source.body.substring(loc.start, loc.end));
    }
    function processFragments(ast) {
        var seenKeys = new Set();
        var definitions = [];
        ast.definitions.forEach(function (fragmentDefinition) {
            if (fragmentDefinition.kind === 'FragmentDefinition') {
                var fragmentName = fragmentDefinition.name.value;
                var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
                var sourceKeySet = fragmentSourceMap.get(fragmentName);
                if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                    if (printFragmentWarnings) {
                        console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                    }
                }
                else if (!sourceKeySet) {
                    fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
                }
                sourceKeySet.add(sourceKey);
                if (!seenKeys.has(sourceKey)) {
                    seenKeys.add(sourceKey);
                    definitions.push(fragmentDefinition);
                }
            }
            else {
                definitions.push(fragmentDefinition);
            }
        });
        return tslib.__assign(tslib.__assign({}, ast), { definitions: definitions });
    }
    function stripLoc(doc) {
        var workSet = new Set(doc.definitions);
        workSet.forEach(function (node) {
            if (node.loc)
                delete node.loc;
            Object.keys(node).forEach(function (key) {
                var value = node[key];
                if (value && typeof value === 'object') {
                    workSet.add(value);
                }
            });
        });
        var loc = doc.loc;
        if (loc) {
            delete loc.startToken;
            delete loc.endToken;
        }
        return doc;
    }
    function parseDocument(source) {
        var cacheKey = normalize(source);
        if (!docCache.has(cacheKey)) {
            var parsed = graphql.parse(source, {
                experimentalFragmentVariables: experimentalFragmentVariables
            });
            if (!parsed || parsed.kind !== 'Document') {
                throw new Error('Not a valid GraphQL document.');
            }
            docCache.set(cacheKey, stripLoc(processFragments(parsed)));
        }
        return docCache.get(cacheKey);
    }
    function gql(literals) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof literals === 'string') {
            literals = [literals];
        }
        var result = literals[0];
        args.forEach(function (arg, i) {
            if (arg && arg.kind === 'Document') {
                result += arg.loc.source.body;
            }
            else {
                result += arg;
            }
            result += literals[i + 1];
        });
        return parseDocument(result);
    }
    function resetCaches() {
        docCache.clear();
        fragmentSourceMap.clear();
    }
    function disableFragmentWarnings() {
        printFragmentWarnings = false;
    }
    function enableExperimentalFragmentVariables() {
        experimentalFragmentVariables = true;
    }
    function disableExperimentalFragmentVariables() {
        experimentalFragmentVariables = false;
    }
    var extras = {
        gql: gql,
        resetCaches: resetCaches,
        disableFragmentWarnings: disableFragmentWarnings,
        enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
        disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
    };
    (function (gql_1) {
        gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
    })(gql || (gql = {}));
    gql["default"] = gql;
    var gql$1 = gql;

    exports.default = gql$1;
    exports.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;
    exports.disableFragmentWarnings = disableFragmentWarnings;
    exports.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
    exports.gql = gql;
    exports.resetCaches = resetCaches;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=graphql-tag.umd.js.map


/***/ }),

/***/ "DlPd":
/***/ (function(module, exports, __webpack_require__) {

(function(e,r){ true?r(exports):undefined})(this,(function(e){"use strict";var r="-ms-";var a="-moz-";var c="-webkit-";var t="comm";var n="rule";var s="decl";var i="@page";var u="@media";var o="@import";var f="@charset";var l="@viewport";var h="@supports";var p="@document";var v="@namespace";var b="@keyframes";var m="@font-face";var w="@counter-style";var d="@font-feature-values";var $=Math.abs;var k=String.fromCharCode;function g(e,r){return(((r<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3)}function x(e){return e.trim()}function E(e,r){return(e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function T(e,r){return e.indexOf(r)}function A(e,r){return e.charCodeAt(r)|0}function O(e,r,a){return e.slice(r,a)}function M(e){return e.length}function C(e){return e.length}function S(e,r){return r.push(e),e}function R(e,r){return e.map(r).join("")}e.line=1;e.column=1;e.length=0;e.position=0;e.character=0;e.characters="";function z(r,a,c,t,n,s,i){return{value:r,root:a,parent:c,type:t,props:n,children:s,line:e.line,column:e.column,length:i,return:""}}function N(e,r,a){return z(e,r.root,r.parent,a,r.props,r.children,0)}function P(){return e.character}function U(){e.character=e.position>0?A(e.characters,--e.position):0;if(e.column--,e.character===10)e.column=1,e.line--;return e.character}function _(){e.character=e.position<e.length?A(e.characters,e.position++):0;if(e.column++,e.character===10)e.column=1,e.line++;return e.character}function j(){return A(e.characters,e.position)}function F(){return e.position}function I(r,a){return O(e.characters,r,a)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D(r){return e.line=e.column=1,e.length=M(e.characters=r),e.position=0,[]}function K(r){return e.characters="",r}function V(r){return x(I(e.position-1,H(r===91?r+2:r===40?r+1:r)))}function W(e){return K(B(D(e)))}function Y(r){while(e.character=j())if(e.character<33)_();else break;return L(r)>2||L(e.character)>3?"":" "}function B(r){while(_())switch(L(e.character)){case 0:S(q(e.position-1),r);break;case 2:S(V(e.character),r);break;default:S(k(e.character),r)}return r}function G(r,a){while(--a&&_())if(e.character<48||e.character>102||e.character>57&&e.character<65||e.character>70&&e.character<97)break;return I(r,F()+(a<6&&j()==32&&_()==32))}function H(r){while(_())switch(e.character){case r:return e.position;case 34:case 39:return H(r===34||r===39?r:e.character);case 40:if(r===41)H(r);break;case 92:_();break}return e.position}function Z(r,a){while(_())if(r+e.character===47+10)break;else if(r+e.character===42+42&&j()===47)break;return"/*"+I(a,e.position-1)+"*"+k(r===47?r:_())}function q(r){while(!L(j()))_();return I(r,e.position)}function J(e){return K(Q("",null,null,null,[""],e=D(e),0,[0],e))}function Q(e,r,a,c,t,n,s,i,u){var o=0;var f=0;var l=s;var h=0;var p=0;var v=0;var b=1;var m=1;var w=1;var d=0;var $="";var g=t;var x=n;var E=c;var T=$;while(m)switch(v=d,d=_()){case 34:case 39:case 91:case 40:T+=V(d);break;case 9:case 10:case 13:case 32:T+=Y(v);break;case 92:T+=G(F()-1,7);continue;case 47:switch(j()){case 42:case 47:S(ee(Z(_(),F()),r,a),u);break;default:T+="/"}break;case 123*b:i[o++]=M(T)*w;case 125*b:case 59:case 0:switch(d){case 0:case 125:m=0;case 59+f:if(p>0&&M(T)-l)S(p>32?re(T+";",c,a,l-1):re(y(T," ","")+";",c,a,l-2),u);break;case 59:T+=";";default:S(E=X(T,r,a,o,f,t,i,$,g=[],x=[],l),n);if(d===123)if(f===0)Q(T,r,E,E,g,n,l,i,x);else switch(h){case 100:case 109:case 115:Q(e,E,E,c&&S(X(e,E,E,0,0,t,i,$,t,g=[],l),x),t,x,l,i,c?g:x);break;default:Q(T,E,E,E,[""],x,l,i,x)}}o=f=p=0,b=w=1,$=T="",l=s;break;case 58:l=1+M(T),p=v;default:if(b<1)if(d==123)--b;else if(d==125&&b++==0&&U()==125)continue;switch(T+=k(d),d*b){case 38:w=f>0?1:(T+="\f",-1);break;case 44:i[o++]=(M(T)-1)*w,w=1;break;case 64:if(j()===45)T+=V(_());h=j(),f=M($=T+=q(F())),d++;break;case 45:if(v===45&&M(T)==2)b=0}}return n}function X(e,r,a,c,t,s,i,u,o,f,l){var h=t-1;var p=t===0?s:[""];var v=C(p);for(var b=0,m=0,w=0;b<c;++b)for(var d=0,k=O(e,h+1,h=$(m=i[b])),g=e;d<v;++d)if(g=x(m>0?p[d]+" "+k:y(k,/&\f/g,p[d])))o[w++]=g;return z(e,r,a,t===0?n:u,o,f,l)}function ee(e,r,a){return z(e,r,a,t,k(P()),O(e,2,-2),0)}function re(e,r,a,c){return z(e,r,a,s,O(e,0,c),O(e,c+1,-1),c)}function ae(e,t){switch(g(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+a+e+r+e+e;case 6828:case 4268:return c+e+r+e+e;case 6165:return c+e+r+"flex-"+e+e;case 5187:return c+e+y(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+r+"flex-$1$2")+e;case 5443:return c+e+r+"flex-item-"+y(e,/flex-|-self/,"")+e;case 4675:return c+e+r+"flex-line-pack"+y(e,/align-content|flex-|-self/,"")+e;case 5548:return c+e+r+y(e,"shrink","negative")+e;case 5292:return c+e+r+y(e,"basis","preferred-size")+e;case 6060:return c+"box-"+y(e,"-grow","")+c+e+r+y(e,"grow","positive")+e;case 4554:return c+y(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,c+"$1"+"$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+r+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(e)-1-t>6)switch(A(e,t+1)){case 109:if(A(e,t+4)!==45)break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3"+"$1"+a+(A(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~T(e,"stretch")?ae(y(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(A(e,t+1)!==115)break;case 6444:switch(A(e,M(e)-3-(~T(e,"!important")&&10))){case 107:return y(e,":",":"+c)+e;case 101:return y(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+c+(A(e,14)===45?"inline-":"")+"box$3"+"$1"+c+"$2$3"+"$1"+r+"$2box$3")+e}break;case 5936:switch(A(e,t+11)){case 114:return c+e+r+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+r+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+r+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return c+e+r+e+e}return e}function ce(e,r){var a="";var c=C(e);for(var t=0;t<c;t++)a+=r(e[t],t,e,r)||"";return a}function te(e,r,a,c){switch(e.type){case o:case s:return e.return=e.return||e.value;case t:return"";case n:e.value=e.props.join(",")}return M(a=ce(e.children,c))?e.return=e.value+"{"+a+"}":""}function ne(e){var r=C(e);return function(a,c,t,n){var s="";for(var i=0;i<r;i++)s+=e[i](a,c,t,n)||"";return s}}function se(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function ie(e,t,i,u){if(!e.return)switch(e.type){case s:e.return=ae(e.value,e.length);break;case b:return ce([N(y(e.value,"@","@"+c),e,"")],u);case n:if(e.length)return R(e.props,(function(t){switch(E(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ce([N(y(t,/:(read-\w+)/,":"+a+"$1"),e,"")],u);case"::placeholder":return ce([N(y(t,/:(plac\w+)/,":"+c+"input-$1"),e,""),N(y(t,/:(plac\w+)/,":"+a+"$1"),e,""),N(y(t,/:(plac\w+)/,r+"input-$1"),e,"")],u)}return""}))}}function ue(e){switch(e.type){case n:e.props=e.props.map((function(r){return R(W(r),(function(r,a,c){switch(A(r,0)){case 12:return O(r,1,M(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+O(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return C(c)>1?"":r;case a=C(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}e.CHARSET=f;e.COMMENT=t;e.COUNTER_STYLE=w;e.DECLARATION=s;e.DOCUMENT=p;e.FONT_FACE=m;e.FONT_FEATURE_VALUES=d;e.IMPORT=o;e.KEYFRAMES=b;e.MEDIA=u;e.MOZ=a;e.MS=r;e.NAMESPACE=v;e.PAGE=i;e.RULESET=n;e.SUPPORTS=h;e.VIEWPORT=l;e.WEBKIT=c;e.abs=$;e.alloc=D;e.append=S;e.caret=F;e.char=P;e.charat=A;e.combine=R;e.comment=ee;e.commenter=Z;e.compile=J;e.copy=N;e.dealloc=K;e.declaration=re;e.delimit=V;e.delimiter=H;e.escaping=G;e.from=k;e.hash=g;e.identifier=q;e.indexof=T;e.match=E;e.middleware=ne;e.namespace=ue;e.next=_;e.node=z;e.parse=Q;e.peek=j;e.prefix=ae;e.prefixer=ie;e.prev=U;e.replace=y;e.ruleset=X;e.rulesheet=se;e.serialize=ce;e.sizeof=C;e.slice=I;e.stringify=te;e.strlen=M;e.substr=O;e.token=L;e.tokenize=W;e.tokenizer=B;e.trim=x;e.whitespace=Y;Object.defineProperty(e,"__esModule",{value:true})}));
//# sourceMappingURL=stylis.js.map


/***/ }),

/***/ "Ew0i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.compose = exports.system = exports.createStyleFunction = exports.createParser = exports.get = exports.merge = void 0;

var _objectAssign = _interopRequireDefault(__webpack_require__("Q7Cu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var merge = function merge(a, b) {
  var result = (0, _objectAssign["default"])({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    (0, _objectAssign["default"])(result, (_assign = {}, _assign[key] = (0, _objectAssign["default"])(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles


exports.merge = merge;

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

exports.get = get;

var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      (0, _objectAssign["default"])(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

exports.createParser = createParser;

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      (0, _objectAssign["default"])(styles, style);
    } else {
      var _assign2;

      (0, _objectAssign["default"])(styles, (_assign2 = {}, _assign2[media] = (0, _objectAssign["default"])({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      (0, _objectAssign["default"])(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      (0, _objectAssign["default"])(styles, (_assign3 = {}, _assign3[media] = (0, _objectAssign["default"])({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API


exports.createStyleFunction = createStyleFunction;

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};

exports.system = system;

var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    (0, _objectAssign["default"])(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};

exports.compose = compose;

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FAVQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const styled_1 = __importDefault(__webpack_require__("jRWd"));
const styled_system_1 = __webpack_require__("qtLQ");
const styled_system_2 = __webpack_require__("qtLQ");
const styled_system_3 = __webpack_require__("qtLQ");
const styled_system_4 = __webpack_require__("qtLQ");
const styled_system_5 = __webpack_require__("qtLQ");
const styled_system_6 = __webpack_require__("qtLQ");
const styled_system_7 = __webpack_require__("qtLQ");
const styled_system_8 = __webpack_require__("qtLQ");
const styled_system_9 = __webpack_require__("qtLQ");
const Box = styled_1.default.div(styled_system_7.system({
    boxSizing: true,
    cursor: true,
}), styled_system_6.layout, styled_system_9.space, styled_system_5.flexbox, styled_system_4.color, styled_system_8.position, styled_system_3.boxShadow, styled_system_2.border, styled_system_1.background);
exports.Box = Box;
Box.defaultProps = {
    display: 'flex',
    boxSizing: 'border-box',
};


/***/ }),

/***/ "Fv1G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "GJPJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function () { return /** @class */ (function () {
    function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context_1 !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    };
    Slot.prototype.getValue = function () {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    };
    Slot.prototype.withValue = function (value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        var _a;
        var slots = (_a = {
                __proto__: null
            },
            _a[this.id] = value,
            _a);
        var parent = currentContext;
        currentContext = { parent: parent, slots: slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    };
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
            var saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    };
    // Immediately run a callback function without any captured context.
    Slot.noContext = function (callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            var saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    };
    return Slot;
}()); };
// We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function () {
    var Slot = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot,
            enumerable: false,
            writable: false,
            configurable: false,
        });
    }
    finally {
        return Slot;
    }
}();

var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function (resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            var invokeNext = function (value) { return invoke(boundNext, value); };
            var invokeThrow = function (error) { return invoke(boundThrow, error); };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function (obj, method) {
            var fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}

exports.Slot = Slot;
exports.asyncFromGen = asyncFromGen;
exports.bind = bind;
exports.noContext = noContext;
exports.setTimeout = setTimeoutWithContext;
exports.wrapYieldingFiberMethods = wrapYieldingFiberMethods;
//# sourceMappingURL=context.js.map


/***/ }),

/***/ "GeHN":
/***/ (function(module, exports, __webpack_require__) {

// For backwards compatibility, make sure require("graphql-tag") returns
// the gql function, rather than an exports object.
module.exports = __webpack_require__("Db8u").gql;


/***/ }),

/***/ "IiCs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JLcf").Observable;


/***/ }),

/***/ "IjYG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__("rHeM");
var equality = __webpack_require__("nOev");
var tsInvariant = __webpack_require__("UPyE");
var parser = __webpack_require__("8THZ");
var errors = __webpack_require__("/VSv");
var core = __webpack_require__("DFEm");

var OperationData = (function () {
    function OperationData(options, context) {
        this.isMounted = false;
        this.previousOptions = {};
        this.context = {};
        this.options = {};
        this.options = options || {};
        this.context = context || {};
    }
    OperationData.prototype.getOptions = function () {
        return this.options;
    };
    OperationData.prototype.setOptions = function (newOptions, storePrevious) {
        if (storePrevious === void 0) { storePrevious = false; }
        if (storePrevious && !equality.equal(this.options, newOptions)) {
            this.previousOptions = this.options;
        }
        this.options = newOptions;
    };
    OperationData.prototype.unmount = function () {
        this.isMounted = false;
    };
    OperationData.prototype.refreshClient = function () {
        var client = (this.options && this.options.client) ||
            (this.context && this.context.client);
        __DEV__ ? tsInvariant.invariant(!!client, 'Could not find "client" in the context or passed in as an option. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via options.') : tsInvariant.invariant(!!client, 32);
        var isNew = false;
        if (client !== this.client) {
            isNew = true;
            this.client = client;
            this.cleanup();
        }
        return {
            client: this.client,
            isNew: isNew
        };
    };
    OperationData.prototype.verifyDocumentType = function (document, type) {
        var operation = parser.parser(document);
        var requiredOperationName = parser.operationName(type);
        var usedOperationName = parser.operationName(operation.type);
        __DEV__ ? tsInvariant.invariant(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " +
            (requiredOperationName + ", but a " + usedOperationName + " was used instead.")) : tsInvariant.invariant(operation.type === type, 33);
    };
    return OperationData;
}());

var SubscriptionData = (function (_super) {
    tslib.__extends(SubscriptionData, _super);
    function SubscriptionData(_a) {
        var options = _a.options, context = _a.context, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.currentObservable = {};
        _this.setResult = setResult;
        _this.initialize(options);
        return _this;
    }
    SubscriptionData.prototype.execute = function (result) {
        if (this.getOptions().skip === true) {
            this.cleanup();
            return {
                loading: false,
                error: undefined,
                data: undefined,
                variables: this.getOptions().variables
            };
        }
        var currentResult = result;
        if (this.refreshClient().isNew) {
            currentResult = this.getLoadingResult();
        }
        var shouldResubscribe = this.getOptions().shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.getOptions());
        }
        if (shouldResubscribe !== false &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
                !equality.equal(this.previousOptions.variables, this.getOptions().variables) ||
                this.previousOptions.skip !== this.getOptions().skip)) {
            this.cleanup();
            currentResult = this.getLoadingResult();
        }
        this.initialize(this.getOptions());
        this.startSubscription();
        this.previousOptions = this.getOptions();
        return tslib.__assign(tslib.__assign({}, currentResult), { variables: this.getOptions().variables });
    };
    SubscriptionData.prototype.afterExecute = function () {
        this.isMounted = true;
    };
    SubscriptionData.prototype.cleanup = function () {
        this.endSubscription();
        delete this.currentObservable.query;
    };
    SubscriptionData.prototype.initialize = function (options) {
        if (this.currentObservable.query || this.getOptions().skip === true)
            return;
        this.currentObservable.query = this.refreshClient().client.subscribe({
            query: options.subscription,
            variables: options.variables,
            fetchPolicy: options.fetchPolicy,
            context: options.context,
        });
    };
    SubscriptionData.prototype.startSubscription = function () {
        if (this.currentObservable.subscription)
            return;
        this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
        });
    };
    SubscriptionData.prototype.getLoadingResult = function () {
        return {
            loading: true,
            error: undefined,
            data: undefined
        };
    };
    SubscriptionData.prototype.updateResult = function (result) {
        if (this.isMounted) {
            this.setResult(result);
        }
    };
    SubscriptionData.prototype.updateCurrentData = function (result) {
        var onSubscriptionData = this.getOptions().onSubscriptionData;
        this.updateResult({
            data: result.data,
            loading: false,
            error: undefined
        });
        if (onSubscriptionData) {
            onSubscriptionData({
                client: this.refreshClient().client,
                subscriptionData: result
            });
        }
    };
    SubscriptionData.prototype.updateError = function (error) {
        this.updateResult({
            error: error,
            loading: false
        });
    };
    SubscriptionData.prototype.completeSubscription = function () {
        var _this = this;
        Promise.resolve().then(function () {
            var onSubscriptionComplete = _this.getOptions().onSubscriptionComplete;
            if (onSubscriptionComplete)
                onSubscriptionComplete();
            _this.endSubscription();
        });
    };
    SubscriptionData.prototype.endSubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    return SubscriptionData;
}(OperationData));

var MutationData = (function (_super) {
    tslib.__extends(MutationData, _super);
    function MutationData(_a) {
        var options = _a.options, context = _a.context, result = _a.result, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.runMutation = function (mutationFunctionOptions) {
            if (mutationFunctionOptions === void 0) { mutationFunctionOptions = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(mutationFunctionOptions)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (error) {
                var onError = _this.getOptions().onError;
                _this.onMutationError(error, mutationId);
                if (onError) {
                    onError(error);
                    return {
                        data: undefined,
                        errors: error,
                    };
                }
                else {
                    throw error;
                }
            });
        };
        _this.verifyDocumentType(options.mutation, parser.DocumentType.Mutation);
        _this.result = result;
        _this.setResult = setResult;
        _this.mostRecentMutationId = 0;
        return _this;
    }
    MutationData.prototype.execute = function (result) {
        this.isMounted = true;
        this.verifyDocumentType(this.getOptions().mutation, parser.DocumentType.Mutation);
        return [
            this.runMutation,
            tslib.__assign(tslib.__assign({}, result), { client: this.refreshClient().client })
        ];
    };
    MutationData.prototype.afterExecute = function () {
        this.isMounted = true;
        return this.unmount.bind(this);
    };
    MutationData.prototype.cleanup = function () {
    };
    MutationData.prototype.mutate = function (options) {
        return this.refreshClient().client.mutate(core.mergeOptions(this.getOptions(), options));
    };
    MutationData.prototype.onMutationStart = function () {
        if (!this.result.loading && !this.getOptions().ignoreResults) {
            this.updateResult({
                loading: true,
                error: undefined,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.onMutationCompleted = function (response, mutationId) {
        var _a = this.getOptions(), onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
        var data = response.data, errors$1 = response.errors;
        var error = errors$1 && errors$1.length > 0
            ? new errors.ApolloError({ graphQLErrors: errors$1 })
            : undefined;
        var callOncomplete = function () {
            return onCompleted ? onCompleted(data) : null;
        };
        if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
            this.updateResult({
                called: true,
                loading: false,
                data: data,
                error: error
            });
        }
        callOncomplete();
    };
    MutationData.prototype.onMutationError = function (error, mutationId) {
        if (this.isMostRecentMutation(mutationId)) {
            this.updateResult({
                loading: false,
                error: error,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.generateNewMutationId = function () {
        return ++this.mostRecentMutationId;
    };
    MutationData.prototype.isMostRecentMutation = function (mutationId) {
        return this.mostRecentMutationId === mutationId;
    };
    MutationData.prototype.updateResult = function (result) {
        if (this.isMounted &&
            (!this.previousResult || !equality.equal(this.previousResult, result))) {
            this.setResult(result);
            this.previousResult = result;
            return result;
        }
    };
    return MutationData;
}(OperationData));

var QueryData = (function (_super) {
    tslib.__extends(QueryData, _super);
    function QueryData(_a) {
        var options = _a.options, context = _a.context, onNewData = _a.onNewData;
        var _this = _super.call(this, options, context) || this;
        _this.runLazy = false;
        _this.previous = Object.create(null);
        _this.runLazyQuery = function (options) {
            _this.cleanup();
            _this.runLazy = true;
            _this.lazyOptions = options;
            _this.onNewData();
        };
        _this.obsRefetch = function (variables) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.refetch(variables); };
        _this.obsFetchMore = function (fetchMoreOptions) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.fetchMore(fetchMoreOptions); };
        _this.obsUpdateQuery = function (mapFn) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.updateQuery(mapFn); };
        _this.obsStartPolling = function (pollInterval) {
            var _a;
            (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.startPolling(pollInterval);
        };
        _this.obsStopPolling = function () {
            var _a;
            (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.stopPolling();
        };
        _this.obsSubscribeToMore = function (options) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.subscribeToMore(options); };
        _this.onNewData = onNewData;
        return _this;
    }
    QueryData.prototype.execute = function () {
        this.refreshClient();
        var _a = this.getOptions(), skip = _a.skip, query = _a.query;
        if (skip || query !== this.previous.query) {
            this.removeQuerySubscription();
            this.removeObservable(!skip);
            this.previous.query = query;
        }
        this.updateObservableQuery();
        return this.getExecuteSsrResult() || this.getExecuteResult();
    };
    QueryData.prototype.executeLazy = function () {
        return !this.runLazy
            ? [
                this.runLazyQuery,
                {
                    loading: false,
                    networkStatus: core.NetworkStatus.ready,
                    called: false,
                    data: undefined
                }
            ]
            : [this.runLazyQuery, this.execute()];
    };
    QueryData.prototype.fetchData = function () {
        var _this = this;
        var options = this.getOptions();
        if (options.skip || options.ssr === false)
            return false;
        return new Promise(function (resolve) { return _this.startQuerySubscription(resolve); });
    };
    QueryData.prototype.afterExecute = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.lazy, lazy = _c === void 0 ? false : _c;
        this.isMounted = true;
        var options = this.getOptions();
        if (this.currentObservable &&
            !this.ssrInitiated() &&
            !this.client.disableNetworkFetches) {
            this.startQuerySubscription();
        }
        if (!lazy || this.runLazy) {
            this.handleErrorOrCompleted();
        }
        this.previousOptions = options;
        return this.unmount.bind(this);
    };
    QueryData.prototype.cleanup = function () {
        this.removeQuerySubscription();
        this.removeObservable(true);
        delete this.previous.result;
    };
    QueryData.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        if (this.lazyOptions) {
            options.variables = tslib.__assign(tslib.__assign({}, options.variables), this.lazyOptions.variables);
            options.context = tslib.__assign(tslib.__assign({}, options.context), this.lazyOptions.context);
        }
        if (this.runLazy) {
            delete options.skip;
        }
        return options;
    };
    QueryData.prototype.ssrInitiated = function () {
        return this.context && this.context.renderPromises;
    };
    QueryData.prototype.getExecuteSsrResult = function () {
        var _a = this.getOptions(), ssr = _a.ssr, skip = _a.skip;
        var ssrDisabled = ssr === false;
        var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
        var ssrLoading = tslib.__assign({ loading: true, networkStatus: core.NetworkStatus.loading, called: true, data: undefined, stale: false, client: this.client }, this.observableQueryFields());
        if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
            this.previous.result = ssrLoading;
            return ssrLoading;
        }
        if (this.ssrInitiated()) {
            var result = this.getExecuteResult() || ssrLoading;
            if (result.loading && !skip) {
                this.context.renderPromises.addQueryPromise(this, function () { return null; });
            }
            return result;
        }
    };
    QueryData.prototype.prepareObservableQueryOptions = function () {
        var options = this.getOptions();
        this.verifyDocumentType(options.query, parser.DocumentType.Query);
        var displayName = options.displayName || 'Query';
        if (this.ssrInitiated() &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options.fetchPolicy = 'cache-first';
        }
        return tslib.__assign(tslib.__assign({}, options), { displayName: displayName, context: options.context });
    };
    QueryData.prototype.initializeObservableQuery = function () {
        if (this.ssrInitiated()) {
            this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions());
        }
        if (!this.currentObservable) {
            var observableQueryOptions = this.prepareObservableQueryOptions();
            this.previous.observableQueryOptions = tslib.__assign(tslib.__assign({}, observableQueryOptions), { children: void 0 });
            this.currentObservable = this.refreshClient().client.watchQuery(tslib.__assign({}, observableQueryOptions));
            if (this.ssrInitiated()) {
                this.context.renderPromises.registerSSRObservable(this.currentObservable, observableQueryOptions);
            }
        }
    };
    QueryData.prototype.updateObservableQuery = function () {
        if (!this.currentObservable) {
            this.initializeObservableQuery();
            return;
        }
        var newObservableQueryOptions = tslib.__assign(tslib.__assign({}, this.prepareObservableQueryOptions()), { children: void 0 });
        if (this.getOptions().skip) {
            this.previous.observableQueryOptions = newObservableQueryOptions;
            return;
        }
        if (!equality.equal(newObservableQueryOptions, this.previous.observableQueryOptions)) {
            this.previous.observableQueryOptions = newObservableQueryOptions;
            this.currentObservable
                .setOptions(newObservableQueryOptions)
                .catch(function () { });
        }
    };
    QueryData.prototype.startQuerySubscription = function (onNewData) {
        var _this = this;
        if (onNewData === void 0) { onNewData = this.onNewData; }
        if (this.currentSubscription || this.getOptions().skip)
            return;
        this.currentSubscription = this.currentObservable.subscribe({
            next: function (_a) {
                var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                var previousResult = _this.previous.result;
                if (previousResult &&
                    previousResult.loading === loading &&
                    previousResult.networkStatus === networkStatus &&
                    equality.equal(previousResult.data, data)) {
                    return;
                }
                onNewData();
            },
            error: function (error) {
                _this.resubscribeToQuery();
                if (!error.hasOwnProperty('graphQLErrors'))
                    throw error;
                var previousResult = _this.previous.result;
                if ((previousResult && previousResult.loading) ||
                    !equality.equal(error, _this.previous.error)) {
                    _this.previous.error = error;
                    onNewData();
                }
            }
        });
    };
    QueryData.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var currentObservable = this.currentObservable;
        if (currentObservable) {
            var lastError = currentObservable.getLastError();
            var lastResult = currentObservable.getLastResult();
            currentObservable.resetLastResults();
            this.startQuerySubscription();
            Object.assign(currentObservable, {
                lastError: lastError,
                lastResult: lastResult
            });
        }
    };
    QueryData.prototype.getExecuteResult = function () {
        var result = this.observableQueryFields();
        var options = this.getOptions();
        if (options.skip) {
            result = tslib.__assign(tslib.__assign({}, result), { data: undefined, error: undefined, loading: false, networkStatus: core.NetworkStatus.ready, called: true });
        }
        else if (this.currentObservable) {
            var currentResult = this.currentObservable.getCurrentResult();
            var data = currentResult.data, loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors$1 = currentResult.errors;
            var error = currentResult.error;
            if (errors$1 && errors$1.length > 0) {
                error = new errors.ApolloError({ graphQLErrors: errors$1 });
            }
            result = tslib.__assign(tslib.__assign({}, result), { data: data, loading: loading, networkStatus: networkStatus, error: error, called: true });
            if (loading) ;
            else if (error) {
                Object.assign(result, {
                    data: (this.currentObservable.getLastResult() || {})
                        .data
                });
            }
            else {
                var fetchPolicy = this.currentObservable.options.fetchPolicy;
                var partialRefetch = options.partialRefetch;
                if (partialRefetch &&
                    partial &&
                    (!data || Object.keys(data).length === 0) &&
                    fetchPolicy !== 'cache-only') {
                    Object.assign(result, {
                        loading: true,
                        networkStatus: core.NetworkStatus.loading
                    });
                    result.refetch();
                    return result;
                }
            }
        }
        result.client = this.client;
        this.setOptions(options, true);
        var previousResult = this.previous.result;
        this.previous.loading =
            previousResult && previousResult.loading || false;
        result.previousData = previousResult &&
            (previousResult.data || previousResult.previousData);
        this.previous.result = result;
        this.currentObservable && this.currentObservable.resetQueryStoreErrors();
        return result;
    };
    QueryData.prototype.handleErrorOrCompleted = function () {
        if (!this.currentObservable || !this.previous.result)
            return;
        var _a = this.previous.result, data = _a.data, loading = _a.loading, error = _a.error;
        if (!loading) {
            var _b = this.getOptions(), query = _b.query, variables = _b.variables, onCompleted = _b.onCompleted, onError = _b.onError, skip = _b.skip;
            if (this.previousOptions &&
                !this.previous.loading &&
                equality.equal(this.previousOptions.query, query) &&
                equality.equal(this.previousOptions.variables, variables)) {
                return;
            }
            if (onCompleted && !error && !skip) {
                onCompleted(data);
            }
            else if (onError && error) {
                onError(error);
            }
        }
    };
    QueryData.prototype.removeQuerySubscription = function () {
        if (this.currentSubscription) {
            this.currentSubscription.unsubscribe();
            delete this.currentSubscription;
        }
    };
    QueryData.prototype.removeObservable = function (andDelete) {
        if (this.currentObservable) {
            this.currentObservable["tearDownQuery"]();
            if (andDelete) {
                delete this.currentObservable;
            }
        }
    };
    QueryData.prototype.observableQueryFields = function () {
        var _a;
        return {
            variables: (_a = this.currentObservable) === null || _a === void 0 ? void 0 : _a.variables,
            refetch: this.obsRefetch,
            fetchMore: this.obsFetchMore,
            updateQuery: this.obsUpdateQuery,
            startPolling: this.obsStartPolling,
            stopPolling: this.obsStopPolling,
            subscribeToMore: this.obsSubscribeToMore
        };
    };
    return QueryData;
}(OperationData));

exports.MutationData = MutationData;
exports.OperationData = OperationData;
exports.QueryData = QueryData;
exports.SubscriptionData = SubscriptionData;
//# sourceMappingURL=data.cjs.js.map


/***/ }),

/***/ "JB8P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mily");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _item_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("PMCM");
/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_item_interface__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "JBDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("ciI7");
} else {}


/***/ }),

/***/ "JLcf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: "unsubscribe",
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver =
/*#__PURE__*/
function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: "next",
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: "error",
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: "complete",
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable =
/*#__PURE__*/
function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }

      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: "map",
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "filter",
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "reduce",
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;
      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);
      return new C(function (observer) {
        var subscription;
        var index = 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (index === sources.length) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }

        startNext(_this5);
        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: "flatMap",
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });
            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: SymbolObservable,
    value: function () {
      return this;
    }
  }], [{
    key: "from",
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;
      if (x == null) throw new TypeError(x + ' is not an object');
      var method = getMethod(x, SymbolObservable);

      if (method) {
        var observable = method.call(x);
        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
        if (isObservable(observable) && observable.constructor === C) return observable;
        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, SymbolIterator);

        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _item = _step.value;
                  observer.next(_item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: "of",
    value: function of() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }
  }, {
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

exports.Observable = Observable;

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}

/***/ }),

/***/ "JOlZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("Fv1G"), exports);
__exportStar(__webpack_require__("U1Gg"), exports);


/***/ }),

/***/ "Jbvi":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "JeQz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function murmur2(str) {
  for (var k, h = 0, i = 0, len = str.length; len >= 4; ++i, len -= 4) k = 1540483477 * (65535 & (k = 255 & str.charCodeAt(i) | (255 & str.charCodeAt(++i)) << 8 | (255 & str.charCodeAt(++i)) << 16 | (255 & str.charCodeAt(++i)) << 24)) + (59797 * (k >>> 16) << 16), 
  h = 1540483477 * (65535 & (k ^= k >>> 24)) + (59797 * (k >>> 16) << 16) ^ 1540483477 * (65535 & h) + (59797 * (h >>> 16) << 16);
  switch (len) {
   case 3:
    h ^= (255 & str.charCodeAt(i + 2)) << 16;

   case 2:
    h ^= (255 & str.charCodeAt(i + 1)) << 8;

   case 1:
    h = 1540483477 * (65535 & (h ^= 255 & str.charCodeAt(i))) + (59797 * (h >>> 16) << 16);
  }
  return (((h = 1540483477 * (65535 & (h ^= h >>> 13)) + (59797 * (h >>> 16) << 16)) ^ h >>> 15) >>> 0).toString(36);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = murmur2;


/***/ }),

/***/ "L+/6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("RQQq");
} else {}


/***/ }),

/***/ "LXCP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("lPty");
} else {}


/***/ }),

/***/ "LYXN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1Yrn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _content_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _content_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9vJd");
/* harmony import */ var _content_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_interface__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "PMCM":
/***/ (function(module, exports) {



/***/ }),

/***/ "PR0n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _extends = __webpack_require__("ylYk"), React = __webpack_require__("cDcd"), isPropValid = __webpack_require__("m9/w"), react = __webpack_require__("LXCP"), utils = __webpack_require__("6Z3W"), serialize = __webpack_require__("0IRf");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var _extends__default = _interopDefault(_extends), isPropValid__default = _interopDefault(isPropValid), testOmitPropsOnStringTag = isPropValid__default.default, testOmitPropsOnComponent = function(key) {
  return "theme" !== key;
}, getDefaultShouldForwardProp = function(tag) {
  return "string" == typeof tag && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
}, composeShouldForwardProps = function(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  return "function" != typeof shouldForwardProp && isReal && (shouldForwardProp = tag.__emotion_forwardProp), 
  shouldForwardProp;
}, ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences", isBrowser = "undefined" != typeof document, createStyled = function createStyled(tag, options) {
  var identifierName, targetClassName, isReal = tag.__emotion_real === tag, baseTag = isReal && tag.__emotion_base || tag;
  void 0 !== options && (identifierName = options.label, targetClassName = options.target);
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal), defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag), shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments, styles = isReal && void 0 !== tag.__emotion_styles ? tag.__emotion_styles.slice(0) : [];
    if (void 0 !== identifierName && styles.push("label:" + identifierName + ";"), null == args[0] || void 0 === args[0].raw) styles.push.apply(styles, args); else {
      0, styles.push(args[0][0]);
      for (var len = args.length, i = 1; i < len; i++) styles.push(args[i], args[0][i]);
    }
    var Styled = react.withEmotionCache((function(props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag, className = "", classInterpolations = [], mergedProps = props;
      if (null == props.theme) {
        for (var key in mergedProps = {}, props) mergedProps[key] = props[key];
        mergedProps.theme = React.useContext(react.ThemeContext);
      }
      "string" == typeof props.className ? className = utils.getRegisteredStyles(cache.registered, classInterpolations, props.className) : null != props.className && (className = props.className + " ");
      var serialized = serialize.serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps), rules = utils.insertStyles(cache, serialized, "string" == typeof finalTag);
      className += cache.key + "-" + serialized.name, void 0 !== targetClassName && (className += " " + targetClassName);
      var finalShouldForwardProp = shouldUseAs && void 0 === shouldForwardProp ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp, newProps = {};
      for (var _key in props) shouldUseAs && "as" === _key || finalShouldForwardProp(_key) && (newProps[_key] = props[_key]);
      newProps.className = className, newProps.ref = ref;
      var ele = React.createElement(finalTag, newProps);
      if (!isBrowser && void 0 !== rules) {
        for (var _ref, serializedNames = serialized.name, next = serialized.next; void 0 !== next; ) serializedNames += " " + next.name, 
        next = next.next;
        return React.createElement(React.Fragment, null, React.createElement("style", ((_ref = {})["data-emotion"] = cache.key + " " + serializedNames, 
        _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
      }
      return ele;
    }));
    return Styled.displayName = void 0 !== identifierName ? identifierName : "Styled(" + ("string" == typeof baseTag ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")", 
    Styled.defaultProps = tag.defaultProps, Styled.__emotion_real = Styled, Styled.__emotion_base = baseTag, 
    Styled.__emotion_styles = styles, Styled.__emotion_forwardProp = shouldForwardProp, 
    Object.defineProperty(Styled, "toString", {
      value: function() {
        return "." + targetClassName;
      }
    }), Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled(nextTag, _extends__default.default({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, !0)
      })).apply(void 0, styles);
    }, Styled;
  };
};

exports.default = createStyled;


/***/ }),

/***/ "Q7Cu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "R/fH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.shadow = void 0;

var _core = __webpack_require__("Ew0i");

var shadow = (0, _core.system)({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});
exports.shadow = shadow;
var _default = shadow;
exports["default"] = _default;

/***/ }),

/***/ "R7v/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.border = void 0;

var _core = __webpack_require__("Ew0i");

var config = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = (0, _core.system)(config);
exports.border = border;
var _default = border;
exports["default"] = _default;

/***/ }),

/***/ "R83w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {

			if (typeof _Symbol['for'] === 'function') {
				// This just needs to be something that won't trample other user's Symbol.for use
				// It also will guide people to the source of their issues, if this is problematic.
				// META: It's a resource locator!
				result = _Symbol['for']('https://github.com/benlesh/symbol-observable');
			} else {
				// Symbol.for didn't exist! The best we can do at this point is a totally 
				// unique symbol. Note that the string argument here is a descriptor, not
				// an identifier. This symbol is unique.
				result = _Symbol('https://github.com/benlesh/symbol-observable');
			}
			try {
				_Symbol.observable = result;
			} catch (err) {
				// Do nothing. In some environments, users have frozen `Symbol` for security reasons,
				// if it is frozen assigning to it will throw. In this case, we don't care, because
				// they will need to use the returned value from the ponyfill.
			}
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "RBVa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("mAcj");
} else {}


/***/ }),

/***/ "RQQq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var weakMemoize = function(func) {
  var cache = new WeakMap();
  return function(arg) {
    if (cache.has(arg)) return cache.get(arg);
    var ret = func(arg);
    return cache.set(arg, ret), ret;
  };
};

exports.default = weakMemoize;


/***/ }),

/***/ "T7Fc":
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "TO7t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var utils = __webpack_require__("ZYa/");
var tsInvariant = __webpack_require__("UPyE");
var tslib = __webpack_require__("rHeM");
var graphql = __webpack_require__("T7Fc");
var core = __webpack_require__("+tDu");
var utilities = __webpack_require__("cu/J");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function (response) { return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            throw parseError;
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            utils.throwServerError(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !hasOwnProperty.call(result, 'data') &&
            !hasOwnProperty.call(result, 'errors')) {
            utils.throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }); };
}

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new tsInvariant.InvariantError("Network request failed. " + label + " is not serializable: " + e.message) : new tsInvariant.InvariantError(26);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};

var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = tslib.__assign(tslib.__assign({}, fallbackConfig.options), { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http || {};
    configs.forEach(function (config) {
        options = tslib.__assign(tslib.__assign(tslib.__assign({}, options), config.options), { headers: tslib.__assign(tslib.__assign({}, options.headers), headersToLowerCase(config.headers)) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = tslib.__assign(tslib.__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = graphql.print(query);
    return {
        options: options,
        body: body,
    };
};
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new tsInvariant.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new tsInvariant.InvariantError(25);
    }
};

var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};

var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = serializeFetchParameter(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = serializeFetchParameter(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}

var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _b = linkOptions.includeUnusedVariables, includeUnusedVariables = _b === void 0 ? false : _b, requestOptions = tslib.__rest(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
    checkFetcher(fetcher);
    if (!fetcher) {
        fetcher = fetch;
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new core.ApolloLink(function (operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = tslib.__assign(tslib.__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = selectHttpOptionsAndBody(operation, fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            graphql.visit(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = tslib.__assign({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return utils.fromError(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = serializeFetchParameter(body, 'Payload');
            }
            catch (parseError) {
                return utils.fromError(parseError);
            }
        }
        return new utilities.Observable(function (observer) {
            fetcher(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(parseAndCheckHttpResponse(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};

var HttpLink = (function (_super) {
    tslib.__extends(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(core.ApolloLink));

exports.HttpLink = HttpLink;
exports.checkFetcher = checkFetcher;
exports.createHttpLink = createHttpLink;
exports.createSignalIfSupported = createSignalIfSupported;
exports.fallbackHttpConfig = fallbackHttpConfig;
exports.parseAndCheckHttpResponse = parseAndCheckHttpResponse;
exports.rewriteURIForGET = rewriteURIForGET;
exports.selectHttpOptionsAndBody = selectHttpOptionsAndBody;
exports.selectURI = selectURI;
exports.serializeFetchParameter = serializeFetchParameter;
//# sourceMappingURL=http.cjs.js.map


/***/ }),

/***/ "U1Gg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const styled_1 = __importDefault(__webpack_require__("jRWd"));
const styled_system_1 = __webpack_require__("qtLQ");
const styled_system_2 = __webpack_require__("qtLQ");
const styled_system_3 = __webpack_require__("qtLQ");
const styled_system_4 = __webpack_require__("qtLQ");
const Layout = styled_1.default.div(styled_system_4.system({
    boxSizing: true,
}), styled_system_2.layout, styled_system_3.space, styled_system_1.flexbox);
exports.Layout = Layout;
Layout.defaultProps = {
    display: 'flex',
    boxSizing: 'border-box',
};


/***/ }),

/***/ "UPyE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__("rHeM");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    tslib.__extends(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
var invariant$1 = invariant;

exports.InvariantError = InvariantError;
exports['default'] = invariant$1;
exports.invariant = invariant;
exports.setVerbosity = setVerbosity;
//# sourceMappingURL=invariant.js.map


/***/ }),

/***/ "VC51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.grid = void 0;

var _core = __webpack_require__("Ew0i");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = (0, _core.system)(config);
exports.grid = grid;
var _default = grid;
exports["default"] = _default;

/***/ }),

/***/ "VIbE":
/***/ (function(module, exports) {



/***/ }),

/***/ "VTIN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.colorStyle = exports.textStyle = exports.buttonStyle = exports["default"] = exports.variant = void 0;

var _core = __webpack_require__("Ew0i");

var _css = _interopRequireDefault(__webpack_require__("afR2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return (0, _css["default"])((0, _core.get)(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return (0, _core.get)(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = (0, _core.createParser)(config);
  return parser;
};

exports.variant = variant;
var _default = variant;
exports["default"] = _default;
var buttonStyle = variant({
  key: 'buttons'
});
exports.buttonStyle = buttonStyle;
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
exports.textStyle = textStyle;
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});
exports.colorStyle = colorStyle;

/***/ }),

/***/ "VWuS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var trie = __webpack_require__("eYbc");
var context = __webpack_require__("GJPJ");

function defaultDispose() { }
var Cache = /** @class */ (function () {
    function Cache(max, dispose) {
        if (max === void 0) { max = Infinity; }
        if (dispose === void 0) { dispose = defaultDispose; }
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache.prototype.has = function (key) {
        return this.map.has(key);
    };
    Cache.prototype.get = function (key) {
        var node = this.getNode(key);
        return node && node.value;
    };
    Cache.prototype.getNode = function (key) {
        var node = this.map.get(key);
        if (node && node !== this.newest) {
            var older = node.older, newer = node.newer;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    };
    Cache.prototype.set = function (key, value) {
        var node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    };
    Cache.prototype.clean = function () {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    };
    Cache.prototype.delete = function (key) {
        var node = this.map.get(key);
        if (node) {
            if (node === this.newest) {
                this.newest = node.older;
            }
            if (node === this.oldest) {
                this.oldest = node.newer;
            }
            if (node.newer) {
                node.newer.older = node.older;
            }
            if (node.older) {
                node.older.newer = node.newer;
            }
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    };
    return Cache;
}());

var parentEntrySlot = new context.Slot();

var _a;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var 
// This Array.from polyfill is restricted to working with Set<any> for now,
// but we can improve the polyfill and add other input types, as needed. Note
// that this fallback implementation will only be used if the host environment
// does not support a native Array.from function. In most modern JS runtimes,
// the toArray function exported here will be === Array.from.
toArray = (_a = Array.from, _a === void 0 ? function (collection) {
    var array = [];
    collection.forEach(function (item) { return array.push(item); });
    return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}

var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    var len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ (function () {
    function Entry(fn) {
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    Entry.prototype.peek = function () {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    };
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry.prototype.recompute = function (args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this)
            ? reallyRecompute(this, args)
            : valueGet(this.value);
    };
    Entry.prototype.setDirty = function () {
        if (this.dirty)
            return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry.prototype.dispose = function () {
        var _this = this;
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, function (parent, child) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry.prototype.forget = function () {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    };
    Entry.prototype.dependOn = function (dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    };
    Entry.prototype.forgetDeps = function () {
        var _this = this;
        if (this.deps) {
            toArray(this.deps).forEach(function (dep) { return dep.delete(_this); });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry.count = 0;
    return Entry;
}());
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
    if (maybeSubscribe(entry, args)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
    }
    catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
        var parents = toArray(child.parents);
        for (var i = 0; i < parentCount; ++i) {
            callback(parents[i], child);
        }
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) {
        reportDirty(parent);
    }
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach(function (_value, child) {
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}

var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true,
};
function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) {
                depsByKey.set(key, dep_1 = new Set);
            }
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        var dep = depsByKey.get(key);
        if (dep) {
            var m_1 = (entryMethodName &&
                hasOwnProperty.call(EntryMethods, entryMethodName)) ? entryMethodName : "setDirty";
            // We have to use toArray(dep).forEach instead of dep.forEach, because
            // modifying a Set while iterating over it can cause elements in the Set
            // to be removed from the Set before they've been iterated over.
            toArray(dep).forEach(function (entry) { return entry[m_1](); });
            depsByKey.delete(key);
            maybeUnsubscribe(dep);
        }
    };
    return depend;
}

function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new trie.Trie(typeof WeakMap === "function");
    return function () {
        return keyTrie.lookupArray(arguments);
    };
}
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) { options = Object.create(null); }
    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey ||
        makeDefaultMakeCacheKeyFunction();
    var optimistic = function () {
        var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        var entry = cache.get(key);
        if (!entry) {
            cache.set(key, entry = new Entry(originalFunction));
            entry.subscribe = options.subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = function () { return cache.delete(key); };
        }
        var value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function (cache) { return cache.clean(); });
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: function () {
            return cache["map"].size;
        },
        configurable: false,
        enumerable: false,
    });
    function dirtyKey(key) {
        var entry = cache.get(key);
        if (entry) {
            entry.setDirty();
        }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        var entry = cache.get(key);
        if (entry) {
            return entry.peek();
        }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return cache.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}

Object.defineProperty(exports, 'KeyTrie', {
  enumerable: true,
  get: function () {
    return trie.Trie;
  }
});
Object.defineProperty(exports, 'asyncFromGen', {
  enumerable: true,
  get: function () {
    return context.asyncFromGen;
  }
});
Object.defineProperty(exports, 'bindContext', {
  enumerable: true,
  get: function () {
    return context.bind;
  }
});
Object.defineProperty(exports, 'noContext', {
  enumerable: true,
  get: function () {
    return context.noContext;
  }
});
Object.defineProperty(exports, 'setTimeout', {
  enumerable: true,
  get: function () {
    return context.setTimeout;
  }
});
exports.defaultMakeCacheKey = defaultMakeCacheKey;
exports.dep = dep;
exports.wrap = wrap;
//# sourceMappingURL=bundle.cjs.js.map


/***/ }),

/***/ "WSE+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.color = void 0;

var _core = __webpack_require__("Ew0i");

var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = (0, _core.system)(config);
exports.color = color;
var _default = color;
exports["default"] = _default;

/***/ }),

/***/ "YBeZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("1XEf");
} else {}


/***/ }),

/***/ "ZYa/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var utilities = __webpack_require__("cu/J");
var tsInvariant = __webpack_require__("UPyE");
var tslib = __webpack_require__("rHeM");

function fromError(errorValue) {
    return new utilities.Observable(function (observer) {
        observer.error(errorValue);
    });
}

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    __DEV__ && tsInvariant.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}

function fromPromise(promise) {
    return new utilities.Observable(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}

var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new tsInvariant.InvariantError("illegal argument: " + key) : new tsInvariant.InvariantError(29);
        }
    }
    return operation;
}

function createOperation(starting, operation) {
    var context = tslib.__assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = tslib.__assign(tslib.__assign({}, context), next(context));
        }
        else {
            context = tslib.__assign(tslib.__assign({}, context), next);
        }
    };
    var getContext = function () { return (tslib.__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? utilities.getOperationName(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}

exports.createOperation = createOperation;
exports.fromError = fromError;
exports.fromPromise = fromPromise;
exports.throwServerError = throwServerError;
exports.toPromise = toPromise;
exports.transformOperation = transformOperation;
exports.validateOperation = validateOperation;
//# sourceMappingURL=utils.cjs.js.map


/***/ }),

/***/ "afR2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.css = exports.responsive = exports.get = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

exports.get = get;
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});

var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};

exports.responsive = responsive;

var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

exports.css = css;
var _default = css;
exports["default"] = _default;

/***/ }),

/***/ "bDt8":
/***/ (function(module, exports, __webpack_require__) {

exports.Observable = __webpack_require__("IiCs");


/***/ }),

/***/ "bMuI":
/***/ (function(module, exports) {



/***/ }),

/***/ "bdv+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__("DFEm");
var react = __webpack_require__("0sKP");



Object.keys(core).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
});
Object.keys(react).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = react[k];
});
//# sourceMappingURL=main.cjs.js.map


/***/ }),

/***/ "cCGa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function memoize(fn) {
  var cache = Object.create(null);
  return function(arg) {
    return void 0 === cache[arg] && (cache[arg] = fn(arg)), cache[arg];
  };
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = memoize;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cFSR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ index_src; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/.yarn/__virtual__/@apollo-client-virtual-86ea4b5e9a/0/cache/@apollo-client-npm-3.4.5-bffa900e49-3bca173f7f.zip/node_modules/@apollo/client/main.cjs.js
var main_cjs = __webpack_require__("bdv+");

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/ui/layout/src/index.ts
var src = __webpack_require__("r9xZ");

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/ui/condition/src/index.ts
var condition_src = __webpack_require__("oG5o");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/navigation/src/data/queries/menus.query.ts


const GET_MENUS = client_["gql"]`
  query GetMenus {
    menus {
      nodes {
        menuItems {
          nodes {
            path
            id
            label
            url
          }
        }
        name
      }
    }
  }
`;

const useMenus = () => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(GET_MENUS);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.menus.nodes.map(({
      menuItems: {
        nodes: menuNodes
      },
      name
    }) => menuNodes.map(({
      label,
      path,
      url
    }) => ({
      label,
      path,
      url,
      name
    })));
  }

  return [];
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/navigation/src/data/queries/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/navigation/src/data/useData.ts


const useData = () => {
  const menus = useMenus();
  return menus;
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/navigation/src/data/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/navigation/src/navigation.component.tsx









const switchLanguage = (language, languageVar) => () => {
  languageVar(language === 'RU' ? 'EN' : 'RU');
};

const Navigation = ({
  language,
  languageVar
}) => {
  const [EN, RU] = useData();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Box"], {
    px: ['32px', '32px', '0px'],
    border: "1px solid black",
    height: 84,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      flexGrow: 1
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      width: "100%",
      maxWidth: 1280,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Row"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
          width: 202,
          height: "100%",
          border: "1px solid black",
          children: "Logo"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
          flexGrow: 1,
          flexBasis: [64, 64, 0]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Box"], {
          width: 212,
          height: "100%",
          border: "1px solid black",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(condition_src["Condition"], {
            match: language === 'RU',
            children: RU === null || RU === void 0 ? void 0 : RU.map(({
              label,
              url
            }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: url,
              children: label
            }))
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(condition_src["Condition"], {
            match: language === 'EN',
            children: EN === null || EN === void 0 ? void 0 : EN.map(({
              label,
              url
            }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: url,
              children: label
            }))
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
            type: "button",
            onClick: switchLanguage(language, languageVar),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(condition_src["Condition"], {
              match: language === 'RU',
              children: "\u0420\u0423"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(condition_src["Condition"], {
              match: language === 'EN',
              children: "EN"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      flexGrow: 1
    })]
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/navigation/src/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/data/validate.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const stringProps = ['title', 'content', 'excerpt'];

const formatString = str => str.replace(/(<p>|<\/p>)/g, '');

const validate = target => stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return _objectSpread(_objectSpread({}, acc), {}, {
      [prop]: formatString(target[prop])
    });
  }

  return acc;
}, target);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/data/queries/fragment-by-id.query.ts



const GET_FRAGMENT_BY_ID = client_["gql"]`
  query GetFragmentById($id: ID!) {
    fragment(id: $id) {
      title
      content
    }
  }
`;

const useFragmentById = id => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(GET_FRAGMENT_BY_ID, {
    variables: {
      id
    }
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return validate(data.fragment);
  }

  return {};
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/data/queries/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/data/constants.ts
/** Local **/
// export const HERO_CONTENT_EN = 'cG9zdDo0ODM='
// export const HERO_CONTENT_RU = 'cG9zdDo0ODE='
const HERO_CONTENT_EN = 'cG9zdDo0OTQ=';
const HERO_CONTENT_RU = 'cG9zdDo0ODE=';
// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/data/useData.ts




const useData_useData = () => {
  const EN = useFragmentById(HERO_CONTENT_EN);
  const RU = useFragmentById(HERO_CONTENT_RU);

  if (RU && EN) {
    return [EN, RU];
  }

  return [];
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/data/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/landing-hero.component.tsx










const LandingHero = ({
  language
}) => {
  const [EN, RU] = useData_useData();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
    px: ['32px', '32px', '0px'],
    height: 903,
    border: "1px solid blue",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Column"], {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
        width: "100%",
        maxWidth: 1280,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Row"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Column"], {
            width: "100%",
            alignItems: "flex-start",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
              height: 90,
              width: 90,
              border: "1px solid black",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(condition_src["Condition"], {
                  match: language === 'RU',
                  children: [RU === null || RU === void 0 ? void 0 : RU.title, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), RU === null || RU === void 0 ? void 0 : RU.content]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(condition_src["Condition"], {
                  match: language === 'EN',
                  children: [EN === null || EN === void 0 ? void 0 : EN.title, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), EN === null || EN === void 0 ? void 0 : EN.content]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                  type: "button",
                  children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
                })]
              })
            })
          })
        })
      })
    })
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-hero/src/index.ts

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/item/index.ts
var item = __webpack_require__("twQw");

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/data/validate.ts
function validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { validate_ownKeys(Object(source), true).forEach(function (key) { validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const validate_stringProps = ['title', 'content', 'excerpt'];

const validate_formatString = str => str.replace(/(<p>|<\/p>)/g, '');

const validate_validate = target => validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return validate_objectSpread(validate_objectSpread({}, acc), {}, {
      [prop]: validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/data/queries/skill-categories.query.ts



const GET_SKILL_CATEGORIES = client_["gql"]`
  query GetSkillCategories {
    skillCategories {
      nodes {
        name
        skills {
          nodes {
            title
            menuOrder
          }
        }
      }
    }
  }
`;

const useSkills = () => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(GET_SKILL_CATEGORIES);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.skillCategories.nodes.map(node => validate_validate(node));
  }

  return [];
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/data/queries/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/data/sort.ts
const compare = ({
  menuOrder: a
}, {
  menuOrder: b
}) => a > b ? 1 : -1;

const sort = skills => {
  const leftSide = [];
  const rightSide = [];

  const split = (skill, index) => {
    if (index % 2 === 0) {
      leftSide.push(skill);
    } else {
      rightSide.push(skill);
    }
  };

  [...skills].sort(compare).forEach(split);
  return {
    leftSide,
    rightSide
  };
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/data/useData.ts



const data_useData_useData = () => {
  const skills = useSkills();
  return sort(skills);
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/data/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/landing-work-directions.component.tsx











const LandingWorkDirections = ({
  language
}) => {
  const {
    leftSide,
    rightSide
  } = data_useData_useData();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
      width: "100%",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
        border: "1px solid black",
        width: "100%",
        height: 30,
        children: "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
        flexBasis: 48
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Row"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Column"], {
          width: "100%",
          children: leftSide.map(category => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(item["Item"], {
              category: category
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
              flexBasis: 32
            })]
          }))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
          flexBasis: 32
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
          width: "100%",
          children: [rightSide.map(category => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(item["Item"], {
              category: category
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
              flexBasis: 32
            })]
          })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 32
          })]
        })]
      })]
    })
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-work-directions/src/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/data/validate.ts
function data_validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function data_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { data_validate_ownKeys(Object(source), true).forEach(function (key) { data_validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { data_validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function data_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const data_validate_stringProps = ['title', 'content', 'excerpt'];

const data_validate_formatString = str => str.replace(/(<p>|<\/p>)/g, '');

const data_validate_validate = target => data_validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return data_validate_objectSpread(data_validate_objectSpread({}, acc), {}, {
      [prop]: data_validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/data/queries/card-by-id.query.ts



const GET_CARD_BY = client_["gql"]`
  query CardByID($id: ID!) {
    fragment(id: $id) {
      excerpt
      content
      title
      fragments {
        reverse
      }
    }
  }
`;

const useCardByID = id => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(GET_CARD_BY, {
    variables: {
      id
    }
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data_validate_validate(data.fragment);
  }

  return {};
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/data/queries/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/data/constants.ts
/** Local **/
// export const COSTS_EN = 'cG9zdDo0OTM='
// export const COSTS_RU = 'cG9zdDo0OTI='
// export const TIME_FRAME_EN = 'cG9zdDo0OTE='
// export const TIME_FRAME_RU = 'cG9zdDo0OTA='
// export const HOW_WE_DO_EN = 'cG9zdDo0ODY='
// export const HOW_WE_DO_RU = 'cG9zdDo0ODk='
// export const WHY_US_EN = 'cG9zdDo0ODU='
// export const WHY_US_RU = 'cG9zdDo0ODQ='
const COSTS_EN = 'cG9zdDo1MDE=';
const COSTS_RU = 'cG9zdDo1MDA=';
const TIME_FRAME_EN = 'cG9zdDo0OTE=';
const TIME_FRAME_RU = 'cG9zdDo0OTk=';
const HOW_WE_DO_EN = 'cG9zdDo0OTc=';
const HOW_WE_DO_RU = 'cG9zdDo0OTg=';
const WHY_US_EN = 'cG9zdDo0OTY=';
const WHY_US_RU = 'cG9zdDo0OTU=';
// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/data/useData.ts










const src_data_useData_useData = () => {
  const costsEn = useCardByID(COSTS_EN);
  const costsRu = useCardByID(COSTS_RU);
  const timeFrameEn = useCardByID(TIME_FRAME_EN);
  const timeFrameRu = useCardByID(TIME_FRAME_RU);
  const howWeDoEn = useCardByID(HOW_WE_DO_EN);
  const howWeDoRu = useCardByID(HOW_WE_DO_RU);
  const whyUsEn = useCardByID(WHY_US_EN);
  const whyUsRu = useCardByID(WHY_US_RU);
  return {
    costs: {
      EN: costsEn,
      RU: costsRu
    },
    timeFrame: {
      EN: timeFrameEn,
      RU: timeFrameRu
    },
    howWeDo: {
      EN: howWeDoEn,
      RU: howWeDoRu
    },
    whyUs: {
      EN: whyUsEn,
      RU: whyUsRu
    }
  } || {};
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/data/index.ts

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/item/index.ts
var src_item = __webpack_require__("moMv");

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/landing-about.component.tsx










const getContentByLanguage = (contentObject, language) => language === 'RU' ? contentObject.RU : contentObject.EN;

const LandingAbout = ({
  language
}) => {
  const {
    costs,
    timeFrame,
    howWeDo,
    whyUs
  } = src_data_useData_useData();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
    px: ['32px', '32px', '0px'],
    border: "1px solid black",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Column"], {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
        width: "100%",
        maxWidth: 1280,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
          width: "100%",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 160
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src_item["Item"], {
            contentObject: getContentByLanguage(whyUs, language)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 160
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src_item["Item"], {
            contentObject: getContentByLanguage(howWeDo, language)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 160
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingWorkDirections, {
            language: language
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 160
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src_item["Item"], {
            contentObject: getContentByLanguage(timeFrame, language)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 160
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src_item["Item"], {
            contentObject: getContentByLanguage(costs, language)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 160
          })]
        })
      })
    })
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-about/src/index.ts

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/item/index.ts
var landing_reviews_src_item = __webpack_require__("6tLI");

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/data/validate.ts
function src_data_validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function src_data_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_data_validate_ownKeys(Object(source), true).forEach(function (key) { src_data_validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { src_data_validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_data_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const src_data_validate_stringProps = ['title', 'content', 'excerpt'];

const src_data_validate_formatString = str => str.replace(/(<p>|<\/p>)/g, '');

const src_data_validate_validate = target => src_data_validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return src_data_validate_objectSpread(src_data_validate_objectSpread({}, acc), {}, {
      [prop]: src_data_validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/data/queries/get-reviews.query.ts



const GET_REVIEWS = client_["gql"]`
  query GetReviews {
    reviews {
      nodes {
        title
        content
        menuOrder
        review {
          respondent
          companylink
        }
      }
    }
  }
`;

const useReviews = () => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(GET_REVIEWS);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.reviews.nodes.map(node => src_data_validate_validate(node));
  }

  return [];
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/data/queries/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/data/sort.ts
const sort_compare = ({
  menuOrder: a
}, {
  menuOrder: b
}) => a > b ? 1 : -1;

const sort_sort = reviews => [...reviews].sort(sort_compare);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/data/useData.ts



const landing_reviews_src_data_useData_useData = () => {
  const reviews = useReviews();
  return sort_sort(reviews);
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/data/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/landing-reviews.component.tsx











const LandingReviews = ({
  language
}) => {
  const reviews = landing_reviews_src_data_useData_useData();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Box"], {
    px: ['32px', '32px', '0px'],
    border: "1px solid black",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      flexGrow: 1
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      width: "100%",
      maxWidth: 1280,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
        justifyContent: "center",
        width: "100%",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
          flexBasis: 120
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
            height: 64,
            width: "100%",
            border: "1px solid black",
            children: "\u041E\u0442\u0437\u044B\u0432\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexGrow: 1,
            flexBasis: [64, 64, 0]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
            height: 64,
            width: "100%",
            border: "1px solid black",
            children: "Arrows"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
          flexBasis: 48
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Row"], {
          children: reviews.map(review => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(landing_reviews_src_item["Item"], {
              review: review
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
              flexBasis: 32
            })]
          }))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
          flexBasis: 120
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      flexGrow: 1
    })]
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-reviews/src/index.ts

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/item/index.ts
var landing_team_src_item = __webpack_require__("JB8P");

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/data/validate.ts
function landing_team_src_data_validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function landing_team_src_data_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { landing_team_src_data_validate_ownKeys(Object(source), true).forEach(function (key) { landing_team_src_data_validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { landing_team_src_data_validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function landing_team_src_data_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const landing_team_src_data_validate_stringProps = ['title', 'content', 'excerpt'];

const landing_team_src_data_validate_formatString = str => str.replace(/(<p>|<\/p>)/g, '');

const landing_team_src_data_validate_validate = target => landing_team_src_data_validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return landing_team_src_data_validate_objectSpread(landing_team_src_data_validate_objectSpread({}, acc), {}, {
      [prop]: landing_team_src_data_validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/data/queries/get-recruits.query.ts



const GET_RECRUITS = client_["gql"]`
  query GetRecruits {
    recruits {
      nodes {
        title
      }
    }
  }
`;

const useRecruits = () => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(GET_RECRUITS);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.recruits.nodes.map(node => landing_team_src_data_validate_validate(node));
  }

  return [];
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/data/queries/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/data/useData.ts


const landing_team_src_data_useData_useData = () => {
  const recruits = useRecruits();
  return recruits;
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/data/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/landing-team.component.tsx










const LandingTeam = ({
  language
}) => {
  const recruits = landing_team_src_data_useData_useData();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
    px: ['32px', '32px', '0px'],
    height: 830,
    border: "1px solid black",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Column"], {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
        width: "100%",
        maxWidth: 1280,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
          width: "100%",
          justifyContent: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 152
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
            height: 64,
            border: "1px solid black",
            children: "Dream team"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 74
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Row"], {
            children: recruits.map(({
              title: recruit
            }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(landing_team_src_item["Item"], {
              recruit: recruit
            }))
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexBasis: 160
          })]
        })
      })
    })
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-team/src/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/validate.ts
function landing_feedback_src_data_validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function landing_feedback_src_data_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { landing_feedback_src_data_validate_ownKeys(Object(source), true).forEach(function (key) { landing_feedback_src_data_validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { landing_feedback_src_data_validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function landing_feedback_src_data_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const landing_feedback_src_data_validate_stringProps = ['title', 'content', 'excerpt'];

const landing_feedback_src_data_validate_formatString = str => str.replace(/(<p>|<\/p>)/g, '');

const landing_feedback_src_data_validate_validate = target => landing_feedback_src_data_validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return landing_feedback_src_data_validate_objectSpread(landing_feedback_src_data_validate_objectSpread({}, acc), {}, {
      [prop]: landing_feedback_src_data_validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/queries/fragment-by-id.query.ts



const fragment_by_id_query_GET_FRAGMENT_BY_ID = client_["gql"]`
  query GetFragmentById($id: ID!) {
    fragment(id: $id) {
      title
      content
    }
  }
`;

const fragment_by_id_query_useFragmentById = id => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(fragment_by_id_query_GET_FRAGMENT_BY_ID, {
    variables: {
      id
    }
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return landing_feedback_src_data_validate_validate(data.fragment);
  }

  return {};
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/queries/submit-form.mutation.ts


const SUBMIT_FORM = client_["gql"]`
  mutation SubmitForm($name: String!, $email: String!, $type: String!, $requisites: String!) {
    submitForm(
      input: {
        formId: 3
        data: [
          { id: 7, value: $name }
          { id: 8, value: $email }
          { id: 9, value: $type }
          { id: 10, value: $requisites }
        ]
      }
    ) {
      errors {
        fieldId
        message
        slug
      }
      message
      success
    }
  }
`;

const useSubmitForm = () => {
  const [submitForm, {
    data,
    error
  }] = Object(client_["useMutation"])(SUBMIT_FORM);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return [submitForm, data.submitForm];
  }

  return [submitForm, {}];
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/queries/index.ts


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/useAction.ts


const useAction = () => useSubmitForm();


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/constants.ts
/** Local **/
// export const CONTACT_US_RU = 'cG9zdDo2Mjk='
// export const CONTACT_US_EN = 'cG9zdDo2MzA='
const CONTACT_US_RU = 'cG9zdDo2Mjk=';
const CONTACT_US_EN = 'cG9zdDo2MzA=';
// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/useData.ts




const landing_feedback_src_data_useData_useData = () => {
  const contactUsEn = fragment_by_id_query_useFragmentById(CONTACT_US_EN);
  const contactUsRu = fragment_by_id_query_useFragmentById(CONTACT_US_RU);
  return {
    EN: contactUsEn,
    RU: contactUsRu
  };
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/data/index.ts


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/landing-feedback.component.tsx











const landing_feedback_component_getContentByLanguage = (content, language) => language === 'RU' ? content.RU : content.EN;

const LandingFeedback = ({
  language
}) => {
  var _data$errors;

  const content = landing_feedback_src_data_useData_useData();
  const [submitForm, data] = useAction();
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])('phone');
  const {
    0: requisites,
    1: setRequisites
  } = Object(external_react_["useState"])('');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Box"], {
    px: ['32px', '32px', '0px'],
    height: 838,
    border: "1px solid blue",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      flexGrow: 1
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      width: "100%",
      maxWidth: 1280,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
        width: "100%",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
          flexBasis: 120
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Row"], {
          height: "100%",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
            width: "100%",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
              height: 16,
              width: "100%",
              maxWidth: 580,
              border: "1px solid black",
              children: landing_feedback_component_getContentByLanguage(content, language).title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
              flexBasis: 32
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
              height: 280,
              width: "100%",
              maxWidth: 580,
              border: "1px solid black",
              children: landing_feedback_component_getContentByLanguage(content, language).content
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexGrow: 1,
            flexBasis: [64, 64, 0]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
            border: "1px solid black",
            width: 515,
            height: 598,
            padding: "32px",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
              width: "100%",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                flexBasis: 32
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  value: name,
                  onChange: event => setName(event.target.value)
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                flexBasis: 24
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  value: email,
                  onChange: event => setEmail(event.target.value)
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                flexBasis: 24
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Layout"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "radio",
                  name: "type",
                  onChange: () => setType('phone')
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "radio",
                  name: "type",
                  onChange: () => setType('telegram')
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "radio",
                  name: "type",
                  onChange: () => setType('skype')
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                flexBasis: 24
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  value: requisites,
                  onChange: event => setRequisites(event.target.value)
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                flexBasis: 32
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                type: "button",
                onClick: () => {
                  submitForm({
                    variables: {
                      name,
                      email,
                      type,
                      requisites
                    }
                  });
                },
                children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                flexBasis: 24
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                children: data && ((_data$errors = data.errors) === null || _data$errors === void 0 ? void 0 : _data$errors.message)
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                flexBasis: 32
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
                children: "Disc"
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
      flexGrow: 1
    })]
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-feedback/src/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/data/constants.ts
/** Local **/
// export const WORKING_HOURS_RU = 'cG9zdDo2MzQ='
// export const WORKING_HOURS_EN = 'cG9zdDo2MzU='
// export const FEEDBACK_PHONE = 'cG9zdDo2MzM='
// export const FEEDBACK_EMAIL = 'cG9zdDo2MzI='
// export const BY = 'cG9zdDo2MzE='
const WORKING_HOURS_RU = 'cG9zdDo2MzQ=';
const WORKING_HOURS_EN = 'cG9zdDo2MzU=';
const FEEDBACK_PHONE = 'cG9zdDo2MzM=';
const FEEDBACK_EMAIL = 'cG9zdDo2MzI=';
const BY = 'cG9zdDo2MzE=';
// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/data/validate.ts
function landing_footer_src_data_validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function landing_footer_src_data_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { landing_footer_src_data_validate_ownKeys(Object(source), true).forEach(function (key) { landing_footer_src_data_validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { landing_footer_src_data_validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function landing_footer_src_data_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const landing_footer_src_data_validate_stringProps = ['title', 'content', 'excerpt'];

const landing_footer_src_data_validate_formatString = str => str.replace(/(<p>|<\/p>)/g, '');

const landing_footer_src_data_validate_validate = target => landing_footer_src_data_validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return landing_footer_src_data_validate_objectSpread(landing_footer_src_data_validate_objectSpread({}, acc), {}, {
      [prop]: landing_footer_src_data_validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/data/queries/fragment-by-id.query.ts



const queries_fragment_by_id_query_GET_FRAGMENT_BY_ID = client_["gql"]`
  query GetFragmentById($id: ID!) {
    fragment(id: $id) {
      title
      content
    }
  }
`;

const queries_fragment_by_id_query_useFragmentById = id => {
  const {
    data,
    error
  } = Object(client_["useQuery"])(queries_fragment_by_id_query_GET_FRAGMENT_BY_ID, {
    variables: {
      id
    }
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return landing_footer_src_data_validate_validate(data.fragment);
  }

  return {};
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/data/queries/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/data/useData.ts







const landing_footer_src_data_useData_useData = () => {
  const workingHoursEn = queries_fragment_by_id_query_useFragmentById(WORKING_HOURS_EN);
  const workingHoursRu = queries_fragment_by_id_query_useFragmentById(WORKING_HOURS_RU);
  const feedbackEmail = queries_fragment_by_id_query_useFragmentById(FEEDBACK_EMAIL);
  const feedbackPhone = queries_fragment_by_id_query_useFragmentById(FEEDBACK_PHONE);
  const by = queries_fragment_by_id_query_useFragmentById(BY);
  return {
    workingHoursEn,
    workingHoursRu,
    feedbackEmail,
    feedbackPhone,
    by
  };
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/data/index.ts

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/landing-footer.component.tsx










const LandingFooter = ({
  language
}) => {
  const {
    workingHoursRu,
    workingHoursEn,
    feedbackPhone,
    feedbackEmail,
    by
  } = landing_footer_src_data_useData_useData();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
    px: ['32px', '32px', '0px'],
    height: 248,
    border: "1px solid blue",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Column"], {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
        width: "100%",
        maxWidth: 1280,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
            width: "100%",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
              border: "1px solid black",
              width: "100%",
              maxWidth: 233,
              height: 30
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
              flexBasis: 60
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Box"], {
              border: "1px solid black",
              width: "100%",
              maxWidth: 126,
              height: 24,
              children: [by.title, " ", by.content]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
            flexGrow: 1,
            flexBasis: [64, 64, 0]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Column"], {
            width: "100%",
            alignItems: "flex-end",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
              border: "1px solid black",
              width: "100%",
              maxWidth: 243,
              height: 32,
              children: feedbackEmail.content
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
              flexBasis: 24
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Box"], {
              border: "1px solid black",
              width: "100%",
              maxWidth: 219,
              height: 32,
              children: feedbackPhone.content
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(src["Layout"], {
              flexBasis: 8
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(src["Box"], {
              border: "1px solid black",
              width: "100%",
              maxWidth: 233,
              height: 24,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(condition_src["Condition"], {
                match: language === 'RU',
                children: workingHoursRu.content
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(condition_src["Condition"], {
                match: language === 'EN',
                children: workingHoursEn.content
              })]
            })]
          })]
        })
      })
    })
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/fragments/landing-footer/src/index.ts

// EXTERNAL MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/store/index.ts
var store = __webpack_require__("iSTV");

// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/index.component.tsx














const Index = () => {
  const language = Object(main_cjs["useReactiveVar"])(store["languageVar"]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Navigation, {
      language: language,
      languageVar: store["languageVar"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingHero, {
      language: language
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingAbout, {
      language: language
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingReviews, {
      language: language
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingTeam, {
      language: language
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingFeedback, {
      language: language
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LandingFooter, {
      language: language
    })]
  });
};


// CONCATENATED MODULE: /Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/index.ts

/* harmony default export */ var index_src = (Index);
// CONCATENATED MODULE: ./pages/index.ts


/***/ }),

/***/ "ciI7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ "cu/J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__("UPyE");
var process$1 = __webpack_require__("/J7S");
var graphql = __webpack_require__("T7Fc");
var tslib = __webpack_require__("rHeM");
var zenObservableTs = __webpack_require__("bDt8");
__webpack_require__("2lJ6");

function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}

var global$1 = (maybe(function () { return globalThis; }) ||
    maybe(function () { return window; }) ||
    maybe(function () { return self; }) ||
    maybe(function () { return global; }) ||
    maybe(function () { return Function("return this")(); }));

var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(global$1, GLOBAL_KEY, {
            value: maybe(function () { return "production"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return global$1[GLOBAL_KEY];
    }
}
var DEV = getDEV();

function removeTemporaryGlobals() {
    graphql.isType(null);
    return process$1.remove();
}

removeTemporaryGlobals();

function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? tsInvariant.invariant(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.") : tsInvariant.invariant(evaledValue !== void 0, 43);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    graphql.visit(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? tsInvariant.invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.") : tsInvariant.invariant(directiveArguments && directiveArguments.length === 1, 44);
            var ifArgument = directiveArguments[0];
            __DEV__ ? tsInvariant.invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.") : tsInvariant.invariant(ifArgument.name && ifArgument.name.value === 'if', 45);
            var ifValue = ifArgument.value;
            __DEV__ ? tsInvariant.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.") : tsInvariant.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 46);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new tsInvariant.InvariantError("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new tsInvariant.InvariantError(47);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? tsInvariant.invariant(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.") : tsInvariant.invariant(fragments.length === 1, 48);
        actualFragmentName = fragments[0].name.value;
    }
    var query = tslib.__assign(tslib.__assign({}, document), { definitions: tslib.__spreadArray([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragment = fragmentMap && fragmentMap[selection.name.value];
            __DEV__ ? tsInvariant.invariant(fragment, "No fragment named " + selection.name.value + ".") : tsInvariant.invariant(fragment, 49);
            return fragment;
        }
        default:
            return null;
    }
}

function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return (isNonNullObject(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new tsInvariant.InvariantError("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new tsInvariant.InvariantError(58);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return directives['connection']['key'] + "(" + stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if (isNonNullObject(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}

function checkDocument(doc) {
    __DEV__ ? tsInvariant.invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : tsInvariant.invariant(doc && doc.kind === 'Document', 50);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new tsInvariant.InvariantError("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"") : new tsInvariant.InvariantError(51);
        }
        return definition;
    });
    __DEV__ ? tsInvariant.invariant(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations") : tsInvariant.invariant(operations.length <= 1, 52);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? tsInvariant.invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : tsInvariant.invariant(queryDef && queryDef.operation === 'query', 53);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? tsInvariant.invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : tsInvariant.invariant(doc.kind === 'Document', 54);
    __DEV__ ? tsInvariant.invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : tsInvariant.invariant(doc.definitions.length <= 1, 55);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? tsInvariant.invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : tsInvariant.invariant(fragmentDef.kind === 'FragmentDefinition', 56);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new tsInvariant.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new tsInvariant.InvariantError(57);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}

function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}

var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(graphql.visit(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        filterInPlace(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        filterInPlace(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
    return graphql.visit(checkDocument(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (isField(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (isField(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return tslib.__assign(tslib.__assign({}, node), { selections: tslib.__spreadArray(tslib.__spreadArray([], selections), [TYPENAME_FIELD]) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && tsInvariant.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(graphql.visit(doc, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(graphql.visit(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((isField(selection) || isInlineFragment(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = graphql.visit(document, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = graphql.visit(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return isField(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, tslib.__spreadArray([target, source, sourceKey], context));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isNonNullObject(value) && !this.pastCopies.has(value)) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            }
            else {
                value = tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
            }
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger;
}());

function concatPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming) {
            return existing ? tslib.__spreadArray(tslib.__spreadArray([], existing), incoming) : incoming;
        },
    };
}
function offsetLimitPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming, _a) {
            var args = _a.args;
            var merged = existing ? existing.slice(0) : [];
            if (args) {
                var _b = args.offset, offset = _b === void 0 ? 0 : _b;
                for (var i = 0; i < incoming.length; ++i) {
                    merged[offset + i] = incoming[i];
                }
            }
            else {
                merged.push.apply(merged, incoming);
            }
            return merged;
        },
    };
}
function relayStylePagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        read: function (existing, _a) {
            var canRead = _a.canRead, readField = _a.readField;
            if (!existing)
                return;
            var edges = [];
            var firstEdgeCursor = "";
            var lastEdgeCursor = "";
            existing.edges.forEach(function (edge) {
                if (canRead(readField("node", edge))) {
                    edges.push(edge);
                    if (edge.cursor) {
                        firstEdgeCursor = firstEdgeCursor || edge.cursor || "";
                        lastEdgeCursor = edge.cursor || lastEdgeCursor;
                    }
                }
            });
            var _b = existing.pageInfo || {}, startCursor = _b.startCursor, endCursor = _b.endCursor;
            return tslib.__assign(tslib.__assign({}, getExtras(existing)), { edges: edges, pageInfo: tslib.__assign(tslib.__assign({}, existing.pageInfo), { startCursor: startCursor || firstEdgeCursor, endCursor: endCursor || lastEdgeCursor }) });
        },
        merge: function (existing, incoming, _a) {
            if (existing === void 0) { existing = makeEmptyData(); }
            var args = _a.args, isReference = _a.isReference, readField = _a.readField;
            var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
                if (isReference(edge = tslib.__assign({}, edge))) {
                    edge.cursor = readField("cursor", edge);
                }
                return edge;
            }) : [];
            if (incoming.pageInfo) {
                var pageInfo_1 = incoming.pageInfo;
                var startCursor = pageInfo_1.startCursor, endCursor = pageInfo_1.endCursor;
                var firstEdge = incomingEdges[0];
                var lastEdge = incomingEdges[incomingEdges.length - 1];
                if (firstEdge && startCursor) {
                    firstEdge.cursor = startCursor;
                }
                if (lastEdge && endCursor) {
                    lastEdge.cursor = endCursor;
                }
                var firstCursor = firstEdge && firstEdge.cursor;
                if (firstCursor && !startCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            startCursor: firstCursor,
                        },
                    });
                }
                var lastCursor = lastEdge && lastEdge.cursor;
                if (lastCursor && !endCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            endCursor: lastCursor,
                        },
                    });
                }
            }
            var prefix = existing.edges;
            var suffix = [];
            if (args && args.after) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.after; });
                if (index >= 0) {
                    prefix = prefix.slice(0, index + 1);
                }
            }
            else if (args && args.before) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.before; });
                suffix = index < 0 ? prefix : prefix.slice(index);
                prefix = [];
            }
            else if (incoming.edges) {
                prefix = [];
            }
            var edges = tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray([], prefix), incomingEdges), suffix);
            var pageInfo = tslib.__assign(tslib.__assign({}, incoming.pageInfo), existing.pageInfo);
            if (incoming.pageInfo) {
                var _b = incoming.pageInfo, hasPreviousPage = _b.hasPreviousPage, hasNextPage = _b.hasNextPage, startCursor = _b.startCursor, endCursor = _b.endCursor, extras = tslib.__rest(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);
                Object.assign(pageInfo, extras);
                if (!prefix.length) {
                    if (void 0 !== hasPreviousPage)
                        pageInfo.hasPreviousPage = hasPreviousPage;
                    if (void 0 !== startCursor)
                        pageInfo.startCursor = startCursor;
                }
                if (!suffix.length) {
                    if (void 0 !== hasNextPage)
                        pageInfo.hasNextPage = hasNextPage;
                    if (void 0 !== endCursor)
                        pageInfo.endCursor = endCursor;
                }
            }
            return tslib.__assign(tslib.__assign(tslib.__assign({}, getExtras(existing)), getExtras(incoming)), { edges: edges, pageInfo: pageInfo });
        },
    };
}
var getExtras = function (obj) { return tslib.__rest(obj, notExtras); };
var notExtras = ["edges", "pageInfo"];
function makeEmptyData() {
    return {
        edges: [],
        pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: "",
            endCursor: "",
        },
    };
}

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if (isNonNullObject(obj)) {
            if (!Object.isFrozen(obj))
                Object.freeze(obj);
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if (isNonNullObject(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}

function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}

function asyncMap(observable, mapFn, catchFn) {
    return new zenObservableTs.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: zenObservableTs.Observable });
    }
    if (typeof Symbol === "function" && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}

function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    tslib.__extends(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    iterateObserversSafely(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        Promise.resolve().then(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    iterateObserversSafely(_this.observers, "error", error);
                }
            },
            complete: function () {
                if (_this.sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        iterateObserversSafely(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new zenObservableTs.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast.prototype.removeObserver = function (observer, quietly) {
        if (this.observers.delete(observer) &&
            --this.addCount < 1 &&
            !quietly) {
            this.handlers.error(new Error("Observable cancelled prematurely"));
        }
    };
    Concast.prototype.cleanup = function (callback) {
        var _this = this;
        var called = false;
        var once = function () {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once,
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast;
}(zenObservableTs.Observable));
fixObservableSubclass(Concast);

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function graphQLResultHasError(result) {
    return (result.errors && result.errors.length > 0) || false;
}

var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');
var canUseWeakSet = typeof WeakSet === 'function';

function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}

var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return prefix + ":" + count + ":" + Math.random().toString(36).slice(2);
}

function stringifyForDisplay(value) {
    var undefId = makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}

__DEV__ ? tsInvariant.invariant("boolean" === typeof DEV, DEV) : tsInvariant.invariant("boolean" === typeof DEV, 59);

exports.Observable = zenObservableTs.Observable;
exports.Concast = Concast;
exports.DEV = DEV;
exports.DeepMerger = DeepMerger;
exports.addTypenameToDocument = addTypenameToDocument;
exports.argumentsObjectFromField = argumentsObjectFromField;
exports.asyncMap = asyncMap;
exports.buildQueryFromSelectionSet = buildQueryFromSelectionSet;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseWeakSet = canUseWeakSet;
exports.checkDocument = checkDocument;
exports.cloneDeep = cloneDeep;
exports.compact = compact;
exports.concatPagination = concatPagination;
exports.createFragmentMap = createFragmentMap;
exports.fixObservableSubclass = fixObservableSubclass;
exports.getDefaultValues = getDefaultValues;
exports.getDirectiveNames = getDirectiveNames;
exports.getFragmentDefinition = getFragmentDefinition;
exports.getFragmentDefinitions = getFragmentDefinitions;
exports.getFragmentFromSelection = getFragmentFromSelection;
exports.getFragmentQueryDocument = getFragmentQueryDocument;
exports.getInclusionDirectives = getInclusionDirectives;
exports.getMainDefinition = getMainDefinition;
exports.getOperationDefinition = getOperationDefinition;
exports.getOperationName = getOperationName;
exports.getQueryDefinition = getQueryDefinition;
exports.getStoreKeyName = getStoreKeyName;
exports.getTypenameFromResult = getTypenameFromResult;
exports.graphQLResultHasError = graphQLResultHasError;
exports.hasClientExports = hasClientExports;
exports.hasDirectives = hasDirectives;
exports.isDocumentNode = isDocumentNode;
exports.isField = isField;
exports.isInlineFragment = isInlineFragment;
exports.isNonEmptyArray = isNonEmptyArray;
exports.isNonNullObject = isNonNullObject;
exports.isReference = isReference;
exports.iterateObserversSafely = iterateObserversSafely;
exports.makeReference = makeReference;
exports.makeUniqueId = makeUniqueId;
exports.maybeDeepFreeze = maybeDeepFreeze;
exports.mergeDeep = mergeDeep;
exports.mergeDeepArray = mergeDeepArray;
exports.offsetLimitPagination = offsetLimitPagination;
exports.relayStylePagination = relayStylePagination;
exports.removeArgumentsFromDocument = removeArgumentsFromDocument;
exports.removeClientSetsFromDocument = removeClientSetsFromDocument;
exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
exports.removeFragmentSpreadFromDocument = removeFragmentSpreadFromDocument;
exports.resultKeyNameFromField = resultKeyNameFromField;
exports.shouldInclude = shouldInclude;
exports.storeKeyNameFromField = storeKeyNameFromField;
exports.stringifyForDisplay = stringifyForDisplay;
exports.valueToObjectRepresentation = valueToObjectRepresentation;
//# sourceMappingURL=utilities.cjs.js.map


/***/ }),

/***/ "eYbc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
var defaultMakeData = function () { return Object.create(null); };
// Useful for processing arguments objects as well as arrays.
var _a = Array.prototype, forEach = _a.forEach, slice = _a.slice;
var Trie = /** @class */ (function () {
    function Trie(weakness, makeData) {
        if (weakness === void 0) { weakness = true; }
        if (makeData === void 0) { makeData = defaultMakeData; }
        this.weakness = weakness;
        this.makeData = makeData;
    }
    Trie.prototype.lookup = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return this.lookupArray(array);
    };
    Trie.prototype.lookupArray = function (array) {
        var node = this;
        forEach.call(array, function (key) { return node = node.getChildTrie(key); });
        return node.data || (node.data = this.makeData(slice.call(array)));
    };
    Trie.prototype.getChildTrie = function (key) {
        var map = this.weakness && isObjRef(key)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child)
            map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
    };
    return Trie;
}());
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}

exports.Trie = Trie;
//# sourceMappingURL=trie.js.map


/***/ }),

/***/ "eaK/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
}), __webpack_require__("ylYk"), __webpack_require__("cDcd"), __webpack_require__("m9/w");

var base_dist_emotionStyledBase = __webpack_require__("PR0n");

__webpack_require__("LXCP"), __webpack_require__("6Z3W"), __webpack_require__("0IRf");

var tags = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan" ], newStyled = base_dist_emotionStyledBase.default.bind();

tags.forEach((function(tagName) {
  newStyled[tagName] = newStyled(tagName);
})), exports.default = newStyled;


/***/ }),

/***/ "hi7r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("JBDb");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "iSTV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _store_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bMuI");
/* harmony import */ var _store_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_store_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_store_interfaces__WEBPACK_IMPORTED_MODULE_0__, "languageVar")) __webpack_require__.d(__webpack_exports__, "languageVar", function() { return _store_interfaces__WEBPACK_IMPORTED_MODULE_0__["languageVar"]; });

/* harmony import */ var _store_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sGil");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "languageVar", function() { return _store_vars__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),

/***/ "jRWd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("eaK/");
} else {}


/***/ }),

/***/ "jT00":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.flexbox = void 0;

var _core = __webpack_require__("Ew0i");

var config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = (0, _core.system)(config);
exports.flexbox = flexbox;
var _default = flexbox;
exports["default"] = _default;

/***/ }),

/***/ "k2Dz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("3YhR"), exports);
__exportStar(__webpack_require__("FAVQ"), exports);


/***/ }),

/***/ "kSir":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var tsInvariant = __webpack_require__("UPyE");
var utilities = __webpack_require__("cu/J");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            n[k] = e[k];
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var cache = new (utilities.canUseWeakMap ? WeakMap : Map)();
function getApolloContext() {
    var context = cache.get(React__namespace.createContext);
    if (!context) {
        context = React__namespace.createContext({});
        context.displayName = 'ApolloContext';
        cache.set(React__namespace.createContext, context);
    }
    return context;
}

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        __DEV__ ? tsInvariant.invariant(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.') : tsInvariant.invariant(context && context.client, 30);
        return props.children(context.client);
    });
};

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? tsInvariant.invariant(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : tsInvariant.invariant(context.client, 31);
        return (React__namespace.createElement(ApolloContext.Provider, { value: context }, children));
    });
};

exports.ApolloConsumer = ApolloConsumer;
exports.ApolloProvider = ApolloProvider;
exports.getApolloContext = getApolloContext;
exports.resetApolloContext = getApolloContext;
//# sourceMappingURL=context.cjs.js.map


/***/ }),

/***/ "lPty":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = __webpack_require__("cDcd");

__webpack_require__("RBVa");

var emotionElement = __webpack_require__("yA1/");

__webpack_require__("ylYk"), __webpack_require__("L+/6"), __webpack_require__("hi7r"), 
__webpack_require__("w4yC");

var utils = __webpack_require__("6Z3W"), serialize = __webpack_require__("0IRf"), sheet = __webpack_require__("YBeZ"), pkg = {
  name: "@emotion/react",
  version: "11.4.0",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: [ "src", "dist", "jsx-runtime", "jsx-dev-runtime", "isolated-hoist-non-react-statics-do-not-use-this-in-your-code", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow" ],
  sideEffects: !1,
  author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/cache": "^11.4.0",
    "@emotion/serialize": "^1.0.2",
    "@emotion/sheet": "^1.0.1",
    "@emotion/utils": "^1.0.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: !0
    },
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.1.3",
    "@emotion/css-prettifier": "1.0.0",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.3.0",
    "@types/react": "^16.9.11",
    dtslint: "^0.3.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [ "./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js" ],
    umdName: "emotionReact"
  }
}, jsx = function(type, props) {
  var args = arguments;
  if (null == props || !emotionElement.hasOwnProperty.call(props, "css")) return React.createElement.apply(void 0, args);
  var argsLength = args.length, createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = emotionElement.Emotion, createElementArgArray[1] = emotionElement.createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
  return React.createElement.apply(null, createElementArgArray);
}, warnedAboutCssPropForGlobal = !1, Global = emotionElement.withEmotionCache((function(props, cache) {
  var styles = props.styles, serialized = serialize.serializeStyles([ styles ], void 0, "function" == typeof styles || Array.isArray(styles) ? React.useContext(emotionElement.ThemeContext) : void 0);
  if (!emotionElement.isBrowser) {
    for (var _ref, serializedNames = serialized.name, serializedStyles = serialized.styles, next = serialized.next; void 0 !== next; ) serializedNames += " " + next.name, 
    serializedStyles += next.styles, next = next.next;
    var shouldCache = !0 === cache.compat, rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);
    return shouldCache ? null : React.createElement("style", ((_ref = {})["data-emotion"] = cache.key + "-global " + serializedNames, 
    _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  }
  var sheetRef = React.useRef();
  return React.useLayoutEffect((function() {
    var key = cache.key + "-global", sheet$1 = new sheet.StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    }), rehydrating = !1, node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    return cache.sheet.tags.length && (sheet$1.before = cache.sheet.tags[0]), null !== node && (rehydrating = !0, 
    node.setAttribute("data-emotion", key), sheet$1.hydrate([ node ])), sheetRef.current = [ sheet$1, rehydrating ], 
    function() {
      sheet$1.flush();
    };
  }), [ cache ]), React.useLayoutEffect((function() {
    var sheetRefCurrent = sheetRef.current, sheet = sheetRefCurrent[0];
    if (sheetRefCurrent[1]) sheetRefCurrent[1] = !1; else {
      if (void 0 !== serialized.next && utils.insertStyles(cache, serialized.next, !0), 
      sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element, sheet.flush();
      }
      cache.insert("", serialized, sheet, !1);
    }
  }), [ cache, serialized.name ]), null;
}));

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  return serialize.serializeStyles(args);
}

var keyframes = function() {
  var insertable = css.apply(void 0, arguments), name = "animation-" + insertable.name;
  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, classnames = function classnames(args) {
  for (var len = args.length, i = 0, cls = ""; i < len; i++) {
    var arg = args[i];
    if (null != arg) {
      var toAdd = void 0;
      switch (typeof arg) {
       case "boolean":
        break;

       case "object":
        if (Array.isArray(arg)) toAdd = classnames(arg); else for (var k in toAdd = "", 
        arg) arg[k] && k && (toAdd && (toAdd += " "), toAdd += k);
        break;

       default:
        toAdd = arg;
      }
      toAdd && (cls && (cls += " "), cls += toAdd);
    }
  }
  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [], rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);
  return registeredStyles.length < 2 ? className : rawClassName + css(registeredStyles);
}

var isBrowser, isJest, globalContext, globalKey, ClassNames = emotionElement.withEmotionCache((function(props, cache) {
  var _ref, rules = "", serializedHashes = "", css = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
    var serialized = serialize.serializeStyles(args, cache.registered);
    if (emotionElement.isBrowser) utils.insertStyles(cache, serialized, !1); else {
      var res = utils.insertStyles(cache, serialized, !1);
      void 0 !== res && (rules += res);
    }
    return emotionElement.isBrowser || (serializedHashes += " " + serialized.name), 
    cache.key + "-" + serialized.name;
  }, content = {
    css: css,
    cx: function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
      return merge(cache.registered, css, classnames(args));
    },
    theme: React.useContext(emotionElement.ThemeContext)
  }, ele = props.children(content);
  return !0, emotionElement.isBrowser || 0 === rules.length ? ele : React.createElement(React.Fragment, null, React.createElement("style", ((_ref = {})["data-emotion"] = cache.key + " " + serializedHashes.substring(1), 
  _ref.dangerouslySetInnerHTML = {
    __html: rules
  }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
}));

exports.CacheProvider = emotionElement.CacheProvider, exports.ThemeContext = emotionElement.ThemeContext, 
exports.ThemeProvider = emotionElement.ThemeProvider, exports.useTheme = emotionElement.useTheme, 
Object.defineProperty(exports, "withEmotionCache", {
  enumerable: !0,
  get: function() {
    return emotionElement.withEmotionCache;
  }
}), exports.withTheme = emotionElement.withTheme, exports.ClassNames = ClassNames, 
exports.Global = Global, exports.createElement = jsx, exports.css = css, exports.jsx = jsx, 
exports.keyframes = keyframes;


/***/ }),

/***/ "m9/w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("ASJh");
} else {}


/***/ }),

/***/ "mAcj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var sheet = __webpack_require__("YBeZ"), stylis = __webpack_require__("DlPd"), weakMemoize = __webpack_require__("L+/6"), memoize = __webpack_require__("q/ih");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var weakMemoize__default = _interopDefault(weakMemoize), memoize__default = _interopDefault(memoize), last = function(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}, toRules = function(parsed, points) {
  var index = -1, character = 44;
  do {
    switch (stylis.token(character)) {
     case 0:
      38 === character && 12 === stylis.peek() && (points[index] = 1), parsed[index] += stylis.identifier(stylis.position - 1);
      break;

     case 2:
      parsed[index] += stylis.delimit(character);
      break;

     case 4:
      if (44 === character) {
        parsed[++index] = 58 === stylis.peek() ? "&\f" : "", points[index] = parsed[index].length;
        break;
      }

     default:
      parsed[index] += stylis.from(character);
    }
  } while (character = stylis.next());
  return parsed;
}, getRules = function(value, points) {
  return stylis.dealloc(toRules(stylis.alloc(value), points));
}, fixedElements = new WeakMap, compat = function(element) {
  if ("rule" === element.type && element.parent && element.length) {
    for (var value = element.value, parent = element.parent, isImplicitRule = element.column === parent.column && element.line === parent.line; "rule" !== parent.type; ) if (!(parent = parent.parent)) return;
    if ((1 !== element.props.length || 58 === value.charCodeAt(0) || fixedElements.get(parent)) && !isImplicitRule) {
      fixedElements.set(element, !0);
      for (var points = [], rules = getRules(value, points), parentRules = parent.props, i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, 
      k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
}, removeLabel = function(element) {
  if ("decl" === element.type) {
    var value = element.value;
    108 === value.charCodeAt(0) && 98 === value.charCodeAt(2) && (element.return = "", 
    element.value = "");
  }
}, ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", isIgnoringComment = function(element) {
  return !!element && "comm" === element.type && element.children.indexOf(ignoreFlag) > -1;
}, createUnsafeSelectorsAlarm = function(cache) {
  return function(element, index, children) {
    if ("rule" === element.type) {
      var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
      if (unsafePseudoClasses && !0 !== cache.compat) {
        var prevElement = index > 0 ? children[index - 1] : null;
        if (prevElement && isIgnoringComment(last(prevElement.children))) return;
        unsafePseudoClasses.forEach((function(unsafePseudoClass) {
          console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
        }));
      }
    }
  };
}, isImportRule = function(element) {
  return 105 === element.type.charCodeAt(1) && 64 === element.type.charCodeAt(0);
}, isPrependedWithRegularRules = function(index, children) {
  for (var i = index - 1; i >= 0; i--) if (!isImportRule(children[i])) return !0;
  return !1;
}, nullifyElement = function(element) {
  element.type = "", element.value = "", element.return = "", element.children = "", 
  element.props = "";
}, incorrectImportAlarm = function(element, index, children) {
  isImportRule(element) && (element.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), 
  nullifyElement(element)) : isPrependedWithRegularRules(index, children) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), 
  nullifyElement(element)));
}, isBrowser = "undefined" != typeof document, getServerStylisCache = isBrowser ? void 0 : weakMemoize__default.default((function() {
  return memoize__default.default((function() {
    var cache = {};
    return function(name) {
      return cache[name];
    };
  }));
})), defaultStylisPlugins = [ stylis.prefixer ], createCache = function(options) {
  var key = options.key;
  if (isBrowser && "css" === key) {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, (function(node) {
      -1 !== node.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(node), 
      node.setAttribute("data-s", ""));
    }));
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var container, _insert, inserted = {}, nodesToHydrate = [];
  isBrowser && (container = options.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), (function(node) {
    for (var attrib = node.getAttribute("data-emotion").split(" "), i = 1; i < attrib.length; i++) inserted[attrib[i]] = !0;
    nodesToHydrate.push(node);
  })));
  var omnipresentPlugins = [ compat, removeLabel ];
  if (isBrowser) {
    var currentSheet, finalizingPlugins = [ stylis.stringify, stylis.rulesheet((function(rule) {
      currentSheet.insert(rule);
    })) ], serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    _insert = function(selector, serialized, sheet, shouldCache) {
      var styles;
      currentSheet = sheet, styles = selector ? selector + "{" + serialized.styles + "}" : serialized.styles, 
      stylis.serialize(stylis.compile(styles), serializer), shouldCache && (cache.inserted[serialized.name] = !0);
    };
  } else {
    var _finalizingPlugins = [ stylis.stringify ], _serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins)), serverStylisCache = getServerStylisCache(stylisPlugins)(key), getRules = function(selector, serialized) {
      var styles, name = serialized.name;
      return void 0 === serverStylisCache[name] && (serverStylisCache[name] = (styles = selector ? selector + "{" + serialized.styles + "}" : serialized.styles, 
      stylis.serialize(stylis.compile(styles), _serializer))), serverStylisCache[name];
    };
    _insert = function(selector, serialized, sheet, shouldCache) {
      var name = serialized.name, rules = getRules(selector, serialized);
      return void 0 === cache.compat ? (shouldCache && (cache.inserted[name] = !0), rules) : shouldCache ? void (cache.inserted[name] = rules) : rules;
    };
  }
  var cache = {
    key: key,
    sheet: new sheet.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache.sheet.hydrate(nodesToHydrate), cache;
};

exports.default = createCache;


/***/ }),

/***/ "mBxs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var hashString = __webpack_require__("4gcX"), unitless = __webpack_require__("rfGx"), memoize = __webpack_require__("q/ih");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var contentValuePattern, contentValues, oldProcessStyleValue, msPattern, hyphenPattern, hyphenatedCache, hashString__default = _interopDefault(hashString), unitless__default = _interopDefault(unitless), memoize__default = _interopDefault(memoize), ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences", UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", hyphenateRegex = /[A-Z]|^ms/g, animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g, isCustomProperty = function(property) {
  return 45 === property.charCodeAt(1);
}, isProcessableValue = function(value) {
  return null != value && "boolean" != typeof value;
}, processStyleName = memoize__default.default((function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
})), processStyleValue = function(key, value) {
  switch (key) {
   case "animation":
   case "animationName":
    if ("string" == typeof value) return value.replace(animationRegex, (function(match, p1, p2) {
      return cursor = {
        name: p1,
        styles: p2,
        next: cursor
      }, p1;
    }));
  }
  return 1 === unitless__default.default[key] || isCustomProperty(key) || "number" != typeof value || 0 === value ? value : value + "px";
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (null == interpolation) return "";
  if (void 0 !== interpolation.__emotion_styles) return interpolation;
  switch (typeof interpolation) {
   case "boolean":
    return "";

   case "object":
    if (1 === interpolation.anim) return cursor = {
      name: interpolation.name,
      styles: interpolation.styles,
      next: cursor
    }, interpolation.name;
    if (void 0 !== interpolation.styles) {
      var next = interpolation.next;
      if (void 0 !== next) for (;void 0 !== next; ) cursor = {
        name: next.name,
        styles: next.styles,
        next: cursor
      }, next = next.next;
      var styles = interpolation.styles + ";";
      return styles;
    }
    return createStringFromObject(mergedProps, registered, interpolation);

   case "function":
    if (void 0 !== mergedProps) {
      var previousCursor = cursor, result = interpolation(mergedProps);
      return cursor = previousCursor, handleInterpolation(mergedProps, registered, result);
    }
    break;

   case "string":
  }
  if (null == registered) return interpolation;
  var cached = registered[interpolation];
  return void 0 !== cached ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";"; else for (var _key in obj) {
    var value = obj[_key];
    if ("object" != typeof value) null != registered && void 0 !== registered[value] ? string += _key + "{" + registered[value] + "}" : isProcessableValue(value) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";"); else if (!Array.isArray(value) || "string" != typeof value[0] || null != registered && void 0 !== registered[value[0]]) {
      var interpolated = handleInterpolation(mergedProps, registered, value);
      switch (_key) {
       case "animation":
       case "animationName":
        string += processStyleName(_key) + ":" + interpolated + ";";
        break;

       default:
        string += _key + "{" + interpolated + "}";
      }
    } else for (var _i = 0; _i < value.length; _i++) isProcessableValue(value[_i]) && (string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";");
  }
  return string;
}

var sourceMapPattern, cursor, labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;

var serializeStyles = function(args, registered, mergedProps) {
  if (1 === args.length && "object" == typeof args[0] && null !== args[0] && void 0 !== args[0].styles) return args[0];
  var stringMode = !0, styles = "";
  cursor = void 0;
  var strings = args[0];
  null == strings || void 0 === strings.raw ? (stringMode = !1, styles += handleInterpolation(mergedProps, registered, strings)) : styles += strings[0];
  for (var i = 1; i < args.length; i++) styles += handleInterpolation(mergedProps, registered, args[i]), 
  stringMode && (styles += strings[i]);
  labelPattern.lastIndex = 0;
  for (var match, identifierName = ""; null !== (match = labelPattern.exec(styles)); ) identifierName += "-" + match[1];
  var name = hashString__default.default(styles) + identifierName;
  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

exports.serializeStyles = serializeStyles;


/***/ }),

/***/ "mily":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r9xZ");








const Item = ({
  recruit
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  height: 380,
  width: "100%",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    width: "100%",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justifyContent: "center",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        border: "1px solid blue",
        borderRadius: "100%",
        width: 280,
        height: 280
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 32
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justifyContent: "center",
      children: recruit
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      flexBasis: 12
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ui_layout__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justifyContent: "center",
      children: "IT-\u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440"
    })]
  })
});



/***/ }),

/***/ "moMv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+zLr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _item_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VIbE");
/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_item_interface__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "nOev":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = definedKeys(a);
            var bKeys = definedKeys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
        case '[object Uint16Array]':
        case '[object Uint8Array]': // Buffer, in Node.js.
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]': {
            var len = a.byteLength;
            if (len === b.byteLength) {
                while (len-- && a[len] === b[len]) {
                    // Keep looping as long as the bytes are equal.
                }
            }
            return len === -1;
        }
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]': {
            var aCode = fnToStr.call(a);
            if (aCode !== fnToStr.call(b)) {
                return false;
            }
            // We consider non-native functions equal if they have the same code
            // (native functions require === because their code is censored).
            // Note that this behavior is not entirely sound, since !== function
            // objects with the same code can behave differently depending on
            // their closure scope. However, any function can behave differently
            // depending on the values of its input arguments (including this)
            // and its calling context (including its closure scope), even
            // though the function object is === to itself; and it is entirely
            // possible for functions that are not === to behave exactly the
            // same under all conceivable circumstances. Because none of these
            // factors are statically decidable in JavaScript, JS function
            // equality is not well-defined. This ambiguity allows us to
            // consider the best possible heuristic among various imperfect
            // options, and equating non-native functions that have the same
            // code has enormous practical benefits, such as when comparing
            // functions that are repeatedly passed as fresh function
            // expressions within objects that are otherwise deeply equal. Since
            // any function created from the same syntactic expression (in the
            // same code location) will always stringify to the same code
            // according to fnToStr.call, we can reasonably expect these
            // repeatedly passed function expressions to have the same code, and
            // thus behave "the same" (with all the caveats mentioned above),
            // even though the runtime function objects are !== to one another.
            return !endsWith(aCode, nativeCodeSuffix);
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 &&
        full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}

exports.default = equal;
exports.equal = equal;
//# sourceMappingURL=equality.js.map


/***/ }),

/***/ "oG5o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _condition_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("479R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return _condition_component__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _condition_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7IO8");
/* harmony import */ var _condition_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_condition_interface__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "pFDM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__("UPyE");
var utilities = __webpack_require__("cu/J");
var tslib = __webpack_require__("rHeM");
var optimism = __webpack_require__("VWuS");
var equality = __webpack_require__("nOev");
var trie = __webpack_require__("eYbc");
var context = __webpack_require__("GJPJ");

var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = optimism.wrap(utilities.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        this.performTransaction(options.update, optimisticId);
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = tslib.__rest(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = tslib.__rest(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    return ApolloCache;
}());

exports.Cache = void 0;
(function (Cache) {
})(exports.Cache || (exports.Cache = {}));

var MissingFieldError = (function (_super) {
    tslib.__extends(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));

var hasOwn = Object.prototype.hasOwnProperty;
function getTypenameFromStoreObject(store, objectOrReference) {
    return utilities.isReference(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (utilities.isNonNullObject(result)) {
        return Array.isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if (utilities.isField(field) && utilities.shouldInclude(field, variables)) {
                    var key = utilities.resultKeyNameFromField(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return utilities.isNonNullObject(value) &&
        !utilities.isReference(value) &&
        !Array.isArray(value);
}
function makeProcessedFieldsMerger() {
    return new utilities.DeepMerger;
}

var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
exports.EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return utilities.maybeDeepFreeze(utilities.isReference(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return utilities.isReference(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return utilities.makeReference(objOrIdOrRef);
            }
            if (utilities.isReference(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = utilities.makeReference(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return tslib.__assign({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if (utilities.isReference(older))
            older = older.__ref;
        if (utilities.isReference(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? tsInvariant.invariant(typeof dataId === "string", "store.merge expects a string ID") : tsInvariant.invariant(typeof dataId === "string", 2);
        var merged = new utilities.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = fieldNameFromStoreName(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: utilities.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || utilities.makeReference(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = fieldNameFromStoreName(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify(utilities.maybeDeepFreeze(fieldValue), tslib.__assign(tslib.__assign({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options) {
        var evicted = false;
        if (options.id) {
            if (hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer) {
                evicted = this.parent.evict(options) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = tslib.__rest(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if (utilities.isReference(obj)) {
                    found_1[obj.__ref] = true;
                }
                if (utilities.isNonNullObject(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if (utilities.isNonNullObject(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());
var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? optimism.dep() : null;
        this.keyMaker = new trie.Trie(utilities.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        tslib.__extends(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new trie.Trie(utilities.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(exports.EntityStore || (exports.EntityStore = {}));
var Layer = (function (_super) {
    tslib.__extends(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!equality.equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return tslib.__assign(tslib.__assign({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return hasOwn.call(this.data, dataId) ? tslib.__assign(tslib.__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(exports.EntityStore));
var Stump = (function (_super) {
    tslib.__extends(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return equality.equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof exports.EntityStore && store.group.caching);
}

function shallowCopy(value) {
    if (utilities.isNonNullObject(value)) {
        return Array.isArray(value)
            ? value.slice(0)
            : tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.pool = new trie.Trie(utilities.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return utilities.isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if (utilities.isNonNullObject(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if (utilities.isNonNullObject(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());
var canonicalStringify = Object.assign(function (value) {
    if (utilities.isNonNullObject(value)) {
        if (stringifyCanon === void 0) {
            resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify,
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
}

function missingFromInvariant(err, context) {
    return new MissingFieldError(err.message, context.path.slice(), context.query, context.variables);
}
function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.config = tslib.__assign(tslib.__assign({}, config), { addTypename: config.addTypename !== false });
        this.canon = config.canon || new ObjectCanon;
        this.executeSelectionSet = optimism.wrap(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return tslib.__assign(tslib.__assign({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(selectionSet, utilities.isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = optimism.wrap(function (options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? true : _d;
        var policies = this.config.cache.policies;
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(utilities.getQueryDefinition(query))), variables);
        var rootRef = utilities.makeReference(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: utilities.getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: canonicalStringify(variables),
                canonizeResults: canonizeResults,
                fragmentMap: utilities.createFragmentMap(utilities.getFragmentDefinitions(query)),
                path: [],
            },
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) {
            throw execResult.missing[0];
        }
        return {
            result: execResult.result,
            missing: execResult.missing,
            complete: !hasMissingFields,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if (utilities.isReference(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: [missingFromInvariant(__DEV__ ? new tsInvariant.InvariantError("Dangling reference to missing " + objectOrReference.__ref + " object") : new tsInvariant.InvariantError(6), context)],
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var objectsToMerge = [];
        var finalResult = { result: null };
        var typename = store.getFieldValue(objectOrReference, "__typename");
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function getMissing() {
            return finalResult.missing || (finalResult.missing = []);
        }
        function handleMissing(result) {
            var _a;
            if (result.missing)
                (_a = getMissing()).push.apply(_a, result.missing);
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a;
            if (!utilities.shouldInclude(selection, variables))
                return;
            if (utilities.isField(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = utilities.resultKeyNameFromField(selection);
                context.path.push(resultName);
                if (fieldValue === void 0) {
                    if (!utilities.addTypenameToDocument.added(selection)) {
                        getMissing().push(missingFromInvariant(__DEV__ ? new tsInvariant.InvariantError("Can't find field '" + selection.name.value + "' on " + (utilities.isReference(objectOrReference)
                            ? objectOrReference.__ref + " object"
                            : "object " + JSON.stringify(objectOrReference, null, 2))) : new tsInvariant.InvariantError(7), context));
                    }
                }
                else if (Array.isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }));
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: utilities.isReference(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }));
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_a = {}, _a[resultName] = fieldValue, _a));
                }
                tsInvariant.invariant(context.path.pop() === resultName);
            }
            else {
                var fragment = utilities.getFragmentFromSelection(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var merged = utilities.mergeDeepArray(objectsToMerge);
        finalResult.result = context.canonizeResults
            ? this.canon.admit(merged)
            : utilities.maybeDeepFreeze(merged);
        this.knownResults.set(finalResult.result, selectionSet);
        return finalResult;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        function handleMissing(childResult, i) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            tsInvariant.invariant(context.path.pop() === i);
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            context.path.push(i);
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: utilities.isReference(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            tsInvariant.invariant(context.path.pop() === i);
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if (utilities.isNonNullObject(value)) {
                __DEV__ ? tsInvariant.invariant(!utilities.isReference(value), "Missing selection set for object of type " + getTypenameFromStoreObject(store, value) + " returned for query field " + field.name.value) : tsInvariant.invariant(!utilities.isReference(value), 8);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}

var StoreWriter = (function () {
    function StoreWriter(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = utilities.getOperationDefinition(query);
        var merger = makeProcessedFieldsMerger();
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(operationDefinition)), variables);
        var context = {
            store: store,
            written: Object.create(null),
            merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables: variables,
            varString: canonicalStringify(variables),
            fragmentMap: utilities.createFragmentMap(utilities.getFragmentDefinitions(query)),
            overwrite: !!overwrite,
            incomingById: new Map,
            clientOnly: false,
        };
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!utilities.isReference(ref)) {
            throw __DEV__ ? new tsInvariant.InvariantError("Could not identify object " + JSON.stringify(result)) : new tsInvariant.InvariantError(9);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var fields = _a.fields, mergeTree = _a.mergeTree, selections = _a.selections;
            var entityRef = utilities.makeReference(dataId);
            if (mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, fields, context);
                if (utilities.isReference(applied)) {
                    return;
                }
                fields = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1.has(fieldNameFromStoreName(storeFieldName));
                };
                var fieldsWithSelectionSets_1 = new Set();
                selections.forEach(function (selection) {
                    if (utilities.isField(selection) && selection.selectionSet) {
                        fieldsWithSelectionSets_1.add(selection.name.value);
                    }
                });
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(fields).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, fields, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, fields);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var _b = policies.identify(result, selectionSet, context.fragmentMap), id = _b[0], keyObject = _b[1];
        dataId = dataId || id;
        if ("string" === typeof dataId) {
            var sets = context.written[dataId] || (context.written[dataId] = []);
            var ref = utilities.makeReference(dataId);
            if (sets.indexOf(selectionSet) >= 0)
                return ref;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, ref, selectionSet, context)) {
                return ref;
            }
        }
        var incomingFields = Object.create(null);
        if (keyObject) {
            incomingFields = context.merge(incomingFields, keyObject);
        }
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incomingFields.__typename = typename;
        }
        var selections = new Set(selectionSet.selections);
        selections.forEach(function (selection) {
            var _a;
            if (!utilities.shouldInclude(selection, context.variables))
                return;
            if (utilities.isField(selection)) {
                var resultFieldKey = utilities.resultKeyNameFromField(selection);
                var value = result[resultFieldKey];
                var wasClientOnly = context.clientOnly;
                context.clientOnly = wasClientOnly || !!(selection.directives &&
                    selection.directives.some(function (d) { return d.name.value === "client"; }));
                if (value !== void 0) {
                    var storeFieldName = policies.getStoreFieldName({
                        typename: typename,
                        fieldName: selection.name.value,
                        field: selection,
                        variables: context.variables,
                    });
                    var childTree = getChildMergeTree(mergeTree, storeFieldName);
                    var incomingValue = _this.processFieldValue(value, selection, context, childTree);
                    var childTypename = void 0;
                    if (selection.selectionSet) {
                        childTypename = context.store.getFieldValue(incomingValue, "__typename");
                        if (!childTypename && utilities.isReference(incomingValue)) {
                            var info = context.incomingById.get(incomingValue.__ref);
                            childTypename = info && info.fields.__typename;
                        }
                    }
                    var merge = policies.getMergeFunction(typename, selection.name.value, childTypename);
                    if (merge) {
                        childTree.info = {
                            field: selection,
                            typename: typename,
                            merge: merge,
                        };
                    }
                    else {
                        maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                    }
                    incomingFields = context.merge(incomingFields, (_a = {},
                        _a[storeFieldName] = incomingValue,
                        _a));
                }
                else if (!context.clientOnly &&
                    !utilities.addTypenameToDocument.added(selection)) {
                    __DEV__ && tsInvariant.invariant.error(("Missing field '" + utilities.resultKeyNameFromField(selection) + "' while writing result " + JSON.stringify(result, null, 2)).substring(0, 1000));
                }
                context.clientOnly = wasClientOnly;
            }
            else {
                var fragment = utilities.getFragmentFromSelection(selection, context.fragmentMap);
                if (fragment &&
                    policies.fragmentMatches(fragment, typename, result, context.variables)) {
                    fragment.selectionSet.selections.forEach(selections.add, selections);
                }
            }
        });
        if ("string" === typeof dataId) {
            var previous = context.incomingById.get(dataId);
            if (previous) {
                previous.fields = context.merge(previous.fields, incomingFields);
                previous.mergeTree = mergeMergeTrees(previous.mergeTree, mergeTree);
                previous.selections.forEach(selections.add, selections);
                previous.selections = selections;
            }
            else {
                context.incomingById.set(dataId, {
                    fields: incomingFields,
                    mergeTree: mergeTree,
                    selections: selections,
                });
            }
            return utilities.makeReference(dataId);
        }
        return incomingFields;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? utilities.cloneDeep(value) : value;
        }
        if (Array.isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !utilities.isReference(incoming)) {
            var e_1 = (!Array.isArray(incoming) &&
                (utilities.isReference(existing) || storeValueIsStoreObject(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [utilities.isReference(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return Array.isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    tsInvariant.invariant(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (Array.isArray(i_1) ? i_1.slice(0) : tslib.__assign({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? tslib.__assign(tslib.__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if (utilities.isReference(existing))
        return;
    if (equality.equal(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var typeDotName = parentType + "." + fieldName;
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!Array.isArray(existing) &&
        !Array.isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && tsInvariant.invariant.warn("Cache data may be lost when replacing the " + fieldName + " field of a " + parentType + " object.\n\nTo address this problem (which is not a bug in Apollo Client), " + (childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "") + "define a custom merge function for the " + typeDotName + " field, so InMemoryCache can safely merge these objects:\n\n  existing: " + JSON.stringify(existing).slice(0, 1000) + "\n  incoming: " + JSON.stringify(incoming).slice(0, 1000) + "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n");
}

var cacheSlot = new context.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: optimism.dep(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}

utilities.getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? utilities.argumentsObjectFromField(spec.field, spec.variables) : null;
}
var defaultDataIdFromObject = function (_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        if (id === void 0)
            id = _id;
        if (id !== void 0) {
            return __typename + ":" + ((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
};
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = tslib.__assign({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, selectionSet, fragmentMap) {
        var typename = selectionSet && fragmentMap
            ? utilities.getTypenameFromResult(object, selectionSet, fragmentMap)
            : object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var context = {
            typename: typename,
            selectionSet: selectionSet,
            fragmentMap: fragmentMap,
        };
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (Array.isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = tslib.__rest(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? tsInvariant.invariant(!old || old === which, "Cannot change root " + which + " __typename more than once") : tsInvariant.invariant(!old || old === which, 3);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = tslib.__rest(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && tsInvariant.invariant.warn("Inferring subtype " + typename + " of supertype " + supertype);
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (Array.isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? utilities.storeKeyNameFromField(fieldSpec.field, fieldSpec.variables)
                : utilities.getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === fieldNameFromStoreName(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(utilities.isReference(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: utilities.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function (fieldNameOrOptions, from) {
            var options;
            if (typeof fieldNameOrOptions === "string") {
                options = {
                    fieldName: fieldNameOrOptions,
                    from: arguments.length > 1 ? from : objectOrReference,
                };
            }
            else if (utilities.isNonNullObject(fieldNameOrOptions)) {
                options = tslib.__assign({}, fieldNameOrOptions);
                if (!hasOwn.call(fieldNameOrOptions, "from")) {
                    options.from = objectOrReference;
                }
            }
            else {
                __DEV__ && tsInvariant.invariant.warn("Unexpected readField arguments: " + utilities.stringifyForDisplay(Array.from(arguments)));
                return;
            }
            if (__DEV__ && options.from === void 0) {
                __DEV__ && tsInvariant.invariant.warn("Undefined 'from' passed to readField with arguments " + utilities.stringifyForDisplay(Array.from(arguments)));
            }
            if (void 0 === options.variables) {
                options.variables = variables;
            }
            return policies.readField(options, context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (Array.isArray(existing) || Array.isArray(incoming)) {
            throw __DEV__ ? new tsInvariant.InvariantError("Cannot automatically merge arrays") : new tsInvariant.InvariantError(4);
        }
        if (utilities.isNonNullObject(existing) &&
            utilities.isNonNullObject(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if (utilities.isReference(existing) &&
                storeValueIsStoreObject(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if (storeValueIsStoreObject(existing) &&
                utilities.isReference(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if (storeValueIsStoreObject(existing) &&
                storeValueIsStoreObject(incoming)) {
                return tslib.__assign(tslib.__assign({}, existing), incoming);
            }
        }
        return incoming;
    };
}
function keyArgsFnFromSpecifier(specifier) {
    return function (args, context) {
        return args ? context.fieldName + ":" + JSON.stringify(computeKeyObject(args, specifier, false)) : context.fieldName;
    };
}
function keyFieldsFnFromSpecifier(specifier) {
    var trie$1 = new trie.Trie(utilities.canUseWeakMap);
    return function (object, context) {
        var aliasMap;
        if (context.selectionSet && context.fragmentMap) {
            var info = trie$1.lookupArray([
                context.selectionSet,
                context.fragmentMap,
            ]);
            aliasMap = info.aliasMap || (info.aliasMap = makeAliasMap(context.selectionSet, context.fragmentMap));
        }
        var keyObject = context.keyObject =
            computeKeyObject(object, specifier, true, aliasMap);
        return context.typename + ":" + JSON.stringify(keyObject);
    };
}
function makeAliasMap(selectionSet, fragmentMap) {
    var map = Object.create(null);
    var workQueue = new Set([selectionSet]);
    workQueue.forEach(function (selectionSet) {
        selectionSet.selections.forEach(function (selection) {
            if (utilities.isField(selection)) {
                if (selection.alias) {
                    var responseKey = selection.alias.value;
                    var storeKey = selection.name.value;
                    if (storeKey !== responseKey) {
                        var aliases = map.aliases || (map.aliases = Object.create(null));
                        aliases[storeKey] = responseKey;
                    }
                }
                if (selection.selectionSet) {
                    var subsets = map.subsets || (map.subsets = Object.create(null));
                    subsets[selection.name.value] =
                        makeAliasMap(selection.selectionSet, fragmentMap);
                }
            }
            else {
                var fragment = utilities.getFragmentFromSelection(selection, fragmentMap);
                if (fragment) {
                    workQueue.add(fragment.selectionSet);
                }
            }
        });
    });
    return map;
}
function computeKeyObject(response, specifier, strict, aliasMap) {
    var keyObj = Object.create(null);
    var prevKey;
    specifier.forEach(function (s) {
        if (Array.isArray(s)) {
            if (typeof prevKey === "string") {
                var subsets = aliasMap && aliasMap.subsets;
                var subset = subsets && subsets[prevKey];
                keyObj[prevKey] = computeKeyObject(response[prevKey], s, strict, subset);
            }
        }
        else {
            var aliases = aliasMap && aliasMap.aliases;
            var responseName = aliases && aliases[s] || s;
            if (hasOwn.call(response, responseName)) {
                keyObj[prevKey = s] = response[responseName];
            }
            else {
                __DEV__ ? tsInvariant.invariant(!strict, "Missing field '" + responseName + "' while computing key fields") : tsInvariant.invariant(!strict, 5);
                prevKey = void 0;
            }
        }
    });
    return keyObj;
}

var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    typePolicies: {},
};
var InMemoryCache = (function (_super) {
    tslib.__extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = makeVar;
        _this.txCount = 0;
        _this.config = tslib.__assign(tslib.__assign({}, defaultConfig), config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new exports.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
        }));
        this.maybeBroadcastWatch = optimism.wrap(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (supportsResultCaching(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic: optimistic, rootId: rootId, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            recallCache(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                forgetCache(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        return utilities.isReference(object) ? object.__ref :
            this.policies.identify(object)[0];
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (hasOwn.call(options, "id")) {
                return false;
            }
            options = tslib.__assign(tslib.__assign({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function () {
        this.init();
        this.broadcastWatches();
        canonicalStringify.reset();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = utilities.addTypenameToDocument(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff({
            query: c.query,
            variables: c.variables,
            optimistic: c.optimistic,
        });
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !equality.equal(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(ApolloCache));

__DEV__ ? tsInvariant.invariant("boolean" === typeof utilities.DEV, utilities.DEV) : tsInvariant.invariant("boolean" === typeof utilities.DEV, 1);

exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.ApolloCache = ApolloCache;
exports.InMemoryCache = InMemoryCache;
exports.MissingFieldError = MissingFieldError;
exports.Policies = Policies;
exports.cacheSlot = cacheSlot;
exports.canonicalStringify = canonicalStringify;
exports.defaultDataIdFromObject = defaultDataIdFromObject;
exports.fieldNameFromStoreName = fieldNameFromStoreName;
exports.makeVar = makeVar;
//# sourceMappingURL=cache.cjs.js.map


/***/ }),

/***/ "pHV1":
/***/ (function(module, exports) {



/***/ }),

/***/ "pO7z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var isBrowser = "undefined" != typeof document;

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  return classNames.split(" ").forEach((function(className) {
    void 0 !== registered[className] ? registeredStyles.push(registered[className] + ";") : rawClassName += className + " ";
  })), rawClassName;
}

var insertStyles = function(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((!1 === isStringTag || !1 === isBrowser && void 0 !== cache.compat) && void 0 === cache.registered[className] && (cache.registered[className] = serialized.styles), 
  void 0 === cache.inserted[serialized.name]) {
    var stylesForSSR = "", current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, !0);
      isBrowser || void 0 === maybeStyles || (stylesForSSR += maybeStyles), current = current.next;
    } while (void 0 !== current);
    if (!isBrowser && 0 !== stylesForSSR.length) return stylesForSSR;
  }
};

exports.getRegisteredStyles = getRegisteredStyles, exports.insertStyles = insertStyles;


/***/ }),

/***/ "q/ih":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("cCGa");
} else {}


/***/ }),

/***/ "q1IT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("z847"), exports);


/***/ }),

/***/ "qtLQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.style = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.borderRadius = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.borderColor = exports.borderStyle = exports.borderWidth = exports.gridArea = exports.gridTemplateAreas = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flexBasis = exports.flexShrink = exports.flexGrow = exports.flex = exports.flexDirection = exports.flexWrap = exports.justifyContent = exports.justifyItems = exports.alignContent = exports.alignItems = exports.letterSpacing = exports.fontStyle = exports.textAlign = exports.lineHeight = exports.fontWeight = exports.fontFamily = exports.fontSize = exports.opacity = exports.overflowY = exports.overflowX = exports.overflow = exports.display = exports.verticalAlign = exports.size = exports.maxHeight = exports.maxWidth = exports.minHeight = exports.minWidth = exports.height = exports.width = exports.colorStyle = exports.textStyle = exports.buttonStyle = exports.variant = exports.borders = exports.textShadow = exports.boxShadow = exports.shadow = exports.space = exports.padding = exports.margin = exports.system = exports.compose = exports.get = void 0;

var _core = __webpack_require__("Ew0i");

exports.createStyleFunction = _core.createStyleFunction;
exports.createParser = _core.createParser;
exports.get = _core.get;
exports.compose = _core.compose;
exports.system = _core.system;

var _layout = _interopRequireWildcard(__webpack_require__("7fkC"));

exports.layout = _layout.layout;

var _color = _interopRequireWildcard(__webpack_require__("WSE+"));

exports.color = _color.color;

var _typography = _interopRequireWildcard(__webpack_require__("D/5K"));

exports.typography = _typography.typography;

var _flexbox = _interopRequireWildcard(__webpack_require__("jT00"));

exports.flexbox = _flexbox.flexbox;

var _grid = _interopRequireWildcard(__webpack_require__("VC51"));

exports.grid = _grid.grid;

var _border = _interopRequireWildcard(__webpack_require__("R7v/"));

exports.border = _border.border;
exports.borders = _border["default"];

var _background = _interopRequireWildcard(__webpack_require__("tL+g"));

exports.background = _background.background;

var _position = _interopRequireWildcard(__webpack_require__("w3FD"));

exports.position = _position.position;

var _space = __webpack_require__("zbUr");

exports.margin = _space.margin;
exports.padding = _space.padding;
exports.space = _space.space;

var _shadow = _interopRequireWildcard(__webpack_require__("R/fH"));

exports.shadow = _shadow.shadow;
exports.boxShadow = _shadow["default"];
exports.textShadow = _shadow["default"];

var _variant = __webpack_require__("VTIN");

exports.variant = _variant.variant;
exports.buttonStyle = _variant.buttonStyle;
exports.textStyle = _variant.textStyle;
exports.colorStyle = _variant.colorStyle;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// v4 api shims
var width = _layout["default"].width,
    height = _layout["default"].height,
    minWidth = _layout["default"].minWidth,
    minHeight = _layout["default"].minHeight,
    maxWidth = _layout["default"].maxWidth,
    maxHeight = _layout["default"].maxHeight,
    size = _layout["default"].size,
    verticalAlign = _layout["default"].verticalAlign,
    display = _layout["default"].display,
    overflow = _layout["default"].overflow,
    overflowX = _layout["default"].overflowX,
    overflowY = _layout["default"].overflowY;
exports.overflowY = overflowY;
exports.overflowX = overflowX;
exports.overflow = overflow;
exports.display = display;
exports.verticalAlign = verticalAlign;
exports.size = size;
exports.maxHeight = maxHeight;
exports.maxWidth = maxWidth;
exports.minHeight = minHeight;
exports.minWidth = minWidth;
exports.height = height;
exports.width = width;
var opacity = _color["default"].opacity;
exports.opacity = opacity;
var fontSize = _typography["default"].fontSize,
    fontFamily = _typography["default"].fontFamily,
    fontWeight = _typography["default"].fontWeight,
    lineHeight = _typography["default"].lineHeight,
    textAlign = _typography["default"].textAlign,
    fontStyle = _typography["default"].fontStyle,
    letterSpacing = _typography["default"].letterSpacing;
exports.letterSpacing = letterSpacing;
exports.fontStyle = fontStyle;
exports.textAlign = textAlign;
exports.lineHeight = lineHeight;
exports.fontWeight = fontWeight;
exports.fontFamily = fontFamily;
exports.fontSize = fontSize;
var alignItems = _flexbox["default"].alignItems,
    alignContent = _flexbox["default"].alignContent,
    justifyItems = _flexbox["default"].justifyItems,
    justifyContent = _flexbox["default"].justifyContent,
    flexWrap = _flexbox["default"].flexWrap,
    flexDirection = _flexbox["default"].flexDirection,
    flex = _flexbox["default"].flex,
    flexGrow = _flexbox["default"].flexGrow,
    flexShrink = _flexbox["default"].flexShrink,
    flexBasis = _flexbox["default"].flexBasis,
    justifySelf = _flexbox["default"].justifySelf,
    alignSelf = _flexbox["default"].alignSelf,
    order = _flexbox["default"].order;
exports.order = order;
exports.alignSelf = alignSelf;
exports.justifySelf = justifySelf;
exports.flexBasis = flexBasis;
exports.flexShrink = flexShrink;
exports.flexGrow = flexGrow;
exports.flex = flex;
exports.flexDirection = flexDirection;
exports.flexWrap = flexWrap;
exports.justifyContent = justifyContent;
exports.justifyItems = justifyItems;
exports.alignContent = alignContent;
exports.alignItems = alignItems;
var gridGap = _grid["default"].gridGap,
    gridColumnGap = _grid["default"].gridColumnGap,
    gridRowGap = _grid["default"].gridRowGap,
    gridColumn = _grid["default"].gridColumn,
    gridRow = _grid["default"].gridRow,
    gridAutoFlow = _grid["default"].gridAutoFlow,
    gridAutoColumns = _grid["default"].gridAutoColumns,
    gridAutoRows = _grid["default"].gridAutoRows,
    gridTemplateColumns = _grid["default"].gridTemplateColumns,
    gridTemplateRows = _grid["default"].gridTemplateRows,
    gridTemplateAreas = _grid["default"].gridTemplateAreas,
    gridArea = _grid["default"].gridArea;
exports.gridArea = gridArea;
exports.gridTemplateAreas = gridTemplateAreas;
exports.gridTemplateRows = gridTemplateRows;
exports.gridTemplateColumns = gridTemplateColumns;
exports.gridAutoRows = gridAutoRows;
exports.gridAutoColumns = gridAutoColumns;
exports.gridAutoFlow = gridAutoFlow;
exports.gridRow = gridRow;
exports.gridColumn = gridColumn;
exports.gridRowGap = gridRowGap;
exports.gridColumnGap = gridColumnGap;
exports.gridGap = gridGap;
var borderWidth = _border["default"].borderWidth,
    borderStyle = _border["default"].borderStyle,
    borderColor = _border["default"].borderColor,
    borderTop = _border["default"].borderTop,
    borderRight = _border["default"].borderRight,
    borderBottom = _border["default"].borderBottom,
    borderLeft = _border["default"].borderLeft,
    borderRadius = _border["default"].borderRadius;
exports.borderRadius = borderRadius;
exports.borderLeft = borderLeft;
exports.borderBottom = borderBottom;
exports.borderRight = borderRight;
exports.borderTop = borderTop;
exports.borderColor = borderColor;
exports.borderStyle = borderStyle;
exports.borderWidth = borderWidth;
var backgroundImage = _background["default"].backgroundImage,
    backgroundSize = _background["default"].backgroundSize,
    backgroundPosition = _background["default"].backgroundPosition,
    backgroundRepeat = _background["default"].backgroundRepeat;
exports.backgroundRepeat = backgroundRepeat;
exports.backgroundPosition = backgroundPosition;
exports.backgroundSize = backgroundSize;
exports.backgroundImage = backgroundImage;
var zIndex = _position["default"].zIndex,
    top = _position["default"].top,
    right = _position["default"].right,
    bottom = _position["default"].bottom,
    left = _position["default"].left;
exports.left = left;
exports.bottom = bottom;
exports.right = right;
exports.top = top;
exports.zIndex = zIndex;

// v4 style API shim
var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = (0, _core.createStyleFunction)({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = (0, _core.createParser)(config);
  return parse;
};

exports.style = style;

/***/ }),

/***/ "qyQU":
/***/ (function(module, exports) {



/***/ }),

/***/ "r9xZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6o9n");
/* harmony import */ var _atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__, "Box")) __webpack_require__.d(__webpack_exports__, "Box", function() { return _atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__["Box"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__, "Column")) __webpack_require__.d(__webpack_exports__, "Column", function() { return _atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__["Column"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__, "Layout")) __webpack_require__.d(__webpack_exports__, "Layout", function() { return _atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__["Layout"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__, "Row")) __webpack_require__.d(__webpack_exports__, "Row", function() { return _atls_ui_parts_layout__WEBPACK_IMPORTED_MODULE_0__["Row"]; });



/***/ }),

/***/ "rHeM":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ "rfGx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("wOCl");
} else {}


/***/ }),

/***/ "sGil":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return languageVar; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bdv+");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const languageVar = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["makeVar"])('RU');

/***/ }),

/***/ "tL+g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.background = void 0;

var _core = __webpack_require__("Ew0i");

var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = (0, _core.system)(config);
exports.background = background;
var _default = background;
exports["default"] = _default;

/***/ }),

/***/ "twQw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pHV1");
/* harmony import */ var _item_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_item_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_item_interface__WEBPACK_IMPORTED_MODULE_0__, "Item")) __webpack_require__.d(__webpack_exports__, "Item", function() { return _item_interface__WEBPACK_IMPORTED_MODULE_0__["Item"]; });

/* harmony import */ var _item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8dIq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _item_component__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),

/***/ "w3FD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.position = void 0;

var _core = __webpack_require__("Ew0i");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space
  }
};
var position = (0, _core.system)(config);
exports.position = position;
var _default = position;
exports["default"] = _default;

/***/ }),

/***/ "w4yC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var hoistNonReactStatics$1 = __webpack_require__("hi7r");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var hoistNonReactStatics__default = _interopDefault(hoistNonReactStatics$1), hoistNonReactStatics = function(targetComponent, sourceComponent) {
  return hoistNonReactStatics__default.default(targetComponent, sourceComponent);
};

exports.default = hoistNonReactStatics;


/***/ }),

/***/ "wOCl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: !0
});

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

exports.default = unitlessKeys;


/***/ }),

/***/ "yA1/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("cDcd"), createCache = __webpack_require__("RBVa"), _extends = __webpack_require__("ylYk"), weakMemoize = __webpack_require__("L+/6"), isolatedHoistNonReactStaticsDoNotUseThisInYourCode_dist_emotionReactIsolatedHoistNonReactStaticsDoNotUseThisInYourCode = __webpack_require__("w4yC"), utils = __webpack_require__("6Z3W"), serialize = __webpack_require__("0IRf");

function _interopDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

var createCache__default = _interopDefault(createCache), _extends__default = _interopDefault(_extends), weakMemoize__default = _interopDefault(weakMemoize), isBrowser = "undefined" != typeof document, hasOwnProperty = Object.prototype.hasOwnProperty, EmotionCacheContext = React.createContext("undefined" != typeof HTMLElement ? createCache__default.default({
  key: "css"
}) : null), CacheProvider = EmotionCacheContext.Provider;

exports.withEmotionCache = function(func) {
  return React.forwardRef((function(props, ref) {
    var cache = React.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  }));
}, isBrowser || (exports.withEmotionCache = function(func) {
  return function(props) {
    var cache = React.useContext(EmotionCacheContext);
    return null === cache ? (cache = createCache__default.default({
      key: "css"
    }), React.createElement(EmotionCacheContext.Provider, {
      value: cache
    }, func(props, cache))) : func(props, cache);
  };
});

var ThemeContext = React.createContext({}), useTheme = function() {
  return React.useContext(ThemeContext);
}, getTheme = function(outerTheme, theme) {
  if ("function" == typeof theme) {
    var mergedTheme = theme(outerTheme);
    return mergedTheme;
  }
  return _extends__default.default({}, outerTheme, theme);
}, createCacheWithTheme = weakMemoize__default.default((function(outerTheme) {
  return weakMemoize__default.default((function(theme) {
    return getTheme(outerTheme, theme);
  }));
})), ThemeProvider = function(props) {
  var theme = React.useContext(ThemeContext);
  return props.theme !== theme && (theme = createCacheWithTheme(theme)(props.theme)), 
  React.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};

function withTheme(Component) {
  var componentName = Component.displayName || Component.name || "Component", render = function(props, ref) {
    var theme = React.useContext(ThemeContext);
    return React.createElement(Component, _extends__default.default({
      theme: theme,
      ref: ref
    }, props));
  }, WithTheme = React.forwardRef(render);
  return WithTheme.displayName = "WithTheme(" + componentName + ")", isolatedHoistNonReactStaticsDoNotUseThisInYourCode_dist_emotionReactIsolatedHoistNonReactStaticsDoNotUseThisInYourCode.default(WithTheme, Component);
}

var sanitizeIdentifier = function(identifier) {
  return identifier.replace(/\$/g, "-");
}, typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", createEmotionProps = function(type, props) {
  var newProps = {};
  for (var key in props) hasOwnProperty.call(props, key) && (newProps[key] = props[key]);
  return newProps[typePropName] = type, newProps;
}, Emotion = exports.withEmotionCache((function(props, cache, ref) {
  var cssProp = props.css;
  "string" == typeof cssProp && void 0 !== cache.registered[cssProp] && (cssProp = cache.registered[cssProp]);
  var type = props[typePropName], registeredStyles = [ cssProp ], className = "";
  "string" == typeof props.className ? className = utils.getRegisteredStyles(cache.registered, registeredStyles, props.className) : null != props.className && (className = props.className + " ");
  var serialized = serialize.serializeStyles(registeredStyles, void 0, "function" == typeof cssProp || Array.isArray(cssProp) ? React.useContext(ThemeContext) : void 0), rules = utils.insertStyles(cache, serialized, "string" == typeof type);
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) hasOwnProperty.call(props, key) && "css" !== key && key !== typePropName && (newProps[key] = props[key]);
  newProps.ref = ref, newProps.className = className;
  var ele = React.createElement(type, newProps);
  if (!isBrowser && void 0 !== rules) {
    for (var _ref, serializedNames = serialized.name, next = serialized.next; void 0 !== next; ) serializedNames += " " + next.name, 
    next = next.next;
    return React.createElement(React.Fragment, null, React.createElement("style", ((_ref = {})["data-emotion"] = cache.key + " " + serializedNames, 
    _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }
  return ele;
}));

exports.CacheProvider = CacheProvider, exports.Emotion = Emotion, exports.ThemeContext = ThemeContext, 
exports.ThemeProvider = ThemeProvider, exports.createEmotionProps = createEmotionProps, 
exports.hasOwnProperty = hasOwnProperty, exports.isBrowser = isBrowser, exports.useTheme = useTheme, 
exports.withTheme = withTheme;


/***/ }),

/***/ "ylYk":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "z847":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const styled_1 = __importDefault(__webpack_require__("jRWd"));
const layout_1 = __webpack_require__("JOlZ");
const Row = styled_1.default(layout_1.Layout)();
exports.Row = Row;
Row.defaultProps = {
    boxSizing: 'border-box',
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
};


/***/ }),

/***/ "zbUr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.space = exports.padding = exports.margin = void 0;

var _core = __webpack_require__("Ew0i");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber(n)) {
    return (0, _core.get)(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = (0, _core.get)(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = (0, _core.system)(configs.margin);
exports.margin = margin;
var padding = (0, _core.system)(configs.padding);
exports.padding = padding;
var space = (0, _core.compose)(margin, padding);
exports.space = space;
var _default = space;
exports["default"] = _default;

/***/ })

/******/ });