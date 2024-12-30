"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9552);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59748);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__, utils_session__WEBPACK_IMPORTED_MODULE_4__]);
([utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__, utils_session__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function MyDocument({ emotionStyleTags  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "emotion-insertion-point",
                        content: ""
                    }),
                    emotionStyleTags
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}
MyDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const appDirection = (0,utils_session__WEBPACK_IMPORTED_MODULE_4__/* .getCookie */ .ej)("dir", ctx);
    const cache = appDirection === "rtl" ? (0,utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__/* .createRtlEmotionCache */ .b)() : (0,utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__/* .createEmotionCache */ .S)();
    const { extractCriticalToChunks  } = _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_2___default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                        emotionCache: cache,
                        ...props
                    });
                }
        });
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    return {
        ...initialProps,
        emotionStyleTags
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "nJ": () => (/* binding */ removeCookie),
/* harmony export */   "zt": () => (/* binding */ getCookieFromBrowser)
/* harmony export */ });
/* unused harmony export getCookieFromServer */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69915);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7486);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const isBrowser = "undefined" !== "undefined";
const getCookieFromBrowser = (key)=>{
    return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(key);
};
const getCookieFromServer = (ctx, key = "id_token")=>{
    const cookie = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);
    const token = cookie && cookie[key] ? cookie[key] : false;
    if (!token) {
        return null;
    }
    return token;
};
const getCookie = (key, context)=>{
    return isBrowser ? getCookieFromBrowser(key) : getCookieFromServer(context, key);
};
const setCookie = (key, token)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(key, token, {
        expires: 7
    });
};
const removeCookie = (key)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(key);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("@emotion/server/create-instance");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 93195:
/***/ ((module) => {

module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 44615:
/***/ ((module) => {

module.exports = import("stylis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,2198,9748], () => (__webpack_exec__(892)));
module.exports = __webpack_exports__;

})();