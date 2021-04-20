import { ITimbrado } from "./timbrado-model";

/**
 * Modelo Factura
 */
export interface IFactura {
  id: string;
  codigo: number;
  nroDesde: number;
  nroHasta: number;
  ultimoNro: number;
  codigoEstablecimiento: number;
  codigoExpedicion: number;
  timbradoId: string;
  timbrado?: ITimbrado;
  observacion: string;
}
