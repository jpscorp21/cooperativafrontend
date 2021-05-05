import { ITimbrado } from "../../models/timbrado-model";
import BackendAPI from "./BackendAPI";

export const TimbradosAPI = BackendAPI<ITimbrado>('timbrados');