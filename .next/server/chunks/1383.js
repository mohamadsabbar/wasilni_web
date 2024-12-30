"use strict";
exports.id = 1383;
exports.ids = [1383];
exports.modules = {

/***/ 55728:
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













const CategoryContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 9162).then(__webpack_require__.bind(__webpack_require__, 49162)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev3\\homev3.tsx -> " + "containers/category/v3"
        ]
    }
});
const BannerContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 3269).then(__webpack_require__.bind(__webpack_require__, 73269)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev3\\homev3.tsx -> " + "containers/banner/v3"
        ]
    }
});
const ParcelCard = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(6684), __webpack_require__.e(58)]).then(__webpack_require__.bind(__webpack_require__, 90058)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev3\\homev3.tsx -> " + "components/parcelCard/v3"
        ]
    }
});
const StoreList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(6684), __webpack_require__.e(5571), __webpack_require__.e(4334)]).then(__webpack_require__.bind(__webpack_require__, 54334)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev3\\homev3.tsx -> " + "containers/storeList/v3"
        ]
    }
});
const NewsContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(182), __webpack_require__.e(5443)]).then(__webpack_require__.bind(__webpack_require__, 75443)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev3\\homev3.tsx -> " + "containers/newsContainer/newsContainer"
        ]
    }
});
const FeaturedShopsContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(6684), __webpack_require__.e(2148), __webpack_require__.e(588)]).then(__webpack_require__.bind(__webpack_require__, 90588)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev3\\homev3.tsx -> " + "containers/featuredShopsContainer/v3"
        ]
    }
});
const ShopBanner = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 2996).then(__webpack_require__.bind(__webpack_require__, 92996)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev3\\homev3.tsx -> " + "components/shopBanner/shopBanner"
        ]
    }
});
const PER_PAGE = 12;
function Home() {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_12__/* .useSettings */ .r)();
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_11__/* .selectCurrency */ .j);
    const activeParcel = Number(settings?.active_parcel) === 1;
    const { data: shopCategories , isLoading: isCategoriesLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "shopCategories",
        locale
    ], ()=>services_category__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAllShopCategories */ .Z.getAllShopCategories({
            perPage: 100
        }));
    const { data: stories , isLoading: isStoriesLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "stories",
        locale
    ], ()=>services_story__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAll */ .Z.getAll());
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
    const { data: popularShops , isLoading: popularLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
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
    const { data: recommendedShops , isLoading: recommendedLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "recommendedShops",
        locale,
        location,
        currency
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getRecommended */ .Z.getRecommended({
            address: location,
            currency_id: currency?.id
        }));
    const { data: ads  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "ads",
        locale
    ], ()=>services_banner__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAllAds */ .Z.getAllAds());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryContainer, {
                categories: shopCategories?.data?.sort((a, b)=>a?.input - b?.input),
                loading: isCategoriesLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeaturedShopsContainer, {
                title: t("trending"),
                featuredShops: recommendedShops?.data || [],
                loading: recommendedLoading,
                type: "recomended"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerContainer, {
                stories: stories || [],
                loadingStory: isStoriesLoading
            }),
            activeParcel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ParcelCard, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoreList, {
                title: t("favorite.brands"),
                shops: shops?.data || [],
                loading: isShopLoading,
                ads: ads?.data || []
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeaturedShopsContainer, {
                title: t("popular.near.you"),
                featuredShops: popularShops?.data || [],
                loading: popularLoading,
                type: "popular"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopBanner, {
                data: shops?.data || []
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