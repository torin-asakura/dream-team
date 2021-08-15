(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3716:
/***/ (function() {



/***/ }),

/***/ 4401:
/***/ (function() {



/***/ }),

/***/ 6425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* reexport */ index_src; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@fragments-navigation-virtual-dc349beb3f/1/frontend/fragments/navigation/src/index.ts + 8 modules
var src = __webpack_require__(6586);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@ui-layout-virtual-731a96f19a/1/frontend/ui/layout/src/index.ts
var layout_src = __webpack_require__(5770);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@ui-text-virtual-c51c168599/1/frontend/ui/text/src/index.ts
var text_src = __webpack_require__(8882);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@ui-button-virtual-a01b2dbd71/1/frontend/ui/button/src/index.ts + 20 modules
var button_src = __webpack_require__(6514);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ../../../../.yarn/cache/styled-system-npm-5.1.5-64d59c22e4-e1345f88e0.zip/node_modules/styled-system/dist/index.js
var dist = __webpack_require__(372);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-video-virtual-84460127bc/1/frontend/ui/video/src/video.component.ts


const Video = styled_default().video({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  objectFit: 'cover'
}, dist.layout);

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-video-virtual-84460127bc/1/frontend/ui/video/src/useVideoShape.ts



const useVideoShape = videoRef => {
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  const {
    0: height,
    1: setHeight
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const updateShape = () => {
      const {
        width: realWidth,
        height: realHeight
      } = videoRef.current.getBoundingClientRect();
      setWidth(realWidth);
      setHeight(realHeight);
    };

    updateShape();
    window.addEventListener('resize', updateShape);
    return () => window.removeEventListener('resize', updateShape);
  }, [videoRef]);
  return {
    width,
    height
  };
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-video-virtual-84460127bc/1/frontend/ui/video/src/index.ts


// EXTERNAL MODULE: ../../../fragments/form-popover/src/index.ts + 56 modules
var form_popover_src = __webpack_require__(7751);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/messages.ts
const messages = {
  contactUs: {
    EN: 'Contact us',
    RU: 'Оставить заявку'
  }
};
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/data/validate.ts
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/data/queries/fragment-by-id.query.ts



const GET_FRAGMENT_BY_ID = client_.gql`
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
  } = (0,client_.useQuery)(GET_FRAGMENT_BY_ID, {
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/data/queries/asset-by-id.query.ts


const GET_ASSET_BY_ID = client_.gql`
  query GetAssetById($id: ID!) {
    mediaItem(id: $id) {
      link
    }
  }
`;

const useAssetById = id => {
  const {
    data,
    error
  } = (0,client_.useQuery)(GET_ASSET_BY_ID, {
    variables: {
      id
    }
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.mediaItem;
  }

  return {};
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/data/queries/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/data/constants.ts
/** Local * */
const HERO_CONTENT_EN = 'cG9zdDo0ODM=';
const HERO_CONTENT_RU = 'cG9zdDo0ODE=';
const VIDEO_DESKTOP = 'cG9zdDo0NDA=';
const VIDEO_MOBILE = 'cG9zdDo0NDY=';
/** Prod * */
// export const HERO_CONTENT_EN = 'cG9zdDo0OTQ='
// export const HERO_CONTENT_RU = 'cG9zdDo0ODE='
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/data/useData.ts







const useData = () => {
  const EN = useFragmentById(HERO_CONTENT_EN);
  const RU = useFragmentById(HERO_CONTENT_RU);
  const Desktop = useAssetById(VIDEO_DESKTOP);
  const Mobile = useAssetById(VIDEO_MOBILE);
  return {
    EN,
    RU,
    Desktop,
    Mobile
  };
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/data/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/landing-hero.component.tsx


















const getContentByLanguage = object => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
      color: "text.white",
      fontSize: ['massive', 'massive', 'huge'],
      fontWeight: "slim",
      textAlign: ['center', 'center', 'start'],
      children: object === null || object === void 0 ? void 0 : object.title
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
    flexBasis: 32
  }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
    maxWidth: 400,
    children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
      color: "text.white",
      fontSize: "regular",
      lineHeight: "primary",
      textAlign: ['center', 'center', 'start'],
      children: object === null || object === void 0 ? void 0 : object.content
    })
  })]
});

const LandingHero = ({
  language
}) => {
  const {
    EN,
    RU,
    Desktop,
    Mobile
  } = useData();
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false);
  const videoNode = (0,external_react_.useRef)(null);
  const {
    height: videoHeight
  } = useVideoShape(videoNode);
  return /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
    height: ['auto', 'auto', '92vh'],
    minHeight: ['92vh', '92vh', 'auto'],
    position: "relative",
    overflow: "hidden",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
      width: "100%",
      justifyContent: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(form_popover_src/* FormPopover */.q, {
        language: language,
        visible: visible,
        setVisible: setVisible
      }), /*#__PURE__*/jsx_runtime_.jsx(Video, {
        autoPlay: true,
        muted: true,
        loop: true,
        src: Desktop.link,
        display: ['none', 'none', 'flex']
      }), /*#__PURE__*/jsx_runtime_.jsx(Video, {
        autoPlay: true,
        muted: true,
        loop: true,
        src: Mobile.link,
        display: ['flex', 'flex', 'none'],
        ref: videoNode
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        flexBasis: [videoHeight - 80, videoHeight - 80, 0]
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
        display: ['flex', 'flex', 'none'],
        height: 80,
        background: "linear-gradient(180deg, rgba(23, 35, 68, 0) 0%, #172344 100%)"
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
        height: "100%",
        py: ['48px', '48px', 0],
        width: "100%",
        backgroundColor: ['background.darkBlue', 'background.darkBlue', 'transparent'],
        children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Column, {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            width: "100%",
            maxWidth: 1280,
            children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
              children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Column, {
                width: "100%",
                children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                  maxWidth: 500,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
                    children: [getContentByLanguage(language === 'RU' ? RU : EN), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                      flexBasis: 32
                    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                      width: "100%",
                      justifyContent: ['center', 'center', 'flex-start'],
                      children: /*#__PURE__*/jsx_runtime_.jsx(button_src/* Button */.z, {
                        onClick: () => setVisible(true),
                        children: messages.contactUs[language]
                      })
                    })]
                  })
                })
              })
            })
          })
        })
      })]
    })
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-hero-virtual-bd34588229/1/frontend/fragments/landing-hero/src/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/messages.ts
const messages_messages = {
  workDirections: {
    EN: 'Work directions',
    RU: 'Направления работы'
  }
};
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/item/item.interface.ts
var item_interface = __webpack_require__(3716);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@ui-image-virtual-5b23f38ab1/1/frontend/ui/image/src/index.ts + 2 modules
var image_src = __webpack_require__(7719);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/item/item.component.tsx











const filterByLanguage = language => ({
  language: lang
}) => lang ? lang.code === language : true;

const Item = ({
  category,
  language
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Box, {
  width: "100%",
  maxWidth: 624,
  border: "1px solid",
  borderColor: "border.lightGray",
  borderRadius: "normal",
  children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
    flexBasis: 32
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
    width: "100%",
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 32
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        width: 56,
        height: 56,
        children: /*#__PURE__*/jsx_runtime_.jsx(image_src/* Image */.E, {
          url: category.skillAddons.ikonka.link
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 24
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
          fontSize: "increased",
          color: "text.black",
          fontWeight: "slim",
          children: category.name
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 32
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        width: "100%",
        flexWrap: "wrap",
        children: category.skills.nodes.filter(filterByLanguage(language)).map(({
          title
        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                flexBasis: 8
              }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
                px: "12px",
                py: "8px",
                border: "1px solid",
                borderColor: "border.lightGray",
                borderRadius: "normal",
                children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
                  color: "text.black",
                  fontSize: "regular",
                  whiteSpace: "nowrap",
                  children: title
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 8
          })]
        }))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 32
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
    flexBasis: 32
  })]
});


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/item/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/data/validate.ts
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/data/queries/skill-categories.query.ts



const GET_SKILL_CATEGORIES = client_.gql`
  query GetSkillCategories {
    skillCategories {
      nodes {
        name
        skillAddons {
          ikonka {
            link
          }
        }
        skills {
          nodes {
            title
            menuOrder
            language {
              code
            }
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
  } = (0,client_.useQuery)(GET_SKILL_CATEGORIES);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.skillCategories.nodes.map(node => validate_validate(node));
  }

  return [];
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/data/queries/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/data/sort.ts
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/data/useData.ts



const useData_useData = () => {
  const skills = useSkills();
  return sort(skills);
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/data/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/landing-work-directions.component.tsx












const LandingWorkDirections = ({
  language
}) => {
  const {
    leftSide,
    rightSide
  } = useData_useData();
  return /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
    width: "100%",
    flexWrap: ['wrap', 'wrap', 'nowrap'],
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
      width: "100%",
      height: ['auto', 'auto', '100%'],
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
          color: "text.black",
          fontSize: "big",
          fontWeight: "slim",
          children: messages_messages.workDirections[language]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        flexBasis: 48
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Row, {
        flexWrap: ['wrap', 'wrap', 'nowrap'],
        children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Column, {
          width: "100%",
          height: ['auto', 'auto', '100%'],
          children: leftSide.map(category => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Item, {
              category: category,
              language: language
            }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
              flexBasis: 32
            })]
          }))
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          flexBasis: 32
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
          width: "100%",
          height: ['auto', 'auto', '100%'],
          children: [rightSide.map(category => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Item, {
              category: category,
              language: language
            }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
              flexBasis: 32
            })]
          })), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 32
          })]
        })]
      })]
    })
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-work-directions-virtual-c65885211d/1/frontend/fragments/landing-work-directions/src/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/data/validate.ts
function data_validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function data_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { data_validate_ownKeys(Object(source), true).forEach(function (key) { data_validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { data_validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function data_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const data_validate_stringProps = ['title', 'content', 'excerpt'];

const data_validate_formatString = str => str.replace(/(<p>|<\/p>)/g, '').replace(/&#(.*?);/g, '');

const data_validate_validate = target => data_validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return data_validate_objectSpread(data_validate_objectSpread({}, acc), {}, {
      [prop]: data_validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/data/queries/card-by-id.query.ts



const GET_CARD_BY = client_.gql`
  query CardByID($id: ID!) {
    fragment(id: $id) {
      excerpt
      content
      title
      fragments {
        reverse
      }
      featuredImage {
        node {
          link
        }
      }
    }
  }
`;

const useCardByID = id => {
  const {
    data,
    error
  } = (0,client_.useQuery)(GET_CARD_BY, {
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/data/queries/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/data/constants.ts
/** Local * */
const COSTS_EN = 'cG9zdDo0OTM=';
const COSTS_RU = 'cG9zdDo0OTI=';
const TIME_FRAME_EN = 'cG9zdDo0OTE=';
const TIME_FRAME_RU = 'cG9zdDo0OTA=';
const HOW_WE_DO_EN = 'cG9zdDo0ODY=';
const HOW_WE_DO_RU = 'cG9zdDo0ODk=';
const WHY_US_EN = 'cG9zdDo0ODU=';
const WHY_US_RU = 'cG9zdDo0ODQ=';
/** Prod * */
// export const COSTS_EN = 'cG9zdDo1MDE='
// export const COSTS_RU = 'cG9zdDo1MDA='
// export const TIME_FRAME_EN = 'cG9zdDo0OTE='
// export const TIME_FRAME_RU = 'cG9zdDo0OTk='
// export const HOW_WE_DO_EN = 'cG9zdDo0OTc='
// export const HOW_WE_DO_RU = 'cG9zdDo0OTg='
// export const WHY_US_EN = 'cG9zdDo0OTY='
// export const WHY_US_RU = 'cG9zdDo0OTU='
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/data/useData.ts










const data_useData_useData = () => {
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/data/index.ts

// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@ui-condition-virtual-9f1c4f5b84/1/frontend/ui/condition/src/index.ts + 1 modules
var condition_src = __webpack_require__(8733);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/item/content/content.component.tsx








const Content = ({
  title,
  excerpt,
  content
}) => /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
    width: "100%",
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
        color: "text.accent",
        fontSize: "medium",
        fontWeight: "bold",
        textTransform: "uppercase",
        children: title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 32
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
        color: "text.black",
        fontSize: "big",
        fontWeight: "slim",
        children: excerpt
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 32
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
        color: "text.black",
        fontSize: "regular",
        lineHeight: "primary",
        children: content
      })
    })]
  })
});


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/item/content/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/item/item.component.tsx










const item_component_Item = ({
  contentObject: {
    title,
    content,
    excerpt,
    fragments,
    featuredImage
  }
}) => {
  var _featuredImage$node, _featuredImage$node2, _featuredImage$node3;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Box, {
    height: ['auto', 'auto', 416],
    width: "100%",
    flexWrap: ['wrap', 'wrap', 'nowrap'],
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(condition_src/* Condition */.g, {
      match: !(fragments !== null && fragments !== void 0 && fragments.reverse),
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
        minHeight: 350,
        children: /*#__PURE__*/jsx_runtime_.jsx(image_src/* Image */.E, {
          url: featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage$node = featuredImage.node) === null || _featuredImage$node === void 0 ? void 0 : _featuredImage$node.link,
          backgroundSize: ['contain', 'contain', 'auto']
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        flexBasis: 64
      }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
        title: title,
        content: content,
        excerpt: excerpt
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(condition_src/* Condition */.g, {
      match: fragments === null || fragments === void 0 ? void 0 : fragments.reverse,
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
        minHeight: 500,
        display: ['flex', 'flex', 'none'],
        children: /*#__PURE__*/jsx_runtime_.jsx(image_src/* Image */.E, {
          url: featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage$node2 = featuredImage.node) === null || _featuredImage$node2 === void 0 ? void 0 : _featuredImage$node2.link,
          backgroundSize: ['contain', 'contain', 'auto']
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        flexBasis: 64
      }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
        title: title,
        content: content,
        excerpt: excerpt
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        flexBasis: 64
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
        display: ['none', 'none', 'flex'],
        children: /*#__PURE__*/jsx_runtime_.jsx(image_src/* Image */.E, {
          url: featuredImage === null || featuredImage === void 0 ? void 0 : (_featuredImage$node3 = featuredImage.node) === null || _featuredImage$node3 === void 0 ? void 0 : _featuredImage$node3.link,
          backgroundSize: "auto"
        })
      })]
    })]
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/item/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/landing-about.component.tsx










const landing_about_component_getContentByLanguage = (contentObject, language) => language === 'RU' ? contentObject.RU : contentObject.EN;

const LandingAbout = ({
  language
}) => {
  const {
    costs,
    timeFrame,
    howWeDo,
    whyUs
  } = data_useData_useData();
  return /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
    px: ['32px', '32px', '0px'],
    children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Column, {
      width: "100%",
      height: ['auto', 'auto', '100%'],
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        width: "100%",
        maxWidth: 1280,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
          width: "100%",
          height: ['auto', 'auto', '100%'],
          children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 160
          }), /*#__PURE__*/jsx_runtime_.jsx(item_component_Item, {
            contentObject: landing_about_component_getContentByLanguage(whyUs, language)
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 160
          }), /*#__PURE__*/jsx_runtime_.jsx(item_component_Item, {
            contentObject: landing_about_component_getContentByLanguage(howWeDo, language)
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 160
          }), /*#__PURE__*/jsx_runtime_.jsx(LandingWorkDirections, {
            language: language
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 160
          }), /*#__PURE__*/jsx_runtime_.jsx(item_component_Item, {
            contentObject: landing_about_component_getContentByLanguage(timeFrame, language)
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 160
          }), /*#__PURE__*/jsx_runtime_.jsx(item_component_Item, {
            contentObject: landing_about_component_getContentByLanguage(costs, language)
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 160
          })]
        })
      })
    })
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-about-virtual-d3d1833663/1/frontend/fragments/landing-about/src/index.ts

// EXTERNAL MODULE: ../../../../.yarn/__virtual__/framer-motion-virtual-07a6e27b0c/0/cache/framer-motion-npm-4.1.17-00d2b9950f-f6b5fc8f18.zip/node_modules/framer-motion/dist/es/render/dom/motion.js + 105 modules
var motion = __webpack_require__(1464);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-carousel-virtual-ae76e60819/1/frontend/ui/carousel/src/item/item.component.ts


const item_item_component_Item = styled_default()(motion/* motion.div */.E.div)(({
  offset
}) => ({
  marginRight: offset,
  userSelect: 'none'
}));

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-carousel-virtual-ae76e60819/1/frontend/ui/carousel/src/item/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-carousel-virtual-ae76e60819/1/frontend/ui/carousel/src/useCarousel.tsx










const useCarousel = (duration = 1) => {
  const {
    0: spaceBetween,
    1: setSpaceBetween
  } = (0,external_react_.useState)(0);
  const {
    0: max,
    1: setMax
  } = (0,external_react_.useState)(0);
  const itemNode = (0,external_react_.useRef)(null);
  const containerNode = (0,external_react_.useRef)(null);
  let position = 0;

  const swipeRight = () => {
    // @ts-ignore
    const delta = itemNode.current.offsetWidth + spaceBetween;
    position = position === max ? position : position + 1; // @ts-ignore

    containerNode.current.scroll({
      left: delta * position,
      behavior: 'smooth'
    });
  };

  const swipeLeft = () => {
    // @ts-ignore
    const delta = itemNode.current.offsetWidth + spaceBetween;
    position = position === 0 ? position : position - 1; // @ts-ignore

    containerNode.current.scroll({
      left: delta * position,
      behavior: 'smooth'
    });
  }; // eslint-disable-next-line


  const Carousel = ({
    children,
    spaceBetween
  }) => {
    setSpaceBetween(spaceBetween);
    (0,external_react_.useEffect)(() => {
      setMax(children.length);
    }, [children]);
    return /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
      overflowX: "scroll",
      ref: containerNode,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          children: (children || []).map(child => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx(item_item_component_Item, {
              offset: spaceBetween,
              ref: itemNode,
              children: child
            })
          }))
        })
      })
    });
  };

  return [swipeLeft, swipeRight, Carousel];
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-carousel-virtual-ae76e60819/1/frontend/ui/carousel/src/index.ts


// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@ui-icons-virtual-697e672513/1/frontend/ui/icons/src/index.ts + 8 modules
var icons_src = __webpack_require__(4516);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/messages.ts
const src_messages_messages = {
  reviews: {
    EN: 'Reviews',
    RU: 'Отзывы клиентов'
  }
};
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/react-scrolllock-virtual-36592737db/0/cache/react-scrolllock-npm-5.0.1-cc53e8d317-61833bdb1f.zip/node_modules/react-scrolllock/dist/index.js
var react_scrolllock_dist = __webpack_require__(3662);
;// CONCATENATED MODULE: external "react-dom"
var external_react_dom_namespaceObject = require("react-dom");;
// EXTERNAL MODULE: ../../../../.yarn/cache/global-npm-4.4.0-888ee8033d-9c057557c8.zip/node_modules/global/document.js
var global_document = __webpack_require__(7739);
var document_default = /*#__PURE__*/__webpack_require__.n(global_document);
// EXTERNAL MODULE: ../../../../.yarn/cache/nanoid-npm-3.1.25-c8f62ce160-e2353828c7.zip/node_modules/nanoid/index.js + 1 modules
var nanoid = __webpack_require__(8805);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/framer-motion-virtual-07a6e27b0c/0/cache/framer-motion-npm-4.1.17-00d2b9950f-f6b5fc8f18.zip/node_modules/framer-motion/dist/es/animation/use-animation.js + 1 modules
var use_animation = __webpack_require__(9603);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-layer-virtual-333f0202f3/1/frontend/ui/layer/src/container/base/base.styles.ts
const createBaseStyles = () => ({
  visible,
  scroll
}) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  zIndex: 15,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflowY: scroll ? 'scroll' : 'unset'
});


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-layer-virtual-333f0202f3/1/frontend/ui/layer/src/container/container.styles.ts

const baseStyles = createBaseStyles();
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-layer-virtual-333f0202f3/1/frontend/ui/layer/src/container/container.component.ts






const Container = styled_default()(motion/* motion.div */.E.div)(baseStyles, dist.flexbox, dist.position, dist.color);

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-layer-virtual-333f0202f3/1/frontend/ui/layer/src/container/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-layer-virtual-333f0202f3/1/frontend/ui/layer/src/layer.component.tsx



function layer_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layer_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layer_component_ownKeys(Object(source), true).forEach(function (key) { layer_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layer_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layer_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react-hooks/rules-of-hooks */











const Layer = (_ref) => {
  let {
    children,
    visible,
    onClose,
    scroll = false,
    opacity = 'none',
    center = false,
    top = 0,
    left = 0
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "visible", "onClose", "scroll", "opacity", "center", "top", "left"]);

  const blackoutId = (0,nanoid/* nanoid */.x0)();
  const childrenId = (0,nanoid/* nanoid */.x0)();
  const main = (0,use_animation/* useAnimation */._)();
  const close = (0,external_react_.useCallback)(() => {
    main.start({
      opacity: 0
    }).then(onClose);
  }, [main, onClose]);
  const handleClick = (0,external_react_.useCallback)(event => {
    if (event.target.contains(document_default().getElementById(blackoutId)) || event.target === document_default().getElementById(blackoutId)) close();
  }, [blackoutId, close]);
  document_default().addEventListener('click', handleClick);
  (0,external_react_.useEffect)(() => {
    main.start({
      opacity: 1
    });
    return () => document_default().removeEventListener('click', handleClick);
  }, [handleClick, main]);

  if (visible) {
    return /*#__PURE__*/(0,external_react_dom_namespaceObject.createPortal)( /*#__PURE__*/jsx_runtime_.jsx(react_scrolllock_dist/* default */.ZP, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, layer_component_objectSpread(layer_component_objectSpread({
        animate: main,
        initial: {
          opacity: 0
        },
        scroll: scroll,
        opacity: opacity,
        id: blackoutId,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ['white', 'white', 'rgba(0, 0, 0, 0.4)']
      }, props), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
          position: "absolute",
          top: "20px",
          left: "20px",
          display: ['flex', 'flex', 'none'],
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_src/* CrossIcon */.aM, {
            width: 16,
            height: 16,
            cursor: "pointer",
            onClick: close
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
          id: childrenId,
          width: ['100%', '100%', 'auto'],
          height: ['100%', '100%', 'auto'],
          justifyContent: ['center', 'center', 'auto'],
          alignItems: ['center', 'center', 'auto'],
          children: children
        })]
      }))
    }), (document_default()).body);
  }

  return null;
};
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-layer-virtual-333f0202f3/1/frontend/ui/layer/src/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/item/messages.ts
const item_messages_messages = {
  details: {
    EN: 'Details',
    RU: 'Подробнее'
  }
};
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/item/item.component.tsx














const src_item_item_component_Item = ({
  review,
  language
}) => {
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Layer, {
      visible: visible,
      onClose: () => setVisible(false),
      opacity: "small",
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
        width: ['100%', '100%', 960],
        height: 649,
        borderRadius: "normal",
        backgroundColor: "white",
        padding: "32px",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
            alignItems: "center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
                  fontSize: "large",
                  color: "text.black",
                  fontWeight: "slim",
                  children: review.title
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                flexBasis: 4
              }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
                  color: "text.lightGray",
                  fontSize: "regular",
                  children: review.review.respondent
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 32
          }), /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
            fontSize: "regular",
            color: "text.black",
            children: review.content
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
      width: 405,
      height: 276,
      backgroundColor: "white",
      borderRadius: "normal",
      overflow: "hidden",
      padding: "24px" // @ts-ignore
      ,
      cursor: "pointer",
      onClick: () => setVisible(true),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
            fontWeight: "slim",
            fontSize: "large",
            color: "text.black",
            children: review.title
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          flexBasis: 4
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
            fontSize: "regular",
            color: "text.lightGray",
            children: review.review.respondent
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          flexBasis: 16
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          overflow: "hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx(text_src.TextEllipsis, {
            fontSize: "regular",
            color: "text.gray",
            lineClamp: 7,
            children: review.content
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          flexGrow: 1
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(text_src.Text, {
            color: "text.accent",
            fontSize: "regular",
            children: ["+ ", item_messages_messages.details[language]]
          })
        })]
      })
    })]
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/item/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/data/validate.ts
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/data/queries/get-reviews.query.ts



const GET_REVIEWS = client_.gql`
  query GetReviews {
    reviews {
      nodes {
        title
        content
        menuOrder
        language {
          code
        }
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
  } = (0,client_.useQuery)(GET_REVIEWS);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.reviews.nodes.map(node => src_data_validate_validate(node));
  }

  return [];
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/data/queries/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/data/sort.ts
const sort_compare = ({
  menuOrder: a
}, {
  menuOrder: b
}) => a > b ? 1 : -1;

const sort_sort = reviews => [...reviews].sort(sort_compare);


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/data/useData.ts



const src_data_useData_useData = () => {
  const reviews = useReviews();
  return sort_sort(reviews);
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/data/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/landing-reviews.component.tsx
















const LandingReviews = ({
  language
}) => {
  const reviews = src_data_useData_useData();
  const [swipeLeft, swipeRight, Carousel] = useCarousel();

  const filterByLanguage = ({
    language: {
      code
    }
  }) => code === language;

  return /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
    px: ['32px', '32px', '0px'],
    backgroundColor: "background.lightGray",
    justifyContent: "center",
    children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      width: "100%",
      maxWidth: 1280,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
        justifyContent: "center",
        width: "100%",
        children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          flexBasis: 120
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Row, {
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
            color: "text.black",
            fontWeight: "slim",
            fontSize: "massive",
            children: src_messages_messages.reviews[language]
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexGrow: 1,
            flexBasis: [64, 64, 0]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Layout, {
            width: 128,
            children: [/*#__PURE__*/jsx_runtime_.jsx(button_src/* Button */.z, {
              colors: "transparent",
              width: 44,
              onClick: swipeLeft,
              children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_src/* ArrowLeftIcon */.Y4, {
                  width: 8,
                  height: 16
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
              flexBasis: 16
            }), /*#__PURE__*/jsx_runtime_.jsx(button_src/* Button */.z, {
              colors: "transparent",
              width: 44,
              onClick: swipeRight,
              children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_src/* ArrowRightIcon */.LZ, {
                  width: 8,
                  height: 16
                })
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          flexBasis: 48
        }), /*#__PURE__*/jsx_runtime_.jsx(Carousel, {
          spaceBetween: 32,
          children: reviews.filter(filterByLanguage).map(review => /*#__PURE__*/jsx_runtime_.jsx(src_item_item_component_Item, {
            review: review,
            language: language
          }))
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
          flexBasis: 120
        })]
      })
    })
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-reviews-virtual-f0c9212265/1/frontend/fragments/landing-reviews/src/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/item/messages.ts
const src_item_messages_messages = {
  itRecruiter: {
    EN: 'IT recruiter',
    RU: 'IT-рекрутер'
  }
};
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/item/item.component.tsx











const landing_team_src_item_item_component_Item = ({
  recruit,
  image,
  language
}) => /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
  height: 380,
  width: "100%",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
    width: "100%",
    children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
      justifyContent: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
        borderRadius: "100%",
        width: 280,
        height: 280,
        overflow: "hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(image_src/* Image */.E, {
          url: image.node.link
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 32
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
      justifyContent: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
        fontSize: "large",
        color: "text.black",
        fontWeight: "slim",
        children: recruit
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
      flexBasis: 12
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
      justifyContent: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
        color: "text.lightGray",
        fontSize: "regular",
        children: src_item_messages_messages.itRecruiter[language]
      })
    })]
  })
});


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/item/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/data/validate.ts
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/data/queries/get-recruits.query.ts



const GET_RECRUITS = client_.gql`
  query GetRecruits {
    recruits {
      nodes {
        title
        featuredImage {
          node {
            link
          }
        }
        language {
          code
        }
      }
    }
  }
`;

const useRecruits = () => {
  const {
    data,
    error
  } = (0,client_.useQuery)(GET_RECRUITS);

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.recruits.nodes.map(node => landing_team_src_data_validate_validate(node));
  }

  return [];
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/data/queries/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/data/useData.ts


const landing_team_src_data_useData_useData = () => {
  const recruits = useRecruits();
  return recruits;
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/data/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/landing-team.component.tsx











const LandingTeam = ({
  language
}) => {
  const recruits = landing_team_src_data_useData_useData();

  const filterByLanguage = ({
    language: {
      code
    }
  }) => code === language;

  return /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
    px: ['50px', '50px', '0px'],
    height: ['auto', 'auto', 830],
    children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Column, {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        width: "100%",
        maxWidth: 1280,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
          width: "100%",
          justifyContent: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 152
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
            justifyContent: "center",
            alignItems: "center",
            children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
              fontWeight: "slim",
              fontSize: "massive",
              color: "text.black",
              children: "Dream team"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 74
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
            flexWrap: ['wrap', 'wrap', 'nowrap'],
            children: recruits.filter(filterByLanguage).map(({
              title: recruit,
              featuredImage: image
            }) => /*#__PURE__*/jsx_runtime_.jsx(landing_team_src_item_item_component_Item, {
              recruit: recruit,
              image: image,
              language: language
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
            flexBasis: 160
          })]
        })
      })
    })
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-team-virtual-d4cd84bf4e/1/frontend/fragments/landing-team/src/index.ts

// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@ui-form-virtual-4fcf3e04b2/1/frontend/ui/form/src/index.ts + 13 modules
var form_src = __webpack_require__(798);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/data/validate.ts
function landing_feedback_src_data_validate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function landing_feedback_src_data_validate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { landing_feedback_src_data_validate_ownKeys(Object(source), true).forEach(function (key) { landing_feedback_src_data_validate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { landing_feedback_src_data_validate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function landing_feedback_src_data_validate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-param-reassign */
const landing_feedback_src_data_validate_stringProps = ['title', 'content', 'excerpt'];

const landing_feedback_src_data_validate_formatString = str => {
  str = str.replace(/(<p>|<\/p>)/g, '');
  str = str.replace(/(&#8212;|#8212;)/g, '–');
  return str;
};

const landing_feedback_src_data_validate_validate = target => landing_feedback_src_data_validate_stringProps.reduce((acc, prop) => {
  if (target[prop]) {
    return landing_feedback_src_data_validate_objectSpread(landing_feedback_src_data_validate_objectSpread({}, acc), {}, {
      [prop]: landing_feedback_src_data_validate_formatString(target[prop])
    });
  }

  return acc;
}, target);


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/data/queries/fragment-by-id.query.ts



const fragment_by_id_query_GET_FRAGMENT_BY_ID = client_.gql`
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
  } = (0,client_.useQuery)(fragment_by_id_query_GET_FRAGMENT_BY_ID, {
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


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/data/queries/asset-by-id.query.ts


const asset_by_id_query_GET_ASSET_BY_ID = client_.gql`
  query GetAssetById($id: ID!) {
    mediaItem(id: $id) {
      link
    }
  }
`;

const asset_by_id_query_useAssetById = id => {
  const {
    data,
    error
  } = (0,client_.useQuery)(asset_by_id_query_GET_ASSET_BY_ID, {
    variables: {
      id
    }
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return data.mediaItem;
  }

  return {};
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/data/queries/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/data/constants.ts
/** Local * */
const CONTACT_US_RU = 'cG9zdDo2Mjk=';
const CONTACT_US_EN = 'cG9zdDo2MzA=';
const FORM_RU = 'TmluamFGb3JtOjM=';
const FORM_EN = 'TmluamFGb3JtOjI=';
const ASSET = 'cG9zdDoyOTM=';
/** Prod * */
// export const CONTACT_US_RU = 'cG9zdDo2Mjk='
// export const CONTACT_US_EN = 'cG9zdDo2MzA='
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/data/useData.ts






const landing_feedback_src_data_useData_useData = () => {
  const contactUsEn = fragment_by_id_query_useFragmentById(CONTACT_US_EN);
  const contactUsRu = fragment_by_id_query_useFragmentById(CONTACT_US_RU);
  const asset = asset_by_id_query_useAssetById(ASSET);
  return {
    EN: contactUsEn,
    RU: contactUsRu,
    asset
  };
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/data/index.ts

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/landing-feedback.component.tsx



function landing_feedback_component_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = landing_feedback_component_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function landing_feedback_component_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const LandingFeedback = ({
  language
}) => {
  const _useData = landing_feedback_src_data_useData_useData(),
        {
    asset
  } = _useData,
        content = landing_feedback_component_objectWithoutProperties(_useData, ["asset"]);

  return /*#__PURE__*/jsx_runtime_.jsx(image_src/* Image */.E, {
    url: asset.link,
    children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Box, {
      px: ['20px', '20px', '0px'],
      py: ['48px', '48px', '120px'],
      height: ['auto', 'auto', 838],
      width: "100%",
      justifyContent: "center",
      backgroundColor: "background.transparentBlue",
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
        width: "100%",
        maxWidth: 1280,
        children: /*#__PURE__*/jsx_runtime_.jsx(layout_src.Column, {
          width: "100%",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Row, {
            flexWrap: "wrap",
            justifyContent: "space-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
              maxWidth: 580,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
                width: "100%",
                children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
                  width: "100%",
                  children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
                    fontSize: "medium",
                    color: "text.accent",
                    fontWeight: "bold",
                    children: content[language].title
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                  flexBasis: 32
                }), /*#__PURE__*/jsx_runtime_.jsx(layout_src.Row, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(text_src.Text, {
                    fontSize: "big",
                    color: "text.white",
                    fontWeight: "slim",
                    children: content[language].content
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_src.Column, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(layout_src.Layout, {
                flexBasis: [32, 32, 0]
              }), /*#__PURE__*/jsx_runtime_.jsx(form_src/* Form */.l, {
                language: language
              })]
            })]
          })
        })
      })
    })
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@fragments-landing-feedback-virtual-2f6d77d955/1/frontend/fragments/landing-feedback/src/index.ts

// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@fragments-landing-footer-virtual-9422cc200f/1/frontend/fragments/landing-footer/src/index.ts + 7 modules
var landing_footer_src = __webpack_require__(3091);
// EXTERNAL MODULE: ../../../../.yarn/__virtual__/@landing-index-page-virtual-5d675a7e97/1/frontend/landing/index/src/store/store.interfaces.ts
var store_interfaces = __webpack_require__(4401);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@landing-index-page-virtual-5d675a7e97/1/frontend/landing/index/src/store/store.vars.ts

const languageVar = (0,client_.makeVar)('RU');
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@landing-index-page-virtual-5d675a7e97/1/frontend/landing/index/src/store/index.ts


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@landing-index-page-virtual-5d675a7e97/1/frontend/landing/index/src/index.component.tsx














const Index = () => {
  const language = (0,client_.useReactiveVar)(languageVar);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(src/* Navigation */.W, {
      language: language,
      languageVar: languageVar
    }), /*#__PURE__*/jsx_runtime_.jsx(LandingHero, {
      language: language
    }), /*#__PURE__*/jsx_runtime_.jsx(LandingAbout, {
      language: language
    }), /*#__PURE__*/jsx_runtime_.jsx(LandingReviews, {
      language: language
    }), /*#__PURE__*/jsx_runtime_.jsx(LandingTeam, {
      language: language
    }), /*#__PURE__*/jsx_runtime_.jsx(LandingFeedback, {
      language: language
    }), /*#__PURE__*/jsx_runtime_.jsx(landing_footer_src/* LandingFooter */.C, {
      language: language
    })]
  });
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@landing-index-page-virtual-5d675a7e97/1/frontend/landing/index/src/index.ts

/* harmony default export */ var index_src = (Index);
;// CONCATENATED MODULE: ./pages/index.ts


/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 6177:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/styled");;

/***/ }),

/***/ 6417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [691,630,726,662,294,730,91], function() { return __webpack_exec__(6425); });
module.exports = __webpack_exports__;

})();