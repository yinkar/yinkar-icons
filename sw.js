if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>l(s,n),t={module:{uri:n},exports:u,require:o};e[n]=Promise.all(r.map((s=>t[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-8bb2853d"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/add-user.83b55fa8.js",revision:null},{url:"assets/attachment.505cbc53.js",revision:null},{url:"assets/bars.d87d90e9.js",revision:null},{url:"assets/bell.b3666499.js",revision:null},{url:"assets/code.4a1fabbb.js",revision:null},{url:"assets/copy.b9c7f6ad.js",revision:null},{url:"assets/credit-card.bb239136.js",revision:null},{url:"assets/download.69fce3ac.js",revision:null},{url:"assets/edit.559d2f02.js",revision:null},{url:"assets/empty-battery.fae24965.js",revision:null},{url:"assets/envelope.1120db57.js",revision:null},{url:"assets/file.2c75f8b7.js",revision:null},{url:"assets/folder.edec9f3c.js",revision:null},{url:"assets/full-battery.9e12882d.js",revision:null},{url:"assets/gear.d7b5040f.js",revision:null},{url:"assets/heart.fc7e2db2.js",revision:null},{url:"assets/hourglass.9a8f8fa8.js",revision:null},{url:"assets/index.02d8e9c5.css",revision:null},{url:"assets/index.881e8d6e.js",revision:null},{url:"assets/info.9ffd9d8b.js",revision:null},{url:"assets/low-battery.ffe732d8.js",revision:null},{url:"assets/message.3992fc6b.js",revision:null},{url:"assets/minus.9fc73851.js",revision:null},{url:"assets/music-note.9e3f72af.js",revision:null},{url:"assets/mute.988d381e.js",revision:null},{url:"assets/next.32202f14.js",revision:null},{url:"assets/no-sound.457ea475.js",revision:null},{url:"assets/palette.cc1df1f2.js",revision:null},{url:"assets/pencil.1d56046a.js",revision:null},{url:"assets/play.89b61448.js",revision:null},{url:"assets/plus.c68a5542.js",revision:null},{url:"assets/previous.0b873694.js",revision:null},{url:"assets/pwa.12642d9a.js",revision:null},{url:"assets/random.7536b74c.js",revision:null},{url:"assets/reload.55b6f5bc.js",revision:null},{url:"assets/remove-user.27eeb46a.js",revision:null},{url:"assets/share.d1d09d69.js",revision:null},{url:"assets/shopping-cart.e8b44999.js",revision:null},{url:"assets/sound.c4e78f5c.js",revision:null},{url:"assets/squares.c2b4abd1.js",revision:null},{url:"assets/star.852ebf36.js",revision:null},{url:"assets/stop.639ecd12.js",revision:null},{url:"assets/times.3d3d84ae.js",revision:null},{url:"assets/trash.c6dc301b.js",revision:null},{url:"assets/user.a4fc7c76.js",revision:null},{url:"assets/users.01e737b9.js",revision:null},{url:"assets/vendor.cb414422.js",revision:null},{url:"index.html",revision:"fcf0cb83b493d9e6ce2712ecb0b4b00b"},{url:"service-worker.js",revision:"c943a4a07b629cf50374a7922ee76607"},{url:"favicon.svg",revision:"42195b666ceccf3cb5406e0e2b3e5eee"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"icon-192.png",revision:"47cd59ecefae39291b2f0a2200be9a66"},{url:"icon-512.png",revision:"d9a775e33646de09605b3d87446348c5"},{url:"manifest.webmanifest",revision:"65b63c5c3814e47f76f4871edf1e8e16"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
