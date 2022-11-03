import { HostListener, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LongTextPipe } from './shared/long-text.pipe';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  updates: any = [
    {
      title: 'Otwieramy biuro nauki jazdy w Prusicach!',
      shortDescription: 'W październiku otworzyliśmy nasze nowe biuro nauki Jazdy w Prusicach, mieści się ono przy Prusickim Rynku, ul. Ludowa 4',
      description: '',
      tags: ['Description', 'short story', 'etc'],
      date: '24/10/2022 | 14:35',
      images: [
        { url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        }
      ],
      mainImage: {
          url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        },
        id:1,
    },
    {
      title: 'Tytuł',
      shortDescription: ' This is short description of title',
      tags: ['Description', 'short story', 'etc'],
      images: [
        { url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        }
      ],
      mainImage: {
          url: '../../assets/logo/logo.jpeg',
          title: 'Tytuł obrazka',
          alt: "Tekst alternatywny SEO",
        },
        id:2,
    },
  ]

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
    this.breakpointNav = (this.actualWidth <= 500) ? 1: 5
    this.footerHeight = (this.actualWidth <= 1000) ? 60: 150

    this.tableOfNav[0] = mainPrice!.getBoundingClientRect().top + window.scrollY-220;
    this.tableOfNav[1] = contact!.getBoundingClientRect().top + window.scrollY-500;
    this.tableOfNav[2] = logo!.getBoundingClientRect().top + window.scrollY-220;

    // console.log(this.tableOfNav)

    // console.log(window.innerWidth)


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
