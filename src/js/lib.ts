import {QVueGlobals} from "quasar";
import {staffAxios} from "src/js/myAxios";
import {api} from "boot/axios";
import {notifyError} from "src/js/myFuncts";

export class Author {
  clonId = 0;
  fioEn = '';
  fioRu = '';
  iconUrl = '';
  id = 0;
  imslpId = 0;
  imslpLink = '';
  nameImslp = '';
  wikiId= 0;

  private static path: string = 'epoint/lib/author.php';

  static async get(q: QVueGlobals, authorId: number): Promise<any> {

    const params = {
      method: 'get',
      authorId: authorId
    }
    const errMsg = 'Автор не загрузился'

    return staffAxios.get(q, this.path, params, errMsg)
  }

}

export class Work {
  private static path: string = 'epoint/lib/work.php';

  static async get(q: QVueGlobals, workId: number): Promise<any> {

    const params = {
      method: 'get',
      workId: workId
    }
    const errMsg = 'Произведение не загрузилось'

    return staffAxios.get(q, this.path, params, errMsg)
  }

  static async del(q: QVueGlobals, workId: number): Promise<boolean> {
    const params = {
      method: 'del',
      workId: workId,
    }
    const errMsg = 'Не получилось удалить'

    return staffAxios.set(q, this.path, params)
  }

  static async add(q: QVueGlobals, work: Record<string, any>): Promise<boolean> {
    const params = {
      method: 'add',
      titleRu: work.titleRu,
      titleEn: work.titleEn,
      authorId: work.authorId
    }
    const errMsg: string = "Не сохранилось"

    return staffAxios.set(q, this.path, params, errMsg)
  }

  static async update(q: QVueGlobals, work: Record<string, any>): Promise<boolean> {
    const params = {
      method: 'update',
      titleRu: work.titleRu,
      titleEn: work.titleEn,
      workId: work.id,
      opus: work.opus
    }
    const errMsg: string = "Не сохранилось"

    return staffAxios.set(q, this.path, params, errMsg)
  }

  static async getListByAnnounce(q: QVueGlobals, announceId: number): Promise<any[]> {

    const params = {
      method: 'listByAnnounce',
      announceId: announceId
    }
    const errMsg: string = "Произведения не загрузились"
    return staffAxios.getList(q, this.path, params, errMsg)
  }

  static async getListByAuthor(q: QVueGlobals, authorId: number): Promise<any[]> {

    const params = {
      method: 'list',
      authorId: authorId
    }
    const errMsg: string = "Произведения не загрузились"
    return staffAxios.getList(q, this.path, params, errMsg)
  }

  static async linkToAnnounce(q: QVueGlobals, announceId: number, workId: number, partitions: Array<any>): Promise<boolean> {
    const params = {
      method: 'linkToAnnounce',
      announceId: announceId,
      workId: workId,
      partitions: partitions
    }

    return staffAxios.set(q, this.path, params)
  }

  static async unlinkFromAnnounce(q: QVueGlobals, announceId: number, workId: number, force: boolean = false): Promise<boolean> {
    const params = {
      method: 'unlinkFromAnnounce',
      announceId: announceId,
      workId: workId,
      force: force
    }

    return staffAxios.set(q, this.path, params)
  }

  static async moveSortInAnnounce(
    q: QVueGlobals,
    direction: 'up'|'down',
    workId: number,
    announceId: number
  ): Promise<boolean> {

    const params = {
      method: 'moveSortInAnnounce',
      direction: direction,
      workId: workId,
      announceId: announceId
    };

    return staffAxios.set(q, this.path, params)
  }

}

export class Partition {
  private static path: string = 'epoint/lib/partition.php';

  static async moveSort(q: QVueGlobals, direction: 'up'|'down', partitionId: number): Promise<boolean> {
    const params = {
      method: 'moveSort',
      direction: direction,
      partitionId: partitionId
    };

    return staffAxios.set(q, this.path, params)
  }

  static async del(q: QVueGlobals, partitionId: number): Promise<boolean> {
    const params = {
      method: 'del',
      id: partitionId,
    }

    return staffAxios.set(q, this.path, params)
  }

  static async save(q: QVueGlobals, partition: Record<string, any>): Promise<boolean> {
    const params = {
      method: partition.id ? 'update' : 'add',
        workId: partition.workId,
        title: partition.title,
        caption: partition.caption,
        num: partition.num,
        id: partition.id ?? undefined
    }
    const errMsg: string = "Раздел не сохранился"

    return staffAxios.set(q, this.path, params, errMsg)
  }

  static async getList(q: QVueGlobals, workId: number): Promise<any[]> {
    const params = {
      method: 'list',
      workId: workId
    }
    const errMsg: string = "Разделы не загрузились"

    return staffAxios.getList(q, this.path, params, errMsg)
  }

  static async getListByAnnounce(q: QVueGlobals, announceId: number): Promise<any[]> {

    const params = {
      method: 'listByAnnounce',
      announceId: announceId
    }
    const errMsg: string = "Разделы не загрузились"
    return staffAxios.getList(q, this.path, params, errMsg)
  }

  static async linkListToAnnounce(q: QVueGlobals, announceId: number, partitions: Array<number>): Promise<boolean> {
    const params = {
      method: 'linkListToAnnounce',
      announceId: announceId,
      partitions: partitions
    }

    return staffAxios.set(q, this.path, params)
  }
}

export class Video {
  private static path: string = 'epoint/lib/video.php';

  static async updateTitle(q: QVueGlobals, videoId: number, title: string): Promise<boolean> {
    const params = {
      method: 'updateTitle',
      videoId: videoId,
      title: title
    }

    return staffAxios.set(q, this.path, params)
  }

  static async linkToAnnounce(q: QVueGlobals, videoId: number, announce: any): Promise<boolean> {
    const params = {
      method: 'linkToAnnounce',
      videoId: videoId,
      announce: announce
    }

    return staffAxios.set(q, this.path, params)
  }

  static async getDescr(q: QVueGlobals, videoId: number): Promise<string> {

    const params = {
      method: 'getDescr',
      videoId: videoId
    }
    const errMsg: string = "Описание видео не загрузилось"
    const url = staffAxios.getApiUrl(this.path)
    try {
      const response = await api.post(url, { params });
      if (!response?.data?.result) throw new Error(errMsg);

      return response.data.data.str;
    } catch (error) {
      q.notify(notifyError(error, errMsg));
      return '';
    }
  }

  static async putDescrToVK(q: QVueGlobals, videoId: number): Promise<boolean> {
    const params = {
      method: 'putDescrToVK',
      videoId: videoId
    }

    return staffAxios.set(q, this.path, params)
  }

  static async updateAllFromVK(q: QVueGlobals): Promise<boolean> {
    const params = {
      method: 'updateAllFromVK'
    }
    const errMsg = 'Обновление не удалось'

    return staffAxios.set(q, this.path, params, errMsg)
  }

  static async get(q: QVueGlobals, videoId: number): Promise<any> {

    const params = {
      method: 'get',
      videoId: videoId
    }
    const errMsg = 'Видео не загрузилось'

    return staffAxios.get(q, this.path, params, errMsg)
  }

  static async getList(q: QVueGlobals): Promise<any[]> {

    const params = {
      method: 'list',
    }
    const errMsg: string = "Видеозаписи не загрузились"
    return staffAxios.getList(q, this.path, params, errMsg)
  }
}

export class TCode {
  private static path: string = 'epoint/lib/timecode.php';

  static async del(q: QVueGlobals, tCodeId: number): Promise<boolean> {
    const params = {
      method: 'del',
      tCodeId: tCodeId,
    }

    return staffAxios.set(q, this.path, params)
  }

  static async update(q: QVueGlobals, timeCode: any): Promise<boolean> {
    return timeCode.type === 'init'
      ? this.updateInit(q, timeCode.id, timeCode.start, timeCode.uLabel)
      : this.updateStart(q, timeCode.id, timeCode.start)
  }

  static async addInit(q: QVueGlobals, videoId: number, start: string, uLabel: string): Promise<boolean> {
    const params = {
      method: 'addInit',
      videoId: videoId,
      start: start,
      uLabel: uLabel
    }

    return staffAxios.set(q, this.path, params)
  }

  static async addWork(q: QVueGlobals, videoId: number, start: string, workId: number): Promise<boolean> {
    const params = {
      method: 'addWork',
      videoId: videoId,
      start: start,
      workId: workId
    }

    return staffAxios.set(q, this.path, params)
  }

  static async addPartition(q: QVueGlobals, videoId: number, start: string, partitionId: number): Promise<boolean> {
    const params = {
      method: 'addPartition',
      videoId: videoId,
      start: start,
      partitionId: partitionId
    }

    return staffAxios.set(q, this.path, params)
  }

  private static async updateStart(q: QVueGlobals, tCodeId: number, start: string): Promise<boolean> {
    const params = {
      method: 'updateStart',
      tCodeId: tCodeId,
      start: start
    }

    return staffAxios.set(q, this.path, params)
  }

  private static async updateInit(
    q: QVueGlobals,
    tCodeId: number,
    start: string,
    uLabel: string): Promise<boolean> {

    const params = {
      method: 'updateInit',
      tCodeId: tCodeId,
      start: start,
      uLabel: uLabel
    }

    return staffAxios.set(q, this.path, params)
  }

  static async getList(q: QVueGlobals, videoId: number): Promise<any[]> {
    const params = {
      method: 'list',
      videoId: videoId
    }
    const errMsg: string = "Таймкоды не загрузились"
    return staffAxios.getList(q, this.path, params, errMsg)
  }
}
