"use strict";
(() => {
var exports = {};
exports.id = 6890;
exports.ids = [6890];
exports.modules = {

/***/ 53404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Terms),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_content_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3214);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var services_faq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46822);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24941);
/* harmony import */ var utils_getLanguage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_faq__WEBPACK_IMPORTED_MODULE_5__, utils_session__WEBPACK_IMPORTED_MODULE_7__]);
([services_faq__WEBPACK_IMPORTED_MODULE_5__, utils_session__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Terms({}) {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const locale = i18n.language;
    const { data , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "terms",
        locale
    ], ()=>services_faq__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getTerms */ .Z.getTerms());
    if (error) {
        console.log("error => ", error);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: data?.data?.translation?.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_content_content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: data?.data?.translation
            })
        ]
    });
}
const getStaticProps = async (ctx)=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
    const locale = (0,utils_getLanguage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,utils_session__WEBPACK_IMPORTED_MODULE_7__/* .getCookie */ .ej)("locale", ctx));
    await queryClient.prefetchQuery([
        "terms",
        locale
    ], ()=>services_faq__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getTerms */ .Z.getTerms());
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_4__.dehydrate)(queryClient)))
        },
        revalidate: 3600
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const faqService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/faqs/paginate`, {
            params
        }),
    getPrivacy: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/policy`, {
            params
        }),
    getTerms: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/term`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (faqService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 69709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 61175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4634:
/***/ ((module) => {

module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5728,4169,8886], () => (__webpack_exec__(53404)));
module.exports = __webpack_exports__;

})();