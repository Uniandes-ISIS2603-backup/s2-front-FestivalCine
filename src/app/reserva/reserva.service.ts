
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Reserva } from './reserva';
import { ReservaDetail } from './reserva-detail';
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
    
    /**
    * Returns the Observable object containing the usuario retrieved from the API
    * @returns The user
    */
    getReservaDetail(reservaId): Observable<ReservaDetail> 
    {console.log(API_URL + reservas+ '/' + reservaId);
        return this.http.get<ReservaDetail>(API_URL + reservas + '/' + reservaId);
    }
    
    createReserva(reservaDetail): Observable<ReservaDetail> 
    { 
        return this.http.post<ReservaDetail>(API_URL + reservas, reservaDetail);
    }
    
    updateReserva(reserva): Observable<Reserva>
    {
        return this.http.put<Reserva>(API_URL + reserva + '/' + reserva.id, reserva);
    }
    
    deleteReserva(reservaId): Observable<Reserva>
    {
        return this.http.delete<Reserva>(API_URL + reservas + '/' + reservaId);
    }
}