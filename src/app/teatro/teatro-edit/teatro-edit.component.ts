import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { TeatroService} from '../../teatro/teatro.service';
import {Teatro} from '../../teatro/teatro';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-teatro-edit',
  templateUrl: './teatro-edit.component.html',
  styleUrls: ['./teatro-edit.component.css']
})
export class TeatroEditComponent implements OnInit, OnDestroy {

  constructor(
        private toastrService: ToastrService,
        private teatroService: TeatroService,
        private route: ActivatedRoute,
        private router: Router) { 
              this.navigationSubscription = this.router.events.subscribe((e: any) =>
      {
          if (e instanceof NavigationEnd)
          {
              this.ngOnInit();
          }
      }); 
        }
    navigationSubscription;
    
   /**
    * Id del teatro
    */
    teatroId: number;
    
      /**
   * 
   */
   @Input() teatro: Teatro;

   /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();
    
        
    /**
    * Updates the information of the teatro
    */
    editTeatro(): void {

      this.teatroService.updateTeatro(this.teatro)
          .subscribe((teatro)=> 
          {
              this.teatro.id = teatro.id;
                this.router.navigate(['/teatros/' + teatro.id]);
              this.toastrService.success("La información del teatro fue actualizada", "Editar Teatro")
      });
      this.update.emit();
       
    }
    getTeatro():void
{
    this.teatroService.getTeatroDetail(this.teatroId)
        .subscribe(teatro => 
        {
            this.teatro = teatro;
    });
}

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        console.log(this.teatro.nombre);
        this.cancel.emit();
        
    }

  ngOnInit() {
      
      this.teatroId = +this.route.snapshot.paramMap.get('id');
      this.teatro = new Teatro();
      this.getTeatro();
      
  }
  
   /**
    * This function will be called when the user chooses another festival to edit
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}
