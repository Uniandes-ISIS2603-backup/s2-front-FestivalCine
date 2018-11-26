import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalEditComponent } from './festival-edit.component';

describe('FestivalEditComponent', () => {
  let component: FestivalEditComponent;
  let fixture: ComponentFixture<FestivalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
