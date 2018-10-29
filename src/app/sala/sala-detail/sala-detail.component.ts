import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SalaService } from '../sala.service';
import { Sala } from '../sala';
import {SalaDetail} from '../sala-detail';

@Component({
  selector: 'app-sala-detail',
  templateUrl: './sala-detail.component.html',
  styleUrls: ['./sala-detail.component.css']
})
export class SalaDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
