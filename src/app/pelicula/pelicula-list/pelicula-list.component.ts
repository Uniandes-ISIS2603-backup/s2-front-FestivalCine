import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
/**
 * 
 */
export class PeliculaListComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) { }
  
  @Input() peliculas: Pelicula[];
  
  getPeliculas(): void
  {
      this.peliculaService.getPeliculas().subscribe(peliculas => this.peliculas = peliculas);
  }

  ngOnInit() {
      this.getPeliculas();
  }

}
