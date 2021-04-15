import api from "."

export const estadosciviles = {
    async getAll() {
        const { data } = await api.get('estadosciviles');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get('estadosciviles', {params: {id}});
        return data;        
    }
}