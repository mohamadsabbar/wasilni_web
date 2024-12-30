exports.id = 4484;
exports.ids = [4484];
exports.modules = {

/***/ 29402:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "v2_wrapper__W7TpC",
	"closed": "v2_closed__dKBQs",
	"header": "v2_header__UnmBY",
	"closedText": "v2_closedText__iQgAo",
	"body": "v2_body__s_hmA",
	"main": "v2_main__l8cSh",
	"logoWrapper": "v2_logoWrapper__lC_Fy",
	"title": "v2_title__Jh3nY",
	"flex": "v2_flex__FzkbN",
	"text": "v2_text__Iq_yl",
	"dot": "v2_dot__bB1d3"
};


/***/ }),

/***/ 95219:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "v2_wrapper__b7aau",
	"container": "v2_container__S0SIF",
	"header": "v2_header__z0EcD",
	"title": "v2_title__gazgw",
	"actions": "v2_actions__Nqfwh",
	"link": "v2_link__bzndu",
	"arrows": "v2_arrows__JQDzJ",
	"btn": "v2_btn__Vm0VB",
	"shimmer": "v2_shimmer__DBHsd"
};


/***/ }),

/***/ 17406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShopCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29402);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95785);
/* harmony import */ var containers_shopBadges_shopBadges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34364);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37562);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18074);
/* harmony import */ var utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4943);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90026);
/* harmony import */ var hooks_useShopWorkingSchedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73444);
/* harmony import */ var components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83626);












function ShopCard({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { isShopClosed  } = (0,hooks_useShopWorkingSchedule__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(data);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/shop/${data.id}`,
        className: `${(_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper)} ${!data.open || isShopClosed ? (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().closed) : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
                children: [
                    (!data.open || isShopClosed) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().closedText),
                        children: t("closed")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        fill: true,
                        src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(data.background_img),
                        alt: data.translation?.title,
                        sizes: "400px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_shopBadges_shopBadges__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: data
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().body),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().main),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                                children: [
                                    data.translation?.title,
                                    data?.verify === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().flex),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                number: data.price
                                            }),
                                            " ",
                                            t("delivery.fee")
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dot)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
                                        children: [
                                            data.delivery_time?.from,
                                            "-",
                                            data.delivery_time?.to,
                                            " ",
                                            t((0,utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(data.delivery_time?.type))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logoWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(data.logo_img),
                            alt: data.translation?.title
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;