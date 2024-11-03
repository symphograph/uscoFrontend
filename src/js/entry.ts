import {QVueGlobals} from "quasar";
import {ussoAxios} from "src/js/myAxios";

export class Entry {
  static path: string = 'epoint/news/entry.php'

  static async hideOrShow(q: QVueGlobals, entryId: number, isShow: boolean): Promise<boolean> {
    const params = {
      method: isShow ? 'show' : 'hide',
      entryId: entryId
    }
    return ussoAxios.set(q, this.path, params)
  }

  static async del(q: QVueGlobals, entryId: number): Promise<boolean> {
    const params = {
      method: 'del',
      entryId: entryId
    }
    return ussoAxios.set(q, this.path, params)
  }

  static async listByYear(q: QVueGlobals, year: number, category: string): Promise<Record<string, any>[]> {

    const params = {
      method: 'listByYear',
      category: category,
      year: year
    }
    const errMsg: string = "Новости не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }

  static async listTop(q: QVueGlobals): Promise<Record<string, any>[]> {

    const params = {
      method: 'listTop',
    }
    const errMsg: string = "Новости не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }
}

export class Sketch {
  static path: string = 'epoint/news/sketch.php'

  static async del(q: QVueGlobals, entryId: number): Promise<boolean> {
    const params = {
      method: 'del',
      entryId: entryId
    }
    return ussoAxios.set(q, this.path, params)
  }
}
