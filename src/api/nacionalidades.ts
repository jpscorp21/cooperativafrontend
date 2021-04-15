import api from "."

export const nacionalidades = {
    async getAll() {
        const { data } = await api.get('nacionalidades');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('nacionalidades', {params: {id}});
        return data;        
    }
}