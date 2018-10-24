/**
* This class represents an editorial of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export interface Reserva 
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

}

