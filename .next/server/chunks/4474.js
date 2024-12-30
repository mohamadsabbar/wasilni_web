exports.id = 4474;
exports.ids = [4474];
exports.modules = {

/***/ 51892:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ordersRefundButton_root__dtNhV",
	"textBtn": "ordersRefundButton_textBtn__W8Zoa",
	"text": "ordersRefundButton_text__ImZWR",
	"bold": "ordersRefundButton_bold__CqmTq"
};


/***/ }),

/***/ 14474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrdersRefundButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ordersRefundButton_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51892);
/* harmony import */ var _ordersRefundButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ordersRefundButton_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var remixicon_react_Refund2LineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99403);
/* harmony import */ var remixicon_react_Refund2LineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Refund2LineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71116);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18074);
/* harmony import */ var contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80108);









function OrdersRefundButton({}) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { direction  } = (0,contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_7__/* .useTheme */ .F)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ordersRefundButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().root),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/order-refunds",
            className: (_ordersRefundButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().textBtn),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Refund2LineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_ordersRefundButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                    children: t("refunds")
                }),
                direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_5___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
            ]
        })
    });
}


/***/ }),

/***/ 80108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "N": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);


/***/ }),

/***/ 18074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);

function useLocale() {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
    const locale = i18n.language;
    const addResourceBundle = i18n.addResourceBundle;
    const changeLanguage = i18n.changeLanguage;
    return {
        t,
        locale,
        addResourceBundle,
        changeLanguage
    };
}


/***/ })

};
;