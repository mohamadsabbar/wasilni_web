"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8190],{23926:function(e,t,n){var i=n(67294),a=n(30067),r=n(73633),o=n(57094),s=n(85893);function c(e){return e.substring(2).toLowerCase()}t.Z=function(e){let{children:t,disableReactTree:n=!1,mouseEvent:u="onClick",onClickAway:l,touchEvent:d="onTouchEnd"}=e,f=i.useRef(!1),p=i.useRef(null),g=i.useRef(!1),w=i.useRef(!1);i.useEffect(()=>(setTimeout(()=>{g.current=!0},0),()=>{g.current=!1}),[]);let h=(0,a.Z)(t.ref,p),m=(0,r.Z)(e=>{let t=w.current;w.current=!1;let i=(0,o.Z)(p.current);if(g.current&&p.current&&(!("clientX"in e)||!(i.documentElement.clientWidth<e.clientX)&&!(i.documentElement.clientHeight<e.clientY))){if(f.current){f.current=!1;return}(e.composedPath?e.composedPath().indexOf(p.current)>-1:!i.documentElement.contains(e.target)||p.current.contains(e.target))||!n&&t||l(e)}}),b=e=>n=>{w.current=!0;let i=t.props[e];i&&i(n)},y={ref:h};return!1!==d&&(y[d]=b(d)),i.useEffect(()=>{if(!1!==d){let e=c(d),t=(0,o.Z)(p.current),n=()=>{f.current=!0};return t.addEventListener(e,m),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,m),t.removeEventListener("touchmove",n)}}},[m,d]),!1!==u&&(y[u]=b(u)),i.useEffect(()=>{if(!1!==u){let e=c(u),t=(0,o.Z)(p.current);return t.addEventListener(e,m),()=>{t.removeEventListener(e,m)}}},[m,u]),(0,s.jsx)(i.Fragment,{children:i.cloneElement(t,y)})}},25369:function(e,t,n){n.d(t,{KL:function(){return e$},LP:function(){return ex},ps:function(){return eF}});var i,a,r,o,s=n(32238),c=n(8463),u=n(74444),l=n(26531);let d="@firebase/installations",f="0.5.16",p=`w:${f}`,g="FIS_v2",w=new u.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function h(e){return e instanceof u.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function m({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function b(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function y(e,t){let n=await t.json(),i=n.error;return w.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function v({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function k(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function I({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let i=m(e),a=v(e),r=t.getImmediate({optional:!0});if(r){let o=await r.getHeartbeatsHeader();o&&a.append("x-firebase-client",o)}let s={fid:n,authVersion:g,appId:e.appId,sdkVersion:p},c={method:"POST",headers:a,body:JSON.stringify(s)},u=await k(()=>fetch(i,c));if(u.ok){let l=await u.json(),d={fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:b(l.authToken)};return d}throw await y("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function S(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let T=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function C(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let j=new Map;function E(e,t){let n=C(e);A(n,t),function(e,t){let n=(!O&&"BroadcastChannel"in self&&((O=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{A(e.data.key,e.data.fid)}),O);n&&n.postMessage({key:e,fid:t}),0===j.size&&O&&(O.close(),O=null)}(n,t)}function A(e,t){let n=j.get(e);if(n)for(let i of n)i(t)}let O=null,D="firebase-installations-store",K=null;function P(){return K||(K=(0,l.X3)("firebase-installations-database",1,{upgrade(e,t){0===t&&e.createObjectStore(D)}})),K}async function _(e,t){let n=C(e),i=await P(),a=i.transaction(D,"readwrite"),r=a.objectStore(D),o=await r.get(n);return await r.put(t,n),await a.done,o&&o.fid===t.fid||E(e,t.fid),t}async function M(e){let t=C(e),n=await P(),i=n.transaction(D,"readwrite");await i.objectStore(D).delete(t),await i.done}async function N(e,t){let n=C(e),i=await P(),a=i.transaction(D,"readwrite"),r=a.objectStore(D),o=await r.get(n),s=t(o);return void 0===s?await r.delete(n):await r.put(s,n),await a.done,s&&(!o||o.fid!==s.fid)&&E(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function L(e){let t;let n=await N(e.appConfig,n=>{let i=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return T.test(n)?n:""}catch(i){return""}}(),registrationStatus:0};return x(t)}(n),a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let n=Promise.reject(w.create("app-offline"));return{installationEntry:t,registrationPromise:n}}let i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=q(e,i);return{installationEntry:i,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:R(e)}:{installationEntry:t}}(e,i);return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function q(e,t){try{let n=await I(e,t);return _(e.appConfig,n)}catch(i){throw h(i)&&409===i.customData.serverCode?await M(e.appConfig):await _(e.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function R(e){let t=await $(e.appConfig);for(;1===t.registrationStatus;)await S(100),t=await $(e.appConfig);if(0===t.registrationStatus){let{installationEntry:n,registrationPromise:i}=await L(e);return i||n}return t}function $(e){return N(e,e=>{if(!e)throw w.create("installation-not-found");return x(e)})}function x(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function F({appConfig:e,heartbeatServiceProvider:t},n){let i=function(e,{fid:t}){return`${m(e)}/${t}/authTokens:generate`}(e,n),a=function(e,{refreshToken:t}){let n=v(e);return n.append("Authorization",`${g} ${t}`),n}(e,n),r=t.getImmediate({optional:!0});if(r){let o=await r.getHeartbeatsHeader();o&&a.append("x-firebase-client",o)}let s={installation:{sdkVersion:p,appId:e.appId}},c={method:"POST",headers:a,body:JSON.stringify(s)},u=await k(()=>fetch(i,c));if(u.ok){let l=await u.json(),d=b(l);return d}throw await y("Generate Auth Token",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function H(e,t=!1){let n;let i=await N(e.appConfig,i=>{var a;if(!B(i))throw w.create("not-registered");let r=i.authToken;if(!t&&2===(a=r).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(a))return i;if(1===r.requestStatus)return n=W(e,t),i;{if(!navigator.onLine)throw w.create("app-offline");let o=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=X(e,o),o}}),a=n?await n:i.authToken;return a}async function W(e,t){let n=await V(e.appConfig);for(;1===n.authToken.requestStatus;)await S(100),n=await V(e.appConfig);let i=n.authToken;return 0===i.requestStatus?H(e,t):i}function V(e){return N(e,e=>{if(!B(e))throw w.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function X(e,t){try{let n=await F(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await _(e.appConfig,i),n}catch(r){if(h(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await M(e.appConfig);else{let a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _(e.appConfig,a)}throw r}}function B(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function U(e){let{installationEntry:t,registrationPromise:n}=await L(e);return n?n.catch(console.error):H(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Z(e,t=!1){await z(e);let n=await H(e,t);return n.token}async function z(e){let{registrationPromise:t}=await L(e);t&&await t}function G(e){return w.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let J="installations",Y=e=>{let t=e.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(!e||!e.options)throw G("App Configuration");if(!e.name)throw G("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw G(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),i=(0,s.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Q=e=>{let t=e.getProvider("app").getImmediate(),n=(0,s.qX)(t,J).getImmediate();return{getId:()=>U(n),getToken:e=>Z(n,e)}};(0,s.Xd)(new c.wA(J,Y,"PUBLIC")),(0,s.Xd)(new c.wA("installations-internal",Q,"PRIVATE")),(0,s.KN)(d,f),(0,s.KN)(d,f,"esm2017");let ee="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",et="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function en(e){let t=new Uint8Array(e),n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(i=r||(r={}))[i.DATA_MESSAGE=1]="DATA_MESSAGE",i[i.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(a=o||(o={})).PUSH_RECEIVED="push-received",a.NOTIFICATION_CLICKED="notification-clicked";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ei="fcm_token_details_db",ea="fcm_token_object_Store";async function er(e){if("databases"in indexedDB){let t=await indexedDB.databases(),n=t.map(e=>e.name);if(!n.includes(ei))return null}let i=null,a=await (0,l.X3)(ei,5,{async upgrade(t,n,a,r){var o;if(n<2||!t.objectStoreNames.contains(ea))return;let s=r.objectStore(ea),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c){if(2===n){if(!c.auth||!c.p256dh||!c.endpoint)return;i={token:c.fcmToken,createTime:null!==(o=c.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:en(c.vapidKey)}}}else 3===n?i={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:en(c.auth),p256dh:en(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:en(c.vapidKey)}}:4===n&&(i={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:en(c.auth),p256dh:en(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:en(c.vapidKey)}})}}});return a.close(),await (0,l.Lj)(ei),await (0,l.Lj)("fcm_vapid_details_db"),await (0,l.Lj)("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(i)?null:i}let eo="firebase-messaging-store",es=null;function ec(){return es||(es=(0,l.X3)("firebase-messaging-database",1,{upgrade(e,t){0===t&&e.createObjectStore(eo)}})),es}async function eu(e){let t=function({appConfig:e}){return e.appId}(e),n=await ec(),i=await n.transaction(eo).objectStore(eo).get(t);if(i)return i;{let a=await er(e.appConfig.senderId);if(a)return await el(e,a),a}}async function el(e,t){let n=function({appConfig:e}){return e.appId}(e),i=await ec(),a=i.transaction(eo,"readwrite");return await a.objectStore(eo).put(t,n),await a.done,t}async function ed(e){let t=function({appConfig:e}){return e.appId}(e),n=await ec(),i=n.transaction(eo,"readwrite");await i.objectStore(eo).delete(t),await i.done}let ef=new u.LL("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ep(e,t){let n;let i=await em(e),a=eb(t),r={method:"POST",headers:i,body:JSON.stringify(a)};try{let o=await fetch(eh(e.appConfig),r);n=await o.json()}catch(s){throw ef.create("token-subscribe-failed",{errorInfo:null==s?void 0:s.toString()})}if(n.error){let c=n.error.message;throw ef.create("token-subscribe-failed",{errorInfo:c})}if(!n.token)throw ef.create("token-subscribe-no-token");return n.token}async function eg(e,t){let n;let i=await em(e),a=eb(t.subscriptionOptions),r={method:"PATCH",headers:i,body:JSON.stringify(a)};try{let o=await fetch(`${eh(e.appConfig)}/${t.token}`,r);n=await o.json()}catch(s){throw ef.create("token-update-failed",{errorInfo:null==s?void 0:s.toString()})}if(n.error){let c=n.error.message;throw ef.create("token-update-failed",{errorInfo:c})}if(!n.token)throw ef.create("token-update-no-token");return n.token}async function ew(e,t){let n=await em(e);try{let i=await fetch(`${eh(e.appConfig)}/${t}`,{method:"DELETE",headers:n}),a=await i.json();if(a.error){let r=a.error.message;throw ef.create("token-unsubscribe-failed",{errorInfo:r})}}catch(o){throw ef.create("token-unsubscribe-failed",{errorInfo:null==o?void 0:o.toString()})}}function eh({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function em({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function eb({p256dh:e,auth:t,endpoint:n,vapidKey:i}){let a={web:{endpoint:n,auth:t,p256dh:e}};return i!==ee&&(a.web.applicationPubKey=i),a}async function ey(e){let t=await eS(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:en(t.getKey("auth")),p256dh:en(t.getKey("p256dh"))},i=await eu(e.firebaseDependencies);if(!i)return eI(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,a=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&i&&a&&r}(i.subscriptionOptions,n))return Date.now()>=i.createTime+6048e5?ek(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await ew(e.firebaseDependencies,i.token)}catch(a){console.warn(a)}return eI(e.firebaseDependencies,n)}async function ev(e){let t=await eu(e.firebaseDependencies);t&&(await ew(e.firebaseDependencies,t.token),await ed(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function ek(e,t){try{let n=await eg(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await el(e.firebaseDependencies,i),n}catch(a){throw await ev(e),a}}async function eI(e,t){let n=await ep(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return await el(e,i),i.token}async function eS(e,t){let n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),a=new Uint8Array(i.length);for(let r=0;r<i.length;++r)a[r]=i.charCodeAt(r);return a}(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eT(e){var t;let n={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let i=t.notification.body;i&&(e.notification.body=i);let a=t.notification.image;a&&(e.notification.image=a);let r=t.notification.icon;r&&(e.notification.icon=r)}(n,e),t=n,e.data&&(t.data=e.data),function(e,t){var n,i,a,r,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let s=null!==(a=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==a?a:null===(r=t.notification)||void 0===r?void 0:r.click_action;s&&(e.fcmOptions.link=s);let c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}(n,e),n}function eC(e,t){let n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function ej(e){return ef.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ eC("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),eC("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eE{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let i=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(!e||!e.options)throw ej("App Configuration Object");if(!e.name)throw ej("App Name");let{options:t}=e;for(let n of["projectId","apiKey","appId","messagingSenderId"])if(!t[n])throw ej(n);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eA(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(t){throw ef.create("failed-service-worker-registration",{browserErrorMessage:null==t?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eO(e,t){if(t||e.swRegistration||await eA(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw ef.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eD(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ee)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eK(e,t){if(!navigator)throw ef.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw ef.create("permission-blocked");return await eD(e,null==t?void 0:t.vapidKey),await eO(e,null==t?void 0:t.serviceWorkerRegistration),ey(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eP(e,t,n){let i=function(e){switch(e){case o.NOTIFICATION_CLICKED:return"notification_open";case o.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t),a=await e.firebaseDependencies.analyticsProvider.get();a.logEvent(i,{message_id:n[et],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e_(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===o.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(eT(n)):e.onMessageHandler.next(eT(n)));let i=n.data;"object"==typeof i&&i&&et in i&&"1"===i["google.c.a.e"]&&await eP(e,n.messageType,i)}let eM="@firebase/messaging",eN="0.11.0",eL=e=>{let t=new eE(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>e_(t,e)),t},eq=e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>eK(t,e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eR(){try{await (0,u.eu)()}catch(e){return!1}return"undefined"!=typeof window&&(0,u.hl)()&&(0,u.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e$(e=(0,s.Mq)()){return eR().then(e=>{if(!e)throw ef.create("unsupported-browser")},e=>{throw ef.create("indexed-db-unsupported")}),(0,s.qX)((0,u.m9)(e),"messaging").getImmediate()}async function ex(e,t){return eK(e=(0,u.m9)(e),t)}function eF(e,t){return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){if(!navigator)throw ef.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=(0,u.m9)(e),t))}(0,s.Xd)(new c.wA("messaging",eL,"PUBLIC")),(0,s.Xd)(new c.wA("messaging-internal",eq,"PRIVATE")),(0,s.KN)(eM,eN),(0,s.KN)(eM,eN,"esm2017")}}]);