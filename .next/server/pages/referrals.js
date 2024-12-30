(() => {
var exports = {};
exports.id = 8217;
exports.ids = [8217,892,8266];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 92648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


/***/ }),

/***/ 66329:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "referralContainer_container__hk6UG",
	"wrapper": "referralContainer_wrapper__xKQiu",
	"imgWrapper": "referralContainer_imgWrapper__Pjgc5",
	"main": "referralContainer_main__IUDKr",
	"title": "referralContainer_title__LGcco",
	"text": "referralContainer_text__tHq2c",
	"line": "referralContainer_line__0eDfF",
	"flex": "referralContainer_flex__VS02M",
	"flexItem": "referralContainer_flexItem__rx5vM",
	"actions": "referralContainer_actions__Qebq1",
	"shimmer": "referralContainer_shimmer__BpvCb",
	"textShimmer": "referralContainer_textShimmer__AUIbN"
};


/***/ }),

/***/ 80892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SecondaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77788);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function SecondaryButton({ children , disabled , onClick , type ="button" , icon , size ="medium" , loading =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().secondaryBtn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]}`,
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

/***/ 37562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FallbackImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48909);
/* harmony import */ var _fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */ 


function FallbackImage({ src , alt , onError  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: src,
        alt: alt,
        className: (_fallbackImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root),
        onError: onError
    });
}


/***/ }),

/***/ 31427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReferralContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66329);
/* harmony import */ var _referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77262);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80892);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29969);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90026);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74621);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95785);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_7__]);
components_alert_toast__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function ReferralContainer({ data , loading  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { user , isAuthenticated  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const copyToClipBoard = async ()=>{
        if (!isAuthenticated) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .warning */ .Kp)(t("login.first"));
            return;
        }
        try {
            await navigator.clipboard.writeText(user?.my_referral || "");
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .success */ .Vp)(t("copied"));
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .error */ .vU)("Failed to copy!");
        }
    };
    const shareReferral = async ()=>{
        if (!isAuthenticated) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .warning */ .Kp)(t("login.first"));
            return;
        }
        try {
            await navigator.clipboard.writeText(constants_constants__WEBPACK_IMPORTED_MODULE_8__/* .WEBSITE_URL */ .o6 + "/register?referral_code=" + user?.my_referral);
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .success */ .Vp)(t("copied"));
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .error */ .vU)("Failed to copy!");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().imgWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(data?.img),
                            alt: "Referral",
                            fill: true,
                            sizes: "536px"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                                        children: data?.translation?.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().text),
                                        children: [
                                            data?.translation?.description,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                href: "/referral-terms",
                                                children: t("referral.terms")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().line)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flex),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flexItem),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            t("balance"),
                                                            ": "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        number: user?.referral_from_topup_price
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flexItem),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            t("referrals"),
                                                            ": "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: user?.referral_from_topup_count
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().actions),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        onClick: shareReferral,
                                        children: t("share")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        onClick: copyToClipBoard,
                                        children: t("copy.code")
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                container: true,
                spacing: 4,
                py: 5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Skeleton, {
                            variant: "rectangular",
                            className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().shimmer)
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Grid, {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Skeleton, {
                                variant: "text",
                                className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().textShimmer)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Skeleton, {
                                variant: "text",
                                className: (_referralContainer_module_scss__WEBPACK_IMPORTED_MODULE_12___default().textShimmer)
                            })
                        ]
                    })
                ]
            })
        })
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

/***/ 44350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Referrals)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_referralContainer_referralContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31427);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49073);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_referralContainer_referralContainer__WEBPACK_IMPORTED_MODULE_3__, services_information__WEBPACK_IMPORTED_MODULE_6__]);
([containers_referralContainer_referralContainer__WEBPACK_IMPORTED_MODULE_3__, services_information__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Referrals({}) {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const locale = i18n.language;
    const { data , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "referrals",
        locale
    ], ()=>services_information__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getReferrals */ .Z.getReferrals());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("referrals")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_referralContainer_referralContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: data?.data,
                loading: isLoading
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

/***/ 49073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const informationService = {
    getSettings: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/settings`, {
            params
        }),
    getReferrals: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/referral`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (informationService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getImage)
/* harmony export */ });
// import { IMAGE_URL } from "constants/constants";
function getImage(img) {
    if (img) {
        return img;
    } else {
        return "";
    }
}


/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

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

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5728,4169,7262,26], () => (__webpack_exec__(44350)));
module.exports = __webpack_exports__;

})();