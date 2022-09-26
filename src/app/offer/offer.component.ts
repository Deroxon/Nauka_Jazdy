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
    text:"Sprawną komunikację z nami - odpowiemy na wszystkie Wasze pytania",
    icon: "settings_phone"
   },
   {
    text:"Elastyczność, dzięki której dostosujemy się do twoich potrzeb!",
    icon: "calendar_month"
   },
   {
    text:"Promocyjne ceny kursu oraz jazd dodatkowych",
    icon: "attach_money"
   },
   {
    text: 'W obrębie miasta dojazd do kursanta na zajęcia praktyczne',
    icon: 'directions_car'
   }
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
