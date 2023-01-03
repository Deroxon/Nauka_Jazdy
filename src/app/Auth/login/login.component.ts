import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any
  password: any

  constructor(private auth: AuthService, private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.checkIfUserIsLoggedIn()
  }

  login() {
    this.auth.login(this.email , this.password)
  }

}
