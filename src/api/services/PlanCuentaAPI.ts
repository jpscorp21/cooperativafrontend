import api from "..";

export const PlanCuentaAPI = {
    key: 'plancuenta',

    async getPlanCuentaDetalleBySocio(params: any) : Promise<any[]> {
        try {
          const { data } = await api.get(`${this.key}/detalle`, {params});
          
          if (data && Array.isArray(data)) {
            return data;      
          }
    
          throw new Error('Error en el servidor');
          
        } catch (e) {
          console.log(e);
          throw new Error("Error en el servidor");
        }
      }
}