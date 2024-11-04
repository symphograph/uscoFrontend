import {QVueGlobals} from "quasar";
import {ussoAxios} from "src/js/myAxios";
import {ImgBase, PhotoBase, SketchBase} from "src/js/img";

export class Entry {
  static path: string = 'epoint/news/entry.php'

  static async get(q: QVueGlobals, entryId: number): Promise<any> {

    const params = {
      method: 'get',
      entryId: entryId
    }
    const errMsg = 'Новость не загрузилась'

    return ussoAxios.get(q, this.path, params, errMsg)
  }

  static async create(q: QVueGlobals): Promise<any> {

    const params = {
      method: 'add',
    }
    const errMsg = 'Новость не создана'

    return ussoAxios.get(q, this.path, params, errMsg)
  }

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

  static async updateMarkdown(q: QVueGlobals, entryId: number, markdown: string): Promise<any> {

    const params = {
      method: 'updateMarkdown',
      entryId: entryId,
      markdown: markdown
    }
    const errMsg = 'Текст не обновился'

    return ussoAxios.get(q, this.path, params, errMsg)
  }

  static async update(q: QVueGlobals, entry: any): Promise<boolean> {

    const params = {
      method: 'update',
      entry: entry
    }
    const errMsg = 'Публикация не сохранилась'
    return ussoAxios.set(q, this.path, params, errMsg)
  }

}

export class Sketch extends SketchBase{
  static path: string = 'epoint/news/sketch.php'

  static getApiUrl() {
    return ussoAxios.getApiUrl(this.path)
  }
}

export abstract class Photo extends PhotoBase {
  static path: string = 'epoint/news/photo.php'

  static getApiUrl() {
    return ussoAxios.getApiUrl(this.path)
  }

  static sizeByDevice(q: QVueGlobals): number {
    return 1080
  }

  static async unlink(q: QVueGlobals, entryId: number, imgId: number): Promise<boolean> {
    const params = {
      method: 'unlink',
      entryId: entryId,
      imgId: imgId
    }
    return ussoAxios.set(q, this.path, params);
  }

  static async unlinkAll(q: QVueGlobals, entryId: number): Promise<boolean> {
    const params = {
      method: 'unlinkAll',
      entryId: entryId
    }
    return ussoAxios.set(q, this.path, params);
  }

  static async getList(q: QVueGlobals, entryId: number): Promise<Record<string, any>[]> {

    const params = {
      method: 'list',
      entryId: entryId
    }
    const errMsg: string = "Анонсы не загрузились"
    return ussoAxios.getList(q, this.path, params, errMsg)
  }
}

export abstract class PhotoPW extends Photo {
  static sizeByDevice(q: QVueGlobals): number {
    return 260
  }
}
