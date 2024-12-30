"use strict";
exports.id = 1492;
exports.ids = [1492,8266];
exports.modules = {

/***/ 11295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26221);
/* harmony import */ var _fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);




const avatar_placeholder = "/images/avatar_placeholder.png";
function Avatar({ data  }) {
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,utils_getAvatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(data?.img));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        fill: true,
        src: imgSrc,
        alt: data?.firstname,
        sizes: "60px",
        onError: ()=>setImgSrc(avatar_placeholder)
    });
}


/***/ }),

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

/***/ 58287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePopover() {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event)=>setAnchorEl(event?.currentTarget);
    const handleClose = ()=>setAnchorEl(null);
    return [
        open,
        anchorEl,
        handleOpen,
        handleClose
    ];
}


/***/ }),

/***/ 34349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 64698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NW": () => (/* binding */ setCurrency),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bJ": () => (/* binding */ setDefaultCurrency),
/* harmony export */   "j": () => (/* binding */ selectCurrency)
/* harmony export */ });
/* unused harmony export clearCurrency */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    currency: null,
    defaultCurrency: null
};
const currencySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "currency",
    initialState,
    reducers: {
        setCurrency (state, action) {
            const { payload  } = action;
            state.currency = payload;
        },
        setDefaultCurrency (state, action) {
            const { payload  } = action;
            state.defaultCurrency = payload;
        },
        clearCurrency (state) {
            state.currency = null;
        }
    }
});
const { setCurrency , clearCurrency , setDefaultCurrency  } = currencySlice.actions;
const selectCurrency = (state)=>state.currency.currency;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencySlice.reducer);


/***/ }),

/***/ 45641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const profileService = {
    update: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/dashboard/user/profile/update`, data),
    passwordUpdate: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/profile/password/update`, data),
    get: (params, headers)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/profile/show`, {
            params,
            headers
        }),
    getNotifications: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/notifications`, {
            params
        }),
    updateNotifications: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/update/notifications`, data),
    firebaseTokenUpdate: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/profile/firebase/token/update`, data),
    updatePhone: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/dashboard/user/profile/update`, {}, {
            params
        }),
    userList: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/search-sending`, {
            params
        }),
    sendMoney: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/wallet/send`, data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getAvatar)
/* harmony export */ });
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5848);

const avatar_placeholder = "/images/avatar_placeholder.png";
function getAvatar(img) {
    if (img) {
        return img.includes("http") ? img : constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .IMAGE_URL */ .yA + img;
    } else {
        return avatar_placeholder;
    }
}


/***/ })

};
;