import{u as h}from"./use-quasar.f463e671.js";import{a as g}from"./axios.42d422c9.js";import{A as k}from"./AnnounceCard.5c1e42e0.js";import{n as y}from"./myFuncts.0887c750.js";import{r as A,i as s,o as L,w as _,c as w,m as u,D as F,E as T,F as B,n as C,v as D}from"./index.e0f85654.js";const j={__name:"AnnounceList",props:{method:String,evYear:Number,sort:A({})},setup(m){const i=String("https://sakh-orch.ru/api/"),l=h(),p=s("compactCard"),a=s("announceList"),c=s("progress"),r=m;function o(){c.value=!0,g.post(i+"epoint/event/announce.php",{params:{method:r.method,year:r.evYear}}).then(e=>{var t,n;a.value=(n=(t=e==null?void 0:e.data)==null?void 0:t.data)!=null?n:[]}).catch(e=>{l.notify(y(e)),a.value=[]}).finally(()=>{c.value=!1})}L(()=>{o()}),_(()=>r.evYear,()=>{o()});const v=(e,t)=>e.eventTime<t.eventTime?1:-1,d=(e,t)=>e.eventTime>t.eventTime?1:-1,f=w(()=>{if(!a.value||!a.value.length)return[];switch(r.sort){case"dateDesc":return[...a.value].sort(v);case"dateAsc":return[...a.value].sort(d);default:return a.value}});return(e,t)=>(u(!0),F(B,null,T(f.value,n=>(u(),C(k,{key:n.id,announce:n,onIamDeleted:t[0]||(t[0]=E=>o()),compact:D(p)},null,8,["announce","compact"]))),128))}};export{j as _};
