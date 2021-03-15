import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceCarComponent } from './replace-car.component';

describe('ReplaceCarComponent', () => {
  let component: ReplaceCarComponent;
  let fixture: ComponentFixture<ReplaceCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaceCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
