import api from "."

export const cuentas = {
    async getAll() {
        const { data } = await api.get('cuentas');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('cuentas', {params: {id}});
        return data;        
    }
}