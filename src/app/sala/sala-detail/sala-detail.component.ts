import { Component, OnInit, Input, ViewContainerRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
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
        private route: ActivatedRoute,
        private router:Router,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
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
    * Deletes a sala
    */
    deleteSala(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar una sala',
            childComponent: SimpleModalComponent,
            data: {text: '¿Está seguro que desea eliminar la sala?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.salaService.deleteSala(this.sala_id).subscribe(() => {
                            this.toastrService.success("La sala fue eliminada exitosamente", "Eliminar Sala");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        this.router.navigate(['/salas/list']);
        
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

    /**
    * The method which initializes the component
    * We need to initialize the sala so it is never considered as undefined
    */
    ngOnInit() {
        this.sala_id = +this.route.snapshot.paramMap.get('id');
        if (this.sala_id){
        this.salaDetail = new SalaDetail();
        this.getSalaDetail();
        }
    }


}
