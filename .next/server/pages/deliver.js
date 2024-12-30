(() => {
var exports = {};
exports.id = 3864;
exports.ids = [3864];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


/***/ }),

/***/ 74052:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "beDelivery_container__6fhEV",
	"wrapper": "beDelivery_wrapper__WYihG",
	"content": "beDelivery_content__LhhHK",
	"title": "beDelivery_title__B6l6F",
	"text": "beDelivery_text__r0CeN",
	"flex": "beDelivery_flex__7dorY",
	"item": "beDelivery_item__wbJ_d",
	"imgWrapper": "beDelivery_imgWrapper__ZpNCV"
};


/***/ }),

/***/ 37562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FallbackImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48909);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */ 


function FallbackImage({ src , alt , onError  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: src,
        alt: alt,
        className: (_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root),
        onError: onError
    });
}


/***/ }),

/***/ 79955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BeDelivery)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74052);
/* harmony import */ var _beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21697);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);
/* eslint-disable @next/next/no-img-element */ 




function BeDelivery({ data  }) {
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_2__/* .useSettings */ .r)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                children: data?.translation?.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                                dangerouslySetInnerHTML: {
                                    __html: data?.translation?.description || ""
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().flex),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: settings?.delivery_app_ios,
                                        className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/app-store.webp",
                                            alt: "App store"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: settings?.delivery_app_android,
                                        className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/google-play.webp",
                                            alt: "Google play"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_beDelivery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            fill: true,
                            src: data?.img,
                            alt: data?.translation?.title,
                            sizes: "(max-width: 768px) 600px, 1072px"
                        })
                    })
                ]
            })
        })
    });
}


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

/***/ 73661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Deliver),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_beDelivery_beDelivery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79955);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24941);
/* harmony import */ var utils_getLanguage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77347);
/* harmony import */ var services_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70855);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_session__WEBPACK_IMPORTED_MODULE_5__, services_page__WEBPACK_IMPORTED_MODULE_7__]);
([utils_session__WEBPACK_IMPORTED_MODULE_5__, services_page__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Deliver({}) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { data , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "deliver",
        locale
    ], ()=>services_page__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getDeliverPage */ .Z.getDeliverPage());
    if (error) {
        console.log("error => ", error);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("become.delivery")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_beDelivery_beDelivery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: data?.data
            })
        ]
    });
}
const getStaticProps = async (ctx)=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
    const locale = (0,utils_getLanguage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,utils_session__WEBPACK_IMPORTED_MODULE_5__/* .getCookie */ .ej)("locale", ctx));
    await queryClient.prefetchQuery([
        "deliver",
        locale
    ], ()=>services_page__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getDeliverPage */ .Z.getDeliverPage());
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_4__.dehydrate)(queryClient)))
        },
        revalidate: 3600
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7486:
/***/ ((module) => {

"use strict";
module.exports = require("next-cookies");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

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

/***/ 12564:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InformationLineIcon");

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
var __webpack_exports__ = __webpack_require__.X(0, [5728,4169,5528], () => (__webpack_exec__(73661)));
module.exports = __webpack_exports__;

})();