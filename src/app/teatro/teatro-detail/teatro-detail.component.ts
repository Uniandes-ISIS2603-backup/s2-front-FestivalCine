import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { TeatroService } from '../teatro.service';
import { Teatro} from '../teatro';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-teatro-detail',
  templateUrl: './teatro-detail.component.html',
  styleUrls: ['./teatro-detail.component.css']
})
export class TeatroDetailComponent implements OnInit {

  constructor(private teatroService: TeatroService,
    private route: ActivatedRoute,
    private router:Router,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) { }
    
    teatro: Teatro;
    teatro_id: number;
    
    getTeatro(): void
    {
        this.teatroService.getTeatroDetail(this.teatro_id).subscribe(teatro => {this.teatro = teatro});
    }
    
     /**
    * Deletes a teatro
    */
    deleteTeatro(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un teatro',
            childComponent: SimpleModalComponent,
            data: {text: '¿Está seguro que desea eliminar el teatro?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.teatroService.deleteTeatro(this.teatro_id).subscribe(() => {
                            this.toastrService.success("El teatro fue eliminado exitosamente", "Eliminar Teatro");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        this.router.navigate(['/teatros/list']);
        
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

  ngOnInit() {
      this.teatro_id = +this.route.snapshot.paramMap.get('id');
      this.teatro = new Teatro();
      this.getTeatro(); 
  }

}
