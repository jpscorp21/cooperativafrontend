import api from "..";
import { IFactura } from "../../models/factura-model";
import BackendAPI from "./BackendAPI";

interface FacturasRequests {
    getUltimaFactura() : Promise<IFactura | undefined>;
}

export const FacturasAPI = BackendAPI<IFactura, FacturasRequests>('facturas', {requests: {
    async getUltimaFactura() {
        try {
          const { data } = await api.get<IFactura>(`facturas`, {params: {
            pageSize: 1,
          }});
    
          if (data && Array.isArray(data) && data.length) {
            return data[0] as IFactura;
          }
          
        } catch (e) {
          console.log(e);
          throw new Error("Error en el servidor");
        }
      }
}});

