"use strict";
exports.id = 7830;
exports.ids = [7830];
exports.modules = {

/***/ 49073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const informationService = {
    getSettings: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/settings`, {
            params
        }),
    getReferrals: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/referral`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (informationService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createSettings)
/* harmony export */ });
function createSettings(list) {
    const result = list.map((item)=>({
            [item.key]: item.value
        }));
    return Object.assign({}, ...result);
}


/***/ })

};
;