import { Component } from '@angular/core';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nauka_jazdy';
  width!: number;
  navigationMenu: boolean = true

  constructor(private service: ServiceService){}


  ngOnInit() {
    window.addEventListener("scroll", this.reveal)
    this.service.subActualWidth$().subscribe(data => this.width = data)

    // https
    if (location.protocol !== "https:") {
      location.protocol = "https:";
    }
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


  toggleMenu() {
    let nav = document.querySelector('.navMenu')
    nav?.classList.toggle('hide')
    nav?.classList.toggle('navMenuAnimate')
    this.navigationMenu = !this.navigationMenu
    console.log(nav)
    console.log(this.navigationMenu)
  }



}


export interface Form {
  Imie?: string,
  Nazwisko?: string,
  telefon?:number,
  email?:string,
  text?: string
}
