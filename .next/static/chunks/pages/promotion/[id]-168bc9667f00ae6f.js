(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5692,9435,4077],{59104:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/promotion/[id]",function(){return n(90035)}])},84169:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893);n(67294);var a=n(9008),i=n.n(a),o=n(5848),s=n(3075);function l(e){let{title:t,description:n=s.KM,image:a=s.T5,keywords:l=s.cU}=e,c=o.o6,d=t?t+" | "+s.k5:s.k5;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:d}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{name:"keywords",content:l}),(0,r.jsx)("meta",{property:"og:type",content:"Website"}),(0,r.jsx)("meta",{name:"title",property:"og:title",content:d}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:n}),(0,r.jsx)("meta",{name:"author",property:"og:author",content:c}),(0,r.jsx)("meta",{property:"og:site_name",content:c}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:a}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:title",content:d}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:site",content:c}),(0,r.jsx)("meta",{name:"twitter:creator",content:c}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},85028:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});let r=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]},90035:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return j},default:function(){return _}});var r=n(85893),a=n(67294),i=n(11163),o=n(88767),s=n(94910),l=n(84169),c=n(5152),d=n.n(c),u=n(41363),m=n(77639),p=n.n(m);function f(e){var t,n;let{data:a}=e;return(0,r.jsx)("div",{className:p().container,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:p().header,children:[(0,r.jsx)("h1",{className:p().title,children:null===(t=a.translation)||void 0===t?void 0:t.title}),(0,r.jsx)("p",{className:p().text,children:null===(n=a.translation)||void 0===n?void 0:n.description})]})})})}var h=n(95785),v=n(77058),g=n(37935);let x=d()(()=>Promise.all([n.e(110),n.e(2175),n.e(129),n.e(7022),n.e(1018),n.e(5630),n.e(6462)]).then(n.bind(n,16515)),{loadableGenerated:{webpack:()=>[16515]}});var j=!0;function _(e){var t,n,c,d;let{}=e,{i18n:m}=(0,v.$)(),p=m.language,{query:j}=(0,i.useRouter)(),_=String(j.id),y=(0,a.useRef)(null),{data:w,error:b,fetchNextPage:N,hasNextPage:k,isFetchingNextPage:O,isLoading:P}=(0,o.useInfiniteQuery)(["banner",_,p],e=>{let{pageParam:t=1}=e;return s.Z.getById(_,{page:t,perPage:12})},{getNextPageParam(e,t){if(e.data.shops_count>e.data.shops.length&&e.data.shops.length>0)return t.length+1}}),Z=null==w?void 0:null===(t=w.pages)||void 0===t?void 0:t.flatMap(e=>e.data),E=Z?Z[0]:{},H=(0,a.useCallback)(e=>{let t=e[0];t.isIntersecting&&k&&N()},[N,k]);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(H,{root:null,rootMargin:"20px",threshold:0});y.current&&e.observe(y.current)},[H,k,N]),b&&console.log("error => ",b),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{title:null===(n=E.translation)||void 0===n?void 0:n.title,description:null===(c=E.translation)||void 0===c?void 0:c.description,image:(0,h.Z)(E.img)}),(0,r.jsxs)("div",{style:{minHeight:"60vh"},children:[(0,r.jsx)(f,{data:E}),(0,r.jsx)(u.default,{shops:(null==w?void 0:null===(d=w.pages)||void 0===d?void 0:d.flatMap(e=>e.data.shops))||[]}),O&&(0,r.jsx)(g.default,{}),(0,r.jsx)("div",{ref:y})]}),(0,r.jsx)(x,{})]})}},94910:function(e,t,n){"use strict";var r=n(25728);t.Z={getAll:e=>r.Z.get("/rest/banners/paginate",{params:e}),getById:(e,t)=>r.Z.get("/rest/banners/".concat(e),{params:t}),getAllAds:e=>r.Z.get("/rest/banners-ads",{params:e}),getAdById:(e,t)=>r.Z.get("/rest/banners-ads/".concat(e),{params:t})}},77639:function(e){e.exports={container:"bannerHeader_container__JAqti",header:"bannerHeader_header__elL3z",title:"bannerHeader_title__222UH",text:"bannerHeader_text__2L_mC"}},9008:function(e,t,n){e.exports=n(83121)},35310:function(e,t,n){"use strict";var r=n(67294),a=r&&"object"==typeof r&&"default"in r?r:{default:r},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e,t){var n={};for(var r in e)!(t.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},s=function(e){var t=e.color,n=e.size,r=void 0===n?24:n,s=(e.children,o(e,["color","size","children"])),l="remixicon-icon "+(s.className||"");return a.default.createElement("svg",i({},s,{className:l,width:r,height:r,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),a.default.createElement("path",{d:"M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15L10 12z"}))},l=a.default.memo?a.default.memo(s):s;e.exports=l}},function(e){e.O(0,[9072,1363,9774,2888,179],function(){return e(e.s=59104)}),_N_E=e.O()}]);