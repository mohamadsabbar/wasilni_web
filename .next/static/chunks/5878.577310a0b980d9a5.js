(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5878],{75158:function(t,e,i){"use strict";i.d(e,{Z:function(){return q}});var n=i(63366),o=i(87462),r=i(67294),a=i(86010),l=i(94780),s=i(41796),d=i(37743),c=i(54235),u=i(85893),p=(0,c.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,c.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=i(36622),_=i(78884),m=i(67074),f=i(1588),g=i(34867);function k(t){return(0,g.Z)("MuiCheckbox",t)}let b=(0,f.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=t=>{let{classes:e,indeterminate:i,color:n}=t,r={root:["root",i&&"indeterminate",`color${(0,h.Z)(n)}`]},a=(0,l.Z)(r,k,e);return(0,o.Z)({},e,a)},S=(0,m.ZP)(d.Z,{shouldForwardProp:t=>(0,m.FO)(t)||"classes"===t,name:"MuiCheckbox",slot:"Root",overridesResolver(t,e){let{ownerState:i}=t;return[e.root,i.indeterminate&&e.indeterminate,"default"!==i.color&&e[`color${(0,h.Z)(i.color)}`]]}})(({theme:t,ownerState:e})=>(0,o.Z)({color:(t.vars||t).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===e.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===e.color?t.palette.action.active:t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==e.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(t.vars||t).palette[e.color].main},[`&.${b.disabled}`]:{color:(t.vars||t).palette.action.disabled}})),C=(0,u.jsx)(v,{}),N=(0,u.jsx)(p,{}),Z=(0,u.jsx)(x,{}),w=r.forwardRef(function(t,e){var i,l;let s=(0,_.Z)({props:t,name:"MuiCheckbox"}),{checkedIcon:d=C,color:c="primary",icon:p=N,indeterminate:v=!1,indeterminateIcon:x=Z,inputProps:h,size:m="medium",className:f}=s,g=(0,n.Z)(s,j),k=v?x:p,b=v?x:d,w=(0,o.Z)({},s,{color:c,indeterminate:v,size:m}),q=y(w);return(0,u.jsx)(S,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":v},h),icon:r.cloneElement(k,{fontSize:null!=(i=k.props.fontSize)?i:m}),checkedIcon:r.cloneElement(b,{fontSize:null!=(l=b.props.fontSize)?l:m}),ownerState:w,ref:e,className:(0,a.Z)(q.root,f)},g,{classes:q}))});var q=w},35878:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return tv}});var n=i(85893),o=i(67294),r=i(29969);function a(t){for(var e=[],i=[],n="",o=0;o<t.stocks.length;o++){n="";for(var r=0;r<t.stocks[o].extras.length;r++){var a=Object.assign({},t.stocks[o].extras[r]),l=e.findIndex(t=>t.id==a.id);-1==l?(a.level=r,a.up=[n],e.push(a),n+=a.id.toString()):(e[l].up.push(n),n+=a.id.toString())}var s={id:t.stocks[o].id,extras:n,price:t.stocks[o].price,quantity:t.stocks[o].quantity,countable_id:t.stocks[o].countable_id,discount:t.stocks[o].discount,tax:t.stocks[o].tax,total_price:t.stocks[o].total_price,bonus:t.stocks[o].bonus,addons:t.stocks[o].addons};i.push(s)}return{stock:i,extras:e}}function l(t,e,i){for(var n=""==t?[]:t.split(","),o=[],r=[],a=0;a<=n.length;a++){a-1>=0&&(r[r.length]=n[a-1].toString());var l=e.filter(t=>{if(new Set(t.up).has(r.join("")))return t});l.length>0&&o.push(l)}var a=0;if(r.length<o.length)for(;a<e.length;){r[r.length]=o[o.length-1][0].id.toString();var l=e.filter(t=>{if(new Set(t.up).has(r.join("")))return t});if(0==l.length)break;o.push(l),a++}return{stock:i[i.findIndex(t=>t.extras==r.join(""))],extras:o}}var s=i(34349),d=i(64698),c=i(88767),u=i(18423),p=i(96477),v=i(37490),x=i(97944),h=i(11163),_=i(32837),m=i(75787),f=i.n(m),g=i(80865),k=i(85081),b=i.n(k);function j(t){let{name:e,data:i,handleExtrasClick:r,stock:a,selectedExtra:l}=t,[s,d]=(0,o.useState)(String(l.id)),c=t=>{d(String(t.id)),r(t)},u=t=>({checked:s==String(t.id),onChange:()=>c(t),value:String(t.id),id:String(t.id),name:e,inputProps:{"aria-label":String(t.id)}});return(0,n.jsxs)("div",{className:b().extrasWrapper,children:[(0,n.jsx)("h3",{className:b().extraTitle,children:e}),(0,n.jsx)("div",{className:b().extraGroup,children:i.map(t=>(0,n.jsxs)("div",{className:b().radioGroup,children:[(0,n.jsx)(g.Z,{...u(t)}),(0,n.jsx)("label",{className:b().label,htmlFor:String(t.id),children:(0,n.jsx)("span",{className:b().text,children:t.value})})]},t.id))})]})}var y=i(11893),S=i.n(y),C=i(78533),N=i.n(C),Z=i(77262),w=i(90026),q=i(75619),B=i(77058),E=i(12554),I=i(54215),F=i(6068),M=i.n(F),L=i(62904),P=i.n(L),z=i(50196),G=i(3075),A=i(5848),W=i(73714),O=i(65749),$=i(74033),T=i(61225);function V(t){let{data:e}=t,{t:i}=(0,B.$)(),o=(0,O.Z)(),r=(0,T.Z)("(max-width:820px)");async function a(t){z.ZP.post("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=".concat(G.$h),t).then(t=>{let e=t.data.shortLink;l(e)}).catch(t=>{(0,W.vU)("Failed to generate link!"),console.log("generate link failed => ",t)})}async function l(t){try{await navigator.clipboard.writeText(t),(0,W.Vp)(i("copied"))}catch(e){(0,W.vU)("Failed to copy!"),console.log("copy failed => ",e)}}return(0,n.jsx)("button",{className:M().shareBtn,onClick:function(){var t,n;let l="".concat(A.o6,"/").concat(o,"/").concat(e.shop_id,"?product=").concat(e.uuid),s={dynamicLinkInfo:{domainUriPrefix:G.AC,link:l,androidInfo:{androidPackageName:G.dK,androidFallbackLink:l},iosInfo:{iosBundleId:G.Mr,iosFallbackLink:l},socialMetaTagInfo:{socialTitle:null==e?void 0:null===(t=e.translation)||void 0===t?void 0:t.title,socialDescription:null==e?void 0:null===(n=e.translation)||void 0===n?void 0:n.description,socialImageLink:e.img}}},d=(0,$.Z)();"Safari"===d||"Google Chrome"===d&&r?function(t){let e=new ClipboardItem({"text/plain":z.ZP.post("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=".concat(G.$h),t).then(t=>{if(!t)return new Promise(async t=>{(0,W.vU)("Failed to generate link!"),t(new Blob[""])});let e=t.data.shortLink;return new Promise(async t=>{(0,W.Vp)(i("copied")),t(new Blob([e]))})})});navigator.clipboard.write([e])}(s):a(s)},children:(0,n.jsx)(P(),{})})}var R=i(30719),U=i(37562),Q=i(95785);i(21082),i(36797);var D=i(71911),H=i(16873),X=i.n(H);function J(t){let{galleries:e=[]}=t,{t:i}=(0,B.$)(),r=(0,o.useRef)(null);return(0,n.jsx)("div",{className:X().wrapper,children:(0,n.jsx)(R.tq,{ref:r,slidesPerView:1,mousewheel:!0,modules:[D.tl,D.Gk],pagination:{clickable:!0,dynamicBullets:!0},children:null==e?void 0:e.map(t=>(0,n.jsx)(R.o5,{children:(0,n.jsx)("div",{className:X().imageWrapper,children:(0,n.jsx)(U.Z,{fill:!0,src:(0,Q.Z)(null==t?void 0:t.path),alt:i("gallery"),sizes:"320px",quality:90})})},null==t?void 0:t.id))})})}function Y(t){var e,i,o,r,a;let{children:l,data:s,loading:d,stock:c,extras:u,counter:p,loadingBtn:v,handleExtrasClick:x,addCounter:h,reduceCounter:_,handleAddToCart:m,totalPrice:g,extrasIds:k}=t,{t:b}=(0,B.$)();return(0,n.jsx)("div",{className:f().wrapper,children:d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(V,{data:s}),(0,n.jsx)("h1",{className:f().title,children:null===(e=s.translation)||void 0===e?void 0:e.title}),(0,n.jsxs)("div",{className:f().flex,children:[(0,n.jsx)("aside",{className:f().aside,children:(0,n.jsx)(J,{galleries:null==s?void 0:s.galleries})}),(0,n.jsxs)("main",{className:f().main,children:[(0,n.jsxs)("div",{className:f().header,children:[(0,n.jsx)("h1",{className:f().title,children:null===(i=s.translation)||void 0===i?void 0:i.title}),(0,n.jsx)("p",{className:f().text,children:null===(o=s.translation)||void 0===o?void 0:o.description}),!!c.bonus&&(0,n.jsxs)("div",{className:f().bonus,children:[(0,n.jsx)(E.Z,{type:"bonus",variant:"circle"}),(0,n.jsx)("span",{className:f().text,children:(0,n.jsx)(I.Z,{data:c.bonus})})]}),!!c.discount&&(0,n.jsxs)("div",{className:f().bonus,children:[(0,n.jsx)(E.Z,{type:"discount",variant:"circle"}),(0,n.jsxs)("span",{className:f().text,children:[(0,n.jsx)("span",{children:b("discount")})," ",(0,n.jsx)(w.Z,{number:c.discount,minus:!0})]})]})]}),u.map((t,e)=>{var i,o,r;return(0,n.jsx)(j,{name:null===(i=t[0])||void 0===i?void 0:null===(o=i.group)||void 0===o?void 0:null===(r=o.translation)||void 0===r?void 0:r.title,data:t,stock:c,selectedExtra:k[e],handleExtrasClick:x},"extra"+e)}),l]})]}),(0,n.jsxs)("div",{className:f().footer,children:[(0,n.jsxs)("div",{className:f().actions,children:[(0,n.jsxs)("div",{className:f().counter,children:[(0,n.jsx)("button",{type:"button",className:"".concat(f().counterBtn," ").concat(1===p?f().disabled:""),disabled:p===s.min_qty,onClick:_,children:(0,n.jsx)(S(),{})}),(0,n.jsxs)("div",{className:f().count,children:[p*((null==s?void 0:s.interval)||1)," ",(0,n.jsx)("span",{className:f().unit,children:null==s?void 0:null===(r=s.unit)||void 0===r?void 0:null===(a=r.translation)||void 0===a?void 0:a.title})]}),(0,n.jsx)("button",{type:"button",className:"".concat(f().counterBtn," ").concat(p===c.quantity||p===s.max_qty?f().disabled:""),disabled:p===c.quantity||p===s.max_qty,onClick:h,children:(0,n.jsx)(N(),{})})]}),(0,n.jsx)("div",{className:f().btnWrapper,children:(0,n.jsx)(Z.Z,{onClick:m,loading:v,disabled:!c.quantity||c.quantity<(s.min_qty||1)||0===c.quantity,children:b(c.quantity?"add":"out.of.stock")})})]}),(0,n.jsxs)("div",{className:f().priceBlock,children:[(0,n.jsx)("p",{children:b("total")}),(0,n.jsx)("h5",{className:f().price,children:(0,n.jsx)(w.Z,{number:g})})]})]})]}):(0,n.jsx)(q.Z,{})})}var K=i(68416),tt=i(67074),te=i(75158);let ti=(0,tt.ZP)("span")(()=>({width:24,height:24,borderRadius:8,boxShadow:"inset 0 2px 3px rgb(0 0 0 / 5%)",transition:".2s background-color",backgroundColor:"var(--grey)",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:disabled ~ &":{boxShadow:"none",background:"var(--grey)"}})),tn=(0,tt.ZP)(ti)({backgroundColor:"var(--primary)",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:24,height:24,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='var(--dark-blue)'/%3E%3C/svg%3E\")",content:'""'}});function to(t){return(0,n.jsx)(te.Z,{disableRipple:!0,color:"default",checkedIcon:(0,n.jsx)(tn,{}),icon:(0,n.jsx)(ti,{}),...t})}function tr(t){var e,i,r,a,l,s,d;let{data:c,quantity:u,selectedValues:p,handleChange:v}=t,x=!!p.find(t=>t.id===String(c.id)),[h,_]=(0,o.useState)(x?u:0);return((0,o.useEffect)(()=>{v(c,h)},[h]),null===(e=c.product)||void 0===e?void 0:e.translation)?(0,n.jsxs)("div",{className:b().checkboxGroup,children:[(0,n.jsx)(to,{id:String(c.id),name:String(c.id),checked:x,onChange:t=>_(t.target.checked?u:0)}),x&&(0,n.jsxs)("div",{className:b().counter,children:[(0,n.jsx)("button",{className:b().btn,disabled:0===h,onClick:function(){_(t=>t-1)},children:(0,n.jsx)(S(),{})}),(0,n.jsx)("span",{className:b().text,children:h*((null==c?void 0:null===(i=c.product)||void 0===i?void 0:i.interval)||1)}),(0,n.jsx)("span",{className:b().symbol,children:" x "}),(0,n.jsx)("button",{className:b().btn,disabled:h===(null===(r=c.product)||void 0===r?void 0:null===(a=r.stock)||void 0===a?void 0:a.quantity),onClick:function(){_(t=>t+1)},children:(0,n.jsx)(N(),{})})]}),(0,n.jsxs)("label",{className:b().label,htmlFor:String(c.id),children:[(0,n.jsx)("span",{className:b().text,children:null==c?void 0:null===(l=c.product)||void 0===l?void 0:l.translation.title}),(0,n.jsx)("span",{className:b().mute,children:(0,n.jsx)(w.Z,{number:null==c?void 0:null===(s=c.product)||void 0===s?void 0:null===(d=s.stock)||void 0===d?void 0:d.total_price,plus:!0})})]})]}):(0,n.jsx)("div",{})}function ta(t){let{data:e=[],handleAddonClick:i,quantity:r,selectedAddons:a,onSelectAddon:l}=t,{t:s}=(0,B.$)(),d=(0,o.useCallback)((t,e)=>{let i=String(t.id);if(e){let n=[...a],o=n.findIndex(t=>t.id==i);o<0?n.push({id:i,quantity:e}):n[o].quantity=e,l(n)}else l(t=>t.filter(t=>t.id!==i))},[a]);return(0,K.Z)(()=>{let t=[];a.forEach(i=>{var n;let o=e.find(t=>String(t.id)==i.id);if(!o){t=[];return}let r={...o.product,stock:{...null===(n=o.product)||void 0===n?void 0:n.stock,quantity:i.quantity}};t.push(r)}),i(t)},[a]),(0,n.jsxs)("div",{className:b().extrasWrapper,style:{display:e.length>0?"block":"none"},children:[(0,n.jsx)("h3",{className:b().extraTitle,children:s("ingredients")}),(0,n.jsx)("div",{className:b().extraGroup,children:e.filter(t=>!!t.product).map(t=>{var e;return(0,n.jsx)(tr,{data:t,quantity:(null===(e=t.product)||void 0===e?void 0:e.min_qty)||1,selectedValues:a,handleChange:d},t.id+"addon")})})]})}var tl=i(57318);function ts(t){let{handleClose:e,uuid:i}=t,{t:r}=(0,B.$)(),[m,f]=(0,o.useState)(1),[g,k]=(0,o.useState)([]),[b,j]=(0,o.useState)([]),[y,S]=(0,o.useState)({extras:[],stock:{id:0,quantity:1,price:0}}),[C,N]=(0,o.useState)([]),[Z,w]=(0,o.useState)([]),q=(0,s.T)(),E=(0,s.C)(d.j),I=(0,s.C)(p.Ns),[F,M,L]=(0,v.Z)(),{query:P}=(0,h.useRouter)(),z=Number(P.id),{isOpen:G,isShopClosed:A}=(0,tl.L)(),[O,$]=(0,o.useState)([]),{data:T}=(0,c.useQuery)(["product",i,E],()=>_.Z.getById(i,{currency_id:null==E?void 0:E.id}),{enabled:Boolean(i),select:t=>t.data}),{isLoading:V,mutate:R}=(0,c.useMutation)({mutationFn:t=>u.Z.insert(t),onSuccess(t){q((0,p.CR)(t.data)),e()},onError(t){console.log("err => ",t),(0,W.vU)(r("try.again"))}}),{isLoading:U,mutate:Q}=(0,c.useMutation)({mutationFn:t=>u.Z.delete(t),onSuccess(){q((0,p.tx)()),X(),L()}});(0,o.useEffect)(()=>{if(T){var t;f(T.min_qty||1);let e=a(T);k(e.extras),j(e.stock),S(l("",e.extras,e.stock)),null===(t=l("",e.extras,e.stock).extras)||void 0===t||t.forEach(t=>{N(e=>[...e,t[0]])})}},[T]);let D=t=>{$([]);let e=C.findIndex(e=>e.extra_group_id===t.extra_group_id),i=C;e>-1&&(i=i.slice(0,e)),i.push(t);let n=i.map(t=>t.id).join(",");var o,r=l(n,g,b.map(t=>({...t})));S(r),null===(o=r.extras)||void 0===o||o.forEach(e=>{let n=C.findIndex(i=>e[0].extra_group_id!=t.extra_group_id?i.extra_group_id===e[0].extra_group_id:i.extra_group_id===t.extra_group_id);if(e[0].level>=t.level){var o=e[0].extra_group_id!=t.extra_group_id?e[0]:t;-1==n?i.push(o):i[n]=o}}),N(i)};function H(t){var e;let i=Z.find(e=>{var i;return(null===(i=e.stock)||void 0===i?void 0:i.id)===t});return i?null===(e=i.stock)||void 0===e?void 0:e.quantity:0}function X(){var t;let e=(null===(t=y.stock.addons)||void 0===t?void 0:t.filter(t=>!!t.product))||[],i=[];e.forEach(t=>{var e,n,o,r,a,l;0!==H(null===(e=t.product)||void 0===e?void 0:null===(n=e.stock)||void 0===n?void 0:n.id)&&i.push({stock_id:null===(o=t.product)||void 0===o?void 0:null===(r=o.stock)||void 0===r?void 0:r.id,quantity:H(null===(a=t.product)||void 0===a?void 0:null===(l=a.stock)||void 0===l?void 0:l.id),parent_id:y.stock.id})});let n={shop_id:z,currency_id:null==E?void 0:E.id,rate:null==E?void 0:E.rate,products:[{stock_id:y.stock.id,quantity:m},...i]};R(n)}return(0,n.jsxs)("div",{children:[(0,n.jsx)(Y,{data:T||{},loading:!!T,stock:y.stock,extras:y.extras,counter:m,addCounter:function(){f(t=>t+1)},reduceCounter:function(){f(t=>t-1)},handleExtrasClick:D,handleAddToCart:function(){if(!G||A){(0,W.um)(r("shop.closed"));return}if(!(0===I.shop_id||I.shop_id===z)){M();return}X()},loadingBtn:V,totalPrice:function(){let t=Z.reduce((t,e)=>{var i,n;return t+Number(null===(i=e.stock)||void 0===i?void 0:i.total_price)*Number(null===(n=e.stock)||void 0===n?void 0:n.quantity)},0);return t+Number(y.stock.total_price)*m}(),extrasIds:C,children:(0,n.jsx)(ta,{data:y.stock.addons||[],handleAddonClick:function(t){w(t)},quantity:m,selectedAddons:O,onSelectAddon:$})}),(0,n.jsx)(x.default,{open:F,handleClose:L,onSubmit:function(){let t=[I.id];Q({ids:t})},loading:U})]})}var td=i(13508);function tc(t){let{handleClose:e,uuid:i}=t,{t:r}=(0,B.$)(),[u,p]=(0,o.useState)(1),[h,m]=(0,o.useState)([]),[f,g]=(0,o.useState)([]),[k,b]=(0,o.useState)({extras:[],stock:{id:0,quantity:1,price:0}}),[j,y]=(0,o.useState)([]),[S,C]=(0,o.useState)([]),N=(0,s.T)(),Z=(0,s.C)(td.KY),w=(0,s.C)(d.j),[q,E,I]=(0,v.Z)(),{isOpen:F,isShopClosed:M}=(0,tl.L)(),[L,P]=(0,o.useState)([]),{data:z}=(0,c.useQuery)(["product",i,w],()=>_.Z.getById(i,{currency_id:null==w?void 0:w.id}),{enabled:Boolean(i),select:t=>t.data});(0,o.useEffect)(()=>{if(z){var t;p(z.min_qty||1);let e=a(z);m(e.extras),g(e.stock),b(l("",e.extras,e.stock)),null===(t=l("",e.extras,e.stock).extras)||void 0===t||t.forEach(t=>{y(e=>[...e,t[0]])})}},[z]);let G=t=>{P([]);let e=j.findIndex(e=>e.extra_group_id===t.extra_group_id),i=j;e>-1&&(i=i.slice(0,e)),i.push(t);let n=i.map(t=>t.id).join(",");var o,r=l(n,h,f);b(r),null===(o=r.extras)||void 0===o||o.forEach(e=>{let n=j.findIndex(i=>e[0].extra_group_id!=t.extra_group_id?i.extra_group_id===e[0].extra_group_id:i.extra_group_id===t.extra_group_id);if(e[0].level>=t.level){var o=e[0].extra_group_id!=t.extra_group_id?e[0]:t;-1==n?i.push(o):i[n]=o}}),y(i)};function A(){let t=S.map(t=>{var e;return{id:t.id,img:t.img,translation:t.translation,quantity:null===(e=t.stock)||void 0===e?void 0:e.quantity,stock:{...t.stock,product:{interval:(null==t?void 0:t.interval)||1}},shop_id:t.shop_id,extras:[]}}),i={id:null==z?void 0:z.id,img:null==z?void 0:z.img,translation:null==z?void 0:z.translation,quantity:u,stock:k.stock,shop_id:null==z?void 0:z.shop_id,extras:j.map(t=>t.value),addons:t,interval:null==z?void 0:z.interval,unit:null==z?void 0:z.unit};N((0,td.Jr)(i)),e()}return(0,n.jsxs)("div",{children:[(0,n.jsx)(Y,{data:z||{},loading:!!z,stock:k.stock,extras:k.extras,counter:u,addCounter:function(){p(t=>t+1)},reduceCounter:function(){p(t=>t-1)},handleExtrasClick:G,handleAddToCart:function(){if(!F||M){(0,W.um)(r("shop.closed"));return}if(!(!Z.length||Z.some(t=>t.shop_id===(null==z?void 0:z.shop_id)))){E();return}A()},totalPrice:function(){var t;let e=S.reduce((t,e)=>{var i,n;return t+Number(null===(i=e.stock)||void 0===i?void 0:i.total_price)*Number(null===(n=e.stock)||void 0===n?void 0:n.quantity)},0);return e+Number(null===(t=k.stock)||void 0===t?void 0:t.total_price)*u}(),extrasIds:j,children:(0,n.jsx)(ta,{data:k.stock.addons||[],handleAddonClick:function(t){C(t)},quantity:u,selectedAddons:L,onSelectAddon:P})}),(0,n.jsx)(x.default,{open:q,handleClose:I,onSubmit:function(){N((0,td.LL)()),A()}})]})}var tu=i(36041);function tp(t){let{handleClose:e,uuid:i}=t,{t:r}=(0,B.$)(),[x,m]=(0,o.useState)(1),[f,g]=(0,o.useState)([]),[k,b]=(0,o.useState)([]),[j,y]=(0,o.useState)({extras:[],stock:{id:0,quantity:1,price:0}}),[S,C]=(0,o.useState)([]),[N,Z]=(0,o.useState)([]),w=(0,s.T)(),q=(0,s.C)(p.Ns),E=(0,s.C)(d.j),[I,F,M]=(0,v.Z)(),{query:L}=(0,h.useRouter)(),P=Number(L.id),{clearMember:z,member:G}=(0,tl.L)(),[A,W]=(0,o.useState)([]),{data:O}=(0,c.useQuery)(["product",i,E],()=>_.Z.getById(i,{currency_id:null==E?void 0:E.id}),{enabled:Boolean(i),select:t=>t.data}),{isLoading:$,mutate:T}=(0,c.useMutation)({mutationFn:t=>u.Z.insertGuest(t),onSuccess(t){w((0,p.CR)(t.data)),e()}}),{mutate:V,isLoading:R}=(0,c.useMutation)({mutationFn:t=>u.Z.guestLeave(t),onSuccess(){w((0,p.tx)()),M(),z()}});(0,o.useEffect)(()=>{if(O){var t;m(O.min_qty||1);let e=a(O);g(e.extras),b(e.stock),y(l("",e.extras,e.stock)),null===(t=l("",e.extras,e.stock).extras)||void 0===t||t.forEach(t=>{C(e=>[...e,t[0]])})}},[O]);let U=t=>{W([]);let e=S.findIndex(e=>e.extra_group_id===t.extra_group_id),i=S;e>-1&&(i=i.slice(0,e)),i.push(t);let n=i.map(t=>t.id).join(",");var o,r=l(n,f,k);y(r),null===(o=r.extras)||void 0===o||o.forEach(e=>{let n=S.findIndex(i=>e[0].extra_group_id!=t.extra_group_id?i.extra_group_id===e[0].extra_group_id:i.extra_group_id===t.extra_group_id);if(e[0].level>=t.level){var o=e[0].extra_group_id!=t.extra_group_id?e[0]:t;-1==n?i.push(o):i[n]=o}}),C(i)};function Q(t){var e;let i=N.find(e=>{var i;return(null===(i=e.stock)||void 0===i?void 0:i.id)===t});return i?null===(e=i.stock)||void 0===e?void 0:e.quantity:0}return(0,n.jsxs)("div",{children:[(0,n.jsx)(Y,{data:O||{},loading:!!O,stock:j.stock,extras:j.extras,counter:x,addCounter:function(){m(t=>t+1)},reduceCounter:function(){m(t=>t-1)},handleExtrasClick:U,handleAddToCart:function(){if(!(0===q.shop_id||q.shop_id===P)){F();return}!function(){var t;let e=(null===(t=j.stock.addons)||void 0===t?void 0:t.filter(t=>!!t.product))||[],i=[];e.forEach(t=>{var e,n,o,r,a,l;0!==Q(null===(e=t.product)||void 0===e?void 0:null===(n=e.stock)||void 0===n?void 0:n.id)&&i.push({stock_id:null===(o=t.product)||void 0===o?void 0:null===(r=o.stock)||void 0===r?void 0:r.id,quantity:Q(null===(a=t.product)||void 0===a?void 0:null===(l=a.stock)||void 0===l?void 0:l.id),parent_id:j.stock.id})});let n={shop_id:P,cart_id:null==G?void 0:G.cart_id,user_cart_uuid:null==G?void 0:G.uuid,products:[{stock_id:j.stock.id,quantity:x},...i]};T(n)}()},loadingBtn:$,totalPrice:function(){let t=N.reduce((t,e)=>{var i,n;return t+Number(null===(i=e.stock)||void 0===i?void 0:i.total_price)*Number(null===(n=e.stock)||void 0===n?void 0:n.quantity)},0);return t+Number(j.stock.total_price)*x}(),extrasIds:S,children:(0,n.jsx)(ta,{data:j.stock.addons||[],handleAddonClick:function(t){Z(t)},quantity:x,selectedAddons:A,onSelectAddon:W})}),(0,n.jsx)(tu.default,{open:I,handleClose:M,onSubmit:function(){V({ids:[null==G?void 0:G.uuid],cart_id:q.id})},loading:R,title:r("leave.group.prompt")})]})}function tv(t){let{data:e,uuid:i,handleClose:o}=t,{isAuthenticated:a}=(0,r.a)(),{isMember:l}=(0,tl.L)();return l?(0,n.jsx)(tp,{handleClose:o,uuid:i}):a?(0,n.jsx)(ts,{handleClose:o,uuid:i}):(0,n.jsx)(tc,{handleClose:o,uuid:i})}},65749:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var n=i(11163);function o(){let{pathname:t}=(0,n.useRouter)();return t.includes("shop")?"shop":"restaurant"}},74033:function(t,e,i){"use strict";function n(){let t=function(t){return t.test(window.navigator.userAgent)};switch(!0){case t(/edg/i):return"Microsoft Edge";case t(/trident/i):return"Microsoft Internet Explorer";case t(/firefox|fxios/i):return"Mozilla Firefox";case t(/opr\//i):return"Opera";case t(/ucbrowser/i):return"UC Browser";case t(/samsungbrowser/i):return"Samsung Browser";case t(/chrome|chromium|crios/i):return"Google Chrome";case t(/safari/i):return"Safari";default:return"Other"}}i.d(e,{Z:function(){return n}})},85081:function(t){t.exports={extrasWrapper:"extrasForm_extrasWrapper__DQpd1",extraTitle:"extrasForm_extraTitle__QhfmX",extraGroup:"extrasForm_extraGroup__yiME6",radioGroup:"extrasForm_radioGroup__CDOOV",checkboxGroup:"extrasForm_checkboxGroup__zBfML",label:"extrasForm_label__4bwDC",text:"extrasForm_text__PzEvd",mute:"extrasForm_mute__dfP_l",btn:"extrasForm_btn__7CWoU",symbol:"extrasForm_symbol__gLTDN",counter:"extrasForm_counter__cNgHJ"}},16873:function(t){t.exports={wrapper:"productGalleries_wrapper__4VkAA",imageWrapper:"productGalleries_imageWrapper__CUInM",image:"productGalleries_image__WwG3X"}},6068:function(t){t.exports={shareBtn:"productShare_shareBtn__oG7wY"}},75787:function(t){t.exports={wrapper:"productSingle_wrapper__UXW6W",title:"productSingle_title___1nV5",flex:"productSingle_flex__uz_fU",aside:"productSingle_aside__LJpWM",main:"productSingle_main__4MLQa",header:"productSingle_header__vCZsa",text:"productSingle_text__LkoWJ",bonus:"productSingle_bonus__hhtA6",footer:"productSingle_footer__QyCBP",actions:"productSingle_actions__JWon5",counter:"productSingle_counter__BWho7",counterBtn:"productSingle_counterBtn__EdXO0",disabled:"productSingle_disabled__yQ_nY",count:"productSingle_count__foGip",unit:"productSingle_unit__m6aXX",btnWrapper:"productSingle_btnWrapper__VmFrA",priceBlock:"productSingle_priceBlock__Maw_T",price:"productSingle_price__md9Do"}},36797:function(){},62904:function(t,e,i){"use strict";var n=i(67294),o=n&&"object"==typeof n&&"default"in n?n:{default:n},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=function(t,e){var i={};for(var n in t)!(e.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},l=function(t){var e=t.color,i=t.size,n=void 0===i?24:i,l=(t.children,a(t,["color","size","children"])),s="remixicon-icon "+(l.className||"");return o.default.createElement("svg",r({},l,{className:s,width:n,height:n,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),o.default.createElement("path",{d:"M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}))},s=o.default.memo?o.default.memo(l):l;t.exports=s}}]);