import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import {CriticoService} from '../critico.service';

import {Critico} from '../critico';

@Component({
  selector: 'app-critico-create',
  templateUrl: './critico-create.component.html',
  styleUrls: ['./critico-create.component.css'],
  providers: [CriticoService]
})
export class CriticoCreateComponent implements OnInit {

  constructor(
  private criticoService: CriticoService,
  private toastrService: ToastrService,
  private router: Router) { }
  
  critico: Critico;
  
  @Output() cancel= new EventEmitter();

  @Output() create = new EventEmitter();
  
  createCritico(): Critico
  {
      this.criticoService.createCritico(this.critico)
          .subscribe((critico) => {
              this.critico = critico;
              this.create.emit();
              this.router.navigate(['/criticos/' + critico.id]);
              this.toastrService.success("El critico fue creado", "Creación de usuario");
      }, err => {
          this.toastrService.error(err, "Error");
      });
      return this.critico;
  }
  
  cancelCreation(): void
  {
      this.cancel.emit();
  }
  
  ngOnInit() 
  {   console.log("create");
      this.critico = new Critico();
  }

}
