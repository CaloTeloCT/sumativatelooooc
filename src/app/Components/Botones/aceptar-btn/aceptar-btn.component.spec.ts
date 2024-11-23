import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarBtnComponent } from './aceptar-btn.component';

describe('AceptarBtnComponent', () => {
  let component: AceptarBtnComponent;
  let fixture: ComponentFixture<AceptarBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceptarBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
