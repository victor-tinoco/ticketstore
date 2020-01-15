import { Component, OnInit } from '@angular/core';
import { MovieApiModel } from "../../models/movie-api-model";
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie-service/movie.service';
import { SessionApiModel } from '../../models/session-api-model';
import { WizardService } from '../../services/wizard-store/wizard.service';
import { WizardApiModel } from '../../models/wizard-api-model';
import { TicketService } from '../../services/ticket-service/ticket.service';
import { MatSnackBar } from '@angular/material';
import { TicketApiModel } from '../../models/ticket-api-model';

@Component({
  selector: 'app-movie-stepper-page',
  templateUrl: './movie-stepper-page.component.html',
  styleUrls: ['./movie-stepper-page.component.scss']
})
export class MovieStepperPageComponent implements OnInit {

  movie: MovieApiModel;
  ticket: TicketApiModel;
  wizard: WizardApiModel;

  isDisabled: boolean;

  selectedSession: SessionApiModel;
  sessions: SessionApiModel[];

  constructor(private route: ActivatedRoute, 
    private moviesStore: MovieService, 
    private wizardStore: WizardService,
    private ticketService: TicketService, 
    private router: Router, 
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.moviesStore.getById(Number(id)).
      subscribe(movie => {
        this.movie = movie;
        let wizard = this.wizardStore.state;
        wizard.movie = movie;
        this.wizardStore.setState(wizard);
      });

      this.wizardStore.state$.
      subscribe(wizard => {
        this.wizard = wizard;
        this.ticket = this.wizard.newTicket;
      });
  }

  onClick() {
    this.ticketService.add(this.ticket).
      subscribe();

    this.isDisabled = true

    this.snackBar.open('Ticket registrado com sucesso','OK', { duration: 3000});

    const redirect = 'movies';
    setTimeout(() => {
      this.router.navigate([redirect]);
    }, 500);
    
  }
}
