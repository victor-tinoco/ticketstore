import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MovieApiModel } from '../../models/movie-api-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnChanges {

  id: number;
  title: string;
  director: string
  photo: string;
  sinopse: string;

  @Input() movie: MovieApiModel;

  constructor(private router: Router) { }

  ngOnChanges() {
    if (this.movie != null){
      this.id = this.movie.id;
      this.title = this.movie.title;
      this.director = this.movie.director;
      this.photo = this.movie.photo;
      this.sinopse = this.movie.plot;
    }
    
  }

  onClick(){
    const redirect = 'movies/' + this.id;
    this.router.navigate([redirect]);
  }

}
