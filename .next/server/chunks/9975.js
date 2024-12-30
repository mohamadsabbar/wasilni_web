"use strict";
exports.id = 9975;
exports.ids = [9975];
exports.modules = {

/***/ 29969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AuthContext),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);


/***/ }),

/***/ 41137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const authService = {
    login: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/login`, data),
    register: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/register`, {}, {
            params: data
        }),
    loginByGoogle: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/google/callback`, data),
    loginByFacebook: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/facebook/callback`, data),
    forgotPassword: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/forgot/password`, data),
    verifyPhone: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/verify/phone`, {}, {
            params: data
        }),
    verifyEmail: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/auth/verify/" + data.verifyId),
    registerComplete: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/auth/after-verify", data),
    resendVerify: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/resend-verify`, {}, {
            params: data
        }),
    forgotPasswordEmail: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/auth/forgot/email-password", {}, {
            params: data
        }),
    forgotPasswordVerify: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/auth/forgot/email-password/${data.verifyCode}`, {}, {
            params: data
        }),
    phoneRegisterComplete: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/auth/verify/phone", data),
    forgotPasswordPhone: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`auth/forgot/password/confirm`, data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;