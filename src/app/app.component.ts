import { Component } from '@angular/core';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width!: number;
  navigationMenu: boolean = true
  
  constructor(private service: ServiceService){}
  
  ngOnInit() {
    this.service.subActualWidth$().subscribe(data => this.width = data)

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



