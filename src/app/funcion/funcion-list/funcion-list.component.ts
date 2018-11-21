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
  constructor( private funcionService: FuncionService,  
  private route: ActivatedRoute ) { }

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
   
   /**
    * Shows or hides the funcion-create-component
    */
   @Input() tipeList:string = 'list';


    onSelected(funcion_id: number):void {
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