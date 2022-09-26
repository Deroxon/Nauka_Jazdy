import { HostListener, Injectable } from '@angular/core';
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
  positionsNav: Array<any> = []
  footerHeight!: number;
  tableOfNav: Array<number> = []


  breakpointOffer$ = new Subject()
  rowHeight$ = new Subject()
  breakpointNav$ = new Subject()
  actualWidth$ = new Subject()
  formObject$ = new Subject()
  footerHeight$ = new Subject()
  tableOfNav$ = new Subject()

  constructor() { }

  // Galeria - zamiast kursy
  // dodaj sekcje z galerią,
  // uzupełnij nawigację aby działało to tak jak chcesz
  ngOnInit(): void {
    this.onResize(window)
  }

  onResize(event: any) {
    let mainPrice = document.querySelector('.h1MainPrice')
    let contact = document.querySelector('.contactH1')
    let logo =  document.querySelector('.logo')

    this.actualWidth = event.target.innerWidth
    this.breakpointOffer = (this.actualWidth <= 1000) ? 1 : 4
    this.rowHeight =  (window.innerWidth <= 1000) ? 125 : 250
    this.breakpointNav = (this.actualWidth <= 400) ? 1: 4
    this.footerHeight = (this.actualWidth <= 1000) ? 60: 150

    this.tableOfNav[0] = mainPrice!.getBoundingClientRect().top + window.scrollY-220;
    this.tableOfNav[1] = contact!.getBoundingClientRect().top + window.scrollY-500;
    this.tableOfNav[2] = logo!.getBoundingClientRect().top + window.scrollY-220;

    this.tableOfNav$.next(this.tableOfNav)
    this.breakpointOffer$.next(this.breakpointOffer)
    this.breakpointNav$.next(this.breakpointNav)
    this.rowHeight$.next(this.rowHeight)
    this.actualWidth$.next(this.actualWidth)
    this.footerHeight$.next(this.footerHeight)
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
  subFooterHeight$(): Observable<any> {
    return this.footerHeight$.asObservable()
  }

  subTableofNav$(): Observable<any> {
    return this.tableOfNav$.asObservable()
  }

}
