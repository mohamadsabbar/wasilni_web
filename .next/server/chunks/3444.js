"use strict";
exports.id = 3444;
exports.ids = [3444];
exports.modules = {

/***/ 73444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useShopWorkingSchedule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_weekdays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85028);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);




function useShopWorkingSchedule(data) {
    const { order  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.order);
    const { workingSchedule , isShopClosed , isOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const isSelectedDeliveryDate = order.shop_id === data?.id && !!order.delivery_date;
        const today = isSelectedDeliveryDate ? order.delivery_date : dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYY-MM-DD");
        const weekDay = constants_weekdays__WEBPACK_IMPORTED_MODULE_3__/* .WEEK */ .p[isSelectedDeliveryDate ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(order.delivery_date).day() : dayjs__WEBPACK_IMPORTED_MODULE_1___default()().day()];
        const foundedSchedule = data?.shop_working_days?.find((item)=>item.day === weekDay);
        const isHoliday = data?.shop_closed_date?.some((item)=>dayjs__WEBPACK_IMPORTED_MODULE_1___default()(item.day).isSame(isSelectedDeliveryDate ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(order.delivery_date) : dayjs__WEBPACK_IMPORTED_MODULE_1___default()()));
        const isClosed = !data?.open || isHoliday;
        let schedule = {};
        let isTimePassed = false;
        try {
            if (foundedSchedule) {
                schedule = {
                    ...foundedSchedule
                };
                schedule.from = schedule.from.replace("-", ":");
                schedule.to = schedule.to.replace("-", ":");
                isTimePassed = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().isAfter(`${today} ${schedule.to}`);
            }
        } catch (err) {
            console.log("err => ", err);
        }
        return {
            workingSchedule: schedule,
            isShopClosed: schedule.disabled || isClosed || isTimePassed,
            isOpen: Boolean(data?.open)
        };
    }, [
        data,
        order.delivery_date,
        order.shop_id
    ]);
    return {
        workingSchedule,
        isShopClosed,
        isOpen
    };
}


/***/ })

};
;