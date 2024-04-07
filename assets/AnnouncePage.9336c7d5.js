import{u as ft}from"./use-meta.584d2918.js";import{u as He}from"./use-quasar.00acd95b.js";import{api as ke}from"./axios.5d836ad1.js";import{L as pt,aq as ht,ba as _t,as as kt,bi as gt,r as H,c as w,w as Ae,aK as yt,Z as bt,h as _,g as wt,bj as xt,a3 as Vt,aJ as Mt,aE as Dt,ad as Ue,aa as se,i as R,q as h,t as q,f as a,H as s,W as o,bh as le,U as ie,I as y,u as je,m as qt,p as ze,o as We,a as Ct,v as N,l as I,X as ge,bk as Ie,F as J,J as Je,K as Re,aZ as ee,V as L,ay as he,ax as St,aY as At}from"./index.02309961.js";import{Q as Ke}from"./QSelect.1707e23b.js";import{Q as Ut}from"./style.3dcf4cc2.js";import{u as It,a as Ht,b as Tt,_ as _e,g as $t,f as Qt,Q as Le,c as Ot}from"./QPopupProxy.74ed7d54.js";import{T as Pt}from"./TouchPan.64cc91f0.js";import{p as te}from"./format.3e32b8d9.js";import{C as Be}from"./ClosePopup.1164b6c2.js";import{n as ye,a as Ye,i as Nt,b as Kt,g as Lt}from"./myFuncts.c6611827.js";import{A as Bt}from"./AnnounceCard.85473869.js";import{S as Yt,Q as Et}from"./QInnerLoading.567f4e03.js";import{m as Ft}from"./myAuth.f2132660.js";import{_ as Te}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as Ee}from"./QImg.9937fe90.js";import{Q as B,a as ue}from"./QItem.ff5a2c80.js";import{Q as Y}from"./QItemLabel.e490e797.js";import{Q as jt}from"./QVideo.cf50623d.js";import{_ as Fe}from"./PhoneNumber.9044a974.js";import{_ as zt}from"./BtnDelete.511e2059.js";import"./QToolbarTitle.663f00ae.js";import"./QToolbar.ea283e26.js";import"./QLinearProgress.1af3bfde.js";import"./rtl.0de82127.js";import"./position-engine.3c52504d.js";import"./use-file.ed62cdad.js";import"./get-emits-object.24798346.js";import"./use-render-cache.1a7235d4.js";import"./touch.3df10340.js";import"./QTooltip.034d1644.js";import"./use-ratio.eadae7df.js";function Wt(l,O){if(l.hour!==null){if(l.minute===null)return"minute";if(O===!0&&l.second===null)return"second"}return"hour"}function Jt(){const l=new Date;return{hour:l.getHours(),minute:l.getMinutes(),second:l.getSeconds(),millisecond:l.getMilliseconds()}}var Rt=pt({name:"QTime",props:{...ht,..._t,...It,mask:{default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:l=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(l)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:Ht,setup(l,{slots:O,emit:M}){const U=wt(),{$q:D}=U.proxy,r=kt(l,D),{tabindex:b,headerClass:i,getLocale:P,getCurrentDate:k}=Tt(l,D),V=gt(l),C=xt(V);let E,X;const ae=H(null),F=w(()=>Ge()),Z=w(()=>P()),re=w(()=>et()),G=_e(l.modelValue,F.value,Z.value,l.calendar,re.value),v=H(Wt(G)),n=H(G),x=H(G.hour===null||G.hour<12),be=w(()=>`q-time q-time--${l.landscape===!0?"landscape":"portrait"}`+(r.value===!0?" q-time--dark q-dark":"")+(l.disable===!0?" disabled":l.readonly===!0?" q-time--readonly":"")+(l.bordered===!0?" q-time--bordered":"")+(l.square===!0?" q-time--square no-border-radius":"")+(l.flat===!0?" q-time--flat no-shadow":"")),ne=w(()=>{const e=n.value;return{hour:e.hour===null?"--":S.value===!0?te(e.hour):String(x.value===!0?e.hour===0?12:e.hour:e.hour>12?e.hour-12:e.hour),minute:e.minute===null?"--":te(e.minute),second:e.second===null?"--":te(e.second)}}),S=w(()=>l.format24h!==null?l.format24h:D.lang.date.format24h),we=w(()=>{const e=v.value==="hour",t=e===!0?12:60,u=n.value[v.value];let g=`rotate(${Math.round(u*(360/t))-180}deg) translateX(-50%)`;return e===!0&&S.value===!0&&n.value.hour>=12&&(g+=" scale(.7)"),{transform:g}}),de=w(()=>n.value.hour!==null),xe=w(()=>de.value===!0&&n.value.minute!==null),j=w(()=>l.hourOptions!==void 0?e=>l.hourOptions.includes(e):l.options!==void 0?e=>l.options(e,null,null):null),f=w(()=>l.minuteOptions!==void 0?e=>l.minuteOptions.includes(e):l.options!==void 0?e=>l.options(n.value.hour,e,null):null),d=w(()=>l.secondOptions!==void 0?e=>l.secondOptions.includes(e):l.options!==void 0?e=>l.options(n.value.hour,n.value.minute,e):null),c=w(()=>{if(j.value===null)return null;const e=ce(0,11,j.value),t=ce(12,11,j.value);return{am:e,pm:t,values:e.values.concat(t.values)}}),T=w(()=>f.value!==null?ce(0,59,f.value):null),$=w(()=>d.value!==null?ce(0,59,d.value):null),z=w(()=>{switch(v.value){case"hour":return c.value;case"minute":return T.value;case"second":return $.value}}),Xe=w(()=>{let e,t,u=0,p=1;const g=z.value!==null?z.value.values:void 0;v.value==="hour"?S.value===!0?(e=0,t=23):(e=0,t=11,x.value===!1&&(u=12)):(e=0,t=55,p=5);const Q=[];for(let m=e,A=e;m<=t;m+=p,A++){const W=m+u,vt=g!==void 0&&g.includes(W)===!1,mt=v.value==="hour"&&m===0?S.value===!0?"00":"12":m;Q.push({val:W,index:A,disable:vt,label:mt})}return Q}),Ze=w(()=>[[Pt,tt,void 0,{stop:!0,prevent:!0,mouse:!0}]]);Ae(()=>l.modelValue,e=>{const t=_e(e,F.value,Z.value,l.calendar,re.value);(t.dateHash!==n.value.dateHash||t.timeHash!==n.value.timeHash)&&(n.value=t,t.hour===null?v.value="hour":x.value=t.hour<12)}),Ae([F,Z],()=>{Vt(()=>{Se()})});function $e(){const e={...k(),...Jt()};Se(e),Object.assign(n.value,e),v.value="hour"}function ce(e,t,u){const p=Array.apply(null,{length:t+1}).map((g,Q)=>{const m=Q+e;return{index:m,val:u(m)===!0}}).filter(g=>g.val===!0).map(g=>g.index);return{min:p[0],max:p[p.length-1],values:p,threshold:t+1}}function Qe(e,t,u){const p=Math.abs(e-t);return Math.min(p,u-p)}function Ve(e,{min:t,max:u,values:p,threshold:g}){if(e===t)return t;if(e<t||e>u)return Qe(e,t,g)<=Qe(e,u,g)?t:u;const Q=p.findIndex(W=>e<=W),m=p[Q-1],A=p[Q];return e-m<=A-e?m:A}function Ge(){return l.calendar!=="persian"&&l.mask!==null?l.mask:`HH:mm${l.withSeconds===!0?":ss":""}`}function et(){if(typeof l.defaultDate!="string"){const e=k(!0);return e.dateHash=$t(e),e}return _e(l.defaultDate,"YYYY/MM/DD",void 0,l.calendar)}function Me(){return Mt(U)===!0||z.value!==null&&(z.value.values.length===0||v.value==="hour"&&S.value!==!0&&c.value[x.value===!0?"am":"pm"].values.length===0)}function De(){const e=ae.value,{top:t,left:u,width:p}=e.getBoundingClientRect(),g=p/2;return{top:t+g,left:u+g,dist:g*.7}}function tt(e){if(Me()!==!0){if(e.isFirst===!0){E=De(),X=ve(e.evt,E);return}X=ve(e.evt,E,X),e.isFinal===!0&&(E=!1,X=null,Oe())}}function Oe(){v.value==="hour"?v.value="minute":l.withSeconds&&v.value==="minute"&&(v.value="second")}function ve(e,t,u){const p=yt(e),g=Math.abs(p.top-t.top),Q=Math.sqrt(Math.pow(Math.abs(p.top-t.top),2)+Math.pow(Math.abs(p.left-t.left),2));let m,A=Math.asin(g/Q)*(180/Math.PI);if(p.top<t.top?A=t.left<p.left?90-A:270+A:A=t.left<p.left?A+90:270-A,v.value==="hour"){if(m=A/30,c.value!==null){const W=S.value!==!0?x.value===!0:c.value.am.values.length!==0&&c.value.pm.values.length!==0?Q>=t.dist:c.value.am.values.length!==0;m=Ve(m+(W===!0?0:12),c.value[W===!0?"am":"pm"])}else m=Math.round(m),S.value===!0?Q<t.dist?m<12&&(m+=12):m===12&&(m=0):x.value===!0&&m===12?m=0:x.value===!1&&m!==12&&(m+=12);S.value===!0&&(x.value=m<12)}else m=Math.round(A/6)%60,v.value==="minute"&&T.value!==null?m=Ve(m,T.value):v.value==="second"&&$.value!==null&&(m=Ve(m,$.value));return u!==m&&rt[v.value](m),m}const qe={hour(){v.value="hour"},minute(){v.value="minute"},second(){v.value="second"}};function lt(e){e.keyCode===13&&Pe()}function at(e){e.keyCode===13&&Ne()}function nt(e){Me()!==!0&&(D.platform.is.desktop!==!0&&ve(e,De()),Oe())}function ot(e){Me()!==!0&&ve(e,De())}function ut(e){if(e.keyCode===13)v.value="hour";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(c.value!==null){const u=S.value===!0?c.value.values:c.value[x.value===!0?"am":"pm"].values;if(u.length===0)return;if(n.value.hour===null)me(u[0]);else{const p=(u.length+u.indexOf(n.value.hour)+t)%u.length;me(u[p])}}else{const u=S.value===!0?24:12,p=S.value!==!0&&x.value===!1?12:0,g=n.value.hour===null?-t:n.value.hour;me(p+(24+g+t)%u)}}}function it(e){if(e.keyCode===13)v.value="minute";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if(T.value!==null){const u=T.value.values;if(u.length===0)return;if(n.value.minute===null)fe(u[0]);else{const p=(u.length+u.indexOf(n.value.minute)+t)%u.length;fe(u[p])}}else{const u=n.value.minute===null?-t:n.value.minute;fe((60+u+t)%60)}}}function st(e){if(e.keyCode===13)v.value="second";else if([37,39].includes(e.keyCode)){const t=e.keyCode===37?-1:1;if($.value!==null){const u=$.value.values;if(u.length===0)return;if(n.value.seconds===null)pe(u[0]);else{const p=(u.length+u.indexOf(n.value.second)+t)%u.length;pe(u[p])}}else{const u=n.value.second===null?-t:n.value.second;pe((60+u+t)%60)}}}function me(e){n.value.hour!==e&&(n.value.hour=e,oe())}function fe(e){n.value.minute!==e&&(n.value.minute=e,oe())}function pe(e){n.value.second!==e&&(n.value.second=e,oe())}const rt={hour:me,minute:fe,second:pe};function Pe(){x.value===!1&&(x.value=!0,n.value.hour!==null&&(n.value.hour-=12,oe()))}function Ne(){x.value===!0&&(x.value=!1,n.value.hour!==null&&(n.value.hour+=12,oe()))}function Ce(e){const t=l.modelValue;v.value!==e&&t!==void 0&&t!==null&&t!==""&&typeof t!="string"&&(v.value=e)}function oe(){if(j.value!==null&&j.value(n.value.hour)!==!0){n.value=_e(),Ce("hour");return}if(f.value!==null&&f.value(n.value.minute)!==!0){n.value.minute=null,n.value.second=null,Ce("minute");return}if(l.withSeconds===!0&&d.value!==null&&d.value(n.value.second)!==!0){n.value.second=null,Ce("second");return}n.value.hour===null||n.value.minute===null||l.withSeconds===!0&&n.value.second===null||Se()}function Se(e){const t=Object.assign({...n.value},e),u=l.calendar==="persian"?te(t.hour)+":"+te(t.minute)+(l.withSeconds===!0?":"+te(t.second):""):Qt(new Date(t.year,t.month===null?null:t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),F.value,Z.value,t.year,t.timezoneOffset);t.changed=u!==l.modelValue,M("update:modelValue",u,t)}function dt(){const e=[_("div",{class:"q-time__link "+(v.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:b.value,onClick:qe.hour,onKeyup:ut},ne.value.hour),_("div",":"),_("div",de.value===!0?{class:"q-time__link "+(v.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:b.value,onKeyup:it,onClick:qe.minute}:{class:"q-time__link"},ne.value.minute)];l.withSeconds===!0&&e.push(_("div",":"),_("div",xe.value===!0?{class:"q-time__link "+(v.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:b.value,onKeyup:st,onClick:qe.second}:{class:"q-time__link"},ne.value.second));const t=[_("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},e)];return S.value===!1&&t.push(_("div",{class:"q-time__header-ampm column items-between no-wrap"},[_("div",{class:"q-time__link "+(x.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:b.value,onClick:Pe,onKeyup:lt},"AM"),_("div",{class:"q-time__link "+(x.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:b.value,onClick:Ne,onKeyup:at},"PM")])),_("div",{class:"q-time__header flex flex-center no-wrap "+i.value},t)}function ct(){const e=n.value[v.value];return _("div",{class:"q-time__content col relative-position"},[_(Dt,{name:"q-transition--scale"},()=>_("div",{key:"clock"+v.value,class:"q-time__container-parent absolute-full"},[_("div",{ref:ae,class:"q-time__container-child fit overflow-hidden"},[Ue(_("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:nt,onMousedown:ot},[_("div",{class:"q-time__clock-circle fit"},[_("div",{class:"q-time__clock-pointer"+(n.value[v.value]===null?" hidden":l.color!==void 0?` text-${l.color}`:""),style:we.value}),Xe.value.map(t=>_("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${t.index}`+(t.val===e?" q-time__clock-position--active "+i.value:t.disable===!0?" q-time__clock-position--disable":"")},[_("span",t.label)]))])]),Ze.value)])])),l.nowBtn===!0?_(se,{class:"q-time__now-button absolute",icon:D.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:l.color,textColor:l.textColor,tabindex:b.value,onClick:$e}):null])}return U.proxy.setNow=$e,()=>{const e=[ct()],t=bt(O.default);return t!==void 0&&e.push(_("div",{class:"q-time__actions"},t)),l.name!==void 0&&l.disable!==!0&&C(e,"push"),_("div",{class:be.value,tabindex:-1},[dt(),_("div",{class:"q-time__main col overflow-auto"},e)])}}});const Xt={class:"q-pa-md",style:{"max-width":"300px",padding:"0"}},Zt={class:"row items-center justify-end"},Gt={class:"row items-center justify-end"},el={__name:"DateTime",props:{evDateTime:H("2019-02-01 12:44")},emits:["update:date"],setup(l,{emit:O}){const M=R("Announce");return H(l.evDateTime),(D,r)=>(h(),q("div",Xt,[a(le,{filled:"",modelValue:o(M).eventTime,"onUpdate:modelValue":r[2]||(r[2]=b=>o(M).eventTime=b),mask:"####-##-## ##:##"},{prepend:s(()=>[a(ie,{name:"event",class:"cursor-pointer"},{default:s(()=>[a(Le,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[a(Ot,{modelValue:o(M).eventTime,"onUpdate:modelValue":r[0]||(r[0]=b=>o(M).eventTime=b),mask:"YYYY-MM-DD HH:mm"},{default:s(()=>[y("div",Zt,[Ue(a(se,{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",color:"primary",flat:""},null,512),[[Be]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),append:s(()=>[a(ie,{name:"access_time",class:"cursor-pointer"},{default:s(()=>[a(Le,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[a(Rt,{modelValue:o(M).eventTime,"onUpdate:modelValue":r[1]||(r[1]=b=>o(M).eventTime=b),mask:"YYYY-MM-DD HH:mm",format24h:""},{default:s(()=>[y("div",Gt,[Ue(a(se,{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",color:"primary",flat:""},null,512),[[Be]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};const K=l=>(Je("data-v-43de3166"),l=l(),Re(),l),tl={key:0,class:"eventsarea"},ll={class:"editArea"},al={class:"card"},nl={class:"editor"},ol={style:{display:"flex","justify-content":"space-between"}},ul=K(()=>y("br",null,null,-1)),il=K(()=>y("hr",null,null,-1)),sl={class:"uploads"},rl={style:{width:"100%"}},dl=K(()=>y("br",null,null,-1)),cl=K(()=>y("br",null,null,-1)),vl=K(()=>y("br",null,null,-1)),ml=K(()=>y("br",null,null,-1)),fl={class:"uploads"},pl=K(()=>y("br",null,null,-1)),hl=K(()=>y("hr",null,null,-1)),_l=K(()=>y("br",null,null,-1)),kl={__name:"AnnounceEditor",emits:["reload","posterUploaded"],setup(l,{expose:O,emit:M}){const U=String("https://api.sakh-orch.ru/"),D=He(),r=je(),b=qt();R("editMode");const i=R("Announce"),P=R("Halls"),k=H("");ze("pwUrl",k);const V=M,C={};function E(){}const X=[{label:"\u0412\u0445\u043E\u0434 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439",value:2},{label:"\u0411\u0438\u043B\u0435\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435",value:3},{label:"\u0412\u0445\u043E\u0434 \u043F\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C",value:4},{label:"\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",value:5}],ae=H(null),F=H(null);function Z(f){return{url:U+"api/event/poster.php",headers:[{name:"ACCESSTOKEN",value:Ft.self.AccessToken}],formFields:[{name:"id",value:i.value.id},{name:"method",value:"add"}]}}function re(f){D.notify(Ye("\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E")),V("posterUploaded")}function G(f){D.notify(Ye("\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E")),V("posterUploaded"),ae.value.reset(),v.value=!0}const v=H(!1);let n=null;Ae(v,f=>{console.log("photoWatcher"),f&&!n?n=setInterval(j,3e3):!f&&n&&(clearInterval(n),n=null)});function x(f){var c,T,$;let d=($=(T=JSON.parse((c=f==null?void 0:f.xhr)==null?void 0:c.response))==null?void 0:T.error)!=null?$:"";D.notify(ye(null,d))}function be(){F.value.saveData()}function ne(){b.push({path:"/announces"})}function S(){V("reload")}function we(){delete i.value.sketch,delete i.value.sketchId}function de(){i.value.hallId=i.value.Hall.id}function xe(){ke.post(U+"api/event/announce.php",{params:{method:"updateMarkdown",id:i.value.id,markdown:i.value.description}}).then(f=>{var d;if(!((d=f==null?void 0:f.data)!=null&&d.result))throw new Error;i.value.parsedMD=f==null?void 0:f.data.data}).catch(f=>{})}function j(){ke.post(U+"api/event/poster.php",{params:{method:"get",announceId:r.params.evid}}).then(f=>{var d,c,T,$,z;if(!((d=f==null?void 0:f.data)!=null&&d.result))throw new Error;i.value.poster=(T=(c=f==null?void 0:f.data)==null?void 0:c.data)!=null?T:null,((z=($=i.value)==null?void 0:$.poster)==null?void 0:z.status)!=="process"&&(v.value=!1)}).catch(f=>{v.value=!1,D.notify(ye(f))}).finally(()=>{})}return O({}),We(()=>{}),Ct(()=>{n&&clearInterval(n)}),(f,d)=>(h(),q(J,null,[o(i)?(h(),q("div",tl,[y("div",ll,[y("div",al,[o(i).Hall.map?(h(),N(Bt,{key:0,onIamDeleted:ne,onNewAnnounce:S,onDelSketch:we,ref_key:"rAnnounceCard",ref:F,Announce:o(i),pwUrl:k.value},null,8,["Announce","pwUrl"])):I("",!0)]),y("div",nl,[y("div",ol,[a(el,{date:o(i).eventTime,"onUpdate:date":[d[0]||(d[0]=c=>o(i).eventTime=c),d[1]||(d[1]=c=>void 0)]},null,8,["date"])]),ul,il,y("div",sl,[y("div",rl,[a(Yt,{id:o(i).id,type:"event",onOnUploaded:re},null,8,["id"])])]),a(ge,{spaced:"1em"}),a(le,{name:"progName",modelValue:o(i).progName,"onUpdate:modelValue":d[2]||(d[2]=c=>o(i).progName=c),label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),a(Ke,{modelValue:o(i).Hall,"onUpdate:modelValue":[d[3]||(d[3]=c=>o(i).Hall=c),d[4]||(d[4]=c=>de())],label:"\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F","map-options":"","option-label":"name","option-value":"id",options:o(P)},null,8,["modelValue","options"]),a(Ke,{modelValue:o(i).pay,"onUpdate:modelValue":d[5]||(d[5]=c=>o(i).pay=c),"emit-value":"","map-options":"",label:"\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0432\u0445\u043E\u0434\u0430",options:X},null,8,["modelValue"]),dl,[3,4].includes(o(i).pay)?(h(),N(le,{key:0,type:"text",modelValue:o(i).ticketLink,"onUpdate:modelValue":d[6]||(d[6]=c=>o(i).ticketLink=c),label:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0435 \u0431\u0438\u043B\u0435\u0442\u043E\u0432"},null,8,["modelValue"])):I("",!0),cl,a(le,{type:"number",modelValue:o(i).age,"onUpdate:modelValue":d[7]||(d[7]=c=>o(i).age=c),label:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442\u043D\u044B\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"},null,8,["modelValue"]),vl,a(le,{name:"evDescr",modelValue:o(i).sdescr,"onUpdate:modelValue":d[8]||(d[8]=c=>o(i).sdescr=c),type:"textarea",autogrow:"",label:"\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),ml,a(le,{name:"evText",modelValue:o(i).description,"onUpdate:modelValue":[d[9]||(d[9]=c=>o(i).description=c),d[10]||(d[10]=c=>xe())],type:"textarea",autogrow:"",debounce:300,label:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"},null,8,["modelValue"]),a(ge,{spaced:"1em"}),y("div",fl,[a(Ut,{modelValue:C,"onUpdate:modelValue":d[11]||(d[11]=c=>C=c),style:{width:"100%"},label:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0444\u0438\u0448\u0443",factory:Z,ref_key:"posterUploader",ref:ae,onUploaded:G,onFailed:x,"no-thumbnails":""},null,512)])])]),a(Ie,{align:"right"},{default:s(()=>[a(se,{label:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",onClick:be,color:"green"})]),_:1})])):I("",!0),pl,hl,_l],64))}};var gl=Te(kl,[["__scopeId","data-v-43de3166"]]);const yl=l=>(Je("data-v-43da2032"),l=l(),Re(),l),bl={key:0,class:"posterArea relative-position"},wl={key:0,style:{position:"absolute",right:"1em",top:"1em","z-index":"10"}},xl=yl(()=>y("img",{src:"/img/news/default_sketch.svg"},null,-1)),Vl={class:"eventboxin"},Ml={key:0},Dl=["innerHTML"],ql={key:1},Cl={key:1,class:"videoItem"},Sl={__name:"AnnounceDescr",emits:["delPoster"],setup(l,{emit:O}){const M=String("https://api.sakh-orch.ru/"),U=He(),D=R("editMode"),r=R("Announce"),b=w(()=>{let k=U.platform.is.mobile?1080:480;return r.value.poster?Nt(M,r.value.poster.md5,r.value.poster.ext,k):"/error.err"});function i(){return"https://vk.com/share.php?url="+String("https://sakh-orch.ru/")+"/announce/"+String(r.value.id)+"&title="+String(r.value.progName)+"&noparse=true&image="+String(b.value)}function P(){ke.post(M+"api/event/poster.php",{params:{method:"unlink",id:r.value.id}}).then(k=>{var V;if(!((V=k==null?void 0:k.data)!=null&&V.result))throw new Error;delete r.value.poster,delete r.value.posterId}).catch(k=>{U.notify(ye(k))})}return(k,V)=>(h(),q(J,null,[o(r).poster?(h(),q("div",bl,[o(D)?(h(),q("div",wl,[a(zt,{"throw-confirm":"",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0444\u0438\u0448\u0443",tooltip:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0444\u0438\u0448\u0443",onOnOk:V[0]||(V[0]=C=>P())})])):I("",!0),o(r).poster.status==="process"?(h(),N(ue,{key:1},{default:s(()=>[a(Ee),a(B,null,{default:s(()=>[a(Et,{showing:"",label:"\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430"})]),_:1})]),_:1})):(h(),N(Ee,{key:2,src:b.value},{error:s(()=>[xl]),_:1},8,["src"]))])):I("",!0),y("div",Vl,[a(At,{class:"transparent no-padding",flat:""},{default:s(()=>[a(ee,{class:"no-padding"},{default:s(()=>[a(ue,null,{default:s(()=>[a(B,null,{default:s(()=>[a(Y,{class:"title"},{default:s(()=>[L(he(o(r).progName),1)]),_:1}),a(Y,{class:"title"},{default:s(()=>[L(he(o(Kt)(o(r).eventTime)),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(ee,null,{default:s(()=>[(h(!0),q(J,null,St(o(r).parsedMD,(C,E)=>(h(),q(J,{key:E},[C.type==="text"?(h(),q("div",Ml,[C.content!==`
`?(h(),q("div",{key:0,innerHTML:C.content,class:"textBlock"},null,8,Dl)):(h(),q("br",ql))])):I("",!0),C.type==="video"?(h(),q("div",Cl,[a(jt,{ratio:16/9,src:"https://www.youtube.com/embed/"+C.content},null,8,["src"])])):I("",!0)],64))),128))]),_:1}),!o(r).completed&&[3,4].includes(o(r).pay)&&o(r).ticketLink?(h(),N(Ie,{key:0,align:"right"})):I("",!0),a(ee,null,{default:s(()=>[a(ue,{dense:""},{default:s(()=>[a(Y,{caption:""},{default:s(()=>[L(" \u0423\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0441\u044C\u0431\u0430 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u043C\u0435\u0440\u044B \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u043A\u043E\u0440\u043E\u043D\u0430\u0432\u0438\u0440\u0443\u0441\u043D\u043E\u0439 \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u0438! ")]),_:1})]),_:1})]),_:1}),a(ee,null,{default:s(()=>[a(ue,{clickable:"",href:o(r).Hall.map,target:"_blank"},{default:s(()=>[a(B,{avatar:""},{default:s(()=>[a(ie,{name:"place"})]),_:1}),a(B,null,{default:s(()=>[a(Y,null,{default:s(()=>[L(he(o(r).Hall.name),1)]),_:1}),a(Y,{caption:""},{default:s(()=>[L(he(o(r).Hall.address),1)]),_:1})]),_:1})]),_:1},8,["href"])]),_:1}),!o(r).completed&&[3,4].includes(o(r).pay)&&o(r).ticketLink?(h(),N(ee,{key:1},{default:s(()=>[a(ue,{clickable:"",href:o(r).ticketLink,target:"_blank"},{default:s(()=>[o(r).pay===3?(h(),q(J,{key:0},[a(B,{avatar:""},{default:s(()=>[a(ie,{name:"shopping_cart"})]),_:1}),a(B,null,{default:s(()=>[a(Y,null,{default:s(()=>[L("\u041A\u0443\u043F\u0438\u0442\u044C \u0431\u0438\u043B\u0435\u0442")]),_:1}),(h(),N(Y,{key:0,caption:""},{default:s(()=>[L("+ \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043F\u043E \u043F\u0443\u0448\u043A\u0438\u043D\u0441\u043A\u043E\u0439 \u043A\u0430\u0440\u0442\u0435")]),_:1}))]),_:1})],64)):I("",!0),o(r).pay===4?(h(),q(J,{key:1},[a(B,{avatar:""},{default:s(()=>[a(ie,{name:"img:/img/uds.svg"})]),_:1}),a(B,null,{default:s(()=>[a(Y,null,{default:s(()=>[L("\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439")]),_:1})]),_:1})],64)):I("",!0)]),_:1},8,["href"])]),_:1})):I("",!0),a(ge),a(ee,{class:"no-padding"},{default:s(()=>[a(Fe,{"phone-number":"+7-(4242)-300-518"}),a(Fe,{"phone-number":"+7-(962)-416-36-89"})]),_:1}),a(ge,{spaced:"1em"}),a(Ie,{align:"right"},{default:s(()=>[a(se,{href:i(),target:"_blank",icon:"ion-logo-vk",outline:"",style:{color:"var(--docTitle)"},label:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"},null,8,["href"])]),_:1})]),_:1})])],64))}};var Al=Te(Sl,[["__scopeId","data-v-43da2032"]]);const Ul={class:"eventboxl"},Il={__name:"AnnouncePage",setup(l){const O=Lt("\u0410\u043D\u043E\u043D\u0441");ft(O);const M=He(),U=R("editMode"),D=String("https://api.sakh-orch.ru/"),r=je(),b=H(),i=H(null);ze("Announce",i);function P(){ke.post(D+"api/event/announce.php",{params:{method:"get",id:r.params.evid}}).then(k=>{var V,C;i.value=(C=(V=k==null?void 0:k.data)==null?void 0:V.data)!=null?C:null,console.log("Announce loaded")}).catch(k=>{M.notify(ye(k))})}return We(()=>{P()}),(k,V)=>(h(),q(J,null,[o(U)&&i.value?(h(),N(gl,{key:0,onPosterUploaded:P,onReload:P,ref_key:"editorRef",ref:b},null,512)):I("",!0),y("div",Ul,[i.value?(h(),N(Al,{key:0,onDelPoster:V[0]||(V[0]=()=>{b.value.delPoster()})})):I("",!0)])],64))}};var ca=Te(Il,[["__scopeId","data-v-64b5a099"]]);export{ca as default};
