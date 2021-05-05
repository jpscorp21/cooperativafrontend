import { INacionalidad } from "../../models/nacionalidad-model";
import BackendAPI from "./BackendAPI";

export const NacionalidadesAPI = BackendAPI<INacionalidad>('nacionalidades');