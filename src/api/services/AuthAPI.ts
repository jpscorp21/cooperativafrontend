import { TokenResponse } from "../../models/auth-model"
import { IUsuarioLogin } from "../../models/usuario-model"
import api from ".."

export const AuthAPI = {
    async login(usuario: IUsuarioLogin) {
        const { data } = await api.post<TokenResponse>(`auth/login`, usuario);
        return data;
    }
}