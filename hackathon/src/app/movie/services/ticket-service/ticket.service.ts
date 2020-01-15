import { Injectable } from '@angular/core';
import { TicketApiModel } from '../../models/ticket-api-model';
import { Store } from 'src/app/core/models/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends Store<TicketApiModel[]>{

  constructor(private http: HttpClient) {
    super([]);
  }

  public load(): void {
    this.http.get<TicketApiModel[]>('http://localhost:3000/tickets').subscribe(
      {
        next: (data) => { this.setState(data); },
        error: (err) => { }
      }
    )
  }

  public add(ticket: TicketApiModel): Observable<any> {
    return this.http.post('http://localhost:3000/tickets', ticket);
  }

  public getBySession(sessionId: number):Observable<TicketApiModel[]>{
    return this.http.get<TicketApiModel[]>('http://localhost:3000/tickets?sessionId=' + sessionId);
  }

  public getByUser(userId: number):Observable<TicketApiModel[]>{
    return this.http.get<TicketApiModel[]>('http://localhost:3000/tickets?userId=' + userId);
  }


}