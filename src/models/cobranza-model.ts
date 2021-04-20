import { IConcepto } from "./concepto-model";

/**
 * Modelo Cobranza
 */
export interface ICobranza {
  id: string;
  codigo: number;
  fechaCobro: Date;
  montoTotal: number;  
  anulado: boolean;
  tipoPago: string;
  formaPago: string;
  nroFactura: number;
  facturaId: string;
  socioId: string;
  observacion: string;  
  detalles?: ICobranzaDetalle[];
}

export interface ICobranzaDetalle {
  id: string;
  idDetalle?: string;
  codigo: number;
  monto: number;
  montoCuota: number;
  numItem: number;
  cuota: number;
  descripcion: string;
  planCuentaId: string;
  cobranzaId: string;
  cobranza?: ICobranza;
  conceptoId: string;
  concepto?: IConcepto;
  observacion: string;
  mostrarImporte: boolean;
}
