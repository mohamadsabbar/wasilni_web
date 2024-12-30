exports.id = 3954;
exports.ids = [3954];
exports.modules = {

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

/***/ 44355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JoinGroupCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65114);
/* harmony import */ var _groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77262);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var services_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18423);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30251);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57318);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_cart__WEBPACK_IMPORTED_MODULE_5__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__]);
([services_cart__WEBPACK_IMPORTED_MODULE_5__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function JoinGroupCard({ handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const shopId = Number(query.id);
    const cartId = Number(query.g);
    const { setMemberData  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_9__/* .useShop */ .L)();
    const { mutate: joinGroup , isLoading: isGroupLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_5__/* ["default"].join */ .Z.join(data),
        onSuccess: (data)=>{
            const payload = {
                uuid: data.data.uuid,
                cart_id: data.data.cart_id,
                shop_id: shopId
            };
            setMemberData(payload);
            handleClose();
        },
        onError: ()=>{
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_10__/* .warning */ .Kp)(t("you.cannot.join"));
        }
    });
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormik)({
        initialValues: {
            name: ""
        },
        onSubmit: (values)=>{
            const payload = {
                name: values.name,
                shop_id: shopId,
                cart_id: cartId
            };
            joinGroup(payload);
        },
        validate: (values)=>{
            const errors = {};
            if (!values.name) {
                errors.name = t("required");
            }
            return errors;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
                        children: t("join.group.order")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().text),
                        children: t("join.group.text")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().actions),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        flex: "1 0 100%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        name: "name",
                        label: t("name"),
                        placeholder: t("type.here"),
                        value: formik.values.name,
                        onChange: formik.handleChange,
                        error: !!formik.errors.name && formik.touched.name
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().footer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_groupOrderCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btnWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        type: "submit",
                        loading: isGroupLoading,
                        children: t("join")
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JoinGroupContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37490);
/* harmony import */ var components_groupOrderCard_joinGroupCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44355);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47567);
/* harmony import */ var containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30182);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_groupOrderCard_joinGroupCard__WEBPACK_IMPORTED_MODULE_4__]);
components_groupOrderCard_joinGroupCard__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function JoinGroupContainer({}) {
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(min-width:1140px)");
    const { isMember  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_7__/* .useShop */ .L)();
    const [joinGroupModal, handleOpenModal, handleCloseModal] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(!isMember);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
            open: joinGroupModal,
            onClose: handleCloseModal,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_groupOrderCard_joinGroupCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                handleClose: handleCloseModal
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
            open: joinGroupModal,
            onClose: handleCloseModal,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_groupOrderCard_joinGroupCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                handleClose: handleCloseModal
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;