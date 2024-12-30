exports.id = 9339;
exports.ids = [9339];
exports.modules = {

/***/ 4323:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "supportCard_wrapper__BENR8",
	"flex": "supportCard_flex__oR8Aq",
	"iconWrapper": "supportCard_iconWrapper__1KySS",
	"naming": "supportCard_naming__oB4LH",
	"title": "supportCard_title__wxGao",
	"text": "supportCard_text__3loVZ"
};


/***/ }),

/***/ 94660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DarkButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77788);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function DarkButton({ children , disabled , onClick , type ="button" , icon , size ="medium" , loading =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().darkBtn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]} ${disabled ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().disabled) : ""}`,
        disabled: disabled,
        onClick: onClick,
        children: !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                icon ? icon : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                    children: children
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
            size: 22
        })
    });
}


/***/ }),

/***/ 57227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SupportCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4323);
/* harmony import */ var _supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74475);
/* harmony import */ var remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_darkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94660);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_chat_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2434);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37490);
/* harmony import */ var remixicon_react_Message3LineIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32182);
/* harmony import */ var remixicon_react_Message3LineIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Message3LineIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29969);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_chat_chat__WEBPACK_IMPORTED_MODULE_6__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__]);
([components_chat_chat__WEBPACK_IMPORTED_MODULE_6__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const DrawerContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/* import() */ 7107).then(__webpack_require__.bind(__webpack_require__, 68181)), {
    loadableGenerated: {
        modules: [
            "..\\components\\supportCard\\supportCard.tsx -> " + "containers/drawer/drawer"
        ]
    }
});
function SupportCard({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const [open, handleOpen, handleClose] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { isAuthenticated  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
    function handleOpenChat() {
        if (!isAuthenticated) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_10__/* .warning */ .Kp)(t("login.first"));
            return;
        }
        handleOpen();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().flex),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().iconWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CustomerService2FillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().naming),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: (_supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
                                children: t("have.questions")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_supportCard_module_scss__WEBPACK_IMPORTED_MODULE_11___default().text),
                                children: t("questions.text")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                onClick: handleOpenChat,
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Message3LineIcon__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                children: t("help.center")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerContainer, {
                open: open,
                onClose: handleClose,
                PaperProps: {
                    style: {
                        padding: 0
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_chat_chat__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getLanguage)
/* harmony export */ });
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3075);

function getLanguage(lang) {
    return lang || constants_config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_LANGUAGE */ .k$;
}


/***/ })

};
;