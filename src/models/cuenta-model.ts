import { EntityWithDescripcion } from './entity-model';
import { ITipoCuenta } from './tipo-cuenta-model';

/**
 * Modelo Puesto Laboral
 */
export interface ICuenta extends EntityWithDescripcion {
  tipoCuenta?: ITipoCuenta;
  tipoCuentaId: string;
}
