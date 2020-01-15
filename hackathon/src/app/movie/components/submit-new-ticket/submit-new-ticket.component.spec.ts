import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNewTicketComponent } from './submit-new-ticket.component';

describe('SubmitNewTicketComponent', () => {
  let component: SubmitNewTicketComponent;
  let fixture: ComponentFixture<SubmitNewTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitNewTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
