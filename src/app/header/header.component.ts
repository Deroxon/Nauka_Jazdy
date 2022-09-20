import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  breakpoint!:number;
  width: number = window.innerWidth
  menu: boolean = false;
  priceNav!: number
  contactNav!: number
  mainNav!: number

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.subBreakpointNav$().subscribe(data => this.breakpoint =data)
    this.service.subActualWidth$().subscribe(data => this.width = data)
    this.breakpoint = (window.innerWidth <= 400) ? 1: 4

    if(this.width < 400) {
      this.menu = false
    }

    // setting nav
    setTimeout(() => {

    let mainPrice = document.querySelector('.h1MainPrice')
    let contact = document.querySelector('.contactH1')
    let logo =  document.querySelector('.logo')



    let rect = mainPrice!.getBoundingClientRect().top + window.scrollY;
    let rect2 = contact!.getBoundingClientRect().top + window.scrollY;
    let rect3 = logo!.getBoundingClientRect().top + window.scrollY;



    this.priceNav= rect
    this.contactNav = rect2
    this.mainNav = rect3

    },1000 )
  }

  scroll(value:any) {
    console.log(value)
    window.scroll( 0, value );
  }





}
