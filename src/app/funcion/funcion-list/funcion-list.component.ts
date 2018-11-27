import { Component, OnInit,ViewContainerRef, Input  } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Funcion } from '../funcion';
import {FuncionService} from '../funcion.service';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-funcion-list',
  templateUrl: './funcion-list.component.html',
  styleUrls: ['./funcion-list.component.css']
})
export class FuncionListComponent implements OnInit {

  /**
   * Contructor del componente
   */
  constructor( 
        private funcionService: FuncionService,  
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
   ) { }

  /**
   * La lista de funciones del festival de cine
   */
   @Input() funciones: Funcion[];
   
   /**
    * The id of the funcion that the user wants to view
    */
   funcion_id: number;
   
   allFunciones:string  ='no';
   
  /**
   * The función that the user views.
   */
   selectedFuncion : Funcion;
   
   showEdit: boolean;
   
   showCreate: boolean;
   
    /**
     * Shows or hides the detail of a funcion
     */
    showView: boolean;

   
   /**
    * Shows or hides the funcion-create-component
    */
   @Input() tipeList:string = 'list';


    onSelected(funcion_id: number):void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.funcion_id = funcion_id;
        this.selectedFuncion = new Funcion();
        this.getFuncionDetail();
    }   
   
   /**
    * Shows la funcion
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
   /**
    * Shows or hides the edit component
    */
    showHideEdit(funcion_id: number): void {
        if (!this.showEdit || (this.showEdit && funcion_id != this.selectedFuncion.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.funcion_id = funcion_id;
            this.selectedFuncion = new Funcion();
            this.getFuncionDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
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
    updateFuncion(): void {
        this.showEdit = false;
        this.showView = true;
    }
    
    /**
    * Deletes una función
    */
    deleteFuncion(funcionId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar una función',
            childComponent: SimpleModalComponent,
            data: {text: '¿Está seguro que quiere borrar una función?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.funcionService.deleteFuncion(funcionId).subscribe(() => {
                            this.toastrService.error("La función fue borrada exitosamente", "Funcion deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
      /**
     * This will initialize the component by retrieving the list of funciones from the service
     * This method will be called when the component is created
     */  
    ngOnInit() {
        this.selectedFuncion = undefined;
        this.funcion_id = undefined;
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.route.queryParams.filter(params => params.allFunciones).subscribe(params => {
        console.log(params); 

        this.allFunciones = params.allFunciones;
        console.log(this.allFunciones); 
      });
      if (this.allFunciones == 'yes')
      {
         console.log("allFunciones");
      
       this.getFunciones();
       }
       else
       {
       this.tipeList = 'detail';    
       }
       
    }
    
    isList(): boolean
    {
        if (this.tipeList == 'detail')
        {
            return false;
        }
        return true;
    }

}