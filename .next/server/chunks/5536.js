exports.id = 5536;
exports.ids = [5536];
exports.modules = {

/***/ 83427:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "announcementList_list__dp6qw",
	"card": "announcementList_card__n9UZo",
	"content": "announcementList_content__AyFKB",
	"title": "announcementList_title__DlU4U",
	"button": "announcementList_button__7k5Do",
	"icon": "announcementList_icon__5InL7",
	"text": "announcementList_text__FBWBw",
	"img": "announcementList_img__OBXpO",
	"yellow": "announcementList_yellow__KT8mn",
	"blue": "announcementList_blue__RdxiH",
	"pink": "announcementList_pink__06QRK"
};


/***/ }),

/***/ 8519:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "homev4_container__zYI1t",
	"sectionTitle": "homev4_sectionTitle__fcVvP",
	"sectionSubTitle": "homev4_sectionSubTitle__srX3C",
	"heading": "homev4_heading__ELP2U",
	"link": "homev4_link__gMuC7"
};


/***/ }),

/***/ 9180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnnouncementList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83427);
/* harmony import */ var _announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






function AnnouncementList({ data  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().list),
            children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card)} ${(_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[item.color]}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    className: (_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                                    children: t(item.title)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/parcel-checkout",
                                    className: (_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)} ${(_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[item.color]}`,
                                            children: item.icon
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text),
                                            children: t(item.button)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: (_announcementList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().img),
                            src: item.img,
                            alt: item.title,
                            width: 150,
                            height: 140
                        })
                    ]
                }, item.title))
        })
    });
}


/***/ }),

/***/ 25536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Homev4)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56457);
/* harmony import */ var _homev4_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8519);
/* harmony import */ var _homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var services_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94910);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_shop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1612);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6684);
/* harmony import */ var containers_announcementList_announcementList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9180);
/* harmony import */ var services_story__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13443);
/* harmony import */ var hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2950);
/* harmony import */ var components_loader_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37935);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_category__WEBPACK_IMPORTED_MODULE_4__, services_banner__WEBPACK_IMPORTED_MODULE_5__, services_shop__WEBPACK_IMPORTED_MODULE_7__, services_story__WEBPACK_IMPORTED_MODULE_11__]);
([services_category__WEBPACK_IMPORTED_MODULE_4__, services_banner__WEBPACK_IMPORTED_MODULE_5__, services_shop__WEBPACK_IMPORTED_MODULE_7__, services_story__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const announcements = [
    {
        title: "door.to.door.delivery",
        button: "we.work.for.you",
        color: "yellow",
        img: "/images/v4-announcement1.png",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_9__/* .EveryDay */ .ku, {})
    },
    {
        title: "discount.for.first.order",
        button: "for.all.buyers",
        color: "blue",
        img: "/images/v4-announcement2.png",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_9__/* .Gift */ .nc, {})
    },
    {
        title: "delivery.in.time",
        button: "until.date",
        color: "pink",
        img: "/images/v4-announcement3.png",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_9__/* .Flash */ .Tx, {})
    }
];
const ShopCategoryList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 8468).then(__webpack_require__.bind(__webpack_require__, 8468)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev4\\homev4.tsx -> " + "containers/shopCategoryList/v4"
        ]
    }
});
const BannerList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 697).then(__webpack_require__.bind(__webpack_require__, 20697)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev4\\homev4.tsx -> " + "containers/banner/v4"
        ]
    }
});
const BrandShopList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 5659).then(__webpack_require__.bind(__webpack_require__, 65659)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev4\\homev4.tsx -> " + "containers/brandShopList/v4"
        ]
    }
});
const StoryList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 3310).then(__webpack_require__.bind(__webpack_require__, 43310)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev4\\homev4.tsx -> " + "containers/storyList/v4"
        ]
    }
});
const ShopList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(3444), __webpack_require__.e(9829)]).then(__webpack_require__.bind(__webpack_require__, 59829)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev4\\homev4.tsx -> " + "containers/shopList/v4"
        ]
    }
});
const AdList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/* import() */ 7756).then(__webpack_require__.bind(__webpack_require__, 87756)), {
    loadableGenerated: {
        modules: [
            "..\\containers\\homev4\\homev4.tsx -> " + "containers/adList/v4"
        ]
    }
});
function Homev4() {
    const loader = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const locale = i18n.language;
    const location = (0,hooks_useUserLocation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const { settings  } = (0,contexts_settings_settings_context__WEBPACK_IMPORTED_MODULE_15__/* .useSettings */ .r)();
    const activeParcel = Number(settings?.active_parcel) === 1;
    const { data: shopCategoryList , isLoading: shopCategoryLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "shopcategory",
        locale
    ], ()=>services_category__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getAllShopCategories */ .Z.getAllShopCategories());
    const { data: banners , isLoading: bannerLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "banners",
        locale
    ], ()=>services_banner__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAll */ .Z.getAll());
    const { data: brandShops , isLoading: brandShopLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "brandshops",
        locale,
        location
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAllShops */ .Z.getAllShops(qs__WEBPACK_IMPORTED_MODULE_8___default().stringify({
            verify: "1",
            address: location,
            open: "1"
        })));
    const { data: stories , isLoading: isStoriesLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "stories",
        locale,
        location
    ], ()=>services_story__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getAll */ .Z.getAll({
            address: location
        }));
    const { data: ads , isLoading: adListLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "ads",
        locale,
        location
    ], ()=>services_banner__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAllAds */ .Z.getAllAds({
            perPage: 6,
            address: location
        }));
    const { data: shops , isLoading: isShopLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "shops",
        locale,
        location
    ], ()=>services_shop__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getRecommended */ .Z.getRecommended({
            open: 1,
            address: location
        }));
    const { data: nearbyShops , isLoading: nearByShopsLoading , fetchNextPage , hasNextPage , isFetchingNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)([
        "nearbyshops",
        locale,
        location
    ], ({ pageParam =1  })=>services_shop__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getAllShops */ .Z.getAllShops(qs__WEBPACK_IMPORTED_MODULE_8___default().stringify({
            page: pageParam,
            address: location,
            open: 1
        })), {
        getNextPageParam: (lastPage)=>{
            if (lastPage.meta.current_page < lastPage.meta.last_page) {
                return lastPage.meta.current_page + 1;
            }
            return undefined;
        }
    });
    const nearbyShopList = nearbyShops?.pages?.flatMap((item)=>item.data) || [];
    const handleObserver = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((entries)=>{
        const target = entries[0];
        if (target.isIntersecting && hasNextPage) {
            fetchNextPage();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [
        handleObserver
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopCategoryList, {
                data: shopCategoryList?.data?.sort((a, b)=>a?.input - b?.input) || [],
                loading: shopCategoryLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerList, {
                data: banners?.data || [],
                loading: bannerLoading
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().heading)} container`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sectionTitle),
                        children: t("choose.by.brand")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
                        className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().link),
                        href: "/shop?verify=1",
                        children: t("see.all")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BrandShopList, {
                data: brandShops?.data || [],
                loading: brandShopLoading
            }),
            activeParcel && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sectionTitle),
                        children: t("especially.for.you")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sectionSubTitle),
                        children: t("especially.for.you.description")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_announcementList_announcementList__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: announcements
                    })
                ]
            }),
            stories?.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sectionTitle),
                children: t("stories.widget")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoryList, {
                data: stories,
                loading: isStoriesLoading
            }),
            ads?.data?.length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().heading)} container`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().sectionTitle),
                        children: t("explore")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_14___default()), {
                        className: (_homev4_module_scss__WEBPACK_IMPORTED_MODULE_16___default().link),
                        href: "ads",
                        children: t("see.all")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdList, {
                data: ads?.data,
                loading: adListLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopList, {
                shops: shops?.data,
                link: "/shop?filter=recomended",
                title: t("trending"),
                loading: isShopLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopList, {
                title: t("popular.near.you"),
                shops: nearbyShopList,
                link: "/shop?filter=popular",
                loading: nearByShopsLoading && !isFetchingNextPage
            }),
            isFetchingNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_loader_loader__WEBPACK_IMPORTED_MODULE_13__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: loader
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const bannerService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/banners/paginate`, {
            params
        }),
    getById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/banners/${id}`, {
            params
        }),
    getAllAds: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/rest/banners-ads", {
            params
        }),
    getAdById: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/banners-ads/${id}`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const categoryService = {
    getAllShopCategories: (params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/categories/paginate`, {
            params: {
                ...params,
                type: "shop"
            }
        }),
    getAllSubCategories: (categoryId, params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`rest/categories/sub-shop/${categoryId}`, {
            params
        }),
    getAllProductCategories: (id, params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/shops/${id}/categories`, {
            params
        }),
    getAllRecipeCategories: (params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/categories/paginate`, {
            params: {
                ...params,
                type: "receipt"
            }
        }),
    getById: (id, params = {})=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/categories/${id}`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_request__WEBPACK_IMPORTED_MODULE_0__]);
_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const storyService = {
    getAll: (params)=>_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/rest/stories/paginate`, {
            params
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storyService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;