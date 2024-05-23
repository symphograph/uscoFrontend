import{Q as ve}from"./QLinearProgress.a5daeaa3.js";import{r as _,m as r,n as w,q as t,ax as i,x as d,f as e,B as H,Q as se,t as f,l as A,i as F,E as g,F as q,bM as D,v as m,z as Z,ak as J,A as P,al as X,b1 as he,y as ee,az as re,aA as ce,g as ge,H as ye,bn as ue,u as Te,p as U,c as be,o as we,G as Y,au as oe}from"./index.510122e2.js";import{api as j}from"./axios.6d8586d3.js";import{b as Se,n as V}from"./myFuncts.1e48b579.js";import{u as Ce}from"./use-meta.7fb66fc6.js";import{a as C,Q as v,u as de}from"./QItem.d91de5d1.js";import{Q as ie}from"./QTooltip.39040729.js";import{a as xe,m as M}from"./myAuth.f2132660.js";import{Q as fe}from"./QImg.f1da4040.js";import{Q as x}from"./QItemLabel.ebe65f5d.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as Ae}from"./QList.e281df57.js";import{g as Ie}from"./get-emits-object.a3f16783.js";import{Q as me}from"./QForm.48bdb47d.js";import"./position-engine.b922239a.js";import"./selection.b51c085c.js";const Pe=["value"],$e=["value"],Qe=["value"],De={__name:"TelegramForm",props:{AccessToken:String,SessionToken:String},setup(a){const p=String("sakh-orch.ru"),o=String("https://auth.symphograph.ru/"),c=_(null);return(h,y)=>a.AccessToken?(r(),w(me,{key:0,ref_key:"formTelegram",ref:c,action:d(o)+"auth/telegram/login.php",method:"post"},{default:t(()=>[i("input",{type:"hidden",name:"AccessToken",value:a.AccessToken},null,8,Pe),i("input",{type:"hidden",name:"SessionToken",value:a.SessionToken},null,8,$e),i("input",{type:"hidden",name:"from",value:d(p)},null,8,Qe),e(H,{type:"submit","no-caps":"",align:"between",outline:!1,padding:"none",style:{width:"100%"},flat:"",dense:"",square:""},{default:t(()=>[e(C,{dense:""},{default:t(()=>[e(v,{avatar:""},{default:t(()=>[e(se,null,{default:t(()=>[e(fe,{src:"/img/auth/telegram.svg"})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(x,{caption:""},{default:t(()=>[f("\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437")]),_:1}),e(x,null,{default:t(()=>[f("\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["action"])):A("",!0)}};const He={class:"cellArea"},Ne=i("br",null,null,-1),Re=i("br",null,null,-1),Be=i("br",null,null,-1),Ee=i("br",null,null,-1),Le=i("br",null,null,-1),Oe={__name:"HallUserCell",props:{cell:Object,ticket:Object},emits:["reserve","returnTicket"],setup(a,{emit:p}){const o=a,c=F("colors"),h=_(o.ticket);F("HallPlan");const y=p;_("Invite"),_(0);const T=xe.userId();function b(){y("reserve",h.value.id)}function I(){y("returnTicket",h.value.id)}return(N,u)=>{var W,$,R,B,E,L,O;return r(),g("div",He,[a.cell.exist?(r(),g(q,{key:0},[(W=a.ticket)!=null&&W.offline?(r(),g("div",{key:0,class:"offlineCell",style:D({borderColor:d(c)[(($=o.ticket)==null?void 0:$.priceType)||"Invite"][1],backgroundColor:d(c)[((R=o.ticket)==null?void 0:R.priceType)||"Invite"][1]})},null,4)):o.ticket.userId===d(T)?(r(),g("div",{key:1,class:"userCell",onClick:u[0]||(u[0]=G=>I()),style:D({borderColor:d(c)[((B=o.ticket)==null?void 0:B.priceType)||"Invite"][1]})},[f(m(o.ticket.seatNum)+" ",1),e(ie,{offset:[0,-120],"max-width":"20em",delay:300},{default:t(()=>[f(m("\u042D\u0442\u043E \u0412\u0430\u0448\u0435 \u043C\u0435\u0441\u0442\u043E")),Ne,f(" "+m("\u0420\u044F\u0434: "+o.ticket.seatRow),1),Re,f(" "+m("\u041C\u0435\u0441\u0442\u043E: "+o.ticket.seatNum),1),Be,f(" "+m("\u0426\u0435\u043D\u0430: "+o.ticket.priceType),1)]),_:1})],4)):o.ticket.userId?(r(),g("div",{key:2,class:"offlineCell",style:D({borderColor:d(c)[((E=o.ticket)==null?void 0:E.priceType)||"Invite"][1],backgroundColor:d(c)[((L=o.ticket)==null?void 0:L.priceType)||"Invite"][1]})},null,4)):(r(),g("div",{key:3,class:"availableCell",style:D({borderColor:d(c)[((O=o.ticket)==null?void 0:O.priceType)||"Invite"][1]}),onClick:u[1]||(u[1]=G=>b())},[f(m(o.ticket.seatNum)+" ",1),e(ie,{offset:[0,-120],"max-width":"20em",delay:300},{default:t(()=>[f(m("\u0420\u044F\u0434: "+o.ticket.seatRow),1),Ee,f(" "+m("\u041C\u0435\u0441\u0442\u043E: "+o.ticket.seatNum),1),Le,f(" "+m("\u0426\u0435\u043D\u0430: "+o.ticket.priceType),1)]),_:1})],4))],64)):A("",!0)])}}};const Ue=a=>(re("data-v-6bf057de"),a=a(),ce(),a),je={class:"mapLink"},Ve={style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"space-between"}},Me=Ue(()=>i("div",null,[i("div",{style:{border:"1px solid white",width:"100px",height:"100px"}})],-1)),qe={__name:"TicketCard",props:{ticket:{},price:Number},emits:["reserve","returnTicket"],setup(a,{emit:p}){const o=String("https://api.sakh-orch.ru/");de();const c=F("Announce"),h=p,y=_("");function T(b){y.value=" returning",setTimeout(()=>{h("returnTicket",b)},600)}return(b,I)=>(r(),w(ee,{class:he("ticketCard"+y.value)},{default:t(()=>[e(Z,{class:"progName"},{default:t(()=>[f(m(d(c).progName),1)]),_:1}),e(C,{dense:""},{default:t(()=>[e(v,{avatar:""},{default:t(()=>[e(fe,{width:"10em",ratio:16/9,src:d(o)+d(c).Sketch.verLink},null,8,["src"])]),_:1}),e(v,{avatar:""},{default:t(()=>[J((r(),w(C,{dense:""},{default:t(()=>[e(v,{avatar:""},{default:t(()=>[e(P,{name:"schedule",color:"amber"})]),_:1}),e(v,null,{default:t(()=>[e(x,{caption:""},{default:t(()=>[f(m(d(Se)(d(c).eventTime)),1)]),_:1})]),_:1})]),_:1})),[[X]]),e(C,{clickable:"",dense:"",href:d(c).Hall.map,target:"_blank"},{default:t(()=>[e(v,{avatar:""},{default:t(()=>[e(P,{color:"amber",name:"place"})]),_:1}),e(x,null,{default:t(()=>[i("span",je,m(d(c).Hall.name),1)]),_:1})]),_:1},8,["href"]),J((r(),w(C,{dense:""},{default:t(()=>[e(v,{avatar:""},{default:t(()=>[e(P,{name:"ion-person",color:"amber"})]),_:1}),e(v,null,{default:t(()=>[e(x,{lines:"1"},{default:t(()=>[f("\u0420\u044F\u0434: "+m(a.ticket.seatRow)+" | \u041C\u0435\u0441\u0442\u043E: "+m(a.ticket.seatNum),1)]),_:1})]),_:1})]),_:1})),[[X]]),a.price?J((r(),w(C,{key:0,dense:""},{default:t(()=>[e(v,{avatar:""},{default:t(()=>[e(P,{name:"ion-wallet",color:"amber"})]),_:1}),e(v,null,{default:t(()=>[e(x,{lines:1},{default:t(()=>[f("\u0426\u0435\u043D\u0430: "+m(a.price),1)]),_:1})]),_:1})]),_:1})),[[X]]):A("",!0)]),_:1}),e(v),e(v,{side:""},{default:t(()=>[i("div",Ve,[Me,i("div",null,[e(H,{onClick:I[0]||(I[0]=N=>T(a.ticket.id)),flat:""},{default:t(()=>[e(P,{name:"delete",color:"red"})]),_:1})])])]),_:1})]),_:1})]),_:1},8,["class"]))}};var Fe=te(qe,[["__scopeId","data-v-6bf057de"]]);function z(){const{emit:a,proxy:p}=ge(),o=_(null);function c(){o.value.show()}function h(){o.value.hide()}function y(b){a("ok",b),h()}function T(){a("hide")}return Object.assign(p,{show:c,hide:h}),{dialogRef:o,onDialogHide:T,onDialogOK:y,onDialogCancel:h}}const _e=["ok","hide"];z.emits=_e;z.emitsObject=Ie(_e);const ze=["value"],Ke=["value"],We=["value"],Ge={__name:"VkontakteForm",props:{AccessToken:String,SessionToken:String},setup(a){const p=String("sakh-orch.ru"),o=String("https://auth.symphograph.ru/"),c=_(null);return(h,y)=>a.AccessToken?(r(),w(me,{key:0,ref_key:"formVk",ref:c,action:d(o)+"auth/vk/login.php",method:"post"},{default:t(()=>[i("input",{type:"hidden",name:"AccessToken",value:a.AccessToken},null,8,ze),i("input",{type:"hidden",name:"SessionToken",value:a.SessionToken},null,8,Ke),i("input",{type:"hidden",name:"from",value:d(p)},null,8,We),e(H,{type:"submit","no-caps":"",align:"between",outline:!1,padding:"none",style:{width:"100%"},flat:"",dense:"",square:""},{default:t(()=>[e(C,{dense:""},{default:t(()=>[e(v,{avatar:""},{default:t(()=>[e(se,{style:{"background-color":"#e9d26c"}},{default:t(()=>[e(P,{name:"ion-logo-vk",color:"info"})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(x,{caption:""},{default:t(()=>[f("\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437")]),_:1}),e(x,null,{default:t(()=>[f("\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["action"])):A("",!0)}};const Je=["innerHTML"],Xe={__name:"DialogLogin",props:{text:_(""),okBtnText:_("OK"),cancelBtnText:_("\u041E\u0442\u043C\u0435\u043D\u0430"),AccessToken:String,SessionToken:String},emits:[...z.emits],setup(a){const{dialogRef:p,onDialogHide:o,onDialogOK:c,onDialogCancel:h}=z();return(y,T)=>(r(),w(ye,{ref_key:"dialogRef",ref:p,onHide:d(o)},{default:t(()=>[e(ee,{class:"q-dialog-plugin DialogCard"},{default:t(()=>[e(Z,{class:"DialogText"},{default:t(()=>[i("div",{innerHTML:a.text},null,8,Je)]),_:1}),e(Z,null,{default:t(()=>[e(Ae,null,{default:t(()=>[e(C,null,{default:t(()=>[e(De,{AccessToken:a.AccessToken,SessionToken:a.SessionToken},null,8,["AccessToken","SessionToken"])]),_:1}),e(C,null,{default:t(()=>[e(Ge,{AccessToken:a.AccessToken,SessionToken:a.SessionToken},null,8,["AccessToken","SessionToken"])]),_:1})]),_:1})]),_:1}),e(ue,{align:"right"},{default:t(()=>[e(H,{label:a.cancelBtnText,class:"DefBtn","no-caps":"",outline:"",onClick:d(h)},null,8,["label","onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"]))}};var Ye=te(Xe,[["__scopeId","data-v-bef1644c"]]);const K=a=>(re("data-v-96b6c158"),a=a(),ce(),a),Ze={class:"content"},et=K(()=>i("div",null,"rer",-1)),tt=K(()=>i("div",null,"rer",-1)),nt=K(()=>i("div",null,"rer",-1)),lt=K(()=>i("div",{class:"scene"},"\u0421\u0446\u0435\u043D\u0430",-1)),at={class:"rowNumber"},ot={class:"rowNumber"},it={key:0,class:"ticketList"},st={__name:"EventPage",setup(a){const p=String("https://api.sakh-orch.ru/"),o=de(),c=Te(),h=_(null),y=_([{priceType:"Invite",price:null,label:"\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435"},{priceType:"Price_1",price:200,label:"\u0426\u0435\u043D\u0430 1"},{priceType:"Price_2",price:300,label:"\u0426\u0435\u043D\u0430 2"},{priceType:"Price_3",price:500,label:"\u0426\u0435\u043D\u0430 3"},{priceType:"Price_4",price:800,label:"\u0426\u0435\u043D\u0430 4"},{priceType:"Price_5",price:1e3,label:"\u0426\u0435\u043D\u0430 5"}]);U("defaultPricing",y);const T=F("progress"),b=M.self.id,I=M.self.authType,N=_({});U("Announce",N);const u=_({id:1,structure:{cntRows:10,cntCols:12,rowNums:[]},pricing:y.value,cells:[],tickets:[]});U("HallPlan",u),U("colors",{Offline:["white","#bb6af3"],Existing:["white","#bb6af3"],Invite:["purple","#bb6af3"],Price_1:["blue","blue"],Price_2:["green","green"],Price_3:["yellow","yellow"],Price_4:["orange","orange"],Price_5:["red","#ad1010"]});const $=_(!1),R=be(()=>[...u.value.tickets].filter(n=>n.userId===b));function B(l){var n,s;return(s=(n=u.value.pricing.find(k=>k.priceType===l.priceType))==null?void 0:n.price)!=null?s:0}function E(l){return u.value.tickets.find(n=>n.cellId===l)}function L(){o.dialog({component:Ye,componentProps:{text:"\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",okBtnText:"\u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",cancelBtnText:"\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",AccessToken:M.self.AccessToken,SessionToken:M.self.SessionToken},cancel:!0,persistent:!0}).onOk(()=>{}).onOk(()=>{router.push("/account")}).onCancel(()=>{}).onDismiss(()=>{})}function O(){j.post(p+"api/tickets/hallplan.php",{params:{method:"get",id:c.params.id}}).then(async l=>{var n,s,k,S;if(!((s=(n=l==null?void 0:l.data)==null?void 0:n.data)!=null&&s.HallPlan))throw new Error;$.value=!1,u.value=(S=(k=l==null?void 0:l.data)==null?void 0:k.data)==null?void 0:S.HallPlan,await oe(),$.value=!0,console.log("HallPlan loaded")}).catch(l=>{u.value={},o.notify(V(l))}).finally(()=>{T.value=!1,console.log("progress off"),oe(()=>{let l=document.getElementById("tableArea");l.scrollTo(l.clientWidth/2,0),console.log(l.scrollWidth),pe()})})}function G(){T.value=!0,console.log("progress on"),j.post(p+"api/event/announce.php",{params:{method:"get",id:c.params.id}}).then(l=>{var n,s,k;if(!((n=l==null?void 0:l.data)!=null&&n.result))throw console.log("announce err:",l.data),new Error;N.value=(k=(s=l==null?void 0:l.data)==null?void 0:s.data)!=null?k:{},console.log("Announce loaded"),O()}).catch(l=>{o.notify(V(l))}).finally(()=>{})}function ne(l){u.value.tickets.find(n=>n.id===l).userId=b,j.post(p+"api/tickets/ticket.php",{params:{method:"reserve",id:l}}).then(n=>{var s;if(!((s=n==null?void 0:n.data)!=null&&s.result))throw new Error}).catch(n=>{u.value.tickets.find(s=>s.id===l).userId=null,o.notify(V(n)),n.response.status===403&&(u.value.tickets.find(s=>s.id===l).offline=!0)})}function le(l){u.value.tickets.find(n=>n.id===l).userId=null,j.post(p+"api/tickets/ticket.php",{params:{method:"returnTicket",id:l}}).then(n=>{var s;if(!((s=n==null?void 0:n.data)!=null&&s.result))throw new Error}).catch(n=>{u.value.tickets.find(s=>s.id===l).userId=b,o.notify(V(n))})}const ae=_(50);function pe(){setTimeout(()=>{ae.value=100},1e3)}return we(()=>{G(),console.log(I)}),_({width:"100%",height:"100%",margin:"auto",overflow:"scroll"}),Ce({title:"\u0411\u0438\u043B\u0435\u0442\u044B"}),(l,n)=>(r(),g("div",Ze,[et,tt,nt,e(ee,{class:"card"},{default:t(()=>[d(T)?(r(),w(ve,{key:0,indeterminate:"",color:"secondary"})):A("",!0),d(T)?A("",!0):(r(),g("div",{key:1,class:"tableArea",id:"tableArea",ref_key:"tableAreaRef",ref:h},[i("div",{style:D({transform:"scale("+ae.value+"%)"})},[i("div",null,[lt,i("table",null,[i("tbody",null,[(r(!0),g(q,null,Y(u.value.cells,(s,k)=>(r(),g("tr",{key:"row_"+k},[i("td",null,[i("div",at,m(u.value.structure.rowNums[k]||""),1)]),(r(!0),g(q,null,Y(s,(S,ke)=>(r(),g("td",{key:k+"_"+ke},[(r(),w(Oe,{cell:u.value.cells[S.row-1][S.col-1],"onUpdate:cell":Q=>u.value.cells[S.row-1][S.col-1]=Q,ticket:E(S.id),key:S.id,onReserve:n[0]||(n[0]=Q=>ne(Q)),onReturnTicket:n[1]||(n[1]=Q=>le(Q))},null,8,["cell","onUpdate:cell","ticket"]))]))),128)),i("td",null,[i("div",ot,m(u.value.structure.rowNums[k]||""),1)])]))),128))])])])],4)],512)),e(ue,{style:{display:"flex","justify-content":"end",padding:"1em"}},{default:t(()=>[e(H,{label:"\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",outline:"",color:"green",onClick:L})]),_:1})]),_:1}),u.value.tickets.length?(r(),g("div",it,[(r(!0),g(q,null,Y(R.value,s=>(r(),w(Fe,{key:"tic_"+s.id,ticket:s,price:B(s),onReserve:n[2]||(n[2]=k=>ne(k)),onReturnTicket:n[3]||(n[3]=k=>le(k))},null,8,["ticket","price"]))),128))])):A("",!0)]))}};var Ct=te(st,[["__scopeId","data-v-96b6c158"]]);export{Ct as default};
