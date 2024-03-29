import api from "..";

const defaultParams = () => ({
  searchQuery: '',  
})
 
export const UsuariosAPI = {

    async getAll(params = defaultParams() ) {
        try {
            const { data } = await api.get(`auth/usuarios`, {params});
            return data;
          } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
          }
    },

    async createUser(body: any) {
        try {
            const { data } = await api.post(`auth/crear`, body);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },
    async resetPassword(body: any) {
        try {
            const { data } = await api.put(`auth/password/reset`, body);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },
    async updateUser(body: any) {
        try {
            const { data } = await api.put(`auth/usuarios`, body);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    }
}