exports.id = 6694;
exports.ids = [6694,892];
exports.modules = {

/***/ 39981:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "shopFilter_wrapper__VBerN",
	"block": "shopFilter_block__jTXO6",
	"title": "shopFilter_title__zbZOq",
	"flex": "shopFilter_flex__CHCxN",
	"flexItem": "shopFilter_flexItem__Lv_7I",
	"text": "shopFilter_text__KbbP9",
	"active": "shopFilter_active__wolb5",
	"row": "shopFilter_row__NA8tM",
	"switch": "shopFilter_switch__JS2T1",
	"value": "shopFilter_value__Pd4lS",
	"actions": "shopFilter_actions__9OhKE"
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

/***/ 80892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SecondaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77788);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function SecondaryButton({ children , disabled , onClick , type ="button" , icon , size ="medium" , loading =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().secondaryBtn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]}`,
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

/***/ 56694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39981);
/* harmony import */ var _shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var remixicon_react_StarSmileFillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36487);
/* harmony import */ var remixicon_react_StarSmileFillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_StarSmileFillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_LeafFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60423);
/* harmony import */ var remixicon_react_LeafFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_LeafFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_inputs_switchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91662);
/* harmony import */ var components_button_darkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94660);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80892);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1612);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_8__]);
services_shop__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













// import PriceRangeSlider from "components/inputs/priceRangeSlider";
const ratings = [
    {
        label: "3.5 — 4.5",
        value: "3.5,4.5"
    },
    {
        label: "4.5 — 5.0",
        value: "4.5,5.0"
    },
    {
        label: "5.0",
        value: "5.0"
    }
];
function ShopFilter({ handleClose , parentCategoryId  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .T)();
    const { group , category_id  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)(redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__/* .selectShopFilter */ .qs);
    const [freeDelivery, setFreeDelivery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Boolean(group.free_delivery));
    const [deals, setDeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Boolean(group.deals));
    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(group.rating);
    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(group.prices);
    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(group.tag);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(group.open);
    const { data: tags  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)([
        "tags",
        parentCategoryId
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAllTags */ .Z.getAllTags({
            category_id: parentCategoryId
        }));
    // const { data: avgPrices } = useQuery(
    //   "avg-prices",
    //   () => shopService.getAveragePrices(),
    //   {
    //     onSuccess: (data) => {
    //       if (!prices) {
    //         setPrices([data.data.min, data.data.max]);
    //       }
    //     },
    //   }
    // );
    const handleShowResult = ()=>{
        const payload = {
            tag,
            rating,
            free_delivery: freeDelivery || undefined,
            prices,
            deals: deals || undefined,
            open
        };
        dispatch((0,redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__/* .setGroupFilter */ .G9)(payload));
        handleClose();
    };
    const handleClearFilter = ()=>{
        dispatch((0,redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__/* .setGroupFilter */ .G9)({}));
        handleClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().block),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                        children: t("rating")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flex),
                        children: ratings.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: `${(_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flexItem)} ${item.value === rating ? (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().active) : ""}`,
                                onClick: ()=>setRating(item.value),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_StarSmileFillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().text),
                                        children: item.label
                                    })
                                ]
                            }, item.value))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().block),
                style: {
                    display: tags?.data?.length > 0 ? "block" : "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                        children: t("special.offers")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flex),
                        children: tags?.data?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: `${(_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flexItem)} ${tag === String(item.id) ? (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().active) : ""}`,
                                onClick: ()=>setTag(String(item.id)),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_LeafFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().text),
                                        children: item.translation?.title
                                    })
                                ]
                            }, "tag" + item.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().row),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                        children: t("deals")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["switch"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_switchInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                name: "deals",
                                checked: deals,
                                onChange: (event)=>setDeals(event.target.checked)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().value),
                                children: deals ? t("on") : t("off")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().row),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                        children: t("free.delivery")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["switch"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_switchInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                name: "free_delivery",
                                checked: freeDelivery,
                                onChange: (event)=>setFreeDelivery(event.target.checked)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().value),
                                children: freeDelivery ? t("on") : t("off")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().row),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                        children: t("only.opened")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default()["switch"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_switchInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                name: "open",
                                checked: open,
                                onChange: (event)=>setOpen(event.target.checked)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().value),
                                children: open ? t("on") : t("off")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_shopFilter_module_scss__WEBPACK_IMPORTED_MODULE_12___default().actions),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        size: "small",
                        onClick: handleShowResult,
                        children: t("show")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        size: "small",
                        onClick: handleClearFilter,
                        children: t("clear")
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;