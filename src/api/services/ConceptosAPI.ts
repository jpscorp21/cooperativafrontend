import { IConcepto } from "../../models/concepto-model";
import BackendAPI from "./BackendAPI";

export const ConceptosAPI = BackendAPI<IConcepto>('conceptos');