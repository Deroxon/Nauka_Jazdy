import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service: ServiceService) { }
  breakpoint: number = 1;
  heightFoot: number = 60;

  ngOnInit(): void {
    this.service.subBreakpointOffer$().subscribe(data => this.breakpoint =data )
    this.service.subFooterHeight$().subscribe(data => this.heightFoot = data)
    if(window.innerWidth > 1000) {
      this.breakpoint = 4
      this.heightFoot = 150
    }

  }

}
