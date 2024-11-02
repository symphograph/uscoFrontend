import{d as P,i as p,m as _,D as $,f as e,q as t,t as g,u as h,n as y,l as D,v as s,A as U,c as q,w as z,r as w,B as N,y as F,bi as x,x as H,b as G,G as j,I as J,H as K,p as b,k as X,o as Y,F as Z,z as ee}from"./index.7d1b9a4d.js";import"./LocalStorage.a884797e.js";import{u as A}from"./use-quasar.ab0f1e42.js";import{Q as te}from"./QVirtualScroll.59a59cdd.js";import{Q as oe}from"./QScrollArea.767b0782.js";import{Q as I}from"./QItemLabel.2d316d6a.js";import{b as ae,Q as R}from"./QImg.9eb68109.js";import"./myFuncts.c4a4425d.js";import{_ as le}from"./BtnDelete.8fb63d02.js";import{W as B,A as Q}from"./lib.0c111b23.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import{P as re}from"./PageShell.a4781e48.js";import{A as se}from"./AuthorItem.5d12af39.js";import{Q as ne}from"./QForm.67e7cea2.js";/* empty css               */import"./QList.42d90b60.js";import"./use-virtual-scroll.fd0d31d1.js";import"./rtl.276c3f1b.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.c98b8949.js";import"./touch.9135741d.js";import"./selection.11f3eb57.js";import"./format.de7e9769.js";import"./QTooltip.834cbc11.js";import"./position-engine.edee25d0.js";import"./myAxios.afbb5a4e.js";import"./axios.d263a8b0.js";import"./QLinearProgress.19101882.js";/* empty css                                                    */const ie=P({__name:"WorkItem",props:{work:{}},emits:["onDel"],setup(W,{emit:f}){const c=A(),u=p("editMode"),k=p("genres"),o=W,n=f;function l(a){return k.value.find(v=>v.id===a)}async function m(){await B.del(c,o.work.id)&&n("onDel")}return(a,v)=>(_(),$("div",{key:`w${a.work.id}`},[e(ae,{clickable:"",to:`/work/${a.work.id}`},{default:t(()=>[e(R,null,{default:t(()=>[e(I,null,{default:t(()=>[g(h(a.work.titleRu),1)]),_:1}),e(I,{caption:""},{default:t(()=>[g(h(a.work.titleEn),1)]),_:1}),a.work.genreId?(_(),y(I,{key:0,caption:""},{default:t(()=>[g(h(l(a.work.genreId).name),1)]),_:1})):D("",!0)]),_:1}),e(R,{side:"",class:"opus"},{default:t(()=>[e(I,{caption:""},{default:t(()=>{var i;return[g(h((i=a.work.opus)!=null?i:"Op.?"),1)]}),_:1}),e(I,{caption:""},{default:t(()=>{var i;return[g(h((i=a.work.icatno)!=null?i:"cat\u2116.?"),1)]}),_:1}),e(I,{caption:""},{default:t(()=>{var i;return[g(h((i=a.work.catalogIndex)!=null?i:"catIdx: ?"),1)]}),_:1}),D("",!0)]),_:1}),e(R,{side:""},{default:t(()=>[s(u)?(_(),y(le,{key:0,title:`\u0423\u0434\u0430\u043B\u0438\u0442\u044C: ${a.work.titleRu}`,flat:"",danger:"","throw-confirm":"",onOnOk:m},null,8,["title"])):D("",!0)]),_:1})]),_:1},8,["to"])]))}});var ue=M(ie,[["__scopeId","data-v-3f6fbd2a"]]);const de={__name:"WorkList",emits:["onDel"],setup(W,{emit:f}){const c=p("works"),u=p("searchText"),k=q(()=>{if(!u.value)return c.value;const n=u.value.toLowerCase();return c.value.filter(l=>(l.titleRu?l.titleRu.toLowerCase().includes(n):!1)||(l.titleEn?l.titleEn.toLowerCase().includes(n):!1))}),o=f;return z(u,(n,l)=>{console.log("Search text changed from",l,"to",n)}),(n,l)=>(_(),y(oe,{id:"scroll-area-with-virtual-scroll-1",style:{height:"100%"}},{default:t(()=>[e(te,{items:k.value,"virtual-scroll-item-size":"40","virtual-scroll-slice-size":"30","virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":132,"scroll-target":"#scroll-area-with-virtual-scroll-1 > .scroll",class:"centralCol"},{default:t(({item:m})=>[(_(),y(ue,{work:m,onOnDel:l[0]||(l[0]=a=>o("onDel")),key:`wrk${m.id}`},null,8,["work"]))]),_:1},8,["items"])]),_:1}))}},ce={__name:"WorkDialog",emits:["onSave"],setup(W,{emit:f}){const c=A(),u=p("isOpenWorkDialog"),k=w(!1),o=p("work"),n=w();function l(){u.value=!1}const m=f;function a(){!V()||v()}async function v(){await B.add(c,o.value)&&(m("onSave"),l())}function i(){k.value=!1}function V(){return n.value.validate()}return(S,d)=>(_(),y(j,{modelValue:s(u),"onUpdate:modelValue":d[4]||(d[4]=r=>G(u)?u.value=r:null),onBeforeHide:i},{default:t(()=>[e(H,{bordered:"",class:"dialogArea"},{default:t(()=>[e(ne,{onSubmit:N(a,["prevent","stop"])},{default:t(()=>[e(F,null,{default:t(()=>[e(x,{modelValue:s(o).titleRu,"onUpdate:modelValue":d[0]||(d[0]=r=>s(o).titleRu=r),ref_key:"refTitle",ref:n,prefix:"RU",label:"\u0420\u0443\u0441\u0441\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),e(x,{modelValue:s(o).titleEn,"onUpdate:modelValue":d[1]||(d[1]=r=>s(o).titleEn=r),prefix:"EN",label:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),e(x,{modelValue:s(o).opus,"onUpdate:modelValue":d[2]||(d[2]=r=>s(o).opus=r),prefix:"Op.",label:"\u041E\u043F\u0443\u0441","stack-label":""},null,8,["modelValue"]),e(x,{modelValue:s(o).catalogIndex,"onUpdate:modelValue":d[3]||(d[3]=r=>s(o).catalogIndex=r),label:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: BWV 123","stack-label":""},null,8,["modelValue"]),e(U,{type:"submit",label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const me={__name:"WorkListPage",setup(W){const f=A(),c=J(),u=K(),k=p("loadingAuthors"),o=w("");b("searchText",o);const n=w(!1);b("progress",n);const l=w([]);b("works",l);const m=p("selectedAuthorId"),a=p("editMode"),v=w(!1);b("isOpenWorkDialog",v);const i=w(null);b("work",i);async function V(){n.value=!0;const r=await B.getListByAuthor(f,c.params.authorId);r&&(l.value=r),n.value=!1}async function S(){k.value=!0;const r=await Q.get(f,c.params.authorId);r&&(Q.selected.value=r),k.value=!1}function d(){i.value={id:void 0,titleRu:"",titleEn:"",authorId:c.params.authorId,opus:"",icatno:""},v.value=!0}return X(()=>{m.value=c.params.authorId*1,m.value||u.push({path:"/lib/author/"})}),Y(()=>{!m.value||(S(),V())}),(r,C)=>(_(),$(Z,null,[e(re,{"page-title":"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F "},{ToolPanel:t(()=>{var L,E,O;return[s(a)?(_(),y(U,{key:0,onClick:d,icon:"add",flat:"",round:""})):D("",!0),e(se,{id:s(m),iofEn:(L=s(Q).selected.value)==null?void 0:L.iofEn,iconUrl:(E=s(Q).selected.value)==null?void 0:E.iconUrl,fioRu:(O=s(Q).selected.value)==null?void 0:O.fioRu},null,8,["id","iofEn","iconUrl","fioRu"]),e(x,{modelValue:o.value,"onUpdate:modelValue":C[0]||(C[0]=T=>o.value=T),style:{width:"100%","max-width":"16em"},label:"\u0444\u0438\u043B\u044C\u0442\u0440","stack-label":"",clearable:""},{append:t(()=>[e(ee,{name:"search"})]),_:1},8,["modelValue"])]}),virtualScroll:t(()=>[e(de,{onOnDel:V})]),_:1}),e(ce,{onOnSave:V})],64))}};var Pe=M(me,[["__scopeId","data-v-d364311e"]]);export{Pe as default};
