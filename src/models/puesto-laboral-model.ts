import { EntityWithDescripcion } from './entity-model';
import { IProfesion } from './profesion-model';

/**
 * Modelo Puesto Laboral
 */
export interface IPuestoLaboral extends EntityWithDescripcion {
  profesion?: IProfesion;
  profesionId: string;
}
