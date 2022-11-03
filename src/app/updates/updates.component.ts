import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  updates: any;
  width!:number;


  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.updates = this.service.updates;
    this.service.subActualWidth$().subscribe(data => this.width = data)

  }

}
