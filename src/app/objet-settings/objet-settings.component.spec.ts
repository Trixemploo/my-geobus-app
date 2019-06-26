import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetSettingsComponent } from './objet-settings.component';

describe('ObjetSettingsComponent', () => {
  let component: ObjetSettingsComponent;
  let fixture: ComponentFixture<ObjetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
