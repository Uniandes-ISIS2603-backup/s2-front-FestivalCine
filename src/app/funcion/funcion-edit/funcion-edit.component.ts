import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {DatePipe} from '@angular/common';
import {FuncionService} from '../funcion.service';
import { PeliculaService} from '../../pelicula/pelicula.service'
import { SalaService} from '../../sala/sala.service'
import { CriticoService} from '../../critico/critico.service'

import {Funcion} from '../funcion';
import {Pelicula} from '../../pelicula/pelicula';
import {Sala} from '../../sala/sala';
import {Critico} from '../../critico/critico';



@Component({
  selector: 'app-funcion-edit',
  templateUrl: './funcion-edit.component.html',
  styleUrls: ['./funcion-edit.component.css'],
  providers: [DatePipe]
})
export class FuncionEditComponent implements OnInit,OnChanges{

  constructor(
      private dp: DatePipe,
      private funcionService: FuncionService,
      private peliculaService: PeliculaService,
      private salaService: SalaService,
      private criticoService: CriticoService,
      private toastrService: ToastrService) { }
 
     /**
    * The author id as received from the parent component
    */
    @Input() funcion: Funcion;
    
        
    /**
    * The list of all the peliculas in the Festival
    */
    peliculas: Pelicula[];

    /**
    * The list of all the salas in the Festival
    */
    salas: Sala[];

    /**
    * The list of all the Criticos in the Festival
    */
    criticos: Critico[];
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();
    
        /**
     * Para el time picker
     */
    hourStep = 1;
    minuteStep = 30;
     
    /**
    * Retrieves the list of peliculas in the FestivalFe
    */
    getPeliculas(): void {
        this.peliculaService.getPeliculas()
            .subscribe(peliculas => {
                this.peliculas = peliculas;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
   /**
    * Retrieves the list of salas in the Festival
    */
    getSalas(): void {
        this.salaService.getSalas()
            .subscribe(salas => {
                this.salas = salas;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
   /**
    * Retrieves the list of criticos in the Festival
    */
    getCriticos(): void {
        this.criticoService.getCriticos()
            .subscribe(criticos => {
                this.criticos =  criticos ;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    /**
    * Updates the information of the author
    */
    editFuncion(): void {
        
        console.log(this.funcion);
        let dateB: Date = new Date(this.funcion.fecha.year, this.funcion.fecha.month-1, this.funcion.fecha.day);
        this.funcion.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        console.log('prueba');
        console.log(this.funcion)
        this.funcionService.updateFuncion(this.funcion)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La función fue actualizada", "Funcion edition");
                
            });
    }
    
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }
    
    ngOnInit() {
        this.funcion = new Funcion();
        
        this.funcion.pelicula = new Pelicula();
        this.getPeliculas();
        
        this.funcion.sala = new Sala();
        this.getSalas();
        
        this.funcion.critico = new Critico();
        this.getCriticos();
    }
  
   /**
    * This function will be called when the user chooses another Funcion to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}