import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string
  password: string;
  error = '';

  constructor(private auth: AngularFireAuth, private router: Router) { }



  ngOnInit() {
  }

  login() {
    if (this.email.length <= 0 || this.password.length <= 0) {
      // Campos no pueden estar vacios
      return;
    }

    // Iniciar sesion
    this.auth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        // Usuario iniciado correctamente
        this.router.navigate(['inicio']);
      }, err => {
        console.log(err);
        this.error = err;
      });
  }

}
