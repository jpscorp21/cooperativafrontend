import api from "..";

const url = 'pagare';

export const PagareAPI = {
    async getDeudasById(id = "") {
        try {
            const { data } = await api.get(`${url}/${id}/deudas`);
            return data;
          } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
          }
    }
}