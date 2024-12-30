"use strict";
exports.id = 256;
exports.ids = [256,892];
exports.modules = {

/***/ 80892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SecondaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77788);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function SecondaryButton({ children , disabled , onClick , type ="button" , icon , size ="medium" , loading =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().secondaryBtn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]}`,
        disabled: disabled,
        onClick: onClick,
        children: !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                icon ? icon : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                    children: children
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
            size: 22
        })
    });
}


/***/ }),

/***/ 13508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jr": () => (/* binding */ setToCart),
/* harmony export */   "KY": () => (/* binding */ selectCart),
/* harmony export */   "LL": () => (/* binding */ clearCart),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "di": () => (/* binding */ reduceCartItem),
/* harmony export */   "gK": () => (/* binding */ selectTotalPrice),
/* harmony export */   "h2": () => (/* binding */ removeFromCart)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    cartItems: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addToCart (state, action) {
            const { payload  } = action;
            const existingIndex = state.cartItems.findIndex((item)=>item.id === payload.id);
            if (existingIndex >= 0) {
                state.cartItems[existingIndex].quantity += payload.quantity;
            } else {
                state.cartItems.push(payload);
            }
        },
        setToCart (state, action) {
            const { payload  } = action;
            const existingIndex = state.cartItems.findIndex((item)=>item.id === payload.id);
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = payload;
            } else {
                state.cartItems.push(payload);
            }
        },
        reduceCartItem (state, action) {
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
            }
        },
        removeFromCart (state, action) {
            state.cartItems.map((cartItem)=>{
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter((item)=>item.id !== cartItem.id);
                    state.cartItems = nextCartItems;
                }
                return state;
            });
        },
        clearCart (state) {
            state.cartItems = [];
        }
    }
});
const { addToCart , removeFromCart , clearCart , reduceCartItem , setToCart  } = cartSlice.actions;
const selectCart = (state)=>state.cart.cartItems;
const selectTotalPrice = (state)=>state.cart.cartItems.reduce((total, item)=>total += item.quantity * item.stock.price + item?.addons?.reduce((acc, addon)=>acc += (addon?.quantity ?? 1) * (addon.stock?.price ?? 0), 0), 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ })

};
;