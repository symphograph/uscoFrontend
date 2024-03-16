import{P as g}from"./LocalStorage.8df6d3c3.js";import{u as x}from"./jwt-decode.esm.a17afbe5.js";import{api as h}from"./axios.73a146c0.js";import{n as w,c as H,i as P,a as q}from"./myFuncts.ea11ec4a.js";import{u as O,i as k,p as n,o as B,a as E,c as N,r as i,w as b,d as F,e as L,f as I,g as j,h as U,F as V}from"./index.4c9b99a1.js";import{u as Q}from"./use-meta.06e3aa02.js";const S="SessionToken",C="AccessToken",R={__name:"AuthComponent",setup(D,{expose:M}){const o=x(),p=String("https://api.sakh-orch.ru/");O();const T=k("isOptionsLoaded"),_=k("admin"),y=k("Halls");function A(){h.post(p+"api/get/options.php",{params:{}}).then(t=>{var e,a,s,c;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;y.value=(c=(s=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:s.Halls)!=null?c:[],console.log("options Loaded"),T.value=!0}).catch(t=>{o.notify(w(t))})}const l=k("AccessToken"),f=k("SessionToken");function r(t,e,a="90d"){o.cookies.set(t,e,{expires:a,path:"/",domain:null,sameSite:"Strict",secure:!0,httpOnly:!1}),t===C&&(h.defaults.headers.common.AccessToken=e,l.value=e,A()),t===S&&(f.value=e)}function u(){h.post(String("https://auth.symphograph.ru/")+"/api/register.php",{params:{authType:"default"}}).then(t=>{var e,a,s,c,m;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;r("SessionToken",(s=(a=t==null?void 0:t.data)==null?void 0:a.data.SessionToken)!=null?s:""),r("AccessToken",(m=(c=t==null?void 0:t.data)==null?void 0:c.data.AccessToken)!=null?m:"")}).catch(t=>{o.notify(w(t))})}n("register",u);function d(){h.post(String("https://auth.symphograph.ru/")+"/api/refresh.php",{params:{SessionToken:f.value,AccessToken:l.value}}).then(t=>{var e,a,s,c,m;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;r("SessionToken",(s=(a=t==null?void 0:t.data)==null?void 0:a.data.SessionToken)!=null?s:""),r("AccessToken",(m=(c=t==null?void 0:t.data)==null?void 0:c.data.AccessToken)!=null?m:""),_.value=H([4],l.value)}).catch(t=>{var e;if(((e=t==null?void 0:t.response)==null?void 0:e.status)===401){u();return}o.notify(w(t))})}n("refreshAccessToken",d);function v(t){return P(t)?(d(),o.notify(q(null,"\u041E\u0439! \u0415\u0449\u0435 \u0440\u0430\u0437, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.")),!0):!1}return n("refreshIfNeed",v),M({}),B(()=>{console.log("auth beforeMounted"),h.defaults.headers.common.Accept="application/json"}),E(()=>{var t,e;console.log("auth Mounted"),!o.cookies.getAll()[C]||!o.cookies.getAll()[S]?u():(f.value=(t=o.cookies.getAll()[S])!=null?t:"",l.value=(e=o.cookies.getAll()[C])!=null?e:"",d())}),(t,e)=>N("",!0)}};const X={__name:"MainLayout",setup(D){Q({meta:{viewport:{name:"viewport",content:"initial-scale=1, width=device-width, user-scalable=yes"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}});const o=x(),p=O(),T=i(),_=i(!1);n("progress",_);const y=i(!1);n("editMode",y);const A=i(!1);n("admin",A);const l=i(!1);n("leftDrawerOpen",l);const f=i("gfdsg");n("AccessToken",f);const r=i("gfdsg");n("SessionToken",r);const u=i(!1);n("isOptionsLoaded",u);const d=i([]);n("Halls",d),b(p,e=>{g.set("lastPath",e.path)});function v(){g.set("CookieConfirm","1")}function t(){g.getItem("CookieConfirm")||o.notify({message:"\u041C\u044B \u0442\u043E\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C Cookies. \u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0431\u0435\u0437 \u043D\u0438\u0445 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.",color:"primary",timeout:0,multiLine:!0,onDismiss:v,icon:"ion-information-circle-outline",actions:[{label:"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",color:"yellow",handler:()=>{}}]})}return E(()=>{g.set("lastPath",p.path),console.log("mainLayout Mounted"),t()}),(e,a)=>{const s=F("router-view");return L(),I(V,null,[j(R,{ref_key:"refAuth",ref:T},null,512),u.value?(L(),U(s,{key:0})):N("",!0)],64)}}};export{X as default};
