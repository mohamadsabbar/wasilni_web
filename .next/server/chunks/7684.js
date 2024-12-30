exports.id = 7684;
exports.ids = [7684];
exports.modules = {

/***/ 68281:
/***/ ((module) => {

// Exports
module.exports = {
	"shimmer": "restaurantListForm_shimmer__szdSS",
	"wrapper": "restaurantListForm_wrapper__TG_dN",
	"body": "restaurantListForm_body__ekmZT",
	"row": "restaurantListForm_row__l0Qza",
	"label": "restaurantListForm_label__hYwOo",
	"content": "restaurantListForm_content__VN9vX",
	"img": "restaurantListForm_img__HH26P",
	"main": "restaurantListForm_main__fBycl",
	"text": "restaurantListForm_text__xqBTG",
	"muted": "restaurantListForm_muted__AexIp",
	"footer": "restaurantListForm_footer__4MWw_",
	"action": "restaurantListForm_action__b0Air"
};


/***/ }),

/***/ 94660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DarkButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77788);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function DarkButton({ children , disabled , onClick , type ="button" , icon , size ="medium" , loading =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().darkBtn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]} ${disabled ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().disabled) : ""}`,
        disabled: disabled,
        onClick: onClick,
        children: !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                icon ? icon : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                    children: children
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
            size: 22
        })
    });
}


/***/ }),

/***/ 87684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncBranchListForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80865);
/* harmony import */ var _restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68281);
/* harmony import */ var _restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_button_darkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94660);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18074);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1612);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_7__]);
services_shop__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function AsyncBranchListForm({ handleSubmit , branchId  }) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(String(branchId));
    const { data , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "branches",
        locale
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAll */ .Z.getAll(qs__WEBPACK_IMPORTED_MODULE_8___default().stringify({
            page: 1,
            perPage: 100,
            open: 1,
            has_section: 1
        })));
    const handleChange = (event)=>{
        setSelectedValue(event.target.value);
    };
    const controlProps = (item)=>({
            checked: selectedValue === item,
            onChange: handleChange,
            value: item,
            id: item,
            name: "branch",
            inputProps: {
                "aria-label": item
            }
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().body),
                    children: [
                        !isLoading ? data?.data.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        ...controlProps(String(item.id))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                                        htmlFor: String(item.id),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().content),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    src: item.logo_img || "",
                                                    alt: item.translation.title,
                                                    width: 50,
                                                    height: 50,
                                                    className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().img)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().main),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                                                            children: item.translation?.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().muted),
                                                            children: item.translation?.address
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, item.id)) : Array.from(new Array(2)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                                variant: "rectangular",
                                className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().shimmer)
                            }, "branches" + idx)),
                        !data?.data.length && !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: t("branches.not.found")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().footer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_restaurantListForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().action),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onClick: ()=>handleSubmit(selectedValue),
                            children: t("submit")
                        })
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;