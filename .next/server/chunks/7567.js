exports.id = 7567;
exports.ids = [7567];
exports.modules = {

/***/ 20483:
/***/ ((module) => {

// Exports
module.exports = {
	"closeBtn": "modal_closeBtn___o8U5",
	"center": "modal_center__s8Z_X",
	"right": "modal_right__9pSsY",
	"left": "modal_left__DuU2N"
};


/***/ }),

/***/ 47567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20483);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11060);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4__);






const Wrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog)(()=>({
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.15)"
        },
        "& .MuiPaper-root": {
            backgroundColor: "var(--secondary-bg)",
            boxShadow: "var(--popover-box-shadow)",
            borderRadius: "10px",
            maxWidth: "100%"
        },
        "& .MuiPaper-root.MuiDialog-paperFullScreen": {
            borderRadius: 0
        }
    }));
function ModalContainer({ open , onClose , children , fullScreen , closable =true , position ="center"  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        open: open,
        onClose: onClose,
        fullScreen: fullScreen,
        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[position],
        children: [
            closable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeBtn),
                onClick: ()=>{
                    if (onClose) onClose({}, "backdropClick");
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
            }),
            children
        ]
    });
}


/***/ })

};
;