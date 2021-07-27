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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../index/src/index.component.tsx":
/*!**************************************************************************************************!*\
  !*** /Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/index.component.tsx ***!
  \**************************************************************************************************/
/*! exports provided: Index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Index\", function() { return Index; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries */ \"../../index/src/queries.ts\");\n\n\nvar _jsxFileName = \"/Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/index.component.tsx\";\n\n\n\n\nconst Index = () => {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_queries__WEBPACK_IMPORTED_MODULE_3__[\"MY_QUERY\"]);\n\n  const Data = ({\n    data\n  }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: Object.keys(data).map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: JSON.stringify(data[item])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 19\n    }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"error\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }, undefined), data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Data, {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 16\n    }, undefined)]\n  }, void 0, true);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2Rhcml1cy93b3Jrc3BhY2UvYXRsYW50aXMvZHJlYW0tdGVhbS9mcm9udGVuZC9sYW5kaW5nL2luZGV4L3NyYy9pbmRleC5jb21wb25lbnQudHN4P2U2MzciXSwibmFtZXMiOlsiSW5kZXgiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJNWV9RVUVSWSIsIkRhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNsQixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMkJDLCtEQUFRLENBQUNDLGlEQUFELENBQXpDOztBQUVBLFFBQU1DLElBQUksR0FBRyxDQUFDO0FBQUVIO0FBQUYsR0FBRCxrQkFDWDtBQUFBLGNBQ0dJLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxJQUFaLEVBQWtCTSxHQUFsQixDQUF1QkMsSUFBRCxpQkFDckI7QUFBQSxnQkFBS0MsSUFBSSxDQUFDQyxTQUFMLENBQWVULElBQUksQ0FBQ08sSUFBRCxDQUFuQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESCxtQkFERjs7QUFRQSxzQkFDRTtBQUFBLGVBQ0dULE9BQU8saUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGQsRUFFR0MsS0FBSyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGWixFQUdHQyxJQUFJLGlCQUFJLHFFQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUVBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIWDtBQUFBLGtCQURGO0FBT0QsQ0FsQkQiLCJmaWxlIjoiLi4vLi4vaW5kZXgvc3JjL2luZGV4LmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5pbXBvcnQgeyBNWV9RVUVSWSB9IGZyb20gJy4vcXVlcmllcydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KE1ZX1FVRVJZKVxuXG4gIGNvbnN0IERhdGEgPSAoeyBkYXRhIH0pID0+IChcbiAgICA8PlxuICAgICAge09iamVjdC5rZXlzKGRhdGEpLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8aDE+e0pTT04uc3RyaW5naWZ5KGRhdGFbaXRlbV0pfTwvaDE+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkaW5nICYmIDxoMT5Mb2FkaW5nPC9oMT59XG4gICAgICB7ZXJyb3IgJiYgPGgxPmVycm9yPC9oMT59XG4gICAgICB7ZGF0YSAmJiA8RGF0YSBkYXRhPXtkYXRhfS8+fVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCB7IEluZGV4IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../index/src/index.component.tsx\n");

/***/ }),

/***/ "../../index/src/index.ts":
/*!***************************************************************************************!*\
  !*** /Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/index.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.component */ \"../../index/src/index.component.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_index_component__WEBPACK_IMPORTED_MODULE_0__[\"Index\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2Rhcml1cy93b3Jrc3BhY2UvYXRsYW50aXMvZHJlYW0tdGVhbS9mcm9udGVuZC9sYW5kaW5nL2luZGV4L3NyYy9pbmRleC50cz9iYmIyIl0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZUEscUhBQWYiLCJmaWxlIjoiLi4vLi4vaW5kZXgvc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5kZXggfSBmcm9tICcuL2luZGV4LmNvbXBvbmVudCdcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../index/src/index.ts\n");

/***/ }),

/***/ "../../index/src/queries.ts":
/*!*****************************************************************************************!*\
  !*** /Users/darius/workspace/atlantis/dream-team/frontend/landing/index/src/queries.ts ***!
  \*****************************************************************************************/
/*! exports provided: MY_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MY_QUERY\", function() { return MY_QUERY; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MY_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  query MyQuery {\n    allSettings {\n      discussionSettingsDefaultCommentStatus\n    }\n}\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2Rhcml1cy93b3Jrc3BhY2UvYXRsYW50aXMvZHJlYW0tdGVhbS9mcm9udGVuZC9sYW5kaW5nL2luZGV4L3NyYy9xdWVyaWVzLnRzP2U2YmMiXSwibmFtZXMiOlsiTVlfUVVFUlkiLCJncWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLGtEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BIiwiZmlsZSI6Ii4uLy4uL2luZGV4L3NyYy9xdWVyaWVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5cbmNvbnN0IE1ZX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBNeVF1ZXJ5IHtcbiAgICBhbGxTZXR0aW5ncyB7XG4gICAgICBkaXNjdXNzaW9uU2V0dGluZ3NEZWZhdWx0Q29tbWVudFN0YXR1c1xuICAgIH1cbn1cbmBcblxuZXhwb3J0IHsgTVlfUVVFUlkgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../index/src/queries.ts\n");

/***/ }),

/***/ "./pages/index.ts":
/*!************************!*\
  !*** ./pages/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @landing/index */ \"../../index/src/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _landing_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50cz83MDU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnQGxhbmRpbmcvaW5kZXgnXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.ts\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });