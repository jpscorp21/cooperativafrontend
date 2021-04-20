export interface IUsuario {
  nombre: string;
  apellido: string;
  id: string;
  usuario: string;
  password?: string;
}

export interface IUsuarioLogin {
  usuario: string;
  password: string;
}

export interface IUsuarioCrear {
  usuario: string;
  email: string;
  password: string;
}
