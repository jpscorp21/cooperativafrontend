import api from "."
import { ITipoCredito } from "../models/tipo-credito-model";

export const TipoCreditosAPI = {

    key: 'tipo-credito-model',

    async getAll(params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages}: any = await api.get<ITipoCredito[]>('tipo-credito-model', {params});            
            
            return {items: data as ITipoCredito[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return []
        }
    },

    async create(body: any) {
        try {            
            const { data }: any = await api.post<ITipoCredito[]>('tipo-credito-model', body);            
            
            return {items: data as ITipoCredito[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update(body: any, id: string) {
        try {            
            await api.put<ITipoCredito[]>('tipo-credito-model/' + id, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove(id: string) {        
        await api.delete<ITipoCredito[]>('tipo-credito-model/' + id);            
        return true;
    },

    async getById(id: any) {
        const { data } = await api.get<ITipoCredito>('tipo-credito-model', {params: {id}});
        return data;        
    }
}