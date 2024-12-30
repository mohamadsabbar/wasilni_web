exports.id = 5443;
exports.ids = [5443];
exports.modules = {

/***/ 73533:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "loading_loading__hXLim",
	"pageLoading": "loading_pageLoading__0nn5j"
};


/***/ }),

/***/ 22310:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "newsContainer_wrapper__VmqEv",
	"imgWrapper": "newsContainer_imgWrapper__u0Q13",
	"header": "newsContainer_header__L2WQH",
	"title": "newsContainer_title__tmv7B",
	"caption": "newsContainer_caption__9YMHI",
	"body": "newsContainer_body__d2fmr",
	"footer": "newsContainer_footer__b0_mX",
	"actions": "newsContainer_actions__x6EEx"
};


/***/ }),

/***/ 75619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73533);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function Loading({}) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loading),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {})
    });
}


/***/ }),

/***/ 75443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18074);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var services_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12838);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47567);
/* harmony import */ var containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30182);
/* harmony import */ var _newsContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_blog__WEBPACK_IMPORTED_MODULE_5__]);
services_blog__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function NewsContainer({}) {
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(max-width:576px)");
    const { locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { query , replace  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const blogId = String(query.news || "");
    const { data , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "news",
        locale,
        blogId
    ], ()=>services_blog__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getNewsById */ .Z.getNewsById(blogId), {
        enabled: Boolean(blogId)
    });
    const handleClose = ()=>{
        replace({
            pathname: "",
            query: JSON.parse(JSON.stringify({
                ...query,
                news: undefined
            }))
        }, undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: !isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
            open: !!blogId,
            onClose: handleClose,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_newsContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                data: data?.data,
                loading: isLoading,
                handleClose: handleClose
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
            open: !!blogId,
            onClose: handleClose,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_newsContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                data: data?.data,
                loading: isLoading,
                handleClose: handleClose
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewsContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22310);
/* harmony import */ var _newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37562);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80892);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18074);
/* harmony import */ var components_loader_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75619);







function NewsContent({ data , loading , handleClose  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    src: data?.img,
                    alt: data?.translation?.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                        children: data?.translation?.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().caption),
                        children: data?.translation?.short_desc
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: data?.translation?.description || ""
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_newsContainer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        onClick: handleClose,
                        children: t("cancel")
                    })
                })
            }),
            !!loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_loader_loading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}


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

/***/ })

};
;