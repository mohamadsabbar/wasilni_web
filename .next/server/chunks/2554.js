exports.id = 2554;
exports.ids = [2554];
exports.modules = {

/***/ 38484:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "badge_badge__BHeKC",
	"default": "badge_default__18BvY",
	"circle": "badge_circle__mQVZ_",
	"text": "badge_text__cdsyf",
	"large": "badge_large__bhCOW",
	"medium": "badge_medium__3BTPx",
	"bonus": "badge_bonus__Ice67",
	"discount": "badge_discount__gVAeQ",
	"popular": "badge_popular__ywwJB"
};


/***/ }),

/***/ 12554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _badge_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38484);
/* harmony import */ var _badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_Gift2FillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27013);
/* harmony import */ var remixicon_react_Gift2FillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Gift2FillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_PercentFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42331);
/* harmony import */ var remixicon_react_PercentFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_PercentFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_FlashlightFillIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80062);
/* harmony import */ var remixicon_react_FlashlightFillIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_FlashlightFillIcon__WEBPACK_IMPORTED_MODULE_5__);







function Badge({ type , variant ="default" , size ="medium"  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    switch(type){
        case "bonus":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: `${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().badge)} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bonus)} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[variant]} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[size]}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Gift2FillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                        children: t("bonus")
                    })
                ]
            });
        case "discount":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: `${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().badge)} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().discount)} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[variant]} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[size]}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_PercentFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                        children: t("discount")
                    })
                ]
            });
        case "popular":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: `${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().badge)} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().popular)} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[variant]} ${(_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[size]}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_FlashlightFillIcon__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_badge_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                        children: t("popular")
                    })
                ]
            });
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {});
    }
}


/***/ })

};
;