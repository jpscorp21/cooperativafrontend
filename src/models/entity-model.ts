export interface EntityWithDescripcion {
  id: string;
  descripcion: string;
  observacion: string;
}

export interface EntityPersona {
  id?: string | null;
  nombre: string;
  apellido: string;
  cedula: string;
  fechaNacimiento: Date;
}

export interface EntityPersonaAdd {
  nombre: string;
  apellido: string;
  cedula: string;
  fechaNacimiento: Date;
}
