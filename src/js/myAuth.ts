interface jwtPayload {
  uid: number;
  powers: Array<number>;
  authType: string;
  // другие потенциальные поля...
}

interface explodedJWT {
  header: string;
  payload: jwtPayload;
  Signature: string;
}

export class myUser {
  static self: myUser;

  AccessToken: string;
  SessionToken: string;

  constructor(AccessToken: string, SessionToken: string) {
    this.AccessToken = AccessToken;
    this.SessionToken = SessionToken;
  }

  powers(): Array<number> {
    return myJWT.powers(this.AccessToken);
  }

  authType(): string {
    return myJWT.authType(this.AccessToken)
  }

  id(): number {
    return myJWT.userId(this.AccessToken)
  }


  isPermit(allowed: Array<number>): boolean
  {
    return allowed.some(l=>this.powers().includes(l))
  }
}


export class myJWT {
  static powers(jwt: string): Array<number> {
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

}
