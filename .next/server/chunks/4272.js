exports.id = 4272;
exports.ids = [4272];
exports.modules = {

/***/ 45209:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "paymentMethod_wrapper__hDB06",
	"body": "paymentMethod_body__niNGC",
	"row": "paymentMethod_row__pHCIA",
	"label": "paymentMethod_label__FI5nM",
	"text": "paymentMethod_text__cmylm",
	"footer": "paymentMethod_footer__3olxQ",
	"action": "paymentMethod_action__rnLFd"
};


/***/ }),

/***/ 84272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaymentMethod)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80865);
/* harmony import */ var _paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45209);
/* harmony import */ var _paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function PaymentMethod({ value , list , onSubmit , isButtonLoading =false  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
    const handleChange = (event)=>{
        setSelectedValue(event.target.value);
        onSubmit(event.target.value);
    };
    const controlProps = (item)=>({
            checked: selectedValue === item,
            onChange: handleChange,
            value: item,
            id: item,
            name: "payment_method",
            inputProps: {
                "aria-label": item
            }
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),
            children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...controlProps(item.tag)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: (_paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                            htmlFor: item.tag,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_paymentMethod_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                                children: t(item.tag)
                            })
                        })
                    ]
                }, item.id))
        })
    });
}


/***/ })

};
;