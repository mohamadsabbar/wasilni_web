exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 95459:
/***/ ((module) => {

// Exports
module.exports = {
	"cartBtnWrapper": "cartButton_cartBtnWrapper__s1KDe",
	"cartBtn": "cartButton_cartBtn__rc1gE",
	"text": "cartButton_text__l8_Mk",
	"price": "cartButton_price__gFdJ8"
};


/***/ }),

/***/ 45900:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "reservationFind_wrapper__t5boY",
	"title": "reservationFind_title__Jaylc",
	"form": "reservationFind_form__ixHxu",
	"loadingBox": "reservationFind_loadingBox__mDlWR"
};


/***/ }),

/***/ 93881:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "searchResultItem_row__3W2Do",
	"flex": "searchResultItem_flex__GU1FF",
	"naming": "searchResultItem_naming__kcii_",
	"shopTitle": "searchResultItem_shopTitle___tQCy",
	"desc": "searchResultItem_desc__2Fw5M",
	"price": "searchResultItem_price__ICfd2",
	"shopNaming": "searchResultItem_shopNaming__03EtZ",
	"titleRateContainer": "searchResultItem_titleRateContainer__jw8MZ",
	"rating": "searchResultItem_rating___0F1z",
	"text": "searchResultItem_text__O6SXX",
	"workTime": "searchResultItem_workTime__bl1k1",
	"imgWrapper": "searchResultItem_imgWrapper__KLKVB"
};


/***/ }),

/***/ 3820:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "footerMenu_root__3PXHb",
	"scroll": "footerMenu_scroll__UIloU",
	"up": "footerMenu_up__geFxf",
	"down": "footerMenu_down__Mqnic",
	"flex": "footerMenu_flex__njb7T",
	"wrapper": "footerMenu_wrapper__RnaDx",
	"list": "footerMenu_list__IcrDx",
	"item": "footerMenu_item__S_k7w",
	"link": "footerMenu_link__8igHG",
	"text": "footerMenu_text__L4JpA",
	"active": "footerMenu_active__Vxyi3"
};


/***/ }),

/***/ 4253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cartButton_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95459);
/* harmony import */ var _cartButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14282);
/* harmony import */ var remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13508);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90026);









function CartButton({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)(redux_slices_cart__WEBPACK_IMPORTED_MODULE_6__/* .selectCart */ .KY);
    const totalPrice = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)(redux_slices_cart__WEBPACK_IMPORTED_MODULE_6__/* .selectTotalPrice */ .gK);
    if (cart.length) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cartBtnWrapper),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/shop/${cart[0].shop_id}`,
                className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cartBtn),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t("order")
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    number: totalPrice
                                })
                            })
                        ]
                    })
                ]
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
    }
}


/***/ }),

/***/ 27668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProtectedCartButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cartButton_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95459);
/* harmony import */ var _cartButton_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14282);
/* harmony import */ var remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96477);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var services_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18423);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90026);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64698);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1612);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_cart__WEBPACK_IMPORTED_MODULE_8__, services_shop__WEBPACK_IMPORTED_MODULE_11__]);
([services_cart__WEBPACK_IMPORTED_MODULE_8__, services_shop__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ProtectedCartButton({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)(redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .selectUserCart */ .Ns);
    const cartIndicatorVisible = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.userCart.indicatorVisible);
    const cartItems = cart?.user_carts.flatMap((item)=>item.cartDetails) || [];
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_10__/* .selectCurrency */ .j);
    const { location  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_12__/* .useSettings */ .r)();
    (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)([
        "cart",
        currency?.id
    ], ()=>services_cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"].get */ .Z.get({
            currency_id: currency?.id
        }), {
        onSuccess: (data)=>dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .updateUserCart */ .CR)(data.data)),
        onError: ()=>dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .clearUserCart */ .tx)()),
        retry: false
    });
    const locationArray = location.split(",");
    (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)([
        "shopZone",
        location
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_11__/* ["default"].checkZoneById */ .Z.checkZoneById(cart?.shop_id, {
            address: {
                latitude: locationArray.at(0),
                longitude: locationArray.at(1)
            }
        }), {
        onError: ()=>dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .updateIndicatorState */ .my)(false)),
        onSuccess: ()=>dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .updateIndicatorState */ .my)(true)),
        enabled: !!cartItems.length
    });
    if (cartItems.length && cartIndicatorVisible) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cartBtnWrapper),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/shop/${cart.shop_id}`,
                className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_13___default().cartBtn),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ShoppingBag3LineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t("order")
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_cartButton_module_scss__WEBPACK_IMPORTED_MODULE_13___default().price),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    number: cart.total_price
                                })
                            })
                        ]
                    })
                ]
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RcShopSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_usePopover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58287);
/* harmony import */ var _pickers_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88297);
/* harmony import */ var _pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var containers_popover_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56060);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48606);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_loader_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37935);
/* harmony import */ var components_searchResultItem_shopResultWithoutLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14589);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_6__]);
services_shop__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function RcShopSelect({ label , value , onChange , error , hasSection  }) {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const locale = i18n.language;
    const shopLoader = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const [open, anchor, handleOpen, handleClose] = (0,hooks_usePopover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const debouncedSearchTerm = (0,hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(searchTerm.trim(), 400);
    const { data: shops , fetchNextPage: fetchShopsNextPage , hasNextPage: hasShopsNextPage , isFetchingNextPage: isFetchingShopsNextPage , isLoading: isShopsLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useInfiniteQuery)([
        "shopResult",
        debouncedSearchTerm,
        location,
        locale,
        hasSection
    ], ({ pageParam =1  })=>services_shop__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAllBooking */ .Z.getAllBooking(qs__WEBPACK_IMPORTED_MODULE_11___default().stringify({
            search: debouncedSearchTerm,
            page: pageParam,
            address: location,
            open: 1,
            has_section: hasSection
        })), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        },
        retry: false
    });
    const shopList = shops?.pages?.flatMap((item)=>item.data) || [];
    const handleObserverShops = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((entries)=>{
        const target = entries[0];
        if (target.isIntersecting && hasShopsNextPage) {
            fetchShopsNextPage();
        }
    }, [
        hasShopsNextPage,
        fetchShopsNextPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserverShops, option);
        if (shopLoader.current) observer.observe(shopLoader.current);
    }, [
        handleObserverShops,
        hasShopsNextPage,
        fetchShopsNextPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (value) {
            setSearchTerm(value?.translation?.title || "");
        }
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container)} ${(_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().outlined)} ${(_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shopContainer)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: `${(_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().wrapper)} ${error ? (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().error) : ""}`,
                type: "text",
                id: "search_restaurant",
                placeholder: t("search.restaurant"),
                autoComplete: "off",
                value: searchTerm,
                onChange: (event)=>{
                    setSearchTerm(event.target.value);
                    onChange(undefined);
                },
                onFocus: handleOpen,
                onBlur: handleClose
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_popover_popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
                open: open,
                anchorEl: anchor,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                anchorPosition: {
                    top: 0,
                    left: 0
                },
                disableAutoFocus: true,
                children: !isShopsLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shopWrapper),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().block)} ${(_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().line)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().header),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                                            children: t("restaurant")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                            children: t("found.number.results", {
                                                count: shops?.pages ? shops.pages[0].meta.total : 0
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().body),
                                    children: shopList.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_searchResultItem_shopResultWithoutLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            data: item,
                                            onClickItem: (data)=>{
                                                onChange(data);
                                                handleClose();
                                            }
                                        }, item.id))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: shopLoader
                        }),
                        isFetchingShopsNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_loader_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {})
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shopWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),
                        children: Array.from(new Array(2)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Skeleton, {
                                variant: "rectangular",
                                className: (_pickers_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shimmer)
                            }, "result" + idx))
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReservationFind)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reservationFind_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45900);
/* harmony import */ var _reservationFind_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_reservationFind_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77262);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18074);
/* harmony import */ var components_pickers_rcDatePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84779);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80892);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_booking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77322);
/* harmony import */ var contexts_restaurant_restaurant_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88275);
/* harmony import */ var utils_getFirstReservationDate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30268);
/* harmony import */ var components_pickers_rcShopSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_booking__WEBPACK_IMPORTED_MODULE_10__, components_pickers_rcShopSelect__WEBPACK_IMPORTED_MODULE_13__]);
([services_booking__WEBPACK_IMPORTED_MODULE_10__, components_pickers_rcShopSelect__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function ReservationFind({ handleClose  }) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { restaurant  } = (0,contexts_restaurant_restaurant_context__WEBPACK_IMPORTED_MODULE_11__/* .useRestaurant */ .w)();
    const searchAndSelectRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [selectedShop, setSelectedShop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { data: zones  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)([
        "zones",
        locale,
        selectedShop?.id
    ], ()=>services_booking__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getZones */ .Z.getZones({
            page: 1,
            perPage: 100,
            shop_id: selectedShop?.id
        }), {
        select: (data)=>data.data.map((item)=>({
                    label: item.translation?.title || "",
                    value: String(item.id),
                    data: item
                })),
        enabled: !!selectedShop
    });
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: {
            shop_id: selectedShop?.id,
            zone_id: zones ? zones[0]?.value : undefined,
            date: restaurant ? (0,utils_getFirstReservationDate__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(restaurant).date : undefined,
            number_of_people: 2
        },
        enableReinitialize: true,
        onSubmit: (values, { setSubmitting  })=>{
            push({
                pathname: `/reservations/${values.shop_id}`,
                query: {
                    zone_id: values.zone_id,
                    date_from: values.date,
                    guests: 2
                }
            }).finally(()=>setSubmitting(true));
        },
        validate: (values)=>{
            const errors = {};
            if (!values.date) {
                errors.date = t("required");
            }
            if (!values.shop_id) {
                errors.shop_id = t("required");
            }
            return errors;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_reservationFind_module_scss__WEBPACK_IMPORTED_MODULE_14___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_reservationFind_module_scss__WEBPACK_IMPORTED_MODULE_14___default().title),
                children: t("make.reservation")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: (_reservationFind_module_scss__WEBPACK_IMPORTED_MODULE_14___default().form),
                onSubmit: formik.handleSubmit,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: 4,
                    ref: searchAndSelectRef,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pickers_rcShopSelect__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                hasSection: 1,
                                label: t("restaurant"),
                                value: selectedShop,
                                onChange: (value)=>{
                                    setSelectedShop(value);
                                    formik.setFieldValue("shop_id", value?.id);
                                },
                                error: !!formik.errors.shop_id && formik.touched.shop_id
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pickers_rcDatePicker__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                name: "date",
                                label: t("date"),
                                value: formik.values.date,
                                error: !!formik.errors.zone_id && formik.touched.zone_id,
                                onChange: (event)=>{
                                    formik.setFieldValue("date", event);
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "button",
                                onClick: handleClose,
                                children: t("cancel")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                type: "submit",
                                children: t("find.table")
                            })
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ShopResultWithoutLinkItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./components/searchResultItem/searchResultItem.module.scss
var searchResultItem_module = __webpack_require__(93881);
var searchResultItem_module_default = /*#__PURE__*/__webpack_require__.n(searchResultItem_module);
// EXTERNAL MODULE: ./components/shopLogoBackground/shopLogoBackground.tsx
var shopLogoBackground = __webpack_require__(45122);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: external "remixicon-react/StarSmileFillIcon"
var StarSmileFillIcon_ = __webpack_require__(36487);
var StarSmileFillIcon_default = /*#__PURE__*/__webpack_require__.n(StarSmileFillIcon_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./constants/weekdays.ts
var weekdays = __webpack_require__(85028);
;// CONCATENATED MODULE: ./hooks/useShopBookingSchedule.tsx



function useShopBookingSchedule(data) {
    const { workingSchedule , isShopClosed , isOpen  } = (0,external_react_.useMemo)(()=>{
        const today = external_dayjs_default()().format("YYYY-MM-DD");
        const weekDay = weekdays/* WEEK */.p[external_dayjs_default()().day()];
        const foundedSchedule = data?.booking_shop_working_days?.find((item)=>item.day === weekDay);
        const isHoliday = data?.booking_shop_closed_date?.some((item)=>external_dayjs_default()(item.day).isSame(external_dayjs_default()()));
        const isClosed = !data?.open || isHoliday;
        let schedule = {};
        let isTimePassed = false;
        try {
            if (foundedSchedule) {
                schedule = {
                    ...foundedSchedule
                };
                schedule.from = schedule.from.replace("-", ":");
                schedule.to = schedule.to.replace("-", ":");
                isTimePassed = external_dayjs_default()().isAfter(`${today} ${schedule.to}`);
            }
        } catch (err) {
            console.log("err => ", err);
        }
        return {
            workingSchedule: schedule,
            isShopClosed: schedule.disabled || isClosed || isTimePassed,
            isOpen: Boolean(data?.open)
        };
    }, [
        data
    ]);
    return {
        workingSchedule,
        isShopClosed,
        isOpen
    };
}

;// CONCATENATED MODULE: ./components/searchResultItem/shopResultWithoutLink.tsx







function ShopResultWithoutLinkItem({ data , onClickItem  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    const { workingSchedule , isShopClosed  } = useShopBookingSchedule(data);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (searchResultItem_module_default()).row,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: (searchResultItem_module_default()).flex,
            onClick: ()=>!!onClickItem && onClickItem(data),
            style: {
                width: "100%"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(shopLogoBackground/* default */.Z, {
                    data: data
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (searchResultItem_module_default()).shopNaming,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (searchResultItem_module_default()).titleRateContainer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: (searchResultItem_module_default()).shopTitle,
                                    children: data.translation?.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(searchResultItem_module_default()).rating}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((StarSmileFillIcon_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: (searchResultItem_module_default()).text,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (searchResultItem_module_default()).semiBold,
                                                children: data?.rating_avg?.toFixed(1) || 0
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: (searchResultItem_module_default()).workTime,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        t("working.time"),
                                        ": "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (searchResultItem_module_default()).bold,
                                    children: isShopClosed ? t("closed") : `${workingSchedule.from} — ${workingSchedule.to}`
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 90544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3820);
/* harmony import */ var _footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var remixicon_react_RestaurantFillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11106);
/* harmony import */ var remixicon_react_RestaurantFillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_RestaurantFillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_HistoryFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9362);
/* harmony import */ var remixicon_react_HistoryFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_HistoryFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26582);
/* harmony import */ var remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48775);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29969);
/* harmony import */ var components_cartButton_protectedCartButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27668);
/* harmony import */ var components_cartButton_cartButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4253);
/* harmony import */ var remixicon_react_ReservedLineIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92713);
/* harmony import */ var remixicon_react_ReservedLineIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ReservedLineIcon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37490);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47567);
/* harmony import */ var components_reservationFind_reservationFind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75301);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cartButton_protectedCartButton__WEBPACK_IMPORTED_MODULE_10__, components_reservationFind_reservationFind__WEBPACK_IMPORTED_MODULE_15__]);
([components_cartButton_protectedCartButton__WEBPACK_IMPORTED_MODULE_10__, components_reservationFind_reservationFind__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function FooterMenu({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const scrollDirection = (0,hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_8__/* .useScrollDirection */ .C)();
    const { isAuthenticated  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
    const [openReservation, handleOpenReservation, handleCloseReservation] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_16__/* .useSettings */ .r)();
    const reservationEnableForUser = settings?.reservation_enable_for_user === "1";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().scroll)} ${(_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default())[scrollDirection]}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().flex),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().wrapper),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().list),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().item),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            className: `${(_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().link)} ${pathname === "/" ? (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().active) : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_RestaurantFillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().text),
                                                    children: t("foods")
                                                })
                                            ]
                                        })
                                    }),
                                    isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().item),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/orders",
                                            className: `${(_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().link)} ${pathname.includes("orders") ? (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().active) : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_HistoryFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().text),
                                                    children: t("orders")
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().item),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/liked",
                                            className: `${(_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().link)} ${pathname.includes("liked") ? (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().active) : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().text),
                                                    children: t("liked")
                                                })
                                            ]
                                        })
                                    }),
                                    reservationEnableForUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().item),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().link),
                                            onClick: handleOpenReservation,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ReservedLineIcon__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_footerMenu_module_scss__WEBPACK_IMPORTED_MODULE_17___default().text),
                                                    children: t("reservation")
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cartButton_protectedCartButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cartButton_cartButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                open: openReservation,
                onClose: handleCloseReservation,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_reservationFind_reservationFind__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    handleClose: handleCloseReservation
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useRestaurant)
/* harmony export */ });
/* unused harmony export RestaurantContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const RestaurantContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useRestaurant = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RestaurantContext);


/***/ }),

/***/ 48775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useScrollDirection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ScrollDirection = {
    up: "up",
    down: "down"
};
const useScrollDirection = ()=>{
    const threshold = 100;
    const [scrollDir, setScrollDir] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ScrollDirection.up);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let previousScrollYPosition = window.scrollY;
        const scrolledMoreThanThreshold = (currentScrollYPosition)=>Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;
        const isScrollingUp = (currentScrollYPosition)=>currentScrollYPosition > previousScrollYPosition && !(previousScrollYPosition > 0 && currentScrollYPosition === 0) && !(currentScrollYPosition > 0 && previousScrollYPosition === 0);
        const updateScrollDirection = ()=>{
            const currentScrollYPosition = window.scrollY;
            if (scrolledMoreThanThreshold(currentScrollYPosition)) {
                const newScrollDirection = isScrollingUp(currentScrollYPosition) ? ScrollDirection.down : ScrollDirection.up;
                setScrollDir(newScrollDirection);
                previousScrollYPosition = currentScrollYPosition > 0 ? currentScrollYPosition : 0;
            }
        };
        const onScroll = ()=>window.requestAnimationFrame(updateScrollDirection);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    return scrollDir;
};


/***/ }),

/***/ 30268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getFirstReservationDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkIsDisabledDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59041);
/* harmony import */ var _roundedDeliveryTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66540);



function getSchedule(day, data) {
    return data?.shop_working_days?.find((item)=>item.day?.toLowerCase() === day.format("dddd").toLowerCase());
}
function getFirstReservationDate(data) {
    let beforeReservationTime = 30;
    let roundBy = 30;
    let date = "";
    let time = "";
    for(let index = 0; index < 7; index++){
        const isToday = index === 0;
        if (!(0,_checkIsDisabledDay__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(index, data)) {
            date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(index, "day").format("YYYY-MM-DD");
            if (isToday) {
                time = (0,_roundedDeliveryTime__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(index, "day"), beforeReservationTime, roundBy);
            } else {
                const day = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(index, "day");
                const foundedSchedule = getSchedule(day, data);
                const openTime = foundedSchedule?.from?.replace("-", ":");
                time = (0,_roundedDeliveryTime__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(`${date} ${openTime}`), beforeReservationTime, roundBy);
            }
            break;
        }
    }
    return {
        date,
        time
    };
}


/***/ })

};
;