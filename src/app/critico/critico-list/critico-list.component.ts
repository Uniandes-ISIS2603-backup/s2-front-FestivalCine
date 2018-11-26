import { Component, OnInit, Input } from '@angular/core';
import { Critico } from '../critico';
import { CriticoService } from '../critico.service';
import { Observable } from 'rxjs';

import {Router} from '@angular/router/';

@Component({
  selector: 'app-critico-list',
  templateUrl: './critico-list.component.html',
  styleUrls: ['./critico-list.component.css']
})

export class CriticoListComponent implements OnInit {

  constructor( private criticoService: CriticoService,
  private router: Router) { }
  
  criticos: Critico[];
  critico_id: number;
  selectedCritico: Critico
  model:any;
  critico: Critico;
  
  onSelected(critico_id: number): void
  {
      this.critico_id = critico_id;
      this.selectedCritico = new Critico();
      this.getCriticoDetail();
  }
  
  getCriticos(): void
  {
      this.criticoService.getCriticos()
      .subscribe(criticos => this.criticos = criticos);
  }
  
  getCriticoDetail(): void
  {
      this.criticoService.getCriticoDetail(this.critico_id)
      .subscribe(selectedCritico => {this.selectedCritico = selectedCritico});
  }
  ngOnInit() {
      this.getCriticos();
  }
  
  busqueda(): void
  {
      if(this.model != undefined && this.model.id != undefined)
      {
          this.critico = this.model;
          this.model = undefined;
      }
      this.router.navigate(['/criticos/' + this.critico_id]);
      this.model = undefined;
      this.getCriticos();
      this.critico = undefined;
  }

}
