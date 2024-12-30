exports.id = 5613;
exports.ids = [5613];
exports.modules = {

/***/ 81492:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "bannerSingle_banner__kN2kr",
	"wrapper": "bannerSingle_wrapper__xyQZd"
};


/***/ }),

/***/ 32947:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "carouselArrows_btn__5gqN5",
	"next": "carouselArrows_next__d5Bj1",
	"prev": "carouselArrows_prev__LrJLV"
};


/***/ }),

/***/ 79999:
/***/ ((module) => {

// Exports
module.exports = {
	"story": "parcelCard_story__wwo0A",
	"wrapper": "parcelCard_wrapper___MMbN",
	"title": "parcelCard_title__AN9LW"
};


/***/ }),

/***/ 26040:
/***/ ((module) => {

// Exports
module.exports = {
	"story": "storySingle_story__I_LwW",
	"wrapper": "storySingle_wrapper__r0f_S",
	"title": "storySingle_title__TA66I",
	"logo": "storySingle_logo__D7t2m",
	"logoWrapper": "storySingle_logoWrapper__sDbvg",
	"shopTitle": "storySingle_shopTitle__gL9cG"
};


/***/ }),

/***/ 85826:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "banner_container__ZEunx",
	"banner": "banner_banner__D8D5Q",
	"storyContainer": "banner_storyContainer__fKZoU",
	"shimmerContainer": "banner_shimmerContainer__hKSIU",
	"shimmer": "banner_shimmer__tp1rt",
	"bannerContainer": "banner_bannerContainer__E7T_G"
};


/***/ }),

/***/ 23018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BannerSingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bannerSingle_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81492);
/* harmony import */ var _bannerSingle_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bannerSingle_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95785);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);






function BannerSingle({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/promotion/${data.id}`,
        className: (_bannerSingle_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banner),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_bannerSingle_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fill: true,
                src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(data.img),
                alt: data.translation?.title,
                sizes: "360px",
                quality: 90,
                priority: true
            })
        })
    });
}


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

/***/ 54726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParcelCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parcelCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79999);
/* harmony import */ var _parcelCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_parcelCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18074);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37562);






function ParcelCard({}) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/parcel-checkout",
        className: (_parcelCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().story),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_parcelCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_parcelCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                    children: t("door.to.door.delivery")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    src: "/images/parcel.jpeg",
                    alt: "Parcel"
                })
            ]
        })
    });
}


/***/ }),

/***/ 68944:
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
/* harmony import */ var _storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26040);
/* harmony import */ var _storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37490);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95785);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getStoryImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78107);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37562);









const StoryContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\storySingle\\storySingle.tsx -> " + "containers/story/story"
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
            !!firstStory && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story),
                onClick: goToStory,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                                children: firstStory.product_title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                fill: true,
                                src: (0,utils_getStoryImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(firstStory.url),
                                alt: firstStory.product_title,
                                sizes: "130px",
                                quality: 90,
                                priority: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoWrapper),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                fill: true,
                                src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(firstStory.logo_img),
                                alt: firstStory.title,
                                sizes: "38px",
                                quality: 90,
                                priority: true
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shopTitle),
                        children: firstStory.title
                    })
                ]
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

/***/ 75613:
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
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85826);
/* harmony import */ var _banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_banner_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var components_storySingle_storySingle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68944);
/* harmony import */ var components_bannerSingle_bannerSingle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23018);
/* harmony import */ var components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68707);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_parcelCard_parcelCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54726);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const bannerSettings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "banner-swiper full-width",
    breakpoints: {
        1140: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
};
const storySettings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "story-swiper full-width",
    breakpoints: {
        1140: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
};
function BannerContainer({ stories , banners , loadingStory , loadingBanner  }) {
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_8__/* .useSettings */ .r)();
    const activeParcel = Number(settings?.active_parcel) === 1;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().banner),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().storyContainer),
                        children: !loadingStory ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            ...storySettings,
                            slidesPerView: "auto",
                            children: [
                                activeParcel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_parcelCard_parcelCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                }),
                                stories?.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_storySingle_storySingle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: item,
                                            list: stories
                                        })
                                    }, idx))
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmerContainer),
                            children: Array.from(new Array(4)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
                                    variant: "rectangular",
                                    className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmer)
                                }, "story" + idx))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bannerContainer),
                        children: !loadingBanner ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            ...bannerSettings,
                            slidesPerView: "auto",
                            children: [
                                banners.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_bannerSingle_bannerSingle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            data: item
                                        })
                                    }, item.id)),
                                banners.length > 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__/* .PrevButton */ .Q, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_5__/* .NextButton */ .a, {})
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmerContainer),
                            children: Array.from(new Array(2)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
                                    variant: "rectangular",
                                    className: (_banner_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmer)
                                }, "banner" + idx))
                        })
                    })
                ]
            })
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