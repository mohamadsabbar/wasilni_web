"use strict";
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 30251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);




const Input = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField)({
    width: "100%",
    backgroundColor: "transparent",
    "& .MuiInputLabel-root": {
        fontSize: 12,
        lineHeight: "14px",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "var(--black)",
        fontFamily: "'Inter', sans-serif",
        transform: "none",
        "&.Mui-error": {
            color: "var(--red)"
        }
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "var(--black)"
    },
    "& .MuiInput-root": {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "19px",
        color: "var(--black)",
        fontFamily: "'Inter', sans-serif",
        "&.Mui-error::after": {
            borderBottomColor: "var(--red)"
        }
    },
    "& .MuiInput-root::before": {
        borderBottom: "1px solid var(--grey)"
    },
    "& .MuiInput-root:hover:not(.Mui-disabled)::before": {
        borderBottom: "2px solid var(--black)"
    },
    "& .MuiInput-root::after": {
        borderBottom: "2px solid var(--primary)"
    }
});
function TextInput(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
        variant: "standard",
        InputLabelProps: {
            shrink: true
        },
        ...props
    });
}


/***/ })

};
;