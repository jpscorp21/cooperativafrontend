import { ICuenta } from './cuenta-model';

// comercial, personal
export type ReferenciaTipo = 'COM' | 'PER';

export interface IDeclaracionJurada {
  id?: string;
  socioId: string;
  vehiculos: IVehiculo[];
  inmuebles: IInmueble[];
  garantiasInstituciones: IGarantiaInstitucion[];
  referencias: IReferencia[];
  diarios: IDiario[];
}

export interface IVehiculo {
  id?: null | string;
  marca: string;
  chapa: string;
  modelo: string;
  municipio: string;
  valorActual: number;
  cuota: number;
  saldo: number;
  prendado: boolean;
  observacion: string;
}

export interface IInmueble {
  id?: null | string;
  ubicacion: string;
  numeroFinca: number;
  cuentaCorrienteCatastral: string;
  distrito: number;
  escritura: boolean;
  hipotecado: boolean;
  vencimiento: Date;
  valor: number;
  cuota: number;
  saldo: number;
  pago: number;
  lugarHipoteca: string;
  valorTasacion: number;
  observacion?: string;
}

export interface IReferencia {
  id?: null | string;
  nombre: string;
  direccion: string;
  telefono: string;
  fuente: string;
  observacion: string;
  tipo: ReferenciaTipo;
}

export interface IGarantiaInstitucion {
  id?: null | string;
  socioTitular: string;
  numeroCredito: string;
  importe: number;
  plazo: number;
  proxVencimiento: Date;
  cuota: number;
  saldo: number;
  observacion: string;
}

export interface IDiario {
  id?: string | null;
  cuentaId: string;
  declaracionJuradaId?: string;
  tipoCuentaId?: string;
  cuenta?: ICuenta;
  cuentaText?: string;
  monto: number;
}
