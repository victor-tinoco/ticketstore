import { Component, OnInit, Input } from '@angular/core';
import { TicketApiModel } from 'src/app/movie/models/ticket-api-model';
import { SessionApiModel } from 'src/app/movie/models/session-api-model';
import { SessionService } from 'src/app/movie/services/session-service/session.service';
import { MovieService } from 'src/app/movie/services/movie-service/movie.service';
import { MovieApiModel } from 'src/app/movie/models/movie-api-model';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

  session: SessionApiModel;
  movie: MovieApiModel;
  date: string;

  @Input() ticket: TicketApiModel;
  // Devemos fazer um get pelo id que vem do input para retornar a sessão, pela qual teremos infos sobre data, filme etc

  constructor(private sessionService: SessionService,
    private movieService: MovieService) {
  }
  
  ngOnInit() {
    this.sessionService.getById(this.ticket.sessionId).
      subscribe( session => {
        this.session = session;
        this.date = this.session.date.substring(0, 6) + this.session.date.substring(8, 10);

        this.movieService.getById(this.session.movieId).
          subscribe( movie => {
            this.movie = movie;
          });
      });

    
  }
}
