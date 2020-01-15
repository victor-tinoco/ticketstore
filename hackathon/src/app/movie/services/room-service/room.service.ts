import { Injectable } from '@angular/core';
import { RoomApiModel } from '../../models/room-api-model';
import { Store } from 'src/app/core/models/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends Store<RoomApiModel>{

  constructor(private http: HttpClient) {
    super({
      "id": null,
      "seatters": {
        "rowNum": null,
        "colNum": null
      }
    });
  }

  public load(): void {
    this.http.get<RoomApiModel>('http://localhost:3000/rooms').subscribe(
      {
        next: (data) => { this.setState(data); },
        error: (err) => { }
      }
    )
  }

  public getById(id: number):Observable<RoomApiModel>{
    return this.http.get<RoomApiModel>('http://localhost:3000/rooms/' + id);
  }

}