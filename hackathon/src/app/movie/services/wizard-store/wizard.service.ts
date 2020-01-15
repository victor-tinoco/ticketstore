import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/models/store';
import { WizardApiModel } from '../../models/wizard-api-model';
import { SessionApiModel } from '../../models/session-api-model';
import { RoomService } from '../room-service/room.service';
import { TicketService } from '../ticket-service/ticket.service';
import { AuthService } from 'src/app/login/services/auth/auth.service';

@Injectable()
export class WizardService extends Store<WizardApiModel>{

  private wizard: WizardApiModel = {
    room: null,
    session: null,
    movie: null,
    tickets: [],
    newTicket: null
  };

  constructor(private roomService: RoomService, private ticketService: TicketService, private loginService: AuthService) {
    super(null);
    this.setState(this.wizard);
  }

  public setWizardSession(session: SessionApiModel) {
    this.wizard.session = session;
    if (this.wizard.session) {

      this.roomService.getById(this.wizard.session.roomId).
        subscribe(room => {
          this.wizard.room = room;
          this.setState(this.wizard);
        });

      this.ticketService.getBySession(this.wizard.session.id).
        subscribe(tickets => {
          this.wizard.tickets = tickets;
          this.setState(this.wizard);
        })

    }

  }

  public setNewTicket(pos: number[]) {
    this.wizard = this.state;
    
    this.wizard.newTicket = {
      "id": null,
      "userId": null,
      "sessionId": null,
      "seat": {
        "row": null,
        "col": null
      }
    }

    this.wizard.newTicket.userId = this.loginService.loggedUser.id;
    this.wizard.newTicket.sessionId = this.wizard.session.id;
    this.wizard.newTicket.seat.row = pos[0];
    this.wizard.newTicket.seat.col = pos[1];
    
    this.setState(this.wizard);

    console.log(this.wizard.newTicket);
    
  }

}

