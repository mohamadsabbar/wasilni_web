exports.id = 385;
exports.ids = [385,6060];
exports.modules = {

/***/ 90852:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "deliveryTimePopover_wrapper__UA_Dp",
	"link": "deliveryTimePopover_link__j85Up",
	"text": "deliveryTimePopover_text__37drB"
};


/***/ }),

/***/ 60385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeliveryTimePopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_popover_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56060);
/* harmony import */ var _deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90852);
/* harmony import */ var _deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_roundedDeliveryTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66540);
/* harmony import */ var utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4943);









function DeliveryTimePopover({ weekDay , time , handleOpenDrawer , formik , timeType , ...rest }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const handleClose = (event)=>{
        event.preventDefault();
        if (rest.onClose) rest.onClose({}, "backdropClick");
    };
    const handleSelectStandartTime = (event)=>{
        const estimatedDeliveryDuration = Number(time);
        const type = timeType;
        const standardTime = (0,utils_roundedDeliveryTime__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(estimatedDeliveryDuration, type), estimatedDeliveryDuration);
        const standardDate = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format("YYYY-MM-DD");
        formik?.setFieldValue("delivery_date", standardDate);
        formik?.setFieldValue("delivery_time", standardTime);
        handleClose(event);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_popover_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ...rest,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/",
                    className: (_deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),
                    onClick: handleSelectStandartTime,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                        children: [
                            t("today"),
                            " — ",
                            time,
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t((0,utils_getShortTimeType__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(timeType))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/",
                    className: (_deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),
                    onClick: (event)=>{
                        handleClose(event);
                        handleOpenDrawer();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_deliveryTimePopover_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text),
                        children: t("schedule")
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 56060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopoverContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);




const Wrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Popover)(()=>({
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        "& .MuiPaper-root": {
            backgroundColor: "var(--secondary-bg)",
            boxShadow: "var(--popover-box-shadow)",
            borderRadius: "10px",
            maxWidth: "100%"
        }
    }));
function PopoverContainer({ children , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 4943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getShortTimeType)
/* harmony export */ });
function getShortTimeType(type) {
    switch(type){
        case "minute":
            return "min";
        case "hour":
            return "h";
        default:
            return "min";
    }
}


/***/ })

};
;