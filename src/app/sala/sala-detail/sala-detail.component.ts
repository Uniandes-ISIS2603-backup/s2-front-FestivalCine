import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SalaService } from '../sala.service';
import { Sala } from '../sala';
import {SalaDetail} from '../sala-detail';

@Component({
  selector: 'app-sala-detail',
  templateUrl: './sala-detail.component.html',
  styleUrls: ['./sala-detail.component.css']
})
export class SalaDetailComponent implements OnInit {

   /**
    * The component's constructor
    * @param salaService The sala's service
    * @param route The route element which helps to obtain the sala's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private salaService: SalaService,
        private route: ActivatedRoute
    ) { }
    
    
   /**
    * The sala whose details we want to show
    */
    @Input() salaDetail: SalaDetail;

    /**
    * The sala's id retrieved from the address
    */
    sala_id: number;
    
    /**
    * The method which retrieves the sillas of a sala
    */
    getSalaDetail(): void {
        this.salaService.getSalaDetail(this.sala_id)
            .subscribe(salaDetail => {
                this.salaDetail = salaDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
        this.sala_id = +this.route.snapshot.paramMap.get('id');
        if (this.sala_id){
        this.salaDetail = new SalaDetail();
        this.getSalaDetail();
        }
    }


}
