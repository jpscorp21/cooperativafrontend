import api from "."

export const tipocuentas = {
    async getAll() {
        const { data } = await api.get('tipocuentas');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('tipocuentas', {params: {id}});
        return data;        
    }
}