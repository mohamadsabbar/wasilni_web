exports.id = 1502;
exports.ids = [1502,6060];
exports.modules = {

/***/ 30528:
/***/ ((module) => {

// Exports
module.exports = {
	"profileBtn": "profileDropdown_profileBtn__lUVki",
	"imgWrapper": "profileDropdown_imgWrapper__6btm2",
	"wrapper": "profileDropdown_wrapper__GR3_r",
	"header": "profileDropdown_header__rbpis",
	"naming": "profileDropdown_naming__3WG7e",
	"title": "profileDropdown_title__ythS3",
	"link": "profileDropdown_link__dTNyS",
	"profileImage": "profileDropdown_profileImage__HL_Z_",
	"body": "profileDropdown_body__Tqeyo",
	"flex": "profileDropdown_flex__pAYIs",
	"item": "profileDropdown_item__EkN7i",
	"text": "profileDropdown_text__CCJs4",
	"bold": "profileDropdown_bold__iac_e",
	"badge": "profileDropdown_badge__wjFQg"
};


/***/ }),

/***/ 21502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(30528);
/* harmony import */ var _profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var containers_popover_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56060);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_HistoryLineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81812);
/* harmony import */ var remixicon_react_HistoryLineIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_HistoryLineIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remixicon_react_ArchiveLineIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89224);
/* harmony import */ var remixicon_react_ArchiveLineIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArchiveLineIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remixicon_react_Wallet3LineIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(907);
/* harmony import */ var remixicon_react_Wallet3LineIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Wallet3LineIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26582);
/* harmony import */ var remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var remixicon_react_FileList3LineIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17618);
/* harmony import */ var remixicon_react_FileList3LineIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_FileList3LineIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var remixicon_react_Settings3LineIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78740);
/* harmony import */ var remixicon_react_Settings3LineIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Settings3LineIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var remixicon_react_QuestionLineIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97240);
/* harmony import */ var remixicon_react_QuestionLineIcon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_QuestionLineIcon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var remixicon_react_LogoutCircleRLineIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72324);
/* harmony import */ var remixicon_react_LogoutCircleRLineIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_LogoutCircleRLineIcon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var remixicon_react_UserStarLineIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29932);
/* harmony import */ var remixicon_react_UserStarLineIcon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_UserStarLineIcon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29969);
/* harmony import */ var hooks_usePopover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58287);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var services_order__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94098);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var constants_status__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(16346);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90026);
/* harmony import */ var components_avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11295);
/* harmony import */ var services_profile__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45641);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(64698);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(21697);
/* harmony import */ var remixicon_react_MapPin2LineIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(80110);
/* harmony import */ var remixicon_react_MapPin2LineIcon__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_MapPin2LineIcon__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_order__WEBPACK_IMPORTED_MODULE_17__, services_profile__WEBPACK_IMPORTED_MODULE_21__]);
([services_order__WEBPACK_IMPORTED_MODULE_17__, services_profile__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




























function ProfileDropdown({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [open, anchorEl, handleOpen, handleClose] = (0,hooks_usePopover__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    const { logout , setUserData  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_14__/* .useAuth */ .a)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_22__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_23__/* .selectCurrency */ .j);
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_24__/* .useSettings */ .r)();
    const activeParcel = Number(settings?.active_parcel) === 1;
    const reservationEnableForUser = Number(settings?.reservation_enable_for_user) === 1;
    (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useQuery)([
        "profile",
        currency?.id
    ], ()=>services_profile__WEBPACK_IMPORTED_MODULE_21__/* ["default"].get */ .Z.get({
            currency_id: currency?.id
        }), {
        staleTime: 0,
        onSuccess: (data)=>{
            setUserData(data.data);
        }
    });
    const { data: activeOrders  } = (0,react_query__WEBPACK_IMPORTED_MODULE_16__.useQuery)("activeOrders", ()=>services_order__WEBPACK_IMPORTED_MODULE_17__/* ["default"].getAll */ .Z.getAll(qs__WEBPACK_IMPORTED_MODULE_18___default().stringify({
            order_statuses: true,
            statuses: constants_status__WEBPACK_IMPORTED_MODULE_26__/* .activeOrderStatuses */ .j
        })), {
        enabled: open
    });
    const handleLogout = ()=>{
        logout();
        handleClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().profileBtn),
                onClick: handleOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().imgWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_avatar__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        data: data
                    }, data.img)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_popover_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
                open: open,
                anchorEl: anchorEl,
                onClose: handleClose,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().wrapper),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().header),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().naming),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().title),
                                            children: [
                                                data.firstname,
                                                " ",
                                                data.lastname?.charAt(0),
                                                "."
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/profile",
                                            className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().link),
                                            onClick: handleClose,
                                            children: t("view.profile")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().profileImage),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_avatar__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        data: data
                                    }, data.img)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().body),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/wallet",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Wallet3LineIcon__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: [
                                                    t("wallet"),
                                                    ":"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().bold),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                    number: data.wallet?.price,
                                                    symbol: data.wallet?.symbol
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/orders",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_HistoryLineIcon__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                    children: t("orders")
                                                })
                                            ]
                                        }),
                                        !!activeOrders?.meta?.total && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().badge),
                                            children: activeOrders?.meta?.total
                                        })
                                    ]
                                }),
                                reservationEnableForUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/reservations",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_FileList3LineIcon__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("reservations")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/be-seller",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_UserStarLineIcon__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("be.seller")
                                            })
                                        ]
                                    })
                                }),
                                activeParcel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/parcels",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArchiveLineIcon__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("parcels")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/liked",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_HeartLineIcon__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("liked")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/settings/notification",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Settings3LineIcon__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("settings")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/saved-locations",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_MapPin2LineIcon__WEBPACK_IMPORTED_MODULE_25___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("delivery.addresses")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/help",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleClose,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_QuestionLineIcon__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("help")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/login",
                                    className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().flex),
                                    onClick: handleLogout,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_LogoutCircleRLineIcon__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_profileDropdown_module_scss__WEBPACK_IMPORTED_MODULE_27___default().text),
                                                children: t("log.out")
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ orderHistoryStatuses),
/* harmony export */   "j": () => (/* binding */ activeOrderStatuses)
/* harmony export */ });
const activeOrderStatuses = [
    "new",
    "accepted",
    "cooking",
    "ready",
    "on_a_way"
];
const orderHistoryStatuses = [
    "delivered",
    "canceled"
];


/***/ }),

/***/ 56060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoverContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);




const Wrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Popover)(()=>({
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        "& .MuiPaper-root": {
            backgroundColor: "var(--secondary-bg)",
            boxShadow: "var(--popover-box-shadow)",
            borderRadius: "10px",
            maxWidth: "100%"
        }
    }));
function PopoverContainer({ children , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 94098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const orderService = {
    calculate: (id, data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/cart/calculate/${id}`, data),
    checkCoupon: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/rest/coupons/check`, data),
    create: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/orders`, data),
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/orders/paginate?${params}`),
    getById: (id, params, headers)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/orders/${id}`, {
            params,
            headers
        }),
    cancel: (id)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/orders/${id}/status/change?status=canceled`),
    review: (id, data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/orders/review/${id}`, data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;