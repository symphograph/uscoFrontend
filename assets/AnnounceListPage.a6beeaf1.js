import{_ as x,i as l,u as A,d as B,r as i,A as u,f as c,g as Y,t as o,j as _,c as d,h as m,a1 as w,v as I,x as L}from"./index.2c6ce450.js";import{Q as f}from"./QSelect.2c330a11.js";import{Q as P}from"./QLinearProgress.fa282e58.js";import{_ as U}from"./AnnounceList.bb30e27a.js";import{u as D}from"./use-quasar.f7c166b5.js";import{u as E}from"./use-meta.ed891a80.js";import{api as M}from"./axios.12c91436.js";import{b as N,n as j}from"./myFuncts.8c7f864e.js";import"./QItemSection.9561c11d.js";import"./rtl.fd319d22.js";import"./position-engine.f7c4ca0e.js";import"./format.3e32b8d9.js";import"./AnnounceCard.499694a0.js";import"./QImg.d88b0c00.js";import"./use-ratio.ec9fcc4f.js";import"./QTooltip.b1772c70.js";import"./jwt-decode.esm.74bd4619.js";const C=s=>(I("data-v-2c5c269a"),s=s(),L(),s),H={key:0,class:"content"},R={class:"eventsarea"},q={class:"p_title"},F=C(()=>o("div",null,"\u0410\u0444\u0438\u0448\u0438",-1)),K={class:"selectors"},O={class:"gridarea"},$={__name:"AnnounceListPage",setup(s){E({title:"\u0410\u043D\u043E\u043D\u0441\u044B"});const h=String("https://api.sakh-orch.ru/"),p=D();l("lvl"),A();const g=B(),y=l("editMode"),V=l("progress"),k=l("Halls"),n=i({label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",value:0}),Q=i([{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u043E\u0432\u044B\u0435",value:0},{label:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0442\u0430\u0440\u044B\u0435",value:1}]),S=[2023,2022,2021,2020,2019,2018],r=i(new Date().getFullYear());function b(){M.post(h+"api/event/announce/add.php",{params:{}}).then(t=>{var e,a,v;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;p.notify(N((v=(a=t==null?void 0:t.data)==null?void 0:a.result)!=null?v:null)),g.push({path:"/announce/"+t.data.data.id})}).catch(t=>{p.notify(j(t))})}return(t,e)=>u(k)?(c(),Y("div",H,[o("div",R,[o("div",q,[F,o("div",K,[u(y)?(c(),_(w,{key:0,label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",onClick:b})):d("",!0),m(f,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),options:S,"emit-value":""},null,8,["modelValue"]),m(f,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),options:Q.value},null,8,["modelValue","options"])])]),u(V)?(c(),_(P,{key:0,indeterminate:"",color:"secondary"})):d("",!0),o("div",O,[m(U,{evYear:r.value,"onUpdate:evYear":e[2]||(e[2]=a=>r.value=a),sort:n.value.value},null,8,["evYear","sort"])])])])):d("",!0)}};var dt=x($,[["__scopeId","data-v-2c5c269a"]]);export{dt as default};
