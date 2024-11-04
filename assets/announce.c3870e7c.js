var o=Object.defineProperty;var p=(r,t,u)=>t in r?o(r,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[t]=u;var i=(r,t,u)=>(p(r,typeof t!="symbol"?t+"":t,u),u);import{u as e}from"./myAxios.a8f39ef7.js";import{I as l,S as d}from"./img.e1c068be.js";import{r as c}from"./index.657dc795.js";class h{static async initAllList(t){this.all=c(await this.getList(t))}static findById(t){return this.all.value.find(u=>u.id===t)}static async get(t,u){const s={method:"get",announceId:u},a="\u0410\u043D\u043E\u043D\u0441 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F";return e.get(t,this.path,s,a)}static async create(t){const u={method:"add"},s="\u0410\u043D\u043E\u043D\u0441 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D";return e.get(t,this.path,u,s)}static async del(t,u){const s={method:"del",id:u};return e.set(t,this.path,s)}static async hideOrShow(t,u,s){const a={method:s?"show":"hide",announceId:u};return e.set(t,this.path,a)}static async save(t,u){const s={method:"update",announce:u},a="\u0410\u043D\u043E\u043D\u0441 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F";return e.set(t,this.path,s,a)}static async updateMarkdown(t,u,s){const a={method:"updateMarkdown",announceId:u,markdown:s},n="\u0422\u0435\u043A\u0441\u0442 \u043D\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u043B\u0441\u044F";return e.get(t,this.path,a,n)}static async getList(t){const u={method:"listAll"},s="\u0410\u043D\u043E\u043D\u0441\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return e.getList(t,this.path,u,s)}static async listByHall(t,u){const s={method:"listByHall",hallId:u},a="\u0410\u043D\u043E\u043D\u0441\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return e.getList(t,this.path,s,a)}static async listByYear(t,u){const s={method:"listByYear",year:u},a="\u0410\u043D\u043E\u043D\u0441\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return e.getList(t,this.path,s,a)}static async listByMonth(t,u,s){const a={method:"listByMonth",year:u,month:s},n="\u0410\u043D\u043E\u043D\u0441\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return e.getList(t,this.path,a,n)}static async listByDate(t,u){const s={method:"listByDate",date:u},a="\u0410\u043D\u043E\u043D\u0441\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return e.getList(t,this.path,s,a)}static async listFuture(t,u){const s={method:"listFuture",date:u},a="\u0410\u043D\u043E\u043D\u0441\u044B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C";return e.getList(t,this.path,s,a)}static radarioUrl(t){return`https://radario.ru/buy-tickets/${t}`}}i(h,"path","epoint/event/announce.php"),i(h,"all",c([]));class m extends d{static getApiUrl(){return e.getApiUrl(this.path)}}i(m,"path","epoint/event/sketch.php");class D extends l{static get defaultUrl(){return"/img/news/default_sketch.svg"}static async unlink(t,u){const s={method:"unlink",carrierId:u};return e.set(t,this.path,s)}static async get(t,u){const s={method:"get",announceId:u};return e.get(t,this.path,s)}}i(D,"path","epoint/event/poster.php");export{D as P,m as S,h as m};
