import{V as te,aq as ae,af as T,aB as oe,ar as ne,r as C,c as f,ap as ie,a2 as se,aO as le,as as re,aP as ue,w as E,aa as k,aL as H,aH as x,aC as ce,h as q,a4 as de,g as fe,W as he,a0 as ve}from"./index.bd97e9c1.js";import{u as ge,v as A,a as me,p as D,b as Te,c as pe,r as L,s as ye,d as Se}from"./position-engine.55550dc5.js";import{c as M}from"./selection.db5b1e6e.js";var Oe=te({name:"QTooltip",inheritAttrs:!1,props:{...ge,...ae,...T,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...T.transitionShow,default:"jump-down"},transitionHide:{...T.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:me},scrollTarget:oe,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ne],setup(e,{slots:j,emit:p,attrs:h}){let i,s;const v=fe(),{proxy:{$q:a}}=v,l=C(null),c=C(!1),W=f(()=>D(e.anchor,a.lang.rtl)),B=f(()=>D(e.self,a.lang.rtl)),Q=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ie(),{registerTimeout:d}=se(),{transitionProps:V,transitionStyle:_}=le(e),{localScrollTarget:y,changeScrollEvent:I,unconfigureScrollTarget:U}=Te(e,w),{anchorEl:o,canShow:$,anchorEvents:r}=pe({showing:c,configureAnchorEl:Y}),{show:z,hide:g}=re({showing:c,canShow:$,handleShow:G,handleHide:J,hideOnRouteChange:Q,processOnMount:!0});Object.assign(r,{delayShow:K,delayHide:X});const{showPortal:S,hidePortal:b,renderPortal:F}=ue(v,l,ee,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:l,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(m,n=>{(n===!0?Se:L)(t)}),k(()=>{L(t)})}function G(t){S(),N(()=>{s=new MutationObserver(()=>u()),s.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=E(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{S(!0),p("show",t)},e.transitionDuration)}function J(t){R(),b(),P(),d(()=>{b(!0),p("hide",t)},e.transitionDuration)}function P(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),U(),H(r,"tooltipTemp")}function u(){ye({targetEl:l.value,offset:e.offset,anchorEl:o.value,anchorOrigin:W.value,selfOrigin:B.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function K(t){if(a.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[m,O,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{z(t)},e.delay)}function X(t){a.platform.is.mobile===!0&&(H(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function Y(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function w(){if(o.value!==null||e.scrollTarget!==void 0){y.value=ce(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;I(y.value,t)}}function Z(){return c.value===!0?q("div",{...h,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,_.value],role:"tooltip"},he(j.default)):null}function ee(){return q(de,V.value,Z)}return k(P),Object.assign(v.proxy,{updatePosition:u}),F}});export{Oe as Q};
