import{i as p,m as _,n as v,q as a,f as r,bk as B,bl as I,t as g,u as y,v as V,b as N,H as R,r as s,p as m,A as P,l as U,ax as Q}from"./index.f5e978c0.js";import{Q as x}from"./QSelect.ed6de9a4.js";import{Q as $}from"./QTooltip.7abf715f.js";import{_ as q}from"./AnnounceList.99801164.js";import{u as E}from"./use-quasar.cdf0ea62.js";import{u as F}from"./use-meta.9e3420c8.js";import{a as O}from"./axios.b6bdbb44.js";import{g as W,a as j,n as z}from"./myFuncts.28762f14.js";import{Q as T}from"./QItemLabel.4c832645.js";import{b as H,Q as K}from"./QImg.628e9f39.js";import{P as G}from"./PageShell.bef0802e.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"./QMenu.95cba417.js";import"./position-engine.93af21d7.js";import"./selection.52642521.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./AnnounceCard.1165afce.js";import"./BtnDelete.921da25f.js";import"./entry.f6555cc6.js";import"./myAxios.e0606f23.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.990b59f1.js";import"./touch.9135741d.js";import"./QScrollArea.d29ff5ca.js";import"./QLinearProgress.92cabfad.js";/* empty css                                                    */const X={__name:"SelectSort",emits:["onSelect"],setup(A,{emit:d}){const n=p("sortType"),i=d,f=[{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",value:"dateDesc",caption:"\u041F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E \u0434\u0430\u0442\u044B"},{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0430\u0432\u043D\u0438\u0435",value:"dateAsc",caption:"\u041F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E \u0434\u0430\u0442\u044B"}];return(Y,l)=>(_(),v(x,{modelValue:V(n),"onUpdate:modelValue":[l[0]||(l[0]=e=>N(n)?n.value=e:null),l[1]||(l[1]=e=>i("onSelect"))],borderless:"","map-options":"","emit-value":"",options:f},{option:a(e=>[r(H,B(I(e.itemProps)),{default:a(()=>[r(K,null,{default:a(()=>[r(T,null,{default:a(()=>[g(y(e.opt.label),1)]),_:2},1024),r(T,{caption:""},{default:a(()=>[g(y(e.opt.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue"]))}};const Z={class:"centralCol"},tt={class:"gridArea"},C="\u0410\u043D\u043E\u043D\u0441\u044B",et={__name:"AnnounceListPage",setup(A){const d=W(C);F(d);const n=String("https://sakh-orch.ru/api/"),i=E(),f=R(),l=p("editModes").announce,e=s(!1);m("compactCard",e),p("progress");const h=s("dateDesc");m("sortType",h);const u=s(new Date().getFullYear());m("evYear",u);const k=s([]);m("announceList",k);const S=p("scrollWatch"),D=s();function L(){S.value=!1,e.value=!e.value,setTimeout(()=>{S.value=!0},500)}function M(){let t=[];for(let o=2018;o<=new Date().getFullYear();o++)t.push(o);return t.reverse()}function w(){O.post(n+"epoint/event/announce.php",{params:{method:"add"}}).then(t=>{var o,c,b;if(!((o=t==null?void 0:t.data)!=null&&o.result))throw new Error;i.notify(j((b=(c=t==null?void 0:t.data)==null?void 0:c.result)!=null?b:null)),f.push({path:"/announce/"+t.data.data.id})}).catch(t=>{i.notify(z(t))})}return(t,o)=>(_(),v(G,{pageTitle:C},{ToolPanel:a(()=>[V(l)?(_(),v(P,{key:0,label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",stretch:"",flat:"",onClick:w})):U("",!0),r(x,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=c=>u.value=c),options:M(),"emit-value":"",borderless:""},null,8,["modelValue","options"]),r(X,{onOnSelect:o[1]||(o[1]=()=>{D.value.setScrollPosition("vertical",0,300)})}),r(P,{icon:e.value?"unfold_less":"unfold_more",flat:"",stretch:"",onClick:L},{default:a(()=>[r($,null,{default:a(()=>[g(y(e.value?"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E":"\u041A\u0440\u0430\u0442\u043A\u043E"),1)]),_:1})]),_:1},8,["icon"])]),PageContent:a(()=>[Q("div",Z,[Q("div",tt,[r(q,{evYear:u.value,method:"listByYear",sort:h.value},null,8,["evYear","sort"])])])]),_:1}))}};var At=J(et,[["__scopeId","data-v-1753e738"]]);export{At as default};
