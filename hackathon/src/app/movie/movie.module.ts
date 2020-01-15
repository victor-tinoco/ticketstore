import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { DashboardMoviesPageComponent } from './pages/dashboard-movies-page/dashboard-movies-page.component';
import { MovieService } from './services/movie-service/movie.service';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MovieSinopseComponent } from './components/movie-sinopse/movie-sinopse.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieStepperPageComponent } from './pages/movie-stepper-page/movie-stepper-page.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SeatComponent } from './components/seat/seat.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeattersComponent } from './components/seatters/seatters.component';
import { WizardService } from './services/wizard-store/wizard.service';
import { RoomService } from './services/room-service/room.service';
import { SessionService } from './services/session-service/session.service';
import { TicketService } from './services/ticket-service/ticket.service';
import { MatInputModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { SubmitNewTicketComponent } from './components/submit-new-ticket/submit-new-ticket.component';
import { LoginModule } from '../login/login.module';
import { TicketModule } from '../ticket/ticket.module';

@NgModule({
  declarations: [
    MovieCardComponent,
    DashboardMoviesPageComponent,
    MovieSinopseComponent,
    MovieStepperPageComponent, 
    SeatComponent, SeattersComponent, SubmitNewTicketComponent,
  ],
  exports: [
    DashboardMoviesPageComponent,
    MovieSinopseComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    LoginModule,
    TicketModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MovieService,
    RoomService,
    SessionService,
    TicketService,
    WizardService
  ]
})
export class MovieModule { }
