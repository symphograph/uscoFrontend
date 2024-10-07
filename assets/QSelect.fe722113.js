import{V as je,b3 as Qe,b4 as vt,b5 as mt,b6 as St,X as Rt,b7 as Et,Z as Tt,b8 as Ht,c as f,av as Lt,g as Ue,h as b,A as Be,b9 as Dt,al as Pt,a0 as ne,K as $t,r as E,w as me,au as Z,b0 as Kt,k as Nt,P as jt,O as Qt,aa as gt,ba as Ut,bb as Wt,bc as rt,an as ke,bd as Xt,be as Yt,aK as Pe,bf as Zt,ai as ve,$ as Gt,am as Jt,H as el,ab as tl}from"./index.863743c3.js";import{Q as ll,b as ul}from"./QImg.1a6d9b02.js";import{Q as nl}from"./QItemLabel.4be85da2.js";import{Q as ol}from"./QMenu.a63f68e9.js";import{r as Ne}from"./rtl.276c3f1b.js";import{n as ct}from"./format.de7e9769.js";var il=je({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:vt,setup(){return mt(St({tagProp:!0}))}});const al={xs:8,sm:10,md:14,lg:20,xl:24};var rl=je({name:"QChip",props:{...Rt,...Et,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:a}){const{proxy:{$q:d}}=Ue(),M=Tt(e,d),i=Ht(e,al),F=f(()=>e.selected===!0||e.icon!==void 0),y=f(()=>e.selected===!0?e.iconSelected||d.iconSet.chip.selected:e.icon),h=f(()=>e.iconRemove||d.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=f(()=>{const s=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(s?` text-${s} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const s=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...s,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||d.lang.label.remove};return{chip:s,remove:D}});function C(s){s.keyCode===13&&k(s)}function k(s){e.disable||(a("update:selected",!e.selected),a("click",s))}function A(s){(s.keyCode===void 0||s.keyCode===13)&&(ne(s),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function L(){const s=[];z.value===!0&&s.push(b("div",{class:"q-focus-helper"})),F.value===!0&&s.push(b(Be,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const D=e.label!==void 0?[b("div",{class:"ellipsis"},[e.label])]:void 0;return s.push(b("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Dt(r.default,D))),e.iconRight&&s.push(b(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&s.push(b(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...w.value.remove,onClick:A,onKeyup:A})),s}return()=>{if(e.modelValue===!1)return;const s={class:c.value,style:i.value};return z.value===!0&&Object.assign(s,w.value.chip,{onClick:k,onKeyup:C}),Lt("div",s,L(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Pt,e.ripple]])}}});const N=1e3,cl=["start","center","end","start-force","center-force","end-force"],ht=Array.prototype.filter,sl=window.getComputedStyle(document.body).overflowAnchor===void 0?$t:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];ht.call(a,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const d=a[r];d&&d.dataset&&(d.dataset.qVsAnchor="")}))};function Se(e,r){return e+r}function $e(e,r,a,d,M,i,F,y){const h=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-y,scrollMaxSize:0,offsetStart:-F,offsetEnd:-y};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=h.scrollLeft,c.scrollViewSize+=h.clientWidth),c.scrollMaxSize=h.scrollWidth,i===!0&&(c.scrollStart=(Ne===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=h.scrollTop,c.scrollViewSize+=h.clientHeight),c.scrollMaxSize=h.scrollHeight),a!==null)for(let w=a.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=w[z]);if(d!==null)for(let w=d.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=w[z]);if(r!==e){const w=h.getBoundingClientRect(),C=r.getBoundingClientRect();M===!0?(c.offsetStart+=C.left-w.left,c.offsetEnd-=C.width):(c.offsetStart+=C.top-w.top,c.offsetEnd-=C.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function st(e,r,a,d){r==="end"&&(r=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(d===!0&&(r=(Ne===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):a===!0?(d===!0&&(r=(Ne===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function xe(e,r,a,d){if(a>=d)return 0;const M=r.length,i=Math.floor(a/N),F=Math.floor((d-1)/N)+1;let y=e.slice(i,F).reduce(Se,0);return a%N!==0&&(y-=r.slice(i*N,a).reduce(Se,0)),d%N!==0&&d!==M&&(y-=r.slice(d,F*N).reduce(Se,0)),y}const bt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},wl=Object.keys(bt),dt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bt};function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:a,virtualScrollItemSizeComputed:d}){const M=Ue(),{props:i,emit:F,proxy:y}=M,{$q:h}=y;let z,c,w,C=[],k;const A=E(0),L=E(0),s=E({}),D=E(null),W=E(null),H=E(null),O=E({from:0,to:0}),pe=f(()=>i.tableColspan!==void 0?i.tableColspan:100);d===void 0&&(d=f(()=>i.virtualScrollItemSize));const _=f(()=>d.value+";"+i.virtualScrollHorizontal),X=f(()=>_.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(_,G);function G(){oe(c,!0)}function ge(l){oe(l===void 0?c:l)}function J(l,o){const m=r();if(m==null||m.nodeType===8)return;const q=$e(m,a(),D.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);w!==q.scrollViewSize&&j(q.scrollViewSize),P(m,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,cl.indexOf(o)!==-1?o:c!==-1&&l>c?"end":"start")}function qe(){const l=r();if(l==null||l.nodeType===8)return;const o=$e(l,a(),D.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),m=e.value-1,q=o.scrollMaxSize-o.offsetStart-o.offsetEnd-L.value;if(z===o.scrollStart)return;if(o.scrollMaxSize<=0){P(l,o,0,0);return}w!==o.scrollViewSize&&j(o.scrollViewSize),he(O.value.from);const B=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(k[m],o.scrollViewSize/2));if(B>0&&Math.ceil(o.scrollStart)>=B){P(l,o,m,o.scrollMaxSize-o.offsetEnd-C.reduce(Se,0));return}let V=0,g=o.scrollStart-o.offsetStart,R=g;if(g<=q&&g+o.scrollViewSize>=A.value)g-=A.value,V=O.value.from,R=g;else for(let S=0;g>=C[S]&&V<m;S++)g-=C[S],V+=N;for(;g>0&&V<m;)g-=k[V],g>-o.scrollViewSize?(V++,R=g):R=k[V]+g;P(l,o,V,R)}function P(l,o,m,q,B){const V=typeof B=="string"&&B.indexOf("-force")!==-1,g=V===!0?B.replace("-force",""):B,R=g!==void 0?g:"start";let S=Math.max(0,m-s.value[R]),$=S+s.value.total;$>e.value&&($=e.value,S=Math.max(0,$-s.value.total)),z=o.scrollStart;const Y=S!==O.value.from||$!==O.value.to;if(Y===!1&&g===void 0){be(m);return}const{activeElement:ze}=document,Q=H.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",Ae),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Ae)})),sl(Q,m-S);const Ie=g!==void 0?k.slice(S,m).reduce(Se,0):0;if(Y===!0){const ee=$>=O.value.from&&S<=O.value.to?O.value.to:$;O.value={from:S,to:ee},A.value=xe(C,k,0,S),L.value=xe(C,k,$,e.value),requestAnimationFrame(()=>{O.value.to!==$&&z===o.scrollStart&&(O.value={from:O.value.from,to:$},L.value=xe(C,k,$,e.value))})}requestAnimationFrame(()=>{if(z!==o.scrollStart)return;Y===!0&&he(S);const ee=k.slice(S,m).reduce(Se,0),te=ee+o.offsetStart+A.value,Me=te+k[m];let we=te+q;if(g!==void 0){const Ee=ee-Ie,Ve=o.scrollStart+Ee;we=V!==!0&&Ve<te&&Me<Ve+o.scrollViewSize?Ve:g==="end"?Me-o.scrollViewSize:te-(g==="start"?0:Math.round((o.scrollViewSize-k[m])/2))}z=we,st(l,we,i.virtualScrollHorizontal,h.lang.rtl),be(m)})}function he(l){const o=H.value;if(o){const m=ht.call(o.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),q=m.length,B=i.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let V=l,g,R;for(let S=0;S<q;){for(g=B(m[S]),S++;S<q&&m[S].classList.contains("q-virtual-scroll--with-prev")===!0;)g+=B(m[S]),S++;R=g-k[V],R!==0&&(k[V]+=R,C[Math.floor(V/N)]+=R),V++}}}function Ae(){H.value!==null&&H.value!==void 0&&H.value.focus()}function oe(l,o){const m=1*d.value;(o===!0||Array.isArray(k)===!1)&&(k=[]);const q=k.length;k.length=e.value;for(let V=e.value-1;V>=q;V--)k[V]=m;const B=Math.floor((e.value-1)/N);C=[];for(let V=0;V<=B;V++){let g=0;const R=Math.min((V+1)*N,e.value);for(let S=V*N;S<R;S++)g+=k[S];C.push(g)}c=-1,z=void 0,A.value=xe(C,k,0,O.value.from),L.value=xe(C,k,O.value.to,e.value),l>=0?(he(O.value.from),Z(()=>{J(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const g=r();g!=null&&g.nodeType!==8&&(l=$e(g,a(),D.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const o=parseFloat(i.virtualScrollSliceRatioBefore)||0,m=parseFloat(i.virtualScrollSliceRatioAfter)||0,q=1+o+m,B=l===void 0||l<=0?1:Math.ceil(l/d.value),V=Math.max(1,B,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/q));s.value={total:Math.ceil(V*q),start:Math.ceil(V*o),center:Math.ceil(V*(.5+o)),end:Math.ceil(V*(1+o)),view:B}}function Re(l,o){const m=i.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+m]:d.value+"px"};return[l==="tbody"?b(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[b("tr",[b("td",{style:{[m]:`${A.value}px`,...q},colspan:pe.value})])]):b(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[m]:`${A.value}px`,...q}}),b(l,{class:"q-virtual-scroll__content",key:"content",ref:H,tabindex:-1},o.flat()),l==="tbody"?b(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[b("tr",[b("td",{style:{[m]:`${L.value}px`,...q},colspan:pe.value})])]):b(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[m]:`${L.value}px`,...q}})]}function be(l){c!==l&&(i.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:O.value.from,to:O.value.to-1,direction:l<c?"decrease":"increase",ref:y}),c=l)}j();const ie=Kt(qe,h.platform.is.ios===!0?120:35);Nt(()=>{j()});let ye=!1;return jt(()=>{ye=!0}),Qt(()=>{if(ye!==!0)return;const l=r();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,i.virtualScrollHorizontal,h.lang.rtl):J(c)}),gt(()=>{ie.cancel()}),Object.assign(y,{scrollTo:J,reset:G,refresh:ge}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:s,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:oe,padVirtualScroll:Re,scrollTo:J,reset:G,refresh:ge}}const ft=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);function Ke(e,r){if(typeof e=="function")return e;const a=e!==void 0?e:r;return d=>d!==null&&typeof d=="object"&&a in d?d[a]:d}var Vl=je({name:"QSelect",inheritAttrs:!1,props:{...dt,...Ut,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:dt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...vt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:r,emit:a}){const{proxy:d}=Ue(),{$q:M}=d,i=E(!1),F=E(!1),y=E(-1),h=E(""),z=E(!1),c=E(!1);let w=null,C=null,k,A,L,s=null,D,W,H,O;const pe=E(null),_=E(null),X=E(null),G=E(null),ge=E(null),J=Wt(e),qe=Zt(ut),P=f(()=>e.options.length),he=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ae,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:j,padVirtualScroll:Re,onVirtualScrollEvt:be,scrollTo:ie,setVirtualScrollSize:ye}=dl({virtualScrollLength:P,getVirtualScrollTarget:Ct,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:he}),l=St(),o=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0){const n=e.mapOptions===!0&&k!==void 0?k:[],v=u.map(p=>Vt(p,n));return e.modelValue===null&&t===!0?v.filter(p=>p!==null):v}return u}),m=f(()=>{const t={};return vl.forEach(u=>{const n=e[u];n!==void 0&&(t[u]=n)}),t}),q=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(o.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),g=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),R=f(()=>P.value===0),S=f(()=>o.value.map(t=>K.value(t)).join(", ")),$=f(()=>e.displayValue!==void 0?e.displayValue:S.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${y.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>o.value.map((t,u)=>({index:u,opt:t,html:Y.value(t),selected:!0,removeAtIndex:wt,toggleOption:le,tabindex:Q.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:u}=Ae.value;return e.options.slice(t,u).map((n,v)=>{const p=ae.value(n)===!0,x=He(n)===!0,T=t+v,I={clickable:!0,active:x,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${T}`,onClick:()=>{le(n)}};return p!==!0&&(y.value===T&&(I.focused=!0),M.platform.is.desktop===!0&&(I.onMousemove=()=>{i.value===!0&&re(T)})),{index:T,opt:n,html:Y.value(n),label:K.value(n),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),Ee=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Ke(e.optionValue,"value")),K=f(()=>Ke(e.optionLabel,"label")),ae=f(()=>Ke(e.optionDisable,"disable")),Oe=f(()=>o.value.map(U.value)),yt=f(()=>{const t={onInput:ut,onChange:qe,onKeydown:et,onKeyup:Ge,onKeypress:Je,onFocus:Ye,onClick(u){A===!0&&ve(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});me(o,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&i.value!==!0||B.value!==!0)&&(L!==!0&&fe(),(F.value===!0||i.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(i,Le),me(P,Bt);function We(t){return e.emitValue===!0?U.value(t):t}function Te(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const u=e.modelValue.slice();a("remove",{index:t,value:u.splice(t,1)[0]}),a("update:modelValue",u)}else a("update:modelValue",null)}function wt(t){Te(t),l.focus()}function Xe(t,u){const n=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(K.value(t),!0,!0),a("update:modelValue",n);return}if(o.value.length===0){a("add",{index:0,value:n}),a("update:modelValue",e.multiple===!0?[n]:n);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();a("add",{index:v.length,value:n}),v.push(n),a("update:modelValue",v)}function le(t,u){if(l.editable.value!==!0||t===void 0||ae.value(t)===!0)return;const n=U.value(t);if(e.multiple!==!0){u!==!0&&(Ce(e.fillInput===!0?K.value(t):"",!0,!0),ue()),_.value!==null&&_.value.focus(),(o.value.length===0||ke(U.value(o.value[0]),n)!==!0)&&a("update:modelValue",e.emitValue===!0?n:t);return}if((A!==!0||z.value===!0)&&l.focus(),Ye(),o.value.length===0){const x=e.emitValue===!0?n:t;a("add",{index:0,value:x}),a("update:modelValue",e.multiple===!0?[x]:x);return}const v=e.modelValue.slice(),p=Oe.value.findIndex(x=>ke(x,n));if(p!==-1)a("remove",{index:p,value:v.splice(p,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const x=e.emitValue===!0?n:t;a("add",{index:v.length,value:x}),v.push(x)}a("update:modelValue",v)}function re(t){if(M.platform.is.desktop!==!0)return;const u=t!==-1&&t<P.value?t:-1;y.value!==u&&(y.value=u)}function _e(t=1,u){if(i.value===!0){let n=y.value;do n=ct(n+t,-1,P.value-1);while(n!==-1&&n!==y.value&&ae.value(e.options[n])===!0);y.value!==n&&(re(n),ie(n),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(n>=0?K.value(e.options[n]):D,!0))}}function Vt(t,u){const n=v=>ke(U.value(v),t);return e.options.find(n)||u.find(n)||t}function He(t){const u=U.value(t);return Oe.value.find(n=>ke(n,u))!==void 0}function Ye(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===S.value)&&_.value.select()}function Ze(t){Gt(t,27)===!0&&i.value===!0&&(ve(t),ue(),fe()),a("keyup",t)}function Ge(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ze(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof u=="string"&&u.length!==0){const n=u.toLocaleLowerCase(),v=x=>{const T=e.options.find(I=>x.value(I).toLocaleLowerCase()===n);return T===void 0?!1:(o.value.indexOf(T)===-1?le(T):ue(),!0)},p=x=>{v(U)!==!0&&(v(K)===!0||x===!0||ce(u,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Je(t){a("keypress",t)}function et(t){if(a("keydown",t),Jt(t)===!0)return;const u=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(y.value!==-1||u===!0);if(t.keyCode===27){Pe(t);return}if(t.keyCode===9&&n===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ne(t),y.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(ne(t),y.value=Math.max(-1,Math.min(P.value,y.value+(t.keyCode===33?-1:1)*oe.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),_e(t.keyCode===38?-1:1,e.multiple));const v=P.value;if((H===void 0||O<Date.now())&&(H=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||H.length!==0)){i.value!==!0&&de(t);const p=t.key.toLocaleLowerCase(),x=H.length===1&&H[0]===p;O=Date.now()+1500,x===!1&&(ne(t),H+=p);const T=new RegExp("^"+H.split("").map(De=>fl.indexOf(De)!==-1?"\\"+De:De).join(".*"),"i");let I=y.value;if(x===!0||I<0||T.test(K.value(e.options[I]))!==!0)do I=ct(I+1,-1,v-1);while(I!==y.value&&(ae.value(e.options[I])===!0||T.test(K.value(e.options[I]))!==!0));y.value!==I&&Z(()=>{re(I),ie(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(K.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||H!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&ne(t),y.value!==-1&&y.value<v){le(e.options[y.value]);return}if(u===!0){const p=(x,T)=>{if(T){if(ft(T)!==!0)return}else T=e.newValueMode;if(Ce("",e.multiple!==!0,!0),x==null)return;(T==="toggle"?le:Xe)(x,T==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),ue())};if(e.onNewValue!==void 0?a("newValue",h.value,p):p(h.value),e.multiple!==!0)return}i.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return A===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ct(){return tt()}function kt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?te.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?te.value.map((t,u)=>b(rl,{key:"option-"+u,removable:l.editable.value===!0&&ae.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(u)}},()=>b("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:K.value(t.opt)}))):[b("span",{[ze.value===!0?"innerHTML":"textContent"]:$.value})]}function lt(){if(R.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:h.value}):void 0;const t=r.option!==void 0?r.option:n=>b(ul,{key:n.index,...n.itemProps},()=>b(ll,()=>b(nl,()=>b("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let u=Re("div",Me.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),tl(r["after-options"],u)}function xt(t,u){const n=u===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,v={ref:u===!0?_:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...n,id:u===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&A===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),b("input",v)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),L=!0,D=h.value,l.focused.value!==!0&&(A!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(h.value)},e.inputDebounce)))}function Fe(t,u){h.value!==t&&(h.value=t,u===!0||e.inputDebounce===0||e.inputDebounce==="0"?a("inputValue",t):C=setTimeout(()=>{C=null,a("inputValue",t)},e.inputDebounce))}function Ce(t,u,n){L=n!==!0,e.useInput===!0&&(Fe(t,!0),(u===!0||n!==!0)&&(D=t),u!==!0&&ce(t))}function ce(t,u,n){if(e.onFilter===void 0||u!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?a("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&L!==!0&&t===K.value(o.value[0])&&(t="");const v=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);s!==null&&clearTimeout(s),s=v,a("filter",t,(p,x)=>{(u===!0||l.focused.value===!0)&&s===v&&(clearTimeout(s),typeof p=="function"&&p(),c.value=!1,Z(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(u===!0?i.value===!0&&ue():i.value===!0?Le(!0):i.value=!0),typeof x=="function"&&Z(()=>{x(d)}),typeof n=="function"&&Z(()=>{n(d)})}))},()=>{l.focused.value===!0&&s===v&&(clearTimeout(s),l.innerLoading.value=!1,c.value=!1),i.value===!0&&(i.value=!1)})}function pt(){return b(ol,{ref:X,class:g.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&R.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ee.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:be,onBeforeShow:ot,onBeforeHide:qt,onShow:At},lt)}function qt(t){it(t),se()}function At(){ye()}function zt(t){ve(t),_.value!==null&&_.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function It(t){ve(t),Z(()=>{z.value=!1})}function Mt(){const t=[b(il,{class:`col-auto ${l.fieldClass.value}`,...m.value,for:l.targetUid.value,dark:q.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...l.splitAttrs.listeners.value,onFocus:zt,onBlur:It},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(b("div",{ref:ge,class:g.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Pe,onScrollPassive:be},lt())),b(el,{ref:G,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:Ot,onHide:_t,onShow:Ft},()=>b("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Ot(t){it(t),G.value!==null&&G.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function _t(t){ue(),l.focused.value===!1&&a("blur",t),fe()}function Ft(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),ye()}function se(){F.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(s!==null&&(clearTimeout(s),s=null),l.innerLoading.value===!0&&(a("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function de(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),F.value=!0,Z(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(h.value):(R.value!==!0||r["no-option"]!==void 0)&&(i.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&K.value(o.value[0])||"",!0,!0)}function Le(t){let u=-1;if(t===!0){if(o.value.length!==0){const n=U.value(o.value[0]);u=e.options.findIndex(v=>ke(U.value(v),n))}j(u)}re(u)}function Bt(t,u){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),Z(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>u?j():Le(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function ot(t){t!==void 0&&ve(t),a("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&ve(t),a("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function at(){A=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||R.value===!1:!0),W=M.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return Xt(at),Yt(nt),at(),gt(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(d,{showPopup:de,hidePopup:ue,removeAtIndex:Te,add:Xe,toggleOption:le,getOptionIndex:()=>y.value,setOptionIndex:re,moveOptionSelection:_e,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:He,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ae.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>K.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:pe,targetRef:_,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof h.value=="number"||h.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||R.value!==!0||r["no-option"]!==void 0))return A===!0?Mt():pt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if(Pe(t),A!==!0&&i.value===!0){se(),_.value!==null&&_.value.focus();return}de(t)}},getControl:t=>{const u=kt(),n=t===!0||F.value!==!0||A!==!0;if(e.useInput===!0)u.push(xt(t,n));else if(l.editable.value===!0){const p=n===!0?Ie.value:void 0;u.push(b("input",{ref:n===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:$.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:et,onKeyup:Ze,onKeypress:Je})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(b("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(J.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const p=Oe.value.map(x=>b("option",{value:x,selected:!0}));u.push(b("select",{class:"hidden",name:J.value,multiple:e.multiple},p))}const v=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return b("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[b(Be,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:we.value})]:null}),mt(l)}});export{Vl as Q,rl as a,dl as b,wl as c,dt as u};
