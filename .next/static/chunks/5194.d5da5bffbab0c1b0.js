(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5194],{83626:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(85893),r=n(6684);function l(){return(0,a.jsx)("span",{style:{display:"block",width:"16px",height:"auto"},children:(0,a.jsx)(r.SA,{})})}},59829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(85893);n(67294);var r=n(43369),l=n.n(r),i=n(61225),o=n(79072),s=n(91655),c=n(87285),d=n.n(c),u=n(41664),v=n.n(u),_=n(95785),m=n(43536),h=n.n(m),f=n(65080),p=n.n(f),x=n(77058),j=n(13372),g=n.n(j),y=n(69826),b=n.n(y),N=n(89670),w=n.n(N);function O(e){let{type:t="bonus",variant:n="default",size:r="medium"}=e,{t:l}=(0,x.$)();switch(t){case"bonus":return(0,a.jsxs)("span",{className:"".concat(p().badge," ").concat(p().bonus," ").concat(p()[n]," ").concat(p()[r]),children:[(0,a.jsx)("span",{className:p().text,children:l("bonus")}),(0,a.jsx)("div",{className:p().icon,children:(0,a.jsx)(g(),{})})]});case"discount":return(0,a.jsxs)("span",{className:"".concat(p().badge," ").concat(p().discount," ").concat(p()[n]," ").concat(p()[r]),children:[(0,a.jsx)("span",{className:p().text,children:l("discount")}),(0,a.jsx)("div",{className:p().icon,children:(0,a.jsx)(b(),{})})]});case"popular":return(0,a.jsxs)("span",{className:"".concat(p().badge," ").concat(p().popular," ").concat(p()[n]," ").concat(p()[r]),children:[(0,a.jsx)("span",{className:p().text,children:l("popular")}),(0,a.jsx)("div",{className:p().icon,children:(0,a.jsx)(w(),{})})]});default:return(0,a.jsx)("span",{})}}function z(e){var t,n,r;let{data:l}=e;return(0,a.jsxs)("div",{className:h().badge,children:[l.is_recommended&&(0,a.jsx)(O,{type:"popular",variant:(null===(t=l.discount)||void 0===t?void 0:t.length)||l.bonus?"circle":"default",size:"large"}),!!(null===(n=l.discount)||void 0===n?void 0:n.length)&&(0,a.jsx)(O,{type:"discount",variant:l.is_recommended||l.bonus?"circle":"default",size:"large"}),!!l.bonus&&(0,a.jsx)(O,{type:"bonus",variant:l.is_recommended||(null===(r=l.discount)||void 0===r?void 0:r.length)?"circle":"default",size:"large"})]})}var Z=n(37562),L=n(18074),k=n(4943),P=n(90026),A=n(73444),C=n(83626);function M(e){var t,n,r,l,i,o;let{data:s}=e,{t:c}=(0,L.Z)(),{isShopClosed:u}=(0,A.Z)(s);return(0,a.jsxs)(v(),{href:"/shop/".concat(s.id),className:"".concat(d().wrapper," ").concat(!s.open||u?d().closed:""),children:[(0,a.jsxs)("div",{className:d().header,children:[(!s.open||u)&&(0,a.jsx)("div",{className:d().closedText,children:c("closed")}),(0,a.jsx)(Z.Z,{fill:!0,src:(0,_.Z)(s.background_img),alt:null===(t=s.translation)||void 0===t?void 0:t.title,sizes:"400px"})]}),(0,a.jsxs)("div",{className:d().body,children:[(0,a.jsxs)("div",{className:d().content,children:[(0,a.jsxs)("h3",{className:d().title,children:[null===(n=s.translation)||void 0===n?void 0:n.title,(null==s?void 0:s.verify)===1&&(0,a.jsx)(C.Z,{})]}),(0,a.jsxs)("div",{className:d().flex,children:[(0,a.jsxs)("span",{className:d().text,children:[(0,a.jsx)(P.Z,{number:s.price})," ",c("delivery.fee")]}),(0,a.jsx)("span",{className:d().dot}),(0,a.jsxs)("span",{className:d().text,children:[null===(r=s.delivery_time)||void 0===r?void 0:r.from,"-",null===(l=s.delivery_time)||void 0===l?void 0:l.to," ",c((0,k.Z)(null===(i=s.delivery_time)||void 0===i?void 0:i.type))]})]})]}),(0,a.jsx)("div",{className:d().rating,children:(null===(o=s.rating_avg)||void 0===o?void 0:o.toFixed(1))||0})]}),(0,a.jsx)("div",{className:d().footer,children:(0,a.jsx)(z,{data:s})})]})}function E(e){let{shops:t,loading:n,title:r,link:c}=e,d=(0,i.Z)("(min-width:1140px)"),{t:u}=(0,x.$)();return(0,a.jsx)("section",{className:"container",style:{display:n||(null==t?void 0:t.length)!==0?"block":"none"},children:(0,a.jsxs)("div",{className:l().container,children:[!!r&&(0,a.jsxs)("div",{className:l().header,children:[(0,a.jsx)("h2",{className:l().title,children:r}),!!c&&!n&&(0,a.jsx)(v(),{className:l().link,href:c,children:u("see.all")})]}),(0,a.jsx)(o.ZP,{container:!0,spacing:d?4:2,children:n?Array.from([,,,,]).map((e,t)=>(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:6,lg:3,children:(0,a.jsx)(s.Z,{variant:"rectangular",className:l().shimmer})},"shops"+t)):null==t?void 0:t.map(e=>(0,a.jsx)(o.ZP,{item:!0,xs:12,sm:6,lg:3,children:(0,a.jsx)(M,{data:e})},e.id))})]})})}},73444:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(67294),r=n(27484),l=n.n(r),i=n(85028),o=n(9473);function s(e){let{order:t}=(0,o.v9)(e=>e.order),{workingSchedule:n,isShopClosed:r,isOpen:s}=(0,a.useMemo)(()=>{var n,a;let r=t.shop_id===(null==e?void 0:e.id)&&!!t.delivery_date,o=r?t.delivery_date:l()().format("YYYY-MM-DD"),s=i.p[r?l()(t.delivery_date).day():l()().day()],c=null==e?void 0:null===(n=e.shop_working_days)||void 0===n?void 0:n.find(e=>e.day===s),d=null==e?void 0:null===(a=e.shop_closed_date)||void 0===a?void 0:a.some(e=>l()(e.day).isSame(r?l()(t.delivery_date):l()())),u=!(null==e?void 0:e.open)||d,v={},_=!1;try{c&&((v={...c}).from=v.from.replace("-",":"),v.to=v.to.replace("-",":"),_=l()().isAfter("".concat(o," ").concat(v.to)))}catch(m){console.log("err => ",m)}return{workingSchedule:v,isShopClosed:v.disabled||u||_,isOpen:Boolean(null==e?void 0:e.open)}},[e,t.delivery_date,t.shop_id]);return{workingSchedule:n,isShopClosed:r,isOpen:s}}},4943:function(e,t,n){"use strict";function a(e){switch(e){case"minute":default:return"min";case"hour":return"h"}}n.d(t,{Z:function(){return a}})},65080:function(e){e.exports={badge:"v4_badge__9ADWl",default:"v4_default__JLjJa",circle:"v4_circle__eRbxm",text:"v4_text__1Dj7F",large:"v4_large__Ll7G5",medium:"v4_medium__jAIdT",icon:"v4_icon__MpBTh"}},87285:function(e){e.exports={wrapper:"v4_wrapper__6nCPj",closed:"v4_closed__rJMxv",header:"v4_header__jVmlz",closedText:"v4_closedText__3fdUs",body:"v4_body__GHvQ4",content:"v4_content__FqpcC",title:"v4_title__VdYK0",flex:"v4_flex__cPYyA",text:"v4_text__KNjw5",rating:"v4_rating__wlSLq",dot:"v4_dot__lAwmp",shopLogo:"v4_shopLogo__Z54na",footer:"v4_footer__wlv9L",greenDot:"v4_greenDot__A8W7d"}},43536:function(e){e.exports={badge:"v4_badge__fiwcD"}},43369:function(e){e.exports={container:"v4_container__slCjP",header:"v4_header__7O5L4",title:"v4_title__pnsu5",link:"v4_link__Tmyxl",shimmer:"v4_shimmer__kHT1Z"}},89670:function(e,t,n){"use strict";var a=n(67294),r=a&&"object"==typeof a&&"default"in a?a:{default:a},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(e,t){var n={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},o=function(e){var t=e.color,n=e.size,a=void 0===n?24:n,o=(e.children,i(e,["color","size","children"])),s="remixicon-icon "+(o.className||"");return r.default.createElement("svg",l({},o,{className:s,width:a,height:a,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),r.default.createElement("path",{d:"M13 10h7l-9 13v-9H4l9-13z"}))},s=r.default.memo?r.default.memo(o):o;e.exports=s},13372:function(e,t,n){"use strict";var a=n(67294),r=a&&"object"==typeof a&&"default"in a?a:{default:a},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(e,t){var n={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},o=function(e){var t=e.color,n=e.size,a=void 0===n?24:n,o=(e.children,i(e,["color","size","children"])),s="remixicon-icon "+(o.className||"");return r.default.createElement("svg",l({},o,{className:s,width:a,height:a,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),r.default.createElement("path",{d:"M20 13v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16zM14.5 2a3.5 3.5 0 0 1 3.163 5.001L21 7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1l3.337.001a3.5 3.5 0 0 1 5.664-3.95A3.48 3.48 0 0 1 14.5 2zm-5 2a1.5 1.5 0 0 0-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 0 0-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 0 0-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986L14.5 4z"}))},s=r.default.memo?r.default.memo(o):o;e.exports=s},69826:function(e,t,n){"use strict";var a=n(67294),r=a&&"object"==typeof a&&"default"in a?a:{default:a},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(e,t){var n={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},o=function(e){var t=e.color,n=e.size,a=void 0===n?24:n,o=(e.children,i(e,["color","size","children"])),s="remixicon-icon "+(o.className||"");return r.default.createElement("svg",l({},o,{className:s,width:a,height:a,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),r.default.createElement("path",{d:"M17.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm-11-11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm12.571-6.485l1.414 1.414L4.93 20.485l-1.414-1.414L19.07 3.515z"}))},s=r.default.memo?r.default.memo(o):o;e.exports=s}}]);