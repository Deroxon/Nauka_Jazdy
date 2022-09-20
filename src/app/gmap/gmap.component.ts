import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  webWidth:any = window.innerWidth

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.subActualWidth$().subscribe(data => this.webWidth = data )
  }

}
