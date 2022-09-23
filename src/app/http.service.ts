import { Injectable } from "@angular/core";
import {Form} from "./app.component"
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: HttpClient) { }


}
