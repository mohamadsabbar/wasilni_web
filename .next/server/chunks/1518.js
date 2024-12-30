exports.id = 1518;
exports.ids = [1518];
exports.modules = {

/***/ 54012:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "mobileShopCategories_wrapper__gUbbA",
	"item": "mobileShopCategories_item__rBb3f",
	"text": "mobileShopCategories_text__ytCc0",
	"active": "mobileShopCategories_active__OBfSA"
};


/***/ }),

/***/ 41518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileShopCategories)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54012);
/* harmony import */ var _mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5215);







function MobileShopCategories({ data , onClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    function filterByCategory(event, id = null) {
        event.preventDefault();
        dispatch((0,redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_5__/* .setShopCategory */ .Vk)(id));
        onClose();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                className: (_mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                onClick: filterByCategory,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                    children: t("all")
                })
            }),
            data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    className: (_mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                    onClick: (event)=>filterByCategory(event, item.id),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_mobileShopCategories_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                        children: item.translation.title
                    })
                }, item.id))
        ]
    });
}


/***/ })

};
;