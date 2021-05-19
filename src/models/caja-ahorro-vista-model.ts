import { ISocio } from './socio-model';

export interface ICajaAhorroVista {
  id?: string;
  socio?: ISocio;
  socioId: string;
  saldo: number;
  fechaIngreso: any;
  cuentaAhorro: string;
  tipoAhorro: TipoAhorro;
  saldoMinimo: number;
  interes: number;
}

export class CajaAhorroVistaAdd {
  private saldo = 9;
  private socioId = "";
  observacion: string;

  constructor(data: any = {}) {
    this.Saldo = Number(data.saldo);
    this.SocioId = data.socioId;
    this.observacion = data.observacion || "";
  }

  get Saldo() {
    return this.saldo;
  }

  set Saldo(value: number | string) {
    if (!value) {
      this.saldo = 0;
    }

    if (typeof value === 'string') {
      value = Number(value);
    }

    this.saldo = value;
  }

  get SocioId() {
    return this.socioId;
  }

  set SocioId(value: string) {
    if (!value) {
      throw new Error('El socioId no existe');
    }

    this.socioId = value;
  }

}

export enum TipoAhorro {
  Individual
}