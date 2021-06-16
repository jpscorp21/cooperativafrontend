import api from "..";

export const UsuariosAPI = {

    async getAll() {
        try {
            const { data } = await api.get(`auth/usuarios`);
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
    }
}