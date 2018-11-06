import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing';

import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionService} from './calificacion.service';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CalificacionListComponent, CalificacionDetailComponent, CalificacionCreateComponent],
  providers: [CalificacionService],
  exports:[CalificacionListComponent]
})
export class CalificacionModule { }
