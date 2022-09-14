import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})





export class PricingComponent implements OnInit {

  ulList: Array<string> = ['Materiały Szkoleniowe', '30 godzin zajęć teoretycznych, w formie e-learningowej, w tym 4 godziny zajęć 2 z ratownikiem medycznym z pierwszej pomocy przedmedycznej.', '30 godzin zajęć praktycznych', 'Plac manewrowy WORD Milicz', ' Możliwość płatności ratalnej', ]

  constructor() { }

  ngOnInit(): void {
  }

}


