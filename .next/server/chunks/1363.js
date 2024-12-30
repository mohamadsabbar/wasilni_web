exports.id = 1363;
exports.ids = [1363];
exports.modules = {

/***/ 65209:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "shopCard_wrapper__eLDR6",
	"closed": "shopCard_closed__R2PKb",
	"header": "shopCard_header__ndTnF",
	"closedText": "shopCard_closedText__plYTV",
	"body": "shopCard_body__RaioU",
	"shopLogo": "shopCard_shopLogo__YBVUk",
	"title": "shopCard_title__ZOeFL",
	"text": "shopCard_text__N8BjM",
	"footer": "shopCard_footer__dVPVw",
	"flex": "shopCard_flex__7Xj_R",
	"ratingIcon": "shopCard_ratingIcon___i8oO",
	"greenDot": "shopCard_greenDot__URj0M",
	"dot": "shopCard_dot__b_bPy"
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

/***/ 94437:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "shopList_container__dXd4J",
	"header": "shopList_header__8uPMd",
	"title": "shopList_title__D3BSf",
	"shimmer": "shopList_shimmer__tOM85"
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

/***/ 41363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShopList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/shopList/shopList.module.scss
var shopList_module = __webpack_require__(94437);
var shopList_module_default = /*#__PURE__*/__webpack_require__.n(shopList_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./components/shopCard/shopCard.module.scss
var shopCard_module = __webpack_require__(65209);
var shopCard_module_default = /*#__PURE__*/__webpack_require__.n(shopCard_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/shopLogo/shopLogo.tsx
var shopLogo = __webpack_require__(92244);
// EXTERNAL MODULE: external "remixicon-react/RunFillIcon"
var RunFillIcon_ = __webpack_require__(16953);
var RunFillIcon_default = /*#__PURE__*/__webpack_require__.n(RunFillIcon_);
// EXTERNAL MODULE: external "remixicon-react/StarSmileFillIcon"
var StarSmileFillIcon_ = __webpack_require__(36487);
var StarSmileFillIcon_default = /*#__PURE__*/__webpack_require__.n(StarSmileFillIcon_);
// EXTERNAL MODULE: ./utils/getImage.ts
var getImage = __webpack_require__(95785);
// EXTERNAL MODULE: ./components/bonusCaption/bonusCaption.tsx
var bonusCaption = __webpack_require__(54215);
// EXTERNAL MODULE: ./containers/shopBadges/shopBadges.tsx
var shopBadges = __webpack_require__(34364);
// EXTERNAL MODULE: ./components/fallbackImage/fallbackImage.tsx
var fallbackImage = __webpack_require__(37562);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: ./utils/getShortTimeType.ts
var getShortTimeType = __webpack_require__(4943);
// EXTERNAL MODULE: ./hooks/useShopWorkingSchedule.tsx
var useShopWorkingSchedule = __webpack_require__(73444);
// EXTERNAL MODULE: ./components/verifiedComponent/verifiedComponent.tsx
var verifiedComponent = __webpack_require__(83626);
;// CONCATENATED MODULE: ./components/shopCard/shopCard.tsx















function ShopCard({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    const { isShopClosed  } = (0,useShopWorkingSchedule/* default */.Z)(data);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `/shop/${data.id}`,
        className: `${(shopCard_module_default()).wrapper} ${!data.open || isShopClosed ? (shopCard_module_default()).closed : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (shopCard_module_default()).header,
                children: [
                    (!data.open || isShopClosed) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (shopCard_module_default()).closedText,
                        children: t("closed")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fallbackImage/* default */.Z, {
                        fill: true,
                        src: (0,getImage/* default */.Z)(data.background_img),
                        alt: data.translation?.title,
                        sizes: "400px"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (shopCard_module_default()).body,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (shopCard_module_default()).shopLogo,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(shopLogo/* default */.Z, {
                            data: data
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(shopBadges/* default */.Z, {
                        data: data
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: (shopCard_module_default()).title,
                        children: [
                            data.translation?.title,
                            data?.verify === 1 && /*#__PURE__*/ jsx_runtime_.jsx(verifiedComponent/* default */.Z, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (shopCard_module_default()).text,
                        children: data.bonus ? /*#__PURE__*/ jsx_runtime_.jsx(bonusCaption/* default */.Z, {
                            data: data.bonus
                        }) : (data.translation?.description)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (shopCard_module_default()).footer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (shopCard_module_default()).flex,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (shopCard_module_default()).greenDot
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((RunFillIcon_default()), {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (shopCard_module_default()).text,
                                children: [
                                    data.delivery_time?.from,
                                    "-",
                                    data.delivery_time?.to,
                                    " ",
                                    t((0,getShortTimeType/* default */.Z)(data.delivery_time?.type))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (shopCard_module_default()).dot
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (shopCard_module_default()).flex,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((StarSmileFillIcon_default()), {
                                className: (shopCard_module_default()).ratingIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (shopCard_module_default()).text,
                                children: data.rating_avg?.toFixed(1) || 0
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./containers/shopList/shopList.tsx





function ShopList({ title , shops , loading  }) {
    const isDesktop = (0,material_.useMediaQuery)("(min-width:1140px)");
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "container",
        style: {
            display: !loading && shops.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (shopList_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (shopList_module_default()).header,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (shopList_module_default()).title,
                        children: title
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    container: true,
                    spacing: isDesktop ? 4 : 2,
                    children: !loading ? shops.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ShopCard, {
                                data: item
                            })
                        }, item.id)) : Array.from(new Array(4)).map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                variant: "rectangular",
                                className: (shopList_module_default()).shimmer
                            })
                        }, "shops" + idx))
                })
            ]
        })
    });
}


/***/ })

};
;