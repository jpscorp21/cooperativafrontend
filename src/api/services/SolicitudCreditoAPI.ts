import api from "..";
import { ISolicitudCredito } from "../../models/solicitud-credito-model";
import BackendAPI from "./BackendAPI";

export const defaultQueryString = (obj: any = {}) => ({
    pageNumber: obj.pageNumber || 1,
    pageSize: obj.pageSize || 10,
    orderBy: obj.orderBy || 'codigo',
    filters: obj.filters || '',
    fields: obj.fields || '',
    searchQuery: obj.searchQuery || '',
  });
  

const queryString = (obj: any = {}) => ({
    ...defaultQueryString(obj),
    estadoSolicitud: obj.estadoSolicitud || 'PEN',
    socioId: obj.socioId || null,
})

interface SolicitudCreditoAPIRequests {
    count(): any;
    getSolicitudCreditoBySocio(socioId: string): any;
    getPrestamoBySolicitudCreditoId(solicitudCreditoId: string): any;
    getSinPagarBySocioId(socioId: string): any;
    getPagosBySolicitudes(solicitudCreditoId: string): any;
    pagar(body: any): any;
    getAll(query?: any): any;
    cambiarEstado(body: { id: string, estadoSolicitud: string, codigo: any }): any;
}

const key = "solicitudcredito";

export const SolicitudCreditoAPI = BackendAPI<ISolicitudCredito, SolicitudCreditoAPIRequests>(key, {
    requests: {        
        async count() {
            try {
                const { data } = await api.get(`${key}/count`);      
    
                return data;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        },
    
        async getSolicitudCreditoBySocio(socioId: string) {
            try {
                const { data } = await api.get(`${key}/socios/${socioId}`);
                return data;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        },
    
        async getPrestamoBySolicitudCreditoId(solicitudCreditoId: string) {
            try {
                const { data } = await api.get(`${key}/prestamos/${solicitudCreditoId}`);
                return data;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        },
    
        async getSinPagarBySocioId(socioId: string) {
            try {
                const { data } = await api.get(`${key}/socios/${socioId}/pagos`);
                return data;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        },
    
        async getPagosBySolicitudes(solicitudCreditoId: string) {
            try {
                const { data } = await api.get(`${key}/pagos/${solicitudCreditoId}`);
                return data;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        },
    
        async pagar(body: any) {
            try {
                await api.put(`${key}/pagos/${body.id}`, body);
                return true;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        },
    
        async getAll(query: any = {}) {
            try {
                const { data } = await api.get(`${key}/`, { params: queryString(query) });
                return data;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        },
    
        async cambiarEstado(body: { id: string, estadoSolicitud: string, codigo: any }) {
            try {
                await api.put(`${key}/estado/${body.id}`, body);
                return true;
            } catch (e) {
                console.log(e);
                throw new Error("Error en el servidor");
            }
        }
    }
});