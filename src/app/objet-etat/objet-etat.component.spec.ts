import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetEtatComponent } from './objet-etat.component';

describe('ObjetEtatComponent', () => {
  let component: ObjetEtatComponent;
  let fixture: ComponentFixture<ObjetEtatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetEtatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
