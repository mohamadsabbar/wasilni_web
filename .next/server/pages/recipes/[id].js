(() => {
var exports = {};
exports.id = 8584;
exports.ids = [8584];
exports.modules = {

/***/ 91255:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "recipeContent_wrapper__2eWM1",
	"block": "recipeContent_block__EPaii",
	"header": "recipeContent_header__cjksm",
	"content": "recipeContent_content__iMcAY",
	"row": "recipeContent_row__0MadF",
	"title": "recipeContent_title__ZYB5x",
	"text": "recipeContent_text__XK_HA"
};


/***/ }),

/***/ 3156:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "recipeHero_wrapper__TjJBD",
	"hero": "recipeHero_hero__qDWax",
	"heroWrapper": "recipeHero_heroWrapper__teahs",
	"card": "recipeHero_card__pUMPi",
	"cardWrapper": "recipeHero_cardWrapper__5IH87",
	"item": "recipeHero_item__CUF0P",
	"label": "recipeHero_label__xtc93",
	"value": "recipeHero_value__wjhuG"
};


/***/ }),

/***/ 1926:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "recipeIngredients_wrapper__87n_l",
	"header": "recipeIngredients_header__Te_WC",
	"btnWrapper": "recipeIngredients_btnWrapper__FyJEv",
	"block": "recipeIngredients_block__OlO4K",
	"discount": "recipeIngredients_discount___frDH",
	"text": "recipeIngredients_text__FcaZ5",
	"row": "recipeIngredients_row__yd9uQ",
	"col": "recipeIngredients_col__nIeW7",
	"title": "recipeIngredients_title__93PG3",
	"desc": "recipeIngredients_desc__OXBzp",
	"actions": "recipeIngredients_actions__eB16f",
	"counter": "recipeIngredients_counter__YvHEf",
	"counterBtn": "recipeIngredients_counterBtn__Cp03f",
	"disabled": "recipeIngredients_disabled__HfQ45",
	"count": "recipeIngredients_count__FgmfW",
	"price": "recipeIngredients_price__JcyO_",
	"imageWrapper": "recipeIngredients_imageWrapper__IysKq"
};


/***/ }),

/***/ 13597:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "recipeContainer_root__lOhDT",
	"container": "recipeContainer_container__bZIbO",
	"header": "recipeContainer_header__4_Ex1",
	"shop": "recipeContainer_shop__vhT3I",
	"title": "recipeContainer_title__3JMDF",
	"text": "recipeContainer_text__zhK8p",
	"wrapper": "recipeContainer_wrapper__wr1gT",
	"body": "recipeContainer_body__F4tl7",
	"aside": "recipeContainer_aside__XF5Mx",
	"itemWrapper": "recipeContainer_itemWrapper__ZFU7y"
};


/***/ }),

/***/ 56669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecipeContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91255);
/* harmony import */ var _recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);




function RecipeContent({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: t("ingredients")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                        dangerouslySetInnerHTML: {
                            __html: data?.ingredient?.title || ""
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: t("instructions")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                        dangerouslySetInnerHTML: {
                            __html: data?.instruction?.title || ""
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: t("nutritions")
                        })
                    }),
                    data?.nutritions?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().row),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                    children: item.translation?.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                                    children: item.weight
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_recipeContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                                    children: [
                                        item.percentage,
                                        "%"
                                    ]
                                })
                            ]
                        }, item.id))
                ]
            })
        ]
    });
}


/***/ }),

/***/ 17909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecipeHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3156);
/* harmony import */ var _recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37562);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);





function RecipeHero({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: data?.translation?.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().heroWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: data?.bg_img,
                            alt: data?.translation?.title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardWrapper),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: t("active.time")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().value),
                                            children: data?.active_time
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: t("total.time")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().value),
                                            children: data?.total_time
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: t("calories")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().value),
                                            children: data?.calories
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: t("servings")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_recipeHero_module_scss__WEBPACK_IMPORTED_MODULE_4___default().value),
                                            children: data?.servings
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 46768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecipeIngredients)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1926);
/* harmony import */ var _recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77262);
/* harmony import */ var _recipeStockCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48321);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var contexts_recipe_recipe_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10642);
/* harmony import */ var components_badge_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12554);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90026);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34349);
/* harmony import */ var services_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18423);
/* harmony import */ var redux_slices_userCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96477);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74621);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37490);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64698);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29969);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var hooks_useRouterStatus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56942);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_cart__WEBPACK_IMPORTED_MODULE_11__, components_alert_toast__WEBPACK_IMPORTED_MODULE_13__]);
([services_cart__WEBPACK_IMPORTED_MODULE_11__, components_alert_toast__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const CartReplaceModal = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7567), __webpack_require__.e(7944), __webpack_require__.e(892)]).then(__webpack_require__.bind(__webpack_require__, 97944)), {
    loadableGenerated: {
        modules: [
            "..\\components\\recipeIngredients\\recipeIngredients.tsx -> " + "components/clearCartModal/cartReplacePrompt"
        ]
    }
});
const SuccessModal = next_dynamic__WEBPACK_IMPORTED_MODULE_17___default()(()=>Promise.all(/* import() */[__webpack_require__.e(6684), __webpack_require__.e(7567), __webpack_require__.e(207)]).then(__webpack_require__.bind(__webpack_require__, 70207)), {
    loadableGenerated: {
        modules: [
            "..\\components\\recipeIngredients\\recipeIngredients.tsx -> " + "components/successModal/successModal"
        ]
    }
});
function RecipeIngredients({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)("(max-width:576px)");
    const { recipeStocks , addableRecipeStocks  } = (0,contexts_recipe_recipe_context__WEBPACK_IMPORTED_MODULE_6__/* .useRecipe */ .r)();
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .T)();
    const [openPrompt, handleOpenPrompt, handleClosePrompt] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    const [openConfirm, handleOpenConfirm, handleCloseConfirm] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_15__/* .selectCurrency */ .j);
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)(redux_slices_userCart__WEBPACK_IMPORTED_MODULE_12__/* .selectUserCart */ .Ns);
    const { isAuthenticated  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_16__/* .useAuth */ .a)();
    const { isLoading: isRouterLoading  } = (0,hooks_useRouterStatus__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_19__.useRouter)();
    const { isLoading , mutate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_11__/* ["default"].insert */ .Z.insert(data),
        onSuccess: (data)=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_12__/* .updateUserCart */ .CR)(data.data));
            handleOpenConfirm();
        },
        onError: (err)=>{
            console.log("err => ", err);
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_13__/* .error */ .vU)(t("try.again"));
        }
    });
    const { isLoading: isLoadingClearCart , mutate: mutateClearCart  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_11__/* ["default"]["delete"] */ .Z["delete"](data),
        onSuccess: ()=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_12__/* .clearUserCart */ .tx)());
            storeCart();
            handleClosePrompt();
        }
    });
    function handleAddToCart() {
        if (!isAuthenticated) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_13__/* .warning */ .Kp)(t("login.first"));
            return;
        }
        if (!checkIsAbleToAddProduct()) {
            handleOpenPrompt();
            return;
        }
        storeCart();
    }
    function storeCart() {
        const body = {
            shop_id: data?.shop_id,
            currency_id: currency?.id,
            rate: currency?.rate,
            products: addableRecipeStocks.map((item)=>({
                    stock_id: item.id,
                    quantity: item.qty
                }))
        };
        mutate(body);
    }
    function checkIsAbleToAddProduct() {
        let isActiveCart;
        isActiveCart = cart.shop_id === 0 || cart.shop_id === data?.shop_id;
        return isActiveCart;
    }
    function handleClearCart() {
        const ids = [
            cart.id
        ];
        mutateClearCart({
            ids
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("ingredients")
                    }),
                    !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20___default().btnWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            loading: isLoading,
                            onClick: handleAddToCart,
                            children: t("add.items.to.cart", {
                                number: addableRecipeStocks.length
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20___default().block),
                children: [
                    recipeStocks?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_recipeStockCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            data: item,
                            quantity: item.qty
                        }, item.id)),
                    !!data?.discount_price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20___default().discount),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge_badge__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "discount",
                                variant: "circle"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_20___default().text),
                                children: [
                                    t("recipe.discount.condition"),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        number: data?.discount_price
                                    })
                                ]
                            })
                        ]
                    }),
                    isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            loading: isLoading,
                            onClick: handleAddToCart,
                            children: t("add.items.to.cart", {
                                number: addableRecipeStocks.length
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartReplaceModal, {
                open: openPrompt,
                handleClose: handleClosePrompt,
                onSubmit: handleClearCart,
                loading: isLoadingClearCart
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessModal, {
                title: t("go.to.recipe.order"),
                open: openConfirm,
                handleClose: handleCloseConfirm,
                onSubmit: ()=>push(`/restaurant/${data?.shop_id}/checkout`),
                loading: isRouterLoading,
                buttonText: t("order")
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecipeStockCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1926);
/* harmony import */ var _recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11024);
/* harmony import */ var remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92081);
/* harmony import */ var remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90026);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37562);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95785);
/* harmony import */ var contexts_recipe_recipe_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10642);









function RecipeStockCard({ data , quantity =0  }) {
    const totalPrice = Number(data.total_price) * quantity || 0;
    const isReduceDisabled = quantity <= 0;
    const isAddDisabled = !(data.quantity > quantity);
    const { addRecipeStock , reduceRecipeStock  } = (0,contexts_recipe_recipe_context__WEBPACK_IMPORTED_MODULE_6__/* .useRecipe */ .r)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().row),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().col),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                        children: data.product?.translation.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().desc),
                        children: data.product?.translation?.description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().actions),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().counter),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: `${(_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().counterBtn)} ${isReduceDisabled ? (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().disabled) : ""}`,
                                        disabled: isReduceDisabled,
                                        onClick: ()=>reduceRecipeStock(data.id),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().count),
                                        children: [
                                            quantity * (data.product?.interval || 1),
                                            data.product?.unit?.translation?.title
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: `${(_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().counterBtn)} ${isAddDisabled ? (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().disabled) : ""}`,
                                        disabled: isAddDisabled,
                                        onClick: ()=>addRecipeStock(data.id),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    number: totalPrice
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_recipeIngredients_module_scss__WEBPACK_IMPORTED_MODULE_7___default().imageWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    fill: true,
                    src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(data.product?.img),
                    alt: data.product?.translation.title,
                    sizes: "320px",
                    quality: 90
                })
            })
        ]
    });
}


/***/ }),

/***/ 31188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecipeContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13597);
/* harmony import */ var _recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_shopLogoBackground_shopLogoBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45122);
/* harmony import */ var components_recipeIngredients_recipeIngredients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46768);
/* harmony import */ var contexts_recipe_recipe_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_recipeIngredients_recipeIngredients__WEBPACK_IMPORTED_MODULE_3__]);
components_recipeIngredients_recipeIngredients__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function RecipeContainer({ data , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_recipe_recipe_provider__WEBPACK_IMPORTED_MODULE_4__/* .RecipeProvider */ .A, {
        data: data,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().root),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopLogoBackground_shopLogoBackground__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    data: data?.shop
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().shop),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                            children: data?.shop?.translation?.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                                            children: data?.shop?.translation?.description
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),
                                children: react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().itemWrapper),
                                        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {
                                            data
                                        })
                                    });
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                                className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aside),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_recipeContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().itemWrapper),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_recipeIngredients_recipeIngredients__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        data: data
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useRecipe),
/* harmony export */   "y": () => (/* binding */ RecipeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RecipeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useRecipe = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RecipeContext);


/***/ }),

/***/ 66139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ RecipeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recipe_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10642);



var RecipeActionKind;
(function(RecipeActionKind) {
    RecipeActionKind["REDUCE_QUANTITY"] = "REDUCE_QUANTITY";
    RecipeActionKind["ADD_QUANTITY"] = "ADD_QUANTITY";
})(RecipeActionKind || (RecipeActionKind = {}));
function reducer(state, action) {
    const { type , payload  } = action;
    switch(type){
        case RecipeActionKind.ADD_QUANTITY:
            return {
                stocks: state.stocks.map((item)=>{
                    if (item.id === payload) {
                        if (item.qty === 0) {
                            return {
                                ...item,
                                qty: item.qty + item.min_quantity
                            };
                        } else {
                            return {
                                ...item,
                                qty: item.qty + 1
                            };
                        }
                    } else {
                        return item;
                    }
                })
            };
        case RecipeActionKind.REDUCE_QUANTITY:
            return {
                stocks: state.stocks.map((item)=>{
                    if (item.id === payload) {
                        if (item.min_quantity === item.qty) {
                            return {
                                ...item,
                                qty: item.qty - item.min_quantity
                            };
                        } else {
                            return {
                                ...item,
                                qty: item.qty - 1
                            };
                        }
                    } else {
                        return item;
                    }
                })
            };
        default:
            return state;
    }
}
function RecipeProvider({ children , data  }) {
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, {
        stocks: data?.stocks?.length ? data?.stocks?.map((item)=>({
                ...item,
                qty: item.min_quantity
            })) : []
    });
    function addRecipeStock(stock_id) {
        dispatch({
            type: RecipeActionKind.ADD_QUANTITY,
            payload: stock_id
        });
    }
    function reduceRecipeStock(stock_id) {
        dispatch({
            type: RecipeActionKind.REDUCE_QUANTITY,
            payload: stock_id
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_recipe_context__WEBPACK_IMPORTED_MODULE_2__/* .RecipeContext.Provider */ .y.Provider, {
        value: {
            recipeStocks: state.stocks,
            addRecipeStock,
            reduceRecipeStock,
            addableRecipeStocks: state.stocks.filter((item)=>!!item.qty)
        },
        children: children
    });
}


/***/ }),

/***/ 68416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDidUpdate = (f, conditions)=>{
    const didMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        // Cleanup effects when f returns a function
        return f && f(); //eslint-disable-line
    }, conditions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDidUpdate);


/***/ }),

/***/ 76736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecipeSingle),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_recipeContainer_recipeContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31188);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77347);
/* harmony import */ var services_recipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85685);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_recipeHero_recipeHero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17909);
/* harmony import */ var components_recipeContent_recipeContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56669);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64698);
/* harmony import */ var hooks_useDidUpdate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_recipeContainer_recipeContainer__WEBPACK_IMPORTED_MODULE_3__, services_recipe__WEBPACK_IMPORTED_MODULE_6__]);
([containers_recipeContainer_recipeContainer__WEBPACK_IMPORTED_MODULE_3__, services_recipe__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const FooterMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(7567), __webpack_require__.e(1612), __webpack_require__.e(256), __webpack_require__.e(6323), __webpack_require__.e(4779), __webpack_require__.e(807), __webpack_require__.e(544), __webpack_require__.e(9409)]).then(__webpack_require__.bind(__webpack_require__, 90544)), {
    loadableGenerated: {
        modules: [
            "recipes\\[id].tsx -> " + "containers/footerMenu/footerMenu"
        ]
    }
});
function RecipeSingle({}) {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const locale = i18n.language;
    const { query , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const recipeId = Number(query.id);
    const currencyId = Number(query.currency_id);
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_13__/* .selectCurrency */ .j);
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "recipe",
        recipeId,
        locale,
        currencyId
    ], ()=>services_recipe__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getById */ .Z.getById(recipeId, {
            currency_id: currencyId
        }));
    (0,hooks_useDidUpdate__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(()=>{
        if (currency?.id !== currencyId) {
            push({
                query: {
                    id: recipeId,
                    currency_id: currency?.id
                }
            }, undefined, {
                shallow: true
            });
        }
    }, [
        currency
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: data?.data.shop?.translation?.title + " - " + data?.data.translation?.title,
                description: data?.data.translation?.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_recipeContainer_recipeContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: data?.data,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_recipeHero_recipeHero__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_recipeContent_recipeContent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterMenu, {})
        ]
    });
}
const getServerSideProps = async ({ query , req  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
    const recipeId = Number(query.id);
    const currencyId = Number(query.currency_id);
    const locale = (0,utils_getLanguage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(req.cookies?.locale);
    await queryClient.prefetchQuery([
        "recipe",
        recipeId,
        locale,
        currencyId
    ], ()=>services_recipe__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getById */ .Z.getById(recipeId, {
            currency_id: currencyId
        }));
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_4__.dehydrate)(queryClient)))
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getLanguage)
/* harmony export */ });
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3075);

function getLanguage(lang) {
    return lang || constants_config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_LANGUAGE */ .k$;
}


/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 73280:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers");

/***/ }),

/***/ 10298:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers/AdapterDayjs");

/***/ }),

/***/ 85753:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 7486:
/***/ ((module) => {

"use strict";
module.exports = require("next-cookies");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 87104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 69709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 61175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 92081:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/AddFillIcon");

/***/ }),

/***/ 44237:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArrowDownSLineIcon");

/***/ }),

/***/ 4634:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 80062:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/FlashlightFillIcon");

/***/ }),

/***/ 27013:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Gift2FillIcon");

/***/ }),

/***/ 26582:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/HeartLineIcon");

/***/ }),

/***/ 9362:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/HistoryFillIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 42331:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/PercentFillIcon");

/***/ }),

/***/ 92713:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ReservedLineIcon");

/***/ }),

/***/ 11106:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/RestaurantFillIcon");

/***/ }),

/***/ 14282:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ShoppingBag3LineIcon");

/***/ }),

/***/ 36487:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/StarSmileFillIcon");

/***/ }),

/***/ 11024:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/SubtractFillIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,5728,4169,7262,26,5122,1929,8423,2554,9825,4979], () => (__webpack_exec__(76736)));
module.exports = __webpack_exports__;

})();