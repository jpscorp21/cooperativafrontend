import { IModalidadPago } from './modalidad-pago-model';

export interface ITipoCredito {
  id?: string;
  descripcion: string;
  observacion: string;
  plazoMax: number;
  plazoMin: number;
  tasa: number;
  modalidadPagoId: string;
  modalidadPago?: IModalidadPago;
}
