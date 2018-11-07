import { Pelicula } from './pelicula';
import { Funcion } from '../funcion/funcion';
import { Critico } from '../critico/critico';
import { Calificacion } from '../calificacion/calificacion';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class PeliculaDetail extends Pelicula 
{
  
    
    /**
     * funciones
     */
     
         funciones: Funcion[];
         
           /**
     * Criticos dela pelicula
     */
     criticos: Critico[];
     
          /**
     * Calificacion
     */
     calificaciones: Calificacion[];
}
