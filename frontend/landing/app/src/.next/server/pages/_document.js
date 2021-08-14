(function() {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7271:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _document; }
});

// EXTERNAL MODULE: ../../../../.yarn/__virtual__/next-virtual-e5d451e410/0/cache/next-npm-10.2.3-e1de0387ed-715c83439f.zip/node_modules/next/document.js
var next_document = __webpack_require__(109);
// EXTERNAL MODULE: external "recompose/compose"
var compose_ = __webpack_require__(6859);
var compose_default = /*#__PURE__*/__webpack_require__.n(compose_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@emotion-server-virtual-8b1c955424/0/cache/@emotion-server-npm-11.4.0-14759e567e-41ed2472c3.zip/node_modules/@emotion/server/dist/emotion-server.cjs.js
var emotion_server_cjs = __webpack_require__(6963);
;// CONCATENATED MODULE: ../../../providers/next-document-with-emotion/src/with-emotion.provider.tsx




const withEmotion = () => TargetComponent => class WithEmotion extends TargetComponent {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const {
      css,
      ids
    } = (0,emotion_server_cjs.extractCritical)(props.html);
    props.styles.push( /*#__PURE__*/jsx_runtime_.jsx("style", {
      "data-emotion-css": ids.join(' '),
      dangerouslySetInnerHTML: {
        __html: css
      }
    }, 'emotion'));
    return props;
  }

  static renderDocument(...args) {
    // @ts-ignore
    return next_document.default.renderDocument(...args);
  }

};
;// CONCATENATED MODULE: ../../../providers/next-document-with-emotion/src/index.ts

;// CONCATENATED MODULE: ./pages/_document.tsx



const withProviders = compose_default()(withEmotion());
/* harmony default export */ var _document = (withProviders(next_document.default));

/***/ }),

/***/ 4293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 8614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 227:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ 3932:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ 816:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 6171:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ 5105:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

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

/***/ }),

/***/ 2413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 1669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [691,185,176], function() { return __webpack_exec__(7271); });
module.exports = __webpack_exports__;

})();