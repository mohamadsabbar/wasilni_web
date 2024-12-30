exports.id = 3310;
exports.ids = [3310];
exports.modules = {

/***/ 34719:
/***/ ((module) => {

// Exports
module.exports = {
	"story": "storySingle_story__DM95g",
	"wrapper": "storySingle_wrapper__R6pOV",
	"title": "storySingle_title__L_FiJ",
	"logo": "storySingle_logo__NwRAh",
	"logoWrapper": "storySingle_logoWrapper__EBeU5",
	"shopTitle": "storySingle_shopTitle__0dyvE"
};


/***/ }),

/***/ 92586:
/***/ ((module) => {

// Exports
module.exports = {
	"storyContainer": "v4_storyContainer__iC3xp",
	"shimmerContainer": "v4_shimmerContainer__OlJfX",
	"shimmer": "v4_shimmer__W6cnB"
};


/***/ }),

/***/ 86330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StorySingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34719);
/* harmony import */ var _storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37490);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_getStoryImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78107);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37562);








const StoryContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\storySinglev4\\storySingle.tsx -> " + "containers/storyv4/story"
        ]
    },
    ssr: false
});
function StorySingle({ data , list  }) {
    const [open, handleOpen, handleClose] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const firstStory = data[0];
    const filteredList = list.filter((item)=>item[0]?.shop_id !== firstStory?.shop_id);
    const goToStory = (event)=>{
        event.preventDefault();
        handleOpen();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !!firstStory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().story),
                onClick: goToStory,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_storySingle_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                            children: firstStory.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            fill: true,
                            src: (0,utils_getStoryImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(firstStory.url),
                            alt: firstStory.title,
                            sizes: "130px",
                            quality: 90,
                            priority: true
                        })
                    ]
                })
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoryContainer, {
                open: open,
                onClose: handleClose,
                stories: [
                    data,
                    ...filteredList
                ]
            })
        ]
    });
}


/***/ }),

/***/ 43310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoryList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92586);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_v4_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_storySinglev4_storySingle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86330);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const storySettings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "story-swiper full-width",
    breakpoints: {
        1140: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
};
function StoryList({ data , loading  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().storyContainer),
            children: !loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().swiperContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation
                    ],
                    ...storySettings,
                    slidesPerView: "auto",
                    children: data?.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_storySinglev4_storySingle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                data: item,
                                list: data
                            })
                        }, idx))
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shimmerContainer),
                children: Array.from(new Array(4)).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                        variant: "rectangular",
                        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_6___default().shimmer)
                    }, "story" + idx))
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getStoryImage)
/* harmony export */ });
function getStoryImage(img) {
    // return BASE_URL + "/storage/" + img;
    return img;
}


/***/ })

};
;