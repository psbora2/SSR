!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.skipWaiting(),workbox.core.clientsClaim();var r=[{'revision':'5ff4daacaeb87e812c4b29af6259e048','url':'430294a6bb0f3104162362fb9d4501ac.gif'},{'revision':'1a604b5025d9a7fac47b9b6a685ccbcc','url':'bundle.js'},{'revision':'90b89ed7a3df4e52e2c1d20b460b60fb','url':'favicon.ico'},{'revision':'5301320289f0a34ab6671512f84aa2f6','url':'html/index.html'},{'revision':'a378bd0fc70ad134b1e69660c6525c26','url':'loadable-stats.json'},{'revision':'3de34cb087deb27728da8880b7836085','url':'main.css'}],o=r.map((function(e){return"/"+e.url})),i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(o),[["/"].map((function(e){return e+"?shell"}))]);self.addEventListener("install",(function(e){e.waitUntil(caches.open("hacker_news_v1").then((function(e){return e.addAll(i)})))})),self.addEventListener("activate",(function(e){var t=["catch-token"];e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(-1===t.indexOf(e))return caches.delete(e)})))})))})),self.addEventListener("fetch",(function(e){0!==e.request.url.indexOf("https")&&0!==e.request.url.indexOf("http")||e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request).then((function(t){return caches.open("hacker_news_v1").then((function(n){return n.put(e.request,t.clone()),t}))}))})).catch((function(){return new Response("<h1>Hello! Sorry this might happen for two resions </h1>\n                    <ul>\n                     <li> You are offline! </li>\n                     <li> Or Our server down</li> \n                    </ul>\n                    ",{headers:{"Content-Type":"text/html"}})})))})),workbox.precaching.precacheAndRoute(r)}]);