import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ReservaService } from '../Reserva.service';

import { Reserva } from '../reserva';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css'],
  providers: [ReservaService]
})
export class ReservaCreateComponent implements OnInit {

  constructor(
  private reservaService: ReservaService,
  private toastrService: ToastrService) { }
  
  reserva: Reserva;
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  createReserva(): Reserva 
   {
        this.reservaService.createReserva(this.reserva)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("La reserva fue creada", "Creacion de reserva");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.reserva;
   }
   
   cancelCreation(): void {
        this.cancel.emit();
    }
  
  ngOnInit() {
      this.reserva = new Reserva();
  }

}
