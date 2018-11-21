import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing';

import { CriticoListComponent } from './critico-list/critico-list.component';
import { CriticoService } from './critico.service';
import { CriticoDetailComponent } from './critico-detail/critico-detail.component';
import { CriticoCreateComponent } from './critico-create/critico-create.component';
import {CalificacionModule} from '../calificacion/calificacion.module';
import {FuncionModule} from '../funcion/funcion.module';
import {PeliculaModule} from '../pelicula/pelicula.module';
import { CriticoEditComponent } from './critico-edit/critico-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
      NgbModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalificacionModule,
      FuncionModule,
      PeliculaModule
  ],
  declarations: [CriticoListComponent, CriticoDetailComponent, CriticoCreateComponent, CriticoEditComponent],
  providers: [CriticoService],
    exports: [CriticoListComponent, CriticoDetailComponent]
})
export class CriticoModule { }
