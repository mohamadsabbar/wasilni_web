(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1698,520],{24931:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careers",function(){return r(40134)}])},20520:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(85893);r(67294);var a=r(91491),s=r.n(a),i=r(77262),c=r(11163);function o(e){let{text:t,buttonText:r,link:a="/"}=e,{push:o}=(0,c.useRouter)();return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:s().wrapper,children:[(0,n.jsx)("img",{src:"/images/delivery.webp",alt:"Empty"}),(0,n.jsx)("p",{className:s().text,children:t}),!!r&&(0,n.jsx)("div",{className:s().actions,children:(0,n.jsx)(i.Z,{onClick:()=>o(a),children:r})})]})})}},84169:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(85893);r(67294);var a=r(9008),s=r.n(a),i=r(5848),c=r(3075);function o(e){let{title:t,description:r=c.KM,image:a=c.T5,keywords:o=c.cU}=e,l=i.o6,d=t?t+" | "+c.k5:c.k5;return(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:d}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"keywords",content:o}),(0,n.jsx)("meta",{property:"og:type",content:"Website"}),(0,n.jsx)("meta",{name:"title",property:"og:title",content:d}),(0,n.jsx)("meta",{name:"description",property:"og:description",content:r}),(0,n.jsx)("meta",{name:"author",property:"og:author",content:l}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{name:"image",property:"og:image",content:a}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:title",content:d}),(0,n.jsx)("meta",{name:"twitter:description",content:r}),(0,n.jsx)("meta",{name:"twitter:site",content:l}),(0,n.jsx)("meta",{name:"twitter:creator",content:l}),(0,n.jsx)("meta",{name:"twitter:image",content:a}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},50530:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(85893);r(67294);var a=r(91249),s=r.n(a),i=r(5152),c=r.n(i);let o=c()(()=>r.e(4474).then(r.bind(r,14474)),{loadableGenerated:{webpack:()=>[14474]}}),l=c()(()=>r.e(9580).then(r.bind(r,89580)),{loadableGenerated:{webpack:()=>[89580]}});function d(e){let{title:t,children:r,refund:a,wallet:i}=e;return(0,n.jsx)("section",{className:s().root,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:s().wrapper,children:[(0,n.jsx)("h1",{className:s().title,children:t}),(0,n.jsx)("div",{className:s().main,children:r}),a&&(0,n.jsx)(o,{}),i&&(0,n.jsx)(l,{})]})})})}},40134:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(85893),a=r(67294),s=r(84169),i=r(50530),c=r(3922),o=r.n(c),l=r(41664),d=r.n(l),m=r(97169),u=r.n(m),x=r(18074),p=r(91655),_=r(20520);function j(e){let{data:t=[],loading:r=!1}=e,{t:a}=(0,x.Z)();return(0,n.jsxs)("div",{className:o().root,children:[r?Array.from([,,,]).map((e,t)=>(0,n.jsx)(p.Z,{variant:"rectangular",className:o().shimmer},"careers"+t)):t.map(e=>{var t,r,s,i;return(0,n.jsxs)(d(),{href:"/careers/".concat(e.id),className:o().wrapper,children:[(0,n.jsxs)("div",{className:o().naming,children:[(0,n.jsx)("h3",{className:o().title,children:null===(t=e.translation)||void 0===t?void 0:t.title}),(0,n.jsx)("p",{className:o().text,children:a("role")})]}),(0,n.jsxs)("div",{className:o().naming,children:[(0,n.jsx)("h3",{className:o().title,children:null===(r=e.category)||void 0===r?void 0:null===(s=r.translation)||void 0===s?void 0:s.title}),(0,n.jsx)("p",{className:o().text,children:a("category")})]}),(0,n.jsxs)("div",{className:o().naming,children:[(0,n.jsx)("h3",{className:o().title,children:null===(i=e.translation)||void 0===i?void 0:i.address}),(0,n.jsx)("p",{className:o().text,children:a("location")})]}),(0,n.jsx)("div",{className:o().actions,children:(0,n.jsx)("div",{className:o().arrowBtn,children:(0,n.jsx)(u(),{})})})]},e.id)}),!r&&!t.length&&(0,n.jsx)(_.default,{text:a("no.careers.found")})]})}var h=r(88767),v=r(22124),f=r(37935);function g(e){var t;let{}=e,{t:r,locale:c}=(0,x.Z)(),o=(0,a.useRef)(null),{data:l,fetchNextPage:d,hasNextPage:m,isFetchingNextPage:u,isLoading:p}=(0,h.useInfiniteQuery)(["careers",c],e=>{let{pageParam:t=1}=e;return v.Z.getAll({page:t,active:1})},{getNextPageParam(e){if(e.meta.current_page<e.meta.last_page)return e.meta.current_page+1}}),_=(0,a.useCallback)(e=>{let t=e[0];t.isIntersecting&&m&&d()},[m,d]);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(_,{root:null,rootMargin:"20px",threshold:0});o.current&&e.observe(o.current)},[_]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{title:r("careers")}),(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsxs)(i.Z,{title:r("careers"),children:[(0,n.jsx)(j,{data:(null==l?void 0:null===(t=l.pages)||void 0===t?void 0:t.flatMap(e=>e.data))||[],loading:p&&!u}),u&&(0,n.jsx)(f.default,{}),(0,n.jsx)("div",{ref:o})]})})]})}},22124:function(e,t,r){"use strict";var n=r(25728);t.Z={getAll:e=>n.Z.get("/rest/careers/paginate",{params:e}),getById:(e,t)=>n.Z.get("/rest/careers/".concat(e),{params:t})}},91491:function(e){e.exports={wrapper:"empty_wrapper__nwTin",text:"empty_text__oRHIv",actions:"empty_actions__NNcWA"}},3922:function(e){e.exports={root:"careerList_root__M55Rb",wrapper:"careerList_wrapper__Ul8UL",naming:"careerList_naming__RH_J8",title:"careerList_title__ibTOG",text:"careerList_text__Ev96L",actions:"careerList_actions__s48Nv",arrowBtn:"careerList_arrowBtn__waBXw",shimmer:"careerList_shimmer__gG824"}},91249:function(e){e.exports={root:"orders_root__HZblW",wrapper:"orders_wrapper__O2mIT",title:"orders_title__5hdk3",main:"orders_main__MbuRG"}},9008:function(e,t,r){e.exports=r(83121)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=24931)}),_N_E=e.O()}]);