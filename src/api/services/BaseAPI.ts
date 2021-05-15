import api from "..";

export const BaseAPI = {
    async getAll<T>(key: string, params: any) {
        try {            
            const { data, currentPage, pageSize, totalPages }: any = await api.get<T[]>(key, {params});            
            
            return {items: data as T[], currentPage, pageSize, totalPages } as any;
        } catch(e) {
            return [] 
        }
    },

    
    async getById<T>(key: string, id: any) {

        if (!id) {
            return;
        }

        const { data } = await api.get<T>(`${key}/${id}`);
        return data;        
    },

    async create<T>(key: string, body: any) {
        try {            
            const { data }: any = await api.post<T[]>(key, body);            
            
            return {items: data as T[] };
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async update<T>(key: string, body: any, id: string) {
        try {            
            await api.put<T[]>(`${key}/${id}`, body);            
            
            return {items: body};
        } catch(e) {
            console.log(e);
            throw new Error(e);            
        }
    },

    async remove<T>(key: string, id: string) {        
        await api.delete<T[]>(`${key}/${id}`);            
        return true;
    },

}