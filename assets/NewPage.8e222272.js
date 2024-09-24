import{Q as pt}from"./QVideo.567c98e3.js";import{u as et,i as j,r as Q,w as ct,a as ft,m as d,E as v,ax as p,f as a,x as n,n as g,q as i,bl as vt,B as H,t as S,l as _,z as ot,F as x,G as Y,y as nt,I as ht,p as F,o as ut,b6 as R,c4 as yt,v as z,cq as kt,ay as rt,ak as _t,al as gt,D as tt,c as it,A as wt}from"./index.71bc55bd.js";import{a as K,Q as N}from"./QItem.adc0c735.js";import{Q as M}from"./QItemLabel.622a6884.js";import{u as xt}from"./use-meta.0f1f008f.js";import{u as lt}from"./use-quasar.dd0d0041.js";import{a as $}from"./axios.a7f12f6b.js";import{Q as G}from"./QImg.0f12cfff.js";import{Q as bt}from"./QSelect.2923ce40.js";import{Q as Pt}from"./QTooltip.e861268c.js";import{Q as It}from"./QList.dc37ea0b.js";import{i as J,n as E,h as Vt,a as $t,g as Et}from"./myFuncts.c043710e.js";import{Q as Qt,S as Ut}from"./QInnerLoading.70073f55.js";import{a as Ct}from"./style.d5637314.js";import{_ as Z}from"./BtnDelete.a20f6780.js";import{m as St}from"./myAuth.5621b016.js";import{_ as at}from"./plugin-vue_export-helper.21dcd24c.js";import"./QToolbarTitle.28793e10.js";import"./QToolbar.e0367470.js";import"./QLinearProgress.f42d9a72.js";import{P as Nt}from"./PageShell.aafd3cf4.js";import"./QMenu.8d45d7c8.js";import"./position-engine.da3a8d11.js";import"./selection.60de79e9.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";/* empty css               */import"./use-file.6cd60ccb.js";import"./get-emits-object.a3f16783.js";import"./TouchPan.8802ca0b.js";import"./touch.9135741d.js";import"./QExpansionItem.ed48e551.js";import"./QScrollArea.447bc3ca.js";import"./MainFooter.9d16b95b.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.e1d9f02c.js";import"./AnderHeader.b5fd0884.js";/* empty css                                                    */const Ot={class:"uploaderArea"},At={class:"imagesArea"},Mt={class:"absolute delBthArea"},Bt={class:"row no-wrap"},Dt={__name:"PhotoUploader",setup(B){const s=String("https://api.sakh-orch.ru/"),b=lt(),l=et(),c=j("Entry"),k=j("isPhotosCompleted"),P=Q(null),U=j("unlinkPhoto");function O(){$.post(s+"api/news/photo.php",{params:{method:"unlinkAll",entryId:l.params.id}}).then(r=>{var u;if(!((u=r==null?void 0:r.data)!=null&&u.result))throw new Error;c.value.Photos=[]}).catch(r=>{b.notify(E(r))})}function I(){return{url:s+"api/news/photo.php",headers:[{name:"ACCESSTOKEN",value:St.self.AccessToken}],formFields:[{name:"entryId",value:c.value.id},{name:"method",value:"add"}]}}function D(r){console.log(r.xhr.response),T(),P.value.reset(),m.value=!0}function C(r){var h,V,L;console.log(r.xhr.response);let u=(L=(V=JSON.parse((h=r==null?void 0:r.xhr)==null?void 0:h.response))==null?void 0:V.error)!=null?L:"";b.notify(E(null,u))}function T(){$.post(s+"api/news/photo.php",{params:{method:"list",entryId:l.params.id}}).then(r=>{var u,h,V;if(!((u=r==null?void 0:r.data)!=null&&u.result))throw new Error;c.value.Photos=(V=(h=r==null?void 0:r.data)==null?void 0:h.data)!=null?V:[],k()&&(m.value=!1)}).catch(r=>{b.notify(E(r))}).finally(()=>{})}function f(r){const u=`
![](${r.md5}.${r.ext})
`;Vt(u,b)}const m=Q(!1);let y=null;return ct(m,r=>{r&&!y?y=setInterval(T,3e3):!r&&y&&(clearInterval(y),y=null)}),ft(()=>{y&&clearInterval(y)}),(r,u)=>(d(),v(x,null,[p("div",Ot,[a(Ct,{style:{width:"100%"},label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 (\u0434\u043E 20)",factory:I,"max-file-size":5e7,"max-files":20,ref_key:"uploader",ref:P,onUploaded:D,onFailed:C,multiple:"",batch:"",padding:"0",margin:"0",bordered:""},null,512)]),n(c).Photos&&n(c).Photos.length?(d(),g(nt,{key:0,bordered:"",flat:"",class:"transparent"},{default:i(()=>[a(vt,{align:"right"},{default:i(()=>[a(Z,{"throw-confirm":"",tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438",onOnOk:u[0]||(u[0]=h=>O()),title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438"}),_("",!0)]),_:1}),a(ot,null,{default:i(()=>[p("div",At,[(d(!0),v(x,null,Y(n(c).Photos,(h,V)=>(d(),g(nt,{key:V},{default:i(()=>[h.status==="completed"?(d(),g(G,{key:0,ratio:96/54,src:n(J)(n(s),h.md5,h.ext,260)},null,8,["src"])):(d(),g(K,{key:1},{default:i(()=>[a(N,null,{default:i(()=>[a(Qt,{showing:"",label:"\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430"})]),_:1})]),_:1})),a(ot,null,{default:i(()=>[p("div",Mt,[a(Z,{size:"0.7em","throw-confirm":"",onOnOk:L=>n(U)(h.id),title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u043E\u0442\u043E",tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u043E\u0442\u043E"},null,8,["onOnOk"])]),p("div",Bt,[a(H,{padding:"0.5em 1em",icon:"content_copy",label:"\u041A\u043E\u0434",onClick:L=>f(h)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))])]),_:1})]),_:1})):_("",!0)],64))}};var Tt=at(Dt,[["__scopeId","data-v-038c05a4"]]);const Lt={id:"descr",style:{padding:"1em",display:"flex","justify-content":"flex-start","flex-wrap":"wrap"}},qt={class:"nimg_block",style:{position:"relative"}},zt={style:{width:"calc(100% - 260px)",padding:"0 1em",margin:"1em auto 0","min-width":"300px"}},Ft={class:"inputArea"},Rt={class:"inputArea"},jt={class:"input"},Wt={id:"categs",class:"input"},Ht={style:{display:"flex","justify-content":"flex-end","grid-gap":"1em",padding:"1em"}},Kt={__name:"NewEditor",emits:["uploaded"],setup(B,{expose:s,emit:b}){const l=j("Entry"),c=String("https://api.sakh-orch.ru/"),k=lt(),P=et(),U=ht(),O=b,I=Q([]),D=Q([{id:1,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u042E\u0421\u0421\u041E",caption:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430",url:"/news/usco",ava:"/img/logo/logo_init.svg",icon:"",checked:!1},{id:2,name:"\u0417\u0432\u0435\u0437\u0434\u044B \u042D\u0432\u0442\u0435\u0440\u043F\u044B",caption:"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C",url:"/news/euterpe",ava:"/img/logo/logo_init.svg",icon:"",checked:!1},{id:3,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432",caption:"\u041F\u0440\u043E\u0447\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",url:"/news/other",ava:"",icon:"volunteer_activism",checked:!1}]),C=Q("");F("pwUrl",C);function T(){if(C.value)return C.value;let o=k.platform.is.mobile?1080:260;return l.value.sketch?J(c,l.value.sketch.md5,l.value.sketch.ext,o):"/img/news/default_sketch.svg"}function f(){$.post(c+"api/news/sketch.php",{params:{method:"unlink",id:P.params.id}}).then(o=>{var t;if(!((t=o==null?void 0:o.data)!=null&&t.result))throw new Error;O("uploaded")}).catch(o=>{k.notify(E(o))})}function m(o){$.post(c+"api/news/photo.php",{params:{method:"unlink",entryId:P.params.id,imgId:o}}).then(t=>{var A;if(!((A=t==null?void 0:t.data)!=null&&A.result))throw new Error;let e=l.value.Photos.findIndex(q=>q.id===o),w=l.value.Photos[e];y(w.md5),l.value.Photos.splice(e,1)}).catch(t=>{k.notify(E(t))})}F("unlinkPhoto",m);function y(o){const t=new RegExp(`!\\[]\\(${o}\\.[a-zA-Z0-9]+\\)`,"g"),e=l.value.markdown;l.value.markdown=l.value.markdown.replace(t,""),l.value.markdown!==e&&X()}function r(){const o=Object.keys(D.value);let t=[];return o.forEach(e=>{t[D.value[e].id]=D.value[e].checked}),t}function u(o=0){$.post(c+"api/news/entry.php",{params:{method:"update",entry:l.value,addNew:o,categs:r()}}).then(t=>{var e,w;k.notify($t((w=(e=t==null?void 0:t.data)==null?void 0:e.result)!=null?w:"")),O("uploaded")}).catch(t=>{k.notify(E(t))})}function h(){$.post(c+"api/news/entry.php",{params:{method:"del",entryId:l.value.id,force:!1}}).then(o=>{var t;if(!((t=o==null?void 0:o.data)!=null&&t.result))throw new Error;U.push({path:"/news/all"})}).catch(o=>{k.notify(E(o))})}function V(){$.post(c+"api/event/announce.php",{params:{method:"futureList",date:l.value.date}}).then(o=>{var t,e;if(!((t=o==null?void 0:o.data)!=null&&t.result))throw new Error;I.value=[],I.value=((e=o==null?void 0:o.data)==null?void 0:e.data)||[]}).catch(o=>{k.notify(E(o))})}function L(){$.post(c+"api/news/entry.php",{params:{method:l.value.isShow?"hide":"show",entryId:l.value.id}}).then(o=>{var t;if(!((t=o==null?void 0:o.data)!=null&&t.result))throw new Error;l.value.isShow=!l.value.isShow}).catch(o=>{k.notify(E(o))}).finally(()=>{})}function X(){$.post(c+"api/news/entry.php",{params:{method:"updateMarkdown",id:l.value.id,markdown:l.value.markdown}}).then(o=>{var t;if(!((t=o==null?void 0:o.data)!=null&&t.result))throw new Error;l.value.parsedMD=o==null?void 0:o.data.data}).catch(o=>{})}F("updateMarkdown",X);function st(){return!l.value.Photos||l.value.Photos.length===0?!1:l.value.Photos.every(o=>o.status==="completed")}F("isPhotosCompleted",st);function mt(){O("uploaded")}return s({unlinkPhoto:m}),ut(()=>{V()}),(o,t)=>(d(),v(x,null,[a(R,{label:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",type:"text",class:"inputArea",modelValue:n(l).title,"onUpdate:modelValue":t[0]||(t[0]=e=>n(l).title=e)},null,8,["modelValue"]),p("div",Lt,[t[16]||(t[16]=p("br",null,null,-1)),t[17]||(t[17]=p("br",null,null,-1)),t[18]||(t[18]=p("br",null,null,-1)),p("div",qt,[a(G,{ratio:16/9,src:T(),fit:"fill"},{error:i(()=>t[15]||(t[15]=[p("img",{src:"/img/news/default_sketch.svg",alt:"img"},null,-1)])),_:1},8,["src"]),C.value?_("",!0):(d(),g(H,{key:0,size:"0.7em",round:"",color:"red",icon:"delete",style:{transform:"translateY(-50%)",right:"1em","z-index":"100",position:"absolute",top:"2em"},onClick:t[1]||(t[1]=e=>f(n(l).img))}))]),p("div",zt,[a(Ut,{id:n(l).id,type:"news",onOnUploaded:mt},null,8,["id"])])]),p("div",Ft,[a(R,{label:"\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",style:{width:"100%"},type:"textarea",autogrow:"",modelValue:n(l).descr,"onUpdate:modelValue":t[2]||(t[2]=e=>n(l).descr=e),outlined:""},null,8,["modelValue"])]),p("div",Rt,[p("div",jt,[a(R,{type:"date",modelValue:n(l).date,"onUpdate:modelValue":t[3]||(t[3]=e=>n(l).date=e),label:"\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",onChange:t[4]||(t[4]=e=>V())},null,8,["modelValue"]),a(bt,{modelValue:n(l).announceId,"onUpdate:modelValue":t[5]||(t[5]=e=>n(l).announceId=e),options:I.value,clearable:"","emit-value":"","map-options":"","option-value":"id","option-label":"progName",label:"\u041F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430 \u0430\u043D\u043E\u043D\u0441","stack-label":""},yt({_:2},[I.value.length?{name:"selected-item",fn:i(e=>[e.opt?(d(),g(K,{key:0},{default:i(()=>[a(N,{avatar:""},{default:i(()=>{var w,A,q,W;return[a(G,{width:"100px",src:n(J)(n(c),(A=(w=e.opt)==null?void 0:w.sketch)==null?void 0:A.md5,(W=(q=e.opt)==null?void 0:q.sketch)==null?void 0:W.ext,100),ratio:16/9,fit:"fill"},null,8,["src"])]}),_:2},1024),a(N,null,{default:i(()=>[a(M,null,{default:i(()=>[S(z(e.opt.progName),1)]),_:2},1024),a(M,{caption:""},{default:i(()=>[S(z(e.opt.eventTime),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)):_("",!0)]),key:"0"}:void 0,I.value.length?{name:"option",fn:i(e=>[e.opt.isShow?(d(),g(K,kt({key:0},e.itemProps,{dense:"",class:"optionItem"}),{default:i(()=>[a(N,{avatar:""},{default:i(()=>{var w,A,q,W;return[a(G,{width:"100px",src:n(J)(n(c),(A=(w=e.opt)==null?void 0:w.sketch)==null?void 0:A.md5,(W=(q=e.opt)==null?void 0:q.sketch)==null?void 0:W.ext,100),ratio:16/9,fit:"fill"},null,8,["src"])]}),_:2},1024),a(N,null,{default:i(()=>[a(M,null,{default:i(()=>[S(z(e.opt.progName),1)]),_:2},1024),a(M,{caption:""},{default:i(()=>[S(z(e.opt.eventTime),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)):_("",!0)]),key:"1"}:void 0]),1032,["modelValue","options"]),n(l).announceId?_("",!0):(d(),v(x,{key:0},[a(R,{modelValue:n(l).refName,"onUpdate:modelValue":t[6]||(t[6]=e=>n(l).refName=e),label:"\u0422\u0435\u043A\u0441\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A",type:"text"},null,8,["modelValue"]),a(R,{modelValue:n(l).refLink,"onUpdate:modelValue":t[8]||(t[8]=e=>n(l).refLink=e),label:"\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A",type:"text",placeholder:"https://example.com"},{append:i(()=>[a(rt,{modelValue:n(l).isExternal,"onUpdate:modelValue":t[7]||(t[7]=e=>n(l).isExternal=e),color:"green"},{default:i(()=>[a(Pt,null,{default:i(()=>t[19]||(t[19]=[S("\u041F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u0432 \u043B\u0435\u043D\u0442\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A")])),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64))]),p("div",Wt,[a(It,{bordered:"",padding:""},{default:i(()=>[a(M,{header:""},{default:i(()=>t[20]||(t[20]=[S("\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u0445")])),_:1}),(d(!0),v(x,null,Y(n(l).categs,e=>_t((d(),g(K,{key:e.id,tag:"label"},{default:i(()=>[a(N,null,{default:i(()=>[a(M,null,{default:i(()=>[S(z(e.label),1)]),_:2},1024),a(M,{caption:""},{default:i(()=>[S(z(e.caption),1)]),_:2},1024)]),_:2},1024),a(N,{side:"",top:""},{default:i(()=>[a(rt,{color:"green",modelValue:e.checked,"onUpdate:modelValue":w=>e.checked=w,val:"friend"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)),[[gt]])),128))]),_:1})])]),n(l).announceId?_("",!0):(d(),v(x,{key:0},[a(Tt),a(tt,{spaced:"2em"}),a(R,{label:"\u0422\u0435\u043A\u0441\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",type:"textarea",autogrow:"",outlined:"","input-style":"{padding: 5em}",padding:"1em",modelValue:n(l).markdown,"onUpdate:modelValue":[t[9]||(t[9]=e=>n(l).markdown=e),t[10]||(t[10]=e=>X())],debounce:300,dense:""},null,8,["modelValue"])],64)),p("div",Ht,[a(Z,{label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u044C",danger:"",onOnOk:t[11]||(t[11]=e=>h()),"throw-confirm":""}),n(l).isShow?(d(),g(H,{key:0,label:"\u0421\u043A\u0440\u044B\u0442\u044C",color:"orange",outline:"",onClick:t[12]||(t[12]=e=>L())})):(d(),g(H,{key:1,label:"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",color:"green",outline:"",onClick:t[13]||(t[13]=e=>L())})),a(H,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",color:"green",onClick:t[14]||(t[14]=e=>u(0))})]),t[21]||(t[21]=p("br",null,null,-1)),t[22]||(t[22]=p("br",null,null,-1)),t[23]||(t[23]=p("br",null,null,-1)),t[24]||(t[24]=p("br",null,null,-1)),t[25]||(t[25]=p("br",null,null,-1)),t[26]||(t[26]=p("br",null,null,-1))],64))}};var Gt=at(Kt,[["__scopeId","data-v-2487f9b1"]]);const Jt={class:"newsImg"},Yt={key:0,class:"btnArea"},Zt={__name:"EntryPhoto",props:{id:{type:Number,required:!0},md5:{type:String,required:!0},ext:{type:String,required:!0},size:{type:Number,required:!1,default:1080}},emits:["onDel"],setup(B,{emit:s}){const b=String("https://api.sakh-orch.ru/"),l=j("editMode"),c=s;return(k,P)=>(d(),v("div",Jt,[n(l)?(d(),v("div",Yt,[a(Z,{tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u043E\u0442\u043E","throw-confirm":"",onOnOk:P[0]||(P[0]=U=>c("onDel",B.id))})])):_("",!0),a(G,{src:n(J)(n(b),B.md5,B.ext,B.size),fit:"fill"},null,8,["src"])]))}};var dt=at(Zt,[["__scopeId","data-v-a666a9ca"]]);const Xt={key:0,class:"contentArea"},te={key:1,class:"contentArea"},ee={key:0,class:"textBlock"},le=["innerHTML"],ae={key:1},oe={key:2,class:"videoItem"},ne={key:2,class:"content"},Fe={__name:"NewPage",setup(B){Q(0);const s=Q(null);F("Entry",s);const b=lt(),l=String("https://api.sakh-orch.ru/"),c=et(),k=j("entryEditMode");F("editMode",k);const P=Q(!1),U=Q(!0);F("progress",U);const O=Q();xt(()=>{var f,m;return Et((m=(f=s==null?void 0:s.value)==null?void 0:f.title)!=null?m:"\u041D\u043E\u0432\u043E\u0441\u0442\u044C")});function I(){U.value=!0,$.post(l+"api/news/entry.php",{params:{method:"get",id:c.params.id}}).then(f=>{var m,y,r;if(!((m=f==null?void 0:f.data)!=null&&m.result))throw new Error;s.value=(r=(y=f==null?void 0:f.data)==null?void 0:y.data)!=null?r:null}).catch(f=>{P.value=!0,b.notify(E(f))}).finally(()=>{U.value=!1})}const D=it(()=>s.value.parsedMD.filter(m=>m.type==="img").map(m=>s.value.Photos.find(y=>y.id===m.fileId)).filter(Boolean)),C=it(()=>{const f=D.value.map(m=>m.id);return s.value.Photos.filter(m=>!f.includes(m.id))});function T(f){k.value&&O.value.unlinkPhoto(f)}return ut(()=>{I()}),(f,m)=>{var y,r;return d(),g(Nt,{"page-title":(r=(y=s.value)==null?void 0:y.title)!=null?r:"\u041D\u043E\u0432\u043E\u0441\u0442\u044C","no-stick-title":""},{PageContent:i(()=>[n(k)&&s.value?(d(),v("div",Xt,[n(k)&&s.value?(d(),g(Gt,{key:0,onUploaded:m[0]||(m[0]=u=>I()),ref_key:"editorRef",ref:O},null,512)):_("",!0)])):_("",!0),s.value?(d(),v("div",te,[(d(!0),v(x,null,Y(s.value.parsedMD,(u,h)=>(d(),v(x,{key:h},[u.type==="text"?(d(),v("div",ee,[u.content!==`
`?(d(),v("section",{key:0,innerHTML:u.content},null,8,le)):(d(),v("br",ae))])):_("",!0),u.type==="img"?(d(),g(dt,{key:1,id:u.fileId,md5:u.md5,ext:u.ext,onOnDel:T},null,8,["id","md5","ext"])):_("",!0),u.type==="video"?(d(),v("div",oe,[a(pt,{ratio:16/9,src:"https://www.youtube.com/embed/"+u.content},null,8,["src"])])):_("",!0)],64))),128)),s.value.refLink?(d(),v(x,{key:0},[a(tt,{spaced:"1em"}),a(K,{clickable:"",href:s.value.refLink},{default:i(()=>[a(N,{avatar:""},{default:i(()=>[a(wt,{name:"link"})]),_:1}),a(N,null,{default:i(()=>[a(M,null,{default:i(()=>[S("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: "+z(s.value.refName),1)]),_:1})]),_:1})]),_:1},8,["href"])],64)):_("",!0),C.value.length?(d(),v(x,{key:1},[a(tt,{spaced:"2em"}),(d(!0),v(x,null,Y(C.value,(u,h)=>(d(),g(dt,{key:h,id:u.id,ext:u.ext,md5:u.md5,onOnDel:T},null,8,["id","ext","md5"]))),128))],64)):_("",!0)])):U.value?_("",!0):(d(),v("div",ne,m[1]||(m[1]=[p("div",{class:"newsarea"},[p("div",{class:"narea"},[p("div",{class:"text"}," \u041D\u043E\u0432\u043E\u0441\u0442\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 ")])],-1)])))]),_:1},8,["page-title"])}}};export{Fe as default};
