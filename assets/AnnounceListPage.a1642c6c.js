import{i as c,m as _,n as v,q as r,f as l,b8 as w,b9 as I,t as g,v as y,x as V,b as M,u as N,I as R,r as s,p,B as P,l as E,ax as Q}from"./index.71bc55bd.js";import{Q as x}from"./QSelect.2923ce40.js";import{Q as U}from"./QTooltip.e861268c.js";import{_ as $}from"./AnnounceList.ae32b404.js";import{u as q}from"./use-quasar.dd0d0041.js";import{u as F}from"./use-meta.0f1f008f.js";import{a as O}from"./axios.a7f12f6b.js";import{g as W,a as j,n as z}from"./myFuncts.c043710e.js";import{Q as T}from"./QItemLabel.622a6884.js";import{a as K,Q as G}from"./QItem.adc0c735.js";import{P as H}from"./PageShell.aafd3cf4.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"./QMenu.8d45d7c8.js";import"./position-engine.da3a8d11.js";import"./selection.60de79e9.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./AnnounceCard.f3e47de5.js";import"./QImg.0f12cfff.js";import"./BtnDelete.a20f6780.js";import"./TouchPan.8802ca0b.js";import"./touch.9135741d.js";import"./QToolbar.e0367470.js";import"./QExpansionItem.ed48e551.js";import"./QScrollArea.447bc3ca.js";import"./QLinearProgress.f42d9a72.js";import"./MainFooter.9d16b95b.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.e1d9f02c.js";import"./AnderHeader.b5fd0884.js";/* empty css                                                    */const X={__name:"SelectSort",emits:["onSelect"],setup(Y,{emit:d}){const n=c("sortType"),i=d,f=[{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",value:"dateDesc",caption:"\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E \u0434\u0430\u0442\u044B"},{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0430\u0432\u043D\u0438\u0435",value:"dateAsc",caption:"\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E \u0434\u0430\u0442\u044B"}];return(h,a)=>(_(),v(x,{modelValue:V(n),"onUpdate:modelValue":[a[0]||(a[0]=o=>M(n)?n.value=o:null),a[1]||(a[1]=o=>i("onSelect"))],borderless:"","map-options":"","emit-value":"",options:f},{option:r(o=>[l(K,w(I(o.itemProps)),{default:r(()=>[l(G,null,{default:r(()=>[l(T,null,{default:r(()=>[g(y(o.opt.label),1)]),_:2},1024),l(T,{caption:""},{default:r(()=>[g(y(o.opt.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]))}};const Z={class:"centralCol"},tt={class:"gridArea"},C="\u0410\u043D\u043E\u043D\u0441\u044B",et={__name:"AnnounceListPage",setup(Y){const d=W(C);F(d);const n=String("https://api.sakh-orch.ru/"),i=q();N();const f=R(),h=c("announceEditMode"),a=s(!1);p("compactCard",a),c("progress");const o=s("dateDesc");p("sortType",o);const u=s(new Date().getFullYear());p("evYear",u);const A=s([]);p("announceList",A);const S=c("scrollWatch"),k=s();function B(){S.value=!1,a.value=!a.value,setTimeout(()=>{S.value=!0},500)}function D(){let t=[];for(let e=2018;e<=new Date().getFullYear();e++)t.push(e);return t.reverse()}function L(){O.post(n+"api/event/announce.php",{params:{method:"add"}}).then(t=>{var e,m,b;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;i.notify(j((b=(m=t==null?void 0:t.data)==null?void 0:m.result)!=null?b:null)),f.push({path:"/announce/"+t.data.data.id})}).catch(t=>{i.notify(z(t))})}return(t,e)=>(_(),v(H,{pageTitle:C},{ToolPanel:r(()=>[V(h)?(_(),v(P,{key:0,label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",stretch:"",flat:"",onClick:L})):E("",!0),l(x,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=m=>u.value=m),options:D(),"emit-value":"",borderless:""},null,8,["modelValue","options"]),l(X,{onOnSelect:e[1]||(e[1]=()=>{k.value.setScrollPosition("vertical",0,300)})}),l(P,{icon:a.value?"unfold_less":"unfold_more",flat:"",stretch:"",onClick:B},{default:r(()=>[l(U,null,{default:r(()=>[g(y(a.value?"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E":"\u041A\u0440\u0430\u0442\u043A\u043E"),1)]),_:1})]),_:1},8,["icon"])]),PageContent:r(()=>[Q("div",Z,[Q("div",tt,[l($,{evYear:u.value,method:"listByYear",sort:o.value},null,8,["evYear","sort"])])])]),_:1}))}};var Dt=J(et,[["__scopeId","data-v-59b6e2fa"]]);export{Dt as default};
