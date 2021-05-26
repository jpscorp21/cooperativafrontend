import { BaseAPI } from "./BaseAPI";

interface BackendAPIProps<T = unknown> {
    requests?: T;
    mapAll?(data: any): any;
    mapId?(data: any): any;
}

const BackendAPI = <T, W = unknown>(key: string, options?: BackendAPIProps<W>) => ({
    key,

    async getAll(params: {searchQuery?: string, pageNumber?: number, pageSize?: number}) {
        const res = await BaseAPI.getAll<T>(key, params);
        return options?.mapAll ? {...res, items: options.mapAll(res.items)} : res;
    },
    
    async getById(id: any) {        
        const res = await BaseAPI.getById<T>(key, id);       
        return options?.mapId ? options.mapId(res) : res;
    },

    async create(body: any) {
        return await BaseAPI.create<T>(key, body);        
    },

    async update(body: any, id: string) {
        return await BaseAPI.update<T>(key, body, id);        
    },

    async remove(id: string) {        
        return await BaseAPI.remove<T>(key, id);
    },

    

    ...options?.requests as W
})

export default BackendAPI;