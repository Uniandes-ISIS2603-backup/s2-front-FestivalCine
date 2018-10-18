import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Critico } from './critico';

const API_URL = "../../assets/";
const criticos = 'criticos.json';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class CriticoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getCriticos() : Observable<Critico[]> {
        return this.http.get<Critico[]>(API_URL + criticos);
    }
    
}
