import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { getAuth } from "firebase/auth";
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = true
  private loggedIn$ = new Subject()

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  login(email:string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email,password).then( res => {

      localStorage.setItem('token', 'true')
      console.log(res)
      if(res.user?.emailVerified == true) {
        this.router.navigate(['/AdminPanel/Dashboard'])
        this.loggedIn = true
        this.loggedIn$.next(this.loggedIn)
      } else {

        this.router.navigate(['/verify'])
      }


    }, err => {
      alert(err.message)
      this.router.navigate(['/login'])
    })
  }

  // register

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email,password).then( res => {
      alert('Registration Successful')
      this.sendEmailForVerification(res.user)
    }, err => {
      alert(err.message)
      this.router.navigate(['/Register'])
    })
  }

  // logout

  logout() {
    this.fireAuth.signOut().then( (res: any) => {
      localStorage.removeItem('token');
      this.loggedIn = true
      this.loggedIn$.next(this.loggedIn)
      this.router.navigate(['/Login'])


    }, (err: any) => {
      alert(err.message)
      this.router.navigate(['/Login'])
    })
  }

  // forgot password

  forgotPassword(email:string) {
    this.fireAuth.sendPasswordResetEmail(email).then( () => {
      this.router.navigate(['/verify'])
    }, err => {
      alert('Something went wrong')
    }
    )
  }

  // email verification

  sendEmailForVerification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/Login']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  // get current user

  getCurrentUser() {
    const auth = getAuth();
    const user = auth.currentUser;

   return user?.email
  }


  // checking if user is logged in
 async checkIfUserIsLoggedIn() {
   await this.fireAuth.onAuthStateChanged( (user) => {
      if(user) {
        this.router.navigate(['/AdminPanel/Dashboard'])
        return user?.email
      }
      else {
        this.router.navigate(['/Login'])
        return ''
      }
    })
  }



  subLoggedIn$(){
    return this.loggedIn$.asObservable()
  }

}


