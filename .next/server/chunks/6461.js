"use strict";
exports.id = 6461;
exports.ids = [6461];
exports.modules = {

/***/ 37490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useModal(isOpen = false) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen);
    const handleOpen = (event)=>{
        event?.preventDefault();
        setOpen(true);
    };
    const handleClose = ()=>setOpen(false);
    return [
        open,
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

/***/ 67560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$m": () => (/* binding */ addToLiked),
/* harmony export */   "Qw": () => (/* binding */ removeFromLiked),
/* harmony export */   "XB": () => (/* binding */ selectLikedRestaurants),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dz": () => (/* binding */ clearLikedRestaurants)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    favoriteRestaurants: []
};
const favoriteRestaurantSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "favoriteRestaurants",
    initialState,
    reducers: {
        addToLiked (store, action) {
            store.favoriteRestaurants.push({
                ...action.payload
            });
        },
        removeFromLiked (state, action) {
            const { payload  } = action;
            const filtered = state.favoriteRestaurants.filter((item)=>item.uuid !== payload.uuid);
            state.favoriteRestaurants = filtered;
        },
        clearLikedRestaurants (state) {
            state.favoriteRestaurants = [];
        }
    }
});
const { addToLiked , removeFromLiked , clearLikedRestaurants  } = favoriteRestaurantSlice.actions;
const selectLikedRestaurants = (state)=>state.liked.favoriteRestaurants;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favoriteRestaurantSlice.reducer);


/***/ })

};
;