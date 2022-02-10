import{o as u,c as _,a as m,F as v,r as f,b as h,d as g,s as y,e as E,f as k}from"./vendor.8ba5b07e.js";const w=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};w();const I="modulepreload",d={},L="https://yinkar.github.io/toys/yinkar-icons/",a=function(o,r){return!r||r.length===0?o():Promise.all(r.map(t=>{if(t=`${L}${t}`,t in d)return;d[t]=!0;const e=t.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":I,e||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),e)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",l)})})).then(()=>o())},P=[{id:0,name:"Play",file:"play",keywords:["triangle","song","music","run","launch"]},{id:1,name:"Previous",file:"previous",keywords:["triangle","block","song","music","backward"]},{id:2,name:"Next",file:"next",keywords:["triangle","block","song","music","forward"]},{id:3,name:"Stop",file:"stop",keywords:["square","block","song","music","run","launch"]},{id:4,name:"Heart",file:"heart",keywords:["love","like","favorite"]},{id:5,name:"Trash",file:"trash",keywords:["delete","remove"]}];var x={icons:P};const $={class:"icon"},O=["src"];function b(s,o,r,t,e,n){return u(),_("div",$,[m("img",{src:e.iconUrl},null,8,O)])}var p=(s,o)=>{const r=s.__vccOpts||s;for(const[t,e]of o)r[t]=e;return r};function A(s){switch(s){case"../assets/icons/heart.svg":return a(()=>import("./heart.4ba55a89.js"),[]);case"../assets/icons/next.svg":return a(()=>import("./next.8af23f10.js"),[]);case"../assets/icons/play.svg":return a(()=>import("./play.89b61448.js"),[]);case"../assets/icons/previous.svg":return a(()=>import("./previous.8396f2ee.js"),[]);case"../assets/icons/stop.svg":return a(()=>import("./stop.f2f38b21.js"),[]);case"../assets/icons/trash.svg":return a(()=>import("./trash.18f2accf.js"),[]);default:return new Promise(function(o,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}const R={name:"Icon",data(){return{iconUrl:"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3Ctext%20x='0'%20y='14'%3E\u23F3\uFE0F%3C/text%3E%3C/svg%3E"}},props:["id","name","file","keywords"],methods:{},mounted(){A(`../assets/icons/${this.file}.svg`).then(s=>{this.iconUrl=s.default})}};var T=p(R,[["render",b]]);const D={id:"icons"};function V(s,o,r,t,e,n){const i=h("Icon");return u(),_("div",D,[(u(!0),_(v,null,f(e.icons,c=>(u(),g(i,{id:c.id,name:c.name,file:c.file,keywords:c.keywords,onClick:l=>n.open(c.name,c.file)},null,8,["id","name","file","keywords","onClick"]))),256))])}function C(s){switch(s){case"../assets/icons/heart.svg":return a(()=>import("./heart.4ba55a89.js"),[]);case"../assets/icons/next.svg":return a(()=>import("./next.8af23f10.js"),[]);case"../assets/icons/play.svg":return a(()=>import("./play.89b61448.js"),[]);case"../assets/icons/previous.svg":return a(()=>import("./previous.8396f2ee.js"),[]);case"../assets/icons/stop.svg":return a(()=>import("./stop.f2f38b21.js"),[]);case"../assets/icons/trash.svg":return a(()=>import("./trash.18f2accf.js"),[]);default:return new Promise(function(o,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}const q={name:"Icons",data(){return{icons:x.icons}},components:{Icon:T},methods:{open:(s,o)=>{C(`../assets/icons/${o}.svg`).then(r=>{fetch(r.default).then(t=>t.text()).then(t=>{y({title:s,content:{element:"textarea",attributes:{value:t}}})})})}}};var N=p(q,[["render",V],["__scopeId","data-v-06e741a6"]]);const B={id:"container"},U=m("h1",null,"Yinkar Icons",-1),M={setup(s){return(o,r)=>(u(),_("div",B,[U,E(N)]))}};k(M).mount("#app");
