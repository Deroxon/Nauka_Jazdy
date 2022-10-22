import { Injectable } from "@angular/core";
import {Form} from "./home/home.component"
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private http: HttpClient) { }

  send(form: Form): Observable<Form> {
    console.log('elo')
    return this.http.post<Form>('', form)
  }

}
