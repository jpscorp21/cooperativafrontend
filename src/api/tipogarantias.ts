import api from "."

export const tipogarantias = {
    async getAll() {
        const { data } = await api.get('tipogarantias');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('tipogarantias', {params: {id}});
        return data;        
    }
}