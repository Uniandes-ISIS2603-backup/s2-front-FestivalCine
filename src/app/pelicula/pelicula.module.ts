import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PeliculaService } from './pelicula.service';
@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [PeliculaListComponent],
   providers: [PeliculaService],
  exports:[PeliculaListComponent]
})
export class PeliculaModule { }
