import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';
import { PeliculaService } from './pelicula.service';


@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [PeliculaListComponent],
  providers: [PeliculaService],
  exports:[PeliculaListComponent]
})
export class PeliculaModule { }
