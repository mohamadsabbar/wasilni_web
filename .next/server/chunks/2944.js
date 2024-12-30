exports.id = 2944;
exports.ids = [2944];
exports.modules = {

/***/ 55509:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "socialLogin_wrapper__6GSbw",
	"row": "socialLogin_row__ofEKr",
	"line": "socialLogin_line__Ghh5e",
	"title": "socialLogin_title__NO123",
	"flex": "socialLogin_flex__7EA_T",
	"item": "socialLogin_item__IzE1B",
	"text": "socialLogin_text__R4N62"
};


/***/ }),

/***/ 32944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SocialLogin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55509);
/* harmony import */ var _socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_AppleFillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80816);
/* harmony import */ var remixicon_react_AppleFillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_AppleFillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53921);
/* harmony import */ var remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_GoogleFillIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92986);
/* harmony import */ var remixicon_react_GoogleFillIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_GoogleFillIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29969);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41137);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24941);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_auth__WEBPACK_IMPORTED_MODULE_7__, utils_session__WEBPACK_IMPORTED_MODULE_9__, components_alert_toast__WEBPACK_IMPORTED_MODULE_11__]);
([services_auth__WEBPACK_IMPORTED_MODULE_7__, utils_session__WEBPACK_IMPORTED_MODULE_9__, components_alert_toast__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
//@ts-nocheck













function SocialLogin({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { googleSignIn , facebookSignIn , appleSignIn , setUserData  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .a)();
    const { push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const referralCode = query.referral_code;
    const handleGoogleSignIn = async ()=>{
        try {
            await googleSignIn().then((res)=>{
                const body = {
                    name: res.user.displayName,
                    email: res.user.email,
                    id: res.user.uid,
                    referral: referralCode || undefined
                };
                nprogress__WEBPACK_IMPORTED_MODULE_10___default().start();
                services_auth__WEBPACK_IMPORTED_MODULE_7__/* ["default"].loginByGoogle */ .Z.loginByGoogle(body).then(({ data  })=>{
                    const token = data.token_type + " " + data.access_token;
                    (0,utils_session__WEBPACK_IMPORTED_MODULE_9__/* .setCookie */ .d8)("access_token", token);
                    setUserData(data.user);
                    push("/");
                }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_11__/* .error */ .vU)(err?.data?.message)).finally(()=>nprogress__WEBPACK_IMPORTED_MODULE_10___default().done());
            });
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_11__/* .error */ .vU)(err.message);
            console.log(err.message);
        }
    };
    const handleFacebookSignIn = async ()=>{
        try {
            await facebookSignIn().then((res)=>{
                const body = {
                    name: res.user.displayName,
                    email: res.user.email,
                    id: res.user.uid,
                    avatar: res.user.photoURL,
                    referral: referralCode || undefined
                };
                nprogress__WEBPACK_IMPORTED_MODULE_10___default().start();
                services_auth__WEBPACK_IMPORTED_MODULE_7__/* ["default"].loginByFacebook */ .Z.loginByFacebook(body).then(({ data  })=>{
                    const token = data.token_type + " " + data.access_token;
                    (0,utils_session__WEBPACK_IMPORTED_MODULE_9__/* .setCookie */ .d8)("access_token", token);
                    setUserData(data.user);
                    push("/");
                }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_11__/* .error */ .vU)(err?.data?.message)).finally(()=>nprogress__WEBPACK_IMPORTED_MODULE_10___default().done());
            });
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_11__/* .error */ .vU)(err.message);
            console.log(err.message);
        }
    };
    const handleAppleSignIn = async ()=>{
        console.log("apple sign in");
        try {
            await appleSignIn().then((res)=>{
                console.log("res => ", res);
                const body = {
                    name: res.user.displayName,
                    email: res.user.email,
                    id: res.user.uid,
                    referral: referralCode || undefined
                };
                nprogress__WEBPACK_IMPORTED_MODULE_10___default().start();
                services_auth__WEBPACK_IMPORTED_MODULE_7__/* ["default"].loginByGoogle */ .Z.loginByGoogle(body).then(({ data  })=>{
                    const token = data.token_type + " " + data.access_token;
                    (0,utils_session__WEBPACK_IMPORTED_MODULE_9__/* .setCookie */ .d8)("access_token", token);
                    setUserData(data.user);
                    push("/");
                }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_11__/* .error */ .vU)(err?.data?.message)).finally(()=>nprogress__WEBPACK_IMPORTED_MODULE_10___default().done());
            });
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_11__/* .error */ .vU)(err.message);
            console.log(err.message);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().wrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().row),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().line)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                        children: t("access.quickly")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().line)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flex),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().item),
                        onClick: handleAppleSignIn,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_AppleFillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().text),
                                children: "Apple"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().item),
                        onClick: handleFacebookSignIn,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().text),
                                children: "Facebook"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().item),
                        onClick: handleGoogleSignIn,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_GoogleFillIcon__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_socialLogin_module_scss__WEBPACK_IMPORTED_MODULE_12___default().text),
                                children: "Google"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;