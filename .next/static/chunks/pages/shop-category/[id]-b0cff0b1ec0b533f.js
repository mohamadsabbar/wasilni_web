(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9429],{53771:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop-category/[id]",function(){return n(79256)}])},84169:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var a=n(9008),o=n.n(a),i=n(5848),s=n(3075);function c(e){let{title:t,description:n=s.KM,image:a=s.T5,keywords:c=s.cU}=e,l=i.o6,u=t?t+" | "+s.k5:s.k5;return(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:u}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{name:"keywords",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"Website"}),(0,r.jsx)("meta",{name:"title",property:"og:title",content:u}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:n}),(0,r.jsx)("meta",{name:"author",property:"og:author",content:l}),(0,r.jsx)("meta",{property:"og:site_name",content:l}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:a}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:title",content:u}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:site",content:l}),(0,r.jsx)("meta",{name:"twitter:creator",content:l}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},79256:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return m},default:function(){return g}});var r=n(85893);n(67294);var a=n(5152),o=n.n(a),i=n(56457),s=n(88767),c=n(84169),l=n(18074),u=n(11163);let d={1:o()(()=>Promise.all([n.e(129),n.e(2124)]).then(n.bind(n,36310)),{loadableGenerated:{webpack:()=>[36310]}}),2:o()(()=>Promise.all([n.e(129),n.e(2124)]).then(n.bind(n,36310)),{loadableGenerated:{webpack:()=>[36310]}}),3:o()(()=>Promise.all([n.e(129),n.e(4)]).then(n.bind(n,22665)),{loadableGenerated:{webpack:()=>[22665]}}),4:o()(()=>n.e(7885).then(n.bind(n,17885)),{loadableGenerated:{webpack:()=>[17885]}})},p={active:1,status:"published"};var m=!0;function g(e){var t,n;let{uiType:a="1"}=e,o=d[a],{locale:m}=(0,l.Z)(),{query:g}=(0,u.useRouter)(),h=String(null==g?void 0:g.id),{data:f}=(0,s.useQuery)(["category",h,m],()=>i.Z.getById(h,p));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{title:null==f?void 0:null===(t=f.data)||void 0===t?void 0:null===(n=t.translation)||void 0===n?void 0:n.title}),(0,r.jsx)(o,{})]})}},56457:function(e,t,n){"use strict";var r=n(25728);t.Z={getAllShopCategories:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get("/rest/categories/paginate",{params:{...e,type:"shop"}})},getAllSubCategories:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.Z.get("rest/categories/sub-shop/".concat(e),{params:t})},getAllProductCategories:(e,t)=>r.Z.get("/rest/shops/".concat(e,"/categories"),{params:t}),getAllRecipeCategories:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get("/rest/categories/paginate",{params:{...e,type:"receipt"}})},getById:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.Z.get("/rest/categories/".concat(e),{params:t})}}},9008:function(e,t,n){e.exports=n(83121)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=53771)}),_N_E=e.O()}]);