import{i as w,r as g,m as c,n as O,q as l,f as t,B as X,bm as L,bi as D,v as r,A as I,x as R,b as Y,G as Z,d as j,p as B,D as M,F as N,C as h,l as W,t as P,u as A,k as G,y as S,E as tt,I as lt,ax as U}from"./index.e0f85654.js";import{b as T,Q as V}from"./QImg.2e8349d1.js";import{b as et}from"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.24bd73f4.js";import{P as ot}from"./PageShell.46b7f308.js";import{a as at}from"./axios.42d422c9.js";import{u as F}from"./use-quasar.f463e671.js";import{h as K,a as nt,n as ut}from"./myFuncts.0887c750.js";import{_ as z}from"./BtnDelete.456e0377.js";import{Q as it}from"./QForm.321b90ad.js";/* empty css               */import{P as q,W as x,A as rt}from"./lib.beeda29a.js";import{A as dt}from"./AuthorItem.f7420d9e.js";import{_ as H}from"./BtnMoveSort.76f4fed6.js";import{Q as J}from"./QTooltip.cd2ab7d7.js";import{Q as st}from"./QList.e09df5eb.js";import{Q as E}from"./QItemLabel.36b7e39e.js";import"./touch.9135741d.js";import"./selection.289153d1.js";import"./QScrollArea.edf23b1f.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./format.de7e9769.js";import"./QLinearProgress.ca3f1b6e.js";/* empty css                                                    */import"./myAxios.8b50438a.js";import"./position-engine.6acbd510.js";const ft={__name:"PartitionDialog",emits:["onSave"],setup($,{emit:Q}){const f=F(),s=w("isOpenPartitionDialog"),a=w("selectedPartition"),b=w("loadPartitions"),o=g(!1);function C(){s.value=!1}async function v(){o.value=!0,await q.save(f,a.value)&&(await b(),C()),o.value=!1}function e(){o.value=!1}const n=[i=>!!i||"\u041F\u0443\u0441\u0442\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435!"],m=[i=>i>0&i<1e3||"\u2116?"],y=g(),_=g();function p(){!u()||v()}function u(){return y.value.validate()&&_.value.validate()}return(i,d)=>(c(),O(Z,{modelValue:r(s),"onUpdate:modelValue":d[4]||(d[4]=k=>Y(s)?s.value=k:null),onBeforeHide:e},{default:l(()=>[t(R,{bordered:"",class:"dialogArea"},{default:l(()=>[t(it,{onSubmit:X(p,["stop","prevent"])},{default:l(()=>[t(L,null,{default:l(()=>[t(D,{type:"number",rules:m,ref_key:"refNum",ref:_,prefix:"\u2116",modelValue:r(a).num,"onUpdate:modelValue":d[0]||(d[0]=k=>r(a).num=k),style:{width:"5em"}},null,8,["modelValue"]),t(D,{modelValue:r(a).title,"onUpdate:modelValue":d[1]||(d[1]=k=>r(a).title=k),filled:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u0438",rules:n,style:{width:"100%"},ref_key:"refTitle",ref:y},null,8,["modelValue"]),t(D,{modelValue:r(a).caption,"onUpdate:modelValue":d[2]||(d[2]=k=>r(a).caption=k),filled:"",label:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),t(L,{align:"right"},{default:l(()=>[t(I,{label:"\u041E\u0442\u043C\u0435\u043D\u0430",flat:"",onClick:d[3]||(d[3]=k=>s.value=!1)}),t(I,{color:"green",type:"submit",label:"\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",flat:"",loading:o.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},mt=j({__name:"PartitionItem",props:{partition:{},idx:{},length:{}},emits:["onDel","onSort","onEdit"],setup($,{emit:Q}){const f=F(),s=Q,a=g(!1),b=w("editMode"),o=w("isOpenPartitionDialog");B("isOpenPartitionDialog",o);async function C(e){await q.del(f,e)&&s("onDel")}async function v(e,n){a.value=!0,await q.moveSort(f,e,n)&&s("onSort"),a.value=!1}return(e,n)=>(c(),M(N,null,[t(T,null,{default:l(()=>[t(V,{avatar:""},{default:l(()=>[t(E,null,{default:l(()=>[P(A(e.partition.sortVal),1)]),_:1})]),_:1}),t(V,{avatar:""},{default:l(()=>[t(E,null,{default:l(()=>[P("\u2116"+A(e.partition.num),1)]),_:1})]),_:1}),t(V,null,{default:l(()=>[t(E,null,{default:l(()=>[P(A(e.partition.title),1)]),_:1}),t(E,{caption:""},{default:l(()=>[P(A(e.partition.caption),1)]),_:1})]),_:1}),t(V,{side:""},{default:l(()=>[t(E,null,{default:l(()=>[t(I,{label:`ID: ${e.partition.id}`,flat:"",onClick:n[0]||(n[0]=m=>r(K)(e.partition.id,r(f))),"icon-right":"content_copy"},null,8,["label"])]),_:1})]),_:1})]),_:1}),r(b)?(c(),M(N,{key:0},[t(T,null,{default:l(()=>[t(V),t(V,{side:""},{default:l(()=>[t(I,{icon:"edit",dense:"",round:"",flat:"",onClick:n[1]||(n[1]=m=>s("onEdit",e.partition))},{default:l(()=>[t(J,null,{default:l(()=>n[5]||(n[5]=[P("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")])),_:1})]),_:1})]),_:1}),t(V,{side:""},{default:l(()=>[t(z,{"throw-confirm":"",danger:"",flat:"",onOnOk:n[2]||(n[2]=m=>C(e.partition.id)),tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C"})]),_:1}),t(V,{side:""},{default:l(()=>[t(H,{disable:e.idx<1,loading:a.value,onOnClick:n[3]||(n[3]=m=>v("up",e.partition.id)),direction:"up"},null,8,["disable","loading"])]),_:1}),t(V,{side:""},{default:l(()=>[t(H,{disable:e.idx>=e.length-1,loading:a.value,onOnClick:n[4]||(n[4]=m=>v("down",e.partition.id)),direction:"down"},null,8,["disable","loading"])]),_:1})]),_:1}),t(h)],64)):W("",!0)],64))}}),pt=j({__name:"PartitionList",props:{workId:{}},setup($){const Q=F(),f=w("editMode");g(!1);const s=$,a=g([]),b=g({});B("selectedPartition",b);const o=g(!1);B("isOpenPartitionDialog",o);function C(){return{id:void 0,num:a.value.length+1,title:"",workId:s.workId}}function v(){b.value=C(),o.value=!0}function e(m){b.value=m,o.value=!0}async function n(){const m=await q.getList(Q,s.workId);m.length&&(a.value=[],a.value=m)}return B("loadPartitions",n),G(()=>{n()}),(m,y)=>(c(),M(N,null,[t(R,null,{default:l(()=>[t(S,null,{default:l(()=>[y[1]||(y[1]=P("\u0427\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F ")),r(f)?(c(),O(I,{key:0,icon:"add",round:"",onClick:v},{default:l(()=>[t(J,null,{default:l(()=>y[0]||(y[0]=[P("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C")])),_:1})]),_:1})):W("",!0)]),_:1}),t(S,null,{default:l(()=>[t(st,null,{default:l(()=>[(c(!0),M(N,null,tt(a.value,(_,p)=>(c(),O(mt,{key:_.id,partition:_,onOnEdit:e,onOnDel:n,onOnSort:n,idx:p,length:a.value.length},null,8,["partition","idx","length"]))),128))]),_:1})]),_:1})]),_:1}),t(ft)],64))}}),vt={class:"centralCol"},Ft={__name:"WorkPage",setup($){const Q=String("https://sakh-orch.ru/stapi/"),f=F(),s=lt(),a=w("editMode"),b=g(!1),o=g({});g(null);const C=w("selectedAuthorId"),v=w("selectedAuthor"),e=g(!1);async function n(){o.value=await x.get(f,s.params.id),await m()}async function m(){v.value=await rt.get(f,o.value.authorId),console.log(v.value)}function y(){b.value=!0,x.update(f,o.value),b.value=!1}function _(){at.post(Q+"epoint/lib/work.php",{params:{method:"del",workId:s.params.id}}).then(p=>{var u,i,d;if(!((u=p==null?void 0:p.data)!=null&&u.result))throw new Error;f.notify(nt((d=(i=p==null?void 0:p.data)==null?void 0:i.result)!=null?d:null))}).catch(p=>{f.notify(ut(p))})}return G(()=>{n()}),(p,u)=>(c(),O(ot,{"page-title":o.value.titleRu},{ToolPanel:l(()=>{var i,d,k;return[t(dt,{id:r(C),iofEn:(i=r(v))==null?void 0:i.iofEn,iconUrl:(d=r(v))==null?void 0:d.iconUrl,fioRu:(k=r(v))==null?void 0:k.fioRu},null,8,["id","iofEn","iconUrl","fioRu"])]}),PageContent:l(()=>[U("div",vt,[u[6]||(u[6]=U("br",null,null,-1)),t(R,null,{default:l(()=>[t(S,null,{default:l(()=>[t(T,null,{default:l(()=>[t(I,{label:`ID: ${o.value.id}`,flat:"",onClick:u[0]||(u[0]=i=>r(K)(o.value.id,r(f))),"icon-right":"content_copy"},null,8,["label"])]),_:1}),t(D,{modelValue:o.value.titleRu,"onUpdate:modelValue":u[1]||(u[1]=i=>o.value.titleRu=i),readonly:!r(a),label:"\u041B\u043E\u043A\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue","readonly"]),t(D,{modelValue:o.value.titleEn,"onUpdate:modelValue":u[2]||(u[2]=i=>o.value.titleEn=i),readonly:!r(a),label:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue","readonly"]),t(D,{modelValue:o.value.opus,"onUpdate:modelValue":u[3]||(u[3]=i=>o.value.opus=i),label:"opus",readonly:!r(a),prefix:"Op."},null,8,["modelValue","readonly"])]),_:1}),r(a)?(c(),O(L,{key:0,align:"right"},{default:l(()=>[t(I,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",color:"green","icon-right":"save",flat:"",onClick:y}),t(z,{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435","throw-confirm":"",danger:"",flat:"",onOnOk:_,tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435"})]),_:1})):W("",!0)]),_:1}),u[7]||(u[7]=U("br",null,null,-1)),t(et,{label:"\u0420\u0430\u0437\u0434\u0435\u043B\u044B",modelValue:e.value,"onUpdate:modelValue":u[4]||(u[4]=i=>e.value=i)},{default:l(()=>[e.value?(c(),O(pt,{key:0,workId:o.value.id},null,8,["workId"])):W("",!0)]),_:1},8,["modelValue"]),u[8]||(u[8]=U("br",null,null,-1)),t(R,null,{default:l(()=>[t(S,null,{default:l(()=>u[5]||(u[5]=[P("\u0418\u0437\u0434\u0430\u043D\u0438\u044F")])),_:1}),t(S)]),_:1})])]),_:1},8,["page-title"]))}};export{Ft as default};
