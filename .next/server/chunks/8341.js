exports.id = 8341;
exports.ids = [8341];
exports.modules = {

/***/ 26589:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "shopHeroCard_wrapper__Uue2F",
	"header": "shopHeroCard_header__zn_aO",
	"shopTitle": "shopHeroCard_shopTitle__IHt8K",
	"badge": "shopHeroCard_badge__1_Qbh",
	"text": "shopHeroCard_text__3Z2TS"
};


/***/ }),

/***/ 87270:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "shopLogo_logo__RFCaX",
	"small": "shopLogo_small__i3Fyo",
	"medium": "shopLogo_medium__H_Sj8",
	"large": "shopLogo_large__kA_9P",
	"wrapper": "shopLogo_wrapper__f0LZd"
};


/***/ }),

/***/ 68201:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "featuredShopsContainer_container__xCWwg",
	"header": "featuredShopsContainer_header__74dRF",
	"title": "featuredShopsContainer_title__ix0Xp",
	"actions": "featuredShopsContainer_actions__sLHID",
	"btn": "featuredShopsContainer_btn__IdiIR",
	"shimmerContainer": "featuredShopsContainer_shimmerContainer__VT_Vv",
	"shimmer": "featuredShopsContainer_shimmer__c1Dyj"
};


/***/ }),

/***/ 52293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShopHeroCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26589);
/* harmony import */ var _shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_shopLogo_shopLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92244);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95785);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37562);
/* harmony import */ var components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83626);









function ShopHeroCard({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/restaurant/${data.id}`,
        className: (_shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopLogo_shopLogo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: data,
                        size: "small"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        className: (_shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().shopTitle),
                        children: [
                            data.translation?.title,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fill: true,
                src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(data.background_img),
                alt: data.translation?.title,
                sizes: "400px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().badge),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_shopHeroCard_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                    children: t("number.of.foods", {
                        count: data.products_count || 0
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 92244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShopLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopLogo_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87270);
/* harmony import */ var _shopLogo_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopLogo_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95785);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37562);





function ShopLogo({ data , size ="medium"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_shopLogo_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo)} ${(_shopLogo_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_shopLogo_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                fill: true,
                src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(data.logo_img),
                alt: data.translation?.title,
                sizes: "(max-width: 768px) 40px, 60px",
                quality: 90
            })
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

/***/ 68341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeaturedShopsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68201);
/* harmony import */ var _featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_shopHeroCard_shopHeroCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52293);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53015);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71116);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
swiper_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const settings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "featured-shops full-width",
    breakpoints: {
        1140: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    }
};
function FeaturedShopsContainer({ title , featuredShops , loading =false  }) {
    const [swiperRef, setSwiperRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const storyNext = ()=>{
        swiperRef?.slideNext();
    };
    const storyPrev = ()=>{
        swiperRef?.slidePrev();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container",
        style: {
            display: !loading && featuredShops.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                            children: title
                        }),
                        featuredShops.length > 6 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn),
                                    onClick: storyPrev,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn),
                                    onClick: storyNext,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                })
                            ]
                        })
                    ]
                }),
                !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    ...settings,
                    slidesPerView: "auto",
                    onSwiper: setSwiperRef,
                    children: featuredShops.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopHeroCard_shopHeroCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                data: item
                            })
                        }, item.id))
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().shimmerContainer),
                    children: Array.from(new Array(6)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                            variant: "rectangular",
                            className: (_featuredShopsContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().shimmer)
                        }, "recomended" + idx))
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