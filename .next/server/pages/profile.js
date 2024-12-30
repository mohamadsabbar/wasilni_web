(() => {
var exports = {};
exports.id = 277;
exports.ids = [277,8266];
exports.modules = {

/***/ 30799:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "profile_root__SZMDc",
	"container": "profile_container__sdTHE",
	"header": "profile_header__RWxgc",
	"title": "profile_title__q_f3t",
	"avatar": "profile_avatar__L9IM4",
	"avatarWrapper": "profile_avatarWrapper__vG5F0",
	"uploadBtn": "profile_uploadBtn__uKqvB"
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

/***/ 47117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Datepicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);




const DateInput = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField)({
    width: "100%",
    backgroundColor: "transparent",
    "& .MuiInputLabel-root": {
        fontSize: 12,
        lineHeight: "14px",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "var(--black)",
        "&.Mui-error": {
            color: "var(--red)"
        }
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "var(--black)"
    },
    "& .MuiInput-root": {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "19px",
        color: "var(--black)",
        fontFamily: "'Inter', sans-serif",
        "&.Mui-error::after": {
            borderBottomColor: "var(--red)"
        }
    },
    "& .MuiInput-root::before": {
        borderBottom: "1px solid var(--grey)"
    },
    "& .MuiInput-root:hover:not(.Mui-disabled)::before": {
        borderBottom: "2px solid var(--black)"
    },
    "& .MuiInput-root::after": {
        borderBottom: "2px solid var(--primary)"
    }
});
function Datepicker(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DateInput, {
        type: "date",
        variant: "standard",
        InputLabelProps: {
            shrink: true
        },
        ...props
    });
}


/***/ }),

/***/ 90472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(30799);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_profile_module_scss__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var remixicon_react_PencilLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92380);
/* harmony import */ var remixicon_react_PencilLineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_PencilLineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30251);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77262);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_button_darkButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94660);
/* harmony import */ var components_inputs_selectInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94844);
/* harmony import */ var data_genders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61196);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37490);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var services_gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(94701);
/* harmony import */ var utils_getAvatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26221);
/* harmony import */ var components_loader_loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75619);
/* harmony import */ var services_profile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45641);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74621);
/* harmony import */ var components_inputs_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47117);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(29969);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37562);
/* harmony import */ var components_inputs_phoneInputWithVerification__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(72427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_gallery__WEBPACK_IMPORTED_MODULE_14__, services_profile__WEBPACK_IMPORTED_MODULE_17__, components_alert_toast__WEBPACK_IMPORTED_MODULE_18__, components_inputs_phoneInputWithVerification__WEBPACK_IMPORTED_MODULE_23__]);
([services_gallery__WEBPACK_IMPORTED_MODULE_14__, services_profile__WEBPACK_IMPORTED_MODULE_17__, components_alert_toast__WEBPACK_IMPORTED_MODULE_18__, components_inputs_phoneInputWithVerification__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const ModalContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(()=>__webpack_require__.e(/* import() */ 7567).then(__webpack_require__.bind(__webpack_require__, 47567)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\profile\\profile.tsx -> " + "containers/modal/modal"
        ]
    }
});
const MobileDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(()=>__webpack_require__.e(/* import() */ 182).then(__webpack_require__.bind(__webpack_require__, 30182)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\profile\\profile.tsx -> " + "containers/drawer/mobileDrawer"
        ]
    }
});
const ProfilePassword = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2913), __webpack_require__.e(4889)]).then(__webpack_require__.bind(__webpack_require__, 64889)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\profile\\profile.tsx -> " + "components/profilePassword/profilePassword"
        ]
    }
});
function ProfileContainer({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)("(min-width:1140px)");
    const [passwordModal, handleOpen, handleClose] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const { setUserData  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_21__/* .useAuth */ .a)();
    const { mutate: upload , isLoading: isUploading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)({
        mutationFn: (data)=>services_gallery__WEBPACK_IMPORTED_MODULE_14__/* ["default"].upload */ .Z.upload(data),
        onSuccess: (data)=>{
            formik.setFieldValue("img", data.data.title);
        }
    });
    const { mutate: updateProfile , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)({
        mutationFn: (data)=>services_profile__WEBPACK_IMPORTED_MODULE_17__/* ["default"].update */ .Z.update(data),
        onSuccess: (data)=>{
            setUserData(data.data);
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_18__/* .success */ .Vp)(t("saved"));
        }
    });
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_7__.useFormik)({
        initialValues: {
            gender: "",
            ...data,
            birthday: data?.birthday ? dayjs__WEBPACK_IMPORTED_MODULE_20___default()(data.birthday).format("YYYY-MM-DD") : undefined
        },
        onSubmit: (values)=>{
            const body = {
                firstname: values.firstname,
                lastname: values.lastname,
                birthday: values.birthday,
                gender: values.gender,
                images: values.img ? [
                    values.img
                ] : undefined
            };
            updateProfile(body);
        },
        validate: (values)=>{
            const errors = {};
            if (!values.firstname) {
                errors.firstname = t("required");
            }
            if (!values.lastname) {
                errors.lastname = t("required");
            }
            return errors;
        }
    });
    function uploadImg(event) {
        const file = event.target.files?.item(0);
        if (file && file?.size / 1024 / 1024 > 2) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_18__/* .error */ .vU)(t("image.size.should.be.less.than.2mb"));
            return;
        }
        if (file) {
            const formData = new FormData();
            formData.append("image", file);
            formData.append("type", "users");
            upload(formData);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default().root),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `container ${(_profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default().container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default().title),
                            children: t("profile")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        onSubmit: formik.handleSubmit,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                            container: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                item: true,
                                xs: 12,
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                    container: true,
                                    spacing: isDesktop ? 6 : 4,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default().avatar),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default().avatarWrapper),
                                                        children: !isUploading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                            fill: true,
                                                            src: (0,utils_getAvatar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(formik.values.img),
                                                            alt: "Avatar",
                                                            sizes: "100px"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_loader_loading__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "img",
                                                        className: (_profile_module_scss__WEBPACK_IMPORTED_MODULE_24___default().uploadBtn),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_PencilLineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "file",
                                                        id: "img",
                                                        name: "img",
                                                        accept: ".png, .jpg, .jpeg, .svg",
                                                        hidden: true,
                                                        onChange: uploadImg
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                name: "firstname",
                                                label: t("firstname"),
                                                placeholder: t("type.here"),
                                                value: formik.values.firstname,
                                                onChange: formik.handleChange
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                name: "lastname",
                                                label: t("lastname"),
                                                placeholder: t("type.here"),
                                                value: formik.values.lastname,
                                                onChange: formik.handleChange
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_selectInput__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                name: "gender",
                                                label: t("gender"),
                                                placeholder: t("type.here"),
                                                value: formik.values.gender,
                                                onChange: formik.handleChange,
                                                options: data_genders__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_datepicker__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                name: "birthday",
                                                label: t("date.of.birth"),
                                                placeholder: t("type.here"),
                                                value: formik.values.birthday,
                                                onChange: formik.handleChange,
                                                inputProps: {
                                                    max: dayjs__WEBPACK_IMPORTED_MODULE_20___default()().add(-18, "years").format("YYYY-MM-DD")
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                name: "email",
                                                label: t("email"),
                                                placeholder: t("type.here"),
                                                value: formik.values.email,
                                                disabled: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_phoneInputWithVerification__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                name: "phone",
                                                label: t("phone"),
                                                placeholder: t("type.here"),
                                                value: formik.values.phone,
                                                disabled: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            mt: 2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                type: "submit",
                                                loading: isLoading,
                                                children: t("save")
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 6,
                                            mt: isDesktop ? 2 : -2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                type: "button",
                                                onClick: handleOpen,
                                                children: t("update.password")
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContainer, {
                open: passwordModal,
                onClose: handleClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfilePassword, {
                    handleClose: handleClose
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDrawer, {
                open: passwordModal,
                onClose: handleClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfilePassword, {
                    handleClose: handleClose
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AuthContext),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);


/***/ }),

/***/ 61196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genders = [
    {
        label: "male",
        value: "1"
    },
    {
        label: "female",
        value: "2"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genders);


/***/ }),

/***/ 37490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useModal(isOpen = false) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen);
    const handleOpen = (event)=>{
        event?.preventDefault();
        setOpen(true);
    };
    const handleClose = ()=>setOpen(false);
    return [
        open,
        handleOpen,
        handleClose
    ];
}


/***/ }),

/***/ 34349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 86459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_profile_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90472);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_profile_profile__WEBPACK_IMPORTED_MODULE_3__]);
containers_profile_profile__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Profile({}) {
    const { user  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_profile_profile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: user
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NW": () => (/* binding */ setCurrency),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bJ": () => (/* binding */ setDefaultCurrency),
/* harmony export */   "j": () => (/* binding */ selectCurrency)
/* harmony export */ });
/* unused harmony export clearCurrency */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    currency: null,
    defaultCurrency: null
};
const currencySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "currency",
    initialState,
    reducers: {
        setCurrency (state, action) {
            const { payload  } = action;
            state.currency = payload;
        },
        setDefaultCurrency (state, action) {
            const { payload  } = action;
            state.defaultCurrency = payload;
        },
        clearCurrency (state) {
            state.currency = null;
        }
    }
});
const { setCurrency , clearCurrency , setDefaultCurrency  } = currencySlice.actions;
const selectCurrency = (state)=>state.currency.currency;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencySlice.reducer);


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

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

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

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 44237:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArrowDownSLineIcon");

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

/***/ 15423:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/EditLineIcon");

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

/***/ 92380:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/PencilLineIcon");

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
var __webpack_exports__ = __webpack_require__.X(0, [5152,5728,4169,7262,251,2606,9433,1074], () => (__webpack_exec__(86459)));
module.exports = __webpack_exports__;

})();