import { ITipoGarantia } from "../../models/tipo-garantia-model";
import BackendAPI from "./BackendAPI";

export const TipoGarantiaAPI = BackendAPI<ITipoGarantia>('tipogarantia');