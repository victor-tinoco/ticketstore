import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { WalletPageComponent } from './pages/wallet-page/wallet-page.component';


@NgModule({
  declarations: [TicketCardComponent, WalletPageComponent],
  exports: [
    TicketCardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TicketModule { }
