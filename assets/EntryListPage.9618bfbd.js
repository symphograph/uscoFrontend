import{d as F,H as S,G as _,i as n,I as C,r as o,c as V,m as p,n as l,p as c,u as d,z as Y,l as h,f,au as x}from"./index.67387e42.js";import{Q as B}from"./QSelect.6b59e609.js";import{N}from"./NewsList.eda3188e.js";import{u as Q}from"./use-meta.a3af958a.js";import{u as R,g as P}from"./myFuncts.7cbbd23e.js";import{P as b}from"./PageShell.e6bc1a82.js";import{E as A}from"./entry.9ae2cb1c.js";import"./QImg.507e5154.js";import"./QItemLabel.6b8410e5.js";import"./QMenu.33ef42f7.js";import"./position-engine.d893493b.js";import"./selection.84b1ecbb.js";import"./use-virtual-scroll.a2eb84da.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./QVirtualScroll.ab02d786.js";import"./QList.6fe5ee29.js";import"./MainFooter.324b29be.js";import"./QSlideTransition.f2bb147d.js";import"./touch.9135741d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./QTooltip.123a896d.js";import"./SketchImg.d7a82aa6.js";import"./img.f684d0bd.js";import"./myAxios.15458097.js";import"./axios.26fc2744.js";import"./BtnDelete.203ed198.js";import"./BtnHideOrShow.17309641.js";import"./QExpansionItem.4ef05cad.js";import"./QLinearProgress.c8d436f3.js";const Eu=F({__name:"EntryListPage",setup(L){const e=S(),g=_(),E=R(),y=n("progress"),a=n("editModes").entry;C("editMode",a);const r=o(new Date().getFullYear()),s=o();function v(){x(()=>{s.value.loadData()})}async function D(){y.value=!0;const u=await A.create(E);u&&(e.params.id=u.id,g.push({path:"/new/"+u.id}))}function M(){let u=[];for(let t=2018;t<=new Date().getFullYear();t++)u.push(t);return u.reverse()}const k=o({all:"\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",euterpe:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u042D\u0432\u0442\u0435\u0440\u043F\u044B",other:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",usso:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"}),i=V(()=>{const u=e.params.category;return k.value[u]||"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),w=P(i.value);return Q(w),(u,t)=>(p(),l(b,{"page-title":i.value},{SideTools:c(()=>[d(a)?(p(),l(Y,{key:0,label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",stretch:"",flat:"",onClick:D})):h("",!0),f(B,{modelValue:r.value,"onUpdate:modelValue":[t[0]||(t[0]=m=>r.value=m),t[1]||(t[1]=m=>v())],options:M(),"emit-value":"",borderless:""},null,8,["modelValue","options"])]),virtualScroll:c(()=>[f(N,{year:r.value,limit:100,category:String(d(e).params.category),ref_key:"listRef",ref:s},null,8,["year","category"])]),_:1},8,["page-title"]))}});export{Eu as default};