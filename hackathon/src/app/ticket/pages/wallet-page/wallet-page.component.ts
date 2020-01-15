import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/movie/services/ticket-service/ticket.service';
import { TicketApiModel } from 'src/app/movie/models/ticket-api-model';
import { AuthService } from 'src/app/login/services/auth/auth.service';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.scss']
})

export class WalletPageComponent implements OnInit {

  tickets: TicketApiModel[];

  constructor(private ticketService: TicketService,
    private login:AuthService) { }

  ngOnInit() {
    this.ticketService.getByUser(this.login.loggedUser.id).
      subscribe(tickets => {
        this.tickets = tickets;
        console.log(this.tickets);
        console.log(this.login.loggedUser.id);
        
      });
  }

}
