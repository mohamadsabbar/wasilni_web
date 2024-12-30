"use strict";
exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 4387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hz": () => (/* binding */ addMessage),
/* harmony export */   "Nv": () => (/* binding */ setChats),
/* harmony export */   "Z": () => (/* binding */ setMessages),
/* harmony export */   "Z1": () => (/* binding */ selectChat),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eb": () => (/* binding */ setCurrentChat),
/* harmony export */   "nd": () => (/* binding */ setRoleId),
/* harmony export */   "zR": () => (/* binding */ setNewMessage)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    chats: [],
    messages: [],
    currentChat: null,
    newMessage: "",
    roleId: "admin"
};
const chatSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "chat",
    initialState,
    reducers: {
        setChats (state, action) {
            state.chats = action.payload;
        },
        setMessages (state, action) {
            state.messages = action.payload;
        },
        setCurrentChat (state, action) {
            state.currentChat = action.payload;
        },
        addMessage (state, action) {
            state.messages.push(action.payload);
        },
        setNewMessage (state, action) {
            state.newMessage = action.payload;
        },
        setRoleId (state, action) {
            state.roleId = action.payload;
        }
    }
});
const { setChats , setMessages , setCurrentChat , addMessage , setNewMessage , setRoleId  } = chatSlice.actions;
const selectChat = (state)=>state.chat;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chatSlice.reducer);


/***/ }),

/***/ 23650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Zp": () => (/* binding */ setDeliveryDate),
/* harmony export */   "bn": () => (/* binding */ clearOrder),
/* harmony export */   "zT": () => (/* binding */ selectOrder)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    order: {}
};
const orderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "order",
    initialState,
    reducers: {
        setDeliveryDate (state, action) {
            const { payload  } = action;
            state.order.delivery_date = payload.delivery_date;
            state.order.delivery_time = payload.delivery_time;
            state.order.shop_id = payload.shop_id;
        },
        clearOrder (state) {
            state.order = {};
        }
    }
});
const { setDeliveryDate , clearOrder  } = orderSlice.actions;
const selectOrder = (state)=>state.order;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderSlice.reducer);


/***/ }),

/***/ 20330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AQ": () => (/* binding */ clearSearch),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ag": () => (/* binding */ selectSearchHistory),
/* harmony export */   "fy": () => (/* binding */ addToSearch),
/* harmony export */   "iU": () => (/* binding */ removeFromSearch)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    searchHistory: []
};
const searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        addToSearch (state, action) {
            const { payload  } = action;
            const existingIndex = state.searchHistory.findIndex((item)=>item === payload);
            if (existingIndex < 0) {
                state.searchHistory.unshift(payload);
            }
            if (state.searchHistory.length > 5) {
                state.searchHistory.pop();
            }
        },
        removeFromSearch (state, action) {
            const { payload  } = action;
            state.searchHistory.map((item)=>{
                if (item === payload) {
                    const nextCartItems = state.searchHistory.filter((item)=>item !== payload);
                    state.searchHistory = nextCartItems;
                }
                return state;
            });
        },
        clearSearch (state) {
            state.searchHistory = [];
        }
    }
});
const { addToSearch , removeFromSearch , clearSearch  } = searchSlice.actions;
const selectSearchHistory = (state)=>state.search.searchHistory;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);


/***/ }),

/***/ 35318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ persistor),
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(98936);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
// EXTERNAL MODULE: ./redux/slices/cart.ts
var cart = __webpack_require__(13508);
// EXTERNAL MODULE: ./redux/slices/currency.ts
var currency = __webpack_require__(64698);
// EXTERNAL MODULE: ./redux/slices/favoriteRestaurants.ts
var favoriteRestaurants = __webpack_require__(67560);
// EXTERNAL MODULE: ./redux/slices/shopFilter.ts
var shopFilter = __webpack_require__(5215);
// EXTERNAL MODULE: ./redux/slices/userCart.ts
var userCart = __webpack_require__(96477);
// EXTERNAL MODULE: ./redux/slices/product.ts
var product = __webpack_require__(8423);
// EXTERNAL MODULE: ./redux/slices/chat.ts
var chat = __webpack_require__(4387);
// EXTERNAL MODULE: ./redux/slices/search.ts
var search = __webpack_require__(20330);
// EXTERNAL MODULE: ./redux/slices/order.ts
var order = __webpack_require__(23650);
;// CONCATENATED MODULE: ./redux/rootReducer.ts









const rootReducer = {
    liked: favoriteRestaurants/* default */.ZP,
    cart: cart/* default */.ZP,
    filter: shopFilter/* default */.ZP,
    currency: currency/* default */.ZP,
    userCart: userCart/* default */.ZP,
    product: product/* default */.ZP,
    chat: chat/* default */.ZP,
    search: search/* default */.ZP,
    order: order/* default */.ZP
};
/* harmony default export */ const redux_rootReducer = (rootReducer);

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(14161);
;// CONCATENATED MODULE: ./redux/store.ts




const persistConfig = {
    key: "root",
    version: 1,
    storage: (storage_default()),
    whitelist: [
        "liked",
        "currency",
        "search"
    ],
    blacklist: [
        "cart",
        "userCart"
    ]
};
const persistedReducer = (0,external_redux_persist_.persistReducer)(persistConfig, (0,toolkit_.combineReducers)(redux_rootReducer));
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_.FLUSH,
                    external_redux_persist_.REHYDRATE,
                    external_redux_persist_.PAUSE,
                    external_redux_persist_.PERSIST,
                    external_redux_persist_.PURGE,
                    external_redux_persist_.REGISTER
                ]
            }
        }),
    devTools: "production" !== "production"
});
const persistor = (0,external_redux_persist_.persistStore)(store);


/***/ }),

/***/ 50849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "P4": () => (/* binding */ createChat),
/* harmony export */   "ZP": () => (/* binding */ app),
/* harmony export */   "bG": () => (/* binding */ sendMessage),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60401);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23745);
/* harmony import */ var constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3075);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63392);
/* harmony import */ var redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35318);
/* harmony import */ var redux_slices_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4387);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, components_alert_toast__WEBPACK_IMPORTED_MODULE_7__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, components_alert_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const firebaseConfig = {
    apiKey: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .API_KEY */ .$h,
    authDomain: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_DOMAIN */ .RN,
    projectId: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .PROJECT_ID */ .NX,
    storageBucket: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .STORAGE_BUCKET */ .$6,
    messagingSenderId: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .MESSAGING_SENDER_ID */ .uO,
    appId: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .APP_ID */ .AF,
    measurementId: constants_config__WEBPACK_IMPORTED_MODULE_2__/* .MEASUREMENT_ID */ .U$
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(app);

const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(app);
(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "messages"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("created_at", "asc")), (querySnapshot)=>{
    const messages = querySnapshot.docs.map((x)=>({
            id: x.id,
            ...x.data(),
            created_at: String(new Date(x.data().created_at?.seconds * 1000))
        }));
    redux_store__WEBPACK_IMPORTED_MODULE_5__/* .store.dispatch */ .h.dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_6__/* .setMessages */ .Z)(messages));
});
(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "chats"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("created_at", "asc")), (querySnapshot)=>{
    const chats = querySnapshot.docs.map((x)=>({
            id: x.id,
            ...x.data(),
            created_at: String(new Date(x.data().created_at?.seconds * 1000))
        }));
    redux_store__WEBPACK_IMPORTED_MODULE_5__/* .store.dispatch */ .h.dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_6__/* .setChats */ .Nv)(chats));
});
async function sendMessage(payload) {
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "messages"), {
            ...payload,
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
        });
    } catch (err) {
        console.log("err => ", err);
        (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .error */ .vU)("chat error");
    }
}
async function createChat(payload) {
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "chats"), {
            ...payload,
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
        });
    } catch (err) {
        console.log("err => ", err);
        (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_7__/* .error */ .vU)("chat error");
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;