import { Component, OnInit } from '@angular/core';
import { Festival } from '../festival';
import { FestivalService } from '../festival.service';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit {

  constructor(private festivalService: FestivalService) { }
    festivales: Festival[];
    
    getFestivales(): void
    {
        this.festivalService.getFestivales().subscribe(festivales => this.festivales = festivales);
    }
  ngOnInit() {
      this.getFestivales();
  }

}
