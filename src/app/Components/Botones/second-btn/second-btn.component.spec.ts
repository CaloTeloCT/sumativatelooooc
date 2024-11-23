import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBtnComponent } from './second-btn.component';

describe('SecondBtnComponent', () => {
  let component: SecondBtnComponent;
  let fixture: ComponentFixture<SecondBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
