import{r as X,a3 as Y,o as g,S as F,aa as w,K as q,au as x,h as k,g as H,aC as S,w as O,aD as $,aE as B,aF as N,aG as Q,N as m,aH as R,aI as h,aJ as b,aK as M,ai as y,aL as T,aM as C,_ as V}from"./index.39305a7a.js";import{g as P,s as D}from"./touch.3df10340.js";import{c as j}from"./selection.45595293.js";function K(){const r=X(!Y.value);return r.value===!1&&g(()=>{r.value=!0}),{isHydrated:r}}const A=typeof ResizeObserver!="undefined",L=A===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Z=F({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(r,{emit:a}){let i=null,u,e={width:-1,height:-1};function t(s){s===!0||r.debounce===0||r.debounce==="0"?o():i===null&&(i=setTimeout(o,r.debounce))}function o(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:s,offsetHeight:n}=u;(s!==e.width||n!==e.height)&&(e={width:s,height:n},a("resize",e))}}const{proxy:l}=H();if(l.trigger=t,A===!0){let s;const n=f=>{u=l.$el.parentNode,u?(s=new ResizeObserver(t),s.observe(u),o()):f!==!0&&x(()=>{n(!0)})};return g(()=>{n()}),w(()=>{i!==null&&clearTimeout(i),s!==void 0&&(s.disconnect!==void 0?s.disconnect():u&&s.unobserve(u))}),q}else{let f=function(){i!==null&&(clearTimeout(i),i=null),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",t,S.passive),n=void 0)},d=function(){f(),u&&u.contentDocument&&(n=u.contentDocument.defaultView,n.addEventListener("resize",t,S.passive),o())};const{isHydrated:s}=K();let n;return g(()=>{x(()=>{u=l.$el,u&&d()})}),w(f),()=>{if(s.value===!0)return k("object",{class:"q--avoid-card-border",style:L.style,tabindex:-1,type:"text/html",data:L.url,"aria-hidden":"true",onLoad:d})}}}});const{passive:_}=S,I=["both","horizontal","vertical"];var ee=F({name:"QScrollObserver",props:{axis:{type:String,validator:r=>I.includes(r),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(r,{emit:a}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,e,t;O(()=>r.scrollTarget,()=>{s(),l()});function o(){u!==null&&u();const d=Math.max(0,B(e)),v=N(e),c={top:d-i.position.top,left:v-i.position.left};if(r.axis==="vertical"&&c.top===0||r.axis==="horizontal"&&c.left===0)return;const p=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";i.position={top:d,left:v},i.directionChanged=i.direction!==p,i.delta=c,i.directionChanged===!0&&(i.direction=p,i.inflectionPoint=i.position),a("scroll",{...i})}function l(){e=$(t,r.scrollTarget),e.addEventListener("scroll",n,_),n(!0)}function s(){e!==void 0&&(e.removeEventListener("scroll",n,_),e=void 0)}function n(d){if(d===!0||r.debounce===0||r.debounce==="0")o();else if(u===null){const[v,c]=r.debounce?[setTimeout(o,r.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];u=()=>{c(v),u=null}}}const{proxy:f}=H();return O(()=>f.$q.lang.rtl,o),g(()=>{t=f.$el.parentNode,l()}),w(()=>{u!==null&&u(),s()}),Object.assign(f,{trigger:n,getPosition:()=>i}),q}});function E(r,a,i){const u=T(r);let e,t=u.left-a.event.x,o=u.top-a.event.y,l=Math.abs(t),s=Math.abs(o);const n=a.direction;n.horizontal===!0&&n.vertical!==!0?e=t<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?e=o<0?"up":"down":n.up===!0&&o<0?(e="up",l>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.down===!0&&o>0?(e="down",l>s&&(n.left===!0&&t<0?e="left":n.right===!0&&t>0&&(e="right"))):n.left===!0&&t<0?(e="left",l<s&&(n.up===!0&&o<0?e="up":n.down===!0&&o>0&&(e="down"))):n.right===!0&&t>0&&(e="right",l<s&&(n.up===!0&&o<0?e="up":n.down===!0&&o>0&&(e="down")));let f=!1;if(e===void 0&&i===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};e=a.event.lastDir,f=!0,e==="left"||e==="right"?(u.left-=t,l=0,t=0):(u.top-=o,s=0,o=0)}return{synthetic:f,payload:{evt:r,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:u,direction:e,isFirst:a.event.isFirst,isFinal:i===!0,duration:Date.now()-a.event.time,distance:{x:l,y:s},offset:{x:t,y:o},delta:{x:u.left-a.event.lastX,y:u.top-a.event.lastY}}}}let U=0;var te=Q({name:"touch-pan",beforeMount(r,{value:a,modifiers:i}){if(i.mouse!==!0&&m.has.touch!==!0)return;function u(t,o){i.mouse===!0&&o===!0?V(t):(i.stop===!0&&y(t),i.prevent===!0&&M(t))}const e={uid:"qvtp_"+U++,handler:a,modifiers:i,direction:P(i),noop:q,mouseStart(t){D(t,e)&&R(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(D(t,e)){const o=t.target;h(e,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,o){if(m.is.firefox===!0&&b(r,!0),e.lastEvt=t,o===!0||i.stop===!0){if(e.direction.all!==!0&&(o!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const n=t.type.indexOf("mouse")!==-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&M(n),t.cancelBubble===!0&&y(n),Object.assign(n,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:n}}y(t)}const{left:l,top:s}=T(t);e.event={x:l,y:s,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:s}},move(t){if(e.event===void 0)return;const o=T(t),l=o.left-e.event.x,s=o.top-e.event.y;if(l===0&&s===0)return;e.lastEvt=t;const n=e.event.mouse===!0,f=()=>{u(t,n);let c;i.preserveCursor!==!0&&i.preservecursor!==!0&&(c=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),j(),e.styleCleanup=p=>{if(e.styleCleanup=void 0,c!==void 0&&(document.documentElement.style.cursor=c),document.body.classList.remove("non-selectable"),n===!0){const z=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{z(),p()},50):z()}else p!==void 0&&p()}};if(e.event.detected===!0){e.event.isFirst!==!0&&u(t,e.event.mouse);const{payload:c,synthetic:p}=E(t,e,!1);c!==void 0&&(e.handler(c)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&f(),e.event.lastX=c.position.left,e.event.lastY=c.position.top,e.event.lastDir=p===!0?void 0:c.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||n===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){f(),e.event.detected=!0,e.move(t);return}const d=Math.abs(l),v=Math.abs(s);d!==v&&(e.direction.horizontal===!0&&d>v||e.direction.vertical===!0&&d<v||e.direction.up===!0&&d<v&&s<0||e.direction.down===!0&&d<v&&s>0||e.direction.left===!0&&d>v&&l<0||e.direction.right===!0&&d>v&&l>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,o){if(e.event!==void 0){if(C(e,"temp"),m.is.firefox===!0&&b(r,!1),o===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(E(t===void 0?e.lastEvt:t,e).payload);const{payload:l}=E(t===void 0?e.lastEvt:t,e,!0),s=()=>{e.handler(l)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(r.__qtouchpan=e,i.mouse===!0){const t=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";h(e,"main",[[r,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[r,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[r,"touchmove","noop","notPassiveCapture"]])},updated(r,a){const i=r.__qtouchpan;i!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&i.end(),i.handler=a.value),i.direction=P(a.modifiers))},beforeUnmount(r){const a=r.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),C(a,"main"),C(a,"temp"),m.is.firefox===!0&&b(r,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete r.__qtouchpan)}});export{Z as Q,te as T,ee as a};
