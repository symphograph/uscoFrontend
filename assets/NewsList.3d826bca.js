import{Q as b}from"./QLinearProgress.0031b809.js";import{u as L}from"./use-quasar.acee65a8.js";import{api as S}from"./axios.296019ec.js";import{Q as x}from"./QImg.d2c98b48.js";import{f as B}from"./myFuncts.02e9a0a2.js";import{r,z as l,A as _,H as e,B as Q,J as f,y,F as I,_ as N,O as D,P as q,S as R,aR as V,i as g,w as k,o as $,D as w,I as v,G as E}from"./index.e552dc30.js";const n=s=>(D("data-v-20b082e6"),s=s(),q(),s),F={class:"narea"},P={class:"nimg_block"},U=["href"],j={class:"tcol"},z={class:"ntitle"},A=["href"],C=n(()=>e("br",null,null,-1)),G=["href"],H=n(()=>e("br",null,null,-1)),J=n(()=>e("br",null,null,-1)),M={class:"ndate"},O=n(()=>e("br",null,null,-1)),K=n(()=>e("br",null,null,-1)),T=n(()=>e("hr",null,null,-1)),W=n(()=>e("br",null,null,-1)),X={__name:"NewItem",props:{item:r(null)},setup(s){const t=s;function d(){return String("https://api.sakh-orch.ru/")+t.item.img}function i(){return t.item.evid?"/announce/"+t.item.evid:t.item.refLink?t.item.refLink:"/new/"+t.item.id}return(c,o)=>(l(),_(I,null,[e("div",F,[e("div",P,[e("div",null,[e("a",{href:i()},[Q(x,{src:d(),ratio:1080/684},null,8,["src"])],8,U)])]),e("div",j,[e("div",z,[e("a",{href:i()},f(s.item.title),9,A)]),C,e("a",{href:i()},f(s.item.descr),9,G),H,J,e("span",M,f(y(B)(s.item.date)),1),O])]),K,T,W],64))}};var Y=N(X,[["__scopeId","data-v-20b082e6"]]);const Z={class:"newscol"},ee={key:2,class:"noEntyes"},te={__name:"NewsList",props:{query:r(null),category:r(null),year:r(null),limit:r(null)},setup(s){const t=s,d=String("https://api.sakh-orch.ru/"),i=R();V(),g("token"),L();const c=g("progress"),o=r([]);r("\u041B\u0443\u0447\u0448\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 - \u044D\u0442\u043E \u0438\u0445 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435.");const m=r(t.category);k(()=>t.query,a=>{h()},{deep:!0}),k(i,a=>{m.value=a.params.category,h()});function h(){!m.value||(c.value=!0,S.post(d+"api/get/news.php",{params:{category:m.value,year:t.year,limit:t.limit}}).then(a=>{var p,u;o.value=(u=(p=a==null?void 0:a.data)==null?void 0:p.data)!=null?u:[]}).catch(a=>{o.value=[]}).finally(()=>{c.value=!1}))}return $(()=>{h()}),(a,p)=>(l(),_("div",Z,[y(c)?(l(),w(b,{key:0,indeterminate:"",color:"secondary",class:"q-mt-sm"})):v("",!0),o.value.length?(l(!0),_(I,{key:1},E(o.value,u=>(l(),w(Y,{key:u.id,item:u},null,8,["item"]))),128)):v("",!0),!o.value&&!y(c)?(l(),_("h5",ee," \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. ")):v("",!0)]))}};var ie=N(te,[["__scopeId","data-v-ef6cef3e"]]);export{ie as N};
