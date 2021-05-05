import { Caja } from "./caja";

export interface ArqueoCaja {
    id?: string;
    codigo?: any;
    caja?: Caja;
    cajaId: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    observacion: string;
    estado: string;
    montoTotal: any;
    montoFin: any; 
    montoInicio: any;
}