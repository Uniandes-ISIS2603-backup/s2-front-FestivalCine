import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetailComponent } from './pelicula-detail.component';

describe('PeliculaDetailComponent', () => {
  let component: PeliculaDetailComponent;
  let fixture: ComponentFixture<PeliculaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
