"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1715],{80423:function(e,t,a){a.d(t,{Z:function(){return R}});var r=a(85893),n=a(67294),s=a(34161),i=a(27484),l=a.n(i),o=a(77058);function c(e){let{date:t}=e,{t:a}=(0,o.$)(),n=l()(t).isSame(l()(),"day");return(0,r.jsx)("div",{className:"chat-date","data-date":n?a("today"):l()(t).format("D MMM")})}function d(e){let{text:t,time:a,chat_img:n}=e;return(0,r.jsx)("div",{className:"admin-message-wrapper",children:(0,r.jsxs)("div",{className:"admin-message ".concat(n&&"chat-image"),children:[n&&(0,r.jsx)(s.v0,{type:"image",model:{position:"normal",direction:"incoming",payload:{src:n,alt:"Joe avatar",width:"100%",height:"100%"}}}),t&&(0,r.jsx)("div",{className:"text",children:t}),(0,r.jsx)("div",{className:"time",children:l()(new Date(a)).format("HH:mm")})]})})}var u=a(15079),m=a.n(u);function h(e){let{text:t,time:a,status:n="",chat_img:i}=e;return(0,r.jsx)("div",{className:"user-sms-wrapper",children:(0,r.jsxs)("div",{className:"user-message ".concat(i&&"chat-image"),children:[i&&(0,r.jsx)(s.v0,{type:"image",model:{position:"normal",direction:"incoming",payload:{src:i,alt:"Joe avatar",width:"100%",height:"100%"}}}),t&&(0,r.jsx)("div",{className:"text",children:t}),(0,r.jsx)("div",{className:"time",children:l()(new Date(a)).format("HH:mm")}),(0,r.jsx)("span",{className:"double-check",children:"pending"===n?"":(0,r.jsx)(m(),{size:16})})]})})}function f(e){let{groupMessages:t,messageEndRef:a}=e;return(0,r.jsxs)("div",{className:"chat-box",children:[t.map((e,t)=>(0,r.jsxs)("div",{children:["Invalid Date"!==e.date?(0,r.jsx)(c,{date:e.date}):"",(0,r.jsx)("div",{className:"sms-box",children:e.messages.map(e=>Boolean(e.sender)?(0,r.jsx)(h,{text:e.chat_content,time:e.created_at,status:e.status,chat_img:e.chat_img},e.created_at):(0,r.jsx)(d,{text:e.chat_content,time:e.created_at,chat_img:e.chat_img},e.created_at))})]},t)),(0,r.jsx)("div",{ref:a})]})}var p=a(4387),v=a(35452),g=a(30251),x=a(71153),j=a(77262),b=a(80892),N=a(73714),y=a(34349);function _(e){let{url:t,setPercent:a=e=>{},file:n,handleOnSubmit:s,handleClose:i}=e,{t:l}=(0,o.$)(),c=(0,y.T)(),d=()=>{n||(0,N.Kp)("Please upload an image first!");let e=(0,x.iH)(v.tO,"/files/".concat(n.name)),t=(0,x.B0)(e,n);t.on("state_changed",e=>{let t=Math.round(e.bytesTransferred/e.totalBytes*100);a(t)},e=>console.log(e),()=>{(0,x.Jt)(t.snapshot.ref).then(e=>{s(e)})})},u=e=>{c((0,p.zR)(e))};return(0,r.jsx)("div",{className:"upload-media",children:(0,r.jsxs)("div",{className:"upload-form",children:[(0,r.jsx)("img",{src:t}),(0,r.jsx)("div",{children:(0,r.jsx)(g.Z,{label:"Caption",onChange(e){u(e.target.value)}})}),(0,r.jsxs)("div",{className:"footer-btns",children:[(0,r.jsx)(b.Z,{type:"button",onClick:i,children:l("cancel")}),(0,r.jsx)(j.Z,{type:"button",onClick:d,children:l("send")})]})]})})}let w=["image/jpg","image/jpeg","image/png","image/svg+xml","image/svg"];var M=a(11163),C=a(37490),k=a(29969),I=a(61225),S=a(47567),z=a(51766);function R(){let{t:e}=(0,o.$)(),t=(0,I.Z)("(min-width:1140px)"),a=(0,n.useRef)(null),i=(0,n.useRef)(null),{pathname:c,query:d}=(0,M.useRouter)(),u=(0,y.T)(),[m,h,g]=(0,C.Z)(),x=(0,n.useRef)(),[j,b]=(0,n.useState)(""),[R,H]=(0,n.useState)(""),O="/restaurant/[id]"===c||"/shop/[id]"===c,Z="/orders/[id]"===c,B=String(d.id),{chats:D,currentChat:T,newMessage:E,roleId:A,messages:P}=(0,y.C)(p.Z1),{user:L}=(0,k.a)(),Y=function(e){let{messages:t,currentChat:a}=e;if(!a)return[];let r=t.filter(e=>e.chat_id===a.id).reduce((e,t)=>{let a=l()(new Date(t.created_at)).format("MM-DD-YYYY");return e[a]||(e[a]=[]),e[a].push(t),e},{}),n=Object.keys(r).map(e=>({date:e,messages:r[e]}));return n}({currentChat:T,messages:P}),F=e=>{L&&D&&(e?u((0,p.eb)(e)):(0,v.P4)({shop_id:-1,roleId:O?B:Z?A:"admin",user:{id:L.id,firstname:L.firstname,lastname:L.lastname,img:(null==L?void 0:L.img)||""}}))};(0,n.useEffect)(()=>{a.current&&a.current.focus()},[a,T]),(0,n.useEffect)(()=>{let e=D.filter(e=>{var t;return(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.id)==L.id}).find(e=>O?e.roleId==B:Z?e.roleId==A:"admin"==e.roleId);F(e)},[D]);let J=e=>{u((0,p.zR)(e))},$=e=>{let t=null==e?void 0:e.includes("https"),a=E.replace(/\&nbsp;/g,"").replace(/<[^>]+>/g,"").trim(),r={chat_content:a,chat_id:(null==T?void 0:T.id)||0,sender:1,unread:!0,roleId:O?B:Z?A:"admin",created_at:new Date().toString()};if(t&&(r.chat_img=e),a||t){var n,s,i,l,o,c;(0,v.bG)(r),u((0,p.zR)("")),u((0,p.Hz)({...r,status:"pending"}));let d=(null===(n=x.current)||void 0===n?void 0:n.offsetTop)||0,m=document.querySelector(".message-list .scrollbar-container");l=d-30-(i=(s=m).scrollTop),o=0,(c=function(){var e,t=(e=o+=20,(e/=300)<1?l/2*e*e+i:-l/2*(--e*(e-2)-1)+i);s.scrollTop=t,o<600&&setTimeout(c,20)})(),H(""),g()}},K=()=>{var e;null===(e=i.current)||void 0===e||e.click()};return(0,r.jsxs)("div",{className:"chat-drawer",children:[(0,r.jsx)("div",{className:"header",children:(0,r.jsx)("h3",{className:"title",children:e("help.center")})}),(0,r.jsxs)("div",{className:"chat-wrapper",children:[(0,r.jsx)("input",{type:"file",ref:i,onChange:function(e){if(w.includes(e.target.files[0].type)){b(e.target.files[0]);let t=new FileReader;t.onload=()=>{2===t.readyState&&(H(String(t.result)),h())},null==t||t.readAsDataURL(e.target.files[0])}else(0,N.Kp)("Supported only image formats!")},accept:"image/jpg, image/jpeg, image/png, image/svg+xml, image/svg",className:"d-none"}),(0,r.jsx)(s.tz,{responsive:!0,className:"chat-container rounded",children:(0,r.jsxs)(s.uU,{className:"chat-container",children:[(0,r.jsx)(s.rN,{className:"message-list",children:(0,r.jsx)(f,{groupMessages:Y,messageEndRef:x})}),(0,r.jsx)(s.Ru,{ref:a,value:E,onChange:J,onSend:$,placeholder:e("message"),className:"chat-input",attachButton:!0,onAttachClick:K})]})}),t?(0,r.jsx)(S.default,{open:m,onClose:g,children:(0,r.jsx)(_,{url:R,file:j,handleOnSubmit:$,handleClose:g})}):(0,r.jsx)(z.default,{open:m,onClose:g,children:(0,r.jsx)(_,{url:R,file:j,handleOnSubmit:$,handleClose:g})})]})]})}},30251:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(85893);a(67294);var n=a(67074),s=a(77169);let i=(0,n.ZP)(s.Z)({width:"100%",backgroundColor:"transparent","& .MuiInputLabel-root":{fontSize:12,lineHeight:"14px",fontWeight:500,textTransform:"uppercase",color:"var(--black)",fontFamily:"'Inter', sans-serif",transform:"none","&.Mui-error":{color:"var(--red)"}},"& .MuiInputLabel-root.Mui-focused":{color:"var(--black)"},"& .MuiInput-root":{fontSize:16,fontWeight:500,lineHeight:"19px",color:"var(--black)",fontFamily:"'Inter', sans-serif","&.Mui-error::after":{borderBottomColor:"var(--red)"}},"& .MuiInput-root::before":{borderBottom:"1px solid var(--grey)"},"& .MuiInput-root:hover:not(.Mui-disabled)::before":{borderBottom:"2px solid var(--black)"},"& .MuiInput-root::after":{borderBottom:"2px solid var(--primary)"}});function l(e){return(0,r.jsx)(i,{variant:"standard",InputLabelProps:{shrink:!0},...e})}},75688:function(e,t,a){var r=a(67294),n=r&&"object"==typeof r&&"default"in r?r:{default:r},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=function(e,t){var a={};for(var r in e)!(t.indexOf(r)>=0)&&Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a},l=function(e){var t=e.color,a=e.size,r=void 0===a?24:a,l=(e.children,i(e,["color","size","children"])),o="remixicon-icon "+(l.className||"");return n.default.createElement("svg",s({},l,{className:o,width:r,height:r,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),n.default.createElement("path",{d:"M21 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"}))},o=n.default.memo?n.default.memo(l):l;e.exports=o}}]);