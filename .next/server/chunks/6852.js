exports.id = 6852;
exports.ids = [6852];
exports.modules = {

/***/ 56609:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "shopCategoryHeader_wrapper__ooFo3",
	"breadcrumbs": "shopCategoryHeader_breadcrumbs__RCoC_",
	"item": "shopCategoryHeader_item__dwCS8",
	"text": "shopCategoryHeader_text__CLASM",
	"link": "shopCategoryHeader_link__Rbvb1",
	"icon": "shopCategoryHeader_icon__G0iUT",
	"title": "shopCategoryHeader_title__RjNUp"
};


/***/ }),

/***/ 36852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopCategoryHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56609);
/* harmony import */ var _shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4__);






function ShopCategoryHeader({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().breadcrumbs),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link),
                                children: t("home.page")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                                children: data?.translation?.title
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_shopCategoryHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                    children: data?.translation?.title
                })
            ]
        })
    });
}


/***/ })

};
;