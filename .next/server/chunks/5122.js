exports.id = 5122;
exports.ids = [5122];
exports.modules = {

/***/ 74823:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "shopLogoBackground_logo___G4ih",
	"logoWrapper": "shopLogoBackground_logoWrapper__nn0iU",
	"shimmer": "shopLogoBackground_shimmer__0MFMI",
	"large": "shopLogoBackground_large__wEZiZ",
	"small": "shopLogoBackground_small__xIUwZ",
	"medium": "shopLogoBackground_medium__pEnNf"
};


/***/ }),

/***/ 45122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShopLogoBackground)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopLogoBackground_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74823);
/* harmony import */ var _shopLogoBackground_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopLogoBackground_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95785);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);






function ShopLogoBackground({ data , size ="medium" , loading =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_shopLogoBackground_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo)} ${(_shopLogoBackground_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[size]}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_shopLogoBackground_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logoWrapper),
            children: !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fill: true,
                src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(data?.logo_img),
                alt: data?.translation?.title,
                sizes: "(max-width: 768px) 40px, 60px",
                quality: 90
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                variant: "rectangular",
                className: (_shopLogoBackground_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shimmer)
            })
        })
    });
}


/***/ })

};
;