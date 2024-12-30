"use strict";
exports.id = 3630;
exports.ids = [3630];
exports.modules = {

/***/ 13630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopListSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95219);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_shopCard_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17406);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18074);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71116);
/* harmony import */ var remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51406);
/* harmony import */ var remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
swiper_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const settings = {
    spaceBetween: 10,
    preloadImages: false,
    className: "shop-list full-width",
    slidesPerView: "auto",
    breakpoints: {
        1140: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
};
function ShopListSlider({ title , shops , type  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [swiperRef, setSwiperRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const storyNext = ()=>{
        swiperRef?.slideNext();
    };
    const storyPrev = ()=>{
        swiperRef?.slidePrev();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actions),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: `/shop?filter=${type}`,
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().link),
                                        children: t("see.all")
                                    }),
                                    shops.length > 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().arrows),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btn),
                                                onClick: storyPrev,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftSLineIcon__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btn),
                                                onClick: storyNext,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowRightSLineIcon__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        ...settings,
                        onSwiper: setSwiperRef,
                        children: shops.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopCard_v2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    data: item
                                })
                            }, "shop" + item.id))
                    })
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