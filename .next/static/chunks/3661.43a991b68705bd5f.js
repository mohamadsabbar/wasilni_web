(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3661],{30251:function(e,r,i){"use strict";i.d(r,{Z:function(){return l}});var n=i(85893);i(67294);var o=i(67074),t=i(77169);let a=(0,o.ZP)(t.Z)({width:"100%",backgroundColor:"transparent","& .MuiInputLabel-root":{fontSize:12,lineHeight:"14px",fontWeight:500,textTransform:"uppercase",color:"var(--black)",fontFamily:"'Inter', sans-serif",transform:"none","&.Mui-error":{color:"var(--red)"}},"& .MuiInputLabel-root.Mui-focused":{color:"var(--black)"},"& .MuiInput-root":{fontSize:16,fontWeight:500,lineHeight:"19px",color:"var(--black)",fontFamily:"'Inter', sans-serif","&.Mui-error::after":{borderBottomColor:"var(--red)"}},"& .MuiInput-root::before":{borderBottom:"1px solid var(--grey)"},"& .MuiInput-root:hover:not(.Mui-disabled)::before":{borderBottom:"2px solid var(--black)"},"& .MuiInput-root::after":{borderBottom:"2px solid var(--primary)"}});function l(e){return(0,n.jsx)(a,{variant:"standard",InputLabelProps:{shrink:!0},...e})}},23661:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return w}});var n=i(85893),o=i(67294),t=i(11751),a=i.n(t),l=i(61225),u=i(79072),s=i(30251),d=i(77058),c=i(82175),h=i(77262),m=i(94660),p=i(88767),v=i(45641),x=i(48606),f=i(91655),b=i(31944),g=i(22841),j=i(80865);function Z(e){let{onChange:r,value:i,name:t,label:l,placeholder:u,error:d}=e,[c,h]=(0,o.useState)(""),m=(0,x.Z)(c.trim(),400),{data:Z,isFetching:y}=(0,p.useQuery)(["userList",m],()=>v.Z.userList({search:m}),{enabled:m.length>0});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{label:l,placeholder:u,error:d,value:c,onChange:e=>h(e.target.value)}),y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{animation:"wave",width:"100%",height:"3rem"}),(0,n.jsx)(f.Z,{animation:"wave",width:"100%",height:"3rem"}),(0,n.jsx)(f.Z,{animation:"wave",width:"100%",height:"3rem"})]}),(0,n.jsx)(b.Z,{name:t,value:i,onChange:r,className:a().radioGroup,children:null==Z?void 0:Z.data.map(e=>(0,n.jsx)(g.Z,{value:e.uuid,control:(0,n.jsx)(j.Z,{}),label:"".concat(e.firstname," ").concat(e.lastname)},e.uuid))})]})}var y=i(73714),_=i(34349),M=i(64698);function w(e){var r,i,o,t,x,f;let{handleClose:b,onActionSuccess:g}=e,{t:j}=(0,d.$)(),w=(0,l.Z)("(min-width:1140px)"),k=(0,_.C)(M.j),{mutate:C,isLoading:I}=(0,p.useMutation)({mutationFn:e=>v.Z.sendMoney(e),onSuccess(){(0,y.Vp)(j("successfully.transferred")),null==g||g(),b()},onError(e){var r;(0,y.vU)((null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.message)||(null==e?void 0:e.message)),console.error(e)}}),S=(0,c.TA)({initialValues:{price:void 0,uuid:""},onSubmit(e){let r={price:e.price,uuid:e.uuid,currency_id:null==k?void 0:k.id};C(r)},validate(e){let r={};return e.price||(r.price=j("required")),e.uuid||(r.uuid=j("required")),r}});return(0,n.jsxs)("div",{className:a().wrapper,children:[(0,n.jsx)("h1",{className:a().title,children:j("send.money")}),(0,n.jsx)("form",{className:a().form,onSubmit:S.handleSubmit,children:(0,n.jsxs)(u.ZP,{container:!0,spacing:4,children:[(0,n.jsxs)(u.ZP,{item:!0,xs:12,md:12,children:[(0,n.jsx)(s.Z,{name:"price",type:"number",label:j("amount"),placeholder:j("type.here"),value:S.values.price,onChange:S.handleChange,error:!!S.errors.price&&S.touched.price}),(0,n.jsx)("div",{style:{color:"red",fontSize:"14px"},children:(null===(r=S.errors)||void 0===r?void 0:r.price)&&(null===(i=S.touched)||void 0===i?void 0:i.price)?null===(o=S.errors)||void 0===o?void 0:o.price:""})]}),(0,n.jsxs)(u.ZP,{item:!0,xs:12,md:12,children:[(0,n.jsx)(Z,{value:S.values.uuid,label:j("user"),onChange:S.handleChange,name:"uuid",placeholder:j("search.user"),error:!!S.errors.uuid&&S.touched.uuid}),(0,n.jsx)("div",{style:{color:"red",fontSize:"14px"},children:(null===(t=S.errors)||void 0===t?void 0:t.uuid)&&(null===(x=S.touched)||void 0===x?void 0:x.uuid)?null===(f=S.errors)||void 0===f?void 0:f.uuid:""})]}),(0,n.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(h.Z,{type:"submit",loading:I,children:j("send")})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,md:6,mt:w?0:-2,children:(0,n.jsx)(m.Z,{type:"button",onClick:b,children:j("cancel")})})]})})]})}},11751:function(e){e.exports={wrapper:"sendWalletMoney_wrapper__ZPhLT",title:"sendWalletMoney_title__bl6GD",form:"sendWalletMoney_form__OIqgn",shimmer:"sendWalletMoney_shimmer__sBck5",radioGroup:"sendWalletMoney_radioGroup__zpXB9"}}}]);