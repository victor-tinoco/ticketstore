import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/models/store';
import { SessionApiModel } from '../../models/session-api-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends Store<SessionApiModel[]>{

  constructor(private http: HttpClient) {
    super([]);
  }

  public load(): void {
    this.http.get<SessionApiModel[]>('http://localhost:3000/sessions').subscribe(
      {
        next: (data) => { this.setState(data); },
        error: (err) => { }
      }
    )
  }

  public getByMovies(movieId: number):Observable<SessionApiModel[]>{
    return this.http.get<SessionApiModel[]>('http://localhost:3000/sessions?movieId=' + movieId);
  }

  public getById(id: number):Observable<SessionApiModel>{
    return this.http.get<SessionApiModel>('http://localhost:3000/sessions/' + id);
  }

}
