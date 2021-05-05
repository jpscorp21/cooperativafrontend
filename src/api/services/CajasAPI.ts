import { Caja } from "../../models/caja";
import BackendAPI from "./BackendAPI";

export const CajasAPI = BackendAPI<Caja>('cajas');
