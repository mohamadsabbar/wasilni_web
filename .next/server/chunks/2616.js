exports.id = 2616;
exports.ids = [2616];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


/***/ }),

/***/ 68577:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "orderInfo_wrapper__VOfS2",
	"header": "orderInfo_header__BRR4r",
	"title": "orderInfo_title__mdIf5",
	"subtitle": "orderInfo_subtitle__MRrYx",
	"text": "orderInfo_text__6R3WH",
	"dot": "orderInfo_dot___JMW8",
	"address": "orderInfo_address__9O1Zm",
	"body": "orderInfo_body__UCS0u",
	"flex": "orderInfo_flex____5q2",
	"price": "orderInfo_price__KmY3l",
	"discount": "orderInfo_discount__5BsvJ",
	"totalPrice": "orderInfo_totalPrice__M0egx",
	"courierBlock": "orderInfo_courierBlock__vQB6Q",
	"courier": "orderInfo_courier__j9zmv",
	"avatar": "orderInfo_avatar__ROqd5",
	"imgWrapper": "orderInfo_imgWrapper___5hfV",
	"rating": "orderInfo_rating__B5TcQ",
	"naming": "orderInfo_naming__slzsU",
	"name": "orderInfo_name__7ddxL",
	"actions": "orderInfo_actions__MxKsd",
	"iconBtn": "orderInfo_iconBtn__Q643h",
	"footer": "orderInfo_footer__IvTTU",
	"main": "orderInfo_main__U6XpY"
};


/***/ }),

/***/ 35686:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "orderProducts_wrapper__RJtdf",
	"header": "orderProducts_header__fX5HO",
	"title": "orderProducts_title__WCPWW",
	"body": "orderProducts_body__wISZ_",
	"text": "orderProducts_text__t8VRX",
	"flex": "orderProducts_flex__XgAuW",
	"item": "orderProducts_item__kqY0C"
};


/***/ }),

/***/ 14782:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "orderContainer_root__Dw_KY"
};


/***/ }),

/***/ 64594:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "orderHeader_root__IBD_X",
	"wrapper": "orderHeader_wrapper__hfYFz",
	"shopInfo": "orderHeader_shopInfo__IRuOq",
	"naming": "orderHeader_naming__h_MLi",
	"title": "orderHeader_title__NhSXL",
	"text": "orderHeader_text__fWyDT",
	"shimmerTitle": "orderHeader_shimmerTitle__BGzRG",
	"shimmerDesc": "orderHeader_shimmerDesc__ot5Mv",
	"statusWrapper": "orderHeader_statusWrapper__O6u_G",
	"status": "orderHeader_status__pXCV1",
	"time": "orderHeader_time__15VmK",
	"shimmer": "orderHeader_shimmer__Ah10t"
};


/***/ }),

/***/ 11295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26221);
/* harmony import */ var _fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);




const avatar_placeholder = "/images/avatar_placeholder.png";
function Avatar({ data  }) {
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,utils_getAvatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(data?.img));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        fill: true,
        src: imgSrc,
        alt: data?.firstname,
        sizes: "60px",
        onError: ()=>setImgSrc(avatar_placeholder)
    });
}


/***/ }),

/***/ 37562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FallbackImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48909);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */ 


function FallbackImage({ src , alt , onError  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: src,
        alt: alt,
        className: (_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root),
        onError: onError
    });
}


/***/ }),

/***/ 60291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getAddressFromLocation)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99648);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function getAddressFromLocation(latlng) {
    let params = {
        latlng,
        key: constants_constants__WEBPACK_IMPORTED_MODULE_1__/* .MAP_API_KEY */ .kr
    };
    return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params
    }).then(({ data  })=>data.results[0]?.formatted_address).catch((error)=>{
        console.log(error);
        return "not found";
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getAvatar)
/* harmony export */ });
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5848);

const avatar_placeholder = "/images/avatar_placeholder.png";
function getAvatar(img) {
    if (img) {
        return img.includes("http") ? img : constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .IMAGE_URL */ .yA + img;
    } else {
        return avatar_placeholder;
    }
}


/***/ }),

/***/ 95785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getImage)
/* harmony export */ });
// import { IMAGE_URL } from "constants/constants";
function getImage(img) {
    if (img) {
        return img;
    } else {
        return "";
    }
}


/***/ })

};
;