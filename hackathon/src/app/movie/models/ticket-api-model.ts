export interface TicketApiModel {
    "id": number,
    "userId": number,
    "sessionId": number,
    "seat": {
        "row": number,
        "col": number
    }
}