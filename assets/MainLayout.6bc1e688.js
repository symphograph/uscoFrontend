import{c as Ye,u as et,a as tt,d as at,e as ot,f as nt,i as F,g as _e,r as $,h as w,j as lt,k as it,w as C,o as we,n as Te,l as st,m as J,p as le,q as De,s as rt,t as ut,v as dt,x as ct,y as z,z as f,A as E,B as l,C as n,D as S,Q as M,E as W,F as Z,G as re,H as u,I as P,J as Y,R as qe,K as ft,L as vt,_ as ue,M as mt,N as pt,O as xe,P as ke,S as $e,T as gt,U as H,V as _t,W as bt}from"./index.b0347da7.js";import{T as be}from"./TouchPan.9e27e03d.js";import{b as ie}from"./format.3e32b8d9.js";import{Q as ht}from"./QImg.60e78a62.js";import{Q as yt,a as wt,b as xt,c as kt,d as $t,e as St,M as Ct}from"./MainFooter.03759582.js";import{Q as Bt,a as Ot}from"./QLayout.a3f93ffa.js";import{Q as R,a as j,b as K}from"./QItem.5a948a3b.js";import{Q as je}from"./QList.c5a16c00.js";import{C as ye}from"./ClosePopup.8fdf7118.js";import{Q as Lt}from"./QTooltip.832d21b7.js";import{u as Me}from"./use-quasar.435d16fb.js";import{P as he}from"./LocalStorage.21f1bab1.js";import{api as se}from"./axios.fcd61a1b.js";import{n as Ee}from"./myFuncts.02e9a0a2.js";import"./touch.70a9dd44.js";import"./position-engine.1304be6f.js";import"./use-ratio.00e37c93.js";import"./rtl.6421e235.js";const Pe=150;var It=Ye({name:"QDrawer",inheritAttrs:!1,props:{...et,...tt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...at,"onLayout","miniState"],setup(t,{slots:x,emit:v,attrs:b}){const m=dt(),{proxy:{$q:h}}=m,s=ot(t,h),{preventBodyScroll:y}=ct(),{registerTimeout:i,removeTimeout:o}=nt(),e=F(ut,_e);if(e===_e)return console.error("QDrawer needs to be child of QLayout"),_e;let d,B=null,Q;const _=$(t.behavior==="mobile"||t.behavior!=="desktop"&&e.totalWidth.value<=t.breakpoint),I=w(()=>t.mini===!0&&_.value!==!0),p=w(()=>I.value===!0?t.miniWidth:t.width),c=$(t.showIfAbove===!0&&_.value===!1?!0:t.modelValue===!0),q=w(()=>t.persistent!==!0&&(_.value===!0||Qe.value===!0));function U(a,r){if(g(),a!==!1&&e.animate(),D(0),_.value===!0){const O=e.instances[oe.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),V(1),e.isContainer.value!==!0&&y(!0)}else V(0),a!==!1&&me(!1);i(()=>{a!==!1&&me(!0),r!==!0&&v("show",a)},Pe)}function ae(a,r){L(),a!==!1&&e.animate(),V(0),D(A.value*p.value),pe(),r!==!0?i(()=>{v("hide",a)},Pe):o()}const{show:ee,hide:G}=lt({showing:c,hideOnRouteChange:q,handleShow:U,handleHide:ae}),{addToHistory:g,removeFromHistory:L}=it(c,G,q),T={belowBreakpoint:_,hide:G},k=w(()=>t.side==="right"),A=w(()=>(h.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),Be=$(0),X=$(!1),de=$(!1),Oe=$(p.value*A.value),oe=w(()=>k.value===!0?"left":"right"),ce=w(()=>c.value===!0&&_.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:p.value:0),fe=w(()=>t.overlay===!0||t.miniToOverlay===!0||e.view.value.indexOf(k.value?"R":"L")>-1||h.platform.is.ios===!0&&e.isContainer.value===!0),te=w(()=>t.overlay===!1&&c.value===!0&&_.value===!1),Qe=w(()=>t.overlay===!0&&c.value===!0&&_.value===!1),We=w(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&X.value===!1?" hidden":"")),Ae=w(()=>({backgroundColor:`rgba(0,0,0,${Be.value*.4})`})),Le=w(()=>k.value===!0?e.rows.value.top[2]==="r":e.rows.value.top[0]==="l"),Ve=w(()=>k.value===!0?e.rows.value.bottom[2]==="r":e.rows.value.bottom[0]==="l"),Ne=w(()=>{const a={};return e.header.space===!0&&Le.value===!1&&(fe.value===!0?a.top=`${e.header.offset}px`:e.header.space===!0&&(a.top=`${e.header.size}px`)),e.footer.space===!0&&Ve.value===!1&&(fe.value===!0?a.bottom=`${e.footer.offset}px`:e.footer.space===!0&&(a.bottom=`${e.footer.size}px`)),a}),He=w(()=>{const a={width:`${p.value}px`,transform:`translateX(${Oe.value}px)`};return _.value===!0?a:Object.assign(a,Ne.value)}),Fe=w(()=>"q-drawer__content fit "+(e.isContainer.value!==!0?"scroll":"overflow-auto")),Re=w(()=>`q-drawer q-drawer--${t.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(_.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${I.value===!0?"mini":"standard"}`+(fe.value===!0||te.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),Ue=w(()=>{const a=h.lang.rtl===!0?t.side:oe.value;return[[be,Je,void 0,{[a]:!0,mouse:!0}]]}),Ge=w(()=>{const a=h.lang.rtl===!0?oe.value:t.side;return[[be,Ie,void 0,{[a]:!0,mouse:!0}]]}),Ke=w(()=>{const a=h.lang.rtl===!0?oe.value:t.side;return[[be,Ie,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){Ze(_,t.behavior==="mobile"||t.behavior!=="desktop"&&e.totalWidth.value<=t.breakpoint)}C(_,a=>{a===!0?(d=c.value,c.value===!0&&G(!1)):t.overlay===!1&&t.behavior!=="mobile"&&d!==!1&&(c.value===!0?(D(0),V(0),pe()):ee(!1))}),C(()=>t.side,(a,r)=>{e.instances[r]===T&&(e.instances[r]=void 0,e[r].space=!1,e[r].offset=0),e.instances[a]=T,e[a].size=p.value,e[a].space=te.value,e[a].offset=ce.value}),C(e.totalWidth,()=>{(e.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),C(()=>t.behavior+t.breakpoint,ve),C(e.isContainer,a=>{c.value===!0&&y(a!==!0),a===!0&&ve()}),C(e.scrollbarWidth,()=>{D(c.value===!0?0:void 0)}),C(ce,a=>{N("offset",a)}),C(te,a=>{v("onLayout",a),N("space",a)}),C(k,()=>{D()}),C(p,a=>{D(),ge(t.miniToOverlay,a)}),C(()=>t.miniToOverlay,a=>{ge(a,p.value)}),C(()=>h.lang.rtl,()=>{D()}),C(()=>t.mini,()=>{t.modelValue===!0&&(Xe(),e.animate())}),C(I,a=>{v("miniState",a)});function D(a){a===void 0?Te(()=>{a=c.value===!0?0:p.value,D(A.value*a)}):(e.isContainer.value===!0&&k.value===!0&&(_.value===!0||Math.abs(a)===p.value)&&(a+=A.value*e.scrollbarWidth.value),Oe.value=a)}function V(a){Be.value=a}function me(a){const r=a===!0?"remove":e.isContainer.value!==!0?"add":"";r!==""&&document.body.classList[r]("q-body--drawer-toggle")}function Xe(){B!==null&&clearTimeout(B),m.proxy&&m.proxy.$el&&m.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,B=setTimeout(()=>{B=null,de.value=!1,m&&m.proxy&&m.proxy.$el&&m.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Je(a){if(c.value!==!1)return;const r=p.value,O=ie(a.distance.x,0,r);if(a.isFinal===!0){O>=Math.min(75,r)===!0?ee():(e.animate(),V(0),D(A.value*r)),X.value=!1;return}D((h.lang.rtl===!0?k.value!==!0:k.value)?Math.max(r-O,0):Math.min(0,O-r)),V(ie(O/r,0,1)),a.isFirst===!0&&(X.value=!0)}function Ie(a){if(c.value!==!0)return;const r=p.value,O=a.direction===t.side,ne=(h.lang.rtl===!0?O!==!0:O)?ie(a.distance.x,0,r):0;if(a.isFinal===!0){Math.abs(ne)<Math.min(75,r)===!0?(e.animate(),V(1),D(0)):G(),X.value=!1;return}D(A.value*ne),V(ie(1-ne/r,0,1)),a.isFirst===!0&&(X.value=!0)}function pe(){y(!1),me(!0)}function N(a,r){e.update(t.side,a,r)}function Ze(a,r){a.value!==r&&(a.value=r)}function ge(a,r){N("size",a===!0?t.miniWidth:r)}return e.instances[t.side]=T,ge(t.miniToOverlay,p.value),N("space",te.value),N("offset",ce.value),t.showIfAbove===!0&&t.modelValue!==!0&&c.value===!0&&t["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!0),we(()=>{v("onLayout",te.value),v("miniState",I.value),d=t.showIfAbove===!0;const a=()=>{(c.value===!0?U:ae)(!1,!0)};if(e.totalWidth.value!==0){Te(a);return}Q=C(e.totalWidth,()=>{Q(),Q=void 0,c.value===!1&&t.showIfAbove===!0&&_.value===!1?ee(!1):a()})}),st(()=>{Q!==void 0&&Q(),B!==null&&(clearTimeout(B),B=null),c.value===!0&&pe(),e.instances[t.side]===T&&(e.instances[t.side]=void 0,N("size",0),N("offset",0),N("space",!1))}),()=>{const a=[];_.value===!0&&(t.noSwipeOpen===!1&&a.push(J(le("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ue.value)),a.push(De("div",{ref:"backdrop",class:We.value,style:Ae.value,"aria-hidden":"true",onClick:G},void 0,"backdrop",t.noSwipeBackdrop!==!0&&c.value===!0,()=>Ke.value)));const r=I.value===!0&&x.mini!==void 0,O=[le("div",{...b,key:""+r,class:[Fe.value,b.class]},r===!0?x.mini():rt(x.default))];return t.elevated===!0&&c.value===!0&&O.push(le("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(De("aside",{ref:"content",class:Re.value,style:He.value},O,"contentclose",t.noSwipeClose!==!0&&_.value===!0,()=>Ge.value)),le("div",{class:"q-drawer-container"},a)}}});const Tt={key:0,class:"q-pa-md",style:{"max-width":"350px"}},Dt=u("img",{src:"/usso.logo.svg"},null,-1),qt=["src"],Mt={__name:"DrawerContent",setup(t){const x=F("tabList"),v=F("editMode"),b=F("admin");return(m,h)=>z(x)?(f(),E("div",Tt,[l(je,{separator:""},{default:n(()=>[J((f(),S(R,{clickable:"",tabindex:"0",to:"/"},{default:n(()=>[l(j,{avatar:""},{default:n(()=>[l(M,{square:""},{default:n(()=>[Dt]),_:1})]),_:1}),l(j,null,{default:n(()=>[l(K,null,{default:n(()=>[W("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")]),_:1}),l(K,{lines:"2",caption:""},{default:n(()=>[W("\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430")]),_:1})]),_:1})]),_:1})),[[ye]]),(f(!0),E(Z,null,re(z(x),s=>(f(),E(Z,{key:s.id},[s.expand?(f(),S(yt,{key:0,"content-inset-level":.2,"expand-separator":"",icon:s.icon,label:s.label,caption:s.caption,"default-closed":""},{default:n(()=>[(f(!0),E(Z,null,re(s.tabs,y=>J((f(),S(R,{key:y.id,clickable:"",tabindex:"0",to:y.url},{default:n(()=>[l(j,{avatar:""},{default:n(()=>[y.ava?(f(),S(M,{key:0},{default:n(()=>[u("img",{src:y.ava},null,8,qt)]),_:2},1024)):P("",!0),y.icon?(f(),S(M,{key:1,icon:y.icon,color:"#ecd872","text-color":"secondary"},null,8,["icon"])):P("",!0)]),_:2},1024),l(j,null,{default:n(()=>[l(K,null,{default:n(()=>[W(Y(y.name),1)]),_:2},1024),l(K,{lines:"2",caption:""},{default:n(()=>[W(Y(y.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[ye]])),128))]),_:2},1032,["content-inset-level","icon","label","caption"])):J((f(),S(R,{key:1,to:s.url,clickable:"","expand-separator":""},{default:n(()=>[l(j,null,{default:n(()=>[W(Y(s.label),1)]),_:2},1024)]),_:2},1032,["to"])),[[qe]])],64))),128)),z(b)?J((f(),S(R,{key:0,tag:"label"},{default:n(()=>[l(j,{avatar:""},{default:n(()=>[l(M,{icon:"edit","text-color":z(v)?"red":"grey"},null,8,["text-color"])]),_:1}),l(j),l(j,null,{default:n(()=>[l(ft,{modelValue:z(v),"onUpdate:modelValue":h[0]||(h[0]=s=>vt(v)?v.value=s:null),"left-label":"",color:"red"},null,8,["modelValue"])]),_:1})]),_:1})),[[qe]]):P("",!0)]),_:1})])):P("",!0)}};function Et(t,x,v){const b="js-show-iframe-wrapper",m="pos-block-action";let h=v?"true":"false";t+="?opaId="+x+"&fz59="+h;let s=document.createElement("div"),y=document.createElement("header"),i=document.createElement("div"),o=document.getElementsByTagName("body")[0];s.style.background="white",s.style.position="fixed",s.style.maxWidth="620px",s.style.maxHeight="768px",s.style.margin="auto",s.style.top="0",s.style.bottom="0",s.style.left="0",s.style.right="0",s.style.zIndex="999999999",i.style.position="fixed",i.style.zIndex="999999998",i.style.width="100%",i.style.height="100%",i.style.top="0",i.style.left="0",i.style.backgroundColor="rgba(0,0,0,.3)",s.setAttribute("id","js-iframe-wrapper"),i.setAttribute("id","js-iframe-overlay");let e=document.createElement("iframe");e.style.width="100%",e.style.height="100%",e.style.border="0",e.setAttribute("src",t),e.setAttribute("id","js-iframe-widget"),e.referrerPolicy="unsafe-url",s.appendChild(e),y.innerHTML="\u041D\u043E\u0432\u043E\u0435 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435";function d(){let p=document.getElementsByTagName("body")[0],c=document.getElementById("js-iframe-overlay"),q=document.getElementById("js-iframe-wrapper");q&&p.removeChild(q),c&&p.removeChild(c)}function B(){o.appendChild(s),o.appendChild(i)}function Q(){d()}function _(){B()}const I=document.getElementById(b);I&&(I.addEventListener("click",function(p){p.preventDefault(),_()}),I.addEventListener("touchend",function(p){document.getElementById(b).classList.contains(m)?setTimeout(function(){document.getElementById(b).classList.remove(m)},0):_()}),I.addEventListener("touchmove",function(p){document.getElementById(b).classList.add(m)})),window.addEventListener("message",function(p){p.data.close&&Q()},!1),function(){const c=document.getElementById(b),q=c.querySelector(".bf-1 .pos-banner-btn_2")||c.querySelector(".bf-2 .pos-banner-btn_2");if(c){const U=c.querySelector(".bf-1__slogan")||c.querySelector(".bf-2__slogan");U&&(U.innerHTML="\u0420\u0435\u0448\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435"),q&&(q.innerHTML="\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435",q.style.width="240px")}}()}const Pt={id:"js-show-iframe-wrapper"},jt=mt('<div class="pos-banner-fluid bf-41" data-v-773287ba><div class="bf-41__decor" data-v-773287ba><div class="bf-41__logo-wrap" data-v-773287ba><img class="bf-41__logo" src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg" alt="\u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433\u0438" data-v-773287ba><div class="bf-41__slogan" data-v-773287ba>\u0420\u0435\u0448\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435</div></div></div><div class="bf-41__content" data-v-773287ba><div class="bf-41__description" data-v-773287ba><span class="bf-41__text" data-v-773287ba> \u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0433\u043E\u0441\u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438, \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438\u043B\u0438 \u043F\u043B\u043E\u0445\u0430\u044F \u0441\u0432\u044F\u0437\u044C? </span><span class="bf-41__text bf-41__text_small" data-v-773287ba> \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C\xA0\u2014 \u041C\u0438\u043D\u0446\u0438\u0444\u0440\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0441 \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C </span></div><div class="bf-41__bottom-wrap" data-v-773287ba><div class="bf-41__btn-wrap" data-v-773287ba><button class="pos-banner-btn_2" type="button" data-v-773287ba>\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C </button></div></div></div></div>',1),zt=[jt];(function(){function t(i,o){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);o&&(d=d.filter(function(B){return Object.getOwnPropertyDescriptor(i,B).enumerable})),e.push.apply(e,d)}return e}function x(i){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?arguments[o]:{};o%2?t(Object(e),!0).forEach(function(d){v(i,d,e[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(e,d))})}return i}function v(i,o,e){return o in i?Object.defineProperty(i,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[o]=e,i}var b="--pos-banner-fluid-41__",m={background:"#ffffff","grid-template-columns":"100%","grid-template-rows":"264px auto","max-width":"100%","text-font-size":"18px","text-small-font-size":"16px","text-margin":"0 0 12px 0","description-margin":"0 0 24px 0","button-wrap-max-width":"100%","bg-url":"url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41.svg')","bg-url-position":"center bottom","content-padding":"20px 24px 23px","content-grid-row":"0","logo-wrap-padding":"16px 12px 12px","logo-width":"65px","logo-wrap-top":"0","slogan-font-size":"12px"},h=function(i,o){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b;Object.keys(i).forEach(function(d){o.style.setProperty(e+d,i[d])})},s=function(i,o){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b;Object.keys(i).forEach(function(d){o.style.removeProperty(e+d)})};function y(){var i=document.documentElement,o=x({},m),e=document.getElementById("js-show-iframe-wrapper"),d=e?e.offsetWidth:document.body.offsetWidth;d>340&&(o["button-wrap-max-width"]="118px"),d>360&&(o["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41-2.svg')",o["content-padding"]="20px 24px",o["description-margin"]="0 0 20px 0"),d>568&&(o["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41.svg')",o["bg-url-position"]="calc(100% + 39px) bottom",o["grid-template-columns"]="1fr 292px",o["grid-template-rows"]="100%",o["content-grid-row"]="1",o["content-padding"]="50px 24px",o["description-margin"]="0 0 24px 0",o["button-wrap-max-width"]="100%"),d>640&&(o["button-wrap-max-width"]="118px"),d>783&&(o["grid-template-columns"]="1fr 390px",o["bg-url-position"]="center bottom",o["text-small-font-size"]="18px",o["content-padding"]="30px 24px"),d>820&&(o["grid-template-columns"]="1fr 420px",o["bg-url-position"]="center calc(100% + 12px)"),d>1020&&(o["bg-url-position"]="center calc(100% + 37px)"),d>1098&&(o["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41-2.svg')",o["grid-template-columns"]="1fr 557px",o["text-font-size"]="20px",o["content-padding"]="52px 50px",o["logo-width"]="78px",o["slogan-font-size"]="15px",o["logo-wrap-padding"]="20px 16px 16px"),d>1422&&(o["max-width"]="1422px",o["grid-template-columns"]="1fr 720px",o["content-padding"]="26px 50px",o["text-font-size"]="24px"),h(o,i)}y(),window.addEventListener("resize",y),window.onunload=function(){var i=document.documentElement,o=x({},m);window.removeEventListener("resize",y),s(o,i)}})();const Qt={__name:"GosUslugi",setup(t){return we(()=>{Et("https://pos.gosuslugi.ru/form",294755)}),(x,v)=>(f(),E("div",Pt,zt))}};var Wt=ue(Qt,[["__scopeId","data-v-773287ba"]]);const ze=t=>(xe("data-v-b4c6e3ce"),t=t(),ke(),t),At=ze(()=>u("img",{src:"/usso.logo.svg"},null,-1)),Vt=["src"],Nt=ze(()=>u("img",{src:"/icons/glasses2.svg"},null,-1)),Ht={__name:"MainHeader",emits:["moveDraver"],setup(t,{emit:x}){const v=F("tabList"),b=$(0),m=F("editMode");F("lvl");const h=F("admin");function s(){x("moveDraver",b)}return(y,i)=>z(v)?(f(),S($t,{key:0,class:"bg-header text-white bg absolute-top","height-hint":"48"},{default:n(()=>[l(pt,{class:"absolute",style:{top:"0.5em",left:"1em","z-index":"1"},dense:"",flat:"",round:"",icon:"menu",modelValue:b.value,"onUpdate:modelValue":i[0]||(i[0]=o=>b.value=o),onClick:s},null,8,["modelValue"]),l(wt,{"inline-label":"",class:"bg-primary text-white shadow-2 mobile-hide",align:"center"},{default:n(()=>[l(R,{clickable:"",to:"/"},{default:n(()=>[l(M,{square:""},{default:n(()=>[At]),_:1})]),_:1}),(f(!0),E(Z,null,re(z(v),o=>(f(),E(Z,{key:o.id},[o.expand?(f(),S(xt,{key:0,stretch:"",flat:"",label:o.label},{default:n(()=>[l(je,{style:{width:"18em"}},{default:n(()=>[l(K,{header:""},{default:n(()=>[W(Y(o.caption),1)]),_:2},1024),(f(!0),E(Z,null,re(o.tabs,e=>J((f(),S(R,{key:e.id,clickable:"",tabindex:"0",to:e.url},{default:n(()=>[l(j,{avatar:""},{default:n(()=>[e.ava?(f(),S(M,{key:0,color:"seconfary","text-color":"white"},{default:n(()=>[u("img",{src:e.ava},null,8,Vt)]),_:2},1024)):P("",!0),e.icon?(f(),S(M,{key:1,icon:e.icon,color:"#ecd872","text-color":"secondary"},null,8,["icon"])):P("",!0)]),_:2},1024),l(j,null,{default:n(()=>[l(K,{color:"primary"},{default:n(()=>[W(Y(e.name),1)]),_:2},1024),l(K,{lines:"2",caption:""},{default:n(()=>[W(Y(e.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[ye]])),128))]),_:2},1024)]),_:2},1032,["label"])):(f(),S(kt,{key:1,to:o.url,label:o.label},null,8,["to","label"]))],64))),128)),l(R,{clickable:"",onclick:"finevision.activate_navbar()"},{default:n(()=>[l(Lt,{class:"bg-gray",offset:[10,10]},{default:n(()=>[W(" \u0412\u0435\u0440\u0441\u0438\u044F \u0434\u043B\u044F \u0441\u043B\u0430\u0431\u043E\u0432\u0438\u0434\u044F\u0449\u0438\u0445 ")]),_:1}),l(M,{"text-color":"white"},{default:n(()=>[Nt]),_:1})]),_:1}),z(h)?(f(),S(R,{key:0,clickable:"",onClick:i[1]||(i[1]=o=>m.value=!z(m))},{default:n(()=>[l(M,{icon:"edit","text-color":z(m)?"red":"grey"},null,8,["text-color"])]),_:1})):P("",!0)]),_:1})]),_:1})):P("",!0)}};var Ft=ue(Ht,[["__scopeId","data-v-b4c6e3ce"]]);const Rt={name:"SiteNameDesktop"},Se=t=>(xe("data-v-4f71e27a"),t=t(),ke(),t),Ut={class:"bg-primary text-white topin"},Gt={class:"logo-area"},Kt=Se(()=>u("img",{src:"/usso.logo.svg"},null,-1)),Xt=Se(()=>u("div",{id:"orgname"},[u("span",{id:"us"},"\u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A\u0438\u0439"),u("br"),u("span",{id:"sim"},"\u0441\u0438\u043C\u0444\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439"),u("br"),u("span",{id:"or"},"\u043E\u0440\u043A\u0435\u0441\u0442\u0440")],-1)),Jt={class:"conduct-area"},Zt=Se(()=>u("div",{class:"conductor"},[u("span",null,"\u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"),u("span",null,"\u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440"),u("a",{href:"/conductor"},[u("span",{class:"tsa"},"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D")])],-1));function Yt(t,x,v,b,m,h){const s=$e("router-link");return f(),E("div",Ut,[l(s,{to:"/"},{default:n(()=>[u("div",Gt,[l(M,{square:"",size:"100px"},{default:n(()=>[Kt]),_:1}),Xt])]),_:1}),u("div",Jt,[l(s,{to:"/conductor"},{default:n(()=>[Zt]),_:1})])])}var ea=ue(Rt,[["render",Yt],["__scopeId","data-v-4f71e27a"]]);const ta={name:"SiteNameMobile"},Ce=t=>(xe("data-v-e3d3cf9e"),t=t(),ke(),t),aa={class:"bg-primary text-white topin"},oa={class:"logo-area"},na=Ce(()=>u("img",{src:"/usso.logo.svg"},null,-1)),la=Ce(()=>u("div",{id:"orgname"},[u("span",{id:"us"},"\u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A\u0438\u0439"),u("br"),u("span",{id:"sim"},"\u0441\u0438\u043C\u0444\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439"),u("br"),u("span",{id:"or"},"\u043E\u0440\u043A\u0435\u0441\u0442\u0440")],-1)),ia={class:"conduct-area"},sa=Ce(()=>u("div",{class:"conductor"},[u("span",null,"\u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"),u("span",null,"\u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440"),u("a",{href:"/conductor"},[u("span",{class:"tsa"},"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D")])],-1));function ra(t,x,v,b,m,h){const s=$e("router-link");return f(),E("div",aa,[l(s,{to:"/"},{default:n(()=>[u("div",oa,[l(M,{square:"",size:"65px"},{default:n(()=>[na]),_:1}),la])]),_:1}),u("div",ia,[l(s,{to:"/conductor"},{default:n(()=>[sa]),_:1})])])}var ua=ue(ta,[["render",ra],["__scopeId","data-v-e3d3cf9e"]]);const da={key:1,class:"header-image mobile-hide",style:{"z-index":"-100"}},Ia={__name:"MainLayout",setup(t){const x=Me(),v=String("https://api.sakh-orch.ru/"),b=x.cookies.getAll(),m=gt(),h=$("lvl");H("lvl",h);const s=$(!1);H("admin",s);const y=String(""),i=$([{id:1,expand:!0,label:"\u042E\u0421\u0421\u041E",caption:"\u041E\u0431 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0435",ava:"",icon:"/img:usso.logo.svg",tabs:[{id:1,name:"\u0422\u0438\u0433\u0440\u0430\u043D \u0410\u0445\u043D\u0430\u0437\u0430\u0440\u044F\u043D",caption:"\u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0438 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0434\u0438\u0440\u0438\u0436\u0435\u0440",url:"/conductor",ava:"/img/avatars/tsa.png",icon:!1},{id:2,name:"\u0421\u043E\u0441\u0442\u0430\u0432 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430",caption:"\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0440\u0442\u0438\u0441\u0442\u043E\u0432",url:"/staff",ava:"",icon:"groups"},{id:3,name:"\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0417\u0440\u0430\u0436\u0430\u0435\u0432",caption:"\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430",url:"/AlexandrZrazaev",ava:"/img/avatars/zag.jpg",icon:!1},{id:4,name:"\u0418\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0430",caption:'"\u0422\u044B \u043F\u043E\u043C\u043D\u0438\u0448\u044C, \u043A\u0430\u043A \u0432\u0441\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u043B\u043E\u0441\u044C?.."',url:"/history",ava:"",icon:"history_edu"}]},{id:2,expand:!1,url:"/vacancies",label:"\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438"},{id:3,expand:!1,url:"/announces",label:"\u0410\u0444\u0438\u0448\u0438"},{id:4,expand:!0,label:"\u043C\u0435\u0434\u0438\u0430",caption:"\u0424\u043E\u0442\u043E \u0438 \u0432\u0438\u0434\u0435\u043E",tabs:[{id:1,name:"\u0424\u043E\u0442\u043E",caption:"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430",url:"/gallery/0",ava:"",icon:"photo_camera"},{id:2,name:"\u0412\u0438\u0434\u0435\u043E",caption:"\u0412\u0438\u0434\u0435\u043E\u0437\u0430\u043F\u0438\u0441\u0438",url:"/video",ava:"",icon:"smart_display"}]},{id:5,expand:!0,label:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438",caption:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438",tabs:[{id:1,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u042E\u0421\u0421\u041E",caption:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430",url:"/news/usco",ava:"/img/logo/logo_init.svg",icon:""},{id:2,name:"\u0417\u0432\u0435\u0437\u0434\u044B \u042D\u0432\u0442\u0435\u0440\u043F\u044B",caption:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C",url:"/news/euterpe",ava:"/img/logo/logo_init.svg",icon:""},{id:3,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",caption:"\u041F\u0440\u043E\u0447\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",url:"/news/other",ava:"",icon:"volunteer_activism"},{id:4,name:"\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",caption:"\u041E\u0431\u043E \u0432\u0441\u0435\u043C",url:"/news/all",ava:"",icon:"receipt_long"}]},{id:6,expand:!1,url:"/contacts",label:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"},{id:7,expand:!0,label:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",caption:"",tabs:[{id:1,name:"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F",caption:"",url:"/main",ava:"/img/logo/logo_init.svg",icon:""},{id:2,name:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",caption:"",url:"/docs",ava:"",icon:"folder"},{id:3,name:"\u0412\u043C\u0435\u0441\u0442\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u0438!",caption:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0434\u0435\u0436\u043D\u044B\u0439 \u043A\u043E\u043D\u043A\u0443\u0440\u0441",url:"/corrupt",ava:"/img/docs/logo-md.webp",icon:""}]}]);H("tabList",i);const o=$("");H("token",o);const e=$(!1);H("progress",e);const d=$([]);H("announceList",d);const B=$(null);function Q(){_.value=!_.value}const _=$(!1);function I(){se.post(v+"api/auth/session.php",{params:{path:m.path}}).then(g=>{var L,T,k;if(!((L=g==null?void 0:g.data)!=null&&L.result))throw new Error;B.value=(k=(T=g==null?void 0:g.data)==null?void 0:T.data)!=null?k:null,s.value=[4].some(A=>B.value.Powers.includes(A)),c()}).catch(g=>{var L;if(((L=g==null?void 0:g.response)==null?void 0:L.status)===401){q();return}x.notify(Ee(g))})}const p=$(null);H("Halls",p);function c(){se.post(v+"api/get/options.php",{params:{}}).then(g=>{var L,T,k;p.value=(k=(T=(L=g==null?void 0:g.data)==null?void 0:L.data)==null?void 0:T.Halls)!=null?k:null}).catch(g=>{x.notify(Ee(g))})}function q(){window.location.href=v+"auth/usco.php?debug="+y+"&path="+m.path}const U=$(!1);H("editMode",U);function ae(){if(b.token){o.value=b.token;return}o.value=""}_t(()=>{ae()}),we(()=>{se.defaults.headers.common.Authorization=o.value,se.defaults.headers.common.Accept="application/json",I(),G()});function ee(){he.set("CookieConfirm","1")}C(m,g=>{he.set("lastPath",g.path)});function G(){const g=Me();he.getItem("CookieConfirm")||g.notify({message:"\u041C\u044B \u0442\u043E\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C Cookies. \u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0431\u0435\u0437 \u043D\u0438\u0445 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.",color:"primary",timeout:0,multiLine:!0,onDismiss:ee,icon:"ion-information-circle-outline",actions:[{label:"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",color:"yellow",handler:()=>{}}]})}return(g,L)=>{const T=$e("router-view");return f(),S(Bt,{view:"hHh lpR lfr"},{default:n(()=>[l(Ft,{onMoveDraver:Q}),l(It,{modelValue:_.value,"onUpdate:modelValue":L[0]||(L[0]=k=>_.value=k),side:"left",elevated:""},{default:n(()=>[l(Mt)]),_:1},8,["modelValue"]),B.value?(f(),S(Ot,{key:0},{default:n(()=>[P("",!0),g.$route.fullPath==="/"?(f(),E("div",da,[l(ht,{src:"img/header-bg.jpg"})])):P("",!0),l(St,{elevated:"",class:"bg-primary text-white shadow-5"},{default:n(()=>[l(ea,{class:"desktop-only"}),l(ua,{class:"mobile-only"})]),_:1}),l(T),(f(),S(bt("script"),{src:"https://pos.gosuslugi.ru/bin/script.min.js"})),l(Wt)]),_:1})):P("",!0),l(Ct)]),_:1})}}};export{Ia as default};
