import{Q as T}from"./QToolbarTitle.7965bc98.js";import{Q as m}from"./QToolbar.d8ee9930.js";import{Q as B}from"./QSpace.5e52cb1c.js";import{_ as D,u as S,aU as C,i as c,r as o,m as F,e as l,f as M,A as d,g as t,z as n,aY as P,H as f,h as _,c as g,F as R,G as E,at as U,a5 as q,Y as z}from"./index.4c9b99a1.js";import{Q as L}from"./QSelect.ffec0497.js";import{Q as $}from"./QLinearProgress.313da236.js";import{N as j}from"./NewsList.d29b14cf.js";import{u as A}from"./use-meta.06e3aa02.js";import{u as G}from"./jwt-decode.esm.a17afbe5.js";import{api as H}from"./axios.73a146c0.js";import{g as I,n as J}from"./myFuncts.ea11ec4a.js";import"./QItemLabel.156e8acc.js";import"./rtl.1637cb10.js";import"./position-engine.db985ba2.js";import"./format.3e32b8d9.js";import"./QTooltip.40f3985b.js";import"./QImg.79639ebe.js";import"./use-ratio.4927b82c.js";const K={class:"selectors"},O={__name:"NewsPage",setup(W){const v=String("https://api.sakh-orch.ru/"),s=S(),y=C(),Q=G(),h=c("progress"),w=c("editMode"),r=o(new Date().getFullYear()),i=o();function k(){console.log(r),z(()=>{i.value.loadData()})}const N=o({all:"\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",euterpe:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u042D\u0432\u0442\u0435\u0440\u043F\u044B",other:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",usso:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"});function b(){H.post(v+"api/news/entry.php",{params:{method:"add"}}).then(e=>{s.params.id=e.data.data.id,y.push({path:"/new/"+e.data.data.id})}).catch(e=>{Q.notify(J(e))})}function V(){let e=[];for(let a=2018;a<=new Date().getFullYear();a++)e.push(a);return e.reverse()}const u=F(()=>N.value[s.params.category]),Y=I(u.value);A(Y);const x=o(s.params.category);return(e,a)=>(l(),M(R,null,[d("div",{class:P(["pageToolbar",e.$q.platform.is.desktop?"no-wrap":"wrap"])},[t(m,null,{default:n(()=>[t(T,null,{default:n(()=>[E(U(u.value),1)]),_:1})]),_:1}),t(m,null,{default:n(()=>[t(B),d("div",K,[f(w)?(l(),_(q,{key:0,label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",onClick:b})):g("",!0),t(L,{modelValue:r.value,"onUpdate:modelValue":[a[0]||(a[0]=p=>r.value=p),a[1]||(a[1]=p=>k())],options:V(),"emit-value":"",borderless:""},null,8,["modelValue","options"])])]),_:1})],2),f(h)?(l(),_($,{key:0,indeterminate:"",color:"secondary"})):g("",!0),t(j,{year:r.value,limit:100,category:x.value,ref_key:"listRef",ref:i},null,8,["year","category"])],64))}};var ge=D(O,[["__scopeId","data-v-0b8b33cd"]]);export{ge as default};
