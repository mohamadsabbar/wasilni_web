(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6511],{26511:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var a=n(85893),s=n(5152),i=n.n(s),l=n(67294),o=n(88767),r=n(56457),c=n(66117),d=n.n(c),u=n(94910),g=n(77058),h=n(1612),p=n(80129),m=n.n(p),_=n(6684),v=n(47362),b=n.n(v),x=n(25675),f=n.n(x),j=n(41664),y=n.n(j);function k(e){let{data:t}=e,{t:n}=(0,g.$)();return(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:b().list,children:t.map(e=>(0,a.jsxs)("div",{className:"".concat(b().card," ").concat(b()[e.color]),children:[(0,a.jsxs)("div",{className:b().content,children:[(0,a.jsx)("strong",{className:b().title,children:n(e.title)}),(0,a.jsxs)(y(),{href:"/parcel-checkout",className:b().button,children:[(0,a.jsx)("div",{className:"".concat(b().icon," ").concat(b()[e.color]),children:e.icon}),(0,a.jsx)("span",{className:b().text,children:n(e.button)})]})]}),(0,a.jsx)(f(),{className:b().img,src:e.img,alt:e.title,width:150,height:140})]},e.title))})})}var N=n(13443),Z=n(2950),L=n(37935),w=n(21697);let A=[{title:"door.to.door.delivery",button:"we.work.for.you",color:"yellow",img:"/images/v4-announcement1.png",icon:(0,a.jsx)(_.ku,{})},{title:"discount.for.first.order",button:"for.all.buyers",color:"blue",img:"/images/v4-announcement2.png",icon:(0,a.jsx)(_.nc,{})},{title:"delivery.in.time",button:"until.date",color:"pink",img:"/images/v4-announcement3.png",icon:(0,a.jsx)(_.Tx,{})}],T=i()(()=>Promise.all([n.e(719),n.e(172)]).then(n.bind(n,56186)),{loadableGenerated:{webpack:()=>[56186]}}),C=i()(()=>Promise.all([n.e(719),n.e(697)]).then(n.bind(n,20697)),{loadableGenerated:{webpack:()=>[20697]}}),P=i()(()=>Promise.all([n.e(719),n.e(7933)]).then(n.bind(n,17933)),{loadableGenerated:{webpack:()=>[17933]}}),I=i()(()=>Promise.all([n.e(719),n.e(4020)]).then(n.bind(n,44020)),{loadableGenerated:{webpack:()=>[44020]}}),Q=i()(()=>n.e(5194).then(n.bind(n,59829)),{loadableGenerated:{webpack:()=>[59829]}}),S=i()(()=>n.e(7756).then(n.bind(n,87756)),{loadableGenerated:{webpack:()=>[87756]}});function B(){var e,t,n;let s=(0,l.useRef)(null),{t:i,i18n:c}=(0,g.$)(),p=c.language,_=(0,Z.Z)(),{settings:v}=(0,w.r)(),b=1===Number(null==v?void 0:v.active_parcel),{data:x,isLoading:f}=(0,o.useQuery)(["shopcategory",p],()=>r.Z.getAllShopCategories()),{data:j,isLoading:B}=(0,o.useQuery)(["banners",p],()=>u.Z.getAll()),{data:G,isLoading:R}=(0,o.useQuery)(["brandshops",p,_],()=>h.Z.getAllShops(m().stringify({verify:"1",address:_,open:"1"}))),{data:E,isLoading:U}=(0,o.useQuery)(["stories",p,_],()=>N.Z.getAll({address:_})),{data:F,isLoading:K}=(0,o.useQuery)(["ads",p,_],()=>u.Z.getAllAds({perPage:6,address:_})),{data:M,isLoading:O}=(0,o.useQuery)(["shops",p,_],()=>h.Z.getRecommended({open:1,address:_})),{data:D,isLoading:X,fetchNextPage:$,hasNextPage:q,isFetchingNextPage:z}=(0,o.useInfiniteQuery)(["nearbyshops",p,_],e=>{let{pageParam:t=1}=e;return h.Z.getAllShops(m().stringify({page:t,address:_,open:1}))},{getNextPageParam(e){if(e.meta.current_page<e.meta.last_page)return e.meta.current_page+1}}),H=(null==D?void 0:null===(e=D.pages)||void 0===e?void 0:e.flatMap(e=>e.data))||[],V=(0,l.useCallback)(e=>{let t=e[0];t.isIntersecting&&q&&$()},[]);return(0,l.useEffect)(()=>{let e=new IntersectionObserver(V,{root:null,rootMargin:"20px",threshold:0});s.current&&e.observe(s.current)},[V]),(0,a.jsxs)("section",{className:d().container,children:[(0,a.jsx)(T,{data:(null==x?void 0:null===(t=x.data)||void 0===t?void 0:t.sort((e,t)=>(null==e?void 0:e.input)-(null==t?void 0:t.input)))||[],loading:f}),(0,a.jsx)(C,{data:(null==j?void 0:j.data)||[],loading:B}),(0,a.jsxs)("div",{className:"".concat(d().heading," container"),children:[(0,a.jsx)("h2",{className:d().sectionTitle,children:i("choose.by.brand")}),(0,a.jsx)(y(),{className:d().link,href:"/shop?verify=1",children:i("see.all")})]}),(0,a.jsx)(P,{data:(null==G?void 0:G.data)||[],loading:R}),b&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:d().sectionTitle,children:i("especially.for.you")}),(0,a.jsx)("div",{className:d().sectionSubTitle,children:i("especially.for.you.description")}),(0,a.jsx)(k,{data:A})]}),(null==E?void 0:E.length)!==0&&(0,a.jsx)("h2",{className:d().sectionTitle,children:i("stories.widget")}),(0,a.jsx)(I,{data:E,loading:U}),(null==F?void 0:null===(n=F.data)||void 0===n?void 0:n.length)!==0&&(0,a.jsxs)("div",{className:"".concat(d().heading," container"),children:[(0,a.jsx)("h2",{className:d().sectionTitle,children:i("explore")}),(0,a.jsx)(y(),{className:d().link,href:"ads",children:i("see.all")})]}),(0,a.jsx)(S,{data:null==F?void 0:F.data,loading:K}),(0,a.jsx)(Q,{shops:null==M?void 0:M.data,link:"/shop?filter=recomended",title:i("trending"),loading:O}),(0,a.jsx)(Q,{title:i("popular.near.you"),shops:H,link:"/shop?filter=popular",loading:X&&!z}),z&&(0,a.jsx)(L.default,{}),(0,a.jsx)("div",{ref:s})]})}},94910:function(e,t,n){"use strict";var a=n(25728);t.Z={getAll:e=>a.Z.get("/rest/banners/paginate",{params:e}),getById:(e,t)=>a.Z.get("/rest/banners/".concat(e),{params:t}),getAllAds:e=>a.Z.get("/rest/banners-ads",{params:e}),getAdById:(e,t)=>a.Z.get("/rest/banners-ads/".concat(e),{params:t})}},56457:function(e,t,n){"use strict";var a=n(25728);t.Z={getAllShopCategories:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.Z.get("/rest/categories/paginate",{params:{...e,type:"shop"}})},getAllSubCategories:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.Z.get("rest/categories/sub-shop/".concat(e),{params:t})},getAllProductCategories:(e,t)=>a.Z.get("/rest/shops/".concat(e,"/categories"),{params:t}),getAllRecipeCategories:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.Z.get("/rest/categories/paginate",{params:{...e,type:"receipt"}})},getById:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.Z.get("/rest/categories/".concat(e),{params:t})}}},13443:function(e,t,n){"use strict";var a=n(25728);t.Z={getAll:e=>a.Z.get("/rest/stories/paginate",{params:e})}},47362:function(e){e.exports={list:"announcementList_list__dp6qw",card:"announcementList_card__n9UZo",content:"announcementList_content__AyFKB",title:"announcementList_title__DlU4U",button:"announcementList_button__7k5Do",icon:"announcementList_icon__5InL7",text:"announcementList_text__FBWBw",img:"announcementList_img__OBXpO",yellow:"announcementList_yellow__KT8mn",blue:"announcementList_blue__RdxiH",pink:"announcementList_pink__06QRK"}},66117:function(e){e.exports={container:"homev4_container__zYI1t",sectionTitle:"homev4_sectionTitle__fcVvP",sectionSubTitle:"homev4_sectionSubTitle__srX3C",heading:"homev4_heading__ELP2U",link:"homev4_link__gMuC7"}}}]);