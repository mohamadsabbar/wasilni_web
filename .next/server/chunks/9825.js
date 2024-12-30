exports.id = 9825;
exports.ids = [9825];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


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

/***/ 56942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useRouterStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function useRouterStatus() {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const start = ()=>{
            setIsLoading(true);
        };
        const complete = ()=>{
            setIsLoading(false);
            setIsError(false);
            setError(null);
        };
        const error = (error)=>{
            setIsLoading(false);
            setIsError(true);
            setError(error);
        };
        next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeStart", start);
        next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeComplete", complete);
        next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeError", error);
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off("routeChangeStart", start);
            next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off("routeChangeComplete", complete);
            next_router__WEBPACK_IMPORTED_MODULE_1___default().events.off("routeChangeError", error);
        };
    }, []);
    return {
        isLoading,
        isError,
        error
    };
}


/***/ })

};
;