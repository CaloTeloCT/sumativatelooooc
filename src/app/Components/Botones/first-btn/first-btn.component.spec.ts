import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBtnComponent } from './first-btn.component';

describe('FirstBtnComponent', () => {
  let component: FirstBtnComponent;
  let fixture: ComponentFixture<FirstBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
