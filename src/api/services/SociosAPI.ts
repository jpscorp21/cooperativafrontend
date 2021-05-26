import api from "..";
import { ISocio } from "../../models/socio-model";
import BackendAPI from "./BackendAPI";

interface SociosRequests {
    count: () => any;
    existsNumeroSocio: (numeroSocio: any) => any;
}

export const SociosAPI = BackendAPI<ISocio, SociosRequests>('socios', {
  mapAll(data) {
    return data.map((item: any) => ({...item, nombre_completo: item.nombre + ' ' + item.apellido}));
  },
  requests: {
      
    async count() {
      try {
        const { data } = await api.get(`socios/count`);      
  
        return data;
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
    },
    async existsNumeroSocio(numeroSocio: any) {
      try {
        const { data } = await api.get(`socios`, {
          params: {
            numeroSocio
          }
        });
  
        return data;
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
    }
  }
});