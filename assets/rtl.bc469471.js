import{c as ae,u as ne,a as se,a6 as le,d as ue,r as M,h as u,e as ie,af as re,f as ce,aG as de,j as fe,aH as ve,w as A,aK as ge,aC as he,aL as me,aM as D,am as ye,aN as Pe,p as H,s as xe,X as Ce,l as Te,v as ke,aO as Se,aP as Oe,aQ as be,a4 as qe}from"./index.e552dc30.js";import{u as Be,v as R,a as Ee,b as we,d as Fe,p as K,r as j,s as Me,e as Ae}from"./position-engine.a58e5381.js";var Ke=ae({name:"QMenu",inheritAttrs:!1,props:{...Be,...ne,...se,...le,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:R},self:{type:String,validator:R},offset:{type:Array,validator:Ee},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ue,"click","escapeKey"],setup(e,{slots:c,emit:d,attrs:v}){let n=null,f,i,g;const C=ke(),{proxy:h}=C,{$q:o}=h,a=M(null),s=M(!1),L=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),Q=ie(e,o),{registerTick:W,removeTick:_}=re(),{registerTimeout:T}=ce(),{transitionProps:G,transitionStyle:I}=de(e),{localScrollTarget:k,changeScrollEvent:N,unconfigureScrollTarget:U}=we(e,w),{anchorEl:l,canShow:X}=Fe({showing:s}),{hide:S}=fe({showing:s,canShow:X,handleShow:V,handleHide:Y,hideOnRouteChange:L,processOnMount:!0}),{showPortal:O,hidePortal:b,renderPortal:$}=ve(C,a,ee,"menu"),m={anchorEl:l,innerRef:a,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return S(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&qe(t),!0}},q=u(()=>K(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),p=u(()=>e.cover===!0?q.value:K(e.self||"top start",o.lang.rtl)),z=u(()=>(e.square===!0?" q-menu--square":"")+(Q.value===!0?" q-menu--dark q-dark":"")),J=u(()=>e.autoClose===!0?{onClick:Z}:{}),B=u(()=>s.value===!0&&e.persistent!==!0);A(B,t=>{t===!0?(Se(P),Ae(m)):(D(P),j(m))});function y(){Oe(()=>{let t=a.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function V(t){if(n=e.noRefocus===!1?document.activeElement:null,ge(F),O(),w(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const x=he(t);if(x.left!==void 0){const{top:te,left:oe}=l.value.getBoundingClientRect();f={left:x.left-oe,top:x.top-te}}}i===void 0&&(i=A(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,r)),e.noFocus!==!0&&document.activeElement.blur(),W(()=>{r(),e.noFocus!==!0&&y()}),T(()=>{o.platform.is.ios===!0&&(g=e.autoClose,a.value.click()),r(),O(!0),d("show",t)},e.transitionDuration)}function Y(t){_(),b(),E(!0),n!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{b(!0),d("hide",t)},e.transitionDuration)}function E(t){f=void 0,i!==void 0&&(i(),i=void 0),(t===!0||s.value===!0)&&(me(F),U(),j(m),D(P)),t!==!0&&(n=null)}function w(){(l.value!==null||e.scrollTarget!==void 0)&&(k.value=ye(l.value,e.scrollTarget),N(k.value,r))}function Z(t){g!==!0?(Pe(h,t),d("click",t)):g=!1}function F(t){B.value===!0&&e.noFocus!==!0&&be(a.value,t.target)!==!0&&y()}function P(t){d("escapeKey"),S(t)}function r(){const t=a.value;t===null||l.value===null||Me({el:t,offset:e.offset,anchorEl:l.value,anchorOrigin:q.value,selfOrigin:p.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return H(Ce,G.value,()=>s.value===!0?H("div",{role:"menu",...v,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+z.value,v.class],style:[v.style,I.value],...J.value},xe(c.default)):null)}return Te(E),Object.assign(h,{focus:y,updatePosition:r}),$}});let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}export{Ke as Q,De as r};