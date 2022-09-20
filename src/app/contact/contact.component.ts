import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Form} from "../app.component"
import { HttpService } from '../http.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ServiceService } from '../service.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);


 @Input() name: string = ''
  surName: string = ''
  phone?: number;
  emailed: string = ''
  textArea?: string;
  emailCorrect: boolean = false
  correctDate: any

  word:string = ''



  constructor(private http: HttpService, private service:ServiceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  checkNoNumbers(inputTxt:any) {

    let letters = /^[a-z ,.'-]+$/i
    if(inputTxt.match(letters) ) {
     // console.log('yes!', inputTxt)
      return true
    } else {
     // console.log('lol, nie tak!', inputTxt)
      return false}
  }

  checkNumbers(event:any) {

    let numbers = /^[0-9]+$/;

    if(event.target.value.match(numbers)) {
      return true
    }else {
      event.target.value = event.target.value.slice(0, -1)
      return false
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Proszę wpisać dane';
    }
    if(this.email.hasError('email')) {
      return'Nie prawidłowy adres email'
    }
    else {
      this.emailCorrect = true
      return ''
    }
  }

  // name and surname validate
  emitWords(event:any) {
    // got a input value of this
    let object = {
      name: this.name,
      surName: this.surName,
      phone: this.phone,
      emailed: this.emailed,
      textArea: this.textArea
    }
    if(this.checkNoNumbers(event.target.value)) {
      this.service.changeFormDetails(object)
    }
    else {
      event.target.value = event.target.value.slice(0, -1)
    }

  }
    checkBlock(e:Event) {
      let date = new Date()
      let blockDate = date.toLocaleTimeString().split(':').join('')
      if(
        (Number(blockDate) - Number(localStorage.getItem('blockDate'))) > 600  ||  localStorage.getItem('date') !== date.toLocaleDateString()) {
          localStorage.setItem('Emails_Send', '0')
          this.sendEmail(e)
        }

    }



  //emailjs with Local Storage
   public async sendEmail(e: Event) {
    let getLocalStorage = Number(localStorage.getItem('Emails_Send'))
    getLocalStorage +=1
    localStorage.setItem('Emails_Send', String(getLocalStorage))

    let config = new MatSnackBarConfig()
    config.duration = 1000

    if(getLocalStorage >= 4) {
      let date = new Date()
      this._snackBar.open(`Musisz poczekać jeszcze ${600 - (Number(date.toLocaleTimeString().split(':').join('')) - Number(localStorage.getItem('blockDate')))} sekund zanim wyślesz kolejnego maila.`, '', config)
      this.checkBlock(e)
    }

    else {
      e.preventDefault();
      emailjs.sendForm('service_reu91lf', 'template_3ljgqb2', e.target as HTMLFormElement, '42GOWnH9C6RwDAaqE')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      this._snackBar.open('Mail został wysłany, dziękujemy za kontakt!', '', config)
    }



      // setting sercure block
      if(localStorage.getItem('Emails_Send') === '3') {
        let date = new Date()
        localStorage.setItem('date', date.toLocaleDateString())
        localStorage.setItem('blockDate', date.toLocaleTimeString().split(':').join(''))
      }
  }

}
