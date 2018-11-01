import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppModule} from '../../app.module';

import { FestivalListComponent } from './festival-list.component';
import {Festival} from '../festival';
import {FestivalService} from '../festival.service';

describe('FestivalListComponent', () => {
  let component: FestivalListComponent;
  let fixture: ComponentFixture<FestivalListComponent>;
    const festivales: Festival[] = require('../../../assets/festival.json')
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ FestivalListComponent ],
       providers: [{provide: APP_BASE_HREF, useValue: ''}, FestivalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
