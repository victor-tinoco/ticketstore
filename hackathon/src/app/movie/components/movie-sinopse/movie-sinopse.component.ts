import { Component, OnInit, Input } from '@angular/core';
import { MovieApiModel } from "../../models/movie-api-model";
import { SessionApiModel } from '../../models/session-api-model';
import { SessionService } from '../../services/session-service/session.service';
import { WizardService } from '../../services/wizard-store/wizard.service';
import { WizardApiModel } from '../../models/wizard-api-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-sinopse',
  templateUrl: './movie-sinopse.component.html',
  styleUrls: ['./movie-sinopse.component.scss']
})
export class MovieSinopseComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  dates: Date[] = [];

  session: SessionApiModel;
  sessions: SessionApiModel[];
  showSessions: SessionApiModel[] = [];

  movie: MovieApiModel;

  wizard: WizardApiModel;

  formStepOne: FormGroup;


  constructor(private sessionsStore: SessionService, 
    private wizardStore: WizardService, 
    private _formBuilder: FormBuilder) {
    this.formStepOne = this._formBuilder.group({
      selectSession: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.wizardStore.state$.subscribe(wizard => {
      this.wizard = wizard;
      this.movie = this.wizard.movie;

      if (this.movie) {
        this.sessionsStore.getByMovies(this.movie.id).
          subscribe(sessions => {
            if (JSON.stringify(this.sessions) !== JSON.stringify(sessions)) {
              this.sessions = sessions;
              this.listSessionDates(sessions);
            }
          });
      }
    });

  }

  selectedSession(session: SessionApiModel) {
    this.wizardStore.setWizardSession(session);
  }

  myFilter = (d: Date): boolean => {
    let dates: Date[] = this.dates;
    return dates.findIndex(date => d.toDateString() == date.toDateString()) >= 0;
  }

  listSessionDates(sessions: SessionApiModel[]) {
    for (let i = 0; i < sessions.length; i++) {
      this.dates.push(new Date(sessions[i].date))
    }
  }

  dateChange($event) {
    this.showSessions = this.sessions.filter(
      (element) => {
        return $event.value.toDateString() == new Date(element.date).toDateString();
      }
    )
    this.showSessions.sort(function(a,b) {
      return a.time < b.time ? -1 : a.time > b.time ? 1 : 0;
  });
  }

}

