import{s as i}from"./index.db86f688.js";const e={ratio:[String,Number]};function s(r,t){return i(()=>{const o=Number(r.ratio||(t!==void 0?t.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}export{s as a,e as u};