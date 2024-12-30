exports.id = 2073;
exports.ids = [2073];
exports.modules = {

/***/ 4575:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "verifyCodeForm_wrapper__Z9QBu",
	"header": "verifyCodeForm_header__sqlDd",
	"title": "verifyCodeForm_title__yabuR",
	"text": "verifyCodeForm_text__80mtv",
	"resend": "verifyCodeForm_resend__Zssve",
	"space": "verifyCodeForm_space__LCdBt",
	"flex": "verifyCodeForm_flex__h7L50",
	"item": "verifyCodeForm_item__gF3mL",
	"label": "verifyCodeForm_label__3zp2t",
	"actions": "verifyCodeForm_actions__vqqMj",
	"otpContainer": "verifyCodeForm_otpContainer__AqqUn"
};


/***/ }),

/***/ 6952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OtpCodeInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_2__);



function OtpCodeInput(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        inputStyle: {
            width: 83,
            height: 83
        }
    });
}


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


/***/ })

};
;