import{Q as m}from"./QVideo.dc90ef06.js";import{u as p}from"./jwt-decode.esm.a17afbe5.js";import{api as u}from"./axios.73a146c0.js";import{n as l}from"./myFuncts.ea11ec4a.js";import{_ as v,r as f,a as h,e as i,f as o,A as y,F as k,as as V,g as b}from"./index.4c9b99a1.js";const E={class:"eventsarea"},L={class:"vidarea"},Y={__name:"VideoList",props:{videoLimit:Object},setup(r){const d=p(),c=String("https://api.sakh-orch.ru/"),n=r,s=f([{id:"cYYEe_o-M3w"},{id:"ZAC_GGmo-bk"},{id:"yjTAG2iCjpk"},{id:"Y4syxGpzDn4"},{id:"lmpnSdUmSEE"},{id:"2Pagmmq3Yho"},{id:"_YTqUE3M_Gw"},{id:"kYPkO3iB9OQ"}]);function _(){u.post(c+"api/video/list.php",{params:{limit:n.videoLimit.limit}}).then(t=>{var e,a;s.value=(a=(e=t==null?void 0:t.data)==null?void 0:e.data)!=null?a:[]}).catch(t=>{d.notify(l(t))})}return h(()=>{_()}),(t,e)=>(i(),o("div",E,[y("div",L,[(i(!0),o(k,null,V(s.value,a=>(i(),o("div",{class:"vitem",key:a.youtubeId},[b(m,{ratio:16/9,src:"https://www.youtube.com/embed/"+a.youtubeId+"?rel=0"},null,8,["src"])]))),128))])]))}};var Q=v(Y,[["__scopeId","data-v-5ec93c61"]]);export{Q as V};
