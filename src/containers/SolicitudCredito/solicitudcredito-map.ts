import { ISocio } from "../../models/socio-model";
import { ISolicitudCredito } from "../../models/solicitud-credito-model";
import { sociosInitialForm } from "../Socios/socios-data";

export const solicitudCreditoInitialForm = () => ({
    socioId: '',
    socio: sociosInitialForm(),
    modalidadPagoId: '',
    tipoSolicitudId: '',
    tipoGarantiaId: '',
    funcionarioId: '',
    tipoCreditoId: '',
    cajaAhorroVistaId: '',
    importe: '',
    codeudores: [],
    plazo: '',
    fechaPrimerPago: new Date().toISOString(),
    observacion: ''
}); 

export const solicitudCreditoMapForCreate = (data: ISolicitudCredito) => ({
    socioId: data.socioId || '',    
    modalidadPagoId: data.modalidadPagoId || null,
    tipoSolicitudId: data.tipoSolicitudId || '',
    tipoGarantiaId: data.tipoGarantiaId || '',
    tipoCreditoId: data.tipoCreditoId || '',    
    cajaAhorroVistaId: data.cajaAhorroVistaId || '', 
    importe: data.importe ? Number(data.importe) : 0,
    codeudores: data.codeudores ? data.codeudores.map(mapCodeudoresForCreate) : [],
    plazo: data.plazo ? Number(data.plazo) : 0,
    fechaPrimerPago: data.fechaPrimerPago,
    observacion: data.observacion || ''
});

export const mapCodeudoresForCreate = (codeudor: ISocio) => ({    
    socioId: codeudor.id    
})

export const mapSolicitudForUpdateEstado = (item: ISolicitudCredito, estado: string) => ({        
    id: item.id,
    estadoSolicitud: estado,
    codigo: item.codigo,      
})