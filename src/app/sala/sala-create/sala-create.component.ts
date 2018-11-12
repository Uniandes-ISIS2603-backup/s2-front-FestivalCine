import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalaService } from '../sala.service';
import { TeatroService} from '../../teatro/teatro.service'

import {Sala} from '../sala';
import {Teatro} from "../../teatro/teatro";
@Component({
  selector: 'app-sala-create',
  templateUrl: './sala-create.component.html',
  styleUrls: ['./sala-create.component.css']
})
export class SalaCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param SalaService The sala services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private salaService: SalaService,
        private teatroService: TeatroService,
        private toastrService: ToastrService
    ) { }
    
    /**
    * The new sala
    */
    sala: Sala;

    /**
    * The list of all the Teatros in the Festival
    */
    teatros: Teatro[];
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create a sala
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new sala
    */
    @Output() create = new EventEmitter();
    
        /**
    * Retrieves the list of peliculas in the FestivalFe
    */
    getTeatros(): void {
        this.teatroService.getTeatros()
            .subscribe(teatros => {
                this.teatros = teatros;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    
   /**
    * Creates a new editorial
    */
    createSala(): void {
        this.salaService.createSala(this.sala)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The sala was created", "Sala creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.sala = new Sala();
        
        this.sala.teatro = new Teatro();
        this.getTeatros();
    }


}
