import{c as u,n as f,t as p,G as e,f as a,L as d,M as s,ax as _,a9 as Q,a_ as k,N as l}from"./index.cd1e76ba.js";import{Q as o,a as n,b as x}from"./QItemLabel.971d5e50.js";import{e as b}from"./myFuncts.9f42497d.js";import{u as h}from"./use-quasar.887a5898.js";const N={__name:"EMail",props:{email:{type:String,required:!0}},setup(t){const i=h(),c=t,m=u(()=>`mailto:${c.email}`);return(v,r)=>(f(),p(x,{clickable:"",href:m.value,target:"_blank"},{default:e(()=>[a(o,{avatar:""},{default:e(()=>[a(d,{name:"email"})]),_:1}),a(o,null,{default:e(()=>[a(n,null,{default:e(()=>[s(_(t.email),1)]),_:1}),a(n,{caption:""},{default:e(()=>[s("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")]),_:1})]),_:1}),a(o,{side:""},{default:e(()=>[a(Q,{icon:"content_copy",flat:"",onClick:r[0]||(r[0]=k(y=>l(b)(t.email,l(i)),["stop","prevent"]))})]),_:1})]),_:1},8,["href"]))}};export{N as _};