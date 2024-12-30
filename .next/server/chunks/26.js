"use strict";
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 90026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Price)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./hooks/useRedux.tsx
var useRedux = __webpack_require__(34349);
// EXTERNAL MODULE: ./redux/slices/currency.ts
var slices_currency = __webpack_require__(64698);
;// CONCATENATED MODULE: ./utils/numberToPrice.ts
const numberToPrice = (number, digits = 2)=>{
    if (number) {
        return number.toFixed(digits).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
    return "0";
};

;// CONCATENATED MODULE: ./components/price/price.tsx





function Price({ number =0 , minus , symbol , plus , digits , old  }) {
    const currency = (0,useRedux/* useAppSelector */.C)(slices_currency/* selectCurrency */.j);
    const position = currency?.position || "before";
    const currencySymbol = symbol || currency?.symbol || "$";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: `${minus ? "red" : ""} ${old ? "strike" : ""}`,
        children: [
            minus ? "-" : "",
            plus ? "+" : "",
            position === "before" ? currencySymbol : "",
            numberToPrice(number, digits),
            position === "after" ? currencySymbol : ""
        ]
    });
}


/***/ })

};
;