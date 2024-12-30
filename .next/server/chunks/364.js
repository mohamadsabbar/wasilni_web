exports.id = 364;
exports.ids = [364];
exports.modules = {

/***/ 93950:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "v2_banner__F1A3j",
	"wrapper": "v2_wrapper__9ZK2S"
};


/***/ }),

/***/ 4895:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v2_container__R1FM5",
	"title": "v2_title__v0WKD",
	"bannerContainer": "v2_bannerContainer__hvHYZ",
	"shimmerContainer": "v2_shimmerContainer__dkxRv",
	"shimmer": "v2_shimmer__g3ljb"
};


/***/ }),

/***/ 30364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdsContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/ads/v2.module.scss
var v2_module = __webpack_require__(4895);
var v2_module_default = /*#__PURE__*/__webpack_require__.n(v2_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/adSingle/v2.module.scss
var adSingle_v2_module = __webpack_require__(93950);
var adSingle_v2_module_default = /*#__PURE__*/__webpack_require__.n(adSingle_v2_module);
// EXTERNAL MODULE: ./utils/getImage.ts
var getImage = __webpack_require__(95785);
// EXTERNAL MODULE: ./components/fallbackImage/fallbackImage.tsx
var fallbackImage = __webpack_require__(37562);
;// CONCATENATED MODULE: ./components/adSingle/v2.tsx






function AdSingle({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/ads/${data.id}`,
        className: (adSingle_v2_module_default()).banner,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (adSingle_v2_module_default()).wrapper,
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

;// CONCATENATED MODULE: ./containers/ads/v2.tsx





function AdsContainer({ data , loading  }) {
    const list = (0,external_react_.useMemo)(()=>data.slice(0, 3), [
        data
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (v2_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (v2_module_default()).bannerContainer,
                children: !loading ? list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(AdSingle, {
                        data: item
                    }, "ads" + item.id)) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (v2_module_default()).shimmerContainer,
                    children: Array.from(new Array(2)).map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                            variant: "rectangular",
                            className: (v2_module_default()).shimmer
                        }, "adsShimmer" + idx))
                })
            })
        })
    });
}


/***/ })

};
;