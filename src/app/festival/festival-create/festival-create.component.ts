import { Component, OnInit,  Output, EventEmitter  } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FestivalService } from '../festival.service';
import { CriticoService} from '../../critico/critico.service';
import { TeatroService} from '../../teatro/teatro.service'
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

import { Festival} from '../festival';
import {Critico} from '../../critico/critico';
import {Teatro} from '../../teatro/teatro';
@Component({
  selector: 'app-festival-create',
  templateUrl: './festival-create.component.html',
  styleUrls: ['./festival-create.component.css'],
  providers : [DatePipe]
})
export class FestivalCreateComponent implements OnInit {

    constructor(private dp: DatePipe, 
                private festivalService: FestivalService, 
                private toastrService: ToastrService,
                private criticoService: CriticoService,
                private teatroService: TeatroService) { }
    
    /**
     * El nuevo festival 
     */
    festival: Festival;
    
    /**
     * Lista de todos los criticos del festival
     */
     criticos: Critico[];
     
    /**
     * Lista de todos los teatros del festival
     */ 
     teatros: Teatro[];
     
    
    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    createFestival(): Festival
    {
        let dateB: Date = new Date(this.festival.fechaInicio.year, this.festival.fechaInicio.month-1, this.festival.fechaInicio.day );
        this.festival.fechaInicio = this.dp.transform(dateB, 'yyyy-MM-dd');
       let dateF: Date = new Date(this.festival.fechaFin.year, this.festival.fechaFin.month-1, this.festival.fechaFin.day );
        this.festival.fechaFin = this.dp.transform(dateF, 'yyyy-MM-dd');
               this.festivalService.createFestival(this.festival)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("El festival fue creado", "Creacion de festival");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.festival; 
    }
    
        getTeatros(): void {
        this.teatroService.getTeatros()
            .subscribe(teatros => {
                this.teatros = teatros;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
       cancelCreation(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.festival = new Festival();
      this.getTeatros();
      
  }

}
