import{K as me,r as R,c as L,w as ae,au as we,a$ as pe,k as he,P as ze,O as ge,ai as ye,h as A,g as Me}from"./index.b51d6ac9.js";import{r as Z}from"./rtl.276c3f1b.js";const M=1e3,be=["start","center","end","start-force","center-force","end-force"],ne=Array.prototype.filter,Ee=window.getComputedStyle(document.body).overflowAnchor===void 0?me:function(t,s){t!==null&&(t._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(t._qOverflowAnimationFrame),t._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(t===null)return;t._qOverflowAnimationFrame=void 0;const S=t.children||[];ne.call(S,g=>g.dataset&&g.dataset.qVsAnchor!==void 0).forEach(g=>{delete g.dataset.qVsAnchor});const u=S[s];u&&u.dataset&&(u.dataset.qVsAnchor="")}))};function B(t,s){return t+s}function Q(t,s,S,u,g,n,V,b){const h=t===window?document.scrollingElement||document.documentElement:t,y=g===!0?"offsetWidth":"offsetHeight",o={scrollStart:0,scrollViewSize:-V-b,scrollMaxSize:0,offsetStart:-V,offsetEnd:-b};if(g===!0?(t===window?(o.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o.scrollViewSize+=document.documentElement.clientWidth):(o.scrollStart=h.scrollLeft,o.scrollViewSize+=h.clientWidth),o.scrollMaxSize=h.scrollWidth,n===!0&&(o.scrollStart=(Z===!0?o.scrollMaxSize-o.scrollViewSize:0)-o.scrollStart)):(t===window?(o.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,o.scrollViewSize+=document.documentElement.clientHeight):(o.scrollStart=h.scrollTop,o.scrollViewSize+=h.clientHeight),o.scrollMaxSize=h.scrollHeight),S!==null)for(let v=S.previousElementSibling;v!==null;v=v.previousElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetStart+=v[y]);if(u!==null)for(let v=u.nextElementSibling;v!==null;v=v.nextElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetEnd+=v[y]);if(s!==t){const v=h.getBoundingClientRect(),w=s.getBoundingClientRect();g===!0?(o.offsetStart+=w.left-v.left,o.offsetEnd-=w.width):(o.offsetStart+=w.top-v.top,o.offsetEnd-=w.height),t!==window&&(o.offsetStart+=o.scrollStart),o.offsetEnd+=o.scrollMaxSize-o.offsetStart}return o}function ce(t,s,S,u){s==="end"&&(s=(t===window?document.body:t)[S===!0?"scrollWidth":"scrollHeight"]),t===window?S===!0?(u===!0&&(s=(Z===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):S===!0?(u===!0&&(s=(Z===!0?t.scrollWidth-t.offsetWidth:0)-s),t.scrollLeft=s):t.scrollTop=s}function W(t,s,S,u){if(S>=u)return 0;const g=s.length,n=Math.floor(S/M),V=Math.floor((u-1)/M)+1;let b=t.slice(n,V).reduce(B,0);return S%M!==0&&(b-=s.slice(n*M,S).reduce(B,0)),u%M!==0&&u!==g&&(b-=s.slice(u,V*M).reduce(B,0)),b}const se={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},qe=Object.keys(se),xe={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...se};function Re({virtualScrollLength:t,getVirtualScrollTarget:s,getVirtualScrollEl:S,virtualScrollItemSizeComputed:u}){const g=Me(),{props:n,emit:V,proxy:b}=g,{$q:h}=b;let y,o,v,w=[],f;const q=R(0),k=R(0),F=R({}),T=R(null),_=R(null),O=R(null),m=R({from:0,to:0}),D=L(()=>n.tableColspan!==void 0?n.tableColspan:100);u===void 0&&(u=L(()=>n.virtualScrollItemSize));const I=L(()=>u.value+";"+n.virtualScrollHorizontal),ue=L(()=>I.value+";"+n.virtualScrollSliceRatioBefore+";"+n.virtualScrollSliceRatioAfter);ae(ue,()=>{H()}),ae(I,X);function X(){K(o,!0)}function ee(e){K(e===void 0?o:e)}function P(e,l){const r=s();if(r==null||r.nodeType===8)return;const d=Q(r,S(),T.value,_.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd);v!==d.scrollViewSize&&H(d.scrollViewSize),N(r,d,Math.min(t.value-1,Math.max(0,parseInt(e,10)||0)),0,be.indexOf(l)!==-1?l:o!==-1&&e>o?"end":"start")}function fe(){const e=s();if(e==null||e.nodeType===8)return;const l=Q(e,S(),T.value,_.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd),r=t.value-1,d=l.scrollMaxSize-l.offsetStart-l.offsetEnd-k.value;if(y===l.scrollStart)return;if(l.scrollMaxSize<=0){N(e,l,0,0);return}v!==l.scrollViewSize&&H(l.scrollViewSize),Y(m.value.from);const p=Math.floor(l.scrollMaxSize-Math.max(l.scrollViewSize,l.offsetEnd)-Math.min(f[r],l.scrollViewSize/2));if(p>0&&Math.ceil(l.scrollStart)>=p){N(e,l,r,l.scrollMaxSize-l.offsetEnd-w.reduce(B,0));return}let c=0,a=l.scrollStart-l.offsetStart,z=a;if(a<=d&&a+l.scrollViewSize>=q.value)a-=q.value,c=m.value.from,z=a;else for(let i=0;a>=w[i]&&c<r;i++)a-=w[i],c+=M;for(;a>0&&c<r;)a-=f[c],a>-l.scrollViewSize?(c++,z=a):z=f[c]+a;N(e,l,c,z)}function N(e,l,r,d,p){const c=typeof p=="string"&&p.indexOf("-force")!==-1,a=c===!0?p.replace("-force",""):p,z=a!==void 0?a:"start";let i=Math.max(0,r-F.value[z]),E=i+F.value.total;E>t.value&&(E=t.value,i=Math.max(0,E-F.value.total)),y=l.scrollStart;const C=i!==m.value.from||E!==m.value.to;if(C===!1&&a===void 0){te(r);return}const{activeElement:re}=document,x=O.value;C===!0&&x!==null&&x!==re&&x.contains(re)===!0&&(x.addEventListener("focusout",le),setTimeout(()=>{x!==null&&x.removeEventListener("focusout",le)})),Ee(x,r-i);const Se=a!==void 0?f.slice(i,r).reduce(B,0):0;if(C===!0){const $=E>=m.value.from&&i<=m.value.to?m.value.to:E;m.value={from:i,to:$},q.value=W(w,f,0,i),k.value=W(w,f,E,t.value),requestAnimationFrame(()=>{m.value.to!==E&&y===l.scrollStart&&(m.value={from:m.value.from,to:E},k.value=W(w,f,E,t.value))})}requestAnimationFrame(()=>{if(y!==l.scrollStart)return;C===!0&&Y(i);const $=f.slice(i,r).reduce(B,0),j=$+l.offsetStart+q.value,ie=j+f[r];let G=j+d;if(a!==void 0){const ve=$-Se,J=l.scrollStart+ve;G=c!==!0&&J<j&&ie<J+l.scrollViewSize?J:a==="end"?ie-l.scrollViewSize:j-(a==="start"?0:Math.round((l.scrollViewSize-f[r])/2))}y=G,ce(e,G,n.virtualScrollHorizontal,h.lang.rtl),te(r)})}function Y(e){const l=O.value;if(l){const r=ne.call(l.children,i=>i.classList&&i.classList.contains("q-virtual-scroll--skip")===!1),d=r.length,p=n.virtualScrollHorizontal===!0?i=>i.getBoundingClientRect().width:i=>i.offsetHeight;let c=e,a,z;for(let i=0;i<d;){for(a=p(r[i]),i++;i<d&&r[i].classList.contains("q-virtual-scroll--with-prev")===!0;)a+=p(r[i]),i++;z=a-f[c],z!==0&&(f[c]+=z,w[Math.floor(c/M)]+=z),c++}}}function le(){O.value!==null&&O.value!==void 0&&O.value.focus()}function K(e,l){const r=1*u.value;(l===!0||Array.isArray(f)===!1)&&(f=[]);const d=f.length;f.length=t.value;for(let c=t.value-1;c>=d;c--)f[c]=r;const p=Math.floor((t.value-1)/M);w=[];for(let c=0;c<=p;c++){let a=0;const z=Math.min((c+1)*M,t.value);for(let i=c*M;i<z;i++)a+=f[i];w.push(a)}o=-1,y=void 0,q.value=W(w,f,0,m.value.from),k.value=W(w,f,m.value.to,t.value),e>=0?(Y(m.value.from),we(()=>{P(e)})):U()}function H(e){if(e===void 0&&typeof window!="undefined"){const a=s();a!=null&&a.nodeType!==8&&(e=Q(a,S(),T.value,_.value,n.virtualScrollHorizontal,h.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd).scrollViewSize)}v=e;const l=parseFloat(n.virtualScrollSliceRatioBefore)||0,r=parseFloat(n.virtualScrollSliceRatioAfter)||0,d=1+l+r,p=e===void 0||e<=0?1:Math.ceil(e/u.value),c=Math.max(1,p,Math.ceil((n.virtualScrollSliceSize>0?n.virtualScrollSliceSize:10)/d));F.value={total:Math.ceil(c*d),start:Math.ceil(c*l),center:Math.ceil(c*(.5+l)),end:Math.ceil(c*(1+l)),view:p}}function de(e,l){const r=n.virtualScrollHorizontal===!0?"width":"height",d={["--q-virtual-scroll-item-"+r]:u.value+"px"};return[e==="tbody"?A(e,{class:"q-virtual-scroll__padding",key:"before",ref:T},[A("tr",[A("td",{style:{[r]:`${q.value}px`,...d},colspan:D.value})])]):A(e,{class:"q-virtual-scroll__padding",key:"before",ref:T,style:{[r]:`${q.value}px`,...d}}),A(e,{class:"q-virtual-scroll__content",key:"content",ref:O,tabindex:-1},l.flat()),e==="tbody"?A(e,{class:"q-virtual-scroll__padding",key:"after",ref:_},[A("tr",[A("td",{style:{[r]:`${k.value}px`,...d},colspan:D.value})])]):A(e,{class:"q-virtual-scroll__padding",key:"after",ref:_,style:{[r]:`${k.value}px`,...d}})]}function te(e){o!==e&&(n.onVirtualScroll!==void 0&&V("virtualScroll",{index:e,from:m.value.from,to:m.value.to-1,direction:e<o?"decrease":"increase",ref:b}),o=e)}H();const U=pe(fe,h.platform.is.ios===!0?120:35);he(()=>{H()});let oe=!1;return ze(()=>{oe=!0}),ge(()=>{if(oe!==!0)return;const e=s();y!==void 0&&e!==void 0&&e!==null&&e.nodeType!==8?ce(e,y,n.virtualScrollHorizontal,h.lang.rtl):P(o)}),ye(()=>{U.cancel()}),Object.assign(b,{scrollTo:P,reset:X,refresh:ee}),{virtualScrollSliceRange:m,virtualScrollSliceSizeComputed:F,setVirtualScrollSize:H,onVirtualScrollEvt:U,localResetVirtualScroll:K,padVirtualScroll:de,scrollTo:P,reset:X,refresh:ee}}export{Re as a,qe as c,xe as u};