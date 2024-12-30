exports.id = 4117;
exports.ids = [4117];
exports.modules = {

/***/ 11646:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "favoriteBtn_wrapper__Qo2qL"
};


/***/ }),

/***/ 4117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SupportBtn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _favoriteBtn_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11646);
/* harmony import */ var _favoriteBtn_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_favoriteBtn_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74475);
/* harmony import */ var remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29969);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37490);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74621);
/* harmony import */ var containers_drawer_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68181);
/* harmony import */ var components_chat_chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_6__, components_chat_chat__WEBPACK_IMPORTED_MODULE_8__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_6__, components_chat_chat__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SupportBtn({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { isAuthenticated  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    const [open, handleOpen, handleClose] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    function handleOpenChat() {
        if (!isAuthenticated) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .warning */ .Kp)(t("login.first"));
            return;
        }
        handleOpen();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: (_favoriteBtn_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
                onClick: handleOpenChat,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_drawer_drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
                open: open,
                onClose: handleClose,
                PaperProps: {
                    style: {
                        padding: 0
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_chat_chat__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;