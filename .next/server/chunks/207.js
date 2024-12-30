exports.id = 207;
exports.ids = [207,892];
exports.modules = {

/***/ 17593:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "successModal_wrapper__zKMt4",
	"content": "successModal_content__URooL",
	"icon": "successModal_icon__ZUHQA",
	"text": "successModal_text__wsR5b",
	"actions": "successModal_actions__JAPge"
};


/***/ }),

/***/ 80892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 70207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SuccessModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47567);
/* harmony import */ var _successModal_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17593);
/* harmony import */ var _successModal_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_successModal_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80892);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77262);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6684);








function SuccessModal({ open , handleClose , onSubmit , loading =false , title , buttonText  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        open: open,
        onClose: handleClose,
        closable: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_successModal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_successModal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_successModal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().icon),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_6__/* .DoubleCheckIcon */ .yz, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_successModal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                            children: title
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_successModal_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            onClick: handleClose,
                            children: t("cancel")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            loading: loading,
                            onClick: onSubmit,
                            children: buttonText
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;