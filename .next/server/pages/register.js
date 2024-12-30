(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 39868:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "otpVerify_wrapper__mKUJs",
	"header": "otpVerify_header__mWiZi",
	"title": "otpVerify_title__tHz4R",
	"text": "otpVerify_text__dNCk3",
	"resend": "otpVerify_resend___h4WZ",
	"space": "otpVerify_space__dg85U",
	"flex": "otpVerify_flex___aTdR",
	"item": "otpVerify_item__LE7zz",
	"label": "otpVerify_label__hau7m",
	"action": "otpVerify_action__hC48K",
	"otpContainer": "otpVerify_otpContainer__Xy8Ix",
	"input": "otpVerify_input__jLxgk"
};


/***/ }),

/***/ 55806:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "registerForm_wrapper__dErU2",
	"header": "registerForm_header___fYY2",
	"title": "registerForm_title__IR_w_",
	"text": "registerForm_text__PwLvx",
	"space": "registerForm_space__As7In",
	"flex": "registerForm_flex__s_64u",
	"item": "registerForm_item__aa1wB",
	"label": "registerForm_label__ag6i8",
	"action": "registerForm_action__W0Y4E"
};


/***/ }),

/***/ 40471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OTPVerify)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74621);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41137);
/* harmony import */ var _otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39868);
/* harmony import */ var _otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useCountDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20512);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21697);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_1__, services_auth__WEBPACK_IMPORTED_MODULE_6__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_1__, services_auth__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function OTPVerify({ email , changeView , callback , setCallback  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { mutate: resend , isLoading: isResending  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)([
        "resend"
    ], (data)=>services_auth__WEBPACK_IMPORTED_MODULE_6__/* ["default"].resendVerify */ .Z.resendVerify(data));
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_11__/* .useSettings */ .r)();
    const waitTime = settings.otp_expire_time * 60 || 60;
    const [time, timerStart, _, timerReset] = (0,hooks_useCountDown__WEBPACK_IMPORTED_MODULE_10__/* .useCountDown */ .h)(waitTime);
    const { phoneNumberSignIn  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .a)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: {},
        onSubmit: (values, { setSubmitting  })=>{
            if (email.includes("@")) {
                services_auth__WEBPACK_IMPORTED_MODULE_6__/* ["default"].verifyEmail */ .Z.verifyEmail(values).then(()=>{
                    changeView("COMPLETE");
                }).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(t("verify.error"))).finally(()=>setSubmitting(false));
            } else {
                callback.confirm(values.verifyId || "").then(()=>changeView("COMPLETE")).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(t("verify.error"))).finally(()=>setSubmitting(false));
            }
        },
        validate: (values)=>{
            const errors = {};
            if (!values.verifyId) {
                errors.verifyId = t("required");
            }
            return errors;
        }
    });
    const handleResendCode = ()=>{
        if (email.includes("@")) {
            resend({
                email
            }, {
                onSuccess: ()=>{
                    timerReset();
                    timerStart();
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .success */ .Vp)(t("verify.send"));
                },
                onError: (err)=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(err.message);
                }
            });
        } else {
            phoneNumberSignIn(email).then((confirmationResult)=>{
                timerReset();
                timerStart();
                (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .success */ .Vp)(t("verify.send"));
                if (setCallback) setCallback(confirmationResult);
            }).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(t("sms.not.sent")));
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        timerStart();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                        children: email.includes("@") ? t("verify.email") : t("verify.phone")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                        children: [
                            t("verify.text"),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: email
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_5___default()), {
                        numInputs: 6,
                        inputStyle: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().input),
                        isInputNum: true,
                        containerStyle: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().otpContainer),
                        value: formik.values.verifyId?.toString(),
                        onChange: (otp)=>formik.setFieldValue("verifyId", otp)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                        children: [
                            t("verify.didntRecieveCode"),
                            " ",
                            time === 0 ? isResending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                style: {
                                    opacity: 0.5
                                },
                                children: "Sending..."
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                id: "sign-in-button",
                                onClick: handleResendCode,
                                className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().resend),
                                children: t("resend")
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                children: [
                                    time,
                                    " s"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_otpVerify_module_scss__WEBPACK_IMPORTED_MODULE_13___default().action),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    type: "submit",
                    disabled: Number(formik?.values?.verifyId?.toString()?.length) < 6,
                    loading: formik.isSubmitting,
                    children: t("verify")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55806);
/* harmony import */ var _registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30251);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41137);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74621);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_auth__WEBPACK_IMPORTED_MODULE_7__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__]);
([services_auth__WEBPACK_IMPORTED_MODULE_7__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function RegisterForm({ onSuccess , changeView  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { phoneNumberSignIn  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
        initialValues: {
            email: ""
        },
        onSubmit: (values, { setSubmitting  })=>{
            if (values.email?.includes("@")) {
                services_auth__WEBPACK_IMPORTED_MODULE_7__/* ["default"].register */ .Z.register(values).then((res)=>{
                    onSuccess({
                        ...res,
                        email: values.email
                    });
                    changeView("VERIFY");
                }).catch(()=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .error */ .vU)(t("email.inuse"));
                }).finally(()=>{
                    setSubmitting(false);
                });
            } else {
                phoneNumberSignIn(values.email).then((confirmationResult)=>{
                    onSuccess({
                        email: values.email,
                        callback: confirmationResult
                    });
                    changeView("VERIFY");
                }).catch((err)=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .error */ .vU)(t("sms.not.sent"));
                }).finally(()=>{
                    setSubmitting(false);
                });
            }
        },
        validate: (values)=>{
            const errors = {};
            if (!values.email) {
                errors.email = t("required");
            }
            if (values.email.includes("@") && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = t("must.be.valid");
            }
            if (values.email?.includes(" ")) {
                errors.email = t("should.not.includes.empty.space");
            }
            return errors;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: t("sign.up")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                        children: [
                            t("have.account"),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/login",
                                children: t("login")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                name: "email",
                label: t("phone"),
                placeholder: t("type.here"),
                value: formik.values.email,
                onChange: formik.handleChange,
                error: !!formik.errors.email,
                helperText: formik.errors.email
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default().action),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    id: "sign-in-button",
                    type: "submit",
                    loading: formik.isSubmitting,
                    children: t("sign.up")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useCountDown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCountDown = (total, ms = 1000)=>{
    const [counter, setCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(total);
    const [startCountDown, setStartCountDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const intervalId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const start = ()=>setStartCountDown(true);
    const pause = ()=>setStartCountDown(false);
    const reset = ()=>{
        clearInterval(intervalId.current);
        setStartCountDown(false);
        setCountDown(total);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        intervalId.current = setInterval(()=>{
            startCountDown && counter > 0 && setCountDown((counter)=>counter - 1);
        }, ms);
        if (counter === 0) clearInterval(intervalId.current);
        return ()=>clearInterval(intervalId.current);
    }, [
        startCountDown,
        counter,
        ms
    ]);
    return [
        counter,
        start,
        pause,
        reset
    ];
};


/***/ }),

/***/ 20990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52259);
/* harmony import */ var components_registerForm_registerForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14410);
/* harmony import */ var components_registerDetailsForm_registerDetailsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7276);
/* harmony import */ var components_otp_verify_otpVerify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40471);
/* harmony import */ var components_socialLogin_socialLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_registerForm_registerForm__WEBPACK_IMPORTED_MODULE_4__, components_registerDetailsForm_registerDetailsForm__WEBPACK_IMPORTED_MODULE_5__, components_otp_verify_otpVerify__WEBPACK_IMPORTED_MODULE_6__, components_socialLogin_socialLogin__WEBPACK_IMPORTED_MODULE_7__]);
([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_registerForm_registerForm__WEBPACK_IMPORTED_MODULE_4__, components_registerDetailsForm_registerDetailsForm__WEBPACK_IMPORTED_MODULE_5__, components_otp_verify_otpVerify__WEBPACK_IMPORTED_MODULE_6__, components_socialLogin_socialLogin__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Register({}) {
    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("REGISTER");
    const [verifyId, setVerifyId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [callback, setCallback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const handleChangeView = (view)=>setCurrentView(view);
    const renderView = ()=>{
        switch(currentView){
            case "REGISTER":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_registerForm_registerForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    onSuccess: ({ email , callback  })=>{
                        setEmail(email);
                        setCallback(callback);
                    }
                });
            case "VERIFY":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_otp_verify_otpVerify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    email: email,
                    callback: callback,
                    setCallback: setCallback
                });
            case "COMPLETE":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_registerDetailsForm_registerDetailsForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    email: email
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_registerForm_registerForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    onSuccess: ({ id  })=>setVerifyId(id)
                });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    renderView(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_socialLogin_socialLogin__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
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

/***/ 30808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

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

/***/ 80816:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/AppleFillIcon");

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

/***/ 82394:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/EyeLineIcon");

/***/ }),

/***/ 67008:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/EyeOffLineIcon");

/***/ }),

/***/ 53921:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/FacebookCircleFillIcon");

/***/ }),

/***/ 92986:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/GoogleFillIcon");

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
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5675,5728,4169,7262,6684,251,8346,2913,9975,7276,2944], () => (__webpack_exec__(20990)));
module.exports = __webpack_exports__;

})();