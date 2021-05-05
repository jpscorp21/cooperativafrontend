import { ICuenta } from "../../models/cuenta-model";
import BackendAPI from "./BackendAPI";

export const CuentasAPI = BackendAPI<ICuenta>('cuentas');