(() => {
var exports = {};
exports.id = 8006;
exports.ids = [8006];
exports.modules = {

/***/ 17380:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "resetPasswordForm_wrapper__Ix1s2",
	"header": "resetPasswordForm_header__Jbwnh",
	"title": "resetPasswordForm_title__yp5I9",
	"text": "resetPasswordForm_text__jjTbX",
	"space": "resetPasswordForm_space__gJmGe",
	"flex": "resetPasswordForm_flex__S7h4r",
	"item": "resetPasswordForm_item__a4_ZO",
	"label": "resetPasswordForm_label__idtr9",
	"action": "resetPasswordForm_action__YoZjS"
};


/***/ }),

/***/ 87610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResetPasswordForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17380);
/* harmony import */ var _resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30251);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74621);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41137);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_6__, services_auth__WEBPACK_IMPORTED_MODULE_7__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_6__, services_auth__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function ResetPasswordForm({ onSuccess , changeView  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { phoneNumberSignIn  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            email: ""
        },
        onSubmit: (values, { setSubmitting  })=>{
            if (values.email?.includes("@")) {
                services_auth__WEBPACK_IMPORTED_MODULE_7__/* ["default"].forgotPasswordEmail */ .Z.forgotPasswordEmail(values).then((res)=>{
                    push({
                        pathname: "/verify-phone",
                        query: {
                            email: values.email
                        }
                    });
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .success */ .Vp)(res.message);
                }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .error */ .vU)(t(err.statusCode))).finally(()=>setSubmitting(false));
            } else {
                console.log("phone");
                phoneNumberSignIn(values.email || "").then((confirmationResult)=>{
                    changeView("VERIFY");
                    onSuccess({
                        phone: values.email,
                        callback: confirmationResult
                    });
                }).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .error */ .vU)(t("sms.not.sent"))).finally(()=>setSubmitting(false));
            }
        },
        validate: (values)=>{
            const errors = {};
            if (!values.email) {
                errors.email = t("required");
            }
            if (values.email?.includes(" ")) {
                errors.email = t("should.not.includes.empty.space");
            }
            if (values.email?.includes("@")) {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = t("should.be.valid");
                }
            } else if (!/^998([378]{2}|(9[013-57-9]))\d{7}$/i.test(values.email?.replace("+", "") || "")) {
                console.log("email");
                errors.email = t("should.be.valid");
            }
            return errors;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: t("reset.password")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                        children: t("reset.password.text")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                name: "email",
                label: t("email.or.phone"),
                placeholder: t("type.here"),
                value: formik.values.email,
                onChange: formik.handleChange,
                error: !!formik.errors.email
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_resetPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().action),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    id: "sign-in-button",
                    type: "submit",
                    loading: formik.isSubmitting,
                    children: t("send")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VerifyPhoneCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4575);
/* harmony import */ var _verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_inputs_otpCodeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6952);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74621);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29969);
/* harmony import */ var hooks_useCountDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20512);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21697);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41137);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_7__, services_auth__WEBPACK_IMPORTED_MODULE_11__, utils_session__WEBPACK_IMPORTED_MODULE_12__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_7__, services_auth__WEBPACK_IMPORTED_MODULE_11__, utils_session__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function VerifyPhoneCode({ phone , callback , setCallback  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_10__/* .useSettings */ .r)();
    const waitTime = settings.otp_expire_time * 60 || 60;
    const [time, timerStart, _, timerReset] = (0,hooks_useCountDown__WEBPACK_IMPORTED_MODULE_9__/* .useCountDown */ .h)(waitTime);
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { phoneNumberSignIn , setUserData  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_8__/* .useAuth */ .a)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
        initialValues: {
            code: ""
        },
        onSubmit: (values, { setSubmitting  })=>{
            callback.confirm(values.code || "").then(()=>{
                services_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"].forgotPasswordPhone */ .Z.forgotPasswordPhone({
                    phone,
                    type: "firebase"
                }).then(({ data  })=>{
                    const token = "Bearer" + " " + data.token;
                    (0,utils_session__WEBPACK_IMPORTED_MODULE_12__/* .setCookie */ .d8)("access_token", token);
                    setUserData(data.user);
                    push("/update-password");
                }).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .error */ .vU)(t("verify.error"))).finally(()=>setSubmitting(false));
            }).catch(()=>{
                (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .error */ .vU)(t("verify.error"));
                setSubmitting(false);
            });
        },
        validate: (values)=>{
            const errors = {};
            if (!values.code) {
                errors.code = t("required");
            }
            return errors;
        }
    });
    const handleResendCode = ()=>{
        phoneNumberSignIn(phone).then((confirmationResult)=>{
            timerReset();
            timerStart();
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .success */ .Vp)(t("verify.send"));
            if (setCallback) setCallback(confirmationResult);
        }).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .error */ .vU)(t("sms.not.sent")));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        timerStart();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                        children: t("enter.otp.code")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                        children: t("enter.code.text", {
                            phone
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_otpCodeInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                value: formik.values.code,
                onChange: (otp)=>formik.setFieldValue("code", otp),
                numInputs: 6,
                isInputNum: true,
                containerStyle: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().otpContainer),
                hasErrored: !!formik.errors.code
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                children: [
                    t("verify.didntRecieveCode"),
                    " ",
                    time === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        id: "sign-in-button",
                        onClick: handleResendCode,
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().resend),
                        children: t("resend")
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                        children: [
                            time,
                            " s"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().actions),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().item),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        type: "submit",
                        disabled: Number(formik.values.code?.length) < 6,
                        loading: formik.isSubmitting,
                        children: t("confirm")
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52259);
/* harmony import */ var components_resetPasswordForm_resetPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87610);
/* harmony import */ var components_verifyCodeForm_verifyPhoneCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_resetPasswordForm_resetPasswordForm__WEBPACK_IMPORTED_MODULE_4__, components_verifyCodeForm_verifyPhoneCode__WEBPACK_IMPORTED_MODULE_5__]);
([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_resetPasswordForm_resetPasswordForm__WEBPACK_IMPORTED_MODULE_4__, components_verifyCodeForm_verifyPhoneCode__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ResetPassword({}) {
    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("RESET");
    const [callback, setCallback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{});
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleChangeView = (view)=>setCurrentView(view);
    const renderView = ()=>{
        switch(currentView){
            case "RESET":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_resetPasswordForm_resetPasswordForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    onSuccess: ({ phone , callback  })=>{
                        setPhone(phone);
                        setCallback(callback);
                    }
                });
            case "VERIFY":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifyCodeForm_verifyPhoneCode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    phone: phone,
                    callback: callback,
                    setCallback: setCallback
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_resetPasswordForm_resetPasswordForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    onSuccess: ({ phone , callback  })=>{
                        setPhone(phone);
                        setCallback(callback);
                    }
                });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: renderView()
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 7486:
/***/ ((module) => {

"use strict";
module.exports = require("next-cookies");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 69709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 64254:
/***/ ((module) => {

"use strict";
module.exports = require("react-otp-input");

/***/ }),

/***/ 61175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4634:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5675,5728,4169,7262,6684,251,8346,9975,2073], () => (__webpack_exec__(34655)));
module.exports = __webpack_exports__;

})();