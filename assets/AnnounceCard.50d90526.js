import{Q as F}from"./QImg.47b09321.js";import{B as X,C as T,D as G,X as K,r as h,f as o,j as r,a2 as H,u as P,d as Y,i as J,a as W,e as Z,G as C,t as n,aX as ee,c as b,h as t,x as d,av as _,a5 as Q,a1 as p,v as f,aY as i,as as x,g as w,F as B,aw as te,_ as ne,a6 as I,z as ae,A as le}from"./index.672b0c3c.js";import{Q as D,b as y,a as L}from"./QItemSection.9e27c49b.js";import{Q as oe}from"./QTooltip.3de1524c.js";import{u as E}from"./use-quasar.fcbdae8e.js";import{api as V}from"./axios.92e9b1f5.js";import{b as N,n as O,d as ue}from"./myFuncts.8c7f864e.js";const ce=["top","middle","bottom"];var $=X({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ce.includes(e)}},setup(e,{slots:m}){const k=T(()=>e.align!==void 0?{verticalAlign:e.align}:null),l=T(()=>{const s=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(s!==void 0?` text-${s}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>G("div",{class:l.value,style:k.value,role:"status","aria-label":e.label},K(m.default,e.label!==void 0?[e.label]:[]))}});const ie={__name:"DialogConfirm",props:{color:h({}),label:h({}),message:h({}),title:h({})},emits:["onOk","Cancel","Dismiss"],setup(e,{emit:m}){const k=E();function l(s,u){k.dialog({title:u,message:s,cancel:!0,persistent:!0,html:!0}).onOk(()=>{}).onOk(()=>{m("onOk")}).onCancel(()=>{m("Cancel")}).onDismiss(()=>{m("Dismiss")})}return(s,u)=>(o(),r(H,{label:e.label,color:e.color,onClick:u[0]||(u[0]=S=>l(e.message,e.title))},null,8,["label","color"]))}};const q=e=>(ae("data-v-db9d455e"),e=e(),le(),e),re=["href"],se={class:"mapLink"},de=["innerHTML"],fe=["innerHTML"],me=q(()=>f("div",null,null,-1)),ge=["href"],be=q(()=>f("span",{class:"mapLink"},"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E",-1)),he=q(()=>f("b",null,"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D",-1)),ye={__name:"AnnounceCard",props:{Announce:h(!1)},emits:["newAnnounce","IamDeleted","changeShow"],setup(e,{expose:m,emit:k}){const l=e,s=String("https://api.sakh-orch.ru/"),u=E();P(),Y();const S=J("editMode");m({saveData:M});const R=h(["","","\u0412\u0445\u043E\u0434 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439","\u0411\u0438\u043B\u0435\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435","\u0412\u0445\u043E\u0434 \u043F\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C","\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430"]),A=h(l.Announce),U=T(()=>{let a=480;return u.platform.is.mobile&&(a=1080),String("https://api.sakh-orch.ru/")+l.Announce.Sketch.folder+"/"+a+"/"+l.Announce.Sketch.fileName+"?ver="+l.Announce.Sketch.md5});W(()=>{});function M(){V.post(s+"api/event/announce.php",{params:{method:"update",announce:l.Announce}}).then(a=>{var c,g;u.notify(N((g=(c=a==null?void 0:a.data)==null?void 0:c.result)!=null?g:""))}).catch(a=>{u.notify(O(a))})}function j(){V.post(s+"api/event/announce.php",{params:{method:"del",id:l.Announce.id}}).then(a=>{var c,g,v;if(!((c=a==null?void 0:a.data)!=null&&c.result))throw new Error;u.notify(N((v=(g=a==null?void 0:a.data)==null?void 0:g.result)!=null?v:null)),k("IamDeleted")}).catch(a=>{u.notify(O(a))})}function z(){return l.Announce.pay?l.Announce.pay===3&&l.Announce.complited?"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430":R.value[l.Announce.pay]:""}return(a,c)=>{const g=Z("router-link");return e.Announce&&(e.Announce.isShow||C(S))?(o(),r(ee,{key:0,square:"",class:"eventbox tdno",separator:""},{default:n(()=>[t(g,{to:"/announce/"+e.Announce.id},{default:n(()=>[t(F,{ratio:1080/608,src:U.value,fit:"fill"},null,8,["src"])]),_:1},8,["to"]),t(i,{color:"info","expand-separator":""},{default:n(()=>[e.Announce.complited===!1?(o(),r($,{key:0,class:"absolute bage",color:"green-6",rounded:"",transparent:""},{default:n(()=>[d(" \u0421\u043A\u043E\u0440\u043E ")]),_:1})):b("",!0),e.Announce.age?(o(),r($,{key:1,rounded:"",style:{"background-color":"orange"},floating:""},{default:n(()=>[d(_(e.Announce.age+"+"),1)]),_:1})):b("",!0),Q((o(),r(D,null,{default:n(()=>[t(y,{avatar:""},{default:n(()=>[t(p,{name:"schedule"})]),_:1}),t(y,null,{default:n(()=>[t(L,{caption:""},{default:n(()=>[d(_(C(ue)(A.value.datetime)),1)]),_:1})]),_:1})]),_:1})),[[I]]),f("a",{href:e.Announce.Hall.map,target:"_blank"},[Q((o(),r(D,{clickable:""},{default:n(()=>[t(y,{avatar:""},{default:n(()=>[t(p,{color:"primary",name:"place"})]),_:1}),t(y,null,{default:n(()=>[t(L,{caption:""},{default:n(()=>[f("span",se,_(e.Announce.Hall.name),1)]),_:1})]),_:1})]),_:1})),[[I]])],8,re)]),_:1}),t(x,{inset:""}),t(i,null,{default:n(()=>[f("div",{class:"text-subtitle1 text-center prog-name",innerHTML:e.Announce.progName},null,8,de)]),_:1}),t(i,{class:"text-body2 text-center"},{default:n(()=>[f("div",{innerHTML:e.Announce.sdescr},null,8,fe)]),_:1}),t(i,{class:"space"},{default:n(()=>[me]),_:1}),t(x,{inset:""}),e.Announce.youtubeId?(o(),r(i,{key:0},{default:n(()=>[f("a",{href:"https://www.youtube.com/watch?v="+e.Announce.youtubeId,target:"_blank"},[Q((o(),r(D,{clickable:""},{default:n(()=>[t(y,{avatar:""},{default:n(()=>[t(p,{color:"primary",name:"ion-logo-youtube"})]),_:1}),t(y,null,{default:n(()=>[t(L,{caption:""},{default:n(()=>[be]),_:1})]),_:1})]),_:1})),[[I]])],8,ge)]),_:1})):b("",!0),e.Announce.pay?(o(),w(B,{key:1},[t(x,{inset:""}),t(i,{class:"text-body2 text-center"},{default:n(()=>[e.Announce.pay===3&&!e.Announce.complited&&e.Announce.ticketLink?(o(),r(H,{key:0,label:"\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442",href:e.Announce.ticketLink},null,8,["href"])):(o(),w(B,{key:1},[d(_(z()),1)],64))]),_:1})],64)):b("",!0),t(x,{inset:""}),t(i,{class:"text-body2 text-center"},{default:n(()=>[d(" \u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440 - "),he,d(". ")]),_:1}),C(S)?(o(),w(B,{key:2},[A.value.Poster.exist?b("",!0):(o(),r(i,{key:0,class:"text-body2 text-center danger"},{default:n(()=>[d(" \u0410\u0444\u0438\u0448\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430 ")]),_:1})),t(i,null,{default:n(()=>[t(te,{modelValue:A.value.isShow,"onUpdate:modelValue":[c[0]||(c[0]=v=>A.value.isShow=v),c[1]||(c[1]=v=>M(0))],label:"\u0432\u043A\u043B",color:"green","checked-icon":"check","unchecked-icon":"clear"},{default:n(()=>[t(oe,null,{default:n(()=>[d("\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,null,{default:n(()=>[t(ie,{onOnOk:j,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",color:"red",title:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u043D\u043E\u043D\u0441\u0430",message:`
          \u0411\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C \u043E\u0431 \u0430\u043D\u043E\u043D\u0441\u0435 \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043D\u0435\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.
          <br><span style='color: red'>
          \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.</span><br>
          \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C?`})]),_:1})],64)):b("",!0)]),_:1})):b("",!0)}}};var Qe=ne(ye,[["__scopeId","data-v-db9d455e"]]);export{Qe as A};
