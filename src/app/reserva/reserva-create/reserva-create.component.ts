import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

import { ReservaService } from '../reserva.service';
import {FuncionService} from '../../funcion/funcion.service';

import { ReservaDetail } from '../reserva-detail';
import { Usuario } from '../../usuario/usuario';
import {Funcion} from '../../funcion/funcion';
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
  private funcionService: FuncionService,
  private route: ActivatedRoute,
        private router: Router) { }
  
  reserva: ReservaDetail;
  usuario: Usuario;
  funciones: Funcion[];
  funciones2: Funcion[];
  funcionAux: Funcion;
  abono: boolean;
  
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  getFunciones(): void
  {
      this.funcionService.getFunciones()
          .subscribe(funciones => {
              this.funciones = funciones;
              
      }, err => {
          this.toastrService.error(err, 'Error');
      })
  }
  
  createReserva(): ReservaDetail 
   {      
        this.reservaService.createReserva(this.reserva).subscribe((reservaDetail) => {
            this.router.navigate(['/usuarios/' + this.usuario.id]);
            this.reserva = reservaDetail; 
            this.create.emit();
            this.toastrService.success("La reserva fue creada", "Creacion de reserva");
            });
            console.log('Hola');
      console.log(this.funcionAux);
        return this.reserva;
   }
   
   cancelCreation(): void {
        this.cancel.emit();
    }
  
  ngOnInit() 
  {   
      console.log("create reserva");
      this.reserva = new ReservaDetail();
      console.log(this.reserva);
      this.funcionAux = new Funcion();
     
      this.usuario = new Usuario();
      this.route.params.subscribe(params => {
                  this.usuario.id = +this.route.snapshot.parent.paramMap.get('id')});
                  console.log(this.usuario);
                  console.log('id: ' + +this.route.snapshot.parent.paramMap.get('id'));
      this.funcionAux.id = +this.route.snapshot.parent.paramMap.get('id');
      console.log(this.funcionAux);
      this.reserva.usuario = this.usuario;
      this.reserva.funciones = this.funciones2;
      console.log(this.reserva.funciones);
      this.reserva.abono= this.abono;
      this.getFunciones();
     
  }
  
  checkBoxAbono(): boolean
  {
      var element = <HTMLInputElement> document.getElementById('reservaAbono');
      var isChecked = element.checked;
      this.abono = isChecked;
      return isChecked;
  }

}
