(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5354],{79792:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careers/[id]",function(){return n(36465)}])},84169:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(85893);n(67294);var i=n(9008),a=n.n(i),o=n(5848),s=n(3075);function c(t){let{title:e,description:n=s.KM,image:i=s.T5,keywords:c=s.cU}=t,l=o.o6,d=e?e+" | "+s.k5:s.k5;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:d}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{name:"keywords",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"Website"}),(0,r.jsx)("meta",{name:"title",property:"og:title",content:d}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:n}),(0,r.jsx)("meta",{name:"author",property:"og:author",content:l}),(0,r.jsx)("meta",{property:"og:site_name",content:l}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:i}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:title",content:d}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:site",content:l}),(0,r.jsx)("meta",{name:"twitter:creator",content:l}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},57227:function(t,e,n){"use strict";n.d(e,{Z:function(){return j}});var r=n(85893);n(67294);var i=n(23593),a=n.n(i),o=n(75688),s=n.n(o),c=n(77058),l=n(94660),d=n(5152),u=n.n(d),p=n(80423),m=n(37490),x=n(26230),v=n.n(x),_=n(29969),h=n(73714);let f=u()(()=>n.e(7107).then(n.bind(n,47107)),{loadableGenerated:{webpack:()=>[47107]}});function j(t){let{}=t,{t:e}=(0,c.$)(),[n,i,o]=(0,m.Z)(),{isAuthenticated:d}=(0,_.a)();return(0,r.jsxs)("div",{className:a().wrapper,children:[(0,r.jsxs)("div",{className:a().flex,children:[(0,r.jsx)("div",{className:a().iconWrapper,children:(0,r.jsx)(s(),{})}),(0,r.jsxs)("div",{className:a().naming,children:[(0,r.jsx)("h5",{className:a().title,children:e("have.questions")}),(0,r.jsx)("p",{className:a().text,children:e("questions.text")})]})]}),(0,r.jsx)(l.Z,{onClick:function(){if(!d){(0,h.Kp)(e("login.first"));return}i()},icon:(0,r.jsx)(v(),{}),children:e("help.center")}),(0,r.jsx)(f,{open:n,onClose:o,PaperProps:{style:{padding:0}},children:(0,r.jsx)(p.Z,{})})]})}},36465:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return m},default:function(){return x}});var r=n(85893);n(67294);var i=n(84169),a=n(11163),o=n(79347),s=n.n(o),c=n(57227);function l(t){var e,n,i,a,o;let{data:l}=t;return(0,r.jsxs)("div",{className:"container ".concat(s().container),children:[(0,r.jsxs)("div",{className:s().header,children:[(0,r.jsx)("h1",{className:s().title,children:null==l?void 0:null===(e=l.translation)||void 0===e?void 0:e.title}),(0,r.jsxs)("p",{className:s().text,children:[null==l?void 0:null===(n=l.category)||void 0===n?void 0:null===(i=n.translation)||void 0===i?void 0:i.title,", ",null==l?void 0:null===(a=l.translation)||void 0===a?void 0:a.address]})]}),(0,r.jsx)("main",{className:s().content,children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(null==l?void 0:null===(o=l.translation)||void 0===o?void 0:o.description)||""}})}),(0,r.jsx)(c.Z,{})]})}var d=n(88767),u=n(22124),p=n(18074),m=!0;function x(t){var e;let{}=t,{locale:n}=(0,p.Z)(),{query:o}=(0,a.useRouter)(),s=Number(o.id),{data:c}=(0,d.useQuery)(["career",s,n],()=>u.Z.getById(s));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{title:null===(e=null==c?void 0:c.data.translation)||void 0===e?void 0:e.title}),(0,r.jsx)(l,{data:null==c?void 0:c.data})]})}},22124:function(t,e,n){"use strict";var r=n(25728);e.Z={getAll:t=>r.Z.get("/rest/careers/paginate",{params:t}),getById:(t,e)=>r.Z.get("/rest/careers/".concat(t),{params:e})}},23593:function(t){t.exports={wrapper:"supportCard_wrapper__BENR8",flex:"supportCard_flex__oR8Aq",iconWrapper:"supportCard_iconWrapper__1KySS",naming:"supportCard_naming__oB4LH",title:"supportCard_title__wxGao",text:"supportCard_text__3loVZ"}},79347:function(t){t.exports={container:"content_container__aim2s",header:"content_header__G6IRy",title:"content_title__2iCsS",text:"content_text__cX4Xb",content:"content_content__twclt"}},9008:function(t,e,n){t.exports=n(83121)},26230:function(t,e,n){"use strict";var r=n(67294),i=r&&"object"==typeof r&&"default"in r?r:{default:r},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(t,e){var n={};for(var r in t)!(e.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},s=function(t){var e=t.color,n=t.size,r=void 0===n?24:n,s=(t.children,o(t,["color","size","children"])),c="remixicon-icon "+(s.className||"");return i.default.createElement("svg",a({},s,{className:c,width:r,height:r,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"}))},c=i.default.memo?i.default.memo(s):s;t.exports=c}},function(t){t.O(0,[8523,110,7169,4161,1715,9774,2888,179],function(){return t(t.s=79792)}),_N_E=t.O()}]);