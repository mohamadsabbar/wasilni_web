exports.id = 182;
exports.ids = [182,7494];
exports.modules = {

/***/ 7494:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "drawer_title__C2rV7",
	"closeBtn": "drawer_closeBtn__CU2x6"
};


/***/ }),

/***/ 30182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _drawer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7494);
/* harmony import */ var _drawer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_drawer_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const Wrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.SwipeableDrawer)(()=>({
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.15)"
        },
        "& .MuiPaper-root": {
            backgroundColor: "var(--secondary-bg)",
            boxShadow: "var(--popover-box-shadow)",
            maxWidth: "100%",
            padding: "15px",
            borderRadius: "15px 15px 0 0"
        }
    }));
const Puller = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)(()=>({
        width: 30,
        height: 6,
        backgroundColor: "var(--grey)",
        borderRadius: 3,
        position: "absolute",
        top: 8,
        left: "calc(50% - 15px)"
    }));
function MobileDrawer({ anchor ="bottom" , open , onClose , onOpen =()=>{} , children , title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        anchor: anchor,
        open: open,
        onClose: onClose,
        onOpen: onOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Puller, {}),
            title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_drawer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: title
            }) : "",
            children
        ]
    });
}


/***/ })

};
;