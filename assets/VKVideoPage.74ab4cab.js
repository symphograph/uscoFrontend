import{d as x,i as f,p as d,r as s,c as y,k as A,m as n,n as v,q as c,f as m,A as B,z as F,bi as P,ax as b,D as V,F as K,E as M,l as I}from"./index.b8a27db9.js";import{u as Q}from"./use-quasar.3263cf09.js";import{P as E}from"./PageShell.df3db939.js";import{V as N}from"./VKVideoItem.ad728b2e.js";import{V as _}from"./lib.c4ff8b39.js";import{m as S}from"./entry.194e47ad.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./QItemLabel.e2854e5e.js";import"./QImg.a7071927.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.11fcab8f.js";import"./touch.9135741d.js";import"./selection.df274832.js";import"./QScrollArea.93253625.js";import"./format.de7e9769.js";import"./QLinearProgress.7eaf373a.js";/* empty css                                                    */import"./QList.18e785ec.js";import"./QSelect.671a1696.js";import"./QMenu.2615565a.js";import"./position-engine.c4c374bf.js";import"./rtl.276c3f1b.js";/* empty css               */import"./BtnDelete.ae64a1f8.js";import"./QTooltip.b7162fd1.js";import"./myFuncts.241a918b.js";import"./myAxios.597cf81f.js";import"./axios.cbd31ada.js";const T={class:"centralCol"},W={key:0,class:"vidarea"},$=x({__name:"VKVideoPage",setup(j){const l=Q(),g=f("editModes").libVideo;d("editMode",g);const a=s(!1);d("progress",a);const r=s([]),i=s(""),w=s(!1),C=f("scrollWatch");function p(t){w.value=t,C.value=!t}const h=y(()=>{if(!i.value)return r.value;const t=i.value.toLowerCase();return r.value.filter(e=>(e.description?e.description.toLowerCase().includes(t):!1)||(e.recordedAt?e.recordedAt.toLowerCase().includes(t):!1)||(e.title?e.title.toLowerCase().includes(t):!1))}),L=s([]);d("announceList",L);async function u(){a.value=!0;const t=await _.getList(l);r.value=[...t],a.value=!1}async function k(){a.value=!0,await _.updateAllFromVK(l)&&await u(),a.value=!1}return A(()=>{S.initAllList(l),u()}),(t,e)=>(n(),v(E,{"page-title":"\u0412\u0438\u0434\u0435\u043E\u0442\u0435\u043A\u0430"},{ToolPanel:c(()=>[m(B,{icon:"refresh",flat:"",stretch:"",onClick:k}),m(P,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),style:{width:"100%","max-width":"16em"},label:"\u0444\u0438\u043B\u044C\u0442\u0440",onBlur:e[1]||(e[1]=o=>p(!1)),onFocus:e[2]||(e[2]=o=>p(!0)),"stack-label":"",clearable:""},{append:c(()=>[m(F,{name:"search"})]),_:1},8,["modelValue"])]),PageContent:c(()=>[b("div",T,[r.value.length?(n(),V("div",W,[(n(!0),V(K,null,M(h.value,o=>(n(),v(N,{key:o.id,video:o,onOnSave:u},null,8,["video"]))),128))])):I("",!0)])]),_:1}))}});var _e=q($,[["__scopeId","data-v-5f189ebc"]]);export{_e as default};
