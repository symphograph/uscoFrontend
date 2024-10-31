import{V as F}from"./VideoList.a9eb528e.js";import{a as _,b as $,Q as k}from"./QImg.628e9f39.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{m as i,D as d,ax as a,F as x,E as P,f as u,d as D,c as Q,n as f,q as s,B as L,l as E,t as y,u as B,z as h,r as c,p as I,i as N,k as V,o as A,aY as M,v as w}from"./index.f5e978c0.js";import{N as T}from"./NewsList.3625a751.js";import{_ as O}from"./AnnounceList.99801164.js";import{u as U}from"./use-meta.9e3420c8.js";import{u as Y}from"./use-quasar.cdf0ea62.js";import{g as j}from"./myFuncts.28762f14.js";import{P as q}from"./PageShell.bef0802e.js";import{Q as K}from"./QSelect.ed6de9a4.js";import{Q as C}from"./QItemLabel.4c832645.js";import{m as z}from"./myAuth.5621b016.js";import"./QVideo.36315a5a.js";import"./axios.b6bdbb44.js";import"./QTooltip.7abf715f.js";import"./position-engine.93af21d7.js";import"./selection.52642521.js";import"./BtnDelete.921da25f.js";import"./AnnounceCard.1165afce.js";import"./entry.f6555cc6.js";import"./myAxios.e0606f23.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.990b59f1.js";import"./touch.9135741d.js";import"./QScrollArea.d29ff5ca.js";import"./format.de7e9769.js";import"./QLinearProgress.92cabfad.js";/* empty css                                                    */import"./QMenu.95cba417.js";import"./rtl.276c3f1b.js";const H={name:"TeaserList",props:{teasers:Object}},R={class:"eventsarea"},W={class:"teasers"};function G(m,t,l,p,o,e){return i(),d("div",R,[t[0]||(t[0]=a("br",null,null,-1)),t[1]||(t[1]=a("hr",null,null,-1)),t[2]||(t[2]=a("br",null,null,-1)),t[3]||(t[3]=a("br",null,null,-1)),a("div",W,[(i(!0),d(x,null,P(l.teasers,n=>(i(),d("div",{class:"nimg_block",key:n.id},[u(_,{style:{"border-radius":"1em"},src:n.img,onClick:v=>m.window.open(n.href,"_blank")},null,8,["src","onClick"])]))),128))])])}var J=g(H,[["render",G],["__scopeId","data-v-f524e86c"]]);const X=D({__name:"SocialItem",props:{url:{},label:{},caption:{},iconFileName:{}},setup(m){const t=m;function l(o){const e=window.open();!e||(e.opener=null,e.location=o)}const p=Q(()=>`img:/img/auth/${t.iconFileName}`);return(o,e)=>(i(),f($,{clickable:"",href:o.url,target:"_blank",onClick:e[0]||(e[0]=L(n=>l(o.url),["stop","prevent"]))},{default:s(()=>[u(k,{avatar:""},{default:s(()=>[E("",!0),u(_,{src:`/img/auth/${o.iconFileName}`},null,8,["src"])]),_:1}),u(k,null,{default:s(()=>[u(C,null,{default:s(()=>[y(B(o.label),1)]),_:1}),u(C,{caption:""},{default:s(()=>[y(B(o.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});const Z=D({__name:"SocialSelect",setup(m){const t=c(),l=[{id:1,url:"https://t.me/USKO2022",label:"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043A\u0430\u043D\u0430\u043B",caption:"\u041B\u0435\u043D\u0442\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C",iconFileName:"telegram.svg"},{id:2,url:"https://t.me/USKO2022",label:"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043A\u0430\u043D\u0430\u043B",caption:"\u041B\u0435\u043D\u0442\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C",iconFileName:"telegram.svg"},{id:3,url:"https://youtube.com/@\u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A\u0438\u0439\u0421\u0438\u043C\u0444\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439\u041E",label:"Youtube",caption:"Youtube \u043A\u0430\u043D\u0430\u043B",iconFileName:"youtube.svg"},{id:4,url:"https://vk.com/public217297399",label:"\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",caption:"\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0432 VK",iconFileName:"vkontakte.svg"}];return(p,o)=>(i(),f(K,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),options:l,"map-options":"",label:"hgfdhg","stack-label":"","option-value":"id"},{prepend:s(()=>[u(h,{name:"img:/img/auth/telegram.svg",class:"bw"}),u(_,{src:"/img/auth/youtube.svg",class:"bw",style:{width:"1.5em"}}),E("",!0),u(h,{name:"img:/img/auth/vkontakte.svg",class:"bw"})]),option:s(e=>[u(X,{iconFileName:e.opt.iconFileName,caption:e.opt.caption,label:e.opt.label,url:e.opt.url},null,8,["iconFileName","caption","label","url"])]),_:1},8,["modelValue"]))}});var ee=g(Z,[["__scopeId","data-v-55d9d78d"]]);const te={class:"centralCol"},ue={class:"contentBlock"},oe={class:"announceArea"},ae={class:"contentBlock"},se={class:"contentBlock"},le={class:"contentBlock"},ne={__name:"IndexPage",setup(m){Y();const t=c(!1);I("compactCard",t);const l=c(!1),p=N("editModes"),o=j("\u042E\u0421\u0421\u041E");U(o);const e=[{id:1,href:"https://clck.ru/RautH",img:"/img/teasers/opros.svg"},{id:2,href:"news/euterpe",img:"/img/teasers/euterpe_2021.svg"}],n=c(new Date().getFullYear()),v=c([]);I("announceList",v),N("progress");const S={category:"usco",year:0,limit:5};return V(()=>{console.log("IndexPage before mounted"),l.value=!0}),A(()=>{console.log("IndexPage mounted"),Object.values(p).forEach(b=>b.value=!1)}),(b,r)=>(i(),f(q,{pageTitle:w(o).title,"use-header":""},M({PageContent:s(()=>[a("div",te,[a("div",ue,[a("div",oe,[u(O,{method:"futureList"})])]),a("div",ae,[r[0]||(r[0]=a("div",{class:"p_title"},"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430",-1)),r[1]||(r[1]=a("br",null,null,-1)),r[2]||(r[2]=a("br",null,null,-1)),u(T,{query:S,limit:5,year:n.value,category:"usco"},null,8,["year"])]),a("div",se,[u(F,{method:"someLast",limit:6})]),a("div",le,[u(J,{teasers:e})])])]),_:2},[w(z).self.isPermit([1])?{name:"ToolPanel",fn:s(()=>[u(ee)]),key:"0"}:void 0]),1032,["pageTitle"]))}};var Me=g(ne,[["__scopeId","data-v-9abce530"]]);export{Me as default};
