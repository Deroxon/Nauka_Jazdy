import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  breakpoint!:number;
  width!: number
  menu: boolean = false;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.subBreakpointNav$().subscribe(data => this.breakpoint =data)
    this.service.subActualWidth$().subscribe(data => this.width = data)
    this.breakpoint = (window.innerWidth <= 400) ? 1: 4

    if(this.width < 400) {
      this.menu = false
    }
  }





}
