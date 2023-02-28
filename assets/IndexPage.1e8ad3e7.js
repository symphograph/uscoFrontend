import{c as g,i as m,g as o,h,p as f,s as y,v as $,t as x,ak as C,_ as b,z as u,A as p,H as t,F as k,G as L,B as i,O as w,P as F,r as I,D as P,C as Q}from"./index.e552dc30.js";import"./myFuncts.02e9a0a2.js";import{V as B}from"./VideoList.4056d9c1.js";import{Q as q}from"./QImg.d2c98b48.js";import{N as H}from"./NewsList.3d826bca.js";import{_ as D}from"./AnnounceList.aaac9efc.js";import{u as N}from"./use-meta.355ae365.js";import"./QVideo.31552aa7.js";import"./use-ratio.fa9637be.js";import"./use-quasar.acee65a8.js";import"./axios.296019ec.js";import"./QLinearProgress.0031b809.js";import"./AnnounceCard.1ff071ba.js";import"./QItem.9df529e7.js";import"./QTooltip.95407920.js";import"./position-engine.a58e5381.js";var S=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:d}){const{proxy:{$q:a}}=$(),e=m(x,o);if(e===o)return console.error("QPage needs to be a deep child of QLayout"),o;if(m(C,o)===o)return console.error("QPage needs to be child of QPageContainer"),o;const l=h(()=>{const r=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof s.styleFn=="function"){const v=e.isContainer.value===!0?e.containerHeight.value:a.screen.height;return s.styleFn(r,v)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-r+"px":a.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":a.screen.height-r+"px"}}),n=h(()=>`q-page${s.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:n.value,style:l.value},y(d.default))}});const V={name:"TeaserList",props:{teasers:Object}},_=s=>(w("data-v-0fe4efe6"),s=s(),F(),s),j={class:"eventsarea"},z=_(()=>t("br",null,null,-1)),T=_(()=>t("hr",null,null,-1)),Y=_(()=>t("br",null,null,-1)),A=_(()=>t("br",null,null,-1)),K={class:"teasers"};function O(s,d,a,e,c,l){return u(),p("div",j,[z,T,Y,A,t("div",K,[(u(!0),p(k,null,L(a.teasers,n=>(u(),p("div",{class:"nimg_block",key:n.id},[i(q,{style:{"border-radius":"1em"},src:n.img,onClick:r=>s.window.open(n.href,"_blank")},null,8,["src","onClick"])]))),128))])])}var R=b(V,[["render",O],["__scopeId","data-v-0fe4efe6"]]);const E={class:"eventsarea"},G={class:"announceArea"},M={class:"eventsarea"},J=t("div",{class:"p_title"},"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430",-1),U=t("br",null,null,-1),W=t("br",null,null,-1),me={__name:"IndexPage",setup(s){N({title:"\u042E\u0421\u041A\u041E"});const a=[{id:1,href:"https://clck.ru/RautH",img:"/img/teasers/opros.svg"},{id:2,href:"news/euterpe",img:"/img/teasers/euterpe_2021.svg"}],e={limit:6},c=I(new Date().getFullYear()),l={category:"usco",year:0,limit:5};return(n,r)=>(u(),P(S,{class:"items-center justify-evenly"},{default:Q(()=>[t("div",E,[t("div",G,[i(D,{sort:1,evYear:c.value,"only-new":"1"},null,8,["evYear"])])]),t("div",M,[J,U,W,i(H,{query:l,limit:5,year:c.value,category:"usco"},null,8,["year"])]),i(B,{videoLimit:e}),i(R,{teasers:a})]),_:1}))}};export{me as default};
