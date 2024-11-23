import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarBtnComponent } from './cancelar-btn.component';

describe('CancelarBtnComponent', () => {
  let component: CancelarBtnComponent;
  let fixture: ComponentFixture<CancelarBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelarBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
