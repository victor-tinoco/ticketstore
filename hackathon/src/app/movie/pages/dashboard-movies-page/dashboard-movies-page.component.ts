import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service/movie.service';
import { MovieApiModel } from '../../models/movie-api-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-movies-page',
  templateUrl: './dashboard-movies-page.component.html',
  styleUrls: ['./dashboard-movies-page.component.scss']
})
export class DashboardMoviesPageComponent implements OnInit {

  subscription: Subscription;
  moviesList: MovieApiModel[];
  moviesByCategory: {};
  categories = [];

  constructor(private store: MovieService) {
    this.subscription = this.store.state$.subscribe(movies => {
      //Adiciona os filmes recebidos via service para o moviesList
      this.moviesList = movies;
      //Adiciona o objeto categorizado a moviesByCategory
      this.moviesByCategory = this.groupBy(this.moviesList, 'category');
      //Adiciona a categories uma lista com as categorias listadas no moviesByCategory
      this.categories = Object.keys(this.moviesByCategory);      
    });
  } 

  ngOnInit() {
    this.store.load();
  }

  //Agrupa os filmes por uma categoria
  groupBy(objetoArray, propriedade){
    return objetoArray.reduce(function (acc, obj) {
      var key = obj[propriedade];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

}
