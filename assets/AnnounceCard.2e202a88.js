import{a as K,b as B,Q as s}from"./QImg.da576236.js";import{V as Y,c as V,h as Z,ab as ee,r as h,m as o,n as d,A as ne,i as te,o as ae,J as le,v as C,q as t,x as oe,l as u,f as n,ax as v,t as c,u as I,ak as L,z as $,y as m,D as y,C as T,F as b,ay as ue,al as U}from"./index.e7a4ac85.js";import{Q as p}from"./QItemLabel.0376b164.js";import{Q as ie}from"./QTooltip.9fa97258.js";import{u as N}from"./use-quasar.b2ee9ea6.js";import{b as re,c as se,e as H,i as ce}from"./myFuncts.c18e673c.js";import{_ as de}from"./BtnDelete.70794f6e.js";import{b as fe}from"./axios.5c9aa56c.js";import{m as q}from"./entry.245f8c7b.js";import{_ as me}from"./plugin-vue_export-helper.21dcd24c.js";const ge=["top","middle","bottom"];var E=Y({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ge.includes(e)}},setup(e,{slots:x}){const Q=V(()=>e.align!==void 0?{verticalAlign:e.align}:null),w=V(()=>{const i=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(i!==void 0?` text-${i}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>Z("div",{class:w.value,style:Q.value,role:"status","aria-label":e.label},ee(x.default,e.label!==void 0?[e.label]:[]))}});const ke={__name:"DialogConfirm",props:{color:h({}),label:h({}),message:h({}),title:h({})},emits:["onOk","Cancel","Dismiss"],setup(e,{emit:x}){const Q=N(),w=x;function i(A,g){Q.dialog({title:g,message:A,cancel:!0,persistent:!0,html:!0,dark:!0}).onOk(()=>{}).onOk(()=>{w("onOk")}).onCancel(()=>{w("Cancel")}).onDismiss(()=>{w("Dismiss")})}return(A,g)=>(o(),d(ne,{label:e.label,color:e.color,onClick:g[0]||(g[0]=D=>i(e.message,e.title))},null,8,["label","color"]))}};class ve{static getMapUrl(x){return`https://yandex.ru/maps/org/${x}`}}const ye={class:"delBtnArea"},be={class:"mapLink"},he=["innerHTML"],xe=["innerHTML"],we={__name:"AnnounceCard",props:{announce:h(!1),pwUrl:String,compact:{type:Boolean,required:!1,default:!1}},emits:["newAnnounce","IamDeleted","changeShow","delSketch"],setup(e,{expose:x,emit:Q}){const w=String("https://sakh-orch.ru/api/"),i=N(),g=te("editModes").announce,D=Q,M=h(null);function _(){return`https://radario.ru/buy-tickets/${l.announce.radarioEventId}`}x({saveData:R});const z=h(["","","\u0412\u0445\u043E\u0434 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439","\u0411\u0438\u043B\u0435\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435","\u0412\u0445\u043E\u0434 \u043F\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C","\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430"]),l=e,k=h(l.announce);function F(){if(l.pwUrl)return l.pwUrl;let S=i.platform.is.mobile?1080:480;return l.announce.sketch?ce(w,l.announce.sketch.md5,l.announce.sketch.ext,S):"/img/news/default_sketch.svg"}function R(){q.save(i,l.announce)}async function j(){await q.del(i,l.announce.id)&&D("IamDeleted")}async function G(){await q.hideOrShow(i,k.value.id,k.value.isShow)?D("changeShow",k.value.id):k.value.isShow=!k.value.isShow}function J(){return l.announce.pay?l.announce.pay===3&&l.announce.completed?"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430":z.value[l.announce.pay]:""}async function P(){await q.delSketch(i,l.announce.id)&&D("delSketch",l.announce.id)}function W(){var a;if(!((a=l.announce)!=null&&a.radarioEventId)||l.announce.completed)return;fe.create().get(_(),{params:{distributionType:"api",skipEventsInGroup:!0}}).then(r=>{var f;(f=r==null?void 0:r.data)!=null&&f.result,console.log("radario loaded"),M.value=r.data.event.ticketCount}).catch(r=>{i.notify(re(r,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F \u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C."))})}function X(){var r;const S=l.announce.Hall.suggest,a=(r=S==null?void 0:S.oid)!=null?r:0;return ve.getMapUrl(a)}return ae(()=>{l.announce.completed===!1&&W()}),(S,a)=>{const r=le("router-link");return e.announce&&(e.announce.isShow||C(g))?(o(),d(oe,{key:0,square:"",class:"eventbox tdno",separator:""},{default:t(()=>[n(r,{to:"/announce/"+e.announce.id},{default:t(()=>[v("div",ye,[C(g)&&!e.pwUrl?(o(),d(de,{key:0,title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437",tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437","throw-confirm":"",danger:"",onOnOk:a[0]||(a[0]=f=>P())})):u("",!0)]),n(K,{ratio:16/9,src:F(),fit:"fill"},{error:t(()=>a[3]||(a[3]=[v("img",{src:"/img/news/default_sketch.svg"},null,-1)])),_:1},8,["src"])]),_:1},8,["to"]),n(m,{color:"info","expand-separator":""},{default:t(()=>[e.announce.completed===!1?(o(),d(E,{key:0,class:"absolute bage",color:"green-6",rounded:"",transparent:""},{default:t(()=>a[4]||(a[4]=[c(" \u0421\u043A\u043E\u0440\u043E ")])),_:1})):u("",!0),e.announce.age?(o(),d(E,{key:1,rounded:"",style:{"background-color":"orange"},floating:""},{default:t(()=>[c(I(e.announce.age+"+"),1)]),_:1})):u("",!0),L((o(),d(B,{dense:""},{default:t(()=>[n(s,{avatar:""},{default:t(()=>[n($,{name:"schedule"})]),_:1}),n(s,null,{default:t(()=>[n(p,{caption:""},{default:t(()=>[c(I(C(se)(k.value.eventTime)),1)]),_:1})]),_:1})]),_:1})),[[U]]),L((o(),d(B,{clickable:"",href:X(),target:"_blank",dense:""},{default:t(()=>[n(s,{avatar:""},{default:t(()=>[n($,{name:"place"})]),_:1}),n(s,null,{default:t(()=>[n(p,{caption:""},{default:t(()=>[v("span",be,I(e.announce.Hall.name),1)]),_:1})]),_:1})]),_:1},8,["href"])),[[U]])]),_:1}),e.compact?u("",!0):(o(),y(b,{key:0},[n(T,{inset:""}),n(m,null,{default:t(()=>[v("div",{class:"text-subtitle1 text-center prog-name",innerHTML:e.announce.progName},null,8,he)]),_:1}),n(m,{class:"text-body2 text-center"},{default:t(()=>[v("div",{innerHTML:e.announce.sdescr},null,8,xe)]),_:1}),n(m,{class:"space"},{default:t(()=>a[5]||(a[5]=[v("div",null,null,-1)])),_:1}),n(T,{inset:""}),e.announce.youtubeId?(o(),d(m,{key:0},{default:t(()=>[L((o(),d(B,{clickable:"",href:"https://www.youtube.com/watch?v="+e.announce.youtubeId,target:"_blank"},{default:t(()=>[n(s,{avatar:""},{default:t(()=>[n($,{name:"ion-logo-youtube"})]),_:1}),n(s,null,{default:t(()=>[n(p,{caption:""},{default:t(()=>a[6]||(a[6]=[v("span",{class:"mapLink"},"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E",-1)])),_:1})]),_:1})]),_:1},8,["href"])),[[U]])]),_:1})):u("",!0),e.announce.pay?(o(),y(b,{key:1},[n(T,{inset:""}),n(m,{class:"text-body2 text-center"},{default:t(()=>[[3,4].includes(e.announce.pay)&&!e.announce.completed&&e.announce.ticketLink?(o(),y(b,{key:0},[e.announce.isShowTicketCount&&e.announce.radarioEventId?(o(),y(b,{key:0},[n(B,null,{default:t(()=>[n(s,null,{default:t(()=>{var f,O;return[c(I(`${C(H)((f=M.value)!=null?f:0,["\u041E\u0441\u0442\u0430\u043B\u0441\u044F","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C"])} ${M.value} ${C(H)((O=M.value)!=null?O:0,["\u0431\u0438\u043B\u0435\u0442","\u0431\u0438\u043B\u0435\u0442\u0430","\u0431\u0438\u043B\u0435\u0442\u043E\u0432"])}`),1)]}),_:1})]),_:1}),n(T,{inset:"",spaced:""})],64)):u("",!0),n(B,{clickable:"",href:e.announce.ticketLink,target:"_blank",dense:"",style:{"text-align":"left"}},{default:t(()=>[e.announce.pay===4?(o(),y(b,{key:0},[n(s,{avatar:""},{default:t(()=>[n($,{name:"img:/img/uds.svg"})]),_:1}),n(s,null,{default:t(()=>[n(p,null,{default:t(()=>a[7]||(a[7]=[c("\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439")])),_:1})]),_:1})],64)):u("",!0),e.announce.pay===3?(o(),y(b,{key:1},[n(s,{avatar:""},{default:t(()=>[n($,{name:"shopping_cart"})]),_:1}),n(s,null,{default:t(()=>[n(p,null,{default:t(()=>a[8]||(a[8]=[c("\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442")])),_:1}),e.announce.isPushkin?(o(),d(p,{key:0,caption:""},{default:t(()=>a[9]||(a[9]=[c("+ \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043F\u043E \u043F\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0435")])),_:1})):u("",!0)]),_:1})],64)):u("",!0)]),_:1},8,["href"])],64)):(o(),y(b,{key:1},[c(I(J()),1)],64))]),_:1})],64)):u("",!0),n(T,{inset:""}),n(m,{class:"text-body2 text-center"},{default:t(()=>a[10]||(a[10]=[c(" X\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440 - "),v("b",null,"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D",-1),c(". ")])),_:1}),C(g)?(o(),y(b,{key:2},[n(m,null,{default:t(()=>[n(ue,{modelValue:k.value.isShow,"onUpdate:modelValue":[a[1]||(a[1]=f=>k.value.isShow=f),a[2]||(a[2]=f=>G())],label:"\u0432\u043A\u043B",color:"green","checked-icon":"check","unchecked-icon":"clear"},{default:t(()=>[n(ie,null,{default:t(()=>a[11]||(a[11]=[c("\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")])),_:1})]),_:1},8,["modelValue"])]),_:1}),n(m,null,{default:t(()=>[n(ke,{onOnOk:j,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",color:"red",title:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u043D\u043E\u043D\u0441\u0430",message:`
          \u0411\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C \u043E\u0431 \u0430\u043D\u043E\u043D\u0441\u0435 \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043D\u0435\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.
          <br><span style='color: red'>
          \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.</span><br>
          \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C?`})]),_:1})],64)):u("",!0)],64))]),_:1})):u("",!0)}}};var qe=me(we,[["__scopeId","data-v-0fc91918"]]);export{qe as A};