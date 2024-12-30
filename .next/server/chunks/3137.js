exports.id = 3137;
exports.ids = [3137];
exports.modules = {

/***/ 43914:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "category_container__1Vzoj",
	"wrapper": "category_wrapper__LvgcB",
	"title": "category_title__DEgIU",
	"item": "category_item__2V8a7",
	"imgWrapper": "category_imgWrapper__ogfE1",
	"card": "category_card__SPmic",
	"text": "category_text__PAMg_",
	"moreBtn": "category_moreBtn__l0WZD",
	"shimmer": "category_shimmer__yD0k_"
};


/***/ }),

/***/ 43137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _category_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43914);
/* harmony import */ var _category_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_category_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37562);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);







function CategoryContainer({ categories =[] , loading , hasNextPage  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: t("hero.title")
                    }),
                    !loading ? categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/shop-category/${item.uuid}`,
                                className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                                        children: item.translation?.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgWrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            src: item.img,
                                            alt: item.translation?.title
                                        })
                                    })
                                ]
                            })
                        }, item.uuid)) : Array.from(new Array(10)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                            variant: "rectangular",
                            className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shimmer)
                        }, "shopCategory" + idx)),
                    hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/shop-category",
                        className: (_category_module_scss__WEBPACK_IMPORTED_MODULE_6___default().moreBtn),
                        children: t("see.all")
                    })
                ]
            })
        })
    });
}


/***/ })

};
;