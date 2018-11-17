import {Usuario} from '../usuario/usuario';
import {Critico} from '../critico/critico';
import {Pelicula} from '../pelicula/pelicula';

export class Calificacion{
    id: number;
    
    puntaje: string;
    
    comentario: string;
    
    usuario: Usuario;
    
    critico: Critico;
    
    pelicual: Pelicula;
}
