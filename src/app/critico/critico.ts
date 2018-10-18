/**
* This class represents an editorial of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export interface Critico {
    /**
    * The editorial's id
    */
    id: number;

    /**
    * The editorial's name
    */
    nombres: string;
    
    apellidos: string;
    
    identificacion: string;
    
    celular: number;
    
    email: string;
    
    nickName: string;
    
    puntaje: number;
    
    credencial: string;
}
