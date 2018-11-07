import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { UsuarioDetail } from '../usuario-detail';

@Component
(
    {
        selector: 'app-usuario-list',
        templateUrl: './usuario-list.component.html',
        styleUrls: ['./usuario-list.component.css']
    }
)

export class UsuarioListComponent implements OnInit 
{

  constructor(private usuarioService: UsuarioService){ }
  
  usuarios: Usuario[];
  usuario_id: number;
  selectedUsuario : Usuario
  
  onSelected(usuario_id: number):void 
  {
        this.usuario_id = usuario_id;
        this.selectedUsuario = new UsuarioDetail();
        this.getUsuarioDetail();
    }
  
  /**
   * Actualizar usuarios
   */
   getUsuarios(): void
   {
       this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
   }
  
   getUsuarioDetail(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_id)
            .subscribe(selectedUsuario => {
                this.selectedUsuario = selectedUsuario
            });
    }
    
  /**
   * Inicializa el componente
   */
  ngOnInit() 
  {
      this.getUsuarios();
  }

}
