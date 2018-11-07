import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FuncionService } from '../funcion.service';

import { Funcion } from '../funcion';

@Component({
  selector: 'app-funcion-create',
  templateUrl: './funcion-create.component.html',
  styleUrls: ['./funcion-create.component.css'],
  providers : [DatePipe]
})
export class FuncionCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param funcionService The funcion's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp : DatePipe,
        private funcionService: FuncionService,
        private toastrService: ToastrService
    ) { }
    
   /**
    * The new funcion
    */
    
    funcion: Funcion;
    
   /**
    * The output which tells the parent component
    * that the user no longer wants to create a funcion
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new funcion
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a funcion
    */
    createFuncion(): Funcion {
        console.log(this.funcion);
        let dateB: Date = new Date(this.funcion.fecha.year, this.funcion.fecha.month-1, this.funcion.fecha.day);
        this.funcion.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        console.log(this.funcion)
        this.funcionService.createFuncion(this.funcion)
            .subscribe((funcion) => {
                this.funcion = funcion;
                this.create.emit();
                this.toastrService.success("La función fue creada", "Funcion creation");
                
            });
        return this.funcion;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.funcion = new Funcion();
    }

}
