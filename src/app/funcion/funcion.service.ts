import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Funcion} from './funcion';
import {FuncionDetail} from './funcion-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const funciones = '/funciones';

/**
* The service provider for everything related to salas
*/

@Injectable()
export class FuncionService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of salas retrieved from the API
    * @returns The list of salas in real time
    */
    getFunciones(): Observable<Funcion[]> {
        return this.http.get<Funcion[]>(API_URL + funciones);
    }
    
    /**
    * Returns the Observable object containing the funcion retrieved from the API
    * @returns The funcion
    */
    getFuncionDetail(funcionId): Observable<FuncionDetail> {
        return this.http.get<FuncionDetail>(API_URL + funciones + '/' + funcionId);
    }
}

