import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Pelicula } from './pelicula';

const API_URL = "../../assets/";
const peliculas = 'peliculas.json';

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
    
  
    getPeliculas() : Observable<Pelicula[]> {
        return this.http.get<Pelicula[]>(API_URL + peliculas);
    }
    
}
