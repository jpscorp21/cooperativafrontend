import { INacionalidad } from './nacionalidad-model';
import { IEstadoCivil } from './estado-civil-model';
import { EntityPersona, EntityPersonaAdd } from './entity-model';
import { Barrios } from './barrios';
import { IProfesion } from './profesion-model';
import { IPuestoLaboral } from './puesto-laboral-model';

/**
 * Modelo Socio
 */
export interface ISocio {
  id?: string;
  nombre: string;
  apellido: string;
  fecha: Date;
  fechaNacimiento: Date;
  cedula: string;
  ruc: string;
  lugar: string;
  numeroHijo: number;
  estadoCivilId: string;
  estadoCivil?: IEstadoCivil;
  nacionalidadId: string;
  nacionalidad?: INacionalidad;
  sexo: string;
  formacionAcademica: boolean;
  gradoAcademico: string;
  conyugue?: IConyugue;
  conyugueId: string | null;
  direccionParticular: IDireccion;
  direccionParticularId: string | null;
  esEmpleado: boolean;
  profesionId: string;
  profesion?: IProfesion;
  nombreEmpresa: string;
  actividadEmpresa: string;
  antiguedad: string;
  puestoLaboralId: string;
  puestoLaboral?: IPuestoLaboral;
  ingresoMensual: number;
  otroIngreso: boolean;
  otroMonto: number;
  otroConcepto: string;
  domicilioLaboral: IDireccion;
  domicilioLaboralId: string | null;
  correspondencia: string; // Debe tener con id
  motivo: string;
  hijos: IHijo[];
  latitud: string;
  longitud: string;
}

export interface ISocioAdd {
  nombre: string;
  apellido: string;
  fecha: Date;
  fechaNacimiento: any;
  numeroSocio: any;
  cedula: string;
  ruc: string;
  lugar: string;
  numeroHijo: number;
  estadoCivilId: string;
  nacionalidadId: string;
  sexo: string;
  formacionAcademica: boolean;
  gradoAcademico: string;
  conyugue?: IConyugueAdd;
  direccionParticular: IDireccion;
  esEmpleado: boolean;
  profesionId?: string | null;
  nombreEmpresa: string;
  actividadEmpresa: string;
  antiguedad: number;
  puestoLaboralId?: string | null;
  ingresoMensual: number;
  otroIngreso: boolean;
  otroMonto: number;
  otroConcepto: string;
  domicilioLaboral: IDireccion;
  correspondencia: string; // Debe tener con id
  motivo: string;
  hijos: IHijoAdd[];
  latitud: string;
  longitud: string;
}

/**
 * Modelo Hijo
 */
export interface IHijo extends EntityPersona {
  socioId?: string;
}

export interface IHijoAdd extends EntityPersonaAdd {
  socioId?: string;
}

/**
 * Modelo Conyugue
 */
export interface IConyugue extends EntityPersona {
  lugar: string;
}

export interface IConyugueAdd extends EntityPersonaAdd {
  lugar: string;
}

/**
 * Modelo Direccion
 */
export interface IDireccion {
  calleYNumero: string;
  barrio?: Barrios;
  barrioId?: string | null;
  ciudadId?: string | null;
  telefono?: string;
  correo?: string;
  celular?: string; 
  casaPropia?: boolean;
  casaAlquilada?: boolean;
  casaFamiliar?: boolean;
  antiguedadDomicilio?: number;
}
