(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; },
  "withProviders": function() { return /* binding */ withProviders; }
});

// NAMESPACE OBJECT: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/index.ts
var theme_namespaceObject = {};
__webpack_require__.r(theme_namespaceObject);
__webpack_require__.d(theme_namespaceObject, {
  "colors": function() { return colors; },
  "fontSizes": function() { return fontSizes; },
  "fontWeights": function() { return fontWeights; },
  "fonts": function() { return fonts; },
  "lineHeights": function() { return lineHeights; },
  "radii": function() { return radii; }
});

// NAMESPACE OBJECT: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/index.ts
var src_theme_namespaceObject = {};
__webpack_require__.r(src_theme_namespaceObject);
__webpack_require__.d(src_theme_namespaceObject, {
  "colors": function() { return colors_colors; },
  "fontSizes": function() { return fontSizes_fontSizes; },
  "fontWeights": function() { return fontWeights_fontWeights; },
  "fonts": function() { return fonts_fonts; },
  "lineHeights": function() { return lineHeights_lineHeights; },
  "radii": function() { return radii_radii; }
});

// EXTERNAL MODULE: ../../../../.yarn/__virtual__/next-virtual-e5d451e410/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/app.js
var app = __webpack_require__(1330);
// EXTERNAL MODULE: external "recompose/compose"
var compose_ = __webpack_require__(6859);
var compose_default = /*#__PURE__*/__webpack_require__.n(compose_);
;// CONCATENATED MODULE: external "@atls/next-app-with-apollo"
var next_app_with_apollo_namespaceObject = require("@atls/next-app-with-apollo");;
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "@emotion/react"
var react_namespaceObject = require("@emotion/react");;
// EXTERNAL MODULE: ../../../../.yarn/cache/@emotion-cache-npm-11.4.0-701cf41a62-bdef4c0ccc.zip/node_modules/@emotion/cache/dist/emotion-cache.cjs.js
var emotion_cache_cjs = __webpack_require__(9653);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/colors.ts
const colors = {
  button: {
    primary: {
      default: 'rgba(63,135,249,1)',
      hover: 'rgba(36,114,238,1)',
      active: 'rgba(24,97,214,1)',
      fontColor: 'rgba(255,255,255,1)'
    },
    secondary: {
      default: 'rgba(63,135,249,1)',
      hover: 'rgba(36,113,237,1)',
      active: 'rgba(24,97,214,1)',
      background: 'rgba(63,135,249,0.16)'
    },
    tertiary: {
      default: 'transparent',
      active: 'rgba(255,255,255,1)',
      fontColor: 'rgba(98, 112, 127, 1)',
      activeFontColor: 'rgba(63, 135, 249, 1)'
    },
    transparent: {
      default: 'rgba(15,76,139,0.08)',
      hover: 'rgba(63, 135, 249, 1)',
      active: 'rgba(24,97,214,1)',
      fontColor: 'rgba(23, 46, 71, 1)',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    clipboard: {
      default: 'rgba(255, 255, 255, 0.3)',
      hover: 'rgba(255, 255, 255, 0.5)',
      active: 'rgba(255,255,255,1)',
      fontColor: 'rgba(255,255,255,1)',
      background: 'transparent'
    }
  },
  border: {
    lightGray: 'rgba(15,76,139,0.08)',
    transparent: 'rgba(255, 255, 255, 0.3)'
  },
  text: {
    accent: 'rgba(63, 135, 249, 1)',
    black: 'rgba(23, 46, 71, 1)',
    white: 'rgba(255,255,255,1)',
    lightGray: 'rgba(154, 168, 184, 1)',
    gray: 'rgba(98, 112, 127, 1)'
  },
  background: {
    lightGray: 'rgba(246, 246, 251, 1)',
    transparentBlue: 'rgba(23, 35, 68, 0.75)',
    transparentBlack: 'rgba(0,0,0,0.5)',
    darkBlue: 'rgba(23,35,68,1)'
  },
  input: {
    background: 'rgba(255, 255, 255, 1)',
    font: 'rgba(0, 0, 0, 1)',
    border: 'rgba(15, 76, 139, 0.08)',
    hover: 'rgba(36,114,238,1)',
    focus: 'rgba(63,135,249,1)',
    press: 'rgba(24,97,214,1)',
    error: 'rgba(236,34,34,1)'
  }
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/fontSizes.ts
const fontSizes = {
  semiMedium: 13,
  medium: 14,
  semiRegular: 15,
  regular: 16,
  large: 24,
  increased: 32,
  big: 40,
  massive: 48,
  huge: 72
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/radii.ts
const radii = {
  small: 6,
  normal: 16,
  huge: 100
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/fonts.ts
const fonts = {
  primary: 'Gordita, sans-serif'
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/fontWeights.ts
const fontWeights = {
  slim: 300,
  normal: 400,
  medium: 500,
  bold: 600
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/lineHeights.ts
const lineHeights = {
  primary: 1.75
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme/index.ts






;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/global.styles.tsx




const GlobalStyles = () => /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Global, {
  styles: react_namespaceObject.css`
      html,
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
      }

      #__next {
        height: 100%;
      }
    `
});
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/theme.provider.tsx







const ThemeProvider = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.ThemeProvider, {
    theme: theme_namespaceObject,
    children: children
  })]
});
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-1d841c1e32/1/frontend/ui/theme/src/index.ts

;// CONCATENATED MODULE: ../../../providers/next-app-with-emotion/src/with-emotion.provider.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const cache = (0,emotion_cache_cjs.default)({
  key: 'emotion'
});
const withEmotion = ({
  Provider = ThemeProvider,
  injectGlobalStyles
}) => WrapperComponent => class WithEmotion extends external_react_.Component {
  constructor(props, context) {
    super(props, context);

    if (injectGlobalStyles) {
      injectGlobalStyles();
    }
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
      value: cache,
      children: /*#__PURE__*/jsx_runtime_.jsx(Provider, {
        children: /*#__PURE__*/jsx_runtime_.jsx(WrapperComponent, _objectSpread({}, this.props))
      })
    });
  }

};
;// CONCATENATED MODULE: ../../../providers/next-app-with-emotion/src/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/colors.ts
const colors_colors = {
  button: {
    primary: {
      default: 'rgba(63,135,249,1)',
      hover: 'rgba(36,114,238,1)',
      active: 'rgba(24,97,214,1)',
      fontColor: 'rgba(255,255,255,1)'
    },
    secondary: {
      default: 'rgba(63,135,249,1)',
      hover: 'rgba(36,113,237,1)',
      active: 'rgba(24,97,214,1)',
      background: 'rgba(63,135,249,0.16)'
    },
    tertiary: {
      default: 'transparent',
      active: 'rgba(255,255,255,1)',
      fontColor: 'rgba(98, 112, 127, 1)',
      activeFontColor: 'rgba(63, 135, 249, 1)'
    },
    transparent: {
      default: 'rgba(15,76,139,0.08)',
      hover: 'rgba(63, 135, 249, 1)',
      active: 'rgba(24,97,214,1)',
      fontColor: 'rgba(23, 46, 71, 1)',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    clipboard: {
      default: 'rgba(255, 255, 255, 0.3)',
      hover: 'rgba(255, 255, 255, 0.5)',
      active: 'rgba(255,255,255,1)',
      fontColor: 'rgba(255,255,255,1)',
      background: 'transparent'
    }
  },
  border: {
    lightGray: 'rgba(15,76,139,0.08)',
    transparent: 'rgba(255, 255, 255, 0.3)'
  },
  text: {
    accent: 'rgba(63, 135, 249, 1)',
    black: 'rgba(23, 46, 71, 1)',
    white: 'rgba(255,255,255,1)',
    lightGray: 'rgba(154, 168, 184, 1)',
    gray: 'rgba(98, 112, 127, 1)'
  },
  background: {
    lightGray: 'rgba(246, 246, 251, 1)',
    transparentBlue: 'rgba(23, 35, 68, 0.75)',
    transparentBlack: 'rgba(0,0,0,0.5)',
    darkBlue: 'rgba(23,35,68,1)'
  },
  input: {
    background: 'rgba(255, 255, 255, 1)',
    font: 'rgba(0, 0, 0, 1)',
    border: 'rgba(15, 76, 139, 0.08)',
    hover: 'rgba(36,114,238,1)',
    focus: 'rgba(63,135,249,1)',
    press: 'rgba(24,97,214,1)',
    error: 'rgba(236,34,34,1)'
  }
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/fontSizes.ts
const fontSizes_fontSizes = {
  semiMedium: 13,
  medium: 14,
  semiRegular: 15,
  regular: 16,
  large: 24,
  increased: 32,
  big: 40,
  massive: 48,
  huge: 72
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/radii.ts
const radii_radii = {
  small: 6,
  normal: 16,
  huge: 100
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/fonts.ts
const fonts_fonts = {
  primary: 'Gordita, sans-serif'
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/fontWeights.ts
const fontWeights_fontWeights = {
  slim: 300,
  normal: 400,
  medium: 500,
  bold: 600
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/lineHeights.ts
const lineHeights_lineHeights = {
  primary: 1.75
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme/index.ts






;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/global.styles.tsx




const global_styles_GlobalStyles = () => /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Global, {
  styles: react_namespaceObject.css`
      html,
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
      }

      #__next {
        height: 100%;
      }
    `
});
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/theme.provider.tsx







const theme_provider_ThemeProvider = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(global_styles_GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.ThemeProvider, {
    theme: src_theme_namespaceObject,
    children: children
  })]
});
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-aa12ced8cb/1/frontend/ui/theme/src/index.ts

;// CONCATENATED MODULE: ./pages/_app.tsx





const withProviders = compose_default()((0,next_app_with_apollo_namespaceObject.withApollo)({
  /** Local * */
  uri: 'http://localhost:8080/index.php?graphql',

  /** Prod * */
  // uri: 'https://dream-team.tech/graphql',
  onUnauthenticated: () => {
    // eslint-disable-next-line
    console.log('Unauthenticated');
  }
}), withEmotion({
  Provider: theme_provider_ThemeProvider
}));
/* harmony default export */ var _app = (withProviders(app.default));

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 6859:
/***/ (function(module) {

"use strict";
module.exports = require("recompose/compose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [185,330], function() { return __webpack_exec__(2846); });
module.exports = __webpack_exports__;

})();