import { useQuery } from "react-query";
import { CiudadesAPI } from "../api/CiudadesAPI";

const CiudadesHooks = {
    useCiudades: () => {
        const {data: items} = useQuery('ciudades', CiudadesAPI.getAll);        
        return items;
    },    
}

export default CiudadesHooks;