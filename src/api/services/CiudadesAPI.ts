import api from "..";
import { Ciudades } from "../../models/ciudades";
import BackendAPI from "./BackendAPI";

interface CiudadesAPIRequests {
    getBarriosByCiudadId: any;
}

export const CiudadesAPI = BackendAPI<Ciudades, CiudadesAPIRequests>('ciudades', {
    requests: {
        async getBarriosByCiudadId(id: string) {
            if (!id) {
                return [];
            }            
            const {data} = await api.get(`ciudades/${id}/barrios`);
            return {items: data || []};
        }
    }
});
