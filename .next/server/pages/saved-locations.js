(() => {
var exports = {};
exports.id = 3067;
exports.ids = [3067];
exports.modules = {

/***/ 33859:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "savedLocationCard_wrapper__B8MpS",
	"body": "savedLocationCard_body__M3LhE",
	"badge": "savedLocationCard_badge__PNl_w",
	"active": "savedLocationCard_active__tHvai",
	"content": "savedLocationCard_content__djhp4",
	"title": "savedLocationCard_title__Oc_h0",
	"text": "savedLocationCard_text__dYdkD",
	"action": "savedLocationCard_action__AtKjJ",
	"footer": "savedLocationCard_footer___0wbe",
	"flex": "savedLocationCard_flex__r_cx5",
	"ratingIcon": "savedLocationCard_ratingIcon__LwM_Z",
	"greenDot": "savedLocationCard_greenDot__93PSa",
	"dot": "savedLocationCard_dot__KMQKd",
	"actionButton": "savedLocationCard_actionButton__NbVtM",
	"dropDownButton": "savedLocationCard_dropDownButton__frbkv",
	"shopLogo": "savedLocationCard_shopLogo__KovC3"
};


/***/ }),

/***/ 69:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "savedLocationsContainer_container__vU45A",
	"header": "savedLocationsContainer_header__7hxMJ",
	"title": "savedLocationsContainer_title___8w2W",
	"shimmer": "savedLocationsContainer_shimmer__rkTVv"
};


/***/ }),

/***/ 97847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SavedLocationsContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./components/savedLocationCard/savedLocationCard.module.scss
var savedLocationCard_module = __webpack_require__(33859);
var savedLocationCard_module_default = /*#__PURE__*/__webpack_require__.n(savedLocationCard_module);
// EXTERNAL MODULE: external "remixicon-react/EqualizerFillIcon"
var EqualizerFillIcon_ = __webpack_require__(10865);
var EqualizerFillIcon_default = /*#__PURE__*/__webpack_require__.n(EqualizerFillIcon_);
// EXTERNAL MODULE: external "remixicon-react/MapPin2LineIcon"
var MapPin2LineIcon_ = __webpack_require__(80110);
var MapPin2LineIcon_default = /*#__PURE__*/__webpack_require__.n(MapPin2LineIcon_);
// EXTERNAL MODULE: external "remixicon-react/CheckDoubleLineIcon"
var CheckDoubleLineIcon_ = __webpack_require__(991);
var CheckDoubleLineIcon_default = /*#__PURE__*/__webpack_require__.n(CheckDoubleLineIcon_);
;// CONCATENATED MODULE: ./components/savedLocationCard/savedLocationCard.tsx






function SavedLocationCard({ address , onSelectAddress  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(savedLocationCard_module_default()).wrapper}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (savedLocationCard_module_default()).body,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(savedLocationCard_module_default()).badge} ${address.active ? (savedLocationCard_module_default()).active : ""}`,
                        children: !address.active ? /*#__PURE__*/ jsx_runtime_.jsx((MapPin2LineIcon_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((CheckDoubleLineIcon_default()), {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (savedLocationCard_module_default()).content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (savedLocationCard_module_default()).title,
                                children: address.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (savedLocationCard_module_default()).text,
                                children: address.address?.address
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>onSelectAddress(address),
                className: (savedLocationCard_module_default()).action,
                children: /*#__PURE__*/ jsx_runtime_.jsx((EqualizerFillIcon_default()), {
                    size: 16
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(69709);
// EXTERNAL MODULE: ./containers/savedLocationsContainer/savedLocationsContainer.module.scss
var savedLocationsContainer_module = __webpack_require__(69);
var savedLocationsContainer_module_default = /*#__PURE__*/__webpack_require__.n(savedLocationsContainer_module);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./containers/savedLocationsContainer/savedLocationsContainer.tsx







const AddressModal = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(26), __webpack_require__.e(7567), __webpack_require__.e(1612), __webpack_require__.e(5122), __webpack_require__.e(251), __webpack_require__.e(5567), __webpack_require__.e(6711), __webpack_require__.e(6631)]).then(__webpack_require__.bind(__webpack_require__, 26711)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\savedLocationsContainer\\savedLocationsContainer.tsx -> " + "components/addressModal/addressModal"
        ]
    }
});
function SavedLocationsContainer({ data , loading , active  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const isDesktop = (0,material_.useMediaQuery)("(min-width:1140px)");
    const [selectedAddress, setSelectedAddress] = (0,external_react_.useState)(null);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "white-bg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (savedLocationsContainer_module_default()).container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (savedLocationsContainer_module_default()).header,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (savedLocationsContainer_module_default()).title,
                                children: t("saved.locations")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                            spacing: 2,
                            children: !loading ? data?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(SavedLocationCard, {
                                    onSelectAddress: (value)=>setSelectedAddress(value),
                                    address: item
                                }, item.id)) : Array.from(new Array(4)).map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                    variant: "rectangular",
                                    className: (savedLocationsContainer_module_default()).shimmer
                                }, item))
                        })
                    ]
                }),
                !!selectedAddress && /*#__PURE__*/ jsx_runtime_.jsx(AddressModal, {
                    open: !!selectedAddress,
                    onClose: ()=>{
                        setSelectedAddress(null);
                    },
                    latlng: selectedAddress?.location.join(","),
                    address: selectedAddress?.address?.address,
                    fullScreen: !isDesktop,
                    editedAddress: selectedAddress,
                    onClearAddress: ()=>setSelectedAddress(null)
                })
            ]
        })
    });
}


/***/ }),

/***/ 1510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SavedLocations),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84169);
/* harmony import */ var containers_savedLocationsContainer_savedLocationsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82027);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_address__WEBPACK_IMPORTED_MODULE_6__]);
services_address__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function SavedLocations() {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { data , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)("addresses", ()=>services_address__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAll */ .Z.getAll({
            perPage: 100
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: t("help.center")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_savedLocationsContainer_savedLocationsContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: data,
                loading: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: loader
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    await queryClient.prefetchInfiniteQuery("addresses", ()=>services_address__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAll */ .Z.getAll({
            perPage: 10
        }));
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)))
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82027:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const addressService = {
    create: (data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("dashboard/user/addresses", data).then((res)=>res.data),
    update: (id, data)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`dashboard/user/addresses/${id}`, data).then((res)=>res.data),
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("dashboard/user/addresses", {
            params
        }).then((res)=>res.data),
    setDefault: (id)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`dashboard/user/address/set-active/${id}`).then((res)=>res.data),
    delete: (id)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`dashboard/user/addresses/delete?ids[0]=${id}`).then((res)=>res.data)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addressService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 58557:
/***/ ((module) => {

"use strict";
module.exports = require("google-map-react");

/***/ }),

/***/ 7486:
/***/ ((module) => {

"use strict";
module.exports = require("next-cookies");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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

/***/ 625:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ArrowLeftLineIcon");

/***/ }),

/***/ 991:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CheckDoubleLineIcon");

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

/***/ 5948:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/CompassDiscoverLineIcon");

/***/ }),

/***/ 10865:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/EqualizerFillIcon");

/***/ }),

/***/ 53112:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/ErrorWarningLineIcon");

/***/ }),

/***/ 12564:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/InformationLineIcon");

/***/ }),

/***/ 80110:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/MapPin2LineIcon");

/***/ }),

/***/ 78428:
/***/ ((module) => {

"use strict";
module.exports = require("remixicon-react/Search2LineIcon");

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
var __webpack_exports__ = __webpack_require__.X(0, [5152,5728,4169], () => (__webpack_exec__(1510)));
module.exports = __webpack_exports__;

})();