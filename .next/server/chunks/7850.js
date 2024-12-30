"use strict";
exports.id = 7850;
exports.ids = [7850];
exports.modules = {

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

/***/ 8423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fn": () => (/* binding */ selectProduct),
/* harmony export */   "Gr": () => (/* binding */ setProduct),
/* harmony export */   "JY": () => (/* binding */ clearProduct),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    product: undefined,
    isOpen: false,
    uuid: ""
};
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "product",
    initialState,
    reducers: {
        setProduct (state, action) {
            const { payload  } = action;
            state.product = payload.product;
            state.isOpen = true;
            state.uuid = payload.uuid;
        },
        clearProduct (state) {
            state.product = undefined;
            state.isOpen = false;
            state.uuid = "";
        }
    }
});
const { setProduct , clearProduct  } = productSlice.actions;
const selectProduct = (state)=>state.product;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ })

};
;