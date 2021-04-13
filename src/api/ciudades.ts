import api from "."

export const ciudades = {
    async getAll() {
        const { data } = await api.get('ciudades');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('ciudades', {params: {id}});
        return data;        
    }
}