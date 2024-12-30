exports.id = 5058;
exports.ids = [5058];
exports.modules = {

/***/ 88029:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "deliveryTimes_wrapper__l6KX_",
	"header": "deliveryTimes_header__Y5NUn",
	"title": "deliveryTimes_title__NOnZ2",
	"tabs": "deliveryTimes_tabs__jbI3F",
	"tab": "deliveryTimes_tab__BQcng",
	"disabled": "deliveryTimes_disabled__p6aRs",
	"text": "deliveryTimes_text__IE6bA",
	"subText": "deliveryTimes_subText__M_OqM",
	"active": "deliveryTimes_active__1crnt",
	"body": "deliveryTimes_body___8Kii",
	"row": "deliveryTimes_row__4AYPt",
	"label": "deliveryTimes_label__yQILx",
	"footer": "deliveryTimes_footer__NRLyh",
	"action": "deliveryTimes_action__LLPKM"
};


/***/ }),

/***/ 25058:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeliveryTimes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80865);
/* harmony import */ var _deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88029);
/* harmony import */ var _deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77262);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80892);
/* harmony import */ var constants_weekdays__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85028);
/* harmony import */ var utils_getTimeSlots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17662);
/* harmony import */ var utils_getWeekDay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95462);
/* harmony import */ var utils_checkIsDisabledDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59041);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3877);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_getWeekDay__WEBPACK_IMPORTED_MODULE_8__, swiper_react__WEBPACK_IMPORTED_MODULE_10__, swiper__WEBPACK_IMPORTED_MODULE_11__]);
([utils_getWeekDay__WEBPACK_IMPORTED_MODULE_8__, swiper_react__WEBPACK_IMPORTED_MODULE_10__, swiper__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function DeliveryTimes({ data , handleChangeDeliverySchedule , handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery)("(min-width:1140px)");
    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [dayIndex, setDayIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const renderTimes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        let today = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(dayIndex, "day");
        const isToday = today.isSame(dayjs__WEBPACK_IMPORTED_MODULE_5___default()());
        const weekDay = constants_weekdays__WEBPACK_IMPORTED_MODULE_13__/* .WEEK */ .p[today.day()];
        const workingSchedule = data?.shop_working_days?.find((item)=>item.day === weekDay);
        if (workingSchedule && !(0,utils_checkIsDisabledDay__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(dayIndex, data)) {
            const from = workingSchedule.from.replace("-", ":");
            const to = workingSchedule.to.replace("-", ":");
            const slots = (0,utils_getTimeSlots__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(from, to, isToday);
            setList(slots);
            setSelectedValue(null);
        } else {
            setList([]);
            setSelectedValue(null);
        }
    }, [
        dayIndex,
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        renderTimes();
    }, [
        data,
        renderTimes
    ]);
    const handleChange = (event)=>{
        setSelectedValue(event.target.value);
    };
    const controlProps = (item)=>({
            checked: selectedValue === item,
            onChange: handleChange,
            value: item,
            id: item,
            name: "delivery_time",
            inputProps: {
                "aria-label": item
            }
        });
    const clearValue = ()=>setSelectedValue(null);
    const submit = ()=>{
        if (!selectedValue) {
            return;
        }
        const time = renderDeliverySchedule(selectedValue);
        const date = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(dayIndex, "day").format("YYYY-MM-DD");
        handleChangeDeliverySchedule({
            time,
            date
        });
        handleClose();
    };
    function renderDay(index) {
        const day = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().add(index, "day");
        return {
            day,
            weekDay: (0,utils_getWeekDay__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(day)
        };
    }
    function renderDeliverySchedule(time) {
        let from = (0,utils_getTimeSlots__WEBPACK_IMPORTED_MODULE_7__/* .stringToMinutes */ .H1)(time);
        let to = parseInt(data?.delivery_time?.to || "0");
        if (data?.delivery_time?.type === "hour") {
            to = parseInt(data.delivery_time.to) * 60;
        }
        const deliveryTime = (0,utils_getTimeSlots__WEBPACK_IMPORTED_MODULE_7__/* .minutesToString */ .Ps)(from + to);
        return `${time} - ${deliveryTime}`;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().title),
                    children: t("time_schedule")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().tabs),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_10__.Swiper, {
                    spaceBetween: 16,
                    slidesPerView: "auto",
                    navigation: isDesktop,
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_11__.Navigation,
                        swiper__WEBPACK_IMPORTED_MODULE_11__.A11y
                    ],
                    className: "tab-swiper",
                    allowTouchMove: !isDesktop,
                    children: constants_weekdays__WEBPACK_IMPORTED_MODULE_13__/* .WEEK.map */ .p.map((day, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_10__.SwiperSlide, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: `${(_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().tab)} ${dayIndex === idx ? (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().active) : ""}`,
                                onClick: ()=>setDayIndex(idx),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().text),
                                        children: renderDay(idx).weekDay
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().subText),
                                        children: renderDay(idx).day.format("MMM DD")
                                    })
                                ]
                            })
                        }, day))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().body),
                children: [
                    list.map((item, index, array)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().row),
                            style: {
                                display: array[index + 1] ? "flex" : "none"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    ...controlProps(item)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().label),
                                    htmlFor: item,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().text),
                                        children: renderDeliverySchedule(item)
                                    })
                                })
                            ]
                        }, item)),
                    list.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: t("shop.closed.choose.other.day")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().footer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().action),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            onClick: submit,
                            children: t("save")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_deliveryTimes_module_scss__WEBPACK_IMPORTED_MODULE_14___default().action),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            onClick: clearValue,
                            children: t("clear")
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": () => (/* binding */ stringToMinutes),
/* harmony export */   "Ps": () => (/* binding */ minutesToString),
/* harmony export */   "ZP": () => (/* binding */ getTimeSlots)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
//@ts-nocheck

const stringToMinutes = (str)=>str.split(":").reduce((h, m)=>h * 60 + +m);
const minutesToString = (min)=>Math.floor(min / 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2
    }) + ":" + (min % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2
    });
function getTimeSlots(startStr, endStr, isToday, interval = 30) {
    let start = stringToMinutes(startStr);
    let end = stringToMinutes(endStr);
    let current = isToday ? stringToMinutes(dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(interval, "minute").format("HH:00")) : 0;
    if (current > end) {
        return [];
    }
    if (current > start) {
        start = current;
    }
    return Array.from({
        length: Math.floor((end - start) / interval) + 1
    }, (_, i)=>minutesToString(start + i * interval));
}


/***/ }),

/***/ 95462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getWeekDay)
/* harmony export */ });
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61664);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_0__]);
i18n__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getWeekDay(day) {
    const isToday = day.isSame(dayjs__WEBPACK_IMPORTED_MODULE_1___default()());
    const isTomorrow = day.isSame(dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(1, "day"));
    if (isToday) {
        return i18n__WEBPACK_IMPORTED_MODULE_0__/* ["default"].t */ .Z.t("today");
    } else if (isTomorrow) {
        return i18n__WEBPACK_IMPORTED_MODULE_0__/* ["default"].t */ .Z.t("tomorrow");
    } else {
        return day.format("dddd");
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;