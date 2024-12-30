exports.id = 8346;
exports.ids = [8346];
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

/***/ 64713:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "auth_container__VKhNq",
	"authForm": "auth_authForm__reJrL",
	"formWrapper": "auth_formWrapper__VKjb4",
	"header": "auth_header__JdGZq",
	"body": "auth_body__rwKbX",
	"hero": "auth_hero__W40NG",
	"imgWrapper": "auth_imgWrapper__EtHM7"
};


/***/ }),

/***/ 52259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6684);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64713);
/* harmony import */ var _auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_auth_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80108);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_information__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49073);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_information__WEBPACK_IMPORTED_MODULE_7__]);
services_information__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function AuthContainer({ children  }) {
    const { isDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .N);
    const { updateSettings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_8__/* .useSettings */ .r)();
    (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)("settings", ()=>services_information__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getSettings */ .Z.getSettings(), {
        onSuccess: (data)=>{
            const obj = createSettings(data.data);
            updateSettings({
                payment_type: obj.payment_type,
                instagram_url: obj.instagram,
                facebook_url: obj.facebook,
                twitter_url: obj.twitter,
                referral_active: obj.referral_active,
                otp_expire_time: obj.otp_expire_time,
                customer_app_android: obj.customer_app_android,
                customer_app_ios: obj.customer_app_ios,
                delivery_app_android: obj.delivery_app_android,
                delivery_app_ios: obj.delivery_app_ios,
                vendor_app_android: obj.vendor_app_android,
                vendor_app_ios: obj.vendor_app_ios,
                group_order: obj.group_order,
                footer_text: obj.footer_text,
                reservation_enable_for_user: obj.reservation_enable_for_user
            });
        }
    });
    function createSettings(list) {
        const result = list.map((item)=>({
                [item.key]: item.value
            }));
        return Object.assign({}, ...result);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default().authForm),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default().formWrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                style: {
                                    display: "block"
                                },
                                children: isDarkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_2__/* .BrandLogoDark */ .$C, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_2__/* .BrandLogo */ .Oc, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default().body),
                            children: children
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default().hero),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default().imgWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        fill: true,
                        src: "/images/welcome.jpg",
                        alt: "Welcome to foodyman"
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext),
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SettingsContext);


/***/ }),

/***/ 80108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "N": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);


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

/***/ })

};
;