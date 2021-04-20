export interface SolidaridadAdd {
  socioId: string,
  saldo: number
}

export interface SolidaridadAcumular {
  id?: string;
  solidaridadId: string,
  importe: number
}