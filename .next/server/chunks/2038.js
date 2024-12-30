"use strict";
exports.id = 2038;
exports.ids = [2038];
exports.modules = {

/***/ 92038:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56457);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5215);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34349);
/* harmony import */ var services_story__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13443);
/* harmony import */ var services_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94910);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2950);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18074);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_4__, services_category__WEBPACK_IMPORTED_MODULE_6__, services_story__WEBPACK_IMPORTED_MODULE_9__, services_banner__WEBPACK_IMPORTED_MODULE_10__]);
([services_shop__WEBPACK_IMPORTED_MODULE_4__, services_category__WEBPACK_IMPORTED_MODULE_6__, services_story__WEBPACK_IMPORTED_MODULE_9__, services_banner__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const BannerContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(5613), __webpack_require__.e(9776)]).then(__webpack_require__.bind(__webpack_require__, 75613)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "containers/banner/banner"
        ]
    }
});
const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 7935).then(__webpack_require__.bind(__webpack_require__, 37935)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "components/loader/loader"
        ]
    }
});
const ZoneNotFound = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 3135).then(__webpack_require__.bind(__webpack_require__, 3135)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "components/zoneNotFound/zoneNotFound"
        ]
    }
});
const Navbar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(865), __webpack_require__.e(1662), __webpack_require__.e(6694), __webpack_require__.e(5851), __webpack_require__.e(488)]).then(__webpack_require__.bind(__webpack_require__, 48709)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "containers/navbar/navbar"
        ]
    }
});
const MobileNavbar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 8253).then(__webpack_require__.bind(__webpack_require__, 28253)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "containers/mobileNavbar/mobileNavbar"
        ]
    }
});
const Empty = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(520)]).then(__webpack_require__.bind(__webpack_require__, 20520)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "components/empty/empty"
        ]
    }
});
const ShopList = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(6684), __webpack_require__.e(26), __webpack_require__.e(3444), __webpack_require__.e(2554), __webpack_require__.e(1855), __webpack_require__.e(1363), __webpack_require__.e(1636)]).then(__webpack_require__.bind(__webpack_require__, 41363)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "containers/shopList/shopList"
        ]
    }
});
const FooterMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(7262), __webpack_require__.e(26), __webpack_require__.e(7567), __webpack_require__.e(5122), __webpack_require__.e(1929), __webpack_require__.e(256), __webpack_require__.e(8423), __webpack_require__.e(6323), __webpack_require__.e(4779), __webpack_require__.e(807), __webpack_require__.e(544), __webpack_require__.e(9802)]).then(__webpack_require__.bind(__webpack_require__, 90544)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shops\\shopsPage.tsx -> " + "containers/footerMenu/footerMenu"
        ]
    }
});
const PER_PAGE = 12;
function ShopsPage() {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(min-width:1140px)");
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { category_id , newest , order_by , group  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .C)(redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_7__/* .selectShopFilter */ .qs);
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { data: stories , isLoading: isStoriesLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "stories",
        locale
    ], ()=>services_story__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getAll */ .Z.getAll());
    const { data: banners , isLoading: isBannerLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "banners",
        locale
    ], ()=>services_banner__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getAll */ .Z.getAll());
    const { isSuccess: isInsideZone , isLoading: isZoneLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "shopZones",
        location
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_4__/* ["default"].checkZone */ .Z.checkZone({
            address: location
        }));
    const { data , error , fetchNextPage , hasNextPage , isFetchingNextPage , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)([
        "shops",
        category_id,
        locale,
        order_by,
        group,
        location,
        newest,
        query?.verfiy
    ], ({ pageParam =1  })=>services_shop__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllShops */ .Z.getAllShops(qs__WEBPACK_IMPORTED_MODULE_13___default().stringify({
            page: pageParam,
            perPage: PER_PAGE,
            category_id: category_id ?? undefined,
            order_by: newest ? "new" : order_by,
            free_delivery: group.free_delivery,
            take: group.tag,
            rating: group.rating?.split(","),
            prices: group.prices,
            address: location,
            open: Number(group.open) || undefined,
            deals: group.deals,
            verify: query?.verify
        })), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        }
    });
    const shops = data?.pages?.flatMap((item)=>item.data) || [];
    const { data: shopCategories  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)("shopCategories", ()=>services_category__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAllShopCategories */ .Z.getAllShopCategories());
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((entries)=>{
        const target = entries[0];
        if (target.isIntersecting && hasNextPage) {
            fetchNextPage();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerContainer, {
                stories: stories || [],
                banners: banners?.data || [],
                loadingStory: isStoriesLoading,
                loadingBanner: isBannerLoading
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Navbar, {
                categories: shopCategories?.data || []
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNavbar, {
                categories: shopCategories?.data || []
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopList, {
                title: t("all.shops"),
                shops: data?.pages?.flatMap((item)=>item.data) || [],
                loading: isLoading && !isFetchingNextPage
            }),
            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loader, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: loader
            }),
            !isInsideZone && !isZoneLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ZoneNotFound, {}),
            !shops.length && !isLoading && isInsideZone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Empty, {
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

/***/ 94910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const bannerService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/banners/paginate`, {
            params
        }),
    getById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/banners/${id}`, {
            params
        }),
    getAllAds: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/rest/banners-ads", {
            params
        }),
    getAdById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/banners-ads/${id}`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 13443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const storyService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/stories/paginate`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storyService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;