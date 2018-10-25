/**
* This class represents an editorial of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export interface Pelicula {
    /**
    * The editorial's id
    */
    id: number;

    /**
    * The editorial's name
    */
    nombre: string;
 
    duracion:number;
    
    director:string;
    
    pais:string;
    
    credits:string;
}
