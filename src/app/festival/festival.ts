/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import {Teatro} from '../teatro/teatro';
 import {Critico} from '../critico/critico'; 
 
export class Festival{
/**
 * 
 */
 id: number;
 
 /**
  * 
  */
 nombre: string;
 
 /**
  * 
  */
  patrocinador: string;
  
  /**
   * 
   */
   duracion: number;
   
   /**
    * 
    */
    fechaInicio: any;
    
    /**
     * 
     */
    fechaFin : any;
    
    /**
     * 
     */
    ciudad : string;
    
    /**
     * 
     */
     criticos: Critico[];
     
    /**
     * 
     */
     teatros: Teatro[]; 
    
        
    
    
}
