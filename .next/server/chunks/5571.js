exports.id = 5571;
exports.ids = [5571];
exports.modules = {

/***/ 89370:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "v3_wrapper__3qJgj",
	"overlay": "v3_overlay__7rsQ1",
	"header": "v3_header__OerbF",
	"body": "v3_body__X_ic_",
	"title": "v3_title__GZoOH",
	"text": "v3_text__hv_6k"
};


/***/ }),

/***/ 5571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StoreCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89370);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v3_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95785);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);
/* harmony import */ var utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4943);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18074);
/* harmony import */ var components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83626);









function StoreCard({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/shop/${data.id}`,
        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().overlay),
                style: {
                    backgroundImage: `url(${data.logo_img})`
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    fill: true,
                    src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(data.logo_img),
                    alt: data.translation?.title,
                    sizes: "140px"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: [
                            data.translation?.title,
                            data?.verify === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                        children: [
                            t("delivery.with.in"),
                            " ",
                            data.delivery_time?.to,
                            " ",
                            t((0,utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(data.delivery_time?.type))
                        ]
                    })
                ]
            })
        ]
    });
}


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