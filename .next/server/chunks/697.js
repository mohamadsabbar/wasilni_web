exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 88609:
/***/ ((module) => {

// Exports
module.exports = {
	"banners": "v4_banners__CeFFb",
	"swiperItem": "v4_swiperItem__C1Ja0",
	"swiperLoadingItem": "v4_swiperLoadingItem__19gae",
	"swiperBtnPrev": "v4_swiperBtnPrev__pnRen",
	"swiperBtnNext": "v4_swiperBtnNext__duT_6",
	"swiper-slide-active": "v4_swiper-slide-active__j5tAf",
	"bannerImg": "v4_bannerImg__s6nVh",
	"shimmer": "v4_shimmer__wrKhf"
};


/***/ }),

/***/ 20697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BannerList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88609);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_v4_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function BannerList({ data , loading  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    if (data?.length === 0 && !loading) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().banners),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
            centeredSlides: true,
            spaceBetween: 30,
            initialSlide: 1,
            slidesPerView: "auto",
            navigation: {
                prevEl: `.${(_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiperBtnPrev)}`,
                nextEl: `.${(_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiperBtnNext)}`
            },
            loop: true,
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
            ],
            children: [
                loading ? Array.from(Array(3).keys()).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiperLoadingItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().shimmer),
                            variant: "rectangular"
                        })
                    }, item)) : data?.map((banner)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiperItem),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "shadowLeft"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>banner.clickable === 1 ? router.push(`/promotion/${banner.id}`) : {},
                                className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().bannerImg),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: banner.img,
                                    priority: true,
                                    alt: banner.translation?.title || "banner_img",
                                    title: banner.translation?.title,
                                    fill: true,
                                    sizes: "(max-width: 992px) 70vw, (max-width: 768px) 50vw, (max-width: 450px) 30vw"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "shadowRight"
                            })
                        ]
                    }, banner.id)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiperBtnPrev),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                clipPath: "url(#clip0_203_2393)",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M10.8283 12L15.7783 16.95L14.3643 18.364L8.00032 12L14.3643 5.63601L15.7783 7.05001L10.8283 12Z",
                                    fill: "white"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                    id: "clip0_203_2393",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        width: "24",
                                        height: "24",
                                        fill: "white",
                                        transform: "matrix(-1 0 0 -1 24 24)"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().swiperBtnNext),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                clipPath: "url(#clip0_203_2388)",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M13.1717 12L8.22168 7.04999L9.63568 5.63599L15.9997 12L9.63568 18.364L8.22168 16.95L13.1717 12Z",
                                    fill: "white"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                    id: "clip0_203_2388",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        width: "24",
                                        height: "24",
                                        fill: "white"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;