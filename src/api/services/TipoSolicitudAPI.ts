import { ITipoSolicitud } from "../../models/tipo-solicitud-model";
import BackendAPI from "./BackendAPI";

export const TipoSolicitudAPI = BackendAPI<ITipoSolicitud>('tiposolicitud');