import { BaseAPI } from "./BaseAPI";

const BackendAPI = <T, W = unknown>(key: string, options?: {requests?: W}) => ({
    key,

    async getAll(params: any) {
        return await BaseAPI.getAll<T>(key, params);
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

    async getById(id: any) {
        return await BaseAPI.getById<T>(key, id);       
    },

    ...options?.requests as W
})

export default BackendAPI;