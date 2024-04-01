import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheLivroComponent } from './detalhe-livro.component';

describe('DetalheLivroComponent', () => {
  let component: DetalheLivroComponent;
  let fixture: ComponentFixture<DetalheLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheLivroComponent]
    });
    fixture = TestBed.createComponent(DetalheLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
