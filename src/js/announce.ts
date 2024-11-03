import {QVueGlobals} from "quasar";
import {ussoAxios} from "src/js/myAxios";
import {ref, Ref} from "vue";

export class myAnnounce {
  private static path: string = 'epoint/event/announce.php'

  public static all: Ref<Record<string, any>[]> = ref([])

  static async initAllList(q: QVueGlobals): Promise<void> {
    this.all = ref(await this.getList(q))
  }

  static findById(announceId: number) {
    return this.all.value.find((el) => el.id === announceId)
  }

  static async get(q: QVueGlobals, announceId: number): Promise<any> {

    const params = {
      method: 'get',
      announceId: announceId
    }
    const errMsg = 'Анонс не загрузился'

    return ussoAxios.get(q, this.path, params, errMsg)
  }

  static async create(q: QVueGlobals): Promise<any> {

    const params = {
      method: 'add',
    }
    const errMsg = 'Анонс не создан'

    return ussoAxios.get(q, this.path, params, errMsg)
  }

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

  static async save(q: QVueGlobals, announce: any): Promise<boolean> {

    const params = {
      method: 'update',
        announce: announce
    }
    const errMsg = 'Анонс не сохранился'
    return ussoAxios.set(q, this.path, params, errMsg)
  }

  static async updateMarkdown(q: QVueGlobals, announceId: number, markdown: string): Promise<any> {

    const params = {
      method: 'updateMarkdown',
      id: announceId,
      markdown: markdown
    }
    const errMsg = 'Текст не обновился'

    return ussoAxios.get(q, this.path, params, errMsg)
  }

  static async getList(q: QVueGlobals): Promise<Record<string, any>[]> {

    const params = {
      method: 'listAll',
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }

  static async listByHall(q: QVueGlobals, hallId: number): Promise<Record<string, any>[]> {

    const params = {
      method: 'listByHall',
      hallId: hallId
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }

  static async listByYear(q: QVueGlobals, year: number): Promise<Record<string, any>[]> {

    const params = {
      method: 'listByYear',
      year: year
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }

  static async listByMonth(q: QVueGlobals, year: number, month: number): Promise<Record<string, any>[]> {

    const params = {
      method: 'listByMonth',
      year: year,
      month: month
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }

  static async listByDate(q: QVueGlobals, date: string): Promise<Record<string, any>[]> {

    const params = {
      method: 'listByDate',
      date: date
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }

  static async listFuture(q: QVueGlobals, date?: string): Promise<Record<string, any>[]> {

    const params = {
      method: 'listFuture',
      date: date
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }

  static radarioUrl(radarioEventId: number){
    return `https://radario.ru/buy-tickets/${radarioEventId}`
  }

}

export class Sketch {
  static path: string = 'epoint/event/sketch.php'

  static async del(q: QVueGlobals, announceId: number): Promise<boolean> {
    const params = {
      method: 'del',
      announceId: announceId
    }
    return ussoAxios.set(q, this.path, params)
  }
}


