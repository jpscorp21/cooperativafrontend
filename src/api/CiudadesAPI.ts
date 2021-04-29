import api from "."
import { Ciudades } from "../models/ciudades";

export const CiudadesAPI = {

    key: 'ciudades',

    async getAll(params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages}: any = await api.get<Ciudades[]>('ciudades', {params});            
            
            return {items: data as Ciudades[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return []
        }
    },

    async create(body: any) {
        try {            
            const { data }: any = await api.post<Ciudades[]>('ciudades', body);            
            
            return {items: data as Ciudades[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update(body: any, id: string) {
        try {            
            await api.put<Ciudades[]>('ciudades/' + id, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove(id: string) {        
        await api.delete<Ciudades[]>('ciudades/' + id);            
        return true;
    },

    async getById(id: any) {
        const { data } = await api.get<Ciudades>('ciudad', {params: {id}});
        return data;        
    }
}