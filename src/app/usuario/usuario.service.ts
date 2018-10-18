import{Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const usuarios = 'usuarios.json';

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