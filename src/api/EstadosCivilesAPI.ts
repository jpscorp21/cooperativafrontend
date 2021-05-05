import api from "."
import { IEstadoCivil } from "../models/estado-civil-model";

export const EstadosCivilesAPI = {

    key: 'estado-civil-model',

    async getAll(params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages}: any = await api.get<IEstadoCivil[]>('estado-civil-model', {params});            
            
            return {items: data as IEstadoCivil[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return []
        }
    },

    async create(body: any) {
        try {            
            const { data }: any = await api.post<IEstadoCivil[]>('estado-civil-model', body);            
            
            return {items: data as IEstadoCivil[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update(body: any, id: string) {
        try {            
            await api.put<IEstadoCivil[]>('estado-civil-model/' + id, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove(id: string) {        
        await api.delete<IEstadoCivil[]>('estado-civil-model/' + id);            
        return true;
    },

    async getById(id: any) {
        const { data } = await api.get<IEstadoCivil>('estado-civil-model', {params: {id}});
        return data;        
    }
}