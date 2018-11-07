import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaAnuncioDetailComponent } from './bandaanuncio-detail.component';

describe('BandaAnuncioDetailComponent', () => {
  let component: BandaAnuncioDetailComponent;
  let fixture: ComponentFixture<BandaAnuncioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandaAnuncioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaAnuncioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
