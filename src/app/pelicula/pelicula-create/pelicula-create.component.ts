import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { PeliculaService } from '../Pelicula.service';

import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-pelicula-create',
  templateUrl: './pelicula-create.component.html',
  styleUrls: ['./pelicula-create.component.css'],
  providers: [PeliculaService]
})
export class PeliculaCreateComponent implements OnInit {

  constructor(
  private peliculaService: PeliculaService,
  private toastrService: ToastrService) { }
  
  pelicula: Pelicula;
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();

  createPelicula(): Pelicula
   {
        this.peliculaService.createPelicula(this.pelicula)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("peli creada", "cracion peli");
            }, err => {
                this.toastrService.error(err, "Error");
            });
      return this.pelicula;
   }
   
   cancelCreation(): void {
        this.cancel.emit();
    }
   
  ngOnInit() {
      this.pelicula = new Pelicula();
  }

}
