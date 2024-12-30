"use strict";
exports.id = 9748;
exports.ids = [9748];
exports.modules = {

/***/ 59748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ createEmotionCache),
/* harmony export */   "b": () => (/* binding */ createRtlEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44615);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stylis__WEBPACK_IMPORTED_MODULE_2__]);
stylis__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "mui-style",
        insertionPoint
    });
}
function createRtlEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "mui-style",
        insertionPoint,
        stylisPlugins: [
            stylis__WEBPACK_IMPORTED_MODULE_2__.prefixer,
            (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1___default())
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;