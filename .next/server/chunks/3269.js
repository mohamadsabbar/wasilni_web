exports.id = 3269;
exports.ids = [3269];
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

/***/ 43300:
/***/ ((module) => {

// Exports
module.exports = {
	"story": "v3_story__Iq039",
	"wrapper": "v3_wrapper__w29gL",
	"backdrop": "v3_backdrop__dC1xM",
	"body": "v3_body__aIiZ_",
	"shopTitle": "v3_shopTitle__Jx9v9",
	"title": "v3_title__Qp_yq"
};


/***/ }),

/***/ 41471:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v3_container__vul2K",
	"header": "v3_header__awayv",
	"title": "v3_title__awIw2",
	"banner": "v3_banner__WKt0F",
	"storyContainer": "v3_storyContainer___jqiE",
	"shimmerContainer": "v3_shimmerContainer__eGesS",
	"shimmer": "v3_shimmer___BV4f"
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

/***/ 44865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StorySingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43300);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v3_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37490);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getStoryImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78107);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37562);








const StoryContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\storySingle\\v3.tsx -> " + "containers/story/story"
        ]
    },
    ssr: false
});
function StorySingle({ data , list  }) {
    const [open, handleOpen, handleClose] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const firstStory = data[0];
    const filteredList = list.filter((item)=>item[0]?.shop_id !== firstStory?.shop_id);
    const goToStory = (event)=>{
        event.preventDefault();
        handleOpen();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !!firstStory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story),
                onClick: goToStory,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            fill: true,
                            src: (0,utils_getStoryImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(firstStory.url),
                            alt: firstStory.product_title,
                            sizes: "130px",
                            quality: 90,
                            priority: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().backdrop)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shopTitle),
                                    children: firstStory.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                    children: firstStory.product_title
                                })
                            ]
                        })
                    ]
                })
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoryContainer, {
                open: open,
                onClose: handleClose,
                stories: [
                    data,
                    ...filteredList
                ]
            })
        ]
    });
}


/***/ }),

/***/ 73269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BannerContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41471);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_v3_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var components_storySingle_v3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44865);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18074);
/* harmony import */ var components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const storySettings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "story-swiper-v3 full-width",
    breakpoints: {
        1140: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
};
function BannerContainer({ stories , loadingStory  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)("(max-width:1139px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
        style: {
            display: !loadingStory && stories?.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                        children: t("offers")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default().banner),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default().storyContainer),
                        children: !loadingStory ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            ...storySettings,
                            slidesPerView: "auto",
                            children: [
                                stories?.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_storySingle_v3__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: item,
                                            list: stories
                                        })
                                    }, idx)),
                                Number(stories?.length) > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_6__/* .NextButton */ .a, {})
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default().shimmerContainer),
                            children: Array.from(new Array(isMobile ? 2 : 5)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                                    variant: "rectangular",
                                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_7___default().shimmer)
                                }, "storyv3-" + idx))
                        })
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getStoryImage)
/* harmony export */ });
function getStoryImage(img) {
    // return BASE_URL + "/storage/" + img;
    return img;
}


/***/ })

};
;