(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6803,520],{79185:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brands",function(){return n(70620)}])},20520:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(85893);n(67294);var a=n(91491),i=n.n(a),s=n(77262),o=n(11163);function c(e){let{text:t,buttonText:n,link:a="/"}=e,{push:c}=(0,o.useRouter)();return(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:i().wrapper,children:[(0,r.jsx)("img",{src:"/images/delivery.webp",alt:"Empty"}),(0,r.jsx)("p",{className:i().text,children:t}),!!n&&(0,r.jsx)("div",{className:i().actions,children:(0,r.jsx)(s.Z,{onClick:()=>c(a),children:n})})]})})}},84169:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var a=n(9008),i=n.n(a),s=n(5848),o=n(3075);function c(e){let{title:t,description:n=o.KM,image:a=o.T5,keywords:c=o.cU}=e,l=s.o6,d=t?t+" | "+o.k5:o.k5;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:d}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{name:"keywords",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"Website"}),(0,r.jsx)("meta",{name:"title",property:"og:title",content:d}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:n}),(0,r.jsx)("meta",{name:"author",property:"og:author",content:l}),(0,r.jsx)("meta",{property:"og:site_name",content:l}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:a}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:title",content:d}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:site",content:l}),(0,r.jsx)("meta",{name:"twitter:creator",content:l}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},5571:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(85893);n(67294);var a=n(89962),i=n.n(a),s=n(41664),o=n.n(s),c=n(95785),l=n(37562),d=n(4943),u=n(18074),m=n(83626);function _(e){var t,n,a,s;let{data:_}=e,{t:p}=(0,u.Z)();return(0,r.jsxs)(o(),{href:"/shop/".concat(_.id),className:i().wrapper,children:[(0,r.jsx)("div",{className:i().overlay,style:{backgroundImage:"url(".concat(_.logo_img,")")}}),(0,r.jsx)("div",{className:i().header,children:(0,r.jsx)(l.Z,{fill:!0,src:(0,c.Z)(_.logo_img),alt:null===(t=_.translation)||void 0===t?void 0:t.title,sizes:"140px"})}),(0,r.jsxs)("div",{className:i().body,children:[(0,r.jsxs)("h3",{className:i().title,children:[null===(n=_.translation)||void 0===n?void 0:n.title,(null==_?void 0:_.verify)===1&&(0,r.jsx)(m.Z,{})]}),(0,r.jsxs)("p",{className:i().text,children:[p("delivery.with.in")," ",null===(a=_.delivery_time)||void 0===a?void 0:a.to," ",p((0,d.Z)(null===(s=_.delivery_time)||void 0===s?void 0:s.type))]})]})]})}},83626:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),a=n(6684);function i(){return(0,r.jsx)("span",{style:{display:"block",width:"16px",height:"auto"},children:(0,r.jsx)(a.SA,{})})}},70620:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(85893),a=n(67294),i=n(84169),s=n(88767),o=n(2950),c=n(18074),l=n(80129),d=n.n(l),u=n(1612),m=n(57827),_=n.n(m),p=n(91655),x=n(5571);function v(e){let{data:t,loading:n,title:a}=e;return(0,r.jsx)("div",{className:_().container,children:(0,r.jsx)("section",{className:"container",children:(0,r.jsxs)("div",{className:_().wrapper,children:[(0,r.jsx)("div",{className:_().header,children:(0,r.jsx)("h2",{className:_().title,children:a})}),(0,r.jsx)("div",{className:_().grid,children:n?Array.from(Array(8)).map((e,t)=>(0,r.jsx)(p.Z,{variant:"rectangular",className:_().shimmer},"store"+t)):t.map(e=>(0,r.jsx)(x.Z,{data:e},"brand-"+e.id))})]})})})}var h=n(37935),f=n(20520);function j(e){var t;let{}=e,{t:n,locale:l}=(0,c.Z)(),m=(0,a.useRef)(null),_=(0,o.Z)(),{data:p,error:x,fetchNextPage:j,hasNextPage:g,isFetchingNextPage:y,isLoading:w}=(0,s.useInfiniteQuery)(["brands",l,_],e=>{let{pageParam:t=1}=e;return u.Z.getAll(d().stringify({page:t,perPage:20,address:_,open:1}))},{getNextPageParam(e){if(e.meta.current_page<e.meta.last_page)return e.meta.current_page+1}}),b=(null==p?void 0:null===(t=p.pages)||void 0===t?void 0:t.flatMap(e=>e.data))||[],N=(0,a.useCallback)(e=>{let t=e[0];t.isIntersecting&&g&&j()},[]);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(N,{root:null,rootMargin:"20px",threshold:0});m.current&&e.observe(m.current)},[N]),x&&console.log("error => ",x),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{title:n("favorite.brands")}),(0,r.jsx)(v,{title:n("favorite.brands"),data:b,loading:w&&!y}),y&&(0,r.jsx)(h.default,{}),(0,r.jsx)("div",{ref:m}),!b.length&&!w&&(0,r.jsx)(f.default,{text:n("no.restaurants")})]})}},4943:function(e,t,n){"use strict";function r(e){switch(e){case"minute":default:return"min";case"hour":return"h"}}n.d(t,{Z:function(){return r}})},91491:function(e){e.exports={wrapper:"empty_wrapper__nwTin",text:"empty_text__oRHIv",actions:"empty_actions__NNcWA"}},89962:function(e){e.exports={wrapper:"v3_wrapper__3qJgj",overlay:"v3_overlay__7rsQ1",header:"v3_header__OerbF",body:"v3_body__X_ic_",title:"v3_title__GZoOH",text:"v3_text__hv_6k"}},57827:function(e){e.exports={container:"brand_container__2MwvX",wrapper:"brand_wrapper__eMp_i",header:"brand_header__S_WAR",title:"brand_title__PQ29e",link:"brand_link__p7evE",grid:"brand_grid__FdR1R",shimmer:"brand_shimmer__x7Gyv"}},9008:function(e,t,n){e.exports=n(83121)},24654:function(){}},function(e){e.O(0,[129,9774,2888,179],function(){return e(e.s=79185)}),_N_E=e.O()}]);