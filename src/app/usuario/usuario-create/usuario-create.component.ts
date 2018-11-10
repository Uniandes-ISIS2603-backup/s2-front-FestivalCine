import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css'],
  providers: [UsuarioService]
})
export class UsuarioCreateComponent implements OnInit {

  constructor(
  private usuarioService: UsuarioService,
  private toastrService: ToastrService) { }
  
  usuario: Usuario;
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();

  createUsuario(): Usuario 
   {
        this.usuarioService.createUsuario(this.usuario)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("El usuario fue creado", "Creacion de usuario");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.usuario;
   }
   
   cancelCreation(): void {
        this.cancel.emit();
    }
   
  ngOnInit() {
      this.usuario = new Usuario();
  }

}
