import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  width!: number;

  constructor(private service: ServiceService){}


  ngOnInit() {
    window.addEventListener("scroll", this.reveal)
    this.service.subActualWidth$().subscribe(data => this.width = data)
  }

  reveal(){
    let reveals = document.querySelectorAll('.reveal');
    for(let i: number =0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 50;
      if(elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active')
      }
      else {
        reveals[i].classList.remove('active')
      }
    }
  }


 


}


export interface Form {
  Imie?: string,
  Nazwisko?: string,
  telefon?:number,
  email?:string,
  text?: string
}