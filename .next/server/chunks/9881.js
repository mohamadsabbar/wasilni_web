exports.id = 9881;
exports.ids = [9881];
exports.modules = {

/***/ 32947:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "carouselArrows_btn__5gqN5",
	"next": "carouselArrows_next__d5Bj1",
	"prev": "carouselArrows_prev__LrJLV"
};


/***/ }),

/***/ 76345:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "v2_wrapper__GS4gD",
	"header": "v2_header__7g9U0",
	"body": "v2_body__f0E5y",
	"titleVerify": "v2_titleVerify__RBhBo",
	"title": "v2_title__Ct9uh",
	"text": "v2_text__HdKix"
};


/***/ }),

/***/ 19477:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v2_container__eMpiv",
	"wrapper": "v2_wrapper__8U4Ip",
	"header": "v2_header__ubNCx",
	"title": "v2_title__SJMcx",
	"link": "v2_link__ZLl8n",
	"text": "v2_text__vm9Wj",
	"shimmer": "v2_shimmer__5Cgf6"
};


/***/ }),

/***/ 68707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PrevButton),
/* harmony export */   "a": () => (/* binding */ NextButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71116);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32947);
/* harmony import */ var _carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function NextButton() {
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btn)} ${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().next)}`,
        onClick: ()=>swiper.slideNext(),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
    });
}
function PrevButton() {
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btn)} ${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().prev)}`,
        onClick: ()=>swiper.slidePrev(),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StoreCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76345);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_6__);
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
        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    fill: true,
                    src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(data.logo_img),
                    alt: data.translation?.title,
                    sizes: "140px"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titleVerify),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                children: [
                                    data.translation?.title,
                                    "asd"
                                ]
                            }),
                            data?.verify === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                        children: [
                            data.delivery_time?.from,
                            "-",
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

/***/ 99881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19477);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_storeCard_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88424);
/* harmony import */ var components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const settings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "brand-list full-width",
    slidesPerView: "auto",
    breakpoints: {
        1140: {
            slidesPerView: 8,
            spaceBetween: 30
        }
    }
};
function StoreList({ title , shops , loading  }) {
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)("(max-width:1139px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "container",
            style: {
                display: !loading && shops.length === 0 ? "none" : "block"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                            children: title
                        })
                    }),
                    !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        ...settings,
                        children: [
                            shops.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_storeCard_v2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        data: item
                                    })
                                }, "store" + item.id)),
                            shops.length > 8 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__/* .NextButton */ .a, {})
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        columnSpacing: isMobile ? 1 : 4,
                        children: Array.from(new Array(isMobile ? 4 : 8)).map((_, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 3,
                                md: 2,
                                lg: 1.5,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                    variant: "rectangular",
                                    className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shimmer)
                                })
                            }, "storeShimmer" + idx))
                    })
                ]
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