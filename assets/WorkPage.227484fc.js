import{i as g,r as k,m as y,n as U,q as i,f as l,C as Z,bl as L,b7 as O,x as u,B as P,y as D,b as tt,H as lt,u as at,p as W,k as ot,E as q,F,ax as A,z as E,l as H,t as w,G as it,v as j}from"./index.bd97e9c1.js";import{a as z,Q as B}from"./QItem.42e8eee9.js";import{Q as G}from"./QTooltip.0e7277dc.js";import{Q as K}from"./QItemLabel.2de18a52.js";import{Q as et}from"./QList.f2c9d2ce.js";import{P as ut}from"./PageShell.195bf33e.js";import{a as _}from"./axios.ad5085a6.js";import{u as X}from"./use-quasar.2b1b4907.js";import{a as $,n as V,e as nt}from"./myFuncts.eda7a4d2.js";import{_ as J}from"./BtnDelete.5480a871.js";import{Q as rt}from"./QForm.f03f1220.js";/* empty css               */import{_ as dt}from"./BtnLibEdit.939b19d4.js";import{A as ft}from"./AuthorItem.ee6053cd.js";import"./position-engine.55550dc5.js";import"./selection.db5b1e6e.js";import"./QExpansionItem.0b8df4a3.js";import"./QToolbar.46b6485c.js";import"./QScrollArea.3d1595d7.js";import"./TouchPan.d2e1aed3.js";import"./touch.9135741d.js";import"./format.de7e9769.js";import"./QLinearProgress.61f529b3.js";import"./MainFooter.76d58485.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.95e4fb79.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./AnderHeader.de8c65e8.js";import"./QImg.8430c3f7.js";/* empty css                                                    */import"./myAuth.5621b016.js";/* empty css                                                               */const mt={__name:"PartitionDialog",setup(Y){const c=X(),f=String("https://api.staff.sakh-orch.ru/"),p=g("isOpenPartitionDialog"),n=g("selectedPartition"),r=g("loadPartitions"),s=k(!1);function R(){var v;s.value=!0,_.post(f+"/api/lib/partition.php",{params:{method:n.value.id?"update":"add",workId:n.value.workId,title:n.value.title,num:n.value.num,id:(v=n.value.id)!=null?v:void 0}}).then(e=>{var m,x,h;if(!((m=e==null?void 0:e.data)!=null&&m.result))throw new Error;c.notify($((h=(x=e==null?void 0:e.data)==null?void 0:x.result)!=null?h:null)),p.value=!1}).catch(e=>{c.notify(V(e))}).finally(()=>{s.value=!1})}function Q(){r(),s.value=!1}const I=[v=>!!v||"\u041F\u0443\u0441\u0442\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435!"],N=[v=>v>0&v<1e3||"\u2116?"],b=k(),S=k();function T(){!M()||R()}function M(){return b.value.validate()&&S.value.validate()}return(v,e)=>(y(),U(lt,{modelValue:u(p),"onUpdate:modelValue":e[3]||(e[3]=m=>tt(p)?p.value=m:null),onBeforeHide:Q},{default:i(()=>[l(D,{bordered:"",class:"dialogArea"},{default:i(()=>[l(rt,{onSubmit:Z(T,["prevent","stop"])},{default:i(()=>[l(L,null,{default:i(()=>[l(O,{type:"number",rules:N,ref_key:"refNum",ref:S,prefix:"\u2116",modelValue:u(n).num,"onUpdate:modelValue":e[0]||(e[0]=m=>u(n).num=m),style:{width:"5em"}},null,8,["modelValue"]),l(O,{modelValue:u(n).title,"onUpdate:modelValue":e[1]||(e[1]=m=>u(n).title=m),filled:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u0438",rules:I,style:{width:"100%"},ref_key:"refTitle",ref:b},null,8,["modelValue"])]),_:1}),l(L,{align:"right"},{default:i(()=>[l(P,{class:"goldBtn",label:"\u041E\u0442\u043C\u0435\u043D\u0430",onClick:e[2]||(e[2]=m=>p.value=!1)}),l(P,{color:"green",type:"submit",label:"\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",loading:s.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},pt={class:"centralCol"},Ht={__name:"WorkPage",setup(Y){const c=String("https://api.staff.sakh-orch.ru/"),f=X(),p=at(),n=g("libEditMode"),r=k({});k(null);const s=k([]),R=g("selectedAuthorId"),Q=g("selectedAuthor"),I=k(!1);W("isOpenPartitionDialog",I);function N(){return{id:void 0,num:s.value.length+1,title:"",workId:r.value.id}}const b=k({});W("selectedPartition",b);function S(){b.value=N(),I.value=!0}function T(a){b.value=a,I.value=!0}function M(){_.post(c+"/api/lib/work.php",{params:{method:"get",workId:p.params.id}}).then(a=>{var t,o;r.value=(o=(t=a==null?void 0:a.data)==null?void 0:t.data)!=null?o:{},R.value=r.value.authorId,v(),h()}).catch(a=>{f.notify(V(a))})}const v=g("loadAuthor");function e(){_.post(c+"/api/lib/work.php",{params:{method:"update",workId:p.params.id,work:r.value}}).then(a=>{var t,o,d;if(!((t=a==null?void 0:a.data)!=null&&t.result))throw new Error;f.notify($((d=(o=a==null?void 0:a.data)==null?void 0:o.result)!=null?d:null))}).catch(a=>{f.notify(V(a))})}function m(){_.post(c+"/api/lib/work.php",{params:{method:"del",workId:p.params.id}}).then(a=>{var t,o,d;if(!((t=a==null?void 0:a.data)!=null&&t.result))throw new Error;f.notify($((d=(o=a==null?void 0:a.data)==null?void 0:o.result)!=null?d:null))}).catch(a=>{f.notify(V(a))})}function x(a){_.post(c+"/api/lib/partition.php",{params:{method:"del",id:a}}).then(t=>{var o,d,C;if(!((o=t==null?void 0:t.data)!=null&&o.result))throw new Error;f.notify($((C=(d=t==null?void 0:t.data)==null?void 0:d.result)!=null?C:null)),h()}).catch(t=>{f.notify(V(t))})}function h(){_.post(c+"/api/lib/partition.php",{params:{method:"list",workId:p.params.id}}).then(a=>{var t,o;s.value=[],s.value=(o=(t=a==null?void 0:a.data)==null?void 0:t.data)!=null?o:[],console.log(s.value)}).catch(a=>{f.notify(V(a))})}return W("loadPartitions",h),ot(()=>{M()}),(a,t)=>(y(),q(F,null,[l(ut,{"page-title":r.value.titleRu},{ToolPanel:i(()=>{var o,d,C;return[l(ft,{id:u(R),iofEn:(o=u(Q))==null?void 0:o.iofEn,iconUrl:(d=u(Q))==null?void 0:d.iconUrl,fioRu:(C=u(Q))==null?void 0:C.fioRu},null,8,["id","iofEn","iconUrl","fioRu"]),l(dt)]}),PageContent:i(()=>[A("div",pt,[t[8]||(t[8]=A("br",null,null,-1)),l(D,null,{default:i(()=>[l(E,null,{default:i(()=>[l(z,null,{default:i(()=>[l(P,{label:`ID: ${r.value.id}`,flat:"",onClick:t[0]||(t[0]=o=>u(nt)(r.value.id,u(f))),"icon-right":"content_copy"},null,8,["label"])]),_:1}),l(O,{modelValue:r.value.titleRu,"onUpdate:modelValue":t[1]||(t[1]=o=>r.value.titleRu=o),readonly:!u(n),label:"\u041B\u043E\u043A\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue","readonly"]),l(O,{modelValue:r.value.titleEn,"onUpdate:modelValue":t[2]||(t[2]=o=>r.value.titleEn=o),readonly:!u(n),label:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue","readonly"]),l(O,{modelValue:r.value.opus,"onUpdate:modelValue":t[3]||(t[3]=o=>r.value.opus=o),label:"opus",readonly:!u(n),prefix:"Op."},null,8,["modelValue","readonly"])]),_:1}),u(n)?(y(),U(L,{key:0,align:"right"},{default:i(()=>[l(P,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",color:"green",onClick:e}),l(J,{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435","throw-confirm":"",danger:"",onOnOk:m,tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435"})]),_:1})):H("",!0)]),_:1}),t[9]||(t[9]=A("br",null,null,-1)),l(D,null,{default:i(()=>[l(E,null,{default:i(()=>[t[5]||(t[5]=w("\u0427\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F ")),u(n)?(y(),U(P,{key:0,icon:"add",round:"",onClick:S},{default:i(()=>[l(G,null,{default:i(()=>t[4]||(t[4]=[w("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C")])),_:1})]),_:1})):H("",!0)]),_:1}),l(E,null,{default:i(()=>[l(et,null,{default:i(()=>[(y(!0),q(F,null,it(s.value,o=>(y(),U(z,{key:o.id},{default:i(()=>[l(B,{avatar:""},{default:i(()=>[l(K,null,{default:i(()=>[w(j(o.num),1)]),_:2},1024)]),_:2},1024),l(B,null,{default:i(()=>[l(K,null,{default:i(()=>[w(j(o.title),1)]),_:2},1024)]),_:2},1024),u(n)?(y(),q(F,{key:0},[l(B,{side:""},{default:i(()=>[l(P,{icon:"edit",dense:"",round:"",flat:"",onClick:d=>T(o)},{default:i(()=>[l(G,null,{default:i(()=>t[6]||(t[6]=[w("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")])),_:1})]),_:2},1032,["onClick"])]),_:2},1024),l(B,{side:""},{default:i(()=>[l(J,{"throw-confirm":"",danger:"",flat:"",onOnOk:d=>x(o.id),tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C"},null,8,["onOnOk"])]),_:2},1024)],64)):H("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t[10]||(t[10]=A("br",null,null,-1)),l(D,null,{default:i(()=>[l(E,null,{default:i(()=>t[7]||(t[7]=[w("\u0418\u0437\u0434\u0430\u043D\u0438\u044F")])),_:1}),l(E)]),_:1})])]),_:1},8,["page-title"]),l(mt)],64))}};export{Ht as default};
