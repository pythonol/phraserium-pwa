import{u as Ct,a as we,d as Ue,E as st,e as wt,G as St,Q as Ge}from"./EntriesList-zE_ILPWX.js";import{b as it,c as Pt,Q as kt,a as qt}from"./QPage-kfsnINns.js";import{a as G,Q as R,b as Z}from"./QItem-DUVg4lhN.js";import{a8 as Mt,a9 as re,n as Et,aa as At,ab as de,ac as Se,ad as $e,ae as fe,af as Pe,ag as Le,t as S,b as p,w as N,g as be,h as q,ah as It,ai as Lt,d as he,aj as Dt,a as ge,ak as Bt,al as Rt,am as Vt,i as Qt,e as ke,j as ut,o as De,an as ct,ao as Be,ap as Nt,aq as Ot,ar as zt,a7 as ae,z as Ft,as as qe,p as jt,at as Ht,au as Kt,av as Ut,A as ve,aw as Me,_ as pe,D as I,B as $,E as T,F as c,a0 as Gt,N as O,K as oe,G as J,M as X,Q as Re,a1 as $t,a2 as dt,P as ft,a3 as Xt,$ as Yt,ax as Te,ay as me,az as Xe,H as le,L as Ye,a4 as Ze,a6 as Je,aA as Zt,aB as et,aC as tt,I as Ee}from"./index-BGy2oowu.js";import{g as at,s as nt,D as Jt,a as ea}from"./DrawerToggleBtn-NLEqiGNb.js";import{c as ta}from"./selection-BE_D-DLN.js";import{Q as aa}from"./QResizeObserver-DF-ichTx.js";import{r as na}from"./rtl-DFPa-2ov.js";import{Q as Ae}from"./QImg-Cq0X0D1X.js";import{Q as ra}from"./QList-D-FZbtE7.js";import{Q as oa}from"./QBtnDropdown-CIBNtgu9.js";import"./QExpansionItem-B1lLs1DK.js";import"./use-quasar-BiL6YFO2.js";import"./format-CJebrXOQ.js";import"./QMenu-2aA-hgB2.js";function la(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,t)=>{const u=parseFloat(d);u&&(r[t]=u)}),r}const sa=Mt({name:"touch-swipe",beforeMount(e,{value:r,arg:d,modifiers:t}){if(t.mouse!==!0&&re.has.touch!==!0)return;const u=t.mouseCapture===!0?"Capture":"",a={handler:r,sensitivity:la(d),direction:at(t),noop:Et,mouseStart(n){nt(n,a)&&At(n)&&(de(a,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(n,!0))},touchStart(n){if(nt(n,a)){const i=n.target;de(a,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","notPassiveCapture"],[i,"touchend","end","notPassiveCapture"]]),a.start(n)}},start(n,i){re.is.firefox===!0&&Se(e,!0);const h=$e(n);a.event={x:h.left,y:h.top,time:Date.now(),mouse:i===!0,dir:!1}},move(n){if(a.event===void 0)return;if(a.event.dir!==!1){fe(n);return}const i=Date.now()-a.event.time;if(i===0)return;const h=$e(n),s=h.left-a.event.x,l=Math.abs(s),v=h.top-a.event.y,W=Math.abs(v);if(a.event.mouse!==!0){if(l<a.sensitivity[1]&&W<a.sensitivity[1]){a.end(n);return}}else if(window.getSelection().toString()!==""){a.end(n);return}else if(l<a.sensitivity[2]&&W<a.sensitivity[2])return;const g=l/i,x=W/i;a.direction.vertical===!0&&l<W&&l<100&&x>a.sensitivity[0]&&(a.event.dir=v<0?"up":"down"),a.direction.horizontal===!0&&l>W&&W<100&&g>a.sensitivity[0]&&(a.event.dir=s<0?"left":"right"),a.direction.up===!0&&l<W&&v<0&&l<100&&x>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&l<W&&v>0&&l<100&&x>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&l>W&&s<0&&W<100&&g>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&l>W&&s>0&&W<100&&g>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(fe(n),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ta(),a.styleCleanup=E=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const Q=()=>{document.body.classList.remove("no-pointer-events--children")};E===!0?setTimeout(Q,50):Q()}),a.handler({evt:n,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:i,distance:{x:l,y:W}})):a.end(n)},end(n){a.event!==void 0&&(Pe(a,"temp"),re.is.firefox===!0&&Se(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),n!==void 0&&a.event.dir!==!1&&fe(n),a.event=void 0)}};if(e.__qtouchswipe=a,t.mouse===!0){const n=t.mouseCapture===!0||t.mousecapture===!0?"Capture":"";de(a,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}re.has.touch===!0&&de(a,"main",[[e,"touchstart","touchStart",`passive${t.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const d=e.__qtouchswipe;d!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&d.end(),d.handler=r.value),d.direction=at(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(Pe(r,"main"),Pe(r,"temp"),re.is.firefox===!0&&Se(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}}),ia={name:{required:!0},disable:Boolean},rt={setup(e,{slots:r}){return()=>q("div",{class:"q-panel scroll",role:"tabpanel"},he(r.default))}},ua={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ca=["update:modelValue","beforeTransition","transition"];function da(){const{props:e,emit:r,proxy:d}=be(),{getCache:t}=Ct(),{registerTimeout:u}=Le();let a,n;const i=S(null),h=S(null);function s(m){const w=e.vertical===!0?"up":"left";L((d.$q.lang.rtl===!0?-1:1)*(m.direction===w?1:-1))}const l=p(()=>[[sa,s,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=p(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),W=p(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),g=p(()=>`--q-transition-duration: ${e.transitionDuration}ms`),x=p(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),E=p(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),Q=p(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);N(()=>e.modelValue,(m,w)=>{const B=M(m)===!0?D(m):-1;n!==!0&&F(B===-1?0:B<D(w)?-1:1),i.value!==B&&(i.value=B,r("beforeTransition",m,w),u(()=>{r("transition",m,w)},e.transitionDuration))});function z(){L(1)}function Y(){L(-1)}function y(m){r("update:modelValue",m)}function M(m){return m!=null&&m!==""}function D(m){return a.findIndex(w=>w.props.name===m&&w.props.disable!==""&&w.props.disable!==!0)}function V(){return a.filter(m=>m.props.disable!==""&&m.props.disable!==!0)}function F(m){const w=m!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(m===-1?v.value:W.value):null;h.value!==w&&(h.value=w)}function L(m,w=i.value){let B=w+m;for(;B!==-1&&B<a.length;){const H=a[B];if(H!==void 0&&H.props.disable!==""&&H.props.disable!==!0){F(m),n=!0,r("update:modelValue",H.props.name),setTimeout(()=>{n=!1});return}B+=m}e.infinite===!0&&a.length!==0&&w!==-1&&w!==a.length&&L(m,m===-1?a.length:-1)}function se(){const m=D(e.modelValue);return i.value!==m&&(i.value=m),!0}function ie(){const m=M(e.modelValue)===!0&&se()&&a[i.value];return e.keepAlive===!0?[q(Dt,E.value,[q(Q.value===!0?t(x.value,()=>({...rt,name:x.value})):rt,{key:x.value,style:g.value},()=>m)])]:[q("div",{class:"q-panel scroll",style:g.value,key:x.value,role:"tabpanel"},[m])]}function We(){if(a.length!==0)return e.animated===!0?[q(It,{name:h.value},ie)]:ie()}function ye(m){return a=Lt(he(m.default,[])).filter(w=>w.props!==null&&w.props.slot===void 0&&M(w.props.name)===!0),a.length}function _e(){return a}return Object.assign(d,{next:z,previous:Y,goTo:y}),{panelIndex:i,panelDirectives:l,updatePanelsList:ye,updatePanelIndex:se,getPanelContent:We,getEnabledPanels:V,getPanels:_e,isValidPanelName:M,keepAliveProps:E,needsUniqueKeepAliveWrapper:Q,goToPanelByOffset:L,goToPanel:y,nextPanel:z,previousPanel:Y}}const fa=ge({name:"QTabPanel",props:ia,setup(e,{slots:r}){return()=>q("div",{class:"q-tab-panel",role:"tabpanel"},he(r.default))}}),va=ge({name:"QTabPanels",props:{...ua,...Bt},emits:ca,setup(e,{slots:r}){const d=be(),t=Rt(e,d.proxy.$q),{updatePanelsList:u,getPanelContent:a,panelDirectives:n}=da(),i=p(()=>"q-tab-panels q-panel-parent"+(t.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(r),Vt("div",{class:i.value},a(),"pan",e.swipeable,()=>n.value))}});let Ta=0;const ma=["click","keydown"],ba={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ta++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ha(e,r,d,t){const u=Qt(ct,ke);if(u===ke)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ke;const{proxy:a}=be(),n=S(null),i=S(null),h=S(null),s=p(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),l=p(()=>u.currentModel.value===e.name),v=p(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(l.value===!0?" q-tab--active"+(u.tabProps.value.activeClass?" "+u.tabProps.value.activeClass:"")+(u.tabProps.value.activeColor?` text-${u.tabProps.value.activeColor}`:"")+(u.tabProps.value.activeBgColor?` bg-${u.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&u.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||u.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),W=p(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(u.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=p(()=>e.disable===!0||u.hasFocus.value===!0||l.value===!1&&u.hasActiveTab.value===!0?-1:e.tabindex||0);function x(y,M){if(M!==!0&&n.value!==null&&n.value.focus(),e.disable!==!0){u.updateModel({name:e.name}),d("click",y);return}}function E(y){Ot(y,[13,32])?x(y,!0):zt(y)!==!0&&y.keyCode>=35&&y.keyCode<=40&&y.altKey!==!0&&y.metaKey!==!0&&u.onKbdNavigate(y.keyCode,a.$el)===!0&&fe(y),d("keydown",y)}function Q(){const y=u.tabProps.value.narrowIndicator,M=[],D=q("div",{ref:h,class:["q-tab__indicator",u.tabProps.value.indicatorClass]});e.icon!==void 0&&M.push(q(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&M.push(q("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&M.push(e.alertIcon!==void 0?q(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):q("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),y===!0&&M.push(D);const V=[q("div",{class:"q-focus-helper",tabindex:-1,ref:n}),q("div",{class:W.value},Ft(r.default,M))];return y===!1&&V.push(D),V}const z={name:p(()=>e.name),rootRef:i,tabIndicatorRef:h,routeData:t};ut(()=>{u.unregisterTab(z)}),De(()=>{u.registerTab(z)});function Y(y,M){const D={ref:i,class:v.value,tabindex:g.value,role:"tab","aria-selected":l.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:x,onKeydown:E,...M};return Be(q(y,D,Q()),[[Nt,s.value]])}return{renderTab:Y,$tabs:u}}const ga=ge({name:"QTab",props:ba,emits:ma,setup(e,{slots:r,emit:d}){const{renderTab:t}=ha(e,r,d);return()=>t("div")}});function pa(e,r,d){const t=d===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const Wa=["left","center","right","justify"],ya=ge({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Wa.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:d}){const{proxy:t}=be(),{$q:u}=t,{registerTick:a}=qe(),{registerTick:n}=qe(),{registerTick:i}=qe(),{registerTimeout:h,removeTimeout:s}=Le(),{registerTimeout:l,removeTimeout:v}=Le(),W=S(null),g=S(null),x=S(e.modelValue),E=S(!1),Q=S(!0),z=S(!1),Y=S(!1),y=[],M=S(0),D=S(!1);let V=null,F=null,L;const se=p(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:pa(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ie=p(()=>{const o=M.value,f=x.value;for(let b=0;b<o;b++)if(y[b].name.value===f)return!0;return!1}),We=p(()=>`q-tabs__content--align-${E.value===!0?"left":Y.value===!0?"justify":e.align}`),ye=p(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),_e=p(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+We.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=p(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),w=p(()=>e.vertical!==!0&&u.lang.rtl===!0),B=p(()=>na===!1&&w.value===!0);N(w,te),N(()=>e.modelValue,o=>{H({name:o,setCurrent:!0,skipEmit:!0})}),N(()=>e.outsideArrows,ue);function H({name:o,setCurrent:f,skipEmit:b}){x.value!==o&&(b!==!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",o),(f===!0||e["onUpdate:modelValue"]===void 0)&&(vt(x.value,o),x.value=o))}function ue(){a(()=>{Ve({width:W.value.offsetWidth,height:W.value.offsetHeight})})}function Ve(o){if(m.value===void 0||g.value===null)return;const f=o[m.value.container],b=Math.min(g.value[m.value.scroll],Array.prototype.reduce.call(g.value.children,(k,C)=>k+(C[m.value.content]||0),0)),P=f>0&&b>f;E.value=P,P===!0&&n(te),Y.value=f<parseInt(e.breakpoint,10)}function vt(o,f){const b=o!=null&&o!==""?y.find(k=>k.name.value===o):null,P=f!=null&&f!==""?y.find(k=>k.name.value===f):null;if(ce===!0)ce=!1;else if(b&&P){const k=b.tabIndicatorRef.value,C=P.tabIndicatorRef.value;V!==null&&(clearTimeout(V),V=null),k.style.transition="none",k.style.transform="none",C.style.transition="none",C.style.transform="none";const _=k.getBoundingClientRect(),A=C.getBoundingClientRect();C.style.transform=e.vertical===!0?`translate3d(0,${_.top-A.top}px,0) scale3d(1,${A.height?_.height/A.height:1},1)`:`translate3d(${_.left-A.left}px,0,0) scale3d(${A.width?_.width/A.width:1},1,1)`,i(()=>{V=setTimeout(()=>{V=null,C.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",C.style.transform="none"},70)})}P&&E.value===!0&&ee(P.rootRef.value)}function ee(o){const{left:f,width:b,top:P,height:k}=g.value.getBoundingClientRect(),C=o.getBoundingClientRect();let _=e.vertical===!0?C.top-P:C.left-f;if(_<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(_),te();return}_+=e.vertical===!0?C.height-k:C.width-b,_>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(_),te())}function te(){const o=g.value;if(o===null)return;const f=o.getBoundingClientRect(),b=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);w.value===!0?(Q.value=Math.ceil(b+f.width)<o.scrollWidth-1,z.value=b>0):(Q.value=b>0,z.value=e.vertical===!0?Math.ceil(b+f.height)<o.scrollHeight:Math.ceil(b+f.width)<o.scrollWidth)}function Qe(o){F!==null&&clearInterval(F),F=setInterval(()=>{bt(o)===!0&&K()},5)}function Ne(){Qe(B.value===!0?Number.MAX_SAFE_INTEGER:0)}function Oe(){Qe(B.value===!0?0:Number.MAX_SAFE_INTEGER)}function K(){F!==null&&(clearInterval(F),F=null)}function Tt(o,f){const b=Array.prototype.filter.call(g.value.children,A=>A===f||A.matches&&A.matches(".q-tab.q-focusable")===!0),P=b.length;if(P===0)return;if(o===36)return ee(b[0]),b[0].focus(),!0;if(o===35)return ee(b[P-1]),b[P-1].focus(),!0;const k=o===(e.vertical===!0?38:37),C=o===(e.vertical===!0?40:39),_=k===!0?-1:C===!0?1:void 0;if(_!==void 0){const A=w.value===!0?-1:1,j=b.indexOf(f)+_*A;return j>=0&&j<P&&(ee(b[j]),b[j].focus({preventScroll:!0})),!0}}const mt=p(()=>B.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,f)=>{o.scrollLeft=-f}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,f)=>{o.scrollTop=f}}:{get:o=>o.scrollLeft,set:(o,f)=>{o.scrollLeft=f}});function bt(o){const f=g.value,{get:b,set:P}=mt.value;let k=!1,C=b(f);const _=o<C?-1:1;return C+=_*5,C<0?(k=!0,C=0):(_===-1&&C<=o||_===1&&C>=o)&&(k=!0,C=o),P(f,C),te(),k}function ze(o,f){for(const b in o)if(o[b]!==f[b])return!1;return!0}function ht(){let o=null,f={matchedLen:0,queryDiff:9999,hrefLen:0};const b=y.filter(_=>_.routeData!==void 0&&_.routeData.hasRouterLink.value===!0),{hash:P,query:k}=t.$route,C=Object.keys(k).length;for(const _ of b){const A=_.routeData.exact.value===!0;if(_.routeData[A===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:j,query:xe,matched:_t,href:xt}=_.routeData.resolvedLink.value,Ce=Object.keys(xe).length;if(A===!0){if(j!==P||Ce!==C||ze(k,xe)===!1)continue;o=_.name.value;break}if(j!==""&&j!==P||Ce!==0&&ze(xe,k)===!1)continue;const U={matchedLen:_t.length,queryDiff:C-Ce,hrefLen:xt.length-j.length};if(U.matchedLen>f.matchedLen){o=_.name.value,f=U;continue}else if(U.matchedLen!==f.matchedLen)continue;if(U.queryDiff<f.queryDiff)o=_.name.value,f=U;else if(U.queryDiff!==f.queryDiff)continue;U.hrefLen>f.hrefLen&&(o=_.name.value,f=U)}if(o===null&&y.some(_=>_.routeData===void 0&&_.name.value===x.value)===!0){ce=!1;return}H({name:o,setCurrent:!0})}function gt(o){if(s(),D.value!==!0&&W.value!==null&&o.target&&typeof o.target.closest=="function"){const f=o.target.closest(".q-tab");f&&W.value.contains(f)===!0&&(D.value=!0,E.value===!0&&ee(f))}}function pt(){h(()=>{D.value=!1},30)}function ne(){je.avoidRouteWatcher===!1?l(ht):v()}function Fe(){if(L===void 0){const o=N(()=>t.$route.fullPath,ne);L=()=>{o(),L=void 0}}}function Wt(o){y.push(o),M.value++,ue(),o.routeData===void 0||t.$route===void 0?l(()=>{if(E.value===!0){const f=x.value,b=f!=null&&f!==""?y.find(P=>P.name.value===f):null;b&&ee(b.rootRef.value)}}):(Fe(),o.routeData.hasRouterLink.value===!0&&ne())}function yt(o){y.splice(y.indexOf(o),1),M.value--,ue(),L!==void 0&&o.routeData!==void 0&&(y.every(f=>f.routeData===void 0)===!0&&L(),ne())}const je={currentModel:x,tabProps:se,hasFocus:D,hasActiveTab:ie,registerTab:Wt,unregisterTab:yt,verifyRouteModel:ne,updateModel:H,onKbdNavigate:Tt,avoidRouteWatcher:!1};jt(ct,je);function He(){V!==null&&clearTimeout(V),K(),L!==void 0&&L()}let Ke,ce;return ut(He),Ht(()=>{Ke=L!==void 0,He()}),Kt(()=>{Ke===!0&&(Fe(),ce=!0,ne()),ue()}),()=>q("div",{ref:W,class:ye.value,role:"tablist",onFocusin:gt,onFocusout:pt},[q(aa,{onResize:Ve}),q("div",{ref:g,class:_e.value,onScroll:te},he(r.default)),q(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||u.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ne,onTouchstartPassive:Ne,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K}),q(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||u.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Oe,onTouchstartPassive:Oe,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K})])}});function ot(e,r=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(!(r instanceof Element))throw new TypeError("Expected a DOM element");return getComputedStyle(r).getPropertyValue(`--q-${e}`).trim()||null}function _a(e,r=!0){if(e===0)return{W:"ноль"};if(e>999999999)return{W:"Число слишком большое"};const d={m:["","один","два","три","четыре","пять","шесть","семь","восемь","девять"],f:["","одна","две","три","четыре","пять","шесть","семь","восемь","девять"]},t=["","десять","двадцать","тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто"],u=["десять","одиннадцать","двенадцать","тринадцать","четырнадцать","пятнадцать","шестнадцать","семнадцать","восемнадцать","девятнадцать"],a=["","сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот","восемьсот","девятьсот"];function n(s,l){s=Math.abs(s)%100;const v=s%10;return s>10&&s<20?l[2]:v>1&&v<5?l[1]:v===1?l[0]:l[2]}function i(s,l="m"){let v="";return s>=100&&(v+=a[Math.floor(s/100)]+" ",s%=100),s>=10&&s<20?v+=u[s-10]:(s>=20&&(v+=t[Math.floor(s/10)]+" ",s=s%10),s>0&&(v+=d[l][s])),v.trim()}let h="";if(e>=1e6){const s=Math.floor(e/1e6);s>0&&(h+=i(s,"m")+" "+n(s,["миллион","миллиона","миллионов"])+" "),e%=1e6}if(e>=1e3){const s=Math.floor(e/1e3);s>0&&(h+=i(s,"f")+" "+n(s,["тысяча","тысячи","тысяч"])+" "),e%=1e3}return e>0&&(h+=i(e,r?"m":"f")),{W:h.trim()}}function xa(e){if(e===0)return{W:"zero",T:"ˈzɪroʊ"};if(e>999999999)return{W:"Number is too large"};const r=[{W:"",T:""},{W:"one",T:"wʌn"},{W:"two",T:"tuː"},{W:"three",T:"θriː"},{W:"four",T:"fɔːr"},{W:"five",T:"faɪv"},{W:"six",T:"sɪks"},{W:"seven",T:"ˈsɛvən"},{W:"eight",T:"eɪt"},{W:"nine",T:"naɪn"}],d=[{W:"",T:""},{W:"",T:""},{W:"twenty",T:"ˈtwɛnti"},{W:"thirty",T:"ˈθɜːrti"},{W:"forty",T:"ˈfɔːrti"},{W:"fifty",T:"ˈfɪfti"},{W:"sixty",T:"ˈsɪksti"},{W:"seventy",T:"ˈsɛvənti"},{W:"eighty",T:"ˈeɪti"},{W:"ninety",T:"ˈnaɪnti"}],t=[{W:"ten",T:"tɛn"},{W:"eleven",T:"ɪˈlɛvən"},{W:"twelve",T:"twɛlv"},{W:"thirteen",T:"θɜːrˈtiːn"},{W:"fourteen",T:"fɔːrˈtiːn"},{W:"fifteen",T:"fɪfˈtiːn"},{W:"sixteen",T:"sɪksˈtiːn"},{W:"seventeen",T:"ˌsɛvənˈtiːn"},{W:"eighteen",T:"eɪˈtiːn"},{W:"nineteen",T:"naɪnˈtiːn"}];function u(n){let i={W:"",T:""};return n>=100&&(i.W+=r[Math.floor(n/100)].W+" hundred ",i.T+=r[Math.floor(n/100)].T+" ˈhʌndrəd ",n%=100),n>=10&&n<20?(i.W+=t[n-10].W,i.T+=t[n-10].T):n>=20?(i.W+=d[Math.floor(n/10)].W,i.T+=d[Math.floor(n/10)].T,n%10>0&&(i.W+="-"+r[n%10].W,i.T+=" "+r[n%10].T)):n>0&&(i.W+=r[n].W,i.T+=r[n].T),{W:i.W.trim(),T:i.T.trim()}}let a={W:"",T:""};if(e>=1e6){const n=Math.floor(e/1e6),i=u(n);a.W+=i.W+" million ",a.T+=i.T+" ˈmɪljən ",e%=1e6}if(e>=1e3){const n=Math.floor(e/1e3),i=u(n);a.W+=i.W+" thousand ",a.T+=i.T+" ˈθaʊzənd ",e%=1e3}if(e>0){const n=u(e);a.W+=n.W,a.T+=n.T}return{W:a.W.trim(),T:a.T.trim()}}function Ca(e,r=!1,d=!1){if(e===0)return{W:"אפס",T:"э́фес"};if(e>999999999)return{W:"המספר גדול מדי",T:"hа-миспар гадоль мидай"};const t=[{W:"",T:""},{W:"אחת",T:"аха́т"},{W:"שתיים",T:"шта́им"},{W:"שלוש",T:"шало́ш"},{W:"ארבע",T:"арба"},{W:"חמש",T:"хаме́ш"},{W:"שש",T:"шеш"},{W:"שבע",T:"ше́ва"},{W:"שמונה",T:"шмоне́"},{W:"תשע",T:"тэ́йша"},{W:"עשר",T:"э́сер"}],u=[{W:"",T:""},{W:"אחד",T:"эха́д"},{W:"שניים",T:"шна́йим"},{W:"שלושה",T:"шлоша́"},{W:"ארבעה",T:"арбаа́"},{W:"חמישה",T:"хамиша́"},{W:"שישה",T:"шиша́"},{W:"שבעה",T:"шивъа́"},{W:"שמונה",T:"шмона́"},{W:"תשעה",T:"тишъа́"},{W:"עֲשָׂרָה",T:"асара́"}],a=[{W:"",T:""},{W:"אחת עשרה",T:"ахат эсрэ"},{W:"שתים עשרה",T:"штейм эсрэ"},{W:"שלוש עשרה",T:"шлош эсрэ"},{W:"ארבע עשרה",T:"арба эсрэ"},{W:"חמש עשרה",T:"хаме́ш эсрэ"},{W:"שש עשרה",T:"шеш эсрэ"},{W:"שבע עשרה",T:"шва эсрэ"},{W:"שמונה עשרה",T:"шмоне́ эсрэ"},{W:"תשע עשרה",T:"тша эсрэ"}],n=[{W:"",T:""},{W:"",T:""},{W:"עשרים",T:"эсри́м"},{W:"שלושים",T:"шлоши́м"},{W:"ארבעים",T:"арбаи́м"},{W:"חמישים",T:"хамиши́м"},{W:"שישים",T:"шиши́м"},{W:"שבעים",T:"шиви́м"},{W:"שמונים",T:"шмони́м"},{W:"תשעים",T:"тишъи́м"}],i=[{W:"",T:""},{W:"אחד",T:"эха́д"},{W:"שני",T:"шней"},{W:"שלושת",T:"шлошет"},{W:"ארבעת",T:"арба́ат"},{W:"חמשת",T:"хаме́шет"},{W:"ששת",T:"ше́шет"},{W:"שבעת",T:"шива́т"},{W:"שמונת",T:"шмона́т"},{W:"תשעת",T:"тишъа́т"},{W:"עֲשֶׂרֶת",T:"асе́рет"}];function h(l,v=!1,W=!1){let g={W:"",T:""};if(l>=100){const x=Math.floor(l/100),E={1:{W:"מאה",T:"меа́"},2:{W:"מאתיים",T:"матаи́м"},3:{W:"שלוש מאות",T:"шлош мео́т"},4:{W:"ארבע מאות",T:"арба мео́т"},5:{W:"חמש מאות",T:"хаме́ш мео́т"},6:{W:"שש מאות",T:"шеш мео́т"},7:{W:"שבע מאות",T:"шва мео́т"},8:{W:"שמונה מאות",T:"шмоне́ мео́т"},9:{W:"תשע מאות",T:"тша мео́т"}};g.W+=E[x].W+" ",g.T+=E[x].T+" ",l%=100,l>0&&l<10&&(g.W+=" ו",g.T+=" вэ-")}if(l>10&&l<20)g.W+=a[l-10].W,g.T+=a[l-10].T;else if(l>=20){if(g.W+=n[Math.floor(l/10)].W,g.T+=n[Math.floor(l/10)].T,l%10>0){const x=W?i:v?u:t;g.W+=" ו"+x[l%10].W,g.T+=" вэ-"+x[l%10].T}}else if(l>0){const x=W?i:v?u:t;g.W+=x[l].W,g.T+=x[l].T}return{W:g.W.trim(),T:g.T.trim()}}let s={W:"",T:""};if(e>=1e6){const l=Math.floor(e/1e6);if(l===1)s.W+="מיליון ",s.T+="мильйо́н ";else{const v=h(l,!0);s.W+=v.W+" מיליון ",s.T+=v.T+" мильйо́н "}e%=1e6}if(e>=1e3){const l=Math.floor(e/1e3);if(l===1)s.W+="אֶלֶף ",s.T+="э́леф ";else if(l===2)s.W+="אלפיים ",s.T+="альпа́им ";else if(l<=10){const v=h(l,!1,!0);s.W+=v.W+" אֲלָפִים ",s.T+=v.T+" алафи́м "}else{const v=h(l,!0);s.W+=v.W+" אֶלֶף ",s.T+=v.T+" э́леф "}e%=1e3,e>0&&e<10&&(s.W+=" ו",s.T+=" вэ-")}if(e>0){const l=h(e,r);s.W+=l.W,s.T+=l.T}return{W:s.W.trim(),T:d?Ut(s.T.trim()):s.T.trim()}}function Ie(e,r,{genderM:d=null,needTransliterate:t=!1}={}){return e<0&&(e=-e),r==="ru"?_a(e,d):r==="en"?xa(e):r==="he"?Ca(e,d,t):{W:"Неизвестный язык"}}const wa={__name:"NumberCreator",emits:[...we.emits],setup(e,{expose:r}){r();const d=ve(),t=Me(d.settings,"fromLanguage"),u=Me(d.settings,"toLanguage"),{dialogRef:a,onDialogOK:n,onDialogHide:i}=we(),h=S();h.value=u.value!=="he";const s=S(""),l=p(()=>Ie(parseInt(s.value),t.value,{genderM:h.value})),v=p(()=>Ie(parseInt(s.value),u.value,{genderM:h.value,needTransliterate:d.needTransliterate})),W={storeSettings:d,fromLang:t,toLang:u,dialogRef:a,onDialogOK:n,onDialogHide:i,genderM:h,number:s,numberWordFrom:l,numberWordTo:v,ref:S,toRef:Me,computed:p,get useDialogPluginComponent(){return we},get useStoreSettings(){return ve},get numberToWords(){return Ie}};return Object.defineProperty(W,"__isScriptSetup",{enumerable:!1,value:!0}),W}},Sa={key:0,class:"text-caption q-mr-sm"};function Pa(e,r,d,t,u,a){return I(),$(Yt,{ref:"dialogRef",onHide:t.onDialogHide,position:"top"},{default:T(()=>[c(Gt,{class:"q-dialog-plugin"},{default:T(()=>[c(it,{class:"q-px-sm"},{default:T(()=>[c(Pt,{class:"text-primary"},{default:T(()=>[O(oe(e.$t("Число прописью")),1)]),_:1}),t.toLang==="he"&&!t.genderM?(I(),J("span",Sa,oe(e.$t("ж.р. для счёта")),1)):X("",!0),["ru","he"].includes(t.toLang)?(I(),$(Re,{key:1,icon:t.genderM?"man":"woman","text-color":t.genderM?"blue":"purple",onClick:r[0]||(r[0]=n=>t.genderM=!t.genderM),size:"md",padding:"sm sm",title:"Мужской/женский род"},null,8,["icon","text-color"])):X("",!0)]),_:1}),c($t,null,{default:T(()=>[c(dt,{modelValue:t.number,"onUpdate:modelValue":r[1]||(r[1]=n=>t.number=n),debounce:"250",type:"number",clearable:"",style:{"font-size":"100%"},outlined:"",autofocus:"",dense:""},null,8,["modelValue"])]),_:1}),c(G,null,{default:T(()=>[c(R,null,{default:T(()=>[c(Z,null,{default:T(()=>[O(oe(t.numberWordFrom.W),1)]),_:1})]),_:1}),c(R,{class:"text-right"},{default:T(()=>[c(Z,null,{default:T(()=>[O(oe(t.numberWordTo.W),1)]),_:1}),c(Z,{style:{opacity:"0.7"}},{default:T(()=>[O(oe(t.numberWordTo.T),1)]),_:1})]),_:1})]),_:1}),c(ft),c(Xt,null,{default:T(()=>[c(Re,{color:"primary",style:{width:"100%"},label:"OK",onClick:t.onDialogOK},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"])}const lt=pe(wa,[["render",Pa],["__file","NumberCreator.vue"]]),ka={__name:"EntriesTabs",setup(e,{expose:r}){const d=Te(),t=ve(),u=me(),a=S("tab1");r({selectedTab:a});const n=p(()=>Object.keys(u.tabs).length===1),i=p(()=>Xe.find(v=>u.tabs[v.name])?.name);N(i,()=>a.value=i.value||"tab1");const l={route:d,storeSettings:t,storeEntries:u,selectedTab:a,isOneTab:n,firstTab:i,tabsPosition:()=>{const v={top:"50px",maxWidth:parseInt(ot("body-width"))-t.drawerWidth+"px"};return v[t.dir.side]=t.drawerWidth+"px",v},showNumberCreator:()=>Ue({component:lt}),ref:S,computed:p,watch:N,get useRoute(){return Te},get getCssVar(){return ot},get TABS(){return Xe},get useStoreSettings(){return ve},get useStoreEntries(){return me},get dialog(){return Ue},EntriesList:st,NumberCreator:lt};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function qa(e,r,d,t,u,a){return I(),J(le,null,[c(va,{modelValue:t.selectedTab,"onUpdate:modelValue":r[0]||(r[0]=n=>t.selectedTab=n),style:Je({paddingTop:t.isOneTab?null:"40px"}),animated:"","keep-alive":""},{default:T(()=>[(I(!0),J(le,null,Ye(t.TABS,n=>Ze(e.$slots,"default",{key:n.name},()=>[t.storeEntries.tabs[n.name]?(I(),$(fa,{key:0,name:n.name,class:"q-pa-none"},{default:T(()=>[t.route.params.topicId==="numbers"?(I(),$(G,{key:0,class:"q-px-sm"},{default:T(()=>[c(R,null,{default:T(()=>[c(Re,{icon:"calculate",label:e.$t("Число прописью"),color:"primary",onClick:t.showNumberCreator},null,8,["label"])]),_:1})]),_:1})):X("",!0),c(t.EntriesList,{entries:t.storeEntries.tabs[n.name]||[],withExtra:""},null,8,["entries"])]),_:2},1032,["name"])):X("",!0)],!0)),128))]),_:3},8,["modelValue","style"]),t.isOneTab?X("",!0):(I(),$(ya,{key:0,modelValue:t.selectedTab,"onUpdate:modelValue":r[1]||(r[1]=n=>t.selectedTab=n),dense:"","mobile-arrows":"","active-color":"secondary",class:"tabs-header q-pt-xs text-primary fixed-top",style:Je(t.tabsPosition())},{default:T(()=>[(I(!0),J(le,null,Ye(t.TABS,n=>Ze(e.$slots,"default",{key:n.name},()=>[t.storeEntries.tabs[n.name]?(I(),$(ga,{key:0,name:n.name,label:n.label},null,8,["name","label"])):X("",!0)],!0)),128))]),_:3},8,["modelValue","style"]))],64)}const Ma=pe(ka,[["render",qa],["__scopeId","data-v-fc75d5ec"],["__file","EntriesTabs.vue"]]),Ea={__name:"SearchTranslate",props:{modelValue:{default:""},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:r}){r();const d=Zt(e,"modelValue"),t=p(()=>/^[a-zA-Z]*$/.test(d.value.trim())),u={searchText:d,searchTextEn:t,computed:p,get extSearch(){return wt}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function Aa(e,r,d,t,u,a){return I(),J(le,null,[c(dt,{modelValue:t.searchText,"onUpdate:modelValue":r[1]||(r[1]=n=>t.searchText=n),debounce:"300",type:"text",class:"col-5",style:{"font-size":"100%"},dark:"",dense:"",outlined:"",title:"Поиск по всем темам"},{append:T(()=>[c(ae,{name:t.searchText?"close":"search",onClick:r[0]||(r[0]=n=>t.searchText=""),class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue"]),c(oa,{"auto-close":"",square:"","fab-mini":"",title:"Поиск во внешних сервисах"},{default:T(()=>[c(ra,null,{default:T(()=>[c(G,{clickable:"",onClick:r[2]||(r[2]=n=>t.extSearch.searchGoogle(t.searchText))},{default:T(()=>[c(R,{avatar:""},{default:T(()=>[c(ae,{name:"g_translate",size:"md"})]),_:1}),c(R,null,{default:T(()=>[c(Z,null,{default:T(()=>r[6]||(r[6]=[O("Google translate")])),_:1})]),_:1})]),_:1}),c(G,{clickable:"",disable:!t.searchTextEn,onClick:r[3]||(r[3]=n=>t.extSearch.searchCambridge(t.searchText))},{default:T(()=>[c(R,{avatar:""},{default:T(()=>[c(Ae,{src:"icons/cambridge.png",width:"32px"})]),_:1}),c(R,null,{default:T(()=>[c(Z,null,{default:T(()=>r[7]||(r[7]=[O("Cambridge")])),_:1})]),_:1})]),_:1},8,["disable"]),c(G,{clickable:"",onClick:r[4]||(r[4]=n=>t.extSearch.searchPealim(t.searchText))},{default:T(()=>[c(R,{avatar:""},{default:T(()=>[c(Ae,{src:"icons/pealim.png",width:"32px"})]),_:1}),c(R,null,{default:T(()=>[c(Z,null,{default:T(()=>r[8]||(r[8]=[O("Pealim")])),_:1})]),_:1})]),_:1}),c(G,{clickable:"",onClick:r[5]||(r[5]=n=>t.extSearch.searchReverso(t.searchText))},{default:T(()=>[c(R,{avatar:""},{default:T(()=>[c(Ae,{src:"icons/reverso.png",width:"32px"})]),_:1}),c(R,null,{default:T(()=>[c(Z,null,{default:T(()=>r[9]||(r[9]=[O("Reverso")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const Ia=pe(Ea,[["render",Aa],["__file","SearchTranslate.vue"]]),La={__name:"EntriesPage",setup(e,{expose:r}){r();const d=Te(),t=me(),u=S({}),a=S(!1),n=S(""),i=S([]),h=S([]);De(async()=>{a.value=!0,await t.loadByTopic(d.params.topicId),a.value=!1});const s=p(()=>n.value.length?!i.value.length&&!h.value.length:!Object.values(t.tabs).reduce((v,W)=>v+W.length,0));N(()=>d.params.topicId,async v=>{n.value="",a.value=!0,await t.loadByTopic(v),a.value=!1}),N(n,async()=>{n.value.length>=1?i.value=await t.getSearch(n.value,d.params.topicId,!1):i.value=[],n.value.length>et?h.value=await t.getSearch(n.value,d.params.topicId,!0):h.value=[]});const l={route:d,storeEntries:t,entriesTabsRef:u,isLoading:a,searchText:n,filteredEntriesCurrent:i,filteredEntriesOther:h,isNoData:s,ref:S,computed:p,onMounted:De,watch:N,get useRoute(){return Te},get SEARCH_MIN_COUNT(){return et},get useStoreEntries(){return me},DrawerMenu:Jt,DrawerToggleBtn:ea,EntriesTabs:Ma,EntriesList:st,GramSelector:St,SearchTranslate:Ia};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},Da={key:0,class:"absolute-center text-grey"};function Ba(e,r,d,t,u,a){return I(),J(le,null,[c(t.DrawerMenu),c(kt,{elevated:""},{default:T(()=>[c(it,{class:"ellipsis"},{default:T(()=>[c(t.DrawerToggleBtn),c(Ge),c(t.SearchTranslate,{modelValue:t.searchText,"onUpdate:modelValue":r[0]||(r[0]=n=>t.searchText=n)},null,8,["modelValue"]),c(Ge),c(t.GramSelector,{withPerson:t.entriesTabsRef.selectedTab==="tab3"},null,8,["withPerson"])]),_:1})]),_:1}),c(qt,{class:"q-py-xs"},{default:T(()=>[Be(Ee("div",null,[c(t.EntriesTabs,{ref:"entriesTabsRef"},null,512)],512),[[tt,t.searchText.length===0]]),Be(Ee("div",null,[c(t.EntriesList,{entries:t.filteredEntriesCurrent},null,8,["entries"]),t.searchText.length<=t.SEARCH_MIN_COUNT?(I(),$(G,{key:0,dense:""},{default:T(()=>[c(R,{class:"text-center text-body2 text-primary"},{default:T(()=>r[1]||(r[1]=[O(" введите более 2-х символов для поиска по всем темам ")])),_:1})]),_:1})):t.filteredEntriesOther.length?(I(),$(G,{key:1,dense:""},{default:T(()=>[c(R,{class:"text-center text-body2 text-primary"},{default:T(()=>r[2]||(r[2]=[O(" найдено в остальных темах ")])),_:1})]),_:1})):X("",!0),c(ft),c(t.EntriesList,{entries:t.filteredEntriesOther},null,8,["entries"])],512),[[tt,t.searchText.length>0]]),!t.isLoading&&t.isNoData?(I(),J("div",Da,r[3]||(r[3]=[Ee("span",null,"🤷‍♂️ no data",-1)]))):X("",!0)]),_:1})],64)}const Za=pe(La,[["render",Ba],["__file","EntriesPage.vue"]]);export{Za as default};
