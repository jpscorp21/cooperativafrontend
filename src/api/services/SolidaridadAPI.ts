import api from "..";
import { SolidaridadAcumular, SolidaridadAdd } from "../../models/solidaridad-model";
import BackendAPI from "./BackendAPI";

export const SolidaridadAPI = {
  key: 'solidaridad',

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
      const { data } = await api.get(`${this.key}/socios/${socioId}`);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error en el servidor");
    }
  },

  async getDetalleBySolidaridadId(solidaridadId: string) {
    try {
      const { data } = await api.get(`${this.key}/detalles/${solidaridadId}`);
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error en el servidor");
    }
  },

  async acumular(body: SolidaridadAcumular) {
    try {
      const { data } = await api.post(`${this.key}/acumular`, { ...body });
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error en el servidor");
    }
  }
}