(() => {
var exports = {};
exports.id = 5610;
exports.ids = [5610];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


/***/ }),

/***/ 40427:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "blogContent_container__0AO_S",
	"header": "blogContent_header__N1_fv",
	"title": "blogContent_title__Owqcp",
	"muted": "blogContent_muted__c04SM",
	"text": "blogContent_text__MtKqV",
	"hero": "blogContent_hero__rbv68",
	"content": "blogContent_content__Ntifa",
	"sticky": "blogContent_sticky__iQyWB",
	"share": "blogContent_share__5Vk4C",
	"shareItem": "blogContent_shareItem__f7LuF"
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

/***/ 45007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlogContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40427);
/* harmony import */ var _blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95785);
/* harmony import */ var remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53921);
/* harmony import */ var remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68523);
/* harmony import */ var remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_LinkedinFillIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18553);
/* harmony import */ var remixicon_react_LinkedinFillIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_LinkedinFillIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remixicon_react_MailFillIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92126);
/* harmony import */ var remixicon_react_MailFillIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_MailFillIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remixicon_react_LinksFillIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55336);
/* harmony import */ var remixicon_react_LinksFillIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_LinksFillIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74621);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5848);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_10__]);
components_alert_toast__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function BlogContent({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const shareUrl = constants_constants__WEBPACK_IMPORTED_MODULE_11__/* .WEBSITE_URL */ .o6 + "/blog/" + data?.uuid;
    const copyToClipBoard = async ()=>{
        try {
            await navigator.clipboard.writeText(shareUrl);
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_10__/* .success */ .Vp)(t("copied"));
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_10__/* .error */ .vU)("Failed to copy!");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                            children: data?.translation?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().muted),
                            children: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(data?.created_at).format("MMM DD, HH:mm")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().hero),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        fill: true,
                        src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(data?.img),
                        alt: data?.translation?.title || "",
                        sizes: "(max-width: 768px) 600px, 1072px"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sticky),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().share),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.FacebookShareButton, {
                                        url: shareUrl,
                                        title: data?.translation?.title,
                                        className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shareItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.TwitterShareButton, {
                                        url: shareUrl,
                                        title: data?.translation?.title,
                                        className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shareItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.LinkedinShareButton, {
                                        url: shareUrl,
                                        title: data?.translation?.title,
                                        className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shareItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_LinkedinFillIcon__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.EmailShareButton, {
                                        url: shareUrl,
                                        title: data?.translation?.title,
                                        className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shareItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_MailFillIcon__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: (_blogContent_module_scss__WEBPACK_IMPORTED_MODULE_13___default().shareItem),
                                        onClick: copyToClipBoard,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_LinksFillIcon__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: data?.translation?.description || ""
                            }
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogSingle),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_blogContent_blogContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45007);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12838);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95785);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24941);
/* harmony import */ var utils_getLanguage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_blogContent_blogContent__WEBPACK_IMPORTED_MODULE_3__, services_blog__WEBPACK_IMPORTED_MODULE_6__, utils_session__WEBPACK_IMPORTED_MODULE_8__]);
([containers_blogContent_blogContent__WEBPACK_IMPORTED_MODULE_3__, services_blog__WEBPACK_IMPORTED_MODULE_6__, utils_session__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function BlogSingle({}) {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const locale = i18n.language;
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const blogId = String(query.id);
    const { data , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "blog",
        blogId,
        locale
    ], ()=>services_blog__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getById */ .Z.getById(blogId), {
        staleTime: 0
    });
    if (error) {
        console.log("error => ", error);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: data?.data?.translation?.title,
                description: data?.data?.translation?.short_desc,
                image: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(data?.data?.img)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_blogContent_blogContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: data?.data
            })
        ]
    });
}
const getStaticProps = async (ctx)=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    const { params  } = ctx;
    const locale = (0,utils_getLanguage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((0,utils_session__WEBPACK_IMPORTED_MODULE_8__/* .getCookie */ .ej)("locale", ctx));
    await queryClient.prefetchQuery([
        "blog",
        params?.id,
        locale
    ], ()=>services_blog__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getById */ .Z.getById(String(params?.id)));
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)))
        },
        revalidate: 3600
    };
};
const getStaticPaths = async ()=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const blogService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/paginate?type=blog`, {
            params
        }),
    getById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/${id}`, {
            params
        }),
    getLastBlog: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`rest/last-blog/show`, {
            params
        }),
    getAllNews: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/paginate?type=notification`, {
            params
        }),
    getNewsById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/${id}`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 77347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getLanguage)
/* harmony export */ });
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3075);

function getLanguage(lang) {
    return lang || constants_config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_LANGUAGE */ .k$;
}


/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

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

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 36158:
/***/ ((module) => {

"use strict";
module.exports = require("react-share");

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

/***/ 53921:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/FacebookCircleFillIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 18553:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/LinkedinFillIcon");

/***/ }),

/***/ 55336:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/LinksFillIcon");

/***/ }),

/***/ 92126:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/MailFillIcon");

/***/ }),

/***/ 68523:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/TwitterFillIcon");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5728,4169], () => (__webpack_exec__(90945)));
module.exports = __webpack_exports__;

})();