import{Q as m}from"./QVideo.f13823bb.js";import{u as p}from"./use-quasar.4382dece.js";import{api as u}from"./axios.8eed83f3.js";import{n as l}from"./myFuncts.8c7f864e.js";import{_ as v,r as f,a as h,f as i,g as o,t as y,F as b,at as k,h as V}from"./index.90c075be.js";const g={class:"eventsarea"},E={class:"vidarea"},L={__name:"VideoList",props:{videoLimit:Object},setup(r){const d=r,c=p(),_=String("https://api.sakh-orch.ru/"),s=f([{id:"cYYEe_o-M3w"},{id:"ZAC_GGmo-bk"},{id:"yjTAG2iCjpk"},{id:"Y4syxGpzDn4"},{id:"lmpnSdUmSEE"},{id:"2Pagmmq3Yho"},{id:"_YTqUE3M_Gw"},{id:"kYPkO3iB9OQ"}]);function n(){u.post(_+"api/get/video.php",{params:{limit:d.videoLimit.limit}}).then(t=>{var e,a;s.value=(a=(e=t==null?void 0:t.data)==null?void 0:e.data)!=null?a:[]}).catch(t=>{c.notify(l(t))})}return h(()=>{n()}),(t,e)=>(i(),o("div",g,[y("div",E,[(i(!0),o(b,null,k(s.value,a=>(i(),o("div",{class:"vitem",key:a.youtube_id},[V(m,{ratio:16/9,src:"https://www.youtube.com/embed/"+a.youtube_id+"?rel=0"},null,8,["src"])]))),128))])]))}};var Q=v(L,[["__scopeId","data-v-9b1134be"]]);export{Q as V};
