import { boot } from 'quasar/wrappers'
import axios from "axios";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

export const api = axios.create({ baseURL: '', withCredentials: true })
export default boot(async ({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})
export const ttt = (xxx) => {
  console.log(xxx)
}


