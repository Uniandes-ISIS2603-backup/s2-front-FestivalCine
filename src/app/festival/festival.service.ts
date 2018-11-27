import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Festival} from './festival';
import {FestivalDetail} from './festival-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const festivales = '/festivales';


@Injectable()
export class FestivalService{
    
    /**
     * Constructor del servicio
     */
     constructor(private http: HttpClient) {}
     
     /**
      * Crea un festival
      */
      createFestival(festival): Observable<Festival>
      {
          return this.http.post<Festival>(API_URL + festivales, festival);
      }
     
     getFestivales() : Observable<Festival[]>
         {
         return this.http.get<Festival[]>(API_URL + festivales);
     }
     getFestivalDetail(festivalId): Observable<Festival> {
        return this.http.get<Festival>(API_URL + festivales + '/' + festivalId);
    }
    
    updateFestival(festival): Observable<Festival>
    {
        return this.http.put<Festival>(API_URL + festivales + '/' + festival.id, festival);
    }
    
    deleteFestival(festivalId): Observable<Festival>
    {
        return this.http.delete<Festival>(API_URL + festivales + '/' + festivalId);
    }
}
