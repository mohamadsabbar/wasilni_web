(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3672],{16038:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),i=n(67294),o=n(69408),a=n.n(o),s=n(77058),l=n(30251),d=n(77262),c=n(82175),u=n(73714),p=n(29969);function h(e){let{onSuccess:t,changeView:n}=e,{t:i}=(0,s.$)(),{phoneNumberSignIn:o}=(0,p.a)(),h=(0,c.TA)({initialValues:{phone:""},onSubmit(e,r){let{setSubmitting:a}=r,s=e.phone.replace(/[^0-9]/g,"");o(e.phone).then(e=>{t({phone:s,callback:e}),n("VERIFY")}).catch(e=>{(0,u.vU)(i("sms.not.sent")),console.log("err => ",e)}).finally(()=>{a(!1)})},validate(e){let t={};if(e.phone){if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.phone))return t}else t.phone=i("required")}});return(0,r.jsxs)("form",{className:a().wrapper,onSubmit:h.handleSubmit,children:[(0,r.jsx)("div",{className:a().header,children:(0,r.jsx)("h1",{className:a().title,children:i("edit.phone")})}),(0,r.jsx)("div",{className:a().space}),(0,r.jsx)(l.Z,{name:"phone",label:i("phone"),placeholder:i("type.here"),value:h.values.phone,onChange:h.handleChange,error:!!h.errors.phone,helperText:h.errors.phone,required:!0}),(0,r.jsx)("div",{className:a().space}),(0,r.jsx)("div",{className:a().action,children:(0,r.jsx)(d.Z,{id:"sign-in-button",type:"submit",loading:h.isSubmitting,children:i("save")})})]})}var m=n(71470),v=n(9144),f=n(20512),x=n(21697),b=n(45641),j=n(27484),g=n.n(j),_=n(64698),y=n(34349),I=n(88767);function k(e){var t,n,o,l;let{phone:h,callback:j,setCallback:k,handleClose:w}=e,{t:M}=(0,s.$)(),{settings:S}=(0,x.r)(),C=60*S.otp_expire_time||60,[N,Z,P,E]=(0,f.h)(C),{phoneNumberSignIn:F,setUserData:L,user:V}=(0,p.a)(),B=(0,y.C)(_.j),T=(0,I.useQueryClient)(),Y=(0,c.TA)({initialValues:{},onSubmit(e,t){let{setSubmitting:n}=t,r={firstname:V.firstname,lastname:V.lastname,birthday:g()(V.birthday).format("YYYY-MM-DD"),gender:V.gender,phone:parseInt(h)};j.confirm(e.verifyId||"").then(()=>{b.Z.updatePhone(r).then(e=>{L(e.data),(0,u.Vp)(M("verified")),w(),T.invalidateQueries(["profile",null==B?void 0:B.id])}).catch(e=>{var t,n,r,i;if(null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(n=t.params)||void 0===n?void 0:n.phone){(0,u.vU)(null==e?void 0:null===(r=e.data)||void 0===r?void 0:null===(i=r.params)||void 0===i?void 0:i.phone.at(0));return}(0,u.vU)(M("some.thing.went.wrong"))}).finally(()=>n(!1))}).catch(()=>(0,u.vU)(M("verify.error")))},validate(e){let t={};return e.verifyId||(t.verifyId=M("required")),t}}),U=()=>{F(h).then(e=>{E(),Z(),(0,u.Vp)(M("verify.send")),k&&k(e)}).catch(()=>(0,u.vU)(M("sms.not.sent")))};return(0,i.useEffect)(()=>{Z()},[]),(0,r.jsxs)("form",{className:a().wrapper,onSubmit:Y.handleSubmit,children:[(0,r.jsxs)("div",{className:a().header,children:[(0,r.jsx)("h1",{className:a().title,children:M("verify.phone")}),(0,r.jsxs)("p",{className:a().text,children:[M("verify.text")," ",(0,r.jsx)("i",{children:h})]})]}),(0,r.jsx)("div",{className:a().space}),(0,r.jsxs)(v.Z,{spacing:2,children:[(0,r.jsx)(m.Z,{numInputs:6,inputStyle:a().input,isInputNum:!0,containerStyle:a().otpContainer,value:null===(t=Y.values.verifyId)||void 0===t?void 0:t.toString(),onChange:e=>Y.setFieldValue("verifyId",e)}),(0,r.jsxs)("p",{className:a().text,children:[M("verify.didntRecieveCode")," ",0===N?(0,r.jsx)("span",{id:"sign-in-button",onClick:U,className:a().resend,children:M("resend")}):(0,r.jsxs)("span",{className:a().text,children:[N," s"]})]})]}),(0,r.jsx)("div",{className:a().space}),(0,r.jsx)("div",{className:a().action,children:(0,r.jsx)(d.Z,{type:"submit",disabled:6>Number(null===(l=null==Y?void 0:null===(n=Y.values)||void 0===n?void 0:null===(o=n.verifyId)||void 0===o?void 0:o.toString())||void 0===l?void 0:l.length),loading:Y.isSubmitting,children:M("verify")})})]})}function w(e){let{handleClose:t}=e,[n,o]=(0,i.useState)("EDIT"),[a,s]=(0,i.useState)(""),[l,d]=(0,i.useState)(void 0),c=e=>o(e);return(0,r.jsx)(r.Fragment,{children:(()=>{switch(n){case"EDIT":return(0,r.jsx)(h,{changeView:c,onSuccess(e){let{phone:t,callback:n}=e;s(t),d(n)}});case"VERIFY":return(0,r.jsx)(k,{phone:a,callback:l,setCallback:d,handleClose:t});default:return(0,r.jsx)(h,{changeView:c,onSuccess(e){let{phone:t,callback:n}=e;s(t),d(n)}})}})()})}},72427:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(85893);n(67294);var i=n(67074),o=n(77169),a=n(61225),s=n(9041),l=n(80562),d=n(65911),c=n.n(d),u=n(37490),p=n(16038),h=n(5152),m=n.n(h);let v=m()(()=>Promise.resolve().then(n.bind(n,47567)),{loadableGenerated:{webpack:()=>[47567]}}),f=m()(()=>Promise.resolve().then(n.bind(n,51766)),{loadableGenerated:{webpack:()=>[51766]}}),x=(0,i.ZP)(o.Z)({width:"100%",backgroundColor:"transparent","& .MuiInputLabel-root":{fontSize:12,lineHeight:"14px",fontWeight:500,textTransform:"uppercase",color:"var(--black)","&.Mui-error":{color:"var(--red)"}},"& .MuiInputLabel-root.Mui-focused":{color:"var(--black)"},"& .MuiInput-root":{fontSize:16,fontWeight:500,lineHeight:"19px",color:"var(--black)",fontFamily:"'Inter', sans-serif","&.Mui-error::after":{borderBottomColor:"var(--red)"}},"& .MuiInput-root::before":{borderBottom:"1px solid var(--grey)"},"& .MuiInput-root:hover:not(.Mui-disabled)::before":{borderBottom:"2px solid var(--black)"},"& .MuiInput-root::after":{borderBottom:"2px solid var(--primary)"}});function b(e){let t=(0,a.Z)("(min-width:1140px)"),[n,i,o]=(0,u.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{variant:"standard",type:"text",InputLabelProps:{shrink:!0},InputProps:{endAdornment:(0,r.jsx)(s.Z,{position:"end",children:(0,r.jsx)(l.Z,{onClick:i,disableRipple:!0,children:(0,r.jsx)(c(),{})})})},...e}),t?(0,r.jsx)(v,{open:n,onClose:o,children:(0,r.jsx)(p.default,{handleClose:o})}):(0,r.jsx)(f,{open:n,onClose:o,children:(0,r.jsx)(p.default,{handleClose:o})})]})}},30251:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893);n(67294);var i=n(67074),o=n(77169);let a=(0,i.ZP)(o.Z)({width:"100%",backgroundColor:"transparent","& .MuiInputLabel-root":{fontSize:12,lineHeight:"14px",fontWeight:500,textTransform:"uppercase",color:"var(--black)",fontFamily:"'Inter', sans-serif",transform:"none","&.Mui-error":{color:"var(--red)"}},"& .MuiInputLabel-root.Mui-focused":{color:"var(--black)"},"& .MuiInput-root":{fontSize:16,fontWeight:500,lineHeight:"19px",color:"var(--black)",fontFamily:"'Inter', sans-serif","&.Mui-error::after":{borderBottomColor:"var(--red)"}},"& .MuiInput-root::before":{borderBottom:"1px solid var(--grey)"},"& .MuiInput-root:hover:not(.Mui-disabled)::before":{borderBottom:"2px solid var(--black)"},"& .MuiInput-root::after":{borderBottom:"2px solid var(--primary)"}});function s(e){return(0,r.jsx)(a,{variant:"standard",InputLabelProps:{shrink:!0},...e})}},75619:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893);n(67294);var i=n(70754),o=n(78179),a=n.n(o);function s(e){let{}=e;return(0,r.jsx)("div",{className:a().loading,children:(0,r.jsx)(i.Z,{})})}},84169:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893);n(67294);var i=n(9008),o=n.n(i),a=n(5848),s=n(3075);function l(e){let{title:t,description:n=s.KM,image:i=s.T5,keywords:l=s.cU}=e,d=a.o6,c=t?t+" | "+s.k5:s.k5;return(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:c}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{name:"keywords",content:l}),(0,r.jsx)("meta",{property:"og:type",content:"Website"}),(0,r.jsx)("meta",{name:"title",property:"og:title",content:c}),(0,r.jsx)("meta",{name:"description",property:"og:description",content:n}),(0,r.jsx)("meta",{name:"author",property:"og:author",content:d}),(0,r.jsx)("meta",{property:"og:site_name",content:d}),(0,r.jsx)("meta",{name:"image",property:"og:image",content:i}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:title",content:c}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:site",content:d}),(0,r.jsx)("meta",{name:"twitter:creator",content:d}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]})}},20512:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(67294);let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,[n,i]=(0,r.useState)(e),[o,a]=(0,r.useState)(!1),s=(0,r.useRef)(),l=()=>a(!0),d=()=>a(!1),c=()=>{clearInterval(s.current),a(!1),i(e)};return(0,r.useEffect)(()=>(s.current=setInterval(()=>{o&&n>0&&i(e=>e-1)},t),0===n&&clearInterval(s.current),()=>clearInterval(s.current)),[o,n,t]),[n,l,d,c]}},69408:function(e){e.exports={wrapper:"editPhone_wrapper__DnYMk",header:"editPhone_header__Ej0Ql",title:"editPhone_title__Fq_8B",text:"editPhone_text__0YOxO",resend:"editPhone_resend__V2ai4",space:"editPhone_space__R1N5a",flex:"editPhone_flex__MkrJ5",item:"editPhone_item__ghHtx",label:"editPhone_label__pLE_a",action:"editPhone_action__vFKgz",otpContainer:"editPhone_otpContainer__mf2Xk",input:"editPhone_input__KoecU"}},78179:function(e){e.exports={loading:"loading_loading__hXLim",pageLoading:"loading_pageLoading__0nn5j"}}}]);