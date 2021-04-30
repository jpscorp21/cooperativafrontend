import api from "."
import { INacionalidad } from "../models/nacionalidad-model";

export const NacionalidadAPI = {

    key: 'nacionalidad-model',

    async getAll(params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages}: any = await api.get<INacionalidad[]>('nacionalidad-model', {params});            
            
            return {items: data as INacionalidad[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return []
        }
    },

    async create(body: any) {
        try {            
            const { data }: any = await api.post<INacionalidad[]>('nacionalidad-model', body);            
            
            return {items: data as INacionalidad[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update(body: any, id: string) {
        try {            
            await api.put<INacionalidad[]>('nacionalidad-model/' + id, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove(id: string) {        
        await api.delete<INacionalidad[]>('nacionalidad-model/' + id);            
        return true;
    },

    async getById(id: any) {
        const { data } = await api.get<INacionalidad>('nacionalidad-model', {params: {id}});
        return data;        
    }
}