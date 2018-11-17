import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticoEditComponent } from './critico-edit.component';

describe('CriticoEditComponent', () => {
  let component: CriticoEditComponent;
  let fixture: ComponentFixture<CriticoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
