import { ITipoCuenta } from "../../models/tipo-cuenta-model";
import BackendAPI from "./BackendAPI";

export const TiposCuentasAPI = BackendAPI<ITipoCuenta>('tiposcuentas');