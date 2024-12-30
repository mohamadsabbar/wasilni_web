exports.id = 6041;
exports.ids = [6041];
exports.modules = {

/***/ 43974:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "confirmationModal_wrapper__NFPUR",
	"text": "confirmationModal_text__LXWur",
	"actions": "confirmationModal_actions__xeapU"
};


/***/ }),

/***/ 36041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmationModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47567);
/* harmony import */ var _confirmationModal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43974);
/* harmony import */ var _confirmationModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_confirmationModal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80892);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77262);







function ConfirmationModal({ open , handleClose , onSubmit , loading =false , title  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        open: open,
        onClose: handleClose,
        closable: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_confirmationModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_confirmationModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_confirmationModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            onClick: handleClose,
                            children: t("no")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            loading: loading,
                            onClick: onSubmit,
                            children: t("yes")
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