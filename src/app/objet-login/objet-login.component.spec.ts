import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetLoginComponent } from './objet-login.component';

describe('ObjetLoginComponent', () => {
  let component: ObjetLoginComponent;
  let fixture: ComponentFixture<ObjetLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
