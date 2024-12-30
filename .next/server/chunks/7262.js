exports.id = 7262;
exports.ids = [7262,7788];
exports.modules = {

/***/ 77788:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryBtn": "button_primaryBtn__wYYuz",
	"disabled": "button_disabled__ZxK13",
	"text": "button_text__QEXTw",
	"small": "button_small__3QOEc",
	"medium": "button_medium__VxgiQ",
	"large": "button_large__ABOLu",
	"secondaryBtn": "button_secondaryBtn__uTY6K",
	"darkBtn": "button_darkBtn__HoBN2"
};


/***/ }),

/***/ 77262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PrimaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77788);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function PrimaryButton({ children , disabled , onClick , type ="button" , icon , loading =false , size ="medium" , id  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        id: id,
        type: type,
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().primaryBtn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]} ${disabled ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().disabled) : ""}`,
        disabled: disabled || loading,
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


/***/ })

};
;