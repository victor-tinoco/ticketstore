import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { DashboardMoviesPageComponent } from './movie/pages/dashboard-movies-page/dashboard-movies-page.component';
import { MenuPagLayoutComponent } from './core/movies-layout/menu-pag-layout/menu-pag-layout.component';
import { MovieStepperPageComponent } from './movie/pages/movie-stepper-page/movie-stepper-page.component';
import { GuardService } from './login/services/guard/guard.service';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { SubFormComponent } from './login/components/sub-form/sub-form.component';
import { WalletPageComponent } from './ticket/pages/wallet-page/wallet-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MenuPagLayoutComponent,
    children: [
      { path: '', component: DashboardMoviesPageComponent, canActivate: [GuardService]},
      { path: ':id', component: MovieStepperPageComponent, canActivate: [GuardService]}
    ],
    canActivate: [GuardService]
  },
  {
    path: 'tickets',
    component: MenuPagLayoutComponent,
    children: [
      { path: '', component: WalletPageComponent, canActivate: [GuardService]},
    ],
    canActivate: [GuardService]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    children: [
      { path: '', component: LoginFormComponent }
    ]
  },
    {
      path: 'subscribe',
      component: LoginPageComponent,
      children: [
        { path: '', component: SubFormComponent }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
