exports.id = 2321;
exports.ids = [2321];
exports.modules = {

/***/ 32588:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "v2_banner__7q5Xu",
	"wrapper": "v2_wrapper__dy_3q"
};


/***/ }),

/***/ 67830:
/***/ ((module) => {

// Exports
module.exports = {
	"story": "v2_story__xnCzt",
	"wrapper": "v2_wrapper__T3MHe",
	"title": "v2_title__K3MPh",
	"logo": "v2_logo__Y75in",
	"logoWrapper": "v2_logoWrapper__s95LQ",
	"shopTitle": "v2_shopTitle__RL9gK"
};


/***/ }),

/***/ 99818:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v2_container__ceZgN",
	"header": "v2_header__AdwOZ",
	"title": "v2_title__u7bGb",
	"link": "v2_link__Xp81t",
	"banner": "v2_banner__FFLHj",
	"space": "v2_space__9mtsc",
	"storyContainer": "v2_storyContainer__FslF1",
	"shimmerContainer": "v2_shimmerContainer__jGRSn",
	"shimmer": "v2_shimmer__PIA65",
	"bannerContainer": "v2_bannerContainer__EBNf9",
	"actions": "v2_actions__vfb6W",
	"moreBtn": "v2_moreBtn__MenSX",
	"icon": "v2_icon__uW4Tu",
	"text": "v2_text__LHUKd",
	"muted": "v2_muted__i9yHG"
};


/***/ }),

/***/ 72229:
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
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32588);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95785);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);






function BannerSingle({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/promotion/${data.id}`,
        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banner),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
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

/***/ 48295:
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
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67830);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37490);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95785);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getStoryImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78107);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37562);









const StoryContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\storySingle\\v2.tsx -> " + "containers/story/v2"
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
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story),
                onClick: goToStory,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
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
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoWrapper),
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
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shopTitle),
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
                ],
                fullScreen: true
            })
        ]
    });
}


/***/ }),

/***/ 12321:
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
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99818);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var components_storySingle_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48295);
/* harmony import */ var components_bannerSingle_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72229);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18074);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const bannerSettings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "banner-swiper full-width",
    breakpoints: {
        1140: {
            slidesPerView: 2,
            spaceBetween: 30
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
            spaceBetween: 30
        }
    }
};
function BannerContainer({ stories , banners , loadingStory , loadingBanner , bannerCount =0  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)("(max-width:1139px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                            children: t("offers")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                            href: "/promotion",
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().link),
                            children: t("see.all")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().banner),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().storyContainer),
                            children: !loadingStory ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                ...storySettings,
                                slidesPerView: "auto",
                                children: stories?.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_storySingle_v2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: item,
                                            list: stories
                                        })
                                    }, idx))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmerContainer),
                                children: Array.from(new Array(isMobile ? 3 : 4)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "rectangular",
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmer)
                                    }, "story" + idx))
                            })
                        }),
                        !loadingStory && !!stories?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().space)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bannerContainer),
                            children: !loadingBanner ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                ...bannerSettings,
                                slidesPerView: "auto",
                                children: banners.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_bannerSingle_v2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            data: item
                                        })
                                    }, item.id))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmerContainer),
                                children: Array.from(new Array(2)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "rectangular",
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shimmer)
                                    }, "banner" + idx))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().actions),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: "/promotion",
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().moreBtn),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().icon),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
                                        children: t("view.all")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_9___default().muted),
                                        children: t("number.of.offers", {
                                            number: bannerCount
                                        })
                                    })
                                ]
                            })
                        })
                    ]
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