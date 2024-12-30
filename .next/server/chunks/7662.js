exports.id = 7662;
exports.ids = [7662];
exports.modules = {

/***/ 50619:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "v1_footer__oMgqO",
	"main": "v1_main__g17BD",
	"logoWrapper": "v1_logoWrapper__xPtns",
	"flex": "v1_flex__MCxue",
	"item": "v1_item__j1SE7",
	"column": "v1_column__3Blrc",
	"columnItem": "v1_columnItem__QfR7D",
	"listItem": "v1_listItem__eVqid",
	"bottom": "v1_bottom__ja8a3",
	"social": "v1_social__D1K_U",
	"socialItem": "v1_socialItem__UFjLS",
	"text": "v1_text__qfIl0",
	"mutedLink": "v1_mutedLink__EEb9I"
};


/***/ }),

/***/ 57662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _v1_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50619);
/* harmony import */ var _v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_v1_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6684);
/* harmony import */ var contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80108);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3075);
/* harmony import */ var remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53921);
/* harmony import */ var remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68523);
/* harmony import */ var remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var remixicon_react_InstagramLineIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51788);
/* harmony import */ var remixicon_react_InstagramLineIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_InstagramLineIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21697);
/* eslint-disable @next/next/no-img-element */ 












function Footer({}) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const { isDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_theme_theme_context__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .N);
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(max-width:576px)");
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_11__/* .useSettings */ .r)();
    const isReferralActive = settings.referral_active == 1;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().footer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: 4,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            order: isMobile ? 3 : 0,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().logoWrapper),
                                        children: isDarkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_3__/* .BrandLogoDark */ .$C, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_3__/* .BrandLogo */ .Oc, {})
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flex),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: settings?.customer_app_ios,
                                                className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().item),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/app-store.webp",
                                                    alt: "App store"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: settings?.customer_app_android,
                                                className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().item),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/google-play.webp",
                                                    alt: "Google play"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 3,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().column),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/welcome",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("home.page")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/about",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: [
                                                t("about"),
                                                " ",
                                                constants_config__WEBPACK_IMPORTED_MODULE_7__/* .META_TITLE */ .k5
                                            ]
                                        })
                                    }),
                                    isReferralActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/referrals",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("become.affiliate")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/careers",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("careers")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/blog",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("blog")
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 12,
                            md: 3,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().column),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/recipes",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("recipes")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/help",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("get.helps")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/be-seller",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("add.your.restaurant")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().columnItem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/deliver",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().listItem),
                                            children: t("sign.up.to.deliver")
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().bottom),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        spacing: 4,
                        flexDirection: isMobile ? "column" : "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().social),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: settings?.instagram_url,
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().socialItem),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_InstagramLineIcon__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: settings?.twitter_url,
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().socialItem),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_TwitterFillIcon__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: settings?.facebook_url,
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().socialItem),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_FacebookCircleFillIcon__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().flex),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/privacy",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().mutedLink),
                                            children: t("privacy.policy")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/terms",
                                            className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().mutedLink),
                                            children: t("terms")
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                xs: 12,
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_v1_module_scss__WEBPACK_IMPORTED_MODULE_12___default().text),
                                    children: [
                                        "\xa9 ",
                                        new Date().getFullYear(),
                                        " ",
                                        settings?.footer_text
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

};
;