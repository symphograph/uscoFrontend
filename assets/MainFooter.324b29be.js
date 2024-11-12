import{V as le,h as p,ak as R,X as fe,r as b,Z as be,c as d,a$ as me,w as he,P as pe,O as ge,ai as ze,ac as ye,g as Se,b0 as C,b1 as L,m as w,C as B,b2 as xe,n as ae,p as y,f as m,y as _e,ax as s,q as _,o as we,J as Oe,l as q,u as X,F as $,B as G,b3 as ke}from"./index.67387e42.js";import{a as U,Q as Pe,T as W}from"./QSlideTransition.f2bb147d.js";import{b as P}from"./format.de7e9769.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import{u as je}from"./myFuncts.7cbbd23e.js";import{Q as J,b as Ie}from"./QImg.507e5154.js";import{Q as K}from"./QItemLabel.6b8410e5.js";var Me=le({props:["store","barStyle","verticalBarStyle","horizontalBarStyle"],setup(l){return()=>[p("div",{class:l.store.scroll.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:l.store.onVerticalMousedown}),p("div",{class:l.store.scroll.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:l.store.onHorizontalMousedown}),R(p("div",{ref:l.store.scroll.vertical.ref,class:l.store.scroll.vertical.thumbClass.value,style:l.store.scroll.vertical.style.value,"aria-hidden":"true"}),l.store.thumbVertDir),R(p("div",{ref:l.store.scroll.horizontal.ref,class:l.store.scroll.horizontal.thumbClass.value,style:l.store.scroll.horizontal.style.value,"aria-hidden":"true"}),l.store.thumbHorizDir)]}});const Y=["vertical","horizontal"],A={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Z={prevent:!0,mouse:!0,mouseAllDir:!0},ee=l=>l>=250?50:Math.ceil(l/5);var We=le({name:"QScrollArea",props:{...fe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],verticalOffset:{type:Array,default:[0,0]},horizontalOffset:{type:Array,default:[0,0]},contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:f,emit:O}){const o=b(!1),h=b(!1),S=b(!1),n={vertical:b(0),horizontal:b(0)},e={vertical:{ref:b(null),position:b(0),size:b(0)},horizontal:{ref:b(null),position:b(0),size:b(0)}},{proxy:i}=Se(),a=be(l,i.$q);let v=null,u;const g=b(null),re=d(()=>"q-scrollarea"+(a.value===!0?" q-scrollarea--dark":""));Object.assign(n,{verticalInner:d(()=>n.vertical.value-l.verticalOffset[0]-l.verticalOffset[1]),horizontalInner:d(()=>n.horizontal.value-l.horizontalOffset[0]-l.horizontalOffset[1])}),e.vertical.percentage=d(()=>{const t=e.vertical.size.value-n.vertical.value;if(t<=0)return 0;const r=P(e.vertical.position.value/t,0,1);return Math.round(r*1e4)/1e4}),e.vertical.thumbHidden=d(()=>(l.visible===null?S.value:l.visible)!==!0&&o.value===!1&&h.value===!1||e.vertical.size.value<=n.vertical.value+1),e.vertical.thumbStart=d(()=>l.verticalOffset[0]+e.vertical.percentage.value*(n.verticalInner.value-e.vertical.thumbSize.value)),e.vertical.thumbSize=d(()=>Math.round(P(n.verticalInner.value*n.verticalInner.value/e.vertical.size.value,ee(n.verticalInner.value),n.verticalInner.value))),e.vertical.style=d(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${e.vertical.thumbStart.value}px`,height:`${e.vertical.thumbSize.value}px`,right:`${l.horizontalOffset[1]}px`})),e.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),e.horizontal.percentage=d(()=>{const t=e.horizontal.size.value-n.horizontal.value;if(t<=0)return 0;const r=P(Math.abs(e.horizontal.position.value)/t,0,1);return Math.round(r*1e4)/1e4}),e.horizontal.thumbHidden=d(()=>(l.visible===null?S.value:l.visible)!==!0&&o.value===!1&&h.value===!1||e.horizontal.size.value<=n.horizontal.value+1),e.horizontal.thumbStart=d(()=>l.horizontalOffset[0]+e.horizontal.percentage.value*(n.horizontalInner.value-e.horizontal.thumbSize.value)),e.horizontal.thumbSize=d(()=>Math.round(P(n.horizontalInner.value*n.horizontalInner.value/e.horizontal.size.value,ee(n.horizontalInner.value),n.horizontalInner.value))),e.horizontal.style=d(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[i.$q.lang.rtl===!0?"right":"left"]:`${e.horizontal.thumbStart.value}px`,width:`${e.horizontal.thumbSize.value}px`,bottom:`${l.verticalOffset[1]}px`})),e.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const oe=d(()=>e.vertical.thumbHidden.value===!0&&e.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle);function E(){const t={};return Y.forEach(r=>{const c=e[r];Object.assign(t,{[r+"Position"]:c.position.value,[r+"Percentage"]:c.percentage.value,[r+"Size"]:c.size.value,[r+"ContainerSize"]:n[r].value,[r+"ContainerInnerSize"]:n[r+"Inner"].value})}),t}const H=me(()=>{const t=E();t.ref=i,O("scroll",t)},0);function Q(t,r,c){if(Y.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?L:C)(g.value,r,c)}function ne({height:t,width:r}){let c=!1;n.vertical.value!==t&&(n.vertical.value=t,c=!0),n.horizontal.value!==r&&(n.horizontal.value=r,c=!0),c===!0&&j()}function ie({position:t}){let r=!1;e.vertical.position.value!==t.top&&(e.vertical.position.value=t.top,r=!0),e.horizontal.position.value!==t.left&&(e.horizontal.position.value=t.left,r=!0),r===!0&&j()}function se({height:t,width:r}){e.horizontal.size.value!==r&&(e.horizontal.size.value=r,j()),e.vertical.size.value!==t&&(e.vertical.size.value=t,j())}function V(t,r){const c=e[r];if(t.isFirst===!0){if(c.thumbHidden.value===!0)return;u=c.position.value,h.value=!0}else if(h.value!==!0)return;t.isFinal===!0&&(h.value=!1);const x=A[r],k=(c.size.value-n[r].value)/(n[r+"Inner"].value-c.thumbSize.value),M=t.distance[x.dist],T=u+(t.direction===x.dir?1:-1)*M*k;N(T,r)}function F(t,r){const c=e[r];if(c.thumbHidden.value!==!0){const x=r==="vertical"?l.verticalOffset[0]:l.horizontalOffset[0],k=t[A[r].offset]-x,M=c.thumbStart.value-x;if(k<M||k>M+c.thumbSize.value){const T=k-c.thumbSize.value/2,de=P(T/(n[r+"Inner"].value-c.thumbSize.value),0,1);N(de*Math.max(0,c.size.value-n[r].value),r)}c.ref.value!==null&&c.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function j(){o.value=!0,v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,o.value=!1},l.delay),l.onScroll!==void 0&&H()}function N(t,r){g.value[A[r].scroll]=t}let z=null;function ue(){z!==null&&clearTimeout(z),z=setTimeout(()=>{z=null,S.value=!0},i.$q.platform.is.ios?50:0)}function ce(){z!==null&&(clearTimeout(z),z=null),S.value=!1}let I=null;he(()=>i.$q.lang.rtl,t=>{g.value!==null&&C(g.value,Math.abs(e.horizontal.position.value)*(t===!0?-1:1))}),pe(()=>{I={top:e.vertical.position.value,left:e.horizontal.position.value}}),ge(()=>{if(I===null)return;const t=g.value;t!==null&&(C(t,I.left),L(t,I.top))}),ze(H.cancel),Object.assign(i,{getScrollTarget:()=>g.value,getScroll:E,getScrollPosition:()=>({top:e.vertical.position.value,left:e.horizontal.position.value}),getScrollPercentage:()=>({top:e.vertical.percentage.value,left:e.horizontal.percentage.value}),setScrollPosition:Q,setScrollPercentage(t,r,c){Q(t,r*(e[t].size.value-n[t].value)*(t==="horizontal"&&i.$q.lang.rtl===!0?-1:1),c)}});const ve={scroll:e,thumbVertDir:[[W,t=>{V(t,"vertical")},void 0,{vertical:!0,...Z}]],thumbHorizDir:[[W,t=>{V(t,"horizontal")},void 0,{horizontal:!0,...Z}]],onVerticalMousedown(t){F(t,"vertical")},onHorizontalMousedown(t){F(t,"horizontal")}};return()=>p("div",{class:re.value,onMouseenter:ue,onMouseleave:ce},[p("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[p("div",{class:"q-scrollarea__content absolute",style:oe.value},ye(f.default,[p(U,{debounce:0,onResize:se})])),p(Pe,{axis:"both",onScroll:ie})]),p(U,{debounce:0,onResize:ne}),p(Me,{store:ve,barStyle:l.barStyle,verticalBarStyle:l.verticalBarStyle,horizontalBarStyle:l.horizontalBarStyle})])}});(function(){function l(i,a){var v=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);a&&(u=u.filter(function(g){return Object.getOwnPropertyDescriptor(i,g).enumerable})),v.push.apply(v,u)}return v}function f(i){for(var a=1;a<arguments.length;a++){var v=arguments[a]!=null?arguments[a]:{};a%2?l(Object(v),!0).forEach(function(u){O(i,u,v[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(v)):l(Object(v)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(v,u))})}return i}function O(i,a,v){return a in i?Object.defineProperty(i,a,{value:v,enumerable:!0,configurable:!0,writable:!0}):i[a]=v,i}var o="--pos-banner-fluid-41__",h={background:"#ffffff","grid-template-columns":"100%","grid-template-rows":"264px auto","max-width":"100%","text-font-size":"18px","text-small-font-size":"16px","text-margin":"0 0 12px 0","description-margin":"0 0 24px 0","button-wrap-max-width":"100%","bg-url":"url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41.svg')","bg-url-position":"center bottom","content-padding":"20px 24px 23px","content-grid-row":"0","logo-wrap-padding":"16px 12px 12px","logo-width":"65px","logo-wrap-top":"0","slogan-font-size":"12px"},S=function(i,a){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:o;Object.keys(i).forEach(function(u){a.style.setProperty(v+u,i[u])})},n=function(i,a){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:o;Object.keys(i).forEach(function(u){a.style.removeProperty(v+u)})};function e(){var i=document.documentElement,a=f({},h),v=document.getElementById("js-show-iframe-wrapper"),u=v?v.offsetWidth:document.body.offsetWidth;u>340&&(a["button-wrap-max-width"]="118px"),u>360&&(a["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41-2.svg')",a["content-padding"]="20px 24px",a["description-margin"]="0 0 20px 0"),u>568&&(a["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41.svg')",a["bg-url-position"]="calc(100% + 39px) bottom",a["grid-template-columns"]="1fr 292px",a["grid-template-rows"]="100%",a["content-grid-row"]="1",a["content-padding"]="50px 24px",a["description-margin"]="0 0 24px 0",a["button-wrap-max-width"]="100%"),u>640&&(a["button-wrap-max-width"]="118px"),u>783&&(a["grid-template-columns"]="1fr 390px",a["bg-url-position"]="center bottom",a["text-small-font-size"]="18px",a["content-padding"]="30px 24px"),u>820&&(a["grid-template-columns"]="1fr 420px",a["bg-url-position"]="center calc(100% + 12px)"),u>1020&&(a["bg-url-position"]="center calc(100% + 37px)"),u>1098&&(a["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41-2.svg')",a["grid-template-columns"]="1fr 557px",a["text-font-size"]="20px",a["content-padding"]="52px 50px",a["logo-width"]="78px",a["slogan-font-size"]="15px",a["logo-wrap-padding"]="20px 16px 16px"),u>1422&&(a["max-width"]="1422px",a["grid-template-columns"]="1fr 720px",a["content-padding"]="26px 50px",a["text-font-size"]="24px"),S(a,i)}e(),window.addEventListener("resize",e),window.onunload=function(){var i=document.documentElement,a=f({},h);window.removeEventListener("resize",e),n(a,i)}})();const qe={},Be={class:"partners"};function Te(l,f){return w(),B("div",Be,f[0]||(f[0]=[xe('<p class="parttitle" data-v-35344c7d>\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B</p><div class="logorow" data-v-35344c7d><div class="exxonbox" data-v-35344c7d><a href="https://www.sakhalin-1.com/ru-ru" data-v-35344c7d><div class="exxon" data-v-35344c7d></div></a></div><div class="exxonbox" data-v-35344c7d><a href="https://sakh.com" data-v-35344c7d><div class="sakhcom" data-v-35344c7d></div></a></div><div class="exxonbox" data-v-35344c7d><a href="https://astv.ru" data-v-35344c7d><div class="astv" data-v-35344c7d></div></a></div><div class="exxonbox" data-v-35344c7d><a href="https://myhistorypark.ru" data-v-35344c7d><div class="rmh" data-v-35344c7d></div></a></div></div>',2)]))}var Ce=D(qe,[["render",Te],["__scopeId","data-v-35344c7d"]]);const $e={};function Ae(l,f){return w(),ae(Ie,{dense:"",clickable:"",href:"https://github.com/symphograph/resume",target:"_blank"},{default:y(()=>[m(J,{avatar:""},{default:y(()=>[m(_e,{name:"img:/icons/github-mark-white.svg"})]),_:1}),m(J,null,{default:y(()=>[m(K,{caption:""},{default:y(()=>f[0]||(f[0]=[s("span",{style:{color:"#babab8"}},"\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A:",-1)])),_:1}),m(K,null,{default:y(()=>f[1]||(f[1]=[_("SymphoGraph")])),_:1})]),_:1})]),_:1})}var te=D($e,[["render",Ae]]);const De={class:"bg-grey-8 text-white"},Ee={class:"footer"},He={class:"footcol"},Qe={class:"footcol"},Ve={__name:"MainFooter",setup(l){const f=je();return we(()=>{}),(O,o)=>{const h=Oe("router-link");return w(),B($,null,[s("div",De,[m(Ce),q("",!0),s("div",Ee,[s("div",He,[o[0]||(o[0]=s("p",null,[s("a",{href:"tel:+74242300518"},"+7-4242-300-518")],-1)),o[1]||(o[1]=s("p",null,[s("a",{href:"mailto:mbu-gko@yandex.ru"},"mbu-gko@yandex.ru")],-1)),o[2]||(o[2]=s("p",null,[s("a",{href:"mailto:yusgo.mbuyusko@sakhalin.gov.ru"},"yusgo.mbuyusko@sakhalin.gov.ru")],-1)),o[3]||(o[3]=s("p",null,[s("a",{href:"https://maps.sakh.com/ys/objects/2602/",target:"_blank"},"\u0433. \u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A, \u0443\u043B.\u041B\u0435\u043D\u0438\u043D\u0430 \u0434. 156")],-1)),X(f).platform.is.desktop?(w(),B($,{key:0},[m(G,{spaced:"1em"}),m(te)],64)):q("",!0)]),o[12]||(o[12]=s("div",{class:"footcol"},[s("p",null,[_("\u041C\u0423\u041D\u0418\u0426\u0418\u041F\u0410\u041B\u042C\u041D\u041E\u0415 \u0411\u042E\u0414\u0416\u0415\u0422\u041D\u041E\u0415 \u0423\u0427\u0420\u0415\u0416\u0414\u0415\u041D\u0418\u0415"),s("br"),_('"\u042E\u0416\u041D\u041E-\u0421\u0410\u0425\u0410\u041B\u0418\u041D\u0421\u041A\u0418\u0419 \u0421\u0418\u041C\u0424\u041E\u041D\u0418\u0427\u0415\u0421\u041A\u0418\u0419 \u041E\u0420\u041A\u0415\u0421\u0422\u0420"')]),s("div",{id:"sputnikArea"},[s("span",{id:"sputnik-informer"})])],-1)),s("div",Qe,[o[6]||(o[6]=s("p",null,"\u0423\u0427\u0420\u0415\u0414\u0418\u0422\u0415\u041B\u0418",-1)),o[7]||(o[7]=s("p",null,[s("b",null,"\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0433.\u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A\u0430")],-1)),o[8]||(o[8]=s("p",null,"\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u0438 \u0442\u0443\u0440\u0438\u0437\u043C\u0430 \u0433.\u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A\u0430",-1)),s("p",null,[m(h,{to:"/main"},{default:y(()=>o[4]||(o[4]=[_("\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F")])),_:1})]),s("p",null,[m(h,{to:"/docs"},{default:y(()=>o[5]||(o[5]=[_("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")])),_:1})]),o[9]||(o[9]=s("br",null,null,-1)),o[10]||(o[10]=s("br",null,null,-1)),o[11]||(o[11]=s("p",null,[_("\u0415\u0434\u0438\u043D\u044B\u0439 \u043E\u0431\u0449\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0434\u0435\u0442\u0441\u043A\u0438\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E\u0432\u0435\u0440\u0438\u044F:"),s("br"),s("a",{href:"tel:+78002000122"},"8-800-2000-122")],-1)),X(f).platform.is.mobile?(w(),B($,{key:0},[m(G,{spaced:"1em"}),m(te)],64)):q("",!0)])])]),O.$route.fullPath!=="/staff"?(w(),ae(ke("script"),{key:0,src:"/js/sputnik.js"})):q("",!0)],64)}}};var Je=D(Ve,[["__scopeId","data-v-bcc2a6a8"]]);export{Je as M,We as Q};