import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

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
     * The list of salas which belong to the Festival
     */
    funciones: Funcion[];
    
    /**
     *  Shows or hides the funcion-create-component
    */
    showCreate: boolean;
    
    /**
    * The id of the funcion that the user wants to view
    */
    funcion_id: number;
    
    /**
     * the funcion that the user views.
     */
    selectedFuncion : Funcion;
    

    /**
     * Asks the service to update the list of salas
     */
    getFunciones(): void {
        this.funcionService.getFunciones().subscribe(funciones => this.funciones = funciones);
    }
    
    getFuncionDetail(): void {
        this.funcionService.getFuncionDetail(this.funcion_id).subscribe(selectedFuncion => {
                this.selectedFuncion = selectedFuncion
            });
    }
    
   /**
    * Shows la función
    */
    onSelected(funcion_id: number):void {
        this.showCreate = false;
        this.funcion_id = funcion_id;
        this.getFuncionDetail();
    }
    
    
   /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedFuncion) {
            this.selectedFuncion = undefined;
            this.funcion_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }

    /**
     * This will initialize the component by retrieving the list of salas from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.selectedFuncion = undefined;
        this.funcion_id = undefined;
        this.getFunciones();
    }

}
