import{C as ee,ah as te,Y as ae,aj as oe,r as O,D as f,ac as ne,ad as ie,ax as le,al as se,ay as re,w as C,L as E,az as k,aA as x,M as ue,E as H,ap as ce,J as de,G as fe,a6 as ve}from"./index.c27fac1f.js";import{u as he,v as A,a as ge,p as D,b as me,c as ye,r as M,s as Te,d as j,e as pe}from"./position-engine.3a1a5db9.js";var Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:ge},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...oe],setup(e,{slots:q,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,a.lang.rtl)),Q=f(()=>D(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ne(),{registerTimeout:d}=ie(),{transitionProps:_,transitionStyle:z}=le(e),{localScrollTarget:T,changeScrollEvent:B,unconfigureScrollTarget:G}=me(e,P),{anchorEl:o,canShow:I,anchorEvents:r}=ye({showing:c,configureAnchorEl:K}),{show:J,hide:g}=se({showing:c,canShow:I,handleShow:V,handleHide:Y,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:$,delayHide:F});const{showPortal:p,hidePortal:b,renderPortal:U}=re(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(m,n=>{(n===!0?pe:M)(t)}),E(()=>{M(t)})}function V(t){p(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function Y(t){R(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),G(),k(r,"tooltipTemp")}function u(){Te({targetEl:s.value,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function $(t){if(a.platform.is.mobile===!0){j(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[m,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{J(t)},e.delay)}function F(t){a.platform.is.mobile===!0&&(k(r,"tooltipTemp"),j(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function K(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ue(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;B(T.value,t)}}function X(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,z.value],role:"tooltip"},fe(q.default)):null}function Z(){return H(ce,_.value,X)}return E(S),Object.assign(h.proxy,{updatePosition:u}),U}});export{Pe as Q};