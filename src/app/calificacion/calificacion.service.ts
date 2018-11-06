import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Calificacion} from './calificacion';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const calificaciones = '/calificaciones';

@Injectable()
export class CalificacionService{
    
    constructor(private http: HttpClient){}
    
    getCalificaciones() : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }
    
    getCalificacionDetail(calificacionId): Observable<Calificacion>
    {
        return this.http.get<Calificacion>(API_URL + calificaciones + '/' + calificacionId);
    }
}
