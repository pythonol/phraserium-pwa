import{a as q,c as Y,r as R,V as F,t as re,o as ne,h as S,W as oe,b as K,X as ae,w as se,Y as D,g as Z,Z as le,$ as ue,a0 as ce,f as de,a1 as ge,_ as J,K as j,M as W,a2 as G,A as b,B as Q,C as y,N as P,O as fe,U as me,D as w,Q as z,S as B,T as he,a3 as A,a4 as ve,a5 as O,I as X}from"./index-DcbdxIqW.js";import{Q as Se}from"./QBadge-DcQDiX01.js";import{a as _e,b as M,c as H,Q as ye}from"./format-D-7NQYOu.js";import{T as be}from"./LeftDrawer-BMbnXTWM.js";import{u as U}from"./use-quasar-HN0aHcun.js";const we={ratio:[String,Number]};function Ce(e,t){return q(()=>{const s=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const ke=1.7778,pe=Y({name:"QImg",props:{...we,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ke},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:s}){const i=R(e.initialRatio),_=Ce(e,i),k=Z(),{registerTimeout:a,removeTimeout:h}=F(),{registerTimeout:C,removeTimeout:n}=F(),p=q(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),x=q(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),u=[R(null),R(p.value)],f=R(0),d=R(!1),E=R(!1),$=q(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),o=q(()=>({width:e.width,height:e.height})),v=q(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),g=q(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function m(){if(n(),e.loadingShowDelay===0){d.value=!0;return}C(()=>{d.value=!0},e.loadingShowDelay)}function c(){n(),d.value=!1}function l({target:r}){D(k)===!1&&(h(),i.value=r.naturalHeight===0?.5:r.naturalWidth/r.naturalHeight,L(r,1))}function L(r,T){T===1e3||D(k)===!0||(r.complete===!0?ee(r):a(()=>{L(r,T+1)},50))}function ee(r){D(k)!==!0&&(f.value=f.value^1,u[f.value].value=null,c(),r.getAttribute("__qerror")!=="true"&&(E.value=!1),s("load",r.currentSrc||r.src))}function te(r){h(),c(),E.value=!0,u[f.value].value=x.value,u[f.value^1].value=p.value,s("error",r)}function N(r){const T=u[r].value,I={key:"img_"+r,class:v.value,style:g.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...T};return f.value===r?Object.assign(I,{class:I.class+"current",onLoad:l,onError:te}):I.class+="loaded",S("div",{class:"q-img__container absolute-full",key:"img"+r},S("img",I))}function ie(){return d.value===!1?S("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(t[E.value===!0?"error":"default"])):S("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[S(ae,{color:e.spinnerColor,size:e.spinnerSize})])}{let r=function(){se(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,T=>{h(),E.value=!1,T===null?(c(),u[f.value^1].value=p.value):m(),u[f.value].value=T},{immediate:!0})};re.value===!0?ne(r):r()}return()=>{const r=[];return _.value!==null&&r.push(S("div",{key:"filler",style:_.value})),u[0].value!==null&&r.push(N(0)),u[1].value!==null&&r.push(N(1)),r.push(S(oe,{name:"q-transition--fade"},ie)),S("div",{key:"main",class:$.value,style:o.value,role:"img","aria-label":e.alt},r)}}});function Le(){let e=Object.create(null);return{getCache:(t,s)=>e[t]===void 0?e[t]=typeof s=="function"?s():s:e[t],setCache(t,s){e[t]=s},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const V=[["left","center","start","width"],["right","center","end","width"],["top","start","center","height"],["bottom","end","center","height"]],qe=Y({name:"QSlideItem",props:{...le,leftColor:String,rightColor:String,topColor:String,bottomColor:String,onSlide:Function},emits:["action","top","right","bottom","left"],setup(e,{slots:t,emit:s}){const{proxy:i}=Z(),{$q:_}=i,k=ue(e,_),{getCache:a}=Le(),h=R(null);let C=null,n={},p={},x={};const u=q(()=>_.lang.rtl===!0?{left:"right",right:"left"}:{left:"left",right:"right"}),f=q(()=>"q-slide-item q-item-type overflow-hidden"+(k.value===!0?" q-slide-item--dark q-dark":""));function d(){h.value.style.transform="translate(0,0)"}function E(o,v,g){e.onSlide!==void 0&&s("slide",{side:o,ratio:v,isReset:g})}function $(o){const v=h.value;if(o.isFirst)n={dir:null,size:{left:0,right:0,top:0,bottom:0},scale:0},v.classList.add("no-transition"),V.forEach(l=>{if(t[l[0]]!==void 0){const L=x[l[0]];L.style.transform="scale(1)",n.size[l[0]]=L.getBoundingClientRect()[l[3]]}}),n.axis=o.direction==="up"||o.direction==="down"?"Y":"X";else if(o.isFinal){v.classList.remove("no-transition"),n.scale===1?(v.style.transform=`translate${n.axis}(${n.dir*100}%)`,C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,s(n.showing,{reset:d}),s("action",{side:n.showing,reset:d})},230)):(v.style.transform="translate(0,0)",E(n.showing,0,!0));return}else o.direction=n.axis==="X"?o.offset.x<0?"left":"right":o.offset.y<0?"up":"down";if(t.left===void 0&&o.direction===u.value.right||t.right===void 0&&o.direction===u.value.left||t.top===void 0&&o.direction==="down"||t.bottom===void 0&&o.direction==="up"){v.style.transform="translate(0,0)";return}let g,m,c;n.axis==="X"?(m=o.direction==="left"?-1:1,g=m===1?u.value.left:u.value.right,c=o.distance.x):(m=o.direction==="up"?-2:2,g=m===2?"top":"bottom",c=o.distance.y),!(n.dir!==null&&Math.abs(m)!==Math.abs(n.dir))&&(n.dir!==m&&(["left","right","top","bottom"].forEach(l=>{p[l]&&(p[l].style.visibility=g===l?"visible":"hidden")}),n.showing=g,n.dir=m),n.scale=Math.max(0,Math.min(1,(c-40)/n.size[g])),v.style.transform=`translate${n.axis}(${c*m/Math.abs(m)}px)`,x[g].style.transform=`scale(${n.scale})`,E(g,n.scale,!1))}return ce(()=>{p={},x={}}),de(()=>{C!==null&&clearTimeout(C)}),Object.assign(i,{reset:d}),()=>{const o=[],v={left:t[u.value.right]!==void 0,right:t[u.value.left]!==void 0,up:t.bottom!==void 0,down:t.top!==void 0},g=Object.keys(v).filter(c=>v[c]===!0);V.forEach(c=>{const l=c[0];t[l]!==void 0&&o.push(S("div",{key:l,ref:L=>{p[l]=L},class:`q-slide-item__${l} absolute-full row no-wrap items-${c[1]} justify-${c[2]}`+(e[l+"Color"]!==void 0?` bg-${e[l+"Color"]}`:"")},[S("div",{ref:L=>{x[l]=L}},t[l]())]))});const m=S("div",{key:`${g.length===0?"only-":""} content`,ref:h,class:"q-slide-item__content"},K(t.default));return g.length===0?o.push(m):o.push(ge(m,a("dir#"+g.join(""),()=>{const c={prevent:!0,stop:!0,mouse:!0};return g.forEach(l=>{c[l]=!0}),[[be,$,void 0,c]]}))),S("div",{class:f.value},o)}}}),xe={__name:"EntryPhrases",props:{entries:{type:Array,default:()=>[]}},setup(e,{expose:t}){t();const s=U(),i=j(),_=W(),k=G(i.settings,"fromLanguage"),a=G(i.settings,"toLanguage"),h=G(i.settings,"searchGramGender"),C=G(i.settings,"searchGramNumber"),u={$q:s,storeSettings:i,storeEntries:_,fromLang:k,toLang:a,gender:h,number:C,props:e,onEntrySlideLeft:({reset:f},d)=>{d.isFavorite=d.isFavorite?0:1,_.update(d),f()},onEntrySlideRight:({reset:f},d)=>{s.dialog({message:"Скрыть эту фразу?",cancel:!0}).onOk(()=>{d.isActive=d.isActive?0:1,_.update(d),f()}).onCancel(()=>f())},toRef:G,get useQuasar(){return U},get useStoreSettings(){return j},get useStoreEntries(){return W}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},Ee={key:0,class:"row items-center"},Te={key:1,class:"row items-center"},Qe={class:"row items-center"};function Re(e,t,s,i,_,k){return b(),Q(ye,{separator:""},{default:y(()=>[(b(!0),P(fe,null,me(i.props.entries,a=>(b(),Q(qe,{key:a.id,onLeft:h=>i.onEntrySlideLeft(h,a),onRight:h=>i.onEntrySlideRight(h,a),"left-color":"teal","right-color":"orange"},{left:y(()=>[a.isFavorite?(b(),P("div",Te,[w(z,{left:"",name:"star_border"}),t[1]||(t[1]=B(" Убрать из избранного "))])):(b(),P("div",Ee,[w(z,{left:"",name:"star"}),t[0]||(t[0]=B(" В избранное "))]))]),right:y(()=>[he("div",Qe,[t[2]||(t[2]=B("Скрыть ")),w(z,{right:"",name:"visibility_off"})])]),default:y(()=>[w(_e,{dense:""},{default:y(()=>[a.isFavorite?(b(),Q(Se,{key:0,floating:"",style:{background:"transparent"}},{default:y(()=>[w(z,{name:"star",color:"yellow-8"})]),_:1})):A("",!0),a.style?(b(),Q(M,{key:1,avatar:""},{default:y(()=>[a.style.img?(b(),Q(pe,{key:0,src:a.style.img},null,8,["src"])):a.style.icon?(b(),Q(z,{key:1,size:"md",class:"q-ml-xs",name:a.style.icon,color:a.style?.color},null,8,["name","color"])):(b(),Q(ve,{key:2,color:a.style?.color},null,8,["color"]))]),_:2},1024)):A("",!0),w(M,null,{default:y(()=>[B(O(a.getWord(i.fromLang,i.gender,i.number).W||"-"),1)]),_:2},1024),w(M,{side:"",top:""},{default:y(()=>[w(H,null,{default:y(()=>[B(O(a.getWord(i.toLang,i.gender,i.number).W||"-"),1)]),_:2},1024),w(H,null,{default:y(()=>[B(O(a.getWord(i.toLang,i.gender,i.number).T||"-"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onLeft","onRight"]))),128))]),_:1})}const Oe=J(xe,[["render",Re],["__file","EntryPhrases.vue"]]),Be={__name:"GenderPlural",setup(e,{expose:t}){t();const i={storeSettings:j(),get useStoreSettings(){return j}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Ge={class:"q-gutter-sm"};function ze(e,t,s,i,_,k){return b(),P("div",Ge,[w(X,{icon:i.storeSettings.settings.searchGramGender==="M"?"man":"woman","text-color":i.storeSettings.settings.searchGramGender==="M"?"blue":"purple",onClick:t[0]||(t[0]=a=>i.storeSettings.toggleGramGender()),size:"md",padding:"sm sm"},null,8,["icon","text-color"]),w(X,{icon:i.storeSettings.settings.searchGramNumber==="S"?"person":"people",onClick:t[1]||(t[1]=a=>i.storeSettings.toggleGramNumber()),size:"md",padding:"sm sm"},null,8,["icon"])])}const Me=J(Be,[["render",ze],["__file","GenderPlural.vue"]]);export{Oe as E,Me as G,pe as Q};