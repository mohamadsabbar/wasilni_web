exports.id = 2148;
exports.ids = [2148];
exports.modules = {

/***/ 57884:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "shopCardDeliveryInfo_wrapper__F9lJB",
	"flex": "shopCardDeliveryInfo_flex__Us1pR",
	"text": "shopCardDeliveryInfo_text__7fTcH"
};


/***/ }),

/***/ 39509:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "v3_wrapper__uK3Zn",
	"closed": "v3_closed__Rt0Yq",
	"header": "v3_header__MvYWm",
	"closedText": "v3_closedText__snyml",
	"body": "v3_body__Vwl9p",
	"title": "v3_title__J_KTT",
	"bottom": "v3_bottom__bTOmJ",
	"desc": "v3_desc__wcnyT",
	"flex": "v3_flex__znqOP",
	"text": "v3_text__BX7pk"
};


/***/ }),

/***/ 87431:
/***/ ((module) => {

// Exports
module.exports = {
	"badge": "v3_badge__i6lSJ",
	"item": "v3_item__PJV6o",
	"green": "v3_green__H2vIZ",
	"red": "v3_red__L8SPQ",
	"blue": "v3_blue__MjK0L"
};


/***/ }),

/***/ 42148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ShopCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./components/shopCard/v3.module.scss
var v3_module = __webpack_require__(39509);
var v3_module_default = /*#__PURE__*/__webpack_require__.n(v3_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/getImage.ts
var getImage = __webpack_require__(95785);
// EXTERNAL MODULE: ./containers/shopBadges/v3.module.scss
var shopBadges_v3_module = __webpack_require__(87431);
var shopBadges_v3_module_default = /*#__PURE__*/__webpack_require__.n(shopBadges_v3_module);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
;// CONCATENATED MODULE: ./containers/shopBadges/v3.tsx




function ShopBadges({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (shopBadges_v3_module_default()).badge,
        children: [
            data.price === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(shopBadges_v3_module_default()).item} ${(shopBadges_v3_module_default()).blue}`,
                children: t("delivery.free")
            }),
            !!data.discount?.length && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(shopBadges_v3_module_default()).item} ${(shopBadges_v3_module_default()).red}`,
                children: t("discount")
            }),
            !!data.bonus && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(shopBadges_v3_module_default()).item} ${(shopBadges_v3_module_default()).green}`,
                children: t("bonus")
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/fallbackImage/fallbackImage.tsx
var fallbackImage = __webpack_require__(37562);
// EXTERNAL MODULE: external "remixicon-react/StarFillIcon"
var StarFillIcon_ = __webpack_require__(93725);
var StarFillIcon_default = /*#__PURE__*/__webpack_require__.n(StarFillIcon_);
// EXTERNAL MODULE: ./components/shopCardDeliveryInfo/shopCardDeliveryInfo.module.scss
var shopCardDeliveryInfo_module = __webpack_require__(57884);
var shopCardDeliveryInfo_module_default = /*#__PURE__*/__webpack_require__.n(shopCardDeliveryInfo_module);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(6684);
// EXTERNAL MODULE: ./utils/getShortTimeType.ts
var getShortTimeType = __webpack_require__(4943);
;// CONCATENATED MODULE: ./components/shopCardDeliveryInfo/shopCardDeliveryInfo.tsx






function ShopCardDeliveryInfo({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (shopCardDeliveryInfo_module_default()).wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (shopCardDeliveryInfo_module_default()).flex,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(icons/* DeliveryIcon */.tM, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: (shopCardDeliveryInfo_module_default()).text,
                    children: [
                        data?.from,
                        "-",
                        data?.to,
                        " ",
                        t((0,getShortTimeType/* default */.Z)(data?.type))
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/verifiedComponent/verifiedComponent.tsx
var verifiedComponent = __webpack_require__(83626);
;// CONCATENATED MODULE: ./components/shopCard/v3.tsx











function ShopCard({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `/shop/${data.id}`,
        className: `${(v3_module_default()).wrapper} ${data.open ? "" : (v3_module_default()).closed}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (v3_module_default()).header,
                children: [
                    !data.open && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (v3_module_default()).closedText,
                        children: t("closed")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fallbackImage/* default */.Z, {
                        fill: true,
                        src: (0,getImage/* default */.Z)(data.background_img),
                        alt: data.translation?.title,
                        sizes: "400px"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ShopBadges, {
                        data: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ShopCardDeliveryInfo, {
                        data: data.delivery_time
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (v3_module_default()).body,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: (v3_module_default()).title,
                        children: [
                            data.translation?.title,
                            data?.verify === 1 && /*#__PURE__*/ jsx_runtime_.jsx(verifiedComponent/* default */.Z, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (v3_module_default()).bottom,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (v3_module_default()).desc,
                                children: data.translation?.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (v3_module_default()).flex,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((StarFillIcon_default()), {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (v3_module_default()).text,
                                        children: data?.rating_avg?.toFixed(1) || 0
                                    })
                                ]
                            })
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