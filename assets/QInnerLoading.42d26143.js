import{Q as g}from"./QTooltip.4f8868a4.js";import{i as P,m as f,n as p,p as e,f as u,x as F,q as o,B as nu,bm as J,z as c,v as K,u as M,b as ou,E as su,d as ru,r as C,I as du,c as R,C as I,l as B,F as N,ax as r,a5 as X,t as $,ay as iu,V as fu,X as mu,ae as pu,Z as cu,aN as vu,h as A,a4 as gu,g as Cu}from"./index.1ed4f0d9.js";import{a as ku,Q as bu,f as yu}from"./style.7dcbbeeb.js";import{u as _u,a as j}from"./myFuncts.57fb681f.js";import{m as Eu}from"./myAuth.e8729030.js";import{Q as i}from"./QItemLabel.91ec210f.js";import{b as w,Q as z,a as O}from"./QImg.d3ea3630.js";import{Q as Bu}from"./QList.94cd8ab2.js";/* empty css               */import{S as Du}from"./announce.75f4185e.js";import{S as Fu}from"./entry.5005a3f9.js";import{u as Su}from"./myAxios.7a7c879e.js";import{_ as Uu}from"./plugin-vue_export-helper.21dcd24c.js";const Au={__name:"RecommendsDialog",emits:["confirmed"],setup(s,{emit:k}){const m=P("showRecommends"),b=k;function y(){b("confirmed"),m.value=!1}return(d,t)=>(f(),p(su,{modelValue:M(m),"onUpdate:modelValue":t[1]||(t[1]=_=>ou(m)?m.value=_:null)},{default:e(()=>[u(K,{className:"dialogArea"},{default:e(()=>[u(F,{class:"cardTitle"},{default:e(()=>[u(w,{dense:""},{default:e(()=>[u(i,null,{default:e(()=>t[2]||(t[2]=[o("\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043A \u042D\u0441\u043A\u0438\u0437\u0443")])),_:1})]),_:1})]),_:1}),u(nu,{inset:""}),u(F,null,{default:e(()=>[u(Bu,null,{default:e(()=>[u(w,null,{default:e(()=>[u(z,null,{default:e(()=>[u(i,null,{default:e(()=>t[3]||(t[3]=[o("\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D:")])),_:1}),u(i,{caption:""},{default:e(()=>t[4]||(t[4]=[o("16:9 \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 1920x1080")])),_:1}),u(i,{caption:""},{default:e(()=>t[5]||(t[5]=[o("\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u0440\u043E\u043D \u043A\u0440\u0430\u0439\u043D\u0435 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u043E \u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F ")])),_:1})]),_:1})]),_:1}),u(w,null,{default:e(()=>[u(z,null,{default:e(()=>[u(i,null,{default:e(()=>t[6]||(t[6]=[o("\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435:")])),_:1}),u(i,{caption:""},{default:e(()=>t[7]||(t[7]=[o(" \u042D\u0441\u043A\u0438\u0437 \u043F\u0440\u0438\u0437\u0432\u0430\u043D \u043E\u0442\u0440\u0430\u0436\u0430\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u044D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u043C\u044B\u0441\u043B\u044C \u0432 \u0432\u0438\u0434\u0435 \u0440\u0438\u0441\u0443\u043D\u043A\u0430. ")])),_:1}),u(i,{caption:""},{default:e(()=>t[8]||(t[8]=[o(" \u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0432 \u043D\u0435\u043C \u043A\u0430\u043A\u043E\u0433\u043E-\u043B\u0438\u0431\u043E \u0442\u0435\u043A\u0441\u0442\u0430. \u0412 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u0442\u0430\u043A\u0443\u044E \u043A\u0430\u043A \u0432\u0440\u0435\u043C\u044F \u0438 \u043C\u0435\u0441\u0442\u043E. ")])),_:1}),u(i,{caption:""},{default:e(()=>t[9]||(t[9]=[o(" \u0418\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u0430 \u0432 \u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0435\u0433\u043E \u0448\u0440\u0438\u0444\u0442, \u0446\u0432\u0435\u0442 \u0438 \u043F\u0440\u043E\u0447\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0438\u043C\u0435\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C. ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(F,null,{default:e(()=>[u(i,null,{default:e(()=>t[10]||(t[10]=[o("\u0425\u043E\u0440\u043E\u0448\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440")])),_:1}),u(O,{src:"/img/sketch/good-example.png",ratio:16/9})]),_:1}),u(F,null,{default:e(()=>[u(i,null,{default:e(()=>t[11]||(t[11]=[o("\u041F\u043B\u043E\u0445\u043E\u0439 \u043F\u0440\u0438\u043C\u0435\u0440")])),_:1}),u(O,{src:"/img/sketch/bad-example.jpg",ratio:16/9})]),_:1}),u(J,{align:"right"},{default:e(()=>[u(c,{class:"goldBtn",label:"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",onClick:t[0]||(t[0]=_=>y())})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const Qu={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},xu={class:"col"},wu={class:"q-uploader__subtitle"},Ru=ru({__name:"SketchUploader",props:{id:{},type:{}},emits:["onUploaded"],setup(s,{emit:k}){const m=_u(),b=s,y=C(),d=C(),t={},_=k,D=C(!1);du("showRecommends",D);const S=C(!1),E=C(""),q=C(""),Q=P("pwUrl");function Z(){L()}let V="image/jpeg";function G(a){E.value=URL.createObjectURL(a[0]),V=a[0].type}function L(){const{canvas:a}=y.value.getResult();a.toBlob(l=>{q.value=l,Q.value=URL.createObjectURL(l)},V)}function T(){L();const a=d.value.queuedFiles[0],l=a.name.replace(/[\[\]]/g,"_"),v=new File([q.value],l,{type:a.type});d.value.reset(),d.value.addFiles([v]),d.value.upload()}function H(){E.value="",Q.value=""}function W(a){var v,n,U;let l=(U=(n=JSON.parse((v=a==null?void 0:a.xhr)==null?void 0:v.response))==null?void 0:n.error)!=null?U:"";m.notify(j(null,l))}function Y(){d.value.reset(),Q.value="",_("onUploaded")}function h(){let a;switch(b.type){case"event":a=Du.path;break;case"entry":a=Fu.path;break;default:a=""}return a?Su.getApiUrl(String(a)):(m.notify(j(new Error("\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 URL \u0434\u043B\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"))),"")}function uu(){return{url:h(),headers:[{name:"ACCESSTOKEN",value:Eu.self.AccessToken}],formFields:[{name:"id",value:String(b.id)},{name:"method",value:"add"}]}}function eu({imageSize:a,visibleArea:l}){return{width:(l||a).width,height:(l||a).height}}function lu(){S.value=!0}const tu={left:0,top:0},x=C(!1),au=R(()=>x.value?{}:{aspectRatio:1920/1080});return(a,l)=>{var v;return f(),I(N,null,[u(ku,{modelValue:t,"onUpdate:modelValue":l[2]||(l[2]=n=>t=n),accept:"image/*",style:{width:"100%"},factory:uu,multiple:!1,"hide-upload-btn":"",ref_key:"refUploader",ref:d,onAdded:G,onRemoved:H,onUploaded:Y,onFailed:W,onStart:l[3]||(l[3]=n=>{console.log(n)}),"no-thumbnails":""},{header:e(n=>[r("div",Qu,[n.uploadedFiles.length>0?(f(),p(c,{key:0,icon:"done_all",onClick:n.removeUploadedFiles,round:"",dense:"",flat:""},{default:e(()=>[u(g,null,{default:e(()=>l[6]||(l[6]=[o("Remove Uploaded Files")])),_:1})]),_:2},1032,["onClick"])):B("",!0),n.isUploading?(f(),p(X,{key:1,class:"q-uploader__spinner"})):B("",!0),r("div",xu,[l[7]||(l[7]=r("div",{class:"q-uploader__title"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437",-1)),r("div",wu,$(n.uploadSizeLabel)+" / "+$(n.uploadProgressLabel),1)]),S.value?(f(),I(N,{key:2},[n.canAddFiles?(f(),p(c,{key:0,type:"a",icon:"add_box",onClick:n.pickFiles,round:"",dense:"",flat:""},{default:e(()=>[u(bu),u(g,null,{default:e(()=>l[8]||(l[8]=[o("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")])),_:1})]),_:2},1032,["onClick"])):B("",!0)],64)):(f(),p(c,{key:3,icon:"add_box",onClick:l[0]||(l[0]=U=>D.value=!0),round:"",dense:"",flat:""},{default:e(()=>[u(g,null,{default:e(()=>l[9]||(l[9]=[o("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")])),_:1})]),_:1})),n.canUpload?(f(),p(c,{key:4,icon:"cloud_upload",onClick:T,round:"",dense:"",flat:""},{default:e(()=>[u(g,null,{default:e(()=>l[10]||(l[10]=[o("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C")])),_:1})]),_:1})):B("",!0),n.isUploading?(f(),p(c,{key:5,icon:"clear",onClick:n.abort,round:"",dense:"",flat:""},{default:e(()=>[u(g,null,{default:e(()=>l[11]||(l[11]=[o("Abort Upload")])),_:1})]),_:2},1032,["onClick"])):B("",!0),u(c,{icon:"help",flat:"",round:"",onClick:l[1]||(l[1]=U=>D.value=!0)},{default:e(()=>[u(g,null,{default:e(()=>l[12]||(l[12]=[o("\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043A \u044D\u0441\u043A\u0438\u0437\u0443")])),_:1})]),_:1})])]),_:1},512),(v=d.value)!=null&&v.queuedFiles.length?(f(),p(K,{key:0,dark:"",style:{width:"100%"}},{default:e(()=>[u(F,null,{default:e(()=>[u(M(yu),{class:"cropper",ref_key:"refCropper",ref:y,src:E.value,canvas:{width:1920,height:1080},"stencil-props":au.value,"default-size":eu,"default-position":tu,onChange:Z},null,8,["src","stencil-props"])]),_:1}),u(J,{align:"between"},{default:e(()=>[u(iu,{modelValue:x.value,"onUpdate:modelValue":l[4]||(l[4]=n=>x.value=n),label:"\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",color:"red"},{default:e(()=>[u(g,{self:"top middle",class:"bg-red text-black text-body2",delay:300},{default:e(()=>l[13]||(l[13]=[r("ul",null,[r("li",null,"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0438\u043B\u0438 \u0441\u043F\u043B\u044E\u0449\u0438\u0442\u044C."),r("li",null,"\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u044B \u0441\u0442\u0430\u043D\u0443\u0442 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430\u043C\u0438."),r("li",null,"\u041A\u0440\u0443\u0433\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u043E\u0432\u0430\u043B\u0430\u043C\u0438."),r("li",null,"\u041B\u044E\u0434\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043D\u0435\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0442\u043E\u043B\u0441\u0442\u044B\u043C\u0438 \u0438\u043B\u0438 \u0445\u0443\u0434\u044B\u043C\u0438."),r("li",null,"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442 \u0447\u0435\u0442\u043A\u043E\u0441\u0442\u044C"),r("li",null,"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432")],-1)])),_:1})]),_:1},8,["modelValue"]),u(c,{label:"\u0413\u043E\u0442\u043E\u0432\u043E",color:"green",onClick:T})]),_:1})]),_:1})):B("",!0),u(Au,{onConfirmed:l[5]||(l[5]=n=>lu())})],64)}}});var Mu=Uu(Ru,[["__scopeId","data-v-6c51307d"]]),Xu=fu({name:"QInnerLoading",props:{...mu,...pu,showing:Boolean,color:String,size:{type:[String,Number],default:"42px"},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(s,{slots:k}){const m=Cu(),b=cu(s,m.proxy.$q),{transitionProps:y,transitionStyle:d}=vu(s),t=R(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(b.value===!0?" q-inner-loading--dark":"")),_=R(()=>"q-inner-loading__label"+(s.labelClass!==void 0?` ${s.labelClass}`:""));function D(){const E=[A(X,{size:s.size,color:s.color})];return s.label!==void 0&&E.push(A("div",{class:_.value,style:s.labelStyle},[s.label])),E}function S(){return s.showing===!0?A("div",{class:t.value,style:d.value},k.default!==void 0?k.default():D()):null}return()=>A(gu,y.value,S)}});export{Xu as Q,Mu as S};
