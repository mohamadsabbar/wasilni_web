exports.id = 6442;
exports.ids = [6442];
exports.modules = {

/***/ 818:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "v2_container__9Nw0x",
	"wrapper": "v2_wrapper__SADnx",
	"showAllBtn": "v2_showAllBtn__gnHLy",
	"text": "v2_text__KyEeW",
	"actions": "v2_actions__2e3QC",
	"btn": "v2_btn__8kMU9"
};


/***/ }),

/***/ 56442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileNavbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(818);
/* harmony import */ var _v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_v2_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90073);
/* harmony import */ var remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44237);
/* harmony import */ var remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10865);
/* harmony import */ var remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37490);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5215);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18074);











const MobileDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/* import() */ 182).then(__webpack_require__.bind(__webpack_require__, 30182)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\mobileNavbar\\v2.tsx -> " + "containers/drawer/mobileDrawer"
        ]
    }
});
const ShopFilter = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1662), __webpack_require__.e(6694), __webpack_require__.e(7788)]).then(__webpack_require__.bind(__webpack_require__, 56694)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\mobileNavbar\\v2.tsx -> " + "components/shopFilter/shopFilter"
        ]
    }
});
const ShopSorting = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.all(/* import() */[__webpack_require__.e(865), __webpack_require__.e(5851)]).then(__webpack_require__.bind(__webpack_require__, 45851)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\mobileNavbar\\v2.tsx -> " + "components/shopSorting/shopSorting"
        ]
    }
});
const MobileShopCategories = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2078), __webpack_require__.e(676), __webpack_require__.e(1664), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 41518)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\mobileNavbar\\v2.tsx -> " + "components/mobileShopCategories/v2"
        ]
    }
});
function MobileNavbar({ categories =[] , data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [visible, handleOpenCategories, handleCloseCategories] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [sortingDrawer, handleOpenSorting, handleCloseSorting] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [openFilter, handleOpenFilter, handleCloseFilter] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { category_id  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_8__/* .selectShopFilter */ .qs);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `container ${(_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container)}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().showAllBtn),
                        onClick: handleOpenCategories,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                                children: category_id ? categories.find((item)=>item.id === category_id)?.translation?.title : t("all")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().actions),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().btn),
                                onClick: handleOpenSorting,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                                        children: t("sorted.by")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().btn),
                                onClick: handleOpenFilter,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_v2_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                                        children: t("filter")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDrawer, {
                open: visible,
                onClose: handleCloseCategories,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileShopCategories, {
                    data: categories,
                    onClose: handleCloseCategories
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDrawer, {
                open: openFilter,
                onClose: handleCloseFilter,
                children: openFilter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopFilter, {
                    parentCategoryId: data?.id,
                    handleClose: handleCloseFilter
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDrawer, {
                open: sortingDrawer,
                onClose: handleCloseSorting,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopSorting, {
                    handleClose: handleCloseSorting
                })
            })
        ]
    });
}


/***/ }),

/***/ 37490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useModal(isOpen = false) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen);
    const handleOpen = (event)=>{
        event?.preventDefault();
        setOpen(true);
    };
    const handleClose = ()=>setOpen(false);
    return [
        open,
        handleOpen,
        handleClose
    ];
}


/***/ })

};
;