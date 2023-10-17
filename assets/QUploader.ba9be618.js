import{aV as me,G as ne,aW as ge,s as h,H as s,b2 as _e,M as Y,r as z,a5 as ie,a9 as se,m as he,aj as be,al as Fe,aT as ye,p as Se,bh as qe,w as xe,O as ke,ax as ze,bg as we,bi as Ue,aJ as le,a3 as Ce,a4 as re,be as Be}from"./index.415b5fd3.js";import{b as Pe,h as ue}from"./format.3e32b8d9.js";import{g as Re}from"./get-emits-object.24798346.js";const Ee={...me,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:a=>a>=0&&a<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},G=50,de=2*G,ce=de*Math.PI,je=Math.round(ce*1e3)/1e3;var Le=ne({name:"QCircularProgress",props:{...Ee,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(a,{slots:g}){const{proxy:{$q:o}}=Y(),r=ge(a),u=h(()=>{const F=(o.lang.rtl===!0?-1:1)*a.angle;return{transform:a.reverse!==(o.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-F}deg)`:`rotate3d(0, 0, 1, ${F-90}deg)`}}),f=h(()=>a.instantFeedback!==!0&&a.indeterminate!==!0?{transition:`stroke-dashoffset ${a.animationSpeed}ms ease 0s, stroke ${a.animationSpeed}ms ease`}:""),b=h(()=>de/(1-a.thickness/2)),w=h(()=>`${b.value/2} ${b.value/2} ${b.value} ${b.value}`),B=h(()=>Pe(a.value,a.min,a.max)),P=h(()=>ce*(1-(B.value-a.min)/(a.max-a.min))),U=h(()=>a.thickness/2*b.value);function R({thickness:F,offset:x,color:e,cls:p,rounded:k}){return s("circle",{class:"q-circular-progress__"+p+(e!==void 0?` text-${e}`:""),style:f.value,fill:"transparent",stroke:"currentColor","stroke-width":F,"stroke-dasharray":je,"stroke-dashoffset":x,"stroke-linecap":k,cx:b.value,cy:b.value,r:G})}return()=>{const F=[];a.centerColor!==void 0&&a.centerColor!=="transparent"&&F.push(s("circle",{class:`q-circular-progress__center text-${a.centerColor}`,fill:"currentColor",r:G-U.value/2,cx:b.value,cy:b.value})),a.trackColor!==void 0&&a.trackColor!=="transparent"&&F.push(R({cls:"track",thickness:U.value,offset:0,color:a.trackColor})),F.push(R({cls:"circle",thickness:U.value,offset:P.value,color:a.color,rounded:a.rounded===!0?"round":void 0}));const x=[s("svg",{class:"q-circular-progress__svg",style:u.value,viewBox:w.value,"aria-hidden":"true"},F)];return a.showValue===!0&&x.push(s("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:a.fontSize}},g.default!==void 0?g.default():[s("div",B.value)])),s("div",{class:`q-circular-progress q-circular-progress--${a.indeterminate===!0?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":a.min,"aria-valuemax":a.max,"aria-valuenow":a.indeterminate===!0?void 0:B.value},_e(g.internal,x))}}});function M(a,g,o,r){const u=[];return a.forEach(f=>{r(f)===!0?u.push(f):g.push({failedPropValidation:o,file:f})}),u}function H(a){a&&a.dataTransfer&&(a.dataTransfer.dropEffect="copy"),se(a)}const Ne={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Oe=["rejected"];function Te({editable:a,dnd:g,getFileInput:o,addFilesToQueue:r}){const{props:u,emit:f,proxy:b}=Y(),w=z(null),B=h(()=>u.accept!==void 0?u.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),P=h(()=>parseInt(u.maxFiles,10)),U=h(()=>parseInt(u.maxTotalSize,10));function R(l){if(a.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&ie(l);else{const S=o();S&&S!==l.target&&S.click(l)}}function F(l){a.value&&l&&r(null,l)}function x(l,S,O,T){let i=Array.from(S||l.target.files);const m=[],C=()=>{m.length!==0&&f("rejected",m)};if(u.accept!==void 0&&B.value.indexOf("*/")===-1&&(i=M(i,m,"accept",d=>B.value.some(_=>d.type.toUpperCase().startsWith(_)||d.name.toUpperCase().endsWith(_))),i.length===0))return C();if(u.maxFileSize!==void 0){const d=parseInt(u.maxFileSize,10);if(i=M(i,m,"max-file-size",_=>_.size<=d),i.length===0)return C()}if(u.multiple!==!0&&i.length!==0&&(i=[i[0]]),i.forEach(d=>{d.__key=d.webkitRelativePath+d.lastModified+d.name+d.size}),T===!0){const d=O.map(_=>_.__key);i=M(i,m,"duplicate",_=>d.includes(_.__key)===!1)}if(i.length===0)return C();if(u.maxTotalSize!==void 0){let d=T===!0?O.reduce((_,j)=>_+j.size,0):0;if(i=M(i,m,"max-total-size",_=>(d+=_.size,d<=U.value)),i.length===0)return C()}if(typeof u.filter=="function"){const d=u.filter(i);i=M(i,m,"filter",_=>d.includes(_))}if(u.maxFiles!==void 0){let d=T===!0?O.length:0;if(i=M(i,m,"max-files",()=>(d++,d<=P.value)),i.length===0)return C()}if(C(),i.length!==0)return i}function e(l){H(l),g.value!==!0&&(g.value=!0)}function p(l){se(l),(l.relatedTarget!==null||he.is.safari!==!0?l.relatedTarget!==w.value:document.elementsFromPoint(l.clientX,l.clientY).includes(w.value)===!1)===!0&&(g.value=!1)}function k(l){H(l);const S=l.dataTransfer.files;S.length!==0&&r(null,S),g.value=!1}function v(l){if(g.value===!0)return s("div",{ref:w,class:`q-${l}__dnd absolute-full`,onDragenter:H,onDragover:H,onDragleave:p,onDrop:k})}return Object.assign(b,{pickFiles:R,addFiles:F}),{pickFiles:R,addFiles:F,onDragover:e,onDragleave:p,processFiles:x,getDndNode:v,maxFilesNumber:P,maxTotalSizeNumber:U}}function oe(a){return(a*100).toFixed(2)+"%"}const $e={...be,...Ne,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},ve=[...Oe,"start","finish","added","removed"];function De(a,g){const o=Y(),{props:r,slots:u,emit:f,proxy:b}=o,{$q:w}=b,B=Fe(r,w);function P(t,c,y){if(t.__status=c,c==="idle"){t.__uploaded=0,t.__progress=0,t.__sizeLabel=ue(t.size),t.__progressLabel="0.00%";return}if(c==="failed"){b.$forceUpdate();return}t.__uploaded=c==="uploaded"?t.size:y,t.__progress=c==="uploaded"?1:Math.min(.9999,t.__uploaded/t.size),t.__progressLabel=oe(t.__progress),b.$forceUpdate()}const U=h(()=>r.disable!==!0&&r.readonly!==!0),R=z(!1),F=z(null),x=z(null),e={files:z([]),queuedFiles:z([]),uploadedFiles:z([]),uploadedSize:z(0),updateFileStatus:P,isAlive:()=>ye(o)===!1},{pickFiles:p,addFiles:k,onDragover:v,onDragleave:l,processFiles:S,getDndNode:O,maxFilesNumber:T,maxTotalSizeNumber:i}=Te({editable:U,dnd:R,getFileInput:V,addFilesToQueue:Z});Object.assign(e,a({props:r,slots:u,emit:f,helpers:e,exposeApi:t=>{Object.assign(e,t)}})),e.isBusy===void 0&&(e.isBusy=z(!1));const m=z(0),C=h(()=>m.value===0?0:e.uploadedSize.value/m.value),d=h(()=>oe(C.value)),_=h(()=>ue(m.value)),j=h(()=>U.value===!0&&e.isUploading.value!==!0&&(r.multiple===!0||e.queuedFiles.value.length===0)&&(r.maxFiles===void 0||e.files.value.length<T.value)&&(r.maxTotalSize===void 0||m.value<i.value)),n=h(()=>U.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);Se(qe,ae);const $=h(()=>"q-uploader column no-wrap"+(B.value===!0?" q-uploader--dark q-dark":"")+(r.bordered===!0?" q-uploader--bordered":"")+(r.square===!0?" q-uploader--square no-border-radius":"")+(r.flat===!0?" q-uploader--flat no-shadow":"")+(r.disable===!0?" disabled q-uploader--disable":"")+(R.value===!0?" q-uploader--dnd":"")),D=h(()=>"q-uploader__header"+(r.color!==void 0?` bg-${r.color}`:"")+(r.textColor!==void 0?` text-${r.textColor}`:""));xe(e.isUploading,(t,c)=>{c===!1&&t===!0?f("start"):c===!0&&t===!1&&f("finish")});function A(){r.disable===!1&&(e.abort(),e.uploadedSize.value=0,m.value=0,K(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function E(){r.disable===!1&&J(["uploaded"],()=>{e.uploadedFiles.value=[]})}function W(){J(["idle","failed"],({size:t})=>{m.value-=t,e.queuedFiles.value=[]})}function J(t,c){if(r.disable===!0)return;const y={files:[],size:0},L=e.files.value.filter(q=>t.indexOf(q.__status)===-1?!0:(y.size+=q.size,y.files.push(q),q.__img!==void 0&&window.URL.revokeObjectURL(q.__img.src),!1));y.files.length!==0&&(e.files.value=L,c(y),f("removed",y.files))}function X(t){r.disable||(t.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(c=>c.__key!==t.__key):t.__status==="uploading"?t.__abort():m.value-=t.size,e.files.value=e.files.value.filter(c=>c.__key!==t.__key?!0:(c.__img!==void 0&&window.URL.revokeObjectURL(c.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(c=>c.__key!==t.__key),f("removed",[t]))}function K(){e.files.value.forEach(t=>{t.__img!==void 0&&window.URL.revokeObjectURL(t.__img.src)})}function V(){return x.value||F.value.getElementsByClassName("q-uploader__input")[0]}function Z(t,c){const y=S(t,c,e.files.value,!0),L=V();L!=null&&(L.value=""),y!==void 0&&(y.forEach(q=>{if(e.updateFileStatus(q,"idle"),m.value+=q.size,r.noThumbnails!==!0&&q.type.toUpperCase().startsWith("IMAGE")){const te=new Image;te.src=window.URL.createObjectURL(q),q.__img=te}}),e.files.value=e.files.value.concat(y),e.queuedFiles.value=e.queuedFiles.value.concat(y),f("added",y),r.autoUpload===!0&&e.upload())}function ee(){n.value===!0&&e.upload()}function Q(t,c,y){if(t===!0){const L={type:"a",key:c,icon:w.iconSet.uploader[c],flat:!0,dense:!0};let q;return c==="add"?(L.onClick=p,q=ae):L.onClick=y,s(re,L,q)}}function ae(){return s("input",{ref:x,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:r.accept,multiple:r.multiple===!0?"multiple":void 0,capture:r.capture,onMousedown:ie,onClick:p,onChange:Z})}function fe(){return u.header!==void 0?u.header(I):[s("div",{class:"q-uploader__header-content column"},[s("div",{class:"flex flex-center no-wrap q-gutter-xs"},[Q(e.queuedFiles.value.length!==0,"removeQueue",W),Q(e.uploadedFiles.value.length!==0,"removeUploaded",E),e.isUploading.value===!0?s(le,{class:"q-uploader__spinner"}):null,s("div",{class:"col column justify-center"},[r.label!==void 0?s("div",{class:"q-uploader__title"},[r.label]):null,s("div",{class:"q-uploader__subtitle"},[_.value+" / "+d.value])]),Q(j.value,"add"),Q(r.hideUploadBtn===!1&&n.value===!0,"upload",e.upload),Q(e.isUploading.value,"clear",e.abort)])])]}function pe(){return u.list!==void 0?u.list(I):e.files.value.map(t=>s("div",{key:t.__key,class:"q-uploader__file relative-position"+(r.noThumbnails!==!0&&t.__img!==void 0?" q-uploader__file--img":"")+(t.__status==="failed"?" q-uploader__file--failed":t.__status==="uploaded"?" q-uploader__file--uploaded":""),style:r.noThumbnails!==!0&&t.__img!==void 0?{backgroundImage:'url("'+t.__img.src+'")'}:null},[s("div",{class:"q-uploader__file-header row flex-center no-wrap"},[t.__status==="failed"?s(Ce,{class:"q-uploader__file-status",name:w.iconSet.type.negative,color:"negative"}):null,s("div",{class:"q-uploader__file-header-content col"},[s("div",{class:"q-uploader__title"},[t.name]),s("div",{class:"q-uploader__subtitle row items-center no-wrap"},[t.__sizeLabel+" / "+t.__progressLabel])]),t.__status==="uploading"?s(Le,{value:t.__progress,min:0,max:1,indeterminate:t.__progress===0}):s(re,{round:!0,dense:!0,flat:!0,icon:w.iconSet.uploader[t.__status==="uploaded"?"done":"clear"],onClick:()=>{X(t)}})])]))}ke(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&K()});const I={};for(const t in e)ze(e[t])===!0?we(I,t,()=>e[t].value):I[t]=e[t];return Object.assign(I,{upload:ee,reset:A,removeUploadedFiles:E,removeQueuedFiles:W,removeFile:X,pickFiles:p,addFiles:k}),Ue(I,{canAddFiles:()=>j.value,canUpload:()=>n.value,uploadSizeLabel:()=>_.value,uploadProgressLabel:()=>d.value}),g({...e,upload:ee,reset:A,removeUploadedFiles:E,removeQueuedFiles:W,removeFile:X,pickFiles:p,addFiles:k,canAddFiles:j,canUpload:n,uploadSizeLabel:_,uploadProgressLabel:d}),()=>{const t=[s("div",{class:D.value},fe()),s("div",{class:"q-uploader__list scroll"},pe()),O("uploader")];e.isBusy.value===!0&&t.push(s("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[s(le)]));const c={ref:F,class:$.value};return j.value===!0&&Object.assign(c,{onDragover:v,onDragleave:l}),s("div",c,t)}}const Ae=Re(ve);var Ie=({name:a,props:g,emits:o,injectPlugin:r})=>ne({name:a,props:{...$e,...g},emits:Be(o)===!0?{...Ae,...o}:[...ve,...o],setup(u,{expose:f}){return De(r,f)}});function N(a){return typeof a=="function"?a:()=>a}const Me={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>a=>a.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Qe=["factoryFailed","uploaded","failed","uploading"];function We({props:a,emit:g,helpers:o}){const r=z([]),u=z([]),f=z(0),b=h(()=>({url:N(a.url),method:N(a.method),headers:N(a.headers),formFields:N(a.formFields),fieldName:N(a.fieldName),withCredentials:N(a.withCredentials),sendRaw:N(a.sendRaw),batch:N(a.batch)})),w=h(()=>f.value>0),B=h(()=>u.value.length!==0);let P;function U(){r.value.forEach(e=>{e.abort()}),u.value.length!==0&&(P=!0)}function R(){const e=o.queuedFiles.value.slice(0);o.queuedFiles.value=[],b.value.batch(e)?F(e):e.forEach(p=>{F([p])})}function F(e){if(f.value++,typeof a.factory!="function"){x(e,{});return}const p=a.factory(e);if(!p)g("factoryFailed",new Error("QUploader: factory() does not return properly"),e),f.value--;else if(typeof p.catch=="function"&&typeof p.then=="function"){u.value.push(p);const k=v=>{o.isAlive()===!0&&(u.value=u.value.filter(l=>l!==p),u.value.length===0&&(P=!1),o.queuedFiles.value=o.queuedFiles.value.concat(e),e.forEach(l=>{o.updateFileStatus(l,"failed")}),g("factoryFailed",v,e),f.value--)};p.then(v=>{P===!0?k(new Error("Aborted")):o.isAlive()===!0&&(u.value=u.value.filter(l=>l!==p),x(e,v))}).catch(k)}else x(e,p||{})}function x(e,p){const k=new FormData,v=new XMLHttpRequest,l=(n,$)=>p[n]!==void 0?N(p[n])($):b.value[n]($),S=l("url",e);if(!S){console.error("q-uploader: invalid or no URL specified"),f.value--;return}const O=l("formFields",e);O!==void 0&&O.forEach(n=>{k.append(n.name,n.value)});let T=0,i=0,m=0,C=0,d;v.upload.addEventListener("progress",n=>{if(d===!0)return;const $=Math.min(C,n.loaded);o.uploadedSize.value+=$-m,m=$;let D=m-i;for(let A=T;D>0&&A<e.length;A++){const E=e[A];if(D>E.size)D-=E.size,T++,i+=E.size,o.updateFileStatus(E,"uploading",E.size);else{o.updateFileStatus(E,"uploading",D);return}}},!1),v.onreadystatechange=()=>{v.readyState<4||(v.status&&v.status<400?(o.uploadedFiles.value=o.uploadedFiles.value.concat(e),e.forEach(n=>{o.updateFileStatus(n,"uploaded")}),g("uploaded",{files:e,xhr:v})):(d=!0,o.uploadedSize.value-=m,o.queuedFiles.value=o.queuedFiles.value.concat(e),e.forEach(n=>{o.updateFileStatus(n,"failed")}),g("failed",{files:e,xhr:v})),f.value--,r.value=r.value.filter(n=>n!==v))},v.open(l("method",e),S),l("withCredentials",e)===!0&&(v.withCredentials=!0);const _=l("headers",e);_!==void 0&&_.forEach(n=>{v.setRequestHeader(n.name,n.value)});const j=l("sendRaw",e);e.forEach(n=>{o.updateFileStatus(n,"uploading",0),j!==!0&&k.append(l("fieldName",n),n,n.name),n.xhr=v,n.__abort=()=>{v.abort()},C+=n.size}),g("uploading",{files:e,xhr:v}),r.value.push(v),j===!0?v.send(new Blob(e)):v.send(k)}return{isUploading:w,isBusy:B,abort:U,upload:R}}var He={name:"QUploader",props:Me,emits:Qe,injectPlugin:We},Je=Ie(He);export{Je as Q};