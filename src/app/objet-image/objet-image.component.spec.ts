import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetImageComponent } from './objet-image.component';

describe('ObjetImageComponent', () => {
  let component: ObjetImageComponent;
  let fixture: ComponentFixture<ObjetImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
