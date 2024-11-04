import{V as K,c as M,h as Y,ac as Z,r as b,m as l,n as c,z as uu,d as eu,i as nu,o as au,J as tu,u as C,p as e,v as ou,l as i,f as u,ax as B,q as s,t as A,ak as $,y as F,x as m,C as v,B as Q,F as y,ay as lu,al as T}from"./index.657dc795.js";import{b as I,Q as d}from"./QImg.1f2b649a.js";import{Q as D}from"./QItemLabel.5c785c97.js";import{Q as ru}from"./QTooltip.0324dc43.js";import{u as H,b as iu,c as su,e as V}from"./myFuncts.c8ae621f.js";import{_ as du}from"./BtnDelete.cb9daf22.js";import{b as cu}from"./axios.593b3544.js";import{m as L,S as fu}from"./announce.c3870e7c.js";import{H as mu}from"./hall.f5f7c7d9.js";import{S as U}from"./img.e1c068be.js";import{_ as pu}from"./SketchImg.20e10eb2.js";import{_ as gu}from"./plugin-vue_export-helper.21dcd24c.js";const ku=["top","middle","bottom"];var x=K({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:n=>ku.includes(n)}},setup(n,{slots:_}){const h=M(()=>n.align!==void 0?{verticalAlign:n.align}:null),r=M(()=>{const S=n.outline===!0&&n.color||n.textColor;return`q-badge flex inline items-center no-wrap q-badge--${n.multiLine===!0?"multi":"single"}-line`+(n.outline===!0?" q-badge--outline":n.color!==void 0?` bg-${n.color}`:"")+(S!==void 0?` text-${S}`:"")+(n.floating===!0?" q-badge--floating":"")+(n.rounded===!0?" q-badge--rounded":"")+(n.transparent===!0?" q-badge--transparent":"")});return()=>Y("div",{class:r.value,style:h.value,role:"status","aria-label":n.label},Z(_.default,n.label!==void 0?[n.label]:[]))}});const vu={__name:"DialogConfirm",props:{color:b({}),label:b({}),message:b({}),title:b({})},emits:["onOk","Cancel","Dismiss"],setup(n,{emit:_}){const h=H(),r=_;function S(E,p){h.dialog({title:p,message:E,cancel:!0,persistent:!0,html:!0,dark:!0}).onOk(()=>{}).onOk(()=>{r("onOk")}).onCancel(()=>{r("Cancel")}).onDismiss(()=>{r("Dismiss")})}return(E,p)=>(l(),c(uu,{label:n.label,color:n.color,onClick:p[0]||(p[0]=w=>S(n.message,n.title))},null,8,["label","color"]))}};const yu={class:"delBtnArea"},Bu={class:"mapLink"},bu=["innerHTML"],Eu=["innerHTML"],Cu=eu({__name:"AnnounceCard",props:{announce:{},pwUrl:{},compact:{type:Boolean}},emits:["newAnnounce","IamDeleted","changeShow","delSketch"],setup(n,{expose:_,emit:h}){const r=H(),E=nu("editModes").announce,p=h,w=b(null),q=M(()=>mu.findById(o.announce.hallId));function N(){return`https://radario.ru/buy-tickets/${o.announce.radarioEventId}`}_({saveData:j});const z=b(["","","\u0412\u0445\u043E\u0434 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439","\u0411\u0438\u043B\u0435\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435","\u0412\u0445\u043E\u0434 \u043F\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C","\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430"]),o=n,g=b(o.announce);function R(){if(o.pwUrl)return o.pwUrl;let a=r.platform.is.mobile?1080:480;return o.announce.sketch?U.getSrc(o.announce.sketch.md5,o.announce.sketch.ext,a):U.defaultUrl}function j(){L.save(r,o.announce)}async function G(){await L.del(r,o.announce.id)&&p("IamDeleted")}async function J(){await L.hideOrShow(r,g.value.id,g.value.isShow)?p("changeShow",g.value.id):g.value.isShow=!g.value.isShow}function P(){return o.announce.pay?o.announce.pay===3&&o.announce.completed?"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430":z.value[o.announce.pay]:""}async function W(){await fu.unlink(r,o.announce.id)&&p("delSketch",o.announce.id)}function X(){var t;if(!((t=o.announce)!=null&&t.radarioEventId)||o.announce.completed)return;cu.create().get(N(),{params:{distributionType:"api",skipEventsInGroup:!0}}).then(k=>{var f;(f=k==null?void 0:k.data)!=null&&f.result,console.log("radario loaded"),w.value=k.data.event.ticketCount}).catch(k=>{r.notify(iu(k,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F \u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C."))})}return au(()=>{o.announce.completed===!1&&X()}),(a,t)=>{const k=tu("router-link");return a.announce&&(a.announce.isShow||C(E))?(l(),c(ou,{key:0,square:"",class:"eventbox tdno",separator:""},{default:e(()=>[u(k,{to:"/announce/"+a.announce.id},{default:e(()=>[B("div",yu,[C(E)&&!a.pwUrl?(l(),c(du,{key:0,title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437",tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437","throw-confirm":"",danger:"",onOnOk:t[0]||(t[0]=f=>W())})):i("",!0)]),u(pu,{url:R()},null,8,["url"])]),_:1},8,["to"]),u(m,{color:"info","expand-separator":""},{default:e(()=>[a.announce.completed===!1?(l(),c(x,{key:0,class:"absolute bage",color:"green-6",rounded:"",transparent:""},{default:e(()=>t[3]||(t[3]=[s(" \u0421\u043A\u043E\u0440\u043E ")])),_:1})):i("",!0),a.announce.age?(l(),c(x,{key:1,rounded:"",style:{"background-color":"orange"},floating:""},{default:e(()=>[s(A(a.announce.age+"+"),1)]),_:1})):i("",!0),$((l(),c(I,{dense:""},{default:e(()=>[u(d,{avatar:""},{default:e(()=>[u(F,{name:"schedule"})]),_:1}),u(d,null,{default:e(()=>[u(D,{caption:""},{default:e(()=>[s(A(C(su)(g.value.eventTime)),1)]),_:1})]),_:1})]),_:1})),[[T]]),$((l(),c(I,{clickable:"",href:q.value.getMapHref(),target:"_blank",dense:""},{default:e(()=>[u(d,{avatar:""},{default:e(()=>[u(F,{name:"place"})]),_:1}),u(d,null,{default:e(()=>[u(D,{caption:""},{default:e(()=>[B("span",Bu,A(q.value.name),1)]),_:1})]),_:1})]),_:1},8,["href"])),[[T]])]),_:1}),a.compact?i("",!0):(l(),v(y,{key:0},[u(Q,{inset:""}),u(m,null,{default:e(()=>[B("div",{class:"text-subtitle1 text-center prog-name",innerHTML:a.announce.progName},null,8,bu)]),_:1}),u(m,{class:"text-body2 text-center"},{default:e(()=>[B("div",{innerHTML:a.announce.sdescr},null,8,Eu)]),_:1}),u(m,{class:"space"},{default:e(()=>t[4]||(t[4]=[B("div",null,null,-1)])),_:1}),u(Q,{inset:""}),a.announce.youtubeId?(l(),c(m,{key:0},{default:e(()=>[$((l(),c(I,{clickable:"",href:"https://www.youtube.com/watch?v="+a.announce.youtubeId,target:"_blank"},{default:e(()=>[u(d,{avatar:""},{default:e(()=>[u(F,{name:"ion-logo-youtube"})]),_:1}),u(d,null,{default:e(()=>[u(D,{caption:""},{default:e(()=>t[5]||(t[5]=[B("span",{class:"mapLink"},"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E",-1)])),_:1})]),_:1})]),_:1},8,["href"])),[[T]])]),_:1})):i("",!0),a.announce.pay?(l(),v(y,{key:1},[u(Q,{inset:""}),u(m,{class:"text-body2 text-center"},{default:e(()=>[[3,4].includes(a.announce.pay)&&!a.announce.completed&&a.announce.ticketLink?(l(),v(y,{key:0},[a.announce.isShowTicketCount&&a.announce.radarioEventId?(l(),v(y,{key:0},[u(I,null,{default:e(()=>[u(d,null,{default:e(()=>{var f,O;return[s(A(`${C(V)((f=w.value)!=null?f:0,["\u041E\u0441\u0442\u0430\u043B\u0441\u044F","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C"])} ${w.value} ${C(V)((O=w.value)!=null?O:0,["\u0431\u0438\u043B\u0435\u0442","\u0431\u0438\u043B\u0435\u0442\u0430","\u0431\u0438\u043B\u0435\u0442\u043E\u0432"])}`),1)]}),_:1})]),_:1}),u(Q,{inset:"",spaced:""})],64)):i("",!0),u(I,{clickable:"",href:a.announce.ticketLink,target:"_blank",dense:"",style:{"text-align":"left"}},{default:e(()=>[a.announce.pay===4?(l(),v(y,{key:0},[u(d,{avatar:""},{default:e(()=>[u(F,{name:"img:/img/uds.svg"})]),_:1}),u(d,null,{default:e(()=>[u(D,null,{default:e(()=>t[6]||(t[6]=[s("\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439")])),_:1})]),_:1})],64)):i("",!0),a.announce.pay===3?(l(),v(y,{key:1},[u(d,{avatar:""},{default:e(()=>[u(F,{name:"shopping_cart"})]),_:1}),u(d,null,{default:e(()=>[u(D,null,{default:e(()=>t[7]||(t[7]=[s("\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442")])),_:1}),a.announce.isPushkin?(l(),c(D,{key:0,caption:""},{default:e(()=>t[8]||(t[8]=[s("+ \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043F\u043E \u043F\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0435")])),_:1})):i("",!0)]),_:1})],64)):i("",!0)]),_:1},8,["href"])],64)):(l(),v(y,{key:1},[s(A(P()),1)],64))]),_:1})],64)):i("",!0),u(Q,{inset:""}),u(m,{class:"text-body2 text-center"},{default:e(()=>t[9]||(t[9]=[s(" X\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440 - "),B("b",null,"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D",-1),s(". ")])),_:1}),C(E)?(l(),v(y,{key:2},[u(m,null,{default:e(()=>[u(lu,{modelValue:g.value.isShow,"onUpdate:modelValue":[t[1]||(t[1]=f=>g.value.isShow=f),t[2]||(t[2]=f=>J())],label:"\u0432\u043A\u043B",color:"green","checked-icon":"check","unchecked-icon":"clear"},{default:e(()=>[u(ru,null,{default:e(()=>t[10]||(t[10]=[s("\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")])),_:1})]),_:1},8,["modelValue"])]),_:1}),u(m,null,{default:e(()=>[u(vu,{onOnOk:G,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",color:"red",title:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u043D\u043E\u043D\u0441\u0430",message:`
          \u0411\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C \u043E\u0431 \u0430\u043D\u043E\u043D\u0441\u0435 \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043D\u0435\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.
          <br><span style='color: red'>
          \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.</span><br>
          \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C?`})]),_:1})],64)):i("",!0)],64))]),_:1})):i("",!0)}}});var Mu=gu(Cu,[["__scopeId","data-v-2bb85d6a"]]);export{Mu as A};
