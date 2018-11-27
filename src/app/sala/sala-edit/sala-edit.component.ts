import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { SalaService} from '../../sala/sala.service';
import {Sala} from '../../sala/sala';
import { TeatroService} from '../../teatro/teatro.service';
import {Teatro} from "../../teatro/teatro";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sala-edit',
  templateUrl: './sala-edit.component.html',
  styleUrls: ['./sala-edit.component.css']
})
export class SalaEditComponent implements OnInit, OnDestroy {

  constructor(private toastrService: ToastrService,
        private salaService: SalaService,
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
    * Id de la sala
    */
    salaId: number;
    
   /**
   * The sala to edit
   */
   @Input() sala: Sala;
 
   /**
    * The list of all the Teatros in the Festival
    */
    teatros: Teatro[];  
   
   
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
    * Updates the information of the sala
    */
    editSala(): void {

      this.salaService.updateSala(this.sala)
          .subscribe((sala)=> 
          {
              this.sala.id = sala.id;
                this.router.navigate(['/salas/' + sala.id]);
              this.toastrService.success("La información de la sala fue actualizada", "Editar Sala")
      });
      this.update.emit();
       
    }
    getSala():void
    {
    this.salaService.getSalaDetail(this.salaId)
        .subscribe(sala=> 
        {
            this.sala = sala;
    });
    }
    
    /**
    * Retrieves the list of teatros in the Festival
    */
    getTeatros(): void {
        this.teatroService.getTeatros()
            .subscribe(teatros => {
                this.teatros = teatros;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to edit a sala
    */
    cancelEdition(): void {
        console.log(this.sala.teatro.nombre);
        this.cancel.emit();
        
    }

    
     ngOnInit() {
         this.salaId = +this.route.snapshot.paramMap.get('id');
         this.sala = new Sala();
         this.getSala();
         this.getTeatros();
    }
  
   /**
   * This function will be called when the user chooses another sala to edit
   */ 
    ngOnDestroy()
    {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }      
    }

}
