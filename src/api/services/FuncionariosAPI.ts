import { IFuncionario } from "../../models/funcionario-model";
import BackendAPI from "./BackendAPI";

export const FuncionariosAPI = BackendAPI<IFuncionario>('funcionarios');