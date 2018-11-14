import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Sala} from './sala';
import {SalaDetail} from './sala-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;

const salas = '/salas';

/**
* The service provider for everything related to salas
*/

@Injectable()
export class SalaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of salas retrieved from the API
    * @returns The list of salas in real time
    */
    getSalas(): Observable<SalaDetail[]> {
        return this.http.get<SalaDetail[]>(API_URL + salas);
    }
    
    /**
    * Returns the Observable object containing the sala retrieved from the API
    * @returns The sala
    */
    getSalaDetail(salaId): Observable<SalaDetail> {
        return this.http.get<SalaDetail>(API_URL + salas + '/' + salaId);
    }
    
   /**
    * Creates a sala
    * @param sala The new sala
    * @returns The confirmation that the funcion was created
    */
    createSala(sala): Observable<Sala> {
        return this.http.post<Sala>(API_URL + salas, sala);
    }
}
