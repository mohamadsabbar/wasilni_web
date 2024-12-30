(() => {
var exports = {};
exports.id = 9832;
exports.ids = [9832,892];
exports.modules = {

/***/ 66213:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "welcomeBlog_container__y6S2h",
	"wrapper": "welcomeBlog_wrapper__KbPnV",
	"imgWrapper": "welcomeBlog_imgWrapper__66zxU",
	"header": "welcomeBlog_header__4t6DY",
	"heading": "welcomeBlog_heading__2Fk3f",
	"link": "welcomeBlog_link__ohilf",
	"text": "welcomeBlog_text__poL0F",
	"card": "welcomeBlog_card__BSgQN",
	"title": "welcomeBlog_title__CXb2C",
	"body": "welcomeBlog_body__b5jRI",
	"small": "welcomeBlog_small__82U1X",
	"float": "welcomeBlog_float___fDdl",
	"badge": "welcomeBlog_badge__12vEa",
	"socialCard": "welcomeBlog_socialCard__ju7Xo",
	"label": "welcomeBlog_label__VeAhY"
};


/***/ }),

/***/ 56339:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "welcomeHeader_header__W0dt6",
	"navItem": "welcomeHeader_navItem__HT6UE",
	"brandLogo": "welcomeHeader_brandLogo__9VGOU",
	"menuBtn": "welcomeHeader_menuBtn__P68b0",
	"searchBar": "welcomeHeader_searchBar__w4c58",
	"actions": "welcomeHeader_actions__6AIyc",
	"itemLink": "welcomeHeader_itemLink__fxTTB"
};


/***/ }),

/***/ 83713:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "welcomeHero_container__9pjs8",
	"wrapper": "welcomeHero_wrapper__DwYEy",
	"block": "welcomeHero_block__ytj16",
	"title": "welcomeHero_title__1sS8K",
	"caption": "welcomeHero_caption__hHMNy",
	"searchBar": "welcomeHero_searchBar__w5Li7",
	"search": "welcomeHero_search__Ciw_C",
	"btnWrapper": "welcomeHero_btnWrapper__tPlRB",
	"actions": "welcomeHero_actions__33DX8",
	"textButton": "welcomeHero_textButton__gSIxd",
	"text": "welcomeHero_text__VytOH",
	"stats": "welcomeHero_stats__A5YAB",
	"item": "welcomeHero_item__2BztM",
	"number": "welcomeHero_number__HPfbA"
};


/***/ }),

/***/ 5932:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "whyChooseUs_container__slc__",
	"wrapper": "whyChooseUs_wrapper__8W8_r",
	"title": "whyChooseUs_title__CAGVp",
	"flex": "whyChooseUs_flex__hqVUO",
	"card": "whyChooseUs_card__TAJSM",
	"number": "whyChooseUs_number__su9RD",
	"cardTitle": "whyChooseUs_cardTitle__2U4eQ",
	"text": "whyChooseUs_text__QDmED"
};


/***/ }),

/***/ 63985:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "faq_container__vnQGp",
	"wrapper": "faq_wrapper__PiQ4h",
	"title": "faq_title__CbXm3",
	"accordion": "faq_accordion__Kaq_0",
	"item": "faq_item__OK2MG",
	"header": "faq_header__4NHR5",
	"label": "faq_label__Cpkzw",
	"body": "faq_body__7jCGR",
	"active": "faq_active___S_pn"
};


/***/ }),

/***/ 35201:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "welcome_body__7TUQ9"
};


/***/ }),

/***/ 80892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SecondaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77788);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function SecondaryButton({ children , disabled , onClick , type ="button" , icon , size ="medium" , loading =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        className: `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().secondaryBtn)} ${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[size]}`,
        disabled: disabled,
        onClick: onClick,
        children: !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                icon ? icon : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                    children: children
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
            size: 22
        })
    });
}


/***/ }),

/***/ 51895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WelcomeBlog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./components/welcomeBlog/welcomeBlog.module.scss
var welcomeBlog_module = __webpack_require__(66213);
var welcomeBlog_module_default = /*#__PURE__*/__webpack_require__.n(welcomeBlog_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./components/fallbackImage/fallbackImage.tsx
var fallbackImage = __webpack_require__(37562);
// EXTERNAL MODULE: external "remixicon-react/InstagramLineIcon"
var InstagramLineIcon_ = __webpack_require__(51788);
var InstagramLineIcon_default = /*#__PURE__*/__webpack_require__.n(InstagramLineIcon_);
;// CONCATENATED MODULE: external "remixicon-react/ArrowRightLineIcon"
const ArrowRightLineIcon_namespaceObject = require("remixicon-react/ArrowRightLineIcon");
var ArrowRightLineIcon_default = /*#__PURE__*/__webpack_require__.n(ArrowRightLineIcon_namespaceObject);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: ./contexts/settings/settings.context.tsx
var settings_context = __webpack_require__(21697);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/welcomeBlog/welcomeBlog.tsx










function WelcomeBlog({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    const { settings  } = (0,settings_context/* useSettings */.r)();
    if (data) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (welcomeBlog_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "welcome-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (welcomeBlog_module_default()).wrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (welcomeBlog_module_default()).header,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (welcomeBlog_module_default()).heading,
                                    children: t("latest.blog")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/blog",
                                    className: (welcomeBlog_module_default()).link,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (welcomeBlog_module_default()).text,
                                            children: t("see.all")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ArrowRightLineIcon_default()), {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            container: true,
                            spacing: 4,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 8,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (welcomeBlog_module_default()).card,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: (welcomeBlog_module_default()).title,
                                                children: data?.translation?.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (welcomeBlog_module_default()).body,
                                                dangerouslySetInnerHTML: {
                                                    __html: data?.translation?.description && data?.translation?.description.length > 499 ? `${data?.translation?.description.slice(0, 500)}...` : data?.translation?.description || ""
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                className: (welcomeBlog_module_default()).link,
                                                href: `/blog/${data?.uuid}`,
                                                children: t("read.more")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (welcomeBlog_module_default()).imgWrapper,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fallbackImage/* default */.Z, {
                                            src: data?.img,
                                            alt: data?.translation?.title
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: settings?.instagram_url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: (welcomeBlog_module_default()).socialCard,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((InstagramLineIcon_default()), {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (welcomeBlog_module_default()).label,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (welcomeBlog_module_default()).text,
                                                        children: t("view.our.insta")
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((ArrowRightLineIcon_default()), {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 12,
                                    md: 8,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (welcomeBlog_module_default()).card,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (welcomeBlog_module_default()).badge,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (welcomeBlog_module_default()).text,
                                                    children: t("ads")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: (welcomeBlog_module_default()).title,
                                                children: "Broccoli Bacon Salad"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${(welcomeBlog_module_default()).body} ${(welcomeBlog_module_default()).small}`,
                                                children: [
                                                    "This easy chicken and broccoli casserole is ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " a quick one-skillet dinner fix that's a guaranteed ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " crowd pleaser."
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (welcomeBlog_module_default()).float,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fallbackImage/* default */.Z, {
                                                    src: "/images/broccoli.png",
                                                    alt: "Broccoli Bacon Salad"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
}


/***/ }),

/***/ 92799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WelcomeHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56339);
/* harmony import */ var _welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6684);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80892);
/* harmony import */ var contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80108);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18074);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37490);











const AppDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(26), __webpack_require__.e(865), __webpack_require__.e(182), __webpack_require__.e(7107), __webpack_require__.e(4898), __webpack_require__.e(7234), __webpack_require__.e(8266)]).then(__webpack_require__.bind(__webpack_require__, 44898)), {
    loadableGenerated: {
        modules: [
            "..\\components\\welcomeHeader\\welcomeHeader.tsx -> " + "components/appDrawer/appDrawer"
        ]
    }
});
const ProfileDropdown = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/* import() */[__webpack_require__.e(26), __webpack_require__.e(1502), __webpack_require__.e(1492)]).then(__webpack_require__.bind(__webpack_require__, 21502)), {
    loadableGenerated: {
        modules: [
            "..\\components\\welcomeHeader\\welcomeHeader.tsx -> " + "components/profileDropdown/profileDropdown"
        ]
    }
});
function WelcomeHeader({}) {
    const { isDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_6__/* .ThemeContext */ .N);
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { t  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const [appDrawer, handleOpenAppDrawer, handleCloseAppDrawer] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "welcome-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().brandLogo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_4__/* .BrandLogoDark */ .$C, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navItem),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().actions),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/about",
                                    className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().itemLink),
                                    children: t("about")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/blog",
                                    className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().itemLink),
                                    children: t("blog")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/careers",
                                    className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().itemLink),
                                    children: t("careers")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_welcomeHeader_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navItem),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            onClick: ()=>push("/login"),
                            children: t("login")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppDrawer, {
                open: appDrawer,
                handleClose: handleCloseAppDrawer
            })
        ]
    });
}


/***/ }),

/***/ 37039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WelcomeHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83713);
/* harmony import */ var _welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78428);
/* harmony import */ var remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77262);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21697);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var remixicon_react_MapPinRangeLineIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99893);
/* harmony import */ var remixicon_react_MapPinRangeLineIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_MapPinRangeLineIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3075);
/* harmony import */ var utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60291);
/* harmony import */ var utils_roundToHundreds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56713);
/* harmony import */ var utils_getShorterNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30999);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_10__]);
utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Map = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\welcomeHero\\welcomeHero.tsx -> " + "components/map/map"
        ]
    },
    ssr: false
});
function WelcomeHero({ data , stats  }) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { updateAddress , updateLocation  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_5__/* .useSettings */ .r)();
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        lat: 0,
        lng: 0
    });
    const onSubmit = (event)=>{
        event.preventDefault();
        if (!location.lat && !location.lng) {
            return;
        }
        updateAddress(inputRef.current?.value);
        updateLocation(`${location.lat},${location.lng}`);
        push("/");
    };
    const chooseDefaultAddress = async ()=>{
        const latlng = constants_config__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_LOCATION */ .PX?.split(",") || [];
        setLocation({
            lat: Number(latlng[0] || 0),
            lng: Number(latlng[1] || 0)
        });
        const address = await (0,utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_10__/* .getAddressFromLocation */ .K)(constants_config__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_LOCATION */ .PX);
        inputRef.current.value = address;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
                style: {
                    backgroundImage: `url(${data?.img})`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "welcome-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().block),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
                                    children: data?.title[locale]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().caption),
                                    children: data?.description[locale]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().searchBar),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().search),
                                            onSubmit: onSubmit,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "search",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_Search2LineIcon__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    id: "search",
                                                    name: "search",
                                                    ref: inputRef,
                                                    placeholder: t("search"),
                                                    autoComplete: "off"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().btnWrapper),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                onClick: onSubmit,
                                                children: t("ok")
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().actions),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().textButton),
                                        onClick: chooseDefaultAddress,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_MapPinRangeLineIcon__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().text),
                                                children: t("choose.recomended.address")
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().stats),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().item),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().number),
                                                    children: [
                                                        (0,utils_roundToHundreds__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(stats?.users),
                                                        "+"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().text),
                                                    children: t("people.trust.us")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().item),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().number),
                                                    children: [
                                                        (0,utils_getShorterNumber__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((0,utils_roundToHundreds__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(stats?.orders)),
                                                        "+"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_welcomeHero_module_scss__WEBPACK_IMPORTED_MODULE_11___default().text),
                                                    children: t("delivery.was.successfull")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Map, {
                location: location,
                setLocation: setLocation,
                inputRef: inputRef
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WhyChooseUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5932);
/* harmony import */ var _whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18074);




function WhyChooseUs({ data  }) {
    const { t , locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "welcome-container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                children: [
                    !!data?.features.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: t("why.choose.us")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().flex),
                        children: data?.features.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),
                                tabIndex: idx + 1,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().number),
                                        children: [
                                            "0",
                                            idx + 1
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardTitle),
                                        children: item.title[locale]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_whyChooseUs_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                                        children: item.description[locale]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                        loop: true,
                                        muted: true,
                                        autoPlay: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            src: item.img
                                        })
                                    })
                                ]
                            }, idx))
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 57945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FaqContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./containers/faq/faq.module.scss
var faq_module = __webpack_require__(63985);
var faq_module_default = /*#__PURE__*/__webpack_require__.n(faq_module);
// EXTERNAL MODULE: ./hooks/useLocale.tsx
var useLocale = __webpack_require__(18074);
// EXTERNAL MODULE: external "remixicon-react/AddLineIcon"
var AddLineIcon_ = __webpack_require__(75265);
var AddLineIcon_default = /*#__PURE__*/__webpack_require__.n(AddLineIcon_);
;// CONCATENATED MODULE: ./containers/faq/faqItem.tsx




function FaqItem({ data  }) {
    const [isOpen, setOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(faq_module_default()).item} ${isOpen ? (faq_module_default()).active : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (faq_module_default()).header,
                onClick: ()=>setOpen(!isOpen),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (faq_module_default()).label,
                        children: data.translation?.question
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((AddLineIcon_default()), {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (faq_module_default()).body,
                children: data.translation?.answer
            })
        ]
    });
}

;// CONCATENATED MODULE: ./containers/faq/faq.tsx





function FaqContainer({ data  }) {
    const { t  } = (0,useLocale/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (faq_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "welcome-container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (faq_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (faq_module_default()).title,
                        children: t("faq")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (faq_module_default()).accordion,
                        children: data?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(FaqItem, {
                                data: item
                            }, item.id))
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 54824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WelcomeContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _welcome_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35201);
/* harmony import */ var _welcome_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_welcome_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80108);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49073);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21697);
/* harmony import */ var containers_errorBoundary_errorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15924);
/* harmony import */ var components_welcomeHeader_welcomeHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92799);
/* harmony import */ var containers_layout_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_information__WEBPACK_IMPORTED_MODULE_4__]);
services_information__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function WelcomeContainer({ children  }) {
    const { isDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_2__/* .ThemeContext */ .N);
    const { updateSettings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_5__/* .useSettings */ .r)();
    (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)("settings", ()=>services_information__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getSettings */ .Z.getSettings(), {
        onSuccess: (data)=>{
            const obj = createSettings(data.data);
            updateSettings({
                payment_type: obj.payment_type,
                instagram_url: obj.instagram,
                facebook_url: obj.facebook,
                twitter_url: obj.twitter,
                referral_active: obj.referral_active,
                otp_expire_time: obj.otp_expire_time,
                customer_app_android: obj.customer_app_android,
                customer_app_ios: obj.customer_app_ios,
                delivery_app_android: obj.delivery_app_android,
                delivery_app_ios: obj.delivery_app_ios,
                vendor_app_android: obj.vendor_app_android,
                vendor_app_ios: obj.vendor_app_ios,
                group_order: obj.group_order,
                footer_text: obj.footer_text,
                reservation_enable_for_user: obj.reservation_enable_for_user
            });
        }
    });
    function createSettings(list) {
        const result = list.map((item)=>({
                [item.key]: item.value
            }));
        return Object.assign({}, ...result);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_errorBoundary_errorBoundary__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        isDarkMode: isDarkMode,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_welcomeHeader_welcomeHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_welcome_module_scss__WEBPACK_IMPORTED_MODULE_9___default().body),
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_layout_footer_footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useModal(isOpen = false) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isOpen);
    const handleOpen = (event)=>{
        event?.preventDefault();
        setOpen(true);
    };
    const handleClose = ()=>setOpen(false);
    return [
        open,
        handleOpen,
        handleClose
    ];
}


/***/ }),

/***/ 45608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84169);
/* harmony import */ var containers_welcome_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54824);
/* harmony import */ var components_welcomeHero_welcomeHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37039);
/* harmony import */ var components_whyChooseUs_whyChooseUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83957);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18074);
/* harmony import */ var services_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12838);
/* harmony import */ var components_welcomeBlog_welcomeBlog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51895);
/* harmony import */ var containers_faq_faq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57945);
/* harmony import */ var services_faq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46822);
/* harmony import */ var utils_getLanguage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77347);
/* harmony import */ var utils_session__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24941);
/* harmony import */ var services_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70855);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([containers_welcome_welcome__WEBPACK_IMPORTED_MODULE_3__, components_welcomeHero_welcomeHero__WEBPACK_IMPORTED_MODULE_4__, services_blog__WEBPACK_IMPORTED_MODULE_8__, services_faq__WEBPACK_IMPORTED_MODULE_11__, utils_session__WEBPACK_IMPORTED_MODULE_13__, services_page__WEBPACK_IMPORTED_MODULE_14__]);
([containers_welcome_welcome__WEBPACK_IMPORTED_MODULE_3__, components_welcomeHero_welcomeHero__WEBPACK_IMPORTED_MODULE_4__, services_blog__WEBPACK_IMPORTED_MODULE_8__, services_faq__WEBPACK_IMPORTED_MODULE_11__, utils_session__WEBPACK_IMPORTED_MODULE_13__, services_page__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Welcome({}) {
    const { locale  } = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)([
        "landingPage",
        locale
    ], ()=>services_page__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getLandingPage */ .Z.getLandingPage());
    const { data: stats  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)([
        "stats",
        locale
    ], ()=>services_page__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getStatistics */ .Z.getStatistics());
    const { data: blog  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)([
        "lastBlog",
        locale
    ], ()=>services_blog__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getLastBlog */ .Z.getLastBlog());
    const { data: faqs  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)([
        "faqs",
        locale
    ], ()=>services_faq__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getAll */ .Z.getAll());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_welcome_welcome__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_welcomeHero_welcomeHero__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        data: data?.data?.data,
                        stats: stats?.data
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_whyChooseUs_whyChooseUs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: data?.data?.data
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_welcomeBlog_welcomeBlog__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: blog?.data
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_faq_faq__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: faqs?.data
                    })
                ]
            })
        ]
    });
}
const getStaticProps = async (ctx)=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient();
    const locale = (0,utils_getLanguage__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((0,utils_session__WEBPACK_IMPORTED_MODULE_13__/* .getCookie */ .ej)("locale", ctx));
    await queryClient.prefetchQuery([
        "landingPage",
        locale
    ], ()=>services_page__WEBPACK_IMPORTED_MODULE_14__/* ["default"].getLandingPage */ .Z.getLandingPage());
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_6__.dehydrate)(queryClient)))
        },
        revalidate: 3600
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const blogService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/paginate?type=blog`, {
            params
        }),
    getById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/${id}`, {
            params
        }),
    getLastBlog: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`rest/last-blog/show`, {
            params
        }),
    getAllNews: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/paginate?type=notification`, {
            params
        }),
    getNewsById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/blogs/${id}`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const faqService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/faqs/paginate`, {
            params
        }),
    getPrivacy: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/policy`, {
            params
        }),
    getTerms: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/term`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (faqService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getShorterNumber(number, decPlaces = 3, minShorter = 0) {
    if (!number) {
        return 0;
    }
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = 10 ** decPlaces;
    // Enumerate number abbreviations
    const abbrev = [
        " K",
        " M",
        " B",
        " T"
    ];
    // Go through the array backwards, so we do the largest first
    for(let i = abbrev.length - 1; i >= 0; i--){
        // Convert array index to "1000", "1000000", etc
        const size = 10 ** ((i + 1) * 3);
        const minSize = 10 ** minShorter;
        // If the number is bigger or equal do the abbreviation
        if (size <= number && minSize < number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number * decPlaces / size) / decPlaces;
            // Handle special case where we round up to the next abbreviation
            if (number === 1000 && i < abbrev.length - 1) {
                number = 1;
                i++;
            }
            // Add the letter for the abbreviation
            number += Number(abbrev[i]);
            break;
        }
    }
    return number;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShorterNumber);


/***/ }),

/***/ 56713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ roundToHundreds)
/* harmony export */ });
function roundToHundreds(number) {
    const num = Number(number);
    if (!num) {
        return 0;
    }
    return Math.floor(num / 100) * 100;
}


/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 7486:
/***/ ((module) => {

"use strict";
module.exports = require("next-cookies");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 30808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 87104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 69709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 61175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 75265:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/AddLineIcon");

/***/ }),

/***/ 89224:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArchiveLineIcon");

/***/ }),

/***/ 51406:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArrowRightSLineIcon");

/***/ }),

/***/ 10931:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/BankCardLineIcon");

/***/ }),

/***/ 4634:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckboxCircleLineIcon");

/***/ }),

/***/ 11060:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CloseFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 53921:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/FacebookCircleFillIcon");

/***/ }),

/***/ 17618:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/FileList3LineIcon");

/***/ }),

/***/ 14854:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/GlobalLineIcon");

/***/ }),

/***/ 26582:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/HeartLineIcon");

/***/ }),

/***/ 81812:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/HistoryLineIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 51788:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InstagramLineIcon");

/***/ }),

/***/ 72324:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/LogoutCircleRLineIcon");

/***/ }),

/***/ 80110:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/MapPin2LineIcon");

/***/ }),

/***/ 99893:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/MapPinRangeLineIcon");

/***/ }),

/***/ 92379:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/MoonFillIcon");

/***/ }),

/***/ 97240:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/QuestionLineIcon");

/***/ }),

/***/ 78428:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Search2LineIcon");

/***/ }),

/***/ 78740:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Settings3LineIcon");

/***/ }),

/***/ 88873:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/SunFillIcon");

/***/ }),

/***/ 68523:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/TwitterFillIcon");

/***/ }),

/***/ 29932:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/UserStarLineIcon");

/***/ }),

/***/ 907:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Wallet3LineIcon");

/***/ }),

/***/ 99648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 22021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 64329:
/***/ ((module) => {

"use strict";
module.exports = import("i18next-http-backend");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2078,676,1664,5152,5728,4169,7262,6684,3034,5528,6509], () => (__webpack_exec__(45608)));
module.exports = __webpack_exports__;

})();