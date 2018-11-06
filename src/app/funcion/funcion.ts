import { Pelicula } from "../pelicula/pelicula";
import { Sala } from "../sala/sala";
import {Critico} from "../critico/critico";

export class Funcion {
    
    /**
     * Id de la función
     */
    id: number;
    
   /*
    * Fecha de la función
    */
    fecha: any;
    
   /*
    * Hora de la función
    */
    hora: number;
    
   /*
    * Precio base de la función
    */
    precioBase: number;
   
    
    /** La pelicula asignada a la función **/
    pelicula: Pelicula;
    
    
    /** El crítico asignado a la función **/
    critico: Critico;
    
        
   /** La sala asignada a la función **/
    sala: Sala;
    
    
}
