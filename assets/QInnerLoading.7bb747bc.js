import{Q as _}from"./QTooltip.c3f82148.js";import{r as d,i as H,c as x,n as u,q as J,f as n,G as o,H as s,t as c,a9 as v,U as k,l as p,aH as N,ax as I,aZ as K,V as G,bk as M,ay as Y,aY as Z,F as W,I as X,J as ee,K as ae,ap as le,a6 as te,ar as oe,az as ne,h as U,aD as se,g as re}from"./index.60f9256a.js";import{a as ie,Q as de,f as ue}from"./style.19a72834.js";import{n as ce}from"./myFuncts.befffdaf.js";import{u as pe}from"./use-quasar.6d1805ac.js";import{m as fe}from"./myAuth.f2132660.js";import{_ as me}from"./plugin-vue_export-helper.21dcd24c.js";const A=a=>(X("data-v-94b909c2"),a=a(),ee(),a),_e={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},ve={class:"col"},ge=A(()=>s("div",{class:"q-uploader__title"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u044D\u0441\u043A\u0438\u0437",-1)),he={class:"q-uploader__subtitle"},ye=A(()=>s("ul",null,[s("li",null,"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0438\u043B\u0438 \u0441\u043F\u043B\u044E\u0449\u0438\u0442\u044C."),s("li",null,"\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u044B \u0441\u0442\u0430\u043D\u0443\u0442 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430\u043C\u0438."),s("li",null,"\u041A\u0440\u0443\u0433\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u043E\u0432\u0430\u043B\u0430\u043C\u0438."),s("li",null,"\u041B\u044E\u0434\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043D\u0435\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0442\u043E\u043B\u0441\u0442\u044B\u043C\u0438 \u0438\u043B\u0438 \u0445\u0443\u0434\u044B\u043C\u0438."),s("li",null,"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442 \u0447\u0435\u0442\u043A\u043E\u0441\u0442\u044C"),s("li",null,"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0439 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u0440\u043A\u043E\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432")],-1)),be={__name:"SketchUploader",props:{id:Number,type:String},emits:["onUploaded"],setup(a,{emit:g}){const S=String("https://api.sakh-orch.ru/"),C=pe(),h=a,y=d(),r=d(),b={},w=g,f=d(""),m=d("");d({src:"",type:""}),d({coordinates:null,image:null});const Q=H("pwUrl");function B(){R()}let F="image/jpeg";function L(l){f.value=URL.createObjectURL(l[0]),F=l[0].type}function R(){const{canvas:l}=y.value.getResult();l.toBlob(t=>{m.value=t,Q.value=URL.createObjectURL(t)},F)}function T(){R();const l=r.value.queuedFiles[0],t=l.name.replace(/[\[\]]/g,"_"),i=new File([m.value],t,{type:l.type});r.value.reset(),r.value.addFiles([i]),r.value.upload()}function z(){f.value="",Q.value=""}function j(l){var i,e,V;let t=(V=(e=JSON.parse((i=l==null?void 0:l.xhr)==null?void 0:i.response))==null?void 0:e.error)!=null?V:"";C.notify(ce(null,t))}function D(){r.value.reset(),Q.value="",w("onUploaded")}function O(){return{url:S+`api/${h.type}/sketch.php`,headers:[{name:"ACCESSTOKEN",value:fe.self.AccessToken}],formFields:[{name:"id",value:h.id},{name:"method",value:"add"}]}}function P({imageSize:l,visibleArea:t}){return{width:(t||l).width,height:(t||l).height}}const E={left:0,top:0},q=d(!1),$=x(()=>q.value?{}:{aspectRatio:1920/1080});return(l,t)=>{var i;return u(),J(W,null,[n(de,{modelValue:b,"onUpdate:modelValue":t[0]||(t[0]=e=>b=e),accept:"image/*",style:{width:"100%"},factory:O,multiple:!1,"hide-upload-btn":"",ref_key:"refUploader",ref:r,onAdded:L,onRemoved:z,onUploaded:D,onFailed:j,"no-thumbnails":""},{header:o(e=>[s("div",_e,[e.uploadedFiles.length>0?(u(),c(v,{key:0,icon:"done_all",onClick:e.removeUploadedFiles,round:"",dense:"",flat:""},{default:o(()=>[n(_,null,{default:o(()=>[k("Remove Uploaded Files")]),_:1})]),_:2},1032,["onClick"])):p("",!0),e.isUploading?(u(),c(N,{key:1,class:"q-uploader__spinner"})):p("",!0),s("div",ve,[ge,s("div",he,I(e.uploadSizeLabel)+" / "+I(e.uploadProgressLabel),1)]),e.canAddFiles?(u(),c(v,{key:2,type:"a",icon:"add_box",onClick:e.pickFiles,round:"",dense:"",flat:""},{default:o(()=>[n(ie),n(_,null,{default:o(()=>[k("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")]),_:1})]),_:2},1032,["onClick"])):p("",!0),e.canUpload?(u(),c(v,{key:3,icon:"cloud_upload",onClick:T,round:"",dense:"",flat:""},{default:o(()=>[n(_,null,{default:o(()=>[k("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C")]),_:1})]),_:1})):p("",!0),e.isUploading?(u(),c(v,{key:4,icon:"clear",onClick:e.abort,round:"",dense:"",flat:""},{default:o(()=>[n(_,null,{default:o(()=>[k("Abort Upload")]),_:1})]),_:2},1032,["onClick"])):p("",!0)])]),_:1},512),(i=r.value)!=null&&i.queuedFiles.length?(u(),c(Z,{key:0,dark:"",style:{width:"100%"}},{default:o(()=>[n(K,null,{default:o(()=>[n(G(ue),{class:"cropper",ref_key:"refCropper",ref:y,src:f.value,canvas:{width:1920,height:1080},"stencil-props":$.value,"default-size":P,"default-position":E,onChange:B},null,8,["src","stencil-props"])]),_:1}),n(M,{align:"between"},{default:o(()=>[n(Y,{modelValue:q.value,"onUpdate:modelValue":t[1]||(t[1]=e=>q.value=e),label:"\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",color:"red"},{default:o(()=>[n(_,{self:"top middle",class:"bg-red text-black text-body2",delay:300},{default:o(()=>[ye]),_:1})]),_:1},8,["modelValue"]),n(v,{label:"\u0413\u043E\u0442\u043E\u0432\u043E",color:"green",onClick:T})]),_:1})]),_:1})):p("",!0)],64)}}};var xe=me(be,[["__scopeId","data-v-94b909c2"]]),Fe=ae({name:"QInnerLoading",props:{...le,...te,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(a,{slots:g}){const S=re(),C=oe(a,S.proxy.$q),{transitionProps:h,transitionStyle:y}=ne(a),r=x(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(C.value===!0?" q-inner-loading--dark":"")),b=x(()=>"q-inner-loading__label"+(a.labelClass!==void 0?` ${a.labelClass}`:""));function w(){const m=[U(N,{size:a.size,color:a.color})];return a.label!==void 0&&m.push(U("div",{class:b.value,style:a.labelStyle},[a.label])),m}function f(){return a.showing===!0?U("div",{class:r.value,style:y.value},g.default!==void 0?g.default():w()):null}return()=>U(se,h.value,f)}});export{Fe as Q,xe as S};
