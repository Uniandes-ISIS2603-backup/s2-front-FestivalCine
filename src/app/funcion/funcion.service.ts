import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Funcion} from './funcion';

const API_URL = "../../assets/";
const funciones = '/funciones.json';

/**
* The service provider for everything related to funciones
*/

@Injectable()
export class FuncionService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of funciones retrieved from the API
    * @returns The list of funciones in real time
    */
    getFunciones(): Observable<Funcion[]> {
        return this.http.get<Funcion[]>(API_URL + funciones);
    }
}

