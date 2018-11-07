import { Funcion } from '../funcion/funcion';
import { Sala } from '../sala/sala';
import { Teatro } from './teatro';

export class TeatroDetail extends Teatro
{
   /**
    * Salas del teatro
    */
    salas: Sala[];
    
    /**
     * Funciones del teatro
     */
    funciones: Funcion[];  
}

