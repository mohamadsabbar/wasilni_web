exports.id = 7234;
exports.ids = [7234];
exports.modules = {

/***/ 30140:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "currencyList_wrapper__vQ3V3",
	"row": "currencyList_row__t1RZg",
	"label": "currencyList_label__WkVIu",
	"text": "currencyList_text__79m6Q"
};


/***/ }),

/***/ 51173:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "languagePopover_wrapper__YLEKi",
	"row": "languagePopover_row__OmupU",
	"label": "languagePopover_label__p0I4l",
	"text": "languagePopover_text__HndnI"
};


/***/ }),

/***/ 11295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26221);
/* harmony import */ var _fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);




const avatar_placeholder = "/images/avatar_placeholder.png";
function Avatar({ data  }) {
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,utils_getAvatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(data?.img));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        fill: true,
        src: imgSrc,
        alt: data?.firstname,
        sizes: "60px",
        onError: ()=>setImgSrc(avatar_placeholder)
    });
}


/***/ }),

/***/ 1729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CurrencyList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80865);
/* harmony import */ var _currencyList_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30140);
/* harmony import */ var _currencyList_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_currencyList_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64698);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_currency__WEBPACK_IMPORTED_MODULE_6__]);
services_currency__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CurrencyList({ onClose  }) {
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_4__/* .selectCurrency */ .j);
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)("currencies", ()=>services_currency__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAll */ .Z.getAll());
    const handleChange = (event)=>{
        const currencyId = event.target.value;
        const activeCurrency = data?.data?.find((item)=>item.id === Number(currencyId));
        dispatch((0,redux_slices_currency__WEBPACK_IMPORTED_MODULE_4__/* .setCurrency */ .NW)(activeCurrency));
        onClose();
    };
    const controlProps = (item)=>({
            checked: String(currency?.id) === item,
            onChange: handleChange,
            value: item,
            id: item,
            name: "currency",
            inputProps: {
                "aria-label": item
            }
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_currencyList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
        children: data?.data?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_currencyList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().row),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ...controlProps(String(item.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: (_currencyList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().label),
                        htmlFor: String(item.id),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_currencyList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                                children: item.symbol
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: [
                                    "(",
                                    item.title,
                                    ")"
                                ]
                            })
                        ]
                    })
                ]
            }, item.id))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45049:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LanguagePopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80865);
/* harmony import */ var _languagePopover_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51173);
/* harmony import */ var _languagePopover_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_languagePopover_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61664);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var services_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12067);
/* harmony import */ var services_translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14303);
/* harmony import */ var contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80108);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24941);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_3__, services_language__WEBPACK_IMPORTED_MODULE_5__, services_translations__WEBPACK_IMPORTED_MODULE_6__, utils_session__WEBPACK_IMPORTED_MODULE_8__]);
([i18n__WEBPACK_IMPORTED_MODULE_3__, services_language__WEBPACK_IMPORTED_MODULE_5__, services_translations__WEBPACK_IMPORTED_MODULE_6__, utils_session__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function LanguagePopover({ onClose  }) {
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)("languages", ()=>services_language__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAllActive */ .Z.getAllActive());
    const { setDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_7__/* .ThemeContext */ .N);
    const handleChange = (event)=>{
        const lang = event.target.value;
        const isRTL = !!data?.data.find((item)=>item.locale == lang)?.backward;
        nprogress__WEBPACK_IMPORTED_MODULE_9___default().start();
        onClose();
        services_translations__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAll */ .Z.getAll({
            lang
        }).then(({ data  })=>i18n__WEBPACK_IMPORTED_MODULE_3__/* ["default"].addResourceBundle */ .Z.addResourceBundle(lang, "translation", data)).finally(()=>{
            (0,utils_session__WEBPACK_IMPORTED_MODULE_8__/* .setCookie */ .d8)("locale", lang);
            i18n__WEBPACK_IMPORTED_MODULE_3__/* ["default"].changeLanguage */ .Z.changeLanguage(lang);
            setDirection(isRTL ? "rtl" : "ltr");
            nprogress__WEBPACK_IMPORTED_MODULE_9___default().done();
        });
    };
    const controlProps = (item)=>({
            checked: i18n__WEBPACK_IMPORTED_MODULE_3__/* ["default"].language */ .Z.language === item,
            onChange: handleChange,
            value: item,
            id: item,
            name: "language",
            inputProps: {
                "aria-label": item
            }
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_languagePopover_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
        children: data?.data?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_languagePopover_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ...controlProps(item.locale)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: (_languagePopover_module_scss__WEBPACK_IMPORTED_MODULE_10___default().label),
                        htmlFor: item.locale,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_languagePopover_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                            children: item.title
                        })
                    })
                ]
            }, item.locale))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const currencyService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/currencies/active`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencyService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const languageService = {
    getAllActive: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/languages/active`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languageService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const translationService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/translations/paginate`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translationService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getAvatar)
/* harmony export */ });
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5848);

const avatar_placeholder = "/images/avatar_placeholder.png";
function getAvatar(img) {
    if (img) {
        return img.includes("http") ? img : constants_constants__WEBPACK_IMPORTED_MODULE_0__/* .IMAGE_URL */ .yA + img;
    } else {
        return avatar_placeholder;
    }
}


/***/ })

};
;