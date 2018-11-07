import { Component, OnInit } from '@angular/core';

import { FestivalService } from '../festival.service';
import { Festival} from '../festival';
import {FestivalDetail} from '../festival-detail';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',
  styleUrls: ['./festival-detail.component.css']
})
export class FestivalDetailComponent implements OnInit {

  constructor( private festivalService: FestivalService,
    private route: ActivatedRoute) {
   
    
    }
    festival: Festival
    festival_id: number;
    
    getFestival(): void
    {
        this.festivalService.getFestivalDetail(this.festival_id).subscribe(festival => {this.festival = festival});
    }

  ngOnInit() {
      this.festival_id = +this.route.snapshot.paramMap.get('id');
      this.festival = new Festival();
      this.getFestival();
      
  }

}
