import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalaService } from '../sala.service';
import {Sala} from '../sala';
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
        private toastrService: ToastrService
    ) { }
    
    /**
    * The new sala
    */
    sala: Sala;

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
    }


}
