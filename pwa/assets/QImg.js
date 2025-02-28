import{d as r,b as $,u as s,ae as T,v as H,o as E,h as a,af as F,f as O,bM as P,w as A,bN as h,g as W}from"./index.js";const x={ratio:[String,Number]};function G(e,o){return r(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const J=1.7778,U=$({name:"QImg",props:{...x,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:J},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const y=s(e.initialRatio),b=G(e,y),m=W(),{registerTimeout:C,removeTimeout:v}=T(),{registerTimeout:N,removeTimeout:_}=T(),f=r(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),z=r(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),i=[s(null),s(f.value)],n=s(0),c=s(!1),g=s(!1),L=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),k=r(()=>({width:e.width,height:e.height})),I=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),R=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function B(){if(_(),e.loadingShowDelay===0){c.value=!0;return}N(()=>{c.value=!0},e.loadingShowDelay)}function S(){_(),c.value=!1}function j({target:t}){h(m)===!1&&(v(),y.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,l){l===1e3||h(m)===!0||(t.complete===!0?D(t):C(()=>{w(t,l+1)},50))}function D(t){h(m)!==!0&&(n.value=n.value^1,i[n.value].value=null,S(),t.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",t.currentSrc||t.src))}function M(t){v(),S(),g.value=!0,i[n.value].value=z.value,i[n.value^1].value=f.value,u("error",t)}function q(t){const l=i[t].value,d={key:"img_"+t,class:I.value,style:R.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return n.value===t?Object.assign(d,{class:d.class+"current",onLoad:j,onError:M}):d.class+="loaded",a("div",{class:"q-img__container absolute-full",key:"img"+t},a("img",d))}function Q(){return c.value===!1?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},O(o[g.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[a(P,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){A(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,l=>{v(),g.value=!1,l===null?(S(),i[n.value^1].value=f.value):B(),i[n.value].value=l},{immediate:!0})};H.value===!0?E(t):t()}return()=>{const t=[];return b.value!==null&&t.push(a("div",{key:"filler",style:b.value})),i[0].value!==null&&t.push(q(0)),i[1].value!==null&&t.push(q(1)),t.push(a(F,{name:"q-transition--fade"},Q)),a("div",{key:"main",class:L.value,style:k.value,role:"img","aria-label":e.alt},t)}}});export{U as Q};
