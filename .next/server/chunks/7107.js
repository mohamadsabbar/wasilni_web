"use strict";
exports.id = 7107;
exports.ids = [7107];
exports.modules = {

/***/ 68181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrawerContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _drawer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7494);
/* harmony import */ var _drawer_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_drawer_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11060);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4__);






const Wrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer)(()=>({
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.15)"
        },
        "& .MuiPaper-root": {
            backgroundColor: "var(--secondary-bg)",
            boxShadow: "var(--popover-box-shadow)",
            maxWidth: "450px",
            padding: "40px",
            "@media (max-width: 576px)": {
                minWidth: "100vw",
                maxWidth: "100vw",
                padding: "15px"
            }
        }
    }));
function DrawerContainer({ anchor ="right" , open , onClose , children , title , sx , PaperProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        anchor: anchor,
        open: open,
        onClose: onClose,
        sx: sx,
        PaperProps: PaperProps,
        children: [
            title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_drawer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                children: title
            }) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: (_drawer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeBtn),
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