import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Teatro } from './teatro';

const API_URL = "../../assets/";
const teatros = 'teatros.json';

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
    
  
    getTeatros() : Observable<Teatro[]> {
        return this.http.get<Teatro[]>(API_URL + teatros);
    }
    
}
