import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculaService } from '../pelicula.service';
import { Pelicula} from '../pelicula';
import { PeliculaDetail } from '../pelicula-detail';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
})
export class PeliculaDetailComponent implements OnInit {

  constructor(
    private peliculaService: PeliculaService,
    private route: ActivatedRoute) { }

@Input() peliculaDetail: PeliculaDetail;
 
pelicula_id: number;

getPeliculaDetail(): void 
{
    this.peliculaService.getPeliculaDetail(this.pelicula_id).subscribe(peliculaDetail => {this.peliculaDetail = peliculaDetail});
}

ngOnInit() 
{
    this.pelicula_id = +this.route.snapshot.paramMap.get('id');
    this.peliculaDetail = new PeliculaDetail();
    this.getPeliculaDetail();
}

}