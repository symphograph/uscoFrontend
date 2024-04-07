import{c as q,r as n,q as s,t as b,f as l,W as O,I as a,a$ as h,H as t,X as i,F as g,U as L,V as m,ax as C,v as V,ay as w,l as T,bh as k,az as $,aa as F,J as A,K as E}from"./index.02309961.js";import{a as N,Q}from"./QItem.ff5a2c80.js";import{Q as d}from"./QItemLabel.e490e797.js";import{Q as J}from"./QList.11a12b8c.js";import{Q as M}from"./QForm.51e3445a.js";import{u as P}from"./use-meta.584d2918.js";import{u as D}from"./use-quasar.00acd95b.js";import{g as R}from"./myFuncts.c6611827.js";import{_ as W}from"./PhoneNumber.9044a974.js";import{_ as B}from"./EMail.2b431917.js";import{_ as X}from"./PageTitle.5ccee82c.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./QToolbarTitle.663f00ae.js";import"./QToolbar.ea283e26.js";import"./QLinearProgress.1af3bfde.js";const I=r=>(A("data-v-c7b836f8"),r=r(),E(),r),H={class:"contentArea"},K={style:{color:"var(--docTitle)"}},Y=I(()=>a("b",null,"\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B",-1)),G=I(()=>a("ul",null,[a("li",null,[a("div",null,"\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A - \u041F\u044F\u0442\u043D\u0438\u0446\u0430"),a("b",null,"9:00 - 17:15")]),a("br"),a("li",null,[a("div",null,"\u0421\u0443\u0431\u0431\u043E\u0442\u0430 - \u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435"),m(" \u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u043D\u0438 ")])],-1)),ee=[Y,G],le=I(()=>a("div",{id:"map"},[a("iframe",{src:"https://yandex.ru/map-widget/v1/-/ZU0EaABiTkMFXEJuZWJ4d3phYQA=/?ll=142.727859%2C46.966131&z=19",width:"100%",height:"400",allowfullscreen:"allowfullscreen"})],-1)),ae={class:"q-pa-md"},te={__name:"ContactPage",setup(r){const x=R("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");P(x);const c=D(),p=q(()=>c.platform.is.desktop?"contentBlock":"contentBlock-m"),f=n(null),_=n(null),v=n(null),u=n(!1),S=n([{id:1,jobName:"\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440",fullFIO:"\u041A\u0438\u0440\u0438\u043B\u043B\u043E\u0432\u0430 \u041C\u0430\u0439\u044F \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u043D\u0430",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"},{type:"phoneNumber",value:"+7-963-289-23-16"}]},{id:2,jobName:"\u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440",fullFIO:"\u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D \u0422\u0438\u0433\u0440\u0430\u043D \u0421\u0443\u0440\u0435\u043D\u043E\u0432\u0438\u0447",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"}]},{id:3,jobName:"\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"}]},{id:4,jobName:"\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u043A\u0430\u0434\u0440\u0430\u043C",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"}]}]);function z(){c.notify({color:"green-4",textColor:"white",icon:"cloud_done",timeout:300,position:"center",message:"\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"})}function U(){u.value!==!0?c.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u0438\u043C\u0438\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."}):z()}function j(){f.value=null,_.value=null,v.value=null,u.value=!1}return(oe,o)=>(s(),b(g,null,[l(X,{title:O(x).title},null,8,["title"]),a("div",H,[a("div",{class:h(p.value)},[l(J,{separator:""},{default:t(()=>[l(N,{clickable:"",href:"#map"},{default:t(()=>[l(Q,{avatar:""},{default:t(()=>[l(L,{name:"location_on"})]),_:1}),l(Q,null,{default:t(()=>[l(d,null,{default:t(()=>[m(" \u0433. \u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A, \u0443\u043B.\u041B\u0435\u043D\u0438\u043D\u0430, \u0434. 156 ")]),_:1})]),_:1})]),_:1}),(s(!0),b(g,null,C(S.value,e=>(s(),V(N,{key:e.id},{default:t(()=>[l(Q,null,{default:t(()=>[l(d,{caption:""},{default:t(()=>[m(w(e.jobName),1)]),_:2},1024),(e==null?void 0:e.fullFIO)&&(e==null?void 0:e.fullFIO.length)?(s(),V(d,{key:0},{default:t(()=>[a("b",null,[a("span",K,w(e.fullFIO),1)])]),_:2},1024)):T("",!0),(s(!0),b(g,null,C(e.contacts,y=>(s(),V(W,{key:e.id+"_"+y.value,phoneNumber:y.value},null,8,["phoneNumber"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})],2),l(i,{spaced:"2em"}),a("div",{class:h(p.value)},ee,2),l(i,{spaced:"2em"}),l(B,{email:"mbu-gko@yandex.ru"}),l(B,{email:"yusgo.mbuyusko@sakhalin.gov.ru"}),l(i,{spaced:"2em"}),le,l(i,{spaced:"2em"}),a("div",{class:h(p.value)},[a("div",ae,[l(M,{onSubmit:U,onReset:j,class:"q-gutter-md"},{default:t(()=>[l(k,{filled:"",modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e),label:"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",hint:"(\u0424\u0418\u041E)","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"]},null,8,["modelValue","rules"]),l(k,{filled:"",modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=e=>_.value=e),label:"mail@example.com",hint:"\u0412\u0430\u0448 email","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"]},null,8,["modelValue","rules"]),l(k,{filled:"",modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=e=>v.value=e),type:"textarea",label:"\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C"]},null,8,["modelValue","rules"]),l($,{modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=e=>u.value=e),label:"\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"},null,8,["modelValue"]),a("div",null,[l(F,{label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",disable:!u.value,type:"submit",color:"primary"},null,8,["disable"]),l(F,{label:"\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})]),l(N,{clickable:"",to:"/pdn"},{default:t(()=>[l(d,{caption:""},{default:t(()=>[m(' *\u041D\u0430\u0436\u0438\u043C\u0430\u044F "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", \u0412\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ')]),_:1})]),_:1})],2)])],64))}};var Ve=Z(te,[["__scopeId","data-v-c7b836f8"]]);export{Ve as default};
