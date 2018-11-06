import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticoCreateComponent } from './critico-create.component';

describe('CriticoCreateComponent', () => {
  let component: CriticoCreateComponent;
  let fixture: ComponentFixture<CriticoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
