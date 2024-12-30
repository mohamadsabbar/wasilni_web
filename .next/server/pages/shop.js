"use strict";
(() => {
var exports = {};
exports.id = 4800;
exports.ids = [4800];
exports.modules = {

/***/ 69149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Shops),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84169);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_information__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49073);
/* harmony import */ var utils_createSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_information__WEBPACK_IMPORTED_MODULE_3__]);
services_information__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const uiTypes = {
    "1": next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1612), __webpack_require__.e(5215), __webpack_require__.e(2038)]).then(__webpack_require__.bind(__webpack_require__, 92038)), {
        loadableGenerated: {
            modules: [
                "shop\\index.tsx -> " + "containers/shops/shopsPage"
            ]
        }
    }),
    "2": next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1612), __webpack_require__.e(509)]).then(__webpack_require__.bind(__webpack_require__, 30509)), {
        loadableGenerated: {
            modules: [
                "shop\\index.tsx -> " + "containers/shops/v2"
            ]
        }
    }),
    "3": next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1612), __webpack_require__.e(7977)]).then(__webpack_require__.bind(__webpack_require__, 47977)), {
        loadableGenerated: {
            modules: [
                "shop\\index.tsx -> " + "containers/shops/v3"
            ]
        }
    }),
    "4": next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1612), __webpack_require__.e(1699)]).then(__webpack_require__.bind(__webpack_require__, 41699)), {
        loadableGenerated: {
            modules: [
                "shop\\index.tsx -> " + "containers/shops/v4"
            ]
        }
    })
};
function Shops({ uiType ="1"  }) {
    const Ui = uiTypes[uiType] || uiTypes["1"];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Ui, {})
        ]
    });
}
const getServerSideProps = async (ctx)=>{
    const settingsData = await services_information__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getSettings */ .Z.getSettings();
    const obj = (0,utils_createSettings__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(settingsData?.data);
    return {
        props: {
            uiType: obj?.ui_type
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 73280:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers");

/***/ }),

/***/ 10298:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/AdapterDayjs");

/***/ }),

/***/ 85753:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 87104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 69709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 61175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 44237:
/***/ ((module) => {

module.exports = require("remixicon-react/ArrowDownSLineIcon");

/***/ }),

/***/ 71116:
/***/ ((module) => {

module.exports = require("remixicon-react/ArrowLeftSLineIcon");

/***/ }),

/***/ 51406:
/***/ ((module) => {

module.exports = require("remixicon-react/ArrowRightSLineIcon");

/***/ }),

/***/ 4634:
/***/ ((module) => {

module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 10865:
/***/ ((module) => {

module.exports = require("remixicon-react/EqualizerFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 90073:
/***/ ((module) => {

module.exports = require("remixicon-react/Filter3FillIcon");

/***/ }),

/***/ 80062:
/***/ ((module) => {

module.exports = require("remixicon-react/FlashlightFillIcon");

/***/ }),

/***/ 27013:
/***/ ((module) => {

module.exports = require("remixicon-react/Gift2FillIcon");

/***/ }),

/***/ 26582:
/***/ ((module) => {

module.exports = require("remixicon-react/HeartLineIcon");

/***/ }),

/***/ 9362:
/***/ ((module) => {

module.exports = require("remixicon-react/HistoryFillIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 60423:
/***/ ((module) => {

module.exports = require("remixicon-react/LeafFillIcon");

/***/ }),

/***/ 42331:
/***/ ((module) => {

module.exports = require("remixicon-react/PercentFillIcon");

/***/ }),

/***/ 92713:
/***/ ((module) => {

module.exports = require("remixicon-react/ReservedLineIcon");

/***/ }),

/***/ 11106:
/***/ ((module) => {

module.exports = require("remixicon-react/RestaurantFillIcon");

/***/ }),

/***/ 16953:
/***/ ((module) => {

module.exports = require("remixicon-react/RunFillIcon");

/***/ }),

/***/ 14282:
/***/ ((module) => {

module.exports = require("remixicon-react/ShoppingBag3LineIcon");

/***/ }),

/***/ 93725:
/***/ ((module) => {

module.exports = require("remixicon-react/StarFillIcon");

/***/ }),

/***/ 36487:
/***/ ((module) => {

module.exports = require("remixicon-react/StarSmileFillIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 53015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,5728,4169,7830], () => (__webpack_exec__(69149)));
module.exports = __webpack_exports__;

})();