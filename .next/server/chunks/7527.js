exports.id = 7527;
exports.ids = [7527];
exports.modules = {

/***/ 54497:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "pushNotification_container__Vxgfo",
	"wrapper": "pushNotification_wrapper__P0pPH",
	"hidden": "pushNotification_hidden__42tJb",
	"header": "pushNotification_header__xzpgF",
	"title": "pushNotification_title__Gve8N",
	"closeBtn": "pushNotification_closeBtn__2muvj",
	"text": "pushNotification_text__jnOun",
	"cta": "pushNotification_cta__N2pF3"
};


/***/ }),

/***/ 67527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PushNotification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54497);
/* harmony import */ var _pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_firebaseMessageListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76006);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11060);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_firebaseMessageListener__WEBPACK_IMPORTED_MODULE_3__]);
utils_firebaseMessageListener__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function PushNotification({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [notificationData, setNotificationData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,utils_firebaseMessageListener__WEBPACK_IMPORTED_MODULE_3__/* .getNotification */ .v)(setData, setNotificationData);
    }, []);
    function handleClose() {
        setData(undefined);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ClickAwayListener, {
        onClickAway: handleClose,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper)} ${data ? "" : (_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hidden)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                className: (_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                                children: [
                                    t("your.order"),
                                    " #",
                                    data?.title
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().closeBtn),
                                type: "button",
                                onClick: handleClose,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                        children: t("your.order.status.updated.text")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: `/orders/${notificationData?.id || data?.title}`,
                        className: (_pushNotification_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cta),
                        onClick: handleClose,
                        children: t("show")
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getNotification)
/* harmony export */ });
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33512);
/* harmony import */ var services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50849);
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3075);
/* harmony import */ var services_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_messaging__WEBPACK_IMPORTED_MODULE_0__, services_firebase__WEBPACK_IMPORTED_MODULE_1__, services_profile__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_messaging__WEBPACK_IMPORTED_MODULE_0__, services_firebase__WEBPACK_IMPORTED_MODULE_1__, services_profile__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getNotification = (setNotification, setNotificationData)=>{
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.getMessaging)(services_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);
    (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.getToken)(messaging, {
        vapidKey: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .VAPID_KEY */ .ft
    }).then((currentToken)=>{
        if (currentToken) {
            services_profile__WEBPACK_IMPORTED_MODULE_3__/* ["default"].firebaseTokenUpdate */ .Z.firebaseTokenUpdate({
                firebase_token: currentToken
            }).then(()=>{}).catch((error)=>{
                console.log(error);
            });
            // @ts-expect-error
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_0__.onMessage)(messaging, (payload)=>{
                !!setNotificationData && setNotificationData(payload?.data);
                setNotification(payload?.notification);
            });
        } else {
            console.log("No registration token available. Request permission to generate one.");
        }
    }).catch((err)=>{
        console.log("An error occurred while retrieving token. ", err);
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;