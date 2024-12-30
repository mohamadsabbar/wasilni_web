exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 94274:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "empty_wrapper__nwTin",
	"text": "empty_text__oRHIv",
	"actions": "empty_actions__NNcWA"
};


/***/ }),

/***/ 20520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Empty)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _empty_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94274);
/* harmony import */ var _empty_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_empty_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77262);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */ 




function Empty({ text , buttonText , link ="/"  }) {
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_empty_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/delivery.webp",
                    alt: "Empty"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_empty_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                    children: text
                }),
                !!buttonText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_empty_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actions),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        onClick: ()=>push(link),
                        children: buttonText
                    })
                })
            ]
        })
    });
}


/***/ })

};
;