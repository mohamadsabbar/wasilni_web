(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{86555:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var o=n(85893),r=n(67294),a=n(76725),l=n(9730),i=n.n(l),s=n(5848),c=n(60291),u=n(45122),d=n(90026);let p=e=>(0,o.jsx)("div",{className:i().point,children:(0,o.jsx)("img",{src:"/images/marker.png",width:32,alt:"Location"})}),m=e=>(0,o.jsxs)("div",{className:i().floatCard,children:[(null==e?void 0:e.price)&&(0,o.jsx)("span",{className:i().price,children:(0,o.jsx)(d.Z,{number:e.price})}),(0,o.jsx)("div",{className:i().marker,children:(0,o.jsx)(u.Z,{data:e.shop,size:"small"})})]}),f={fields:["address_components","geometry"],types:["address"]};function v(e){var t,n;let{location:l,setLocation:u=()=>{},readOnly:d=!1,shop:v,inputRef:_,setAddress:g,price:y,drawLine:h,defaultZoom:b=15}=e,x=(0,r.useRef)(),[j,k]=(0,r.useState)(),[N,C]=(0,r.useState)();async function L(e){var t;if(d)return;let n={lat:e.center.lat(),lng:e.center.lng()};u(n);let o=await (0,c.K)("".concat(n.lat,",").concat(n.lng));(null==_?void 0:null===(t=_.current)||void 0===t?void 0:t.value)&&(_.current.value=o),g&&g(o)}let T=(e,t)=>{if(_&&(x.current=new t.places.Autocomplete(_.current,f),x.current.addListener("place_changed",async function(){let e=await x.current.getPlace(),t=function(e){let t={street_number:"streetNumber",route:"streetName",sublocality_level_1:"city",locality:"city1",administrative_area_level_1:"state",postal_code:"postalCode",country:"country"},n={};e.address_components.forEach(e=>{n[t[e.types[0]]]=e.long_name});let o=[null==n?void 0:n.streetName,null==n?void 0:n.city1,null==n?void 0:n.country];return o.join(", ")}(e),n={lat:e.geometry.location.lat(),lng:e.geometry.location.lng()};u(n),g&&g(t)})),C(e),k(t),v){let n={lat:Number(null===(a=v.location)||void 0===a?void 0:a.latitude)||0,lng:Number(null===(i=v.location)||void 0===i?void 0:i.longitude)||0},o=[l,n],r=new t.LatLngBounds;for(var a,i,s=0;s<o.length;s++)r.extend(o[s]);e.fitBounds(r)}};return(0,r.useEffect)(()=>{if(v&&j){var e,t;let n={lat:Number(null===(e=v.location)||void 0===e?void 0:e.latitude)||0,lng:Number(null===(t=v.location)||void 0===t?void 0:t.longitude)||0},o=[l,n],r=new j.LatLngBounds;for(var a=0;a<o.length;a++)r.extend(o[a]);N.fitBounds(r)}},[l,null==v?void 0:v.location,h,N,j]),(0,o.jsxs)("div",{className:i().root,children:[!d&&(0,o.jsx)("div",{className:i().marker,children:(0,o.jsx)("img",{src:"/images/marker.png",width:32,alt:"Location"})}),(0,o.jsxs)(a.ZP,{bootstrapURLKeys:{key:s.kr||"",libraries:["places"]},zoom:b,center:l,onDragEnd:L,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded(e){let{map:t,maps:n}=e;return T(t,n)},options:{fullscreenControl:d},children:[d&&(0,o.jsx)(p,{lat:l.lat,lng:l.lng}),!!v&&(0,o.jsx)(m,{lat:(null===(t=v.location)||void 0===t?void 0:t.latitude)||0,lng:(null===(n=v.location)||void 0===n?void 0:n.longitude)||0,shop:v,price:y})]})]})}},9730:function(e){e.exports={root:"map_root__3qcrq",marker:"map_marker__EnBz1",floatCard:"map_floatCard__1zZP1",price:"map_price__CTP0I",point:"map_point__GfLMi"}},92703:function(e,t,n){"use strict";var o=n(50414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,l){if(l!==o){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);