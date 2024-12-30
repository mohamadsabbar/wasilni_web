exports.id = 2606;
exports.ids = [2606];
exports.modules = {

/***/ 18695:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "editPhone_wrapper__DnYMk",
	"header": "editPhone_header__Ej0Ql",
	"title": "editPhone_title__Fq_8B",
	"text": "editPhone_text__0YOxO",
	"resend": "editPhone_resend__V2ai4",
	"space": "editPhone_space__R1N5a",
	"flex": "editPhone_flex__MkrJ5",
	"item": "editPhone_item__ghHtx",
	"label": "editPhone_label__pLE_a",
	"action": "editPhone_action__vFKgz",
	"otpContainer": "editPhone_otpContainer__mf2Xk",
	"input": "editPhone_input__KoecU"
};


/***/ }),

/***/ 42606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPhone)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _insertNewPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15892);
/* harmony import */ var _newPhoneVerify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8660);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_insertNewPhone__WEBPACK_IMPORTED_MODULE_2__, _newPhoneVerify__WEBPACK_IMPORTED_MODULE_3__]);
([_insertNewPhone__WEBPACK_IMPORTED_MODULE_2__, _newPhoneVerify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function EditPhone({ handleClose  }) {
    const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("EDIT");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [callback, setCallback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const handleChangeView = (view)=>setCurrentView(view);
    const renderView = ()=>{
        switch(currentView){
            case "EDIT":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_insertNewPhone__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    onSuccess: ({ phone , callback  })=>{
                        setPhone(phone);
                        setCallback(callback);
                    }
                });
            case "VERIFY":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_newPhoneVerify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    phone: phone,
                    callback: callback,
                    setCallback: setCallback,
                    handleClose: handleClose
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_insertNewPhone__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    changeView: handleChangeView,
                    onSuccess: ({ phone , callback  })=>{
                        setPhone(phone);
                        setCallback(callback);
                    }
                });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: renderView()
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InsertNewPhone)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18695);
/* harmony import */ var _editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30251);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74621);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_6__]);
components_alert_toast__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function InsertNewPhone({ onSuccess , changeView  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { phoneNumberSignIn  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_7__/* .useAuth */ .a)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: {
            phone: ""
        },
        onSubmit: (values, { setSubmitting  })=>{
            const trimmedPhone = values.phone.replace(/[^0-9]/g, "");
            phoneNumberSignIn(values.phone).then((confirmationResult)=>{
                onSuccess({
                    phone: trimmedPhone,
                    callback: confirmationResult
                });
                changeView("VERIFY");
            }).catch((err)=>{
                (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .error */ .vU)(t("sms.not.sent"));
                console.log("err => ", err);
            }).finally(()=>{
                setSubmitting(false);
            });
        },
        validate: (values)=>{
            const errors = {};
            if (!values.phone) {
                errors.phone = t("required");
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.phone)) return errors;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                    children: t("edit.phone")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                name: "phone",
                label: t("phone"),
                placeholder: t("type.here"),
                value: formik.values.phone,
                onChange: formik.handleChange,
                error: !!formik.errors.phone,
                helperText: formik.errors.phone,
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_8___default().action),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    id: "sign-in-button",
                    type: "submit",
                    loading: formik.isSubmitting,
                    children: t("save")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewPhoneVerify)
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
/* harmony import */ var _editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18695);
/* harmony import */ var _editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useCountDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20512);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21697);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29969);
/* harmony import */ var services_profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45641);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64698);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34349);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_1__, services_profile__WEBPACK_IMPORTED_MODULE_11__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_1__, services_profile__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function NewPhoneVerify({ phone , callback , setCallback , handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_9__/* .useSettings */ .r)();
    const waitTime = settings.otp_expire_time * 60 || 60;
    const [time, timerStart, _, timerReset] = (0,hooks_useCountDown__WEBPACK_IMPORTED_MODULE_8__/* .useCountDown */ .h)(waitTime);
    const { phoneNumberSignIn , setUserData , user  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_10__/* .useAuth */ .a)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_14__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_13__/* .selectCurrency */ .j);
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useQueryClient)();
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
        initialValues: {},
        onSubmit: (values, { setSubmitting  })=>{
            const payload = {
                firstname: user.firstname,
                lastname: user.lastname,
                birthday: dayjs__WEBPACK_IMPORTED_MODULE_12___default()(user.birthday).format("YYYY-MM-DD"),
                gender: user.gender,
                phone: parseInt(phone)
            };
            callback.confirm(values.verifyId || "").then(()=>{
                services_profile__WEBPACK_IMPORTED_MODULE_11__/* ["default"].updatePhone */ .Z.updatePhone(payload).then((res)=>{
                    setUserData(res.data);
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .success */ .Vp)(t("verified"));
                    handleClose();
                    queryClient.invalidateQueries([
                        "profile",
                        currency?.id
                    ]);
                }).catch((err)=>{
                    if (err?.data?.params?.phone) {
                        (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(err?.data?.params?.phone.at(0));
                        return;
                    }
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(t("some.thing.went.wrong"));
                }).finally(()=>setSubmitting(false));
            }).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(t("verify.error")));
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
        phoneNumberSignIn(phone).then((confirmationResult)=>{
            timerReset();
            timerStart();
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .success */ .Vp)(t("verify.send"));
            if (setCallback) setCallback(confirmationResult);
        }).catch(()=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_1__/* .error */ .vU)(t("sms.not.sent")));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        timerStart();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().wrapper),
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title),
                        children: t("verify.phone")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                        children: [
                            t("verify.text"),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: phone
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().space)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Stack, {
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_5___default()), {
                        numInputs: 6,
                        inputStyle: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().input),
                        isInputNum: true,
                        containerStyle: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().otpContainer),
                        value: formik.values.verifyId?.toString(),
                        onChange: (otp)=>formik.setFieldValue("verifyId", otp)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                        children: [
                            t("verify.didntRecieveCode"),
                            " ",
                            time === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                id: "sign-in-button",
                                onClick: handleResendCode,
                                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().resend),
                                children: t("resend")
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
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
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().space)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_editPhone_module_scss__WEBPACK_IMPORTED_MODULE_16___default().action),
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

/***/ })

};
;