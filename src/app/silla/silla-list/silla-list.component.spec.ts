import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppModule} from '../../app.module';

import { SillaListComponent } from './silla-list.component';
import { Silla } from '../silla';
import { SillaService } from '../silla.service';

describe('SillaListComponent', () => {
  let component: SillaListComponent;
  let fixture: ComponentFixture<SillaListComponent>;
    const sillas: Silla[] = require('../../../assets/sillas.json') 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ SillaListComponent ],
        providers: [{provide: APP_BASE_HREF, useValue: ''}, SillaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});