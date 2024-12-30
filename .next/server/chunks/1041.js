exports.id = 1041;
exports.ids = [1041];
exports.modules = {

/***/ 9261:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "groupOrderButton_button__E6Xjh",
	"text": "groupOrderButton_text__R6yVh",
	"green": "groupOrderButton_green__juyLU"
};


/***/ }),

/***/ 65114:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "groupOrderCard_wrapper__fAKQi",
	"header": "groupOrderCard_header__BtV7i",
	"title": "groupOrderCard_title__9AU05",
	"text": "groupOrderCard_text__O_MI8",
	"actions": "groupOrderCard_actions__R2_QH",
	"groupLink": "groupOrderCard_groupLink__vTdjD",
	"iconBtn": "groupOrderCard_iconBtn__be9ky",
	"members": "groupOrderCard_members__tpDyH",
	"row": "groupOrderCard_row__xXDI0",
	"member": "groupOrderCard_member__U0_X3",
	"avatar": "groupOrderCard_avatar__JVFx4",
	"label": "groupOrderCard_label__kJwMk",
	"flex": "groupOrderCard_flex__ApF59",
	"status": "groupOrderCard_status__eCml3",
	"orange": "groupOrderCard_orange__6_7VU",
	"green": "groupOrderCard_green__tbEC7",
	"timesBtn": "groupOrderCard_timesBtn__CjSFe",
	"footer": "groupOrderCard_footer__QNN6C",
	"btnWrapper": "groupOrderCard_btnWrapper__waPS8"
};


/***/ }),

/***/ 41041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupOrderButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9261);
/* harmony import */ var _groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57318);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34349);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_slices_userCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96477);
/* harmony import */ var remixicon_react_Group2LineIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8729);
/* harmony import */ var remixicon_react_Group2LineIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Group2LineIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remixicon_react_ListSettingsLineIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86087);
/* harmony import */ var remixicon_react_ListSettingsLineIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ListSettingsLineIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var remixicon_react_LogoutBoxLineIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70291);
/* harmony import */ var remixicon_react_LogoutBoxLineIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_LogoutBoxLineIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37490);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47567);
/* harmony import */ var containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30182);
/* harmony import */ var components_groupOrderCard_groupOrderCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72402);
/* harmony import */ var components_confirmationModal_confirmationModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36041);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var services_cart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18423);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_groupOrderCard_groupOrderCard__WEBPACK_IMPORTED_MODULE_13__, services_cart__WEBPACK_IMPORTED_MODULE_16__]);
([components_groupOrderCard_groupOrderCard__WEBPACK_IMPORTED_MODULE_13__, services_cart__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function GroupOrderButton({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)("(min-width:1140px)");
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(redux_slices_userCart__WEBPACK_IMPORTED_MODULE_5__/* .selectUserCart */ .Ns);
    const { isMember , member , clearMember  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_2__/* .useShop */ .L)();
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const [groupOrderModal, handleOpenGroupModal, handleCloseGroupModal] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const [openModal, handleOpenModal, handleCloseModal] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_16__/* ["default"].guestLeave */ .Z.guestLeave(data),
        onSuccess: ()=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_5__/* .clearUserCart */ .tx)());
            clearMember();
            handleCloseModal();
        }
    });
    function leaveGroup() {
        mutate({
            ids: [
                member?.uuid
            ],
            cart_id: cart.id
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            isMember ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: (_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default().button),
                onClick: handleOpenModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_LogoutBoxLineIcon__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default().text),
                        children: t("leave.group")
                    })
                ]
            }) : cart.group ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: `${(_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default().button)} ${(_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default().green)}`,
                onClick: handleOpenGroupModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ListSettingsLineIcon__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default().text),
                        children: t("manage.order")
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: (_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default().button),
                onClick: handleOpenGroupModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Group2LineIcon__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_groupOrderButton_module_scss__WEBPACK_IMPORTED_MODULE_17___default().text),
                        children: t("start.group.order")
                    })
                ]
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
                open: groupOrderModal,
                onClose: handleCloseGroupModal,
                children: groupOrderModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_groupOrderCard_groupOrderCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    handleClose: handleCloseGroupModal
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
                open: groupOrderModal,
                onClose: handleCloseGroupModal,
                children: groupOrderModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_groupOrderCard_groupOrderCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    handleClose: handleCloseGroupModal
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_confirmationModal_confirmationModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                open: openModal,
                handleClose: handleCloseModal,
                onSubmit: leaveGroup,
                loading: isLoading,
                title: t("are.you.sure.leave.group")
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GroupOrderCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(65114);
/* harmony import */ var _groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11060);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77262);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_FileCopyFillIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18196);
/* harmony import */ var remixicon_react_FileCopyFillIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_FileCopyFillIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5848);
/* harmony import */ var remixicon_react_User6LineIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8025);
/* harmony import */ var remixicon_react_User6LineIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_User6LineIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74621);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18423);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_userCart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96477);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80892);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_loader_loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75619);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57318);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64698);
/* harmony import */ var hooks_useShopType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(65749);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_8__, services_cart__WEBPACK_IMPORTED_MODULE_10__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_8__, services_cart__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















function GroupOrderCard({ handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [userLoading, setUserLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_12__/* .useAppDispatch */ .T)();
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .C)(redux_slices_userCart__WEBPACK_IMPORTED_MODULE_13__/* .selectUserCart */ .Ns);
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_12__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_18__/* .selectCurrency */ .j);
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const shopId = Number(query.id);
    const { isOpen  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_17__/* .useShop */ .L)();
    const type = (0,hooks_useShopType__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)();
    const groupOrderUrl = `${constants_constants__WEBPACK_IMPORTED_MODULE_6__/* .WEBSITE_URL */ .o6}/group/${shopId}?g=${cart.id}&o=${cart.owner_id}&t=${type}`;
    const { isFetching , refetch  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)([
        "openCart",
        shopId
    ], ()=>services_cart__WEBPACK_IMPORTED_MODULE_10__/* ["default"].open */ .Z.open({
            shop_id: shopId,
            currency_id: currency?.id
        }), {
        onSuccess: (data)=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_13__/* .updateUserCart */ .CR)(data.data));
        },
        enabled: !cart.id,
        retry: false
    });
    const { mutate: openGroup , isLoading: isGroupLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_10__/* ["default"].setGroup */ .Z.setGroup(data),
        onSuccess: (data)=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_13__/* .updateGroupStatus */ .bK)(data.data));
        }
    });
    const { mutate: deleteCart , isLoading: isDeleteCartLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_10__/* ["default"]["delete"] */ .Z["delete"](data),
        onSuccess: (_, values)=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_13__/* .clearUserCart */ .tx)());
            if (values.open) {
                refetch().then(({ data  })=>openGroup(data?.data.id));
            } else {
                handleClose();
            }
        }
    });
    const { mutate: memberDelete  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_10__/* ["default"].deleteGuest */ .Z.deleteGuest(data),
        onSuccess: (_, values)=>{
            let newCart = JSON.parse(JSON.stringify(cart));
            newCart.user_carts = cart.user_carts.filter((item)=>item.uuid !== values["ids[0]"]);
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_13__/* .updateUserCart */ .CR)(newCart));
        },
        onSettled: ()=>setUserLoading("")
    });
    const deleteMember = (uuid)=>{
        setUserLoading(uuid);
        const payload = {
            cart_id: cart.id,
            "ids[0]": uuid
        };
        memberDelete(payload);
    };
    const copyToClipBoard = async ()=>{
        try {
            await navigator.clipboard.writeText(groupOrderUrl);
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .success */ .Vp)(t("copied"));
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .error */ .vU)("Failed to copy!");
        }
    };
    function handleClickStart() {
        if (!isOpen) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .info */ .um)(t("shop.closed"));
            return;
        }
        if (cart.shop_id === shopId) {
            openGroup(cart.id);
        } else {
            clearCartItems({}, true);
        }
    }
    function clearCartItems(event, open) {
        const ids = [
            cart.id
        ];
        deleteCart({
            ids,
            open
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().title),
                        children: cart.group ? t("manage.group.order") : t("start.group.order")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().text),
                        children: t("group.order.text")
                    })
                ]
            }),
            cart.group && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().actions),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().groupLink),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().text),
                            children: groupOrderUrl
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().iconBtn),
                        onClick: ()=>copyToClipBoard(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_FileCopyFillIcon__WEBPACK_IMPORTED_MODULE_5___default()), {})
                    })
                ]
            }),
            cart.group && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().members),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().title),
                        children: t("group.members")
                    }),
                    cart.user_carts.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().row),
                            style: {
                                display: item.user_id === cart.owner_id ? "none" : "flex"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().member),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().avatar),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_User6LineIcon__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().label),
                                            children: item.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().flex),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().status)} ${item.status ? (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().orange) : (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().green)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().text),
                                                children: item.status ? t("choosing") : t("done")
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().timesBtn),
                                            onClick: ()=>deleteMember(item.uuid),
                                            disabled: userLoading === item.uuid,
                                            children: userLoading === item.uuid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {
                                                size: 20
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
                                        })
                                    ]
                                })
                            ]
                        }, item.id))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().footer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_20___default().btnWrapper),
                    children: cart.group ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        onClick: ()=>clearCartItems({}, false),
                        children: t("cancel")
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        onClick: handleClickStart,
                        children: t("start")
                    })
                })
            }),
            (isFetching || isDeleteCartLoading || isGroupLoading) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_loader_loading__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useShopType)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function useShopType() {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    return pathname.includes("shop") ? "shop" : "restaurant";
}


/***/ })

};
;