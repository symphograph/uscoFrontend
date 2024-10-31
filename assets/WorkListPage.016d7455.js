import{d as N,i as f,m as k,n as w,q as o,f as e,t as I,u as V,l as W,v as r,A as C,B as U,c as q,w as F,D as $,F as T,r as g,y as H,bi as Q,x as G,b as j,G as z,I as J,H as K,p as h,k as X,o as Y,z as Z,ax as ee}from"./index.75787531.js";import{b as te,Q as R}from"./QImg.f7a9b317.js";import{Q as b}from"./QItemLabel.a66b935d.js";import"./QSelect.d14940b8.js";import{A as oe}from"./AuthorItem.76a5b5fc.js";import{W as A,A as y}from"./lib.c084dae0.js";/* empty css                                                                   */import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./LocalStorage.d5bf7e4d.js";import{u as L}from"./use-quasar.1a95e026.js";import"./axios.d65c2777.js";import{Q as ae}from"./QVirtualScroll.45314792.js";import"./QList.6e694311.js";import{h as le}from"./myFuncts.d3ca28d7.js";import{_ as re}from"./BtnDelete.8365fa29.js";import{P as ne}from"./PageShell.0e1a84f3.js";import{Q as se}from"./QForm.531af553.js";/* empty css               */import"./QMenu.7aad4c22.js";import"./position-engine.ac70e6bd.js";import"./selection.62040b2d.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./myAxios.14651f71.js";import"./QTooltip.f0fb63cf.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.929b17c8.js";import"./touch.9135741d.js";import"./QScrollArea.70ed14f3.js";import"./QLinearProgress.319c2dad.js";/* empty css                                                    */const ie=N({__name:"WorkItem",props:{work:{}},emits:["onDel"],setup(D,{emit:_}){const d=L(),u=f("editMode"),c=f("genres"),a=D,i=_;function n(t){return c.value.find(p=>p.id===t)}async function v(){await A.del(d,a.work.id)&&i("onDel")}return(t,p)=>(k(),w(te,{clickable:"",to:`/work/${t.work.id}`,dense:""},{default:o(()=>[e(R,null,{default:o(()=>[e(b,null,{default:o(()=>[I(V(t.work.titleRu),1)]),_:1}),e(b,{caption:""},{default:o(()=>[I(V(t.work.titleEn),1)]),_:1}),t.work.genreId?(k(),w(b,{key:0,caption:""},{default:o(()=>[I(V(n(t.work.genreId).name),1)]),_:1})):W("",!0)]),_:1}),e(R,{side:""},{default:o(()=>[r(u)?(k(),w(re,{key:0,title:`\u0423\u0434\u0430\u043B\u0438\u0442\u044C: ${t.work.titleRu}`,flat:"",danger:"","throw-confirm":"",onOnOk:v},null,8,["title"])):W("",!0)]),_:1}),e(R,{side:"",class:"opus"},{default:o(()=>[e(b,{caption:""},{default:o(()=>{var s;return[I(V((s=t.work.opus)!=null?s:"Op.?"),1)]}),_:1}),e(b,{caption:""},{default:o(()=>{var s;return[I(V((s=t.work.icatno)!=null?s:"cat\u2116.?"),1)]}),_:1}),e(b,{caption:""},{default:o(()=>{var s;return[I(V((s=t.work.catalogIndex)!=null?s:"catIdx: ?"),1)]}),_:1}),e(C,{dense:"","icon-right":"content_copy",flat:"",label:`ID:
           ${t.work.id}`,onClick:p[0]||(p[0]=U(s=>r(le)(t.work.id,r(d)),["stop","prevent"]))},null,8,["label"])]),_:1})]),_:1},8,["to"]))}});var ue=M(ie,[["__scopeId","data-v-f0728bb6"]]);const de={__name:"WorkList",emits:["onDel"],setup(D,{emit:_}){const d=f("works"),u=f("searchText"),c=q(()=>{if(!u.value)return d.value;const i=u.value.toLowerCase();return d.value.filter(n=>(n.titleRu?n.titleRu.toLowerCase().includes(i):!1)||(n.titleEn?n.titleEn.toLowerCase().includes(i):!1))}),a=_;return F(u,(i,n)=>{console.log("Search text changed from",n,"to",i)}),(i,n)=>(k(),$(T,null,[e(ae,{items:c.value,style:{height:"90vh"}},{default:o(({item:v,index:t})=>[(k(),w(ue,{work:v,onOnDel:n[0]||(n[0]=p=>a("onDel")),key:t},null,8,["work"]))]),_:1},8,["items"]),W("",!0)],64))}},me={__name:"WorkDialog",emits:["onSave"],setup(D,{emit:_}){const d=L(),u=f("isOpenWorkDialog"),c=g(!1),a=f("work"),i=g();function n(){u.value=!1}const v=_;function t(){!x()||p()}async function p(){await A.add(d,a.value)&&(v("onSave"),n())}function s(){c.value=!1}function x(){return i.value.validate()}return(B,l)=>(k(),w(z,{modelValue:r(u),"onUpdate:modelValue":l[4]||(l[4]=m=>j(u)?u.value=m:null),onBeforeHide:s},{default:o(()=>[e(G,{bordered:"",class:"dialogArea"},{default:o(()=>[e(se,{onSubmit:U(t,["prevent","stop"])},{default:o(()=>[e(H,null,{default:o(()=>[e(Q,{modelValue:r(a).titleRu,"onUpdate:modelValue":l[0]||(l[0]=m=>r(a).titleRu=m),ref_key:"refTitle",ref:i,prefix:"RU",label:"\u0420\u0443\u0441\u0441\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),e(Q,{modelValue:r(a).titleEn,"onUpdate:modelValue":l[1]||(l[1]=m=>r(a).titleEn=m),prefix:"EN",label:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),e(Q,{modelValue:r(a).opus,"onUpdate:modelValue":l[2]||(l[2]=m=>r(a).opus=m),prefix:"Op.",label:"\u041E\u043F\u0443\u0441","stack-label":""},null,8,["modelValue"]),e(Q,{modelValue:r(a).catalogIndex,"onUpdate:modelValue":l[3]||(l[3]=m=>r(a).catalogIndex=m),label:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: BWV 123","stack-label":""},null,8,["modelValue"]),e(C,{type:"submit",label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const pe={class:"centralCol"},ce={__name:"WorkListPage",setup(D){const _=L(),d=J();K();const u=f("loadingAuthors"),c=g("");h("searchText",c);const a=g(!1);h("progress",a);const i=g([]);h("works",i);const n=f("selectedAuthorId"),v=f("editMode"),t=g(!1);h("isOpenWorkDialog",t);const p=g(null);h("work",p);async function s(){a.value=!0;const l=await A.getListByAuthor(_,d.params.authorId);l&&(i.value=l),a.value=!1}async function x(){u.value=!0;const l=await y.get(_,d.params.authorId);l&&(y.selected.value=l),u.value=!1}function B(){p.value={id:void 0,titleRu:"",titleEn:"",authorId:d.params.authorId,opus:"",icatno:""},t.value=!0}return X(()=>{n.value=d.params.authorId*1}),Y(()=>{x(),s()}),(l,m)=>(k(),$(T,null,[e(ne,{"page-title":"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F "},{ToolPanel:o(()=>{var E,O,S;return[r(v)?(k(),w(C,{key:0,onClick:B,icon:"add",flat:"",round:""})):W("",!0),e(oe,{id:r(n),iofEn:(E=r(y).selected.value)==null?void 0:E.iofEn,iconUrl:(O=r(y).selected.value)==null?void 0:O.iconUrl,fioRu:(S=r(y).selected.value)==null?void 0:S.fioRu},null,8,["id","iofEn","iconUrl","fioRu"]),e(Q,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=P=>c.value=P),style:{width:"100%","max-width":"16em"},label:"\u0444\u0438\u043B\u044C\u0442\u0440","stack-label":"",clearable:""},{append:o(()=>[e(Z,{name:"search"})]),_:1},8,["modelValue"])]}),PageContent:o(()=>[ee("div",pe,[i.value.length?(k(),w(de,{key:0,onOnDel:s})):W("",!0)])]),_:1}),e(me,{onOnSave:s})],64))}};var Fe=M(ce,[["__scopeId","data-v-6b876069"]]);export{Fe as default};
