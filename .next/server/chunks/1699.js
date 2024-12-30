"use strict";
exports.id = 1699;
exports.ids = [1699];
exports.modules = {

/***/ 41699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2950);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18074);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64698);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_3__]);
services_shop__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 7935).then(__webpack_require__.bind(__webpack_require__, 37935)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\v4.tsx -> " + "components/loader/loader"
        ]
    }
});
const Empty = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(520)]).then(__webpack_require__.bind(__webpack_require__, 20520)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\v4.tsx -> " + "components/empty/empty"
        ]
    }
});
const ShopList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(6684), __webpack_require__.e(26), __webpack_require__.e(3444), __webpack_require__.e(9829), __webpack_require__.e(1879)]).then(__webpack_require__.bind(__webpack_require__, 59829)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\v4.tsx -> " + "containers/shopList/v4"
        ]
    }
});
const FooterMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(7262), __webpack_require__.e(26), __webpack_require__.e(7567), __webpack_require__.e(5122), __webpack_require__.e(1929), __webpack_require__.e(256), __webpack_require__.e(8423), __webpack_require__.e(6323), __webpack_require__.e(4779), __webpack_require__.e(807), __webpack_require__.e(544), __webpack_require__.e(6912)]).then(__webpack_require__.bind(__webpack_require__, 90544)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\v4.tsx -> " + "containers/footerMenu/footerMenu"
        ]
    }
});
const PER_PAGE = 12;
function ShopsPage() {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_9__/* .selectCurrency */ .j);
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const filter = query?.filter;
    const { data: popularShops , error , fetchNextPage , hasNextPage , isFetchingNextPage , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useInfiniteQuery)([
        "popularShopsPaginate",
        locale,
        location,
        currency,
        filter,
        query?.verify
    ], ({ pageParam =1  })=>services_shop__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getAll */ .Z.getAll(qs__WEBPACK_IMPORTED_MODULE_7___default().stringify({
            page: pageParam,
            perPage: PER_PAGE,
            address: location,
            open: filter === "popular" ? 1 : undefined,
            currency_id: currency?.id,
            verify: query?.verify
        })), {
        enabled: filter !== "recomended",
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        }
    });
    const { data: recommendedShops , isLoading: isRecomendedLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "recommendedShops",
        locale,
        location,
        currency,
        filter
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getRecommended */ .Z.getRecommended({
            address: location,
            currency_id: currency?.id
        }), {
        enabled: filter === "recomended"
    });
    const shops = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        switch(filter){
            case "popular":
                return popularShops?.pages?.flatMap((item)=>item.data) || [];
            case "recomended":
                return recommendedShops?.data || [];
            default:
                return popularShops?.pages?.flatMap((item)=>item.data) || [];
        }
    }, [
        popularShops,
        filter,
        recommendedShops
    ]);
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((entries)=>{
        const target = entries[0];
        if (target.isIntersecting && hasNextPage) {
            fetchNextPage();
        }
    }, [
        fetchNextPage,
        hasNextPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [
        handleObserver
    ]);
    if (error) {
        console.log("error => ", error);
    }
    function getTitle(type) {
        switch(type){
            case "popular":
                return t("popular.near.you");
            case "recomended":
                return t("daily.offers");
            default:
                return t("all");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopList, {
                title: getTitle(filter),
                shops: shops,
                loading: isLoading && !isFetchingNextPage || isRecomendedLoading
            }),
            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loader, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: loader
            }),
            !shops.length && !isLoading && !recommendedShops?.data?.length && !isRecomendedLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Empty, {
                text: t("no.shops")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterMenu, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext),
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SettingsContext);


/***/ }),

/***/ 18074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);

function useLocale() {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
    const locale = i18n.language;
    const addResourceBundle = i18n.addResourceBundle;
    const changeLanguage = i18n.changeLanguage;
    return {
        t,
        locale,
        addResourceBundle,
        changeLanguage
    };
}


/***/ }),

/***/ 34349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUserLocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21697);


function useUserLocation() {
    const { location: userLocation  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_1__/* .useSettings */ .r)();
    const location = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const latlng = userLocation;
        if (!latlng) {
            return undefined;
        }
        return {
            latitude: latlng.split(",")[0],
            longitude: latlng.split(",")[1]
        };
    }, [
        userLocation
    ]);
    return location;
}


/***/ }),

/***/ 64698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NW": () => (/* binding */ setCurrency),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bJ": () => (/* binding */ setDefaultCurrency),
/* harmony export */   "j": () => (/* binding */ selectCurrency)
/* harmony export */ });
/* unused harmony export clearCurrency */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    currency: null,
    defaultCurrency: null
};
const currencySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "currency",
    initialState,
    reducers: {
        setCurrency (state, action) {
            const { payload  } = action;
            state.currency = payload;
        },
        setDefaultCurrency (state, action) {
            const { payload  } = action;
            state.defaultCurrency = payload;
        },
        clearCurrency (state) {
            state.currency = null;
        }
    }
});
const { setCurrency , clearCurrency , setDefaultCurrency  } = currencySlice.actions;
const selectCurrency = (state)=>state.currency.currency;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencySlice.reducer);


/***/ })

};
;