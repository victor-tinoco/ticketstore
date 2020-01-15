import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../services/wizard-store/wizard.service';
import { TicketApiModel } from '../../models/ticket-api-model';
import { WizardApiModel } from '../../models/wizard-api-model';
import { TicketService } from '../../services/ticket-service/ticket.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-submit-new-ticket',
  templateUrl: './submit-new-ticket.component.html',
  styleUrls: ['./submit-new-ticket.component.scss']
})
export class SubmitNewTicketComponent implements OnInit {

  wizard: WizardApiModel;
  ticket: TicketApiModel;

  constructor(private wizardStore: WizardService) { }

  ngOnInit() {
    this.wizardStore.state$.
      subscribe(wizard => {
        this.wizard = wizard;
        this.ticket = this.wizard.newTicket;
        console.log(this.ticket);
      });
  }

}
