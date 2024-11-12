import{i as Q,r as c,m as s,n as v,p as u,f as e,A as ne,bm as G,bi as A,u as n,z as S,v as q,b as ae,E as ie,d as T,I as R,C as L,F as x,B as re,l as w,q as C,t as U,k as j,x as B,D as ee,H as se,G as de,c as fe,ax as W,y as me,bh as pe}from"./index.67387e42.js";import{b as N,Q as D}from"./QImg.507e5154.js";import{Q as O}from"./QItemLabel.6b8410e5.js";import{Q as J}from"./QExpansionItem.4ef05cad.js";import{P as ve}from"./PageShell.e6bc1a82.js";import{u as H,h as ue,e as ce}from"./myFuncts.7cbbd23e.js";import{_ as le}from"./BtnDelete.203ed198.js";import{A as ge}from"./AuthorItem.28cd6c48.js";import{P as z,V as ke,W as X,A as V}from"./lib.866e053e.js";import{Q as _e}from"./QList.6fe5ee29.js";import{Q as te}from"./QTooltip.123a896d.js";import{Q as ye}from"./QForm.3c16c09b.js";/* empty css               */import{_ as h}from"./BtnMoveSort.91848862.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as be}from"./QSelect.6b59e609.js";import{V as Ve}from"./VKVideoItem.b1f2366e.js";import"./QSlideTransition.f2bb147d.js";import"./touch.9135741d.js";import"./selection.84b1ecbb.js";import"./MainFooter.324b29be.js";import"./format.de7e9769.js";import"./QLinearProgress.c8d436f3.js";import"./myAxios.15458097.js";import"./axios.26fc2744.js";import"./position-engine.d893493b.js";import"./QMenu.33ef42f7.js";import"./use-virtual-scroll.a2eb84da.js";import"./rtl.276c3f1b.js";import"./announce.d9cf06ca.js";import"./img.f684d0bd.js";import"./SketchImg.d7a82aa6.js";const we={__name:"PartitionDialog",emits:["onSave"],setup(P,{emit:d}){const _=H(),r=Q("isOpenPartitionDialog"),o=Q("selectedPartition"),g=Q("loadPartitions"),f=c(!1);function l(){r.value=!1}async function y(){f.value=!0,await z.save(_,o.value)&&(await g(),l()),f.value=!1}function a(){f.value=!1}const i=[$=>!!$||"\u041F\u0443\u0441\u0442\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435!"],k=[$=>$>0&$<1e3||"\u2116?"],E=c(),F=c();function M(){!K()||y()}function K(){return E.value.validate()&&F.value.validate()}return($,b)=>(s(),v(ie,{modelValue:n(r),"onUpdate:modelValue":b[4]||(b[4]=I=>ae(r)?r.value=I:null),onBeforeHide:a},{default:u(()=>[e(q,{bordered:"",class:"dialogArea"},{default:u(()=>[e(ye,{onSubmit:ne(M,["stop","prevent"])},{default:u(()=>[e(G,null,{default:u(()=>[e(A,{type:"number",rules:k,ref_key:"refNum",ref:F,prefix:"\u2116",modelValue:n(o).num,"onUpdate:modelValue":b[0]||(b[0]=I=>n(o).num=I),style:{width:"5em"}},null,8,["modelValue"]),e(A,{modelValue:n(o).title,"onUpdate:modelValue":b[1]||(b[1]=I=>n(o).title=I),filled:"",label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0447\u0430\u0441\u0442\u0438",rules:i,style:{width:"100%"},ref_key:"refTitle",ref:E},null,8,["modelValue"]),e(A,{modelValue:n(o).caption,"onUpdate:modelValue":b[2]||(b[2]=I=>n(o).caption=I),filled:"",label:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(G,{align:"right"},{default:u(()=>[e(S,{label:"\u041E\u0442\u043C\u0435\u043D\u0430",flat:"",onClick:b[3]||(b[3]=I=>r.value=!1)}),e(S,{color:"green",type:"submit",label:"\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",flat:"",loading:f.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},De=T({__name:"PartitionItem",props:{partition:{},idx:{},length:{}},emits:["onDel","onSort","onEdit"],setup(P,{emit:d}){const _=H(),r=d,o=c(!1),g=Q("editMode"),f=Q("isOpenPartitionDialog");R("isOpenPartitionDialog",f);async function l(a){await z.del(_,a)&&r("onDel")}async function y(a,i){o.value=!0,await z.moveSort(_,a,i)&&r("onSort"),o.value=!1}return(a,i)=>(s(),L(x,null,[e(N,null,{default:u(()=>[e(D,{avatar:""},{default:u(()=>[e(O,null,{default:u(()=>[C(U(a.partition.sortVal),1)]),_:1})]),_:1}),e(D,{avatar:""},{default:u(()=>[e(O,null,{default:u(()=>[C("\u2116"+U(a.partition.num),1)]),_:1})]),_:1}),e(D,null,{default:u(()=>[e(O,null,{default:u(()=>[C(U(a.partition.title),1)]),_:1}),e(O,{caption:""},{default:u(()=>[C(U(a.partition.caption),1)]),_:1})]),_:1}),e(D,{side:""},{default:u(()=>[e(O,null,{default:u(()=>[e(S,{label:`ID: ${a.partition.id}`,flat:"",onClick:i[0]||(i[0]=k=>n(ue)(a.partition.id,n(_))),"icon-right":"content_copy"},null,8,["label"])]),_:1})]),_:1})]),_:1}),n(g)?(s(),L(x,{key:0},[e(N,null,{default:u(()=>[e(D),e(D,{side:""},{default:u(()=>[e(S,{icon:"edit",dense:"",round:"",flat:"",onClick:i[1]||(i[1]=k=>r("onEdit",a.partition))},{default:u(()=>[e(te,null,{default:u(()=>i[5]||(i[5]=[C("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")])),_:1})]),_:1})]),_:1}),e(D,{side:""},{default:u(()=>[e(le,{"throw-confirm":"",danger:"",flat:"",onOnOk:i[2]||(i[2]=k=>l(a.partition.id)),tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C"})]),_:1}),e(D,{side:""},{default:u(()=>[e(h,{disable:a.idx<1,loading:o.value,onOnClick:i[3]||(i[3]=k=>y("up",a.partition.id)),direction:"up"},null,8,["disable","loading"])]),_:1}),e(D,{side:""},{default:u(()=>[e(h,{disable:a.idx>=a.length-1,loading:o.value,onOnClick:i[4]||(i[4]=k=>y("down",a.partition.id)),direction:"down"},null,8,["disable","loading"])]),_:1})]),_:1}),e(re)],64)):w("",!0)],64))}}),Ce=T({__name:"PartitionList",props:{workId:{}},setup(P){const d=H(),_=Q("editMode");c(!1);const r=P,o=c([]),g=c({});R("selectedPartition",g);const f=c(!1);R("isOpenPartitionDialog",f);function l(){return{id:void 0,num:o.value.length+1,title:"",workId:r.workId}}function y(){g.value=l(),f.value=!0}function a(k){g.value=k,f.value=!0}async function i(){const k=await z.getList(d,r.workId);k.length&&(o.value=[],o.value=k)}return R("loadPartitions",i),j(()=>{i()}),(k,E)=>(s(),L(x,null,[e(q,null,{default:u(()=>[e(B,null,{default:u(()=>E[0]||(E[0]=[C("\u0427\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F ")])),_:1}),e(B,null,{default:u(()=>[e(_e,null,{default:u(()=>[(s(!0),L(x,null,ee(o.value,(F,M)=>(s(),v(De,{key:F.id,partition:F,onOnEdit:a,onOnDel:i,onOnSort:i,idx:M,length:o.value.length},null,8,["partition","idx","length"]))),128))]),_:1})]),_:1}),e(G,{align:"right"},{default:u(()=>[n(_)?(s(),v(S,{key:0,icon:"add",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C",flat:"",onClick:y},{default:u(()=>[e(te,null,{default:u(()=>E[1]||(E[1]=[C("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u044C")])),_:1})]),_:1})):w("",!0)]),_:1})]),_:1}),e(we)],64))}}),Ie={};function Pe(P,d){return s(),v(q,null,{default:u(()=>[e(B,null,{default:u(()=>d[0]||(d[0]=[C("\u0418\u0437\u0434\u0430\u043D\u0438\u044F")])),_:1}),e(B)]),_:1})}var Ee=oe(Ie,[["render",Pe]]);const Oe=T({__name:"GenreSelect",props:{genreId:{},readonly:{type:Boolean}},emits:["onSelect"],setup(P,{emit:d}){const _=Q("genres"),r=c(),o=P,g=d;return j(()=>{r.value=_.value.find(f=>f.id===o.genreId)}),(f,l)=>(s(),v(be,{modelValue:r.value,"onUpdate:modelValue":[l[0]||(l[0]=y=>r.value=y),l[1]||(l[1]=y=>g("onSelect",r.value))],options:n(_),readonly:f.readonly,label:"\u0416\u0430\u043D\u0440","map-options":"","option-value":"id","option-label":"name",clearable:""},null,8,["modelValue","options","readonly"]))}});const Qe={key:0,class:"vidarea"},$e=T({__name:"VideoList",props:{workId:{}},setup(P){const d=c([]),_=H(),r=c(!1);R("editMode",r);const o=P;return j(async()=>{d.value=await ke.getListByWork(_,o.workId)}),(g,f)=>(s(),v(q,null,{default:u(()=>[e(B,null,{default:u(()=>[d.value.length?(s(),L("div",Qe,[(s(!0),L(x,null,ee(d.value,l=>(s(),v(Ve,{key:`v-list${l.id}`,video:l},null,8,["video"]))),128))])):w("",!0)]),_:1})]),_:1}))}});var Se=oe($e,[["__scopeId","data-v-03d8f378"]]);const Be={class:"centralCol"},fu=T({__name:"WorkPage",setup(P){const d=H(),_=se(),r=de(),o=Q("editMode"),g=c(!1),f=Q("progress"),l=c(),y=c(!1),a=c(!1),i=c(!1),k=fe(()=>l.value.imslpId?"https://imslp.org/wiki/"+l.value.imslpWork.idString:"");async function E(m){l.value=await X.get(d,m)}async function F(){V.selected.value=await V.get(d,l.value.authorId)}function M(){g.value=!0,X.update(d,l.value),g.value=!1}function K(m){var t;l.value.genreId=(t=m==null?void 0:m.id)!=null?t:null}async function $(m){g.value=!0,await X.del(d,m)&&r.push({path:"/lib/works/"+V.selected.value.id}),g.value=!1}function b(){const m=["\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435","\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F","\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0439"],t=ce(V.selected.value.cntWorks,m);return`${V.selected.value.cntWorks} ${t}`}function I(m){m=m.replace(/&amp;/g,"&");const t=document.createElement("textarea");return t.innerHTML=m,t.value}return j(async()=>{const m=Number(_.params.id);if(!m){r.push({path:"/lib/author/"});return}f.value=!0,await E(m),await F(),f.value=!1}),(m,t)=>l.value&&n(V).selected.value?(s(),v(ve,{key:0,"page-title":"\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435"},{ToolPanel:u(()=>{var p,Y,Z;return[n(V).selected.value?(s(),v(ge,{key:0,id:n(V).selected.value.id,iofEn:(p=n(V).selected.value)==null?void 0:p.iofEn,iconUrl:(Y=n(V).selected.value)==null?void 0:Y.iconUrl,fioRu:(Z=n(V).selected.value)==null?void 0:Z.fioRu},null,8,["id","iofEn","iconUrl","fioRu"])):w("",!0)]}),PageContent:u(()=>[W("div",Be,[t[10]||(t[10]=W("br",null,null,-1)),l.value.id?(s(),v(q,{key:0},{default:u(()=>[e(B,null,{default:u(()=>[e(N,null,{default:u(()=>[e(S,{label:`ID: ${l.value.id}`,flat:"",onClick:t[0]||(t[0]=p=>n(ue)(l.value.id,n(d))),"icon-right":"content_copy"},null,8,["label"])]),_:1}),e(A,{modelValue:l.value.titleRu,"onUpdate:modelValue":t[1]||(t[1]=p=>l.value.titleRu=p),readonly:!n(o),label:"\u041B\u043E\u043A\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue","readonly"]),e(A,{modelValue:l.value.titleEn,"onUpdate:modelValue":t[2]||(t[2]=p=>l.value.titleEn=p),readonly:!n(o),label:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue","readonly"]),l.value.titleCO?(s(),v(N,{key:0},{default:u(()=>[e(D,null,{default:u(()=>[e(O,{caption:""},{default:u(()=>t[8]||(t[8]=[C("\u041D\u0430\u0437\u0432\u0435\u043D\u0438\u0435 \u043D\u0430 ClassicOnline")])),_:1}),e(O,null,{default:u(()=>[C(U(I(l.value.titleCO)),1)]),_:1})]),_:1})]),_:1})):w("",!0),e(A,{modelValue:l.value.opus,"onUpdate:modelValue":t[3]||(t[3]=p=>l.value.opus=p),label:"opus",readonly:!n(o),prefix:"Op."},null,8,["modelValue","readonly"]),e(Oe,{onOnSelect:K,readonly:!n(o),genreId:l.value.genreId},null,8,["readonly","genreId"])]),_:1}),n(o)?(s(),v(G,{key:0,align:"right"},{default:u(()=>[e(le,{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435","throw-confirm":"",danger:"",flat:"",onOnOk:t[4]||(t[4]=p=>$(l.value.id)),tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435"}),e(S,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",color:"green","icon-right":"save",flat:"",onClick:M})]),_:1})):w("",!0),e(B,null,{default:u(()=>[e(N,{clickable:"",to:`/lib/works/${n(V).selected.value.id}`},{default:u(()=>[e(D,null,{default:u(()=>[e(O,null,{default:u(()=>t[9]||(t[9]=[C(" \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043F\u0438\u0441\u043A\u0443 ")])),_:1}),e(O,{caption:""},{default:u(()=>[C(U(b()),1)]),_:1})]),_:1}),e(D,{side:""},{default:u(()=>[e(me,{name:"open_in_new"})]),_:1})]),_:1},8,["to"])]),_:1}),e(B,null,{default:u(()=>[k.value?(s(),v(S,{key:0,icon:"img:https://upload.wikimedia.org/wikipedia/commons/9/98/IMSLP_logo_%282016%29.svg",size:"6em",class:pe(n(d).dark.isActive?"invert":void 0),href:k.value,target:"_blank"},null,8,["class","href"])):w("",!0)]),_:1})]),_:1})):w("",!0),t[11]||(t[11]=W("br",null,null,-1)),e(J,{label:"\u0420\u0430\u0437\u0434\u0435\u043B\u044B",modelValue:y.value,"onUpdate:modelValue":t[5]||(t[5]=p=>y.value=p)},{default:u(()=>[y.value?(s(),v(Ce,{key:0,workId:l.value.id},null,8,["workId"])):w("",!0)]),_:1},8,["modelValue"]),t[12]||(t[12]=W("br",null,null,-1)),e(J,{label:"\u0412\u0438\u0434\u0435\u043E",modelValue:i.value,"onUpdate:modelValue":t[6]||(t[6]=p=>i.value=p)},{default:u(()=>[i.value?(s(),v(Se,{key:0,workId:l.value.id},null,8,["workId"])):w("",!0)]),_:1},8,["modelValue"]),t[13]||(t[13]=W("br",null,null,-1)),e(J,{label:"\u0418\u0437\u0434\u0430\u043D\u0438\u044F",modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=p=>a.value=p)},{default:u(()=>[a.value?(s(),v(Ee,{key:0,workId:l.value.id},null,8,["workId"])):w("",!0)]),_:1},8,["modelValue"])])]),_:1})):w("",!0)}});export{fu as default};