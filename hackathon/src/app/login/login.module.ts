import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { UserStoreService } from './services/user/user-store.service';
import { AuthService } from './services/auth/auth.service';
import { GuardService } from './services/guard/guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubFormComponent } from './components/sub-form/sub-form.component';



@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, SubFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginPageComponent,
    LoginFormComponent,
    SubFormComponent
  ],
  providers: [
    UserStoreService,
    AuthService,
    GuardService
  ]
})
export class LoginModule { }
