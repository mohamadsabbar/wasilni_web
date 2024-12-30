exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 82314:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "orders_root__HZblW",
	"wrapper": "orders_wrapper__O2mIT",
	"title": "orders_title__5hdk3",
	"main": "orders_main__MbuRG"
};


/***/ }),

/***/ 50530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrdersContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _orders_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82314);
/* harmony import */ var _orders_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_orders_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);




const OrdersRefundButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(4474)]).then(__webpack_require__.bind(__webpack_require__, 14474)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\orders\\orders.tsx -> " + "components/ordersRefundButton/ordersRefundButton"
        ]
    }
});
const WalletActionButtons = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(26), __webpack_require__.e(7933)]).then(__webpack_require__.bind(__webpack_require__, 89580)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\orders\\orders.tsx -> " + "components/walletActionButtons/walletActionButtons"
        ]
    }
});
function OrdersContainer({ title , children , refund , wallet  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_orders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().root),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_orders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_orders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_orders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),
                        children: children
                    }),
                    refund && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrdersRefundButton, {}),
                    wallet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletActionButtons, {})
                ]
            })
        })
    });
}


/***/ })

};
;