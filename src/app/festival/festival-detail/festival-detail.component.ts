import {Component, OnInit, ViewContainerRef } from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { FestivalService } from '../festival.service';
import { Festival} from '../festival';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',
  styleUrls: ['./festival-detail.component.css']
})
export class FestivalDetailComponent implements OnInit {

  constructor( private festivalService: FestivalService,
    private route: ActivatedRoute,
    private router:Router,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {
   
    
    }
    festival: Festival;
    festival_id: number;
    
    getFestival(): void
    {
        this.festivalService.getFestivalDetail(this.festival_id).subscribe(festival => {this.festival = festival});
    }
    
 /**
    * Deletes a festival
    */
    deleteFestival(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar un festival',
            childComponent: SimpleModalComponent,
            data: {text: '¿Está seguro que desea eliminar el festival?'},
            actionButtons: [
                {
                    text: 'Si',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.festivalService.deleteFestival(this.festival_id).subscribe(() => {
                            this.toastrService.success("El festival fue eliminado exitosamente", "Eliminar Festival");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        this.router.navigate(['/festivales/list']);
        
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
    

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.festival_id = +this.route.snapshot.paramMap.get('id')});
      if (this.festival_id){
      this.festival = new Festival();
      this.getFestival();
      }
      
  }

}
