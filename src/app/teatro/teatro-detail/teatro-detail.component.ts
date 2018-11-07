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
    
    teatroDetail: TeatroDetail;
    teatro_id: number;
    
    getTeatroDetail(): void
    {
        this.teatroService.getTeatroDetail(this.teatro_id).subscribe(teatroDetail => {this.teatroDetail = teatroDetail});
    }

  ngOnInit() {
      this.teatro_id = +this.route.snapshot.paramMap.get('id');
      this.teatroDetail = new TeatroDetail();
      this.getTeatroDetail(); 
  }

}
