exports.id = 5774;
exports.ids = [5774];
exports.modules = {

/***/ 97749:
/***/ ((module) => {

// Exports
module.exports = {
	"shareBtn": "shopShare_shareBtn__yY224"
};


/***/ }),

/***/ 5774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopShare)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopShare_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97749);
/* harmony import */ var _shopShare_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopShare_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27287);
/* harmony import */ var remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99648);
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3075);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5848);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74621);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_getBrowserName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74033);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, components_alert_toast__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, components_alert_toast__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function ShopShare({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)("(max-width:820px)");
    function generateShareLink() {
        const shopLink = `${constants_constants__WEBPACK_IMPORTED_MODULE_5__/* .WEBSITE_URL */ .o6}/shop/${data?.id}`;
        const payload = {
            dynamicLinkInfo: {
                domainUriPrefix: constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_DOMAIN */ .AC,
                link: shopLink,
                androidInfo: {
                    androidPackageName: constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_ANDROID */ .dK,
                    androidFallbackLink: shopLink
                },
                iosInfo: {
                    iosBundleId: constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_IOS */ .Mr,
                    iosFallbackLink: shopLink
                },
                socialMetaTagInfo: {
                    socialTitle: data?.translation?.title,
                    socialDescription: data?.translation?.description,
                    socialImageLink: data?.logo_img
                }
            }
        };
        const browser = (0,utils_getBrowserName__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
        if (browser === "Safari" || browser === "Google Chrome" && isMobile) {
            copyToClipBoardSafari(payload);
        } else {
            copyToClipBoard(payload);
        }
    }
    function copyToClipBoardSafari(payload) {
        const clipboardItem = new ClipboardItem({
            "text/plain": axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_WEB_KEY */ .Kc}`, payload).then((result)=>{
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
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${constants_config__WEBPACK_IMPORTED_MODULE_4__/* .DYNAMIC_LINK_WEB_KEY */ .Kc}`, payload).then((result)=>{
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
        className: (_shopShare_module_scss__WEBPACK_IMPORTED_MODULE_10___default().shareBtn),
        onClick: generateShareLink,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((remixicon_react_ShareLineIcon__WEBPACK_IMPORTED_MODULE_2___default()), {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ })

};
;