(() => {
var exports = {};
exports.id = 5650;
exports.ids = [5650];
exports.modules = {

/***/ 80067:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "updatePasswordForm_wrapper__wEejj",
	"header": "updatePasswordForm_header__wCmcv",
	"title": "updatePasswordForm_title__YAhnd",
	"text": "updatePasswordForm_text__8RbQD",
	"space": "updatePasswordForm_space__grAXg",
	"flex": "updatePasswordForm_flex__v4VkZ",
	"item": "updatePasswordForm_item__B2Eb8",
	"action": "updatePasswordForm_action__TOeIz"
};


/***/ }),

/***/ 26389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpdatePasswordForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80067);
/* harmony import */ var _updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32913);
/* harmony import */ var services_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45641);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_profile__WEBPACK_IMPORTED_MODULE_6__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__]);
([services_profile__WEBPACK_IMPORTED_MODULE_6__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function UpdatePasswordForm({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
        initialValues: {
            password: "",
            password_confirmation: ""
        },
        onSubmit: (values, { setSubmitting  })=>{
            services_profile__WEBPACK_IMPORTED_MODULE_6__/* ["default"].passwordUpdate */ .Z.passwordUpdate(values).then(()=>{
                push("/");
            }).catch((err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .error */ .vU)(t(err.message))).finally(()=>setSubmitting(false));
        },
        validate: (values)=>{
            const errors = {};
            if (!values.password) {
                errors.password = t("required");
            }
            if (!values.password_confirmation) {
                errors.password_confirmation = t("required");
            }
            return errors;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                    children: t("update.password")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                name: "password",
                label: t("password"),
                placeholder: t("type.here"),
                value: formik.values.password,
                onChange: formik.handleChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_passwordInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                name: "password_confirmation",
                label: t("password.confirmation"),
                placeholder: t("type.here"),
                value: formik.values.password_confirmation,
                onChange: formik.handleChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_updatePasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().action),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    type: "submit",
                    loading: formik.isSubmitting,
                    children: t("submit")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79818:
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
/* harmony import */ var components_updatePasswordForm_updatePasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26389);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_updatePasswordForm_updatePasswordForm__WEBPACK_IMPORTED_MODULE_4__]);
([containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__, components_updatePasswordForm_updatePasswordForm__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Register({}) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_auth_auth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_updatePasswordForm_updatePasswordForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const profileService = {
    update: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/dashboard/user/profile/update`, data),
    passwordUpdate: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/profile/password/update`, data),
    get: (params, headers)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/profile/show`, {
            params,
            headers
        }),
    getNotifications: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/notifications`, {
            params
        }),
    updateNotifications: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/update/notifications`, data),
    firebaseTokenUpdate: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/profile/firebase/token/update`, data),
    updatePhone: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/dashboard/user/profile/update`, {}, {
            params
        }),
    userList: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/search-sending`, {
            params
        }),
    sendMoney: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/wallet/send`, data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileService);

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
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5675,5728,4169,7262,6684,8346,2913], () => (__webpack_exec__(79818)));
module.exports = __webpack_exports__;

})();