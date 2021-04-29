import api from "."

export const modalidadpagos = {
    async getAll() {
        const { data } = await api.get('modalidadpagos');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('modalidadpagos', {params: {id}});
        return data;        
    }
}