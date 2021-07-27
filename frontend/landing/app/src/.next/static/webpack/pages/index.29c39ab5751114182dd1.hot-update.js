webpackHotUpdate_N_E("pages/index",{

/***/ "../../index/src/index.component.tsx":
/*!**************************************************************************************************!*\
  !*** /Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/index.component.tsx ***!
  \**************************************************************************************************/
/*! exports provided: Index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Index\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../../../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../../../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"../../../../.yarn/__virtual__/@apollo-client-virtual-af3996ff22/0/cache/@apollo-client-npm-3.3.21-b0c859aa0b-cdb501045c.zip/node_modules/@apollo/client/main.cjs.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries */ \"../../index/src/queries.ts\");\n\n\n\nvar _jsxFileName = \"/Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/index.component.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_queries__WEBPACK_IMPORTED_MODULE_3__[\"MY_QUERY\"]),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  var Data = function Data(_ref) {\n    var data = _ref.data;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: Object.keys(data).map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: data[item]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 19\n    }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"error\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }, _this), data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Data, {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 16\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Index, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Index;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../.yarn/__virtual__/webpack-virtual-70427926b7/0/cache/webpack-npm-4.44.1-977bccfd33-486b66f03b.zip/node_modules/webpack/buildin/harmony-module.js */ \"../../../../.yarn/__virtual__/webpack-virtual-70427926b7/0/cache/webpack-npm-4.44.1-977bccfd33-486b66f03b.zip/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy9Vc2Vycy9kYXJpdXMvd29ya3NwYWNlL2F0bGFudGlzL2RyZWFtLXRlYW0vZnJvbnRlbmQvbGFuZGluZy9pbmRleC9zcmMvaW5kZXguY29tcG9uZW50LnRzeD9lNjM3Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlUXVlcnkiLCJNWV9RVUVSWSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJEYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNlQywrREFBUSxDQUFDQyxpREFBRCxDQUR2QjtBQUFBLE1BQ1ZDLE9BRFUsYUFDVkEsT0FEVTtBQUFBLE1BQ0RDLEtBREMsYUFDREEsS0FEQztBQUFBLE1BQ01DLElBRE4sYUFDTUEsSUFETjs7QUFHbEIsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxRQUFHRCxJQUFILFFBQUdBLElBQUg7QUFBQSx3QkFDWDtBQUFBLGdCQUNHRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsSUFBWixFQUFrQkksR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLDRCQUNyQjtBQUFBLG9CQUFLTCxJQUFJLENBQUNLLElBQUQ7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXRCO0FBREgscUJBRFc7QUFBQSxHQUFiOztBQVFBLHNCQUNFO0FBQUEsZUFDR1AsT0FBTyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURkLEVBRUdDLEtBQUssaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGWixFQUdHQyxJQUFJLGlCQUFJLHFFQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUVBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhYO0FBQUEsa0JBREY7QUFPRCxDQWxCRDs7R0FBTUwsSztVQUM2QkMsdUQ7OztLQUQ3QkQsSztBQW9CTiIsImZpbGUiOiIuLi8uLi9pbmRleC9zcmMvaW5kZXguY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5cbmltcG9ydCB7IE1ZX1FVRVJZIH0gZnJvbSAnLi9xdWVyaWVzJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTVlfUVVFUlkpXG5cbiAgY29uc3QgRGF0YSA9ICh7IGRhdGEgfSkgPT4gKFxuICAgIDw+XG4gICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxoMT57ZGF0YVtpdGVtXX08L2gxPlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyAmJiA8aDE+TG9hZGluZzwvaDE+fVxuICAgICAge2Vycm9yICYmIDxoMT5lcnJvcjwvaDE+fVxuICAgICAge2RhdGEgJiYgPERhdGEgZGF0YT17ZGF0YX0vPn1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgeyBJbmRleCB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../index/src/index.component.tsx\n");

/***/ })

})