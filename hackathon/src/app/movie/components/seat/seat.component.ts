import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  @Input() seat: number;
  @Input() pos: number[];
  @Output() pick = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.seat == 0) this.pick.emit(this.pos);
  }

}
