exports.id = 1855;
exports.ids = [1855];
exports.modules = {

/***/ 20445:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "shopBadges_badge__NpYKe"
};


/***/ }),

/***/ 83626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VerifiedComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6684);


function VerifiedComponent() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        style: {
            display: "block",
            width: "16px",
            height: "auto"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_1__/* .VerifiedIcon */ .SA, {})
    });
}


/***/ }),

/***/ 34364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShopBadges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopBadges_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20445);
/* harmony import */ var _shopBadges_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopBadges_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_badge_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12554);




function ShopBadges({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_shopBadges_module_scss__WEBPACK_IMPORTED_MODULE_3___default().badge),
        children: [
            data.is_recommended && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge_badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                type: "popular",
                variant: !!data.discount?.length || !!data.bonus ? "circle" : "default",
                size: "large"
            }),
            !!data.discount?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge_badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                type: "discount",
                variant: data.is_recommended || !!data.bonus ? "circle" : "default",
                size: "large"
            }),
            !!data.bonus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge_badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                type: "bonus",
                variant: data.is_recommended || !!data.discount?.length ? "circle" : "default",
                size: "large"
            })
        ]
    });
}


/***/ }),

/***/ 4943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getShortTimeType)
/* harmony export */ });
function getShortTimeType(type) {
    switch(type){
        case "minute":
            return "min";
        case "hour":
            return "h";
        default:
            return "min";
    }
}


/***/ })

};
;