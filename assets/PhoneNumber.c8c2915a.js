import{c as f,r as c,m as d,n as v,q as o,f as t,t as b,v as g,a1 as N,x as Q,y as h,C as m}from"./index.7ddf54de.js";import{a as n,Q as x}from"./QItem.cbdda9a5.js";import{Q as y}from"./QItemLabel.af98036f.js";import{c as _}from"./myFuncts.3679a5e3.js";import{u as k}from"./use-quasar.bae2301b.js";const C={__name:"PhoneNumber",props:{phoneNumber:{type:[String,Number],required:!0}},setup(a){const l=k(),p=a;f(()=>r.value?"/img/telh.png":"/img/tel.png");const r=c(!1);function s(){return String(p.phoneNumber).replace(/[^\d+]/g,"")}return(i,e)=>(d(),v(x,{clickable:"",href:`tel:${s()}`,onMouseleave:e[1]||(e[1]=u=>r.value=!1),onMouseover:e[2]||(e[2]=u=>r.value=!0)},{default:o(()=>[t(n,{avatar:""},{default:o(()=>[t(b,{name:"phone"})]),_:1}),t(n,null,{default:o(()=>[t(y,null,{default:o(()=>[g(N(a.phoneNumber),1)]),_:1})]),_:1}),t(n,{side:""},{default:o(()=>[t(Q,{icon:"content_copy",flat:"",onClick:e[0]||(e[0]=h(u=>m(_)(s(),m(l)),["stop","prevent"]))})]),_:1})]),_:1},8,["href"]))}};export{C as _};
