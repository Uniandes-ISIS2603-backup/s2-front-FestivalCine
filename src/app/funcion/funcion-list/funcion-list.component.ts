import { Component, OnInit } from '@angular/core';
import {Funcion} from '../funcion';
import {FuncionService} from '../funcion.service';

@Component({
  selector: 'app-funcion-list',
  templateUrl: './funcion-list.component.html',
  styleUrls: ['./funcion-list.component.css']
})
export class FuncionListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param funcionService 
     */
    constructor(private funcionService: FuncionService) {}

    /**
     * The list of funciones which belong to the Festival
     */
    funciones: Funcion[];

    /**
     * Asks the service to update the list of funciones
     */
    getFunciones(): void {
        this.funcionService.getFunciones()
            .subscribe(funciones => this.funciones = funciones);
    }

    /**
     * This will initialize the component by retrieving the list of funciones from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getFunciones();
    }

}
