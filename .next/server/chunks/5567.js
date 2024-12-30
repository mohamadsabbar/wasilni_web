exports.id = 5567;
exports.ids = [5567];
exports.modules = {

/***/ 46833:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "map_root__3qcrq",
	"marker": "map_marker__EnBz1",
	"floatCard": "map_floatCard__1zZP1",
	"price": "map_price__CTP0I",
	"point": "map_point__GfLMi"
};


/***/ }),

/***/ 25567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58557);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46833);
/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_map_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5848);
/* harmony import */ var utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60291);
/* harmony import */ var components_shopLogoBackground_shopLogoBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45122);
/* harmony import */ var utils_handleGooglePlacesPress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47250);
/* harmony import */ var components_price_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90026);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_4__]);
utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ 








const Marker = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_map_module_scss__WEBPACK_IMPORTED_MODULE_7___default().point),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/images/marker.png",
            width: 32,
            alt: "Location"
        })
    });
const ShopMarker = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_map_module_scss__WEBPACK_IMPORTED_MODULE_7___default().floatCard),
        children: [
            props?.price && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_map_module_scss__WEBPACK_IMPORTED_MODULE_7___default().price),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_price_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    number: props.price
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_map_module_scss__WEBPACK_IMPORTED_MODULE_7___default().marker),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shopLogoBackground_shopLogoBackground__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    data: props.shop,
                    size: "small"
                })
            })
        ]
    });
const options = {
    fields: [
        "address_components",
        "geometry"
    ],
    types: [
        "address"
    ]
};
function Map({ location , setLocation =()=>{} , readOnly =false , shop , inputRef , setAddress , price , drawLine , defaultZoom =15  }) {
    const autoCompleteRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [maps, setMaps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    async function onChangeMap(map) {
        if (readOnly) {
            return;
        }
        const location = {
            lat: map.center.lat(),
            lng: map.center.lng()
        };
        setLocation(location);
        const address = await (0,utils_getAddressFromLocation__WEBPACK_IMPORTED_MODULE_4__/* .getAddressFromLocation */ .K)(`${location.lat},${location.lng}`);
        if (inputRef?.current?.value) inputRef.current.value = address;
        if (setAddress) setAddress(address);
    }
    const handleApiLoaded = (map, maps)=>{
        autoComplete(map, maps);
        setMap(map);
        setMaps(maps);
        if (shop) {
            const shopLocation = {
                lat: Number(shop.location?.latitude) || 0,
                lng: Number(shop.location?.longitude) || 0
            };
            const markers = [
                location,
                shopLocation
            ];
            let bounds = new maps.LatLngBounds();
            for(var i = 0; i < markers.length; i++){
                bounds.extend(markers[i]);
            }
            map.fitBounds(bounds);
        }
    };
    function autoComplete(map, maps) {
        if (inputRef) {
            autoCompleteRef.current = new maps.places.Autocomplete(inputRef.current, options);
            autoCompleteRef.current.addListener("place_changed", async function() {
                const place = await autoCompleteRef.current.getPlace();
                const address = (0,utils_handleGooglePlacesPress__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(place);
                const coords = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                setLocation(coords);
                if (setAddress) setAddress(address);
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (shop && maps) {
            const shopLocation = {
                lat: Number(shop.location?.latitude) || 0,
                lng: Number(shop.location?.longitude) || 0
            };
            const markers = [
                location,
                shopLocation
            ];
            let bounds = new maps.LatLngBounds();
            for(var i = 0; i < markers.length; i++){
                bounds.extend(markers[i]);
            }
            map.fitBounds(bounds);
        }
    }, [
        location,
        shop?.location,
        drawLine,
        map,
        maps
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_map_module_scss__WEBPACK_IMPORTED_MODULE_7___default().root),
        children: [
            !readOnly && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_map_module_scss__WEBPACK_IMPORTED_MODULE_7___default().marker),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/marker.png",
                    width: 32,
                    alt: "Location"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((google_map_react__WEBPACK_IMPORTED_MODULE_2___default()), {
                bootstrapURLKeys: {
                    key: constants_constants__WEBPACK_IMPORTED_MODULE_3__/* .MAP_API_KEY */ .kr || "",
                    libraries: [
                        "places"
                    ]
                },
                zoom: defaultZoom,
                center: location,
                onDragEnd: onChangeMap,
                yesIWantToUseGoogleMapApiInternals: true,
                onGoogleApiLoaded: ({ map , maps  })=>handleApiLoaded(map, maps),
                options: {
                    fullscreenControl: readOnly
                },
                children: [
                    readOnly && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Marker, {
                        lat: location.lat,
                        lng: location.lng
                    }),
                    !!shop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopMarker, {
                        lat: shop.location?.latitude || 0,
                        lng: shop.location?.longitude || 0,
                        shop: shop,
                        price: price
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ handleGooglePlacesPress)
/* harmony export */ });
function handleGooglePlacesPress(result) {
    const map = {
        street_number: "streetNumber",
        route: "streetName",
        sublocality_level_1: "city",
        locality: "city1",
        administrative_area_level_1: "state",
        postal_code: "postalCode",
        country: "country"
    };
    const brokenDownAddress = {};
    result.address_components.forEach((component)=>{
        brokenDownAddress[map[component.types[0]]] = component.long_name;
    });
    const concatedAddress = [
        brokenDownAddress?.streetName,
        brokenDownAddress?.city1,
        brokenDownAddress?.country
    ];
    return concatedAddress.join(", ");
}


/***/ })

};
;