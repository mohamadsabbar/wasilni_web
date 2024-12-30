exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 48960:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "tip_wrapper__oQ0aK",
	"title": "tip_title__zaHK_",
	"body": "tip_body__FfwK7",
	"item": "tip_item__YtvmH",
	"percent": "tip_percent__u9J58",
	"price": "tip_price__sr7T1",
	"selectedItem": "tip_selectedItem__7tgJg",
	"customTip": "tip_customTip__sfd68",
	"paymentContainer": "tip_paymentContainer__gYM24",
	"header": "tip_header__rf4E3",
	"text": "tip_text__UI9W5",
	"selectedButton": "tip_selectedButton__uIX6j",
	"footer": "tip_footer__VxyFN",
	"btnWrapper": "tip_btnWrapper__4mVvq",
	"btnWrapperDisabled": "tip_btnWrapperDisabled__BHisM",
	"paymentListWrapper": "tip_paymentListWrapper__6BwFL",
	"row": "tip_row__YABtU",
	"label": "tip_label__rp5hp"
};


/***/ }),

/***/ 60104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ tipPercents)
/* harmony export */ });
const tipPercents = [
    5,
    10,
    15,
    20,
    25
];


/***/ }),

/***/ 94098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const orderService = {
    calculate: (id, data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/cart/calculate/${id}`, data),
    checkCoupon: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/rest/coupons/check`, data),
    create: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/orders`, data),
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/orders/paginate?${params}`),
    getById: (id, params, headers)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/orders/${id}`, {
            params,
            headers
        }),
    cancel: (id)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/orders/${id}/status/change?status=canceled`),
    review: (id, data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/orders/review/${id}`, data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ percentToPrice)
/* harmony export */ });
const percentToPrice = (percent, price)=>(price ?? 0) * ((percent ?? 0) / 100);


/***/ })

};
;