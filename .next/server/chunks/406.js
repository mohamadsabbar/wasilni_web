exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 16565:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v2_container__ToQDn",
	"wrapper": "v2_wrapper__WloUJ",
	"body": "v2_body__m037V",
	"title": "v2_title___2hKU",
	"caption": "v2_caption__Qj7FN",
	"actions": "v2_actions__AmS0I",
	"imgWrapper": "v2_imgWrapper__89hYc"
};


/***/ }),

/***/ 20406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParcelCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16565);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80892);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);







function ParcelCard({}) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                children: t("door.to.door.delivery")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().caption),
                                children: t("door.to.door.delivery.service")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            onClick: ()=>push("/parcel-checkout"),
                            children: t("learn.more")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            src: "/images/parcel-2.png",
                            alt: "Parcel"
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;