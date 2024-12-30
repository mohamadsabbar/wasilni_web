exports.id = 7345;
exports.ids = [7345];
exports.modules = {

/***/ 52994:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "v1_card__vZ8Zq",
	"active": "v1_active___1OE2",
	"img": "v1_img__Pkq7P",
	"text": "v1_text___e43I"
};


/***/ }),

/***/ 12309:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v1_container__4DKRy",
	"shimmer": "v1_shimmer__pFUE9",
	"card": "v1_card__dr1_z",
	"active": "v1_active__94rQb",
	"text": "v1_text__aeMs_"
};


/***/ }),

/***/ 25135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoryCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v1_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52994);
/* harmony import */ var _v1_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_v1_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






function CategoryCard({ data , parent  }) {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: {
            pathname: !!parent ? `/shop-category/${parent}` : `/shop-category/${data.uuid}`,
            query: !!parent ? {
                sub: data.id
            } : undefined
        },
        shallow: !!parent,
        replace: !!parent,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_v1_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card)} ${Number(query?.sub) === data.id ? (_v1_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active) : ""}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 30,
                    height: 30,
                    className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_5___default().img),
                    alt: data.translation.title,
                    src: data.img || ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                    children: data.translation?.title
                })
            ]
        })
    });
}


/***/ }),

/***/ 27345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopCategoryList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_categoryCard_v1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25135);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53015);
/* harmony import */ var _v1_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12309);
/* harmony import */ var _v1_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_v1_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ShopCategoryList({ data , loading , parent  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            style: {
                display: !loading && data?.length === 0 ? "none" : "block",
                background: "var(primary-bg)"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                breakpoints: {
                    0: {
                        spaceBetween: 9,
                        slidesPerView: 2.5
                    },
                    440: {
                        slidesPerView: 3.5
                    },
                    576: {
                        spaceBetween: 16,
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 7
                    },
                    992: {
                        slidesPerView: 8.5
                    },
                    1200: {
                        slidesPerView: 10
                    }
                },
                className: `${(_v1_module_scss__WEBPACK_IMPORTED_MODULE_8___default().slider)} full-width`,
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation
                ],
                navigation: true,
                spaceBetween: 10,
                children: [
                    !!parent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        style: {
                            maxWidth: "max-content"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: `/shop-category/${parent}`,
                            shallow: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                                    children: t("all")
                                })
                            })
                        })
                    }),
                    loading ? Array.from(Array(10).keys()).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                                variant: "rectangular",
                                className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_8___default().shimmer)
                            })
                        }, item)) : data?.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_categoryCard_v1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                data: category,
                                parent: parent
                            })
                        }, category.id))
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;