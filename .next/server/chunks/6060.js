"use strict";
exports.id = 6060;
exports.ids = [6060];
exports.modules = {

/***/ 56060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoverContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);




const Wrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Popover)(()=>({
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        "& .MuiPaper-root": {
            backgroundColor: "var(--secondary-bg)",
            boxShadow: "var(--popover-box-shadow)",
            borderRadius: "10px",
            maxWidth: "100%"
        }
    }));
function PopoverContainer({ children , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        ...rest,
        children: children
    });
}


/***/ })

};
;