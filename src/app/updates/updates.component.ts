import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  updates: any;
  width!:number;


  constructor(private service: ServiceService, private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.updates = this.service.updates;
    this.service.subActualWidth$().subscribe(data => this.width = data)

  }

  information() {
    console.log(
      this.fireAuth,
      this.fireAuth.currentUser
    )
  }

}
