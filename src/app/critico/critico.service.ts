import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Critico } from './critico';
import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;
const criticos = '/criticos';


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
    
    getCriticoDetail(criticoId): Observable<Critico>
    {
        return this.http.get<Critico>(API_URL + criticos + '/' + criticoId);
    }
    
    createCritico(critico): Observable<Critico>
    {
        return this.http.post<Critico>(API_URL + criticos, critico);
    }
    
    updateCritico(critico): Observable<Critico>
    {
        return this.http.put<Critico>(API_URL + criticos + '/' + critico.id, critico);
    }
    
}
