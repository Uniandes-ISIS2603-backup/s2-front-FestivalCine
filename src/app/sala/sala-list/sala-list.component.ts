import { Component, OnInit } from '@angular/core';
import {Sala} from '../sala';
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
     * The list of salas which belong to the Festival
     */
    salas: Sala[];

    /**
     * Asks the service to update the list of salas
     */
    getSalas(): void {
        this.salaService.getSalas().subscribe(salas => this.salas = salas);
    }

    /**
     * This will initialize the component by retrieving the list of salas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getSalas();
    }

}
