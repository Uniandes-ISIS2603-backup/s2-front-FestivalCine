import { Component, OnInit, Input } from '@angular/core';
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
  critico_id: number;
  selectedCritico: Critico
  
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

}
