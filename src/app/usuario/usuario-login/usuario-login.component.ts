import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css'],
  providers: [UsuarioService]
})
export class UsuarioLoginComponent implements OnInit {

  constructor(
  private usuarioService: UsuarioService,
  private toastrService: ToastrService) { }
  
  usuario: Usuario;
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();

  
   
  ngOnInit() {
      this.usuario = new Usuario();
  }

}
