exports.id = 2742;
exports.ids = [2742];
exports.modules = {

/***/ 57421:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "mobileSearch_search__UC3Qx"
};


/***/ }),

/***/ 38488:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "mobileSearchContainer_root__dwdkL",
	"wrapper": "mobileSearchContainer_wrapper__cQnFf",
	"header": "mobileSearchContainer_header__ole3N",
	"title": "mobileSearchContainer_title__3audD",
	"text": "mobileSearchContainer_text__UpHfs",
	"body": "mobileSearchContainer_body__vu6IP",
	"footer": "mobileSearchContainer_footer__K_feH",
	"circleBtn": "mobileSearchContainer_circleBtn__JchEu"
};


/***/ }),

/***/ 79058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MobileSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobileSearch_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57421);
/* harmony import */ var _mobileSearch_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mobileSearch_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78428);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);





function MobileSearch({ searchTerm , setSearchTerm  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        inputRef.current?.focus();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_mobileSearch_module_scss__WEBPACK_IMPORTED_MODULE_4___default().search),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "search",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                id: "search",
                ref: inputRef,
                placeholder: t("search"),
                autoComplete: "off",
                value: searchTerm,
                onChange: (event)=>setSearchTerm(event.target.value)
            })
        ]
    });
}


/***/ }),

/***/ 32742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileSearchContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mobileSearchContainer_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38488);
/* harmony import */ var _mobileSearchContainer_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mobileSearchContainer_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48606);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47567);
/* harmony import */ var remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(625);
/* harmony import */ var remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_mobileSearch_mobileSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79058);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1612);
/* harmony import */ var services_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32837);
/* harmony import */ var components_searchResult_searchResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62633);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2950);
/* harmony import */ var components_searchSuggestion_searchSuggestion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54935);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux_slices_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20330);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_7__, services_product__WEBPACK_IMPORTED_MODULE_8__]);
([services_shop__WEBPACK_IMPORTED_MODULE_7__, services_product__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function MobileSearchContainer(props) {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)();
    const locale = i18n.language;
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const debouncedSearchTerm = (0,hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(searchTerm.trim(), 400);
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
    const resetSearch = ()=>setSearchTerm("");
    const { data: shops , fetchNextPage: fetchShopsNextPage , hasNextPage: hasShopsNextPage , isFetchingNextPage: isFetchingShopsNextPage , isLoading: isShopsLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useInfiniteQuery)([
        "shopResult",
        debouncedSearchTerm,
        location,
        locale
    ], ({ pageParam =1  })=>services_shop__WEBPACK_IMPORTED_MODULE_7__/* ["default"].search */ .Z.search({
            search: debouncedSearchTerm,
            page: pageParam,
            address: location,
            open: 1
        }), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        },
        retry: false,
        enabled: !!debouncedSearchTerm
    });
    const { data: products , fetchNextPage: fetchProductsNextPage , hasNextPage: hasProductsNextPage , isFetchingNextPage: isFetchingProductsNextPage , isLoading: isProductsLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useInfiniteQuery)([
        "productResult",
        debouncedSearchTerm,
        locale
    ], ({ pageParam =1  })=>services_product__WEBPACK_IMPORTED_MODULE_8__/* ["default"].search */ .Z.search({
            search: debouncedSearchTerm,
            page: pageParam,
            address: location
        }), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        },
        retry: false,
        enabled: !!debouncedSearchTerm,
        onSuccess: ()=>{
            dispatch((0,redux_slices_search__WEBPACK_IMPORTED_MODULE_13__/* .addToSearch */ .fy)(debouncedSearchTerm));
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ...props,
        closable: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_mobileSearchContainer_module_scss__WEBPACK_IMPORTED_MODULE_15___default().root),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mobileSearch_mobileSearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    searchTerm: searchTerm,
                    setSearchTerm: setSearchTerm
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_mobileSearchContainer_module_scss__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
                    children: [
                        !!debouncedSearchTerm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_searchResult_searchResult__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            isVisibleShops: true,
                            shops: shops?.pages?.flatMap((item)=>item.data) || [],
                            products: products?.pages?.flatMap((item)=>item.data) || [],
                            isLoading: isShopsLoading || isProductsLoading,
                            handleClickItem: ()=>{
                                resetSearch();
                                if (props.onClose) props.onClose({}, "backdropClick");
                            },
                            productTotal: products?.pages ? products.pages[0].meta.total : 0,
                            shopTotal: shops?.pages ? shops.pages[0].meta.total : 0,
                            isFetchingShopsNextPage: isFetchingShopsNextPage,
                            isFetchingProductsNextPage: isFetchingProductsNextPage,
                            hasProductsNextPage: !!hasProductsNextPage,
                            hasShopsNextPage: !!hasShopsNextPage,
                            fetchProductsNextPage: fetchProductsNextPage,
                            fetchShopsNextPage: fetchShopsNextPage
                        }),
                        !debouncedSearchTerm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_searchSuggestion_searchSuggestion__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            setSearchTerm: setSearchTerm
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_mobileSearchContainer_module_scss__WEBPACK_IMPORTED_MODULE_15___default().footer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_mobileSearchContainer_module_scss__WEBPACK_IMPORTED_MODULE_15___default().circleBtn),
                        onClick: (event)=>{
                            if (props.onClose) props.onClose(event, "backdropClick");
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
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