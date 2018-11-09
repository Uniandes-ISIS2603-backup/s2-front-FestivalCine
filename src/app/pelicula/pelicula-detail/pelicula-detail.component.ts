import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PeliculaService} from '../pelicula.service';
import {Pelicula} from '../pelicula';


@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
})
export class PeliculaDetailComponent implements OnInit {

  constructor(
  private peliculaService: PeliculaService,
  private route: ActivatedRoute) {   }
  
  pelicula:Pelicula;
  
  pelicula_id : number;
  
  getPelicula(): void {
      this.peliculaService.getPeliculaDetail(this.pelicula_id)
      .subscribe(pelicula => {this.pelicula = pelicula});
      
  }

  ngOnInit() {
      this.pelicula_id = +this.route.snapshot.paramMap.get('id');
      this.pelicula = new Pelicula();
      this.getPelicula();
  }

}