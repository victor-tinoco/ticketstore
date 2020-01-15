import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattersComponent } from './seatters.component';

describe('SeattersComponent', () => {
  let component: SeattersComponent;
  let fixture: ComponentFixture<SeattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
