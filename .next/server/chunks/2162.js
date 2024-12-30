exports.id = 2162;
exports.ids = [2162,3237];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


/***/ }),

/***/ 48263:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v3_container__q_AK2",
	"header": "v3_header__ciStz",
	"title": "v3_title__8_Ch3",
	"actions": "v3_actions__jySfH",
	"link": "v3_link__I8PiK",
	"arrows": "v3_arrows__L8EeW",
	"btn": "v3_btn__P1J8L",
	"shimmer": "v3_shimmer__fb_A5"
};


/***/ }),

/***/ 37562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FallbackImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48909);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */ 


function FallbackImage({ src , alt , onError  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: src,
        alt: alt,
        className: (_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root),
        onError: onError
    });
}


/***/ }),

/***/ 13237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48263);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_v3_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_shopCard_v3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42148);





function ShopList({ title , shops , loading  }) {
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(min-width:1140px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container",
        style: {
            display: !loading && shops.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
            children: [
                !!title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                        children: title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: isDesktop ? 4 : 2,
                    children: !loading ? shops.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopCard_v3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                data: item
                            })
                        }, item.id)) : Array.from(new Array(isDesktop ? 8 : 4)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                                variant: "rectangular",
                                className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shimmer)
                            })
                        }, "shops" + idx))
                })
            ]
        })
    });
}


/***/ }),

/***/ 95785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getImage)
/* harmony export */ });
// import { IMAGE_URL } from "constants/constants";
function getImage(img) {
    if (img) {
        return img;
    } else {
        return "";
    }
}


/***/ })

};
;