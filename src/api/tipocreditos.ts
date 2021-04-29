import api from "."

export const tipocreditos = {
    async getAll() {
        const { data } = await api.get('tipocreditos');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('tipocreditos', {params: {id}});
        return data;        
    }
}