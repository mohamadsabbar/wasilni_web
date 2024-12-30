exports.id = 5642;
exports.ids = [5642];
exports.modules = {

/***/ 39443:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "orderMap_wrapper__h__VP",
	"fullHeight": "orderMap_fullHeight__BsYPD",
	"shimmer": "orderMap_shimmer__IX0_w"
};


/***/ }),

/***/ 55642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrderMap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_map_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25567);
/* harmony import */ var _orderMap_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39443);
/* harmony import */ var _orderMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_orderMap_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_map_map__WEBPACK_IMPORTED_MODULE_2__]);
components_map_map__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function OrderMap({ data , loading =false , fullHeight , price , drawLine  }) {
    const location = {
        lat: Number(data?.location?.latitude) || 0,
        lng: Number(data?.location?.longitude) || 0
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_orderMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper)} ${fullHeight ? (_orderMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fullHeight) : ""}`,
        children: !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_map_map__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            location: location,
            defaultZoom: 11,
            drawLine: drawLine,
            price: price,
            readOnly: true,
            shop: data?.delivery_type === "pickup" ? undefined : data?.shop
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
            variant: "rectangular",
            className: (_orderMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().shimmer)
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;