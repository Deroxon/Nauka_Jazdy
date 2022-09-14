import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent  {

  breakpoint:any;
  rowHeight: any;

  tableOffer = [
   {
    text:"Sprawną komunikację z nami!",
    icon: "settings_phone"
   },
   {
    text:"Dodatkowe Jazdy bez konieczności wykupienia całego kursu!",
    icon: "call_split"
   },
   {
    text:"Elastyczność, dzięki której dostosujemy się do twoich potrzeb!",
    icon: "calendar_month"
   },
   {
    text:"Niskie koszta Kursów",
    icon: "attach_money"
   },
  ]


  constructor(private service:ServiceService) { }


  ngOnInit() {

    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 4
    this.rowHeight =  (window.innerWidth <= 1000) ? 125 : 250
    this.service.subBreakpointOffer$().subscribe(data => this.breakpoint = data)
    this.service.subRowHeight$().subscribe(data => this.rowHeight = data)
  }

  checkSize(event:any) {
    this.service.onResize(event)
  }

}
