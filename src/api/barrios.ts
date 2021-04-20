import api from "."

export const barrios = {
    async getAll() {
        const { data } = await api.get('barrios');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('barrios', {params: {id}});
        return data;        
    }
}