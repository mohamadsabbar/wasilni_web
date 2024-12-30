exports.id = 2483;
exports.ids = [2483];
exports.modules = {

/***/ 30560:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "payToUnpaidOrders_wrapper__FpUXl"
};


/***/ }),

/***/ 2483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PayToUnpaidOrders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _payToUnpaidOrders_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30560);
/* harmony import */ var _payToUnpaidOrders_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_payToUnpaidOrders_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37490);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21697);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var services_payment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85943);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5848);
/* harmony import */ var components_paymentMethod_paymentMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84272);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_payment__WEBPACK_IMPORTED_MODULE_8__, components_alert_toast__WEBPACK_IMPORTED_MODULE_12__]);
([services_payment__WEBPACK_IMPORTED_MODULE_8__, components_alert_toast__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const DrawerContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/* import() */ 7107).then(__webpack_require__.bind(__webpack_require__, 68181)), {
    loadableGenerated: {
        modules: [
            "..\\components\\payToUnPaidOrders\\payToUnpaidOrders.tsx -> " + "containers/drawer/drawer"
        ]
    }
});
const MobileDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 30182)), {
    loadableGenerated: {
        modules: [
            "..\\components\\payToUnPaidOrders\\payToUnpaidOrders.tsx -> " + "containers/drawer/mobileDrawer"
        ]
    }
});
function PayToUnpaidOrders({ data  }) {
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)("(min-width:1140px)");
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();
    const [paymentMethodDrawer, handleOpenPaymentMethod, handleClosePaymentMethod] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_6__/* .useSettings */ .r)();
    const { data: payments  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)("payments", ()=>services_payment__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getAll */ .Z.getAll(), {
        enabled: constants_constants__WEBPACK_IMPORTED_MODULE_9__/* .UNPAID_STATUSES.includes */ .de.includes(data?.transaction?.status || "paid") && data?.transaction?.payment_system.tag !== "cash"
    });
    const { paymentTypes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        let defaultPaymentType;
        let paymentTypesList;
        if (settings?.payment_type === "admin") {
            defaultPaymentType = payments?.data.find((item)=>item.tag === "cash");
            paymentTypesList = payments?.data || [];
        } else {
            defaultPaymentType = data?.shop?.shop_payments?.find((item)=>item.payment.tag === "cash")?.payment;
            paymentTypesList = data?.shop?.shop_payments?.map((item)=>item.payment) || [];
        }
        return {
            paymentType: defaultPaymentType,
            paymentTypes: paymentTypesList
        };
    }, [
        settings,
        data,
        payments
    ]);
    const { isLoading: isLoadingTransaction , mutate: transactionCreate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({
        mutationFn: (data)=>services_payment__WEBPACK_IMPORTED_MODULE_8__/* ["default"].createTransaction */ .Z.createTransaction(data.id, data.payment),
        onSuccess: ()=>{
            queryClient.invalidateQueries([
                "profile"
            ], {
                exact: false
            });
            queryClient.invalidateQueries([
                "order",
                data?.id,
                i18n.language
            ]);
        },
        onError: (err)=>{
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_12__/* .error */ .vU)(err?.data?.message);
        },
        onSettled: ()=>{
            handleClosePaymentMethod();
        }
    });
    const { isLoading: externalPayLoading , mutate: externalPay  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({
        mutationFn: (payload)=>services_payment__WEBPACK_IMPORTED_MODULE_8__/* ["default"].payExternal */ .Z.payExternal(payload.name, payload.data),
        onSuccess: (data)=>{
            window.location.replace(data.data.data.url);
        },
        onError: (err)=>{
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_12__/* .error */ .vU)(err?.data?.message);
        }
    });
    const payAgain = (tag)=>{
        const payment = paymentTypes.find((paymentType)=>paymentType.tag === tag);
        const payload = {
            id: data?.id,
            payment: {
                payment_sys_id: payment?.id
            }
        };
        if (constants_constants__WEBPACK_IMPORTED_MODULE_9__/* .EXTERNAL_PAYMENTS.includes */ .DH.includes(tag)) {
            externalPay({
                name: tag,
                data: {
                    order_id: payload.id
                }
            });
        }
        if (tag === "alipay") {
            window.location.replace(`${constants_constants__WEBPACK_IMPORTED_MODULE_9__/* .BASE_URL */ ._n}/api/alipay-prepay?order_id=${payload.id}`);
        }
        transactionCreate(payload);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_payToUnpaidOrders_module_scss__WEBPACK_IMPORTED_MODULE_13___default().payButton),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    onClick: handleOpenPaymentMethod,
                    type: "button",
                    children: t("pay")
                })
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerContainer, {
                open: paymentMethodDrawer,
                onClose: handleClosePaymentMethod,
                title: t("payment.method"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_paymentMethod_paymentMethod__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    value: data?.transaction?.payment_system.tag,
                    list: paymentTypes,
                    handleClose: handleClosePaymentMethod,
                    isButtonLoading: isLoadingTransaction || externalPayLoading,
                    onSubmit: (tag)=>{
                        if (tag) {
                            payAgain(tag);
                        }
                    }
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDrawer, {
                open: paymentMethodDrawer,
                onClose: handleClosePaymentMethod,
                title: t("payment.method"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_paymentMethod_paymentMethod__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    value: data?.transaction?.payment_system.tag,
                    list: paymentTypes,
                    handleClose: handleClosePaymentMethod,
                    onSubmit: (tag)=>{
                        if (tag) {
                            payAgain(tag);
                        }
                    }
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;