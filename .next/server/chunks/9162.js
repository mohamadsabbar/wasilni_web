exports.id = 9162;
exports.ids = [9162];
exports.modules = {

/***/ 32947:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "carouselArrows_btn__5gqN5",
	"next": "carouselArrows_next__d5Bj1",
	"prev": "carouselArrows_prev__LrJLV"
};


/***/ }),

/***/ 62112:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v3_container__qd99q",
	"header": "v3_header__nq19W",
	"title": "v3_title__4R2Bl",
	"link": "v3_link__5AbxE",
	"wrapper": "v3_wrapper__rOmgF",
	"item": "v3_item__CLQbZ",
	"imgWrapper": "v3_imgWrapper__CYzFf",
	"img": "v3_img__ydO_n",
	"body": "v3_body__e3KCR",
	"text": "v3_text__kzpr3",
	"shimmer": "v3_shimmer__VWwiH"
};


/***/ }),

/***/ 68707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PrevButton),
/* harmony export */   "a": () => (/* binding */ NextButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53015);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71116);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32947);
/* harmony import */ var _carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function NextButton() {
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btn)} ${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().next)}`,
        onClick: ()=>swiper.slideNext(),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
    });
}
function PrevButton() {
    const swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btn)} ${(_carouselArrows_module_scss__WEBPACK_IMPORTED_MODULE_5___default().prev)}`,
        onClick: ()=>swiper.slidePrev(),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62112);
/* harmony import */ var _v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_v3_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37562);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53015);
/* harmony import */ var components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_6__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_6__, components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const settings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "category-list-v3 full-width",
    slidesPerView: "auto",
    breakpoints: {
        1140: {
            slidesPerView: 8,
            spaceBetween: 30
        }
    }
};
function CategoryContainer({ categories =[] , loading , hasNextPage  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)("(max-width:1139px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                            children: t("categories")
                        }),
                        hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/shop-category",
                            className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().link),
                            children: t("see.all")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
                    children: !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                        ...settings,
                        children: [
                            categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `/shop-category/${item.uuid}`,
                                        className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().imgWrapper),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().img),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        src: item.img,
                                                        alt: item.translation?.title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
                                                    children: item.translation?.title
                                                })
                                            })
                                        ]
                                    }, item.uuid)
                                }, "store" + item.id)),
                            Number(categories?.length) > 8 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_carouselArrows_carouselArrows__WEBPACK_IMPORTED_MODULE_7__/* .NextButton */ .a, {})
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                        container: true,
                        columnSpacing: isMobile ? 1 : 4,
                        children: Array.from(new Array(isMobile ? 4 : 8)).map((_, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                item: true,
                                xs: 3,
                                md: 2,
                                lg: 1.5,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                    variant: "rectangular",
                                    className: (_v3_module_scss__WEBPACK_IMPORTED_MODULE_8___default().shimmer)
                                })
                            }, "categoryShimmer" + idx))
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;