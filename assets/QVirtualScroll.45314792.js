import{Q as B}from"./QList.6e694311.js";import{V as T,X as Q,Z as F,c as n,h as i,W as M,g as p,aA as w,r as A,w as S,k as C,o as x,O as D,P as E,aa as L,aB as P,az as q,ab as O}from"./index.75787531.js";import{u as R,b as $}from"./QSelect.d14940b8.js";const I=["horizontal","vertical","cell","none"];var H=T({name:"QMarkupTable",props:{...Q,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>I.includes(e)}},setup(e,{slots:a}){const s=p(),t=F(e,s.proxy.$q),l=n(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(t.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>i("div",{class:l.value},[i("table",{class:"q-table"},M(a.default))])}});function N(e,a){return i("div",e,[i("table",{class:"q-table"},a)])}const U={list:B,table:H},W=["list","table","__qtable"];var G=T({name:"QVirtualScroll",props:{...R,type:{type:String,default:"list",validator:e=>W.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:w},setup(e,{slots:a,attrs:s}){let t;const l=A(null),u=n(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:r,localResetVirtualScroll:v,padVirtualScroll:_,onVirtualScrollEvt:f}=$({virtualScrollLength:u,getVirtualScrollTarget:h,getVirtualScrollEl:b}),y=n(()=>{if(u.value===0)return[];const o=(k,z)=>({index:r.value.from+z,item:k});return e.itemsFn===void 0?e.items.slice(r.value.from,r.value.to).map(o):e.itemsFn(r.value.from,r.value.to-r.value.from).map(o)}),m=n(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),V=n(()=>e.scrollTarget!==void 0?{}:{tabindex:0});S(u,()=>{v()}),S(()=>e.scrollTarget,()=>{d(),c()});function b(){return l.value.$el||l.value}function h(){return t}function c(){t=P(b(),e.scrollTarget),t.addEventListener("scroll",f,q.passive)}function d(){t!==void 0&&(t.removeEventListener("scroll",f,q.passive),t=void 0)}function g(){let o=_(e.type==="list"?"div":"tbody",y.value.map(a.default));return a.before!==void 0&&(o=a.before().concat(o)),O(a.after,o)}return C(()=>{v()}),x(()=>{c()}),D(()=>{c()}),E(()=>{d()}),L(()=>{d()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?N({ref:l,class:"q-table__middle "+m.value},g()):i(U[e.type],{...s,ref:l,class:[s.class,m.value],...V.value},g)}}});export{G as Q,N as g};
