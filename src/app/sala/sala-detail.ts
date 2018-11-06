import { Sala } from "../sala/sala";
import {Silla} from "../silla/silla";

export class SalaDetail extends Sala{
    /** Las sillas de la sala **/
    sillas : Silla[];
}
