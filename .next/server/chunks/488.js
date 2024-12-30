exports.id = 488;
exports.ids = [488,8709,7788];
exports.modules = {

/***/ 77788:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryBtn": "button_primaryBtn__wYYuz",
	"disabled": "button_disabled__ZxK13",
	"text": "button_text__QEXTw",
	"small": "button_small__3QOEc",
	"medium": "button_medium__VxgiQ",
	"large": "button_large__ABOLu",
	"secondaryBtn": "button_secondaryBtn__uTY6K",
	"darkBtn": "button_darkBtn__HoBN2"
};


/***/ }),

/***/ 97362:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navbar_container__cguI2",
	"wrapper": "navbar_wrapper__fV4Sj",
	"navbar": "navbar_navbar__uv96d",
	"navItem": "navbar_navItem__3bUkI",
	"moreBtn": "navbar_moreBtn__TBBrx",
	"text": "navbar_text___Zh9C",
	"navLink": "navbar_navLink__iB9Eu",
	"active": "navbar_active__D2nrJ",
	"actions": "navbar_actions__ziBCA",
	"btn": "navbar_btn__P00Tz"
};


/***/ }),

/***/ 48709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97362);
/* harmony import */ var _navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90073);
/* harmony import */ var remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10865);
/* harmony import */ var remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_shopFilter_shopFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56694);
/* harmony import */ var components_shopSorting_shopSorting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45851);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hooks_usePopover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58287);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5215);
/* harmony import */ var remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44237);
/* harmony import */ var remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_shopFilter_shopFilter__WEBPACK_IMPORTED_MODULE_5__]);
components_shopFilter_shopFilter__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const PopoverContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 6060).then(__webpack_require__.bind(__webpack_require__, 56060)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\navbar\\navbar.tsx -> " + "containers/popover/popover"
        ]
    }
});
const CategoryDropdown = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(()=>__webpack_require__.e(/* import() */ 9261).then(__webpack_require__.bind(__webpack_require__, 29261)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\navbar\\navbar.tsx -> " + "components/categoryDropdown/categoryDropdown"
        ]
    }
});
function Navbar({ categories =[] , hideCategories =false , data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [openFilter, anchorFilter, handleOpenFilter, handleCloseFilter] = (0,hooks_usePopover__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [openSorting, anchorSorting, handleOpenSorting, handleCloseSorting] = (0,hooks_usePopover__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [openDropdown, anchorDropdown, handleOpenDropdown, handleCloseDropdown] = (0,hooks_usePopover__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { category_id , newest  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)(redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__/* .selectShopFilter */ .qs);
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_10__/* .useAppDispatch */ .T)();
    const { list , rest  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (categories.length > 3) {
            return {
                list: categories.slice(0, 3),
                rest: categories.slice(3)
            };
        }
        return {
            list: categories,
            rest: []
        };
    }, [
        categories
    ]);
    function filterByCategory(event, id = null) {
        event.preventDefault();
        dispatch((0,redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__/* .setShopCategory */ .Vk)(id));
    }
    function filterNewestShop(event) {
        event.preventDefault();
        dispatch((0,redux_slices_shopFilter__WEBPACK_IMPORTED_MODULE_11__/* .setNewestShop */ .VS)());
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().wrapper),
                    children: [
                        !hideCategories ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navbar),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navItem),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: "/",
                                        className: `${(_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navLink)} ${category_id || newest ? "" : (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active)}`,
                                        onClick: (event)=>filterByCategory(event),
                                        children: t("all")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navItem),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: "/",
                                        className: `${(_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navLink)} ${newest ? (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active) : ""}`,
                                        onClick: filterNewestShop,
                                        children: t("new")
                                    })
                                }),
                                list.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            href: "/",
                                            className: `${(_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navLink)} ${item.id === category_id ? (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().active) : ""}`,
                                            onClick: (event)=>filterByCategory(event, item.id),
                                            children: item.translation.title
                                        })
                                    }, item.id)),
                                rest.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().navItem),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().moreBtn),
                                        onClick: handleOpenDropdown,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                                children: t("more")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                        ]
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().actions),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().btn),
                                    onClick: handleOpenSorting,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Filter3FillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                            children: t("sorted.by")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().btn),
                                    onClick: handleOpenFilter,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_EqualizerFillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_navbar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                            children: t("filter")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryDropdown, {
                data: rest,
                handleClickItem: filterByCategory,
                open: openDropdown,
                anchorEl: anchorDropdown,
                onClose: handleCloseDropdown
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PopoverContainer, {
                open: openFilter,
                anchorEl: anchorFilter,
                onClose: handleCloseFilter,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopFilter_shopFilter__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    parentCategoryId: data?.id,
                    handleClose: handleCloseFilter
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PopoverContainer, {
                open: openSorting,
                anchorEl: anchorSorting,
                onClose: handleCloseSorting,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopSorting_shopSorting__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    handleClose: handleCloseSorting
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePopover() {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event)=>setAnchorEl(event?.currentTarget);
    const handleClose = ()=>setAnchorEl(null);
    return [
        open,
        anchorEl,
        handleOpen,
        handleClose
    ];
}


/***/ })

};
;