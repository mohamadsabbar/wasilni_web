exports.id = 1880;
exports.ids = [1880];
exports.modules = {

/***/ 47510:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "storeCard_wrapper__sReDc",
	"header": "storeCard_header__2eH18",
	"badge": "storeCard_badge__vizja",
	"text": "storeCard_text__bAV0q",
	"body": "storeCard_body__WNfGf",
	"title": "storeCard_title__QsQ9f"
};


/***/ }),

/***/ 63148:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "storeList_container__04TgH",
	"wrapper": "storeList_wrapper__rqpTu",
	"header": "storeList_header__MytqS",
	"title": "storeList_title__I2yEa",
	"link": "storeList_link__SD9B6",
	"text": "storeList_text__iDn4S",
	"shimmer": "storeList_shimmer__zB3Mj"
};


/***/ }),

/***/ 54215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BonusCaption)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90026);




function BonusCaption({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            t("under"),
            " ",
            data.type === "sum" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                number: data.value
            }) : data.value,
            " +",
            " ",
            t("bonus"),
            " ",
            data.bonusStock?.product.translation?.title
        ]
    });
}


/***/ }),

/***/ 60845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StoreCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47510);
/* harmony import */ var _storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95785);
/* harmony import */ var components_bonusCaption_bonusCaption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54215);
/* harmony import */ var remixicon_react_TaxiFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30287);
/* harmony import */ var remixicon_react_TaxiFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_TaxiFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37562);
/* harmony import */ var utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4943);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18074);
/* harmony import */ var components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83626);











function StoreCard({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/shop/${data.id}`,
        className: (_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        fill: true,
                        src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(data.background_img),
                        alt: data.translation?.title,
                        sizes: "286px"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().badge),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_TaxiFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                                children: [
                                    data.delivery_time?.from,
                                    "-",
                                    data.delivery_time?.to,
                                    " ",
                                    t((0,utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(data.delivery_time?.type))
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: (_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                        children: [
                            data.translation?.title,
                            data?.verify === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifiedComponent_verifiedComponent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_storeCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                        children: data.bonus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_bonusCaption_bonusCaption__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            data: data.bonus
                        }) : (data.translation?.description)
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

/***/ 21880:
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
/* harmony import */ var _storeList_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63148);
/* harmony import */ var _storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_storeCard_storeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60845);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71116);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18074);
/* harmony import */ var contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const settings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "shop-list full-width",
    slidesPerView: "auto",
    breakpoints: {
        1140: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
};
function StoreList({ title , shops , loading  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { direction  } = (0,contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_9__/* .useTheme */ .F)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "container",
            style: {
                display: !loading && shops.length === 0 ? "none" : "block"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/shop",
                                className: (_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().link),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                                        children: t("see.all")
                                    }),
                                    direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_7___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                ]
                            })
                        ]
                    }),
                    !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                        ...settings,
                        children: shops.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_storeCard_storeCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    data: item
                                })
                            }, item.id))
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        columnSpacing: 4,
                        children: Array.from(new Array(5)).map((_, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                lg: 2.4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                    variant: "rectangular",
                                    className: (_storeList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().shimmer)
                                })
                            }, "store" + idx))
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "N": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);


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