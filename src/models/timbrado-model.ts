/**
 * Modelo Timbrado
 */
export interface ITimbrado {
  id: string;
  codigo: number;
  nroTimbrado: string;
  fechaInicio: Date | string;
  fechaFin: Date | string;
  observacion: string;
}
