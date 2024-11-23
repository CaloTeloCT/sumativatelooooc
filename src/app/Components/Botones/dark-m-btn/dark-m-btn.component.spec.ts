import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkMBtnComponent } from './dark-m-btn.component';

describe('DarkMBtnComponent', () => {
  let component: DarkMBtnComponent;
  let fixture: ComponentFixture<DarkMBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkMBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkMBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
