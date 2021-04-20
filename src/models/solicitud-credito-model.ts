export interface ISolicitudCredito {
  id: string | null;
  socioId: string;
  modalidadPagoId: string;
  tipoSolicitudId: string;
  tipoGarantiaId: string;
  funcionarioId: string;
  tipoCreditoId: string;
  desembolsoCreditoId: string;
  importe: string;
  plazo: string;
  fechaPrimerPago: Date;
  observacion: string;
}
