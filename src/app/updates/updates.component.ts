import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  
  updates = [
    { title: 'Zaczynamy szkolić na kurs prawa Jazdy!', 
      date: new Date(09,09,2022), 
      description: 'Dnia takiego i takiego otworzyliśmy naszą szkołę nauki jazdy w Prusicach! Szkolimy kierowców na egzamin kategorii B1.', 

      comments: [ {userName: 'Mirosław żelek', date: new Date(10, 09, 2022), rating: 5, comment: 'Super szkoła jazdy!'} ], 
      tags: ['Nauka Jazdy', 'Prawo jazdy', 'Prawo jazdy kategorii B', 'Nauka Jazdy Prusice'], 
      images: [
        { url: "", alt: 'Tekst Alternatywny', title: 'Tytuł Obrazka'} ], 
      mainImage:[ 
        { url: "../assets/logo/logo.jpeg", alt: 'Tekst Alternatywny', title: 'Tytuł Obrazka'}   ],  }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
