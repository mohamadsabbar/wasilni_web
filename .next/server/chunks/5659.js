exports.id = 5659;
exports.ids = [5659];
exports.modules = {

/***/ 55276:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "v4_card__Ay6jj",
	"img": "v4_img__fzGVK",
	"content": "v4_content__EPI5n",
	"titleVerify": "v4_titleVerify__bOzlL",
	"title": "v4_title__oqs2P",
	"deliveryTime": "v4_deliveryTime__StP3g"
};


/***/ }),

/***/ 5714:
/***/ ((module) => {

// Exports
module.exports = {
	"shimmer": "v4_shimmer__Cqwie",
	"list": "v4_list__tBhQL",
	"listItem": "v4_listItem__YWsJS"
};


/***/ }),

/***/ 58934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BrandShopCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55276);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v4_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83626);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18074);
/* harmony import */ var utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4943);








function BrandShopCard({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/shop/${data.id}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img),
                    alt: data.translation?.title,
                    src: data.logo_img || "",
                    width: 100,
                    height: 100
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titleVerify),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                    children: data.translation?.title
                                }),
                                data?.verify === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().deliveryTime),
                            children: [
                                data.delivery_time?.from,
                                " - ",
                                data.delivery_time?.to,
                                " ",
                                t((0,utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(data.delivery_time?.type))
                            ]
                        })
                    ]
                })
            ]
        })
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

/***/ 65659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrandShopList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_brandShopCard_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58934);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53015);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5714);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v4_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_4__, swiper_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function BrandShopList({ data , loading  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().list),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {
                navigation: true,
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
                ],
                slidesPerView: "auto",
                spaceBetween: 30,
                breakpoints: {
                    0: {
                        spaceBetween: 10
                    },
                    576: {
                        spaceBetween: 30
                    }
                },
                children: loading ? Array.from(Array(10).keys()).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().listItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shimmer),
                            variant: "rectangular"
                        })
                    }, item)) : data?.map((shop)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {
                        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().listItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_brandShopCard_v4__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            data: shop
                        })
                    }, shop.id))
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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