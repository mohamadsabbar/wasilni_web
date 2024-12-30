"use strict";
exports.id = 2665;
exports.ids = [2665];
exports.modules = {

/***/ 22665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopCategory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1612);
/* harmony import */ var services_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56457);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5215);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34349);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2950);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18074);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_shop__WEBPACK_IMPORTED_MODULE_4__, services_category__WEBPACK_IMPORTED_MODULE_5__]);
([services_shop__WEBPACK_IMPORTED_MODULE_4__, services_category__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 7935).then(__webpack_require__.bind(__webpack_require__, 37935)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v3.tsx -> " + "components/loader/loader"
        ]
    }
});
const Navbar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(865), __webpack_require__.e(1662), __webpack_require__.e(6694), __webpack_require__.e(5851), __webpack_require__.e(6004)]).then(__webpack_require__.bind(__webpack_require__, 30139)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v3.tsx -> " + "containers/navbar/v3"
        ]
    }
});
const Empty = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(520)]).then(__webpack_require__.bind(__webpack_require__, 20520)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v3.tsx -> " + "components/empty/empty"
        ]
    }
});
const ShopList = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(6684), __webpack_require__.e(2148), __webpack_require__.e(2162)]).then(__webpack_require__.bind(__webpack_require__, 13237)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v3.tsx -> " + "containers/shopList/v3"
        ]
    }
});
const FooterMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(7262), __webpack_require__.e(26), __webpack_require__.e(7567), __webpack_require__.e(5122), __webpack_require__.e(1929), __webpack_require__.e(256), __webpack_require__.e(8423), __webpack_require__.e(6323), __webpack_require__.e(4779), __webpack_require__.e(807), __webpack_require__.e(544), __webpack_require__.e(9802)]).then(__webpack_require__.bind(__webpack_require__, 90544)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\shopCategory\\v3.tsx -> " + "containers/footerMenu/footerMenu"
        ]
    }
});
const PER_PAGE = 12;
function ShopCategory() {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { category_id , order_by , group  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_6__/* .selectShopFilter */ .qs);
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const categoryUuid = String(query?.id);
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    const { data: parentCategory  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "category",
        categoryUuid,
        locale
    ], ()=>services_category__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getById */ .Z.getById(categoryUuid));
    const parentCategoryId = parentCategory?.data.id;
    const { data , error , fetchNextPage , hasNextPage , isFetchingNextPage , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)([
        "shops",
        category_id,
        locale,
        order_by,
        group,
        location,
        parentCategoryId
    ], ({ pageParam =1  })=>services_shop__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllShops */ .Z.getAllShops(qs__WEBPACK_IMPORTED_MODULE_9___default().stringify({
            page: pageParam,
            perPage: PER_PAGE,
            category_id: category_id ?? parentCategoryId,
            order_by: order_by,
            free_delivery: group.free_delivery,
            take: group.tag,
            rating: group.rating?.split(","),
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
    const shops = data?.pages?.flatMap((item)=>item.data) || [];
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((entries)=>{
        const target = entries[0];
        if (target.isIntersecting && hasNextPage) {
            fetchNextPage();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            dispatch((0,redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_6__/* .clearFilter */ .Dg)());
        };
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Navbar, {
                data: parentCategory?.data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopList, {
                shops: data?.pages?.flatMap((item)=>item.data) || [],
                loading: isLoading && !isFetchingNextPage
            }),
            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loader, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: loader
            }),
            !shops.length && !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Empty, {
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


/***/ })

};
;