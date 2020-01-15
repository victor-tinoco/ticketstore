import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  pageForm: FormGroup;

  constructor(private auth: AuthService, 
    private router: Router,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar) { 
    this.createForm();    
  }

  email: string;
  password: string;


  createForm() {
    this.pageForm = this.fb.group({
      email: ['', Validators.required], // valor padrão, validadores 
      password: ['', Validators.required],
      
    });
  }


  ngOnInit() {
  }

  logIn() {
    console.log('Making login with\nUser -> ' + this.email + '\nPassword -> ' + this.password);
    this.auth.login(this.email, this.password).subscribe((user) => {
      if (user) {
        const redirect = this.auth.redirectURL ? this.auth.redirectURL : '/movies';
        this.router.navigate([redirect]);
      } else
        this.snackBar.open('Erro ao efetuar login, tente novamente.','OK', { duration: 3000});
    });
  }
}
