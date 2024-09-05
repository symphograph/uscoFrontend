import{Q as p}from"./QItemLabel.2de18a52.js";import{Q as P}from"./QList.f2c9d2ce.js";import{u as $}from"./use-meta.efc19951.js";import{u as _}from"./use-quasar.2b1b4907.js";import{e as h,g as B}from"./myFuncts.eda7a4d2.js";import{Q as v}from"./QImg.8430c3f7.js";import{Q as i,a as N}from"./QItem.42e8eee9.js";import{c as d,m as b,n as g,q as t,f as e,t as s,v as k,B as Q,C as x,x as c,o as C,ax as l,a$ as S}from"./index.bd97e9c1.js";import{_ as q}from"./EMail.f59ed6ba.js";import{P as V}from"./PageShell.195bf33e.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import"./QExpansionItem.0b8df4a3.js";import"./QToolbar.46b6485c.js";import"./QScrollArea.3d1595d7.js";import"./TouchPan.d2e1aed3.js";import"./touch.9135741d.js";import"./selection.db5b1e6e.js";import"./format.de7e9769.js";import"./QLinearProgress.61f529b3.js";import"./MainFooter.76d58485.js";import"./MainFooter.vue_vue_type_style_index_0_scoped_true_lang.95e4fb79.js";import"./AnderHeader.de8c65e8.js";/* empty css                                                    */const T={__name:"WhatsApp",props:{phoneNumber:{type:[String,Number],required:!0}},setup(a){const o=_(),m=a;function r(){return String(m.phoneNumber).replace(/[^\d+]/g,"")}const f=d(()=>`https://wa.me/${r()}`);return(u,n)=>(b(),g(N,{clickable:"",href:f.value,target:"_blank"},{default:t(()=>[e(i,{avatar:""},{default:t(()=>[e(v,{src:"/img/auth/whatsapp.svg"})]),_:1}),e(i,null,{default:t(()=>[e(p,null,{default:t(()=>[s(k(a.phoneNumber),1)]),_:1}),e(p,{caption:""},{default:t(()=>n[1]||(n[1]=[s("\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 WhatsApp")])),_:1})]),_:1}),e(i,{side:""},{default:t(()=>[e(Q,{icon:"content_copy",flat:"",onClick:n[0]||(n[0]=x(y=>c(h)(r(),c(o)),["stop","prevent"]))})]),_:1})]),_:1},8,["href"]))}},w={__name:"TeleGram",props:{phoneNumber:{type:[String,Number],required:!0}},setup(a){const o=_(),m=a;function r(){return String(m.phoneNumber).replace(/[^\d+]/g,"")}const f=d(()=>`https://t.me/${r()}`);return(u,n)=>(b(),g(N,{clickable:"",href:f.value,target:"_blank"},{default:t(()=>[e(i,{avatar:""},{default:t(()=>[e(v,{src:"/img/auth/telegram.svg"})]),_:1}),e(i,null,{default:t(()=>[e(p,null,{default:t(()=>[s(k(a.phoneNumber),1)]),_:1}),e(p,{caption:""},{default:t(()=>n[1]||(n[1]=[s("\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram")])),_:1})]),_:1}),e(i,{side:""},{default:t(()=>[e(Q,{icon:"content_copy",flat:"",onClick:n[0]||(n[0]=x(y=>c(h)(r(),c(o)),["stop","prevent"]))})]),_:1})]),_:1},8,["href"]))}};const M={class:"contentArea"},A={__name:"VacanciesPage",setup(a){const o=B("\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438");$(o);const m=_(),r=d(()=>m.platform.is.desktop?"contentBlock":"contentBlock-m");return C(()=>{}),(f,u)=>(b(),g(V,{pageTitle:c(o).title,"use-header":""},{PageContent:t(()=>[l("div",M,[l("div",{class:S(r.value)},u[0]||(u[0]=[l("br",null,null,-1),l("br",null,null,-1),l("em",null,"\u0421\u0442\u0440\u0443\u043D\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B:",-1),l("ul",null,[l("li",null,"\u0421\u043A\u0440\u0438\u043F\u043A\u0430: \u0441\u043E\u043B\u0438\u0441\u0442-\u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0430"),l("li",null,[s(" \u0412 \u0433\u0440\u0443\u043F\u043F\u044B: "),l("ul",null,[l("li",null,"\u0421\u043A\u0440\u0438\u043F\u043A\u0430"),l("li",null,"\u0410\u043B\u044C\u0442"),l("li",null,"\u0412\u0438\u043E\u043B\u043E\u043D\u0447\u0435\u043B\u044C")])]),l("li",null,"\u041A\u043E\u043D\u0442\u0440\u0430\u0431\u0430\u0441: \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"),l("li",null,"\u0410\u0440\u0444\u0430")],-1),l("br",null,null,-1),l("br",null,null,-1),l("em",null,"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0435 \u0434\u0443\u0445\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B:",-1),l("ul",null,[l("li",null,"\u0413\u043E\u0431\u043E\u0439: \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u043E\u043B\u0438\u0441\u0442-\u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"),l("li",null,"\u0413\u043E\u0431\u043E\u0439: \u0432\u0442\u043E\u0440\u043E\u0439-\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u043F\u0435\u0440\u0432\u043E\u0433\u043E"),l("li",null,"\u0424\u0430\u0433\u043E\u0442: \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u043E\u043B\u0438\u0441\u0442-\u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B")],-1),l("br",null,null,-1),l("br",null,null,-1),l("em",null,"\u041C\u0435\u0434\u043D\u044B\u0435 \u0434\u0443\u0445\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B:",-1),l("ul",null,[l("li",null,"\u0422\u0440\u0443\u0431\u0430: \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u043E\u043B\u0438\u0441\u0442-\u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"),l("li",null,"\u0422\u0440\u043E\u043C\u0431\u043E\u043D: \u0432\u0442\u043E\u0440\u043E\u0439-\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u043F\u0435\u0440\u0432\u043E\u0433\u043E")],-1),l("br",null,null,-1),l("br",null,null,-1),l("em",null,"\u0423\u0434\u0430\u0440\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B:",-1),l("ul",null,[l("li",null,"\u0423\u0434\u0430\u0440\u043D\u044B\u0435: \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043C\u0435\u0439\u0441\u0442\u0435\u0440 \u0433\u0440\u0443\u043F\u043F\u044B"),l("li",null,"\u0423\u0434\u0430\u0440\u043D\u044B\u0435: \u0432 \u0433\u0440\u0443\u043F\u043F\u0443")],-1),l("br",null,null,-1),l("br",null,null,-1),l("ul",null,[l("li",null,'\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0442\u0430 \u043E\u0442 80.000\u0440. \u043F\u043E\u0441\u043B\u0435 \u0432\u044B\u0447\u0435\u0442\u0430 \u043D\u0430\u043B\u043E\u0433\u043E\u0432 ("\u043D\u0435\u0442\u0442\u043E", "\u043D\u0430 \u0440\u0443\u043A\u0438").'),l("li",null,"\u041A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u043D\u043E\u0433\u043E \u0436\u0438\u043B\u044C\u044F."),l("li",null,"\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043E\u0446. \u043F\u0430\u043A\u0435\u0442, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0443 \u043F\u0440\u043E\u0435\u0437\u0434\u0430 \u043A \u043C\u0435\u0441\u0442\u0443 \u043E\u0442\u0434\u044B\u0445\u0430 \u0440\u0430\u0437 \u0432 \u0434\u0432\u0430 \u0433\u043E\u0434\u0430."),l("li",null,"\u0420\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u0438 \u043F\u0440\u0435\u043C\u0438\u0438."),l("li",null,"\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u043B\u044C\u043D\u044B\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0441 \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u043E\u043C."),l("li",null,"\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u0430\u044F \u0433\u0430\u0441\u0442\u0440\u043E\u043B\u044C\u043D\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C."),l("li",null,"\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0432 \u043C\u043E\u043B\u043E\u0434\u043E\u043C \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0435\u043C\u0441\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u0435.")],-1),l("br",null,null,-1),l("br",null,null,-1)]),2),e(P,null,{default:t(()=>[e(p,{header:""},{default:t(()=>u[1]||(u[1]=[s("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0440\u0435\u0437\u044E\u043C\u0435:")])),_:1}),e(q,{email:"erazhisht@gmail.com"}),e(T,{"phone-number":"+7-(984)-134-12-38"}),e(w,{"phone-number":"+7-(984)-134-12-38"})]),_:1})])]),_:1},8,["pageTitle"]))}};var al=I(A,[["__scopeId","data-v-34d62d04"]]);export{al as default};
