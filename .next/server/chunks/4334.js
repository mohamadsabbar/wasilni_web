exports.id = 4334;
exports.ids = [4334];
exports.modules = {

/***/ 49474:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "v3_banner__aSd1x",
	"wrapper": "v3_wrapper__7nOdq",
	"body": "v3_body__MxjK9",
	"btn": "v3_btn__SNDwT",
	"text": "v3_text__8YY_1"
};


/***/ }),

/***/ 64736:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v3_container__vY96g",
	"wrapper": "v3_wrapper__W6QSo",
	"header": "v3_header__4FT73",
	"title": "v3_title__1HGGF",
	"link": "v3_link__tWUYW",
	"grid": "v3_grid__0Hz7S",
	"gridItem": "v3_gridItem__oEg5Q",
	"shimmer": "v3_shimmer__W2Shh"
};


/***/ }),

/***/ 54334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ StoreList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/storeList/v3.module.scss
var v3_module = __webpack_require__(64736);
var v3_module_default = /*#__PURE__*/__webpack_require__.n(v3_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./components/storeCard/v3.tsx
var v3 = __webpack_require__(5571);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: ./components/adSingle/v3.module.scss
var adSingle_v3_module = __webpack_require__(49474);
var adSingle_v3_module_default = /*#__PURE__*/__webpack_require__.n(adSingle_v3_module);
// EXTERNAL MODULE: ./utils/getImage.ts
var getImage = __webpack_require__(95785);
// EXTERNAL MODULE: ./components/fallbackImage/fallbackImage.tsx
var fallbackImage = __webpack_require__(37562);
;// CONCATENATED MODULE: ./components/adSingle/v3.tsx






function AdSingle({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/ads/${data.id}`,
        className: (adSingle_v3_module_default()).banner,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (adSingle_v3_module_default()).wrapper,
            children: /*#__PURE__*/ jsx_runtime_.jsx(fallbackImage/* default */.Z, {
                fill: true,
                src: (0,getImage/* default */.Z)(data.img),
                alt: data.translation?.title,
                sizes: "360px",
                quality: 90,
                priority: true
            })
        })
    });
}

;// CONCATENATED MODULE: ./containers/storeList/v3.tsx








function StoreList({ title , shops , loading , ads  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    const isMobile = (0,material_.useMediaQuery)("(max-width:1139px)");
    const list = (0,external_react_.useMemo)(()=>{
        if (isMobile) {
            return shops.slice(0, 8);
        }
        return shops;
    }, [
        shops,
        isMobile
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (v3_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "container",
            style: {
                display: !loading && shops.length === 0 ? "none" : "block"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (v3_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (v3_module_default()).header,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (v3_module_default()).title,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/brands",
                                className: (v3_module_default()).link,
                                children: t("see.all")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (v3_module_default()).grid,
                        children: [
                            !loading ? list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(v3/* default */.Z, {
                                    data: item
                                }, "store" + item.id)) : Array.from(new Array(isMobile ? 8 : 12)).map((_, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                    variant: "rectangular",
                                    className: (v3_module_default()).shimmer
                                }, "storeShimmer" + idx)),
                            !loading && ads.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (v3_module_default()).gridItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(AdSingle, {
                                        data: item
                                    })
                                }, "ads-v3-" + item.id))
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;