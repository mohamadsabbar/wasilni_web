exports.id = 6509;
exports.ids = [6509];
exports.modules = {

/***/ 86261:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "errorBoundary_wrapper__kMewT",
	"header": "errorBoundary_header__SoKQ1",
	"body": "errorBoundary_body__rzFfH"
};


/***/ }),

/***/ 15924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errorBoundary_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86261);
/* harmony import */ var _errorBoundary_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_errorBoundary_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6684);
/* harmony import */ var components_button_darkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94660);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.log({
            error,
            errorInfo
        });
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_errorBoundary_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_errorBoundary_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/",
                            style: {
                                display: "block"
                            },
                            onClick: ()=>this.setState({
                                    hasError: false
                                }),
                            children: this.props.isDarkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_2__/* .BrandLogoDark */ .$C, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_2__/* .BrandLogo */ .Oc, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_errorBoundary_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Oops, something went wrong!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                type: "button",
                                onClick: ()=>this.setState({
                                        hasError: false
                                    }),
                                children: "Try again"
                            })
                        ]
                    })
                ]
            });
        }
        return this.props.children;
    }
}


/***/ }),

/***/ 44190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21697);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */ 



const uiTypes = {
    "1": next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 7662).then(__webpack_require__.bind(__webpack_require__, 57662)), {
        loadableGenerated: {
            modules: [
                "..\\containers\\layout\\footer\\footer.tsx -> " + "containers/layout/footer/v1"
            ]
        }
    }),
    "2": next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 9550).then(__webpack_require__.bind(__webpack_require__, 99550)), {
        loadableGenerated: {
            modules: [
                "..\\containers\\layout\\footer\\footer.tsx -> " + "containers/layout/footer/v2"
            ]
        }
    }),
    "3": next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 9550).then(__webpack_require__.bind(__webpack_require__, 99550)), {
        loadableGenerated: {
            modules: [
                "..\\containers\\layout\\footer\\footer.tsx -> " + "containers/layout/footer/v2"
            ]
        }
    }),
    "4": next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 9550).then(__webpack_require__.bind(__webpack_require__, 99550)), {
        loadableGenerated: {
            modules: [
                "..\\containers\\layout\\footer\\footer.tsx -> " + "containers/layout/footer/v2"
            ]
        }
    })
};
function Footer({}) {
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_2__/* .useSettings */ .r)();
    const Ui = uiTypes[settings?.ui_type];
    const FooterV1 = uiTypes["1"];
    return !!Ui ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Ui, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterV1, {});
}


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