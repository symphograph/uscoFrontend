import{d as F,H as S,G as _,i as n,I as C,r as o,c as V,m as p,n as l,p as c,u as d,z as Y,l as h,f,au as x}from"./index.b51d6ac9.js";import{Q as B}from"./QSelect.6c76a8de.js";import{N}from"./NewsList.d1dd37a5.js";import{u as Q}from"./use-meta.32d17331.js";import{u as R,g as P}from"./myFuncts.226b0de9.js";import{P as b}from"./PageShell.5e133f10.js";import{E as A}from"./entry.93556518.js";import"./QImg.17b0c661.js";import"./QItemLabel.44fa218d.js";import"./QMenu.fa9d02ae.js";import"./position-engine.846fdfaa.js";import"./selection.96e83ad7.js";import"./use-virtual-scroll.9d7267f0.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./QVirtualScroll.78f1d79c.js";import"./QList.5b97fc5a.js";import"./MainFooter.7a1f0a13.js";import"./QSlideTransition.4b2a6b78.js";import"./touch.9135741d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./QTooltip.8f8febcf.js";import"./SketchImg.c9670014.js";import"./img.1e897491.js";import"./myAxios.432c2c9b.js";import"./axios.12dda01d.js";import"./BtnDelete.37cd7562.js";import"./BtnHideOrShow.125286ca.js";import"./QExpansionItem.f89f8067.js";import"./QLinearProgress.8a53ad5b.js";const Eu=F({__name:"EntryListPage",setup(L){const e=S(),g=_(),E=R(),y=n("progress"),a=n("editModes").entry;C("editMode",a);const r=o(new Date().getFullYear()),s=o();function v(){x(()=>{s.value.loadData()})}async function D(){y.value=!0;const u=await A.create(E);u&&(e.params.id=u.id,g.push({path:"/new/"+u.id}))}function M(){let u=[];for(let t=2018;t<=new Date().getFullYear();t++)u.push(t);return u.reverse()}const k=o({all:"\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",euterpe:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u042D\u0432\u0442\u0435\u0440\u043F\u044B",other:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",usso:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"}),i=V(()=>{const u=e.params.category;return k.value[u]||"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),w=P(i.value);return Q(w),(u,t)=>(p(),l(b,{"page-title":i.value},{SideTools:c(()=>[d(a)?(p(),l(Y,{key:0,label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",stretch:"",flat:"",onClick:D})):h("",!0),f(B,{modelValue:r.value,"onUpdate:modelValue":[t[0]||(t[0]=m=>r.value=m),t[1]||(t[1]=m=>v())],options:M(),"emit-value":"",borderless:""},null,8,["modelValue","options"])]),virtualScroll:c(()=>[f(N,{year:r.value,limit:100,category:String(d(e).params.category),ref_key:"listRef",ref:s},null,8,["year","category"])]),_:1},8,["page-title"]))}});export{Eu as default};
