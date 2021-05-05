import { IPuestoLaboral } from "../../models/puesto-laboral-model";
import BackendAPI from "./BackendAPI";

export const PuestosLaboralessAPI = BackendAPI<IPuestoLaboral>('puestoslaborales');