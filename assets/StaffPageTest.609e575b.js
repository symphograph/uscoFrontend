import{Q as j}from"./QTooltip.18f4f5f2.js";import{i as q,r as l,p as r,o as it,m as u,E as m,f as t,q as e,x as v,F as Q,n as c,t as _,B as g,l as p,ax as C,G as F,v as S,D as nt,Q as ut,C as O,bm as dt,az as ct,aA as pt}from"./index.39305a7a.js";import{Q as M}from"./QItemLabel.ecd18af5.js";import{u as ft,a as W,Q as h}from"./QItem.a2c55a7a.js";import{a as mt}from"./QExpansionItem.3abc2095.js";import{Q as K}from"./QImg.efc10700.js";import{Q as vt}from"./QList.6683fb49.js";import{h as H,g as _t,n as $,i as gt}from"./myFuncts.7acd62bc.js";import{u as ht}from"./use-meta.f3af6596.js";import{api as x}from"./axios.0c5f140b.js";import{_ as yt,a as Dt,b as kt,c as Pt,d as Qt}from"./AddPlayerDialog.693f30b4.js";import{m as N}from"./myAuth.f2132660.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.01d98d10.js";import{_ as St}from"./plugin-vue_export-helper.21dcd24c.js";import{P as Ct}from"./PageShell.ea444949.js";import"./position-engine.e318ef2f.js";import"./selection.45595293.js";import"./style.ac16e395.js";import"./format.3e32b8d9.js";import"./use-file.7b052f45.js";import"./get-emits-object.24798346.js";/* empty css               */import"./BtnDelete.3c5eda70.js";import"./QPopupProxy.600bfe69.js";import"./use-render-cache.1a7235d4.js";import"./QMenu.9bc1b259.js";import"./ClosePopup.cacfd8b2.js";import"./QToolbar.d238ffdb.js";import"./QScrollArea.3e90a179.js";import"./TouchPan.729efee6.js";import"./touch.3df10340.js";import"./QLinearProgress.a3feea4b.js";import"./MainFooter.e73dd7ca.js";import"./AnderHeader.0e716a73.js";/* empty css                                                    */const It=y=>(ct("data-v-41742f7b"),y=y(),pt(),y),wt={class:"centralCol"},bt={class:"gridArea"},At={key:0,class:"group"},Mt={class:"cardTitle"},$t=It(()=>C("br",null,null,-1)),xt={__name:"StaffPageTest",setup(y){const I=ft(),D=String("https://api.staff.sakh-orch.ru/"),J=q("editMode"),i=l(!1);r("staffEditMode",i);const f=l(!1);r("progress",f);const d=l([]);r("groups",d);const R=l(""),w=l(H(new Date).format("YYYY-MM-DD"));r("condDate",w);const U=l(!1);r("showUploader",U),r("pwUrl",R);const X=N.self.persId(),Y=l(0);r("selectedPersId",Y);const B=l({});r("selectedPers",B);const T=l(null);r("selectedGroup",T);const k=l([]);r("actionDates",k);const Z=q("stopScrollWatch"),E=l([{id:1,name:"\u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0434\u0438\u0440\u0438\u0436\u0435\u0440\u0430"},{id:2,name:"\u041A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"},{id:3,name:"\u041A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"},{id:4,name:"\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440\u0430"},{id:5,name:"\u0420\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440"}]);r("statusNames",E);const V=l(!1);r("showStatusDialog",V);const z=l(!1);r("showAddPlayerDialog",z);const tt=l("\u0421\u043E\u0441\u0442\u0430\u0432 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"),G=_t(tt.value);ht(G);function b(a=!1){return f.value=!0,k.value=[],console.log("start loadActionDates"),x.post(D+"api/staff.php",{params:{method:"actionDates",force:a}}).then(o=>{var s,n;k.value=(n=(s=o==null?void 0:o.data)==null?void 0:s.data)!=null?n:[],console.log("end loadActionDates")}).catch(o=>{throw k.value=[],I.notify($(o)),o}).finally(()=>{f.value=!1})}function A(){console.log("start loadData"),f.value=!0,x.post(D+"api/staff.php",{params:{method:"get",date:w.value}}).then(a=>{var o,s;Z(),d.value=[],d.value=Object.values((s=(o=a==null?void 0:a.data)==null?void 0:o.data)!=null?s:[])}).catch(a=>{d.value=[],I.notify($(a))}).finally(()=>{f.value=!1})}r("loadData",A);function L(){x.post(D+"/api/staff.php",{params:{method:"update",groups:d.value,date:w.value}}).then(a=>{b()}).catch(a=>{I.notify($(a))})}function at(a){!i.value&&X!==a||(Y.value=a,U.value=!0)}function et(a){!i.value||(console.log(a),B.value=a,V.value=!0)}function ot(a){T.value=a,z.value=!0}function st(a){return a?gt(D,a.md5,a.ext,50):"/img/avatars/init_ava.png"}return it(()=>{b().then(()=>{A()}),console.log(H(new Date).format("YYYY-MM-DD"))}),(a,o)=>(u(),m(Q,null,[t(Ct,{"page-title":v(G).title},{ToolPanel:e(()=>[v(N).self.isPermit([1,2])&&v(J)?(u(),c(g,{key:0,icon:"update",flat:"",stretch:"",onClick:o[0]||(o[0]=s=>b(!0))},{default:e(()=>[t(j,null,{default:e(()=>[_("\u0416\u0435\u0441\u0442\u043A\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u0442\u044B")]),_:1})]),_:1})):p("",!0),v(N).self.isPermit([1,2,3])?(u(),c(g,{key:1,icon:"edit",flat:"",stretch:"",color:i.value?"red":"grey",onClick:o[1]||(o[1]=s=>i.value=!i.value)},{default:e(()=>[t(j,null,{default:e(()=>[_("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0441\u0442\u0430\u0432")]),_:1})]),_:1},8,["color"])):p("",!0),t(Pt)]),PageContent:e(()=>[C("div",wt,[C("div",bt,[(u(!0),m(Q,null,F(d.value,s=>(u(),m(Q,{key:s.groupId},[i.value||s.groupId!==200?(u(),m("div",At,[t(vt,null,{default:e(()=>[t(W,{dense:""},{default:e(()=>[t(h,{avatar:""},{default:e(()=>[t(M,null,{default:e(()=>[C("span",Mt,S(s.groupName),1)]),_:2},1024)]),_:2},1024),t(mt),i.value?(u(),c(h,{key:0,side:""},{default:e(()=>[t(g,{round:"",icon:"add",onClick:n=>ot(s)},null,8,["onClick"])]),_:2},1024)):p("",!0)]),_:2},1024),t(nt,{inset:""}),$t,t(v(Qt),{list:s.Players,itemKey:"persId",disabled:!i.value,group:"people"},{item:e(({element:n})=>[t(W,{clickable:i.value},{default:e(()=>[t(h,{avatar:""},{default:e(()=>[t(ut,{size:"50px"},{default:e(()=>[t(K,{src:st(n==null?void 0:n.avatar),alt:"img",onClick:O(P=>at(n.persId),["stop","prevent"]),style:{height:"100%"}},{error:e(()=>[t(K,{style:{height:"100%"},src:"/img/avatars/init_ava.png",alt:"img"})]),_:2},1032,["src","onClick"])]),_:2},1024)]),_:2},1024),t(h,null,{default:e(()=>[t(M,null,{default:e(()=>[_(S(n.name)+" "+S(n.lastName),1)]),_:2},1024),(u(!0),m(Q,null,F(n.statuses,(P,lt)=>(u(),c(M,{key:`${lt}_${P}`,caption:""},{default:e(()=>[_(S(E.value.find(rt=>rt.id===P).name),1)]),_:2},1024))),128))]),_:2},1024),i.value?(u(),c(h,{key:0,side:""},{default:e(()=>[t(g,{icon:"edit",stretch:"",size:"0.5em",flat:"",onClick:O(P=>et(n),["stop","prevent"])},null,8,["onClick"])]),_:2},1024)):p("",!0)]),_:2},1032,["clickable"])]),_:2},1032,["list","disabled"])]),_:2},1024)])):p("",!0)],64))),128))]),t(dt,{align:"right"},{default:e(()=>[i.value?(u(),c(g,{key:0,class:"goldBtn",onClick:L},{default:e(()=>[_("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")]),_:1})):p("",!0)]),_:1})])]),_:1},8,["page-title"]),t(yt,{onUpdated:o[2]||(o[2]=s=>A())}),t(Dt),t(kt,{onOnPlayersAdd:L})],64))}};var ma=St(xt,[["__scopeId","data-v-41742f7b"]]);export{ma as default};
