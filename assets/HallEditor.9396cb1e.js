import{_ as J,i as m,f as p,g as k,F as M,au as K,v as y,h as l,G as n,aZ as X,a1 as te,t as c,x as w,ax as W,bk as le,a2 as Y,j as R,bM as ae,ce as oe,av as x,c as S,as as ue,r as T,bN as ee,aY as se,p as V,o as de,a as pe,aX as fe,T as F,da as _e}from"./index.f4425f64.js";import{api as D}from"./axios.1c44bdcc.js";import{n as G,b as me}from"./myFuncts.8c7f864e.js";import{u as ne}from"./use-quasar.a3a8e107.js";import{Q as ce}from"./QSelect.c3f215a6.js";import{Q as Z,b as A,a as Q}from"./QItemSection.5c8788d1.js";import{Q as ve}from"./QImg.b42e9670.js";import{Q as L}from"./QTooltip.6a47fc5b.js";import"./jwt-decode.esm.74bd4619.js";import"./rtl.1c3fa6ce.js";import"./position-engine.f8cade4e.js";import"./format.3e32b8d9.js";import"./use-ratio.897a1642.js";const ye={class:"priceRow"},ke=["onClick"],be={__name:"PriceInputs",emits:["onSelectPrice"],setup(H,{emit:C}){const t=m("selectedPrice"),d=m("HallPlan");function i(v){t.value=v}const r=m("colors");function u(v){return v.priceType===t.value.priceType?"1.5em":"1em"}return(v,a)=>(p(),k("div",ye,[(p(!0),k(M,null,K(n(d).pricing,s=>(p(),k("div",{key:s.priceType,class:"priceCell"},[y("div",{style:{cursor:"pointer"},onClick:o=>i(s)},[l(X,{label:s.label,dense:"","label-color":n(r)[s.priceType][0],step:"100","input-class":"priceInput",modelValue:n(d).pricing.find(o=>o.priceType===s.priceType).price,"onUpdate:modelValue":o=>n(d).pricing.find(g=>g.priceType===s.priceType).price=o,type:"number"},null,8,["label","label-color","modelValue","onUpdate:modelValue"]),l(te,{name:"edit",color:n(r)[s.priceType][0],size:u(s)},null,8,["color","size"])],8,ke)]))),128))]))}};var he=J(be,[["__scopeId","data-v-607c9cf6"]]);const we={style:{width:"100%",border:"1px solid lightgray","border-radius":"3px"}},Ce={__name:"StructureInputs",setup(H){const C=m("initCells"),t=m("HallPlan"),d=m("addCountable");return(i,r)=>(p(),k(M,null,[l(X,{label:"\u0420\u044F\u0434\u043E\u0432",modelValue:n(t).structure.cntRows,"onUpdate:modelValue":r[0]||(r[0]=u=>n(t).structure.cntRows=u),color:"amber",type:"number",outlined:"",class:"inputNumber"},null,8,["modelValue"]),l(X,{label:"\u042F\u0447\u0435\u0435\u043A",modelValue:n(t).structure.cntCols,"onUpdate:modelValue":r[1]||(r[1]=u=>n(t).structure.cntCols=u),color:"amber",type:"number",outlined:"",class:"inputNumber"},null,8,["modelValue"]),y("div",we,[l(L,{delay:"300"},{default:c(()=>[w("\u0412\u0441\u0435\u0433\u0434\u0430 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u044F\u0447\u0435\u0439\u043A\u0443 \u043F\u0440\u0438 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0435 \u043C\u0435\u0441\u0442 \u0440\u044F\u0434\u0430.")]),_:1}),l(le,{modelValue:n(d),"onUpdate:modelValue":r[2]||(r[2]=u=>W(d)?d.value=u:null),label:"+1"},null,8,["modelValue"])]),l(Y,{label:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",onClick:n(C),class:"defbtn",outline:""},null,8,["onClick"])],64))}},Te={__name:"ModeSelect",setup(H){const C=[{value:"Offline",label:"\u0417\u0430\u043D\u044F\u0442\u044B\u0435 \u043C\u0435\u0441\u0442\u0430",descr:"\u041C\u0435\u0441\u0442\u0430, \u0447\u044C\u0438 \u0431\u0438\u043B\u0435\u0442\u044B \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043E\u043D\u043B\u0430\u0439\u043D. \u0418\u0445 \u0437\u0430\u0431\u0440\u0430\u043B\u0438 \u043E\u0447\u043D\u043E."},{value:"Prices",label:"\u0426\u0435\u043D\u044B",descr:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0446\u0435\u043D \u0438 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u043C\u0435\u0441\u0442\u0430 \u043A \u0442\u0438\u043F\u0443 \u0446\u0435\u043D\u044B"},{value:"Structure",label:"\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0417\u0430\u043B\u0430",descr:"\u041E\u0442\u043C\u0435\u0447\u0430\u0435\u0442 \u044F\u0447\u0435\u0439\u043A\u0443 \u043A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434 \u0438\u043B\u0438 \u043C\u0435\u0441\u0442\u043E"}],t=m("selectedMode"),d=m("selectedPrice"),i=m("colors");function r(){return t.value==="Prices"?i[d.value.priceType][0]:"amber"}return(u,v)=>(p(),R(ce,{modelValue:n(t),"onUpdate:modelValue":v[0]||(v[0]=a=>W(t)?t.value=a:null),color:"amber","label-color":r(),outlined:"","emit-value":"","map-options":"",style:{width:"100%"},options:C,label:"\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C?"},{prepend:c(()=>[l(te,{name:"edit",color:r()},null,8,["color"])]),option:c(a=>[l(Z,ae(oe(a.itemProps)),{default:c(()=>[l(A,null,{default:c(()=>[l(Q,null,{default:c(()=>[w(x(a.opt.label),1)]),_:2},1024),l(Q,{caption:""},{default:c(()=>[w(x(a.opt.descr),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","label-color"]))}};const ge={class:"menuArea"},Pe={class:"menuBlock"},xe={class:"blockRow"},Ie=["src"],Ve={class:"menuBlock"},Se={class:"blockRow"},He={key:0,class:"blockRow"},Ne={__name:"HallCreatorMenu",emits:["onSelectHall","onSelectPrice","onSelectAnnounce"],setup(H,{emit:C}){const t=ne();m("HallPlan"),m("Halls");const d=m("selectedMode"),i=m("announceList"),r=m("selectedAnnounce");m("colors");function u(a){let s=480;return t.platform.is.mobile&&(s=1080),String("https://api.sakh-orch.ru/")+a.folder+"/"+s+"/"+a.fileName+"?ver="+a.md5}function v(){C("onSelectAnnounce")}return(a,s)=>(p(),k("div",ge,[y("div",Pe,[S("",!0),y("div",xe,[n(i).length?(p(),R(ce,{key:0,options:n(i),modelValue:n(r),"onUpdate:modelValue":[s[2]||(s[2]=o=>W(r)?r.value=o:null),s[3]||(s[3]=o=>v())],color:"amber",outlined:"",style:{width:"100%"},"map-options":"","option-value":"id","option-label":"progName"},{selected:c(()=>[l(Z,{dense:""},{default:c(()=>[l(A,null,{default:c(()=>[l(Q,null,{default:c(()=>[w(x(n(r).progName),1)]),_:1}),l(Q,{caption:""},{default:c(()=>[w(x(n(r).Hall.name),1)]),_:1})]),_:1})]),_:1})]),prepend:c(()=>[l(ve,{width:"50px",src:u(n(r).Sketch)},null,8,["src"])]),option:c(o=>[l(Z,ae(oe(o.itemProps)),{default:c(()=>[l(A,{avatar:""},{default:c(()=>[y("img",{style:{width:"50px"},src:u(o.opt.Sketch)},null,8,Ie),S("",!0)]),_:2},1024),l(A,null,{default:c(()=>[l(Q,null,{default:c(()=>[w(x(o.opt.progName),1)]),_:2},1024),l(Q,{caption:""},{default:c(()=>[w(x(o.opt.Hall.name),1)]),_:2},1024),l(Q,{caption:""},{default:c(()=>[w(x(o.opt.datetime),1)]),_:2},1024)]),_:2},1024),l(A,{side:""},{default:c(()=>[S("",!0),l(le,{disable:"",modelValue:o.opt.isShow,"onUpdate:modelValue":g=>o.opt.isShow=g,color:"green"},{default:c(()=>[l(L,null,{default:c(()=>[w("\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040),l(ue)]),_:1},8,["options","modelValue"])):S("",!0)])]),y("div",Ve,[y("div",Se,[l(Te)]),n(d)==="Structure"?(p(),k("div",He,[l(Ce)])):S("",!0)]),n(d)==="Prices"?(p(),R(he,{key:0})):S("",!0)]))}};var $e=J(Ne,[["__scopeId","data-v-4a807edf"]]);const Qe=y("br",null,null,-1),Re=y("br",null,null,-1),Ue={key:1,class:"forceCount"},Be={__name:"HallBuilderCell",props:{cell:Object,ticket:Object},emits:["cellClick"],setup(H,{emit:C}){const t=H,d=m("colors"),i=T(t.ticket),r=m("HallPlan"),u=m("selectedMode"),v=m("selectedPrice"),a=m("addCountable"),s=T(!1),o=T(0);function g(f){var P;return(P=r.value.tickets.find(N=>N.cellid===f))!=null?P:!1}function b(){var f,P,N,$;!((P=(f=i==null?void 0:i.value)==null?void 0:f.cellId)!=null&&P)||(o.value.cellId!==(($=(N=i==null?void 0:i.value)==null?void 0:N.cellId)!=null?$:0)&&(s.value=!1),v.value.priceType===i.value.priceType?i.value.priceType=s.value:(s.value=i.value.priceType,i.value.priceType=v.value.priceType),o.value=i.value.cellId)}function z(f){f.exist=!f.exist,g(f.id)||r.value.tickets.push({cellId:f.id,offline:!1,seatRow:0,seatNum:0,priceType:"Invite"}),f.forceCount=!!(!f.exist&&a.value)}function E(f){switch(u.value){case"Structure":{z(f);break}case"Prices":{b();break}case"Offline":{i.value.offline=!i.value.offline;break}default:{if(f.priceType===u.value.value){f.priceType="Invite";break}f.priceType=u.value.value}}}return(f,P)=>{var N,$,U,O;return p(),k("div",{class:"cellArea",onClick:P[0]||(P[0]=j=>E(H.cell))},[t.cell.exist?(p(),k(M,{key:0},[(N=H.ticket)!=null&&N.offline?(p(),k("div",{key:0,class:"offlineCell",style:ee({borderColor:n(d)[(($=t.ticket)==null?void 0:$.priceType)||"Invite"][1],backgroundColor:n(d)[((U=t.ticket)==null?void 0:U.priceType)||"Invite"][1]})},null,4)):(p(),k("div",{key:1,class:"availableCell",style:ee({borderColor:n(d)[((O=t.ticket)==null?void 0:O.priceType)||"Invite"][1]})},[w(x(t.ticket.seatNum)+" ",1),l(L,{offset:[0,-120],"max-width":"20em",delay:300},{default:c(()=>[w(x("\u041C\u0435\u0441\u0442\u043E: "+t.ticket.seatNum),1),Qe,w(" "+x("\u0420\u044F\u0434: "+t.ticket.seatRow),1),Re,w(" "+x("\u0426\u0435\u043D\u0430: "+t.ticket.priceType),1)]),_:1})],4))],64)):t.cell.forceCount?(p(),k("div",Ue,[w("? "),l(L,{offset:[0,-100],"max-width":"20em"},{default:c(()=>[w(" \u041F\u043E \u043A\u0430\u043A\u0438\u043C-\u0442\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u044D\u0442\u043E \u043C\u0435\u0441\u0442\u043E \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u043D\u043E \u0432 \u0441\u0445\u0435\u043C\u0435, \u043D\u043E \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u0435\u0433\u043E \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ")]),_:1})])):S("",!0)])}}};const Ae={style:{width:"max-content"}},Me={style:{margin:"auto"}},Ee={class:"rowNumber"},Oe={class:"rowNumber"},Le={__name:"HallTable",emits:["cellClick","ticket"],setup(H,{emit:C}){const t=m("HallPlan");function d(u){C("cellClick",u)}function i(u){C("ticket",u)}function r(u){return t.value.tickets.find(v=>v.cellId===u)}return(u,v)=>n(t).tickets.length?(p(),R(se,{key:0},{default:c(()=>[y("table",Ae,[y("tbody",Me,[(p(!0),k(M,null,K(n(t).cells,(a,s)=>(p(),k("tr",{key:"row_"+s},[y("td",null,[y("div",Ee,x(n(t).structure.rowNums[s]||""),1)]),(p(!0),k(M,null,K(a,(o,g)=>(p(),k("td",{key:s+"_"+g},[(p(),R(Be,{cell:n(t).cells[o.row-1][o.col-1],"onUpdate:cell":b=>n(t).cells[o.row-1][o.col-1]=b,ticket:r(o.id),key:o.id,onCellClick:b=>d(b),onTickedClick:v[0]||(v[0]=b=>i(b))},null,8,["cell","onUpdate:cell","ticket","onCellClick"]))]))),128)),y("td",null,[y("div",Oe,x(n(t).structure.rowNums[s]||""),1)])]))),128))])])]),_:1})):S("",!0)}};var ze=J(Le,[["__scopeId","data-v-3430a5c2"]]);const je={class:"content"},qe={style:{overflow:"auto",margin:"1em auto","min-width":"100vw"}},nt={__name:"HallEditor",setup(H){const C=String("https://api.sakh-orch.ru/"),t=ne(),d=T("Prices");V("selectedMode",d);const i=T([{priceType:"Invite",price:null,label:"\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435"},{priceType:"Price_1",price:200,label:"\u0426\u0435\u043D\u0430 1"},{priceType:"Price_2",price:300,label:"\u0426\u0435\u043D\u0430 2"},{priceType:"Price_3",price:500,label:"\u0426\u0435\u043D\u0430 3"},{priceType:"Price_4",price:800,label:"\u0426\u0435\u043D\u0430 4"},{priceType:"Price_5",price:1e3,label:"\u0426\u0435\u043D\u0430 5"}]);V("defaultPricing",i);const r=T({priceType:"Invite",price:null,label:"\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435"});V("selectedPrice",r);const u=T({});V("selectedAnnounce",u);const v=T(!1);V("addCountable",v);const a=T({id:1,structure:{cntRows:10,cntCols:12,rowNums:[]},pricing:i.value,cells:[],tickets:[]});V("HallPlan",a),V("colors",{Offline:["white","#bb6af3"],Existing:["white","#bb6af3"],Invite:["purple","#bb6af3"],Price_1:["blue","blue"],Price_2:["green","green"],Price_3:["yellow","yellow"],Price_4:["orange","orange"],Price_5:["red","#ad1010"]});const o=T(!1);V("progress",o);const g=T([]);V("announceList",g);const b=T(!1);function z(){d.value==="Structure"&&U(),D.post(C+"api/tickets/hallplan.php",{params:{method:"put",plan:a.value}}).then(e=>{var _,h,I;if(!((_=e==null?void 0:e.data)!=null&&_.result))throw new Error;t.notify(me((I=(h=e==null?void 0:e.data)==null?void 0:h.result)!=null?I:""))}).catch(e=>{t.notify(G(e))})}async function E(){b.value=!1,a.value.cells=[];let e=[],_=[],h=0,I={};for(let B=1;B<=a.value.structure.cntRows;B++){for(let q=1;q<=a.value.structure.cntCols;q++)h++,I={id:h,row:B,col:q,exist:!0,forceCount:!1},_.push(I);e.push(_),_=[]}a.value.cells=e,await U(),await F(),b.value=!0}V("initCells",E);const f=T(0),P=T(0);function N(e){if(!e.exist&&!e.forceCount)return;if(e.forceCount){f.value++;return}if(!e.exist)return;f.value++;let _={cellId:e.id,offline:!1,seatRow:P.value,seatNum:f.value,priceType:"Invite"};a.value.tickets.push(_)}function $(e){if(f.value=0,O(e)){a.value.structure.rowNums.push(!1);return}P.value++,a.value.structure.rowNums.push(P.value),e.forEach(_=>N(_))}async function U(){b.value=!1,P.value=0,a.value.tickets=[],a.value.structure.rowNums=[],a.value.cells.forEach(e=>$(e)),await F(),b.value=!0,console.log("cntOfTickets:",a.value.tickets.length)}function O(e){return![...e].filter(h=>h.exist).length}function j(){D.post(C+"api/tickets/hallplan.php",{params:{method:"get",id:u.value.id}}).then(async e=>{var _,h,I,B;if(e.status===204){await E();return}if(!((h=(_=e==null?void 0:e.data)==null?void 0:_.data)!=null&&h.HallPlan))throw new Error;b.value=!1,a.value=(B=(I=e==null?void 0:e.data)==null?void 0:I.data)==null?void 0:B.HallPlan,await F(),b.value=!0}).catch(e=>{a.value={},t.notify(G(e))})}function ie(){o.value=!0,D.post(C+"api/event/announce.php",{params:{method:"futureList"}}).then(e=>{var _,h,I;if(!((_=e==null?void 0:e.data)!=null&&_.result))throw new Error;g.value=(I=(h=e==null?void 0:e.data)==null?void 0:h.data)!=null?I:[],u.value=g.value[0],j()}).catch(e=>{t.notify(G(e)),g.value=[]}).finally(()=>{o.value=!1})}function re(){switch(d.value){case"Prices":{console.log("resetTickets"),U();break}default:console.log(d.value)}}return de(()=>{}),pe(()=>{ie()}),(e,_)=>(p(),k("div",je,[l($e,{onOnSelectAnnounce:_[0]||(_[0]=h=>j())}),y("div",qe,[l(fe,{style:{width:"max-content","min-width":"80vw",padding:"2em",margin:"0 auto"},dark:""},{default:c(()=>[b.value?(p(),R(ze,{key:0})):S("",!0),l(_e,{style:{display:"flex","justify-content":"end"}},{default:c(()=>[d.value==="Prices"?(p(),R(Y,{key:0,label:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",onClick:_[1]||(_[1]=h=>re())})):S("",!0),l(Y,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",onClick:z})]),_:1})]),_:1})])]))}};export{nt as default};
