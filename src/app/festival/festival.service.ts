import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Festival} from './festival';

const API_URL = "../../assets/";
const festivales = 'festivales.json';


@Injectable()
export class FestivalService{
    
    /**
     * Constructor del servicio
     */
     constructor(private http: HttpClient) {}
     
     getFestivales() : Observable<Festival[]>
         {
         return this.http.get<Festival[]>(API_URL + festivales);
     }
}
