(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5774],{5774:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var o=t(85893);t(67294);var i=t(86989),r=t.n(i),a=t(62904),c=t.n(a),l=t(50196),s=t(3075),u=t(5848),d=t(73714),f=t(77058),p=t(74033),h=t(61225);function m(e){let{data:n}=e,{t}=(0,f.$)(),i=(0,h.Z)("(max-width:820px)");async function a(e){l.ZP.post("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=".concat(s.Kc),e).then(e=>{let n=e.data.shortLink;m(n)}).catch(e=>{(0,d.vU)("Failed to generate link!"),console.log("generate link failed => ",e)})}async function m(e){try{await navigator.clipboard.writeText(e),(0,d.Vp)(t("copied"))}catch(n){(0,d.vU)("Failed to copy!"),console.log("copy failed => ",n)}}return(0,o.jsx)("button",{className:r().shareBtn,onClick:function(){var e,o;let r="".concat(u.o6,"/shop/").concat(null==n?void 0:n.id),c={dynamicLinkInfo:{domainUriPrefix:s.AC,link:r,androidInfo:{androidPackageName:s.dK,androidFallbackLink:r},iosInfo:{iosBundleId:s.Mr,iosFallbackLink:r},socialMetaTagInfo:{socialTitle:null==n?void 0:null===(e=n.translation)||void 0===e?void 0:e.title,socialDescription:null==n?void 0:null===(o=n.translation)||void 0===o?void 0:o.description,socialImageLink:null==n?void 0:n.logo_img}}},f=(0,p.Z)();"Safari"===f||"Google Chrome"===f&&i?function(e){let n=new ClipboardItem({"text/plain":l.ZP.post("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=".concat(s.Kc),e).then(e=>{if(!e)return new Promise(async e=>{(0,d.vU)("Failed to generate link!"),e(new Blob[""])});let n=e.data.shortLink;return new Promise(async e=>{(0,d.Vp)(t("copied")),e(new Blob([n]))})})});navigator.clipboard.write([n])}(c):a(c)},children:(0,o.jsx)(c(),{})})}},74033:function(e,n,t){"use strict";function o(){let e=function(e){return e.test(window.navigator.userAgent)};switch(!0){case e(/edg/i):return"Microsoft Edge";case e(/trident/i):return"Microsoft Internet Explorer";case e(/firefox|fxios/i):return"Mozilla Firefox";case e(/opr\//i):return"Opera";case e(/ucbrowser/i):return"UC Browser";case e(/samsungbrowser/i):return"Samsung Browser";case e(/chrome|chromium|crios/i):return"Google Chrome";case e(/safari/i):return"Safari";default:return"Other"}}t.d(n,{Z:function(){return o}})},86989:function(e){e.exports={shareBtn:"shopShare_shareBtn__yY224"}},62904:function(e,n,t){"use strict";var o=t(67294),i=o&&"object"==typeof o&&"default"in o?o:{default:o},r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(e,n){var t={};for(var o in e)!(n.indexOf(o)>=0)&&Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c=function(e){var n=e.color,t=e.size,o=void 0===t?24:t,c=(e.children,a(e,["color","size","children"])),l="remixicon-icon "+(c.className||"");return i.default.createElement("svg",r({},c,{className:l,width:o,height:o,fill:void 0===n?"currentColor":n,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}))},l=i.default.memo?i.default.memo(c):c;e.exports=l}}]);