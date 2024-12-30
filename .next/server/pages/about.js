(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


/***/ }),

/***/ 36727:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "aboutUs_container__UTyhR",
	"header": "aboutUs_header__TO_AD",
	"title": "aboutUs_title__cxrj_",
	"muted": "aboutUs_muted__L7aWB",
	"text": "aboutUs_text__FuHkD",
	"hero": "aboutUs_hero__o7F5a",
	"content": "aboutUs_content__9kP75"
};


/***/ }),

/***/ 89786:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "appSection_container__Qf8WQ",
	"wrapper": "appSection_wrapper__S4jnG",
	"content": "appSection_content__b_kjv",
	"title": "appSection_title__Q6WqS",
	"text": "appSection_text__f8VQL",
	"bold": "appSection_bold__4JQCG",
	"flex": "appSection_flex__ho0Vq",
	"item": "appSection_item__bMqlX",
	"imgWrapper": "appSection_imgWrapper__3gS_K"
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

/***/ 60384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AboutUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36727);
/* harmony import */ var _aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37562);
/* eslint-disable @next/next/no-img-element */ 



function AboutUs({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                            children: data?.translation?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hero),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        fill: true,
                        src: data?.img,
                        alt: data?.translation?.title,
                        sizes: "(max-width: 768px) 600px, 1072px"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    className: (_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_aboutUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                        dangerouslySetInnerHTML: {
                            __html: data?.translation?.description || ""
                        }
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 50359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AppSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appSection_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89786);
/* harmony import */ var _appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37562);
/* eslint-disable @next/next/no-img-element */ 



function AppSection({ data =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imgWrapper),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    fill: true,
                                    src: item.img,
                                    alt: item.translation?.title,
                                    sizes: "(max-width: 768px) 600px, 1072px"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                                        children: item.translation?.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                                        dangerouslySetInnerHTML: {
                                            __html: item.translation?.description || ""
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().flex),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: item.buttons?.app_store_button_link,
                                                className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/app-store.webp",
                                                    alt: "App store"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: item.buttons?.google_play_button_link,
                                                className: (_appSection_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
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
                            })
                        ]
                    })
                })
            }, item.id))
    });
}


/***/ }),

/***/ 61473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60384);
/* harmony import */ var containers_appSection_appSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50359);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_getLanguage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77347);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24941);
/* harmony import */ var services_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70855);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_session__WEBPACK_IMPORTED_MODULE_7__, services_page__WEBPACK_IMPORTED_MODULE_8__]);
([utils_session__WEBPACK_IMPORTED_MODULE_7__, services_page__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function About({}) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "sections",
        locale
    ], ()=>services_page__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAboutSections */ .Z.getAboutSections(), {
        select: (data)=>{
            if (data.data.length > 1) {
                return {
                    about: data.data.find((item)=>item.type === "about"),
                    sections: data.data.filter((item)=>item.type !== "about")
                };
            }
            return {
                about: data.data[0],
                sections: []
            };
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("about")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_aboutUs_aboutUs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: data?.about
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_appSection_appSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                data: data?.sections
            })
        ]
    });
}
const getStaticProps = async (ctx)=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    const locale = (0,utils_getLanguage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,utils_session__WEBPACK_IMPORTED_MODULE_7__/* .getCookie */ .ej)("locale", ctx));
    await queryClient.prefetchQuery([
        "sections",
        locale
    ], ()=>services_page__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAboutSections */ .Z.getAboutSections());
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)))
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
var __webpack_exports__ = __webpack_require__.X(0, [5728,4169,5528], () => (__webpack_exec__(61473)));
module.exports = __webpack_exports__;

})();