import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCardsComponent } from './listar-cards.component';

describe('ListarCardsComponent', () => {
  let component: ListarCardsComponent;
  let fixture: ComponentFixture<ListarCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCardsComponent]
    });
    fixture = TestBed.createComponent(ListarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
