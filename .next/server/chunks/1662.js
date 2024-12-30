"use strict";
exports.id = 1662;
exports.ids = [1662];
exports.modules = {

/***/ 91662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SwitchInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);




const IOSSwitch = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Switch)({
    width: 60,
    height: 30,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: "5px 7px",
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(26px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: "#83EA00",
                opacity: 1,
                border: "0.8px solid #76D003 !important"
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5
            }
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff"
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color: "#E7E7E7"
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.7
        }
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        position: "relative",
        width: 20,
        height: 20,
        backgroundColor: "var(--secondary-bg)",
        boxShadow: "0px 2px 2px rgba(66, 113, 6, 0.4)",
        "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 2,
            height: 6,
            borderRadius: 100,
            backgroundColor: "var(--grey)"
        }
    },
    "& .MuiSwitch-track": {
        borderRadius: 54,
        backgroundColor: "var(--border)",
        opacity: 1,
        transition: "background-color 0.5s",
        border: "0 !important"
    }
});
function SwitchInput(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IOSSwitch, {
        ...props,
        disableRipple: true
    });
}


/***/ })

};
;