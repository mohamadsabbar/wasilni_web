exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 22856:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v3_container__VJbA0",
	"header": "v3_header__V5gpj",
	"title": "v3_title__VDiBf",
	"link": "v3_link__FtWi9",
	"wrapper": "v3_wrapper__SELyT",
	"item": "v3_item__T3IFx",
	"shimmer": "v3_shimmer__dXNBE"
};


/***/ }),

/***/ 90588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeaturedShopsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22856);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v3_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_shopCard_v3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42148);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18074);







function FeaturedShopsContainer({ title , featuredShops , loading =false , type  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)("(max-width:1139px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container",
        style: {
            display: !loading && featuredShops.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: `/shop?filter=${type}`,
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link),
                            children: t("see.all")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                    children: !loading ? featuredShops.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopCard_v3__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                data: item
                            })
                        }, "shopv3-" + item.id)) : Array.from(new Array(isMobile ? 4 : 8)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                            variant: "rectangular",
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shimmer)
                        }, "shopv3-shimmer-" + idx))
                })
            ]
        })
    });
}


/***/ })

};
;