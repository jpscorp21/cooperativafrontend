import { IPuestoLaboral } from "../../models/puesto-laboral-model";
import BackendAPI from "./BackendAPI";

export const PuestosLaboralesAPI = BackendAPI<IPuestoLaboral>('puestoslaborales');