import{_ as Y,i as n,u as b,d as A,r as l,p as w,J as u,f as d,g as x,A as o,j as _,c,h as m,a4 as D,D as E,E as I}from"./index.22494882.js";import{Q as f}from"./QSelect.8e97bc65.js";import{Q as P}from"./QLinearProgress.754aded5.js";import{_ as U}from"./AnnounceList.c0b64756.js";import{u as M}from"./use-quasar.5a28d56d.js";import{u as N}from"./use-meta.8fbf0ea1.js";import{api as j}from"./axios.e2ec1837.js";import{b as C,n as H}from"./myFuncts.2470a9df.js";import"./QItemSection.3906cff6.js";import"./rtl.b64b8ea4.js";import"./position-engine.ad83e008.js";import"./format.3e32b8d9.js";import"./AnnounceCard.67679853.js";import"./QImg.dbdc5b59.js";import"./use-ratio.3f1e5982.js";import"./QTooltip.0a126085.js";import"./jwt-decode.esm.74bd4619.js";const R=s=>(E("data-v-a8add410"),s=s(),I(),s),q={key:0,class:"content"},F={class:"eventsarea"},J={class:"p_title"},K=R(()=>o("div",null,"\u0410\u043D\u043E\u043D\u0441\u044B",-1)),O={class:"selectors"},$={class:"gridarea"},z={__name:"AnnounceListPage",setup(s){N({title:"\u0410\u043D\u043E\u043D\u0441\u044B"});const h=String("https://api.sakh-orch.ru/"),p=M();n("lvl"),b();const y=A(),g=n("editMode"),V=n("progress"),k=n("Halls"),i=l({label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",value:0}),B=l([{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",value:0},{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0430\u0440\u044B\u0435",value:1}]),L=[2023,2022,2021,2020,2019,2018],r=l(new Date().getFullYear()),Q=l([]);w("announceList",Q);function S(){j.post(h+"api/event/announce.php",{params:{method:"add"}}).then(t=>{var e,a,v;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;p.notify(C((v=(a=t==null?void 0:t.data)==null?void 0:a.result)!=null?v:null)),y.push({path:"/announce/"+t.data.data.id})}).catch(t=>{p.notify(H(t))})}return(t,e)=>u(k)?(d(),x("div",q,[o("div",F,[o("div",J,[K,o("div",O,[u(g)?(d(),_(D,{key:0,label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",onClick:S})):c("",!0),m(f,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),options:L,"emit-value":""},null,8,["modelValue"]),m(f,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),options:B.value},null,8,["modelValue","options"])])]),u(V)?(d(),_(P,{key:0,indeterminate:"",color:"secondary"})):c("",!0),o("div",$,[m(U,{evYear:r.value,"onUpdate:evYear":e[2]||(e[2]=a=>r.value=a),method:"listByYear",sort:i.value.value},null,8,["evYear","sort"])])])])):c("",!0)}};var pt=Y(z,[["__scopeId","data-v-a8add410"]]);export{pt as default};
