import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Pelicula } from './pelicula';
import { PeliculaDetail } from './pelicula-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const peliculas = '/peliculas';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class PeliculaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
     /**
      * 
      */
      createPelicula(pelicula): Observable<Pelicula>
      {
          return this.http.post<Pelicula>(API_URL + peliculas, pelicula);
      }
        
    getPeliculas() : Observable<Pelicula[]> {
        return this.http.get<Pelicula[]>(API_URL + peliculas);
    }
     /**
    * Returns the Observable object containing the usuario retrieved from the API
    * @returns The user
    */
    getPeliculaDetail(peliculaId): Observable<PeliculaDetail> 
    {
        return this.http.get<PeliculaDetail>(API_URL + peliculas + '/' + peliculaId);
    }
    
   
}
