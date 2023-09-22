import{u as x}from"./use-quasar.9ad74563.js";import{u as O,i as h,p as o,o as E,a as N,c as q,d as H,r as i,w as P,e as B,f as L,g as b,h as j,j as F,F as I}from"./index.db86f688.js";import{P as T}from"./LocalStorage.7d233515.js";import{u as R}from"./use-meta.c5d4d3df.js";import{api as k}from"./axios.37bddcf8.js";import{n as S,c as U,i as V,a as Q}from"./myFuncts.1e6ef4e3.js";import"./jwt-decode.esm.74bd4619.js";const C="SessionToken",M="AccessToken",W={__name:"AuthComponent",setup(D,{expose:_}){const a=x(),v=String("https://api.sakh-orch.ru/");O();const p=h("isOptionsLoaded"),g=h("admin"),y=h("Halls");function A(){k.post(v+"api/get/options.php",{params:{}}).then(t=>{var e,n,s,c;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;y.value=(c=(s=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:s.Halls)!=null?c:[],console.log("options Loaded"),p.value=!0}).catch(t=>{a.notify(S(t))})}const r=h("AccessToken"),f=h("SessionToken");function u(t,e,n="90d"){a.cookies.set(t,e,{expires:n,path:"/",domain:null,sameSite:"Strict",secure:!0,httpOnly:!1}),t===M&&(k.defaults.headers.common.AccessToken=e,r.value=e,A()),t===C&&(f.value=e)}function d(){k.post(String("https://auth.symphograph.ru/")+"/api/register.php",{params:{authType:"default"}}).then(t=>{var e,n,s,c,l;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;u("SessionToken",(s=(n=t==null?void 0:t.data)==null?void 0:n.data.SessionToken)!=null?s:""),u("AccessToken",(l=(c=t==null?void 0:t.data)==null?void 0:c.data.AccessToken)!=null?l:"")}).catch(t=>{a.notify(S(t))})}o("register",d);function m(){k.post(String("https://auth.symphograph.ru/")+"/api/refresh.php",{params:{SessionToken:f.value,AccessToken:r.value}}).then(t=>{var e,n,s,c,l;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;u("SessionToken",(s=(n=t==null?void 0:t.data)==null?void 0:n.data.SessionToken)!=null?s:""),u("AccessToken",(l=(c=t==null?void 0:t.data)==null?void 0:c.data.AccessToken)!=null?l:""),g.value=U([4],r.value)}).catch(t=>{var e;if(((e=t==null?void 0:t.response)==null?void 0:e.status)===401){d();return}a.notify(S(t))})}o("refreshAccessToken",m);function w(t){return V(t)?(m(),a.notify(Q(null,"\u041E\u0439! \u0415\u0449\u0435 \u0440\u0430\u0437, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.")),!0):!1}return o("refreshIfNeed",w),_({}),E(()=>{console.log("auth beforeMounted"),k.defaults.headers.common.Accept="application/json"}),N(()=>{var t,e;console.log("auth Mounted"),!a.cookies.getAll()[M]||!a.cookies.getAll()[C]?d():(f.value=(t=a.cookies.getAll()[C])!=null?t:"",r.value=(e=a.cookies.getAll()[M])!=null?e:"",m())}),(t,e)=>q("",!0)}};const Z={__name:"MainLayout",setup(D){H();const _=i();o("pageSettings",_);const a=i(!1);o("isOptionsLoaded",a);const v=i(),p=x();o("q",p);const g=O(),y=i("lvl");o("lvl",y);const A=i("");o("AccessToken",A);const r=i("");o("SessionToken",r);const f=i(!1);o("admin",f);const u=i(!1);o("progress",u);const d=i(!1);o("leftDrawerOpen",d);const m=i([]);o("Halls",m);const w=i(!1);o("editMode",w),P(g,s=>{T.set("lastPath",s.path)});function t(){T.set("CookieConfirm","1")}function e(){T.getItem("CookieConfirm")||p.notify({message:"\u041C\u044B \u0442\u043E\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C Cookies. \u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0431\u0435\u0437 \u043D\u0438\u0445 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.",color:"primary",timeout:0,multiLine:!0,onDismiss:t,icon:"ion-information-circle-outline",actions:[{label:"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",color:"yellow",handler:()=>{}}]})}return E(()=>{}),N(()=>{T.set("lastPath",g.path),console.log("mainLayout Mounted"),e()}),R({meta:{viewport:{name:"viewport",content:"initial-scale=1, width=device-width, user-scalable=yes"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}}),(s,c)=>{const l=B("router-view");return L(),b(I,null,[j(W,{ref_key:"refAuth",ref:v},null,512),a.value?(L(),F(l,{key:0})):q("",!0)],64)}}};export{Z as default};
