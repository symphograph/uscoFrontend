import"./QImg.8430c3f7.js";import{I as p,m as f,n as d,q as a,f as t,Q as _,ax as h,x as v,bM as g,l as I,t as o,v as n,b1 as Q}from"./index.bd97e9c1.js";import{Q as s,a as k}from"./QItem.42e8eee9.js";import{Q as i}from"./QItemLabel.2de18a52.js";/* empty css                                                               */import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const x={__name:"AuthorItem",props:{id:Number,fioRu:String,iofEn:String,iconUrl:String},setup(e){const l=e,u=p();function c(){return`url(${l.iconUrl||"/img/avatars/init_ava.png"})`}return(m,r)=>(f(),d(k,null,{default:a(()=>[t(s,{avatar:""},{default:a(()=>[t(_,null,{default:a(()=>[h("div",{class:"authorAva",onClick:r[0]||(r[0]=()=>v(u).push({path:`/lib/author/${e.id}`})),style:g({backgroundImage:c()})},null,4),I("",!0)]),_:1})]),_:1}),t(s,null,{default:a(()=>[t(i,null,{default:a(()=>[o(n(e.fioRu),1)]),_:1}),t(i,{caption:""},{default:a(()=>[o(n(e.iofEn),1)]),_:1})]),_:1}),Q(m.$slots,"sections",{},void 0,!0)]),_:3}))}};var V=b(x,[["__scopeId","data-v-660e83c8"]]);export{V as A};
