exports.id = 7276;
exports.ids = [7276];
exports.modules = {

/***/ 55733:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "registerDetailsForm_wrapper__1rmem",
	"header": "registerDetailsForm_header___RF8K",
	"title": "registerDetailsForm_title__h_LFc",
	"text": "registerDetailsForm_text__YnxCO",
	"space": "registerDetailsForm_space__d_21Y",
	"flex": "registerDetailsForm_flex__7_jGx",
	"item": "registerDetailsForm_item__FeoYy",
	"action": "registerDetailsForm_action__0CNT4"
};


/***/ }),

/***/ 7276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RegisterDetailsForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55733);
/* harmony import */ var _registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30251);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32913);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29969);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74621);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41137);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_9__, services_auth__WEBPACK_IMPORTED_MODULE_10__, utils_session__WEBPACK_IMPORTED_MODULE_12__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_9__, services_auth__WEBPACK_IMPORTED_MODULE_10__, utils_session__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function RegisterDetailsForm({ email  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { setUserData  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_7__/* .useAuth */ .a)();
    const referralCode = query.referral_code;
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            email,
            gender: "male",
            firstname: "",
            lastname: "",
            password: "",
            password_confirmation: "",
            referral: referralCode
        },
        onSubmit: (values, { setSubmitting  })=>{
            const body = {
                ...values,
                referral: values.referral || undefined
            };
            if (values.email?.includes("@")) {
                services_auth__WEBPACK_IMPORTED_MODULE_10__/* ["default"].registerComplete */ .Z.registerComplete(body).then(({ data  })=>{
                    const token = "Bearer" + " " + data.token;
                    (0,utils_session__WEBPACK_IMPORTED_MODULE_12__/* .setCookie */ .d8)("access_token", token);
                    setUserData(data.user);
                    push("/");
                }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_9__/* .error */ .vU)(t(err.data.message))).finally(()=>setSubmitting(false));
            } else {
                const trimmedPhone = values.email?.replace(/[^0-9]/g, "");
                body.email = undefined;
                body.phone = Number(trimmedPhone);
                body.type = "firebase";
                services_auth__WEBPACK_IMPORTED_MODULE_10__/* ["default"].phoneRegisterComplete */ .Z.phoneRegisterComplete(body).then(({ data  })=>{
                    const token = "Bearer" + " " + data.token;
                    (0,utils_session__WEBPACK_IMPORTED_MODULE_12__/* .setCookie */ .d8)("access_token", token);
                    setUserData(data.user);
                    push("/");
                }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_9__/* .error */ .vU)(t(err.data.message))).finally(()=>setSubmitting(false));
            }
        },
        validate: (values)=>{
            const errors = {};
            if (!values.firstname) {
                errors.firstname = t("required");
            }
            if (!values.lastname) {
                errors.lastname = t("required");
            }
            if (!values.password) {
                errors.password = t("required");
            }
            if (!values.password_confirmation) {
                errors.password_confirmation = t("required");
            }
            if (values.password !== values.password_confirmation) {
                errors.password_confirmation = t("should.match");
            }
            return errors;
        },
        initialErrors: {},
        validateOnBlur: false,
        validateOnChange: false,
        validateOnMount: false
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().header),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                    children: t("sign.up")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().flex),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            name: "firstname",
                            label: t("firstname"),
                            placeholder: t("type.here"),
                            value: formik.values.firstname,
                            onChange: formik.handleChange,
                            error: !!formik.errors.firstname,
                            helperText: formik.errors.firstname
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().item),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            name: "lastname",
                            label: t("lastname"),
                            placeholder: t("type.here"),
                            value: formik.values.lastname,
                            onChange: formik.handleChange,
                            error: !!formik.errors.lastname,
                            helperText: formik.errors.lastname
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.FormLabel, {
                sx: {
                    fontSize: "9px",
                    color: "var(--black)",
                    textTransform: "uppercase"
                },
                id: "demo-radio-buttons-group-label",
                children: t("gender")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.RadioGroup, {
                "aria-labelledby": "demo-radio-buttons-group-label",
                name: "radio-buttons-group",
                row: true,
                value: formik.values.gender,
                onChange: (e)=>formik.setFieldValue("gender", e.target.value),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.FormControlLabel, {
                        value: "male",
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Radio, {}),
                        label: t("male")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.FormControlLabel, {
                        value: "female",
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Radio, {}),
                        label: t("female")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                name: "referral",
                label: t("referral"),
                placeholder: t("type.here"),
                value: formik.values.referral,
                onChange: formik.handleChange,
                error: !!formik.errors.referral,
                helperText: formik.errors.referral,
                autoComplete: "off"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                name: "password",
                label: t("password"),
                placeholder: t("type.here"),
                value: formik.values.password,
                onChange: formik.handleChange,
                error: !!formik.errors.password,
                helperText: formik.errors.password
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                name: "password_confirmation",
                label: t("password.confirmation"),
                placeholder: t("type.here"),
                value: formik.values.password_confirmation,
                onChange: formik.handleChange,
                error: !!formik.errors.password_confirmation,
                helperText: formik.errors.password_confirmation
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_registerDetailsForm_module_scss__WEBPACK_IMPORTED_MODULE_13___default().action),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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

/***/ })

};
;