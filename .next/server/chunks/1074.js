"use strict";
exports.id = 1074;
exports.ids = [1074];
exports.modules = {

/***/ 94844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SelectInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44237);
/* harmony import */ var remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);






const Select = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl)({
    width: "100%",
    backgroundColor: "transparent",
    "& .MuiInputLabel-root": {
        fontSize: 12,
        lineHeight: "14px",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "var(--black)",
        fontFamily: "'Inter', sans-serif",
        transform: "none"
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "var(--black)"
    },
    "& .MuiInput-root": {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "19px",
        color: "var(--black)",
        fontFamily: "'Inter', sans-serif"
    },
    "& .MuiInput-root::before": {
        borderBottom: "1px solid var(--grey)"
    },
    "& .MuiInput-root:hover:not(.Mui-disabled)::before": {
        borderBottom: "2px solid var(--black)"
    },
    "& .MuiInput-root::after": {
        borderBottom: "2px solid var(--primary)"
    },
    "& .MuiNativeSelect-icon": {
        width: 16,
        height: 16
    },
    "& .MuiNativeSelect-select option:disabled": {
        color: "var(--secondary-text)",
        fontWeight: 400
    }
});
function SelectInput({ label , name , onChange , value , options , placeholder  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Select, {
        fullWidth: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
                variant: "standard",
                htmlFor: name,
                shrink: true,
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.NativeSelect, {
                value: value,
                inputProps: {
                    name: name,
                    id: name
                },
                onChange: onChange,
                IconComponent: (remixicon_react_ArrowDownSLineIcon__WEBPACK_IMPORTED_MODULE_4___default()),
                placeholder: placeholder,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: t("choose.here")
                    }),
                    options.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: item.value,
                            children: t(item.label)
                        }, item.value))
                ]
            })
        ]
    });
}


/***/ }),

/***/ 94701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const galleryService = {
    upload: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/galleries`, data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (galleryService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;