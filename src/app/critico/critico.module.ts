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

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalificacionModule
  ],
  declarations: [CriticoListComponent, CriticoDetailComponent, CriticoCreateComponent],
  providers: [CriticoService],
    exports: [CriticoListComponent, CriticoDetailComponent]
})
export class CriticoModule { }
