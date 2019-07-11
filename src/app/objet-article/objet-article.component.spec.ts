import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetArticleComponent } from './objet-article.component';

describe('ObjetArticleComponent', () => {
  let component: ObjetArticleComponent;
  let fixture: ComponentFixture<ObjetArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
