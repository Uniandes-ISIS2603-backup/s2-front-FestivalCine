import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {CriticoService} from '../critico.service';
import {Critico} from '../critico';


@Component({
  selector: 'app-critico-detail',
  templateUrl: './critico-detail.component.html',
  styleUrls: ['./critico-detail.component.css']
})
export class CriticoDetailComponent implements OnInit {

  constructor(
  private criticoService: CriticoService,
  private route: ActivatedRoute) {   }
  
  critico:Critico;
  
  critico_id : number;
  
  getCritico(): void {
      this.criticoService.getCriticoDetail(this.critico_id).subscribe(critico => {this.critico = critico});
      
  }

  ngOnInit() {
      this.critico_id = +this.route.snapshot.paramMap.get('id');
      this.critico = new Critico();
      this.getCritico();
  }

}
