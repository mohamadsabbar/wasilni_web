exports.id = 5728;
exports.ids = [5728];
exports.modules = {

/***/ 75167:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "alert_root__WFGuJ",
	"success": "alert_success__x8WI3",
	"warning": "alert_warning__z__oT",
	"error": "alert_error__igC0t",
	"info": "alert_info__Bn5Y5",
	"icon": "alert_icon__LI8TL",
	"message": "alert_message__kbkpY",
	"layout": "alert_layout__mpDvp"
};


/***/ }),

/***/ 38362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11060);
/* harmony import */ var remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alert_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75167);
/* harmony import */ var _alert_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_alert_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function Alert({ icon , message , closeToast , type  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_alert_module_scss__WEBPACK_IMPORTED_MODULE_3___default().root)} ${(_alert_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[type]}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_alert_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_alert_module_scss__WEBPACK_IMPORTED_MODULE_3___default().layout),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_alert_module_scss__WEBPACK_IMPORTED_MODULE_3___default().message),
                    children: message
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: closeToast,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CloseFillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
            })
        ]
    });
}


/***/ }),

/***/ 74621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kp": () => (/* binding */ warning),
/* harmony export */   "Vp": () => (/* binding */ success),
/* harmony export */   "um": () => (/* binding */ info),
/* harmony export */   "vU": () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var remixicon_react_CheckboxCircleLineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4634);
/* harmony import */ var remixicon_react_CheckboxCircleLineIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CheckboxCircleLineIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_ErrorWarningLineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53112);
/* harmony import */ var remixicon_react_ErrorWarningLineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ErrorWarningLineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_InformationLineIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12564);
/* harmony import */ var remixicon_react_InformationLineIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_InformationLineIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38362);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const success = (msg, options)=>{
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CheckboxCircleLineIcon__WEBPACK_IMPORTED_MODULE_2___default()), {}),
        message: msg,
        type: "success"
    }), options);
};
const warning = (msg, options)=>{
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ErrorWarningLineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
        message: msg,
        type: "warning"
    }), options);
};
const error = (msg, options)=>{
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ErrorWarningLineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {}),
        message: msg,
        type: "error"
    }), options);
};
const info = (msg, options)=>{
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_InformationLineIcon__WEBPACK_IMPORTED_MODULE_4___default()), {}),
        message: msg,
        type: "info"
    }), options);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$6": () => (/* binding */ STORAGE_BUCKET),
/* harmony export */   "$h": () => (/* binding */ API_KEY),
/* harmony export */   "AC": () => (/* binding */ DYNAMIC_LINK_DOMAIN),
/* harmony export */   "AF": () => (/* binding */ APP_ID),
/* harmony export */   "BN": () => (/* binding */ BRAND_LOGO),
/* harmony export */   "Bt": () => (/* binding */ defaultUser),
/* harmony export */   "KM": () => (/* binding */ META_DESCRIPTION),
/* harmony export */   "Kc": () => (/* binding */ DYNAMIC_LINK_WEB_KEY),
/* harmony export */   "Mr": () => (/* binding */ DYNAMIC_LINK_IOS),
/* harmony export */   "NX": () => (/* binding */ PROJECT_ID),
/* harmony export */   "PX": () => (/* binding */ DEFAULT_LOCATION),
/* harmony export */   "RN": () => (/* binding */ AUTH_DOMAIN),
/* harmony export */   "T5": () => (/* binding */ META_IMAGE),
/* harmony export */   "U$": () => (/* binding */ MEASUREMENT_ID),
/* harmony export */   "cU": () => (/* binding */ META_KEYWORDS),
/* harmony export */   "dK": () => (/* binding */ DYNAMIC_LINK_ANDROID),
/* harmony export */   "ft": () => (/* binding */ VAPID_KEY),
/* harmony export */   "k$": () => (/* binding */ DEFAULT_LANGUAGE),
/* harmony export */   "k5": () => (/* binding */ META_TITLE),
/* harmony export */   "sq": () => (/* binding */ BRAND_LOGO_ROUNDED),
/* harmony export */   "uO": () => (/* binding */ MESSAGING_SENDER_ID),
/* harmony export */   "wc": () => (/* binding */ BRAND_LOGO_DARK)
/* harmony export */ });
// Firebase config
const API_KEY = "AIzaSyALXG1N4KPCkbPJoiX1TeyCMMpb2d1jnr0";
const AUTH_DOMAIN = "wasilni-768ec.firebaseapp.com";
const PROJECT_ID = "wasilni-768ec";
const STORAGE_BUCKET = "wasilni-768ec.appspot.com";
const MESSAGING_SENDER_ID = "633097750359";
const APP_ID = "1:633097750359:web:9622c821b787ee5a7ce012";
const MEASUREMENT_ID = "G-H7SMDF1H3T";
const VAPID_KEY = "BD3QFOZO2PLi0-_U0JuXBpkxi8-CrS6DTTmscnbH3e1m_tEz16tRLk_pjIEd8wqY01dgF-6SPEhFW837cO8nAZE";
// Default config
const DEFAULT_LOCATION = "38.9120424,-77.035308"; // latitude,longitude
const DEFAULT_LANGUAGE = "en";
// SEO
const META_TITLE = "Foodyman";
const META_DESCRIPTION = "Food and Grocery Ordering and Delivery Marketplace";
const META_IMAGE = "https://foodyman.org/images/brand_logo.svg";
const META_KEYWORDS = "Restaurant";
const BRAND_LOGO = "https://foodyman.org/images/brand_logo.svg";
const BRAND_LOGO_DARK = "https://foodyman.org/images/brand_logo_dark.svg";
const BRAND_LOGO_ROUNDED = "https://foodyman.org/images/brand_logo_rounded.svg";
// Dynamic Link
const DYNAMIC_LINK_DOMAIN = "https://wasilni.page.link";
const DYNAMIC_LINK_ANDROID = "com.foodyman";
const DYNAMIC_LINK_IOS = "com.foodyman.customer";
const DYNAMIC_LINK_WEB_KEY = "AIzaSyDDprjmRBCm4aQ0Vm8EQqpmbAQTsVAzgGo";
const defaultUser = {
    login: "user@githubit.com",
    password: "githubit"
};


/***/ }),

/***/ 5848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DA": () => (/* binding */ G_TAG),
/* harmony export */   "DH": () => (/* binding */ EXTERNAL_PAYMENTS),
/* harmony export */   "OU": () => (/* binding */ ADMIN_PANEL_URL),
/* harmony export */   "T5": () => (/* binding */ API_URL),
/* harmony export */   "_n": () => (/* binding */ BASE_URL),
/* harmony export */   "de": () => (/* binding */ UNPAID_STATUSES),
/* harmony export */   "kr": () => (/* binding */ MAP_API_KEY),
/* harmony export */   "o6": () => (/* binding */ WEBSITE_URL),
/* harmony export */   "yA": () => (/* binding */ IMAGE_URL)
/* harmony export */ });
// Do not edit this file
const WEBSITE_URL = "https://wasilni.online";
const BASE_URL = "https://api.wasilni.online";
const ADMIN_PANEL_URL = "https://admin.wasilni.online";
const API_URL = BASE_URL + "/api/v1/";
const IMAGE_URL = BASE_URL + "/storage/images/";
const MAP_API_KEY = "";
const G_TAG = "G-Z7GMSWTN8P";
const UNPAID_STATUSES = [
    "progress",
    "canceled",
    "rejected"
];
const EXTERNAL_PAYMENTS = [
    "stripe",
    "razorpay",
    "paystack",
    "moyasar",
    "paytabs",
    "mercado-pago",
    "flutterWave",
    "paypal"
];


/***/ }),

/***/ 61664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64329);
/* harmony import */ var _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87551);
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const resources = {
    en: {
        translation: _locales_en_translation_json__WEBPACK_IMPORTED_MODULE_3__
    }
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__["default"]).init({
    resources,
    fallbackLng: constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_LANGUAGE */ .k$,
    // lng: getCookieFromBrowser("NEXT_LOCALE") || DEFAULT_LANGUAGE,
    supportedLngs: [
        "aa",
        "ab",
        "ae",
        "af",
        "ak",
        "am",
        "an",
        "ar",
        "as",
        "av",
        "ay",
        "az",
        "az",
        "ba",
        "be",
        "bg",
        "bh",
        "bi",
        "bm",
        "bn",
        "bo",
        "br",
        "bs",
        "ca",
        "ce",
        "ch",
        "co",
        "cr",
        "cs",
        "cu",
        "cv",
        "cy",
        "da",
        "de",
        "dv",
        "dz",
        "ee",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fa",
        "ff",
        "fi",
        "fj",
        "fo",
        "fr",
        "fy",
        "ga",
        "gd",
        "gl",
        "gn",
        "gu",
        "gv",
        "ha",
        "he",
        "hi",
        "ho",
        "hr",
        "ht",
        "hu",
        "hy",
        "hz",
        "ia",
        "id",
        "ie",
        "ig",
        "ii",
        "ik",
        "io",
        "is",
        "it",
        "iu",
        "ja",
        "jv",
        "ka",
        "kg",
        "ki",
        "kj",
        "kk",
        "kl",
        "km",
        "kn",
        "ko",
        "kr",
        "ks",
        "ku",
        "kv",
        "kw",
        "ky",
        "la",
        "lb",
        "lg",
        "li",
        "ln",
        "lo",
        "lt",
        "lu",
        "lv",
        "mg",
        "mh",
        "mi",
        "mk",
        "ml",
        "mn",
        "mr",
        "ms",
        "mt",
        "my",
        "na",
        "nb",
        "nd",
        "ne",
        "ng",
        "nl",
        "nn",
        "no",
        "nr",
        "nv",
        "ny",
        "oc",
        "oj",
        "om",
        "or",
        "os",
        "pa",
        "pi",
        "pl",
        "ps",
        "pt",
        "qu",
        "rm",
        "rn",
        "ro",
        "ru",
        "rw",
        "sa",
        "sc",
        "sd",
        "se",
        "sg",
        "si",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sq",
        "sr",
        "ss",
        "st",
        "su",
        "sv",
        "sw",
        "ta",
        "te",
        "tg",
        "th",
        "ti",
        "tk",
        "tl",
        "tn",
        "to",
        "tr",
        "ts",
        "tt",
        "tw",
        "ty",
        "ug",
        "uk",
        "ur",
        "uz",
        "ve",
        "vi",
        "vo",
        "wa",
        "wo",
        "xh",
        "yi",
        "yo",
        "za",
        "zh",
        "zu"
    ],
    ns: [
        "translation",
        "errors"
    ],
    defaultNS: "translation"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99648);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61664);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5848);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24941);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, i18n__WEBPACK_IMPORTED_MODULE_1__, utils_session__WEBPACK_IMPORTED_MODULE_3__, components_alert_toast__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, i18n__WEBPACK_IMPORTED_MODULE_1__, utils_session__WEBPACK_IMPORTED_MODULE_3__, components_alert_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
//@ts-nocheck





const request = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: constants_constants__WEBPACK_IMPORTED_MODULE_2__/* .API_URL */ .T5,
    timeout: 16000
});
request.interceptors.request.use((config)=>{
    const token = (0,utils_session__WEBPACK_IMPORTED_MODULE_3__/* .getCookieFromBrowser */ .zt)("access_token");
    const locale = i18n__WEBPACK_IMPORTED_MODULE_1__/* ["default"].language */ .Z.language;
    if (token) {
        config.headers.Authorization = token;
    }
    config.params = {
        lang: locale,
        ...config.params
    };
    return config;
}, (error)=>errorHandler(error));
function errorHandler(error) {
    if (error?.response) {
        if (error?.response?.status === 403) {} else if (error?.response?.status === 401) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_4__/* .error */ .vU)(i18n__WEBPACK_IMPORTED_MODULE_1__/* ["default"].t */ .Z.t("unauthorized"), {
                toastId: "unauthorized"
            });
            (0,utils_session__WEBPACK_IMPORTED_MODULE_3__/* .removeCookie */ .nJ)("user");
            (0,utils_session__WEBPACK_IMPORTED_MODULE_3__/* .removeCookie */ .nJ)("access_token");
            window.location.replace("/login");
        }
    }
    console.log("error => ", error);
    return Promise.reject(error.response);
}
request.interceptors.response.use((response)=>response.data, errorHandler);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "nJ": () => (/* binding */ removeCookie),
/* harmony export */   "zt": () => (/* binding */ getCookieFromBrowser)
/* harmony export */ });
/* unused harmony export getCookieFromServer */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69915);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7486);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const isBrowser = "undefined" !== "undefined";
const getCookieFromBrowser = (key)=>{
    return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(key);
};
const getCookieFromServer = (ctx, key = "id_token")=>{
    const cookie = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);
    const token = cookie && cookie[key] ? cookie[key] : false;
    if (!token) {
        return null;
    }
    return token;
};
const getCookie = (key, context)=>{
    return isBrowser ? getCookieFromBrowser(key) : getCookieFromServer(context, key);
};
const setCookie = (key, token)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(key, token, {
        expires: 7
    });
};
const removeCookie = (key)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(key);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87551:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"search.restaurants.products":"Search restaurants and products","search.products.in":"Search products in {{shop}}","delivery":"Delivery","delivery.address":"Delivery address","delivery.range":"{{times}} min","delivery.price":"Delivery price","delivery.time":"Delivery time","sorted.by":"Sorted by","filter":"Filter","recommended":"Recommended","news.week":"News of the week","all.restaurants":"All restaurants","number.of.foods":"{{count}} foods","popular":"Popular","foods":"Foods","orders":"Orders","liked":"Liked","order":"Order","your.orders":"Your orders","total":"Total","cart.empty":"Cart is empty","pickup":"Pickup","type.here":"Type here","payment":"Payment","payment.method":"Payment method","payment.status":"Payment status","promo.code":"Promo code","add":"Add","enter":"Enter","subtotal":"Subtotal","service.fee":"Service fee","continue.payment":"Continue payment","more":"More","working.time":"Working time","start.group.order":"Start group order","clear.bag":"Clear bag","save":"Save","add.promocode":"Add promo code","clear":"Clear","sign.up":"Sign up","login":"Login","app.text":"There\'s more to love in the app.","dont.have.account":"Don\'t have an account?","keep.logged":"Keep me logged in","forgot.password":"Forgot password","access.quickly":"or access quickly","have.account":"Already have an account?","reset.password":"Reset password","reset.password.text":"Please provide email address and we\'ll send you code which you can change your password.","send":"Send","enter.otp.code":"Enter OTP code","enter.code.text":"We are send OTP code to {{phone}}","send.new":"Send new","confirm":"Confirm","restaurant":"Restaurant","found.number.results":"Found {{count}} results","enter.delivery.address":"Enter delivery address","search":"Search","submit":"Submit","view.profile":"View profile","settings":"Settings","help":"Help","log.out":"Log out","profile":"Profile","date.of.birth":"Date of birth","update.password":"Update password","old.password":"Old password","password.confirmation":"Password confirmation","cancel":"Cancel","gender":"Gender","choose.here":"Choose here","male":"Male","female":"Female","notification":"Notification","push.notifications":"Push notifications","on":"On","off":"Off","send.news.email":"Send news email","discount.notifications":"Discount notifications","order.verify":"Order verify","back":"Back","active.orders":"Active orders","order.history":"Order history","new":"New","accepted":"Accepted","ready":"Ready","on_a_way":"On a way","delivered":"Delivered","cancelled":"Cancelled","driver":"Driver","support":"Support","repeat.order":"Repeat order","liked.restaurants":"Liked restaurants","have.questions":"Still have questions?","questions.text":"Can’t find the answer you’re looking or? Please chat to our friendly team.","call.support":"Call to support","group.order.text":"You fully manage the order and confirm the address. Team members can add a product from a location of your choice.","start":"Start","copied":"Copied to clipboard!","group.members":"Group members","choosing":"Choosing","clear.cart":"Are you sure to clear the cart?","rating":"Rating","special.offers":"Special offers","free.delivery":"Free delivery","show":"Show","all":"All","languages":"Languages","currency":"Currency","no":"No","yes":"Yes","order.for.address":"Order for this address?","replace.cart.prompt":"You can only add items from one restaurant to your shopping cart.","saved":"Saved","required":"Required","passwords.dont.match":"Passwords don\'t match","password.should.contain":"Password should contain at least 6 characters","shop.tax":"Shop tax","order.tax":"Order tax","vat.tax":"VAT tax","today":"Today","tomorrow":"Tomorrow","min":"min","edit":"Edit","order.details":"Order details","cancel.order":"Cancel order","under":"Under","bonus":"Bonus","are.you.sure.cancel.order":"Are you sure to cancel this order?","order.cancelled":"Order cancelled","wallet":"Wallet","choose.payment.method":"Please, choose payment method","refund":"Refund","leave.feedback":"Leave feedback","thanks.for.feedback":"Thank you for your feedback!","order.refund":"Order refund","why.refund":"Why do you want to refund?","request.sent":"Request sent successfully!","request.not.sent":"You request didn\'t send!","pending":"Pending","approved":"Approved","rejected":"Rejected","refunds":"Refunds","products":"Products","your.comment":"Your comment","answer":"Answer","order.id":"Order ID","go.to.order":"Go to order","price":"Price","closed":"Closed","done":"Done","manage.group.order":"Manage group order","manage.order":"Manage order","join.group.order":"Join group order","join.group.text":"You can only select products from the restaurant chosen by the creator of the group","join":"Join","leave.group":"Leave group","are.you.sure.leave.group":"Are you sure to leave group order?","edit.order":"Edit order","you.kicked.from.group":"You have been kicked from group order","group.order.permission":"Some group members haven\'t finished making order. Are you sure to continue?","see.all":"See all","all.shops":"All shops","shops":"Shops","catalog":"Catalog","ingredients":"Ingredients","transaction.id":"Transaction ID","wallet.history":"Wallet history","sender":"Sender","date":"Date","note":"Note","topup.wallet":"Topup wallet","your.order":"Your order","your.order.status.updated.text":"Your order status has been updated! Click \'Show\' to see order details.","help.center":"Help center","message":"Message","login.first":"Please, login first","add.to.bag":"Add to bag","be.seller":"Become seller","general":"General","logo.image":"Logo image","background.image":"Background image","delivery.info":"Delivery info","minute":"Minute","day":"Day","month":"Month","address":"Address","seller.request.under.review":"Your request to become seller is currently under review.","seller.request.accepted":"Your request to become seller is accepted.","start.price":"Start price","shop.closed":"Shop is closed","no.zone.title":"We don\'t deliver here yet :(","no.zone.text":"But we add dozens of new places every week. Maybe we\'ll be here soon! If you enter your email, we\'ll tell you as soon as we\'re available. We promise not to spam!","payment.type":"Payment type","verify":"Verify","verify.email":"Email verification","verify.text":"Please, enter the verification code we’ve sent you to","verify.didntRecieveCode":"Didn’t receive the code?","resend":"Send again","should.match":"Passwords should match","verify.send":"Verification code send successfully","email.inuse":"The email has already been taken.","verify.error":"Wrong verification code","about":"About","become.affiliate":"Become an Affiliate","careers":"Careers","blog":"Blog","get.helps":"Get helps","add.your.restaurant":"Add your restaurant","sign.up.to.deliver":"Sign up to deliver","privacy.policy":"Privacy Policy","terms":"Terms","tags":"Tags","near_you":"Near you","open_now":"Open now","copy.code":"Copy code","balance":"Balance","referrals":"Referrals","referral.title":"{{price_from}} for you, {{price_to}} for a friend","referral.text":"Friends can get up to {{price_to}} off — you’ll get {{price_from}} when they place their first order.","role":"Role","category":"Category","no.items":"No items","referral.terms":"Referral terms","login.or.create.account":"Login or create account","sign.in.be.seller":"Sign in to be seller","error.400":"Error occured. Please, try again later","deals":"Deals","more.info":"More info","ratings":"Ratings","open.until":"Open until","no.orders.found":"You don\'t have any orders yet","go.to.menu":"Go to menu","no.refunds.found":"You don\'t have any order refunds yet. You can create a refund request from delivered orders.","no.active.orders.found":"No active orders","no.wallet.found":"You don\'t have any wallet transactions yet","recent.searches":"Recent searches","no.liked.restaurants":"You don\'t have any liked restaurants yet","try.again":"Try again","unauthorized":"Unauthorized","you.cannot.join":"You cannot join. Invalid group order","delivery.zone.not.available":"Sorry, we’re not available here","leave.group.prompt":"You have joined in group order. In order to add product, leave group first!","hours.ago":"hours ago","become.delivery":"Become a delivery driver","become.delivery.text":"Instead of traditional food delivery jobs where the hours aren’t flexible, try being your own boss with Foodyman. Get paid to deliver on your schedule using the food delivery app most downloaded by customers.","discount":"Discount","only.opened":"Only opened","schedule":"Schedule","shop.closed.choose.other.day":"Shop is closed in this day. Please, select another day.","edit.schedule":"Edit schedule","pickup.address":"Pickup address","pickup.time":"Pickup time","branch":"Branch","branches":"Branches","branches.not.found":"Branches not found","out.of.stock":"Out of stock","hour":"Hour","h":"hour","no.restaurants":"Restaurants not found according to your request","no.shops":"Shops not found according to your request","sms.not.sent":"Sms not sent!","email.or.phone":"Email or phone","login.invalid":"Login or password is invalid","verify.phone":"Phone verification","recipes":"Recipes","recipes.title":"Recipes","recipes.description":"Choose your favorite food recipe and buy as you wish","no.recipes":"Recipes not found according to your request","total.time":"Total time","calories":"Calories","servings":"Servings","instructions":"Instructions","nutritions":"Nutritions","add.items.to.cart":"Add {{number}} items to cart","recipe.discount.condition":"If you buy all ingredients you can get discount by","go.to.recipe.order":"Ingredients added to cart successfully.","recipe.discount.definition":"You got recipe discount","insufficient.wallet.balance":"Insufficient wallet balance","go.to.admin.panel":"Go to admin panel","have.not.password":"You have not set password yet. Please, make sure you have a password in system before you create a request for become seller","email":"Email","edit.phone":"Edit phone","verified":"Verified","something.went.wrong":"Something went wrong","phone.required":"Phone number is required","no.careers.found":"Careers not found according to your request","welcome.title":"Get your favorite foods delivered","welcome.description":"Choose your address and start ordering","do.you.have.restaurant":"Do you have a restaurant?","deliver.title":"Looking for delivery driver jobs?","welcome.features.title":"Other options for you","start.ordering":"Start ordering","why.choose.us":"Why choose us","why.choose.us.first.title":"Choose what you want","why.choose.us.first.text":"Select items from your favorite stores at Foodyman","why.choose.us.second.title":"See real-time updates","why.choose.us.second.text":"Personal shoppers pick items with care","why.choose.us.third.title":"Get your items same-day","why.choose.us.third.text":"Enjoy Foodyman\'s 100% quality guarantee on every order","choose.recomended.address":"Choose recomended address","place.for.ad":"Place for your advertisement here","ok":"Ok","people.trust.us":"People trust us","delivery.was.successfull":"Delivery was successfull","view.our.insta":"View our Instagram","latest.blog":"Latest blog","ads":"Ads","faq":"Frequently asked questions","view.more":"View more","transactions":"Transactions","mark.read":"Mark all as read","notifications":"Notifications","no.notifications":"Notifications not found according to your request","news":"News","order.for.someone":"I want to order for someone","user.details.empty":"Please, fill user details","phone.invalid":"Phone number is invalid","door.to.door.delivery":"Door to door delivery","sender.details":"Sender details","parcel.details":"Parcel details","receiver.details":"Receiver details","home":"Home","stage":"Stage","room":"Room","active.parcels":"Active parcels","parcel.history":"Parcel history","receiver":"Receiver","parcel":"Parcel","parcel.cancelled":"Parcel cancelled","phone.number":"Phone number","type":"Type","parcels":"Parcels","sign.in.parcel.order":"Sign in to use door to door delivery","up.to.weight":"up to {{ number }} kg","up.to.length":"up to {{ number }} m","length":"Length","width":"Width","height":"Height","weight":"Weight","hero.title":"Explore Our Shops with fast delivery","offers":"Offers","view.all":"View all","number.of.offers":"{{number}} offers","door.to.door.delivery.service":"Your personal door-to-door delivery service","favorite.brands":"Favorite brands","popular.near.you":"Popular near you","daily.offers":"Daily offers","follow.us":"Follow us on Social Media","home.page":"Home page","all.stories":"All stories","categories":"Categories","trending":"Trending","delivery.free":"Delivery free","delivery.with.in":"Delivery with in","shop.banner.title":"Something hot. Something tasty.","shop.banner.desc":"Top ratings and consistently great service","order.now":"Order now"}');

/***/ })

};
;