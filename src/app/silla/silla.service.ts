import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Silla } from './silla';
import { SillaDetail } from './silla-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const sillas = '/sillas';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class SillaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
     /**
      * 
      */
      createSilla(silla): Observable<Silla>
      {
          return this.http.post<Silla>(API_URL + sillas, silla);
      }
        
    getSillas() : Observable<Silla[]> {
        return this.http.get<Silla[]>(API_URL + sillas);
    }
     /**
    * Returns the Observable object containing the usuario retrieved from the API
    * @returns The user
    */
    getSillaDetail(sillaId): Observable<SillaDetail> 
    {
        return this.http.get<SillaDetail>(API_URL + sillas + '/' + sillaId);
    }
    
   
}
