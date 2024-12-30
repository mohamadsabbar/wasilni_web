(() => {
var exports = {};
exports.id = 9669;
exports.ids = [9669];
exports.modules = {

/***/ 46747:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "reservationHistoryItem_wrapper__5WHud",
	"title": "reservationHistoryItem_title__PhJUn",
	"text": "reservationHistoryItem_text__Bey1_",
	"badge": "reservationHistoryItem_badge__1PtL4",
	"item": "reservationHistoryItem_item__S8fmr",
	"naming": "reservationHistoryItem_naming__hH8vd"
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

/***/ 96743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ReservationHistory)
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
// EXTERNAL MODULE: ./components/empty/empty.tsx
var empty = __webpack_require__(20520);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: ./components/reservationHistoryItem/reservationHistoryItem.module.scss
var reservationHistoryItem_module = __webpack_require__(46747);
var reservationHistoryItem_module_default = /*#__PURE__*/__webpack_require__.n(reservationHistoryItem_module);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./components/reservationHistoryItem/reservationHistoryItem.tsx






function ReservationHistoryItem({ data , dataIdx  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (reservationHistoryItem_module_default()).wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            spacing: 4,
            alignItems: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    sm: 4,
                    md: 3,
                    lg: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (reservationHistoryItem_module_default()).item,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (reservationHistoryItem_module_default()).badge,
                                children: dataIdx
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (reservationHistoryItem_module_default()).naming,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: (reservationHistoryItem_module_default()).title,
                                        children: [
                                            "#",
                                            data.id
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (reservationHistoryItem_module_default()).text,
                                        children: t("reservation.id")
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
                            className: (reservationHistoryItem_module_default()).title,
                            children: data?.booking?.shop?.translation?.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (reservationHistoryItem_module_default()).text,
                            children: t("shop")
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
                            className: (reservationHistoryItem_module_default()).title,
                            children: data.table?.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (reservationHistoryItem_module_default()).text,
                            children: t("table")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    sm: 4,
                    md: 3,
                    lg: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (reservationHistoryItem_module_default()).title,
                            children: external_dayjs_default()(data.start_date).format("DD.MM.YY — HH:mm")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (reservationHistoryItem_module_default()).text,
                            children: t("date")
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
                            className: (reservationHistoryItem_module_default()).title,
                            children: t(data.status)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (reservationHistoryItem_module_default()).text,
                            children: t("status")
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./containers/orderList/reservationHistory.tsx







function ReservationHistory({ data =[] , loading =false  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (orderList_module_default()).root,
        children: [
            !loading ? data.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(ReservationHistoryItem, {
                    data: item,
                    dataIdx: idx + 1
                }, item.id)) : Array.from(new Array(3)).map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                    variant: "rectangular",
                    className: (orderList_module_default()).shimmer
                }, "booking" + idx)),
            !loading && !data.length && /*#__PURE__*/ jsx_runtime_.jsx(empty["default"], {
                text: t("no.reservations.found")
            })
        ]
    });
}


/***/ }),

/***/ 18074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 28474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReservationsPage)
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
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18074);
/* harmony import */ var services_booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77322);
/* harmony import */ var containers_orderList_reservationHistory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_booking__WEBPACK_IMPORTED_MODULE_7__]);
services_booking__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 7935).then(__webpack_require__.bind(__webpack_require__, 37935)), {
    loadableGenerated: {
        modules: [
            "reservations\\index.tsx -> " + "components/loader/loader"
        ]
    }
});
const FooterMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(26), __webpack_require__.e(7567), __webpack_require__.e(1612), __webpack_require__.e(5122), __webpack_require__.e(1929), __webpack_require__.e(256), __webpack_require__.e(8423), __webpack_require__.e(6323), __webpack_require__.e(4779), __webpack_require__.e(807), __webpack_require__.e(544), __webpack_require__.e(8853)]).then(__webpack_require__.bind(__webpack_require__, 90544)), {
    loadableGenerated: {
        modules: [
            "reservations\\index.tsx -> " + "containers/footerMenu/footerMenu"
        ]
    }
});
function ReservationsPage({}) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { data , error , fetchNextPage , hasNextPage , isFetchingNextPage , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useInfiniteQuery)([
        "bookingHistory",
        locale
    ], ({ pageParam =1  })=>services_booking__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getBookingHistory */ .Z.getBookingHistory({
            page: pageParam
        }), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        }
    });
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_orders_orders__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: t("reservations"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_orderList_reservationHistory__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                data: data?.pages?.flatMap((item)=>item.data) || [],
                                loading: isLoading && !isFetchingNextPage
                            }),
                            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loader, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: loader
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

/***/ 77322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const bookingService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/bookings`, {
            params
        }),
    disabledDates: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/disable-dates/table/${id}`, {
            params
        }),
    create: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/my-bookings`, data),
    getTables: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/tables`, {
            params
        }),
    getZones: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/shop-sections`, {
            params
        }),
    getZoneById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/shop-sections/${id}`, {
            params
        }),
    getBookingSchedule: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/shops/${id}`, {
            params
        }),
    getBookingHistory: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/my-bookings`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookingService);

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
var __webpack_exports__ = __webpack_require__.X(0, [5152,5728,4169,7262,520,530], () => (__webpack_exec__(28474)));
module.exports = __webpack_exports__;

})();