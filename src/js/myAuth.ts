import {QVueGlobals} from "quasar";
import {authAxios} from "src/js/myAxios";
import {api} from "boot/axios";
import {notifyError} from "src/js/myFuncts";

interface jwtPayload {
  uid: number;
  powers: number[];
  authType: string;
  persId: number;
  // другие потенциальные поля...
}

interface explodedJWT {
  header: string;
  payload: jwtPayload;
  Signature: string;
}

export class myUser {
  static self: myUser = new myUser();

  AccessToken: string;
  SessionToken: string;

  constructor(AccessToken: string = '', SessionToken: string = '') {
    this.AccessToken = AccessToken;
    this.SessionToken = SessionToken;
  }

  powers(): number[] {
    return myJWT.powers(this.AccessToken);
  }

  authType(): string {
    return myJWT.authType(this.AccessToken)
  }

  id(): number {
    return myJWT.userId(this.AccessToken)
  }

  persId(): number {
    return myJWT.persId(this.AccessToken)
  }

  isPermit(allowed: number[]): boolean {
    if(!allowed.length) {
      return true
    }
    return allowed.some(l=>this.powers().includes(l))
  }
}


export class myJWT {
  static powers(jwt: string): number[] {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.powers ?? [];
  }

  static userId(jwt: string): number {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.uid ?? 0;
  }

  static getExploded(jwt: string): explodedJWT {

    let [Header, Payload, Signature] = jwt.split('.');

    return {
      header: Header,
      payload: JSON.parse(atob(Payload)),
      Signature: Signature
    };
  }

  static getPayload(jwt: string): jwtPayload {
    const exploded = this.getExploded(jwt);
    return exploded.payload;
  }

  static authType(jwt: string): string {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.authType;
  }

  static persId(jwt: string): number {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.persId;
  }

}

export class Auth {
  static async register(q: QVueGlobals): Promise<boolean> {

    const params = {
      method: 'register',
      authType: 'default'
    }
    const errMsg = 'auth err'

    const result = await authAxios.get(q, 'epoint/register.php', params, errMsg)

    if (!result) return false

    AccessToken.set(q, result.AccessToken)
    SessionToken.set(q, result.SessionToken)
    return true
  }
}

export class AccessToken {

  private static getName(){
    return String(process.env.AccessTokenName)
  }

  static set(q: QVueGlobals, value: string) {
    q.cookies.set(this.getName(), value, {
      expires: '1d',
      path: '/',
      sameSite: 'Strict',
      secure: true,
      httpOnly: false
    })

    api.defaults.headers.common['AccessToken'] = value
    myUser.self.AccessToken = value
  }

  static get(q: QVueGlobals) {
    return q.cookies.getAll()[this.getName()]
  }

  static async refresh(q: QVueGlobals) {
    const url = authAxios.getApiUrl('epoint/refresh.php')
    const params = {
      method: 'refresh',
        SessionToken: myUser.self.SessionToken,
        AccessToken: myUser.self.AccessToken
    }
    const errMsg = 'Ошибка при обновлении токена'

    return api.post(url, {params})
      .then((response) => {
        if (!response?.data?.result) {
          throw new Error(errMsg);
        }
        SessionToken.set(q, response?.data?.data.SessionToken)
        AccessToken.set(q, response?.data?.data.AccessToken)
        return true
      })
      .catch(async (error) => {
        if (error?.response?.status === 401) {
          return await Auth.register(q)
        }
        return false
      })
  }
}

export class SessionToken {

  private static getName(){
    return String(process.env.SessionTokenName)
  }

  static set(q: QVueGlobals, value: string) {
    q.cookies.set(this.getName(), value, {
      expires: '90d',
      path: '/',
      sameSite: 'Strict',
      secure: true,
      httpOnly: false
    })

    myUser.self.SessionToken = value
  }

  static get(q: QVueGlobals) {
    return q.cookies.getAll()[this.getName()]
  }
}
