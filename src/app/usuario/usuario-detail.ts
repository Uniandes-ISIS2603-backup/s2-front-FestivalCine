import { Usuario } from './usuario';
import { Reserva } from '../reserva/reserva';
import {Calificacion} from '../calificacion/calificacion';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class UsuarioDetail extends Usuario 
{
    /**
     * 
     */
    reservas: Reserva[];
    
    /**
     * Calificaciones
     */
     calificaciones: Calificacion[];
}
