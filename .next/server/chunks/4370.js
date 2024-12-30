exports.id = 4370;
exports.ids = [4370,9974,7935,5998,6603,9379,8853,9409,5398,333,9802,8988,9776,1636,5244,6912,1879];
exports.modules = {

/***/ 48909:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "fallbackImage_root__7qEqB"
};


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

/***/ 37935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



function Loader({ size  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            textAlign: "center",
            padding: "10px 0"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
            size: size
        })
    });
}


/***/ }),

/***/ 85028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ WEEK)
/* harmony export */ });
const WEEK = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];


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

/***/ 18074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);

function useLocale() {
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
    const locale = i18n.language;
    const addResourceBundle = i18n.addResourceBundle;
    const changeLanguage = i18n.changeLanguage;
    return {
        t,
        locale,
        addResourceBundle,
        changeLanguage
    };
}


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

/***/ 58287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePopover() {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event)=>setAnchorEl(event?.currentTarget);
    const handleClose = ()=>setAnchorEl(null);
    return [
        open,
        anchorEl,
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

/***/ 2950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useUserLocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21697);


function useUserLocation() {
    const { location: userLocation  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_1__/* .useSettings */ .r)();
    const location = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const latlng = userLocation;
        if (!latlng) {
            return undefined;
        }
        return {
            latitude: latlng.split(",")[0],
            longitude: latlng.split(",")[1]
        };
    }, [
        userLocation
    ]);
    return location;
}


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

/***/ 77322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const bookingService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/bookings`, {
            params
        }),
    disabledDates: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/disable-dates/table/${id}`, {
            params
        }),
    create: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/dashboard/user/my-bookings`, data),
    getTables: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/tables`, {
            params
        }),
    getZones: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/shop-sections`, {
            params
        }),
    getZoneById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/shop-sections/${id}`, {
            params
        }),
    getBookingSchedule: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/booking/shops/${id}`, {
            params
        }),
    getBookingHistory: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/dashboard/user/my-bookings`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookingService);

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


/***/ })

};
;