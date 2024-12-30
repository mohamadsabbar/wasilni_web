"use strict";
(() => {
var exports = {};
exports.id = 7627;
exports.ids = [7627];
exports.modules = {

/***/ 12971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageGroupOrder),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_session__WEBPACK_IMPORTED_MODULE_2__]);
utils_session__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ManageGroupOrder() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}
const getServerSideProps = async (ctx)=>{
    const shopId = Number(ctx.query.id);
    const groupId = Number(ctx.query.g);
    const ownerId = Number(ctx.query.o);
    const type = String(ctx.query.t);
    const user = (0,utils_session__WEBPACK_IMPORTED_MODULE_2__/* .getCookie */ .ej)("user", ctx);
    if (user?.id == ownerId) {
        return {
            redirect: {
                destination: `/${type}/${shopId}`,
                permanent: false
            }
        };
    }
    return {
        redirect: {
            destination: `/${type}/${shopId}?g=${groupId}`,
            permanent: false
        }
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

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(12971));
module.exports = __webpack_exports__;

})();