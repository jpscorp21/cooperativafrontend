import api from "."

export const profesiones = {
    async getAll() {
        const { data } = await api.get('profesiones');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('profesiones', {params: {id}});
        return data;        
    }
}