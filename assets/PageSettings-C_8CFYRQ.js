import{c as lt,aB as nt,aC as Bt,aD as Ft,aE as Tt,a4 as el,aF as tl,a5 as ll,aG as nl,a as S,at as ul,g as ut,h as C,Q as ee,aH as al,aI as ol,am as de,n as il,r as F,w as pe,aJ as rl,aK as sl,aL as cl,aM as dl,f as Et,as as ue,aN as fl,aO as vl,aP as yt,aQ as Ie,a6 as ml,aR as Sl,aj as Ye,aS as gl,O as we,aT as bl,aU as hl,a0 as yl,y as wl,aV as pl,_ as Vl,P as wt,o as pt,A as Vt,E as Cl,D as u,C as d,F as kl,aW as Ct,aX as kt,aY as _t,aZ as Je,I as Qe,G as xt,H,ax as _l,a_ as xl,a$ as Al,ad as zl,Y as Me,B as ql,W as Il}from"./index-BViGOcTk.js";import{Q as Ml,a as Ol,b as Bl,c as Fl}from"./QPage-BzEtnWrg.js";import{b as B,c as P,a as Z,Q as Oe}from"./QItem-CHq-l0BF.js";import{Q as Tl}from"./QMenu-CYmR2h_i.js";import{n as At}from"./format-DAzC97ix.js";import{u as zt}from"./use-quasar-BkbKNZKo.js";import"./QResizeObserver-CU9_O_Bi.js";const El=lt({name:"QField",inheritAttrs:!1,props:{...nt,tag:{type:String,default:"label"}},emits:Bt,setup(){return Ft(Tt({tagProp:!0}))}}),Dl={xs:8,sm:10,md:14,lg:20,xl:24},Ll=lt({name:"QChip",props:{...el,...tl,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:n,emit:c}){const{proxy:{$q:r}}=ut(),O=ll(e,r),s=nl(e,Dl),w=S(()=>e.selected===!0||e.icon!==void 0),g=S(()=>e.selected===!0?e.iconSelected||r.iconSet.chip.selected:e.icon),m=S(()=>e.iconRemove||r.iconSet.chip.remove),I=S(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),f=S(()=>{const v=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(v?` text-${v} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(I.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(O.value===!0?" q-chip--dark q-dark":"")}),V=S(()=>{const v=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},j={...v,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||r.lang.label.remove};return{chip:v,remove:j}});function _(v){v.keyCode===13&&x(v)}function x(v){e.disable||(c("update:selected",!e.selected),c("click",v))}function A(v){(v.keyCode===void 0||v.keyCode===13)&&(de(v),e.disable===!1&&(c("update:modelValue",!1),c("remove")))}function Q(){const v=[];I.value===!0&&v.push(C("div",{class:"q-focus-helper"})),w.value===!0&&v.push(C(ee,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const j=e.label!==void 0?[C("div",{class:"ellipsis"},[e.label])]:void 0;return v.push(C("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},al(n.default,j))),e.iconRight&&v.push(C(ee,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&v.push(C(ee,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:m.value,...V.value.remove,onClick:A,onKeyup:A})),v}return()=>{if(e.modelValue===!1)return;const v={class:f.value,style:s.value};return I.value===!0&&Object.assign(v,V.value.chip,{onClick:x,onKeyup:_}),ul("div",v,Q(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ol,e.ripple]])}}});let Ue=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const n=document.createElement("div");Object.assign(n.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(n),e.scrollLeft=-1e3,Ue=e.scrollLeft>=0,e.remove()}const X=1e3,Rl=["start","center","end","start-force","center-force","end-force"],Dt=Array.prototype.filter,Hl=window.getComputedStyle(document.body).overflowAnchor===void 0?il:function(e,n){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const c=e.children||[];Dt.call(c,O=>O.dataset&&O.dataset.qVsAnchor!==void 0).forEach(O=>{delete O.dataset.qVsAnchor});const r=c[n];r&&r.dataset&&(r.dataset.qVsAnchor="")}))};function Ve(e,n){return e+n}function Ze(e,n,c,r,O,s,w,g){const m=e===window?document.scrollingElement||document.documentElement:e,I=O===!0?"offsetWidth":"offsetHeight",f={scrollStart:0,scrollViewSize:-w-g,scrollMaxSize:0,offsetStart:-w,offsetEnd:-g};if(O===!0?(e===window?(f.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,f.scrollViewSize+=document.documentElement.clientWidth):(f.scrollStart=m.scrollLeft,f.scrollViewSize+=m.clientWidth),f.scrollMaxSize=m.scrollWidth,s===!0&&(f.scrollStart=(Ue===!0?f.scrollMaxSize-f.scrollViewSize:0)-f.scrollStart)):(e===window?(f.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,f.scrollViewSize+=document.documentElement.clientHeight):(f.scrollStart=m.scrollTop,f.scrollViewSize+=m.clientHeight),f.scrollMaxSize=m.scrollHeight),c!==null)for(let V=c.previousElementSibling;V!==null;V=V.previousElementSibling)V.classList.contains("q-virtual-scroll--skip")===!1&&(f.offsetStart+=V[I]);if(r!==null)for(let V=r.nextElementSibling;V!==null;V=V.nextElementSibling)V.classList.contains("q-virtual-scroll--skip")===!1&&(f.offsetEnd+=V[I]);if(n!==e){const V=m.getBoundingClientRect(),_=n.getBoundingClientRect();O===!0?(f.offsetStart+=_.left-V.left,f.offsetEnd-=_.width):(f.offsetStart+=_.top-V.top,f.offsetEnd-=_.height),e!==window&&(f.offsetStart+=f.scrollStart),f.offsetEnd+=f.scrollMaxSize-f.offsetStart}return f}function qt(e,n,c,r){n==="end"&&(n=(e===window?document.body:e)[c===!0?"scrollWidth":"scrollHeight"]),e===window?c===!0?(r===!0&&(n=(Ue===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-n),window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n):c===!0?(r===!0&&(n=(Ue===!0?e.scrollWidth-e.offsetWidth:0)-n),e.scrollLeft=n):e.scrollTop=n}function Be(e,n,c,r){if(c>=r)return 0;const O=n.length,s=Math.floor(c/X),w=Math.floor((r-1)/X)+1;let g=e.slice(s,w).reduce(Ve,0);return c%X!==0&&(g-=n.slice(s*X,c).reduce(Ve,0)),r%X!==0&&r!==O&&(g-=n.slice(r,w*X).reduce(Ve,0)),g}const Pl={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},It={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Pl};function Nl({virtualScrollLength:e,getVirtualScrollTarget:n,getVirtualScrollEl:c,virtualScrollItemSizeComputed:r}){const O=ut(),{props:s,emit:w,proxy:g}=O,{$q:m}=g;let I,f,V,_=[],x;const A=F(0),Q=F(0),v=F({}),j=F(null),te=F(null),U=F(null),E=F({from:0,to:0}),Fe=S(()=>s.tableColspan!==void 0?s.tableColspan:100);r===void 0&&(r=S(()=>s.virtualScrollItemSize));const D=S(()=>r.value+";"+s.virtualScrollHorizontal),le=S(()=>D.value+";"+s.virtualScrollSliceRatioBefore+";"+s.virtualScrollSliceRatioAfter);pe(le,()=>{G()}),pe(D,ae);function ae(){fe(f,!0)}function Ce(l){fe(l===void 0?f:l)}function oe(l,i){const h=n();if(h==null||h.nodeType===8)return;const M=Ze(h,c(),j.value,te.value,s.virtualScrollHorizontal,m.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd);V!==M.scrollViewSize&&G(M.scrollViewSize),K(h,M,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Rl.indexOf(i)!==-1?i:f!==-1&&l>f?"end":"start")}function Te(){const l=n();if(l==null||l.nodeType===8)return;const i=Ze(l,c(),j.value,te.value,s.virtualScrollHorizontal,m.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd),h=e.value-1,M=i.scrollMaxSize-i.offsetStart-i.offsetEnd-Q.value;if(I===i.scrollStart)return;if(i.scrollMaxSize<=0){K(l,i,0,0);return}V!==i.scrollViewSize&&G(i.scrollViewSize),ke(E.value.from);const L=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(x[h],i.scrollViewSize/2));if(L>0&&Math.ceil(i.scrollStart)>=L){K(l,i,h,i.scrollMaxSize-i.offsetEnd-_.reduce(Ve,0));return}let k=0,p=i.scrollStart-i.offsetStart,R=p;if(p<=M&&p+i.scrollViewSize>=A.value)p-=A.value,k=E.value.from,R=p;else for(let y=0;p>=_[y]&&k<h;y++)p-=_[y],k+=X;for(;p>0&&k<h;)p-=x[k],p>-i.scrollViewSize?(k++,R=p):R=x[k]+p;K(l,i,k,R)}function K(l,i,h,M,L){const k=typeof L=="string"&&L.indexOf("-force")!==-1,p=k===!0?L.replace("-force",""):L,R=p!==void 0?p:"start";let y=Math.max(0,h-v.value[R]),W=y+v.value.total;W>e.value&&(W=e.value,y=Math.max(0,W-v.value.total)),I=i.scrollStart;const ne=y!==E.value.from||W!==E.value.to;if(ne===!1&&p===void 0){_e(h);return}const{activeElement:De}=document,Y=U.value;ne===!0&&Y!==null&&Y!==De&&Y.contains(De)===!0&&(Y.addEventListener("focusout",Ee),setTimeout(()=>{Y!==null&&Y.removeEventListener("focusout",Ee)})),Hl(Y,h-y);const Le=p!==void 0?x.slice(y,h).reduce(Ve,0):0;if(ne===!0){const ie=W>=E.value.from&&y<=E.value.to?E.value.to:W;E.value={from:y,to:ie},A.value=Be(_,x,0,y),Q.value=Be(_,x,W,e.value),requestAnimationFrame(()=>{E.value.to!==W&&I===i.scrollStart&&(E.value={from:E.value.from,to:W},Q.value=Be(_,x,W,e.value))})}requestAnimationFrame(()=>{if(I!==i.scrollStart)return;ne===!0&&ke(y);const ie=x.slice(y,h).reduce(Ve,0),re=ie+i.offsetStart+A.value,Re=re+x[h];let Ae=re+M;if(p!==void 0){const Ke=ie-Le,ze=i.scrollStart+Ke;Ae=k!==!0&&ze<re&&Re<ze+i.scrollViewSize?ze:p==="end"?Re-i.scrollViewSize:re-(p==="start"?0:Math.round((i.scrollViewSize-x[h])/2))}I=Ae,qt(l,Ae,s.virtualScrollHorizontal,m.lang.rtl),_e(h)})}function ke(l){const i=U.value;if(i){const h=Dt.call(i.children,y=>y.classList&&y.classList.contains("q-virtual-scroll--skip")===!1),M=h.length,L=s.virtualScrollHorizontal===!0?y=>y.getBoundingClientRect().width:y=>y.offsetHeight;let k=l,p,R;for(let y=0;y<M;){for(p=L(h[y]),y++;y<M&&h[y].classList.contains("q-virtual-scroll--with-prev")===!0;)p+=L(h[y]),y++;R=p-x[k],R!==0&&(x[k]+=R,_[Math.floor(k/X)]+=R),k++}}}function Ee(){U.value!==null&&U.value!==void 0&&U.value.focus()}function fe(l,i){const h=1*r.value;(i===!0||Array.isArray(x)===!1)&&(x=[]);const M=x.length;x.length=e.value;for(let k=e.value-1;k>=M;k--)x[k]=h;const L=Math.floor((e.value-1)/X);_=[];for(let k=0;k<=L;k++){let p=0;const R=Math.min((k+1)*X,e.value);for(let y=k*X;y<R;y++)p+=x[y];_.push(p)}f=-1,I=void 0,A.value=Be(_,x,0,E.value.from),Q.value=Be(_,x,E.value.to,e.value),l>=0?(ke(E.value.from),ue(()=>{oe(l)})):ve()}function G(l){if(l===void 0&&typeof window<"u"){const p=n();p!=null&&p.nodeType!==8&&(l=Ze(p,c(),j.value,te.value,s.virtualScrollHorizontal,m.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd).scrollViewSize)}V=l;const i=parseFloat(s.virtualScrollSliceRatioBefore)||0,h=parseFloat(s.virtualScrollSliceRatioAfter)||0,M=1+i+h,L=l===void 0||l<=0?1:Math.ceil(l/r.value),k=Math.max(1,L,Math.ceil((s.virtualScrollSliceSize>0?s.virtualScrollSliceSize:10)/M));v.value={total:Math.ceil(k*M),start:Math.ceil(k*i),center:Math.ceil(k*(.5+i)),end:Math.ceil(k*(1+i)),view:L}}function je(l,i){const h=s.virtualScrollHorizontal===!0?"width":"height",M={["--q-virtual-scroll-item-"+h]:r.value+"px"};return[l==="tbody"?C(l,{class:"q-virtual-scroll__padding",key:"before",ref:j},[C("tr",[C("td",{style:{[h]:`${A.value}px`,...M},colspan:Fe.value})])]):C(l,{class:"q-virtual-scroll__padding",key:"before",ref:j,style:{[h]:`${A.value}px`,...M}}),C(l,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},i.flat()),l==="tbody"?C(l,{class:"q-virtual-scroll__padding",key:"after",ref:te},[C("tr",[C("td",{style:{[h]:`${Q.value}px`,...M},colspan:Fe.value})])]):C(l,{class:"q-virtual-scroll__padding",key:"after",ref:te,style:{[h]:`${Q.value}px`,...M}})]}function _e(l){f!==l&&(s.onVirtualScroll!==void 0&&w("virtualScroll",{index:l,from:E.value.from,to:E.value.to-1,direction:l<f?"decrease":"increase",ref:g}),f=l)}G();const ve=rl(Te,m.platform.is.ios===!0?120:35);sl(()=>{G()});let xe=!1;return cl(()=>{xe=!0}),dl(()=>{if(xe!==!0)return;const l=n();I!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?qt(l,I,s.virtualScrollHorizontal,m.lang.rtl):oe(f)}),Et(()=>{ve.cancel()}),Object.assign(g,{scrollTo:oe,reset:ae,refresh:Ce}),{virtualScrollSliceRange:E,virtualScrollSliceSizeComputed:v,setVirtualScrollSize:G,onVirtualScrollEvt:ve,localResetVirtualScroll:fe,padVirtualScroll:je,scrollTo:oe,reset:ae,refresh:Ce}}const Mt=e=>["add","add-unique","toggle"].includes(e),Ql=".*+?^${}()|[]\\",Ul=Object.keys(nt);function et(e,n){if(typeof e=="function")return e;const c=e!==void 0?e:n;return r=>r!==null&&typeof r=="object"&&c in r?r[c]:r}const tt=lt({name:"QSelect",inheritAttrs:!1,props:{...It,...fl,...nt,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Mt},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:It.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...Bt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:n,emit:c}){const{proxy:r}=ut(),{$q:O}=r,s=F(!1),w=F(!1),g=F(-1),m=F(""),I=F(!1),f=F(!1);let V=null,_=null,x,A,Q,v=null,j,te,U,E;const Fe=F(null),D=F(null),le=F(null),ae=F(null),Ce=F(null),oe=vl(e),Te=gl(mt),K=S(()=>Array.isArray(e.options)?e.options.length:0),ke=S(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ee,virtualScrollSliceSizeComputed:fe,localResetVirtualScroll:G,padVirtualScroll:je,onVirtualScrollEvt:_e,scrollTo:ve,setVirtualScrollSize:xe}=Nl({virtualScrollLength:K,getVirtualScrollTarget:Pt,getVirtualScrollEl:ft,virtualScrollItemSizeComputed:ke}),l=Tt(),i=S(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const o=e.mapOptions===!0&&x!==void 0?x:[],b=a.map(q=>Ht(q,o));return e.modelValue===null&&t===!0?b.filter(q=>q!==null):b}return a}),h=S(()=>{const t={};return Ul.forEach(a=>{const o=e[a];o!==void 0&&(t[a]=o)}),t}),M=S(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),L=S(()=>yt(i.value)),k=S(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||i.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),p=S(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),R=S(()=>K.value===0),y=S(()=>i.value.map(t=>$.value(t)).join(", ")),W=S(()=>e.displayValue!==void 0?e.displayValue:y.value),ne=S(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),De=S(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||i.value.some(ne.value))),Y=S(()=>l.focused.value===!0?e.tabindex:-1),Le=S(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":s.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return g.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${g.value}`),t}),ie=S(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),re=S(()=>i.value.map((t,a)=>({index:a,opt:t,html:ne.value(t),selected:!0,removeAtIndex:Rt,toggleOption:se,tabindex:Y.value}))),Re=S(()=>{if(K.value===0)return[];const{from:t,to:a}=Ee.value;return e.options.slice(t,a).map((o,b)=>{const q=me.value(o)===!0,z=$e(o)===!0,N=t+b,T={clickable:!0,active:z,activeClass:ze.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:M.value,role:"option","aria-selected":z===!0?"true":"false",id:`${l.targetUid.value}_${N}`,onClick:()=>{se(o)}};return q!==!0&&(g.value===N&&(T.focused=!0),O.platform.is.desktop===!0&&(T.onMousemove=()=>{s.value===!0&&Se(N)})),{index:N,opt:o,html:ne.value(o),label:$.value(o),selected:T.active,focused:T.focused,toggleOption:se,setOptionIndex:Se,itemProps:T}})}),Ae=S(()=>e.dropdownIcon!==void 0?e.dropdownIcon:O.iconSet.arrow.dropdown),Ke=S(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),ze=S(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),J=S(()=>et(e.optionValue,"value")),$=S(()=>et(e.optionLabel,"label")),me=S(()=>et(e.optionDisable,"disable")),He=S(()=>i.value.map(J.value)),Lt=S(()=>{const t={onInput:mt,onChange:Te,onKeydown:dt,onKeyup:st,onKeypress:ct,onFocus:it,onClick(a){A===!0&&we(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Te,t});pe(i,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(w.value!==!0&&s.value!==!0||L.value!==!0)&&(Q!==!0&&ye(),(w.value===!0||s.value===!0)&&ge(""))},{immediate:!0}),pe(()=>e.fillInput,ye),pe(s,Xe),pe(K,Zt);function at(t){return e.emitValue===!0?J.value(t):t}function We(t){if(t!==-1&&t<i.value.length)if(e.multiple===!0){const a=e.modelValue.slice();c("remove",{index:t,value:a.splice(t,1)[0]}),c("update:modelValue",a)}else c("update:modelValue",null)}function Rt(t){We(t),l.focus()}function ot(t,a){const o=at(t);if(e.multiple!==!0){e.fillInput===!0&&qe($.value(t),!0,!0),c("update:modelValue",o);return}if(i.value.length===0){c("add",{index:0,value:o}),c("update:modelValue",e.multiple===!0?[o]:o);return}if(a===!0&&$e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const b=e.modelValue.slice();c("add",{index:b.length,value:o}),b.push(o),c("update:modelValue",b)}function se(t,a){if(l.editable.value!==!0||t===void 0||me.value(t)===!0)return;const o=J.value(t);if(e.multiple!==!0){a!==!0&&(qe(e.fillInput===!0?$.value(t):"",!0,!0),ce()),D.value!==null&&D.value.focus(),(i.value.length===0||Ie(J.value(i.value[0]),o)!==!0)&&c("update:modelValue",e.emitValue===!0?o:t);return}if((A!==!0||I.value===!0)&&l.focus(),it(),i.value.length===0){const z=e.emitValue===!0?o:t;c("add",{index:0,value:z}),c("update:modelValue",e.multiple===!0?[z]:z);return}const b=e.modelValue.slice(),q=He.value.findIndex(z=>Ie(z,o));if(q!==-1)c("remove",{index:q,value:b.splice(q,1)[0]});else{if(e.maxValues!==void 0&&b.length>=e.maxValues)return;const z=e.emitValue===!0?o:t;c("add",{index:b.length,value:z}),b.push(z)}c("update:modelValue",b)}function Se(t){if(O.platform.is.desktop!==!0)return;const a=t!==-1&&t<K.value?t:-1;g.value!==a&&(g.value=a)}function Pe(t=1,a){if(s.value===!0){let o=g.value;do o=At(o+t,-1,K.value-1);while(o!==-1&&o!==g.value&&me.value(e.options[o])===!0);g.value!==o&&(Se(o),ve(o),a!==!0&&e.useInput===!0&&e.fillInput===!0&&Ne(o>=0?$.value(e.options[o]):j,!0))}}function Ht(t,a){const o=b=>Ie(J.value(b),t);return e.options.find(o)||a.find(o)||t}function $e(t){const a=J.value(t);return He.value.find(o=>Ie(o,a))!==void 0}function it(t){e.useInput===!0&&D.value!==null&&(t===void 0||D.value===t.target&&t.target.value===y.value)&&D.value.select()}function rt(t){bl(t,27)===!0&&s.value===!0&&(we(t),ce(),ye()),c("keyup",t)}function st(t){const{value:a}=t.target;if(t.keyCode!==void 0){rt(t);return}if(t.target.value="",V!==null&&(clearTimeout(V),V=null),_!==null&&(clearTimeout(_),_=null),ye(),typeof a=="string"&&a.length!==0){const o=a.toLocaleLowerCase(),b=z=>{const N=e.options.find(T=>String(z.value(T)).toLocaleLowerCase()===o);return N===void 0?!1:(i.value.indexOf(N)===-1?se(N):ce(),!0)},q=z=>{b(J)!==!0&&z!==!0&&b($)!==!0&&ge(a,!0,()=>q(!0))};q()}else l.clearValue(t)}function ct(t){c("keypress",t)}function dt(t){if(c("keydown",t),hl(t)===!0)return;const a=m.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),o=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(g.value!==-1||a===!0);if(t.keyCode===27){Ye(t);return}if(t.keyCode===9&&o===!1){be();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&s.value===!1){de(t),he();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&m.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?We(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&c("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof m.value!="string"||m.value.length===0)&&(de(t),g.value=-1,Pe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&fe.value!==void 0&&(de(t),g.value=Math.max(-1,Math.min(K.value,g.value+(t.keyCode===33?-1:1)*fe.value.view)),Pe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(de(t),Pe(t.keyCode===38?-1:1,e.multiple));const b=K.value;if((U===void 0||E<Date.now())&&(U=""),b>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||U.length!==0)){s.value!==!0&&he(t);const q=t.key.toLocaleLowerCase(),z=U.length===1&&U[0]===q;E=Date.now()+1500,z===!1&&(de(t),U+=q);const N=new RegExp("^"+U.split("").map(Ge=>Ql.indexOf(Ge)!==-1?"\\"+Ge:Ge).join(".*"),"i");let T=g.value;if(z===!0||T<0||N.test($.value(e.options[T]))!==!0)do T=At(T+1,-1,b-1);while(T!==g.value&&(me.value(e.options[T])===!0||N.test($.value(e.options[T]))!==!0));g.value!==T&&ue(()=>{Se(T),ve(T),T>=0&&e.useInput===!0&&e.fillInput===!0&&Ne($.value(e.options[T]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||U!=="")&&(t.keyCode!==9||o===!1))){if(t.keyCode!==9&&de(t),g.value!==-1&&g.value<b){se(e.options[g.value]);return}if(a===!0){const q=(z,N)=>{if(N){if(Mt(N)!==!0)return}else N=e.newValueMode;if(qe("",e.multiple!==!0,!0),z==null)return;(N==="toggle"?se:ot)(z,N==="add-unique"),e.multiple!==!0&&(D.value!==null&&D.value.focus(),ce())};if(e.onNewValue!==void 0?c("newValue",m.value,q):q(m.value),e.multiple!==!0)return}s.value===!0?be():l.innerLoading.value!==!0&&he()}}function ft(){return A===!0?Ce.value:le.value!==null&&le.value.contentEl!==null?le.value.contentEl:void 0}function Pt(){return ft()}function Nt(){return e.hideSelected===!0?[]:n["selected-item"]!==void 0?re.value.map(t=>n["selected-item"](t)).slice():n.selected!==void 0?[].concat(n.selected()):e.useChips===!0?re.value.map((t,a)=>C(Ll,{key:"option-"+a,removable:l.editable.value===!0&&me.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Y.value,onRemove(){t.removeAtIndex(a)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[C("span",{[De.value===!0?"innerHTML":"textContent"]:W.value})]}function vt(){if(R.value===!0)return n["no-option"]!==void 0?n["no-option"]({inputValue:m.value}):void 0;const t=n.option!==void 0?n.option:o=>C(Z,{key:o.index,...o.itemProps},()=>C(B,()=>C(P,()=>C("span",{[o.html===!0?"innerHTML":"textContent"]:o.label}))));let a=je("div",Re.value.map(t));return n["before-options"]!==void 0&&(a=n["before-options"]().concat(a)),wl(n["after-options"],a)}function Qt(t,a){const o=a===!0?{...Le.value,...l.splitAttrs.attributes.value}:void 0,b={ref:a===!0?D:void 0,key:"i_t",class:k.value,style:e.inputStyle,value:m.value!==void 0?m.value:"",type:"search",...o,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Lt.value};return t!==!0&&A===!0&&(Array.isArray(b.class)===!0?b.class=[...b.class,"no-pointer-events"]:b.class+=" no-pointer-events"),C("input",b)}function mt(t){V!==null&&(clearTimeout(V),V=null),_!==null&&(clearTimeout(_),_=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ne(t.target.value||""),Q=!0,j=m.value,l.focused.value!==!0&&(A!==!0||I.value===!0)&&l.focus(),e.onFilter!==void 0&&(V=setTimeout(()=>{V=null,ge(m.value)},e.inputDebounce)))}function Ne(t,a){m.value!==t&&(m.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?c("inputValue",t):_=setTimeout(()=>{_=null,c("inputValue",t)},e.inputDebounce))}function qe(t,a,o){Q=o!==!0,e.useInput===!0&&(Ne(t,!0),(a===!0||o!==!0)&&(j=t),a!==!0&&ge(t))}function ge(t,a,o){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?c("filterAbort"):(l.innerLoading.value=!0,f.value=!0),t!==""&&e.multiple!==!0&&i.value.length!==0&&Q!==!0&&t===$.value(i.value[0])&&(t="");const b=setTimeout(()=>{s.value===!0&&(s.value=!1)},10);v!==null&&clearTimeout(v),v=b,c("filter",t,(q,z)=>{(a===!0||l.focused.value===!0)&&v===b&&(clearTimeout(v),typeof q=="function"&&q(),f.value=!1,ue(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?s.value===!0&&ce():s.value===!0?Xe(!0):s.value=!0),typeof z=="function"&&ue(()=>{z(r)}),typeof o=="function"&&ue(()=>{o(r)})}))},()=>{l.focused.value===!0&&v===b&&(clearTimeout(v),l.innerLoading.value=!1,f.value=!1),s.value===!0&&(s.value=!1)})}function Ut(){return C(Tl,{ref:le,class:p.value,style:e.popupContentStyle,modelValue:s.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&R.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:M.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ke.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ie.value,onScrollPassive:_e,onBeforeShow:gt,onBeforeHide:jt,onShow:Kt},vt)}function jt(t){bt(t),be()}function Kt(){xe()}function Wt(t){we(t),D.value!==null&&D.value.focus(),I.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function $t(t){we(t),ue(()=>{I.value=!1})}function Xt(){const t=[C(El,{class:`col-auto ${l.fieldClass.value}`,...h.value,for:l.targetUid.value,dark:M.value,square:!0,loading:f.value,itemAligned:!1,filled:!0,stackLabel:m.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Wt,onBlur:$t},{...n,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return s.value===!0&&t.push(C("div",{ref:Ce,class:p.value+" scroll",style:e.popupContentStyle,...ie.value,onClick:Ye,onScrollPassive:_e},vt())),C(yl,{ref:ae,modelValue:w.value,position:e.useInput===!0?"top":void 0,transitionShow:te,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:gt,onBeforeHide:Gt,onHide:Yt,onShow:Jt},()=>C("div",{class:"q-select__dialog"+(M.value===!0?" q-select__dialog--dark q-dark":"")+(I.value===!0?" q-select__dialog--focused":"")},t))}function Gt(t){bt(t),ae.value!==null&&ae.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Yt(t){ce(),l.focused.value===!1&&c("blur",t),ye()}function Jt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&D.value!==null&&D.value!==t&&D.value.focus(),xe()}function be(){w.value!==!0&&(g.value=-1,s.value===!0&&(s.value=!1),l.focused.value===!1&&(v!==null&&(clearTimeout(v),v=null),l.innerLoading.value===!0&&(c("filterAbort"),l.innerLoading.value=!1,f.value=!1)))}function he(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),w.value=!0,ue(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ge(m.value):(R.value!==!0||n["no-option"]!==void 0)&&(s.value=!0))}function ce(){w.value=!1,be()}function ye(){e.useInput===!0&&qe(e.multiple!==!0&&e.fillInput===!0&&i.value.length!==0&&$.value(i.value[0])||"",!0,!0)}function Xe(t){let a=-1;if(t===!0){if(i.value.length!==0){const o=J.value(i.value[0]);a=e.options.findIndex(b=>Ie(J.value(b),o))}G(a)}Se(a)}function Zt(t,a){s.value===!0&&l.innerLoading.value===!1&&(G(-1,!0),ue(()=>{s.value===!0&&l.innerLoading.value===!1&&(t>a?G():Xe(!0))}))}function St(){w.value===!1&&le.value!==null&&le.value.updatePosition()}function gt(t){t!==void 0&&we(t),c("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function bt(t){t!==void 0&&we(t),c("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ht(){A=O.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?n["no-option"]!==void 0||e.onFilter!==void 0||R.value===!1:!0),te=O.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return ml(ht),Sl(St),ht(),Et(()=>{V!==null&&clearTimeout(V),_!==null&&clearTimeout(_)}),Object.assign(r,{showPopup:he,hidePopup:ce,removeAtIndex:We,add:ot,toggleOption:se,getOptionIndex:()=>g.value,setOptionIndex:Se,moveOptionSelection:Pe,filter:ge,updateMenuPosition:St,updateInputValue:qe,isOptionSelected:$e,getEmittingOptionValue:at,isOptionDisabled:(...t)=>me.value.apply(null,t)===!0,getOptionValue:(...t)=>J.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:i,fieldClass:S(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Fe,targetRef:D,hasValue:L,showPopup:he,floatingLabel:S(()=>e.hideSelected!==!0&&L.value===!0||typeof m.value=="number"||m.value.length!==0||yt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(w.value===!0||R.value!==!0||n["no-option"]!==void 0))return A===!0?Xt():Ut();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{ye(),be()})},onClick(t){if(Ye(t),A!==!0&&s.value===!0){be(),D.value!==null&&D.value.focus();return}he(t)}},getControl:t=>{const a=Nt(),o=t===!0||w.value!==!0||A!==!0;if(e.useInput===!0)a.push(Qt(t,o));else if(l.editable.value===!0){const q=o===!0?Le.value:void 0;a.push(C("input",{ref:o===!0?D:void 0,key:"d_t",class:"q-select__focus-target",id:o===!0?l.targetUid.value:void 0,value:W.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:dt,onKeyup:rt,onKeypress:ct})),o===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:st}))}if(oe.value!==void 0&&e.disable!==!0&&He.value.length!==0){const q=He.value.map(z=>C("option",{value:z,selected:!0}));a.push(C("select",{class:"hidden",name:oe.value,multiple:e.multiple},q))}const b=e.useInput===!0||o!==!0?void 0:l.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...b,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&f.value!==!0&&e.hideDropdownIcon!==!0?[C(ee,{class:"q-select__dropdown-icon"+(s.value===!0?" rotate-180":""),name:Ae.value})]:null}),Ft(l)}});async function Ot(){try{const e=await pl.get(`updates.json?v=${new Date().getTime()}`);return console.log(e.data.version),e.data.version}catch(e){const n="Ошибка при получении информации об обновлениях: "+e.message;return console.error(n),"-"}}const jl={__name:"PageSettings",setup(e,{expose:n}){n();const c=zt(),r="pwa",O="0.1.22",s=F(),w=wt(),g=F("-"),m=F("-"),I=()=>{Ct.objects.count().then(A=>g.value=A),kt.objects.count().then(A=>m.value=A)};pt(async()=>{I(),s.value=await Ot()});const f=()=>{Je.open(),_t(!0).then(()=>{I()})},V=()=>{c.dialog({message:"Удалить Базу Данных приложения?",cancel:!0,persistent:!0,ok:{label:"Удалить",color:"red-10"}}).onOk(()=>{Je.delete(),g.value="-",m.value="-"})};function _(){"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(A=>{for(const Q of A)Q.update(),Q.unregister()}),window.location.reload(!0)}const x={$q:c,appMode:r,version:O,versionToUpdate:s,storeSettings:w,topicCount:g,entryCount:m,updateDbCounters:I,updateDbData:f,deleteDb:V,forceSWupdate:_,onMounted:pt,ref:F,get useQuasar(){return zt},get init(){return _t},get db(){return Je},get Topic(){return Ct},get Entry(){return kt},get useStoreSettings(){return wt},get getUpdatesVersion(){return Ot}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}},Kl={class:"q-pa-md"};function Wl(e,n,c,r,O,s){return Vt(),Cl(kl,null,[u(Ml,{elevated:""},{default:d(()=>[u(Bl,null,{default:d(()=>[u(Qe,{flat:"",dense:"",round:"",icon:"arrow_back","aria-label":"Back",onClick:n[0]||(n[0]=w=>e.$router.back())}),u(Fl,null,{default:d(()=>n[6]||(n[6]=[xt("div",{class:"absolute-center"},"Настройки",-1)])),_:1})]),_:1})]),_:1}),u(Ol,null,{default:d(()=>[xt("div",Kl,[u(Oe,{bordered:"",padding:""},{default:d(()=>[u(P,{header:""},{default:d(()=>n[7]||(n[7]=[H("Язык")])),_:1}),u(Z,null,{default:d(()=>[u(B,{avatar:""},{default:d(()=>[u(ee,{name:"language"})]),_:1}),u(B,null,{default:d(()=>[u(P,null,{default:d(()=>n[8]||(n[8]=[H("Основной язык")])),_:1})]),_:1}),u(B,{side:""},{default:d(()=>[u(tt,{modelValue:r.storeSettings.settings.fromLanguage,"onUpdate:modelValue":n[1]||(n[1]=w=>r.storeSettings.settings.fromLanguage=w),options:r.storeSettings.LANGUAGES,"emit-value":"","map-options":"",style:{"font-size":"100%"},behavior:"menu",standout:""},null,8,["modelValue","options"])]),_:1})]),_:1}),u(Z,null,{default:d(()=>[u(B,{avatar:""},{default:d(()=>[u(ee,{name:"translate"})]),_:1}),u(B,null,{default:d(()=>[u(P,null,{default:d(()=>n[9]||(n[9]=[H("Язык перевода")])),_:1})]),_:1}),u(B,{side:""},{default:d(()=>[u(tt,{modelValue:r.storeSettings.settings.toLanguage,"onUpdate:modelValue":n[2]||(n[2]=w=>r.storeSettings.settings.toLanguage=w),options:r.storeSettings.LANGUAGES,"emit-value":"","map-options":"",style:{"font-size":"100%"},behavior:"menu",standout:""},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),u(Oe,{bordered:"",padding:""},{default:d(()=>[u(P,{header:""},{default:d(()=>n[10]||(n[10]=[H("Отображение")])),_:1}),u(Z,{clickable:"",to:"/topics"},{default:d(()=>[u(B,{avatar:""},{default:d(()=>[u(ee,{name:"checklist_rtl"})]),_:1}),u(B,null,{default:d(()=>[u(P,null,{default:d(()=>n[11]||(n[11]=[H("Темы")])),_:1}),u(P,{caption:""},{default:d(()=>n[12]||(n[12]=[H(" Выбор используемых тем разговорника для отображения в панели навигации")])),_:1})]),_:1})]),_:1})]),_:1}),u(Oe,{bordered:"",padding:""},{default:d(()=>[u(P,{header:""},{default:d(()=>n[13]||(n[13]=[H("Оформление")])),_:1}),u(Z,null,{default:d(()=>[u(B,{avatar:""},{default:d(()=>[u(ee,{name:"dark_mode"})]),_:1}),u(B,null,{default:d(()=>[u(P,null,{default:d(()=>n[14]||(n[14]=[H("Dark mode")])),_:1}),u(P,{caption:""},{default:d(()=>n[15]||(n[15]=[H("Enable dark theme")])),_:1})]),_:1}),u(B,{side:""},{default:d(()=>[u(_l,{modelValue:r.storeSettings.settings.darkMode,"onUpdate:modelValue":n[3]||(n[3]=w=>r.storeSettings.settings.darkMode=w),color:"primary"},null,8,["modelValue"])]),_:1})]),_:1}),u(Z,null,{default:d(()=>[u(B,{avatar:""},{default:d(()=>[u(ee,{name:"format_size"})]),_:1}),u(B,null,{default:d(()=>[u(P,null,{default:d(()=>n[16]||(n[16]=[H("Размер шрифта")])),_:1})]),_:1}),u(B,{side:""},{default:d(()=>[u(tt,{modelValue:r.storeSettings.settings.fontSize,"onUpdate:modelValue":n[4]||(n[4]=w=>r.storeSettings.settings.fontSize=w),options:r.storeSettings.fontOptions,style:{"font-size":"100%"},behavior:"menu",standout:""},{option:d(w=>[u(Z,xl(Al(w.itemProps)),{default:d(()=>[u(B,{style:zl({fontSize:w.opt})},{default:d(()=>[H(Me(w.opt),1)]),_:2},1032,["style"])]),_:2},1040)]),_:1},8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),u(Oe,{bordered:"",padding:""},{default:d(()=>[u(P,{header:""},{default:d(()=>n[17]||(n[17]=[H("Данные")])),_:1}),u(Z,null,{default:d(()=>[u(B,null,{default:d(()=>[u(P,null,{default:d(()=>[H(" Темы ("+Me(r.topicCount)+") Фразы ("+Me(r.entryCount)+")",1)]),_:1}),u(P,{caption:""},{default:d(()=>n[18]||(n[18]=[H("Нажмите, чтобы обновить с внешнего ресурса")])),_:1})]),_:1}),u(B,{side:""},{default:d(()=>[u(Qe,{onClick:r.updateDbData,icon:"refresh",label:"Обновить",color:"primary"})]),_:1})]),_:1}),u(Z,null,{default:d(()=>[u(B,null,{default:d(()=>[u(P,null,{default:d(()=>n[19]||(n[19]=[H("Удалить базу данных")])),_:1}),u(P,{caption:""},{default:d(()=>n[20]||(n[20]=[H(" Нажмите, чтобы полностью удалить все данные. После этого необходимо обновить данные или перезапустить приложение ")])),_:1})]),_:1}),u(B,{side:""},{default:d(()=>[u(Qe,{onClick:r.deleteDb,icon:"delete",label:"Удалить",color:"negative"})]),_:1})]),_:1})]),_:1}),u(Oe,{bordered:"",padding:""},{default:d(()=>[u(Z,null,{default:d(()=>[u(B,{avatar:""},{default:d(()=>[u(ee,{name:"info"})]),_:1}),u(B,{onClick:n[5]||(n[5]=w=>e.$router.push("/about"))},{default:d(()=>[u(P,null,{default:d(()=>n[21]||(n[21]=[H("О программе")])),_:1}),u(P,{caption:""},{default:d(()=>n[22]||(n[22]=[H(" Краткое описание программы, информация об авторе, обновление ")])),_:1})]),_:1}),u(B,{side:""},{default:d(()=>[H(Me(r.appMode)+" v "+Me(r.version)+" ",1),r.version!==r.versionToUpdate?(Vt(),ql(Qe,{key:0,onClick:r.forceSWupdate,icon:"cached",label:r.versionToUpdate,color:"primary"},null,8,["label"])):Il("",!0)]),_:1})]),_:1})]),_:1})])]),_:1})],64)}const tn=Vl(jl,[["render",Wl],["__file","PageSettings.vue"]]);export{tn as default};