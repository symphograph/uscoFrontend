import {QVueGlobals} from "quasar";
import {staffAxios, ussoAxios} from "src/js/myAxios";

export class myAnnounce {
  private static path: string = 'epoint/event/announce.php'

  static async del(q: QVueGlobals, announceId: number): Promise<boolean> {
    const params = {
      method: 'del',
      id: announceId
    }
    return ussoAxios.set(q, this.path, params)
  }

  static async hideOrShow(q: QVueGlobals, announceId: number, isShow: boolean): Promise<boolean> {
    const params = {
      method: isShow ? 'show' : 'hide',
      announceId: announceId
    }
    return ussoAxios.set(q, this.path, params)
  }

  static async delSketch(q: QVueGlobals, announceId: number): Promise<boolean> {
    const params = {
      method: 'delSketch',
      announceId: announceId
    }
    return ussoAxios.set(q, this.path, params)
  }

  static async save(q: QVueGlobals, announce: any): Promise<boolean> {

    const params = {
      method: 'update',
        announce: announce
    }
    return ussoAxios.set(q, this.path, params)
  }

  static async getList(q: QVueGlobals): Promise<any[]> {

    const params = {
      method: 'list',
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }
}
