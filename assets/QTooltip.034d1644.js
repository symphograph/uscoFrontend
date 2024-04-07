import{L as ee,ap as te,a7 as ae,ar as oe,r as O,c as f,am as ne,an as ie,aA as le,at as se,aB as re,w as C,O as E,aC as k,aD as x,$ as ue,h as H,aE as ce,g as de,Z as fe,af as ve}from"./index.02309961.js";import{u as he,v as A,a as ge,p as D,b as me,c as ye,r as q,s as Te,d as L,e as pe}from"./position-engine.3c52504d.js";var Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...oe],setup(e,{slots:M,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),j=f(()=>D(e.anchor,a.lang.rtl)),B=f(()=>D(e.self,a.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:W,removeTick:N}=ne(),{registerTimeout:d}=ie(),{transitionProps:R,transitionStyle:_}=le(e),{localScrollTarget:T,changeScrollEvent:$,unconfigureScrollTarget:I}=me(e,P),{anchorEl:o,canShow:U,anchorEvents:r}=ye({showing:c,configureAnchorEl:K}),{show:V,hide:g}=se({showing:c,canShow:U,handleShow:z,handleHide:F,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:G,delayHide:J});const{showPortal:p,hidePortal:b,renderPortal:Z}=re(h,s,Y,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(m,n=>{(n===!0?pe:q)(t)}),E(()=>{q(t)})}function z(t){p(),W(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function F(t){N(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),k(r,"tooltipTemp")}function u(){Te({targetEl:s.value,offset:e.offset,anchorEl:o.value,anchorOrigin:j.value,selfOrigin:B.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function G(t){if(a.platform.is.mobile===!0){L(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function J(t){a.platform.is.mobile===!0&&(k(r,"tooltipTemp"),L(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ue(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;$(T.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,_.value],role:"tooltip"},fe(M.default)):null}function Y(){return H(ce,R.value,X)}return E(S),Object.assign(h.proxy,{updatePosition:u}),Z}});export{Pe as Q};
