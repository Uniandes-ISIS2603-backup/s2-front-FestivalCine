import {Usuario} from '../usuario/usuario';
import {Funcion} from'../funcion/funcion';
/**
* This class represents an editorial of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class Reserva 
    {
    /**
    * The editorial's id
    */
    id: number;
   
    /**
    * The editorial's name
    */
    abono: boolean;
    
    /**
     * Descuento
     */
     descuento: number;
     
     /**
      * Precio total
      */
      precioTotal: number;
      
    /**
     * Usuario de la reserva
     */
     usuario: Usuario;
     
     funciones: Funcion[];

}

