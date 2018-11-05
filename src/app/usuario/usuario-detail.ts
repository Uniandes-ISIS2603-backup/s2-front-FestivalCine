import { Usuario } from './usuario';
import { Reserva } from '../reserva/reserva';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class UsuarioDetail extends Usuario 
{
    /**
     * The editorial's books
     */
    reservas: Reserva[];
}
