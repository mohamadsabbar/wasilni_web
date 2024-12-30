exports.id = 2996;
exports.ids = [2996];
exports.modules = {

/***/ 13334:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "shopBanner_container__wJsus",
	"wrapper": "shopBanner_wrapper__K2vYo",
	"collage": "shopBanner_collage__67l8L",
	"item": "shopBanner_item__bDNlN",
	"body": "shopBanner_body__ZB_nH",
	"title": "shopBanner_title__8us4t",
	"desc": "shopBanner_desc__modoq",
	"actions": "shopBanner_actions__2Lbkg"
};


/***/ }),

/***/ 92996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13334);
/* harmony import */ var _shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80892);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







function ShopBanner({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const photos = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return data.slice(0, 4);
    }, [
        data
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().collage),
                        children: photos.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: item.background_img,
                                    alt: item.translation?.title
                                })
                            }, "collage-" + item.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                children: t("shop.banner.title")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().desc),
                                children: t("shop.banner.desc")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_shopBanner_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    onClick: ()=>push("/shop"),
                                    children: t("order.now")
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;