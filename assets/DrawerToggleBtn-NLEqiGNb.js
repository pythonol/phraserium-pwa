import{Q as Ne}from"./QList-D-FZbtE7.js";import{a8 as We,a9 as z,n as Fe,aa as Ve,ab as N,ac as Z,aR as me,aQ as J,ad as ne,af as ee,ae as Xe,a as je,aS as Ye,ak as He,aT as Ue,al as Re,ag as Ke,i as Ge,e as te,t as L,b as v,aU as Ze,aV as Je,w as y,o as et,U as he,j as tt,ao as at,h as W,am as pe,d as rt,l as nt,g as it,aW as ot,_ as ie,A as O,D as B,B as T,P as st,E,F as V,a5 as ge,a7 as ut,M as lt,N as dt,K as ct,aX as ye,aY as be,G as ft,H as vt,L as mt,aZ as ht,Q as pt}from"./index-BGy2oowu.js";import{c as gt}from"./selection-BE_D-DLN.js";import{b as F}from"./format-CJebrXOQ.js";import{Q as yt}from"./QImg-Cq0X0D1X.js";import{Q as we,b as bt,a as wt}from"./QItem-DUVg4lhN.js";const oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_t=Object.keys(oe);oe.all=!0;function _e(t){const n={};for(const o of _t)t[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?oe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const St=["INPUT","TEXTAREA"];function Se(t,n){return n.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof n.handler=="function"&&St.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(n.uid)===-1)}function ae(t,n,o){const s=ne(t);let e,r=s.left-n.event.x,u=s.top-n.event.y,c=Math.abs(r),h=Math.abs(u);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?e=r<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=u<0?"up":"down":d.up===!0&&u<0?(e="up",c>h&&(d.left===!0&&r<0?e="left":d.right===!0&&r>0&&(e="right"))):d.down===!0&&u>0?(e="down",c>h&&(d.left===!0&&r<0?e="left":d.right===!0&&r>0&&(e="right"))):d.left===!0&&r<0?(e="left",c<h&&(d.up===!0&&u<0?e="up":d.down===!0&&u>0&&(e="down"))):d.right===!0&&r>0&&(e="right",c<h&&(d.up===!0&&u<0?e="up":d.down===!0&&u>0&&(e="down")));let i=!1;if(e===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,i=!0,e==="left"||e==="right"?(s.left-=r,c=0,r=0):(s.top-=u,h=0,u=0)}return{synthetic:i,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:s,direction:e,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:c,y:h},offset:{x:r,y:u},delta:{x:s.left-n.event.lastX,y:s.top-n.event.lastY}}}}let kt=0;const re=We({name:"touch-pan",beforeMount(t,{value:n,modifiers:o}){if(o.mouse!==!0&&z.has.touch!==!0)return;function s(r,u){o.mouse===!0&&u===!0?Xe(r):(o.stop===!0&&J(r),o.prevent===!0&&me(r))}const e={uid:"qvtp_"+kt++,handler:n,modifiers:o,direction:_e(o),noop:Fe,mouseStart(r){Se(r,e)&&Ve(r)&&(N(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(Se(r,e)){const u=r.target;N(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,u){if(z.is.firefox===!0&&Z(t,!0),e.lastEvt=r,u===!0||o.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&me(d),r.cancelBubble===!0&&J(d),Object.assign(d,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:d}}J(r)}const{left:c,top:h}=ne(r);e.event={x:c,y:h,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:h}},move(r){if(e.event===void 0)return;const u=ne(r),c=u.left-e.event.x,h=u.top-e.event.y;if(c===0&&h===0)return;e.lastEvt=r;const d=e.event.mouse===!0,i=()=>{s(r,d);let g;o.preserveCursor!==!0&&o.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),gt(),e.styleCleanup=f=>{if(e.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),d===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{C(),f()},50):C()}else f!==void 0&&f()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(r,e.event.mouse);const{payload:g,synthetic:f}=ae(r,e,!1);g!==void 0&&(e.handler(g)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=g.position.left,e.event.lastY=g.position.top,e.event.lastDir=f===!0?void 0:g.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(r);return}const S=Math.abs(c),p=Math.abs(h);S!==p&&(e.direction.horizontal===!0&&S>p||e.direction.vertical===!0&&S<p||e.direction.up===!0&&S<p&&h<0||e.direction.down===!0&&S<p&&h>0||e.direction.left===!0&&S>p&&c<0||e.direction.right===!0&&S>p&&c>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,u){if(e.event!==void 0){if(ee(e,"temp"),z.is.firefox===!0&&Z(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ae(r===void 0?e.lastEvt:r,e).payload);const{payload:c}=ae(r===void 0?e.lastEvt:r,e,!0),h=()=>{e.handler(c)};e.styleCleanup!==void 0?e.styleCleanup(h):h()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,o.mouse===!0){const r=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";N(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}z.has.touch===!0&&N(e,"main",[[t,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const o=t.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=_e(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ee(n,"main"),ee(n,"temp"),z.is.firefox===!0&&Z(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}}),ke=150,Ct=je({name:"QDrawer",inheritAttrs:!1,props:{...Ye,...He,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ue,"onLayout","miniState"],setup(t,{slots:n,emit:o,attrs:s}){const e=it(),{proxy:{$q:r}}=e,u=Re(t,r),{preventBodyScroll:c}=ot(),{registerTimeout:h,removeTimeout:d}=Ke(),i=Ge(nt,te);if(i===te)return console.error("QDrawer needs to be child of QLayout"),te;let S,p=null,g;const f=L(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),C=v(()=>t.mini===!0&&f.value!==!0),w=v(()=>C.value===!0?t.miniWidth:t.width),m=L(t.showIfAbove===!0&&f.value===!1?!0:t.modelValue===!0),se=v(()=>t.persistent!==!0&&(f.value===!0||xe.value===!0));function ue(a,l){if(Ce(),a!==!1&&i.animate(),_(0),f.value===!0){const b=i.instances[$.value];b!==void 0&&b.belowBreakpoint===!0&&b.hide(!1),q(1),i.isContainer.value!==!0&&c(!0)}else q(0),a!==!1&&R(!1);h(()=>{a!==!1&&R(!0),l!==!0&&o("show",a)},ke)}function le(a,l){qe(),a!==!1&&i.animate(),q(0),_(M.value*w.value),K(),l!==!0?h(()=>{o("hide",a)},ke):d()}const{show:X,hide:P}=Ze({showing:m,hideOnRouteChange:se,handleShow:ue,handleHide:le}),{addToHistory:Ce,removeFromHistory:qe}=Je(m,P,se),Q={belowBreakpoint:f,hide:P},k=v(()=>t.side==="right"),M=v(()=>(r.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),de=L(0),D=L(!1),j=L(!1),ce=L(w.value*M.value),$=v(()=>k.value===!0?"left":"right"),Y=v(()=>m.value===!0&&f.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:w.value:0),H=v(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(k.value?"R":"L")!==-1||r.platform.is.ios===!0&&i.isContainer.value===!0),A=v(()=>t.overlay===!1&&m.value===!0&&f.value===!1),xe=v(()=>t.overlay===!0&&m.value===!0&&f.value===!1),Be=v(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&D.value===!1?" hidden":"")),Te=v(()=>({backgroundColor:`rgba(0,0,0,${de.value*.4})`})),fe=v(()=>k.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Me=v(()=>k.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),De=v(()=>{const a={};return i.header.space===!0&&fe.value===!1&&(H.value===!0?a.top=`${i.header.offset}px`:i.header.space===!0&&(a.top=`${i.header.size}px`)),i.footer.space===!0&&Me.value===!1&&(H.value===!0?a.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(a.bottom=`${i.footer.size}px`)),a}),Le=v(()=>{const a={width:`${w.value}px`,transform:`translateX(${ce.value}px)`};return f.value===!0?a:Object.assign(a,De.value)}),Ee=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Oe=v(()=>`q-drawer q-drawer--${t.side}`+(j.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${C.value===!0?"mini":"standard"}`+(H.value===!0||A.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),Pe=v(()=>{const a=r.lang.rtl===!0?t.side:$.value;return[[re,$e,void 0,{[a]:!0,mouse:!0}]]}),Ae=v(()=>{const a=r.lang.rtl===!0?$.value:t.side;return[[re,ve,void 0,{[a]:!0,mouse:!0}]]}),ze=v(()=>{const a=r.lang.rtl===!0?$.value:t.side;return[[re,ve,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function U(){Ie(f,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}y(f,a=>{a===!0?(S=m.value,m.value===!0&&P(!1)):t.overlay===!1&&t.behavior!=="mobile"&&S!==!1&&(m.value===!0?(_(0),q(0),K()):X(!1))}),y(()=>t.side,(a,l)=>{i.instances[l]===Q&&(i.instances[l]=void 0,i[l].space=!1,i[l].offset=0),i.instances[a]=Q,i[a].size=w.value,i[a].space=A.value,i[a].offset=Y.value}),y(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&U()}),y(()=>t.behavior+t.breakpoint,U),y(i.isContainer,a=>{m.value===!0&&c(a!==!0),a===!0&&U()}),y(i.scrollbarWidth,()=>{_(m.value===!0?0:void 0)}),y(Y,a=>{x("offset",a)}),y(A,a=>{o("onLayout",a),x("space",a)}),y(k,()=>{_()}),y(w,a=>{_(),G(t.miniToOverlay,a)}),y(()=>t.miniToOverlay,a=>{G(a,w.value)}),y(()=>r.lang.rtl,()=>{_()}),y(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Qe(),i.animate())}),y(C,a=>{o("miniState",a)});function _(a){a===void 0?he(()=>{a=m.value===!0?0:w.value,_(M.value*a)}):(i.isContainer.value===!0&&k.value===!0&&(f.value===!0||Math.abs(a)===w.value)&&(a+=M.value*i.scrollbarWidth.value),ce.value=a)}function q(a){de.value=a}function R(a){const l=a===!0?"remove":i.isContainer.value!==!0?"add":"";l!==""&&document.body.classList[l]("q-body--drawer-toggle")}function Qe(){p!==null&&clearTimeout(p),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,p=setTimeout(()=>{p=null,j.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function $e(a){if(m.value!==!1)return;const l=w.value,b=F(a.distance.x,0,l);if(a.isFinal===!0){b>=Math.min(75,l)===!0?X():(i.animate(),q(0),_(M.value*l)),D.value=!1;return}_((r.lang.rtl===!0?k.value!==!0:k.value)?Math.max(l-b,0):Math.min(0,b-l)),q(F(b/l,0,1)),a.isFirst===!0&&(D.value=!0)}function ve(a){if(m.value!==!0)return;const l=w.value,b=a.direction===t.side,I=(r.lang.rtl===!0?b!==!0:b)?F(a.distance.x,0,l):0;if(a.isFinal===!0){Math.abs(I)<Math.min(75,l)===!0?(i.animate(),q(1),_(0)):P(),D.value=!1;return}_(M.value*I),q(F(1-I/l,0,1)),a.isFirst===!0&&(D.value=!0)}function K(){c(!1),R(!0)}function x(a,l){i.update(t.side,a,l)}function Ie(a,l){a.value!==l&&(a.value=l)}function G(a,l){x("size",a===!0?t.miniWidth:l)}return i.instances[t.side]=Q,G(t.miniToOverlay,w.value),x("space",A.value),x("offset",Y.value),t.showIfAbove===!0&&t.modelValue!==!0&&m.value===!0&&t["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),et(()=>{o("onLayout",A.value),o("miniState",C.value),S=t.showIfAbove===!0;const a=()=>{(m.value===!0?ue:le)(!1,!0)};if(i.totalWidth.value!==0){he(a);return}g=y(i.totalWidth,()=>{g(),g=void 0,m.value===!1&&t.showIfAbove===!0&&f.value===!1?X(!1):a()})}),tt(()=>{g!==void 0&&g(),p!==null&&(clearTimeout(p),p=null),m.value===!0&&K(),i.instances[t.side]===Q&&(i.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=[];f.value===!0&&(t.noSwipeOpen===!1&&a.push(at(W("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Pe.value)),a.push(pe("div",{ref:"backdrop",class:Be.value,style:Te.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",t.noSwipeBackdrop!==!0&&m.value===!0,()=>ze.value)));const l=C.value===!0&&n.mini!==void 0,b=[W("div",{...s,key:""+l,class:[Ee.value,s.class]},l===!0?n.mini():rt(n.default))];return t.elevated===!0&&m.value===!0&&b.push(W("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(pe("aside",{ref:"content",class:Oe.value,style:Le.value},b,"contentclose",t.noSwipeClose!==!0&&f.value===!0,()=>Ae.value)),W("div",{class:"q-drawer-container"},a)}}}),qt={__name:"NavLink",props:{icon:{type:String,default:null},img:{type:String,default:null},title:{type:String,default:""},link:{type:String,default:"#"}},setup(t,{expose:n}){n();const e={storeSettings:O(),props:t,get useStoreSettings(){return O}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function xt(t,n,o,s,e,r){return s.props.link==="#"?(B(),T(st,{key:0,color:"grey"})):(B(),T(wt,{key:1,clickable:"",class:ge(["text-white",s.storeSettings.dir.dir==="rtl"?"q-pr-xs":"q-pl-sm"]),"active-class":"active",to:s.props.link},{default:E(()=>[V(we,{avatar:"",class:ge(s.storeSettings.dir.dir==="rtl"?"q-px-xs":"q-pr-sm"),style:{"min-width":"0"}},{default:E(()=>[s.props.icon?(B(),T(ut,{key:0,name:s.props.icon},null,8,["name"])):s.props.img?(B(),T(yt,{key:1,src:s.props.img,"no-spinner":"","no-native-menu":"","no-transition":"",width:"24px"},null,8,["src"])):lt("",!0)]),_:1},8,["class"]),V(we,null,{default:E(()=>[V(bt,null,{default:E(()=>[dt(ct(s.props.title),1)]),_:1})]),_:1})]),_:1},8,["class","to"]))}const Bt=ie(qt,[["render",xt],["__scopeId","data-v-1a1cedd1"],["__file","NavLink.vue"]]),Tt={__name:"DrawerMenu",setup(t,{expose:n}){n();const{t:o}=ye(),s=O(),e=be(),r=v(()=>[{title:o("Избранное"),icon:"star",link:"/favorites"},{title:o("Заметки"),icon:"description",link:"/notes"},{},...e.active.map(c=>({title:c.getName(s.settings.fromLanguage),icon:c.style?.icon,img:c.style?.img,link:"/topic/"+c.id})),{},{title:o("Настройки"),icon:"settings",link:"/settings"}]),u={t:o,storeSettings:s,storeTopics:e,navLinks:r,computed:v,get useI18n(){return ye},get useStoreSettings(){return O},get useStoreTopics(){return be},NavLink:Bt};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function Mt(t,n,o,s,e,r){return B(),T(Ct,{class:"bg-primary hide-scrollbar",width:s.storeSettings.elementSizes.drawerFullWidth,"mini-width":s.storeSettings.elementSizes.drawerMiniWidth,breakpoint:0,"show-if-above":"",side:s.storeSettings.dir.side,mini:s.storeSettings.settings.drawerMini},{default:E(()=>[V(Ne,{separator:""},{default:E(()=>[(B(!0),ft(vt,null,mt(s.navLinks,u=>(B(),T(s.NavLink,ht({key:u.title,ref_for:!0},u),null,16))),128))]),_:1})]),_:1},8,["width","mini-width","side","mini"])}const It=ie(Tt,[["render",Mt],["__file","DrawerMenu.vue"]]),Dt={__name:"DrawerToggleBtn",setup(t,{expose:n}){n();const s={storeSettings:O(),get useStoreSettings(){return O}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function Lt(t,n,o,s,e,r){return B(),T(pt,{onClick:n[0]||(n[0]=u=>s.storeSettings.settings.drawerMini=!s.storeSettings.settings.drawerMini),icon:s.storeSettings.settings.drawerMini?"keyboard_double_arrow_right":"keyboard_double_arrow_left",padding:"sm sm",title:"Только значки / +надписи",dense:""},null,8,["icon"])}const Nt=ie(Dt,[["render",Lt],["__file","DrawerToggleBtn.vue"]]);export{It as D,re as T,Nt as a,_e as g,Se as s};
