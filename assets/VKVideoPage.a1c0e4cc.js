import{d as x,i as f,I as c,r as s,c as A,k as B,m as n,n as v,p as d,f as m,z as M,y as F,bi as P,ax as b,C as V,F as K,D as I,l as Q}from"./index.b51d6ac9.js";import{u as E}from"./use-meta.32d17331.js";import{u as N,g as S}from"./myFuncts.226b0de9.js";import{P as D}from"./PageShell.5e133f10.js";import{V as T}from"./VKVideoItem.9558c3c9.js";import{V as _}from"./lib.761978b0.js";import{m as W}from"./announce.db0381ec.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./QItemLabel.44fa218d.js";import"./QImg.17b0c661.js";import"./QExpansionItem.f89f8067.js";import"./QSlideTransition.4b2a6b78.js";import"./touch.9135741d.js";import"./selection.96e83ad7.js";import"./MainFooter.7a1f0a13.js";import"./format.de7e9769.js";import"./QLinearProgress.8a53ad5b.js";import"./QList.5b97fc5a.js";import"./QSelect.6c76a8de.js";import"./QMenu.fa9d02ae.js";import"./position-engine.846fdfaa.js";import"./use-virtual-scroll.9d7267f0.js";import"./rtl.276c3f1b.js";/* empty css               */import"./BtnDelete.37cd7562.js";import"./QTooltip.8f8febcf.js";import"./SketchImg.c9670014.js";import"./img.1e897491.js";import"./myAxios.432c2c9b.js";import"./axios.12dda01d.js";const j={class:"centralCol"},q={key:0,class:"vidarea"},z=x({__name:"VKVideoPage",setup(O){const u=N(),g=S("\u0412\u0438\u0434\u0435\u043E\u0442\u0435\u043A\u0430");E(g);const w=f("editModes").libVideo;c("editMode",w);const a=s(!1);c("progress",a);const r=s([]),i=s(""),C=s(!1),h=f("scrollWatch");function p(t){C.value=t,h.value=!t}const y=A(()=>{if(!i.value)return r.value;const t=i.value.toLowerCase();return r.value.filter(e=>(e.description?e.description.toLowerCase().includes(t):!1)||(e.recordedAt?e.recordedAt.toLowerCase().includes(t):!1)||(e.title?e.title.toLowerCase().includes(t):!1))}),L=s([]);c("announceList",L);async function l(){a.value=!0;const t=await _.getList(u);r.value=[...t],a.value=!1}async function k(){a.value=!0,await _.updateAllFromVK(u)&&await l(),a.value=!1}return B(async()=>{await W.initAllList(u),await l()}),(t,e)=>(n(),v(D,{"page-title":"\u0412\u0438\u0434\u0435\u043E\u0442\u0435\u043A\u0430"},{ToolPanel:d(()=>[m(M,{icon:"refresh",flat:"",stretch:"",onClick:k}),m(P,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),style:{width:"100%","max-width":"16em"},label:"\u0444\u0438\u043B\u044C\u0442\u0440",onBlur:e[1]||(e[1]=o=>p(!1)),onFocus:e[2]||(e[2]=o=>p(!0)),"stack-label":"",clearable:""},{append:d(()=>[m(F,{name:"search"})]),_:1},8,["modelValue"])]),PageContent:d(()=>[b("div",j,[r.value.length?(n(),V("div",q,[(n(!0),V(K,null,I(y.value,o=>(n(),v(T,{key:o.id,video:o,onOnSave:l},null,8,["video"]))),128))])):Q("",!0)])]),_:1}))}});var Le=$(z,[["__scopeId","data-v-ef0b6c6e"]]);export{Le as default};