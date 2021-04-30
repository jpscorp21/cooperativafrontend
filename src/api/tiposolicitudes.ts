import api from "."

export const tiposolicitudes = {
    async getAll() {
        const { data } = await api.get('tiposolicitudes');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('tiposolicitudes', {params: {id}});
        return data;        
    }
}