import { Component, OnInit } from '@angular/core';
import {Silla} from '../silla'
@Component({
  selector: 'app-silla-list',
  templateUrl: './silla-list.component.html',
  styleUrls: ['./silla-list.component.css']
})
export class SillaListComponent implements OnInit {

    /**
     * The list of sillas which belong to the Festival
     */
    sillas: Silla[];
    
  constructor() { }

  ngOnInit() {
  }

}
