import api from "..";
import { CajaAhorroVistaAdd } from "../../models/caja-ahorro-vista-model";
import { BaseAPI } from "./BaseAPI";

export const CajaAhorroVistaAPI = {
    key: 'cajaahorrovista',

     async count() {
        try {
          const { data } = await api.get(`${this.key}/count`);      
          return data;
        } catch (e) {
          console.log(e);
          throw new Error("Error en el servidor");
        }
      },
    
    async ultimos() {
    try {
        const { data } = await api.get(`${this.key}/detalles/ultimos`);      

        if (data && Array.isArray(data)) {
        return data;
        }
        throw new Error('Error en el servidor')
    } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
    }
    },

    async add(body: CajaAhorroVistaAdd) {
        return BaseAPI.create(this.key, body);
    },

    async getCajaAhorroVistaBySocio(id: any) {
        try {
            if (!id) {
                return;
            }
            const { data } = await api.get(`${this.key}/socios/${id}`);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async getDetallesByCajaAhorroId(id: any) {
        try {

            if (!id) {
                return;
            }

            const { data } = await api.get(`${this.key}/detalles/${id}`);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async depositar(body: any, id: any) {
        try {
            const { data } = await api.post(`${this.key}/depositar/${id}`, body);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },

    async retirar(body: any, id: any) {
        try {
            const { data } = await api.post(`${this.key}/retirar/${id}`, body);
            return data;
        } catch (e) {
            console.log(e);
            throw new Error("Error en el servidor");
        }
    },
}