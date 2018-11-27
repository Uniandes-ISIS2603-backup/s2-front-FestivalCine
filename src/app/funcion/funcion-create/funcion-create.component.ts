import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FuncionService } from '../funcion.service';
import { PeliculaService} from '../../pelicula/pelicula.service'
import { SalaService} from '../../sala/sala.service'
import { CriticoService} from '../../critico/critico.service'
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';


import { Funcion } from '../funcion';
import {Pelicula} from '../../pelicula/pelicula';
import {Sala} from '../../sala/sala';
import {Critico} from '../../critico/critico';

@Component({
  selector: 'app-funcion-create',
  templateUrl: './funcion-create.component.html',
  styleUrls: ['./funcion-create.component.css'],
  providers : [DatePipe]
})
export class FuncionCreateComponent implements OnInit {
  /**
    * Constructor for the component
    * @param funcionService The funcion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp : DatePipe,
        private funcionService: FuncionService,
        private peliculaService: PeliculaService,
        private salaService: SalaService,
        private criticoService: CriticoService,
        private toastrService: ToastrService
    ) { }
    
   /**
    * The new funcion
    */
    
    funcion: Funcion;
    
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
    * that the user no longer wants to create a funcion
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new funcion
    */
    @Output() create = new EventEmitter();
    
    /**
     * Para el time picker
     */
    hourStep = 1;
    minuteStep = 30;
    time: NgbTimeStruct = {hour: 13, minute:0 , second:0};
     
    /**
    * Retrieves the list of peliculas in the Festival
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
    * Creates a funcion
    */
    createFuncion(): Funcion {
        console.log(this.funcion);
        let dateB: Date = new Date(this.funcion.fecha.year, this.funcion.fecha.month-1, this.funcion.fecha.day);
        this.funcion.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.funcion.hora = this.time.hour;
        console.log(this.funcion)
        this.funcionService.createFuncion(this.funcion)
            .subscribe((funcion) => {
                this.funcion = funcion;
                this.create.emit();
                this.toastrService.success("La función fue creada", "Funcion creation");
                
            });
        return this.funcion;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.funcion = new Funcion();
        
        this.funcion.pelicula = new Pelicula();
        this.getPeliculas();
        
        this.funcion.sala = new Sala();
        this.getSalas();
        
        this.funcion.critico = new Critico();
        this.getCriticos();
    }

}
