import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetLobsComponent } from './objet-lobs.component';

describe('ObjetLobsComponent', () => {
  let component: ObjetLobsComponent;
  let fixture: ComponentFixture<ObjetLobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetLobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetLobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
