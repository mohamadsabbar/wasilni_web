"use strict";
(() => {
var exports = {};
exports.id = 6859;
exports.ids = [6859];
exports.modules = {

/***/ 59076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParcelInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68577);
/* harmony import */ var _orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var remixicon_react_PhoneFillIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64499);
/* harmony import */ var remixicon_react_PhoneFillIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_PhoneFillIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_react_Chat1FillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98710);
/* harmony import */ var remixicon_react_Chat1FillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Chat1FillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80892);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37490);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74621);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_chat_chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2434);
/* harmony import */ var components_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11295);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18074);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90026);
/* harmony import */ var services_parcel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_alert_toast__WEBPACK_IMPORTED_MODULE_9__, components_chat_chat__WEBPACK_IMPORTED_MODULE_11__, services_parcel__WEBPACK_IMPORTED_MODULE_15__]);
([components_alert_toast__WEBPACK_IMPORTED_MODULE_9__, components_chat_chat__WEBPACK_IMPORTED_MODULE_11__, services_parcel__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const ConfirmationModal = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 6041).then(__webpack_require__.bind(__webpack_require__, 36041)), {
    loadableGenerated: {
        modules: [
            "..\\components\\orderInfo\\parcelInfo.tsx -> " + "components/confirmationModal/confirmationModal"
        ]
    }
});
const DrawerContainer = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 7107).then(__webpack_require__.bind(__webpack_require__, 68181)), {
    loadableGenerated: {
        modules: [
            "..\\components\\orderInfo\\parcelInfo.tsx -> " + "containers/drawer/drawer"
        ]
    }
});
function ParcelInfo({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const [openModal, handleOpen, handleClose] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [openChat, handleOpenChat, handleCloseChat] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { mutate: orderCancel , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
        mutationFn: ()=>services_parcel__WEBPACK_IMPORTED_MODULE_15__/* ["default"].cancel */ .Z.cancel(data?.id || 0),
        onSuccess: ()=>{
            handleClose();
            push("/parcels");
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_9__/* .success */ .Vp)(t("parcel.cancelled"));
        },
        onError: (err)=>(0,components_alert_toast__WEBPACK_IMPORTED_MODULE_9__/* .error */ .vU)(err?.statusCode)
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().header),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title),
                            children: t("parcel")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().subtitle),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                                    children: [
                                        "#",
                                        data?.id
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().dot)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                                    children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(data?.created_at).format("MMM DD, HH:mm")
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().address),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("delivery.address")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                        children: data?.address_to?.address
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("delivery.time")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                        children: [
                            dayjs__WEBPACK_IMPORTED_MODULE_5___default()(data?.delivery_date).format("ddd, MMM DD,"),
                            " ",
                            data?.delivery_time
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("payment.type")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                        style: {
                            textTransform: "capitalize"
                        },
                        children: t(data?.transaction?.payment_system.tag)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("payment.status")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                        style: {
                            textTransform: "capitalize"
                        },
                        children: t(data?.transaction?.status)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().body),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().flex),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: t("total")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().totalPrice),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                number: data?.total_price,
                                symbol: data?.currency?.symbol
                            })
                        })
                    ]
                })
            }),
            data?.deliveryman ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().courierBlock),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().courier),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().avatar),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().imgWrapper),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_avatar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        data: data.deliveryman
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().naming),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().name),
                                        children: [
                                            data.deliveryman.firstname,
                                            " ",
                                            data.deliveryman.lastname?.charAt(0),
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().text),
                                        children: t("driver")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().actions),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `tel:${data.deliveryman.phone}`,
                                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().iconBtn),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_PhoneFillIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().iconBtn),
                                onClick: handleOpenChat,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Chat1FillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
                            })
                        ]
                    })
                ]
            }) : "",
            data?.status === "new" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_orderInfo_module_scss__WEBPACK_IMPORTED_MODULE_16___default().footer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    type: "button",
                    onClick: handleOpen,
                    children: t("cancel.order")
                })
            }) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmationModal, {
                open: openModal,
                handleClose: handleClose,
                onSubmit: orderCancel,
                loading: isLoading,
                title: t("are.you.sure.cancel.order")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerContainer, {
                open: openChat,
                onClose: handleCloseChat,
                PaperProps: {
                    style: {
                        padding: 0
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_chat_chat__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParcelDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35686);
/* harmony import */ var _orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37562);





function ParcelDetails({ data  }) {
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                    children: t("parcel.details")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),
                children: [
                    !!data?.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().flex),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                src: data?.img,
                                alt: data?.img
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("type")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: data?.type?.type
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("receiver")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: data?.username_to
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("phone.number")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: data?.phone_to
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: t("note")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: (_orderProducts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                        style: {
                            textTransform: "capitalize"
                        },
                        children: data?.note
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 51565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParcelContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _orderContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14782);
/* harmony import */ var _orderContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_orderContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_orderInfo_parcelInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59076);
/* harmony import */ var components_orderProducts_parcelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_orderInfo_parcelInfo__WEBPACK_IMPORTED_MODULE_3__]);
components_orderInfo_parcelInfo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ParcelContainer({ data , loading  }) {
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(min-width:1140px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_orderContainer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().root),
        children: !loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: isDesktop ? 4 : 1.5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    md: 7,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_orderProducts_parcelDetails__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        data: data
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 12,
                    md: 5,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_orderInfo_parcelInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: data
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ParcelHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/orderHeader/orderHeader.module.scss
var orderHeader_module = __webpack_require__(64594);
var orderHeader_module_default = /*#__PURE__*/__webpack_require__.n(orderHeader_module);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: external "remixicon-react/CheckDoubleFillIcon"
var CheckDoubleFillIcon_ = __webpack_require__(80132);
var CheckDoubleFillIcon_default = /*#__PURE__*/__webpack_require__.n(CheckDoubleFillIcon_);
;// CONCATENATED MODULE: external "remixicon-react/SurveyFillIcon"
const SurveyFillIcon_namespaceObject = require("remixicon-react/SurveyFillIcon");
var SurveyFillIcon_default = /*#__PURE__*/__webpack_require__.n(SurveyFillIcon_namespaceObject);
;// CONCATENATED MODULE: external "remixicon-react/TruckFillIcon"
const TruckFillIcon_namespaceObject = require("remixicon-react/TruckFillIcon");
var TruckFillIcon_default = /*#__PURE__*/__webpack_require__.n(TruckFillIcon_namespaceObject);
// EXTERNAL MODULE: external "remixicon-react/FlagFillIcon"
var FlagFillIcon_ = __webpack_require__(29615);
var FlagFillIcon_default = /*#__PURE__*/__webpack_require__.n(FlagFillIcon_);
;// CONCATENATED MODULE: ./components/stepperComponent/parcelStepper.tsx








const ColorlibConnector = (0,styles_.styled)(material_.StepConnector)(({ theme  })=>({
        [`&.${material_.stepConnectorClasses.alternativeLabel}`]: {
            top: 31,
            "@media (max-width: 576px)": {
                top: 20
            }
        },
        [`&.${material_.stepConnectorClasses.active}`]: {
            [`& .${material_.stepConnectorClasses.line}`]: {
                backgroundColor: "#83EA00"
            }
        },
        [`&.${material_.stepConnectorClasses.completed}`]: {
            [`& .${material_.stepConnectorClasses.line}`]: {
                backgroundColor: "#83EA00"
            }
        },
        [`& .${material_.stepConnectorClasses.line}`]: {
            height: 8,
            border: 0,
            backgroundColor: "var(--secondary-bg)",
            borderRadius: 1,
            "@media (max-width: 576px)": {
                height: 5
            }
        }
    }));
const ColorlibStepIconRoot = (0,styles_.styled)("div")(({ theme , ownerState  })=>({
        backgroundColor: "var(--secondary-bg)",
        zIndex: 1,
        color: "#fff",
        width: 70,
        height: 70,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 576px)": {
            width: 44,
            height: 44
        },
        "& svg": {
            width: 28,
            height: 28,
            fill: "#898989",
            "@media (max-width: 576px)": {
                width: 17,
                height: 17
            }
        },
        ...ownerState.active && {
            backgroundColor: "#83EA00",
            "& svg": {
                fill: "#232B2F"
            }
        },
        ...ownerState.completed && {
            backgroundColor: "#83EA00",
            "& svg": {
                fill: "#232B2F"
            }
        }
    }));
function ColorlibStepIcon(props) {
    const { active , completed , className  } = props;
    const icons = {
        1: /*#__PURE__*/ jsx_runtime_.jsx((SurveyFillIcon_default()), {}),
        2: /*#__PURE__*/ jsx_runtime_.jsx((CheckDoubleFillIcon_default()), {}),
        3: /*#__PURE__*/ jsx_runtime_.jsx((TruckFillIcon_default()), {}),
        4: /*#__PURE__*/ jsx_runtime_.jsx((FlagFillIcon_default()), {})
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ColorlibStepIconRoot, {
        ownerState: {
            completed,
            active
        },
        className: className,
        children: icons[String(props.icon)]
    });
}
const steps = [
    "accepted",
    "ready",
    "on_a_way",
    "delivered"
];
const renderActiveStep = (status)=>{
    switch(status){
        case "accepted":
            return 0;
        case "ready":
            return 1;
        case "on_a_way":
            return 2;
        case "delivered":
            return 3;
        default:
            return -1;
    }
};
function ParcelStepperComponent({ status  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Stepper, {
        alternativeLabel: true,
        activeStep: renderActiveStep(status),
        connector: /*#__PURE__*/ jsx_runtime_.jsx(ColorlibConnector, {}),
        children: steps.map((label)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Step, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.StepLabel, {
                    StepIconComponent: ColorlibStepIcon
                })
            }, label))
    });
}

;// CONCATENATED MODULE: ./containers/orderHeader/parcelHeader.tsx







function ParcelHeader({ data , loading =false  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (orderHeader_module_default()).root,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (orderHeader_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (orderHeader_module_default()).shopInfo,
                        children: !loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (orderHeader_module_default()).naming,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (orderHeader_module_default()).title,
                                    children: data?.username_from
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (orderHeader_module_default()).text,
                                    children: data?.address_from?.address
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (orderHeader_module_default()).naming,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                    variant: "text",
                                    className: (orderHeader_module_default()).shimmerTitle
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                    variant: "text",
                                    className: (orderHeader_module_default()).shimmerDesc
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (orderHeader_module_default()).statusWrapper,
                        children: !loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (orderHeader_module_default()).status,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: t(data?.status)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (orderHeader_module_default()).time,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (orderHeader_module_default()).text,
                                                children: external_dayjs_default()(data?.updated_at).format("HH:mm")
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ParcelStepperComponent, {
                                    status: data?.status || ""
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                            variant: "rectangular",
                            className: (orderHeader_module_default()).shimmer
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 86607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParcelSingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_orderMap_orderMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55642);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4387);
/* harmony import */ var services_parcel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47763);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18074);
/* harmony import */ var containers_orderHeader_parcelHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92680);
/* harmony import */ var containers_orderContainer_parcelContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51565);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37490);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_orderMap_orderMap__WEBPACK_IMPORTED_MODULE_3__, services_parcel__WEBPACK_IMPORTED_MODULE_8__, containers_orderContainer_parcelContainer__WEBPACK_IMPORTED_MODULE_11__]);
([containers_orderMap_orderMap__WEBPACK_IMPORTED_MODULE_3__, services_parcel__WEBPACK_IMPORTED_MODULE_8__, containers_orderContainer_parcelContainer__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ParcelReview = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(()=>__webpack_require__.e(/* import() */ 6572).then(__webpack_require__.bind(__webpack_require__, 56572)), {
    loadableGenerated: {
        modules: [
            "parcels\\[id].tsx -> " + "containers/parcelReviewContainer/parcelReviewContainer"
        ]
    }
});
function ParcelSingle({}) {
    const { locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const parcelId = Number(query.id);
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const [openModal, handleOpen, handleClose] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const { data , isLoading , refetch  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "parcel",
        parcelId,
        locale
    ], ()=>services_parcel__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getById */ .Z.getById(parcelId), {
        refetchOnWindowFocus: true,
        staleTime: 0,
        onSuccess: (data)=>{
            if (!data.data.review && data.data.status === "delivered") {
                handleOpen();
            }
            if (data.data.deliveryman) {
                dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_7__/* .setRoleId */ .nd)(data.data.deliveryman.id));
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_7__/* .setRoleId */ .nd)("admin"));
        };
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_orderHeader_parcelHeader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                data: data?.data,
                loading: isLoading
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_orderMap_orderMap__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: {
                            location: data?.data.address_from,
                            shop: {
                                id: 0,
                                logo_img: "/images/finish.png",
                                location: data?.data.address_to,
                                translation: {
                                    title: "Finish",
                                    locale: "en",
                                    description: ""
                                },
                                price: 0,
                                open: true
                            }
                        },
                        readonly: true,
                        loading: isLoading
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_orderContainer_parcelContainer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: data?.data,
                        loading: isLoading
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ParcelReview, {
                open: openModal,
                onClose: handleClose,
                refetch: refetch
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1380:
/***/ ((module) => {

module.exports = require("@chatscope/chat-ui-kit-react");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 58557:
/***/ ((module) => {

module.exports = require("google-map-react");

/***/ }),

/***/ 7486:
/***/ ((module) => {

module.exports = require("next-cookies");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 69709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 61175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 98710:
/***/ ((module) => {

module.exports = require("remixicon-react/Chat1FillIcon");

/***/ }),

/***/ 80132:
/***/ ((module) => {

module.exports = require("remixicon-react/CheckDoubleFillIcon");

/***/ }),

/***/ 991:
/***/ ((module) => {

module.exports = require("remixicon-react/CheckDoubleLineIcon");

/***/ }),

/***/ 4634:
/***/ ((module) => {

module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 29615:
/***/ ((module) => {

module.exports = require("remixicon-react/FlagFillIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 64499:
/***/ ((module) => {

module.exports = require("remixicon-react/PhoneFillIcon");

/***/ }),

/***/ 36487:
/***/ ((module) => {

module.exports = require("remixicon-react/StarSmileFillIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 23745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 60401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 63392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,5728,4169,7262,26,7567,5122,1929,256,251,182,5215,5567,6461,7850,849,2434,9850,5642,2616], () => (__webpack_exec__(86607)));
module.exports = __webpack_exports__;

})();