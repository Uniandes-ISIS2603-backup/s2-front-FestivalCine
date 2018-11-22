import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';
import { PeliculaService } from './pelicula.service';
import { PeliculaCreateComponent } from './pelicula-create/pelicula-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [PeliculaListComponent, PeliculaDetailComponent,PeliculaCreateComponent],
  providers: [PeliculaService],
  exports:[PeliculaListComponent]
})
export class PeliculaModule { }
