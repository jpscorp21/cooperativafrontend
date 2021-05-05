import { IProfesion } from "../../models/profesion-model";
import BackendAPI from "./BackendAPI";

export const ProfesionesAPI = BackendAPI<IProfesion>('profesiones');