(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6859],{26435:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/parcels/[id]",function(){return r(95822)}])},80423:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var a=r(85893),n=r(67294),s=r(34161),i=r(27484),l=r.n(i),o=r(77058);function d(e){let{date:t}=e,{t:r}=(0,o.$)(),n=l()(t).isSame(l()(),"day");return(0,a.jsx)("div",{className:"chat-date","data-date":n?r("today"):l()(t).format("D MMM")})}function c(e){let{text:t,time:r,chat_img:n}=e;return(0,a.jsx)("div",{className:"admin-message-wrapper",children:(0,a.jsxs)("div",{className:"admin-message ".concat(n&&"chat-image"),children:[n&&(0,a.jsx)(s.v0,{type:"image",model:{position:"normal",direction:"incoming",payload:{src:n,alt:"Joe avatar",width:"100%",height:"100%"}}}),t&&(0,a.jsx)("div",{className:"text",children:t}),(0,a.jsx)("div",{className:"time",children:l()(new Date(r)).format("HH:mm")})]})})}var u=r(15079),m=r.n(u);function h(e){let{text:t,time:r,status:n="",chat_img:i}=e;return(0,a.jsx)("div",{className:"user-sms-wrapper",children:(0,a.jsxs)("div",{className:"user-message ".concat(i&&"chat-image"),children:[i&&(0,a.jsx)(s.v0,{type:"image",model:{position:"normal",direction:"incoming",payload:{src:i,alt:"Joe avatar",width:"100%",height:"100%"}}}),t&&(0,a.jsx)("div",{className:"text",children:t}),(0,a.jsx)("div",{className:"time",children:l()(new Date(r)).format("HH:mm")}),(0,a.jsx)("span",{className:"double-check",children:"pending"===n?"":(0,a.jsx)(m(),{size:16})})]})})}function p(e){let{groupMessages:t,messageEndRef:r}=e;return(0,a.jsxs)("div",{className:"chat-box",children:[t.map((e,t)=>(0,a.jsxs)("div",{children:["Invalid Date"!==e.date?(0,a.jsx)(d,{date:e.date}):"",(0,a.jsx)("div",{className:"sms-box",children:e.messages.map(e=>Boolean(e.sender)?(0,a.jsx)(h,{text:e.chat_content,time:e.created_at,status:e.status,chat_img:e.chat_img},e.created_at):(0,a.jsx)(c,{text:e.chat_content,time:e.created_at,chat_img:e.chat_img},e.created_at))})]},t)),(0,a.jsx)("div",{ref:r})]})}var v=r(4387),x=r(35452),f=r(30251),_=r(71153),j=r(77262),g=r(80892),b=r(73714),y=r(34349);function N(e){let{url:t,setPercent:r=e=>{},file:n,handleOnSubmit:s,handleClose:i}=e,{t:l}=(0,o.$)(),d=(0,y.T)(),c=()=>{n||(0,b.Kp)("Please upload an image first!");let e=(0,_.iH)(x.tO,"/files/".concat(n.name)),t=(0,_.B0)(e,n);t.on("state_changed",e=>{let t=Math.round(e.bytesTransferred/e.totalBytes*100);r(t)},e=>console.log(e),()=>{(0,_.Jt)(t.snapshot.ref).then(e=>{s(e)})})},u=e=>{d((0,v.zR)(e))};return(0,a.jsx)("div",{className:"upload-media",children:(0,a.jsxs)("div",{className:"upload-form",children:[(0,a.jsx)("img",{src:t}),(0,a.jsx)("div",{children:(0,a.jsx)(f.Z,{label:"Caption",onChange(e){u(e.target.value)}})}),(0,a.jsxs)("div",{className:"footer-btns",children:[(0,a.jsx)(g.Z,{type:"button",onClick:i,children:l("cancel")}),(0,a.jsx)(j.Z,{type:"button",onClick:c,children:l("send")})]})]})})}let w=["image/jpg","image/jpeg","image/png","image/svg+xml","image/svg"];var Z=r(11163),I=r(37490),C=r(29969),k=r(61225),M=r(47567),H=r(51766);function P(){let{t:e}=(0,o.$)(),t=(0,k.Z)("(min-width:1140px)"),r=(0,n.useRef)(null),i=(0,n.useRef)(null),{pathname:d,query:c}=(0,Z.useRouter)(),u=(0,y.T)(),[m,h,f]=(0,I.Z)(),_=(0,n.useRef)(),[j,g]=(0,n.useState)(""),[P,B]=(0,n.useState)(""),z="/restaurant/[id]"===d||"/shop/[id]"===d,S="/orders/[id]"===d,O=String(c.id),{chats:R,currentChat:T,newMessage:E,roleId:D,messages:L}=(0,y.C)(v.Z1),{user:W}=(0,C.a)(),A=function(e){let{messages:t,currentChat:r}=e;if(!r)return[];let a=t.filter(e=>e.chat_id===r.id).reduce((e,t)=>{let r=l()(new Date(t.created_at)).format("MM-DD-YYYY");return e[r]||(e[r]=[]),e[r].push(t),e},{}),n=Object.keys(a).map(e=>({date:e,messages:a[e]}));return n}({currentChat:T,messages:L}),V=e=>{W&&R&&(e?u((0,v.eb)(e)):(0,x.P4)({shop_id:-1,roleId:z?O:S?D:"admin",user:{id:W.id,firstname:W.firstname,lastname:W.lastname,img:(null==W?void 0:W.img)||""}}))};(0,n.useEffect)(()=>{r.current&&r.current.focus()},[r,T]),(0,n.useEffect)(()=>{let e=R.filter(e=>{var t;return(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.id)==W.id}).find(e=>z?e.roleId==O:S?e.roleId==D:"admin"==e.roleId);V(e)},[R]);let F=e=>{u((0,v.zR)(e))},Y=e=>{let t=null==e?void 0:e.includes("https"),r=E.replace(/\&nbsp;/g,"").replace(/<[^>]+>/g,"").trim(),a={chat_content:r,chat_id:(null==T?void 0:T.id)||0,sender:1,unread:!0,roleId:z?O:S?D:"admin",created_at:new Date().toString()};if(t&&(a.chat_img=e),r||t){var n,s,i,l,o,d;(0,x.bG)(a),u((0,v.zR)("")),u((0,v.Hz)({...a,status:"pending"}));let c=(null===(n=_.current)||void 0===n?void 0:n.offsetTop)||0,m=document.querySelector(".message-list .scrollbar-container");l=c-30-(i=(s=m).scrollTop),o=0,(d=function(){var e,t=(e=o+=20,(e/=300)<1?l/2*e*e+i:-l/2*(--e*(e-2)-1)+i);s.scrollTop=t,o<600&&setTimeout(d,20)})(),B(""),f()}},G=()=>{var e;null===(e=i.current)||void 0===e||e.click()};return(0,a.jsxs)("div",{className:"chat-drawer",children:[(0,a.jsx)("div",{className:"header",children:(0,a.jsx)("h3",{className:"title",children:e("help.center")})}),(0,a.jsxs)("div",{className:"chat-wrapper",children:[(0,a.jsx)("input",{type:"file",ref:i,onChange:function(e){if(w.includes(e.target.files[0].type)){g(e.target.files[0]);let t=new FileReader;t.onload=()=>{2===t.readyState&&(B(String(t.result)),h())},null==t||t.readAsDataURL(e.target.files[0])}else(0,b.Kp)("Supported only image formats!")},accept:"image/jpg, image/jpeg, image/png, image/svg+xml, image/svg",className:"d-none"}),(0,a.jsx)(s.tz,{responsive:!0,className:"chat-container rounded",children:(0,a.jsxs)(s.uU,{className:"chat-container",children:[(0,a.jsx)(s.rN,{className:"message-list",children:(0,a.jsx)(p,{groupMessages:A,messageEndRef:_})}),(0,a.jsx)(s.Ru,{ref:r,value:E,onChange:F,onSend:Y,placeholder:e("message"),className:"chat-input",attachButton:!0,onAttachClick:G})]})}),t?(0,a.jsx)(M.default,{open:m,onClose:f,children:(0,a.jsx)(N,{url:P,file:j,handleOnSubmit:Y,handleClose:f})}):(0,a.jsx)(H.default,{open:m,onClose:f,children:(0,a.jsx)(N,{url:P,file:j,handleOnSubmit:Y,handleClose:f})})]})]})}},30251:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var a=r(85893);r(67294);var n=r(67074),s=r(77169);let i=(0,n.ZP)(s.Z)({width:"100%",backgroundColor:"transparent","& .MuiInputLabel-root":{fontSize:12,lineHeight:"14px",fontWeight:500,textTransform:"uppercase",color:"var(--black)",fontFamily:"'Inter', sans-serif",transform:"none","&.Mui-error":{color:"var(--red)"}},"& .MuiInputLabel-root.Mui-focused":{color:"var(--black)"},"& .MuiInput-root":{fontSize:16,fontWeight:500,lineHeight:"19px",color:"var(--black)",fontFamily:"'Inter', sans-serif","&.Mui-error::after":{borderBottomColor:"var(--red)"}},"& .MuiInput-root::before":{borderBottom:"1px solid var(--grey)"},"& .MuiInput-root:hover:not(.Mui-disabled)::before":{borderBottom:"2px solid var(--black)"},"& .MuiInput-root::after":{borderBottom:"2px solid var(--primary)"}});function l(e){return(0,a.jsx)(i,{variant:"standard",InputLabelProps:{shrink:!0},...e})}},86555:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(85893),n=r(67294),s=r(76725),i=r(9730),l=r.n(i),o=r(5848),d=r(60291),c=r(45122),u=r(90026);let m=e=>(0,a.jsx)("div",{className:l().point,children:(0,a.jsx)("img",{src:"/images/marker.png",width:32,alt:"Location"})}),h=e=>(0,a.jsxs)("div",{className:l().floatCard,children:[(null==e?void 0:e.price)&&(0,a.jsx)("span",{className:l().price,children:(0,a.jsx)(u.Z,{number:e.price})}),(0,a.jsx)("div",{className:l().marker,children:(0,a.jsx)(c.Z,{data:e.shop,size:"small"})})]}),p={fields:["address_components","geometry"],types:["address"]};function v(e){var t,r;let{location:i,setLocation:c=()=>{},readOnly:u=!1,shop:v,inputRef:x,setAddress:f,price:_,drawLine:j,defaultZoom:g=15}=e,b=(0,n.useRef)(),[y,N]=(0,n.useState)(),[w,Z]=(0,n.useState)();async function I(e){var t;if(u)return;let r={lat:e.center.lat(),lng:e.center.lng()};c(r);let a=await (0,d.K)("".concat(r.lat,",").concat(r.lng));(null==x?void 0:null===(t=x.current)||void 0===t?void 0:t.value)&&(x.current.value=a),f&&f(a)}let C=(e,t)=>{if(x&&(b.current=new t.places.Autocomplete(x.current,p),b.current.addListener("place_changed",async function(){let e=await b.current.getPlace(),t=function(e){let t={street_number:"streetNumber",route:"streetName",sublocality_level_1:"city",locality:"city1",administrative_area_level_1:"state",postal_code:"postalCode",country:"country"},r={};e.address_components.forEach(e=>{r[t[e.types[0]]]=e.long_name});let a=[null==r?void 0:r.streetName,null==r?void 0:r.city1,null==r?void 0:r.country];return a.join(", ")}(e),r={lat:e.geometry.location.lat(),lng:e.geometry.location.lng()};c(r),f&&f(t)})),Z(e),N(t),v){let r={lat:Number(null===(s=v.location)||void 0===s?void 0:s.latitude)||0,lng:Number(null===(l=v.location)||void 0===l?void 0:l.longitude)||0},a=[i,r],n=new t.LatLngBounds;for(var s,l,o=0;o<a.length;o++)n.extend(a[o]);e.fitBounds(n)}};return(0,n.useEffect)(()=>{if(v&&y){var e,t;let r={lat:Number(null===(e=v.location)||void 0===e?void 0:e.latitude)||0,lng:Number(null===(t=v.location)||void 0===t?void 0:t.longitude)||0},a=[i,r],n=new y.LatLngBounds;for(var s=0;s<a.length;s++)n.extend(a[s]);w.fitBounds(n)}},[i,null==v?void 0:v.location,j,w,y]),(0,a.jsxs)("div",{className:l().root,children:[!u&&(0,a.jsx)("div",{className:l().marker,children:(0,a.jsx)("img",{src:"/images/marker.png",width:32,alt:"Location"})}),(0,a.jsxs)(s.ZP,{bootstrapURLKeys:{key:o.kr||"",libraries:["places"]},zoom:g,center:i,onDragEnd:I,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded(e){let{map:t,maps:r}=e;return C(t,r)},options:{fullscreenControl:u},children:[u&&(0,a.jsx)(m,{lat:i.lat,lng:i.lng}),!!v&&(0,a.jsx)(h,{lat:(null===(t=v.location)||void 0===t?void 0:t.latitude)||0,lng:(null===(r=v.location)||void 0===r?void 0:r.longitude)||0,shop:v,price:_})]})]})}},84169:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(85893);r(67294);var n=r(9008),s=r.n(n),i=r(5848),l=r(3075);function o(e){let{title:t,description:r=l.KM,image:n=l.T5,keywords:o=l.cU}=e,d=i.o6,c=t?t+" | "+l.k5:l.k5;return(0,a.jsxs)(s(),{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("title",{children:c}),(0,a.jsx)("meta",{name:"description",content:r}),(0,a.jsx)("meta",{name:"keywords",content:o}),(0,a.jsx)("meta",{property:"og:type",content:"Website"}),(0,a.jsx)("meta",{name:"title",property:"og:title",content:c}),(0,a.jsx)("meta",{name:"description",property:"og:description",content:r}),(0,a.jsx)("meta",{name:"author",property:"og:author",content:d}),(0,a.jsx)("meta",{property:"og:site_name",content:d}),(0,a.jsx)("meta",{name:"image",property:"og:image",content:n}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,a.jsx)("meta",{name:"twitter:title",content:c}),(0,a.jsx)("meta",{name:"twitter:description",content:r}),(0,a.jsx)("meta",{name:"twitter:site",content:d}),(0,a.jsx)("meta",{name:"twitter:creator",content:d}),(0,a.jsx)("meta",{name:"twitter:image",content:n}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},55642:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(85893);r(67294);var n=r(86555),s=r(47301),i=r.n(s),l=r(91655);function o(e){var t,r;let{data:s,loading:o=!1,fullHeight:d,price:c,drawLine:u}=e,m={lat:Number(null==s?void 0:null===(t=s.location)||void 0===t?void 0:t.latitude)||0,lng:Number(null==s?void 0:null===(r=s.location)||void 0===r?void 0:r.longitude)||0};return(0,a.jsx)("div",{className:"".concat(i().wrapper," ").concat(d?i().fullHeight:""),children:o?(0,a.jsx)(l.Z,{variant:"rectangular",className:i().shimmer}):(0,a.jsx)(n.default,{location:m,defaultZoom:11,drawLine:u,price:c,readOnly:!0,shop:(null==s?void 0:s.delivery_type)==="pickup"?void 0:null==s?void 0:s.shop})})}},95822:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return em}});var a=r(85893),n=r(67294),s=r(84169),i=r(55642),l=r(88767),o=r(11163),d=r(34349),c=r(4387),u=r(47763),m=r(18074),h=r(92490),p=r.n(h),v=r(27484),x=r.n(v),f=r(91655),_=r(82662),j=r(35971),g=r(207),b=r(44044),y=r(94071),N=r(67074),w=r(75335),Z=r.n(w),I=r(19622),C=r.n(I),k=r(22765),M=r.n(k),H=r(82128),P=r.n(H);let B=(0,N.ZP)(_.Z)(e=>{let{theme:t}=e;return{["&.".concat(j.Z.alternativeLabel)]:{top:31,"@media (max-width: 576px)":{top:20}},["&.".concat(j.Z.active)]:{["& .".concat(j.Z.line)]:{backgroundColor:"#83EA00"}},["&.".concat(j.Z.completed)]:{["& .".concat(j.Z.line)]:{backgroundColor:"#83EA00"}},["& .".concat(j.Z.line)]:{height:8,border:0,backgroundColor:"var(--secondary-bg)",borderRadius:1,"@media (max-width: 576px)":{height:5}}}}),z=(0,N.ZP)("div")(e=>{let{theme:t,ownerState:r}=e;return{backgroundColor:"var(--secondary-bg)",zIndex:1,color:"#fff",width:70,height:70,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center","@media (max-width: 576px)":{width:44,height:44},"& svg":{width:28,height:28,fill:"#898989","@media (max-width: 576px)":{width:17,height:17}},...r.active&&{backgroundColor:"#83EA00","& svg":{fill:"#232B2F"}},...r.completed&&{backgroundColor:"#83EA00","& svg":{fill:"#232B2F"}}}});function S(e){let{active:t,completed:r,className:n}=e,s={1:(0,a.jsx)(C(),{}),2:(0,a.jsx)(Z(),{}),3:(0,a.jsx)(M(),{}),4:(0,a.jsx)(P(),{})};return(0,a.jsx)(z,{ownerState:{completed:r,active:t},className:n,children:s[String(e.icon)]})}let O=["accepted","ready","on_a_way","delivered"],R=e=>{switch(e){case"accepted":return 0;case"ready":return 1;case"on_a_way":return 2;case"delivered":return 3;default:return -1}};function T(e){let{status:t}=e;return(0,a.jsx)(g.Z,{alternativeLabel:!0,activeStep:R(t),connector:(0,a.jsx)(B,{}),children:O.map(e=>(0,a.jsx)(b.Z,{children:(0,a.jsx)(y.Z,{StepIconComponent:S})},e))})}function E(e){var t;let{data:r,loading:n=!1}=e,{t:s}=(0,m.Z)();return(0,a.jsx)("div",{className:p().root,children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:p().wrapper,children:[(0,a.jsx)("div",{className:p().shopInfo,children:n?(0,a.jsxs)("div",{className:p().naming,children:[(0,a.jsx)(f.Z,{variant:"text",className:p().shimmerTitle}),(0,a.jsx)(f.Z,{variant:"text",className:p().shimmerDesc})]}):(0,a.jsxs)("div",{className:p().naming,children:[(0,a.jsx)("h1",{className:p().title,children:null==r?void 0:r.username_from}),(0,a.jsx)("p",{className:p().text,children:null==r?void 0:null===(t=r.address_from)||void 0===t?void 0:t.address})]})}),(0,a.jsx)("div",{className:p().statusWrapper,children:n?(0,a.jsx)(f.Z,{variant:"rectangular",className:p().shimmer}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:p().status,children:[(0,a.jsx)("label",{children:s(null==r?void 0:r.status)}),(0,a.jsx)("div",{className:p().time,children:(0,a.jsx)("span",{className:p().text,children:x()(null==r?void 0:r.updated_at).format("HH:mm")})})]}),(0,a.jsx)(T,{status:(null==r?void 0:r.status)||""})]})})]})})})}var D=r(61225),L=r(79072),W=r(17065),A=r.n(W),V=r(70395),F=r.n(V),Y=r(60911),G=r.n(Y),U=r(74758),X=r.n(U),K=r(80892),q=r(5152),J=r.n(q),Q=r(37490),$=r(73714),ee=r(80423),et=r(11295),er=r(90026);let ea=J()(()=>r.e(6041).then(r.bind(r,36041)),{loadableGenerated:{webpack:()=>[36041]}}),en=J()(()=>r.e(7107).then(r.bind(r,47107)),{loadableGenerated:{webpack:()=>[47107]}});function es(e){var t,r,n,s,i;let{data:d}=e,{t:c}=(0,m.Z)(),{push:h}=(0,o.useRouter)(),[p,v,f]=(0,Q.Z)(),[_,j,g]=(0,Q.Z)(),{mutate:b,isLoading:y}=(0,l.useMutation)({mutationFn:()=>u.Z.cancel((null==d?void 0:d.id)||0),onSuccess(){f(),h("/parcels"),(0,$.Vp)(c("parcel.cancelled"))},onError:e=>(0,$.vU)(null==e?void 0:e.statusCode)});return(0,a.jsxs)("div",{className:F().wrapper,children:[(0,a.jsx)("div",{className:F().header,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:F().title,children:c("parcel")}),(0,a.jsxs)("div",{className:F().subtitle,children:[(0,a.jsxs)("span",{className:F().text,children:["#",null==d?void 0:d.id]}),(0,a.jsx)("span",{className:F().dot}),(0,a.jsx)("span",{className:F().text,children:x()(null==d?void 0:d.created_at).format("MMM DD, HH:mm")})]})]})}),(0,a.jsxs)("div",{className:F().address,children:[(0,a.jsx)("label",{children:c("delivery.address")}),(0,a.jsx)("h6",{className:F().text,children:null==d?void 0:null===(t=d.address_to)||void 0===t?void 0:t.address}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{children:c("delivery.time")}),(0,a.jsxs)("h6",{className:F().text,children:[x()(null==d?void 0:d.delivery_date).format("ddd, MMM DD,")," ",null==d?void 0:d.delivery_time]}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{children:c("payment.type")}),(0,a.jsx)("h6",{className:F().text,style:{textTransform:"capitalize"},children:c(null==d?void 0:null===(r=d.transaction)||void 0===r?void 0:r.payment_system.tag)}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{children:c("payment.status")}),(0,a.jsx)("h6",{className:F().text,style:{textTransform:"capitalize"},children:c(null==d?void 0:null===(n=d.transaction)||void 0===n?void 0:n.status)})]}),(0,a.jsx)("div",{className:F().body,children:(0,a.jsxs)("div",{className:F().flex,children:[(0,a.jsx)("label",{children:c("total")}),(0,a.jsx)("span",{className:F().totalPrice,children:(0,a.jsx)(er.Z,{number:null==d?void 0:d.total_price,symbol:null==d?void 0:null===(s=d.currency)||void 0===s?void 0:s.symbol})})]})}),(null==d?void 0:d.deliveryman)?(0,a.jsxs)("div",{className:F().courierBlock,children:[(0,a.jsxs)("div",{className:F().courier,children:[(0,a.jsx)("div",{className:F().avatar,children:(0,a.jsx)("div",{className:F().imgWrapper,children:(0,a.jsx)(et.Z,{data:d.deliveryman})})}),(0,a.jsxs)("div",{className:F().naming,children:[(0,a.jsxs)("h5",{className:F().name,children:[d.deliveryman.firstname," ",null===(i=d.deliveryman.lastname)||void 0===i?void 0:i.charAt(0),"."]}),(0,a.jsx)("p",{className:F().text,children:c("driver")})]})]}),(0,a.jsxs)("div",{className:F().actions,children:[(0,a.jsx)("a",{href:"tel:".concat(d.deliveryman.phone),className:F().iconBtn,children:(0,a.jsx)(G(),{})}),(0,a.jsx)("button",{className:F().iconBtn,onClick:j,children:(0,a.jsx)(X(),{})})]})]}):"",(null==d?void 0:d.status)==="new"?(0,a.jsx)("div",{className:F().footer,children:(0,a.jsx)(K.Z,{type:"button",onClick:v,children:c("cancel.order")})}):"",(0,a.jsx)(ea,{open:p,handleClose:f,onSubmit:b,loading:y,title:c("are.you.sure.cancel.order")}),(0,a.jsx)(en,{open:_,onClose:g,PaperProps:{style:{padding:0}},children:(0,a.jsx)(ee.Z,{})})]})}var ei=r(66776),el=r.n(ei),eo=r(37562);function ed(e){var t;let{data:r}=e,{t:n}=(0,m.Z)();return(0,a.jsxs)("div",{className:el().wrapper,children:[(0,a.jsx)("div",{className:el().header,children:(0,a.jsx)("h3",{className:el().title,children:n("parcel.details")})}),(0,a.jsxs)("div",{className:el().body,children:[!!(null==r?void 0:r.img)&&(0,a.jsx)("div",{className:el().flex,children:(0,a.jsx)("div",{className:el().item,children:(0,a.jsx)(eo.Z,{src:null==r?void 0:r.img,alt:null==r?void 0:r.img})})}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{children:n("type")}),(0,a.jsx)("h6",{className:el().text,children:null==r?void 0:null===(t=r.type)||void 0===t?void 0:t.type}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{children:n("receiver")}),(0,a.jsx)("h6",{className:el().text,children:null==r?void 0:r.username_to}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{children:n("phone.number")}),(0,a.jsx)("h6",{className:el().text,children:null==r?void 0:r.phone_to}),(0,a.jsx)("br",{}),(0,a.jsx)("label",{children:n("note")}),(0,a.jsx)("h6",{className:el().text,style:{textTransform:"capitalize"},children:null==r?void 0:r.note})]})]})}function ec(e){let{data:t,loading:r}=e,n=(0,D.Z)("(min-width:1140px)");return(0,a.jsx)("div",{className:A().root,children:!r&&(0,a.jsxs)(L.ZP,{container:!0,spacing:n?4:1.5,children:[(0,a.jsx)(L.ZP,{item:!0,xs:12,md:7,children:(0,a.jsx)(ed,{data:t})}),(0,a.jsx)(L.ZP,{item:!0,xs:12,md:5,children:(0,a.jsx)(es,{data:t})})]})})}let eu=J()(()=>Promise.all([r.e(2175),r.e(4570),r.e(8511)]).then(r.bind(r,38511)),{loadableGenerated:{webpack:()=>[38511]}});function em(e){let{}=e,{locale:t}=(0,m.Z)(),{query:r}=(0,o.useRouter)(),h=Number(r.id),p=(0,d.T)(),[v,x,f]=(0,Q.Z)(),{data:_,isLoading:j,refetch:g}=(0,l.useQuery)(["parcel",h,t],()=>u.Z.getById(h),{refetchOnWindowFocus:!0,staleTime:0,onSuccess(e){e.data.review||"delivered"!==e.data.status||x(),e.data.deliveryman&&p((0,c.nd)(e.data.deliveryman.id))}});return(0,n.useEffect)(()=>()=>{p((0,c.nd)("admin"))},[p]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{}),(0,a.jsx)(E,{data:null==_?void 0:_.data,loading:j}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(i.Z,{data:{location:null==_?void 0:_.data.address_from,shop:{id:0,logo_img:"/images/finish.png",location:null==_?void 0:_.data.address_to,translation:{title:"Finish",locale:"en",description:""},price:0,open:!0}},readonly:!0,loading:j}),(0,a.jsx)(ec,{data:null==_?void 0:_.data,loading:j})]}),(0,a.jsx)(eu,{open:v,onClose:f,refetch:g})]})}},47763:function(e,t,r){"use strict";var a=r(25728);t.Z={getAll:e=>a.Z.get("/dashboard/user/parcel-orders?".concat(e)),getAllTypes:e=>a.Z.get("/rest/parcel-order/types",{params:e}),getById:(e,t)=>a.Z.get("/dashboard/user/parcel-orders/".concat(e),{params:t}),create:e=>a.Z.post("/dashboard/user/parcel-orders",e),calculate:e=>a.Z.get("/rest/parcel-order/calculate-price",{params:e}),cancel:e=>a.Z.post("/dashboard/user/parcel-orders/".concat(e,"/status/change?status=canceled")),review:(e,t)=>a.Z.post("/dashboard/user/parcel-orders/deliveryman-review/".concat(e),t)}},9730:function(e){e.exports={root:"map_root__3qcrq",marker:"map_marker__EnBz1",floatCard:"map_floatCard__1zZP1",price:"map_price__CTP0I",point:"map_point__GfLMi"}},70395:function(e){e.exports={wrapper:"orderInfo_wrapper__VOfS2",header:"orderInfo_header__BRR4r",title:"orderInfo_title__mdIf5",subtitle:"orderInfo_subtitle__MRrYx",text:"orderInfo_text__6R3WH",dot:"orderInfo_dot___JMW8",address:"orderInfo_address__9O1Zm",body:"orderInfo_body__UCS0u",flex:"orderInfo_flex____5q2",price:"orderInfo_price__KmY3l",discount:"orderInfo_discount__5BsvJ",totalPrice:"orderInfo_totalPrice__M0egx",courierBlock:"orderInfo_courierBlock__vQB6Q",courier:"orderInfo_courier__j9zmv",avatar:"orderInfo_avatar__ROqd5",imgWrapper:"orderInfo_imgWrapper___5hfV",rating:"orderInfo_rating__B5TcQ",naming:"orderInfo_naming__slzsU",name:"orderInfo_name__7ddxL",actions:"orderInfo_actions__MxKsd",iconBtn:"orderInfo_iconBtn__Q643h",footer:"orderInfo_footer__IvTTU",main:"orderInfo_main__U6XpY"}},66776:function(e){e.exports={wrapper:"orderProducts_wrapper__RJtdf",header:"orderProducts_header__fX5HO",title:"orderProducts_title__WCPWW",body:"orderProducts_body__wISZ_",text:"orderProducts_text__t8VRX",flex:"orderProducts_flex__XgAuW",item:"orderProducts_item__kqY0C"}},17065:function(e){e.exports={root:"orderContainer_root__Dw_KY"}},92490:function(e){e.exports={root:"orderHeader_root__IBD_X",wrapper:"orderHeader_wrapper__hfYFz",shopInfo:"orderHeader_shopInfo__IRuOq",naming:"orderHeader_naming__h_MLi",title:"orderHeader_title__NhSXL",text:"orderHeader_text__fWyDT",shimmerTitle:"orderHeader_shimmerTitle__BGzRG",shimmerDesc:"orderHeader_shimmerDesc__ot5Mv",statusWrapper:"orderHeader_statusWrapper__O6u_G",status:"orderHeader_status__pXCV1",time:"orderHeader_time__15VmK",shimmer:"orderHeader_shimmer__Ah10t"}},47301:function(e){e.exports={wrapper:"orderMap_wrapper__h__VP",fullHeight:"orderMap_fullHeight__BsYPD",shimmer:"orderMap_shimmer__IX0_w"}},19622:function(e,t,r){"use strict";var a=r(67294),n=a&&"object"==typeof a&&"default"in a?a:{default:a},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=function(e,t){var r={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},l=function(e){var t=e.color,r=e.size,a=void 0===r?24:r,l=(e.children,i(e,["color","size","children"])),o="remixicon-icon "+(l.className||"");return n.default.createElement("svg",s({},l,{className:o,width:a,height:a,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),n.default.createElement("path",{d:"M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014c0 .548-.445.993-.993.993H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm3 13H7v2h2v-2zm0-3H7v2h2v-2zm0-3H7v2h2v-2zm7-9v4H8V2h8z"}))},o=n.default.memo?n.default.memo(l):l;e.exports=o},22765:function(e,t,r){"use strict";var a=r(67294),n=a&&"object"==typeof a&&"default"in a?a:{default:a},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=function(e,t){var r={};for(var a in e)!(t.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},l=function(e){var t=e.color,r=e.size,a=void 0===r?24:r,l=(e.children,i(e,["color","size","children"])),o="remixicon-icon "+(l.className||"");return n.default.createElement("svg",s({},l,{className:o,width:a,height:a,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),n.default.createElement("path",{d:"M17 8h3l3 4.056V18h-2.035a3.5 3.5 0 0 1-6.93 0h-5.07a3.5 3.5 0 0 1-6.93 0H1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm0 2v3h4v-.285L18.992 10H17z"}))},o=n.default.memo?n.default.memo(l):l;e.exports=o}},function(e){e.O(0,[8523,110,9072,7169,6725,4161,6355,9774,2888,179],function(){return e(e.s=26435)}),_N_E=e.O()}]);