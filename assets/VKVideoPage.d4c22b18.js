import{d as x,i as f,p as d,r as s,c as y,k as A,m as n,n as v,q as c,f as m,A as B,z as F,bi as P,ax as b,D as V,F as K,E as M,l as I}from"./index.7d1b9a4d.js";import{u as Q}from"./use-quasar.ab0f1e42.js";import{P as E}from"./PageShell.a4781e48.js";import{V as N}from"./VKVideoItem.9063c062.js";import{V as _}from"./lib.0c111b23.js";import{m as S}from"./entry.3386aa3b.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./QItemLabel.2d316d6a.js";import"./QImg.9eb68109.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.c98b8949.js";import"./touch.9135741d.js";import"./selection.11f3eb57.js";import"./QScrollArea.767b0782.js";import"./format.de7e9769.js";import"./QLinearProgress.19101882.js";/* empty css                                                    */import"./QList.42d90b60.js";import"./QSelect.b07c2952.js";import"./QMenu.def2b318.js";import"./position-engine.edee25d0.js";import"./use-virtual-scroll.fd0d31d1.js";import"./rtl.276c3f1b.js";/* empty css               */import"./BtnDelete.8fb63d02.js";import"./QTooltip.834cbc11.js";import"./myFuncts.c4a4425d.js";import"./myAxios.afbb5a4e.js";import"./axios.d263a8b0.js";const T={class:"centralCol"},W={key:0,class:"vidarea"},$=x({__name:"VKVideoPage",setup(j){const l=Q(),g=f("editModes").libVideo;d("editMode",g);const a=s(!1);d("progress",a);const r=s([]),i=s(""),w=s(!1),C=f("scrollWatch");function p(t){w.value=t,C.value=!t}const h=y(()=>{if(!i.value)return r.value;const t=i.value.toLowerCase();return r.value.filter(e=>(e.description?e.description.toLowerCase().includes(t):!1)||(e.recordedAt?e.recordedAt.toLowerCase().includes(t):!1)||(e.title?e.title.toLowerCase().includes(t):!1))}),L=s([]);d("announceList",L);async function u(){a.value=!0;const t=await _.getList(l);r.value=[...t],a.value=!1}async function k(){a.value=!0,await _.updateAllFromVK(l)&&await u(),a.value=!1}return A(()=>{S.initAllList(l),u()}),(t,e)=>(n(),v(E,{"page-title":"\u0412\u0438\u0434\u0435\u043E\u0442\u0435\u043A\u0430"},{ToolPanel:c(()=>[m(B,{icon:"refresh",flat:"",stretch:"",onClick:k}),m(P,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),style:{width:"100%","max-width":"16em"},label:"\u0444\u0438\u043B\u044C\u0442\u0440",onBlur:e[1]||(e[1]=o=>p(!1)),onFocus:e[2]||(e[2]=o=>p(!0)),"stack-label":"",clearable:""},{append:c(()=>[m(F,{name:"search"})]),_:1},8,["modelValue"])]),PageContent:c(()=>[b("div",T,[r.value.length?(n(),V("div",W,[(n(!0),V(K,null,M(h.value,o=>(n(),v(N,{key:o.id,video:o,onOnSave:u},null,8,["video"]))),128))])):I("",!0)])]),_:1}))}});var ge=q($,[["__scopeId","data-v-5f189ebc"]]);export{ge as default};
