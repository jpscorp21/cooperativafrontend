import { IDesembolsoCredito } from "../../models/desembolso-credito-model";
import BackendAPI from "./BackendAPI";

export const DesembolsoCreditoAPI = BackendAPI<IDesembolsoCredito>('desembolsocredito')