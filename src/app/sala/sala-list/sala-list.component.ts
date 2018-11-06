import { Component, OnInit } from '@angular/core';
import {Sala} from '../sala';
import {SalaDetail} from '../sala-detail';
import {SalaService} from '../sala.service';

@Component({
  selector: 'app-sala-list',
  templateUrl: './sala-list.component.html',
  styleUrls: ['./sala-list.component.css']
})
export class SalaListComponent implements OnInit {
/**
     * Constructor for the component
     * @param salaService 
     */
    constructor(private salaService: SalaService) {}
    
    /**
     *  Shows or hides the funcion-create-component
    */
    showCreate: boolean;
    
    /**
    * The id of the sala that the user wants to view
    */
    sala_id: number;
    
    /**
     * the sala that the user views.
     */
    selectedSala : Sala;
    
    
    /**
     * The list of salas which belong to the Festival
     */
    salas: Sala[];

    /**
     * Asks the service to update the list of salas
     */
    getSalas(): void {
        this.salaService.getSalas().subscribe(salas => this.salas = salas);
    }
    
   getSalaDetail(): void {
        this.salaService.getSalaDetail(this.sala_id)
            .subscribe(selectedSala => {
                this.selectedSala = selectedSala
            });
    }
    
   /**
    * Shows la sala
    */
    onSelected(sala_id: number):void {
        this.showCreate = false;
        this.sala_id = sala_id;
        this.selectedSala = new SalaDetail();
        this.getSalaDetail();
    }
    
    
   /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedSala) {
            this.selectedSala = undefined;
            this.sala_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

    /**
     * This will initialize the component by retrieving the list of salas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.selectedSala = undefined;
        this.sala_id = undefined;
        this.getSalas();
    }

}
