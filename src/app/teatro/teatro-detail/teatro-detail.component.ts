import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeatroService } from '../teatro.service';
import { Teatro} from '../teatro';
import {TeatroDetail} from '../teatro-detail';
@Component({
  selector: 'app-teatro-detail',
  templateUrl: './teatro-detail.component.html',
  styleUrls: ['./teatro-detail.component.css']
})
export class TeatroDetailComponent implements OnInit {

  constructor(private teatroService: TeatroService,
    private route: ActivatedRoute) { }
    
    teatro: Teatro;
    teatro_id: number;
    
    getTeatro(): void
    {
        this.teatroService.getTeatroDetail(this.teatro_id).subscribe(teatro => {this.teatro = teatro});
    }

  ngOnInit() {
      this.teatro_id = +this.route.snapshot.paramMap.get('id');
      this.teatro = new Teatro();
      this.getTeatro(); 
  }

}
