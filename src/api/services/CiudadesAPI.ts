import { Ciudades } from "../../models/ciudades";
import BackendAPI from "./BackendAPI";

export const CiudadesAPI = BackendAPI<Ciudades>('ciudades');
