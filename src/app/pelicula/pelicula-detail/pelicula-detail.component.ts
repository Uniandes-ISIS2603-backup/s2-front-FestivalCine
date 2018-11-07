import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import {PeliculaService } from '../pelicula.service';
import { PeliculaDetail } from '../usuario-detail';
@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
  
})
export class PeliculaDetailComponent implements OnInit {

constructor(
        private peliculaService: PeliculaService,
        private route: ActivatedRoute
    ) { }

  pelicula_id: number; 
  ngOnInit() {
  this.pelicula_id = +this.route.snapshot.paramMap.get('id');
  }

}
