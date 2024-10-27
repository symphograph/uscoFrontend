import { QVueGlobals } from "quasar";
import { api } from "boot/axios";
import { notifyError, notifyOK } from "src/js/myFuncts";

// Абстрактный класс с общим статическим методом set
export abstract class BaseAxios {
  protected static getApiUrl(path: string): string {
    throw new Error("Метод getApiUrl должен быть переопределён в подклассах.");
  }

  public static async set(q: QVueGlobals, path: string, params: any, errMsg?: string): Promise<boolean> {
    const url = this.getApiUrl(path);
    try {
      const response = await api.post(url, { params });
      if (!response?.data?.result) throw new Error(errMsg);

      q.notify(notifyOK());
      return true;
    } catch (error) {
      q.notify(notifyError(error, errMsg));
      return false;
    }
  }

  public static async getList(q: QVueGlobals, path: string, params: any, errMsg?: string): Promise<any[]>  {
    const url = this.getApiUrl(path);
    try {
      const response = await api.post(url, { params });
      if (!response?.data?.result) throw new Error(errMsg);

      return response.data.data;
    } catch (error) {
      q.notify(notifyError(error, errMsg));
      return [];
    }
  }

  public static async get(q: QVueGlobals, path: string, params: any, errMsg?: string): Promise<any>  {
    const url = this.getApiUrl(path);
    try {
      const response = await api.post(url, { params });
      if (!response?.data?.result) throw new Error(errMsg);

      return response.data.data;
    } catch (error) {
      q.notify(notifyError(error, errMsg));
      return false;
    }
  }
}

// Класс для работы с API USSO
export class ussoAxios extends BaseAxios {
  static getApiUrl(path: string): string {
    return String(process.env.API) + path;
  }
}

// Класс для работы с API Staff
export class staffAxios extends BaseAxios {
  static getApiUrl(path: string): string {
    return String(process.env.apiStaff) + path;
  }
}
