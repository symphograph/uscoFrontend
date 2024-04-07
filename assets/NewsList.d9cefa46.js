import{i as N,q as l,v as Q,H as s,f as n,W as p,r as b,t as _,I as k,aa as x,l as I,V as S,ay as $,u as U,m as H,w as T,o as j,F as O,ax as F,X as R}from"./index.02309961.js";import{u as M}from"./use-quasar.00acd95b.js";import{api as L}from"./axios.5d836ad1.js";import{a as B,Q as K}from"./QItem.ff5a2c80.js";import{Q as q}from"./QItemLabel.e490e797.js";import{Q as C}from"./QTooltip.034d1644.js";import{i as W,n as V,a as X,f as A}from"./myFuncts.c6611827.js";import{Q as z}from"./QImg.9937fe90.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const G={__name:"SketchImg",props:{md5:{type:String,required:!0},ext:{type:String,required:!0},size:{type:Number,required:!1,default:0}},setup(o){const y=String("https://api.sakh-orch.ru/");return M(),N("editMode"),(v,c)=>(l(),Q(z,{src:p(W)(p(y),o.md5,o.ext,o.size),ratio:1920/1080,fit:"fill","placeholder-src":"/img/news/default_sketch.svg"},{error:s(()=>[n(z,{src:"/img/news/default_sketch.svg"})]),_:1},8,["src"]))}};const J={class:"narea"},P={class:"nimg_block"},Y={class:"tcol"},Z={class:"mainText"},tt={key:0,style:{display:"flex","justify-content":"right","grid-gap":"1em"}},et={__name:"NewItem",props:{item:b(null)},emits:["hideOrShow","delEntry"],setup(o,{emit:y}){const v=String("https://api.sakh-orch.ru/"),c=M(),g=N("editMode"),w=y,i=o,d=b(i.item.isShow);function u(){var a,t;return(a=i.item)!=null&&a.announceId?{to:"/announce/"+i.item.announceId,href:void 0}:(t=i.item)!=null&&t.isExternal?{to:void 0,href:i.item.refLink}:{to:"/new/"+i.item.id,href:void 0}}function m(){L.post(v+"api/news/entry.php",{params:{method:d.value?"hide":"show",entryId:i.item.id}}).then(a=>{var t;if(!((t=a==null?void 0:a.data)!=null&&t.result))throw new Error;d.value=!d.value,w("hideOrShow",i.item.id)}).catch(a=>{c.notify(V(a))}).finally(()=>{})}function E(){L.post(v+"api/news/entry.php",{params:{method:"del",entryId:i.item.id}}).then(a=>{var t,e,r;if(!((t=a==null?void 0:a.data)!=null&&t.result))throw new Error;c.notify(X((r=(e=a==null?void 0:a.data)==null?void 0:e.result)!=null?r:"")),w("delEntry",i.item.id)}).catch(a=>{c.notify(V(a))})}return(a,t)=>(l(),_("div",J,[k("div",P,[k("div",null,[n(B,{href:u().href,to:u().to,dense:"",class:"no-padding",target:"_blank"},{default:s(()=>{var e,r,f,h;return[n(G,{ext:((r=(e=o.item)==null?void 0:e.sketch)==null?void 0:r.ext)||"",md5:((h=(f=o.item)==null?void 0:f.sketch)==null?void 0:h.md5)||"",size:a.$q.platform.is.desktop?260:1080},null,8,["ext","md5","size"])]}),_:1},8,["href","to"])])]),k("div",Y,[n(B,{clickable:"",href:u().href,to:u().to,target:"_blank"},{default:s(()=>[n(K,null,{default:s(()=>[n(q,{class:"ItemHeader text-h6"},{default:s(()=>[S($(o.item.title),1)]),_:1}),n(q,null,{default:s(()=>[k("span",Z,$(o.item.descr),1)]),_:1}),n(q,{caption:""},{default:s(()=>[S($(p(A)(o.item.date)),1)]),_:1})]),_:1})]),_:1},8,["href","to"])]),p(g)?(l(),_("div",tt,[n(x,{color:"red",icon:"delete",outline:"",onClick:t[0]||(t[0]=e=>E())},{default:s(()=>[n(C,{anchor:"top middle"},{default:s(()=>[S("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")]),_:1})]),_:1}),d.value?(l(),Q(x,{key:0,label:"\u0421\u043A\u0440\u044B\u0442\u044C",color:"orange",outline:"",onClick:t[1]||(t[1]=e=>m())})):(l(),Q(x,{key:1,label:"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",color:"green",outline:"",onClick:t[2]||(t[2]=e=>m())})),n(x,{icon:"edit",outline:"",to:"/new/"+o.item.id},{default:s(()=>[n(C,{anchor:"top middle"},{default:s(()=>[S("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")]),_:1})]),_:1},8,["to"])])):I("",!0)]))}};var at=D(et,[["__scopeId","data-v-5e73a4f7"]]);const it={class:"newscol"},rt={key:1,class:"noEntyes"},ot={__name:"NewsList",props:{category:String,year:Number,limit:Number},setup(o,{expose:y}){const v=String("https://api.sakh-orch.ru/"),c=U();H(),M();const g=N("progress"),w=N("editMode"),i=b([]),d=o,u=b(d.category);T(c,t=>{u.value=t.params.category,m()});function m(){!u.value||(g.value=!0,L.post(v+"api/news/entry.php",{params:{method:d.limit===100?"list":"toplist",category:u.value,year:d.year,limit:d.limit}}).then(t=>{var e,r;i.value=(r=(e=t==null?void 0:t.data)==null?void 0:e.data)!=null?r:[]}).catch(t=>{i.value=[]}).finally(()=>{g.value=!1}))}function E(t){const e=i.value.find(r=>r.id===t);e.isShow=!e.isShow}function a(t){const e=i.value.findIndex(r=>r.id===t);e!==-1&&i.value.splice(e,1)}return y({loadData:m}),j(()=>{m()}),(t,e)=>{var r;return l(),_("div",it,[(r=i.value)!=null&&r.length?(l(!0),_(O,{key:0},F(i.value,f=>(l(),_(O,{key:f.id},[f.isShow||p(w)?(l(),Q(at,{key:0,item:f,onHideOrShow:e[0]||(e[0]=h=>{E(h)}),onDelEntry:e[1]||(e[1]=h=>{a(h)})},null,8,["item"])):I("",!0),n(R)],64))),128)):I("",!0),!i.value&&!p(g)?(l(),_("h5",rt," \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. ")):I("",!0)])}}};var _t=D(ot,[["__scopeId","data-v-0bd12c21"]]);export{_t as N};
