"use strict";
(() => {
var exports = {};
exports.id = 1048;
exports.ids = [1048];
exports.modules = {

/***/ 52701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VerifyCodeForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4575);
/* harmony import */ var _verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_inputs_otpCodeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6952);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41137);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74621);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24941);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29969);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hooks_useCountDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20512);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_auth__WEBPACK_IMPORTED_MODULE_7__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__, utils_session__WEBPACK_IMPORTED_MODULE_9__]);
([services_auth__WEBPACK_IMPORTED_MODULE_7__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__, utils_session__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function VerifyCodeForm({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { mutate: resend , isLoading: isResending  } = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)({
        mutationFn: (data)=>services_auth__WEBPACK_IMPORTED_MODULE_7__/* ["default"].forgotPasswordEmail */ .Z.forgotPasswordEmail(data)
    });
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_13__/* .useSettings */ .r)();
    const waitTime = settings.otp_expire_time * 60 || 60;
    const [time, timerStart, _, timerReset] = (0,hooks_useCountDown__WEBPACK_IMPORTED_MODULE_12__/* .useCountDown */ .h)(waitTime);
    const { query , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { setUserData  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_10__/* .useAuth */ .a)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
        initialValues: {
            code: ""
        },
        onSubmit: (values, { setSubmitting  })=>{
            services_auth__WEBPACK_IMPORTED_MODULE_7__/* ["default"].forgotPasswordVerify */ .Z.forgotPasswordVerify({
                verifyCode: values.code,
                email: query.email
            }).then(({ data  })=>{
                const token = "Bearer" + " " + data.token;
                (0,utils_session__WEBPACK_IMPORTED_MODULE_9__/* .setCookie */ .d8)("access_token", token);
                setUserData(data.user);
                push("/update-password");
            }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .error */ .vU)(t(err.statusCode))).finally(()=>setSubmitting(false));
            console.log("values => ", values);
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
        resend({
            email: query.email
        }, {
            onSuccess: ()=>{
                timerReset();
                timerStart();
                (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .success */ .Vp)(t("verify.send"));
            },
            onError: (err)=>{
                (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .error */ .vU)(err.message);
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        timerStart();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().title),
                        children: t("enter.otp.code")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().text),
                        children: t("enter.code.text", {
                            phone: query.email
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_otpCodeInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                value: formik.values.code,
                onChange: (otp)=>formik.setFieldValue("code", otp),
                numInputs: 6,
                isInputNum: true,
                containerStyle: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().otpContainer),
                hasErrored: !!formik.errors.code
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().text),
                children: [
                    t("verify.didntRecieveCode"),
                    " ",
                    time === 0 ? isResending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().text),
                        style: {
                            opacity: 0.5
                        },
                        children: "Sending..."
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: handleResendCode,
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().resend),
                        children: t("resend")
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().text),
                        children: [
                            time,
                            " s"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().actions),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_verifyCodeForm_module_scss__WEBPACK_IMPORTED_MODULE_14___default().item),
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

/***/ 84996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Verify)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52259);
/* harmony import */ var components_verifyCodeForm_verifyCodeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_verifyCodeForm_verifyCodeForm__WEBPACK_IMPORTED_MODULE_4__]);
([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_verifyCodeForm_verifyCodeForm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Verify({}) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_verifyCodeForm_verifyCodeForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 69709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 64254:
/***/ ((module) => {

module.exports = require("react-otp-input");

/***/ }),

/***/ 61175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4634:
/***/ ((module) => {

module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5675,5728,4169,7262,6684,8346,9975,2073], () => (__webpack_exec__(84996)));
module.exports = __webpack_exports__;

})();