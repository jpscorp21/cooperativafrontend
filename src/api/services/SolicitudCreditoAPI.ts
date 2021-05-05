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

export const SolicitudCreditoAPI = {
    key: 'solicitudcredito',

    async count() {
        try {
            const { data } = await api.get(`${this.key}/count`);      

            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async getSolicitudCreditoBySocio(socioId: string) {
        try {
            const { data } = await api.get(`${this.key}/socios/${socioId}`);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async getPrestamoBySolicitudCreditoId(solicitudCreditoId: string) {
        try {
            const { data } = await api.get(`${this.key}/prestamos/${solicitudCreditoId}`);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async getSinPagarBySocioId(socioId: string) {
        try {
            const { data } = await api.get(`${this.key}/socios/${socioId}/pagos`);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async getPagosBySolicitudes(solicitudCreditoId: string) {
        try {
            const { data } = await api.get(`${this.key}/pagos/${solicitudCreditoId}`);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async pagar(body: any) {
        try {
            await api.put(`${this.key}/pagos/${body.id}`, body);
            return true;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async getAll(query: any = {}) {
        try {
            const { data } = await api.get(`${this.key}/`, { params: queryString(query) });
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async cambiarEstado(body: { id: string, estadoSolicitud: string, codigo: any }) {
        try {
            await api.put(`${this.key}/estado/${body.id}`, body);
            return true;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    }
}