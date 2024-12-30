"use strict";
exports.id = 4144;
exports.ids = [4144];
exports.modules = {

/***/ 14144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18074);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1612);
/* harmony import */ var services_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56457);
/* harmony import */ var services_story__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13443);
/* harmony import */ var services_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94910);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2950);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64698);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_4__, services_category__WEBPACK_IMPORTED_MODULE_5__, services_story__WEBPACK_IMPORTED_MODULE_6__, services_banner__WEBPACK_IMPORTED_MODULE_7__]);
([services_shop__WEBPACK_IMPORTED_MODULE_4__, services_category__WEBPACK_IMPORTED_MODULE_5__, services_story__WEBPACK_IMPORTED_MODULE_6__, services_banner__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const CategoryContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 3137).then(__webpack_require__.bind(__webpack_require__, 43137)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev2\\homev2.tsx -> " + "containers/category/category"
        ]
    }
});
const BannerContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 2321).then(__webpack_require__.bind(__webpack_require__, 12321)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev2\\homev2.tsx -> " + "containers/banner/v2"
        ]
    }
});
const ParcelCard = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 406).then(__webpack_require__.bind(__webpack_require__, 20406)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev2\\homev2.tsx -> " + "components/parcelCard/v2"
        ]
    }
});
const AdsContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 364).then(__webpack_require__.bind(__webpack_require__, 30364)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev2\\homev2.tsx -> " + "containers/ads/v2"
        ]
    }
});
const StoreList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(6684), __webpack_require__.e(9881)]).then(__webpack_require__.bind(__webpack_require__, 99881)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev2\\homev2.tsx -> " + "containers/storeList/v2"
        ]
    }
});
const NewsContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(182), __webpack_require__.e(5443)]).then(__webpack_require__.bind(__webpack_require__, 75443)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev2\\homev2.tsx -> " + "containers/newsContainer/newsContainer"
        ]
    }
});
const ShopListSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(6684), __webpack_require__.e(3444), __webpack_require__.e(2554), __webpack_require__.e(1855), __webpack_require__.e(4484), __webpack_require__.e(3630)]).then(__webpack_require__.bind(__webpack_require__, 13630)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev2\\homev2.tsx -> " + "containers/shopList/shopListSliderV2"
        ]
    }
});
const PER_PAGE = 12;
function Home() {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_11__/* .selectCurrency */ .j);
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_12__/* .useSettings */ .r)();
    const activeParcel = Number(settings?.active_parcel) === 1;
    const { data: shopCategories , isLoading: isCategoriesLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "shopCategories",
        locale
    ], ()=>services_category__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAllShopCategories */ .Z.getAllShopCategories({
            perPage: 10
        }));
    const { data: stories , isLoading: isStoriesLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "stories",
        locale
    ], ()=>services_story__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAll */ .Z.getAll());
    const { data: banners , isLoading: isBannerLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "banners",
        locale
    ], ()=>services_banner__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAll */ .Z.getAll());
    const { data: shops , isLoading: isShopLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "favoriteBrands",
        location,
        locale,
        currency
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAll */ .Z.getAll(qs__WEBPACK_IMPORTED_MODULE_9___default().stringify({
            perPage: PER_PAGE,
            currency_id: currency?.id,
            verify: 1
        })));
    const { data: popularShops  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "popularShops",
        location,
        locale,
        currency
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAll */ .Z.getAll(qs__WEBPACK_IMPORTED_MODULE_9___default().stringify({
            perPage: PER_PAGE,
            address: location,
            open: 1,
            currency_id: currency?.id
        })));
    const { data: recommendedShops  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "recommendedShops",
        locale,
        location,
        currency
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getRecommended */ .Z.getRecommended({
            address: location,
            currency_id: currency?.id
        }));
    const { data: ads , isLoading: isAdsLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "ads",
        locale
    ], ()=>services_banner__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAllAds */ .Z.getAllAds());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryContainer, {
                categories: shopCategories?.data?.sort((a, b)=>a?.input - b?.input),
                loading: isCategoriesLoading,
                hasNextPage: Number(shopCategories?.meta?.total) > Number(shopCategories?.data?.length)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerContainer, {
                stories: stories || [],
                banners: banners?.data || [],
                loadingStory: isStoriesLoading,
                loadingBanner: isBannerLoading,
                bannerCount: banners?.meta?.total
            }),
            activeParcel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ParcelCard, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoreList, {
                title: t("favorite.brands"),
                shops: shops?.data || [],
                loading: isShopLoading
            }),
            !!popularShops?.data?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopListSlider, {
                title: t("popular.near.you"),
                shops: popularShops?.data || [],
                type: "popular"
            }),
            !!banners?.data?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdsContainer, {
                data: ads?.data || [],
                loading: isAdsLoading
            }),
            !!recommendedShops?.data?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopListSlider, {
                title: t("daily.offers"),
                shops: recommendedShops?.data || [],
                type: "recomended"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NewsContainer, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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