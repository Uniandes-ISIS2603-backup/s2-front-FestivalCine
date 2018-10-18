import { Component, OnInit } from '@angular/core';
import { Critico } from '../critico';
import { CriticoService } from '../critico.service';

@Component({
  selector: 'app-critico-list',
  templateUrl: './critico-list.component.html',
  styleUrls: ['./critico-list.component.css']
})

export class CriticoListComponent implements OnInit {

  constructor( private criticoService: CriticoService) { }
  
  criticos: Critico[];
  
  getCriticos(): void
  {
      this.criticoService.getCriticos().subscribe(criticos => this.criticos = criticos);
  }
  ngOnInit() {
      this.getCriticos();
  }

}
