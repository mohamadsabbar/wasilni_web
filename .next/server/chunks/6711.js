exports.id = 6711;
exports.ids = [6711];
exports.modules = {

/***/ 79680:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "addressModal_wrapper__wd8fr",
	"header": "addressModal_header__NR1NL",
	"title": "addressModal_title__cgd_V",
	"flex": "addressModal_flex__r_MIU",
	"search": "addressModal_search__gcs6f",
	"btnWrapper": "addressModal_btnWrapper__xIPVy",
	"body": "addressModal_body__VAc7I",
	"form": "addressModal_form__lEtUl",
	"footer": "addressModal_footer__VwwZM",
	"circleBtn": "addressModal_circleBtn__Gf8_7",
	"request": "addressModal_request__KdXvo",
	"requestWrapper": "addressModal_requestWrapper__bxgG7",
	"addressButton": "addressModal_addressButton__oTMD5",
	"location": "addressModal_location__nknyf",
	"addressTitle": "addressModal_addressTitle__x7P0a",
	"address": "addressModal_address__AF16M",
	"addressList": "addressModal_addressList__Evyu6",
	"buttonActive": "addressModal_buttonActive__gNbbM"
};


/***/ }),

/***/ 26711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddressModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47567);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(79680);
/* harmony import */ var _addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78428);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_button_darkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94660);
/* harmony import */ var components_map_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25567);
/* harmony import */ var remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(625);
/* harmony import */ var remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21697);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30251);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var remixicon_react_CompassDiscoverLineIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5948);
/* harmony import */ var remixicon_react_CompassDiscoverLineIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_CompassDiscoverLineIcon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60291);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1612);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29969);
/* harmony import */ var services_address__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82027);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74621);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(80892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_map_map__WEBPACK_IMPORTED_MODULE_7__, utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_13__, services_shop__WEBPACK_IMPORTED_MODULE_14__, services_address__WEBPACK_IMPORTED_MODULE_17__, components_alert_toast__WEBPACK_IMPORTED_MODULE_18__]);
([components_map_map__WEBPACK_IMPORTED_MODULE_7__, utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_13__, services_shop__WEBPACK_IMPORTED_MODULE_14__, services_address__WEBPACK_IMPORTED_MODULE_17__, components_alert_toast__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















function AddressModal({ address , latlng , editedAddress , onClearAddress , ...rest }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { user  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_16__/* .useAuth */ .a)();
    const { updateAddress , updateLocation , location_id , updateLocationId  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_9__/* .useSettings */ .r)();
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        lat: Number(latlng.split(",")[0]),
        lng: Number(latlng.split(",")[1])
    });
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { isSuccess  } = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useQuery)([
        "shopZones",
        location
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_14__/* ["default"].checkZone */ .Z.checkZone({
            address: {
                latitude: location.lat,
                longitude: location.lng
            }
        }));
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useQueryClient)();
    const { mutate: createAddress , isLoading: createLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useMutation)({
        mutationFn: (data)=>services_address__WEBPACK_IMPORTED_MODULE_17__/* ["default"].create */ .Z.create(data)
    });
    const { mutate: updateUserAddress , isLoading: updateLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useMutation)({
        mutationFn: (data)=>services_address__WEBPACK_IMPORTED_MODULE_17__/* ["default"].update */ .Z.update(editedAddress?.id || 0, data)
    });
    const { mutate: deleteAddress , isLoading: isDeleting  } = (0,react_query__WEBPACK_IMPORTED_MODULE_15__.useMutation)({
        mutationFn: (id)=>services_address__WEBPACK_IMPORTED_MODULE_17__/* ["default"]["delete"] */ .Z["delete"](id),
        onMutate: async (id)=>{
            await queryClient.cancelQueries("addresses");
            const prevAddresses = queryClient.getQueryData("addresses");
            queryClient.setQueryData("addresses", (old)=>{
                if (!old) return prevAddresses;
                return old.flatMap((addressList)=>addressList).filter((oldAddress)=>oldAddress.id !== id);
            });
            return {
                prevAddresses
            };
        },
        onError: (error, vars, context)=>{
            queryClient.setQueryData("addresses", context?.prevAddresses);
        },
        onSettled: ()=>{
            if (rest.onClose) rest.onClose({}, "backdropClick");
        }
    });
    function submitAddress(values) {
        if (!!editedAddress) {
            updateUserAddress({
                title: values.title,
                location: [
                    location.lat,
                    location.lng
                ],
                address: {
                    address: inputRef.current?.value || "",
                    floor: values.floor,
                    house: values.apartment,
                    entrance: values.entrance,
                    comment: values.comment || ""
                },
                active: editedAddress.active
            }, {
                onSuccess: ()=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_18__/* .success */ .Vp)(t("successfully.updated"));
                    queryClient.invalidateQueries("addresses");
                },
                onError: ()=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_18__/* .error */ .vU)(t("unable.to.save"));
                },
                onSettled: ()=>{
                    if (location_id === editedAddress?.id.toString()) {
                        updateAddress(inputRef.current?.value);
                        updateLocation(`${location.lat},${location.lng}`);
                    }
                    if (rest.onClose) rest.onClose({}, "backdropClick");
                }
            });
            return;
        }
        if (user) {
            createAddress({
                title: values.title,
                location: [
                    location.lat,
                    location.lng
                ],
                address: {
                    address: inputRef.current?.value || "",
                    floor: values.floor,
                    house: values.apartment,
                    entrance: values.entrance,
                    comment: values.comment
                },
                active: 1
            }, {
                onSuccess: (res)=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_18__/* .success */ .Vp)(t("successfully.saved"));
                    queryClient.invalidateQueries("addresses");
                    updateLocationId(res.id.toString());
                },
                onError: ()=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_18__/* .error */ .vU)(t("unable.to.save"));
                },
                onSettled: ()=>{
                    updateAddress(inputRef.current?.value);
                    updateLocation(`${location.lat},${location.lng}`);
                    if (rest.onClose) rest.onClose({}, "backdropClick");
                }
            });
        } else {
            updateAddress(inputRef.current?.value);
            updateLocation(`${location.lat},${location.lng}`);
            if (rest.onClose) rest.onClose({}, "backdropClick");
        }
    }
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_11__.useFormik)({
        initialValues: {
            entrance: editedAddress?.address?.entrance,
            floor: editedAddress?.address?.floor || "",
            apartment: editedAddress?.address?.house || "",
            comment: editedAddress?.address?.comment,
            title: editedAddress?.title
        },
        onSubmit: (values, { setSubmitting  })=>{
            submitAddress(values);
        },
        validate: (values)=>{
            const errors = {};
            return errors;
        }
    });
    function defineAddress() {
        window.navigator.geolocation.getCurrentPosition(defineLocation, console.log);
    }
    async function defineLocation(position) {
        const { coords  } = position;
        let latlng = `${coords.latitude},${coords.longitude}`;
        const addr = await (0,utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_13__/* .getAddressFromLocation */ .K)(latlng);
        if (inputRef.current) inputRef.current.value = addr;
        const locationObj = {
            lat: coords.latitude,
            lng: coords.longitude
        };
        setLocation(locationObj);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().title),
                            children: t("enter.delivery.address")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().flex),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().search),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "search",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            id: "search",
                                            name: "search",
                                            ref: inputRef,
                                            placeholder: t("search"),
                                            autoComplete: "off",
                                            defaultValue: address
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().btnWrapper),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        onClick: defineAddress,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_CompassDiscoverLineIcon__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().body),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_map_map__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        location: location,
                        setLocation: setLocation,
                        inputRef: inputRef
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().form),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    name: "title",
                                    label: t("title"),
                                    placeholder: t("type.here"),
                                    value: formik.values.title,
                                    onChange: formik.handleChange,
                                    error: !!formik.errors.title && !!formik.touched.title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    name: "entrance",
                                    label: t("entrance"),
                                    placeholder: t("type.here"),
                                    value: formik.values.entrance,
                                    onChange: formik.handleChange
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    name: "floor",
                                    label: t("floor"),
                                    placeholder: t("type.here"),
                                    value: formik.values.floor,
                                    onChange: formik.handleChange
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    name: "apartment",
                                    label: t("apartment"),
                                    placeholder: t("type.here"),
                                    value: formik.values.apartment,
                                    onChange: formik.handleChange
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    name: "comment",
                                    label: t("comment"),
                                    placeholder: t("type.here"),
                                    value: formik.values.comment,
                                    onChange: formik.handleChange
                                })
                            }),
                            editedAddress && location_id !== editedAddress.id.toString() && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                    type: "button",
                                    loading: isDeleting,
                                    onClick: ()=>deleteAddress(editedAddress.id),
                                    children: t("delete.address")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                item: true,
                                xs: !!editedAddress && location_id !== editedAddress.id.toString() ? 6 : 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_darkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    type: "button",
                                    loading: createLoading || updateLoading,
                                    onClick: ()=>formik.submitForm(),
                                    disabled: !isSuccess,
                                    children: isSuccess ? t("submit") : t("delivery.zone.not.available")
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().footer),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_addressModal_module_scss__WEBPACK_IMPORTED_MODULE_20___default().circleBtn),
                        onClick: (event)=>{
                            if (rest.onClose) rest.onClose(event, "backdropClick");
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ArrowLeftLineIcon__WEBPACK_IMPORTED_MODULE_8___default()), {})
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;