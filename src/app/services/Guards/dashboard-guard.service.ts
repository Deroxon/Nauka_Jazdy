import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuardService implements CanActivate {

  constructor(private router: Router, private fireAuth: AngularFireAuth, private auth: AuthService) { }

  loggedIn:any;


  ngOnInit() {
    this.auth.subLoggedIn$().subscribe( data => {
      this.loggedIn = data
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log('Auth Working')
    let token = localStorage.getItem('token')

    if( token == 'true'// && this.auth.getCurrentUser()=== 'oskjulitalasek@gmail.com'
    ) {
      return true
    }
    else {
      alert("this user doesnt have rights to login to the dashboard")
      this.router.navigate([''])
      return false

    }


  }
}
