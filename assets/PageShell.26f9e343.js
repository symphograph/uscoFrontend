import{Q as T}from"./QItemLabel.8028e987.js";import{a as P}from"./QItem.612f6437.js";import{Q as V,a as _}from"./QExpansionItem.df36872d.js";import{Q as m}from"./QToolbar.f0c18eb8.js";import{d as b,m as r,n as d,r as A,i,b3 as F,c as C,E as f,x as c,l as g,q as a,f as e,D as y,F as I,t as k,v as Q,b4 as u}from"./index.1b0ae8da.js";import{Q as W}from"./QScrollArea.cfccd153.js";import{Q as q}from"./QLinearProgress.1fd3ea12.js";import{M as w}from"./MainFooter.9be60b4c.js";import{_ as z}from"./AnderHeader.847277b6.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const E=b({__name:"ProgressLine",props:{progress:{type:Boolean,required:!0}},setup(o){return(s,v)=>(r(),d(q,{indeterminate:o.progress,"track-color":o.progress?"DAA520FF":"transparent",style:{color:"goldenrod"},"instant-feedback":"",value:0,size:"2px"},null,8,["indeterminate","track-color"]))}});const H={key:1,class:"pageToolbar no-wrap"},L={key:0,class:"pageToolbar"},N=b({__name:"PageShell",props:{pageTitle:{type:String},pageTitleSize:{type:String,default:"25px"},noStickTitle:{type:Boolean,default:void 0},useHeader:{type:Boolean,default:void 0}},setup(o){const s=A(!0),v=i("progress"),h=F(),x=C(()=>!!h.ToolPanel),n=i("scrollPos"),$=i("scrollWatch"),S=i("stopScrollWatch");function B(t){if(!$.value){n.value=t.verticalPosition;return}const l=t.verticalPosition>=n.value;s.value=!l||t.verticalPosition===0,n.value=t.verticalPosition}return(t,l)=>(r(),f(I,null,[o.useHeader&&c(n)<2?(r(),d(z,{key:0})):g("",!0),t.$q.platform.is.desktop||!x.value?(r(),f("div",H,[o.pageTitle&&!o.noStickTitle?(r(),d(m,{key:0},{default:a(()=>[e(P,{class:"pageTitle"},{default:a(()=>[e(T,{lines:"0"},{default:a(()=>[k(Q(o.pageTitle),1)]),_:1})]),_:1}),e(_),u(t.$slots,"ToolPanel",{},void 0,!0),u(t.$slots,"SideTools",{},void 0,!0)]),_:3})):g("",!0)])):(r(),d(V,{key:2,"expand-icon":"tune",label:o.pageTitle,modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=p=>s.value=p),"expanded-icon":"",onBeforeShow:l[1]||(l[1]=p=>c(S)()),onBeforeHide:l[2]||(l[2]=p=>c(S)()),"header-style":{fontSize:"20px"}},{default:a(()=>[e(m,null,{default:a(()=>[e(_),u(t.$slots,"ToolPanel",{},void 0,!0)]),_:3})]),_:3},8,["label","modelValue"])),e(y),e(E,{progress:c(v)},null,8,["progress"]),e(W,{class:"col myScrollArea",ref:"refScrollArea",onScroll:B},{default:a(()=>[o.noStickTitle?(r(),f("div",L,[e(m,null,{default:a(()=>[e(P,{class:"pageTitle"},{default:a(()=>[e(T,{lines:"0"},{default:a(()=>[k(Q(o.pageTitle),1)]),_:1})]),_:1})]),_:1}),e(y)])):g("",!0),u(t.$slots,"PageContent",{},void 0,!0),e(w)]),_:3},512)],64))}});var Z=D(N,[["__scopeId","data-v-7bab98b4"]]);export{Z as P};
