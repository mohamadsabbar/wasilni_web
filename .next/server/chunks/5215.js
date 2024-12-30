"use strict";
exports.id = 5215;
exports.ids = [5215];
exports.modules = {

/***/ 5215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dg": () => (/* binding */ clearFilter),
/* harmony export */   "Ec": () => (/* binding */ setShopSorting),
/* harmony export */   "G9": () => (/* binding */ setGroupFilter),
/* harmony export */   "VS": () => (/* binding */ setNewestShop),
/* harmony export */   "Vk": () => (/* binding */ setShopCategory),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "qs": () => (/* binding */ selectShopFilter)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    category_id: undefined,
    newest: false,
    order_by: undefined,
    group: {}
};
const shopFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "shopFilter",
    initialState,
    reducers: {
        setShopCategory (state, action) {
            const { payload  } = action;
            state.category_id = payload;
            state.newest = false;
        },
        setNewestShop (state) {
            state.category_id = undefined;
            state.newest = true;
        },
        setShopSorting (state, action) {
            const { payload  } = action;
            state.order_by = payload;
        },
        setGroupFilter (state, action) {
            const { payload  } = action;
            state.group = payload;
        },
        clearFilter (state) {
            state.category_id = undefined;
            state.newest = false;
            state.order_by = undefined;
            state.group = {};
        }
    }
});
const { setShopCategory , clearFilter , setNewestShop , setShopSorting , setGroupFilter  } = shopFilterSlice.actions;
const selectShopFilter = (state)=>state.filter;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopFilterSlice.reducer);


/***/ })

};
;