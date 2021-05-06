import { ITipoCredito } from "../../models/tipo-credito-model";
import BackendAPI from "./BackendAPI";

export const TipoCreditoAPI = BackendAPI<ITipoCredito>('tipocredito');