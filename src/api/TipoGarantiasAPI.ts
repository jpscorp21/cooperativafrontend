import api from "."
import { ITipoGarantia } from "../models/tipo-garantia-model";

export const TipoGarantiasAPI = {

    key: 'tipo-garantia-model',

    async getAll(params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages}: any = await api.get<ITipoGarantia[]>('tipo-garantia-model', {params});            
            
            return {items: data as ITipoGarantia[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return []
        }
    },

    async create(body: any) {
        try {            
            const { data }: any = await api.post<ITipoGarantia[]>('tipo-garantia-model', body);            
            
            return {items: data as ITipoGarantia[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update(body: any, id: string) {
        try {            
            await api.put<ITipoGarantia[]>('tipo-garantia-model/' + id, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove(id: string) {        
        await api.delete<ITipoGarantia[]>('tipo-garantia-model/' + id);            
        return true;
    },

    async getById(id: any) {
        const { data } = await api.get<ITipoGarantia>('tipo-garantia-model', {params: {id}});
        return data;        
    }
}