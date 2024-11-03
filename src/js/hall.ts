import { api } from 'boot/axios';
import { notifyError, notifyOK } from 'src/js/myFuncts.js';
import { QVueGlobals } from 'quasar';
import { Ref } from 'vue';
import {Suggest} from "src/js/ya";
import {ussoAxios} from "src/js/myAxios";

export class Hall {

  static List: Ref<Hall[]>;
  static path: string = 'epoint/hall.php'

  id = -1;
  name = 'Новый зал';
  suggestId = 0;
  suggest: any;

  constructor({
                id = -1,
                name = 'Новый зал',
                suggestId = 0,
                suggest
              }: Partial<Hall> = {}) {
    this.id = id;
    this.name = name;
    this.suggestId = suggestId;
    this.suggest = suggest
  }

  async save(q: QVueGlobals): Promise<boolean> {
    const url = ussoAxios.getApiUrl(Hall.path);
    const params = {
      method: this.id > 0 ? 'update' : 'add',
      id: this.id,
      name: this.name,
      suggestId: this.suggestId
    };
    try {
      const response = await api.post(url, { params });

      if (!response?.data?.result) throw new Error();

      this.id = response.data.data.id;
      q.notify(notifyOK());
      return true;
    } catch (error) {
      q.notify(notifyError(error));
      return false;
    }
  }

  async del(q: QVueGlobals): Promise<boolean> {
    const url = ussoAxios.getApiUrl(Hall.path);

    const params = {
      method: 'del',
      id: this.id
    };
    const errMsg = 'Объект не удалился'
    const result = await ussoAxios.set(q,Hall.path,params,errMsg);
    if(result){
      Hall.List.value = Hall.List.value.filter((el) => el.id !== this.id)
      return true
    }
    return false
  }

  public getMapHref(): string {
    const oid = this.suggest?.oid ?? 0
    return Suggest.getMapUrl(oid)
  }

  static async getList(q: QVueGlobals): Promise<Hall[]> {
    const params = {
      method: 'list'
    };
    const errMsg = 'Список залов не загрузился'
    const result = await ussoAxios.getList(q, this.path, params, errMsg)
    return result.map((hallData: any) => {
      return new Hall({
        id: hallData.id,
        name: hallData.name,
        suggestId: hallData.suggestId,
        suggest: hallData.suggest
      });
    })
  }

  static findById(id: number): Hall {
    return this.List.value.find((el) => el.id === id) || new Hall()
  }
}
