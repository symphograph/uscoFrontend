import{Q as _e}from"./QLinearProgress.1af3bfde.js";import{i as q,r as _,q as r,t as v,F as M,bX as D,W as d,V as p,ay as f,f as e,H as t,l as P,I as s,v as C,aZ as G,ad as X,U as I,ae as Y,aa as K,a$ as pe,aY as ee,J as se,K as re,g as ke,Q as ve,bg as ge,bk as ce,u as he,p as O,c as ye,o as Te,ax as Z,a3 as oe}from"./index.02309961.js";import{api as U}from"./axios.5d836ad1.js";import{b as be,n as j}from"./myFuncts.c6611827.js";import{u as we}from"./use-meta.584d2918.js";import{u as ue}from"./use-quasar.00acd95b.js";import{Q as ie}from"./QTooltip.034d1644.js";import{a as Ce,m as V}from"./myAuth.f2132660.js";import{Q as xe}from"./QImg.9937fe90.js";import{a as x,Q as h}from"./QItem.ff5a2c80.js";import{Q as A}from"./QItemLabel.e490e797.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as Se}from"./QList.11a12b8c.js";import{g as Ie}from"./get-emits-object.24798346.js";import{_ as Ae}from"./TelegramForm.7958ed24.js";import{Q as Pe}from"./QForm.51e3445a.js";import"./position-engine.3c52504d.js";import"./use-ratio.eadae7df.js";const Qe={class:"cellArea"},$e=s("br",null,null,-1),De=s("br",null,null,-1),He=s("br",null,null,-1),Ne=s("br",null,null,-1),Re=s("br",null,null,-1),Le={__name:"HallUserCell",props:{cell:Object,ticket:Object},emits:["reserve","returnTicket"],setup(o,{emit:k}){const n=o,u=q("colors"),g=_(n.ticket);q("HallPlan");const y=k;_("Invite"),_(0);const T=Ce.userId();function b(){y("reserve",g.value.id)}function S(){y("returnTicket",g.value.id)}return(H,c)=>{var z,Q,N,R,L,B,E;return r(),v("div",Qe,[o.cell.exist?(r(),v(M,{key:0},[(z=o.ticket)!=null&&z.offline?(r(),v("div",{key:0,class:"offlineCell",style:D({borderColor:d(u)[((Q=n.ticket)==null?void 0:Q.priceType)||"Invite"][1],backgroundColor:d(u)[((N=n.ticket)==null?void 0:N.priceType)||"Invite"][1]})},null,4)):n.ticket.userId===d(T)?(r(),v("div",{key:1,class:"userCell",onClick:c[0]||(c[0]=J=>S()),style:D({borderColor:d(u)[((R=n.ticket)==null?void 0:R.priceType)||"Invite"][1]})},[p(f(n.ticket.seatNum)+" ",1),e(ie,{offset:[0,-120],"max-width":"20em",delay:300},{default:t(()=>[p(f("\u042D\u0442\u043E \u0412\u0430\u0448\u0435 \u043C\u0435\u0441\u0442\u043E")),$e,p(" "+f("\u0420\u044F\u0434: "+n.ticket.seatRow),1),De,p(" "+f("\u041C\u0435\u0441\u0442\u043E: "+n.ticket.seatNum),1),He,p(" "+f("\u0426\u0435\u043D\u0430: "+n.ticket.priceType),1)]),_:1})],4)):n.ticket.userId?(r(),v("div",{key:2,class:"offlineCell",style:D({borderColor:d(u)[((L=n.ticket)==null?void 0:L.priceType)||"Invite"][1],backgroundColor:d(u)[((B=n.ticket)==null?void 0:B.priceType)||"Invite"][1]})},null,4)):(r(),v("div",{key:3,class:"availableCell",style:D({borderColor:d(u)[((E=n.ticket)==null?void 0:E.priceType)||"Invite"][1]}),onClick:c[1]||(c[1]=J=>b())},[p(f(n.ticket.seatNum)+" ",1),e(ie,{offset:[0,-120],"max-width":"20em",delay:300},{default:t(()=>[p(f("\u0420\u044F\u0434: "+n.ticket.seatRow),1),Ne,p(" "+f("\u041C\u0435\u0441\u0442\u043E: "+n.ticket.seatNum),1),Re,p(" "+f("\u0426\u0435\u043D\u0430: "+n.ticket.priceType),1)]),_:1})],4))],64)):P("",!0)])}}};const Be=o=>(se("data-v-6bf057de"),o=o(),re(),o),Ee={class:"mapLink"},Oe={style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"space-between"}},Ue=Be(()=>s("div",null,[s("div",{style:{border:"1px solid white",width:"100px",height:"100px"}})],-1)),je={__name:"TicketCard",props:{ticket:{},price:Number},emits:["reserve","returnTicket"],setup(o,{emit:k}){const n=String("https://api.sakh-orch.ru/");ue();const u=q("Announce"),g=k,y=_("");function T(b){y.value=" returning",setTimeout(()=>{g("returnTicket",b)},600)}return(b,S)=>(r(),C(ee,{class:pe("ticketCard"+y.value)},{default:t(()=>[e(G,{class:"progName"},{default:t(()=>[p(f(d(u).progName),1)]),_:1}),e(x,{dense:""},{default:t(()=>[e(h,{avatar:""},{default:t(()=>[e(xe,{width:"10em",ratio:16/9,src:d(n)+d(u).Sketch.verLink},null,8,["src"])]),_:1}),e(h,{avatar:""},{default:t(()=>[X((r(),C(x,{dense:""},{default:t(()=>[e(h,{avatar:""},{default:t(()=>[e(I,{name:"schedule",color:"amber"})]),_:1}),e(h,null,{default:t(()=>[e(A,{caption:""},{default:t(()=>[p(f(d(be)(d(u).eventTime)),1)]),_:1})]),_:1})]),_:1})),[[Y]]),e(x,{clickable:"",dense:"",href:d(u).Hall.map,target:"_blank"},{default:t(()=>[e(h,{avatar:""},{default:t(()=>[e(I,{color:"amber",name:"place"})]),_:1}),e(A,null,{default:t(()=>[s("span",Ee,f(d(u).Hall.name),1)]),_:1})]),_:1},8,["href"]),X((r(),C(x,{dense:""},{default:t(()=>[e(h,{avatar:""},{default:t(()=>[e(I,{name:"ion-person",color:"amber"})]),_:1}),e(h,null,{default:t(()=>[e(A,{lines:"1"},{default:t(()=>[p("\u0420\u044F\u0434: "+f(o.ticket.seatRow)+" | \u041C\u0435\u0441\u0442\u043E: "+f(o.ticket.seatNum),1)]),_:1})]),_:1})]),_:1})),[[Y]]),o.price?X((r(),C(x,{key:0,dense:""},{default:t(()=>[e(h,{avatar:""},{default:t(()=>[e(I,{name:"ion-wallet",color:"amber"})]),_:1}),e(h,null,{default:t(()=>[e(A,{lines:1},{default:t(()=>[p("\u0426\u0435\u043D\u0430: "+f(o.price),1)]),_:1})]),_:1})]),_:1})),[[Y]]):P("",!0)]),_:1}),e(h),e(h,{side:""},{default:t(()=>[s("div",Oe,[Ue,s("div",null,[e(K,{onClick:S[0]||(S[0]=H=>T(o.ticket.id)),flat:""},{default:t(()=>[e(I,{name:"delete",color:"red"})]),_:1})])])]),_:1})]),_:1})]),_:1},8,["class"]))}};var Ve=te(je,[["__scopeId","data-v-6bf057de"]]);function F(){const{emit:o,proxy:k}=ke(),n=_(null);function u(){n.value.show()}function g(){n.value.hide()}function y(b){o("ok",b),g()}function T(){o("hide")}return Object.assign(k,{show:u,hide:g}),{dialogRef:n,onDialogHide:T,onDialogOK:y,onDialogCancel:g}}const de=["ok","hide"];F.emits=de;F.emitsObject=Ie(de);const Me=["value"],qe=["value"],Fe=["value"],Ke={__name:"VkontakteForm",props:{AccessToken:String,SessionToken:String},setup(o){const k=String("sakh-orch.ru"),n=String("https://auth.symphograph.ru/"),u=_(null);return(g,y)=>o.AccessToken?(r(),C(Pe,{key:0,ref_key:"formVk",ref:u,action:d(n)+"auth/vk/login.php",method:"post"},{default:t(()=>[s("input",{type:"hidden",name:"AccessToken",value:o.AccessToken},null,8,Me),s("input",{type:"hidden",name:"SessionToken",value:o.SessionToken},null,8,qe),s("input",{type:"hidden",name:"from",value:d(k)},null,8,Fe),e(K,{type:"submit","no-caps":"",align:"between",outline:!1,padding:"none",style:{width:"100%"},flat:"",dense:"",square:""},{default:t(()=>[e(x,{dense:""},{default:t(()=>[e(h,{avatar:""},{default:t(()=>[e(ve,{style:{"background-color":"#e9d26c"}},{default:t(()=>[e(I,{name:"ion-logo-vk",color:"info"})]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(A,{caption:""},{default:t(()=>[p("\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437")]),_:1}),e(A,null,{default:t(()=>[p("\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["action"])):P("",!0)}};const We=["innerHTML"],ze={__name:"DialogLogin",props:{text:_(""),okBtnText:_("OK"),cancelBtnText:_("\u041E\u0442\u043C\u0435\u043D\u0430"),AccessToken:String,SessionToken:String},emits:[...F.emits],setup(o){const{dialogRef:k,onDialogHide:n,onDialogOK:u,onDialogCancel:g}=F();return(y,T)=>(r(),C(ge,{ref_key:"dialogRef",ref:k,onHide:d(n)},{default:t(()=>[e(ee,{class:"q-dialog-plugin DialogCard"},{default:t(()=>[e(G,{class:"DialogText"},{default:t(()=>[s("div",{innerHTML:o.text},null,8,We)]),_:1}),e(G,null,{default:t(()=>[e(Se,null,{default:t(()=>[e(x,null,{default:t(()=>[e(Ae,{AccessToken:o.AccessToken,SessionToken:o.SessionToken},null,8,["AccessToken","SessionToken"])]),_:1}),e(x,null,{default:t(()=>[e(Ke,{AccessToken:o.AccessToken,SessionToken:o.SessionToken},null,8,["AccessToken","SessionToken"])]),_:1})]),_:1})]),_:1}),e(ce,{align:"right"},{default:t(()=>[e(K,{label:o.cancelBtnText,class:"DefBtn","no-caps":"",outline:"",onClick:d(g)},null,8,["label","onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}};var Je=te(ze,[["__scopeId","data-v-bef1644c"]]);const W=o=>(se("data-v-96b6c158"),o=o(),re(),o),Xe={class:"content"},Ye=W(()=>s("div",null,"rer",-1)),Ze=W(()=>s("div",null,"rer",-1)),Ge=W(()=>s("div",null,"rer",-1)),et=W(()=>s("div",{class:"scene"},"\u0421\u0446\u0435\u043D\u0430",-1)),tt={class:"rowNumber"},lt={class:"rowNumber"},at={key:0,class:"ticketList"},nt={__name:"EventPage",setup(o){const k=String("https://api.sakh-orch.ru/"),n=ue(),u=he(),g=_(null),y=_([{priceType:"Invite",price:null,label:"\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435"},{priceType:"Price_1",price:200,label:"\u0426\u0435\u043D\u0430 1"},{priceType:"Price_2",price:300,label:"\u0426\u0435\u043D\u0430 2"},{priceType:"Price_3",price:500,label:"\u0426\u0435\u043D\u0430 3"},{priceType:"Price_4",price:800,label:"\u0426\u0435\u043D\u0430 4"},{priceType:"Price_5",price:1e3,label:"\u0426\u0435\u043D\u0430 5"}]);O("defaultPricing",y);const T=q("progress"),b=V.self.id,S=V.self.authType,H=_({});O("Announce",H);const c=_({id:1,structure:{cntRows:10,cntCols:12,rowNums:[]},pricing:y.value,cells:[],tickets:[]});O("HallPlan",c),O("colors",{Offline:["white","#bb6af3"],Existing:["white","#bb6af3"],Invite:["purple","#bb6af3"],Price_1:["blue","blue"],Price_2:["green","green"],Price_3:["yellow","yellow"],Price_4:["orange","orange"],Price_5:["red","#ad1010"]});const Q=_(!1),N=ye(()=>[...c.value.tickets].filter(l=>l.userId===b));function R(a){var l,i;return(i=(l=c.value.pricing.find(m=>m.priceType===a.priceType))==null?void 0:l.price)!=null?i:0}function L(a){return c.value.tickets.find(l=>l.cellId===a)}function B(){n.dialog({component:Je,componentProps:{text:"\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",okBtnText:"\u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",cancelBtnText:"\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",AccessToken:V.self.AccessToken,SessionToken:V.self.SessionToken},cancel:!0,persistent:!0}).onOk(()=>{}).onOk(()=>{router.push("/account")}).onCancel(()=>{}).onDismiss(()=>{})}function E(){U.post(k+"api/tickets/hallplan.php",{params:{method:"get",id:u.params.id}}).then(async a=>{var l,i,m,w;if(!((i=(l=a==null?void 0:a.data)==null?void 0:l.data)!=null&&i.HallPlan))throw new Error;Q.value=!1,c.value=(w=(m=a==null?void 0:a.data)==null?void 0:m.data)==null?void 0:w.HallPlan,await oe(),Q.value=!0,console.log("HallPlan loaded")}).catch(a=>{c.value={},n.notify(j(a))}).finally(()=>{T.value=!1,console.log("progress off"),oe(()=>{let a=document.getElementById("tableArea");a.scrollTo(a.clientWidth/2,0),console.log(a.scrollWidth),fe()})})}function J(){T.value=!0,console.log("progress on"),U.post(k+"api/event/announce.php",{params:{method:"get",id:u.params.id}}).then(a=>{var l,i,m;if(!((l=a==null?void 0:a.data)!=null&&l.result))throw console.log("announce err:",a.data),new Error;H.value=(m=(i=a==null?void 0:a.data)==null?void 0:i.data)!=null?m:{},console.log("Announce loaded"),E()}).catch(a=>{n.notify(j(a))}).finally(()=>{})}function le(a){c.value.tickets.find(l=>l.id===a).userId=b,U.post(k+"api/tickets/ticket.php",{params:{method:"reserve",id:a}}).then(l=>{var i;if(!((i=l==null?void 0:l.data)!=null&&i.result))throw new Error}).catch(l=>{c.value.tickets.find(i=>i.id===a).userId=null,n.notify(j(l)),l.response.status===403&&(c.value.tickets.find(i=>i.id===a).offline=!0)})}function ae(a){c.value.tickets.find(l=>l.id===a).userId=null,U.post(k+"api/tickets/ticket.php",{params:{method:"returnTicket",id:a}}).then(l=>{var i;if(!((i=l==null?void 0:l.data)!=null&&i.result))throw new Error}).catch(l=>{c.value.tickets.find(i=>i.id===a).userId=b,n.notify(j(l))})}const ne=_(50);function fe(){setTimeout(()=>{ne.value=100},1e3)}return Te(()=>{J(),console.log(S)}),_({width:"100%",height:"100%",margin:"auto",overflow:"scroll"}),we({title:"\u0411\u0438\u043B\u0435\u0442\u044B"}),(a,l)=>(r(),v("div",Xe,[Ye,Ze,Ge,e(ee,{class:"card"},{default:t(()=>[d(T)?(r(),C(_e,{key:0,indeterminate:"",color:"secondary"})):P("",!0),d(T)?P("",!0):(r(),v("div",{key:1,class:"tableArea",id:"tableArea",ref_key:"tableAreaRef",ref:g},[s("div",{style:D({transform:"scale("+ne.value+"%)"})},[s("div",null,[et,s("table",null,[s("tbody",null,[(r(!0),v(M,null,Z(c.value.cells,(i,m)=>(r(),v("tr",{key:"row_"+m},[s("td",null,[s("div",tt,f(c.value.structure.rowNums[m]||""),1)]),(r(!0),v(M,null,Z(i,(w,me)=>(r(),v("td",{key:m+"_"+me},[(r(),C(Le,{cell:c.value.cells[w.row-1][w.col-1],"onUpdate:cell":$=>c.value.cells[w.row-1][w.col-1]=$,ticket:L(w.id),key:w.id,onReserve:l[0]||(l[0]=$=>le($)),onReturnTicket:l[1]||(l[1]=$=>ae($))},null,8,["cell","onUpdate:cell","ticket"]))]))),128)),s("td",null,[s("div",lt,f(c.value.structure.rowNums[m]||""),1)])]))),128))])])])],4)],512)),e(ce,{style:{display:"flex","justify-content":"end",padding:"1em"}},{default:t(()=>[e(K,{label:"\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",outline:"",color:"green",onClick:B})]),_:1})]),_:1}),c.value.tickets.length?(r(),v("div",at,[(r(!0),v(M,null,Z(N.value,i=>(r(),C(Ve,{key:"tic_"+i.id,ticket:i,price:R(i),onReserve:l[2]||(l[2]=m=>le(m)),onReturnTicket:l[3]||(l[3]=m=>ae(m))},null,8,["ticket","price"]))),128))])):P("",!0)]))}};var Ct=te(nt,[["__scopeId","data-v-96b6c158"]]);export{Ct as default};
