exports.id = 9261;
exports.ids = [9261,6060];
exports.modules = {

/***/ 23547:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "categoryDropdown_wrapper__45LFg",
	"link": "categoryDropdown_link__o443D",
	"text": "categoryDropdown_text__5nZ5G"
};


/***/ }),

/***/ 29261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_popover_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56060);
/* harmony import */ var _categoryDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23547);
/* harmony import */ var _categoryDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_categoryDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function CategoryPopover({ data , handleClickItem =()=>{} , ...props }) {
    const handleClick = (event, id)=>{
        if (props.onClose) props.onClose({}, "backdropClick");
        handleClickItem(event, id);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_popover_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ...props,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_categoryDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
            children: data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: `#${item.uuid}`,
                    className: (_categoryDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),
                    onClick: (event)=>handleClick(event, item.id),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_categoryDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                        children: item.translation.title
                    })
                }, item.uuid))
        })
    });
}


/***/ }),

/***/ 56060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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