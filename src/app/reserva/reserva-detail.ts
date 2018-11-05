import { Reserva } from './reserva';
import { Funcion } from '../funcion/funcion';
//import { Silla } from '../silla/silla';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class ReservaDetail extends Reserva
{
    /**
     * Las funciones de la reserva
     */
    funciones: Funcion[];
    
    /**
     * Las sillas de la reserva
     */
    //sillas: Silla[];
}
