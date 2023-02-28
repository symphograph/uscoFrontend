import{c as I,r,h as f,w as Q,l as N,p as a,X as $,s as E,Y as F}from"./index.e552dc30.js";import{u as H,a as L}from"./use-ratio.fa9637be.js";const M=16/9;var D=I({name:"QImg",props:{...H,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:M},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:d,emit:v}){const h=r(e.initialRatio),S=L(e,h);let t=null,s=!1;const l=[r(null),r(m())],n=r(0),u=r(!1),o=r(!1),w=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),C=f(()=>({width:e.width,height:e.height})),T=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),z=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Q(()=>y(),_);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function m(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function _(i){t!==null&&(clearTimeout(t),t=null),o.value=!1,i===null?(u.value=!1,l[n.value^1].value=m()):u.value=!0,l[n.value].value=i}function R({target:i}){s!==!0&&(t!==null&&(clearTimeout(t),t=null),h.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,b(i,1))}function b(i,c){s===!0||c===1e3||(i.complete===!0?k(i):t=setTimeout(()=>{t=null,b(i,c+1)},50))}function k(i){s!==!0&&(n.value=n.value^1,l[n.value].value=null,u.value=!1,o.value=!1,v("load",i.currentSrc||i.src))}function B(i){t!==null&&(clearTimeout(t),t=null),u.value=!1,o.value=!0,l[n.value].value=null,l[n.value^1].value=m(),v("error",i)}function q(i){const c=l[i].value,g={key:"img_"+i,class:T.value,style:z.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...c};return n.value===i?(g.class+=" q-img__image--waiting",Object.assign(g,{onLoad:R,onError:B})):g.class+=" q-img__image--loaded",a("div",{class:"q-img__container absolute-full",key:"img"+i},a("img",g))}function j(){return u.value!==!0?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},E(d[o.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},d.loading!==void 0?d.loading():e.noSpinner===!0?void 0:[a(F,{color:e.spinnerColor,size:e.spinnerSize})])}return _(y()),N(()=>{s=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const i=[];return S.value!==null&&i.push(a("div",{key:"filler",style:S.value})),o.value!==!0&&(l[0].value!==null&&i.push(q(0)),l[1].value!==null&&i.push(q(1))),i.push(a($,{name:"q-transition--fade"},j)),a("div",{class:w.value,style:C.value,role:"img","aria-label":e.alt},i)}}});export{D as Q};