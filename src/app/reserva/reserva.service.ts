
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Reserva } from './reserva';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const reservas = '/reservas';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class ReservaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getReservas() : Observable<Reserva[]> {
        return this.http.get<Reserva[]>(API_URL + reservas);
    }
    
}