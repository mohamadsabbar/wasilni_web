exports.id = 7001;
exports.ids = [7001];
exports.modules = {

/***/ 14104:
/***/ ((module) => {

// Exports
module.exports = {
	"extrasWrapper": "extrasForm_extrasWrapper__DQpd1",
	"extraTitle": "extrasForm_extraTitle__QhfmX",
	"extraGroup": "extrasForm_extraGroup__yiME6",
	"radioGroup": "extrasForm_radioGroup__CDOOV",
	"checkboxGroup": "extrasForm_checkboxGroup__zBfML",
	"label": "extrasForm_label__4bwDC",
	"text": "extrasForm_text__PzEvd",
	"mute": "extrasForm_mute__dfP_l",
	"btn": "extrasForm_btn__7CWoU",
	"symbol": "extrasForm_symbol__gLTDN",
	"counter": "extrasForm_counter__cNgHJ"
};


/***/ }),

/***/ 14020:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "productGalleries_wrapper__4VkAA",
	"imageWrapper": "productGalleries_imageWrapper__CUInM",
	"image": "productGalleries_image__WwG3X"
};


/***/ }),

/***/ 19747:
/***/ ((module) => {

// Exports
module.exports = {
	"shareBtn": "productShare_shareBtn__oG7wY"
};


/***/ }),

/***/ 46677:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "productSingle_wrapper__UXW6W",
	"title": "productSingle_title___1nV5",
	"flex": "productSingle_flex__uz_fU",
	"aside": "productSingle_aside__LJpWM",
	"main": "productSingle_main__4MLQa",
	"header": "productSingle_header__vCZsa",
	"text": "productSingle_text__LkoWJ",
	"bonus": "productSingle_bonus__hhtA6",
	"footer": "productSingle_footer__QyCBP",
	"actions": "productSingle_actions__JWon5",
	"counter": "productSingle_counter__BWho7",
	"counterBtn": "productSingle_counterBtn__EdXO0",
	"disabled": "productSingle_disabled__yQ_nY",
	"count": "productSingle_count__foGip",
	"unit": "productSingle_unit__m6aXX",
	"btnWrapper": "productSingle_btnWrapper__VmFrA",
	"priceBlock": "productSingle_priceBlock__Maw_T",
	"price": "productSingle_price__md9Do"
};


/***/ }),

/***/ 40315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AddonsForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./components/extrasForm/extrasForm.module.scss
var extrasForm_module = __webpack_require__(14104);
var extrasForm_module_default = /*#__PURE__*/__webpack_require__.n(extrasForm_module);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(69709);
// EXTERNAL MODULE: ./hooks/useDidUpdate.tsx
var useDidUpdate = __webpack_require__(68416);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(58330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
;// CONCATENATED MODULE: ./components/inputs/customCheckbox.tsx




const BpIcon = (0,styles_.styled)("span")(()=>({
        width: 24,
        height: 24,
        borderRadius: 8,
        boxShadow: "inset 0 2px 3px rgb(0 0 0 / 5%)",
        transition: ".2s background-color",
        backgroundColor: "var(--grey)",
        ".Mui-focusVisible &": {
            outline: "2px auto rgba(19,124,189,.6)",
            outlineOffset: 2
        },
        "input:disabled ~ &": {
            boxShadow: "none",
            background: "var(--grey)"
        }
    }));
const BpCheckedIcon = (0,styles_.styled)(BpIcon)({
    backgroundColor: "var(--primary)",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
        display: "block",
        width: 24,
        height: 24,
        backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" + " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " + "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='var(--dark-blue)'/%3E%3C/svg%3E\")",
        content: '""'
    }
});
function CustomCheckbox(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
        disableRipple: true,
        color: "default",
        checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(BpCheckedIcon, {}),
        icon: /*#__PURE__*/ jsx_runtime_.jsx(BpIcon, {}),
        ...props
    });
}

// EXTERNAL MODULE: ./components/price/price.tsx + 1 modules
var price = __webpack_require__(90026);
// EXTERNAL MODULE: external "remixicon-react/SubtractFillIcon"
var SubtractFillIcon_ = __webpack_require__(11024);
var SubtractFillIcon_default = /*#__PURE__*/__webpack_require__.n(SubtractFillIcon_);
// EXTERNAL MODULE: external "remixicon-react/AddFillIcon"
var AddFillIcon_ = __webpack_require__(92081);
var AddFillIcon_default = /*#__PURE__*/__webpack_require__.n(AddFillIcon_);
;// CONCATENATED MODULE: ./components/extrasForm/addonsItem.tsx







function AddonsItem({ data , quantity , selectedValues , handleChange  }) {
    const checked = !!selectedValues.find((item)=>item.id === String(data.id));
    const [counter, setCounter] = (0,external_react_.useState)(checked ? quantity : 0);
    function reduceCounter() {
        setCounter((prev)=>prev - 1);
    }
    function addCounter() {
        setCounter((prev)=>prev + 1);
    }
    (0,external_react_.useEffect)(()=>{
        handleChange(data, counter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        counter
    ]);
    if (data.product?.translation) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (extrasForm_module_default()).checkboxGroup,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CustomCheckbox, {
                    id: String(data.id),
                    name: String(data.id),
                    checked: checked,
                    onChange: (event)=>setCounter(event.target.checked ? quantity : 0)
                }),
                checked && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (extrasForm_module_default()).counter,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (extrasForm_module_default()).btn,
                            disabled: counter === 0,
                            onClick: reduceCounter,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((SubtractFillIcon_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (extrasForm_module_default()).text,
                            children: counter * (data?.product?.interval || 1)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (extrasForm_module_default()).symbol,
                            children: " x "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (extrasForm_module_default()).btn,
                            disabled: counter === data.product?.stock?.quantity,
                            onClick: addCounter,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((AddFillIcon_default()), {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    className: (extrasForm_module_default()).label,
                    htmlFor: String(data.id),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (extrasForm_module_default()).text,
                            children: data?.product?.translation.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (extrasForm_module_default()).mute,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(price/* default */.Z, {
                                number: data?.product?.stock?.total_price,
                                plus: true
                            })
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
}

;// CONCATENATED MODULE: ./components/extrasForm/addonsForm.tsx






function AddonsForm({ data =[] , handleAddonClick , quantity , selectedAddons , onSelectAddon  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const handleChange = (0,external_react_.useCallback)((item, count)=>{
        const value = String(item.id);
        if (!count) {
            onSelectAddon((prev)=>prev.filter((el)=>el.id !== value));
        } else {
            const newValues = [
                ...selectedAddons
            ];
            const idx = newValues.findIndex((el)=>el.id == value);
            if (idx < 0) {
                newValues.push({
                    id: value,
                    quantity: count
                });
            } else {
                newValues[idx].quantity = count;
            }
            onSelectAddon(newValues);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        selectedAddons
    ]);
    (0,useDidUpdate/* default */.Z)(()=>{
        let addons = [];
        selectedAddons.forEach((item)=>{
            const element = data.find((el)=>String(el.id) == item.id);
            if (!element) {
                addons = [];
                return;
            }
            const addon = {
                ...element.product,
                stock: {
                    ...element.product?.stock,
                    quantity: item.quantity
                }
            };
            addons.push(addon);
        });
        handleAddonClick(addons);
    }, [
        selectedAddons
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (extrasForm_module_default()).extrasWrapper,
        style: {
            display: data.length > 0 ? "block" : "none"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (extrasForm_module_default()).extraTitle,
                children: t("ingredients")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (extrasForm_module_default()).extraGroup,
                children: data.filter((item)=>!!item.product).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(AddonsItem, {
                        data: item,
                        quantity: item.product?.min_qty || 1,
                        selectedValues: selectedAddons,
                        handleChange: handleChange
                    }, item.id + "addon"))
            })
        ]
    });
}


/***/ }),

/***/ 89636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ExtrasForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80865);
/* harmony import */ var _extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14104);
/* harmony import */ var _extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function ExtrasForm({ name , data , handleExtrasClick , stock , selectedExtra  }) {
    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(String(selectedExtra.id));
    const handleChange = (item)=>{
        setSelectedValue(String(item.id));
        handleExtrasClick(item);
    };
    const controlProps = (item)=>({
            checked: selectedValue == String(item.id),
            onChange: ()=>handleChange(item),
            value: String(item.id),
            id: String(item.id),
            name,
            inputProps: {
                "aria-label": String(item.id)
            }
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().extrasWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().extraTitle),
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().extraGroup),
                children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().radioGroup),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_radioInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                ...controlProps(item)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: (_extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().label),
                                htmlFor: String(item.id),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_extrasForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                                    children: item.value
                                })
                            })
                        ]
                    }, item.id))
            })
        ]
    });
}


/***/ }),

/***/ 84478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductGalleries)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37562);
/* harmony import */ var utils_getImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95785);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var _productGalleries_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14020);
/* harmony import */ var _productGalleries_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productGalleries_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function ProductGalleries({ galleries =[]  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_productGalleries_module_scss__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
            ref: swiperRef,
            slidesPerView: 1,
            mousewheel: true,
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination,
                swiper__WEBPACK_IMPORTED_MODULE_7__.Mousewheel
            ],
            pagination: {
                clickable: true,
                dynamicBullets: true
            },
            children: galleries?.map((gallery)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_productGalleries_module_scss__WEBPACK_IMPORTED_MODULE_8___default().imageWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_fallbackImage_fallbackImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            fill: true,
                            src: (0,utils_getImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(gallery?.path),
                            alt: t("gallery"),
                            sizes: "320px",
                            quality: 90
                        })
                    })
                }, gallery?.id))
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductShare)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productShare_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19747);
/* harmony import */ var _productShare_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_productShare_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27287);
/* harmony import */ var remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99648);
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3075);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5848);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74621);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useShopType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65749);
/* harmony import */ var utils_getBrowserName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74033);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, components_alert_toast__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, components_alert_toast__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function ProductShare({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const type = (0,hooks_useShopType__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)("(max-width:820px)");
    function generateShareLink() {
        const productLink = `${constants_constants__WEBPACK_IMPORTED_MODULE_5__/* .WEBSITE_URL */ .o6}/${type}/${data.shop_id}?product=${data.uuid}`;
        const payload = {
            dynamicLinkInfo: {
                domainUriPrefix: constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_DOMAIN */ .AC,
                link: productLink,
                androidInfo: {
                    androidPackageName: constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_ANDROID */ .dK,
                    androidFallbackLink: productLink
                },
                iosInfo: {
                    iosBundleId: constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_IOS */ .Mr,
                    iosFallbackLink: productLink
                },
                socialMetaTagInfo: {
                    socialTitle: data?.translation?.title,
                    socialDescription: data?.translation?.description,
                    socialImageLink: data.img
                }
            }
        };
        const browser = (0,utils_getBrowserName__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
        if (browser === "Safari" || browser === "Google Chrome" && isMobile) {
            copyToClipBoardSafari(payload);
        } else {
            copyToClipBoard(payload);
        }
    }
    function copyToClipBoardSafari(payload) {
        const clipboardItem = new ClipboardItem({
            "text/plain": axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${constants_config__WEBPACK_IMPORTED_MODULE_4__/* .API_KEY */ .$h}`, payload).then((result)=>{
                if (!result) {
                    return new Promise(async (resolve)=>{
                        (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .error */ .vU)("Failed to generate link!");
                        //@ts-expect-error
                        resolve(new Blob[""]());
                    });
                }
                const copyText = result.data.shortLink;
                return new Promise(async (resolve)=>{
                    (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .success */ .Vp)(t("copied"));
                    resolve(new Blob([
                        copyText
                    ]));
                });
            })
        });
        navigator.clipboard.write([
            clipboardItem
        ]);
    }
    async function copyToClipBoard(payload) {
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${constants_config__WEBPACK_IMPORTED_MODULE_4__/* .API_KEY */ .$h}`, payload).then((result)=>{
            const copyText = result.data.shortLink;
            copy(copyText);
        }).catch((err)=>{
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .error */ .vU)("Failed to generate link!");
            console.log("generate link failed => ", err);
        });
    }
    async function copy(text) {
        try {
            await navigator.clipboard.writeText(text);
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .success */ .Vp)(t("copied"));
        } catch (err) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_6__/* .error */ .vU)("Failed to copy!");
            console.log("copy failed => ", err);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_productShare_module_scss__WEBPACK_IMPORTED_MODULE_11___default().shareBtn),
        onClick: generateShareLink,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MemberProductSingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getExtras__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10757);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34349);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18423);
/* harmony import */ var redux_slices_userCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96477);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37490);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var services_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32837);
/* harmony import */ var _productUI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8260);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57318);
/* harmony import */ var components_extrasForm_addonsForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40315);
/* harmony import */ var components_confirmationModal_confirmationModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36041);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_cart__WEBPACK_IMPORTED_MODULE_4__, services_product__WEBPACK_IMPORTED_MODULE_8__, _productUI__WEBPACK_IMPORTED_MODULE_9__]);
([services_cart__WEBPACK_IMPORTED_MODULE_4__, services_product__WEBPACK_IMPORTED_MODULE_8__, _productUI__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function MemberProductSingle({ handleClose , uuid  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [extras, setExtras] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showExtras, setShowExtras] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        extras: [],
        stock: {
            id: 0,
            quantity: 1,
            price: 0
        }
    });
    const [extrasIds, setExtrasIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [addons, setAddons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(redux_slices_userCart__WEBPACK_IMPORTED_MODULE_5__/* .selectUserCart */ .Ns);
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_14__/* .selectCurrency */ .j);
    const [openPrompt, handleOpenPrompt, handleClosePrompt] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const shopId = Number(query.id);
    const { clearMember , member  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_10__/* .useShop */ .L)();
    const [selectedAddons, setSelectedAddons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "product",
        uuid,
        currency
    ], ()=>services_product__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getById */ .Z.getById(uuid, {
            currency_id: currency?.id
        }), {
        enabled: Boolean(uuid),
        select: (data)=>data.data
    });
    const { isLoading , mutate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_4__/* ["default"].insertGuest */ .Z.insertGuest(data),
        onSuccess: (data)=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_5__/* .updateUserCart */ .CR)(data.data));
            handleClose();
        }
    });
    const { mutate: leaveGroup , isLoading: isLoadingGroupLeave  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_4__/* ["default"].guestLeave */ .Z.guestLeave(data),
        onSuccess: ()=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_5__/* .clearUserCart */ .tx)());
            handleClosePrompt();
            clearMember();
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            setCounter(data.min_qty || 1);
            const myData = (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_15__/* .sortExtras */ .o)(data);
            setExtras(myData.extras);
            setStock(myData.stock);
            setShowExtras((0,utils_getExtras__WEBPACK_IMPORTED_MODULE_15__/* .getExtras */ .y)("", myData.extras, myData.stock));
            (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_15__/* .getExtras */ .y)("", myData.extras, myData.stock).extras?.forEach((element)=>{
                setExtrasIds((prev)=>[
                        ...prev,
                        element[0]
                    ]);
            });
        }
    }, [
        data
    ]);
    const handleExtrasClick = (e)=>{
        setSelectedAddons([]);
        const index = extrasIds.findIndex((item)=>item.extra_group_id === e.extra_group_id);
        let array = extrasIds;
        if (index > -1) array = array.slice(0, index);
        array.push(e);
        const nextIds = array.map((item)=>item.id).join(",");
        var extrasData = (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_15__/* .getExtras */ .y)(nextIds, extras, stock);
        setShowExtras(extrasData);
        extrasData.extras?.forEach((element)=>{
            const index = extrasIds.findIndex((item)=>element[0].extra_group_id != e.extra_group_id ? item.extra_group_id === element[0].extra_group_id : item.extra_group_id === e.extra_group_id);
            if (element[0].level >= e.level) {
                var itemData = element[0].extra_group_id != e.extra_group_id ? element[0] : e;
                if (index == -1) array.push(itemData);
                else {
                    array[index] = itemData;
                }
            }
        });
        setExtrasIds(array);
    };
    function addCounter() {
        setCounter((prev)=>prev + 1);
    }
    function reduceCounter() {
        setCounter((prev)=>prev - 1);
    }
    function handleAddToCart() {
        if (!checkIsAbleToAddProduct()) {
            handleOpenPrompt();
            return;
        }
        storeCart();
    }
    function getAddonQuantity(stock_id) {
        const addon = addons.find((el)=>el.stock?.id === stock_id);
        if (addon) {
            return addon.stock?.quantity;
        } else {
            return 0;
        }
    }
    function storeCart() {
        const defaultAddons = showExtras.stock.addons?.filter((item)=>!!item.product) || [];
        const products = [];
        defaultAddons.forEach((item)=>{
            if (getAddonQuantity(item.product?.stock?.id) !== 0) {
                products.push({
                    stock_id: item.product?.stock?.id,
                    quantity: getAddonQuantity(item.product?.stock?.id),
                    parent_id: showExtras.stock.id
                });
            }
        });
        const body = {
            shop_id: shopId,
            cart_id: member?.cart_id,
            user_cart_uuid: member?.uuid,
            products: [
                {
                    stock_id: showExtras.stock.id,
                    quantity: counter
                },
                ...products
            ]
        };
        mutate(body);
    }
    function checkIsAbleToAddProduct() {
        let isActiveCart;
        isActiveCart = cart.shop_id === 0 || cart.shop_id === shopId;
        return isActiveCart;
    }
    function handleAddonClick(list) {
        setAddons(list);
    }
    function calculateTotalPrice() {
        const addonPrice = addons.reduce((total, item)=>total += Number(item.stock?.total_price) * Number(item.stock?.quantity), 0);
        return addonPrice + Number(showExtras.stock.total_price) * counter;
    }
    function handleLeave() {
        leaveGroup({
            ids: [
                member?.uuid
            ],
            cart_id: cart.id
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_productUI__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                data: data || {},
                loading: !!data,
                stock: showExtras.stock,
                extras: showExtras.extras,
                counter: counter,
                addCounter: addCounter,
                reduceCounter: reduceCounter,
                handleExtrasClick: handleExtrasClick,
                handleAddToCart: handleAddToCart,
                loadingBtn: isLoading,
                totalPrice: calculateTotalPrice(),
                extrasIds: extrasIds,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_extrasForm_addonsForm__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    data: showExtras.stock.addons || [],
                    handleAddonClick: handleAddonClick,
                    quantity: counter,
                    selectedAddons: selectedAddons,
                    onSelectAddon: setSelectedAddons
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_confirmationModal_confirmationModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
                open: openPrompt,
                handleClose: handleClosePrompt,
                onSubmit: handleLeave,
                loading: isLoadingGroupLeave,
                title: t("leave.group.prompt")
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductSingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getExtras__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10757);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13508);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37490);
/* harmony import */ var components_clearCartModal_cartReplacePrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97944);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32837);
/* harmony import */ var _productUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8260);
/* harmony import */ var components_extrasForm_addonsForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40315);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74621);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57318);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_product__WEBPACK_IMPORTED_MODULE_7__, _productUI__WEBPACK_IMPORTED_MODULE_8__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__]);
([services_product__WEBPACK_IMPORTED_MODULE_7__, _productUI__WEBPACK_IMPORTED_MODULE_8__, components_alert_toast__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function ProductSingle({ handleClose , uuid  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [extras, setExtras] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showExtras, setShowExtras] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        extras: [],
        stock: {
            id: 0,
            quantity: 1,
            price: 0
        }
    });
    const [extrasIds, setExtrasIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [addons, setAddons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(redux_slices_cart__WEBPACK_IMPORTED_MODULE_3__/* .selectCart */ .KY);
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_13__/* .selectCurrency */ .j);
    const [openPrompt, handleOpenPrompt, handleClosePrompt] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { isOpen , isShopClosed  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_12__/* .useShop */ .L)();
    const [selectedAddons, setSelectedAddons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)([
        "product",
        uuid,
        currency
    ], ()=>services_product__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getById */ .Z.getById(uuid, {
            currency_id: currency?.id
        }), {
        enabled: Boolean(uuid),
        select: (data)=>data.data
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            setCounter(data.min_qty || 1);
            const myData = (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_14__/* .sortExtras */ .o)(data);
            setExtras(myData.extras);
            setStock(myData.stock);
            setShowExtras((0,utils_getExtras__WEBPACK_IMPORTED_MODULE_14__/* .getExtras */ .y)("", myData.extras, myData.stock));
            (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_14__/* .getExtras */ .y)("", myData.extras, myData.stock).extras?.forEach((element)=>{
                setExtrasIds((prev)=>[
                        ...prev,
                        element[0]
                    ]);
            });
        }
    }, [
        data
    ]);
    const handleExtrasClick = (e)=>{
        setSelectedAddons([]);
        const index = extrasIds.findIndex((item)=>item.extra_group_id === e.extra_group_id);
        let array = extrasIds;
        if (index > -1) array = array.slice(0, index);
        array.push(e);
        const nextIds = array.map((item)=>item.id).join(",");
        var extrasData = (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_14__/* .getExtras */ .y)(nextIds, extras, stock);
        setShowExtras(extrasData);
        extrasData.extras?.forEach((element)=>{
            const index = extrasIds.findIndex((item)=>element[0].extra_group_id != e.extra_group_id ? item.extra_group_id === element[0].extra_group_id : item.extra_group_id === e.extra_group_id);
            if (element[0].level >= e.level) {
                var itemData = element[0].extra_group_id != e.extra_group_id ? element[0] : e;
                if (index == -1) array.push(itemData);
                else {
                    array[index] = itemData;
                }
            }
        });
        setExtrasIds(array);
    };
    function addCounter() {
        setCounter((prev)=>prev + 1);
    }
    function reduceCounter() {
        setCounter((prev)=>prev - 1);
    }
    function handleAddToCart() {
        if (!isOpen || isShopClosed) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_10__/* .info */ .um)(t("shop.closed"));
            return;
        }
        if (!checkIsAbleToAddProduct()) {
            handleOpenPrompt();
            return;
        }
        storeCart();
    }
    function storeCart() {
        const products = addons.map((item)=>({
                id: item.id,
                img: item.img,
                translation: item.translation,
                quantity: item.stock?.quantity,
                stock: {
                    ...item.stock,
                    product: {
                        interval: item?.interval || 1
                    }
                },
                shop_id: item.shop_id,
                extras: []
            }));
        const product = {
            id: data?.id,
            img: data?.img,
            translation: data?.translation,
            quantity: counter,
            stock: showExtras.stock,
            shop_id: data?.shop_id,
            extras: extrasIds.map((item)=>item.value),
            addons: products,
            interval: data?.interval,
            unit: data?.unit
        };
        dispatch((0,redux_slices_cart__WEBPACK_IMPORTED_MODULE_3__/* .setToCart */ .Jr)(product));
        handleClose();
    }
    function checkIsAbleToAddProduct() {
        let isActiveCart;
        if (!!cart.length) {
            isActiveCart = cart.some((item)=>item.shop_id === data?.shop_id);
        } else {
            isActiveCart = true;
        }
        return isActiveCart;
    }
    function handleClearCart() {
        dispatch((0,redux_slices_cart__WEBPACK_IMPORTED_MODULE_3__/* .clearCart */ .LL)());
        storeCart();
    }
    function handleAddonClick(list) {
        setAddons(list);
    }
    function calculateTotalPrice() {
        const addonPrice = addons.reduce((total, item)=>total += Number(item.stock?.total_price) * Number(item.stock?.quantity), 0);
        return addonPrice + Number(showExtras.stock?.total_price) * counter;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_productUI__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                data: data || {},
                loading: !!data,
                stock: showExtras.stock,
                extras: showExtras.extras,
                counter: counter,
                addCounter: addCounter,
                reduceCounter: reduceCounter,
                handleExtrasClick: handleExtrasClick,
                handleAddToCart: handleAddToCart,
                totalPrice: calculateTotalPrice(),
                extrasIds: extrasIds,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_extrasForm_addonsForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    data: showExtras.stock.addons || [],
                    handleAddonClick: handleAddonClick,
                    quantity: counter,
                    selectedAddons: selectedAddons,
                    onSelectAddon: setSelectedAddons
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_clearCartModal_cartReplacePrompt__WEBPACK_IMPORTED_MODULE_5__["default"], {
                open: openPrompt,
                handleClose: handleClosePrompt,
                onSubmit: handleClearCart
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46677);
/* harmony import */ var _productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_extrasForm_extrasForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89636);
/* harmony import */ var remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11024);
/* harmony import */ var remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92081);
/* harmony import */ var remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77262);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90026);
/* harmony import */ var components_loader_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75619);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_badge_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12554);
/* harmony import */ var components_bonusCaption_bonusCaption__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54215);
/* harmony import */ var components_productShare_productShare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42238);
/* harmony import */ var _productGalleries_productGalleries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_productShare_productShare__WEBPACK_IMPORTED_MODULE_11__, _productGalleries_productGalleries__WEBPACK_IMPORTED_MODULE_12__]);
([components_productShare_productShare__WEBPACK_IMPORTED_MODULE_11__, _productGalleries_productGalleries__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ProductUI({ children , data , loading , stock , extras , counter , loadingBtn , handleExtrasClick , addCounter , reduceCounter , handleAddToCart , totalPrice , extrasIds  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().wrapper),
        children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_productShare_productShare__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    data: data
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                    children: data.translation?.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().flex),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().aside),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_productGalleries_productGalleries__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                galleries: data?.galleries
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().main),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().header),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                                            children: data.translation?.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                            children: data.translation?.description
                                        }),
                                        !!stock.bonus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bonus),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge_badge__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    type: "bonus",
                                                    variant: "circle"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_bonusCaption_bonusCaption__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                        data: stock.bonus
                                                    })
                                                })
                                            ]
                                        }),
                                        !!stock.discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().bonus),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge_badge__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    type: "discount",
                                                    variant: "circle"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().text),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: t("discount")
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            number: stock.discount,
                                                            minus: true
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                extras.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_extrasForm_extrasForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        name: item[0]?.group?.translation?.title,
                                        data: item,
                                        stock: stock,
                                        selectedExtra: extrasIds[idx],
                                        handleExtrasClick: handleExtrasClick
                                    }, "extra" + idx)),
                                children
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().footer),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().actions),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().counter),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: `${(_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().counterBtn)} ${counter === 1 ? (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().disabled) : ""}`,
                                            disabled: counter === data.min_qty,
                                            onClick: reduceCounter,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_SubtractFillIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().count),
                                            children: [
                                                counter * (data?.interval || 1),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().unit),
                                                    children: data?.unit?.translation?.title
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: `${(_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().counterBtn)} ${counter === stock.quantity || counter === data.max_qty ? (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().disabled) : ""}`,
                                            disabled: counter === stock.quantity || counter === data.max_qty,
                                            onClick: addCounter,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_AddFillIcon__WEBPACK_IMPORTED_MODULE_4___default()), {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().btnWrapper),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        onClick: handleAddToCart,
                                        loading: loadingBtn,
                                        disabled: !stock.quantity || stock.quantity < (data.min_qty || 1) || stock.quantity === 0,
                                        children: !stock.quantity ? t("out.of.stock") : t("add")
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().priceBlock),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: t("total")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: (_productSingle_module_scss__WEBPACK_IMPORTED_MODULE_13___default().price),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        number: totalPrice
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_loader_loading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProtectedProductSingle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_getExtras__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10757);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34349);
/* harmony import */ var redux_slices_currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64698);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var services_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18423);
/* harmony import */ var redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96477);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37490);
/* harmony import */ var components_clearCartModal_cartReplacePrompt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97944);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32837);
/* harmony import */ var _productUI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8260);
/* harmony import */ var components_extrasForm_addonsForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40315);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74621);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_cart__WEBPACK_IMPORTED_MODULE_5__, services_product__WEBPACK_IMPORTED_MODULE_10__, _productUI__WEBPACK_IMPORTED_MODULE_11__, components_alert_toast__WEBPACK_IMPORTED_MODULE_14__]);
([services_cart__WEBPACK_IMPORTED_MODULE_5__, services_product__WEBPACK_IMPORTED_MODULE_10__, _productUI__WEBPACK_IMPORTED_MODULE_11__, components_alert_toast__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function ProtectedProductSingle({ handleClose , uuid  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [extras, setExtras] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showExtras, setShowExtras] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        extras: [],
        stock: {
            id: 0,
            quantity: 1,
            price: 0
        }
    });
    const [extrasIds, setExtrasIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [addons, setAddons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    const currency = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(redux_slices_currency__WEBPACK_IMPORTED_MODULE_3__/* .selectCurrency */ .j);
    const cart = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)(redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .selectUserCart */ .Ns);
    const [openPrompt, handleOpenPrompt, handleClosePrompt] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const shopId = Number(query.id);
    const { isOpen , isShopClosed  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_15__/* .useShop */ .L)();
    const [selectedAddons, setSelectedAddons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "product",
        uuid,
        currency
    ], ()=>services_product__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getById */ .Z.getById(uuid, {
            currency_id: currency?.id
        }), {
        enabled: Boolean(uuid),
        select: (data)=>data.data
    });
    const { isLoading , mutate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_5__/* ["default"].insert */ .Z.insert(data),
        onSuccess: (data)=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .updateUserCart */ .CR)(data.data));
            handleClose();
        },
        onError: (err)=>{
            console.log("err => ", err);
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_14__/* .error */ .vU)(t("try.again"));
        }
    });
    const { isLoading: isLoadingClearCart , mutate: mutateClearCart  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
        mutationFn: (data)=>services_cart__WEBPACK_IMPORTED_MODULE_5__/* ["default"]["delete"] */ .Z["delete"](data),
        onSuccess: ()=>{
            dispatch((0,redux_slices_userCart__WEBPACK_IMPORTED_MODULE_6__/* .clearUserCart */ .tx)());
            storeCart();
            handleClosePrompt();
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            setCounter(data.min_qty || 1);
            const myData = (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_16__/* .sortExtras */ .o)(data);
            setExtras(myData.extras);
            setStock(myData.stock);
            setShowExtras((0,utils_getExtras__WEBPACK_IMPORTED_MODULE_16__/* .getExtras */ .y)("", myData.extras, myData.stock));
            (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_16__/* .getExtras */ .y)("", myData.extras, myData.stock).extras?.forEach((element)=>{
                setExtrasIds((prev)=>[
                        ...prev,
                        element[0]
                    ]);
            });
        }
    }, [
        data
    ]);
    const handleExtrasClick = (e)=>{
        setSelectedAddons([]);
        const index = extrasIds.findIndex((item)=>item.extra_group_id === e.extra_group_id);
        let array = extrasIds;
        if (index > -1) array = array.slice(0, index);
        array.push(e);
        const nextIds = array.map((item)=>item.id).join(",");
        var extrasData = (0,utils_getExtras__WEBPACK_IMPORTED_MODULE_16__/* .getExtras */ .y)(nextIds, extras, stock.map((item)=>({
                ...item
            })));
        setShowExtras(extrasData);
        extrasData.extras?.forEach((element)=>{
            const index = extrasIds.findIndex((item)=>element[0].extra_group_id != e.extra_group_id ? item.extra_group_id === element[0].extra_group_id : item.extra_group_id === e.extra_group_id);
            if (element[0].level >= e.level) {
                var itemData = element[0].extra_group_id != e.extra_group_id ? element[0] : e;
                if (index == -1) array.push(itemData);
                else {
                    array[index] = itemData;
                }
            }
        });
        setExtrasIds(array);
    };
    function addCounter() {
        setCounter((prev)=>prev + 1);
    }
    function reduceCounter() {
        setCounter((prev)=>prev - 1);
    }
    function handleAddToCart() {
        if (!isOpen || isShopClosed) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_14__/* .info */ .um)(t("shop.closed"));
            return;
        }
        if (!checkIsAbleToAddProduct()) {
            handleOpenPrompt();
            return;
        }
        storeCart();
    }
    function getAddonQuantity(stock_id) {
        const addon = addons.find((el)=>el.stock?.id === stock_id);
        if (addon) {
            return addon.stock?.quantity;
        } else {
            return 0;
        }
    }
    function storeCart() {
        const defaultAddons = showExtras.stock.addons?.filter((item)=>!!item.product) || [];
        const products = [];
        defaultAddons.forEach((item)=>{
            if (getAddonQuantity(item.product?.stock?.id) !== 0) {
                products.push({
                    stock_id: item.product?.stock?.id,
                    quantity: getAddonQuantity(item.product?.stock?.id),
                    parent_id: showExtras.stock.id
                });
            }
        });
        const body = {
            shop_id: shopId,
            currency_id: currency?.id,
            rate: currency?.rate,
            products: [
                {
                    stock_id: showExtras.stock.id,
                    quantity: counter
                },
                ...products
            ]
        };
        mutate(body);
    }
    function checkIsAbleToAddProduct() {
        let isActiveCart;
        isActiveCart = cart.shop_id === 0 || cart.shop_id === shopId;
        return isActiveCart;
    }
    function handleClearCart() {
        const ids = [
            cart.id
        ];
        mutateClearCart({
            ids
        });
    }
    function handleAddonClick(list) {
        setAddons(list);
    }
    function calculateTotalPrice() {
        const addonPrice = addons.reduce((total, item)=>total += Number(item.stock?.total_price) * Number(item.stock?.quantity), 0);
        return addonPrice + Number(showExtras.stock.total_price) * counter;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_productUI__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                data: data || {},
                loading: !!data,
                stock: showExtras.stock,
                extras: showExtras.extras,
                counter: counter,
                addCounter: addCounter,
                reduceCounter: reduceCounter,
                handleExtrasClick: handleExtrasClick,
                handleAddToCart: handleAddToCart,
                loadingBtn: isLoading,
                totalPrice: calculateTotalPrice(),
                extrasIds: extrasIds,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_extrasForm_addonsForm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    data: showExtras.stock.addons || [],
                    handleAddonClick: handleAddonClick,
                    quantity: counter,
                    selectedAddons: selectedAddons,
                    onSelectAddon: setSelectedAddons
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_clearCartModal_cartReplacePrompt__WEBPACK_IMPORTED_MODULE_8__["default"], {
                open: openPrompt,
                handleClose: handleClosePrompt,
                onSubmit: handleClearCart,
                loading: isLoadingClearCart
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29969);
/* harmony import */ var components_productSingle_protectedProductSingle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40161);
/* harmony import */ var components_productSingle_productSingle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28827);
/* harmony import */ var components_productSingle_memberProductSingle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33566);
/* harmony import */ var contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_productSingle_protectedProductSingle__WEBPACK_IMPORTED_MODULE_3__, components_productSingle_productSingle__WEBPACK_IMPORTED_MODULE_4__, components_productSingle_memberProductSingle__WEBPACK_IMPORTED_MODULE_5__]);
([components_productSingle_protectedProductSingle__WEBPACK_IMPORTED_MODULE_3__, components_productSingle_productSingle__WEBPACK_IMPORTED_MODULE_4__, components_productSingle_memberProductSingle__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function ProductContainer({ data , uuid , handleClose  }) {
    const { isAuthenticated  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const { isMember  } = (0,contexts_shop_shop_context__WEBPACK_IMPORTED_MODULE_6__/* .useShop */ .L)();
    if (isMember) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_productSingle_memberProductSingle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            handleClose: handleClose,
            uuid: uuid
        });
    } else if (isAuthenticated) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_productSingle_protectedProductSingle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            handleClose: handleClose,
            uuid: uuid
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_productSingle_productSingle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            handleClose: handleClose,
            uuid: uuid
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useShopType)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function useShopType() {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    return pathname.includes("shop") ? "shop" : "restaurant";
}


/***/ }),

/***/ 74033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getBrowserName)
/* harmony export */ });
function getBrowserName() {
    const test = function(regexp) {
        return regexp.test(window.navigator.userAgent);
    };
    switch(true){
        case test(/edg/i):
            return "Microsoft Edge";
        case test(/trident/i):
            return "Microsoft Internet Explorer";
        case test(/firefox|fxios/i):
            return "Mozilla Firefox";
        case test(/opr\//i):
            return "Opera";
        case test(/ucbrowser/i):
            return "UC Browser";
        case test(/samsungbrowser/i):
            return "Samsung Browser";
        case test(/chrome|chromium|crios/i):
            return "Google Chrome";
        case test(/safari/i):
            return "Safari";
        default:
            return "Other";
    }
}


/***/ }),

/***/ 10757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ sortExtras),
/* harmony export */   "y": () => (/* binding */ getExtras)
/* harmony export */ });
//@ts-nocheck
function sortExtras(object) {
    var extras = [];
    var stocks = [];
    var up = "";
    for(var i = 0; i < object["stocks"].length; i++){
        up = "";
        for(var k = 0; k < object["stocks"][i]["extras"].length; k++){
            var extra = Object.assign({}, object["stocks"][i]["extras"][k]);
            var index = extras.findIndex((item)=>item["id"] == extra["id"]);
            if (index == -1) {
                extra["level"] = k;
                extra["up"] = [
                    up
                ];
                extras.push(extra);
                up += extra["id"].toString();
            } else {
                extras[index]["up"].push(up);
                up += extra["id"].toString();
            }
        }
        var mdata = {
            id: object["stocks"][i]["id"],
            extras: up,
            price: object["stocks"][i]["price"],
            quantity: object["stocks"][i]["quantity"],
            countable_id: object["stocks"][i]["countable_id"],
            discount: object["stocks"][i]["discount"],
            tax: object["stocks"][i]["tax"],
            total_price: object["stocks"][i]["total_price"],
            bonus: object["stocks"][i]["bonus"],
            addons: object["stocks"][i]["addons"]
        };
        stocks.push(mdata);
    }
    return {
        stock: stocks,
        extras: extras
    };
}
function getExtras(extrasIdsArray, extras, stocks) {
    var splitted = extrasIdsArray == "" ? [] : extrasIdsArray.split(",");
    var result = [];
    var up = [];
    for(var i = 0; i <= splitted.length; i++){
        if (i - 1 >= 0) up[up.length] = splitted[i - 1].toString();
        var filtered = extras.filter((item)=>{
            var mySet = new Set(item["up"]);
            if (mySet.has(up.join(""))) return item;
        });
        if (filtered.length > 0) result.push(filtered);
    }
    var i = 0;
    if (up.length < result.length) while(i < extras.length){
        up[up.length] = result[result.length - 1][0]["id"].toString();
        var filtered = extras.filter((item)=>{
            var mySet = new Set(item["up"]);
            if (mySet.has(up.join(""))) return item;
        });
        if (filtered.length == 0) {
            break;
        }
        result.push(filtered);
        i++;
    }
    var index = stocks.findIndex((item)=>item["extras"] == up.join(""));
    return {
        stock: stocks[index],
        extras: result
    };
}


/***/ }),

/***/ 62996:
/***/ (() => {



/***/ })

};
;