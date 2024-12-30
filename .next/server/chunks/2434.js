"use strict";
exports.id = 2434;
exports.ids = [2434];
exports.modules = {

/***/ 11497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Channel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(69709);
;// CONCATENATED MODULE: ./components/chat/chatDate.tsx




function ChatDate({ date  }) {
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const isCurrentDay = external_dayjs_default()(date).isSame(external_dayjs_default()(), "day");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "chat-date",
        "data-date": isCurrentDay ? t("today") : external_dayjs_default()(date).format("D MMM")
    });
}

// EXTERNAL MODULE: external "@chatscope/chat-ui-kit-react"
var chat_ui_kit_react_ = __webpack_require__(1380);
;// CONCATENATED MODULE: ./components/chat/adminMessage.tsx




function AdminMessage({ text , time , chat_img  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "admin-message-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `admin-message ${chat_img && "chat-image"}`,
            children: [
                chat_img && /*#__PURE__*/ jsx_runtime_.jsx(chat_ui_kit_react_.Message, {
                    type: "image",
                    model: {
                        position: "normal",
                        direction: "incoming",
                        payload: {
                            src: chat_img,
                            alt: "Joe avatar",
                            width: "100%",
                            height: "100%"
                        }
                    }
                }),
                text && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text",
                    children: text
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "time",
                    children: external_dayjs_default()(new Date(time)).format("HH:mm")
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "remixicon-react/CheckDoubleLineIcon"
var CheckDoubleLineIcon_ = __webpack_require__(991);
var CheckDoubleLineIcon_default = /*#__PURE__*/__webpack_require__.n(CheckDoubleLineIcon_);
;// CONCATENATED MODULE: ./components/chat/userMessage.tsx





function UserMessage({ text , time , status ="" , chat_img  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "user-sms-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `user-message ${chat_img && "chat-image"}`,
            children: [
                chat_img && /*#__PURE__*/ jsx_runtime_.jsx(chat_ui_kit_react_.Message, {
                    type: "image",
                    model: {
                        position: "normal",
                        direction: "incoming",
                        payload: {
                            src: chat_img,
                            alt: "Joe avatar",
                            width: "100%",
                            height: "100%"
                        }
                    }
                }),
                text && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text",
                    children: text
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "time",
                    children: external_dayjs_default()(new Date(time)).format("HH:mm")
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "double-check",
                    children: status === "pending" ? "" : /*#__PURE__*/ jsx_runtime_.jsx((CheckDoubleLineIcon_default()), {
                        size: 16
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/chat/channel.tsx





function Channel({ groupMessages , messageEndRef  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "chat-box",
        children: [
            groupMessages.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        item.date !== "Invalid Date" ? /*#__PURE__*/ jsx_runtime_.jsx(ChatDate, {
                            date: item.date
                        }) : "",
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "sms-box",
                            children: item.messages.map((item)=>Boolean(item.sender) ? /*#__PURE__*/ jsx_runtime_.jsx(UserMessage, {
                                    text: item.chat_content,
                                    time: item.created_at,
                                    status: item.status,
                                    chat_img: item.chat_img
                                }, item.created_at) : /*#__PURE__*/ jsx_runtime_.jsx(AdminMessage, {
                                    text: item.chat_content,
                                    time: item.created_at,
                                    chat_img: item.chat_img
                                }, item.created_at))
                        })
                    ]
                }, key)),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: messageEndRef
            })
        ]
    });
}


/***/ }),

/***/ 2434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1380);
/* harmony import */ var _chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11497);
/* harmony import */ var redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4387);
/* harmony import */ var services_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50849);
/* harmony import */ var utils_scrollTo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8703);
/* harmony import */ var utils_getMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86633);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _uploadMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62779);
/* harmony import */ var constants_imageFormats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93394);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37490);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34349);
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29969);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var containers_modal_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47567);
/* harmony import */ var containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(30182);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_firebase__WEBPACK_IMPORTED_MODULE_5__, _uploadMedia__WEBPACK_IMPORTED_MODULE_8__, components_alert_toast__WEBPACK_IMPORTED_MODULE_16__]);
([services_firebase__WEBPACK_IMPORTED_MODULE_5__, _uploadMedia__WEBPACK_IMPORTED_MODULE_8__, components_alert_toast__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















function Chat() {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_13__.useMediaQuery)("(min-width:1140px)");
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { pathname , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .T)();
    const [modal, handleOpenModal, handleCloseModal] = (0,hooks_useModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const messageEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const isShop = pathname === "/restaurant/[id]" || pathname === "/shop/[id]";
    const isOrder = pathname === "/orders/[id]";
    const shopId = String(query.id);
    const { chats , currentChat , newMessage , roleId , messages  } = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_11__/* .useAppSelector */ .C)(redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__/* .selectChat */ .Z1);
    const { user  } = (0,contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_12__/* .useAuth */ .a)();
    const groupMessages = (0,utils_getMessages__WEBPACK_IMPORTED_MODULE_6__/* .getMessages */ ._)({
        currentChat,
        messages
    });
    const handleChat = (myChat)=>{
        if (user && chats) {
            if (myChat) {
                dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__/* .setCurrentChat */ .eb)(myChat));
            } else {
                (0,services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .createChat */ .P4)({
                    shop_id: -1,
                    roleId: isShop ? shopId : isOrder ? roleId : "admin",
                    user: {
                        id: user.id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        img: user?.img || ""
                    }
                });
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        inputRef,
        currentChat
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const myChat = chats.filter((item)=>item?.user?.id == user.id).find((item)=>isShop ? item.roleId == shopId : isOrder ? item.roleId == roleId : item.roleId == "admin");
        handleChat(myChat);
    }, [
        chats
    ]);
    function handleFile(event) {
        if (!constants_imageFormats__WEBPACK_IMPORTED_MODULE_17__/* .SUPPORTED_FORMATS.includes */ .z.includes(event.target.files[0].type)) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_16__/* .warning */ .Kp)("Supported only image formats!");
        } else {
            setFile(event.target.files[0]);
            const reader = new FileReader();
            reader.onload = ()=>{
                if (reader.readyState === 2) {
                    setUrl(String(reader.result));
                    handleOpenModal();
                }
            };
            reader?.readAsDataURL(event.target.files[0]);
        }
    }
    const handleOnChange = (value)=>{
        dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__/* .setNewMessage */ .zR)(value));
    };
    const handleOnSubmit = (url)=>{
        const isFile = url?.includes("https");
        const trimmedMessage = newMessage.replace(/\&nbsp;/g, "").replace(/<[^>]+>/g, "").trim();
        const payload = {
            chat_content: trimmedMessage,
            chat_id: currentChat?.id || 0,
            sender: 1,
            unread: true,
            roleId: isShop ? shopId : isOrder ? roleId : "admin",
            created_at: new Date().toString()
        };
        if (isFile) payload.chat_img = url;
        if (trimmedMessage || isFile) {
            (0,services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .sendMessage */ .bG)(payload);
            dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__/* .setNewMessage */ .zR)(""));
            dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__/* .addMessage */ .Hz)({
                ...payload,
                status: "pending"
            }));
            const topPosition = messageEndRef.current?.offsetTop || 0;
            const container = document.querySelector(".message-list .scrollbar-container");
            (0,utils_scrollTo__WEBPACK_IMPORTED_MODULE_18__/* .scrollTo */ .X)(container, topPosition - 30, 600);
            setUrl("");
            handleCloseModal();
        }
    };
    const onAttachClick = ()=>{
        nextRef.current?.click();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "chat-drawer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "title",
                    children: t("help.center")
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chat-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        ref: nextRef,
                        onChange: handleFile,
                        accept: "image/jpg, image/jpeg, image/png, image/svg+xml, image/svg",
                        className: "d-none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {
                        responsive: true,
                        className: "chat-container rounded",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_2__.ChatContainer, {
                            className: "chat-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_2__.MessageList, {
                                    className: "message-list",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_channel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        groupMessages: groupMessages,
                                        messageEndRef: messageEndRef
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_2__.MessageInput, {
                                    ref: inputRef,
                                    value: newMessage,
                                    onChange: handleOnChange,
                                    onSend: handleOnSubmit,
                                    placeholder: t("message"),
                                    className: "chat-input",
                                    attachButton: true,
                                    onAttachClick: onAttachClick
                                })
                            ]
                        })
                    }),
                    isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_modal_modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        open: modal,
                        onClose: handleCloseModal,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uploadMedia__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            url: url,
                            file: file,
                            handleOnSubmit: handleOnSubmit,
                            handleClose: handleCloseModal
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(containers_drawer_mobileDrawer__WEBPACK_IMPORTED_MODULE_15__["default"], {
                        open: modal,
                        onClose: handleCloseModal,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uploadMedia__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            url: url,
                            file: file,
                            handleOnSubmit: handleOnSubmit,
                            handleClose: handleCloseModal
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UploadMedia)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_inputs_textInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30251);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63392);
/* harmony import */ var redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4387);
/* harmony import */ var services_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50849);
/* harmony import */ var components_button_primaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77262);
/* harmony import */ var components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80892);
/* harmony import */ var components_alert_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74621);
/* harmony import */ var hooks_useRedux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34349);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_storage__WEBPACK_IMPORTED_MODULE_3__, services_firebase__WEBPACK_IMPORTED_MODULE_5__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__]);
([firebase_storage__WEBPACK_IMPORTED_MODULE_3__, services_firebase__WEBPACK_IMPORTED_MODULE_5__, components_alert_toast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function UploadMedia({ url , setPercent =(num)=>{} , file , handleOnSubmit , handleClose  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const dispatch = (0,hooks_useRedux__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .T)();
    const handleUpload = ()=>{
        if (!file) {
            (0,components_alert_toast__WEBPACK_IMPORTED_MODULE_8__/* .warning */ .Kp)("Please upload an image first!");
        }
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .storage */ .tO, `/files/${file.name}`);
        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytesResumable)(storageRef, file);
        uploadTask.on("state_changed", (snapshot)=>{
            const percent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setPercent(percent);
            if (percent === 100) {}
        }, (err)=>console.log(err), ()=>{
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(uploadTask.snapshot.ref).then((url)=>{
                handleOnSubmit(url);
            });
        });
    };
    const handleChange = (text)=>{
        dispatch((0,redux_slices_chat__WEBPACK_IMPORTED_MODULE_4__/* .setNewMessage */ .zR)(text));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "upload-media",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "upload-form",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: url
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inputs_textInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: "Caption",
                        onChange: (e)=>{
                            handleChange(e.target.value);
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "footer-btns",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_secondaryButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            type: "button",
                            onClick: handleClose,
                            children: t("cancel")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_primaryButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            type: "button",
                            onClick: handleUpload,
                            children: t("send")
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ SUPPORTED_FORMATS)
/* harmony export */ });
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/svg"
];


/***/ }),

/***/ 86633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getMessages)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

function getMessages(chat) {
    const { messages , currentChat  } = chat;
    if (!currentChat) return [];
    const groups = messages.filter((item)=>item.chat_id === currentChat.id).reduce((groups, item)=>{
        const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date(item.created_at)).format("MM-DD-YYYY");
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(item);
        return groups;
    }, {});
    const groupArrays = Object.keys(groups).map((date)=>{
        return {
            date,
            messages: groups[date]
        };
    });
    return groupArrays;
}


/***/ }),

/***/ 8703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ scrollTo)
/* harmony export */ });
//@ts-nocheck
function scrollTo(element, to, duration) {
    var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
    var animateScroll = function() {
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
//t = current time
//b = start value
//c = change in value
//d = duration
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}


/***/ })

};
;