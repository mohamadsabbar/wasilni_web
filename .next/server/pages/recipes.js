(() => {
var exports = {};
exports.id = 8241;
exports.ids = [8241];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


/***/ }),

/***/ 37315:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "recipeCard_wrapper__0idu5",
	"header": "recipeCard_header__DFJS8",
	"body": "recipeCard_body__Dy5ek",
	"title": "recipeCard_title__R8fph",
	"text": "recipeCard_text__XHWLK",
	"footer": "recipeCard_footer__ykPOn",
	"flex": "recipeCard_flex__bDCmH",
	"dot": "recipeCard_dot__6bxIP"
};


/***/ }),

/***/ 25607:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "mobileRecipeNavbar_container__y02mn",
	"wrapper": "mobileRecipeNavbar_wrapper__0qXae",
	"showAllBtn": "mobileRecipeNavbar_showAllBtn__qCUAa",
	"text": "mobileRecipeNavbar_text__xRXGX",
	"drawerWrapper": "mobileRecipeNavbar_drawerWrapper__Rc2T5",
	"item": "mobileRecipeNavbar_item__Rv05p",
	"active": "mobileRecipeNavbar_active__9OmaR"
};


/***/ }),

/***/ 39653:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "recipeListHeader_container__ZEaso",
	"header": "recipeListHeader_header__o_F8n",
	"title": "recipeListHeader_title__KWbw2",
	"text": "recipeListHeader_text___3P6c"
};


/***/ }),

/***/ 87910:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "recipeList_container__sh7Zp",
	"header": "recipeList_header__dIYOR",
	"title": "recipeList_title__zyECz",
	"shimmer": "recipeList_shimmer__3QP_8"
};


/***/ }),

/***/ 40919:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "recipeNavbar_navbar__2Rplt",
	"navItem": "recipeNavbar_navItem__lK99u",
	"moreBtn": "recipeNavbar_moreBtn__9Beuj",
	"text": "recipeNavbar_text__30pjj",
	"navLink": "recipeNavbar_navLink__xYiv1",
	"active": "recipeNavbar_active__2CWs_"
};


/***/ }),

/***/ 37562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FallbackImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48909);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */ 


function FallbackImage({ src , alt , onError  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: src,
        alt: alt,
        className: (_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root),
        onError: onError
    });
}


/***/ }),

/***/ 60204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RecipeListHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/recipeListHeader/recipeListHeader.module.scss
var recipeListHeader_module = __webpack_require__(39653);
var recipeListHeader_module_default = /*#__PURE__*/__webpack_require__.n(recipeListHeader_module);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(69709);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./containers/recipeNavbar/recipeNavbar.module.scss
var recipeNavbar_module = __webpack_require__(40919);
var recipeNavbar_module_default = /*#__PURE__*/__webpack_require__.n(recipeNavbar_module);
// EXTERNAL MODULE: ./hooks/usePopover.tsx
var usePopover = __webpack_require__(58287);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "remixicon-react/ArrowDownSLineIcon"
var ArrowDownSLineIcon_ = __webpack_require__(44237);
var ArrowDownSLineIcon_default = /*#__PURE__*/__webpack_require__.n(ArrowDownSLineIcon_);
;// CONCATENATED MODULE: ./containers/recipeNavbar/recipeNavbar.tsx









const CategoryDropdown = dynamic_default()(()=>__webpack_require__.e(/* import() */ 9261).then(__webpack_require__.bind(__webpack_require__, 29261)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\recipeNavbar\\recipeNavbar.tsx -> " + "components/categoryDropdown/categoryDropdown"
        ]
    }
});
function RecipeNavbar({ categories  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { query  } = (0,router_.useRouter)();
    const categoryId = Number(query.category_id);
    const [openDropdown, anchorDropdown, handleOpenDropdown, handleCloseDropdown] = (0,usePopover/* default */.Z)();
    const { list , rest  } = (0,external_react_.useMemo)(()=>{
        if (categories.length > 3) {
            return {
                list: categories.slice(0, 3),
                rest: categories.slice(3)
            };
        }
        return {
            list: categories,
            rest: []
        };
    }, [
        categories
    ]);
    function filterByCategory(event, id = null) {
        event.preventDefault();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: (recipeNavbar_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (recipeNavbar_module_default()).navItem,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/recipes",
                    shallow: true,
                    replace: true,
                    className: `${(recipeNavbar_module_default()).navLink} ${categoryId ? "" : (recipeNavbar_module_default()).active}`,
                    children: t("all")
                })
            }),
            list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (recipeNavbar_module_default()).navItem,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/recipes?category_id=${item.id}`,
                        shallow: true,
                        replace: true,
                        className: `${(recipeNavbar_module_default()).navLink} ${item.id === categoryId ? (recipeNavbar_module_default()).active : ""}`,
                        children: item.translation.title
                    })
                }, item.id)),
            rest.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (recipeNavbar_module_default()).navItem,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: (recipeNavbar_module_default()).moreBtn,
                    onClick: handleOpenDropdown,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (recipeNavbar_module_default()).text,
                            children: t("more")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ArrowDownSLineIcon_default()), {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CategoryDropdown, {
                data: rest,
                handleClickItem: filterByCategory,
                open: openDropdown,
                anchorEl: anchorDropdown,
                onClose: handleCloseDropdown
            })
        ]
    });
}

// EXTERNAL MODULE: ./containers/mobileRecipeNavbar/mobileRecipeNavbar.module.scss
var mobileRecipeNavbar_module = __webpack_require__(25607);
var mobileRecipeNavbar_module_default = /*#__PURE__*/__webpack_require__.n(mobileRecipeNavbar_module);
// EXTERNAL MODULE: ./hooks/useModal.tsx
var useModal = __webpack_require__(37490);
;// CONCATENATED MODULE: ./containers/mobileRecipeNavbar/mobileRecipeNavbar.tsx









const MobileDrawer = dynamic_default()(()=>__webpack_require__.e(/* import() */ 182).then(__webpack_require__.bind(__webpack_require__, 30182)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\mobileRecipeNavbar\\mobileRecipeNavbar.tsx -> " + "containers/drawer/mobileDrawer"
        ]
    }
});
function MobileRecipeNavbar({ categories =[]  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { query  } = (0,router_.useRouter)();
    const categoryId = Number(query.category_id);
    const [visible, handleOpenCategories, handleCloseCategories] = (0,useModal/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (mobileRecipeNavbar_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mobileRecipeNavbar_module_default()).wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: (mobileRecipeNavbar_module_default()).showAllBtn,
                    onClick: handleOpenCategories,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (mobileRecipeNavbar_module_default()).text,
                            children: categoryId ? categories.find((item)=>item.id === categoryId)?.translation?.title : t("all")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ArrowDownSLineIcon_default()), {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileDrawer, {
                open: visible,
                onClose: handleCloseCategories,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (mobileRecipeNavbar_module_default()).drawerWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/recipes",
                            shallow: true,
                            replace: true,
                            className: `${(mobileRecipeNavbar_module_default()).item} ${categoryId ? "" : (mobileRecipeNavbar_module_default()).active}`,
                            onClick: handleCloseCategories,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (mobileRecipeNavbar_module_default()).text,
                                children: t("all")
                            })
                        }),
                        categories.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/recipes?category_id=${item.id}`,
                                shallow: true,
                                replace: true,
                                className: `${(mobileRecipeNavbar_module_default()).item} ${item.id === categoryId ? (mobileRecipeNavbar_module_default()).active : ""}`,
                                onClick: handleCloseCategories,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (mobileRecipeNavbar_module_default()).text,
                                    children: item.translation?.title
                                })
                            }, item.id))
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./containers/recipeListHeader/recipeListHeader.tsx







function RecipeListHeader({ categories =[]  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const isDesktop = (0,material_.useMediaQuery)("(min-width:1140px)");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (recipeListHeader_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (recipeListHeader_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (recipeListHeader_module_default()).title,
                            children: t("recipes.title")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (recipeListHeader_module_default()).text,
                            children: t("recipes.description")
                        })
                    ]
                }),
                isDesktop ? /*#__PURE__*/ jsx_runtime_.jsx(RecipeNavbar, {
                    categories: categories
                }) : /*#__PURE__*/ jsx_runtime_.jsx(MobileRecipeNavbar, {
                    categories: categories
                })
            ]
        })
    });
}


/***/ }),

/***/ 91614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RecipeList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/recipeList/recipeList.module.scss
var recipeList_module = __webpack_require__(87910);
var recipeList_module_default = /*#__PURE__*/__webpack_require__.n(recipeList_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./components/recipeCard/recipeCard.module.scss
var recipeCard_module = __webpack_require__(37315);
var recipeCard_module_default = /*#__PURE__*/__webpack_require__.n(recipeCard_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(69709);
// EXTERNAL MODULE: ./utils/getImage.ts
var getImage = __webpack_require__(95785);
// EXTERNAL MODULE: ./components/fallbackImage/fallbackImage.tsx
var fallbackImage = __webpack_require__(37562);
// EXTERNAL MODULE: external "remixicon-react/TimeFillIcon"
var TimeFillIcon_ = __webpack_require__(33718);
var TimeFillIcon_default = /*#__PURE__*/__webpack_require__.n(TimeFillIcon_);
// EXTERNAL MODULE: external "remixicon-react/RestaurantFillIcon"
var RestaurantFillIcon_ = __webpack_require__(11106);
var RestaurantFillIcon_default = /*#__PURE__*/__webpack_require__.n(RestaurantFillIcon_);
// EXTERNAL MODULE: ./components/shopLogoBackground/shopLogoBackground.tsx
var shopLogoBackground = __webpack_require__(45122);
// EXTERNAL MODULE: ./hooks/useRedux.tsx
var useRedux = __webpack_require__(34349);
// EXTERNAL MODULE: ./redux/slices/currency.ts
var slices_currency = __webpack_require__(64698);
;// CONCATENATED MODULE: ./components/recipeCard/recipeCard.tsx












function RecipeCard({ data  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const currency = (0,useRedux/* useAppSelector */.C)(slices_currency/* selectCurrency */.j);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `/recipes/${data.id}?currency_id=${currency?.id}`,
        className: (recipeCard_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (recipeCard_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx(fallbackImage/* default */.Z, {
                    fill: true,
                    src: (0,getImage/* default */.Z)(data.img),
                    alt: data.translation?.title,
                    sizes: "400px"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (recipeCard_module_default()).body,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (recipeCard_module_default()).title,
                        children: data.translation?.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (recipeCard_module_default()).text,
                        children: data.translation?.description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (recipeCard_module_default()).footer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (recipeCard_module_default()).flex,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TimeFillIcon_default()), {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (recipeCard_module_default()).text,
                                children: [
                                    data.total_time,
                                    " ",
                                    t("min")
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (recipeCard_module_default()).dot
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (recipeCard_module_default()).flex,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((RestaurantFillIcon_default()), {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (recipeCard_module_default()).text,
                                children: [
                                    data.calories,
                                    " ",
                                    t("kkl")
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (recipeCard_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (recipeCard_module_default()).flex,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(shopLogoBackground/* default */.Z, {
                            data: data.shop,
                            size: "small"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: (recipeCard_module_default()).text,
                            children: data.shop?.translation?.title
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./containers/recipeList/recipeList.tsx





function RecipeList({ data , loading  }) {
    const isDesktop = (0,material_.useMediaQuery)("(min-width:1140px)");
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "container",
        style: {
            display: !loading && data.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (recipeList_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                spacing: isDesktop ? 4 : 2,
                children: !loading ? data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        sm: 4,
                        lg: 2.4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(RecipeCard, {
                            data: item
                        })
                    }, item.id)) : Array.from(new Array(5)).map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        sm: 4,
                        lg: 2.4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                            variant: "rectangular",
                            className: (recipeList_module_default()).shimmer
                        })
                    }, "recipe" + idx))
            })
        })
    });
}


/***/ }),

/***/ 58287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePopover() {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event)=>setAnchorEl(event?.currentTarget);
    const handleClose = ()=>setAnchorEl(null);
    return [
        open,
        anchorEl,
        handleOpen,
        handleClose
    ];
}


/***/ }),

/***/ 43780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recipes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var containers_recipeListHeader_recipeListHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60204);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56457);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var services_recipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85685);
/* harmony import */ var containers_recipeList_recipeList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91614);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_category__WEBPACK_IMPORTED_MODULE_6__, services_recipe__WEBPACK_IMPORTED_MODULE_9__]);
([services_category__WEBPACK_IMPORTED_MODULE_6__, services_recipe__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Empty = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(520)]).then(__webpack_require__.bind(__webpack_require__, 20520)), {
    loadableGenerated: {
        modules: [
            "recipes\\index.tsx -> " + "components/empty/empty"
        ]
    }
});
const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 7935).then(__webpack_require__.bind(__webpack_require__, 37935)), {
    loadableGenerated: {
        modules: [
            "recipes\\index.tsx -> " + "components/loader/loader"
        ]
    }
});
const FooterMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(26), __webpack_require__.e(7567), __webpack_require__.e(1612), __webpack_require__.e(1929), __webpack_require__.e(256), __webpack_require__.e(8423), __webpack_require__.e(6323), __webpack_require__.e(4779), __webpack_require__.e(807), __webpack_require__.e(544), __webpack_require__.e(9379)]).then(__webpack_require__.bind(__webpack_require__, 90544)), {
    loadableGenerated: {
        modules: [
            "recipes\\index.tsx -> " + "containers/footerMenu/footerMenu"
        ]
    }
});
const PER_PAGE = 12;
function Recipes({}) {
    const { i18n , t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const locale = i18n.language;
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const categoryId = Number(query.category_id);
    const shopId = Number(query.shop_id);
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { data: categories  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "recipeCategories",
        locale
    ], ()=>services_category__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAllRecipeCategories */ .Z.getAllRecipeCategories({
            perPage: 100
        }));
    const { data , error , fetchNextPage , hasNextPage , isFetchingNextPage , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useInfiniteQuery)([
        "recipes",
        categoryId,
        shopId,
        locale
    ], ({ pageParam =1  })=>services_recipe__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getAll */ .Z.getAll({
            page: pageParam,
            perPage: PER_PAGE,
            category_id: categoryId || undefined,
            shop_id: shopId || undefined
        }), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        }
    });
    const recipes = data?.pages?.flatMap((item)=>item.data) || [];
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((entries)=>{
        const target = entries[0];
        if (target.isIntersecting && hasNextPage) {
            fetchNextPage();
        }
    }, [
        fetchNextPage,
        hasNextPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [
        handleObserver,
        hasNextPage,
        fetchNextPage
    ]);
    if (error) {
        console.log("error => ", error);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("recipes.title"),
                description: t("recipes.description")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    minHeight: "100vh"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_recipeListHeader_recipeListHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        categories: categories?.data
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_recipeList_recipeList__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: recipes,
                        loading: isLoading && !isFetchingNextPage
                    }),
                    isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loader, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: loader
                    }),
                    !recipes.length && !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Empty, {
                        text: t("no.recipes")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterMenu, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const categoryService = {
    getAllShopCategories: (params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/categories/paginate`, {
            params: {
                ...params,
                type: "shop"
            }
        }),
    getAllSubCategories: (categoryId, params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`rest/categories/sub-shop/${categoryId}`, {
            params
        }),
    getAllProductCategories: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/shops/${id}/categories`, {
            params
        }),
    getAllRecipeCategories: (params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/categories/paginate`, {
            params: {
                ...params,
                type: "receipt"
            }
        }),
    getById: (id, params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/categories/${id}`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 33718:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/TimeFillIcon");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5152,5728,4169,5122,4979], () => (__webpack_exec__(43780)));
module.exports = __webpack_exports__;

})();