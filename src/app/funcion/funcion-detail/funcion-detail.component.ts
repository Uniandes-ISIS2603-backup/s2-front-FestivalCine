import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FuncionService } from '../funcion.service';
import { Funcion } from '../funcion';

@Component({
  selector: 'app-funcion-detail',
  templateUrl: './funcion-detail.component.html',
  styleUrls: ['./funcion-detail.component.css']
})
export class FuncionDetailComponent implements OnInit {
/**
    * The component's constructor
    * @param funcionService The funcion service
    * @param route The route element which helps to obtain the funcion's id
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
        private funcionService: FuncionService,
        private route: ActivatedRoute
 ){ }
 
    /**
    * The funcion whose details we want to show
    */
    funcionDetail: Funcion;

    /**
    * The funcion id retrieved from the address
    */
   funcion_id: number;

    /**
    * The method which retrieves the detail of a función
    */
    getFuncionDetail(): void {
        this.funcionService.getFuncionDetail(this.funcion_id).subscribe(funcionDetail => {
                this.funcionDetail = funcionDetail
            });
    }
    /**
    * The method which initializes the component
    * We need to initialize the funcion so it is never considered as undefined
    */
    ngOnInit() {
      this.funcion_id = +this.route.snapshot.paramMap.get('id');
      this.getFuncionDetail();
    }
}
