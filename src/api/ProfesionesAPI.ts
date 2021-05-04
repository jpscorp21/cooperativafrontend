import api from "."
import { IProfesion } from "../models/profesion-model";

export const ProfesionesAPI = {

    key: 'profesion-model',

    async getAll(params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages}: any = await api.get<IProfesion[]>('profesion-model', {params});            
            
            return {items: data as IProfesion[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return []
        }
    },

    async create(body: any) {
        try {            
            const { data }: any = await api.post<IProfesion[]>('profesion-model', body);            
            
            return {items: data as IProfesion[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update(body: any, id: string) {
        try {            
            await api.put<IProfesion[]>('profesion-model/' + id, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove(id: string) {        
        await api.delete<IProfesion[]>('profesion-model/' + id);            
        return true;
    },

    async getById(id: any) {
        const { data } = await api.get<IProfesion>('profesion-model', {params: {id}});
        return data;        
    }
}