import{Q as Y}from"./QImg.0f12cfff.js";import{V as Z,c as V,h as ee,ab as te,r as w,m as i,n as g,B as ne,i as ae,o as le,J as oe,x as C,q as a,y as ue,l as d,f as n,ax as h,t as f,v as I,ak as L,A as $,z as k,E as b,D as T,F as A,ay as ie,al as U}from"./index.71bc55bd.js";import{a as D,Q as m}from"./QItem.adc0c735.js";import{Q}from"./QItemLabel.622a6884.js";import{Q as re}from"./QTooltip.e861268c.js";import{u as _}from"./use-quasar.dd0d0041.js";import{a as E,b as ce}from"./axios.a7f12f6b.js";import{a as M,n as q,b as de,c as se,e as H,i as fe}from"./myFuncts.c043710e.js";import{_ as me}from"./BtnDelete.a20f6780.js";import{_ as ge}from"./plugin-vue_export-helper.21dcd24c.js";const ke=["top","middle","bottom"];var N=Z({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ke.includes(e)}},setup(e,{slots:x}){const p=V(()=>e.align!==void 0?{verticalAlign:e.align}:null),s=V(()=>{const c=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(c!==void 0?` text-${c}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>ee("div",{class:s.value,style:p.value,role:"status","aria-label":e.label},te(x.default,e.label!==void 0?[e.label]:[]))}});const ve={__name:"DialogConfirm",props:{color:w({}),label:w({}),message:w({}),title:w({})},emits:["onOk","Cancel","Dismiss"],setup(e,{emit:x}){const p=_(),s=x;function c(S,v){p.dialog({title:v,message:S,cancel:!0,persistent:!0,html:!0,dark:!0}).onOk(()=>{}).onOk(()=>{s("onOk")}).onCancel(()=>{s("Cancel")}).onDismiss(()=>{s("Dismiss")})}return(S,v)=>(i(),g(ne,{label:e.label,color:e.color,onClick:v[0]||(v[0]=B=>c(e.message,e.title))},null,8,["label","color"]))}};class ye{static getMapUrl(x){return`https://yandex.ru/maps/org/${x}`}}const he={class:"delBtnArea"},be={class:"mapLink"},Ae=["innerHTML"],we=["innerHTML"],xe={__name:"AnnounceCard",props:{Announce:w(!1),pwUrl:String,compact:{type:Boolean,required:!1,default:!1}},emits:["newAnnounce","IamDeleted","changeShow","delSketch"],setup(e,{expose:x,emit:p}){const s=String("https://api.sakh-orch.ru/"),c=_(),S=ae("announceEditMode"),v=p,B=w(null);function z(){return`https://radario.ru/buy-tickets/${u.Announce.radarioEventId}`}x({saveData:j});const F=w(["","","\u0412\u0445\u043E\u0434 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439","\u0411\u0438\u043B\u0435\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435","\u0412\u0445\u043E\u0434 \u043F\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C","\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430"]),u=e,y=w(u.Announce);function R(){if(u.pwUrl)return u.pwUrl;let l=c.platform.is.mobile?1080:480;return u.Announce.sketch?fe(s,u.Announce.sketch.md5,u.Announce.sketch.ext,l):"/img/news/default_sketch.svg"}function j(){E.post(s+"api/event/announce.php",{params:{method:"update",announce:u.Announce}}).then(l=>{var t,o;c.notify(M((o=(t=l==null?void 0:l.data)==null?void 0:t.result)!=null?o:""))}).catch(l=>{c.notify(q(l))})}function G(){E.post(s+"api/event/announce.php",{params:{method:"del",id:u.Announce.id}}).then(l=>{var t,o,r;if(!((t=l==null?void 0:l.data)!=null&&t.result))throw new Error;c.notify(M((r=(o=l==null?void 0:l.data)==null?void 0:o.result)!=null?r:null)),v("IamDeleted")}).catch(l=>{c.notify(q(l))})}function J(){E.post(s+"api/event/announce.php",{params:{method:y.value.isShow?"show":"hide",announceId:y.value.id}}).then(l=>{var t;if(!((t=l==null?void 0:l.data)!=null&&t.result))throw new Error;v("changeShow",y.value.id)}).catch(l=>{c.notify(q(l)),y.value.isShow=!y.value.isShow}).finally(()=>{})}function K(){return u.Announce.pay?u.Announce.pay===3&&u.Announce.completed?"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430":F.value[u.Announce.pay]:""}function P(){E.post(s+"api/event/sketch.php",{params:{method:"unlink",id:u.Announce.id}}).then(l=>{var t,o,r;if(!((t=l==null?void 0:l.data)!=null&&t.result))throw new Error;v("delSketch",u.Announce.id),c.notify(M((r=(o=l==null?void 0:l.data)==null?void 0:o.result)!=null?r:""))}).catch(l=>{c.notify(q(l))})}function W(){var t;if(!((t=u.Announce)!=null&&t.radarioEventId)||u.Announce.completed)return;ce.create().get(z(),{params:{distributionType:"api",skipEventsInGroup:!0}}).then(o=>{var r;(r=o==null?void 0:o.data)!=null&&r.result,console.log("radario loaded"),B.value=o.data.event.ticketCount}).catch(o=>{c.notify(de(o,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F \u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C."))})}function X(){var o;const l=u.Announce.Hall.suggest,t=(o=l==null?void 0:l.oid)!=null?o:0;return ye.getMapUrl(t)}return le(()=>{u.Announce.completed===!1&&W()}),(l,t)=>{const o=oe("router-link");return e.Announce&&(e.Announce.isShow||C(S))?(i(),g(ue,{key:0,square:"",class:"eventbox tdno",separator:""},{default:a(()=>[n(o,{to:"/announce/"+e.Announce.id},{default:a(()=>[h("div",he,[C(S)&&!e.pwUrl?(i(),g(me,{key:0,title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437",tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437","throw-confirm":"",onOnOk:t[0]||(t[0]=r=>P())})):d("",!0)]),n(Y,{ratio:16/9,src:R(),fit:"fill"},{error:a(()=>t[3]||(t[3]=[h("img",{src:"/img/news/default_sketch.svg"},null,-1)])),_:1},8,["src"])]),_:1},8,["to"]),n(k,{color:"info","expand-separator":""},{default:a(()=>[e.Announce.completed===!1?(i(),g(N,{key:0,class:"absolute bage",color:"green-6",rounded:"",transparent:""},{default:a(()=>t[4]||(t[4]=[f(" \u0421\u043A\u043E\u0440\u043E ")])),_:1})):d("",!0),e.Announce.age?(i(),g(N,{key:1,rounded:"",style:{"background-color":"orange"},floating:""},{default:a(()=>[f(I(e.Announce.age+"+"),1)]),_:1})):d("",!0),L((i(),g(D,{dense:""},{default:a(()=>[n(m,{avatar:""},{default:a(()=>[n($,{name:"schedule"})]),_:1}),n(m,null,{default:a(()=>[n(Q,{caption:""},{default:a(()=>[f(I(C(se)(y.value.eventTime)),1)]),_:1})]),_:1})]),_:1})),[[U]]),L((i(),g(D,{clickable:"",href:X(),target:"_blank",dense:""},{default:a(()=>[n(m,{avatar:""},{default:a(()=>[n($,{name:"place"})]),_:1}),n(m,null,{default:a(()=>[n(Q,{caption:""},{default:a(()=>[h("span",be,I(e.Announce.Hall.name),1)]),_:1})]),_:1})]),_:1},8,["href"])),[[U]])]),_:1}),e.compact?d("",!0):(i(),b(A,{key:0},[n(T,{inset:""}),n(k,null,{default:a(()=>[h("div",{class:"text-subtitle1 text-center prog-name",innerHTML:e.Announce.progName},null,8,Ae)]),_:1}),n(k,{class:"text-body2 text-center"},{default:a(()=>[h("div",{innerHTML:e.Announce.sdescr},null,8,we)]),_:1}),n(k,{class:"space"},{default:a(()=>t[5]||(t[5]=[h("div",null,null,-1)])),_:1}),n(T,{inset:""}),e.Announce.youtubeId?(i(),g(k,{key:0},{default:a(()=>[L((i(),g(D,{clickable:"",href:"https://www.youtube.com/watch?v="+e.Announce.youtubeId,target:"_blank"},{default:a(()=>[n(m,{avatar:""},{default:a(()=>[n($,{name:"ion-logo-youtube"})]),_:1}),n(m,null,{default:a(()=>[n(Q,{caption:""},{default:a(()=>t[6]||(t[6]=[h("span",{class:"mapLink"},"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E",-1)])),_:1})]),_:1})]),_:1},8,["href"])),[[U]])]),_:1})):d("",!0),e.Announce.pay?(i(),b(A,{key:1},[n(T,{inset:""}),n(k,{class:"text-body2 text-center"},{default:a(()=>[[3,4].includes(e.Announce.pay)&&!e.Announce.completed&&e.Announce.ticketLink?(i(),b(A,{key:0},[e.Announce.isShowTicketCount&&e.Announce.radarioEventId?(i(),b(A,{key:0},[n(D,null,{default:a(()=>[n(m,null,{default:a(()=>{var r,O;return[f(I(`${C(H)((r=B.value)!=null?r:0,["\u041E\u0441\u0442\u0430\u043B\u0441\u044F","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C"])} ${B.value} ${C(H)((O=B.value)!=null?O:0,["\u0431\u0438\u043B\u0435\u0442","\u0431\u0438\u043B\u0435\u0442\u0430","\u0431\u0438\u043B\u0435\u0442\u043E\u0432"])}`),1)]}),_:1})]),_:1}),n(T,{inset:"",spaced:""})],64)):d("",!0),n(D,{clickable:"",href:e.Announce.ticketLink,target:"_blank",dense:"",style:{"text-align":"left"}},{default:a(()=>[e.Announce.pay===4?(i(),b(A,{key:0},[n(m,{avatar:""},{default:a(()=>[n($,{name:"img:/img/uds.svg"})]),_:1}),n(m,null,{default:a(()=>[n(Q,null,{default:a(()=>t[7]||(t[7]=[f("\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439")])),_:1})]),_:1})],64)):d("",!0),e.Announce.pay===3?(i(),b(A,{key:1},[n(m,{avatar:""},{default:a(()=>[n($,{name:"shopping_cart"})]),_:1}),n(m,null,{default:a(()=>[n(Q,null,{default:a(()=>t[8]||(t[8]=[f("\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442")])),_:1}),e.Announce.isPushkin?(i(),g(Q,{key:0,caption:""},{default:a(()=>t[9]||(t[9]=[f("+ \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043F\u043E \u043F\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0435")])),_:1})):d("",!0)]),_:1})],64)):d("",!0)]),_:1},8,["href"])],64)):(i(),b(A,{key:1},[f(I(K()),1)],64))]),_:1})],64)):d("",!0),n(T,{inset:""}),n(k,{class:"text-body2 text-center"},{default:a(()=>t[10]||(t[10]=[f(" \u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440 - "),h("b",null,"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D",-1),f(". ")])),_:1}),C(S)?(i(),b(A,{key:2},[n(k,null,{default:a(()=>[n(ie,{modelValue:y.value.isShow,"onUpdate:modelValue":[t[1]||(t[1]=r=>y.value.isShow=r),t[2]||(t[2]=r=>J())],label:"\u0432\u043A\u043B",color:"green","checked-icon":"check","unchecked-icon":"clear"},{default:a(()=>[n(re,null,{default:a(()=>t[11]||(t[11]=[f("\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")])),_:1})]),_:1},8,["modelValue"])]),_:1}),n(k,null,{default:a(()=>[n(ve,{onOnOk:G,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",color:"red",title:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u043D\u043E\u043D\u0441\u0430",message:`
          \u0411\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C \u043E\u0431 \u0430\u043D\u043E\u043D\u0441\u0435 \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043D\u0435\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.
          <br><span style='color: red'>
          \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.</span><br>
          \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C?`})]),_:1})],64)):d("",!0)],64))]),_:1})):d("",!0)}}};var qe=ge(xe,[["__scopeId","data-v-7308bf04"]]);export{qe as A};
