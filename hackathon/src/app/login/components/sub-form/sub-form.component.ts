import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserApiModel } from '../../models/user-api-model';
import { UserStoreService } from '../../services/user/user-store.service';
import { Router } from '@angular/router';
import { MustMatch } from './helpers/must-match.validator';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.scss']
})
export class SubFormComponent implements OnInit {

  pageForm: FormGroup;

   createForm() {
    this.pageForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,
      Validators.email]],  
      password: ['', [Validators.required]],
      passwordAgain: ['', [Validators.required]],
    }, {
      validator: MustMatch('password', 'passwordAgain')
  });
  }
  saving: boolean = false;

  constructor(
    private store: UserStoreService,
    private router: Router,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private title: Title) { 
      this.createForm();  
    }

  ngOnInit() {
    this.title.setTitle('Ticket Store Cadastro');
  }

  save(): void {
    if (this.pageForm.valid && !this.saving) {
      this.saving = true;

      const user: UserApiModel = this.pageForm.value as UserApiModel;
      this.store.add(user).subscribe(data => {
        this.saving = false;
        //window.alert('Cadastrado! Agora faça o login.');
        this.snackBar.open('Cadastrado! Agora faça o login.','OK', { duration: 3000});
        this.router.navigate(['/login']);
      });
    }
  }
}
