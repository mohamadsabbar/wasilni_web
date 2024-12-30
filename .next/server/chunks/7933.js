exports.id = 7933;
exports.ids = [7933,8266];
exports.modules = {

/***/ 33428:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "walletActionButtons_root__h_xZz",
	"text": "walletActionButtons_text__6pLIM",
	"bold": "walletActionButtons_bold__lTB0c",
	"btn": "walletActionButtons_btn__Y61sL"
};


/***/ }),

/***/ 89580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletActionButtons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33428);
/* harmony import */ var _walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90026);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29969);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remixicon_react_AddCircleLineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4438);
/* harmony import */ var remixicon_react_AddCircleLineIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_AddCircleLineIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remixicon_react_SendPlaneFillIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18762);
/* harmony import */ var remixicon_react_SendPlaneFillIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_SendPlaneFillIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37490);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_10__);












const ModalContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>__webpack_require__.e(/* import() */ 7567).then(__webpack_require__.bind(__webpack_require__, 47567)), {
    loadableGenerated: {
        modules: [
            "..\\components\\walletActionButtons\\walletActionButtons.tsx -> " + "containers/modal/modal"
        ]
    }
});
const MobileDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>__webpack_require__.e(/* import() */ 182).then(__webpack_require__.bind(__webpack_require__, 30182)), {
    loadableGenerated: {
        modules: [
            "..\\components\\walletActionButtons\\walletActionButtons.tsx -> " + "containers/drawer/mobileDrawer"
        ]
    }
});
const WalletTopup = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(251), __webpack_require__.e(865), __webpack_require__.e(5701)]).then(__webpack_require__.bind(__webpack_require__, 5701)), {
    loadableGenerated: {
        modules: [
            "..\\components\\walletActionButtons\\walletActionButtons.tsx -> " + "components/walletTopup/walletTopup"
        ]
    }
});
const SendWalletMoney = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7262), __webpack_require__.e(251), __webpack_require__.e(865), __webpack_require__.e(1663)]).then(__webpack_require__.bind(__webpack_require__, 61663)), {
    loadableGenerated: {
        modules: [
            "..\\components\\walletActionButtons\\walletActionButtons.tsx -> " + "components/sendWalletMoney/sendWalletMoney"
        ]
    }
});
function WalletActionButtons() {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_10__.useQueryClient)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { user , refetchUser  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)("(min-width:1140px)");
    const [topUpOpen, handleTopUpOpen, handleTopUpClose] = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [sendMoneyOpen, handleSendMoneyOpen, handleSendMoneyClose] = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const handleActionSuccess = ()=>{
        queryClient.invalidateQueries([
            "walletHistory"
        ], {
            exact: false
        });
        refetchUser();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11___default().root),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btn),
                        onClick: handleSendMoneyOpen,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_SendPlaneFillIcon__WEBPACK_IMPORTED_MODULE_6___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btn),
                        onClick: handleTopUpOpen,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_AddCircleLineIcon__WEBPACK_IMPORTED_MODULE_5___default()), {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bold),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_walletActionButtons_module_scss__WEBPACK_IMPORTED_MODULE_11___default().text),
                                children: [
                                    t("wallet"),
                                    ": "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                number: user?.wallet?.price
                            })
                        ]
                    })
                ]
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContainer, {
                open: topUpOpen,
                onClose: handleTopUpClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletTopup, {
                    handleClose: handleTopUpClose
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDrawer, {
                open: topUpOpen,
                onClose: handleTopUpClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletTopup, {
                    handleClose: handleTopUpClose
                })
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContainer, {
                open: sendMoneyOpen,
                onClose: handleSendMoneyClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SendWalletMoney, {
                    onActionSuccess: handleActionSuccess,
                    handleClose: handleSendMoneyClose
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDrawer, {
                open: sendMoneyOpen,
                onClose: handleSendMoneyClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SendWalletMoney, {
                    onActionSuccess: handleActionSuccess,
                    handleClose: handleSendMoneyClose
                })
            })
        ]
    });
}


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


/***/ })

};
;