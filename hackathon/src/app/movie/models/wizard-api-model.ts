import { RoomApiModel } from './room-api-model';
import { SessionApiModel } from './session-api-model';
import { MovieApiModel } from './movie-api-model';
import { TicketApiModel } from './ticket-api-model';

export interface WizardApiModel {
    room: RoomApiModel,
    session: SessionApiModel,
    movie: MovieApiModel,
    tickets: TicketApiModel[],
    newTicket: TicketApiModel
}