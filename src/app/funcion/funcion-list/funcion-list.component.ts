import { Component, OnInit,ViewContainerRef  } from '@angular/core';
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
   funciones: Funcion[];
   funcion_id: number;
   selectedFuncion : Funcion;
   showCreate: boolean;


onSelected(funcion_id: number):void {
        this.showCreate = false;
        this.funcion_id = funcion_id;
  
    this.getFuncionDetail();
}   
   
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
   
  ngOnInit() {
      this.showCreate = false;
      this.selectedFuncion = undefined;
      this.funcion_id = undefined;
      this.getFunciones();
  }

}