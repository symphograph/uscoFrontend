var d=Object.defineProperty;var m=(i,u,t)=>u in i?d(i,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[u]=t;var e=(i,u,t)=>(m(i,typeof u!="symbol"?u+"":u,t),t);import{s as n}from"./myAxios.e0606f23.js";import{a as l}from"./axios.b6bdbb44.js";import{n as g}from"./myFuncts.28762f14.js";import{r as p}from"./index.f5e978c0.js";class o{constructor(){e(this,"clonId",0);e(this,"fioEn","");e(this,"fioRu","");e(this,"iconUrl","");e(this,"id",0);e(this,"imslpId",0);e(this,"imslpLink","");e(this,"nameImslp","");e(this,"wikiId",0)}static async get(u,t){const s={method:"get",authorId:t},a="\u0410\u0432\u0442\u043E\u0440 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F";return n.get(u,this.path,s,a)}static async getList(u){const t={method:"all"},s="\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,t,s)}static async initList(u){this.list=p(await this.getList(u))}}e(o,"list"),e(o,"selected",p()),e(o,"path","epoint/lib/author.php");class y{static async get(u,t){const s={method:"get",workId:t},a="\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C";return n.get(u,this.path,s,a)}static async del(u,t){const s={method:"del",workId:t};return n.set(u,this.path,s)}static async add(u,t){const s={method:"add",titleRu:t.titleRu,titleEn:t.titleEn,authorId:t.authorId},a="\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u043E\u0441\u044C";return n.set(u,this.path,s,a)}static async update(u,t){const s={method:"update",titleRu:t.titleRu,titleEn:t.titleEn,workId:t.id,opus:t.opus,genreId:t.genreId},a="\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u043E\u0441\u044C";return n.set(u,this.path,s,a)}static async getListByAnnounce(u,t){const s={method:"listByAnnounce",announceId:t},a="\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,s,a)}static async getListByAuthor(u,t){const s={method:"list",authorId:t},a="\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,s,a)}static async linkToAnnounce(u,t,s){const a={method:"linkToAnnounce",announceId:t,workId:s};return n.set(u,this.path,a)}static async linkListToAnnounce(u,t,s){const a={method:"linkListToAnnounce",announceId:t,workIds:s};return n.set(u,this.path,a)}static async unlinkFromAnnounce(u,t,s,a=!1){const r={method:"unlinkFromAnnounce",announceId:t,workId:s,force:a};return n.set(u,this.path,r)}static async moveSortInAnnounce(u,t,s,a){const r={method:"moveSortInAnnounce",direction:t,workId:s,announceId:a};return n.set(u,this.path,r)}}e(y,"path","epoint/lib/work.php");class B{static async moveSort(u,t,s){const a={method:"moveSort",direction:t,partitionId:s};return n.set(u,this.path,a)}static async del(u,t){const s={method:"del",id:t};return n.set(u,this.path,s)}static async save(u,t){var r;const s={method:t.id?"update":"add",workId:t.workId,title:t.title,caption:t.caption,num:t.num,id:(r=t.id)!=null?r:void 0},a="\u0420\u0430\u0437\u0434\u0435\u043B \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F";return n.set(u,this.path,s,a)}static async getList(u,t){const s={method:"list",workId:t},a="\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,s,a)}static async getListByAnnounce(u,t){const s={method:"listByAnnounce",announceId:t},a="\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,s,a)}static async linkListToAnnounce(u,t,s){const a={method:"linkListToAnnounce",announceId:t,partitions:s};return n.set(u,this.path,a)}}e(B,"path","epoint/lib/partition.php");class D{static async getList(u){const t={method:"list"},s="\u0416\u0430\u043D\u0440\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,t,s)}}e(D,"path","epoint/lib/genre.php");class E{static async updateTitle(u,t,s){const a={method:"updateTitle",videoId:t,title:s};return n.set(u,this.path,a)}static async linkToAnnounce(u,t,s){const a={method:"linkToAnnounce",videoId:t,announce:s};return n.set(u,this.path,a)}static async getDescr(u,t){var h;const s={method:"getDescr",videoId:t},a="\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u0435\u043E \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C",r=n.getApiUrl(this.path);try{const c=await l.post(r,{params:s});if(!((h=c==null?void 0:c.data)!=null&&h.result))throw new Error(a);return c.data.data.str}catch(c){return u.notify(g(c,a)),""}}static async putDescrToVK(u,t){const s={method:"putDescrToVK",videoId:t};return n.set(u,this.path,s)}static async updateAllFromVK(u){const t={method:"updateAllFromVK"},s="\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C";return n.set(u,this.path,t,s)}static async get(u,t){const s={method:"get",videoId:t},a="\u0412\u0438\u0434\u0435\u043E \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u043E\u0441\u044C";return n.get(u,this.path,s,a)}static async getList(u){const t={method:"list"},s="\u0412\u0438\u0434\u0435\u043E\u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,t,s)}static async getListByWork(u,t){const s={method:"listByWork",workId:t},a="\u0412\u0438\u0434\u0435\u043E\u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,s,a)}}e(E,"path","epoint/lib/video.php");class L{static async del(u,t){const s={method:"del",tCodeId:t};return n.set(u,this.path,s)}static async update(u,t){return t.type==="init"?this.updateInit(u,t.id,t.start,t.uLabel):this.updateStart(u,t.id,t.start)}static async addInit(u,t,s,a){const r={method:"addInit",videoId:t,start:s,uLabel:a};return n.set(u,this.path,r)}static async addWork(u,t,s,a){const r={method:"addWork",videoId:t,start:s,workId:a};return n.set(u,this.path,r)}static async addPartition(u,t,s,a){const r={method:"addPartition",videoId:t,start:s,partitionId:a};return n.set(u,this.path,r)}static async updateStart(u,t,s){const a={method:"updateStart",tCodeId:t,start:s};return n.set(u,this.path,a)}static async updateInit(u,t,s,a){const r={method:"updateInit",tCodeId:t,start:s,uLabel:a};return n.set(u,this.path,r)}static async getList(u,t){const s={method:"list",videoId:t},a="\u0422\u0430\u0439\u043C\u043A\u043E\u0434\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return n.getList(u,this.path,s,a)}}e(L,"path","epoint/lib/timecode.php");export{o as A,D as G,B as P,L as T,E as V,y as W};
