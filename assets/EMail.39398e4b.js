import{c as u,m as f,n as p,q as a,f as e,A as d,t as s,v as _,B as Q,C as k,x as l}from"./index.39305a7a.js";import{u as v,Q as o,a as x}from"./QItem.a2c55a7a.js";import{Q as n}from"./QItemLabel.ecd18af5.js";import{c as h}from"./myFuncts.7acd62bc.js";const C={__name:"EMail",props:{email:{type:String,required:!0}},setup(t){const i=v(),c=t,m=u(()=>`mailto:${c.email}`);return(y,r)=>(f(),p(x,{clickable:"",href:m.value,target:"_blank"},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(d,{name:"email"})]),_:1}),e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[s(_(t.email),1)]),_:1}),e(n,{caption:""},{default:a(()=>[s("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")]),_:1})]),_:1}),e(o,{side:""},{default:a(()=>[e(Q,{icon:"content_copy",flat:"",onClick:r[0]||(r[0]=k(B=>l(h)(t.email,l(i)),["stop","prevent"]))})]),_:1})]),_:1},8,["href"]))}};export{C as _};
