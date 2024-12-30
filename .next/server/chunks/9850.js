"use strict";
exports.id = 9850;
exports.ids = [9850];
exports.modules = {

/***/ 18074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);

function useLocale() {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
    const locale = i18n.language;
    const addResourceBundle = i18n.addResourceBundle;
    const changeLanguage = i18n.changeLanguage;
    return {
        t,
        locale,
        addResourceBundle,
        changeLanguage
    };
}


/***/ }),

/***/ 47763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const parcelService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/parcel-orders?${params}`),
    getAllTypes: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/parcel-order/types`, {
            params
        }),
    getById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/parcel-orders/${id}`, {
            params
        }),
    create: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/parcel-orders`, data),
    calculate: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/parcel-order/calculate-price`, {
            params
        }),
    cancel: (id)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/parcel-orders/${id}/status/change?status=canceled`),
    review: (id, data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/parcel-orders/deliveryman-review/${id}`, data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parcelService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;