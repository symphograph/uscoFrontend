import { api } from 'boot/axios';
import { notifyError, notifyOK } from 'src/js/myFuncts.js';
import { QVueGlobals } from 'quasar';
import { Ref } from 'vue';

export class Hall {

  static List: Ref<Hall[]>;

  id = -1;
  name = 'Новый зал';
  //map = '';
  //address = '';
  suggestId = 0;
  suggest: any;

  constructor({
                id = -1,
                name = 'Новый зал',
                //map = '',
                //address = '',
                suggestId = 0,
                suggest
              }: Partial<Hall> = {}) {
    this.id = id;
    this.name = name;
    //this.map = map;
    //this.address = address;
    this.suggestId = suggestId;
    this.suggest = suggest
  }

  async save(q: QVueGlobals): Promise<boolean> {
    const url = String(process.env.API) + 'api/hall.php';
    const params = {
      method: this.id > 0 ? 'update' : 'add',
      id: this.id,
      name: this.name,
      //map: this.map,
      //address: this.address,
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
    const url = String(process.env.API) + 'api/hall.php';

    const params = {
      method: 'del',
      id: this.id
    };

    try {
      const response
        = await api.post(url, { params });

      if (!response?.data?.result) throw new Error();

      q.notify(notifyOK());
      Hall.List.value = Hall.List.value.filter((el) => el.id !== this.id)
      return true;
    } catch (error) {
      q.notify(notifyError(error));
      return false;
    }
  }

  static async getList(q: QVueGlobals): Promise<Hall[]> {
    const url = String(process.env.API) + 'api/hall.php';

    const params = {
      method: 'list'
    };

    try {
      const response = await api.post(url, { params });

      if (!response?.data?.result) {
        throw new Error('Список залов не загрузился');
      }

      // Преобразуем полученные данные в массив объектов класса Hall
      return response.data.data.map((hallData: any) => {
        return new Hall({
          id: hallData.id,
          name: hallData.name,
          //map: hallData.map,
          //address: hallData.address,
          suggestId: hallData.suggestId,
          suggest: hallData.suggest
        });
      });
    } catch (error) {
      q.notify(notifyError(error));
      return [];
    }
  }
}
