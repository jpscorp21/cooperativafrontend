import { IDeclaracionJurada } from "../../models/declaracion-jurada-model";
import BackendAPI from "./BackendAPI";

export const DeclaracionJuradaAPI = BackendAPI<IDeclaracionJurada>('declaracionjurada');