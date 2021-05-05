import { IModalidadPago } from "../../models/modalidad-pago-model";
import BackendAPI from "./BackendAPI";

export const ModalidadPagoAPI = BackendAPI<IModalidadPago>('modalidadpago');