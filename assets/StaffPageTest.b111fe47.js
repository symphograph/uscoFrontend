import{Q as L}from"./QTooltip.4f8868a4.js";import{i as q,r as l,I as r,o as rt,m as u,C as m,f as a,p as o,u as v,F as P,n as f,q as g,z as _,l as c,ax as Q,D as F,t as C,B as it,Q as nt,A as G,bm as ut}from"./index.1ed4f0d9.js";import{Q as A}from"./QItemLabel.91ec210f.js";import{b as O,Q as h,a as W}from"./QImg.d3ea3630.js";import{d as dt}from"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.844c9627.js";import{Q as ft}from"./QList.94cd8ab2.js";import{u as ct,j as K,g as pt,a as M,i as mt}from"./myFuncts.57fb681f.js";import{u as vt}from"./use-meta.f76d898d.js";import{a as $}from"./axios.58dd5c85.js";import{_ as gt,a as _t,b as ht,c as yt,d as Dt}from"./AddPlayerDialog.64f3e571.js";import{m as x}from"./myAuth.e8729030.js";import{_ as kt}from"./plugin-vue_export-helper.21dcd24c.js";import{P as Pt}from"./PageShell.becf8c19.js";import"./position-engine.a05a0349.js";import"./selection.d99639c5.js";import"./touch.9135741d.js";import"./style.7dcbbeeb.js";import"./format.de7e9769.js";import"./use-file.cb0ee2c1.js";import"./get-emits-object.a3f16783.js";/* empty css               */import"./BtnDelete.3fcc8c4a.js";import"./QPopupProxy.8d2c5a5d.js";import"./use-render-cache.3aae9b27.js";import"./QMenu.56bfa58f.js";import"./ClosePopup.18e82721.js";import"./myAxios.7a7c879e.js";import"./QScrollArea.08a568a1.js";import"./QLinearProgress.83dd9361.js";/* empty css                                                    */const Qt={class:"centralCol"},Ct={class:"gridArea"},St={key:0,class:"group"},bt={class:"cardTitle"},wt={__name:"StaffPageTest",setup(It){const S=ct(),y=String("https://sakh-orch.ru/stapi/"),H=q("editMode"),i=l(!1);r("staffEditMode",i);const p=l(!1);r("progress",p);const d=l([]);r("groups",d);const J=l(""),b=l(K(new Date).format("YYYY-MM-DD"));r("condDate",b);const N=l(!1);r("showUploader",N),r("pwUrl",J);const R=x.self.persId(),U=l(0);r("selectedPersId",U);const Y=l({});r("selectedPers",Y);const B=l(null);r("selectedGroup",B);const D=l([]);r("actionDates",D);const X=q("stopScrollWatch"),T=l([{id:1,name:"\u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0434\u0438\u0440\u0438\u0436\u0435\u0440\u0430"},{id:2,name:"\u041A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"},{id:3,name:"\u041A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"},{id:4,name:"\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440\u0430"},{id:5,name:"\u0420\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440"}]);r("statusNames",T);const E=l(!1);r("showStatusDialog",E);const V=l(!1);r("showAddPlayerDialog",V);const Z=l("\u0421\u043E\u0441\u0442\u0430\u0432 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"),j=pt(Z.value);vt(j);function w(e=!1){return p.value=!0,D.value=[],console.log("start loadActionDates"),$.post(y+"epoint/staff.php",{params:{method:"actionDates",force:e}}).then(t=>{var s,n;D.value=(n=(s=t==null?void 0:t.data)==null?void 0:s.data)!=null?n:[],console.log("end loadActionDates")}).catch(t=>{throw D.value=[],S.notify(M(t)),t}).finally(()=>{p.value=!1})}function I(){console.log("start loadData"),p.value=!0,$.post(y+"epoint/staff.php",{params:{method:"get",date:b.value}}).then(e=>{var t,s;X(),d.value=[],d.value=Object.values((s=(t=e==null?void 0:e.data)==null?void 0:t.data)!=null?s:[])}).catch(e=>{d.value=[],S.notify(M(e))}).finally(()=>{p.value=!1})}r("loadData",I);function z(){$.post(y+"epoint/staff.php",{params:{method:"update",groups:d.value,date:b.value}}).then(e=>{w()}).catch(e=>{S.notify(M(e))})}function tt(e){!i.value&&R!==e||(U.value=e,N.value=!0)}function at(e){!i.value||(console.log(e),Y.value=e,E.value=!0)}function et(e){B.value=e,V.value=!0}function ot(e){return e?mt(y,e.md5,e.ext,50):"/img/avatars/init_ava.png"}return rt(()=>{w().then(()=>{I()}),console.log(K(new Date).format("YYYY-MM-DD"))}),(e,t)=>(u(),m(P,null,[a(Pt,{"page-title":v(j).title},{ToolPanel:o(()=>[v(x).self.isPermit([1,2])&&v(H)?(u(),f(_,{key:0,icon:"update",flat:"",stretch:"",onClick:t[0]||(t[0]=s=>w(!0))},{default:o(()=>[a(L,null,{default:o(()=>t[3]||(t[3]=[g("\u0416\u0435\u0441\u0442\u043A\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u0442\u044B")])),_:1})]),_:1})):c("",!0),v(x).self.isPermit([1,2,3])?(u(),f(_,{key:1,icon:"edit",flat:"",stretch:"",color:i.value?"red":"grey",onClick:t[1]||(t[1]=s=>i.value=!i.value)},{default:o(()=>[a(L,null,{default:o(()=>t[4]||(t[4]=[g("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0441\u0442\u0430\u0432")])),_:1})]),_:1},8,["color"])):c("",!0),a(yt)]),PageContent:o(()=>[Q("div",Qt,[Q("div",Ct,[(u(!0),m(P,null,F(d.value,s=>(u(),m(P,{key:s.groupId},[i.value||s.groupId!==200?(u(),m("div",St,[a(ft,null,{default:o(()=>[a(O,{dense:""},{default:o(()=>[a(h,{avatar:""},{default:o(()=>[a(A,null,{default:o(()=>[Q("span",bt,C(s.groupName),1)]),_:2},1024)]),_:2},1024),a(dt),i.value?(u(),f(h,{key:0,side:""},{default:o(()=>[a(_,{round:"",icon:"add",onClick:n=>et(s)},null,8,["onClick"])]),_:2},1024)):c("",!0)]),_:2},1024),a(it,{inset:""}),t[5]||(t[5]=Q("br",null,null,-1)),a(v(Dt),{list:s.Players,itemKey:"persId",disabled:!i.value,group:"people"},{item:o(({element:n})=>[a(O,{clickable:i.value},{default:o(()=>[a(h,{avatar:""},{default:o(()=>[a(nt,{size:"50px"},{default:o(()=>[a(W,{src:ot(n==null?void 0:n.avatar),alt:"img",onClick:G(k=>tt(n.persId),["stop","prevent"]),style:{height:"100%"}},{error:o(()=>[a(W,{style:{height:"100%"},src:"/img/avatars/init_ava.png",alt:"img"})]),_:2},1032,["src","onClick"])]),_:2},1024)]),_:2},1024),a(h,null,{default:o(()=>[a(A,null,{default:o(()=>[g(C(n.name)+" "+C(n.lastName),1)]),_:2},1024),(u(!0),m(P,null,F(n.statuses,(k,st)=>(u(),f(A,{key:`${st}_${k}`,caption:""},{default:o(()=>[g(C(T.value.find(lt=>lt.id===k).name),1)]),_:2},1024))),128))]),_:2},1024),i.value?(u(),f(h,{key:0,side:""},{default:o(()=>[a(_,{icon:"edit",stretch:"",size:"0.5em",flat:"",onClick:G(k=>at(n),["stop","prevent"])},null,8,["onClick"])]),_:2},1024)):c("",!0)]),_:2},1032,["clickable"])]),_:2},1032,["list","disabled"])]),_:2},1024)])):c("",!0)],64))),128))]),a(ut,{align:"right"},{default:o(()=>[i.value?(u(),f(_,{key:0,class:"goldBtn",onClick:z},{default:o(()=>t[6]||(t[6]=[g("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")])),_:1})):c("",!0)]),_:1})])]),_:1},8,["page-title"]),a(gt,{onUpdated:t[2]||(t[2]=s=>I())}),a(_t),a(ht,{onOnPlayersAdd:z})],64))}};var la=kt(wt,[["__scopeId","data-v-7aca5b4b"]]);export{la as default};
