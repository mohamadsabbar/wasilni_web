"use strict";
exports.id = 1929;
exports.ids = [1929];
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

/***/ 96477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CR": () => (/* binding */ updateUserCart),
/* harmony export */   "Ns": () => (/* binding */ selectUserCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bK": () => (/* binding */ updateGroupStatus),
/* harmony export */   "my": () => (/* binding */ updateIndicatorState),
/* harmony export */   "tx": () => (/* binding */ clearUserCart)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    userCart: {
        id: 0,
        shop_id: 0,
        total_price: 0,
        user_carts: [
            {
                id: 0,
                name: "",
                user_id: 1,
                uuid: "",
                cartDetails: []
            }
        ]
    }
};
const userCartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "userCart",
    initialState,
    reducers: {
        updateUserCart (state, action) {
            const { payload  } = action;
            state.userCart = payload;
            state.indicatorVisible = true;
        },
        updateGroupStatus (state, action) {
            const { payload  } = action;
            state.userCart.group = !state.userCart.group;
            state.userCart.id = payload.id;
            state.userCart.owner_id = payload.owner_id;
            state.indicatorVisible = true;
        },
        clearUserCart (state) {
            state.userCart = initialState.userCart;
            state.indicatorVisible = false;
        },
        updateIndicatorState (state, action) {
            state.indicatorVisible = action.payload;
        }
    }
});
const { updateUserCart , updateGroupStatus , clearUserCart , updateIndicatorState  } = userCartSlice.actions;
const selectUserCart = (state)=>state.userCart.userCart;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userCartSlice.reducer);


/***/ })

};
;