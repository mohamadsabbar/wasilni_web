"use strict";
exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 48606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value);
        }, delay);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        value,
        delay
    ]);
    return debounceValue;
}


/***/ }),

/***/ 59041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ checkIsDisabledDay)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

function getSchedule(day, data) {
    return data?.shop_working_days?.find((item)=>item.day?.toLowerCase() === day.format("dddd").toLowerCase());
}
function checkIsDisabledDay(dayIndex, data) {
    const today = dayIndex === 0;
    const day = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(dayIndex, "day");
    const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    let isTimeAfter = false;
    const foundedSchedule = getSchedule(day, data);
    const isHoliday = data?.shop_closed_date?.some((item)=>dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item.day).isSame(day.format("YYYY-MM-DD")));
    if (today) {
        const closedTime = foundedSchedule?.to.replace("-", ":");
        isTimeAfter = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(`${date} ${closedTime}`));
    }
    const isDisabled = foundedSchedule?.disabled || isHoliday;
    return isDisabled || isTimeAfter;
}


/***/ }),

/***/ 66540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ roundedDeliveryTime)
/* harmony export */ });
function roundedDeliveryTime(date, minuteToAdd, roundBy = 5) {
    const deliveryTime = date.format("HH:mm");
    const minutes = Number(deliveryTime.split(":")[1]);
    const rounded = Math.ceil(minutes / roundBy) * roundBy;
    const leftMinutes = rounded - minutes + minuteToAdd;
    return date.add(leftMinutes, "minute").format("HH:mm");
}


/***/ })

};
;