import api from "."

export const socios = {
    async getAll() {
        const { data } = await api.get('socios');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('socios', {params: {id}});
        return data;        
    }
}