(() => {
var exports = {};
exports.id = 5473;
exports.ids = [5473];
exports.modules = {

/***/ 98056:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "parcleOrderListItem_wrapper__M_9dz",
	"title": "parcleOrderListItem_title__warq0",
	"text": "parcleOrderListItem_text__v4ZkY",
	"badge": "parcleOrderListItem_badge__7SngF",
	"active": "parcleOrderListItem_active__8f76s",
	"item": "parcleOrderListItem_item__wRT00",
	"naming": "parcleOrderListItem_naming__vryDk",
	"arrowBtn": "parcleOrderListItem_arrowBtn__Fr56p"
};


/***/ }),

/***/ 95876:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "orderList_root__9MGvz",
	"shimmer": "orderList_shimmer__NvMqh"
};


/***/ }),

/***/ 16346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ orderHistoryStatuses),
/* harmony export */   "j": () => (/* binding */ activeOrderStatuses)
/* harmony export */ });
const activeOrderStatuses = [
    "new",
    "accepted",
    "cooking",
    "ready",
    "on_a_way"
];
const orderHistoryStatuses = [
    "delivered",
    "canceled"
];


/***/ }),

/***/ 25993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ParcelOrderList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/orderList/orderList.module.scss
var orderList_module = __webpack_require__(95876);
var orderList_module_default = /*#__PURE__*/__webpack_require__.n(orderList_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./components/parcelOrderListItem/parcleOrderListItem.module.scss
var parcleOrderListItem_module = __webpack_require__(98056);
var parcleOrderListItem_module_default = /*#__PURE__*/__webpack_require__.n(parcleOrderListItem_module);
// EXTERNAL MODULE: external "remixicon-react/CheckDoubleLineIcon"
var CheckDoubleLineIcon_ = __webpack_require__(991);
var CheckDoubleLineIcon_default = /*#__PURE__*/__webpack_require__.n(CheckDoubleLineIcon_);
// EXTERNAL MODULE: external "remixicon-react/CloseCircleLineIcon"
var CloseCircleLineIcon_ = __webpack_require__(77617);
var CloseCircleLineIcon_default = /*#__PURE__*/__webpack_require__.n(CloseCircleLineIcon_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "remixicon-react/ArrowRightSLineIcon"
var ArrowRightSLineIcon_ = __webpack_require__(51406);
var ArrowRightSLineIcon_default = /*#__PURE__*/__webpack_require__.n(ArrowRightSLineIcon_);
// EXTERNAL MODULE: external "remixicon-react/Loader4LineIcon"
var Loader4LineIcon_ = __webpack_require__(96622);
var Loader4LineIcon_default = /*#__PURE__*/__webpack_require__.n(Loader4LineIcon_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
;// CONCATENATED MODULE: ./components/parcelOrderListItem/parcleOrderListItem.tsx











function ParcelOrderListItem({ data , active  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/parcels/${data.id}`,
        className: (parcleOrderListItem_module_default()).wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            spacing: 4,
            alignItems: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    sm: 4,
                    md: 3,
                    lg: 3,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (parcleOrderListItem_module_default()).item,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(parcleOrderListItem_module_default()).badge} ${active ? (parcleOrderListItem_module_default()).active : ""}`,
                                children: active ? /*#__PURE__*/ jsx_runtime_.jsx((Loader4LineIcon_default()), {}) : data.status === "delivered" ? /*#__PURE__*/ jsx_runtime_.jsx((CheckDoubleLineIcon_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((CloseCircleLineIcon_default()), {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (parcleOrderListItem_module_default()).naming,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: (parcleOrderListItem_module_default()).title,
                                        children: data.username_to
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (parcleOrderListItem_module_default()).text,
                                        children: t("receiver")
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    sm: 4,
                    md: 3,
                    lg: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (parcleOrderListItem_module_default()).title,
                            children: data.phone_to
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (parcleOrderListItem_module_default()).text,
                            children: t("phone")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    sm: 4,
                    md: 3,
                    lg: 4,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (parcleOrderListItem_module_default()).title,
                            children: data.address_to?.address
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (parcleOrderListItem_module_default()).text,
                            children: t("address")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    sm: 4,
                    md: 3,
                    lg: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (parcleOrderListItem_module_default()).title,
                            children: external_dayjs_default()(data.updated_at).format("DD.MM.YY — HH:mm")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (parcleOrderListItem_module_default()).text,
                            children: t("date")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    sm: 4,
                    md: 3,
                    lg: 1,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (parcleOrderListItem_module_default()).arrowBtn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowRightSLineIcon_default()), {})
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./containers/orderList/parcelOrderList.tsx





function ParcelOrderList({ data =[] , loading =false , active =false  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (orderList_module_default()).root,
        children: !loading ? data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(ParcelOrderListItem, {
                data: item,
                active: active
            }, item.id)) : Array.from(new Array(3)).map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                variant: "rectangular",
                className: (orderList_module_default()).shimmer
            }, "shops" + idx))
    });
}


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

/***/ 7918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParcelOrders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_orders_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50530);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64698);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18074);
/* harmony import */ var services_parcel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47763);
/* harmony import */ var containers_orderList_parcelOrderList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25993);
/* harmony import */ var constants_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_parcel__WEBPACK_IMPORTED_MODULE_10__]);
services_parcel__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 7935).then(__webpack_require__.bind(__webpack_require__, 37935)), {
    loadableGenerated: {
        modules: [
            "parcels\\index.tsx -> " + "components/loader/loader"
        ]
    }
});
const Empty = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(520)]).then(__webpack_require__.bind(__webpack_require__, 20520)), {
    loadableGenerated: {
        modules: [
            "parcels\\index.tsx -> " + "components/empty/empty"
        ]
    }
});
const FooterMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(26), __webpack_require__.e(7567), __webpack_require__.e(1612), __webpack_require__.e(5122), __webpack_require__.e(1929), __webpack_require__.e(256), __webpack_require__.e(8423), __webpack_require__.e(6323), __webpack_require__.e(4779), __webpack_require__.e(807), __webpack_require__.e(544), __webpack_require__.e(6603)]).then(__webpack_require__.bind(__webpack_require__, 90544)), {
    loadableGenerated: {
        modules: [
            "parcels\\index.tsx -> " + "containers/footerMenu/footerMenu"
        ]
    }
});
function ParcelOrders({}) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_7__/* .selectCurrency */ .j);
    const payload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            currency_id: currency?.id,
            order_statuses: true,
            perPage: 10,
            column: "id",
            sort: "desc",
            locale
        }), [
        currency,
        locale
    ]);
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { data: activeOrders , isLoading: isLoadingActiveOrders  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "parcelActiveOrders",
        payload
    ], ()=>services_parcel__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getAll */ .Z.getAll(qs__WEBPACK_IMPORTED_MODULE_8___default().stringify({
            ...payload,
            statuses: constants_status__WEBPACK_IMPORTED_MODULE_12__/* .activeOrderStatuses */ .j,
            perPage: 100
        })), {
        staleTime: 0,
        refetchOnWindowFocus: true
    });
    const { data , error , fetchNextPage , hasNextPage , isFetchingNextPage , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useInfiniteQuery)([
        "parcelOrderHistory",
        payload
    ], ({ pageParam =1  })=>services_parcel__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getAll */ .Z.getAll(qs__WEBPACK_IMPORTED_MODULE_8___default().stringify({
            ...payload,
            page: pageParam,
            statuses: constants_status__WEBPACK_IMPORTED_MODULE_12__/* .orderHistoryStatuses */ .a
        })), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        },
        staleTime: 0,
        refetchOnWindowFocus: true
    });
    const orders = data?.pages?.flatMap((item)=>item.data);
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((entries)=>{
        const target = entries[0];
        if (target.isIntersecting && hasNextPage) {
            fetchNextPage();
        }
    }, [
        hasNextPage,
        fetchNextPage
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
        handleObserver
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white",
                children: [
                    !isLoading && !orders?.length && !isLoadingActiveOrders && !activeOrders?.data ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_orders_orders__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: t("active.parcels"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_orderList_parcelOrderList__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                data: activeOrders?.data || [],
                                loading: isLoadingActiveOrders,
                                active: true
                            }),
                            !isLoadingActiveOrders && !activeOrders?.data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    padding: "24px 0"
                                },
                                children: t("no.active.orders.found")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_orders_orders__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: t("parcel.history"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_orderList_parcelOrderList__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                data: orders || [],
                                loading: isLoading && !isFetchingNextPage
                            }),
                            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loader, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: loader
                            }),
                            !isLoading && !orders?.length && !isLoadingActiveOrders && !activeOrders?.data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Empty, {
                                text: t("no.orders.found"),
                                buttonText: t("go.to.menu")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterMenu, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 4438:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/AddCircleLineIcon");

/***/ }),

/***/ 44237:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArrowDownSLineIcon");

/***/ }),

/***/ 71116:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArrowLeftSLineIcon");

/***/ }),

/***/ 51406:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArrowRightSLineIcon");

/***/ }),

/***/ 991:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckDoubleLineIcon");

/***/ }),

/***/ 4634:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 77617:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CloseCircleLineIcon");

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

/***/ 96622:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Loader4LineIcon");

/***/ }),

/***/ 99403:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Refund2LineIcon");

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

/***/ 18762:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/SendPlaneFillIcon");

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
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5152,5728,4169,530,9850], () => (__webpack_exec__(7918)));
module.exports = __webpack_exports__;

})();