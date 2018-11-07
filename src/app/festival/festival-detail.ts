import { Critico } from '../critico/critico';
import { Festival } from './festival';
import { Teatro } from '../teatro/teatro';

export class FestivalDetail extends Festival
{
    /**
     * Criticos del festival
     */
     criticos: Critico[];
     
     /**
      * Teatros del festival
      */
      teatros: Teatro[];
}    


