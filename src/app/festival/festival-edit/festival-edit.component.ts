import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {FestivalService} from '../festival.service';
import { CriticoService} from '../../critico/critico.service';
import { TeatroService} from '../../teatro/teatro.service';
import {Festival} from '../festival';
import {Critico} from '../../critico/critico';
import {Teatro} from '../../teatro/teatro';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-festival-edit',
  templateUrl: './festival-edit.component.html',
  styleUrls: ['./festival-edit.component.css'],
  providers: [DatePipe]
})
export class FestivalEditComponent implements OnInit, OnDestroy {

  constructor( private dp: DatePipe,
        private festivalService: FestivalService,
        private toastrService: ToastrService,
        private criticoService: CriticoService,
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

   /**
    * Id del festival
    */
    festivalId: number;
    
        /**
     * Lista de todos los criticos del festival
     */
     criticos: Critico[];
     
    /**
     * Lista de todos los teatros del festival
     */ 
     teatros: Teatro[];
    
  /**
   * 
   */
   @Input() festival: Festival;

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
    * Updates the information of the festival
    */
    editFestival(): void {
        let dateB: Date = new Date(this.festival.fechaInicio.year, this.festival.fechaInicio.month-1, this.festival.fechaInicio.day );
        this.festival.fechaInicio = this.dp.transform(dateB, 'yyyy-MM-dd');
       let dateF: Date = new Date(this.festival.fechaFin.year, this.festival.fechaFin.month-1, this.festival.fechaFin.day );
        this.festival.fechaFin = this.dp.transform(dateF, 'yyyy-MM-dd');
      this.festivalService.updateFestival(this.festival)
          .subscribe((festival)=> 
          {
              this.festival.id = festival.id;
                this.router.navigate(['/festivales/' + festival.id]);
              this.toastrService.success("La información del critico fue actualizada", "Critico edition")
      });
      this.update.emit();
       
    }
    
    getFestival():void
{
    this.festivalService.getFestivalDetail(this.festivalId)
        .subscribe(festival => 
        {
            this.festival = festival;
    });
}
    
    navigationSubscription;
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        console.log(this.festival.nombre);
        this.cancel.emit();
        
    }
        getTeatros(): void {
        this.teatroService.getTeatros()
            .subscribe(teatros => {
                this.teatros = teatros;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    } 
    
  ngOnInit() {
      if (this.festival && this.festival.fechaInicio) {
            this.festival.fechaInicio = this.festival.fechaInicio.substring(0, 10);
            var date = {
                day: + this.festival.fechaInicio.split('-')[2],
                month: + this.festival.fechaInicio.split('-')[1],
                year: + this.festival.fechaInicio.split('-')[0]
            };
            this.festival.fechaInicio = date;
        }
            if (this.festival && this.festival.fechaFin) {
            this.festival.fechaFin = this.festival.fechaFin.substring(0, 10);
            var date = {
                day: + this.festival.fechaFin.split('-')[2],
                month: + this.festival.fechaFin.split('-')[1],
                year: + this.festival.fechaFin.split('-')[0]
            };
            this.festival.fechaFin = date;
            
        }
        
      this.festivalId = +this.route.snapshot.paramMap.get('id');
      this.festival = new Festival();
      this.getFestival();
      this.getTeatros();
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
