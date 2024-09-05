import{Q as Y}from"./QImg.8430c3f7.js";import{V as Z,c as M,h as ee,ab as te,r as v,m as o,n as k,B as ne,u as ae,I as le,i as oe,o as ue,J as ie,x as S,q as a,y as re,l as m,f as n,ax as h,t as s,v as p,ak as O,A as I,z as g,E as A,D as $,F as w,ay as ce,al as E}from"./index.bd97e9c1.js";import{a as D,Q as f}from"./QItem.42e8eee9.js";import{Q as C}from"./QItemLabel.2de18a52.js";import{Q as de}from"./QTooltip.0e7277dc.js";import{u as R}from"./use-quasar.2b1b4907.js";import{a as L,b as se}from"./axios.ad5085a6.js";import{a as U,n as T,b as fe,c as H,i as me}from"./myFuncts.eda7a4d2.js";import{_ as ge}from"./BtnDelete.5480a871.js";import{_ as ke}from"./plugin-vue_export-helper.21dcd24c.js";const ve=["top","middle","bottom"];var N=Z({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ve.includes(e)}},setup(e,{slots:Q}){const B=M(()=>e.align!==void 0?{verticalAlign:e.align}:null),d=M(()=>{const i=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(i!==void 0?` text-${i}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>ee("div",{class:d.value,style:B.value,role:"status","aria-label":e.label},te(Q.default,e.label!==void 0?[e.label]:[]))}});const ye={__name:"DialogConfirm",props:{color:v({}),label:v({}),message:v({}),title:v({})},emits:["onOk","Cancel","Dismiss"],setup(e,{emit:Q}){const B=R(),d=Q;function i(x,y){B.dialog({title:y,message:x,cancel:!0,persistent:!0,html:!0,dark:!0}).onOk(()=>{}).onOk(()=>{d("onOk")}).onCancel(()=>{d("Cancel")}).onDismiss(()=>{d("Dismiss")})}return(x,y)=>(o(),k(ne,{label:e.label,color:e.color,onClick:y[0]||(y[0]=V=>i(e.message,e.title))},null,8,["label","color"]))}};const be={class:"delBtnArea"},he={class:"mapLink"},Ae=["innerHTML"],we=["innerHTML"],xe={__name:"AnnounceCard",props:{Announce:v(!1),pwUrl:String,compact:{type:Boolean,required:!1,default:!1}},emits:["newAnnounce","IamDeleted","changeShow","delSketch"],setup(e,{expose:Q,emit:B}){const d=String("https://api.sakh-orch.ru/"),i=R();ae(),le();const x=oe("editMode"),y=B,V=v(2198241),q=v(null);function z(){return`https://radario.ru/buy-tickets/${V.value}`}Q({saveData:G});const F=v(["","","\u0412\u0445\u043E\u0434 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439","\u0411\u0438\u043B\u0435\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435","\u0412\u0445\u043E\u0434 \u043F\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C","\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430"]),u=e,b=v(u.Announce);function j(){if(u.pwUrl)return u.pwUrl;let l=i.platform.is.mobile?1080:480;return u.Announce.sketch?me(d,u.Announce.sketch.md5,u.Announce.sketch.ext,l):"error.err"}function G(){L.post(d+"api/event/announce.php",{params:{method:"update",announce:u.Announce}}).then(l=>{var t,r;i.notify(U((r=(t=l==null?void 0:l.data)==null?void 0:t.result)!=null?r:""))}).catch(l=>{i.notify(T(l))})}function J(){L.post(d+"api/event/announce.php",{params:{method:"del",id:u.Announce.id}}).then(l=>{var t,r,c;if(!((t=l==null?void 0:l.data)!=null&&t.result))throw new Error;i.notify(U((c=(r=l==null?void 0:l.data)==null?void 0:r.result)!=null?c:null)),y("IamDeleted")}).catch(l=>{i.notify(T(l))})}function K(){L.post(d+"api/event/announce.php",{params:{method:b.value.isShow?"show":"hide",announceId:b.value.id}}).then(l=>{var t;if(!((t=l==null?void 0:l.data)!=null&&t.result))throw new Error;y("changeShow",b.value.id)}).catch(l=>{i.notify(T(l)),b.value.isShow=!b.value.isShow}).finally(()=>{})}function P(){return u.Announce.pay?u.Announce.pay===3&&u.Announce.completed?"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430":F.value[u.Announce.pay]:""}function W(){L.post(d+"api/event/sketch.php",{params:{method:"unlink",id:u.Announce.id}}).then(l=>{var t,r,c;if(!((t=l==null?void 0:l.data)!=null&&t.result))throw new Error;y("delSketch",u.Announce.id),i.notify(U((c=(r=l==null?void 0:l.data)==null?void 0:r.result)!=null?c:""))}).catch(l=>{i.notify(T(l))})}function X(){se.create().get(z(),{params:{distributionType:"api",skipEventsInGroup:!0}}).then(t=>{var r;(r=t==null?void 0:t.data)!=null&&r.result,q.value=t.data.event.ticketCount}).catch(t=>{i.notify(T(t))})}return ue(()=>{u.Announce.completed===!1&&X()}),(l,t)=>{const r=ie("router-link");return e.Announce&&(e.Announce.isShow||S(x))?(o(),k(re,{key:0,square:"",class:"eventbox tdno",separator:""},{default:a(()=>[n(r,{to:"/announce/"+e.Announce.id},{default:a(()=>[h("div",be,[S(x)&&!e.pwUrl?(o(),k(ge,{key:0,title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437",tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437","throw-confirm":"",onOnOk:t[0]||(t[0]=c=>W())})):m("",!0)]),n(Y,{ratio:16/9,src:j(),fit:"fill"},{error:a(()=>t[3]||(t[3]=[h("img",{src:"/img/news/default_sketch.svg"},null,-1)])),_:1},8,["src"])]),_:1},8,["to"]),n(g,{color:"info","expand-separator":""},{default:a(()=>[e.Announce.completed===!1?(o(),k(N,{key:0,class:"absolute bage",color:"green-6",rounded:"",transparent:""},{default:a(()=>t[4]||(t[4]=[s(" \u0421\u043A\u043E\u0440\u043E ")])),_:1})):m("",!0),e.Announce.age?(o(),k(N,{key:1,rounded:"",style:{"background-color":"orange"},floating:""},{default:a(()=>[s(p(e.Announce.age+"+"),1)]),_:1})):m("",!0),O((o(),k(D,{dense:""},{default:a(()=>[n(f,{avatar:""},{default:a(()=>[n(I,{name:"schedule"})]),_:1}),n(f,null,{default:a(()=>[n(C,{caption:""},{default:a(()=>[s(p(S(fe)(b.value.eventTime)),1)]),_:1})]),_:1})]),_:1})),[[E]]),O((o(),k(D,{clickable:"",href:e.Announce.Hall.map,target:"_blank",dense:""},{default:a(()=>[n(f,{avatar:""},{default:a(()=>[n(I,{name:"place"})]),_:1}),n(f,null,{default:a(()=>[n(C,{caption:""},{default:a(()=>[h("span",he,p(e.Announce.Hall.name),1)]),_:1})]),_:1})]),_:1},8,["href"])),[[E]])]),_:1}),e.compact?m("",!0):(o(),A(w,{key:0},[n($,{inset:""}),n(g,null,{default:a(()=>[h("div",{class:"text-subtitle1 text-center prog-name",innerHTML:e.Announce.progName},null,8,Ae)]),_:1}),n(g,{class:"text-body2 text-center"},{default:a(()=>[h("div",{innerHTML:e.Announce.sdescr},null,8,we)]),_:1}),n(g,{class:"space"},{default:a(()=>t[5]||(t[5]=[h("div",null,null,-1)])),_:1}),n($,{inset:""}),e.Announce.youtubeId?(o(),k(g,{key:0},{default:a(()=>[O((o(),k(D,{clickable:"",href:"https://www.youtube.com/watch?v="+e.Announce.youtubeId,target:"_blank"},{default:a(()=>[n(f,{avatar:""},{default:a(()=>[n(I,{name:"ion-logo-youtube"})]),_:1}),n(f,null,{default:a(()=>[n(C,{caption:""},{default:a(()=>t[6]||(t[6]=[h("span",{class:"mapLink"},"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E",-1)])),_:1})]),_:1})]),_:1},8,["href"])),[[E]])]),_:1})):m("",!0),e.Announce.pay?(o(),A(w,{key:1},[n($,{inset:""}),n(g,{class:"text-body2 text-center"},{default:a(()=>[[3,4].includes(e.Announce.pay)&&!e.Announce.completed&&e.Announce.ticketLink?(o(),A(w,{key:0},[n(D,null,{default:a(()=>[n(f,null,{default:a(()=>{var c,_;return[s(p(`${S(H)((c=q.value)!=null?c:0,["\u041E\u0441\u0442\u0430\u043B\u0441\u044F","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C","\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C"])} ${q.value} ${S(H)((_=q.value)!=null?_:0,["\u0431\u0438\u043B\u0435\u0442","\u0431\u0438\u043B\u0435\u0442\u0430","\u0431\u0438\u043B\u0435\u0442\u043E\u0432"])}`),1)]}),_:1})]),_:1}),n($,{inset:"",spaced:""}),n(D,{clickable:"",href:e.Announce.ticketLink,target:"_blank",dense:"",style:{"text-align":"left"}},{default:a(()=>[e.Announce.pay===4?(o(),A(w,{key:0},[n(f,{avatar:""},{default:a(()=>[n(I,{name:"img:/img/uds.svg"})]),_:1}),n(f,null,{default:a(()=>[n(C,null,{default:a(()=>t[7]||(t[7]=[s("\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439")])),_:1})]),_:1})],64)):m("",!0),e.Announce.pay===3?(o(),A(w,{key:1},[n(f,{avatar:""},{default:a(()=>[n(I,{name:"shopping_cart"})]),_:1}),n(f,null,{default:a(()=>[n(C,null,{default:a(()=>t[8]||(t[8]=[s("\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442")])),_:1}),n(C,{caption:""},{default:a(()=>t[9]||(t[9]=[s("+ \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043F\u043E \u043F\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0435")])),_:1})]),_:1})],64)):m("",!0)]),_:1},8,["href"])],64)):(o(),A(w,{key:1},[s(p(P()),1)],64))]),_:1})],64)):m("",!0),n($,{inset:""}),n(g,{class:"text-body2 text-center"},{default:a(()=>t[10]||(t[10]=[s(" \u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440 - "),h("b",null,"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D",-1),s(". ")])),_:1}),S(x)?(o(),A(w,{key:2},[n(g,null,{default:a(()=>[n(ce,{modelValue:b.value.isShow,"onUpdate:modelValue":[t[1]||(t[1]=c=>b.value.isShow=c),t[2]||(t[2]=c=>K())],label:"\u0432\u043A\u043B",color:"green","checked-icon":"check","unchecked-icon":"clear"},{default:a(()=>[n(de,null,{default:a(()=>t[11]||(t[11]=[s("\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C")])),_:1})]),_:1},8,["modelValue"])]),_:1}),n(g,null,{default:a(()=>[n(ye,{onOnOk:J,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",color:"red",title:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u043D\u043E\u043D\u0441\u0430",message:`
          \u0411\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C \u043E\u0431 \u0430\u043D\u043E\u043D\u0441\u0435 \u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u043D\u0435\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.
          <br><span style='color: red'>
          \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.</span><br>
          \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C?`})]),_:1})],64)):m("",!0)],64))]),_:1})):m("",!0)}}};var Le=ke(xe,[["__scopeId","data-v-312c85c0"]]);export{Le as A};
