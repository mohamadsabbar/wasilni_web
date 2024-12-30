exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 97230:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "categorySearchInput_search__J75pP",
	"wrapper": "categorySearchInput_wrapper__zCCqB",
	"closeBtn": "categorySearchInput_closeBtn__cBCjO"
};


/***/ }),

/***/ 7746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategorySearchInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _categorySearchInput_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97230);
/* harmony import */ var _categorySearchInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_categorySearchInput_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78428);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remixicon_react_CloseCircleLineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77617);
/* harmony import */ var remixicon_react_CloseCircleLineIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CloseCircleLineIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);






function CategorySearchInput({ searchTerm , setSearchTerm , handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        inputRef.current?.focus();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_categorySearchInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search)} white-splash`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_categorySearchInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "search",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_1___default()), {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    id: "search",
                    ref: inputRef,
                    placeholder: t("search"),
                    autoComplete: "off",
                    value: searchTerm,
                    onChange: (event)=>setSearchTerm(event.target.value)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_categorySearchInput_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeBtn),
                    onClick: handleClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CloseCircleLineIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
                })
            ]
        })
    });
}


/***/ })

};
;