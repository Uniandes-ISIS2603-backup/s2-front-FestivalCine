import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Calificacion} from './calificacion';

const API_URL = "../../assets/";
const calificaciones = 'calificaciones.json';

@Injectable()
export class CalificacionService{
    
    constructor(private http: HttpClient){}
    
    getCalificaciones() : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }
}
