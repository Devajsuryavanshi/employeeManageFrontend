import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoloyeeAppComponent } from './emoloyee-app.component';

describe('EmoloyeeAppComponent', () => {
  let component: EmoloyeeAppComponent;
  let fixture: ComponentFixture<EmoloyeeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoloyeeAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoloyeeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
