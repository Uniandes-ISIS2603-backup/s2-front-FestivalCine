import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticoListComponent } from './critico-list.component';

describe('CriticoListComponent', () => {
  let component: CriticoListComponent;
  let fixture: ComponentFixture<CriticoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
