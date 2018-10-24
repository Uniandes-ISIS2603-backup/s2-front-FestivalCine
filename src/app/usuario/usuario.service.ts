import{Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from './usuario';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const usuarios = '/usuarios';

/**
 * El que provee servicios para todo lo de usuarios
 */
 @Injectable()
 export class UsuarioService{
     /**
      * Constructor del servicio
      * @param http El HttpClient - Esto es necesario para las request
      */
      constructor(private http: HttpClient)
      {
          
      }
      
      getUsuarios():Observable<Usuario[]>
      {
          return this.http.get<Usuario[]>
          (API_URL+usuarios);
      }
 }