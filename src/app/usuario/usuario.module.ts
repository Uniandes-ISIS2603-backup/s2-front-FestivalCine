import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';

@NgModule
(
  {
    imports: 
    [
        CommonModule,
        FormsModule
    ],
    declarations: [UsuarioListComponent],
    providers: [UsuarioService],
    exports:[UsuarioListComponent]
  }
)
export class UsuarioModule { }    

