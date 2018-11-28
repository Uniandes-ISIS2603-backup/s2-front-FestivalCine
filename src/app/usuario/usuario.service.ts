import{Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from './usuario';
import { UsuarioDetail } from './usuario-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const usuarios = '/usuarios';

//const API_URL='../assets';
//const usuarios = '/usuarios.json';

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
          return this.http.get<Usuario[]>(API_URL+usuarios);
      }
      
    /**
    * Returns the Observable object containing the usuario retrieved from the API
    * @returns The user
    */
    getUsuarioDetail(usuarioId): Observable<UsuarioDetail> 
    {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + usuarioId);
    }
    
    createUsuario(usuario): Observable<Usuario> {
        return this.http.post<Usuario>(API_URL + usuarios, usuario);
    }
    
    updateUsuario(usuario): Observable<Usuario>
    {
        return this.http.put<Usuario>(API_URL + usuarios + '/' + usuario.id, usuario);
    }
    
    deleteUsuario(usuarioId): Observable<Usuario>
    {
        return this.http.delete<Usuario>(API_URL + usuarios + '/' + usuarioId);
    }
 }