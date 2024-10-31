import{r as D,a3 as pe,o as L,V as T,aa as C,K as A,au as N,h as m,g as M,az as Q,aA as me,w as O,aB as he,aC as be,aD as xe,c as x,W as Z,aE as ye,N as E,aF as we,aG as I,aH as P,aI as Y,ai as k,aJ as H,aK as z,a0 as ee,a4 as Se,aL as _e,Y as te,aq as Te,X as Ee,ar as Oe,Z as Ce,ag as qe,as as Ie,ao as Le,C as X,ak as Pe,aM as ke,z as K}from"./index.e7a4ac85.js";import{g as V,s as G}from"./touch.9135741d.js";import{c as ze}from"./selection.94a39ba5.js";import{b as je,Q as j}from"./QImg.da576236.js";import{Q as U}from"./QItemLabel.0376b164.js";function Be(){const t=D(!pe.value);return t.value===!1&&L(()=>{t.value=!0}),{isHydrated:t}}const ne=typeof ResizeObserver!="undefined",W=ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ye=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:c}){let r=null,l,e={width:-1,height:-1};function i(o){o===!0||t.debounce===0||t.debounce==="0"?s():r===null&&(r=setTimeout(s,t.debounce))}function s(){if(r!==null&&(clearTimeout(r),r=null),l){const{offsetWidth:o,offsetHeight:n}=l;(o!==e.width||n!==e.height)&&(e={width:o,height:n},c("resize",e))}}const{proxy:d}=M();if(d.trigger=i,ne===!0){let o;const n=u=>{l=d.$el.parentNode,l?(o=new ResizeObserver(i),o.observe(l),s()):u!==!0&&N(()=>{n(!0)})};return L(()=>{n()}),C(()=>{r!==null&&clearTimeout(r),o!==void 0&&(o.disconnect!==void 0?o.disconnect():l&&o.unobserve(l))}),A}else{let u=function(){r!==null&&(clearTimeout(r),r=null),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",i,Q.passive),n=void 0)},a=function(){u(),l&&l.contentDocument&&(n=l.contentDocument.defaultView,n.addEventListener("resize",i,Q.passive),s())};const{isHydrated:o}=Be();let n;return L(()=>{N(()=>{l=d.$el,l&&a()})}),C(u),()=>{if(o.value===!0)return m("object",{class:"q--avoid-card-border",style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:a})}}}});const{passive:J}=Q,De=["both","horizontal","vertical"];var Xe=T({name:"QScrollObserver",props:{axis:{type:String,validator:t=>De.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:me},emits:["scroll"],setup(t,{emit:c}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,e,i;O(()=>t.scrollTarget,()=>{o(),d()});function s(){l!==null&&l();const a=Math.max(0,be(e)),v=xe(e),p={top:a-r.position.top,left:v-r.position.left};if(t.axis==="vertical"&&p.top===0||t.axis==="horizontal"&&p.left===0)return;const h=Math.abs(p.top)>=Math.abs(p.left)?p.top<0?"up":"down":p.left<0?"left":"right";r.position={top:a,left:v},r.directionChanged=r.direction!==h,r.delta=p,r.directionChanged===!0&&(r.direction=h,r.inflectionPoint=r.position),c("scroll",{...r})}function d(){e=he(i,t.scrollTarget),e.addEventListener("scroll",n,J),n(!0)}function o(){e!==void 0&&(e.removeEventListener("scroll",n,J),e=void 0)}function n(a){if(a===!0||t.debounce===0||t.debounce==="0")s();else if(l===null){const[v,p]=t.debounce?[setTimeout(s,t.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{p(v),l=null}}}const{proxy:u}=M();return O(()=>u.$q.lang.rtl,s),L(()=>{i=u.$el.parentNode,d()}),C(()=>{l!==null&&l(),o()}),Object.assign(u,{trigger:n,getPosition:()=>r}),A}}),Ke=T({name:"QSpace",setup(){const t=m("div",{class:"q-space"});return()=>t}}),Ve=T({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:c}){const r=x(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:r.value,role:"toolbar"},Z(c.default))}});function B(t,c,r){const l=H(t);let e,i=l.left-c.event.x,s=l.top-c.event.y,d=Math.abs(i),o=Math.abs(s);const n=c.direction;n.horizontal===!0&&n.vertical!==!0?e=i<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?e=s<0?"up":"down":n.up===!0&&s<0?(e="up",d>o&&(n.left===!0&&i<0?e="left":n.right===!0&&i>0&&(e="right"))):n.down===!0&&s>0?(e="down",d>o&&(n.left===!0&&i<0?e="left":n.right===!0&&i>0&&(e="right"))):n.left===!0&&i<0?(e="left",d<o&&(n.up===!0&&s<0?e="up":n.down===!0&&s>0&&(e="down"))):n.right===!0&&i>0&&(e="right",d<o&&(n.up===!0&&s<0?e="up":n.down===!0&&s>0&&(e="down")));let u=!1;if(e===void 0&&r===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};e=c.event.lastDir,u=!0,e==="left"||e==="right"?(l.left-=i,d=0,i=0):(l.top-=s,o=0,s=0)}return{synthetic:u,payload:{evt:t,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:l,direction:e,isFirst:c.event.isFirst,isFinal:r===!0,duration:Date.now()-c.event.time,distance:{x:d,y:o},offset:{x:i,y:s},delta:{x:l.left-c.event.lastX,y:l.top-c.event.lastY}}}}let Qe=0;var Ge=ye({name:"touch-pan",beforeMount(t,{value:c,modifiers:r}){if(r.mouse!==!0&&E.has.touch!==!0)return;function l(i,s){r.mouse===!0&&s===!0?ee(i):(r.stop===!0&&k(i),r.prevent===!0&&Y(i))}const e={uid:"qvtp_"+Qe++,handler:c,modifiers:r,direction:V(r),noop:A,mouseStart(i){G(i,e)&&we(i)&&(I(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(i,!0))},touchStart(i){if(G(i,e)){const s=i.target;I(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),e.start(i)}},start(i,s){if(E.is.firefox===!0&&P(t,!0),e.lastEvt=i,s===!0||r.stop===!0){if(e.direction.all!==!0&&(s!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const n=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Y(n),i.cancelBubble===!0&&k(n),Object.assign(n,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[e.uid]:i.qClonedBy.concat(e.uid)}),e.initialEvent={target:i.target,event:n}}k(i)}const{left:d,top:o}=H(i);e.event={x:d,y:o,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:o}},move(i){if(e.event===void 0)return;const s=H(i),d=s.left-e.event.x,o=s.top-e.event.y;if(d===0&&o===0)return;e.lastEvt=i;const n=e.event.mouse===!0,u=()=>{l(i,n);let p;r.preserveCursor!==!0&&r.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ze(),e.styleCleanup=h=>{if(e.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),n===!0){const g=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{g(),h()},50):g()}else h!==void 0&&h()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(i,e.event.mouse);const{payload:p,synthetic:h}=B(i,e,!1);p!==void 0&&(e.handler(p)===!1?e.end(i):(e.styleCleanup===void 0&&e.event.isFirst===!0&&u(),e.event.lastX=p.position.left,e.event.lastY=p.position.top,e.event.lastDir=h===!0?void 0:p.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||n===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){u(),e.event.detected=!0,e.move(i);return}const a=Math.abs(d),v=Math.abs(o);a!==v&&(e.direction.horizontal===!0&&a>v||e.direction.vertical===!0&&a<v||e.direction.up===!0&&a<v&&o<0||e.direction.down===!0&&a<v&&o>0||e.direction.left===!0&&a>v&&d<0||e.direction.right===!0&&a>v&&d>0?(e.event.detected=!0,e.move(i)):e.end(i,!0))},end(i,s){if(e.event!==void 0){if(z(e,"temp"),E.is.firefox===!0&&P(t,!1),s===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(B(i===void 0?e.lastEvt:i,e).payload);const{payload:d}=B(i===void 0?e.lastEvt:i,e,!0),o=()=>{e.handler(d)};e.styleCleanup!==void 0?e.styleCleanup(o):o()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,r.mouse===!0){const i=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";I(e,"main",[[t,"mousedown","mouseStart",`passive${i}`]])}E.has.touch===!0&&I(e,"main",[[t,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,c){const r=t.__qtouchpan;r!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&r.end(),r.handler=c.value),r.direction=V(c.modifiers))},beforeUnmount(t){const c=t.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),z(c,"main"),z(c,"temp"),E.is.firefox===!0&&P(t,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete t.__qtouchpan)}}),He=T({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(t,{slots:c,emit:r}){let l=!1,e,i,s=null,d=null,o,n;function u(){e&&e(),e=null,l=!1,s!==null&&(clearTimeout(s),s=null),d!==null&&(clearTimeout(d),d=null),i!==void 0&&i.removeEventListener("transitionend",o),o=null}function a(g,b,y){b!==void 0&&(g.style.height=`${b}px`),g.style.transition=`height ${t.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,e=y}function v(g,b){g.style.overflowY=null,g.style.height=null,g.style.transition=null,u(),b!==n&&r(b)}function p(g,b){let y=0;i=g,l===!0?(u(),y=g.offsetHeight===g.scrollHeight?0:void 0):(n="hide",g.style.overflowY="hidden"),a(g,y,b),s=setTimeout(()=>{s=null,g.style.height=`${g.scrollHeight}px`,o=w=>{d=null,(Object(w)!==w||w.target===g)&&v(g,"show")},g.addEventListener("transitionend",o),d=setTimeout(o,t.duration*1.1)},100)}function h(g,b){let y;i=g,l===!0?u():(n="show",g.style.overflowY="hidden",y=g.scrollHeight),a(g,y,b),s=setTimeout(()=>{s=null,g.style.height=0,o=w=>{d=null,(Object(w)!==w||w.target===g)&&v(g,"hide")},g.addEventListener("transitionend",o),d=setTimeout(o,t.duration*1.1)},100)}return C(()=>{l===!0&&u()}),()=>m(Se,{css:!1,appear:t.appear,onEnter:p,onLeave:h},c.default)}});const _=_e({}),Ae=Object.keys(te);var Ue=T({name:"QExpansionItem",props:{...te,...Te,...Ee,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Oe,"click","afterShow","afterHide"],setup(t,{slots:c,emit:r}){const{proxy:{$q:l}}=M(),e=Ce(t,l),i=D(t.modelValue!==null?t.modelValue:t.defaultOpened),s=D(null),d=qe(),{show:o,hide:n,toggle:u}=Ie({showing:i});let a,v;const p=x(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${t.popup===!0?"popup":"standard"}`),h=x(()=>{if(t.contentInsetLevel===void 0)return null;const f=l.lang.rtl===!0?"Right":"Left";return{["padding"+f]:t.contentInsetLevel*56+"px"}}),g=x(()=>t.disable!==!0&&(t.href!==void 0||t.to!==void 0&&t.to!==null&&t.to!=="")),b=x(()=>{const f={};return Ae.forEach(S=>{f[S]=t[S]}),f}),y=x(()=>g.value===!0||t.expandIconToggle!==!0),w=x(()=>t.expandedIcon!==void 0&&i.value===!0?t.expandedIcon:t.expandIcon||l.iconSet.expansionItem[t.denseToggle===!0?"denseIcon":"icon"]),ie=x(()=>t.disable!==!0&&(g.value===!0||t.expandIconToggle===!0)),oe=x(()=>({expanded:i.value===!0,detailsId:d.value,toggle:u,show:o,hide:n})),$=x(()=>{const f=t.toggleAriaLabel!==void 0?t.toggleAriaLabel:l.lang.label[i.value===!0?"collapse":"expand"](t.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":d.value,"aria-label":f}});O(()=>t.group,f=>{v!==void 0&&v(),f!==void 0&&R()});function re(f){g.value!==!0&&u(f),r("click",f)}function ae(f){f.keyCode===13&&F(f,!0)}function F(f,S){S!==!0&&s.value!==null&&s.value.focus(),u(f),ee(f)}function se(){r("afterShow")}function le(){r("afterHide")}function R(){a===void 0&&(a=Le()),i.value===!0&&(_[t.group]=a);const f=O(i,q=>{q===!0?_[t.group]=a:_[t.group]===a&&delete _[t.group]}),S=O(()=>_[t.group],(q,ve)=>{ve===a&&q!==void 0&&q!==a&&n()});v=()=>{f(),S(),_[t.group]===a&&delete _[t.group],v=void 0}}function ue(){const f={class:[`q-focusable relative-position cursor-pointer${t.denseToggle===!0&&t.switchToggleSide===!0?" items-end":""}`,t.expandIconClass],side:t.switchToggleSide!==!0,avatar:t.switchToggleSide},S=[m(K,{class:"q-expansion-item__toggle-icon"+(t.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:w.value})];return ie.value===!0&&(Object.assign(f,{tabindex:0,...$.value,onClick:F,onKeyup:ae}),S.unshift(m("div",{ref:s,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),m(j,f,()=>S)}function ce(){let f;return c.header!==void 0?f=[].concat(c.header(oe.value)):(f=[m(j,()=>[m(U,{lines:t.labelLines},()=>t.label||""),t.caption?m(U,{lines:t.captionLines,caption:!0},()=>t.caption):null])],t.icon&&f[t.switchToggleSide===!0?"push":"unshift"](m(j,{side:t.switchToggleSide===!0,avatar:t.switchToggleSide!==!0},()=>m(K,{name:t.icon})))),t.disable!==!0&&t.hideExpandIcon!==!0&&f[t.switchToggleSide===!0?"unshift":"push"](ue()),f}function de(){const f={ref:"item",style:t.headerStyle,class:t.headerClass,dark:e.value,disable:t.disable,dense:t.dense,insetLevel:t.headerInsetLevel};return y.value===!0&&(f.clickable=!0,f.onClick=re,Object.assign(f,g.value===!0?b.value:$.value)),m(je,f,ce)}function fe(){return Pe(m("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:h.value,id:d.value},Z(c.default)),[[ke,i.value]])}function ge(){const f=[de(),m(He,{duration:t.duration,onShow:se,onHide:le},fe)];return t.expandSeparator===!0&&f.push(m(X,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:e.value}),m(X,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:e.value})),f}return t.group!==void 0&&R(),C(()=>{v!==void 0&&v()}),()=>m("div",{class:p.value},[m("div",{class:"q-expansion-item__container relative-position"},ge())])}});(function(){function t(o,n){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);n&&(a=a.filter(function(v){return Object.getOwnPropertyDescriptor(o,v).enumerable})),u.push.apply(u,a)}return u}function c(o){for(var n=1;n<arguments.length;n++){var u=arguments[n]!=null?arguments[n]:{};n%2?t(Object(u),!0).forEach(function(a){r(o,a,u[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):t(Object(u)).forEach(function(a){Object.defineProperty(o,a,Object.getOwnPropertyDescriptor(u,a))})}return o}function r(o,n,u){return n in o?Object.defineProperty(o,n,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[n]=u,o}var l="--pos-banner-fluid-41__",e={background:"#ffffff","grid-template-columns":"100%","grid-template-rows":"264px auto","max-width":"100%","text-font-size":"18px","text-small-font-size":"16px","text-margin":"0 0 12px 0","description-margin":"0 0 24px 0","button-wrap-max-width":"100%","bg-url":"url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41.svg')","bg-url-position":"center bottom","content-padding":"20px 24px 23px","content-grid-row":"0","logo-wrap-padding":"16px 12px 12px","logo-width":"65px","logo-wrap-top":"0","slogan-font-size":"12px"},i=function(o,n){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:l;Object.keys(o).forEach(function(a){n.style.setProperty(u+a,o[a])})},s=function(o,n){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:l;Object.keys(o).forEach(function(a){n.style.removeProperty(u+a)})};function d(){var o=document.documentElement,n=c({},e),u=document.getElementById("js-show-iframe-wrapper"),a=u?u.offsetWidth:document.body.offsetWidth;a>340&&(n["button-wrap-max-width"]="118px"),a>360&&(n["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41-2.svg')",n["content-padding"]="20px 24px",n["description-margin"]="0 0 20px 0"),a>568&&(n["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41.svg')",n["bg-url-position"]="calc(100% + 39px) bottom",n["grid-template-columns"]="1fr 292px",n["grid-template-rows"]="100%",n["content-grid-row"]="1",n["content-padding"]="50px 24px",n["description-margin"]="0 0 24px 0",n["button-wrap-max-width"]="100%"),a>640&&(n["button-wrap-max-width"]="118px"),a>783&&(n["grid-template-columns"]="1fr 390px",n["bg-url-position"]="center bottom",n["text-small-font-size"]="18px",n["content-padding"]="30px 24px"),a>820&&(n["grid-template-columns"]="1fr 420px",n["bg-url-position"]="center calc(100% + 12px)"),a>1020&&(n["bg-url-position"]="center calc(100% + 37px)"),a>1098&&(n["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/41/banner-fluid-bg-41-2.svg')",n["grid-template-columns"]="1fr 557px",n["text-font-size"]="20px",n["content-padding"]="52px 50px",n["logo-width"]="78px",n["slogan-font-size"]="15px",n["logo-wrap-padding"]="20px 16px 16px"),a>1422&&(n["max-width"]="1422px",n["grid-template-columns"]="1fr 720px",n["content-padding"]="26px 50px",n["text-font-size"]="24px"),i(n,o)}d(),window.addEventListener("resize",d),window.onunload=function(){var o=document.documentElement,n=c({},e);window.removeEventListener("resize",d),s(n,o)}})();export{Ye as Q,Ge as T,Xe as a,Ue as b,Ve as c,Ke as d,He as e};