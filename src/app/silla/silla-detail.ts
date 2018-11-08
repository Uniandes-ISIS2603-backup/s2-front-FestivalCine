import { Silla } from './silla';
import { Sala } from '../sala/sala';
import { Reserva } from '../reserva/reserva';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class SillaDetail extends Silla
{
  
    
    /**
    * Salas dela funcion
    */
    salas: Sala[];
    
    
        /**
     * reserva de la silla
     */
    reservas: Reserva[];
}
