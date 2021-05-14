import api from "..";
import { IProfesion } from "../../models/profesion-model";
import BackendAPI from "./BackendAPI";

interface ProfesionesAPIRequests {
    getPuestosByProfesionId: any;
}

export const ProfesionesAPI = BackendAPI<IProfesion, ProfesionesAPIRequests>('profesiones', {
    requests: {
        async getPuestosByProfesionId(id: string) {
            if (!id) {
                return [];
            }            
            const {data} = await api.get(`profesiones/${id}/puestoslaborales`);
            return {items: data || []};
        }
    }
});