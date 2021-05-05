import { IEstadoCivil } from "../../models/estado-civil-model";
import BackendAPI from "./BackendAPI";

export const EstadosCivilesAPI = BackendAPI<IEstadoCivil>('estadosciviles')