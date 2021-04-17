import api from "."

export const puestoslaborales = {
    async getAll() {
        const { data } = await api.get('puestoslaborales');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('puestoslaborales', {params: {id}});
        return data;        
    }
}