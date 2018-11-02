import { Pelicula } from "../pelicula/pelicula";
import { Sala } from "../sala/sala";
import {Critico} from "../critico/critico";
import { Funcion } from "./funcion";

export interface FuncionDetail extends Funcion{
   
     /** La pelicula asignada a la función **/
    pelicula: Pelicula;
    
    /** El crítico asignado a la función **/
    critico: Critico;
        
   /** La sala asignada a la función **/
    sala: Sala;
    
    
}
