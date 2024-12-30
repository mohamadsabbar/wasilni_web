exports.id = 7885;
exports.ids = [7885,7935];
exports.modules = {

/***/ 76275:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v4_container__nq0i1"
};


/***/ }),

/***/ 37935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function Loader({ size  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            textAlign: "center",
            padding: "10px 0"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
            size: size
        })
    });
}


/***/ }),

/***/ 17885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopCategory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76275);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_v4_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var services_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56457);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84169);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95785);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1612);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63477);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5215);
/* harmony import */ var components_loader_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37935);
/* harmony import */ var components_empty_empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20520);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_category__WEBPACK_IMPORTED_MODULE_2__, services_shop__WEBPACK_IMPORTED_MODULE_8__]);
([services_category__WEBPACK_IMPORTED_MODULE_2__, services_shop__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const ShopCategoryList = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(5675), __webpack_require__.e(8468)]).then(__webpack_require__.bind(__webpack_require__, 8468)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v4.tsx -> " + "containers/shopCategoryList/v4"
        ]
    }
});
const ShopList = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(6684), __webpack_require__.e(26), __webpack_require__.e(3444), __webpack_require__.e(9829), __webpack_require__.e(8988)]).then(__webpack_require__.bind(__webpack_require__, 59829)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v4.tsx -> " + "containers/shopList/v4"
        ]
    }
});
const Navbar = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(865), __webpack_require__.e(1662), __webpack_require__.e(6694), __webpack_require__.e(5851), __webpack_require__.e(8709)]).then(__webpack_require__.bind(__webpack_require__, 48709)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v4.tsx -> " + "containers/navbar/navbar"
        ]
    }
});
const MobileNavbar = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 8253).then(__webpack_require__.bind(__webpack_require__, 28253)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v4.tsx -> " + "containers/mobileNavbar/mobileNavbar"
        ]
    }
});
function ShopCategory() {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const locale = i18n.language;
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__.useMediaQuery)("(min-width:1140px)");
    const { newest , order_by , group  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)(redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__/* .selectShopFilter */ .qs);
    const { data , isLoading: categoryLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "category",
        query.id,
        locale
    ], ()=>services_category__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getById */ .Z.getById(String(query.id), {
            active: 1
        }));
    const { data: shops , isLoading: isShopLoading , isFetchingNextPage , fetchNextPage , hasNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)([
        "shops",
        locale,
        data?.data.id,
        order_by,
        group,
        location,
        newest,
        query?.sub
    ], ({ pageParam =1  })=>services_shop__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAllShops */ .Z.getAllShops(querystring__WEBPACK_IMPORTED_MODULE_9___default().stringify({
            page: pageParam,
            category_id: query?.sub || data?.data.id,
            order_by: newest ? "new" : order_by,
            free_delivery: group.free_delivery,
            take: group.tag,
            rating: group.rating?.split(","),
            prices: group.prices,
            // @ts-expect-error
            address: location,
            open: Number(group.open) || undefined,
            deals: group.deals
        })), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        }
    });
    const shopList = shops?.pages?.flatMap((item)=>item.data) || [];
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: data?.data?.translation?.title,
                description: data?.data?.translation?.description,
                image: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(data?.data?.img)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopCategoryList, {
                data: data?.data.children || [],
                loading: categoryLoading,
                parent: String(query.id)
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Navbar, {
                data: data?.data,
                hideCategories: true
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNavbar, {
                data: data?.data,
                hideCategories: true
            }),
            !isShopLoading && shopList.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_empty_empty__WEBPACK_IMPORTED_MODULE_13__["default"], {
                text: t("there.is.no.shops")
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopList, {
                shops: shopList,
                title: data?.data.translation?.title,
                loading: isShopLoading
            }),
            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_loader_loader__WEBPACK_IMPORTED_MODULE_12__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: loader
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext),
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SettingsContext);


/***/ }),

/***/ 34349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 95785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getImage)
/* harmony export */ });
// import { IMAGE_URL } from "constants/constants";
function getImage(img) {
    if (img) {
        return img;
    } else {
        return "";
    }
}


/***/ })

};
;