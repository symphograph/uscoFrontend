import{Q as c}from"./QImg.9937fe90.js";import{r as d,q as f,v as p,H as e,I as n,W as o,f as t,aa as h,Q as _,V as s,l as g}from"./index.02309961.js";import{a as k,Q as r}from"./QItem.ff5a2c80.js";import{Q as l}from"./QItemLabel.e490e797.js";import{Q}from"./QForm.51e3445a.js";const T=["value"],v=["value"],S=["value"],b={__name:"TelegramForm",props:{AccessToken:String,SessionToken:String},setup(a){const u=String("sakh-orch.ru"),m=String("https://auth.symphograph.ru/"),i=d(null);return(y,A)=>a.AccessToken?(f(),p(Q,{key:0,ref_key:"formTelegram",ref:i,action:o(m)+"auth/telegram/login.php",method:"post"},{default:e(()=>[n("input",{type:"hidden",name:"AccessToken",value:a.AccessToken},null,8,T),n("input",{type:"hidden",name:"SessionToken",value:a.SessionToken},null,8,v),n("input",{type:"hidden",name:"from",value:o(u)},null,8,S),t(h,{type:"submit","no-caps":"",align:"between",outline:!1,padding:"none",style:{width:"100%"},flat:"",dense:"",square:""},{default:e(()=>[t(k,{dense:""},{default:e(()=>[t(r,{avatar:""},{default:e(()=>[t(_,null,{default:e(()=>[t(c,{src:"/img/auth/telegram.svg"})]),_:1})]),_:1}),t(r,null,{default:e(()=>[t(l,{caption:""},{default:e(()=>[s("\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437")]),_:1}),t(l,null,{default:e(()=>[s("\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["action"])):g("",!0)}};export{b as _};