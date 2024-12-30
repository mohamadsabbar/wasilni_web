(() => {
var exports = {};
exports.id = 5354;
exports.ids = [5354];
exports.modules = {

/***/ 70779:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "content_container__aim2s",
	"header": "content_header__G6IRy",
	"title": "content_title__2iCsS",
	"text": "content_text__cX4Xb",
	"content": "content_content__twclt"
};


/***/ }),

/***/ 79544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CareersContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70779);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_supportCard_supportCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57227);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_supportCard_supportCard__WEBPACK_IMPORTED_MODULE_2__]);
components_supportCard_supportCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable react/no-unescaped-entities */ 



function CareersContent({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `container ${(_content_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container)}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: data?.translation?.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                        children: [
                            data?.category?.translation?.title,
                            ", ",
                            data?.translation?.address
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: data?.translation?.description || ""
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_supportCard_supportCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);

function useLocale() {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
    const locale = i18n.language;
    const addResourceBundle = i18n.addResourceBundle;
    const changeLanguage = i18n.changeLanguage;
    return {
        t,
        locale,
        addResourceBundle,
        changeLanguage
    };
}


/***/ }),

/***/ 87921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CareerSingle),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var containers_content_careersContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79544);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_getLanguage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77347);
/* harmony import */ var services_career__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22124);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_content_careersContent__WEBPACK_IMPORTED_MODULE_4__, services_career__WEBPACK_IMPORTED_MODULE_7__]);
([containers_content_careersContent__WEBPACK_IMPORTED_MODULE_4__, services_career__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function CareerSingle({}) {
    const { locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const careerId = Number(query.id);
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "career",
        careerId,
        locale
    ], ()=>services_career__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getById */ .Z.getById(careerId));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: data?.data.translation?.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_content_careersContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                data: data?.data
            })
        ]
    });
}
const getServerSideProps = async ({ query , req  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    const careerId = Number(query.id);
    const locale = (0,utils_getLanguage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(req.cookies?.locale);
    await queryClient.prefetchQuery([
        "career",
        careerId,
        locale
    ], ()=>services_career__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getById */ .Z.getById(careerId));
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)))
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const careerService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/careers/paginate`, {
            params
        }),
    getById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/careers/${id}`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (careerService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1380:
/***/ ((module) => {

"use strict";
module.exports = require("@chatscope/chat-ui-kit-react");

/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 7486:
/***/ ((module) => {

"use strict";
module.exports = require("next-cookies");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 69709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 61175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 991:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckDoubleLineIcon");

/***/ }),

/***/ 4634:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 74475:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CustomerService2FillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 32182:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Message3LineIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 23745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 60401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 63392:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,5728,4169,7262,7567,1929,256,251,182,5215,6461,7850,849,2434,9339], () => (__webpack_exec__(87921)));
module.exports = __webpack_exports__;

})();