import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  RouteParam$: any;
  update: any;
  updateId: any;


  constructor(private activatedRoute: ActivatedRoute, private service: ServiceService) { }



  ngOnInit(): void {
    this.RouteParam$ = this.activatedRoute.paramMap.subscribe((param) => {
      this.updateId = param.get('id')
      this.update = this.service.updates.find( (x:any) => x.id == this.updateId);
    })


  }

}
