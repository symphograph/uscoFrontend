import{Q as st}from"./QTooltip.4f8868a4.js";import{i as L,I as l,r,o as ot,m as n,C as m,f as t,p as e,u,F as k,n as f,q as D,z as P,l as v,ax as _,D as q,t as Q,B as lt,Q as rt,A as F,bm as it}from"./index.1ed4f0d9.js";import{Q as M}from"./QItemLabel.91ec210f.js";import{b as G,Q as g,a as O}from"./QImg.d3ea3630.js";import{d as nt}from"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.844c9627.js";import{Q as dt}from"./QList.94cd8ab2.js";import{u as ut,j as ct,g as pt,a as $}from"./myFuncts.57fb681f.js";import{u as ft}from"./use-meta.f76d898d.js";import{a as A}from"./axios.58dd5c85.js";import{_ as mt,a as vt,b as _t,c as gt,d as ht}from"./AddPlayerDialog.64f3e571.js";import{m as N}from"./myAuth.e8729030.js";import{P as yt}from"./PageShell.becf8c19.js";import{_ as kt}from"./plugin-vue_export-helper.21dcd24c.js";import"./position-engine.a05a0349.js";import"./selection.d99639c5.js";import"./touch.9135741d.js";import"./style.7dcbbeeb.js";import"./format.de7e9769.js";import"./use-file.cb0ee2c1.js";import"./get-emits-object.a3f16783.js";/* empty css               */import"./BtnDelete.3fcc8c4a.js";import"./QPopupProxy.8d2c5a5d.js";import"./use-render-cache.3aae9b27.js";import"./QMenu.56bfa58f.js";import"./ClosePopup.18e82721.js";import"./myAxios.7a7c879e.js";import"./QScrollArea.08a568a1.js";import"./QLinearProgress.83dd9361.js";/* empty css                                                    */const Dt={class:"centralCol"},Pt={class:"gridArea"},Qt={key:0,class:"group"},Ct={class:"cardTitle"},St={class:"lastName"},It={__name:"StaffPage",setup(bt){const C=ut(),S=String("https://sakh-orch.ru/stapi/"),d=L("editModes").staff;l("editMode",d);const c=r(!1);l("progress",c);const p=r([]);l("groups",p);const W=r(""),I=r(ct(new Date).format("YYYY-MM-DD"));l("condDate",I);const x=r(!1);l("showUploader",x),l("pwUrl",W);const K=N.self.persId(),B=r(0);l("selectedPersId",B);const U=r({});l("selectedPers",U);const V=r(null);l("selectedGroup",V);const h=r([]);l("actionDates",h);const H=L("stopScrollWatch"),T=r([{id:1,name:"\u0410\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442 \u0434\u0438\u0440\u0438\u0436\u0435\u0440\u0430"},{id:2,name:"\u041A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"},{id:3,name:"\u041A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"},{id:4,name:"\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440\u0430"},{id:5,name:"\u0420\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440"}]);l("statusNames",T);const Y=r(!1);l("showStatusDialog",Y);const j=r(!1);l("showAddPlayerDialog",j);const J=r("\u0421\u043E\u0441\u0442\u0430\u0432 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"),z=pt(J.value);ft(z);function b(s=!1){return c.value=!0,h.value=[],A.post(S+"epoint/staff.php",{params:{method:"actionDates",force:s}}).then(a=>{var o,i;h.value=(i=(o=a==null?void 0:a.data)==null?void 0:o.data)!=null?i:[]}).catch(a=>{throw h.value=[],C.notify($(a)),a}).finally(()=>{c.value=!1})}function w(){console.log("start loadData"),c.value=!0,A.post(S+"epoint/staff.php",{params:{method:"get",date:I.value}}).then(s=>{var a,o;H(),p.value=[],p.value=Object.values((o=(a=s==null?void 0:s.data)==null?void 0:a.data)!=null?o:[])}).catch(s=>{p.value=[],C.notify($(s))}).finally(()=>{c.value=!1})}l("loadData",w);function E(){c.value=!0,A.post(S+"epoint/staff.php",{params:{method:"update",groups:p.value,date:I.value}}).then(s=>{b()}).catch(s=>{C.notify($(s))}).finally(()=>{c.value=!1})}function R(s){!N.self.isPermit([1,2])||!d.value&&K!==s||(B.value=s,x.value=!0)}function X(s){!d.value||(U.value=s,Y.value=!0)}function Z(s){V.value=s,j.value=!0}function tt(s){return"/img/avatars/init_ava.png"}return ot(()=>{b().then(()=>{w()})}),(s,a)=>(n(),m(k,null,[t(yt,{"page-title":u(z).title},{ToolPanel:e(()=>[u(N).self.isPermit([1,2])&&u(d)?(n(),f(P,{key:0,icon:"update",flat:"",stretch:"",onClick:a[0]||(a[0]=o=>b(!0))},{default:e(()=>[t(st,null,{default:e(()=>a[2]||(a[2]=[D("\u0416\u0435\u0441\u0442\u043A\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u0442\u044B")])),_:1})]),_:1})):v("",!0),t(gt)]),PageContent:e(()=>[_("div",Dt,[_("div",Pt,[(n(!0),m(k,null,q(p.value,o=>(n(),m(k,{key:o.groupId},[u(d)||o.Players.length&&o.groupId!==200?(n(),m("div",Qt,[t(dt,null,{default:e(()=>[t(G,{dense:""},{default:e(()=>[t(g,{avatar:""},{default:e(()=>[t(M,null,{default:e(()=>[_("span",Ct,Q(o.groupName),1)]),_:2},1024)]),_:2},1024),t(nt),u(d)?(n(),f(g,{key:0,side:""},{default:e(()=>[t(P,{round:"",icon:"add",onClick:i=>Z(o)},null,8,["onClick"])]),_:2},1024)):v("",!0)]),_:2},1024),t(lt,{inset:""}),a[3]||(a[3]=_("br",null,null,-1)),t(u(ht),{list:o.Players,itemKey:"persId",disabled:!u(d),group:"people"},{item:e(({element:i})=>[t(G,{clickable:u(d)},{default:e(()=>[(n(),f(g,{key:0,avatar:""},{default:e(()=>[t(rt,{size:"50px"},{default:e(()=>[t(O,{src:tt(i==null?void 0:i.avatar),alt:"img",onClick:F(y=>R(i.persId),["stop","prevent"]),style:{height:"100%"}},{error:e(()=>[t(O,{style:{height:"100%"},src:"/img/avatars/init_ava.png",alt:"img"})]),_:2},1032,["src","onClick"])]),_:2},1024)]),_:2},1024)),t(g,null,{default:e(()=>[t(M,null,{default:e(()=>[D(Q(i.name)+" ",1),_("span",St,Q(i.lastName),1)]),_:2},1024),(n(!0),m(k,null,q(i.statuses,(y,at)=>(n(),f(M,{key:`${at}_${y}`,caption:""},{default:e(()=>[D(Q(T.value.find(et=>et.id===y).name),1)]),_:2},1024))),128))]),_:2},1024),u(d)?(n(),f(g,{key:1,side:"",onClick:F(y=>X(i),["stop","prevent"])},{default:e(()=>[t(P,{icon:"edit",stretch:"",size:"1em",flat:""})]),_:2},1032,["onClick"])):v("",!0)]),_:2},1032,["clickable"])]),_:2},1032,["list","disabled"])]),_:2},1024)])):v("",!0)],64))),128))]),t(it,{align:"right"},{default:e(()=>[u(d)?(n(),f(P,{key:0,class:"goldBtn",onClick:E,loading:c.value},{default:e(()=>a[4]||(a[4]=[D("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")])),_:1},8,["loading"])):v("",!0)]),_:1})])]),_:1},8,["page-title"]),t(mt,{onUpdated:a[1]||(a[1]=o=>w())}),t(vt),t(_t,{onOnPlayersAdd:E})],64))}};var la=kt(It,[["__scopeId","data-v-64c11b92"]]);export{la as default};
