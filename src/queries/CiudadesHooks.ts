import { useMutation, useQuery } from "react-query";
import { CiudadesAPI } from "../api/CiudadesAPI";

const CiudadesHooks = {
    useCiudades: (params: any) => {
        return useQuery(['ciudades', params], () => CiudadesAPI.getAll(params), {keepPreviousData: true});                         
    },
    useCiudadesPost: () => {
        return useMutation(CiudadesAPI.create);
    },    
    useCiudadesPut: () => {
        return useMutation((params: any) => CiudadesAPI.update(params.body, params.id));
    },    
    useCiudadesRemove: () => {
        return useMutation(CiudadesAPI.remove);
    }    
}

export default CiudadesHooks;