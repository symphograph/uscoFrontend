import{u as o,a}from"./use-ratio.fa9637be.js";import{c as l,h as s,p as r}from"./index.e552dc30.js";var u=l({name:"QVideo",props:{...o,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const t=a(e),i=s(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>r("div",{class:i.value,style:t.value},[r("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});export{u as Q};