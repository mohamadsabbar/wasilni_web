exports.id = 8468;
exports.ids = [8468];
exports.modules = {

/***/ 17950:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "v4_card__JDQ5I",
	"active": "v4_active__qim5b",
	"img": "v4_img__59VH4",
	"text": "v4_text__H1c22"
};


/***/ }),

/***/ 18373:
/***/ ((module) => {

// Exports
module.exports = {
	"slideItem": "v4_slideItem__WXDQD",
	"slider": "v4_slider__s3p22",
	"shimmer": "v4_shimmer__NBuN1",
	"card": "v4_card__MI_j3",
	"active": "v4_active__lBxwt",
	"text": "v4_text__6Rc84"
};


/***/ }),

/***/ 74559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoryCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17950);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_v4_module_scss__WEBPACK_IMPORTED_MODULE_5__);
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
            className: `${(_v4_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card)} ${Number(query?.sub) === data.id ? (_v4_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active) : ""}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 30,
                    height: 30,
                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_5___default().img),
                    alt: data.translation.title,
                    src: data.img || ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                    children: data.translation?.title
                })
            ]
        })
    });
}


/***/ }),

/***/ 8468:
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
/* harmony import */ var components_categoryCard_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74559);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53015);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18373);
/* harmony import */ var _v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_v4_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
swiper_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function ShopCategoryList({ data , loading , parent  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        style: {
            display: !loading && data?.length === 0 ? "none" : "block"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
            breakpoints: {
                0: {
                    spaceBetween: 9
                },
                576: {
                    spaceBetween: 16
                }
            },
            slidesPerView: "auto",
            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().slider),
            children: [
                !!parent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                    className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().slideItem),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: `/shop-category/${parent}`,
                        shallow: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                                children: t("all")
                            })
                        })
                    })
                }),
                loading ? Array.from(Array(10).keys()).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().slideItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                            variant: "rectangular",
                            className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().shimmer)
                        })
                    }, item)) : data?.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        className: (_v4_module_scss__WEBPACK_IMPORTED_MODULE_7___default().slideItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_categoryCard_v4__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            data: category,
                            parent: parent
                        })
                    }, category.id))
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;