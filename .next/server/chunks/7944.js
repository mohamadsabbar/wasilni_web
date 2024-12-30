exports.id = 7944;
exports.ids = [7944];
exports.modules = {

/***/ 6124:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "clearCartModal_wrapper__twvk8",
	"text": "clearCartModal_text__PXBwd",
	"actions": "clearCartModal_actions__NHrGP"
};


/***/ }),

/***/ 97944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartReplaceModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47567);
/* harmony import */ var _clearCartModal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6124);
/* harmony import */ var _clearCartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_clearCartModal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80892);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77262);







function CartReplaceModal({ open , handleClose , onSubmit , loading =false  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        open: open,
        onClose: handleClose,
        closable: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_clearCartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_clearCartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                    children: t("replace.cart.prompt")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_clearCartModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            onClick: handleClose,
                            children: t("cancel")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            loading: loading,
                            onClick: onSubmit,
                            children: t("clear")
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