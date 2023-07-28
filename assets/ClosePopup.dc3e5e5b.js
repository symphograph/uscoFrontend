import{aB as M,m,n as L,aC as k,aA as h,aD as y,aE as _,a2 as C,aF as b,az as E,a6 as x,aG as F,aH as X,a7 as Y}from"./index.9a351014.js";import{g as w,s as P}from"./touch.3df10340.js";import{d as A}from"./position-engine.c2dece6d.js";function g(o,r,n){const l=b(o);let e,t=l.left-r.event.x,s=l.top-r.event.y,a=Math.abs(t),u=Math.abs(s);const i=r.direction;i.horizontal===!0&&i.vertical!==!0?e=t<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?e=s<0?"up":"down":i.up===!0&&s<0?(e="up",a>u&&(i.left===!0&&t<0?e="left":i.right===!0&&t>0&&(e="right"))):i.down===!0&&s>0?(e="down",a>u&&(i.left===!0&&t<0?e="left":i.right===!0&&t>0&&(e="right"))):i.left===!0&&t<0?(e="left",a<u&&(i.up===!0&&s<0?e="up":i.down===!0&&s>0&&(e="down"))):i.right===!0&&t>0&&(e="right",a<u&&(i.up===!0&&s<0?e="up":i.down===!0&&s>0&&(e="down")));let v=!1;if(e===void 0&&n===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,v=!0,e==="left"||e==="right"?(l.left-=t,a=0,t=0):(l.top-=s,u=0,s=0)}return{synthetic:v,payload:{evt:o,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:l,direction:e,isFirst:r.event.isFirst,isFinal:n===!0,duration:Date.now()-r.event.time,distance:{x:a,y:u},offset:{x:t,y:s},delta:{x:l.left-r.event.lastX,y:l.top-r.event.lastY}}}}let K=0;var z=M({name:"touch-pan",beforeMount(o,{value:r,modifiers:n}){if(n.mouse!==!0&&m.has.touch!==!0)return;function l(t,s){n.mouse===!0&&s===!0?x(t):(n.stop===!0&&C(t),n.prevent===!0&&_(t))}const e={uid:"qvtp_"+K++,handler:r,modifiers:n,direction:w(n),noop:L,mouseStart(t){P(t,e)&&k(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(P(t,e)){const s=t.target;h(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,s){if(m.is.firefox===!0&&y(o,!0),e.lastEvt=t,s===!0||n.stop===!0){if(e.direction.all!==!0&&(s!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const i=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&_(i),t.cancelBubble===!0&&C(i),Object.assign(i,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:i}}C(t)}const{left:a,top:u}=b(t);e.event={x:a,y:u,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:u}},move(t){if(e.event===void 0)return;const s=b(t),a=s.left-e.event.x,u=s.top-e.event.y;if(a===0&&u===0)return;e.lastEvt=t;const i=e.event.mouse===!0,v=()=>{l(t,i);let d;n.preserveCursor!==!0&&n.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),A(),e.styleCleanup=f=>{if(e.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),i===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{q(),f()},50):q()}else f!==void 0&&f()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(t,e.event.mouse);const{payload:d,synthetic:f}=g(t,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&v(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=f===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||i===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){v(),e.event.detected=!0,e.move(t);return}const c=Math.abs(a),p=Math.abs(u);c!==p&&(e.direction.horizontal===!0&&c>p||e.direction.vertical===!0&&c<p||e.direction.up===!0&&c<p&&u<0||e.direction.down===!0&&c<p&&u>0||e.direction.left===!0&&c>p&&a<0||e.direction.right===!0&&c>p&&a>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,s){if(e.event!==void 0){if(E(e,"temp"),m.is.firefox===!0&&y(o,!1),s===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(g(t===void 0?e.lastEvt:t,e).payload);const{payload:a}=g(t===void 0?e.lastEvt:t,e,!0),u=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(u):u()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(o.__qtouchpan=e,n.mouse===!0){const t=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";h(e,"main",[[o,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[o,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[o,"touchmove","noop","notPassiveCapture"]])},updated(o,r){const n=o.__qtouchpan;n!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&n.end(),n.handler=r.value),n.direction=w(r.modifiers))},beforeUnmount(o){const r=o.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),E(r,"main"),E(r,"temp"),m.is.firefox===!0&&y(o,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete o.__qtouchpan)}});function D(o){if(o===!1)return 0;if(o===!0||o===void 0)return 1;const r=parseInt(o,10);return isNaN(r)?0:r}var O=M({name:"close-popup",beforeMount(o,{value:r}){const n={depth:D(r),handler(l){n.depth!==0&&setTimeout(()=>{const e=F(o);e!==void 0&&X(e,l,n.depth)})},handlerKey(l){Y(l,13)===!0&&n.handler(l)}};o.__qclosepopup=n,o.addEventListener("click",n.handler),o.addEventListener("keyup",n.handlerKey)},updated(o,{value:r,oldValue:n}){r!==n&&(o.__qclosepopup.depth=D(r))},beforeUnmount(o){const r=o.__qclosepopup;o.removeEventListener("click",r.handler),o.removeEventListener("keyup",r.handlerKey),delete o.__qclosepopup}});export{O as C,z as T};