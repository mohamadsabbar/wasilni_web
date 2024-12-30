exports.id = 2538;
exports.ids = [2538];
exports.modules = {

/***/ 73533:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "loading_loading__hXLim",
	"pageLoading": "loading_pageLoading__0nn5j"
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

/***/ 75619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73533);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function Loading({}) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loading),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {})
    });
}


/***/ }),

/***/ 85028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ WEEK)
/* harmony export */ });
const WEEK = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];


/***/ }),

/***/ 68416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDidUpdate = (f, conditions)=>{
    const didMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        // Cleanup effects when f returns a function
        return f && f(); //eslint-disable-line
    }, conditions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDidUpdate);


/***/ }),

/***/ 38189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ calculateCartProductTotal)
/* harmony export */ });
function calculateCartProductTotal(data) {
    if (!data) {
        return {
            addonsTotal: 0,
            productTotal: 0,
            totalPrice: 0,
            oldPrice: 0
        };
    }
    if (data.bonus) {
        return {
            addonsTotal: 0,
            productTotal: 0,
            totalPrice: 0,
            oldPrice: 0
        };
    }
    const addonsTotal = data?.addons?.reduce((total, item)=>total += Number(item.stock?.total_price) * item.quantity, 0) || 0;
    const productTotal = Number(data.stock?.total_price) * data.quantity;
    const productDiscount = Number(data.discount) * data.quantity;
    return {
        addonsTotal,
        productTotal,
        totalPrice: addonsTotal + productTotal,
        oldPrice: addonsTotal + productTotal + productDiscount
    };
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


/***/ }),

/***/ 77347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getLanguage)
/* harmony export */ });
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3075);

function getLanguage(lang) {
    return lang || constants_config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_LANGUAGE */ .k$;
}


/***/ })

};
;