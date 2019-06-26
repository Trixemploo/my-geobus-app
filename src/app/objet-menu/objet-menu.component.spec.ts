import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetMenuComponent } from './objet-menu.component';

describe('ObjetMenuComponent', () => {
  let component: ObjetMenuComponent;
  let fixture: ComponentFixture<ObjetMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
