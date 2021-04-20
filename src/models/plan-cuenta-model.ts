import { IConcepto } from "./concepto-model";
import { ISocio } from "./socio-model";

/**
 * Modelo Plan Cuenta
 */
export interface IPlanCuenta {
  id: string;
  codigo: number;
  socioId: string;
  socio?: ISocio;
  conceptoId: string;
  concepto?: IConcepto;
  observacion: string;
}
