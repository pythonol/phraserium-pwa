import{Q as h,a as D,b as E,c as S}from"./QPage-BWYDO0Ix.js";import{Q as B}from"./QItem-D_l5E4Y5.js";import{_ as N,B as Q,K as b,u as m,H as c,G as t,F as o,I as y,E as r,J as w,L as g,M as O,Q as i,C as k,N as f,O as I,P as L,R as C,S as M,T as U,U as q,V as v,W as G}from"./index-EWMUzSIk.js";import{Q as P}from"./QExpansionItem-B6lL6Nyr.js";import{Q as A}from"./QList-D6c9K-fj.js";import{G as H,E as W}from"./EntriesList-B5QajU4Y.js";import{D as j,a as z}from"./DrawerToggleBtn-BoSy4q5Y.js";import"./QResizeObserver-Bd0bl1NL.js";import"./QImg-CtFfXpbf.js";import"./use-quasar-Dy86uE3Z.js";import"./selection-BNCNJ9WL.js";import"./format-CJebrXOQ.js";const K={__name:"FavoritesPage",setup(s,{expose:l}){l();const x=Q(),e=b(),u=m(!1),n=m(null),a=m(""),d=m(!1),_=()=>u.value=!0,p=()=>u.value=!1;function T(V){n.value=V,a.value=V.name,_()}const F={storeSettings:x,storeFavorites:e,dialogVisible:u,currentFav:n,name:a,commentsExpanded:d,openEditor:_,closeEditor:p,onEditFav:T,onSaveFav:()=>{n.value.name!==a.value&&(n.value.name=a.value,n.value.save()),p()},onDeleteFav:async()=>{await e.remove(n.value),p()},ref:m,get useStoreSettings(){return Q},get useStoreFavorites(){return b},GramSelector:H,DrawerMenu:j,DrawerToggleBtn:z,EntriesList:W};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}},J={class:"text-center"},R={key:1,class:"absolute-center text-grey text-center"};function X(s,l,x,e,u,n){return r(),c(y,null,[t(e.DrawerMenu),t(h,{elevated:""},{default:o(()=>[t(E,null,{default:o(()=>[t(e.DrawerToggleBtn),t(S,null,{default:o(()=>[w("div",J,g(s.$t("Избранное")),1)]),_:1}),t(e.GramSelector,{withPerson:""})]),_:1})]),_:1}),t(D,{class:"q-py-xs"},{default:o(()=>[t(A,null,{default:o(()=>[(r(!0),c(y,null,O(e.storeFavorites.allOrdered,a=>(r(),c("div",{key:a.id},[t(P,{modelValue:a.expanded,"onUpdate:modelValue":[d=>a.expanded=d,d=>a.save()],"switch-toggle-side":""},{header:o(()=>[t(B,{class:"text-h6 text-primary"},{default:o(()=>[C(g(a.name),1)]),_:2},1024),t(v,{icon:"edit",class:"absolute-end q-mx-sm q-mt-sm backdim",onClick:G(d=>e.onEditFav(a),["stop"]),size:"sm",round:""},null,8,["onClick"])]),default:o(()=>[t(i),t(e.EntriesList,{entries:a.entryIds,favorite:a,withTopic:""},null,8,["entries","favorite"])]),_:2},1032,["modelValue","onUpdate:modelValue"]),a.expanded?f("",!0):(r(),k(i,{key:0}))]))),128))]),_:1}),t(P,{label:"Мои комментарии",modelValue:e.commentsExpanded,"onUpdate:modelValue":[l[0]||(l[0]=a=>e.commentsExpanded=a),l[1]||(l[1]=a=>e.storeFavorites.loadEntriesWithComments(e.commentsExpanded))],"header-class":"text-h6","switch-toggle-side":""},{default:o(()=>[t(i),t(e.EntriesList,{entries:e.storeFavorites.entriesWithComments,withTopic:""},null,8,["entries"])]),_:1},8,["modelValue"]),e.commentsExpanded?f("",!0):(r(),k(i,{key:0})),!e.commentsExpanded&&!Object.keys(e.storeFavorites.entryFavsMap).length?(r(),c("div",R,l[5]||(l[5]=[w("span",null,"👉 используйте жест swipe вправо, чтобы добавить фразу в избранное",-1)]))):f("",!0),t(I,{modelValue:e.dialogVisible,"onUpdate:modelValue":l[4]||(l[4]=a=>e.dialogVisible=a),dir:e.storeSettings.dir.dir,position:s.$constants.POPUP_POSITION},{default:o(()=>[t(L,{class:"q-dialog-plugin"},{default:o(()=>[t(E,{class:"q-px-sm"},{default:o(()=>[t(S,{class:"text-primary"},{default:o(()=>[C(g(s.$t("Избранное")),1)]),_:1})]),_:1}),t(i),t(M,{class:"q-px-lg"},{default:o(()=>[t(U,{modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=a=>e.name=a),maxlength:s.$constants.FAV_NAME_MAX_LENGTH,placeholder:"Наименование",outlined:"",dense:"",autofocus:"",style:{"font-size":"100%"},onBlur:l[3]||(l[3]=a=>e.name=e.name.trim())},null,8,["modelValue","maxlength"])]),_:1}),t(i),t(q,{class:"items-stretch no-wrap"},{default:o(()=>[t(v,{label:"OK",class:"col-grow",style:{"max-width":"120px"},color:"primary",onClick:e.onSaveFav}),t(v,{label:s.$t("Удалить"),icon:"delete","text-color":"red-8",onClick:e.onDeleteFav},null,8,["label"]),t(v,{label:s.$t("Отмена"),icon:"cancel",onClick:e.closeEditor},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue","dir","position"])]),_:1})],64)}const ue=N(K,[["render",X],["__file","FavoritesPage.vue"]]);export{ue as default};
