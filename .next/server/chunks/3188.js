exports.id = 3188;
exports.ids = [3188];
exports.modules = {

/***/ 66714:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "shopForm_wrapper__7Uf3y",
	"header": "shopForm_header__GFbkj",
	"title": "shopForm_title__mjJBK",
	"spacing": "shopForm_spacing__Tr2ub",
	"tabs": "shopForm_tabs__Kitlr",
	"tab": "shopForm_tab__3h_af",
	"text": "shopForm_text__6zmMi",
	"active": "shopForm_active__UumR3",
	"map": "shopForm_map__gV3SN",
	"sticky": "shopForm_sticky__5q5u6",
	"container": "shopForm_container__IYNo2",
	"heading": "shopForm_heading__r5ar0",
	"desc": "shopForm_desc__5vfgl",
	"price": "shopForm_price__sJBE0"
};


/***/ }),

/***/ 83188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShopForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopForm_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66714);
/* harmony import */ var _shopForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopForm_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function ShopForm({ children , formik , lang , xs , md , lg , title , loading , sticky , selectedType  }) {
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(min-width:900px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        xs: xs,
        md: md,
        lg: lg,
        order: sticky && !isDesktop ? 2 : undefined,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: sticky ? (_shopForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sticky) : "",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                children: [
                    !!title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_shopForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_shopForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                            children: title
                        })
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child)=>{
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {
                            formik,
                            lang,
                            loading,
                            selectedType
                        });
                    })
                ]
            })
        })
    });
}


/***/ })

};
;