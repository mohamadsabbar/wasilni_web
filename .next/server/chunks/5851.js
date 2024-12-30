exports.id = 5851;
exports.ids = [5851];
exports.modules = {

/***/ 48603:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "shopSorting_wrapper__vG7cs",
	"row": "shopSorting_row__UYxWp",
	"label": "shopSorting_label__kDRzD",
	"text": "shopSorting_text__e7Hzi"
};


/***/ }),

/***/ 45851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopSorting)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80865);
/* harmony import */ var _shopSorting_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48603);
/* harmony import */ var _shopSorting_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopSorting_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5215);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);







const sortingList = [
    "trust_you",
    "best_sale",
    "high_rating",
    "low_sale",
    "low_rating"
];
function ShopSorting({ handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { order_by  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_4__/* .selectShopFilter */ .qs);
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const handleChange = (event)=>{
        dispatch((0,redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_4__/* .setShopSorting */ .Ec)(event.target.value));
        handleClose();
    };
    const controlProps = (item)=>({
            checked: order_by === item,
            onChange: handleChange,
            value: item,
            id: item,
            name: "sorting",
            inputProps: {
                "aria-label": item
            }
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_shopSorting_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: sortingList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopSorting_module_scss__WEBPACK_IMPORTED_MODULE_6___default().row),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ...controlProps(item)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: (_shopSorting_module_scss__WEBPACK_IMPORTED_MODULE_6___default().label),
                        htmlFor: item,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_shopSorting_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),
                            children: t(item)
                        })
                    })
                ]
            }, item))
    });
}


/***/ })

};
;