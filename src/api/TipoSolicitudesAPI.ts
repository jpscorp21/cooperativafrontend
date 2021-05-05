import api from "."
import { ITipoSolicitud } from "../models/tipo-solicitud-model";

export const TipoSolicitudesAPI = {

    key: 'tipo-solicitud-model',

    async getAll(params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages}: any = await api.get<ITipoSolicitud[]>('tipo-solicitud-model', {params});            
            
            return {items: data as ITipoSolicitud[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return []
        }
    },

    async create(body: any) {
        try {            
            const { data }: any = await api.post<ITipoSolicitud[]>('tipo-solicitud-model', body);            
            
            return {items: data as ITipoSolicitud[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update(body: any, id: string) {
        try {            
            await api.put<ITipoSolicitud[]>('tipo-solicitud-model/' + id, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove(id: string) {        
        await api.delete<ITipoSolicitud[]>('tipo-solicitud-model/' + id);            
        return true;
    },

    async getById(id: any) {
        const { data } = await api.get<ITipoSolicitud>('tipo-solicitud-model', {params: {id}});
        return data;        
    }
}