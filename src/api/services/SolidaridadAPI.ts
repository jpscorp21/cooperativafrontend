import api from "..";
import { SolidaridadAcumular, SolidaridadAdd } from "../../models/solidaridad-model";
import { BaseAPI } from "./BaseAPI";

export const SolidaridadAPI = {
  key: 'solidaridad',

  async getAll(params: {searchQuery?: string, pageNumber?: number, pageSize?: number}) {
		try {
			const res = await BaseAPI.getAll<any>('solidaridad', params);
			return {...res, items: res.items};
		} catch (e) {
			console.log(e);
			throw new Error("Error en el servidor");
		}
	},

  async add(body: SolidaridadAdd) {
    try {
      const { data } = await api.post(this.key, body);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error en el servidor");
    }
  },

  async getSolidaridadBySocio(socioId: string) {
    try {

      if (!socioId) {
        return;
      }

      const { data } = await api.get(`solidaridad/socios/${socioId}`);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error en el servidor");
    }
  },

  async getDetalleBySolidaridadId(solidaridadId: string) {
    try {
      if (!solidaridadId) {
        return;
      }

      const { data } = await api.get(`solidaridad/detalles/${solidaridadId}`);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error en el servidor");
    }
  },

  async acumular(body: SolidaridadAcumular) {
    try {
      const { data } = await api.post(`solidaridad/acumular`, { ...body });
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error en el servidor");
    }
  }
}