import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../services/wizard-store/wizard.service';
import { SessionApiModel } from '../../models/session-api-model';
import { WizardApiModel } from '../../models/wizard-api-model';
import { RoomApiModel } from '../../models/room-api-model';
import { RoomService } from '../../services/room-service/room.service';
import { TicketApiModel } from '../../models/ticket-api-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-seatters',
  templateUrl: './seatters.component.html',
  styleUrls: ['./seatters.component.scss']
})
export class SeattersComponent implements OnInit {

  session: SessionApiModel;
  room: RoomApiModel;
  tickets: TicketApiModel[]

  wizard: WizardApiModel;

  formStepTwo: FormGroup;

  seatters;

  pos: number[];

  position: string;

  constructor(private wizardStore: WizardService, private roomService: RoomService, private _formBuilder: FormBuilder) {
    this.formStepTwo = this._formBuilder.group({
      seatPosition: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.wizardStore.state$.
      subscribe(wizard => {

        this.wizard = wizard;
        this.session = wizard.session;
        this.room = wizard.room;
        this.tickets = wizard.tickets;

        if (this.room) {
          this.makeArray();
        }

      });

  }

  makeArray(): void {

    let maxCol = this.room.seatters.colNum;
    let maxRow = this.room.seatters.rowNum;

    let s: number[][] = [[]];

    this.fill2DimensionsArray(s, maxRow, maxCol);

    for (let i = 0; i < this.tickets.length; i++) {
      let col = this.tickets[i].seat.col;
      let row = this.tickets[i].seat.row;
      s[row][col] = 2;
    }

    this.seatters = s;
  }

  private fill2DimensionsArray(arr, rows, columns) {
    for (var i = 0; i < rows; i++) {
      arr.push([])
      for (var j = 0; j < columns; j++) {
        arr[i].push(0);
      }
    }
  }

  eventChild(pos: number[]) {

    if (this.pos) {
      this.seatters[this.pos[0]][this.pos[1]] = 0;
    }

    this.pos = pos;

    this.position = "Fileira: " + this.pos[0] + " Cadeira: " + this.pos[1];

    this.wizardStore.setNewTicket(pos);

    this.seatters[this.pos[0]][this.pos[1]] = 1;

  }

}
