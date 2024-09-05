import{m as f,n as _,q as a,f as t,t as h,v as w,B as A,C as S,x as o,i as c,c as N,w as M,E as U,F as B,G as q,r as k,z as F,b7 as I,y as H,b as j,H as z,u as G,I as J,p as x,o as K,l as R,A as X,ax as Y}from"./index.bd97e9c1.js";import"./QImg.8430c3f7.js";import{Q as V}from"./QItemLabel.2de18a52.js";import{Q as C,a as Z}from"./QItem.42e8eee9.js";import"./QSelect.c85d4813.js";import{A as ee}from"./AuthorItem.ee6053cd.js";/* empty css                                                                   */import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./LocalStorage.ee218bd6.js";import{u as E}from"./use-quasar.2b1b4907.js";import{a as te}from"./axios.ad5085a6.js";import{Q as oe}from"./QList.f2c9d2ce.js";import{e as ae,n as le}from"./myFuncts.eda7a4d2.js";/* empty css                                                             */import{P as re}from"./PageShell.195bf33e.js";import{_ as ie}from"./BtnLibEdit.939b19d4.js";import{Q as ne}from"./QForm.f03f1220.js";/* empty css               */import"./QMenu.3a1b066a.js";import"./position-engine.55550dc5.js";import"./selection.db5b1e6e.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";/* empty css                                                               */import"./QExpansionItem.0b8df4a3.js";import"./QToolbar.46b6485c.js";import"./QScrollArea.3d1595d7.js";import"./TouchPan.d2e1aed3.js";import"./touch.9135741d.js";import"./QLinearProgress.61f529b3.js";import"./MainFooter.76d58485.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.95e4fb79.js";import"./AnderHeader.de8c65e8.js";/* empty css                                                    */import"./myAuth.5621b016.js";const se={__name:"WorkItem",props:{work:Object},setup(n){const u=E();return(m,l)=>(f(),_(Z,{clickable:"",to:`/work/${n.work.id}`,dense:""},{default:a(()=>[t(C,null,{default:a(()=>[t(V,null,{default:a(()=>[h(w(n.work.titleRu),1)]),_:1}),t(V,{caption:""},{default:a(()=>[h(w(n.work.titleEn),1)]),_:1})]),_:1}),t(C,{side:"",class:"opus"},{default:a(()=>[t(V,{caption:""},{default:a(()=>{var e;return[h(w((e=n.work.opus)!=null?e:"Op.?"),1)]}),_:1}),t(V,{caption:""},{default:a(()=>{var e;return[h(w((e=n.work.icatno)!=null?e:"cat\u2116.?"),1)]}),_:1}),t(V,{caption:""},{default:a(()=>{var e;return[h(w((e=n.work.catalogIndex)!=null?e:"catIdx: ?"),1)]}),_:1}),t(A,{dense:"","icon-right":"content_copy",flat:"",label:`ID: ${n.work.id}`,onClick:l[0]||(l[0]=S(e=>o(ae)(n.work.id,o(u)),["prevent","stop"]))},null,8,["label"])]),_:1})]),_:1},8,["to"]))}};var ue=D(se,[["__scopeId","data-v-acd2dcbe"]]);const de={__name:"WorkList",setup(n){const u=c("works"),m=c("searchText"),l=N(()=>{if(!m.value)return u.value;const e=m.value.toLowerCase();return u.value.filter(i=>(i.titleRu?i.titleRu.toLowerCase().includes(e):!1)||(i.titleEn?i.titleEn.toLowerCase().includes(e):!1))});return M(m,(e,i)=>{console.log("Search text changed from",i,"to",e)}),(e,i)=>(f(),_(oe,{separator:""},{default:a(()=>[(f(!0),U(B,null,q(l.value,d=>(f(),_(ue,{key:d.id,work:d},null,8,["work"]))),128))]),_:1}))}},me={__name:"WorkDialog",setup(n){E();const u=c("isOpenWorkDialog"),m=k(!1),l=c("work");function e(){!d()||save()}function i(){m.value=!1}function d(){return refTitle.value.validate()&&refNum.value.validate()}return(b,r)=>(f(),_(z,{modelValue:o(u),"onUpdate:modelValue":r[4]||(r[4]=s=>j(u)?u.value=s:null),onBeforeHide:i},{default:a(()=>[t(H,{bordered:"",class:"dialogArea"},{default:a(()=>[t(ne,{onSubmit:S(e,["prevent","stop"])},{default:a(()=>[t(F,null,{default:a(()=>[t(I,{modelValue:o(l).titleRu,"onUpdate:modelValue":r[0]||(r[0]=s=>o(l).titleRu=s),prefix:"RU",label:"\u0420\u0443\u0441\u0441\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),t(I,{modelValue:o(l).titleEn,"onUpdate:modelValue":r[1]||(r[1]=s=>o(l).titleEn=s),prefix:"EN",label:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),t(I,{modelValue:o(l).opus,"onUpdate:modelValue":r[2]||(r[2]=s=>o(l).opus=s),prefix:"Op.",label:"\u041E\u043F\u0443\u0441"},null,8,["modelValue"]),t(I,{modelValue:o(l).catalogIndex,"onUpdate:modelValue":r[3]||(r[3]=s=>o(l).catalogIndex=s),label:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: BWV 123"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const ce={class:"centralCol"},pe={__name:"WorkListPage",setup(n){const u=E(),m=G();J();const l=String("https://api.staff.sakh-orch.ru/"),e=k("");x("searchText",e);const i=k(!1);x("progress",i);const d=k([]);x("works",d),c("AuthorSelectList");const b=c("selectedAuthorId"),r=c("selectedAuthor"),s=c("libEditMode"),W=k(!1);x("isOpenWorkDialog",W);const y=k(null);x("work",y);function O(){let Q=m.params.authorId*1;!Q||(i.value=!0,te.post(l+"/api/lib/work.php",{params:{method:"list",authorId:Q}}).then(p=>{var v,g;d.value=[],d.value=(g=(v=p==null?void 0:p.data)==null?void 0:v.data)!=null?g:[]}).catch(p=>{d.value=[],u.notify(le(p))}).finally(()=>{i.value=!1}))}const P=c("loadAuthor");function T(){y.value={id:void 0,titleRu:"",titleEn:"",authorId:b.value,opus:"",icatno:""},W.value=!0}return K(()=>{b.value=m.params.authorId*1,P(),O(),console.log(r.value)}),(Q,p)=>(f(),U(B,null,[t(re,{"page-title":"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F "},{ToolPanel:a(()=>{var v,g,L;return[o(s)?(f(),_(A,{key:0,onClick:T,icon:"add",flat:"",round:""})):R("",!0),t(ee,{id:o(b),iofEn:(v=o(r))==null?void 0:v.iofEn,iconUrl:(g=o(r))==null?void 0:g.iconUrl,fioRu:(L=o(r))==null?void 0:L.fioRu},null,8,["id","iofEn","iconUrl","fioRu"]),t(I,{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=$=>e.value=$),style:{width:"100%","max-width":"16em"},label:"\u0444\u0438\u043B\u044C\u0442\u0440","stack-label":"",clearable:""},{append:a(()=>[t(X,{name:"search"})]),_:1},8,["modelValue"]),t(ie)]}),PageContent:a(()=>[Y("div",ce,[d.value.length?(f(),_(de,{key:0})):R("",!0)])]),_:1}),t(me)],64))}};var Je=D(pe,[["__scopeId","data-v-1e8da17e"]]);export{Je as default};
