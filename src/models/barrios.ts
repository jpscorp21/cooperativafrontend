import { EntityWithDescripcion } from './entity-model';
import { Ciudades } from './ciudades';

/**
 * Modelo Barrio
 */
export interface Barrios extends EntityWithDescripcion {
  ciudadId: string;
  ciudad: Ciudades;
}
