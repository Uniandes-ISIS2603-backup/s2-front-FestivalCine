import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SillaService } from '../silla.service';
import { Silla} from '../silla';
import { SillaDetail } from '../silla-detail';

@Component({
  selector: 'app-silla-detail',
  templateUrl: './silla-detail.component.html',
  styleUrls: ['./silla-detail.component.css']
})
export class SillaDetailComponent implements OnInit {

  constructor(
    private sillaService: SillaService,
    private route: ActivatedRoute) { }

@Input() sillaDetail: SillaDetail;
 
silla_id: number;

getSillaDetail(): void 
{
    this.sillaService.getSillaDetail(this.silla_id).subscribe(sillaDetail => {this.sillaDetail = sillaDetail});
}

ngOnInit() 
{
    this.silla_id = +this.route.snapshot.paramMap.get('id');
    this.sillaDetail = new SillaDetail();
    this.getSillaDetail();
}

}