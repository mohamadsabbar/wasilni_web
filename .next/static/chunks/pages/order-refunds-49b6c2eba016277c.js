(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4565,520],{44874:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-refunds",function(){return r(67802)}])},20520:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(85893);r(67294);var a=r(91491),s=r.n(a),i=r(77262),o=r(11163);function c(e){let{text:t,buttonText:r,link:a="/"}=e,{push:c}=(0,o.useRouter)();return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:s().wrapper,children:[(0,n.jsx)("img",{src:"/images/delivery.webp",alt:"Empty"}),(0,n.jsx)("p",{className:s().text,children:t}),!!r&&(0,n.jsx)("div",{className:s().actions,children:(0,n.jsx)(i.Z,{onClick:()=>c(a),children:r})})]})})}},84169:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(85893);r(67294);var a=r(9008),s=r.n(a),i=r(5848),o=r(3075);function c(e){let{title:t,description:r=o.KM,image:a=o.T5,keywords:c=o.cU}=e,l=i.o6,d=t?t+" | "+o.k5:o.k5;return(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:d}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"keywords",content:c}),(0,n.jsx)("meta",{property:"og:type",content:"Website"}),(0,n.jsx)("meta",{name:"title",property:"og:title",content:d}),(0,n.jsx)("meta",{name:"description",property:"og:description",content:r}),(0,n.jsx)("meta",{name:"author",property:"og:author",content:l}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{name:"image",property:"og:image",content:a}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:title",content:d}),(0,n.jsx)("meta",{name:"twitter:description",content:r}),(0,n.jsx)("meta",{name:"twitter:site",content:l}),(0,n.jsx)("meta",{name:"twitter:creator",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:a}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},50530:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(85893);r(67294);var a=r(91249),s=r.n(a),i=r(5152),o=r.n(i);let c=o()(()=>r.e(4474).then(r.bind(r,14474)),{loadableGenerated:{webpack:()=>[14474]}}),l=o()(()=>r.e(9580).then(r.bind(r,89580)),{loadableGenerated:{webpack:()=>[89580]}});function d(e){let{title:t,children:r,refund:a,wallet:i}=e;return(0,n.jsx)("section",{className:s().root,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:s().wrapper,children:[(0,n.jsx)("h1",{className:s().title,children:t}),(0,n.jsx)("div",{className:s().main,children:r}),a&&(0,n.jsx)(c,{}),i&&(0,n.jsx)(l,{})]})})})}},67802:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(85893),a=r(67294),s=r(84169),i=r(50530),o=r(77058),c=r(5152),l=r.n(c),d=r(88767),u=r(24110),m=r.n(u),f=r(91655),p=r(56117),x=r.n(p),h=r(15079),_=r.n(h),v=r(73946),j=r.n(v),g=r(41664),w=r.n(g),N=r(97169),b=r.n(N),y=r(94314),I=r.n(y);function L(e){var t;let{data:r,active:a}=e,{t:s}=(0,o.$)();return(0,n.jsxs)(w(),{href:"/orders/".concat(r.order.id),className:x().wrapper,children:[(0,n.jsxs)("div",{className:x().flex,children:[(0,n.jsx)("div",{className:"".concat(x().badge," ").concat(a?x().active:""),children:a?(0,n.jsx)(I(),{}):"accepted"===r.status?(0,n.jsx)(_(),{}):(0,n.jsx)(j(),{})}),(0,n.jsxs)("div",{className:x().naming,children:[(0,n.jsxs)("h3",{className:x().title,children:["#",r.id]}),(0,n.jsx)("p",{className:x().text,children:s("order.id")})]}),(0,n.jsxs)("div",{className:x().naming,children:[(0,n.jsx)("h3",{className:x().title,children:null===(t=r.order.shop.translation)||void 0===t?void 0:t.title}),(0,n.jsx)("p",{className:x().text,children:r.cause})]})]}),(0,n.jsxs)("div",{className:x().actions,children:[(0,n.jsxs)("div",{className:x().orderInfo,children:[(0,n.jsx)("h5",{className:x().price,children:s(r.status)}),(0,n.jsx)("p",{className:x().text,children:r.answer})]}),(0,n.jsx)("div",{className:x().arrowBtn,children:(0,n.jsx)(b(),{})})]})]})}var O=r(20520);function k(e){let{data:t=[],loading:r=!1}=e,{t:a}=(0,o.$)();return(0,n.jsxs)("div",{className:m().root,children:[r?Array.from([,,,]).map((e,t)=>(0,n.jsx)(f.Z,{variant:"rectangular",className:m().shimmer},"shops"+t)):t.map(e=>(0,n.jsx)(L,{data:e,active:"pending"===e.status},e.id)),!r&&!t.length&&(0,n.jsx)(O.default,{text:a("no.refunds.found")})]})}var Z=r(39480);let E=l()(()=>Promise.resolve().then(r.bind(r,37935)),{loadableGenerated:{webpack:()=>[37935]}}),P=l()(()=>Promise.all([r.e(110),r.e(9072),r.e(2175),r.e(129),r.e(7022),r.e(1018),r.e(5630),r.e(3162)]).then(r.bind(r,16515)),{loadableGenerated:{webpack:()=>[16515]}});function z(e){var t;let{}=e,{t:r,i18n:c}=(0,o.$)(),l=c.language,u=(0,a.useRef)(null),{data:m,error:f,fetchNextPage:p,hasNextPage:x,isFetchingNextPage:h,isLoading:_}=(0,d.useInfiniteQuery)(["refunds",l],e=>{let{pageParam:t=1}=e;return Z.Z.getAll({page:t})},{getNextPageParam(e){if(e.meta.current_page<e.meta.last_page)return e.meta.current_page+1}}),v=(0,a.useCallback)(e=>{let t=e[0];t.isIntersecting&&x&&p()},[x,p]);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(v,{root:null,rootMargin:"20px",threshold:0});u.current&&e.observe(u.current)},[v]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{}),(0,n.jsxs)("div",{className:"bg-white",children:[(0,n.jsxs)(i.Z,{title:r("refunds"),children:[(0,n.jsx)(k,{data:(null==m?void 0:null===(t=m.pages)||void 0===t?void 0:t.flatMap(e=>e.data))||[],loading:_&&!h}),h&&(0,n.jsx)(E,{}),(0,n.jsx)("div",{ref:u})]}),(0,n.jsx)(P,{})]})]})}},39480:function(e,t,r){"use strict";var n=r(25728);t.Z={getAll:e=>n.Z.get("/dashboard/user/order-refunds/paginate",{params:e}),create:e=>n.Z.post("/dashboard/user/order-refunds",e)}},91491:function(e){e.exports={wrapper:"empty_wrapper__nwTin",text:"empty_text__oRHIv",actions:"empty_actions__NNcWA"}},56117:function(e){e.exports={wrapper:"refundListItem_wrapper__cHG_s",flex:"refundListItem_flex__a3sf8",badge:"refundListItem_badge__1w6Zx",active:"refundListItem_active___ZeuE",naming:"refundListItem_naming__aBJSK",title:"refundListItem_title__w2X6Y",text:"refundListItem_text__fhgYi",actions:"refundListItem_actions__tUDc0",orderInfo:"refundListItem_orderInfo__ocRfd",price:"refundListItem_price__hi2Wv",arrowBtn:"refundListItem_arrowBtn__mhASs"}},24110:function(e){e.exports={root:"orderList_root__9MGvz",shimmer:"orderList_shimmer__NvMqh"}},91249:function(e){e.exports={root:"orders_root__HZblW",wrapper:"orders_wrapper__O2mIT",title:"orders_title__5hdk3",main:"orders_main__MbuRG"}},9008:function(e,t,r){e.exports=r(83121)},73946:function(e,t,r){"use strict";var n=r(67294),a=n&&"object"==typeof n&&"default"in n?n:{default:n},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){var r={};for(var n in e)!(t.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},o=function(e){var t=e.color,r=e.size,n=void 0===r?24:r,o=(e.children,i(e,["color","size","children"])),c="remixicon-icon "+(o.className||"");return a.default.createElement("svg",s({},o,{className:c,width:n,height:n,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),a.default.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"}))},c=a.default.memo?a.default.memo(o):o;e.exports=c},94314:function(e,t,r){"use strict";var n=r(67294),a=n&&"object"==typeof n&&"default"in n?n:{default:n},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){var r={};for(var n in e)!(t.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},o=function(e){var t=e.color,r=e.size,n=void 0===r?24:r,o=(e.children,i(e,["color","size","children"])),c="remixicon-icon "+(o.className||"");return a.default.createElement("svg",s({},o,{className:c,width:n,height:n,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),a.default.createElement("path",{d:"M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"}))},c=a.default.memo?a.default.memo(o):o;e.exports=c}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=44874)}),_N_E=e.O()}]);