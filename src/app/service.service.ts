import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  breakpointOffer!: number;
  breakpointNav!: number;
  rowHeight!:number;
  actualWidth!: number;
  formObject: object = {};


  breakpointOffer$ = new Subject()
  rowHeight$ = new Subject()
  breakpointNav$ = new Subject()
  actualWidth$ = new Subject()
  formObject$ = new Subject()

  constructor() { }

  // Galeria - zamiast kursy
  // dodaj sekcje z galerią,
  // uzupełnij nawigację aby działało to tak jak chcesz
  ngOnInit(): void {
    this.onResize(window)
  }

  onResize(event: any) {
    this.actualWidth = event.target.innerWidth
    this.breakpointOffer = (this.actualWidth <= 1000) ? 1 : 4
    this.rowHeight =  (window.innerWidth <= 1000) ? 125 : 250
    this.breakpointNav = (this.actualWidth <= 400) ? 1: 4

    console.log(window.innerWidth)

    this.breakpointOffer$.next(this.breakpointOffer)
    this.breakpointNav$.next(this.breakpointNav)
    this.rowHeight$.next(this.rowHeight)
    this.actualWidth$.next(this.actualWidth)
  }

  changeFormDetails(value:object) {
    this.formObject = value
    this.formObject$.next(value)

  }

  subBreakpointOffer$(): Observable<any> {
    return this.breakpointOffer$.asObservable()
  }

  subRowHeight$(): Observable<any> {
    return this.rowHeight$.asObservable()
  }

  subBreakpointNav$():Observable<any> {
    return this.breakpointNav$.asObservable()
  }

  subActualWidth$(): Observable<any> {
    return this.actualWidth$.asObservable()
  }

  subFormObject$(): Observable<any> {
    return this.formObject$.asObservable()
  }

}
