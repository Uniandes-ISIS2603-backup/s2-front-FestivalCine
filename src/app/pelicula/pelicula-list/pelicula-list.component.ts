import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
/**
 * 
 */
export class PeliculaListComponent implements OnInit {

  constructor(private peliculaService: PeliculaService,
  private route: ActivatedRoute) { }
  
  @Input() peliculas: Pelicula[];
  
  allPeliculas: string = 'no';
  
  pelicula_id: number;
  selectedPelicula: Pelicula
  tipeList: string = 'list';
  
   onSelected(pelicula_id: number): void
  {
      this.pelicula_id = pelicula_id;
      this.selectedPelicula = new Pelicula();
      this.getPeliculaDetail();
  }
  
   getPeliculaDetail(): void
  {
      this.peliculaService.getPeliculaDetail(this.pelicula_id)
          .subscribe(selectedPelicula => {this.selectedPelicula = selectedPelicula});
  }
  
  getPeliculas(): void
  {
      this.peliculaService.getPeliculas().subscribe(peliculas => this.peliculas = peliculas);
  }

  ngOnInit() {
       this.route.queryParams.filter(params => params.allPeliculas).subscribe(params => {
        console.log(params); 

        this.allPeliculas = params.allPeliculas;
        console.log(this.allPeliculas); 
      });
      if (this.allPeliculas == 'yes')
      {
         console.log("allPeliculas");
      
        this.getPeliculas();
       }
       else
       {
       this.tipeList = 'detail';    
       }
  }
  
   isList(): boolean
    {
        if (this.tipeList == 'detail')
        {
            return false;
        }
        return true;
    }

}
