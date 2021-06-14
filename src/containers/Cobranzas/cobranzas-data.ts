import { ICobranzaDetalle } from "../../models/cobranza-model";
import { sociosInitialForm } from "../Socios/socios-data";

export const cobranzaInitialDetalle: any = () => ({
  monto: 0,
  montoCuota: 0,    
  numItem: 0,
  concepto: {
    descripcion: ''
  },
  conceptoId: '',    
  cuota: 0,
  descripcion: '',
  planCuentaId: '',
  cobranzaId: '', 
  mostrarImporte: false    
})

export const cobranzaInitialForm = () => ({
  id: null as any,
  socio: sociosInitialForm(), 
  socioId: "",
  fecha: new Date(),
  facturaId: "",
  nroFactura: 0,
  montoTotal: 0,
  observacion: "",
  total: 0,
  vuelto: 0,  
  detalle: cobranzaInitialDetalle(),  
  detalles: [] as ICobranzaDetalle[]
});

export const createDetalleForSave = (cobranza: any, detalle: any) => ({
  descripcion: detalle.descripcion || '',
  concepto: detalle.concepto || '',
  conceptoId: detalle.conceptoId || '',
  planCuentaId: detalle.planCuentaId || '',
  monto: Number(detalle.monto) || 0,
  montoCuota: Number(detalle.montoCuota) || 0,
  cuota: Number(detalle.cuota) || 0,
})

export const sumaMontoTotal = (detalles: any[]) => {
  return detalles.reduce((actual: number, siguiente: any) => {
    return Number(siguiente.monto) + actual;
  }, '0')
}

export const createCobranzaForSave = (cobranza: any) => ({
  socioId: cobranza.socioId || '',
  montoTotal: sumaMontoTotal(cobranza.detalles),
  nroFactura: cobranza.nroFactura | 0,
  observacion: '',
  detalles: cobranza.detalles.map((detalle: any) => createDetalleForSave(cobranza, detalle))

})

