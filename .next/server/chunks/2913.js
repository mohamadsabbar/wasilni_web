"use strict";
exports.id = 2913;
exports.ids = [2913];
exports.modules = {

/***/ 32913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PasswordInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_EyeLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82394);
/* harmony import */ var remixicon_react_EyeLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_EyeLineIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_EyeOffLineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67008);
/* harmony import */ var remixicon_react_EyeOffLineIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_EyeOffLineIcon__WEBPACK_IMPORTED_MODULE_5__);






const Input = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField)({
    width: "100%",
    backgroundColor: "transparent",
    "& .MuiInputLabel-root": {
        fontSize: 12,
        lineHeight: "14px",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "var(--black)",
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
function PasswordInput(props) {
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClickShowPassword = ()=>{
        setShow((state)=>!state);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
        variant: "standard",
        type: show ? "text" : "password",
        InputLabelProps: {
            shrink: true
        },
        InputProps: {
            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputAdornment, {
                position: "end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                    onClick: handleClickShowPassword,
                    disableRipple: true,
                    children: show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_EyeOffLineIcon__WEBPACK_IMPORTED_MODULE_5___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_EyeLineIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
                })
            })
        },
        ...props
    });
}


/***/ })

};
;