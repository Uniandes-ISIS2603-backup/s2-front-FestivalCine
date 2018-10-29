import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Sala} from './sala';

const API_URL = "../../assets/";
const salas = '/salas.json';

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
    getSalas(): Observable<Sala[]> {
        return this.http.get<Sala[]>(API_URL + salas);
    }
}
