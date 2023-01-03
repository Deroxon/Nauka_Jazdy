import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password: any;
  email: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  register() {
    this.auth.register(this.email, this.password)
  }

}
