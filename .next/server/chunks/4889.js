exports.id = 4889;
exports.ids = [4889];
exports.modules = {

/***/ 19946:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "profilePassword_wrapper__TkHAE",
	"title": "profilePassword_title__EgJa4",
	"form": "profilePassword_form__MAWkK"
};


/***/ }),

/***/ 64889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profilePassword_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19946);
/* harmony import */ var _profilePassword_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_profilePassword_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32913);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77262);
/* harmony import */ var components_button_darkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94660);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var services_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45641);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74621);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_profile__WEBPACK_IMPORTED_MODULE_9__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__]);
([services_profile__WEBPACK_IMPORTED_MODULE_9__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function ProfilePassword({ handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(min-width:1140px)");
    const { user  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_11__/* .useAuth */ .a)();
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
        mutationFn: (data)=>services_profile__WEBPACK_IMPORTED_MODULE_9__/* ["default"].passwordUpdate */ .Z.passwordUpdate(data),
        onSuccess: (data)=>{
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_10__/* .success */ .Vp)(t("saved"));
            handleClose();
        },
        onError: (err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_10__/* .error */ .vU)(t(err.statusCode))
    });
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            old_password: "",
            password: "",
            password_confirmation: ""
        },
        onSubmit: (values, { setSubmitting  })=>{
            console.log("values => ", values);
            mutate(values);
        },
        validate: (values)=>{
            const errors = {};
            if (!values.old_password && !user?.empty_p) {
                errors.old_password = t("required");
            }
            if (!values.password) {
                errors.password = t("required");
            } else if (values.password.replace(/\s/g, "").length < 6) {
                errors.password = t("password.should.contain");
            }
            if (!values.password_confirmation) {
                errors.password_confirmation = t("required");
            } else if (values.password !== values.password_confirmation) {
                errors.password_confirmation = t("passwords.dont.match");
            }
            return errors;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_profilePassword_module_scss__WEBPACK_IMPORTED_MODULE_12___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_profilePassword_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                children: t("update.password")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                className: (_profilePassword_module_scss__WEBPACK_IMPORTED_MODULE_12___default().form),
                onSubmit: formik.handleSubmit,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: 4,
                    children: [
                        !user?.empty_p && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "old_password",
                                    label: t("old.password"),
                                    placeholder: t("type.here"),
                                    value: formik.values.old_password,
                                    onChange: formik.handleChange,
                                    error: !!formik.errors.old_password && formik.touched.old_password
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        color: "red",
                                        fontSize: "14px"
                                    },
                                    children: formik.errors?.old_password && formik.touched?.old_password ? formik.errors?.old_password : ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "password",
                                    label: t("password"),
                                    placeholder: t("type.here"),
                                    value: formik.values.password,
                                    onChange: formik.handleChange,
                                    error: !!formik.errors.password && formik.touched.password
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        color: "red",
                                        fontSize: "14px"
                                    },
                                    children: formik.errors?.password && formik.touched?.password ? formik.errors?.password : ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    name: "password_confirmation",
                                    label: t("password.confirmation"),
                                    placeholder: t("type.here"),
                                    value: formik.values.password_confirmation,
                                    onChange: formik.handleChange,
                                    error: !!formik.errors.password_confirmation && formik.touched.password_confirmation
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        color: "red",
                                        fontSize: "14px"
                                    },
                                    children: formik.errors?.password_confirmation && formik.touched?.password_confirmation ? formik.errors?.password_confirmation : ""
                                })
                            ]
                        }),
                        !user?.empty_p && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                type: "submit",
                                loading: isLoading,
                                children: t("save")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            mt: isDesktop ? 0 : -2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "button",
                                onClick: handleClose,
                                children: t("cancel")
                            })
                        })
                    ]
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