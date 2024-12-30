exports.id = 9829;
exports.ids = [9829];
exports.modules = {

/***/ 82448:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "v4_badge__9ADWl",
	"default": "v4_default__JLjJa",
	"circle": "v4_circle__eRbxm",
	"text": "v4_text__1Dj7F",
	"large": "v4_large__Ll7G5",
	"medium": "v4_medium__jAIdT",
	"icon": "v4_icon__MpBTh"
};


/***/ }),

/***/ 6011:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "v4_wrapper__6nCPj",
	"closed": "v4_closed__rJMxv",
	"header": "v4_header__jVmlz",
	"closedText": "v4_closedText__3fdUs",
	"body": "v4_body__GHvQ4",
	"content": "v4_content__FqpcC",
	"title": "v4_title__VdYK0",
	"flex": "v4_flex__cPYyA",
	"text": "v4_text__KNjw5",
	"rating": "v4_rating__wlSLq",
	"dot": "v4_dot__lAwmp",
	"shopLogo": "v4_shopLogo__Z54na",
	"footer": "v4_footer__wlv9L",
	"greenDot": "v4_greenDot__A8W7d"
};


/***/ }),

/***/ 20372:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "v4_badge__fiwcD"
};


/***/ }),

/***/ 87641:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v4_container__slCjP",
	"header": "v4_header__7O5L4",
	"title": "v4_title__pnsu5",
	"link": "v4_link__Tmyxl",
	"shimmer": "v4_shimmer__kHT1Z"
};


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

/***/ 59829:
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
// EXTERNAL MODULE: ./containers/shopList/v4.module.scss
var v4_module = __webpack_require__(87641);
var v4_module_default = /*#__PURE__*/__webpack_require__.n(v4_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./components/shopCard/v4.module.scss
var shopCard_v4_module = __webpack_require__(6011);
var shopCard_v4_module_default = /*#__PURE__*/__webpack_require__.n(shopCard_v4_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/getImage.ts
var getImage = __webpack_require__(95785);
// EXTERNAL MODULE: ./containers/shopBadges/v4.module.scss
var shopBadges_v4_module = __webpack_require__(20372);
var shopBadges_v4_module_default = /*#__PURE__*/__webpack_require__.n(shopBadges_v4_module);
// EXTERNAL MODULE: ./components/badge/v4.module.scss
var badge_v4_module = __webpack_require__(82448);
var badge_v4_module_default = /*#__PURE__*/__webpack_require__.n(badge_v4_module);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(69709);
// EXTERNAL MODULE: external "remixicon-react/Gift2FillIcon"
var Gift2FillIcon_ = __webpack_require__(27013);
var Gift2FillIcon_default = /*#__PURE__*/__webpack_require__.n(Gift2FillIcon_);
// EXTERNAL MODULE: external "remixicon-react/PercentFillIcon"
var PercentFillIcon_ = __webpack_require__(42331);
var PercentFillIcon_default = /*#__PURE__*/__webpack_require__.n(PercentFillIcon_);
// EXTERNAL MODULE: external "remixicon-react/FlashlightFillIcon"
var FlashlightFillIcon_ = __webpack_require__(80062);
var FlashlightFillIcon_default = /*#__PURE__*/__webpack_require__.n(FlashlightFillIcon_);
;// CONCATENATED MODULE: ./components/badge/v4.tsx







function Badge({ type ="bonus" , variant ="default" , size ="medium"  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    switch(type){
        case "bonus":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `${(badge_v4_module_default()).badge} ${(badge_v4_module_default()).bonus} ${(badge_v4_module_default())[variant]} ${(badge_v4_module_default())[size]}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (badge_v4_module_default()).text,
                        children: t("bonus")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (badge_v4_module_default()).icon,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Gift2FillIcon_default()), {})
                    })
                ]
            });
        case "discount":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `${(badge_v4_module_default()).badge} ${(badge_v4_module_default()).discount} ${(badge_v4_module_default())[variant]} ${(badge_v4_module_default())[size]}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (badge_v4_module_default()).text,
                        children: t("discount")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (badge_v4_module_default()).icon,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((PercentFillIcon_default()), {})
                    })
                ]
            });
        case "popular":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `${(badge_v4_module_default()).badge} ${(badge_v4_module_default()).popular} ${(badge_v4_module_default())[variant]} ${(badge_v4_module_default())[size]}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (badge_v4_module_default()).text,
                        children: t("popular")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (badge_v4_module_default()).icon,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((FlashlightFillIcon_default()), {})
                    })
                ]
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("span", {});
    }
}

;// CONCATENATED MODULE: ./containers/shopBadges/v4.tsx




function ShopBadges({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (shopBadges_v4_module_default()).badge,
        children: [
            data.is_recommended && /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                type: "popular",
                variant: !!data.discount?.length || !!data.bonus ? "circle" : "default",
                size: "large"
            }),
            !!data.discount?.length && /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                type: "discount",
                variant: data.is_recommended || !!data.bonus ? "circle" : "default",
                size: "large"
            }),
            !!data.bonus && /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                type: "bonus",
                variant: data.is_recommended || !!data.discount?.length ? "circle" : "default",
                size: "large"
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/fallbackImage/fallbackImage.tsx
var fallbackImage = __webpack_require__(37562);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: ./utils/getShortTimeType.ts
var getShortTimeType = __webpack_require__(4943);
// EXTERNAL MODULE: ./components/price/price.tsx + 1 modules
var price = __webpack_require__(90026);
// EXTERNAL MODULE: ./hooks/useShopWorkingSchedule.tsx
var useShopWorkingSchedule = __webpack_require__(73444);
// EXTERNAL MODULE: ./components/verifiedComponent/verifiedComponent.tsx
var verifiedComponent = __webpack_require__(83626);
;// CONCATENATED MODULE: ./components/shopCard/v4.tsx












function ShopCard({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    const { isShopClosed  } = (0,useShopWorkingSchedule/* default */.Z)(data);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `/shop/${data.id}`,
        className: `${(shopCard_v4_module_default()).wrapper} ${!data.open || isShopClosed ? (shopCard_v4_module_default()).closed : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (shopCard_v4_module_default()).header,
                children: [
                    (!data.open || isShopClosed) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (shopCard_v4_module_default()).closedText,
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
                className: (shopCard_v4_module_default()).body,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (shopCard_v4_module_default()).content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: (shopCard_v4_module_default()).title,
                                children: [
                                    data.translation?.title,
                                    data?.verify === 1 && /*#__PURE__*/ jsx_runtime_.jsx(verifiedComponent/* default */.Z, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (shopCard_v4_module_default()).flex,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (shopCard_v4_module_default()).text,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(price/* default */.Z, {
                                                number: data.price
                                            }),
                                            " ",
                                            t("delivery.fee")
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (shopCard_v4_module_default()).dot
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (shopCard_v4_module_default()).text,
                                        children: [
                                            data.delivery_time?.from,
                                            "-",
                                            data.delivery_time?.to,
                                            " ",
                                            t((0,getShortTimeType/* default */.Z)(data.delivery_time?.type))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (shopCard_v4_module_default()).rating,
                        children: data.rating_avg?.toFixed(1) || 0
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (shopCard_v4_module_default()).footer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ShopBadges, {
                    data: data
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./containers/shopList/v4.tsx







function ShopList({ shops , loading , title , link  }) {
    const isDesktop = (0,material_.useMediaQuery)("(min-width:1140px)");
    const { t  } = (0,external_react_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "container",
        style: {
            display: !loading && shops?.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (v4_module_default()).container,
            children: [
                !!title && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (v4_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (v4_module_default()).title,
                            children: title
                        }),
                        !!link && !loading && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: (v4_module_default()).link,
                            href: link,
                            children: t("see.all")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    container: true,
                    spacing: isDesktop ? 4 : 2,
                    children: !loading ? shops?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
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
                                className: (v4_module_default()).shimmer
                            })
                        }, "shops" + idx))
                })
            ]
        })
    });
}


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