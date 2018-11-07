import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Teatro } from './teatro';
import {TeatroDetail} from './teatro-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const teatros ='/teatros';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class TeatroService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
     /**
      * Crea un teatro
      */
      createTeatro(teatro): Observable<Teatro>
      {
          return this.http.post<Teatro>(API_URL + teatros, teatro);
      }
        
    getTeatros() : Observable<Teatro[]> {
        return this.http.get<Teatro[]>(API_URL + teatros);
    }
    
    getTeatroDetail(teatroId): Observable<TeatroDetail> {
        return this.http.get<TeatroDetail>(API_URL +teatros + '/' + teatroId);
    }
}
