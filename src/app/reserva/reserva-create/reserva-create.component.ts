import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ReservaService } from '../reserva.service';

import { Reserva } from '../reserva';
import { Usuario } from '../../usuario/usuario';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css'],
  providers: [ReservaService]
})
export class ReservaCreateComponent implements OnInit {

  constructor(
  private reservaService: ReservaService,
  private toastrService: ToastrService,
  private route: ActivatedRoute) { }
  
  reserva: Reserva;
  usuario: Usuario;
  
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  createReserva(): Reserva 
   {      
        this.reservaService.createReserva(this.reserva).subscribe((reserva) => {this.reserva = reserva; 
            this.create.emit();
            this.toastrService.success("La reserva fue creada", "Creacion de reserva");
            });
        return this.reserva;
   }
   
   cancelCreation(): void {
        this.cancel.emit();
    }
  
  ngOnInit() 
  {   
      console.log("create reserva");
     
      this.usuario = new Usuario();
      this.route.params.subscribe(params => {
                  this.usuario.id = +this.route.snapshot.parent.paramMap.get('id')});
                  
      console.log(this.usuario.id);
      this.reserva = new Reserva();
      this.reserva.usuario = this.usuario;
     
  }

}
