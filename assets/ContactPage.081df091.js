import{c as z,r as n,n as s,q as b,f as l,N as L,H as a,a$ as h,G as t,O as i,F as g,L as U,M as c,aw as w,t as N,ax as C,l as M,bh as k,ay as T,a9 as F,I as $,J as A}from"./index.cd1e76ba.js";import{b as V,Q as I,a as d}from"./QItemLabel.971d5e50.js";import{Q as E}from"./QList.17cc8592.js";import{Q as J}from"./QForm.0b470ce2.js";import{u as P}from"./use-meta.1f2e8af7.js";import{u as D}from"./use-quasar.887a5898.js";import{g as R}from"./myFuncts.9f42497d.js";import{_ as Z}from"./PhoneNumber.aed8c831.js";import{_ as B}from"./EMail.7a457a46.js";import{_ as G}from"./PageTitle.5a1d61af.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import"./QToolbarTitle.943cd697.js";import"./QToolbar.537561d3.js";import"./QLinearProgress.1cc758cb.js";const Q=r=>($("data-v-c7b836f8"),r=r(),A(),r),W={class:"contentArea"},X={style:{color:"var(--docTitle)"}},Y=Q(()=>a("b",null,"\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B",-1)),K=Q(()=>a("ul",null,[a("li",null,[a("div",null,"\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A - \u041F\u044F\u0442\u043D\u0438\u0446\u0430"),a("b",null,"9:00 - 17:15")]),a("br"),a("li",null,[a("div",null,"\u0421\u0443\u0431\u0431\u043E\u0442\u0430 - \u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435"),c(" \u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u043D\u0438 ")])],-1)),ee=[Y,K],le=Q(()=>a("div",{id:"map"},[a("iframe",{src:"https://yandex.ru/map-widget/v1/-/ZU0EaABiTkMFXEJuZWJ4d3phYQA=/?ll=142.727859%2C46.966131&z=19",width:"100%",height:"400",allowfullscreen:"allowfullscreen"})],-1)),ae={class:"q-pa-md"},te={__name:"ContactPage",setup(r){const x=R("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");P(x);const m=D(),p=z(()=>m.platform.is.desktop?"contentBlock":"contentBlock-m"),f=n(null),_=n(null),v=n(null),u=n(!1),S=n([{id:1,jobName:"\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440",fullFIO:"\u041A\u0438\u0440\u0438\u043B\u043B\u043E\u0432\u0430 \u041C\u0430\u0439\u044F \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u043E\u0432\u043D\u0430",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"},{type:"phoneNumber",value:"+7-963-289-23-16"}]},{id:2,jobName:"\u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440",fullFIO:"\u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D \u0422\u0438\u0433\u0440\u0430\u043D \u0421\u0443\u0440\u0435\u043D\u043E\u0432\u0438\u0447",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"}]},{id:3,jobName:"\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"}]},{id:4,jobName:"\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u043A\u0430\u0434\u0440\u0430\u043C",contacts:[{type:"phoneNumber",value:"+7-4242-300-518"}]}]);function O(){m.notify({color:"green-4",textColor:"white",icon:"cloud_done",timeout:300,position:"center",message:"\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"})}function j(){u.value!==!0?m.notify({color:"red-5",textColor:"white",icon:"warning",message:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u0438\u043C\u0438\u0442\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."}):O()}function q(){f.value=null,_.value=null,v.value=null,u.value=!1}return(oe,o)=>(s(),b(g,null,[l(G,{title:L(x).title},null,8,["title"]),a("div",W,[a("div",{class:h(p.value)},[l(E,{separator:""},{default:t(()=>[l(V,{clickable:"",href:"#map"},{default:t(()=>[l(I,{avatar:""},{default:t(()=>[l(U,{name:"location_on"})]),_:1}),l(I,null,{default:t(()=>[l(d,null,{default:t(()=>[c(" \u0433. \u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A, \u0443\u043B.\u041B\u0435\u043D\u0438\u043D\u0430, \u0434. 156 ")]),_:1})]),_:1})]),_:1}),(s(!0),b(g,null,w(S.value,e=>(s(),N(V,{key:e.id},{default:t(()=>[l(I,null,{default:t(()=>[l(d,{caption:""},{default:t(()=>[c(C(e.jobName),1)]),_:2},1024),(e==null?void 0:e.fullFIO)&&(e==null?void 0:e.fullFIO.length)?(s(),N(d,{key:0},{default:t(()=>[a("b",null,[a("span",X,C(e.fullFIO),1)])]),_:2},1024)):M("",!0),(s(!0),b(g,null,w(e.contacts,y=>(s(),N(Z,{key:e.id+"_"+y.value,phoneNumber:y.value},null,8,["phoneNumber"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})],2),l(i,{spaced:"2em"}),a("div",{class:h(p.value)},ee,2),l(i,{spaced:"2em"}),l(B,{email:"mbu-gko@yandex.ru"}),l(B,{email:"yusgo.mbuyusko@sakhalin.gov.ru"}),l(i,{spaced:"2em"}),le,l(i,{spaced:"2em"}),a("div",{class:h(p.value)},[a("div",ae,[l(J,{onSubmit:j,onReset:q,class:"q-gutter-md"},{default:t(()=>[l(k,{filled:"",modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e),label:"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",hint:"(\u0424\u0418\u041E)","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"]},null,8,["modelValue","rules"]),l(k,{filled:"",modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=e=>_.value=e),label:"mail@example.com",hint:"\u0412\u0430\u0448 email","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"]},null,8,["modelValue","rules"]),l(k,{filled:"",modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=e=>v.value=e),type:"textarea",label:"\u0422\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C"]},null,8,["modelValue","rules"]),l(T,{modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=e=>u.value=e),label:"\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"},null,8,["modelValue"]),a("div",null,[l(F,{label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",disable:!u.value,type:"submit",color:"primary"},null,8,["disable"]),l(F,{label:"\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})]),l(V,{clickable:"",to:"/pdn"},{default:t(()=>[l(d,{caption:""},{default:t(()=>[c(' *\u041D\u0430\u0436\u0438\u043C\u0430\u044F "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", \u0412\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ')]),_:1})]),_:1})],2)])],64))}};var ge=H(te,[["__scopeId","data-v-c7b836f8"]]);export{ge as default};
