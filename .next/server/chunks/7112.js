exports.id = 7112;
exports.ids = [7112];
exports.modules = {

/***/ 98897:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "v1_card__k9MHe",
	"img": "v1_img__hVaap",
	"content": "v1_content__xMtB8",
	"title": "v1_title__iixA0",
	"deliveryTime": "v1_deliveryTime__ouk5P"
};


/***/ }),

/***/ 10731:
/***/ ((module) => {

// Exports
module.exports = {
	"shimmer": "v1_shimmer__E_zPs",
	"container": "v1_container__U21dH",
	"grid": "v1_grid__M6D8o",
	"header": "v1_header__SB1xM",
	"title": "v1_title__lIP2m",
	"link": "v1_link__TtmH7",
	"text": "v1_text__pxmQV",
	"listItem": "v1_listItem__S9f1W"
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

/***/ 87112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BrandShopList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./components/brandShopCard/v1.module.scss
var v1_module = __webpack_require__(98897);
var v1_module_default = /*#__PURE__*/__webpack_require__.n(v1_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/verifiedComponent/verifiedComponent.tsx
var verifiedComponent = __webpack_require__(83626);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: ./utils/getShortTimeType.ts
var getShortTimeType = __webpack_require__(4943);
;// CONCATENATED MODULE: ./components/brandShopCard/v1.tsx








function BrandShopCard({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/shop/${data.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (v1_module_default()).card,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: (v1_module_default()).img,
                    alt: data.translation?.title,
                    src: data.logo_img || "",
                    width: 100,
                    height: 100
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (v1_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            className: (v1_module_default()).title,
                            children: [
                                data.translation?.title,
                                data?.verify === 1 && /*#__PURE__*/ jsx_runtime_.jsx(verifiedComponent/* default */.Z, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: (v1_module_default()).deliveryTime,
                            children: [
                                data.delivery_time?.from,
                                " - ",
                                data.delivery_time?.to,
                                " ",
                                t((0,getShortTimeType/* default */.Z)(data.delivery_time?.type))
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./containers/brandShopList/v1.module.scss
var brandShopList_v1_module = __webpack_require__(10731);
var brandShopList_v1_module_default = /*#__PURE__*/__webpack_require__.n(brandShopList_v1_module);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(69709);
// EXTERNAL MODULE: ./contexts/theme/theme.context.tsx
var theme_context = __webpack_require__(80108);
// EXTERNAL MODULE: external "remixicon-react/ArrowLeftSLineIcon"
var ArrowLeftSLineIcon_ = __webpack_require__(71116);
var ArrowLeftSLineIcon_default = /*#__PURE__*/__webpack_require__.n(ArrowLeftSLineIcon_);
// EXTERNAL MODULE: external "remixicon-react/ArrowRightSLineIcon"
var ArrowRightSLineIcon_ = __webpack_require__(51406);
var ArrowRightSLineIcon_default = /*#__PURE__*/__webpack_require__.n(ArrowRightSLineIcon_);
;// CONCATENATED MODULE: ./containers/brandShopList/v1.tsx










function BrandShopList({ data , loading  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { direction  } = (0,theme_context/* useTheme */.F)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (brandShopList_v1_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (brandShopList_v1_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (brandShopList_v1_module_default()).title,
                            children: t("favorite.brands")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/shop?verify=1",
                            className: (brandShopList_v1_module_default()).link,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (brandShopList_v1_module_default()).text,
                                    children: t("see.all")
                                }),
                                direction === "rtl" ? /*#__PURE__*/ jsx_runtime_.jsx((ArrowLeftSLineIcon_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ArrowRightSLineIcon_default()), {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (brandShopList_v1_module_default()).grid,
                    children: loading ? Array.from(Array(10).keys()).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                            className: (brandShopList_v1_module_default()).shimmer,
                            variant: "rectangular"
                        }, item)) : data?.map((shop)=>/*#__PURE__*/ jsx_runtime_.jsx(BrandShopCard, {
                            data: shop
                        }, shop.id))
                })
            ]
        })
    });
}


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