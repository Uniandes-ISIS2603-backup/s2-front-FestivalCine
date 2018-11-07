import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BandaAnuncio } from './bandaanuncio';
import { BandaAnuncioDetail } from './bandaanuncio-detail';

const API_URL = "../../assets/";
const bandaanuncios = 'bandaanuncios.json';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class BandaAnuncioService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
     /**
      * 
      */
      createBandaAnuncio(bandaanuncio): Observable<BandaAnuncio>
      {
          return this.http.post<BandaAnuncio>(API_URL + bandaanuncios, bandaanuncio);
      }
        
    getBandaAnuncios() : Observable<BandaAnuncio[]> {
        return this.http.get<BandaAnuncio[]>(API_URL + bandaanuncios);
    }
     /**
    * Returns the Observable object containing the usuario retrieved from the API
    * @returns The user
    */
    getBandaAnuncioDetail(bandaanuncioId): Observable<BandaAnuncioDetail> 
    {
        return this.http.get<BandaAnuncioDetail>(API_URL + bandaanuncios + '/' + bandaanuncioId);
    }
    
   
}
