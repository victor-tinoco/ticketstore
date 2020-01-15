import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-menu-pag-layout',
  templateUrl: './menu-pag-layout.component.html',
  styleUrls: ['./menu-pag-layout.component.scss']
})
export class MenuPagLayoutComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _snackBar: MatSnackBar, private title: Title) {
  
}

ngOnInit() {
  this.title.setTitle('Ticket Store Filmes');
}

openSnackBar() {
  this._snackBar.open('deslogado!', 'ok', {
    duration: 2000,
  });
}
}

