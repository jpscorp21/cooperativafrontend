import api from "."
import { Ciudades } from "../models/ciudades";

export const CiudadesAPI = {
async getAll() {
        const { data } = await api.get<Ciudades[]>('ciudades');
        return data;
    },

    async getById(id: any) {
        const { data } = await api.get<Ciudades>('ciudad', {params: {id}});
        return data;        
    }
}