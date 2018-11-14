import { Component, OnInit,ViewContainerRef, Input  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Funcion } from '../funcion';
import {FuncionService} from '../funcion.service';



@Component({
  selector: 'app-funcion-list',
  templateUrl: './funcion-list.component.html',
  styleUrls: ['./funcion-list.component.css']
})
export class FuncionListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( private funcionService: FuncionService ) { }

  /**
   * La lista de funciones del festival de cine
   */
   @Input() funciones: Funcion[];
   
   /**
    * The id of the funcion that the user wants to view
    */
   funcion_id: number;
   
  /**
   * The función that the user views.
   */
   selectedFuncion : Funcion;
   
   /**
    * Shows or hides the funcion-create-component
    */
   showCreate: boolean;


    onSelected(funcion_id: number):void {
            this.showCreate = false;
            this.funcion_id = funcion_id;

        this.getFuncionDetail();
    }   
   
   /**
    * Shows la funcion
    */
    
    showHideCreate(): void {
         if (this.selectedFuncion) {
                   this.selectedFuncion = undefined;
                   this.funcion_id = undefined;
            }
            this.showCreate = !this.showCreate;
    }
    
  /**
   * Obtiene el servicio para actualizar la lista de funciones
   */
   getFunciones(): void {
        this.funcionService.getFunciones().subscribe(funciones => this.funciones = funciones);
    }
    
   getFuncionDetail(): void {
         this.funcionService.getFuncionDetail(this.funcion_id)
            .subscribe(selectedFuncion => {
                this.selectedFuncion = selectedFuncion
            });
    }
   
      /**
     * This will initialize the component by retrieving the list of funciones from the service
     * This method will be called when the component is created
     */  
    ngOnInit() {
        this.showCreate = false;
        this.selectedFuncion = undefined;
        this.funcion_id = undefined;
        this.getFunciones();
    }

}